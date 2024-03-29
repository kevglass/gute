import { Bitmap } from "./Bitmap";
import { Font } from "./Font";
import { Game } from "./Game";
import { GameContext } from "./GameContext";
import { Graphics } from "./Graphics";
import { BitmapImpl } from "./impl/BitmapImpl";
import { FontImpl } from "./impl/FontImpl";
import { GraphicsImpl as CanvasGraphicsImpl } from "./impl/GraphicsImpl";
import { SoundImpl } from "./impl/SoundImpl";
import { TilesetImpl } from "./impl/TilesetImpl";
import { Resource } from "./Resource";
import { Sound } from "./Sound";
import { LDTKWorld } from "./tilemaps/LDTKWorld";
import { MapWorld } from "./tilemaps/MapWorld";
import { Tileset } from "./Tileset";
import * as JSZip from "jszip";
import { Palette } from "./impl/Palette";
import { OpenGLGraphicsImpl } from "./opengl/OpenGLGraphicsImpl";
import { OpenGLBitmap } from "./opengl/OpenGLBitmap.1";
import { OpenGLTilesetImpl } from "./opengl/OpenGLTilesetImpl";
import { GuteLog } from "./Log";

let GAME_LOOP: GameLoop;
let SOUND_ON: boolean = true;
let MUSIC_ON: boolean = true;
let PRESCALE_TILESETS: boolean = false;
let USE_XBR: boolean = false;

export function isSoundOn(): boolean {
  return SOUND_ON;
}

export function isMusicOn(): boolean {
  return MUSIC_ON;
}

export function shouldUseXbr(): boolean {
  return USE_XBR;
}

export function setUseXbr(on: boolean): void {
  USE_XBR = on;
}

export function shouldPrescaleTilesets(): boolean {
  return PRESCALE_TILESETS;
}

