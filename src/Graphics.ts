import { Bitmap } from "./Bitmap";
import { Font } from "./Font";

export const WHITE: string = "white";
export const BLACK: string = "black";
export const RED: string = "red";
export const GREEN: string = "green";
export const BLUE: string = "blue";

export interface Offscreen {
  getWidth(): number;

  getHeight(): number;
}

export interface Graphics {
  copy(): Bitmap;

  createOffscreen(): Offscreen;

  drawToOffscreen(screen: Offscreen | null): void;

  drawOffscreen(screen: Offscreen): void;

  fillRect(x: number, y: number, width: number, height: number, col: string): void;

  drawLine(x1: number, y1: number, x2: number, y2: number, col: string): void;

  drawBitmap(x: number, y: number, bitmap: Bitmap): void;

  drawScaledBitmap(x: number, y: number, width: number, height: number, bitmap: Bitmap): void;
  
  clearRect(x: number, y: number, width: number, height: number): void;
   
  clear(): void;

  setFont(font: Font): void;
  
  setComposite(name: string): void;

  setFontSize(size: number): void;

  drawString(x: number, y: number, text: string, col: string): void;

  translate(x: number, y: number): void;

  scale(x: number, y: number): void;

  push(): void;

  pop(): void;

  getWidth(): number;

  getHeight(): number;

  fitScreen(widthInVirtualPixels: number): void;

  getStringWidth(text: string): number;

  setAlpha(alpha: number): void;
}