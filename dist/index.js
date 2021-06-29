(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gute"] = factory();
	else
		root["gute"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Graphics.ts":
/*!*************************!*\
  !*** ./src/Graphics.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BLUE = exports.GREEN = exports.RED = exports.BLACK = exports.WHITE = void 0;
exports.WHITE = "white";
exports.BLACK = "black";
exports.RED = "red";
exports.GREEN = "green";
exports.BLUE = "blue";


/***/ }),

/***/ "./src/Gute.ts":
/*!*********************!*\
  !*** ./src/Gute.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.startGame = exports.setMusicOn = exports.setSoundOn = exports.isMusicOn = exports.isSoundOn = void 0;
var BitmapImpl_1 = __webpack_require__(/*! ./impl/BitmapImpl */ "./src/impl/BitmapImpl.ts");
var FontImpl_1 = __webpack_require__(/*! ./impl/FontImpl */ "./src/impl/FontImpl.ts");
var GraphicsImpl_1 = __webpack_require__(/*! ./impl/GraphicsImpl */ "./src/impl/GraphicsImpl.ts");
var SoundImpl_1 = __webpack_require__(/*! ./impl/SoundImpl */ "./src/impl/SoundImpl.ts");
var TilesetImpl_1 = __webpack_require__(/*! ./impl/TilesetImpl */ "./src/impl/TilesetImpl.ts");
var LDTKWorld_1 = __webpack_require__(/*! ./tilemaps/LDTKWorld */ "./src/tilemaps/LDTKWorld.ts");
var GAME_LOOP;
var SOUND_ON = true;
var MUSIC_ON = true;
function isSoundOn() {
    return SOUND_ON;
}
exports.isSoundOn = isSoundOn;
function isMusicOn() {
    return MUSIC_ON;
}
exports.isMusicOn = isMusicOn;
function setSoundOn(on) {
    SOUND_ON = on;
}
exports.setSoundOn = setSoundOn;
function setMusicOn(on) {
    if (!on && MUSIC_ON) {
        MUSIC_ON = false;
        if (SoundImpl_1.SoundImpl.CURRENT_MUSIC) {
            SoundImpl_1.SoundImpl.CURRENT_MUSIC.stop();
        }
    }
    if (on && !MUSIC_ON) {
        MUSIC_ON = true;
        if (SoundImpl_1.SoundImpl.CURRENT_MUSIC) {
            SoundImpl_1.SoundImpl.CURRENT_MUSIC.play(SoundImpl_1.SoundImpl.CURRENT_MUSIC.volume);
        }
    }
}
exports.setMusicOn = setMusicOn;
function startGame(game) {
    GAME_LOOP = new GameLoop().start(game);
}
exports.startGame = startGame;
var GameLoop = /** @class */ (function () {
    function GameLoop() {
        this.resources = [];
        this.lastFrame = 0;
        this.inited = false;
    }
    GameLoop.prototype.getGraphics = function () {
        return this.graphics;
    };
    GameLoop.prototype.allResourcesLoaded = function () {
        for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
            var resource = _a[_i];
            if (!resource.loaded) {
                return false;
            }
        }
        return true;
    };
    GameLoop.prototype.initResourcesOnFirstClick = function () {
        if (!this.allResourcesLoaded()) {
            return;
        }
        if (!this.inited) {
            this.inited = true;
            for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
                var resource = _a[_i];
                resource.initOnFirstClick();
            }
        }
    };
    GameLoop.prototype.mouseDownHandler = function (x, y, id) {
        if (id === void 0) { id = 0; }
        this.initResourcesOnFirstClick();
        var canvas = this.graphics.canvas;
        canvas.focus();
        var width = canvas.clientWidth;
        var height = canvas.clientHeight;
        x = Math.floor((x / width) * canvas.width);
        y = Math.floor((y / height) * canvas.height);
        this.game.onMouseDown(this, x, y);
    };
    GameLoop.prototype.mouseUpHandler = function (x, y, id) {
        if (id === void 0) { id = 0; }
        this.initResourcesOnFirstClick();
        var canvas = this.graphics.canvas;
        var width = canvas.clientWidth;
        var height = canvas.clientHeight;
        x = Math.floor((x / width) * canvas.width);
        y = Math.floor((y / height) * canvas.height);
        this.game.onMouseUp(this, x, y);
    };
    GameLoop.prototype.keyDownHandler = function (key) {
        this.initResourcesOnFirstClick();
        this.game.onKeyDown(this, key);
    };
    GameLoop.prototype.keyUpHandler = function (key) {
        this.game.onKeyUp(this, key);
    };
    GameLoop.prototype.start = function (game) {
        var _this = this;
        this.game = game;
        this.graphics = new GraphicsImpl_1.GraphicsImpl();
        this.graphics.canvas.addEventListener("mousedown", function (event) {
            try {
                if (event.button === 0) {
                    _this.mouseDownHandler(event.offsetX, event.offsetY);
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
            catch (e) {
                console.log(e);
            }
        });
        this.graphics.canvas.addEventListener("mouseup", function (event) {
            try {
                if (event.button === 0) {
                    _this.mouseUpHandler(event.offsetX, event.offsetY);
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
            catch (e) {
                console.log(e);
            }
        });
        window.addEventListener("keydown", function (event) {
            _this.keyDownHandler(event.key);
        });
        window.addEventListener("keyup", function (event) {
            _this.keyUpHandler(event.key);
        });
        game.init(this);
        requestAnimationFrame(function () {
            _this.loop();
        });
        return this;
    };
    GameLoop.prototype.loop = function () {
        var _this = this;
        var now = new Date().getTime();
        var delta = 0;
        if (this.lastFrame !== 0) {
            delta = now - this.lastFrame;
        }
        this.lastFrame = now;
        this.graphics.applyFont();
        this.game.update(this, delta);
        this.game.render(this, this.graphics);
        requestAnimationFrame(function () {
            _this.loop();
        });
    };
    GameLoop.prototype.loadMusic = function (url) {
        var sound = new SoundImpl_1.SoundImpl(url, true);
        this.resources.push(sound);
        return sound;
    };
    GameLoop.prototype.loadSound = function (url) {
        var sound = new SoundImpl_1.SoundImpl(url, false);
        this.resources.push(sound);
        return sound;
    };
    GameLoop.prototype.loadBitmap = function (url) {
        var bitmap = new BitmapImpl_1.BitmapImpl(url);
        this.resources.push(bitmap);
        return bitmap;
    };
    GameLoop.prototype.loadScaledTileset = function (url, tileWidth, tileHeight, scale) {
        var tileset = new TilesetImpl_1.TilesetImpl(url, tileWidth, tileHeight, scale);
        this.resources.push(tileset);
        return tileset;
    };
    GameLoop.prototype.loadTileset = function (url, tileWidth, tileHeight) {
        var tileset = new TilesetImpl_1.TilesetImpl(url, tileWidth, tileHeight, 1);
        this.resources.push(tileset);
        return tileset;
    };
    GameLoop.prototype.loadFont = function (url, name) {
        return new FontImpl_1.FontImpl(url, name);
    };
    GameLoop.prototype.loadLDTK = function (url) {
        var world = new LDTKWorld_1.LDTKWorld();
        this.resources.push(world);
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.onload = function (event) {
            if (req.responseText) {
                world.load(JSON.parse(req.responseText));
            }
        };
        req.send(null);
        return world;
    };
    GameLoop.prototype.loadJson = function (url) {
        return new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.onload = function (event) {
                if (req.responseText) {
                    resolve(JSON.parse(req.responseText));
                }
            };
            req.onerror = function (e) {
                reject(e);
            };
            req.send(null);
        });
    };
    GameLoop.prototype.isRunningStandalone = function () {
        return (window.navigator.standalone === true) || (window.matchMedia('(display-mode: standalone)').matches);
    };
    GameLoop.prototype.isMobile = function () {
        return this.isIOS() || this.isAndroid();
    };
    GameLoop.prototype.isAndroid = function () {
        return navigator.userAgent.match(/Android/i) != null;
    };
    GameLoop.prototype.isIOS = function () {
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].indexOf(navigator.platform) >= 0
            // iPad on iOS 13 detection
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    };
    GameLoop.prototype.isPhone = function () {
        return window.matchMedia("only screen and (max-width: 760px)").matches;
    };
    return GameLoop;
}());


/***/ }),

/***/ "./src/Keys.ts":
/*!*********************!*\
  !*** ./src/Keys.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Keys = void 0;
var Keys = /** @class */ (function () {
    function Keys() {
    }
    Keys.ESCAPE_KEY = "Escape";
    Keys.ENTER_KEY = "Enter";
    Keys.LEFT_KEY = "ArrowLeft";
    Keys.RIGHT_KEY = "ArrowRight";
    Keys.UP_KEY = "ArrowUp";
    Keys.DOWN_KEY = "ArrowDown";
    Keys.SPACE_KEY = " ";
    Keys.S_KEY = "s";
    Keys.M_KEY = "m";
    Keys.A_KEY = "a";
    Keys.W_KEY = "w";
    Keys.D_KEY = "d";
    Keys.CONTROL_KEY = "Control";
    Keys.META_KEY = "Meta";
    Keys.ALT_KEY = "Alt";
    Keys.TAB_KEY = "Tab";
    return Keys;
}());
exports.Keys = Keys;


/***/ }),

/***/ "./src/impl/BitmapImpl.ts":
/*!********************************!*\
  !*** ./src/impl/BitmapImpl.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitmapImpl = void 0;
var BitmapImpl = /** @class */ (function () {
    function BitmapImpl(url) {
        var _this = this;
        this.width = 0;
        this.height = 0;
        this.loaded = false;
        this.image = new Image();
        this.image.onload = function () {
            _this.width = _this.image.width;
            _this.height = _this.image.height;
            _this.loaded = true;
        };
        this.image.src = url;
    }
    BitmapImpl.prototype.draw = function (ctx, x, y) {
        ctx.drawImage(this.image, x, y);
    };
    BitmapImpl.prototype.drawScaled = function (ctx, x, y, width, height) {
        ctx.drawImage(this.image, x, y, width, height);
    };
    BitmapImpl.prototype.initOnFirstClick = function () {
    };
    return BitmapImpl;
}());
exports.BitmapImpl = BitmapImpl;


/***/ }),

/***/ "./src/impl/FontImpl.ts":
/*!******************************!*\
  !*** ./src/impl/FontImpl.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FontImpl = void 0;
var FontImpl = /** @class */ (function () {
    function FontImpl(url, name) {
        this.name = name;
        var style = document.createElement("style");
        style.innerHTML = "@font-face { font-family: " + name + "; src: url('" + url + "'); } body { font-family: " + name + "; }";
        document.head.appendChild(style);
    }
    FontImpl.prototype.apply = function (ctx, size) {
        ctx.font = size + "px " + this.name;
    };
    return FontImpl;
}());
exports.FontImpl = FontImpl;


/***/ }),

