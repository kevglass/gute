import { Resource } from "./Resource";
export interface Bitmap extends Resource {
    width: number;
    height: number;
    getDrawable(): CanvasImageSource;
}
