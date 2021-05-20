import { Bitmap } from "..";
import { Tileset } from "../Tileset";

class Tile implements Bitmap {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  loaded: boolean;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.loaded = true;
  }

  getDrawable(): CanvasImageSource {
    return this.canvas;
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
            const canvas: HTMLCanvasElement = document.createElement("canvas");
            canvas.width = tileWidth;
            canvas.height = tileHeight;
            canvas.getContext("2d")?.drawImage(this.transformed, -x * tileWidth, -y * tileHeight);
            this.bitmaps.push(new Tile(canvas));
          }
        }
      }

      // free image bases
      this.image = null;
      this.transformed = null;

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

}