import { Graphics, LDTKWorld } from ".";
import { Bitmap } from "./Bitmap";
import { Font } from "./Font";
import { Game } from "./Game";
import { GameContext } from "./GameContext";
import { BitmapImpl } from "./impl/BitmapImpl";
import { FontImpl } from "./impl/FontImpl";
import { GraphicsImpl } from "./impl/GraphicsImpl";
import { SoundImpl } from "./impl/SoundImpl";
import { TilesetImpl } from "./impl/TilesetImpl";
import { Resource } from "./Resource";
import { Sound } from "./Sound";
import { Tileset } from "./Tileset";

let GAME_LOOP: GameLoop;

export function startGame(game: Game) {
  GAME_LOOP = new GameLoop().start(game);
}

class GameLoop implements GameContext {
  resources: Resource[] = [];
  game!: Game;
  lastFrame: number = 0;
  graphics!: GraphicsImpl;
  inited: boolean = false;

  getGraphics(): Graphics {
    return this.graphics;
  }

  allResourcesLoaded(): boolean {
    for (const resource of this.resources) {
      if (!resource.loaded) {
        return false;
      }
    }

    return true;
  }

  private initResourcesOnFirstClick(): void {
    if (!this.allResourcesLoaded()) {
      return;
    }

    if (!this.inited) {
      this.inited = true;

      for (const resource of this.resources) {
        resource.initOnFirstClick();
      }
    }
  }

  private mouseDownHandler(x: number, y: number, id: number = 0): void {
    this.initResourcesOnFirstClick();

    const canvas: HTMLCanvasElement = this.graphics.canvas;
    canvas.focus();

    const width: number = canvas.clientWidth;
    const height: number = canvas.clientHeight;

    x = Math.floor((x / width) * canvas.width);
    y = Math.floor((y / height) * canvas.height);

    this.game.onMouseDown(this, x, y);
  }

  private mouseUpHandler(x: number, y: number, id: number = 0): void {
    this.initResourcesOnFirstClick();

    const canvas: HTMLCanvasElement = this.graphics.canvas;
    const width: number = canvas.clientWidth;
    const height: number = canvas.clientHeight;

    x = Math.floor((x / width) * canvas.width);
    y = Math.floor((y / height) * canvas.height);

    this.game.onMouseUp(this, x, y);
  }

  private keyDownHandler(key: string): void {
    this.initResourcesOnFirstClick();

    this.game.onKeyDown(this, key);
  }

  private keyUpHandler(key: string): void {
    this.game.onKeyUp(this, key);
  }

  start(game: Game): GameLoop {
    this.game = game;
    this.graphics = new GraphicsImpl();

    this.graphics.canvas.addEventListener("mousedown", (event) => {
      try {
        if (event.button === 0) {
          this.mouseDownHandler(event.offsetX, event.offsetY);
          event.preventDefault();
          event.stopPropagation();
        }
      } catch (e) {
        console.log(e);
      }
    });
    this.graphics.canvas.addEventListener("mouseup", (event) => {
      try {
        if (event.button === 0) {
          this.mouseUpHandler(event.offsetX, event.offsetY);
          event.preventDefault();
          event.stopPropagation();
        }
      } catch (e) {
        console.log(e);
      }
    });

    window.addEventListener("keydown", (event) => {
      this.keyDownHandler(event.key);
      event.preventDefault();
      event.stopPropagation();
    });
    window.addEventListener("keyup", (event) => {
      this.keyUpHandler(event.key);
      event.preventDefault();
      event.stopPropagation();
    });

    game.init(this);

    requestAnimationFrame(() => {
      this.loop();
    });

    return this;
  }

  loop(): void {
    const now: number = new Date().getTime();
    let delta: number = 0;
    if (this.lastFrame !== 0) {
      delta = now - this.lastFrame;
    }
    this.lastFrame = now;

    this.graphics.applyFont();
    this.game.update(this, delta);
    this.game.render(this, this.graphics);

    requestAnimationFrame(() => {
      this.loop();
    });
  }

  loadMusic(url: string): Sound {
    const sound: Sound = new SoundImpl(url, true);
    this.resources.push(sound);

    return sound;
  }

  loadSound(url: string): Sound {
    const sound: Sound = new SoundImpl(url, false);
    this.resources.push(sound);

    return sound;
  }

  loadBitmap(url: string): Bitmap {
    const bitmap: Bitmap = new BitmapImpl(url);
    this.resources.push(bitmap);

    return bitmap;
  }

  loadScaledTileset(url: string, tileWidth: number, tileHeight: number, scale: number): Tileset {
    const tileset: Tileset = new TilesetImpl(url, tileWidth, tileHeight, scale);
    this.resources.push(tileset);
    return tileset;
  }
  loadTileset(url: string, tileWidth: number, tileHeight: number): Tileset {
    const tileset: Tileset = new TilesetImpl(url, tileWidth, tileHeight, 1);
    this.resources.push(tileset);
    return tileset;
  }

  loadFont(url: string, name: string): Font {
    return new FontImpl(url, name);
  }

  loadLDTK(url: string): LDTKWorld {
    const world: LDTKWorld = new LDTKWorld();
    this.resources.push(world);
    
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    
    req.onload = (event) => {
      if (req.responseText) {
        world.load(JSON.parse(req.responseText));
      }
    };
    
    req.send(null);

    return world
  }
}