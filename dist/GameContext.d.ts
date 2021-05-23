import { Bitmap } from "./Bitmap";
import { Font } from "./Font";
import { Graphics } from "./Graphics";
import { LDTKWorld } from "./ldtk/LDTKWorld";
import { Sound } from "./Sound";
import { Tileset } from "./Tileset";
export interface GameContext {
    allResourcesLoaded(): boolean;
    loadLDTK(url: string): LDTKWorld;
    loadMusic(url: string): Sound;
    loadSound(url: string): Sound;
    loadScaledTileset(url: string, tileWidth: number, tileHeight: number, scale: number): Tileset;
    loadTileset(url: string, tileWidth: number, tileHeight: number): Tileset;
    loadBitmap(url: string): Bitmap;
    loadFont(url: string, name: string): Font;
    getGraphics(): Graphics;
}
