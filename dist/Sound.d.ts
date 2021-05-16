import { Resource } from "./Resource";
export interface Sound extends Resource {
    play(volume: number): void;
    stop(): void;
}
