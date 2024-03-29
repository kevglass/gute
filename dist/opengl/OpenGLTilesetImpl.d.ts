import { Bitmap } from "../Bitmap";
import { Tileset } from "../Tileset";
import { Palette } from "../impl/Palette";
import { OpenGLGraphicsImpl } from "./OpenGLGraphicsImpl";
import { IOpenGLBitmap } from "./OpenGLBitmap";
import { Graphics } from "../Graphics";
declare class OpenGLTile implements Bitmap, IOpenGLBitmap {
    parent: OpenGLTilesetImpl;
    width: number;
    height: number;
    loaded: boolean;
    x: number;
    y: number;
    scale: number;
    name: string;
    texX: number;
    texY: number;
    texIndex: number;
    image: HTMLImageElement;
    col: number;
    constructor(parent: OpenGLTilesetImpl, image: HTMLImageElement, x: number, y: number, width: number, height: number, scale: number);
    copyWithCol(rgba: number): OpenGLTile;
    draw(graphics: Graphics, x: number, y: number): void;
    drawScaled(graphics: Graphics, x: number, y: number, width: number, height: number): void;
    initOnFirstClick(): void;
}
export declare class OpenGLTilesetImpl implements Tileset, IOpenGLBitmap {
    loaded: boolean;
    tileWidth: number;
    tileHeight: number;
    originalTileWidth: number;
    originalTileHeight: number;
    image: any | null;
    bitmaps: OpenGLTile[];
    scanline: number;
    tileCount: number;
    scale: number;
    onLoaded: () => void;
    name: string;
    texX: number;
    texY: number;
    texIndex: number;
    tintTiles: Record<string, OpenGLTile[]>;
    constructor(graphics: OpenGLGraphicsImpl, url: string, dataUrlLoader: Promise<Blob> | undefined, tileWidth: number, tileHeight: number, scale?: number, pal?: Palette | undefined);
    get height(): number;
    get width(): number;
    draw(graphics: Graphics, x: number, y: number): void;
    drawScaled(graphics: Graphics, x: number, y: number, width: number, height: number): void;
    getBlockColorTile(tile: number, tintName: string, rgba: number[]): Bitmap;
    getShadedTile(tile: number, tintName: string, shade: number): Bitmap;
    getTintedTile(tile: number, tintName: string, source: number[]): Bitmap;
    modify(modification: (imageData: ImageData) => void): Tileset;
    getTilesAcross(): number;
    getTileWidth(): number;
    getTileHeight(): number;
    getTileCount(): number;
    initOnFirstClick(): void;
    getTile(tile: number): OpenGLTile;
}
export {};
