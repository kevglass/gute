import { Bitmap, Graphics } from "..";
import { Font } from "../Font";
export declare class GraphicsImpl implements Graphics {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    font: Font;
    fontSize: number;
    constructor();
    fitScreen(pixelScale: number): void;
    copy(): Bitmap;
    getWidth(): number;
    getHeight(): number;
    push(): void;
    pop(): void;
    translate(x: number, y: number): void;
    scale(x: number, y: number): void;
    applyFont(): void;
    setFont(font: Font): void;
    setFontSize(size: number): void;
    drawString(x: number, y: number, text: string, col: string): void;
    fillRect(x: number, y: number, width: number, height: number, col: string): void;
    drawBitmap(x: number, y: number, bitmap: Bitmap): void;
}
