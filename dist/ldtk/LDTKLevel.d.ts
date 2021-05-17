import { LDTKEntity } from "./LDTKEntity";
import { LDTKLayer } from "./LDTKLayer";
import { LDTKWorld } from "./LDTKWorld";
export declare class LDTKLevel {
    id: string;
    layers: LDTKLayer[];
    layerByName: Record<string, LDTKLayer>;
    width: number;
    height: number;
    world: LDTKWorld;
    entities: LDTKEntity[];
    constructor(world: LDTKWorld, data: any);
    getFirstEntityOfType(type: string): LDTKEntity | null;
}
