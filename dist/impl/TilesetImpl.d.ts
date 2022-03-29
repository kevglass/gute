import { Bitmap } from "..";
import { Tileset } from "../Tileset";
import { Palette } from "./Palette";
export declare class TilesetImpl implements Tileset {
    loaded: boolean;
    tileWidth: number;
    tileHeight: number;
    originalTileWidth: number;
    originalTileHeight: number;
    image: HTMLImageElement | null;
    bitmaps: Bitmap[];
    scanline: number;
    tileCount: number;
    tints: Record<string, HTMLImageElement>;
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
    getTintedTile(tile: number, tintName: string, tint: number[]): Bitmap;
    getBlockColorTile(tile: number, tintName: string, col: number[]): Bitmap;
}
