import { Bitmap } from "./Bitmap";
import { Font } from "./Font";
import { Game } from "./Game";
import { GameContext } from "./GameContext";
import { Graphics } from "./Graphics";
import { BitmapImpl } from "./impl/BitmapImpl";
import { FontImpl } from "./impl/FontImpl";
import { GraphicsImpl } from "./impl/GraphicsImpl";
import { SoundImpl } from "./impl/SoundImpl";
import { TilesetImpl } from "./impl/TilesetImpl";
import { Resource } from "./Resource";
import { Sound } from "./Sound";
import { LDTKWorld } from "./tilemaps/LDTKWorld";
import { MapWorld } from "./tilemaps/MapWorld";
import { Tileset } from "./Tileset";
import * as JSZip from "jszip";

let GAME_LOOP: GameLoop;
let SOUND_ON: boolean = true;
let MUSIC_ON: boolean = true;

export function isSoundOn(): boolean {
  return SOUND_ON;
}

export function isMusicOn(): boolean {
  return MUSIC_ON;
}

export function setSoundOn(on: boolean): void {
  SOUND_ON = on;
}

export function setMusicOn(on: boolean): void {
  if (!on && MUSIC_ON) {
    MUSIC_ON = false;
    if (SoundImpl.CURRENT_MUSIC) {
      SoundImpl.CURRENT_MUSIC.stop();
    }
  }

  if (on && !MUSIC_ON) {
    MUSIC_ON = true;
    if (SoundImpl.CURRENT_MUSIC) {
      SoundImpl.CURRENT_MUSIC.play(SoundImpl.CURRENT_MUSIC.volume);
    }
  }
}

export function startGame(game: Game) {
  GAME_LOOP = new GameLoop().start(game);
}

class GameLoop implements GameContext {
  resources: Resource[] = [];
  game!: Game;
  lastFrame: number = 0;
  graphics!: GraphicsImpl;
  inited: boolean = false;
  mainZip: any | undefined = undefined;

  getGraphics(): Graphics {
    return this.graphics;
  }

  resourcesRemaining(): number {
    return this.resources.filter(r => !r.loaded).length;
  }

