import { Bitmap } from "../Bitmap";
import { Tileset } from "../Tileset";
import { Palette } from "../impl/Palette";
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
    texX: number = 0;
    texY: number = 0;
    texIndex: number = 0;
    image: HTMLImageElement;
    col: number = 0xFFFFFF00;
    
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

    copyWithCol(rgba: number): OpenGLTile {
        const copy = new OpenGLTile(this.parent, this.image, this.x, this.y, this.width, this.height, this.scale);
        copy.loaded = true;
        copy.col = rgba;
        copy.texX = this.texX;
        copy.texY = this.texY;

        return copy;
    }

    draw(graphics: Graphics, x: number, y: number): void {
        const g = (graphics as OpenGLGraphicsImpl);
        this.texX = this.parent.texX + this.x;
        this.texY = this.parent.texY + this.y;
        this.texIndex = this.parent.texIndex;

        g._drawBitmap(this, x, y, Math.floor(this.width * this.scale), Math.floor(this.height * this.scale), this.col);
    }

    drawScaled(graphics: Graphics, x: number, y: number, width: number, height: number): void {
        const g = (graphics as OpenGLGraphicsImpl);
        this.texX = this.parent.texX + this.x;
        this.texY = this.parent.texY + this.y;
        this.texIndex = this.parent.texIndex;

        g._drawBitmap(this, x, y, width, height, this.col);
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
    texIndex: number = 0;
    tintTiles: Record<string, OpenGLTile[]> = {};

    constructor(graphics: OpenGLGraphicsImpl, url: string, dataUrlLoader: Promise<Blob> | undefined, tileWidth: number, tileHeight: number, scale: number = 1, pal: Palette | undefined = undefined) {
        this.tileWidth = this.originalTileWidth = tileWidth;
        this.tileHeight = this.originalTileHeight = tileHeight;
        this.scale = scale;
        this.name = url;
        this.image = new Image();

        this.image.onerror = () => {
            console.log("Error loading: " + url);
        }
        this.image.onload = () => {
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

    getBlockColorTile(tile: number, tintName: string, rgba: number[]): Bitmap {
        let tiles = this.tintTiles[tintName];
        if (!tiles) {
          tiles = this.tintTiles[tintName] = [];
        }
    
        let tileRecord = tiles[tile];
        if (!tileRecord) {
            rgba[0] *= 255;
            rgba[1] *= 255;
            rgba[2] *= 255;

            const value = (rgba[0] * (256 * 256 * 256)) + (rgba[1] * (256 * 256)) + (rgba[2] * 256) + Math.floor(rgba[3] * 255);
            tiles[tile] = tileRecord = this.getTile(tile).copyWithCol(value)
        }
        return tileRecord;
    }

    getShadedTile(tile: number, tintName: string, shade: number): Bitmap {
        let tiles = this.tintTiles[tintName];
        if (!tiles) {
          tiles = this.tintTiles[tintName] = [];
        }
    
        let tileRecord = tiles[tile];
        if (!tileRecord) {
            const value = (255 * (256 * 256 * 256)) + (255 * (256 * 256)) + (255 * 256) + Math.floor(shade * 255);
            tiles[tile] = tileRecord = this.getTile(tile).copyWithCol(value)
        }
        return tileRecord;
    }

    getTintedTile(tile: number, tintName: string, source: number[]): Bitmap {
        let tiles = this.tintTiles[tintName];
        if (!tiles) {
          tiles = this.tintTiles[tintName] = [];
        }
    
        let tileRecord = tiles[tile];
        if (!tileRecord) {
            const rgba = [...source];
            rgba[0] *= 255;
            rgba[1] *= 255;
            rgba[2] *= 255;
            if (!rgba[3]) {
                rgba[3] = 1;
            }

            const value = (rgba[0] * (256 * 256 * 256)) + (rgba[1] * (256 * 256)) + (rgba[2] * 256) + Math.floor(rgba[3] * 255);

            tiles[tile] = tileRecord = this.getTile(tile).copyWithCol(value)
        }
        return tileRecord;
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

    getTile(tile: number): OpenGLTile {
        return this.bitmaps[tile];
    }

}