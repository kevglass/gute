import { MapLevel } from "./MapLevel";
export declare class MapWorld {
    levels: Record<string, MapLevel>;
    gridSize: number;
    tilesetScanline: number;
    tilesetSize: number;
    loaded: boolean;
    constructor();
}
