import { Bitmap } from "..";
import { Tileset } from "../Tileset";
export declare class TilesetImpl implements Tileset {
    loaded: boolean;
    tileWidth: number;
    tileHeight: number;
    image: HTMLImageElement;
    bitmaps: Bitmap[];
    scanline: number;
    tileCount: number;
    constructor(url: string, tileWidth: number, tileHeight: number);
    getTileWidth(): number;
    getTileHeight(): number;
    getTileCount(): number;
    initOnFirstClick(): void;
    getTile(tile: number): Bitmap;
}
