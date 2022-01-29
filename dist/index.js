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
    GameLoop.prototype.loadLDTK = function (name, locator) {
        var _this = this;
        var world = new LDTKWorld_1.LDTKWorld();
        this.resources.push(world);
        return world.load(name, function (file) { return _this.loadJson(locator(file)); });
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
            req.send();
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
        req.send();
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
        this.parentList = [];
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
        for (var _i = 0, _a = this.openList; _i < _a.length; _i++) {
            var node = _a[_i];
            this.objectPool.push(node);
        }
        for (var _b = 0, _c = this.parentList; _b < _c.length; _b++) {
            var node = _c[_b];
            this.objectPool.push(node);
        }
        this.parentList = [];
        this.openList = [];
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
        if (!this.map.locationDiscovered(x, y)) {
            return true;
        }
        return this.map.blocked(this.mover, null, sx, sy, x, y, this.atTarget(x, y));
    };
    AStarPathFinder.prototype.atTarget = function (x, y) {
        for (var i = 0; i < this.tx.length; i++) {
            var tx = this.tx[i];
            var ty = this.ty[i];
            if (tx >= x && tx < x + this.mover.getTilesWidth()
                && ty >= y && ty < y + this.mover.getTilesHeight())
                return true;
        }
        return false;
    };
    AStarPathFinder.prototype.findPath = function (mover, tx, ty, width, height, max) {
        tx = Math.floor(tx);
        ty = Math.floor(ty);
        this.max = max;
        this.mover = mover;
        this.tx = [];
        this.ty = [];
        // central point for heuristic ordering
        this.cx = tx + width / 2;
        this.cy = ty + height / 2;
        for (var i = 0; i < width; i++) {
            this.tx.push(tx + i);
            this.ty.push(ty);
            if (height > 1) {
                this.tx.push(tx + i);
                this.ty.push(ty + height - 1);
            }
        }
        if (height > 2) {
            for (var i = 1; i < height - 1; i++) {
                this.tx.push(tx);
                this.ty.push(ty + i);
                if (width > 1) {
                    this.tx.push(tx + width - 1);
                    this.ty.push(ty + i);
                }
            }
        }
        if (this.tx.length === 0)
            return null; // zero size
        // console.log(`Destinations: (${tx},${ty})x(${width},${height}) => [${this.tx}] x [${this.ty}]`)
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
            this.parentList.push(best);
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
        var dx = Math.abs(this.cx - x);
        var dy = Math.abs(this.cy - y);
        var node = this.createMapNode(x, y, parent, (dx * dx) + (dy * dy));
        var index = AStarPathFinder.binarySearch(this.openList, node.h);
        this.openList.splice(index, 0, node);
    };
    AStarPathFinder.binarySearch = function (array, h) {
        var lo = -1, hi = array.length;
        while (1 + lo < hi) {
            var mi = lo + ((hi - lo) >> 1);
            if (array[mi].h > h) {
                hi = mi;
            }
            else {
                lo = mi;
            }
        }
        return hi;
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
    LDTKWorld.prototype.load = function (file, loader) {
        var _this = this;
        return loader(file).then(function (json) {
            _this.gridSize = json.defaultGridSize;
            var tileset = json.defs.tilesets[0];
            _this.tilesetScanline = tileset.pxWid / tileset.tileGridSize;
            _this.tilesetSize = tileset.tileGridSize;
            var levels = json.levels;
            if (json.worlds && json.worlds.length > 0) {
                levels = [];
                for (var _i = 0, _a = json.worlds; _i < _a.length; _i++) {
                    var world = _a[_i];
                    levels = levels.concat(world.levels);
                }
            }
            var asyncLevels = [];
            var _loop_1 = function (levelData) {
                var level = new MapLevel_1.MapLevel(_this, levelData.identifier);
                level.worldX = levelData.worldX;
                level.worldY = levelData.worldY;
                for (var _d = 0, _e = levelData.fieldInstances; _d < _e.length; _d++) {
                    var fieldInstance = _e[_d];
                    level.fields[fieldInstance.__identifier] = fieldInstance.__value;
                }
                var layers = void 0;
                if (levelData.layerInstances) // embedded layers
                    layers = Promise.resolve(levelData);
                else if (levelData.externalRelPath) {
                    layers = loader(levelData.externalRelPath);
                }
                else {
                    throw new Error("Unknown LDTK file format");
                }
                asyncLevels.push(layers.then(function (data) {
                    LDTKWorld.loadLayers(level, data.layerInstances);
                    if (level.layers.length > 0) {
                        level.width = level.layers[0].width;
                        level.height = level.layers[0].height;
                    }
                    else {
                        level.width = levelData.pxWid / _this.gridSize;
                        level.height = levelData.pxHei / _this.gridSize;
                    }
                    _this.levels[level.id] = level;
                    return level;
                }));
            };
            for (var _b = 0, _c = json.levels; _b < _c.length; _b++) {
                var levelData = _c[_b];
                _loop_1(levelData);
            }
            return Promise.all(asyncLevels).then(function (value) {
                _this.loaded = true;
                return _this;
            });
        });
    };
    LDTKWorld.loadLayers = function (level, layerInstances) {
        for (var _i = 0, layerInstances_1 = layerInstances; _i < layerInstances_1.length; _i++) {
            var layerData = layerInstances_1[_i];
            if (layerData.__type === "Entities") {
                for (var _a = 0, _b = layerData.entityInstances; _a < _b.length; _a++) {
                    var entityData = _b[_a];
                    var entity = new MapEntity_1.MapEntity(level, entityData.px[0] / layerData.__gridSize, entityData.px[1] / layerData.__gridSize, entityData.width / layerData.__gridSize, entityData.height / layerData.__gridSize, entityData.__identifier);
                    for (var _c = 0, _d = entityData.fieldInstances; _c < _d.length; _c++) {
                        var fieldInstance = _d[_c];
                        entity.fields[fieldInstance.__identifier] = fieldInstance.__value;
                    }
                    level.entities.push(entity);
                }
            }
            else {
                var layer = new MapLayer_1.MapLayer(level, layerData.__identifier, layerData.__cWid, layerData.__cHei);
                var scanline = level.world.tilesetScanline;
                var tileSize = level.world.tilesetSize;
                for (var _e = 0, _f = layerData.gridTiles; _e < _f.length; _e++) {
                    var tile = _f[_e];
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
    MapLevel.prototype.entitiesOfType = function (type) {
        return this.entities.filter(function (entity) { return entity.type === type; });
    };
    MapLevel.prototype.firstEntityOfType = function (type) {
        return this.entities.find(function (entity) { return entity.type === type; });
    };
    MapLevel.prototype.copy = function (id) {
        var worldCopy = new MapWorld_1.MapWorld();
        worldCopy.gridSize = this.world.gridSize;
        worldCopy.loaded = this.world.loaded;
        worldCopy.tilesetScanline = this.world.tilesetScanline;
        worldCopy.tilesetSize = this.world.tilesetSize;
        var levelCopy = new MapLevel(worldCopy, id);
        levelCopy.width = this.width;
        levelCopy.height = this.height;
        levelCopy.worldX = this.worldX;
        levelCopy.worldY = this.worldY;
        levelCopy.fields = __assign({}, this.fields);
        for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
            var layer = _a[_i];
            var copy = layer.copy(levelCopy);
            levelCopy.layers.push(copy);
            levelCopy.layerByName[copy.name] = copy;
        }
        for (var _b = 0, _c = this.entities; _b < _c.length; _b++) {
            var entity = _c[_b];
            var copy = entity.copy(levelCopy);
            levelCopy.entities.push(copy);
        }
        return levelCopy;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0dyYXBoaWNzLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvR3V0ZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0tleXMudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL0JpdG1hcEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL0ZvbnRJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9HcmFwaGljc0ltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL1NvdW5kSW1wbC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL2ltcGwvVGlsZXNldEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9wYXRoL0FTdGFyUGF0aEZpbmRlci50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvTWFwTm9kZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvUGF0aC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvU3RlcC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL0xEVEtXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcEVudGl0eS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcExheWVyLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvdGlsZW1hcHMvTWFwTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy90aWxlbWFwcy9NYXBXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxZQUFZLEdBQUcsYUFBYSxHQUFHLFdBQVcsR0FBRyxhQUFhLEdBQUcsYUFBYTtBQUMxRSxhQUFhO0FBQ2IsYUFBYTtBQUNiLFdBQVc7QUFDWCxhQUFhO0FBQ2IsWUFBWTs7Ozs7Ozs7Ozs7QUNQQztBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxpQkFBaUIsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUI7QUFDbkcsbUJBQW1CLG1CQUFPLENBQUMsbURBQW1CO0FBQzlDLGlCQUFpQixtQkFBTyxDQUFDLCtDQUFpQjtBQUMxQyxxQkFBcUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDbEQsa0JBQWtCLG1CQUFPLENBQUMsaURBQWtCO0FBQzVDLG9CQUFvQixtQkFBTyxDQUFDLHFEQUFvQjtBQUNoRCxrQkFBa0IsbUJBQU8sQ0FBQyx5REFBc0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsa0JBQWtCLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxnQkFBZ0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFD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NEJBQTRCLEVBQUUsRUFBRSxFQUFDO0FBQ2xILGlCQUFpQixtQkFBTyxDQUFDLHVEQUFxQjtBQUM5Qyw0Q0FBMkMsQ0FBQyxxQ0FBcUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFDO0FBQ2xILGtCQUFrQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNoRCw2Q0FBNEMsQ0FBQyxxQ0FBcUMsOEJBQThCLEVBQUUsRUFBRSxFQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3V0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndXRlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJMVUUgPSBleHBvcnRzLkdSRUVOID0gZXhwb3J0cy5SRUQgPSBleHBvcnRzLkJMQUNLID0gZXhwb3J0cy5XSElURSA9IHZvaWQgMDtcbmV4cG9ydHMuV0hJVEUgPSBcIndoaXRlXCI7XG5leHBvcnRzLkJMQUNLID0gXCJibGFja1wiO1xuZXhwb3J0cy5SRUQgPSBcInJlZFwiO1xuZXhwb3J0cy5HUkVFTiA9IFwiZ3JlZW5cIjtcbmV4cG9ydHMuQkxVRSA9IFwiYmx1ZVwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXJ0R2FtZSA9IGV4cG9ydHMuc2V0TXVzaWNPbiA9IGV4cG9ydHMuc2V0U291bmRPbiA9IGV4cG9ydHMuaXNNdXNpY09uID0gZXhwb3J0cy5pc1NvdW5kT24gPSB2b2lkIDA7XG52YXIgQml0bWFwSW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9CaXRtYXBJbXBsXCIpO1xudmFyIEZvbnRJbXBsXzEgPSByZXF1aXJlKFwiLi9pbXBsL0ZvbnRJbXBsXCIpO1xudmFyIEdyYXBoaWNzSW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9HcmFwaGljc0ltcGxcIik7XG52YXIgU291bmRJbXBsXzEgPSByZXF1aXJlKFwiLi9pbXBsL1NvdW5kSW1wbFwiKTtcbnZhciBUaWxlc2V0SW1wbF8xID0gcmVxdWlyZShcIi4vaW1wbC9UaWxlc2V0SW1wbFwiKTtcbnZhciBMRFRLV29ybGRfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL0xEVEtXb3JsZFwiKTtcbnZhciBHQU1FX0xPT1A7XG52YXIgU09VTkRfT04gPSB0cnVlO1xudmFyIE1VU0lDX09OID0gdHJ1ZTtcbmZ1bmN0aW9uIGlzU291bmRPbigpIHtcbiAgICByZXR1cm4gU09VTkRfT047XG59XG5leHBvcnRzLmlzU291bmRPbiA9IGlzU291bmRPbjtcbmZ1bmN0aW9uIGlzTXVzaWNPbigpIHtcbiAgICByZXR1cm4gTVVTSUNfT047XG59XG5leHBvcnRzLmlzTXVzaWNPbiA9IGlzTXVzaWNPbjtcbmZ1bmN0aW9uIHNldFNvdW5kT24ob24pIHtcbiAgICBTT1VORF9PTiA9IG9uO1xufVxuZXhwb3J0cy5zZXRTb3VuZE9uID0gc2V0U291bmRPbjtcbmZ1bmN0aW9uIHNldE11c2ljT24ob24pIHtcbiAgICBpZiAoIW9uICYmIE1VU0lDX09OKSB7XG4gICAgICAgIE1VU0lDX09OID0gZmFsc2U7XG4gICAgICAgIGlmIChTb3VuZEltcGxfMS5Tb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgICAgICAgU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvbiAmJiAhTVVTSUNfT04pIHtcbiAgICAgICAgTVVTSUNfT04gPSB0cnVlO1xuICAgICAgICBpZiAoU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICAgIFNvdW5kSW1wbF8xLlNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnBsYXkoU291bmRJbXBsXzEuU291bmRJbXBsLkNVUlJFTlRfTVVTSUMudm9sdW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuc2V0TXVzaWNPbiA9IHNldE11c2ljT247XG5mdW5jdGlvbiBzdGFydEdhbWUoZ2FtZSkge1xuICAgIEdBTUVfTE9PUCA9IG5ldyBHYW1lTG9vcCgpLnN0YXJ0KGdhbWUpO1xufVxuZXhwb3J0cy5zdGFydEdhbWUgPSBzdGFydEdhbWU7XG52YXIgR2FtZUxvb3AgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2FtZUxvb3AoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gW107XG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5pbml0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmdldEdyYXBoaWNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaGljcztcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5yZXNvdXJjZXNSZW1haW5pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc291cmNlcy5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuICFyLmxvYWRlZDsgfSkubGVuZ3RoO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLnJlc291cmNlc1RvdGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXMubGVuZ3RoO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmFsbFJlc291cmNlc0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMucmVzb3VyY2VzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlID0gX2FbX2ldO1xuICAgICAgICAgICAgaWYgKCFyZXNvdXJjZS5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuaW5pdFJlc291cmNlc09uRmlyc3RDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFsbFJlc291cmNlc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMucmVzb3VyY2VzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciByZXNvdXJjZSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5pbml0T25GaXJzdENsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5tb3VzZU1vdmVIYW5kbGVyID0gZnVuY3Rpb24gKHgsIHksIGlkKSB7XG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKSB7IGlkID0gMDsgfVxuICAgICAgICB0aGlzLmluaXRSZXNvdXJjZXNPbkZpcnN0Q2xpY2soKTtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZ3JhcGhpY3MuY2FudmFzO1xuICAgICAgICBjYW52YXMuZm9jdXMoKTtcbiAgICAgICAgdmFyIHdpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoKHggLyB3aWR0aCkgKiBjYW52YXMud2lkdGgpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcigoeSAvIGhlaWdodCkgKiBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5nYW1lLm9uTW91c2VNb3ZlKHRoaXMsIHgsIHkpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLm1vdXNlV2hlZWxIYW5kbGVyID0gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5vbk1vdXNlV2hlZWwodGhpcywgZGVsdGEpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLm1vdXNlRG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSAwOyB9XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5ncmFwaGljcy5jYW52YXM7XG4gICAgICAgIGNhbnZhcy5mb2N1cygpO1xuICAgICAgICB2YXIgd2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgICB4ID0gTWF0aC5mbG9vcigoeCAvIHdpZHRoKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKCh5IC8gaGVpZ2h0KSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdhbWUub25Nb3VzZURvd24odGhpcywgeCwgeSwgaWQpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLm1vdXNlVXBIYW5kbGVyID0gZnVuY3Rpb24gKHgsIHksIGlkKSB7XG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKSB7IGlkID0gMDsgfVxuICAgICAgICB0aGlzLmluaXRSZXNvdXJjZXNPbkZpcnN0Q2xpY2soKTtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZ3JhcGhpY3MuY2FudmFzO1xuICAgICAgICB2YXIgd2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgICB4ID0gTWF0aC5mbG9vcigoeCAvIHdpZHRoKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKCh5IC8gaGVpZ2h0KSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdhbWUub25Nb3VzZVVwKHRoaXMsIHgsIHksIGlkKTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5rZXlEb3duSGFuZGxlciA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5pbml0UmVzb3VyY2VzT25GaXJzdENsaWNrKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5vbktleURvd24odGhpcywga2V5KTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5rZXlVcEhhbmRsZXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuZ2FtZS5vbktleVVwKHRoaXMsIGtleSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoZ2FtZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzSW1wbF8xLkdyYXBoaWNzSW1wbCgpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVjdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubW91c2VEb3duSGFuZGxlcih4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1vdXNlTW92ZUhhbmRsZXIoeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubW91c2VVcEhhbmRsZXIoMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBfdGhpcy5tb3VzZVdoZWVsSGFuZGxlcihldmVudC5kZWx0YVkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIF90aGlzLm1vdXNlRG93bkhhbmRsZXIoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSwgZXZlbnQuYnV0dG9uKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIF90aGlzLm1vdXNlTW92ZUhhbmRsZXIoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tb3VzZVVwSGFuZGxlcihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZLCBldmVudC5idXR0b24pO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgX3RoaXMua2V5RG93bkhhbmRsZXIoZXZlbnQuY29kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgX3RoaXMua2V5VXBIYW5kbGVyKGV2ZW50LmNvZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ2FtZS5pbml0KHRoaXMpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubG9vcCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZGVsdGEgPSAwO1xuICAgICAgICBpZiAodGhpcy5sYXN0RnJhbWUgIT09IDApIHtcbiAgICAgICAgICAgIGRlbHRhID0gbm93IC0gdGhpcy5sYXN0RnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSBub3c7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYXBwbHlGb250KCk7XG4gICAgICAgIHRoaXMuZ2FtZS51cGRhdGUodGhpcywgZGVsdGEpO1xuICAgICAgICB0aGlzLmdhbWUucmVuZGVyKHRoaXMsIHRoaXMuZ3JhcGhpY3MpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubG9vcCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkTXVzaWMgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBzb3VuZCA9IG5ldyBTb3VuZEltcGxfMS5Tb3VuZEltcGwodXJsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaChzb3VuZCk7XG4gICAgICAgIHJldHVybiBzb3VuZDtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkU291bmQgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBzb3VuZCA9IG5ldyBTb3VuZEltcGxfMS5Tb3VuZEltcGwodXJsLCBmYWxzZSk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2goc291bmQpO1xuICAgICAgICByZXR1cm4gc291bmQ7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZEJpdG1hcCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIGJpdG1hcCA9IG5ldyBCaXRtYXBJbXBsXzEuQml0bWFwSW1wbCh1cmwpO1xuICAgICAgICB0aGlzLnJlc291cmNlcy5wdXNoKGJpdG1hcCk7XG4gICAgICAgIHJldHVybiBiaXRtYXA7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZFNjYWxlZFRpbGVzZXQgPSBmdW5jdGlvbiAodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIHNjYWxlKSB7XG4gICAgICAgIHZhciB0aWxlc2V0ID0gbmV3IFRpbGVzZXRJbXBsXzEuVGlsZXNldEltcGwodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIHNjYWxlKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaCh0aWxlc2V0KTtcbiAgICAgICAgcmV0dXJuIHRpbGVzZXQ7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZFRpbGVzZXQgPSBmdW5jdGlvbiAodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpIHtcbiAgICAgICAgdmFyIHRpbGVzZXQgPSBuZXcgVGlsZXNldEltcGxfMS5UaWxlc2V0SW1wbCh1cmwsIHRpbGVXaWR0aCwgdGlsZUhlaWdodCwgMSk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2godGlsZXNldCk7XG4gICAgICAgIHJldHVybiB0aWxlc2V0O1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmxvYWRGb250ID0gZnVuY3Rpb24gKHVybCwgbmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IEZvbnRJbXBsXzEuRm9udEltcGwodXJsLCBuYW1lKTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkTERUSyA9IGZ1bmN0aW9uIChuYW1lLCBsb2NhdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB3b3JsZCA9IG5ldyBMRFRLV29ybGRfMS5MRFRLV29ybGQoKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaCh3b3JsZCk7XG4gICAgICAgIHJldHVybiB3b3JsZC5sb2FkKG5hbWUsIGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiBfdGhpcy5sb2FkSnNvbihsb2NhdG9yKGZpbGUpKTsgfSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZEpzb24gPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXEub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXEucmVzcG9uc2VUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXEucmVzcG9uc2VUZXh0LnJlcGxhY2UoL1xcXFxcInxcIig/OlxcXFxcInxbXlwiXSkqXCJ8KFxcL1xcLy4qfFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pL2csIGZ1bmN0aW9uIChtLCBnKSB7IHJldHVybiBnID8gXCJcIiA6IG07IH0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxLnNlbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuaXNSdW5uaW5nU3RhbmRhbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICh3aW5kb3cubmF2aWdhdG9yLnN0YW5kYWxvbmUgPT09IHRydWUpIHx8ICh3aW5kb3cubWF0Y2hNZWRpYSgnKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSknKS5tYXRjaGVzKTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5pc1RhYmxldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGhvbmUoKSAmJiB0aGlzLmlzSU9TKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1RhYmxldCA9IC8oaXBhZHx0YWJsZXR8KGFuZHJvaWQoPyEuKm1vYmlsZSkpfCh3aW5kb3dzKD8hLipwaG9uZSkoLip0b3VjaCkpfGtpbmRsZXxwbGF5Ym9va3xzaWxrfChwdWZmaW4oPyEuKihJUHxBUHxXUCkpKSkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgcmV0dXJuIGlzVGFibGV0O1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmlzTW9iaWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0lPUygpIHx8IHRoaXMuaXNBbmRyb2lkKCk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuaXNBbmRyb2lkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSAhPSBudWxsO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmlzSU9TID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgJ2lQYWQgU2ltdWxhdG9yJyxcbiAgICAgICAgICAgICdpUGhvbmUgU2ltdWxhdG9yJyxcbiAgICAgICAgICAgICdpUG9kIFNpbXVsYXRvcicsXG4gICAgICAgICAgICAnaVBhZCcsXG4gICAgICAgICAgICAnaVBob25lJyxcbiAgICAgICAgICAgICdpUG9kJ1xuICAgICAgICBdLmluZGV4T2YobmF2aWdhdG9yLnBsYXRmb3JtKSA+PSAwXG4gICAgICAgICAgICAvLyBpUGFkIG9uIGlPUyAxMyBkZXRlY3Rpb25cbiAgICAgICAgICAgIHx8IChuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKFwiTWFjXCIpICYmIFwib250b3VjaGVuZFwiIGluIGRvY3VtZW50KTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5pc1Bob25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0lPUygpICYmIHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KVwiKS5tYXRjaGVzO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLnNldFNvdW5kVm9sdW1lID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgU291bmRJbXBsXzEuU291bmRJbXBsLnNldFNvdW5kVm9sdW1lKHYpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmdldFNvdW5kVm9sdW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU291bmRJbXBsXzEuU291bmRJbXBsLmdldFNvdW5kVm9sdW1lKCk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuc2V0TXVzaWNWb2x1bWUgPSBmdW5jdGlvbiAodikge1xuICAgICAgICBTb3VuZEltcGxfMS5Tb3VuZEltcGwuc2V0TXVzaWNWb2x1bWUodik7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuZ2V0TXVzaWNWb2x1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBTb3VuZEltcGxfMS5Tb3VuZEltcGwuZ2V0TXVzaWNWb2x1bWUoKTtcbiAgICB9O1xuICAgIHJldHVybiBHYW1lTG9vcDtcbn0oKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuS2V5cyA9IHZvaWQgMDtcbnZhciBLZXlzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEtleXMoKSB7XG4gICAgfVxuICAgIEtleXMuRVNDQVBFX0tFWSA9IFwiRXNjYXBlXCI7XG4gICAgS2V5cy5FTlRFUl9LRVkgPSBcIkVudGVyXCI7XG4gICAgS2V5cy5MRUZUX0tFWSA9IFwiQXJyb3dMZWZ0XCI7XG4gICAgS2V5cy5SSUdIVF9LRVkgPSBcIkFycm93UmlnaHRcIjtcbiAgICBLZXlzLlVQX0tFWSA9IFwiQXJyb3dVcFwiO1xuICAgIEtleXMuRE9XTl9LRVkgPSBcIkFycm93RG93blwiO1xuICAgIEtleXMuU1BBQ0VfS0VZID0gXCIgXCI7XG4gICAgS2V5cy5TX0tFWSA9IFwic1wiO1xuICAgIEtleXMuTV9LRVkgPSBcIm1cIjtcbiAgICBLZXlzLkFfS0VZID0gXCJhXCI7XG4gICAgS2V5cy5XX0tFWSA9IFwid1wiO1xuICAgIEtleXMuRF9LRVkgPSBcImRcIjtcbiAgICBLZXlzLkNPTlRST0xfS0VZID0gXCJDb250cm9sXCI7XG4gICAgS2V5cy5NRVRBX0tFWSA9IFwiTWV0YVwiO1xuICAgIEtleXMuQUxUX0tFWSA9IFwiQWx0XCI7XG4gICAgS2V5cy5UQUJfS0VZID0gXCJUYWJcIjtcbiAgICByZXR1cm4gS2V5cztcbn0oKSk7XG5leHBvcnRzLktleXMgPSBLZXlzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJpdG1hcEltcGwgPSB2b2lkIDA7XG52YXIgQml0bWFwSW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCaXRtYXBJbXBsKHVybCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLndpZHRoID0gMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMud2lkdGggPSBfdGhpcy5pbWFnZS53aWR0aDtcbiAgICAgICAgICAgIF90aGlzLmhlaWdodCA9IF90aGlzLmltYWdlLmhlaWdodDtcbiAgICAgICAgICAgIF90aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdXJsO1xuICAgIH1cbiAgICBCaXRtYXBJbXBsLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCwgeCwgeSkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHgsIHkpO1xuICAgIH07XG4gICAgQml0bWFwSW1wbC5wcm90b3R5cGUuZHJhd1NjYWxlZCA9IGZ1bmN0aW9uIChjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9O1xuICAgIEJpdG1hcEltcGwucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICByZXR1cm4gQml0bWFwSW1wbDtcbn0oKSk7XG5leHBvcnRzLkJpdG1hcEltcGwgPSBCaXRtYXBJbXBsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZvbnRJbXBsID0gdm9pZCAwO1xudmFyIEZvbnRJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvbnRJbXBsKHVybCwgbmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IFwiQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBcIiArIG5hbWUgKyBcIjsgc3JjOiB1cmwoJ1wiICsgdXJsICsgXCInKTsgfSBib2R5IHsgZm9udC1mYW1pbHk6IFwiICsgbmFtZSArIFwiOyB9XCI7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgICBGb250SW1wbC5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbiAoY3R4LCBzaXplKSB7XG4gICAgICAgIGN0eC5mb250ID0gc2l6ZSArIFwicHggXCIgKyB0aGlzLm5hbWU7XG4gICAgfTtcbiAgICByZXR1cm4gRm9udEltcGw7XG59KCkpO1xuZXhwb3J0cy5Gb250SW1wbCA9IEZvbnRJbXBsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdyYXBoaWNzSW1wbCA9IHZvaWQgMDtcbnZhciBGb250SW1wbF8xID0gcmVxdWlyZShcIi4vRm9udEltcGxcIik7XG52YXIgaXNGaXJlZm94ID0gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcbnZhciBPZmZzY3JlZW5JbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9mZnNjcmVlbkltcGwoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cbiAgICBPZmZzY3JlZW5JbXBsLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xuICAgIH07XG4gICAgT2Zmc2NyZWVuSW1wbC5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIH07XG4gICAgT2Zmc2NyZWVuSW1wbC5wcm90b3R5cGUuc2V0RGltZW5zaW9uID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH07XG4gICAgcmV0dXJuIE9mZnNjcmVlbkltcGw7XG59KCkpO1xudmFyIENvcHlCaXRtYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29weUJpdG1hcChjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgICBDb3B5Qml0bWFwLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCwgeCwgeSkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB4LCB5KTtcbiAgICB9O1xuICAgIENvcHlCaXRtYXAucHJvdG90eXBlLmRyYXdTY2FsZWQgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG4gICAgQ29weUJpdG1hcC5wcm90b3R5cGUuZ2V0RHJhd2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgICB9O1xuICAgIENvcHlCaXRtYXAucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICByZXR1cm4gQ29weUJpdG1hcDtcbn0oKSk7XG52YXIgR3JhcGhpY3NJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdyYXBoaWNzSW1wbCgpIHtcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IDIwO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZWNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMubWFpbkN0eCA9IHRoaXMuY3R4O1xuICAgICAgICB0aGlzLmN0eC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmZvbnRTbW9vdGggPSBcIm5ldmVyXCI7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndlYmtpdEZvbnRTbW9vdGhpbmcgPSBcIm5vbmVcIjtcbiAgICAgICAgaWYgKGlzRmlyZWZveCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSBcImNyaXNwLWVkZ2VzXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IFwicGl4ZWxhdGVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb250ID0gbmV3IEZvbnRJbXBsXzEuRm9udEltcGwoXCJmb250LnR0ZlwiLCBcIkd1dGVEZWZhdWx0XCIpO1xuICAgICAgICBpZiAodGhpcy5mb250KSB7XG4gICAgICAgICAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuY2xpcCA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHZhciBzcXVhcmVQYXRoID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICBzcXVhcmVQYXRoLnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsaXAoc3F1YXJlUGF0aCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmNyZWF0ZU9mZnNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICBjdHgud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjYW52YXMuc3R5bGUuZm9udFNtb290aCA9IFwibmV2ZXJcIjtcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS53ZWJraXRGb250U21vb3RoaW5nID0gXCJub25lXCI7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE9mZnNjcmVlbkltcGwoY2FudmFzLCBjdHgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGNyZWF0ZSBvZmZzY3JlZW4gY2FudmFzXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdUb09mZnNjcmVlbiA9IGZ1bmN0aW9uIChzY3JlZW4pIHtcbiAgICAgICAgaWYgKHNjcmVlbikge1xuICAgICAgICAgICAgdGhpcy5jdHggPSBzY3JlZW4uY3R4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLm1haW5DdHg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd09mZnNjcmVlbiA9IGZ1bmN0aW9uIChzY3JlZW4pIHtcbiAgICAgICAgdGhpcy5jdHgud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2Uoc2NyZWVuLmNhbnZhcywgMCwgMCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdTY2FsZWRPZmZzY3JlZW4gPSBmdW5jdGlvbiAoc2NyZWVuLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY3R4LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHNjcmVlbi5jYW52YXMsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5jbGVhclJlY3QgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmZpdFNjcmVlbiA9IGZ1bmN0aW9uIChwaXhlbFNjYWxlKSB7XG4gICAgICAgIHZhciByZWFsV2lkdGggPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lcldpZHRoIC8gcGl4ZWxTY2FsZSkgKiBwaXhlbFNjYWxlO1xuICAgICAgICB2YXIgcmVhbEhlaWdodCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVySGVpZ2h0IC8gcGl4ZWxTY2FsZSkgKiBwaXhlbFNjYWxlO1xuICAgICAgICB2YXIgdmlydHVhbFdpZHRoID0gcmVhbFdpZHRoIC8gcGl4ZWxTY2FsZTtcbiAgICAgICAgdmFyIHZpcnR1YWxIZWlnaHQgPSByZWFsSGVpZ2h0IC8gcGl4ZWxTY2FsZTtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHZpcnR1YWxXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdmlydHVhbEhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSByZWFsV2lkdGggKyBcInB4XCI7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IHJlYWxIZWlnaHQgKyBcInB4XCI7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLnNldEFscGhhID0gZnVuY3Rpb24gKGFscGhhKSB7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgICAgIChfYSA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIDAsIDApO1xuICAgICAgICByZXR1cm4gbmV3IENvcHlCaXRtYXAoY2FudmFzKTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLnNjYWxlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoeCwgeSk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmFwcGx5Rm9udCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb250LmFwcGx5KHRoaXMuY3R4LCB0aGlzLmZvbnRTaXplKTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuc2V0Rm9udCA9IGZ1bmN0aW9uIChmb250KSB7XG4gICAgICAgIHRoaXMuZm9udCA9IGZvbnQ7XG4gICAgICAgIHRoaXMuYXBwbHlGb250KCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLnNldEZvbnRTaXplID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuYXBwbHlGb250KCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmdldFN0cmluZ1dpZHRoID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5kcmF3U3RyaW5nID0gZnVuY3Rpb24gKHgsIHksIHRleHQsIGNvbCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2w7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5zZXRDb21wb3NpdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBuYW1lO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5maWxsUmVjdCA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2wpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd0xpbmUgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIsIGNvbCwgd2lkdGgpIHtcbiAgICAgICAgaWYgKHdpZHRoID09PSB2b2lkIDApIHsgd2lkdGggPSAxOyB9XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gY29sO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd0JpdG1hcCA9IGZ1bmN0aW9uICh4LCB5LCBiaXRtYXApIHtcbiAgICAgICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBiaXRtYXAuZHJhdyh0aGlzLmN0eCwgeCwgeSk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdTY2FsZWRCaXRtYXAgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgYml0bWFwKSB7XG4gICAgICAgIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYml0bWFwLmRyYXdTY2FsZWQodGhpcy5jdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG4gICAgcmV0dXJuIEdyYXBoaWNzSW1wbDtcbn0oKSk7XG5leHBvcnRzLkdyYXBoaWNzSW1wbCA9IEdyYXBoaWNzSW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Tb3VuZEltcGwgPSB2b2lkIDA7XG52YXIgR3V0ZV8xID0gcmVxdWlyZShcIi4uL0d1dGVcIik7XG52YXIgQXVkaW9Db250ZXh0O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG59XG52YXIgQVVESU9fQ09OVEVYVDtcbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKEd1dGVfMS5pc011c2ljT24oKSkge1xuICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5wbGF5KFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnZvbHVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKEd1dGVfMS5pc1NvdW5kT24oKSkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gU291bmRJbXBsLkNVUlJFTlRfTE9PUFM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbG9vcCA9IF9hW19pXTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICBsb29wLnN0b3AoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9vcC5wbGF5KGxvb3Audm9sdW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKTtcbn1cbnZhciBTb3VuZEltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU291bmRJbXBsKHVybCwgbXVzaWMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52b2x1bWUgPSAxO1xuICAgICAgICB0aGlzLm11c2ljID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9vcGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLm11c2ljID0gbXVzaWM7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgICAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGFycmF5QnVmZmVyID0gcmVxLnJlc3BvbnNlO1xuICAgICAgICAgICAgaWYgKGFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGF0YSA9IGFycmF5QnVmZmVyO1xuICAgICAgICAgICAgICAgIF90aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJ5TG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXEuc2VuZCgpO1xuICAgIH1cbiAgICBTb3VuZEltcGwuc2V0U291bmRWb2x1bWUgPSBmdW5jdGlvbiAodikge1xuICAgICAgICB0aGlzLnNvdW5kVm9sdW1lID0gdjtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuQ1VSUkVOVF9MT09QUzsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBsb29wID0gX2FbX2ldO1xuICAgICAgICAgICAgbG9vcC5nYWluLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUobG9vcC52b2x1bWUgKiBTb3VuZEltcGwuc291bmRWb2x1bWUsIEFVRElPX0NPTlRFWFQuY3VycmVudFRpbWUgKyAwLjI1KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU291bmRJbXBsLmdldFNvdW5kVm9sdW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VuZFZvbHVtZTtcbiAgICB9O1xuICAgIFNvdW5kSW1wbC5zZXRNdXNpY1ZvbHVtZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHRoaXMubXVzaWNWb2x1bWUgPSB2O1xuICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5nYWluKSB7XG4gICAgICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnZvbHVtZSAqIFNvdW5kSW1wbC5tdXNpY1ZvbHVtZSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSArIDAuMjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTb3VuZEltcGwuZ2V0TXVzaWNWb2x1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11c2ljVm9sdW1lO1xuICAgIH07XG4gICAgU291bmRJbXBsLnByb3RvdHlwZS50cnlMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoQVVESU9fQ09OVEVYVCAmJiB0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIEFVRElPX0NPTlRFWFQuZGVjb2RlQXVkaW9EYXRhKHRoaXMuZGF0YSwgZnVuY3Rpb24gKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIF90aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgPT09IF90aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGxheShfdGhpcy52b2x1bWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7IGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGxvYWQ6IFwiICsgX3RoaXMudXJsKTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNvdW5kSW1wbC5wcm90b3R5cGUuaW5pdE9uRmlyc3RDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFBVURJT19DT05URVhUKSB7XG4gICAgICAgICAgICBBVURJT19DT05URVhUID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICAgICAgQVVESU9fQ09OVEVYVC5yZXN1bWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyeUxvYWQoKTtcbiAgICB9O1xuICAgIFNvdW5kSW1wbC5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uICh2b2x1bWUsIGxvb3ApIHtcbiAgICAgICAgaWYgKGxvb3AgPT09IHZvaWQgMCkgeyBsb29wID0gZmFsc2U7IH1cbiAgICAgICAgdGhpcy52b2x1bWUgPSB2b2x1bWU7XG4gICAgICAgIGlmICghdGhpcy5idWZmZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm11c2ljKSB7XG4gICAgICAgICAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDKSB7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgPSB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm11c2ljKSB7XG4gICAgICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubXVzaWMgJiYgIUd1dGVfMS5pc011c2ljT24oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFHdXRlXzEuaXNTb3VuZE9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvdXJjZSA9IEFVRElPX0NPTlRFWFQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgIHRoaXMuc291cmNlLmJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgICAgICB0aGlzLmdhaW4gPSBBVURJT19DT05URVhULmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLmdhaW4pO1xuICAgICAgICB0aGlzLmdhaW4uY29ubmVjdChBVURJT19DT05URVhULmRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5sb29wZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMubXVzaWMgfHwgbG9vcCkge1xuICAgICAgICAgICAgdGhpcy5nYWluLmdhaW4udmFsdWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UubG9vcCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxvb3BlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb3VyY2Uuc3RhcnQoMCk7XG4gICAgICAgIGlmICh0aGlzLm11c2ljIHx8IGxvb3ApIHtcbiAgICAgICAgICAgIHRoaXMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHZvbHVtZSAqIChsb29wID8gU291bmRJbXBsLnNvdW5kVm9sdW1lIDogU291bmRJbXBsLm11c2ljVm9sdW1lKSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSArIDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYWluLmdhaW4udmFsdWUgPSB2b2x1bWUgKiBTb3VuZEltcGwuc291bmRWb2x1bWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvb3ApIHtcbiAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX0xPT1BTLnB1c2godGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNvdW5kSW1wbC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIChyZW1vdmUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHJlbW92ZSA9PT0gdm9pZCAwKSB7IHJlbW92ZSA9IHRydWU7IH1cbiAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb29wZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhaW4uZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSgwLCBBVURJT19DT05URVhULmN1cnJlbnRUaW1lICsgMyk7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBTb3VyY2VfMSA9IHRoaXMuc291cmNlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wU291cmNlXzEuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH0sIDQwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2Uuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IFNvdW5kSW1wbC5DVVJSRU5UX0xPT1BTLmZpbmRJbmRleChmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSA9PT0gX3RoaXM7IH0pO1xuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9MT09QUy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTb3VuZEltcGwuQ1VSUkVOVF9MT09QUyA9IFtdO1xuICAgIFNvdW5kSW1wbC5zb3VuZFZvbHVtZSA9IDE7XG4gICAgU291bmRJbXBsLm11c2ljVm9sdW1lID0gMTtcbiAgICByZXR1cm4gU291bmRJbXBsO1xufSgpKTtcbmV4cG9ydHMuU291bmRJbXBsID0gU291bmRJbXBsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRpbGVzZXRJbXBsID0gdm9pZCAwO1xudmFyIFRpbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGlsZShjYW52YXMsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHNjYWxlKSB7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBjYW52YXM7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgICBUaWxlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCwgeCwgeSkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgeCwgeSwgdGhpcy53aWR0aCAqIHRoaXMuc2NhbGUsIHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZSk7XG4gICAgfTtcbiAgICBUaWxlLnByb3RvdHlwZS5kcmF3U2NhbGVkID0gZnVuY3Rpb24gKGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBUaWxlLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgcmV0dXJuIFRpbGU7XG59KCkpO1xudmFyIFRpbGVzZXRJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbGVzZXRJbXBsKHVybCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCBzY2FsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc2NhbGUgPT09IHZvaWQgMCkgeyBzY2FsZSA9IDE7IH1cbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iaXRtYXBzID0gW107XG4gICAgICAgIHRoaXMuc2NhbmxpbmUgPSAwO1xuICAgICAgICB0aGlzLnRpbGVDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudGludHMgPSB7fTtcbiAgICAgICAgdGhpcy5vbkxvYWRlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgdGhpcy50aWxlV2lkdGggPSB0aGlzLm9yaWdpbmFsVGlsZVdpZHRoID0gdGlsZVdpZHRoO1xuICAgICAgICB0aGlzLnRpbGVIZWlnaHQgPSB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCA9IHRpbGVIZWlnaHQ7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnNjYW5saW5lID0gTWF0aC5mbG9vcihfdGhpcy5pbWFnZS53aWR0aCAvIF90aGlzLnRpbGVXaWR0aCk7XG4gICAgICAgICAgICB2YXIgZGVwdGggPSBNYXRoLmZsb29yKF90aGlzLmltYWdlLmhlaWdodCAvIF90aGlzLnRpbGVIZWlnaHQpO1xuICAgICAgICAgICAgX3RoaXMudGlsZUNvdW50ID0gZGVwdGggKiBfdGhpcy5zY2FubGluZTtcbiAgICAgICAgICAgIC8vIGN1dCB0aGUgaW1hZ2UgaW50byBwaWVjZXNcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgZGVwdGg7IHkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgX3RoaXMuc2NhbmxpbmU7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5iaXRtYXBzLnB1c2gobmV3IFRpbGUoX3RoaXMuaW1hZ2UsIHggKiBfdGhpcy50aWxlV2lkdGgsIHkgKiBfdGhpcy50aWxlSGVpZ2h0LCBfdGhpcy50aWxlV2lkdGgsIF90aGlzLnRpbGVIZWlnaHQsIHNjYWxlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMudGlsZVdpZHRoICo9IHNjYWxlO1xuICAgICAgICAgICAgX3RoaXMudGlsZUhlaWdodCAqPSBzY2FsZTtcbiAgICAgICAgICAgIF90aGlzLm9uTG9hZGVkKCk7XG4gICAgICAgICAgICBfdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHVybDtcbiAgICB9XG4gICAgVGlsZXNldEltcGwucHJvdG90eXBlLmdldFRpbGVzQWNyb3NzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FubGluZTtcbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5nZXRUaWxlV2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVXaWR0aDtcbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5nZXRUaWxlSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlSGVpZ2h0O1xuICAgIH07XG4gICAgVGlsZXNldEltcGwucHJvdG90eXBlLmdldFRpbGVDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZUNvdW50O1xuICAgIH07XG4gICAgVGlsZXNldEltcGwucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuZ2V0VGlsZSA9IGZ1bmN0aW9uICh0aWxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJpdG1hcHNbdGlsZV07XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuZ2V0VGludGVkVGlsZSA9IGZ1bmN0aW9uICh0aWxlLCB0aW50TmFtZSwgdGludCkge1xuICAgICAgICB2YXIgeCA9IHRpbGUgJSB0aGlzLnNjYW5saW5lO1xuICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IodGlsZSAvIHRoaXMuc2NhbmxpbmUpO1xuICAgICAgICB2YXIgaW1hZ2UgPSB0aGlzLnRpbnRzW3RpbnROYW1lXTtcbiAgICAgICAgaWYgKCFpbWFnZSkge1xuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmltYWdlLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpZC5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxlYXZlIGJsYWNrIGFsb25lXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdmcgPSAoaWQuZGF0YVtpXSArIGlkLmRhdGFbaSArIDFdICsgaWQuZGF0YVtpICsgMl0pIC8gMztcbiAgICAgICAgICAgICAgICAgICAgaWQuZGF0YVtpXSA9IE1hdGguZmxvb3IoYXZnICogdGludFswXSk7XG4gICAgICAgICAgICAgICAgICAgIGlkLmRhdGFbaSArIDFdID0gTWF0aC5mbG9vcihhdmcgKiB0aW50WzFdKTtcbiAgICAgICAgICAgICAgICAgICAgaWQuZGF0YVtpICsgMl0gPSBNYXRoLmZsb29yKGF2ZyAqIHRpbnRbMl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKGlkLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgICAgICB0aGlzLnRpbnRzW3RpbnROYW1lXSA9IGltYWdlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVGlsZShpbWFnZSwgeCAqIHRoaXMub3JpZ2luYWxUaWxlV2lkdGgsIHkgKiB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCwgdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCwgdGhpcy5vcmlnaW5hbFRpbGVIZWlnaHQsIHRoaXMuc2NhbGUpO1xuICAgIH07XG4gICAgcmV0dXJuIFRpbGVzZXRJbXBsO1xufSgpKTtcbmV4cG9ydHMuVGlsZXNldEltcGwgPSBUaWxlc2V0SW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BU3RhclBhdGhGaW5kZXIgPSB2b2lkIDA7XG52YXIgTWFwTm9kZV8xID0gcmVxdWlyZShcIi4vTWFwTm9kZVwiKTtcbnZhciBQYXRoXzEgPSByZXF1aXJlKFwiLi9QYXRoXCIpO1xudmFyIEFTdGFyUGF0aEZpbmRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBU3RhclBhdGhGaW5kZXIobWFwKSB7XG4gICAgICAgIHRoaXMub2JqZWN0UG9vbCA9IFtdO1xuICAgICAgICB0aGlzLm9wZW5MaXN0ID0gW107XG4gICAgICAgIHRoaXMucGFyZW50TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnBhdGhGaW5kQ291bnRlciA9IDE7XG4gICAgICAgIHRoaXMud2lkdGggPSBtYXAuZ2V0TWFwV2lkdGgoKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBtYXAuZ2V0TWFwSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLm9wZW4gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIG8gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIHZhciBjID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDU7IGorKykge1xuICAgICAgICAgICAgICAgIG8ucHVzaCgwKTtcbiAgICAgICAgICAgICAgICBjLnB1c2goMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9wZW4ucHVzaChvKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkLnB1c2goYyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMub3Blbkxpc3Q7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IF9hW19pXTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UG9vbC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSB0aGlzLnBhcmVudExpc3Q7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IF9jW19iXTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UG9vbC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyZW50TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLm9wZW5MaXN0ID0gW107XG4gICAgICAgIHRoaXMucGF0aEZpbmRDb3VudGVyKys7XG4gICAgfTtcbiAgICBBU3RhclBhdGhGaW5kZXIucHJvdG90eXBlLmdlbmVyYXRlUGF0aCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHZhciBjdXJyZW50ID0gbm9kZTtcbiAgICAgICAgdmFyIHBhdGggPSBuZXcgUGF0aF8xLlBhdGgoKTtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcGF0aC5hZGQoY3VycmVudC54LCBjdXJyZW50LnkpO1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5ibG9ja2VkID0gZnVuY3Rpb24gKHN4LCBzeSwgeCwgeSkge1xuICAgICAgICBpZiAoIXRoaXMubWFwLmxvY2F0aW9uRGlzY292ZXJlZCh4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmJsb2NrZWQodGhpcy5tb3ZlciwgbnVsbCwgc3gsIHN5LCB4LCB5LCB0aGlzLmF0VGFyZ2V0KHgsIHkpKTtcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5wcm90b3R5cGUuYXRUYXJnZXQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0eCA9IHRoaXMudHhbaV07XG4gICAgICAgICAgICB2YXIgdHkgPSB0aGlzLnR5W2ldO1xuICAgICAgICAgICAgaWYgKHR4ID49IHggJiYgdHggPCB4ICsgdGhpcy5tb3Zlci5nZXRUaWxlc1dpZHRoKClcbiAgICAgICAgICAgICAgICAmJiB0eSA+PSB5ICYmIHR5IDwgeSArIHRoaXMubW92ZXIuZ2V0VGlsZXNIZWlnaHQoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBBU3RhclBhdGhGaW5kZXIucHJvdG90eXBlLmZpbmRQYXRoID0gZnVuY3Rpb24gKG1vdmVyLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQsIG1heCkge1xuICAgICAgICB0eCA9IE1hdGguZmxvb3IodHgpO1xuICAgICAgICB0eSA9IE1hdGguZmxvb3IodHkpO1xuICAgICAgICB0aGlzLm1heCA9IG1heDtcbiAgICAgICAgdGhpcy5tb3ZlciA9IG1vdmVyO1xuICAgICAgICB0aGlzLnR4ID0gW107XG4gICAgICAgIHRoaXMudHkgPSBbXTtcbiAgICAgICAgLy8gY2VudHJhbCBwb2ludCBmb3IgaGV1cmlzdGljIG9yZGVyaW5nXG4gICAgICAgIHRoaXMuY3ggPSB0eCArIHdpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5jeSA9IHR5ICsgaGVpZ2h0IC8gMjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnR4LnB1c2godHggKyBpKTtcbiAgICAgICAgICAgIHRoaXMudHkucHVzaCh0eSk7XG4gICAgICAgICAgICBpZiAoaGVpZ2h0ID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHgucHVzaCh0eCArIGkpO1xuICAgICAgICAgICAgICAgIHRoaXMudHkucHVzaCh0eSArIGhlaWdodCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoZWlnaHQgPiAyKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGhlaWdodCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudHgucHVzaCh0eCk7XG4gICAgICAgICAgICAgICAgdGhpcy50eS5wdXNoKHR5ICsgaSk7XG4gICAgICAgICAgICAgICAgaWYgKHdpZHRoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnR4LnB1c2godHggKyB3aWR0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnR5LnB1c2godHkgKyBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudHgubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIHplcm8gc2l6ZVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgRGVzdGluYXRpb25zOiAoJHt0eH0sJHt0eX0peCgke3dpZHRofSwke2hlaWdodH0pID0+IFske3RoaXMudHh9XSB4IFske3RoaXMudHl9XWApXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5hZGRMb2NhdGlvbihudWxsLCBNYXRoLmZsb29yKG1vdmVyLmdldFRpbGVNYXBYKCkpLCBNYXRoLmZsb29yKG1vdmVyLmdldFRpbGVNYXBZKCkpKTtcbiAgICAgICAgd2hpbGUgKHRoaXMub3Blbkxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGJlc3QgPSB0aGlzLm9wZW5MaXN0WzBdO1xuICAgICAgICAgICAgdGhpcy5vcGVuTGlzdC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAvLyBpZiBiZXN0IGlzIHRoZSB0YXJnZXQgdGhlbiB3ZSd2ZSBmb3VuZCBpdCFcbiAgICAgICAgICAgIGlmICh0aGlzLmF0VGFyZ2V0KGJlc3QueCwgYmVzdC55KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlUGF0aChiZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54ICsgMSwgYmVzdC55KTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54IC0gMSwgYmVzdC55KTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54LCBiZXN0LnkgKyAxKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54LCBiZXN0LnkgLSAxKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50TGlzdC5wdXNoKGJlc3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLnByb3RvdHlwZS5hZGRMb2NhdGlvbiA9IGZ1bmN0aW9uIChwYXJlbnQsIHgsIHkpIHtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoeCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKHkpO1xuICAgICAgICB2YXIgc3ggPSB4O1xuICAgICAgICB2YXIgc3kgPSB5O1xuICAgICAgICB2YXIgZGlyID0gQVN0YXJQYXRoRmluZGVyLk5PTkU7XG4gICAgICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3ggPSBwYXJlbnQueDtcbiAgICAgICAgICAgIHN5ID0gcGFyZW50Lnk7XG4gICAgICAgICAgICBpZiAoc3kgKyAxID09IHkpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBBU3RhclBhdGhGaW5kZXIuTk9SVEhfVE9fU09VVEg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3kgLSAxID09IHkpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBBU3RhclBhdGhGaW5kZXIuU09VVEhfVE9fTk9SVEg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3ggKyAxID09IHgpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBBU3RhclBhdGhGaW5kZXIuV0VTVF9UT19FQVNUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN4IC0gMSA9PSB4KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLkVBU1RfVE9fV0VTVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubWFwLnZhbGlkTG9jYXRpb24oeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBpdCdzIGluIHRoZSBvcGVuIGxpc3QgaWdub3JlXG4gICAgICAgIGlmICh0aGlzLm9wZW5beCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPT0gdGhpcy5wYXRoRmluZENvdW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jbG9zZWRbeCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPT0gdGhpcy5wYXRoRmluZENvdW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBpdCdzIGJsb2NrZWQgZm9yIGFueSByZWFzb24sIGFkZCBpdCB0byB0aGUgY2xvc2VkXG4gICAgICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudC5kZXB0aCA+IHRoaXMubWF4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRbeCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPSB0aGlzLnBhdGhGaW5kQ291bnRlcjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm1hcC5sb2NhdGlvbkRpc2NvdmVyZWQoeCwgeSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID0gdGhpcy5wYXRoRmluZENvdW50ZXI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmxvY2tlZChzeCwgc3ksIHgsIHkpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZFt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIG90aGVyd2lzZSBpdCdzIGEgcG9zc2libGUgc3RlcCBhZGQgaXQgdG8gdGhlIG9wZW5cbiAgICAgICAgdGhpcy5vcGVuW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID0gdGhpcy5wYXRoRmluZENvdW50ZXI7XG4gICAgICAgIHZhciBkeCA9IE1hdGguYWJzKHRoaXMuY3ggLSB4KTtcbiAgICAgICAgdmFyIGR5ID0gTWF0aC5hYnModGhpcy5jeSAtIHkpO1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuY3JlYXRlTWFwTm9kZSh4LCB5LCBwYXJlbnQsIChkeCAqIGR4KSArIChkeSAqIGR5KSk7XG4gICAgICAgIHZhciBpbmRleCA9IEFTdGFyUGF0aEZpbmRlci5iaW5hcnlTZWFyY2godGhpcy5vcGVuTGlzdCwgbm9kZS5oKTtcbiAgICAgICAgdGhpcy5vcGVuTGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5vZGUpO1xuICAgIH07XG4gICAgQVN0YXJQYXRoRmluZGVyLmJpbmFyeVNlYXJjaCA9IGZ1bmN0aW9uIChhcnJheSwgaCkge1xuICAgICAgICB2YXIgbG8gPSAtMSwgaGkgPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgxICsgbG8gPCBoaSkge1xuICAgICAgICAgICAgdmFyIG1pID0gbG8gKyAoKGhpIC0gbG8pID4+IDEpO1xuICAgICAgICAgICAgaWYgKGFycmF5W21pXS5oID4gaCkge1xuICAgICAgICAgICAgICAgIGhpID0gbWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsbyA9IG1pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoaTtcbiAgICB9O1xuICAgIC8vIG9iamVjdCBwb29sIGFjY2Vzc29yIC0gZnJlZSBpcyBkb25lIGluIGJ1bGtcbiAgICBBU3RhclBhdGhGaW5kZXIucHJvdG90eXBlLmNyZWF0ZU1hcE5vZGUgPSBmdW5jdGlvbiAoeCwgeSwgcGFyZW50LCBoKSB7XG4gICAgICAgIGlmICh0aGlzLm9iamVjdFBvb2wubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHZhciBuID0gbmV3IE1hcE5vZGVfMS5NYXBOb2RlKCk7XG4gICAgICAgICAgICB0aGlzLm9iamVjdFBvb2wucHVzaChuKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMub2JqZWN0UG9vbFswXTtcbiAgICAgICAgdGhpcy5vYmplY3RQb29sLnNwbGljZSgwLCAxKTtcbiAgICAgICAgbm9kZS54ID0geDtcbiAgICAgICAgbm9kZS55ID0geTtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIG5vZGUuaCA9IGg7XG4gICAgICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5kZXB0aCA9IHBhcmVudC5kZXB0aCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmRlcHRoID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIEFTdGFyUGF0aEZpbmRlci5OT1JUSF9UT19TT1VUSCA9IDA7XG4gICAgQVN0YXJQYXRoRmluZGVyLkVBU1RfVE9fV0VTVCA9IDE7XG4gICAgQVN0YXJQYXRoRmluZGVyLlNPVVRIX1RPX05PUlRIID0gMjtcbiAgICBBU3RhclBhdGhGaW5kZXIuV0VTVF9UT19FQVNUID0gMztcbiAgICBBU3RhclBhdGhGaW5kZXIuTk9ORSA9IDQ7XG4gICAgcmV0dXJuIEFTdGFyUGF0aEZpbmRlcjtcbn0oKSk7XG5leHBvcnRzLkFTdGFyUGF0aEZpbmRlciA9IEFTdGFyUGF0aEZpbmRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYXBOb2RlID0gdm9pZCAwO1xudmFyIE1hcE5vZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwTm9kZSgpIHtcbiAgICB9XG4gICAgcmV0dXJuIE1hcE5vZGU7XG59KCkpO1xuZXhwb3J0cy5NYXBOb2RlID0gTWFwTm9kZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYXRoID0gdm9pZCAwO1xudmFyIFN0ZXBfMSA9IHJlcXVpcmUoXCIuL1N0ZXBcIik7XG52YXIgUGF0aCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQYXRoKCkge1xuICAgICAgICB0aGlzLnN0ZXBzID0gbmV3IEFycmF5KCk7XG4gICAgfVxuICAgIFBhdGgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMuc3RlcHMuc3BsaWNlKDAsIDAsIG5ldyBTdGVwXzEuU3RlcCh4LCB5KSk7XG4gICAgfTtcbiAgICBQYXRoLnByb3RvdHlwZS5nZXRMYXN0U3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RlcHNbdGhpcy5zdGVwcy5sZW5ndGggLSAxXTtcbiAgICB9O1xuICAgIFBhdGgucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuc3RlcHNbMF07XG4gICAgICAgIHRoaXMuc3RlcHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgcmV0dXJuIFBhdGg7XG59KCkpO1xuZXhwb3J0cy5QYXRoID0gUGF0aDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdGVwID0gdm9pZCAwO1xudmFyIFN0ZXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RlcCh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuICAgIHJldHVybiBTdGVwO1xufSgpKTtcbmV4cG9ydHMuU3RlcCA9IFN0ZXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxEVEtXb3JsZCA9IHZvaWQgMDtcbnZhciBNYXBFbnRpdHlfMSA9IHJlcXVpcmUoXCIuL01hcEVudGl0eVwiKTtcbnZhciBNYXBMYXllcl8xID0gcmVxdWlyZShcIi4vTWFwTGF5ZXJcIik7XG52YXIgTWFwTGV2ZWxfMSA9IHJlcXVpcmUoXCIuL01hcExldmVsXCIpO1xudmFyIE1hcFdvcmxkXzEgPSByZXF1aXJlKFwiLi9NYXBXb3JsZFwiKTtcbnZhciBMRFRLV29ybGQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExEVEtXb3JsZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMRFRLV29ybGQoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTERUS1dvcmxkLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgTERUS1dvcmxkLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKGZpbGUsIGxvYWRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbG9hZGVyKGZpbGUpLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgICAgIF90aGlzLmdyaWRTaXplID0ganNvbi5kZWZhdWx0R3JpZFNpemU7XG4gICAgICAgICAgICB2YXIgdGlsZXNldCA9IGpzb24uZGVmcy50aWxlc2V0c1swXTtcbiAgICAgICAgICAgIF90aGlzLnRpbGVzZXRTY2FubGluZSA9IHRpbGVzZXQucHhXaWQgLyB0aWxlc2V0LnRpbGVHcmlkU2l6ZTtcbiAgICAgICAgICAgIF90aGlzLnRpbGVzZXRTaXplID0gdGlsZXNldC50aWxlR3JpZFNpemU7XG4gICAgICAgICAgICB2YXIgbGV2ZWxzID0ganNvbi5sZXZlbHM7XG4gICAgICAgICAgICBpZiAoanNvbi53b3JsZHMgJiYganNvbi53b3JsZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldmVscyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBqc29uLndvcmxkczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdvcmxkID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbHMgPSBsZXZlbHMuY29uY2F0KHdvcmxkLmxldmVscyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFzeW5jTGV2ZWxzID0gW107XG4gICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChsZXZlbERhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGV2ZWwgPSBuZXcgTWFwTGV2ZWxfMS5NYXBMZXZlbChfdGhpcywgbGV2ZWxEYXRhLmlkZW50aWZpZXIpO1xuICAgICAgICAgICAgICAgIGxldmVsLndvcmxkWCA9IGxldmVsRGF0YS53b3JsZFg7XG4gICAgICAgICAgICAgICAgbGV2ZWwud29ybGRZID0gbGV2ZWxEYXRhLndvcmxkWTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfZCA9IDAsIF9lID0gbGV2ZWxEYXRhLmZpZWxkSW5zdGFuY2VzOyBfZCA8IF9lLmxlbmd0aDsgX2QrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGRJbnN0YW5jZSA9IF9lW19kXTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwuZmllbGRzW2ZpZWxkSW5zdGFuY2UuX19pZGVudGlmaWVyXSA9IGZpZWxkSW5zdGFuY2UuX192YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGxheWVycyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAobGV2ZWxEYXRhLmxheWVySW5zdGFuY2VzKSAvLyBlbWJlZGRlZCBsYXllcnNcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJzID0gUHJvbWlzZS5yZXNvbHZlKGxldmVsRGF0YSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGV2ZWxEYXRhLmV4dGVybmFsUmVsUGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBsYXllcnMgPSBsb2FkZXIobGV2ZWxEYXRhLmV4dGVybmFsUmVsUGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIExEVEsgZmlsZSBmb3JtYXRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFzeW5jTGV2ZWxzLnB1c2gobGF5ZXJzLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgTERUS1dvcmxkLmxvYWRMYXllcnMobGV2ZWwsIGRhdGEubGF5ZXJJbnN0YW5jZXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwubGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsLndpZHRoID0gbGV2ZWwubGF5ZXJzWzBdLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwuaGVpZ2h0ID0gbGV2ZWwubGF5ZXJzWzBdLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsLndpZHRoID0gbGV2ZWxEYXRhLnB4V2lkIC8gX3RoaXMuZ3JpZFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbC5oZWlnaHQgPSBsZXZlbERhdGEucHhIZWkgLyBfdGhpcy5ncmlkU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sZXZlbHNbbGV2ZWwuaWRdID0gbGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZXZlbDtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IGpzb24ubGV2ZWxzOyBfYiA8IF9jLmxlbmd0aDsgX2IrKykge1xuICAgICAgICAgICAgICAgIHZhciBsZXZlbERhdGEgPSBfY1tfYl07XG4gICAgICAgICAgICAgICAgX2xvb3BfMShsZXZlbERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGFzeW5jTGV2ZWxzKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTERUS1dvcmxkLmxvYWRMYXllcnMgPSBmdW5jdGlvbiAobGV2ZWwsIGxheWVySW5zdGFuY2VzKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgbGF5ZXJJbnN0YW5jZXNfMSA9IGxheWVySW5zdGFuY2VzOyBfaSA8IGxheWVySW5zdGFuY2VzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGF5ZXJEYXRhID0gbGF5ZXJJbnN0YW5jZXNfMVtfaV07XG4gICAgICAgICAgICBpZiAobGF5ZXJEYXRhLl9fdHlwZSA9PT0gXCJFbnRpdGllc1wiKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBfYiA9IGxheWVyRGF0YS5lbnRpdHlJbnN0YW5jZXM7IF9hIDwgX2IubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbnRpdHlEYXRhID0gX2JbX2FdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gbmV3IE1hcEVudGl0eV8xLk1hcEVudGl0eShsZXZlbCwgZW50aXR5RGF0YS5weFswXSAvIGxheWVyRGF0YS5fX2dyaWRTaXplLCBlbnRpdHlEYXRhLnB4WzFdIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUsIGVudGl0eURhdGEud2lkdGggLyBsYXllckRhdGEuX19ncmlkU2l6ZSwgZW50aXR5RGF0YS5oZWlnaHQgLyBsYXllckRhdGEuX19ncmlkU2l6ZSwgZW50aXR5RGF0YS5fX2lkZW50aWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYyA9IDAsIF9kID0gZW50aXR5RGF0YS5maWVsZEluc3RhbmNlczsgX2MgPCBfZC5sZW5ndGg7IF9jKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZEluc3RhbmNlID0gX2RbX2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmZpZWxkc1tmaWVsZEluc3RhbmNlLl9faWRlbnRpZmllcl0gPSBmaWVsZEluc3RhbmNlLl9fdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwuZW50aXRpZXMucHVzaChlbnRpdHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBsYXllciA9IG5ldyBNYXBMYXllcl8xLk1hcExheWVyKGxldmVsLCBsYXllckRhdGEuX19pZGVudGlmaWVyLCBsYXllckRhdGEuX19jV2lkLCBsYXllckRhdGEuX19jSGVpKTtcbiAgICAgICAgICAgICAgICB2YXIgc2NhbmxpbmUgPSBsZXZlbC53b3JsZC50aWxlc2V0U2NhbmxpbmU7XG4gICAgICAgICAgICAgICAgdmFyIHRpbGVTaXplID0gbGV2ZWwud29ybGQudGlsZXNldFNpemU7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2UgPSAwLCBfZiA9IGxheWVyRGF0YS5ncmlkVGlsZXM7IF9lIDwgX2YubGVuZ3RoOyBfZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0aWxlID0gX2ZbX2VdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IE1hdGguZmxvb3IodGlsZS5weFswXSAvIGxheWVyRGF0YS5fX2dyaWRTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKHRpbGUucHhbMV0gLyBsYXllckRhdGEuX19ncmlkU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3NJbmRleCA9IHggKyAoeSAqIGxheWVyLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR4ID0gTWF0aC5mbG9vcih0aWxlLnNyY1swXSAvIHRpbGVTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5ID0gTWF0aC5mbG9vcih0aWxlLnNyY1sxXSAvIHRpbGVTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbGVJbmRleCA9ICh0eSAqIHNjYW5saW5lKSArIHR4O1xuICAgICAgICAgICAgICAgICAgICBsYXllci50aWxlc1twb3NJbmRleF0gPSB0aWxlSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXZlbC5sYXllcnMuc3BsaWNlKDAsIDAsIGxheWVyKTtcbiAgICAgICAgICAgICAgICBsZXZlbC5sYXllckJ5TmFtZVtsYXllci5uYW1lXSA9IGxheWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTERUS1dvcmxkO1xufShNYXBXb3JsZF8xLk1hcFdvcmxkKSk7XG5leHBvcnRzLkxEVEtXb3JsZCA9IExEVEtXb3JsZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFwRW50aXR5ID0gdm9pZCAwO1xudmFyIE1hcEVudGl0eSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBFbnRpdHkobGV2ZWwsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHR5cGUpIHtcbiAgICAgICAgdGhpcy5maWVsZHMgPSB7fTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBNYXBFbnRpdHkucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBNYXBFbnRpdHkobGV2ZWwsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy50eXBlKTtcbiAgICAgICAgcmVzdWx0LmZpZWxkcyA9IF9fYXNzaWduKHt9LCB0aGlzLmZpZWxkcyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gTWFwRW50aXR5O1xufSgpKTtcbmV4cG9ydHMuTWFwRW50aXR5ID0gTWFwRW50aXR5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hcExheWVyID0gdm9pZCAwO1xudmFyIE1hcExheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcExheWVyKGxldmVsLCBuYW1lLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy50aWxlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVzLnB1c2goMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWFwTGF5ZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh4LCB5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoKHggPCAwKSB8fCAoeSA8IDApIHx8ICh4ID49IHRoaXMud2lkdGgpIHx8ICh5ID49IHRoaXMuaGVpZ2h0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb3NJbmRleCA9IHggKyAoeSAqIHRoaXMud2lkdGgpO1xuICAgICAgICB0aGlzLnRpbGVzW3Bvc0luZGV4XSA9IHZhbHVlO1xuICAgIH07XG4gICAgTWFwTGF5ZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIGlmICgoeCA8IDApIHx8ICh5IDwgMCkgfHwgKHggPj0gdGhpcy53aWR0aCkgfHwgKHkgPj0gdGhpcy5oZWlnaHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9zSW5kZXggPSB4ICsgKHkgKiB0aGlzLndpZHRoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZXNbcG9zSW5kZXhdO1xuICAgIH07XG4gICAgTWFwTGF5ZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBNYXBMYXllcihsZXZlbCwgdGhpcy5uYW1lLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC50aWxlc1tpXSA9IHRoaXMudGlsZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHJldHVybiBNYXBMYXllcjtcbn0oKSk7XG5leHBvcnRzLk1hcExheWVyID0gTWFwTGF5ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hcExldmVsID0gdm9pZCAwO1xudmFyIE1hcFdvcmxkXzEgPSByZXF1aXJlKFwiLi9NYXBXb3JsZFwiKTtcbnZhciBNYXBMZXZlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBMZXZlbCh3b3JsZCwgaWQpIHtcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy5sYXllckJ5TmFtZSA9IHt9O1xuICAgICAgICB0aGlzLmVudGl0aWVzID0gW107XG4gICAgICAgIHRoaXMuZmllbGRzID0ge307XG4gICAgICAgIHRoaXMud29ybGRYID0gMDtcbiAgICAgICAgdGhpcy53b3JsZFkgPSAwO1xuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG4gICAgTWFwTGV2ZWwucHJvdG90eXBlLmVudGl0aWVzT2ZUeXBlID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuZmlsdGVyKGZ1bmN0aW9uIChlbnRpdHkpIHsgcmV0dXJuIGVudGl0eS50eXBlID09PSB0eXBlOyB9KTtcbiAgICB9O1xuICAgIE1hcExldmVsLnByb3RvdHlwZS5maXJzdEVudGl0eU9mVHlwZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0aWVzLmZpbmQoZnVuY3Rpb24gKGVudGl0eSkgeyByZXR1cm4gZW50aXR5LnR5cGUgPT09IHR5cGU7IH0pO1xuICAgIH07XG4gICAgTWFwTGV2ZWwucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHdvcmxkQ29weSA9IG5ldyBNYXBXb3JsZF8xLk1hcFdvcmxkKCk7XG4gICAgICAgIHdvcmxkQ29weS5ncmlkU2l6ZSA9IHRoaXMud29ybGQuZ3JpZFNpemU7XG4gICAgICAgIHdvcmxkQ29weS5sb2FkZWQgPSB0aGlzLndvcmxkLmxvYWRlZDtcbiAgICAgICAgd29ybGRDb3B5LnRpbGVzZXRTY2FubGluZSA9IHRoaXMud29ybGQudGlsZXNldFNjYW5saW5lO1xuICAgICAgICB3b3JsZENvcHkudGlsZXNldFNpemUgPSB0aGlzLndvcmxkLnRpbGVzZXRTaXplO1xuICAgICAgICB2YXIgbGV2ZWxDb3B5ID0gbmV3IE1hcExldmVsKHdvcmxkQ29weSwgaWQpO1xuICAgICAgICBsZXZlbENvcHkud2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICBsZXZlbENvcHkuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIGxldmVsQ29weS53b3JsZFggPSB0aGlzLndvcmxkWDtcbiAgICAgICAgbGV2ZWxDb3B5LndvcmxkWSA9IHRoaXMud29ybGRZO1xuICAgICAgICBsZXZlbENvcHkuZmllbGRzID0gX19hc3NpZ24oe30sIHRoaXMuZmllbGRzKTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMubGF5ZXJzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGxheWVyID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIGNvcHkgPSBsYXllci5jb3B5KGxldmVsQ29weSk7XG4gICAgICAgICAgICBsZXZlbENvcHkubGF5ZXJzLnB1c2goY29weSk7XG4gICAgICAgICAgICBsZXZlbENvcHkubGF5ZXJCeU5hbWVbY29weS5uYW1lXSA9IGNvcHk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IHRoaXMuZW50aXRpZXM7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gX2NbX2JdO1xuICAgICAgICAgICAgdmFyIGNvcHkgPSBlbnRpdHkuY29weShsZXZlbENvcHkpO1xuICAgICAgICAgICAgbGV2ZWxDb3B5LmVudGl0aWVzLnB1c2goY29weSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxldmVsQ29weTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBMZXZlbDtcbn0oKSk7XG5leHBvcnRzLk1hcExldmVsID0gTWFwTGV2ZWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFwV29ybGQgPSB2b2lkIDA7XG52YXIgTWFwV29ybGQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwV29ybGQoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxzID0ge307XG4gICAgICAgIHRoaXMuZ3JpZFNpemUgPSAwO1xuICAgICAgICB0aGlzLnRpbGVzZXRTY2FubGluZSA9IDA7XG4gICAgICAgIHRoaXMudGlsZXNldFNpemUgPSAwO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gTWFwV29ybGQ7XG59KCkpO1xuZXhwb3J0cy5NYXBXb3JsZCA9IE1hcFdvcmxkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYXBFbnRpdHkgPSBleHBvcnRzLk1hcExheWVyID0gZXhwb3J0cy5NYXBMZXZlbCA9IGV4cG9ydHMuTWFwV29ybGQgPSBleHBvcnRzLkxEVEtXb3JsZCA9IGV4cG9ydHMuU3RlcCA9IGV4cG9ydHMuUGF0aCA9IGV4cG9ydHMuQVN0YXJQYXRoRmluZGVyID0gZXhwb3J0cy5LZXlzID0gZXhwb3J0cy5CTFVFID0gZXhwb3J0cy5SRUQgPSBleHBvcnRzLkdSRUVOID0gZXhwb3J0cy5CTEFDSyA9IGV4cG9ydHMuV0hJVEUgPSBleHBvcnRzLnNldFNvdW5kT24gPSBleHBvcnRzLnNldE11c2ljT24gPSBleHBvcnRzLmlzU291bmRPbiA9IGV4cG9ydHMuaXNNdXNpY09uID0gZXhwb3J0cy5zdGFydEdhbWUgPSB2b2lkIDA7XG52YXIgR3V0ZV8xID0gcmVxdWlyZShcIi4vR3V0ZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0YXJ0R2FtZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLnN0YXJ0R2FtZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzTXVzaWNPblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLmlzTXVzaWNPbjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzU291bmRPblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLmlzU291bmRPbjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNldE11c2ljT25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEd1dGVfMS5zZXRNdXNpY09uOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2V0U291bmRPblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3V0ZV8xLnNldFNvdW5kT247IH0gfSk7XG52YXIgR3JhcGhpY3NfMSA9IHJlcXVpcmUoXCIuL0dyYXBoaWNzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiV0hJVEVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdyYXBoaWNzXzEuV0hJVEU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJCTEFDS1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR3JhcGhpY3NfMS5CTEFDSzsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdSRUVOXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHcmFwaGljc18xLkdSRUVOOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUkVEXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHcmFwaGljc18xLlJFRDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJMVUVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdyYXBoaWNzXzEuQkxVRTsgfSB9KTtcbnZhciBLZXlzXzEgPSByZXF1aXJlKFwiLi9LZXlzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiS2V5c1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gS2V5c18xLktleXM7IH0gfSk7XG52YXIgQVN0YXJQYXRoRmluZGVyXzEgPSByZXF1aXJlKFwiLi9wYXRoL0FTdGFyUGF0aEZpbmRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFTdGFyUGF0aEZpbmRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQVN0YXJQYXRoRmluZGVyXzEuQVN0YXJQYXRoRmluZGVyOyB9IH0pO1xudmFyIFBhdGhfMSA9IHJlcXVpcmUoXCIuL3BhdGgvUGF0aFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlBhdGhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFBhdGhfMS5QYXRoOyB9IH0pO1xudmFyIFN0ZXBfMSA9IHJlcXVpcmUoXCIuL3BhdGgvU3RlcFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlN0ZXBcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFN0ZXBfMS5TdGVwOyB9IH0pO1xudmFyIExEVEtXb3JsZF8xID0gcmVxdWlyZShcIi4vdGlsZW1hcHMvTERUS1dvcmxkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTERUS1dvcmxkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBMRFRLV29ybGRfMS5MRFRLV29ybGQ7IH0gfSk7XG52YXIgTWFwV29ybGRfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL01hcFdvcmxkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFwV29ybGRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcFdvcmxkXzEuTWFwV29ybGQ7IH0gfSk7XG52YXIgTWFwTGV2ZWxfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL01hcExldmVsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFwTGV2ZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcExldmVsXzEuTWFwTGV2ZWw7IH0gfSk7XG52YXIgTWFwTGF5ZXJfMSA9IHJlcXVpcmUoXCIuL3RpbGVtYXBzL01hcExheWVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFwTGF5ZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcExheWVyXzEuTWFwTGF5ZXI7IH0gfSk7XG52YXIgTWFwRW50aXR5XzEgPSByZXF1aXJlKFwiLi90aWxlbWFwcy9NYXBFbnRpdHlcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNYXBFbnRpdHlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hcEVudGl0eV8xLk1hcEVudGl0eTsgfSB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=