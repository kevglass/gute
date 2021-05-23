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
exports.startGame = void 0;
var _1 = __webpack_require__(/*! . */ "./src/index.ts");
var BitmapImpl_1 = __webpack_require__(/*! ./impl/BitmapImpl */ "./src/impl/BitmapImpl.ts");
var FontImpl_1 = __webpack_require__(/*! ./impl/FontImpl */ "./src/impl/FontImpl.ts");
var GraphicsImpl_1 = __webpack_require__(/*! ./impl/GraphicsImpl */ "./src/impl/GraphicsImpl.ts");
var SoundImpl_1 = __webpack_require__(/*! ./impl/SoundImpl */ "./src/impl/SoundImpl.ts");
var TilesetImpl_1 = __webpack_require__(/*! ./impl/TilesetImpl */ "./src/impl/TilesetImpl.ts");
var GAME_LOOP;
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
            event.preventDefault();
            event.stopPropagation();
        });
        window.addEventListener("keyup", function (event) {
            _this.keyUpHandler(event.key);
            event.preventDefault();
            event.stopPropagation();
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
        var world = new _1.LDTKWorld();
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
    GraphicsImpl.prototype.fillRect = function (x, y, width, height, col) {
        this.ctx.fillStyle = col;
        this.ctx.fillRect(x, y, width, height);
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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoundImpl = void 0;
var AudioContext;
if (typeof window !== "undefined") {
    AudioContext = window.AudioContext || window.webkitAudioContext;
}
var AUDIO_CONTEXT;
function handleVisibilityChange() {
    if (SoundImpl.CURRENT_MUSIC) {
        if (document.hidden) {
            SoundImpl.CURRENT_MUSIC.stop();
        }
        else {
            SoundImpl.CURRENT_MUSIC.play(SoundImpl.CURRENT_MUSIC.volume);
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
            _this.transformed = null;
            _this.loaded = true;
        };
        this.image.src = url;
    }
    TilesetImpl.prototype.getTilesAcross = function () {
        return this.scanline;
    };
    TilesetImpl.prototype.scaled = function (scale) {
        var srcCanvas = document.createElement("canvas");
        var canvas = document.createElement("canvas");
        var src = srcCanvas.getContext("2d");
        var ctx = canvas.getContext("2d");
        if (src === null) {
            return;
        }
        if (ctx === null) {
            return;
        }
        if (this.image) {
            srcCanvas.width = this.image.width;
            srcCanvas.height = this.image.height;
            canvas.width = this.image.width * scale;
            canvas.height = this.image.height * scale;
            src.drawImage(this.image, 0, 0);
            var imageData = src.getImageData(0, 0, this.image.width, this.image.height);
            var scaled = ctx.getImageData(0, 0, canvas.width, canvas.height);
            for (var row = 0; row < imageData.height; row++) {
                for (var col = 0; col < imageData.width; col++) {
                    var sourcePixel = [
                        imageData.data[(row * imageData.width + col) * 4 + 0],
                        imageData.data[(row * imageData.width + col) * 4 + 1],
                        imageData.data[(row * imageData.width + col) * 4 + 2],
                        imageData.data[(row * imageData.width + col) * 4 + 3]
                    ];
                    for (var y = 0; y < scale; y++) {
                        var destRow = row * scale + y;
                        for (var x = 0; x < scale; x++) {
                            var destCol = col * scale + x;
                            for (var i = 0; i < 4; i++) {
                                scaled.data[(destRow * scaled.width + destCol) * 4 + i] =
                                    sourcePixel[i];
                            }
                        }
                    }
                }
            }
            ctx.putImageData(scaled, 0, 0);
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
    return TilesetImpl;
}());
exports.TilesetImpl = TilesetImpl;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LDTKWorld = exports.Step = exports.Path = exports.AStarPathFinder = exports.Keys = exports.BLUE = exports.RED = exports.GREEN = exports.BLACK = exports.WHITE = exports.startGame = void 0;
var Gute_1 = __webpack_require__(/*! ./Gute */ "./src/Gute.ts");
Object.defineProperty(exports, "startGame", ({ enumerable: true, get: function () { return Gute_1.startGame; } }));
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
var LDTKWorld_1 = __webpack_require__(/*! ./ldtk/LDTKWorld */ "./src/ldtk/LDTKWorld.ts");
Object.defineProperty(exports, "LDTKWorld", ({ enumerable: true, get: function () { return LDTKWorld_1.LDTKWorld; } }));


/***/ }),

/***/ "./src/ldtk/LDTKEntity.ts":
/*!********************************!*\
  !*** ./src/ldtk/LDTKEntity.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LDTKEntity = void 0;
var LDTKEntity = /** @class */ (function () {
    function LDTKEntity(level, layerData, data) {
        this.fields = {};
        this.level = level;
        this.type = data.__identifier;
        this.x = data.px[0] / layerData.__gridSize;
        this.y = data.px[1] / layerData.__gridSize;
        for (var _i = 0, _a = data.fieldInstances; _i < _a.length; _i++) {
            var fieldInstance = _a[_i];
            this.fields[fieldInstance.__identifier] = fieldInstance.__value;
        }
    }
    return LDTKEntity;
}());
exports.LDTKEntity = LDTKEntity;


/***/ }),

/***/ "./src/ldtk/LDTKLayer.ts":
/*!*******************************!*\
  !*** ./src/ldtk/LDTKLayer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LDTKLayer = void 0;
var LDTKLayer = /** @class */ (function () {
    function LDTKLayer(level, data) {
        this.name = data.__identifier;
        this.level = level;
        this.width = data.__cWid;
        this.height = data.__cHei;
        var scanline = level.world.tilesetScanline;
        var tileSize = level.world.tilesetSize;
        this.tiles = [];
        for (var i = 0; i < this.width * this.height; i++) {
            this.tiles.push(0);
        }
        for (var _i = 0, _a = data.gridTiles; _i < _a.length; _i++) {
            var tile = _a[_i];
            var x = Math.floor(tile.px[0] / data.__gridSize);
            var y = Math.floor(tile.px[1] / data.__gridSize);
            var posIndex = x + (y * this.width);
            var tx = Math.floor(tile.src[0] / tileSize);
            var ty = Math.floor(tile.src[1] / tileSize);
            var tileIndex = (ty * scanline) + tx;
            this.tiles[posIndex] = tileIndex + 1;
        }
    }
    LDTKLayer.prototype.get = function (x, y) {
        if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)) {
            return 0;
        }
        var posIndex = x + (y * this.width);
        return this.tiles[posIndex];
    };
    return LDTKLayer;
}());
exports.LDTKLayer = LDTKLayer;


/***/ }),

