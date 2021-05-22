import { LDTKLevel } from "./LDTKLevel";

export class LDTKLayer {
  name: string;
  level: LDTKLevel;
  width: number;
  height: number;
  tiles: number[];

  constructor(level: LDTKLevel, data: any) {
    this.name = data.__identifier;
    this.level = level;
    this.width = data.__cWid;
    this.height = data.__cHei;

    const scanline: number = level.world.tilesetScanline;
    const tileSize: number = level.world.tilesetSize;

    this.tiles = [];
    for (let i=0;i<this.width*this.height;i++) {
      this.tiles.push(0);
    }

    for (const tile of data.gridTiles) {
      const x: number = Math.floor(tile.px[0] / data.__gridSize);
      const y: number = Math.floor(tile.px[1] / data.__gridSize);
      const posIndex: number = x + (y * this.width);

      const tx: number = Math.floor(tile.src[0] / tileSize);
      const ty: number = Math.floor(tile.src[1] / tileSize);

      const tileIndex: number = (ty * scanline) + tx;
      this.tiles[posIndex] = tileIndex + 1;
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