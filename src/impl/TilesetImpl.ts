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
}

export class TilesetImpl implements Tileset {
  loaded: boolean = false;
  tileWidth: number;
  tileHeight: number;
  image: HTMLImageElement;
  bitmaps: Bitmap[] = [];
  scanline: number = 0;

  constructor(url: string, tileWidth: number, tileHeight: number) {
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;

    this.image = new Image();
    this.image.onload = () => {
      this.scanline = Math.floor(this.image.width / tileWidth);
      const depth: number = Math.floor(this.image.height / tileHeight);
      // cut the image into pieces
      for (let y=0;y<depth;y++) {
        for (let x=0;x<this.scanline;x++) {
          const canvas: HTMLCanvasElement = document.createElement("canvas");
          canvas.width = tileWidth;
          canvas.height = tileHeight;
          canvas.getContext("2d")?.drawImage(this.image, -x * tileWidth, -y * tileHeight);
          this.bitmaps.push(new Tile(canvas));
        }
      }
      this.loaded = true;
    };
    this.image.src = url;
  }

  getTile(tile: number): Bitmap {
    return this.bitmaps[tile];
  }

}