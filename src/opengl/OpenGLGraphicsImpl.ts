import { Bitmap } from "../Bitmap";
import { Font } from "../Font";
import { Graphics, Offscreen } from "../Graphics";
import { IOpenGLBitmap, NullBitmap, OpenGLBitmap } from "./OpenGLBitmap";
import { OpenGlOffscreen } from "./OpenGLOffscreen";
import { RenderingState } from "./RenderingState";
import potpack from "potpack"

function parseColor(input: string): number[] {
    let mm;
    let m;
    // Obviously, the numeric values will be easier to parse than names.So we do those first.
    mm = input.match(/^#?([0-9a-f]{3})$/i);
    if (mm) {
        m = mm[1];
        // in three-character format, each value is multiplied by 0x11 to give an
        // even scale from 0x00 to 0xff
        return [
            parseInt(m.charAt(0), 16) * 0x11,
            parseInt(m.charAt(1), 16) * 0x11,
            parseInt(m.charAt(2), 16) * 0x11,
            1
        ];
    }
    // That's one. Now for the full six-digit format: 
    mm = input.match(/^#?([0-9a-f]{6})$/i);
    if (mm) {
        m = mm[1];
        return [
            parseInt(m.substr(0, 2), 16),
            parseInt(m.substr(2, 2), 16),
            parseInt(m.substr(4, 2), 16),
            1
        ];
    }
    // And now for rgb() format:
    mm = input.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([+-]?([0-9]*[.])?[0-9]+)\s*\)$/i);
    if (mm) {
        return [Number.parseInt(mm[1]), Number.parseInt(mm[2]), Number.parseInt(mm[3]), Number.parseFloat(mm[4])];
    }
    mm = input.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
    if (mm) {
        return [Number.parseInt(mm[1]), Number.parseInt(mm[2]), Number.parseInt(mm[3]), 1];
    }
    // https://www.w3schools.com/colors/colors_names.asp
    // https://en.wikipedia.org/wiki/Web_colors
    // http://www.colors.commutercreative.com/grid/
    var webColors: Record<string, string> = {
        "AliceBlue": "#F0F8FF",
        "AntiqueWhite": "#FAEBD7",
        "Aqua": "#00FFFF",
        "Aquamarine": "#7FFFD4",
        "Azure": "#F0FFFF",
        "Beige": "#F5F5DC",
        "Bisque": "#FFE4C4",
        "Black": "#000000",
        "BlanchedAlmond": "#FFEBCD",
        "Blue": "#0000FF",
        "BlueViolet": "#8A2BE2",
        "Brown": "#A52A2A",
        "BurlyWood": "#DEB887",
        "CadetBlue": "#5F9EA0",
        "Chartreuse": "#7FFF00",
        "Chocolate": "#D2691E",
        "Coral": "#FF7F50",
        "CornflowerBlue": "#6495ED",
        "Cornsilk": "#FFF8DC",
        "Crimson": "#DC143C",
        "Cyan": "#00FFFF",
        "DarkBlue": "#00008B",
        "DarkCyan": "#008B8B",
        "DarkGoldenRod": "#B8860B",
        "DarkGray": "#A9A9A9",
        "DarkGrey": "#A9A9A9",
        "DarkGreen": "#006400",
        "DarkKhaki": "#BDB76B",
        "DarkMagenta": "#8B008B",
        "DarkOliveGreen": "#556B2F",
        "DarkOrange": "#FF8C00",
        "DarkOrchid": "#9932CC",
        "DarkRed": "#8B0000",
        "DarkSalmon": "#E9967A",
        "DarkSeaGreen": "#8FBC8F",
        "DarkSlateBlue": "#483D8B",
        "DarkSlateGray": "#2F4F4F",
        "DarkSlateGrey": "#2F4F4F",
        "DarkTurquoise": "#00CED1",
        "DarkViolet": "#9400D3",
        "DeepPink": "#FF1493",
        "DeepSkyBlue": "#00BFFF",
        "DimGray": "#696969",
        "DimGrey": "#696969",
        "DodgerBlue": "#1E90FF",
        "FireBrick": "#B22222",
        "FloralWhite": "#FFFAF0",
        "ForestGreen": "#228B22",
        "Fuchsia": "#FF00FF",
        "Gainsboro": "#DCDCDC",
        "GhostWhite": "#F8F8FF",
        "Gold": "#FFD700",
        "GoldenRod": "#DAA520",
        "Gray": "#808080",
        "Grey": "#808080",
        "Green": "#008000",
        "GreenYellow": "#ADFF2F",
        "HoneyDew": "#F0FFF0",
        "HotPink": "#FF69B4",
        "IndianRed ": "#CD5C5C",
        "Indigo ": "#4B0082",
        "Ivory": "#FFFFF0",
        "Khaki": "#F0E68C",
        "Lavender": "#E6E6FA",
        "LavenderBlush": "#FFF0F5",
        "LawnGreen": "#7CFC00",
        "LemonChiffon": "#FFFACD",
        "LightBlue": "#ADD8E6",
        "LightCoral": "#F08080",
        "LightCyan": "#E0FFFF",
        "LightGoldenRodYellow": "#FAFAD2",
        "LightGray": "#D3D3D3",
        "LightGrey": "#D3D3D3",
        "LightGreen": "#90EE90",
        "LightPink": "#FFB6C1",
        "LightSalmon": "#FFA07A",
        "LightSeaGreen": "#20B2AA",
        "LightSkyBlue": "#87CEFA",
        "LightSlateGray": "#778899",
        "LightSlateGrey": "#778899",
        "LightSteelBlue": "#B0C4DE",
        "LightYellow": "#FFFFE0",
        "Lime": "#00FF00",
        "LimeGreen": "#32CD32",
        "Linen": "#FAF0E6",
        "Magenta": "#FF00FF",
        "Maroon": "#800000",
        "MediumAquaMarine": "#66CDAA",
        "MediumBlue": "#0000CD",
        "MediumOrchid": "#BA55D3",
        "MediumPurple": "#9370DB",
        "MediumSeaGreen": "#3CB371",
        "MediumSlateBlue": "#7B68EE",
        "MediumSpringGreen": "#00FA9A",
        "MediumTurquoise": "#48D1CC",
        "MediumVioletRed": "#C71585",
        "MidnightBlue": "#191970",
        "MintCream": "#F5FFFA",
        "MistyRose": "#FFE4E1",
        "Moccasin": "#FFE4B5",
        "NavajoWhite": "#FFDEAD",
        "Navy": "#000080",
        "OldLace": "#FDF5E6",
        "Olive": "#808000",
        "OliveDrab": "#6B8E23",
        "Orange": "#FFA500",
        "OrangeRed": "#FF4500",
        "Orchid": "#DA70D6",
        "PaleGoldenRod": "#EEE8AA",
        "PaleGreen": "#98FB98",
        "PaleTurquoise": "#AFEEEE",
        "PaleVioletRed": "#DB7093",
        "PapayaWhip": "#FFEFD5",
        "PeachPuff": "#FFDAB9",
        "Peru": "#CD853F",
        "Pink": "#FFC0CB",
        "Plum": "#DDA0DD",
        "PowderBlue": "#B0E0E6",
        "Purple": "#800080",
        "RebeccaPurple": "#663399",
        "Red": "#FF0000",
        "RosyBrown": "#BC8F8F",
        "RoyalBlue": "#4169E1",
        "SaddleBrown": "#8B4513",
        "Salmon": "#FA8072",
        "SandyBrown": "#F4A460",
        "SeaGreen": "#2E8B57",
        "SeaShell": "#FFF5EE",
        "Sienna": "#A0522D",
        "Silver": "#C0C0C0",
        "SkyBlue": "#87CEEB",
        "SlateBlue": "#6A5ACD",
        "SlateGray": "#708090",
        "SlateGrey": "#708090",
        "Snow": "#FFFAFA",
        "SpringGreen": "#00FF7F",
        "SteelBlue": "#4682B4",
        "Tan": "#D2B48C",
        "Teal": "#008080",
        "Thistle": "#D8BFD8",
        "Tomato": "#FF6347",
        "Turquoise": "#40E0D0",
        "Violet": "#EE82EE",
        "Wheat": "#F5DEB3",
        "White": "#FFFFFF",
        "WhiteSmoke": "#F5F5F5",
        "Yellow": "#FFFF00",
        "YellowGreen": "#9ACD32",
        "Transparent": "rgba(0,0,0,0)",
    };
    for (var p in webColors) {
        webColors[p.toLowerCase()] = webColors[p];
    }
    var wc = webColors[input.toLowerCase()];
    if (wc != null)
        return parseColor(wc);
    throw Error("'" + input + "' is not a valid color...");
}

