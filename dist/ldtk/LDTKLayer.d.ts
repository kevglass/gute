import { LDTKLevel } from "./LDTKLevel";
export declare class LDTKLayer {
    name: string;
    level: LDTKLevel;
    width: number;
    height: number;
    tiles: number[];
    constructor(level: LDTKLevel, data: any);
    get(x: number, y: number): number;
}
