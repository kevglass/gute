import { Bitmap } from "../Bitmap";
import { Graphics } from "../Graphics";
import { Palette } from "../impl/Palette";
import { OpenGLGraphicsImpl } from "./OpenGLGraphicsImpl";

export interface IOpenGLBitmap {
    texX: number;
    texY: number;
    width: number;
    height: number;
    image?: HTMLImageElement;
}

export class OpenGLBitmap implements IOpenGLBitmap {
    width: number = 0;
    height: number = 0;
    loaded: boolean = false;
    name: string;
    image: HTMLImageElement;
    texX: number = 0;
    texY: number = 0;

    constructor(graphics: OpenGLGraphicsImpl, url: string, dataUrlLoader: Promise<string> | undefined, pal: Palette | undefined = undefined) {
        graphics.registerImage(this);

        this.name = url;
        this.image = new Image();
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
            this.image.src = "data:"+url.substring(url.length-3)+";base64,"+base64;
          })
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


export class NullBitmap implements Bitmap {
    width: number = 0;
    height: number = 0;
    loaded: boolean = true;
    name: string = "null";

    draw(graphics: Graphics, x: number, y: number): void {
    }

    drawScaled(graphics: Graphics, x: number, y: number, width: number, height: number): void {
    }

    initOnFirstClick(): void {
    }

}