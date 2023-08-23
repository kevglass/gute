import { Step } from "./Step";
export declare class Path {
    steps: Array<Step>;
    add(x: number, y: number): void;
    getLastStep(): Step;
    pop(): Step;
    copy(): Path;
}
