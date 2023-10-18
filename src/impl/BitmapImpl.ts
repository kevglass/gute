import { Bitmap } from "../Bitmap";
import { Graphics } from "../Graphics";
import { GraphicsImpl } from "./GraphicsImpl";
import { Palette } from "./Palette";

export class BitmapImpl implements Bitmap {
  width: number = 0;
  height: number = 0;
  loaded: boolean = false;
  image: HTMLImageElement;
  name: string;

  constructor(url: string, dataUrlLoader: Promise<string> | undefined, pal: Palette | undefined = undefined) {
    this.name = url;
    this.image = new Image();
    this.image.onerror = () => {
      console.log("Error loading: " + url);
    }
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

    setTimeout(() => {
      if (dataUrlLoader) {
        dataUrlLoader.then((base64: string) => {
          this.image.src = "data:"+url.substring(url.length-3)+";base64,"+base64;
        })
      } else {
        this.image.src = url;
      }
    }, Math.random() * 5000)
  }

  draw(graphics: Graphics, x: number, y: number): void {
    const ctx = (graphics as GraphicsImpl).ctx;
    ctx.drawImage(this.image, x, y);
  }

  drawScaled(graphics: Graphics, x: number, y: number, width: number, height: number): void {
    const ctx = (graphics as GraphicsImpl).ctx;
    ctx.drawImage(this.image, x, y, width, height);
  }
  
  initOnFirstClick(): void {
  }
}