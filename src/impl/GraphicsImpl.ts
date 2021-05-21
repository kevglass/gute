import { Bitmap, Graphics } from "..";
import { Font } from "../Font";
import { FontImpl } from "./FontImpl";

declare let InstallTrigger: any;

var isFirefox = typeof InstallTrigger !== 'undefined';

class CopyBitmap implements Bitmap {
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  loaded: boolean;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.loaded = true;
  }

  getDrawable(): CanvasImageSource {
    return this.canvas;
  }

  initOnFirstClick(): void {
  }
}

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

  fitScreen(pixelScale: number): void {
    const realWidth: number = Math.floor(window.innerWidth / pixelScale) * pixelScale;
    const realHeight: number = Math.floor(window.innerHeight / pixelScale) * pixelScale;
    const virtualWidth: number = realWidth / pixelScale;
    const virtualHeight: number = realHeight / pixelScale;
    this.canvas.style.position = "absolute";
    this.canvas.style.top = "0px";
    this.canvas.style.left = "0px";
    this.canvas.width = virtualWidth;
    this.canvas.height = virtualHeight;
    this.canvas.style.width = realWidth + "px";
    this.canvas.style.height = realHeight + "px";
  }

  copy(): Bitmap {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = this.getWidth();
    canvas.height = this.getHeight();
  
    canvas.getContext("2d")?.drawImage(this.canvas, 0, 0);
    return new CopyBitmap(canvas);
  }

  getWidth(): number {
    return this.canvas.width;
  }

  getHeight(): number {
    return this.canvas.height;
  }
  
  push(): void {
    this.ctx.save();
  }

  pop(): void {
    this.ctx.restore();
  }

  translate(x: number, y: number): void {
    this.ctx.translate(x,y);
  }

  scale(x: number, y: number): void {
    this.ctx.scale(x,y);
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