import { Resource } from ".";

export interface Sound extends Resource {
  play(volume: number): void;

  stop(): void;
}