import { MapNode } from "./MapNode";
import { Path } from "./Path";
import { PathFinderMap } from "./PathFinderMap";
import { PathMover } from "./PathMover";

export class AStarPathFinder {
    public static NORTH_TO_SOUTH = 0;
    public static EAST_TO_WEST = 1;
    public static SOUTH_TO_NORTH = 2;
    public static WEST_TO_EAST = 3;
    public static NONE = 4;

    private objectPool: Array<MapNode> = [];
    private openList: Array<MapNode> = [];
    private open: Array<Array<number>>;
    private closed: Array<Array<number>>;

    private map: PathFinderMap;
    private height: number;
    private width: number;

    private pathFindCounter: number = 1;
    private ignoreFinalOccupation!: boolean;
    private mover!: PathMover;
    private tx!: number;
    private ty!: number;
    private max!: number;

    public constructor(map: PathFinderMap) {
        this.width = map.getMapWidth();
        this.height = map.getMapHeight();
        this.map = map;

        this.open = new Array<Array<number>>();
        this.closed = new Array<Array<number>>();
        
        for (var i=0;i<this.width*this.height;i++) {
            var o = new Array<number>();
            var c = new Array<number>();
            
            for (var j=0;j<5;j++) {
                o.push(0);
                c.push(0);
            }
            
            this.open.push(o);
            this.closed.push(c);
        }
    }

    public clear(): void {
        for (var i=0;i<this.openList.length;i++) {
            this.objectPool.push(this.openList[i]);
        }
        this.openList = new Array<MapNode>();
        this.pathFindCounter++;
    }

    private generatePath(node: MapNode): Path {
        var current: MapNode | null = node;
        var path: Path = new Path();

        while (current != null) {
            path.add(current.x, current.y);
            current = current.parent;
        }

        return path;
    }

    private blocked(sx: number, sy: number, x: number, y: number): boolean {
        var ignoreActors: boolean = this.ignoreFinalOccupation && this.atTarget(x, y);

        if (!this.map.locationDiscovered(x, y)) {
            return true;
        }
        if (this.map.blocked(this.mover, null, sx, sy, x, y, ignoreActors, this.atTarget(x,y))) {
            return true;
        }

        return false;
    }

    private atTarget(x: number, y: number): boolean {
        for (var xs = 0; xs < this.mover.getTilesWidth(); xs++) {
            for (var ys = 0; ys < this.mover.getTilesHeight(); ys++) {
                if ((x + xs == this.tx) && (y + ys == this.ty)) {
                    return true;
                }
            }
        }

        return false;
    }

    public findPath(mover: PathMover, tx: number, ty: number, max: number,
        ignoreFinalOccupation: boolean, runAway: boolean): Path | null {
        
        tx = Math.floor(tx);
        ty = Math.floor(ty);
        
        
        this.max = max;
        this.ignoreFinalOccupation = ignoreFinalOccupation;
        this.mover = mover;
        this.tx = tx;
        this.ty = ty;

        if (this.blocked(tx, ty, tx, ty)) {
            return null;
        }
        this.clear();

        this.addLocation(null, Math.floor(mover.getTileMapX()), Math.floor(mover.getTileMapY()));
        while (this.openList.length > 0) {
            var best: MapNode = this.openList[0];
            this.openList.splice(0,1);
            
            // if best is the target then we've found it!
            if (this.atTarget(best.x, best.y)) {
                return this.generatePath(best);
            }

            this.addLocation(best, best.x + 1, best.y);
            this.addLocation(best, best.x - 1, best.y);
            this.addLocation(best, best.x, best.y + 1);
            this.addLocation(best, best.x, best.y - 1);
        }

        return null;
    }

    private addLocation(parent: MapNode | null, x: number, y: number): void {
        x = Math.floor(x);
        y = Math.floor(y);
        
        var sx = x;
        var sy = y;
        var dir = AStarPathFinder.NONE;

        if (parent != null) {
            sx = parent.x;
            sy = parent.y;

            if (sy + 1 == y) {
                dir = AStarPathFinder.NORTH_TO_SOUTH;
            }
            if (sy - 1 == y) {
                dir = AStarPathFinder.SOUTH_TO_NORTH;
            }
            if (sx + 1 == x) {
                dir = AStarPathFinder.WEST_TO_EAST;
            }
            if (sx - 1 == x) {
                dir = AStarPathFinder.EAST_TO_WEST;
            }
        }


        if (!this.map.validLocation(x, y)) {
            return;
        }
        
        // if it's in the open list ignore
        if (this.open[x + (y * this.width)][dir] == this.pathFindCounter) {
            return;
        }
        if (this.closed[x + (y * this.width)][dir] == this.pathFindCounter) {
            return;
        }

        // if it's blocked for any reason, add it to the closed
        if (parent != null) {
            if (parent.depth > this.max) {
                this.closed[x + (y * this.width)][dir] = this.pathFindCounter;
                return;
            }
        }
        if (!this.map.locationDiscovered(x, y)) {
            this.closed[x + (y * this.width)][dir] = this.pathFindCounter;
            return;
        }
        if (this.blocked(sx, sy, x, y)) {
            this.closed[x + (y * this.width)][dir] = this.pathFindCounter;
            return;
        }

        // otherwise it's a possible step add it to the open
        this.open[x + (y * this.width)][dir] = this.pathFindCounter;

        var node: MapNode = this.createMapNode(x, y, parent, this.getHeuristic(x, y));
        for (var i = 0; i < this.openList.length; i++) {
            var current: MapNode = this.openList[i];
            if (current.h > node.h) {
                this.openList.splice(i, 0, node);
                return;
            }
        }

        // if no where else add it at the end
        this.openList.push(node);
    }

    private getHeuristic(x: number, y: number): number {
        // distance squared
        var dx: number = Math.abs(this.tx - x);
        var dy: number = Math.abs(this.ty - y);

        return (dx * dx) + (dy * dy);
    }


    // object pool accessor - free is done in bulk
    private createMapNode(x: number, y: number, parent: MapNode | null, h: number): MapNode {
        if (this.objectPool.length == 0) {
            var n : MapNode = new MapNode();
            this.objectPool.push(n);
        }

        var node: MapNode = this.objectPool[0];
        this.objectPool.splice(0,1);
        node.x = x;
        node.y = y;
        node.parent = parent;
        node.h = h;
        if (parent != null) {
            node.depth = parent.depth + 1;
        } else {
            node.depth = 0;
        }
        return node;
    }

}