export function colToNumber(input: string): number {
    let result = COL_CACHE[input];
    if (result === undefined) {
        const rgba = parseColor(input);
        const value = (rgba[0] * (256 * 256 * 256)) + (rgba[1] * (256 * 256)) + (rgba[2] * 256) + Math.floor(rgba[3] * 255);
        COL_CACHE[input] = value;
        result = value;

        if (Object.keys(COL_CACHE).length === 2000) {
            alert("2000 color caches have been created");
        }
    }

    return result;
}

declare let InstallTrigger: any;
var isFirefox = typeof InstallTrigger !== 'undefined';
const COL_CACHE: Record<string, number> = {

};

export function getMaxTextureSize(): number {
    if (window.WebGLRenderingContext === undefined) {
        return 0;
    }
    
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext('experimental-webgl', { antialias: false, alpha: false, preserveDrawingBuffer: true }) as WebGLRenderingContext
    if (!gl) {
        return 0;
    }
    return gl.getParameter(gl.MAX_TEXTURE_SIZE);
}

export class OpenGLGraphicsImpl implements Graphics, RenderingState {
    static NULL_COPY: NullBitmap = new NullBitmap();
    
    canvas: HTMLCanvasElement;
    offscreen: Offscreen | null = null;
    gl: WebGLRenderingContext;
    extension?: ANGLE_instanced_arrays;

