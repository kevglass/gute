import { Bitmap } from ".";

export interface Graphics {
  drawBitmap(x: number, y: number, bitmap: Bitmap): void;
}