/***/ "./src/impl/GraphicsImpl.ts":
/*!**********************************!*\
  !*** ./src/impl/GraphicsImpl.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphicsImpl = void 0;
var FontImpl_1 = __webpack_require__(/*! ./FontImpl */ "./src/impl/FontImpl.ts");
var isFirefox = typeof InstallTrigger !== 'undefined';
var CopyBitmap = /** @class */ (function () {
    function CopyBitmap(canvas) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.loaded = true;
    }
    CopyBitmap.prototype.draw = function (ctx, x, y) {
        ctx.drawImage(this.canvas, x, y);
    };
    CopyBitmap.prototype.drawScaled = function (ctx, x, y, width, height) {
        ctx.drawImage(this.canvas, x, y, width, height);
    };
    CopyBitmap.prototype.getDrawable = function () {
        return this.canvas;
    };
    CopyBitmap.prototype.initOnFirstClick = function () {
    };
    return CopyBitmap;
}());
var GraphicsImpl = /** @class */ (function () {
    function GraphicsImpl() {
        this.fontSize = 20;
        this.canvas = document.getElementById("gamecanvas");
        this.ctx = this.canvas.getContext("2d", { alpha: false });
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;
        this.canvas.style.fontSmooth = "never";
        this.canvas.style.webkitFontSmoothing = "none";
        if (isFirefox) {
            this.canvas.style.imageRendering = "crisp-edges";
        }
        else {
            this.canvas.style.imageRendering = "pixelated";
        }
        this.font = new FontImpl_1.FontImpl("font.ttf", "GuteDefault");
        if (this.font) {
            this.applyFont();
        }
    }
    GraphicsImpl.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    GraphicsImpl.prototype.clearRect = function (x, y, width, height) {
        this.ctx.clearRect(x, y, width, height);
    };
    GraphicsImpl.prototype.fitScreen = function (pixelScale) {
        var realWidth = Math.floor(window.innerWidth / pixelScale) * pixelScale;
        var realHeight = Math.floor(window.innerHeight / pixelScale) * pixelScale;
        var virtualWidth = realWidth / pixelScale;
        var virtualHeight = realHeight / pixelScale;
        this.canvas.style.position = "absolute";
        this.canvas.style.top = "0px";
        this.canvas.style.left = "0px";
        this.canvas.width = virtualWidth;
        this.canvas.height = virtualHeight;
        this.canvas.style.width = realWidth + "px";
        this.canvas.style.height = realHeight + "px";
    };
    GraphicsImpl.prototype.setAlpha = function (alpha) {
        this.ctx.globalAlpha = alpha;
    };
    GraphicsImpl.prototype.copy = function () {
        var _a;
        var canvas = document.createElement("canvas");
        canvas.width = this.getWidth();
        canvas.height = this.getHeight();
        (_a = canvas.getContext("2d")) === null || _a === void 0 ? void 0 : _a.drawImage(this.canvas, 0, 0);
        return new CopyBitmap(canvas);
    };
    GraphicsImpl.prototype.getWidth = function () {
        return this.canvas.width;
    };
    GraphicsImpl.prototype.getHeight = function () {
        return this.canvas.height;
    };
    GraphicsImpl.prototype.push = function () {
        this.ctx.save();
    };
    GraphicsImpl.prototype.pop = function () {
        this.ctx.restore();
    };
    GraphicsImpl.prototype.translate = function (x, y) {
        this.ctx.translate(x, y);
    };
    GraphicsImpl.prototype.scale = function (x, y) {
        this.ctx.scale(x, y);
    };
    GraphicsImpl.prototype.applyFont = function () {
        this.font.apply(this.ctx, this.fontSize);
    };
    GraphicsImpl.prototype.setFont = function (font) {
        this.font = font;
        this.applyFont();
    };
    GraphicsImpl.prototype.setFontSize = function (size) {
        this.fontSize = size;
        this.applyFont();
    };
    GraphicsImpl.prototype.getStringWidth = function (text) {
        return this.ctx.measureText(text).width;
    };
    GraphicsImpl.prototype.drawString = function (x, y, text, col) {
        this.ctx.fillStyle = col;
        this.ctx.fillText(text, x, y);
    };
    GraphicsImpl.prototype.setComposite = function (name) {
        this.ctx.globalCompositeOperation = name;
    };
    GraphicsImpl.prototype.fillRect = function (x, y, width, height, col) {
        this.ctx.fillStyle = col;
        this.ctx.fillRect(x, y, width, height);
    };
    GraphicsImpl.prototype.drawLine = function (x1, y1, x2, y2, col) {
        this.ctx.strokeStyle = col;
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    };
    GraphicsImpl.prototype.drawBitmap = function (x, y, bitmap) {
        bitmap.draw(this.ctx, x, y);
    };
    GraphicsImpl.prototype.drawScaledBitmap = function (x, y, width, height, bitmap) {
        bitmap.drawScaled(this.ctx, x, y, width, height);
    };
    return GraphicsImpl;
}());
exports.GraphicsImpl = GraphicsImpl;


/***/ }),

/***/ "./src/impl/SoundImpl.ts":
/*!*******************************!*\
  !*** ./src/impl/SoundImpl.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoundImpl = void 0;
var Gute_1 = __webpack_require__(/*! ../Gute */ "./src/Gute.ts");
var AudioContext;
if (typeof window !== "undefined") {
    AudioContext = window.AudioContext || window.webkitAudioContext;
}
var AUDIO_CONTEXT;
function handleVisibilityChange() {
    if (Gute_1.isMusicOn()) {
        if (SoundImpl.CURRENT_MUSIC) {
            if (document.hidden) {
                SoundImpl.CURRENT_MUSIC.stop();
            }
            else {
                SoundImpl.CURRENT_MUSIC.play(SoundImpl.CURRENT_MUSIC.volume);
            }
        }
    }
}
if (typeof document !== "undefined") {
    document.addEventListener("visibilitychange", handleVisibilityChange);
}
var SoundImpl = /** @class */ (function () {
    function SoundImpl(url, music) {
        var _this = this;
        this.loaded = false;
        this.volume = 1;
        this.music = false;
        this.url = url;
        this.music = music;
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = "arraybuffer";
        req.onload = function (event) {
            var arrayBuffer = req.response;
            if (arrayBuffer) {
                _this.data = arrayBuffer;
                _this.loaded = true;
                _this.tryLoad();
            }
        };
        req.send(null);
    }
    SoundImpl.prototype.tryLoad = function () {
        var _this = this;
        if (AUDIO_CONTEXT && this.data) {
            AUDIO_CONTEXT.decodeAudioData(this.data, function (buffer) {
                _this.buffer = buffer;
                if (SoundImpl.CURRENT_MUSIC === _this) {
                    SoundImpl.CURRENT_MUSIC = null;
                    _this.play(_this.volume);
                }
            }, function (e) { console.log("Failed to load: " + _this.url); });
        }
    };
    SoundImpl.prototype.initOnFirstClick = function () {
        if (!AUDIO_CONTEXT) {
            AUDIO_CONTEXT = new AudioContext();
            AUDIO_CONTEXT.resume();
        }
        this.tryLoad();
    };
    SoundImpl.prototype.play = function (volume) {
        this.volume = volume;
        if (!this.buffer) {
            if (this.music) {
                if (SoundImpl.CURRENT_MUSIC) {
                    SoundImpl.CURRENT_MUSIC.stop();
                }
                SoundImpl.CURRENT_MUSIC = this;
            }
            return;
        }
        if (this.music) {
            if (SoundImpl.CURRENT_MUSIC !== this) {
                if (SoundImpl.CURRENT_MUSIC) {
                    SoundImpl.CURRENT_MUSIC.stop();
                }
                SoundImpl.CURRENT_MUSIC = this;
            }
            if (this.source) {
                return;
            }
        }
        if (this.music && !Gute_1.isMusicOn()) {
            return;
        }
        else if (!Gute_1.isSoundOn()) {
            return;
        }
        this.source = AUDIO_CONTEXT.createBufferSource();
        this.source.buffer = this.buffer;
        this.gain = AUDIO_CONTEXT.createGain();
        this.source.connect(this.gain);
        this.gain.connect(AUDIO_CONTEXT.destination);
        if (this.music) {
            this.gain.gain.value = 0;
            this.source.loop = true;
        }
        this.source.start(0);
        if (this.music) {
            this.gain.gain.linearRampToValueAtTime(volume, AUDIO_CONTEXT.currentTime + 2);
        }
        else {
            this.gain.gain.value = volume;
        }
    };
    SoundImpl.prototype.stop = function () {
        if (this.source) {
            if (this.music) {
                this.gain.gain.linearRampToValueAtTime(0, AUDIO_CONTEXT.currentTime + 3);
                var tempSource_1 = this.source;
                setTimeout(function () {
                    tempSource_1.stop();
                }, 4000);
            }
            else {
                this.source.stop();
            }
            this.source = null;
        }
    };
    return SoundImpl;
}());
exports.SoundImpl = SoundImpl;


/***/ }),

/***/ "./src/impl/TilesetImpl.ts":
/*!*********************************!*\
  !*** ./src/impl/TilesetImpl.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TilesetImpl = void 0;
var Tile = /** @class */ (function () {
    function Tile(canvas, x, y, width, height) {
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.loaded = true;
    }
    Tile.prototype.draw = function (ctx, x, y) {
        ctx.drawImage(this.canvas, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
    };
    Tile.prototype.drawScaled = function (ctx, x, y, width, height) {
        ctx.drawImage(this.canvas, this.x, this.y, this.width, this.height, x, y, width, height);
    };
    Tile.prototype.initOnFirstClick = function () {
    };
    return Tile;
}());
var TilesetImpl = /** @class */ (function () {
    function TilesetImpl(url, tileWidth, tileHeight, scale) {
        var _this = this;
        if (scale === void 0) { scale = 1; }
        this.loaded = false;
        this.bitmaps = [];
        this.scanline = 0;
        this.tileCount = 0;
        this.tints = {};
        tileWidth *= scale;
        tileHeight *= scale;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.image = new Image();
        this.image.onload = function () {
            _this.scaled(scale);
            if (_this.transformed) {
                _this.scanline = Math.floor(_this.transformed.width / tileWidth);
                var depth = Math.floor(_this.transformed.height / tileHeight);
                _this.tileCount = depth * _this.scanline;
                // cut the image into pieces
                for (var y = 0; y < depth; y++) {
                    for (var x = 0; x < _this.scanline; x++) {
                        _this.bitmaps.push(new Tile(_this.transformed, x * tileWidth, y * tileHeight, tileWidth, tileHeight));
                    }
                }
            }
            _this.loaded = true;
        };
        this.image.src = url;
    }
    TilesetImpl.prototype.getTilesAcross = function () {
        return this.scanline;
    };
    TilesetImpl.prototype.scaled = function (scale) {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        if (ctx === null) {
            return;
        }
        if (this.image) {
            canvas.width = this.image.width * scale;
            canvas.height = this.image.height * scale;
            ctx.webkitImageSmoothingEnabled = false;
            ctx.mozImageSmoothingEnabled = false;
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(this.image, 0, 0, canvas.width, canvas.height);
            this.transformed = canvas;
        }
    };
    TilesetImpl.prototype.getTileWidth = function () {
        return this.tileWidth;
    };
    TilesetImpl.prototype.getTileHeight = function () {
        return this.tileHeight;
    };
    TilesetImpl.prototype.getTileCount = function () {
        return this.tileCount;
    };
    TilesetImpl.prototype.initOnFirstClick = function () {
    };
    TilesetImpl.prototype.getTile = function (tile) {
        return this.bitmaps[tile];
    };
    TilesetImpl.prototype.getTintedTile = function (tile, tintName, tint) {
        var x = tile % this.scanline;
        var y = Math.floor(tile / this.scanline);
        var canvas = this.tints[tintName];
        if ((!canvas) && (this.transformed)) {
            canvas = document.createElement("canvas");
            canvas.width = this.transformed.width;
            canvas.height = this.transformed.height;
            this.tints[tintName] = canvas;
            var ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.drawImage(this.transformed, 0, 0);
                var id = ctx.getImageData(0, 0, canvas.width, canvas.height);
                for (var i = 0; i < id.data.length; i += 4) {
                    // leave black alone
                    id.data[i] = Math.floor(id.data[i] * tint[0]);
                    id.data[i + 1] = Math.floor(id.data[i + 1] * tint[1]);
                    id.data[i + 2] = Math.floor(id.data[i + 2] * tint[2]);
                }
                ctx.putImageData(id, 0, 0);
            }
        }
        return new Tile(canvas, x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight);
    };
    return TilesetImpl;
}());
exports.TilesetImpl = TilesetImpl;


/***/ }),

