import { Resource } from "./Resource";
import { Bitmap } from "./Bitmap";
export interface Tileset extends Resource {
    getTile(tile: number): Bitmap;
    getTileCount(): number;
    getTileWidth(): number;
    getTileHeight(): number;
}
