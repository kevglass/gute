import { Resource } from "./Resource";
export interface Sound extends Resource {
    name: string;
    play(volume: number, loop?: boolean): void;
    stop(): void;
}
