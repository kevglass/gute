import { Bitmap, Graphics } from "..";
export declare class GraphicsImpl implements Graphics {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor();
    fillRect(x: number, y: number, width: number, height: number, col: string): void;
    drawBitmap(x: number, y: number, bitmap: Bitmap): void;
}
