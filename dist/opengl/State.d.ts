export declare class State {
    alphas: number[];
    transforms: any[];
    states: any[];
    positions: Int16Array;
    rotations: Float32Array;
    rgbas: Uint32Array;
    draws: number;
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
    maxDraws: number;
    alpha: number;
    gl: WebGLRenderingContext;
    name: string;
    constructor(gl: WebGLRenderingContext, name: string);
    reset(): void;
}