    images: IOpenGLBitmap[] = [];
    atlasTextures: WebGLTexture[] | null = null;
    currentTexture: WebGLTexture | null = null;
    texWidth: number = 0;
    texHeight: number = 0;

    offscreenId: number = 1;
    offscreens: OpenGlOffscreen[] = [];
    loaded: boolean = false;
    arrayBuffer?: ArrayBuffer;
    shaderProgram?: WebGLProgram;
    glBuffer?: WebGLBuffer | null;
    maxDraws: number = 10000;
    positions?: Int16Array;
    rgbas?: Uint32Array;
    draws: number = 0;

    clipX: number = 0;
    clipY: number = 0;
    clipX2: number = 0;
    clipY2: number = 0;
    alpha: number = 255;

    currentContextState: RenderingState;

    transformCanvas: HTMLCanvasElement;
    transformCtx: CanvasRenderingContext2D;
    uniforms: Record<string, WebGLUniformLocation> = {};

    constructor() {
        this.transformCanvas = document.createElement("canvas");
        this.transformCtx = this.transformCanvas.getContext("2d")!;

        this.currentContextState = this;
        this.canvas = <HTMLCanvasElement>document.getElementById("gamecanvas");
        (<any>this.canvas).style.fontSmooth = "never";
        (<any>this.canvas).style.webkitFontSmoothing = "none";

        this.canvas.addEventListener("webglcontextlost", (event) => {
            this.lostContext();
            event.preventDefault();
        }, false);

        this.canvas.addEventListener("webglcontextrestored", (event) => {
            this.recoverContext();
        }, false);

        if (isFirefox) {
            this.canvas.style.imageRendering = "crisp-edges";
        } else {
            this.canvas.style.imageRendering = "pixelated";
        }

        this.gl = this.canvas.getContext('experimental-webgl', { antialias: false, alpha: false, preserveDrawingBuffer: false }) as WebGLRenderingContext;
        this.initGlResources();
    }

    private lostContext(): void {
        console.log("LOST GL CONTEXT");
        this.shaderProgram = undefined;
        this.atlasTextures = null;
    }

    private recoverContext(): void {
        console.log("RECOVERED GL CONTEXT");
        this.initGlResources();
        this.initResourceOnLoaded();
        for (const offscreen of this.offscreens) {
            offscreen.recover();
        }
        this.resize();
        console.log("RECREATE GL RESOURCES");
    }

