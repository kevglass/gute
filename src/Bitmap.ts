import { Resource } from "./Resource";

export interface Bitmap extends Resource {
  width: number;
  height: number;

  draw(ctx: CanvasRenderingContext2D, x: number, y: number): void;
}