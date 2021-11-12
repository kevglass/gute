import { MapEntity } from "./MapEntity";
import { MapLayer } from "./MapLayer";
import { MapWorld } from "./MapWorld";

export class MapLevel {
  id: string;
  layers: MapLayer[] = [];
  layerByName: Record<string, MapLayer> = {};
  width!: number;
  height!: number;
  world: MapWorld;
  entities: MapEntity[] = [];
  fields: any = {};
  worldX: number = 0;
  worldY: number = 0;

  constructor(world: MapWorld, id: string) {
    this.world = world;
    this.id = id;
  }

  getFirstEntityOfType(type: string): MapEntity | null {
    for (const entity of this.entities) {
      if (entity.type === type) {
        return entity;
      }
    }

    return null;
  }

  copy(id: string): MapLevel {
    const worldCopy: MapWorld = new MapWorld();
    worldCopy.gridSize = this.world.gridSize;
    worldCopy.loaded = this.world.loaded;
    worldCopy.tilesetScanline = this.world.tilesetScanline;
    worldCopy.tilesetSize = this.world.tilesetSize;

    const result: MapLevel = new MapLevel(worldCopy, id);
    result.width = this.width;
    result.height = this.height;
    result.fields = {...this.fields};

    for (const layer of this.layers) {
      const copy: MapLayer = layer.copy(result);
      result.layers.push(copy);
      result.layerByName[copy.name] = copy;
    }
    for (const entity of this.entities) {
      const copy: MapEntity = entity.copy(result);
      result.entities.push(entity);
    }
    return result;
  }
}