/***/ "./src/ldtk/LDTKLevel.ts":
/*!*******************************!*\
  !*** ./src/ldtk/LDTKLevel.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LDTKLevel = void 0;
var LDTKEntity_1 = __webpack_require__(/*! ./LDTKEntity */ "./src/ldtk/LDTKEntity.ts");
var LDTKLayer_1 = __webpack_require__(/*! ./LDTKLayer */ "./src/ldtk/LDTKLayer.ts");
var LDTKLevel = /** @class */ (function () {
    function LDTKLevel(world, data) {
        this.layers = [];
        this.layerByName = {};
        this.entities = [];
        this.world = world;
        this.id = data.identifier;
        for (var _i = 0, _a = data.layerInstances; _i < _a.length; _i++) {
            var layerData = _a[_i];
            if (layerData.__type === "Entities") {
                for (var _b = 0, _c = layerData.entityInstances; _b < _c.length; _b++) {
                    var entityData = _c[_b];
                    this.entities.push(new LDTKEntity_1.LDTKEntity(this, layerData, entityData));
                }
            }
            else {
                var layer = new LDTKLayer_1.LDTKLayer(this, layerData);
                this.layers.splice(0, 0, layer);
                this.layerByName[layer.name] = layer;
            }
        }
        if (this.layers.length > 0) {
            this.width = this.layers[0].width;
            this.height = this.layers[0].height;
        }
        else {
            this.width = data.pxWid / world.gridSize;
            this.height = data.pxHei / world.gridSize;
        }
    }
    LDTKLevel.prototype.getFirstEntityOfType = function (type) {
        for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
            var entity = _a[_i];
            if (entity.type === type) {
                return entity;
            }
        }
        return null;
    };
    return LDTKLevel;
}());
exports.LDTKLevel = LDTKLevel;


/***/ }),

