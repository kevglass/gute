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
}