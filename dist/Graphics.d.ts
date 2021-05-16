import { Bitmap } from ".";
import { Font } from "./Font";
export interface Graphics {
    fillRect(x: number, y: number, width: number, height: number, col: string): void;
    drawBitmap(x: number, y: number, bitmap: Bitmap): void;
    setFont(font: Font): void;
    setFontSize(size: number): void;
    drawString(x: number, y: number, text: string, col: string): void;
}
