import { Resource } from "./Resource";
import { Bitmap } from "./Bitmap";

export interface Tileset extends Resource {
  onLoaded: () => void;
  
  getTile(tile: number): Bitmap;

  getBlockColorTile(tile: number, tintName: string, col: number[]): Bitmap;

  getShadedTile(tile: number, tintName: string, shade: number): Bitmap;

  getTintedTile(tile: number, tintName: string, tint: number[]): Bitmap;

  getTileCount(): number;

  getTileWidth(): number;

  getTileHeight(): number;

  getTilesAcross(): number;

  modify(modification: (imageData: ImageData) => void): Tileset;
}