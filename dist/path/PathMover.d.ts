export interface PathMover {
    getTilesWidth(): number;
    getTilesHeight(): number;
    getTarget(): PathMover | null;
    getTileMapY(): number;
    getTileMapX(): number;
}
