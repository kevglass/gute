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

export class NullBitmap implements Bitmap {
    width: number = 0;
    height: number = 0;
    loaded: boolean = true;
    name: string = "null";

    draw(graphics: Graphics, x: number, y: number): void {
    }

    drawScaled(graphics: Graphics, x: number, y: number, width: number, height: number): void {
    }

    initOnFirstClick(): void {
    }

}