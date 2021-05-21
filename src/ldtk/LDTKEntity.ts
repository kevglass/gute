import { LDTKLevel } from "./LDTKLevel";

export class LDTKEntity {
  type: string;
  x: number;
  y: number;
  level: LDTKLevel;
  fields: any = {};

  constructor(level: LDTKLevel, layerData: any, data: any) {
    this.level = level;
    this.type = data.__identifier;
    this.x = data.px[0] / layerData.__gridSize;
    this.y = data.px[1] / layerData.__gridSize;
    for (const fieldInstance of data.fieldInstances) {
      this.fields[fieldInstance.__identifier] = fieldInstance.__value;
    }
  }
}