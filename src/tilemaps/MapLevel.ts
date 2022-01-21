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

  entitiesOfType(type: string): MapEntity[] {
    return this.entities.filter(entity => entity.type === type);
  }

  firstEntityOfType(type: string): MapEntity | undefined {
    return this.entities.find(entity => entity.type === type);
  }

  copy(id: string): MapLevel {
    const worldCopy: MapWorld = new MapWorld();
    worldCopy.gridSize = this.world.gridSize;
    worldCopy.loaded = this.world.loaded;
    worldCopy.tilesetScanline = this.world.tilesetScanline;
    worldCopy.tilesetSize = this.world.tilesetSize;

    const levelCopy: MapLevel = new MapLevel(worldCopy, id);
    levelCopy.width = this.width;
    levelCopy.height = this.height;
    levelCopy.worldX = this.worldX;
    levelCopy.worldY = this.worldY;
    levelCopy.fields = {...this.fields};

    for (const layer of this.layers) {
      const copy: MapLayer = layer.copy(levelCopy);
      levelCopy.layers.push(copy);
      levelCopy.layerByName[copy.name] = copy;
    }
    for (const entity of this.entities) {
      const copy: MapEntity = entity.copy(levelCopy);
      levelCopy.entities.push(copy);
    }
    return levelCopy;
  }
}
