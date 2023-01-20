import { Bitmap } from "..";
import { Tileset } from "../Tileset";
import { Palette } from "./Palette";
declare class Tile implements Bitmap {
    image: HTMLImageElement;
    width: number;
    height: number;
    loaded: boolean;
    x: number;
    y: number;
    scale: number;
    name: string;
    constructor(canvas: HTMLImageElement, x: number, y: number, width: number, height: number, scale: number);
    draw(ctx: CanvasRenderingContext2D, x: number, y: number): void;
    drawScaled(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): void;
    initOnFirstClick(): void;
}
export declare class TilesetImpl implements Tileset {
    loaded: boolean;
    tileWidth: number;
    tileHeight: number;
    originalTileWidth: number;
    originalTileHeight: number;
    image: any | null;
    bitmaps: Tile[];
    scanline: number;
    tileCount: number;
    tints: Record<string, HTMLImageElement>;
    tintTiles: Record<string, Bitmap[]>;
    scale: number;
    onLoaded: () => void;
    name: string;
    constructor(url: string, dataUrlLoader: Promise<Blob> | undefined, tileWidth: number, tileHeight: number, scale?: number, pal?: Palette | undefined);
    getTilesAcross(): number;
    getTileWidth(): number;
    getTileHeight(): number;
    getTileCount(): number;
    initOnFirstClick(): void;
    getTile(tile: number): Bitmap;
    getShadedTile(tile: number, tintName: string, shade: number): Bitmap;
    getTintedTile(tile: number, tintName: string, tint: number[]): Bitmap;
    modify(modification: (imageData: ImageData) => void): Tileset;
    getBlockColorTile(tile: number, tintName: string, col: number[]): Bitmap;
}
export {};
