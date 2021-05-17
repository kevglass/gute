import { LDTKLevel } from "./LDTKLevel";
export declare class LDTKEntity {
    type: string;
    x: number;
    y: number;
    level: LDTKLevel;
    constructor(level: LDTKLevel, layerData: any, data: any);
}
