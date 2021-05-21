import { LDTKLevel } from "./LDTKLevel";
export declare class LDTKEntity {
    type: string;
    x: number;
    y: number;
    level: LDTKLevel;
    fields: any;
    constructor(level: LDTKLevel, layerData: any, data: any);
}
