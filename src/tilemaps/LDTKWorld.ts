import { Resource } from "../Resource";
import { MapEntity } from "./MapEntity";
import { MapLayer } from "./MapLayer";
import { MapLevel } from "./MapLevel";
import { MapWorld } from "./MapWorld";

export class LDTKWorld extends MapWorld implements Resource {
  initOnFirstClick(): void {
  }

  load(json: any): LDTKWorld {
    this.gridSize = json.defaultGridSize;
    const tileset: any = json.defs.tilesets[0];
    this.tilesetScanline = tileset.pxWid / tileset.tileGridSize;
    this.tilesetSize = tileset.tileGridSize;

    for (const levelData of json.levels) {
      const level: MapLevel = new MapLevel(this, levelData.identifier);

      level.worldX = levelData.worldX;
      level.worldY = levelData.worldY;
      
      for (const fieldInstance of levelData.fieldInstances) {
        level.fields[fieldInstance.__identifier] = fieldInstance.__value;
      }

      for (const layerData of levelData.layerInstances) {
        if (layerData.__type === "Entities") {
          for (const entityData of layerData.entityInstances) {
            const entity: MapEntity = new MapEntity(level,
              entityData.px[0] / layerData.__gridSize,
              entityData.px[1] / layerData.__gridSize,
              entityData.width / layerData.__gridSize,
              entityData.height / layerData.__gridSize,
              entityData.__identifier)
            for (const fieldInstance of entityData.fieldInstances) {
              entity.fields[fieldInstance.__identifier] = fieldInstance.__value;
            }
            level.entities.push(entity);
          }
        } else {
          const layer: MapLayer = new MapLayer(level, layerData.__identifier,  layerData.__cWid, layerData.__cHei);

          const scanline: number = level.world.tilesetScanline;
          const tileSize: number = level.world.tilesetSize;

          for (const tile of layerData.gridTiles) {
            const x: number = Math.floor(tile.px[0] / layerData.__gridSize);
            const y: number = Math.floor(tile.px[1] / layerData.__gridSize);
            const posIndex: number = x + (y * layer.width);

            const tx: number = Math.floor(tile.src[0] / tileSize);
            const ty: number = Math.floor(tile.src[1] / tileSize);

            const tileIndex: number = (ty * scanline) + tx;
            layer.tiles[posIndex] = tileIndex + 1;
          }

          level.layers.splice(0, 0, layer);
          level.layerByName[layer.name] = layer;
        }
      }

      if (level.layers.length > 0) {
        level.width = level.layers[0].width;
        level.height = level.layers[0].height;
      } else {
        level.width = levelData.pxWid / this.gridSize;
        level.height = levelData.pxHei / this.gridSize;
      }

      this.levels[level.id] = level;
    }

    this.loaded = true;

    return this;
  }
}