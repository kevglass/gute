import { Bitmap, Graphics } from "..";

declare let InstallTrigger: any;

var isFirefox = typeof InstallTrigger !== 'undefined';

export class GraphicsImpl implements Graphics {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = <HTMLCanvasElement> document.getElementById("gamecanvas");
    this.ctx = <CanvasRenderingContext2D> this.canvas.getContext("2d", { alpha: false });
    
    (<any> this.ctx).webkitImageSmoothingEnabled = false;
    (<any> this.ctx).mozImageSmoothingEnabled = false;
    this.ctx.imageSmoothingEnabled = false;
    
    if (isFirefox) {
      this.canvas.style.imageRendering = "crisp-edges";
    } else {
      this.canvas.style.imageRendering = "pixelated";
    }
  }

  fillRect(x: number, y: number, width: number, height: number, col: string): void {
    this.ctx.fillStyle = col;
    this.ctx.fillRect(x,y,width,height);
  }

  drawBitmap(x: number, y: number, bitmap: Bitmap): void {
    this.ctx.drawImage(bitmap.getDrawable(), x, y);
  }

}