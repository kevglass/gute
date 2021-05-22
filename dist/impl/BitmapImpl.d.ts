import { Bitmap } from "../Bitmap";
export declare class BitmapImpl implements Bitmap {
    width: number;
    height: number;
    loaded: boolean;
    image: HTMLImageElement;
    constructor(url: string);
    draw(ctx: CanvasRenderingContext2D, x: number, y: number): void;
    initOnFirstClick(): void;
}
