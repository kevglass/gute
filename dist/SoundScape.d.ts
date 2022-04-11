import { Sound } from "./Sound";
export declare class SoundScape {
    private points;
    private listenerX;
    private listenerY;
    private maxDistance2;
    private scale2;
    constructor(maxDistance: number, scale: number);
    moveTo(x: number, y: number): void;
    clear(): void;
    play(sound: Sound, volume: number, x?: number, y?: number): void;
    private updateVolumes;
    private calculateVolume;
}
