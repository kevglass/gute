(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gute"] = factory();
	else
		root["gute"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Gute.ts":
/*!*********************!*\
  !*** ./src/Gute.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.startGame = void 0;
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
                _this.mouseDownHandler(event.offsetX, event.offsetY);
                event.preventDefault();
                event.stopPropagation();
            }
            catch (e) {
                console.log(e);
            }
        });
        this.graphics.canvas.addEventListener("mouseup", function (event) {
            try {
                _this.mouseUpHandler(event.offsetX, event.offsetY);
                event.preventDefault();
                event.stopPropagation();
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
    GameLoop.prototype.loadTileset = function (url, tileWidth, tileHeight) {
        var tileset = new TilesetImpl_1.TilesetImpl(url, tileWidth, tileHeight);
        this.resources.push(tileset);
        return tileset;
    };
    GameLoop.prototype.loadFont = function (url, name) {
        return new FontImpl_1.FontImpl(url, name);
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
    BitmapImpl.prototype.initOnFirstClick = function () {
    };
    BitmapImpl.prototype.getDrawable = function () {
        return this.image;
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
    GraphicsImpl.prototype.drawString = function (x, y, text, col) {
        this.ctx.fillStyle = col;
        this.ctx.fillText(text, x, y);
    };
    GraphicsImpl.prototype.fillRect = function (x, y, width, height, col) {
        this.ctx.fillStyle = col;
        this.ctx.fillRect(x, y, width, height);
    };
    GraphicsImpl.prototype.drawBitmap = function (x, y, bitmap) {
        this.ctx.drawImage(bitmap.getDrawable(), x, y);
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
var AudioContext = window.AudioContext || window.webkitAudioContext;
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
document.addEventListener("visibilitychange", handleVisibilityChange);
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
    function Tile(canvas) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.loaded = true;
    }
    Tile.prototype.getDrawable = function () {
        return this.canvas;
    };
    Tile.prototype.initOnFirstClick = function () {
    };
    return Tile;
}());
var TilesetImpl = /** @class */ (function () {
    function TilesetImpl(url, tileWidth, tileHeight) {
        var _this = this;
        this.loaded = false;
        this.bitmaps = [];
        this.scanline = 0;
        this.tileCount = 0;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.image = new Image();
        this.image.onload = function () {
            var _a;
            _this.scanline = Math.floor(_this.image.width / tileWidth);
            var depth = Math.floor(_this.image.height / tileHeight);
            _this.tileCount = depth * _this.scanline;
            // cut the image into pieces
            for (var y = 0; y < depth; y++) {
                for (var x = 0; x < _this.scanline; x++) {
                    var canvas = document.createElement("canvas");
                    canvas.width = tileWidth;
                    canvas.height = tileHeight;
                    (_a = canvas.getContext("2d")) === null || _a === void 0 ? void 0 : _a.drawImage(_this.image, -x * tileWidth, -y * tileHeight);
                    _this.bitmaps.push(new Tile(canvas));
                }
            }
            _this.loaded = true;
        };
        this.image.src = url;
    }
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Keys = exports.startGame = void 0;
var Gute_1 = __webpack_require__(/*! ./Gute */ "./src/Gute.ts");
Object.defineProperty(exports, "startGame", ({ enumerable: true, get: function () { return Gute_1.startGame; } }));
var Keys_1 = __webpack_require__(/*! ./Keys */ "./src/Keys.ts");
Object.defineProperty(exports, "Keys", ({ enumerable: true, get: function () { return Keys_1.Keys; } }));

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0d1dGUudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9LZXlzLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9CaXRtYXBJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9Gb250SW1wbC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL2ltcGwvR3JhcGhpY3NJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9Tb3VuZEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL1RpbGVzZXRJbXBsLnRzIiwid2VicGFjazovL2d1dGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQixtQkFBbUIsbUJBQU8sQ0FBQyxtREFBbUI7QUFDOUMsaUJBQWlCLG1CQUFPLENBQUMsK0NBQWlCO0FBQzFDLHFCQUFxQixtQkFBTyxDQUFDLHVEQUFxQjtBQUNsRCxrQkFBa0IsbUJBQU8sQ0FBQyxpREFBa0I7QUFDNUMsb0JBQW9CLG1CQUFPLENBQUMscURBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGdCQUFnQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxnQkFBZ0I7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDbkpZO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELFlBQVk7Ozs7Ozs7Ozs7O0FDeEJDO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGtCQUFrQjs7Ozs7Ozs7Ozs7QUN4Qkw7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDJCQUEyQix5QkFBeUIsRUFBRSxPQUFPLDJCQUEyQixFQUFFO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxnQkFBZ0I7Ozs7Ozs7Ozs7O0FDZkg7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCLGlCQUFpQixtQkFBTyxDQUFDLDBDQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsZUFBZTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsb0JBQW9COzs7Ozs7Ozs7OztBQ3BFUDtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQiw2Q0FBNkMsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlCQUFpQjs7Ozs7Ozs7Ozs7QUM3R0o7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFdBQVc7QUFDdEMsK0JBQStCLG9CQUFvQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG1CQUFtQjs7Ozs7OztVQzlEbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxZQUFZLEdBQUcsaUJBQWlCO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3Qiw2Q0FBNEMsQ0FBQyxxQ0FBcUMseUJBQXlCLEVBQUUsRUFBRSxFQUFDO0FBQ2hILGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3Qix3Q0FBdUMsQ0FBQyxxQ0FBcUMsb0JBQW9CLEVBQUUsRUFBRSxFQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3V0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndXRlXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXJ0R2FtZSA9IHZvaWQgMDtcbnZhciBCaXRtYXBJbXBsXzEgPSByZXF1aXJlKFwiLi9pbXBsL0JpdG1hcEltcGxcIik7XG52YXIgRm9udEltcGxfMSA9IHJlcXVpcmUoXCIuL2ltcGwvRm9udEltcGxcIik7XG52YXIgR3JhcGhpY3NJbXBsXzEgPSByZXF1aXJlKFwiLi9pbXBsL0dyYXBoaWNzSW1wbFwiKTtcbnZhciBTb3VuZEltcGxfMSA9IHJlcXVpcmUoXCIuL2ltcGwvU291bmRJbXBsXCIpO1xudmFyIFRpbGVzZXRJbXBsXzEgPSByZXF1aXJlKFwiLi9pbXBsL1RpbGVzZXRJbXBsXCIpO1xudmFyIEdBTUVfTE9PUDtcbmZ1bmN0aW9uIHN0YXJ0R2FtZShnYW1lKSB7XG4gICAgR0FNRV9MT09QID0gbmV3IEdhbWVMb29wKCkuc3RhcnQoZ2FtZSk7XG59XG5leHBvcnRzLnN0YXJ0R2FtZSA9IHN0YXJ0R2FtZTtcbnZhciBHYW1lTG9vcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHYW1lTG9vcCgpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBbXTtcbiAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSAwO1xuICAgICAgICB0aGlzLmluaXRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBHYW1lTG9vcC5wcm90b3R5cGUuYWxsUmVzb3VyY2VzTG9hZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5yZXNvdXJjZXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UgPSBfYVtfaV07XG4gICAgICAgICAgICBpZiAoIXJlc291cmNlLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5pbml0UmVzb3VyY2VzT25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuYWxsUmVzb3VyY2VzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5yZXNvdXJjZXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc291cmNlID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHJlc291cmNlLmluaXRPbkZpcnN0Q2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLm1vdXNlRG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSAwOyB9XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5ncmFwaGljcy5jYW52YXM7XG4gICAgICAgIGNhbnZhcy5mb2N1cygpO1xuICAgICAgICB2YXIgd2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgICB4ID0gTWF0aC5mbG9vcigoeCAvIHdpZHRoKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKCh5IC8gaGVpZ2h0KSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdhbWUub25Nb3VzZURvd24odGhpcywgeCwgeSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubW91c2VVcEhhbmRsZXIgPSBmdW5jdGlvbiAoeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSAwOyB9XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5ncmFwaGljcy5jYW52YXM7XG4gICAgICAgIHZhciB3aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKCh4IC8gd2lkdGgpICogY2FudmFzLndpZHRoKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoKHkgLyBoZWlnaHQpICogY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZ2FtZS5vbk1vdXNlVXAodGhpcywgeCwgeSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUua2V5RG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuICAgICAgICB0aGlzLmdhbWUub25LZXlEb3duKHRoaXMsIGtleSk7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUua2V5VXBIYW5kbGVyID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmdhbWUub25LZXlVcCh0aGlzLCBrZXkpO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGdhbWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljc0ltcGxfMS5HcmFwaGljc0ltcGwoKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubW91c2VEb3duSGFuZGxlcihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBfdGhpcy5tb3VzZVVwSGFuZGxlcihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIF90aGlzLmtleURvd25IYW5kbGVyKGV2ZW50LmtleSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgX3RoaXMua2V5VXBIYW5kbGVyKGV2ZW50LmtleSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBnYW1lLmluaXQodGhpcyk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sb29wKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkZWx0YSA9IDA7XG4gICAgICAgIGlmICh0aGlzLmxhc3RGcmFtZSAhPT0gMCkge1xuICAgICAgICAgICAgZGVsdGEgPSBub3cgLSB0aGlzLmxhc3RGcmFtZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IG5vdztcbiAgICAgICAgdGhpcy5ncmFwaGljcy5hcHBseUZvbnQoKTtcbiAgICAgICAgdGhpcy5nYW1lLnVwZGF0ZSh0aGlzLCBkZWx0YSk7XG4gICAgICAgIHRoaXMuZ2FtZS5yZW5kZXIodGhpcywgdGhpcy5ncmFwaGljcyk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sb29wKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmxvYWRNdXNpYyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIHNvdW5kID0gbmV3IFNvdW5kSW1wbF8xLlNvdW5kSW1wbCh1cmwsIHRydWUpO1xuICAgICAgICB0aGlzLnJlc291cmNlcy5wdXNoKHNvdW5kKTtcbiAgICAgICAgcmV0dXJuIHNvdW5kO1xuICAgIH07XG4gICAgR2FtZUxvb3AucHJvdG90eXBlLmxvYWRTb3VuZCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIHNvdW5kID0gbmV3IFNvdW5kSW1wbF8xLlNvdW5kSW1wbCh1cmwsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaChzb3VuZCk7XG4gICAgICAgIHJldHVybiBzb3VuZDtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkQml0bWFwID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB2YXIgYml0bWFwID0gbmV3IEJpdG1hcEltcGxfMS5CaXRtYXBJbXBsKHVybCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2goYml0bWFwKTtcbiAgICAgICAgcmV0dXJuIGJpdG1hcDtcbiAgICB9O1xuICAgIEdhbWVMb29wLnByb3RvdHlwZS5sb2FkVGlsZXNldCA9IGZ1bmN0aW9uICh1cmwsIHRpbGVXaWR0aCwgdGlsZUhlaWdodCkge1xuICAgICAgICB2YXIgdGlsZXNldCA9IG5ldyBUaWxlc2V0SW1wbF8xLlRpbGVzZXRJbXBsKHVybCwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaCh0aWxlc2V0KTtcbiAgICAgICAgcmV0dXJuIHRpbGVzZXQ7XG4gICAgfTtcbiAgICBHYW1lTG9vcC5wcm90b3R5cGUubG9hZEZvbnQgPSBmdW5jdGlvbiAodXJsLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgRm9udEltcGxfMS5Gb250SW1wbCh1cmwsIG5hbWUpO1xuICAgIH07XG4gICAgcmV0dXJuIEdhbWVMb29wO1xufSgpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5LZXlzID0gdm9pZCAwO1xudmFyIEtleXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gS2V5cygpIHtcbiAgICB9XG4gICAgS2V5cy5FU0NBUEVfS0VZID0gXCJFc2NhcGVcIjtcbiAgICBLZXlzLkVOVEVSX0tFWSA9IFwiRW50ZXJcIjtcbiAgICBLZXlzLkxFRlRfS0VZID0gXCJBcnJvd0xlZnRcIjtcbiAgICBLZXlzLlJJR0hUX0tFWSA9IFwiQXJyb3dSaWdodFwiO1xuICAgIEtleXMuVVBfS0VZID0gXCJBcnJvd1VwXCI7XG4gICAgS2V5cy5ET1dOX0tFWSA9IFwiQXJyb3dEb3duXCI7XG4gICAgS2V5cy5TUEFDRV9LRVkgPSBcIiBcIjtcbiAgICBLZXlzLlNfS0VZID0gXCJzXCI7XG4gICAgS2V5cy5NX0tFWSA9IFwibVwiO1xuICAgIEtleXMuQV9LRVkgPSBcImFcIjtcbiAgICBLZXlzLldfS0VZID0gXCJ3XCI7XG4gICAgS2V5cy5EX0tFWSA9IFwiZFwiO1xuICAgIEtleXMuQ09OVFJPTF9LRVkgPSBcIkNvbnRyb2xcIjtcbiAgICBLZXlzLk1FVEFfS0VZID0gXCJNZXRhXCI7XG4gICAgS2V5cy5BTFRfS0VZID0gXCJBbHRcIjtcbiAgICBLZXlzLlRBQl9LRVkgPSBcIlRhYlwiO1xuICAgIHJldHVybiBLZXlzO1xufSgpKTtcbmV4cG9ydHMuS2V5cyA9IEtleXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQml0bWFwSW1wbCA9IHZvaWQgMDtcbnZhciBCaXRtYXBJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJpdG1hcEltcGwodXJsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy53aWR0aCA9IF90aGlzLmltYWdlLndpZHRoO1xuICAgICAgICAgICAgX3RoaXMuaGVpZ2h0ID0gX3RoaXMuaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgX3RoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB1cmw7XG4gICAgfVxuICAgIEJpdG1hcEltcGwucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBCaXRtYXBJbXBsLnByb3RvdHlwZS5nZXREcmF3YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XG4gICAgfTtcbiAgICByZXR1cm4gQml0bWFwSW1wbDtcbn0oKSk7XG5leHBvcnRzLkJpdG1hcEltcGwgPSBCaXRtYXBJbXBsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZvbnRJbXBsID0gdm9pZCAwO1xudmFyIEZvbnRJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvbnRJbXBsKHVybCwgbmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IFwiQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBcIiArIG5hbWUgKyBcIjsgc3JjOiB1cmwoJ1wiICsgdXJsICsgXCInKTsgfSBib2R5IHsgZm9udC1mYW1pbHk6IFwiICsgbmFtZSArIFwiOyB9XCI7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgICBGb250SW1wbC5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbiAoY3R4LCBzaXplKSB7XG4gICAgICAgIGN0eC5mb250ID0gc2l6ZSArIFwicHggXCIgKyB0aGlzLm5hbWU7XG4gICAgfTtcbiAgICByZXR1cm4gRm9udEltcGw7XG59KCkpO1xuZXhwb3J0cy5Gb250SW1wbCA9IEZvbnRJbXBsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdyYXBoaWNzSW1wbCA9IHZvaWQgMDtcbnZhciBGb250SW1wbF8xID0gcmVxdWlyZShcIi4vRm9udEltcGxcIik7XG52YXIgaXNGaXJlZm94ID0gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcbnZhciBHcmFwaGljc0ltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR3JhcGhpY3NJbXBsKCkge1xuICAgICAgICB0aGlzLmZvbnRTaXplID0gMjA7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiLCB7IGFscGhhOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5jdHgud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4Lm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuZm9udFNtb290aCA9IFwibmV2ZXJcIjtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2Via2l0Rm9udFNtb290aGluZyA9IFwibm9uZVwiO1xuICAgICAgICBpZiAoaXNGaXJlZm94KSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IFwiY3Jpc3AtZWRnZXNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gXCJwaXhlbGF0ZWRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvbnQgPSBuZXcgRm9udEltcGxfMS5Gb250SW1wbChcImZvbnQudHRmXCIsIFwiR3V0ZURlZmF1bHRcIik7XG4gICAgICAgIGlmICh0aGlzLmZvbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlGb250KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuc2NhbGUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSh4LCB5KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuYXBwbHlGb250ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvbnQuYXBwbHkodGhpcy5jdHgsIHRoaXMuZm9udFNpemUpO1xuICAgIH07XG4gICAgR3JhcGhpY3NJbXBsLnByb3RvdHlwZS5zZXRGb250ID0gZnVuY3Rpb24gKGZvbnQpIHtcbiAgICAgICAgdGhpcy5mb250ID0gZm9udDtcbiAgICAgICAgdGhpcy5hcHBseUZvbnQoKTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuc2V0Rm9udFNpemUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgICAgICB0aGlzLmZvbnRTaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5hcHBseUZvbnQoKTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZHJhd1N0cmluZyA9IGZ1bmN0aW9uICh4LCB5LCB0ZXh0LCBjb2wpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICB9O1xuICAgIEdyYXBoaWNzSW1wbC5wcm90b3R5cGUuZmlsbFJlY3QgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBHcmFwaGljc0ltcGwucHJvdG90eXBlLmRyYXdCaXRtYXAgPSBmdW5jdGlvbiAoeCwgeSwgYml0bWFwKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiaXRtYXAuZ2V0RHJhd2FibGUoKSwgeCwgeSk7XG4gICAgfTtcbiAgICByZXR1cm4gR3JhcGhpY3NJbXBsO1xufSgpKTtcbmV4cG9ydHMuR3JhcGhpY3NJbXBsID0gR3JhcGhpY3NJbXBsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNvdW5kSW1wbCA9IHZvaWQgMDtcbnZhciBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG52YXIgQVVESU9fQ09OVEVYVDtcbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnBsYXkoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMudm9sdW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xudmFyIFNvdW5kSW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTb3VuZEltcGwodXJsLCBtdXNpYykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZvbHVtZSA9IDE7XG4gICAgICAgIHRoaXMubXVzaWMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMubXVzaWMgPSBtdXNpYztcbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXEub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICByZXEucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xuICAgICAgICByZXEub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYXJyYXlCdWZmZXIgPSByZXEucmVzcG9uc2U7XG4gICAgICAgICAgICBpZiAoYXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5kYXRhID0gYXJyYXlCdWZmZXI7XG4gICAgICAgICAgICAgICAgX3RoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy50cnlMb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlcS5zZW5kKG51bGwpO1xuICAgIH1cbiAgICBTb3VuZEltcGwucHJvdG90eXBlLnRyeUxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChBVURJT19DT05URVhUICYmIHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgQVVESU9fQ09OVEVYVC5kZWNvZGVBdWRpb0RhdGEodGhpcy5kYXRhLCBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9PT0gX3RoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbGF5KF90aGlzLnZvbHVtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHsgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gbG9hZDogXCIgKyBfdGhpcy51cmwpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU291bmRJbXBsLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIUFVRElPX0NPTlRFWFQpIHtcbiAgICAgICAgICAgIEFVRElPX0NPTlRFWFQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgICAgICBBVURJT19DT05URVhULnJlc3VtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJ5TG9hZCgpO1xuICAgIH07XG4gICAgU291bmRJbXBsLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKHZvbHVtZSkge1xuICAgICAgICB0aGlzLnZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgaWYgKCF0aGlzLmJ1ZmZlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgICAgICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID0gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvdXJjZSA9IEFVRElPX0NPTlRFWFQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgIHRoaXMuc291cmNlLmJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgICAgICB0aGlzLmdhaW4gPSBBVURJT19DT05URVhULmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLmdhaW4pO1xuICAgICAgICB0aGlzLmdhaW4uY29ubmVjdChBVURJT19DT05URVhULmRlc3RpbmF0aW9uKTtcbiAgICAgICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2Fpbi5nYWluLnZhbHVlID0gMDtcbiAgICAgICAgICAgIHRoaXMuc291cmNlLmxvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc291cmNlLnN0YXJ0KDApO1xuICAgICAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgICAgICAgdGhpcy5nYWluLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUodm9sdW1lLCBBVURJT19DT05URVhULmN1cnJlbnRUaW1lICsgMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhaW4uZ2Fpbi52YWx1ZSA9IHZvbHVtZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU291bmRJbXBsLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm11c2ljKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYWluLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUoMCwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSArIDMpO1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wU291cmNlXzEgPSB0aGlzLnNvdXJjZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFNvdXJjZV8xLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9LCA0MDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNvdW5kSW1wbDtcbn0oKSk7XG5leHBvcnRzLlNvdW5kSW1wbCA9IFNvdW5kSW1wbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UaWxlc2V0SW1wbCA9IHZvaWQgMDtcbnZhciBUaWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbGUoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgVGlsZS5wcm90b3R5cGUuZ2V0RHJhd2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgICB9O1xuICAgIFRpbGUucHJvdG90eXBlLmluaXRPbkZpcnN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICByZXR1cm4gVGlsZTtcbn0oKSk7XG52YXIgVGlsZXNldEltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGlsZXNldEltcGwodXJsLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iaXRtYXBzID0gW107XG4gICAgICAgIHRoaXMuc2NhbmxpbmUgPSAwO1xuICAgICAgICB0aGlzLnRpbGVDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudGlsZVdpZHRoID0gdGlsZVdpZHRoO1xuICAgICAgICB0aGlzLnRpbGVIZWlnaHQgPSB0aWxlSGVpZ2h0O1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgX3RoaXMuc2NhbmxpbmUgPSBNYXRoLmZsb29yKF90aGlzLmltYWdlLndpZHRoIC8gdGlsZVdpZHRoKTtcbiAgICAgICAgICAgIHZhciBkZXB0aCA9IE1hdGguZmxvb3IoX3RoaXMuaW1hZ2UuaGVpZ2h0IC8gdGlsZUhlaWdodCk7XG4gICAgICAgICAgICBfdGhpcy50aWxlQ291bnQgPSBkZXB0aCAqIF90aGlzLnNjYW5saW5lO1xuICAgICAgICAgICAgLy8gY3V0IHRoZSBpbWFnZSBpbnRvIHBpZWNlc1xuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBkZXB0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBfdGhpcy5zY2FubGluZTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSB0aWxlV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aWxlSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZHJhd0ltYWdlKF90aGlzLmltYWdlLCAteCAqIHRpbGVXaWR0aCwgLXkgKiB0aWxlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYml0bWFwcy5wdXNoKG5ldyBUaWxlKGNhbnZhcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdXJsO1xuICAgIH1cbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuZ2V0VGlsZVdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlV2lkdGg7XG4gICAgfTtcbiAgICBUaWxlc2V0SW1wbC5wcm90b3R5cGUuZ2V0VGlsZUhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZUhlaWdodDtcbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5nZXRUaWxlQ291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVDb3VudDtcbiAgICB9O1xuICAgIFRpbGVzZXRJbXBsLnByb3RvdHlwZS5pbml0T25GaXJzdENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgVGlsZXNldEltcGwucHJvdG90eXBlLmdldFRpbGUgPSBmdW5jdGlvbiAodGlsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iaXRtYXBzW3RpbGVdO1xuICAgIH07XG4gICAgcmV0dXJuIFRpbGVzZXRJbXBsO1xufSgpKTtcbmV4cG9ydHMuVGlsZXNldEltcGwgPSBUaWxlc2V0SW1wbDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuS2V5cyA9IGV4cG9ydHMuc3RhcnRHYW1lID0gdm9pZCAwO1xudmFyIEd1dGVfMSA9IHJlcXVpcmUoXCIuL0d1dGVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdGFydEdhbWVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEd1dGVfMS5zdGFydEdhbWU7IH0gfSk7XG52YXIgS2V5c18xID0gcmVxdWlyZShcIi4vS2V5c1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIktleXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEtleXNfMS5LZXlzOyB9IH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==