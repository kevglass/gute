import { Font } from "../Font";

declare let FontFace: any;

export class FontImpl implements Font {
  name: string;

  constructor(url: string, name: string) {
    this.name = name;

    const style = document.createElement("style");
    style.innerHTML = "@font-face { font-family: "+name+"; src: url('"+url+"'); } body { font-family: "+name+"; }";
    document.head.appendChild(style);
  }

  apply(ctx: CanvasRenderingContext2D, size: number): void {
    ctx.font = size+"px " + this.name;
  }
}