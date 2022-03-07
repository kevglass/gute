interface Col {
    r: number;
    g: number;
    b: number;
}
export declare class Palette {
    cols: Col[];
    mapping: Record<number, Col>;
    constructor(hexValues: string);
    findBestMatch(r: number, g: number, b: number): Col;
    adjustImage(image: HTMLImageElement): Promise<HTMLImageElement>;
}
export {};
