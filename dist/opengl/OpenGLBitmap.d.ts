import { Bitmap } from "../Bitmap";
import { Graphics } from "../Graphics";
export interface IOpenGLBitmap {
    texX: number;
    texY: number;
    texIndex: number;
    width: number;
    height: number;
    image?: HTMLImageElement;
}
export declare class NullBitmap implements Bitmap {
    width: number;
    height: number;
    loaded: boolean;
    name: string;
    draw(graphics: Graphics, x: number, y: number): void;
    drawScaled(graphics: Graphics, x: number, y: number, width: number, height: number): void;
    initOnFirstClick(): void;
}
