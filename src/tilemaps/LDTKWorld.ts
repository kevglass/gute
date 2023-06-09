import { Resource } from "../Resource";
import { MapEntity } from "./MapEntity";
import { MapLayer } from "./MapLayer";
import { MapLevel } from "./MapLevel";
import { MapWorld } from "./MapWorld";

interface EntityRef {
  value: string|string[]
  entity: MapEntity
  field: string
}

export interface LDTKLayerCompression {
  from: string;
  to: string;
  offset: number;
}

export class LDTKWorld extends MapWorld implements Resource {
  static LAYER_COMPRESSIONS: LDTKLayerCompression[] = [];

  name: string = "world";
  tilesets: any[] = [];

  initOnFirstClick(): void {
  }

  load(file: string, loader: (file: string) => Promise<any>) : Promise<MapWorld> {
    this.name = file;

    return loader(file).then(json => {
      const entityRefs : EntityRef[] = []
      const entityMap: Record<string, MapEntity> = {}
      
      this.gridSize = json.defaultGridSize;
      const tileset: any = json.defs.tilesets[0];
      this.tilesets = json.defs.tilesets;
      this.tilesetScanline = tileset.pxWid / tileset.tileGridSize;
      this.tilesetSize = tileset.tileGridSize;

      let levels = json.levels;
      if (json.worlds && json.worlds.length > 0) {
        levels = [];
        for (const world of json.worlds) {
          levels = levels.concat(world.levels);
        }
      }

      const asyncLevels : Promise<MapLevel>[] = []
      for (const levelData of json.levels) {
        const level: MapLevel = new MapLevel(this, levelData.identifier);

        level.worldX = levelData.worldX;
        level.worldY = levelData.worldY;
        level.worldDepth = levelData.worldDepth;
        
        for (const fieldInstance of levelData.fieldInstances) {
          level.fields[fieldInstance.__identifier] = fieldInstance.__value;
        }

        let layers : Promise<any>
        if (levelData.layerInstances) // embedded layers
          layers = Promise.resolve(levelData)
        else if (levelData.externalRelPath) {
          layers = loader(levelData.externalRelPath)
        } else {
          throw new Error("Unknown LDTK file format")
        }

        asyncLevels.push(layers.then(data => {
          LDTKWorld.loadLayers(level, data.layerInstances, entityRefs, entityMap);
          
          if (level.layers.length > 0) {
            level.width = level.layers[0].width;
            level.height = level.layers[0].height;
          } else {
            level.width = levelData.pxWid / this.gridSize;
            level.height = levelData.pxHei / this.gridSize;
          }

          this.levels[level.id] = level;
          return level
        }))
      }

      return Promise.all(asyncLevels).then(value => {
        // resolve all entity ids now that we have all the data
        for (const ref of entityRefs) {
          if (ref.value instanceof Array) {
            const value : MapEntity[] = []
            for (const item of ref.value) {
              const entity = entityMap[item]
              if (entity) {
                value.push(entity)
              }
            }
            ref.entity.fields[ref.field] = value
          } else {
            const entity = entityMap[ref.value]
            if (entity) {
              ref.entity.fields[ref.field] = entity
            }
          }
        }

        this.loaded = true;
        return this
      })
    })
  }
  
  private static loadLayers(level: MapLevel, layerInstances: any, entityRefs: EntityRef[], entityMap: Record<string, MapEntity>) {
    for (const layerData of layerInstances) {
      if (layerData.__type === "Entities") {
        for (const entityData of layerData.entityInstances) {
          const entity: MapEntity = new MapEntity(level,
              entityData.px[0] / layerData.__gridSize,
              entityData.px[1] / layerData.__gridSize,
              entityData.width / layerData.__gridSize,
              entityData.height / layerData.__gridSize,
              entityData.__identifier)

          entityMap[entityData.iid] = entity
          for (const fieldInstance of entityData.fieldInstances) {
            switch (fieldInstance.__type) {
              case "EntityRef": // save information to resolve refs to entities later when all information will be loaded
                entityRefs.push({
                  value: fieldInstance.__value.entityIid,
                  entity: entity,
                  field: fieldInstance.__identifier
                })
                break;
              case "Array<EntityRef>":
                entityRefs.push({
                  value: (fieldInstance.__value as Array<any>).map(it => it.entityIid),
                  entity: entity,
                  field: fieldInstance.__identifier
                });
                break
              default:
                entity.fields[fieldInstance.__identifier] = fieldInstance.__value;
                break;
            }
          }
          level.entities.push(entity);
        }
      } else {
        const compression = LDTKWorld.LAYER_COMPRESSIONS.find(c => c.from === layerData.__identifier);
        let layer: MapLayer | undefined; 
        let offset = 0;
        if (compression) {
          const targetLayer = level.layerByName[compression.to];
          if (!targetLayer) {
            throw "Unable to find compression layer: " + compression.to;
          }

          layer = targetLayer;
          offset = compression.offset;
        } else {
          layer = new MapLayer(level, layerData.__identifier, layerData.__cWid, layerData.__cHei);
        }

        const tileset = (level.world as LDTKWorld).tilesets.find(t => t.uid === layerData.__tilesetDefUid);

        const scanline: number =tileset.pxWid / tileset.tileGridSize;
        const tileSize: number =tileset.tileGridSize;

        for (const tile of layerData.gridTiles) {
          const x: number = Math.floor(tile.px[0] / layerData.__gridSize);
          const y: number = Math.floor(tile.px[1] / layerData.__gridSize);
          const posIndex: number = x + (y * layer.width);

          const tx: number = Math.floor(tile.src[0] / tileSize);
          const ty: number = Math.floor(tile.src[1] / tileSize);

          const tileIndex: number = (ty * scanline) + tx;
          layer.tiles[posIndex] = tileIndex + 1 + offset;
          layer.flips[posIndex] = tile.f;
        }

        if (!compression) {
          level.layers.splice(0, 0, layer);
          level.layerByName[layer.name] = layer;
        }
      }
    }
  }
}
