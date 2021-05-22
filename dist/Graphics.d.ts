import { Bitmap } from "./Bitmap";
import { Font } from "./Font";
export declare const WHITE: string;
export declare const BLACK: string;
export declare const RED: string;
export declare const GREEN: string;
export declare const BLUE: string;
export interface Graphics {
    copy(): Bitmap;
    fillRect(x: number, y: number, width: number, height: number, col: string): void;
    drawBitmap(x: number, y: number, bitmap: Bitmap): void;
    setFont(font: Font): void;
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
}
