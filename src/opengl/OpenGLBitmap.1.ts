import { Graphics } from "../Graphics";
import { Palette } from "../impl/Palette";
import { OpenGLGraphicsImpl } from "./OpenGLGraphicsImpl";
import { IOpenGLBitmap } from "./OpenGLBitmap";
import { GuteLog } from "../Log";


export class OpenGLBitmap implements IOpenGLBitmap {
  width: number = 0;
  height: number = 0;
  loaded: boolean = false;
  name: string;
  image: HTMLImageElement;
  texX: number = 0;
  texY: number = 0;
  texIndex: number = 0;

  constructor(graphics: OpenGLGraphicsImpl, url: string, dataUrlLoader: Promise<string> | undefined, pal: Palette | undefined = undefined) {
    graphics.registerImage(this);

    this.name = url;
    this.image = new Image();
    this.image.onerror = () => {
      GuteLog.log("Error loading: " + url);
    };
    this.image.onload = () => {
      this.width = this.image.width;
      this.height = this.image.height;

      if (pal) {
        pal.adjustImage(this.image).then((image: HTMLImageElement) => {
          this.image = image;
          this.loaded = true;
          graphics.newResourceLoaded();
        });
      } else {
        this.loaded = true;
        graphics.newResourceLoaded();
      }
    };

    if (dataUrlLoader) {
      dataUrlLoader.then((base64: string) => {
        this.image.src = "data:" + url.substring(url.length - 3) + ";base64," + base64;
      });
    } else {
      this.image.src = url;
    }
  }

  draw(graphics: Graphics, x: number, y: number): void {
    const g = (graphics as OpenGLGraphicsImpl);
    g._drawBitmap(this, x, y, this.width, this.height);
  }

  drawScaled(graphics: Graphics, x: number, y: number, width: number, height: number): void {
    const g = (graphics as OpenGLGraphicsImpl);
    g._drawBitmap(this, x, y, width, height);
  }

  initOnFirstClick(): void {
  }

}
