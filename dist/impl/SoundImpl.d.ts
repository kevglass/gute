import { Sound } from "../Sound";
export declare class SoundImpl implements Sound {
    static CURRENT_MUSIC: SoundImpl | null;
    static soundVolume: number;
    static musicVolume: number;
    static setSoundVolume(v: number): void;
    static getSoundVolume(): number;
    static setMusicVolume(v: number): void;
    static getMusicVolume(): number;
    loaded: boolean;
    data: ArrayBuffer;
    volume: number;
    buffer: AudioBuffer;
    music: boolean;
    source: AudioBufferSourceNode | null;
    gain: GainNode;
    url: string;
    looped: boolean;
    constructor(url: string, music: boolean);
    private tryLoad;
    initOnFirstClick(): void;
    play(volume: number, loop?: boolean): void;
    stop(): void;
}
