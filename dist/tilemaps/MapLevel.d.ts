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
    worldX: number;
    worldY: number;
    constructor(world: MapWorld, id: string);
    entitiesOfType(type: string): MapEntity[];
    firstEntityOfType(type: string): MapEntity | undefined;
    copy(id: string): MapLevel;
}
