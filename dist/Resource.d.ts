export interface Resource {
    loaded: boolean;
    name: string;
    initOnFirstClick(): void;
}
