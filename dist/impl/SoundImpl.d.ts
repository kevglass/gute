import { Sound } from "../Sound";
export declare class SoundImpl implements Sound {
    static CURRENT_MUSIC: SoundImpl | null;
    loaded: boolean;
    data: ArrayBuffer;
    volume: number;
    buffer: AudioBuffer;
    music: boolean;
    source: AudioBufferSourceNode | null;
    gain: GainNode;
    url: string;
    constructor(url: string, music: boolean);
    private tryLoad;
    initOnFirstClick(): void;
    play(volume: number): void;
    stop(): void;
}