/***/ "./src/path/AStarPathFinder.ts":
/*!*************************************!*\
  !*** ./src/path/AStarPathFinder.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AStarPathFinder = void 0;
var MapNode_1 = __webpack_require__(/*! ./MapNode */ "./src/path/MapNode.ts");
var Path_1 = __webpack_require__(/*! ./Path */ "./src/path/Path.ts");
var AStarPathFinder = /** @class */ (function () {
    function AStarPathFinder(map) {
        this.objectPool = [];
        this.openList = [];
        this.pathFindCounter = 1;
        this.width = map.getMapWidth();
        this.height = map.getMapHeight();
        this.map = map;
        this.open = new Array();
        this.closed = new Array();
        for (var i = 0; i < this.width * this.height; i++) {
            var o = new Array();
            var c = new Array();
            for (var j = 0; j < 5; j++) {
                o.push(0);
                c.push(0);
            }
            this.open.push(o);
            this.closed.push(c);
        }
    }
    AStarPathFinder.prototype.clear = function () {
        for (var i = 0; i < this.openList.length; i++) {
            this.objectPool.push(this.openList[i]);
        }
        this.openList = new Array();
        this.pathFindCounter++;
    };
    AStarPathFinder.prototype.generatePath = function (node) {
        var current = node;
        var path = new Path_1.Path();
        while (current != null) {
            path.add(current.x, current.y);
            current = current.parent;
        }
        return path;
    };
    AStarPathFinder.prototype.blocked = function (sx, sy, x, y) {
        var ignoreActors = this.ignoreFinalOccupation && this.atTarget(x, y);
        if (!this.map.locationDiscovered(x, y)) {
            return true;
        }
        if (this.map.blocked(this.mover, null, sx, sy, x, y, ignoreActors, this.atTarget(x, y))) {
            return true;
        }
        return false;
    };
    AStarPathFinder.prototype.atTarget = function (x, y) {
        for (var xs = 0; xs < this.mover.getTilesWidth(); xs++) {
            for (var ys = 0; ys < this.mover.getTilesHeight(); ys++) {
                if ((x + xs == this.tx) && (y + ys == this.ty)) {
                    return true;
                }
            }
        }
        return false;
    };
    AStarPathFinder.prototype.findPath = function (mover, tx, ty, max, ignoreFinalOccupation, runAway) {
        tx = Math.floor(tx);
        ty = Math.floor(ty);
        this.max = max;
        this.ignoreFinalOccupation = ignoreFinalOccupation;
        this.mover = mover;
        this.tx = tx;
        this.ty = ty;
        if (this.blocked(tx, ty, tx, ty)) {
            return null;
        }
        this.clear();
        this.addLocation(null, Math.floor(mover.getTileMapX()), Math.floor(mover.getTileMapY()));
        while (this.openList.length > 0) {
            var best = this.openList[0];
            this.openList.splice(0, 1);
            // if best is the target then we've found it!
            if (this.atTarget(best.x, best.y)) {
                return this.generatePath(best);
            }
            this.addLocation(best, best.x + 1, best.y);
            this.addLocation(best, best.x - 1, best.y);
            this.addLocation(best, best.x, best.y + 1);
            this.addLocation(best, best.x, best.y - 1);
        }
        return null;
    };
    AStarPathFinder.prototype.addLocation = function (parent, x, y) {
        x = Math.floor(x);
        y = Math.floor(y);
        var sx = x;
        var sy = y;
        var dir = AStarPathFinder.NONE;
        if (parent != null) {
            sx = parent.x;
            sy = parent.y;
            if (sy + 1 == y) {
                dir = AStarPathFinder.NORTH_TO_SOUTH;
            }
            if (sy - 1 == y) {
                dir = AStarPathFinder.SOUTH_TO_NORTH;
            }
            if (sx + 1 == x) {
                dir = AStarPathFinder.WEST_TO_EAST;
            }
            if (sx - 1 == x) {
                dir = AStarPathFinder.EAST_TO_WEST;
            }
        }
        if (!this.map.validLocation(x, y)) {
            return;
        }
        // if it's in the open list ignore
        if (this.open[x + (y * this.width)][dir] == this.pathFindCounter) {
            return;
        }
        if (this.closed[x + (y * this.width)][dir] == this.pathFindCounter) {
            return;
        }
        // if it's blocked for any reason, add it to the closed
        if (parent != null) {
            if (parent.depth > this.max) {
                this.closed[x + (y * this.width)][dir] = this.pathFindCounter;
                return;
            }
        }
        if (!this.map.locationDiscovered(x, y)) {
            this.closed[x + (y * this.width)][dir] = this.pathFindCounter;
            return;
        }
        if (this.blocked(sx, sy, x, y)) {
            this.closed[x + (y * this.width)][dir] = this.pathFindCounter;
            return;
        }
        // otherwise it's a possible step add it to the open
        this.open[x + (y * this.width)][dir] = this.pathFindCounter;
        var node = this.createMapNode(x, y, parent, this.getHeuristic(x, y));
        for (var i = 0; i < this.openList.length; i++) {
            var current = this.openList[i];
            if (current.h > node.h) {
                this.openList.splice(i, 0, node);
                return;
            }
        }
        // if no where else add it at the end
        this.openList.push(node);
    };
    AStarPathFinder.prototype.getHeuristic = function (x, y) {
        // distance squared
        var dx = Math.abs(this.tx - x);
        var dy = Math.abs(this.ty - y);
        return (dx * dx) + (dy * dy);
    };
    // object pool accessor - free is done in bulk
    AStarPathFinder.prototype.createMapNode = function (x, y, parent, h) {
        if (this.objectPool.length == 0) {
            var n = new MapNode_1.MapNode();
            this.objectPool.push(n);
        }
        var node = this.objectPool[0];
        this.objectPool.splice(0, 1);
        node.x = x;
        node.y = y;
        node.parent = parent;
        node.h = h;
        if (parent != null) {
            node.depth = parent.depth + 1;
        }
        else {
            node.depth = 0;
        }
        return node;
    };
    AStarPathFinder.NORTH_TO_SOUTH = 0;
    AStarPathFinder.EAST_TO_WEST = 1;
    AStarPathFinder.SOUTH_TO_NORTH = 2;
    AStarPathFinder.WEST_TO_EAST = 3;
    AStarPathFinder.NONE = 4;
    return AStarPathFinder;
}());
exports.AStarPathFinder = AStarPathFinder;


/***/ }),

/***/ "./src/path/MapNode.ts":
/*!*****************************!*\
  !*** ./src/path/MapNode.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapNode = void 0;
var MapNode = /** @class */ (function () {
    function MapNode() {
    }
    return MapNode;
}());
exports.MapNode = MapNode;


/***/ }),

/***/ "./src/path/Path.ts":
/*!**************************!*\
  !*** ./src/path/Path.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Path = void 0;
var Step_1 = __webpack_require__(/*! ./Step */ "./src/path/Step.ts");
var Path = /** @class */ (function () {
    function Path() {
        this.steps = new Array();
    }
    Path.prototype.add = function (x, y) {
        this.steps.splice(0, 0, new Step_1.Step(x, y));
    };
    Path.prototype.getLastStep = function () {
        return this.steps[this.steps.length - 1];
    };
    Path.prototype.pop = function () {
        var result = this.steps[0];
        this.steps.splice(0, 1);
        return result;
    };
    return Path;
}());
exports.Path = Path;


/***/ }),

/***/ "./src/path/Step.ts":
/*!**************************!*\
  !*** ./src/path/Step.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Step = void 0;
var Step = /** @class */ (function () {
    function Step(x, y) {
        this.x = x;
        this.y = y;
    }
    return Step;
}());
exports.Step = Step;


/***/ }),

/***/ "./src/tilemaps/LDTKWorld.ts":
/*!***********************************!*\
  !*** ./src/tilemaps/LDTKWorld.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LDTKWorld = void 0;
var MapEntity_1 = __webpack_require__(/*! ./MapEntity */ "./src/tilemaps/MapEntity.ts");
var MapLayer_1 = __webpack_require__(/*! ./MapLayer */ "./src/tilemaps/MapLayer.ts");
var MapLevel_1 = __webpack_require__(/*! ./MapLevel */ "./src/tilemaps/MapLevel.ts");
var MapWorld_1 = __webpack_require__(/*! ./MapWorld */ "./src/tilemaps/MapWorld.ts");
var LDTKWorld = /** @class */ (function (_super) {
    __extends(LDTKWorld, _super);
    function LDTKWorld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LDTKWorld.prototype.initOnFirstClick = function () {
    };
    LDTKWorld.prototype.load = function (json) {
        this.gridSize = json.defaultGridSize;
        var tileset = json.defs.tilesets[0];
        this.tilesetScanline = tileset.pxWid / tileset.tileGridSize;
        this.tilesetSize = tileset.tileGridSize;
        for (var _i = 0, _a = json.levels; _i < _a.length; _i++) {
            var levelData = _a[_i];
            var level = new MapLevel_1.MapLevel(this, levelData.identifier);
            for (var _b = 0, _c = levelData.fieldInstances; _b < _c.length; _b++) {
                var fieldInstance = _c[_b];
                level.fields[fieldInstance.__identifier] = fieldInstance.__value;
            }
            for (var _d = 0, _e = levelData.layerInstances; _d < _e.length; _d++) {
                var layerData = _e[_d];
                if (layerData.__type === "Entities") {
                    for (var _f = 0, _g = layerData.entityInstances; _f < _g.length; _f++) {
                        var entityData = _g[_f];
                        var entity = new MapEntity_1.MapEntity(level, entityData.px[0] / layerData.__gridSize, entityData.px[1] / layerData.__gridSize, entityData.__identifier);
                        for (var _h = 0, _j = entityData.fieldInstances; _h < _j.length; _h++) {
                            var fieldInstance = _j[_h];
                            entity.fields[fieldInstance.__identifier] = fieldInstance.__value;
                        }
                        level.entities.push(entity);
                    }
                }
                else {
                    var layer = new MapLayer_1.MapLayer(level, layerData.__identifier, layerData.__cWid, layerData.__cHei);
                    var scanline = level.world.tilesetScanline;
                    var tileSize = level.world.tilesetSize;
                    for (var _k = 0, _l = layerData.gridTiles; _k < _l.length; _k++) {
                        var tile = _l[_k];
                        var x = Math.floor(tile.px[0] / layerData.__gridSize);
                        var y = Math.floor(tile.px[1] / layerData.__gridSize);
                        var posIndex = x + (y * layer.width);
                        var tx = Math.floor(tile.src[0] / tileSize);
                        var ty = Math.floor(tile.src[1] / tileSize);
                        var tileIndex = (ty * scanline) + tx;
                        layer.tiles[posIndex] = tileIndex + 1;
                    }
                    level.layers.splice(0, 0, layer);
                    level.layerByName[layer.name] = layer;
                }
            }
            if (level.layers.length > 0) {
                level.width = level.layers[0].width;
                level.height = level.layers[0].height;
            }
            else {
                level.width = levelData.pxWid / this.gridSize;
                level.height = levelData.pxHei / this.gridSize;
            }
            this.levels[level.id] = level;
        }
        this.loaded = true;
        return this;
    };
    return LDTKWorld;
}(MapWorld_1.MapWorld));
exports.LDTKWorld = LDTKWorld;


/***/ }),

/***/ "./src/tilemaps/MapEntity.ts":
/*!***********************************!*\
  !*** ./src/tilemaps/MapEntity.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapEntity = void 0;
var MapEntity = /** @class */ (function () {
    function MapEntity(level, x, y, type) {
        this.fields = {};
        this.level = level;
        this.x = x;
        this.y = y;
        this.type = type;
    }
    return MapEntity;
}());
exports.MapEntity = MapEntity;


/***/ }),

/***/ "./src/tilemaps/MapLayer.ts":
/*!**********************************!*\
  !*** ./src/tilemaps/MapLayer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapLayer = void 0;
var MapLayer = /** @class */ (function () {
    function MapLayer(level, name, width, height) {
        this.name = name;
        this.level = level;
        this.width = width;
        this.height = height;
        this.tiles = [];
        for (var i = 0; i < this.width * this.height; i++) {
            this.tiles.push(0);
        }
    }
    MapLayer.prototype.get = function (x, y) {
        if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)) {
            return 0;
        }
        var posIndex = x + (y * this.width);
        return this.tiles[posIndex];
    };
    return MapLayer;
}());
exports.MapLayer = MapLayer;


/***/ }),

/***/ "./src/tilemaps/MapLevel.ts":
/*!**********************************!*\
  !*** ./src/tilemaps/MapLevel.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapLevel = void 0;
var MapLevel = /** @class */ (function () {
    function MapLevel(world, id) {
        this.layers = [];
        this.layerByName = {};
        this.entities = [];
        this.fields = {};
        this.world = world;
        this.id = id;
    }
    MapLevel.prototype.getFirstEntityOfType = function (type) {
        for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
            var entity = _a[_i];
            if (entity.type === type) {
                return entity;
            }
        }
        return null;
    };
    return MapLevel;
}());
exports.MapLevel = MapLevel;


