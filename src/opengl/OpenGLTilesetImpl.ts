import { Bitmap } from "../Bitmap";
import { shouldPrescaleTilesets, shouldUseXbr } from "../Gute";
import { Tileset } from "../Tileset";
import { Palette } from "../impl/Palette";
import { xbr2x, xbr3x, xbr4x } from 'xbr-js';
import { OpenGLGraphicsImpl } from "./OpenGLGraphicsImpl";
import { IOpenGLBitmap } from "./OpenGLBitmap";
import { Graphics } from "../Graphics";

class OpenGLTile implements Bitmap, IOpenGLBitmap {
    parent: OpenGLTilesetImpl;
    width: number;
    height: number;
    loaded: boolean;
    x: number;
    y: number;
    scale: number;
    name: string = "tile";
    cached: Record<number, HTMLCanvasElement> = {};
    texX: number = 0;
    texY: number = 0;
    image: HTMLImageElement;

    constructor(parent: OpenGLTilesetImpl, image: HTMLImageElement, x: number, y: number, width: number, height: number, scale: number) {
        this.parent = parent;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.loaded = true;
        this.image = image;
    }

    draw(graphics: Graphics, x: number, y: number): void {
        const g = (graphics as OpenGLGraphicsImpl);
        this.texX = this.parent.texX + this.x;
        this.texY = this.parent.texY + this.y;
        g._drawBitmap(this, x, y, Math.floor(this.width * this.scale), Math.floor(this.height * this.scale));
    }

    drawScaled(graphics: Graphics, x: number, y: number, width: number, height: number): void {
        const g = (graphics as OpenGLGraphicsImpl);
        this.texX = this.parent.texX + this.x;
        this.texY = this.parent.texY + this.y;
        g._drawBitmap(this, x, y, width, height);
    }

    initOnFirstClick(): void {
    }
}

export class OpenGLTilesetImpl implements Tileset, IOpenGLBitmap {
    loaded: boolean = false;
    tileWidth: number;
    tileHeight: number;
    originalTileWidth: number;
    originalTileHeight: number;
    image: any | null;
    bitmaps: OpenGLTile[] = [];
    scanline: number = 0;
    tileCount: number = 0;
    scale: number;
    onLoaded: () => void = () => { };
    name: string;
    texX: number = 0;
    texY: number = 0;

    constructor(graphics: OpenGLGraphicsImpl, url: string, dataUrlLoader: Promise<Blob> | undefined, tileWidth: number, tileHeight: number, scale: number = 1, pal: Palette | undefined = undefined) {
        this.tileWidth = this.originalTileWidth = tileWidth;
        this.tileHeight = this.originalTileHeight = tileHeight;
        this.scale = scale;
        this.name = url;
        this.image = new Image();

        this.image.onload = () => {
            if (shouldPrescaleTilesets() && scale !== 1) {
                const scaledImage = document.createElement("canvas");

                if (shouldUseXbr()) {
                    const ctx = scaledImage.getContext("2d");
                    ctx!.drawImage(this.image!, 0, 0);

                    const originalImageData = ctx!.getImageData(0, 0, this.image!.width, this.image!.height);
                    const originalPixelView = new Uint32Array(originalImageData.data.buffer);
                    const scaledPixelView = scale === 2 ? xbr2x(originalPixelView, this.image!.width, this.image!.height) : xbr3x(originalPixelView, this.image!.width, this.image!.height);

                    scaledImage.width = this.image!.width * scale;
                    scaledImage.height = this.image!.height * scale;
                    const scaledImageData = new ImageData(new Uint8ClampedArray(scaledPixelView.buffer), scaledImage.width, scaledImage.height);

                    ctx!.putImageData(scaledImageData, 0, 0);
                } else {
                    scaledImage.width = this.image!.width * scale;
                    scaledImage.height = this.image!.height * scale;
                    const ctx = scaledImage.getContext("2d");
                    ctx!.imageSmoothingEnabled = false;
                    (<any>ctx!).webkitImageSmoothingEnabled = false;
                    ctx?.drawImage(this.image!, 0, 0, scaledImage.width, scaledImage.height);
                }


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
                            this.bitmaps.push(new OpenGLTile(this, this.image!, x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight, scale));
                        }
                    }
                    this.tileWidth *= scale;
                    this.tileHeight *= scale;

                    this.onLoaded();
                    graphics.registerImage(this);
                    this.loaded = true;
                })
            } else {
                // cut the image into pieces
                for (let y = 0; y < depth; y++) {
                    for (let x = 0; x < this.scanline; x++) {
                        this.bitmaps.push(new OpenGLTile(this, this.image!, x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight, scale));
                    }
                }
                this.tileWidth *= scale;
                this.tileHeight *= scale;

                this.onLoaded();
                graphics.registerImage(this);
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

    get height(): number {
        return this.image.height;
    }

    get width(): number {
        return this.image.width;
    }

    draw(graphics: Graphics, x: number, y: number): void {
    }

    drawScaled(graphics: Graphics, x: number, y: number, width: number, height: number): void {
    }

    getBlockColorTile(tile: number, tintName: string, col: number[]): Bitmap {
        return this.getTile(tile);
    }

    getShadedTile(tile: number, tintName: string, shade: number): Bitmap {
        return this.getTile(tile);
    }

    getTintedTile(tile: number, tintName: string, tint: number[]): Bitmap {
        return this.getTile(tile);
    }

    modify(modification: (imageData: ImageData) => void): Tileset {
        const canvas: HTMLCanvasElement = document.createElement("canvas");
        canvas.width = this.image!.width;
        canvas.height = this.image!.height;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (ctx) {
            ctx.drawImage(this.image!, 0, 0);
            const id: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            modification(id);
            ctx.putImageData(id, 0, 0);
        }
        this.image = new Image();
        this.image.src = canvas.toDataURL();
        for (const tile of this.bitmaps) {
            tile.image = this.image;
        }

        return this;
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

}