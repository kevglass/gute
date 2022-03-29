import { Resource } from "../Resource";
import { MapWorld } from "./MapWorld";
export declare class LDTKWorld extends MapWorld implements Resource {
    name: string;
    initOnFirstClick(): void;
    load(file: string, loader: (file: string) => Promise<any>): Promise<MapWorld>;
    private static loadLayers;
}
