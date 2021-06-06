import { Resource } from "../Resource";
import { MapWorld } from "./MapWorld";
export declare class LDTKWorld extends MapWorld implements Resource {
    initOnFirstClick(): void;
    load(json: any): LDTKWorld;
}
