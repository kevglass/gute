import { Bitmap } from ".";
export interface Graphics {
    fillRect(x: number, y: number, width: number, height: number, col: string): void;
    drawBitmap(x: number, y: number, bitmap: Bitmap): void;
}
