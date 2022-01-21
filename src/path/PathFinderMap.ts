import { PathMover } from "./PathMover";

export interface PathFinderMap {

    getMapWidth(): number;

    getMapHeight(): number;

    locationDiscovered(x: number, y: number): boolean;

    blocked(mover: PathMover, object: PathMover | null, sx: number, sy: number, x: number, y: number, lastStep: boolean): boolean;

    getMoverAt(tx: number, ty: number): PathMover | null;

    validLocation(x: number, y: number): boolean;
}
