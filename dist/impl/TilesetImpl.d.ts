import { Bitmap } from "..";
import { Tileset } from "../Tileset";
export declare class TilesetImpl implements Tileset {
    loaded: boolean;
    tileWidth: number;
    tileHeight: number;
    image: HTMLImageElement | null;
    transformed: HTMLCanvasElement | null;
    bitmaps: Bitmap[];
    scanline: number;
    tileCount: number;
    tints: Record<string, HTMLCanvasElement>;
    constructor(url: string, tileWidth: number, tileHeight: number, scale?: number);
    getTilesAcross(): number;
    scaled(scale: number): void;
    getTileWidth(): number;
    getTileHeight(): number;
    getTileCount(): number;
    initOnFirstClick(): void;
    getTile(tile: number): Bitmap;
    getTintedTile(tile: number, tintName: string, tint: number[]): Bitmap;
}