    private initGlResources(): void {
        console.log("Init GL Resources");
        const extension = this.gl.getExtension('ANGLE_instanced_arrays') as ANGLE_instanced_arrays
        this.extension = extension;

        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.gl.enable(this.gl.BLEND);
        this.gl.disable(this.gl.DEPTH_TEST);

        const shortsPerImagePosition = 2
        const shortsPerImageSize = 2
        const shortsPerImageTexPos = 4
        const bytesPerImageRgba = 4

        const bytesPerImage = shortsPerImagePosition * 2 + shortsPerImageSize * 2 + shortsPerImageTexPos * 2 + bytesPerImageRgba;

        this.arrayBuffer = new ArrayBuffer(this.maxDraws * bytesPerImage)
        this.positions = new Int16Array(this.arrayBuffer)
        this.rgbas = new Uint32Array(this.arrayBuffer)

        const vertCode = "\
			attribute vec2 aSizeMult;\
			attribute vec2 aPos;\
			attribute vec2 aSize;\
			attribute vec4 aTexPos;\
			attribute vec4 aRgba;\
			\
			varying highp vec2 fragTexturePos;\
			varying vec4 fragAbgr;\
			\
			uniform vec2 uCanvasSize;\
			uniform vec2 uTexSize;\
			\
			void main(void){\
				gl_Position.x = ( (aPos.x + (aSize.x * aSizeMult.x) ) / uCanvasSize.x ) - 1.0; \
                gl_Position.y = 1.0 -  ( (aPos.y + (aSize.y * aSizeMult.y) ) / uCanvasSize.y ); \
                gl_Position.z = 0.0; \
                gl_Position.w = 1.0; \
                \
				fragTexturePos = (aTexPos.xy + aTexPos.zw * aSizeMult) / uTexSize;\
                \
                fragAbgr.x = aRgba.w/255.0; \
                fragAbgr.y = aRgba.z/255.0; \
                fragAbgr.z = aRgba.y/255.0; \
                fragAbgr.w = aRgba.x/255.0; \
			}\
		"

        // Create a vertex shader object with code.
        const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER) as WebGLShader
        this.gl.shaderSource(vertShader, vertCode)
        this.gl.compileShader(vertShader)

        // Fragment shader source code.
        const fragCode = "\
			varying highp vec2 fragTexturePos;\
			varying highp vec4 fragAbgr;\
			uniform sampler2D uSampler;\
			\
			void main(void){\
				gl_FragColor = texture2D(uSampler, fragTexturePos) * fragAbgr;\
			}\
		"

