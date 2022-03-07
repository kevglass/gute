import { Bitmap } from "../Bitmap";
import { Palette } from "./Palette";

export class BitmapImpl implements Bitmap {
  width: number = 0;
  height: number = 0;
  loaded: boolean = false;
  image: HTMLImageElement;

  constructor(url: string, dataUrlLoader: Promise<string> | undefined, pal: Palette | undefined = undefined) {
    this.image = new Image();
    this.image.onload = () => {
      this.width = this.image.width;
      this.height = this.image.height;

      if (pal) {
        pal.adjustImage(this.image).then((image: HTMLImageElement) => { 
          this.image = image;
          this.loaded = true;
        });
      } else {
        this.loaded = true;
      }
    };

    if (dataUrlLoader) {
      dataUrlLoader.then((base64: string) => {
        this.image.src = "data:"+url.substring(url.length-3)+";base64,"+base64;
      })
    } else {
      this.image.src = url;
    }
  }

  draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.drawImage(this.image, x, y);
  }

  drawScaled(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): void {
    ctx.drawImage(this.image, x, y, width, height);
  }
  
  initOnFirstClick(): void {
  }
}