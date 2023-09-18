import { GameContext } from "./GameContext";
import { Graphics } from "./Graphics";
export interface Game {
    init(context: GameContext): void;
    onMouseDown(context: GameContext, x: number, y: number, id: number): void;
    onMouseWheel(context: GameContext, delta: number): void;
    onMouseUp(context: GameContext, x: number, y: number, id: number): void;
    onMouseMove(context: GameContext, x: number, y: number): void;
    onKeyDown(context: GameContext, key: string): void;
    onKeyUp(context: GameContext, key: string): void;
    update(context: GameContext, delta: number): void;
    render(context: GameContext, g: Graphics): void;
    rendererError(message: string): void;
}
