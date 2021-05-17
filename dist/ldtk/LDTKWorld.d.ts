import { Resource } from "../Resource";
import { LDTKLevel } from "./LDTKLevel";
export declare class LDTKWorld implements Resource {
    levels: Record<string, LDTKLevel>;
    gridSize: number;
    tilesetScanline: number;
    tilesetSize: number;
    loaded: boolean;
    constructor();
    initOnFirstClick(): void;
    load(json: any): LDTKWorld;
}
