import { Offscreen } from "../Graphics";
import { OpenGLGraphicsImpl } from "./OpenGLGraphicsImpl";
import { RenderingState } from "./RenderingState";

export declare class OpenGlOffscreen implements Offscreen, RenderingState {
    width: number;
    height: number;
    texture: WebGLTexture | null;
    gl: WebGLRenderingContext;
    fb: WebGLFramebuffer | null;
    graphics: OpenGLGraphicsImpl;
    id: number;
    inuse: boolean;
    alphas: number[];
    transforms: any[];
    states: any[];
    brightness: number;
    translateX: number;
    translateY: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
    clipX: number;
    clipY: number;
    clipX2: number;
    clipY2: number;
    alpha: number;
    constructor(gl: WebGLRenderingContext, graphics: OpenGLGraphicsImpl, id: number);
    getWidth(): number;
    getHeight(): number;
    use(): void;
    unuse(): void;
    setDimension(width: number, height: number): void;
}
