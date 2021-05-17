import { Step } from "./Step";
export declare class Path {
    steps: Array<Step>;
    add(x: number, y: number): void;
    getLength(): number;
    getStep(i: number): Step;
    getLastStep(): Step;
    pop(): Step;
}
