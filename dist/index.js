(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gute"] = factory();
	else
		root["gute"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/jszip/dist/jszip.min.js":
/*!**********************************************!*\
  !*** ./node_modules/jszip/dist/jszip.min.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/

!function(e){if(true)module.exports=e();else // removed by dead control flow
{}}(function(){return function s(a,o,h){function u(r,e){if(!o[r]){if(!a[r]){var t=undefined;if(!e&&t)return require(r,!0);if(l)return l(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[r]={exports:{}};a[r][0].call(i.exports,function(e){var t=a[r][1][e];return u(t||e)},i,i.exports,s,a,o,h)}return o[r].exports}for(var l=undefined,e=0;e<h.length;e++)u(h[e]);return u}({1:[function(e,t,r){"use strict";var d=e("./utils"),c=e("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(e){for(var t,r,n,i,s,a,o,h=[],u=0,l=e.length,f=l,c="string"!==d.getTypeOf(e);u<e.length;)f=l-u,n=c?(t=e[u++],r=u<l?e[u++]:0,u<l?e[u++]:0):(t=e.charCodeAt(u++),r=u<l?e.charCodeAt(u++):0,u<l?e.charCodeAt(u++):0),i=t>>2,s=(3&t)<<4|r>>4,a=1<f?(15&r)<<2|n>>6:64,o=2<f?63&n:64,h.push(p.charAt(i)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join("")},r.decode=function(e){var t,r,n,i,s,a,o=0,h=0,u="data:";if(e.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var l,f=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===p.charAt(64)&&f--,e.charAt(e.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(l=c.uint8array?new Uint8Array(0|f):new Array(0|f);o<e.length;)t=p.indexOf(e.charAt(o++))<<2|(i=p.indexOf(e.charAt(o++)))>>4,r=(15&i)<<4|(s=p.indexOf(e.charAt(o++)))>>2,n=(3&s)<<6|(a=p.indexOf(e.charAt(o++))),l[h++]=t,64!==s&&(l[h++]=r),64!==a&&(l[h++]=n);return l}},{"./support":30,"./utils":32}],2:[function(e,t,r){"use strict";var n=e("./external"),i=e("./stream/DataWorker"),s=e("./stream/Crc32Probe"),a=e("./stream/DataLengthProbe");function o(e,t,r,n,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=n,this.compressedContent=i}o.prototype={getContentWorker:function(){var e=new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(e,t,r){return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression",t)},t.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,r){"use strict";var n=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,r){"use strict";var n=e("./utils");var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==n.getTypeOf(e)?function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}(0|t,e,e.length,0):function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t.charCodeAt(a))];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,t,r){"use strict";var n=null;n="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:n}},{lie:37}],7:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,i=e("pako"),s=e("./utils"),a=e("./stream/GenericWorker"),o=n?"uint8array":"array";function h(e,t){a.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}r.magic="\b\0",s.inherits(h,a),h.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,e.data),!1)},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var t=this;this._pako.onData=function(e){t.push({data:e,meta:t.meta})}},r.compressWorker=function(e){return new h("Deflate",e)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,r){"use strict";function A(e,t){var r,n="";for(r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8;return n}function n(e,t,r,n,i,s){var a,o,h=e.file,u=e.compression,l=s!==O.utf8encode,f=I.transformTo("string",s(h.name)),c=I.transformTo("string",O.utf8encode(h.name)),d=h.comment,p=I.transformTo("string",s(d)),m=I.transformTo("string",O.utf8encode(d)),_=c.length!==h.name.length,g=m.length!==d.length,b="",v="",y="",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};t&&!r||(x.crc32=e.crc32,x.compressedSize=e.compressedSize,x.uncompressedSize=e.uncompressedSize);var S=0;t&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),"UNIX"===i?(C=798,z|=function(e,t){var r=e;return e||(r=t?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(e){return 63&(e||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+c,b+="up"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+="uc"+A(y.length,2)+y);var E="";return E+="\n\0",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+"\0\0\0\0"+A(z,4)+A(n,4)+f+b+p}}var I=e("../utils"),i=e("../stream/GenericWorker"),O=e("../utf8"),B=e("../crc32"),R=e("../signature");function s(e,t,r,n){i.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=n,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}I.inherits(s,i),s.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,n=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,i.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-n-1))/r:100}}))},s.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=n(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},s.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,r=n(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),t)this.push({data:function(e){return R.DATA_DESCRIPTOR+A(e.crc32,4)+A(e.compressedSize,4)+A(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},s.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r=this.bytesWritten-e,n=function(e,t,r,n,i){var s=I.transformTo("string",i(n));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+A(e,2)+A(e,2)+A(t,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,e,this.zipComment,this.encodeFileName);this.push({data:n,meta:{percent:100}})},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},s.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(e){var t=this._sources;if(!i.prototype.error.call(this,e))return!1;for(var r=0;r<t.length;r++)try{t[r].error(e)}catch(e){}return!0},s.prototype.lock=function(){i.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=s},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,r){"use strict";var u=e("../compressions"),n=e("./ZipFileWorker");r.generateWorker=function(e,a,t){var o=new n(a.streamFiles,t,a.platform,a.encodeFileName),h=0;try{e.forEach(function(e,t){h++;var r=function(e,t){var r=e||t,n=u[r];if(!n)throw new Error(r+" is not a valid compression method !");return n}(t.options.compression,a.compression),n=t.options.compressionOptions||a.compressionOptions||{},i=t.dir,s=t.date;t._compressWorker(r,n).withStreamInfo("file",{name:e,dir:i,date:s,comment:t.comment||"",unixPermissions:t.unixPermissions,dosPermissions:t.dosPermissions}).pipe(o)}),o.entriesCount=h}catch(e){o.error(e)}return o}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new n;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(n.prototype=e("./object")).loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.1",n.loadAsync=function(e,t){return(new n).loadAsync(e,t)},n.external=e("./external"),t.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,r){"use strict";var u=e("./utils"),i=e("./external"),n=e("./utf8"),s=e("./zipEntries"),a=e("./stream/Crc32Probe"),l=e("./nodejsUtils");function f(n){return new i.Promise(function(e,t){var r=n.decompressed.getContentWorker().pipe(new a);r.on("error",function(e){t(e)}).on("end",function(){r.streamInfo.crc32!==n.decompressed.crc32?t(new Error("Corrupted zip : CRC32 mismatch")):e()}).resume()})}t.exports=function(e,o){var h=this;return o=u.extend(o||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),l.isNode&&l.isStream(e)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",e,!0,o.optimizedBinaryString,o.base64).then(function(e){var t=new s(o);return t.load(e),t}).then(function(e){var t=[i.Promise.resolve(e)],r=e.files;if(o.checkCRC32)for(var n=0;n<r.length;n++)t.push(f(r[n]));return i.Promise.all(t)}).then(function(e){for(var t=e.shift(),r=t.files,n=0;n<r.length;n++){var i=r[n],s=i.fileNameStr,a=u.resolve(i.fileNameStr);h.file(a,i.decompressed,{binary:!0,optimizedBinaryString:!0,date:i.date,dir:i.dir,comment:i.fileCommentStr.length?i.fileCommentStr:null,unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions,createFolders:o.createFolders}),i.dir||(h.file(a).unsafeOriginalName=s)}return t.zipComment.length&&(h.comment=t.zipComment),h})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../stream/GenericWorker");function s(e,t){i.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}n.inherits(s,i),s.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},s.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,r){"use strict";var i=e("readable-stream").Readable;function n(e,t,r){i.call(this,t),this._helper=e;var n=this;e.on("data",function(e,t){n.push(e)||n._helper.pause(),r&&r(t)}).on("error",function(e){n.emit("error",e)}).on("end",function(){n.push(null)})}e("../utils").inherits(n,i),n.prototype._read=function(){this._helper.resume()},t.exports=n},{"../utils":32,"readable-stream":16}],14:[function(e,t,r){"use strict";t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,r){"use strict";function s(e,t,r){var n,i=u.getTypeOf(t),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=g(e)),s.createFolders&&(n=_(e))&&b.call(this,n,!0);var a="string"===i&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(t instanceof c&&0===t.uncompressedSize||s.dir||!t||0===t.length)&&(s.base64=!1,s.binary=!0,t="",s.compression="STORE",i="string");var o=null;o=t instanceof c||t instanceof l?t:p.isNode&&p.isStream(t)?new m(e,t):u.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var h=new d(e,o,s);this.files[e]=h}var i=e("./utf8"),u=e("./utils"),l=e("./stream/GenericWorker"),a=e("./stream/StreamHelper"),f=e("./defaults"),c=e("./compressedObject"),d=e("./zipObject"),o=e("./generate"),p=e("./nodejsUtils"),m=e("./nodejs/NodejsStreamInputAdapter"),_=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},g=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},b=function(e,t){return t=void 0!==t?t:f.createFolders,e=g(e),this.files[e]||s.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function h(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var n={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,r,n;for(t in this.files)n=this.files[t],(r=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(r,n)},filter:function(r){var n=[];return this.forEach(function(e,t){r(e,t)&&n.push(t)}),n},file:function(e,t,r){if(1!==arguments.length)return e=this.root+e,s.call(this,e,t,r),this;if(h(e)){var n=e;return this.filter(function(e,t){return!t.dir&&n.test(e)})}var i=this.files[this.root+e];return i&&!i.dir?i:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(e,t){return t.dir&&r.test(e)});var e=this.root+r,t=b.call(this,e),n=this.clone();return n.root=t.name,n},remove:function(r){r=this.root+r;var e=this.files[r];if(e||("/"!==r.slice(-1)&&(r+="/"),e=this.files[r]),e&&!e.dir)delete this.files[r];else for(var t=this.filter(function(e,t){return t.name.slice(0,r.length)===r}),n=0;n<t.length;n++)delete this.files[t[n].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,r={};try{if((r=u.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");u.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var n=r.comment||this.comment||"";t=o.generateWorker(this,r,n)}catch(e){(t=new l("error")).error(e)}return new a(t,r.type||"string",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=n},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,r){"use strict";t.exports=e("stream")},{stream:void 0}],17:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===r&&this.data[s+2]===n&&this.data[s+3]===i)return s-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.readData(4);return t===s[0]&&r===s[1]&&n===s[2]&&i===s[3]},i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,r){"use strict";var n=e("../utils");function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,r=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t);return this.index+=e,r},readString:function(e){return n.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,r){"use strict";var n=e("./Uint8ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,r){"use strict";var n=e("./ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../support"),s=e("./ArrayReader"),a=e("./StringReader"),o=e("./NodeBufferReader"),h=e("./Uint8ArrayReader");t.exports=function(e){var t=n.getTypeOf(e);return n.checkSupport(t),"string"!==t||i.uint8array?"nodebuffer"===t?new o(e):i.uint8array?new h(n.transformTo("uint8array",e)):new s(n.transformTo("array",e)):new a(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../utils");function s(e){n.call(this,"ConvertWorker to "+e),this.destType=e}i.inherits(s,n),s.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../crc32");function s(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(s,n),s.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}n.inherits(s,i),s.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=n.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}n.inherits(s,i),s.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,r){"use strict";function n(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=n},{}],29:[function(e,t,r){"use strict";var h=e("../utils"),i=e("./ConvertWorker"),s=e("./GenericWorker"),u=e("../base64"),n=e("../support"),a=e("../external"),o=null;if(n.nodestream)try{o=e("../nodejs/NodejsStreamOutputAdapter")}catch(e){}function l(e,o){return new a.Promise(function(t,r){var n=[],i=e._internalType,s=e._outputType,a=e._mimeType;e.on("data",function(e,t){n.push(e),o&&o(t)}).on("error",function(e){n=[],r(e)}).on("end",function(){try{var e=function(e,t,r){switch(e){case"blob":return h.newBlob(h.transformTo("arraybuffer",t),r);case"base64":return u.encode(t);default:return h.transformTo(e,t)}}(s,function(e,t){var r,n=0,i=null,s=0;for(r=0;r<t.length;r++)s+=t[r].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(i=new Uint8Array(s),r=0;r<t.length;r++)i.set(t[r],n),n+=t[r].length;return i;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(i,n),a);t(e)}catch(e){r(e)}n=[]}).resume()})}function f(e,t,r){var n=t;switch(t){case"blob":case"arraybuffer":n="uint8array";break;case"base64":n="string"}try{this._internalType=n,this._outputType=t,this._mimeType=r,h.checkSupport(n),this._worker=e.pipe(new i(n)),e.lock()}catch(e){this._worker=new s("error"),this._worker.error(e)}}f.prototype={accumulate:function(e){return l(this,e)},on:function(e,t){var r=this;return"data"===e?this._worker.on(e,function(e){t.call(r,e.data,e.meta)}):this._worker.on(e,function(){h.delay(t,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=0===new Blob([n],{type:"application/zip"}).size}catch(e){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(n),r.blob=0===i.getBlob("application/zip").size}catch(e){r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch(e){r.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,s){"use strict";for(var o=e("./utils"),h=e("./support"),r=e("./nodejsUtils"),n=e("./stream/GenericWorker"),u=new Array(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;u[254]=u[254]=1;function a(){n.call(this,"utf-8 decode"),this.leftOver=null}function l(){n.call(this,"utf-8 encode")}s.utf8encode=function(e){return h.nodebuffer?r.newBufferFrom(e,"utf-8"):function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=h.uint8array?new Uint8Array(o):new Array(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t}(e)},s.utf8decode=function(e){return h.nodebuffer?o.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,r,n,i,s=e.length,a=new Array(2*s);for(t=r=0;t<s;)if((n=e[t++])<128)a[r++]=n;else if(4<(i=u[n]))a[r++]=65533,t+=i-1;else{for(n&=2===i?31:3===i?15:7;1<i&&t<s;)n=n<<6|63&e[t++],i--;1<i?a[r++]=65533:n<65536?a[r++]=n:(n-=65536,a[r++]=55296|n>>10&1023,a[r++]=56320|1023&n)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(e=o.transformTo(h.uint8array?"uint8array":"array",e))},o.inherits(a,n),a.prototype.processChunk=function(e){var t=o.transformTo(h.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=t;(t=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),t.set(r,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var n=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}(t),i=t;n!==t.length&&(h.uint8array?(i=t.subarray(0,n),this.leftOver=t.subarray(n,t.length)):(i=t.slice(0,n),this.leftOver=t.slice(n,t.length))),this.push({data:s.utf8decode(i),meta:e.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(l,n),l.prototype.processChunk=function(e){this.push({data:s.utf8encode(e.data),meta:e.meta})},s.Utf8EncodeWorker=l},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,a){"use strict";var o=e("./support"),h=e("./base64"),r=e("./nodejsUtils"),u=e("./external");function n(e){return e}function l(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r);return t}e("setimmediate"),a.newBlob=function(t,r){a.checkSupport("blob");try{return new Blob([t],{type:r})}catch(e){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return n.append(t),n.getBlob(r)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var i={stringifyByChunk:function(e,t,r){var n=[],i=0,s=e.length;if(s<=r)return String.fromCharCode.apply(null,e);for(;i<s;)"array"===t||"nodebuffer"===t?n.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+r,s)))):n.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+r,s)))),i+=r;return n.join("")},stringifyByChar:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(e){return!1}}()}};function s(e){var t=65536,r=a.getTypeOf(e),n=!0;if("uint8array"===r?n=i.applyCanBeUsed.uint8array:"nodebuffer"===r&&(n=i.applyCanBeUsed.nodebuffer),n)for(;1<t;)try{return i.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2)}return i.stringifyByChar(e)}function f(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}a.applyFromCharCode=s;var c={};c.string={string:n,array:function(e){return l(e,new Array(e.length))},arraybuffer:function(e){return c.string.uint8array(e).buffer},uint8array:function(e){return l(e,new Uint8Array(e.length))},nodebuffer:function(e){return l(e,r.allocBuffer(e.length))}},c.array={string:s,array:n,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(e)}},c.arraybuffer={string:function(e){return s(new Uint8Array(e))},array:function(e){return f(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:n,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(new Uint8Array(e))}},c.uint8array={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:n,nodebuffer:function(e){return r.newBufferFrom(e)}},c.nodebuffer={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return c.nodebuffer.uint8array(e).buffer},uint8array:function(e){return f(e,new Uint8Array(e.length))},nodebuffer:n},a.transformTo=function(e,t){if(t=t||"",!e)return t;a.checkSupport(e);var r=a.getTypeOf(t);return c[r][e](t)},a.resolve=function(e){for(var t=e.split("/"),r=[],n=0;n<t.length;n++){var i=t[n];"."===i||""===i&&0!==n&&n!==t.length-1||(".."===i?r.pop():r.push(i))}return r.join("/")},a.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":o.nodebuffer&&r.isBuffer(e)?"nodebuffer":o.uint8array&&e instanceof Uint8Array?"uint8array":o.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(e){if(!o[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(e){var t,r,n="";for(r=0;r<(e||"").length;r++)n+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase();return n},a.delay=function(e,t,r){setImmediate(function(){e.apply(r||null,t||[])})},a.inherits=function(e,t){function r(){}r.prototype=t.prototype,e.prototype=new r},a.extend=function(){var e,t,r={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===r[t]&&(r[t]=arguments[e][t]);return r},a.prepareContent=function(r,e,n,i,s){return u.Promise.resolve(e).then(function(n){return o.blob&&(n instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(n)))&&"undefined"!=typeof FileReader?new u.Promise(function(t,r){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.onerror=function(e){r(e.target.error)},e.readAsArrayBuffer(n)}):n}).then(function(e){var t=a.getTypeOf(e);return t?("arraybuffer"===t?e=a.transformTo("uint8array",e):"string"===t&&(s?e=h.decode(e):n&&!0!==i&&(e=function(e){return l(e,o.uint8array?new Uint8Array(e.length):new Array(e.length))}(e))),e):u.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),i=e("./utils"),s=e("./signature"),a=e("./zipEntry"),o=e("./support");function h(e){this.files=[],this.loadOptions=e}h.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(t)+", expected "+i.pretty(e)+")")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var n=this.reader.readString(4)===t;return this.reader.setIndex(r),n},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?"uint8array":"array",r=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,r,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(e<0)throw!this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(e);var t=e;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var n=t-r;if(0<n)this.isSignature(t,s.CENTRAL_FILE_HEADER)||(this.reader.zero=n);else if(n<0)throw new Error("Corrupted zip: missing "+Math.abs(n)+" bytes.")},prepareReader:function(e){this.reader=n(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),s=e("./utils"),i=e("./compressedObject"),a=e("./crc32"),o=e("./utf8"),h=e("./compressions"),u=e("./support");function l(e,t){this.options=e,this.loadOptions=t}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in h)if(Object.prototype.hasOwnProperty.call(h,t)&&h[t].magic===e)return h[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new i(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,r,n,i=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<i;)t=e.readInt(2),r=e.readInt(2),n=e.readData(r),this.extraFields[t]={id:t,length:r,value:n};e.setIndex(i)},handleUTF8:function(){var e=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var r=s.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var n=this.findExtraFieldUnicodeComment();if(null!==n)this.fileCommentStr=n;else{var i=s.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(i)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=l},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,r){"use strict";function n(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=e("./stream/StreamHelper"),i=e("./stream/DataWorker"),a=e("./utf8"),o=e("./compressedObject"),h=e("./stream/GenericWorker");n.prototype={internalStream:function(e){var t=null,r="string";try{if(!e)throw new Error("No output type specified.");var n="string"===(r=e.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),t=this._decompressWorker();var i=!this._dataBinary;i&&!n&&(t=t.pipe(new a.Utf8EncodeWorker)),!i&&n&&(t=t.pipe(new a.Utf8DecodeWorker))}catch(e){(t=new h("error")).error(e)}return new s(t,r,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new i(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)n.prototype[u[f]]=l;t.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,l,t){(function(t){"use strict";var r,n,e=t.MutationObserver||t.WebKitMutationObserver;if(e){var i=0,s=new e(u),a=t.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)r="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){u(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(u,0)};else{var o=new t.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0)}}var h=[];function u(){var e,t;n=!0;for(var r=h.length;r;){for(t=h,h=[],e=-1;++e<r;)t[e]();r=h.length}n=!1}l.exports=function(e){1!==h.push(e)||n||r()}}).call(this,"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,r){"use strict";var i=e("immediate");function u(){}var l={},s=["REJECTED"],a=["FULFILLED"],n=["PENDING"];function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=n,this.queue=[],this.outcome=void 0,e!==u&&d(this,e)}function h(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function f(t,r,n){i(function(){var e;try{e=r(n)}catch(e){return l.reject(t,e)}e===t?l.reject(t,new TypeError("Cannot resolve promise with itself")):l.resolve(t,e)})}function c(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function d(t,e){var r=!1;function n(e){r||(r=!0,l.reject(t,e))}function i(e){r||(r=!0,l.resolve(t,e))}var s=p(function(){e(i,n)});"error"===s.status&&n(s.value)}function p(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}(t.exports=o).prototype.finally=function(t){if("function"!=typeof t)return this;var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===s)return this;var r=new this.constructor(u);this.state!==n?f(r,this.state===a?e:t,this.outcome):this.queue.push(new h(r,e,t));return r},h.prototype.callFulfilled=function(e){l.resolve(this.promise,e)},h.prototype.otherCallFulfilled=function(e){f(this.promise,this.onFulfilled,e)},h.prototype.callRejected=function(e){l.reject(this.promise,e)},h.prototype.otherCallRejected=function(e){f(this.promise,this.onRejected,e)},l.resolve=function(e,t){var r=p(c,t);if("error"===r.status)return l.reject(e,r.value);var n=r.value;if(n)d(e,n);else{e.state=a,e.outcome=t;for(var i=-1,s=e.queue.length;++i<s;)e.queue[i].callFulfilled(t)}return e},l.reject=function(e,t){e.state=s,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},o.resolve=function(e){if(e instanceof this)return e;return l.resolve(new this(u),e)},o.reject=function(e){var t=new this(u);return l.reject(t,e)},o.all=function(e){var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,i=!1;if(!n)return this.resolve([]);var s=new Array(n),a=0,t=-1,o=new this(u);for(;++t<n;)h(e[t],t);return o;function h(e,t){r.resolve(e).then(function(e){s[t]=e,++a!==n||i||(i=!0,l.resolve(o,s))},function(e){i||(i=!0,l.reject(o,e))})}},o.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);var i=-1,s=new this(u);for(;++i<r;)a=e[i],t.resolve(a).then(function(e){n||(n=!0,l.resolve(s,e))},function(e){n||(n=!0,l.reject(s,e))});var a;return s}},{immediate:36}],38:[function(e,t,r){"use strict";var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,r){"use strict";var a=e("./zlib/deflate"),o=e("./utils/common"),h=e("./utils/strings"),i=e("./zlib/messages"),s=e("./zlib/zstream"),u=Object.prototype.toString,l=0,f=-1,c=0,d=8;function p(e){if(!(this instanceof p))return new p(e);this.options=o.assign({level:f,method:d,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==l)throw new Error(i[r]);if(t.header&&a.deflateSetHeader(this.strm,t.header),t.dictionary){var n;if(n="string"==typeof t.dictionary?h.string2buf(t.dictionary):"[object ArrayBuffer]"===u.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(r=a.deflateSetDictionary(this.strm,n))!==l)throw new Error(i[r]);this._dict_set=!0}}function n(e,t){var r=new p(t);if(r.push(e,!0),r.err)throw r.msg||i[r.err];return r.result}p.prototype.push=function(e,t){var r,n,i=this.strm,s=this.options.chunkSize;if(this.ended)return!1;n=t===~~t?t:!0===t?4:0,"string"==typeof e?i.input=h.string2buf(e):"[object ArrayBuffer]"===u.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new o.Buf8(s),i.next_out=0,i.avail_out=s),1!==(r=a.deflate(i,n))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==i.avail_out&&(0!==i.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(i.output,i.next_out))):this.onData(o.shrinkBuf(i.output,i.next_out)))}while((0<i.avail_in||0===i.avail_out)&&1!==r);return 4===n?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==n||(this.onEnd(l),!(i.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=p,r.deflate=n,r.deflateRaw=function(e,t){return(t=t||{}).raw=!0,n(e,t)},r.gzip=function(e,t){return(t=t||{}).gzip=!0,n(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,r){"use strict";var c=e("./zlib/inflate"),d=e("./utils/common"),p=e("./utils/strings"),m=e("./zlib/constants"),n=e("./zlib/messages"),i=e("./zlib/zstream"),s=e("./zlib/gzheader"),_=Object.prototype.toString;function a(e){if(!(this instanceof a))return new a(e);this.options=d.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0;var r=c.inflateInit2(this.strm,t.windowBits);if(r!==m.Z_OK)throw new Error(n[r]);this.header=new s,c.inflateGetHeader(this.strm,this.header)}function o(e,t){var r=new a(t);if(r.push(e,!0),r.err)throw r.msg||n[r.err];return r.result}a.prototype.push=function(e,t){var r,n,i,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return!1;n=t===~~t?t:!0===t?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof e?h.input=p.binstring2buf(e):"[object ArrayBuffer]"===_.call(e)?h.input=new Uint8Array(e):h.input=e,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new d.Buf8(u),h.next_out=0,h.avail_out=u),(r=c.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o="string"==typeof l?p.string2buf(l):"[object ArrayBuffer]"===_.call(l)?new Uint8Array(l):l,r=c.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||n!==m.Z_FINISH&&n!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(i=p.utf8border(h.output,h.next_out),s=h.next_out-i,a=p.buf2string(h.output,i),h.next_out=s,h.avail_out=u-s,s&&d.arraySet(h.output,h.output,i,s,0),this.onData(a)):this.onData(d.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0)}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(n=m.Z_FINISH),n===m.Z_FINISH?(r=c.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):n!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(e){this.chunks.push(e)},a.prototype.onEnd=function(e){e===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,o(e,t)},r.ungzip=o},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,n,i){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),i);else for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){var t,r,n,i,s,a;for(t=n=0,r=e.length;t<r;t++)n+=e[t].length;for(a=new Uint8Array(n),t=i=0,r=e.length;t<r;t++)s=e[t],a.set(s,i),i+=s.length;return a}},s={arraySet:function(e,t,r,n,i){for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){return[].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(n)},{}],42:[function(e,t,r){"use strict";var h=e("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(e){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var u=new h.Buf8(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function l(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&i))return String.fromCharCode.apply(null,h.shrinkBuf(e,t));for(var r="",n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r}u[254]=u[254]=1,r.string2buf=function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=new h.Buf8(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t},r.buf2binstring=function(e){return l(e,e.length)},r.binstring2buf=function(e){for(var t=new h.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){var r,n,i,s,a=t||e.length,o=new Array(2*a);for(r=n=0;r<a;)if((i=e[r++])<128)o[n++]=i;else if(4<(s=u[i]))o[n++]=65533,r+=s-1;else{for(i&=2===s?31:3===s?15:7;1<s&&r<a;)i=i<<6|63&e[r++],s--;1<s?o[n++]=65533:i<65536?o[n++]=i:(i-=65536,o[n++]=55296|i>>10&1023,o[n++]=56320|1023&i)}return l(o,n)},r.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}},{"./common":41}],43:[function(e,t,r){"use strict";t.exports=function(e,t,r,n){for(var i=65535&e|0,s=e>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(i=i+t[n++]|0)|0,--a;);i%=65521,s%=65521}return i|s<<16|0}},{}],44:[function(e,t,r){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,r){"use strict";var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}},{}],46:[function(e,t,r){"use strict";var h,c=e("../utils/common"),u=e("./trees"),d=e("./adler32"),p=e("./crc32"),n=e("./messages"),l=0,f=4,m=0,_=-2,g=-1,b=4,i=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(e,t){return e.msg=n[t],t}function T(e){return(e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(c.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function N(e,t){u._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function U(e,t){e.pending_buf[e.pending++]=t}function P(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function L(e,t){var r,n,i=e.max_chain_length,s=e.strstart,a=e.prev_length,o=e.nice_match,h=e.strstart>e.w_size-z?e.strstart-(e.w_size-z):0,u=e.window,l=e.w_mask,f=e.prev,c=e.strstart+S,d=u[s+a-1],p=u[s+a];e.prev_length>=e.good_match&&(i>>=2),o>e.lookahead&&(o=e.lookahead);do{if(u[(r=t)+a]===p&&u[r+a-1]===d&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<c);if(n=S-(c-s),s=c-S,a<n){if(e.match_start=t,o<=(a=n))break;d=u[s+a-1],p=u[s+a]}}}while((t=f[t&l])>h&&0!=--i);return a<=e.lookahead?a:e.lookahead}function j(e){var t,r,n,i,s,a,o,h,u,l,f=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=f+(f-z)){for(c.arraySet(e.window,e.window,f,f,0),e.match_start-=f,e.strstart-=f,e.block_start-=f,t=r=e.hash_size;n=e.head[--t],e.head[t]=f<=n?n-f:0,--r;);for(t=r=f;n=e.prev[--t],e.prev[t]=f<=n?n-f:0,--r;);i+=f}if(0===e.strm.avail_in)break;if(a=e.strm,o=e.window,h=e.strstart+e.lookahead,u=i,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,c.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=d(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),e.lookahead+=r,e.lookahead+e.insert>=x)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+x-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<x)););}while(e.lookahead<z&&0!==e.strm.avail_in)}function Z(e,t){for(var r,n;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r)),e.match_length>=x)if(n=u._tr_tally(e,e.strstart-e.match_start,e.match_length-x),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=x){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function W(e,t){for(var r,n,i;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=x-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r),e.match_length<=5&&(1===e.strategy||e.match_length===x&&4096<e.strstart-e.match_start)&&(e.match_length=x-1)),e.prev_length>=x&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-x,n=u._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-x),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=x-1,e.strstart++,n&&(N(e,!1),0===e.strm.avail_out))return A}else if(e.match_available){if((n=u._tr_tally(e,0,e.window[e.strstart-1]))&&N(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return A}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=u._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function M(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*w),this.dyn_dtree=new c.Buf16(2*(2*a+1)),this.bl_tree=new c.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(k+1),this.heap=new c.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=i,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?C:E,e.adler=2===t.wrap?0:1,t.last_flush=l,u._tr_init(t),m):R(e,_)}function K(e){var t=G(e);return t===m&&function(e){e.window_size=2*e.w_size,D(e.head),e.max_lazy_match=h[e.level].max_lazy,e.good_match=h[e.level].good_length,e.nice_match=h[e.level].nice_length,e.max_chain_length=h[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=x-1,e.match_available=0,e.ins_h=0}(e.state),t}function Y(e,t,r,n,i,s){if(!e)return _;var a=1;if(t===g&&(t=6),n<0?(a=0,n=-n):15<n&&(a=2,n-=16),i<1||y<i||r!==v||n<8||15<n||t<0||9<t||s<0||b<s)return R(e,_);8===n&&(n=9);var o=new H;return(e.state=o).strm=e,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=i+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new c.Buf8(2*o.w_size),o.head=new c.Buf16(o.hash_size),o.prev=new c.Buf16(o.w_size),o.lit_bufsize=1<<i+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new c.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=s,o.method=r,K(e)}h=[new M(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(j(e),0===e.lookahead&&t===l)return A;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,N(e,!1),0===e.strm.avail_out))return A;if(e.strstart-e.block_start>=e.w_size-z&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):(e.strstart>e.block_start&&(N(e,!1),e.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(e,t){return Y(e,t,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?_:(e.state.gzhead=t,m):_},r.deflate=function(e,t){var r,n,i,s;if(!e||!e.state||5<t||t<0)return e?R(e,_):_;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&t!==f)return R(e,0===e.avail_out?-5:_);if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===C)if(2===n.wrap)e.adler=0,U(n,31),U(n,139),U(n,8),n.gzhead?(U(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),U(n,255&n.gzhead.time),U(n,n.gzhead.time>>8&255),U(n,n.gzhead.time>>16&255),U(n,n.gzhead.time>>24&255),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(U(n,255&n.gzhead.extra.length),U(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=p(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(U(n,0),U(n,0),U(n,0),U(n,0),U(n,0),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,3),n.status=E);else{var a=v+(n.w_bits-8<<4)<<8;a|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(a|=32),a+=31-a%31,n.status=E,P(n,a),0!==n.strstart&&(P(n,e.adler>>>16),P(n,65535&e.adler)),e.adler=1}if(69===n.status)if(n.gzhead.extra){for(i=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending!==n.pending_buf_size));)U(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&F(e),n.pending+2<=n.pending_buf_size&&(U(n,255&e.adler),U(n,e.adler>>8&255),e.adler=0,n.status=E)):n.status=E),0!==n.pending){if(F(e),0===e.avail_out)return n.last_flush=-1,m}else if(0===e.avail_in&&T(t)<=T(r)&&t!==f)return R(e,-5);if(666===n.status&&0!==e.avail_in)return R(e,-5);if(0!==e.avail_in||0!==n.lookahead||t!==l&&666!==n.status){var o=2===n.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(j(e),0===e.lookahead)){if(t===l)return A;break}if(e.match_length=0,r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):3===n.strategy?function(e,t){for(var r,n,i,s,a=e.window;;){if(e.lookahead<=S){if(j(e),e.lookahead<=S&&t===l)return A;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=x&&0<e.strstart&&(n=a[i=e.strstart-1])===a[++i]&&n===a[++i]&&n===a[++i]){s=e.strstart+S;do{}while(n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<s);e.match_length=S-(s-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=x?(r=u._tr_tally(e,1,e.match_length-x),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):h[n.level].func(n,t);if(o!==O&&o!==B||(n.status=666),o===A||o===O)return 0===e.avail_out&&(n.last_flush=-1),m;if(o===I&&(1===t?u._tr_align(n):5!==t&&(u._tr_stored_block(n,0,0,!1),3===t&&(D(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),F(e),0===e.avail_out))return n.last_flush=-1,m}return t!==f?m:n.wrap<=0?1:(2===n.wrap?(U(n,255&e.adler),U(n,e.adler>>8&255),U(n,e.adler>>16&255),U(n,e.adler>>24&255),U(n,255&e.total_in),U(n,e.total_in>>8&255),U(n,e.total_in>>16&255),U(n,e.total_in>>24&255)):(P(n,e.adler>>>16),P(n,65535&e.adler)),F(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?m:1)},r.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==C&&69!==t&&73!==t&&91!==t&&103!==t&&t!==E&&666!==t?R(e,_):(e.state=null,t===E?R(e,-3):m):_},r.deflateSetDictionary=function(e,t){var r,n,i,s,a,o,h,u,l=t.length;if(!e||!e.state)return _;if(2===(s=(r=e.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(e.adler=d(e.adler,t,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new c.Buf8(r.w_size),c.arraySet(u,t,l-r.w_size,r.w_size,0),t=u,l=r.w_size),a=e.avail_in,o=e.next_in,h=e.input,e.avail_in=l,e.next_in=0,e.input=t,j(r);r.lookahead>=x;){for(n=r.strstart,i=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+x-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++,--i;);r.strstart=n,r.lookahead=x-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,e.next_in=o,e.input=h,e.avail_in=a,r.wrap=s,m},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,r){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,r){"use strict";t.exports=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C;r=e.state,n=e.next_in,z=e.input,i=n+(e.avail_in-5),s=e.next_out,C=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,c=r.window,d=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;e:do{p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=m[d&g];t:for(;;){if(d>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(d&(1<<y)-1)];continue t}if(32&y){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}w=65535&v,(y&=15)&&(p<y&&(d+=z[n++]<<p,p+=8),w+=d&(1<<y)-1,d>>>=y,p-=y),p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=_[d&b];r:for(;;){if(d>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(d&(1<<y)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(k=65535&v,p<(y&=15)&&(d+=z[n++]<<p,(p+=8)<y&&(d+=z[n++]<<p,p+=8)),h<(k+=d&(1<<y)-1)){e.msg="invalid distance too far back",r.mode=30;break e}if(d>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(S=c,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=c[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=c[x++],--y;);x=s-k,S=C}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]))}else{for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]))}break}}break}}while(n<i&&s<o);n-=w=p>>3,d&=(1<<(p-=w<<3))-1,e.next_in=n,e.next_out=s,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=s<o?o-s+257:257-(s-o),r.hold=d,r.bits=p}},{}],49:[function(e,t,r){"use strict";var I=e("../utils/common"),O=e("./adler32"),B=e("./crc32"),R=e("./inffast"),T=e("./inftrees"),D=1,F=2,N=0,U=-2,P=1,n=852,i=592;function L(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=P,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new I.Buf32(n),t.distcode=t.distdyn=new I.Buf32(i),t.sane=1,t.back=-1,N):U}function o(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,a(e)):U}function h(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?U:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,o(e))):U}function u(e,t){var r,n;return e?(n=new s,(e.state=n).window=null,(r=h(e,t))!==N&&(e.state=null),r):U}var l,f,c=!0;function j(e){if(c){var t;for(l=new I.Buf32(512),f=new I.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(T(D,e.lens,0,288,l,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;T(F,e.lens,0,32,f,0,e.work,{bits:5}),c=!1}e.lencode=l,e.lenbits=9,e.distcode=f,e.distbits=5}function Z(e,t,r,n){var i,s=e.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),n>=s.wsize?(I.arraySet(s.window,t,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(n<(i=s.wsize-s.wnext)&&(i=n),I.arraySet(s.window,t,r-n,i,s.wnext),(n-=i)?(I.arraySet(s.window,t,r-n,n,0),s.wnext=n,s.whave=s.wsize):(s.wnext+=i,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=i))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(e){return u(e,15)},r.inflateInit2=u,r.inflate=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return U;12===(r=e.state).mode&&(r.mode=13),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,f=o,c=h,x=N;e:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){e.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){e.msg="unknown compression method",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){e.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,e.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.flags=u,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(d=r.length)&&(d=o),d&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,n,s,d,k)),512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,r.length-=d),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30;break}l=u=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}e.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,2;e.adler=r.check=1,r.mode=12;case 12:if(5===t||6===t)break e;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==t)break;u>>>=2,l-=2;break e;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(d=r.length){if(o<d&&(d=o),h<d&&(d=h),0===d)break e;I.arraySet(i,n,s,d,a),o-=d,s+=d,h-=d,a+=d,r.length-=d;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){e.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else{if(16===b){for(z=_+2;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u>>>=_,l-=_,0===r.have){e.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],d=3+(3&u),u>>>=2,l-=2}else if(17===b){for(z=_+3;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=3+(7&(u>>>=_)),u>>>=3,l-=3}else{for(z=_+7;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=11+(127&(u>>>=_)),u>>>=7,l-=7}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30;break}for(;d--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){e.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(6<=o&&258<=h){e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,R(e,c),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){e.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,64&g){e.msg="invalid distance code",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===h)break e;if(d=c-h,r.offset>d){if((d=r.offset-d)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30;break}p=d>r.wnext?(d-=r.wnext,r.wsize-d):r.wnext-d,d>r.length&&(d=r.length),m=r.window}else m=i,p=a-r.offset,d=r.length;for(h<d&&(d=h),h-=d,r.length-=d;i[a++]=m[p++],--d;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break e;i[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break e;o--,u|=n[s++]<<l,l+=8}if(c-=h,e.total_out+=c,r.total+=c,c&&(e.adler=r.check=r.flags?B(r.check,i,c,a-c):O(r.check,i,c,a-c)),c=h,(r.flags?u:L(u))!==r.check){e.msg="incorrect data check",r.mode=30;break}l=u=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30;break}l=u=0}r.mode=29;case 29:x=1;break e;case 30:x=-3;break e;case 31:return-4;case 32:default:return U}return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,(r.wsize||c!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&Z(e,e.output,e.next_out,c-e.avail_out)?(r.mode=31,-4):(f-=e.avail_in,c-=e.avail_out,e.total_in+=f,e.total_out+=c,r.total+=c,r.wrap&&c&&(e.adler=r.check=r.flags?B(r.check,i,c,e.next_out-c):O(r.check,i,c,e.next_out-c)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===c||4===t)&&x===N&&(x=-5),x)},r.inflateEnd=function(e){if(!e||!e.state)return U;var t=e.state;return t.window&&(t.window=null),e.state=null,N},r.inflateGetHeader=function(e,t){var r;return e&&e.state?0==(2&(r=e.state).wrap)?U:((r.head=t).done=!1,N):U},r.inflateSetDictionary=function(e,t){var r,n=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,t,n,0)!==r.check?-3:Z(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,r){"use strict";var D=e("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,n,i,s,a,o){var h,u,l,f,c,d,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<n;v++)O[t[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return i[s++]=20971520,i[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return-1;if(0<z&&(0===e||1!==w))return-1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<n;v++)0!==t[r+v]&&(a[B[t[r+v]]++]=v);if(d=0===e?(A=R=a,19):1===e?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,c=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===e&&852<C||2===e&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<d?(m=0,a[v]):a[v]>d?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;i[c+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=t[r+a[v]]}if(k<b&&(E&f)!==l){for(0===S&&(S=k),c+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===e&&852<C||2===e&&592<C)return 1;i[l=E&f]=k<<24|x<<16|c-s|0}}return 0!==E&&(i[c+E]=b-S<<24|64<<16|0),o.bits=k,0}},{"../utils/common":41}],51:[function(e,t,r){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,r){"use strict";var i=e("../utils/common"),o=0,h=1;function n(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,a=29,u=256,l=u+1+a,f=30,c=19,_=2*l+1,g=15,d=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));n(z);var C=new Array(2*f);n(C);var E=new Array(512);n(E);var A=new Array(256);n(A);var I=new Array(a);n(I);var O,B,R,T=new Array(f);function D(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function N(e){return e<256?E[e]:E[256+(e>>>7)]}function U(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function P(e,t,r){e.bi_valid>d-r?(e.bi_buf|=t<<e.bi_valid&65535,U(e,e.bi_buf),e.bi_buf=t>>d-e.bi_valid,e.bi_valid+=r-d):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function L(e,t,r){P(e,r[2*t],r[2*t+1])}function j(e,t){for(var r=0;r|=1&e,e>>>=1,r<<=1,0<--t;);return r>>>1}function Z(e,t,r){var n,i,s=new Array(g+1),a=0;for(n=1;n<=g;n++)s[n]=a=a+r[n-1]<<1;for(i=0;i<=t;i++){var o=e[2*i+1];0!==o&&(e[2*i]=j(s[o]++,o))}}function W(e){var t;for(t=0;t<l;t++)e.dyn_ltree[2*t]=0;for(t=0;t<f;t++)e.dyn_dtree[2*t]=0;for(t=0;t<c;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*m]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function M(e){8<e.bi_valid?U(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function H(e,t,r,n){var i=2*t,s=2*r;return e[i]<e[s]||e[i]===e[s]&&n[t]<=n[r]}function G(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&H(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!H(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function K(e,t,r){var n,i,s,a,o=0;if(0!==e.last_lit)for(;n=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],i=e.pending_buf[e.l_buf+o],o++,0===n?L(e,i,t):(L(e,(s=A[i])+u+1,t),0!==(a=w[s])&&P(e,i-=I[s],a),L(e,s=N(--n),r),0!==(a=k[s])&&P(e,n-=T[s],a)),o<e.last_lit;);L(e,m,t)}function Y(e,t){var r,n,i,s=t.dyn_tree,a=t.stat_desc.static_tree,o=t.stat_desc.has_stree,h=t.stat_desc.elems,u=-1;for(e.heap_len=0,e.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(e.heap[++e.heap_len]=u=r,e.depth[r]=0):s[2*r+1]=0;for(;e.heap_len<2;)s[2*(i=e.heap[++e.heap_len]=u<2?++u:0)]=1,e.depth[i]=0,e.opt_len--,o&&(e.static_len-=a[2*i+1]);for(t.max_code=u,r=e.heap_len>>1;1<=r;r--)G(e,s,r);for(i=h;r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],G(e,s,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,s[2*i]=s[2*r]+s[2*n],e.depth[i]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,s[2*r+1]=s[2*n+1]=i,e.heap[1]=i++,G(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,i,s,a,o,h=t.dyn_tree,u=t.max_code,l=t.stat_desc.static_tree,f=t.stat_desc.has_stree,c=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,m=0;for(s=0;s<=g;s++)e.bl_count[s]=0;for(h[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<_;r++)p<(s=h[2*h[2*(n=e.heap[r])+1]+1]+1)&&(s=p,m++),h[2*n+1]=s,u<n||(e.bl_count[s]++,a=0,d<=n&&(a=c[n-d]),o=h[2*n],e.opt_len+=o*(s+a),f&&(e.static_len+=o*(l[2*n+1]+a)));if(0!==m){do{for(s=p-1;0===e.bl_count[s];)s--;e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(n=e.bl_count[s];0!==n;)u<(i=e.heap[--r])||(h[2*i+1]!==s&&(e.opt_len+=(s-h[2*i+1])*h[2*i],h[2*i+1]=s),n--)}}(e,t),Z(s,u,e.bl_count)}function X(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)i=a,a=t[2*(n+1)+1],++o<h&&i===a||(o<u?e.bl_tree[2*i]+=o:0!==i?(i!==s&&e.bl_tree[2*i]++,e.bl_tree[2*b]++):o<=10?e.bl_tree[2*v]++:e.bl_tree[2*y]++,s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4))}function V(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),n=0;n<=r;n++)if(i=a,a=t[2*(n+1)+1],!(++o<h&&i===a)){if(o<u)for(;L(e,i,e.bl_tree),0!=--o;);else 0!==i?(i!==s&&(L(e,i,e.bl_tree),o--),L(e,b,e.bl_tree),P(e,o-3,2)):o<=10?(L(e,v,e.bl_tree),P(e,o-3,3)):(L(e,y,e.bl_tree),P(e,o-11,7));s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4)}}n(T);var q=!1;function J(e,t,r,n){P(e,(s<<1)+(n?1:0),3),function(e,t,r,n){M(e),n&&(U(e,r),U(e,~r)),i.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}(e,t,r,!0)}r._tr_init=function(e){q||(function(){var e,t,r,n,i,s=new Array(g+1);for(n=r=0;n<a-1;n++)for(I[n]=r,e=0;e<1<<w[n];e++)A[r++]=n;for(A[r-1]=n,n=i=0;n<16;n++)for(T[n]=i,e=0;e<1<<k[n];e++)E[i++]=n;for(i>>=7;n<f;n++)for(T[n]=i<<7,e=0;e<1<<k[n]-7;e++)E[256+i++]=n;for(t=0;t<=g;t++)s[t]=0;for(e=0;e<=143;)z[2*e+1]=8,e++,s[8]++;for(;e<=255;)z[2*e+1]=9,e++,s[9]++;for(;e<=279;)z[2*e+1]=7,e++,s[7]++;for(;e<=287;)z[2*e+1]=8,e++,s[8]++;for(Z(z,l+1,s),e=0;e<f;e++)C[2*e+1]=5,C[2*e]=j(e,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,c,p)}(),q=!0),e.l_desc=new F(e.dyn_ltree,O),e.d_desc=new F(e.dyn_dtree,B),e.bl_desc=new F(e.bl_tree,R),e.bi_buf=0,e.bi_valid=0,W(e)},r._tr_stored_block=J,r._tr_flush_block=function(e,t,r,n){var i,s,a=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return o;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return h;for(t=32;t<u;t++)if(0!==e.dyn_ltree[2*t])return h;return o}(e)),Y(e,e.l_desc),Y(e,e.d_desc),a=function(e){var t;for(X(e,e.dyn_ltree,e.l_desc.max_code),X(e,e.dyn_dtree,e.d_desc.max_code),Y(e,e.bl_desc),t=c-1;3<=t&&0===e.bl_tree[2*S[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=i&&(i=s)):i=s=r+5,r+4<=i&&-1!==t?J(e,t,r,n):4===e.strategy||s===i?(P(e,2+(n?1:0),3),K(e,z,C)):(P(e,4+(n?1:0),3),function(e,t,r,n){var i;for(P(e,t-257,5),P(e,r-1,5),P(e,n-4,4),i=0;i<n;i++)P(e,e.bl_tree[2*S[i]+1],3);V(e,e.dyn_ltree,t-1),V(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),K(e,e.dyn_ltree,e.dyn_dtree)),W(e),n&&M(e)},r._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(A[r]+u+1)]++,e.dyn_dtree[2*N(t)]++),e.last_lit===e.lit_bufsize-1},r._tr_align=function(e){P(e,2,3),L(e,m,z),function(e){16===e.bi_valid?(U(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,r){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,r){(function(e){!function(r,n){"use strict";if(!r.setImmediate){var i,s,t,a,o=1,h={},u=!1,l=r.document,e=Object.getPrototypeOf&&Object.getPrototypeOf(r);e=e&&e.setTimeout?e:r,i="[object process]"==={}.toString.call(r.process)?function(e){process.nextTick(function(){c(e)})}:function(){if(r.postMessage&&!r.importScripts){var e=!0,t=r.onmessage;return r.onmessage=function(){e=!1},r.postMessage("","*"),r.onmessage=t,e}}()?(a="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",d,!1):r.attachEvent("onmessage",d),function(e){r.postMessage(a+e,"*")}):r.MessageChannel?((t=new MessageChannel).port1.onmessage=function(e){c(e.data)},function(e){t.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(s=l.documentElement,function(e){var t=l.createElement("script");t.onreadystatechange=function(){c(e),t.onreadystatechange=null,s.removeChild(t),t=null},s.appendChild(t)}):function(e){setTimeout(c,0,e)},e.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return h[o]=n,i(o),o++},e.clearImmediate=f}function f(e){delete h[e]}function c(e){if(u)setTimeout(c,0,e);else{var t=h[e];if(t){u=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{f(e),u=!1}}}}function d(e){e.source===r&&"string"==typeof e.data&&0===e.data.indexOf(a)&&c(+e.data.slice(a.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10)});

/***/ }),

/***/ "./node_modules/potpack/index.js":
/*!***************************************!*\
  !*** ./node_modules/potpack/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ potpack)
/* harmony export */ });

function potpack(boxes) {

    // calculate total box area and maximum box width
    let area = 0;
    let maxWidth = 0;

    for (const box of boxes) {
        area += box.w * box.h;
        maxWidth = Math.max(maxWidth, box.w);
    }

    // sort the boxes for insertion by height, descending
    boxes.sort((a, b) => b.h - a.h);

    // aim for a squarish resulting container,
    // slightly adjusted for sub-100% space utilization
    const startWidth = Math.max(Math.ceil(Math.sqrt(area / 0.95)), maxWidth);

    // start with a single empty space, unbounded at the bottom
    const spaces = [{x: 0, y: 0, w: startWidth, h: Infinity}];

    let width = 0;
    let height = 0;

    for (const box of boxes) {
        // look through spaces backwards so that we check smaller spaces first
        for (let i = spaces.length - 1; i >= 0; i--) {
            const space = spaces[i];

            // look for empty spaces that can accommodate the current box
            if (box.w > space.w || box.h > space.h) continue;

            // found the space; add the box to its top-left corner
            // |-------|-------|
            // |  box  |       |
            // |_______|       |
            // |         space |
            // |_______________|
            box.x = space.x;
            box.y = space.y;

            height = Math.max(height, box.y + box.h);
            width = Math.max(width, box.x + box.w);

            if (box.w === space.w && box.h === space.h) {
                // space matches the box exactly; remove it
                const last = spaces.pop();
                if (i < spaces.length) spaces[i] = last;

            } else if (box.h === space.h) {
                // space matches the box height; update it accordingly
                // |-------|---------------|
                // |  box  | updated space |
                // |_______|_______________|
                space.x += box.w;
                space.w -= box.w;

            } else if (box.w === space.w) {
                // space matches the box width; update it accordingly
                // |---------------|
                // |      box      |
                // |_______________|
                // | updated space |
                // |_______________|
                space.y += box.h;
                space.h -= box.h;

            } else {
                // otherwise the box splits the space into two spaces
                // |-------|-----------|
                // |  box  | new space |
                // |_______|___________|
                // | updated space     |
                // |___________________|
                spaces.push({
                    x: space.x + box.w,
                    y: space.y,
                    w: space.w - box.w,
                    h: box.h
                });
                space.y += box.h;
                space.h -= box.h;
            }
            break;
        }
    }

    return {
        w: width, // container width
        h: height, // container height
        fill: (area / (width * height)) || 0 // space utilization
    };
}


/***/ }),

/***/ "./node_modules/xbr-js/src/index.js":
/*!******************************************!*\
  !*** ./node_modules/xbr-js/src/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xbr2x: () => (/* binding */ xbr2x),
/* harmony export */   xbr3x: () => (/* binding */ xbr3x),
/* harmony export */   xbr4x: () => (/* binding */ xbr4x)
/* harmony export */ });
// Options
const USE_3X_ORIGINAL_IMPLEMENTATION = false;

const
  REDMASK   = 0x000000FF, // &MASK	>>0
  GREENMASK = 0x0000FF00, // &MASK	>>8
  BLUEMASK  = 0x00FF0000, // &MASK	>>16
  ALPHAMASK = 0xFF000000, // &MASK	>>24
  THRESHHOLD_Y = 48,
  THRESHHOLD_U = 7,
  THRESHHOLD_V = 6;

// Convert an ARGB byte to YUV
function getYuv(p) {
  const
    r = (p & REDMASK),
    g = (p & GREENMASK) >> 8,
    b = (p & BLUEMASK) >> 16,
    y = r * .299000 + g * .587000 + b * .114000,
    u = r *  - .168736 + g *  - .331264 + b * .500000,
    v = r * .500000 + g *  - .418688 + b *  - .081312;
  return [y, u, v];
}

function yuvDifference(A, B, scaleAlpha) {
  const
    alphaA = ((A & ALPHAMASK) >> 24) & 0xff,
    alphaB = ((B & ALPHAMASK) >> 24) & 0xff;

  if (alphaA === 0 && alphaB === 0) {
    return 0;
  }

  if (!scaleAlpha && (alphaA < 255 || alphaB < 255)) {
    // Very large value not attainable by the thresholds
    return 1000000;
  }
 
  if (alphaA === 0 || alphaB === 0) {
    // Very large value not attainable by the thresholds
    return 1000000;
  }

  const
    yuvA = getYuv(A),
    yuvB = getYuv(B);

  /*Add HQx filters threshold & return*/
  return Math.abs(yuvA[0] - yuvB[0]) * THRESHHOLD_Y
       + Math.abs(yuvA[1] - yuvB[1]) * THRESHHOLD_U
       + Math.abs(yuvA[2] - yuvB[2]) * THRESHHOLD_V;
}

function isEqual(A, B, scaleAlpha) {
  const
    alphaA = ((A & ALPHAMASK) >> 24) & 0xff,
    alphaB = ((B & ALPHAMASK) >> 24) & 0xff;

  if (alphaA === 0 && alphaB === 0) {
    return true;
  }

  if (!scaleAlpha && (alphaA < 255 || alphaB < 255)) {
    return false;
  }

  if (alphaA === 0 || alphaB === 0) {
    return false;
  }

  const
    yuvA = getYuv(A),
    yuvB = getYuv(B);

  if (Math.abs(yuvA[0] - yuvB[0]) > THRESHHOLD_Y) {
    return false;
  }
  if (Math.abs(yuvA[1] - yuvB[1]) > THRESHHOLD_U) {
    return false;
  }
  if (Math.abs(yuvA[2] - yuvB[2]) > THRESHHOLD_V) {
    return false;
  }

  return true;
}

function pixelInterpolate(A, B, q1, q2) {
  const
    alphaA = ((A & ALPHAMASK) >> 24) & 0xff,
    alphaB = ((B & ALPHAMASK) >> 24) & 0xff;

  /*Extract each value from 32bit Uint & blend colors together*/
  let r, g, b, a;

  if (alphaA === 0) {
    r = B & REDMASK;
    g = (B & GREENMASK) >> 8;
    b = (B & BLUEMASK) >> 16;
  } else if (alphaB === 0) {
    r = A & REDMASK;
    g = (A & GREENMASK) >> 8;
    b = (A & BLUEMASK) >> 16;
  } else {
    r = (q2 * (B & REDMASK) + q1 * (A & REDMASK)) / (q1 + q2);
    g = (q2 * ((B & GREENMASK) >> 8) + q1 * ((A & GREENMASK) >> 8)) / (q1 + q2);
    b = (q2 * ((B & BLUEMASK) >> 16) + q1 * ((A & BLUEMASK) >> 16)) / (q1 + q2);
  }
  a = (q2 * alphaB + q1 * alphaA) / (q1 + q2);
  /*The bit hack '~~' is used to floor the values like Math.floor, but faster*/
  return ((~~r) | ((~~g) << 8) | ((~~b) << 16) | ((~~a) << 24));
}

function getRelatedPoints(oriPixelView, oriX, oriY, oriW, oriH) {
  let xm1 = oriX - 1;
  if (xm1 < 0) {
    xm1 = 0;
  }
  let xm2 = oriX - 2;
  if (xm2 < 0) {
    xm2 = 0;
  }
  let xp1 = oriX + 1;
  if (xp1 >= oriW) {
    xp1 = oriW - 1;
  }
  let xp2 = oriX + 2;
  if (xp2 >= oriW) {
    xp2 = oriW - 1;
  }
  let ym1 = oriY - 1;
  if (ym1 < 0) {
    ym1 = 0;
  }
  let ym2 = oriY - 2;
  if (ym2 < 0) {
    ym2 = 0;
  }
  let yp1 = oriY + 1;
  if (yp1 >= oriH) {
    yp1 = oriH - 1;
  }
  let yp2 = oriY + 2;
  if (yp2 >= oriH) {
    yp2 = oriH - 1;
  }

  return [
    oriPixelView[xm1 + ym2 * oriW],  /* a1 */
    oriPixelView[oriX + ym2 * oriW], /* b1 */
    oriPixelView[xp1 + ym2 * oriW],  /* c1 */

    oriPixelView[xm2 + ym1 * oriW],  /* a0 */
    oriPixelView[xm1 + ym1 * oriW],  /* pa */
    oriPixelView[oriX + ym1 * oriW], /* pb */
    oriPixelView[xp1 + ym1 * oriW],  /* pc */
    oriPixelView[xp2 + ym1 * oriW],  /* c4 */

    oriPixelView[xm2 + oriY * oriW], /* d0 */
    oriPixelView[xm1 + oriY * oriW], /* pd */
    oriPixelView[oriX + oriY * oriW],/* pe */
    oriPixelView[xp1 + oriY * oriW], /* pf */
    oriPixelView[xp2 + oriY * oriW], /* f4 */

    oriPixelView[xm2 + yp1 * oriW],  /* g0 */
    oriPixelView[xm1 + yp1 * oriW],  /* pg */
    oriPixelView[oriX + yp1 * oriW], /* ph */
    oriPixelView[xp1 + yp1 * oriW],  /* pi */
    oriPixelView[xp2 + yp1 * oriW],  /* i4 */

    oriPixelView[xm1 + yp2 * oriW],  /* g5 */
    oriPixelView[oriX + yp2 * oriW], /* h5 */
    oriPixelView[xp1 + yp2 * oriW]   /* i5 */
  ];
}

// This is the XBR2x by Hyllian (see http://board.byuu.org/viewtopic.php?f=10&t=2248)
function computeXbr2x(oriPixelView, oriX, oriY, oriW, oriH, dstPixelView, dstX, dstY, dstW, blendColors, scaleAlpha) {
  const relatedPoints = getRelatedPoints(oriPixelView, oriX, oriY, oriW, oriH);
  const
    [a1,
     b1,
     c1,
	 a0,
     pa,
     pb,
     pc,
     c4,
     d0,
     pd,
     pe,
     pf,
     f4,
     g0,
     pg,
     ph,
     pi,
     i4,
     g5,
     h5,
     i5] = relatedPoints;
  let e0, e1, e2, e3;
  e0 = e1 = e2 = e3 = pe;

  [e1, e2, e3] = kernel2Xv5(pe, pi, ph, pf, pg, pc, pd, pb, f4, i4, h5, i5, e1, e2, e3, blendColors, scaleAlpha);
  [e0, e3, e1] = kernel2Xv5(pe, pc, pf, pb, pi, pa, ph, pd, b1, c1, f4, c4, e0, e3, e1, blendColors, scaleAlpha);
  [e2, e1, e0] = kernel2Xv5(pe, pa, pb, pd, pc, pg, pf, ph, d0, a0, b1, a1, e2, e1, e0, blendColors, scaleAlpha);
  [e3, e0, e2] = kernel2Xv5(pe, pg, pd, ph, pa, pi, pb, pf, h5, g5, d0, g0, e3, e0, e2, blendColors, scaleAlpha);

  dstPixelView[dstX + dstY * dstW] = e0;
  dstPixelView[dstX + 1 + dstY * dstW] = e1;
  dstPixelView[dstX + (dstY + 1) * dstW] = e2;
  dstPixelView[dstX + 1 + (dstY + 1) * dstW] = e3;  
}

function computeXbr3x(oriPixelView, oriX, oriY, oriW, oriH, dstPixelView, dstX, dstY, dstW, blendColors, scaleAlpha) {
  const relatedPoints = getRelatedPoints(oriPixelView, oriX, oriY, oriW, oriH);
  const
    [a1,
     b1,
     c1,
	 a0,
     pa,
     pb,
     pc,
     c4,
     d0,
     pd,
     pe,
     pf,
     f4,
     g0,
     pg,
     ph,
     pi,
     i4,
     g5,
     h5,
     i5] = relatedPoints;
  let e0, e1, e2, e3, e4, e5, e6, e7, e8;
  e0 = e1 = e2 = e3 = e4 = e5 = e6 = e7 = e8 = pe;

  [e2, e5, e6, e7, e8] = kernel3X(pe, pi, ph, pf, pg, pc, pd, pb, f4, i4, h5, i5, e2, e5, e6, e7, e8, blendColors, scaleAlpha);
  [e0, e1, e8, e5, e2] = kernel3X(pe, pc, pf, pb, pi, pa, ph, pd, b1, c1, f4, c4, e0, e1, e8, e5, e2, blendColors, scaleAlpha);
  [e6, e3, e2, e1, e0] = kernel3X(pe, pa, pb, pd, pc, pg, pf, ph, d0, a0, b1, a1, e6, e3, e2, e1, e0, blendColors, scaleAlpha);
  [e8, e7, e0, e3, e6] = kernel3X(pe, pg, pd, ph, pa, pi, pb, pf, h5, g5, d0, g0, e8, e7, e0, e3, e6, blendColors, scaleAlpha);

  dstPixelView[dstX + dstY * dstW] = e0;
  dstPixelView[dstX + 1 + dstY * dstW] = e1;
  dstPixelView[dstX + 2 + dstY * dstW] = e2;
  dstPixelView[dstX + (dstY + 1) * dstW] = e3;
  dstPixelView[dstX + 1 + (dstY + 1) * dstW] = e4;
  dstPixelView[dstX + 2 + (dstY + 1) * dstW] = e5;
  dstPixelView[dstX + (dstY + 2) * dstW] = e6;
  dstPixelView[dstX + 1 + (dstY + 2) * dstW] = e7;
  dstPixelView[dstX + 2 + (dstY + 2) * dstW] = e8;
}


function computeXbr4x(oriPixelView, oriX, oriY, oriW, oriH, dstPixelView, dstX, dstY, dstW, blendColors, scaleAlpha) {
  const relatedPoints = getRelatedPoints(oriPixelView, oriX, oriY, oriW, oriH);
  const
    [a1,
     b1,
     c1,
	 a0,
     pa,
     pb,
     pc,
     c4,
     d0,
     pd,
     pe,
     pf,
     f4,
     g0,
     pg,
     ph,
     pi,
     i4,
     g5,
     h5,
     i5] = relatedPoints;
  let e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, ea, eb, ec, ed, ee, ef;
  e0 = e1 = e2 = e3 = e4 = e5 = e6 = e7 = e8 = e9 = ea = eb = ec = ed = ee = ef = pe;

  [ef, ee, eb, e3, e7, ea, ed, ec] = kernel4Xv2(pe, pi, ph, pf, pg, pc, pd, pb, f4, i4, h5, i5, ef, ee, eb, e3, e7, ea, ed, ec, blendColors, scaleAlpha);
  [e3, e7, e2, e0, e1, e6, eb, ef] = kernel4Xv2(pe, pc, pf, pb, pi, pa, ph, pd, b1, c1, f4, c4, e3, e7, e2, e0, e1, e6, eb, ef, blendColors, scaleAlpha);
  [e0, e1, e4, ec, e8, e5, e2, e3] = kernel4Xv2(pe, pa, pb, pd, pc, pg, pf, ph, d0, a0, b1, a1, e0, e1, e4, ec, e8, e5, e2, e3, blendColors, scaleAlpha);
  [ec, e8, ed, ef, ee, e9, e4, e0] = kernel4Xv2(pe, pg, pd, ph, pa, pi, pb, pf, h5, g5, d0, g0, ec, e8, ed, ef, ee, e9, e4, e0, blendColors, scaleAlpha);

  dstPixelView[dstX + dstY * dstW] = e0;
  dstPixelView[dstX + 1 + dstY * dstW] = e1;
  dstPixelView[dstX + 2 + dstY * dstW] = e2;
  dstPixelView[dstX + 3 + dstY * dstW] = e3;
  dstPixelView[dstX + (dstY + 1) * dstW] = e4;
  dstPixelView[dstX + 1 + (dstY + 1) * dstW] = e5;
  dstPixelView[dstX + 2 + (dstY + 1) * dstW] = e6;
  dstPixelView[dstX + 3 + (dstY + 1) * dstW] = e7;
  dstPixelView[dstX + (dstY + 2) * dstW] = e8;
  dstPixelView[dstX + 1 + (dstY + 2) * dstW] = e9;
  dstPixelView[dstX + 2 + (dstY + 2) * dstW] = ea;
  dstPixelView[dstX + 3 + (dstY + 2) * dstW] = eb;
  dstPixelView[dstX + (dstY + 3) * dstW] = ec;
  dstPixelView[dstX + 1 + (dstY + 3) * dstW] = ed;
  dstPixelView[dstX + 2 + (dstY + 3) * dstW] = ee;
  dstPixelView[dstX + 3 + (dstY + 3) * dstW] = ef;
}

function alphaBlend32W(dst, src, blendColors) {
  if (blendColors) {
    return pixelInterpolate(dst, src, 7, 1);
  }

  return dst;
}

function alphaBlend64W(dst, src, blendColors) {
  if (blendColors) {
    return pixelInterpolate(dst, src, 3, 1);
  }
  return dst;
}

function alphaBlend128W(dst, src, blendColors) {
  if (blendColors) {
    return pixelInterpolate(dst, src, 1, 1);
  }
  return dst;
}

function alphaBlend192W(dst, src, blendColors) {
  if (blendColors) {
    return pixelInterpolate(dst, src, 1, 3);
  }
  return src;
}

function alphaBlend224W(dst, src, blendColors) {
  if (blendColors) {
    return pixelInterpolate(dst, src, 1, 7);
  }
  return src;
}

function leftUp2_2X(n3, n2, pixel, blendColors) {
  const blendedN2 = alphaBlend64W(n2, pixel, blendColors);
  return [
    alphaBlend224W(n3, pixel, blendColors),
    blendedN2,
    blendedN2
  ];
}

function left2_2X(n3, n2, pixel, blendColors) {
  return [
    alphaBlend192W(n3, pixel, blendColors),
    alphaBlend64W(n2, pixel, blendColors)
  ];
}

function up2_2X(n3, n1, pixel, blendColors) {
  return [
    alphaBlend192W(n3, pixel, blendColors),
    alphaBlend64W(n1, pixel, blendColors)
  ];
}

function dia_2X(n3, pixel, blendColors) {
  return alphaBlend128W(n3, pixel, blendColors);
}

function kernel2Xv5(pe, pi, ph, pf, pg, pc, pd, pb, f4, i4, h5, i5, n1, n2, n3, blendColors, scaleAlpha) {
  let ex = (pe != ph && pe != pf);
  if (!ex) {
    return [n1, n2, n3];
  }
  let
    e = (yuvDifference(pe, pc, scaleAlpha) + yuvDifference(pe, pg, scaleAlpha) + yuvDifference(pi, h5, scaleAlpha) + yuvDifference(pi, f4, scaleAlpha)) + (yuvDifference(ph, pf) << 2),
    i = (yuvDifference(ph, pd, scaleAlpha) + yuvDifference(ph, i5, scaleAlpha) + yuvDifference(pf, i4, scaleAlpha) + yuvDifference(pf, pb, scaleAlpha)) + (yuvDifference(pe, pi, scaleAlpha) << 2),
    px = (yuvDifference(pe, pf, scaleAlpha) <= yuvDifference(pe, ph, scaleAlpha)) ? pf : ph;

  if ((e < i) && (!isEqual(pf, pb, scaleAlpha) && !isEqual(ph, pd, scaleAlpha) || isEqual(pe, pi, scaleAlpha) && (!isEqual(pf, i4, scaleAlpha) && !isEqual(ph, i5, scaleAlpha)) || isEqual(pe, pg, scaleAlpha) || isEqual(pe, pc, scaleAlpha))) {
    let
      ke = yuvDifference(pf, pg, scaleAlpha),
      ki = yuvDifference(ph, pc, scaleAlpha),
      ex2 = (pe != pc && pb != pc),
      ex3 = (pe != pg && pd != pg);
    if (((ke << 1) <= ki) && ex3 || (ke >= (ki << 1)) && ex2) {
      if (((ke << 1) <= ki) && ex3) {
        let leftOut = left2_2X(n3, n2, px, blendColors);
        n3 = leftOut[0];
        n2 = leftOut[1];
      }
      if ((ke >= (ki << 1)) && ex2) {
        let upOut = up2_2X(n3, n1, px, blendColors);
        n3 = upOut[0];
        n1 = upOut[1];
      }
    } else {
      n3 = dia_2X(n3, px, blendColors);
    }

  } else if (e <= i) {
    n3 = alphaBlend64W(n3, px, blendColors);
  }
  return [n1, n2, n3];
}

function leftUp2_3X(n7, n5, n6, n2, n8, pixel, blendColors) {
  const
    blendedN7 = alphaBlend192W(n7, pixel, blendColors),
    blendedN6 = alphaBlend64W(n6, pixel, blendColors);
  return [
    blendedN7,
    blendedN7,
    blendedN6,
    blendedN6,
	pixel
  ];
}

function left2_3X(n7, n5, n6, n8, pixel, blendColors) {
  return [
    alphaBlend192W(n7, pixel, blendColors),
    alphaBlend64W(n5, pixel, blendColors),
    alphaBlend64W(n6, pixel, blendColors),
    pixel
  ];
}

function up2_3X(n5, n7, n2, n8, pixel, blendColors) {
  return [
    alphaBlend192W(n5, pixel, blendColors),
    alphaBlend64W(n7, pixel, blendColors),
    alphaBlend64W(n2, pixel, blendColors),
    pixel
  ];
}

function dia_3X(n8, n5, n7, pixel, blendColors) {
  return [
    alphaBlend224W(n8, pixel, blendColors),
    alphaBlend32W(n5, pixel, blendColors),
    alphaBlend32W(n7, pixel, blendColors)
  ];
}

function kernel3X(pe, pi, ph, pf, pg, pc, pd, pb, f4, i4, h5, i5, n2, n5, n6, n7, n8, blendColors, scaleAlpha) {
  const ex = (pe != ph && pe != pf);
  if (!ex) {
    return [n2, n5, n6, n7, n8];
  }

  const
    e = (yuvDifference(pe, pc, scaleAlpha) + yuvDifference(pe, pg, scaleAlpha) + yuvDifference(pi, h5, scaleAlpha) + yuvDifference(pi, f4, scaleAlpha)) + (yuvDifference(ph, pf, scaleAlpha) << 2),
    i = (yuvDifference(ph, pd, scaleAlpha) + yuvDifference(ph, i5, scaleAlpha) + yuvDifference(pf, i4, scaleAlpha) + yuvDifference(pf, pb, scaleAlpha)) + (yuvDifference(pe, pi, scaleAlpha) << 2);

  let state;
  if (USE_3X_ORIGINAL_IMPLEMENTATION) {
    state = ((e < i) && (!isEqual(pf, pb, scaleAlpha) && !isEqual(ph, pd, scaleAlpha) || isEqual(pe, pi, scaleAlpha) && (!isEqual(pf, i4, scaleAlpha) && !isEqual(ph, i5, scaleAlpha)) || isEqual(pe, pg, scaleAlpha) || isEqual(pe, pc, scaleAlpha)));
  } else {
    state = ((e < i) && (!isEqual(pf, pb, scaleAlpha) && !isEqual(pf, pc, scaleAlpha) || !isEqual(ph, pd, scaleAlpha) && !isEqual(ph, pg, scaleAlpha) || isEqual(pe, pi, scaleAlpha) && (!isEqual(pf, f4, scaleAlpha) && !isEqual(pf, i4, scaleAlpha) || !isEqual(ph, h5, scaleAlpha) && !isEqual(ph, i5, scaleAlpha)) || isEqual(pe, pg, scaleAlpha) || isEqual(pe, pc, scaleAlpha)));
  }

  if (state) {
    const
      ke = yuvDifference(pf, pg, scaleAlpha),
      ki = yuvDifference(ph, pc, scaleAlpha),
      ex2 = (pe != pc && pb != pc),
      ex3 = (pe != pg && pd != pg),
      px = (yuvDifference(pe, pf, scaleAlpha) <= yuvDifference(pe, ph, scaleAlpha)) ? pf : ph;
    if (((ke << 1) <= ki) && ex3 && (ke >= (ki << 1)) && ex2) {
      [n7, n5, n6, n2, n8] = leftUp2_3X(n7, n5, n6, n2, n8, px, blendColors);
    } else if (((ke << 1) <= ki) && ex3) {
      [n7, n5, n6, n8] = left2_3X(n7, n5, n6, n8, px, blendColors);
    } else if ((ke >= (ki << 1)) && ex2) {
      [n5, n7, n2, n8] = up2_3X(n5, n7, n2, n8, px, blendColors);
    } else {
      [n8, n5, n7] = dia_3X(n8, n5, n7, px, blendColors);
    }
  } else if (e <= i) {
    n8 = alphaBlend128W(n8, ((yuvDifference(pe, pf, scaleAlpha) <= yuvDifference(pe, ph, scaleAlpha)) ? pf : ph), blendColors);
  }
  return [n2, n5, n6, n7, n8];
}

// 4xBR
function leftUp2(n15, n14, n11, n13, n12, n10, n7, n3, pixel, blendColors) {
  const
    blendedN13 = alphaBlend192W(n13, pixel, blendColors),
    blendedN12 = alphaBlend64W(n12, pixel, blendColors);

  return [pixel, pixel, pixel, blendedN12, blendedN12, blendedN12, blendedN13, n3];
}

function left2(n15, n14, n11, n13, n12, n10, pixel, blendColors) {
  return [
    pixel,
	pixel,
	alphaBlend192W(n11, pixel, blendColors),
	alphaBlend192W(n13, pixel, blendColors),
	alphaBlend64W(n12, pixel, blendColors),
	alphaBlend64W(n10, pixel, blendColors)
  ];
}

function up2(n15, n14, n11, n3, n7, n10, pixel, blendColors) {
  return [
	pixel,
	alphaBlend192W(n14, pixel, blendColors),
	pixel,
	alphaBlend64W(n3, pixel, blendColors),
	alphaBlend192W(n7, pixel, blendColors),
	alphaBlend64W(n10, pixel, blendColors)
  ];
}

function dia(n15, n14, n11, pixel, blendColors) {
  return [
	pixel,
	alphaBlend128W(n14, pixel, blendColors),
	alphaBlend128W(n11, pixel, blendColors)
  ];
}

function kernel4Xv2(pe, pi, ph, pf, pg, pc, pd, pb, f4, i4, h5, i5, n15, n14, n11, n3, n7, n10, n13, n12, blendColors, scaleAlpha) {
  var ex = (pe != ph && pe != pf);
  if (!ex) {
    return [n15, n14, n11, n3, n7, n10, n13, n12];
  }
  const
    e = (yuvDifference(pe, pc, scaleAlpha) + yuvDifference(pe, pg, scaleAlpha) + yuvDifference(pi, h5, scaleAlpha) + yuvDifference(pi, f4, scaleAlpha)) + (yuvDifference(ph, pf, scaleAlpha) << 2),
    i = (yuvDifference(ph, pd, scaleAlpha) + yuvDifference(ph, i5, scaleAlpha) + yuvDifference(pf, i4, scaleAlpha) + yuvDifference(pf, pb, scaleAlpha)) + (yuvDifference(pe, pi, scaleAlpha) << 2),
    px = (yuvDifference(pe, pf, scaleAlpha) <= yuvDifference(pe, ph, scaleAlpha)) ? pf : ph;
  if ((e < i) && (!isEqual(pf, pb, scaleAlpha) && !isEqual(ph, pd, scaleAlpha) || isEqual(pe, pi, scaleAlpha) && (!isEqual(pf, i4, scaleAlpha) && !isEqual(ph, i5, scaleAlpha)) || isEqual(pe, pg, scaleAlpha) || isEqual(pe, pc, scaleAlpha))) {
    const
      ke = yuvDifference(pf, pg, scaleAlpha),
      ki = yuvDifference(ph, pc, scaleAlpha),
      ex2 = (pe != pc && pb != pc),
      ex3 = (pe != pg && pd != pg);
    if (((ke << 1) <= ki) && ex3 || (ke >= (ki << 1)) && ex2) {
      if (((ke << 1) <= ki) && ex3) {
        [n15, n14, n11, n13, n12, n10] = left2(n15, n14, n11, n13, n12, n10, px, blendColors);
      }
      if ((ke >= (ki << 1)) && ex2) {
        [n15, n14, n11, n3, n7, n10] = up2(n15, n14, n11, n3, n7, n10, px, blendColors);
      }
    } else {
      [n15, n14, n11] = dia(n15, n14, n11, px, blendColors);
    }

  } else if (e <= i) {
    n15 = alphaBlend128W(n15, px, blendColors);
  }

  return [n15, n14, n11, n3, n7, n10, n13, n12];
}

function parseOptions(rawOpts) {
  let
    blendColors = true,
    scaleAlpha = false;

  if (rawOpts) {
	if (rawOpts.blendColors === false) {
	  blendColors = false;
	}
		
	if (rawOpts.scaleAlpha === true) {
      scaleAlpha = true;
    }
  }
	
  return {blendColors, scaleAlpha};
}

function xbr2x(pixelArray, width, height, options) {
  const {blendColors, scaleAlpha} = parseOptions(options);
  const scaledPixelArray = new Uint32Array(width * height * 4);
  for (let c = 0; c < width; c++) {
    for (let d = 0; d < height; d++) {
      computeXbr2x(pixelArray, c, d, width, height, scaledPixelArray, c * 2, d * 2, width * 2, blendColors, scaleAlpha);
    }
  }
  return scaledPixelArray;
}

function xbr3x(pixelArray, width, height, options) {
  const {blendColors, scaleAlpha} = parseOptions(options);
  const scaledPixelArray = new Uint32Array(width * height * 9);
  for (let c = 0; c < width; c++) {
    for (let d = 0; d < height; d++) {
      computeXbr3x(pixelArray, c, d, width, height, scaledPixelArray, c * 3, d * 3, width * 3, blendColors, scaleAlpha);
    }
  }
  return scaledPixelArray;
}

function xbr4x(pixelArray, width, height, options) {
  const {blendColors, scaleAlpha} = parseOptions(options);
  const scaledPixelArray = new Uint32Array(width * height * 16);
  for (let c = 0; c < width; c++) {
    for (let d = 0; d < height; d++) {
      computeXbr4x(pixelArray, c, d, width, height, scaledPixelArray, c * 4, d * 4, width * 4, blendColors, scaleAlpha);
    }
  }
  return scaledPixelArray;
}

/***/ }),

/***/ "./src/Graphics.ts":
/*!*************************!*\
  !*** ./src/Graphics.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Renderer = void 0;
exports.isSoundOn = isSoundOn;
exports.isMusicOn = isMusicOn;
exports.shouldUseXbr = shouldUseXbr;
exports.setUseXbr = setUseXbr;
exports.shouldPrescaleTilesets = shouldPrescaleTilesets;
exports.setPrescaleTilesets = setPrescaleTilesets;
exports.setSoundOn = setSoundOn;
exports.setMusicOn = setMusicOn;
exports.startGame = startGame;
var BitmapImpl_1 = __webpack_require__(/*! ./impl/BitmapImpl */ "./src/impl/BitmapImpl.ts");
var FontImpl_1 = __webpack_require__(/*! ./impl/FontImpl */ "./src/impl/FontImpl.ts");
var GraphicsImpl_1 = __webpack_require__(/*! ./impl/GraphicsImpl */ "./src/impl/GraphicsImpl.ts");
var SoundImpl_1 = __webpack_require__(/*! ./impl/SoundImpl */ "./src/impl/SoundImpl.ts");
var TilesetImpl_1 = __webpack_require__(/*! ./impl/TilesetImpl */ "./src/impl/TilesetImpl.ts");
var LDTKWorld_1 = __webpack_require__(/*! ./tilemaps/LDTKWorld */ "./src/tilemaps/LDTKWorld.ts");
var JSZip = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
var Palette_1 = __webpack_require__(/*! ./impl/Palette */ "./src/impl/Palette.ts");
var OpenGLGraphicsImpl_1 = __webpack_require__(/*! ./opengl/OpenGLGraphicsImpl */ "./src/opengl/OpenGLGraphicsImpl.ts");
var OpenGLBitmap_1_1 = __webpack_require__(/*! ./opengl/OpenGLBitmap.1 */ "./src/opengl/OpenGLBitmap.1.ts");
var OpenGLTilesetImpl_1 = __webpack_require__(/*! ./opengl/OpenGLTilesetImpl */ "./src/opengl/OpenGLTilesetImpl.ts");
var Log_1 = __webpack_require__(/*! ./Log */ "./src/Log.ts");
var GAME_LOOP;
var SOUND_ON = true;
var MUSIC_ON = true;
var PRESCALE_TILESETS = false;
var USE_XBR = false;
function isSoundOn() {
    return SOUND_ON;
}
function isMusicOn() {
    return MUSIC_ON;
}
function shouldUseXbr() {
    return USE_XBR;
}
function setUseXbr(on) {
    USE_XBR = on;
}
function shouldPrescaleTilesets() {
    return PRESCALE_TILESETS;
}
function setPrescaleTilesets(on) {
    PRESCALE_TILESETS = on;
}
function setSoundOn(on) {
    SOUND_ON = on;
}
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
function startGame(game, renderer) {
    if (renderer === void 0) { renderer = Renderer.CANVAS; }
    var loop = new GameLoop();
    loop.renderer = renderer;
    GAME_LOOP = loop.start(game);
}
var Renderer;
(function (Renderer) {
    Renderer["CANVAS"] = "Canvas";
    Renderer["OPENGL"] = "OpenGL";
})(Renderer || (exports.Renderer = Renderer = {}));
;
var GameLoop = /** @class */ (function () {
    function GameLoop() {
        this.resources = [];
        this.lastFrame = 0;
        this.inited = false;
        this.mainZipFile = undefined;
        this.zipPercentLoaded = 0;
        this.palette = undefined;
        this.lastWaiting = "";
        this.wait = 0;
        this.shiftPressed = false;
        this.commandPressed = false;
        this.controlPressed = false;
        this.altPressed = false;
        this.renderer = Renderer.OPENGL;
        this.graphicsInited = false;
    }
    GameLoop.prototype.isCommandPressed = function () {
        return this.commandPressed;
    };
    GameLoop.prototype.isAltPressed = function () {
        return this.altPressed;
    };
    GameLoop.prototype.isControlPressed = function () {
        return this.controlPressed;
    };
    GameLoop.prototype.isShiftPressed = function () {
        return this.shiftPressed;
    };
    GameLoop.prototype.getGraphics = function () {
        return this.graphics;
    };
    GameLoop.prototype.resourcesRemaining = function () {
        return this.resources.filter(function (r) { return !r.loaded; }).length;
    };
    GameLoop.prototype.resourcesTotal = function () {
        return this.resources.length;
    };
    GameLoop.prototype.dumpResourceIssues = function () {
        Log_1.GuteLog.log("There are " + this.resources.length + " resources pending.");
        // GuteLog.log("The following resources are still pending completion:");
        // GuteLog.log("");
        // for (const resource of this.resources) {
        //   if (!resource.loaded) {
        //     GuteLog.log("  " +resource.name);
        //   }
        // }
    };
    GameLoop.prototype.currentResource = function () {
        for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
            var resource = _a[_i];
            if (!resource.loaded) {
                return resource.name;
            }
        }
        return "";
    };
    GameLoop.prototype.allResourcesLoaded = function () {
        for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
            var resource = _a[_i];
            if (!resource.loaded) {
                if (this.lastWaiting !== resource.name) {
                    if (this.lastWaiting) {
                        Log_1.GuteLog.log("[GUTE] Was waiting on: " + this.lastWaiting + " for " + this.wait + " frames");
                    }
                    this.lastWaiting = resource.name;
                    this.wait = 0;
                }
                this.wait++;
                return false;
            }
        }
        if (this.lastWaiting) {
            Log_1.GuteLog.log("[GUTE] Was waiting on last one: " + this.lastWaiting + " for " + this.wait + " frames");
            this.lastWaiting = undefined;
            if (!this.graphicsInited) {
                this.graphicsInited = true;
                this.graphics.initResourceOnLoaded();
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
    GameLoop.prototype.applyPalette = function (hexFile) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadText(hexFile).then(function (text) {
                _this.palette = new Palette_1.Palette(text);
                resolve();
            });
        });
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
        this.graphics = this.renderer === Renderer.CANVAS ? new GraphicsImpl_1.GraphicsImpl() : new OpenGLGraphicsImpl_1.OpenGLGraphicsImpl();
        this.graphics.canvas.addEventListener("touchstart", function (event) {
            try {
                if (event.target) {
                    var rect = event.target.getBoundingClientRect();
                    var x = event.targetTouches[0].pageX - rect.left;
                    var y = event.targetTouches[0].pageY - rect.top;
                    _this.lastTouch = event;
                    _this.mouseDownHandler(x, y);
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
            catch (e) {
                Log_1.GuteLog.log(e);
            }
        }, { passive: false });
        this.graphics.canvas.addEventListener("touchmove", function (event) {
            try {
                if (event.target) {
                    var rect = event.target.getBoundingClientRect();
                    var x = event.targetTouches[0].pageX - rect.left;
                    var y = event.targetTouches[0].pageY - rect.top;
                    _this.lastTouch = event;
                    _this.mouseMoveHandler(x, y);
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
            catch (e) {
                Log_1.GuteLog.log(e);
            }
        }, { passive: false });
        this.graphics.canvas.addEventListener("touchend", function (event) {
            try {
                if (event.target) {
                    var rect = event.target.getBoundingClientRect();
                    if (_this.lastTouch) {
                        var x = _this.lastTouch.targetTouches[0].pageX - rect.left;
                        var y = _this.lastTouch.targetTouches[0].pageY - rect.top;
                        _this.mouseUpHandler(x, y);
                    }
                    else {
                        _this.mouseUpHandler(0, 0);
                    }
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
            catch (e) {
                Log_1.GuteLog.log(e);
            }
        }, { passive: false });
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
                Log_1.GuteLog.log(e);
            }
        });
        window.addEventListener("blur", function (event) {
            _this.shiftPressed = false;
            _this.commandPressed = false;
            _this.controlPressed = false;
            _this.altPressed = false;
        });
        this.graphics.canvas.addEventListener("mousedown", function (event) {
            _this.shiftPressed = event.shiftKey;
            _this.commandPressed = event.metaKey;
            _this.controlPressed = event.ctrlKey;
            _this.altPressed = event.altKey;
            try {
                _this.mouseDownHandler(event.offsetX, event.offsetY, event.button);
                event.preventDefault();
                event.stopPropagation();
            }
            catch (e) {
                Log_1.GuteLog.log(e);
            }
        });
        this.graphics.canvas.addEventListener("mousemove", function (event) {
            _this.shiftPressed = event.shiftKey;
            _this.commandPressed = event.metaKey;
            _this.controlPressed = event.ctrlKey;
            _this.altPressed = event.altKey;
            try {
                _this.mouseMoveHandler(event.offsetX, event.offsetY);
                event.preventDefault();
                event.stopPropagation();
            }
            catch (e) {
                Log_1.GuteLog.log(e);
            }
        });
        this.graphics.canvas.addEventListener("mouseup", function (event) {
            _this.shiftPressed = event.shiftKey;
            _this.commandPressed = event.metaKey;
            _this.controlPressed = event.ctrlKey;
            _this.altPressed = event.altKey;
            try {
                _this.mouseUpHandler(event.offsetX, event.offsetY, event.button);
                event.preventDefault();
                event.stopPropagation();
            }
            catch (e) {
                Log_1.GuteLog.log(e);
            }
        });
        window.addEventListener("keydown", function (event) {
            if (event.key === "Shift") {
                _this.shiftPressed = true;
            }
            if (event.key === "Meta") {
                _this.commandPressed = true;
            }
            if (event.key === "Control") {
                _this.controlPressed = true;
            }
            if (event.key === "Alt") {
                _this.altPressed = true;
            }
            _this.keyDownHandler(event.code);
        });
        window.addEventListener("keyup", function (event) {
            if (event.key === "Shift") {
                _this.shiftPressed = false;
            }
            if (event.key === "Meta") {
                _this.commandPressed = false;
            }
            if (event.key === "Control") {
                _this.controlPressed = false;
            }
            if (event.key === "Alt") {
                _this.altPressed = false;
            }
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
        var error = this.graphics.getError();
        if (error) {
            this.game.rendererError(error);
            throw new Error("Renderer Error - " + error);
        }
        requestAnimationFrame(function () {
            _this.loop();
        });
        var now = new Date().getTime();
        var delta = 0;
        if (this.lastFrame !== 0) {
            delta = now - this.lastFrame;
        }
        this.lastFrame = now;
        this.graphics.renderStart();
        this.graphics.applyFont();
        this.game.update(this, delta);
        this.game.render(this, this.graphics);
        this.graphics.renderEnd();
    };
    GameLoop.prototype.getZipProgress = function () {
        return this.zipPercentLoaded;
    };
    GameLoop.prototype.loadZip = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.responseType = "arraybuffer";
            req.onprogress = function (e) {
                _this.zipPercentLoaded = (e.loaded / e.total);
            };
            req.onload = function (event) {
                JSZip.loadAsync(req.response).then(function (zip) {
                    _this.mainZipFile = zip;
                    Log_1.GuteLog.log("Loaded Zip");
                    resolve();
                });
            };
            req.onerror = function (e) {
                reject(e);
            };
            req.send();
        });
    };
    GameLoop.prototype.getZipFile = function (name) {
        var file = this.mainZipFile.file(name);
        if (!file) {
            Log_1.GuteLog.log("zip file entry: " + name + " not found!");
            throw Error("Zip file entry not found: " + name);
        }
        return file;
    };
    GameLoop.prototype.getZipFileText = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getZipFile(name).async("string").then(function (result) {
                resolve(result);
            }).catch(function (e) {
                Log_1.GuteLog.error(e);
                reject(e);
            });
        });
    };
    GameLoop.prototype.getZipArrayBuffer = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getZipFile(name).async("arraybuffer").then(function (result) {
                resolve(result);
            }).catch(function (e) {
                Log_1.GuteLog.error(e);
                reject(e);
            });
        });
    };
    GameLoop.prototype.getZipBase64 = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getZipFile(name).async("arraybuffer").then(function (result) {
                resolve(result);
            }).catch(function (e) {
                Log_1.GuteLog.error(e);
                reject(e);
            });
        });
    };
    GameLoop.prototype.getZipBlob = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getZipFile(name).async("blob").then(function (result) {
                resolve(result);
            }).catch(function (e) {
                Log_1.GuteLog.error(e);
                reject(e);
            });
        });
    };
    GameLoop.prototype.loadMusic = function (url) {
        var bufferPromise = undefined;
        if (url.indexOf("_/") >= 0) {
            bufferPromise = this.getZipArrayBuffer(url.substring(url.indexOf("_/")));
        }
        var sound = new SoundImpl_1.SoundImpl(url, true, bufferPromise);
        this.resources.push(sound);
        return sound;
    };
    GameLoop.prototype.loadSound = function (url) {
        var bufferPromise = undefined;
        if (url.indexOf("_/") >= 0) {
            bufferPromise = this.getZipArrayBuffer(url.substring(url.indexOf("_/")));
        }
        var sound = new SoundImpl_1.SoundImpl(url, false, bufferPromise);
        this.resources.push(sound);
        return sound;
    };
    GameLoop.prototype.toPotentialZipLoadBlob = function (url) {
        if (url.indexOf("_/") >= 0) {
            return this.getZipBlob(url.substring(url.indexOf("_/")));
        }
        return undefined;
    };
    GameLoop.prototype.toPotentialZipLoad = function (url) {
        if (url.indexOf("_/") >= 0) {
            return this.getZipBase64(url.substring(url.indexOf("_/")));
        }
        return undefined;
    };
    GameLoop.prototype.loadBitmap = function (url) {
        if (this.renderer === Renderer.CANVAS) {
            var bitmap = new BitmapImpl_1.BitmapImpl(url, this.toPotentialZipLoad(url), this.palette);
            this.resources.push(bitmap);
            return bitmap;
        }
        else {
            var bitmap = new OpenGLBitmap_1_1.OpenGLBitmap(this.graphics, url, this.toPotentialZipLoad(url), this.palette);
            this.resources.push(bitmap);
            return bitmap;
        }
    };
    GameLoop.prototype.loadScaledTileset = function (url, tileWidth, tileHeight, scale) {
        if (this.renderer === Renderer.CANVAS) {
            var tileset = new TilesetImpl_1.TilesetImpl(url, this.toPotentialZipLoadBlob(url), tileWidth, tileHeight, scale, this.palette);
            this.resources.push(tileset);
            return tileset;
        }
        else {
            var tileset = new OpenGLTilesetImpl_1.OpenGLTilesetImpl(this.graphics, url, this.toPotentialZipLoadBlob(url), tileWidth, tileHeight, scale, this.palette);
            this.resources.push(tileset);
            return tileset;
        }
    };
    GameLoop.prototype.loadTileset = function (url, tileWidth, tileHeight) {
        if (this.renderer === Renderer.CANVAS) {
            var tileset = new TilesetImpl_1.TilesetImpl(url, this.toPotentialZipLoadBlob(url), tileWidth, tileHeight, 1, this.palette);
            this.resources.push(tileset);
            return tileset;
        }
        else {
            var tileset = new OpenGLTilesetImpl_1.OpenGLTilesetImpl(this.graphics, url, this.toPotentialZipLoadBlob(url), tileWidth, tileHeight, 1, this.palette);
            this.resources.push(tileset);
            return tileset;
        }
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
    GameLoop.prototype.loadText = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // its an asset reference
            if (url.indexOf("_/") >= 0) {
                return _this.getZipFileText(url.substring(url.indexOf("_/"))).then(function (result) {
                    resolve(result);
                });
            }
            else {
                var req = new XMLHttpRequest();
                req.open("GET", url, true);
                req.onload = function (event) {
                    if (req.responseText) {
                        resolve(req.responseText);
                    }
                };
                req.onerror = function (e) {
                    reject(e);
                };
                req.send();
            }
        });
    };
    GameLoop.prototype.loadJson = function (url, transform) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // its an asset reference
            if (url.indexOf("_/") >= 0) {
                url = url.substring(url.indexOf("_/"));
                return _this.getZipFileText(url).then(function (result) {
                    try {
                        var data = JSON.parse(transform ? transform(result) : result);
                        resolve(data);
                    }
                    catch (e) {
                        Log_1.GuteLog.log("Failed to parse JSON: " + url);
                        throw e;
                    }
                });
            }
            else {
                if (url.startsWith("data:application/json;utf8,")) {
                    var result = url.substring(url.indexOf(",") + 1);
                    resolve(JSON.parse(transform ? transform(result) : result));
                    return;
                }
                var req = new XMLHttpRequest();
                req.open("GET", url, true);
                req.onload = function (event) {
                    if (req.responseText) {
                        var result = req.responseText;
                        resolve(JSON.parse(transform ? transform(result) : result));
                    }
                };
                req.onerror = function (e) {
                    reject(e);
                };
                req.send();
            }
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
        return this.isIOS() && (window.matchMedia("only screen and (max-width: 760px)").matches || window.matchMedia("only screen and (max-height: 760px)").matches);
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

"use strict";

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

/***/ "./src/Log.ts":
/*!********************!*\
  !*** ./src/Log.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GuteLog = void 0;
var GuteLog = /** @class */ (function () {
    function GuteLog() {
    }
    GuteLog.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (GuteLog.INFO) {
            console.log.apply(console, args);
        }
    };
    GuteLog.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (GuteLog.INFO) {
            console.info.apply(console, args);
        }
    };
    GuteLog.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (GuteLog.ERROR) {
            console.error.apply(console, args);
        }
    };
    GuteLog.warm = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (GuteLog.WARN) {
            console.warn.apply(console, args);
        }
    };
    GuteLog.trace = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (GuteLog.TRACE) {
            console.trace.apply(console, args);
        }
    };
    GuteLog.INFO = true;
    GuteLog.ERROR = true;
    GuteLog.WARN = true;
    GuteLog.TRACE = false;
    return GuteLog;
}());
exports.GuteLog = GuteLog;


/***/ }),

/***/ "./src/SoundScape.ts":
/*!***************************!*\
  !*** ./src/SoundScape.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoundScape = exports.SoundEasing = void 0;
var SoundImpl_1 = __webpack_require__(/*! ./impl/SoundImpl */ "./src/impl/SoundImpl.ts");
var SoundEasing;
(function (SoundEasing) {
    SoundEasing[SoundEasing["Linear"] = 0] = "Linear";
    SoundEasing[SoundEasing["Quadratic"] = 1] = "Quadratic";
    SoundEasing[SoundEasing["Cubic"] = 2] = "Cubic";
})(SoundEasing || (exports.SoundEasing = SoundEasing = {}));
var SoundScape = /** @class */ (function () {
    function SoundScape() {
        this._soundVolume = 1;
        this.points = [];
        this.listenerX = 0;
        this.listenerY = 0;
        this.categories = {};
    }
    SoundScape.prototype.category = function (name, volume, maxDistance, scale, easing) {
        this.categories[name] = {
            name: name,
            volume: volume,
            maxDistance2: maxDistance * maxDistance, scale2: scale * scale,
            easing: easing
        };
        return this;
    };
    Object.defineProperty(SoundScape.prototype, "soundVolume", {
        get: function () {
            return this._soundVolume;
        },
        set: function (value) {
            this._soundVolume = value;
        },
        enumerable: false,
        configurable: true
    });
    SoundScape.prototype.moveTo = function (x, y) {
        this.listenerX = x;
        this.listenerY = y;
        this.updateVolumes();
    };
    SoundScape.prototype.clear = function () {
        for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
            var point = _a[_i];
            point.source.stop();
        }
        this.points = [];
    };
    SoundScape.prototype.play = function (sound, volume, category, x, y) {
        var _this = this;
        // protect against playing sounds too early or without auto working
        if (!SoundImpl_1.AUDIO_CONTEXT) {
            return;
        }
        var impl = sound;
        var source = SoundImpl_1.AUDIO_CONTEXT.createBufferSource();
        source.buffer = impl.buffer;
        var gain = SoundImpl_1.AUDIO_CONTEXT.createGain();
        source.connect(gain);
        gain.connect(SoundImpl_1.AUDIO_CONTEXT.destination);
        var point = {
            x: x,
            y: y,
            volume: volume,
            source: source,
            gain: gain,
            category: category
        };
        gain.gain.value = this.calculateVolume(point);
        this.points.push(point);
        source.addEventListener("ended", function (ev) {
            var index = _this.points.indexOf(point);
            _this.points.splice(index, 1);
            // GuteLog.log(`Sound ended: ${sound.name}, total: ${this.points.length}`)
        });
        source.start();
        // GuteLog.log(`Sound started: ${sound.name}, total: ${this.points.length}`)
    };
    SoundScape.prototype.updateVolumes = function () {
        for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
            var point = _a[_i];
            var value = this.calculateVolume(point);
            point.gain.gain.linearRampToValueAtTime(value, SoundImpl_1.AUDIO_CONTEXT.currentTime);
        }
    };
    SoundScape.prototype.calculateVolume = function (point) {
        var category = this.categories[point.category];
        if (category === undefined) {
            return point.volume * this._soundVolume;
        }
        if (point.x === undefined || point.y === undefined) {
            return point.volume * category.volume * this._soundVolume;
        }
        var dx = point.x - this.listenerX;
        var dy = point.y - this.listenerY;
        var distance = (dx * dx + dy * dy) / category.scale2;
        // * (los ? 1 : 0.3) TODO: callback
        var reduction = Math.max(1 - distance / category.maxDistance2, 0);
        switch (category.easing) {
            case SoundEasing.Linear:
                return this._soundVolume * point.volume * category.volume * reduction;
            case SoundEasing.Quadratic:
                return this._soundVolume * point.volume * category.volume * reduction * reduction;
            case SoundEasing.Cubic:
                return this._soundVolume * point.volume * category.volume * reduction * reduction * reduction;
        }
    };
    return SoundScape;
}());
exports.SoundScape = SoundScape;


/***/ }),

/***/ "./src/impl/BitmapImpl.ts":
/*!********************************!*\
  !*** ./src/impl/BitmapImpl.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitmapImpl = void 0;
var Log_1 = __webpack_require__(/*! ../Log */ "./src/Log.ts");
var BitmapImpl = /** @class */ (function () {
    function BitmapImpl(url, dataUrlLoader, pal) {
        if (pal === void 0) { pal = undefined; }
        var _this = this;
        this.width = 0;
        this.height = 0;
        this.loaded = false;
        this.name = url;
        this.image = new Image();
        this.image.onerror = function () {
            Log_1.GuteLog.log("Error loading: " + url);
        };
        this.image.onload = function () {
            _this.width = _this.image.width;
            _this.height = _this.image.height;
            if (pal) {
                pal.adjustImage(_this.image).then(function (image) {
                    _this.image = image;
                    _this.loaded = true;
                });
            }
            else {
                _this.loaded = true;
            }
        };
        if (dataUrlLoader) {
            dataUrlLoader.then(function (base64) {
                _this.image.src = "data:" + url.substring(url.length - 3) + ";base64," + base64;
            });
        }
        else {
            this.image.src = url;
        }
    }
    BitmapImpl.prototype.draw = function (graphics, x, y) {
        var ctx = graphics.ctx;
        ctx.drawImage(this.image, x, y);
    };
    BitmapImpl.prototype.drawScaled = function (graphics, x, y, width, height) {
        var ctx = graphics.ctx;
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

"use strict";

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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphicsImpl = void 0;
var FontImpl_1 = __webpack_require__(/*! ./FontImpl */ "./src/impl/FontImpl.ts");
var isFirefox = typeof InstallTrigger !== 'undefined';
var OffscreenImpl = /** @class */ (function () {
    function OffscreenImpl(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }
    OffscreenImpl.prototype.release = function () {
    };
    OffscreenImpl.prototype.needsRefresh = function () {
        return false;
    };
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
        this.name = "copy";
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.loaded = true;
    }
    CopyBitmap.prototype.draw = function (graphics, x, y) {
        var ctx = graphics.ctx;
        ctx.drawImage(this.canvas, x, y);
    };
    CopyBitmap.prototype.drawScaled = function (graphics, x, y, width, height) {
        var ctx = graphics.ctx;
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
        this.offscreen = null;
        this.canvas = document.getElementById("gamecanvas");
        this.ctx = this.canvas.getContext("2d", { alpha: false });
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
    GraphicsImpl.prototype.resize = function () {
    };
    GraphicsImpl.prototype.getError = function () {
        return undefined;
    };
    GraphicsImpl.prototype.renderStart = function () {
    };
    GraphicsImpl.prototype.renderEnd = function () {
    };
    GraphicsImpl.prototype.newResourceLoaded = function () {
    };
    GraphicsImpl.prototype.initResourceOnLoaded = function () {
    };
    GraphicsImpl.prototype.smooth = function () {
        this.ctx.webkitImageSmoothingEnabled = true;
        this.ctx.imageSmoothingEnabled = true;
        this.canvas.style.fontSmooth = "initial";
        this.canvas.style.webkitFontSmoothing = "initial";
        this.canvas.style.imageRendering = "initial";
    };
    GraphicsImpl.prototype.getTransform = function () {
        return this.ctx.getTransform();
    };
    GraphicsImpl.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
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
    GraphicsImpl.prototype.getOffscreen = function () {
        return this.offscreen;
    };
    GraphicsImpl.prototype.drawToOffscreen = function (screen) {
        if (screen) {
            this.ctx = screen.ctx;
            this.ctx.resetTransform();
        }
        else {
            this.ctx = this.mainCtx;
        }
        this.offscreen = screen;
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
    GraphicsImpl.prototype.drawScaledOffscreenSegment = function (screen, sx, sy, swidth, sheight, x, y, width, height) {
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.drawImage(screen.canvas, sx, sy, swidth, sheight, x, y, width, height);
    };
    GraphicsImpl.prototype.clearRect = function (x, y, width, height) {
        this.ctx.clearRect(x, y, width, height);
    };
    GraphicsImpl.prototype.fitScreen = function (pixelScale) {
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var realWidth = Math.floor(width / pixelScale) * pixelScale;
        var realHeight = Math.floor(height / pixelScale) * pixelScale;
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
        return this.ctx.canvas.width;
    };
    GraphicsImpl.prototype.getHeight = function () {
        return this.ctx.canvas.height;
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
    GraphicsImpl.prototype.drawCircle = function (x, y, radius, col, width) {
        this.ctx.strokeStyle = col;
        this.ctx.lineWidth = width;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.stroke();
    };
    GraphicsImpl.prototype.fillCircle = function (x, y, radius, col) {
        this.ctx.fillStyle = col;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fill();
    };
    GraphicsImpl.prototype.fillRect = function (x, y, width, height, col) {
        this.ctx.fillStyle = col;
        this.ctx.fillRect(x, y, width, height);
    };
    GraphicsImpl.prototype.setLineDash = function (segments) {
        this.ctx.setLineDash(segments);
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
        if (!bitmap) {
            return;
        }
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = false;
        bitmap.draw(this, x, y);
    };
    GraphicsImpl.prototype.drawScaledBitmap = function (x, y, width, height, bitmap) {
        if (!bitmap) {
            return;
        }
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = false;
        bitmap.drawScaled(this, x, y, width, height);
    };
    return GraphicsImpl;
}());
exports.GraphicsImpl = GraphicsImpl;


/***/ }),

/***/ "./src/impl/Palette.ts":
/*!*****************************!*\
  !*** ./src/impl/Palette.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Palette = void 0;
function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return { r: r, g: g, b: b };
}
function deltaE(rgbA, rgbB) {
    var labA = rgb2lab(rgbA);
    var labB = rgb2lab(rgbB);
    var deltaL = labA[0] - labB[0];
    var deltaA = labA[1] - labB[1];
    var deltaB = labA[2] - labB[2];
    var c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
    var c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
    var deltaC = c1 - c2;
    var deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
    deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
    var sc = 1.0 + 0.045 * c1;
    var sh = 1.0 + 0.015 * c1;
    var deltaLKlsl = deltaL / (1.0);
    var deltaCkcsc = deltaC / (sc);
    var deltaHkhsh = deltaH / (sh);
    var i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
    return i < 0 ? 0 : Math.sqrt(i);
}
function rgb2lab(rgb) {
    var r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255, x, y, z;
    r = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
    y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
    z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
    x = (x > 0.008856) ? Math.pow(x, 1 / 3) : (7.787 * x) + 16 / 116;
    y = (y > 0.008856) ? Math.pow(y, 1 / 3) : (7.787 * y) + 16 / 116;
    z = (z > 0.008856) ? Math.pow(z, 1 / 3) : (7.787 * z) + 16 / 116;
    return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)];
}
var Palette = /** @class */ (function () {
    function Palette(hexValues) {
        this.cols = [];
        this.mapping = {};
        for (var _i = 0, _a = hexValues.split("\n"); _i < _a.length; _i++) {
            var hex = _a[_i];
            this.cols.push(hexToRgb(hex));
        }
    }
    Palette.prototype.findBestMatch = function (r, g, b) {
        var toMatchCol = { r: r, g: g, b: b };
        var bestMatch = this.cols[0];
        var smallestDelta = 1000;
        for (var _i = 0, _a = this.cols; _i < _a.length; _i++) {
            var palCol = _a[_i];
            var dif = deltaE(palCol, toMatchCol);
            if (dif < smallestDelta) {
                smallestDelta = dif;
                bestMatch = palCol;
            }
        }
        return bestMatch;
    };
    Palette.prototype.adjustImage = function (image) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            var ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.drawImage(image, 0, 0);
                var id = ctx.getImageData(0, 0, image.width, image.height);
                for (var i = 0; i < id.data.length; i += 4) {
                    var col = id.data[i];
                    var r = id.data[i];
                    var g = id.data[i + 1];
                    var b = id.data[i + 2];
                    var combined = r | (0xFF00 & (g << 8)) | (0xFF0000 & (b << 16));
                    var bestMatch = _this.mapping[combined];
                    if (!bestMatch) {
                        bestMatch = _this.findBestMatch(r, g, b);
                        _this.mapping[combined] = bestMatch;
                    }
                    id.data[i] = bestMatch.r;
                    id.data[i + 1] = bestMatch.g;
                    id.data[i + 2] = bestMatch.b;
                }
                ctx.putImageData(id, 0, 0);
                var result_1 = new Image();
                result_1.onload = function () {
                    resolve(result_1);
                };
                result_1.src = canvas.toDataURL();
            }
            else {
                reject("Failure to create context");
            }
        });
    };
    return Palette;
}());
exports.Palette = Palette;


/***/ }),

/***/ "./src/impl/SoundImpl.ts":
/*!*******************************!*\
  !*** ./src/impl/SoundImpl.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoundImpl = exports.AUDIO_CONTEXT = void 0;
var Gute_1 = __webpack_require__(/*! ../Gute */ "./src/Gute.ts");
var Log_1 = __webpack_require__(/*! ../Log */ "./src/Log.ts");
var AudioContext;
if (typeof window !== "undefined") {
    AudioContext = window.AudioContext || window.webkitAudioContext;
}
function handleVisibilityChange() {
    if ((0, Gute_1.isMusicOn)()) {
        if (SoundImpl.CURRENT_MUSIC) {
            if (document.hidden) {
                SoundImpl.CURRENT_MUSIC.stop();
                try {
                    exports.AUDIO_CONTEXT.suspend().catch(function (e) {
                        Log_1.GuteLog.trace("Suspend audio context failed");
                        Log_1.GuteLog.trace(e);
                    });
                }
                catch (e) {
                    Log_1.GuteLog.trace("Suspend audio context failed");
                    Log_1.GuteLog.trace(e);
                }
            }
            else {
                try {
                    exports.AUDIO_CONTEXT.resume().catch(function (e) {
                        Log_1.GuteLog.trace("Resume audio context failed");
                        Log_1.GuteLog.trace(e);
                    });
                }
                catch (e) {
                    Log_1.GuteLog.trace("Resume audio context failed");
                    Log_1.GuteLog.trace(e);
                }
                setTimeout(function () {
                    SoundImpl.CURRENT_MUSIC.play(SoundImpl.CURRENT_MUSIC.volume);
                }, 500);
            }
        }
    }
    if ((0, Gute_1.isSoundOn)()) {
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
    function SoundImpl(url, music, arrayBuffer) {
        var _this = this;
        this.loaded = false;
        this.volume = 1;
        this.music = false;
        this.looped = false;
        this.name = url;
        this.url = url;
        this.music = music;
        if (arrayBuffer) {
            this.loaded = true;
            arrayBuffer.then(function (arrayBuffer) {
                _this.data = arrayBuffer;
                _this.tryLoad();
            });
        }
        else {
            var req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.responseType = "arraybuffer";
            req.onload = function (event) {
                var arrayBuffer = req.response;
                if (arrayBuffer) {
                    _this.data = arrayBuffer;
                    _this.tryLoad();
                }
            };
            req.send();
        }
        this.loaded = true;
    }
    SoundImpl.setSoundVolume = function (v) {
        this.soundVolume = v;
        for (var _i = 0, _a = this.CURRENT_LOOPS; _i < _a.length; _i++) {
            var loop = _a[_i];
            loop.gain.gain.linearRampToValueAtTime(loop.volume * SoundImpl.soundVolume, exports.AUDIO_CONTEXT.currentTime + 0.25);
        }
    };
    SoundImpl.getSoundVolume = function () {
        return this.soundVolume;
    };
    SoundImpl.setMusicVolume = function (v) {
        this.musicVolume = v;
        if (SoundImpl.CURRENT_MUSIC) {
            if (SoundImpl.CURRENT_MUSIC.gain) {
                SoundImpl.CURRENT_MUSIC.gain.gain.linearRampToValueAtTime(SoundImpl.CURRENT_MUSIC.volume * SoundImpl.musicVolume, exports.AUDIO_CONTEXT.currentTime + 0.25);
            }
        }
    };
    SoundImpl.getMusicVolume = function () {
        return this.musicVolume;
    };
    SoundImpl.prototype.tryLoad = function () {
        var _this = this;
        if (exports.AUDIO_CONTEXT && this.data) {
            try {
                var promise = exports.AUDIO_CONTEXT.decodeAudioData(this.data, function (buffer) {
                    _this.buffer = buffer;
                    if (SoundImpl.CURRENT_MUSIC === _this) {
                        SoundImpl.CURRENT_MUSIC = null;
                        _this.play(_this.volume);
                    }
                }, function (e) {
                    Log_1.GuteLog.error(e);
                    Log_1.GuteLog.log("Sound decode failed for this: " + _this.name);
                    Log_1.GuteLog.log("Failed to load: " + _this.url);
                });
                if (promise) {
                    promise.then(function () { }).catch(function (e) { });
                }
            }
            catch (e) {
                Log_1.GuteLog.log("decodeAudioData exception on loading " + this.url);
            }
        }
    };
    SoundImpl.prototype.confirmAudioContext = function () {
        try {
            exports.AUDIO_CONTEXT.resume().catch(function (e) {
                Log_1.GuteLog.trace("Resume audio context failed");
                Log_1.GuteLog.trace(e);
            });
        }
        catch (e) {
            Log_1.GuteLog.trace("Resume audio context failed");
        }
    };
    SoundImpl.prototype.initOnFirstClick = function () {
        if (!exports.AUDIO_CONTEXT) {
            try {
                exports.AUDIO_CONTEXT = new AudioContext();
                exports.AUDIO_CONTEXT.resume().catch(function (e) {
                    Log_1.GuteLog.trace("Resume audio context failed");
                    Log_1.GuteLog.trace(e);
                });
            }
            catch (e) {
                Log_1.GuteLog.trace("Resume audio context failed");
            }
        }
        this.tryLoad();
    };
    SoundImpl.prototype.play = function (volume, loop) {
        if (loop === void 0) { loop = false; }
        this.confirmAudioContext();
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
        else {
            // don't play sound effects in the background or they all
            // get stacked up
            if (document.hidden) {
                return;
            }
        }
        if (this.music && !(0, Gute_1.isMusicOn)()) {
            return;
        }
        else if (!this.music && !(0, Gute_1.isSoundOn)()) {
            return;
        }
        this.source = exports.AUDIO_CONTEXT.createBufferSource();
        this.source.buffer = this.buffer;
        this.gain = exports.AUDIO_CONTEXT.createGain();
        this.source.connect(this.gain);
        this.gain.connect(exports.AUDIO_CONTEXT.destination);
        this.looped = false;
        if (this.music || loop) {
            this.gain.gain.value = 0;
            this.source.loop = true;
            this.looped = true;
        }
        this.source.start(0);
        if (this.music || loop) {
            this.gain.gain.linearRampToValueAtTime(volume * (loop ? SoundImpl.soundVolume : SoundImpl.musicVolume), exports.AUDIO_CONTEXT.currentTime + 2);
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
                this.gain.gain.linearRampToValueAtTime(0, exports.AUDIO_CONTEXT.currentTime + 3);
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TilesetImpl = void 0;
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
var Gute_1 = __webpack_require__(/*! ../Gute */ "./src/Gute.ts");
var xbr_js_1 = __webpack_require__(/*! xbr-js */ "./node_modules/xbr-js/src/index.js");
var Tile = /** @class */ (function () {
    function Tile(canvas, x, y, width, height, scale) {
        this.name = "tile";
        this.cached = {};
        this.image = canvas;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.loaded = true;
    }
    Tile.prototype.draw = function (graphics, x, y) {
        var ctx = graphics.ctx;
        if (!(0, Gute_1.shouldPrescaleTilesets)() && (0, Gute_1.shouldUseXbr)() && (this.scale === 2 || this.scale === 3)) {
            if (!this.cached[this.scale]) {
                this.cached[this.scale] = document.createElement("canvas");
                this.cached[this.scale].width = this.width;
                this.cached[this.scale].height = this.height;
                var ctx_1 = this.cached[this.scale].getContext("2d");
                ctx_1.drawImage(this.image, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
                var originalImageData = ctx_1.getImageData(0, 0, this.width, this.height);
                var originalPixelView = new Uint32Array(originalImageData.data.buffer);
                var scaledPixelView = this.scale === 2 ? (0, xbr_js_1.xbr2x)(originalPixelView, this.width, this.height) : (0, xbr_js_1.xbr3x)(originalPixelView, this.width, this.height);
                var destWidth = this.width * this.scale;
                var destHeight = this.height * this.scale;
                this.cached[this.scale].width = destWidth;
                this.cached[this.scale].height = destHeight;
                var scaledImageData = new ImageData(new Uint8ClampedArray(scaledPixelView.buffer), this.cached[this.scale].width, this.cached[this.scale].height);
                ctx_1.putImageData(scaledImageData, 0, 0);
            }
            ctx.drawImage(this.cached[this.scale], x, y);
        }
        else {
            ctx.drawImage(this.image, this.x, this.y, this.width - 0.1, this.height - 0.1, x, y, this.width * this.scale, this.height * this.scale);
        }
    };
    Tile.prototype.drawScaled = function (graphics, x, y, width, height) {
        var ctx = graphics.ctx;
        var scale = Math.min(Math.floor(width / this.width), Math.floor(height / this.height));
        if (!(0, Gute_1.shouldPrescaleTilesets)() && (0, Gute_1.shouldUseXbr)() && (scale === 2 || scale === 3)) {
            if (!this.cached[scale]) {
                this.cached[scale] = document.createElement("canvas");
                this.cached[scale].width = this.width;
                this.cached[scale].height = this.height;
                var ctx_2 = this.cached[scale].getContext("2d");
                ctx_2.drawImage(this.image, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
                var originalImageData = ctx_2.getImageData(0, 0, this.width, this.height);
                var originalPixelView = new Uint32Array(originalImageData.data.buffer);
                var scaledPixelView = scale === 2 ? (0, xbr_js_1.xbr2x)(originalPixelView, this.width, this.height) : (0, xbr_js_1.xbr3x)(originalPixelView, this.width, this.height);
                var destWidth = this.width * scale;
                var destHeight = this.height * scale;
                this.cached[scale].width = destWidth;
                this.cached[scale].height = destHeight;
                var scaledImageData = new ImageData(new Uint8ClampedArray(scaledPixelView.buffer), this.cached[scale].width, this.cached[scale].height);
                ctx_2.putImageData(scaledImageData, 0, 0);
            }
            ctx.drawImage(this.cached[scale], x, y, width, height);
        }
        else {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height, x, y, width, height);
        }
    };
    Tile.prototype.initOnFirstClick = function () {
    };
    return Tile;
}());
var TilesetImpl = /** @class */ (function () {
    function TilesetImpl(url, dataUrlLoader, tileWidth, tileHeight, scale, pal) {
        if (scale === void 0) { scale = 1; }
        if (pal === void 0) { pal = undefined; }
        var _this = this;
        this.loaded = false;
        this.bitmaps = [];
        this.scanline = 0;
        this.tileCount = 0;
        this.tints = {};
        this.tintTiles = {};
        this.onLoaded = function () { };
        this.tileWidth = this.originalTileWidth = tileWidth;
        this.tileHeight = this.originalTileHeight = tileHeight;
        this.scale = scale;
        this.name = url;
        this.image = new Image();
        this.image.onerror = function () {
            __1.GuteLog.log("Error loading: " + url);
        };
        this.image.onload = function () {
            if ((0, Gute_1.shouldPrescaleTilesets)() && scale !== 1) {
                var scaledImage = document.createElement("canvas");
                if ((0, Gute_1.shouldUseXbr)()) {
                    var ctx = scaledImage.getContext("2d");
                    ctx.drawImage(_this.image, 0, 0);
                    var originalImageData = ctx.getImageData(0, 0, _this.image.width, _this.image.height);
                    var originalPixelView = new Uint32Array(originalImageData.data.buffer);
                    var scaledPixelView = scale === 2 ? (0, xbr_js_1.xbr2x)(originalPixelView, _this.image.width, _this.image.height) : (0, xbr_js_1.xbr3x)(originalPixelView, _this.image.width, _this.image.height);
                    scaledImage.width = _this.image.width * scale;
                    scaledImage.height = _this.image.height * scale;
                    var scaledImageData = new ImageData(new Uint8ClampedArray(scaledPixelView.buffer), scaledImage.width, scaledImage.height);
                    ctx.putImageData(scaledImageData, 0, 0);
                }
                else {
                    scaledImage.width = _this.image.width * scale;
                    scaledImage.height = _this.image.height * scale;
                    var ctx = scaledImage.getContext("2d");
                    ctx.imageSmoothingEnabled = false;
                    ctx.webkitImageSmoothingEnabled = false;
                    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(_this.image, 0, 0, scaledImage.width, scaledImage.height);
                }
                _this.image = scaledImage;
                _this.tileWidth *= scale;
                _this.tileHeight *= scale;
                _this.originalTileWidth *= scale;
                _this.originalTileHeight *= scale;
                _this.scale = 1;
                scale = 1;
            }
            _this.scanline = Math.floor(_this.image.width / _this.tileWidth);
            var depth = Math.floor(_this.image.height / _this.tileHeight);
            _this.tileCount = depth * _this.scanline;
            if (pal) {
                pal.adjustImage(_this.image).then(function (image) {
                    _this.image = image;
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
                });
            }
            else {
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
            }
        };
        if (dataUrlLoader) {
            dataUrlLoader.then(function (blob) {
                var urlCreator = window.URL || window.webkitURL;
                _this.image.src = urlCreator.createObjectURL(blob);
            });
        }
        else {
            this.image.src = url;
        }
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
    TilesetImpl.prototype.getShadedTile = function (tile, tintName, shade) {
        var tiles = this.tintTiles[tintName];
        if (!tiles) {
            tiles = this.tintTiles[tintName] = [];
        }
        var tileRecord = tiles[tile];
        if (!tileRecord) {
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
                        id.data[i] *= shade;
                        id.data[i + 1] *= shade;
                        id.data[i + 2] *= shade;
                    }
                    ctx.putImageData(id, 0, 0);
                }
                image = new Image();
                image.src = canvas.toDataURL();
                this.tints[tintName] = image;
            }
            tileRecord = tiles[tile] = new Tile(image, x * this.originalTileWidth, y * this.originalTileHeight, this.originalTileWidth, this.originalTileHeight, this.scale);
        }
        return tileRecord;
    };
    TilesetImpl.prototype.getTintedTile = function (tile, tintName, tint) {
        var tiles = this.tintTiles[tintName];
        if (!tiles) {
            tiles = this.tintTiles[tintName] = [];
        }
        var tileRecord = tiles[tile];
        if (!tileRecord) {
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
            tileRecord = tiles[tile] = new Tile(image, x * this.originalTileWidth, y * this.originalTileHeight, this.originalTileWidth, this.originalTileHeight, this.scale);
        }
        return tileRecord;
    };
    TilesetImpl.prototype.modify = function (modification) {
        var canvas = document.createElement("canvas");
        canvas.width = this.image.width;
        canvas.height = this.image.height;
        var ctx = canvas.getContext("2d");
        if (ctx) {
            ctx.drawImage(this.image, 0, 0);
            var id = ctx.getImageData(0, 0, canvas.width, canvas.height);
            modification(id);
            ctx.putImageData(id, 0, 0);
        }
        this.image = new Image();
        this.image.src = canvas.toDataURL();
        for (var _i = 0, _a = this.bitmaps; _i < _a.length; _i++) {
            var tile = _a[_i];
            tile.image = this.image;
        }
        return this;
    };
    TilesetImpl.prototype.getBlockColorTile = function (tile, tintName, col) {
        var tiles = this.tintTiles[tintName];
        if (!tiles) {
            tiles = this.tintTiles[tintName] = [];
        }
        var tileRecord = tiles[tile];
        if (!tileRecord) {
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
                        id.data[i] = Math.floor(255 * col[0]);
                        id.data[i + 1] = Math.floor(255 * col[1]);
                        id.data[i + 2] = Math.floor(255 * col[2]);
                        id.data[i + 3] = Math.floor(id.data[i + 3] * col[3]);
                    }
                    ctx.putImageData(id, 0, 0);
                }
                image = new Image();
                image.src = canvas.toDataURL();
                this.tints[tintName] = image;
            }
            tileRecord = tiles[tile] = new Tile(image, x * this.originalTileWidth, y * this.originalTileHeight, this.originalTileWidth, this.originalTileHeight, this.scale);
        }
        return tileRecord;
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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoundEasing = exports.SoundScape = exports.MapEntity = exports.MapLayer = exports.MapLevel = exports.MapWorld = exports.LDTKWorld = exports.Step = exports.Path = exports.AStarPathFinder = exports.Keys = exports.GuteLog = exports.getMaxTextureSize = exports.BLUE = exports.RED = exports.GREEN = exports.BLACK = exports.WHITE = exports.Renderer = exports.setPrescaleTilesets = exports.setSoundOn = exports.setMusicOn = exports.isSoundOn = exports.isMusicOn = exports.startGame = void 0;
var Gute_1 = __webpack_require__(/*! ./Gute */ "./src/Gute.ts");
Object.defineProperty(exports, "startGame", ({ enumerable: true, get: function () { return Gute_1.startGame; } }));
Object.defineProperty(exports, "isMusicOn", ({ enumerable: true, get: function () { return Gute_1.isMusicOn; } }));
Object.defineProperty(exports, "isSoundOn", ({ enumerable: true, get: function () { return Gute_1.isSoundOn; } }));
Object.defineProperty(exports, "setMusicOn", ({ enumerable: true, get: function () { return Gute_1.setMusicOn; } }));
Object.defineProperty(exports, "setSoundOn", ({ enumerable: true, get: function () { return Gute_1.setSoundOn; } }));
Object.defineProperty(exports, "setPrescaleTilesets", ({ enumerable: true, get: function () { return Gute_1.setPrescaleTilesets; } }));
Object.defineProperty(exports, "Renderer", ({ enumerable: true, get: function () { return Gute_1.Renderer; } }));
var Graphics_1 = __webpack_require__(/*! ./Graphics */ "./src/Graphics.ts");
Object.defineProperty(exports, "WHITE", ({ enumerable: true, get: function () { return Graphics_1.WHITE; } }));
Object.defineProperty(exports, "BLACK", ({ enumerable: true, get: function () { return Graphics_1.BLACK; } }));
Object.defineProperty(exports, "GREEN", ({ enumerable: true, get: function () { return Graphics_1.GREEN; } }));
Object.defineProperty(exports, "RED", ({ enumerable: true, get: function () { return Graphics_1.RED; } }));
Object.defineProperty(exports, "BLUE", ({ enumerable: true, get: function () { return Graphics_1.BLUE; } }));
var OpenGLGraphicsImpl_1 = __webpack_require__(/*! ./opengl/OpenGLGraphicsImpl */ "./src/opengl/OpenGLGraphicsImpl.ts");
Object.defineProperty(exports, "getMaxTextureSize", ({ enumerable: true, get: function () { return OpenGLGraphicsImpl_1.getMaxTextureSize; } }));
var Log_1 = __webpack_require__(/*! ./Log */ "./src/Log.ts");
Object.defineProperty(exports, "GuteLog", ({ enumerable: true, get: function () { return Log_1.GuteLog; } }));
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
var SoundScape_1 = __webpack_require__(/*! ./SoundScape */ "./src/SoundScape.ts");
Object.defineProperty(exports, "SoundScape", ({ enumerable: true, get: function () { return SoundScape_1.SoundScape; } }));
Object.defineProperty(exports, "SoundEasing", ({ enumerable: true, get: function () { return SoundScape_1.SoundEasing; } }));


/***/ }),

/***/ "./src/opengl/OpenGLBitmap.1.ts":
/*!**************************************!*\
  !*** ./src/opengl/OpenGLBitmap.1.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpenGLBitmap = void 0;
var Log_1 = __webpack_require__(/*! ../Log */ "./src/Log.ts");
var OpenGLBitmap = /** @class */ (function () {
    function OpenGLBitmap(graphics, url, dataUrlLoader, pal) {
        if (pal === void 0) { pal = undefined; }
        var _this = this;
        this.width = 0;
        this.height = 0;
        this.loaded = false;
        this.texX = 0;
        this.texY = 0;
        this.texIndex = 0;
        graphics.registerImage(this);
        this.name = url;
        this.image = new Image();
        this.image.onerror = function () {
            Log_1.GuteLog.log("Error loading: " + url);
        };
        this.image.onload = function () {
            _this.width = _this.image.width;
            _this.height = _this.image.height;
            if (pal) {
                pal.adjustImage(_this.image).then(function (image) {
                    _this.image = image;
                    _this.loaded = true;
                    graphics.newResourceLoaded();
                });
            }
            else {
                _this.loaded = true;
                graphics.newResourceLoaded();
            }
        };
        if (dataUrlLoader) {
            dataUrlLoader.then(function (base64) {
                _this.image.src = "data:" + url.substring(url.length - 3) + ";base64," + base64;
            });
        }
        else {
            this.image.src = url;
        }
    }
    OpenGLBitmap.prototype.draw = function (graphics, x, y) {
        var g = graphics;
        g._drawBitmap(this, x, y, this.width, this.height);
    };
    OpenGLBitmap.prototype.drawScaled = function (graphics, x, y, width, height) {
        var g = graphics;
        g._drawBitmap(this, x, y, width, height);
    };
    OpenGLBitmap.prototype.initOnFirstClick = function () {
    };
    return OpenGLBitmap;
}());
exports.OpenGLBitmap = OpenGLBitmap;


/***/ }),

/***/ "./src/opengl/OpenGLBitmap.ts":
/*!************************************!*\
  !*** ./src/opengl/OpenGLBitmap.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NullBitmap = void 0;
var NullBitmap = /** @class */ (function () {
    function NullBitmap() {
        this.width = 0;
        this.height = 0;
        this.loaded = true;
        this.name = "null";
    }
    NullBitmap.prototype.draw = function (graphics, x, y) {
    };
    NullBitmap.prototype.drawScaled = function (graphics, x, y, width, height) {
    };
    NullBitmap.prototype.initOnFirstClick = function () {
    };
    return NullBitmap;
}());
exports.NullBitmap = NullBitmap;


/***/ }),

/***/ "./src/opengl/OpenGLGraphicsImpl.ts":
/*!******************************************!*\
  !*** ./src/opengl/OpenGLGraphicsImpl.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpenGLGraphicsImpl = void 0;
exports.colToNumber = colToNumber;
exports.getMaxTextureSize = getMaxTextureSize;
var Log_1 = __webpack_require__(/*! ../Log */ "./src/Log.ts");
var OpenGLBitmap_1 = __webpack_require__(/*! ./OpenGLBitmap */ "./src/opengl/OpenGLBitmap.ts");
var OpenGLOffscreen_1 = __webpack_require__(/*! ./OpenGLOffscreen */ "./src/opengl/OpenGLOffscreen.ts");
var potpack_1 = __webpack_require__(/*! potpack */ "./node_modules/potpack/index.js");
function parseColor(input) {
    var mm;
    var m;
    // Obviously, the numeric values will be easier to parse than names.So we do those first.
    mm = input.match(/^#?([0-9a-f]{3})$/i);
    if (mm) {
        m = mm[1];
        // in three-character format, each value is multiplied by 0x11 to give an
        // even scale from 0x00 to 0xff
        return [
            parseInt(m.charAt(0), 16) * 0x11,
            parseInt(m.charAt(1), 16) * 0x11,
            parseInt(m.charAt(2), 16) * 0x11,
            1
        ];
    }
    // That's one. Now for the full six-digit format: 
    mm = input.match(/^#?([0-9a-f]{6})$/i);
    if (mm) {
        m = mm[1];
        return [
            parseInt(m.substr(0, 2), 16),
            parseInt(m.substr(2, 2), 16),
            parseInt(m.substr(4, 2), 16),
            1
        ];
    }
    // And now for rgb() format:
    mm = input.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([+-]?([0-9]*[.])?[0-9]+)\s*\)$/i);
    if (mm) {
        return [Number.parseInt(mm[1]), Number.parseInt(mm[2]), Number.parseInt(mm[3]), Number.parseFloat(mm[4])];
    }
    mm = input.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
    if (mm) {
        return [Number.parseInt(mm[1]), Number.parseInt(mm[2]), Number.parseInt(mm[3]), 1];
    }
    // https://www.w3schools.com/colors/colors_names.asp
    // https://en.wikipedia.org/wiki/Web_colors
    // http://www.colors.commutercreative.com/grid/
    var webColors = {
        "AliceBlue": "#F0F8FF",
        "AntiqueWhite": "#FAEBD7",
        "Aqua": "#00FFFF",
        "Aquamarine": "#7FFFD4",
        "Azure": "#F0FFFF",
        "Beige": "#F5F5DC",
        "Bisque": "#FFE4C4",
        "Black": "#000000",
        "BlanchedAlmond": "#FFEBCD",
        "Blue": "#0000FF",
        "BlueViolet": "#8A2BE2",
        "Brown": "#A52A2A",
        "BurlyWood": "#DEB887",
        "CadetBlue": "#5F9EA0",
        "Chartreuse": "#7FFF00",
        "Chocolate": "#D2691E",
        "Coral": "#FF7F50",
        "CornflowerBlue": "#6495ED",
        "Cornsilk": "#FFF8DC",
        "Crimson": "#DC143C",
        "Cyan": "#00FFFF",
        "DarkBlue": "#00008B",
        "DarkCyan": "#008B8B",
        "DarkGoldenRod": "#B8860B",
        "DarkGray": "#A9A9A9",
        "DarkGrey": "#A9A9A9",
        "DarkGreen": "#006400",
        "DarkKhaki": "#BDB76B",
        "DarkMagenta": "#8B008B",
        "DarkOliveGreen": "#556B2F",
        "DarkOrange": "#FF8C00",
        "DarkOrchid": "#9932CC",
        "DarkRed": "#8B0000",
        "DarkSalmon": "#E9967A",
        "DarkSeaGreen": "#8FBC8F",
        "DarkSlateBlue": "#483D8B",
        "DarkSlateGray": "#2F4F4F",
        "DarkSlateGrey": "#2F4F4F",
        "DarkTurquoise": "#00CED1",
        "DarkViolet": "#9400D3",
        "DeepPink": "#FF1493",
        "DeepSkyBlue": "#00BFFF",
        "DimGray": "#696969",
        "DimGrey": "#696969",
        "DodgerBlue": "#1E90FF",
        "FireBrick": "#B22222",
        "FloralWhite": "#FFFAF0",
        "ForestGreen": "#228B22",
        "Fuchsia": "#FF00FF",
        "Gainsboro": "#DCDCDC",
        "GhostWhite": "#F8F8FF",
        "Gold": "#FFD700",
        "GoldenRod": "#DAA520",
        "Gray": "#808080",
        "Grey": "#808080",
        "Green": "#008000",
        "GreenYellow": "#ADFF2F",
        "HoneyDew": "#F0FFF0",
        "HotPink": "#FF69B4",
        "IndianRed ": "#CD5C5C",
        "Indigo ": "#4B0082",
        "Ivory": "#FFFFF0",
        "Khaki": "#F0E68C",
        "Lavender": "#E6E6FA",
        "LavenderBlush": "#FFF0F5",
        "LawnGreen": "#7CFC00",
        "LemonChiffon": "#FFFACD",
        "LightBlue": "#ADD8E6",
        "LightCoral": "#F08080",
        "LightCyan": "#E0FFFF",
        "LightGoldenRodYellow": "#FAFAD2",
        "LightGray": "#D3D3D3",
        "LightGrey": "#D3D3D3",
        "LightGreen": "#90EE90",
        "LightPink": "#FFB6C1",
        "LightSalmon": "#FFA07A",
        "LightSeaGreen": "#20B2AA",
        "LightSkyBlue": "#87CEFA",
        "LightSlateGray": "#778899",
        "LightSlateGrey": "#778899",
        "LightSteelBlue": "#B0C4DE",
        "LightYellow": "#FFFFE0",
        "Lime": "#00FF00",
        "LimeGreen": "#32CD32",
        "Linen": "#FAF0E6",
        "Magenta": "#FF00FF",
        "Maroon": "#800000",
        "MediumAquaMarine": "#66CDAA",
        "MediumBlue": "#0000CD",
        "MediumOrchid": "#BA55D3",
        "MediumPurple": "#9370DB",
        "MediumSeaGreen": "#3CB371",
        "MediumSlateBlue": "#7B68EE",
        "MediumSpringGreen": "#00FA9A",
        "MediumTurquoise": "#48D1CC",
        "MediumVioletRed": "#C71585",
        "MidnightBlue": "#191970",
        "MintCream": "#F5FFFA",
        "MistyRose": "#FFE4E1",
        "Moccasin": "#FFE4B5",
        "NavajoWhite": "#FFDEAD",
        "Navy": "#000080",
        "OldLace": "#FDF5E6",
        "Olive": "#808000",
        "OliveDrab": "#6B8E23",
        "Orange": "#FFA500",
        "OrangeRed": "#FF4500",
        "Orchid": "#DA70D6",
        "PaleGoldenRod": "#EEE8AA",
        "PaleGreen": "#98FB98",
        "PaleTurquoise": "#AFEEEE",
        "PaleVioletRed": "#DB7093",
        "PapayaWhip": "#FFEFD5",
        "PeachPuff": "#FFDAB9",
        "Peru": "#CD853F",
        "Pink": "#FFC0CB",
        "Plum": "#DDA0DD",
        "PowderBlue": "#B0E0E6",
        "Purple": "#800080",
        "RebeccaPurple": "#663399",
        "Red": "#FF0000",
        "RosyBrown": "#BC8F8F",
        "RoyalBlue": "#4169E1",
        "SaddleBrown": "#8B4513",
        "Salmon": "#FA8072",
        "SandyBrown": "#F4A460",
        "SeaGreen": "#2E8B57",
        "SeaShell": "#FFF5EE",
        "Sienna": "#A0522D",
        "Silver": "#C0C0C0",
        "SkyBlue": "#87CEEB",
        "SlateBlue": "#6A5ACD",
        "SlateGray": "#708090",
        "SlateGrey": "#708090",
        "Snow": "#FFFAFA",
        "SpringGreen": "#00FF7F",
        "SteelBlue": "#4682B4",
        "Tan": "#D2B48C",
        "Teal": "#008080",
        "Thistle": "#D8BFD8",
        "Tomato": "#FF6347",
        "Turquoise": "#40E0D0",
        "Violet": "#EE82EE",
        "Wheat": "#F5DEB3",
        "White": "#FFFFFF",
        "WhiteSmoke": "#F5F5F5",
        "Yellow": "#FFFF00",
        "YellowGreen": "#9ACD32",
        "Transparent": "rgba(0,0,0,0)",
    };
    for (var p in webColors) {
        webColors[p.toLowerCase()] = webColors[p];
    }
    var wc = webColors[input.toLowerCase()];
    if (wc != null)
        return parseColor(wc);
    throw Error("'" + input + "' is not a valid color...");
}
function colToNumber(input) {
    var result = COL_CACHE[input];
    if (result === undefined) {
        var rgba = parseColor(input);
        var value = (rgba[0] * (256 * 256 * 256)) + (rgba[1] * (256 * 256)) + (rgba[2] * 256) + Math.floor(rgba[3] * 255);
        COL_CACHE[input] = value;
        result = value;
        if (Object.keys(COL_CACHE).length === 2000) {
            alert("2000 color caches have been created");
        }
    }
    return result;
}
var isFirefox = typeof InstallTrigger !== 'undefined';
var COL_CACHE = {};
function getMaxTextureSize() {
    if (window.WebGLRenderingContext === undefined) {
        return 0;
    }
    var canvas = document.createElement("canvas");
    var gl = canvas.getContext('experimental-webgl', { antialias: false, alpha: false, preserveDrawingBuffer: true });
    if (!gl) {
        return 0;
    }
    return gl.getParameter(gl.MAX_TEXTURE_SIZE);
}
var OpenGLGraphicsImpl = /** @class */ (function () {
    function OpenGLGraphicsImpl() {
        var _this = this;
        this.offscreen = null;
        this.images = [];
        this.atlasTextures = null;
        this.currentTexture = null;
        this.texWidth = 0;
        this.texHeight = 0;
        this.offscreenId = 1;
        this.offscreens = [];
        this.loaded = false;
        this.maxDraws = 10000;
        this.draws = 0;
        this.clipX = 0;
        this.clipY = 0;
        this.clipX2 = 0;
        this.clipY2 = 0;
        this.alpha = 255;
        this.uniforms = {};
        this.saves = 0;
        this.transformCanvas = document.createElement("canvas");
        this.transformCtx = this.transformCanvas.getContext("2d");
        this.currentContextState = this;
        this.canvas = document.getElementById("gamecanvas");
        this.canvas.style.fontSmooth = "never";
        this.canvas.style.webkitFontSmoothing = "none";
        this.canvas.addEventListener("webglcontextlost", function (event) {
            _this.lostContext();
            event.preventDefault();
        }, false);
        this.canvas.addEventListener("webglcontextrestored", function (event) {
            _this.recoverContext();
        }, false);
        if (isFirefox) {
            this.canvas.style.imageRendering = "crisp-edges";
        }
        else {
            this.canvas.style.imageRendering = "pixelated";
        }
        this.gl = this.canvas.getContext('experimental-webgl', { antialias: false, alpha: false, preserveDrawingBuffer: false });
        this.initGlResources();
    }
    OpenGLGraphicsImpl.prototype.lostContext = function () {
        Log_1.GuteLog.log("LOST GL CONTEXT");
        this.shaderProgram = undefined;
        this.atlasTextures = null;
    };
    OpenGLGraphicsImpl.prototype.recoverContext = function () {
        Log_1.GuteLog.log("RECOVERED GL CONTEXT");
        this.initGlResources();
        this.initResourceOnLoaded();
        for (var _i = 0, _a = this.offscreens; _i < _a.length; _i++) {
            var offscreen = _a[_i];
            offscreen.recover();
        }
        this.resize();
        Log_1.GuteLog.log("RECREATE GL RESOURCES");
    };
    OpenGLGraphicsImpl.prototype.initGlResources = function () {
        var _this = this;
        Log_1.GuteLog.log("Init GL Resources");
        var extension = this.gl.getExtension('ANGLE_instanced_arrays');
        this.extension = extension;
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.gl.enable(this.gl.BLEND);
        this.gl.disable(this.gl.DEPTH_TEST);
        var shortsPerImagePosition = 2;
        var shortsPerImageSize = 2;
        var shortsPerImageTexPos = 4;
        var bytesPerImageRgba = 4;
        var bytesPerImage = shortsPerImagePosition * 2 + shortsPerImageSize * 2 + shortsPerImageTexPos * 2 + bytesPerImageRgba;
        this.arrayBuffer = new ArrayBuffer(this.maxDraws * bytesPerImage);
        this.positions = new Int16Array(this.arrayBuffer);
        this.rgbas = new Uint32Array(this.arrayBuffer);
        var vertCode = "\
			attribute vec2 aSizeMult;\
			attribute vec2 aPos;\
			attribute vec2 aSize;\
			attribute vec4 aTexPos;\
			attribute vec4 aRgba;\
			\
			varying highp vec2 fragTexturePos;\
			varying vec4 fragAbgr;\
			\
			uniform vec2 uCanvasSize;\
			uniform vec2 uTexSize;\
			\
			void main(void){\
				gl_Position.x = ( (aPos.x + (aSize.x * aSizeMult.x) ) / uCanvasSize.x ) - 1.0; \
                gl_Position.y = 1.0 -  ( (aPos.y + (aSize.y * aSizeMult.y) ) / uCanvasSize.y ); \
                gl_Position.z = 0.0; \
                gl_Position.w = 1.0; \
                \
				fragTexturePos = (aTexPos.xy + aTexPos.zw * aSizeMult) / uTexSize;\
                \
                fragAbgr.x = aRgba.w/255.0; \
                fragAbgr.y = aRgba.z/255.0; \
                fragAbgr.z = aRgba.y/255.0; \
                fragAbgr.w = aRgba.x/255.0; \
			}\
		";
        // Create a vertex shader object with code.
        var vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
        this.gl.shaderSource(vertShader, vertCode);
        this.gl.compileShader(vertShader);
        // Fragment shader source code.
        var fragCode = "\
			varying highp vec2 fragTexturePos;\
			varying highp vec4 fragAbgr;\
			uniform sampler2D uSampler;\
			\
			void main(void){\
				gl_FragColor = texture2D(uSampler, fragTexturePos) * fragAbgr;\
			}\
		";
        var fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        this.gl.shaderSource(fragShader, fragCode);
        this.gl.compileShader(fragShader);
        var shaderProgram = this.gl.createProgram();
        this.gl.attachShader(shaderProgram, vertShader);
        this.gl.attachShader(shaderProgram, fragShader);
        this.gl.linkProgram(shaderProgram);
        this.gl.useProgram(shaderProgram);
        this.shaderProgram = shaderProgram;
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.gl.createBuffer());
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint8Array([0, 1, 2, 2, 1, 3]), this.gl.STATIC_DRAW);
        // Our multiplier array for width/height so we can get to each corner of the image drawn.
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.gl.createBuffer());
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]), this.gl.STATIC_DRAW);
        var attribute = this.gl.getAttribLocation(shaderProgram, "aSizeMult");
        this.gl.enableVertexAttribArray(attribute);
        this.gl.vertexAttribPointer(attribute, 2, this.gl.FLOAT, false, 0, 0);
        this.glBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.glBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.arrayBuffer, this.gl.DYNAMIC_DRAW);
        var byteOffset = 0;
        var setupAttribute = function (name, dataType, amount) {
            if (_this.shaderProgram) {
                var attribute_1 = _this.gl.getAttribLocation(_this.shaderProgram, name);
                if (attribute_1 !== -1) {
                    _this.gl.enableVertexAttribArray(attribute_1);
                    _this.gl.vertexAttribPointer(attribute_1, amount, dataType, false, bytesPerImage, byteOffset);
                    extension.vertexAttribDivisorANGLE(attribute_1, 1);
                    if (dataType == _this.gl.SHORT)
                        amount *= 2;
                    if (dataType == _this.gl.FLOAT)
                        amount *= 4;
                    byteOffset += amount;
                }
                else {
                    Log_1.GuteLog.log("Attribute not found: " + name);
                }
            }
        };
        setupAttribute("aPos", this.gl.SHORT, shortsPerImagePosition);
        setupAttribute("aSize", this.gl.SHORT, shortsPerImageSize);
        setupAttribute("aTexPos", this.gl.SHORT, shortsPerImageTexPos);
        setupAttribute("aRgba", this.gl.UNSIGNED_BYTE, bytesPerImageRgba);
    };
    OpenGLGraphicsImpl.prototype.registerImage = function (bitmap) {
        this.images.push(bitmap);
    };
    OpenGLGraphicsImpl.prototype.newResourceLoaded = function () {
        if (this.atlasTextures) {
            this.initResourceOnLoaded();
        }
    };
    OpenGLGraphicsImpl.prototype.initResourceOnLoaded = function () {
        Log_1.GuteLog.log("[WEBGL] Reloading texture");
        var textureSize = Math.min(this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE), 4096 * 2);
        var list = __spreadArray([], this.images, true);
        list.sort(function (a, b) { return a.height > b.height ? -1 : 1; });
        var placed = [];
        placed.push({ texX: 0, texY: 0, width: 1, height: 1, texIndex: -1 });
        var records = list.map(function (image) { return { image: image, w: image.width, h: image.height }; });
        var base = 0;
        var step = 20;
        var textureCount = 0;
        for (var i = 0; i < records.length; i += step) {
            var _a = (0, potpack_1.default)(records.slice(base, i)), w_1 = _a.w, h_1 = _a.h, fill_1 = _a.fill;
            if (w_1 > textureSize || h_1 > textureSize) {
                var _b = (0, potpack_1.default)(records.slice(base, i - step)), w_2 = _b.w, h_2 = _b.h, fill_2 = _b.fill;
                records.slice(base, i - step).forEach(function (record) { return record.image.texIndex = textureCount; });
                Log_1.GuteLog.log(base + " -> " + (i - step - 1) + " = " + w_2 + "x" + h_2);
                base = i - step;
                textureCount++;
            }
        }
        var _c = (0, potpack_1.default)(records.slice(base, records.length)), w = _c.w, h = _c.h, fill = _c.fill;
        records.slice(base, records.length).forEach(function (record) { return record.image.texIndex = textureCount; });
        Log_1.GuteLog.log(base + " -> " + (records.length - 1) + " = " + w + "x" + h);
        textureCount++;
        Log_1.GuteLog.log("Packed into: " + textureCount + " textures");
        for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
            var record = records_1[_i];
            record.image.texX = record.x + 1;
            record.image.texY = record.y;
        }
        if (this.atlasTextures) {
            for (var _d = 0, _e = this.atlasTextures; _d < _e.length; _d++) {
                var texture = _e[_d];
                this.gl.deleteTexture(texture);
            }
        }
        this.atlasTextures = [];
        var _loop_1 = function (i) {
            var texture = this_1.gl.createTexture();
            if (texture) {
                this_1.atlasTextures.push(texture);
                this_1.gl.bindTexture(this_1.gl.TEXTURE_2D, texture);
                this_1.gl.activeTexture(this_1.gl.TEXTURE0);
                this_1.gl.texImage2D(this_1.gl.TEXTURE_2D, 0, this_1.gl.RGBA, textureSize, textureSize, 0, this_1.gl.RGBA, this_1.gl.UNSIGNED_BYTE, null);
                var whitePixel = document.createElement("canvas");
                var ctx = whitePixel.getContext("2d");
                ctx.fillStyle = '#FFF';
                ctx.fillRect(0, 0, 1, 1);
                this_1.gl.texSubImage2D(this_1.gl.TEXTURE_2D, 0, 0, 0, this_1.gl.RGBA, this_1.gl.UNSIGNED_BYTE, whitePixel);
                for (var _f = 0, _g = list.filter(function (lImage) { return lImage.texIndex === i; }); _f < _g.length; _f++) {
                    var image = _g[_f];
                    this_1.gl.texSubImage2D(this_1.gl.TEXTURE_2D, 0, image.texX, image.texY, this_1.gl.RGBA, this_1.gl.UNSIGNED_BYTE, image.image);
                }
                this_1.gl.texParameteri(this_1.gl.TEXTURE_2D, this_1.gl.TEXTURE_MAG_FILTER, this_1.gl.NEAREST);
                this_1.gl.texParameteri(this_1.gl.TEXTURE_2D, this_1.gl.TEXTURE_MIN_FILTER, this_1.gl.NEAREST);
                this_1.texWidth = textureSize;
                this_1.texHeight = textureSize;
                if (this_1.shaderProgram) {
                    this_1.gl.uniform2f(this_1.getUniformLoc("uTexSize"), this_1.texWidth, this_1.texHeight);
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < textureCount; i++) {
            _loop_1(i);
        }
        this.resize();
        this.loaded = true;
    };
    OpenGLGraphicsImpl.prototype.resetState = function () {
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.currentContextState.clipX = 0;
        this.currentContextState.clipX2 = 0;
        this.currentContextState.clipY = 0;
        this.currentContextState.clipY2 = 0;
        this.currentContextState.alpha = 255;
    };
    OpenGLGraphicsImpl.prototype.getUniformLoc = function (name) {
        var result = this.uniforms[name];
        if (!result && this.shaderProgram) {
            var loc = this.gl.getUniformLocation(this.shaderProgram, name);
            if (loc) {
                this.uniforms[name] = result = loc;
            }
        }
        return result;
    };
    OpenGLGraphicsImpl.prototype.resize = function () {
        // Resize the gl viewport to be the new size of the canvas.
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        // Update the shader variables for canvas size.
        // Sending it to gl now so we don't have to do the math in JavaScript on every draw,
        // since gl wants to draw at a position from 0 to 1, and we want to do drawImage with a screen pixel position.
        if (this.shaderProgram) {
            this.gl.uniform2f(this.getUniformLoc("uCanvasSize"), this.canvas.width / 2, this.canvas.height / 2);
        }
    };
    OpenGLGraphicsImpl.prototype.getError = function () {
        var error = this.gl.getError();
        if (error !== 0) {
            switch (error) {
                case WebGLRenderingContext.INVALID_ENUM:
                    return "Invalid Enum";
                case WebGLRenderingContext.INVALID_VALUE:
                    return "Invalid Value";
                case WebGLRenderingContext.INVALID_OPERATION:
                    return "Invalid Operation";
                case WebGLRenderingContext.INVALID_FRAMEBUFFER_OPERATION:
                    return "Invalid Framebuffer Operation";
                case WebGLRenderingContext.OUT_OF_MEMORY:
                    return "Out of Memory";
                // in this case we're expecting our handler to pop up
                // and restore it - so don't return an error since
                // that'll stop the rendering thread
                case WebGLRenderingContext.CONTEXT_LOST_WEBGL:
                    return undefined;
            }
            return "Unknown error - " + this.gl.getError();
        }
        return undefined;
    };
    OpenGLGraphicsImpl.prototype._drawBitmap = function (img, x, y, width, height, col) {
        if (col === void 0) { col = 0xFFFFFF00; }
        this._drawImage(img.texIndex, img.texX, img.texY, img.width, img.height, x, y, width, height, col, this.currentContextState.alpha);
    };
    OpenGLGraphicsImpl.prototype._drawImage = function (texIndex, texX, texY, texWidth, texHeight, drawX, drawY, width, height, rgba, alpha) {
        if (!this.atlasTextures) {
            return;
        }
        if (!this.rgbas || !this.positions) {
            return;
        }
        if ((texIndex >= 0) && (this.atlasTextures[texIndex] !== this.currentTexture)) {
            this.glCommitContext();
            this.currentTexture = this.atlasTextures[texIndex];
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.currentTexture);
            this.glStartContext();
        }
        var i = this.draws * 5;
        // clamp alpha to prevent overflow
        if (alpha > 255) {
            alpha = 255;
        }
        this.rgbas[i + 4] = rgba | alpha;
        i *= 2;
        var drawX2 = drawX + width;
        var drawY2 = drawY + height;
        var t1 = this.transformCtx.getTransform().transformPoint({ x: drawX, y: drawY });
        var t2 = this.transformCtx.getTransform().transformPoint({ x: drawX2, y: drawY2 });
        drawX = t1.x;
        drawY = t1.y;
        drawX2 = t2.x;
        drawY2 = t2.y;
        drawX = Math.floor(drawX);
        drawY = Math.floor(drawY);
        drawX2 = Math.floor(drawX2);
        drawY2 = Math.floor(drawY2);
        width = drawX2 - drawX;
        height = drawY2 - drawY;
        var screenHeight = this.canvas.height;
        if (this.offscreen) {
            screenHeight = this.offscreen.getHeight();
        }
        var screenWidth = this.canvas.width;
        if (this.offscreen) {
            screenWidth = this.offscreen.getWidth();
        }
        if ((this.currentContextState.clipY2 === 0) && (this.currentContextState.clipX2 === 0)) {
            this.currentContextState.clipY = -100;
            this.currentContextState.clipY2 = screenHeight + 100;
            this.currentContextState.clipX = -100;
            this.currentContextState.clipX2 = screenWidth + 100;
        }
        if (this.currentContextState.clipX < this.currentContextState.clipX2) {
            if (drawX > this.currentContextState.clipX2) {
                return;
            }
            if (drawX2 < this.currentContextState.clipX) {
                return;
            }
            if (drawX2 > this.currentContextState.clipX2) {
                var showPercent = 1 - (drawX2 - this.currentContextState.clipX2) / width;
                texWidth *= showPercent;
                width *= showPercent;
            }
            if (drawX < this.currentContextState.clipX) {
                var showPercent = 1 - (this.currentContextState.clipX - drawX) / width;
                width -= this.currentContextState.clipX - drawX;
                drawX = this.currentContextState.clipX;
                texX += texWidth * (1 - showPercent);
                texWidth *= showPercent;
            }
        }
        if (this.currentContextState.clipY < this.currentContextState.clipY2) {
            if (drawY > this.currentContextState.clipY2) {
                return;
            }
            if (drawY2 < this.currentContextState.clipY) {
                return;
            }
            if (drawY2 > this.currentContextState.clipY2) {
                var showPercent = 1 - (drawY2 - this.currentContextState.clipY2) / height;
                texHeight *= showPercent;
                height *= showPercent;
            }
            if (drawY < this.currentContextState.clipY) {
                var showPercent = 1 - (this.currentContextState.clipY - drawY) / height;
                height -= this.currentContextState.clipY - drawY;
                drawY = this.currentContextState.clipY;
                texY += texHeight * (1 - showPercent);
                texHeight *= showPercent;
            }
        }
        this.positions[i] = drawX;
        this.positions[i + 1] = drawY;
        this.positions[i + 2] = width;
        this.positions[i + 3] = height;
        this.positions[i + 4] = texX;
        this.positions[i + 5] = texY;
        this.positions[i + 6] = texWidth;
        this.positions[i + 7] = texHeight;
        this.draws++;
    };
    OpenGLGraphicsImpl.prototype.glStartContext = function () {
    };
    OpenGLGraphicsImpl.prototype.glCommitContext = function () {
        if (this.draws > 0 && this.rgbas && this.extension) {
            this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, this.rgbas.subarray(0, this.draws * 5));
            this.extension.drawElementsInstancedANGLE(this.gl.TRIANGLES, 6, this.gl.UNSIGNED_BYTE, 0, this.draws);
            this.draws = 0;
        }
    };
    OpenGLGraphicsImpl.prototype.renderStart = function () {
        if (this.transformCtx.reset) {
            this.transformCtx.reset();
        }
        else {
            // old way of reset all the state
            this.canvas.width += 0;
        }
        this.draws = 0;
        this.resetState();
        this.glStartContext();
    };
    OpenGLGraphicsImpl.prototype.renderEnd = function () {
        this.glCommitContext();
    };
    OpenGLGraphicsImpl.prototype.applyFont = function () {
    };
    OpenGLGraphicsImpl.prototype.smooth = function () {
    };
    OpenGLGraphicsImpl.prototype.copy = function () {
        return OpenGLGraphicsImpl.NULL_COPY;
    };
    OpenGLGraphicsImpl.prototype.getOffscreen = function () {
        return this.offscreen;
    };
    OpenGLGraphicsImpl.prototype.clip = function (x, y, width, height) {
        var t1 = this.transformCtx.getTransform().transformPoint({ x: x, y: y });
        var t2 = this.transformCtx.getTransform().transformPoint({ x: x + width, y: y + height });
        this.currentContextState.clipX = t1.x;
        this.currentContextState.clipY = t1.y;
        this.currentContextState.clipX2 = t2.x;
        this.currentContextState.clipY2 = t2.y;
    };
    OpenGLGraphicsImpl.prototype.createOffscreen = function () {
        this.offscreenId++;
        var offscreen = new OpenGLOffscreen_1.OpenGlOffscreen(this.gl, this, this.offscreenId);
        this.offscreens.push(offscreen);
        if (this.offscreens.length === 50) {
            Log_1.GuteLog.log("50 offscreens have been created!");
        }
        return offscreen;
    };
    OpenGLGraphicsImpl.prototype.drawToOffscreen = function (screen) {
        if (this.offscreen) {
            this.offscreen.unuse();
        }
        this.offscreen = screen;
        if (this.offscreen) {
            this.offscreen.use();
        }
    };
    OpenGLGraphicsImpl.prototype.drawOffscreen = function (screen) {
        if (!this.shaderProgram) {
            return;
        }
        var offscreen = screen;
        this.glCommitContext();
        this.glStartContext();
        this.gl.uniform2f(this.getUniformLoc("uTexSize"), offscreen.width, offscreen.height);
        this.gl.bindTexture(this.gl.TEXTURE_2D, offscreen.texture);
        this._drawImage(-100, 0, offscreen.height, offscreen.width, -offscreen.height, 0, 0, offscreen.width, offscreen.height, 0xFFFFFF00, 255);
        this.glCommitContext();
        this.gl.uniform2f(this.getUniformLoc("uTexSize"), this.texWidth, this.texHeight);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.currentTexture);
        this.glStartContext();
    };
    OpenGLGraphicsImpl.prototype.drawScaledOffscreen = function (screen, x, y, width, height) {
        if (!this.shaderProgram) {
            return;
        }
        var offscreen = screen;
        this.glCommitContext();
        this.glStartContext();
        this.gl.uniform2f(this.getUniformLoc("uTexSize"), offscreen.width, offscreen.height);
        this.gl.bindTexture(this.gl.TEXTURE_2D, offscreen.texture);
        this._drawImage(-100, 0, offscreen.height, offscreen.width, -offscreen.height, x, y, width, height, 0xFFFFFF00, 255);
        this.glCommitContext();
        this.gl.uniform2f(this.getUniformLoc("uTexSize"), this.texWidth, this.texHeight);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.currentTexture);
        this.glStartContext();
    };
    OpenGLGraphicsImpl.prototype.drawScaledOffscreenSegment = function (screen, sx, sy, swidth, sheight, x, y, width, height) {
        if (!this.shaderProgram) {
            return;
        }
        var offscreen = screen;
        this.glCommitContext();
        this.glStartContext();
        this.gl.uniform2f(this.getUniformLoc("uTexSize"), offscreen.width, offscreen.height);
        this.gl.bindTexture(this.gl.TEXTURE_2D, offscreen.texture);
        this._drawImage(-100, sx, offscreen.height - sy, swidth, -sheight, x, y, width, height, 0xFFFFFF00, 255);
        this.glCommitContext();
        this.gl.uniform2f(this.getUniformLoc("uTexSize"), this.texWidth, this.texHeight);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.currentTexture);
        this.glStartContext();
    };
    OpenGLGraphicsImpl.prototype.fillRect = function (x, y, width, height, col) {
        var rgba = colToNumber(col);
        var a = this.alpha < 255 ? this.alpha : (rgba % 256);
        if (a < 255) {
            rgba = (rgba & 0xFFFFFF00) | a;
        }
        this._drawImage(0, 0, 0, 1, 1, x, y, width, height, rgba, a);
    };
    OpenGLGraphicsImpl.prototype.fillCircle = function (x, y, radius, col) {
    };
    OpenGLGraphicsImpl.prototype.drawCircle = function (x, y, radius, col, width) {
    };
    OpenGLGraphicsImpl.prototype.setLineDash = function (segments) {
    };
    OpenGLGraphicsImpl.prototype.drawLine = function (x1, y1, x2, y2, col, width) {
    };
    OpenGLGraphicsImpl.prototype.drawBitmap = function (x, y, bitmap) {
        if (bitmap) {
            bitmap.draw(this, x, y);
        }
    };
    OpenGLGraphicsImpl.prototype.drawScaledBitmap = function (x, y, width, height, bitmap) {
        if (bitmap) {
            bitmap.drawScaled(this, x, y, width, height);
        }
    };
    OpenGLGraphicsImpl.prototype.clearRect = function (x, y, width, height) {
        this.glCommitContext();
        this.glStartContext();
        this.gl.blendFunc(this.gl.ZERO, this.gl.ZERO);
        this.fillRect(x, y, width, height, "rgba(0,0,0,0)");
        this.glCommitContext();
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.glStartContext();
    };
    OpenGLGraphicsImpl.prototype.clear = function () {
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    };
    OpenGLGraphicsImpl.prototype.setFont = function (font) {
        // IGNORED
    };
    OpenGLGraphicsImpl.prototype.setComposite = function (name) {
        if (name === "multiply") {
            this.glCommitContext();
            this.glStartContext();
            this.gl.blendFunc(this.gl.ZERO, this.gl.SRC_COLOR);
        }
        if (name === "source-over") {
            this.glCommitContext();
            this.glStartContext();
            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        }
    };
    OpenGLGraphicsImpl.prototype.setFontSize = function (size) {
        // IGNORED
    };
    OpenGLGraphicsImpl.prototype.drawString = function (x, y, text, col) {
        // IGNORED
    };
    OpenGLGraphicsImpl.prototype.translate = function (x, y) {
        this.transformCtx.translate(x, y);
    };
    OpenGLGraphicsImpl.prototype.scale = function (x, y) {
        this.transformCtx.scale(x, y);
    };
    OpenGLGraphicsImpl.prototype.push = function () {
        this.saves++;
        this.transformCtx.save();
    };
    OpenGLGraphicsImpl.prototype.pop = function () {
        this.saves--;
        this.transformCtx.restore();
        this.resetState();
    };
    OpenGLGraphicsImpl.prototype.getWidth = function () {
        return this.canvas.width;
    };
    OpenGLGraphicsImpl.prototype.getHeight = function () {
        return this.canvas.height;
    };
    OpenGLGraphicsImpl.prototype.fitScreen = function (pixelScale) {
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var realWidth = Math.floor(width / pixelScale) * pixelScale;
        var realHeight = Math.floor(height / pixelScale) * pixelScale;
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
    OpenGLGraphicsImpl.prototype.getStringWidth = function (text) {
        return 0;
    };
    OpenGLGraphicsImpl.prototype.setAlpha = function (alpha) {
        this.currentContextState.alpha = Math.floor(alpha * 255);
    };
    OpenGLGraphicsImpl.prototype.getTransform = function () {
        return this.transformCtx.getTransform();
    };
    OpenGLGraphicsImpl.NULL_COPY = new OpenGLBitmap_1.NullBitmap();
    return OpenGLGraphicsImpl;
}());
exports.OpenGLGraphicsImpl = OpenGLGraphicsImpl;


/***/ }),

/***/ "./src/opengl/OpenGLOffscreen.ts":
/*!***************************************!*\
  !*** ./src/opengl/OpenGLOffscreen.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpenGlOffscreen = void 0;
var OpenGlOffscreen = /** @class */ (function () {
    function OpenGlOffscreen(gl, graphics, id) {
        this.texture = null;
        this.fb = null;
        this.id = 0;
        this.inuse = false;
        this.clipX = 0;
        this.clipY = 0;
        this.clipX2 = 0;
        this.clipY2 = 0;
        this.alpha = 255;
        this.refreshRequired = false;
        this.gl = gl;
        this.width = 0;
        this.height = 0;
        this.graphics = graphics;
        this.id = id;
    }
    OpenGlOffscreen.prototype.getWidth = function () {
        return this.width;
    };
    OpenGlOffscreen.prototype.getHeight = function () {
        return this.height;
    };
    OpenGlOffscreen.prototype.recover = function () {
        this.fb = null;
        this.texture = null;
        this.refreshRequired = true;
        this.setDimension(this.width, this.height);
    };
    OpenGlOffscreen.prototype.use = function () {
        if (!this.graphics.shaderProgram) {
            return;
        }
        if (this.inuse) {
            return;
        }
        this.refreshRequired = false;
        this.graphics.glCommitContext();
        this.inuse = true;
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fb);
        this.gl.uniform2f(this.graphics.getUniformLoc("uCanvasSize"), Math.floor(this.width / 2), Math.floor(this.height / 2));
        this.gl.viewport(0, 0, this.width, this.height);
        this.graphics.currentContextState = this;
        this.graphics.push();
        this.graphics.transformCtx.resetTransform();
        this.graphics.resetState();
        this.graphics.glStartContext();
    };
    OpenGlOffscreen.prototype.unuse = function () {
        if (!this.graphics.shaderProgram) {
            return;
        }
        if (!this.inuse) {
            return;
        }
        this.inuse = false;
        this.graphics.glCommitContext();
        this.graphics.currentContextState = this.graphics;
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.viewport(0, 0, this.graphics.canvas.width, this.graphics.canvas.height);
        this.gl.uniform2f(this.graphics.getUniformLoc("uCanvasSize"), this.graphics.canvas.width / 2, this.graphics.canvas.height / 2);
        this.graphics.pop();
        this.graphics.glStartContext();
    };
    OpenGlOffscreen.prototype.needsRefresh = function () {
        return this.refreshRequired;
    };
    OpenGlOffscreen.prototype.release = function () {
        if (this.texture) {
            this.gl.deleteTexture(this.texture);
        }
        if (this.fb) {
            this.gl.deleteFramebuffer(this.fb);
            this.fb = 0;
        }
        this.width = 0;
        this.height = 0;
    };
    OpenGlOffscreen.prototype.setDimension = function (width, height) {
        if (this.width !== width || this.height !== height || !this.fb) {
            this.release();
            this.width = width;
            this.height = height;
            this.texture = this.gl.createTexture();
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
            var level = 0;
            var internalFormat = this.gl.RGBA;
            var border = 0;
            var format = this.gl.RGBA;
            var type = this.gl.UNSIGNED_BYTE;
            var data = null;
            this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, width, height, border, format, type, data);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
            this.fb = this.gl.createFramebuffer();
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fb);
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.texture, level);
            this.gl.clearColor(0, 0, 0, 1);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.graphics.currentTexture);
        }
    };
    return OpenGlOffscreen;
}());
exports.OpenGlOffscreen = OpenGlOffscreen;


/***/ }),

/***/ "./src/opengl/OpenGLTilesetImpl.ts":
/*!*****************************************!*\
  !*** ./src/opengl/OpenGLTilesetImpl.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpenGLTilesetImpl = void 0;
var Log_1 = __webpack_require__(/*! ../Log */ "./src/Log.ts");
var OpenGLTile = /** @class */ (function () {
    function OpenGLTile(parent, image, x, y, width, height, scale) {
        this.name = "tile";
        this.texX = 0;
        this.texY = 0;
        this.texIndex = 0;
        this.col = 0xFFFFFF00;
        this.parent = parent;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.loaded = true;
        this.image = image;
    }
    OpenGLTile.prototype.copyWithCol = function (rgba) {
        var copy = new OpenGLTile(this.parent, this.image, this.x, this.y, this.width, this.height, this.scale);
        copy.loaded = true;
        copy.col = rgba;
        copy.texX = this.texX;
        copy.texY = this.texY;
        return copy;
    };
    OpenGLTile.prototype.draw = function (graphics, x, y) {
        var g = graphics;
        this.texX = this.parent.texX + this.x;
        this.texY = this.parent.texY + this.y;
        this.texIndex = this.parent.texIndex;
        g._drawBitmap(this, x, y, Math.floor(this.width * this.scale), Math.floor(this.height * this.scale), this.col);
    };
    OpenGLTile.prototype.drawScaled = function (graphics, x, y, width, height) {
        var g = graphics;
        this.texX = this.parent.texX + this.x;
        this.texY = this.parent.texY + this.y;
        this.texIndex = this.parent.texIndex;
        g._drawBitmap(this, x, y, width, height, this.col);
    };
    OpenGLTile.prototype.initOnFirstClick = function () {
    };
    return OpenGLTile;
}());
var OpenGLTilesetImpl = /** @class */ (function () {
    function OpenGLTilesetImpl(graphics, url, dataUrlLoader, tileWidth, tileHeight, scale, pal) {
        if (scale === void 0) { scale = 1; }
        if (pal === void 0) { pal = undefined; }
        var _this = this;
        this.loaded = false;
        this.bitmaps = [];
        this.scanline = 0;
        this.tileCount = 0;
        this.onLoaded = function () { };
        this.texX = 0;
        this.texY = 0;
        this.texIndex = 0;
        this.tintTiles = {};
        this.tileWidth = this.originalTileWidth = tileWidth;
        this.tileHeight = this.originalTileHeight = tileHeight;
        this.scale = scale;
        this.name = url;
        this.image = new Image();
        this.image.onerror = function () {
            Log_1.GuteLog.log("Error loading: " + url);
        };
        this.image.onload = function () {
            _this.scanline = Math.floor(_this.image.width / _this.tileWidth);
            var depth = Math.floor(_this.image.height / _this.tileHeight);
            _this.tileCount = depth * _this.scanline;
            if (pal) {
                pal.adjustImage(_this.image).then(function (image) {
                    _this.image = image;
                    // cut the image into pieces
                    for (var y = 0; y < depth; y++) {
                        for (var x = 0; x < _this.scanline; x++) {
                            _this.bitmaps.push(new OpenGLTile(_this, _this.image, x * _this.tileWidth, y * _this.tileHeight, _this.tileWidth, _this.tileHeight, scale));
                        }
                    }
                    _this.tileWidth *= scale;
                    _this.tileHeight *= scale;
                    _this.onLoaded();
                    graphics.registerImage(_this);
                    _this.loaded = true;
                });
            }
            else {
                // cut the image into pieces
                for (var y = 0; y < depth; y++) {
                    for (var x = 0; x < _this.scanline; x++) {
                        _this.bitmaps.push(new OpenGLTile(_this, _this.image, x * _this.tileWidth, y * _this.tileHeight, _this.tileWidth, _this.tileHeight, scale));
                    }
                }
                _this.tileWidth *= scale;
                _this.tileHeight *= scale;
                _this.onLoaded();
                graphics.registerImage(_this);
                _this.loaded = true;
            }
        };
        if (dataUrlLoader) {
            dataUrlLoader.then(function (blob) {
                var urlCreator = window.URL || window.webkitURL;
                _this.image.src = urlCreator.createObjectURL(blob);
            });
        }
        else {
            this.image.src = url;
        }
    }
    Object.defineProperty(OpenGLTilesetImpl.prototype, "height", {
        get: function () {
            return this.image.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenGLTilesetImpl.prototype, "width", {
        get: function () {
            return this.image.width;
        },
        enumerable: false,
        configurable: true
    });
    OpenGLTilesetImpl.prototype.draw = function (graphics, x, y) {
    };
    OpenGLTilesetImpl.prototype.drawScaled = function (graphics, x, y, width, height) {
    };
    OpenGLTilesetImpl.prototype.getBlockColorTile = function (tile, tintName, rgba) {
        var tiles = this.tintTiles[tintName];
        if (!tiles) {
            tiles = this.tintTiles[tintName] = [];
        }
        var tileRecord = tiles[tile];
        if (!tileRecord) {
            rgba[0] *= 255;
            rgba[1] *= 255;
            rgba[2] *= 255;
            var value = (rgba[0] * (256 * 256 * 256)) + (rgba[1] * (256 * 256)) + (rgba[2] * 256) + Math.floor(rgba[3] * 255);
            tiles[tile] = tileRecord = this.getTile(tile).copyWithCol(value);
        }
        return tileRecord;
    };
    OpenGLTilesetImpl.prototype.getShadedTile = function (tile, tintName, shade) {
        var tiles = this.tintTiles[tintName];
        if (!tiles) {
            tiles = this.tintTiles[tintName] = [];
        }
        var tileRecord = tiles[tile];
        if (!tileRecord) {
            var value = (255 * (256 * 256 * 256)) + (255 * (256 * 256)) + (255 * 256) + Math.floor(shade * 255);
            tiles[tile] = tileRecord = this.getTile(tile).copyWithCol(value);
        }
        return tileRecord;
    };
    OpenGLTilesetImpl.prototype.getTintedTile = function (tile, tintName, source) {
        var tiles = this.tintTiles[tintName];
        if (!tiles) {
            tiles = this.tintTiles[tintName] = [];
        }
        var tileRecord = tiles[tile];
        if (!tileRecord) {
            var rgba = __spreadArray([], source, true);
            rgba[0] *= 255;
            rgba[1] *= 255;
            rgba[2] *= 255;
            if (!rgba[3]) {
                rgba[3] = 1;
            }
            var value = (rgba[0] * (256 * 256 * 256)) + (rgba[1] * (256 * 256)) + (rgba[2] * 256) + Math.floor(rgba[3] * 255);
            tiles[tile] = tileRecord = this.getTile(tile).copyWithCol(value);
        }
        return tileRecord;
    };
    OpenGLTilesetImpl.prototype.modify = function (modification) {
        var canvas = document.createElement("canvas");
        canvas.width = this.image.width;
        canvas.height = this.image.height;
        var ctx = canvas.getContext("2d");
        if (ctx) {
            ctx.drawImage(this.image, 0, 0);
            var id = ctx.getImageData(0, 0, canvas.width, canvas.height);
            modification(id);
            ctx.putImageData(id, 0, 0);
        }
        this.image = new Image();
        this.image.src = canvas.toDataURL();
        for (var _i = 0, _a = this.bitmaps; _i < _a.length; _i++) {
            var tile = _a[_i];
            tile.image = this.image;
        }
        return this;
    };
    OpenGLTilesetImpl.prototype.getTilesAcross = function () {
        return this.scanline;
    };
    OpenGLTilesetImpl.prototype.getTileWidth = function () {
        return this.tileWidth;
    };
    OpenGLTilesetImpl.prototype.getTileHeight = function () {
        return this.tileHeight;
    };
    OpenGLTilesetImpl.prototype.getTileCount = function () {
        return this.tileCount;
    };
    OpenGLTilesetImpl.prototype.initOnFirstClick = function () {
    };
    OpenGLTilesetImpl.prototype.getTile = function (tile) {
        return this.bitmaps[tile];
    };
    return OpenGLTilesetImpl;
}());
exports.OpenGLTilesetImpl = OpenGLTilesetImpl;


/***/ }),

/***/ "./src/path/AStarPathFinder.ts":
/*!*************************************!*\
  !*** ./src/path/AStarPathFinder.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AStarPathFinder = void 0;
var MapNode_1 = __webpack_require__(/*! ./MapNode */ "./src/path/MapNode.ts");
var Path_1 = __webpack_require__(/*! ./Path */ "./src/path/Path.ts");
var AStarPathFinder = /** @class */ (function () {
    function AStarPathFinder(map) {
        this.objectPool = [];
        this.openList = [];
        this.parentList = [];
        this.open = [];
        this.closed = [];
        this.pathFindCounter = 1;
        this.setMap(map);
    }
    AStarPathFinder.prototype.setMap = function (map) {
        this.width = map.getMapWidth();
        this.height = map.getMapHeight();
        this.map = map;
        if (!this.open) {
            this.open = new Array();
        }
        if (!this.closed) {
            this.closed = new Array();
        }
        for (var i = 0; i < this.width * this.height; i++) {
            var o = this.open[i];
            var c = this.closed[i];
            if (!o) {
                this.open[i] = o = new Array();
                for (var j = 0; j < 5; j++) {
                    o.push(0);
                }
            }
            if (!c) {
                this.closed[i] = c = new Array();
                for (var j = 0; j < 5; j++) {
                    c.push(0);
                }
            }
            for (var j = 0; j < 5; j++) {
                o[j] = 0;
                c[j] = 0;
            }
        }
    };
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
        if (this.tx.length === 0) {
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
        if (this.blocked(sx, sy, x, y)) {
            this.closed[x + (y * this.width)][dir] = this.pathFindCounter;
            return;
        }
        // otherwise it's a possible step add it to the open
        this.open[x + (y * this.width)][dir] = this.pathFindCounter;
        var dx = Math.abs(this.cx - x);
        var dy = Math.abs(this.cy - y);
        var node = this.createMapNode(x, y, parent, dx + dy);
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
        if (parent != null) {
            node.depth = parent.depth + 1;
        }
        else {
            node.depth = 0;
        }
        node.h = h + node.depth;
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

"use strict";

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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Path = void 0;
var Log_1 = __webpack_require__(/*! ../Log */ "./src/Log.ts");
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
    Path.prototype.copy = function () {
        var copy = new Path();
        for (var _i = 0, _a = this.steps; _i < _a.length; _i++) {
            var step = _a[_i];
            copy.steps.push(new Step_1.Step(step.x, step.y));
        }
        if (copy.steps.length === 0) {
            Log_1.GuteLog.log("Created copy of path with zero steps: ");
        }
        return copy;
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

"use strict";

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

"use strict";

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
var Log_1 = __webpack_require__(/*! ../Log */ "./src/Log.ts");
var MapEntity_1 = __webpack_require__(/*! ./MapEntity */ "./src/tilemaps/MapEntity.ts");
var MapLayer_1 = __webpack_require__(/*! ./MapLayer */ "./src/tilemaps/MapLayer.ts");
var MapLevel_1 = __webpack_require__(/*! ./MapLevel */ "./src/tilemaps/MapLevel.ts");
var MapWorld_1 = __webpack_require__(/*! ./MapWorld */ "./src/tilemaps/MapWorld.ts");
var LDTKWorld = /** @class */ (function (_super) {
    __extends(LDTKWorld, _super);
    function LDTKWorld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "world";
        _this.tilesets = [];
        return _this;
    }
    LDTKWorld.prototype.initOnFirstClick = function () {
    };
    LDTKWorld.prototype.load = function (file, loader) {
        var _this = this;
        this.name = file;
        return loader(file).then(function (json) {
            var entityRefs = [];
            var entityMap = {};
            _this.gridSize = json.defaultGridSize;
            var tileset = json.defs.tilesets[0];
            _this.tilesets = json.defs.tilesets;
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
                level.worldDepth = levelData.worldDepth;
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
                    LDTKWorld.loadLayers(level, data.layerInstances, entityRefs, entityMap);
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
                // resolve all entity ids now that we have all the data
                for (var _i = 0, entityRefs_1 = entityRefs; _i < entityRefs_1.length; _i++) {
                    var ref = entityRefs_1[_i];
                    if (ref.value instanceof Array) {
                        var value_1 = [];
                        for (var _a = 0, _b = ref.value; _a < _b.length; _a++) {
                            var item = _b[_a];
                            var entity = entityMap[item];
                            if (entity) {
                                value_1.push(entity);
                            }
                        }
                        ref.entity.fields[ref.field] = value_1;
                    }
                    else {
                        var entity = entityMap[ref.value];
                        if (entity) {
                            ref.entity.fields[ref.field] = entity;
                        }
                    }
                }
                _this.loaded = true;
                return _this;
            });
        }).catch(function (e) {
            Log_1.GuteLog.error(e);
            throw e;
        });
    };
    LDTKWorld.loadLayers = function (level, layerInstances, entityRefs, entityMap) {
        var _loop_2 = function (layerData) {
            if (layerData.__type === "Entities") {
                for (var _a = 0, _b = layerData.entityInstances; _a < _b.length; _a++) {
                    var entityData = _b[_a];
                    var entity = new MapEntity_1.MapEntity(level, entityData.px[0] / layerData.__gridSize, entityData.px[1] / layerData.__gridSize, entityData.width / layerData.__gridSize, entityData.height / layerData.__gridSize, entityData.__identifier);
                    entity.id = entityData.iid;
                    entityMap[entityData.iid] = entity;
                    for (var _c = 0, _d = entityData.fieldInstances; _c < _d.length; _c++) {
                        var fieldInstance = _d[_c];
                        switch (fieldInstance.__type) {
                            case "EntityRef": // save information to resolve refs to entities later when all information will be loaded
                                entityRefs.push({
                                    value: fieldInstance.__value.entityIid,
                                    entity: entity,
                                    field: fieldInstance.__identifier
                                });
                                break;
                            case "Array<EntityRef>":
                                entityRefs.push({
                                    value: fieldInstance.__value.map(function (it) { return it.entityIid; }),
                                    entity: entity,
                                    field: fieldInstance.__identifier
                                });
                                break;
                            default:
                                entity.fields[fieldInstance.__identifier] = fieldInstance.__value;
                                break;
                        }
                    }
                    level.entities.push(entity);
                }
            }
            else {
                var compression = LDTKWorld.LAYER_COMPRESSIONS.find(function (c) { return c.from === layerData.__identifier; });
                var layer = void 0;
                var offset = 0;
                if (compression) {
                    var targetLayer = level.layerByName[compression.to];
                    if (!targetLayer) {
                        throw "Unable to find compression layer: " + compression.to;
                    }
                    layer = targetLayer;
                    offset = compression.offset;
                }
                else {
                    layer = new MapLayer_1.MapLayer(level, layerData.__identifier, layerData.__cWid, layerData.__cHei);
                }
                var tileset = level.world.tilesets.find(function (t) { return t.uid === layerData.__tilesetDefUid; });
                var scanline = tileset.pxWid / tileset.tileGridSize;
                var tileSize = tileset.tileGridSize;
                for (var _e = 0, _f = layerData.gridTiles; _e < _f.length; _e++) {
                    var tile = _f[_e];
                    var x = Math.floor(tile.px[0] / layerData.__gridSize);
                    var y = Math.floor(tile.px[1] / layerData.__gridSize);
                    var posIndex = x + (y * layer.width);
                    var tx = Math.floor(tile.src[0] / tileSize);
                    var ty = Math.floor(tile.src[1] / tileSize);
                    var tileIndex = (ty * scanline) + tx;
                    layer.tiles[posIndex] = tileIndex + 1 + offset;
                    layer.flips[posIndex] = tile.f;
                }
                if (!compression) {
                    level.layers.splice(0, 0, layer);
                    level.layerByName[layer.name] = layer;
                }
            }
        };
        for (var _i = 0, layerInstances_1 = layerInstances; _i < layerInstances_1.length; _i++) {
            var layerData = layerInstances_1[_i];
            _loop_2(layerData);
        }
    };
    LDTKWorld.LAYER_COMPRESSIONS = [];
    return LDTKWorld;
}(MapWorld_1.MapWorld));
exports.LDTKWorld = LDTKWorld;


/***/ }),

/***/ "./src/tilemaps/MapEntity.ts":
/*!***********************************!*\
  !*** ./src/tilemaps/MapEntity.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

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
        result.id = this.id;
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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapLayer = void 0;
var MapLayer = /** @class */ (function () {
    function MapLayer(level, name, width, height) {
        this.name = name;
        this.level = level;
        this.width = width;
        this.height = height;
        this.tiles = [];
        this.flips = [];
        for (var i = 0; i < this.width * this.height; i++) {
            this.tiles.push(0);
            this.flips.push(0);
        }
    }
    MapLayer.prototype.getFlipFlags = function (x, y) {
        if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)) {
            return 0;
        }
        var posIndex = x + (y * this.width);
        return this.flips[posIndex];
    };
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
            result.flips[i] = this.flips[i];
        }
        return result;
    };
    MapLayer.FLIP_X = 1;
    MapLayer.FLIP_Y = 2;
    return MapLayer;
}());
exports.MapLayer = MapLayer;


/***/ }),

/***/ "./src/tilemaps/MapLevel.ts":
/*!**********************************!*\
  !*** ./src/tilemaps/MapLevel.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
        this.worldDepth = 0;
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
        levelCopy.worldDepth = this.worldDepth;
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

"use strict";

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFD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SUFDckIsSUFBSSxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDakUsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUMxQixJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUMxQixJQUFJLFVBQVUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxJQUFJLFVBQVUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixJQUFJLFVBQVUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixJQUFJLENBQUMsR0FBRyxVQUFVLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsR0FBUTtJQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDbkUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNuRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ25FLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ3JELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ3JELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ3JELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUMsR0FBRyxDQUFDO0lBQzdELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxD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QVM7UUFDdEIsVUFBVSxFQUFFLFNBQVM7UUFDckIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLFNBQVM7UUFDakIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsVUFBVSxFQUFFLFNBQVM7UUFDckIsVUFBVSxFQUFFLFNBQVM7UUFDckIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFF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QyxTQUFTLENBQUMsQ0FBQztZQUMvQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBcERZLDRCQUFROzs7Ozs7Ozs7Ozs7Ozs7QUNEckI7SUFPRTtRQU5BLFdBQU0sR0FBNkIsRUFBRSxDQUFDO1FBQ3RDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsV0FBTSxHQUFZLEtBQUssQ0FBQztJQUd4QixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFUWSw0QkFBUTs7Ozs7OztVQ0hyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2d1dGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2d1dGUvLi9ub2RlX21vZHVsZXMvanN6aXAvZGlzdC9qc3ppcC5taW4uanMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL25vZGVfbW9kdWxlcy9wb3RwYWNrL2luZGV4LmpzIiwid2VicGFjazovL2d1dGUvLi9ub2RlX21vZHVsZXMveGJyLWpzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0dyYXBoaWNzLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvR3V0ZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0tleXMudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9Mb2cudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9Tb3VuZFNjYXBlLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9CaXRtYXBJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9Gb250SW1wbC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL2ltcGwvR3JhcGhpY3NJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9QYWxldHRlLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9Tb3VuZEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL1RpbGVzZXRJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9vcGVuZ2wvT3BlbkdMQml0bWFwLjEudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9vcGVuZ2wvT3BlbkdMQml0bWFwLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvb3BlbmdsL09wZW5HTEdyYXBoaWNzSW1wbC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL29wZW5nbC9PcGVuR0xPZmZzY3JlZW4udHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9vcGVuZ2wvT3BlbkdMVGlsZXNldEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9wYXRoL0FTdGFyUGF0aEZpbmRlci50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvTWFwTm9kZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvUGF0aC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvU3RlcC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL0xEVEtXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcEVudGl0eS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcExheWVyLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvdGlsZW1hcHMvTWFwTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy90aWxlbWFwcy9NYXBXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2d1dGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2d1dGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ3V0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2d1dGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJndXRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImd1dGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiLyohXG5cbkpTWmlwIHYzLjEwLjEgLSBBIEphdmFTY3JpcHQgY2xhc3MgZm9yIGdlbmVyYXRpbmcgYW5kIHJlYWRpbmcgemlwIGZpbGVzXG48aHR0cDovL3N0dWFydGsuY29tL2pzemlwPlxuXG4oYykgMjAwOS0yMDE2IFN0dWFydCBLbmlnaHRsZXkgPHN0dWFydCBbYXRdIHN0dWFydGsuY29tPlxuRHVhbCBsaWNlbmNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2Ugb3IgR1BMdjMuIFNlZSBodHRwczovL3Jhdy5naXRodWIuY29tL1N0dWsvanN6aXAvbWFpbi9MSUNFTlNFLm1hcmtkb3duLlxuXG5KU1ppcCB1c2VzIHRoZSBsaWJyYXJ5IHBha28gcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIDpcbmh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvcGFrby9ibG9iL21haW4vTElDRU5TRVxuKi9cblxuIWZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXsoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzKS5KU1ppcD1lKCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiBzKGEsbyxoKXtmdW5jdGlvbiB1KHIsZSl7aWYoIW9bcl0pe2lmKCFhW3JdKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFlJiZ0KXJldHVybiB0KHIsITApO2lmKGwpcmV0dXJuIGwociwhMCk7dmFyIG49bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIityK1wiJ1wiKTt0aHJvdyBuLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsbn12YXIgaT1vW3JdPXtleHBvcnRzOnt9fTthW3JdWzBdLmNhbGwoaS5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciB0PWFbcl1bMV1bZV07cmV0dXJuIHUodHx8ZSl9LGksaS5leHBvcnRzLHMsYSxvLGgpfXJldHVybiBvW3JdLmV4cG9ydHN9Zm9yKHZhciBsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsZT0wO2U8aC5sZW5ndGg7ZSsrKXUoaFtlXSk7cmV0dXJuIHV9KHsxOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGQ9ZShcIi4vdXRpbHNcIiksYz1lKFwiLi9zdXBwb3J0XCIpLHA9XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiO3IuZW5jb2RlPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxyLG4saSxzLGEsbyxoPVtdLHU9MCxsPWUubGVuZ3RoLGY9bCxjPVwic3RyaW5nXCIhPT1kLmdldFR5cGVPZihlKTt1PGUubGVuZ3RoOylmPWwtdSxuPWM/KHQ9ZVt1KytdLHI9dTxsP2VbdSsrXTowLHU8bD9lW3UrK106MCk6KHQ9ZS5jaGFyQ29kZUF0KHUrKykscj11PGw/ZS5jaGFyQ29kZUF0KHUrKyk6MCx1PGw/ZS5jaGFyQ29kZUF0KHUrKyk6MCksaT10Pj4yLHM9KDMmdCk8PDR8cj4+NCxhPTE8Zj8oMTUmcik8PDJ8bj4+Njo2NCxvPTI8Zj82MyZuOjY0LGgucHVzaChwLmNoYXJBdChpKStwLmNoYXJBdChzKStwLmNoYXJBdChhKStwLmNoYXJBdChvKSk7cmV0dXJuIGguam9pbihcIlwiKX0sci5kZWNvZGU9ZnVuY3Rpb24oZSl7dmFyIHQscixuLGkscyxhLG89MCxoPTAsdT1cImRhdGE6XCI7aWYoZS5zdWJzdHIoMCx1Lmxlbmd0aCk9PT11KXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGlucHV0LCBpdCBsb29rcyBsaWtlIGEgZGF0YSB1cmwuXCIpO3ZhciBsLGY9MyooZT1lLnJlcGxhY2UoL1teQS1aYS16MC05Ky89XS9nLFwiXCIpKS5sZW5ndGgvNDtpZihlLmNoYXJBdChlLmxlbmd0aC0xKT09PXAuY2hhckF0KDY0KSYmZi0tLGUuY2hhckF0KGUubGVuZ3RoLTIpPT09cC5jaGFyQXQoNjQpJiZmLS0sZiUxIT0wKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGlucHV0LCBiYWQgY29udGVudCBsZW5ndGguXCIpO2ZvcihsPWMudWludDhhcnJheT9uZXcgVWludDhBcnJheSgwfGYpOm5ldyBBcnJheSgwfGYpO288ZS5sZW5ndGg7KXQ9cC5pbmRleE9mKGUuY2hhckF0KG8rKykpPDwyfChpPXAuaW5kZXhPZihlLmNoYXJBdChvKyspKSk+PjQscj0oMTUmaSk8PDR8KHM9cC5pbmRleE9mKGUuY2hhckF0KG8rKykpKT4+MixuPSgzJnMpPDw2fChhPXAuaW5kZXhPZihlLmNoYXJBdChvKyspKSksbFtoKytdPXQsNjQhPT1zJiYobFtoKytdPXIpLDY0IT09YSYmKGxbaCsrXT1uKTtyZXR1cm4gbH19LHtcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGlsc1wiOjMyfV0sMjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL2V4dGVybmFsXCIpLGk9ZShcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIikscz1lKFwiLi9zdHJlYW0vQ3JjMzJQcm9iZVwiKSxhPWUoXCIuL3N0cmVhbS9EYXRhTGVuZ3RoUHJvYmVcIik7ZnVuY3Rpb24gbyhlLHQscixuLGkpe3RoaXMuY29tcHJlc3NlZFNpemU9ZSx0aGlzLnVuY29tcHJlc3NlZFNpemU9dCx0aGlzLmNyYzMyPXIsdGhpcy5jb21wcmVzc2lvbj1uLHRoaXMuY29tcHJlc3NlZENvbnRlbnQ9aX1vLnByb3RvdHlwZT17Z2V0Q29udGVudFdvcmtlcjpmdW5jdGlvbigpe3ZhciBlPW5ldyBpKG4uUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcHJlc3NlZENvbnRlbnQpKS5waXBlKHRoaXMuY29tcHJlc3Npb24udW5jb21wcmVzc1dvcmtlcigpKS5waXBlKG5ldyBhKFwiZGF0YV9sZW5ndGhcIikpLHQ9dGhpcztyZXR1cm4gZS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7aWYodGhpcy5zdHJlYW1JbmZvLmRhdGFfbGVuZ3RoIT09dC51bmNvbXByZXNzZWRTaXplKXRocm93IG5ldyBFcnJvcihcIkJ1ZyA6IHVuY29tcHJlc3NlZCBkYXRhIHNpemUgbWlzbWF0Y2hcIil9KSxlfSxnZXRDb21wcmVzc2VkV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBpKG4uUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcHJlc3NlZENvbnRlbnQpKS53aXRoU3RyZWFtSW5mbyhcImNvbXByZXNzZWRTaXplXCIsdGhpcy5jb21wcmVzc2VkU2l6ZSkud2l0aFN0cmVhbUluZm8oXCJ1bmNvbXByZXNzZWRTaXplXCIsdGhpcy51bmNvbXByZXNzZWRTaXplKS53aXRoU3RyZWFtSW5mbyhcImNyYzMyXCIsdGhpcy5jcmMzMikud2l0aFN0cmVhbUluZm8oXCJjb21wcmVzc2lvblwiLHRoaXMuY29tcHJlc3Npb24pfX0sby5jcmVhdGVXb3JrZXJGcm9tPWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gZS5waXBlKG5ldyBzKS5waXBlKG5ldyBhKFwidW5jb21wcmVzc2VkU2l6ZVwiKSkucGlwZSh0LmNvbXByZXNzV29ya2VyKHIpKS5waXBlKG5ldyBhKFwiY29tcHJlc3NlZFNpemVcIikpLndpdGhTdHJlYW1JbmZvKFwiY29tcHJlc3Npb25cIix0KX0sdC5leHBvcnRzPW99LHtcIi4vZXh0ZXJuYWxcIjo2LFwiLi9zdHJlYW0vQ3JjMzJQcm9iZVwiOjI1LFwiLi9zdHJlYW0vRGF0YUxlbmd0aFByb2JlXCI6MjYsXCIuL3N0cmVhbS9EYXRhV29ya2VyXCI6Mjd9XSwzOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIik7ci5TVE9SRT17bWFnaWM6XCJcXDBcXDBcIixjb21wcmVzc1dvcmtlcjpmdW5jdGlvbigpe3JldHVybiBuZXcgbihcIlNUT1JFIGNvbXByZXNzaW9uXCIpfSx1bmNvbXByZXNzV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBuKFwiU1RPUkUgZGVjb21wcmVzc2lvblwiKX19LHIuREVGTEFURT1lKFwiLi9mbGF0ZVwiKX0se1wiLi9mbGF0ZVwiOjcsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6Mjh9XSw0OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vdXRpbHNcIik7dmFyIG89ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD1bXSxyPTA7cjwyNTY7cisrKXtlPXI7Zm9yKHZhciBuPTA7bjw4O24rKyllPTEmZT8zOTg4MjkyMzg0XmU+Pj4xOmU+Pj4xO3Rbcl09ZX1yZXR1cm4gdH0oKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwIT09ZSYmZS5sZW5ndGg/XCJzdHJpbmdcIiE9PW4uZ2V0VHlwZU9mKGUpP2Z1bmN0aW9uKGUsdCxyLG4pe3ZhciBpPW8scz1uK3I7ZV49LTE7Zm9yKHZhciBhPW47YTxzO2ErKyllPWU+Pj44XmlbMjU1JihlXnRbYV0pXTtyZXR1cm4tMV5lfSgwfHQsZSxlLmxlbmd0aCwwKTpmdW5jdGlvbihlLHQscixuKXt2YXIgaT1vLHM9bityO2VePS0xO2Zvcih2YXIgYT1uO2E8czthKyspZT1lPj4+OF5pWzI1NSYoZV50LmNoYXJDb2RlQXQoYSkpXTtyZXR1cm4tMV5lfSgwfHQsZSxlLmxlbmd0aCwwKTowfX0se1wiLi91dGlsc1wiOjMyfV0sNTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3IuYmFzZTY0PSExLHIuYmluYXJ5PSExLHIuZGlyPSExLHIuY3JlYXRlRm9sZGVycz0hMCxyLmRhdGU9bnVsbCxyLmNvbXByZXNzaW9uPW51bGwsci5jb21wcmVzc2lvbk9wdGlvbnM9bnVsbCxyLmNvbW1lbnQ9bnVsbCxyLnVuaXhQZXJtaXNzaW9ucz1udWxsLHIuZG9zUGVybWlzc2lvbnM9bnVsbH0se31dLDY6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1udWxsO249XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2U/UHJvbWlzZTplKFwibGllXCIpLHQuZXhwb3J0cz17UHJvbWlzZTpufX0se2xpZTozN31dLDc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQxNkFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDMyQXJyYXksaT1lKFwicGFrb1wiKSxzPWUoXCIuL3V0aWxzXCIpLGE9ZShcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksbz1uP1widWludDhhcnJheVwiOlwiYXJyYXlcIjtmdW5jdGlvbiBoKGUsdCl7YS5jYWxsKHRoaXMsXCJGbGF0ZVdvcmtlci9cIitlKSx0aGlzLl9wYWtvPW51bGwsdGhpcy5fcGFrb0FjdGlvbj1lLHRoaXMuX3Bha29PcHRpb25zPXQsdGhpcy5tZXRhPXt9fXIubWFnaWM9XCJcXGJcXDBcIixzLmluaGVyaXRzKGgsYSksaC5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe3RoaXMubWV0YT1lLm1ldGEsbnVsbD09PXRoaXMuX3Bha28mJnRoaXMuX2NyZWF0ZVBha28oKSx0aGlzLl9wYWtvLnB1c2gocy50cmFuc2Zvcm1UbyhvLGUuZGF0YSksITEpfSxoLnByb3RvdHlwZS5mbHVzaD1mdW5jdGlvbigpe2EucHJvdG90eXBlLmZsdXNoLmNhbGwodGhpcyksbnVsbD09PXRoaXMuX3Bha28mJnRoaXMuX2NyZWF0ZVBha28oKSx0aGlzLl9wYWtvLnB1c2goW10sITApfSxoLnByb3RvdHlwZS5jbGVhblVwPWZ1bmN0aW9uKCl7YS5wcm90b3R5cGUuY2xlYW5VcC5jYWxsKHRoaXMpLHRoaXMuX3Bha289bnVsbH0saC5wcm90b3R5cGUuX2NyZWF0ZVBha289ZnVuY3Rpb24oKXt0aGlzLl9wYWtvPW5ldyBpW3RoaXMuX3Bha29BY3Rpb25dKHtyYXc6ITAsbGV2ZWw6dGhpcy5fcGFrb09wdGlvbnMubGV2ZWx8fC0xfSk7dmFyIHQ9dGhpczt0aGlzLl9wYWtvLm9uRGF0YT1mdW5jdGlvbihlKXt0LnB1c2goe2RhdGE6ZSxtZXRhOnQubWV0YX0pfX0sci5jb21wcmVzc1dvcmtlcj1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IGgoXCJEZWZsYXRlXCIsZSl9LHIudW5jb21wcmVzc1dvcmtlcj1mdW5jdGlvbigpe3JldHVybiBuZXcgaChcIkluZmxhdGVcIix7fSl9fSx7XCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3V0aWxzXCI6MzIscGFrbzozOH1dLDg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBBKGUsdCl7dmFyIHIsbj1cIlwiO2ZvcihyPTA7cjx0O3IrKyluKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSZlKSxlPj4+PTg7cmV0dXJuIG59ZnVuY3Rpb24gbihlLHQscixuLGkscyl7dmFyIGEsbyxoPWUuZmlsZSx1PWUuY29tcHJlc3Npb24sbD1zIT09Ty51dGY4ZW5jb2RlLGY9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHMoaC5uYW1lKSksYz1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsTy51dGY4ZW5jb2RlKGgubmFtZSkpLGQ9aC5jb21tZW50LHA9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHMoZCkpLG09SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLE8udXRmOGVuY29kZShkKSksXz1jLmxlbmd0aCE9PWgubmFtZS5sZW5ndGgsZz1tLmxlbmd0aCE9PWQubGVuZ3RoLGI9XCJcIix2PVwiXCIseT1cIlwiLHc9aC5kaXIsaz1oLmRhdGUseD17Y3JjMzI6MCxjb21wcmVzc2VkU2l6ZTowLHVuY29tcHJlc3NlZFNpemU6MH07dCYmIXJ8fCh4LmNyYzMyPWUuY3JjMzIseC5jb21wcmVzc2VkU2l6ZT1lLmNvbXByZXNzZWRTaXplLHgudW5jb21wcmVzc2VkU2l6ZT1lLnVuY29tcHJlc3NlZFNpemUpO3ZhciBTPTA7dCYmKFN8PTgpLGx8fCFfJiYhZ3x8KFN8PTIwNDgpO3ZhciB6PTAsQz0wO3cmJih6fD0xNiksXCJVTklYXCI9PT1pPyhDPTc5OCx6fD1mdW5jdGlvbihlLHQpe3ZhciByPWU7cmV0dXJuIGV8fChyPXQ/MTY4OTM6MzMyMDQpLCg2NTUzNSZyKTw8MTZ9KGgudW5peFBlcm1pc3Npb25zLHcpKTooQz0yMCx6fD1mdW5jdGlvbihlKXtyZXR1cm4gNjMmKGV8fDApfShoLmRvc1Blcm1pc3Npb25zKSksYT1rLmdldFVUQ0hvdXJzKCksYTw8PTYsYXw9ay5nZXRVVENNaW51dGVzKCksYTw8PTUsYXw9ay5nZXRVVENTZWNvbmRzKCkvMixvPWsuZ2V0VVRDRnVsbFllYXIoKS0xOTgwLG88PD00LG98PWsuZ2V0VVRDTW9udGgoKSsxLG88PD01LG98PWsuZ2V0VVRDRGF0ZSgpLF8mJih2PUEoMSwxKStBKEIoZiksNCkrYyxiKz1cInVwXCIrQSh2Lmxlbmd0aCwyKSt2KSxnJiYoeT1BKDEsMSkrQShCKHApLDQpK20sYis9XCJ1Y1wiK0EoeS5sZW5ndGgsMikreSk7dmFyIEU9XCJcIjtyZXR1cm4gRSs9XCJcXG5cXDBcIixFKz1BKFMsMiksRSs9dS5tYWdpYyxFKz1BKGEsMiksRSs9QShvLDIpLEUrPUEoeC5jcmMzMiw0KSxFKz1BKHguY29tcHJlc3NlZFNpemUsNCksRSs9QSh4LnVuY29tcHJlc3NlZFNpemUsNCksRSs9QShmLmxlbmd0aCwyKSxFKz1BKGIubGVuZ3RoLDIpLHtmaWxlUmVjb3JkOlIuTE9DQUxfRklMRV9IRUFERVIrRStmK2IsZGlyUmVjb3JkOlIuQ0VOVFJBTF9GSUxFX0hFQURFUitBKEMsMikrRStBKHAubGVuZ3RoLDIpK1wiXFwwXFwwXFwwXFwwXCIrQSh6LDQpK0Eobiw0KStmK2IrcH19dmFyIEk9ZShcIi4uL3V0aWxzXCIpLGk9ZShcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpLE89ZShcIi4uL3V0ZjhcIiksQj1lKFwiLi4vY3JjMzJcIiksUj1lKFwiLi4vc2lnbmF0dXJlXCIpO2Z1bmN0aW9uIHMoZSx0LHIsbil7aS5jYWxsKHRoaXMsXCJaaXBGaWxlV29ya2VyXCIpLHRoaXMuYnl0ZXNXcml0dGVuPTAsdGhpcy56aXBDb21tZW50PXQsdGhpcy56aXBQbGF0Zm9ybT1yLHRoaXMuZW5jb2RlRmlsZU5hbWU9bix0aGlzLnN0cmVhbUZpbGVzPWUsdGhpcy5hY2N1bXVsYXRlPSExLHRoaXMuY29udGVudEJ1ZmZlcj1bXSx0aGlzLmRpclJlY29yZHM9W10sdGhpcy5jdXJyZW50U291cmNlT2Zmc2V0PTAsdGhpcy5lbnRyaWVzQ291bnQ9MCx0aGlzLmN1cnJlbnRGaWxlPW51bGwsdGhpcy5fc291cmNlcz1bXX1JLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUucHVzaD1mdW5jdGlvbihlKXt2YXIgdD1lLm1ldGEucGVyY2VudHx8MCxyPXRoaXMuZW50cmllc0NvdW50LG49dGhpcy5fc291cmNlcy5sZW5ndGg7dGhpcy5hY2N1bXVsYXRlP3RoaXMuY29udGVudEJ1ZmZlci5wdXNoKGUpOih0aGlzLmJ5dGVzV3JpdHRlbis9ZS5kYXRhLmxlbmd0aCxpLnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcyx7ZGF0YTplLmRhdGEsbWV0YTp7Y3VycmVudEZpbGU6dGhpcy5jdXJyZW50RmlsZSxwZXJjZW50OnI/KHQrMTAwKihyLW4tMSkpL3I6MTAwfX0pKX0scy5wcm90b3R5cGUub3BlbmVkU291cmNlPWZ1bmN0aW9uKGUpe3RoaXMuY3VycmVudFNvdXJjZU9mZnNldD10aGlzLmJ5dGVzV3JpdHRlbix0aGlzLmN1cnJlbnRGaWxlPWUuZmlsZS5uYW1lO3ZhciB0PXRoaXMuc3RyZWFtRmlsZXMmJiFlLmZpbGUuZGlyO2lmKHQpe3ZhciByPW4oZSx0LCExLHRoaXMuY3VycmVudFNvdXJjZU9mZnNldCx0aGlzLnppcFBsYXRmb3JtLHRoaXMuZW5jb2RlRmlsZU5hbWUpO3RoaXMucHVzaCh7ZGF0YTpyLmZpbGVSZWNvcmQsbWV0YTp7cGVyY2VudDowfX0pfWVsc2UgdGhpcy5hY2N1bXVsYXRlPSEwfSxzLnByb3RvdHlwZS5jbG9zZWRTb3VyY2U9ZnVuY3Rpb24oZSl7dGhpcy5hY2N1bXVsYXRlPSExO3ZhciB0PXRoaXMuc3RyZWFtRmlsZXMmJiFlLmZpbGUuZGlyLHI9bihlLHQsITAsdGhpcy5jdXJyZW50U291cmNlT2Zmc2V0LHRoaXMuemlwUGxhdGZvcm0sdGhpcy5lbmNvZGVGaWxlTmFtZSk7aWYodGhpcy5kaXJSZWNvcmRzLnB1c2goci5kaXJSZWNvcmQpLHQpdGhpcy5wdXNoKHtkYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBSLkRBVEFfREVTQ1JJUFRPUitBKGUuY3JjMzIsNCkrQShlLmNvbXByZXNzZWRTaXplLDQpK0EoZS51bmNvbXByZXNzZWRTaXplLDQpfShlKSxtZXRhOntwZXJjZW50OjEwMH19KTtlbHNlIGZvcih0aGlzLnB1c2goe2RhdGE6ci5maWxlUmVjb3JkLG1ldGE6e3BlcmNlbnQ6MH19KTt0aGlzLmNvbnRlbnRCdWZmZXIubGVuZ3RoOyl0aGlzLnB1c2godGhpcy5jb250ZW50QnVmZmVyLnNoaWZ0KCkpO3RoaXMuY3VycmVudEZpbGU9bnVsbH0scy5wcm90b3R5cGUuZmx1c2g9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy5ieXRlc1dyaXR0ZW4sdD0wO3Q8dGhpcy5kaXJSZWNvcmRzLmxlbmd0aDt0KyspdGhpcy5wdXNoKHtkYXRhOnRoaXMuZGlyUmVjb3Jkc1t0XSxtZXRhOntwZXJjZW50OjEwMH19KTt2YXIgcj10aGlzLmJ5dGVzV3JpdHRlbi1lLG49ZnVuY3Rpb24oZSx0LHIsbixpKXt2YXIgcz1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsaShuKSk7cmV0dXJuIFIuQ0VOVFJBTF9ESVJFQ1RPUllfRU5EK1wiXFwwXFwwXFwwXFwwXCIrQShlLDIpK0EoZSwyKStBKHQsNCkrQShyLDQpK0Eocy5sZW5ndGgsMikrc30odGhpcy5kaXJSZWNvcmRzLmxlbmd0aCxyLGUsdGhpcy56aXBDb21tZW50LHRoaXMuZW5jb2RlRmlsZU5hbWUpO3RoaXMucHVzaCh7ZGF0YTpuLG1ldGE6e3BlcmNlbnQ6MTAwfX0pfSxzLnByb3RvdHlwZS5wcmVwYXJlTmV4dFNvdXJjZT1mdW5jdGlvbigpe3RoaXMucHJldmlvdXM9dGhpcy5fc291cmNlcy5zaGlmdCgpLHRoaXMub3BlbmVkU291cmNlKHRoaXMucHJldmlvdXMuc3RyZWFtSW5mbyksdGhpcy5pc1BhdXNlZD90aGlzLnByZXZpb3VzLnBhdXNlKCk6dGhpcy5wcmV2aW91cy5yZXN1bWUoKX0scy5wcm90b3R5cGUucmVnaXN0ZXJQcmV2aW91cz1mdW5jdGlvbihlKXt0aGlzLl9zb3VyY2VzLnB1c2goZSk7dmFyIHQ9dGhpcztyZXR1cm4gZS5vbihcImRhdGFcIixmdW5jdGlvbihlKXt0LnByb2Nlc3NDaHVuayhlKX0pLGUub24oXCJlbmRcIixmdW5jdGlvbigpe3QuY2xvc2VkU291cmNlKHQucHJldmlvdXMuc3RyZWFtSW5mbyksdC5fc291cmNlcy5sZW5ndGg/dC5wcmVwYXJlTmV4dFNvdXJjZSgpOnQuZW5kKCl9KSxlLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlKXt0LmVycm9yKGUpfSksdGhpc30scy5wcm90b3R5cGUucmVzdW1lPWZ1bmN0aW9uKCl7cmV0dXJuISFpLnByb3RvdHlwZS5yZXN1bWUuY2FsbCh0aGlzKSYmKCF0aGlzLnByZXZpb3VzJiZ0aGlzLl9zb3VyY2VzLmxlbmd0aD8odGhpcy5wcmVwYXJlTmV4dFNvdXJjZSgpLCEwKTp0aGlzLnByZXZpb3VzfHx0aGlzLl9zb3VyY2VzLmxlbmd0aHx8dGhpcy5nZW5lcmF0ZWRFcnJvcj92b2lkIDA6KHRoaXMuZW5kKCksITApKX0scy5wcm90b3R5cGUuZXJyb3I9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5fc291cmNlcztpZighaS5wcm90b3R5cGUuZXJyb3IuY2FsbCh0aGlzLGUpKXJldHVybiExO2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXRyeXt0W3JdLmVycm9yKGUpfWNhdGNoKGUpe31yZXR1cm4hMH0scy5wcm90b3R5cGUubG9jaz1mdW5jdGlvbigpe2kucHJvdG90eXBlLmxvY2suY2FsbCh0aGlzKTtmb3IodmFyIGU9dGhpcy5fc291cmNlcyx0PTA7dDxlLmxlbmd0aDt0KyspZVt0XS5sb2NrKCl9LHQuZXhwb3J0cz1zfSx7XCIuLi9jcmMzMlwiOjQsXCIuLi9zaWduYXR1cmVcIjoyMyxcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuLi91dGY4XCI6MzEsXCIuLi91dGlsc1wiOjMyfV0sOTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciB1PWUoXCIuLi9jb21wcmVzc2lvbnNcIiksbj1lKFwiLi9aaXBGaWxlV29ya2VyXCIpO3IuZ2VuZXJhdGVXb3JrZXI9ZnVuY3Rpb24oZSxhLHQpe3ZhciBvPW5ldyBuKGEuc3RyZWFtRmlsZXMsdCxhLnBsYXRmb3JtLGEuZW5jb2RlRmlsZU5hbWUpLGg9MDt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7aCsrO3ZhciByPWZ1bmN0aW9uKGUsdCl7dmFyIHI9ZXx8dCxuPXVbcl07aWYoIW4pdGhyb3cgbmV3IEVycm9yKHIrXCIgaXMgbm90IGEgdmFsaWQgY29tcHJlc3Npb24gbWV0aG9kICFcIik7cmV0dXJuIG59KHQub3B0aW9ucy5jb21wcmVzc2lvbixhLmNvbXByZXNzaW9uKSxuPXQub3B0aW9ucy5jb21wcmVzc2lvbk9wdGlvbnN8fGEuY29tcHJlc3Npb25PcHRpb25zfHx7fSxpPXQuZGlyLHM9dC5kYXRlO3QuX2NvbXByZXNzV29ya2VyKHIsbikud2l0aFN0cmVhbUluZm8oXCJmaWxlXCIse25hbWU6ZSxkaXI6aSxkYXRlOnMsY29tbWVudDp0LmNvbW1lbnR8fFwiXCIsdW5peFBlcm1pc3Npb25zOnQudW5peFBlcm1pc3Npb25zLGRvc1Blcm1pc3Npb25zOnQuZG9zUGVybWlzc2lvbnN9KS5waXBlKG8pfSksby5lbnRyaWVzQ291bnQ9aH1jYXRjaChlKXtvLmVycm9yKGUpfXJldHVybiBvfX0se1wiLi4vY29tcHJlc3Npb25zXCI6MyxcIi4vWmlwRmlsZVdvcmtlclwiOjh9XSwxMDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXtpZighKHRoaXMgaW5zdGFuY2VvZiBuKSlyZXR1cm4gbmV3IG47aWYoYXJndW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29uc3RydWN0b3Igd2l0aCBwYXJhbWV0ZXJzIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpO3RoaXMuZmlsZXM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLmNvbW1lbnQ9bnVsbCx0aGlzLnJvb3Q9XCJcIix0aGlzLmNsb25lPWZ1bmN0aW9uKCl7dmFyIGU9bmV3IG47Zm9yKHZhciB0IGluIHRoaXMpXCJmdW5jdGlvblwiIT10eXBlb2YgdGhpc1t0XSYmKGVbdF09dGhpc1t0XSk7cmV0dXJuIGV9fShuLnByb3RvdHlwZT1lKFwiLi9vYmplY3RcIikpLmxvYWRBc3luYz1lKFwiLi9sb2FkXCIpLG4uc3VwcG9ydD1lKFwiLi9zdXBwb3J0XCIpLG4uZGVmYXVsdHM9ZShcIi4vZGVmYXVsdHNcIiksbi52ZXJzaW9uPVwiMy4xMC4xXCIsbi5sb2FkQXN5bmM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4obmV3IG4pLmxvYWRBc3luYyhlLHQpfSxuLmV4dGVybmFsPWUoXCIuL2V4dGVybmFsXCIpLHQuZXhwb3J0cz1ufSx7XCIuL2RlZmF1bHRzXCI6NSxcIi4vZXh0ZXJuYWxcIjo2LFwiLi9sb2FkXCI6MTEsXCIuL29iamVjdFwiOjE1LFwiLi9zdXBwb3J0XCI6MzB9XSwxMTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciB1PWUoXCIuL3V0aWxzXCIpLGk9ZShcIi4vZXh0ZXJuYWxcIiksbj1lKFwiLi91dGY4XCIpLHM9ZShcIi4vemlwRW50cmllc1wiKSxhPWUoXCIuL3N0cmVhbS9DcmMzMlByb2JlXCIpLGw9ZShcIi4vbm9kZWpzVXRpbHNcIik7ZnVuY3Rpb24gZihuKXtyZXR1cm4gbmV3IGkuUHJvbWlzZShmdW5jdGlvbihlLHQpe3ZhciByPW4uZGVjb21wcmVzc2VkLmdldENvbnRlbnRXb3JrZXIoKS5waXBlKG5ldyBhKTtyLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlKXt0KGUpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe3Iuc3RyZWFtSW5mby5jcmMzMiE9PW4uZGVjb21wcmVzc2VkLmNyYzMyP3QobmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCA6IENSQzMyIG1pc21hdGNoXCIpKTplKCl9KS5yZXN1bWUoKX0pfXQuZXhwb3J0cz1mdW5jdGlvbihlLG8pe3ZhciBoPXRoaXM7cmV0dXJuIG89dS5leHRlbmQob3x8e30se2Jhc2U2NDohMSxjaGVja0NSQzMyOiExLG9wdGltaXplZEJpbmFyeVN0cmluZzohMSxjcmVhdGVGb2xkZXJzOiExLGRlY29kZUZpbGVOYW1lOm4udXRmOGRlY29kZX0pLGwuaXNOb2RlJiZsLmlzU3RyZWFtKGUpP2kuUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSlNaaXAgY2FuJ3QgYWNjZXB0IGEgc3RyZWFtIHdoZW4gbG9hZGluZyBhIHppcCBmaWxlLlwiKSk6dS5wcmVwYXJlQ29udGVudChcInRoZSBsb2FkZWQgemlwIGZpbGVcIixlLCEwLG8ub3B0aW1pemVkQmluYXJ5U3RyaW5nLG8uYmFzZTY0KS50aGVuKGZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBzKG8pO3JldHVybiB0LmxvYWQoZSksdH0pLnRoZW4oZnVuY3Rpb24oZSl7dmFyIHQ9W2kuUHJvbWlzZS5yZXNvbHZlKGUpXSxyPWUuZmlsZXM7aWYoby5jaGVja0NSQzMyKWZvcih2YXIgbj0wO248ci5sZW5ndGg7bisrKXQucHVzaChmKHJbbl0pKTtyZXR1cm4gaS5Qcm9taXNlLmFsbCh0KX0pLnRoZW4oZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuc2hpZnQoKSxyPXQuZmlsZXMsbj0wO248ci5sZW5ndGg7bisrKXt2YXIgaT1yW25dLHM9aS5maWxlTmFtZVN0cixhPXUucmVzb2x2ZShpLmZpbGVOYW1lU3RyKTtoLmZpbGUoYSxpLmRlY29tcHJlc3NlZCx7YmluYXJ5OiEwLG9wdGltaXplZEJpbmFyeVN0cmluZzohMCxkYXRlOmkuZGF0ZSxkaXI6aS5kaXIsY29tbWVudDppLmZpbGVDb21tZW50U3RyLmxlbmd0aD9pLmZpbGVDb21tZW50U3RyOm51bGwsdW5peFBlcm1pc3Npb25zOmkudW5peFBlcm1pc3Npb25zLGRvc1Blcm1pc3Npb25zOmkuZG9zUGVybWlzc2lvbnMsY3JlYXRlRm9sZGVyczpvLmNyZWF0ZUZvbGRlcnN9KSxpLmRpcnx8KGguZmlsZShhKS51bnNhZmVPcmlnaW5hbE5hbWU9cyl9cmV0dXJuIHQuemlwQ29tbWVudC5sZW5ndGgmJihoLmNvbW1lbnQ9dC56aXBDb21tZW50KSxofSl9fSx7XCIuL2V4dGVybmFsXCI6NixcIi4vbm9kZWpzVXRpbHNcIjoxNCxcIi4vc3RyZWFtL0NyYzMyUHJvYmVcIjoyNSxcIi4vdXRmOFwiOjMxLFwiLi91dGlsc1wiOjMyLFwiLi96aXBFbnRyaWVzXCI6MzN9XSwxMjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKTtmdW5jdGlvbiBzKGUsdCl7aS5jYWxsKHRoaXMsXCJOb2RlanMgc3RyZWFtIGlucHV0IGFkYXB0ZXIgZm9yIFwiK2UpLHRoaXMuX3Vwc3RyZWFtRW5kZWQ9ITEsdGhpcy5fYmluZFN0cmVhbSh0KX1uLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUuX2JpbmRTdHJlYW09ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczsodGhpcy5fc3RyZWFtPWUpLnBhdXNlKCksZS5vbihcImRhdGFcIixmdW5jdGlvbihlKXt0LnB1c2goe2RhdGE6ZSxtZXRhOntwZXJjZW50OjB9fSl9KS5vbihcImVycm9yXCIsZnVuY3Rpb24oZSl7dC5pc1BhdXNlZD90aGlzLmdlbmVyYXRlZEVycm9yPWU6dC5lcnJvcihlKX0pLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXt0LmlzUGF1c2VkP3QuX3Vwc3RyZWFtRW5kZWQ9ITA6dC5lbmQoKX0pfSxzLnByb3RvdHlwZS5wYXVzZT1mdW5jdGlvbigpe3JldHVybiEhaS5wcm90b3R5cGUucGF1c2UuY2FsbCh0aGlzKSYmKHRoaXMuX3N0cmVhbS5wYXVzZSgpLCEwKX0scy5wcm90b3R5cGUucmVzdW1lPWZ1bmN0aW9uKCl7cmV0dXJuISFpLnByb3RvdHlwZS5yZXN1bWUuY2FsbCh0aGlzKSYmKHRoaXMuX3Vwc3RyZWFtRW5kZWQ/dGhpcy5lbmQoKTp0aGlzLl9zdHJlYW0ucmVzdW1lKCksITApfSx0LmV4cG9ydHM9c30se1wiLi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4uL3V0aWxzXCI6MzJ9XSwxMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBpPWUoXCJyZWFkYWJsZS1zdHJlYW1cIikuUmVhZGFibGU7ZnVuY3Rpb24gbihlLHQscil7aS5jYWxsKHRoaXMsdCksdGhpcy5faGVscGVyPWU7dmFyIG49dGhpcztlLm9uKFwiZGF0YVwiLGZ1bmN0aW9uKGUsdCl7bi5wdXNoKGUpfHxuLl9oZWxwZXIucGF1c2UoKSxyJiZyKHQpfSkub24oXCJlcnJvclwiLGZ1bmN0aW9uKGUpe24uZW1pdChcImVycm9yXCIsZSl9KS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7bi5wdXNoKG51bGwpfSl9ZShcIi4uL3V0aWxzXCIpLmluaGVyaXRzKG4saSksbi5wcm90b3R5cGUuX3JlYWQ9ZnVuY3Rpb24oKXt0aGlzLl9oZWxwZXIucmVzdW1lKCl9LHQuZXhwb3J0cz1ufSx7XCIuLi91dGlsc1wiOjMyLFwicmVhZGFibGUtc3RyZWFtXCI6MTZ9XSwxNDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz17aXNOb2RlOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBCdWZmZXIsbmV3QnVmZmVyRnJvbTpmdW5jdGlvbihlLHQpe2lmKEJ1ZmZlci5mcm9tJiZCdWZmZXIuZnJvbSE9PVVpbnQ4QXJyYXkuZnJvbSlyZXR1cm4gQnVmZmVyLmZyb20oZSx0KTtpZihcIm51bWJlclwiPT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcImRhdGFcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpO3JldHVybiBuZXcgQnVmZmVyKGUsdCl9LGFsbG9jQnVmZmVyOmZ1bmN0aW9uKGUpe2lmKEJ1ZmZlci5hbGxvYylyZXR1cm4gQnVmZmVyLmFsbG9jKGUpO3ZhciB0PW5ldyBCdWZmZXIoZSk7cmV0dXJuIHQuZmlsbCgwKSx0fSxpc0J1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gQnVmZmVyLmlzQnVmZmVyKGUpfSxpc1N0cmVhbTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5vbiYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5wYXVzZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5yZXN1bWV9fX0se31dLDE1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyhlLHQscil7dmFyIG4saT11LmdldFR5cGVPZih0KSxzPXUuZXh0ZW5kKHJ8fHt9LGYpO3MuZGF0ZT1zLmRhdGV8fG5ldyBEYXRlLG51bGwhPT1zLmNvbXByZXNzaW9uJiYocy5jb21wcmVzc2lvbj1zLmNvbXByZXNzaW9uLnRvVXBwZXJDYXNlKCkpLFwic3RyaW5nXCI9PXR5cGVvZiBzLnVuaXhQZXJtaXNzaW9ucyYmKHMudW5peFBlcm1pc3Npb25zPXBhcnNlSW50KHMudW5peFBlcm1pc3Npb25zLDgpKSxzLnVuaXhQZXJtaXNzaW9ucyYmMTYzODQmcy51bml4UGVybWlzc2lvbnMmJihzLmRpcj0hMCkscy5kb3NQZXJtaXNzaW9ucyYmMTYmcy5kb3NQZXJtaXNzaW9ucyYmKHMuZGlyPSEwKSxzLmRpciYmKGU9ZyhlKSkscy5jcmVhdGVGb2xkZXJzJiYobj1fKGUpKSYmYi5jYWxsKHRoaXMsbiwhMCk7dmFyIGE9XCJzdHJpbmdcIj09PWkmJiExPT09cy5iaW5hcnkmJiExPT09cy5iYXNlNjQ7ciYmdm9pZCAwIT09ci5iaW5hcnl8fChzLmJpbmFyeT0hYSksKHQgaW5zdGFuY2VvZiBjJiYwPT09dC51bmNvbXByZXNzZWRTaXplfHxzLmRpcnx8IXR8fDA9PT10Lmxlbmd0aCkmJihzLmJhc2U2ND0hMSxzLmJpbmFyeT0hMCx0PVwiXCIscy5jb21wcmVzc2lvbj1cIlNUT1JFXCIsaT1cInN0cmluZ1wiKTt2YXIgbz1udWxsO289dCBpbnN0YW5jZW9mIGN8fHQgaW5zdGFuY2VvZiBsP3Q6cC5pc05vZGUmJnAuaXNTdHJlYW0odCk/bmV3IG0oZSx0KTp1LnByZXBhcmVDb250ZW50KGUsdCxzLmJpbmFyeSxzLm9wdGltaXplZEJpbmFyeVN0cmluZyxzLmJhc2U2NCk7dmFyIGg9bmV3IGQoZSxvLHMpO3RoaXMuZmlsZXNbZV09aH12YXIgaT1lKFwiLi91dGY4XCIpLHU9ZShcIi4vdXRpbHNcIiksbD1lKFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKSxhPWUoXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIiksZj1lKFwiLi9kZWZhdWx0c1wiKSxjPWUoXCIuL2NvbXByZXNzZWRPYmplY3RcIiksZD1lKFwiLi96aXBPYmplY3RcIiksbz1lKFwiLi9nZW5lcmF0ZVwiKSxwPWUoXCIuL25vZGVqc1V0aWxzXCIpLG09ZShcIi4vbm9kZWpzL05vZGVqc1N0cmVhbUlucHV0QWRhcHRlclwiKSxfPWZ1bmN0aW9uKGUpe1wiL1wiPT09ZS5zbGljZSgtMSkmJihlPWUuc3Vic3RyaW5nKDAsZS5sZW5ndGgtMSkpO3ZhciB0PWUubGFzdEluZGV4T2YoXCIvXCIpO3JldHVybiAwPHQ/ZS5zdWJzdHJpbmcoMCx0KTpcIlwifSxnPWZ1bmN0aW9uKGUpe3JldHVyblwiL1wiIT09ZS5zbGljZSgtMSkmJihlKz1cIi9cIiksZX0sYj1mdW5jdGlvbihlLHQpe3JldHVybiB0PXZvaWQgMCE9PXQ/dDpmLmNyZWF0ZUZvbGRlcnMsZT1nKGUpLHRoaXMuZmlsZXNbZV18fHMuY2FsbCh0aGlzLGUsbnVsbCx7ZGlyOiEwLGNyZWF0ZUZvbGRlcnM6dH0pLHRoaXMuZmlsZXNbZV19O2Z1bmN0aW9uIGgoZSl7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX12YXIgbj17bG9hZDpmdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpfSxmb3JFYWNoOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbjtmb3IodCBpbiB0aGlzLmZpbGVzKW49dGhpcy5maWxlc1t0XSwocj10LnNsaWNlKHRoaXMucm9vdC5sZW5ndGgsdC5sZW5ndGgpKSYmdC5zbGljZSgwLHRoaXMucm9vdC5sZW5ndGgpPT09dGhpcy5yb290JiZlKHIsbil9LGZpbHRlcjpmdW5jdGlvbihyKXt2YXIgbj1bXTtyZXR1cm4gdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7cihlLHQpJiZuLnB1c2godCl9KSxufSxmaWxlOmZ1bmN0aW9uKGUsdCxyKXtpZigxIT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZT10aGlzLnJvb3QrZSxzLmNhbGwodGhpcyxlLHQsciksdGhpcztpZihoKGUpKXt2YXIgbj1lO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbihlLHQpe3JldHVybiF0LmRpciYmbi50ZXN0KGUpfSl9dmFyIGk9dGhpcy5maWxlc1t0aGlzLnJvb3QrZV07cmV0dXJuIGkmJiFpLmRpcj9pOm51bGx9LGZvbGRlcjpmdW5jdGlvbihyKXtpZighcilyZXR1cm4gdGhpcztpZihoKHIpKXJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbihlLHQpe3JldHVybiB0LmRpciYmci50ZXN0KGUpfSk7dmFyIGU9dGhpcy5yb290K3IsdD1iLmNhbGwodGhpcyxlKSxuPXRoaXMuY2xvbmUoKTtyZXR1cm4gbi5yb290PXQubmFtZSxufSxyZW1vdmU6ZnVuY3Rpb24ocil7cj10aGlzLnJvb3Qrcjt2YXIgZT10aGlzLmZpbGVzW3JdO2lmKGV8fChcIi9cIiE9PXIuc2xpY2UoLTEpJiYocis9XCIvXCIpLGU9dGhpcy5maWxlc1tyXSksZSYmIWUuZGlyKWRlbGV0ZSB0aGlzLmZpbGVzW3JdO2Vsc2UgZm9yKHZhciB0PXRoaXMuZmlsdGVyKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQubmFtZS5zbGljZSgwLHIubGVuZ3RoKT09PXJ9KSxuPTA7bjx0Lmxlbmd0aDtuKyspZGVsZXRlIHRoaXMuZmlsZXNbdFtuXS5uYW1lXTtyZXR1cm4gdGhpc30sZ2VuZXJhdGU6ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiByZW1vdmVkIGluIEpTWmlwIDMuMCwgcGxlYXNlIGNoZWNrIHRoZSB1cGdyYWRlIGd1aWRlLlwiKX0sZ2VuZXJhdGVJbnRlcm5hbFN0cmVhbTpmdW5jdGlvbihlKXt2YXIgdCxyPXt9O3RyeXtpZigocj11LmV4dGVuZChlfHx7fSx7c3RyZWFtRmlsZXM6ITEsY29tcHJlc3Npb246XCJTVE9SRVwiLGNvbXByZXNzaW9uT3B0aW9uczpudWxsLHR5cGU6XCJcIixwbGF0Zm9ybTpcIkRPU1wiLGNvbW1lbnQ6bnVsbCxtaW1lVHlwZTpcImFwcGxpY2F0aW9uL3ppcFwiLGVuY29kZUZpbGVOYW1lOmkudXRmOGVuY29kZX0pKS50eXBlPXIudHlwZS50b0xvd2VyQ2FzZSgpLHIuY29tcHJlc3Npb249ci5jb21wcmVzc2lvbi50b1VwcGVyQ2FzZSgpLFwiYmluYXJ5c3RyaW5nXCI9PT1yLnR5cGUmJihyLnR5cGU9XCJzdHJpbmdcIiksIXIudHlwZSl0aHJvdyBuZXcgRXJyb3IoXCJObyBvdXRwdXQgdHlwZSBzcGVjaWZpZWQuXCIpO3UuY2hlY2tTdXBwb3J0KHIudHlwZSksXCJkYXJ3aW5cIiE9PXIucGxhdGZvcm0mJlwiZnJlZWJzZFwiIT09ci5wbGF0Zm9ybSYmXCJsaW51eFwiIT09ci5wbGF0Zm9ybSYmXCJzdW5vc1wiIT09ci5wbGF0Zm9ybXx8KHIucGxhdGZvcm09XCJVTklYXCIpLFwid2luMzJcIj09PXIucGxhdGZvcm0mJihyLnBsYXRmb3JtPVwiRE9TXCIpO3ZhciBuPXIuY29tbWVudHx8dGhpcy5jb21tZW50fHxcIlwiO3Q9by5nZW5lcmF0ZVdvcmtlcih0aGlzLHIsbil9Y2F0Y2goZSl7KHQ9bmV3IGwoXCJlcnJvclwiKSkuZXJyb3IoZSl9cmV0dXJuIG5ldyBhKHQsci50eXBlfHxcInN0cmluZ1wiLHIubWltZVR5cGUpfSxnZW5lcmF0ZUFzeW5jOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZ2VuZXJhdGVJbnRlcm5hbFN0cmVhbShlKS5hY2N1bXVsYXRlKHQpfSxnZW5lcmF0ZU5vZGVTdHJlYW06ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZT1lfHx7fSkudHlwZXx8KGUudHlwZT1cIm5vZGVidWZmZXJcIiksdGhpcy5nZW5lcmF0ZUludGVybmFsU3RyZWFtKGUpLnRvTm9kZWpzU3RyZWFtKHQpfX07dC5leHBvcnRzPW59LHtcIi4vY29tcHJlc3NlZE9iamVjdFwiOjIsXCIuL2RlZmF1bHRzXCI6NSxcIi4vZ2VuZXJhdGVcIjo5LFwiLi9ub2RlanMvTm9kZWpzU3RyZWFtSW5wdXRBZGFwdGVyXCI6MTIsXCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIjoyOSxcIi4vdXRmOFwiOjMxLFwiLi91dGlsc1wiOjMyLFwiLi96aXBPYmplY3RcIjozNX1dLDE2OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWUoXCJzdHJlYW1cIil9LHtzdHJlYW06dm9pZCAwfV0sMTc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9EYXRhUmVhZGVyXCIpO2Z1bmN0aW9uIGkoZSl7bi5jYWxsKHRoaXMsZSk7Zm9yKHZhciB0PTA7dDx0aGlzLmRhdGEubGVuZ3RoO3QrKyllW3RdPTI1NSZlW3RdfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhpLG4pLGkucHJvdG90eXBlLmJ5dGVBdD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kYXRhW3RoaXMuemVybytlXX0saS5wcm90b3R5cGUubGFzdEluZGV4T2ZTaWduYXR1cmU9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuY2hhckNvZGVBdCgwKSxyPWUuY2hhckNvZGVBdCgxKSxuPWUuY2hhckNvZGVBdCgyKSxpPWUuY2hhckNvZGVBdCgzKSxzPXRoaXMubGVuZ3RoLTQ7MDw9czstLXMpaWYodGhpcy5kYXRhW3NdPT09dCYmdGhpcy5kYXRhW3MrMV09PT1yJiZ0aGlzLmRhdGFbcysyXT09PW4mJnRoaXMuZGF0YVtzKzNdPT09aSlyZXR1cm4gcy10aGlzLnplcm87cmV0dXJuLTF9LGkucHJvdG90eXBlLnJlYWRBbmRDaGVja1NpZ25hdHVyZT1mdW5jdGlvbihlKXt2YXIgdD1lLmNoYXJDb2RlQXQoMCkscj1lLmNoYXJDb2RlQXQoMSksbj1lLmNoYXJDb2RlQXQoMiksaT1lLmNoYXJDb2RlQXQoMykscz10aGlzLnJlYWREYXRhKDQpO3JldHVybiB0PT09c1swXSYmcj09PXNbMV0mJm49PT1zWzJdJiZpPT09c1szXX0saS5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24oZSl7aWYodGhpcy5jaGVja09mZnNldChlKSwwPT09ZSlyZXR1cm5bXTt2YXIgdD10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0RhdGFSZWFkZXJcIjoxOH1dLDE4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4uL3V0aWxzXCIpO2Z1bmN0aW9uIGkoZSl7dGhpcy5kYXRhPWUsdGhpcy5sZW5ndGg9ZS5sZW5ndGgsdGhpcy5pbmRleD0wLHRoaXMuemVybz0wfWkucHJvdG90eXBlPXtjaGVja09mZnNldDpmdW5jdGlvbihlKXt0aGlzLmNoZWNrSW5kZXgodGhpcy5pbmRleCtlKX0sY2hlY2tJbmRleDpmdW5jdGlvbihlKXtpZih0aGlzLmxlbmd0aDx0aGlzLnplcm8rZXx8ZTwwKXRocm93IG5ldyBFcnJvcihcIkVuZCBvZiBkYXRhIHJlYWNoZWQgKGRhdGEgbGVuZ3RoID0gXCIrdGhpcy5sZW5ndGgrXCIsIGFza2VkIGluZGV4ID0gXCIrZStcIikuIENvcnJ1cHRlZCB6aXAgP1wiKX0sc2V0SW5kZXg6ZnVuY3Rpb24oZSl7dGhpcy5jaGVja0luZGV4KGUpLHRoaXMuaW5kZXg9ZX0sc2tpcDpmdW5jdGlvbihlKXt0aGlzLnNldEluZGV4KHRoaXMuaW5kZXgrZSl9LGJ5dGVBdDpmdW5jdGlvbigpe30scmVhZEludDpmdW5jdGlvbihlKXt2YXIgdCxyPTA7Zm9yKHRoaXMuY2hlY2tPZmZzZXQoZSksdD10aGlzLmluZGV4K2UtMTt0Pj10aGlzLmluZGV4O3QtLSlyPShyPDw4KSt0aGlzLmJ5dGVBdCh0KTtyZXR1cm4gdGhpcy5pbmRleCs9ZSxyfSxyZWFkU3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVybiBuLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsdGhpcy5yZWFkRGF0YShlKSl9LHJlYWREYXRhOmZ1bmN0aW9uKCl7fSxsYXN0SW5kZXhPZlNpZ25hdHVyZTpmdW5jdGlvbigpe30scmVhZEFuZENoZWNrU2lnbmF0dXJlOmZ1bmN0aW9uKCl7fSxyZWFkRGF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucmVhZEludCg0KTtyZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoMTk4MCsoZT4+MjUmMTI3KSwoZT4+MjEmMTUpLTEsZT4+MTYmMzEsZT4+MTEmMzEsZT4+NSY2MywoMzEmZSk8PDEpKX19LHQuZXhwb3J0cz1pfSx7XCIuLi91dGlsc1wiOjMyfV0sMTk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9VaW50OEFycmF5UmVhZGVyXCIpO2Z1bmN0aW9uIGkoZSl7bi5jYWxsKHRoaXMsZSl9ZShcIi4uL3V0aWxzXCIpLmluaGVyaXRzKGksbiksaS5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24oZSl7dGhpcy5jaGVja09mZnNldChlKTt2YXIgdD10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL1VpbnQ4QXJyYXlSZWFkZXJcIjoyMX1dLDIwOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vRGF0YVJlYWRlclwiKTtmdW5jdGlvbiBpKGUpe24uY2FsbCh0aGlzLGUpfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhpLG4pLGkucHJvdG90eXBlLmJ5dGVBdD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kYXRhLmNoYXJDb2RlQXQodGhpcy56ZXJvK2UpfSxpLnByb3RvdHlwZS5sYXN0SW5kZXhPZlNpZ25hdHVyZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kYXRhLmxhc3RJbmRleE9mKGUpLXRoaXMuemVyb30saS5wcm90b3R5cGUucmVhZEFuZENoZWNrU2lnbmF0dXJlPWZ1bmN0aW9uKGUpe3JldHVybiBlPT09dGhpcy5yZWFkRGF0YSg0KX0saS5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24oZSl7dGhpcy5jaGVja09mZnNldChlKTt2YXIgdD10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0RhdGFSZWFkZXJcIjoxOH1dLDIxOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vQXJyYXlSZWFkZXJcIik7ZnVuY3Rpb24gaShlKXtuLmNhbGwodGhpcyxlKX1lKFwiLi4vdXRpbHNcIikuaW5oZXJpdHMoaSxuKSxpLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbihlKXtpZih0aGlzLmNoZWNrT2Zmc2V0KGUpLDA9PT1lKXJldHVybiBuZXcgVWludDhBcnJheSgwKTt2YXIgdD10aGlzLmRhdGEuc3ViYXJyYXkodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0FycmF5UmVhZGVyXCI6MTd9XSwyMjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuLi9zdXBwb3J0XCIpLHM9ZShcIi4vQXJyYXlSZWFkZXJcIiksYT1lKFwiLi9TdHJpbmdSZWFkZXJcIiksbz1lKFwiLi9Ob2RlQnVmZmVyUmVhZGVyXCIpLGg9ZShcIi4vVWludDhBcnJheVJlYWRlclwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9bi5nZXRUeXBlT2YoZSk7cmV0dXJuIG4uY2hlY2tTdXBwb3J0KHQpLFwic3RyaW5nXCIhPT10fHxpLnVpbnQ4YXJyYXk/XCJub2RlYnVmZmVyXCI9PT10P25ldyBvKGUpOmkudWludDhhcnJheT9uZXcgaChuLnRyYW5zZm9ybVRvKFwidWludDhhcnJheVwiLGUpKTpuZXcgcyhuLnRyYW5zZm9ybVRvKFwiYXJyYXlcIixlKSk6bmV3IGEoZSl9fSx7XCIuLi9zdXBwb3J0XCI6MzAsXCIuLi91dGlsc1wiOjMyLFwiLi9BcnJheVJlYWRlclwiOjE3LFwiLi9Ob2RlQnVmZmVyUmVhZGVyXCI6MTksXCIuL1N0cmluZ1JlYWRlclwiOjIwLFwiLi9VaW50OEFycmF5UmVhZGVyXCI6MjF9XSwyMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3IuTE9DQUxfRklMRV9IRUFERVI9XCJQS1x1MDAwM1x1MDAwNFwiLHIuQ0VOVFJBTF9GSUxFX0hFQURFUj1cIlBLXHUwMDAxXHUwMDAyXCIsci5DRU5UUkFMX0RJUkVDVE9SWV9FTkQ9XCJQS1x1MDAwNVx1MDAwNlwiLHIuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUj1cIlBLXHUwMDA2XHUwMDA3XCIsci5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQ9XCJQS1x1MDAwNlx1MDAwNlwiLHIuREFUQV9ERVNDUklQVE9SPVwiUEtcdTAwMDdcXGJcIn0se31dLDI0OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vR2VuZXJpY1dvcmtlclwiKSxpPWUoXCIuLi91dGlsc1wiKTtmdW5jdGlvbiBzKGUpe24uY2FsbCh0aGlzLFwiQ29udmVydFdvcmtlciB0byBcIitlKSx0aGlzLmRlc3RUeXBlPWV9aS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbihlKXt0aGlzLnB1c2goe2RhdGE6aS50cmFuc2Zvcm1Ubyh0aGlzLmRlc3RUeXBlLGUuZGF0YSksbWV0YTplLm1ldGF9KX0sdC5leHBvcnRzPXN9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDI1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vR2VuZXJpY1dvcmtlclwiKSxpPWUoXCIuLi9jcmMzMlwiKTtmdW5jdGlvbiBzKCl7bi5jYWxsKHRoaXMsXCJDcmMzMlByb2JlXCIpLHRoaXMud2l0aFN0cmVhbUluZm8oXCJjcmMzMlwiLDApfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbihlKXt0aGlzLnN0cmVhbUluZm8uY3JjMzI9aShlLmRhdGEsdGhpcy5zdHJlYW1JbmZvLmNyYzMyfHwwKSx0aGlzLnB1c2goZSl9LHQuZXhwb3J0cz1zfSx7XCIuLi9jcmMzMlwiOjQsXCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyNjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyhlKXtpLmNhbGwodGhpcyxcIkRhdGFMZW5ndGhQcm9iZSBmb3IgXCIrZSksdGhpcy5wcm9wTmFtZT1lLHRoaXMud2l0aFN0cmVhbUluZm8oZSwwKX1uLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe2lmKGUpe3ZhciB0PXRoaXMuc3RyZWFtSW5mb1t0aGlzLnByb3BOYW1lXXx8MDt0aGlzLnN0cmVhbUluZm9bdGhpcy5wcm9wTmFtZV09dCtlLmRhdGEubGVuZ3RofWkucHJvdG90eXBlLnByb2Nlc3NDaHVuay5jYWxsKHRoaXMsZSl9LHQuZXhwb3J0cz1zfSx7XCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyNzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyhlKXtpLmNhbGwodGhpcyxcIkRhdGFXb3JrZXJcIik7dmFyIHQ9dGhpczt0aGlzLmRhdGFJc1JlYWR5PSExLHRoaXMuaW5kZXg9MCx0aGlzLm1heD0wLHRoaXMuZGF0YT1udWxsLHRoaXMudHlwZT1cIlwiLHRoaXMuX3RpY2tTY2hlZHVsZWQ9ITEsZS50aGVuKGZ1bmN0aW9uKGUpe3QuZGF0YUlzUmVhZHk9ITAsdC5kYXRhPWUsdC5tYXg9ZSYmZS5sZW5ndGh8fDAsdC50eXBlPW4uZ2V0VHlwZU9mKGUpLHQuaXNQYXVzZWR8fHQuX3RpY2tBbmRSZXBlYXQoKX0sZnVuY3Rpb24oZSl7dC5lcnJvcihlKX0pfW4uaW5oZXJpdHMocyxpKSxzLnByb3RvdHlwZS5jbGVhblVwPWZ1bmN0aW9uKCl7aS5wcm90b3R5cGUuY2xlYW5VcC5jYWxsKHRoaXMpLHRoaXMuZGF0YT1udWxsfSxzLnByb3RvdHlwZS5yZXN1bWU9ZnVuY3Rpb24oKXtyZXR1cm4hIWkucHJvdG90eXBlLnJlc3VtZS5jYWxsKHRoaXMpJiYoIXRoaXMuX3RpY2tTY2hlZHVsZWQmJnRoaXMuZGF0YUlzUmVhZHkmJih0aGlzLl90aWNrU2NoZWR1bGVkPSEwLG4uZGVsYXkodGhpcy5fdGlja0FuZFJlcGVhdCxbXSx0aGlzKSksITApfSxzLnByb3RvdHlwZS5fdGlja0FuZFJlcGVhdD1mdW5jdGlvbigpe3RoaXMuX3RpY2tTY2hlZHVsZWQ9ITEsdGhpcy5pc1BhdXNlZHx8dGhpcy5pc0ZpbmlzaGVkfHwodGhpcy5fdGljaygpLHRoaXMuaXNGaW5pc2hlZHx8KG4uZGVsYXkodGhpcy5fdGlja0FuZFJlcGVhdCxbXSx0aGlzKSx0aGlzLl90aWNrU2NoZWR1bGVkPSEwKSl9LHMucHJvdG90eXBlLl90aWNrPWZ1bmN0aW9uKCl7aWYodGhpcy5pc1BhdXNlZHx8dGhpcy5pc0ZpbmlzaGVkKXJldHVybiExO3ZhciBlPW51bGwsdD1NYXRoLm1pbih0aGlzLm1heCx0aGlzLmluZGV4KzE2Mzg0KTtpZih0aGlzLmluZGV4Pj10aGlzLm1heClyZXR1cm4gdGhpcy5lbmQoKTtzd2l0Y2godGhpcy50eXBlKXtjYXNlXCJzdHJpbmdcIjplPXRoaXMuZGF0YS5zdWJzdHJpbmcodGhpcy5pbmRleCx0KTticmVhaztjYXNlXCJ1aW50OGFycmF5XCI6ZT10aGlzLmRhdGEuc3ViYXJyYXkodGhpcy5pbmRleCx0KTticmVhaztjYXNlXCJhcnJheVwiOmNhc2VcIm5vZGVidWZmZXJcIjplPXRoaXMuZGF0YS5zbGljZSh0aGlzLmluZGV4LHQpfXJldHVybiB0aGlzLmluZGV4PXQsdGhpcy5wdXNoKHtkYXRhOmUsbWV0YTp7cGVyY2VudDp0aGlzLm1heD90aGlzLmluZGV4L3RoaXMubWF4KjEwMDowfX0pfSx0LmV4cG9ydHM9c30se1wiLi4vdXRpbHNcIjozMixcIi4vR2VuZXJpY1dvcmtlclwiOjI4fV0sMjg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3RoaXMubmFtZT1lfHxcImRlZmF1bHRcIix0aGlzLnN0cmVhbUluZm89e30sdGhpcy5nZW5lcmF0ZWRFcnJvcj1udWxsLHRoaXMuZXh0cmFTdHJlYW1JbmZvPXt9LHRoaXMuaXNQYXVzZWQ9ITAsdGhpcy5pc0ZpbmlzaGVkPSExLHRoaXMuaXNMb2NrZWQ9ITEsdGhpcy5fbGlzdGVuZXJzPXtkYXRhOltdLGVuZDpbXSxlcnJvcjpbXX0sdGhpcy5wcmV2aW91cz1udWxsfW4ucHJvdG90eXBlPXtwdXNoOmZ1bmN0aW9uKGUpe3RoaXMuZW1pdChcImRhdGFcIixlKX0sZW5kOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0ZpbmlzaGVkKXJldHVybiExO3RoaXMuZmx1c2goKTt0cnl7dGhpcy5lbWl0KFwiZW5kXCIpLHRoaXMuY2xlYW5VcCgpLHRoaXMuaXNGaW5pc2hlZD0hMH1jYXRjaChlKXt0aGlzLmVtaXQoXCJlcnJvclwiLGUpfXJldHVybiEwfSxlcnJvcjpmdW5jdGlvbihlKXtyZXR1cm4hdGhpcy5pc0ZpbmlzaGVkJiYodGhpcy5pc1BhdXNlZD90aGlzLmdlbmVyYXRlZEVycm9yPWU6KHRoaXMuaXNGaW5pc2hlZD0hMCx0aGlzLmVtaXQoXCJlcnJvclwiLGUpLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMuZXJyb3IoZSksdGhpcy5jbGVhblVwKCkpLCEwKX0sb246ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2VdLnB1c2godCksdGhpc30sY2xlYW5VcDpmdW5jdGlvbigpe3RoaXMuc3RyZWFtSW5mbz10aGlzLmdlbmVyYXRlZEVycm9yPXRoaXMuZXh0cmFTdHJlYW1JbmZvPW51bGwsdGhpcy5fbGlzdGVuZXJzPVtdfSxlbWl0OmZ1bmN0aW9uKGUsdCl7aWYodGhpcy5fbGlzdGVuZXJzW2VdKWZvcih2YXIgcj0wO3I8dGhpcy5fbGlzdGVuZXJzW2VdLmxlbmd0aDtyKyspdGhpcy5fbGlzdGVuZXJzW2VdW3JdLmNhbGwodGhpcyx0KX0scGlwZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZWdpc3RlclByZXZpb3VzKHRoaXMpfSxyZWdpc3RlclByZXZpb3VzOmZ1bmN0aW9uKGUpe2lmKHRoaXMuaXNMb2NrZWQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0cmVhbSAnXCIrdGhpcytcIicgaGFzIGFscmVhZHkgYmVlbiB1c2VkLlwiKTt0aGlzLnN0cmVhbUluZm89ZS5zdHJlYW1JbmZvLHRoaXMubWVyZ2VTdHJlYW1JbmZvKCksdGhpcy5wcmV2aW91cz1lO3ZhciB0PXRoaXM7cmV0dXJuIGUub24oXCJkYXRhXCIsZnVuY3Rpb24oZSl7dC5wcm9jZXNzQ2h1bmsoZSl9KSxlLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXt0LmVuZCgpfSksZS5vbihcImVycm9yXCIsZnVuY3Rpb24oZSl7dC5lcnJvcihlKX0pLHRoaXN9LHBhdXNlOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaXNQYXVzZWQmJiF0aGlzLmlzRmluaXNoZWQmJih0aGlzLmlzUGF1c2VkPSEwLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMucGF1c2UoKSwhMCl9LHJlc3VtZTpmdW5jdGlvbigpe2lmKCF0aGlzLmlzUGF1c2VkfHx0aGlzLmlzRmluaXNoZWQpcmV0dXJuITE7dmFyIGU9dGhpcy5pc1BhdXNlZD0hMTtyZXR1cm4gdGhpcy5nZW5lcmF0ZWRFcnJvciYmKHRoaXMuZXJyb3IodGhpcy5nZW5lcmF0ZWRFcnJvciksZT0hMCksdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5yZXN1bWUoKSwhZX0sZmx1c2g6ZnVuY3Rpb24oKXt9LHByb2Nlc3NDaHVuazpmdW5jdGlvbihlKXt0aGlzLnB1c2goZSl9LHdpdGhTdHJlYW1JbmZvOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZXh0cmFTdHJlYW1JbmZvW2VdPXQsdGhpcy5tZXJnZVN0cmVhbUluZm8oKSx0aGlzfSxtZXJnZVN0cmVhbUluZm86ZnVuY3Rpb24oKXtmb3IodmFyIGUgaW4gdGhpcy5leHRyYVN0cmVhbUluZm8pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuZXh0cmFTdHJlYW1JbmZvLGUpJiYodGhpcy5zdHJlYW1JbmZvW2VdPXRoaXMuZXh0cmFTdHJlYW1JbmZvW2VdKX0sbG9jazpmdW5jdGlvbigpe2lmKHRoaXMuaXNMb2NrZWQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0cmVhbSAnXCIrdGhpcytcIicgaGFzIGFscmVhZHkgYmVlbiB1c2VkLlwiKTt0aGlzLmlzTG9ja2VkPSEwLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMubG9jaygpfSx0b1N0cmluZzpmdW5jdGlvbigpe3ZhciBlPVwiV29ya2VyIFwiK3RoaXMubmFtZTtyZXR1cm4gdGhpcy5wcmV2aW91cz90aGlzLnByZXZpb3VzK1wiIC0+IFwiK2U6ZX19LHQuZXhwb3J0cz1ufSx7fV0sMjk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaD1lKFwiLi4vdXRpbHNcIiksaT1lKFwiLi9Db252ZXJ0V29ya2VyXCIpLHM9ZShcIi4vR2VuZXJpY1dvcmtlclwiKSx1PWUoXCIuLi9iYXNlNjRcIiksbj1lKFwiLi4vc3VwcG9ydFwiKSxhPWUoXCIuLi9leHRlcm5hbFwiKSxvPW51bGw7aWYobi5ub2Rlc3RyZWFtKXRyeXtvPWUoXCIuLi9ub2RlanMvTm9kZWpzU3RyZWFtT3V0cHV0QWRhcHRlclwiKX1jYXRjaChlKXt9ZnVuY3Rpb24gbChlLG8pe3JldHVybiBuZXcgYS5Qcm9taXNlKGZ1bmN0aW9uKHQscil7dmFyIG49W10saT1lLl9pbnRlcm5hbFR5cGUscz1lLl9vdXRwdXRUeXBlLGE9ZS5fbWltZVR5cGU7ZS5vbihcImRhdGFcIixmdW5jdGlvbihlLHQpe24ucHVzaChlKSxvJiZvKHQpfSkub24oXCJlcnJvclwiLGZ1bmN0aW9uKGUpe249W10scihlKX0pLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXt0cnl7dmFyIGU9ZnVuY3Rpb24oZSx0LHIpe3N3aXRjaChlKXtjYXNlXCJibG9iXCI6cmV0dXJuIGgubmV3QmxvYihoLnRyYW5zZm9ybVRvKFwiYXJyYXlidWZmZXJcIix0KSxyKTtjYXNlXCJiYXNlNjRcIjpyZXR1cm4gdS5lbmNvZGUodCk7ZGVmYXVsdDpyZXR1cm4gaC50cmFuc2Zvcm1UbyhlLHQpfX0ocyxmdW5jdGlvbihlLHQpe3ZhciByLG49MCxpPW51bGwscz0wO2ZvcihyPTA7cjx0Lmxlbmd0aDtyKyspcys9dFtyXS5sZW5ndGg7c3dpdGNoKGUpe2Nhc2VcInN0cmluZ1wiOnJldHVybiB0LmpvaW4oXCJcIik7Y2FzZVwiYXJyYXlcIjpyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSx0KTtjYXNlXCJ1aW50OGFycmF5XCI6Zm9yKGk9bmV3IFVpbnQ4QXJyYXkocykscj0wO3I8dC5sZW5ndGg7cisrKWkuc2V0KHRbcl0sbiksbis9dFtyXS5sZW5ndGg7cmV0dXJuIGk7Y2FzZVwibm9kZWJ1ZmZlclwiOnJldHVybiBCdWZmZXIuY29uY2F0KHQpO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKFwiY29uY2F0IDogdW5zdXBwb3J0ZWQgdHlwZSAnXCIrZStcIidcIil9fShpLG4pLGEpO3QoZSl9Y2F0Y2goZSl7cihlKX1uPVtdfSkucmVzdW1lKCl9KX1mdW5jdGlvbiBmKGUsdCxyKXt2YXIgbj10O3N3aXRjaCh0KXtjYXNlXCJibG9iXCI6Y2FzZVwiYXJyYXlidWZmZXJcIjpuPVwidWludDhhcnJheVwiO2JyZWFrO2Nhc2VcImJhc2U2NFwiOm49XCJzdHJpbmdcIn10cnl7dGhpcy5faW50ZXJuYWxUeXBlPW4sdGhpcy5fb3V0cHV0VHlwZT10LHRoaXMuX21pbWVUeXBlPXIsaC5jaGVja1N1cHBvcnQobiksdGhpcy5fd29ya2VyPWUucGlwZShuZXcgaShuKSksZS5sb2NrKCl9Y2F0Y2goZSl7dGhpcy5fd29ya2VyPW5ldyBzKFwiZXJyb3JcIiksdGhpcy5fd29ya2VyLmVycm9yKGUpfX1mLnByb3RvdHlwZT17YWNjdW11bGF0ZTpmdW5jdGlvbihlKXtyZXR1cm4gbCh0aGlzLGUpfSxvbjpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXM7cmV0dXJuXCJkYXRhXCI9PT1lP3RoaXMuX3dvcmtlci5vbihlLGZ1bmN0aW9uKGUpe3QuY2FsbChyLGUuZGF0YSxlLm1ldGEpfSk6dGhpcy5fd29ya2VyLm9uKGUsZnVuY3Rpb24oKXtoLmRlbGF5KHQsYXJndW1lbnRzLHIpfSksdGhpc30scmVzdW1lOmZ1bmN0aW9uKCl7cmV0dXJuIGguZGVsYXkodGhpcy5fd29ya2VyLnJlc3VtZSxbXSx0aGlzLl93b3JrZXIpLHRoaXN9LHBhdXNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dvcmtlci5wYXVzZSgpLHRoaXN9LHRvTm9kZWpzU3RyZWFtOmZ1bmN0aW9uKGUpe2lmKGguY2hlY2tTdXBwb3J0KFwibm9kZXN0cmVhbVwiKSxcIm5vZGVidWZmZXJcIiE9PXRoaXMuX291dHB1dFR5cGUpdGhyb3cgbmV3IEVycm9yKHRoaXMuX291dHB1dFR5cGUrXCIgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIG1ldGhvZFwiKTtyZXR1cm4gbmV3IG8odGhpcyx7b2JqZWN0TW9kZTpcIm5vZGVidWZmZXJcIiE9PXRoaXMuX291dHB1dFR5cGV9LGUpfX0sdC5leHBvcnRzPWZ9LHtcIi4uL2Jhc2U2NFwiOjEsXCIuLi9leHRlcm5hbFwiOjYsXCIuLi9ub2RlanMvTm9kZWpzU3RyZWFtT3V0cHV0QWRhcHRlclwiOjEzLFwiLi4vc3VwcG9ydFwiOjMwLFwiLi4vdXRpbHNcIjozMixcIi4vQ29udmVydFdvcmtlclwiOjI0LFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwzMDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2lmKHIuYmFzZTY0PSEwLHIuYXJyYXk9ITAsci5zdHJpbmc9ITAsci5hcnJheWJ1ZmZlcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgQXJyYXlCdWZmZXImJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5LHIubm9kZWJ1ZmZlcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgQnVmZmVyLHIudWludDhhcnJheT1cInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSxcInVuZGVmaW5lZFwiPT10eXBlb2YgQXJyYXlCdWZmZXIpci5ibG9iPSExO2Vsc2V7dmFyIG49bmV3IEFycmF5QnVmZmVyKDApO3RyeXtyLmJsb2I9MD09PW5ldyBCbG9iKFtuXSx7dHlwZTpcImFwcGxpY2F0aW9uL3ppcFwifSkuc2l6ZX1jYXRjaChlKXt0cnl7dmFyIGk9bmV3KHNlbGYuQmxvYkJ1aWxkZXJ8fHNlbGYuV2ViS2l0QmxvYkJ1aWxkZXJ8fHNlbGYuTW96QmxvYkJ1aWxkZXJ8fHNlbGYuTVNCbG9iQnVpbGRlcik7aS5hcHBlbmQobiksci5ibG9iPTA9PT1pLmdldEJsb2IoXCJhcHBsaWNhdGlvbi96aXBcIikuc2l6ZX1jYXRjaChlKXtyLmJsb2I9ITF9fX10cnl7ci5ub2Rlc3RyZWFtPSEhZShcInJlYWRhYmxlLXN0cmVhbVwiKS5SZWFkYWJsZX1jYXRjaChlKXtyLm5vZGVzdHJlYW09ITF9fSx7XCJyZWFkYWJsZS1zdHJlYW1cIjoxNn1dLDMxOltmdW5jdGlvbihlLHQscyl7XCJ1c2Ugc3RyaWN0XCI7Zm9yKHZhciBvPWUoXCIuL3V0aWxzXCIpLGg9ZShcIi4vc3VwcG9ydFwiKSxyPWUoXCIuL25vZGVqc1V0aWxzXCIpLG49ZShcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksdT1uZXcgQXJyYXkoMjU2KSxpPTA7aTwyNTY7aSsrKXVbaV09MjUyPD1pPzY6MjQ4PD1pPzU6MjQwPD1pPzQ6MjI0PD1pPzM6MTkyPD1pPzI6MTt1WzI1NF09dVsyNTRdPTE7ZnVuY3Rpb24gYSgpe24uY2FsbCh0aGlzLFwidXRmLTggZGVjb2RlXCIpLHRoaXMubGVmdE92ZXI9bnVsbH1mdW5jdGlvbiBsKCl7bi5jYWxsKHRoaXMsXCJ1dGYtOCBlbmNvZGVcIil9cy51dGY4ZW5jb2RlPWZ1bmN0aW9uKGUpe3JldHVybiBoLm5vZGVidWZmZXI/ci5uZXdCdWZmZXJGcm9tKGUsXCJ1dGYtOFwiKTpmdW5jdGlvbihlKXt2YXIgdCxyLG4saSxzLGE9ZS5sZW5ndGgsbz0wO2ZvcihpPTA7aTxhO2krKyk1NTI5Nj09KDY0NTEyJihyPWUuY2hhckNvZGVBdChpKSkpJiZpKzE8YSYmNTYzMjA9PSg2NDUxMiYobj1lLmNoYXJDb2RlQXQoaSsxKSkpJiYocj02NTUzNisoci01NTI5Njw8MTApKyhuLTU2MzIwKSxpKyspLG8rPXI8MTI4PzE6cjwyMDQ4PzI6cjw2NTUzNj8zOjQ7Zm9yKHQ9aC51aW50OGFycmF5P25ldyBVaW50OEFycmF5KG8pOm5ldyBBcnJheShvKSxpPXM9MDtzPG87aSsrKTU1Mjk2PT0oNjQ1MTImKHI9ZS5jaGFyQ29kZUF0KGkpKSkmJmkrMTxhJiY1NjMyMD09KDY0NTEyJihuPWUuY2hhckNvZGVBdChpKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKG4tNTYzMjApLGkrKykscjwxMjg/dFtzKytdPXI6KHI8MjA0OD90W3MrK109MTkyfHI+Pj42OihyPDY1NTM2P3RbcysrXT0yMjR8cj4+PjEyOih0W3MrK109MjQwfHI+Pj4xOCx0W3MrK109MTI4fHI+Pj4xMiY2MyksdFtzKytdPTEyOHxyPj4+NiY2MyksdFtzKytdPTEyOHw2MyZyKTtyZXR1cm4gdH0oZSl9LHMudXRmOGRlY29kZT1mdW5jdGlvbihlKXtyZXR1cm4gaC5ub2RlYnVmZmVyP28udHJhbnNmb3JtVG8oXCJub2RlYnVmZmVyXCIsZSkudG9TdHJpbmcoXCJ1dGYtOFwiKTpmdW5jdGlvbihlKXt2YXIgdCxyLG4saSxzPWUubGVuZ3RoLGE9bmV3IEFycmF5KDIqcyk7Zm9yKHQ9cj0wO3Q8czspaWYoKG49ZVt0KytdKTwxMjgpYVtyKytdPW47ZWxzZSBpZig0PChpPXVbbl0pKWFbcisrXT02NTUzMyx0Kz1pLTE7ZWxzZXtmb3IobiY9Mj09PWk/MzE6Mz09PWk/MTU6NzsxPGkmJnQ8czspbj1uPDw2fDYzJmVbdCsrXSxpLS07MTxpP2FbcisrXT02NTUzMzpuPDY1NTM2P2FbcisrXT1uOihuLT02NTUzNixhW3IrK109NTUyOTZ8bj4+MTAmMTAyMyxhW3IrK109NTYzMjB8MTAyMyZuKX1yZXR1cm4gYS5sZW5ndGghPT1yJiYoYS5zdWJhcnJheT9hPWEuc3ViYXJyYXkoMCxyKTphLmxlbmd0aD1yKSxvLmFwcGx5RnJvbUNoYXJDb2RlKGEpfShlPW8udHJhbnNmb3JtVG8oaC51aW50OGFycmF5P1widWludDhhcnJheVwiOlwiYXJyYXlcIixlKSl9LG8uaW5oZXJpdHMoYSxuKSxhLnByb3RvdHlwZS5wcm9jZXNzQ2h1bms9ZnVuY3Rpb24oZSl7dmFyIHQ9by50cmFuc2Zvcm1UbyhoLnVpbnQ4YXJyYXk/XCJ1aW50OGFycmF5XCI6XCJhcnJheVwiLGUuZGF0YSk7aWYodGhpcy5sZWZ0T3ZlciYmdGhpcy5sZWZ0T3Zlci5sZW5ndGgpe2lmKGgudWludDhhcnJheSl7dmFyIHI9dDsodD1uZXcgVWludDhBcnJheShyLmxlbmd0aCt0aGlzLmxlZnRPdmVyLmxlbmd0aCkpLnNldCh0aGlzLmxlZnRPdmVyLDApLHQuc2V0KHIsdGhpcy5sZWZ0T3Zlci5sZW5ndGgpfWVsc2UgdD10aGlzLmxlZnRPdmVyLmNvbmNhdCh0KTt0aGlzLmxlZnRPdmVyPW51bGx9dmFyIG49ZnVuY3Rpb24oZSx0KXt2YXIgcjtmb3IoKHQ9dHx8ZS5sZW5ndGgpPmUubGVuZ3RoJiYodD1lLmxlbmd0aCkscj10LTE7MDw9ciYmMTI4PT0oMTkyJmVbcl0pOylyLS07cmV0dXJuIHI8MD90OjA9PT1yP3Q6cit1W2Vbcl1dPnQ/cjp0fSh0KSxpPXQ7biE9PXQubGVuZ3RoJiYoaC51aW50OGFycmF5PyhpPXQuc3ViYXJyYXkoMCxuKSx0aGlzLmxlZnRPdmVyPXQuc3ViYXJyYXkobix0Lmxlbmd0aCkpOihpPXQuc2xpY2UoMCxuKSx0aGlzLmxlZnRPdmVyPXQuc2xpY2Uobix0Lmxlbmd0aCkpKSx0aGlzLnB1c2goe2RhdGE6cy51dGY4ZGVjb2RlKGkpLG1ldGE6ZS5tZXRhfSl9LGEucHJvdG90eXBlLmZsdXNoPWZ1bmN0aW9uKCl7dGhpcy5sZWZ0T3ZlciYmdGhpcy5sZWZ0T3Zlci5sZW5ndGgmJih0aGlzLnB1c2goe2RhdGE6cy51dGY4ZGVjb2RlKHRoaXMubGVmdE92ZXIpLG1ldGE6e319KSx0aGlzLmxlZnRPdmVyPW51bGwpfSxzLlV0ZjhEZWNvZGVXb3JrZXI9YSxvLmluaGVyaXRzKGwsbiksbC5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe3RoaXMucHVzaCh7ZGF0YTpzLnV0ZjhlbmNvZGUoZS5kYXRhKSxtZXRhOmUubWV0YX0pfSxzLlV0ZjhFbmNvZGVXb3JrZXI9bH0se1wiLi9ub2RlanNVdGlsc1wiOjE0LFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi9zdXBwb3J0XCI6MzAsXCIuL3V0aWxzXCI6MzJ9XSwzMjpbZnVuY3Rpb24oZSx0LGEpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCIuL3N1cHBvcnRcIiksaD1lKFwiLi9iYXNlNjRcIikscj1lKFwiLi9ub2RlanNVdGlsc1wiKSx1PWUoXCIuL2V4dGVybmFsXCIpO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGV9ZnVuY3Rpb24gbChlLHQpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7KytyKXRbcl09MjU1JmUuY2hhckNvZGVBdChyKTtyZXR1cm4gdH1lKFwic2V0aW1tZWRpYXRlXCIpLGEubmV3QmxvYj1mdW5jdGlvbih0LHIpe2EuY2hlY2tTdXBwb3J0KFwiYmxvYlwiKTt0cnl7cmV0dXJuIG5ldyBCbG9iKFt0XSx7dHlwZTpyfSl9Y2F0Y2goZSl7dHJ5e3ZhciBuPW5ldyhzZWxmLkJsb2JCdWlsZGVyfHxzZWxmLldlYktpdEJsb2JCdWlsZGVyfHxzZWxmLk1vekJsb2JCdWlsZGVyfHxzZWxmLk1TQmxvYkJ1aWxkZXIpO3JldHVybiBuLmFwcGVuZCh0KSxuLmdldEJsb2Iocil9Y2F0Y2goZSl7dGhyb3cgbmV3IEVycm9yKFwiQnVnIDogY2FuJ3QgY29uc3RydWN0IHRoZSBCbG9iLlwiKX19fTt2YXIgaT17c3RyaW5naWZ5QnlDaHVuazpmdW5jdGlvbihlLHQscil7dmFyIG49W10saT0wLHM9ZS5sZW5ndGg7aWYoczw9cilyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLGUpO2Zvcig7aTxzOylcImFycmF5XCI9PT10fHxcIm5vZGVidWZmZXJcIj09PXQ/bi5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxlLnNsaWNlKGksTWF0aC5taW4oaStyLHMpKSkpOm4ucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsZS5zdWJhcnJheShpLE1hdGgubWluKGkrcixzKSkpKSxpKz1yO3JldHVybiBuLmpvaW4oXCJcIil9LHN0cmluZ2lmeUJ5Q2hhcjpmdW5jdGlvbihlKXtmb3IodmFyIHQ9XCJcIixyPTA7cjxlLmxlbmd0aDtyKyspdCs9U3RyaW5nLmZyb21DaGFyQ29kZShlW3JdKTtyZXR1cm4gdH0sYXBwbHlDYW5CZVVzZWQ6e3VpbnQ4YXJyYXk6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG8udWludDhhcnJheSYmMT09PVN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxuZXcgVWludDhBcnJheSgxKSkubGVuZ3RofWNhdGNoKGUpe3JldHVybiExfX0oKSxub2RlYnVmZmVyOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiBvLm5vZGVidWZmZXImJjE9PT1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsci5hbGxvY0J1ZmZlcigxKSkubGVuZ3RofWNhdGNoKGUpe3JldHVybiExfX0oKX19O2Z1bmN0aW9uIHMoZSl7dmFyIHQ9NjU1MzYscj1hLmdldFR5cGVPZihlKSxuPSEwO2lmKFwidWludDhhcnJheVwiPT09cj9uPWkuYXBwbHlDYW5CZVVzZWQudWludDhhcnJheTpcIm5vZGVidWZmZXJcIj09PXImJihuPWkuYXBwbHlDYW5CZVVzZWQubm9kZWJ1ZmZlciksbilmb3IoOzE8dDspdHJ5e3JldHVybiBpLnN0cmluZ2lmeUJ5Q2h1bmsoZSxyLHQpfWNhdGNoKGUpe3Q9TWF0aC5mbG9vcih0LzIpfXJldHVybiBpLnN0cmluZ2lmeUJ5Q2hhcihlKX1mdW5jdGlvbiBmKGUsdCl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspdFtyXT1lW3JdO3JldHVybiB0fWEuYXBwbHlGcm9tQ2hhckNvZGU9czt2YXIgYz17fTtjLnN0cmluZz17c3RyaW5nOm4sYXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSxuZXcgQXJyYXkoZS5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGMuc3RyaW5nLnVpbnQ4YXJyYXkoZSkuYnVmZmVyfSx1aW50OGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBsKGUsbmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpKX0sbm9kZWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gbChlLHIuYWxsb2NCdWZmZXIoZS5sZW5ndGgpKX19LGMuYXJyYXk9e3N0cmluZzpzLGFycmF5Om4sYXJyYXlidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBVaW50OEFycmF5KGUpLmJ1ZmZlcn0sdWludDhhcnJheTpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZSl9LG5vZGVidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHIubmV3QnVmZmVyRnJvbShlKX19LGMuYXJyYXlidWZmZXI9e3N0cmluZzpmdW5jdGlvbihlKXtyZXR1cm4gcyhuZXcgVWludDhBcnJheShlKSl9LGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBmKG5ldyBVaW50OEFycmF5KGUpLG5ldyBBcnJheShlLmJ5dGVMZW5ndGgpKX0sYXJyYXlidWZmZXI6bix1aW50OGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBuZXcgVWludDhBcnJheShlKX0sbm9kZWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gci5uZXdCdWZmZXJGcm9tKG5ldyBVaW50OEFycmF5KGUpKX19LGMudWludDhhcnJheT17c3RyaW5nOnMsYXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuIGYoZSxuZXcgQXJyYXkoZS5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuYnVmZmVyfSx1aW50OGFycmF5Om4sbm9kZWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gci5uZXdCdWZmZXJGcm9tKGUpfX0sYy5ub2RlYnVmZmVyPXtzdHJpbmc6cyxhcnJheTpmdW5jdGlvbihlKXtyZXR1cm4gZihlLG5ldyBBcnJheShlLmxlbmd0aCkpfSxhcnJheWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gYy5ub2RlYnVmZmVyLnVpbnQ4YXJyYXkoZSkuYnVmZmVyfSx1aW50OGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBmKGUsbmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpKX0sbm9kZWJ1ZmZlcjpufSxhLnRyYW5zZm9ybVRvPWZ1bmN0aW9uKGUsdCl7aWYodD10fHxcIlwiLCFlKXJldHVybiB0O2EuY2hlY2tTdXBwb3J0KGUpO3ZhciByPWEuZ2V0VHlwZU9mKHQpO3JldHVybiBjW3JdW2VdKHQpfSxhLnJlc29sdmU9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuc3BsaXQoXCIvXCIpLHI9W10sbj0wO248dC5sZW5ndGg7bisrKXt2YXIgaT10W25dO1wiLlwiPT09aXx8XCJcIj09PWkmJjAhPT1uJiZuIT09dC5sZW5ndGgtMXx8KFwiLi5cIj09PWk/ci5wb3AoKTpyLnB1c2goaSkpfXJldHVybiByLmpvaW4oXCIvXCIpfSxhLmdldFR5cGVPZj1mdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT9cInN0cmluZ1wiOlwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKT9cImFycmF5XCI6by5ub2RlYnVmZmVyJiZyLmlzQnVmZmVyKGUpP1wibm9kZWJ1ZmZlclwiOm8udWludDhhcnJheSYmZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXk/XCJ1aW50OGFycmF5XCI6by5hcnJheWJ1ZmZlciYmZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyP1wiYXJyYXlidWZmZXJcIjp2b2lkIDB9LGEuY2hlY2tTdXBwb3J0PWZ1bmN0aW9uKGUpe2lmKCFvW2UudG9Mb3dlckNhc2UoKV0pdGhyb3cgbmV3IEVycm9yKGUrXCIgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIHBsYXRmb3JtXCIpfSxhLk1BWF9WQUxVRV8xNkJJVFM9NjU1MzUsYS5NQVhfVkFMVUVfMzJCSVRTPS0xLGEucHJldHR5PWZ1bmN0aW9uKGUpe3ZhciB0LHIsbj1cIlwiO2ZvcihyPTA7cjwoZXx8XCJcIikubGVuZ3RoO3IrKyluKz1cIlxcXFx4XCIrKCh0PWUuY2hhckNvZGVBdChyKSk8MTY/XCIwXCI6XCJcIikrdC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtyZXR1cm4gbn0sYS5kZWxheT1mdW5jdGlvbihlLHQscil7c2V0SW1tZWRpYXRlKGZ1bmN0aW9uKCl7ZS5hcHBseShyfHxudWxsLHR8fFtdKX0pfSxhLmluaGVyaXRzPWZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gcigpe31yLnByb3RvdHlwZT10LnByb3RvdHlwZSxlLnByb3RvdHlwZT1uZXcgcn0sYS5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LHI9e307Zm9yKGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKWZvcih0IGluIGFyZ3VtZW50c1tlXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndW1lbnRzW2VdLHQpJiZ2b2lkIDA9PT1yW3RdJiYoclt0XT1hcmd1bWVudHNbZV1bdF0pO3JldHVybiByfSxhLnByZXBhcmVDb250ZW50PWZ1bmN0aW9uKHIsZSxuLGkscyl7cmV0dXJuIHUuUHJvbWlzZS5yZXNvbHZlKGUpLnRoZW4oZnVuY3Rpb24obil7cmV0dXJuIG8uYmxvYiYmKG4gaW5zdGFuY2VvZiBCbG9ifHwtMSE9PVtcIltvYmplY3QgRmlsZV1cIixcIltvYmplY3QgQmxvYl1cIl0uaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobikpKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXI/bmV3IHUuUHJvbWlzZShmdW5jdGlvbih0LHIpe3ZhciBlPW5ldyBGaWxlUmVhZGVyO2Uub25sb2FkPWZ1bmN0aW9uKGUpe3QoZS50YXJnZXQucmVzdWx0KX0sZS5vbmVycm9yPWZ1bmN0aW9uKGUpe3IoZS50YXJnZXQuZXJyb3IpfSxlLnJlYWRBc0FycmF5QnVmZmVyKG4pfSk6bn0pLnRoZW4oZnVuY3Rpb24oZSl7dmFyIHQ9YS5nZXRUeXBlT2YoZSk7cmV0dXJuIHQ/KFwiYXJyYXlidWZmZXJcIj09PXQ/ZT1hLnRyYW5zZm9ybVRvKFwidWludDhhcnJheVwiLGUpOlwic3RyaW5nXCI9PT10JiYocz9lPWguZGVjb2RlKGUpOm4mJiEwIT09aSYmKGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSxvLnVpbnQ4YXJyYXk/bmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpOm5ldyBBcnJheShlLmxlbmd0aCkpfShlKSkpLGUpOnUuUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2FuJ3QgcmVhZCB0aGUgZGF0YSBvZiAnXCIrcitcIicuIElzIGl0IGluIGEgc3VwcG9ydGVkIEphdmFTY3JpcHQgdHlwZSAoU3RyaW5nLCBCbG9iLCBBcnJheUJ1ZmZlciwgZXRjKSA/XCIpKX0pfX0se1wiLi9iYXNlNjRcIjoxLFwiLi9leHRlcm5hbFwiOjYsXCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N1cHBvcnRcIjozMCxzZXRpbW1lZGlhdGU6NTR9XSwzMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL3JlYWRlci9yZWFkZXJGb3JcIiksaT1lKFwiLi91dGlsc1wiKSxzPWUoXCIuL3NpZ25hdHVyZVwiKSxhPWUoXCIuL3ppcEVudHJ5XCIpLG89ZShcIi4vc3VwcG9ydFwiKTtmdW5jdGlvbiBoKGUpe3RoaXMuZmlsZXM9W10sdGhpcy5sb2FkT3B0aW9ucz1lfWgucHJvdG90eXBlPXtjaGVja1NpZ25hdHVyZTpmdW5jdGlvbihlKXtpZighdGhpcy5yZWFkZXIucmVhZEFuZENoZWNrU2lnbmF0dXJlKGUpKXt0aGlzLnJlYWRlci5pbmRleC09NDt2YXIgdD10aGlzLnJlYWRlci5yZWFkU3RyaW5nKDQpO3Rocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXAgb3IgYnVnOiB1bmV4cGVjdGVkIHNpZ25hdHVyZSAoXCIraS5wcmV0dHkodCkrXCIsIGV4cGVjdGVkIFwiK2kucHJldHR5KGUpK1wiKVwiKX19LGlzU2lnbmF0dXJlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcy5yZWFkZXIuaW5kZXg7dGhpcy5yZWFkZXIuc2V0SW5kZXgoZSk7dmFyIG49dGhpcy5yZWFkZXIucmVhZFN0cmluZyg0KT09PXQ7cmV0dXJuIHRoaXMucmVhZGVyLnNldEluZGV4KHIpLG59LHJlYWRCbG9ja0VuZE9mQ2VudHJhbDpmdW5jdGlvbigpe3RoaXMuZGlza051bWJlcj10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuY2VudHJhbERpclJlY29yZHM9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0aGlzLmNlbnRyYWxEaXJTaXplPXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy5jZW50cmFsRGlyT2Zmc2V0PXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy56aXBDb21tZW50TGVuZ3RoPXRoaXMucmVhZGVyLnJlYWRJbnQoMik7dmFyIGU9dGhpcy5yZWFkZXIucmVhZERhdGEodGhpcy56aXBDb21tZW50TGVuZ3RoKSx0PW8udWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCIscj1pLnRyYW5zZm9ybVRvKHQsZSk7dGhpcy56aXBDb21tZW50PXRoaXMubG9hZE9wdGlvbnMuZGVjb2RlRmlsZU5hbWUocil9LHJlYWRCbG9ja1ppcDY0RW5kT2ZDZW50cmFsOmZ1bmN0aW9uKCl7dGhpcy56aXA2NEVuZE9mQ2VudHJhbFNpemU9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLnJlYWRlci5za2lwKDQpLHRoaXMuZGlza051bWJlcj10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9dGhpcy5yZWFkZXIucmVhZEludCg0KSx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuY2VudHJhbERpclJlY29yZHM9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLmNlbnRyYWxEaXJTaXplPXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy5jZW50cmFsRGlyT2Zmc2V0PXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy56aXA2NEV4dGVuc2libGVEYXRhPXt9O2Zvcih2YXIgZSx0LHIsbj10aGlzLnppcDY0RW5kT2ZDZW50cmFsU2l6ZS00NDswPG47KWU9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0PXRoaXMucmVhZGVyLnJlYWRJbnQoNCkscj10aGlzLnJlYWRlci5yZWFkRGF0YSh0KSx0aGlzLnppcDY0RXh0ZW5zaWJsZURhdGFbZV09e2lkOmUsbGVuZ3RoOnQsdmFsdWU6cn19LHJlYWRCbG9ja1ppcDY0RW5kT2ZDZW50cmFsTG9jYXRvcjpmdW5jdGlvbigpe2lmKHRoaXMuZGlza1dpdGhaaXA2NENlbnRyYWxEaXJTdGFydD10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpcj10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuZGlza3NDb3VudD10aGlzLnJlYWRlci5yZWFkSW50KDQpLDE8dGhpcy5kaXNrc0NvdW50KXRocm93IG5ldyBFcnJvcihcIk11bHRpLXZvbHVtZXMgemlwIGFyZSBub3Qgc3VwcG9ydGVkXCIpfSxyZWFkTG9jYWxGaWxlczpmdW5jdGlvbigpe3ZhciBlLHQ7Zm9yKGU9MDtlPHRoaXMuZmlsZXMubGVuZ3RoO2UrKyl0PXRoaXMuZmlsZXNbZV0sdGhpcy5yZWFkZXIuc2V0SW5kZXgodC5sb2NhbEhlYWRlck9mZnNldCksdGhpcy5jaGVja1NpZ25hdHVyZShzLkxPQ0FMX0ZJTEVfSEVBREVSKSx0LnJlYWRMb2NhbFBhcnQodGhpcy5yZWFkZXIpLHQuaGFuZGxlVVRGOCgpLHQucHJvY2Vzc0F0dHJpYnV0ZXMoKX0scmVhZENlbnRyYWxEaXI6ZnVuY3Rpb24oKXt2YXIgZTtmb3IodGhpcy5yZWFkZXIuc2V0SW5kZXgodGhpcy5jZW50cmFsRGlyT2Zmc2V0KTt0aGlzLnJlYWRlci5yZWFkQW5kQ2hlY2tTaWduYXR1cmUocy5DRU5UUkFMX0ZJTEVfSEVBREVSKTspKGU9bmV3IGEoe3ppcDY0OnRoaXMuemlwNjR9LHRoaXMubG9hZE9wdGlvbnMpKS5yZWFkQ2VudHJhbFBhcnQodGhpcy5yZWFkZXIpLHRoaXMuZmlsZXMucHVzaChlKTtpZih0aGlzLmNlbnRyYWxEaXJSZWNvcmRzIT09dGhpcy5maWxlcy5sZW5ndGgmJjAhPT10aGlzLmNlbnRyYWxEaXJSZWNvcmRzJiYwPT09dGhpcy5maWxlcy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCBvciBidWc6IGV4cGVjdGVkIFwiK3RoaXMuY2VudHJhbERpclJlY29yZHMrXCIgcmVjb3JkcyBpbiBjZW50cmFsIGRpciwgZ290IFwiK3RoaXMuZmlsZXMubGVuZ3RoKX0scmVhZEVuZE9mQ2VudHJhbDpmdW5jdGlvbigpe3ZhciBlPXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKTtpZihlPDApdGhyb3chdGhpcy5pc1NpZ25hdHVyZSgwLHMuTE9DQUxfRklMRV9IRUFERVIpP25ldyBFcnJvcihcIkNhbid0IGZpbmQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5IDogaXMgdGhpcyBhIHppcCBmaWxlID8gSWYgaXQgaXMsIHNlZSBodHRwczovL3N0dWsuZ2l0aHViLmlvL2pzemlwL2RvY3VtZW50YXRpb24vaG93dG8vcmVhZF96aXAuaHRtbFwiKTpuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwOiBjYW4ndCBmaW5kIGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeVwiKTt0aGlzLnJlYWRlci5zZXRJbmRleChlKTt2YXIgdD1lO2lmKHRoaXMuY2hlY2tTaWduYXR1cmUocy5DRU5UUkFMX0RJUkVDVE9SWV9FTkQpLHRoaXMucmVhZEJsb2NrRW5kT2ZDZW50cmFsKCksdGhpcy5kaXNrTnVtYmVyPT09aS5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmRpc2tXaXRoQ2VudHJhbERpclN0YXJ0PT09aS5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz09PWkuTUFYX1ZBTFVFXzE2QklUU3x8dGhpcy5jZW50cmFsRGlyUmVjb3Jkcz09PWkuTUFYX1ZBTFVFXzE2QklUU3x8dGhpcy5jZW50cmFsRGlyU2l6ZT09PWkuTUFYX1ZBTFVFXzMyQklUU3x8dGhpcy5jZW50cmFsRGlyT2Zmc2V0PT09aS5NQVhfVkFMVUVfMzJCSVRTKXtpZih0aGlzLnppcDY0PSEwLChlPXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUikpPDApdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcDogY2FuJ3QgZmluZCB0aGUgWklQNjQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5IGxvY2F0b3JcIik7aWYodGhpcy5yZWFkZXIuc2V0SW5kZXgoZSksdGhpcy5jaGVja1NpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0xPQ0FUT1IpLHRoaXMucmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWxMb2NhdG9yKCksIXRoaXMuaXNTaWduYXR1cmUodGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyLHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKSYmKHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpcj10aGlzLnJlYWRlci5sYXN0SW5kZXhPZlNpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0VORCksdGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyPDApKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IGNhbid0IGZpbmQgdGhlIFpJUDY0IGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeVwiKTt0aGlzLnJlYWRlci5zZXRJbmRleCh0aGlzLnJlbGF0aXZlT2Zmc2V0RW5kT2ZaaXA2NENlbnRyYWxEaXIpLHRoaXMuY2hlY2tTaWduYXR1cmUocy5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQpLHRoaXMucmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWwoKX12YXIgcj10aGlzLmNlbnRyYWxEaXJPZmZzZXQrdGhpcy5jZW50cmFsRGlyU2l6ZTt0aGlzLnppcDY0JiYocis9MjAscis9MTIrdGhpcy56aXA2NEVuZE9mQ2VudHJhbFNpemUpO3ZhciBuPXQtcjtpZigwPG4pdGhpcy5pc1NpZ25hdHVyZSh0LHMuQ0VOVFJBTF9GSUxFX0hFQURFUil8fCh0aGlzLnJlYWRlci56ZXJvPW4pO2Vsc2UgaWYobjwwKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IG1pc3NpbmcgXCIrTWF0aC5hYnMobikrXCIgYnl0ZXMuXCIpfSxwcmVwYXJlUmVhZGVyOmZ1bmN0aW9uKGUpe3RoaXMucmVhZGVyPW4oZSl9LGxvYWQ6ZnVuY3Rpb24oZSl7dGhpcy5wcmVwYXJlUmVhZGVyKGUpLHRoaXMucmVhZEVuZE9mQ2VudHJhbCgpLHRoaXMucmVhZENlbnRyYWxEaXIoKSx0aGlzLnJlYWRMb2NhbEZpbGVzKCl9fSx0LmV4cG9ydHM9aH0se1wiLi9yZWFkZXIvcmVhZGVyRm9yXCI6MjIsXCIuL3NpZ25hdHVyZVwiOjIzLFwiLi9zdXBwb3J0XCI6MzAsXCIuL3V0aWxzXCI6MzIsXCIuL3ppcEVudHJ5XCI6MzR9XSwzNDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL3JlYWRlci9yZWFkZXJGb3JcIikscz1lKFwiLi91dGlsc1wiKSxpPWUoXCIuL2NvbXByZXNzZWRPYmplY3RcIiksYT1lKFwiLi9jcmMzMlwiKSxvPWUoXCIuL3V0ZjhcIiksaD1lKFwiLi9jb21wcmVzc2lvbnNcIiksdT1lKFwiLi9zdXBwb3J0XCIpO2Z1bmN0aW9uIGwoZSx0KXt0aGlzLm9wdGlvbnM9ZSx0aGlzLmxvYWRPcHRpb25zPXR9bC5wcm90b3R5cGU9e2lzRW5jcnlwdGVkOmZ1bmN0aW9uKCl7cmV0dXJuIDE9PSgxJnRoaXMuYml0RmxhZyl9LHVzZVVURjg6ZnVuY3Rpb24oKXtyZXR1cm4gMjA0OD09KDIwNDgmdGhpcy5iaXRGbGFnKX0scmVhZExvY2FsUGFydDpmdW5jdGlvbihlKXt2YXIgdCxyO2lmKGUuc2tpcCgyMiksdGhpcy5maWxlTmFtZUxlbmd0aD1lLnJlYWRJbnQoMikscj1lLnJlYWRJbnQoMiksdGhpcy5maWxlTmFtZT1lLnJlYWREYXRhKHRoaXMuZmlsZU5hbWVMZW5ndGgpLGUuc2tpcChyKSwtMT09PXRoaXMuY29tcHJlc3NlZFNpemV8fC0xPT09dGhpcy51bmNvbXByZXNzZWRTaXplKXRocm93IG5ldyBFcnJvcihcIkJ1ZyBvciBjb3JydXB0ZWQgemlwIDogZGlkbid0IGdldCBlbm91Z2ggaW5mb3JtYXRpb24gZnJvbSB0aGUgY2VudHJhbCBkaXJlY3RvcnkgKGNvbXByZXNzZWRTaXplID09PSAtMSB8fCB1bmNvbXByZXNzZWRTaXplID09PSAtMSlcIik7aWYobnVsbD09PSh0PWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCBpbiBoKWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoLHQpJiZoW3RdLm1hZ2ljPT09ZSlyZXR1cm4gaFt0XTtyZXR1cm4gbnVsbH0odGhpcy5jb21wcmVzc2lvbk1ldGhvZCkpKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXAgOiBjb21wcmVzc2lvbiBcIitzLnByZXR0eSh0aGlzLmNvbXByZXNzaW9uTWV0aG9kKStcIiB1bmtub3duIChpbm5lciBmaWxlIDogXCIrcy50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHRoaXMuZmlsZU5hbWUpK1wiKVwiKTt0aGlzLmRlY29tcHJlc3NlZD1uZXcgaSh0aGlzLmNvbXByZXNzZWRTaXplLHRoaXMudW5jb21wcmVzc2VkU2l6ZSx0aGlzLmNyYzMyLHQsZS5yZWFkRGF0YSh0aGlzLmNvbXByZXNzZWRTaXplKSl9LHJlYWRDZW50cmFsUGFydDpmdW5jdGlvbihlKXt0aGlzLnZlcnNpb25NYWRlQnk9ZS5yZWFkSW50KDIpLGUuc2tpcCgyKSx0aGlzLmJpdEZsYWc9ZS5yZWFkSW50KDIpLHRoaXMuY29tcHJlc3Npb25NZXRob2Q9ZS5yZWFkU3RyaW5nKDIpLHRoaXMuZGF0ZT1lLnJlYWREYXRlKCksdGhpcy5jcmMzMj1lLnJlYWRJbnQoNCksdGhpcy5jb21wcmVzc2VkU2l6ZT1lLnJlYWRJbnQoNCksdGhpcy51bmNvbXByZXNzZWRTaXplPWUucmVhZEludCg0KTt2YXIgdD1lLnJlYWRJbnQoMik7aWYodGhpcy5leHRyYUZpZWxkc0xlbmd0aD1lLnJlYWRJbnQoMiksdGhpcy5maWxlQ29tbWVudExlbmd0aD1lLnJlYWRJbnQoMiksdGhpcy5kaXNrTnVtYmVyU3RhcnQ9ZS5yZWFkSW50KDIpLHRoaXMuaW50ZXJuYWxGaWxlQXR0cmlidXRlcz1lLnJlYWRJbnQoMiksdGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzPWUucmVhZEludCg0KSx0aGlzLmxvY2FsSGVhZGVyT2Zmc2V0PWUucmVhZEludCg0KSx0aGlzLmlzRW5jcnlwdGVkKCkpdGhyb3cgbmV3IEVycm9yKFwiRW5jcnlwdGVkIHppcCBhcmUgbm90IHN1cHBvcnRlZFwiKTtlLnNraXAodCksdGhpcy5yZWFkRXh0cmFGaWVsZHMoZSksdGhpcy5wYXJzZVpJUDY0RXh0cmFGaWVsZChlKSx0aGlzLmZpbGVDb21tZW50PWUucmVhZERhdGEodGhpcy5maWxlQ29tbWVudExlbmd0aCl9LHByb2Nlc3NBdHRyaWJ1dGVzOmZ1bmN0aW9uKCl7dGhpcy51bml4UGVybWlzc2lvbnM9bnVsbCx0aGlzLmRvc1Blcm1pc3Npb25zPW51bGw7dmFyIGU9dGhpcy52ZXJzaW9uTWFkZUJ5Pj44O3RoaXMuZGlyPSEhKDE2JnRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcyksMD09ZSYmKHRoaXMuZG9zUGVybWlzc2lvbnM9NjMmdGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzKSwzPT1lJiYodGhpcy51bml4UGVybWlzc2lvbnM9dGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzPj4xNiY2NTUzNSksdGhpcy5kaXJ8fFwiL1wiIT09dGhpcy5maWxlTmFtZVN0ci5zbGljZSgtMSl8fCh0aGlzLmRpcj0hMCl9LHBhcnNlWklQNjRFeHRyYUZpZWxkOmZ1bmN0aW9uKCl7aWYodGhpcy5leHRyYUZpZWxkc1sxXSl7dmFyIGU9bih0aGlzLmV4dHJhRmllbGRzWzFdLnZhbHVlKTt0aGlzLnVuY29tcHJlc3NlZFNpemU9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLnVuY29tcHJlc3NlZFNpemU9ZS5yZWFkSW50KDgpKSx0aGlzLmNvbXByZXNzZWRTaXplPT09cy5NQVhfVkFMVUVfMzJCSVRTJiYodGhpcy5jb21wcmVzc2VkU2l6ZT1lLnJlYWRJbnQoOCkpLHRoaXMubG9jYWxIZWFkZXJPZmZzZXQ9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLmxvY2FsSGVhZGVyT2Zmc2V0PWUucmVhZEludCg4KSksdGhpcy5kaXNrTnVtYmVyU3RhcnQ9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLmRpc2tOdW1iZXJTdGFydD1lLnJlYWRJbnQoNCkpfX0scmVhZEV4dHJhRmllbGRzOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpPWUuaW5kZXgrdGhpcy5leHRyYUZpZWxkc0xlbmd0aDtmb3IodGhpcy5leHRyYUZpZWxkc3x8KHRoaXMuZXh0cmFGaWVsZHM9e30pO2UuaW5kZXgrNDxpOyl0PWUucmVhZEludCgyKSxyPWUucmVhZEludCgyKSxuPWUucmVhZERhdGEociksdGhpcy5leHRyYUZpZWxkc1t0XT17aWQ6dCxsZW5ndGg6cix2YWx1ZTpufTtlLnNldEluZGV4KGkpfSxoYW5kbGVVVEY4OmZ1bmN0aW9uKCl7dmFyIGU9dS51aW50OGFycmF5P1widWludDhhcnJheVwiOlwiYXJyYXlcIjtpZih0aGlzLnVzZVVURjgoKSl0aGlzLmZpbGVOYW1lU3RyPW8udXRmOGRlY29kZSh0aGlzLmZpbGVOYW1lKSx0aGlzLmZpbGVDb21tZW50U3RyPW8udXRmOGRlY29kZSh0aGlzLmZpbGVDb21tZW50KTtlbHNle3ZhciB0PXRoaXMuZmluZEV4dHJhRmllbGRVbmljb2RlUGF0aCgpO2lmKG51bGwhPT10KXRoaXMuZmlsZU5hbWVTdHI9dDtlbHNle3ZhciByPXMudHJhbnNmb3JtVG8oZSx0aGlzLmZpbGVOYW1lKTt0aGlzLmZpbGVOYW1lU3RyPXRoaXMubG9hZE9wdGlvbnMuZGVjb2RlRmlsZU5hbWUocil9dmFyIG49dGhpcy5maW5kRXh0cmFGaWVsZFVuaWNvZGVDb21tZW50KCk7aWYobnVsbCE9PW4pdGhpcy5maWxlQ29tbWVudFN0cj1uO2Vsc2V7dmFyIGk9cy50cmFuc2Zvcm1UbyhlLHRoaXMuZmlsZUNvbW1lbnQpO3RoaXMuZmlsZUNvbW1lbnRTdHI9dGhpcy5sb2FkT3B0aW9ucy5kZWNvZGVGaWxlTmFtZShpKX19fSxmaW5kRXh0cmFGaWVsZFVuaWNvZGVQYXRoOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5leHRyYUZpZWxkc1syODc4OV07aWYoZSl7dmFyIHQ9bihlLnZhbHVlKTtyZXR1cm4gMSE9PXQucmVhZEludCgxKT9udWxsOmEodGhpcy5maWxlTmFtZSkhPT10LnJlYWRJbnQoNCk/bnVsbDpvLnV0ZjhkZWNvZGUodC5yZWFkRGF0YShlLmxlbmd0aC01KSl9cmV0dXJuIG51bGx9LGZpbmRFeHRyYUZpZWxkVW5pY29kZUNvbW1lbnQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmV4dHJhRmllbGRzWzI1NDYxXTtpZihlKXt2YXIgdD1uKGUudmFsdWUpO3JldHVybiAxIT09dC5yZWFkSW50KDEpP251bGw6YSh0aGlzLmZpbGVDb21tZW50KSE9PXQucmVhZEludCg0KT9udWxsOm8udXRmOGRlY29kZSh0LnJlYWREYXRhKGUubGVuZ3RoLTUpKX1yZXR1cm4gbnVsbH19LHQuZXhwb3J0cz1sfSx7XCIuL2NvbXByZXNzZWRPYmplY3RcIjoyLFwiLi9jb21wcmVzc2lvbnNcIjozLFwiLi9jcmMzMlwiOjQsXCIuL3JlYWRlci9yZWFkZXJGb3JcIjoyMixcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGY4XCI6MzEsXCIuL3V0aWxzXCI6MzJ9XSwzNTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LHIpe3RoaXMubmFtZT1lLHRoaXMuZGlyPXIuZGlyLHRoaXMuZGF0ZT1yLmRhdGUsdGhpcy5jb21tZW50PXIuY29tbWVudCx0aGlzLnVuaXhQZXJtaXNzaW9ucz1yLnVuaXhQZXJtaXNzaW9ucyx0aGlzLmRvc1Blcm1pc3Npb25zPXIuZG9zUGVybWlzc2lvbnMsdGhpcy5fZGF0YT10LHRoaXMuX2RhdGFCaW5hcnk9ci5iaW5hcnksdGhpcy5vcHRpb25zPXtjb21wcmVzc2lvbjpyLmNvbXByZXNzaW9uLGNvbXByZXNzaW9uT3B0aW9uczpyLmNvbXByZXNzaW9uT3B0aW9uc319dmFyIHM9ZShcIi4vc3RyZWFtL1N0cmVhbUhlbHBlclwiKSxpPWUoXCIuL3N0cmVhbS9EYXRhV29ya2VyXCIpLGE9ZShcIi4vdXRmOFwiKSxvPWUoXCIuL2NvbXByZXNzZWRPYmplY3RcIiksaD1lKFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKTtuLnByb3RvdHlwZT17aW50ZXJuYWxTdHJlYW06ZnVuY3Rpb24oZSl7dmFyIHQ9bnVsbCxyPVwic3RyaW5nXCI7dHJ5e2lmKCFlKXRocm93IG5ldyBFcnJvcihcIk5vIG91dHB1dCB0eXBlIHNwZWNpZmllZC5cIik7dmFyIG49XCJzdHJpbmdcIj09PShyPWUudG9Mb3dlckNhc2UoKSl8fFwidGV4dFwiPT09cjtcImJpbmFyeXN0cmluZ1wiIT09ciYmXCJ0ZXh0XCIhPT1yfHwocj1cInN0cmluZ1wiKSx0PXRoaXMuX2RlY29tcHJlc3NXb3JrZXIoKTt2YXIgaT0hdGhpcy5fZGF0YUJpbmFyeTtpJiYhbiYmKHQ9dC5waXBlKG5ldyBhLlV0ZjhFbmNvZGVXb3JrZXIpKSwhaSYmbiYmKHQ9dC5waXBlKG5ldyBhLlV0ZjhEZWNvZGVXb3JrZXIpKX1jYXRjaChlKXsodD1uZXcgaChcImVycm9yXCIpKS5lcnJvcihlKX1yZXR1cm4gbmV3IHModCxyLFwiXCIpfSxhc3luYzpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmludGVybmFsU3RyZWFtKGUpLmFjY3VtdWxhdGUodCl9LG5vZGVTdHJlYW06ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5pbnRlcm5hbFN0cmVhbShlfHxcIm5vZGVidWZmZXJcIikudG9Ob2RlanNTdHJlYW0odCl9LF9jb21wcmVzc1dvcmtlcjpmdW5jdGlvbihlLHQpe2lmKHRoaXMuX2RhdGEgaW5zdGFuY2VvZiBvJiZ0aGlzLl9kYXRhLmNvbXByZXNzaW9uLm1hZ2ljPT09ZS5tYWdpYylyZXR1cm4gdGhpcy5fZGF0YS5nZXRDb21wcmVzc2VkV29ya2VyKCk7dmFyIHI9dGhpcy5fZGVjb21wcmVzc1dvcmtlcigpO3JldHVybiB0aGlzLl9kYXRhQmluYXJ5fHwocj1yLnBpcGUobmV3IGEuVXRmOEVuY29kZVdvcmtlcikpLG8uY3JlYXRlV29ya2VyRnJvbShyLGUsdCl9LF9kZWNvbXByZXNzV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2RhdGEgaW5zdGFuY2VvZiBvP3RoaXMuX2RhdGEuZ2V0Q29udGVudFdvcmtlcigpOnRoaXMuX2RhdGEgaW5zdGFuY2VvZiBoP3RoaXMuX2RhdGE6bmV3IGkodGhpcy5fZGF0YSl9fTtmb3IodmFyIHU9W1wiYXNUZXh0XCIsXCJhc0JpbmFyeVwiLFwiYXNOb2RlQnVmZmVyXCIsXCJhc1VpbnQ4QXJyYXlcIixcImFzQXJyYXlCdWZmZXJcIl0sbD1mdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpfSxmPTA7Zjx1Lmxlbmd0aDtmKyspbi5wcm90b3R5cGVbdVtmXV09bDt0LmV4cG9ydHM9bn0se1wiLi9jb21wcmVzc2VkT2JqZWN0XCI6MixcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIjoyNyxcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4vc3RyZWFtL1N0cmVhbUhlbHBlclwiOjI5LFwiLi91dGY4XCI6MzF9XSwzNjpbZnVuY3Rpb24oZSxsLHQpeyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjt2YXIgcixuLGU9dC5NdXRhdGlvbk9ic2VydmVyfHx0LldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7aWYoZSl7dmFyIGk9MCxzPW5ldyBlKHUpLGE9dC5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtzLm9ic2VydmUoYSx7Y2hhcmFjdGVyRGF0YTohMH0pLHI9ZnVuY3Rpb24oKXthLmRhdGE9aT0rK2klMn19ZWxzZSBpZih0LnNldEltbWVkaWF0ZXx8dm9pZCAwPT09dC5NZXNzYWdlQ2hhbm5lbClyPVwiZG9jdW1lbnRcImluIHQmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiB0LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik/ZnVuY3Rpb24oKXt2YXIgZT10LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ZS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXt1KCksZS5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksZT1udWxsfSx0LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKX06ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KHUsMCl9O2Vsc2V7dmFyIG89bmV3IHQuTWVzc2FnZUNoYW5uZWw7by5wb3J0MS5vbm1lc3NhZ2U9dSxyPWZ1bmN0aW9uKCl7by5wb3J0Mi5wb3N0TWVzc2FnZSgwKX19dmFyIGg9W107ZnVuY3Rpb24gdSgpe3ZhciBlLHQ7bj0hMDtmb3IodmFyIHI9aC5sZW5ndGg7cjspe2Zvcih0PWgsaD1bXSxlPS0xOysrZTxyOyl0W2VdKCk7cj1oLmxlbmd0aH1uPSExfWwuZXhwb3J0cz1mdW5jdGlvbihlKXsxIT09aC5wdXNoKGUpfHxufHxyKCl9fSkuY2FsbCh0aGlzLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30pfSx7fV0sMzc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT1lKFwiaW1tZWRpYXRlXCIpO2Z1bmN0aW9uIHUoKXt9dmFyIGw9e30scz1bXCJSRUpFQ1RFRFwiXSxhPVtcIkZVTEZJTExFRFwiXSxuPVtcIlBFTkRJTkdcIl07ZnVuY3Rpb24gbyhlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJyZXNvbHZlciBtdXN0IGJlIGEgZnVuY3Rpb25cIik7dGhpcy5zdGF0ZT1uLHRoaXMucXVldWU9W10sdGhpcy5vdXRjb21lPXZvaWQgMCxlIT09dSYmZCh0aGlzLGUpfWZ1bmN0aW9uIGgoZSx0LHIpe3RoaXMucHJvbWlzZT1lLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJih0aGlzLm9uRnVsZmlsbGVkPXQsdGhpcy5jYWxsRnVsZmlsbGVkPXRoaXMub3RoZXJDYWxsRnVsZmlsbGVkKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYodGhpcy5vblJlamVjdGVkPXIsdGhpcy5jYWxsUmVqZWN0ZWQ9dGhpcy5vdGhlckNhbGxSZWplY3RlZCl9ZnVuY3Rpb24gZih0LHIsbil7aShmdW5jdGlvbigpe3ZhciBlO3RyeXtlPXIobil9Y2F0Y2goZSl7cmV0dXJuIGwucmVqZWN0KHQsZSl9ZT09PXQ/bC5yZWplY3QodCxuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlc29sdmUgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKSk6bC5yZXNvbHZlKHQsZSl9KX1mdW5jdGlvbiBjKGUpe3ZhciB0PWUmJmUudGhlbjtpZihlJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXJldHVybiBmdW5jdGlvbigpe3QuYXBwbHkoZSxhcmd1bWVudHMpfX1mdW5jdGlvbiBkKHQsZSl7dmFyIHI9ITE7ZnVuY3Rpb24gbihlKXtyfHwocj0hMCxsLnJlamVjdCh0LGUpKX1mdW5jdGlvbiBpKGUpe3J8fChyPSEwLGwucmVzb2x2ZSh0LGUpKX12YXIgcz1wKGZ1bmN0aW9uKCl7ZShpLG4pfSk7XCJlcnJvclwiPT09cy5zdGF0dXMmJm4ocy52YWx1ZSl9ZnVuY3Rpb24gcChlLHQpe3ZhciByPXt9O3RyeXtyLnZhbHVlPWUodCksci5zdGF0dXM9XCJzdWNjZXNzXCJ9Y2F0Y2goZSl7ci5zdGF0dXM9XCJlcnJvclwiLHIudmFsdWU9ZX1yZXR1cm4gcn0odC5leHBvcnRzPW8pLnByb3RvdHlwZS5maW5hbGx5PWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpcmV0dXJuIHRoaXM7dmFyIHI9dGhpcy5jb25zdHJ1Y3RvcjtyZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiByLnJlc29sdmUodCgpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGV9KX0sZnVuY3Rpb24oZSl7cmV0dXJuIHIucmVzb2x2ZSh0KCkpLnRoZW4oZnVuY3Rpb24oKXt0aHJvdyBlfSl9KX0sby5wcm90b3R5cGUuY2F0Y2g9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudGhlbihudWxsLGUpfSxvLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmdGhpcy5zdGF0ZT09PWF8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJnRoaXMuc3RhdGU9PT1zKXJldHVybiB0aGlzO3ZhciByPW5ldyB0aGlzLmNvbnN0cnVjdG9yKHUpO3RoaXMuc3RhdGUhPT1uP2Yocix0aGlzLnN0YXRlPT09YT9lOnQsdGhpcy5vdXRjb21lKTp0aGlzLnF1ZXVlLnB1c2gobmV3IGgocixlLHQpKTtyZXR1cm4gcn0saC5wcm90b3R5cGUuY2FsbEZ1bGZpbGxlZD1mdW5jdGlvbihlKXtsLnJlc29sdmUodGhpcy5wcm9taXNlLGUpfSxoLnByb3RvdHlwZS5vdGhlckNhbGxGdWxmaWxsZWQ9ZnVuY3Rpb24oZSl7Zih0aGlzLnByb21pc2UsdGhpcy5vbkZ1bGZpbGxlZCxlKX0saC5wcm90b3R5cGUuY2FsbFJlamVjdGVkPWZ1bmN0aW9uKGUpe2wucmVqZWN0KHRoaXMucHJvbWlzZSxlKX0saC5wcm90b3R5cGUub3RoZXJDYWxsUmVqZWN0ZWQ9ZnVuY3Rpb24oZSl7Zih0aGlzLnByb21pc2UsdGhpcy5vblJlamVjdGVkLGUpfSxsLnJlc29sdmU9ZnVuY3Rpb24oZSx0KXt2YXIgcj1wKGMsdCk7aWYoXCJlcnJvclwiPT09ci5zdGF0dXMpcmV0dXJuIGwucmVqZWN0KGUsci52YWx1ZSk7dmFyIG49ci52YWx1ZTtpZihuKWQoZSxuKTtlbHNle2Uuc3RhdGU9YSxlLm91dGNvbWU9dDtmb3IodmFyIGk9LTEscz1lLnF1ZXVlLmxlbmd0aDsrK2k8czspZS5xdWV1ZVtpXS5jYWxsRnVsZmlsbGVkKHQpfXJldHVybiBlfSxsLnJlamVjdD1mdW5jdGlvbihlLHQpe2Uuc3RhdGU9cyxlLm91dGNvbWU9dDtmb3IodmFyIHI9LTEsbj1lLnF1ZXVlLmxlbmd0aDsrK3I8bjspZS5xdWV1ZVtyXS5jYWxsUmVqZWN0ZWQodCk7cmV0dXJuIGV9LG8ucmVzb2x2ZT1mdW5jdGlvbihlKXtpZihlIGluc3RhbmNlb2YgdGhpcylyZXR1cm4gZTtyZXR1cm4gbC5yZXNvbHZlKG5ldyB0aGlzKHUpLGUpfSxvLnJlamVjdD1mdW5jdGlvbihlKXt2YXIgdD1uZXcgdGhpcyh1KTtyZXR1cm4gbC5yZWplY3QodCxlKX0sby5hbGw9ZnVuY3Rpb24oZSl7dmFyIHI9dGhpcztpZihcIltvYmplY3QgQXJyYXldXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkpcmV0dXJuIHRoaXMucmVqZWN0KG5ldyBUeXBlRXJyb3IoXCJtdXN0IGJlIGFuIGFycmF5XCIpKTt2YXIgbj1lLmxlbmd0aCxpPSExO2lmKCFuKXJldHVybiB0aGlzLnJlc29sdmUoW10pO3ZhciBzPW5ldyBBcnJheShuKSxhPTAsdD0tMSxvPW5ldyB0aGlzKHUpO2Zvcig7Kyt0PG47KWgoZVt0XSx0KTtyZXR1cm4gbztmdW5jdGlvbiBoKGUsdCl7ci5yZXNvbHZlKGUpLnRoZW4oZnVuY3Rpb24oZSl7c1t0XT1lLCsrYSE9PW58fGl8fChpPSEwLGwucmVzb2x2ZShvLHMpKX0sZnVuY3Rpb24oZSl7aXx8KGk9ITAsbC5yZWplY3QobyxlKSl9KX19LG8ucmFjZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO2lmKFwiW29iamVjdCBBcnJheV1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSlyZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcihcIm11c3QgYmUgYW4gYXJyYXlcIikpO3ZhciByPWUubGVuZ3RoLG49ITE7aWYoIXIpcmV0dXJuIHRoaXMucmVzb2x2ZShbXSk7dmFyIGk9LTEscz1uZXcgdGhpcyh1KTtmb3IoOysraTxyOylhPWVbaV0sdC5yZXNvbHZlKGEpLnRoZW4oZnVuY3Rpb24oZSl7bnx8KG49ITAsbC5yZXNvbHZlKHMsZSkpfSxmdW5jdGlvbihlKXtufHwobj0hMCxsLnJlamVjdChzLGUpKX0pO3ZhciBhO3JldHVybiBzfX0se2ltbWVkaWF0ZTozNn1dLDM4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49e307KDAsZShcIi4vbGliL3V0aWxzL2NvbW1vblwiKS5hc3NpZ24pKG4sZShcIi4vbGliL2RlZmxhdGVcIiksZShcIi4vbGliL2luZmxhdGVcIiksZShcIi4vbGliL3psaWIvY29uc3RhbnRzXCIpKSx0LmV4cG9ydHM9bn0se1wiLi9saWIvZGVmbGF0ZVwiOjM5LFwiLi9saWIvaW5mbGF0ZVwiOjQwLFwiLi9saWIvdXRpbHMvY29tbW9uXCI6NDEsXCIuL2xpYi96bGliL2NvbnN0YW50c1wiOjQ0fV0sMzk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgYT1lKFwiLi96bGliL2RlZmxhdGVcIiksbz1lKFwiLi91dGlscy9jb21tb25cIiksaD1lKFwiLi91dGlscy9zdHJpbmdzXCIpLGk9ZShcIi4vemxpYi9tZXNzYWdlc1wiKSxzPWUoXCIuL3psaWIvenN0cmVhbVwiKSx1PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsbD0wLGY9LTEsYz0wLGQ9ODtmdW5jdGlvbiBwKGUpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHApKXJldHVybiBuZXcgcChlKTt0aGlzLm9wdGlvbnM9by5hc3NpZ24oe2xldmVsOmYsbWV0aG9kOmQsY2h1bmtTaXplOjE2Mzg0LHdpbmRvd0JpdHM6MTUsbWVtTGV2ZWw6OCxzdHJhdGVneTpjLHRvOlwiXCJ9LGV8fHt9KTt2YXIgdD10aGlzLm9wdGlvbnM7dC5yYXcmJjA8dC53aW5kb3dCaXRzP3Qud2luZG93Qml0cz0tdC53aW5kb3dCaXRzOnQuZ3ppcCYmMDx0LndpbmRvd0JpdHMmJnQud2luZG93Qml0czwxNiYmKHQud2luZG93Qml0cys9MTYpLHRoaXMuZXJyPTAsdGhpcy5tc2c9XCJcIix0aGlzLmVuZGVkPSExLHRoaXMuY2h1bmtzPVtdLHRoaXMuc3RybT1uZXcgcyx0aGlzLnN0cm0uYXZhaWxfb3V0PTA7dmFyIHI9YS5kZWZsYXRlSW5pdDIodGhpcy5zdHJtLHQubGV2ZWwsdC5tZXRob2QsdC53aW5kb3dCaXRzLHQubWVtTGV2ZWwsdC5zdHJhdGVneSk7aWYociE9PWwpdGhyb3cgbmV3IEVycm9yKGlbcl0pO2lmKHQuaGVhZGVyJiZhLmRlZmxhdGVTZXRIZWFkZXIodGhpcy5zdHJtLHQuaGVhZGVyKSx0LmRpY3Rpb25hcnkpe3ZhciBuO2lmKG49XCJzdHJpbmdcIj09dHlwZW9mIHQuZGljdGlvbmFyeT9oLnN0cmluZzJidWYodC5kaWN0aW9uYXJ5KTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT11LmNhbGwodC5kaWN0aW9uYXJ5KT9uZXcgVWludDhBcnJheSh0LmRpY3Rpb25hcnkpOnQuZGljdGlvbmFyeSwocj1hLmRlZmxhdGVTZXREaWN0aW9uYXJ5KHRoaXMuc3RybSxuKSkhPT1sKXRocm93IG5ldyBFcnJvcihpW3JdKTt0aGlzLl9kaWN0X3NldD0hMH19ZnVuY3Rpb24gbihlLHQpe3ZhciByPW5ldyBwKHQpO2lmKHIucHVzaChlLCEwKSxyLmVycil0aHJvdyByLm1zZ3x8aVtyLmVycl07cmV0dXJuIHIucmVzdWx0fXAucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGk9dGhpcy5zdHJtLHM9dGhpcy5vcHRpb25zLmNodW5rU2l6ZTtpZih0aGlzLmVuZGVkKXJldHVybiExO249dD09PX5+dD90OiEwPT09dD80OjAsXCJzdHJpbmdcIj09dHlwZW9mIGU/aS5pbnB1dD1oLnN0cmluZzJidWYoZSk6XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09dS5jYWxsKGUpP2kuaW5wdXQ9bmV3IFVpbnQ4QXJyYXkoZSk6aS5pbnB1dD1lLGkubmV4dF9pbj0wLGkuYXZhaWxfaW49aS5pbnB1dC5sZW5ndGg7ZG97aWYoMD09PWkuYXZhaWxfb3V0JiYoaS5vdXRwdXQ9bmV3IG8uQnVmOChzKSxpLm5leHRfb3V0PTAsaS5hdmFpbF9vdXQ9cyksMSE9PShyPWEuZGVmbGF0ZShpLG4pKSYmciE9PWwpcmV0dXJuIHRoaXMub25FbmQociksISh0aGlzLmVuZGVkPSEwKTswIT09aS5hdmFpbF9vdXQmJigwIT09aS5hdmFpbF9pbnx8NCE9PW4mJjIhPT1uKXx8KFwic3RyaW5nXCI9PT10aGlzLm9wdGlvbnMudG8/dGhpcy5vbkRhdGEoaC5idWYyYmluc3RyaW5nKG8uc2hyaW5rQnVmKGkub3V0cHV0LGkubmV4dF9vdXQpKSk6dGhpcy5vbkRhdGEoby5zaHJpbmtCdWYoaS5vdXRwdXQsaS5uZXh0X291dCkpKX13aGlsZSgoMDxpLmF2YWlsX2lufHwwPT09aS5hdmFpbF9vdXQpJiYxIT09cik7cmV0dXJuIDQ9PT1uPyhyPWEuZGVmbGF0ZUVuZCh0aGlzLnN0cm0pLHRoaXMub25FbmQociksdGhpcy5lbmRlZD0hMCxyPT09bCk6MiE9PW58fCh0aGlzLm9uRW5kKGwpLCEoaS5hdmFpbF9vdXQ9MCkpfSxwLnByb3RvdHlwZS5vbkRhdGE9ZnVuY3Rpb24oZSl7dGhpcy5jaHVua3MucHVzaChlKX0scC5wcm90b3R5cGUub25FbmQ9ZnVuY3Rpb24oZSl7ZT09PWwmJihcInN0cmluZ1wiPT09dGhpcy5vcHRpb25zLnRvP3RoaXMucmVzdWx0PXRoaXMuY2h1bmtzLmpvaW4oXCJcIik6dGhpcy5yZXN1bHQ9by5mbGF0dGVuQ2h1bmtzKHRoaXMuY2h1bmtzKSksdGhpcy5jaHVua3M9W10sdGhpcy5lcnI9ZSx0aGlzLm1zZz10aGlzLnN0cm0ubXNnfSxyLkRlZmxhdGU9cCxyLmRlZmxhdGU9bixyLmRlZmxhdGVSYXc9ZnVuY3Rpb24oZSx0KXtyZXR1cm4odD10fHx7fSkucmF3PSEwLG4oZSx0KX0sci5nemlwPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQ9dHx8e30pLmd6aXA9ITAsbihlLHQpfX0se1wiLi91dGlscy9jb21tb25cIjo0MSxcIi4vdXRpbHMvc3RyaW5nc1wiOjQyLFwiLi96bGliL2RlZmxhdGVcIjo0NixcIi4vemxpYi9tZXNzYWdlc1wiOjUxLFwiLi96bGliL3pzdHJlYW1cIjo1M31dLDQwOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9ZShcIi4vemxpYi9pbmZsYXRlXCIpLGQ9ZShcIi4vdXRpbHMvY29tbW9uXCIpLHA9ZShcIi4vdXRpbHMvc3RyaW5nc1wiKSxtPWUoXCIuL3psaWIvY29uc3RhbnRzXCIpLG49ZShcIi4vemxpYi9tZXNzYWdlc1wiKSxpPWUoXCIuL3psaWIvenN0cmVhbVwiKSxzPWUoXCIuL3psaWIvZ3poZWFkZXJcIiksXz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO2Z1bmN0aW9uIGEoZSl7aWYoISh0aGlzIGluc3RhbmNlb2YgYSkpcmV0dXJuIG5ldyBhKGUpO3RoaXMub3B0aW9ucz1kLmFzc2lnbih7Y2h1bmtTaXplOjE2Mzg0LHdpbmRvd0JpdHM6MCx0bzpcIlwifSxlfHx7fSk7dmFyIHQ9dGhpcy5vcHRpb25zO3QucmF3JiYwPD10LndpbmRvd0JpdHMmJnQud2luZG93Qml0czwxNiYmKHQud2luZG93Qml0cz0tdC53aW5kb3dCaXRzLDA9PT10LndpbmRvd0JpdHMmJih0LndpbmRvd0JpdHM9LTE1KSksISgwPD10LndpbmRvd0JpdHMmJnQud2luZG93Qml0czwxNil8fGUmJmUud2luZG93Qml0c3x8KHQud2luZG93Qml0cys9MzIpLDE1PHQud2luZG93Qml0cyYmdC53aW5kb3dCaXRzPDQ4JiYwPT0oMTUmdC53aW5kb3dCaXRzKSYmKHQud2luZG93Qml0c3w9MTUpLHRoaXMuZXJyPTAsdGhpcy5tc2c9XCJcIix0aGlzLmVuZGVkPSExLHRoaXMuY2h1bmtzPVtdLHRoaXMuc3RybT1uZXcgaSx0aGlzLnN0cm0uYXZhaWxfb3V0PTA7dmFyIHI9Yy5pbmZsYXRlSW5pdDIodGhpcy5zdHJtLHQud2luZG93Qml0cyk7aWYociE9PW0uWl9PSyl0aHJvdyBuZXcgRXJyb3IobltyXSk7dGhpcy5oZWFkZXI9bmV3IHMsYy5pbmZsYXRlR2V0SGVhZGVyKHRoaXMuc3RybSx0aGlzLmhlYWRlcil9ZnVuY3Rpb24gbyhlLHQpe3ZhciByPW5ldyBhKHQpO2lmKHIucHVzaChlLCEwKSxyLmVycil0aHJvdyByLm1zZ3x8bltyLmVycl07cmV0dXJuIHIucmVzdWx0fWEucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saD10aGlzLnN0cm0sdT10aGlzLm9wdGlvbnMuY2h1bmtTaXplLGw9dGhpcy5vcHRpb25zLmRpY3Rpb25hcnksZj0hMTtpZih0aGlzLmVuZGVkKXJldHVybiExO249dD09PX5+dD90OiEwPT09dD9tLlpfRklOSVNIOm0uWl9OT19GTFVTSCxcInN0cmluZ1wiPT10eXBlb2YgZT9oLmlucHV0PXAuYmluc3RyaW5nMmJ1ZihlKTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT1fLmNhbGwoZSk/aC5pbnB1dD1uZXcgVWludDhBcnJheShlKTpoLmlucHV0PWUsaC5uZXh0X2luPTAsaC5hdmFpbF9pbj1oLmlucHV0Lmxlbmd0aDtkb3tpZigwPT09aC5hdmFpbF9vdXQmJihoLm91dHB1dD1uZXcgZC5CdWY4KHUpLGgubmV4dF9vdXQ9MCxoLmF2YWlsX291dD11KSwocj1jLmluZmxhdGUoaCxtLlpfTk9fRkxVU0gpKT09PW0uWl9ORUVEX0RJQ1QmJmwmJihvPVwic3RyaW5nXCI9PXR5cGVvZiBsP3Auc3RyaW5nMmJ1ZihsKTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT1fLmNhbGwobCk/bmV3IFVpbnQ4QXJyYXkobCk6bCxyPWMuaW5mbGF0ZVNldERpY3Rpb25hcnkodGhpcy5zdHJtLG8pKSxyPT09bS5aX0JVRl9FUlJPUiYmITA9PT1mJiYocj1tLlpfT0ssZj0hMSksciE9PW0uWl9TVFJFQU1fRU5EJiZyIT09bS5aX09LKXJldHVybiB0aGlzLm9uRW5kKHIpLCEodGhpcy5lbmRlZD0hMCk7aC5uZXh0X291dCYmKDAhPT1oLmF2YWlsX291dCYmciE9PW0uWl9TVFJFQU1fRU5EJiYoMCE9PWguYXZhaWxfaW58fG4hPT1tLlpfRklOSVNIJiZuIT09bS5aX1NZTkNfRkxVU0gpfHwoXCJzdHJpbmdcIj09PXRoaXMub3B0aW9ucy50bz8oaT1wLnV0Zjhib3JkZXIoaC5vdXRwdXQsaC5uZXh0X291dCkscz1oLm5leHRfb3V0LWksYT1wLmJ1ZjJzdHJpbmcoaC5vdXRwdXQsaSksaC5uZXh0X291dD1zLGguYXZhaWxfb3V0PXUtcyxzJiZkLmFycmF5U2V0KGgub3V0cHV0LGgub3V0cHV0LGkscywwKSx0aGlzLm9uRGF0YShhKSk6dGhpcy5vbkRhdGEoZC5zaHJpbmtCdWYoaC5vdXRwdXQsaC5uZXh0X291dCkpKSksMD09PWguYXZhaWxfaW4mJjA9PT1oLmF2YWlsX291dCYmKGY9ITApfXdoaWxlKCgwPGguYXZhaWxfaW58fDA9PT1oLmF2YWlsX291dCkmJnIhPT1tLlpfU1RSRUFNX0VORCk7cmV0dXJuIHI9PT1tLlpfU1RSRUFNX0VORCYmKG49bS5aX0ZJTklTSCksbj09PW0uWl9GSU5JU0g/KHI9Yy5pbmZsYXRlRW5kKHRoaXMuc3RybSksdGhpcy5vbkVuZChyKSx0aGlzLmVuZGVkPSEwLHI9PT1tLlpfT0spOm4hPT1tLlpfU1lOQ19GTFVTSHx8KHRoaXMub25FbmQobS5aX09LKSwhKGguYXZhaWxfb3V0PTApKX0sYS5wcm90b3R5cGUub25EYXRhPWZ1bmN0aW9uKGUpe3RoaXMuY2h1bmtzLnB1c2goZSl9LGEucHJvdG90eXBlLm9uRW5kPWZ1bmN0aW9uKGUpe2U9PT1tLlpfT0smJihcInN0cmluZ1wiPT09dGhpcy5vcHRpb25zLnRvP3RoaXMucmVzdWx0PXRoaXMuY2h1bmtzLmpvaW4oXCJcIik6dGhpcy5yZXN1bHQ9ZC5mbGF0dGVuQ2h1bmtzKHRoaXMuY2h1bmtzKSksdGhpcy5jaHVua3M9W10sdGhpcy5lcnI9ZSx0aGlzLm1zZz10aGlzLnN0cm0ubXNnfSxyLkluZmxhdGU9YSxyLmluZmxhdGU9byxyLmluZmxhdGVSYXc9ZnVuY3Rpb24oZSx0KXtyZXR1cm4odD10fHx7fSkucmF3PSEwLG8oZSx0KX0sci51bmd6aXA9b30se1wiLi91dGlscy9jb21tb25cIjo0MSxcIi4vdXRpbHMvc3RyaW5nc1wiOjQyLFwiLi96bGliL2NvbnN0YW50c1wiOjQ0LFwiLi96bGliL2d6aGVhZGVyXCI6NDcsXCIuL3psaWIvaW5mbGF0ZVwiOjQ5LFwiLi96bGliL21lc3NhZ2VzXCI6NTEsXCIuL3psaWIvenN0cmVhbVwiOjUzfV0sNDE6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQxNkFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgSW50MzJBcnJheTtyLmFzc2lnbj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO3QubGVuZ3RoOyl7dmFyIHI9dC5zaGlmdCgpO2lmKHIpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiByKXRocm93IG5ldyBUeXBlRXJyb3IocitcIm11c3QgYmUgbm9uLW9iamVjdFwiKTtmb3IodmFyIG4gaW4gcilyLmhhc093blByb3BlcnR5KG4pJiYoZVtuXT1yW25dKX19cmV0dXJuIGV9LHIuc2hyaW5rQnVmPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUubGVuZ3RoPT09dD9lOmUuc3ViYXJyYXk/ZS5zdWJhcnJheSgwLHQpOihlLmxlbmd0aD10LGUpfTt2YXIgaT17YXJyYXlTZXQ6ZnVuY3Rpb24oZSx0LHIsbixpKXtpZih0LnN1YmFycmF5JiZlLnN1YmFycmF5KWUuc2V0KHQuc3ViYXJyYXkocixyK24pLGkpO2Vsc2UgZm9yKHZhciBzPTA7czxuO3MrKyllW2krc109dFtyK3NdfSxmbGF0dGVuQ2h1bmtzOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpLHMsYTtmb3IodD1uPTAscj1lLmxlbmd0aDt0PHI7dCsrKW4rPWVbdF0ubGVuZ3RoO2ZvcihhPW5ldyBVaW50OEFycmF5KG4pLHQ9aT0wLHI9ZS5sZW5ndGg7dDxyO3QrKylzPWVbdF0sYS5zZXQocyxpKSxpKz1zLmxlbmd0aDtyZXR1cm4gYX19LHM9e2FycmF5U2V0OmZ1bmN0aW9uKGUsdCxyLG4saSl7Zm9yKHZhciBzPTA7czxuO3MrKyllW2krc109dFtyK3NdfSxmbGF0dGVuQ2h1bmtzOmZ1bmN0aW9uKGUpe3JldHVybltdLmNvbmNhdC5hcHBseShbXSxlKX19O3Iuc2V0VHlwZWQ9ZnVuY3Rpb24oZSl7ZT8oci5CdWY4PVVpbnQ4QXJyYXksci5CdWYxNj1VaW50MTZBcnJheSxyLkJ1ZjMyPUludDMyQXJyYXksci5hc3NpZ24ocixpKSk6KHIuQnVmOD1BcnJheSxyLkJ1ZjE2PUFycmF5LHIuQnVmMzI9QXJyYXksci5hc3NpZ24ocixzKSl9LHIuc2V0VHlwZWQobil9LHt9XSw0MjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBoPWUoXCIuL2NvbW1vblwiKSxpPSEwLHM9ITA7dHJ5e1N0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxbMF0pfWNhdGNoKGUpe2k9ITF9dHJ5e1N0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxuZXcgVWludDhBcnJheSgxKSl9Y2F0Y2goZSl7cz0hMX1mb3IodmFyIHU9bmV3IGguQnVmOCgyNTYpLG49MDtuPDI1NjtuKyspdVtuXT0yNTI8PW4/NjoyNDg8PW4/NToyNDA8PW4/NDoyMjQ8PW4/MzoxOTI8PW4/MjoxO2Z1bmN0aW9uIGwoZSx0KXtpZih0PDY1NTM3JiYoZS5zdWJhcnJheSYmc3x8IWUuc3ViYXJyYXkmJmkpKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsaC5zaHJpbmtCdWYoZSx0KSk7Zm9yKHZhciByPVwiXCIsbj0wO248dDtuKyspcis9U3RyaW5nLmZyb21DaGFyQ29kZShlW25dKTtyZXR1cm4gcn11WzI1NF09dVsyNTRdPTEsci5zdHJpbmcyYnVmPWZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpLHMsYT1lLmxlbmd0aCxvPTA7Zm9yKGk9MDtpPGE7aSsrKTU1Mjk2PT0oNjQ1MTImKHI9ZS5jaGFyQ29kZUF0KGkpKSkmJmkrMTxhJiY1NjMyMD09KDY0NTEyJihuPWUuY2hhckNvZGVBdChpKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKG4tNTYzMjApLGkrKyksbys9cjwxMjg/MTpyPDIwNDg/MjpyPDY1NTM2PzM6NDtmb3IodD1uZXcgaC5CdWY4KG8pLGk9cz0wO3M8bztpKyspNTUyOTY9PSg2NDUxMiYocj1lLmNoYXJDb2RlQXQoaSkpKSYmaSsxPGEmJjU2MzIwPT0oNjQ1MTImKG49ZS5jaGFyQ29kZUF0KGkrMSkpKSYmKHI9NjU1MzYrKHItNTUyOTY8PDEwKSsobi01NjMyMCksaSsrKSxyPDEyOD90W3MrK109cjoocjwyMDQ4P3RbcysrXT0xOTJ8cj4+PjY6KHI8NjU1MzY/dFtzKytdPTIyNHxyPj4+MTI6KHRbcysrXT0yNDB8cj4+PjE4LHRbcysrXT0xMjh8cj4+PjEyJjYzKSx0W3MrK109MTI4fHI+Pj42JjYzKSx0W3MrK109MTI4fDYzJnIpO3JldHVybiB0fSxyLmJ1ZjJiaW5zdHJpbmc9ZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSxlLmxlbmd0aCl9LHIuYmluc3RyaW5nMmJ1Zj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9bmV3IGguQnVmOChlLmxlbmd0aCkscj0wLG49dC5sZW5ndGg7cjxuO3IrKyl0W3JdPWUuY2hhckNvZGVBdChyKTtyZXR1cm4gdH0sci5idWYyc3RyaW5nPWZ1bmN0aW9uKGUsdCl7dmFyIHIsbixpLHMsYT10fHxlLmxlbmd0aCxvPW5ldyBBcnJheSgyKmEpO2ZvcihyPW49MDtyPGE7KWlmKChpPWVbcisrXSk8MTI4KW9bbisrXT1pO2Vsc2UgaWYoNDwocz11W2ldKSlvW24rK109NjU1MzMscis9cy0xO2Vsc2V7Zm9yKGkmPTI9PT1zPzMxOjM9PT1zPzE1Ojc7MTxzJiZyPGE7KWk9aTw8Nnw2MyZlW3IrK10scy0tOzE8cz9vW24rK109NjU1MzM6aTw2NTUzNj9vW24rK109aTooaS09NjU1MzYsb1tuKytdPTU1Mjk2fGk+PjEwJjEwMjMsb1tuKytdPTU2MzIwfDEwMjMmaSl9cmV0dXJuIGwobyxuKX0sci51dGY4Ym9yZGVyPWZ1bmN0aW9uKGUsdCl7dmFyIHI7Zm9yKCh0PXR8fGUubGVuZ3RoKT5lLmxlbmd0aCYmKHQ9ZS5sZW5ndGgpLHI9dC0xOzA8PXImJjEyOD09KDE5MiZlW3JdKTspci0tO3JldHVybiByPDA/dDowPT09cj90OnIrdVtlW3JdXT50P3I6dH19LHtcIi4vY29tbW9uXCI6NDF9XSw0MzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscixuKXtmb3IodmFyIGk9NjU1MzUmZXwwLHM9ZT4+PjE2JjY1NTM1fDAsYT0wOzAhPT1yOyl7Zm9yKHItPWE9MmUzPHI/MmUzOnI7cz1zKyhpPWkrdFtuKytdfDApfDAsLS1hOyk7aSU9NjU1MjEscyU9NjU1MjF9cmV0dXJuIGl8czw8MTZ8MH19LHt9XSw0NDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz17Wl9OT19GTFVTSDowLFpfUEFSVElBTF9GTFVTSDoxLFpfU1lOQ19GTFVTSDoyLFpfRlVMTF9GTFVTSDozLFpfRklOSVNIOjQsWl9CTE9DSzo1LFpfVFJFRVM6NixaX09LOjAsWl9TVFJFQU1fRU5EOjEsWl9ORUVEX0RJQ1Q6MixaX0VSUk5POi0xLFpfU1RSRUFNX0VSUk9SOi0yLFpfREFUQV9FUlJPUjotMyxaX0JVRl9FUlJPUjotNSxaX05PX0NPTVBSRVNTSU9OOjAsWl9CRVNUX1NQRUVEOjEsWl9CRVNUX0NPTVBSRVNTSU9OOjksWl9ERUZBVUxUX0NPTVBSRVNTSU9OOi0xLFpfRklMVEVSRUQ6MSxaX0hVRkZNQU5fT05MWToyLFpfUkxFOjMsWl9GSVhFRDo0LFpfREVGQVVMVF9TVFJBVEVHWTowLFpfQklOQVJZOjAsWl9URVhUOjEsWl9VTktOT1dOOjIsWl9ERUZMQVRFRDo4fX0se31dLDQ1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD1bXSxyPTA7cjwyNTY7cisrKXtlPXI7Zm9yKHZhciBuPTA7bjw4O24rKyllPTEmZT8zOTg4MjkyMzg0XmU+Pj4xOmU+Pj4xO3Rbcl09ZX1yZXR1cm4gdH0oKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIsbil7dmFyIGk9byxzPW4rcjtlXj0tMTtmb3IodmFyIGE9bjthPHM7YSsrKWU9ZT4+PjheaVsyNTUmKGVedFthXSldO3JldHVybi0xXmV9fSx7fV0sNDY6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaCxjPWUoXCIuLi91dGlscy9jb21tb25cIiksdT1lKFwiLi90cmVlc1wiKSxkPWUoXCIuL2FkbGVyMzJcIikscD1lKFwiLi9jcmMzMlwiKSxuPWUoXCIuL21lc3NhZ2VzXCIpLGw9MCxmPTQsbT0wLF89LTIsZz0tMSxiPTQsaT0yLHY9OCx5PTkscz0yODYsYT0zMCxvPTE5LHc9MipzKzEsaz0xNSx4PTMsUz0yNTgsej1TK3grMSxDPTQyLEU9MTEzLEE9MSxJPTIsTz0zLEI9NDtmdW5jdGlvbiBSKGUsdCl7cmV0dXJuIGUubXNnPW5bdF0sdH1mdW5jdGlvbiBUKGUpe3JldHVybihlPDwxKS0oNDxlPzk6MCl9ZnVuY3Rpb24gRChlKXtmb3IodmFyIHQ9ZS5sZW5ndGg7MDw9LS10OyllW3RdPTB9ZnVuY3Rpb24gRihlKXt2YXIgdD1lLnN0YXRlLHI9dC5wZW5kaW5nO3I+ZS5hdmFpbF9vdXQmJihyPWUuYXZhaWxfb3V0KSwwIT09ciYmKGMuYXJyYXlTZXQoZS5vdXRwdXQsdC5wZW5kaW5nX2J1Zix0LnBlbmRpbmdfb3V0LHIsZS5uZXh0X291dCksZS5uZXh0X291dCs9cix0LnBlbmRpbmdfb3V0Kz1yLGUudG90YWxfb3V0Kz1yLGUuYXZhaWxfb3V0LT1yLHQucGVuZGluZy09ciwwPT09dC5wZW5kaW5nJiYodC5wZW5kaW5nX291dD0wKSl9ZnVuY3Rpb24gTihlLHQpe3UuX3RyX2ZsdXNoX2Jsb2NrKGUsMDw9ZS5ibG9ja19zdGFydD9lLmJsb2NrX3N0YXJ0Oi0xLGUuc3Ryc3RhcnQtZS5ibG9ja19zdGFydCx0KSxlLmJsb2NrX3N0YXJ0PWUuc3Ryc3RhcnQsRihlLnN0cm0pfWZ1bmN0aW9uIFUoZSx0KXtlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT10fWZ1bmN0aW9uIFAoZSx0KXtlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT10Pj4+OCYyNTUsZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109MjU1JnR9ZnVuY3Rpb24gTChlLHQpe3ZhciByLG4saT1lLm1heF9jaGFpbl9sZW5ndGgscz1lLnN0cnN0YXJ0LGE9ZS5wcmV2X2xlbmd0aCxvPWUubmljZV9tYXRjaCxoPWUuc3Ryc3RhcnQ+ZS53X3NpemUtej9lLnN0cnN0YXJ0LShlLndfc2l6ZS16KTowLHU9ZS53aW5kb3csbD1lLndfbWFzayxmPWUucHJldixjPWUuc3Ryc3RhcnQrUyxkPXVbcythLTFdLHA9dVtzK2FdO2UucHJldl9sZW5ndGg+PWUuZ29vZF9tYXRjaCYmKGk+Pj0yKSxvPmUubG9va2FoZWFkJiYobz1lLmxvb2thaGVhZCk7ZG97aWYodVsocj10KSthXT09PXAmJnVbcithLTFdPT09ZCYmdVtyXT09PXVbc10mJnVbKytyXT09PXVbcysxXSl7cys9MixyKys7ZG97fXdoaWxlKHVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZzPGMpO2lmKG49Uy0oYy1zKSxzPWMtUyxhPG4pe2lmKGUubWF0Y2hfc3RhcnQ9dCxvPD0oYT1uKSlicmVhaztkPXVbcythLTFdLHA9dVtzK2FdfX19d2hpbGUoKHQ9Zlt0JmxdKT5oJiYwIT0tLWkpO3JldHVybiBhPD1lLmxvb2thaGVhZD9hOmUubG9va2FoZWFkfWZ1bmN0aW9uIGooZSl7dmFyIHQscixuLGkscyxhLG8saCx1LGwsZj1lLndfc2l6ZTtkb3tpZihpPWUud2luZG93X3NpemUtZS5sb29rYWhlYWQtZS5zdHJzdGFydCxlLnN0cnN0YXJ0Pj1mKyhmLXopKXtmb3IoYy5hcnJheVNldChlLndpbmRvdyxlLndpbmRvdyxmLGYsMCksZS5tYXRjaF9zdGFydC09ZixlLnN0cnN0YXJ0LT1mLGUuYmxvY2tfc3RhcnQtPWYsdD1yPWUuaGFzaF9zaXplO249ZS5oZWFkWy0tdF0sZS5oZWFkW3RdPWY8PW4/bi1mOjAsLS1yOyk7Zm9yKHQ9cj1mO249ZS5wcmV2Wy0tdF0sZS5wcmV2W3RdPWY8PW4/bi1mOjAsLS1yOyk7aSs9Zn1pZigwPT09ZS5zdHJtLmF2YWlsX2luKWJyZWFrO2lmKGE9ZS5zdHJtLG89ZS53aW5kb3csaD1lLnN0cnN0YXJ0K2UubG9va2FoZWFkLHU9aSxsPXZvaWQgMCxsPWEuYXZhaWxfaW4sdTxsJiYobD11KSxyPTA9PT1sPzA6KGEuYXZhaWxfaW4tPWwsYy5hcnJheVNldChvLGEuaW5wdXQsYS5uZXh0X2luLGwsaCksMT09PWEuc3RhdGUud3JhcD9hLmFkbGVyPWQoYS5hZGxlcixvLGwsaCk6Mj09PWEuc3RhdGUud3JhcCYmKGEuYWRsZXI9cChhLmFkbGVyLG8sbCxoKSksYS5uZXh0X2luKz1sLGEudG90YWxfaW4rPWwsbCksZS5sb29rYWhlYWQrPXIsZS5sb29rYWhlYWQrZS5pbnNlcnQ+PXgpZm9yKHM9ZS5zdHJzdGFydC1lLmluc2VydCxlLmluc19oPWUud2luZG93W3NdLGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tzKzFdKSZlLmhhc2hfbWFzaztlLmluc2VydCYmKGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tzK3gtMV0pJmUuaGFzaF9tYXNrLGUucHJldltzJmUud19tYXNrXT1lLmhlYWRbZS5pbnNfaF0sZS5oZWFkW2UuaW5zX2hdPXMscysrLGUuaW5zZXJ0LS0sIShlLmxvb2thaGVhZCtlLmluc2VydDx4KSk7KTt9d2hpbGUoZS5sb29rYWhlYWQ8eiYmMCE9PWUuc3RybS5hdmFpbF9pbil9ZnVuY3Rpb24gWihlLHQpe2Zvcih2YXIgcixuOzspe2lmKGUubG9va2FoZWFkPHope2lmKGooZSksZS5sb29rYWhlYWQ8eiYmdD09PWwpcmV0dXJuIEE7aWYoMD09PWUubG9va2FoZWFkKWJyZWFrfWlmKHI9MCxlLmxvb2thaGVhZD49eCYmKGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tlLnN0cnN0YXJ0K3gtMV0pJmUuaGFzaF9tYXNrLHI9ZS5wcmV2W2Uuc3Ryc3RhcnQmZS53X21hc2tdPWUuaGVhZFtlLmluc19oXSxlLmhlYWRbZS5pbnNfaF09ZS5zdHJzdGFydCksMCE9PXImJmUuc3Ryc3RhcnQtcjw9ZS53X3NpemUteiYmKGUubWF0Y2hfbGVuZ3RoPUwoZSxyKSksZS5tYXRjaF9sZW5ndGg+PXgpaWYobj11Ll90cl90YWxseShlLGUuc3Ryc3RhcnQtZS5tYXRjaF9zdGFydCxlLm1hdGNoX2xlbmd0aC14KSxlLmxvb2thaGVhZC09ZS5tYXRjaF9sZW5ndGgsZS5tYXRjaF9sZW5ndGg8PWUubWF4X2xhenlfbWF0Y2gmJmUubG9va2FoZWFkPj14KXtmb3IoZS5tYXRjaF9sZW5ndGgtLTtlLnN0cnN0YXJ0KyssZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W2Uuc3Ryc3RhcnQreC0xXSkmZS5oYXNoX21hc2sscj1lLnByZXZbZS5zdHJzdGFydCZlLndfbWFza109ZS5oZWFkW2UuaW5zX2hdLGUuaGVhZFtlLmluc19oXT1lLnN0cnN0YXJ0LDAhPS0tZS5tYXRjaF9sZW5ndGg7KTtlLnN0cnN0YXJ0Kyt9ZWxzZSBlLnN0cnN0YXJ0Kz1lLm1hdGNoX2xlbmd0aCxlLm1hdGNoX2xlbmd0aD0wLGUuaW5zX2g9ZS53aW5kb3dbZS5zdHJzdGFydF0sZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W2Uuc3Ryc3RhcnQrMV0pJmUuaGFzaF9tYXNrO2Vsc2Ugbj11Ll90cl90YWxseShlLDAsZS53aW5kb3dbZS5zdHJzdGFydF0pLGUubG9va2FoZWFkLS0sZS5zdHJzdGFydCsrO2lmKG4mJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1yZXR1cm4gZS5pbnNlcnQ9ZS5zdHJzdGFydDx4LTE/ZS5zdHJzdGFydDp4LTEsdD09PWY/KE4oZSwhMCksMD09PWUuc3RybS5hdmFpbF9vdXQ/TzpCKTplLmxhc3RfbGl0JiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCk/QTpJfWZ1bmN0aW9uIFcoZSx0KXtmb3IodmFyIHIsbixpOzspe2lmKGUubG9va2FoZWFkPHope2lmKGooZSksZS5sb29rYWhlYWQ8eiYmdD09PWwpcmV0dXJuIEE7aWYoMD09PWUubG9va2FoZWFkKWJyZWFrfWlmKHI9MCxlLmxvb2thaGVhZD49eCYmKGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tlLnN0cnN0YXJ0K3gtMV0pJmUuaGFzaF9tYXNrLHI9ZS5wcmV2W2Uuc3Ryc3RhcnQmZS53X21hc2tdPWUuaGVhZFtlLmluc19oXSxlLmhlYWRbZS5pbnNfaF09ZS5zdHJzdGFydCksZS5wcmV2X2xlbmd0aD1lLm1hdGNoX2xlbmd0aCxlLnByZXZfbWF0Y2g9ZS5tYXRjaF9zdGFydCxlLm1hdGNoX2xlbmd0aD14LTEsMCE9PXImJmUucHJldl9sZW5ndGg8ZS5tYXhfbGF6eV9tYXRjaCYmZS5zdHJzdGFydC1yPD1lLndfc2l6ZS16JiYoZS5tYXRjaF9sZW5ndGg9TChlLHIpLGUubWF0Y2hfbGVuZ3RoPD01JiYoMT09PWUuc3RyYXRlZ3l8fGUubWF0Y2hfbGVuZ3RoPT09eCYmNDA5NjxlLnN0cnN0YXJ0LWUubWF0Y2hfc3RhcnQpJiYoZS5tYXRjaF9sZW5ndGg9eC0xKSksZS5wcmV2X2xlbmd0aD49eCYmZS5tYXRjaF9sZW5ndGg8PWUucHJldl9sZW5ndGgpe2ZvcihpPWUuc3Ryc3RhcnQrZS5sb29rYWhlYWQteCxuPXUuX3RyX3RhbGx5KGUsZS5zdHJzdGFydC0xLWUucHJldl9tYXRjaCxlLnByZXZfbGVuZ3RoLXgpLGUubG9va2FoZWFkLT1lLnByZXZfbGVuZ3RoLTEsZS5wcmV2X2xlbmd0aC09MjsrK2Uuc3Ryc3RhcnQ8PWkmJihlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbZS5zdHJzdGFydCt4LTFdKSZlLmhhc2hfbWFzayxyPWUucHJldltlLnN0cnN0YXJ0JmUud19tYXNrXT1lLmhlYWRbZS5pbnNfaF0sZS5oZWFkW2UuaW5zX2hdPWUuc3Ryc3RhcnQpLDAhPS0tZS5wcmV2X2xlbmd0aDspO2lmKGUubWF0Y2hfYXZhaWxhYmxlPTAsZS5tYXRjaF9sZW5ndGg9eC0xLGUuc3Ryc3RhcnQrKyxuJiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9ZWxzZSBpZihlLm1hdGNoX2F2YWlsYWJsZSl7aWYoKG49dS5fdHJfdGFsbHkoZSwwLGUud2luZG93W2Uuc3Ryc3RhcnQtMV0pKSYmTihlLCExKSxlLnN0cnN0YXJ0KyssZS5sb29rYWhlYWQtLSwwPT09ZS5zdHJtLmF2YWlsX291dClyZXR1cm4gQX1lbHNlIGUubWF0Y2hfYXZhaWxhYmxlPTEsZS5zdHJzdGFydCsrLGUubG9va2FoZWFkLS19cmV0dXJuIGUubWF0Y2hfYXZhaWxhYmxlJiYobj11Ll90cl90YWxseShlLDAsZS53aW5kb3dbZS5zdHJzdGFydC0xXSksZS5tYXRjaF9hdmFpbGFibGU9MCksZS5pbnNlcnQ9ZS5zdHJzdGFydDx4LTE/ZS5zdHJzdGFydDp4LTEsdD09PWY/KE4oZSwhMCksMD09PWUuc3RybS5hdmFpbF9vdXQ/TzpCKTplLmxhc3RfbGl0JiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCk/QTpJfWZ1bmN0aW9uIE0oZSx0LHIsbixpKXt0aGlzLmdvb2RfbGVuZ3RoPWUsdGhpcy5tYXhfbGF6eT10LHRoaXMubmljZV9sZW5ndGg9cix0aGlzLm1heF9jaGFpbj1uLHRoaXMuZnVuYz1pfWZ1bmN0aW9uIEgoKXt0aGlzLnN0cm09bnVsbCx0aGlzLnN0YXR1cz0wLHRoaXMucGVuZGluZ19idWY9bnVsbCx0aGlzLnBlbmRpbmdfYnVmX3NpemU9MCx0aGlzLnBlbmRpbmdfb3V0PTAsdGhpcy5wZW5kaW5nPTAsdGhpcy53cmFwPTAsdGhpcy5nemhlYWQ9bnVsbCx0aGlzLmd6aW5kZXg9MCx0aGlzLm1ldGhvZD12LHRoaXMubGFzdF9mbHVzaD0tMSx0aGlzLndfc2l6ZT0wLHRoaXMud19iaXRzPTAsdGhpcy53X21hc2s9MCx0aGlzLndpbmRvdz1udWxsLHRoaXMud2luZG93X3NpemU9MCx0aGlzLnByZXY9bnVsbCx0aGlzLmhlYWQ9bnVsbCx0aGlzLmluc19oPTAsdGhpcy5oYXNoX3NpemU9MCx0aGlzLmhhc2hfYml0cz0wLHRoaXMuaGFzaF9tYXNrPTAsdGhpcy5oYXNoX3NoaWZ0PTAsdGhpcy5ibG9ja19zdGFydD0wLHRoaXMubWF0Y2hfbGVuZ3RoPTAsdGhpcy5wcmV2X21hdGNoPTAsdGhpcy5tYXRjaF9hdmFpbGFibGU9MCx0aGlzLnN0cnN0YXJ0PTAsdGhpcy5tYXRjaF9zdGFydD0wLHRoaXMubG9va2FoZWFkPTAsdGhpcy5wcmV2X2xlbmd0aD0wLHRoaXMubWF4X2NoYWluX2xlbmd0aD0wLHRoaXMubWF4X2xhenlfbWF0Y2g9MCx0aGlzLmxldmVsPTAsdGhpcy5zdHJhdGVneT0wLHRoaXMuZ29vZF9tYXRjaD0wLHRoaXMubmljZV9tYXRjaD0wLHRoaXMuZHluX2x0cmVlPW5ldyBjLkJ1ZjE2KDIqdyksdGhpcy5keW5fZHRyZWU9bmV3IGMuQnVmMTYoMiooMiphKzEpKSx0aGlzLmJsX3RyZWU9bmV3IGMuQnVmMTYoMiooMipvKzEpKSxEKHRoaXMuZHluX2x0cmVlKSxEKHRoaXMuZHluX2R0cmVlKSxEKHRoaXMuYmxfdHJlZSksdGhpcy5sX2Rlc2M9bnVsbCx0aGlzLmRfZGVzYz1udWxsLHRoaXMuYmxfZGVzYz1udWxsLHRoaXMuYmxfY291bnQ9bmV3IGMuQnVmMTYoaysxKSx0aGlzLmhlYXA9bmV3IGMuQnVmMTYoMipzKzEpLEQodGhpcy5oZWFwKSx0aGlzLmhlYXBfbGVuPTAsdGhpcy5oZWFwX21heD0wLHRoaXMuZGVwdGg9bmV3IGMuQnVmMTYoMipzKzEpLEQodGhpcy5kZXB0aCksdGhpcy5sX2J1Zj0wLHRoaXMubGl0X2J1ZnNpemU9MCx0aGlzLmxhc3RfbGl0PTAsdGhpcy5kX2J1Zj0wLHRoaXMub3B0X2xlbj0wLHRoaXMuc3RhdGljX2xlbj0wLHRoaXMubWF0Y2hlcz0wLHRoaXMuaW5zZXJ0PTAsdGhpcy5iaV9idWY9MCx0aGlzLmJpX3ZhbGlkPTB9ZnVuY3Rpb24gRyhlKXt2YXIgdDtyZXR1cm4gZSYmZS5zdGF0ZT8oZS50b3RhbF9pbj1lLnRvdGFsX291dD0wLGUuZGF0YV90eXBlPWksKHQ9ZS5zdGF0ZSkucGVuZGluZz0wLHQucGVuZGluZ19vdXQ9MCx0LndyYXA8MCYmKHQud3JhcD0tdC53cmFwKSx0LnN0YXR1cz10LndyYXA/QzpFLGUuYWRsZXI9Mj09PXQud3JhcD8wOjEsdC5sYXN0X2ZsdXNoPWwsdS5fdHJfaW5pdCh0KSxtKTpSKGUsXyl9ZnVuY3Rpb24gSyhlKXt2YXIgdD1HKGUpO3JldHVybiB0PT09bSYmZnVuY3Rpb24oZSl7ZS53aW5kb3dfc2l6ZT0yKmUud19zaXplLEQoZS5oZWFkKSxlLm1heF9sYXp5X21hdGNoPWhbZS5sZXZlbF0ubWF4X2xhenksZS5nb29kX21hdGNoPWhbZS5sZXZlbF0uZ29vZF9sZW5ndGgsZS5uaWNlX21hdGNoPWhbZS5sZXZlbF0ubmljZV9sZW5ndGgsZS5tYXhfY2hhaW5fbGVuZ3RoPWhbZS5sZXZlbF0ubWF4X2NoYWluLGUuc3Ryc3RhcnQ9MCxlLmJsb2NrX3N0YXJ0PTAsZS5sb29rYWhlYWQ9MCxlLmluc2VydD0wLGUubWF0Y2hfbGVuZ3RoPWUucHJldl9sZW5ndGg9eC0xLGUubWF0Y2hfYXZhaWxhYmxlPTAsZS5pbnNfaD0wfShlLnN0YXRlKSx0fWZ1bmN0aW9uIFkoZSx0LHIsbixpLHMpe2lmKCFlKXJldHVybiBfO3ZhciBhPTE7aWYodD09PWcmJih0PTYpLG48MD8oYT0wLG49LW4pOjE1PG4mJihhPTIsbi09MTYpLGk8MXx8eTxpfHxyIT09dnx8bjw4fHwxNTxufHx0PDB8fDk8dHx8czwwfHxiPHMpcmV0dXJuIFIoZSxfKTs4PT09biYmKG49OSk7dmFyIG89bmV3IEg7cmV0dXJuKGUuc3RhdGU9bykuc3RybT1lLG8ud3JhcD1hLG8uZ3poZWFkPW51bGwsby53X2JpdHM9bixvLndfc2l6ZT0xPDxvLndfYml0cyxvLndfbWFzaz1vLndfc2l6ZS0xLG8uaGFzaF9iaXRzPWkrNyxvLmhhc2hfc2l6ZT0xPDxvLmhhc2hfYml0cyxvLmhhc2hfbWFzaz1vLmhhc2hfc2l6ZS0xLG8uaGFzaF9zaGlmdD1+figoby5oYXNoX2JpdHMreC0xKS94KSxvLndpbmRvdz1uZXcgYy5CdWY4KDIqby53X3NpemUpLG8uaGVhZD1uZXcgYy5CdWYxNihvLmhhc2hfc2l6ZSksby5wcmV2PW5ldyBjLkJ1ZjE2KG8ud19zaXplKSxvLmxpdF9idWZzaXplPTE8PGkrNixvLnBlbmRpbmdfYnVmX3NpemU9NCpvLmxpdF9idWZzaXplLG8ucGVuZGluZ19idWY9bmV3IGMuQnVmOChvLnBlbmRpbmdfYnVmX3NpemUpLG8uZF9idWY9MSpvLmxpdF9idWZzaXplLG8ubF9idWY9MypvLmxpdF9idWZzaXplLG8ubGV2ZWw9dCxvLnN0cmF0ZWd5PXMsby5tZXRob2Q9cixLKGUpfWg9W25ldyBNKDAsMCwwLDAsZnVuY3Rpb24oZSx0KXt2YXIgcj02NTUzNTtmb3Iocj5lLnBlbmRpbmdfYnVmX3NpemUtNSYmKHI9ZS5wZW5kaW5nX2J1Zl9zaXplLTUpOzspe2lmKGUubG9va2FoZWFkPD0xKXtpZihqKGUpLDA9PT1lLmxvb2thaGVhZCYmdD09PWwpcmV0dXJuIEE7aWYoMD09PWUubG9va2FoZWFkKWJyZWFrfWUuc3Ryc3RhcnQrPWUubG9va2FoZWFkLGUubG9va2FoZWFkPTA7dmFyIG49ZS5ibG9ja19zdGFydCtyO2lmKCgwPT09ZS5zdHJzdGFydHx8ZS5zdHJzdGFydD49bikmJihlLmxvb2thaGVhZD1lLnN0cnN0YXJ0LW4sZS5zdHJzdGFydD1uLE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBO2lmKGUuc3Ryc3RhcnQtZS5ibG9ja19zdGFydD49ZS53X3NpemUteiYmKE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfXJldHVybiBlLmluc2VydD0wLHQ9PT1mPyhOKGUsITApLDA9PT1lLnN0cm0uYXZhaWxfb3V0P086Qik6KGUuc3Ryc3RhcnQ+ZS5ibG9ja19zdGFydCYmKE4oZSwhMSksZS5zdHJtLmF2YWlsX291dCksQSl9KSxuZXcgTSg0LDQsOCw0LFopLG5ldyBNKDQsNSwxNiw4LFopLG5ldyBNKDQsNiwzMiwzMixaKSxuZXcgTSg0LDQsMTYsMTYsVyksbmV3IE0oOCwxNiwzMiwzMixXKSxuZXcgTSg4LDE2LDEyOCwxMjgsVyksbmV3IE0oOCwzMiwxMjgsMjU2LFcpLG5ldyBNKDMyLDEyOCwyNTgsMTAyNCxXKSxuZXcgTSgzMiwyNTgsMjU4LDQwOTYsVyldLHIuZGVmbGF0ZUluaXQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gWShlLHQsdiwxNSw4LDApfSxyLmRlZmxhdGVJbml0Mj1ZLHIuZGVmbGF0ZVJlc2V0PUssci5kZWZsYXRlUmVzZXRLZWVwPUcsci5kZWZsYXRlU2V0SGVhZGVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUmJmUuc3RhdGU/MiE9PWUuc3RhdGUud3JhcD9fOihlLnN0YXRlLmd6aGVhZD10LG0pOl99LHIuZGVmbGF0ZT1mdW5jdGlvbihlLHQpe3ZhciByLG4saSxzO2lmKCFlfHwhZS5zdGF0ZXx8NTx0fHx0PDApcmV0dXJuIGU/UihlLF8pOl87aWYobj1lLnN0YXRlLCFlLm91dHB1dHx8IWUuaW5wdXQmJjAhPT1lLmF2YWlsX2lufHw2NjY9PT1uLnN0YXR1cyYmdCE9PWYpcmV0dXJuIFIoZSwwPT09ZS5hdmFpbF9vdXQ/LTU6Xyk7aWYobi5zdHJtPWUscj1uLmxhc3RfZmx1c2gsbi5sYXN0X2ZsdXNoPXQsbi5zdGF0dXM9PT1DKWlmKDI9PT1uLndyYXApZS5hZGxlcj0wLFUobiwzMSksVShuLDEzOSksVShuLDgpLG4uZ3poZWFkPyhVKG4sKG4uZ3poZWFkLnRleHQ/MTowKSsobi5nemhlYWQuaGNyYz8yOjApKyhuLmd6aGVhZC5leHRyYT80OjApKyhuLmd6aGVhZC5uYW1lPzg6MCkrKG4uZ3poZWFkLmNvbW1lbnQ/MTY6MCkpLFUobiwyNTUmbi5nemhlYWQudGltZSksVShuLG4uZ3poZWFkLnRpbWU+PjgmMjU1KSxVKG4sbi5nemhlYWQudGltZT4+MTYmMjU1KSxVKG4sbi5nemhlYWQudGltZT4+MjQmMjU1KSxVKG4sOT09PW4ubGV2ZWw/MjoyPD1uLnN0cmF0ZWd5fHxuLmxldmVsPDI/NDowKSxVKG4sMjU1Jm4uZ3poZWFkLm9zKSxuLmd6aGVhZC5leHRyYSYmbi5nemhlYWQuZXh0cmEubGVuZ3RoJiYoVShuLDI1NSZuLmd6aGVhZC5leHRyYS5sZW5ndGgpLFUobixuLmd6aGVhZC5leHRyYS5sZW5ndGg+PjgmMjU1KSksbi5nemhlYWQuaGNyYyYmKGUuYWRsZXI9cChlLmFkbGVyLG4ucGVuZGluZ19idWYsbi5wZW5kaW5nLDApKSxuLmd6aW5kZXg9MCxuLnN0YXR1cz02OSk6KFUobiwwKSxVKG4sMCksVShuLDApLFUobiwwKSxVKG4sMCksVShuLDk9PT1uLmxldmVsPzI6Mjw9bi5zdHJhdGVneXx8bi5sZXZlbDwyPzQ6MCksVShuLDMpLG4uc3RhdHVzPUUpO2Vsc2V7dmFyIGE9disobi53X2JpdHMtODw8NCk8PDg7YXw9KDI8PW4uc3RyYXRlZ3l8fG4ubGV2ZWw8Mj8wOm4ubGV2ZWw8Nj8xOjY9PT1uLmxldmVsPzI6Myk8PDYsMCE9PW4uc3Ryc3RhcnQmJihhfD0zMiksYSs9MzEtYSUzMSxuLnN0YXR1cz1FLFAobixhKSwwIT09bi5zdHJzdGFydCYmKFAobixlLmFkbGVyPj4+MTYpLFAobiw2NTUzNSZlLmFkbGVyKSksZS5hZGxlcj0xfWlmKDY5PT09bi5zdGF0dXMpaWYobi5nemhlYWQuZXh0cmEpe2ZvcihpPW4ucGVuZGluZztuLmd6aW5kZXg8KDY1NTM1Jm4uZ3poZWFkLmV4dHJhLmxlbmd0aCkmJihuLnBlbmRpbmchPT1uLnBlbmRpbmdfYnVmX3NpemV8fChuLmd6aGVhZC5oY3JjJiZuLnBlbmRpbmc+aSYmKGUuYWRsZXI9cChlLmFkbGVyLG4ucGVuZGluZ19idWYsbi5wZW5kaW5nLWksaSkpLEYoZSksaT1uLnBlbmRpbmcsbi5wZW5kaW5nIT09bi5wZW5kaW5nX2J1Zl9zaXplKSk7KVUobiwyNTUmbi5nemhlYWQuZXh0cmFbbi5nemluZGV4XSksbi5nemluZGV4Kys7bi5nemhlYWQuaGNyYyYmbi5wZW5kaW5nPmkmJihlLmFkbGVyPXAoZS5hZGxlcixuLnBlbmRpbmdfYnVmLG4ucGVuZGluZy1pLGkpKSxuLmd6aW5kZXg9PT1uLmd6aGVhZC5leHRyYS5sZW5ndGgmJihuLmd6aW5kZXg9MCxuLnN0YXR1cz03Myl9ZWxzZSBuLnN0YXR1cz03MztpZig3Mz09PW4uc3RhdHVzKWlmKG4uZ3poZWFkLm5hbWUpe2k9bi5wZW5kaW5nO2Rve2lmKG4ucGVuZGluZz09PW4ucGVuZGluZ19idWZfc2l6ZSYmKG4uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksRihlKSxpPW4ucGVuZGluZyxuLnBlbmRpbmc9PT1uLnBlbmRpbmdfYnVmX3NpemUpKXtzPTE7YnJlYWt9cz1uLmd6aW5kZXg8bi5nemhlYWQubmFtZS5sZW5ndGg/MjU1Jm4uZ3poZWFkLm5hbWUuY2hhckNvZGVBdChuLmd6aW5kZXgrKyk6MCxVKG4scyl9d2hpbGUoMCE9PXMpO24uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksMD09PXMmJihuLmd6aW5kZXg9MCxuLnN0YXR1cz05MSl9ZWxzZSBuLnN0YXR1cz05MTtpZig5MT09PW4uc3RhdHVzKWlmKG4uZ3poZWFkLmNvbW1lbnQpe2k9bi5wZW5kaW5nO2Rve2lmKG4ucGVuZGluZz09PW4ucGVuZGluZ19idWZfc2l6ZSYmKG4uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksRihlKSxpPW4ucGVuZGluZyxuLnBlbmRpbmc9PT1uLnBlbmRpbmdfYnVmX3NpemUpKXtzPTE7YnJlYWt9cz1uLmd6aW5kZXg8bi5nemhlYWQuY29tbWVudC5sZW5ndGg/MjU1Jm4uZ3poZWFkLmNvbW1lbnQuY2hhckNvZGVBdChuLmd6aW5kZXgrKyk6MCxVKG4scyl9d2hpbGUoMCE9PXMpO24uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksMD09PXMmJihuLnN0YXR1cz0xMDMpfWVsc2Ugbi5zdGF0dXM9MTAzO2lmKDEwMz09PW4uc3RhdHVzJiYobi5nemhlYWQuaGNyYz8obi5wZW5kaW5nKzI+bi5wZW5kaW5nX2J1Zl9zaXplJiZGKGUpLG4ucGVuZGluZysyPD1uLnBlbmRpbmdfYnVmX3NpemUmJihVKG4sMjU1JmUuYWRsZXIpLFUobixlLmFkbGVyPj44JjI1NSksZS5hZGxlcj0wLG4uc3RhdHVzPUUpKTpuLnN0YXR1cz1FKSwwIT09bi5wZW5kaW5nKXtpZihGKGUpLDA9PT1lLmF2YWlsX291dClyZXR1cm4gbi5sYXN0X2ZsdXNoPS0xLG19ZWxzZSBpZigwPT09ZS5hdmFpbF9pbiYmVCh0KTw9VChyKSYmdCE9PWYpcmV0dXJuIFIoZSwtNSk7aWYoNjY2PT09bi5zdGF0dXMmJjAhPT1lLmF2YWlsX2luKXJldHVybiBSKGUsLTUpO2lmKDAhPT1lLmF2YWlsX2lufHwwIT09bi5sb29rYWhlYWR8fHQhPT1sJiY2NjYhPT1uLnN0YXR1cyl7dmFyIG89Mj09PW4uc3RyYXRlZ3k/ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI7Oyl7aWYoMD09PWUubG9va2FoZWFkJiYoaihlKSwwPT09ZS5sb29rYWhlYWQpKXtpZih0PT09bClyZXR1cm4gQTticmVha31pZihlLm1hdGNoX2xlbmd0aD0wLHI9dS5fdHJfdGFsbHkoZSwwLGUud2luZG93W2Uuc3Ryc3RhcnRdKSxlLmxvb2thaGVhZC0tLGUuc3Ryc3RhcnQrKyxyJiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9cmV0dXJuIGUuaW5zZXJ0PTAsdD09PWY/KE4oZSwhMCksMD09PWUuc3RybS5hdmFpbF9vdXQ/TzpCKTplLmxhc3RfbGl0JiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCk/QTpJfShuLHQpOjM9PT1uLnN0cmF0ZWd5P2Z1bmN0aW9uKGUsdCl7Zm9yKHZhciByLG4saSxzLGE9ZS53aW5kb3c7Oyl7aWYoZS5sb29rYWhlYWQ8PVMpe2lmKGooZSksZS5sb29rYWhlYWQ8PVMmJnQ9PT1sKXJldHVybiBBO2lmKDA9PT1lLmxvb2thaGVhZClicmVha31pZihlLm1hdGNoX2xlbmd0aD0wLGUubG9va2FoZWFkPj14JiYwPGUuc3Ryc3RhcnQmJihuPWFbaT1lLnN0cnN0YXJ0LTFdKT09PWFbKytpXSYmbj09PWFbKytpXSYmbj09PWFbKytpXSl7cz1lLnN0cnN0YXJ0K1M7ZG97fXdoaWxlKG49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJmk8cyk7ZS5tYXRjaF9sZW5ndGg9Uy0ocy1pKSxlLm1hdGNoX2xlbmd0aD5lLmxvb2thaGVhZCYmKGUubWF0Y2hfbGVuZ3RoPWUubG9va2FoZWFkKX1pZihlLm1hdGNoX2xlbmd0aD49eD8ocj11Ll90cl90YWxseShlLDEsZS5tYXRjaF9sZW5ndGgteCksZS5sb29rYWhlYWQtPWUubWF0Y2hfbGVuZ3RoLGUuc3Ryc3RhcnQrPWUubWF0Y2hfbGVuZ3RoLGUubWF0Y2hfbGVuZ3RoPTApOihyPXUuX3RyX3RhbGx5KGUsMCxlLndpbmRvd1tlLnN0cnN0YXJ0XSksZS5sb29rYWhlYWQtLSxlLnN0cnN0YXJ0KyspLHImJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1yZXR1cm4gZS5pbnNlcnQ9MCx0PT09Zj8oTihlLCEwKSwwPT09ZS5zdHJtLmF2YWlsX291dD9POkIpOmUubGFzdF9saXQmJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KT9BOkl9KG4sdCk6aFtuLmxldmVsXS5mdW5jKG4sdCk7aWYobyE9PU8mJm8hPT1CfHwobi5zdGF0dXM9NjY2KSxvPT09QXx8bz09PU8pcmV0dXJuIDA9PT1lLmF2YWlsX291dCYmKG4ubGFzdF9mbHVzaD0tMSksbTtpZihvPT09SSYmKDE9PT10P3UuX3RyX2FsaWduKG4pOjUhPT10JiYodS5fdHJfc3RvcmVkX2Jsb2NrKG4sMCwwLCExKSwzPT09dCYmKEQobi5oZWFkKSwwPT09bi5sb29rYWhlYWQmJihuLnN0cnN0YXJ0PTAsbi5ibG9ja19zdGFydD0wLG4uaW5zZXJ0PTApKSksRihlKSwwPT09ZS5hdmFpbF9vdXQpKXJldHVybiBuLmxhc3RfZmx1c2g9LTEsbX1yZXR1cm4gdCE9PWY/bTpuLndyYXA8PTA/MTooMj09PW4ud3JhcD8oVShuLDI1NSZlLmFkbGVyKSxVKG4sZS5hZGxlcj4+OCYyNTUpLFUobixlLmFkbGVyPj4xNiYyNTUpLFUobixlLmFkbGVyPj4yNCYyNTUpLFUobiwyNTUmZS50b3RhbF9pbiksVShuLGUudG90YWxfaW4+PjgmMjU1KSxVKG4sZS50b3RhbF9pbj4+MTYmMjU1KSxVKG4sZS50b3RhbF9pbj4+MjQmMjU1KSk6KFAobixlLmFkbGVyPj4+MTYpLFAobiw2NTUzNSZlLmFkbGVyKSksRihlKSwwPG4ud3JhcCYmKG4ud3JhcD0tbi53cmFwKSwwIT09bi5wZW5kaW5nP206MSl9LHIuZGVmbGF0ZUVuZD1mdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gZSYmZS5zdGF0ZT8odD1lLnN0YXRlLnN0YXR1cykhPT1DJiY2OSE9PXQmJjczIT09dCYmOTEhPT10JiYxMDMhPT10JiZ0IT09RSYmNjY2IT09dD9SKGUsXyk6KGUuc3RhdGU9bnVsbCx0PT09RT9SKGUsLTMpOm0pOl99LHIuZGVmbGF0ZVNldERpY3Rpb25hcnk9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saCx1LGw9dC5sZW5ndGg7aWYoIWV8fCFlLnN0YXRlKXJldHVybiBfO2lmKDI9PT0ocz0ocj1lLnN0YXRlKS53cmFwKXx8MT09PXMmJnIuc3RhdHVzIT09Q3x8ci5sb29rYWhlYWQpcmV0dXJuIF87Zm9yKDE9PT1zJiYoZS5hZGxlcj1kKGUuYWRsZXIsdCxsLDApKSxyLndyYXA9MCxsPj1yLndfc2l6ZSYmKDA9PT1zJiYoRChyLmhlYWQpLHIuc3Ryc3RhcnQ9MCxyLmJsb2NrX3N0YXJ0PTAsci5pbnNlcnQ9MCksdT1uZXcgYy5CdWY4KHIud19zaXplKSxjLmFycmF5U2V0KHUsdCxsLXIud19zaXplLHIud19zaXplLDApLHQ9dSxsPXIud19zaXplKSxhPWUuYXZhaWxfaW4sbz1lLm5leHRfaW4saD1lLmlucHV0LGUuYXZhaWxfaW49bCxlLm5leHRfaW49MCxlLmlucHV0PXQsaihyKTtyLmxvb2thaGVhZD49eDspe2ZvcihuPXIuc3Ryc3RhcnQsaT1yLmxvb2thaGVhZC0oeC0xKTtyLmluc19oPShyLmluc19oPDxyLmhhc2hfc2hpZnReci53aW5kb3dbbit4LTFdKSZyLmhhc2hfbWFzayxyLnByZXZbbiZyLndfbWFza109ci5oZWFkW3IuaW5zX2hdLHIuaGVhZFtyLmluc19oXT1uLG4rKywtLWk7KTtyLnN0cnN0YXJ0PW4sci5sb29rYWhlYWQ9eC0xLGoocil9cmV0dXJuIHIuc3Ryc3RhcnQrPXIubG9va2FoZWFkLHIuYmxvY2tfc3RhcnQ9ci5zdHJzdGFydCxyLmluc2VydD1yLmxvb2thaGVhZCxyLmxvb2thaGVhZD0wLHIubWF0Y2hfbGVuZ3RoPXIucHJldl9sZW5ndGg9eC0xLHIubWF0Y2hfYXZhaWxhYmxlPTAsZS5uZXh0X2luPW8sZS5pbnB1dD1oLGUuYXZhaWxfaW49YSxyLndyYXA9cyxtfSxyLmRlZmxhdGVJbmZvPVwicGFrbyBkZWZsYXRlIChmcm9tIE5vZGVjYSBwcm9qZWN0KVwifSx7XCIuLi91dGlscy9jb21tb25cIjo0MSxcIi4vYWRsZXIzMlwiOjQzLFwiLi9jcmMzMlwiOjQ1LFwiLi9tZXNzYWdlc1wiOjUxLFwiLi90cmVlc1wiOjUyfV0sNDc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt0aGlzLnRleHQ9MCx0aGlzLnRpbWU9MCx0aGlzLnhmbGFncz0wLHRoaXMub3M9MCx0aGlzLmV4dHJhPW51bGwsdGhpcy5leHRyYV9sZW49MCx0aGlzLm5hbWU9XCJcIix0aGlzLmNvbW1lbnQ9XCJcIix0aGlzLmhjcmM9MCx0aGlzLmRvbmU9ITF9fSx7fV0sNDg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saCx1LGwsZixjLGQscCxtLF8sZyxiLHYseSx3LGsseCxTLHosQztyPWUuc3RhdGUsbj1lLm5leHRfaW4sej1lLmlucHV0LGk9bisoZS5hdmFpbF9pbi01KSxzPWUubmV4dF9vdXQsQz1lLm91dHB1dCxhPXMtKHQtZS5hdmFpbF9vdXQpLG89cysoZS5hdmFpbF9vdXQtMjU3KSxoPXIuZG1heCx1PXIud3NpemUsbD1yLndoYXZlLGY9ci53bmV4dCxjPXIud2luZG93LGQ9ci5ob2xkLHA9ci5iaXRzLG09ci5sZW5jb2RlLF89ci5kaXN0Y29kZSxnPSgxPDxyLmxlbmJpdHMpLTEsYj0oMTw8ci5kaXN0Yml0cyktMTtlOmRve3A8MTUmJihkKz16W24rK108PHAscCs9OCxkKz16W24rK108PHAscCs9OCksdj1tW2QmZ107dDpmb3IoOzspe2lmKGQ+Pj49eT12Pj4+MjQscC09eSwwPT09KHk9dj4+PjE2JjI1NSkpQ1tzKytdPTY1NTM1JnY7ZWxzZXtpZighKDE2JnkpKXtpZigwPT0oNjQmeSkpe3Y9bVsoNjU1MzUmdikrKGQmKDE8PHkpLTEpXTtjb250aW51ZSB0fWlmKDMyJnkpe3IubW9kZT0xMjticmVhayBlfWUubXNnPVwiaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlXCIsci5tb2RlPTMwO2JyZWFrIGV9dz02NTUzNSZ2LCh5Jj0xNSkmJihwPHkmJihkKz16W24rK108PHAscCs9OCksdys9ZCYoMTw8eSktMSxkPj4+PXkscC09eSkscDwxNSYmKGQrPXpbbisrXTw8cCxwKz04LGQrPXpbbisrXTw8cCxwKz04KSx2PV9bZCZiXTtyOmZvcig7Oyl7aWYoZD4+Pj15PXY+Pj4yNCxwLT15LCEoMTYmKHk9dj4+PjE2JjI1NSkpKXtpZigwPT0oNjQmeSkpe3Y9X1soNjU1MzUmdikrKGQmKDE8PHkpLTEpXTtjb250aW51ZSByfWUubXNnPVwiaW52YWxpZCBkaXN0YW5jZSBjb2RlXCIsci5tb2RlPTMwO2JyZWFrIGV9aWYoaz02NTUzNSZ2LHA8KHkmPTE1KSYmKGQrPXpbbisrXTw8cCwocCs9OCk8eSYmKGQrPXpbbisrXTw8cCxwKz04KSksaDwoays9ZCYoMTw8eSktMSkpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWsgZX1pZihkPj4+PXkscC09eSwoeT1zLWEpPGspe2lmKGw8KHk9ay15KSYmci5zYW5lKXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrXCIsci5tb2RlPTMwO2JyZWFrIGV9aWYoUz1jLCh4PTApPT09Zil7aWYoeCs9dS15LHk8dyl7Zm9yKHctPXk7Q1tzKytdPWNbeCsrXSwtLXk7KTt4PXMtayxTPUN9fWVsc2UgaWYoZjx5KXtpZih4Kz11K2YteSwoeS09Zik8dyl7Zm9yKHctPXk7Q1tzKytdPWNbeCsrXSwtLXk7KTtpZih4PTAsZjx3KXtmb3Iody09eT1mO0NbcysrXT1jW3grK10sLS15Oyk7eD1zLWssUz1DfX19ZWxzZSBpZih4Kz1mLXkseTx3KXtmb3Iody09eTtDW3MrK109Y1t4KytdLC0teTspO3g9cy1rLFM9Q31mb3IoOzI8dzspQ1tzKytdPVNbeCsrXSxDW3MrK109U1t4KytdLENbcysrXT1TW3grK10sdy09Mzt3JiYoQ1tzKytdPVNbeCsrXSwxPHcmJihDW3MrK109U1t4KytdKSl9ZWxzZXtmb3IoeD1zLWs7Q1tzKytdPUNbeCsrXSxDW3MrK109Q1t4KytdLENbcysrXT1DW3grK10sMjwody09Myk7KTt3JiYoQ1tzKytdPUNbeCsrXSwxPHcmJihDW3MrK109Q1t4KytdKSl9YnJlYWt9fWJyZWFrfX13aGlsZShuPGkmJnM8byk7bi09dz1wPj4zLGQmPSgxPDwocC09dzw8MykpLTEsZS5uZXh0X2luPW4sZS5uZXh0X291dD1zLGUuYXZhaWxfaW49bjxpP2ktbis1OjUtKG4taSksZS5hdmFpbF9vdXQ9czxvP28tcysyNTc6MjU3LShzLW8pLHIuaG9sZD1kLHIuYml0cz1wfX0se31dLDQ5OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIEk9ZShcIi4uL3V0aWxzL2NvbW1vblwiKSxPPWUoXCIuL2FkbGVyMzJcIiksQj1lKFwiLi9jcmMzMlwiKSxSPWUoXCIuL2luZmZhc3RcIiksVD1lKFwiLi9pbmZ0cmVlc1wiKSxEPTEsRj0yLE49MCxVPS0yLFA9MSxuPTg1MixpPTU5MjtmdW5jdGlvbiBMKGUpe3JldHVybihlPj4+MjQmMjU1KSsoZT4+PjgmNjUyODApKygoNjUyODAmZSk8PDgpKygoMjU1JmUpPDwyNCl9ZnVuY3Rpb24gcygpe3RoaXMubW9kZT0wLHRoaXMubGFzdD0hMSx0aGlzLndyYXA9MCx0aGlzLmhhdmVkaWN0PSExLHRoaXMuZmxhZ3M9MCx0aGlzLmRtYXg9MCx0aGlzLmNoZWNrPTAsdGhpcy50b3RhbD0wLHRoaXMuaGVhZD1udWxsLHRoaXMud2JpdHM9MCx0aGlzLndzaXplPTAsdGhpcy53aGF2ZT0wLHRoaXMud25leHQ9MCx0aGlzLndpbmRvdz1udWxsLHRoaXMuaG9sZD0wLHRoaXMuYml0cz0wLHRoaXMubGVuZ3RoPTAsdGhpcy5vZmZzZXQ9MCx0aGlzLmV4dHJhPTAsdGhpcy5sZW5jb2RlPW51bGwsdGhpcy5kaXN0Y29kZT1udWxsLHRoaXMubGVuYml0cz0wLHRoaXMuZGlzdGJpdHM9MCx0aGlzLm5jb2RlPTAsdGhpcy5ubGVuPTAsdGhpcy5uZGlzdD0wLHRoaXMuaGF2ZT0wLHRoaXMubmV4dD1udWxsLHRoaXMubGVucz1uZXcgSS5CdWYxNigzMjApLHRoaXMud29yaz1uZXcgSS5CdWYxNigyODgpLHRoaXMubGVuZHluPW51bGwsdGhpcy5kaXN0ZHluPW51bGwsdGhpcy5zYW5lPTAsdGhpcy5iYWNrPTAsdGhpcy53YXM9MH1mdW5jdGlvbiBhKGUpe3ZhciB0O3JldHVybiBlJiZlLnN0YXRlPyh0PWUuc3RhdGUsZS50b3RhbF9pbj1lLnRvdGFsX291dD10LnRvdGFsPTAsZS5tc2c9XCJcIix0LndyYXAmJihlLmFkbGVyPTEmdC53cmFwKSx0Lm1vZGU9UCx0Lmxhc3Q9MCx0LmhhdmVkaWN0PTAsdC5kbWF4PTMyNzY4LHQuaGVhZD1udWxsLHQuaG9sZD0wLHQuYml0cz0wLHQubGVuY29kZT10LmxlbmR5bj1uZXcgSS5CdWYzMihuKSx0LmRpc3Rjb2RlPXQuZGlzdGR5bj1uZXcgSS5CdWYzMihpKSx0LnNhbmU9MSx0LmJhY2s9LTEsTik6VX1mdW5jdGlvbiBvKGUpe3ZhciB0O3JldHVybiBlJiZlLnN0YXRlPygodD1lLnN0YXRlKS53c2l6ZT0wLHQud2hhdmU9MCx0LnduZXh0PTAsYShlKSk6VX1mdW5jdGlvbiBoKGUsdCl7dmFyIHIsbjtyZXR1cm4gZSYmZS5zdGF0ZT8obj1lLnN0YXRlLHQ8MD8ocj0wLHQ9LXQpOihyPTErKHQ+PjQpLHQ8NDgmJih0Jj0xNSkpLHQmJih0PDh8fDE1PHQpP1U6KG51bGwhPT1uLndpbmRvdyYmbi53Yml0cyE9PXQmJihuLndpbmRvdz1udWxsKSxuLndyYXA9cixuLndiaXRzPXQsbyhlKSkpOlV9ZnVuY3Rpb24gdShlLHQpe3ZhciByLG47cmV0dXJuIGU/KG49bmV3IHMsKGUuc3RhdGU9bikud2luZG93PW51bGwsKHI9aChlLHQpKSE9PU4mJihlLnN0YXRlPW51bGwpLHIpOlV9dmFyIGwsZixjPSEwO2Z1bmN0aW9uIGooZSl7aWYoYyl7dmFyIHQ7Zm9yKGw9bmV3IEkuQnVmMzIoNTEyKSxmPW5ldyBJLkJ1ZjMyKDMyKSx0PTA7dDwxNDQ7KWUubGVuc1t0KytdPTg7Zm9yKDt0PDI1NjspZS5sZW5zW3QrK109OTtmb3IoO3Q8MjgwOyllLmxlbnNbdCsrXT03O2Zvcig7dDwyODg7KWUubGVuc1t0KytdPTg7Zm9yKFQoRCxlLmxlbnMsMCwyODgsbCwwLGUud29yayx7Yml0czo5fSksdD0wO3Q8MzI7KWUubGVuc1t0KytdPTU7VChGLGUubGVucywwLDMyLGYsMCxlLndvcmsse2JpdHM6NX0pLGM9ITF9ZS5sZW5jb2RlPWwsZS5sZW5iaXRzPTksZS5kaXN0Y29kZT1mLGUuZGlzdGJpdHM9NX1mdW5jdGlvbiBaKGUsdCxyLG4pe3ZhciBpLHM9ZS5zdGF0ZTtyZXR1cm4gbnVsbD09PXMud2luZG93JiYocy53c2l6ZT0xPDxzLndiaXRzLHMud25leHQ9MCxzLndoYXZlPTAscy53aW5kb3c9bmV3IEkuQnVmOChzLndzaXplKSksbj49cy53c2l6ZT8oSS5hcnJheVNldChzLndpbmRvdyx0LHItcy53c2l6ZSxzLndzaXplLDApLHMud25leHQ9MCxzLndoYXZlPXMud3NpemUpOihuPChpPXMud3NpemUtcy53bmV4dCkmJihpPW4pLEkuYXJyYXlTZXQocy53aW5kb3csdCxyLW4saSxzLnduZXh0KSwobi09aSk/KEkuYXJyYXlTZXQocy53aW5kb3csdCxyLW4sbiwwKSxzLnduZXh0PW4scy53aGF2ZT1zLndzaXplKToocy53bmV4dCs9aSxzLnduZXh0PT09cy53c2l6ZSYmKHMud25leHQ9MCkscy53aGF2ZTxzLndzaXplJiYocy53aGF2ZSs9aSkpKSwwfXIuaW5mbGF0ZVJlc2V0PW8sci5pbmZsYXRlUmVzZXQyPWgsci5pbmZsYXRlUmVzZXRLZWVwPWEsci5pbmZsYXRlSW5pdD1mdW5jdGlvbihlKXtyZXR1cm4gdShlLDE1KX0sci5pbmZsYXRlSW5pdDI9dSxyLmluZmxhdGU9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saCx1LGwsZixjLGQscCxtLF8sZyxiLHYseSx3LGsseCxTLHosQz0wLEU9bmV3IEkuQnVmOCg0KSxBPVsxNiwxNywxOCwwLDgsNyw5LDYsMTAsNSwxMSw0LDEyLDMsMTMsMiwxNCwxLDE1XTtpZighZXx8IWUuc3RhdGV8fCFlLm91dHB1dHx8IWUuaW5wdXQmJjAhPT1lLmF2YWlsX2luKXJldHVybiBVOzEyPT09KHI9ZS5zdGF0ZSkubW9kZSYmKHIubW9kZT0xMyksYT1lLm5leHRfb3V0LGk9ZS5vdXRwdXQsaD1lLmF2YWlsX291dCxzPWUubmV4dF9pbixuPWUuaW5wdXQsbz1lLmF2YWlsX2luLHU9ci5ob2xkLGw9ci5iaXRzLGY9byxjPWgseD1OO2U6Zm9yKDs7KXN3aXRjaChyLm1vZGUpe2Nhc2UgUDppZigwPT09ci53cmFwKXtyLm1vZGU9MTM7YnJlYWt9Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoMiZyLndyYXAmJjM1NjE1PT09dSl7RVtyLmNoZWNrPTBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsMiwwKSxsPXU9MCxyLm1vZGU9MjticmVha31pZihyLmZsYWdzPTAsci5oZWFkJiYoci5oZWFkLmRvbmU9ITEpLCEoMSZyLndyYXApfHwoKCgyNTUmdSk8PDgpKyh1Pj44KSklMzEpe2UubXNnPVwiaW5jb3JyZWN0IGhlYWRlciBjaGVja1wiLHIubW9kZT0zMDticmVha31pZig4IT0oMTUmdSkpe2UubXNnPVwidW5rbm93biBjb21wcmVzc2lvbiBtZXRob2RcIixyLm1vZGU9MzA7YnJlYWt9aWYobC09NCxrPTgrKDE1Jih1Pj4+PTQpKSwwPT09ci53Yml0cylyLndiaXRzPWs7ZWxzZSBpZihrPnIud2JpdHMpe2UubXNnPVwiaW52YWxpZCB3aW5kb3cgc2l6ZVwiLHIubW9kZT0zMDticmVha31yLmRtYXg9MTw8ayxlLmFkbGVyPXIuY2hlY2s9MSxyLm1vZGU9NTEyJnU/MTA6MTIsbD11PTA7YnJlYWs7Y2FzZSAyOmZvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKHIuZmxhZ3M9dSw4IT0oMjU1JnIuZmxhZ3MpKXtlLm1zZz1cInVua25vd24gY29tcHJlc3Npb24gbWV0aG9kXCIsci5tb2RlPTMwO2JyZWFrfWlmKDU3MzQ0JnIuZmxhZ3Mpe2UubXNnPVwidW5rbm93biBoZWFkZXIgZmxhZ3Mgc2V0XCIsci5tb2RlPTMwO2JyZWFrfXIuaGVhZCYmKHIuaGVhZC50ZXh0PXU+PjgmMSksNTEyJnIuZmxhZ3MmJihFWzBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsMiwwKSksbD11PTAsci5tb2RlPTM7Y2FzZSAzOmZvcig7bDwzMjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIuaGVhZCYmKHIuaGVhZC50aW1lPXUpLDUxMiZyLmZsYWdzJiYoRVswXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxFWzJdPXU+Pj4xNiYyNTUsRVszXT11Pj4+MjQmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsNCwwKSksbD11PTAsci5tb2RlPTQ7Y2FzZSA0OmZvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIuaGVhZCYmKHIuaGVhZC54ZmxhZ3M9MjU1JnUsci5oZWFkLm9zPXU+PjgpLDUxMiZyLmZsYWdzJiYoRVswXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDIsMCkpLGw9dT0wLHIubW9kZT01O2Nhc2UgNTppZigxMDI0JnIuZmxhZ3Mpe2Zvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIubGVuZ3RoPXUsci5oZWFkJiYoci5oZWFkLmV4dHJhX2xlbj11KSw1MTImci5mbGFncyYmKEVbMF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSwyLDApKSxsPXU9MH1lbHNlIHIuaGVhZCYmKHIuaGVhZC5leHRyYT1udWxsKTtyLm1vZGU9NjtjYXNlIDY6aWYoMTAyNCZyLmZsYWdzJiYobzwoZD1yLmxlbmd0aCkmJihkPW8pLGQmJihyLmhlYWQmJihrPXIuaGVhZC5leHRyYV9sZW4tci5sZW5ndGgsci5oZWFkLmV4dHJhfHwoci5oZWFkLmV4dHJhPW5ldyBBcnJheShyLmhlYWQuZXh0cmFfbGVuKSksSS5hcnJheVNldChyLmhlYWQuZXh0cmEsbixzLGQsaykpLDUxMiZyLmZsYWdzJiYoci5jaGVjaz1CKHIuY2hlY2ssbixkLHMpKSxvLT1kLHMrPWQsci5sZW5ndGgtPWQpLHIubGVuZ3RoKSlicmVhayBlO3IubGVuZ3RoPTAsci5tb2RlPTc7Y2FzZSA3OmlmKDIwNDgmci5mbGFncyl7aWYoMD09PW8pYnJlYWsgZTtmb3IoZD0wO2s9bltzK2QrK10sci5oZWFkJiZrJiZyLmxlbmd0aDw2NTUzNiYmKHIuaGVhZC5uYW1lKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGspKSxrJiZkPG87KTtpZig1MTImci5mbGFncyYmKHIuY2hlY2s9QihyLmNoZWNrLG4sZCxzKSksby09ZCxzKz1kLGspYnJlYWsgZX1lbHNlIHIuaGVhZCYmKHIuaGVhZC5uYW1lPW51bGwpO3IubGVuZ3RoPTAsci5tb2RlPTg7Y2FzZSA4OmlmKDQwOTYmci5mbGFncyl7aWYoMD09PW8pYnJlYWsgZTtmb3IoZD0wO2s9bltzK2QrK10sci5oZWFkJiZrJiZyLmxlbmd0aDw2NTUzNiYmKHIuaGVhZC5jb21tZW50Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKGspKSxrJiZkPG87KTtpZig1MTImci5mbGFncyYmKHIuY2hlY2s9QihyLmNoZWNrLG4sZCxzKSksby09ZCxzKz1kLGspYnJlYWsgZX1lbHNlIHIuaGVhZCYmKHIuaGVhZC5jb21tZW50PW51bGwpO3IubW9kZT05O2Nhc2UgOTppZig1MTImci5mbGFncyl7Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYodSE9PSg2NTUzNSZyLmNoZWNrKSl7ZS5tc2c9XCJoZWFkZXIgY3JjIG1pc21hdGNoXCIsci5tb2RlPTMwO2JyZWFrfWw9dT0wfXIuaGVhZCYmKHIuaGVhZC5oY3JjPXIuZmxhZ3M+PjkmMSxyLmhlYWQuZG9uZT0hMCksZS5hZGxlcj1yLmNoZWNrPTAsci5tb2RlPTEyO2JyZWFrO2Nhc2UgMTA6Zm9yKDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9ZS5hZGxlcj1yLmNoZWNrPUwodSksbD11PTAsci5tb2RlPTExO2Nhc2UgMTE6aWYoMD09PXIuaGF2ZWRpY3QpcmV0dXJuIGUubmV4dF9vdXQ9YSxlLmF2YWlsX291dD1oLGUubmV4dF9pbj1zLGUuYXZhaWxfaW49byxyLmhvbGQ9dSxyLmJpdHM9bCwyO2UuYWRsZXI9ci5jaGVjaz0xLHIubW9kZT0xMjtjYXNlIDEyOmlmKDU9PT10fHw2PT09dClicmVhayBlO2Nhc2UgMTM6aWYoci5sYXN0KXt1Pj4+PTcmbCxsLT03Jmwsci5tb2RlPTI3O2JyZWFrfWZvcig7bDwzOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9c3dpdGNoKHIubGFzdD0xJnUsbC09MSwzJih1Pj4+PTEpKXtjYXNlIDA6ci5tb2RlPTE0O2JyZWFrO2Nhc2UgMTppZihqKHIpLHIubW9kZT0yMCw2IT09dClicmVhazt1Pj4+PTIsbC09MjticmVhayBlO2Nhc2UgMjpyLm1vZGU9MTc7YnJlYWs7Y2FzZSAzOmUubXNnPVwiaW52YWxpZCBibG9jayB0eXBlXCIsci5tb2RlPTMwfXU+Pj49MixsLT0yO2JyZWFrO2Nhc2UgMTQ6Zm9yKHU+Pj49NyZsLGwtPTcmbDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoKDY1NTM1JnUpIT0odT4+PjE2XjY1NTM1KSl7ZS5tc2c9XCJpbnZhbGlkIHN0b3JlZCBibG9jayBsZW5ndGhzXCIsci5tb2RlPTMwO2JyZWFrfWlmKHIubGVuZ3RoPTY1NTM1JnUsbD11PTAsci5tb2RlPTE1LDY9PT10KWJyZWFrIGU7Y2FzZSAxNTpyLm1vZGU9MTY7Y2FzZSAxNjppZihkPXIubGVuZ3RoKXtpZihvPGQmJihkPW8pLGg8ZCYmKGQ9aCksMD09PWQpYnJlYWsgZTtJLmFycmF5U2V0KGksbixzLGQsYSksby09ZCxzKz1kLGgtPWQsYSs9ZCxyLmxlbmd0aC09ZDticmVha31yLm1vZGU9MTI7YnJlYWs7Y2FzZSAxNzpmb3IoO2w8MTQ7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZihyLm5sZW49MjU3KygzMSZ1KSx1Pj4+PTUsbC09NSxyLm5kaXN0PTErKDMxJnUpLHU+Pj49NSxsLT01LHIubmNvZGU9NCsoMTUmdSksdT4+Pj00LGwtPTQsMjg2PHIubmxlbnx8MzA8ci5uZGlzdCl7ZS5tc2c9XCJ0b28gbWFueSBsZW5ndGggb3IgZGlzdGFuY2Ugc3ltYm9sc1wiLHIubW9kZT0zMDticmVha31yLmhhdmU9MCxyLm1vZGU9MTg7Y2FzZSAxODpmb3IoO3IuaGF2ZTxyLm5jb2RlOyl7Zm9yKDtsPDM7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1yLmxlbnNbQVtyLmhhdmUrK11dPTcmdSx1Pj4+PTMsbC09M31mb3IoO3IuaGF2ZTwxOTspci5sZW5zW0Fbci5oYXZlKytdXT0wO2lmKHIubGVuY29kZT1yLmxlbmR5bixyLmxlbmJpdHM9NyxTPXtiaXRzOnIubGVuYml0c30seD1UKDAsci5sZW5zLDAsMTksci5sZW5jb2RlLDAsci53b3JrLFMpLHIubGVuYml0cz1TLmJpdHMseCl7ZS5tc2c9XCJpbnZhbGlkIGNvZGUgbGVuZ3RocyBzZXRcIixyLm1vZGU9MzA7YnJlYWt9ci5oYXZlPTAsci5tb2RlPTE5O2Nhc2UgMTk6Zm9yKDtyLmhhdmU8ci5ubGVuK3IubmRpc3Q7KXtmb3IoO2c9KEM9ci5sZW5jb2RlW3UmKDE8PHIubGVuYml0cyktMV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKChfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoYjwxNil1Pj4+PV8sbC09XyxyLmxlbnNbci5oYXZlKytdPWI7ZWxzZXtpZigxNj09PWIpe2Zvcih6PV8rMjtsPHo7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZih1Pj4+PV8sbC09XywwPT09ci5oYXZlKXtlLm1zZz1cImludmFsaWQgYml0IGxlbmd0aCByZXBlYXRcIixyLm1vZGU9MzA7YnJlYWt9az1yLmxlbnNbci5oYXZlLTFdLGQ9MysoMyZ1KSx1Pj4+PTIsbC09Mn1lbHNlIGlmKDE3PT09Yil7Zm9yKHo9XyszO2w8ejspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWwtPV8saz0wLGQ9MysoNyYodT4+Pj1fKSksdT4+Pj0zLGwtPTN9ZWxzZXtmb3Ioej1fKzc7bDx6Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9bC09XyxrPTAsZD0xMSsoMTI3Jih1Pj4+PV8pKSx1Pj4+PTcsbC09N31pZihyLmhhdmUrZD5yLm5sZW4rci5uZGlzdCl7ZS5tc2c9XCJpbnZhbGlkIGJpdCBsZW5ndGggcmVwZWF0XCIsci5tb2RlPTMwO2JyZWFrfWZvcig7ZC0tOylyLmxlbnNbci5oYXZlKytdPWt9fWlmKDMwPT09ci5tb2RlKWJyZWFrO2lmKDA9PT1yLmxlbnNbMjU2XSl7ZS5tc2c9XCJpbnZhbGlkIGNvZGUgLS0gbWlzc2luZyBlbmQtb2YtYmxvY2tcIixyLm1vZGU9MzA7YnJlYWt9aWYoci5sZW5iaXRzPTksUz17Yml0czpyLmxlbmJpdHN9LHg9VChELHIubGVucywwLHIubmxlbixyLmxlbmNvZGUsMCxyLndvcmssUyksci5sZW5iaXRzPVMuYml0cyx4KXtlLm1zZz1cImludmFsaWQgbGl0ZXJhbC9sZW5ndGhzIHNldFwiLHIubW9kZT0zMDticmVha31pZihyLmRpc3RiaXRzPTYsci5kaXN0Y29kZT1yLmRpc3RkeW4sUz17Yml0czpyLmRpc3RiaXRzfSx4PVQoRixyLmxlbnMsci5ubGVuLHIubmRpc3Qsci5kaXN0Y29kZSwwLHIud29yayxTKSxyLmRpc3RiaXRzPVMuYml0cyx4KXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2VzIHNldFwiLHIubW9kZT0zMDticmVha31pZihyLm1vZGU9MjAsNj09PXQpYnJlYWsgZTtjYXNlIDIwOnIubW9kZT0yMTtjYXNlIDIxOmlmKDY8PW8mJjI1ODw9aCl7ZS5uZXh0X291dD1hLGUuYXZhaWxfb3V0PWgsZS5uZXh0X2luPXMsZS5hdmFpbF9pbj1vLHIuaG9sZD11LHIuYml0cz1sLFIoZSxjKSxhPWUubmV4dF9vdXQsaT1lLm91dHB1dCxoPWUuYXZhaWxfb3V0LHM9ZS5uZXh0X2luLG49ZS5pbnB1dCxvPWUuYXZhaWxfaW4sdT1yLmhvbGQsbD1yLmJpdHMsMTI9PT1yLm1vZGUmJihyLmJhY2s9LTEpO2JyZWFrfWZvcihyLmJhY2s9MDtnPShDPXIubGVuY29kZVt1JigxPDxyLmxlbmJpdHMpLTFdKT4+PjE2JjI1NSxiPTY1NTM1JkMsISgoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKGcmJjA9PSgyNDAmZykpe2Zvcih2PV8seT1nLHc9YjtnPShDPXIubGVuY29kZVt3KygodSYoMTw8dit5KS0xKT4+dildKT4+PjE2JjI1NSxiPTY1NTM1JkMsISh2KyhfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9dT4+Pj12LGwtPXYsci5iYWNrKz12fWlmKHU+Pj49XyxsLT1fLHIuYmFjays9XyxyLmxlbmd0aD1iLDA9PT1nKXtyLm1vZGU9MjY7YnJlYWt9aWYoMzImZyl7ci5iYWNrPS0xLHIubW9kZT0xMjticmVha31pZig2NCZnKXtlLm1zZz1cImludmFsaWQgbGl0ZXJhbC9sZW5ndGggY29kZVwiLHIubW9kZT0zMDticmVha31yLmV4dHJhPTE1Jmcsci5tb2RlPTIyO2Nhc2UgMjI6aWYoci5leHRyYSl7Zm9yKHo9ci5leHRyYTtsPHo7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1yLmxlbmd0aCs9dSYoMTw8ci5leHRyYSktMSx1Pj4+PXIuZXh0cmEsbC09ci5leHRyYSxyLmJhY2srPXIuZXh0cmF9ci53YXM9ci5sZW5ndGgsci5tb2RlPTIzO2Nhc2UgMjM6Zm9yKDtnPShDPXIuZGlzdGNvZGVbdSYoMTw8ci5kaXN0Yml0cyktMV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKChfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoMD09KDI0MCZnKSl7Zm9yKHY9Xyx5PWcsdz1iO2c9KEM9ci5kaXN0Y29kZVt3KygodSYoMTw8dit5KS0xKT4+dildKT4+PjE2JjI1NSxiPTY1NTM1JkMsISh2KyhfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9dT4+Pj12LGwtPXYsci5iYWNrKz12fWlmKHU+Pj49XyxsLT1fLHIuYmFjays9Xyw2NCZnKXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2UgY29kZVwiLHIubW9kZT0zMDticmVha31yLm9mZnNldD1iLHIuZXh0cmE9MTUmZyxyLm1vZGU9MjQ7Y2FzZSAyNDppZihyLmV4dHJhKXtmb3Ioej1yLmV4dHJhO2w8ejspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIub2Zmc2V0Kz11JigxPDxyLmV4dHJhKS0xLHU+Pj49ci5leHRyYSxsLT1yLmV4dHJhLHIuYmFjays9ci5leHRyYX1pZihyLm9mZnNldD5yLmRtYXgpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWt9ci5tb2RlPTI1O2Nhc2UgMjU6aWYoMD09PWgpYnJlYWsgZTtpZihkPWMtaCxyLm9mZnNldD5kKXtpZigoZD1yLm9mZnNldC1kKT5yLndoYXZlJiZyLnNhbmUpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWt9cD1kPnIud25leHQ/KGQtPXIud25leHQsci53c2l6ZS1kKTpyLnduZXh0LWQsZD5yLmxlbmd0aCYmKGQ9ci5sZW5ndGgpLG09ci53aW5kb3d9ZWxzZSBtPWkscD1hLXIub2Zmc2V0LGQ9ci5sZW5ndGg7Zm9yKGg8ZCYmKGQ9aCksaC09ZCxyLmxlbmd0aC09ZDtpW2ErK109bVtwKytdLC0tZDspOzA9PT1yLmxlbmd0aCYmKHIubW9kZT0yMSk7YnJlYWs7Y2FzZSAyNjppZigwPT09aClicmVhayBlO2lbYSsrXT1yLmxlbmd0aCxoLS0sci5tb2RlPTIxO2JyZWFrO2Nhc2UgMjc6aWYoci53cmFwKXtmb3IoO2w8MzI7KXtpZigwPT09bylicmVhayBlO28tLSx1fD1uW3MrK108PGwsbCs9OH1pZihjLT1oLGUudG90YWxfb3V0Kz1jLHIudG90YWwrPWMsYyYmKGUuYWRsZXI9ci5jaGVjaz1yLmZsYWdzP0Ioci5jaGVjayxpLGMsYS1jKTpPKHIuY2hlY2ssaSxjLGEtYykpLGM9aCwoci5mbGFncz91OkwodSkpIT09ci5jaGVjayl7ZS5tc2c9XCJpbmNvcnJlY3QgZGF0YSBjaGVja1wiLHIubW9kZT0zMDticmVha31sPXU9MH1yLm1vZGU9Mjg7Y2FzZSAyODppZihyLndyYXAmJnIuZmxhZ3Mpe2Zvcig7bDwzMjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKHUhPT0oNDI5NDk2NzI5NSZyLnRvdGFsKSl7ZS5tc2c9XCJpbmNvcnJlY3QgbGVuZ3RoIGNoZWNrXCIsci5tb2RlPTMwO2JyZWFrfWw9dT0wfXIubW9kZT0yOTtjYXNlIDI5Ong9MTticmVhayBlO2Nhc2UgMzA6eD0tMzticmVhayBlO2Nhc2UgMzE6cmV0dXJuLTQ7Y2FzZSAzMjpkZWZhdWx0OnJldHVybiBVfXJldHVybiBlLm5leHRfb3V0PWEsZS5hdmFpbF9vdXQ9aCxlLm5leHRfaW49cyxlLmF2YWlsX2luPW8sci5ob2xkPXUsci5iaXRzPWwsKHIud3NpemV8fGMhPT1lLmF2YWlsX291dCYmci5tb2RlPDMwJiYoci5tb2RlPDI3fHw0IT09dCkpJiZaKGUsZS5vdXRwdXQsZS5uZXh0X291dCxjLWUuYXZhaWxfb3V0KT8oci5tb2RlPTMxLC00KTooZi09ZS5hdmFpbF9pbixjLT1lLmF2YWlsX291dCxlLnRvdGFsX2luKz1mLGUudG90YWxfb3V0Kz1jLHIudG90YWwrPWMsci53cmFwJiZjJiYoZS5hZGxlcj1yLmNoZWNrPXIuZmxhZ3M/QihyLmNoZWNrLGksYyxlLm5leHRfb3V0LWMpOk8oci5jaGVjayxpLGMsZS5uZXh0X291dC1jKSksZS5kYXRhX3R5cGU9ci5iaXRzKyhyLmxhc3Q/NjQ6MCkrKDEyPT09ci5tb2RlPzEyODowKSsoMjA9PT1yLm1vZGV8fDE1PT09ci5tb2RlPzI1NjowKSwoMD09ZiYmMD09PWN8fDQ9PT10KSYmeD09PU4mJih4PS01KSx4KX0sci5pbmZsYXRlRW5kPWZ1bmN0aW9uKGUpe2lmKCFlfHwhZS5zdGF0ZSlyZXR1cm4gVTt2YXIgdD1lLnN0YXRlO3JldHVybiB0LndpbmRvdyYmKHQud2luZG93PW51bGwpLGUuc3RhdGU9bnVsbCxOfSxyLmluZmxhdGVHZXRIZWFkZXI9ZnVuY3Rpb24oZSx0KXt2YXIgcjtyZXR1cm4gZSYmZS5zdGF0ZT8wPT0oMiYocj1lLnN0YXRlKS53cmFwKT9VOigoci5oZWFkPXQpLmRvbmU9ITEsTik6VX0sci5pbmZsYXRlU2V0RGljdGlvbmFyeT1mdW5jdGlvbihlLHQpe3ZhciByLG49dC5sZW5ndGg7cmV0dXJuIGUmJmUuc3RhdGU/MCE9PShyPWUuc3RhdGUpLndyYXAmJjExIT09ci5tb2RlP1U6MTE9PT1yLm1vZGUmJk8oMSx0LG4sMCkhPT1yLmNoZWNrPy0zOlooZSx0LG4sbik/KHIubW9kZT0zMSwtNCk6KHIuaGF2ZWRpY3Q9MSxOKTpVfSxyLmluZmxhdGVJbmZvPVwicGFrbyBpbmZsYXRlIChmcm9tIE5vZGVjYSBwcm9qZWN0KVwifSx7XCIuLi91dGlscy9jb21tb25cIjo0MSxcIi4vYWRsZXIzMlwiOjQzLFwiLi9jcmMzMlwiOjQ1LFwiLi9pbmZmYXN0XCI6NDgsXCIuL2luZnRyZWVzXCI6NTB9XSw1MDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBEPWUoXCIuLi91dGlscy9jb21tb25cIiksRj1bMyw0LDUsNiw3LDgsOSwxMCwxMSwxMywxNSwxNywxOSwyMywyNywzMSwzNSw0Myw1MSw1OSw2Nyw4Myw5OSwxMTUsMTMxLDE2MywxOTUsMjI3LDI1OCwwLDBdLE49WzE2LDE2LDE2LDE2LDE2LDE2LDE2LDE2LDE3LDE3LDE3LDE3LDE4LDE4LDE4LDE4LDE5LDE5LDE5LDE5LDIwLDIwLDIwLDIwLDIxLDIxLDIxLDIxLDE2LDcyLDc4XSxVPVsxLDIsMyw0LDUsNyw5LDEzLDE3LDI1LDMzLDQ5LDY1LDk3LDEyOSwxOTMsMjU3LDM4NSw1MTMsNzY5LDEwMjUsMTUzNywyMDQ5LDMwNzMsNDA5Nyw2MTQ1LDgxOTMsMTIyODksMTYzODUsMjQ1NzcsMCwwXSxQPVsxNiwxNiwxNiwxNiwxNywxNywxOCwxOCwxOSwxOSwyMCwyMCwyMSwyMSwyMiwyMiwyMywyMywyNCwyNCwyNSwyNSwyNiwyNiwyNywyNywyOCwyOCwyOSwyOSw2NCw2NF07dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyLG4saSxzLGEsbyl7dmFyIGgsdSxsLGYsYyxkLHAsbSxfLGc9by5iaXRzLGI9MCx2PTAseT0wLHc9MCxrPTAseD0wLFM9MCx6PTAsQz0wLEU9MCxBPW51bGwsST0wLE89bmV3IEQuQnVmMTYoMTYpLEI9bmV3IEQuQnVmMTYoMTYpLFI9bnVsbCxUPTA7Zm9yKGI9MDtiPD0xNTtiKyspT1tiXT0wO2Zvcih2PTA7djxuO3YrKylPW3Rbcit2XV0rKztmb3Ioaz1nLHc9MTU7MTw9dyYmMD09PU9bd107dy0tKTtpZih3PGsmJihrPXcpLDA9PT13KXJldHVybiBpW3MrK109MjA5NzE1MjAsaVtzKytdPTIwOTcxNTIwLG8uYml0cz0xLDA7Zm9yKHk9MTt5PHcmJjA9PT1PW3ldO3krKyk7Zm9yKGs8eSYmKGs9eSksYj16PTE7Yjw9MTU7YisrKWlmKHo8PD0xLCh6LT1PW2JdKTwwKXJldHVybi0xO2lmKDA8eiYmKDA9PT1lfHwxIT09dykpcmV0dXJuLTE7Zm9yKEJbMV09MCxiPTE7YjwxNTtiKyspQltiKzFdPUJbYl0rT1tiXTtmb3Iodj0wO3Y8bjt2KyspMCE9PXRbcit2XSYmKGFbQlt0W3Irdl1dKytdPXYpO2lmKGQ9MD09PWU/KEE9Uj1hLDE5KToxPT09ZT8oQT1GLEktPTI1NyxSPU4sVC09MjU3LDI1Nik6KEE9VSxSPVAsLTEpLGI9eSxjPXMsUz12PUU9MCxsPS0xLGY9KEM9MTw8KHg9aykpLTEsMT09PWUmJjg1MjxDfHwyPT09ZSYmNTkyPEMpcmV0dXJuIDE7Zm9yKDs7KXtmb3IocD1iLVMsXz1hW3ZdPGQ/KG09MCxhW3ZdKTphW3ZdPmQ/KG09UltUK2Fbdl1dLEFbSSthW3ZdXSk6KG09OTYsMCksaD0xPDxiLVMseT11PTE8PHg7aVtjKyhFPj5TKSsodS09aCldPXA8PDI0fG08PDE2fF98MCwwIT09dTspO2ZvcihoPTE8PGItMTtFJmg7KWg+Pj0xO2lmKDAhPT1oPyhFJj1oLTEsRSs9aCk6RT0wLHYrKywwPT0tLU9bYl0pe2lmKGI9PT13KWJyZWFrO2I9dFtyK2Fbdl1dfWlmKGs8YiYmKEUmZikhPT1sKXtmb3IoMD09PVMmJihTPWspLGMrPXksej0xPDwoeD1iLVMpO3grUzx3JiYhKCh6LT1PW3grU10pPD0wKTspeCsrLHo8PD0xO2lmKEMrPTE8PHgsMT09PWUmJjg1MjxDfHwyPT09ZSYmNTkyPEMpcmV0dXJuIDE7aVtsPUUmZl09azw8MjR8eDw8MTZ8Yy1zfDB9fXJldHVybiAwIT09RSYmKGlbYytFXT1iLVM8PDI0fDY0PDwxNnwwKSxvLmJpdHM9aywwfX0se1wiLi4vdXRpbHMvY29tbW9uXCI6NDF9XSw1MTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz17MjpcIm5lZWQgZGljdGlvbmFyeVwiLDE6XCJzdHJlYW0gZW5kXCIsMDpcIlwiLFwiLTFcIjpcImZpbGUgZXJyb3JcIixcIi0yXCI6XCJzdHJlYW0gZXJyb3JcIixcIi0zXCI6XCJkYXRhIGVycm9yXCIsXCItNFwiOlwiaW5zdWZmaWNpZW50IG1lbW9yeVwiLFwiLTVcIjpcImJ1ZmZlciBlcnJvclwiLFwiLTZcIjpcImluY29tcGF0aWJsZSB2ZXJzaW9uXCJ9fSx7fV0sNTI6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT1lKFwiLi4vdXRpbHMvY29tbW9uXCIpLG89MCxoPTE7ZnVuY3Rpb24gbihlKXtmb3IodmFyIHQ9ZS5sZW5ndGg7MDw9LS10OyllW3RdPTB9dmFyIHM9MCxhPTI5LHU9MjU2LGw9dSsxK2EsZj0zMCxjPTE5LF89MipsKzEsZz0xNSxkPTE2LHA9NyxtPTI1NixiPTE2LHY9MTcseT0xOCx3PVswLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwyLDIsMiwyLDMsMywzLDMsNCw0LDQsNCw1LDUsNSw1LDBdLGs9WzAsMCwwLDAsMSwxLDIsMiwzLDMsNCw0LDUsNSw2LDYsNyw3LDgsOCw5LDksMTAsMTAsMTEsMTEsMTIsMTIsMTMsMTNdLHg9WzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMiwzLDddLFM9WzE2LDE3LDE4LDAsOCw3LDksNiwxMCw1LDExLDQsMTIsMywxMywyLDE0LDEsMTVdLHo9bmV3IEFycmF5KDIqKGwrMikpO24oeik7dmFyIEM9bmV3IEFycmF5KDIqZik7bihDKTt2YXIgRT1uZXcgQXJyYXkoNTEyKTtuKEUpO3ZhciBBPW5ldyBBcnJheSgyNTYpO24oQSk7dmFyIEk9bmV3IEFycmF5KGEpO24oSSk7dmFyIE8sQixSLFQ9bmV3IEFycmF5KGYpO2Z1bmN0aW9uIEQoZSx0LHIsbixpKXt0aGlzLnN0YXRpY190cmVlPWUsdGhpcy5leHRyYV9iaXRzPXQsdGhpcy5leHRyYV9iYXNlPXIsdGhpcy5lbGVtcz1uLHRoaXMubWF4X2xlbmd0aD1pLHRoaXMuaGFzX3N0cmVlPWUmJmUubGVuZ3RofWZ1bmN0aW9uIEYoZSx0KXt0aGlzLmR5bl90cmVlPWUsdGhpcy5tYXhfY29kZT0wLHRoaXMuc3RhdF9kZXNjPXR9ZnVuY3Rpb24gTihlKXtyZXR1cm4gZTwyNTY/RVtlXTpFWzI1NisoZT4+PjcpXX1mdW5jdGlvbiBVKGUsdCl7ZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109MjU1JnQsZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109dD4+PjgmMjU1fWZ1bmN0aW9uIFAoZSx0LHIpe2UuYmlfdmFsaWQ+ZC1yPyhlLmJpX2J1Znw9dDw8ZS5iaV92YWxpZCY2NTUzNSxVKGUsZS5iaV9idWYpLGUuYmlfYnVmPXQ+PmQtZS5iaV92YWxpZCxlLmJpX3ZhbGlkKz1yLWQpOihlLmJpX2J1Znw9dDw8ZS5iaV92YWxpZCY2NTUzNSxlLmJpX3ZhbGlkKz1yKX1mdW5jdGlvbiBMKGUsdCxyKXtQKGUsclsyKnRdLHJbMip0KzFdKX1mdW5jdGlvbiBqKGUsdCl7Zm9yKHZhciByPTA7cnw9MSZlLGU+Pj49MSxyPDw9MSwwPC0tdDspO3JldHVybiByPj4+MX1mdW5jdGlvbiBaKGUsdCxyKXt2YXIgbixpLHM9bmV3IEFycmF5KGcrMSksYT0wO2ZvcihuPTE7bjw9ZztuKyspc1tuXT1hPWErcltuLTFdPDwxO2ZvcihpPTA7aTw9dDtpKyspe3ZhciBvPWVbMippKzFdOzAhPT1vJiYoZVsyKmldPWooc1tvXSsrLG8pKX19ZnVuY3Rpb24gVyhlKXt2YXIgdDtmb3IodD0wO3Q8bDt0KyspZS5keW5fbHRyZWVbMip0XT0wO2Zvcih0PTA7dDxmO3QrKyllLmR5bl9kdHJlZVsyKnRdPTA7Zm9yKHQ9MDt0PGM7dCsrKWUuYmxfdHJlZVsyKnRdPTA7ZS5keW5fbHRyZWVbMiptXT0xLGUub3B0X2xlbj1lLnN0YXRpY19sZW49MCxlLmxhc3RfbGl0PWUubWF0Y2hlcz0wfWZ1bmN0aW9uIE0oZSl7ODxlLmJpX3ZhbGlkP1UoZSxlLmJpX2J1Zik6MDxlLmJpX3ZhbGlkJiYoZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109ZS5iaV9idWYpLGUuYmlfYnVmPTAsZS5iaV92YWxpZD0wfWZ1bmN0aW9uIEgoZSx0LHIsbil7dmFyIGk9Mip0LHM9MipyO3JldHVybiBlW2ldPGVbc118fGVbaV09PT1lW3NdJiZuW3RdPD1uW3JdfWZ1bmN0aW9uIEcoZSx0LHIpe2Zvcih2YXIgbj1lLmhlYXBbcl0saT1yPDwxO2k8PWUuaGVhcF9sZW4mJihpPGUuaGVhcF9sZW4mJkgodCxlLmhlYXBbaSsxXSxlLmhlYXBbaV0sZS5kZXB0aCkmJmkrKywhSCh0LG4sZS5oZWFwW2ldLGUuZGVwdGgpKTspZS5oZWFwW3JdPWUuaGVhcFtpXSxyPWksaTw8PTE7ZS5oZWFwW3JdPW59ZnVuY3Rpb24gSyhlLHQscil7dmFyIG4saSxzLGEsbz0wO2lmKDAhPT1lLmxhc3RfbGl0KWZvcig7bj1lLnBlbmRpbmdfYnVmW2UuZF9idWYrMipvXTw8OHxlLnBlbmRpbmdfYnVmW2UuZF9idWYrMipvKzFdLGk9ZS5wZW5kaW5nX2J1ZltlLmxfYnVmK29dLG8rKywwPT09bj9MKGUsaSx0KTooTChlLChzPUFbaV0pK3UrMSx0KSwwIT09KGE9d1tzXSkmJlAoZSxpLT1JW3NdLGEpLEwoZSxzPU4oLS1uKSxyKSwwIT09KGE9a1tzXSkmJlAoZSxuLT1UW3NdLGEpKSxvPGUubGFzdF9saXQ7KTtMKGUsbSx0KX1mdW5jdGlvbiBZKGUsdCl7dmFyIHIsbixpLHM9dC5keW5fdHJlZSxhPXQuc3RhdF9kZXNjLnN0YXRpY190cmVlLG89dC5zdGF0X2Rlc2MuaGFzX3N0cmVlLGg9dC5zdGF0X2Rlc2MuZWxlbXMsdT0tMTtmb3IoZS5oZWFwX2xlbj0wLGUuaGVhcF9tYXg9XyxyPTA7cjxoO3IrKykwIT09c1syKnJdPyhlLmhlYXBbKytlLmhlYXBfbGVuXT11PXIsZS5kZXB0aFtyXT0wKTpzWzIqcisxXT0wO2Zvcig7ZS5oZWFwX2xlbjwyOylzWzIqKGk9ZS5oZWFwWysrZS5oZWFwX2xlbl09dTwyPysrdTowKV09MSxlLmRlcHRoW2ldPTAsZS5vcHRfbGVuLS0sbyYmKGUuc3RhdGljX2xlbi09YVsyKmkrMV0pO2Zvcih0Lm1heF9jb2RlPXUscj1lLmhlYXBfbGVuPj4xOzE8PXI7ci0tKUcoZSxzLHIpO2ZvcihpPWg7cj1lLmhlYXBbMV0sZS5oZWFwWzFdPWUuaGVhcFtlLmhlYXBfbGVuLS1dLEcoZSxzLDEpLG49ZS5oZWFwWzFdLGUuaGVhcFstLWUuaGVhcF9tYXhdPXIsZS5oZWFwWy0tZS5oZWFwX21heF09bixzWzIqaV09c1syKnJdK3NbMipuXSxlLmRlcHRoW2ldPShlLmRlcHRoW3JdPj1lLmRlcHRoW25dP2UuZGVwdGhbcl06ZS5kZXB0aFtuXSkrMSxzWzIqcisxXT1zWzIqbisxXT1pLGUuaGVhcFsxXT1pKyssRyhlLHMsMSksMjw9ZS5oZWFwX2xlbjspO2UuaGVhcFstLWUuaGVhcF9tYXhdPWUuaGVhcFsxXSxmdW5jdGlvbihlLHQpe3ZhciByLG4saSxzLGEsbyxoPXQuZHluX3RyZWUsdT10Lm1heF9jb2RlLGw9dC5zdGF0X2Rlc2Muc3RhdGljX3RyZWUsZj10LnN0YXRfZGVzYy5oYXNfc3RyZWUsYz10LnN0YXRfZGVzYy5leHRyYV9iaXRzLGQ9dC5zdGF0X2Rlc2MuZXh0cmFfYmFzZSxwPXQuc3RhdF9kZXNjLm1heF9sZW5ndGgsbT0wO2ZvcihzPTA7czw9ZztzKyspZS5ibF9jb3VudFtzXT0wO2ZvcihoWzIqZS5oZWFwW2UuaGVhcF9tYXhdKzFdPTAscj1lLmhlYXBfbWF4KzE7cjxfO3IrKylwPChzPWhbMipoWzIqKG49ZS5oZWFwW3JdKSsxXSsxXSsxKSYmKHM9cCxtKyspLGhbMipuKzFdPXMsdTxufHwoZS5ibF9jb3VudFtzXSsrLGE9MCxkPD1uJiYoYT1jW24tZF0pLG89aFsyKm5dLGUub3B0X2xlbis9byoocythKSxmJiYoZS5zdGF0aWNfbGVuKz1vKihsWzIqbisxXSthKSkpO2lmKDAhPT1tKXtkb3tmb3Iocz1wLTE7MD09PWUuYmxfY291bnRbc107KXMtLTtlLmJsX2NvdW50W3NdLS0sZS5ibF9jb3VudFtzKzFdKz0yLGUuYmxfY291bnRbcF0tLSxtLT0yfXdoaWxlKDA8bSk7Zm9yKHM9cDswIT09cztzLS0pZm9yKG49ZS5ibF9jb3VudFtzXTswIT09bjspdTwoaT1lLmhlYXBbLS1yXSl8fChoWzIqaSsxXSE9PXMmJihlLm9wdF9sZW4rPShzLWhbMippKzFdKSpoWzIqaV0saFsyKmkrMV09cyksbi0tKX19KGUsdCksWihzLHUsZS5ibF9jb3VudCl9ZnVuY3Rpb24gWChlLHQscil7dmFyIG4saSxzPS0xLGE9dFsxXSxvPTAsaD03LHU9NDtmb3IoMD09PWEmJihoPTEzOCx1PTMpLHRbMioocisxKSsxXT02NTUzNSxuPTA7bjw9cjtuKyspaT1hLGE9dFsyKihuKzEpKzFdLCsrbzxoJiZpPT09YXx8KG88dT9lLmJsX3RyZWVbMippXSs9bzowIT09aT8oaSE9PXMmJmUuYmxfdHJlZVsyKmldKyssZS5ibF90cmVlWzIqYl0rKyk6bzw9MTA/ZS5ibF90cmVlWzIqdl0rKzplLmJsX3RyZWVbMip5XSsrLHM9aSx1PShvPTApPT09YT8oaD0xMzgsMyk6aT09PWE/KGg9NiwzKTooaD03LDQpKX1mdW5jdGlvbiBWKGUsdCxyKXt2YXIgbixpLHM9LTEsYT10WzFdLG89MCxoPTcsdT00O2ZvcigwPT09YSYmKGg9MTM4LHU9Myksbj0wO248PXI7bisrKWlmKGk9YSxhPXRbMioobisxKSsxXSwhKCsrbzxoJiZpPT09YSkpe2lmKG88dSlmb3IoO0woZSxpLGUuYmxfdHJlZSksMCE9LS1vOyk7ZWxzZSAwIT09aT8oaSE9PXMmJihMKGUsaSxlLmJsX3RyZWUpLG8tLSksTChlLGIsZS5ibF90cmVlKSxQKGUsby0zLDIpKTpvPD0xMD8oTChlLHYsZS5ibF90cmVlKSxQKGUsby0zLDMpKTooTChlLHksZS5ibF90cmVlKSxQKGUsby0xMSw3KSk7cz1pLHU9KG89MCk9PT1hPyhoPTEzOCwzKTppPT09YT8oaD02LDMpOihoPTcsNCl9fW4oVCk7dmFyIHE9ITE7ZnVuY3Rpb24gSihlLHQscixuKXtQKGUsKHM8PDEpKyhuPzE6MCksMyksZnVuY3Rpb24oZSx0LHIsbil7TShlKSxuJiYoVShlLHIpLFUoZSx+cikpLGkuYXJyYXlTZXQoZS5wZW5kaW5nX2J1ZixlLndpbmRvdyx0LHIsZS5wZW5kaW5nKSxlLnBlbmRpbmcrPXJ9KGUsdCxyLCEwKX1yLl90cl9pbml0PWZ1bmN0aW9uKGUpe3F8fChmdW5jdGlvbigpe3ZhciBlLHQscixuLGkscz1uZXcgQXJyYXkoZysxKTtmb3Iobj1yPTA7bjxhLTE7bisrKWZvcihJW25dPXIsZT0wO2U8MTw8d1tuXTtlKyspQVtyKytdPW47Zm9yKEFbci0xXT1uLG49aT0wO248MTY7bisrKWZvcihUW25dPWksZT0wO2U8MTw8a1tuXTtlKyspRVtpKytdPW47Zm9yKGk+Pj03O248ZjtuKyspZm9yKFRbbl09aTw8NyxlPTA7ZTwxPDxrW25dLTc7ZSsrKUVbMjU2K2krK109bjtmb3IodD0wO3Q8PWc7dCsrKXNbdF09MDtmb3IoZT0wO2U8PTE0MzspelsyKmUrMV09OCxlKyssc1s4XSsrO2Zvcig7ZTw9MjU1Oyl6WzIqZSsxXT05LGUrKyxzWzldKys7Zm9yKDtlPD0yNzk7KXpbMiplKzFdPTcsZSsrLHNbN10rKztmb3IoO2U8PTI4NzspelsyKmUrMV09OCxlKyssc1s4XSsrO2ZvcihaKHosbCsxLHMpLGU9MDtlPGY7ZSsrKUNbMiplKzFdPTUsQ1syKmVdPWooZSw1KTtPPW5ldyBEKHosdyx1KzEsbCxnKSxCPW5ldyBEKEMsaywwLGYsZyksUj1uZXcgRChuZXcgQXJyYXkoMCkseCwwLGMscCl9KCkscT0hMCksZS5sX2Rlc2M9bmV3IEYoZS5keW5fbHRyZWUsTyksZS5kX2Rlc2M9bmV3IEYoZS5keW5fZHRyZWUsQiksZS5ibF9kZXNjPW5ldyBGKGUuYmxfdHJlZSxSKSxlLmJpX2J1Zj0wLGUuYmlfdmFsaWQ9MCxXKGUpfSxyLl90cl9zdG9yZWRfYmxvY2s9SixyLl90cl9mbHVzaF9ibG9jaz1mdW5jdGlvbihlLHQscixuKXt2YXIgaSxzLGE9MDswPGUubGV2ZWw/KDI9PT1lLnN0cm0uZGF0YV90eXBlJiYoZS5zdHJtLmRhdGFfdHlwZT1mdW5jdGlvbihlKXt2YXIgdCxyPTQwOTM2MjQ0NDc7Zm9yKHQ9MDt0PD0zMTt0Kysscj4+Pj0xKWlmKDEmciYmMCE9PWUuZHluX2x0cmVlWzIqdF0pcmV0dXJuIG87aWYoMCE9PWUuZHluX2x0cmVlWzE4XXx8MCE9PWUuZHluX2x0cmVlWzIwXXx8MCE9PWUuZHluX2x0cmVlWzI2XSlyZXR1cm4gaDtmb3IodD0zMjt0PHU7dCsrKWlmKDAhPT1lLmR5bl9sdHJlZVsyKnRdKXJldHVybiBoO3JldHVybiBvfShlKSksWShlLGUubF9kZXNjKSxZKGUsZS5kX2Rlc2MpLGE9ZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKFgoZSxlLmR5bl9sdHJlZSxlLmxfZGVzYy5tYXhfY29kZSksWChlLGUuZHluX2R0cmVlLGUuZF9kZXNjLm1heF9jb2RlKSxZKGUsZS5ibF9kZXNjKSx0PWMtMTszPD10JiYwPT09ZS5ibF90cmVlWzIqU1t0XSsxXTt0LS0pO3JldHVybiBlLm9wdF9sZW4rPTMqKHQrMSkrNSs1KzQsdH0oZSksaT1lLm9wdF9sZW4rMys3Pj4+Mywocz1lLnN0YXRpY19sZW4rMys3Pj4+Myk8PWkmJihpPXMpKTppPXM9cis1LHIrNDw9aSYmLTEhPT10P0ooZSx0LHIsbik6ND09PWUuc3RyYXRlZ3l8fHM9PT1pPyhQKGUsMisobj8xOjApLDMpLEsoZSx6LEMpKTooUChlLDQrKG4/MTowKSwzKSxmdW5jdGlvbihlLHQscixuKXt2YXIgaTtmb3IoUChlLHQtMjU3LDUpLFAoZSxyLTEsNSksUChlLG4tNCw0KSxpPTA7aTxuO2krKylQKGUsZS5ibF90cmVlWzIqU1tpXSsxXSwzKTtWKGUsZS5keW5fbHRyZWUsdC0xKSxWKGUsZS5keW5fZHRyZWUsci0xKX0oZSxlLmxfZGVzYy5tYXhfY29kZSsxLGUuZF9kZXNjLm1heF9jb2RlKzEsYSsxKSxLKGUsZS5keW5fbHRyZWUsZS5keW5fZHRyZWUpKSxXKGUpLG4mJk0oZSl9LHIuX3RyX3RhbGx5PWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gZS5wZW5kaW5nX2J1ZltlLmRfYnVmKzIqZS5sYXN0X2xpdF09dD4+PjgmMjU1LGUucGVuZGluZ19idWZbZS5kX2J1ZisyKmUubGFzdF9saXQrMV09MjU1JnQsZS5wZW5kaW5nX2J1ZltlLmxfYnVmK2UubGFzdF9saXRdPTI1NSZyLGUubGFzdF9saXQrKywwPT09dD9lLmR5bl9sdHJlZVsyKnJdKys6KGUubWF0Y2hlcysrLHQtLSxlLmR5bl9sdHJlZVsyKihBW3JdK3UrMSldKyssZS5keW5fZHRyZWVbMipOKHQpXSsrKSxlLmxhc3RfbGl0PT09ZS5saXRfYnVmc2l6ZS0xfSxyLl90cl9hbGlnbj1mdW5jdGlvbihlKXtQKGUsMiwzKSxMKGUsbSx6KSxmdW5jdGlvbihlKXsxNj09PWUuYmlfdmFsaWQ/KFUoZSxlLmJpX2J1ZiksZS5iaV9idWY9MCxlLmJpX3ZhbGlkPTApOjg8PWUuYmlfdmFsaWQmJihlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT0yNTUmZS5iaV9idWYsZS5iaV9idWY+Pj04LGUuYmlfdmFsaWQtPTgpfShlKX19LHtcIi4uL3V0aWxzL2NvbW1vblwiOjQxfV0sNTM6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt0aGlzLmlucHV0PW51bGwsdGhpcy5uZXh0X2luPTAsdGhpcy5hdmFpbF9pbj0wLHRoaXMudG90YWxfaW49MCx0aGlzLm91dHB1dD1udWxsLHRoaXMubmV4dF9vdXQ9MCx0aGlzLmF2YWlsX291dD0wLHRoaXMudG90YWxfb3V0PTAsdGhpcy5tc2c9XCJcIix0aGlzLnN0YXRlPW51bGwsdGhpcy5kYXRhX3R5cGU9Mix0aGlzLmFkbGVyPTB9fSx7fV0sNTQ6W2Z1bmN0aW9uKGUsdCxyKXsoZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKHIsbil7XCJ1c2Ugc3RyaWN0XCI7aWYoIXIuc2V0SW1tZWRpYXRlKXt2YXIgaSxzLHQsYSxvPTEsaD17fSx1PSExLGw9ci5kb2N1bWVudCxlPU9iamVjdC5nZXRQcm90b3R5cGVPZiYmT2JqZWN0LmdldFByb3RvdHlwZU9mKHIpO2U9ZSYmZS5zZXRUaW1lb3V0P2U6cixpPVwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbChyLnByb2Nlc3MpP2Z1bmN0aW9uKGUpe3Byb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKXtjKGUpfSl9OmZ1bmN0aW9uKCl7aWYoci5wb3N0TWVzc2FnZSYmIXIuaW1wb3J0U2NyaXB0cyl7dmFyIGU9ITAsdD1yLm9ubWVzc2FnZTtyZXR1cm4gci5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtlPSExfSxyLnBvc3RNZXNzYWdlKFwiXCIsXCIqXCIpLHIub25tZXNzYWdlPXQsZX19KCk/KGE9XCJzZXRJbW1lZGlhdGUkXCIrTWF0aC5yYW5kb20oKStcIiRcIixyLmFkZEV2ZW50TGlzdGVuZXI/ci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGQsITEpOnIuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIixkKSxmdW5jdGlvbihlKXtyLnBvc3RNZXNzYWdlKGErZSxcIipcIil9KTpyLk1lc3NhZ2VDaGFubmVsPygodD1uZXcgTWVzc2FnZUNoYW5uZWwpLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbihlKXtjKGUuZGF0YSl9LGZ1bmN0aW9uKGUpe3QucG9ydDIucG9zdE1lc3NhZ2UoZSl9KTpsJiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gbC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpPyhzPWwuZG9jdW1lbnRFbGVtZW50LGZ1bmN0aW9uKGUpe3ZhciB0PWwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTt0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2MoZSksdC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxzLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH0scy5hcHBlbmRDaGlsZCh0KX0pOmZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoYywwLGUpfSxlLnNldEltbWVkaWF0ZT1mdW5jdGlvbihlKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiYoZT1uZXcgRnVuY3Rpb24oXCJcIitlKSk7Zm9yKHZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpLHI9MDtyPHQubGVuZ3RoO3IrKyl0W3JdPWFyZ3VtZW50c1tyKzFdO3ZhciBuPXtjYWxsYmFjazplLGFyZ3M6dH07cmV0dXJuIGhbb109bixpKG8pLG8rK30sZS5jbGVhckltbWVkaWF0ZT1mfWZ1bmN0aW9uIGYoZSl7ZGVsZXRlIGhbZV19ZnVuY3Rpb24gYyhlKXtpZih1KXNldFRpbWVvdXQoYywwLGUpO2Vsc2V7dmFyIHQ9aFtlXTtpZih0KXt1PSEwO3RyeXshZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jYWxsYmFjayxyPWUuYXJncztzd2l0Y2goci5sZW5ndGgpe2Nhc2UgMDp0KCk7YnJlYWs7Y2FzZSAxOnQoclswXSk7YnJlYWs7Y2FzZSAyOnQoclswXSxyWzFdKTticmVhaztjYXNlIDM6dChyWzBdLHJbMV0sclsyXSk7YnJlYWs7ZGVmYXVsdDp0LmFwcGx5KG4scil9fSh0KX1maW5hbGx5e2YoZSksdT0hMX19fX1mdW5jdGlvbiBkKGUpe2Uuc291cmNlPT09ciYmXCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmMD09PWUuZGF0YS5pbmRleE9mKGEpJiZjKCtlLmRhdGEuc2xpY2UoYS5sZW5ndGgpKX19KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP3ZvaWQgMD09PWU/dGhpczplOnNlbGYpfSkuY2FsbCh0aGlzLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30pfSx7fV19LHt9LFsxMF0pKDEwKX0pOyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG90cGFjayhib3hlcykge1xuXG4gICAgLy8gY2FsY3VsYXRlIHRvdGFsIGJveCBhcmVhIGFuZCBtYXhpbXVtIGJveCB3aWR0aFxuICAgIGxldCBhcmVhID0gMDtcbiAgICBsZXQgbWF4V2lkdGggPSAwO1xuXG4gICAgZm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcbiAgICAgICAgYXJlYSArPSBib3gudyAqIGJveC5oO1xuICAgICAgICBtYXhXaWR0aCA9IE1hdGgubWF4KG1heFdpZHRoLCBib3gudyk7XG4gICAgfVxuXG4gICAgLy8gc29ydCB0aGUgYm94ZXMgZm9yIGluc2VydGlvbiBieSBoZWlnaHQsIGRlc2NlbmRpbmdcbiAgICBib3hlcy5zb3J0KChhLCBiKSA9PiBiLmggLSBhLmgpO1xuXG4gICAgLy8gYWltIGZvciBhIHNxdWFyaXNoIHJlc3VsdGluZyBjb250YWluZXIsXG4gICAgLy8gc2xpZ2h0bHkgYWRqdXN0ZWQgZm9yIHN1Yi0xMDAlIHNwYWNlIHV0aWxpemF0aW9uXG4gICAgY29uc3Qgc3RhcnRXaWR0aCA9IE1hdGgubWF4KE1hdGguY2VpbChNYXRoLnNxcnQoYXJlYSAvIDAuOTUpKSwgbWF4V2lkdGgpO1xuXG4gICAgLy8gc3RhcnQgd2l0aCBhIHNpbmdsZSBlbXB0eSBzcGFjZSwgdW5ib3VuZGVkIGF0IHRoZSBib3R0b21cbiAgICBjb25zdCBzcGFjZXMgPSBbe3g6IDAsIHk6IDAsIHc6IHN0YXJ0V2lkdGgsIGg6IEluZmluaXR5fV07XG5cbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGxldCBoZWlnaHQgPSAwO1xuXG4gICAgZm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcbiAgICAgICAgLy8gbG9vayB0aHJvdWdoIHNwYWNlcyBiYWNrd2FyZHMgc28gdGhhdCB3ZSBjaGVjayBzbWFsbGVyIHNwYWNlcyBmaXJzdFxuICAgICAgICBmb3IgKGxldCBpID0gc3BhY2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZSA9IHNwYWNlc1tpXTtcblxuICAgICAgICAgICAgLy8gbG9vayBmb3IgZW1wdHkgc3BhY2VzIHRoYXQgY2FuIGFjY29tbW9kYXRlIHRoZSBjdXJyZW50IGJveFxuICAgICAgICAgICAgaWYgKGJveC53ID4gc3BhY2UudyB8fCBib3guaCA+IHNwYWNlLmgpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBmb3VuZCB0aGUgc3BhY2U7IGFkZCB0aGUgYm94IHRvIGl0cyB0b3AtbGVmdCBjb3JuZXJcbiAgICAgICAgICAgIC8vIHwtLS0tLS0tfC0tLS0tLS18XG4gICAgICAgICAgICAvLyB8ICBib3ggIHwgICAgICAgfFxuICAgICAgICAgICAgLy8gfF9fX19fX198ICAgICAgIHxcbiAgICAgICAgICAgIC8vIHwgICAgICAgICBzcGFjZSB8XG4gICAgICAgICAgICAvLyB8X19fX19fX19fX19fX19ffFxuICAgICAgICAgICAgYm94LnggPSBzcGFjZS54O1xuICAgICAgICAgICAgYm94LnkgPSBzcGFjZS55O1xuXG4gICAgICAgICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIGJveC55ICsgYm94LmgpO1xuICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgYm94LnggKyBib3gudyk7XG5cbiAgICAgICAgICAgIGlmIChib3gudyA9PT0gc3BhY2UudyAmJiBib3guaCA9PT0gc3BhY2UuaCkge1xuICAgICAgICAgICAgICAgIC8vIHNwYWNlIG1hdGNoZXMgdGhlIGJveCBleGFjdGx5OyByZW1vdmUgaXRcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gc3BhY2VzLnBvcCgpO1xuICAgICAgICAgICAgICAgIGlmIChpIDwgc3BhY2VzLmxlbmd0aCkgc3BhY2VzW2ldID0gbGFzdDtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChib3guaCA9PT0gc3BhY2UuaCkge1xuICAgICAgICAgICAgICAgIC8vIHNwYWNlIG1hdGNoZXMgdGhlIGJveCBoZWlnaHQ7IHVwZGF0ZSBpdCBhY2NvcmRpbmdseVxuICAgICAgICAgICAgICAgIC8vIHwtLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXxcbiAgICAgICAgICAgICAgICAvLyB8ICBib3ggIHwgdXBkYXRlZCBzcGFjZSB8XG4gICAgICAgICAgICAgICAgLy8gfF9fX19fX198X19fX19fX19fX19fX19ffFxuICAgICAgICAgICAgICAgIHNwYWNlLnggKz0gYm94Lnc7XG4gICAgICAgICAgICAgICAgc3BhY2UudyAtPSBib3gudztcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChib3gudyA9PT0gc3BhY2Uudykge1xuICAgICAgICAgICAgICAgIC8vIHNwYWNlIG1hdGNoZXMgdGhlIGJveCB3aWR0aDsgdXBkYXRlIGl0IGFjY29yZGluZ2x5XG4gICAgICAgICAgICAgICAgLy8gfC0tLS0tLS0tLS0tLS0tLXxcbiAgICAgICAgICAgICAgICAvLyB8ICAgICAgYm94ICAgICAgfFxuICAgICAgICAgICAgICAgIC8vIHxfX19fX19fX19fX19fX198XG4gICAgICAgICAgICAgICAgLy8gfCB1cGRhdGVkIHNwYWNlIHxcbiAgICAgICAgICAgICAgICAvLyB8X19fX19fX19fX19fX19ffFxuICAgICAgICAgICAgICAgIHNwYWNlLnkgKz0gYm94Lmg7XG4gICAgICAgICAgICAgICAgc3BhY2UuaCAtPSBib3guaDtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgdGhlIGJveCBzcGxpdHMgdGhlIHNwYWNlIGludG8gdHdvIHNwYWNlc1xuICAgICAgICAgICAgICAgIC8vIHwtLS0tLS0tfC0tLS0tLS0tLS0tfFxuICAgICAgICAgICAgICAgIC8vIHwgIGJveCAgfCBuZXcgc3BhY2UgfFxuICAgICAgICAgICAgICAgIC8vIHxfX19fX19ffF9fX19fX19fX19ffFxuICAgICAgICAgICAgICAgIC8vIHwgdXBkYXRlZCBzcGFjZSAgICAgfFxuICAgICAgICAgICAgICAgIC8vIHxfX19fX19fX19fX19fX19fX19ffFxuICAgICAgICAgICAgICAgIHNwYWNlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgeDogc3BhY2UueCArIGJveC53LFxuICAgICAgICAgICAgICAgICAgICB5OiBzcGFjZS55LFxuICAgICAgICAgICAgICAgICAgICB3OiBzcGFjZS53IC0gYm94LncsXG4gICAgICAgICAgICAgICAgICAgIGg6IGJveC5oXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3BhY2UueSArPSBib3guaDtcbiAgICAgICAgICAgICAgICBzcGFjZS5oIC09IGJveC5oO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3OiB3aWR0aCwgLy8gY29udGFpbmVyIHdpZHRoXG4gICAgICAgIGg6IGhlaWdodCwgLy8gY29udGFpbmVyIGhlaWdodFxuICAgICAgICBmaWxsOiAoYXJlYSAvICh3aWR0aCAqIGhlaWdodCkpIHx8IDAgLy8gc3BhY2UgdXRpbGl6YXRpb25cbiAgICB9O1xufVxuIiwiLy8gT3B0aW9uc1xuY29uc3QgVVNFXzNYX09SSUdJTkFMX0lNUExFTUVOVEFUSU9OID0gZmFsc2U7XG5cbmNvbnN0XG4gIFJFRE1BU0sgICA9IDB4MDAwMDAwRkYsIC8vICZNQVNLXHQ+PjBcbiAgR1JFRU5NQVNLID0gMHgwMDAwRkYwMCwgLy8gJk1BU0tcdD4+OFxuICBCTFVFTUFTSyAgPSAweDAwRkYwMDAwLCAvLyAmTUFTS1x0Pj4xNlxuICBBTFBIQU1BU0sgPSAweEZGMDAwMDAwLCAvLyAmTUFTS1x0Pj4yNFxuICBUSFJFU0hIT0xEX1kgPSA0OCxcbiAgVEhSRVNISE9MRF9VID0gNyxcbiAgVEhSRVNISE9MRF9WID0gNjtcblxuLy8gQ29udmVydCBhbiBBUkdCIGJ5dGUgdG8gWVVWXG5mdW5jdGlvbiBnZXRZdXYocCkge1xuICBjb25zdFxuICAgIHIgPSAocCAmIFJFRE1BU0spLFxuICAgIGcgPSAocCAmIEdSRUVOTUFTSykgPj4gOCxcbiAgICBiID0gKHAgJiBCTFVFTUFTSykgPj4gMTYsXG4gICAgeSA9IHIgKiAuMjk5MDAwICsgZyAqIC41ODcwMDAgKyBiICogLjExNDAwMCxcbiAgICB1ID0gciAqICAtIC4xNjg3MzYgKyBnICogIC0gLjMzMTI2NCArIGIgKiAuNTAwMDAwLFxuICAgIHYgPSByICogLjUwMDAwMCArIGcgKiAgLSAuNDE4Njg4ICsgYiAqICAtIC4wODEzMTI7XG4gIHJldHVybiBbeSwgdSwgdl07XG59XG5cbmZ1bmN0aW9uIHl1dkRpZmZlcmVuY2UoQSwgQiwgc2NhbGVBbHBoYSkge1xuICBjb25zdFxuICAgIGFscGhhQSA9ICgoQSAmIEFMUEhBTUFTSykgPj4gMjQpICYgMHhmZixcbiAgICBhbHBoYUIgPSAoKEIgJiBBTFBIQU1BU0spID4+IDI0KSAmIDB4ZmY7XG5cbiAgaWYgKGFscGhhQSA9PT0gMCAmJiBhbHBoYUIgPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmICghc2NhbGVBbHBoYSAmJiAoYWxwaGFBIDwgMjU1IHx8IGFscGhhQiA8IDI1NSkpIHtcbiAgICAvLyBWZXJ5IGxhcmdlIHZhbHVlIG5vdCBhdHRhaW5hYmxlIGJ5IHRoZSB0aHJlc2hvbGRzXG4gICAgcmV0dXJuIDEwMDAwMDA7XG4gIH1cbiBcbiAgaWYgKGFscGhhQSA9PT0gMCB8fCBhbHBoYUIgPT09IDApIHtcbiAgICAvLyBWZXJ5IGxhcmdlIHZhbHVlIG5vdCBhdHRhaW5hYmxlIGJ5IHRoZSB0aHJlc2hvbGRzXG4gICAgcmV0dXJuIDEwMDAwMDA7XG4gIH1cblxuICBjb25zdFxuICAgIHl1dkEgPSBnZXRZdXYoQSksXG4gICAgeXV2QiA9IGdldFl1dihCKTtcblxuICAvKkFkZCBIUXggZmlsdGVycyB0aHJlc2hvbGQgJiByZXR1cm4qL1xuICByZXR1cm4gTWF0aC5hYnMoeXV2QVswXSAtIHl1dkJbMF0pICogVEhSRVNISE9MRF9ZXG4gICAgICAgKyBNYXRoLmFicyh5dXZBWzFdIC0geXV2QlsxXSkgKiBUSFJFU0hIT0xEX1VcbiAgICAgICArIE1hdGguYWJzKHl1dkFbMl0gLSB5dXZCWzJdKSAqIFRIUkVTSEhPTERfVjtcbn1cblxuZnVuY3Rpb24gaXNFcXVhbChBLCBCLCBzY2FsZUFscGhhKSB7XG4gIGNvbnN0XG4gICAgYWxwaGFBID0gKChBICYgQUxQSEFNQVNLKSA+PiAyNCkgJiAweGZmLFxuICAgIGFscGhhQiA9ICgoQiAmIEFMUEhBTUFTSykgPj4gMjQpICYgMHhmZjtcblxuICBpZiAoYWxwaGFBID09PSAwICYmIGFscGhhQiA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCFzY2FsZUFscGhhICYmIChhbHBoYUEgPCAyNTUgfHwgYWxwaGFCIDwgMjU1KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhbHBoYUEgPT09IDAgfHwgYWxwaGFCID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3RcbiAgICB5dXZBID0gZ2V0WXV2KEEpLFxuICAgIHl1dkIgPSBnZXRZdXYoQik7XG5cbiAgaWYgKE1hdGguYWJzKHl1dkFbMF0gLSB5dXZCWzBdKSA+IFRIUkVTSEhPTERfWSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoTWF0aC5hYnMoeXV2QVsxXSAtIHl1dkJbMV0pID4gVEhSRVNISE9MRF9VKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChNYXRoLmFicyh5dXZBWzJdIC0geXV2QlsyXSkgPiBUSFJFU0hIT0xEX1YpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcGl4ZWxJbnRlcnBvbGF0ZShBLCBCLCBxMSwgcTIpIHtcbiAgY29uc3RcbiAgICBhbHBoYUEgPSAoKEEgJiBBTFBIQU1BU0spID4+IDI0KSAmIDB4ZmYsXG4gICAgYWxwaGFCID0gKChCICYgQUxQSEFNQVNLKSA+PiAyNCkgJiAweGZmO1xuXG4gIC8qRXh0cmFjdCBlYWNoIHZhbHVlIGZyb20gMzJiaXQgVWludCAmIGJsZW5kIGNvbG9ycyB0b2dldGhlciovXG4gIGxldCByLCBnLCBiLCBhO1xuXG4gIGlmIChhbHBoYUEgPT09IDApIHtcbiAgICByID0gQiAmIFJFRE1BU0s7XG4gICAgZyA9IChCICYgR1JFRU5NQVNLKSA+PiA4O1xuICAgIGIgPSAoQiAmIEJMVUVNQVNLKSA+PiAxNjtcbiAgfSBlbHNlIGlmIChhbHBoYUIgPT09IDApIHtcbiAgICByID0gQSAmIFJFRE1BU0s7XG4gICAgZyA9IChBICYgR1JFRU5NQVNLKSA+PiA4O1xuICAgIGIgPSAoQSAmIEJMVUVNQVNLKSA+PiAxNjtcbiAgfSBlbHNlIHtcbiAgICByID0gKHEyICogKEIgJiBSRURNQVNLKSArIHExICogKEEgJiBSRURNQVNLKSkgLyAocTEgKyBxMik7XG4gICAgZyA9IChxMiAqICgoQiAmIEdSRUVOTUFTSykgPj4gOCkgKyBxMSAqICgoQSAmIEdSRUVOTUFTSykgPj4gOCkpIC8gKHExICsgcTIpO1xuICAgIGIgPSAocTIgKiAoKEIgJiBCTFVFTUFTSykgPj4gMTYpICsgcTEgKiAoKEEgJiBCTFVFTUFTSykgPj4gMTYpKSAvIChxMSArIHEyKTtcbiAgfVxuICBhID0gKHEyICogYWxwaGFCICsgcTEgKiBhbHBoYUEpIC8gKHExICsgcTIpO1xuICAvKlRoZSBiaXQgaGFjayAnfn4nIGlzIHVzZWQgdG8gZmxvb3IgdGhlIHZhbHVlcyBsaWtlIE1hdGguZmxvb3IsIGJ1dCBmYXN0ZXIqL1xuICByZXR1cm4gKCh+fnIpIHwgKCh+fmcpIDw8IDgpIHwgKCh+fmIpIDw8IDE2KSB8ICgofn5hKSA8PCAyNCkpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGVkUG9pbnRzKG9yaVBpeGVsVmlldywgb3JpWCwgb3JpWSwgb3JpVywgb3JpSCkge1xuICBsZXQgeG0xID0gb3JpWCAtIDE7XG4gIGlmICh4bTEgPCAwKSB7XG4gICAgeG0xID0gMDtcbiAgfVxuICBsZXQgeG0yID0gb3JpWCAtIDI7XG4gIGlmICh4bTIgPCAwKSB7XG4gICAgeG0yID0gMDtcbiAgfVxuICBsZXQgeHAxID0gb3JpWCArIDE7XG4gIGlmICh4cDEgPj0gb3JpVykge1xuICAgIHhwMSA9IG9yaVcgLSAxO1xuICB9XG4gIGxldCB4cDIgPSBvcmlYICsgMjtcbiAgaWYgKHhwMiA+PSBvcmlXKSB7XG4gICAgeHAyID0gb3JpVyAtIDE7XG4gIH1cbiAgbGV0IHltMSA9IG9yaVkgLSAxO1xuICBpZiAoeW0xIDwgMCkge1xuICAgIHltMSA9IDA7XG4gIH1cbiAgbGV0IHltMiA9IG9yaVkgLSAyO1xuICBpZiAoeW0yIDwgMCkge1xuICAgIHltMiA9IDA7XG4gIH1cbiAgbGV0IHlwMSA9IG9yaVkgKyAxO1xuICBpZiAoeXAxID49IG9yaUgpIHtcbiAgICB5cDEgPSBvcmlIIC0gMTtcbiAgfVxuICBsZXQgeXAyID0gb3JpWSArIDI7XG4gIGlmICh5cDIgPj0gb3JpSCkge1xuICAgIHlwMiA9IG9yaUggLSAxO1xuICB9XG5cbiAgcmV0dXJuIFtcbiAgICBvcmlQaXhlbFZpZXdbeG0xICsgeW0yICogb3JpV10sICAvKiBhMSAqL1xuICAgIG9yaVBpeGVsVmlld1tvcmlYICsgeW0yICogb3JpV10sIC8qIGIxICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMSArIHltMiAqIG9yaVddLCAgLyogYzEgKi9cblxuICAgIG9yaVBpeGVsVmlld1t4bTIgKyB5bTEgKiBvcmlXXSwgIC8qIGEwICovXG4gICAgb3JpUGl4ZWxWaWV3W3htMSArIHltMSAqIG9yaVddLCAgLyogcGEgKi9cbiAgICBvcmlQaXhlbFZpZXdbb3JpWCArIHltMSAqIG9yaVddLCAvKiBwYiAqL1xuICAgIG9yaVBpeGVsVmlld1t4cDEgKyB5bTEgKiBvcmlXXSwgIC8qIHBjICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMiArIHltMSAqIG9yaVddLCAgLyogYzQgKi9cblxuICAgIG9yaVBpeGVsVmlld1t4bTIgKyBvcmlZICogb3JpV10sIC8qIGQwICovXG4gICAgb3JpUGl4ZWxWaWV3W3htMSArIG9yaVkgKiBvcmlXXSwgLyogcGQgKi9cbiAgICBvcmlQaXhlbFZpZXdbb3JpWCArIG9yaVkgKiBvcmlXXSwvKiBwZSAqL1xuICAgIG9yaVBpeGVsVmlld1t4cDEgKyBvcmlZICogb3JpV10sIC8qIHBmICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMiArIG9yaVkgKiBvcmlXXSwgLyogZjQgKi9cblxuICAgIG9yaVBpeGVsVmlld1t4bTIgKyB5cDEgKiBvcmlXXSwgIC8qIGcwICovXG4gICAgb3JpUGl4ZWxWaWV3W3htMSArIHlwMSAqIG9yaVddLCAgLyogcGcgKi9cbiAgICBvcmlQaXhlbFZpZXdbb3JpWCArIHlwMSAqIG9yaVddLCAvKiBwaCAqL1xuICAgIG9yaVBpeGVsVmlld1t4cDEgKyB5cDEgKiBvcmlXXSwgIC8qIHBpICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMiArIHlwMSAqIG9yaVddLCAgLyogaTQgKi9cblxuICAgIG9yaVBpeGVsVmlld1t4bTEgKyB5cDIgKiBvcmlXXSwgIC8qIGc1ICovXG4gICAgb3JpUGl4ZWxWaWV3W29yaVggKyB5cDIgKiBvcmlXXSwgLyogaDUgKi9cbiAgICBvcmlQaXhlbFZpZXdbeHAxICsgeXAyICogb3JpV10gICAvKiBpNSAqL1xuICBdO1xufVxuXG4vLyBUaGlzIGlzIHRoZSBYQlIyeCBieSBIeWxsaWFuIChzZWUgaHR0cDovL2JvYXJkLmJ5dXUub3JnL3ZpZXd0b3BpYy5waHA/Zj0xMCZ0PTIyNDgpXG5mdW5jdGlvbiBjb21wdXRlWGJyMngob3JpUGl4ZWxWaWV3LCBvcmlYLCBvcmlZLCBvcmlXLCBvcmlILCBkc3RQaXhlbFZpZXcsIGRzdFgsIGRzdFksIGRzdFcsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKSB7XG4gIGNvbnN0IHJlbGF0ZWRQb2ludHMgPSBnZXRSZWxhdGVkUG9pbnRzKG9yaVBpeGVsVmlldywgb3JpWCwgb3JpWSwgb3JpVywgb3JpSCk7XG4gIGNvbnN0XG4gICAgW2ExLFxuICAgICBiMSxcbiAgICAgYzEsXG5cdCBhMCxcbiAgICAgcGEsXG4gICAgIHBiLFxuICAgICBwYyxcbiAgICAgYzQsXG4gICAgIGQwLFxuICAgICBwZCxcbiAgICAgcGUsXG4gICAgIHBmLFxuICAgICBmNCxcbiAgICAgZzAsXG4gICAgIHBnLFxuICAgICBwaCxcbiAgICAgcGksXG4gICAgIGk0LFxuICAgICBnNSxcbiAgICAgaDUsXG4gICAgIGk1XSA9IHJlbGF0ZWRQb2ludHM7XG4gIGxldCBlMCwgZTEsIGUyLCBlMztcbiAgZTAgPSBlMSA9IGUyID0gZTMgPSBwZTtcblxuICBbZTEsIGUyLCBlM10gPSBrZXJuZWwyWHY1KHBlLCBwaSwgcGgsIHBmLCBwZywgcGMsIHBkLCBwYiwgZjQsIGk0LCBoNSwgaTUsIGUxLCBlMiwgZTMsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2UwLCBlMywgZTFdID0ga2VybmVsMlh2NShwZSwgcGMsIHBmLCBwYiwgcGksIHBhLCBwaCwgcGQsIGIxLCBjMSwgZjQsIGM0LCBlMCwgZTMsIGUxLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSk7XG4gIFtlMiwgZTEsIGUwXSA9IGtlcm5lbDJYdjUocGUsIHBhLCBwYiwgcGQsIHBjLCBwZywgcGYsIHBoLCBkMCwgYTAsIGIxLCBhMSwgZTIsIGUxLCBlMCwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuICBbZTMsIGUwLCBlMl0gPSBrZXJuZWwyWHY1KHBlLCBwZywgcGQsIHBoLCBwYSwgcGksIHBiLCBwZiwgaDUsIGc1LCBkMCwgZzAsIGUzLCBlMCwgZTIsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcblxuICBkc3RQaXhlbFZpZXdbZHN0WCArIGRzdFkgKiBkc3RXXSA9IGUwO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyBkc3RZICogZHN0V10gPSBlMTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAoZHN0WSArIDEpICogZHN0V10gPSBlMjtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAxICsgKGRzdFkgKyAxKSAqIGRzdFddID0gZTM7ICBcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVhicjN4KG9yaVBpeGVsVmlldywgb3JpWCwgb3JpWSwgb3JpVywgb3JpSCwgZHN0UGl4ZWxWaWV3LCBkc3RYLCBkc3RZLCBkc3RXLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSkge1xuICBjb25zdCByZWxhdGVkUG9pbnRzID0gZ2V0UmVsYXRlZFBvaW50cyhvcmlQaXhlbFZpZXcsIG9yaVgsIG9yaVksIG9yaVcsIG9yaUgpO1xuICBjb25zdFxuICAgIFthMSxcbiAgICAgYjEsXG4gICAgIGMxLFxuXHQgYTAsXG4gICAgIHBhLFxuICAgICBwYixcbiAgICAgcGMsXG4gICAgIGM0LFxuICAgICBkMCxcbiAgICAgcGQsXG4gICAgIHBlLFxuICAgICBwZixcbiAgICAgZjQsXG4gICAgIGcwLFxuICAgICBwZyxcbiAgICAgcGgsXG4gICAgIHBpLFxuICAgICBpNCxcbiAgICAgZzUsXG4gICAgIGg1LFxuICAgICBpNV0gPSByZWxhdGVkUG9pbnRzO1xuICBsZXQgZTAsIGUxLCBlMiwgZTMsIGU0LCBlNSwgZTYsIGU3LCBlODtcbiAgZTAgPSBlMSA9IGUyID0gZTMgPSBlNCA9IGU1ID0gZTYgPSBlNyA9IGU4ID0gcGU7XG5cbiAgW2UyLCBlNSwgZTYsIGU3LCBlOF0gPSBrZXJuZWwzWChwZSwgcGksIHBoLCBwZiwgcGcsIHBjLCBwZCwgcGIsIGY0LCBpNCwgaDUsIGk1LCBlMiwgZTUsIGU2LCBlNywgZTgsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2UwLCBlMSwgZTgsIGU1LCBlMl0gPSBrZXJuZWwzWChwZSwgcGMsIHBmLCBwYiwgcGksIHBhLCBwaCwgcGQsIGIxLCBjMSwgZjQsIGM0LCBlMCwgZTEsIGU4LCBlNSwgZTIsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2U2LCBlMywgZTIsIGUxLCBlMF0gPSBrZXJuZWwzWChwZSwgcGEsIHBiLCBwZCwgcGMsIHBnLCBwZiwgcGgsIGQwLCBhMCwgYjEsIGExLCBlNiwgZTMsIGUyLCBlMSwgZTAsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2U4LCBlNywgZTAsIGUzLCBlNl0gPSBrZXJuZWwzWChwZSwgcGcsIHBkLCBwaCwgcGEsIHBpLCBwYiwgcGYsIGg1LCBnNSwgZDAsIGcwLCBlOCwgZTcsIGUwLCBlMywgZTYsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcblxuICBkc3RQaXhlbFZpZXdbZHN0WCArIGRzdFkgKiBkc3RXXSA9IGUwO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyBkc3RZICogZHN0V10gPSBlMTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgZHN0WSAqIGRzdFddID0gZTI7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgKGRzdFkgKyAxKSAqIGRzdFddID0gZTM7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMSArIChkc3RZICsgMSkgKiBkc3RXXSA9IGU0O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDIgKyAoZHN0WSArIDEpICogZHN0V10gPSBlNTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAoZHN0WSArIDIpICogZHN0V10gPSBlNjtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAxICsgKGRzdFkgKyAyKSAqIGRzdFddID0gZTc7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMiArIChkc3RZICsgMikgKiBkc3RXXSA9IGU4O1xufVxuXG5cbmZ1bmN0aW9uIGNvbXB1dGVYYnI0eChvcmlQaXhlbFZpZXcsIG9yaVgsIG9yaVksIG9yaVcsIG9yaUgsIGRzdFBpeGVsVmlldywgZHN0WCwgZHN0WSwgZHN0VywgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpIHtcbiAgY29uc3QgcmVsYXRlZFBvaW50cyA9IGdldFJlbGF0ZWRQb2ludHMob3JpUGl4ZWxWaWV3LCBvcmlYLCBvcmlZLCBvcmlXLCBvcmlIKTtcbiAgY29uc3RcbiAgICBbYTEsXG4gICAgIGIxLFxuICAgICBjMSxcblx0IGEwLFxuICAgICBwYSxcbiAgICAgcGIsXG4gICAgIHBjLFxuICAgICBjNCxcbiAgICAgZDAsXG4gICAgIHBkLFxuICAgICBwZSxcbiAgICAgcGYsXG4gICAgIGY0LFxuICAgICBnMCxcbiAgICAgcGcsXG4gICAgIHBoLFxuICAgICBwaSxcbiAgICAgaTQsXG4gICAgIGc1LFxuICAgICBoNSxcbiAgICAgaTVdID0gcmVsYXRlZFBvaW50cztcbiAgbGV0IGUwLCBlMSwgZTIsIGUzLCBlNCwgZTUsIGU2LCBlNywgZTgsIGU5LCBlYSwgZWIsIGVjLCBlZCwgZWUsIGVmO1xuICBlMCA9IGUxID0gZTIgPSBlMyA9IGU0ID0gZTUgPSBlNiA9IGU3ID0gZTggPSBlOSA9IGVhID0gZWIgPSBlYyA9IGVkID0gZWUgPSBlZiA9IHBlO1xuXG4gIFtlZiwgZWUsIGViLCBlMywgZTcsIGVhLCBlZCwgZWNdID0ga2VybmVsNFh2MihwZSwgcGksIHBoLCBwZiwgcGcsIHBjLCBwZCwgcGIsIGY0LCBpNCwgaDUsIGk1LCBlZiwgZWUsIGViLCBlMywgZTcsIGVhLCBlZCwgZWMsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2UzLCBlNywgZTIsIGUwLCBlMSwgZTYsIGViLCBlZl0gPSBrZXJuZWw0WHYyKHBlLCBwYywgcGYsIHBiLCBwaSwgcGEsIHBoLCBwZCwgYjEsIGMxLCBmNCwgYzQsIGUzLCBlNywgZTIsIGUwLCBlMSwgZTYsIGViLCBlZiwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuICBbZTAsIGUxLCBlNCwgZWMsIGU4LCBlNSwgZTIsIGUzXSA9IGtlcm5lbDRYdjIocGUsIHBhLCBwYiwgcGQsIHBjLCBwZywgcGYsIHBoLCBkMCwgYTAsIGIxLCBhMSwgZTAsIGUxLCBlNCwgZWMsIGU4LCBlNSwgZTIsIGUzLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSk7XG4gIFtlYywgZTgsIGVkLCBlZiwgZWUsIGU5LCBlNCwgZTBdID0ga2VybmVsNFh2MihwZSwgcGcsIHBkLCBwaCwgcGEsIHBpLCBwYiwgcGYsIGg1LCBnNSwgZDAsIGcwLCBlYywgZTgsIGVkLCBlZiwgZWUsIGU5LCBlNCwgZTAsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcblxuICBkc3RQaXhlbFZpZXdbZHN0WCArIGRzdFkgKiBkc3RXXSA9IGUwO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyBkc3RZICogZHN0V10gPSBlMTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgZHN0WSAqIGRzdFddID0gZTI7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMyArIGRzdFkgKiBkc3RXXSA9IGUzO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIChkc3RZICsgMSkgKiBkc3RXXSA9IGU0O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyAoZHN0WSArIDEpICogZHN0V10gPSBlNTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgKGRzdFkgKyAxKSAqIGRzdFddID0gZTY7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMyArIChkc3RZICsgMSkgKiBkc3RXXSA9IGU3O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIChkc3RZICsgMikgKiBkc3RXXSA9IGU4O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyAoZHN0WSArIDIpICogZHN0V10gPSBlOTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgKGRzdFkgKyAyKSAqIGRzdFddID0gZWE7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMyArIChkc3RZICsgMikgKiBkc3RXXSA9IGViO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIChkc3RZICsgMykgKiBkc3RXXSA9IGVjO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyAoZHN0WSArIDMpICogZHN0V10gPSBlZDtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgKGRzdFkgKyAzKSAqIGRzdFddID0gZWU7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMyArIChkc3RZICsgMykgKiBkc3RXXSA9IGVmO1xufVxuXG5mdW5jdGlvbiBhbHBoYUJsZW5kMzJXKGRzdCwgc3JjLCBibGVuZENvbG9ycykge1xuICBpZiAoYmxlbmRDb2xvcnMpIHtcbiAgICByZXR1cm4gcGl4ZWxJbnRlcnBvbGF0ZShkc3QsIHNyYywgNywgMSk7XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuXG5mdW5jdGlvbiBhbHBoYUJsZW5kNjRXKGRzdCwgc3JjLCBibGVuZENvbG9ycykge1xuICBpZiAoYmxlbmRDb2xvcnMpIHtcbiAgICByZXR1cm4gcGl4ZWxJbnRlcnBvbGF0ZShkc3QsIHNyYywgMywgMSk7XG4gIH1cbiAgcmV0dXJuIGRzdDtcbn1cblxuZnVuY3Rpb24gYWxwaGFCbGVuZDEyOFcoZHN0LCBzcmMsIGJsZW5kQ29sb3JzKSB7XG4gIGlmIChibGVuZENvbG9ycykge1xuICAgIHJldHVybiBwaXhlbEludGVycG9sYXRlKGRzdCwgc3JjLCAxLCAxKTtcbiAgfVxuICByZXR1cm4gZHN0O1xufVxuXG5mdW5jdGlvbiBhbHBoYUJsZW5kMTkyVyhkc3QsIHNyYywgYmxlbmRDb2xvcnMpIHtcbiAgaWYgKGJsZW5kQ29sb3JzKSB7XG4gICAgcmV0dXJuIHBpeGVsSW50ZXJwb2xhdGUoZHN0LCBzcmMsIDEsIDMpO1xuICB9XG4gIHJldHVybiBzcmM7XG59XG5cbmZ1bmN0aW9uIGFscGhhQmxlbmQyMjRXKGRzdCwgc3JjLCBibGVuZENvbG9ycykge1xuICBpZiAoYmxlbmRDb2xvcnMpIHtcbiAgICByZXR1cm4gcGl4ZWxJbnRlcnBvbGF0ZShkc3QsIHNyYywgMSwgNyk7XG4gIH1cbiAgcmV0dXJuIHNyYztcbn1cblxuZnVuY3Rpb24gbGVmdFVwMl8yWChuMywgbjIsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICBjb25zdCBibGVuZGVkTjIgPSBhbHBoYUJsZW5kNjRXKG4yLCBwaXhlbCwgYmxlbmRDb2xvcnMpO1xuICByZXR1cm4gW1xuICAgIGFscGhhQmxlbmQyMjRXKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGJsZW5kZWROMixcbiAgICBibGVuZGVkTjJcbiAgXTtcbn1cblxuZnVuY3Rpb24gbGVmdDJfMlgobjMsIG4yLCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgcmV0dXJuIFtcbiAgICBhbHBoYUJsZW5kMTkyVyhuMywgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcbiAgICBhbHBoYUJsZW5kNjRXKG4yLCBwaXhlbCwgYmxlbmRDb2xvcnMpXG4gIF07XG59XG5cbmZ1bmN0aW9uIHVwMl8yWChuMywgbjEsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICByZXR1cm4gW1xuICAgIGFscGhhQmxlbmQxOTJXKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQ2NFcobjEsIHBpeGVsLCBibGVuZENvbG9ycylcbiAgXTtcbn1cblxuZnVuY3Rpb24gZGlhXzJYKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgcmV0dXJuIGFscGhhQmxlbmQxMjhXKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpO1xufVxuXG5mdW5jdGlvbiBrZXJuZWwyWHY1KHBlLCBwaSwgcGgsIHBmLCBwZywgcGMsIHBkLCBwYiwgZjQsIGk0LCBoNSwgaTUsIG4xLCBuMiwgbjMsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKSB7XG4gIGxldCBleCA9IChwZSAhPSBwaCAmJiBwZSAhPSBwZik7XG4gIGlmICghZXgpIHtcbiAgICByZXR1cm4gW24xLCBuMiwgbjNdO1xuICB9XG4gIGxldFxuICAgIGUgPSAoeXV2RGlmZmVyZW5jZShwZSwgcGMsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwZSwgcGcsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwaSwgaDUsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwaSwgZjQsIHNjYWxlQWxwaGEpKSArICh5dXZEaWZmZXJlbmNlKHBoLCBwZikgPDwgMiksXG4gICAgaSA9ICh5dXZEaWZmZXJlbmNlKHBoLCBwZCwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBoLCBpNSwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBmLCBpNCwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBmLCBwYiwgc2NhbGVBbHBoYSkpICsgKHl1dkRpZmZlcmVuY2UocGUsIHBpLCBzY2FsZUFscGhhKSA8PCAyKSxcbiAgICBweCA9ICh5dXZEaWZmZXJlbmNlKHBlLCBwZiwgc2NhbGVBbHBoYSkgPD0geXV2RGlmZmVyZW5jZShwZSwgcGgsIHNjYWxlQWxwaGEpKSA/IHBmIDogcGg7XG5cbiAgaWYgKChlIDwgaSkgJiYgKCFpc0VxdWFsKHBmLCBwYiwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGgsIHBkLCBzY2FsZUFscGhhKSB8fCBpc0VxdWFsKHBlLCBwaSwgc2NhbGVBbHBoYSkgJiYgKCFpc0VxdWFsKHBmLCBpNCwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGgsIGk1LCBzY2FsZUFscGhhKSkgfHwgaXNFcXVhbChwZSwgcGcsIHNjYWxlQWxwaGEpIHx8IGlzRXF1YWwocGUsIHBjLCBzY2FsZUFscGhhKSkpIHtcbiAgICBsZXRcbiAgICAgIGtlID0geXV2RGlmZmVyZW5jZShwZiwgcGcsIHNjYWxlQWxwaGEpLFxuICAgICAga2kgPSB5dXZEaWZmZXJlbmNlKHBoLCBwYywgc2NhbGVBbHBoYSksXG4gICAgICBleDIgPSAocGUgIT0gcGMgJiYgcGIgIT0gcGMpLFxuICAgICAgZXgzID0gKHBlICE9IHBnICYmIHBkICE9IHBnKTtcbiAgICBpZiAoKChrZSA8PCAxKSA8PSBraSkgJiYgZXgzIHx8IChrZSA+PSAoa2kgPDwgMSkpICYmIGV4Mikge1xuICAgICAgaWYgKCgoa2UgPDwgMSkgPD0ga2kpICYmIGV4Mykge1xuICAgICAgICBsZXQgbGVmdE91dCA9IGxlZnQyXzJYKG4zLCBuMiwgcHgsIGJsZW5kQ29sb3JzKTtcbiAgICAgICAgbjMgPSBsZWZ0T3V0WzBdO1xuICAgICAgICBuMiA9IGxlZnRPdXRbMV07XG4gICAgICB9XG4gICAgICBpZiAoKGtlID49IChraSA8PCAxKSkgJiYgZXgyKSB7XG4gICAgICAgIGxldCB1cE91dCA9IHVwMl8yWChuMywgbjEsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgICAgIG4zID0gdXBPdXRbMF07XG4gICAgICAgIG4xID0gdXBPdXRbMV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG4zID0gZGlhXzJYKG4zLCBweCwgYmxlbmRDb2xvcnMpO1xuICAgIH1cblxuICB9IGVsc2UgaWYgKGUgPD0gaSkge1xuICAgIG4zID0gYWxwaGFCbGVuZDY0VyhuMywgcHgsIGJsZW5kQ29sb3JzKTtcbiAgfVxuICByZXR1cm4gW24xLCBuMiwgbjNdO1xufVxuXG5mdW5jdGlvbiBsZWZ0VXAyXzNYKG43LCBuNSwgbjYsIG4yLCBuOCwgcGl4ZWwsIGJsZW5kQ29sb3JzKSB7XG4gIGNvbnN0XG4gICAgYmxlbmRlZE43ID0gYWxwaGFCbGVuZDE5MlcobjcsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgYmxlbmRlZE42ID0gYWxwaGFCbGVuZDY0VyhuNiwgcGl4ZWwsIGJsZW5kQ29sb3JzKTtcbiAgcmV0dXJuIFtcbiAgICBibGVuZGVkTjcsXG4gICAgYmxlbmRlZE43LFxuICAgIGJsZW5kZWRONixcbiAgICBibGVuZGVkTjYsXG5cdHBpeGVsXG4gIF07XG59XG5cbmZ1bmN0aW9uIGxlZnQyXzNYKG43LCBuNSwgbjYsIG44LCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgcmV0dXJuIFtcbiAgICBhbHBoYUJsZW5kMTkyVyhuNywgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcbiAgICBhbHBoYUJsZW5kNjRXKG41LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQ2NFcobjYsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgcGl4ZWxcbiAgXTtcbn1cblxuZnVuY3Rpb24gdXAyXzNYKG41LCBuNywgbjIsIG44LCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgcmV0dXJuIFtcbiAgICBhbHBoYUJsZW5kMTkyVyhuNSwgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcbiAgICBhbHBoYUJsZW5kNjRXKG43LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQ2NFcobjIsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgcGl4ZWxcbiAgXTtcbn1cblxuZnVuY3Rpb24gZGlhXzNYKG44LCBuNSwgbjcsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICByZXR1cm4gW1xuICAgIGFscGhhQmxlbmQyMjRXKG44LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQzMlcobjUsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgYWxwaGFCbGVuZDMyVyhuNywgcGl4ZWwsIGJsZW5kQ29sb3JzKVxuICBdO1xufVxuXG5mdW5jdGlvbiBrZXJuZWwzWChwZSwgcGksIHBoLCBwZiwgcGcsIHBjLCBwZCwgcGIsIGY0LCBpNCwgaDUsIGk1LCBuMiwgbjUsIG42LCBuNywgbjgsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKSB7XG4gIGNvbnN0IGV4ID0gKHBlICE9IHBoICYmIHBlICE9IHBmKTtcbiAgaWYgKCFleCkge1xuICAgIHJldHVybiBbbjIsIG41LCBuNiwgbjcsIG44XTtcbiAgfVxuXG4gIGNvbnN0XG4gICAgZSA9ICh5dXZEaWZmZXJlbmNlKHBlLCBwYywgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBlLCBwZywgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBpLCBoNSwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBpLCBmNCwgc2NhbGVBbHBoYSkpICsgKHl1dkRpZmZlcmVuY2UocGgsIHBmLCBzY2FsZUFscGhhKSA8PCAyKSxcbiAgICBpID0gKHl1dkRpZmZlcmVuY2UocGgsIHBkLCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGgsIGk1LCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGYsIGk0LCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGYsIHBiLCBzY2FsZUFscGhhKSkgKyAoeXV2RGlmZmVyZW5jZShwZSwgcGksIHNjYWxlQWxwaGEpIDw8IDIpO1xuXG4gIGxldCBzdGF0ZTtcbiAgaWYgKFVTRV8zWF9PUklHSU5BTF9JTVBMRU1FTlRBVElPTikge1xuICAgIHN0YXRlID0gKChlIDwgaSkgJiYgKCFpc0VxdWFsKHBmLCBwYiwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGgsIHBkLCBzY2FsZUFscGhhKSB8fCBpc0VxdWFsKHBlLCBwaSwgc2NhbGVBbHBoYSkgJiYgKCFpc0VxdWFsKHBmLCBpNCwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGgsIGk1LCBzY2FsZUFscGhhKSkgfHwgaXNFcXVhbChwZSwgcGcsIHNjYWxlQWxwaGEpIHx8IGlzRXF1YWwocGUsIHBjLCBzY2FsZUFscGhhKSkpO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlID0gKChlIDwgaSkgJiYgKCFpc0VxdWFsKHBmLCBwYiwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGYsIHBjLCBzY2FsZUFscGhhKSB8fCAhaXNFcXVhbChwaCwgcGQsIHNjYWxlQWxwaGEpICYmICFpc0VxdWFsKHBoLCBwZywgc2NhbGVBbHBoYSkgfHwgaXNFcXVhbChwZSwgcGksIHNjYWxlQWxwaGEpICYmICghaXNFcXVhbChwZiwgZjQsIHNjYWxlQWxwaGEpICYmICFpc0VxdWFsKHBmLCBpNCwgc2NhbGVBbHBoYSkgfHwgIWlzRXF1YWwocGgsIGg1LCBzY2FsZUFscGhhKSAmJiAhaXNFcXVhbChwaCwgaTUsIHNjYWxlQWxwaGEpKSB8fCBpc0VxdWFsKHBlLCBwZywgc2NhbGVBbHBoYSkgfHwgaXNFcXVhbChwZSwgcGMsIHNjYWxlQWxwaGEpKSk7XG4gIH1cblxuICBpZiAoc3RhdGUpIHtcbiAgICBjb25zdFxuICAgICAga2UgPSB5dXZEaWZmZXJlbmNlKHBmLCBwZywgc2NhbGVBbHBoYSksXG4gICAgICBraSA9IHl1dkRpZmZlcmVuY2UocGgsIHBjLCBzY2FsZUFscGhhKSxcbiAgICAgIGV4MiA9IChwZSAhPSBwYyAmJiBwYiAhPSBwYyksXG4gICAgICBleDMgPSAocGUgIT0gcGcgJiYgcGQgIT0gcGcpLFxuICAgICAgcHggPSAoeXV2RGlmZmVyZW5jZShwZSwgcGYsIHNjYWxlQWxwaGEpIDw9IHl1dkRpZmZlcmVuY2UocGUsIHBoLCBzY2FsZUFscGhhKSkgPyBwZiA6IHBoO1xuICAgIGlmICgoKGtlIDw8IDEpIDw9IGtpKSAmJiBleDMgJiYgKGtlID49IChraSA8PCAxKSkgJiYgZXgyKSB7XG4gICAgICBbbjcsIG41LCBuNiwgbjIsIG44XSA9IGxlZnRVcDJfM1gobjcsIG41LCBuNiwgbjIsIG44LCBweCwgYmxlbmRDb2xvcnMpO1xuICAgIH0gZWxzZSBpZiAoKChrZSA8PCAxKSA8PSBraSkgJiYgZXgzKSB7XG4gICAgICBbbjcsIG41LCBuNiwgbjhdID0gbGVmdDJfM1gobjcsIG41LCBuNiwgbjgsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgfSBlbHNlIGlmICgoa2UgPj0gKGtpIDw8IDEpKSAmJiBleDIpIHtcbiAgICAgIFtuNSwgbjcsIG4yLCBuOF0gPSB1cDJfM1gobjUsIG43LCBuMiwgbjgsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFtuOCwgbjUsIG43XSA9IGRpYV8zWChuOCwgbjUsIG43LCBweCwgYmxlbmRDb2xvcnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChlIDw9IGkpIHtcbiAgICBuOCA9IGFscGhhQmxlbmQxMjhXKG44LCAoKHl1dkRpZmZlcmVuY2UocGUsIHBmLCBzY2FsZUFscGhhKSA8PSB5dXZEaWZmZXJlbmNlKHBlLCBwaCwgc2NhbGVBbHBoYSkpID8gcGYgOiBwaCksIGJsZW5kQ29sb3JzKTtcbiAgfVxuICByZXR1cm4gW24yLCBuNSwgbjYsIG43LCBuOF07XG59XG5cbi8vIDR4QlJcbmZ1bmN0aW9uIGxlZnRVcDIobjE1LCBuMTQsIG4xMSwgbjEzLCBuMTIsIG4xMCwgbjcsIG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgY29uc3RcbiAgICBibGVuZGVkTjEzID0gYWxwaGFCbGVuZDE5MlcobjEzLCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGJsZW5kZWROMTIgPSBhbHBoYUJsZW5kNjRXKG4xMiwgcGl4ZWwsIGJsZW5kQ29sb3JzKTtcblxuICByZXR1cm4gW3BpeGVsLCBwaXhlbCwgcGl4ZWwsIGJsZW5kZWROMTIsIGJsZW5kZWROMTIsIGJsZW5kZWROMTIsIGJsZW5kZWROMTMsIG4zXTtcbn1cblxuZnVuY3Rpb24gbGVmdDIobjE1LCBuMTQsIG4xMSwgbjEzLCBuMTIsIG4xMCwgcGl4ZWwsIGJsZW5kQ29sb3JzKSB7XG4gIHJldHVybiBbXG4gICAgcGl4ZWwsXG5cdHBpeGVsLFxuXHRhbHBoYUJsZW5kMTkyVyhuMTEsIHBpeGVsLCBibGVuZENvbG9ycyksXG5cdGFscGhhQmxlbmQxOTJXKG4xMywgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcblx0YWxwaGFCbGVuZDY0VyhuMTIsIHBpeGVsLCBibGVuZENvbG9ycyksXG5cdGFscGhhQmxlbmQ2NFcobjEwLCBwaXhlbCwgYmxlbmRDb2xvcnMpXG4gIF07XG59XG5cbmZ1bmN0aW9uIHVwMihuMTUsIG4xNCwgbjExLCBuMywgbjcsIG4xMCwgcGl4ZWwsIGJsZW5kQ29sb3JzKSB7XG4gIHJldHVybiBbXG5cdHBpeGVsLFxuXHRhbHBoYUJsZW5kMTkyVyhuMTQsIHBpeGVsLCBibGVuZENvbG9ycyksXG5cdHBpeGVsLFxuXHRhbHBoYUJsZW5kNjRXKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuXHRhbHBoYUJsZW5kMTkyVyhuNywgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcblx0YWxwaGFCbGVuZDY0VyhuMTAsIHBpeGVsLCBibGVuZENvbG9ycylcbiAgXTtcbn1cblxuZnVuY3Rpb24gZGlhKG4xNSwgbjE0LCBuMTEsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICByZXR1cm4gW1xuXHRwaXhlbCxcblx0YWxwaGFCbGVuZDEyOFcobjE0LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuXHRhbHBoYUJsZW5kMTI4VyhuMTEsIHBpeGVsLCBibGVuZENvbG9ycylcbiAgXTtcbn1cblxuZnVuY3Rpb24ga2VybmVsNFh2MihwZSwgcGksIHBoLCBwZiwgcGcsIHBjLCBwZCwgcGIsIGY0LCBpNCwgaDUsIGk1LCBuMTUsIG4xNCwgbjExLCBuMywgbjcsIG4xMCwgbjEzLCBuMTIsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKSB7XG4gIHZhciBleCA9IChwZSAhPSBwaCAmJiBwZSAhPSBwZik7XG4gIGlmICghZXgpIHtcbiAgICByZXR1cm4gW24xNSwgbjE0LCBuMTEsIG4zLCBuNywgbjEwLCBuMTMsIG4xMl07XG4gIH1cbiAgY29uc3RcbiAgICBlID0gKHl1dkRpZmZlcmVuY2UocGUsIHBjLCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGUsIHBnLCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGksIGg1LCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGksIGY0LCBzY2FsZUFscGhhKSkgKyAoeXV2RGlmZmVyZW5jZShwaCwgcGYsIHNjYWxlQWxwaGEpIDw8IDIpLFxuICAgIGkgPSAoeXV2RGlmZmVyZW5jZShwaCwgcGQsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwaCwgaTUsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwZiwgaTQsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwZiwgcGIsIHNjYWxlQWxwaGEpKSArICh5dXZEaWZmZXJlbmNlKHBlLCBwaSwgc2NhbGVBbHBoYSkgPDwgMiksXG4gICAgcHggPSAoeXV2RGlmZmVyZW5jZShwZSwgcGYsIHNjYWxlQWxwaGEpIDw9IHl1dkRpZmZlcmVuY2UocGUsIHBoLCBzY2FsZUFscGhhKSkgPyBwZiA6IHBoO1xuICBpZiAoKGUgPCBpKSAmJiAoIWlzRXF1YWwocGYsIHBiLCBzY2FsZUFscGhhKSAmJiAhaXNFcXVhbChwaCwgcGQsIHNjYWxlQWxwaGEpIHx8IGlzRXF1YWwocGUsIHBpLCBzY2FsZUFscGhhKSAmJiAoIWlzRXF1YWwocGYsIGk0LCBzY2FsZUFscGhhKSAmJiAhaXNFcXVhbChwaCwgaTUsIHNjYWxlQWxwaGEpKSB8fCBpc0VxdWFsKHBlLCBwZywgc2NhbGVBbHBoYSkgfHwgaXNFcXVhbChwZSwgcGMsIHNjYWxlQWxwaGEpKSkge1xuICAgIGNvbnN0XG4gICAgICBrZSA9IHl1dkRpZmZlcmVuY2UocGYsIHBnLCBzY2FsZUFscGhhKSxcbiAgICAgIGtpID0geXV2RGlmZmVyZW5jZShwaCwgcGMsIHNjYWxlQWxwaGEpLFxuICAgICAgZXgyID0gKHBlICE9IHBjICYmIHBiICE9IHBjKSxcbiAgICAgIGV4MyA9IChwZSAhPSBwZyAmJiBwZCAhPSBwZyk7XG4gICAgaWYgKCgoa2UgPDwgMSkgPD0ga2kpICYmIGV4MyB8fCAoa2UgPj0gKGtpIDw8IDEpKSAmJiBleDIpIHtcbiAgICAgIGlmICgoKGtlIDw8IDEpIDw9IGtpKSAmJiBleDMpIHtcbiAgICAgICAgW24xNSwgbjE0LCBuMTEsIG4xMywgbjEyLCBuMTBdID0gbGVmdDIobjE1LCBuMTQsIG4xMSwgbjEzLCBuMTIsIG4xMCwgcHgsIGJsZW5kQ29sb3JzKTtcbiAgICAgIH1cbiAgICAgIGlmICgoa2UgPj0gKGtpIDw8IDEpKSAmJiBleDIpIHtcbiAgICAgICAgW24xNSwgbjE0LCBuMTEsIG4zLCBuNywgbjEwXSA9IHVwMihuMTUsIG4xNCwgbjExLCBuMywgbjcsIG4xMCwgcHgsIGJsZW5kQ29sb3JzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgW24xNSwgbjE0LCBuMTFdID0gZGlhKG4xNSwgbjE0LCBuMTEsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgfVxuXG4gIH0gZWxzZSBpZiAoZSA8PSBpKSB7XG4gICAgbjE1ID0gYWxwaGFCbGVuZDEyOFcobjE1LCBweCwgYmxlbmRDb2xvcnMpO1xuICB9XG5cbiAgcmV0dXJuIFtuMTUsIG4xNCwgbjExLCBuMywgbjcsIG4xMCwgbjEzLCBuMTJdO1xufVxuXG5mdW5jdGlvbiBwYXJzZU9wdGlvbnMocmF3T3B0cykge1xuICBsZXRcbiAgICBibGVuZENvbG9ycyA9IHRydWUsXG4gICAgc2NhbGVBbHBoYSA9IGZhbHNlO1xuXG4gIGlmIChyYXdPcHRzKSB7XG5cdGlmIChyYXdPcHRzLmJsZW5kQ29sb3JzID09PSBmYWxzZSkge1xuXHQgIGJsZW5kQ29sb3JzID0gZmFsc2U7XG5cdH1cblx0XHRcblx0aWYgKHJhd09wdHMuc2NhbGVBbHBoYSA9PT0gdHJ1ZSkge1xuICAgICAgc2NhbGVBbHBoYSA9IHRydWU7XG4gICAgfVxuICB9XG5cdFxuICByZXR1cm4ge2JsZW5kQ29sb3JzLCBzY2FsZUFscGhhfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhicjJ4KHBpeGVsQXJyYXksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgY29uc3Qge2JsZW5kQ29sb3JzLCBzY2FsZUFscGhhfSA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKTtcbiAgY29uc3Qgc2NhbGVkUGl4ZWxBcnJheSA9IG5ldyBVaW50MzJBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xuICBmb3IgKGxldCBjID0gMDsgYyA8IHdpZHRoOyBjKyspIHtcbiAgICBmb3IgKGxldCBkID0gMDsgZCA8IGhlaWdodDsgZCsrKSB7XG4gICAgICBjb21wdXRlWGJyMngocGl4ZWxBcnJheSwgYywgZCwgd2lkdGgsIGhlaWdodCwgc2NhbGVkUGl4ZWxBcnJheSwgYyAqIDIsIGQgKiAyLCB3aWR0aCAqIDIsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNjYWxlZFBpeGVsQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4YnIzeChwaXhlbEFycmF5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gIGNvbnN0IHtibGVuZENvbG9ycywgc2NhbGVBbHBoYX0gPSBwYXJzZU9wdGlvbnMob3B0aW9ucyk7XG4gIGNvbnN0IHNjYWxlZFBpeGVsQXJyYXkgPSBuZXcgVWludDMyQXJyYXkod2lkdGggKiBoZWlnaHQgKiA5KTtcbiAgZm9yIChsZXQgYyA9IDA7IGMgPCB3aWR0aDsgYysrKSB7XG4gICAgZm9yIChsZXQgZCA9IDA7IGQgPCBoZWlnaHQ7IGQrKykge1xuICAgICAgY29tcHV0ZVhicjN4KHBpeGVsQXJyYXksIGMsIGQsIHdpZHRoLCBoZWlnaHQsIHNjYWxlZFBpeGVsQXJyYXksIGMgKiAzLCBkICogMywgd2lkdGggKiAzLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzY2FsZWRQaXhlbEFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24geGJyNHgocGl4ZWxBcnJheSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICBjb25zdCB7YmxlbmRDb2xvcnMsIHNjYWxlQWxwaGF9ID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpO1xuICBjb25zdCBzY2FsZWRQaXhlbEFycmF5ID0gbmV3IFVpbnQzMkFycmF5KHdpZHRoICogaGVpZ2h0ICogMTYpO1xuICBmb3IgKGxldCBjID0gMDsgYyA8IHdpZHRoOyBjKyspIHtcbiAgICBmb3IgKGxldCBkID0gMDsgZCA8IGhlaWdodDsgZCsrKSB7XG4gICAgICBjb21wdXRlWGJyNHgocGl4ZWxBcnJheSwgYywgZCwgd2lkdGgsIGhlaWdodCwgc2NhbGVkUGl4ZWxBcnJheSwgYyAqIDQsIGQgKiA0LCB3aWR0aCAqIDQsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNjYWxlZFBpeGVsQXJyYXk7XG59IiwiaW1wb3J0IHsgQml0bWFwIH0gZnJvbSBcIi4vQml0bWFwXCI7XG5pbXBvcnQgeyBGb250IH0gZnJvbSBcIi4vRm9udFwiO1xuXG5leHBvcnQgY29uc3QgV0hJVEU6IHN0cmluZyA9IFwid2hpdGVcIjtcbmV4cG9ydCBjb25zdCBCTEFDSzogc3RyaW5nID0gXCJibGFja1wiO1xuZXhwb3J0IGNvbnN0IFJFRDogc3RyaW5nID0gXCJyZWRcIjtcbmV4cG9ydCBjb25zdCBHUkVFTjogc3RyaW5nID0gXCJncmVlblwiO1xuZXhwb3J0IGNvbnN0IEJMVUU6IHN0cmluZyA9IFwiYmx1ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9mZnNjcmVlbiB7XG4gIGdldFdpZHRoKCk6IG51bWJlcjtcblxuICBnZXRIZWlnaHQoKTogbnVtYmVyO1xuXG4gIHNldERpbWVuc2lvbih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQ7XG5cbiAgbmVlZHNSZWZyZXNoKCk6IGJvb2xlYW47XG5cbiAgcmVsZWFzZSgpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyYXBoaWNzIHtcbiAgaW5pdFJlc291cmNlT25Mb2FkZWQoKTogdm9pZDtcblxuICBuZXdSZXNvdXJjZUxvYWRlZCgpOiB2b2lkO1xuXG4gIGdldCBjYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgZ2V0RXJyb3IoKTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIGFwcGx5Rm9udCgpOiB2b2lkO1xuXG4gIHNtb290aCgpOiB2b2lkO1xuICBcbiAgY29weSgpOiBCaXRtYXA7XG5cbiAgZ2V0T2Zmc2NyZWVuKCk6IE9mZnNjcmVlbiB8IG51bGw7XG4gIFxuICBjbGlwKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQ7XG5cbiAgY3JlYXRlT2Zmc2NyZWVuKCk6IE9mZnNjcmVlbjtcblxuICBkcmF3VG9PZmZzY3JlZW4oc2NyZWVuOiBPZmZzY3JlZW4gfCBudWxsKTogdm9pZDtcblxuICBkcmF3T2Zmc2NyZWVuKHNjcmVlbjogT2Zmc2NyZWVuKTogdm9pZDtcblxuICBkcmF3U2NhbGVkT2Zmc2NyZWVuKHNjcmVlbjogT2Zmc2NyZWVuLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkO1xuICBcbiAgZHJhd1NjYWxlZE9mZnNjcmVlblNlZ21lbnQoc2NyZWVuOiBPZmZzY3JlZW4sIHN4OiBudW1iZXIsIHN5OiBudW1iZXIsIHN3aWR0aDogbnVtYmVyLCBzaGVpZ2h0OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQ7XG4gICBcbiAgZmlsbFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2w6IHN0cmluZyk6IHZvaWQ7XG5cbiAgZmlsbENpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNvbDogc3RyaW5nKTogdm9pZDtcblxuICBkcmF3Q2lyY2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY29sOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIpOiB2b2lkO1xuXG4gIHNldExpbmVEYXNoKHNlZ21lbnRzOiBudW1iZXJbXSk6IHZvaWQ7XG4gIFxuICBkcmF3TGluZSh4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyLCBjb2w6IHN0cmluZywgd2lkdGg/OiBudW1iZXIpOiB2b2lkO1xuXG4gIGRyYXdCaXRtYXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGJpdG1hcDogQml0bWFwKTogdm9pZDtcblxuICBkcmF3U2NhbGVkQml0bWFwKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgYml0bWFwOiBCaXRtYXApOiB2b2lkO1xuICBcbiAgY2xlYXJSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQ7XG4gICBcbiAgY2xlYXIoKTogdm9pZDtcblxuICBzZXRGb250KGZvbnQ6IEZvbnQpOiB2b2lkO1xuICBcbiAgc2V0Q29tcG9zaXRlKG5hbWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgc2V0Rm9udFNpemUoc2l6ZTogbnVtYmVyKTogdm9pZDtcblxuICBkcmF3U3RyaW5nKHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGNvbDogc3RyaW5nKTogdm9pZDtcblxuICB0cmFuc2xhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkO1xuXG4gIHNjYWxlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcblxuICBwdXNoKCk6IHZvaWQ7XG5cbiAgcG9wKCk6IHZvaWQ7XG5cbiAgZ2V0V2lkdGgoKTogbnVtYmVyO1xuXG4gIGdldEhlaWdodCgpOiBudW1iZXI7XG5cbiAgZml0U2NyZWVuKHdpZHRoSW5WaXJ0dWFsUGl4ZWxzOiBudW1iZXIpOiB2b2lkO1xuXG4gIGdldFN0cmluZ1dpZHRoKHRleHQ6IHN0cmluZyk6IG51bWJlcjtcblxuICBzZXRBbHBoYShhbHBoYTogbnVtYmVyKTogdm9pZDtcblxuICBnZXRUcmFuc2Zvcm0oKTogRE9NTWF0cml4O1xuXG4gIHJlbmRlclN0YXJ0KCk6IHZvaWQ7XG5cbiAgcmVuZGVyRW5kKCk6IHZvaWQ7XG5cbiAgcmVzaXplKCk6IHZvaWQ7XG59IiwiaW1wb3J0IHsgQml0bWFwIH0gZnJvbSBcIi4vQml0bWFwXCI7XG5pbXBvcnQgeyBGb250IH0gZnJvbSBcIi4vRm9udFwiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL0dhbWVcIjtcbmltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4vR2FtZUNvbnRleHRcIjtcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcIi4vR3JhcGhpY3NcIjtcbmltcG9ydCB7IEJpdG1hcEltcGwgfSBmcm9tIFwiLi9pbXBsL0JpdG1hcEltcGxcIjtcbmltcG9ydCB7IEZvbnRJbXBsIH0gZnJvbSBcIi4vaW1wbC9Gb250SW1wbFwiO1xuaW1wb3J0IHsgR3JhcGhpY3NJbXBsIGFzIENhbnZhc0dyYXBoaWNzSW1wbCB9IGZyb20gXCIuL2ltcGwvR3JhcGhpY3NJbXBsXCI7XG5pbXBvcnQgeyBTb3VuZEltcGwgfSBmcm9tIFwiLi9pbXBsL1NvdW5kSW1wbFwiO1xuaW1wb3J0IHsgVGlsZXNldEltcGwgfSBmcm9tIFwiLi9pbXBsL1RpbGVzZXRJbXBsXCI7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gXCIuL1Jlc291cmNlXCI7XG5pbXBvcnQgeyBTb3VuZCB9IGZyb20gXCIuL1NvdW5kXCI7XG5pbXBvcnQgeyBMRFRLV29ybGQgfSBmcm9tIFwiLi90aWxlbWFwcy9MRFRLV29ybGRcIjtcbmltcG9ydCB7IE1hcFdvcmxkIH0gZnJvbSBcIi4vdGlsZW1hcHMvTWFwV29ybGRcIjtcbmltcG9ydCB7IFRpbGVzZXQgfSBmcm9tIFwiLi9UaWxlc2V0XCI7XG5pbXBvcnQgKiBhcyBKU1ppcCBmcm9tIFwianN6aXBcIjtcbmltcG9ydCB7IFBhbGV0dGUgfSBmcm9tIFwiLi9pbXBsL1BhbGV0dGVcIjtcbmltcG9ydCB7IE9wZW5HTEdyYXBoaWNzSW1wbCB9IGZyb20gXCIuL29wZW5nbC9PcGVuR0xHcmFwaGljc0ltcGxcIjtcbmltcG9ydCB7IE9wZW5HTEJpdG1hcCB9IGZyb20gXCIuL29wZW5nbC9PcGVuR0xCaXRtYXAuMVwiO1xuaW1wb3J0IHsgT3BlbkdMVGlsZXNldEltcGwgfSBmcm9tIFwiLi9vcGVuZ2wvT3BlbkdMVGlsZXNldEltcGxcIjtcbmltcG9ydCB7IEd1dGVMb2cgfSBmcm9tIFwiLi9Mb2dcIjtcblxubGV0IEdBTUVfTE9PUDogR2FtZUxvb3A7XG5sZXQgU09VTkRfT046IGJvb2xlYW4gPSB0cnVlO1xubGV0IE1VU0lDX09OOiBib29sZWFuID0gdHJ1ZTtcbmxldCBQUkVTQ0FMRV9USUxFU0VUUzogYm9vbGVhbiA9IGZhbHNlO1xubGV0IFVTRV9YQlI6IGJvb2xlYW4gPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU291bmRPbigpOiBib29sZWFuIHtcbiAgcmV0dXJuIFNPVU5EX09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNdXNpY09uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gTVVTSUNfT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRVc2VYYnIoKTogYm9vbGVhbiB7XG4gIHJldHVybiBVU0VfWEJSO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlWGJyKG9uOiBib29sZWFuKTogdm9pZCB7XG4gIFVTRV9YQlIgPSBvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFByZXNjYWxlVGlsZXNldHMoKTogYm9vbGVhbiB7XG4gIHJldHVybiBQUkVTQ0FMRV9USUxFU0VUUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByZXNjYWxlVGlsZXNldHMob246IGJvb2xlYW4pOiB2b2lkIHtcbiAgUFJFU0NBTEVfVElMRVNFVFMgPSBvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNvdW5kT24ob246IGJvb2xlYW4pOiB2b2lkIHtcbiAgU09VTkRfT04gPSBvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE11c2ljT24ob246IGJvb2xlYW4pOiB2b2lkIHtcbiAgaWYgKCFvbiAmJiBNVVNJQ19PTikge1xuICAgIE1VU0lDX09OID0gZmFsc2U7XG4gICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDKSB7XG4gICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG9uICYmICFNVVNJQ19PTikge1xuICAgIE1VU0lDX09OID0gdHJ1ZTtcbiAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnBsYXkoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMudm9sdW1lKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZShnYW1lOiBHYW1lLCByZW5kZXJlcjogUmVuZGVyZXIgPSBSZW5kZXJlci5DQU5WQVMpIHtcbiAgY29uc3QgbG9vcCA9IG5ldyBHYW1lTG9vcCgpO1xuICBsb29wLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgR0FNRV9MT09QID0gbG9vcC5zdGFydChnYW1lKTtcbn1cblxuZXhwb3J0IGVudW0gUmVuZGVyZXIge1xuICBDQU5WQVMgPSBcIkNhbnZhc1wiLFxuICBPUEVOR0wgPSBcIk9wZW5HTFwiLFxufTtcblxuY2xhc3MgR2FtZUxvb3AgaW1wbGVtZW50cyBHYW1lQ29udGV4dCB7XG4gIHJlc291cmNlczogUmVzb3VyY2VbXSA9IFtdO1xuICBnYW1lITogR2FtZTtcbiAgbGFzdEZyYW1lOiBudW1iZXIgPSAwO1xuICBncmFwaGljcyE6IEdyYXBoaWNzO1xuICBpbml0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbWFpblppcEZpbGU6IGFueSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgemlwUGVyY2VudExvYWRlZDogbnVtYmVyID0gMDtcbiAgcGFsZXR0ZTogUGFsZXR0ZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgbGFzdFdhaXRpbmc6IHN0cmluZyB8IHVuZGVmaW5lZCA9IFwiXCI7XG4gIHdhaXQ6IG51bWJlciA9IDA7XG4gIHNoaWZ0UHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBjb21tYW5kUHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBjb250cm9sUHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBhbHRQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIGxhc3RUb3VjaD86IFRvdWNoRXZlbnQ7XG4gIHJlbmRlcmVyOiBSZW5kZXJlciA9IFJlbmRlcmVyLk9QRU5HTDtcbiAgZ3JhcGhpY3NJbml0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBpc0NvbW1hbmRQcmVzc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbW1hbmRQcmVzc2VkO1xuICB9XG5cbiAgaXNBbHRQcmVzc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFsdFByZXNzZWQ7XG4gIH1cblxuICBpc0NvbnRyb2xQcmVzc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xQcmVzc2VkO1xuICB9XG5cbiAgaXNTaGlmdFByZXNzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnRQcmVzc2VkO1xuICB9XG5cbiAgZ2V0R3JhcGhpY3MoKTogR3JhcGhpY3Mge1xuICAgIHJldHVybiB0aGlzLmdyYXBoaWNzO1xuICB9XG5cbiAgcmVzb3VyY2VzUmVtYWluaW5nKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzLmZpbHRlcihyID0+ICFyLmxvYWRlZCkubGVuZ3RoO1xuICB9XG5cbiAgcmVzb3VyY2VzVG90YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXMubGVuZ3RoO1xuICB9XG5cbiAgZHVtcFJlc291cmNlSXNzdWVzKCk6IHZvaWQge1xuICAgIEd1dGVMb2cubG9nKFwiVGhlcmUgYXJlIFwiICsgdGhpcy5yZXNvdXJjZXMubGVuZ3RoICsgXCIgcmVzb3VyY2VzIHBlbmRpbmcuXCIpO1xuXG4gICAgLy8gR3V0ZUxvZy5sb2coXCJUaGUgZm9sbG93aW5nIHJlc291cmNlcyBhcmUgc3RpbGwgcGVuZGluZyBjb21wbGV0aW9uOlwiKTtcbiAgICAvLyBHdXRlTG9nLmxvZyhcIlwiKTtcbiAgICAvLyBmb3IgKGNvbnN0IHJlc291cmNlIG9mIHRoaXMucmVzb3VyY2VzKSB7XG4gICAgLy8gICBpZiAoIXJlc291cmNlLmxvYWRlZCkge1xuICAgIC8vICAgICBHdXRlTG9nLmxvZyhcIiAgXCIgK3Jlc291cmNlLm5hbWUpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIGN1cnJlbnRSZXNvdXJjZSgpOiBzdHJpbmcge1xuICAgIGZvciAoY29uc3QgcmVzb3VyY2Ugb2YgdGhpcy5yZXNvdXJjZXMpIHtcbiAgICAgIGlmICghcmVzb3VyY2UubG9hZGVkKSB7XG4gICAgICAgIHJldHVybiByZXNvdXJjZS5uYW1lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgYWxsUmVzb3VyY2VzTG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgIGZvciAoY29uc3QgcmVzb3VyY2Ugb2YgdGhpcy5yZXNvdXJjZXMpIHtcbiAgICAgIGlmICghcmVzb3VyY2UubG9hZGVkKSB7XG4gICAgICAgIGlmICh0aGlzLmxhc3RXYWl0aW5nICE9PSByZXNvdXJjZS5uYW1lKSB7XG4gICAgICAgICAgaWYgKHRoaXMubGFzdFdhaXRpbmcpIHtcbiAgICAgICAgICAgIEd1dGVMb2cubG9nKFwiW0dVVEVdIFdhcyB3YWl0aW5nIG9uOiBcIiArIHRoaXMubGFzdFdhaXRpbmcgKyBcIiBmb3IgXCIgKyB0aGlzLndhaXQgKyBcIiBmcmFtZXNcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubGFzdFdhaXRpbmcgPSByZXNvdXJjZS5uYW1lO1xuICAgICAgICAgIHRoaXMud2FpdCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53YWl0Kys7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubGFzdFdhaXRpbmcpIHtcbiAgICAgIEd1dGVMb2cubG9nKFwiW0dVVEVdIFdhcyB3YWl0aW5nIG9uIGxhc3Qgb25lOiBcIiArIHRoaXMubGFzdFdhaXRpbmcgKyBcIiBmb3IgXCIgKyB0aGlzLndhaXQgKyBcIiBmcmFtZXNcIik7XG4gICAgICB0aGlzLmxhc3RXYWl0aW5nID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKCF0aGlzLmdyYXBoaWNzSW5pdGVkKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3NJbml0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmluaXRSZXNvdXJjZU9uTG9hZGVkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGluaXRSZXNvdXJjZXNPbkZpcnN0Q2xpY2soKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFsbFJlc291cmNlc0xvYWRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuXG4gICAgICBmb3IgKGNvbnN0IHJlc291cmNlIG9mIHRoaXMucmVzb3VyY2VzKSB7XG4gICAgICAgIHJlc291cmNlLmluaXRPbkZpcnN0Q2xpY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXBwbHlQYWxldHRlKGhleEZpbGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmxvYWRUZXh0KGhleEZpbGUpLnRoZW4oKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnBhbGV0dGUgPSBuZXcgUGFsZXR0ZSh0ZXh0KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG1vdXNlTW92ZUhhbmRsZXIoeDogbnVtYmVyLCB5OiBudW1iZXIsIGlkOiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgdGhpcy5pbml0UmVzb3VyY2VzT25GaXJzdENsaWNrKCk7XG5cbiAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gdGhpcy5ncmFwaGljcy5jYW52YXM7XG4gICAgY2FudmFzLmZvY3VzKCk7XG5cbiAgICBjb25zdCB3aWR0aDogbnVtYmVyID0gY2FudmFzLmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGhlaWdodDogbnVtYmVyID0gY2FudmFzLmNsaWVudEhlaWdodDtcblxuICAgIHggPSBNYXRoLmZsb29yKCh4IC8gd2lkdGgpICogY2FudmFzLndpZHRoKTtcbiAgICB5ID0gTWF0aC5mbG9vcigoeSAvIGhlaWdodCkgKiBjYW52YXMuaGVpZ2h0KTtcblxuICAgIHRoaXMuZ2FtZS5vbk1vdXNlTW92ZSh0aGlzLCB4LCB5KTtcbiAgfVxuXG4gIHByaXZhdGUgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ2FtZS5vbk1vdXNlV2hlZWwodGhpcywgZGVsdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3VzZURvd25IYW5kbGVyKHg6IG51bWJlciwgeTogbnVtYmVyLCBpZDogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuXG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IHRoaXMuZ3JhcGhpY3MuY2FudmFzO1xuICAgIGNhbnZhcy5mb2N1cygpO1xuXG4gICAgY29uc3Qgd2lkdGg6IG51bWJlciA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQ6IG51bWJlciA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG5cbiAgICB4ID0gTWF0aC5mbG9vcigoeCAvIHdpZHRoKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgeSA9IE1hdGguZmxvb3IoKHkgLyBoZWlnaHQpICogY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLmdhbWUub25Nb3VzZURvd24odGhpcywgeCwgeSwgaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3VzZVVwSGFuZGxlcih4OiBudW1iZXIsIHk6IG51bWJlciwgaWQ6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICB0aGlzLmluaXRSZXNvdXJjZXNPbkZpcnN0Q2xpY2soKTtcblxuICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSB0aGlzLmdyYXBoaWNzLmNhbnZhcztcbiAgICBjb25zdCB3aWR0aDogbnVtYmVyID0gY2FudmFzLmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGhlaWdodDogbnVtYmVyID0gY2FudmFzLmNsaWVudEhlaWdodDtcblxuICAgIHggPSBNYXRoLmZsb29yKCh4IC8gd2lkdGgpICogY2FudmFzLndpZHRoKTtcbiAgICB5ID0gTWF0aC5mbG9vcigoeSAvIGhlaWdodCkgKiBjYW52YXMuaGVpZ2h0KTtcblxuICAgIHRoaXMuZ2FtZS5vbk1vdXNlVXAodGhpcywgeCwgeSwgaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBrZXlEb3duSGFuZGxlcihrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuXG4gICAgdGhpcy5nYW1lLm9uS2V5RG93bih0aGlzLCBrZXkpO1xuICB9XG5cbiAgcHJpdmF0ZSBrZXlVcEhhbmRsZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmdhbWUub25LZXlVcCh0aGlzLCBrZXkpO1xuICB9XG5cbiAgc3RhcnQoZ2FtZTogR2FtZSk6IEdhbWVMb29wIHtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuZ3JhcGhpY3MgPSB0aGlzLnJlbmRlcmVyID09PSBSZW5kZXJlci5DQU5WQVMgPyBuZXcgQ2FudmFzR3JhcGhpY3NJbXBsKCkgOiBuZXcgT3BlbkdMR3JhcGhpY3NJbXBsKCk7XG5cbiAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgICAgICB2YXIgcmVjdCA9ICg8YW55PmV2ZW50LnRhcmdldCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgdmFyIHggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgIHZhciB5ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgIHRoaXMubGFzdFRvdWNoID0gZXZlbnQ7XG4gICAgICAgICAgdGhpcy5tb3VzZURvd25IYW5kbGVyKHgsIHkpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgR3V0ZUxvZy5sb2coZSk7XG4gICAgICB9XG4gICAgfSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIChldmVudCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCkge1xuICAgICAgICAgIHZhciByZWN0ID0gKDxhbnk+ZXZlbnQudGFyZ2V0KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICB2YXIgeCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgdmFyIHkgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgdGhpcy5sYXN0VG91Y2ggPSBldmVudDtcbiAgICAgICAgICB0aGlzLm1vdXNlTW92ZUhhbmRsZXIoeCwgeSk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBHdXRlTG9nLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgICAgICB2YXIgcmVjdCA9ICg8YW55PmV2ZW50LnRhcmdldCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgaWYgKHRoaXMubGFzdFRvdWNoKSB7XG4gICAgICAgICAgICB2YXIgeCA9IHRoaXMubGFzdFRvdWNoLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICB2YXIgeSA9IHRoaXMubGFzdFRvdWNoLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHRoaXMubW91c2VVcEhhbmRsZXIoeCwgeSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VVcEhhbmRsZXIoMCwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgR3V0ZUxvZy5sb2coZSk7XG4gICAgICB9XG4gICAgfSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChldmVudCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5tb3VzZVdoZWVsSGFuZGxlcihldmVudC5kZWx0YVkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBHdXRlTG9nLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNoaWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jb21tYW5kUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jb250cm9sUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5hbHRQcmVzc2VkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5zaGlmdFByZXNzZWQgPSBldmVudC5zaGlmdEtleTtcbiAgICAgIHRoaXMuY29tbWFuZFByZXNzZWQgPSBldmVudC5tZXRhS2V5O1xuICAgICAgdGhpcy5jb250cm9sUHJlc3NlZCA9IGV2ZW50LmN0cmxLZXk7XG4gICAgICB0aGlzLmFsdFByZXNzZWQgPSBldmVudC5hbHRLZXk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubW91c2VEb3duSGFuZGxlcihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZLCBldmVudC5idXR0b24pO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgR3V0ZUxvZy5sb2coZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2hpZnRQcmVzc2VkID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICB0aGlzLmNvbW1hbmRQcmVzc2VkID0gZXZlbnQubWV0YUtleTtcbiAgICAgIHRoaXMuY29udHJvbFByZXNzZWQgPSBldmVudC5jdHJsS2V5O1xuICAgICAgdGhpcy5hbHRQcmVzc2VkID0gZXZlbnQuYWx0S2V5O1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLm1vdXNlTW92ZUhhbmRsZXIoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBHdXRlTG9nLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2hpZnRQcmVzc2VkID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICB0aGlzLmNvbW1hbmRQcmVzc2VkID0gZXZlbnQubWV0YUtleTtcbiAgICAgIHRoaXMuY29udHJvbFByZXNzZWQgPSBldmVudC5jdHJsS2V5O1xuICAgICAgdGhpcy5hbHRQcmVzc2VkID0gZXZlbnQuYWx0S2V5O1xuXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLm1vdXNlVXBIYW5kbGVyKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFksIGV2ZW50LmJ1dHRvbik7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBHdXRlTG9nLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiU2hpZnRcIikge1xuICAgICAgICB0aGlzLnNoaWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIk1ldGFcIikge1xuICAgICAgICB0aGlzLmNvbW1hbmRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQ29udHJvbFwiKSB7XG4gICAgICAgIHRoaXMuY29udHJvbFByZXNzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBbHRcIikge1xuICAgICAgICB0aGlzLmFsdFByZXNzZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmtleURvd25IYW5kbGVyKGV2ZW50LmNvZGUpO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIlNoaWZ0XCIpIHtcbiAgICAgICAgdGhpcy5zaGlmdFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiTWV0YVwiKSB7XG4gICAgICAgIHRoaXMuY29tbWFuZFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQ29udHJvbFwiKSB7XG4gICAgICAgIHRoaXMuY29udHJvbFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQWx0XCIpIHtcbiAgICAgICAgdGhpcy5hbHRQcmVzc2VkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMua2V5VXBIYW5kbGVyKGV2ZW50LmNvZGUpO1xuICAgIH0pO1xuXG4gICAgZ2FtZS5pbml0KHRoaXMpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubG9vcCgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsb29wKCk6IHZvaWQge1xuICAgIGNvbnN0IGVycm9yID0gdGhpcy5ncmFwaGljcy5nZXRFcnJvcigpO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5nYW1lLnJlbmRlcmVyRXJyb3IoZXJyb3IpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVuZGVyZXIgRXJyb3IgLSBcIiArIGVycm9yKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5sb29wKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBub3c6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGxldCBkZWx0YTogbnVtYmVyID0gMDtcbiAgICBpZiAodGhpcy5sYXN0RnJhbWUgIT09IDApIHtcbiAgICAgIGRlbHRhID0gbm93IC0gdGhpcy5sYXN0RnJhbWU7XG4gICAgfVxuICAgIHRoaXMubGFzdEZyYW1lID0gbm93O1xuXG4gICAgdGhpcy5ncmFwaGljcy5yZW5kZXJTdGFydCgpO1xuICAgIHRoaXMuZ3JhcGhpY3MuYXBwbHlGb250KCk7XG4gICAgdGhpcy5nYW1lLnVwZGF0ZSh0aGlzLCBkZWx0YSk7XG4gICAgdGhpcy5nYW1lLnJlbmRlcih0aGlzLCB0aGlzLmdyYXBoaWNzKTtcbiAgICB0aGlzLmdyYXBoaWNzLnJlbmRlckVuZCgpO1xuICB9XG5cbiAgZ2V0WmlwUHJvZ3Jlc3MoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy56aXBQZXJjZW50TG9hZGVkO1xuICB9XG5cbiAgbG9hZFppcCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICByZXEub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgIHJlcS5vbnByb2dyZXNzID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy56aXBQZXJjZW50TG9hZGVkID0gKGUubG9hZGVkIC8gZS50b3RhbCk7XG4gICAgICB9O1xuICAgICAgcmVxLm9ubG9hZCA9IChldmVudCkgPT4ge1xuICAgICAgICBKU1ppcC5sb2FkQXN5bmMocmVxLnJlc3BvbnNlKS50aGVuKCh6aXApID0+IHtcbiAgICAgICAgICB0aGlzLm1haW5aaXBGaWxlID0gemlwO1xuICAgICAgICAgIEd1dGVMb2cubG9nKFwiTG9hZGVkIFppcFwiKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJlcS5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfTtcblxuICAgICAgcmVxLnNlbmQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFppcEZpbGUobmFtZTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5tYWluWmlwRmlsZS5maWxlKG5hbWUpO1xuICAgIGlmICghZmlsZSkge1xuICAgICAgR3V0ZUxvZy5sb2coXCJ6aXAgZmlsZSBlbnRyeTogXCIgKyBuYW1lICsgXCIgbm90IGZvdW5kIVwiKTtcbiAgICAgIHRocm93IEVycm9yKFwiWmlwIGZpbGUgZW50cnkgbm90IGZvdW5kOiBcIiArIG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGdldFppcEZpbGVUZXh0KG5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5nZXRaaXBGaWxlKG5hbWUpLmFzeW5jKFwic3RyaW5nXCIpLnRoZW4oKHJlc3VsdDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pLmNhdGNoKChlOiBhbnkpID0+IHtcbiAgICAgICAgR3V0ZUxvZy5lcnJvcihlKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIGdldFppcEFycmF5QnVmZmVyKG5hbWU6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXlCdWZmZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZ2V0WmlwRmlsZShuYW1lKS5hc3luYyhcImFycmF5YnVmZmVyXCIpLnRoZW4oKHJlc3VsdDogQXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSkuY2F0Y2goKGU6IGFueSkgPT4ge1xuICAgICAgICBHdXRlTG9nLmVycm9yKGUpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0WmlwQmFzZTY0KG5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5nZXRaaXBGaWxlKG5hbWUpLmFzeW5jKFwiYXJyYXlidWZmZXJcIikudGhlbigocmVzdWx0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSkuY2F0Y2goKGU6IGFueSkgPT4ge1xuICAgICAgICBHdXRlTG9nLmVycm9yKGUpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0WmlwQmxvYihuYW1lOiBzdHJpbmcpOiBQcm9taXNlPEJsb2I+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QmxvYj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5nZXRaaXBGaWxlKG5hbWUpLmFzeW5jKFwiYmxvYlwiKS50aGVuKChyZXN1bHQ6IEJsb2IpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSkuY2F0Y2goKGU6IGFueSkgPT4ge1xuICAgICAgICBHdXRlTG9nLmVycm9yKGUpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgbG9hZE11c2ljKHVybDogc3RyaW5nKTogU291bmQge1xuICAgIGxldCBidWZmZXJQcm9taXNlOiB1bmRlZmluZWQgfCBQcm9taXNlPEFycmF5QnVmZmVyPiA9IHVuZGVmaW5lZDtcbiAgICBpZiAodXJsLmluZGV4T2YoXCJfL1wiKSA+PSAwKSB7XG4gICAgICBidWZmZXJQcm9taXNlID0gdGhpcy5nZXRaaXBBcnJheUJ1ZmZlcih1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKFwiXy9cIikpKTtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VuZDogU291bmQgPSBuZXcgU291bmRJbXBsKHVybCwgdHJ1ZSwgYnVmZmVyUHJvbWlzZSk7XG4gICAgdGhpcy5yZXNvdXJjZXMucHVzaChzb3VuZCk7XG5cbiAgICByZXR1cm4gc291bmQ7XG4gIH1cblxuICBsb2FkU291bmQodXJsOiBzdHJpbmcpOiBTb3VuZCB7XG4gICAgbGV0IGJ1ZmZlclByb21pc2U6IHVuZGVmaW5lZCB8IFByb21pc2U8QXJyYXlCdWZmZXI+ID0gdW5kZWZpbmVkO1xuICAgIGlmICh1cmwuaW5kZXhPZihcIl8vXCIpID49IDApIHtcbiAgICAgIGJ1ZmZlclByb21pc2UgPSB0aGlzLmdldFppcEFycmF5QnVmZmVyKHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoXCJfL1wiKSkpO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdW5kOiBTb3VuZCA9IG5ldyBTb3VuZEltcGwodXJsLCBmYWxzZSwgYnVmZmVyUHJvbWlzZSk7XG4gICAgdGhpcy5yZXNvdXJjZXMucHVzaChzb3VuZCk7XG5cbiAgICByZXR1cm4gc291bmQ7XG4gIH1cblxuICBwcml2YXRlIHRvUG90ZW50aWFsWmlwTG9hZEJsb2IodXJsOiBzdHJpbmcpOiBQcm9taXNlPEJsb2I+IHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodXJsLmluZGV4T2YoXCJfL1wiKSA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRaaXBCbG9iKHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoXCJfL1wiKSkpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIHRvUG90ZW50aWFsWmlwTG9hZCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHVybC5pbmRleE9mKFwiXy9cIikgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0WmlwQmFzZTY0KHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoXCJfL1wiKSkpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBsb2FkQml0bWFwKHVybDogc3RyaW5nKTogQml0bWFwIHtcbiAgICBpZiAodGhpcy5yZW5kZXJlciA9PT0gUmVuZGVyZXIuQ0FOVkFTKSB7XG4gICAgICBjb25zdCBiaXRtYXA6IEJpdG1hcCA9IG5ldyBCaXRtYXBJbXBsKHVybCwgdGhpcy50b1BvdGVudGlhbFppcExvYWQodXJsKSwgdGhpcy5wYWxldHRlKTtcbiAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2goYml0bWFwKTtcbiAgICAgIHJldHVybiBiaXRtYXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGJpdG1hcDogQml0bWFwID0gbmV3IE9wZW5HTEJpdG1hcCh0aGlzLmdyYXBoaWNzIGFzIE9wZW5HTEdyYXBoaWNzSW1wbCwgdXJsLCB0aGlzLnRvUG90ZW50aWFsWmlwTG9hZCh1cmwpLCB0aGlzLnBhbGV0dGUpO1xuICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaChiaXRtYXApO1xuXG4gICAgICByZXR1cm4gYml0bWFwO1xuICAgIH1cblxuICB9XG5cbiAgbG9hZFNjYWxlZFRpbGVzZXQodXJsOiBzdHJpbmcsIHRpbGVXaWR0aDogbnVtYmVyLCB0aWxlSGVpZ2h0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBUaWxlc2V0IHtcbiAgICBpZiAodGhpcy5yZW5kZXJlciA9PT0gUmVuZGVyZXIuQ0FOVkFTKSB7XG4gICAgICBjb25zdCB0aWxlc2V0OiBUaWxlc2V0ID0gbmV3IFRpbGVzZXRJbXBsKHVybCwgdGhpcy50b1BvdGVudGlhbFppcExvYWRCbG9iKHVybCksIHRpbGVXaWR0aCwgdGlsZUhlaWdodCwgc2NhbGUsIHRoaXMucGFsZXR0ZSk7XG4gICAgICB0aGlzLnJlc291cmNlcy5wdXNoKHRpbGVzZXQpO1xuICAgICAgcmV0dXJuIHRpbGVzZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRpbGVzZXQ6IFRpbGVzZXQgPSBuZXcgT3BlbkdMVGlsZXNldEltcGwodGhpcy5ncmFwaGljcyBhcyBPcGVuR0xHcmFwaGljc0ltcGwsIHVybCwgdGhpcy50b1BvdGVudGlhbFppcExvYWRCbG9iKHVybCksIHRpbGVXaWR0aCwgdGlsZUhlaWdodCwgc2NhbGUsIHRoaXMucGFsZXR0ZSk7XG4gICAgICB0aGlzLnJlc291cmNlcy5wdXNoKHRpbGVzZXQpO1xuICAgICAgcmV0dXJuIHRpbGVzZXQ7XG4gICAgfVxuICB9XG5cbiAgbG9hZFRpbGVzZXQodXJsOiBzdHJpbmcsIHRpbGVXaWR0aDogbnVtYmVyLCB0aWxlSGVpZ2h0OiBudW1iZXIpOiBUaWxlc2V0IHtcbiAgICBpZiAodGhpcy5yZW5kZXJlciA9PT0gUmVuZGVyZXIuQ0FOVkFTKSB7XG4gICAgICBjb25zdCB0aWxlc2V0OiBUaWxlc2V0ID0gbmV3IFRpbGVzZXRJbXBsKHVybCwgdGhpcy50b1BvdGVudGlhbFppcExvYWRCbG9iKHVybCksIHRpbGVXaWR0aCwgdGlsZUhlaWdodCwgMSwgdGhpcy5wYWxldHRlKTtcbiAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2godGlsZXNldCk7XG4gICAgICByZXR1cm4gdGlsZXNldDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGlsZXNldDogVGlsZXNldCA9IG5ldyBPcGVuR0xUaWxlc2V0SW1wbCh0aGlzLmdyYXBoaWNzIGFzIE9wZW5HTEdyYXBoaWNzSW1wbCwgdXJsLCB0aGlzLnRvUG90ZW50aWFsWmlwTG9hZEJsb2IodXJsKSwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCAxLCB0aGlzLnBhbGV0dGUpO1xuICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaCh0aWxlc2V0KTtcbiAgICAgIHJldHVybiB0aWxlc2V0O1xuICAgIH1cbiAgfVxuXG4gIGxvYWRGb250KHVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBGb250IHtcbiAgICByZXR1cm4gbmV3IEZvbnRJbXBsKHVybCwgbmFtZSk7XG4gIH1cblxuICBsb2FkTERUSyhuYW1lOiBzdHJpbmcsIGxvY2F0b3I6IChuYW1lOiBzdHJpbmcpID0+IHN0cmluZyk6IFByb21pc2U8TWFwV29ybGQ+IHtcbiAgICBjb25zdCB3b3JsZDogTERUS1dvcmxkID0gbmV3IExEVEtXb3JsZCgpO1xuICAgIHRoaXMucmVzb3VyY2VzLnB1c2god29ybGQpO1xuXG4gICAgcmV0dXJuIHdvcmxkLmxvYWQobmFtZSwgZmlsZSA9PiB0aGlzLmxvYWRKc29uKGxvY2F0b3IoZmlsZSkpKVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkVGV4dCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gaXRzIGFuIGFzc2V0IHJlZmVyZW5jZVxuICAgICAgaWYgKHVybC5pbmRleE9mKFwiXy9cIikgPj0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRaaXBGaWxlVGV4dCh1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKFwiXy9cIikpKS50aGVuKChyZXN1bHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcblxuICAgICAgICByZXEub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHJlcS5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXEub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlcS5zZW5kKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGxvYWRKc29uKHVybDogc3RyaW5nLCB0cmFuc2Zvcm0/OiAodGV4dDogc3RyaW5nKSA9PiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIGl0cyBhbiBhc3NldCByZWZlcmVuY2VcbiAgICAgIGlmICh1cmwuaW5kZXhPZihcIl8vXCIpID49IDApIHtcbiAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZihcIl8vXCIpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WmlwRmlsZVRleHQodXJsKS50aGVuKChyZXN1bHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh0cmFuc2Zvcm0gPyB0cmFuc2Zvcm0ocmVzdWx0KSA6IHJlc3VsdCk7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIEd1dGVMb2cubG9nKFwiRmFpbGVkIHRvIHBhcnNlIEpTT046IFwiICsgdXJsKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZGF0YTphcHBsaWNhdGlvbi9qc29uO3V0ZjgsXCIpKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZihcIixcIikgKyAxKTtcbiAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UodHJhbnNmb3JtID8gdHJhbnNmb3JtKHJlc3VsdCkgOiByZXN1bHQpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXEub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuXG4gICAgICAgIHJlcS5vbmxvYWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAocmVxLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSByZXEucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHRyYW5zZm9ybSA/IHRyYW5zZm9ybShyZXN1bHQpIDogcmVzdWx0KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXEub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlcS5zZW5kKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGlzUnVubmluZ1N0YW5kYWxvbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICgoPGFueT53aW5kb3cubmF2aWdhdG9yKS5zdGFuZGFsb25lID09PSB0cnVlKSB8fCAod2luZG93Lm1hdGNoTWVkaWEoJyhkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpJykubWF0Y2hlcyk7XG4gIH1cblxuICBpc1RhYmxldCgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaXNQaG9uZSgpICYmIHRoaXMuaXNJT1MoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGlzVGFibGV0ID0gLyhpcGFkfHRhYmxldHwoYW5kcm9pZCg/IS4qbW9iaWxlKSl8KHdpbmRvd3MoPyEuKnBob25lKSguKnRvdWNoKSl8a2luZGxlfHBsYXlib29rfHNpbGt8KHB1ZmZpbig/IS4qKElQfEFQfFdQKSkpKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgcmV0dXJuIGlzVGFibGV0O1xuICB9XG5cbiAgaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNJT1MoKSB8fCB0aGlzLmlzQW5kcm9pZCgpO1xuICB9XG5cbiAgaXNBbmRyb2lkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpICE9IG51bGw7XG4gIH1cblxuICBpc0lPUygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ2lQYWQgU2ltdWxhdG9yJyxcbiAgICAgICdpUGhvbmUgU2ltdWxhdG9yJyxcbiAgICAgICdpUG9kIFNpbXVsYXRvcicsXG4gICAgICAnaVBhZCcsXG4gICAgICAnaVBob25lJyxcbiAgICAgICdpUG9kJ1xuICAgIF0uaW5kZXhPZihuYXZpZ2F0b3IucGxhdGZvcm0pID49IDBcbiAgICAgIC8vIGlQYWQgb24gaU9TIDEzIGRldGVjdGlvblxuICAgICAgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoXCJNYWNcIikgJiYgXCJvbnRvdWNoZW5kXCIgaW4gZG9jdW1lbnQpXG4gIH1cblxuICBpc1Bob25lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSU9TKCkgJiYgKHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KVwiKS5tYXRjaGVzIHx8IHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NjBweClcIikubWF0Y2hlcyk7XG4gIH1cblxuICBzZXRTb3VuZFZvbHVtZSh2OiBudW1iZXIpOiB2b2lkIHtcbiAgICBTb3VuZEltcGwuc2V0U291bmRWb2x1bWUodik7XG4gIH1cblxuICBnZXRTb3VuZFZvbHVtZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBTb3VuZEltcGwuZ2V0U291bmRWb2x1bWUoKTtcbiAgfVxuXG4gIHNldE11c2ljVm9sdW1lKHY6IG51bWJlcik6IHZvaWQge1xuICAgIFNvdW5kSW1wbC5zZXRNdXNpY1ZvbHVtZSh2KTtcbiAgfVxuXG4gIGdldE11c2ljVm9sdW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIFNvdW5kSW1wbC5nZXRNdXNpY1ZvbHVtZSgpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgS2V5cyB7XG4gIHN0YXRpYyBFU0NBUEVfS0VZOiBzdHJpbmcgPSBcIkVzY2FwZVwiO1xuICBzdGF0aWMgRU5URVJfS0VZOiBzdHJpbmcgPSBcIkVudGVyXCI7XG4gIHN0YXRpYyBMRUZUX0tFWTogc3RyaW5nID0gXCJBcnJvd0xlZnRcIjtcbiAgc3RhdGljIFJJR0hUX0tFWTogc3RyaW5nID0gXCJBcnJvd1JpZ2h0XCI7XG4gIHN0YXRpYyBVUF9LRVk6IHN0cmluZyA9IFwiQXJyb3dVcFwiO1xuICBzdGF0aWMgRE9XTl9LRVk6IHN0cmluZyA9IFwiQXJyb3dEb3duXCI7XG4gIHN0YXRpYyBTUEFDRV9LRVk6IHN0cmluZyA9IFwiIFwiO1xuICBzdGF0aWMgU19LRVk6IHN0cmluZyA9IFwic1wiO1xuICBzdGF0aWMgTV9LRVk6IHN0cmluZyA9IFwibVwiO1xuICBzdGF0aWMgQV9LRVk6IHN0cmluZyA9IFwiYVwiO1xuICBzdGF0aWMgV19LRVk6IHN0cmluZyA9IFwid1wiO1xuICBzdGF0aWMgRF9LRVk6IHN0cmluZyA9IFwiZFwiO1xuICBzdGF0aWMgQ09OVFJPTF9LRVk6IHN0cmluZyA9IFwiQ29udHJvbFwiO1xuICBzdGF0aWMgTUVUQV9LRVk6IHN0cmluZyA9IFwiTWV0YVwiO1xuICBzdGF0aWMgQUxUX0tFWTogc3RyaW5nID0gXCJBbHRcIjtcbiAgc3RhdGljIFRBQl9LRVk6IHN0cmluZyA9IFwiVGFiXCI7XG59XG4iLCJleHBvcnQgY2xhc3MgR3V0ZUxvZyB7XG4gICAgc3RhdGljIElORk86IGJvb2xlYW4gPSB0cnVlO1xuICAgIHN0YXRpYyBFUlJPUjogYm9vbGVhbiA9IHRydWU7XG4gICAgc3RhdGljIFdBUk46IGJvb2xlYW4gPSB0cnVlO1xuICAgIHN0YXRpYyBUUkFDRTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc3RhdGljIGxvZyguLi5hcmdzOiBhbnkpIHtcbiAgICAgICAgaWYgKEd1dGVMb2cuSU5GTykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaW5mbyguLi5hcmdzOiBhbnkpIHtcbiAgICAgICAgaWYgKEd1dGVMb2cuSU5GTykge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBlcnJvciguLi5hcmdzOiBhbnkpIHtcbiAgICAgICAgaWYgKEd1dGVMb2cuRVJST1IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgd2FybSguLi5hcmdzOiBhbnkpIHtcbiAgICAgICAgaWYgKEd1dGVMb2cuV0FSTikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHRyYWNlKC4uLmFyZ3M6IGFueSkge1xuICAgICAgICBpZiAoR3V0ZUxvZy5UUkFDRSkge1xuICAgICAgICAgICAgY29uc29sZS50cmFjZSguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBBVURJT19DT05URVhULCBTb3VuZEltcGwgfSBmcm9tIFwiLi9pbXBsL1NvdW5kSW1wbFwiO1xuaW1wb3J0IHsgU291bmQgfSBmcm9tIFwiLi9Tb3VuZFwiO1xuXG5pbnRlcmZhY2UgU291bmRQb2ludCB7XG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcbiAgICB2b2x1bWU6IG51bWJlclxuICAgIHNvdXJjZTogQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlXG4gICAgZ2FpbjogR2Fpbk5vZGVcbiAgICBjYXRlZ29yeTogc3RyaW5nXG59XG5cbmV4cG9ydCBlbnVtIFNvdW5kRWFzaW5nIHtcbiAgICBMaW5lYXIsXG4gICAgUXVhZHJhdGljLFxuICAgIEN1YmljXG59XG5cbmludGVyZmFjZSBTb3VuZENhdGVnb3J5IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICB2b2x1bWU6IG51bWJlclxuICAgIG1heERpc3RhbmNlMjogbnVtYmVyXG4gICAgc2NhbGUyOiBudW1iZXJcbiAgICBlYXNpbmc6IFNvdW5kRWFzaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBTb3VuZFNjYXBlIHtcbiAgICBwcml2YXRlIF9zb3VuZFZvbHVtZTogbnVtYmVyID0gMTtcblxuICAgIHByaXZhdGUgcG9pbnRzOiBTb3VuZFBvaW50W10gPSBbXVxuICAgIHByaXZhdGUgbGlzdGVuZXJYOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBsaXN0ZW5lclk6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIGNhdGVnb3JpZXM6IFJlY29yZDxzdHJpbmcsIFNvdW5kQ2F0ZWdvcnk+ID0ge31cblxuICAgIGNhdGVnb3J5KG5hbWU6IHN0cmluZywgdm9sdW1lOiBudW1iZXIsIG1heERpc3RhbmNlOiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIGVhc2luZzogU291bmRFYXNpbmcpOiBTb3VuZFNjYXBlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW25hbWVdID0ge1xuICAgICAgICAgICAgbmFtZSwgdm9sdW1lLCBtYXhEaXN0YW5jZTI6IG1heERpc3RhbmNlICogbWF4RGlzdGFuY2UsIHNjYWxlMjogc2NhbGUgKiBzY2FsZSwgZWFzaW5nXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgXG4gICAgZ2V0IHNvdW5kVm9sdW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZFZvbHVtZTtcbiAgICB9XG5cbiAgICBzZXQgc291bmRWb2x1bWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zb3VuZFZvbHVtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLmxpc3RlbmVyWCA9IHhcbiAgICAgICAgdGhpcy5saXN0ZW5lclkgPSB5XG4gICAgICAgIHRoaXMudXBkYXRlVm9sdW1lcygpXG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5wb2ludHMpIHtcbiAgICAgICAgICAgIHBvaW50LnNvdXJjZS5zdG9wKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvaW50cyA9IFtdXG4gICAgfVxuXG4gICAgcGxheShzb3VuZDogU291bmQsIHZvbHVtZTogbnVtYmVyLCBjYXRlZ29yeTogc3RyaW5nLCB4PzogbnVtYmVyLCB5PzogbnVtYmVyKSB7XG4gICAgICAgIC8vIHByb3RlY3QgYWdhaW5zdCBwbGF5aW5nIHNvdW5kcyB0b28gZWFybHkgb3Igd2l0aG91dCBhdXRvIHdvcmtpbmdcbiAgICAgICAgaWYgKCFBVURJT19DT05URVhUKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbXBsID0gPFNvdW5kSW1wbD5zb3VuZFxuICAgICAgICBjb25zdCBzb3VyY2UgPSBBVURJT19DT05URVhULmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICBzb3VyY2UuYnVmZmVyID0gaW1wbC5idWZmZXI7XG4gICAgICAgIGNvbnN0IGdhaW4gPSBBVURJT19DT05URVhULmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgc291cmNlLmNvbm5lY3QoZ2Fpbik7XG4gICAgICAgIGdhaW4uY29ubmVjdChBVURJT19DT05URVhULmRlc3RpbmF0aW9uKTtcbiAgICAgICAgY29uc3QgcG9pbnQ6IFNvdW5kUG9pbnQgPSB7XG4gICAgICAgICAgICB4LCB5LCB2b2x1bWUsXG4gICAgICAgICAgICBzb3VyY2UsIGdhaW4sIGNhdGVnb3J5XG4gICAgICAgIH1cbiAgICAgICAgZ2Fpbi5nYWluLnZhbHVlID0gdGhpcy5jYWxjdWxhdGVWb2x1bWUocG9pbnQpXG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpXG4gICAgICAgIHNvdXJjZS5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgZXYgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBvaW50cy5pbmRleE9mKHBvaW50KVxuICAgICAgICAgICAgdGhpcy5wb2ludHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgLy8gR3V0ZUxvZy5sb2coYFNvdW5kIGVuZGVkOiAke3NvdW5kLm5hbWV9LCB0b3RhbDogJHt0aGlzLnBvaW50cy5sZW5ndGh9YClcbiAgICAgICAgfSlcbiAgICAgICAgc291cmNlLnN0YXJ0KClcbiAgICAgICAgLy8gR3V0ZUxvZy5sb2coYFNvdW5kIHN0YXJ0ZWQ6ICR7c291bmQubmFtZX0sIHRvdGFsOiAke3RoaXMucG9pbnRzLmxlbmd0aH1gKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVm9sdW1lcygpIHtcbiAgICAgICAgZm9yIChjb25zdCBwb2ludCBvZiB0aGlzLnBvaW50cykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5jYWxjdWxhdGVWb2x1bWUocG9pbnQpO1xuICAgICAgICAgICAgcG9pbnQuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHZhbHVlLCBBVURJT19DT05URVhULmN1cnJlbnRUaW1lKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVWb2x1bWUocG9pbnQ6IFNvdW5kUG9pbnQpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcmllc1twb2ludC5jYXRlZ29yeV1cbiAgICAgICAgaWYgKGNhdGVnb3J5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2ludC52b2x1bWUgKiB0aGlzLl9zb3VuZFZvbHVtZVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAocG9pbnQueCA9PT0gdW5kZWZpbmVkIHx8IHBvaW50LnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHBvaW50LnZvbHVtZSAqIGNhdGVnb3J5LnZvbHVtZSAqIHRoaXMuX3NvdW5kVm9sdW1lXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZHg6IG51bWJlciA9IHBvaW50LnggLSB0aGlzLmxpc3RlbmVyWFxuICAgICAgICBjb25zdCBkeTogbnVtYmVyID0gcG9pbnQueSAtIHRoaXMubGlzdGVuZXJZXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gKGR4ICogZHggKyBkeSAqIGR5KSAvIGNhdGVnb3J5LnNjYWxlMjtcbiAgICAgICAgLy8gKiAobG9zID8gMSA6IDAuMykgVE9ETzogY2FsbGJhY2tcbiAgICAgICAgY29uc3QgcmVkdWN0aW9uID0gTWF0aC5tYXgoMSAtIGRpc3RhbmNlIC8gY2F0ZWdvcnkubWF4RGlzdGFuY2UyLCAwKTtcbiAgICAgICAgc3dpdGNoIChjYXRlZ29yeS5lYXNpbmcpIHtcbiAgICAgICAgICAgIGNhc2UgU291bmRFYXNpbmcuTGluZWFyOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zb3VuZFZvbHVtZSAqIHBvaW50LnZvbHVtZSAqIGNhdGVnb3J5LnZvbHVtZSAqIHJlZHVjdGlvblxuICAgICAgICAgICAgY2FzZSBTb3VuZEVhc2luZy5RdWFkcmF0aWM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kVm9sdW1lICogcG9pbnQudm9sdW1lICogY2F0ZWdvcnkudm9sdW1lICogcmVkdWN0aW9uICogcmVkdWN0aW9uXG4gICAgICAgICAgICBjYXNlIFNvdW5kRWFzaW5nLkN1YmljOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zb3VuZFZvbHVtZSAqIHBvaW50LnZvbHVtZSAqIGNhdGVnb3J5LnZvbHVtZSAqIHJlZHVjdGlvbiAqIHJlZHVjdGlvbiAqIHJlZHVjdGlvblxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQml0bWFwIH0gZnJvbSBcIi4uL0JpdG1hcFwiO1xuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiLi4vR3JhcGhpY3NcIjtcbmltcG9ydCB7IEd1dGVMb2cgfSBmcm9tIFwiLi4vTG9nXCI7XG5pbXBvcnQgeyBHcmFwaGljc0ltcGwgfSBmcm9tIFwiLi9HcmFwaGljc0ltcGxcIjtcbmltcG9ydCB7IFBhbGV0dGUgfSBmcm9tIFwiLi9QYWxldHRlXCI7XG5cbmV4cG9ydCBjbGFzcyBCaXRtYXBJbXBsIGltcGxlbWVudHMgQml0bWFwIHtcbiAgd2lkdGg6IG51bWJlciA9IDA7XG4gIGhlaWdodDogbnVtYmVyID0gMDtcbiAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIGRhdGFVcmxMb2FkZXI6IFByb21pc2U8c3RyaW5nPiB8IHVuZGVmaW5lZCwgcGFsOiBQYWxldHRlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5uYW1lID0gdXJsO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBHdXRlTG9nLmxvZyhcIkVycm9yIGxvYWRpbmc6IFwiICsgdXJsKTtcbiAgICB9XG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5pbWFnZS53aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQ7XG5cbiAgICAgIGlmIChwYWwpIHtcbiAgICAgICAgcGFsLmFkanVzdEltYWdlKHRoaXMuaW1hZ2UpLnRoZW4oKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7IFxuICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoZGF0YVVybExvYWRlcikge1xuICAgICAgZGF0YVVybExvYWRlci50aGVuKChiYXNlNjQ6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IFwiZGF0YTpcIit1cmwuc3Vic3RyaW5nKHVybC5sZW5ndGgtMykrXCI7YmFzZTY0LFwiK2Jhc2U2NDtcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdXJsO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGN0eCA9IChncmFwaGljcyBhcyBHcmFwaGljc0ltcGwpLmN0eDtcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHgsIHkpO1xuICB9XG5cbiAgZHJhd1NjYWxlZChncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGN0eCA9IChncmFwaGljcyBhcyBHcmFwaGljc0ltcGwpLmN0eDtcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG4gIFxuICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICB9XG59IiwiaW1wb3J0IHsgRm9udCB9IGZyb20gXCIuLi9Gb250XCI7XG5cbmRlY2xhcmUgbGV0IEZvbnRGYWNlOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBGb250SW1wbCBpbXBsZW1lbnRzIEZvbnQge1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG5cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBzdHlsZS5pbm5lckhUTUwgPSBcIkBmb250LWZhY2UgeyBmb250LWZhbWlseTogXCIrbmFtZStcIjsgc3JjOiB1cmwoJ1wiK3VybCtcIicpOyB9IGJvZHkgeyBmb250LWZhbWlseTogXCIrbmFtZStcIjsgfVwiO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgYXBwbHkoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIGN0eC5mb250ID0gc2l6ZStcInB4IFwiICsgdGhpcy5uYW1lO1xuICB9XG59IiwiaW1wb3J0IHsgQml0bWFwLCBHcmFwaGljcyB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgRm9udCB9IGZyb20gXCIuLi9Gb250XCI7XG5pbXBvcnQgeyBPZmZzY3JlZW4gfSBmcm9tIFwiLi4vR3JhcGhpY3NcIjtcbmltcG9ydCB7IEZvbnRJbXBsIH0gZnJvbSBcIi4vRm9udEltcGxcIjtcbmltcG9ydCB7IFNvdW5kSW1wbCB9IGZyb20gXCIuL1NvdW5kSW1wbFwiO1xuXG5kZWNsYXJlIGxldCBJbnN0YWxsVHJpZ2dlcjogYW55O1xuXG52YXIgaXNGaXJlZm94ID0gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcblxuY2xhc3MgT2Zmc2NyZWVuSW1wbCBpbXBsZW1lbnRzIE9mZnNjcmVlbiB7XG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gIH1cblxuICByZWxlYXNlKCk6IHZvaWQge1xuICB9XG4gIFxuICBuZWVkc1JlZnJlc2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICBnZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gIH1cblxuICBzZXREaW1lbnNpb24od2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxufVxuXG5jbGFzcyBDb3B5Qml0bWFwIGltcGxlbWVudHMgQml0bWFwIHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIGxvYWRlZDogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nID0gXCJjb3B5XCI7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGN0eCA9IChncmFwaGljcyBhcyBHcmFwaGljc0ltcGwpLmN0eDtcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB4LCB5KTtcbiAgfVxuXG4gIGRyYXdTY2FsZWQoZ3JhcGhpY3M6IEdyYXBoaWNzLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjdHggPSAoZ3JhcGhpY3MgYXMgR3JhcGhpY3NJbXBsKS5jdHg7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhbnZhcywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBnZXREcmF3YWJsZSgpOiBDYW52YXNJbWFnZVNvdXJjZSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG5cbiAgaW5pdE9uRmlyc3RDbGljaygpOiB2b2lkIHtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR3JhcGhpY3NJbXBsIGltcGxlbWVudHMgR3JhcGhpY3Mge1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgbWFpbkN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBmb250OiBGb250O1xuICBmb250U2l6ZTogbnVtYmVyID0gMjA7XG4gIG9mZnNjcmVlbjogT2Zmc2NyZWVuIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZWNhbnZhc1wiKTtcbiAgICB0aGlzLmN0eCA9IDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiLCB7IGFscGhhOiBmYWxzZSB9KTtcbiAgICB0aGlzLm1haW5DdHggPSB0aGlzLmN0eDtcblxuICAgICg8YW55PiB0aGlzLmN0eCkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgKDxhbnk+IHRoaXMuY2FudmFzKS5zdHlsZS5mb250U21vb3RoID0gXCJuZXZlclwiO1xuICAgICg8YW55PiB0aGlzLmNhbnZhcykuc3R5bGUud2Via2l0Rm9udFNtb290aGluZyA9IFwibm9uZVwiO1xuXG4gICAgaWYgKGlzRmlyZWZveCkge1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSBcImNyaXNwLWVkZ2VzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gXCJwaXhlbGF0ZWRcIjtcbiAgICB9XG5cbiAgICB0aGlzLmZvbnQgPSBuZXcgRm9udEltcGwoXCJmb250LnR0ZlwiLCBcIkd1dGVEZWZhdWx0XCIpO1xuICAgIGlmICh0aGlzLmZvbnQpIHtcbiAgICAgIHRoaXMuYXBwbHlGb250KCk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKCk6IHZvaWQge1xuXG4gIH1cbiAgXG4gIGdldEVycm9yKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgcmVuZGVyU3RhcnQoKTogdm9pZCB7XG5cbiAgfVxuXG4gIHJlbmRlckVuZCgpOiB2b2lkIHtcblxuICB9XG4gIFxuICBuZXdSZXNvdXJjZUxvYWRlZCgpOiB2b2lkIHtcbiAgfVxuXG4gIGluaXRSZXNvdXJjZU9uTG9hZGVkKCk6IHZvaWQge1xuICB9XG5cbiAgc21vb3RoKCk6IHZvaWQge1xuICAgICg8YW55PiB0aGlzLmN0eCkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0cnVlO1xuICAgICg8YW55PiB0aGlzLmNhbnZhcykuc3R5bGUuZm9udFNtb290aCA9IFwiaW5pdGlhbFwiO1xuICAgICg8YW55PiB0aGlzLmNhbnZhcykuc3R5bGUud2Via2l0Rm9udFNtb290aGluZyA9IFwiaW5pdGlhbFwiO1xuXG4gICAgdGhpcy5jYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSBcImluaXRpYWxcIjtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpOiBET01NYXRyaXgge1xuICAgIHJldHVybiB0aGlzLmN0eC5nZXRUcmFuc2Zvcm0oKTtcbiAgfVxuICBcbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3R4LmNhbnZhcy53aWR0aCwgdGhpcy5jdHguY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBjbGlwKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBzcXVhcmVQYXRoID0gbmV3IFBhdGgyRCgpO1xuICAgIHNxdWFyZVBhdGgucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5jbGlwKHNxdWFyZVBhdGgpO1xuICB9XG5cbiAgY3JlYXRlT2Zmc2NyZWVuKCk6IE9mZnNjcmVlbiB7XG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKGN0eCkge1xuICAgICAgKDxhbnk+IGN0eCkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAoPGFueT4gY2FudmFzKS5zdHlsZS5mb250U21vb3RoID0gXCJuZXZlclwiO1xuICAgICAgKDxhbnk+IGNhbnZhcykuc3R5bGUud2Via2l0Rm9udFNtb290aGluZyA9IFwibm9uZVwiO1xuXG4gICAgICByZXR1cm4gbmV3IE9mZnNjcmVlbkltcGwoY2FudmFzLCBjdHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gY3JlYXRlIG9mZnNjcmVlbiBjYW52YXNcIik7XG4gICAgfVxuICB9XG5cbiAgZ2V0T2Zmc2NyZWVuKCk6IE9mZnNjcmVlbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm9mZnNjcmVlbjtcbiAgfVxuXG4gIGRyYXdUb09mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbiB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoc2NyZWVuKSB7XG4gICAgICB0aGlzLmN0eCA9IChzY3JlZW4gYXMgT2Zmc2NyZWVuSW1wbCkuY3R4O1xuICAgICAgdGhpcy5jdHgucmVzZXRUcmFuc2Zvcm0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdHggPSB0aGlzLm1haW5DdHg7XG4gICAgfVxuICAgIHRoaXMub2Zmc2NyZWVuID0gc2NyZWVuO1xuICB9XG5cbiAgZHJhd09mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbik6IHZvaWQge1xuICAgICg8YW55PiB0aGlzLmN0eCkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKChzY3JlZW4gYXMgT2Zmc2NyZWVuSW1wbCkuY2FudmFzLCAwLCAgMCk7XG4gIH1cblxuICBkcmF3U2NhbGVkT2Zmc2NyZWVuKHNjcmVlbjogT2Zmc2NyZWVuLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAoPGFueT4gdGhpcy5jdHgpLndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSgoc2NyZWVuIGFzIE9mZnNjcmVlbkltcGwpLmNhbnZhcywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBkcmF3U2NhbGVkT2Zmc2NyZWVuU2VnbWVudChzY3JlZW46IE9mZnNjcmVlbiwgc3g6IG51bWJlciwgc3k6IG51bWJlciwgc3dpZHRoOiBudW1iZXIsIHNoZWlnaHQ6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgKDxhbnk+IHRoaXMuY3R4KS53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoKHNjcmVlbiBhcyBPZmZzY3JlZW5JbXBsKS5jYW52YXMsIHN4LCBzeSwgc3dpZHRoLCBzaGVpZ2h0LCAgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBjbGVhclJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgZml0U2NyZWVuKHBpeGVsU2NhbGU6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHdpZHRoOiBudW1iZXIgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICAgIGNvbnN0IGhlaWdodDogbnVtYmVyID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApXG4gICAgY29uc3QgcmVhbFdpZHRoOiBudW1iZXIgPSBNYXRoLmZsb29yKHdpZHRoIC8gcGl4ZWxTY2FsZSkgKiBwaXhlbFNjYWxlO1xuICAgIGNvbnN0IHJlYWxIZWlnaHQ6IG51bWJlciA9IE1hdGguZmxvb3IoaGVpZ2h0IC8gcGl4ZWxTY2FsZSkgKiBwaXhlbFNjYWxlO1xuICAgIGNvbnN0IHZpcnR1YWxXaWR0aDogbnVtYmVyID0gcmVhbFdpZHRoIC8gcGl4ZWxTY2FsZTtcbiAgICBjb25zdCB2aXJ0dWFsSGVpZ2h0OiBudW1iZXIgPSByZWFsSGVpZ2h0IC8gcGl4ZWxTY2FsZTtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdmlydHVhbFdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHZpcnR1YWxIZWlnaHQ7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSByZWFsV2lkdGggKyBcInB4XCI7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gcmVhbEhlaWdodCArIFwicHhcIjtcbiAgfVxuXG4gIHNldEFscGhhKGFscGhhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICB9XG4gIFxuICBjb3B5KCk6IEJpdG1hcCB7XG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuICBcbiAgICBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpPy5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIDAsIDApO1xuICAgIHJldHVybiBuZXcgQ29weUJpdG1hcChjYW52YXMpO1xuICB9XG5cbiAgZ2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jdHguY2FudmFzLndpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQ7XG4gIH1cbiAgXG4gIHB1c2goKTogdm9pZCB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICB9XG5cbiAgcG9wKCk6IHZvaWQge1xuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh4LHkpO1xuICB9XG5cbiAgc2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN0eC5zY2FsZSh4LHkpO1xuICB9XG5cbiAgYXBwbHlGb250KCk6IHZvaWQge1xuICAgIHRoaXMuZm9udC5hcHBseSh0aGlzLmN0eCwgdGhpcy5mb250U2l6ZSk7XG4gIH1cblxuICBzZXRGb250KGZvbnQ6IEZvbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZvbnQgPSBmb250O1xuICAgIHRoaXMuYXBwbHlGb250KCk7XG4gIH1cblxuICBzZXRGb250U2l6ZShzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmZvbnRTaXplID0gc2l6ZTtcbiAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICB9XG5cbiAgZ2V0U3RyaW5nV2lkdGgodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gIH1cblxuICBkcmF3U3RyaW5nKHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGNvbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICB9XG5cbiAgc2V0Q29tcG9zaXRlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICg8YW55PiB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24pID0gbmFtZTtcbiAgfVxuXG4gIGRyYXdDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZywgd2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gY29sO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGZpbGxDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbDtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG5cbiAgZmlsbFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2w6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbDtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCh4LHksd2lkdGgsaGVpZ2h0KTtcbiAgfVxuICBcbiAgc2V0TGluZURhc2goc2VnbWVudHM6IG51bWJlcltdKTogdm9pZCB7XG4gICAgdGhpcy5jdHguc2V0TGluZURhc2goc2VnbWVudHMpO1xuICB9XG5cbiAgZHJhd0xpbmUoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgY29sOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIgPSAxKTogdm9pZCB7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBjb2w7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgdGhpcy5jdHgubGluZVRvKHgyLCB5Mik7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3Qml0bWFwKHg6IG51bWJlciwgeTogbnVtYmVyLCBiaXRtYXA6IEJpdG1hcCk6IHZvaWQge1xuICAgIGlmICghYml0bWFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgKDxhbnk+IHRoaXMuY3R4KS53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICBiaXRtYXAuZHJhdyh0aGlzLCB4LCB5KTtcbiAgfVxuXG4gIGRyYXdTY2FsZWRCaXRtYXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBiaXRtYXA6IEJpdG1hcCk6IHZvaWQge1xuICAgIGlmICghYml0bWFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICg8YW55PiB0aGlzLmN0eCkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgYml0bWFwLmRyYXdTY2FsZWQodGhpcywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbn0iLCJpbXBvcnQgeyBNYXBOb2RlIH0gZnJvbSBcIi4uL3BhdGgvTWFwTm9kZVwiO1xuXG5pbnRlcmZhY2UgQ29sIHtcbiAgICByOiBudW1iZXI7XG4gICAgZzogbnVtYmVyO1xuICAgIGI6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4OiBzdHJpbmcpOiBDb2wge1xuICAgIHZhciBiaWdpbnQgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICB2YXIgciA9IChiaWdpbnQgPj4gMTYpICYgMjU1O1xuICAgIHZhciBnID0gKGJpZ2ludCA+PiA4KSAmIDI1NTtcbiAgICB2YXIgYiA9IGJpZ2ludCAmIDI1NTtcblxuICAgIHJldHVybiB7ciwgZywgYn1cbn1cblxuZnVuY3Rpb24gZGVsdGFFKHJnYkE6IENvbCwgcmdiQjogQ29sKSB7XG4gICAgbGV0IGxhYkEgPSByZ2IybGFiKHJnYkEpO1xuICAgIGxldCBsYWJCID0gcmdiMmxhYihyZ2JCKTtcbiAgICBsZXQgZGVsdGFMID0gbGFiQVswXSAtIGxhYkJbMF07XG4gICAgbGV0IGRlbHRhQSA9IGxhYkFbMV0gLSBsYWJCWzFdO1xuICAgIGxldCBkZWx0YUIgPSBsYWJBWzJdIC0gbGFiQlsyXTtcbiAgICBsZXQgYzEgPSBNYXRoLnNxcnQobGFiQVsxXSAqIGxhYkFbMV0gKyBsYWJBWzJdICogbGFiQVsyXSk7XG4gICAgbGV0IGMyID0gTWF0aC5zcXJ0KGxhYkJbMV0gKiBsYWJCWzFdICsgbGFiQlsyXSAqIGxhYkJbMl0pO1xuICAgIGxldCBkZWx0YUMgPSBjMSAtIGMyO1xuICAgIGxldCBkZWx0YUggPSBkZWx0YUEgKiBkZWx0YUEgKyBkZWx0YUIgKiBkZWx0YUIgLSBkZWx0YUMgKiBkZWx0YUM7XG4gICAgZGVsdGFIID0gZGVsdGFIIDwgMCA/IDAgOiBNYXRoLnNxcnQoZGVsdGFIKTtcbiAgICBsZXQgc2MgPSAxLjAgKyAwLjA0NSAqIGMxO1xuICAgIGxldCBzaCA9IDEuMCArIDAuMDE1ICogYzE7XG4gICAgbGV0IGRlbHRhTEtsc2wgPSBkZWx0YUwgLyAoMS4wKTtcbiAgICBsZXQgZGVsdGFDa2NzYyA9IGRlbHRhQyAvIChzYyk7XG4gICAgbGV0IGRlbHRhSGtoc2ggPSBkZWx0YUggLyAoc2gpO1xuICAgIGxldCBpID0gZGVsdGFMS2xzbCAqIGRlbHRhTEtsc2wgKyBkZWx0YUNrY3NjICogZGVsdGFDa2NzYyArIGRlbHRhSGtoc2ggKiBkZWx0YUhraHNoO1xuICAgIHJldHVybiBpIDwgMCA/IDAgOiBNYXRoLnNxcnQoaSk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHJnYjJsYWIocmdiOiBDb2wpe1xuICAgIGxldCByID0gcmdiLnIgLyAyNTUsIGcgPSByZ2IuZyAvIDI1NSwgYiA9IHJnYi5iIC8gMjU1LCB4LCB5LCB6O1xuICAgIHIgPSAociA+IDAuMDQwNDUpID8gTWF0aC5wb3coKHIgKyAwLjA1NSkgLyAxLjA1NSwgMi40KSA6IHIgLyAxMi45MjtcbiAgICBnID0gKGcgPiAwLjA0MDQ1KSA/IE1hdGgucG93KChnICsgMC4wNTUpIC8gMS4wNTUsIDIuNCkgOiBnIC8gMTIuOTI7XG4gICAgYiA9IChiID4gMC4wNDA0NSkgPyBNYXRoLnBvdygoYiArIDAuMDU1KSAvIDEuMDU1LCAyLjQpIDogYiAvIDEyLjkyO1xuICAgIHggPSAociAqIDAuNDEyNCArIGcgKiAwLjM1NzYgKyBiICogMC4xODA1KSAvIDAuOTUwNDc7XG4gICAgeSA9IChyICogMC4yMTI2ICsgZyAqIDAuNzE1MiArIGIgKiAwLjA3MjIpIC8gMS4wMDAwMDtcbiAgICB6ID0gKHIgKiAwLjAxOTMgKyBnICogMC4xMTkyICsgYiAqIDAuOTUwNSkgLyAxLjA4ODgzO1xuICAgIHggPSAoeCA+IDAuMDA4ODU2KSA/IE1hdGgucG93KHgsIDEvMykgOiAoNy43ODcgKiB4KSArIDE2LzExNjtcbiAgICB5ID0gKHkgPiAwLjAwODg1NikgPyBNYXRoLnBvdyh5LCAxLzMpIDogKDcuNzg3ICogeSkgKyAxNi8xMTY7XG4gICAgeiA9ICh6ID4gMC4wMDg4NTYpID8gTWF0aC5wb3coeiwgMS8zKSA6ICg3Ljc4NyAqIHopICsgMTYvMTE2O1xuICAgIHJldHVybiBbKDExNiAqIHkpIC0gMTYsIDUwMCAqICh4IC0geSksIDIwMCAqICh5IC0geildXG4gIH1cblxuZXhwb3J0IGNsYXNzIFBhbGV0dGUge1xuICBjb2xzOiBDb2xbXSA9IFtdO1xuICBtYXBwaW5nOiBSZWNvcmQ8bnVtYmVyLCBDb2w+ID0ge307XG5cbiAgY29uc3RydWN0b3IoaGV4VmFsdWVzOiBzdHJpbmcpIHtcbiAgICBmb3IgKGNvbnN0IGhleCBvZiBoZXhWYWx1ZXMuc3BsaXQoXCJcXG5cIikpIHtcbiAgICAgICAgdGhpcy5jb2xzLnB1c2goaGV4VG9SZ2IoaGV4KSk7XG4gICAgfVxuICB9XG5cbiAgZmluZEJlc3RNYXRjaChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogQ29sIHtcbiAgICBjb25zdCB0b01hdGNoQ29sOiBDb2wgPSB7IHIsIGcsIGIgfTtcbiAgICBsZXQgYmVzdE1hdGNoOiBDb2wgPSB0aGlzLmNvbHNbMF07XG4gICAgbGV0IHNtYWxsZXN0RGVsdGEgPSAxMDAwO1xuXG4gICAgZm9yIChjb25zdCBwYWxDb2wgb2YgdGhpcy5jb2xzKSB7XG4gICAgICAgIGNvbnN0IGRpZiA9IGRlbHRhRShwYWxDb2wsIHRvTWF0Y2hDb2wpO1xuICAgICAgICBpZiAoZGlmIDwgc21hbGxlc3REZWx0YSkge1xuICAgICAgICAgICAgc21hbGxlc3REZWx0YSA9IGRpZjtcbiAgICAgICAgICAgIGJlc3RNYXRjaCA9IHBhbENvbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gIH1cblxuICBhZGp1c3RJbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgICAgICAgY29uc3QgaWQ6IEltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwwLGltYWdlLndpZHRoLGltYWdlLmhlaWdodCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7aTxpZC5kYXRhLmxlbmd0aDtpKz00KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sOiBudW1iZXIgPSBpZC5kYXRhW2ldO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IGlkLmRhdGFbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgZyA9IGlkLmRhdGFbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBpZC5kYXRhW2kgKyAyXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZCA9IHIgfCAoMHhGRjAwICYgKGcgPDwgOCkpIHwgKDB4RkYwMDAwICYgKGIgPDwgMTYpKTtcbiAgICAgICAgICAgICAgICBsZXQgYmVzdE1hdGNoID0gdGhpcy5tYXBwaW5nW2NvbWJpbmVkXTtcbiAgICAgICAgICAgICAgICBpZiAoIWJlc3RNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2ggPSB0aGlzLmZpbmRCZXN0TWF0Y2gociwgZywgYik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwcGluZ1tjb21iaW5lZF0gPSBiZXN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlkLmRhdGFbaV0gPSBiZXN0TWF0Y2gucjtcbiAgICAgICAgICAgICAgICBpZC5kYXRhW2kgKyAxXSA9IGJlc3RNYXRjaC5nO1xuICAgICAgICAgICAgICAgIGlkLmRhdGFbaSArIDJdID0gYmVzdE1hdGNoLmI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKGlkLCAwLCAwKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICByZXN1bHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoXCJGYWlsdXJlIHRvIGNyZWF0ZSBjb250ZXh0XCIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBpc011c2ljT24sIGlzU291bmRPbiB9IGZyb20gXCIuLi9HdXRlXCI7XG5pbXBvcnQgeyBHdXRlTG9nIH0gZnJvbSBcIi4uL0xvZ1wiO1xuaW1wb3J0IHsgU291bmQgfSBmcm9tIFwiLi4vU291bmRcIjtcblxubGV0IEF1ZGlvQ29udGV4dDogYW55O1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8ICg8YW55PndpbmRvdykud2Via2l0QXVkaW9Db250ZXh0O1xufVxuZXhwb3J0IGxldCBBVURJT19DT05URVhUOiBBdWRpb0NvbnRleHQ7XG5cbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gIGlmIChpc011c2ljT24oKSkge1xuICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgaWYgKGRvY3VtZW50LmhpZGRlbikge1xuICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgQVVESU9fQ09OVEVYVC5zdXNwZW5kKCkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIEd1dGVMb2cudHJhY2UoXCJTdXNwZW5kIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgICAgICAgICAgR3V0ZUxvZy50cmFjZShlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIEd1dGVMb2cudHJhY2UoXCJTdXNwZW5kIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgICAgICAgIEd1dGVMb2cudHJhY2UoZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgQVVESU9fQ09OVEVYVC5yZXN1bWUoKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgR3V0ZUxvZy50cmFjZShcIlJlc3VtZSBhdWRpbyBjb250ZXh0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIEd1dGVMb2cudHJhY2UoZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBHdXRlTG9nLnRyYWNlKFwiUmVzdW1lIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgICAgICAgIEd1dGVMb2cudHJhY2UoZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMhLnBsYXkoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMhLnZvbHVtZSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzU291bmRPbigpKSB7XG4gICAgZm9yIChjb25zdCBsb29wIG9mIFNvdW5kSW1wbC5DVVJSRU5UX0xPT1BTKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgIGxvb3Auc3RvcChmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb29wLnBsYXkobG9vcC52b2x1bWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xufVxuXG5leHBvcnQgY2xhc3MgU291bmRJbXBsIGltcGxlbWVudHMgU291bmQge1xuICBzdGF0aWMgQ1VSUkVOVF9NVVNJQzogU291bmRJbXBsIHwgbnVsbDtcbiAgc3RhdGljIENVUlJFTlRfTE9PUFM6IFNvdW5kSW1wbFtdID0gW107XG5cbiAgc3RhdGljIHNvdW5kVm9sdW1lOiBudW1iZXIgPSAxO1xuICBzdGF0aWMgbXVzaWNWb2x1bWU6IG51bWJlciA9IDE7XG5cbiAgc3RhdGljIHNldFNvdW5kVm9sdW1lKHY6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc291bmRWb2x1bWUgPSB2O1xuXG4gICAgZm9yIChjb25zdCBsb29wIG9mIHRoaXMuQ1VSUkVOVF9MT09QUykge1xuICAgICAgbG9vcC5nYWluLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUobG9vcC52b2x1bWUgKiBTb3VuZEltcGwuc291bmRWb2x1bWUsIEFVRElPX0NPTlRFWFQuY3VycmVudFRpbWUgKyAwLjI1KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0U291bmRWb2x1bWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zb3VuZFZvbHVtZTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRNdXNpY1ZvbHVtZSh2OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm11c2ljVm9sdW1lID0gdjtcblxuICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLmdhaW4pIHtcbiAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnZvbHVtZSAqIFNvdW5kSW1wbC5tdXNpY1ZvbHVtZSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSArIDAuMjUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRNdXNpY1ZvbHVtZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm11c2ljVm9sdW1lO1xuICB9XG5cbiAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGRhdGEhOiBBcnJheUJ1ZmZlcjtcbiAgdm9sdW1lOiBudW1iZXIgPSAxO1xuICBidWZmZXIhOiBBdWRpb0J1ZmZlcjtcbiAgbXVzaWM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc291cmNlITogQXVkaW9CdWZmZXJTb3VyY2VOb2RlIHwgbnVsbDtcbiAgZ2FpbiE6IEdhaW5Ob2RlO1xuICB1cmw6IHN0cmluZztcbiAgbG9vcGVkOiBib29sZWFuID0gZmFsc2U7XG4gIG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZywgbXVzaWM6IGJvb2xlYW4sIGFycmF5QnVmZmVyOiBQcm9taXNlPEFycmF5QnVmZmVyPiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMubmFtZSA9IHVybDtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLm11c2ljID0gbXVzaWM7XG5cbiAgICBpZiAoYXJyYXlCdWZmZXIpIHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIGFycmF5QnVmZmVyLnRoZW4oKGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBhcnJheUJ1ZmZlcjtcbiAgICAgICAgdGhpcy50cnlMb2FkKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgcmVxLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG5cbiAgICAgIHJlcS5vbmxvYWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdmFyIGFycmF5QnVmZmVyID0gcmVxLnJlc3BvbnNlO1xuICAgICAgICBpZiAoYXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBhcnJheUJ1ZmZlcjtcbiAgICAgICAgICB0aGlzLnRyeUxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmVxLnNlbmQoKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIHRyeUxvYWQoKTogdm9pZCB7XG4gICAgaWYgKEFVRElPX0NPTlRFWFQgJiYgdGhpcy5kYXRhKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gQVVESU9fQ09OVEVYVC5kZWNvZGVBdWRpb0RhdGEodGhpcy5kYXRhLCAoYnVmZmVyOiBBdWRpb0J1ZmZlcikgPT4ge1xuICAgICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9PT0gdGhpcykge1xuICAgICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wbGF5KHRoaXMudm9sdW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIChlKSA9PiB7XG4gICAgICAgICAgR3V0ZUxvZy5lcnJvcihlKTtcbiAgICAgICAgICBHdXRlTG9nLmxvZyhcIlNvdW5kIGRlY29kZSBmYWlsZWQgZm9yIHRoaXM6IFwiICsgdGhpcy5uYW1lKTtcbiAgICAgICAgICBHdXRlTG9nLmxvZyhcIkZhaWxlZCB0byBsb2FkOiBcIiArIHRoaXMudXJsKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4geyB9KS5jYXRjaCgoZSkgPT4geyB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBHdXRlTG9nLmxvZyhcImRlY29kZUF1ZGlvRGF0YSBleGNlcHRpb24gb24gbG9hZGluZyBcIiArIHRoaXMudXJsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25maXJtQXVkaW9Db250ZXh0KCkge1xuICAgIHRyeSB7XG4gICAgICBBVURJT19DT05URVhULnJlc3VtZSgpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIEd1dGVMb2cudHJhY2UoXCJSZXN1bWUgYXVkaW8gY29udGV4dCBmYWlsZWRcIik7XG4gICAgICAgIEd1dGVMb2cudHJhY2UoZSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBHdXRlTG9nLnRyYWNlKFwiUmVzdW1lIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRPbkZpcnN0Q2xpY2soKTogdm9pZCB7XG4gICAgaWYgKCFBVURJT19DT05URVhUKSB7XG4gICAgICB0cnkge1xuICAgICAgICBBVURJT19DT05URVhUID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICBBVURJT19DT05URVhULnJlc3VtZSgpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgR3V0ZUxvZy50cmFjZShcIlJlc3VtZSBhdWRpbyBjb250ZXh0IGZhaWxlZFwiKTtcbiAgICAgICAgICBHdXRlTG9nLnRyYWNlKGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgR3V0ZUxvZy50cmFjZShcIlJlc3VtZSBhdWRpbyBjb250ZXh0IGZhaWxlZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRyeUxvYWQoKTtcbiAgfVxuXG4gIHBsYXkodm9sdW1lOiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlybUF1ZGlvQ29udGV4dCgpO1xuICAgIHRoaXMudm9sdW1lID0gdm9sdW1lO1xuXG4gICAgaWYgKCF0aGlzLmJ1ZmZlcikge1xuICAgICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDKSB7XG4gICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID0gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDICE9PSB0aGlzKSB7XG4gICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnN0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID0gdGhpcztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZG9uJ3QgcGxheSBzb3VuZCBlZmZlY3RzIGluIHRoZSBiYWNrZ3JvdW5kIG9yIHRoZXkgYWxsXG4gICAgICAvLyBnZXQgc3RhY2tlZCB1cFxuICAgICAgaWYgKGRvY3VtZW50LmhpZGRlbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubXVzaWMgJiYgIWlzTXVzaWNPbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICghdGhpcy5tdXNpYyAmJiAhaXNTb3VuZE9uKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNvdXJjZSA9IEFVRElPX0NPTlRFWFQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgdGhpcy5zb3VyY2UuYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgdGhpcy5nYWluID0gQVVESU9fQ09OVEVYVC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLmdhaW4pO1xuICAgIHRoaXMuZ2Fpbi5jb25uZWN0KEFVRElPX0NPTlRFWFQuZGVzdGluYXRpb24pO1xuXG4gICAgdGhpcy5sb29wZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5tdXNpYyB8fCBsb29wKSB7XG4gICAgICB0aGlzLmdhaW4uZ2Fpbi52YWx1ZSA9IDA7XG4gICAgICB0aGlzLnNvdXJjZS5sb29wID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9vcGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnNvdXJjZS5zdGFydCgwKTtcblxuICAgIGlmICh0aGlzLm11c2ljIHx8IGxvb3ApIHtcbiAgICAgIHRoaXMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHZvbHVtZSAqIChsb29wID8gU291bmRJbXBsLnNvdW5kVm9sdW1lIDogU291bmRJbXBsLm11c2ljVm9sdW1lKSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSArIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdhaW4uZ2Fpbi52YWx1ZSA9IHZvbHVtZSAqIFNvdW5kSW1wbC5zb3VuZFZvbHVtZTtcbiAgICB9XG5cbiAgICBpZiAobG9vcCkge1xuICAgICAgU291bmRJbXBsLkNVUlJFTlRfTE9PUFMucHVzaCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzdG9wKHJlbW92ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAgIGlmICh0aGlzLmxvb3BlZCkge1xuICAgICAgICB0aGlzLmdhaW4uZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSgwLCBBVURJT19DT05URVhULmN1cnJlbnRUaW1lICsgMyk7XG4gICAgICAgIGNvbnN0IHRlbXBTb3VyY2U6IEF1ZGlvQnVmZmVyU291cmNlTm9kZSA9IHRoaXMuc291cmNlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0ZW1wU291cmNlLnN0b3AoKTtcbiAgICAgICAgfSwgNDAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNvdXJjZS5zdG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc291cmNlID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocmVtb3ZlKSB7XG4gICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gU291bmRJbXBsLkNVUlJFTlRfTE9PUFMuZmluZEluZGV4KGEgPT4gYSA9PT0gdGhpcyk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9MT09QUy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQml0bWFwLCBHcmFwaGljcywgR3V0ZUxvZyB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgc2hvdWxkUHJlc2NhbGVUaWxlc2V0cywgc2hvdWxkVXNlWGJyIH0gZnJvbSBcIi4uL0d1dGVcIjtcbmltcG9ydCB7IFRpbGVzZXQgfSBmcm9tIFwiLi4vVGlsZXNldFwiO1xuaW1wb3J0IHsgR3JhcGhpY3NJbXBsIH0gZnJvbSBcIi4vR3JhcGhpY3NJbXBsXCI7XG5pbXBvcnQgeyBQYWxldHRlIH0gZnJvbSBcIi4vUGFsZXR0ZVwiO1xuXG5pbXBvcnQgeyB4YnIyeCwgeGJyM3gsIHhicjR4IH0gZnJvbSAneGJyLWpzJztcblxuY2xhc3MgVGlsZSBpbXBsZW1lbnRzIEJpdG1hcCB7XG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbG9hZGVkOiBib29sZWFuO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2NhbGU6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nID0gXCJ0aWxlXCI7XG4gIGNhY2hlZDogUmVjb3JkPG51bWJlciwgSFRNTENhbnZhc0VsZW1lbnQ+ID0ge307XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MSW1hZ2VFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpIHtcbiAgICB0aGlzLmltYWdlID0gY2FudmFzO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGN0eCA9IChncmFwaGljcyBhcyBHcmFwaGljc0ltcGwpLmN0eDtcblxuICAgIGlmICghc2hvdWxkUHJlc2NhbGVUaWxlc2V0cygpICYmIHNob3VsZFVzZVhicigpICYmICh0aGlzLnNjYWxlID09PSAyIHx8IHRoaXMuc2NhbGUgPT09IDMpKSB7XG4gICAgICBpZiAoIXRoaXMuY2FjaGVkW3RoaXMuc2NhbGVdKSB7XG4gICAgICAgIHRoaXMuY2FjaGVkW3RoaXMuc2NhbGVdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jYWNoZWRbdGhpcy5zY2FsZV0ud2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICB0aGlzLmNhY2hlZFt0aGlzLnNjYWxlXS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jYWNoZWRbdGhpcy5zY2FsZV0uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHghLmRyYXdJbWFnZSh0aGlzLmltYWdlISwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZURhdGEgPSBjdHghLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUGl4ZWxWaWV3ID0gbmV3IFVpbnQzMkFycmF5KG9yaWdpbmFsSW1hZ2VEYXRhLmRhdGEuYnVmZmVyKTtcbiAgICAgICAgY29uc3Qgc2NhbGVkUGl4ZWxWaWV3ID0gdGhpcy5zY2FsZSA9PT0gMiA/IHhicjJ4KG9yaWdpbmFsUGl4ZWxWaWV3LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkgOiB4YnIzeChvcmlnaW5hbFBpeGVsVmlldywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIGNvbnN0IGRlc3RXaWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLnNjYWxlO1xuICAgICAgICBjb25zdCBkZXN0SGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlO1xuICAgICAgICB0aGlzLmNhY2hlZFt0aGlzLnNjYWxlXS53aWR0aCA9IGRlc3RXaWR0aDtcbiAgICAgICAgdGhpcy5jYWNoZWRbdGhpcy5zY2FsZV0uaGVpZ2h0ID0gZGVzdEhlaWdodDtcbiAgICAgICAgY29uc3Qgc2NhbGVkSW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShuZXcgVWludDhDbGFtcGVkQXJyYXkoc2NhbGVkUGl4ZWxWaWV3LmJ1ZmZlciksIHRoaXMuY2FjaGVkW3RoaXMuc2NhbGVdLndpZHRoLCB0aGlzLmNhY2hlZFt0aGlzLnNjYWxlXS5oZWlnaHQpO1xuXG4gICAgICAgIGN0eCEucHV0SW1hZ2VEYXRhKHNjYWxlZEltYWdlRGF0YSwgMCwgMCk7XG4gICAgICB9XG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FjaGVkW3RoaXMuc2NhbGVdLCB4LCB5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCAtIDAuMSwgdGhpcy5oZWlnaHQgLSAwLjEsIHgsIHksIHRoaXMud2lkdGggKiB0aGlzLnNjYWxlLCB0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGUpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdTY2FsZWQoZ3JhcGhpY3M6IEdyYXBoaWNzLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjdHggPSAoZ3JhcGhpY3MgYXMgR3JhcGhpY3NJbXBsKS5jdHg7XG4gICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbihNYXRoLmZsb29yKHdpZHRoIC8gdGhpcy53aWR0aCksIE1hdGguZmxvb3IoaGVpZ2h0IC8gdGhpcy5oZWlnaHQpKTtcblxuICAgIGlmICghc2hvdWxkUHJlc2NhbGVUaWxlc2V0cygpICYmIHNob3VsZFVzZVhicigpICYmIChzY2FsZSA9PT0gMiB8fCBzY2FsZSA9PT0gMykpIHtcbiAgICAgIGlmICghdGhpcy5jYWNoZWRbc2NhbGVdKSB7XG4gICAgICAgIHRoaXMuY2FjaGVkW3NjYWxlXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY2FjaGVkW3NjYWxlXS53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIHRoaXMuY2FjaGVkW3NjYWxlXS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jYWNoZWRbc2NhbGVdLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY3R4IS5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VEYXRhID0gY3R4IS5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFBpeGVsVmlldyA9IG5ldyBVaW50MzJBcnJheShvcmlnaW5hbEltYWdlRGF0YS5kYXRhLmJ1ZmZlcik7XG4gICAgICAgIGNvbnN0IHNjYWxlZFBpeGVsVmlldyA9IHNjYWxlID09PSAyID8geGJyMngob3JpZ2luYWxQaXhlbFZpZXcsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSA6IHhicjN4KG9yaWdpbmFsUGl4ZWxWaWV3LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgY29uc3QgZGVzdFdpZHRoID0gdGhpcy53aWR0aCAqIHNjYWxlO1xuICAgICAgICBjb25zdCBkZXN0SGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiBzY2FsZTtcbiAgICAgICAgdGhpcy5jYWNoZWRbc2NhbGVdLndpZHRoID0gZGVzdFdpZHRoO1xuICAgICAgICB0aGlzLmNhY2hlZFtzY2FsZV0uaGVpZ2h0ID0gZGVzdEhlaWdodDtcbiAgICAgICAgY29uc3Qgc2NhbGVkSW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShuZXcgVWludDhDbGFtcGVkQXJyYXkoc2NhbGVkUGl4ZWxWaWV3LmJ1ZmZlciksIHRoaXMuY2FjaGVkW3NjYWxlXS53aWR0aCwgdGhpcy5jYWNoZWRbc2NhbGVdLmhlaWdodCk7XG5cbiAgICAgICAgY3R4IS5wdXRJbWFnZURhdGEoc2NhbGVkSW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgIH1cbiAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYWNoZWRbc2NhbGVdLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRPbkZpcnN0Q2xpY2soKTogdm9pZCB7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRpbGVzZXRJbXBsIGltcGxlbWVudHMgVGlsZXNldCB7XG4gIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICB0aWxlV2lkdGg6IG51bWJlcjtcbiAgdGlsZUhlaWdodDogbnVtYmVyO1xuICBvcmlnaW5hbFRpbGVXaWR0aDogbnVtYmVyO1xuICBvcmlnaW5hbFRpbGVIZWlnaHQ6IG51bWJlcjtcbiAgaW1hZ2U6IGFueSB8IG51bGw7XG4gIGJpdG1hcHM6IFRpbGVbXSA9IFtdO1xuICBzY2FubGluZTogbnVtYmVyID0gMDtcbiAgdGlsZUNvdW50OiBudW1iZXIgPSAwO1xuICB0aW50czogUmVjb3JkPHN0cmluZywgSFRNTEltYWdlRWxlbWVudD4gPSB7fTtcbiAgdGludFRpbGVzOiBSZWNvcmQ8c3RyaW5nLCBCaXRtYXBbXT4gPSB7fTtcbiAgc2NhbGU6IG51bWJlcjtcbiAgb25Mb2FkZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XG4gIG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZywgZGF0YVVybExvYWRlcjogUHJvbWlzZTxCbG9iPiB8IHVuZGVmaW5lZCwgdGlsZVdpZHRoOiBudW1iZXIsIHRpbGVIZWlnaHQ6IG51bWJlciwgc2NhbGU6IG51bWJlciA9IDEsIHBhbDogUGFsZXR0ZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCkge1xuICAgIHRoaXMudGlsZVdpZHRoID0gdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCA9IHRpbGVXaWR0aDtcbiAgICB0aGlzLnRpbGVIZWlnaHQgPSB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCA9IHRpbGVIZWlnaHQ7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgIHRoaXMubmFtZSA9IHVybDtcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICB0aGlzLmltYWdlLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBHdXRlTG9nLmxvZyhcIkVycm9yIGxvYWRpbmc6IFwiICsgdXJsKTtcbiAgICB9XG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZiAoc2hvdWxkUHJlc2NhbGVUaWxlc2V0cygpICYmIHNjYWxlICE9PSAxKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuICAgICAgICBpZiAoc2hvdWxkVXNlWGJyKCkpIHtcbiAgICAgICAgICBjb25zdCBjdHggPSBzY2FsZWRJbWFnZS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgY3R4IS5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIDAsIDApO1xuXG4gICAgICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZURhdGEgPSBjdHghLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmltYWdlIS53aWR0aCwgdGhpcy5pbWFnZSEuaGVpZ2h0KTtcbiAgICAgICAgICBjb25zdCBvcmlnaW5hbFBpeGVsVmlldyA9IG5ldyBVaW50MzJBcnJheShvcmlnaW5hbEltYWdlRGF0YS5kYXRhLmJ1ZmZlcik7XG4gICAgICAgICAgY29uc3Qgc2NhbGVkUGl4ZWxWaWV3ID0gc2NhbGUgPT09IDIgPyB4YnIyeChvcmlnaW5hbFBpeGVsVmlldywgdGhpcy5pbWFnZSEud2lkdGgsIHRoaXMuaW1hZ2UhLmhlaWdodCkgOiB4YnIzeChvcmlnaW5hbFBpeGVsVmlldywgdGhpcy5pbWFnZSEud2lkdGgsIHRoaXMuaW1hZ2UhLmhlaWdodCk7XG5cbiAgICAgICAgICBzY2FsZWRJbWFnZS53aWR0aCA9IHRoaXMuaW1hZ2UhLndpZHRoICogc2NhbGU7XG4gICAgICAgICAgc2NhbGVkSW1hZ2UuaGVpZ2h0ID0gdGhpcy5pbWFnZSEuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgY29uc3Qgc2NhbGVkSW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShuZXcgVWludDhDbGFtcGVkQXJyYXkoc2NhbGVkUGl4ZWxWaWV3LmJ1ZmZlciksIHNjYWxlZEltYWdlLndpZHRoLCBzY2FsZWRJbWFnZS5oZWlnaHQpO1xuXG4gICAgICAgICAgY3R4IS5wdXRJbWFnZURhdGEoc2NhbGVkSW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY2FsZWRJbWFnZS53aWR0aCA9IHRoaXMuaW1hZ2UhLndpZHRoICogc2NhbGU7XG4gICAgICAgICAgc2NhbGVkSW1hZ2UuaGVpZ2h0ID0gdGhpcy5pbWFnZSEuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgY29uc3QgY3R4ID0gc2NhbGVkSW1hZ2UuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgIGN0eCEuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgKDxhbnk+Y3R4ISkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgY3R4Py5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIDAsIDAsIHNjYWxlZEltYWdlLndpZHRoLCBzY2FsZWRJbWFnZS5oZWlnaHQpO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmltYWdlID0gc2NhbGVkSW1hZ2U7XG4gICAgICAgIHRoaXMudGlsZVdpZHRoICo9IHNjYWxlO1xuICAgICAgICB0aGlzLnRpbGVIZWlnaHQgKj0gc2NhbGU7XG4gICAgICAgIHRoaXMub3JpZ2luYWxUaWxlV2lkdGggKj0gc2NhbGU7XG4gICAgICAgIHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0ICo9IHNjYWxlO1xuICAgICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgICAgc2NhbGUgPSAxO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjYW5saW5lID0gTWF0aC5mbG9vcih0aGlzLmltYWdlIS53aWR0aCAvIHRoaXMudGlsZVdpZHRoKTtcbiAgICAgIGNvbnN0IGRlcHRoOiBudW1iZXIgPSBNYXRoLmZsb29yKHRoaXMuaW1hZ2UhLmhlaWdodCAvIHRoaXMudGlsZUhlaWdodCk7XG4gICAgICB0aGlzLnRpbGVDb3VudCA9IGRlcHRoICogdGhpcy5zY2FubGluZTtcblxuICAgICAgaWYgKHBhbCkge1xuICAgICAgICBwYWwuYWRqdXN0SW1hZ2UodGhpcy5pbWFnZSEpLnRoZW4oKGltYWdlKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuXG4gICAgICAgICAgLy8gY3V0IHRoZSBpbWFnZSBpbnRvIHBpZWNlc1xuICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgZGVwdGg7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnNjYW5saW5lOyB4KyspIHtcbiAgICAgICAgICAgICAgdGhpcy5iaXRtYXBzLnB1c2gobmV3IFRpbGUodGhpcy5pbWFnZSEsIHggKiB0aGlzLnRpbGVXaWR0aCwgeSAqIHRoaXMudGlsZUhlaWdodCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCwgc2NhbGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy50aWxlV2lkdGggKj0gc2NhbGU7XG4gICAgICAgICAgdGhpcy50aWxlSGVpZ2h0ICo9IHNjYWxlO1xuXG4gICAgICAgICAgdGhpcy5vbkxvYWRlZCgpO1xuICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGN1dCB0aGUgaW1hZ2UgaW50byBwaWVjZXNcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBkZXB0aDsgeSsrKSB7XG4gICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnNjYW5saW5lOyB4KyspIHtcbiAgICAgICAgICAgIHRoaXMuYml0bWFwcy5wdXNoKG5ldyBUaWxlKHRoaXMuaW1hZ2UhLCB4ICogdGhpcy50aWxlV2lkdGgsIHkgKiB0aGlzLnRpbGVIZWlnaHQsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQsIHNjYWxlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGlsZVdpZHRoICo9IHNjYWxlO1xuICAgICAgICB0aGlzLnRpbGVIZWlnaHQgKj0gc2NhbGU7XG5cbiAgICAgICAgdGhpcy5vbkxvYWRlZCgpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkYXRhVXJsTG9hZGVyKSB7XG4gICAgICBkYXRhVXJsTG9hZGVyLnRoZW4oKGJsb2I6IEJsb2IpID0+IHtcbiAgICAgICAgdmFyIHVybENyZWF0b3IgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XG4gICAgICAgIHRoaXMuaW1hZ2UhLnNyYyA9IHVybENyZWF0b3IuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbWFnZS5zcmMgPSB1cmw7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGlsZXNBY3Jvc3MoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zY2FubGluZTtcbiAgfVxuXG4gIGdldFRpbGVXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRpbGVXaWR0aDtcbiAgfVxuXG4gIGdldFRpbGVIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50aWxlSGVpZ2h0O1xuICB9XG5cbiAgZ2V0VGlsZUNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGlsZUNvdW50O1xuICB9XG5cbiAgaW5pdE9uRmlyc3RDbGljaygpOiB2b2lkIHtcbiAgfVxuXG4gIGdldFRpbGUodGlsZTogbnVtYmVyKTogQml0bWFwIHtcbiAgICByZXR1cm4gdGhpcy5iaXRtYXBzW3RpbGVdO1xuICB9XG5cbiAgZ2V0U2hhZGVkVGlsZSh0aWxlOiBudW1iZXIsIHRpbnROYW1lOiBzdHJpbmcsIHNoYWRlOiBudW1iZXIpOiBCaXRtYXAge1xuICAgIGxldCB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXTtcbiAgICBpZiAoIXRpbGVzKSB7XG4gICAgICB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCB0aWxlUmVjb3JkID0gdGlsZXNbdGlsZV07XG4gICAgaWYgKCF0aWxlUmVjb3JkKSB7XG4gICAgICBjb25zdCB4OiBudW1iZXIgPSB0aWxlICUgdGhpcy5zY2FubGluZTtcbiAgICAgIGNvbnN0IHk6IG51bWJlciA9IE1hdGguZmxvb3IodGlsZSAvIHRoaXMuc2NhbmxpbmUpO1xuICAgICAgbGV0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gdGhpcy50aW50c1t0aW50TmFtZV07XG4gICAgICBpZiAoIWltYWdlKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmltYWdlIS53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UhLmhlaWdodDtcbiAgICAgICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIDAsIDApO1xuICAgICAgICAgIGNvbnN0IGlkOiBJbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZC5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgICAgICBpZC5kYXRhW2ldICo9IHNoYWRlO1xuICAgICAgICAgICAgaWQuZGF0YVtpICsgMV0gKj0gc2hhZGU7XG4gICAgICAgICAgICBpZC5kYXRhW2kgKyAyXSAqPSBzaGFkZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpZCwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICB0aGlzLnRpbnRzW3RpbnROYW1lXSA9IGltYWdlO1xuICAgICAgfVxuXG4gICAgICB0aWxlUmVjb3JkID0gdGlsZXNbdGlsZV0gPSBuZXcgVGlsZShpbWFnZSwgeCAqIHRoaXMub3JpZ2luYWxUaWxlV2lkdGgsIHkgKiB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCwgdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCwgdGhpcy5vcmlnaW5hbFRpbGVIZWlnaHQsIHRoaXMuc2NhbGUpXG4gICAgfVxuICAgIHJldHVybiB0aWxlUmVjb3JkO1xuICB9XG5cbiAgZ2V0VGludGVkVGlsZSh0aWxlOiBudW1iZXIsIHRpbnROYW1lOiBzdHJpbmcsIHRpbnQ6IG51bWJlcltdKTogQml0bWFwIHtcbiAgICBsZXQgdGlsZXMgPSB0aGlzLnRpbnRUaWxlc1t0aW50TmFtZV07XG4gICAgaWYgKCF0aWxlcykge1xuICAgICAgdGlsZXMgPSB0aGlzLnRpbnRUaWxlc1t0aW50TmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgdGlsZVJlY29yZCA9IHRpbGVzW3RpbGVdO1xuICAgIGlmICghdGlsZVJlY29yZCkge1xuICAgICAgY29uc3QgeDogbnVtYmVyID0gdGlsZSAlIHRoaXMuc2NhbmxpbmU7XG4gICAgICBjb25zdCB5OiBudW1iZXIgPSBNYXRoLmZsb29yKHRpbGUgLyB0aGlzLnNjYW5saW5lKTtcbiAgICAgIGxldCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMudGludHNbdGludE5hbWVdO1xuICAgICAgaWYgKCFpbWFnZSkge1xuICAgICAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5pbWFnZSEud2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmltYWdlIS5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UhLCAwLCAwKTtcbiAgICAgICAgICBjb25zdCBpZDogSW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWQuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICAgICAgLy8gbGVhdmUgYmxhY2sgYWxvbmVcbiAgICAgICAgICAgIGNvbnN0IGF2ZzogbnVtYmVyID0gKGlkLmRhdGFbaV0gKyBpZC5kYXRhW2kgKyAxXSArIGlkLmRhdGFbaSArIDJdKSAvIDM7XG4gICAgICAgICAgICBpZC5kYXRhW2ldID0gTWF0aC5mbG9vcihhdmcgKiB0aW50WzBdKTtcbiAgICAgICAgICAgIGlkLmRhdGFbaSArIDFdID0gTWF0aC5mbG9vcihhdmcgKiB0aW50WzFdKTtcbiAgICAgICAgICAgIGlkLmRhdGFbaSArIDJdID0gTWF0aC5mbG9vcihhdmcgKiB0aW50WzJdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpZCwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICB0aGlzLnRpbnRzW3RpbnROYW1lXSA9IGltYWdlO1xuICAgICAgfVxuXG4gICAgICB0aWxlUmVjb3JkID0gdGlsZXNbdGlsZV0gPSBuZXcgVGlsZShpbWFnZSwgeCAqIHRoaXMub3JpZ2luYWxUaWxlV2lkdGgsIHkgKiB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCwgdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCwgdGhpcy5vcmlnaW5hbFRpbGVIZWlnaHQsIHRoaXMuc2NhbGUpXG4gICAgfVxuICAgIHJldHVybiB0aWxlUmVjb3JkO1xuICB9XG5cbiAgbW9kaWZ5KG1vZGlmaWNhdGlvbjogKGltYWdlRGF0YTogSW1hZ2VEYXRhKSA9PiB2b2lkKTogVGlsZXNldCB7XG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gdGhpcy5pbWFnZSEud2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UhLmhlaWdodDtcbiAgICBjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGlmIChjdHgpIHtcbiAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIDAsIDApO1xuICAgICAgY29uc3QgaWQ6IEltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIG1vZGlmaWNhdGlvbihpZCk7XG4gICAgICBjdHgucHV0SW1hZ2VEYXRhKGlkLCAwLCAwKTtcbiAgICB9XG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aGlzLmJpdG1hcHMpIHtcbiAgICAgIHRpbGUuaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0QmxvY2tDb2xvclRpbGUodGlsZTogbnVtYmVyLCB0aW50TmFtZTogc3RyaW5nLCBjb2w6IG51bWJlcltdKTogQml0bWFwIHtcbiAgICBsZXQgdGlsZXMgPSB0aGlzLnRpbnRUaWxlc1t0aW50TmFtZV07XG4gICAgaWYgKCF0aWxlcykge1xuICAgICAgdGlsZXMgPSB0aGlzLnRpbnRUaWxlc1t0aW50TmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgdGlsZVJlY29yZCA9IHRpbGVzW3RpbGVdO1xuICAgIGlmICghdGlsZVJlY29yZCkge1xuICAgICAgY29uc3QgeDogbnVtYmVyID0gdGlsZSAlIHRoaXMuc2NhbmxpbmU7XG4gICAgICBjb25zdCB5OiBudW1iZXIgPSBNYXRoLmZsb29yKHRpbGUgLyB0aGlzLnNjYW5saW5lKTtcbiAgICAgIGxldCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMudGludHNbdGludE5hbWVdO1xuICAgICAgaWYgKCFpbWFnZSkge1xuICAgICAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5pbWFnZSEud2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmltYWdlIS5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UhLCAwLCAwKTtcbiAgICAgICAgICBjb25zdCBpZDogSW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWQuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICAgICAgaWQuZGF0YVtpXSA9IE1hdGguZmxvb3IoMjU1ICogY29sWzBdKTtcbiAgICAgICAgICAgIGlkLmRhdGFbaSArIDFdID0gTWF0aC5mbG9vcigyNTUgKiBjb2xbMV0pO1xuICAgICAgICAgICAgaWQuZGF0YVtpICsgMl0gPSBNYXRoLmZsb29yKDI1NSAqIGNvbFsyXSk7XG4gICAgICAgICAgICBpZC5kYXRhW2kgKyAzXSA9IE1hdGguZmxvb3IoaWQuZGF0YVtpICsgM10gKiBjb2xbM10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKGlkLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgIHRoaXMudGludHNbdGludE5hbWVdID0gaW1hZ2U7XG4gICAgICB9XG5cbiAgICAgIHRpbGVSZWNvcmQgPSB0aWxlc1t0aWxlXSA9IG5ldyBUaWxlKGltYWdlLCB4ICogdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCwgeSAqIHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0LCB0aGlzLm9yaWdpbmFsVGlsZVdpZHRoLCB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCwgdGhpcy5zY2FsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRpbGVSZWNvcmQ7XG4gIH1cbn0iLCJleHBvcnQge3N0YXJ0R2FtZSwgaXNNdXNpY09uLCBpc1NvdW5kT24sIHNldE11c2ljT24sIHNldFNvdW5kT24sIHNldFByZXNjYWxlVGlsZXNldHMsIFJlbmRlcmVyIH0gZnJvbSBcIi4vR3V0ZVwiO1xuZXhwb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi9HYW1lQ29udGV4dFwiO1xuZXhwb3J0IHsgR3JhcGhpY3MsIFdISVRFLCBCTEFDSywgR1JFRU4sIFJFRCwgQkxVRSwgT2Zmc2NyZWVuIH0gZnJvbSBcIi4vR3JhcGhpY3NcIjtcbmV4cG9ydCB7IGdldE1heFRleHR1cmVTaXplIH0gZnJvbSBcIi4vb3BlbmdsL09wZW5HTEdyYXBoaWNzSW1wbFwiO1xuZXhwb3J0IHsgR2FtZSB9IGZyb20gXCIuL0dhbWVcIjtcbmV4cG9ydCB7IEd1dGVMb2cgfSBmcm9tIFwiLi9Mb2dcIjtcbmV4cG9ydCB7IEJpdG1hcCB9IGZyb20gXCIuL0JpdG1hcFwiO1xuZXhwb3J0IHsgRm9udCB9IGZyb20gXCIuL0ZvbnRcIjtcbmV4cG9ydCB7IFNvdW5kIH0gZnJvbSBcIi4vU291bmRcIjtcbmV4cG9ydCB7IFRpbGVzZXQgfSBmcm9tIFwiLi9UaWxlc2V0XCI7XG5leHBvcnQgeyBLZXlzIH0gZnJvbSBcIi4vS2V5c1wiO1xuZXhwb3J0IHsgQVN0YXJQYXRoRmluZGVyIH0gZnJvbSBcIi4vcGF0aC9BU3RhclBhdGhGaW5kZXJcIjtcbmV4cG9ydCB7IFBhdGhGaW5kZXJNYXAgfSBmcm9tIFwiLi9wYXRoL1BhdGhGaW5kZXJNYXBcIjtcbmV4cG9ydCB7IFBhdGggfSBmcm9tIFwiLi9wYXRoL1BhdGhcIjtcbmV4cG9ydCB7IFBhdGhNb3ZlciB9IGZyb20gXCIuL3BhdGgvUGF0aE1vdmVyXCI7XG5leHBvcnQgeyBTdGVwIH0gZnJvbSBcIi4vcGF0aC9TdGVwXCI7XG5leHBvcnQgeyBMRFRLV29ybGQsIExEVEtMYXllckNvbXByZXNzaW9uIH0gZnJvbSBcIi4vdGlsZW1hcHMvTERUS1dvcmxkXCI7XG5leHBvcnQgeyBNYXBXb3JsZCB9IGZyb20gXCIuL3RpbGVtYXBzL01hcFdvcmxkXCI7XG5leHBvcnQgeyBNYXBMZXZlbCB9IGZyb20gXCIuL3RpbGVtYXBzL01hcExldmVsXCI7XG5leHBvcnQgeyBNYXBMYXllciB9IGZyb20gXCIuL3RpbGVtYXBzL01hcExheWVyXCI7XG5leHBvcnQgeyBNYXBFbnRpdHkgfSBmcm9tIFwiLi90aWxlbWFwcy9NYXBFbnRpdHlcIjtcbmV4cG9ydCB7IFNvdW5kU2NhcGUsIFNvdW5kRWFzaW5nIH0gZnJvbSBcIi4vU291bmRTY2FwZVwiXG4iLCJpbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCIuLi9HcmFwaGljc1wiO1xuaW1wb3J0IHsgUGFsZXR0ZSB9IGZyb20gXCIuLi9pbXBsL1BhbGV0dGVcIjtcbmltcG9ydCB7IE9wZW5HTEdyYXBoaWNzSW1wbCB9IGZyb20gXCIuL09wZW5HTEdyYXBoaWNzSW1wbFwiO1xuaW1wb3J0IHsgSU9wZW5HTEJpdG1hcCB9IGZyb20gXCIuL09wZW5HTEJpdG1hcFwiO1xuaW1wb3J0IHsgR3V0ZUxvZyB9IGZyb20gXCIuLi9Mb2dcIjtcblxuXG5leHBvcnQgY2xhc3MgT3BlbkdMQml0bWFwIGltcGxlbWVudHMgSU9wZW5HTEJpdG1hcCB7XG4gIHdpZHRoOiBudW1iZXIgPSAwO1xuICBoZWlnaHQ6IG51bWJlciA9IDA7XG4gIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBuYW1lOiBzdHJpbmc7XG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICB0ZXhYOiBudW1iZXIgPSAwO1xuICB0ZXhZOiBudW1iZXIgPSAwO1xuICB0ZXhJbmRleDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihncmFwaGljczogT3BlbkdMR3JhcGhpY3NJbXBsLCB1cmw6IHN0cmluZywgZGF0YVVybExvYWRlcjogUHJvbWlzZTxzdHJpbmc+IHwgdW5kZWZpbmVkLCBwYWw6IFBhbGV0dGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQpIHtcbiAgICBncmFwaGljcy5yZWdpc3RlckltYWdlKHRoaXMpO1xuXG4gICAgdGhpcy5uYW1lID0gdXJsO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBHdXRlTG9nLmxvZyhcIkVycm9yIGxvYWRpbmc6IFwiICsgdXJsKTtcbiAgICB9O1xuICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuaW1hZ2Uud2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaW1hZ2UuaGVpZ2h0O1xuXG4gICAgICBpZiAocGFsKSB7XG4gICAgICAgIHBhbC5hZGp1c3RJbWFnZSh0aGlzLmltYWdlKS50aGVuKChpbWFnZTogSFRNTEltYWdlRWxlbWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgZ3JhcGhpY3MubmV3UmVzb3VyY2VMb2FkZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIGdyYXBoaWNzLm5ld1Jlc291cmNlTG9hZGVkKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkYXRhVXJsTG9hZGVyKSB7XG4gICAgICBkYXRhVXJsTG9hZGVyLnRoZW4oKGJhc2U2NDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gXCJkYXRhOlwiICsgdXJsLnN1YnN0cmluZyh1cmwubGVuZ3RoIC0gMykgKyBcIjtiYXNlNjQsXCIgKyBiYXNlNjQ7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbWFnZS5zcmMgPSB1cmw7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZyA9IChncmFwaGljcyBhcyBPcGVuR0xHcmFwaGljc0ltcGwpO1xuICAgIGcuX2RyYXdCaXRtYXAodGhpcywgeCwgeSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICB9XG5cbiAgZHJhd1NjYWxlZChncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGcgPSAoZ3JhcGhpY3MgYXMgT3BlbkdMR3JhcGhpY3NJbXBsKTtcbiAgICBnLl9kcmF3Qml0bWFwKHRoaXMsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgaW5pdE9uRmlyc3RDbGljaygpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBCaXRtYXAgfSBmcm9tIFwiLi4vQml0bWFwXCI7XG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCIuLi9HcmFwaGljc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElPcGVuR0xCaXRtYXAge1xuICAgIHRleFg6IG51bWJlcjtcbiAgICB0ZXhZOiBudW1iZXI7XG4gICAgdGV4SW5kZXg6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGltYWdlPzogSFRNTEltYWdlRWxlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIE51bGxCaXRtYXAgaW1wbGVtZW50cyBCaXRtYXAge1xuICAgIHdpZHRoOiBudW1iZXIgPSAwO1xuICAgIGhlaWdodDogbnVtYmVyID0gMDtcbiAgICBsb2FkZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIG5hbWU6IHN0cmluZyA9IFwibnVsbFwiO1xuXG4gICAgZHJhdyhncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgfVxuXG4gICAgZHJhd1NjYWxlZChncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIH1cblxuICAgIGluaXRPbkZpcnN0Q2xpY2soKTogdm9pZCB7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgQml0bWFwIH0gZnJvbSBcIi4uL0JpdG1hcFwiO1xuaW1wb3J0IHsgRm9udCB9IGZyb20gXCIuLi9Gb250XCI7XG5pbXBvcnQgeyBHcmFwaGljcywgT2Zmc2NyZWVuIH0gZnJvbSBcIi4uL0dyYXBoaWNzXCI7XG5pbXBvcnQgeyBHdXRlTG9nIH0gZnJvbSBcIi4uL0xvZ1wiO1xuaW1wb3J0IHsgSU9wZW5HTEJpdG1hcCwgTnVsbEJpdG1hcCB9IGZyb20gXCIuL09wZW5HTEJpdG1hcFwiO1xuaW1wb3J0IHsgT3BlbkdMQml0bWFwIH0gZnJvbSBcIi4vT3BlbkdMQml0bWFwLjFcIjtcbmltcG9ydCB7IE9wZW5HbE9mZnNjcmVlbiB9IGZyb20gXCIuL09wZW5HTE9mZnNjcmVlblwiO1xuaW1wb3J0IHsgUmVuZGVyaW5nU3RhdGUgfSBmcm9tIFwiLi9SZW5kZXJpbmdTdGF0ZVwiO1xuaW1wb3J0IHBvdHBhY2sgZnJvbSBcInBvdHBhY2tcIlxuXG5mdW5jdGlvbiBwYXJzZUNvbG9yKGlucHV0OiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgbGV0IG1tO1xuICAgIGxldCBtO1xuICAgIC8vIE9idmlvdXNseSwgdGhlIG51bWVyaWMgdmFsdWVzIHdpbGwgYmUgZWFzaWVyIHRvIHBhcnNlIHRoYW4gbmFtZXMuU28gd2UgZG8gdGhvc2UgZmlyc3QuXG4gICAgbW0gPSBpbnB1dC5tYXRjaCgvXiM/KFswLTlhLWZdezN9KSQvaSk7XG4gICAgaWYgKG1tKSB7XG4gICAgICAgIG0gPSBtbVsxXTtcbiAgICAgICAgLy8gaW4gdGhyZWUtY2hhcmFjdGVyIGZvcm1hdCwgZWFjaCB2YWx1ZSBpcyBtdWx0aXBsaWVkIGJ5IDB4MTEgdG8gZ2l2ZSBhblxuICAgICAgICAvLyBldmVuIHNjYWxlIGZyb20gMHgwMCB0byAweGZmXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBwYXJzZUludChtLmNoYXJBdCgwKSwgMTYpICogMHgxMSxcbiAgICAgICAgICAgIHBhcnNlSW50KG0uY2hhckF0KDEpLCAxNikgKiAweDExLFxuICAgICAgICAgICAgcGFyc2VJbnQobS5jaGFyQXQoMiksIDE2KSAqIDB4MTEsXG4gICAgICAgICAgICAxXG4gICAgICAgIF07XG4gICAgfVxuICAgIC8vIFRoYXQncyBvbmUuIE5vdyBmb3IgdGhlIGZ1bGwgc2l4LWRpZ2l0IGZvcm1hdDogXG4gICAgbW0gPSBpbnB1dC5tYXRjaCgvXiM/KFswLTlhLWZdezZ9KSQvaSk7XG4gICAgaWYgKG1tKSB7XG4gICAgICAgIG0gPSBtbVsxXTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHBhcnNlSW50KG0uc3Vic3RyKDAsIDIpLCAxNiksXG4gICAgICAgICAgICBwYXJzZUludChtLnN1YnN0cigyLCAyKSwgMTYpLFxuICAgICAgICAgICAgcGFyc2VJbnQobS5zdWJzdHIoNCwgMiksIDE2KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLy8gQW5kIG5vdyBmb3IgcmdiKCkgZm9ybWF0OlxuICAgIG1tID0gaW5wdXQubWF0Y2goL15yZ2JhXFxzKlxcKFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooWystXT8oWzAtOV0qWy5dKT9bMC05XSspXFxzKlxcKSQvaSk7XG4gICAgaWYgKG1tKSB7XG4gICAgICAgIHJldHVybiBbTnVtYmVyLnBhcnNlSW50KG1tWzFdKSwgTnVtYmVyLnBhcnNlSW50KG1tWzJdKSwgTnVtYmVyLnBhcnNlSW50KG1tWzNdKSwgTnVtYmVyLnBhcnNlRmxvYXQobW1bNF0pXTtcbiAgICB9XG4gICAgbW0gPSBpbnB1dC5tYXRjaCgvXnJnYlxccypcXChcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKlxcKSQvaSk7XG4gICAgaWYgKG1tKSB7XG4gICAgICAgIHJldHVybiBbTnVtYmVyLnBhcnNlSW50KG1tWzFdKSwgTnVtYmVyLnBhcnNlSW50KG1tWzJdKSwgTnVtYmVyLnBhcnNlSW50KG1tWzNdKSwgMV07XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vY29sb3JzL2NvbG9yc19uYW1lcy5hc3BcbiAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWJfY29sb3JzXG4gICAgLy8gaHR0cDovL3d3dy5jb2xvcnMuY29tbXV0ZXJjcmVhdGl2ZS5jb20vZ3JpZC9cbiAgICB2YXIgd2ViQ29sb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgICBcIkFsaWNlQmx1ZVwiOiBcIiNGMEY4RkZcIixcbiAgICAgICAgXCJBbnRpcXVlV2hpdGVcIjogXCIjRkFFQkQ3XCIsXG4gICAgICAgIFwiQXF1YVwiOiBcIiMwMEZGRkZcIixcbiAgICAgICAgXCJBcXVhbWFyaW5lXCI6IFwiIzdGRkZENFwiLFxuICAgICAgICBcIkF6dXJlXCI6IFwiI0YwRkZGRlwiLFxuICAgICAgICBcIkJlaWdlXCI6IFwiI0Y1RjVEQ1wiLFxuICAgICAgICBcIkJpc3F1ZVwiOiBcIiNGRkU0QzRcIixcbiAgICAgICAgXCJCbGFja1wiOiBcIiMwMDAwMDBcIixcbiAgICAgICAgXCJCbGFuY2hlZEFsbW9uZFwiOiBcIiNGRkVCQ0RcIixcbiAgICAgICAgXCJCbHVlXCI6IFwiIzAwMDBGRlwiLFxuICAgICAgICBcIkJsdWVWaW9sZXRcIjogXCIjOEEyQkUyXCIsXG4gICAgICAgIFwiQnJvd25cIjogXCIjQTUyQTJBXCIsXG4gICAgICAgIFwiQnVybHlXb29kXCI6IFwiI0RFQjg4N1wiLFxuICAgICAgICBcIkNhZGV0Qmx1ZVwiOiBcIiM1RjlFQTBcIixcbiAgICAgICAgXCJDaGFydHJldXNlXCI6IFwiIzdGRkYwMFwiLFxuICAgICAgICBcIkNob2NvbGF0ZVwiOiBcIiNEMjY5MUVcIixcbiAgICAgICAgXCJDb3JhbFwiOiBcIiNGRjdGNTBcIixcbiAgICAgICAgXCJDb3JuZmxvd2VyQmx1ZVwiOiBcIiM2NDk1RURcIixcbiAgICAgICAgXCJDb3Juc2lsa1wiOiBcIiNGRkY4RENcIixcbiAgICAgICAgXCJDcmltc29uXCI6IFwiI0RDMTQzQ1wiLFxuICAgICAgICBcIkN5YW5cIjogXCIjMDBGRkZGXCIsXG4gICAgICAgIFwiRGFya0JsdWVcIjogXCIjMDAwMDhCXCIsXG4gICAgICAgIFwiRGFya0N5YW5cIjogXCIjMDA4QjhCXCIsXG4gICAgICAgIFwiRGFya0dvbGRlblJvZFwiOiBcIiNCODg2MEJcIixcbiAgICAgICAgXCJEYXJrR3JheVwiOiBcIiNBOUE5QTlcIixcbiAgICAgICAgXCJEYXJrR3JleVwiOiBcIiNBOUE5QTlcIixcbiAgICAgICAgXCJEYXJrR3JlZW5cIjogXCIjMDA2NDAwXCIsXG4gICAgICAgIFwiRGFya0toYWtpXCI6IFwiI0JEQjc2QlwiLFxuICAgICAgICBcIkRhcmtNYWdlbnRhXCI6IFwiIzhCMDA4QlwiLFxuICAgICAgICBcIkRhcmtPbGl2ZUdyZWVuXCI6IFwiIzU1NkIyRlwiLFxuICAgICAgICBcIkRhcmtPcmFuZ2VcIjogXCIjRkY4QzAwXCIsXG4gICAgICAgIFwiRGFya09yY2hpZFwiOiBcIiM5OTMyQ0NcIixcbiAgICAgICAgXCJEYXJrUmVkXCI6IFwiIzhCMDAwMFwiLFxuICAgICAgICBcIkRhcmtTYWxtb25cIjogXCIjRTk5NjdBXCIsXG4gICAgICAgIFwiRGFya1NlYUdyZWVuXCI6IFwiIzhGQkM4RlwiLFxuICAgICAgICBcIkRhcmtTbGF0ZUJsdWVcIjogXCIjNDgzRDhCXCIsXG4gICAgICAgIFwiRGFya1NsYXRlR3JheVwiOiBcIiMyRjRGNEZcIixcbiAgICAgICAgXCJEYXJrU2xhdGVHcmV5XCI6IFwiIzJGNEY0RlwiLFxuICAgICAgICBcIkRhcmtUdXJxdW9pc2VcIjogXCIjMDBDRUQxXCIsXG4gICAgICAgIFwiRGFya1Zpb2xldFwiOiBcIiM5NDAwRDNcIixcbiAgICAgICAgXCJEZWVwUGlua1wiOiBcIiNGRjE0OTNcIixcbiAgICAgICAgXCJEZWVwU2t5Qmx1ZVwiOiBcIiMwMEJGRkZcIixcbiAgICAgICAgXCJEaW1HcmF5XCI6IFwiIzY5Njk2OVwiLFxuICAgICAgICBcIkRpbUdyZXlcIjogXCIjNjk2OTY5XCIsXG4gICAgICAgIFwiRG9kZ2VyQmx1ZVwiOiBcIiMxRTkwRkZcIixcbiAgICAgICAgXCJGaXJlQnJpY2tcIjogXCIjQjIyMjIyXCIsXG4gICAgICAgIFwiRmxvcmFsV2hpdGVcIjogXCIjRkZGQUYwXCIsXG4gICAgICAgIFwiRm9yZXN0R3JlZW5cIjogXCIjMjI4QjIyXCIsXG4gICAgICAgIFwiRnVjaHNpYVwiOiBcIiNGRjAwRkZcIixcbiAgICAgICAgXCJHYWluc2Jvcm9cIjogXCIjRENEQ0RDXCIsXG4gICAgICAgIFwiR2hvc3RXaGl0ZVwiOiBcIiNGOEY4RkZcIixcbiAgICAgICAgXCJHb2xkXCI6IFwiI0ZGRDcwMFwiLFxuICAgICAgICBcIkdvbGRlblJvZFwiOiBcIiNEQUE1MjBcIixcbiAgICAgICAgXCJHcmF5XCI6IFwiIzgwODA4MFwiLFxuICAgICAgICBcIkdyZXlcIjogXCIjODA4MDgwXCIsXG4gICAgICAgIFwiR3JlZW5cIjogXCIjMDA4MDAwXCIsXG4gICAgICAgIFwiR3JlZW5ZZWxsb3dcIjogXCIjQURGRjJGXCIsXG4gICAgICAgIFwiSG9uZXlEZXdcIjogXCIjRjBGRkYwXCIsXG4gICAgICAgIFwiSG90UGlua1wiOiBcIiNGRjY5QjRcIixcbiAgICAgICAgXCJJbmRpYW5SZWQgXCI6IFwiI0NENUM1Q1wiLFxuICAgICAgICBcIkluZGlnbyBcIjogXCIjNEIwMDgyXCIsXG4gICAgICAgIFwiSXZvcnlcIjogXCIjRkZGRkYwXCIsXG4gICAgICAgIFwiS2hha2lcIjogXCIjRjBFNjhDXCIsXG4gICAgICAgIFwiTGF2ZW5kZXJcIjogXCIjRTZFNkZBXCIsXG4gICAgICAgIFwiTGF2ZW5kZXJCbHVzaFwiOiBcIiNGRkYwRjVcIixcbiAgICAgICAgXCJMYXduR3JlZW5cIjogXCIjN0NGQzAwXCIsXG4gICAgICAgIFwiTGVtb25DaGlmZm9uXCI6IFwiI0ZGRkFDRFwiLFxuICAgICAgICBcIkxpZ2h0Qmx1ZVwiOiBcIiNBREQ4RTZcIixcbiAgICAgICAgXCJMaWdodENvcmFsXCI6IFwiI0YwODA4MFwiLFxuICAgICAgICBcIkxpZ2h0Q3lhblwiOiBcIiNFMEZGRkZcIixcbiAgICAgICAgXCJMaWdodEdvbGRlblJvZFllbGxvd1wiOiBcIiNGQUZBRDJcIixcbiAgICAgICAgXCJMaWdodEdyYXlcIjogXCIjRDNEM0QzXCIsXG4gICAgICAgIFwiTGlnaHRHcmV5XCI6IFwiI0QzRDNEM1wiLFxuICAgICAgICBcIkxpZ2h0R3JlZW5cIjogXCIjOTBFRTkwXCIsXG4gICAgICAgIFwiTGlnaHRQaW5rXCI6IFwiI0ZGQjZDMVwiLFxuICAgICAgICBcIkxpZ2h0U2FsbW9uXCI6IFwiI0ZGQTA3QVwiLFxuICAgICAgICBcIkxpZ2h0U2VhR3JlZW5cIjogXCIjMjBCMkFBXCIsXG4gICAgICAgIFwiTGlnaHRTa3lCbHVlXCI6IFwiIzg3Q0VGQVwiLFxuICAgICAgICBcIkxpZ2h0U2xhdGVHcmF5XCI6IFwiIzc3ODg5OVwiLFxuICAgICAgICBcIkxpZ2h0U2xhdGVHcmV5XCI6IFwiIzc3ODg5OVwiLFxuICAgICAgICBcIkxpZ2h0U3RlZWxCbHVlXCI6IFwiI0IwQzRERVwiLFxuICAgICAgICBcIkxpZ2h0WWVsbG93XCI6IFwiI0ZGRkZFMFwiLFxuICAgICAgICBcIkxpbWVcIjogXCIjMDBGRjAwXCIsXG4gICAgICAgIFwiTGltZUdyZWVuXCI6IFwiIzMyQ0QzMlwiLFxuICAgICAgICBcIkxpbmVuXCI6IFwiI0ZBRjBFNlwiLFxuICAgICAgICBcIk1hZ2VudGFcIjogXCIjRkYwMEZGXCIsXG4gICAgICAgIFwiTWFyb29uXCI6IFwiIzgwMDAwMFwiLFxuICAgICAgICBcIk1lZGl1bUFxdWFNYXJpbmVcIjogXCIjNjZDREFBXCIsXG4gICAgICAgIFwiTWVkaXVtQmx1ZVwiOiBcIiMwMDAwQ0RcIixcbiAgICAgICAgXCJNZWRpdW1PcmNoaWRcIjogXCIjQkE1NUQzXCIsXG4gICAgICAgIFwiTWVkaXVtUHVycGxlXCI6IFwiIzkzNzBEQlwiLFxuICAgICAgICBcIk1lZGl1bVNlYUdyZWVuXCI6IFwiIzNDQjM3MVwiLFxuICAgICAgICBcIk1lZGl1bVNsYXRlQmx1ZVwiOiBcIiM3QjY4RUVcIixcbiAgICAgICAgXCJNZWRpdW1TcHJpbmdHcmVlblwiOiBcIiMwMEZBOUFcIixcbiAgICAgICAgXCJNZWRpdW1UdXJxdW9pc2VcIjogXCIjNDhEMUNDXCIsXG4gICAgICAgIFwiTWVkaXVtVmlvbGV0UmVkXCI6IFwiI0M3MTU4NVwiLFxuICAgICAgICBcIk1pZG5pZ2h0Qmx1ZVwiOiBcIiMxOTE5NzBcIixcbiAgICAgICAgXCJNaW50Q3JlYW1cIjogXCIjRjVGRkZBXCIsXG4gICAgICAgIFwiTWlzdHlSb3NlXCI6IFwiI0ZGRTRFMVwiLFxuICAgICAgICBcIk1vY2Nhc2luXCI6IFwiI0ZGRTRCNVwiLFxuICAgICAgICBcIk5hdmFqb1doaXRlXCI6IFwiI0ZGREVBRFwiLFxuICAgICAgICBcIk5hdnlcIjogXCIjMDAwMDgwXCIsXG4gICAgICAgIFwiT2xkTGFjZVwiOiBcIiNGREY1RTZcIixcbiAgICAgICAgXCJPbGl2ZVwiOiBcIiM4MDgwMDBcIixcbiAgICAgICAgXCJPbGl2ZURyYWJcIjogXCIjNkI4RTIzXCIsXG4gICAgICAgIFwiT3JhbmdlXCI6IFwiI0ZGQTUwMFwiLFxuICAgICAgICBcIk9yYW5nZVJlZFwiOiBcIiNGRjQ1MDBcIixcbiAgICAgICAgXCJPcmNoaWRcIjogXCIjREE3MEQ2XCIsXG4gICAgICAgIFwiUGFsZUdvbGRlblJvZFwiOiBcIiNFRUU4QUFcIixcbiAgICAgICAgXCJQYWxlR3JlZW5cIjogXCIjOThGQjk4XCIsXG4gICAgICAgIFwiUGFsZVR1cnF1b2lzZVwiOiBcIiNBRkVFRUVcIixcbiAgICAgICAgXCJQYWxlVmlvbGV0UmVkXCI6IFwiI0RCNzA5M1wiLFxuICAgICAgICBcIlBhcGF5YVdoaXBcIjogXCIjRkZFRkQ1XCIsXG4gICAgICAgIFwiUGVhY2hQdWZmXCI6IFwiI0ZGREFCOVwiLFxuICAgICAgICBcIlBlcnVcIjogXCIjQ0Q4NTNGXCIsXG4gICAgICAgIFwiUGlua1wiOiBcIiNGRkMwQ0JcIixcbiAgICAgICAgXCJQbHVtXCI6IFwiI0REQTBERFwiLFxuICAgICAgICBcIlBvd2RlckJsdWVcIjogXCIjQjBFMEU2XCIsXG4gICAgICAgIFwiUHVycGxlXCI6IFwiIzgwMDA4MFwiLFxuICAgICAgICBcIlJlYmVjY2FQdXJwbGVcIjogXCIjNjYzMzk5XCIsXG4gICAgICAgIFwiUmVkXCI6IFwiI0ZGMDAwMFwiLFxuICAgICAgICBcIlJvc3lCcm93blwiOiBcIiNCQzhGOEZcIixcbiAgICAgICAgXCJSb3lhbEJsdWVcIjogXCIjNDE2OUUxXCIsXG4gICAgICAgIFwiU2FkZGxlQnJvd25cIjogXCIjOEI0NTEzXCIsXG4gICAgICAgIFwiU2FsbW9uXCI6IFwiI0ZBODA3MlwiLFxuICAgICAgICBcIlNhbmR5QnJvd25cIjogXCIjRjRBNDYwXCIsXG4gICAgICAgIFwiU2VhR3JlZW5cIjogXCIjMkU4QjU3XCIsXG4gICAgICAgIFwiU2VhU2hlbGxcIjogXCIjRkZGNUVFXCIsXG4gICAgICAgIFwiU2llbm5hXCI6IFwiI0EwNTIyRFwiLFxuICAgICAgICBcIlNpbHZlclwiOiBcIiNDMEMwQzBcIixcbiAgICAgICAgXCJTa3lCbHVlXCI6IFwiIzg3Q0VFQlwiLFxuICAgICAgICBcIlNsYXRlQmx1ZVwiOiBcIiM2QTVBQ0RcIixcbiAgICAgICAgXCJTbGF0ZUdyYXlcIjogXCIjNzA4MDkwXCIsXG4gICAgICAgIFwiU2xhdGVHcmV5XCI6IFwiIzcwODA5MFwiLFxuICAgICAgICBcIlNub3dcIjogXCIjRkZGQUZBXCIsXG4gICAgICAgIFwiU3ByaW5nR3JlZW5cIjogXCIjMDBGRjdGXCIsXG4gICAgICAgIFwiU3RlZWxCbHVlXCI6IFwiIzQ2ODJCNFwiLFxuICAgICAgICBcIlRhblwiOiBcIiNEMkI0OENcIixcbiAgICAgICAgXCJUZWFsXCI6IFwiIzAwODA4MFwiLFxuICAgICAgICBcIlRoaXN0bGVcIjogXCIjRDhCRkQ4XCIsXG4gICAgICAgIFwiVG9tYXRvXCI6IFwiI0ZGNjM0N1wiLFxuICAgICAgICBcIlR1cnF1b2lzZVwiOiBcIiM0MEUwRDBcIixcbiAgICAgICAgXCJWaW9sZXRcIjogXCIjRUU4MkVFXCIsXG4gICAgICAgIFwiV2hlYXRcIjogXCIjRjVERUIzXCIsXG4gICAgICAgIFwiV2hpdGVcIjogXCIjRkZGRkZGXCIsXG4gICAgICAgIFwiV2hpdGVTbW9rZVwiOiBcIiNGNUY1RjVcIixcbiAgICAgICAgXCJZZWxsb3dcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwiWWVsbG93R3JlZW5cIjogXCIjOUFDRDMyXCIsXG4gICAgICAgIFwiVHJhbnNwYXJlbnRcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgfTtcbiAgICBmb3IgKHZhciBwIGluIHdlYkNvbG9ycykge1xuICAgICAgICB3ZWJDb2xvcnNbcC50b0xvd2VyQ2FzZSgpXSA9IHdlYkNvbG9yc1twXTtcbiAgICB9XG4gICAgdmFyIHdjID0gd2ViQ29sb3JzW2lucHV0LnRvTG93ZXJDYXNlKCldO1xuICAgIGlmICh3YyAhPSBudWxsKVxuICAgICAgICByZXR1cm4gcGFyc2VDb2xvcih3Yyk7XG4gICAgdGhyb3cgRXJyb3IoXCInXCIgKyBpbnB1dCArIFwiJyBpcyBub3QgYSB2YWxpZCBjb2xvci4uLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbFRvTnVtYmVyKGlucHV0OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCByZXN1bHQgPSBDT0xfQ0FDSEVbaW5wdXRdO1xuICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCByZ2JhID0gcGFyc2VDb2xvcihpbnB1dCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gKHJnYmFbMF0gKiAoMjU2ICogMjU2ICogMjU2KSkgKyAocmdiYVsxXSAqICgyNTYgKiAyNTYpKSArIChyZ2JhWzJdICogMjU2KSArIE1hdGguZmxvb3IocmdiYVszXSAqIDI1NSk7XG4gICAgICAgIENPTF9DQUNIRVtpbnB1dF0gPSB2YWx1ZTtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKENPTF9DQUNIRSkubGVuZ3RoID09PSAyMDAwKSB7XG4gICAgICAgICAgICBhbGVydChcIjIwMDAgY29sb3IgY2FjaGVzIGhhdmUgYmVlbiBjcmVhdGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZGVjbGFyZSBsZXQgSW5zdGFsbFRyaWdnZXI6IGFueTtcbnZhciBpc0ZpcmVmb3ggPSB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnO1xuY29uc3QgQ09MX0NBQ0hFOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge1xuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4VGV4dHVyZVNpemUoKTogbnVtYmVyIHtcbiAgICBpZiAod2luZG93LldlYkdMUmVuZGVyaW5nQ29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcsIHsgYW50aWFsaWFzOiBmYWxzZSwgYWxwaGE6IGZhbHNlLCBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUgfSkgYXMgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gICAgaWYgKCFnbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9TSVpFKTtcbn1cblxuZXhwb3J0IGNsYXNzIE9wZW5HTEdyYXBoaWNzSW1wbCBpbXBsZW1lbnRzIEdyYXBoaWNzLCBSZW5kZXJpbmdTdGF0ZSB7XG4gICAgc3RhdGljIE5VTExfQ09QWTogTnVsbEJpdG1hcCA9IG5ldyBOdWxsQml0bWFwKCk7XG4gICAgXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBvZmZzY3JlZW46IE9mZnNjcmVlbiB8IG51bGwgPSBudWxsO1xuICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XG4gICAgZXh0ZW5zaW9uPzogQU5HTEVfaW5zdGFuY2VkX2FycmF5cztcblxuICAgIGltYWdlczogSU9wZW5HTEJpdG1hcFtdID0gW107XG4gICAgYXRsYXNUZXh0dXJlczogV2ViR0xUZXh0dXJlW10gfCBudWxsID0gbnVsbDtcbiAgICBjdXJyZW50VGV4dHVyZTogV2ViR0xUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICAgdGV4V2lkdGg6IG51bWJlciA9IDA7XG4gICAgdGV4SGVpZ2h0OiBudW1iZXIgPSAwO1xuXG4gICAgb2Zmc2NyZWVuSWQ6IG51bWJlciA9IDE7XG4gICAgb2Zmc2NyZWVuczogT3BlbkdsT2Zmc2NyZWVuW10gPSBbXTtcbiAgICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBhcnJheUJ1ZmZlcj86IEFycmF5QnVmZmVyO1xuICAgIHNoYWRlclByb2dyYW0/OiBXZWJHTFByb2dyYW07XG4gICAgZ2xCdWZmZXI/OiBXZWJHTEJ1ZmZlciB8IG51bGw7XG4gICAgbWF4RHJhd3M6IG51bWJlciA9IDEwMDAwO1xuICAgIHBvc2l0aW9ucz86IEludDE2QXJyYXk7XG4gICAgcmdiYXM/OiBVaW50MzJBcnJheTtcbiAgICBkcmF3czogbnVtYmVyID0gMDtcblxuICAgIGNsaXBYOiBudW1iZXIgPSAwO1xuICAgIGNsaXBZOiBudW1iZXIgPSAwO1xuICAgIGNsaXBYMjogbnVtYmVyID0gMDtcbiAgICBjbGlwWTI6IG51bWJlciA9IDA7XG4gICAgYWxwaGE6IG51bWJlciA9IDI1NTtcblxuICAgIGN1cnJlbnRDb250ZXh0U3RhdGU6IFJlbmRlcmluZ1N0YXRlO1xuXG4gICAgdHJhbnNmb3JtQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICB0cmFuc2Zvcm1DdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICB1bmlmb3JtczogUmVjb3JkPHN0cmluZywgV2ViR0xVbmlmb3JtTG9jYXRpb24+ID0ge307XG4gICAgc2F2ZXM6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUN0eCA9IHRoaXMudHJhbnNmb3JtQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKSE7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlID0gdGhpcztcbiAgICAgICAgdGhpcy5jYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lY2FudmFzXCIpO1xuICAgICAgICAoPGFueT50aGlzLmNhbnZhcykuc3R5bGUuZm9udFNtb290aCA9IFwibmV2ZXJcIjtcbiAgICAgICAgKDxhbnk+dGhpcy5jYW52YXMpLnN0eWxlLndlYmtpdEZvbnRTbW9vdGhpbmcgPSBcIm5vbmVcIjtcblxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2ViZ2xjb250ZXh0bG9zdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9zdENvbnRleHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2ViZ2xjb250ZXh0cmVzdG9yZWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlY292ZXJDb250ZXh0KCk7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICBpZiAoaXNGaXJlZm94KSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IFwiY3Jpc3AtZWRnZXNcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gXCJwaXhlbGF0ZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2wgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnLCB7IGFudGlhbGlhczogZmFsc2UsIGFscGhhOiBmYWxzZSwgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiBmYWxzZSB9KSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XG4gICAgICAgIHRoaXMuaW5pdEdsUmVzb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb3N0Q29udGV4dCgpOiB2b2lkIHtcbiAgICAgICAgR3V0ZUxvZy5sb2coXCJMT1NUIEdMIENPTlRFWFRcIik7XG4gICAgICAgIHRoaXMuc2hhZGVyUHJvZ3JhbSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5hdGxhc1RleHR1cmVzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlY292ZXJDb250ZXh0KCk6IHZvaWQge1xuICAgICAgICBHdXRlTG9nLmxvZyhcIlJFQ09WRVJFRCBHTCBDT05URVhUXCIpO1xuICAgICAgICB0aGlzLmluaXRHbFJlc291cmNlcygpO1xuICAgICAgICB0aGlzLmluaXRSZXNvdXJjZU9uTG9hZGVkKCk7XG4gICAgICAgIGZvciAoY29uc3Qgb2Zmc2NyZWVuIG9mIHRoaXMub2Zmc2NyZWVucykge1xuICAgICAgICAgICAgb2Zmc2NyZWVuLnJlY292ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICBHdXRlTG9nLmxvZyhcIlJFQ1JFQVRFIEdMIFJFU09VUkNFU1wiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRHbFJlc291cmNlcygpOiB2b2lkIHtcbiAgICAgICAgR3V0ZUxvZy5sb2coXCJJbml0IEdMIFJlc291cmNlc1wiKTtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5nbC5nZXRFeHRlbnNpb24oJ0FOR0xFX2luc3RhbmNlZF9hcnJheXMnKSBhcyBBTkdMRV9pbnN0YW5jZWRfYXJyYXlzXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uID0gZXh0ZW5zaW9uO1xuXG4gICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuU1JDX0FMUEhBLCB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkJMRU5EKTtcbiAgICAgICAgdGhpcy5nbC5kaXNhYmxlKHRoaXMuZ2wuREVQVEhfVEVTVCk7XG5cbiAgICAgICAgY29uc3Qgc2hvcnRzUGVySW1hZ2VQb3NpdGlvbiA9IDJcbiAgICAgICAgY29uc3Qgc2hvcnRzUGVySW1hZ2VTaXplID0gMlxuICAgICAgICBjb25zdCBzaG9ydHNQZXJJbWFnZVRleFBvcyA9IDRcbiAgICAgICAgY29uc3QgYnl0ZXNQZXJJbWFnZVJnYmEgPSA0XG5cbiAgICAgICAgY29uc3QgYnl0ZXNQZXJJbWFnZSA9IHNob3J0c1BlckltYWdlUG9zaXRpb24gKiAyICsgc2hvcnRzUGVySW1hZ2VTaXplICogMiArIHNob3J0c1BlckltYWdlVGV4UG9zICogMiArIGJ5dGVzUGVySW1hZ2VSZ2JhO1xuXG4gICAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5tYXhEcmF3cyAqIGJ5dGVzUGVySW1hZ2UpXG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gbmV3IEludDE2QXJyYXkodGhpcy5hcnJheUJ1ZmZlcilcbiAgICAgICAgdGhpcy5yZ2JhcyA9IG5ldyBVaW50MzJBcnJheSh0aGlzLmFycmF5QnVmZmVyKVxuXG4gICAgICAgIGNvbnN0IHZlcnRDb2RlID0gXCJcXFxuXHRcdFx0YXR0cmlidXRlIHZlYzIgYVNpemVNdWx0O1xcXG5cdFx0XHRhdHRyaWJ1dGUgdmVjMiBhUG9zO1xcXG5cdFx0XHRhdHRyaWJ1dGUgdmVjMiBhU2l6ZTtcXFxuXHRcdFx0YXR0cmlidXRlIHZlYzQgYVRleFBvcztcXFxuXHRcdFx0YXR0cmlidXRlIHZlYzQgYVJnYmE7XFxcblx0XHRcdFxcXG5cdFx0XHR2YXJ5aW5nIGhpZ2hwIHZlYzIgZnJhZ1RleHR1cmVQb3M7XFxcblx0XHRcdHZhcnlpbmcgdmVjNCBmcmFnQWJncjtcXFxuXHRcdFx0XFxcblx0XHRcdHVuaWZvcm0gdmVjMiB1Q2FudmFzU2l6ZTtcXFxuXHRcdFx0dW5pZm9ybSB2ZWMyIHVUZXhTaXplO1xcXG5cdFx0XHRcXFxuXHRcdFx0dm9pZCBtYWluKHZvaWQpe1xcXG5cdFx0XHRcdGdsX1Bvc2l0aW9uLnggPSAoIChhUG9zLnggKyAoYVNpemUueCAqIGFTaXplTXVsdC54KSApIC8gdUNhbnZhc1NpemUueCApIC0gMS4wOyBcXFxuICAgICAgICAgICAgICAgIGdsX1Bvc2l0aW9uLnkgPSAxLjAgLSAgKCAoYVBvcy55ICsgKGFTaXplLnkgKiBhU2l6ZU11bHQueSkgKSAvIHVDYW52YXNTaXplLnkgKTsgXFxcbiAgICAgICAgICAgICAgICBnbF9Qb3NpdGlvbi56ID0gMC4wOyBcXFxuICAgICAgICAgICAgICAgIGdsX1Bvc2l0aW9uLncgPSAxLjA7IFxcXG4gICAgICAgICAgICAgICAgXFxcblx0XHRcdFx0ZnJhZ1RleHR1cmVQb3MgPSAoYVRleFBvcy54eSArIGFUZXhQb3MuencgKiBhU2l6ZU11bHQpIC8gdVRleFNpemU7XFxcbiAgICAgICAgICAgICAgICBcXFxuICAgICAgICAgICAgICAgIGZyYWdBYmdyLnggPSBhUmdiYS53LzI1NS4wOyBcXFxuICAgICAgICAgICAgICAgIGZyYWdBYmdyLnkgPSBhUmdiYS56LzI1NS4wOyBcXFxuICAgICAgICAgICAgICAgIGZyYWdBYmdyLnogPSBhUmdiYS55LzI1NS4wOyBcXFxuICAgICAgICAgICAgICAgIGZyYWdBYmdyLncgPSBhUmdiYS54LzI1NS4wOyBcXFxuXHRcdFx0fVxcXG5cdFx0XCJcblxuICAgICAgICAvLyBDcmVhdGUgYSB2ZXJ0ZXggc2hhZGVyIG9iamVjdCB3aXRoIGNvZGUuXG4gICAgICAgIGNvbnN0IHZlcnRTaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcih0aGlzLmdsLlZFUlRFWF9TSEFERVIpIGFzIFdlYkdMU2hhZGVyXG4gICAgICAgIHRoaXMuZ2wuc2hhZGVyU291cmNlKHZlcnRTaGFkZXIsIHZlcnRDb2RlKVxuICAgICAgICB0aGlzLmdsLmNvbXBpbGVTaGFkZXIodmVydFNoYWRlcilcblxuICAgICAgICAvLyBGcmFnbWVudCBzaGFkZXIgc291cmNlIGNvZGUuXG4gICAgICAgIGNvbnN0IGZyYWdDb2RlID0gXCJcXFxuXHRcdFx0dmFyeWluZyBoaWdocCB2ZWMyIGZyYWdUZXh0dXJlUG9zO1xcXG5cdFx0XHR2YXJ5aW5nIGhpZ2hwIHZlYzQgZnJhZ0FiZ3I7XFxcblx0XHRcdHVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xcXG5cdFx0XHRcXFxuXHRcdFx0dm9pZCBtYWluKHZvaWQpe1xcXG5cdFx0XHRcdGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgZnJhZ1RleHR1cmVQb3MpICogZnJhZ0FiZ3I7XFxcblx0XHRcdH1cXFxuXHRcdFwiXG5cbiAgICAgICAgY29uc3QgZnJhZ1NoYWRlciA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKHRoaXMuZ2wuRlJBR01FTlRfU0hBREVSKSBhcyBXZWJHTFNoYWRlcjtcbiAgICAgICAgdGhpcy5nbC5zaGFkZXJTb3VyY2UoZnJhZ1NoYWRlciwgZnJhZ0NvZGUpO1xuICAgICAgICB0aGlzLmdsLmNvbXBpbGVTaGFkZXIoZnJhZ1NoYWRlcik7XG5cbiAgICAgICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IHRoaXMuZ2wuY3JlYXRlUHJvZ3JhbSgpIGFzIFdlYkdMUHJvZ3JhbVxuICAgICAgICB0aGlzLmdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0U2hhZGVyKTtcbiAgICAgICAgdGhpcy5nbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ1NoYWRlcik7XG4gICAgICAgIHRoaXMuZ2wubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgICAgICAgdGhpcy5zaGFkZXJQcm9ncmFtID0gc2hhZGVyUHJvZ3JhbTtcblxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5nbC5jcmVhdGVCdWZmZXIoKSlcbiAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBVaW50OEFycmF5KFswLCAxLCAyLCAyLCAxLCAzXSksIHRoaXMuZ2wuU1RBVElDX0RSQVcpXG5cbiAgICAgICAgLy8gT3VyIG11bHRpcGxpZXIgYXJyYXkgZm9yIHdpZHRoL2hlaWdodCBzbyB3ZSBjYW4gZ2V0IHRvIGVhY2ggY29ybmVyIG9mIHRoZSBpbWFnZSBkcmF3bi5cbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpKVxuICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdKSwgdGhpcy5nbC5TVEFUSUNfRFJBVylcblxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sIFwiYVNpemVNdWx0XCIpXG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlKVxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0cmlidXRlLCAyLCB0aGlzLmdsLkZMT0FULCBmYWxzZSwgMCwgMClcblxuICAgICAgICB0aGlzLmdsQnVmZmVyID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmdsQnVmZmVyKVxuICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHRoaXMuYXJyYXlCdWZmZXIsIHRoaXMuZ2wuRFlOQU1JQ19EUkFXKVxuXG4gICAgICAgIGxldCBieXRlT2Zmc2V0ID0gMDtcblxuICAgICAgICBjb25zdCBzZXR1cEF0dHJpYnV0ZSA9IChuYW1lOiBzdHJpbmcsIGRhdGFUeXBlOiBudW1iZXIsIGFtb3VudDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaGFkZXJQcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIG5hbWUpXG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyaWJ1dGUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihhdHRyaWJ1dGUsIGFtb3VudCwgZGF0YVR5cGUsIGZhbHNlLCBieXRlc1BlckltYWdlLCBieXRlT2Zmc2V0KVxuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb24udmVydGV4QXR0cmliRGl2aXNvckFOR0xFKGF0dHJpYnV0ZSwgMSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlID09IHRoaXMuZ2wuU0hPUlQpXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQgKj0gMlxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgPT0gdGhpcy5nbC5GTE9BVClcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCAqPSA0XG4gICAgICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gYW1vdW50XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgR3V0ZUxvZy5sb2coXCJBdHRyaWJ1dGUgbm90IGZvdW5kOiBcIiArIG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldHVwQXR0cmlidXRlKFwiYVBvc1wiLCB0aGlzLmdsLlNIT1JULCBzaG9ydHNQZXJJbWFnZVBvc2l0aW9uKTtcbiAgICAgICAgc2V0dXBBdHRyaWJ1dGUoXCJhU2l6ZVwiLCB0aGlzLmdsLlNIT1JULCBzaG9ydHNQZXJJbWFnZVNpemUpO1xuICAgICAgICBzZXR1cEF0dHJpYnV0ZShcImFUZXhQb3NcIiwgdGhpcy5nbC5TSE9SVCwgc2hvcnRzUGVySW1hZ2VUZXhQb3MpO1xuICAgICAgICBzZXR1cEF0dHJpYnV0ZShcImFSZ2JhXCIsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgYnl0ZXNQZXJJbWFnZVJnYmEpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVySW1hZ2UoYml0bWFwOiBJT3BlbkdMQml0bWFwKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goYml0bWFwKTtcbiAgICB9XG5cbiAgICBuZXdSZXNvdXJjZUxvYWRlZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYXRsYXNUZXh0dXJlcykge1xuICAgICAgICAgICAgdGhpcy5pbml0UmVzb3VyY2VPbkxvYWRlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdFJlc291cmNlT25Mb2FkZWQoKTogdm9pZCB7XG4gICAgICAgIEd1dGVMb2cubG9nKFwiW1dFQkdMXSBSZWxvYWRpbmcgdGV4dHVyZVwiKTtcblxuICAgICAgICBjb25zdCB0ZXh0dXJlU2l6ZSA9IE1hdGgubWluKHRoaXMuZ2wuZ2V0UGFyYW1ldGVyKHRoaXMuZ2wuTUFYX1RFWFRVUkVfU0laRSksIDQwOTYgKiAyKTtcblxuICAgICAgICBsZXQgbGlzdCA9IFsuLi50aGlzLmltYWdlc107XG4gICAgICAgIGxpc3Quc29ydCgoYSwgYikgPT4gYS5oZWlnaHQgPiBiLmhlaWdodCA/IC0xIDogMSk7XG5cbiAgICAgICAgY29uc3QgcGxhY2VkOiBJT3BlbkdMQml0bWFwW10gPSBbXTtcbiAgICAgICAgcGxhY2VkLnB1c2goeyB0ZXhYOiAwLCB0ZXhZOiAwLCB3aWR0aDogMSwgaGVpZ2h0OiAxLCB0ZXhJbmRleDogLTEgfSlcbiAgICAgICAgY29uc3QgcmVjb3JkcyA9IGxpc3QubWFwKGltYWdlID0+IHsgcmV0dXJuIHsgaW1hZ2U6IGltYWdlLCB3OiBpbWFnZS53aWR0aCwgaDogaW1hZ2UuaGVpZ2h0IH0gfSk7XG5cbiAgICAgICAgbGV0IGJhc2UgPSAwO1xuICAgICAgICBsZXQgc3RlcCA9IDIwO1xuICAgICAgICBsZXQgdGV4dHVyZUNvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aDsgaSArPSBzdGVwKSB7XG4gICAgICAgICAgICBsZXQgeyB3LCBoLCBmaWxsIH0gPSBwb3RwYWNrKHJlY29yZHMuc2xpY2UoYmFzZSwgaSkpO1xuICAgICAgICAgICAgaWYgKHcgPiB0ZXh0dXJlU2l6ZSB8fCBoID4gdGV4dHVyZVNpemUpIHtcbiAgICAgICAgICAgICAgICBsZXQgeyB3LCBoLCBmaWxsIH0gPSBwb3RwYWNrKHJlY29yZHMuc2xpY2UoYmFzZSwgaSAtIHN0ZXApKTtcbiAgICAgICAgICAgICAgICByZWNvcmRzLnNsaWNlKGJhc2UsIGkgLSBzdGVwKS5mb3JFYWNoKHJlY29yZCA9PiByZWNvcmQuaW1hZ2UudGV4SW5kZXggPSB0ZXh0dXJlQ291bnQpO1xuICAgICAgICAgICAgICAgIEd1dGVMb2cubG9nKGJhc2UgKyBcIiAtPiBcIiArIChpIC0gc3RlcCAtIDEpICsgXCIgPSBcIiArIHcgKyBcInhcIiArIGgpO1xuICAgICAgICAgICAgICAgIGJhc2UgPSBpIC0gc3RlcDtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlQ291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgeyB3LCBoLCBmaWxsIH0gPSBwb3RwYWNrKHJlY29yZHMuc2xpY2UoYmFzZSwgcmVjb3Jkcy5sZW5ndGgpKTtcbiAgICAgICAgcmVjb3Jkcy5zbGljZShiYXNlLCByZWNvcmRzLmxlbmd0aCkuZm9yRWFjaChyZWNvcmQgPT4gcmVjb3JkLmltYWdlLnRleEluZGV4ID0gdGV4dHVyZUNvdW50KTtcbiAgICAgICAgR3V0ZUxvZy5sb2coYmFzZSArIFwiIC0+IFwiICsgKHJlY29yZHMubGVuZ3RoIC0gMSkgKyBcIiA9IFwiICsgdyArIFwieFwiICsgaCk7XG4gICAgICAgIHRleHR1cmVDb3VudCsrO1xuXG4gICAgICAgIEd1dGVMb2cubG9nKFwiUGFja2VkIGludG86IFwiICsgdGV4dHVyZUNvdW50ICsgXCIgdGV4dHVyZXNcIik7XG4gICAgICAgIGZvciAoY29uc3QgcmVjb3JkIG9mIHJlY29yZHMpIHtcbiAgICAgICAgICAgIHJlY29yZC5pbWFnZS50ZXhYID0gKHJlY29yZCBhcyBhbnkpLnggKyAxO1xuICAgICAgICAgICAgcmVjb3JkLmltYWdlLnRleFkgPSAocmVjb3JkIGFzIGFueSkueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmF0bGFzVGV4dHVyZXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGV4dHVyZSBvZiB0aGlzLmF0bGFzVGV4dHVyZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGV4dHVyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdGxhc1RleHR1cmVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0dXJlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IHRoaXMuZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICAgICAgaWYgKHRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF0bGFzVGV4dHVyZXMucHVzaCh0ZXh0dXJlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCwgdGhpcy5nbC5SR0JBLCB0ZXh0dXJlU2l6ZSwgdGV4dHVyZVNpemUsIDAsIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCBudWxsKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdoaXRlUGl4ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IHdoaXRlUGl4ZWwuZ2V0Q29udGV4dChcIjJkXCIpITtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNGRkYnO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCAxLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnRleFN1YkltYWdlMkQodGhpcy5nbC5URVhUVVJFXzJELCAwLCAwLCAwLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgd2hpdGVQaXhlbCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbWFnZSBvZiBsaXN0LmZpbHRlcihsSW1hZ2UgPT4gbEltYWdlLnRleEluZGV4ID09PSBpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLnRleFN1YkltYWdlMkQodGhpcy5nbC5URVhUVVJFXzJELCAwLCBpbWFnZS50ZXhYLCBpbWFnZS50ZXhZLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgaW1hZ2UuaW1hZ2UhKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgdGhpcy5nbC5ORUFSRVNUKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgdGhpcy5nbC5ORUFSRVNUKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudGV4V2lkdGggPSB0ZXh0dXJlU2l6ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRleEhlaWdodCA9IHRleHR1cmVTaXplO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNoYWRlclByb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nZXRVbmlmb3JtTG9jKFwidVRleFNpemVcIiksIHRoaXMudGV4V2lkdGgsIHRoaXMudGV4SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzZXRTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5TUkNfQUxQSEEsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgICAgIHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWDIgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFkgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFkyID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmFscGhhID0gMjU1O1xuICAgIH1cblxuICAgIGdldFVuaWZvcm1Mb2MobmFtZTogc3RyaW5nKTogV2ViR0xVbmlmb3JtTG9jYXRpb24ge1xuICAgICAgICBsZXQgcmVzdWx0OiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiA9IHRoaXMudW5pZm9ybXNbbmFtZV07XG4gICAgICAgIGlmICghcmVzdWx0ICYmIHRoaXMuc2hhZGVyUHJvZ3JhbSkge1xuICAgICAgICAgICAgY29uc3QgbG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBuYW1lKTtcbiAgICAgICAgICAgIGlmIChsb2MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuaWZvcm1zW25hbWVdID0gcmVzdWx0ID0gbG9jO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgLy8gUmVzaXplIHRoZSBnbCB2aWV3cG9ydCB0byBiZSB0aGUgbmV3IHNpemUgb2YgdGhlIGNhbnZhcy5cbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHNoYWRlciB2YXJpYWJsZXMgZm9yIGNhbnZhcyBzaXplLlxuICAgICAgICAvLyBTZW5kaW5nIGl0IHRvIGdsIG5vdyBzbyB3ZSBkb24ndCBoYXZlIHRvIGRvIHRoZSBtYXRoIGluIEphdmFTY3JpcHQgb24gZXZlcnkgZHJhdyxcbiAgICAgICAgLy8gc2luY2UgZ2wgd2FudHMgdG8gZHJhdyBhdCBhIHBvc2l0aW9uIGZyb20gMCB0byAxLCBhbmQgd2Ugd2FudCB0byBkbyBkcmF3SW1hZ2Ugd2l0aCBhIHNjcmVlbiBwaXhlbCBwb3NpdGlvbi5cbiAgICAgICAgaWYgKHRoaXMuc2hhZGVyUHJvZ3JhbSkge1xuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nZXRVbmlmb3JtTG9jKFwidUNhbnZhc1NpemVcIiksIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRFcnJvcigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuZ2wuZ2V0RXJyb3IoKTtcbiAgICAgICAgaWYgKGVycm9yICE9PSAwKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuSU5WQUxJRF9FTlVNOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIEVudW1cIjtcbiAgICAgICAgICAgICAgICBjYXNlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5JTlZBTElEX1ZBTFVFOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIFZhbHVlXCI7XG4gICAgICAgICAgICAgICAgY2FzZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuSU5WQUxJRF9PUEVSQVRJT046XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludmFsaWQgT3BlcmF0aW9uXCI7XG4gICAgICAgICAgICAgICAgY2FzZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuSU5WQUxJRF9GUkFNRUJVRkZFUl9PUEVSQVRJT046XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludmFsaWQgRnJhbWVidWZmZXIgT3BlcmF0aW9uXCI7XG4gICAgICAgICAgICAgICAgY2FzZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuT1VUX09GX01FTU9SWTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiT3V0IG9mIE1lbW9yeVwiO1xuICAgICAgICAgICAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSdyZSBleHBlY3Rpbmcgb3VyIGhhbmRsZXIgdG8gcG9wIHVwXG4gICAgICAgICAgICAgICAgLy8gYW5kIHJlc3RvcmUgaXQgLSBzbyBkb24ndCByZXR1cm4gYW4gZXJyb3Igc2luY2VcbiAgICAgICAgICAgICAgICAvLyB0aGF0J2xsIHN0b3AgdGhlIHJlbmRlcmluZyB0aHJlYWRcbiAgICAgICAgICAgICAgICBjYXNlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5DT05URVhUX0xPU1RfV0VCR0w6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFwiVW5rbm93biBlcnJvciAtIFwiICsgdGhpcy5nbC5nZXRFcnJvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBfZHJhd0JpdG1hcChpbWc6IElPcGVuR0xCaXRtYXAsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29sOiBudW1iZXIgPSAweEZGRkZGRjAwKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2RyYXdJbWFnZShpbWcudGV4SW5kZXgsIGltZy50ZXhYLCBpbWcudGV4WSwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2wsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuYWxwaGEpO1xuICAgIH1cblxuICAgIF9kcmF3SW1hZ2UodGV4SW5kZXg6IG51bWJlciwgdGV4WDogbnVtYmVyLCB0ZXhZOiBudW1iZXIsIHRleFdpZHRoOiBudW1iZXIsIHRleEhlaWdodDogbnVtYmVyLCBkcmF3WDogbnVtYmVyLCBkcmF3WTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmdiYTogbnVtYmVyLCBhbHBoYTogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5hdGxhc1RleHR1cmVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJnYmFzIHx8ICF0aGlzLnBvc2l0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoKHRleEluZGV4ID49IDApICYmICh0aGlzLmF0bGFzVGV4dHVyZXMhW3RleEluZGV4XSAhPT0gdGhpcy5jdXJyZW50VGV4dHVyZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2xDb21taXRDb250ZXh0KCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUZXh0dXJlID0gdGhpcy5hdGxhc1RleHR1cmVzIVt0ZXhJbmRleF07XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5jdXJyZW50VGV4dHVyZSk7XG4gICAgICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaSA9IHRoaXMuZHJhd3MgKiA1O1xuXG4gICAgICAgIC8vIGNsYW1wIGFscGhhIHRvIHByZXZlbnQgb3ZlcmZsb3dcbiAgICAgICAgaWYgKGFscGhhID4gMjU1KSB7XG4gICAgICAgICAgICBhbHBoYSA9IDI1NTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmdiYXNbaSArIDRdID0gcmdiYSB8IGFscGhhO1xuICAgICAgICBpICo9IDI7XG5cbiAgICAgICAgbGV0IGRyYXdYMiA9IGRyYXdYICsgd2lkdGg7XG4gICAgICAgIGxldCBkcmF3WTIgPSBkcmF3WSArIGhlaWdodDtcbiAgICAgICAgY29uc3QgdDEgPSB0aGlzLnRyYW5zZm9ybUN0eC5nZXRUcmFuc2Zvcm0oKS50cmFuc2Zvcm1Qb2ludCh7eCA6IGRyYXdYLCB5OiBkcmF3WSB9KTtcbiAgICAgICAgY29uc3QgdDIgPSB0aGlzLnRyYW5zZm9ybUN0eC5nZXRUcmFuc2Zvcm0oKS50cmFuc2Zvcm1Qb2ludCh7eCA6IGRyYXdYMiwgeTogZHJhd1kyIH0pO1xuICAgICAgICBkcmF3WCA9IHQxLng7XG4gICAgICAgIGRyYXdZID0gdDEueTtcbiAgICAgICAgZHJhd1gyID0gdDIueDtcbiAgICAgICAgZHJhd1kyID0gdDIueTtcblxuICAgICAgICBkcmF3WCA9IE1hdGguZmxvb3IoZHJhd1gpO1xuICAgICAgICBkcmF3WSA9IE1hdGguZmxvb3IoZHJhd1kpO1xuICAgICAgICBkcmF3WDIgPSBNYXRoLmZsb29yKGRyYXdYMik7XG4gICAgICAgIGRyYXdZMiA9IE1hdGguZmxvb3IoZHJhd1kyKTtcblxuICAgICAgICB3aWR0aCA9IGRyYXdYMiAtIGRyYXdYO1xuICAgICAgICBoZWlnaHQgPSBkcmF3WTIgLSBkcmF3WTtcblxuICAgICAgICBsZXQgc2NyZWVuSGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgICAgICBpZiAodGhpcy5vZmZzY3JlZW4pIHtcbiAgICAgICAgICAgIHNjcmVlbkhlaWdodCA9IHRoaXMub2Zmc2NyZWVuLmdldEhlaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzY3JlZW5XaWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICBpZiAodGhpcy5vZmZzY3JlZW4pIHtcbiAgICAgICAgICAgIHNjcmVlbldpZHRoID0gdGhpcy5vZmZzY3JlZW4uZ2V0V2lkdGgoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFkyID09PSAwKSAmJiAodGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBYMiA9PT0gMCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWSA9IC0xMDA7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFkyID0gc2NyZWVuSGVpZ2h0ICsgMTAwO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBYID0gLTEwMDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWDIgPSBzY3JlZW5XaWR0aCArIDEwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFggPCB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFgyKSB7XG4gICAgICAgICAgICBpZiAoZHJhd1ggPiB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFgyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRyYXdYMiA8IHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkcmF3WDIgPiB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFgyKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd1BlcmNlbnQgPSAxIC0gKGRyYXdYMiAtIHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWDIpIC8gd2lkdGg7XG4gICAgICAgICAgICAgICAgdGV4V2lkdGggKj0gc2hvd1BlcmNlbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGggKj0gc2hvd1BlcmNlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZHJhd1ggPCB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93UGVyY2VudCA9IDEgLSAodGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBYIC0gZHJhd1gpIC8gd2lkdGg7XG4gICAgICAgICAgICAgICAgd2lkdGggLT0gdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBYIC0gZHJhd1g7XG4gICAgICAgICAgICAgICAgZHJhd1ggPSB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFg7XG4gICAgICAgICAgICAgICAgdGV4WCArPSB0ZXhXaWR0aCAqICgxIC0gc2hvd1BlcmNlbnQpO1xuICAgICAgICAgICAgICAgIHRleFdpZHRoICo9IHNob3dQZXJjZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWSA8IHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWTIpIHtcbiAgICAgICAgICAgIGlmIChkcmF3WSA+IHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZHJhd1kyIDwgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRyYXdZMiA+IHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWTIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93UGVyY2VudCA9IDEgLSAoZHJhd1kyIC0gdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBZMikgLyBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGV4SGVpZ2h0ICo9IHNob3dQZXJjZW50O1xuICAgICAgICAgICAgICAgIGhlaWdodCAqPSBzaG93UGVyY2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkcmF3WSA8IHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dQZXJjZW50ID0gMSAtICh0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFkgLSBkcmF3WSkgLyBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0IC09IHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWSAtIGRyYXdZO1xuICAgICAgICAgICAgICAgIGRyYXdZID0gdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBZO1xuICAgICAgICAgICAgICAgIHRleFkgKz0gdGV4SGVpZ2h0ICogKDEgLSBzaG93UGVyY2VudCk7XG4gICAgICAgICAgICAgICAgdGV4SGVpZ2h0ICo9IHNob3dQZXJjZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbnNbaV0gPSBkcmF3WDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSArIDFdID0gZHJhd1k7XG4gICAgICAgIHRoaXMucG9zaXRpb25zW2kgKyAyXSA9IHdpZHRoO1xuICAgICAgICB0aGlzLnBvc2l0aW9uc1tpICsgM10gPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSArIDRdID0gdGV4WDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSArIDVdID0gdGV4WTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSArIDZdID0gdGV4V2lkdGg7XG4gICAgICAgIHRoaXMucG9zaXRpb25zW2kgKyA3XSA9IHRleEhlaWdodDtcblxuICAgICAgICB0aGlzLmRyYXdzKytcbiAgICB9XG5cbiAgICBnbFN0YXJ0Q29udGV4dCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBnbENvbW1pdENvbnRleHQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRyYXdzID4gMCAmJiB0aGlzLnJnYmFzICYmIHRoaXMuZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIDAsIHRoaXMucmdiYXMuc3ViYXJyYXkoMCwgdGhpcy5kcmF3cyAqIDUpKTtcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9uLmRyYXdFbGVtZW50c0luc3RhbmNlZEFOR0xFKHRoaXMuZ2wuVFJJQU5HTEVTLCA2LCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIDAsIHRoaXMuZHJhd3MpO1xuICAgICAgICAgICAgdGhpcy5kcmF3cyA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJTdGFydCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCh0aGlzLnRyYW5zZm9ybUN0eCBhcyBhbnkpLnJlc2V0KSB7XG4gICAgICAgICAgICAodGhpcy50cmFuc2Zvcm1DdHggYXMgYW55KS5yZXNldCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gb2xkIHdheSBvZiByZXNldCBhbGwgdGhlIHN0YXRlXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCArPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmF3cyA9IDA7XG4gICAgICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuZ2xTdGFydENvbnRleHQoKTtcbiAgICB9XG5cblxuICAgIHJlbmRlckVuZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nbENvbW1pdENvbnRleHQoKTtcbiAgICB9XG5cbiAgICBhcHBseUZvbnQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgc21vb3RoKCk6IHZvaWQge1xuICAgIH1cblxuICAgIGNvcHkoKTogQml0bWFwIHtcbiAgICAgICAgcmV0dXJuIE9wZW5HTEdyYXBoaWNzSW1wbC5OVUxMX0NPUFk7XG4gICAgfVxuXG4gICAgZ2V0T2Zmc2NyZWVuKCk6IE9mZnNjcmVlbiB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5vZmZzY3JlZW47XG4gICAgfVxuXG4gICAgY2xpcCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdDEgPSB0aGlzLnRyYW5zZm9ybUN0eC5nZXRUcmFuc2Zvcm0oKS50cmFuc2Zvcm1Qb2ludCh7IHgsIHkgfSk7XG4gICAgICAgIGNvbnN0IHQyID0gdGhpcy50cmFuc2Zvcm1DdHguZ2V0VHJhbnNmb3JtKCkudHJhbnNmb3JtUG9pbnQoeyB4OiB4ICsgd2lkdGggLCB5OiB5ICsgaGVpZ2h0IH0pO1xuXG4gICAgICAgIHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWCA9IHQxLng7XG4gICAgICAgIHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWSA9IHQxLnk7XG4gICAgICAgIHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWDIgPSB0Mi54O1xuICAgICAgICB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFkyID0gdDIueTtcbiAgICB9XG5cbiAgICBjcmVhdGVPZmZzY3JlZW4oKTogT2Zmc2NyZWVuIHtcbiAgICAgICAgdGhpcy5vZmZzY3JlZW5JZCsrO1xuICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT3BlbkdsT2Zmc2NyZWVuKHRoaXMuZ2wsIHRoaXMsIHRoaXMub2Zmc2NyZWVuSWQpO1xuICAgICAgICB0aGlzLm9mZnNjcmVlbnMucHVzaChvZmZzY3JlZW4pO1xuICAgICAgICBpZiAodGhpcy5vZmZzY3JlZW5zLmxlbmd0aCA9PT0gNTApIHtcbiAgICAgICAgICAgIEd1dGVMb2cubG9nKFwiNTAgb2Zmc2NyZWVucyBoYXZlIGJlZW4gY3JlYXRlZCFcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2Zmc2NyZWVuO1xuICAgIH1cblxuICAgIGRyYXdUb09mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbiB8IG51bGwpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub2Zmc2NyZWVuKSB7XG4gICAgICAgICAgICAodGhpcy5vZmZzY3JlZW4gYXMgT3BlbkdsT2Zmc2NyZWVuKS51bnVzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vZmZzY3JlZW4gPSBzY3JlZW47XG5cbiAgICAgICAgaWYgKHRoaXMub2Zmc2NyZWVuKSB7XG4gICAgICAgICAgICAodGhpcy5vZmZzY3JlZW4gYXMgT3BlbkdsT2Zmc2NyZWVuKS51c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdPZmZzY3JlZW4oc2NyZWVuOiBPZmZzY3JlZW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnNoYWRlclByb2dyYW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNjcmVlbiA9IChzY3JlZW4gYXMgT3BlbkdsT2Zmc2NyZWVuKTtcbiAgICAgICAgdGhpcy5nbENvbW1pdENvbnRleHQoKTtcblxuICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmKHRoaXMuZ2V0VW5pZm9ybUxvYyhcInVUZXhTaXplXCIpLCBvZmZzY3JlZW4ud2lkdGgsIG9mZnNjcmVlbi5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgb2Zmc2NyZWVuLnRleHR1cmUpO1xuICAgICAgICB0aGlzLl9kcmF3SW1hZ2UoLTEwMCwgMCwgb2Zmc2NyZWVuLmhlaWdodCwgb2Zmc2NyZWVuLndpZHRoLCAtb2Zmc2NyZWVuLmhlaWdodCwgMCwgMCwgb2Zmc2NyZWVuLndpZHRoLCBvZmZzY3JlZW4uaGVpZ2h0LCAweEZGRkZGRjAwLCAyNTUpO1xuICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmKHRoaXMuZ2V0VW5pZm9ybUxvYyhcInVUZXhTaXplXCIpLCB0aGlzLnRleFdpZHRoLCB0aGlzLnRleEhlaWdodCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmN1cnJlbnRUZXh0dXJlKTtcbiAgICAgICAgdGhpcy5nbFN0YXJ0Q29udGV4dCgpO1xuICAgIH1cblxuICAgIGRyYXdTY2FsZWRPZmZzY3JlZW4oc2NyZWVuOiBPZmZzY3JlZW4sIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuc2hhZGVyUHJvZ3JhbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gKHNjcmVlbiBhcyBPcGVuR2xPZmZzY3JlZW4pO1xuICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgIHRoaXMuZ2xTdGFydENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nZXRVbmlmb3JtTG9jKFwidVRleFNpemVcIiksIG9mZnNjcmVlbi53aWR0aCwgb2Zmc2NyZWVuLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCBvZmZzY3JlZW4udGV4dHVyZSk7XG4gICAgICAgIHRoaXMuX2RyYXdJbWFnZSgtMTAwLCAwLCBvZmZzY3JlZW4uaGVpZ2h0LCBvZmZzY3JlZW4ud2lkdGgsIC1vZmZzY3JlZW4uaGVpZ2h0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCAweEZGRkZGRjAwLCAyNTUpO1xuICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmKHRoaXMuZ2V0VW5pZm9ybUxvYyhcInVUZXhTaXplXCIpLCB0aGlzLnRleFdpZHRoLCB0aGlzLnRleEhlaWdodCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmN1cnJlbnRUZXh0dXJlKTtcbiAgICAgICAgdGhpcy5nbFN0YXJ0Q29udGV4dCgpO1xuICAgIH1cblxuICAgIGRyYXdTY2FsZWRPZmZzY3JlZW5TZWdtZW50KHNjcmVlbjogT2Zmc2NyZWVuLCBzeDogbnVtYmVyLCBzeTogbnVtYmVyLCBzd2lkdGg6IG51bWJlciwgc2hlaWdodDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnNoYWRlclByb2dyYW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNjcmVlbiA9IChzY3JlZW4gYXMgT3BlbkdsT2Zmc2NyZWVuKTtcbiAgICAgICAgdGhpcy5nbENvbW1pdENvbnRleHQoKTtcblxuICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmKHRoaXMuZ2V0VW5pZm9ybUxvYyhcInVUZXhTaXplXCIpLCBvZmZzY3JlZW4ud2lkdGgsIG9mZnNjcmVlbi5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgb2Zmc2NyZWVuLnRleHR1cmUpO1xuICAgICAgICB0aGlzLl9kcmF3SW1hZ2UoLTEwMCwgc3gsIG9mZnNjcmVlbi5oZWlnaHQtc3ksIHN3aWR0aCwgLXNoZWlnaHQsIHgsIHksIHdpZHRoLCBoZWlnaHQsIDB4RkZGRkZGMDAsIDI1NSk7XG4gICAgICAgIHRoaXMuZ2xDb21taXRDb250ZXh0KCk7XG5cbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nZXRVbmlmb3JtTG9jKFwidVRleFNpemVcIiksIHRoaXMudGV4V2lkdGgsIHRoaXMudGV4SGVpZ2h0KTtcbiAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuY3VycmVudFRleHR1cmUpO1xuICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgZmlsbFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2w6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgcmdiYSA9IGNvbFRvTnVtYmVyKGNvbCk7XG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLmFscGhhIDwgMjU1ID8gdGhpcy5hbHBoYSA6IChyZ2JhICUgMjU2KTtcbiAgICAgICAgaWYgKGEgPCAyNTUpIHtcbiAgICAgICAgICAgIHJnYmEgPSAocmdiYSAmIDB4RkZGRkZGMDApIHwgYTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kcmF3SW1hZ2UoMCwgMCwgMCwgMSwgMSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgcmdiYSwgYSlcbiAgICB9XG5cbiAgICBmaWxsQ2lyY2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY29sOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBkcmF3Q2lyY2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY29sOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBzZXRMaW5lRGFzaChzZWdtZW50czogbnVtYmVyW10pOiB2b2lkIHtcbiAgICB9XG5cbiAgICBkcmF3TGluZSh4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyLCBjb2w6IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBkcmF3Qml0bWFwKHg6IG51bWJlciwgeTogbnVtYmVyLCBiaXRtYXA6IEJpdG1hcCk6IHZvaWQge1xuICAgICAgICBpZiAoYml0bWFwKSB7XG4gICAgICAgICAgICBiaXRtYXAuZHJhdyh0aGlzLCB4LCB5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdTY2FsZWRCaXRtYXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBiaXRtYXA6IEJpdG1hcCk6IHZvaWQge1xuICAgICAgICBpZiAoYml0bWFwKSB7XG4gICAgICAgICAgICBiaXRtYXAuZHJhd1NjYWxlZCh0aGlzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nbENvbW1pdENvbnRleHQoKTtcblxuICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuWkVSTywgdGhpcy5nbC5aRVJPKTtcbiAgICAgICAgdGhpcy5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBcInJnYmEoMCwwLDAsMClcIik7XG4gICAgICAgIHRoaXMuZ2xDb21taXRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuU1JDX0FMUEhBLCB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xuXG4gICAgICAgIHRoaXMuZ2xTdGFydENvbnRleHQoKTtcbiAgICB9XG5cbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmdsLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgfVxuXG4gICAgc2V0Rm9udChmb250OiBGb250KTogdm9pZCB7XG4gICAgICAgIC8vIElHTk9SRURcbiAgICB9XG5cbiAgICBzZXRDb21wb3NpdGUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChuYW1lID09PSBcIm11bHRpcGx5XCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2xDb21taXRDb250ZXh0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2xTdGFydENvbnRleHQoKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuWkVSTywgdGhpcy5nbC5TUkNfQ09MT1IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lID09PSBcInNvdXJjZS1vdmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2xDb21taXRDb250ZXh0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2xTdGFydENvbnRleHQoKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuU1JDX0FMUEhBLCB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Rm9udFNpemUoc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vIElHTk9SRURcbiAgICB9XG5cbiAgICBkcmF3U3RyaW5nKHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGNvbDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIC8vIElHTk9SRURcbiAgICB9XG5cbiAgICB0cmFuc2xhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1DdHgudHJhbnNsYXRlKHgsIHkpO1xuICAgIH1cblxuICAgIHNjYWxlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtQ3R4LnNjYWxlKHgsIHkpO1xuICAgIH1cblxuICAgIHB1c2goKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2F2ZXMrKztcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1DdHguc2F2ZSgpO1xuICAgIH1cblxuICAgIHBvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zYXZlcy0tO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUN0eC5yZXN0b3JlKCk7XG4gICAgICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuICAgIH1cblxuICAgIGdldFdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB9XG5cbiAgICBnZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB9XG5cbiAgICBmaXRTY3JlZW4ocGl4ZWxTY2FsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHdpZHRoOiBudW1iZXIgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICAgICAgICBjb25zdCBoZWlnaHQ6IG51bWJlciA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKVxuICAgICAgICBjb25zdCByZWFsV2lkdGg6IG51bWJlciA9IE1hdGguZmxvb3Iod2lkdGggLyBwaXhlbFNjYWxlKSAqIHBpeGVsU2NhbGU7XG4gICAgICAgIGNvbnN0IHJlYWxIZWlnaHQ6IG51bWJlciA9IE1hdGguZmxvb3IoaGVpZ2h0IC8gcGl4ZWxTY2FsZSkgKiBwaXhlbFNjYWxlO1xuICAgICAgICBjb25zdCB2aXJ0dWFsV2lkdGg6IG51bWJlciA9IHJlYWxXaWR0aCAvIHBpeGVsU2NhbGU7XG4gICAgICAgIGNvbnN0IHZpcnR1YWxIZWlnaHQ6IG51bWJlciA9IHJlYWxIZWlnaHQgLyBwaXhlbFNjYWxlO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdmlydHVhbFdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB2aXJ0dWFsSGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHJlYWxXaWR0aCArIFwicHhcIjtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gcmVhbEhlaWdodCArIFwicHhcIjtcbiAgICB9XG5cbiAgICBnZXRTdHJpbmdXaWR0aCh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBzZXRBbHBoYShhbHBoYTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5hbHBoYSA9IE1hdGguZmxvb3IoYWxwaGEgKiAyNTUpO1xuICAgIH1cblxuICAgIGdldFRyYW5zZm9ybSgpOiBET01NYXRyaXgge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1DdHguZ2V0VHJhbnNmb3JtKCk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBPZmZzY3JlZW4gfSBmcm9tIFwiLi4vR3JhcGhpY3NcIjtcbmltcG9ydCB7IE9wZW5HTEdyYXBoaWNzSW1wbCB9IGZyb20gXCIuL09wZW5HTEdyYXBoaWNzSW1wbFwiO1xuaW1wb3J0IHsgUmVuZGVyaW5nU3RhdGUgfSBmcm9tIFwiLi9SZW5kZXJpbmdTdGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgT3BlbkdsT2Zmc2NyZWVuIGltcGxlbWVudHMgT2Zmc2NyZWVuLCBSZW5kZXJpbmdTdGF0ZSB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB0ZXh0dXJlOiBXZWJHTFRleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xuICAgIGZiOiBXZWJHTEZyYW1lYnVmZmVyIHwgbnVsbCA9IG51bGw7IFxuICAgIGdyYXBoaWNzOiBPcGVuR0xHcmFwaGljc0ltcGw7XG4gICAgaWQ6IG51bWJlciA9IDA7XG4gICAgaW51c2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNsaXBYOiBudW1iZXIgPSAwO1xuICAgIGNsaXBZOiBudW1iZXIgPSAwO1xuICAgIGNsaXBYMjogbnVtYmVyID0gMDtcbiAgICBjbGlwWTI6IG51bWJlciA9IDA7XG4gICAgYWxwaGE6IG51bWJlciA9IDI1NTtcbiAgICByZWZyZXNoUmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIGdyYXBoaWNzOiBPcGVuR0xHcmFwaGljc0ltcGwsIGlkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLndpZHRoID0gMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gZ3JhcGhpY3M7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBnZXRXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICBnZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIHJlY292ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmIgPSBudWxsO1xuICAgICAgICB0aGlzLnRleHR1cmUgPSBudWxsO1xuICAgICAgICB0aGlzLnJlZnJlc2hSZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0RGltZW5zaW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB1c2UoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5ncmFwaGljcy5zaGFkZXJQcm9ncmFtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbnVzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoUmVxdWlyZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5nbENvbW1pdENvbnRleHQoKTtcblxuICAgICAgICB0aGlzLmludXNlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5mYik7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmKHRoaXMuZ3JhcGhpY3MuZ2V0VW5pZm9ybUxvYyhcInVDYW52YXNTaXplXCIpLCBNYXRoLmZsb29yKHRoaXMud2lkdGggLyAyKSwgTWF0aC5mbG9vcih0aGlzLmhlaWdodCAvIDIpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2wudmlld3BvcnQoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY3VycmVudENvbnRleHRTdGF0ZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MucHVzaCgpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLnRyYW5zZm9ybUN0eC5yZXNldFRyYW5zZm9ybSgpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLnJlc2V0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5nbFN0YXJ0Q29udGV4dCgpO1xuICAgIH1cblxuICAgIHVudXNlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZ3JhcGhpY3Muc2hhZGVyUHJvZ3JhbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmludXNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW51c2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5nbENvbW1pdENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jdXJyZW50Q29udGV4dFN0YXRlID0gdGhpcy5ncmFwaGljcztcblxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmdyYXBoaWNzLmNhbnZhcy53aWR0aCwgdGhpcy5ncmFwaGljcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5ncmFwaGljcy5nZXRVbmlmb3JtTG9jKFwidUNhbnZhc1NpemVcIiksIHRoaXMuZ3JhcGhpY3MuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5ncmFwaGljcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MucG9wKCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZ2xTdGFydENvbnRleHQoKTtcbiAgICB9XG4gICAgXG4gICAgbmVlZHNSZWZyZXNoKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZyZXNoUmVxdWlyZWQ7XG4gICAgfVxuXG4gICAgcmVsZWFzZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVUZXh0dXJlKHRoaXMudGV4dHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlRnJhbWVidWZmZXIodGhpcy5mYik7XG4gICAgICAgICAgICB0aGlzLmZiID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgfVxuXG4gICAgc2V0RGltZW5zaW9uKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmhlaWdodCAhPT0gaGVpZ2h0IHx8ICF0aGlzLmZiKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2UoKTtcblxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGludGVybmFsRm9ybWF0ID0gdGhpcy5nbC5SR0JBO1xuICAgICAgICAgICAgY29uc3QgYm9yZGVyID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuZ2wuUkdCQTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdsLlVOU0lHTkVEX0JZVEU7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCxcbiAgICAgICAgICAgICAgICB3aWR0aCwgaGVpZ2h0LCBib3JkZXIsXG4gICAgICAgICAgICAgICAgZm9ybWF0LCB0eXBlLCBkYXRhKTtcblxuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX01BR19GSUxURVIsIHRoaXMuZ2wuTkVBUkVTVCk7XG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgdGhpcy5nbC5ORUFSRVNUKTtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1MsIHRoaXMuZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfV1JBUF9ULCB0aGlzLmdsLkNMQU1QX1RPX0VER0UpO1xuXG4gICAgICAgICAgICB0aGlzLmZiID0gdGhpcy5nbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5mYik7XG4gICAgICAgICAgICB0aGlzLmdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZ2wuQ09MT1JfQVRUQUNITUVOVDAsIHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlLCBsZXZlbCk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2wuY2xlYXJDb2xvcigwLDAsMCwxKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ3JhcGhpY3MuY3VycmVudFRleHR1cmUpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgQml0bWFwIH0gZnJvbSBcIi4uL0JpdG1hcFwiO1xuaW1wb3J0IHsgVGlsZXNldCB9IGZyb20gXCIuLi9UaWxlc2V0XCI7XG5pbXBvcnQgeyBQYWxldHRlIH0gZnJvbSBcIi4uL2ltcGwvUGFsZXR0ZVwiO1xuaW1wb3J0IHsgT3BlbkdMR3JhcGhpY3NJbXBsIH0gZnJvbSBcIi4vT3BlbkdMR3JhcGhpY3NJbXBsXCI7XG5pbXBvcnQgeyBJT3BlbkdMQml0bWFwIH0gZnJvbSBcIi4vT3BlbkdMQml0bWFwXCI7XG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCIuLi9HcmFwaGljc1wiO1xuaW1wb3J0IHsgR3V0ZUxvZyB9IGZyb20gXCIuLi9Mb2dcIjtcblxuY2xhc3MgT3BlbkdMVGlsZSBpbXBsZW1lbnRzIEJpdG1hcCwgSU9wZW5HTEJpdG1hcCB7XG4gICAgcGFyZW50OiBPcGVuR0xUaWxlc2V0SW1wbDtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGxvYWRlZDogYm9vbGVhbjtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHNjYWxlOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nID0gXCJ0aWxlXCI7XG4gICAgdGV4WDogbnVtYmVyID0gMDtcbiAgICB0ZXhZOiBudW1iZXIgPSAwO1xuICAgIHRleEluZGV4OiBudW1iZXIgPSAwO1xuICAgIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIGNvbDogbnVtYmVyID0gMHhGRkZGRkYwMDtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IE9wZW5HTFRpbGVzZXRJbXBsLCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIH1cblxuICAgIGNvcHlXaXRoQ29sKHJnYmE6IG51bWJlcik6IE9wZW5HTFRpbGUge1xuICAgICAgICBjb25zdCBjb3B5ID0gbmV3IE9wZW5HTFRpbGUodGhpcy5wYXJlbnQsIHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5zY2FsZSk7XG4gICAgICAgIGNvcHkubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgY29weS5jb2wgPSByZ2JhO1xuICAgICAgICBjb3B5LnRleFggPSB0aGlzLnRleFg7XG4gICAgICAgIGNvcHkudGV4WSA9IHRoaXMudGV4WTtcblxuICAgICAgICByZXR1cm4gY29weTtcbiAgICB9XG5cbiAgICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZyA9IChncmFwaGljcyBhcyBPcGVuR0xHcmFwaGljc0ltcGwpO1xuICAgICAgICB0aGlzLnRleFggPSB0aGlzLnBhcmVudC50ZXhYICsgdGhpcy54O1xuICAgICAgICB0aGlzLnRleFkgPSB0aGlzLnBhcmVudC50ZXhZICsgdGhpcy55O1xuICAgICAgICB0aGlzLnRleEluZGV4ID0gdGhpcy5wYXJlbnQudGV4SW5kZXg7XG5cbiAgICAgICAgZy5fZHJhd0JpdG1hcCh0aGlzLCB4LCB5LCBNYXRoLmZsb29yKHRoaXMud2lkdGggKiB0aGlzLnNjYWxlKSwgTWF0aC5mbG9vcih0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGUpLCB0aGlzLmNvbCk7XG4gICAgfVxuXG4gICAgZHJhd1NjYWxlZChncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBnID0gKGdyYXBoaWNzIGFzIE9wZW5HTEdyYXBoaWNzSW1wbCk7XG4gICAgICAgIHRoaXMudGV4WCA9IHRoaXMucGFyZW50LnRleFggKyB0aGlzLng7XG4gICAgICAgIHRoaXMudGV4WSA9IHRoaXMucGFyZW50LnRleFkgKyB0aGlzLnk7XG4gICAgICAgIHRoaXMudGV4SW5kZXggPSB0aGlzLnBhcmVudC50ZXhJbmRleDtcblxuICAgICAgICBnLl9kcmF3Qml0bWFwKHRoaXMsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHRoaXMuY29sKTtcbiAgICB9XG5cbiAgICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wZW5HTFRpbGVzZXRJbXBsIGltcGxlbWVudHMgVGlsZXNldCwgSU9wZW5HTEJpdG1hcCB7XG4gICAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgdGlsZVdpZHRoOiBudW1iZXI7XG4gICAgdGlsZUhlaWdodDogbnVtYmVyO1xuICAgIG9yaWdpbmFsVGlsZVdpZHRoOiBudW1iZXI7XG4gICAgb3JpZ2luYWxUaWxlSGVpZ2h0OiBudW1iZXI7XG4gICAgaW1hZ2U6IGFueSB8IG51bGw7XG4gICAgYml0bWFwczogT3BlbkdMVGlsZVtdID0gW107XG4gICAgc2NhbmxpbmU6IG51bWJlciA9IDA7XG4gICAgdGlsZUNvdW50OiBudW1iZXIgPSAwO1xuICAgIHNjYWxlOiBudW1iZXI7XG4gICAgb25Mb2FkZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRleFg6IG51bWJlciA9IDA7XG4gICAgdGV4WTogbnVtYmVyID0gMDtcbiAgICB0ZXhJbmRleDogbnVtYmVyID0gMDtcbiAgICB0aW50VGlsZXM6IFJlY29yZDxzdHJpbmcsIE9wZW5HTFRpbGVbXT4gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKGdyYXBoaWNzOiBPcGVuR0xHcmFwaGljc0ltcGwsIHVybDogc3RyaW5nLCBkYXRhVXJsTG9hZGVyOiBQcm9taXNlPEJsb2I+IHwgdW5kZWZpbmVkLCB0aWxlV2lkdGg6IG51bWJlciwgdGlsZUhlaWdodDogbnVtYmVyLCBzY2FsZTogbnVtYmVyID0gMSwgcGFsOiBQYWxldHRlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudGlsZVdpZHRoID0gdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCA9IHRpbGVXaWR0aDtcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gdGhpcy5vcmlnaW5hbFRpbGVIZWlnaHQgPSB0aWxlSGVpZ2h0O1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgIHRoaXMubmFtZSA9IHVybDtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIHRoaXMuaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIEd1dGVMb2cubG9nKFwiRXJyb3IgbG9hZGluZzogXCIgKyB1cmwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY2FubGluZSA9IE1hdGguZmxvb3IodGhpcy5pbWFnZSEud2lkdGggLyB0aGlzLnRpbGVXaWR0aCk7XG4gICAgICAgICAgICBjb25zdCBkZXB0aDogbnVtYmVyID0gTWF0aC5mbG9vcih0aGlzLmltYWdlIS5oZWlnaHQgLyB0aGlzLnRpbGVIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy50aWxlQ291bnQgPSBkZXB0aCAqIHRoaXMuc2NhbmxpbmU7XG5cbiAgICAgICAgICAgIGlmIChwYWwpIHtcbiAgICAgICAgICAgICAgICBwYWwuYWRqdXN0SW1hZ2UodGhpcy5pbWFnZSEpLnRoZW4oKGltYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjdXQgdGhlIGltYWdlIGludG8gcGllY2VzXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgZGVwdGg7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnNjYW5saW5lOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJpdG1hcHMucHVzaChuZXcgT3BlbkdMVGlsZSh0aGlzLCB0aGlzLmltYWdlISwgeCAqIHRoaXMudGlsZVdpZHRoLCB5ICogdGhpcy50aWxlSGVpZ2h0LCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0LCBzY2FsZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVdpZHRoICo9IHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVIZWlnaHQgKj0gc2NhbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkxvYWRlZCgpO1xuICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5yZWdpc3RlckltYWdlKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY3V0IHRoZSBpbWFnZSBpbnRvIHBpZWNlc1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgZGVwdGg7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc2NhbmxpbmU7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaXRtYXBzLnB1c2gobmV3IE9wZW5HTFRpbGUodGhpcywgdGhpcy5pbWFnZSEsIHggKiB0aGlzLnRpbGVXaWR0aCwgeSAqIHRoaXMudGlsZUhlaWdodCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCwgc2NhbGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVXaWR0aCAqPSBzY2FsZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVIZWlnaHQgKj0gc2NhbGU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uTG9hZGVkKCk7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MucmVnaXN0ZXJJbWFnZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGRhdGFVcmxMb2FkZXIpIHtcbiAgICAgICAgICAgIGRhdGFVcmxMb2FkZXIudGhlbigoYmxvYjogQmxvYikgPT4ge1xuICAgICAgICAgICAgICAgIHZhciB1cmxDcmVhdG9yID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UhLnNyYyA9IHVybENyZWF0b3IuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlLndpZHRoO1xuICAgIH1cblxuICAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIH1cblxuICAgIGRyYXdTY2FsZWQoZ3JhcGhpY3M6IEdyYXBoaWNzLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBnZXRCbG9ja0NvbG9yVGlsZSh0aWxlOiBudW1iZXIsIHRpbnROYW1lOiBzdHJpbmcsIHJnYmE6IG51bWJlcltdKTogQml0bWFwIHtcbiAgICAgICAgbGV0IHRpbGVzID0gdGhpcy50aW50VGlsZXNbdGludE5hbWVdO1xuICAgICAgICBpZiAoIXRpbGVzKSB7XG4gICAgICAgICAgdGlsZXMgPSB0aGlzLnRpbnRUaWxlc1t0aW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgdGlsZVJlY29yZCA9IHRpbGVzW3RpbGVdO1xuICAgICAgICBpZiAoIXRpbGVSZWNvcmQpIHtcbiAgICAgICAgICAgIHJnYmFbMF0gKj0gMjU1O1xuICAgICAgICAgICAgcmdiYVsxXSAqPSAyNTU7XG4gICAgICAgICAgICByZ2JhWzJdICo9IDI1NTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAocmdiYVswXSAqICgyNTYgKiAyNTYgKiAyNTYpKSArIChyZ2JhWzFdICogKDI1NiAqIDI1NikpICsgKHJnYmFbMl0gKiAyNTYpICsgTWF0aC5mbG9vcihyZ2JhWzNdICogMjU1KTtcbiAgICAgICAgICAgIHRpbGVzW3RpbGVdID0gdGlsZVJlY29yZCA9IHRoaXMuZ2V0VGlsZSh0aWxlKS5jb3B5V2l0aENvbCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGlsZVJlY29yZDtcbiAgICB9XG5cbiAgICBnZXRTaGFkZWRUaWxlKHRpbGU6IG51bWJlciwgdGludE5hbWU6IHN0cmluZywgc2hhZGU6IG51bWJlcik6IEJpdG1hcCB7XG4gICAgICAgIGxldCB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXTtcbiAgICAgICAgaWYgKCF0aWxlcykge1xuICAgICAgICAgIHRpbGVzID0gdGhpcy50aW50VGlsZXNbdGludE5hbWVdID0gW107XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGV0IHRpbGVSZWNvcmQgPSB0aWxlc1t0aWxlXTtcbiAgICAgICAgaWYgKCF0aWxlUmVjb3JkKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICgyNTUgKiAoMjU2ICogMjU2ICogMjU2KSkgKyAoMjU1ICogKDI1NiAqIDI1NikpICsgKDI1NSAqIDI1NikgKyBNYXRoLmZsb29yKHNoYWRlICogMjU1KTtcbiAgICAgICAgICAgIHRpbGVzW3RpbGVdID0gdGlsZVJlY29yZCA9IHRoaXMuZ2V0VGlsZSh0aWxlKS5jb3B5V2l0aENvbCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGlsZVJlY29yZDtcbiAgICB9XG5cbiAgICBnZXRUaW50ZWRUaWxlKHRpbGU6IG51bWJlciwgdGludE5hbWU6IHN0cmluZywgc291cmNlOiBudW1iZXJbXSk6IEJpdG1hcCB7XG4gICAgICAgIGxldCB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXTtcbiAgICAgICAgaWYgKCF0aWxlcykge1xuICAgICAgICAgIHRpbGVzID0gdGhpcy50aW50VGlsZXNbdGludE5hbWVdID0gW107XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGV0IHRpbGVSZWNvcmQgPSB0aWxlc1t0aWxlXTtcbiAgICAgICAgaWYgKCF0aWxlUmVjb3JkKSB7XG4gICAgICAgICAgICBjb25zdCByZ2JhID0gWy4uLnNvdXJjZV07XG4gICAgICAgICAgICByZ2JhWzBdICo9IDI1NTtcbiAgICAgICAgICAgIHJnYmFbMV0gKj0gMjU1O1xuICAgICAgICAgICAgcmdiYVsyXSAqPSAyNTU7XG4gICAgICAgICAgICBpZiAoIXJnYmFbM10pIHtcbiAgICAgICAgICAgICAgICByZ2JhWzNdID0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAocmdiYVswXSAqICgyNTYgKiAyNTYgKiAyNTYpKSArIChyZ2JhWzFdICogKDI1NiAqIDI1NikpICsgKHJnYmFbMl0gKiAyNTYpICsgTWF0aC5mbG9vcihyZ2JhWzNdICogMjU1KTtcblxuICAgICAgICAgICAgdGlsZXNbdGlsZV0gPSB0aWxlUmVjb3JkID0gdGhpcy5nZXRUaWxlKHRpbGUpLmNvcHlXaXRoQ29sKHZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aWxlUmVjb3JkO1xuICAgIH1cblxuICAgIG1vZGlmeShtb2RpZmljYXRpb246IChpbWFnZURhdGE6IEltYWdlRGF0YSkgPT4gdm9pZCk6IFRpbGVzZXQge1xuICAgICAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5pbWFnZSEud2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmltYWdlIS5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIDAsIDApO1xuICAgICAgICAgICAgY29uc3QgaWQ6IEltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvbihpZCk7XG4gICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKGlkLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICBmb3IgKGNvbnN0IHRpbGUgb2YgdGhpcy5iaXRtYXBzKSB7XG4gICAgICAgICAgICB0aWxlLmltYWdlID0gdGhpcy5pbWFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFRpbGVzQWNyb3NzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5saW5lO1xuICAgIH1cblxuICAgIGdldFRpbGVXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlV2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0VGlsZUhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlSGVpZ2h0O1xuICAgIH1cblxuICAgIGdldFRpbGVDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlQ291bnQ7XG4gICAgfVxuXG4gICAgaW5pdE9uRmlyc3RDbGljaygpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBnZXRUaWxlKHRpbGU6IG51bWJlcik6IE9wZW5HTFRpbGUge1xuICAgICAgICByZXR1cm4gdGhpcy5iaXRtYXBzW3RpbGVdO1xuICAgIH1cblxufSIsImltcG9ydCB7IE1hcE5vZGUgfSBmcm9tIFwiLi9NYXBOb2RlXCI7XG5pbXBvcnQgeyBQYXRoIH0gZnJvbSBcIi4vUGF0aFwiO1xuaW1wb3J0IHsgUGF0aEZpbmRlck1hcCB9IGZyb20gXCIuL1BhdGhGaW5kZXJNYXBcIjtcbmltcG9ydCB7IFBhdGhNb3ZlciB9IGZyb20gXCIuL1BhdGhNb3ZlclwiO1xuXG5leHBvcnQgY2xhc3MgQVN0YXJQYXRoRmluZGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIE5PUlRIX1RPX1NPVVRIID0gMDtcbiAgICBwdWJsaWMgc3RhdGljIEVBU1RfVE9fV0VTVCA9IDE7XG4gICAgcHVibGljIHN0YXRpYyBTT1VUSF9UT19OT1JUSCA9IDI7XG4gICAgcHVibGljIHN0YXRpYyBXRVNUX1RPX0VBU1QgPSAzO1xuICAgIHB1YmxpYyBzdGF0aWMgTk9ORSA9IDQ7XG5cbiAgICBwcml2YXRlIG9iamVjdFBvb2w6IEFycmF5PE1hcE5vZGU+ID0gW107XG4gICAgcHJpdmF0ZSBvcGVuTGlzdDogQXJyYXk8TWFwTm9kZT4gPSBbXTtcbiAgICBwcml2YXRlIHBhcmVudExpc3Q6IEFycmF5PE1hcE5vZGU+ID0gW107XG4gICAgcHJpdmF0ZSBvcGVuOiBBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xuICAgIHByaXZhdGUgY2xvc2VkOiBBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xuXG4gICAgcHJpdmF0ZSBtYXAhOiBQYXRoRmluZGVyTWFwO1xuICAgIHByaXZhdGUgaGVpZ2h0ITogbnVtYmVyO1xuICAgIHByaXZhdGUgd2lkdGghOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIHBhdGhGaW5kQ291bnRlcjogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIG1vdmVyITogUGF0aE1vdmVyO1xuICAgIHByaXZhdGUgdHghOiBudW1iZXJbXTtcbiAgICBwcml2YXRlIHR5ITogbnVtYmVyW107XG4gICAgcHJpdmF0ZSBjeCE6IG51bWJlcjtcbiAgICBwcml2YXRlIGN5ITogbnVtYmVyO1xuICAgIHByaXZhdGUgbWF4ITogbnVtYmVyO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG1hcDogUGF0aEZpbmRlck1hcCkge1xuICAgICAgICB0aGlzLnNldE1hcChtYXApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRNYXAobWFwOiBQYXRoRmluZGVyTWFwKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBtYXAuZ2V0TWFwV2lkdGgoKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBtYXAuZ2V0TWFwSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuXG4gICAgICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSBuZXcgQXJyYXk8QXJyYXk8bnVtYmVyPj4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZCA9IG5ldyBBcnJheTxBcnJheTxudW1iZXI+PigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG8gPSB0aGlzLm9wZW5baV0gXG4gICAgICAgICAgICBsZXQgYyA9IHRoaXMuY2xvc2VkW2ldO1xuXG4gICAgICAgICAgICBpZiAoIW8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5baV0gPSBvID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDU7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBvLnB1c2goMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRbaV0gPSBjID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDU7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjLnB1c2goMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDU7IGorKykge1xuICAgICAgICAgICAgICAgIG9bal0gPSAwO1xuICAgICAgICAgICAgICAgIGNbal0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHRoaXMub3Blbkxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UG9vbC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2YgdGhpcy5wYXJlbnRMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdFBvb2wucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcmVudExpc3QgPSBbXVxuICAgICAgICB0aGlzLm9wZW5MaXN0ID0gW11cbiAgICAgICAgdGhpcy5wYXRoRmluZENvdW50ZXIrKztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlUGF0aChub2RlOiBNYXBOb2RlKTogUGF0aCB7XG4gICAgICAgIHZhciBjdXJyZW50OiBNYXBOb2RlIHwgbnVsbCA9IG5vZGU7XG4gICAgICAgIHZhciBwYXRoOiBQYXRoID0gbmV3IFBhdGgoKTtcblxuICAgICAgICB3aGlsZSAoY3VycmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBwYXRoLmFkZChjdXJyZW50LngsIGN1cnJlbnQueSk7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJsb2NrZWQoc3g6IG51bWJlciwgc3k6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLm1hcC5sb2NhdGlvbkRpc2NvdmVyZWQoeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmJsb2NrZWQodGhpcy5tb3ZlciwgbnVsbCwgc3gsIHN5LCB4LCB5LCB0aGlzLmF0VGFyZ2V0KHgsIHkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGF0VGFyZ2V0KHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50eC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdHggPSB0aGlzLnR4W2ldXG4gICAgICAgICAgICBjb25zdCB0eSA9IHRoaXMudHlbaV1cbiAgICAgICAgICAgIGlmICh0eCA+PSB4ICYmIHR4IDwgeCArIHRoaXMubW92ZXIuZ2V0VGlsZXNXaWR0aCgpXG4gICAgICAgICAgICAgICAgJiYgdHkgPj0geSAmJiB0eSA8IHkgKyB0aGlzLm1vdmVyLmdldFRpbGVzSGVpZ2h0KCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZFBhdGgobW92ZXI6IFBhdGhNb3ZlciwgdHg6IG51bWJlciwgdHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIG1heDogbnVtYmVyKTogUGF0aCB8IG51bGwge1xuXG4gICAgICAgIHR4ID0gTWF0aC5mbG9vcih0eCk7XG4gICAgICAgIHR5ID0gTWF0aC5mbG9vcih0eSk7XG5cblxuICAgICAgICB0aGlzLm1heCA9IG1heDtcbiAgICAgICAgdGhpcy5tb3ZlciA9IG1vdmVyO1xuICAgICAgICB0aGlzLnR4ID0gW107XG4gICAgICAgIHRoaXMudHkgPSBbXTtcbiAgICAgICAgLy8gY2VudHJhbCBwb2ludCBmb3IgaGV1cmlzdGljIG9yZGVyaW5nXG4gICAgICAgIHRoaXMuY3ggPSB0eCArIHdpZHRoIC8gMlxuICAgICAgICB0aGlzLmN5ID0gdHkgKyBoZWlnaHQgLyAyXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnR4LnB1c2godHggKyBpKVxuICAgICAgICAgICAgdGhpcy50eS5wdXNoKHR5KVxuICAgICAgICAgICAgaWYgKGhlaWdodCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR4LnB1c2godHggKyBpKVxuICAgICAgICAgICAgICAgIHRoaXMudHkucHVzaCh0eSArIGhlaWdodCAtIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGVpZ2h0ID4gMikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBoZWlnaHQgLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR4LnB1c2godHgpXG4gICAgICAgICAgICAgICAgdGhpcy50eS5wdXNoKHR5ICsgaSlcbiAgICAgICAgICAgICAgICBpZiAod2lkdGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHgucHVzaCh0eCArIHdpZHRoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eS5wdXNoKHR5ICsgaSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50eC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIHRoaXMuYWRkTG9jYXRpb24obnVsbCwgTWF0aC5mbG9vcihtb3Zlci5nZXRUaWxlTWFwWCgpKSwgTWF0aC5mbG9vcihtb3Zlci5nZXRUaWxlTWFwWSgpKSk7XG4gICAgICAgIHdoaWxlICh0aGlzLm9wZW5MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGJlc3Q6IE1hcE5vZGUgPSB0aGlzLm9wZW5MaXN0WzBdO1xuICAgICAgICAgICAgdGhpcy5vcGVuTGlzdC5zcGxpY2UoMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIGlmIGJlc3QgaXMgdGhlIHRhcmdldCB0aGVuIHdlJ3ZlIGZvdW5kIGl0IVxuICAgICAgICAgICAgaWYgKHRoaXMuYXRUYXJnZXQoYmVzdC54LCBiZXN0LnkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVQYXRoKGJlc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFkZExvY2F0aW9uKGJlc3QsIGJlc3QueCArIDEsIGJlc3QueSk7XG4gICAgICAgICAgICB0aGlzLmFkZExvY2F0aW9uKGJlc3QsIGJlc3QueCAtIDEsIGJlc3QueSk7XG4gICAgICAgICAgICB0aGlzLmFkZExvY2F0aW9uKGJlc3QsIGJlc3QueCwgYmVzdC55ICsgMSk7XG4gICAgICAgICAgICB0aGlzLmFkZExvY2F0aW9uKGJlc3QsIGJlc3QueCwgYmVzdC55IC0gMSk7XG5cbiAgICAgICAgICAgIHRoaXMucGFyZW50TGlzdC5wdXNoKGJlc3QpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExvY2F0aW9uKHBhcmVudDogTWFwTm9kZSB8IG51bGwsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKHgpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcih5KTtcblxuICAgICAgICB2YXIgc3ggPSB4O1xuICAgICAgICB2YXIgc3kgPSB5O1xuICAgICAgICB2YXIgZGlyID0gQVN0YXJQYXRoRmluZGVyLk5PTkU7XG5cbiAgICAgICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBzeCA9IHBhcmVudC54O1xuICAgICAgICAgICAgc3kgPSBwYXJlbnQueTtcblxuICAgICAgICAgICAgaWYgKHN5ICsgMSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLk5PUlRIX1RPX1NPVVRIO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN5IC0gMSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLlNPVVRIX1RPX05PUlRIO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN4ICsgMSA9PSB4KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLldFU1RfVE9fRUFTVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzeCAtIDEgPT0geCkge1xuICAgICAgICAgICAgICAgIGRpciA9IEFTdGFyUGF0aEZpbmRlci5FQVNUX1RPX1dFU1Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICghdGhpcy5tYXAudmFsaWRMb2NhdGlvbih4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgaXQncyBpbiB0aGUgb3BlbiBsaXN0IGlnbm9yZVxuICAgICAgICBpZiAodGhpcy5vcGVuW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID09IHRoaXMucGF0aEZpbmRDb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID09IHRoaXMucGF0aEZpbmRDb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBpdCdzIGJsb2NrZWQgZm9yIGFueSByZWFzb24sIGFkZCBpdCB0byB0aGUgY2xvc2VkXG4gICAgICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudC5kZXB0aCA+IHRoaXMubWF4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRbeCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPSB0aGlzLnBhdGhGaW5kQ291bnRlcjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmxvY2tlZChzeCwgc3ksIHgsIHkpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZFt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3RoZXJ3aXNlIGl0J3MgYSBwb3NzaWJsZSBzdGVwIGFkZCBpdCB0byB0aGUgb3BlblxuICAgICAgICB0aGlzLm9wZW5beCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPSB0aGlzLnBhdGhGaW5kQ291bnRlcjtcblxuICAgICAgICBjb25zdCBkeDogbnVtYmVyID0gTWF0aC5hYnModGhpcy5jeCAtIHgpO1xuICAgICAgICBjb25zdCBkeTogbnVtYmVyID0gTWF0aC5hYnModGhpcy5jeSAtIHkpO1xuXG4gICAgICAgIGNvbnN0IG5vZGU6IE1hcE5vZGUgPSB0aGlzLmNyZWF0ZU1hcE5vZGUoeCwgeSwgcGFyZW50LCBkeCArIGR5KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBBU3RhclBhdGhGaW5kZXIuYmluYXJ5U2VhcmNoKHRoaXMub3Blbkxpc3QsIG5vZGUuaClcbiAgICAgICAgdGhpcy5vcGVuTGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5vZGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGJpbmFyeVNlYXJjaChhcnJheTogTWFwTm9kZVtdLCBoOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGxvID0gLTEsIGhpID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoMSArIGxvIDwgaGkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pID0gbG8gKyAoKGhpIC0gbG8pID4+IDEpO1xuICAgICAgICAgICAgaWYgKGFycmF5W21pXS5oID4gaCkge1xuICAgICAgICAgICAgICAgIGhpID0gbWk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvID0gbWk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhpO1xuICAgIH1cblxuICAgIC8vIG9iamVjdCBwb29sIGFjY2Vzc29yIC0gZnJlZSBpcyBkb25lIGluIGJ1bGtcbiAgICBwcml2YXRlIGNyZWF0ZU1hcE5vZGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHBhcmVudDogTWFwTm9kZSB8IG51bGwsIGg6IG51bWJlcik6IE1hcE5vZGUge1xuICAgICAgICBpZiAodGhpcy5vYmplY3RQb29sLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgbjogTWFwTm9kZSA9IG5ldyBNYXBOb2RlKCk7XG4gICAgICAgICAgICB0aGlzLm9iamVjdFBvb2wucHVzaChuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBub2RlOiBNYXBOb2RlID0gdGhpcy5vYmplY3RQb29sWzBdO1xuICAgICAgICB0aGlzLm9iamVjdFBvb2wuc3BsaWNlKDAsIDEpO1xuICAgICAgICBub2RlLnggPSB4O1xuICAgICAgICBub2RlLnkgPSB5O1xuICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLmRlcHRoID0gcGFyZW50LmRlcHRoICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGVwdGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuaCA9IGggKyBub2RlLmRlcHRoO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBNYXBOb2RlIHtcbiAgICB4ITogbnVtYmVyO1xuICAgIHkhOiBudW1iZXI7XG4gICAgcGFyZW50ITogTWFwTm9kZSB8IG51bGw7XG4gICAgaCE6IG51bWJlcjtcbiAgICBkZXB0aCE6IG51bWJlcjtcbn0iLCJpbXBvcnQgeyBHdXRlTG9nIH0gZnJvbSBcIi4uL0xvZ1wiO1xuaW1wb3J0IHsgU3RlcCB9IGZyb20gXCIuL1N0ZXBcIjtcblxuZXhwb3J0IGNsYXNzIFBhdGgge1xuICAgIHN0ZXBzOiBBcnJheTxTdGVwPiA9IG5ldyBBcnJheTxTdGVwPigpO1xuXG4gICAgYWRkKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RlcHMuc3BsaWNlKDAsIDAsIG5ldyBTdGVwKHgsIHkpKTtcbiAgICB9XG5cbiAgICBnZXRMYXN0U3RlcCgpOiBTdGVwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RlcHNbdGhpcy5zdGVwcy5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICBwb3AoKTogU3RlcCB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDogU3RlcCA9IHRoaXMuc3RlcHNbMF07XG4gICAgICAgIHRoaXMuc3RlcHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGNvcHkoKTogUGF0aCB7XG4gICAgICAgIGNvbnN0IGNvcHkgPSBuZXcgUGF0aCgpO1xuICAgICAgICBmb3IgKGNvbnN0IHN0ZXAgb2YgdGhpcy5zdGVwcykge1xuICAgICAgICAgICAgY29weS5zdGVwcy5wdXNoKG5ldyBTdGVwKHN0ZXAueCwgc3RlcC55KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvcHkuc3RlcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBHdXRlTG9nLmxvZyhcIkNyZWF0ZWQgY29weSBvZiBwYXRoIHdpdGggemVybyBzdGVwczogXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBTdGVwIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG59IiwiaW1wb3J0IHsgR3V0ZUxvZyB9IGZyb20gXCIuLi9Mb2dcIjtcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSBcIi4uL1Jlc291cmNlXCI7XG5pbXBvcnQgeyBNYXBFbnRpdHkgfSBmcm9tIFwiLi9NYXBFbnRpdHlcIjtcbmltcG9ydCB7IE1hcExheWVyIH0gZnJvbSBcIi4vTWFwTGF5ZXJcIjtcbmltcG9ydCB7IE1hcExldmVsIH0gZnJvbSBcIi4vTWFwTGV2ZWxcIjtcbmltcG9ydCB7IE1hcFdvcmxkIH0gZnJvbSBcIi4vTWFwV29ybGRcIjtcblxuaW50ZXJmYWNlIEVudGl0eVJlZiB7XG4gIHZhbHVlOiBzdHJpbmd8c3RyaW5nW11cbiAgZW50aXR5OiBNYXBFbnRpdHlcbiAgZmllbGQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExEVEtMYXllckNvbXByZXNzaW9uIHtcbiAgZnJvbTogc3RyaW5nO1xuICB0bzogc3RyaW5nO1xuICBvZmZzZXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIExEVEtXb3JsZCBleHRlbmRzIE1hcFdvcmxkIGltcGxlbWVudHMgUmVzb3VyY2Uge1xuICBzdGF0aWMgTEFZRVJfQ09NUFJFU1NJT05TOiBMRFRLTGF5ZXJDb21wcmVzc2lvbltdID0gW107XG5cbiAgbmFtZTogc3RyaW5nID0gXCJ3b3JsZFwiO1xuICB0aWxlc2V0czogYW55W10gPSBbXTtcblxuICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICB9XG5cbiAgbG9hZChmaWxlOiBzdHJpbmcsIGxvYWRlcjogKGZpbGU6IHN0cmluZykgPT4gUHJvbWlzZTxhbnk+KSA6IFByb21pc2U8TWFwV29ybGQ+IHtcbiAgICB0aGlzLm5hbWUgPSBmaWxlO1xuXG4gICAgcmV0dXJuIGxvYWRlcihmaWxlKS50aGVuKGpzb24gPT4ge1xuICAgICAgY29uc3QgZW50aXR5UmVmcyA6IEVudGl0eVJlZltdID0gW11cbiAgICAgIGNvbnN0IGVudGl0eU1hcDogUmVjb3JkPHN0cmluZywgTWFwRW50aXR5PiA9IHt9XG4gICAgICBcbiAgICAgIHRoaXMuZ3JpZFNpemUgPSBqc29uLmRlZmF1bHRHcmlkU2l6ZTtcbiAgICAgIGNvbnN0IHRpbGVzZXQ6IGFueSA9IGpzb24uZGVmcy50aWxlc2V0c1swXTtcbiAgICAgIHRoaXMudGlsZXNldHMgPSBqc29uLmRlZnMudGlsZXNldHM7XG4gICAgICB0aGlzLnRpbGVzZXRTY2FubGluZSA9IHRpbGVzZXQucHhXaWQgLyB0aWxlc2V0LnRpbGVHcmlkU2l6ZTtcbiAgICAgIHRoaXMudGlsZXNldFNpemUgPSB0aWxlc2V0LnRpbGVHcmlkU2l6ZTtcblxuICAgICAgbGV0IGxldmVscyA9IGpzb24ubGV2ZWxzO1xuICAgICAgaWYgKGpzb24ud29ybGRzICYmIGpzb24ud29ybGRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV2ZWxzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgd29ybGQgb2YganNvbi53b3JsZHMpIHtcbiAgICAgICAgICBsZXZlbHMgPSBsZXZlbHMuY29uY2F0KHdvcmxkLmxldmVscyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgYXN5bmNMZXZlbHMgOiBQcm9taXNlPE1hcExldmVsPltdID0gW11cbiAgICAgIGZvciAoY29uc3QgbGV2ZWxEYXRhIG9mIGpzb24ubGV2ZWxzKSB7XG4gICAgICAgIGNvbnN0IGxldmVsOiBNYXBMZXZlbCA9IG5ldyBNYXBMZXZlbCh0aGlzLCBsZXZlbERhdGEuaWRlbnRpZmllcik7XG5cbiAgICAgICAgbGV2ZWwud29ybGRYID0gbGV2ZWxEYXRhLndvcmxkWDtcbiAgICAgICAgbGV2ZWwud29ybGRZID0gbGV2ZWxEYXRhLndvcmxkWTtcbiAgICAgICAgbGV2ZWwud29ybGREZXB0aCA9IGxldmVsRGF0YS53b3JsZERlcHRoO1xuICAgICAgICBcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZEluc3RhbmNlIG9mIGxldmVsRGF0YS5maWVsZEluc3RhbmNlcykge1xuICAgICAgICAgIGxldmVsLmZpZWxkc1tmaWVsZEluc3RhbmNlLl9faWRlbnRpZmllcl0gPSBmaWVsZEluc3RhbmNlLl9fdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGF5ZXJzIDogUHJvbWlzZTxhbnk+XG4gICAgICAgIGlmIChsZXZlbERhdGEubGF5ZXJJbnN0YW5jZXMpIC8vIGVtYmVkZGVkIGxheWVyc1xuICAgICAgICAgIGxheWVycyA9IFByb21pc2UucmVzb2x2ZShsZXZlbERhdGEpXG4gICAgICAgIGVsc2UgaWYgKGxldmVsRGF0YS5leHRlcm5hbFJlbFBhdGgpIHtcbiAgICAgICAgICBsYXllcnMgPSBsb2FkZXIobGV2ZWxEYXRhLmV4dGVybmFsUmVsUGF0aClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIExEVEsgZmlsZSBmb3JtYXRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jTGV2ZWxzLnB1c2gobGF5ZXJzLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgTERUS1dvcmxkLmxvYWRMYXllcnMobGV2ZWwsIGRhdGEubGF5ZXJJbnN0YW5jZXMsIGVudGl0eVJlZnMsIGVudGl0eU1hcCk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGxldmVsLmxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXZlbC53aWR0aCA9IGxldmVsLmxheWVyc1swXS53aWR0aDtcbiAgICAgICAgICAgIGxldmVsLmhlaWdodCA9IGxldmVsLmxheWVyc1swXS5oZWlnaHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldmVsLndpZHRoID0gbGV2ZWxEYXRhLnB4V2lkIC8gdGhpcy5ncmlkU2l6ZTtcbiAgICAgICAgICAgIGxldmVsLmhlaWdodCA9IGxldmVsRGF0YS5weEhlaSAvIHRoaXMuZ3JpZFNpemU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5sZXZlbHNbbGV2ZWwuaWRdID0gbGV2ZWw7XG4gICAgICAgICAgcmV0dXJuIGxldmVsXG4gICAgICAgIH0pKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoYXN5bmNMZXZlbHMpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAvLyByZXNvbHZlIGFsbCBlbnRpdHkgaWRzIG5vdyB0aGF0IHdlIGhhdmUgYWxsIHRoZSBkYXRhXG4gICAgICAgIGZvciAoY29uc3QgcmVmIG9mIGVudGl0eVJlZnMpIHtcbiAgICAgICAgICBpZiAocmVmLnZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlIDogTWFwRW50aXR5W10gPSBbXVxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHJlZi52YWx1ZSkge1xuICAgICAgICAgICAgICBjb25zdCBlbnRpdHkgPSBlbnRpdHlNYXBbaXRlbV1cbiAgICAgICAgICAgICAgaWYgKGVudGl0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goZW50aXR5KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWYuZW50aXR5LmZpZWxkc1tyZWYuZmllbGRdID0gdmFsdWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZW50aXR5ID0gZW50aXR5TWFwW3JlZi52YWx1ZV1cbiAgICAgICAgICAgIGlmIChlbnRpdHkpIHtcbiAgICAgICAgICAgICAgcmVmLmVudGl0eS5maWVsZHNbcmVmLmZpZWxkXSA9IGVudGl0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH0pXG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIEd1dGVMb2cuZXJyb3IoZSk7XG4gICAgICB0aHJvdyBlO1xuICAgIH0pO1xuICB9XG4gIFxuICBwcml2YXRlIHN0YXRpYyBsb2FkTGF5ZXJzKGxldmVsOiBNYXBMZXZlbCwgbGF5ZXJJbnN0YW5jZXM6IGFueSwgZW50aXR5UmVmczogRW50aXR5UmVmW10sIGVudGl0eU1hcDogUmVjb3JkPHN0cmluZywgTWFwRW50aXR5Pikge1xuICAgIGZvciAoY29uc3QgbGF5ZXJEYXRhIG9mIGxheWVySW5zdGFuY2VzKSB7XG4gICAgICBpZiAobGF5ZXJEYXRhLl9fdHlwZSA9PT0gXCJFbnRpdGllc1wiKSB7XG4gICAgICAgIGZvciAoY29uc3QgZW50aXR5RGF0YSBvZiBsYXllckRhdGEuZW50aXR5SW5zdGFuY2VzKSB7XG4gICAgICAgICAgY29uc3QgZW50aXR5OiBNYXBFbnRpdHkgPSBuZXcgTWFwRW50aXR5KGxldmVsLFxuICAgICAgICAgICAgICBlbnRpdHlEYXRhLnB4WzBdIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUsXG4gICAgICAgICAgICAgIGVudGl0eURhdGEucHhbMV0gLyBsYXllckRhdGEuX19ncmlkU2l6ZSxcbiAgICAgICAgICAgICAgZW50aXR5RGF0YS53aWR0aCAvIGxheWVyRGF0YS5fX2dyaWRTaXplLFxuICAgICAgICAgICAgICBlbnRpdHlEYXRhLmhlaWdodCAvIGxheWVyRGF0YS5fX2dyaWRTaXplLFxuICAgICAgICAgICAgICBlbnRpdHlEYXRhLl9faWRlbnRpZmllcilcblxuICAgICAgICAgIGVudGl0eS5pZCA9IGVudGl0eURhdGEuaWlkO1xuICAgICAgICAgIGVudGl0eU1hcFtlbnRpdHlEYXRhLmlpZF0gPSBlbnRpdHlcbiAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkSW5zdGFuY2Ugb2YgZW50aXR5RGF0YS5maWVsZEluc3RhbmNlcykge1xuICAgICAgICAgICAgc3dpdGNoIChmaWVsZEluc3RhbmNlLl9fdHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiRW50aXR5UmVmXCI6IC8vIHNhdmUgaW5mb3JtYXRpb24gdG8gcmVzb2x2ZSByZWZzIHRvIGVudGl0aWVzIGxhdGVyIHdoZW4gYWxsIGluZm9ybWF0aW9uIHdpbGwgYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgZW50aXR5UmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZEluc3RhbmNlLl9fdmFsdWUuZW50aXR5SWlkLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBlbnRpdHksXG4gICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGRJbnN0YW5jZS5fX2lkZW50aWZpZXJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyYXk8RW50aXR5UmVmPlwiOlxuICAgICAgICAgICAgICAgIGVudGl0eVJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogKGZpZWxkSW5zdGFuY2UuX192YWx1ZSBhcyBBcnJheTxhbnk+KS5tYXAoaXQgPT4gaXQuZW50aXR5SWlkKSxcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogZW50aXR5LFxuICAgICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkSW5zdGFuY2UuX19pZGVudGlmaWVyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBlbnRpdHkuZmllbGRzW2ZpZWxkSW5zdGFuY2UuX19pZGVudGlmaWVyXSA9IGZpZWxkSW5zdGFuY2UuX192YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV2ZWwuZW50aXRpZXMucHVzaChlbnRpdHkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb21wcmVzc2lvbiA9IExEVEtXb3JsZC5MQVlFUl9DT01QUkVTU0lPTlMuZmluZChjID0+IGMuZnJvbSA9PT0gbGF5ZXJEYXRhLl9faWRlbnRpZmllcik7XG4gICAgICAgIGxldCBsYXllcjogTWFwTGF5ZXIgfCB1bmRlZmluZWQ7IFxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgaWYgKGNvbXByZXNzaW9uKSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0TGF5ZXIgPSBsZXZlbC5sYXllckJ5TmFtZVtjb21wcmVzc2lvbi50b107XG4gICAgICAgICAgaWYgKCF0YXJnZXRMYXllcikge1xuICAgICAgICAgICAgdGhyb3cgXCJVbmFibGUgdG8gZmluZCBjb21wcmVzc2lvbiBsYXllcjogXCIgKyBjb21wcmVzc2lvbi50bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsYXllciA9IHRhcmdldExheWVyO1xuICAgICAgICAgIG9mZnNldCA9IGNvbXByZXNzaW9uLm9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXllciA9IG5ldyBNYXBMYXllcihsZXZlbCwgbGF5ZXJEYXRhLl9faWRlbnRpZmllciwgbGF5ZXJEYXRhLl9fY1dpZCwgbGF5ZXJEYXRhLl9fY0hlaSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aWxlc2V0ID0gKGxldmVsLndvcmxkIGFzIExEVEtXb3JsZCkudGlsZXNldHMuZmluZCh0ID0+IHQudWlkID09PSBsYXllckRhdGEuX190aWxlc2V0RGVmVWlkKTtcblxuICAgICAgICBjb25zdCBzY2FubGluZTogbnVtYmVyID10aWxlc2V0LnB4V2lkIC8gdGlsZXNldC50aWxlR3JpZFNpemU7XG4gICAgICAgIGNvbnN0IHRpbGVTaXplOiBudW1iZXIgPXRpbGVzZXQudGlsZUdyaWRTaXplO1xuXG4gICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiBsYXllckRhdGEuZ3JpZFRpbGVzKSB7XG4gICAgICAgICAgY29uc3QgeDogbnVtYmVyID0gTWF0aC5mbG9vcih0aWxlLnB4WzBdIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUpO1xuICAgICAgICAgIGNvbnN0IHk6IG51bWJlciA9IE1hdGguZmxvb3IodGlsZS5weFsxXSAvIGxheWVyRGF0YS5fX2dyaWRTaXplKTtcbiAgICAgICAgICBjb25zdCBwb3NJbmRleDogbnVtYmVyID0geCArICh5ICogbGF5ZXIud2lkdGgpO1xuXG4gICAgICAgICAgY29uc3QgdHg6IG51bWJlciA9IE1hdGguZmxvb3IodGlsZS5zcmNbMF0gLyB0aWxlU2l6ZSk7XG4gICAgICAgICAgY29uc3QgdHk6IG51bWJlciA9IE1hdGguZmxvb3IodGlsZS5zcmNbMV0gLyB0aWxlU2l6ZSk7XG5cbiAgICAgICAgICBjb25zdCB0aWxlSW5kZXg6IG51bWJlciA9ICh0eSAqIHNjYW5saW5lKSArIHR4O1xuICAgICAgICAgIGxheWVyLnRpbGVzW3Bvc0luZGV4XSA9IHRpbGVJbmRleCArIDEgKyBvZmZzZXQ7XG4gICAgICAgICAgbGF5ZXIuZmxpcHNbcG9zSW5kZXhdID0gdGlsZS5mO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb21wcmVzc2lvbikge1xuICAgICAgICAgIGxldmVsLmxheWVycy5zcGxpY2UoMCwgMCwgbGF5ZXIpO1xuICAgICAgICAgIGxldmVsLmxheWVyQnlOYW1lW2xheWVyLm5hbWVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE1hcExldmVsIH0gZnJvbSBcIi4vTWFwTGV2ZWxcIjtcblxuZXhwb3J0IGNsYXNzIE1hcEVudGl0eSB7XG4gIGlkPzogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbGV2ZWw6IE1hcExldmVsO1xuICBmaWVsZHM6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGxldmVsOiBNYXBMZXZlbCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgY29weShsZXZlbDogTWFwTGV2ZWwpOiBNYXBFbnRpdHkge1xuICAgIGNvbnN0IHJlc3VsdDogTWFwRW50aXR5ID0gbmV3IE1hcEVudGl0eShsZXZlbCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnR5cGUpO1xuICAgIHJlc3VsdC5maWVsZHMgPSB7Li4udGhpcy5maWVsZHN9O1xuICAgIHJlc3VsdC5pZCA9IHRoaXMuaWQ7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59IiwiaW1wb3J0IHsgTWFwTGV2ZWwgfSBmcm9tIFwiLi9NYXBMZXZlbFwiO1xuXG5leHBvcnQgY2xhc3MgTWFwTGF5ZXIge1xuICBzdGF0aWMgRkxJUF9YOiBudW1iZXIgPSAxO1xuICBzdGF0aWMgRkxJUF9ZOiBudW1iZXIgPSAyO1xuICBcbiAgbmFtZTogc3RyaW5nO1xuICBsZXZlbDogTWFwTGV2ZWw7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICB0aWxlczogbnVtYmVyW107XG4gIGZsaXBzOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihsZXZlbDogTWFwTGV2ZWwsIG5hbWU6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICB0aGlzLnRpbGVzID0gW107XG4gICAgdGhpcy5mbGlwcyA9IFtdO1xuICAgIGZvciAobGV0IGk9MDtpPHRoaXMud2lkdGgqdGhpcy5oZWlnaHQ7aSsrKSB7XG4gICAgICB0aGlzLnRpbGVzLnB1c2goMCk7XG4gICAgICB0aGlzLmZsaXBzLnB1c2goMCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RmxpcEZsYWdzKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoKHggPCAwKSB8fCAoeSA8IDApIHx8ICh4ID49IHRoaXMud2lkdGgpIHx8ICh5ID49IHRoaXMuaGVpZ2h0KSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IHBvc0luZGV4OiBudW1iZXIgPSB4ICsgKHkgKiB0aGlzLndpZHRoKTtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5mbGlwc1twb3NJbmRleF07XG4gIH1cblxuICBzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoKHggPCAwKSB8fCAoeSA8IDApIHx8ICh4ID49IHRoaXMud2lkdGgpIHx8ICh5ID49IHRoaXMuaGVpZ2h0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwb3NJbmRleDogbnVtYmVyID0geCArICh5ICogdGhpcy53aWR0aCk7XG4gICAgdGhpcy50aWxlc1twb3NJbmRleF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKCh4IDwgMCkgfHwgKHkgPCAwKSB8fCAoeCA+PSB0aGlzLndpZHRoKSB8fCAoeSA+PSB0aGlzLmhlaWdodCkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBwb3NJbmRleDogbnVtYmVyID0geCArICh5ICogdGhpcy53aWR0aCk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMudGlsZXNbcG9zSW5kZXhdO1xuICB9XG5cbiAgY29weShsZXZlbDogTWFwTGV2ZWwpOiBNYXBMYXllciB7XG4gICAgY29uc3QgcmVzdWx0OiBNYXBMYXllciA9IG5ldyBNYXBMYXllcihsZXZlbCwgdGhpcy5uYW1lLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgZm9yIChsZXQgaT0wO2k8dGhpcy53aWR0aCp0aGlzLmhlaWdodDtpKyspIHtcbiAgICAgIHJlc3VsdC50aWxlc1tpXSA9IHRoaXMudGlsZXNbaV07XG4gICAgICByZXN1bHQuZmxpcHNbaV0gPSB0aGlzLmZsaXBzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0iLCJpbXBvcnQgeyBNYXBFbnRpdHkgfSBmcm9tIFwiLi9NYXBFbnRpdHlcIjtcbmltcG9ydCB7IE1hcExheWVyIH0gZnJvbSBcIi4vTWFwTGF5ZXJcIjtcbmltcG9ydCB7IE1hcFdvcmxkIH0gZnJvbSBcIi4vTWFwV29ybGRcIjtcblxuZXhwb3J0IGNsYXNzIE1hcExldmVsIHtcbiAgaWQ6IHN0cmluZztcbiAgbGF5ZXJzOiBNYXBMYXllcltdID0gW107XG4gIGxheWVyQnlOYW1lOiBSZWNvcmQ8c3RyaW5nLCBNYXBMYXllcj4gPSB7fTtcbiAgd2lkdGghOiBudW1iZXI7XG4gIGhlaWdodCE6IG51bWJlcjtcbiAgd29ybGQ6IE1hcFdvcmxkO1xuICBlbnRpdGllczogTWFwRW50aXR5W10gPSBbXTtcbiAgZmllbGRzOiBhbnkgPSB7fTtcbiAgd29ybGRYOiBudW1iZXIgPSAwO1xuICB3b3JsZFk6IG51bWJlciA9IDA7XG4gIHdvcmxkRGVwdGg6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3Iod29ybGQ6IE1hcFdvcmxkLCBpZDogc3RyaW5nKSB7XG4gICAgdGhpcy53b3JsZCA9IHdvcmxkO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGVudGl0aWVzT2ZUeXBlKHR5cGU6IHN0cmluZyk6IE1hcEVudGl0eVtdIHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdGllcy5maWx0ZXIoZW50aXR5ID0+IGVudGl0eS50eXBlID09PSB0eXBlKTtcbiAgfVxuXG4gIGZpcnN0RW50aXR5T2ZUeXBlKHR5cGU6IHN0cmluZyk6IE1hcEVudGl0eSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuZmluZChlbnRpdHkgPT4gZW50aXR5LnR5cGUgPT09IHR5cGUpO1xuICB9XG5cbiAgY29weShpZDogc3RyaW5nKTogTWFwTGV2ZWwge1xuICAgIGNvbnN0IHdvcmxkQ29weTogTWFwV29ybGQgPSBuZXcgTWFwV29ybGQoKTtcbiAgICB3b3JsZENvcHkuZ3JpZFNpemUgPSB0aGlzLndvcmxkLmdyaWRTaXplO1xuICAgIHdvcmxkQ29weS5sb2FkZWQgPSB0aGlzLndvcmxkLmxvYWRlZDtcbiAgICB3b3JsZENvcHkudGlsZXNldFNjYW5saW5lID0gdGhpcy53b3JsZC50aWxlc2V0U2NhbmxpbmU7XG4gICAgd29ybGRDb3B5LnRpbGVzZXRTaXplID0gdGhpcy53b3JsZC50aWxlc2V0U2l6ZTtcblxuICAgIGNvbnN0IGxldmVsQ29weTogTWFwTGV2ZWwgPSBuZXcgTWFwTGV2ZWwod29ybGRDb3B5LCBpZCk7XG4gICAgbGV2ZWxDb3B5LndpZHRoID0gdGhpcy53aWR0aDtcbiAgICBsZXZlbENvcHkuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgbGV2ZWxDb3B5LndvcmxkWCA9IHRoaXMud29ybGRYO1xuICAgIGxldmVsQ29weS53b3JsZFkgPSB0aGlzLndvcmxkWTtcbiAgICBsZXZlbENvcHkud29ybGREZXB0aCA9IHRoaXMud29ybGREZXB0aDtcbiAgICBsZXZlbENvcHkuZmllbGRzID0gey4uLnRoaXMuZmllbGRzfTtcblxuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgIGNvbnN0IGNvcHk6IE1hcExheWVyID0gbGF5ZXIuY29weShsZXZlbENvcHkpO1xuICAgICAgbGV2ZWxDb3B5LmxheWVycy5wdXNoKGNvcHkpO1xuICAgICAgbGV2ZWxDb3B5LmxheWVyQnlOYW1lW2NvcHkubmFtZV0gPSBjb3B5O1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICBjb25zdCBjb3B5OiBNYXBFbnRpdHkgPSBlbnRpdHkuY29weShsZXZlbENvcHkpO1xuICAgICAgbGV2ZWxDb3B5LmVudGl0aWVzLnB1c2goY29weSk7XG4gICAgfVxuICAgIHJldHVybiBsZXZlbENvcHk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFJlc291cmNlIH0gZnJvbSBcIi4uL1Jlc291cmNlXCI7XG5pbXBvcnQgeyBNYXBMZXZlbCB9IGZyb20gXCIuL01hcExldmVsXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXBXb3JsZCB7XG4gIGxldmVsczogUmVjb3JkPHN0cmluZywgTWFwTGV2ZWw+ID0ge307XG4gIGdyaWRTaXplOiBudW1iZXIgPSAwO1xuICB0aWxlc2V0U2NhbmxpbmU6IG51bWJlciA9IDA7XG4gIHRpbGVzZXRTaXplOiBudW1iZXIgPSAwO1xuICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==