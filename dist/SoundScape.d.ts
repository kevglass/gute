import { Sound } from "./Sound";
export declare enum SoundEasing {
    Linear = 0,
    Quadratic = 1,
    Cubic = 2
}
export declare class SoundScape {
    private _soundVolume;
    private points;
    private listenerX;
    private listenerY;
    private categories;
    category(name: string, volume: number, maxDistance: number, scale: number, easing: SoundEasing): SoundScape;
    get soundVolume(): number;
    set soundVolume(value: number);
    moveTo(x: number, y: number): void;
    clear(): void;
    play(sound: Sound, volume: number, category: string, x?: number, y?: number): void;
    private updateVolumes;
    private calculateVolume;
}
