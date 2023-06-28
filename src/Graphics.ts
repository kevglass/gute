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

  setDimension(width: number, height: number): void;
}

export interface Graphics {
  smooth(): void;
  
  copy(): Bitmap;

  getOffscreen(): Offscreen | null;
  
  clip(x: number, y: number, width: number, height: number): void;

  createOffscreen(): Offscreen;

  drawToOffscreen(screen: Offscreen | null): void;

  drawOffscreen(screen: Offscreen): void;

  drawScaledOffscreen(screen: Offscreen, x: number, y: number, width: number, height: number): void;

  fillRect(x: number, y: number, width: number, height: number, col: string): void;

  fillCircle(x: number, y: number, radius: number, col: string): void;

  drawCircle(x: number, y: number, radius: number, col: string, width: number): void;

  
  setLineDash(segments: number[]): void;
  
  drawLine(x1: number, y1: number, x2: number, y2: number, col: string, width?: number): void;

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

  getTransform(): DOMMatrix;
}