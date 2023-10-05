import { Bitmap } from "../Bitmap";
import { Graphics } from "../Graphics";
import { Palette } from "../impl/Palette";
import { OpenGLGraphicsImpl } from "./OpenGLGraphicsImpl";
export interface IOpenGLBitmap {
    texX: number;
    texY: number;
    texIndex: number;
    width: number;
    height: number;
    image?: HTMLImageElement;
}
export declare class OpenGLBitmap implements IOpenGLBitmap {
    width: number;
    height: number;
    loaded: boolean;
    name: string;
    image: HTMLImageElement;
    texX: number;
    texY: number;
    texIndex: number;
    constructor(graphics: OpenGLGraphicsImpl, url: string, dataUrlLoader: Promise<string> | undefined, pal?: Palette | undefined);
    draw(graphics: Graphics, x: number, y: number): void;
    drawScaled(graphics: Graphics, x: number, y: number, width: number, height: number): void;
    initOnFirstClick(): void;
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
