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
    private parentList: Array<MapNode> = [];
    private open: Array<Array<number>> = [];
    private closed: Array<Array<number>> = [];

    private map!: PathFinderMap;
    private height!: number;
    private width!: number;

    private pathFindCounter: number = 1;
    private mover!: PathMover;
    private tx!: number[];
    private ty!: number[];
    private cx!: number;
    private cy!: number;
    private max!: number;

    public constructor(map: PathFinderMap) {
        this.setMap(map);
    }

    public setMap(map: PathFinderMap) {
        this.width = map.getMapWidth();
        this.height = map.getMapHeight();
        this.map = map;

        if (!this.open) {
            this.open = new Array<Array<number>>();
        }
        if (!this.closed) {
            this.closed = new Array<Array<number>>();
        }

        for (var i = 0; i < this.width * this.height; i++) {
            let o = this.open[i] 
            let c = this.closed[i];

            if (!o) {
                this.open[i] = o = new Array<number>();
                for (var j = 0; j < 5; j++) {
                    o.push(0);
                }
            }
            if (!c) {
                this.closed[i] = c = new Array<number>();
                for (var j = 0; j < 5; j++) {
                    c.push(0);
                }
            }

            for (var j = 0; j < 5; j++) {
                o[j] = 0;
                c[j] = 0;
            }
        }
    }

    public clear(): void {
        for (let node of this.openList) {
            this.objectPool.push(node);
        }
        for (let node of this.parentList) {
            this.objectPool.push(node);
        }
        this.parentList = []
        this.openList = []
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
        if (!this.map.locationDiscovered(x, y)) {
            return true;
        }

        return this.map.blocked(this.mover, null, sx, sy, x, y, this.atTarget(x, y));
    }

    private atTarget(x: number, y: number): boolean {
        for (let i = 0; i < this.tx.length; i++) {
            const tx = this.tx[i]
            const ty = this.ty[i]
            if (tx >= x && tx < x + this.mover.getTilesWidth()
                && ty >= y && ty < y + this.mover.getTilesHeight())
                return true
        }
        return false
    }

    public findPath(mover: PathMover, tx: number, ty: number, width: number, height: number, max: number): Path | null {

        tx = Math.floor(tx);
        ty = Math.floor(ty);


        this.max = max;
        this.mover = mover;
        this.tx = [];
        this.ty = [];
        // central point for heuristic ordering
        this.cx = tx + width / 2
        this.cy = ty + height / 2

        for (let i = 0; i < width; i++) {
            this.tx.push(tx + i)
            this.ty.push(ty)
            if (height > 1) {
                this.tx.push(tx + i)
                this.ty.push(ty + height - 1)
            }
        }

        if (height > 2) {
            for (let i = 1; i < height - 1; i++) {
                this.tx.push(tx)
                this.ty.push(ty + i)
                if (width > 1) {
                    this.tx.push(tx + width - 1)
                    this.ty.push(ty + i)
                }
            }
        }

        if (this.tx.length === 0)
            return null // zero size

        // console.log(`Destinations: (${tx},${ty})x(${width},${height}) => [${this.tx}] x [${this.ty}]`)
        this.clear();

        this.addLocation(null, Math.floor(mover.getTileMapX()), Math.floor(mover.getTileMapY()));
        while (this.openList.length > 0) {
            const best: MapNode = this.openList[0];
            this.openList.splice(0, 1);

            // if best is the target then we've found it!
            if (this.atTarget(best.x, best.y)) {
                return this.generatePath(best);
            }

            this.addLocation(best, best.x + 1, best.y);
            this.addLocation(best, best.x - 1, best.y);
            this.addLocation(best, best.x, best.y + 1);
            this.addLocation(best, best.x, best.y - 1);

            this.parentList.push(best)
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

        const dx: number = Math.abs(this.cx - x);
        const dy: number = Math.abs(this.cy - y);

        const node: MapNode = this.createMapNode(x, y, parent, (dx * dx) + (dy * dy));
        const index = AStarPathFinder.binarySearch(this.openList, node.h)
        this.openList.splice(index, 0, node);
    }

    private static binarySearch(array: MapNode[], h: number) {
        let lo = -1, hi = array.length;
        while (1 + lo < hi) {
            const mi = lo + ((hi - lo) >> 1);
            if (array[mi].h > h) {
                hi = mi;
            } else {
                lo = mi;
            }
        }
        return hi;
    }

    // object pool accessor - free is done in bulk
    private createMapNode(x: number, y: number, parent: MapNode | null, h: number): MapNode {
        if (this.objectPool.length == 0) {
            var n: MapNode = new MapNode();
            this.objectPool.push(n);
        }

        var node: MapNode = this.objectPool[0];
        this.objectPool.splice(0, 1);
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
