import { MapLevel } from "./MapLevel";
export declare class MapLayer {
    name: string;
    level: MapLevel;
    width: number;
    height: number;
    tiles: number[];
    constructor(level: MapLevel, name: string, width: number, height: number);
    get(x: number, y: number): number;
}
