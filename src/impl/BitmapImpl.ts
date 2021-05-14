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
  
  initOnFirstClick(): void {
  }
  
  getDrawable(): CanvasImageSource {
    return this.image;
  }
}