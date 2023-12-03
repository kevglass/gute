import { MapLevel } from "./MapLevel";
export declare class MapEntity {
    id?: string;
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    level: MapLevel;
    fields: any;
    constructor(level: MapLevel, x: number, y: number, width: number, height: number, type: string);
    copy(level: MapLevel): MapEntity;
}
