import { MapLevel } from "./MapLevel";

export class MapLayer {
  static FLIP_X: number = 1;
  static FLIP_Y: number = 2;
  
  name: string;
  level: MapLevel;
  width: number;
  height: number;
  tiles: number[];
  flips: number[];

  constructor(level: MapLevel, name: string, width: number, height: number) {
    this.name = name;
    this.level = level;
    this.width = width;
    this.height = height;

    this.tiles = [];
    this.flips = [];
    for (let i=0;i<this.width*this.height;i++) {
      this.tiles.push(0);
      this.flips.push(0);
    }
  }

  getFlipFlags(x: number, y: number): number {
    if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)) {
      return 0;
    }
    const posIndex: number = x + (y * this.width);
    
    return this.flips[posIndex];
  }

  set(x: number, y: number, value: number): void {
    if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)) {
      return;
    }
    const posIndex: number = x + (y * this.width);
    this.tiles[posIndex] = value;
  }

  get(x: number, y: number): number {
    if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)) {
      return 0;
    }
    const posIndex: number = x + (y * this.width);
    
    return this.tiles[posIndex];
  }

  copy(level: MapLevel): MapLayer {
    const result: MapLayer = new MapLayer(level, this.name, this.width, this.height);
    for (let i=0;i<this.width*this.height;i++) {
      result.tiles[i] = this.tiles[i];
      result.flips[i] = this.flips[i];
    }

    return result;
  }
}