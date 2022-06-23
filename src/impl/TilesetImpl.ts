import { Bitmap } from "..";
import { shouldPrescaleTilesets } from "../Gute";
import { Tileset } from "../Tileset";
import { Palette } from "./Palette";

class Tile implements Bitmap {
  image: HTMLImageElement;
  width: number;
  height: number;
  loaded: boolean;
  x: number;
  y: number;
  scale: number;
  name: string = "tile";

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
  image: any | null;
  bitmaps: Bitmap[] = [];
  scanline: number = 0;
  tileCount: number = 0;
  tints: Record<string, HTMLImageElement> = {};
  tintTiles: Record<string, Bitmap[]> = {};
  scale: number;
  onLoaded: () => void = () => {};
  name: string;

  constructor(url: string, dataUrlLoader: Promise<Blob> | undefined, tileWidth: number, tileHeight: number, scale: number = 1, pal: Palette | undefined = undefined) {
    this.tileWidth = this.originalTileWidth = tileWidth;
    this.tileHeight = this.originalTileHeight = tileHeight;
    this.scale = scale;
    this.name = url;
    this.image = new Image();
  
    this.image.onload = () => {
      if (shouldPrescaleTilesets()) {
        const scaledImage = document.createElement("canvas");
        scaledImage.width = this.image!.width * scale;
        scaledImage.height = this.image!.height * scale;
        const ctx = scaledImage.getContext("2d");
        ctx!.imageSmoothingEnabled = false;
        (<any> ctx!).webkitImageSmoothingEnabled = false;
        ctx?.drawImage(this.image!, 0, 0, scaledImage.width, scaledImage.height);
        this.image = scaledImage;
        this.tileWidth *= scale;
        this.tileHeight *= scale;
        this.originalTileWidth *= scale;
        this.originalTileHeight *= scale;
        this.scale = 1;
        scale = 1;
      }

      this.scanline = Math.floor(this.image!.width / this.tileWidth);
      const depth: number = Math.floor(this.image!.height / this.tileHeight);
      this.tileCount = depth * this.scanline;

      if (pal) {
        pal.adjustImage(this.image!).then((image) => {
          this.image = image;

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
        })
      } else {
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
      }
    };

    if (dataUrlLoader) {
      dataUrlLoader.then((blob: Blob) => {
        var urlCreator = window.URL || window.webkitURL;
        this.image!.src = urlCreator.createObjectURL(blob);
      })
    } else {
      this.image.src = url;
    }
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
    let tiles = this.tintTiles[tintName];
    if (!tiles) {
      tiles = this.tintTiles[tintName] = [];
    }

    let tileRecord = tiles[tile];
    if (!tileRecord) {
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

      tileRecord = tiles[tile] = new Tile(image, x * this.originalTileWidth, y * this.originalTileHeight, this.originalTileWidth, this.originalTileHeight, this.scale)
    }
    return tileRecord;
  }

  getBlockColorTile(tile: number, tintName: string, col: number[]): Bitmap {
    let tiles = this.tintTiles[tintName];
    if (!tiles) {
      tiles = this.tintTiles[tintName] = [];
    }

    let tileRecord = tiles[tile];
    if (!tileRecord) {
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

      tileRecord = tiles[tile] = new Tile(image, x * this.originalTileWidth, y * this.originalTileHeight, this.originalTileWidth, this.originalTileHeight, this.scale)
    }
    return tileRecord;
  }
}