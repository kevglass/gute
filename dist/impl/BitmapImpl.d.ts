import { Bitmap } from "../Bitmap";
import { Graphics } from "../Graphics";
import { Palette } from "./Palette";
export declare class BitmapImpl implements Bitmap {
    width: number;
    height: number;
    loaded: boolean;
    image: HTMLImageElement;
    name: string;
    constructor(url: string, dataUrlLoader: Promise<string> | undefined, pal?: Palette | undefined);
    draw(graphics: Graphics, x: number, y: number): void;
    drawScaled(graphics: Graphics, x: number, y: number, width: number, height: number): void;
    initOnFirstClick(): void;
}
