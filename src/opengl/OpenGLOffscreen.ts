import { Offscreen } from "../Graphics";
import { OpenGLGraphicsImpl } from "./OpenGLGraphicsImpl";
import { RenderingState } from "./RenderingState";

export class OpenGlOffscreen implements Offscreen, RenderingState {
    width: number;
    height: number;
    texture: WebGLTexture | null = null;
    gl: WebGLRenderingContext;
    fb: WebGLFramebuffer | null = null; 
    graphics: OpenGLGraphicsImpl;
    id: number = 0;
    inuse: boolean = false;

    clipX: number = 0;
    clipY: number = 0;
    clipX2: number = 0;
    clipY2: number = 0;
    alpha: number = 255;
    refreshRequired: boolean = false;

    constructor(gl: WebGLRenderingContext, graphics: OpenGLGraphicsImpl, id: number) {
        this.gl = gl;
        this.width = 0;
        this.height = 0;
        this.graphics = graphics;
        this.id = id;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    recover(): void {
        this.fb = null;
        this.texture = null;
        this.refreshRequired = true;
        this.setDimension(this.width, this.height);
    }

    use(): void {
        if (!this.graphics.shaderProgram) {
            return;
        }

        if (this.inuse) {
            return;
        }

        this.refreshRequired = false;
        this.graphics.glCommitContext();

        this.inuse = true;
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fb);
        this.gl.uniform2f(this.graphics.getUniformLoc("uCanvasSize"), Math.floor(this.width / 2), Math.floor(this.height / 2));
        
        this.gl.viewport(0, 0, this.width, this.height);

        this.graphics.currentContextState = this;
        this.graphics.push();
        this.graphics.transformCtx.resetTransform();
        this.graphics.resetState();
        this.graphics.glStartContext();
    }

    unuse(): void {
        if (!this.graphics.shaderProgram) {
            return;
        }

        if (!this.inuse) {
            return;
        }
        
        this.inuse = false;
        this.graphics.glCommitContext();
        this.graphics.currentContextState = this.graphics;

        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.viewport(0, 0, this.graphics.canvas.width, this.graphics.canvas.height);
        this.gl.uniform2f(this.graphics.getUniformLoc("uCanvasSize"), this.graphics.canvas.width / 2, this.graphics.canvas.height / 2);
        this.graphics.pop();
        this.graphics.glStartContext();
    }
    
    needsRefresh(): boolean {
        return this.refreshRequired;
    }

    release(): void {
        if (this.texture) {
            this.gl.deleteTexture(this.texture);
        }
        if (this.fb) {
            this.gl.deleteFramebuffer(this.fb);
            this.fb = 0;
        }

        this.width = 0;
        this.height = 0;
    }

    setDimension(width: number, height: number): void {
        if (this.width !== width || this.height !== height || !this.fb) {
            this.release();

            this.width = width;
            this.height = height;

            this.texture = this.gl.createTexture();
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);

            const level = 0;
            const internalFormat = this.gl.RGBA;
            const border = 0;
            const format = this.gl.RGBA;
            const type = this.gl.UNSIGNED_BYTE;
            const data = null;
            this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat,
                width, height, border,
                format, type, data);

            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

            this.fb = this.gl.createFramebuffer();
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fb);
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.texture, level);

            this.gl.clearColor(0,0,0,1);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.graphics.currentTexture);
        }
    }

}