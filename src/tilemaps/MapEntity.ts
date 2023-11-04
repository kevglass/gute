import { MapLevel } from "./MapLevel";

export class MapEntity {
  id?: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  level: MapLevel;
  fields: any = {};

  constructor(level: MapLevel, x: number, y: number, width: number, height: number, type: string) {
    this.level = level;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
  }

  copy(level: MapLevel): MapEntity {
    const result: MapEntity = new MapEntity(level, this.x, this.y, this.width, this.height, this.type);
    result.fields = {...this.fields};
    result.id = this.id;

    return result;
  }
}