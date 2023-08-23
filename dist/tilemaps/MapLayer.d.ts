import { MapLevel } from "./MapLevel";
export declare class MapLayer {
    static FLIP_X: number;
    static FLIP_Y: number;
    name: string;
    level: MapLevel;
    width: number;
    height: number;
    tiles: number[];
    flips: number[];
    constructor(level: MapLevel, name: string, width: number, height: number);
    getFlipFlags(x: number, y: number): number;
    set(x: number, y: number, value: number): void;
    get(x: number, y: number): number;
    copy(level: MapLevel): MapLayer;
}
