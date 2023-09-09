import { Bitmap } from "./Bitmap";
import { Font } from "./Font";
import { Graphics } from "./Graphics";
import { MapWorld } from "./tilemaps/MapWorld";
import { Sound } from "./Sound";
import { Tileset } from "./Tileset";

export interface GameContext {
  isShiftPressed(): boolean;
  
  isCommandPressed(): boolean;

  isAltPressed(): boolean;

  isControlPressed(): boolean;
  
  resourcesRemaining(): number;

  resourcesTotal(): number;

  allResourcesLoaded(): boolean;

  applyPalette(hexFile: string): Promise<void>;

  loadZip(url: string): Promise<void>;

  loadLDTK(name: string, locator: (name: string) => string): Promise<MapWorld>;
  
  loadMusic(url: string): Sound;

  loadSound(url: string): Sound;

  loadScaledTileset(url: string, tileWidth: number, tileHeight: number, scale: number): Tileset;
  
  loadTileset(url: string, tileWidth: number, tileHeight: number): Tileset;

  loadBitmap(url: string): Bitmap;

  getZipProgress(): number;
  
  loadFont(url: string, name: string): Font;

  getGraphics(): Graphics;

  loadJson(url: string, transform?: (text: string) => string): Promise<any>;

  isRunningStandalone(): boolean;

  isTablet(): boolean;

  isMobile(): boolean;

  isAndroid(): boolean;

  isIOS(): boolean;

  isPhone(): boolean;

  setSoundVolume(v: number) : void;

  getSoundVolume(): number;

  setMusicVolume(v: number): void;

  getMusicVolume(): number;
}