/***/ "./src/ldtk/LDTKWorld.ts":
/*!*******************************!*\
  !*** ./src/ldtk/LDTKWorld.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LDTKWorld = void 0;
var LDTKLevel_1 = __webpack_require__(/*! ./LDTKLevel */ "./src/ldtk/LDTKLevel.ts");
var LDTKWorld = /** @class */ (function () {
    function LDTKWorld() {
        this.levels = {};
        this.gridSize = 0;
        this.tilesetScanline = 0;
        this.tilesetSize = 0;
        this.loaded = false;
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
            var level = new LDTKLevel_1.LDTKLevel(this, levelData);
            this.levels[level.id] = level;
        }
        this.loaded = true;
        return this;
    };
    return LDTKWorld;
}());
exports.LDTKWorld = LDTKWorld;


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0dyYXBoaWNzLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvR3V0ZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0tleXMudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL0JpdG1hcEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL0ZvbnRJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9HcmFwaGljc0ltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL1NvdW5kSW1wbC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL2ltcGwvVGlsZXNldEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL2xkdGsvTERUS0VudGl0eS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL2xkdGsvTERUS0xheWVyLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvbGR0ay9MRFRLTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9sZHRrL0xEVEtXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvQVN0YXJQYXRoRmluZGVyLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvcGF0aC9NYXBOb2RlLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvcGF0aC9QYXRoLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvcGF0aC9TdGVwLnRzIiwid2VicGFjazovL2d1dGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3V0ZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxZQUFZOzs7Ozs7Ozs7OztBQ3JCQztBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELFlBQVk7Ozs7Ozs7VUNWWjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VDdEJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3V0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndXRlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJMVUUgPSBleHBvcnRzLkdSRUVOID0gZXhwb3J0cy5SRUQgPSBleHBvcnRzLkJMQUNLID0gZXhwb3J0cy5XSElURSA9IHZvaWQgMDtcbmV4cG9ydHMuV0hJVEUgPSBcIndoaXRlXCI7XG5leHBvcnRzLkJMQUNLID0gXCJibGFja1wiO1xuZXhwb3J0cy5SRUQgPSBcInJlZFwiO1xuZXhwb3J0cy5HUkVFTiA9IFwiZ3JlZW5cIjtcbmV4cG9ydHMuQkxVRSA9IFwiYmx1ZVwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXJ0R2FtZSA9IHZvaWQgMDtcbnZhciBfMSA9IHJlcXVpcmUoXCIuXCIpO1xudmFyIEJpdG1hcEltcGxfMSA9IHJlcXVpcmUoXCIuL2ltcGwvQml0bWFwSW1wbFwiKTtcbnZhciBGb250SW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9Gb250SW1wbFwiKTtcbnZhciBHcmFwaGljc0ltcGxfMSA9IHJlcXVpcmUoXCIuL2ltcGwvR3JhcGhpY3NJbXBsXCIpO1xudmFyIFNvdW5kSW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9Tb3VuZEltcGxcIik7XG52YXIgVGlsZXNldEltcGxfMSA9IHJlcXVpcmUoXCIuL2ltcGwvVGlsZXNldEltcGxcIik7XG52YXIgR0FNRV9MT09QO1xuZnVuY3Rpb24gc3RhcnRHYW1lKGdhbWUpIHtcbiAgICBHQU1FX0xPT1AgPSBuZXcgR2FtZUxvb3AoKS5zdGFydChnYW1lKTtcbn1cbmV4cG9ydHMuc3RhcnRHYW1lID0gc3RhcnRHYW1lO1xudmFyIEdhbWVMb29wID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdhbWVMb29wKCkge1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IFtdO1xuICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IDA7XG4gICAgICAgIHRoaXMuaW5pdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIEdhbWVMb29wLnByb3RvdHlwZS5nZXRHcmFwaGljcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhpY3M7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuYWxsUmVzb3VyY2VzTG9hZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5yZXNvdXJjZXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UgPSBfYVtfaV07XG4gICAgICAgICAgICBpZiAoIXJlc291cmNlLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5pbml0UmVzb3VyY2VzT25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuYWxsUmVzb3VyY2VzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5yZXNvdXJjZXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc291cmNlID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHJlc291cmNlLmluaXRPbkZpcnN0Q2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLm1vdXNlRG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSAwOyB9XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5ncmFwaGljcy5jYW52YXM7XG4gICAgICAgIGNhbnZhcy5mb2N1cygpO1xuICAgICAgICB2YXIgd2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgICB4ID0gTWF0aC5mbG9vcigoeCAvIHdpZHRoKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKCh5IC8gaGVpZ2h0KSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdhbWUub25Nb3VzZURvd24odGhpcywgeCwgeSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubW91c2VVcEhhbmRsZXIgPSBmdW5jdGlvbiAoeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSAwOyB9XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5ncmFwaGljcy5jYW52YXM7XG4gICAgICAgIHZhciB3aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKCh4IC8gd2lkdGgpICogY2FudmFzLndpZHRoKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoKHkgLyBoZWlnaHQpICogY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZ2FtZS5vbk1vdXNlVXAodGhpcywgeCwgeSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUua2V5RG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuICAgICAgICB0aGlzLmdhbWUub25LZXlEb3duKHRoaXMsIGtleSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUua2V5VXBIYW5kbGVyID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmdhbWUub25LZXlVcCh0aGlzLCBrZXkpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGdhbWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljc0ltcGxfMS5HcmFwaGljc0ltcGwoKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tb3VzZURvd25IYW5kbGVyKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubW91c2VVcEhhbmRsZXIoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBfdGhpcy5rZXlEb3duSGFuZGxlcihldmVudC5rZXkpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIF90aGlzLmtleVVwSGFuZGxlcihldmVudC5rZXkpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ2FtZS5pbml0KHRoaXMpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubG9vcCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZGVsdGEgPSAwO1xuICAgICAgICBpZiAodGhpcy5sYXN0RnJhbWUgIT09IDApIHtcbiAgICAgICAgICAgIGRlbHRhID0gbm93IC0gdGhpcy5sYXN0RnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSBub3c7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYXBwbHlGb250KCk7XG4gICAgICAgIHRoaXMuZ2FtZS51cGRhdGUodGhpcywgZGVsdGEpO1xuICAgICAgICB0aGlzLmdhbWUucmVuZGVyKHRoaXMsIHRoaXMuZ3JhcGhpY3MpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubG9vcCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkTXVzaWMgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBzb3VuZCA9IG5ldyBTb3VuZEltcGxfMS5Tb3VuZEltcGwodXJsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaChzb3VuZCk7XG4gICAgICAgIHJldHVybiBzb3VuZDtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkU291bmQgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBzb3VuZCA9IG5ldyBTb3VuZEltcGxfMS5Tb3VuZEltcGwodXJsLCBmYWxzZSk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2goc291bmQpO1xuICAgICAgICByZXR1cm4gc291bmQ7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZEJpdG1hcCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIGJpdG1hcCA9IG5ldyBCaXRtYXBJbXBsXzEuQml0bWFwSW1wbCh1cmwpO1xuICAgICAgICB0aGlzLnJlc291cmNlcy5wdXNoKGJpdG1hcCk7XG4gICAgICAgIHJldHVybiBiaXRtYXA7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZFNjYWxlZFRpbGVzZXQgPSBmdW5jdGlvbiAodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIHNjYWxlKSB7XG4gICAgICAgIHZhciB0aWxlc2V0ID0gbmV3IFRpbGVzZXRJbXBsXzEuVGlsZXNldEltcGwodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIHNjYWxlKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaCh0aWxlc2V0KTtcbiAgICAgICAgcmV0dXJuIHRpbGVzZXQ7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZFRpbGVzZXQgPSBmdW5jdGlvbiAodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpIHtcbiAgICAgICAgdmFyIHRpbGVzZXQgPSBuZXcgVGlsZXNldEltcGxfMS5UaWxlc2V0SW1wbCh1cmwsIHRpbGVXaWR0aCwgdGlsZUhlaWdodCwgMSk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2godGlsZXNldCk7XG4gICAgICAgIHJldHVybiB0aWxlc2V0O1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmxvYWRGb250ID0gZnVuY3Rpb24gKHVybCwgbmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IEZvbnRJbXBsXzEuRm9udEltcGwodXJsLCBuYW1lKTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkTERUSyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIHdvcmxkID0gbmV3IF8xLkxEVEtXb3JsZCgpO1xuICAgICAgICB0aGlzLnJlc291cmNlcy5wdXNoKHdvcmxkKTtcbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXEub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICByZXEub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAocmVxLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgICAgIHdvcmxkLmxvYWQoSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlcS5zZW5kKG51bGwpO1xuICAgICAgICByZXR1cm4gd29ybGQ7XG4gICAgfTtcbiAgICByZXR1cm4gR2FtZUxvb3A7XG59KCkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLktleXMgPSB2b2lkIDA7XG52YXIgS2V5cyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLZXlzKCkge1xuICAgIH1cbiAgICBLZXlzLkVTQ0FQRV9LRVkgPSBcIkVzY2FwZVwiO1xuICAgIEtleXMuRU5URVJfS0VZID0gXCJFbnRlclwiO1xuICAgIEtleXMuTEVGVF9LRVkgPSBcIkFycm93TGVmdFwiO1xuICAgIEtleXMuUklHSFRfS0VZID0gXCJBcnJvd1JpZ2h0XCI7XG4gICAgS2V5cy5VUF9LRVkgPSBcIkFycm93VXBcIjtcbiAgICBLZXlzLkRPV05fS0VZID0gXCJBcnJvd0Rvd25cIjtcbiAgICBLZXlzLlNQQUNFX0tFWSA9IFwiIFwiO1xuICAgIEtleXMuU19LRVkgPSBcInNcIjtcbiAgICBLZXlzLk1fS0VZID0gXCJtXCI7XG4gICAgS2V5cy5BX0tFWSA9IFwiYVwiO1xuICAgIEtleXMuV19LRVkgPSBcIndcIjtcbiAgICBLZXlzLkRfS0VZID0gXCJkXCI7XG4gICAgS2V5cy5DT05UUk9MX0tFWSA9IFwiQ29udHJvbFwiO1xuICAgIEtleXMuTUVUQV9LRVkgPSBcIk1ldGFcIjtcbiAgICBLZXlzLkFMVF9LRVkgPSBcIkFsdFwiO1xuICAgIEtleXMuVEFCX0tFWSA9IFwiVGFiXCI7XG4gICAgcmV0dXJuIEtleXM7XG59KCkpO1xuZXhwb3J0cy5LZXlzID0gS2V5cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5CaXRtYXBJbXBsID0gdm9pZCAwO1xudmFyIEJpdG1hcEltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQml0bWFwSW1wbCh1cmwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLndpZHRoID0gX3RoaXMuaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICBfdGhpcy5oZWlnaHQgPSBfdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICBfdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHVybDtcbiAgICB9XG4gICAgQml0bWFwSW1wbC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgsIHgsIHkpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB4LCB5KTtcbiAgICB9O1xuICAgIEJpdG1hcEltcGwucHJvdG90eXBlLmRyYXdTY2FsZWQgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBCaXRtYXBJbXBsLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgcmV0dXJuIEJpdG1hcEltcGw7XG59KCkpO1xuZXhwb3J0cy5CaXRtYXBJbXBsID0gQml0bWFwSW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Gb250SW1wbCA9IHZvaWQgMDtcbnZhciBGb250SW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb250SW1wbCh1cmwsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBcIkBmb250LWZhY2UgeyBmb250LWZhbWlseTogXCIgKyBuYW1lICsgXCI7IHNyYzogdXJsKCdcIiArIHVybCArIFwiJyk7IH0gYm9keSB7IGZvbnQtZmFtaWx5OiBcIiArIG5hbWUgKyBcIjsgfVwiO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gICAgRm9udEltcGwucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKGN0eCwgc2l6ZSkge1xuICAgICAgICBjdHguZm9udCA9IHNpemUgKyBcInB4IFwiICsgdGhpcy5uYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIEZvbnRJbXBsO1xufSgpKTtcbmV4cG9ydHMuRm9udEltcGwgPSBGb250SW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HcmFwaGljc0ltcGwgPSB2b2lkIDA7XG52YXIgRm9udEltcGxfMSA9IHJlcXVpcmUoXCIuL0ZvbnRJbXBsXCIpO1xudmFyIGlzRmlyZWZveCA9IHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgQ29weUJpdG1hcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb3B5Qml0bWFwKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgfVxuICAgIENvcHlCaXRtYXAucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY3R4LCB4LCB5KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIHgsIHkpO1xuICAgIH07XG4gICAgQ29weUJpdG1hcC5wcm90b3R5cGUuZHJhd1NjYWxlZCA9IGZ1bmN0aW9uIChjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhbnZhcywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBDb3B5Qml0bWFwLnByb3RvdHlwZS5nZXREcmF3YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICAgIH07XG4gICAgQ29weUJpdG1hcC5wcm90b3R5cGUuaW5pdE9uRmlyc3RDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuICAgIHJldHVybiBDb3B5Qml0bWFwO1xufSgpKTtcbnZhciBHcmFwaGljc0ltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR3JhcGhpY3NJbXBsKCkge1xuICAgICAgICB0aGlzLmZvbnRTaXplID0gMjA7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiLCB7IGFscGhhOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5jdHgud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4Lm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuZm9udFNtb290aCA9IFwibmV2ZXJcIjtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2Via2l0Rm9udFNtb290aGluZyA9IFwibm9uZVwiO1xuICAgICAgICBpZiAoaXNGaXJlZm94KSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IFwiY3Jpc3AtZWRnZXNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gXCJwaXhlbGF0ZWRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvbnQgPSBuZXcgRm9udEltcGxfMS5Gb250SW1wbChcImZvbnQudHRmXCIsIFwiR3V0ZURlZmF1bHRcIik7XG4gICAgICAgIGlmICh0aGlzLmZvbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlGb250KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5maXRTY3JlZW4gPSBmdW5jdGlvbiAocGl4ZWxTY2FsZSkge1xuICAgICAgICB2YXIgcmVhbFdpZHRoID0gTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aCAvIHBpeGVsU2NhbGUpICogcGl4ZWxTY2FsZTtcbiAgICAgICAgdmFyIHJlYWxIZWlnaHQgPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lckhlaWdodCAvIHBpeGVsU2NhbGUpICogcGl4ZWxTY2FsZTtcbiAgICAgICAgdmFyIHZpcnR1YWxXaWR0aCA9IHJlYWxXaWR0aCAvIHBpeGVsU2NhbGU7XG4gICAgICAgIHZhciB2aXJ0dWFsSGVpZ2h0ID0gcmVhbEhlaWdodCAvIHBpeGVsU2NhbGU7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB2aXJ0dWFsV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHZpcnR1YWxIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gcmVhbFdpZHRoICsgXCJweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSByZWFsSGVpZ2h0ICsgXCJweFwiO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuICAgICAgICAoX2EgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb3B5Qml0bWFwKGNhbnZhcyk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHgsIHkpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5zY2FsZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHgsIHkpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5hcHBseUZvbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm9udC5hcHBseSh0aGlzLmN0eCwgdGhpcy5mb250U2l6ZSk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLnNldEZvbnQgPSBmdW5jdGlvbiAoZm9udCkge1xuICAgICAgICB0aGlzLmZvbnQgPSBmb250O1xuICAgICAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5zZXRGb250U2l6ZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICAgIHRoaXMuZm9udFNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5nZXRTdHJpbmdXaWR0aCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd1N0cmluZyA9IGZ1bmN0aW9uICh4LCB5LCB0ZXh0LCBjb2wpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZmlsbFJlY3QgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdCaXRtYXAgPSBmdW5jdGlvbiAoeCwgeSwgYml0bWFwKSB7XG4gICAgICAgIGJpdG1hcC5kcmF3KHRoaXMuY3R4LCB4LCB5KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd1NjYWxlZEJpdG1hcCA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBiaXRtYXApIHtcbiAgICAgICAgYml0bWFwLmRyYXdTY2FsZWQodGhpcy5jdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG4gICAgcmV0dXJuIEdyYXBoaWNzSW1wbDtcbn0oKSk7XG5leHBvcnRzLkdyYXBoaWNzSW1wbCA9IEdyYXBoaWNzSW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Tb3VuZEltcGwgPSB2b2lkIDA7XG52YXIgQXVkaW9Db250ZXh0O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG59XG52YXIgQVVESU9fQ09OVEVYVDtcbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnBsYXkoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMudm9sdW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKTtcbn1cbnZhciBTb3VuZEltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU291bmRJbXBsKHVybCwgbXVzaWMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52b2x1bWUgPSAxO1xuICAgICAgICB0aGlzLm11c2ljID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLm11c2ljID0gbXVzaWM7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgICAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGFycmF5QnVmZmVyID0gcmVxLnJlc3BvbnNlO1xuICAgICAgICAgICAgaWYgKGFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGF0YSA9IGFycmF5QnVmZmVyO1xuICAgICAgICAgICAgICAgIF90aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJ5TG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXEuc2VuZChudWxsKTtcbiAgICB9XG4gICAgU291bmRJbXBsLnByb3RvdHlwZS50cnlMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoQVVESU9fQ09OVEVYVCAmJiB0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIEFVRElPX0NPTlRFWFQuZGVjb2RlQXVkaW9EYXRhKHRoaXMuZGF0YSwgZnVuY3Rpb24gKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIF90aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgPT09IF90aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGxheShfdGhpcy52b2x1bWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7IGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGxvYWQ6IFwiICsgX3RoaXMudXJsKTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNvdW5kSW1wbC5wcm90b3R5cGUuaW5pdE9uRmlyc3RDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFBVURJT19DT05URVhUKSB7XG4gICAgICAgICAgICBBVURJT19DT05URVhUID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICAgICAgQVVESU9fQ09OVEVYVC5yZXN1bWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyeUxvYWQoKTtcbiAgICB9O1xuICAgIFNvdW5kSW1wbC5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uICh2b2x1bWUpIHtcbiAgICAgICAgdGhpcy52b2x1bWUgPSB2b2x1bWU7XG4gICAgICAgIGlmICghdGhpcy5idWZmZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm11c2ljKSB7XG4gICAgICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgPSB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm11c2ljKSB7XG4gICAgICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb3VyY2UgPSBBVURJT19DT05URVhULmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICB0aGlzLnNvdXJjZS5idWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy5nYWluID0gQVVESU9fQ09OVEVYVC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5nYWluKTtcbiAgICAgICAgdGhpcy5nYWluLmNvbm5lY3QoQVVESU9fQ09OVEVYVC5kZXN0aW5hdGlvbik7XG4gICAgICAgIGlmICh0aGlzLm11c2ljKSB7XG4gICAgICAgICAgICB0aGlzLmdhaW4uZ2Fpbi52YWx1ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvdXJjZS5zdGFydCgwKTtcbiAgICAgICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHZvbHVtZSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSArIDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYWluLmdhaW4udmFsdWUgPSB2b2x1bWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNvdW5kSW1wbC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKDAsIEFVRElPX0NPTlRFWFQuY3VycmVudFRpbWUgKyAzKTtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvdXJjZV8xID0gdGhpcy5zb3VyY2U7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBTb3VyY2VfMS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfSwgNDAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTb3VuZEltcGw7XG59KCkpO1xuZXhwb3J0cy5Tb3VuZEltcGwgPSBTb3VuZEltcGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGlsZXNldEltcGwgPSB2b2lkIDA7XG52YXIgVGlsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaWxlKGNhbnZhcywgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgICBUaWxlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCwgeCwgeSkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9O1xuICAgIFRpbGUucHJvdG90eXBlLmRyYXdTY2FsZWQgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBUaWxlLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgcmV0dXJuIFRpbGU7XG59KCkpO1xudmFyIFRpbGVzZXRJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbGVzZXRJbXBsKHVybCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCBzY2FsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc2NhbGUgPT09IHZvaWQgMCkgeyBzY2FsZSA9IDE7IH1cbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iaXRtYXBzID0gW107XG4gICAgICAgIHRoaXMuc2NhbmxpbmUgPSAwO1xuICAgICAgICB0aGlzLnRpbGVDb3VudCA9IDA7XG4gICAgICAgIHRpbGVXaWR0aCAqPSBzY2FsZTtcbiAgICAgICAgdGlsZUhlaWdodCAqPSBzY2FsZTtcbiAgICAgICAgdGhpcy50aWxlV2lkdGggPSB0aWxlV2lkdGg7XG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IHRpbGVIZWlnaHQ7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zY2FsZWQoc2NhbGUpO1xuICAgICAgICAgICAgaWYgKF90aGlzLnRyYW5zZm9ybWVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2NhbmxpbmUgPSBNYXRoLmZsb29yKF90aGlzLnRyYW5zZm9ybWVkLndpZHRoIC8gdGlsZVdpZHRoKTtcbiAgICAgICAgICAgICAgICB2YXIgZGVwdGggPSBNYXRoLmZsb29yKF90aGlzLnRyYW5zZm9ybWVkLmhlaWdodCAvIHRpbGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIF90aGlzLnRpbGVDb3VudCA9IGRlcHRoICogX3RoaXMuc2NhbmxpbmU7XG4gICAgICAgICAgICAgICAgLy8gY3V0IHRoZSBpbWFnZSBpbnRvIHBpZWNlc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgZGVwdGg7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IF90aGlzLnNjYW5saW5lOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmJpdG1hcHMucHVzaChuZXcgVGlsZShfdGhpcy50cmFuc2Zvcm1lZCwgeCAqIHRpbGVXaWR0aCwgeSAqIHRpbGVIZWlnaHQsIHRpbGVXaWR0aCwgdGlsZUhlaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMudHJhbnNmb3JtZWQgPSBudWxsO1xuICAgICAgICAgICAgX3RoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB1cmw7XG4gICAgfVxuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5nZXRUaWxlc0Fjcm9zcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbmxpbmU7XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuc2NhbGVkID0gZnVuY3Rpb24gKHNjYWxlKSB7XG4gICAgICAgIHZhciBzcmNDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdmFyIHNyYyA9IHNyY0NhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBpZiAoc3JjID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICAgICAgICBzcmNDYW52YXMud2lkdGggPSB0aGlzLmltYWdlLndpZHRoO1xuICAgICAgICAgICAgc3JjQ2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5pbWFnZS53aWR0aCAqIHNjYWxlO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgICBzcmMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIDApO1xuICAgICAgICAgICAgdmFyIGltYWdlRGF0YSA9IHNyYy5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5pbWFnZS53aWR0aCwgdGhpcy5pbWFnZS5oZWlnaHQpO1xuICAgICAgICAgICAgdmFyIHNjYWxlZCA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IGltYWdlRGF0YS5oZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgaW1hZ2VEYXRhLndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlUGl4ZWwgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVsocm93ICogaW1hZ2VEYXRhLndpZHRoICsgY29sKSAqIDQgKyAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhWyhyb3cgKiBpbWFnZURhdGEud2lkdGggKyBjb2wpICogNCArIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbKHJvdyAqIGltYWdlRGF0YS53aWR0aCArIGNvbCkgKiA0ICsgMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVsocm93ICogaW1hZ2VEYXRhLndpZHRoICsgY29sKSAqIDQgKyAzXVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNjYWxlOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZXN0Um93ID0gcm93ICogc2NhbGUgKyB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzY2FsZTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlc3RDb2wgPSBjb2wgKiBzY2FsZSArIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVkLmRhdGFbKGRlc3RSb3cgKiBzY2FsZWQud2lkdGggKyBkZXN0Q29sKSAqIDQgKyBpXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VQaXhlbFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKHNjYWxlZCwgMCwgMCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybWVkID0gY2FudmFzO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuZ2V0VGlsZVdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlV2lkdGg7XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuZ2V0VGlsZUhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZUhlaWdodDtcbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5nZXRUaWxlQ291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVDb3VudDtcbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgVGlsZXNldEltcGwucHJvdG90eXBlLmdldFRpbGUgPSBmdW5jdGlvbiAodGlsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iaXRtYXBzW3RpbGVdO1xuICAgIH07XG4gICAgcmV0dXJuIFRpbGVzZXRJbXBsO1xufSgpKTtcbmV4cG9ydHMuVGlsZXNldEltcGwgPSBUaWxlc2V0SW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5MRFRLV29ybGQgPSBleHBvcnRzLlN0ZXAgPSBleHBvcnRzLlBhdGggPSBleHBvcnRzLkFTdGFyUGF0aEZpbmRlciA9IGV4cG9ydHMuS2V5cyA9IGV4cG9ydHMuQkxVRSA9IGV4cG9ydHMuUkVEID0gZXhwb3J0cy5HUkVFTiA9IGV4cG9ydHMuQkxBQ0sgPSBleHBvcnRzLldISVRFID0gZXhwb3J0cy5zdGFydEdhbWUgPSB2b2lkIDA7XG52YXIgR3V0ZV8xID0gcmVxdWlyZShcIi4vR3V0ZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0YXJ0R2FtZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLnN0YXJ0R2FtZTsgfSB9KTtcbnZhciBHcmFwaGljc18xID0gcmVxdWlyZShcIi4vR3JhcGhpY3NcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJXSElURVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3JhcGhpY3NfMS5XSElURTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJMQUNLXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHcmFwaGljc18xLkJMQUNLOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiR1JFRU5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdyYXBoaWNzXzEuR1JFRU47IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSRURcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdyYXBoaWNzXzEuUkVEOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQkxVRVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3JhcGhpY3NfMS5CTFVFOyB9IH0pO1xudmFyIEtleXNfMSA9IHJlcXVpcmUoXCIuL0tleXNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJLZXlzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBLZXlzXzEuS2V5czsgfSB9KTtcbnZhciBBU3RhclBhdGhGaW5kZXJfMSA9IHJlcXVpcmUoXCIuL3BhdGgvQVN0YXJQYXRoRmluZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQVN0YXJQYXRoRmluZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBBU3RhclBhdGhGaW5kZXJfMS5BU3RhclBhdGhGaW5kZXI7IH0gfSk7XG52YXIgUGF0aF8xID0gcmVxdWlyZShcIi4vcGF0aC9QYXRoXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUGF0aFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUGF0aF8xLlBhdGg7IH0gfSk7XG52YXIgU3RlcF8xID0gcmVxdWlyZShcIi4vcGF0aC9TdGVwXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU3RlcFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU3RlcF8xLlN0ZXA7IH0gfSk7XG52YXIgTERUS1dvcmxkXzEgPSByZXF1aXJlKFwiLi9sZHRrL0xEVEtXb3JsZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkxEVEtXb3JsZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTERUS1dvcmxkXzEuTERUS1dvcmxkOyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxEVEtFbnRpdHkgPSB2b2lkIDA7XG52YXIgTERUS0VudGl0eSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMRFRLRW50aXR5KGxldmVsLCBsYXllckRhdGEsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5maWVsZHMgPSB7fTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLnR5cGUgPSBkYXRhLl9faWRlbnRpZmllcjtcbiAgICAgICAgdGhpcy54ID0gZGF0YS5weFswXSAvIGxheWVyRGF0YS5fX2dyaWRTaXplO1xuICAgICAgICB0aGlzLnkgPSBkYXRhLnB4WzFdIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemU7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBkYXRhLmZpZWxkSW5zdGFuY2VzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGZpZWxkSW5zdGFuY2UgPSBfYVtfaV07XG4gICAgICAgICAgICB0aGlzLmZpZWxkc1tmaWVsZEluc3RhbmNlLl9faWRlbnRpZmllcl0gPSBmaWVsZEluc3RhbmNlLl9fdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIExEVEtFbnRpdHk7XG59KCkpO1xuZXhwb3J0cy5MRFRLRW50aXR5ID0gTERUS0VudGl0eTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5MRFRLTGF5ZXIgPSB2b2lkIDA7XG52YXIgTERUS0xheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExEVEtMYXllcihsZXZlbCwgZGF0YSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLl9faWRlbnRpZmllcjtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLndpZHRoID0gZGF0YS5fX2NXaWQ7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZGF0YS5fX2NIZWk7XG4gICAgICAgIHZhciBzY2FubGluZSA9IGxldmVsLndvcmxkLnRpbGVzZXRTY2FubGluZTtcbiAgICAgICAgdmFyIHRpbGVTaXplID0gbGV2ZWwud29ybGQudGlsZXNldFNpemU7XG4gICAgICAgIHRoaXMudGlsZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy50aWxlcy5wdXNoKDApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBkYXRhLmdyaWRUaWxlczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciB0aWxlID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIHggPSBNYXRoLmZsb29yKHRpbGUucHhbMF0gLyBkYXRhLl9fZ3JpZFNpemUpO1xuICAgICAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKHRpbGUucHhbMV0gLyBkYXRhLl9fZ3JpZFNpemUpO1xuICAgICAgICAgICAgdmFyIHBvc0luZGV4ID0geCArICh5ICogdGhpcy53aWR0aCk7XG4gICAgICAgICAgICB2YXIgdHggPSBNYXRoLmZsb29yKHRpbGUuc3JjWzBdIC8gdGlsZVNpemUpO1xuICAgICAgICAgICAgdmFyIHR5ID0gTWF0aC5mbG9vcih0aWxlLnNyY1sxXSAvIHRpbGVTaXplKTtcbiAgICAgICAgICAgIHZhciB0aWxlSW5kZXggPSAodHkgKiBzY2FubGluZSkgKyB0eDtcbiAgICAgICAgICAgIHRoaXMudGlsZXNbcG9zSW5kZXhdID0gdGlsZUluZGV4ICsgMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBMRFRLTGF5ZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIGlmICgoeCA8IDApIHx8ICh5IDwgMCkgfHwgKHggPj0gdGhpcy53aWR0aCkgfHwgKHkgPj0gdGhpcy5oZWlnaHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9zSW5kZXggPSB4ICsgKHkgKiB0aGlzLndpZHRoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZXNbcG9zSW5kZXhdO1xuICAgIH07XG4gICAgcmV0dXJuIExEVEtMYXllcjtcbn0oKSk7XG5leHBvcnRzLkxEVEtMYXllciA9IExEVEtMYXllcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5MRFRLTGV2ZWwgPSB2b2lkIDA7XG52YXIgTERUS0VudGl0eV8xID0gcmVxdWlyZShcIi4vTERUS0VudGl0eVwiKTtcbnZhciBMRFRLTGF5ZXJfMSA9IHJlcXVpcmUoXCIuL0xEVEtMYXllclwiKTtcbnZhciBMRFRLTGV2ZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTERUS0xldmVsKHdvcmxkLCBkYXRhKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgICAgIHRoaXMubGF5ZXJCeU5hbWUgPSB7fTtcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IFtdO1xuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkZW50aWZpZXI7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBkYXRhLmxheWVySW5zdGFuY2VzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGxheWVyRGF0YSA9IF9hW19pXTtcbiAgICAgICAgICAgIGlmIChsYXllckRhdGEuX190eXBlID09PSBcIkVudGl0aWVzXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IDAsIF9jID0gbGF5ZXJEYXRhLmVudGl0eUluc3RhbmNlczsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudGl0eURhdGEgPSBfY1tfYl07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50aXRpZXMucHVzaChuZXcgTERUS0VudGl0eV8xLkxEVEtFbnRpdHkodGhpcywgbGF5ZXJEYXRhLCBlbnRpdHlEYXRhKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGxheWVyID0gbmV3IExEVEtMYXllcl8xLkxEVEtMYXllcih0aGlzLCBsYXllckRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzLnNwbGljZSgwLCAwLCBsYXllcik7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXllckJ5TmFtZVtsYXllci5uYW1lXSA9IGxheWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5sYXllcnNbMF0ud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubGF5ZXJzWzBdLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBkYXRhLnB4V2lkIC8gd29ybGQuZ3JpZFNpemU7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGRhdGEucHhIZWkgLyB3b3JsZC5ncmlkU2l6ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBMRFRLTGV2ZWwucHJvdG90eXBlLmdldEZpcnN0RW50aXR5T2ZUeXBlID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuZW50aXRpZXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gX2FbX2ldO1xuICAgICAgICAgICAgaWYgKGVudGl0eS50eXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBMRFRLTGV2ZWw7XG59KCkpO1xuZXhwb3J0cy5MRFRLTGV2ZWwgPSBMRFRLTGV2ZWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTERUS1dvcmxkID0gdm9pZCAwO1xudmFyIExEVEtMZXZlbF8xID0gcmVxdWlyZShcIi4vTERUS0xldmVsXCIpO1xudmFyIExEVEtXb3JsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMRFRLV29ybGQoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxzID0ge307XG4gICAgICAgIHRoaXMuZ3JpZFNpemUgPSAwO1xuICAgICAgICB0aGlzLnRpbGVzZXRTY2FubGluZSA9IDA7XG4gICAgICAgIHRoaXMudGlsZXNldFNpemUgPSAwO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBMRFRLV29ybGQucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBMRFRLV29ybGQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICB0aGlzLmdyaWRTaXplID0ganNvbi5kZWZhdWx0R3JpZFNpemU7XG4gICAgICAgIHZhciB0aWxlc2V0ID0ganNvbi5kZWZzLnRpbGVzZXRzWzBdO1xuICAgICAgICB0aGlzLnRpbGVzZXRTY2FubGluZSA9IHRpbGVzZXQucHhXaWQgLyB0aWxlc2V0LnRpbGVHcmlkU2l6ZTtcbiAgICAgICAgdGhpcy50aWxlc2V0U2l6ZSA9IHRpbGVzZXQudGlsZUdyaWRTaXplO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0ganNvbi5sZXZlbHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGV2ZWxEYXRhID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIGxldmVsID0gbmV3IExEVEtMZXZlbF8xLkxEVEtMZXZlbCh0aGlzLCBsZXZlbERhdGEpO1xuICAgICAgICAgICAgdGhpcy5sZXZlbHNbbGV2ZWwuaWRdID0gbGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBMRFRLV29ybGQ7XG59KCkpO1xuZXhwb3J0cy5MRFRLV29ybGQgPSBMRFRLV29ybGQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQVN0YXJQYXRoRmluZGVyID0gdm9pZCAwO1xudmFyIE1hcE5vZGVfMSA9IHJlcXVpcmUoXCIuL01hcE5vZGVcIik7XG52YXIgUGF0aF8xID0gcmVxdWlyZShcIi4vUGF0aFwiKTtcbnZhciBBU3RhclBhdGhGaW5kZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQVN0YXJQYXRoRmluZGVyKG1hcCkge1xuICAgICAgICB0aGlzLm9iamVjdFBvb2wgPSBbXTtcbiAgICAgICAgdGhpcy5vcGVuTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnBhdGhGaW5kQ291bnRlciA9IDE7XG4gICAgICAgIHRoaXMud2lkdGggPSBtYXAuZ2V0TWFwV2lkdGgoKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBtYXAuZ2V0TWFwSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLm9wZW4gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIG8gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIHZhciBjID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDU7IGorKykge1xuICAgICAgICAgICAgICAgIG8ucHVzaCgwKTtcbiAgICAgICAgICAgICAgICBjLnB1c2goMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9wZW4ucHVzaChvKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkLnB1c2goYyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wZW5MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdFBvb2wucHVzaCh0aGlzLm9wZW5MaXN0W2ldKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW5MaXN0ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMucGF0aEZpbmRDb3VudGVyKys7XG4gICAgfTtcbiAgICBBU3RhclBhdGhGaW5kZXIucHJvdG90eXBlLmdlbmVyYXRlUGF0aCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHZhciBjdXJyZW50ID0gbm9kZTtcbiAgICAgICAgdmFyIHBhdGggPSBuZXcgUGF0aF8xLlBhdGgoKTtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcGF0aC5hZGQoY3VycmVudC54LCBjdXJyZW50LnkpO1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5ibG9ja2VkID0gZnVuY3Rpb24gKHN4LCBzeSwgeCwgeSkge1xuICAgICAgICB2YXIgaWdub3JlQWN0b3JzID0gdGhpcy5pZ25vcmVGaW5hbE9jY3VwYXRpb24gJiYgdGhpcy5hdFRhcmdldCh4LCB5KTtcbiAgICAgICAgaWYgKCF0aGlzLm1hcC5sb2NhdGlvbkRpc2NvdmVyZWQoeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1hcC5ibG9ja2VkKHRoaXMubW92ZXIsIG51bGwsIHN4LCBzeSwgeCwgeSwgaWdub3JlQWN0b3JzLCB0aGlzLmF0VGFyZ2V0KHgsIHkpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5hdFRhcmdldCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIGZvciAodmFyIHhzID0gMDsgeHMgPCB0aGlzLm1vdmVyLmdldFRpbGVzV2lkdGgoKTsgeHMrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgeXMgPSAwOyB5cyA8IHRoaXMubW92ZXIuZ2V0VGlsZXNIZWlnaHQoKTsgeXMrKykge1xuICAgICAgICAgICAgICAgIGlmICgoeCArIHhzID09IHRoaXMudHgpICYmICh5ICsgeXMgPT0gdGhpcy50eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuZmluZFBhdGggPSBmdW5jdGlvbiAobW92ZXIsIHR4LCB0eSwgbWF4LCBpZ25vcmVGaW5hbE9jY3VwYXRpb24sIHJ1bkF3YXkpIHtcbiAgICAgICAgdHggPSBNYXRoLmZsb29yKHR4KTtcbiAgICAgICAgdHkgPSBNYXRoLmZsb29yKHR5KTtcbiAgICAgICAgdGhpcy5tYXggPSBtYXg7XG4gICAgICAgIHRoaXMuaWdub3JlRmluYWxPY2N1cGF0aW9uID0gaWdub3JlRmluYWxPY2N1cGF0aW9uO1xuICAgICAgICB0aGlzLm1vdmVyID0gbW92ZXI7XG4gICAgICAgIHRoaXMudHggPSB0eDtcbiAgICAgICAgdGhpcy50eSA9IHR5O1xuICAgICAgICBpZiAodGhpcy5ibG9ja2VkKHR4LCB0eSwgdHgsIHR5KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmFkZExvY2F0aW9uKG51bGwsIE1hdGguZmxvb3IobW92ZXIuZ2V0VGlsZU1hcFgoKSksIE1hdGguZmxvb3IobW92ZXIuZ2V0VGlsZU1hcFkoKSkpO1xuICAgICAgICB3aGlsZSAodGhpcy5vcGVuTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgYmVzdCA9IHRoaXMub3Blbkxpc3RbMF07XG4gICAgICAgICAgICB0aGlzLm9wZW5MaXN0LnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIC8vIGlmIGJlc3QgaXMgdGhlIHRhcmdldCB0aGVuIHdlJ3ZlIGZvdW5kIGl0IVxuICAgICAgICAgICAgaWYgKHRoaXMuYXRUYXJnZXQoYmVzdC54LCBiZXN0LnkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVQYXRoKGJlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGRMb2NhdGlvbihiZXN0LCBiZXN0LnggKyAxLCBiZXN0LnkpO1xuICAgICAgICAgICAgdGhpcy5hZGRMb2NhdGlvbihiZXN0LCBiZXN0LnggLSAxLCBiZXN0LnkpO1xuICAgICAgICAgICAgdGhpcy5hZGRMb2NhdGlvbihiZXN0LCBiZXN0LngsIGJlc3QueSArIDEpO1xuICAgICAgICAgICAgdGhpcy5hZGRMb2NhdGlvbihiZXN0LCBiZXN0LngsIGJlc3QueSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5hZGRMb2NhdGlvbiA9IGZ1bmN0aW9uIChwYXJlbnQsIHgsIHkpIHtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoeCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKHkpO1xuICAgICAgICB2YXIgc3ggPSB4O1xuICAgICAgICB2YXIgc3kgPSB5O1xuICAgICAgICB2YXIgZGlyID0gQVN0YXJQYXRoRmluZGVyLk5PTkU7XG4gICAgICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3ggPSBwYXJlbnQueDtcbiAgICAgICAgICAgIHN5ID0gcGFyZW50Lnk7XG4gICAgICAgICAgICBpZiAoc3kgKyAxID09IHkpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBBU3RhclBhdGhGaW5kZXIuTk9SVEhfVE9fU09VVEg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3kgLSAxID09IHkpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBBU3RhclBhdGhGaW5kZXIuU09VVEhfVE9fTk9SVEg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3ggKyAxID09IHgpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBBU3RhclBhdGhGaW5kZXIuV0VTVF9UT19FQVNUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN4IC0gMSA9PSB4KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLkVBU1RfVE9fV0VTVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubWFwLnZhbGlkTG9jYXRpb24oeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBpdCdzIGluIHRoZSBvcGVuIGxpc3QgaWdub3JlXG4gICAgICAgIGlmICh0aGlzLm9wZW5beCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPT0gdGhpcy5wYXRoRmluZENvdW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jbG9zZWRbeCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPT0gdGhpcy5wYXRoRmluZENvdW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBpdCdzIGJsb2NrZWQgZm9yIGFueSByZWFzb24sIGFkZCBpdCB0byB0aGUgY2xvc2VkXG4gICAgICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudC5kZXB0aCA+IHRoaXMubWF4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRbeCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPSB0aGlzLnBhdGhGaW5kQ291bnRlcjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm1hcC5sb2NhdGlvbkRpc2NvdmVyZWQoeCwgeSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID0gdGhpcy5wYXRoRmluZENvdW50ZXI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmxvY2tlZChzeCwgc3ksIHgsIHkpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZFt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIG90aGVyd2lzZSBpdCdzIGEgcG9zc2libGUgc3RlcCBhZGQgaXQgdG8gdGhlIG9wZW5cbiAgICAgICAgdGhpcy5vcGVuW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID0gdGhpcy5wYXRoRmluZENvdW50ZXI7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5jcmVhdGVNYXBOb2RlKHgsIHksIHBhcmVudCwgdGhpcy5nZXRIZXVyaXN0aWMoeCwgeSkpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3Blbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5vcGVuTGlzdFtpXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmggPiBub2RlLmgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5MaXN0LnNwbGljZShpLCAwLCBub2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgbm8gd2hlcmUgZWxzZSBhZGQgaXQgYXQgdGhlIGVuZFxuICAgICAgICB0aGlzLm9wZW5MaXN0LnB1c2gobm9kZSk7XG4gICAgfTtcbiAgICBBU3RhclBhdGhGaW5kZXIucHJvdG90eXBlLmdldEhldXJpc3RpYyA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIC8vIGRpc3RhbmNlIHNxdWFyZWRcbiAgICAgICAgdmFyIGR4ID0gTWF0aC5hYnModGhpcy50eCAtIHgpO1xuICAgICAgICB2YXIgZHkgPSBNYXRoLmFicyh0aGlzLnR5IC0geSk7XG4gICAgICAgIHJldHVybiAoZHggKiBkeCkgKyAoZHkgKiBkeSk7XG4gICAgfTtcbiAgICAvLyBvYmplY3QgcG9vbCBhY2Nlc3NvciAtIGZyZWUgaXMgZG9uZSBpbiBidWxrXG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5jcmVhdGVNYXBOb2RlID0gZnVuY3Rpb24gKHgsIHksIHBhcmVudCwgaCkge1xuICAgICAgICBpZiAodGhpcy5vYmplY3RQb29sLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgbiA9IG5ldyBNYXBOb2RlXzEuTWFwTm9kZSgpO1xuICAgICAgICAgICAgdGhpcy5vYmplY3RQb29sLnB1c2gobik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm9iamVjdFBvb2xbMF07XG4gICAgICAgIHRoaXMub2JqZWN0UG9vbC5zcGxpY2UoMCwgMSk7XG4gICAgICAgIG5vZGUueCA9IHg7XG4gICAgICAgIG5vZGUueSA9IHk7XG4gICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBub2RlLmggPSBoO1xuICAgICAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUuZGVwdGggPSBwYXJlbnQuZGVwdGggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5kZXB0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICBBU3RhclBhdGhGaW5kZXIuTk9SVEhfVE9fU09VVEggPSAwO1xuICAgIEFTdGFyUGF0aEZpbmRlci5FQVNUX1RPX1dFU1QgPSAxO1xuICAgIEFTdGFyUGF0aEZpbmRlci5TT1VUSF9UT19OT1JUSCA9IDI7XG4gICAgQVN0YXJQYXRoRmluZGVyLldFU1RfVE9fRUFTVCA9IDM7XG4gICAgQVN0YXJQYXRoRmluZGVyLk5PTkUgPSA0O1xuICAgIHJldHVybiBBU3RhclBhdGhGaW5kZXI7XG59KCkpO1xuZXhwb3J0cy5BU3RhclBhdGhGaW5kZXIgPSBBU3RhclBhdGhGaW5kZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFwTm9kZSA9IHZvaWQgMDtcbnZhciBNYXBOb2RlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcE5vZGUoKSB7XG4gICAgfVxuICAgIHJldHVybiBNYXBOb2RlO1xufSgpKTtcbmV4cG9ydHMuTWFwTm9kZSA9IE1hcE5vZGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGF0aCA9IHZvaWQgMDtcbnZhciBTdGVwXzEgPSByZXF1aXJlKFwiLi9TdGVwXCIpO1xudmFyIFBhdGggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGF0aCgpIHtcbiAgICAgICAgdGhpcy5zdGVwcyA9IG5ldyBBcnJheSgpO1xuICAgIH1cbiAgICBQYXRoLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB0aGlzLnN0ZXBzLnNwbGljZSgwLCAwLCBuZXcgU3RlcF8xLlN0ZXAoeCwgeSkpO1xuICAgIH07XG4gICAgUGF0aC5wcm90b3R5cGUuZ2V0TGFzdFN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0ZXBzW3RoaXMuc3RlcHMubGVuZ3RoIC0gMV07XG4gICAgfTtcbiAgICBQYXRoLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnN0ZXBzWzBdO1xuICAgICAgICB0aGlzLnN0ZXBzLnNwbGljZSgwLCAxKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHJldHVybiBQYXRoO1xufSgpKTtcbmV4cG9ydHMuUGF0aCA9IFBhdGg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3RlcCA9IHZvaWQgMDtcbnZhciBTdGVwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0ZXAoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICByZXR1cm4gU3RlcDtcbn0oKSk7XG5leHBvcnRzLlN0ZXAgPSBTdGVwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==