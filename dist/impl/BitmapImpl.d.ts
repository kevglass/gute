import { Bitmap } from "../Bitmap";
export declare class BitmapImpl implements Bitmap {
    width: number;
    height: number;
    loaded: boolean;
    image: HTMLImageElement;
    constructor(url: string);
    initOnFirstClick(): void;
    getDrawable(): CanvasImageSource;
}
