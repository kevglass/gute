import { Bitmap, Graphics } from "..";
import { Font } from "../Font";
import { FontImpl } from "./FontImpl";

declare let InstallTrigger: any;

var isFirefox = typeof InstallTrigger !== 'undefined';

export class GraphicsImpl implements Graphics {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  font: Font;
  fontSize: number = 20;

  constructor() {
    this.canvas = <HTMLCanvasElement> document.getElementById("gamecanvas");
    this.ctx = <CanvasRenderingContext2D> this.canvas.getContext("2d", { alpha: false });
    
    (<any> this.ctx).webkitImageSmoothingEnabled = false;
    (<any> this.ctx).mozImageSmoothingEnabled = false;
    this.ctx.imageSmoothingEnabled = false;
    (<any> this.canvas).style.fontSmooth = "never";
    (<any> this.canvas).style.webkitFontSmoothing = "none";

    if (isFirefox) {
      this.canvas.style.imageRendering = "crisp-edges";
    } else {
      this.canvas.style.imageRendering = "pixelated";
    }

    this.font = new FontImpl("font.ttf", "GuteDefault");
    if (this.font) {
      this.applyFont();
    }
  }

  applyFont(): void {
    this.font.apply(this.ctx, this.fontSize);
  }

  setFont(font: Font): void {
    this.font = font;
    this.applyFont();
  }

  setFontSize(size: number): void {
    this.fontSize = size;
    this.applyFont();
  }

  drawString(x: number, y: number, text: string, col: string): void {
    this.ctx.fillStyle = col;
    this.ctx.fillText(text, x, y);
  }

  fillRect(x: number, y: number, width: number, height: number, col: string): void {
    this.ctx.fillStyle = col;
    this.ctx.fillRect(x,y,width,height);
  }

  drawBitmap(x: number, y: number, bitmap: Bitmap): void {
    this.ctx.drawImage(bitmap.getDrawable(), x, y);
  }

}