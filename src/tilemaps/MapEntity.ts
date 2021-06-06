import { MapLevel } from "./MapLevel";

export class MapEntity {
  type: string;
  x: number;
  y: number;
  level: MapLevel;
  fields: any = {};

  constructor(level: MapLevel, x: number, y: number, type: string) {
    this.level = level;
    this.x = x;
    this.y = y;
    this.type = type;
  }
}