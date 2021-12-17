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
    GameLoop.prototype.mouseWheelHandler = function (delta) {
        this.game.onMouseWheel(this, delta);
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
        this.game.onMouseDown(this, x, y, id);
    };
    GameLoop.prototype.mouseUpHandler = function (x, y, id) {
        if (id === void 0) { id = 0; }
        this.initResourcesOnFirstClick();
        var canvas = this.graphics.canvas;
        var width = canvas.clientWidth;
        var height = canvas.clientHeight;
        x = Math.floor((x / width) * canvas.width);
        y = Math.floor((y / height) * canvas.height);
        this.game.onMouseUp(this, x, y, id);
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
        window.addEventListener("contextmenu", function (event) {
            event.stopPropagation();
            event.preventDefault();
            return false;
        });
        this.graphics.canvas.addEventListener("wheel", function (event) {
            try {
                _this.mouseWheelHandler(event.deltaY);
            }
            catch (e) {
                console.log(e);
            }
        });
        this.graphics.canvas.addEventListener("mousedown", function (event) {
            try {
                _this.mouseDownHandler(event.offsetX, event.offsetY, event.button);
                event.preventDefault();
                event.stopPropagation();
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
                    _this.mouseUpHandler(event.offsetX, event.offsetY, event.button);
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
    GameLoop.prototype.isTablet = function () {
        if (!this.isPhone() && this.isIOS()) {
            return true;
        }
        var isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(navigator.userAgent.toLowerCase());
        return isTablet;
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
        return this.isIOS() && window.matchMedia("only screen and (max-width: 760px)").matches;
    };
    GameLoop.prototype.setSoundVolume = function (v) {
        SoundImpl_1.SoundImpl.setSoundVolume(v);
    };
    GameLoop.prototype.getSoundVolume = function () {
        return SoundImpl_1.SoundImpl.getSoundVolume();
    };
    GameLoop.prototype.setMusicVolume = function (v) {
        SoundImpl_1.SoundImpl.setMusicVolume(v);
    };
    GameLoop.prototype.getMusicVolume = function () {
        return SoundImpl_1.SoundImpl.getMusicVolume();
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
    if (Gute_1.isSoundOn()) {
        for (var _i = 0, _a = SoundImpl.CURRENT_LOOPS; _i < _a.length; _i++) {
            var loop = _a[_i];
            if (document.hidden) {
                loop.stop(false);
            }
            else {
                loop.play(loop.volume);
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
        this.looped = false;
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
    SoundImpl.setSoundVolume = function (v) {
        this.soundVolume = v;
        for (var _i = 0, _a = this.CURRENT_LOOPS; _i < _a.length; _i++) {
            var loop = _a[_i];
            loop.gain.gain.linearRampToValueAtTime(loop.volume * SoundImpl.soundVolume, AUDIO_CONTEXT.currentTime + 0.25);
        }
    };
    SoundImpl.getSoundVolume = function () {
        return this.soundVolume;
    };
    SoundImpl.setMusicVolume = function (v) {
        this.musicVolume = v;
        if (SoundImpl.CURRENT_MUSIC) {
            if (SoundImpl.CURRENT_MUSIC.gain) {
                SoundImpl.CURRENT_MUSIC.gain.gain.linearRampToValueAtTime(SoundImpl.CURRENT_MUSIC.volume * SoundImpl.musicVolume, AUDIO_CONTEXT.currentTime + 0.25);
            }
        }
    };
    SoundImpl.getMusicVolume = function () {
        return this.musicVolume;
    };
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
    SoundImpl.prototype.play = function (volume, loop) {
        if (loop === void 0) { loop = false; }
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
        this.looped = false;
        if (this.music || loop) {
            this.gain.gain.value = 0;
            this.source.loop = true;
            this.looped = true;
        }
        this.source.start(0);
        if (this.music || loop) {
            this.gain.gain.linearRampToValueAtTime(volume * (loop ? SoundImpl.soundVolume : SoundImpl.musicVolume), AUDIO_CONTEXT.currentTime + 2);
        }
        else {
            this.gain.gain.value = volume * SoundImpl.soundVolume;
        }
        if (loop) {
            SoundImpl.CURRENT_LOOPS.push(this);
        }
    };
    SoundImpl.prototype.stop = function (remove) {
        var _this = this;
        if (remove === void 0) { remove = true; }
        if (this.source) {
            if (this.looped) {
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
        if (remove) {
            var index = SoundImpl.CURRENT_LOOPS.findIndex(function (a) { return a === _this; });
            if (index >= 0) {
                SoundImpl.CURRENT_LOOPS.splice(index, 1);
            }
        }
    };
    SoundImpl.CURRENT_LOOPS = [];
    SoundImpl.soundVolume = 1;
    SoundImpl.musicVolume = 1;
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
                    var avg = (id.data[i] + id.data[i + 1] + id.data[i + 2]) / 3;
                    id.data[i] = Math.floor(avg * tint[0]);
                    id.data[i + 1] = Math.floor(avg * tint[1]);
                    id.data[i + 2] = Math.floor(avg * tint[2]);
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
            level.worldX = levelData.worldX;
            level.worldY = levelData.worldY;
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
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    MapEntity.prototype.copy = function (level) {
        var result = new MapEntity(level, this.x, this.y, this.width, this.height, this.type);
        result.fields = __assign({}, this.fields);
        return result;
    };
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
    MapLayer.prototype.copy = function (level) {
        var result = new MapLayer(level, this.name, this.width, this.height);
        for (var i = 0; i < this.width * this.height; i++) {
            result.tiles[i] = this.tiles[i];
        }
        return result;
    };
    return MapLayer;
}());
exports.MapLayer = MapLayer;


/***/ }),

/***/ "./src/tilemaps/MapLevel.ts":
/*!**********************************!*\
  !*** ./src/tilemaps/MapLevel.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapLevel = void 0;
var MapWorld_1 = __webpack_require__(/*! ./MapWorld */ "./src/tilemaps/MapWorld.ts");
var MapLevel = /** @class */ (function () {
    function MapLevel(world, id) {
        this.layers = [];
        this.layerByName = {};
        this.entities = [];
        this.fields = {};
        this.worldX = 0;
        this.worldY = 0;
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
    MapLevel.prototype.copy = function (id) {
        var worldCopy = new MapWorld_1.MapWorld();
        worldCopy.gridSize = this.world.gridSize;
        worldCopy.loaded = this.world.loaded;
        worldCopy.tilesetScanline = this.world.tilesetScanline;
        worldCopy.tilesetSize = this.world.tilesetSize;
        var result = new MapLevel(worldCopy, id);
        result.width = this.width;
        result.height = this.height;
        result.worldX = this.worldX;
        result.worldY = this.worldY;
        result.fields = __assign({}, this.fields);
        for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
            var layer = _a[_i];
            var copy = layer.copy(result);
            result.layers.push(copy);
            result.layerByName[copy.name] = copy;
        }
        for (var _b = 0, _c = this.entities; _b < _c.length; _b++) {
            var entity = _c[_b];
            var copy = entity.copy(result);
            result.entities.push(entity);
        }
        return result;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0dyYXBoaWNzLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvR3V0ZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0tleXMudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL0JpdG1hcEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL0ZvbnRJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9HcmFwaGljc0ltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL1NvdW5kSW1wbC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL2ltcGwvVGlsZXNldEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9wYXRoL0FTdGFyUGF0aEZpbmRlci50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvTWFwTm9kZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvUGF0aC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvU3RlcC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL0xEVEtXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcEVudGl0eS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcExheWVyLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvdGlsZW1hcHMvTWFwTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy90aWxlbWFwcy9NYXBXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxZQUFZLEdBQUcsYUFBYSxHQUFHLFdBQVcsR0FBRyxhQUFhLEdBQUcsYUFBYTtBQUMxRSxhQUFhO0FBQ2IsYUFBYTtBQUNiLFdBQVc7QUFDWCxhQUFhO0FBQ2IsWUFBWTs7Ozs7Ozs7Ozs7QUNQQztBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxpQkFBaUIsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUI7QUFDbkcsbUJBQW1CLG1CQUFPLENBQUMsbURBQW1CO0FBQzlDLGlCQUFpQixtQkFBTyxDQUFDLCtDQUFpQjtBQUMxQyxxQkFBcUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDbEQsa0JBQWtCLG1CQUFPLENBQUMsaURBQWtCO0FBQzVDLG9CQUFvQixtQkFBTyxDQUFDLHFEQUFvQjtBQUNoRCxrQkFBa0IsbUJBQU8sQ0FBQyx5REFBc0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsa0JBQWtCLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxnQkFBZ0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SEFBNkgsbUJBQW1CLEVBQUU7QUFDbEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNwVlk7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsWUFBWTs7Ozs7Ozs7Ozs7QUN4QkM7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Qsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWtCOzs7Ozs7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Q0FBQyw2QkFBUTtBQUM3Qix3Q0FBdUMsQ0FBQyxxQ0FBcUMsb0JBQW9CLEVBQUUsRUFBRSxFQUFDO0FBQ3RHLHdCQUF3QixtQkFBTyxDQUFDLDZEQUF3QjtBQUN4RCxtREFBa0QsQ0FBQyxxQ0FBcUMsMENBQTBDLEVBQUUsRUFBRSxFQUFDO0FBQ3ZJLGFBQWEsbUJBQU8sQ0FBQyx1Q0FBYTtBQUNsQyx3Q0FBdUMsQ0FBQyxxQ0FBcUMsb0JBQW9CLEVBQUUsRUFBRSxFQUFDO0FBQ3RHLGFBQWEsbUJBQU8sQ0FBQyx1Q0FBYTtBQUNsQyx3Q0FBdUMsQ0FBQyxxQ0FBcUMsb0JBQW9CLEVBQUUsRUFBRSxFQUFDO0FBQ3RHLGtCQUFrQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNoRCw2Q0FBNEMsQ0FBQyxxQ0FBcUMsOEJBQThCLEVBQUUsRUFBRSxFQUFDO0FBQ3JILGlCQUFpQixtQkFBTyxDQUFDLHVEQUFxQjtBQUM5Qyw0Q0FBMkMsQ0FBQyxxQ0FBcUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFDO0FBQ2xILGlCQUFpQixtQkFBTyxDQUFDLHVEQUFxQjtBQUM5Qyw0Q0FBMkMsQ0FBQyxxQ0FBcUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFDO0FBQ2xILGlCQUFpQixtQkFBTyxDQUFDLHVEQUFxQjtBQUM5Qyw0Q0FBMkMsQ0FBQyxxQ0FBcUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFDO0FBQ2xILGtCQUFrQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNoRCw2Q0FBNEMsQ0FBQyxxQ0FBcUMsOEJBQThCLEVBQUUsRUFBRSxFQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3V0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndXRlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJMVUUgPSBleHBvcnRzLkdSRUVOID0gZXhwb3J0cy5SRUQgPSBleHBvcnRzLkJMQUNLID0gZXhwb3J0cy5XSElURSA9IHZvaWQgMDtcbmV4cG9ydHMuV0hJVEUgPSBcIndoaXRlXCI7XG5leHBvcnRzLkJMQUNLID0gXCJibGFja1wiO1xuZXhwb3J0cy5SRUQgPSBcInJlZFwiO1xuZXhwb3J0cy5HUkVFTiA9IFwiZ3JlZW5cIjtcbmV4cG9ydHMuQkxVRSA9IFwiYmx1ZVwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXJ0R2FtZSA9IGV4cG9ydHMuc2V0TXVzaWNPbiA9IGV4cG9ydHMuc2V0U291bmRPbiA9IGV4cG9ydHMuaXNNdXNpY09uID0gZXhwb3J0cy5pc1NvdW5kT24gPSB2b2lkIDA7XG52YXIgQml0bWFwSW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9CaXRtYXBJbXBsXCIpO1xudmFyIEZvbnRJbXBsXzEgPSByZXF1aXJlKFwiLi9pbXBsL0ZvbnRJbXBsXCIpO1xudmFyIEdyYXBoaWNzSW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9HcmFwaGljc0ltcGxcIik7XG52YXIgU291bmRJbXBsXzEgPSByZXF1aXJlKFwiLi9pbXBsL1NvdW5kSW1wbFwiKTtcbnZhciBUaWxlc2V0SW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9UaWxlc2V0SW1wbFwiKTtcbnZhciBMRFRLV29ybGRfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL0xEVEtXb3JsZFwiKTtcbnZhciBHQU1FX0xPT1A7XG52YXIgU09VTkRfT04gPSB0cnVlO1xudmFyIE1VU0lDX09OID0gdHJ1ZTtcbmZ1bmN0aW9uIGlzU291bmRPbigpIHtcbiAgICByZXR1cm4gU09VTkRfT047XG59XG5leHBvcnRzLmlzU291bmRPbiA9IGlzU291bmRPbjtcbmZ1bmN0aW9uIGlzTXVzaWNPbigpIHtcbiAgICByZXR1cm4gTVVTSUNfT047XG59XG5leHBvcnRzLmlzTXVzaWNPbiA9IGlzTXVzaWNPbjtcbmZ1bmN0aW9uIHNldFNvdW5kT24ob24pIHtcbiAgICBTT1VORF9PTiA9IG9uO1xufVxuZXhwb3J0cy5zZXRTb3VuZE9uID0gc2V0U291bmRPbjtcbmZ1bmN0aW9uIHNldE11c2ljT24ob24pIHtcbiAgICBpZiAoIW9uICYmIE1VU0lDX09OKSB7XG4gICAgICAgIE1VU0lDX09OID0gZmFsc2U7XG4gICAgICAgIGlmIChTb3VuZEltcGxfMS5Tb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgICAgICAgU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvbiAmJiAhTVVTSUNfT04pIHtcbiAgICAgICAgTVVTSUNfT04gPSB0cnVlO1xuICAgICAgICBpZiAoU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICAgIFNvdW5kSW1wbF8xLlNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnBsYXkoU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMudm9sdW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuc2V0TXVzaWNPbiA9IHNldE11c2ljT247XG5mdW5jdGlvbiBzdGFydEdhbWUoZ2FtZSkge1xuICAgIEdBTUVfTE9PUCA9IG5ldyBHYW1lTG9vcCgpLnN0YXJ0KGdhbWUpO1xufVxuZXhwb3J0cy5zdGFydEdhbWUgPSBzdGFydEdhbWU7XG52YXIgR2FtZUxvb3AgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2FtZUxvb3AoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gW107XG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5pbml0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmdldEdyYXBoaWNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaGljcztcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5yZXNvdXJjZXNSZW1haW5pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc291cmNlcy5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuICFyLmxvYWRlZDsgfSkubGVuZ3RoO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLnJlc291cmNlc1RvdGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXMubGVuZ3RoO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmFsbFJlc291cmNlc0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMucmVzb3VyY2VzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlID0gX2FbX2ldO1xuICAgICAgICAgICAgaWYgKCFyZXNvdXJjZS5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuaW5pdFJlc291cmNlc09uRmlyc3RDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFsbFJlc291cmNlc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMucmVzb3VyY2VzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciByZXNvdXJjZSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5pbml0T25GaXJzdENsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5tb3VzZU1vdmVIYW5kbGVyID0gZnVuY3Rpb24gKHgsIHksIGlkKSB7XG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKSB7IGlkID0gMDsgfVxuICAgICAgICB0aGlzLmluaXRSZXNvdXJjZXNPbkZpcnN0Q2xpY2soKTtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZ3JhcGhpY3MuY2FudmFzO1xuICAgICAgICBjYW52YXMuZm9jdXMoKTtcbiAgICAgICAgdmFyIHdpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoKHggLyB3aWR0aCkgKiBjYW52YXMud2lkdGgpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcigoeSAvIGhlaWdodCkgKiBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5nYW1lLm9uTW91c2VNb3ZlKHRoaXMsIHgsIHkpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLm1vdXNlV2hlZWxIYW5kbGVyID0gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5vbk1vdXNlV2hlZWwodGhpcywgZGVsdGEpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLm1vdXNlRG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSAwOyB9XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5ncmFwaGljcy5jYW52YXM7XG4gICAgICAgIGNhbnZhcy5mb2N1cygpO1xuICAgICAgICB2YXIgd2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgICB4ID0gTWF0aC5mbG9vcigoeCAvIHdpZHRoKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKCh5IC8gaGVpZ2h0KSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdhbWUub25Nb3VzZURvd24odGhpcywgeCwgeSwgaWQpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLm1vdXNlVXBIYW5kbGVyID0gZnVuY3Rpb24gKHgsIHksIGlkKSB7XG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKSB7IGlkID0gMDsgfVxuICAgICAgICB0aGlzLmluaXRSZXNvdXJjZXNPbkZpcnN0Q2xpY2soKTtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZ3JhcGhpY3MuY2FudmFzO1xuICAgICAgICB2YXIgd2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgICB4ID0gTWF0aC5mbG9vcigoeCAvIHdpZHRoKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKCh5IC8gaGVpZ2h0KSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdhbWUub25Nb3VzZVVwKHRoaXMsIHgsIHksIGlkKTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5rZXlEb3duSGFuZGxlciA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5pbml0UmVzb3VyY2VzT25GaXJzdENsaWNrKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5vbktleURvd24odGhpcywga2V5KTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5rZXlVcEhhbmRsZXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuZ2FtZS5vbktleVVwKHRoaXMsIGtleSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoZ2FtZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzSW1wbF8xLkdyYXBoaWNzSW1wbCgpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVjdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubW91c2VEb3duSGFuZGxlcih4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1vdXNlTW92ZUhhbmRsZXIoeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubW91c2VVcEhhbmRsZXIoMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBfdGhpcy5tb3VzZVdoZWVsSGFuZGxlcihldmVudC5kZWx0YVkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIF90aGlzLm1vdXNlRG93bkhhbmRsZXIoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSwgZXZlbnQuYnV0dG9uKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIF90aGlzLm1vdXNlTW92ZUhhbmRsZXIoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tb3VzZVVwSGFuZGxlcihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZLCBldmVudC5idXR0b24pO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgX3RoaXMua2V5RG93bkhhbmRsZXIoZXZlbnQuY29kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgX3RoaXMua2V5VXBIYW5kbGVyKGV2ZW50LmNvZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ2FtZS5pbml0KHRoaXMpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubG9vcCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZGVsdGEgPSAwO1xuICAgICAgICBpZiAodGhpcy5sYXN0RnJhbWUgIT09IDApIHtcbiAgICAgICAgICAgIGRlbHRhID0gbm93IC0gdGhpcy5sYXN0RnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSBub3c7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYXBwbHlGb250KCk7XG4gICAgICAgIHRoaXMuZ2FtZS51cGRhdGUodGhpcywgZGVsdGEpO1xuICAgICAgICB0aGlzLmdhbWUucmVuZGVyKHRoaXMsIHRoaXMuZ3JhcGhpY3MpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubG9vcCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkTXVzaWMgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBzb3VuZCA9IG5ldyBTb3VuZEltcGxfMS5Tb3VuZEltcGwodXJsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaChzb3VuZCk7XG4gICAgICAgIHJldHVybiBzb3VuZDtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkU291bmQgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBzb3VuZCA9IG5ldyBTb3VuZEltcGxfMS5Tb3VuZEltcGwodXJsLCBmYWxzZSk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2goc291bmQpO1xuICAgICAgICByZXR1cm4gc291bmQ7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZEJpdG1hcCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIGJpdG1hcCA9IG5ldyBCaXRtYXBJbXBsXzEuQml0bWFwSW1wbCh1cmwpO1xuICAgICAgICB0aGlzLnJlc291cmNlcy5wdXNoKGJpdG1hcCk7XG4gICAgICAgIHJldHVybiBiaXRtYXA7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZFNjYWxlZFRpbGVzZXQgPSBmdW5jdGlvbiAodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIHNjYWxlKSB7XG4gICAgICAgIHZhciB0aWxlc2V0ID0gbmV3IFRpbGVzZXRJbXBsXzEuVGlsZXNldEltcGwodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIHNjYWxlKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaCh0aWxlc2V0KTtcbiAgICAgICAgcmV0dXJuIHRpbGVzZXQ7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZFRpbGVzZXQgPSBmdW5jdGlvbiAodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpIHtcbiAgICAgICAgdmFyIHRpbGVzZXQgPSBuZXcgVGlsZXNldEltcGxfMS5UaWxlc2V0SW1wbCh1cmwsIHRpbGVXaWR0aCwgdGlsZUhlaWdodCwgMSk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2godGlsZXNldCk7XG4gICAgICAgIHJldHVybiB0aWxlc2V0O1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmxvYWRGb250ID0gZnVuY3Rpb24gKHVybCwgbmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IEZvbnRJbXBsXzEuRm9udEltcGwodXJsLCBuYW1lKTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkTERUSyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIHdvcmxkID0gbmV3IExEVEtXb3JsZF8xLkxEVEtXb3JsZCgpO1xuICAgICAgICB0aGlzLnJlc291cmNlcy5wdXNoKHdvcmxkKTtcbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXEub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICByZXEub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAocmVxLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgICAgIHdvcmxkLmxvYWQoSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlcS5zZW5kKG51bGwpO1xuICAgICAgICByZXR1cm4gd29ybGQ7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZEpzb24gPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXEub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXEucmVzcG9uc2VUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXEucmVzcG9uc2VUZXh0LnJlcGxhY2UoL1xcXFxcInxcIig/OlxcXFxcInxbXlwiXSkqXCJ8KFxcL1xcLy4qfFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pL2csIGZ1bmN0aW9uIChtLCBnKSB7IHJldHVybiBnID8gXCJcIiA6IG07IH0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxLnNlbmQobnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmlzUnVubmluZ1N0YW5kYWxvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAod2luZG93Lm5hdmlnYXRvci5zdGFuZGFsb25lID09PSB0cnVlKSB8fCAod2luZG93Lm1hdGNoTWVkaWEoJyhkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpJykubWF0Y2hlcyk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuaXNUYWJsZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1Bob25lKCkgJiYgdGhpcy5pc0lPUygpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNUYWJsZXQgPSAvKGlwYWR8dGFibGV0fChhbmRyb2lkKD8hLiptb2JpbGUpKXwod2luZG93cyg/IS4qcGhvbmUpKC4qdG91Y2gpKXxraW5kbGV8cGxheWJvb2t8c2lsa3wocHVmZmluKD8hLiooSVB8QVB8V1ApKSkpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIHJldHVybiBpc1RhYmxldDtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5pc01vYmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJT1MoKSB8fCB0aGlzLmlzQW5kcm9pZCgpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmlzQW5kcm9pZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSkgIT0gbnVsbDtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5pc0lPUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICdpUGFkIFNpbXVsYXRvcicsXG4gICAgICAgICAgICAnaVBob25lIFNpbXVsYXRvcicsXG4gICAgICAgICAgICAnaVBvZCBTaW11bGF0b3InLFxuICAgICAgICAgICAgJ2lQYWQnLFxuICAgICAgICAgICAgJ2lQaG9uZScsXG4gICAgICAgICAgICAnaVBvZCdcbiAgICAgICAgXS5pbmRleE9mKG5hdmlnYXRvci5wbGF0Zm9ybSkgPj0gMFxuICAgICAgICAgICAgLy8gaVBhZCBvbiBpT1MgMTMgZGV0ZWN0aW9uXG4gICAgICAgICAgICB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcyhcIk1hY1wiKSAmJiBcIm9udG91Y2hlbmRcIiBpbiBkb2N1bWVudCk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuaXNQaG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJT1MoKSAmJiB3aW5kb3cubWF0Y2hNZWRpYShcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweClcIikubWF0Y2hlcztcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5zZXRTb3VuZFZvbHVtZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIFNvdW5kSW1wbF8xLlNvdW5kSW1wbC5zZXRTb3VuZFZvbHVtZSh2KTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5nZXRTb3VuZFZvbHVtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFNvdW5kSW1wbF8xLlNvdW5kSW1wbC5nZXRTb3VuZFZvbHVtZSgpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLnNldE11c2ljVm9sdW1lID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgU291bmRJbXBsXzEuU291bmRJbXBsLnNldE11c2ljVm9sdW1lKHYpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmdldE11c2ljVm9sdW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU291bmRJbXBsXzEuU291bmRJbXBsLmdldE11c2ljVm9sdW1lKCk7XG4gICAgfTtcbiAgICByZXR1cm4gR2FtZUxvb3A7XG59KCkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLktleXMgPSB2b2lkIDA7XG52YXIgS2V5cyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLZXlzKCkge1xuICAgIH1cbiAgICBLZXlzLkVTQ0FQRV9LRVkgPSBcIkVzY2FwZVwiO1xuICAgIEtleXMuRU5URVJfS0VZID0gXCJFbnRlclwiO1xuICAgIEtleXMuTEVGVF9LRVkgPSBcIkFycm93TGVmdFwiO1xuICAgIEtleXMuUklHSFRfS0VZID0gXCJBcnJvd1JpZ2h0XCI7XG4gICAgS2V5cy5VUF9LRVkgPSBcIkFycm93VXBcIjtcbiAgICBLZXlzLkRPV05fS0VZID0gXCJBcnJvd0Rvd25cIjtcbiAgICBLZXlzLlNQQUNFX0tFWSA9IFwiIFwiO1xuICAgIEtleXMuU19LRVkgPSBcInNcIjtcbiAgICBLZXlzLk1fS0VZID0gXCJtXCI7XG4gICAgS2V5cy5BX0tFWSA9IFwiYVwiO1xuICAgIEtleXMuV19LRVkgPSBcIndcIjtcbiAgICBLZXlzLkRfS0VZID0gXCJkXCI7XG4gICAgS2V5cy5DT05UUk9MX0tFWSA9IFwiQ29udHJvbFwiO1xuICAgIEtleXMuTUVUQV9LRVkgPSBcIk1ldGFcIjtcbiAgICBLZXlzLkFMVF9LRVkgPSBcIkFsdFwiO1xuICAgIEtleXMuVEFCX0tFWSA9IFwiVGFiXCI7XG4gICAgcmV0dXJuIEtleXM7XG59KCkpO1xuZXhwb3J0cy5LZXlzID0gS2V5cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5CaXRtYXBJbXBsID0gdm9pZCAwO1xudmFyIEJpdG1hcEltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQml0bWFwSW1wbCh1cmwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLndpZHRoID0gX3RoaXMuaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICBfdGhpcy5oZWlnaHQgPSBfdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICBfdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHVybDtcbiAgICB9XG4gICAgQml0bWFwSW1wbC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgsIHgsIHkpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB4LCB5KTtcbiAgICB9O1xuICAgIEJpdG1hcEltcGwucHJvdG90eXBlLmRyYXdTY2FsZWQgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBCaXRtYXBJbXBsLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgcmV0dXJuIEJpdG1hcEltcGw7XG59KCkpO1xuZXhwb3J0cy5CaXRtYXBJbXBsID0gQml0bWFwSW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Gb250SW1wbCA9IHZvaWQgMDtcbnZhciBGb250SW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb250SW1wbCh1cmwsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBcIkBmb250LWZhY2UgeyBmb250LWZhbWlseTogXCIgKyBuYW1lICsgXCI7IHNyYzogdXJsKCdcIiArIHVybCArIFwiJyk7IH0gYm9keSB7IGZvbnQtZmFtaWx5OiBcIiArIG5hbWUgKyBcIjsgfVwiO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gICAgRm9udEltcGwucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKGN0eCwgc2l6ZSkge1xuICAgICAgICBjdHguZm9udCA9IHNpemUgKyBcInB4IFwiICsgdGhpcy5uYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIEZvbnRJbXBsO1xufSgpKTtcbmV4cG9ydHMuRm9udEltcGwgPSBGb250SW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HcmFwaGljc0ltcGwgPSB2b2lkIDA7XG52YXIgRm9udEltcGxfMSA9IHJlcXVpcmUoXCIuL0ZvbnRJbXBsXCIpO1xudmFyIGlzRmlyZWZveCA9IHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgT2Zmc2NyZWVuSW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPZmZzY3JlZW5JbXBsKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG4gICAgT2Zmc2NyZWVuSW1wbC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB9O1xuICAgIE9mZnNjcmVlbkltcGwucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB9O1xuICAgIE9mZnNjcmVlbkltcGwucHJvdG90eXBlLnNldERpbWVuc2lvbiA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9O1xuICAgIHJldHVybiBPZmZzY3JlZW5JbXBsO1xufSgpKTtcbnZhciBDb3B5Qml0bWFwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvcHlCaXRtYXAoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgQ29weUJpdG1hcC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgsIHgsIHkpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhbnZhcywgeCwgeSk7XG4gICAgfTtcbiAgICBDb3B5Qml0bWFwLnByb3RvdHlwZS5kcmF3U2NhbGVkID0gZnVuY3Rpb24gKGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9O1xuICAgIENvcHlCaXRtYXAucHJvdG90eXBlLmdldERyYXdhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gICAgfTtcbiAgICBDb3B5Qml0bWFwLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgcmV0dXJuIENvcHlCaXRtYXA7XG59KCkpO1xudmFyIEdyYXBoaWNzSW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHcmFwaGljc0ltcGwoKSB7XG4gICAgICAgIHRoaXMuZm9udFNpemUgPSAyMDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLm1haW5DdHggPSB0aGlzLmN0eDtcbiAgICAgICAgdGhpcy5jdHgud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5mb250U21vb3RoID0gXCJuZXZlclwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53ZWJraXRGb250U21vb3RoaW5nID0gXCJub25lXCI7XG4gICAgICAgIGlmIChpc0ZpcmVmb3gpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gXCJjcmlzcC1lZGdlc1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSBcInBpeGVsYXRlZFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9udCA9IG5ldyBGb250SW1wbF8xLkZvbnRJbXBsKFwiZm9udC50dGZcIiwgXCJHdXRlRGVmYXVsdFwiKTtcbiAgICAgICAgaWYgKHRoaXMuZm9udCkge1xuICAgICAgICAgICAgdGhpcy5hcHBseUZvbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmNsaXAgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB2YXIgc3F1YXJlUGF0aCA9IG5ldyBQYXRoMkQoKTtcbiAgICAgICAgc3F1YXJlUGF0aC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5jbGlwKHNxdWFyZVBhdGgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5jcmVhdGVPZmZzY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgY3R4LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY2FudmFzLnN0eWxlLmZvbnRTbW9vdGggPSBcIm5ldmVyXCI7XG4gICAgICAgICAgICBjYW52YXMuc3R5bGUud2Via2l0Rm9udFNtb290aGluZyA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBPZmZzY3JlZW5JbXBsKGNhbnZhcywgY3R4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjcmVhdGUgb2Zmc2NyZWVuIGNhbnZhc1wiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5kcmF3VG9PZmZzY3JlZW4gPSBmdW5jdGlvbiAoc2NyZWVuKSB7XG4gICAgICAgIGlmIChzY3JlZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gc2NyZWVuLmN0eDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5tYWluQ3R4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdPZmZzY3JlZW4gPSBmdW5jdGlvbiAoc2NyZWVuKSB7XG4gICAgICAgIHRoaXMuY3R4LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHNjcmVlbi5jYW52YXMsIDAsIDApO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5kcmF3U2NhbGVkT2Zmc2NyZWVuID0gZnVuY3Rpb24gKHNjcmVlbiwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmN0eC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShzY3JlZW4uY2FudmFzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuY2xlYXJSZWN0ID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5maXRTY3JlZW4gPSBmdW5jdGlvbiAocGl4ZWxTY2FsZSkge1xuICAgICAgICB2YXIgcmVhbFdpZHRoID0gTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aCAvIHBpeGVsU2NhbGUpICogcGl4ZWxTY2FsZTtcbiAgICAgICAgdmFyIHJlYWxIZWlnaHQgPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lckhlaWdodCAvIHBpeGVsU2NhbGUpICogcGl4ZWxTY2FsZTtcbiAgICAgICAgdmFyIHZpcnR1YWxXaWR0aCA9IHJlYWxXaWR0aCAvIHBpeGVsU2NhbGU7XG4gICAgICAgIHZhciB2aXJ0dWFsSGVpZ2h0ID0gcmVhbEhlaWdodCAvIHBpeGVsU2NhbGU7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB2aXJ0dWFsV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHZpcnR1YWxIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gcmVhbFdpZHRoICsgXCJweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSByZWFsSGVpZ2h0ICsgXCJweFwiO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5zZXRBbHBoYSA9IGZ1bmN0aW9uIChhbHBoYSkge1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuICAgICAgICAoX2EgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb3B5Qml0bWFwKGNhbnZhcyk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHgsIHkpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5zY2FsZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHgsIHkpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5hcHBseUZvbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm9udC5hcHBseSh0aGlzLmN0eCwgdGhpcy5mb250U2l6ZSk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLnNldEZvbnQgPSBmdW5jdGlvbiAoZm9udCkge1xuICAgICAgICB0aGlzLmZvbnQgPSBmb250O1xuICAgICAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5zZXRGb250U2l6ZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICAgIHRoaXMuZm9udFNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5nZXRTdHJpbmdXaWR0aCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd1N0cmluZyA9IGZ1bmN0aW9uICh4LCB5LCB0ZXh0LCBjb2wpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuc2V0Q29tcG9zaXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gbmFtZTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZmlsbFJlY3QgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdMaW5lID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyLCBjb2wsIHdpZHRoKSB7XG4gICAgICAgIGlmICh3aWR0aCA9PT0gdm9pZCAwKSB7IHdpZHRoID0gMTsgfVxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGNvbDtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4MSwgeTEpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdCaXRtYXAgPSBmdW5jdGlvbiAoeCwgeSwgYml0bWFwKSB7XG4gICAgICAgIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYml0bWFwLmRyYXcodGhpcy5jdHgsIHgsIHkpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5kcmF3U2NhbGVkQml0bWFwID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQsIGJpdG1hcCkge1xuICAgICAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHgud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGJpdG1hcC5kcmF3U2NhbGVkKHRoaXMuY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9O1xuICAgIHJldHVybiBHcmFwaGljc0ltcGw7XG59KCkpO1xuZXhwb3J0cy5HcmFwaGljc0ltcGwgPSBHcmFwaGljc0ltcGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU291bmRJbXBsID0gdm9pZCAwO1xudmFyIEd1dGVfMSA9IHJlcXVpcmUoXCIuLi9HdXRlXCIpO1xudmFyIEF1ZGlvQ29udGV4dDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xufVxudmFyIEFVRElPX0NPTlRFWFQ7XG5mdW5jdGlvbiBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgIGlmIChHdXRlXzEuaXNNdXNpY09uKCkpIHtcbiAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMucGxheShTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy52b2x1bWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChHdXRlXzEuaXNTb3VuZE9uKCkpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IFNvdW5kSW1wbC5DVVJSRU5UX0xPT1BTOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGxvb3AgPSBfYVtfaV07XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgbG9vcC5zdG9wKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvb3AucGxheShsb29wLnZvbHVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XG59XG52YXIgU291bmRJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNvdW5kSW1wbCh1cmwsIG11c2ljKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudm9sdW1lID0gMTtcbiAgICAgICAgdGhpcy5tdXNpYyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvb3BlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5tdXNpYyA9IG11c2ljO1xuICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcS5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhcnJheUJ1ZmZlciA9IHJlcS5yZXNwb25zZTtcbiAgICAgICAgICAgIGlmIChhcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIF90aGlzLmRhdGEgPSBhcnJheUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBfdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLnRyeUxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxLnNlbmQobnVsbCk7XG4gICAgfVxuICAgIFNvdW5kSW1wbC5zZXRTb3VuZFZvbHVtZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHRoaXMuc291bmRWb2x1bWUgPSB2O1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5DVVJSRU5UX0xPT1BTOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGxvb3AgPSBfYVtfaV07XG4gICAgICAgICAgICBsb29wLmdhaW4uZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZShsb29wLnZvbHVtZSAqIFNvdW5kSW1wbC5zb3VuZFZvbHVtZSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSArIDAuMjUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTb3VuZEltcGwuZ2V0U291bmRWb2x1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdW5kVm9sdW1lO1xuICAgIH07XG4gICAgU291bmRJbXBsLnNldE11c2ljVm9sdW1lID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdGhpcy5tdXNpY1ZvbHVtZSA9IHY7XG4gICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLmdhaW4pIHtcbiAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5nYWluLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMudm9sdW1lICogU291bmRJbXBsLm11c2ljVm9sdW1lLCBBVURJT19DT05URVhULmN1cnJlbnRUaW1lICsgMC4yNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNvdW5kSW1wbC5nZXRNdXNpY1ZvbHVtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVzaWNWb2x1bWU7XG4gICAgfTtcbiAgICBTb3VuZEltcGwucHJvdG90eXBlLnRyeUxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChBVURJT19DT05URVhUICYmIHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgQVVESU9fQ09OVEVYVC5kZWNvZGVBdWRpb0RhdGEodGhpcy5kYXRhLCBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9PT0gX3RoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbGF5KF90aGlzLnZvbHVtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHsgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gbG9hZDogXCIgKyBfdGhpcy51cmwpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU291bmRJbXBsLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIUFVRElPX0NPTlRFWFQpIHtcbiAgICAgICAgICAgIEFVRElPX0NPTlRFWFQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgICAgICBBVURJT19DT05URVhULnJlc3VtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJ5TG9hZCgpO1xuICAgIH07XG4gICAgU291bmRJbXBsLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKHZvbHVtZSwgbG9vcCkge1xuICAgICAgICBpZiAobG9vcCA9PT0gdm9pZCAwKSB7IGxvb3AgPSBmYWxzZTsgfVxuICAgICAgICB0aGlzLnZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgaWYgKCF0aGlzLmJ1ZmZlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgICAgICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID0gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tdXNpYyAmJiAhR3V0ZV8xLmlzTXVzaWNPbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIUd1dGVfMS5pc1NvdW5kT24oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc291cmNlID0gQVVESU9fQ09OVEVYVC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgdGhpcy5zb3VyY2UuYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgICAgIHRoaXMuZ2FpbiA9IEFVRElPX0NPTlRFWFQuY3JlYXRlR2FpbigpO1xuICAgICAgICB0aGlzLnNvdXJjZS5jb25uZWN0KHRoaXMuZ2Fpbik7XG4gICAgICAgIHRoaXMuZ2Fpbi5jb25uZWN0KEFVRElPX0NPTlRFWFQuZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLmxvb3BlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5tdXNpYyB8fCBsb29wKSB7XG4gICAgICAgICAgICB0aGlzLmdhaW4uZ2Fpbi52YWx1ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubG9vcGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvdXJjZS5zdGFydCgwKTtcbiAgICAgICAgaWYgKHRoaXMubXVzaWMgfHwgbG9vcCkge1xuICAgICAgICAgICAgdGhpcy5nYWluLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUodm9sdW1lICogKGxvb3AgPyBTb3VuZEltcGwuc291bmRWb2x1bWUgOiBTb3VuZEltcGwubXVzaWNWb2x1bWUpLCBBVURJT19DT05URVhULmN1cnJlbnRUaW1lICsgMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhaW4uZ2Fpbi52YWx1ZSA9IHZvbHVtZSAqIFNvdW5kSW1wbC5zb3VuZFZvbHVtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9vcCkge1xuICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTE9PUFMucHVzaCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU291bmRJbXBsLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKHJlbW92ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAocmVtb3ZlID09PSB2b2lkIDApIHsgcmVtb3ZlID0gdHJ1ZTsgfVxuICAgICAgICBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvb3BlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKDAsIEFVRElPX0NPTlRFWFQuY3VycmVudFRpbWUgKyAzKTtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvdXJjZV8xID0gdGhpcy5zb3VyY2U7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBTb3VyY2VfMS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfSwgNDAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gU291bmRJbXBsLkNVUlJFTlRfTE9PUFMuZmluZEluZGV4KGZ1bmN0aW9uIChhKSB7IHJldHVybiBhID09PSBfdGhpczsgfSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX0xPT1BTLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNvdW5kSW1wbC5DVVJSRU5UX0xPT1BTID0gW107XG4gICAgU291bmRJbXBsLnNvdW5kVm9sdW1lID0gMTtcbiAgICBTb3VuZEltcGwubXVzaWNWb2x1bWUgPSAxO1xuICAgIHJldHVybiBTb3VuZEltcGw7XG59KCkpO1xuZXhwb3J0cy5Tb3VuZEltcGwgPSBTb3VuZEltcGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGlsZXNldEltcGwgPSB2b2lkIDA7XG52YXIgVGlsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaWxlKGNhbnZhcywgeCwgeSwgd2lkdGgsIGhlaWdodCwgc2NhbGUpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGNhbnZhcztcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgfVxuICAgIFRpbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY3R4LCB4LCB5KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB4LCB5LCB0aGlzLndpZHRoICogdGhpcy5zY2FsZSwgdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlKTtcbiAgICB9O1xuICAgIFRpbGUucHJvdG90eXBlLmRyYXdTY2FsZWQgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9O1xuICAgIFRpbGUucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICByZXR1cm4gVGlsZTtcbn0oKSk7XG52YXIgVGlsZXNldEltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGlsZXNldEltcGwodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIHNjYWxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzY2FsZSA9PT0gdm9pZCAwKSB7IHNjYWxlID0gMTsgfVxuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJpdG1hcHMgPSBbXTtcbiAgICAgICAgdGhpcy5zY2FubGluZSA9IDA7XG4gICAgICAgIHRoaXMudGlsZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy50aW50cyA9IHt9O1xuICAgICAgICB0aGlzLm9uTG9hZGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IHRoaXMub3JpZ2luYWxUaWxlV2lkdGggPSB0aWxlV2lkdGg7XG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0ID0gdGlsZUhlaWdodDtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc2NhbmxpbmUgPSBNYXRoLmZsb29yKF90aGlzLmltYWdlLndpZHRoIC8gX3RoaXMudGlsZVdpZHRoKTtcbiAgICAgICAgICAgIHZhciBkZXB0aCA9IE1hdGguZmxvb3IoX3RoaXMuaW1hZ2UuaGVpZ2h0IC8gX3RoaXMudGlsZUhlaWdodCk7XG4gICAgICAgICAgICBfdGhpcy50aWxlQ291bnQgPSBkZXB0aCAqIF90aGlzLnNjYW5saW5lO1xuICAgICAgICAgICAgLy8gY3V0IHRoZSBpbWFnZSBpbnRvIHBpZWNlc1xuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBkZXB0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBfdGhpcy5zY2FubGluZTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJpdG1hcHMucHVzaChuZXcgVGlsZShfdGhpcy5pbWFnZSwgeCAqIF90aGlzLnRpbGVXaWR0aCwgeSAqIF90aGlzLnRpbGVIZWlnaHQsIF90aGlzLnRpbGVXaWR0aCwgX3RoaXMudGlsZUhlaWdodCwgc2NhbGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy50aWxlV2lkdGggKj0gc2NhbGU7XG4gICAgICAgICAgICBfdGhpcy50aWxlSGVpZ2h0ICo9IHNjYWxlO1xuICAgICAgICAgICAgX3RoaXMub25Mb2FkZWQoKTtcbiAgICAgICAgICAgIF90aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdXJsO1xuICAgIH1cbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuZ2V0VGlsZXNBY3Jvc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5saW5lO1xuICAgIH07XG4gICAgVGlsZXNldEltcGwucHJvdG90eXBlLmdldFRpbGVXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZVdpZHRoO1xuICAgIH07XG4gICAgVGlsZXNldEltcGwucHJvdG90eXBlLmdldFRpbGVIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVIZWlnaHQ7XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuZ2V0VGlsZUNvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlQ291bnQ7XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuaW5pdE9uRmlyc3RDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5nZXRUaWxlID0gZnVuY3Rpb24gKHRpbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYml0bWFwc1t0aWxlXTtcbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5nZXRUaW50ZWRUaWxlID0gZnVuY3Rpb24gKHRpbGUsIHRpbnROYW1lLCB0aW50KSB7XG4gICAgICAgIHZhciB4ID0gdGlsZSAlIHRoaXMuc2NhbmxpbmU7XG4gICAgICAgIHZhciB5ID0gTWF0aC5mbG9vcih0aWxlIC8gdGhpcy5zY2FubGluZSk7XG4gICAgICAgIHZhciBpbWFnZSA9IHRoaXMudGludHNbdGludE5hbWVdO1xuICAgICAgICBpZiAoIWltYWdlKSB7XG4gICAgICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIDApO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVhdmUgYmxhY2sgYWxvbmVcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2ZyA9IChpZC5kYXRhW2ldICsgaWQuZGF0YVtpICsgMV0gKyBpZC5kYXRhW2kgKyAyXSkgLyAzO1xuICAgICAgICAgICAgICAgICAgICBpZC5kYXRhW2ldID0gTWF0aC5mbG9vcihhdmcgKiB0aW50WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgaWQuZGF0YVtpICsgMV0gPSBNYXRoLmZsb29yKGF2ZyAqIHRpbnRbMV0pO1xuICAgICAgICAgICAgICAgICAgICBpZC5kYXRhW2kgKyAyXSA9IE1hdGguZmxvb3IoYXZnICogdGludFsyXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaWQsIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgICAgIHRoaXMudGludHNbdGludE5hbWVdID0gaW1hZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBUaWxlKGltYWdlLCB4ICogdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCwgeSAqIHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0LCB0aGlzLm9yaWdpbmFsVGlsZVdpZHRoLCB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCwgdGhpcy5zY2FsZSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGlsZXNldEltcGw7XG59KCkpO1xuZXhwb3J0cy5UaWxlc2V0SW1wbCA9IFRpbGVzZXRJbXBsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFTdGFyUGF0aEZpbmRlciA9IHZvaWQgMDtcbnZhciBNYXBOb2RlXzEgPSByZXF1aXJlKFwiLi9NYXBOb2RlXCIpO1xudmFyIFBhdGhfMSA9IHJlcXVpcmUoXCIuL1BhdGhcIik7XG52YXIgQVN0YXJQYXRoRmluZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFTdGFyUGF0aEZpbmRlcihtYXApIHtcbiAgICAgICAgdGhpcy5vYmplY3RQb29sID0gW107XG4gICAgICAgIHRoaXMub3Blbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5wYXRoRmluZENvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLndpZHRoID0gbWFwLmdldE1hcFdpZHRoKCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gbWFwLmdldE1hcEhlaWdodCgpO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5vcGVuID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICB2YXIgYyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA1OyBqKyspIHtcbiAgICAgICAgICAgICAgICBvLnB1c2goMCk7XG4gICAgICAgICAgICAgICAgYy5wdXNoKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vcGVuLnB1c2gobyk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZC5wdXNoKGMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcGVuTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5vYmplY3RQb29sLnB1c2godGhpcy5vcGVuTGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuTGlzdCA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnBhdGhGaW5kQ291bnRlcisrO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5nZW5lcmF0ZVBhdGggPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgY3VycmVudCA9IG5vZGU7XG4gICAgICAgIHZhciBwYXRoID0gbmV3IFBhdGhfMS5QYXRoKCk7XG4gICAgICAgIHdoaWxlIChjdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHBhdGguYWRkKGN1cnJlbnQueCwgY3VycmVudC55KTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuYmxvY2tlZCA9IGZ1bmN0aW9uIChzeCwgc3ksIHgsIHkpIHtcbiAgICAgICAgdmFyIGlnbm9yZUFjdG9ycyA9IHRoaXMuaWdub3JlRmluYWxPY2N1cGF0aW9uICYmIHRoaXMuYXRUYXJnZXQoeCwgeSk7XG4gICAgICAgIGlmICghdGhpcy5tYXAubG9jYXRpb25EaXNjb3ZlcmVkKHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXAuYmxvY2tlZCh0aGlzLm1vdmVyLCBudWxsLCBzeCwgc3ksIHgsIHksIGlnbm9yZUFjdG9ycywgdGhpcy5hdFRhcmdldCh4LCB5KSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuYXRUYXJnZXQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICBmb3IgKHZhciB4cyA9IDA7IHhzIDwgdGhpcy5tb3Zlci5nZXRUaWxlc1dpZHRoKCk7IHhzKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIHlzID0gMDsgeXMgPCB0aGlzLm1vdmVyLmdldFRpbGVzSGVpZ2h0KCk7IHlzKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoKHggKyB4cyA9PSB0aGlzLnR4KSAmJiAoeSArIHlzID09IHRoaXMudHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBBU3RhclBhdGhGaW5kZXIucHJvdG90eXBlLmZpbmRQYXRoID0gZnVuY3Rpb24gKG1vdmVyLCB0eCwgdHksIG1heCwgaWdub3JlRmluYWxPY2N1cGF0aW9uLCBydW5Bd2F5KSB7XG4gICAgICAgIHR4ID0gTWF0aC5mbG9vcih0eCk7XG4gICAgICAgIHR5ID0gTWF0aC5mbG9vcih0eSk7XG4gICAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgICAgICB0aGlzLmlnbm9yZUZpbmFsT2NjdXBhdGlvbiA9IGlnbm9yZUZpbmFsT2NjdXBhdGlvbjtcbiAgICAgICAgdGhpcy5tb3ZlciA9IG1vdmVyO1xuICAgICAgICB0aGlzLnR4ID0gdHg7XG4gICAgICAgIHRoaXMudHkgPSB0eTtcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tlZCh0eCwgdHksIHR4LCB0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5hZGRMb2NhdGlvbihudWxsLCBNYXRoLmZsb29yKG1vdmVyLmdldFRpbGVNYXBYKCkpLCBNYXRoLmZsb29yKG1vdmVyLmdldFRpbGVNYXBZKCkpKTtcbiAgICAgICAgd2hpbGUgKHRoaXMub3Blbkxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGJlc3QgPSB0aGlzLm9wZW5MaXN0WzBdO1xuICAgICAgICAgICAgdGhpcy5vcGVuTGlzdC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAvLyBpZiBiZXN0IGlzIHRoZSB0YXJnZXQgdGhlbiB3ZSd2ZSBmb3VuZCBpdCFcbiAgICAgICAgICAgIGlmICh0aGlzLmF0VGFyZ2V0KGJlc3QueCwgYmVzdC55KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlUGF0aChiZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54ICsgMSwgYmVzdC55KTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54IC0gMSwgYmVzdC55KTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54LCBiZXN0LnkgKyAxKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54LCBiZXN0LnkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuYWRkTG9jYXRpb24gPSBmdW5jdGlvbiAocGFyZW50LCB4LCB5KSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKHgpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcih5KTtcbiAgICAgICAgdmFyIHN4ID0geDtcbiAgICAgICAgdmFyIHN5ID0geTtcbiAgICAgICAgdmFyIGRpciA9IEFTdGFyUGF0aEZpbmRlci5OT05FO1xuICAgICAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN4ID0gcGFyZW50Lng7XG4gICAgICAgICAgICBzeSA9IHBhcmVudC55O1xuICAgICAgICAgICAgaWYgKHN5ICsgMSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLk5PUlRIX1RPX1NPVVRIO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN5IC0gMSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLlNPVVRIX1RPX05PUlRIO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN4ICsgMSA9PSB4KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLldFU1RfVE9fRUFTVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzeCAtIDEgPT0geCkge1xuICAgICAgICAgICAgICAgIGRpciA9IEFTdGFyUGF0aEZpbmRlci5FQVNUX1RPX1dFU1Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm1hcC52YWxpZExvY2F0aW9uKHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgaXQncyBpbiB0aGUgb3BlbiBsaXN0IGlnbm9yZVxuICAgICAgICBpZiAodGhpcy5vcGVuW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID09IHRoaXMucGF0aEZpbmRDb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID09IHRoaXMucGF0aEZpbmRDb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgaXQncyBibG9ja2VkIGZvciBhbnkgcmVhc29uLCBhZGQgaXQgdG8gdGhlIGNsb3NlZFxuICAgICAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQuZGVwdGggPiB0aGlzLm1heCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VkW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID0gdGhpcy5wYXRoRmluZENvdW50ZXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5tYXAubG9jYXRpb25EaXNjb3ZlcmVkKHgsIHkpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZFt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJsb2NrZWQoc3gsIHN5LCB4LCB5KSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZWRbeCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPSB0aGlzLnBhdGhGaW5kQ291bnRlcjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBvdGhlcndpc2UgaXQncyBhIHBvc3NpYmxlIHN0ZXAgYWRkIGl0IHRvIHRoZSBvcGVuXG4gICAgICAgIHRoaXMub3Blblt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuY3JlYXRlTWFwTm9kZSh4LCB5LCBwYXJlbnQsIHRoaXMuZ2V0SGV1cmlzdGljKHgsIHkpKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wZW5MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMub3Blbkxpc3RbaV07XG4gICAgICAgICAgICBpZiAoY3VycmVudC5oID4gbm9kZS5oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTGlzdC5zcGxpY2UoaSwgMCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIG5vIHdoZXJlIGVsc2UgYWRkIGl0IGF0IHRoZSBlbmRcbiAgICAgICAgdGhpcy5vcGVuTGlzdC5wdXNoKG5vZGUpO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5nZXRIZXVyaXN0aWMgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAvLyBkaXN0YW5jZSBzcXVhcmVkXG4gICAgICAgIHZhciBkeCA9IE1hdGguYWJzKHRoaXMudHggLSB4KTtcbiAgICAgICAgdmFyIGR5ID0gTWF0aC5hYnModGhpcy50eSAtIHkpO1xuICAgICAgICByZXR1cm4gKGR4ICogZHgpICsgKGR5ICogZHkpO1xuICAgIH07XG4gICAgLy8gb2JqZWN0IHBvb2wgYWNjZXNzb3IgLSBmcmVlIGlzIGRvbmUgaW4gYnVsa1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuY3JlYXRlTWFwTm9kZSA9IGZ1bmN0aW9uICh4LCB5LCBwYXJlbnQsIGgpIHtcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0UG9vbC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdmFyIG4gPSBuZXcgTWFwTm9kZV8xLk1hcE5vZGUoKTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UG9vbC5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5vYmplY3RQb29sWzBdO1xuICAgICAgICB0aGlzLm9iamVjdFBvb2wuc3BsaWNlKDAsIDEpO1xuICAgICAgICBub2RlLnggPSB4O1xuICAgICAgICBub2RlLnkgPSB5O1xuICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgbm9kZS5oID0gaDtcbiAgICAgICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLmRlcHRoID0gcGFyZW50LmRlcHRoICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGVwdGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLk5PUlRIX1RPX1NPVVRIID0gMDtcbiAgICBBU3RhclBhdGhGaW5kZXIuRUFTVF9UT19XRVNUID0gMTtcbiAgICBBU3RhclBhdGhGaW5kZXIuU09VVEhfVE9fTk9SVEggPSAyO1xuICAgIEFTdGFyUGF0aEZpbmRlci5XRVNUX1RPX0VBU1QgPSAzO1xuICAgIEFTdGFyUGF0aEZpbmRlci5OT05FID0gNDtcbiAgICByZXR1cm4gQVN0YXJQYXRoRmluZGVyO1xufSgpKTtcbmV4cG9ydHMuQVN0YXJQYXRoRmluZGVyID0gQVN0YXJQYXRoRmluZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hcE5vZGUgPSB2b2lkIDA7XG52YXIgTWFwTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBOb2RlKCkge1xuICAgIH1cbiAgICByZXR1cm4gTWFwTm9kZTtcbn0oKSk7XG5leHBvcnRzLk1hcE5vZGUgPSBNYXBOb2RlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBhdGggPSB2b2lkIDA7XG52YXIgU3RlcF8xID0gcmVxdWlyZShcIi4vU3RlcFwiKTtcbnZhciBQYXRoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBhdGgoKSB7XG4gICAgICAgIHRoaXMuc3RlcHMgPSBuZXcgQXJyYXkoKTtcbiAgICB9XG4gICAgUGF0aC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy5zdGVwcy5zcGxpY2UoMCwgMCwgbmV3IFN0ZXBfMS5TdGVwKHgsIHkpKTtcbiAgICB9O1xuICAgIFBhdGgucHJvdG90eXBlLmdldExhc3RTdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGVwc1t0aGlzLnN0ZXBzLmxlbmd0aCAtIDFdO1xuICAgIH07XG4gICAgUGF0aC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5zdGVwc1swXTtcbiAgICAgICAgdGhpcy5zdGVwcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gUGF0aDtcbn0oKSk7XG5leHBvcnRzLlBhdGggPSBQYXRoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN0ZXAgPSB2b2lkIDA7XG52YXIgU3RlcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGVwKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgcmV0dXJuIFN0ZXA7XG59KCkpO1xuZXhwb3J0cy5TdGVwID0gU3RlcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTERUS1dvcmxkID0gdm9pZCAwO1xudmFyIE1hcEVudGl0eV8xID0gcmVxdWlyZShcIi4vTWFwRW50aXR5XCIpO1xudmFyIE1hcExheWVyXzEgPSByZXF1aXJlKFwiLi9NYXBMYXllclwiKTtcbnZhciBNYXBMZXZlbF8xID0gcmVxdWlyZShcIi4vTWFwTGV2ZWxcIik7XG52YXIgTWFwV29ybGRfMSA9IHJlcXVpcmUoXCIuL01hcFdvcmxkXCIpO1xudmFyIExEVEtXb3JsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTERUS1dvcmxkLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExEVEtXb3JsZCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBMRFRLV29ybGQucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBMRFRLV29ybGQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICB0aGlzLmdyaWRTaXplID0ganNvbi5kZWZhdWx0R3JpZFNpemU7XG4gICAgICAgIHZhciB0aWxlc2V0ID0ganNvbi5kZWZzLnRpbGVzZXRzWzBdO1xuICAgICAgICB0aGlzLnRpbGVzZXRTY2FubGluZSA9IHRpbGVzZXQucHhXaWQgLyB0aWxlc2V0LnRpbGVHcmlkU2l6ZTtcbiAgICAgICAgdGhpcy50aWxlc2V0U2l6ZSA9IHRpbGVzZXQudGlsZUdyaWRTaXplO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0ganNvbi5sZXZlbHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGV2ZWxEYXRhID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIGxldmVsID0gbmV3IE1hcExldmVsXzEuTWFwTGV2ZWwodGhpcywgbGV2ZWxEYXRhLmlkZW50aWZpZXIpO1xuICAgICAgICAgICAgbGV2ZWwud29ybGRYID0gbGV2ZWxEYXRhLndvcmxkWDtcbiAgICAgICAgICAgIGxldmVsLndvcmxkWSA9IGxldmVsRGF0YS53b3JsZFk7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IDAsIF9jID0gbGV2ZWxEYXRhLmZpZWxkSW5zdGFuY2VzOyBfYiA8IF9jLmxlbmd0aDsgX2IrKykge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZEluc3RhbmNlID0gX2NbX2JdO1xuICAgICAgICAgICAgICAgIGxldmVsLmZpZWxkc1tmaWVsZEluc3RhbmNlLl9faWRlbnRpZmllcl0gPSBmaWVsZEluc3RhbmNlLl9fdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBfZCA9IDAsIF9lID0gbGV2ZWxEYXRhLmxheWVySW5zdGFuY2VzOyBfZCA8IF9lLmxlbmd0aDsgX2QrKykge1xuICAgICAgICAgICAgICAgIHZhciBsYXllckRhdGEgPSBfZVtfZF07XG4gICAgICAgICAgICAgICAgaWYgKGxheWVyRGF0YS5fX3R5cGUgPT09IFwiRW50aXRpZXNcIikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfZiA9IDAsIF9nID0gbGF5ZXJEYXRhLmVudGl0eUluc3RhbmNlczsgX2YgPCBfZy5sZW5ndGg7IF9mKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbnRpdHlEYXRhID0gX2dbX2ZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVudGl0eSA9IG5ldyBNYXBFbnRpdHlfMS5NYXBFbnRpdHkobGV2ZWwsIGVudGl0eURhdGEucHhbMF0gLyBsYXllckRhdGEuX19ncmlkU2l6ZSwgZW50aXR5RGF0YS5weFsxXSAvIGxheWVyRGF0YS5fX2dyaWRTaXplLCBlbnRpdHlEYXRhLndpZHRoIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUsIGVudGl0eURhdGEuaGVpZ2h0IC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUsIGVudGl0eURhdGEuX19pZGVudGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9oID0gMCwgX2ogPSBlbnRpdHlEYXRhLmZpZWxkSW5zdGFuY2VzOyBfaCA8IF9qLmxlbmd0aDsgX2grKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZEluc3RhbmNlID0gX2pbX2hdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5maWVsZHNbZmllbGRJbnN0YW5jZS5fX2lkZW50aWZpZXJdID0gZmllbGRJbnN0YW5jZS5fX3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwuZW50aXRpZXMucHVzaChlbnRpdHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGF5ZXIgPSBuZXcgTWFwTGF5ZXJfMS5NYXBMYXllcihsZXZlbCwgbGF5ZXJEYXRhLl9faWRlbnRpZmllciwgbGF5ZXJEYXRhLl9fY1dpZCwgbGF5ZXJEYXRhLl9fY0hlaSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY2FubGluZSA9IGxldmVsLndvcmxkLnRpbGVzZXRTY2FubGluZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbGVTaXplID0gbGV2ZWwud29ybGQudGlsZXNldFNpemU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9rID0gMCwgX2wgPSBsYXllckRhdGEuZ3JpZFRpbGVzOyBfayA8IF9sLmxlbmd0aDsgX2srKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbGUgPSBfbFtfa107XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IE1hdGguZmxvb3IodGlsZS5weFswXSAvIGxheWVyRGF0YS5fX2dyaWRTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gTWF0aC5mbG9vcih0aWxlLnB4WzFdIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc0luZGV4ID0geCArICh5ICogbGF5ZXIud2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4ID0gTWF0aC5mbG9vcih0aWxlLnNyY1swXSAvIHRpbGVTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eSA9IE1hdGguZmxvb3IodGlsZS5zcmNbMV0gLyB0aWxlU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGlsZUluZGV4ID0gKHR5ICogc2NhbmxpbmUpICsgdHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllci50aWxlc1twb3NJbmRleF0gPSB0aWxlSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldmVsLmxheWVycy5zcGxpY2UoMCwgMCwgbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbC5sYXllckJ5TmFtZVtsYXllci5uYW1lXSA9IGxheWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsZXZlbC5sYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldmVsLndpZHRoID0gbGV2ZWwubGF5ZXJzWzBdLndpZHRoO1xuICAgICAgICAgICAgICAgIGxldmVsLmhlaWdodCA9IGxldmVsLmxheWVyc1swXS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXZlbC53aWR0aCA9IGxldmVsRGF0YS5weFdpZCAvIHRoaXMuZ3JpZFNpemU7XG4gICAgICAgICAgICAgICAgbGV2ZWwuaGVpZ2h0ID0gbGV2ZWxEYXRhLnB4SGVpIC8gdGhpcy5ncmlkU2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGV2ZWxzW2xldmVsLmlkXSA9IGxldmVsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gTERUS1dvcmxkO1xufShNYXBXb3JsZF8xLk1hcFdvcmxkKSk7XG5leHBvcnRzLkxEVEtXb3JsZCA9IExEVEtXb3JsZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFwRW50aXR5ID0gdm9pZCAwO1xudmFyIE1hcEVudGl0eSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBFbnRpdHkobGV2ZWwsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHR5cGUpIHtcbiAgICAgICAgdGhpcy5maWVsZHMgPSB7fTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBNYXBFbnRpdHkucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBNYXBFbnRpdHkobGV2ZWwsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy50eXBlKTtcbiAgICAgICAgcmVzdWx0LmZpZWxkcyA9IF9fYXNzaWduKHt9LCB0aGlzLmZpZWxkcyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gTWFwRW50aXR5O1xufSgpKTtcbmV4cG9ydHMuTWFwRW50aXR5ID0gTWFwRW50aXR5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hcExheWVyID0gdm9pZCAwO1xudmFyIE1hcExheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcExheWVyKGxldmVsLCBuYW1lLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy50aWxlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVzLnB1c2goMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWFwTGF5ZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh4LCB5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoKHggPCAwKSB8fCAoeSA8IDApIHx8ICh4ID49IHRoaXMud2lkdGgpIHx8ICh5ID49IHRoaXMuaGVpZ2h0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb3NJbmRleCA9IHggKyAoeSAqIHRoaXMud2lkdGgpO1xuICAgICAgICB0aGlzLnRpbGVzW3Bvc0luZGV4XSA9IHZhbHVlO1xuICAgIH07XG4gICAgTWFwTGF5ZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIGlmICgoeCA8IDApIHx8ICh5IDwgMCkgfHwgKHggPj0gdGhpcy53aWR0aCkgfHwgKHkgPj0gdGhpcy5oZWlnaHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9zSW5kZXggPSB4ICsgKHkgKiB0aGlzLndpZHRoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZXNbcG9zSW5kZXhdO1xuICAgIH07XG4gICAgTWFwTGF5ZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBNYXBMYXllcihsZXZlbCwgdGhpcy5uYW1lLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC50aWxlc1tpXSA9IHRoaXMudGlsZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHJldHVybiBNYXBMYXllcjtcbn0oKSk7XG5leHBvcnRzLk1hcExheWVyID0gTWFwTGF5ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hcExldmVsID0gdm9pZCAwO1xudmFyIE1hcFdvcmxkXzEgPSByZXF1aXJlKFwiLi9NYXBXb3JsZFwiKTtcbnZhciBNYXBMZXZlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBMZXZlbCh3b3JsZCwgaWQpIHtcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy5sYXllckJ5TmFtZSA9IHt9O1xuICAgICAgICB0aGlzLmVudGl0aWVzID0gW107XG4gICAgICAgIHRoaXMuZmllbGRzID0ge307XG4gICAgICAgIHRoaXMud29ybGRYID0gMDtcbiAgICAgICAgdGhpcy53b3JsZFkgPSAwO1xuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG4gICAgTWFwTGV2ZWwucHJvdG90eXBlLmdldEZpcnN0RW50aXR5T2ZUeXBlID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuZW50aXRpZXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gX2FbX2ldO1xuICAgICAgICAgICAgaWYgKGVudGl0eS50eXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIE1hcExldmVsLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciB3b3JsZENvcHkgPSBuZXcgTWFwV29ybGRfMS5NYXBXb3JsZCgpO1xuICAgICAgICB3b3JsZENvcHkuZ3JpZFNpemUgPSB0aGlzLndvcmxkLmdyaWRTaXplO1xuICAgICAgICB3b3JsZENvcHkubG9hZGVkID0gdGhpcy53b3JsZC5sb2FkZWQ7XG4gICAgICAgIHdvcmxkQ29weS50aWxlc2V0U2NhbmxpbmUgPSB0aGlzLndvcmxkLnRpbGVzZXRTY2FubGluZTtcbiAgICAgICAgd29ybGRDb3B5LnRpbGVzZXRTaXplID0gdGhpcy53b3JsZC50aWxlc2V0U2l6ZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBNYXBMZXZlbCh3b3JsZENvcHksIGlkKTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICByZXN1bHQud29ybGRYID0gdGhpcy53b3JsZFg7XG4gICAgICAgIHJlc3VsdC53b3JsZFkgPSB0aGlzLndvcmxkWTtcbiAgICAgICAgcmVzdWx0LmZpZWxkcyA9IF9fYXNzaWduKHt9LCB0aGlzLmZpZWxkcyk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmxheWVyczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBsYXllciA9IF9hW19pXTtcbiAgICAgICAgICAgIHZhciBjb3B5ID0gbGF5ZXIuY29weShyZXN1bHQpO1xuICAgICAgICAgICAgcmVzdWx0LmxheWVycy5wdXNoKGNvcHkpO1xuICAgICAgICAgICAgcmVzdWx0LmxheWVyQnlOYW1lW2NvcHkubmFtZV0gPSBjb3B5O1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSB0aGlzLmVudGl0aWVzOyBfYiA8IF9jLmxlbmd0aDsgX2IrKykge1xuICAgICAgICAgICAgdmFyIGVudGl0eSA9IF9jW19iXTtcbiAgICAgICAgICAgIHZhciBjb3B5ID0gZW50aXR5LmNvcHkocmVzdWx0KTtcbiAgICAgICAgICAgIHJlc3VsdC5lbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHJldHVybiBNYXBMZXZlbDtcbn0oKSk7XG5leHBvcnRzLk1hcExldmVsID0gTWFwTGV2ZWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFwV29ybGQgPSB2b2lkIDA7XG52YXIgTWFwV29ybGQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwV29ybGQoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxzID0ge307XG4gICAgICAgIHRoaXMuZ3JpZFNpemUgPSAwO1xuICAgICAgICB0aGlzLnRpbGVzZXRTY2FubGluZSA9IDA7XG4gICAgICAgIHRoaXMudGlsZXNldFNpemUgPSAwO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gTWFwV29ybGQ7XG59KCkpO1xuZXhwb3J0cy5NYXBXb3JsZCA9IE1hcFdvcmxkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYXBFbnRpdHkgPSBleHBvcnRzLk1hcExheWVyID0gZXhwb3J0cy5NYXBMZXZlbCA9IGV4cG9ydHMuTWFwV29ybGQgPSBleHBvcnRzLkxEVEtXb3JsZCA9IGV4cG9ydHMuU3RlcCA9IGV4cG9ydHMuUGF0aCA9IGV4cG9ydHMuQVN0YXJQYXRoRmluZGVyID0gZXhwb3J0cy5LZXlzID0gZXhwb3J0cy5CTFVFID0gZXhwb3J0cy5SRUQgPSBleHBvcnRzLkdSRUVOID0gZXhwb3J0cy5CTEFDSyA9IGV4cG9ydHMuV0hJVEUgPSBleHBvcnRzLnNldFNvdW5kT24gPSBleHBvcnRzLnNldE11c2ljT24gPSBleHBvcnRzLmlzU291bmRPbiA9IGV4cG9ydHMuaXNNdXNpY09uID0gZXhwb3J0cy5zdGFydEdhbWUgPSB2b2lkIDA7XG52YXIgR3V0ZV8xID0gcmVxdWlyZShcIi4vR3V0ZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0YXJ0R2FtZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLnN0YXJ0R2FtZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzTXVzaWNPblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLmlzTXVzaWNPbjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzU291bmRPblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLmlzU291bmRPbjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNldE11c2ljT25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEd1dGVfMS5zZXRNdXNpY09uOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2V0U291bmRPblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLnNldFNvdW5kT247IH0gfSk7XG52YXIgR3JhcGhpY3NfMSA9IHJlcXVpcmUoXCIuL0dyYXBoaWNzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiV0hJVEVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdyYXBoaWNzXzEuV0hJVEU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJCTEFDS1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3JhcGhpY3NfMS5CTEFDSzsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdSRUVOXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHcmFwaGljc18xLkdSRUVOOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUkVEXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHcmFwaGljc18xLlJFRDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJMVUVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdyYXBoaWNzXzEuQkxVRTsgfSB9KTtcbnZhciBLZXlzXzEgPSByZXF1aXJlKFwiLi9LZXlzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiS2V5c1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gS2V5c18xLktleXM7IH0gfSk7XG52YXIgQVN0YXJQYXRoRmluZGVyXzEgPSByZXF1aXJlKFwiLi9wYXRoL0FTdGFyUGF0aEZpbmRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFTdGFyUGF0aEZpbmRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQVN0YXJQYXRoRmluZGVyXzEuQVN0YXJQYXRoRmluZGVyOyB9IH0pO1xudmFyIFBhdGhfMSA9IHJlcXVpcmUoXCIuL3BhdGgvUGF0aFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlBhdGhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFBhdGhfMS5QYXRoOyB9IH0pO1xudmFyIFN0ZXBfMSA9IHJlcXVpcmUoXCIuL3BhdGgvU3RlcFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlN0ZXBcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFN0ZXBfMS5TdGVwOyB9IH0pO1xudmFyIExEVEtXb3JsZF8xID0gcmVxdWlyZShcIi4vdGlsZW1hcHMvTERUS1dvcmxkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTERUS1dvcmxkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBMRFRLV29ybGRfMS5MRFRLV29ybGQ7IH0gfSk7XG52YXIgTWFwV29ybGRfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL01hcFdvcmxkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFwV29ybGRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcFdvcmxkXzEuTWFwV29ybGQ7IH0gfSk7XG52YXIgTWFwTGV2ZWxfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL01hcExldmVsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFwTGV2ZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcExldmVsXzEuTWFwTGV2ZWw7IH0gfSk7XG52YXIgTWFwTGF5ZXJfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL01hcExheWVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFwTGF5ZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcExheWVyXzEuTWFwTGF5ZXI7IH0gfSk7XG52YXIgTWFwRW50aXR5XzEgPSByZXF1aXJlKFwiLi90aWxlbWFwcy9NYXBFbnRpdHlcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNYXBFbnRpdHlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcEVudGl0eV8xLk1hcEVudGl0eTsgfSB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=