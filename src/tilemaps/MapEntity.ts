import { MapLevel } from "./MapLevel";

export class MapEntity {
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
}