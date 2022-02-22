import { Bitmap } from "..";
import { Tileset } from "../Tileset";

class Tile implements Bitmap {
  image: HTMLImageElement;
  width: number;
  height: number;
  loaded: boolean;
  x: number;
  y: number;
  scale: number;

  constructor(canvas: HTMLImageElement, x: number, y: number, width: number, height: number, scale: number) {
    this.image = canvas;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.loaded = true;
  }

  draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height, x, y, this.width * this.scale, this.height * this.scale);
  }

  drawScaled(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): void {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height, x, y, width, height);
  }

  initOnFirstClick(): void {
  }
}

export class TilesetImpl implements Tileset {
  loaded: boolean = false;
  tileWidth: number;
  tileHeight: number;
  originalTileWidth: number;
  originalTileHeight: number;
  image: HTMLImageElement | null;
  bitmaps: Bitmap[] = [];
  scanline: number = 0;
  tileCount: number = 0;
  tints: Record<string, HTMLImageElement> = {};
  scale: number;
  onLoaded: () => void = () => {};
  
  constructor(url: string, tileWidth: number, tileHeight: number, scale: number = 1) {
    this.tileWidth = this.originalTileWidth = tileWidth;
    this.tileHeight = this.originalTileHeight = tileHeight;
    this.scale = scale;
    this.image = new Image();
    this.image.onload = () => {
      this.scanline = Math.floor(this.image!.width / this.tileWidth);
      const depth: number = Math.floor(this.image!.height / this.tileHeight);
      this.tileCount = depth * this.scanline;

      // cut the image into pieces
      for (let y = 0; y < depth; y++) {
        for (let x = 0; x < this.scanline; x++) {
          this.bitmaps.push(new Tile(this.image!, x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight, scale));
        }
      }

      this.tileWidth *= scale;
      this.tileHeight *= scale;
      this.onLoaded();
      this.loaded = true;
    };
    this.image.src = url;
  }

  getTilesAcross(): number {
    return this.scanline;
  }

  getTileWidth(): number {
    return this.tileWidth;
  }

  getTileHeight(): number {
    return this.tileHeight;
  }

  getTileCount(): number {
    return this.tileCount;
  }

  initOnFirstClick(): void {
  }

  getTile(tile: number): Bitmap {
    return this.bitmaps[tile];
  }

  getTintedTile(tile: number, tintName: string, tint: number[]): Bitmap {
    const x:number = tile % this.scanline;
    const y:number = Math.floor(tile / this.scanline);
    let image: HTMLImageElement = this.tints[tintName];
    if (!image) {
      const canvas: HTMLCanvasElement = document.createElement("canvas");
      canvas.width = this.image!.width;
      canvas.height = this.image!.height;
      const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(this.image!, 0 , 0);
        const id: ImageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        for (let i=0;i<id.data.length;i+=4) {
          // leave black alone
          const avg: number = (id.data[i] + id.data[i+1] + id.data[i+2])/3;
          id.data[i] = Math.floor(avg * tint[0]);
          id.data[i + 1] = Math.floor(avg * tint[1]);
          id.data[i + 2] = Math.floor(avg * tint[2]);
        }
        ctx.putImageData(id, 0, 0);
      }
      image = new Image();
      image.src = canvas.toDataURL();
      this.tints[tintName] = image;
    }

    return new Tile(image, x * this.originalTileWidth, y * this.originalTileHeight, this.originalTileWidth, this.originalTileHeight, this.scale)
  }

  getBlockColorTile(tile: number, tintName: string, col: number[]): Bitmap {
    const x:number = tile % this.scanline;
    const y:number = Math.floor(tile / this.scanline);
    let image: HTMLImageElement = this.tints[tintName];
    if (!image) {
      const canvas: HTMLCanvasElement = document.createElement("canvas");
      canvas.width = this.image!.width;
      canvas.height = this.image!.height;
      const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(this.image!, 0 , 0);
        const id: ImageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        for (let i=0;i<id.data.length;i+=4) {
          id.data[i] = Math.floor(255 * col[0]);
          id.data[i + 1] = Math.floor(255 * col[1]);
          id.data[i + 2] = Math.floor(255 * col[2]);
          id.data[i + 3] = Math.floor(id.data[i+3] * col[3]);
        }
        ctx.putImageData(id, 0, 0);
      }
      image = new Image();
      image.src = canvas.toDataURL();
      this.tints[tintName] = image;
    }

    return new Tile(image, x * this.originalTileWidth, y * this.originalTileHeight, this.originalTileWidth, this.originalTileHeight, this.scale)
  }
}