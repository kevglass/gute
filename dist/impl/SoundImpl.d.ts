import { Sound } from "../Sound";
export declare let AUDIO_CONTEXT: AudioContext;
export declare class SoundImpl implements Sound {
    static CURRENT_MUSIC: SoundImpl | null;
    static CURRENT_LOOPS: SoundImpl[];
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
    name: string;
    constructor(url: string, music: boolean, arrayBuffer: Promise<ArrayBuffer> | undefined);
    private tryLoad;
    confirmAudioContext(): void;
    initOnFirstClick(): void;
    play(volume: number, loop?: boolean): void;
    stop(remove?: boolean): void;
}