export function setPrescaleTilesets(on: boolean): void {
  PRESCALE_TILESETS = on;
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

export function startGame(game: Game, renderer: Renderer = Renderer.CANVAS) {
  const loop = new GameLoop();
  loop.renderer = renderer;

  GAME_LOOP = loop.start(game);
}

export enum Renderer {
  CANVAS = "Canvas",
  OPENGL = "OpenGL",
};

class GameLoop implements GameContext {
  resources: Resource[] = [];
  game!: Game;
  lastFrame: number = 0;
  graphics!: Graphics;
  inited: boolean = false;
  mainZipFile: any | undefined = undefined;
  zipPercentLoaded: number = 0;
  palette: Palette | undefined = undefined;
  lastWaiting: string | undefined = "";
  wait: number = 0;
  shiftPressed: boolean = false;
  commandPressed: boolean = false;
  controlPressed: boolean = false;
  altPressed: boolean = false;
  lastTouch?: TouchEvent;
  renderer: Renderer = Renderer.OPENGL;
  graphicsInited: boolean = false;

  isCommandPressed(): boolean {
    return this.commandPressed;
  }

  isAltPressed(): boolean {
    return this.altPressed;
  }

  isControlPressed(): boolean {
    return this.controlPressed;
  }

  isShiftPressed(): boolean {
    return this.shiftPressed;
  }

  getGraphics(): Graphics {
    return this.graphics;
  }

  resourcesRemaining(): number {
    return this.resources.filter(r => !r.loaded).length;
  }

  resourcesTotal(): number {
    return this.resources.length;
  }

  dumpResourceIssues(): void {
    GuteLog.log("There are " + this.resources.length + " resources pending.");

    // GuteLog.log("The following resources are still pending completion:");
    // GuteLog.log("");
    // for (const resource of this.resources) {
    //   if (!resource.loaded) {
    //     GuteLog.log("  " +resource.name);
    //   }
    // }
  }

  currentResource(): string {
    for (const resource of this.resources) {
      if (!resource.loaded) {
        return resource.name;
      }
    }

    return "";
  }

  allResourcesLoaded(): boolean {
    for (const resource of this.resources) {
      if (!resource.loaded) {
        if (this.lastWaiting !== resource.name) {
          if (this.lastWaiting) {
            GuteLog.log("[GUTE] Was waiting on: " + this.lastWaiting + " for " + this.wait + " frames");
          }
          this.lastWaiting = resource.name;
          this.wait = 0;
        }
        this.wait++;
        return false;
      }
    }
    if (this.lastWaiting) {
      GuteLog.log("[GUTE] Was waiting on last one: " + this.lastWaiting + " for " + this.wait + " frames");
      this.lastWaiting = undefined;
      if (!this.graphicsInited) {
        this.graphicsInited = true;
        this.graphics.initResourceOnLoaded();
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

  public applyPalette(hexFile: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.loadText(hexFile).then((text: string) => {
        this.palette = new Palette(text);
        resolve();
      });
    });
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
    this.graphics = this.renderer === Renderer.CANVAS ? new CanvasGraphicsImpl() : new OpenGLGraphicsImpl();

    this.graphics.canvas.addEventListener("touchstart", (event) => {
      try {
        if (event.target) {
          var rect = (<any>event.target).getBoundingClientRect();
          var x = event.targetTouches[0].pageX - rect.left;
          var y = event.targetTouches[0].pageY - rect.top;
          this.lastTouch = event;
          this.mouseDownHandler(x, y);
          event.preventDefault();
          event.stopPropagation();
        }
      } catch (e) {
        GuteLog.log(e);
      }
    }, { passive: false });
    this.graphics.canvas.addEventListener("touchmove", (event) => {
      try {
        if (event.target) {
          var rect = (<any>event.target).getBoundingClientRect();
          var x = event.targetTouches[0].pageX - rect.left;
          var y = event.targetTouches[0].pageY - rect.top;
          this.lastTouch = event;
          this.mouseMoveHandler(x, y);
          event.preventDefault();
          event.stopPropagation();
        }
      } catch (e) {
        GuteLog.log(e);
      }
    }, { passive: false });
    this.graphics.canvas.addEventListener("touchend", (event) => {
      try {
        if (event.target) {
          var rect = (<any>event.target).getBoundingClientRect();
          if (this.lastTouch) {
            var x = this.lastTouch.targetTouches[0].pageX - rect.left;
            var y = this.lastTouch.targetTouches[0].pageY - rect.top;
            this.mouseUpHandler(x, y);
          } else {
            this.mouseUpHandler(0, 0);
          }
          event.preventDefault();
          event.stopPropagation();
        }
      } catch (e) {
        GuteLog.log(e);
      }
    }, { passive: false });

    window.addEventListener("contextmenu", (event) => {
      event.stopPropagation();
      event.preventDefault();
      return false;
    });
    this.graphics.canvas.addEventListener("wheel", (event) => {
      try {
        this.mouseWheelHandler(event.deltaY);
      } catch (e) {
        GuteLog.log(e);
      }
    });
    window.addEventListener("blur", (event) => {
      this.shiftPressed = false;
      this.commandPressed = false;
      this.controlPressed = false;
      this.altPressed = false;
    });

    this.graphics.canvas.addEventListener("mousedown", (event) => {
      this.shiftPressed = event.shiftKey;
      this.commandPressed = event.metaKey;
      this.controlPressed = event.ctrlKey;
      this.altPressed = event.altKey;

      try {
        this.mouseDownHandler(event.offsetX, event.offsetY, event.button);
        event.preventDefault();
        event.stopPropagation();
      } catch (e) {
        GuteLog.log(e);
      }
    });
    this.graphics.canvas.addEventListener("mousemove", (event) => {
      this.shiftPressed = event.shiftKey;
      this.commandPressed = event.metaKey;
      this.controlPressed = event.ctrlKey;
      this.altPressed = event.altKey;
      
      try {
        this.mouseMoveHandler(event.offsetX, event.offsetY);
        event.preventDefault();
        event.stopPropagation();
      } catch (e) {
        GuteLog.log(e);
      }
    });
    this.graphics.canvas.addEventListener("mouseup", (event) => {
      this.shiftPressed = event.shiftKey;
      this.commandPressed = event.metaKey;
      this.controlPressed = event.ctrlKey;
      this.altPressed = event.altKey;

      try {
        this.mouseUpHandler(event.offsetX, event.offsetY, event.button);
        event.preventDefault();
        event.stopPropagation();
      } catch (e) {
        GuteLog.log(e);
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Shift") {
        this.shiftPressed = true;
      }
      if (event.key === "Meta") {
        this.commandPressed = true;
      }
      if (event.key === "Control") {
        this.controlPressed = true;
      }
      if (event.key === "Alt") {
        this.altPressed = true;
      }

      this.keyDownHandler(event.code);
    });
    window.addEventListener("keyup", (event) => {
      if (event.key === "Shift") {
        this.shiftPressed = false;
      }
      if (event.key === "Meta") {
        this.commandPressed = false;
      }
      if (event.key === "Control") {
        this.controlPressed = false;
      }
      if (event.key === "Alt") {
        this.altPressed = false;
      }

      this.keyUpHandler(event.code);
    });

    game.init(this);

    requestAnimationFrame(() => {
      this.loop();
    });

    return this;
  }

  loop(): void {
    const error = this.graphics.getError();
    if (error) {
      this.game.rendererError(error);
      throw new Error("Renderer Error - " + error);
    }

    requestAnimationFrame(() => {
      this.loop();
    });

    const now: number = new Date().getTime();
    let delta: number = 0;
    if (this.lastFrame !== 0) {
      delta = now - this.lastFrame;
    }
    this.lastFrame = now;

    this.graphics.renderStart();
    this.graphics.applyFont();
    this.game.update(this, delta);
    this.game.render(this, this.graphics);
    this.graphics.renderEnd();
  }

  getZipProgress(): number {
    return this.zipPercentLoaded;
  }

  loadZip(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.responseType = "arraybuffer";
      req.onprogress = (e) => {
        this.zipPercentLoaded = (e.loaded / e.total);
      };
      req.onload = (event) => {
        JSZip.loadAsync(req.response).then((zip) => {
          this.mainZipFile = zip;
          GuteLog.log("Loaded Zip");
          resolve();
        });
      };
      req.onerror = (e) => {
        reject(e);
      };

      req.send();
    });
  }

  getZipFile(name: string): any {
    const file = this.mainZipFile.file(name);
    if (!file) {
      GuteLog.log("zip file entry: " + name + " not found!");
      throw Error("Zip file entry not found: " + name);
    }
    return file;
  }

  getZipFileText(name: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.getZipFile(name).async("string").then((result: string) => {
        resolve(result);
      }).catch((e: any) => {
        GuteLog.error(e);
        reject(e);
      })
    });
  }

  getZipArrayBuffer(name: string): Promise<ArrayBuffer> {
    return new Promise<ArrayBuffer>((resolve, reject) => {
      this.getZipFile(name).async("arraybuffer").then((result: ArrayBuffer) => {
        resolve(result);
      }).catch((e: any) => {
        GuteLog.error(e);
        reject(e);
      })
    });
  }

  getZipBase64(name: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.getZipFile(name).async("arraybuffer").then((result: string) => {
        resolve(result);
      }).catch((e: any) => {
        GuteLog.error(e);
        reject(e);
      })
    });
  }

  getZipBlob(name: string): Promise<Blob> {
    return new Promise<Blob>((resolve, reject) => {
      this.getZipFile(name).async("blob").then((result: Blob) => {
        resolve(result);
      }).catch((e: any) => {
        GuteLog.error(e);
        reject(e);
      })
    });
  }

  loadMusic(url: string): Sound {
    let bufferPromise: undefined | Promise<ArrayBuffer> = undefined;
    if (url.indexOf("_/") >= 0) {
      bufferPromise = this.getZipArrayBuffer(url.substring(url.indexOf("_/")));
    }

    const sound: Sound = new SoundImpl(url, true, bufferPromise);
    this.resources.push(sound);

    return sound;
  }

  loadSound(url: string): Sound {
    let bufferPromise: undefined | Promise<ArrayBuffer> = undefined;
    if (url.indexOf("_/") >= 0) {
      bufferPromise = this.getZipArrayBuffer(url.substring(url.indexOf("_/")));
    }

    const sound: Sound = new SoundImpl(url, false, bufferPromise);
    this.resources.push(sound);

    return sound;
  }

  private toPotentialZipLoadBlob(url: string): Promise<Blob> | undefined {
    if (url.indexOf("_/") >= 0) {
      return this.getZipBlob(url.substring(url.indexOf("_/")));
    }

    return undefined;
  }

  private toPotentialZipLoad(url: string): Promise<string> | undefined {
    if (url.indexOf("_/") >= 0) {
      return this.getZipBase64(url.substring(url.indexOf("_/")));
    }

    return undefined;
  }

  loadBitmap(url: string): Bitmap {
    if (this.renderer === Renderer.CANVAS) {
      const bitmap: Bitmap = new BitmapImpl(url, this.toPotentialZipLoad(url), this.palette);
      this.resources.push(bitmap);
      return bitmap;
    } else {
      const bitmap: Bitmap = new OpenGLBitmap(this.graphics as OpenGLGraphicsImpl, url, this.toPotentialZipLoad(url), this.palette);
      this.resources.push(bitmap);

      return bitmap;
    }

  }

  loadScaledTileset(url: string, tileWidth: number, tileHeight: number, scale: number): Tileset {
    if (this.renderer === Renderer.CANVAS) {
      const tileset: Tileset = new TilesetImpl(url, this.toPotentialZipLoadBlob(url), tileWidth, tileHeight, scale, this.palette);
      this.resources.push(tileset);
      return tileset;
    } else {
      const tileset: Tileset = new OpenGLTilesetImpl(this.graphics as OpenGLGraphicsImpl, url, this.toPotentialZipLoadBlob(url), tileWidth, tileHeight, scale, this.palette);
      this.resources.push(tileset);
      return tileset;
    }
  }

  loadTileset(url: string, tileWidth: number, tileHeight: number): Tileset {
    if (this.renderer === Renderer.CANVAS) {
      const tileset: Tileset = new TilesetImpl(url, this.toPotentialZipLoadBlob(url), tileWidth, tileHeight, 1, this.palette);
      this.resources.push(tileset);
      return tileset;
    } else {
      const tileset: Tileset = new OpenGLTilesetImpl(this.graphics as OpenGLGraphicsImpl, url, this.toPotentialZipLoadBlob(url), tileWidth, tileHeight, 1, this.palette);
      this.resources.push(tileset);
      return tileset;
    }
  }

  loadFont(url: string, name: string): Font {
    return new FontImpl(url, name);
  }

  loadLDTK(name: string, locator: (name: string) => string): Promise<MapWorld> {
    const world: LDTKWorld = new LDTKWorld();
    this.resources.push(world);

    return world.load(name, file => this.loadJson(locator(file)))
  }

  private loadText(url: string): Promise<string> {
    return new Promise<any>((resolve, reject) => {
      // its an asset reference
      if (url.indexOf("_/") >= 0) {
        return this.getZipFileText(url.substring(url.indexOf("_/"))).then((result: string) => {
          resolve(result);
        })
      } else {
        var req = new XMLHttpRequest();
        req.open("GET", url, true);

        req.onload = (event) => {
          if (req.responseText) {
            resolve(req.responseText);
          }
        };
        req.onerror = (e) => {
          reject(e);
        };

        req.send();
      }
    })
  }

  loadJson(url: string, transform?: (text: string) => string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      // its an asset reference
      if (url.indexOf("_/") >= 0) {
        url = url.substring(url.indexOf("_/"));
        return this.getZipFileText(url).then((result: string) => {
          try {
            const data = JSON.parse(transform ? transform(result) : result);
            resolve(data);
          } catch (e) {
            GuteLog.log("Failed to parse JSON: " + url);
            throw e;
          }
        })
      } else {
        if (url.startsWith("data:application/json;utf8,")) {
          const result = url.substring(url.indexOf(",") + 1);
          resolve(JSON.parse(transform ? transform(result) : result));
          return;
        }
        var req = new XMLHttpRequest();
        req.open("GET", url, true);

        req.onload = (event) => {
          if (req.responseText) {
            const result: string = req.responseText;
            resolve(JSON.parse(transform ? transform(result) : result));
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
    return ((<any>window.navigator).standalone === true) || (window.matchMedia('(display-mode: standalone)').matches);
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
    return this.isIOS() && (window.matchMedia("only screen and (max-width: 760px)").matches || window.matchMedia("only screen and (max-height: 760px)").matches);
  }

  setSoundVolume(v: number): void {
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