/***/ }),

/***/ "./src/tilemaps/MapWorld.ts":
/*!**********************************!*\
  !*** ./src/tilemaps/MapWorld.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapWorld = void 0;
var MapWorld = /** @class */ (function () {
    function MapWorld() {
        this.levels = {};
        this.gridSize = 0;
        this.tilesetScanline = 0;
        this.tilesetSize = 0;
        this.loaded = false;
    }
    return MapWorld;
}());
exports.MapWorld = MapWorld;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapEntity = exports.MapLayer = exports.MapLevel = exports.MapWorld = exports.LDTKWorld = exports.Step = exports.Path = exports.AStarPathFinder = exports.Keys = exports.BLUE = exports.RED = exports.GREEN = exports.BLACK = exports.WHITE = exports.setSoundOn = exports.setMusicOn = exports.isSoundOn = exports.isMusicOn = exports.startGame = void 0;
var Gute_1 = __webpack_require__(/*! ./Gute */ "./src/Gute.ts");
Object.defineProperty(exports, "startGame", ({ enumerable: true, get: function () { return Gute_1.startGame; } }));
Object.defineProperty(exports, "isMusicOn", ({ enumerable: true, get: function () { return Gute_1.isMusicOn; } }));
Object.defineProperty(exports, "isSoundOn", ({ enumerable: true, get: function () { return Gute_1.isSoundOn; } }));
Object.defineProperty(exports, "setMusicOn", ({ enumerable: true, get: function () { return Gute_1.setMusicOn; } }));
Object.defineProperty(exports, "setSoundOn", ({ enumerable: true, get: function () { return Gute_1.setSoundOn; } }));
var Graphics_1 = __webpack_require__(/*! ./Graphics */ "./src/Graphics.ts");
Object.defineProperty(exports, "WHITE", ({ enumerable: true, get: function () { return Graphics_1.WHITE; } }));
Object.defineProperty(exports, "BLACK", ({ enumerable: true, get: function () { return Graphics_1.BLACK; } }));
Object.defineProperty(exports, "GREEN", ({ enumerable: true, get: function () { return Graphics_1.GREEN; } }));
Object.defineProperty(exports, "RED", ({ enumerable: true, get: function () { return Graphics_1.RED; } }));
Object.defineProperty(exports, "BLUE", ({ enumerable: true, get: function () { return Graphics_1.BLUE; } }));
var Keys_1 = __webpack_require__(/*! ./Keys */ "./src/Keys.ts");
Object.defineProperty(exports, "Keys", ({ enumerable: true, get: function () { return Keys_1.Keys; } }));
var AStarPathFinder_1 = __webpack_require__(/*! ./path/AStarPathFinder */ "./src/path/AStarPathFinder.ts");
Object.defineProperty(exports, "AStarPathFinder", ({ enumerable: true, get: function () { return AStarPathFinder_1.AStarPathFinder; } }));
var Path_1 = __webpack_require__(/*! ./path/Path */ "./src/path/Path.ts");
Object.defineProperty(exports, "Path", ({ enumerable: true, get: function () { return Path_1.Path; } }));
var Step_1 = __webpack_require__(/*! ./path/Step */ "./src/path/Step.ts");
Object.defineProperty(exports, "Step", ({ enumerable: true, get: function () { return Step_1.Step; } }));
var LDTKWorld_1 = __webpack_require__(/*! ./tilemaps/LDTKWorld */ "./src/tilemaps/LDTKWorld.ts");
Object.defineProperty(exports, "LDTKWorld", ({ enumerable: true, get: function () { return LDTKWorld_1.LDTKWorld; } }));
var MapWorld_1 = __webpack_require__(/*! ./tilemaps/MapWorld */ "./src/tilemaps/MapWorld.ts");
Object.defineProperty(exports, "MapWorld", ({ enumerable: true, get: function () { return MapWorld_1.MapWorld; } }));
var MapLevel_1 = __webpack_require__(/*! ./tilemaps/MapLevel */ "./src/tilemaps/MapLevel.ts");
Object.defineProperty(exports, "MapLevel", ({ enumerable: true, get: function () { return MapLevel_1.MapLevel; } }));
var MapLayer_1 = __webpack_require__(/*! ./tilemaps/MapLayer */ "./src/tilemaps/MapLayer.ts");
Object.defineProperty(exports, "MapLayer", ({ enumerable: true, get: function () { return MapLayer_1.MapLayer; } }));
var MapEntity_1 = __webpack_require__(/*! ./tilemaps/MapEntity */ "./src/tilemaps/MapEntity.ts");
Object.defineProperty(exports, "MapEntity", ({ enumerable: true, get: function () { return MapEntity_1.MapEntity; } }));

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0dyYXBoaWNzLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvR3V0ZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0tleXMudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL0JpdG1hcEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL0ZvbnRJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9HcmFwaGljc0ltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL1NvdW5kSW1wbC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL2ltcGwvVGlsZXNldEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9wYXRoL0FTdGFyUGF0aEZpbmRlci50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvTWFwTm9kZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvUGF0aC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvU3RlcC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL0xEVEtXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcEVudGl0eS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcExheWVyLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvdGlsZW1hcHMvTWFwTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy90aWxlbWFwcy9NYXBXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxZQUFZLEdBQUcsYUFBYSxHQUFHLFdBQVcsR0FBRyxhQUFhLEdBQUcsYUFBYTtBQUMxRSxhQUFhO0FBQ2IsYUFBYTtBQUNiLFdBQVc7QUFDWCxhQUFhO0FBQ2IsWUFBWTs7Ozs7Ozs7Ozs7QUNQQztBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxpQkFBaUIsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUI7QUFDbkcsbUJBQW1CLG1CQUFPLENBQUMsbURBQW1CO0FBQzlDLGlCQUFpQixtQkFBTyxDQUFDLCtDQUFpQjtBQUMxQyxxQkFBcUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDbEQsa0JBQWtCLG1CQUFPLENBQUMsaURBQWtCO0FBQzVDLG9CQUFvQixtQkFBTyxDQUFDLHFEQUFvQjtBQUNoRCxrQkFBa0IsbUJBQU8sQ0FBQyx5REFBc0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0JBQWdCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGdCQUFnQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQzdPWTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FB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Qyx5QkFBeUIsRUFBRSxFQUFFLEVBQUM7QUFDNUcsdUNBQXNDLENBQUMscUNBQXFDLHVCQUF1QixFQUFFLEVBQUUsRUFBQztBQUN4Ryx3Q0FBdUMsQ0FBQyxxQ0FBcUMsd0JBQXdCLEVBQUUsRUFBRSxFQUFDO0FBQzFHLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3Qix3Q0FBdUMsQ0FBQyxxQ0FBcUMsb0JBQW9CLEVBQUUsRUFBRSxFQUFDO0FBQ3RHLHdCQUF3QixtQkFBTyxDQUFDLDZEQUF3QjtBQUN4RCxtREFBa0QsQ0FBQyxxQ0FBcUMsMENBQTBDLEVBQUUsRUFBRSxFQUFDO0FBQ3ZJLGFBQWEsbUJBQU8sQ0FBQyx1Q0FBYTtBQUNsQyx3Q0FBdUMsQ0FBQyxxQ0FBcUMsb0JBQW9CLEVBQUUsRUFBRSxFQUFDO0FBQ3RHLGFBQWEsbUJBQU8sQ0FBQyx1Q0FBYTtBQUNsQyx3Q0FBdUMsQ0FBQyxxQ0FBcUMsb0JBQW9CLEVBQUUsRUFBRSxFQUFDO0FBQ3RHLGtCQUFrQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNoRCw2Q0FBNEMsQ0FBQyxxQ0FBcUMsOEJBQThCLEVBQUUsRUFBRSxFQUFDO0FBQ3JILGlCQUFpQixtQkFBTyxDQUFDLHVEQUFxQjtBQUM5Qyw0Q0FBMkMsQ0FBQyxxQ0FBcUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFDO0FBQ2xILGlCQUFpQixtQkFBTyxDQUFDLHVEQUFxQjtBQUM5Qyw0Q0FBMkMsQ0FBQyxxQ0FBcUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFDO0FBQ2xILGlCQUFpQixtQkFBTyxDQUFDLHVEQUFxQjtBQUM5Qyw0Q0FBMkMsQ0FBQyxxQ0FBcUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFDO0FBQ2xILGtCQUFrQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNoRCw2Q0FBNEMsQ0FBQyxxQ0FBcUMsOEJBQThCLEVBQUUsRUFBRSxFQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3V0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndXRlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJMVUUgPSBleHBvcnRzLkdSRUVOID0gZXhwb3J0cy5SRUQgPSBleHBvcnRzLkJMQUNLID0gZXhwb3J0cy5XSElURSA9IHZvaWQgMDtcbmV4cG9ydHMuV0hJVEUgPSBcIndoaXRlXCI7XG5leHBvcnRzLkJMQUNLID0gXCJibGFja1wiO1xuZXhwb3J0cy5SRUQgPSBcInJlZFwiO1xuZXhwb3J0cy5HUkVFTiA9IFwiZ3JlZW5cIjtcbmV4cG9ydHMuQkxVRSA9IFwiYmx1ZVwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXJ0R2FtZSA9IGV4cG9ydHMuc2V0TXVzaWNPbiA9IGV4cG9ydHMuc2V0U291bmRPbiA9IGV4cG9ydHMuaXNNdXNpY09uID0gZXhwb3J0cy5pc1NvdW5kT24gPSB2b2lkIDA7XG52YXIgQml0bWFwSW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9CaXRtYXBJbXBsXCIpO1xudmFyIEZvbnRJbXBsXzEgPSByZXF1aXJlKFwiLi9pbXBsL0ZvbnRJbXBsXCIpO1xudmFyIEdyYXBoaWNzSW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9HcmFwaGljc0ltcGxcIik7XG52YXIgU291bmRJbXBsXzEgPSByZXF1aXJlKFwiLi9pbXBsL1NvdW5kSW1wbFwiKTtcbnZhciBUaWxlc2V0SW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9UaWxlc2V0SW1wbFwiKTtcbnZhciBMRFRLV29ybGRfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL0xEVEtXb3JsZFwiKTtcbnZhciBHQU1FX0xPT1A7XG52YXIgU09VTkRfT04gPSB0cnVlO1xudmFyIE1VU0lDX09OID0gdHJ1ZTtcbmZ1bmN0aW9uIGlzU291bmRPbigpIHtcbiAgICByZXR1cm4gU09VTkRfT047XG59XG5leHBvcnRzLmlzU291bmRPbiA9IGlzU291bmRPbjtcbmZ1bmN0aW9uIGlzTXVzaWNPbigpIHtcbiAgICByZXR1cm4gTVVTSUNfT047XG59XG5leHBvcnRzLmlzTXVzaWNPbiA9IGlzTXVzaWNPbjtcbmZ1bmN0aW9uIHNldFNvdW5kT24ob24pIHtcbiAgICBTT1VORF9PTiA9IG9uO1xufVxuZXhwb3J0cy5zZXRTb3VuZE9uID0gc2V0U291bmRPbjtcbmZ1bmN0aW9uIHNldE11c2ljT24ob24pIHtcbiAgICBpZiAoIW9uICYmIE1VU0lDX09OKSB7XG4gICAgICAgIE1VU0lDX09OID0gZmFsc2U7XG4gICAgICAgIGlmIChTb3VuZEltcGxfMS5Tb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgICAgICAgU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvbiAmJiAhTVVTSUNfT04pIHtcbiAgICAgICAgTVVTSUNfT04gPSB0cnVlO1xuICAgICAgICBpZiAoU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICAgIFNvdW5kSW1wbF8xLlNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnBsYXkoU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMudm9sdW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuc2V0TXVzaWNPbiA9IHNldE11c2ljT247XG5mdW5jdGlvbiBzdGFydEdhbWUoZ2FtZSkge1xuICAgIEdBTUVfTE9PUCA9IG5ldyBHYW1lTG9vcCgpLnN0YXJ0KGdhbWUpO1xufVxuZXhwb3J0cy5zdGFydEdhbWUgPSBzdGFydEdhbWU7XG52YXIgR2FtZUxvb3AgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2FtZUxvb3AoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gW107XG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5pbml0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmdldEdyYXBoaWNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaGljcztcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5hbGxSZXNvdXJjZXNMb2FkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLnJlc291cmNlczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciByZXNvdXJjZSA9IF9hW19pXTtcbiAgICAgICAgICAgIGlmICghcmVzb3VyY2UubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmluaXRSZXNvdXJjZXNPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5hbGxSZXNvdXJjZXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLnJlc291cmNlczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzb3VyY2UgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UuaW5pdE9uRmlyc3RDbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubW91c2VEb3duSGFuZGxlciA9IGZ1bmN0aW9uICh4LCB5LCBpZCkge1xuICAgICAgICBpZiAoaWQgPT09IHZvaWQgMCkgeyBpZCA9IDA7IH1cbiAgICAgICAgdGhpcy5pbml0UmVzb3VyY2VzT25GaXJzdENsaWNrKCk7XG4gICAgICAgIHZhciBjYW52YXMgPSB0aGlzLmdyYXBoaWNzLmNhbnZhcztcbiAgICAgICAgY2FudmFzLmZvY3VzKCk7XG4gICAgICAgIHZhciB3aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKCh4IC8gd2lkdGgpICogY2FudmFzLndpZHRoKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoKHkgLyBoZWlnaHQpICogY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZ2FtZS5vbk1vdXNlRG93bih0aGlzLCB4LCB5KTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5tb3VzZVVwSGFuZGxlciA9IGZ1bmN0aW9uICh4LCB5LCBpZCkge1xuICAgICAgICBpZiAoaWQgPT09IHZvaWQgMCkgeyBpZCA9IDA7IH1cbiAgICAgICAgdGhpcy5pbml0UmVzb3VyY2VzT25GaXJzdENsaWNrKCk7XG4gICAgICAgIHZhciBjYW52YXMgPSB0aGlzLmdyYXBoaWNzLmNhbnZhcztcbiAgICAgICAgdmFyIHdpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoKHggLyB3aWR0aCkgKiBjYW52YXMud2lkdGgpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcigoeSAvIGhlaWdodCkgKiBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5nYW1lLm9uTW91c2VVcCh0aGlzLCB4LCB5KTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5rZXlEb3duSGFuZGxlciA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5pbml0UmVzb3VyY2VzT25GaXJzdENsaWNrKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5vbktleURvd24odGhpcywga2V5KTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5rZXlVcEhhbmRsZXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuZ2FtZS5vbktleVVwKHRoaXMsIGtleSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoZ2FtZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzSW1wbF8xLkdyYXBoaWNzSW1wbCgpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1vdXNlRG93bkhhbmRsZXIoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tb3VzZVVwSGFuZGxlcihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIF90aGlzLmtleURvd25IYW5kbGVyKGV2ZW50LmtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgX3RoaXMua2V5VXBIYW5kbGVyKGV2ZW50LmtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICBnYW1lLmluaXQodGhpcyk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sb29wKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkZWx0YSA9IDA7XG4gICAgICAgIGlmICh0aGlzLmxhc3RGcmFtZSAhPT0gMCkge1xuICAgICAgICAgICAgZGVsdGEgPSBub3cgLSB0aGlzLmxhc3RGcmFtZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IG5vdztcbiAgICAgICAgdGhpcy5ncmFwaGljcy5hcHBseUZvbnQoKTtcbiAgICAgICAgdGhpcy5nYW1lLnVwZGF0ZSh0aGlzLCBkZWx0YSk7XG4gICAgICAgIHRoaXMuZ2FtZS5yZW5kZXIodGhpcywgdGhpcy5ncmFwaGljcyk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sb29wKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmxvYWRNdXNpYyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIHNvdW5kID0gbmV3IFNvdW5kSW1wbF8xLlNvdW5kSW1wbCh1cmwsIHRydWUpO1xuICAgICAgICB0aGlzLnJlc291cmNlcy5wdXNoKHNvdW5kKTtcbiAgICAgICAgcmV0dXJuIHNvdW5kO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmxvYWRTb3VuZCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIHNvdW5kID0gbmV3IFNvdW5kSW1wbF8xLlNvdW5kSW1wbCh1cmwsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaChzb3VuZCk7XG4gICAgICAgIHJldHVybiBzb3VuZDtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkQml0bWFwID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB2YXIgYml0bWFwID0gbmV3IEJpdG1hcEltcGxfMS5CaXRtYXBJbXBsKHVybCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2goYml0bWFwKTtcbiAgICAgICAgcmV0dXJuIGJpdG1hcDtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkU2NhbGVkVGlsZXNldCA9IGZ1bmN0aW9uICh1cmwsIHRpbGVXaWR0aCwgdGlsZUhlaWdodCwgc2NhbGUpIHtcbiAgICAgICAgdmFyIHRpbGVzZXQgPSBuZXcgVGlsZXNldEltcGxfMS5UaWxlc2V0SW1wbCh1cmwsIHRpbGVXaWR0aCwgdGlsZUhlaWdodCwgc2NhbGUpO1xuICAgICAgICB0aGlzLnJlc291cmNlcy5wdXNoKHRpbGVzZXQpO1xuICAgICAgICByZXR1cm4gdGlsZXNldDtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkVGlsZXNldCA9IGZ1bmN0aW9uICh1cmwsIHRpbGVXaWR0aCwgdGlsZUhlaWdodCkge1xuICAgICAgICB2YXIgdGlsZXNldCA9IG5ldyBUaWxlc2V0SW1wbF8xLlRpbGVzZXRJbXBsKHVybCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCAxKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaCh0aWxlc2V0KTtcbiAgICAgICAgcmV0dXJuIHRpbGVzZXQ7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZEZvbnQgPSBmdW5jdGlvbiAodXJsLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgRm9udEltcGxfMS5Gb250SW1wbCh1cmwsIG5hbWUpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmxvYWRMRFRLID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB2YXIgd29ybGQgPSBuZXcgTERUS1dvcmxkXzEuTERUS1dvcmxkKCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2god29ybGQpO1xuICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcS5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChyZXEucmVzcG9uc2VUZXh0KSB7XG4gICAgICAgICAgICAgICAgd29ybGQubG9hZChKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxLnNlbmQobnVsbCk7XG4gICAgICAgIHJldHVybiB3b3JsZDtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkSnNvbiA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJlcS5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICByZXEub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcS5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXEuc2VuZChudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuaXNSdW5uaW5nU3RhbmRhbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICh3aW5kb3cubmF2aWdhdG9yLnN0YW5kYWxvbmUgPT09IHRydWUpIHx8ICh3aW5kb3cubWF0Y2hNZWRpYSgnKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSknKS5tYXRjaGVzKTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5pc01vYmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJT1MoKSB8fCB0aGlzLmlzQW5kcm9pZCgpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmlzQW5kcm9pZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSkgIT0gbnVsbDtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5pc0lPUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICdpUGFkIFNpbXVsYXRvcicsXG4gICAgICAgICAgICAnaVBob25lIFNpbXVsYXRvcicsXG4gICAgICAgICAgICAnaVBvZCBTaW11bGF0b3InLFxuICAgICAgICAgICAgJ2lQYWQnLFxuICAgICAgICAgICAgJ2lQaG9uZScsXG4gICAgICAgICAgICAnaVBvZCdcbiAgICAgICAgXS5pbmRleE9mKG5hdmlnYXRvci5wbGF0Zm9ybSkgPj0gMFxuICAgICAgICAgICAgLy8gaVBhZCBvbiBpT1MgMTMgZGV0ZWN0aW9uXG4gICAgICAgICAgICB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcyhcIk1hY1wiKSAmJiBcIm9udG91Y2hlbmRcIiBpbiBkb2N1bWVudCk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuaXNQaG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KVwiKS5tYXRjaGVzO1xuICAgIH07XG4gICAgcmV0dXJuIEdhbWVMb29wO1xufSgpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5LZXlzID0gdm9pZCAwO1xudmFyIEtleXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gS2V5cygpIHtcbiAgICB9XG4gICAgS2V5cy5FU0NBUEVfS0VZID0gXCJFc2NhcGVcIjtcbiAgICBLZXlzLkVOVEVSX0tFWSA9IFwiRW50ZXJcIjtcbiAgICBLZXlzLkxFRlRfS0VZID0gXCJBcnJvd0xlZnRcIjtcbiAgICBLZXlzLlJJR0hUX0tFWSA9IFwiQXJyb3dSaWdodFwiO1xuICAgIEtleXMuVVBfS0VZID0gXCJBcnJvd1VwXCI7XG4gICAgS2V5cy5ET1dOX0tFWSA9IFwiQXJyb3dEb3duXCI7XG4gICAgS2V5cy5TUEFDRV9LRVkgPSBcIiBcIjtcbiAgICBLZXlzLlNfS0VZID0gXCJzXCI7XG4gICAgS2V5cy5NX0tFWSA9IFwibVwiO1xuICAgIEtleXMuQV9LRVkgPSBcImFcIjtcbiAgICBLZXlzLldfS0VZID0gXCJ3XCI7XG4gICAgS2V5cy5EX0tFWSA9IFwiZFwiO1xuICAgIEtleXMuQ09OVFJPTF9LRVkgPSBcIkNvbnRyb2xcIjtcbiAgICBLZXlzLk1FVEFfS0VZID0gXCJNZXRhXCI7XG4gICAgS2V5cy5BTFRfS0VZID0gXCJBbHRcIjtcbiAgICBLZXlzLlRBQl9LRVkgPSBcIlRhYlwiO1xuICAgIHJldHVybiBLZXlzO1xufSgpKTtcbmV4cG9ydHMuS2V5cyA9IEtleXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQml0bWFwSW1wbCA9IHZvaWQgMDtcbnZhciBCaXRtYXBJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJpdG1hcEltcGwodXJsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy53aWR0aCA9IF90aGlzLmltYWdlLndpZHRoO1xuICAgICAgICAgICAgX3RoaXMuaGVpZ2h0ID0gX3RoaXMuaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgX3RoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB1cmw7XG4gICAgfVxuICAgIEJpdG1hcEltcGwucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY3R4LCB4LCB5KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgeCwgeSk7XG4gICAgfTtcbiAgICBCaXRtYXBJbXBsLnByb3RvdHlwZS5kcmF3U2NhbGVkID0gZnVuY3Rpb24gKGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG4gICAgQml0bWFwSW1wbC5wcm90b3R5cGUuaW5pdE9uRmlyc3RDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuICAgIHJldHVybiBCaXRtYXBJbXBsO1xufSgpKTtcbmV4cG9ydHMuQml0bWFwSW1wbCA9IEJpdG1hcEltcGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRm9udEltcGwgPSB2b2lkIDA7XG52YXIgRm9udEltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9udEltcGwodXJsLCBuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gXCJAZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IFwiICsgbmFtZSArIFwiOyBzcmM6IHVybCgnXCIgKyB1cmwgKyBcIicpOyB9IGJvZHkgeyBmb250LWZhbWlseTogXCIgKyBuYW1lICsgXCI7IH1cIjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICAgIEZvbnRJbXBsLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChjdHgsIHNpemUpIHtcbiAgICAgICAgY3R4LmZvbnQgPSBzaXplICsgXCJweCBcIiArIHRoaXMubmFtZTtcbiAgICB9O1xuICAgIHJldHVybiBGb250SW1wbDtcbn0oKSk7XG5leHBvcnRzLkZvbnRJbXBsID0gRm9udEltcGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR3JhcGhpY3NJbXBsID0gdm9pZCAwO1xudmFyIEZvbnRJbXBsXzEgPSByZXF1aXJlKFwiLi9Gb250SW1wbFwiKTtcbnZhciBpc0ZpcmVmb3ggPSB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnO1xudmFyIENvcHlCaXRtYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29weUJpdG1hcChjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgICBDb3B5Qml0bWFwLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCwgeCwgeSkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB4LCB5KTtcbiAgICB9O1xuICAgIENvcHlCaXRtYXAucHJvdG90eXBlLmRyYXdTY2FsZWQgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG4gICAgQ29weUJpdG1hcC5wcm90b3R5cGUuZ2V0RHJhd2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgICB9O1xuICAgIENvcHlCaXRtYXAucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICByZXR1cm4gQ29weUJpdG1hcDtcbn0oKSk7XG52YXIgR3JhcGhpY3NJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdyYXBoaWNzSW1wbCgpIHtcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IDIwO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZWNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiwgeyBhbHBoYTogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMuY3R4LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eC5tb3pJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmZvbnRTbW9vdGggPSBcIm5ldmVyXCI7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndlYmtpdEZvbnRTbW9vdGhpbmcgPSBcIm5vbmVcIjtcbiAgICAgICAgaWYgKGlzRmlyZWZveCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSBcImNyaXNwLWVkZ2VzXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IFwicGl4ZWxhdGVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb250ID0gbmV3IEZvbnRJbXBsXzEuRm9udEltcGwoXCJmb250LnR0ZlwiLCBcIkd1dGVEZWZhdWx0XCIpO1xuICAgICAgICBpZiAodGhpcy5mb250KSB7XG4gICAgICAgICAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuY2xlYXJSZWN0ID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5maXRTY3JlZW4gPSBmdW5jdGlvbiAocGl4ZWxTY2FsZSkge1xuICAgICAgICB2YXIgcmVhbFdpZHRoID0gTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aCAvIHBpeGVsU2NhbGUpICogcGl4ZWxTY2FsZTtcbiAgICAgICAgdmFyIHJlYWxIZWlnaHQgPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lckhlaWdodCAvIHBpeGVsU2NhbGUpICogcGl4ZWxTY2FsZTtcbiAgICAgICAgdmFyIHZpcnR1YWxXaWR0aCA9IHJlYWxXaWR0aCAvIHBpeGVsU2NhbGU7XG4gICAgICAgIHZhciB2aXJ0dWFsSGVpZ2h0ID0gcmVhbEhlaWdodCAvIHBpeGVsU2NhbGU7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB2aXJ0dWFsV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHZpcnR1YWxIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gcmVhbFdpZHRoICsgXCJweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSByZWFsSGVpZ2h0ICsgXCJweFwiO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5zZXRBbHBoYSA9IGZ1bmN0aW9uIChhbHBoYSkge1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuICAgICAgICAoX2EgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb3B5Qml0bWFwKGNhbnZhcyk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHgsIHkpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5zY2FsZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHgsIHkpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5hcHBseUZvbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm9udC5hcHBseSh0aGlzLmN0eCwgdGhpcy5mb250U2l6ZSk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLnNldEZvbnQgPSBmdW5jdGlvbiAoZm9udCkge1xuICAgICAgICB0aGlzLmZvbnQgPSBmb250O1xuICAgICAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5zZXRGb250U2l6ZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICAgIHRoaXMuZm9udFNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5nZXRTdHJpbmdXaWR0aCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd1N0cmluZyA9IGZ1bmN0aW9uICh4LCB5LCB0ZXh0LCBjb2wpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuc2V0Q29tcG9zaXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gbmFtZTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZmlsbFJlY3QgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdMaW5lID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyLCBjb2wpIHtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBjb2w7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4MSwgeTEpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdCaXRtYXAgPSBmdW5jdGlvbiAoeCwgeSwgYml0bWFwKSB7XG4gICAgICAgIGJpdG1hcC5kcmF3KHRoaXMuY3R4LCB4LCB5KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd1NjYWxlZEJpdG1hcCA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBiaXRtYXApIHtcbiAgICAgICAgYml0bWFwLmRyYXdTY2FsZWQodGhpcy5jdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG4gICAgcmV0dXJuIEdyYXBoaWNzSW1wbDtcbn0oKSk7XG5leHBvcnRzLkdyYXBoaWNzSW1wbCA9IEdyYXBoaWNzSW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Tb3VuZEltcGwgPSB2b2lkIDA7XG52YXIgR3V0ZV8xID0gcmVxdWlyZShcIi4uL0d1dGVcIik7XG52YXIgQXVkaW9Db250ZXh0O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG59XG52YXIgQVVESU9fQ09OVEVYVDtcbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKEd1dGVfMS5pc011c2ljT24oKSkge1xuICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5wbGF5KFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnZvbHVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XG59XG52YXIgU291bmRJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNvdW5kSW1wbCh1cmwsIG11c2ljKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudm9sdW1lID0gMTtcbiAgICAgICAgdGhpcy5tdXNpYyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5tdXNpYyA9IG11c2ljO1xuICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcS5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhcnJheUJ1ZmZlciA9IHJlcS5yZXNwb25zZTtcbiAgICAgICAgICAgIGlmIChhcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIF90aGlzLmRhdGEgPSBhcnJheUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBfdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLnRyeUxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxLnNlbmQobnVsbCk7XG4gICAgfVxuICAgIFNvdW5kSW1wbC5wcm90b3R5cGUudHJ5TG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKEFVRElPX0NPTlRFWFQgJiYgdGhpcy5kYXRhKSB7XG4gICAgICAgICAgICBBVURJT19DT05URVhULmRlY29kZUF1ZGlvRGF0YSh0aGlzLmRhdGEsIGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID09PSBfdGhpcykge1xuICAgICAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsYXkoX3RoaXMudm9sdW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZSkgeyBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBsb2FkOiBcIiArIF90aGlzLnVybCk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTb3VuZEltcGwucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghQVVESU9fQ09OVEVYVCkge1xuICAgICAgICAgICAgQVVESU9fQ09OVEVYVCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgICAgIEFVRElPX0NPTlRFWFQucmVzdW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cnlMb2FkKCk7XG4gICAgfTtcbiAgICBTb3VuZEltcGwucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAodm9sdW1lKSB7XG4gICAgICAgIHRoaXMudm9sdW1lID0gdm9sdW1lO1xuICAgICAgICBpZiAoIXRoaXMuYnVmZmVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgICAgICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID0gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDKSB7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgPSB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm11c2ljICYmICFHdXRlXzEuaXNNdXNpY09uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghR3V0ZV8xLmlzU291bmRPbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb3VyY2UgPSBBVURJT19DT05URVhULmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICB0aGlzLnNvdXJjZS5idWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy5nYWluID0gQVVESU9fQ09OVEVYVC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5nYWluKTtcbiAgICAgICAgdGhpcy5nYWluLmNvbm5lY3QoQVVESU9fQ09OVEVYVC5kZXN0aW5hdGlvbik7XG4gICAgICAgIGlmICh0aGlzLm11c2ljKSB7XG4gICAgICAgICAgICB0aGlzLmdhaW4uZ2Fpbi52YWx1ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvdXJjZS5zdGFydCgwKTtcbiAgICAgICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHZvbHVtZSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSArIDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYWluLmdhaW4udmFsdWUgPSB2b2x1bWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNvdW5kSW1wbC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKDAsIEFVRElPX0NPTlRFWFQuY3VycmVudFRpbWUgKyAzKTtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvdXJjZV8xID0gdGhpcy5zb3VyY2U7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBTb3VyY2VfMS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfSwgNDAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTb3VuZEltcGw7XG59KCkpO1xuZXhwb3J0cy5Tb3VuZEltcGwgPSBTb3VuZEltcGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGlsZXNldEltcGwgPSB2b2lkIDA7XG52YXIgVGlsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaWxlKGNhbnZhcywgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgICBUaWxlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCwgeCwgeSkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9O1xuICAgIFRpbGUucHJvdG90eXBlLmRyYXdTY2FsZWQgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBUaWxlLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgcmV0dXJuIFRpbGU7XG59KCkpO1xudmFyIFRpbGVzZXRJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbGVzZXRJbXBsKHVybCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCBzY2FsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc2NhbGUgPT09IHZvaWQgMCkgeyBzY2FsZSA9IDE7IH1cbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iaXRtYXBzID0gW107XG4gICAgICAgIHRoaXMuc2NhbmxpbmUgPSAwO1xuICAgICAgICB0aGlzLnRpbGVDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudGludHMgPSB7fTtcbiAgICAgICAgdGlsZVdpZHRoICo9IHNjYWxlO1xuICAgICAgICB0aWxlSGVpZ2h0ICo9IHNjYWxlO1xuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IHRpbGVXaWR0aDtcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gdGlsZUhlaWdodDtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnNjYWxlZChzY2FsZSk7XG4gICAgICAgICAgICBpZiAoX3RoaXMudHJhbnNmb3JtZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zY2FubGluZSA9IE1hdGguZmxvb3IoX3RoaXMudHJhbnNmb3JtZWQud2lkdGggLyB0aWxlV2lkdGgpO1xuICAgICAgICAgICAgICAgIHZhciBkZXB0aCA9IE1hdGguZmxvb3IoX3RoaXMudHJhbnNmb3JtZWQuaGVpZ2h0IC8gdGlsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgX3RoaXMudGlsZUNvdW50ID0gZGVwdGggKiBfdGhpcy5zY2FubGluZTtcbiAgICAgICAgICAgICAgICAvLyBjdXQgdGhlIGltYWdlIGludG8gcGllY2VzXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBkZXB0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgX3RoaXMuc2NhbmxpbmU7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYml0bWFwcy5wdXNoKG5ldyBUaWxlKF90aGlzLnRyYW5zZm9ybWVkLCB4ICogdGlsZVdpZHRoLCB5ICogdGlsZUhlaWdodCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHVybDtcbiAgICB9XG4gICAgVGlsZXNldEltcGwucHJvdG90eXBlLmdldFRpbGVzQWNyb3NzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FubGluZTtcbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5zY2FsZWQgPSBmdW5jdGlvbiAoc2NhbGUpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBpZiAoY3R4ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuaW1hZ2Uud2lkdGggKiBzY2FsZTtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmltYWdlLmhlaWdodCAqIHNjYWxlO1xuICAgICAgICAgICAgY3R4LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY3R4Lm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1lZCA9IGNhbnZhcztcbiAgICAgICAgfVxuICAgIH07XG4gICAgVGlsZXNldEltcGwucHJvdG90eXBlLmdldFRpbGVXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZVdpZHRoO1xuICAgIH07XG4gICAgVGlsZXNldEltcGwucHJvdG90eXBlLmdldFRpbGVIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVIZWlnaHQ7XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuZ2V0VGlsZUNvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlQ291bnQ7XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuaW5pdE9uRmlyc3RDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5nZXRUaWxlID0gZnVuY3Rpb24gKHRpbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYml0bWFwc1t0aWxlXTtcbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5nZXRUaW50ZWRUaWxlID0gZnVuY3Rpb24gKHRpbGUsIHRpbnROYW1lLCB0aW50KSB7XG4gICAgICAgIHZhciB4ID0gdGlsZSAlIHRoaXMuc2NhbmxpbmU7XG4gICAgICAgIHZhciB5ID0gTWF0aC5mbG9vcih0aWxlIC8gdGhpcy5zY2FubGluZSk7XG4gICAgICAgIHZhciBjYW52YXMgPSB0aGlzLnRpbnRzW3RpbnROYW1lXTtcbiAgICAgICAgaWYgKCghY2FudmFzKSAmJiAodGhpcy50cmFuc2Zvcm1lZCkpIHtcbiAgICAgICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLnRyYW5zZm9ybWVkLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMudHJhbnNmb3JtZWQuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy50aW50c1t0aW50TmFtZV0gPSBjYW52YXM7XG4gICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMudHJhbnNmb3JtZWQsIDAsIDApO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVhdmUgYmxhY2sgYWxvbmVcbiAgICAgICAgICAgICAgICAgICAgaWQuZGF0YVtpXSA9IE1hdGguZmxvb3IoaWQuZGF0YVtpXSAqIHRpbnRbMF0pO1xuICAgICAgICAgICAgICAgICAgICBpZC5kYXRhW2kgKyAxXSA9IE1hdGguZmxvb3IoaWQuZGF0YVtpICsgMV0gKiB0aW50WzFdKTtcbiAgICAgICAgICAgICAgICAgICAgaWQuZGF0YVtpICsgMl0gPSBNYXRoLmZsb29yKGlkLmRhdGFbaSArIDJdICogdGludFsyXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaWQsIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVGlsZShjYW52YXMsIHggKiB0aGlzLnRpbGVXaWR0aCwgeSAqIHRoaXMudGlsZUhlaWdodCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCk7XG4gICAgfTtcbiAgICByZXR1cm4gVGlsZXNldEltcGw7XG59KCkpO1xuZXhwb3J0cy5UaWxlc2V0SW1wbCA9IFRpbGVzZXRJbXBsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFTdGFyUGF0aEZpbmRlciA9IHZvaWQgMDtcbnZhciBNYXBOb2RlXzEgPSByZXF1aXJlKFwiLi9NYXBOb2RlXCIpO1xudmFyIFBhdGhfMSA9IHJlcXVpcmUoXCIuL1BhdGhcIik7XG52YXIgQVN0YXJQYXRoRmluZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFTdGFyUGF0aEZpbmRlcihtYXApIHtcbiAgICAgICAgdGhpcy5vYmplY3RQb29sID0gW107XG4gICAgICAgIHRoaXMub3Blbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5wYXRoRmluZENvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLndpZHRoID0gbWFwLmdldE1hcFdpZHRoKCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gbWFwLmdldE1hcEhlaWdodCgpO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5vcGVuID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICB2YXIgYyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA1OyBqKyspIHtcbiAgICAgICAgICAgICAgICBvLnB1c2goMCk7XG4gICAgICAgICAgICAgICAgYy5wdXNoKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vcGVuLnB1c2gobyk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZC5wdXNoKGMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcGVuTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5vYmplY3RQb29sLnB1c2godGhpcy5vcGVuTGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuTGlzdCA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnBhdGhGaW5kQ291bnRlcisrO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5nZW5lcmF0ZVBhdGggPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgY3VycmVudCA9IG5vZGU7XG4gICAgICAgIHZhciBwYXRoID0gbmV3IFBhdGhfMS5QYXRoKCk7XG4gICAgICAgIHdoaWxlIChjdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHBhdGguYWRkKGN1cnJlbnQueCwgY3VycmVudC55KTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuYmxvY2tlZCA9IGZ1bmN0aW9uIChzeCwgc3ksIHgsIHkpIHtcbiAgICAgICAgdmFyIGlnbm9yZUFjdG9ycyA9IHRoaXMuaWdub3JlRmluYWxPY2N1cGF0aW9uICYmIHRoaXMuYXRUYXJnZXQoeCwgeSk7XG4gICAgICAgIGlmICghdGhpcy5tYXAubG9jYXRpb25EaXNjb3ZlcmVkKHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXAuYmxvY2tlZCh0aGlzLm1vdmVyLCBudWxsLCBzeCwgc3ksIHgsIHksIGlnbm9yZUFjdG9ycywgdGhpcy5hdFRhcmdldCh4LCB5KSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuYXRUYXJnZXQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICBmb3IgKHZhciB4cyA9IDA7IHhzIDwgdGhpcy5tb3Zlci5nZXRUaWxlc1dpZHRoKCk7IHhzKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIHlzID0gMDsgeXMgPCB0aGlzLm1vdmVyLmdldFRpbGVzSGVpZ2h0KCk7IHlzKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoKHggKyB4cyA9PSB0aGlzLnR4KSAmJiAoeSArIHlzID09IHRoaXMudHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBBU3RhclBhdGhGaW5kZXIucHJvdG90eXBlLmZpbmRQYXRoID0gZnVuY3Rpb24gKG1vdmVyLCB0eCwgdHksIG1heCwgaWdub3JlRmluYWxPY2N1cGF0aW9uLCBydW5Bd2F5KSB7XG4gICAgICAgIHR4ID0gTWF0aC5mbG9vcih0eCk7XG4gICAgICAgIHR5ID0gTWF0aC5mbG9vcih0eSk7XG4gICAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgICAgICB0aGlzLmlnbm9yZUZpbmFsT2NjdXBhdGlvbiA9IGlnbm9yZUZpbmFsT2NjdXBhdGlvbjtcbiAgICAgICAgdGhpcy5tb3ZlciA9IG1vdmVyO1xuICAgICAgICB0aGlzLnR4ID0gdHg7XG4gICAgICAgIHRoaXMudHkgPSB0eTtcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tlZCh0eCwgdHksIHR4LCB0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5hZGRMb2NhdGlvbihudWxsLCBNYXRoLmZsb29yKG1vdmVyLmdldFRpbGVNYXBYKCkpLCBNYXRoLmZsb29yKG1vdmVyLmdldFRpbGVNYXBZKCkpKTtcbiAgICAgICAgd2hpbGUgKHRoaXMub3Blbkxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGJlc3QgPSB0aGlzLm9wZW5MaXN0WzBdO1xuICAgICAgICAgICAgdGhpcy5vcGVuTGlzdC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAvLyBpZiBiZXN0IGlzIHRoZSB0YXJnZXQgdGhlbiB3ZSd2ZSBmb3VuZCBpdCFcbiAgICAgICAgICAgIGlmICh0aGlzLmF0VGFyZ2V0KGJlc3QueCwgYmVzdC55KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlUGF0aChiZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54ICsgMSwgYmVzdC55KTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54IC0gMSwgYmVzdC55KTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54LCBiZXN0LnkgKyAxKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54LCBiZXN0LnkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuYWRkTG9jYXRpb24gPSBmdW5jdGlvbiAocGFyZW50LCB4LCB5KSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKHgpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcih5KTtcbiAgICAgICAgdmFyIHN4ID0geDtcbiAgICAgICAgdmFyIHN5ID0geTtcbiAgICAgICAgdmFyIGRpciA9IEFTdGFyUGF0aEZpbmRlci5OT05FO1xuICAgICAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN4ID0gcGFyZW50Lng7XG4gICAgICAgICAgICBzeSA9IHBhcmVudC55O1xuICAgICAgICAgICAgaWYgKHN5ICsgMSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLk5PUlRIX1RPX1NPVVRIO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN5IC0gMSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLlNPVVRIX1RPX05PUlRIO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN4ICsgMSA9PSB4KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLldFU1RfVE9fRUFTVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzeCAtIDEgPT0geCkge1xuICAgICAgICAgICAgICAgIGRpciA9IEFTdGFyUGF0aEZpbmRlci5FQVNUX1RPX1dFU1Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm1hcC52YWxpZExvY2F0aW9uKHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgaXQncyBpbiB0aGUgb3BlbiBsaXN0IGlnbm9yZVxuICAgICAgICBpZiAodGhpcy5vcGVuW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID09IHRoaXMucGF0aEZpbmRDb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID09IHRoaXMucGF0aEZpbmRDb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgaXQncyBibG9ja2VkIGZvciBhbnkgcmVhc29uLCBhZGQgaXQgdG8gdGhlIGNsb3NlZFxuICAgICAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQuZGVwdGggPiB0aGlzLm1heCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VkW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID0gdGhpcy5wYXRoRmluZENvdW50ZXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5tYXAubG9jYXRpb25EaXNjb3ZlcmVkKHgsIHkpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZFt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJsb2NrZWQoc3gsIHN5LCB4LCB5KSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZWRbeCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPSB0aGlzLnBhdGhGaW5kQ291bnRlcjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBvdGhlcndpc2UgaXQncyBhIHBvc3NpYmxlIHN0ZXAgYWRkIGl0IHRvIHRoZSBvcGVuXG4gICAgICAgIHRoaXMub3Blblt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuY3JlYXRlTWFwTm9kZSh4LCB5LCBwYXJlbnQsIHRoaXMuZ2V0SGV1cmlzdGljKHgsIHkpKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wZW5MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMub3Blbkxpc3RbaV07XG4gICAgICAgICAgICBpZiAoY3VycmVudC5oID4gbm9kZS5oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTGlzdC5zcGxpY2UoaSwgMCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIG5vIHdoZXJlIGVsc2UgYWRkIGl0IGF0IHRoZSBlbmRcbiAgICAgICAgdGhpcy5vcGVuTGlzdC5wdXNoKG5vZGUpO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5nZXRIZXVyaXN0aWMgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAvLyBkaXN0YW5jZSBzcXVhcmVkXG4gICAgICAgIHZhciBkeCA9IE1hdGguYWJzKHRoaXMudHggLSB4KTtcbiAgICAgICAgdmFyIGR5ID0gTWF0aC5hYnModGhpcy50eSAtIHkpO1xuICAgICAgICByZXR1cm4gKGR4ICogZHgpICsgKGR5ICogZHkpO1xuICAgIH07XG4gICAgLy8gb2JqZWN0IHBvb2wgYWNjZXNzb3IgLSBmcmVlIGlzIGRvbmUgaW4gYnVsa1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuY3JlYXRlTWFwTm9kZSA9IGZ1bmN0aW9uICh4LCB5LCBwYXJlbnQsIGgpIHtcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0UG9vbC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdmFyIG4gPSBuZXcgTWFwTm9kZV8xLk1hcE5vZGUoKTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UG9vbC5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5vYmplY3RQb29sWzBdO1xuICAgICAgICB0aGlzLm9iamVjdFBvb2wuc3BsaWNlKDAsIDEpO1xuICAgICAgICBub2RlLnggPSB4O1xuICAgICAgICBub2RlLnkgPSB5O1xuICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgbm9kZS5oID0gaDtcbiAgICAgICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLmRlcHRoID0gcGFyZW50LmRlcHRoICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGVwdGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLk5PUlRIX1RPX1NPVVRIID0gMDtcbiAgICBBU3RhclBhdGhGaW5kZXIuRUFTVF9UT19XRVNUID0gMTtcbiAgICBBU3RhclBhdGhGaW5kZXIuU09VVEhfVE9fTk9SVEggPSAyO1xuICAgIEFTdGFyUGF0aEZpbmRlci5XRVNUX1RPX0VBU1QgPSAzO1xuICAgIEFTdGFyUGF0aEZpbmRlci5OT05FID0gNDtcbiAgICByZXR1cm4gQVN0YXJQYXRoRmluZGVyO1xufSgpKTtcbmV4cG9ydHMuQVN0YXJQYXRoRmluZGVyID0gQVN0YXJQYXRoRmluZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hcE5vZGUgPSB2b2lkIDA7XG52YXIgTWFwTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBOb2RlKCkge1xuICAgIH1cbiAgICByZXR1cm4gTWFwTm9kZTtcbn0oKSk7XG5leHBvcnRzLk1hcE5vZGUgPSBNYXBOb2RlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBhdGggPSB2b2lkIDA7XG52YXIgU3RlcF8xID0gcmVxdWlyZShcIi4vU3RlcFwiKTtcbnZhciBQYXRoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBhdGgoKSB7XG4gICAgICAgIHRoaXMuc3RlcHMgPSBuZXcgQXJyYXkoKTtcbiAgICB9XG4gICAgUGF0aC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy5zdGVwcy5zcGxpY2UoMCwgMCwgbmV3IFN0ZXBfMS5TdGVwKHgsIHkpKTtcbiAgICB9O1xuICAgIFBhdGgucHJvdG90eXBlLmdldExhc3RTdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGVwc1t0aGlzLnN0ZXBzLmxlbmd0aCAtIDFdO1xuICAgIH07XG4gICAgUGF0aC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5zdGVwc1swXTtcbiAgICAgICAgdGhpcy5zdGVwcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gUGF0aDtcbn0oKSk7XG5leHBvcnRzLlBhdGggPSBQYXRoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN0ZXAgPSB2b2lkIDA7XG52YXIgU3RlcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGVwKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgcmV0dXJuIFN0ZXA7XG59KCkpO1xuZXhwb3J0cy5TdGVwID0gU3RlcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTERUS1dvcmxkID0gdm9pZCAwO1xudmFyIE1hcEVudGl0eV8xID0gcmVxdWlyZShcIi4vTWFwRW50aXR5XCIpO1xudmFyIE1hcExheWVyXzEgPSByZXF1aXJlKFwiLi9NYXBMYXllclwiKTtcbnZhciBNYXBMZXZlbF8xID0gcmVxdWlyZShcIi4vTWFwTGV2ZWxcIik7XG52YXIgTWFwV29ybGRfMSA9IHJlcXVpcmUoXCIuL01hcFdvcmxkXCIpO1xudmFyIExEVEtXb3JsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTERUS1dvcmxkLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExEVEtXb3JsZCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBMRFRLV29ybGQucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBMRFRLV29ybGQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICB0aGlzLmdyaWRTaXplID0ganNvbi5kZWZhdWx0R3JpZFNpemU7XG4gICAgICAgIHZhciB0aWxlc2V0ID0ganNvbi5kZWZzLnRpbGVzZXRzWzBdO1xuICAgICAgICB0aGlzLnRpbGVzZXRTY2FubGluZSA9IHRpbGVzZXQucHhXaWQgLyB0aWxlc2V0LnRpbGVHcmlkU2l6ZTtcbiAgICAgICAgdGhpcy50aWxlc2V0U2l6ZSA9IHRpbGVzZXQudGlsZUdyaWRTaXplO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0ganNvbi5sZXZlbHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGV2ZWxEYXRhID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIGxldmVsID0gbmV3IE1hcExldmVsXzEuTWFwTGV2ZWwodGhpcywgbGV2ZWxEYXRhLmlkZW50aWZpZXIpO1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IGxldmVsRGF0YS5maWVsZEluc3RhbmNlczsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGRJbnN0YW5jZSA9IF9jW19iXTtcbiAgICAgICAgICAgICAgICBsZXZlbC5maWVsZHNbZmllbGRJbnN0YW5jZS5fX2lkZW50aWZpZXJdID0gZmllbGRJbnN0YW5jZS5fX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgX2QgPSAwLCBfZSA9IGxldmVsRGF0YS5sYXllckluc3RhbmNlczsgX2QgPCBfZS5sZW5ndGg7IF9kKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbGF5ZXJEYXRhID0gX2VbX2RdO1xuICAgICAgICAgICAgICAgIGlmIChsYXllckRhdGEuX190eXBlID09PSBcIkVudGl0aWVzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2YgPSAwLCBfZyA9IGxheWVyRGF0YS5lbnRpdHlJbnN0YW5jZXM7IF9mIDwgX2cubGVuZ3RoOyBfZisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW50aXR5RGF0YSA9IF9nW19mXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbnRpdHkgPSBuZXcgTWFwRW50aXR5XzEuTWFwRW50aXR5KGxldmVsLCBlbnRpdHlEYXRhLnB4WzBdIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUsIGVudGl0eURhdGEucHhbMV0gLyBsYXllckRhdGEuX19ncmlkU2l6ZSwgZW50aXR5RGF0YS5fX2lkZW50aWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2ggPSAwLCBfaiA9IGVudGl0eURhdGEuZmllbGRJbnN0YW5jZXM7IF9oIDwgX2oubGVuZ3RoOyBfaCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkSW5zdGFuY2UgPSBfaltfaF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmZpZWxkc1tmaWVsZEluc3RhbmNlLl9faWRlbnRpZmllcl0gPSBmaWVsZEluc3RhbmNlLl9fdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbC5lbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXllciA9IG5ldyBNYXBMYXllcl8xLk1hcExheWVyKGxldmVsLCBsYXllckRhdGEuX19pZGVudGlmaWVyLCBsYXllckRhdGEuX19jV2lkLCBsYXllckRhdGEuX19jSGVpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjYW5saW5lID0gbGV2ZWwud29ybGQudGlsZXNldFNjYW5saW5lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGlsZVNpemUgPSBsZXZlbC53b3JsZC50aWxlc2V0U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2sgPSAwLCBfbCA9IGxheWVyRGF0YS5ncmlkVGlsZXM7IF9rIDwgX2wubGVuZ3RoOyBfaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGlsZSA9IF9sW19rXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gTWF0aC5mbG9vcih0aWxlLnB4WzBdIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKHRpbGUucHhbMV0gLyBsYXllckRhdGEuX19ncmlkU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zSW5kZXggPSB4ICsgKHkgKiBsYXllci53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHggPSBNYXRoLmZsb29yKHRpbGUuc3JjWzBdIC8gdGlsZVNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5ID0gTWF0aC5mbG9vcih0aWxlLnNyY1sxXSAvIHRpbGVTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aWxlSW5kZXggPSAodHkgKiBzY2FubGluZSkgKyB0eDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLnRpbGVzW3Bvc0luZGV4XSA9IHRpbGVJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwubGF5ZXJzLnNwbGljZSgwLCAwLCBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsLmxheWVyQnlOYW1lW2xheWVyLm5hbWVdID0gbGF5ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxldmVsLmxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV2ZWwud2lkdGggPSBsZXZlbC5sYXllcnNbMF0ud2lkdGg7XG4gICAgICAgICAgICAgICAgbGV2ZWwuaGVpZ2h0ID0gbGV2ZWwubGF5ZXJzWzBdLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldmVsLndpZHRoID0gbGV2ZWxEYXRhLnB4V2lkIC8gdGhpcy5ncmlkU2l6ZTtcbiAgICAgICAgICAgICAgICBsZXZlbC5oZWlnaHQgPSBsZXZlbERhdGEucHhIZWkgLyB0aGlzLmdyaWRTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sZXZlbHNbbGV2ZWwuaWRdID0gbGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBMRFRLV29ybGQ7XG59KE1hcFdvcmxkXzEuTWFwV29ybGQpKTtcbmV4cG9ydHMuTERUS1dvcmxkID0gTERUS1dvcmxkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hcEVudGl0eSA9IHZvaWQgMDtcbnZhciBNYXBFbnRpdHkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwRW50aXR5KGxldmVsLCB4LCB5LCB0eXBlKSB7XG4gICAgICAgIHRoaXMuZmllbGRzID0ge307XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIE1hcEVudGl0eTtcbn0oKSk7XG5leHBvcnRzLk1hcEVudGl0eSA9IE1hcEVudGl0eTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYXBMYXllciA9IHZvaWQgMDtcbnZhciBNYXBMYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBMYXllcihsZXZlbCwgbmFtZSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMudGlsZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy50aWxlcy5wdXNoKDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hcExheWVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICBpZiAoKHggPCAwKSB8fCAoeSA8IDApIHx8ICh4ID49IHRoaXMud2lkdGgpIHx8ICh5ID49IHRoaXMuaGVpZ2h0KSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvc0luZGV4ID0geCArICh5ICogdGhpcy53aWR0aCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVzW3Bvc0luZGV4XTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBMYXllcjtcbn0oKSk7XG5leHBvcnRzLk1hcExheWVyID0gTWFwTGF5ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFwTGV2ZWwgPSB2b2lkIDA7XG52YXIgTWFwTGV2ZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwTGV2ZWwod29ybGQsIGlkKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgICAgIHRoaXMubGF5ZXJCeU5hbWUgPSB7fTtcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IFtdO1xuICAgICAgICB0aGlzLmZpZWxkcyA9IHt9O1xuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG4gICAgTWFwTGV2ZWwucHJvdG90eXBlLmdldEZpcnN0RW50aXR5T2ZUeXBlID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuZW50aXRpZXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gX2FbX2ldO1xuICAgICAgICAgICAgaWYgKGVudGl0eS50eXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBNYXBMZXZlbDtcbn0oKSk7XG5leHBvcnRzLk1hcExldmVsID0gTWFwTGV2ZWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFwV29ybGQgPSB2b2lkIDA7XG52YXIgTWFwV29ybGQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwV29ybGQoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxzID0ge307XG4gICAgICAgIHRoaXMuZ3JpZFNpemUgPSAwO1xuICAgICAgICB0aGlzLnRpbGVzZXRTY2FubGluZSA9IDA7XG4gICAgICAgIHRoaXMudGlsZXNldFNpemUgPSAwO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gTWFwV29ybGQ7XG59KCkpO1xuZXhwb3J0cy5NYXBXb3JsZCA9IE1hcFdvcmxkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYXBFbnRpdHkgPSBleHBvcnRzLk1hcExheWVyID0gZXhwb3J0cy5NYXBMZXZlbCA9IGV4cG9ydHMuTWFwV29ybGQgPSBleHBvcnRzLkxEVEtXb3JsZCA9IGV4cG9ydHMuU3RlcCA9IGV4cG9ydHMuUGF0aCA9IGV4cG9ydHMuQVN0YXJQYXRoRmluZGVyID0gZXhwb3J0cy5LZXlzID0gZXhwb3J0cy5CTFVFID0gZXhwb3J0cy5SRUQgPSBleHBvcnRzLkdSRUVOID0gZXhwb3J0cy5CTEFDSyA9IGV4cG9ydHMuV0hJVEUgPSBleHBvcnRzLnNldFNvdW5kT24gPSBleHBvcnRzLnNldE11c2ljT24gPSBleHBvcnRzLmlzU291bmRPbiA9IGV4cG9ydHMuaXNNdXNpY09uID0gZXhwb3J0cy5zdGFydEdhbWUgPSB2b2lkIDA7XG52YXIgR3V0ZV8xID0gcmVxdWlyZShcIi4vR3V0ZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0YXJ0R2FtZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLnN0YXJ0R2FtZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzTXVzaWNPblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLmlzTXVzaWNPbjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzU291bmRPblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLmlzU291bmRPbjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNldE11c2ljT25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEd1dGVfMS5zZXRNdXNpY09uOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2V0U291bmRPblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLnNldFNvdW5kT247IH0gfSk7XG52YXIgR3JhcGhpY3NfMSA9IHJlcXVpcmUoXCIuL0dyYXBoaWNzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiV0hJVEVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdyYXBoaWNzXzEuV0hJVEU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJCTEFDS1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3JhcGhpY3NfMS5CTEFDSzsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdSRUVOXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHcmFwaGljc18xLkdSRUVOOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUkVEXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHcmFwaGljc18xLlJFRDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJMVUVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdyYXBoaWNzXzEuQkxVRTsgfSB9KTtcbnZhciBLZXlzXzEgPSByZXF1aXJlKFwiLi9LZXlzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiS2V5c1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gS2V5c18xLktleXM7IH0gfSk7XG52YXIgQVN0YXJQYXRoRmluZGVyXzEgPSByZXF1aXJlKFwiLi9wYXRoL0FTdGFyUGF0aEZpbmRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFTdGFyUGF0aEZpbmRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQVN0YXJQYXRoRmluZGVyXzEuQVN0YXJQYXRoRmluZGVyOyB9IH0pO1xudmFyIFBhdGhfMSA9IHJlcXVpcmUoXCIuL3BhdGgvUGF0aFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlBhdGhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFBhdGhfMS5QYXRoOyB9IH0pO1xudmFyIFN0ZXBfMSA9IHJlcXVpcmUoXCIuL3BhdGgvU3RlcFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlN0ZXBcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFN0ZXBfMS5TdGVwOyB9IH0pO1xudmFyIExEVEtXb3JsZF8xID0gcmVxdWlyZShcIi4vdGlsZW1hcHMvTERUS1dvcmxkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTERUS1dvcmxkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBMRFRLV29ybGRfMS5MRFRLV29ybGQ7IH0gfSk7XG52YXIgTWFwV29ybGRfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL01hcFdvcmxkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFwV29ybGRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcFdvcmxkXzEuTWFwV29ybGQ7IH0gfSk7XG52YXIgTWFwTGV2ZWxfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL01hcExldmVsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFwTGV2ZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcExldmVsXzEuTWFwTGV2ZWw7IH0gfSk7XG52YXIgTWFwTGF5ZXJfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL01hcExheWVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFwTGF5ZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcExheWVyXzEuTWFwTGF5ZXI7IH0gfSk7XG52YXIgTWFwRW50aXR5XzEgPSByZXF1aXJlKFwiLi90aWxlbWFwcy9NYXBFbnRpdHlcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNYXBFbnRpdHlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcEVudGl0eV8xLk1hcEVudGl0eTsgfSB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=