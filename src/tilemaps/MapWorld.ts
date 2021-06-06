import { Resource } from "../Resource";
import { MapLevel } from "./MapLevel";

export class MapWorld {
  levels: Record<string, MapLevel> = {};
  gridSize: number = 0;
  tilesetScanline: number = 0;
  tilesetSize: number = 0;
  loaded: boolean = false;

  constructor() {
  }
}