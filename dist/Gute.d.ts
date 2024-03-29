import { Game } from "./Game";
export declare function isSoundOn(): boolean;
export declare function isMusicOn(): boolean;
export declare function shouldUseXbr(): boolean;
export declare function setUseXbr(on: boolean): void;
export declare function shouldPrescaleTilesets(): boolean;
export declare function setPrescaleTilesets(on: boolean): void;
export declare function setSoundOn(on: boolean): void;
export declare function setMusicOn(on: boolean): void;
export declare function startGame(game: Game, renderer?: Renderer): void;
export declare enum Renderer {
    CANVAS = "Canvas",
    OPENGL = "OpenGL"
}
