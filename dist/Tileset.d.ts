import { Resource } from "./Resource";
import { Bitmap } from "./Bitmap";
export interface Tileset extends Resource {
    getTile(tile: number): Bitmap;
    getTintedTile(tile: number, tintName: string, tint: number[]): Bitmap;
    getTileCount(): number;
    getTileWidth(): number;
    getTileHeight(): number;
    getTilesAcross(): number;
}
