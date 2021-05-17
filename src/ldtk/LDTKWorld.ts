import { Resource } from "../Resource";
import { LDTKLevel } from "./LDTKLevel";

export class LDTKWorld implements Resource {
  levels: Record<string, LDTKLevel> = {};
  gridSize: number = 0;
  tilesetScanline: number = 0;
  tilesetSize: number = 0;
  loaded: boolean = false;

  constructor() {
  }

  initOnFirstClick(): void {
  }

  load(json: any): LDTKWorld {
    this.gridSize = json.defaultGridSize;
    const tileset: any = json.defs.tilesets[0];
    this.tilesetScanline = tileset.pxWid / tileset.tileGridSize;
    this.tilesetSize = tileset.tileGridSize;

    for (const levelData of json.levels) {
      const level: LDTKLevel = new LDTKLevel(this, levelData);
      this.levels[level.id] = level;
    }

    this.loaded = true;
    return this;
  }
}