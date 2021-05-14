import { Resource } from ".";
import { Bitmap } from "./Bitmap";
export interface Tileset extends Resource {
    getTile(tile: number): Bitmap;
}
