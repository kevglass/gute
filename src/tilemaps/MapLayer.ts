import { MapLevel } from "./MapLevel";

export class MapLayer {
  name: string;
  level: MapLevel;
  width: number;
  height: number;
  tiles: number[];

  constructor(level: MapLevel, name: string, width: number, height: number) {
    this.name = name;
    this.level = level;
    this.width = width;
    this.height = height;

    this.tiles = [];
    for (let i=0;i<this.width*this.height;i++) {
      this.tiles.push(0);
    }
  }

  get(x: number, y: number): number {
    if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)) {
      return 0;
    }
    const posIndex: number = x + (y * this.width);
    
    return this.tiles[posIndex];
  }
}