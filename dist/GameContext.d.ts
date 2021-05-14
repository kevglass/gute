import { Bitmap } from "./Bitmap";
import { Tileset } from "./Tileset";
export interface GameContext {
    allResourcesLoaded(): boolean;
    loadTileset(url: string, tileWidth: number, tileHeight: number): Tileset;
    loadBitmap(url: string): Bitmap;
}