  resourcesTotal(): number {
    return this.resources.length;
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

  private mouseMoveHandler(x: number, y: number, id: number = 0): void {
    this.initResourcesOnFirstClick();

    const canvas: HTMLCanvasElement = this.graphics.canvas;
    canvas.focus();

    const width: number = canvas.clientWidth;
    const height: number = canvas.clientHeight;

    x = Math.floor((x / width) * canvas.width);
    y = Math.floor((y / height) * canvas.height);

    this.game.onMouseMove(this, x, y);
  }

  private mouseWheelHandler(delta: number): void {
    this.game.onMouseWheel(this, delta);
  }

  private mouseDownHandler(x: number, y: number, id: number = 0): void {
    this.initResourcesOnFirstClick();

    const canvas: HTMLCanvasElement = this.graphics.canvas;
    canvas.focus();

    const width: number = canvas.clientWidth;
    const height: number = canvas.clientHeight;

    x = Math.floor((x / width) * canvas.width);
    y = Math.floor((y / height) * canvas.height);

    this.game.onMouseDown(this, x, y, id);
  }

  private mouseUpHandler(x: number, y: number, id: number = 0): void {
    this.initResourcesOnFirstClick();

    const canvas: HTMLCanvasElement = this.graphics.canvas;
    const width: number = canvas.clientWidth;
    const height: number = canvas.clientHeight;

    x = Math.floor((x / width) * canvas.width);
    y = Math.floor((y / height) * canvas.height);

    this.game.onMouseUp(this, x, y, id);
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

    this.graphics.canvas.addEventListener("touchstart", (event) => {
      try {
        if (event.target) {
          var rect = (<any> event.target).getBoundingClientRect();
          var x = event.targetTouches[0].pageX - rect.left;
          var y = event.targetTouches[0].pageY - rect.top;
          this.mouseDownHandler(x, y);
          event.preventDefault();
          event.stopPropagation();
        }
      } catch (e) {
        console.log(e);
      }
    });
    this.graphics.canvas.addEventListener("touchmove", (event) => {
      try {
        if (event.target) {
          var rect = (<any> event.target).getBoundingClientRect();
          var x = event.targetTouches[0].pageX - rect.left;
          var y = event.targetTouches[0].pageY - rect.top;
          this.mouseMoveHandler(x, y);
          event.preventDefault();
          event.stopPropagation();
        }
      } catch (e) {
        console.log(e);
      }
    });
    this.graphics.canvas.addEventListener("touchend", (event) => {
      try {
        if (event.target) {
          this.mouseUpHandler(0, 0);
          event.preventDefault();
          event.stopPropagation();
        }
      } catch (e) {
        console.log(e);
      }
    });

    window.addEventListener("contextmenu", (event) => {
      event.stopPropagation();
      event.preventDefault();
      return false;
    });
    this.graphics.canvas.addEventListener("wheel", (event) => {
      try {
        this.mouseWheelHandler(event.deltaY);
      } catch (e) {
        console.log(e);
      }
    });
    this.graphics.canvas.addEventListener("mousedown", (event) => {
      try {
        this.mouseDownHandler(event.offsetX, event.offsetY, event.button);
        event.preventDefault();
        event.stopPropagation();
      } catch (e) {
        console.log(e);
      }
    });
    this.graphics.canvas.addEventListener("mousemove", (event) => {
      try {
        this.mouseMoveHandler(event.offsetX, event.offsetY);
        event.preventDefault();
        event.stopPropagation();
      } catch (e) {
        console.log(e);
      }
    });
    this.graphics.canvas.addEventListener("mouseup", (event) => {
      try {
        if (event.button === 0) {
          this.mouseUpHandler(event.offsetX, event.offsetY, event.button);
          event.preventDefault();
          event.stopPropagation();
        }
      } catch (e) {
        console.log(e);
      }
    });

    window.addEventListener("keydown", (event) => {
      this.keyDownHandler(event.code);
    });
    window.addEventListener("keyup", (event) => {
      this.keyUpHandler(event.code);
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

  loadZip(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      fetch(url)      
      .then(function (response) {                 
          if (response.status === 200 || response.status === 0) {
              return Promise.resolve(response.blob());
          } else {
              return Promise.reject(new Error(response.statusText));
          }
      })
      .then(JSZip.loadAsync)
      .then((zip) => {
        this.mainZip = zip;
        resolve();
      }).catch(() => {
        reject();
      })
    });
  }

  loadMusic(url: string): Sound {
    let bufferPromise: undefined | Promise<ArrayBuffer>  = undefined;
    if (url.indexOf("_/") >= 0) {
      bufferPromise = this.mainZip.file(url.substring(url.indexOf("_/"))).async("arraybuffer");
    } 

    const sound: Sound = new SoundImpl(url, true, bufferPromise);
    this.resources.push(sound);

    return sound;
  }

  loadSound(url: string): Sound {
    let bufferPromise: undefined | Promise<ArrayBuffer>  = undefined;
    if (url.indexOf("_/") >= 0) {
      bufferPromise = this.mainZip.file(url.substring(url.indexOf("_/"))).async("arraybuffer");
    } 

    const sound: Sound = new SoundImpl(url, false, bufferPromise);
    this.resources.push(sound);

    return sound;
  }

  private toPotentialZipLoad(url: string): Promise<string> | undefined {
    if (url.indexOf("_/") >= 0) {
      return this.mainZip.file(url.substring(url.indexOf("_/"))).async("base64");
    } 

    return undefined;
  }

  loadBitmap(url: string): Bitmap {
    const bitmap: Bitmap = new BitmapImpl(url, this.toPotentialZipLoad(url));
    this.resources.push(bitmap);

    return bitmap;
  }

  loadScaledTileset(url: string, tileWidth: number, tileHeight: number, scale: number): Tileset {
    const tileset: Tileset = new TilesetImpl(url, this.toPotentialZipLoad(url), tileWidth, tileHeight, scale);
    this.resources.push(tileset);
    return tileset;
  }

  loadTileset(url: string, tileWidth: number, tileHeight: number): Tileset {
    const tileset: Tileset = new TilesetImpl(url, this.toPotentialZipLoad(url), tileWidth, tileHeight, 1);
    this.resources.push(tileset);
    return tileset;
  }

  loadFont(url: string, name: string): Font {
    return new FontImpl(url, name);
  }

  loadLDTK(name: string, locator: (name: string) => string): Promise<MapWorld> {
    const world: LDTKWorld = new LDTKWorld();
    this.resources.push(world);

    return world.load(name, file => this.loadJson(locator(file)))
  }
  
  loadJson(url: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      // its an asset reference
      if (url.indexOf("_/") >= 0) {
        return this.mainZip.file(url.substring(url.indexOf("_/"))).async("string").then((result: string) => {
          resolve(JSON.parse(result));
        })
      } else {
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        
        req.onload = (event) => {
          if (req.responseText) {
            const result: string = req.responseText.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
            resolve(JSON.parse(result));
          }
        };
        req.onerror = (e) => {
          reject(e);
        };
        
        req.send();
      }
    })
  }

  isRunningStandalone(): boolean {
    return ((<any> window.navigator).standalone === true) || (window.matchMedia('(display-mode: standalone)').matches);
  }

  isTablet(): boolean {
    if (!this.isPhone() && this.isIOS()) {
      return true;
    }
    const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(navigator.userAgent.toLowerCase());

    return isTablet;
  }
  
  isMobile(): boolean {
    return this.isIOS() || this.isAndroid();
  }

  isAndroid(): boolean {
    return navigator.userAgent.match(/Android/i) != null;
  }

  isIOS(): boolean {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].indexOf(navigator.platform) >= 0
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

  isPhone(): boolean {
    return this.isIOS() && window.matchMedia("only screen and (max-width: 760px)").matches;
  }

  setSoundVolume(v: number) : void {
    SoundImpl.setSoundVolume(v);
  }

  getSoundVolume(): number {
    return SoundImpl.getSoundVolume();
  }

  setMusicVolume(v: number): void {
    SoundImpl.setMusicVolume(v);
  }

  getMusicVolume(): number {
    return SoundImpl.getMusicVolume();
  }
}
