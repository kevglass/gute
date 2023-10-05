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
    clipX: number;
    clipY: number;
    clipX2: number;
    clipY2: number;
    alpha: number;
    refreshRequired: boolean;
    constructor(gl: WebGLRenderingContext, graphics: OpenGLGraphicsImpl, id: number);
    getWidth(): number;
    getHeight(): number;
    recover(): void;
    use(): void;
    unuse(): void;
    needsRefresh(): boolean;
    release(): void;
    setDimension(width: number, height: number): void;
}
