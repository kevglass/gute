import { Bitmap } from "./Bitmap";
import { Sound } from "./Sound";
import { Tileset } from "./Tileset";
export interface GameContext {
    allResourcesLoaded(): boolean;
    loadMusic(url: string): Sound;
    loadSound(url: string): Sound;
    loadTileset(url: string, tileWidth: number, tileHeight: number): Tileset;
    loadBitmap(url: string): Bitmap;
}
