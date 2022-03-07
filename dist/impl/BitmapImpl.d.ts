import { Bitmap } from "../Bitmap";
import { Palette } from "./Palette";
export declare class BitmapImpl implements Bitmap {
    width: number;
    height: number;
    loaded: boolean;
    image: HTMLImageElement;
    constructor(url: string, dataUrlLoader: Promise<string> | undefined, pal?: Palette | undefined);
    draw(ctx: CanvasRenderingContext2D, x: number, y: number): void;
    drawScaled(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): void;
    initOnFirstClick(): void;
}
