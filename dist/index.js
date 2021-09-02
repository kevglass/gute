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
    GameLoop.prototype.resourcesRemaining = function () {
        return this.resources.filter(function (r) { return !r.loaded; }).length;
    };
    GameLoop.prototype.resourcesTotal = function () {
        return this.resources.length;
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
    GameLoop.prototype.mouseMoveHandler = function (x, y, id) {
        if (id === void 0) { id = 0; }
        this.initResourcesOnFirstClick();
        var canvas = this.graphics.canvas;
        canvas.focus();
        var width = canvas.clientWidth;
        var height = canvas.clientHeight;
        x = Math.floor((x / width) * canvas.width);
        y = Math.floor((y / height) * canvas.height);
        this.game.onMouseMove(this, x, y);
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
        this.graphics.canvas.addEventListener("touchstart", function (event) {
            try {
                if (event.target) {
                    var rect = event.target.getBoundingClientRect();
                    var x = event.targetTouches[0].pageX - rect.left;
                    var y = event.targetTouches[0].pageY - rect.top;
                    _this.mouseDownHandler(x, y);
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
            catch (e) {
                console.log(e);
            }
        });
        this.graphics.canvas.addEventListener("touchmove", function (event) {
            try {
                if (event.target) {
                    var rect = event.target.getBoundingClientRect();
                    var x = event.targetTouches[0].pageX - rect.left;
                    var y = event.targetTouches[0].pageY - rect.top;
                    _this.mouseMoveHandler(x, y);
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
            catch (e) {
                console.log(e);
            }
        });
        this.graphics.canvas.addEventListener("touchend", function (event) {
            try {
                if (event.target) {
                    _this.mouseUpHandler(0, 0);
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
            catch (e) {
                console.log(e);
            }
        });
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
        this.graphics.canvas.addEventListener("mousemove", function (event) {
            try {
                _this.mouseMoveHandler(event.offsetX, event.offsetY);
                event.preventDefault();
                event.stopPropagation();
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
            _this.keyDownHandler(event.code);
        });
        window.addEventListener("keyup", function (event) {
            _this.keyUpHandler(event.code);
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
                    var result = req.responseText.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, function (m, g) { return g ? "" : m; });
                    resolve(JSON.parse(result));
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
var OffscreenImpl = /** @class */ (function () {
    function OffscreenImpl(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }
    OffscreenImpl.prototype.getWidth = function () {
        return this.canvas.width;
    };
    OffscreenImpl.prototype.getHeight = function () {
        return this.canvas.height;
    };
    OffscreenImpl.prototype.setDimension = function (width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    };
    return OffscreenImpl;
}());
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
        this.ctx = this.canvas.getContext("2d");
        this.mainCtx = this.ctx;
        this.ctx.webkitImageSmoothingEnabled = false;
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
    GraphicsImpl.prototype.clip = function (x, y, width, height) {
        var squarePath = new Path2D();
        squarePath.rect(x, y, width, height);
        this.ctx.clip(squarePath);
    };
    GraphicsImpl.prototype.createOffscreen = function () {
        var canvas = document.createElement("canvas");
        canvas.width = this.getWidth();
        canvas.height = this.getHeight();
        var ctx = canvas.getContext("2d");
        if (ctx) {
            ctx.webkitImageSmoothingEnabled = false;
            ctx.imageSmoothingEnabled = false;
            canvas.style.fontSmooth = "never";
            canvas.style.webkitFontSmoothing = "none";
            return new OffscreenImpl(canvas, ctx);
        }
        else {
            throw new Error("Unable to create offscreen canvas");
        }
    };
    GraphicsImpl.prototype.drawToOffscreen = function (screen) {
        if (screen) {
            this.ctx = screen.ctx;
        }
        else {
            this.ctx = this.mainCtx;
        }
    };
    GraphicsImpl.prototype.drawOffscreen = function (screen) {
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.drawImage(screen.canvas, 0, 0);
    };
    GraphicsImpl.prototype.drawScaledOffscreen = function (screen, x, y, width, height) {
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.drawImage(screen.canvas, x, y, width, height);
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
    GraphicsImpl.prototype.drawLine = function (x1, y1, x2, y2, col, width) {
        if (width === void 0) { width = 1; }
        this.ctx.strokeStyle = col;
        this.ctx.lineWidth = width;
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    };
    GraphicsImpl.prototype.drawBitmap = function (x, y, bitmap) {
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = false;
        bitmap.draw(this.ctx, x, y);
    };
    GraphicsImpl.prototype.drawScaledBitmap = function (x, y, width, height, bitmap) {
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = false;
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
    function Tile(canvas, x, y, width, height, scale) {
        this.image = canvas;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.loaded = true;
    }
    Tile.prototype.draw = function (ctx, x, y) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height, x, y, this.width * this.scale, this.height * this.scale);
    };
    Tile.prototype.drawScaled = function (ctx, x, y, width, height) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height, x, y, width, height);
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
        this.onLoaded = function () { };
        this.tileWidth = this.originalTileWidth = tileWidth;
        this.tileHeight = this.originalTileHeight = tileHeight;
        this.scale = scale;
        this.image = new Image();
        this.image.onload = function () {
            _this.scanline = Math.floor(_this.image.width / _this.tileWidth);
            var depth = Math.floor(_this.image.height / _this.tileHeight);
            _this.tileCount = depth * _this.scanline;
            // cut the image into pieces
            for (var y = 0; y < depth; y++) {
                for (var x = 0; x < _this.scanline; x++) {
                    _this.bitmaps.push(new Tile(_this.image, x * _this.tileWidth, y * _this.tileHeight, _this.tileWidth, _this.tileHeight, scale));
                }
            }
            _this.tileWidth *= scale;
            _this.tileHeight *= scale;
            _this.onLoaded();
            _this.loaded = true;
        };
        this.image.src = url;
    }
    TilesetImpl.prototype.getTilesAcross = function () {
        return this.scanline;
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
        var image = this.tints[tintName];
        if (!image) {
            var canvas = document.createElement("canvas");
            canvas.width = this.image.width;
            canvas.height = this.image.height;
            var ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.drawImage(this.image, 0, 0);
                var id = ctx.getImageData(0, 0, canvas.width, canvas.height);
                for (var i = 0; i < id.data.length; i += 4) {
                    // leave black alone
                    id.data[i] = Math.floor(id.data[i] * tint[0]);
                    id.data[i + 1] = Math.floor(id.data[i + 1] * tint[1]);
                    id.data[i + 2] = Math.floor(id.data[i + 2] * tint[2]);
                }
                ctx.putImageData(id, 0, 0);
            }
            image = new Image();
            image.src = canvas.toDataURL();
            this.tints[tintName] = image;
        }
        return new Tile(image, x * this.originalTileWidth, y * this.originalTileHeight, this.originalTileWidth, this.originalTileHeight, this.scale);
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
                        var entity = new MapEntity_1.MapEntity(level, entityData.px[0] / layerData.__gridSize, entityData.px[1] / layerData.__gridSize, entityData.width / layerData.__gridSize, entityData.height / layerData.__gridSize, entityData.__identifier);
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
    function MapEntity(level, x, y, width, height, type) {
        this.fields = {};
        this.level = level;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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
    MapLayer.prototype.set = function (x, y, value) {
        if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)) {
            return;
        }
        var posIndex = x + (y * this.width);
        this.tiles[posIndex] = value;
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0dyYXBoaWNzLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvR3V0ZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0tleXMudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL0JpdG1hcEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL0ZvbnRJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9HcmFwaGljc0ltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL1NvdW5kSW1wbC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL2ltcGwvVGlsZXNldEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9wYXRoL0FTdGFyUGF0aEZpbmRlci50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvTWFwTm9kZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvUGF0aC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvU3RlcC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL0xEVEtXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcEVudGl0eS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcExheWVyLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvdGlsZW1hcHMvTWFwTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy90aWxlbWFwcy9NYXBXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxZQUFZLEdBQUcsYUFBYSxHQUFHLFdBQVcsR0FBRyxhQUFhLEdBQUcsYUFBYTtBQUMxRSxhQUFhO0FBQ2IsYUFBYTtBQUNiLFdBQVc7QUFDWCxhQUFhO0FBQ2IsWUFBWTs7Ozs7Ozs7Ozs7QUNQQztBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxpQkFBaUIsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUI7QUFDbkcsbUJBQW1CLG1CQUFPLENBQUMsbURBQW1CO0FBQzlDLGlCQUFpQixtQkFBTyxDQUFDLCtDQUFpQjtBQUMxQyxxQkFBcUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDbEQsa0JBQWtCLG1CQUFPLENBQUMsaURBQWtCO0FBQzVDLG9CQUFvQixtQkFBTyxDQUFDLHFEQUFvQjtBQUNoRCxrQkFBa0IsbUJBQU8sQ0FBQyx5REFBc0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsa0JBQWtCLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxnQkFBZ0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkhBQTZILG1CQUFtQixFQUFFO0FBQ2xKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ25UWTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxZQUFZOzs7Ozs7Ozs7OztBQ3hCQztBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBa0I7Ozs7Ozs7Ozs7O0FDM0JMO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QywyQkFBMkIseUJBQXlCLEVBQUUsT0FBTywyQkFBMkIsRUFBRTtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZ0JBQWdCOzs7Ozs7Ozs7OztBQ2ZIO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQixpQkFBaUIsbUJBQU8sQ0FBQywwQ0FBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QW9CLEVBQUUsRUFBRSxFQUFDO0FBQ3RHLHdCQUF3QixtQkFBTyxDQUFDLDZEQUF3QjtBQUN4RCxtREFBa0QsQ0FBQyxxQ0FBcUMsMENBQTBDLEVBQUUsRUFBRSxFQUFDO0FBQ3ZJLGFBQWEsbUJBQU8sQ0FBQyx1Q0FBYTtBQUNsQyx3Q0FBdUMsQ0FBQyxxQ0FBcUMsb0JBQW9CLEVBQUUsRUFBRSxFQUFDO0FBQ3RHLGFBQWEsbUJBQU8sQ0FBQyx1Q0FBYTtBQUNsQyx3Q0FBdUMsQ0FBQyxxQ0FBcUMsb0JBQW9CLEVBQUUsRUFBRSxFQUFDO0FBQ3RHLGtCQUFrQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNoRCw2Q0FBNEMsQ0FBQyxxQ0FBcUMsOEJBQThCLEVBQUUsRUFBRSxFQUFDO0FBQ3JILGlCQUFpQixtQkFBTyxDQUFDLHVEQUFxQjtBQUM5Qyw0Q0FBMkMsQ0FBQyxxQ0FBcUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFDO0FBQ2xILGlCQUFpQixtQkFBTyxDQUFDLHVEQUFxQjtBQUM5Qyw0Q0FBMkMsQ0FBQyxxQ0FBcUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFDO0FBQ2xILGlCQUFpQixtQkFBTyxDQUFDLHVEQUFxQjtBQUM5Qyw0Q0FBMkMsQ0FBQyxxQ0FBcUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFDO0FBQ2xILGtCQUFrQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNoRCw2Q0FBNEMsQ0FBQyxxQ0FBcUMsOEJBQThCLEVBQUUsRUFBRSxFQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3V0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndXRlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJMVUUgPSBleHBvcnRzLkdSRUVOID0gZXhwb3J0cy5SRUQgPSBleHBvcnRzLkJMQUNLID0gZXhwb3J0cy5XSElURSA9IHZvaWQgMDtcbmV4cG9ydHMuV0hJVEUgPSBcIndoaXRlXCI7XG5leHBvcnRzLkJMQUNLID0gXCJibGFja1wiO1xuZXhwb3J0cy5SRUQgPSBcInJlZFwiO1xuZXhwb3J0cy5HUkVFTiA9IFwiZ3JlZW5cIjtcbmV4cG9ydHMuQkxVRSA9IFwiYmx1ZVwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXJ0R2FtZSA9IGV4cG9ydHMuc2V0TXVzaWNPbiA9IGV4cG9ydHMuc2V0U291bmRPbiA9IGV4cG9ydHMuaXNNdXNpY09uID0gZXhwb3J0cy5pc1NvdW5kT24gPSB2b2lkIDA7XG52YXIgQml0bWFwSW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9CaXRtYXBJbXBsXCIpO1xudmFyIEZvbnRJbXBsXzEgPSByZXF1aXJlKFwiLi9pbXBsL0ZvbnRJbXBsXCIpO1xudmFyIEdyYXBoaWNzSW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9HcmFwaGljc0ltcGxcIik7XG52YXIgU291bmRJbXBsXzEgPSByZXF1aXJlKFwiLi9pbXBsL1NvdW5kSW1wbFwiKTtcbnZhciBUaWxlc2V0SW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9UaWxlc2V0SW1wbFwiKTtcbnZhciBMRFRLV29ybGRfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL0xEVEtXb3JsZFwiKTtcbnZhciBHQU1FX0xPT1A7XG52YXIgU09VTkRfT04gPSB0cnVlO1xudmFyIE1VU0lDX09OID0gdHJ1ZTtcbmZ1bmN0aW9uIGlzU291bmRPbigpIHtcbiAgICByZXR1cm4gU09VTkRfT047XG59XG5leHBvcnRzLmlzU291bmRPbiA9IGlzU291bmRPbjtcbmZ1bmN0aW9uIGlzTXVzaWNPbigpIHtcbiAgICByZXR1cm4gTVVTSUNfT047XG59XG5leHBvcnRzLmlzTXVzaWNPbiA9IGlzTXVzaWNPbjtcbmZ1bmN0aW9uIHNldFNvdW5kT24ob24pIHtcbiAgICBTT1VORF9PTiA9IG9uO1xufVxuZXhwb3J0cy5zZXRTb3VuZE9uID0gc2V0U291bmRPbjtcbmZ1bmN0aW9uIHNldE11c2ljT24ob24pIHtcbiAgICBpZiAoIW9uICYmIE1VU0lDX09OKSB7XG4gICAgICAgIE1VU0lDX09OID0gZmFsc2U7XG4gICAgICAgIGlmIChTb3VuZEltcGxfMS5Tb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgICAgICAgU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvbiAmJiAhTVVTSUNfT04pIHtcbiAgICAgICAgTVVTSUNfT04gPSB0cnVlO1xuICAgICAgICBpZiAoU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICAgIFNvdW5kSW1wbF8xLlNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnBsYXkoU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMudm9sdW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuc2V0TXVzaWNPbiA9IHNldE11c2ljT247XG5mdW5jdGlvbiBzdGFydEdhbWUoZ2FtZSkge1xuICAgIEdBTUVfTE9PUCA9IG5ldyBHYW1lTG9vcCgpLnN0YXJ0KGdhbWUpO1xufVxuZXhwb3J0cy5zdGFydEdhbWUgPSBzdGFydEdhbWU7XG52YXIgR2FtZUxvb3AgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2FtZUxvb3AoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gW107XG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5pbml0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmdldEdyYXBoaWNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaGljcztcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5yZXNvdXJjZXNSZW1haW5pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc291cmNlcy5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuICFyLmxvYWRlZDsgfSkubGVuZ3RoO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLnJlc291cmNlc1RvdGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXMubGVuZ3RoO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmFsbFJlc291cmNlc0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMucmVzb3VyY2VzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlID0gX2FbX2ldO1xuICAgICAgICAgICAgaWYgKCFyZXNvdXJjZS5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuaW5pdFJlc291cmNlc09uRmlyc3RDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFsbFJlc291cmNlc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMucmVzb3VyY2VzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciByZXNvdXJjZSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5pbml0T25GaXJzdENsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5tb3VzZU1vdmVIYW5kbGVyID0gZnVuY3Rpb24gKHgsIHksIGlkKSB7XG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKSB7IGlkID0gMDsgfVxuICAgICAgICB0aGlzLmluaXRSZXNvdXJjZXNPbkZpcnN0Q2xpY2soKTtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZ3JhcGhpY3MuY2FudmFzO1xuICAgICAgICBjYW52YXMuZm9jdXMoKTtcbiAgICAgICAgdmFyIHdpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoKHggLyB3aWR0aCkgKiBjYW52YXMud2lkdGgpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcigoeSAvIGhlaWdodCkgKiBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5nYW1lLm9uTW91c2VNb3ZlKHRoaXMsIHgsIHkpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLm1vdXNlRG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSAwOyB9XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5ncmFwaGljcy5jYW52YXM7XG4gICAgICAgIGNhbnZhcy5mb2N1cygpO1xuICAgICAgICB2YXIgd2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgICB4ID0gTWF0aC5mbG9vcigoeCAvIHdpZHRoKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKCh5IC8gaGVpZ2h0KSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdhbWUub25Nb3VzZURvd24odGhpcywgeCwgeSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubW91c2VVcEhhbmRsZXIgPSBmdW5jdGlvbiAoeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSAwOyB9XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5ncmFwaGljcy5jYW52YXM7XG4gICAgICAgIHZhciB3aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKCh4IC8gd2lkdGgpICogY2FudmFzLndpZHRoKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoKHkgLyBoZWlnaHQpICogY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZ2FtZS5vbk1vdXNlVXAodGhpcywgeCwgeSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUua2V5RG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuICAgICAgICB0aGlzLmdhbWUub25LZXlEb3duKHRoaXMsIGtleSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUua2V5VXBIYW5kbGVyID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmdhbWUub25LZXlVcCh0aGlzLCBrZXkpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGdhbWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljc0ltcGxfMS5HcmFwaGljc0ltcGwoKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1vdXNlRG93bkhhbmRsZXIoeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWN0ID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tb3VzZU1vdmVIYW5kbGVyKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1vdXNlVXBIYW5kbGVyKDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tb3VzZURvd25IYW5kbGVyKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubW91c2VNb3ZlSGFuZGxlcihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1vdXNlVXBIYW5kbGVyKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgX3RoaXMua2V5RG93bkhhbmRsZXIoZXZlbnQuY29kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgX3RoaXMua2V5VXBIYW5kbGVyKGV2ZW50LmNvZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ2FtZS5pbml0KHRoaXMpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubG9vcCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZGVsdGEgPSAwO1xuICAgICAgICBpZiAodGhpcy5sYXN0RnJhbWUgIT09IDApIHtcbiAgICAgICAgICAgIGRlbHRhID0gbm93IC0gdGhpcy5sYXN0RnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSBub3c7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYXBwbHlGb250KCk7XG4gICAgICAgIHRoaXMuZ2FtZS51cGRhdGUodGhpcywgZGVsdGEpO1xuICAgICAgICB0aGlzLmdhbWUucmVuZGVyKHRoaXMsIHRoaXMuZ3JhcGhpY3MpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubG9vcCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkTXVzaWMgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBzb3VuZCA9IG5ldyBTb3VuZEltcGxfMS5Tb3VuZEltcGwodXJsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaChzb3VuZCk7XG4gICAgICAgIHJldHVybiBzb3VuZDtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkU291bmQgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBzb3VuZCA9IG5ldyBTb3VuZEltcGxfMS5Tb3VuZEltcGwodXJsLCBmYWxzZSk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2goc291bmQpO1xuICAgICAgICByZXR1cm4gc291bmQ7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZEJpdG1hcCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIGJpdG1hcCA9IG5ldyBCaXRtYXBJbXBsXzEuQml0bWFwSW1wbCh1cmwpO1xuICAgICAgICB0aGlzLnJlc291cmNlcy5wdXNoKGJpdG1hcCk7XG4gICAgICAgIHJldHVybiBiaXRtYXA7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZFNjYWxlZFRpbGVzZXQgPSBmdW5jdGlvbiAodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIHNjYWxlKSB7XG4gICAgICAgIHZhciB0aWxlc2V0ID0gbmV3IFRpbGVzZXRJbXBsXzEuVGlsZXNldEltcGwodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIHNjYWxlKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaCh0aWxlc2V0KTtcbiAgICAgICAgcmV0dXJuIHRpbGVzZXQ7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZFRpbGVzZXQgPSBmdW5jdGlvbiAodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpIHtcbiAgICAgICAgdmFyIHRpbGVzZXQgPSBuZXcgVGlsZXNldEltcGxfMS5UaWxlc2V0SW1wbCh1cmwsIHRpbGVXaWR0aCwgdGlsZUhlaWdodCwgMSk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2godGlsZXNldCk7XG4gICAgICAgIHJldHVybiB0aWxlc2V0O1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmxvYWRGb250ID0gZnVuY3Rpb24gKHVybCwgbmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IEZvbnRJbXBsXzEuRm9udEltcGwodXJsLCBuYW1lKTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkTERUSyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIHdvcmxkID0gbmV3IExEVEtXb3JsZF8xLkxEVEtXb3JsZCgpO1xuICAgICAgICB0aGlzLnJlc291cmNlcy5wdXNoKHdvcmxkKTtcbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXEub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICByZXEub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAocmVxLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgICAgIHdvcmxkLmxvYWQoSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlcS5zZW5kKG51bGwpO1xuICAgICAgICByZXR1cm4gd29ybGQ7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZEpzb24gPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXEub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXEucmVzcG9uc2VUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXEucmVzcG9uc2VUZXh0LnJlcGxhY2UoL1xcXFxcInxcIig/OlxcXFxcInxbXlwiXSkqXCJ8KFxcL1xcLy4qfFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pL2csIGZ1bmN0aW9uIChtLCBnKSB7IHJldHVybiBnID8gXCJcIiA6IG07IH0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxLnNlbmQobnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmlzUnVubmluZ1N0YW5kYWxvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAod2luZG93Lm5hdmlnYXRvci5zdGFuZGFsb25lID09PSB0cnVlKSB8fCAod2luZG93Lm1hdGNoTWVkaWEoJyhkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpJykubWF0Y2hlcyk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuaXNNb2JpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSU9TKCkgfHwgdGhpcy5pc0FuZHJvaWQoKTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5pc0FuZHJvaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpICE9IG51bGw7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuaXNJT1MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAnaVBhZCBTaW11bGF0b3InLFxuICAgICAgICAgICAgJ2lQaG9uZSBTaW11bGF0b3InLFxuICAgICAgICAgICAgJ2lQb2QgU2ltdWxhdG9yJyxcbiAgICAgICAgICAgICdpUGFkJyxcbiAgICAgICAgICAgICdpUGhvbmUnLFxuICAgICAgICAgICAgJ2lQb2QnXG4gICAgICAgIF0uaW5kZXhPZihuYXZpZ2F0b3IucGxhdGZvcm0pID49IDBcbiAgICAgICAgICAgIC8vIGlQYWQgb24gaU9TIDEzIGRldGVjdGlvblxuICAgICAgICAgICAgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoXCJNYWNcIikgJiYgXCJvbnRvdWNoZW5kXCIgaW4gZG9jdW1lbnQpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmlzUGhvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweClcIikubWF0Y2hlcztcbiAgICB9O1xuICAgIHJldHVybiBHYW1lTG9vcDtcbn0oKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuS2V5cyA9IHZvaWQgMDtcbnZhciBLZXlzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEtleXMoKSB7XG4gICAgfVxuICAgIEtleXMuRVNDQVBFX0tFWSA9IFwiRXNjYXBlXCI7XG4gICAgS2V5cy5FTlRFUl9LRVkgPSBcIkVudGVyXCI7XG4gICAgS2V5cy5MRUZUX0tFWSA9IFwiQXJyb3dMZWZ0XCI7XG4gICAgS2V5cy5SSUdIVF9LRVkgPSBcIkFycm93UmlnaHRcIjtcbiAgICBLZXlzLlVQX0tFWSA9IFwiQXJyb3dVcFwiO1xuICAgIEtleXMuRE9XTl9LRVkgPSBcIkFycm93RG93blwiO1xuICAgIEtleXMuU1BBQ0VfS0VZID0gXCIgXCI7XG4gICAgS2V5cy5TX0tFWSA9IFwic1wiO1xuICAgIEtleXMuTV9LRVkgPSBcIm1cIjtcbiAgICBLZXlzLkFfS0VZID0gXCJhXCI7XG4gICAgS2V5cy5XX0tFWSA9IFwid1wiO1xuICAgIEtleXMuRF9LRVkgPSBcImRcIjtcbiAgICBLZXlzLkNPTlRST0xfS0VZID0gXCJDb250cm9sXCI7XG4gICAgS2V5cy5NRVRBX0tFWSA9IFwiTWV0YVwiO1xuICAgIEtleXMuQUxUX0tFWSA9IFwiQWx0XCI7XG4gICAgS2V5cy5UQUJfS0VZID0gXCJUYWJcIjtcbiAgICByZXR1cm4gS2V5cztcbn0oKSk7XG5leHBvcnRzLktleXMgPSBLZXlzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJpdG1hcEltcGwgPSB2b2lkIDA7XG52YXIgQml0bWFwSW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCaXRtYXBJbXBsKHVybCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLndpZHRoID0gMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMud2lkdGggPSBfdGhpcy5pbWFnZS53aWR0aDtcbiAgICAgICAgICAgIF90aGlzLmhlaWdodCA9IF90aGlzLmltYWdlLmhlaWdodDtcbiAgICAgICAgICAgIF90aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdXJsO1xuICAgIH1cbiAgICBCaXRtYXBJbXBsLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCwgeCwgeSkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHgsIHkpO1xuICAgIH07XG4gICAgQml0bWFwSW1wbC5wcm90b3R5cGUuZHJhd1NjYWxlZCA9IGZ1bmN0aW9uIChjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9O1xuICAgIEJpdG1hcEltcGwucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICByZXR1cm4gQml0bWFwSW1wbDtcbn0oKSk7XG5leHBvcnRzLkJpdG1hcEltcGwgPSBCaXRtYXBJbXBsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZvbnRJbXBsID0gdm9pZCAwO1xudmFyIEZvbnRJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvbnRJbXBsKHVybCwgbmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IFwiQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBcIiArIG5hbWUgKyBcIjsgc3JjOiB1cmwoJ1wiICsgdXJsICsgXCInKTsgfSBib2R5IHsgZm9udC1mYW1pbHk6IFwiICsgbmFtZSArIFwiOyB9XCI7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgICBGb250SW1wbC5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbiAoY3R4LCBzaXplKSB7XG4gICAgICAgIGN0eC5mb250ID0gc2l6ZSArIFwicHggXCIgKyB0aGlzLm5hbWU7XG4gICAgfTtcbiAgICByZXR1cm4gRm9udEltcGw7XG59KCkpO1xuZXhwb3J0cy5Gb250SW1wbCA9IEZvbnRJbXBsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdyYXBoaWNzSW1wbCA9IHZvaWQgMDtcbnZhciBGb250SW1wbF8xID0gcmVxdWlyZShcIi4vRm9udEltcGxcIik7XG52YXIgaXNGaXJlZm94ID0gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcbnZhciBPZmZzY3JlZW5JbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9mZnNjcmVlbkltcGwoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cbiAgICBPZmZzY3JlZW5JbXBsLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xuICAgIH07XG4gICAgT2Zmc2NyZWVuSW1wbC5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIH07XG4gICAgT2Zmc2NyZWVuSW1wbC5wcm90b3R5cGUuc2V0RGltZW5zaW9uID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH07XG4gICAgcmV0dXJuIE9mZnNjcmVlbkltcGw7XG59KCkpO1xudmFyIENvcHlCaXRtYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29weUJpdG1hcChjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgICBDb3B5Qml0bWFwLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCwgeCwgeSkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB4LCB5KTtcbiAgICB9O1xuICAgIENvcHlCaXRtYXAucHJvdG90eXBlLmRyYXdTY2FsZWQgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG4gICAgQ29weUJpdG1hcC5wcm90b3R5cGUuZ2V0RHJhd2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgICB9O1xuICAgIENvcHlCaXRtYXAucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICByZXR1cm4gQ29weUJpdG1hcDtcbn0oKSk7XG52YXIgR3JhcGhpY3NJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdyYXBoaWNzSW1wbCgpIHtcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IDIwO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZWNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMubWFpbkN0eCA9IHRoaXMuY3R4O1xuICAgICAgICB0aGlzLmN0eC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmZvbnRTbW9vdGggPSBcIm5ldmVyXCI7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndlYmtpdEZvbnRTbW9vdGhpbmcgPSBcIm5vbmVcIjtcbiAgICAgICAgaWYgKGlzRmlyZWZveCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSBcImNyaXNwLWVkZ2VzXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IFwicGl4ZWxhdGVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb250ID0gbmV3IEZvbnRJbXBsXzEuRm9udEltcGwoXCJmb250LnR0ZlwiLCBcIkd1dGVEZWZhdWx0XCIpO1xuICAgICAgICBpZiAodGhpcy5mb250KSB7XG4gICAgICAgICAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuY2xpcCA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHZhciBzcXVhcmVQYXRoID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICBzcXVhcmVQYXRoLnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsaXAoc3F1YXJlUGF0aCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmNyZWF0ZU9mZnNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICBjdHgud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjYW52YXMuc3R5bGUuZm9udFNtb290aCA9IFwibmV2ZXJcIjtcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS53ZWJraXRGb250U21vb3RoaW5nID0gXCJub25lXCI7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE9mZnNjcmVlbkltcGwoY2FudmFzLCBjdHgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGNyZWF0ZSBvZmZzY3JlZW4gY2FudmFzXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdUb09mZnNjcmVlbiA9IGZ1bmN0aW9uIChzY3JlZW4pIHtcbiAgICAgICAgaWYgKHNjcmVlbikge1xuICAgICAgICAgICAgdGhpcy5jdHggPSBzY3JlZW4uY3R4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLm1haW5DdHg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd09mZnNjcmVlbiA9IGZ1bmN0aW9uIChzY3JlZW4pIHtcbiAgICAgICAgdGhpcy5jdHgud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2Uoc2NyZWVuLmNhbnZhcywgMCwgMCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdTY2FsZWRPZmZzY3JlZW4gPSBmdW5jdGlvbiAoc2NyZWVuLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY3R4LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHNjcmVlbi5jYW52YXMsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5jbGVhclJlY3QgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmZpdFNjcmVlbiA9IGZ1bmN0aW9uIChwaXhlbFNjYWxlKSB7XG4gICAgICAgIHZhciByZWFsV2lkdGggPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lcldpZHRoIC8gcGl4ZWxTY2FsZSkgKiBwaXhlbFNjYWxlO1xuICAgICAgICB2YXIgcmVhbEhlaWdodCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVySGVpZ2h0IC8gcGl4ZWxTY2FsZSkgKiBwaXhlbFNjYWxlO1xuICAgICAgICB2YXIgdmlydHVhbFdpZHRoID0gcmVhbFdpZHRoIC8gcGl4ZWxTY2FsZTtcbiAgICAgICAgdmFyIHZpcnR1YWxIZWlnaHQgPSByZWFsSGVpZ2h0IC8gcGl4ZWxTY2FsZTtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHZpcnR1YWxXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdmlydHVhbEhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSByZWFsV2lkdGggKyBcInB4XCI7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IHJlYWxIZWlnaHQgKyBcInB4XCI7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLnNldEFscGhhID0gZnVuY3Rpb24gKGFscGhhKSB7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgICAgIChfYSA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIDAsIDApO1xuICAgICAgICByZXR1cm4gbmV3IENvcHlCaXRtYXAoY2FudmFzKTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLnNjYWxlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoeCwgeSk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmFwcGx5Rm9udCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb250LmFwcGx5KHRoaXMuY3R4LCB0aGlzLmZvbnRTaXplKTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuc2V0Rm9udCA9IGZ1bmN0aW9uIChmb250KSB7XG4gICAgICAgIHRoaXMuZm9udCA9IGZvbnQ7XG4gICAgICAgIHRoaXMuYXBwbHlGb250KCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLnNldEZvbnRTaXplID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuYXBwbHlGb250KCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmdldFN0cmluZ1dpZHRoID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5kcmF3U3RyaW5nID0gZnVuY3Rpb24gKHgsIHksIHRleHQsIGNvbCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2w7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5zZXRDb21wb3NpdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBuYW1lO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5maWxsUmVjdCA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2wpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd0xpbmUgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIsIGNvbCwgd2lkdGgpIHtcbiAgICAgICAgaWYgKHdpZHRoID09PSB2b2lkIDApIHsgd2lkdGggPSAxOyB9XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gY29sO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd0JpdG1hcCA9IGZ1bmN0aW9uICh4LCB5LCBiaXRtYXApIHtcbiAgICAgICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBiaXRtYXAuZHJhdyh0aGlzLmN0eCwgeCwgeSk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdTY2FsZWRCaXRtYXAgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgYml0bWFwKSB7XG4gICAgICAgIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYml0bWFwLmRyYXdTY2FsZWQodGhpcy5jdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG4gICAgcmV0dXJuIEdyYXBoaWNzSW1wbDtcbn0oKSk7XG5leHBvcnRzLkdyYXBoaWNzSW1wbCA9IEdyYXBoaWNzSW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Tb3VuZEltcGwgPSB2b2lkIDA7XG52YXIgR3V0ZV8xID0gcmVxdWlyZShcIi4uL0d1dGVcIik7XG52YXIgQXVkaW9Db250ZXh0O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG59XG52YXIgQVVESU9fQ09OVEVYVDtcbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKEd1dGVfMS5pc011c2ljT24oKSkge1xuICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5wbGF5KFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnZvbHVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XG59XG52YXIgU291bmRJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNvdW5kSW1wbCh1cmwsIG11c2ljKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudm9sdW1lID0gMTtcbiAgICAgICAgdGhpcy5tdXNpYyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5tdXNpYyA9IG11c2ljO1xuICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcS5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhcnJheUJ1ZmZlciA9IHJlcS5yZXNwb25zZTtcbiAgICAgICAgICAgIGlmIChhcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIF90aGlzLmRhdGEgPSBhcnJheUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBfdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLnRyeUxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxLnNlbmQobnVsbCk7XG4gICAgfVxuICAgIFNvdW5kSW1wbC5wcm90b3R5cGUudHJ5TG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKEFVRElPX0NPTlRFWFQgJiYgdGhpcy5kYXRhKSB7XG4gICAgICAgICAgICBBVURJT19DT05URVhULmRlY29kZUF1ZGlvRGF0YSh0aGlzLmRhdGEsIGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID09PSBfdGhpcykge1xuICAgICAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsYXkoX3RoaXMudm9sdW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZSkgeyBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBsb2FkOiBcIiArIF90aGlzLnVybCk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTb3VuZEltcGwucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghQVVESU9fQ09OVEVYVCkge1xuICAgICAgICAgICAgQVVESU9fQ09OVEVYVCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgICAgIEFVRElPX0NPTlRFWFQucmVzdW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cnlMb2FkKCk7XG4gICAgfTtcbiAgICBTb3VuZEltcGwucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAodm9sdW1lKSB7XG4gICAgICAgIHRoaXMudm9sdW1lID0gdm9sdW1lO1xuICAgICAgICBpZiAoIXRoaXMuYnVmZmVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgICAgICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID0gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDKSB7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgPSB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm11c2ljICYmICFHdXRlXzEuaXNNdXNpY09uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghR3V0ZV8xLmlzU291bmRPbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb3VyY2UgPSBBVURJT19DT05URVhULmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICB0aGlzLnNvdXJjZS5idWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy5nYWluID0gQVVESU9fQ09OVEVYVC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5nYWluKTtcbiAgICAgICAgdGhpcy5nYWluLmNvbm5lY3QoQVVESU9fQ09OVEVYVC5kZXN0aW5hdGlvbik7XG4gICAgICAgIGlmICh0aGlzLm11c2ljKSB7XG4gICAgICAgICAgICB0aGlzLmdhaW4uZ2Fpbi52YWx1ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvdXJjZS5zdGFydCgwKTtcbiAgICAgICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHZvbHVtZSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSArIDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYWluLmdhaW4udmFsdWUgPSB2b2x1bWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNvdW5kSW1wbC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKDAsIEFVRElPX0NPTlRFWFQuY3VycmVudFRpbWUgKyAzKTtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvdXJjZV8xID0gdGhpcy5zb3VyY2U7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBTb3VyY2VfMS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfSwgNDAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTb3VuZEltcGw7XG59KCkpO1xuZXhwb3J0cy5Tb3VuZEltcGwgPSBTb3VuZEltcGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGlsZXNldEltcGwgPSB2b2lkIDA7XG52YXIgVGlsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaWxlKGNhbnZhcywgeCwgeSwgd2lkdGgsIGhlaWdodCwgc2NhbGUpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGNhbnZhcztcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgfVxuICAgIFRpbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY3R4LCB4LCB5KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB4LCB5LCB0aGlzLndpZHRoICogdGhpcy5zY2FsZSwgdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlKTtcbiAgICB9O1xuICAgIFRpbGUucHJvdG90eXBlLmRyYXdTY2FsZWQgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9O1xuICAgIFRpbGUucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICByZXR1cm4gVGlsZTtcbn0oKSk7XG52YXIgVGlsZXNldEltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGlsZXNldEltcGwodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIHNjYWxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzY2FsZSA9PT0gdm9pZCAwKSB7IHNjYWxlID0gMTsgfVxuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJpdG1hcHMgPSBbXTtcbiAgICAgICAgdGhpcy5zY2FubGluZSA9IDA7XG4gICAgICAgIHRoaXMudGlsZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy50aW50cyA9IHt9O1xuICAgICAgICB0aGlzLm9uTG9hZGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IHRoaXMub3JpZ2luYWxUaWxlV2lkdGggPSB0aWxlV2lkdGg7XG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0ID0gdGlsZUhlaWdodDtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc2NhbmxpbmUgPSBNYXRoLmZsb29yKF90aGlzLmltYWdlLndpZHRoIC8gX3RoaXMudGlsZVdpZHRoKTtcbiAgICAgICAgICAgIHZhciBkZXB0aCA9IE1hdGguZmxvb3IoX3RoaXMuaW1hZ2UuaGVpZ2h0IC8gX3RoaXMudGlsZUhlaWdodCk7XG4gICAgICAgICAgICBfdGhpcy50aWxlQ291bnQgPSBkZXB0aCAqIF90aGlzLnNjYW5saW5lO1xuICAgICAgICAgICAgLy8gY3V0IHRoZSBpbWFnZSBpbnRvIHBpZWNlc1xuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBkZXB0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBfdGhpcy5zY2FubGluZTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJpdG1hcHMucHVzaChuZXcgVGlsZShfdGhpcy5pbWFnZSwgeCAqIF90aGlzLnRpbGVXaWR0aCwgeSAqIF90aGlzLnRpbGVIZWlnaHQsIF90aGlzLnRpbGVXaWR0aCwgX3RoaXMudGlsZUhlaWdodCwgc2NhbGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy50aWxlV2lkdGggKj0gc2NhbGU7XG4gICAgICAgICAgICBfdGhpcy50aWxlSGVpZ2h0ICo9IHNjYWxlO1xuICAgICAgICAgICAgX3RoaXMub25Mb2FkZWQoKTtcbiAgICAgICAgICAgIF90aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdXJsO1xuICAgIH1cbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuZ2V0VGlsZXNBY3Jvc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5saW5lO1xuICAgIH07XG4gICAgVGlsZXNldEltcGwucHJvdG90eXBlLmdldFRpbGVXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZVdpZHRoO1xuICAgIH07XG4gICAgVGlsZXNldEltcGwucHJvdG90eXBlLmdldFRpbGVIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVIZWlnaHQ7XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuZ2V0VGlsZUNvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlQ291bnQ7XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuaW5pdE9uRmlyc3RDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5nZXRUaWxlID0gZnVuY3Rpb24gKHRpbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYml0bWFwc1t0aWxlXTtcbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5nZXRUaW50ZWRUaWxlID0gZnVuY3Rpb24gKHRpbGUsIHRpbnROYW1lLCB0aW50KSB7XG4gICAgICAgIHZhciB4ID0gdGlsZSAlIHRoaXMuc2NhbmxpbmU7XG4gICAgICAgIHZhciB5ID0gTWF0aC5mbG9vcih0aWxlIC8gdGhpcy5zY2FubGluZSk7XG4gICAgICAgIHZhciBpbWFnZSA9IHRoaXMudGludHNbdGludE5hbWVdO1xuICAgICAgICBpZiAoIWltYWdlKSB7XG4gICAgICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIDApO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVhdmUgYmxhY2sgYWxvbmVcbiAgICAgICAgICAgICAgICAgICAgaWQuZGF0YVtpXSA9IE1hdGguZmxvb3IoaWQuZGF0YVtpXSAqIHRpbnRbMF0pO1xuICAgICAgICAgICAgICAgICAgICBpZC5kYXRhW2kgKyAxXSA9IE1hdGguZmxvb3IoaWQuZGF0YVtpICsgMV0gKiB0aW50WzFdKTtcbiAgICAgICAgICAgICAgICAgICAgaWQuZGF0YVtpICsgMl0gPSBNYXRoLmZsb29yKGlkLmRhdGFbaSArIDJdICogdGludFsyXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaWQsIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgICAgIHRoaXMudGludHNbdGludE5hbWVdID0gaW1hZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBUaWxlKGltYWdlLCB4ICogdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCwgeSAqIHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0LCB0aGlzLm9yaWdpbmFsVGlsZVdpZHRoLCB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCwgdGhpcy5zY2FsZSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGlsZXNldEltcGw7XG59KCkpO1xuZXhwb3J0cy5UaWxlc2V0SW1wbCA9IFRpbGVzZXRJbXBsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFTdGFyUGF0aEZpbmRlciA9IHZvaWQgMDtcbnZhciBNYXBOb2RlXzEgPSByZXF1aXJlKFwiLi9NYXBOb2RlXCIpO1xudmFyIFBhdGhfMSA9IHJlcXVpcmUoXCIuL1BhdGhcIik7XG52YXIgQVN0YXJQYXRoRmluZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFTdGFyUGF0aEZpbmRlcihtYXApIHtcbiAgICAgICAgdGhpcy5vYmplY3RQb29sID0gW107XG4gICAgICAgIHRoaXMub3Blbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5wYXRoRmluZENvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLndpZHRoID0gbWFwLmdldE1hcFdpZHRoKCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gbWFwLmdldE1hcEhlaWdodCgpO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5vcGVuID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICB2YXIgYyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA1OyBqKyspIHtcbiAgICAgICAgICAgICAgICBvLnB1c2goMCk7XG4gICAgICAgICAgICAgICAgYy5wdXNoKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vcGVuLnB1c2gobyk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZC5wdXNoKGMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcGVuTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5vYmplY3RQb29sLnB1c2godGhpcy5vcGVuTGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuTGlzdCA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnBhdGhGaW5kQ291bnRlcisrO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5nZW5lcmF0ZVBhdGggPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgY3VycmVudCA9IG5vZGU7XG4gICAgICAgIHZhciBwYXRoID0gbmV3IFBhdGhfMS5QYXRoKCk7XG4gICAgICAgIHdoaWxlIChjdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHBhdGguYWRkKGN1cnJlbnQueCwgY3VycmVudC55KTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuYmxvY2tlZCA9IGZ1bmN0aW9uIChzeCwgc3ksIHgsIHkpIHtcbiAgICAgICAgdmFyIGlnbm9yZUFjdG9ycyA9IHRoaXMuaWdub3JlRmluYWxPY2N1cGF0aW9uICYmIHRoaXMuYXRUYXJnZXQoeCwgeSk7XG4gICAgICAgIGlmICghdGhpcy5tYXAubG9jYXRpb25EaXNjb3ZlcmVkKHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXAuYmxvY2tlZCh0aGlzLm1vdmVyLCBudWxsLCBzeCwgc3ksIHgsIHksIGlnbm9yZUFjdG9ycywgdGhpcy5hdFRhcmdldCh4LCB5KSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuYXRUYXJnZXQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICBmb3IgKHZhciB4cyA9IDA7IHhzIDwgdGhpcy5tb3Zlci5nZXRUaWxlc1dpZHRoKCk7IHhzKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIHlzID0gMDsgeXMgPCB0aGlzLm1vdmVyLmdldFRpbGVzSGVpZ2h0KCk7IHlzKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoKHggKyB4cyA9PSB0aGlzLnR4KSAmJiAoeSArIHlzID09IHRoaXMudHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBBU3RhclBhdGhGaW5kZXIucHJvdG90eXBlLmZpbmRQYXRoID0gZnVuY3Rpb24gKG1vdmVyLCB0eCwgdHksIG1heCwgaWdub3JlRmluYWxPY2N1cGF0aW9uLCBydW5Bd2F5KSB7XG4gICAgICAgIHR4ID0gTWF0aC5mbG9vcih0eCk7XG4gICAgICAgIHR5ID0gTWF0aC5mbG9vcih0eSk7XG4gICAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgICAgICB0aGlzLmlnbm9yZUZpbmFsT2NjdXBhdGlvbiA9IGlnbm9yZUZpbmFsT2NjdXBhdGlvbjtcbiAgICAgICAgdGhpcy5tb3ZlciA9IG1vdmVyO1xuICAgICAgICB0aGlzLnR4ID0gdHg7XG4gICAgICAgIHRoaXMudHkgPSB0eTtcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tlZCh0eCwgdHksIHR4LCB0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5hZGRMb2NhdGlvbihudWxsLCBNYXRoLmZsb29yKG1vdmVyLmdldFRpbGVNYXBYKCkpLCBNYXRoLmZsb29yKG1vdmVyLmdldFRpbGVNYXBZKCkpKTtcbiAgICAgICAgd2hpbGUgKHRoaXMub3Blbkxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGJlc3QgPSB0aGlzLm9wZW5MaXN0WzBdO1xuICAgICAgICAgICAgdGhpcy5vcGVuTGlzdC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAvLyBpZiBiZXN0IGlzIHRoZSB0YXJnZXQgdGhlbiB3ZSd2ZSBmb3VuZCBpdCFcbiAgICAgICAgICAgIGlmICh0aGlzLmF0VGFyZ2V0KGJlc3QueCwgYmVzdC55KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlUGF0aChiZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54ICsgMSwgYmVzdC55KTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54IC0gMSwgYmVzdC55KTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54LCBiZXN0LnkgKyAxKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54LCBiZXN0LnkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuYWRkTG9jYXRpb24gPSBmdW5jdGlvbiAocGFyZW50LCB4LCB5KSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKHgpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcih5KTtcbiAgICAgICAgdmFyIHN4ID0geDtcbiAgICAgICAgdmFyIHN5ID0geTtcbiAgICAgICAgdmFyIGRpciA9IEFTdGFyUGF0aEZpbmRlci5OT05FO1xuICAgICAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN4ID0gcGFyZW50Lng7XG4gICAgICAgICAgICBzeSA9IHBhcmVudC55O1xuICAgICAgICAgICAgaWYgKHN5ICsgMSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLk5PUlRIX1RPX1NPVVRIO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN5IC0gMSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLlNPVVRIX1RPX05PUlRIO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN4ICsgMSA9PSB4KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLldFU1RfVE9fRUFTVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzeCAtIDEgPT0geCkge1xuICAgICAgICAgICAgICAgIGRpciA9IEFTdGFyUGF0aEZpbmRlci5FQVNUX1RPX1dFU1Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm1hcC52YWxpZExvY2F0aW9uKHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgaXQncyBpbiB0aGUgb3BlbiBsaXN0IGlnbm9yZVxuICAgICAgICBpZiAodGhpcy5vcGVuW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID09IHRoaXMucGF0aEZpbmRDb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID09IHRoaXMucGF0aEZpbmRDb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgaXQncyBibG9ja2VkIGZvciBhbnkgcmVhc29uLCBhZGQgaXQgdG8gdGhlIGNsb3NlZFxuICAgICAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQuZGVwdGggPiB0aGlzLm1heCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VkW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID0gdGhpcy5wYXRoRmluZENvdW50ZXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5tYXAubG9jYXRpb25EaXNjb3ZlcmVkKHgsIHkpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZFt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJsb2NrZWQoc3gsIHN5LCB4LCB5KSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZWRbeCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPSB0aGlzLnBhdGhGaW5kQ291bnRlcjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBvdGhlcndpc2UgaXQncyBhIHBvc3NpYmxlIHN0ZXAgYWRkIGl0IHRvIHRoZSBvcGVuXG4gICAgICAgIHRoaXMub3Blblt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuY3JlYXRlTWFwTm9kZSh4LCB5LCBwYXJlbnQsIHRoaXMuZ2V0SGV1cmlzdGljKHgsIHkpKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wZW5MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMub3Blbkxpc3RbaV07XG4gICAgICAgICAgICBpZiAoY3VycmVudC5oID4gbm9kZS5oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTGlzdC5zcGxpY2UoaSwgMCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIG5vIHdoZXJlIGVsc2UgYWRkIGl0IGF0IHRoZSBlbmRcbiAgICAgICAgdGhpcy5vcGVuTGlzdC5wdXNoKG5vZGUpO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5nZXRIZXVyaXN0aWMgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAvLyBkaXN0YW5jZSBzcXVhcmVkXG4gICAgICAgIHZhciBkeCA9IE1hdGguYWJzKHRoaXMudHggLSB4KTtcbiAgICAgICAgdmFyIGR5ID0gTWF0aC5hYnModGhpcy50eSAtIHkpO1xuICAgICAgICByZXR1cm4gKGR4ICogZHgpICsgKGR5ICogZHkpO1xuICAgIH07XG4gICAgLy8gb2JqZWN0IHBvb2wgYWNjZXNzb3IgLSBmcmVlIGlzIGRvbmUgaW4gYnVsa1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuY3JlYXRlTWFwTm9kZSA9IGZ1bmN0aW9uICh4LCB5LCBwYXJlbnQsIGgpIHtcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0UG9vbC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdmFyIG4gPSBuZXcgTWFwTm9kZV8xLk1hcE5vZGUoKTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UG9vbC5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5vYmplY3RQb29sWzBdO1xuICAgICAgICB0aGlzLm9iamVjdFBvb2wuc3BsaWNlKDAsIDEpO1xuICAgICAgICBub2RlLnggPSB4O1xuICAgICAgICBub2RlLnkgPSB5O1xuICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgbm9kZS5oID0gaDtcbiAgICAgICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLmRlcHRoID0gcGFyZW50LmRlcHRoICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGVwdGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLk5PUlRIX1RPX1NPVVRIID0gMDtcbiAgICBBU3RhclBhdGhGaW5kZXIuRUFTVF9UT19XRVNUID0gMTtcbiAgICBBU3RhclBhdGhGaW5kZXIuU09VVEhfVE9fTk9SVEggPSAyO1xuICAgIEFTdGFyUGF0aEZpbmRlci5XRVNUX1RPX0VBU1QgPSAzO1xuICAgIEFTdGFyUGF0aEZpbmRlci5OT05FID0gNDtcbiAgICByZXR1cm4gQVN0YXJQYXRoRmluZGVyO1xufSgpKTtcbmV4cG9ydHMuQVN0YXJQYXRoRmluZGVyID0gQVN0YXJQYXRoRmluZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hcE5vZGUgPSB2b2lkIDA7XG52YXIgTWFwTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBOb2RlKCkge1xuICAgIH1cbiAgICByZXR1cm4gTWFwTm9kZTtcbn0oKSk7XG5leHBvcnRzLk1hcE5vZGUgPSBNYXBOb2RlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBhdGggPSB2b2lkIDA7XG52YXIgU3RlcF8xID0gcmVxdWlyZShcIi4vU3RlcFwiKTtcbnZhciBQYXRoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBhdGgoKSB7XG4gICAgICAgIHRoaXMuc3RlcHMgPSBuZXcgQXJyYXkoKTtcbiAgICB9XG4gICAgUGF0aC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy5zdGVwcy5zcGxpY2UoMCwgMCwgbmV3IFN0ZXBfMS5TdGVwKHgsIHkpKTtcbiAgICB9O1xuICAgIFBhdGgucHJvdG90eXBlLmdldExhc3RTdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGVwc1t0aGlzLnN0ZXBzLmxlbmd0aCAtIDFdO1xuICAgIH07XG4gICAgUGF0aC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5zdGVwc1swXTtcbiAgICAgICAgdGhpcy5zdGVwcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gUGF0aDtcbn0oKSk7XG5leHBvcnRzLlBhdGggPSBQYXRoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN0ZXAgPSB2b2lkIDA7XG52YXIgU3RlcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGVwKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgcmV0dXJuIFN0ZXA7XG59KCkpO1xuZXhwb3J0cy5TdGVwID0gU3RlcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTERUS1dvcmxkID0gdm9pZCAwO1xudmFyIE1hcEVudGl0eV8xID0gcmVxdWlyZShcIi4vTWFwRW50aXR5XCIpO1xudmFyIE1hcExheWVyXzEgPSByZXF1aXJlKFwiLi9NYXBMYXllclwiKTtcbnZhciBNYXBMZXZlbF8xID0gcmVxdWlyZShcIi4vTWFwTGV2ZWxcIik7XG52YXIgTWFwV29ybGRfMSA9IHJlcXVpcmUoXCIuL01hcFdvcmxkXCIpO1xudmFyIExEVEtXb3JsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTERUS1dvcmxkLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExEVEtXb3JsZCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBMRFRLV29ybGQucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBMRFRLV29ybGQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICB0aGlzLmdyaWRTaXplID0ganNvbi5kZWZhdWx0R3JpZFNpemU7XG4gICAgICAgIHZhciB0aWxlc2V0ID0ganNvbi5kZWZzLnRpbGVzZXRzWzBdO1xuICAgICAgICB0aGlzLnRpbGVzZXRTY2FubGluZSA9IHRpbGVzZXQucHhXaWQgLyB0aWxlc2V0LnRpbGVHcmlkU2l6ZTtcbiAgICAgICAgdGhpcy50aWxlc2V0U2l6ZSA9IHRpbGVzZXQudGlsZUdyaWRTaXplO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0ganNvbi5sZXZlbHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGV2ZWxEYXRhID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIGxldmVsID0gbmV3IE1hcExldmVsXzEuTWFwTGV2ZWwodGhpcywgbGV2ZWxEYXRhLmlkZW50aWZpZXIpO1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IGxldmVsRGF0YS5maWVsZEluc3RhbmNlczsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGRJbnN0YW5jZSA9IF9jW19iXTtcbiAgICAgICAgICAgICAgICBsZXZlbC5maWVsZHNbZmllbGRJbnN0YW5jZS5fX2lkZW50aWZpZXJdID0gZmllbGRJbnN0YW5jZS5fX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgX2QgPSAwLCBfZSA9IGxldmVsRGF0YS5sYXllckluc3RhbmNlczsgX2QgPCBfZS5sZW5ndGg7IF9kKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbGF5ZXJEYXRhID0gX2VbX2RdO1xuICAgICAgICAgICAgICAgIGlmIChsYXllckRhdGEuX190eXBlID09PSBcIkVudGl0aWVzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2YgPSAwLCBfZyA9IGxheWVyRGF0YS5lbnRpdHlJbnN0YW5jZXM7IF9mIDwgX2cubGVuZ3RoOyBfZisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW50aXR5RGF0YSA9IF9nW19mXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbnRpdHkgPSBuZXcgTWFwRW50aXR5XzEuTWFwRW50aXR5KGxldmVsLCBlbnRpdHlEYXRhLnB4WzBdIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUsIGVudGl0eURhdGEucHhbMV0gLyBsYXllckRhdGEuX19ncmlkU2l6ZSwgZW50aXR5RGF0YS53aWR0aCAvIGxheWVyRGF0YS5fX2dyaWRTaXplLCBlbnRpdHlEYXRhLmhlaWdodCAvIGxheWVyRGF0YS5fX2dyaWRTaXplLCBlbnRpdHlEYXRhLl9faWRlbnRpZmllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaCA9IDAsIF9qID0gZW50aXR5RGF0YS5maWVsZEluc3RhbmNlczsgX2ggPCBfai5sZW5ndGg7IF9oKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGRJbnN0YW5jZSA9IF9qW19oXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuZmllbGRzW2ZpZWxkSW5zdGFuY2UuX19pZGVudGlmaWVyXSA9IGZpZWxkSW5zdGFuY2UuX192YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsLmVudGl0aWVzLnB1c2goZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxheWVyID0gbmV3IE1hcExheWVyXzEuTWFwTGF5ZXIobGV2ZWwsIGxheWVyRGF0YS5fX2lkZW50aWZpZXIsIGxheWVyRGF0YS5fX2NXaWQsIGxheWVyRGF0YS5fX2NIZWkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2NhbmxpbmUgPSBsZXZlbC53b3JsZC50aWxlc2V0U2NhbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0aWxlU2l6ZSA9IGxldmVsLndvcmxkLnRpbGVzZXRTaXplO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfayA9IDAsIF9sID0gbGF5ZXJEYXRhLmdyaWRUaWxlczsgX2sgPCBfbC5sZW5ndGg7IF9rKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aWxlID0gX2xbX2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBNYXRoLmZsb29yKHRpbGUucHhbMF0gLyBsYXllckRhdGEuX19ncmlkU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IodGlsZS5weFsxXSAvIGxheWVyRGF0YS5fX2dyaWRTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NJbmRleCA9IHggKyAoeSAqIGxheWVyLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eCA9IE1hdGguZmxvb3IodGlsZS5zcmNbMF0gLyB0aWxlU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHkgPSBNYXRoLmZsb29yKHRpbGUuc3JjWzFdIC8gdGlsZVNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbGVJbmRleCA9ICh0eSAqIHNjYW5saW5lKSArIHR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIudGlsZXNbcG9zSW5kZXhdID0gdGlsZUluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXZlbC5sYXllcnMuc3BsaWNlKDAsIDAsIGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwubGF5ZXJCeU5hbWVbbGF5ZXIubmFtZV0gPSBsYXllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGV2ZWwubGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXZlbC53aWR0aCA9IGxldmVsLmxheWVyc1swXS53aWR0aDtcbiAgICAgICAgICAgICAgICBsZXZlbC5oZWlnaHQgPSBsZXZlbC5sYXllcnNbMF0uaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV2ZWwud2lkdGggPSBsZXZlbERhdGEucHhXaWQgLyB0aGlzLmdyaWRTaXplO1xuICAgICAgICAgICAgICAgIGxldmVsLmhlaWdodCA9IGxldmVsRGF0YS5weEhlaSAvIHRoaXMuZ3JpZFNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxldmVsc1tsZXZlbC5pZF0gPSBsZXZlbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIExEVEtXb3JsZDtcbn0oTWFwV29ybGRfMS5NYXBXb3JsZCkpO1xuZXhwb3J0cy5MRFRLV29ybGQgPSBMRFRLV29ybGQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFwRW50aXR5ID0gdm9pZCAwO1xudmFyIE1hcEVudGl0eSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBFbnRpdHkobGV2ZWwsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHR5cGUpIHtcbiAgICAgICAgdGhpcy5maWVsZHMgPSB7fTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICByZXR1cm4gTWFwRW50aXR5O1xufSgpKTtcbmV4cG9ydHMuTWFwRW50aXR5ID0gTWFwRW50aXR5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hcExheWVyID0gdm9pZCAwO1xudmFyIE1hcExheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcExheWVyKGxldmVsLCBuYW1lLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy50aWxlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVzLnB1c2goMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWFwTGF5ZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh4LCB5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoKHggPCAwKSB8fCAoeSA8IDApIHx8ICh4ID49IHRoaXMud2lkdGgpIHx8ICh5ID49IHRoaXMuaGVpZ2h0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb3NJbmRleCA9IHggKyAoeSAqIHRoaXMud2lkdGgpO1xuICAgICAgICB0aGlzLnRpbGVzW3Bvc0luZGV4XSA9IHZhbHVlO1xuICAgIH07XG4gICAgTWFwTGF5ZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIGlmICgoeCA8IDApIHx8ICh5IDwgMCkgfHwgKHggPj0gdGhpcy53aWR0aCkgfHwgKHkgPj0gdGhpcy5oZWlnaHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9zSW5kZXggPSB4ICsgKHkgKiB0aGlzLndpZHRoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZXNbcG9zSW5kZXhdO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcExheWVyO1xufSgpKTtcbmV4cG9ydHMuTWFwTGF5ZXIgPSBNYXBMYXllcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYXBMZXZlbCA9IHZvaWQgMDtcbnZhciBNYXBMZXZlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBMZXZlbCh3b3JsZCwgaWQpIHtcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy5sYXllckJ5TmFtZSA9IHt9O1xuICAgICAgICB0aGlzLmVudGl0aWVzID0gW107XG4gICAgICAgIHRoaXMuZmllbGRzID0ge307XG4gICAgICAgIHRoaXMud29ybGQgPSB3b3JsZDtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cbiAgICBNYXBMZXZlbC5wcm90b3R5cGUuZ2V0Rmlyc3RFbnRpdHlPZlR5cGUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5lbnRpdGllczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBlbnRpdHkgPSBfYVtfaV07XG4gICAgICAgICAgICBpZiAoZW50aXR5LnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcExldmVsO1xufSgpKTtcbmV4cG9ydHMuTWFwTGV2ZWwgPSBNYXBMZXZlbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYXBXb3JsZCA9IHZvaWQgMDtcbnZhciBNYXBXb3JsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBXb3JsZCgpIHtcbiAgICAgICAgdGhpcy5sZXZlbHMgPSB7fTtcbiAgICAgICAgdGhpcy5ncmlkU2l6ZSA9IDA7XG4gICAgICAgIHRoaXMudGlsZXNldFNjYW5saW5lID0gMDtcbiAgICAgICAgdGhpcy50aWxlc2V0U2l6ZSA9IDA7XG4gICAgICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBNYXBXb3JsZDtcbn0oKSk7XG5leHBvcnRzLk1hcFdvcmxkID0gTWFwV29ybGQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hcEVudGl0eSA9IGV4cG9ydHMuTWFwTGF5ZXIgPSBleHBvcnRzLk1hcExldmVsID0gZXhwb3J0cy5NYXBXb3JsZCA9IGV4cG9ydHMuTERUS1dvcmxkID0gZXhwb3J0cy5TdGVwID0gZXhwb3J0cy5QYXRoID0gZXhwb3J0cy5BU3RhclBhdGhGaW5kZXIgPSBleHBvcnRzLktleXMgPSBleHBvcnRzLkJMVUUgPSBleHBvcnRzLlJFRCA9IGV4cG9ydHMuR1JFRU4gPSBleHBvcnRzLkJMQUNLID0gZXhwb3J0cy5XSElURSA9IGV4cG9ydHMuc2V0U291bmRPbiA9IGV4cG9ydHMuc2V0TXVzaWNPbiA9IGV4cG9ydHMuaXNTb3VuZE9uID0gZXhwb3J0cy5pc011c2ljT24gPSBleHBvcnRzLnN0YXJ0R2FtZSA9IHZvaWQgMDtcbnZhciBHdXRlXzEgPSByZXF1aXJlKFwiLi9HdXRlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3RhcnRHYW1lXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHdXRlXzEuc3RhcnRHYW1lOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNNdXNpY09uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHdXRlXzEuaXNNdXNpY09uOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNTb3VuZE9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHdXRlXzEuaXNTb3VuZE9uOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2V0TXVzaWNPblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLnNldE11c2ljT247IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzZXRTb3VuZE9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHdXRlXzEuc2V0U291bmRPbjsgfSB9KTtcbnZhciBHcmFwaGljc18xID0gcmVxdWlyZShcIi4vR3JhcGhpY3NcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJXSElURVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3JhcGhpY3NfMS5XSElURTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJMQUNLXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHcmFwaGljc18xLkJMQUNLOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiR1JFRU5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdyYXBoaWNzXzEuR1JFRU47IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSRURcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdyYXBoaWNzXzEuUkVEOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQkxVRVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3JhcGhpY3NfMS5CTFVFOyB9IH0pO1xudmFyIEtleXNfMSA9IHJlcXVpcmUoXCIuL0tleXNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJLZXlzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBLZXlzXzEuS2V5czsgfSB9KTtcbnZhciBBU3RhclBhdGhGaW5kZXJfMSA9IHJlcXVpcmUoXCIuL3BhdGgvQVN0YXJQYXRoRmluZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQVN0YXJQYXRoRmluZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBBU3RhclBhdGhGaW5kZXJfMS5BU3RhclBhdGhGaW5kZXI7IH0gfSk7XG52YXIgUGF0aF8xID0gcmVxdWlyZShcIi4vcGF0aC9QYXRoXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUGF0aFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUGF0aF8xLlBhdGg7IH0gfSk7XG52YXIgU3RlcF8xID0gcmVxdWlyZShcIi4vcGF0aC9TdGVwXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU3RlcFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU3RlcF8xLlN0ZXA7IH0gfSk7XG52YXIgTERUS1dvcmxkXzEgPSByZXF1aXJlKFwiLi90aWxlbWFwcy9MRFRLV29ybGRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJMRFRLV29ybGRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIExEVEtXb3JsZF8xLkxEVEtXb3JsZDsgfSB9KTtcbnZhciBNYXBXb3JsZF8xID0gcmVxdWlyZShcIi4vdGlsZW1hcHMvTWFwV29ybGRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNYXBXb3JsZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFwV29ybGRfMS5NYXBXb3JsZDsgfSB9KTtcbnZhciBNYXBMZXZlbF8xID0gcmVxdWlyZShcIi4vdGlsZW1hcHMvTWFwTGV2ZWxcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNYXBMZXZlbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFwTGV2ZWxfMS5NYXBMZXZlbDsgfSB9KTtcbnZhciBNYXBMYXllcl8xID0gcmVxdWlyZShcIi4vdGlsZW1hcHMvTWFwTGF5ZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNYXBMYXllclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFwTGF5ZXJfMS5NYXBMYXllcjsgfSB9KTtcbnZhciBNYXBFbnRpdHlfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL01hcEVudGl0eVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1hcEVudGl0eVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFwRW50aXR5XzEuTWFwRW50aXR5OyB9IH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==