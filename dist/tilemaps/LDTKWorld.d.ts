import { Resource } from "../Resource";
import { MapWorld } from "./MapWorld";
export interface LDTKLayerCompression {
    from: string;
    to: string;
    offset: number;
}
export declare class LDTKWorld extends MapWorld implements Resource {
    static LAYER_COMPRESSIONS: LDTKLayerCompression[];
    name: string;
    tilesets: any[];
    initOnFirstClick(): void;
    load(file: string, loader: (file: string) => Promise<any>): Promise<MapWorld>;
    private static loadLayers;
}
