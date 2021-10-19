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
    fields: any;
    constructor(world: MapWorld, id: string);
    getFirstEntityOfType(type: string): MapEntity | null;
    copy(id: string): MapLevel;
}
