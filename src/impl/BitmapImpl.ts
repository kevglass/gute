import { Bitmap } from "../Bitmap";

export class BitmapImpl implements Bitmap {
  width: number = 0;
  height: number = 0;
  loaded: boolean = false;
  image: HTMLImageElement;

  constructor(url: string) {
    this.image = new Image();
    this.image.onload = () => {
      this.width = this.image.width;
      this.height = this.image.height;
      this.loaded = true;
    };
    this.image.src = url;
  }

  draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.drawImage(this.image, x, y);
  }
  
  initOnFirstClick(): void {
  }
}