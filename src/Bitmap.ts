import { Graphics } from "./Graphics";
import { Resource } from "./Resource";

export interface Bitmap extends Resource {
  width: number;
  height: number;

  draw(graphics: Graphics, x: number, y: number): void;

  drawScaled(graphics: Graphics, x: number, y: number, width: number, height: number): void;
}