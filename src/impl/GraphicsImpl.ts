import { Bitmap, Graphics } from "..";
import { Font } from "../Font";
import { Offscreen } from "../Graphics";
import { FontImpl } from "./FontImpl";

declare let InstallTrigger: any;

var isFirefox = typeof InstallTrigger !== 'undefined';

class OffscreenImpl implements Offscreen {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  getWidth(): number {
    return this.canvas.width;
  }

  getHeight(): number {
    return this.canvas.height;
  }
}

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

  draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.drawImage(this.canvas, x, y);
  }

  drawScaled(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): void {
    ctx.drawImage(this.canvas, x, y, width, height);
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
  mainCtx: CanvasRenderingContext2D;
  font: Font;
  fontSize: number = 20;

  constructor() {
    this.canvas = <HTMLCanvasElement> document.getElementById("gamecanvas");
    this.ctx = <CanvasRenderingContext2D> this.canvas.getContext("2d", { alpha: false });
    this.mainCtx = this.ctx;

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

  clear(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  createOffscreen(): Offscreen {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = this.getWidth();
    canvas.height = this.getHeight();
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (ctx) {
      (<any> ctx).webkitImageSmoothingEnabled = false;
      (<any> ctx).mozImageSmoothingEnabled = false;
      ctx.imageSmoothingEnabled = false;
      (<any> canvas).style.fontSmooth = "never";
      (<any> canvas).style.webkitFontSmoothing = "none";

      return new OffscreenImpl(canvas, ctx);
    } else {
      throw new Error("Unable to create offscreen canvas");
    }
  }

  drawToOffscreen(screen: Offscreen | null): void {
    if (screen) {
      this.ctx = (screen as OffscreenImpl).ctx;
    } else {
      this.ctx = this.mainCtx;
    }
  }

  drawOffscreen(screen: Offscreen): void {
    this.ctx.drawImage((screen as OffscreenImpl).canvas, 0,  0);
  }

  clearRect(x: number, y: number, width: number, height: number): void {
    this.ctx.clearRect(x, y, width, height);
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

  setAlpha(alpha: number): void {
    this.ctx.globalAlpha = alpha;
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

  getStringWidth(text: string): number {
    return this.ctx.measureText(text).width;
  }

  drawString(x: number, y: number, text: string, col: string): void {
    this.ctx.fillStyle = col;
    this.ctx.fillText(text, x, y);
  }

  setComposite(name: string): void {
    this.ctx.globalCompositeOperation = name;
  }

  fillRect(x: number, y: number, width: number, height: number, col: string): void {
    this.ctx.fillStyle = col;
    this.ctx.fillRect(x,y,width,height);
  }

  drawLine(x1: number, y1: number, x2: number, y2: number, col: string): void {
    this.ctx.strokeStyle = col;
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
  }

  drawBitmap(x: number, y: number, bitmap: Bitmap): void {
    bitmap.draw(this.ctx, x, y);
  }

  drawScaledBitmap(x: number, y: number, width: number, height: number, bitmap: Bitmap): void {
    bitmap.drawScaled(this.ctx, x, y, width, height);
  }
}