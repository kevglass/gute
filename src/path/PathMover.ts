export interface PathMover {
    
    getWidth(): number;

    getHeight(): number;

    getTarget(): PathMover;
    
    getY(): number;

    getX(): number;
}