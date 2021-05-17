import { LDTKEntity } from "./LDTKEntity";
import { LDTKLayer } from "./LDTKLayer";
import { LDTKWorld } from "./LDTKWorld";

export class LDTKLevel {
  id: string;
  layers: LDTKLayer[] = [];
  layerByName: Record<string, LDTKLayer> = {};
  width: number;
  height: number;
  world: LDTKWorld;
  entities: LDTKEntity[] = [];

  constructor(world: LDTKWorld, data: any) {
    this.world = world;
    this.id = data.identifier;

    for (const layerData of data.layerInstances) {
      if (layerData.__type === "Entities") {
        for (const entityData of layerData.entityInstances) {
          this.entities.push(new LDTKEntity(this, layerData, entityData));
        }
      } else {
        const layer: LDTKLayer = new LDTKLayer(this, layerData);

        this.layers.splice(0, 0, layer);
        this.layerByName[layer.name] = layer;
      }
    }

    if (this.layers.length > 0) {
      this.width = this.layers[0].width;
      this.height = this.layers[0].height;
    } else {
      this.width = data.pxWid / world.gridSize;
      this.height = data.pxHei / world.gridSize;
    }
  }

  getFirstEntityOfType(type: string): LDTKEntity | null {
    for (const entity of this.entities) {
      if (entity.type === type) {
        return entity;
      }
    }

    return null;
  }
}