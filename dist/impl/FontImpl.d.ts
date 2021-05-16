import { Font } from "../Font";
export declare class FontImpl implements Font {
    name: string;
    constructor(url: string, name: string);
    apply(ctx: CanvasRenderingContext2D, size: number): void;
}
