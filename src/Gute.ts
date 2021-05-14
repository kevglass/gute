import { Bitmap } from "./Bitmap";
import { Game } from "./Game";
import { GameContext } from "./GameContext";
import { BitmapImpl } from "./impl/BitmapImpl";
import { TilesetImpl } from "./impl/TilesetImpl";
import { Resource } from "./Resource";
import { Tileset } from "./Tileset";

let GAME_LOOP: GameLoop;

export function startGame(game: Game) {
  GAME_LOOP = new GameLoop().start(game);
}

class GameLoop implements GameContext {
  resources: Resource[] = [];
  
  allResourcesLoaded(): boolean {
    throw new Error("Method not implemented.");
  }

  start(game: Game): GameLoop {
    game.init(this);

    requestAnimationFrame(() => {
      this.loop();
    });

    return this;
  }

  loop(): void {
    requestAnimationFrame(() => {
      this.loop();
    });
  }

  loadBitmap(url: string): Bitmap {
    const bitmap: Bitmap = new BitmapImpl(url);
    this.resources.push(bitmap);
    
    return bitmap;
  }

  loadTileset(url: string, tileWidth: number, tileHeight: number): Tileset {
    const tileset: Tileset = new TilesetImpl(url, tileWidth, tileHeight);
    this.resources.push(tileset);
    return tileset;
  }
}