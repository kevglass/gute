import { Step } from "./Step";

export class Path {
    steps: Array<Step> = new Array<Step>();

    add(x: number, y: number): void {
        this.steps.splice(0, 0, new Step(x, y));
    }

    getLastStep(): Step {
        return this.steps[this.steps.length - 1];
    }

    pop(): Step {
        const result: Step = this.steps[0];
        this.steps.splice(0, 1);
        return result;
    }
}