import { MapEntity } from "./MapEntity";
import { MapLayer } from "./MapLayer";
import { MapWorld } from "./MapWorld";
export declare class MapLevel {
    id: string;
    layers: MapLayer[];
    layerByName: Record<string, MapLayer>;
    width: number;
    height: number;
    world: MapWorld;
    entities: MapEntity[];
    constructor(world: MapWorld, id: string);
    getFirstEntityOfType(type: string): MapEntity | null;
}