        const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER) as WebGLShader;
        this.gl.shaderSource(fragShader, fragCode);
        this.gl.compileShader(fragShader);

        const shaderProgram = this.gl.createProgram() as WebGLProgram
        this.gl.attachShader(shaderProgram, vertShader);
        this.gl.attachShader(shaderProgram, fragShader);
        this.gl.linkProgram(shaderProgram);
        this.gl.useProgram(shaderProgram);
        this.shaderProgram = shaderProgram;

        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.gl.createBuffer())
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint8Array([0, 1, 2, 2, 1, 3]), this.gl.STATIC_DRAW)

        // Our multiplier array for width/height so we can get to each corner of the image drawn.
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.gl.createBuffer())
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]), this.gl.STATIC_DRAW)

        const attribute = this.gl.getAttribLocation(shaderProgram, "aSizeMult")
        this.gl.enableVertexAttribArray(attribute)
        this.gl.vertexAttribPointer(attribute, 2, this.gl.FLOAT, false, 0, 0)

        this.glBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.glBuffer)
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.arrayBuffer, this.gl.DYNAMIC_DRAW)

        let byteOffset = 0;

        const setupAttribute = (name: string, dataType: number, amount: number) => {
            if (this.shaderProgram) {
                const attribute = this.gl.getAttribLocation(this.shaderProgram, name)
                if (attribute !== -1) {
                    this.gl.enableVertexAttribArray(attribute)
                    this.gl.vertexAttribPointer(attribute, amount, dataType, false, bytesPerImage, byteOffset)
                    extension.vertexAttribDivisorANGLE(attribute, 1)
                    if (dataType == this.gl.SHORT)
                        amount *= 2
                    if (dataType == this.gl.FLOAT)
                        amount *= 4
                    byteOffset += amount
                } else {
                    console.log("Attribute not found: " + name);
                }
            }
        }

        setupAttribute("aPos", this.gl.SHORT, shortsPerImagePosition);
        setupAttribute("aSize", this.gl.SHORT, shortsPerImageSize);
        setupAttribute("aTexPos", this.gl.SHORT, shortsPerImageTexPos);
        setupAttribute("aRgba", this.gl.UNSIGNED_BYTE, bytesPerImageRgba);
    }

    registerImage(bitmap: IOpenGLBitmap) {
        this.images.push(bitmap);
    }

    newResourceLoaded(): void {
        if (this.atlasTextures) {
            this.initResourceOnLoaded();
        }
    }

    initResourceOnLoaded(): void {
        console.log("[WEBGL] Reloading texture");

        const textureSize = Math.min(this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE), 4096 * 2);

        let list = [...this.images];
        list.sort((a, b) => a.height > b.height ? -1 : 1);

        const placed: IOpenGLBitmap[] = [];
        placed.push({ texX: 0, texY: 0, width: 1, height: 1, texIndex: -1 })
        const records = list.map(image => { return { image: image, w: image.width, h: image.height } });

        let base = 0;
        let step = 20;
        let textureCount = 0;
        for (let i = 0; i < records.length; i += step) {
            let { w, h, fill } = potpack(records.slice(base, i));
            if (w > textureSize || h > textureSize) {
                let { w, h, fill } = potpack(records.slice(base, i - step));
                records.slice(base, i - step).forEach(record => record.image.texIndex = textureCount);
                console.log(base + " -> " + (i - step - 1) + " = " + w + "x" + h);
                base = i - step;
                textureCount++;
            }
        }
        let { w, h, fill } = potpack(records.slice(base, records.length));
        records.slice(base, records.length).forEach(record => record.image.texIndex = textureCount);
        console.log(base + " -> " + (records.length - 1) + " = " + w + "x" + h);
        textureCount++;

        console.log("Packed into: " + textureCount + " textures");
        for (const record of records) {
            record.image.texX = (record as any).x + 1;
            record.image.texY = (record as any).y;
        }

        if (this.atlasTextures) {
            for (const texture of this.atlasTextures) {
                this.gl.deleteTexture(texture);
            }
        }
        this.atlasTextures = [];

        for (let i = 0; i < textureCount; i++) {
            const texture = this.gl.createTexture();
            if (texture) {
                this.atlasTextures.push(texture);

                this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
                this.gl.activeTexture(this.gl.TEXTURE0);
                this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, textureSize, textureSize, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);

                const whitePixel = document.createElement("canvas");
                const ctx = whitePixel.getContext("2d")!;
                ctx.fillStyle = '#FFF';
                ctx.fillRect(0, 0, 1, 1);
                this.gl.texSubImage2D(this.gl.TEXTURE_2D, 0, 0, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, whitePixel);

                for (var image of list.filter(lImage => lImage.texIndex === i)) {
                    this.gl.texSubImage2D(this.gl.TEXTURE_2D, 0, image.texX, image.texY, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image.image!);
                }

                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);

                this.texWidth = textureSize;
                this.texHeight = textureSize;
                if (this.shaderProgram) {
                    this.gl.uniform2f(this.getUniformLoc("uTexSize"), this.texWidth, this.texHeight);
                }
            }
        }

        this.resize();
        this.loaded = true;
    }

    resetState(): void {
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.currentContextState.clipX = 0;
        this.currentContextState.clipX2 = 0;
        this.currentContextState.clipY = 0;
        this.currentContextState.clipY2 = 0;
        this.currentContextState.alpha = 255;
    }

    getUniformLoc(name: string): WebGLUniformLocation {
        let result: WebGLUniformLocation = this.uniforms[name];
        if (!result && this.shaderProgram) {
            const loc = this.gl.getUniformLocation(this.shaderProgram, name);
            if (loc) {
                this.uniforms[name] = result = loc;
            }
        }
        
        return result;
    }

    resize() {
        // Resize the gl viewport to be the new size of the canvas.
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);

        // Update the shader variables for canvas size.
        // Sending it to gl now so we don't have to do the math in JavaScript on every draw,
        // since gl wants to draw at a position from 0 to 1, and we want to do drawImage with a screen pixel position.
        if (this.shaderProgram) {
            this.gl.uniform2f(this.getUniformLoc("uCanvasSize"), this.canvas.width / 2, this.canvas.height / 2);
        }
    }

    getError(): string | undefined {
        const error = this.gl.getError();
        if (error !== 0) {
            switch (error) {
                case WebGLRenderingContext.INVALID_ENUM:
                    return "Invalid Enum";
                case WebGLRenderingContext.INVALID_VALUE:
                    return "Invalid Value";
                case WebGLRenderingContext.INVALID_OPERATION:
                    return "Invalid Operation";
                case WebGLRenderingContext.INVALID_FRAMEBUFFER_OPERATION:
                    return "Invalid Framebuffer Operation";
                case WebGLRenderingContext.OUT_OF_MEMORY:
                    return "Out of Memory";
                // in this case we're expecting our handler to pop up
                // and restore it - so don't return an error since
                // that'll stop the rendering thread
                case WebGLRenderingContext.CONTEXT_LOST_WEBGL:
                    return undefined;

            }

            return "Unknown error - " + this.gl.getError();
        }

        return undefined;
    }

    _drawBitmap(img: IOpenGLBitmap, x: number, y: number, width: number, height: number, col: number = 0xFFFFFF00): void {
        this._drawImage(img.texIndex, img.texX, img.texY, img.width, img.height, x, y, width, height, col,
            this.currentContextState.alpha);
    }

    _drawImage(texIndex: number, texX: number, texY: number, texWidth: number, texHeight: number, drawX: number, drawY: number, width: number, height: number, rgba: number, alpha: number) {
        if (!this.atlasTextures) {
            return;
        }
        if (!this.rgbas || !this.positions) {
            return;
        }
        
        if ((texIndex >= 0) && (this.atlasTextures![texIndex] !== this.currentTexture)) {
            this.glCommitContext();
            this.currentTexture = this.atlasTextures![texIndex];
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.currentTexture);
            this.glStartContext();
        }

        let i = this.draws * 5;

        // clamp alpha to prevent overflow
        if (alpha > 255) {
            alpha = 255;
        }

        this.rgbas[i + 4] = rgba | alpha;
        i *= 2;

        let drawX2 = drawX + width;
        let drawY2 = drawY + height;
        const t1 = this.transformCtx.getTransform().transformPoint({x : drawX, y: drawY });
        const t2 = this.transformCtx.getTransform().transformPoint({x : drawX2, y: drawY2 });
        drawX = t1.x;
        drawY = t1.y;
        drawX2 = t2.x;
        drawY2 = t2.y;

        drawX = Math.floor(drawX);
        drawY = Math.floor(drawY);
        drawX2 = Math.floor(drawX2);
        drawY2 = Math.floor(drawY2);

        width = drawX2 - drawX;
        height = drawY2 - drawY;

        let screenHeight = this.canvas.height;
        if (this.offscreen) {
            screenHeight = this.offscreen.getHeight();
        }
        let screenWidth = this.canvas.width;
        if (this.offscreen) {
            screenWidth = this.offscreen.getWidth();
        }


        if ((this.currentContextState.clipY2 === 0) && (this.currentContextState.clipX2 === 0)) {
            this.currentContextState.clipY = -100;
            this.currentContextState.clipY2 = screenHeight + 100;
            this.currentContextState.clipX = -100;
            this.currentContextState.clipX2 = screenWidth + 100;
        }

        if (this.currentContextState.clipX < this.currentContextState.clipX2) {
            if (drawX > this.currentContextState.clipX2) {
                return;
            }
            if (drawX2 < this.currentContextState.clipX) {
                return;
            }
            if (drawX2 > this.currentContextState.clipX2) {
                const showPercent = 1 - (drawX2 - this.currentContextState.clipX2) / width;
                texWidth *= showPercent;
                width *= showPercent;
            }
            if (drawX < this.currentContextState.clipX) {
                const showPercent = 1 - (this.currentContextState.clipX - drawX) / width;
                width -= this.currentContextState.clipX - drawX;
                drawX = this.currentContextState.clipX;
                texX += texWidth * (1 - showPercent);
                texWidth *= showPercent;
            }
        }

        if (this.currentContextState.clipY < this.currentContextState.clipY2) {
            if (drawY > this.currentContextState.clipY2) {
                return;
            }
            if (drawY2 < this.currentContextState.clipY) {
                return;
            }
            if (drawY2 > this.currentContextState.clipY2) {
                const showPercent = 1 - (drawY2 - this.currentContextState.clipY2) / height;
                texHeight *= showPercent;
                height *= showPercent;
            }
            if (drawY < this.currentContextState.clipY) {
                const showPercent = 1 - (this.currentContextState.clipY - drawY) / height;
                height -= this.currentContextState.clipY - drawY;
                drawY = this.currentContextState.clipY;
                texY += texHeight * (1 - showPercent);
                texHeight *= showPercent;
            }
        }

        this.positions[i] = drawX;
        this.positions[i + 1] = drawY;
        this.positions[i + 2] = width;
        this.positions[i + 3] = height;

        this.positions[i + 4] = texX;
        this.positions[i + 5] = texY;
        this.positions[i + 6] = texWidth;
        this.positions[i + 7] = texHeight;

        this.draws++
    }

    glStartContext(): void {
    }

    glCommitContext(): void {
        if (this.draws > 0 && this.rgbas && this.extension) {
            this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, this.rgbas.subarray(0, this.draws * 5));
            this.extension.drawElementsInstancedANGLE(this.gl.TRIANGLES, 6, this.gl.UNSIGNED_BYTE, 0, this.draws);
            this.draws = 0;
        }
    }

    renderStart(): void {
        (this.transformCtx as any).reset();
        
        this.draws = 0;
        this.resetState();

        this.glStartContext();
    }


    renderEnd(): void {
        this.glCommitContext();
    }

    applyFont(): void {
    }

    smooth(): void {
    }

    copy(): Bitmap {
        return OpenGLGraphicsImpl.NULL_COPY;
    }

    getOffscreen(): Offscreen | null {
        return this.offscreen;
    }

    clip(x: number, y: number, width: number, height: number): void {
        const t1 = this.transformCtx.getTransform().transformPoint({ x, y });
        const t2 = this.transformCtx.getTransform().transformPoint({ x: x + width , y: y + height });

        this.currentContextState.clipX = t1.x;
        this.currentContextState.clipY = t1.y;
        this.currentContextState.clipX2 = t2.x;
        this.currentContextState.clipY2 = t2.y;
    }

    createOffscreen(): Offscreen {
        this.offscreenId++;
        const offscreen = new OpenGlOffscreen(this.gl, this, this.offscreenId);
        this.offscreens.push(offscreen);
        if (this.offscreens.length === 50) {
            console.log("50 offscreens have been created!");
        }

        return offscreen;
    }

    drawToOffscreen(screen: Offscreen | null): void {
        if (this.offscreen) {
            (this.offscreen as OpenGlOffscreen).unuse();
        }

        this.offscreen = screen;

        if (this.offscreen) {
            (this.offscreen as OpenGlOffscreen).use();
        }
    }

    drawOffscreen(screen: Offscreen): void {
        if (!this.shaderProgram) {
            return;
        }

        const offscreen = (screen as OpenGlOffscreen);
        this.glCommitContext();

        this.glStartContext();
        this.gl.uniform2f(this.getUniformLoc("uTexSize"), offscreen.width, offscreen.height);
        this.gl.bindTexture(this.gl.TEXTURE_2D, offscreen.texture);
        this._drawImage(-100, 0, offscreen.height, offscreen.width, -offscreen.height, 0, 0, offscreen.width, offscreen.height, 0xFFFFFF00, 255);
        this.glCommitContext();

        this.gl.uniform2f(this.getUniformLoc("uTexSize"), this.texWidth, this.texHeight);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.currentTexture);
        this.glStartContext();
    }

    drawScaledOffscreen(screen: Offscreen, x: number, y: number, width: number, height: number): void {
        if (!this.shaderProgram) {
            return;
        }

        const offscreen = (screen as OpenGlOffscreen);
        this.glCommitContext();

        this.glStartContext();
        this.gl.uniform2f(this.getUniformLoc("uTexSize"), offscreen.width, offscreen.height);
        this.gl.bindTexture(this.gl.TEXTURE_2D, offscreen.texture);
        this._drawImage(-100, 0, offscreen.height, offscreen.width, -offscreen.height, x, y, width, height, 0xFFFFFF00, 255);
        this.glCommitContext();

        this.gl.uniform2f(this.getUniformLoc("uTexSize"), this.texWidth, this.texHeight);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.currentTexture);
        this.glStartContext();
    }

    fillRect(x: number, y: number, width: number, height: number, col: string): void {
        let rgba = colToNumber(col);
        const a = this.alpha < 255 ? this.alpha : (rgba % 256);
        if (a < 255) {
            rgba = (rgba & 0xFFFFFF00) | a;
        }
        this._drawImage(0, 0, 0, 1, 1, x, y, width, height, rgba, a)
    }

    fillCircle(x: number, y: number, radius: number, col: string): void {
    }

    drawCircle(x: number, y: number, radius: number, col: string, width: number): void {
    }

    setLineDash(segments: number[]): void {
    }

    drawLine(x1: number, y1: number, x2: number, y2: number, col: string, width?: number | undefined): void {
    }

    drawBitmap(x: number, y: number, bitmap: Bitmap): void {
        if (bitmap) {
            bitmap.draw(this, x, y);
        }
    }

    drawScaledBitmap(x: number, y: number, width: number, height: number, bitmap: Bitmap): void {
        if (bitmap) {
            bitmap.drawScaled(this, x, y, width, height);
        }
    }

    clearRect(x: number, y: number, width: number, height: number): void {
        this.glCommitContext();

        this.glStartContext();
        this.gl.blendFunc(this.gl.ZERO, this.gl.ZERO);
        this.fillRect(x, y, width, height, "rgba(0,0,0,0)");
        this.glCommitContext();
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

        this.glStartContext();
    }

    clear(): void {
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    setFont(font: Font): void {
        // IGNORED
    }

    setComposite(name: string): void {
        if (name === "multiply") {
            this.glCommitContext();

            this.glStartContext();
            this.gl.blendFunc(this.gl.ZERO, this.gl.SRC_COLOR);
        }
        if (name === "source-over") {
            this.glCommitContext();

            this.glStartContext();
            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        }
    }

    setFontSize(size: number): void {
        // IGNORED
    }

    drawString(x: number, y: number, text: string, col: string): void {
        // IGNORED
    }

    translate(x: number, y: number) {
        this.transformCtx.translate(x, y);
    }

    scale(x: number, y: number): void {
        this.transformCtx.scale(x, y);
    }

    push(): void {
        this.transformCtx.save();
    }

    pop(): void {
        this.transformCtx.restore();
        this.resetState();
    }

    getWidth(): number {
        return this.canvas.width;
    }

    getHeight(): number {
        return this.canvas.height;
    }

    fitScreen(pixelScale: number): void {
        const width: number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const height: number = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        const realWidth: number = Math.floor(width / pixelScale) * pixelScale;
        const realHeight: number = Math.floor(height / pixelScale) * pixelScale;
        const virtualWidth: number = realWidth / pixelScale;
        const virtualHeight: number = realHeight / pixelScale;
        this.canvas.style.position = "absolute";
        this.canvas.style.top = "0px";
        this.canvas.style.left = "0px";
        this.canvas.width = virtualWidth;
        this.canvas.height = virtualHeight;
        this.canvas.style.width = realWidth + "px";
        this.canvas.style.height = realHeight + "px";
    }

    getStringWidth(text: string): number {
        return 0;
    }

    setAlpha(alpha: number): void {
        this.currentContextState.alpha = Math.floor(alpha * 255);
    }

    getTransform(): DOMMatrix {
        return this.transformCtx.getTransform();
    }


}