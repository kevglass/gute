import { Bitmap, Graphics } from "..";
import { BitmapImpl } from "./BitmapImpl";

export class GraphcisImpl implements Graphics {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = <HTMLCanvasElement> document.getElementById("gamecanvas");
    this.ctx = <CanvasRenderingContext2D> this.canvas.getContext("2d");
  }

  fillRect(x: number, y: number, width: number, height: number, col: string): void {
    this.ctx.fillStyle = col;
    this.ctx.fillRect(x,y,width,height);
  }

  drawBitmap(x: number, y: number, bitmap: Bitmap): void {
    this.ctx.drawImage(bitmap.getDrawable(), x, y);
  }

}