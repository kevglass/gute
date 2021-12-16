import { Resource } from "./Resource";

export interface Sound extends Resource {
  play(volume: number, loop?: boolean): void;

  stop(): void;
}