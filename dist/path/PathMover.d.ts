export interface PathMover {
    getWidth(): number;
    getHeight(): number;
    getTarget(): PathMover | null;
    getY(): number;
    getX(): number;
}
