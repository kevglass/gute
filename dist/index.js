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
            ctx.mozImageSmoothingEnabled = false;
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
        this.ctx.drawImage(screen.canvas, 0, 0);
    };
    GraphicsImpl.prototype.drawScaledOffscreen = function (screen, x, y, width, height) {
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.mozImageSmoothingEnabled = false;
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
        this.onLoaded = function () { };
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
            _this.onLoaded();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0dyYXBoaWNzLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvR3V0ZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0tleXMudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL0JpdG1hcEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL0ZvbnRJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9HcmFwaGljc0ltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL1NvdW5kSW1wbC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL2ltcGwvVGlsZXNldEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9wYXRoL0FTdGFyUGF0aEZpbmRlci50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvTWFwTm9kZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvUGF0aC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvU3RlcC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL0xEVEtXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcEVudGl0eS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcExheWVyLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvdGlsZW1hcHMvTWFwTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy90aWxlbWFwcy9NYXBXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxZQUFZLEdBQUcsYUFBYSxHQUFHLFdBQVcsR0FBRyxhQUFhLEdBQUcsYUFBYTtBQUMxRSxhQUFhO0FBQ2IsYUFBYTtBQUNiLFdBQVc7QUFDWCxhQUFhO0FBQ2IsWUFBWTs7Ozs7Ozs7Ozs7QUNQQztBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxpQkFBaUIsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUI7QUFDbkcsbUJBQW1CLG1CQUFPLENBQUMsbURBQW1CO0FBQzlDLGlCQUFpQixtQkFBTyxDQUFDLCtDQUFpQjtBQUMxQyxxQkFBcUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDbEQsa0JBQWtCLG1CQUFPLENBQUMsaURBQWtCO0FBQzVDLG9CQUFvQixtQkFBTyxDQUFDLHFEQUFvQjtBQUNoRCxrQkFBa0IsbUJBQU8sQ0FBQyx5REFBc0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsa0JBQWtCLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxnQkFBZ0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkhBQTZILG1CQUFtQixFQUFFO0FBQ2xKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ25UWTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxZQUFZOzs7Ozs7Ozs7OztBQ3hCQztBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBa0I7Ozs7Ozs7Ozs7O0FDM0JMO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QywyQkFBMkIseUJBQXlCLEVBQUUsT0FBTywyQkFBMkIsRUFBRTtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZ0JBQWdCOzs7Ozs7Ozs7OztBQ2ZIO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQixpQkFBaUIsbUJBQU8sQ0FBQywwQ0FBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlDQUFpQztBQUN6RCw0QkFBNEIsa0NBQWtDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7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QUFDO0FBQzFHLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3Qix3Q0FBdUMsQ0FBQyxxQ0FBcUMsb0JBQW9CLEVBQUUsRUFBRSxFQUFDO0FBQ3RHLHdCQUF3QixtQkFBTyxDQUFDLDZEQUF3QjtBQUN4RCxtREFBa0QsQ0FBQyxxQ0FBcUMsMENBQTBDLEVBQUUsRUFBRSxFQUFDO0FBQ3ZJLGFBQWEsbUJBQU8sQ0FBQyx1Q0FBYTtBQUNsQyx3Q0FBdUMsQ0FBQyxxQ0FBcUMsb0JBQW9CLEVBQUUsRUFBRSxFQUFDO0FBQ3RHLGFBQWEsbUJBQU8sQ0FBQyx1Q0FBYTtBQUNsQyx3Q0FBdUMsQ0FBQyxxQ0FBcUMsb0JBQW9CLEVBQUUsRUFBRSxFQUFDO0FBQ3RHLGtCQUFrQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNoRCw2Q0FBNEMsQ0FBQyxxQ0FBcUMsOEJBQThCLEVBQUUsRUFBRSxFQUFDO0FBQ3JILGlCQUFpQixtQkFBTyxDQUFDLHVEQUFxQjtBQUM5Qyw0Q0FBMkMsQ0FBQyxxQ0FBcUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFDO0FBQ2xILGlCQUFpQixtQkFBTyxDQUFDLHVEQUFxQjtBQUM5Qyw0Q0FBMkMsQ0FBQyxxQ0FBcUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFDO0FBQ2xILGlCQUFpQixtQkFBTyxDQUFDLHVEQUFxQjtBQUM5Qyw0Q0FBMkMsQ0FBQyxxQ0FBcUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFDO0FBQ2xILGtCQUFrQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNoRCw2Q0FBNEMsQ0FBQyxxQ0FBcUMsOEJBQThCLEVBQUUsRUFBRSxFQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3V0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndXRlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJMVUUgPSBleHBvcnRzLkdSRUVOID0gZXhwb3J0cy5SRUQgPSBleHBvcnRzLkJMQUNLID0gZXhwb3J0cy5XSElURSA9IHZvaWQgMDtcbmV4cG9ydHMuV0hJVEUgPSBcIndoaXRlXCI7XG5leHBvcnRzLkJMQUNLID0gXCJibGFja1wiO1xuZXhwb3J0cy5SRUQgPSBcInJlZFwiO1xuZXhwb3J0cy5HUkVFTiA9IFwiZ3JlZW5cIjtcbmV4cG9ydHMuQkxVRSA9IFwiYmx1ZVwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXJ0R2FtZSA9IGV4cG9ydHMuc2V0TXVzaWNPbiA9IGV4cG9ydHMuc2V0U291bmRPbiA9IGV4cG9ydHMuaXNNdXNpY09uID0gZXhwb3J0cy5pc1NvdW5kT24gPSB2b2lkIDA7XG52YXIgQml0bWFwSW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9CaXRtYXBJbXBsXCIpO1xudmFyIEZvbnRJbXBsXzEgPSByZXF1aXJlKFwiLi9pbXBsL0ZvbnRJbXBsXCIpO1xudmFyIEdyYXBoaWNzSW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9HcmFwaGljc0ltcGxcIik7XG52YXIgU291bmRJbXBsXzEgPSByZXF1aXJlKFwiLi9pbXBsL1NvdW5kSW1wbFwiKTtcbnZhciBUaWxlc2V0SW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9UaWxlc2V0SW1wbFwiKTtcbnZhciBMRFRLV29ybGRfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL0xEVEtXb3JsZFwiKTtcbnZhciBHQU1FX0xPT1A7XG52YXIgU09VTkRfT04gPSB0cnVlO1xudmFyIE1VU0lDX09OID0gdHJ1ZTtcbmZ1bmN0aW9uIGlzU291bmRPbigpIHtcbiAgICByZXR1cm4gU09VTkRfT047XG59XG5leHBvcnRzLmlzU291bmRPbiA9IGlzU291bmRPbjtcbmZ1bmN0aW9uIGlzTXVzaWNPbigpIHtcbiAgICByZXR1cm4gTVVTSUNfT047XG59XG5leHBvcnRzLmlzTXVzaWNPbiA9IGlzTXVzaWNPbjtcbmZ1bmN0aW9uIHNldFNvdW5kT24ob24pIHtcbiAgICBTT1VORF9PTiA9IG9uO1xufVxuZXhwb3J0cy5zZXRTb3VuZE9uID0gc2V0U291bmRPbjtcbmZ1bmN0aW9uIHNldE11c2ljT24ob24pIHtcbiAgICBpZiAoIW9uICYmIE1VU0lDX09OKSB7XG4gICAgICAgIE1VU0lDX09OID0gZmFsc2U7XG4gICAgICAgIGlmIChTb3VuZEltcGxfMS5Tb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgICAgICAgU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvbiAmJiAhTVVTSUNfT04pIHtcbiAgICAgICAgTVVTSUNfT04gPSB0cnVlO1xuICAgICAgICBpZiAoU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICAgIFNvdW5kSW1wbF8xLlNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnBsYXkoU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMudm9sdW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuc2V0TXVzaWNPbiA9IHNldE11c2ljT247XG5mdW5jdGlvbiBzdGFydEdhbWUoZ2FtZSkge1xuICAgIEdBTUVfTE9PUCA9IG5ldyBHYW1lTG9vcCgpLnN0YXJ0KGdhbWUpO1xufVxuZXhwb3J0cy5zdGFydEdhbWUgPSBzdGFydEdhbWU7XG52YXIgR2FtZUxvb3AgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2FtZUxvb3AoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gW107XG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5pbml0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmdldEdyYXBoaWNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaGljcztcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5yZXNvdXJjZXNSZW1haW5pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc291cmNlcy5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuICFyLmxvYWRlZDsgfSkubGVuZ3RoO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLnJlc291cmNlc1RvdGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXMubGVuZ3RoO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmFsbFJlc291cmNlc0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMucmVzb3VyY2VzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlID0gX2FbX2ldO1xuICAgICAgICAgICAgaWYgKCFyZXNvdXJjZS5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuaW5pdFJlc291cmNlc09uRmlyc3RDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFsbFJlc291cmNlc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMucmVzb3VyY2VzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciByZXNvdXJjZSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5pbml0T25GaXJzdENsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5tb3VzZU1vdmVIYW5kbGVyID0gZnVuY3Rpb24gKHgsIHksIGlkKSB7XG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKSB7IGlkID0gMDsgfVxuICAgICAgICB0aGlzLmluaXRSZXNvdXJjZXNPbkZpcnN0Q2xpY2soKTtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZ3JhcGhpY3MuY2FudmFzO1xuICAgICAgICBjYW52YXMuZm9jdXMoKTtcbiAgICAgICAgdmFyIHdpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoKHggLyB3aWR0aCkgKiBjYW52YXMud2lkdGgpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcigoeSAvIGhlaWdodCkgKiBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5nYW1lLm9uTW91c2VNb3ZlKHRoaXMsIHgsIHkpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLm1vdXNlRG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSAwOyB9XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5ncmFwaGljcy5jYW52YXM7XG4gICAgICAgIGNhbnZhcy5mb2N1cygpO1xuICAgICAgICB2YXIgd2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgICB4ID0gTWF0aC5mbG9vcigoeCAvIHdpZHRoKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKCh5IC8gaGVpZ2h0KSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdhbWUub25Nb3VzZURvd24odGhpcywgeCwgeSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubW91c2VVcEhhbmRsZXIgPSBmdW5jdGlvbiAoeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSAwOyB9XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5ncmFwaGljcy5jYW52YXM7XG4gICAgICAgIHZhciB3aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKCh4IC8gd2lkdGgpICogY2FudmFzLndpZHRoKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoKHkgLyBoZWlnaHQpICogY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZ2FtZS5vbk1vdXNlVXAodGhpcywgeCwgeSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUua2V5RG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuICAgICAgICB0aGlzLmdhbWUub25LZXlEb3duKHRoaXMsIGtleSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUua2V5VXBIYW5kbGVyID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmdhbWUub25LZXlVcCh0aGlzLCBrZXkpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGdhbWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljc0ltcGxfMS5HcmFwaGljc0ltcGwoKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1vdXNlRG93bkhhbmRsZXIoeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWN0ID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tb3VzZU1vdmVIYW5kbGVyKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1vdXNlVXBIYW5kbGVyKDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tb3VzZURvd25IYW5kbGVyKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubW91c2VNb3ZlSGFuZGxlcihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1vdXNlVXBIYW5kbGVyKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgX3RoaXMua2V5RG93bkhhbmRsZXIoZXZlbnQua2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBfdGhpcy5rZXlVcEhhbmRsZXIoZXZlbnQua2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGdhbWUuaW5pdCh0aGlzKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmxvb3AoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmxvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGRlbHRhID0gMDtcbiAgICAgICAgaWYgKHRoaXMubGFzdEZyYW1lICE9PSAwKSB7XG4gICAgICAgICAgICBkZWx0YSA9IG5vdyAtIHRoaXMubGFzdEZyYW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gbm93O1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmFwcGx5Rm9udCgpO1xuICAgICAgICB0aGlzLmdhbWUudXBkYXRlKHRoaXMsIGRlbHRhKTtcbiAgICAgICAgdGhpcy5nYW1lLnJlbmRlcih0aGlzLCB0aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmxvb3AoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZE11c2ljID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB2YXIgc291bmQgPSBuZXcgU291bmRJbXBsXzEuU291bmRJbXBsKHVybCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2goc291bmQpO1xuICAgICAgICByZXR1cm4gc291bmQ7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZFNvdW5kID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB2YXIgc291bmQgPSBuZXcgU291bmRJbXBsXzEuU291bmRJbXBsKHVybCwgZmFsc2UpO1xuICAgICAgICB0aGlzLnJlc291cmNlcy5wdXNoKHNvdW5kKTtcbiAgICAgICAgcmV0dXJuIHNvdW5kO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmxvYWRCaXRtYXAgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBiaXRtYXAgPSBuZXcgQml0bWFwSW1wbF8xLkJpdG1hcEltcGwodXJsKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaChiaXRtYXApO1xuICAgICAgICByZXR1cm4gYml0bWFwO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmxvYWRTY2FsZWRUaWxlc2V0ID0gZnVuY3Rpb24gKHVybCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCBzY2FsZSkge1xuICAgICAgICB2YXIgdGlsZXNldCA9IG5ldyBUaWxlc2V0SW1wbF8xLlRpbGVzZXRJbXBsKHVybCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCBzY2FsZSk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2godGlsZXNldCk7XG4gICAgICAgIHJldHVybiB0aWxlc2V0O1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmxvYWRUaWxlc2V0ID0gZnVuY3Rpb24gKHVybCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KSB7XG4gICAgICAgIHZhciB0aWxlc2V0ID0gbmV3IFRpbGVzZXRJbXBsXzEuVGlsZXNldEltcGwodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIDEpO1xuICAgICAgICB0aGlzLnJlc291cmNlcy5wdXNoKHRpbGVzZXQpO1xuICAgICAgICByZXR1cm4gdGlsZXNldDtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkRm9udCA9IGZ1bmN0aW9uICh1cmwsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGb250SW1wbF8xLkZvbnRJbXBsKHVybCwgbmFtZSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZExEVEsgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciB3b3JsZCA9IG5ldyBMRFRLV29ybGRfMS5MRFRLV29ybGQoKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaCh3b3JsZCk7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKHJlcS5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgICAgICB3b3JsZC5sb2FkKEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXEuc2VuZChudWxsKTtcbiAgICAgICAgcmV0dXJuIHdvcmxkO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmxvYWRKc29uID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmVxLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVxLnJlc3BvbnNlVGV4dC5yZXBsYWNlKC9cXFxcXCJ8XCIoPzpcXFxcXCJ8W15cIl0pKlwifChcXC9cXC8uKnxcXC9cXCpbXFxzXFxTXSo/XFwqXFwvKS9nLCBmdW5jdGlvbiAobSwgZykgeyByZXR1cm4gZyA/IFwiXCIgOiBtOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3VsdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcS5zZW5kKG51bGwpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5pc1J1bm5pbmdTdGFuZGFsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHdpbmRvdy5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSA9PT0gdHJ1ZSkgfHwgKHdpbmRvdy5tYXRjaE1lZGlhKCcoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKScpLm1hdGNoZXMpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmlzTW9iaWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0lPUygpIHx8IHRoaXMuaXNBbmRyb2lkKCk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuaXNBbmRyb2lkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSAhPSBudWxsO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmlzSU9TID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgJ2lQYWQgU2ltdWxhdG9yJyxcbiAgICAgICAgICAgICdpUGhvbmUgU2ltdWxhdG9yJyxcbiAgICAgICAgICAgICdpUG9kIFNpbXVsYXRvcicsXG4gICAgICAgICAgICAnaVBhZCcsXG4gICAgICAgICAgICAnaVBob25lJyxcbiAgICAgICAgICAgICdpUG9kJ1xuICAgICAgICBdLmluZGV4T2YobmF2aWdhdG9yLnBsYXRmb3JtKSA+PSAwXG4gICAgICAgICAgICAvLyBpUGFkIG9uIGlPUyAxMyBkZXRlY3Rpb25cbiAgICAgICAgICAgIHx8IChuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKFwiTWFjXCIpICYmIFwib250b3VjaGVuZFwiIGluIGRvY3VtZW50KTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5pc1Bob25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpXCIpLm1hdGNoZXM7XG4gICAgfTtcbiAgICByZXR1cm4gR2FtZUxvb3A7XG59KCkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLktleXMgPSB2b2lkIDA7XG52YXIgS2V5cyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLZXlzKCkge1xuICAgIH1cbiAgICBLZXlzLkVTQ0FQRV9LRVkgPSBcIkVzY2FwZVwiO1xuICAgIEtleXMuRU5URVJfS0VZID0gXCJFbnRlclwiO1xuICAgIEtleXMuTEVGVF9LRVkgPSBcIkFycm93TGVmdFwiO1xuICAgIEtleXMuUklHSFRfS0VZID0gXCJBcnJvd1JpZ2h0XCI7XG4gICAgS2V5cy5VUF9LRVkgPSBcIkFycm93VXBcIjtcbiAgICBLZXlzLkRPV05fS0VZID0gXCJBcnJvd0Rvd25cIjtcbiAgICBLZXlzLlNQQUNFX0tFWSA9IFwiIFwiO1xuICAgIEtleXMuU19LRVkgPSBcInNcIjtcbiAgICBLZXlzLk1fS0VZID0gXCJtXCI7XG4gICAgS2V5cy5BX0tFWSA9IFwiYVwiO1xuICAgIEtleXMuV19LRVkgPSBcIndcIjtcbiAgICBLZXlzLkRfS0VZID0gXCJkXCI7XG4gICAgS2V5cy5DT05UUk9MX0tFWSA9IFwiQ29udHJvbFwiO1xuICAgIEtleXMuTUVUQV9LRVkgPSBcIk1ldGFcIjtcbiAgICBLZXlzLkFMVF9LRVkgPSBcIkFsdFwiO1xuICAgIEtleXMuVEFCX0tFWSA9IFwiVGFiXCI7XG4gICAgcmV0dXJuIEtleXM7XG59KCkpO1xuZXhwb3J0cy5LZXlzID0gS2V5cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5CaXRtYXBJbXBsID0gdm9pZCAwO1xudmFyIEJpdG1hcEltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQml0bWFwSW1wbCh1cmwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLndpZHRoID0gX3RoaXMuaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICBfdGhpcy5oZWlnaHQgPSBfdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICBfdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHVybDtcbiAgICB9XG4gICAgQml0bWFwSW1wbC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgsIHgsIHkpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB4LCB5KTtcbiAgICB9O1xuICAgIEJpdG1hcEltcGwucHJvdG90eXBlLmRyYXdTY2FsZWQgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBCaXRtYXBJbXBsLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgcmV0dXJuIEJpdG1hcEltcGw7XG59KCkpO1xuZXhwb3J0cy5CaXRtYXBJbXBsID0gQml0bWFwSW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Gb250SW1wbCA9IHZvaWQgMDtcbnZhciBGb250SW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb250SW1wbCh1cmwsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBcIkBmb250LWZhY2UgeyBmb250LWZhbWlseTogXCIgKyBuYW1lICsgXCI7IHNyYzogdXJsKCdcIiArIHVybCArIFwiJyk7IH0gYm9keSB7IGZvbnQtZmFtaWx5OiBcIiArIG5hbWUgKyBcIjsgfVwiO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gICAgRm9udEltcGwucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKGN0eCwgc2l6ZSkge1xuICAgICAgICBjdHguZm9udCA9IHNpemUgKyBcInB4IFwiICsgdGhpcy5uYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIEZvbnRJbXBsO1xufSgpKTtcbmV4cG9ydHMuRm9udEltcGwgPSBGb250SW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HcmFwaGljc0ltcGwgPSB2b2lkIDA7XG52YXIgRm9udEltcGxfMSA9IHJlcXVpcmUoXCIuL0ZvbnRJbXBsXCIpO1xudmFyIGlzRmlyZWZveCA9IHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgT2Zmc2NyZWVuSW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPZmZzY3JlZW5JbXBsKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG4gICAgT2Zmc2NyZWVuSW1wbC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB9O1xuICAgIE9mZnNjcmVlbkltcGwucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB9O1xuICAgIE9mZnNjcmVlbkltcGwucHJvdG90eXBlLnNldERpbWVuc2lvbiA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9O1xuICAgIHJldHVybiBPZmZzY3JlZW5JbXBsO1xufSgpKTtcbnZhciBDb3B5Qml0bWFwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvcHlCaXRtYXAoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgQ29weUJpdG1hcC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgsIHgsIHkpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhbnZhcywgeCwgeSk7XG4gICAgfTtcbiAgICBDb3B5Qml0bWFwLnByb3RvdHlwZS5kcmF3U2NhbGVkID0gZnVuY3Rpb24gKGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9O1xuICAgIENvcHlCaXRtYXAucHJvdG90eXBlLmdldERyYXdhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gICAgfTtcbiAgICBDb3B5Qml0bWFwLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgcmV0dXJuIENvcHlCaXRtYXA7XG59KCkpO1xudmFyIEdyYXBoaWNzSW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHcmFwaGljc0ltcGwoKSB7XG4gICAgICAgIHRoaXMuZm9udFNpemUgPSAyMDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLm1haW5DdHggPSB0aGlzLmN0eDtcbiAgICAgICAgdGhpcy5jdHgud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4Lm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuZm9udFNtb290aCA9IFwibmV2ZXJcIjtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2Via2l0Rm9udFNtb290aGluZyA9IFwibm9uZVwiO1xuICAgICAgICBpZiAoaXNGaXJlZm94KSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IFwiY3Jpc3AtZWRnZXNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gXCJwaXhlbGF0ZWRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvbnQgPSBuZXcgRm9udEltcGxfMS5Gb250SW1wbChcImZvbnQudHRmXCIsIFwiR3V0ZURlZmF1bHRcIik7XG4gICAgICAgIGlmICh0aGlzLmZvbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlGb250KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5jbGlwID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdmFyIHNxdWFyZVBhdGggPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgIHNxdWFyZVBhdGgucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xpcChzcXVhcmVQYXRoKTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuY3JlYXRlT2Zmc2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgIGN0eC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGN0eC5tb3pJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5mb250U21vb3RoID0gXCJuZXZlclwiO1xuICAgICAgICAgICAgY2FudmFzLnN0eWxlLndlYmtpdEZvbnRTbW9vdGhpbmcgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHJldHVybiBuZXcgT2Zmc2NyZWVuSW1wbChjYW52YXMsIGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gY3JlYXRlIG9mZnNjcmVlbiBjYW52YXNcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd1RvT2Zmc2NyZWVuID0gZnVuY3Rpb24gKHNjcmVlbikge1xuICAgICAgICBpZiAoc2NyZWVuKSB7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHNjcmVlbi5jdHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMubWFpbkN0eDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5kcmF3T2Zmc2NyZWVuID0gZnVuY3Rpb24gKHNjcmVlbikge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2Uoc2NyZWVuLmNhbnZhcywgMCwgMCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdTY2FsZWRPZmZzY3JlZW4gPSBmdW5jdGlvbiAoc2NyZWVuLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY3R4LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eC5tb3pJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShzY3JlZW4uY2FudmFzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuY2xlYXJSZWN0ID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5maXRTY3JlZW4gPSBmdW5jdGlvbiAocGl4ZWxTY2FsZSkge1xuICAgICAgICB2YXIgcmVhbFdpZHRoID0gTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aCAvIHBpeGVsU2NhbGUpICogcGl4ZWxTY2FsZTtcbiAgICAgICAgdmFyIHJlYWxIZWlnaHQgPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lckhlaWdodCAvIHBpeGVsU2NhbGUpICogcGl4ZWxTY2FsZTtcbiAgICAgICAgdmFyIHZpcnR1YWxXaWR0aCA9IHJlYWxXaWR0aCAvIHBpeGVsU2NhbGU7XG4gICAgICAgIHZhciB2aXJ0dWFsSGVpZ2h0ID0gcmVhbEhlaWdodCAvIHBpeGVsU2NhbGU7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB2aXJ0dWFsV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHZpcnR1YWxIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gcmVhbFdpZHRoICsgXCJweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSByZWFsSGVpZ2h0ICsgXCJweFwiO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5zZXRBbHBoYSA9IGZ1bmN0aW9uIChhbHBoYSkge1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuICAgICAgICAoX2EgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb3B5Qml0bWFwKGNhbnZhcyk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHgsIHkpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5zY2FsZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHgsIHkpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5hcHBseUZvbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm9udC5hcHBseSh0aGlzLmN0eCwgdGhpcy5mb250U2l6ZSk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLnNldEZvbnQgPSBmdW5jdGlvbiAoZm9udCkge1xuICAgICAgICB0aGlzLmZvbnQgPSBmb250O1xuICAgICAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5zZXRGb250U2l6ZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICAgIHRoaXMuZm9udFNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5nZXRTdHJpbmdXaWR0aCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd1N0cmluZyA9IGZ1bmN0aW9uICh4LCB5LCB0ZXh0LCBjb2wpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuc2V0Q29tcG9zaXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gbmFtZTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZmlsbFJlY3QgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdMaW5lID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyLCBjb2wsIHdpZHRoKSB7XG4gICAgICAgIGlmICh3aWR0aCA9PT0gdm9pZCAwKSB7IHdpZHRoID0gMTsgfVxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGNvbDtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4MSwgeTEpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdCaXRtYXAgPSBmdW5jdGlvbiAoeCwgeSwgYml0bWFwKSB7XG4gICAgICAgIGJpdG1hcC5kcmF3KHRoaXMuY3R4LCB4LCB5KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd1NjYWxlZEJpdG1hcCA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBiaXRtYXApIHtcbiAgICAgICAgYml0bWFwLmRyYXdTY2FsZWQodGhpcy5jdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG4gICAgcmV0dXJuIEdyYXBoaWNzSW1wbDtcbn0oKSk7XG5leHBvcnRzLkdyYXBoaWNzSW1wbCA9IEdyYXBoaWNzSW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Tb3VuZEltcGwgPSB2b2lkIDA7XG52YXIgR3V0ZV8xID0gcmVxdWlyZShcIi4uL0d1dGVcIik7XG52YXIgQXVkaW9Db250ZXh0O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG59XG52YXIgQVVESU9fQ09OVEVYVDtcbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKEd1dGVfMS5pc011c2ljT24oKSkge1xuICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5wbGF5KFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnZvbHVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XG59XG52YXIgU291bmRJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNvdW5kSW1wbCh1cmwsIG11c2ljKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudm9sdW1lID0gMTtcbiAgICAgICAgdGhpcy5tdXNpYyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5tdXNpYyA9IG11c2ljO1xuICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcS5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhcnJheUJ1ZmZlciA9IHJlcS5yZXNwb25zZTtcbiAgICAgICAgICAgIGlmIChhcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIF90aGlzLmRhdGEgPSBhcnJheUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBfdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLnRyeUxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxLnNlbmQobnVsbCk7XG4gICAgfVxuICAgIFNvdW5kSW1wbC5wcm90b3R5cGUudHJ5TG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKEFVRElPX0NPTlRFWFQgJiYgdGhpcy5kYXRhKSB7XG4gICAgICAgICAgICBBVURJT19DT05URVhULmRlY29kZUF1ZGlvRGF0YSh0aGlzLmRhdGEsIGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID09PSBfdGhpcykge1xuICAgICAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsYXkoX3RoaXMudm9sdW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZSkgeyBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBsb2FkOiBcIiArIF90aGlzLnVybCk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTb3VuZEltcGwucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghQVVESU9fQ09OVEVYVCkge1xuICAgICAgICAgICAgQVVESU9fQ09OVEVYVCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgICAgIEFVRElPX0NPTlRFWFQucmVzdW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cnlMb2FkKCk7XG4gICAgfTtcbiAgICBTb3VuZEltcGwucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAodm9sdW1lKSB7XG4gICAgICAgIHRoaXMudm9sdW1lID0gdm9sdW1lO1xuICAgICAgICBpZiAoIXRoaXMuYnVmZmVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgICAgICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID0gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDKSB7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgPSB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm11c2ljICYmICFHdXRlXzEuaXNNdXNpY09uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghR3V0ZV8xLmlzU291bmRPbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb3VyY2UgPSBBVURJT19DT05URVhULmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICB0aGlzLnNvdXJjZS5idWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy5nYWluID0gQVVESU9fQ09OVEVYVC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5nYWluKTtcbiAgICAgICAgdGhpcy5nYWluLmNvbm5lY3QoQVVESU9fQ09OVEVYVC5kZXN0aW5hdGlvbik7XG4gICAgICAgIGlmICh0aGlzLm11c2ljKSB7XG4gICAgICAgICAgICB0aGlzLmdhaW4uZ2Fpbi52YWx1ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvdXJjZS5zdGFydCgwKTtcbiAgICAgICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHZvbHVtZSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSArIDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYWluLmdhaW4udmFsdWUgPSB2b2x1bWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNvdW5kSW1wbC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKDAsIEFVRElPX0NPTlRFWFQuY3VycmVudFRpbWUgKyAzKTtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvdXJjZV8xID0gdGhpcy5zb3VyY2U7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBTb3VyY2VfMS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfSwgNDAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTb3VuZEltcGw7XG59KCkpO1xuZXhwb3J0cy5Tb3VuZEltcGwgPSBTb3VuZEltcGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGlsZXNldEltcGwgPSB2b2lkIDA7XG52YXIgVGlsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaWxlKGNhbnZhcywgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgICBUaWxlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCwgeCwgeSkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9O1xuICAgIFRpbGUucHJvdG90eXBlLmRyYXdTY2FsZWQgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBUaWxlLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgcmV0dXJuIFRpbGU7XG59KCkpO1xudmFyIFRpbGVzZXRJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbGVzZXRJbXBsKHVybCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCBzY2FsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc2NhbGUgPT09IHZvaWQgMCkgeyBzY2FsZSA9IDE7IH1cbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iaXRtYXBzID0gW107XG4gICAgICAgIHRoaXMuc2NhbmxpbmUgPSAwO1xuICAgICAgICB0aGlzLnRpbGVDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudGludHMgPSB7fTtcbiAgICAgICAgdGhpcy5vbkxvYWRlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgdGlsZVdpZHRoICo9IHNjYWxlO1xuICAgICAgICB0aWxlSGVpZ2h0ICo9IHNjYWxlO1xuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IHRpbGVXaWR0aDtcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gdGlsZUhlaWdodDtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnNjYWxlZChzY2FsZSk7XG4gICAgICAgICAgICBpZiAoX3RoaXMudHJhbnNmb3JtZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zY2FubGluZSA9IE1hdGguZmxvb3IoX3RoaXMudHJhbnNmb3JtZWQud2lkdGggLyB0aWxlV2lkdGgpO1xuICAgICAgICAgICAgICAgIHZhciBkZXB0aCA9IE1hdGguZmxvb3IoX3RoaXMudHJhbnNmb3JtZWQuaGVpZ2h0IC8gdGlsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgX3RoaXMudGlsZUNvdW50ID0gZGVwdGggKiBfdGhpcy5zY2FubGluZTtcbiAgICAgICAgICAgICAgICAvLyBjdXQgdGhlIGltYWdlIGludG8gcGllY2VzXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBkZXB0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgX3RoaXMuc2NhbmxpbmU7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYml0bWFwcy5wdXNoKG5ldyBUaWxlKF90aGlzLnRyYW5zZm9ybWVkLCB4ICogdGlsZVdpZHRoLCB5ICogdGlsZUhlaWdodCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5vbkxvYWRlZCgpO1xuICAgICAgICAgICAgX3RoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB1cmw7XG4gICAgfVxuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5nZXRUaWxlc0Fjcm9zcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbmxpbmU7XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuc2NhbGVkID0gZnVuY3Rpb24gKHNjYWxlKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKGN0eCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmltYWdlLndpZHRoICogc2NhbGU7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQgKiBzY2FsZTtcbiAgICAgICAgICAgIGN0eC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGN0eC5tb3pJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtZWQgPSBjYW52YXM7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5nZXRUaWxlV2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVXaWR0aDtcbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5nZXRUaWxlSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlSGVpZ2h0O1xuICAgIH07XG4gICAgVGlsZXNldEltcGwucHJvdG90eXBlLmdldFRpbGVDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZUNvdW50O1xuICAgIH07XG4gICAgVGlsZXNldEltcGwucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuZ2V0VGlsZSA9IGZ1bmN0aW9uICh0aWxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJpdG1hcHNbdGlsZV07XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuZ2V0VGludGVkVGlsZSA9IGZ1bmN0aW9uICh0aWxlLCB0aW50TmFtZSwgdGludCkge1xuICAgICAgICB2YXIgeCA9IHRpbGUgJSB0aGlzLnNjYW5saW5lO1xuICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IodGlsZSAvIHRoaXMuc2NhbmxpbmUpO1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy50aW50c1t0aW50TmFtZV07XG4gICAgICAgIGlmICgoIWNhbnZhcykgJiYgKHRoaXMudHJhbnNmb3JtZWQpKSB7XG4gICAgICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy50cmFuc2Zvcm1lZC53aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLnRyYW5zZm9ybWVkLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMudGludHNbdGludE5hbWVdID0gY2FudmFzO1xuICAgICAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnRyYW5zZm9ybWVkLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpZC5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxlYXZlIGJsYWNrIGFsb25lXG4gICAgICAgICAgICAgICAgICAgIGlkLmRhdGFbaV0gPSBNYXRoLmZsb29yKGlkLmRhdGFbaV0gKiB0aW50WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgaWQuZGF0YVtpICsgMV0gPSBNYXRoLmZsb29yKGlkLmRhdGFbaSArIDFdICogdGludFsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGlkLmRhdGFbaSArIDJdID0gTWF0aC5mbG9vcihpZC5kYXRhW2kgKyAyXSAqIHRpbnRbMl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKGlkLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFRpbGUoY2FudmFzLCB4ICogdGhpcy50aWxlV2lkdGgsIHkgKiB0aGlzLnRpbGVIZWlnaHQsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQpO1xuICAgIH07XG4gICAgcmV0dXJuIFRpbGVzZXRJbXBsO1xufSgpKTtcbmV4cG9ydHMuVGlsZXNldEltcGwgPSBUaWxlc2V0SW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BU3RhclBhdGhGaW5kZXIgPSB2b2lkIDA7XG52YXIgTWFwTm9kZV8xID0gcmVxdWlyZShcIi4vTWFwTm9kZVwiKTtcbnZhciBQYXRoXzEgPSByZXF1aXJlKFwiLi9QYXRoXCIpO1xudmFyIEFTdGFyUGF0aEZpbmRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBU3RhclBhdGhGaW5kZXIobWFwKSB7XG4gICAgICAgIHRoaXMub2JqZWN0UG9vbCA9IFtdO1xuICAgICAgICB0aGlzLm9wZW5MaXN0ID0gW107XG4gICAgICAgIHRoaXMucGF0aEZpbmRDb3VudGVyID0gMTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1hcC5nZXRNYXBXaWR0aCgpO1xuICAgICAgICB0aGlzLmhlaWdodCA9IG1hcC5nZXRNYXBIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMub3BlbiA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgdmFyIGMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNTsgaisrKSB7XG4gICAgICAgICAgICAgICAgby5wdXNoKDApO1xuICAgICAgICAgICAgICAgIGMucHVzaCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub3Blbi5wdXNoKG8pO1xuICAgICAgICAgICAgdGhpcy5jbG9zZWQucHVzaChjKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBU3RhclBhdGhGaW5kZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3Blbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UG9vbC5wdXNoKHRoaXMub3Blbkxpc3RbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3Blbkxpc3QgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5wYXRoRmluZENvdW50ZXIrKztcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuZ2VuZXJhdGVQYXRoID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBub2RlO1xuICAgICAgICB2YXIgcGF0aCA9IG5ldyBQYXRoXzEuUGF0aCgpO1xuICAgICAgICB3aGlsZSAoY3VycmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBwYXRoLmFkZChjdXJyZW50LngsIGN1cnJlbnQueSk7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbiAgICBBU3RhclBhdGhGaW5kZXIucHJvdG90eXBlLmJsb2NrZWQgPSBmdW5jdGlvbiAoc3gsIHN5LCB4LCB5KSB7XG4gICAgICAgIHZhciBpZ25vcmVBY3RvcnMgPSB0aGlzLmlnbm9yZUZpbmFsT2NjdXBhdGlvbiAmJiB0aGlzLmF0VGFyZ2V0KHgsIHkpO1xuICAgICAgICBpZiAoIXRoaXMubWFwLmxvY2F0aW9uRGlzY292ZXJlZCh4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWFwLmJsb2NrZWQodGhpcy5tb3ZlciwgbnVsbCwgc3gsIHN5LCB4LCB5LCBpZ25vcmVBY3RvcnMsIHRoaXMuYXRUYXJnZXQoeCwgeSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBBU3RhclBhdGhGaW5kZXIucHJvdG90eXBlLmF0VGFyZ2V0ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgZm9yICh2YXIgeHMgPSAwOyB4cyA8IHRoaXMubW92ZXIuZ2V0VGlsZXNXaWR0aCgpOyB4cysrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB5cyA9IDA7IHlzIDwgdGhpcy5tb3Zlci5nZXRUaWxlc0hlaWdodCgpOyB5cysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh4ICsgeHMgPT0gdGhpcy50eCkgJiYgKHkgKyB5cyA9PSB0aGlzLnR5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5maW5kUGF0aCA9IGZ1bmN0aW9uIChtb3ZlciwgdHgsIHR5LCBtYXgsIGlnbm9yZUZpbmFsT2NjdXBhdGlvbiwgcnVuQXdheSkge1xuICAgICAgICB0eCA9IE1hdGguZmxvb3IodHgpO1xuICAgICAgICB0eSA9IE1hdGguZmxvb3IodHkpO1xuICAgICAgICB0aGlzLm1heCA9IG1heDtcbiAgICAgICAgdGhpcy5pZ25vcmVGaW5hbE9jY3VwYXRpb24gPSBpZ25vcmVGaW5hbE9jY3VwYXRpb247XG4gICAgICAgIHRoaXMubW92ZXIgPSBtb3ZlcjtcbiAgICAgICAgdGhpcy50eCA9IHR4O1xuICAgICAgICB0aGlzLnR5ID0gdHk7XG4gICAgICAgIGlmICh0aGlzLmJsb2NrZWQodHgsIHR5LCB0eCwgdHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYWRkTG9jYXRpb24obnVsbCwgTWF0aC5mbG9vcihtb3Zlci5nZXRUaWxlTWFwWCgpKSwgTWF0aC5mbG9vcihtb3Zlci5nZXRUaWxlTWFwWSgpKSk7XG4gICAgICAgIHdoaWxlICh0aGlzLm9wZW5MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBiZXN0ID0gdGhpcy5vcGVuTGlzdFswXTtcbiAgICAgICAgICAgIHRoaXMub3Blbkxpc3Quc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgLy8gaWYgYmVzdCBpcyB0aGUgdGFyZ2V0IHRoZW4gd2UndmUgZm91bmQgaXQhXG4gICAgICAgICAgICBpZiAodGhpcy5hdFRhcmdldChiZXN0LngsIGJlc3QueSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVBhdGgoYmVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkZExvY2F0aW9uKGJlc3QsIGJlc3QueCArIDEsIGJlc3QueSk7XG4gICAgICAgICAgICB0aGlzLmFkZExvY2F0aW9uKGJlc3QsIGJlc3QueCAtIDEsIGJlc3QueSk7XG4gICAgICAgICAgICB0aGlzLmFkZExvY2F0aW9uKGJlc3QsIGJlc3QueCwgYmVzdC55ICsgMSk7XG4gICAgICAgICAgICB0aGlzLmFkZExvY2F0aW9uKGJlc3QsIGJlc3QueCwgYmVzdC55IC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBBU3RhclBhdGhGaW5kZXIucHJvdG90eXBlLmFkZExvY2F0aW9uID0gZnVuY3Rpb24gKHBhcmVudCwgeCwgeSkge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcih4KTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoeSk7XG4gICAgICAgIHZhciBzeCA9IHg7XG4gICAgICAgIHZhciBzeSA9IHk7XG4gICAgICAgIHZhciBkaXIgPSBBU3RhclBhdGhGaW5kZXIuTk9ORTtcbiAgICAgICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBzeCA9IHBhcmVudC54O1xuICAgICAgICAgICAgc3kgPSBwYXJlbnQueTtcbiAgICAgICAgICAgIGlmIChzeSArIDEgPT0geSkge1xuICAgICAgICAgICAgICAgIGRpciA9IEFTdGFyUGF0aEZpbmRlci5OT1JUSF9UT19TT1VUSDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzeSAtIDEgPT0geSkge1xuICAgICAgICAgICAgICAgIGRpciA9IEFTdGFyUGF0aEZpbmRlci5TT1VUSF9UT19OT1JUSDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzeCArIDEgPT0geCkge1xuICAgICAgICAgICAgICAgIGRpciA9IEFTdGFyUGF0aEZpbmRlci5XRVNUX1RPX0VBU1Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3ggLSAxID09IHgpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBBU3RhclBhdGhGaW5kZXIuRUFTVF9UT19XRVNUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5tYXAudmFsaWRMb2NhdGlvbih4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGl0J3MgaW4gdGhlIG9wZW4gbGlzdCBpZ25vcmVcbiAgICAgICAgaWYgKHRoaXMub3Blblt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9PSB0aGlzLnBhdGhGaW5kQ291bnRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZFt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9PSB0aGlzLnBhdGhGaW5kQ291bnRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGl0J3MgYmxvY2tlZCBmb3IgYW55IHJlYXNvbiwgYWRkIGl0IHRvIHRoZSBjbG9zZWRcbiAgICAgICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50LmRlcHRoID4gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlZFt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubWFwLmxvY2F0aW9uRGlzY292ZXJlZCh4LCB5KSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZWRbeCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPSB0aGlzLnBhdGhGaW5kQ291bnRlcjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ibG9ja2VkKHN4LCBzeSwgeCwgeSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID0gdGhpcy5wYXRoRmluZENvdW50ZXI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3RoZXJ3aXNlIGl0J3MgYSBwb3NzaWJsZSBzdGVwIGFkZCBpdCB0byB0aGUgb3BlblxuICAgICAgICB0aGlzLm9wZW5beCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPSB0aGlzLnBhdGhGaW5kQ291bnRlcjtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmNyZWF0ZU1hcE5vZGUoeCwgeSwgcGFyZW50LCB0aGlzLmdldEhldXJpc3RpYyh4LCB5KSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcGVuTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLm9wZW5MaXN0W2ldO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaCA+IG5vZGUuaCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3Blbkxpc3Quc3BsaWNlKGksIDAsIG5vZGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBubyB3aGVyZSBlbHNlIGFkZCBpdCBhdCB0aGUgZW5kXG4gICAgICAgIHRoaXMub3Blbkxpc3QucHVzaChub2RlKTtcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuZ2V0SGV1cmlzdGljID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgLy8gZGlzdGFuY2Ugc3F1YXJlZFxuICAgICAgICB2YXIgZHggPSBNYXRoLmFicyh0aGlzLnR4IC0geCk7XG4gICAgICAgIHZhciBkeSA9IE1hdGguYWJzKHRoaXMudHkgLSB5KTtcbiAgICAgICAgcmV0dXJuIChkeCAqIGR4KSArIChkeSAqIGR5KTtcbiAgICB9O1xuICAgIC8vIG9iamVjdCBwb29sIGFjY2Vzc29yIC0gZnJlZSBpcyBkb25lIGluIGJ1bGtcbiAgICBBU3RhclBhdGhGaW5kZXIucHJvdG90eXBlLmNyZWF0ZU1hcE5vZGUgPSBmdW5jdGlvbiAoeCwgeSwgcGFyZW50LCBoKSB7XG4gICAgICAgIGlmICh0aGlzLm9iamVjdFBvb2wubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHZhciBuID0gbmV3IE1hcE5vZGVfMS5NYXBOb2RlKCk7XG4gICAgICAgICAgICB0aGlzLm9iamVjdFBvb2wucHVzaChuKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMub2JqZWN0UG9vbFswXTtcbiAgICAgICAgdGhpcy5vYmplY3RQb29sLnNwbGljZSgwLCAxKTtcbiAgICAgICAgbm9kZS54ID0geDtcbiAgICAgICAgbm9kZS55ID0geTtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIG5vZGUuaCA9IGg7XG4gICAgICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5kZXB0aCA9IHBhcmVudC5kZXB0aCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmRlcHRoID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5OT1JUSF9UT19TT1VUSCA9IDA7XG4gICAgQVN0YXJQYXRoRmluZGVyLkVBU1RfVE9fV0VTVCA9IDE7XG4gICAgQVN0YXJQYXRoRmluZGVyLlNPVVRIX1RPX05PUlRIID0gMjtcbiAgICBBU3RhclBhdGhGaW5kZXIuV0VTVF9UT19FQVNUID0gMztcbiAgICBBU3RhclBhdGhGaW5kZXIuTk9ORSA9IDQ7XG4gICAgcmV0dXJuIEFTdGFyUGF0aEZpbmRlcjtcbn0oKSk7XG5leHBvcnRzLkFTdGFyUGF0aEZpbmRlciA9IEFTdGFyUGF0aEZpbmRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYXBOb2RlID0gdm9pZCAwO1xudmFyIE1hcE5vZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwTm9kZSgpIHtcbiAgICB9XG4gICAgcmV0dXJuIE1hcE5vZGU7XG59KCkpO1xuZXhwb3J0cy5NYXBOb2RlID0gTWFwTm9kZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYXRoID0gdm9pZCAwO1xudmFyIFN0ZXBfMSA9IHJlcXVpcmUoXCIuL1N0ZXBcIik7XG52YXIgUGF0aCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQYXRoKCkge1xuICAgICAgICB0aGlzLnN0ZXBzID0gbmV3IEFycmF5KCk7XG4gICAgfVxuICAgIFBhdGgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMuc3RlcHMuc3BsaWNlKDAsIDAsIG5ldyBTdGVwXzEuU3RlcCh4LCB5KSk7XG4gICAgfTtcbiAgICBQYXRoLnByb3RvdHlwZS5nZXRMYXN0U3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RlcHNbdGhpcy5zdGVwcy5sZW5ndGggLSAxXTtcbiAgICB9O1xuICAgIFBhdGgucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuc3RlcHNbMF07XG4gICAgICAgIHRoaXMuc3RlcHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgcmV0dXJuIFBhdGg7XG59KCkpO1xuZXhwb3J0cy5QYXRoID0gUGF0aDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdGVwID0gdm9pZCAwO1xudmFyIFN0ZXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RlcCh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuICAgIHJldHVybiBTdGVwO1xufSgpKTtcbmV4cG9ydHMuU3RlcCA9IFN0ZXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxEVEtXb3JsZCA9IHZvaWQgMDtcbnZhciBNYXBFbnRpdHlfMSA9IHJlcXVpcmUoXCIuL01hcEVudGl0eVwiKTtcbnZhciBNYXBMYXllcl8xID0gcmVxdWlyZShcIi4vTWFwTGF5ZXJcIik7XG52YXIgTWFwTGV2ZWxfMSA9IHJlcXVpcmUoXCIuL01hcExldmVsXCIpO1xudmFyIE1hcFdvcmxkXzEgPSByZXF1aXJlKFwiLi9NYXBXb3JsZFwiKTtcbnZhciBMRFRLV29ybGQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExEVEtXb3JsZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMRFRLV29ybGQoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTERUS1dvcmxkLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgTERUS1dvcmxkLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgdGhpcy5ncmlkU2l6ZSA9IGpzb24uZGVmYXVsdEdyaWRTaXplO1xuICAgICAgICB2YXIgdGlsZXNldCA9IGpzb24uZGVmcy50aWxlc2V0c1swXTtcbiAgICAgICAgdGhpcy50aWxlc2V0U2NhbmxpbmUgPSB0aWxlc2V0LnB4V2lkIC8gdGlsZXNldC50aWxlR3JpZFNpemU7XG4gICAgICAgIHRoaXMudGlsZXNldFNpemUgPSB0aWxlc2V0LnRpbGVHcmlkU2l6ZTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGpzb24ubGV2ZWxzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGxldmVsRGF0YSA9IF9hW19pXTtcbiAgICAgICAgICAgIHZhciBsZXZlbCA9IG5ldyBNYXBMZXZlbF8xLk1hcExldmVsKHRoaXMsIGxldmVsRGF0YS5pZGVudGlmaWVyKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSBsZXZlbERhdGEuZmllbGRJbnN0YW5jZXM7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkSW5zdGFuY2UgPSBfY1tfYl07XG4gICAgICAgICAgICAgICAgbGV2ZWwuZmllbGRzW2ZpZWxkSW5zdGFuY2UuX19pZGVudGlmaWVyXSA9IGZpZWxkSW5zdGFuY2UuX192YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIF9kID0gMCwgX2UgPSBsZXZlbERhdGEubGF5ZXJJbnN0YW5jZXM7IF9kIDwgX2UubGVuZ3RoOyBfZCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxheWVyRGF0YSA9IF9lW19kXTtcbiAgICAgICAgICAgICAgICBpZiAobGF5ZXJEYXRhLl9fdHlwZSA9PT0gXCJFbnRpdGllc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9mID0gMCwgX2cgPSBsYXllckRhdGEuZW50aXR5SW5zdGFuY2VzOyBfZiA8IF9nLmxlbmd0aDsgX2YrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVudGl0eURhdGEgPSBfZ1tfZl07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gbmV3IE1hcEVudGl0eV8xLk1hcEVudGl0eShsZXZlbCwgZW50aXR5RGF0YS5weFswXSAvIGxheWVyRGF0YS5fX2dyaWRTaXplLCBlbnRpdHlEYXRhLnB4WzFdIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUsIGVudGl0eURhdGEud2lkdGggLyBsYXllckRhdGEuX19ncmlkU2l6ZSwgZW50aXR5RGF0YS5oZWlnaHQgLyBsYXllckRhdGEuX19ncmlkU2l6ZSwgZW50aXR5RGF0YS5fX2lkZW50aWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2ggPSAwLCBfaiA9IGVudGl0eURhdGEuZmllbGRJbnN0YW5jZXM7IF9oIDwgX2oubGVuZ3RoOyBfaCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkSW5zdGFuY2UgPSBfaltfaF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmZpZWxkc1tmaWVsZEluc3RhbmNlLl9faWRlbnRpZmllcl0gPSBmaWVsZEluc3RhbmNlLl9fdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbC5lbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXllciA9IG5ldyBNYXBMYXllcl8xLk1hcExheWVyKGxldmVsLCBsYXllckRhdGEuX19pZGVudGlmaWVyLCBsYXllckRhdGEuX19jV2lkLCBsYXllckRhdGEuX19jSGVpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjYW5saW5lID0gbGV2ZWwud29ybGQudGlsZXNldFNjYW5saW5lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGlsZVNpemUgPSBsZXZlbC53b3JsZC50aWxlc2V0U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2sgPSAwLCBfbCA9IGxheWVyRGF0YS5ncmlkVGlsZXM7IF9rIDwgX2wubGVuZ3RoOyBfaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGlsZSA9IF9sW19rXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gTWF0aC5mbG9vcih0aWxlLnB4WzBdIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKHRpbGUucHhbMV0gLyBsYXllckRhdGEuX19ncmlkU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zSW5kZXggPSB4ICsgKHkgKiBsYXllci53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHggPSBNYXRoLmZsb29yKHRpbGUuc3JjWzBdIC8gdGlsZVNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5ID0gTWF0aC5mbG9vcih0aWxlLnNyY1sxXSAvIHRpbGVTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aWxlSW5kZXggPSAodHkgKiBzY2FubGluZSkgKyB0eDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLnRpbGVzW3Bvc0luZGV4XSA9IHRpbGVJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwubGF5ZXJzLnNwbGljZSgwLCAwLCBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsLmxheWVyQnlOYW1lW2xheWVyLm5hbWVdID0gbGF5ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxldmVsLmxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV2ZWwud2lkdGggPSBsZXZlbC5sYXllcnNbMF0ud2lkdGg7XG4gICAgICAgICAgICAgICAgbGV2ZWwuaGVpZ2h0ID0gbGV2ZWwubGF5ZXJzWzBdLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldmVsLndpZHRoID0gbGV2ZWxEYXRhLnB4V2lkIC8gdGhpcy5ncmlkU2l6ZTtcbiAgICAgICAgICAgICAgICBsZXZlbC5oZWlnaHQgPSBsZXZlbERhdGEucHhIZWkgLyB0aGlzLmdyaWRTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sZXZlbHNbbGV2ZWwuaWRdID0gbGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBMRFRLV29ybGQ7XG59KE1hcFdvcmxkXzEuTWFwV29ybGQpKTtcbmV4cG9ydHMuTERUS1dvcmxkID0gTERUS1dvcmxkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hcEVudGl0eSA9IHZvaWQgMDtcbnZhciBNYXBFbnRpdHkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwRW50aXR5KGxldmVsLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0eXBlKSB7XG4gICAgICAgIHRoaXMuZmllbGRzID0ge307XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIE1hcEVudGl0eTtcbn0oKSk7XG5leHBvcnRzLk1hcEVudGl0eSA9IE1hcEVudGl0eTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYXBMYXllciA9IHZvaWQgMDtcbnZhciBNYXBMYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBMYXllcihsZXZlbCwgbmFtZSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMudGlsZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy50aWxlcy5wdXNoKDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hcExheWVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoeCwgeSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCh4IDwgMCkgfHwgKHkgPCAwKSB8fCAoeCA+PSB0aGlzLndpZHRoKSB8fCAoeSA+PSB0aGlzLmhlaWdodCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9zSW5kZXggPSB4ICsgKHkgKiB0aGlzLndpZHRoKTtcbiAgICAgICAgdGhpcy50aWxlc1twb3NJbmRleF0gPSB2YWx1ZTtcbiAgICB9O1xuICAgIE1hcExheWVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICBpZiAoKHggPCAwKSB8fCAoeSA8IDApIHx8ICh4ID49IHRoaXMud2lkdGgpIHx8ICh5ID49IHRoaXMuaGVpZ2h0KSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvc0luZGV4ID0geCArICh5ICogdGhpcy53aWR0aCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVzW3Bvc0luZGV4XTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBMYXllcjtcbn0oKSk7XG5leHBvcnRzLk1hcExheWVyID0gTWFwTGF5ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFwTGV2ZWwgPSB2b2lkIDA7XG52YXIgTWFwTGV2ZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwTGV2ZWwod29ybGQsIGlkKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgICAgIHRoaXMubGF5ZXJCeU5hbWUgPSB7fTtcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IFtdO1xuICAgICAgICB0aGlzLmZpZWxkcyA9IHt9O1xuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG4gICAgTWFwTGV2ZWwucHJvdG90eXBlLmdldEZpcnN0RW50aXR5T2ZUeXBlID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuZW50aXRpZXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gX2FbX2ldO1xuICAgICAgICAgICAgaWYgKGVudGl0eS50eXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBNYXBMZXZlbDtcbn0oKSk7XG5leHBvcnRzLk1hcExldmVsID0gTWFwTGV2ZWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFwV29ybGQgPSB2b2lkIDA7XG52YXIgTWFwV29ybGQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwV29ybGQoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxzID0ge307XG4gICAgICAgIHRoaXMuZ3JpZFNpemUgPSAwO1xuICAgICAgICB0aGlzLnRpbGVzZXRTY2FubGluZSA9IDA7XG4gICAgICAgIHRoaXMudGlsZXNldFNpemUgPSAwO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gTWFwV29ybGQ7XG59KCkpO1xuZXhwb3J0cy5NYXBXb3JsZCA9IE1hcFdvcmxkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYXBFbnRpdHkgPSBleHBvcnRzLk1hcExheWVyID0gZXhwb3J0cy5NYXBMZXZlbCA9IGV4cG9ydHMuTWFwV29ybGQgPSBleHBvcnRzLkxEVEtXb3JsZCA9IGV4cG9ydHMuU3RlcCA9IGV4cG9ydHMuUGF0aCA9IGV4cG9ydHMuQVN0YXJQYXRoRmluZGVyID0gZXhwb3J0cy5LZXlzID0gZXhwb3J0cy5CTFVFID0gZXhwb3J0cy5SRUQgPSBleHBvcnRzLkdSRUVOID0gZXhwb3J0cy5CTEFDSyA9IGV4cG9ydHMuV0hJVEUgPSBleHBvcnRzLnNldFNvdW5kT24gPSBleHBvcnRzLnNldE11c2ljT24gPSBleHBvcnRzLmlzU291bmRPbiA9IGV4cG9ydHMuaXNNdXNpY09uID0gZXhwb3J0cy5zdGFydEdhbWUgPSB2b2lkIDA7XG52YXIgR3V0ZV8xID0gcmVxdWlyZShcIi4vR3V0ZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0YXJ0R2FtZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLnN0YXJ0R2FtZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzTXVzaWNPblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLmlzTXVzaWNPbjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzU291bmRPblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLmlzU291bmRPbjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNldE11c2ljT25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEd1dGVfMS5zZXRNdXNpY09uOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2V0U291bmRPblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLnNldFNvdW5kT247IH0gfSk7XG52YXIgR3JhcGhpY3NfMSA9IHJlcXVpcmUoXCIuL0dyYXBoaWNzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiV0hJVEVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdyYXBoaWNzXzEuV0hJVEU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJCTEFDS1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3JhcGhpY3NfMS5CTEFDSzsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdSRUVOXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHcmFwaGljc18xLkdSRUVOOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUkVEXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHcmFwaGljc18xLlJFRDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJMVUVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdyYXBoaWNzXzEuQkxVRTsgfSB9KTtcbnZhciBLZXlzXzEgPSByZXF1aXJlKFwiLi9LZXlzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiS2V5c1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gS2V5c18xLktleXM7IH0gfSk7XG52YXIgQVN0YXJQYXRoRmluZGVyXzEgPSByZXF1aXJlKFwiLi9wYXRoL0FTdGFyUGF0aEZpbmRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFTdGFyUGF0aEZpbmRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQVN0YXJQYXRoRmluZGVyXzEuQVN0YXJQYXRoRmluZGVyOyB9IH0pO1xudmFyIFBhdGhfMSA9IHJlcXVpcmUoXCIuL3BhdGgvUGF0aFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlBhdGhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFBhdGhfMS5QYXRoOyB9IH0pO1xudmFyIFN0ZXBfMSA9IHJlcXVpcmUoXCIuL3BhdGgvU3RlcFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlN0ZXBcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFN0ZXBfMS5TdGVwOyB9IH0pO1xudmFyIExEVEtXb3JsZF8xID0gcmVxdWlyZShcIi4vdGlsZW1hcHMvTERUS1dvcmxkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTERUS1dvcmxkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBMRFRLV29ybGRfMS5MRFRLV29ybGQ7IH0gfSk7XG52YXIgTWFwV29ybGRfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL01hcFdvcmxkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFwV29ybGRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcFdvcmxkXzEuTWFwV29ybGQ7IH0gfSk7XG52YXIgTWFwTGV2ZWxfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL01hcExldmVsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFwTGV2ZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcExldmVsXzEuTWFwTGV2ZWw7IH0gfSk7XG52YXIgTWFwTGF5ZXJfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL01hcExheWVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFwTGF5ZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcExheWVyXzEuTWFwTGF5ZXI7IH0gfSk7XG52YXIgTWFwRW50aXR5XzEgPSByZXF1aXJlKFwiLi90aWxlbWFwcy9NYXBFbnRpdHlcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNYXBFbnRpdHlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcEVudGl0eV8xLk1hcEVudGl0eTsgfSB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=