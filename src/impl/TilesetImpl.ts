import { Bitmap } from "..";
import { Tileset } from "../Tileset";

class Tile implements Bitmap {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  loaded: boolean;
  x: number;
  y: number;
  
  constructor(canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number) {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.loaded = true;
  }

  draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.drawImage(this.canvas, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
  }

  drawScaled(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): void {
    ctx.drawImage(this.canvas, this.x, this.y, this.width, this.height, x, y, width, height);
  }

  initOnFirstClick(): void {
  }
}

export class TilesetImpl implements Tileset {
  loaded: boolean = false;
  tileWidth: number;
  tileHeight: number;
  image: HTMLImageElement | null;
  transformed!: HTMLCanvasElement | null;
  bitmaps: Bitmap[] = [];
  scanline: number = 0;
  tileCount: number = 0;
  tints: Record<string, HTMLCanvasElement> = {};

  constructor(url: string, tileWidth: number, tileHeight: number, scale: number = 1) {
    tileWidth *= scale;
    tileHeight *= scale;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;

    this.image = new Image();
    this.image.onload = () => {
      this.scaled(scale);

      if (this.transformed) {
        this.scanline = Math.floor(this.transformed.width / tileWidth);
        const depth: number = Math.floor(this.transformed.height / tileHeight);
        this.tileCount = depth * this.scanline;

        // cut the image into pieces
        for (let y = 0; y < depth; y++) {
          for (let x = 0; x < this.scanline; x++) {
            this.bitmaps.push(new Tile(this.transformed, x * tileWidth, y * tileHeight, tileWidth, tileHeight));
          }
        }
      }

      this.loaded = true;
    };
    this.image.src = url;
  }

  getTilesAcross(): number {
    return this.scanline;
  }

  scaled(scale: number): void {
    const srcCanvas: HTMLCanvasElement = document.createElement("canvas");
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const src: CanvasRenderingContext2D | null = srcCanvas.getContext("2d");
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

    if (src === null) {
      return;
    }
    if (ctx === null) {
      return;
    }
    if (this.image) {
      srcCanvas.width = this.image.width;
      srcCanvas.height = this.image.height;

      canvas.width = this.image.width * scale;
      canvas.height = this.image.height * scale;

      src.drawImage(this.image, 0, 0);
      const imageData: ImageData = src.getImageData(0, 0, this.image.width, this.image.height);
      const scaled: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      for (var row = 0; row < imageData.height; row++) {
        for (var col = 0; col < imageData.width; col++) {
          var sourcePixel = [
            imageData.data[(row * imageData.width + col) * 4 + 0],
            imageData.data[(row * imageData.width + col) * 4 + 1],
            imageData.data[(row * imageData.width + col) * 4 + 2],
            imageData.data[(row * imageData.width + col) * 4 + 3]
          ];
          for (var y = 0; y < scale; y++) {
            var destRow = row * scale + y;
            for (var x = 0; x < scale; x++) {
              var destCol = col * scale + x;
              for (var i = 0; i < 4; i++) {
                scaled.data[(destRow * scaled.width + destCol) * 4 + i] =
                  sourcePixel[i];
              }
            }
          }
        }
      }

      ctx.putImageData(scaled, 0, 0);

      this.transformed = canvas;
    }
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
    let canvas: HTMLCanvasElement = this.tints[tintName];
    if ((!canvas) && (this.transformed)) {
      canvas = document.createElement("canvas");
      canvas.width = this.transformed.width;
      canvas.height = this.transformed.height;
      this.tints[tintName] = canvas;
      const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(this.transformed, 0 , 0);
        const id: ImageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        for (let i=0;i<id.data.length;i+=4) {
          // leave black alone
          id.data[i] = Math.floor(id.data[i] * tint[0]);
          id.data[i + 1] = Math.floor(id.data[i+1] * tint[1]);
          id.data[i + 2] = Math.floor(id.data[i+2] * tint[2]);
        }
        ctx.putImageData(id, 0, 0);
      }
    }

    return new Tile(canvas, x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight)
  }
}