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
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/jszip/dist/jszip.min.js":
/*!**********************************************!*\
  !*** ./node_modules/jszip/dist/jszip.min.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!

JSZip v3.7.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/

!function(t){if(true)module.exports=t();else {}}(function(){return function s(a,o,h){function u(r,t){if(!o[r]){if(!a[r]){var e=undefined;if(!t&&e)return require(r,!0);if(l)return l(r,!0);var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}var n=o[r]={exports:{}};a[r][0].call(n.exports,function(t){var e=a[r][1][t];return u(e||t)},n,n.exports,s,a,o,h)}return o[r].exports}for(var l=undefined,t=0;t<h.length;t++)u(h[t]);return u}({1:[function(t,e,r){"use strict";var c=t("./utils"),d=t("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(t){for(var e,r,i,n,s,a,o,h=[],u=0,l=t.length,f=l,d="string"!==c.getTypeOf(t);u<t.length;)f=l-u,i=d?(e=t[u++],r=u<l?t[u++]:0,u<l?t[u++]:0):(e=t.charCodeAt(u++),r=u<l?t.charCodeAt(u++):0,u<l?t.charCodeAt(u++):0),n=e>>2,s=(3&e)<<4|r>>4,a=1<f?(15&r)<<2|i>>6:64,o=2<f?63&i:64,h.push(p.charAt(n)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join("")},r.decode=function(t){var e,r,i,n,s,a,o=0,h=0,u="data:";if(t.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var l,f=3*(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(t.charAt(t.length-1)===p.charAt(64)&&f--,t.charAt(t.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(l=d.uint8array?new Uint8Array(0|f):new Array(0|f);o<t.length;)e=p.indexOf(t.charAt(o++))<<2|(n=p.indexOf(t.charAt(o++)))>>4,r=(15&n)<<4|(s=p.indexOf(t.charAt(o++)))>>2,i=(3&s)<<6|(a=p.indexOf(t.charAt(o++))),l[h++]=e,64!==s&&(l[h++]=r),64!==a&&(l[h++]=i);return l}},{"./support":30,"./utils":32}],2:[function(t,e,r){"use strict";var i=t("./external"),n=t("./stream/DataWorker"),s=t("./stream/Crc32Probe"),a=t("./stream/DataLengthProbe");function o(t,e,r,i,n){this.compressedSize=t,this.uncompressedSize=e,this.crc32=r,this.compression=i,this.compressedContent=n}o.prototype={getContentWorker:function(){var t=new n(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),e=this;return t.on("end",function(){if(this.streamInfo.data_length!==e.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),t},getCompressedWorker:function(){return new n(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(t,e,r){return t.pipe(new s).pipe(new a("uncompressedSize")).pipe(e.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression",e)},e.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,e,r){"use strict";var i=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(t){return new i("STORE compression")},uncompressWorker:function(){return new i("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,e,r){"use strict";var i=t("./utils");var o=function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();e.exports=function(t,e){return void 0!==t&&t.length?"string"!==i.getTypeOf(t)?function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t}(0|e,t,t.length,0):function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e.charCodeAt(a))];return-1^t}(0|e,t,t.length,0):0}},{"./utils":32}],5:[function(t,e,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,e,r){"use strict";var i=null;i="undefined"!=typeof Promise?Promise:t("lie"),e.exports={Promise:i}},{lie:37}],7:[function(t,e,r){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,n=t("pako"),s=t("./utils"),a=t("./stream/GenericWorker"),o=i?"uint8array":"array";function h(t,e){a.call(this,"FlateWorker/"+t),this._pako=null,this._pakoAction=t,this._pakoOptions=e,this.meta={}}r.magic="\b\0",s.inherits(h,a),h.prototype.processChunk=function(t){this.meta=t.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,t.data),!1)},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new n[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},r.compressWorker=function(t){return new h("Deflate",t)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,e,r){"use strict";function A(t,e){var r,i="";for(r=0;r<e;r++)i+=String.fromCharCode(255&t),t>>>=8;return i}function i(t,e,r,i,n,s){var a,o,h=t.file,u=t.compression,l=s!==O.utf8encode,f=I.transformTo("string",s(h.name)),d=I.transformTo("string",O.utf8encode(h.name)),c=h.comment,p=I.transformTo("string",s(c)),m=I.transformTo("string",O.utf8encode(c)),_=d.length!==h.name.length,g=m.length!==c.length,b="",v="",y="",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};e&&!r||(x.crc32=t.crc32,x.compressedSize=t.compressedSize,x.uncompressedSize=t.uncompressedSize);var S=0;e&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),"UNIX"===n?(C=798,z|=function(t,e){var r=t;return t||(r=e?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(t){return 63&(t||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+d,b+="up"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+="uc"+A(y.length,2)+y);var E="";return E+="\n\0",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+"\0\0\0\0"+A(z,4)+A(i,4)+f+b+p}}var I=t("../utils"),n=t("../stream/GenericWorker"),O=t("../utf8"),B=t("../crc32"),R=t("../signature");function s(t,e,r,i){n.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=e,this.zipPlatform=r,this.encodeFileName=i,this.streamFiles=t,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}I.inherits(s,n),s.prototype.push=function(t){var e=t.meta.percent||0,r=this.entriesCount,i=this._sources.length;this.accumulate?this.contentBuffer.push(t):(this.bytesWritten+=t.data.length,n.prototype.push.call(this,{data:t.data,meta:{currentFile:this.currentFile,percent:r?(e+100*(r-i-1))/r:100}}))},s.prototype.openedSource=function(t){this.currentSourceOffset=this.bytesWritten,this.currentFile=t.file.name;var e=this.streamFiles&&!t.file.dir;if(e){var r=i(t,e,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},s.prototype.closedSource=function(t){this.accumulate=!1;var e=this.streamFiles&&!t.file.dir,r=i(t,e,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),e)this.push({data:function(t){return R.DATA_DESCRIPTOR+A(t.crc32,4)+A(t.compressedSize,4)+A(t.uncompressedSize,4)}(t),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},s.prototype.flush=function(){for(var t=this.bytesWritten,e=0;e<this.dirRecords.length;e++)this.push({data:this.dirRecords[e],meta:{percent:100}});var r=this.bytesWritten-t,i=function(t,e,r,i,n){var s=I.transformTo("string",n(i));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+A(t,2)+A(t,2)+A(e,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,t,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},s.prototype.registerPrevious=function(t){this._sources.push(t);var e=this;return t.on("data",function(t){e.processChunk(t)}),t.on("end",function(){e.closedSource(e.previous.streamInfo),e._sources.length?e.prepareNextSource():e.end()}),t.on("error",function(t){e.error(t)}),this},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(t){var e=this._sources;if(!n.prototype.error.call(this,t))return!1;for(var r=0;r<e.length;r++)try{e[r].error(t)}catch(t){}return!0},s.prototype.lock=function(){n.prototype.lock.call(this);for(var t=this._sources,e=0;e<t.length;e++)t[e].lock()},e.exports=s},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,e,r){"use strict";var u=t("../compressions"),i=t("./ZipFileWorker");r.generateWorker=function(t,a,e){var o=new i(a.streamFiles,e,a.platform,a.encodeFileName),h=0;try{t.forEach(function(t,e){h++;var r=function(t,e){var r=t||e,i=u[r];if(!i)throw new Error(r+" is not a valid compression method !");return i}(e.options.compression,a.compression),i=e.options.compressionOptions||a.compressionOptions||{},n=e.dir,s=e.date;e._compressWorker(r,i).withStreamInfo("file",{name:t,dir:n,date:s,comment:e.comment||"",unixPermissions:e.unixPermissions,dosPermissions:e.dosPermissions}).pipe(o)}),o.entriesCount=h}catch(t){o.error(t)}return o}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,e,r){"use strict";function i(){if(!(this instanceof i))return new i;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var t=new i;for(var e in this)"function"!=typeof this[e]&&(t[e]=this[e]);return t}}(i.prototype=t("./object")).loadAsync=t("./load"),i.support=t("./support"),i.defaults=t("./defaults"),i.version="3.7.1",i.loadAsync=function(t,e){return(new i).loadAsync(t,e)},i.external=t("./external"),e.exports=i},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,e,r){"use strict";var i=t("./utils"),n=t("./external"),o=t("./utf8"),h=t("./zipEntries"),s=t("./stream/Crc32Probe"),u=t("./nodejsUtils");function l(i){return new n.Promise(function(t,e){var r=i.decompressed.getContentWorker().pipe(new s);r.on("error",function(t){e(t)}).on("end",function(){r.streamInfo.crc32!==i.decompressed.crc32?e(new Error("Corrupted zip : CRC32 mismatch")):t()}).resume()})}e.exports=function(t,s){var a=this;return s=i.extend(s||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),u.isNode&&u.isStream(t)?n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):i.prepareContent("the loaded zip file",t,!0,s.optimizedBinaryString,s.base64).then(function(t){var e=new h(s);return e.load(t),e}).then(function(t){var e=[n.Promise.resolve(t)],r=t.files;if(s.checkCRC32)for(var i=0;i<r.length;i++)e.push(l(r[i]));return n.Promise.all(e)}).then(function(t){for(var e=t.shift(),r=e.files,i=0;i<r.length;i++){var n=r[i];a.file(n.fileNameStr,n.decompressed,{binary:!0,optimizedBinaryString:!0,date:n.date,dir:n.dir,comment:n.fileCommentStr.length?n.fileCommentStr:null,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions,createFolders:s.createFolders})}return e.zipComment.length&&(a.comment=e.zipComment),a})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,e,r){"use strict";var i=t("../utils"),n=t("../stream/GenericWorker");function s(t,e){n.call(this,"Nodejs stream input adapter for "+t),this._upstreamEnded=!1,this._bindStream(e)}i.inherits(s,n),s.prototype._bindStream=function(t){var e=this;(this._stream=t).pause(),t.on("data",function(t){e.push({data:t,meta:{percent:0}})}).on("error",function(t){e.isPaused?this.generatedError=t:e.error(t)}).on("end",function(){e.isPaused?e._upstreamEnded=!0:e.end()})},s.prototype.pause=function(){return!!n.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},e.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,e,r){"use strict";var n=t("readable-stream").Readable;function i(t,e,r){n.call(this,e),this._helper=t;var i=this;t.on("data",function(t,e){i.push(t)||i._helper.pause(),r&&r(e)}).on("error",function(t){i.emit("error",t)}).on("end",function(){i.push(null)})}t("../utils").inherits(i,n),i.prototype._read=function(){this._helper.resume()},e.exports=i},{"../utils":32,"readable-stream":16}],14:[function(t,e,r){"use strict";e.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(t,e){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(t,e);if("number"==typeof t)throw new Error('The "data" argument must not be a number');return new Buffer(t,e)},allocBuffer:function(t){if(Buffer.alloc)return Buffer.alloc(t);var e=new Buffer(t);return e.fill(0),e},isBuffer:function(t){return Buffer.isBuffer(t)},isStream:function(t){return t&&"function"==typeof t.on&&"function"==typeof t.pause&&"function"==typeof t.resume}}},{}],15:[function(t,e,r){"use strict";function s(t,e,r){var i,n=u.getTypeOf(e),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(t=g(t)),s.createFolders&&(i=_(t))&&b.call(this,i,!0);var a="string"===n&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(e instanceof d&&0===e.uncompressedSize||s.dir||!e||0===e.length)&&(s.base64=!1,s.binary=!0,e="",s.compression="STORE",n="string");var o=null;o=e instanceof d||e instanceof l?e:p.isNode&&p.isStream(e)?new m(t,e):u.prepareContent(t,e,s.binary,s.optimizedBinaryString,s.base64);var h=new c(t,o,s);this.files[t]=h}var n=t("./utf8"),u=t("./utils"),l=t("./stream/GenericWorker"),a=t("./stream/StreamHelper"),f=t("./defaults"),d=t("./compressedObject"),c=t("./zipObject"),o=t("./generate"),p=t("./nodejsUtils"),m=t("./nodejs/NodejsStreamInputAdapter"),_=function(t){"/"===t.slice(-1)&&(t=t.substring(0,t.length-1));var e=t.lastIndexOf("/");return 0<e?t.substring(0,e):""},g=function(t){return"/"!==t.slice(-1)&&(t+="/"),t},b=function(t,e){return e=void 0!==e?e:f.createFolders,t=g(t),this.files[t]||s.call(this,t,null,{dir:!0,createFolders:e}),this.files[t]};function h(t){return"[object RegExp]"===Object.prototype.toString.call(t)}var i={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(t){var e,r,i;for(e in this.files)i=this.files[e],(r=e.slice(this.root.length,e.length))&&e.slice(0,this.root.length)===this.root&&t(r,i)},filter:function(r){var i=[];return this.forEach(function(t,e){r(t,e)&&i.push(e)}),i},file:function(t,e,r){if(1!==arguments.length)return t=this.root+t,s.call(this,t,e,r),this;if(h(t)){var i=t;return this.filter(function(t,e){return!e.dir&&i.test(t)})}var n=this.files[this.root+t];return n&&!n.dir?n:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(t,e){return e.dir&&r.test(t)});var t=this.root+r,e=b.call(this,t),i=this.clone();return i.root=e.name,i},remove:function(r){r=this.root+r;var t=this.files[r];if(t||("/"!==r.slice(-1)&&(r+="/"),t=this.files[r]),t&&!t.dir)delete this.files[r];else for(var e=this.filter(function(t,e){return e.name.slice(0,r.length)===r}),i=0;i<e.length;i++)delete this.files[e[i].name];return this},generate:function(t){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(t){var e,r={};try{if((r=u.extend(t||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:n.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");u.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var i=r.comment||this.comment||"";e=o.generateWorker(this,r,i)}catch(t){(e=new l("error")).error(t)}return new a(e,r.type||"string",r.mimeType)},generateAsync:function(t,e){return this.generateInternalStream(t).accumulate(e)},generateNodeStream:function(t,e){return(t=t||{}).type||(t.type="nodebuffer"),this.generateInternalStream(t).toNodejsStream(e)}};e.exports=i},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,e,r){e.exports=t("stream")},{stream:void 0}],17:[function(t,e,r){"use strict";var i=t("./DataReader");function n(t){i.call(this,t);for(var e=0;e<this.data.length;e++)t[e]=255&t[e]}t("../utils").inherits(n,i),n.prototype.byteAt=function(t){return this.data[this.zero+t]},n.prototype.lastIndexOfSignature=function(t){for(var e=t.charCodeAt(0),r=t.charCodeAt(1),i=t.charCodeAt(2),n=t.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===e&&this.data[s+1]===r&&this.data[s+2]===i&&this.data[s+3]===n)return s-this.zero;return-1},n.prototype.readAndCheckSignature=function(t){var e=t.charCodeAt(0),r=t.charCodeAt(1),i=t.charCodeAt(2),n=t.charCodeAt(3),s=this.readData(4);return e===s[0]&&r===s[1]&&i===s[2]&&n===s[3]},n.prototype.readData=function(t){if(this.checkOffset(t),0===t)return[];var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./DataReader":18}],18:[function(t,e,r){"use strict";var i=t("../utils");function n(t){this.data=t,this.length=t.length,this.index=0,this.zero=0}n.prototype={checkOffset:function(t){this.checkIndex(this.index+t)},checkIndex:function(t){if(this.length<this.zero+t||t<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+t+"). Corrupted zip ?")},setIndex:function(t){this.checkIndex(t),this.index=t},skip:function(t){this.setIndex(this.index+t)},byteAt:function(t){},readInt:function(t){var e,r=0;for(this.checkOffset(t),e=this.index+t-1;e>=this.index;e--)r=(r<<8)+this.byteAt(e);return this.index+=t,r},readString:function(t){return i.transformTo("string",this.readData(t))},readData:function(t){},lastIndexOfSignature:function(t){},readAndCheckSignature:function(t){},readDate:function(){var t=this.readInt(4);return new Date(Date.UTC(1980+(t>>25&127),(t>>21&15)-1,t>>16&31,t>>11&31,t>>5&63,(31&t)<<1))}},e.exports=n},{"../utils":32}],19:[function(t,e,r){"use strict";var i=t("./Uint8ArrayReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.readData=function(t){this.checkOffset(t);var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,e,r){"use strict";var i=t("./DataReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.byteAt=function(t){return this.data.charCodeAt(this.zero+t)},n.prototype.lastIndexOfSignature=function(t){return this.data.lastIndexOf(t)-this.zero},n.prototype.readAndCheckSignature=function(t){return t===this.readData(4)},n.prototype.readData=function(t){this.checkOffset(t);var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./DataReader":18}],21:[function(t,e,r){"use strict";var i=t("./ArrayReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.readData=function(t){if(this.checkOffset(t),0===t)return new Uint8Array(0);var e=this.data.subarray(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./ArrayReader":17}],22:[function(t,e,r){"use strict";var i=t("../utils"),n=t("../support"),s=t("./ArrayReader"),a=t("./StringReader"),o=t("./NodeBufferReader"),h=t("./Uint8ArrayReader");e.exports=function(t){var e=i.getTypeOf(t);return i.checkSupport(e),"string"!==e||n.uint8array?"nodebuffer"===e?new o(t):n.uint8array?new h(i.transformTo("uint8array",t)):new s(i.transformTo("array",t)):new a(t)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,e,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(t,e,r){"use strict";var i=t("./GenericWorker"),n=t("../utils");function s(t){i.call(this,"ConvertWorker to "+t),this.destType=t}n.inherits(s,i),s.prototype.processChunk=function(t){this.push({data:n.transformTo(this.destType,t.data),meta:t.meta})},e.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(t,e,r){"use strict";var i=t("./GenericWorker"),n=t("../crc32");function s(){i.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(s,i),s.prototype.processChunk=function(t){this.streamInfo.crc32=n(t.data,this.streamInfo.crc32||0),this.push(t)},e.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,e,r){"use strict";var i=t("../utils"),n=t("./GenericWorker");function s(t){n.call(this,"DataLengthProbe for "+t),this.propName=t,this.withStreamInfo(t,0)}i.inherits(s,n),s.prototype.processChunk=function(t){if(t){var e=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=e+t.data.length}n.prototype.processChunk.call(this,t)},e.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(t,e,r){"use strict";var i=t("../utils"),n=t("./GenericWorker");function s(t){n.call(this,"DataWorker");var e=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,t.then(function(t){e.dataIsReady=!0,e.data=t,e.max=t&&t.length||0,e.type=i.getTypeOf(t),e.isPaused||e._tickAndRepeat()},function(t){e.error(t)})}i.inherits(s,n),s.prototype.cleanUp=function(){n.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,i.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(i.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var t=null,e=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":t=this.data.substring(this.index,e);break;case"uint8array":t=this.data.subarray(this.index,e);break;case"array":case"nodebuffer":t=this.data.slice(this.index,e)}return this.index=e,this.push({data:t,meta:{percent:this.max?this.index/this.max*100:0}})},e.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(t,e,r){"use strict";function i(t){this.name=t||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}i.prototype={push:function(t){this.emit("data",t)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(t){this.emit("error",t)}return!0},error:function(t){return!this.isFinished&&(this.isPaused?this.generatedError=t:(this.isFinished=!0,this.emit("error",t),this.previous&&this.previous.error(t),this.cleanUp()),!0)},on:function(t,e){return this._listeners[t].push(e),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(t,e){if(this._listeners[t])for(var r=0;r<this._listeners[t].length;r++)this._listeners[t][r].call(this,e)},pipe:function(t){return t.registerPrevious(this)},registerPrevious:function(t){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=t.streamInfo,this.mergeStreamInfo(),this.previous=t;var e=this;return t.on("data",function(t){e.processChunk(t)}),t.on("end",function(){e.end()}),t.on("error",function(t){e.error(t)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var t=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),t=!0),this.previous&&this.previous.resume(),!t},flush:function(){},processChunk:function(t){this.push(t)},withStreamInfo:function(t,e){return this.extraStreamInfo[t]=e,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var t in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(t)&&(this.streamInfo[t]=this.extraStreamInfo[t])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var t="Worker "+this.name;return this.previous?this.previous+" -> "+t:t}},e.exports=i},{}],29:[function(t,e,r){"use strict";var h=t("../utils"),n=t("./ConvertWorker"),s=t("./GenericWorker"),u=t("../base64"),i=t("../support"),a=t("../external"),o=null;if(i.nodestream)try{o=t("../nodejs/NodejsStreamOutputAdapter")}catch(t){}function l(t,o){return new a.Promise(function(e,r){var i=[],n=t._internalType,s=t._outputType,a=t._mimeType;t.on("data",function(t,e){i.push(t),o&&o(e)}).on("error",function(t){i=[],r(t)}).on("end",function(){try{var t=function(t,e,r){switch(t){case"blob":return h.newBlob(h.transformTo("arraybuffer",e),r);case"base64":return u.encode(e);default:return h.transformTo(t,e)}}(s,function(t,e){var r,i=0,n=null,s=0;for(r=0;r<e.length;r++)s+=e[r].length;switch(t){case"string":return e.join("");case"array":return Array.prototype.concat.apply([],e);case"uint8array":for(n=new Uint8Array(s),r=0;r<e.length;r++)n.set(e[r],i),i+=e[r].length;return n;case"nodebuffer":return Buffer.concat(e);default:throw new Error("concat : unsupported type '"+t+"'")}}(n,i),a);e(t)}catch(t){r(t)}i=[]}).resume()})}function f(t,e,r){var i=e;switch(e){case"blob":case"arraybuffer":i="uint8array";break;case"base64":i="string"}try{this._internalType=i,this._outputType=e,this._mimeType=r,h.checkSupport(i),this._worker=t.pipe(new n(i)),t.lock()}catch(t){this._worker=new s("error"),this._worker.error(t)}}f.prototype={accumulate:function(t){return l(this,t)},on:function(t,e){var r=this;return"data"===t?this._worker.on(t,function(t){e.call(r,t.data,t.meta)}):this._worker.on(t,function(){h.delay(e,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(t){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},t)}},e.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,e,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var i=new ArrayBuffer(0);try{r.blob=0===new Blob([i],{type:"application/zip"}).size}catch(t){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);n.append(i),r.blob=0===n.getBlob("application/zip").size}catch(t){r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch(t){r.nodestream=!1}},{"readable-stream":16}],31:[function(t,e,s){"use strict";for(var o=t("./utils"),h=t("./support"),r=t("./nodejsUtils"),i=t("./stream/GenericWorker"),u=new Array(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;u[254]=u[254]=1;function a(){i.call(this,"utf-8 decode"),this.leftOver=null}function l(){i.call(this,"utf-8 encode")}s.utf8encode=function(t){return h.nodebuffer?r.newBufferFrom(t,"utf-8"):function(t){var e,r,i,n,s,a=t.length,o=0;for(n=0;n<a;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),o+=r<128?1:r<2048?2:r<65536?3:4;for(e=h.uint8array?new Uint8Array(o):new Array(o),n=s=0;s<o;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),r<128?e[s++]=r:(r<2048?e[s++]=192|r>>>6:(r<65536?e[s++]=224|r>>>12:(e[s++]=240|r>>>18,e[s++]=128|r>>>12&63),e[s++]=128|r>>>6&63),e[s++]=128|63&r);return e}(t)},s.utf8decode=function(t){return h.nodebuffer?o.transformTo("nodebuffer",t).toString("utf-8"):function(t){var e,r,i,n,s=t.length,a=new Array(2*s);for(e=r=0;e<s;)if((i=t[e++])<128)a[r++]=i;else if(4<(n=u[i]))a[r++]=65533,e+=n-1;else{for(i&=2===n?31:3===n?15:7;1<n&&e<s;)i=i<<6|63&t[e++],n--;1<n?a[r++]=65533:i<65536?a[r++]=i:(i-=65536,a[r++]=55296|i>>10&1023,a[r++]=56320|1023&i)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(t=o.transformTo(h.uint8array?"uint8array":"array",t))},o.inherits(a,i),a.prototype.processChunk=function(t){var e=o.transformTo(h.uint8array?"uint8array":"array",t.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=e;(e=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),e.set(r,this.leftOver.length)}else e=this.leftOver.concat(e);this.leftOver=null}var i=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),r=e-1;0<=r&&128==(192&t[r]);)r--;return r<0?e:0===r?e:r+u[t[r]]>e?r:e}(e),n=e;i!==e.length&&(h.uint8array?(n=e.subarray(0,i),this.leftOver=e.subarray(i,e.length)):(n=e.slice(0,i),this.leftOver=e.slice(i,e.length))),this.push({data:s.utf8decode(n),meta:t.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(l,i),l.prototype.processChunk=function(t){this.push({data:s.utf8encode(t.data),meta:t.meta})},s.Utf8EncodeWorker=l},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,e,a){"use strict";var o=t("./support"),h=t("./base64"),r=t("./nodejsUtils"),i=t("set-immediate-shim"),u=t("./external");function n(t){return t}function l(t,e){for(var r=0;r<t.length;++r)e[r]=255&t.charCodeAt(r);return e}a.newBlob=function(e,r){a.checkSupport("blob");try{return new Blob([e],{type:r})}catch(t){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return i.append(e),i.getBlob(r)}catch(t){throw new Error("Bug : can't construct the Blob.")}}};var s={stringifyByChunk:function(t,e,r){var i=[],n=0,s=t.length;if(s<=r)return String.fromCharCode.apply(null,t);for(;n<s;)"array"===e||"nodebuffer"===e?i.push(String.fromCharCode.apply(null,t.slice(n,Math.min(n+r,s)))):i.push(String.fromCharCode.apply(null,t.subarray(n,Math.min(n+r,s)))),n+=r;return i.join("")},stringifyByChar:function(t){for(var e="",r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(t){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(t){return!1}}()}};function f(t){var e=65536,r=a.getTypeOf(t),i=!0;if("uint8array"===r?i=s.applyCanBeUsed.uint8array:"nodebuffer"===r&&(i=s.applyCanBeUsed.nodebuffer),i)for(;1<e;)try{return s.stringifyByChunk(t,r,e)}catch(t){e=Math.floor(e/2)}return s.stringifyByChar(t)}function d(t,e){for(var r=0;r<t.length;r++)e[r]=t[r];return e}a.applyFromCharCode=f;var c={};c.string={string:n,array:function(t){return l(t,new Array(t.length))},arraybuffer:function(t){return c.string.uint8array(t).buffer},uint8array:function(t){return l(t,new Uint8Array(t.length))},nodebuffer:function(t){return l(t,r.allocBuffer(t.length))}},c.array={string:f,array:n,arraybuffer:function(t){return new Uint8Array(t).buffer},uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return r.newBufferFrom(t)}},c.arraybuffer={string:function(t){return f(new Uint8Array(t))},array:function(t){return d(new Uint8Array(t),new Array(t.byteLength))},arraybuffer:n,uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return r.newBufferFrom(new Uint8Array(t))}},c.uint8array={string:f,array:function(t){return d(t,new Array(t.length))},arraybuffer:function(t){return t.buffer},uint8array:n,nodebuffer:function(t){return r.newBufferFrom(t)}},c.nodebuffer={string:f,array:function(t){return d(t,new Array(t.length))},arraybuffer:function(t){return c.nodebuffer.uint8array(t).buffer},uint8array:function(t){return d(t,new Uint8Array(t.length))},nodebuffer:n},a.transformTo=function(t,e){if(e=e||"",!t)return e;a.checkSupport(t);var r=a.getTypeOf(e);return c[r][t](e)},a.getTypeOf=function(t){return"string"==typeof t?"string":"[object Array]"===Object.prototype.toString.call(t)?"array":o.nodebuffer&&r.isBuffer(t)?"nodebuffer":o.uint8array&&t instanceof Uint8Array?"uint8array":o.arraybuffer&&t instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(t){if(!o[t.toLowerCase()])throw new Error(t+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(t){var e,r,i="";for(r=0;r<(t||"").length;r++)i+="\\x"+((e=t.charCodeAt(r))<16?"0":"")+e.toString(16).toUpperCase();return i},a.delay=function(t,e,r){i(function(){t.apply(r||null,e||[])})},a.inherits=function(t,e){function r(){}r.prototype=e.prototype,t.prototype=new r},a.extend=function(){var t,e,r={};for(t=0;t<arguments.length;t++)for(e in arguments[t])arguments[t].hasOwnProperty(e)&&void 0===r[e]&&(r[e]=arguments[t][e]);return r},a.prepareContent=function(r,t,i,n,s){return u.Promise.resolve(t).then(function(i){return o.blob&&(i instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(i)))&&"undefined"!=typeof FileReader?new u.Promise(function(e,r){var t=new FileReader;t.onload=function(t){e(t.target.result)},t.onerror=function(t){r(t.target.error)},t.readAsArrayBuffer(i)}):i}).then(function(t){var e=a.getTypeOf(t);return e?("arraybuffer"===e?t=a.transformTo("uint8array",t):"string"===e&&(s?t=h.decode(t):i&&!0!==n&&(t=function(t){return l(t,o.uint8array?new Uint8Array(t.length):new Array(t.length))}(t))),t):u.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(t,e,r){"use strict";var i=t("./reader/readerFor"),n=t("./utils"),s=t("./signature"),a=t("./zipEntry"),o=(t("./utf8"),t("./support"));function h(t){this.files=[],this.loadOptions=t}h.prototype={checkSignature:function(t){if(!this.reader.readAndCheckSignature(t)){this.reader.index-=4;var e=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+n.pretty(e)+", expected "+n.pretty(t)+")")}},isSignature:function(t,e){var r=this.reader.index;this.reader.setIndex(t);var i=this.reader.readString(4)===e;return this.reader.setIndex(r),i},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var t=this.reader.readData(this.zipCommentLength),e=o.uint8array?"uint8array":"array",r=n.transformTo(e,t);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var t,e,r,i=this.zip64EndOfCentralSize-44;0<i;)t=this.reader.readInt(2),e=this.reader.readInt(4),r=this.reader.readData(e),this.zip64ExtensibleData[t]={id:t,length:e,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var t,e;for(t=0;t<this.files.length;t++)e=this.files[t],this.reader.setIndex(e.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),e.readLocalPart(this.reader),e.handleUTF8(),e.processAttributes()},readCentralDir:function(){var t;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(t=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(t);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var t=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(t<0)throw!this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(t);var e=t;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===n.MAX_VALUE_16BITS||this.diskWithCentralDirStart===n.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===n.MAX_VALUE_16BITS||this.centralDirRecords===n.MAX_VALUE_16BITS||this.centralDirSize===n.MAX_VALUE_32BITS||this.centralDirOffset===n.MAX_VALUE_32BITS){if(this.zip64=!0,(t=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(t),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var i=e-r;if(0<i)this.isSignature(e,s.CENTRAL_FILE_HEADER)||(this.reader.zero=i);else if(i<0)throw new Error("Corrupted zip: missing "+Math.abs(i)+" bytes.")},prepareReader:function(t){this.reader=i(t)},load:function(t){this.prepareReader(t),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},e.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(t,e,r){"use strict";var i=t("./reader/readerFor"),s=t("./utils"),n=t("./compressedObject"),a=t("./crc32"),o=t("./utf8"),h=t("./compressions"),u=t("./support");function l(t,e){this.options=t,this.loadOptions=e}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(t){var e,r;if(t.skip(22),this.fileNameLength=t.readInt(2),r=t.readInt(2),this.fileName=t.readData(this.fileNameLength),t.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(e=function(t){for(var e in h)if(h.hasOwnProperty(e)&&h[e].magic===t)return h[e];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new n(this.compressedSize,this.uncompressedSize,this.crc32,e,t.readData(this.compressedSize))},readCentralPart:function(t){this.versionMadeBy=t.readInt(2),t.skip(2),this.bitFlag=t.readInt(2),this.compressionMethod=t.readString(2),this.date=t.readDate(),this.crc32=t.readInt(4),this.compressedSize=t.readInt(4),this.uncompressedSize=t.readInt(4);var e=t.readInt(2);if(this.extraFieldsLength=t.readInt(2),this.fileCommentLength=t.readInt(2),this.diskNumberStart=t.readInt(2),this.internalFileAttributes=t.readInt(2),this.externalFileAttributes=t.readInt(4),this.localHeaderOffset=t.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");t.skip(e),this.readExtraFields(t),this.parseZIP64ExtraField(t),this.fileComment=t.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var t=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==t&&(this.dosPermissions=63&this.externalFileAttributes),3==t&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(t){if(this.extraFields[1]){var e=i(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(t){var e,r,i,n=t.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});t.index+4<n;)e=t.readInt(2),r=t.readInt(2),i=t.readData(r),this.extraFields[e]={id:e,length:r,value:i};t.setIndex(n)},handleUTF8:function(){var t=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var e=this.findExtraFieldUnicodePath();if(null!==e)this.fileNameStr=e;else{var r=s.transformTo(t,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var i=this.findExtraFieldUnicodeComment();if(null!==i)this.fileCommentStr=i;else{var n=s.transformTo(t,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(n)}}},findExtraFieldUnicodePath:function(){var t=this.extraFields[28789];if(t){var e=i(t.value);return 1!==e.readInt(1)?null:a(this.fileName)!==e.readInt(4)?null:o.utf8decode(e.readData(t.length-5))}return null},findExtraFieldUnicodeComment:function(){var t=this.extraFields[25461];if(t){var e=i(t.value);return 1!==e.readInt(1)?null:a(this.fileComment)!==e.readInt(4)?null:o.utf8decode(e.readData(t.length-5))}return null}},e.exports=l},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,e,r){"use strict";function i(t,e,r){this.name=t,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=e,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=t("./stream/StreamHelper"),n=t("./stream/DataWorker"),a=t("./utf8"),o=t("./compressedObject"),h=t("./stream/GenericWorker");i.prototype={internalStream:function(t){var e=null,r="string";try{if(!t)throw new Error("No output type specified.");var i="string"===(r=t.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),e=this._decompressWorker();var n=!this._dataBinary;n&&!i&&(e=e.pipe(new a.Utf8EncodeWorker)),!n&&i&&(e=e.pipe(new a.Utf8DecodeWorker))}catch(t){(e=new h("error")).error(t)}return new s(e,r,"")},async:function(t,e){return this.internalStream(t).accumulate(e)},nodeStream:function(t,e){return this.internalStream(t||"nodebuffer").toNodejsStream(e)},_compressWorker:function(t,e){if(this._data instanceof o&&this._data.compression.magic===t.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,t,e)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new n(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)i.prototype[u[f]]=l;e.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,l,e){(function(e){"use strict";var r,i,t=e.MutationObserver||e.WebKitMutationObserver;if(t){var n=0,s=new t(u),a=e.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=n=++n%2}}else if(e.setImmediate||void 0===e.MessageChannel)r="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var o=new e.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0)}}var h=[];function u(){var t,e;i=!0;for(var r=h.length;r;){for(e=h,h=[],t=-1;++t<r;)e[t]();r=h.length}i=!1}l.exports=function(t){1!==h.push(t)||i||r()}}).call(this,"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(t,e,r){"use strict";var n=t("immediate");function u(){}var l={},s=["REJECTED"],a=["FULFILLED"],i=["PENDING"];function o(t){if("function"!=typeof t)throw new TypeError("resolver must be a function");this.state=i,this.queue=[],this.outcome=void 0,t!==u&&c(this,t)}function h(t,e,r){this.promise=t,"function"==typeof e&&(this.onFulfilled=e,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function f(e,r,i){n(function(){var t;try{t=r(i)}catch(t){return l.reject(e,t)}t===e?l.reject(e,new TypeError("Cannot resolve promise with itself")):l.resolve(e,t)})}function d(t){var e=t&&t.then;if(t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof e)return function(){e.apply(t,arguments)}}function c(e,t){var r=!1;function i(t){r||(r=!0,l.reject(e,t))}function n(t){r||(r=!0,l.resolve(e,t))}var s=p(function(){t(n,i)});"error"===s.status&&i(s.value)}function p(t,e){var r={};try{r.value=t(e),r.status="success"}catch(t){r.status="error",r.value=t}return r}(e.exports=o).prototype.finally=function(e){if("function"!=typeof e)return this;var r=this.constructor;return this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})})},o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,e){if("function"!=typeof t&&this.state===a||"function"!=typeof e&&this.state===s)return this;var r=new this.constructor(u);this.state!==i?f(r,this.state===a?t:e,this.outcome):this.queue.push(new h(r,t,e));return r},h.prototype.callFulfilled=function(t){l.resolve(this.promise,t)},h.prototype.otherCallFulfilled=function(t){f(this.promise,this.onFulfilled,t)},h.prototype.callRejected=function(t){l.reject(this.promise,t)},h.prototype.otherCallRejected=function(t){f(this.promise,this.onRejected,t)},l.resolve=function(t,e){var r=p(d,e);if("error"===r.status)return l.reject(t,r.value);var i=r.value;if(i)c(t,i);else{t.state=a,t.outcome=e;for(var n=-1,s=t.queue.length;++n<s;)t.queue[n].callFulfilled(e)}return t},l.reject=function(t,e){t.state=s,t.outcome=e;for(var r=-1,i=t.queue.length;++r<i;)t.queue[r].callRejected(e);return t},o.resolve=function(t){if(t instanceof this)return t;return l.resolve(new this(u),t)},o.reject=function(t){var e=new this(u);return l.reject(e,t)},o.all=function(t){var r=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var i=t.length,n=!1;if(!i)return this.resolve([]);var s=new Array(i),a=0,e=-1,o=new this(u);for(;++e<i;)h(t[e],e);return o;function h(t,e){r.resolve(t).then(function(t){s[e]=t,++a!==i||n||(n=!0,l.resolve(o,s))},function(t){n||(n=!0,l.reject(o,t))})}},o.race=function(t){var e=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var r=t.length,i=!1;if(!r)return this.resolve([]);var n=-1,s=new this(u);for(;++n<r;)a=t[n],e.resolve(a).then(function(t){i||(i=!0,l.resolve(s,t))},function(t){i||(i=!0,l.reject(s,t))});var a;return s}},{immediate:36}],38:[function(t,e,r){"use strict";var i={};(0,t("./lib/utils/common").assign)(i,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),e.exports=i},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,e,r){"use strict";var a=t("./zlib/deflate"),o=t("./utils/common"),h=t("./utils/strings"),n=t("./zlib/messages"),s=t("./zlib/zstream"),u=Object.prototype.toString,l=0,f=-1,d=0,c=8;function p(t){if(!(this instanceof p))return new p(t);this.options=o.assign({level:f,method:c,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},t||{});var e=this.options;e.raw&&0<e.windowBits?e.windowBits=-e.windowBits:e.gzip&&0<e.windowBits&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(r!==l)throw new Error(n[r]);if(e.header&&a.deflateSetHeader(this.strm,e.header),e.dictionary){var i;if(i="string"==typeof e.dictionary?h.string2buf(e.dictionary):"[object ArrayBuffer]"===u.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,(r=a.deflateSetDictionary(this.strm,i))!==l)throw new Error(n[r]);this._dict_set=!0}}function i(t,e){var r=new p(e);if(r.push(t,!0),r.err)throw r.msg||n[r.err];return r.result}p.prototype.push=function(t,e){var r,i,n=this.strm,s=this.options.chunkSize;if(this.ended)return!1;i=e===~~e?e:!0===e?4:0,"string"==typeof t?n.input=h.string2buf(t):"[object ArrayBuffer]"===u.call(t)?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length;do{if(0===n.avail_out&&(n.output=new o.Buf8(s),n.next_out=0,n.avail_out=s),1!==(r=a.deflate(n,i))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==n.avail_out&&(0!==n.avail_in||4!==i&&2!==i)||("string"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(n.output,n.next_out))):this.onData(o.shrinkBuf(n.output,n.next_out)))}while((0<n.avail_in||0===n.avail_out)&&1!==r);return 4===i?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==i||(this.onEnd(l),!(n.avail_out=0))},p.prototype.onData=function(t){this.chunks.push(t)},p.prototype.onEnd=function(t){t===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Deflate=p,r.deflate=i,r.deflateRaw=function(t,e){return(e=e||{}).raw=!0,i(t,e)},r.gzip=function(t,e){return(e=e||{}).gzip=!0,i(t,e)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,e,r){"use strict";var d=t("./zlib/inflate"),c=t("./utils/common"),p=t("./utils/strings"),m=t("./zlib/constants"),i=t("./zlib/messages"),n=t("./zlib/zstream"),s=t("./zlib/gzheader"),_=Object.prototype.toString;function a(t){if(!(this instanceof a))return new a(t);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&0<=e.windowBits&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(0<=e.windowBits&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),15<e.windowBits&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new n,this.strm.avail_out=0;var r=d.inflateInit2(this.strm,e.windowBits);if(r!==m.Z_OK)throw new Error(i[r]);this.header=new s,d.inflateGetHeader(this.strm,this.header)}function o(t,e){var r=new a(e);if(r.push(t,!0),r.err)throw r.msg||i[r.err];return r.result}a.prototype.push=function(t,e){var r,i,n,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return!1;i=e===~~e?e:!0===e?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof t?h.input=p.binstring2buf(t):"[object ArrayBuffer]"===_.call(t)?h.input=new Uint8Array(t):h.input=t,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new c.Buf8(u),h.next_out=0,h.avail_out=u),(r=d.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o="string"==typeof l?p.string2buf(l):"[object ArrayBuffer]"===_.call(l)?new Uint8Array(l):l,r=d.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||i!==m.Z_FINISH&&i!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(n=p.utf8border(h.output,h.next_out),s=h.next_out-n,a=p.buf2string(h.output,n),h.next_out=s,h.avail_out=u-s,s&&c.arraySet(h.output,h.output,n,s,0),this.onData(a)):this.onData(c.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0)}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(i=m.Z_FINISH),i===m.Z_FINISH?(r=d.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):i!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(t){this.chunks.push(t)},a.prototype.onEnd=function(t){t===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(t,e){return(e=e||{}).raw=!0,o(t,e)},r.ungzip=o},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,e,r){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var r=e.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i])}}return t},r.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var n={arraySet:function(t,e,r,i,n){if(e.subarray&&t.subarray)t.set(e.subarray(r,r+i),n);else for(var s=0;s<i;s++)t[n+s]=e[r+s]},flattenChunks:function(t){var e,r,i,n,s,a;for(e=i=0,r=t.length;e<r;e++)i+=t[e].length;for(a=new Uint8Array(i),e=n=0,r=t.length;e<r;e++)s=t[e],a.set(s,n),n+=s.length;return a}},s={arraySet:function(t,e,r,i,n){for(var s=0;s<i;s++)t[n+s]=e[r+s]},flattenChunks:function(t){return[].concat.apply([],t)}};r.setTyped=function(t){t?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,n)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(i)},{}],42:[function(t,e,r){"use strict";var h=t("./common"),n=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(t){n=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){s=!1}for(var u=new h.Buf8(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;function l(t,e){if(e<65537&&(t.subarray&&s||!t.subarray&&n))return String.fromCharCode.apply(null,h.shrinkBuf(t,e));for(var r="",i=0;i<e;i++)r+=String.fromCharCode(t[i]);return r}u[254]=u[254]=1,r.string2buf=function(t){var e,r,i,n,s,a=t.length,o=0;for(n=0;n<a;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),o+=r<128?1:r<2048?2:r<65536?3:4;for(e=new h.Buf8(o),n=s=0;s<o;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),r<128?e[s++]=r:(r<2048?e[s++]=192|r>>>6:(r<65536?e[s++]=224|r>>>12:(e[s++]=240|r>>>18,e[s++]=128|r>>>12&63),e[s++]=128|r>>>6&63),e[s++]=128|63&r);return e},r.buf2binstring=function(t){return l(t,t.length)},r.binstring2buf=function(t){for(var e=new h.Buf8(t.length),r=0,i=e.length;r<i;r++)e[r]=t.charCodeAt(r);return e},r.buf2string=function(t,e){var r,i,n,s,a=e||t.length,o=new Array(2*a);for(r=i=0;r<a;)if((n=t[r++])<128)o[i++]=n;else if(4<(s=u[n]))o[i++]=65533,r+=s-1;else{for(n&=2===s?31:3===s?15:7;1<s&&r<a;)n=n<<6|63&t[r++],s--;1<s?o[i++]=65533:n<65536?o[i++]=n:(n-=65536,o[i++]=55296|n>>10&1023,o[i++]=56320|1023&n)}return l(o,i)},r.utf8border=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),r=e-1;0<=r&&128==(192&t[r]);)r--;return r<0?e:0===r?e:r+u[t[r]]>e?r:e}},{"./common":41}],43:[function(t,e,r){"use strict";e.exports=function(t,e,r,i){for(var n=65535&t|0,s=t>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(n=n+e[i++]|0)|0,--a;);n%=65521,s%=65521}return n|s<<16|0}},{}],44:[function(t,e,r){"use strict";e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,e,r){"use strict";var o=function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();e.exports=function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t}},{}],46:[function(t,e,r){"use strict";var h,d=t("../utils/common"),u=t("./trees"),c=t("./adler32"),p=t("./crc32"),i=t("./messages"),l=0,f=4,m=0,_=-2,g=-1,b=4,n=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(t,e){return t.msg=i[e],e}function T(t){return(t<<1)-(4<t?9:0)}function D(t){for(var e=t.length;0<=--e;)t[e]=0}function F(t){var e=t.state,r=e.pending;r>t.avail_out&&(r=t.avail_out),0!==r&&(d.arraySet(t.output,e.pending_buf,e.pending_out,r,t.next_out),t.next_out+=r,e.pending_out+=r,t.total_out+=r,t.avail_out-=r,e.pending-=r,0===e.pending&&(e.pending_out=0))}function N(t,e){u._tr_flush_block(t,0<=t.block_start?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,F(t.strm)}function U(t,e){t.pending_buf[t.pending++]=e}function P(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function L(t,e){var r,i,n=t.max_chain_length,s=t.strstart,a=t.prev_length,o=t.nice_match,h=t.strstart>t.w_size-z?t.strstart-(t.w_size-z):0,u=t.window,l=t.w_mask,f=t.prev,d=t.strstart+S,c=u[s+a-1],p=u[s+a];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(u[(r=e)+a]===p&&u[r+a-1]===c&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<d);if(i=S-(d-s),s=d-S,a<i){if(t.match_start=e,o<=(a=i))break;c=u[s+a-1],p=u[s+a]}}}while((e=f[e&l])>h&&0!=--n);return a<=t.lookahead?a:t.lookahead}function j(t){var e,r,i,n,s,a,o,h,u,l,f=t.w_size;do{if(n=t.window_size-t.lookahead-t.strstart,t.strstart>=f+(f-z)){for(d.arraySet(t.window,t.window,f,f,0),t.match_start-=f,t.strstart-=f,t.block_start-=f,e=r=t.hash_size;i=t.head[--e],t.head[e]=f<=i?i-f:0,--r;);for(e=r=f;i=t.prev[--e],t.prev[e]=f<=i?i-f:0,--r;);n+=f}if(0===t.strm.avail_in)break;if(a=t.strm,o=t.window,h=t.strstart+t.lookahead,u=n,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,d.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=c(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),t.lookahead+=r,t.lookahead+t.insert>=x)for(s=t.strstart-t.insert,t.ins_h=t.window[s],t.ins_h=(t.ins_h<<t.hash_shift^t.window[s+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[s+x-1])&t.hash_mask,t.prev[s&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=s,s++,t.insert--,!(t.lookahead+t.insert<x)););}while(t.lookahead<z&&0!==t.strm.avail_in)}function Z(t,e){for(var r,i;;){if(t.lookahead<z){if(j(t),t.lookahead<z&&e===l)return A;if(0===t.lookahead)break}if(r=0,t.lookahead>=x&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==r&&t.strstart-r<=t.w_size-z&&(t.match_length=L(t,r)),t.match_length>=x)if(i=u._tr_tally(t,t.strstart-t.match_start,t.match_length-x),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=x){for(t.match_length--;t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart,0!=--t.match_length;);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else i=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=t.strstart<x-1?t.strstart:x-1,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}function W(t,e){for(var r,i,n;;){if(t.lookahead<z){if(j(t),t.lookahead<z&&e===l)return A;if(0===t.lookahead)break}if(r=0,t.lookahead>=x&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=x-1,0!==r&&t.prev_length<t.max_lazy_match&&t.strstart-r<=t.w_size-z&&(t.match_length=L(t,r),t.match_length<=5&&(1===t.strategy||t.match_length===x&&4096<t.strstart-t.match_start)&&(t.match_length=x-1)),t.prev_length>=x&&t.match_length<=t.prev_length){for(n=t.strstart+t.lookahead-x,i=u._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-x),t.lookahead-=t.prev_length-1,t.prev_length-=2;++t.strstart<=n&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!=--t.prev_length;);if(t.match_available=0,t.match_length=x-1,t.strstart++,i&&(N(t,!1),0===t.strm.avail_out))return A}else if(t.match_available){if((i=u._tr_tally(t,0,t.window[t.strstart-1]))&&N(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return A}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=u._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<x-1?t.strstart:x-1,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}function M(t,e,r,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=r,this.max_chain=i,this.func=n}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new d.Buf16(2*w),this.dyn_dtree=new d.Buf16(2*(2*a+1)),this.bl_tree=new d.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new d.Buf16(k+1),this.heap=new d.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new d.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=n,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?C:E,t.adler=2===e.wrap?0:1,e.last_flush=l,u._tr_init(e),m):R(t,_)}function K(t){var e=G(t);return e===m&&function(t){t.window_size=2*t.w_size,D(t.head),t.max_lazy_match=h[t.level].max_lazy,t.good_match=h[t.level].good_length,t.nice_match=h[t.level].nice_length,t.max_chain_length=h[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=x-1,t.match_available=0,t.ins_h=0}(t.state),e}function Y(t,e,r,i,n,s){if(!t)return _;var a=1;if(e===g&&(e=6),i<0?(a=0,i=-i):15<i&&(a=2,i-=16),n<1||y<n||r!==v||i<8||15<i||e<0||9<e||s<0||b<s)return R(t,_);8===i&&(i=9);var o=new H;return(t.state=o).strm=t,o.wrap=a,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new d.Buf8(2*o.w_size),o.head=new d.Buf16(o.hash_size),o.prev=new d.Buf16(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new d.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=e,o.strategy=s,o.method=r,K(t)}h=[new M(0,0,0,0,function(t,e){var r=65535;for(r>t.pending_buf_size-5&&(r=t.pending_buf_size-5);;){if(t.lookahead<=1){if(j(t),0===t.lookahead&&e===l)return A;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+r;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,N(t,!1),0===t.strm.avail_out))return A;if(t.strstart-t.block_start>=t.w_size-z&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):(t.strstart>t.block_start&&(N(t,!1),t.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(t,e){return Y(t,e,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?_:(t.state.gzhead=e,m):_},r.deflate=function(t,e){var r,i,n,s;if(!t||!t.state||5<e||e<0)return t?R(t,_):_;if(i=t.state,!t.output||!t.input&&0!==t.avail_in||666===i.status&&e!==f)return R(t,0===t.avail_out?-5:_);if(i.strm=t,r=i.last_flush,i.last_flush=e,i.status===C)if(2===i.wrap)t.adler=0,U(i,31),U(i,139),U(i,8),i.gzhead?(U(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),U(i,255&i.gzhead.time),U(i,i.gzhead.time>>8&255),U(i,i.gzhead.time>>16&255),U(i,i.gzhead.time>>24&255),U(i,9===i.level?2:2<=i.strategy||i.level<2?4:0),U(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(U(i,255&i.gzhead.extra.length),U(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(t.adler=p(t.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(U(i,0),U(i,0),U(i,0),U(i,0),U(i,0),U(i,9===i.level?2:2<=i.strategy||i.level<2?4:0),U(i,3),i.status=E);else{var a=v+(i.w_bits-8<<4)<<8;a|=(2<=i.strategy||i.level<2?0:i.level<6?1:6===i.level?2:3)<<6,0!==i.strstart&&(a|=32),a+=31-a%31,i.status=E,P(i,a),0!==i.strstart&&(P(i,t.adler>>>16),P(i,65535&t.adler)),t.adler=1}if(69===i.status)if(i.gzhead.extra){for(n=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending!==i.pending_buf_size));)U(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(73===i.status)if(i.gzhead.name){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending===i.pending_buf_size)){s=1;break}s=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,U(i,s)}while(0!==s);i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),0===s&&(i.gzindex=0,i.status=91)}else i.status=91;if(91===i.status)if(i.gzhead.comment){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending===i.pending_buf_size)){s=1;break}s=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,U(i,s)}while(0!==s);i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),0===s&&(i.status=103)}else i.status=103;if(103===i.status&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&F(t),i.pending+2<=i.pending_buf_size&&(U(i,255&t.adler),U(i,t.adler>>8&255),t.adler=0,i.status=E)):i.status=E),0!==i.pending){if(F(t),0===t.avail_out)return i.last_flush=-1,m}else if(0===t.avail_in&&T(e)<=T(r)&&e!==f)return R(t,-5);if(666===i.status&&0!==t.avail_in)return R(t,-5);if(0!==t.avail_in||0!==i.lookahead||e!==l&&666!==i.status){var o=2===i.strategy?function(t,e){for(var r;;){if(0===t.lookahead&&(j(t),0===t.lookahead)){if(e===l)return A;break}if(t.match_length=0,r=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,r&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}(i,e):3===i.strategy?function(t,e){for(var r,i,n,s,a=t.window;;){if(t.lookahead<=S){if(j(t),t.lookahead<=S&&e===l)return A;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=x&&0<t.strstart&&(i=a[n=t.strstart-1])===a[++n]&&i===a[++n]&&i===a[++n]){s=t.strstart+S;do{}while(i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&n<s);t.match_length=S-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=x?(r=u._tr_tally(t,1,t.match_length-x),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(r=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),r&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}(i,e):h[i.level].func(i,e);if(o!==O&&o!==B||(i.status=666),o===A||o===O)return 0===t.avail_out&&(i.last_flush=-1),m;if(o===I&&(1===e?u._tr_align(i):5!==e&&(u._tr_stored_block(i,0,0,!1),3===e&&(D(i.head),0===i.lookahead&&(i.strstart=0,i.block_start=0,i.insert=0))),F(t),0===t.avail_out))return i.last_flush=-1,m}return e!==f?m:i.wrap<=0?1:(2===i.wrap?(U(i,255&t.adler),U(i,t.adler>>8&255),U(i,t.adler>>16&255),U(i,t.adler>>24&255),U(i,255&t.total_in),U(i,t.total_in>>8&255),U(i,t.total_in>>16&255),U(i,t.total_in>>24&255)):(P(i,t.adler>>>16),P(i,65535&t.adler)),F(t),0<i.wrap&&(i.wrap=-i.wrap),0!==i.pending?m:1)},r.deflateEnd=function(t){var e;return t&&t.state?(e=t.state.status)!==C&&69!==e&&73!==e&&91!==e&&103!==e&&e!==E&&666!==e?R(t,_):(t.state=null,e===E?R(t,-3):m):_},r.deflateSetDictionary=function(t,e){var r,i,n,s,a,o,h,u,l=e.length;if(!t||!t.state)return _;if(2===(s=(r=t.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(t.adler=c(t.adler,e,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new d.Buf8(r.w_size),d.arraySet(u,e,l-r.w_size,r.w_size,0),e=u,l=r.w_size),a=t.avail_in,o=t.next_in,h=t.input,t.avail_in=l,t.next_in=0,t.input=e,j(r);r.lookahead>=x;){for(i=r.strstart,n=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[i+x-1])&r.hash_mask,r.prev[i&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=i,i++,--n;);r.strstart=i,r.lookahead=x-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,t.next_in=o,t.input=h,t.avail_in=a,r.wrap=s,m},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,e,r){"use strict";e.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,e,r){"use strict";e.exports=function(t,e){var r,i,n,s,a,o,h,u,l,f,d,c,p,m,_,g,b,v,y,w,k,x,S,z,C;r=t.state,i=t.next_in,z=t.input,n=i+(t.avail_in-5),s=t.next_out,C=t.output,a=s-(e-t.avail_out),o=s+(t.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,d=r.window,c=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;t:do{p<15&&(c+=z[i++]<<p,p+=8,c+=z[i++]<<p,p+=8),v=m[c&g];e:for(;;){if(c>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(c&(1<<y)-1)];continue e}if(32&y){r.mode=12;break t}t.msg="invalid literal/length code",r.mode=30;break t}w=65535&v,(y&=15)&&(p<y&&(c+=z[i++]<<p,p+=8),w+=c&(1<<y)-1,c>>>=y,p-=y),p<15&&(c+=z[i++]<<p,p+=8,c+=z[i++]<<p,p+=8),v=_[c&b];r:for(;;){if(c>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(c&(1<<y)-1)];continue r}t.msg="invalid distance code",r.mode=30;break t}if(k=65535&v,p<(y&=15)&&(c+=z[i++]<<p,(p+=8)<y&&(c+=z[i++]<<p,p+=8)),h<(k+=c&(1<<y)-1)){t.msg="invalid distance too far back",r.mode=30;break t}if(c>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){t.msg="invalid distance too far back",r.mode=30;break t}if(S=d,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=d[x++],--y;);x=s-k,S=C}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=d[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=d[x++],--y;);x=s-k,S=C}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=d[x++],--y;);x=s-k,S=C}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]))}else{for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]))}break}}break}}while(i<n&&s<o);i-=w=p>>3,c&=(1<<(p-=w<<3))-1,t.next_in=i,t.next_out=s,t.avail_in=i<n?n-i+5:5-(i-n),t.avail_out=s<o?o-s+257:257-(s-o),r.hold=c,r.bits=p}},{}],49:[function(t,e,r){"use strict";var I=t("../utils/common"),O=t("./adler32"),B=t("./crc32"),R=t("./inffast"),T=t("./inftrees"),D=1,F=2,N=0,U=-2,P=1,i=852,n=592;function L(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=P,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new I.Buf32(i),e.distcode=e.distdyn=new I.Buf32(n),e.sane=1,e.back=-1,N):U}function o(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,a(t)):U}function h(t,e){var r,i;return t&&t.state?(i=t.state,e<0?(r=0,e=-e):(r=1+(e>>4),e<48&&(e&=15)),e&&(e<8||15<e)?U:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=r,i.wbits=e,o(t))):U}function u(t,e){var r,i;return t?(i=new s,(t.state=i).window=null,(r=h(t,e))!==N&&(t.state=null),r):U}var l,f,d=!0;function j(t){if(d){var e;for(l=new I.Buf32(512),f=new I.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(T(D,t.lens,0,288,l,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;T(F,t.lens,0,32,f,0,t.work,{bits:5}),d=!1}t.lencode=l,t.lenbits=9,t.distcode=f,t.distbits=5}function Z(t,e,r,i){var n,s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),i>=s.wsize?(I.arraySet(s.window,e,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(i<(n=s.wsize-s.wnext)&&(n=i),I.arraySet(s.window,e,r-i,n,s.wnext),(i-=n)?(I.arraySet(s.window,e,r-i,i,0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(t){return u(t,15)},r.inflateInit2=u,r.inflate=function(t,e){var r,i,n,s,a,o,h,u,l,f,d,c,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return U;12===(r=t.state).mode&&(r.mode=13),a=t.next_out,n=t.output,h=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,u=r.hold,l=r.bits,f=o,d=h,x=N;t:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){t.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){t.msg="unknown compression method",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){t.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,t.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(r.flags=u,8!=(255&r.flags)){t.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){t.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(c=r.length)&&(c=o),c&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,i,s,c,k)),512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,r.length-=c),r.length))break t;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break t;for(c=0;k=i[s+c++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&c<o;);if(512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,k)break t}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break t;for(c=0;k=i[s+c++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&c<o;);if(512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,k)break t}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u!==(65535&r.check)){t.msg="header crc mismatch",r.mode=30;break}l=u=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),t.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}t.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,2;t.adler=r.check=1,r.mode=12;case 12:if(5===e||6===e)break t;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==e)break;u>>>=2,l-=2;break t;case 2:r.mode=17;break;case 3:t.msg="invalid block type",r.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){t.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===e)break t;case 15:r.mode=16;case 16:if(c=r.length){if(o<c&&(c=o),h<c&&(c=h),0===c)break t;I.arraySet(n,i,s,c,a),o-=c,s+=c,h-=c,a+=c,r.length-=c;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){t.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){t.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else{if(16===b){for(z=_+2;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u>>>=_,l-=_,0===r.have){t.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],c=3+(3&u),u>>>=2,l-=2}else if(17===b){for(z=_+3;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}l-=_,k=0,c=3+(7&(u>>>=_)),u>>>=3,l-=3}else{for(z=_+7;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}l-=_,k=0,c=11+(127&(u>>>=_)),u>>>=7,l-=7}if(r.have+c>r.nlen+r.ndist){t.msg="invalid bit length repeat",r.mode=30;break}for(;c--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){t.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){t.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){t.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===e)break t;case 20:r.mode=21;case 21:if(6<=o&&258<=h){t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,R(t,d),a=t.next_out,n=t.output,h=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){t.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,64&g){t.msg="invalid distance code",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){t.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===h)break t;if(c=d-h,r.offset>c){if((c=r.offset-c)>r.whave&&r.sane){t.msg="invalid distance too far back",r.mode=30;break}p=c>r.wnext?(c-=r.wnext,r.wsize-c):r.wnext-c,c>r.length&&(c=r.length),m=r.window}else m=n,p=a-r.offset,c=r.length;for(h<c&&(c=h),h-=c,r.length-=c;n[a++]=m[p++],--c;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break t;n[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break t;o--,u|=i[s++]<<l,l+=8}if(d-=h,t.total_out+=d,r.total+=d,d&&(t.adler=r.check=r.flags?B(r.check,n,d,a-d):O(r.check,n,d,a-d)),d=h,(r.flags?u:L(u))!==r.check){t.msg="incorrect data check",r.mode=30;break}l=u=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u!==(4294967295&r.total)){t.msg="incorrect length check",r.mode=30;break}l=u=0}r.mode=29;case 29:x=1;break t;case 30:x=-3;break t;case 31:return-4;case 32:default:return U}return t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,(r.wsize||d!==t.avail_out&&r.mode<30&&(r.mode<27||4!==e))&&Z(t,t.output,t.next_out,d-t.avail_out)?(r.mode=31,-4):(f-=t.avail_in,d-=t.avail_out,t.total_in+=f,t.total_out+=d,r.total+=d,r.wrap&&d&&(t.adler=r.check=r.flags?B(r.check,n,d,t.next_out-d):O(r.check,n,d,t.next_out-d)),t.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===d||4===e)&&x===N&&(x=-5),x)},r.inflateEnd=function(t){if(!t||!t.state)return U;var e=t.state;return e.window&&(e.window=null),t.state=null,N},r.inflateGetHeader=function(t,e){var r;return t&&t.state?0==(2&(r=t.state).wrap)?U:((r.head=e).done=!1,N):U},r.inflateSetDictionary=function(t,e){var r,i=e.length;return t&&t.state?0!==(r=t.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,e,i,0)!==r.check?-3:Z(t,e,i,i)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,e,r){"use strict";var D=t("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,r,i,n,s,a,o){var h,u,l,f,d,c,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<i;v++)O[e[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return-1;if(0<z&&(0===t||1!==w))return-1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<i;v++)0!==e[r+v]&&(a[B[e[r+v]]++]=v);if(c=0===t?(A=R=a,19):1===t?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,d=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===t&&852<C||2===t&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<c?(m=0,a[v]):a[v]>c?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;n[d+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=e[r+a[v]]}if(k<b&&(E&f)!==l){for(0===S&&(S=k),d+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===t&&852<C||2===t&&592<C)return 1;n[l=E&f]=k<<24|x<<16|d-s|0}}return 0!==E&&(n[d+E]=b-S<<24|64<<16|0),o.bits=k,0}},{"../utils/common":41}],51:[function(t,e,r){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,e,r){"use strict";var n=t("../utils/common"),o=0,h=1;function i(t){for(var e=t.length;0<=--e;)t[e]=0}var s=0,a=29,u=256,l=u+1+a,f=30,d=19,_=2*l+1,g=15,c=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));i(z);var C=new Array(2*f);i(C);var E=new Array(512);i(E);var A=new Array(256);i(A);var I=new Array(a);i(I);var O,B,R,T=new Array(f);function D(t,e,r,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=r,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}function F(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function N(t){return t<256?E[t]:E[256+(t>>>7)]}function U(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function P(t,e,r){t.bi_valid>c-r?(t.bi_buf|=e<<t.bi_valid&65535,U(t,t.bi_buf),t.bi_buf=e>>c-t.bi_valid,t.bi_valid+=r-c):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=r)}function L(t,e,r){P(t,r[2*e],r[2*e+1])}function j(t,e){for(var r=0;r|=1&t,t>>>=1,r<<=1,0<--e;);return r>>>1}function Z(t,e,r){var i,n,s=new Array(g+1),a=0;for(i=1;i<=g;i++)s[i]=a=a+r[i-1]<<1;for(n=0;n<=e;n++){var o=t[2*n+1];0!==o&&(t[2*n]=j(s[o]++,o))}}function W(t){var e;for(e=0;e<l;e++)t.dyn_ltree[2*e]=0;for(e=0;e<f;e++)t.dyn_dtree[2*e]=0;for(e=0;e<d;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*m]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function M(t){8<t.bi_valid?U(t,t.bi_buf):0<t.bi_valid&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function H(t,e,r,i){var n=2*e,s=2*r;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[r]}function G(t,e,r){for(var i=t.heap[r],n=r<<1;n<=t.heap_len&&(n<t.heap_len&&H(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!H(e,i,t.heap[n],t.depth));)t.heap[r]=t.heap[n],r=n,n<<=1;t.heap[r]=i}function K(t,e,r){var i,n,s,a,o=0;if(0!==t.last_lit)for(;i=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],n=t.pending_buf[t.l_buf+o],o++,0===i?L(t,n,e):(L(t,(s=A[n])+u+1,e),0!==(a=w[s])&&P(t,n-=I[s],a),L(t,s=N(--i),r),0!==(a=k[s])&&P(t,i-=T[s],a)),o<t.last_lit;);L(t,m,e)}function Y(t,e){var r,i,n,s=e.dyn_tree,a=e.stat_desc.static_tree,o=e.stat_desc.has_stree,h=e.stat_desc.elems,u=-1;for(t.heap_len=0,t.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(t.heap[++t.heap_len]=u=r,t.depth[r]=0):s[2*r+1]=0;for(;t.heap_len<2;)s[2*(n=t.heap[++t.heap_len]=u<2?++u:0)]=1,t.depth[n]=0,t.opt_len--,o&&(t.static_len-=a[2*n+1]);for(e.max_code=u,r=t.heap_len>>1;1<=r;r--)G(t,s,r);for(n=h;r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],G(t,s,1),i=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=i,s[2*n]=s[2*r]+s[2*i],t.depth[n]=(t.depth[r]>=t.depth[i]?t.depth[r]:t.depth[i])+1,s[2*r+1]=s[2*i+1]=n,t.heap[1]=n++,G(t,s,1),2<=t.heap_len;);t.heap[--t.heap_max]=t.heap[1],function(t,e){var r,i,n,s,a,o,h=e.dyn_tree,u=e.max_code,l=e.stat_desc.static_tree,f=e.stat_desc.has_stree,d=e.stat_desc.extra_bits,c=e.stat_desc.extra_base,p=e.stat_desc.max_length,m=0;for(s=0;s<=g;s++)t.bl_count[s]=0;for(h[2*t.heap[t.heap_max]+1]=0,r=t.heap_max+1;r<_;r++)p<(s=h[2*h[2*(i=t.heap[r])+1]+1]+1)&&(s=p,m++),h[2*i+1]=s,u<i||(t.bl_count[s]++,a=0,c<=i&&(a=d[i-c]),o=h[2*i],t.opt_len+=o*(s+a),f&&(t.static_len+=o*(l[2*i+1]+a)));if(0!==m){do{for(s=p-1;0===t.bl_count[s];)s--;t.bl_count[s]--,t.bl_count[s+1]+=2,t.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(i=t.bl_count[s];0!==i;)u<(n=t.heap[--r])||(h[2*n+1]!==s&&(t.opt_len+=(s-h[2*n+1])*h[2*n],h[2*n+1]=s),i--)}}(t,e),Z(s,u,t.bl_count)}function X(t,e,r){var i,n,s=-1,a=e[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),e[2*(r+1)+1]=65535,i=0;i<=r;i++)n=a,a=e[2*(i+1)+1],++o<h&&n===a||(o<u?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[2*b]++):o<=10?t.bl_tree[2*v]++:t.bl_tree[2*y]++,s=n,u=(o=0)===a?(h=138,3):n===a?(h=6,3):(h=7,4))}function V(t,e,r){var i,n,s=-1,a=e[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),i=0;i<=r;i++)if(n=a,a=e[2*(i+1)+1],!(++o<h&&n===a)){if(o<u)for(;L(t,n,t.bl_tree),0!=--o;);else 0!==n?(n!==s&&(L(t,n,t.bl_tree),o--),L(t,b,t.bl_tree),P(t,o-3,2)):o<=10?(L(t,v,t.bl_tree),P(t,o-3,3)):(L(t,y,t.bl_tree),P(t,o-11,7));s=n,u=(o=0)===a?(h=138,3):n===a?(h=6,3):(h=7,4)}}i(T);var q=!1;function J(t,e,r,i){P(t,(s<<1)+(i?1:0),3),function(t,e,r,i){M(t),i&&(U(t,r),U(t,~r)),n.arraySet(t.pending_buf,t.window,e,r,t.pending),t.pending+=r}(t,e,r,!0)}r._tr_init=function(t){q||(function(){var t,e,r,i,n,s=new Array(g+1);for(i=r=0;i<a-1;i++)for(I[i]=r,t=0;t<1<<w[i];t++)A[r++]=i;for(A[r-1]=i,i=n=0;i<16;i++)for(T[i]=n,t=0;t<1<<k[i];t++)E[n++]=i;for(n>>=7;i<f;i++)for(T[i]=n<<7,t=0;t<1<<k[i]-7;t++)E[256+n++]=i;for(e=0;e<=g;e++)s[e]=0;for(t=0;t<=143;)z[2*t+1]=8,t++,s[8]++;for(;t<=255;)z[2*t+1]=9,t++,s[9]++;for(;t<=279;)z[2*t+1]=7,t++,s[7]++;for(;t<=287;)z[2*t+1]=8,t++,s[8]++;for(Z(z,l+1,s),t=0;t<f;t++)C[2*t+1]=5,C[2*t]=j(t,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,d,p)}(),q=!0),t.l_desc=new F(t.dyn_ltree,O),t.d_desc=new F(t.dyn_dtree,B),t.bl_desc=new F(t.bl_tree,R),t.bi_buf=0,t.bi_valid=0,W(t)},r._tr_stored_block=J,r._tr_flush_block=function(t,e,r,i){var n,s,a=0;0<t.level?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,r=4093624447;for(e=0;e<=31;e++,r>>>=1)if(1&r&&0!==t.dyn_ltree[2*e])return o;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return h;for(e=32;e<u;e++)if(0!==t.dyn_ltree[2*e])return h;return o}(t)),Y(t,t.l_desc),Y(t,t.d_desc),a=function(t){var e;for(X(t,t.dyn_ltree,t.l_desc.max_code),X(t,t.dyn_dtree,t.d_desc.max_code),Y(t,t.bl_desc),e=d-1;3<=e&&0===t.bl_tree[2*S[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),n=t.opt_len+3+7>>>3,(s=t.static_len+3+7>>>3)<=n&&(n=s)):n=s=r+5,r+4<=n&&-1!==e?J(t,e,r,i):4===t.strategy||s===n?(P(t,2+(i?1:0),3),K(t,z,C)):(P(t,4+(i?1:0),3),function(t,e,r,i){var n;for(P(t,e-257,5),P(t,r-1,5),P(t,i-4,4),n=0;n<i;n++)P(t,t.bl_tree[2*S[n]+1],3);V(t,t.dyn_ltree,e-1),V(t,t.dyn_dtree,r-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),K(t,t.dyn_ltree,t.dyn_dtree)),W(t),i&&M(t)},r._tr_tally=function(t,e,r){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&r,t.last_lit++,0===e?t.dyn_ltree[2*r]++:(t.matches++,e--,t.dyn_ltree[2*(A[r]+u+1)]++,t.dyn_dtree[2*N(e)]++),t.last_lit===t.lit_bufsize-1},r._tr_align=function(t){P(t,2,3),L(t,m,z),function(t){16===t.bi_valid?(U(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):8<=t.bi_valid&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},{"../utils/common":41}],53:[function(t,e,r){"use strict";e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,e,r){"use strict";e.exports="function"==typeof setImmediate?setImmediate:function(){var t=[].slice.apply(arguments);t.splice(1,0,0),setTimeout.apply(null,t)}},{}]},{},[10])(10)});

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
exports.Renderer = exports.startGame = exports.setMusicOn = exports.setSoundOn = exports.setPrescaleTilesets = exports.shouldPrescaleTilesets = exports.setUseXbr = exports.shouldUseXbr = exports.isMusicOn = exports.isSoundOn = void 0;
var BitmapImpl_1 = __webpack_require__(/*! ./impl/BitmapImpl */ "./src/impl/BitmapImpl.ts");
var FontImpl_1 = __webpack_require__(/*! ./impl/FontImpl */ "./src/impl/FontImpl.ts");
var GraphicsImpl_1 = __webpack_require__(/*! ./impl/GraphicsImpl */ "./src/impl/GraphicsImpl.ts");
var SoundImpl_1 = __webpack_require__(/*! ./impl/SoundImpl */ "./src/impl/SoundImpl.ts");
var TilesetImpl_1 = __webpack_require__(/*! ./impl/TilesetImpl */ "./src/impl/TilesetImpl.ts");
var LDTKWorld_1 = __webpack_require__(/*! ./tilemaps/LDTKWorld */ "./src/tilemaps/LDTKWorld.ts");
var JSZip = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
var Palette_1 = __webpack_require__(/*! ./impl/Palette */ "./src/impl/Palette.ts");
var OpenGLGraphicsImpl_1 = __webpack_require__(/*! ./opengl/OpenGLGraphicsImpl */ "./src/opengl/OpenGLGraphicsImpl.ts");
var OpenGLBitmap_1 = __webpack_require__(/*! ./opengl/OpenGLBitmap */ "./src/opengl/OpenGLBitmap.ts");
var OpenGLTilesetImpl_1 = __webpack_require__(/*! ./opengl/OpenGLTilesetImpl */ "./src/opengl/OpenGLTilesetImpl.ts");
var GAME_LOOP;
var SOUND_ON = true;
var MUSIC_ON = true;
var PRESCALE_TILESETS = false;
var USE_XBR = false;
function isSoundOn() {
    return SOUND_ON;
}
exports.isSoundOn = isSoundOn;
function isMusicOn() {
    return MUSIC_ON;
}
exports.isMusicOn = isMusicOn;
function shouldUseXbr() {
    return USE_XBR;
}
exports.shouldUseXbr = shouldUseXbr;
function setUseXbr(on) {
    USE_XBR = on;
}
exports.setUseXbr = setUseXbr;
function shouldPrescaleTilesets() {
    return PRESCALE_TILESETS;
}
exports.shouldPrescaleTilesets = shouldPrescaleTilesets;
function setPrescaleTilesets(on) {
    PRESCALE_TILESETS = on;
}
exports.setPrescaleTilesets = setPrescaleTilesets;
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
function startGame(game, renderer) {
    if (renderer === void 0) { renderer = Renderer.CANVAS; }
    var loop = new GameLoop();
    loop.renderer = renderer;
    GAME_LOOP = loop.start(game);
}
exports.startGame = startGame;
var Renderer;
(function (Renderer) {
    Renderer["CANVAS"] = "Canvas";
    Renderer["OPENGL"] = "OpenGL";
})(Renderer = exports.Renderer || (exports.Renderer = {}));
;
var GameLoop = /** @class */ (function () {
    function GameLoop() {
        this.resources = [];
        this.lastFrame = 0;
        this.inited = false;
        this.mainZip = undefined;
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
    GameLoop.prototype.allResourcesLoaded = function () {
        for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
            var resource = _a[_i];
            if (!resource.loaded) {
                if (this.lastWaiting !== resource.name) {
                    if (this.lastWaiting) {
                        console.log("[GUTE] Was waiting on: " + this.lastWaiting + " for " + this.wait + " frames");
                    }
                    this.lastWaiting = resource.name;
                    this.wait = 0;
                }
                this.wait++;
                return false;
            }
        }
        if (this.lastWaiting) {
            console.log("[GUTE] Was waiting on last one: " + this.lastWaiting + " for " + this.wait + " frames");
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
                console.log(e);
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
                console.log(e);
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
                console.log(e);
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
                console.log(e);
            }
        });
        this.graphics.canvas.addEventListener("mousedown", function (event) {
            try {
                _this.shiftPressed = event.shiftKey;
                _this.commandPressed = event.metaKey;
                _this.controlPressed = event.ctrlKey;
                _this.altPressed = event.altKey;
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
                _this.shiftPressed = event.shiftKey;
                _this.commandPressed = event.metaKey;
                _this.controlPressed = event.ctrlKey;
                _this.altPressed = event.altKey;
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
                _this.shiftPressed = event.shiftKey;
                _this.commandPressed = event.metaKey;
                _this.controlPressed = event.ctrlKey;
                _this.altPressed = event.altKey;
                _this.mouseUpHandler(event.offsetX, event.offsetY, event.button);
                event.preventDefault();
                event.stopPropagation();
            }
            catch (e) {
                console.log(e);
            }
        });
        window.addEventListener("keydown", function (event) {
            _this.shiftPressed = event.shiftKey;
            _this.commandPressed = event.metaKey;
            _this.controlPressed = event.ctrlKey;
            _this.altPressed = event.altKey;
            _this.keyDownHandler(event.code);
        });
        window.addEventListener("keyup", function (event) {
            _this.shiftPressed = event.shiftKey;
            _this.commandPressed = event.metaKey;
            _this.controlPressed = event.ctrlKey;
            _this.altPressed = event.altKey;
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
        this.graphics.renderStart();
        this.graphics.applyFont();
        this.game.update(this, delta);
        this.game.render(this, this.graphics);
        this.graphics.renderEnd();
        var error = this.graphics.getError();
        if (error) {
            this.game.rendererError(error);
            throw new Error("Renderer Error - " + error);
        }
        requestAnimationFrame(function () {
            _this.loop();
        });
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
                    _this.mainZip = zip;
                    resolve();
                });
            };
            req.onerror = function (e) {
                reject(e);
            };
            req.send();
        });
    };
    GameLoop.prototype.loadMusic = function (url) {
        var bufferPromise = undefined;
        if (url.indexOf("_/") >= 0) {
            bufferPromise = this.mainZip.file(url.substring(url.indexOf("_/"))).async("arraybuffer");
        }
        var sound = new SoundImpl_1.SoundImpl(url, true, bufferPromise);
        if (!this.allResourcesLoaded()) {
            this.resources.push(sound);
        }
        return sound;
    };
    GameLoop.prototype.loadSound = function (url) {
        var bufferPromise = undefined;
        if (url.indexOf("_/") >= 0) {
            bufferPromise = this.mainZip.file(url.substring(url.indexOf("_/"))).async("arraybuffer");
        }
        var sound = new SoundImpl_1.SoundImpl(url, false, bufferPromise);
        this.resources.push(sound);
        return sound;
    };
    GameLoop.prototype.toPotentialZipLoadBlob = function (url) {
        if (url.indexOf("_/") >= 0) {
            return this.mainZip.file(url.substring(url.indexOf("_/"))).async("blob");
        }
        return undefined;
    };
    GameLoop.prototype.toPotentialZipLoad = function (url) {
        if (url.indexOf("_/") >= 0) {
            return this.mainZip.file(url.substring(url.indexOf("_/"))).async("base64");
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
            var bitmap = new OpenGLBitmap_1.OpenGLBitmap(this.graphics, url, this.toPotentialZipLoad(url), this.palette);
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
                return _this.mainZip.file(url.substring(url.indexOf("_/"))).async("string").then(function (result) {
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
                return _this.mainZip.file(url).async("string").then(function (result) {
                    try {
                        var data = JSON.parse(transform ? transform(result) : result);
                        resolve(data);
                    }
                    catch (e) {
                        console.log("Failed to parse JSON: " + url);
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
})(SoundEasing = exports.SoundEasing || (exports.SoundEasing = {}));
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
            // console.log(`Sound ended: ${sound.name}, total: ${this.points.length}`)
        });
        source.start();
        // console.log(`Sound started: ${sound.name}, total: ${this.points.length}`)
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
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitmapImpl = void 0;
var BitmapImpl = /** @class */ (function () {
    function BitmapImpl(url, dataUrlLoader, pal) {
        var _this = this;
        if (pal === void 0) { pal = undefined; }
        this.width = 0;
        this.height = 0;
        this.loaded = false;
        this.name = url;
        this.image = new Image();
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
    GraphicsImpl.prototype.getOffscreen = function () {
        return this.offscreen;
    };
    GraphicsImpl.prototype.drawToOffscreen = function (screen) {
        if (screen) {
            this.ctx = screen.ctx;
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
var AudioContext;
if (typeof window !== "undefined") {
    AudioContext = window.AudioContext || window.webkitAudioContext;
}
function handleVisibilityChange() {
    if (Gute_1.isMusicOn()) {
        if (SoundImpl.CURRENT_MUSIC) {
            if (document.hidden) {
                SoundImpl.CURRENT_MUSIC.stop();
                try {
                    exports.AUDIO_CONTEXT.suspend().catch(function (e) {
                        console.log("Suspend audio context failed");
                        console.error(e);
                    });
                }
                catch (e) {
                    console.log("Suspend audio context failed");
                    console.error(e);
                }
            }
            else {
                try {
                    exports.AUDIO_CONTEXT.resume().catch(function (e) {
                        console.log("Resume audio context failed");
                        console.error(e);
                    });
                }
                catch (e) {
                    console.log("Resume audio context failed");
                    console.error(e);
                }
                setTimeout(function () {
                    SoundImpl.CURRENT_MUSIC.play(SoundImpl.CURRENT_MUSIC.volume);
                }, 500);
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
                }, function (e) { console.log("Failed to load: " + _this.url); });
                if (promise) {
                    promise.then(function () { }).catch(function (e) { });
                }
            }
            catch (e) {
                console.log("decodeAudioData exception on loading " + this.url);
            }
        }
    };
    SoundImpl.prototype.confirmAudioContext = function () {
        try {
            exports.AUDIO_CONTEXT.resume().catch(function (e) {
                console.log("Resume audio context failed");
                console.error(e);
            });
        }
        catch (e) {
            console.log("Resume audio context failed");
        }
    };
    SoundImpl.prototype.initOnFirstClick = function () {
        if (!exports.AUDIO_CONTEXT) {
            try {
                exports.AUDIO_CONTEXT = new AudioContext();
                exports.AUDIO_CONTEXT.resume().catch(function (e) {
                    console.log("Resume audio context failed");
                    console.error(e);
                });
            }
            catch (e) {
                console.log("Resume audio context failed");
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
        if (this.music && !Gute_1.isMusicOn()) {
            return;
        }
        else if (!this.music && !Gute_1.isSoundOn()) {
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
        if (!Gute_1.shouldPrescaleTilesets() && Gute_1.shouldUseXbr() && (this.scale === 2 || this.scale === 3)) {
            if (!this.cached[this.scale]) {
                this.cached[this.scale] = document.createElement("canvas");
                this.cached[this.scale].width = this.width;
                this.cached[this.scale].height = this.height;
                var ctx_1 = this.cached[this.scale].getContext("2d");
                ctx_1.drawImage(this.image, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
                var originalImageData = ctx_1.getImageData(0, 0, this.width, this.height);
                var originalPixelView = new Uint32Array(originalImageData.data.buffer);
                var scaledPixelView = this.scale === 2 ? xbr_js_1.xbr2x(originalPixelView, this.width, this.height) : xbr_js_1.xbr3x(originalPixelView, this.width, this.height);
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
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height, x, y, this.width * this.scale, this.height * this.scale);
        }
    };
    Tile.prototype.drawScaled = function (graphics, x, y, width, height) {
        var ctx = graphics.ctx;
        var scale = Math.min(Math.floor(width / this.width), Math.floor(height / this.height));
        if (!Gute_1.shouldPrescaleTilesets() && Gute_1.shouldUseXbr() && (scale === 2 || scale === 3)) {
            if (!this.cached[scale]) {
                this.cached[scale] = document.createElement("canvas");
                this.cached[scale].width = this.width;
                this.cached[scale].height = this.height;
                var ctx_2 = this.cached[scale].getContext("2d");
                ctx_2.drawImage(this.image, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
                var originalImageData = ctx_2.getImageData(0, 0, this.width, this.height);
                var originalPixelView = new Uint32Array(originalImageData.data.buffer);
                var scaledPixelView = scale === 2 ? xbr_js_1.xbr2x(originalPixelView, this.width, this.height) : xbr_js_1.xbr3x(originalPixelView, this.width, this.height);
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
        var _this = this;
        if (scale === void 0) { scale = 1; }
        if (pal === void 0) { pal = undefined; }
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
        this.image.onload = function () {
            if (Gute_1.shouldPrescaleTilesets() && scale !== 1) {
                var scaledImage = document.createElement("canvas");
                if (Gute_1.shouldUseXbr()) {
                    var ctx = scaledImage.getContext("2d");
                    ctx.drawImage(_this.image, 0, 0);
                    var originalImageData = ctx.getImageData(0, 0, _this.image.width, _this.image.height);
                    var originalPixelView = new Uint32Array(originalImageData.data.buffer);
                    var scaledPixelView = scale === 2 ? xbr_js_1.xbr2x(originalPixelView, _this.image.width, _this.image.height) : xbr_js_1.xbr3x(originalPixelView, _this.image.width, _this.image.height);
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

/***/ "./src/opengl/OpenGLBitmap.ts":
/*!************************************!*\
  !*** ./src/opengl/OpenGLBitmap.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NullBitmap = exports.OpenGLBitmap = void 0;
var OpenGLBitmap = /** @class */ (function () {
    function OpenGLBitmap(graphics, url, dataUrlLoader, pal) {
        var _this = this;
        if (pal === void 0) { pal = undefined; }
        this.width = 0;
        this.height = 0;
        this.loaded = false;
        this.texX = 0;
        this.texY = 0;
        graphics.registerImage(this);
        this.name = url;
        this.image = new Image();
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

var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpenGLGraphicsImpl = exports.getMaxTextureSize = exports.colToNumber = void 0;
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
    }
    return result;
}
exports.colToNumber = colToNumber;
var isFirefox = typeof InstallTrigger !== 'undefined';
var COL_CACHE = {};
function getMaxTextureSize() {
    var canvas = document.createElement("canvas");
    var gl = canvas.getContext('experimental-webgl', { antialias: false, alpha: false, preserveDrawingBuffer: true });
    if (!gl) {
        return 0;
    }
    return gl.getParameter(gl.MAX_TEXTURE_SIZE);
}
exports.getMaxTextureSize = getMaxTextureSize;
var OpenGLGraphicsImpl = /** @class */ (function () {
    function OpenGLGraphicsImpl() {
        var _this = this;
        this.offscreen = null;
        this.images = [];
        this.atlasTexture = null;
        this.texWidth = 0;
        this.texHeight = 0;
        this.offscreenId = 1;
        this.offscreens = [];
        this.loaded = false;
        this.maxDraws = 10000;
        this.draws = 0;
        this.alphas = [];
        this.transforms = [];
        this.states = [];
        this.brightness = 0;
        this.translateX = 0;
        this.translateY = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.rotation = 0;
        this.clipX = 0;
        this.clipY = 0;
        this.clipX2 = 0;
        this.clipY2 = 0;
        this.alpha = 255;
        this.transformCanvas = document.createElement("canvas");
        this.transformCtx = this.transformCanvas.getContext("2d");
        this.state = this;
        this.canvas = document.getElementById("gamecanvas");
        this.canvas.style.fontSmooth = "never";
        this.canvas.style.webkitFontSmoothing = "none";
        if (isFirefox) {
            this.canvas.style.imageRendering = "crisp-edges";
        }
        else {
            this.canvas.style.imageRendering = "pixelated";
        }
        this.gl = this.canvas.getContext('experimental-webgl', { antialias: false, alpha: false, preserveDrawingBuffer: true });
        var extension = this.gl.getExtension('ANGLE_instanced_arrays');
        this.extension = extension;
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.gl.enable(this.gl.BLEND);
        this.gl.disable(this.gl.DEPTH_TEST);
        var shortsPerImagePosition = 2;
        var shortsPerImageSize = 2;
        var shortsPerImageTexPos = 4;
        var bytesPerImageRgba = 4;
        var floatsPerImageRotation = 1;
        var bytesPerImage = shortsPerImagePosition * 2 + shortsPerImageSize * 2 + shortsPerImageTexPos * 2 + bytesPerImageRgba + floatsPerImageRotation * 4;
        this.arrayBuffer = new ArrayBuffer(this.maxDraws * bytesPerImage);
        this.positions = new Int16Array(this.arrayBuffer);
        this.rotations = new Float32Array(this.arrayBuffer);
        this.rgbas = new Uint32Array(this.arrayBuffer);
        var vertCode = "\
			attribute vec2 aSizeMult;\
			attribute vec2 aPos;\
			attribute vec2 aSize;\
			attribute vec4 aTexPos;\
			attribute vec4 aRgba;\
			attribute float aRotation;\
			\
			varying highp vec2 fragTexturePos;\
			varying vec4 fragAbgr;\
			\
			uniform vec2 uCanvasSize;\
			uniform vec2 uTexSize;\
			\
			void main(void){\
				vec2 drawPos;\
				if(aRotation != 0.0){\
					float goX = cos(aRotation);\
					float goY = sin(aRotation);\
					vec2 cornerPos = aSize * (aSizeMult);\
					drawPos = (aPos + vec2(goX*cornerPos.x - goY*cornerPos.y, goY*cornerPos.x + goX*cornerPos.y)) / uCanvasSize;\
				} else {\
					drawPos = (aPos + aSize*aSizeMult) / uCanvasSize;\
				}\
				gl_Position = vec4(drawPos.x - 1.0, 1.0 - drawPos.y, 0.0, 1.0);\
				fragTexturePos = (aTexPos.xy + aTexPos.zw * aSizeMult) / uTexSize;\
                fragAbgr = vec4(aRgba.w/255.0, aRgba.z/255.0, aRgba.y/255.0, aRgba.x/255.0);\
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
                if (attribute_1) {
                    _this.gl.enableVertexAttribArray(attribute_1);
                    _this.gl.vertexAttribPointer(attribute_1, amount, dataType, false, bytesPerImage, byteOffset);
                    extension.vertexAttribDivisorANGLE(attribute_1, 1);
                    if (dataType == _this.gl.SHORT)
                        amount *= 2;
                    if (dataType == _this.gl.FLOAT)
                        amount *= 4;
                    byteOffset += amount;
                }
            }
        };
        setupAttribute("aPos", this.gl.SHORT, shortsPerImagePosition);
        setupAttribute("aSize", this.gl.SHORT, shortsPerImageSize);
        setupAttribute("aTexPos", this.gl.SHORT, shortsPerImageTexPos);
        setupAttribute("aRgba", this.gl.UNSIGNED_BYTE, bytesPerImageRgba);
        setupAttribute("aRotation", this.gl.FLOAT, floatsPerImageRotation);
    }
    OpenGLGraphicsImpl.prototype.registerImage = function (bitmap) {
        this.images.push(bitmap);
    };
    OpenGLGraphicsImpl.prototype.newResourceLoaded = function () {
        if (this.atlasTexture) {
            this.initResourceOnLoaded();
        }
    };
    OpenGLGraphicsImpl.prototype.initResourceOnLoaded = function () {
        console.log("[WEBGL] Reloading texture");
        var textureSize = 4096 * 2;
        if (this.atlasTexture) {
            this.gl.deleteTexture(this.atlasTexture);
        }
        this.atlasTexture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.atlasTexture);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, textureSize, textureSize, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
        var list = __spreadArray([], this.images);
        list.sort(function (a, b) { return a.height > b.height ? -1 : 1; });
        var whitePixel = document.createElement("canvas");
        var ctx = whitePixel.getContext("2d");
        ctx.fillStyle = '#FFF';
        ctx.fillRect(0, 0, 1, 1);
        this.gl.texSubImage2D(this.gl.TEXTURE_2D, 0, 0, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, whitePixel);
        var placed = [];
        placed.push({ texX: 0, texY: 0, width: 1, height: 1 });
        var records = list.map(function (image) { return { image: image, w: image.width, h: image.height }; });
        var _a = potpack_1.default(records), w = _a.w, h = _a.h, fill = _a.fill;
        console.log("Width: " + w + " Height: " + h + " " + (Math.floor(fill * 1000) / 10) + "%");
        for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
            var record = records_1[_i];
            record.image.texX = record.x + 1;
            record.image.texY = record.y;
        }
        for (var _b = 0, list_1 = list; _b < list_1.length; _b++) {
            var image = list_1[_b];
            this.gl.texSubImage2D(this.gl.TEXTURE_2D, 0, image.texX, image.texY, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image.image);
        }
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
        this.texWidth = textureSize;
        this.texHeight = textureSize;
        this.gl.uniform2f(this.gl.getUniformLocation(this.shaderProgram, "uTexSize"), this.texWidth, this.texHeight);
        this.resize();
        this.loaded = true;
    };
    OpenGLGraphicsImpl.prototype.resetState = function () {
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.state.alphas = [];
        this.state.translateX = 0;
        this.state.translateY = 0;
        this.state.scaleX = 1;
        this.state.scaleY = 1;
        this.state.rotation = 0;
        this.state.clipX = 0;
        this.state.clipX2 = 0;
        this.state.clipY = 0;
        this.state.clipY2 = 0;
        this.state.alpha = 255;
    };
    OpenGLGraphicsImpl.prototype.resize = function () {
        // Resize the gl viewport to be the new size of the canvas.
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        // Update the shader variables for canvas size.
        // Sending it to gl now so we don't have to do the math in JavaScript on every draw,
        // since gl wants to draw at a position from 0 to 1, and we want to do drawImage with a screen pixel position.
        this.gl.uniform2f(this.gl.getUniformLocation(this.shaderProgram, "uCanvasSize"), this.canvas.width / 2, this.canvas.height / 2);
    };
    OpenGLGraphicsImpl.prototype.getError = function () {
        if (this.gl.getError() !== 0) {
            switch (this.gl.getError()) {
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
                case WebGLRenderingContext.CONTEXT_LOST_WEBGL:
                    return "Lost WebGL Context";
            }
            return "Unknown error - " + this.gl.getError();
        }
        return undefined;
    };
    OpenGLGraphicsImpl.prototype._drawBitmap = function (img, x, y, width, height, col) {
        if (col === void 0) { col = 0xFFFFFF00; }
        this._drawImage(img.texX, img.texY, img.width, img.height, x, y, width, height, col + this.state.brightness, this.state.alpha);
    };
    OpenGLGraphicsImpl.prototype._drawImage = function (texX, texY, texWidth, texHeight, drawX, drawY, width, height, rgba, alpha) {
        var i = this.draws * 6;
        this.rgbas[i + 4] = rgba | alpha;
        this.rotations[i + 5] = this.state.rotation * Math.sign(this.state.scaleX) * Math.sign(this.state.scaleY);
        i *= 2;
        var positions = this.positions;
        if (this.state.rotation) {
            var dist = Math.sqrt(drawX * drawX + drawY * drawY);
            var angle = Math.atan2(drawY, drawX);
            drawX = Math.cos(angle + this.state.rotation) * dist;
            drawY = Math.sin(angle + this.state.rotation) * dist;
        }
        width *= this.state.scaleX;
        height *= this.state.scaleY;
        drawX *= this.state.scaleX;
        drawY *= this.state.scaleY;
        drawX += this.state.translateX;
        drawY += this.state.translateY;
        if (this.state.clipX < this.state.clipX2) {
            if (drawX > this.state.clipX2) {
                return;
            }
            var drawX2 = drawX + width;
            if (drawX2 < this.state.clipX) {
                return;
            }
            if (drawX2 > this.state.clipX2) {
                var showPercent = 1 - (drawX2 - this.state.clipX2) / width;
                texWidth *= showPercent;
                width *= showPercent;
            }
            if (drawX < this.state.clipX) {
                var showPercent = 1 - (this.state.clipX - drawX) / width;
                width -= this.state.clipX - drawX;
                drawX = this.state.clipX;
                texX += texWidth * (1 - showPercent);
                texWidth *= showPercent;
            }
        }
        if (this.state.clipY < this.state.clipY2) {
            if (drawY > this.state.clipY2) {
                return;
            }
            var drawY2 = drawY + height;
            if (drawY2 < this.state.clipY) {
                return;
            }
            if (drawY2 > this.state.clipY2) {
                var showPercent = 1 - (drawY2 - this.state.clipY2) / height;
                texHeight *= showPercent;
                height *= showPercent;
            }
            if (drawY < this.state.clipY) {
                var showPercent = 1 - (this.state.clipY - drawY) / height;
                height -= this.state.clipY - drawY;
                drawY = this.state.clipY;
                texY += texHeight * (1 - showPercent);
                texHeight *= showPercent;
            }
        }
        positions[i] = drawX;
        positions[i + 1] = drawY;
        positions[i + 2] = width;
        positions[i + 3] = height;
        positions[i + 4] = texX;
        positions[i + 5] = texY;
        positions[i + 6] = texWidth;
        positions[i + 7] = texHeight;
        this.draws++;
    };
    OpenGLGraphicsImpl.prototype.glStartContext = function () {
    };
    OpenGLGraphicsImpl.prototype.glCommitContext = function () {
        if (this.draws > 0) {
            this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, this.rgbas.subarray(0, this.draws * 6));
            this.extension.drawElementsInstancedANGLE(this.gl.TRIANGLES, 6, this.gl.UNSIGNED_BYTE, 0, this.draws);
            this.draws = 0;
        }
    };
    OpenGLGraphicsImpl.prototype.renderStart = function () {
        this.state.transforms = [];
        this.state.states = [this.state.transforms];
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
        return new OpenGLBitmap_1.NullBitmap();
    };
    OpenGLGraphicsImpl.prototype.getOffscreen = function () {
        return this.offscreen;
    };
    OpenGLGraphicsImpl.prototype.clip = function (x, y, width, height) {
        x *= this.state.scaleX;
        y *= this.state.scaleY;
        x += this.state.translateX;
        y += this.state.translateY;
        this.state.clipX = x;
        this.state.clipY = y;
        this.state.clipX2 = x + width;
        this.state.clipY2 = y + height;
    };
    OpenGLGraphicsImpl.prototype.createOffscreen = function () {
        this.offscreenId++;
        var offscreen = new OpenGLOffscreen_1.OpenGlOffscreen(this.gl, this, this.offscreenId);
        this.offscreens.push(offscreen);
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
        var offscreen = screen;
        this.glCommitContext();
        this.glStartContext();
        this.gl.uniform2f(this.gl.getUniformLocation(this.shaderProgram, "uTexSize"), offscreen.width, offscreen.height);
        this.gl.bindTexture(this.gl.TEXTURE_2D, offscreen.texture);
        this._drawImage(0, offscreen.height, offscreen.width, -offscreen.height, 0, 0, offscreen.width, offscreen.height, 0xFFFFFF00, 255);
        this.glCommitContext();
        this.gl.uniform2f(this.gl.getUniformLocation(this.shaderProgram, "uTexSize"), this.texWidth, this.texHeight);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.atlasTexture);
        this.glStartContext();
    };
    OpenGLGraphicsImpl.prototype.drawScaledOffscreen = function (screen, x, y, width, height) {
        var offscreen = screen;
        this.glCommitContext();
        this.glStartContext();
        this.gl.uniform2f(this.gl.getUniformLocation(this.shaderProgram, "uTexSize"), offscreen.width, offscreen.height);
        this.gl.bindTexture(this.gl.TEXTURE_2D, offscreen.texture);
        this._drawImage(0, offscreen.height, offscreen.width, -offscreen.height, x, y, width, height, 0xFFFFFF00, 255);
        this.glCommitContext();
        this.gl.uniform2f(this.gl.getUniformLocation(this.shaderProgram, "uTexSize"), this.texWidth, this.texHeight);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.atlasTexture);
        this.glStartContext();
    };
    OpenGLGraphicsImpl.prototype.fillRect = function (x, y, width, height, col) {
        var rgba = colToNumber(col);
        var a = (rgba % 256);
        this._drawImage(0, 0, 1, 1, x, y, width, height, rgba, a);
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
        bitmap.draw(this, x, y);
    };
    OpenGLGraphicsImpl.prototype.drawScaledBitmap = function (x, y, width, height, bitmap) {
        bitmap.drawScaled(this, x, y, width, height);
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
        x = Math.floor(x);
        y = Math.floor(y);
        this._translate(x, y);
        this.transformCtx.translate(x, y);
        this.state.transforms.push(["translate", x, y]);
    };
    OpenGLGraphicsImpl.prototype._translate = function (x, y) {
        x *= this.state.scaleX;
        y *= this.state.scaleY;
        if (this.state.rotation) {
            var angle = Math.atan2(y, x);
            var dist = Math.sqrt(x * x + y * y);
            this.state.translateX += Math.cos(angle + this.state.rotation * Math.sign(this.state.scaleX)) * dist;
            this.state.translateY += Math.sin(angle + this.state.rotation * Math.sign(this.state.scaleY)) * dist;
        }
        else {
            this.state.translateX += x;
            this.state.translateY += y;
        }
    };
    OpenGLGraphicsImpl.prototype.scale = function (x, y) {
        this.state.scaleX *= x;
        this.state.scaleY *= y;
        this.transformCtx.scale(x, y);
        this.state.transforms.push(["scale", x, y]);
    };
    OpenGLGraphicsImpl.prototype.push = function () {
        this.transformCtx.save();
        this.state.transforms = [];
        this.state.states.push(this.state.transforms);
        this.state.alphas.push(this.state.alpha);
        if (this.state.states.length > 99)
            console.error("save() without restore()!");
    };
    OpenGLGraphicsImpl.prototype.pop = function () {
        this.transformCtx.restore();
        this.state.states.pop();
        this.state.transforms = this.states[this.states.length - 1];
        this.resetState();
        for (var _i = 0, _a = this.state.states; _i < _a.length; _i++) {
            var transforms = _a[_i];
            for (var _b = 0, transforms_1 = transforms; _b < transforms_1.length; _b++) {
                var transform = transforms_1[_b];
                var name = transform[0];
                if (name == 'translate') {
                    this._translate(transform[1], transform[2]);
                }
                else if (name == 'scale') {
                    this.state.scaleX *= transform[1];
                    this.state.scaleY *= transform[2];
                }
                else if (name == 'rotate') {
                    this.state.rotation += transform[1];
                }
            }
        }
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
        this.state.alpha = Math.floor(alpha * 255);
    };
    OpenGLGraphicsImpl.prototype.getTransform = function () {
        return this.transformCtx.getTransform();
    };
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
        this.alphas = [];
        this.transforms = [];
        this.states = [];
        this.brightness = 0;
        this.translateX = 0;
        this.translateY = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.rotation = 0;
        this.clipX = 0;
        this.clipY = 0;
        this.clipX2 = 0;
        this.clipY2 = 0;
        this.alpha = 255;
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
    OpenGlOffscreen.prototype.use = function () {
        if (this.inuse) {
            return;
        }
        this.graphics.glCommitContext();
        this.inuse = true;
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fb);
        this.gl.uniform2f(this.gl.getUniformLocation(this.graphics.shaderProgram, "uCanvasSize"), Math.floor(this.width / 2), Math.floor(this.height / 2));
        this.gl.viewport(0, 0, this.width, this.height);
        this.graphics.state = this;
        this.graphics.resetState();
        this.graphics.glStartContext();
    };
    OpenGlOffscreen.prototype.unuse = function () {
        if (!this.inuse) {
            return;
        }
        this.inuse = false;
        this.graphics.glCommitContext();
        this.graphics.state = this.graphics;
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.viewport(0, 0, this.graphics.canvas.width, this.graphics.canvas.height);
        this.gl.uniform2f(this.gl.getUniformLocation(this.graphics.shaderProgram, "uCanvasSize"), this.graphics.canvas.width / 2, this.graphics.canvas.height / 2);
        this.graphics.glStartContext();
    };
    OpenGlOffscreen.prototype.setDimension = function (width, height) {
        width = Math.floor(width / 2) * 2;
        height = Math.floor(height / 2) * 2;
        if (this.width !== width || this.height !== height) {
            this.width = width;
            this.height = height;
            if (this.texture) {
                this.gl.deleteTexture(this.texture);
            }
            if (this.fb) {
                this.gl.deleteFramebuffer(this.fb);
            }
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
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.graphics.atlasTexture);
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
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpenGLTilesetImpl = void 0;
var OpenGLTile = /** @class */ (function () {
    function OpenGLTile(parent, image, x, y, width, height, scale) {
        this.name = "tile";
        this.texX = 0;
        this.texY = 0;
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
        g._drawBitmap(this, x, y, Math.floor(this.width * this.scale), Math.floor(this.height * this.scale), this.col);
    };
    OpenGLTile.prototype.drawScaled = function (graphics, x, y, width, height) {
        var g = graphics;
        this.texX = this.parent.texX + this.x;
        this.texY = this.parent.texY + this.y;
        g._drawBitmap(this, x, y, width, height, this.col);
    };
    OpenGLTile.prototype.initOnFirstClick = function () {
    };
    return OpenGLTile;
}());
var OpenGLTilesetImpl = /** @class */ (function () {
    function OpenGLTilesetImpl(graphics, url, dataUrlLoader, tileWidth, tileHeight, scale, pal) {
        var _this = this;
        if (scale === void 0) { scale = 1; }
        if (pal === void 0) { pal = undefined; }
        this.loaded = false;
        this.bitmaps = [];
        this.scanline = 0;
        this.tileCount = 0;
        this.onLoaded = function () { };
        this.texX = 0;
        this.texY = 0;
        this.tintTiles = {};
        this.tileWidth = this.originalTileWidth = tileWidth;
        this.tileHeight = this.originalTileHeight = tileHeight;
        this.scale = scale;
        this.name = url;
        this.image = new Image();
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
    OpenGLTilesetImpl.prototype.getTintedTile = function (tile, tintName, rgba) {
        var tiles = this.tintTiles[tintName];
        if (!tiles) {
            tiles = this.tintTiles[tintName] = [];
        }
        var tileRecord = tiles[tile];
        if (!tileRecord) {
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
            console.log("Created copy of path with zero steps: ");
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
        });
    };
    LDTKWorld.loadLayers = function (level, layerInstances, entityRefs, entityMap) {
        var _loop_2 = function (layerData) {
            if (layerData.__type === "Entities") {
                for (var _a = 0, _b = layerData.entityInstances; _a < _b.length; _a++) {
                    var entityData = _b[_a];
                    var entity = new MapEntity_1.MapEntity(level, entityData.px[0] / layerData.__gridSize, entityData.px[1] / layerData.__gridSize, entityData.width / layerData.__gridSize, entityData.height / layerData.__gridSize, entityData.__identifier);
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


/***/ }),

/***/ "./node_modules/xbr-js/src/index.js":
/*!******************************************!*\
  !*** ./node_modules/xbr-js/src/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xbr2x": () => (/* binding */ xbr2x),
/* harmony export */   "xbr3x": () => (/* binding */ xbr3x),
/* harmony export */   "xbr4x": () => (/* binding */ xbr4x)
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoundEasing = exports.SoundScape = exports.MapEntity = exports.MapLayer = exports.MapLevel = exports.MapWorld = exports.LDTKWorld = exports.Step = exports.Path = exports.AStarPathFinder = exports.Keys = exports.getMaxTextureSize = exports.BLUE = exports.RED = exports.GREEN = exports.BLACK = exports.WHITE = exports.Renderer = exports.setPrescaleTilesets = exports.setSoundOn = exports.setMusicOn = exports.isSoundOn = exports.isMusicOn = exports.startGame = void 0;
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

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ndXRlLy4vbm9kZV9tb2R1bGVzL2pzemlwL2Rpc3QvanN6aXAubWluLmpzIiwid2VicGFjazovL2d1dGUvLi9ub2RlX21vZHVsZXMvcG90cGFjay9pbmRleC5qcyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0dyYXBoaWNzLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvR3V0ZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0tleXMudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9Tb3VuZFNjYXBlLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9CaXRtYXBJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9Gb250SW1wbC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL2ltcGwvR3JhcGhpY3NJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9QYWxldHRlLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9Tb3VuZEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL1RpbGVzZXRJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvb3BlbmdsL09wZW5HTEJpdG1hcC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL29wZW5nbC9PcGVuR0xHcmFwaGljc0ltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9vcGVuZ2wvT3BlbkdMT2Zmc2NyZWVuLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvb3BlbmdsL09wZW5HTFRpbGVzZXRJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvcGF0aC9BU3RhclBhdGhGaW5kZXIudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9wYXRoL01hcE5vZGUudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9wYXRoL1BhdGgudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9wYXRoL1N0ZXAudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy90aWxlbWFwcy9MRFRLV29ybGQudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy90aWxlbWFwcy9NYXBFbnRpdHkudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy90aWxlbWFwcy9NYXBMYXllci50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcExldmVsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvdGlsZW1hcHMvTWFwV29ybGQudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL25vZGVfbW9kdWxlcy94YnItanMvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2d1dGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3V0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ3V0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2d1dGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7O0FDVkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLEdBQUcsSUFBb0Qsb0JBQW9CLEtBQUssRUFBOEssQ0FBQyxZQUFZLHlCQUF5QixnQkFBZ0IsVUFBVSxVQUFVLE1BQU0sU0FBbUMsQ0FBQyxnQkFBZ0IsT0FBQyxPQUFPLG9CQUFvQiw4Q0FBOEMsa0NBQWtDLFlBQVksWUFBWSxtQ0FBbUMsaUJBQWlCLGVBQWUsc0JBQXNCLG9CQUFvQixVQUFVLFNBQW1DLEtBQUssV0FBVyxZ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Q0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELElBQUksTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDckIsSUFBSSxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDakUsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUMxQixJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUMxQixJQUFJLFVBQVUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxJQUFJLFVBQVUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixJQUFJLFVBQVUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixJQUFJLENBQUMsR0FBRyxVQUFVLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsR0FBUTtJQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDbkUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNuRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ25FLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ3JELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ3JELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ3JELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUMsR0FBRyxDQUFDO0lBQzdELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUMsR0FBRyxDQUFDO0lBQzdELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUMsR0FBRyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRUg7SUFJRSxpQkFBWSxTQUFpQjtRQUg3QixTQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBd0IsRUFBRSxDQUFDO1FBR2hDLEtBQWtCLFVBQXFCLEVBQXJCLGNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQXJCLGNBQXFCLEVBQXJCLElBQXFCLEVBQUU7WUFBcEMsSUFBTSxHQUFHO1lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsK0JBQWEsR0FBYixVQUFjLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUMzQyxJQUFNLFVBQVUsR0FBUSxFQUFFLENBQUMsS0FBRSxDQUFDLEtBQUUsQ0FBQyxLQUFFLENBQUM7UUFDcEMsSUFBSSxTQUFTLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFFekIsS0FBcUIsVUFBUyxFQUFULFNBQUksQ0FBQyxJQUFJLEVBQVQsY0FBUyxFQUFULElBQVMsRUFBRTtZQUEzQixJQUFNLE1BQU07WUFDYixJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksR0FBRyxHQUFHLGFBQWEsRUFBRTtnQkFDckIsYUFBYSxHQUFHLEdBQUcsQ0FBQztnQkFDcEIsU0FBUyxHQUFHLE1BQU0sQ0FBQzthQUN0QjtTQUNKO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELDZCQUFXLEdBQVgsVUFBWSxLQUF1QjtRQUFuQyxpQkFvQ0M7UUFuQ0MsT0FBTyxJQUFJLE9BQU8sQ0FBbUIsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqRCxJQUFNLE1BQU0sR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRSxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDM0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzdCLElBQU0sR0FBRyxHQUFvQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBNkIsQ0FBQztZQUNqRyxJQUFJLEdBQUcsRUFBRTtnQkFDTCxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQU0sRUFBRSxHQUFjLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckUsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsSUFBRSxDQUFDLEVBQUU7b0JBQ2hDLElBQU0sR0FBRyxHQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRS9CLElBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLElBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QixJQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekIsSUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxTQUFTLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDWixTQUFTLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN4QyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQztxQkFDdEM7b0JBQ0QsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUN6QixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUNoQztnQkFDRCxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRTNCLElBQU0sUUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQzNCLFFBQU0sQ0FBQyxNQUFNLEdBQUc7b0JBQ1osT0FBTyxDQUFDLFFBQU0sQ0FBQyxDQUFDO2dCQUNwQixDQUFDO2dCQUNELFFBQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ25DO2lCQUFNO2dCQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7QUEvRFksMEJBQU87Ozs7Ozs7Ozs7Ozs7OztBQ25EcEIsaUVBQStDO0FBRy9DLElBQUksWUFBaUIsQ0FBQztBQUV0QixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtJQUNqQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksSUFBVSxNQUFPLENBQUMsa0JBQWtCLENBQUM7Q0FDeEU7QUFHRCxTQUFTLHNCQUFzQjtJQUM3QixJQUFJLGdCQUFTLEVBQUUsRUFBRTtRQUNmLElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUMzQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQy9CLElBQUk7b0JBQ0YscUJBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDO3dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7d0JBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2lCQUNKO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztvQkFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbEI7YUFDRjtpQkFBTTtnQkFDTCxJQUFJO29CQUNGLHFCQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBQzt3QkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO3dCQUMzQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQixDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7b0JBQzNDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xCO2dCQUNELFVBQVUsQ0FBQztvQkFDVCxTQUFTLENBQUMsYUFBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDVDtTQUNGO0tBQ0Y7SUFFRCxJQUFJLGdCQUFTLEVBQUUsRUFBRTtRQUNmLEtBQW1CLFVBQXVCLEVBQXZCLGNBQVMsQ0FBQyxhQUFhLEVBQXZCLGNBQXVCLEVBQXZCLElBQXVCLEVBQUU7WUFBdkMsSUFBTSxJQUFJO1lBQ2IsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Y7S0FDRjtBQUNILENBQUM7QUFFRCxJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsRUFBRTtJQUNuQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztDQUN2RTtBQUVEO0lBNENFLG1CQUFZLEdBQVcsRUFBRSxLQUFjLEVBQUUsV0FBNkM7UUFBdEYsaUJBNEJDO1FBdkNELFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUVuQixVQUFLLEdBQVksS0FBSyxDQUFDO1FBSXZCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFJdEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQyxXQUF3QjtnQkFDeEMsS0FBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzQixHQUFHLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztZQUVqQyxHQUFHLENBQUMsTUFBTSxHQUFHLFVBQUMsS0FBSztnQkFDakIsSUFBSSxXQUFXLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztnQkFDL0IsSUFBSSxXQUFXLEVBQUU7b0JBQ2YsS0FBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDaEI7WUFDSCxDQUFDLENBQUM7WUFFRixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDWjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFqRU0sd0JBQWMsR0FBckIsVUFBc0IsQ0FBUztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUVyQixLQUFtQixVQUFrQixFQUFsQixTQUFJLENBQUMsYUFBYSxFQUFsQixjQUFrQixFQUFsQixJQUFrQixFQUFFO1lBQWxDLElBQU0sSUFBSTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxxQkFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUMvRztJQUNILENBQUM7SUFFTSx3QkFBYyxHQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRU0sd0JBQWMsR0FBckIsVUFBc0IsQ0FBUztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUVyQixJQUFJLFNBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDM0IsSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtnQkFDaEMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUscUJBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDcko7U0FDRjtJQUNILENBQUM7SUFFTSx3QkFBYyxHQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBMkNPLDJCQUFPLEdBQWY7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxxQkFBYSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDOUIsSUFBSTtnQkFDRixJQUFNLE9BQU8sR0FBRyxxQkFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQUMsTUFBbUI7b0JBQzNFLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUNyQixJQUFJLFNBQVMsQ0FBQyxhQUFhLEtBQUssS0FBSSxFQUFFO3dCQUNwQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzt3QkFDL0IsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ3hCO2dCQUNILENBQUMsRUFBRSxVQUFDLENBQUMsSUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDekQsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUMsSUFBTSxDQUFDLENBQUMsQ0FBQztpQkFDekM7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pFO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsdUNBQW1CLEdBQW5CO1FBQ0UsSUFBSTtZQUNGLHFCQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBQztnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2dCQUMzQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRCxvQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMscUJBQWEsRUFBRTtZQUNsQixJQUFJO2dCQUNGLHFCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztnQkFDbkMscUJBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDO29CQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7b0JBQzNDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7YUFDNUM7U0FDRjtRQUVELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsd0JBQUksR0FBSixVQUFLLE1BQWMsRUFBRSxJQUFxQjtRQUFyQixtQ0FBcUI7UUFDeEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRTtvQkFDM0IsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDaEM7Z0JBQ0QsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7YUFDaEM7WUFDRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLFNBQVMsQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO2dCQUNwQyxJQUFJLFNBQVMsQ0FBQyxhQUFhLEVBQUU7b0JBQzNCLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2hDO2dCQUVELFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQ2hDO1lBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLE9BQU87YUFDUjtTQUNGO2FBQU07WUFDTCx5REFBeUQ7WUFDekQsaUJBQWlCO1lBQ2pCLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsT0FBTzthQUNSO1NBQ0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxnQkFBUyxFQUFFLEVBQUU7WUFDOUIsT0FBTztTQUNSO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxnQkFBUyxFQUFFLEVBQUU7WUFDdEMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUscUJBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEk7YUFBTztZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztTQUN2RDtRQUVELElBQUksSUFBSSxFQUFFO1lBQ1IsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsd0JBQUksR0FBSixVQUFLLE1BQXNCO1FBQTNCLGlCQXFCQztRQXJCSSxzQ0FBc0I7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxxQkFBYSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekUsSUFBTSxZQUFVLEdBQTBCLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3RELFVBQVUsQ0FBQztvQkFDVCxZQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNWO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDcEI7WUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtRQUVELElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBTSxLQUFLLEdBQVcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBQyxJQUFJLFFBQUMsS0FBSyxLQUFJLEVBQVYsQ0FBVSxDQUFDLENBQUM7WUFDekUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNkLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMxQztTQUNGO0lBQ0gsQ0FBQztJQTdNTSx1QkFBYSxHQUFnQixFQUFFLENBQUM7SUFFaEMscUJBQVcsR0FBVyxDQUFDLENBQUM7SUFDeEIscUJBQVcsR0FBVyxDQUFDLENBQUM7SUEyTWpDLGdCQUFDO0NBQUE7QUFoTlksOEJBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEdEIsaUVBQStEO0FBSy9ELHVGQUEyQztBQUUzQztJQVdFLGNBQVksTUFBd0IsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQUUsS0FBYTtRQUh4RyxTQUFJLEdBQVcsTUFBTSxDQUFDO1FBQ3RCLFdBQU0sR0FBc0MsRUFBRSxDQUFDO1FBRzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsbUJBQUksR0FBSixVQUFLLFFBQWtCLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDM0MsSUFBTSxHQUFHLEdBQUksUUFBeUIsQ0FBQyxHQUFHLENBQUM7UUFFM0MsSUFBSSxDQUFDLDZCQUFzQixFQUFFLElBQUksbUJBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN6RixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDN0MsSUFBTSxLQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyRCxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVwRyxJQUFNLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0UsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pFLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFLLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFakosSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMxQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7Z0JBQzVDLElBQU0sZUFBZSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksaUJBQWlCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFcEosS0FBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzVDO1lBQ0QsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNMLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdIO0lBQ0gsQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxRQUFrQixFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDaEYsSUFBTSxHQUFHLEdBQUksUUFBeUIsQ0FBQyxHQUFHLENBQUM7UUFDM0MsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLDZCQUFzQixFQUFFLElBQUksbUJBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDL0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDeEMsSUFBTSxLQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXBHLElBQU0saUJBQWlCLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzRSxJQUFNLGlCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekUsSUFBTSxlQUFlLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBSyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFLLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRTVJLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNyQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7Z0JBQ3ZDLElBQU0sZUFBZSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksaUJBQWlCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRTFJLEtBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM1QztZQUNELEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0wsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekY7SUFDSCxDQUFDO0lBRUQsK0JBQWdCLEdBQWhCO0lBQ0EsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDO0FBRUQ7SUFnQkUscUJBQVksR0FBVyxFQUFFLGFBQXdDLEVBQUUsU0FBaUIsRUFBRSxVQUFrQixFQUFFLEtBQWlCLEVBQUUsR0FBb0M7UUFBakssaUJBc0ZDO1FBdEZ5RyxpQ0FBaUI7UUFBRSxxQ0FBb0M7UUFmakssV0FBTSxHQUFZLEtBQUssQ0FBQztRQU14QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixVQUFLLEdBQXFDLEVBQUUsQ0FBQztRQUM3QyxjQUFTLEdBQTZCLEVBQUUsQ0FBQztRQUV6QyxhQUFRLEdBQWUsY0FBTyxDQUFDLENBQUM7UUFJOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUc7WUFDbEIsSUFBSSw2QkFBc0IsRUFBRSxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQzNDLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRXJELElBQUksbUJBQVksRUFBRSxFQUFFO29CQUNsQixJQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QyxHQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxLQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUVsQyxJQUFNLGlCQUFpQixHQUFHLEdBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsS0FBTSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6RixJQUFNLGlCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekUsSUFBTSxlQUFlLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUksQ0FBQyxLQUFNLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFJLENBQUMsS0FBTSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUV4SyxXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDOUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsS0FBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ2hELElBQU0sZUFBZSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksaUJBQWlCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUU1SCxHQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzFDO3FCQUFNO29CQUNMLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUM5QyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxLQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDaEQsSUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekMsR0FBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztvQkFDNUIsR0FBSyxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztvQkFDakQsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLFNBQVMsQ0FBQyxLQUFJLENBQUMsS0FBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzFFO2dCQUdELEtBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO2dCQUN6QixLQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxpQkFBaUIsSUFBSSxLQUFLLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxrQkFBa0IsSUFBSSxLQUFLLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDWDtZQUVELEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsS0FBTSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0QsSUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsS0FBTSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkUsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQztZQUV2QyxJQUFJLEdBQUcsRUFBRTtnQkFDUCxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxLQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO29CQUN0QyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFFbkIsNEJBQTRCO29CQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQU0sRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzt5QkFDM0g7cUJBQ0Y7b0JBQ0QsS0FBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDO29CQUV6QixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2hCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixDQUFDLENBQUM7YUFDSDtpQkFBTTtnQkFDTCw0QkFBNEI7Z0JBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBTSxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO3FCQUMzSDtpQkFDRjtnQkFDRCxLQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUM7Z0JBRXpCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDcEI7UUFDSCxDQUFDLENBQUM7UUFFRixJQUFJLGFBQWEsRUFBRTtZQUNqQixhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBVTtnQkFDNUIsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsS0FBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JELENBQUMsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0NBQWdCLEdBQWhCO0lBQ0EsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLElBQVksRUFBRSxRQUFnQixFQUFFLEtBQWE7UUFDekQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixJQUFNLENBQUMsR0FBVSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN0QyxJQUFNLENBQUMsR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEQsSUFBSSxLQUFLLEdBQXFCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixJQUFNLE1BQU0sR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkUsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBTSxDQUFDLEtBQUssQ0FBQztnQkFDakMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBTSxDQUFDLE1BQU0sQ0FBQztnQkFDbkMsSUFBTSxHQUFHLEdBQW9DLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JFLElBQUksR0FBRyxFQUFFO29CQUNQLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQU0sRUFBRSxDQUFDLEVBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLElBQU0sRUFBRSxHQUFjLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdkUsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsSUFBRSxDQUFDLEVBQUU7d0JBQ2xDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDO3dCQUNwQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7d0JBQ3hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztxQkFDekI7b0JBQ0QsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUM1QjtnQkFDRCxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQzlCO1lBRUQsVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNqSztRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsSUFBYztRQUMxRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdkM7UUFFRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLElBQU0sQ0FBQyxHQUFVLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3RDLElBQU0sQ0FBQyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxJQUFJLEtBQUssR0FBcUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLElBQU0sTUFBTSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRSxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNuQyxJQUFNLEdBQUcsR0FBb0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckUsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBTSxFQUFFLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsSUFBTSxFQUFFLEdBQWMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN2RSxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxJQUFFLENBQUMsRUFBRTt3QkFDbEMsb0JBQW9CO3dCQUNwQixJQUFNLEdBQUcsR0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7d0JBQ2pFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDNUM7b0JBQ0QsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUM1QjtnQkFDRCxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQzlCO1lBRUQsVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNqSztRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sWUFBNEM7UUFDakQsSUFBTSxNQUFNLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBTSxDQUFDLEtBQUssQ0FBQztRQUNqQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFNLENBQUMsTUFBTSxDQUFDO1FBQ25DLElBQU0sR0FBRyxHQUFvQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBTSxFQUFFLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFNLEVBQUUsR0FBYyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEMsS0FBbUIsVUFBWSxFQUFaLFNBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVksRUFBRTtZQUE1QixJQUFNLElBQUk7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx1Q0FBaUIsR0FBakIsVUFBa0IsSUFBWSxFQUFFLFFBQWdCLEVBQUUsR0FBYTtRQUM3RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdkM7UUFFRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLElBQU0sQ0FBQyxHQUFVLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3RDLElBQU0sQ0FBQyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxJQUFJLEtBQUssR0FBcUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLElBQU0sTUFBTSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRSxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNuQyxJQUFNLEdBQUcsR0FBb0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckUsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBTSxFQUFFLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsSUFBTSxFQUFFLEdBQWMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN2RSxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxJQUFFLENBQUMsRUFBRTt3QkFDbEMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNwRDtvQkFDRCxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzVCO2dCQUNELEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNwQixLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDOUI7WUFFRCxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2pLO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQztBQWpRWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDL0V4QjtJQVNJLHNCQUFZLFFBQTRCLEVBQUUsR0FBVyxFQUFFLGFBQTBDLEVBQUUsR0FBb0M7UUFBdkksaUJBNEJDO1FBNUJrRyxxQ0FBb0M7UUFSdkksVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFHeEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBR2IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUc7WUFDbEIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUM5QixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBRWhDLElBQUksR0FBRyxFQUFFO2dCQUNQLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQXVCO29CQUN2RCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUMvQixDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUM5QjtRQUNILENBQUMsQ0FBQztRQUVGLElBQUksYUFBYSxFQUFFO1lBQ2pCLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFjO2dCQUNoQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxPQUFPLEdBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFDLFVBQVUsR0FBQyxNQUFNLENBQUM7WUFDekUsQ0FBQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCwyQkFBSSxHQUFKLFVBQUssUUFBa0IsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUN6QyxJQUFNLENBQUMsR0FBSSxRQUErQixDQUFDO1FBQzNDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxRQUFrQixFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDOUUsSUFBTSxDQUFDLEdBQUksUUFBK0IsQ0FBQztRQUMzQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsdUNBQWdCLEdBQWhCO0lBQ0EsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FBQztBQXBEWSxvQ0FBWTtBQXVEekI7SUFBQTtRQUNJLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFNBQUksR0FBVyxNQUFNLENBQUM7SUFXMUIsQ0FBQztJQVRHLHlCQUFJLEdBQUosVUFBSyxRQUFrQixFQUFFLENBQVMsRUFBRSxDQUFTO0lBQzdDLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQVcsUUFBa0IsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxNQUFjO0lBQ2xGLENBQUM7SUFFRCxxQ0FBZ0IsR0FBaEI7SUFDQSxDQUFDO0lBRUwsaUJBQUM7QUFBRCxDQUFDO0FBZlksZ0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakV2QiwrRkFBeUU7QUFDekUsd0dBQW9EO0FBRXBELHNGQUE2QjtBQUU3QixTQUFTLFVBQVUsQ0FBQyxLQUFhO0lBQzdCLElBQUksRUFBRSxDQUFDO0lBQ1AsSUFBSSxDQUFDLENBQUM7SUFDTix5RkFBeUY7SUFDekYsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2QyxJQUFJLEVBQUUsRUFBRTtRQUNKLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDVix5RUFBeUU7UUFDekUsK0JBQStCO1FBQy9CLE9BQU87WUFDSCxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJO1lBQ2hDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUk7WUFDaEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSTtZQUNoQyxDQUFDO1NBQ0osQ0FBQztLQUNMO0lBQ0Qsa0RBQWtEO0lBQ2xELEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkMsSUFBSSxFQUFFLEVBQUU7UUFDSixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1YsT0FBTztZQUNILFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUIsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QixRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzVCLENBQUM7U0FDSixDQUFDO0tBQ0w7SUFDRCw0QkFBNEI7SUFDNUIsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsbUZBQW1GLENBQUMsQ0FBQztJQUN0RyxJQUFJLEVBQUUsRUFBRTtRQUNKLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0c7SUFDRCxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO0lBQ3JFLElBQUksRUFBRSxFQUFFO1FBQ0osT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3RGO0lBQ0Qsb0RBQW9EO0lBQ3BELDJDQUEyQztJQUMzQywrQ0FBK0M7SUFDL0MsSUFBSSxTQUFTLEdBQTJCO1FBQ3BDLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLGNBQWMsRUFBRSxTQUFTO1FBQ3pCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLGdCQUFnQixFQUFFLFNBQVM7UUFDM0IsTUFBTSxFQUFFLFNBQVM7UUFDakIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixVQUFVLEVBQUUsU0FBUztRQUNyQixTQUFTLEVBQUUsU0FBUztRQUNwQixNQUFNLEVBQUUsU0FBUztRQUNqQixVQUFVLEVBQUUsU0FBUztRQUNyQixVQUFVLEVBQUUsU0FBUztRQUNyQixlQUFlLEVBQUUsU0FBUztRQUMxQixVQUFVLEVBQUUsU0FBUztRQUNyQixVQUFVLEVBQUUsU0FBUztRQUNyQixXQUFXLEVBQUUsU0FBUztRQUN0QixXQUFXLEVBQUUsU0FBUztRQUN0QixhQUFhLEVBQUUsU0FBUztRQUN4QixnQkFBZ0IsRUFBRSxTQUFTO1FBQzNCLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLGNBQWMsRUFBRSxTQUFTO1FBQ3pCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLGNBQWMsRUFBRSxTQUFTO1FBQ3pCLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLHNCQUFzQixFQUFFLFNBQVM7UUFDakMsV0FBVyxFQUFFLFNBQVM7UUFDdEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsY0FBYyxFQUFFLFNBQVM7UUFDekIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixnQkFBZ0IsRUFBRSxTQUFTO1FBQzNCLGdCQUFnQixFQUFFLFNBQVM7UUFDM0IsYUFBYSxFQUFFLFNBQVM7UUFDeEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsa0JBQWtCLEVBQUUsU0FBUztRQUM3QixZQUFZLEVBQUUsU0FBUztRQUN2QixjQUFjLEVBQUUsU0FBUztRQUN6QixjQUFjLEVBQUUsU0FBUztRQUN6QixnQkFBZ0IsRUFBRSxTQUFTO1FBQzNCLGlCQUFpQixFQUFFLFNBQVM7UUFDNUIsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLGlCQUFpQixFQUFFLFNBQVM7UUFDNUIsY0FBYyxFQUFFLFNBQVM7UUFDekIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsVUFBVSxFQUFFLFNBQVM7UUFDckIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLFNBQVM7UUFDakIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsVUFBVSxFQUFFLFNBQVM7UUFDckIsVUFBVSxFQUFFLFNBQVM7UUFDckIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsV0FBVyxF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SSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRVAsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUUvQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ3JCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDdEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3JELEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN4RDtRQUVELEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDNUIsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDL0IsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBRS9CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcs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SyxDQUFDO0lBR3hCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQVRZLDRCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRU87QUFDUCxTQUFTLHdCQUF3QjtBQUNqQztBQUNBLGlCQUFpQixXQUFXO0FBQzVCLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxTQUFTLHdCQUF3QjtBQUNqQztBQUNBLGlCQUFpQixXQUFXO0FBQzVCLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxTQUFTLHdCQUF3QjtBQUNqQztBQUNBLGlCQUFpQixXQUFXO0FBQzVCLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O1VDaG1CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsZ0VBQStHO0FBQXZHLDJHQUFTO0FBQUUsMkdBQVM7QUFBRSwyR0FBUztBQUFFLDZHQUFVO0FBQUUsNkdBQVU7QUFBRSwrSEFBbUI7QUFBRSx5R0FBUTtBQUU5Riw0RUFBaUY7QUFBOUQsdUdBQUs7QUFBRSx1R0FBSztBQUFFLHVHQUFLO0FBQUUsbUdBQUc7QUFBRSxxR0FBSTtBQUNqRCx3SEFBZ0U7QUFBdkQseUlBQWlCO0FBTTFCLGdFQUE4QjtBQUFyQixpR0FBSTtBQUNiLDJHQUF5RDtBQUFoRCxrSUFBZTtBQUV4QiwwRUFBbUM7QUFBMUIsaUdBQUk7QUFFYiwwRUFBbUM7QUFBMUIsaUdBQUk7QUFDYixpR0FBdUU7QUFBOUQsZ0hBQVM7QUFDbEIsOEZBQStDO0FBQXRDLDZHQUFRO0FBQ2pCLDhGQUErQztBQUF0Qyw2R0FBUTtBQUNqQiw4RkFBK0M7QUFBdEMsNkdBQVE7QUFDakIsaUdBQWlEO0FBQXhDLGdIQUFTO0FBQ2xCLGtGQUFzRDtBQUE3QyxtSEFBVTtBQUFFLHFIQUFXIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3V0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndXRlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLyohXG5cbkpTWmlwIHYzLjcuMSAtIEEgSmF2YVNjcmlwdCBjbGFzcyBmb3IgZ2VuZXJhdGluZyBhbmQgcmVhZGluZyB6aXAgZmlsZXNcbjxodHRwOi8vc3R1YXJ0ay5jb20vanN6aXA+XG5cbihjKSAyMDA5LTIwMTYgU3R1YXJ0IEtuaWdodGxleSA8c3R1YXJ0IFthdF0gc3R1YXJ0ay5jb20+XG5EdWFsIGxpY2VuY2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBvciBHUEx2My4gU2VlIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vU3R1ay9qc3ppcC9tYXN0ZXIvTElDRU5TRS5tYXJrZG93bi5cblxuSlNaaXAgdXNlcyB0aGUgbGlicmFyeSBwYWtvIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSA6XG5odHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL3Bha28vYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cblxuIWZ1bmN0aW9uKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sdCk7ZWxzZXsoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzKS5KU1ppcD10KCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiBzKGEsbyxoKXtmdW5jdGlvbiB1KHIsdCl7aWYoIW9bcl0pe2lmKCFhW3JdKXt2YXIgZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCF0JiZlKXJldHVybiBlKHIsITApO2lmKGwpcmV0dXJuIGwociwhMCk7dmFyIGk9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIityK1wiJ1wiKTt0aHJvdyBpLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsaX12YXIgbj1vW3JdPXtleHBvcnRzOnt9fTthW3JdWzBdLmNhbGwobi5leHBvcnRzLGZ1bmN0aW9uKHQpe3ZhciBlPWFbcl1bMV1bdF07cmV0dXJuIHUoZXx8dCl9LG4sbi5leHBvcnRzLHMsYSxvLGgpfXJldHVybiBvW3JdLmV4cG9ydHN9Zm9yKHZhciBsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsdD0wO3Q8aC5sZW5ndGg7dCsrKXUoaFt0XSk7cmV0dXJuIHV9KHsxOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9dChcIi4vdXRpbHNcIiksZD10KFwiLi9zdXBwb3J0XCIpLHA9XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiO3IuZW5jb2RlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyLGksbixzLGEsbyxoPVtdLHU9MCxsPXQubGVuZ3RoLGY9bCxkPVwic3RyaW5nXCIhPT1jLmdldFR5cGVPZih0KTt1PHQubGVuZ3RoOylmPWwtdSxpPWQ/KGU9dFt1KytdLHI9dTxsP3RbdSsrXTowLHU8bD90W3UrK106MCk6KGU9dC5jaGFyQ29kZUF0KHUrKykscj11PGw/dC5jaGFyQ29kZUF0KHUrKyk6MCx1PGw/dC5jaGFyQ29kZUF0KHUrKyk6MCksbj1lPj4yLHM9KDMmZSk8PDR8cj4+NCxhPTE8Zj8oMTUmcik8PDJ8aT4+Njo2NCxvPTI8Zj82MyZpOjY0LGgucHVzaChwLmNoYXJBdChuKStwLmNoYXJBdChzKStwLmNoYXJBdChhKStwLmNoYXJBdChvKSk7cmV0dXJuIGguam9pbihcIlwiKX0sci5kZWNvZGU9ZnVuY3Rpb24odCl7dmFyIGUscixpLG4scyxhLG89MCxoPTAsdT1cImRhdGE6XCI7aWYodC5zdWJzdHIoMCx1Lmxlbmd0aCk9PT11KXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGlucHV0LCBpdCBsb29rcyBsaWtlIGEgZGF0YSB1cmwuXCIpO3ZhciBsLGY9MyoodD10LnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLFwiXCIpKS5sZW5ndGgvNDtpZih0LmNoYXJBdCh0Lmxlbmd0aC0xKT09PXAuY2hhckF0KDY0KSYmZi0tLHQuY2hhckF0KHQubGVuZ3RoLTIpPT09cC5jaGFyQXQoNjQpJiZmLS0sZiUxIT0wKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGlucHV0LCBiYWQgY29udGVudCBsZW5ndGguXCIpO2ZvcihsPWQudWludDhhcnJheT9uZXcgVWludDhBcnJheSgwfGYpOm5ldyBBcnJheSgwfGYpO288dC5sZW5ndGg7KWU9cC5pbmRleE9mKHQuY2hhckF0KG8rKykpPDwyfChuPXAuaW5kZXhPZih0LmNoYXJBdChvKyspKSk+PjQscj0oMTUmbik8PDR8KHM9cC5pbmRleE9mKHQuY2hhckF0KG8rKykpKT4+MixpPSgzJnMpPDw2fChhPXAuaW5kZXhPZih0LmNoYXJBdChvKyspKSksbFtoKytdPWUsNjQhPT1zJiYobFtoKytdPXIpLDY0IT09YSYmKGxbaCsrXT1pKTtyZXR1cm4gbH19LHtcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGlsc1wiOjMyfV0sMjpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuL2V4dGVybmFsXCIpLG49dChcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIikscz10KFwiLi9zdHJlYW0vQ3JjMzJQcm9iZVwiKSxhPXQoXCIuL3N0cmVhbS9EYXRhTGVuZ3RoUHJvYmVcIik7ZnVuY3Rpb24gbyh0LGUscixpLG4pe3RoaXMuY29tcHJlc3NlZFNpemU9dCx0aGlzLnVuY29tcHJlc3NlZFNpemU9ZSx0aGlzLmNyYzMyPXIsdGhpcy5jb21wcmVzc2lvbj1pLHRoaXMuY29tcHJlc3NlZENvbnRlbnQ9bn1vLnByb3RvdHlwZT17Z2V0Q29udGVudFdvcmtlcjpmdW5jdGlvbigpe3ZhciB0PW5ldyBuKGkuUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcHJlc3NlZENvbnRlbnQpKS5waXBlKHRoaXMuY29tcHJlc3Npb24udW5jb21wcmVzc1dvcmtlcigpKS5waXBlKG5ldyBhKFwiZGF0YV9sZW5ndGhcIikpLGU9dGhpcztyZXR1cm4gdC5vbihcImVuZFwiLGZ1bmN0aW9uKCl7aWYodGhpcy5zdHJlYW1JbmZvLmRhdGFfbGVuZ3RoIT09ZS51bmNvbXByZXNzZWRTaXplKXRocm93IG5ldyBFcnJvcihcIkJ1ZyA6IHVuY29tcHJlc3NlZCBkYXRhIHNpemUgbWlzbWF0Y2hcIil9KSx0fSxnZXRDb21wcmVzc2VkV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBuKGkuUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcHJlc3NlZENvbnRlbnQpKS53aXRoU3RyZWFtSW5mbyhcImNvbXByZXNzZWRTaXplXCIsdGhpcy5jb21wcmVzc2VkU2l6ZSkud2l0aFN0cmVhbUluZm8oXCJ1bmNvbXByZXNzZWRTaXplXCIsdGhpcy51bmNvbXByZXNzZWRTaXplKS53aXRoU3RyZWFtSW5mbyhcImNyYzMyXCIsdGhpcy5jcmMzMikud2l0aFN0cmVhbUluZm8oXCJjb21wcmVzc2lvblwiLHRoaXMuY29tcHJlc3Npb24pfX0sby5jcmVhdGVXb3JrZXJGcm9tPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gdC5waXBlKG5ldyBzKS5waXBlKG5ldyBhKFwidW5jb21wcmVzc2VkU2l6ZVwiKSkucGlwZShlLmNvbXByZXNzV29ya2VyKHIpKS5waXBlKG5ldyBhKFwiY29tcHJlc3NlZFNpemVcIikpLndpdGhTdHJlYW1JbmZvKFwiY29tcHJlc3Npb25cIixlKX0sZS5leHBvcnRzPW99LHtcIi4vZXh0ZXJuYWxcIjo2LFwiLi9zdHJlYW0vQ3JjMzJQcm9iZVwiOjI1LFwiLi9zdHJlYW0vRGF0YUxlbmd0aFByb2JlXCI6MjYsXCIuL3N0cmVhbS9EYXRhV29ya2VyXCI6Mjd9XSwzOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIik7ci5TVE9SRT17bWFnaWM6XCJcXDBcXDBcIixjb21wcmVzc1dvcmtlcjpmdW5jdGlvbih0KXtyZXR1cm4gbmV3IGkoXCJTVE9SRSBjb21wcmVzc2lvblwiKX0sdW5jb21wcmVzc1dvcmtlcjpmdW5jdGlvbigpe3JldHVybiBuZXcgaShcIlNUT1JFIGRlY29tcHJlc3Npb25cIil9fSxyLkRFRkxBVEU9dChcIi4vZmxhdGVcIil9LHtcIi4vZmxhdGVcIjo3LFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4fV0sNDpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuL3V0aWxzXCIpO3ZhciBvPWZ1bmN0aW9uKCl7Zm9yKHZhciB0LGU9W10scj0wO3I8MjU2O3IrKyl7dD1yO2Zvcih2YXIgaT0wO2k8ODtpKyspdD0xJnQ/Mzk4ODI5MjM4NF50Pj4+MTp0Pj4+MTtlW3JdPXR9cmV0dXJuIGV9KCk7ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHZvaWQgMCE9PXQmJnQubGVuZ3RoP1wic3RyaW5nXCIhPT1pLmdldFR5cGVPZih0KT9mdW5jdGlvbih0LGUscixpKXt2YXIgbj1vLHM9aStyO3RePS0xO2Zvcih2YXIgYT1pO2E8czthKyspdD10Pj4+OF5uWzI1NSYodF5lW2FdKV07cmV0dXJuLTFedH0oMHxlLHQsdC5sZW5ndGgsMCk6ZnVuY3Rpb24odCxlLHIsaSl7dmFyIG49byxzPWkrcjt0Xj0tMTtmb3IodmFyIGE9aTthPHM7YSsrKXQ9dD4+PjheblsyNTUmKHReZS5jaGFyQ29kZUF0KGEpKV07cmV0dXJuLTFedH0oMHxlLHQsdC5sZW5ndGgsMCk6MH19LHtcIi4vdXRpbHNcIjozMn1dLDU6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtyLmJhc2U2ND0hMSxyLmJpbmFyeT0hMSxyLmRpcj0hMSxyLmNyZWF0ZUZvbGRlcnM9ITAsci5kYXRlPW51bGwsci5jb21wcmVzc2lvbj1udWxsLHIuY29tcHJlc3Npb25PcHRpb25zPW51bGwsci5jb21tZW50PW51bGwsci51bml4UGVybWlzc2lvbnM9bnVsbCxyLmRvc1Blcm1pc3Npb25zPW51bGx9LHt9XSw2OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9bnVsbDtpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlP1Byb21pc2U6dChcImxpZVwiKSxlLmV4cG9ydHM9e1Byb21pc2U6aX19LHtsaWU6Mzd9XSw3OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4QXJyYXkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50MTZBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQzMkFycmF5LG49dChcInBha29cIikscz10KFwiLi91dGlsc1wiKSxhPXQoXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpLG89aT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCI7ZnVuY3Rpb24gaCh0LGUpe2EuY2FsbCh0aGlzLFwiRmxhdGVXb3JrZXIvXCIrdCksdGhpcy5fcGFrbz1udWxsLHRoaXMuX3Bha29BY3Rpb249dCx0aGlzLl9wYWtvT3B0aW9ucz1lLHRoaXMubWV0YT17fX1yLm1hZ2ljPVwiXFxiXFwwXCIscy5pbmhlcml0cyhoLGEpLGgucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbih0KXt0aGlzLm1ldGE9dC5tZXRhLG51bGw9PT10aGlzLl9wYWtvJiZ0aGlzLl9jcmVhdGVQYWtvKCksdGhpcy5fcGFrby5wdXNoKHMudHJhbnNmb3JtVG8obyx0LmRhdGEpLCExKX0saC5wcm90b3R5cGUuZmx1c2g9ZnVuY3Rpb24oKXthLnByb3RvdHlwZS5mbHVzaC5jYWxsKHRoaXMpLG51bGw9PT10aGlzLl9wYWtvJiZ0aGlzLl9jcmVhdGVQYWtvKCksdGhpcy5fcGFrby5wdXNoKFtdLCEwKX0saC5wcm90b3R5cGUuY2xlYW5VcD1mdW5jdGlvbigpe2EucHJvdG90eXBlLmNsZWFuVXAuY2FsbCh0aGlzKSx0aGlzLl9wYWtvPW51bGx9LGgucHJvdG90eXBlLl9jcmVhdGVQYWtvPWZ1bmN0aW9uKCl7dGhpcy5fcGFrbz1uZXcgblt0aGlzLl9wYWtvQWN0aW9uXSh7cmF3OiEwLGxldmVsOnRoaXMuX3Bha29PcHRpb25zLmxldmVsfHwtMX0pO3ZhciBlPXRoaXM7dGhpcy5fcGFrby5vbkRhdGE9ZnVuY3Rpb24odCl7ZS5wdXNoKHtkYXRhOnQsbWV0YTplLm1ldGF9KX19LHIuY29tcHJlc3NXb3JrZXI9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBoKFwiRGVmbGF0ZVwiLHQpfSxyLnVuY29tcHJlc3NXb3JrZXI9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGgoXCJJbmZsYXRlXCIse30pfX0se1wiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi91dGlsc1wiOjMyLHBha286Mzh9XSw4OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gQSh0LGUpe3ZhciByLGk9XCJcIjtmb3Iocj0wO3I8ZTtyKyspaSs9U3RyaW5nLmZyb21DaGFyQ29kZSgyNTUmdCksdD4+Pj04O3JldHVybiBpfWZ1bmN0aW9uIGkodCxlLHIsaSxuLHMpe3ZhciBhLG8saD10LmZpbGUsdT10LmNvbXByZXNzaW9uLGw9cyE9PU8udXRmOGVuY29kZSxmPUkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIixzKGgubmFtZSkpLGQ9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLE8udXRmOGVuY29kZShoLm5hbWUpKSxjPWguY29tbWVudCxwPUkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIixzKGMpKSxtPUkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIixPLnV0ZjhlbmNvZGUoYykpLF89ZC5sZW5ndGghPT1oLm5hbWUubGVuZ3RoLGc9bS5sZW5ndGghPT1jLmxlbmd0aCxiPVwiXCIsdj1cIlwiLHk9XCJcIix3PWguZGlyLGs9aC5kYXRlLHg9e2NyYzMyOjAsY29tcHJlc3NlZFNpemU6MCx1bmNvbXByZXNzZWRTaXplOjB9O2UmJiFyfHwoeC5jcmMzMj10LmNyYzMyLHguY29tcHJlc3NlZFNpemU9dC5jb21wcmVzc2VkU2l6ZSx4LnVuY29tcHJlc3NlZFNpemU9dC51bmNvbXByZXNzZWRTaXplKTt2YXIgUz0wO2UmJihTfD04KSxsfHwhXyYmIWd8fChTfD0yMDQ4KTt2YXIgej0wLEM9MDt3JiYoenw9MTYpLFwiVU5JWFwiPT09bj8oQz03OTgsenw9ZnVuY3Rpb24odCxlKXt2YXIgcj10O3JldHVybiB0fHwocj1lPzE2ODkzOjMzMjA0KSwoNjU1MzUmcik8PDE2fShoLnVuaXhQZXJtaXNzaW9ucyx3KSk6KEM9MjAsenw9ZnVuY3Rpb24odCl7cmV0dXJuIDYzJih0fHwwKX0oaC5kb3NQZXJtaXNzaW9ucykpLGE9ay5nZXRVVENIb3VycygpLGE8PD02LGF8PWsuZ2V0VVRDTWludXRlcygpLGE8PD01LGF8PWsuZ2V0VVRDU2Vjb25kcygpLzIsbz1rLmdldFVUQ0Z1bGxZZWFyKCktMTk4MCxvPDw9NCxvfD1rLmdldFVUQ01vbnRoKCkrMSxvPDw9NSxvfD1rLmdldFVUQ0RhdGUoKSxfJiYodj1BKDEsMSkrQShCKGYpLDQpK2QsYis9XCJ1cFwiK0Eodi5sZW5ndGgsMikrdiksZyYmKHk9QSgxLDEpK0EoQihwKSw0KSttLGIrPVwidWNcIitBKHkubGVuZ3RoLDIpK3kpO3ZhciBFPVwiXCI7cmV0dXJuIEUrPVwiXFxuXFwwXCIsRSs9QShTLDIpLEUrPXUubWFnaWMsRSs9QShhLDIpLEUrPUEobywyKSxFKz1BKHguY3JjMzIsNCksRSs9QSh4LmNvbXByZXNzZWRTaXplLDQpLEUrPUEoeC51bmNvbXByZXNzZWRTaXplLDQpLEUrPUEoZi5sZW5ndGgsMiksRSs9QShiLmxlbmd0aCwyKSx7ZmlsZVJlY29yZDpSLkxPQ0FMX0ZJTEVfSEVBREVSK0UrZitiLGRpclJlY29yZDpSLkNFTlRSQUxfRklMRV9IRUFERVIrQShDLDIpK0UrQShwLmxlbmd0aCwyKStcIlxcMFxcMFxcMFxcMFwiK0Eoeiw0KStBKGksNCkrZitiK3B9fXZhciBJPXQoXCIuLi91dGlsc1wiKSxuPXQoXCIuLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKSxPPXQoXCIuLi91dGY4XCIpLEI9dChcIi4uL2NyYzMyXCIpLFI9dChcIi4uL3NpZ25hdHVyZVwiKTtmdW5jdGlvbiBzKHQsZSxyLGkpe24uY2FsbCh0aGlzLFwiWmlwRmlsZVdvcmtlclwiKSx0aGlzLmJ5dGVzV3JpdHRlbj0wLHRoaXMuemlwQ29tbWVudD1lLHRoaXMuemlwUGxhdGZvcm09cix0aGlzLmVuY29kZUZpbGVOYW1lPWksdGhpcy5zdHJlYW1GaWxlcz10LHRoaXMuYWNjdW11bGF0ZT0hMSx0aGlzLmNvbnRlbnRCdWZmZXI9W10sdGhpcy5kaXJSZWNvcmRzPVtdLHRoaXMuY3VycmVudFNvdXJjZU9mZnNldD0wLHRoaXMuZW50cmllc0NvdW50PTAsdGhpcy5jdXJyZW50RmlsZT1udWxsLHRoaXMuX3NvdXJjZXM9W119SS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24odCl7dmFyIGU9dC5tZXRhLnBlcmNlbnR8fDAscj10aGlzLmVudHJpZXNDb3VudCxpPXRoaXMuX3NvdXJjZXMubGVuZ3RoO3RoaXMuYWNjdW11bGF0ZT90aGlzLmNvbnRlbnRCdWZmZXIucHVzaCh0KToodGhpcy5ieXRlc1dyaXR0ZW4rPXQuZGF0YS5sZW5ndGgsbi5wcm90b3R5cGUucHVzaC5jYWxsKHRoaXMse2RhdGE6dC5kYXRhLG1ldGE6e2N1cnJlbnRGaWxlOnRoaXMuY3VycmVudEZpbGUscGVyY2VudDpyPyhlKzEwMCooci1pLTEpKS9yOjEwMH19KSl9LHMucHJvdG90eXBlLm9wZW5lZFNvdXJjZT1mdW5jdGlvbih0KXt0aGlzLmN1cnJlbnRTb3VyY2VPZmZzZXQ9dGhpcy5ieXRlc1dyaXR0ZW4sdGhpcy5jdXJyZW50RmlsZT10LmZpbGUubmFtZTt2YXIgZT10aGlzLnN0cmVhbUZpbGVzJiYhdC5maWxlLmRpcjtpZihlKXt2YXIgcj1pKHQsZSwhMSx0aGlzLmN1cnJlbnRTb3VyY2VPZmZzZXQsdGhpcy56aXBQbGF0Zm9ybSx0aGlzLmVuY29kZUZpbGVOYW1lKTt0aGlzLnB1c2goe2RhdGE6ci5maWxlUmVjb3JkLG1ldGE6e3BlcmNlbnQ6MH19KX1lbHNlIHRoaXMuYWNjdW11bGF0ZT0hMH0scy5wcm90b3R5cGUuY2xvc2VkU291cmNlPWZ1bmN0aW9uKHQpe3RoaXMuYWNjdW11bGF0ZT0hMTt2YXIgZT10aGlzLnN0cmVhbUZpbGVzJiYhdC5maWxlLmRpcixyPWkodCxlLCEwLHRoaXMuY3VycmVudFNvdXJjZU9mZnNldCx0aGlzLnppcFBsYXRmb3JtLHRoaXMuZW5jb2RlRmlsZU5hbWUpO2lmKHRoaXMuZGlyUmVjb3Jkcy5wdXNoKHIuZGlyUmVjb3JkKSxlKXRoaXMucHVzaCh7ZGF0YTpmdW5jdGlvbih0KXtyZXR1cm4gUi5EQVRBX0RFU0NSSVBUT1IrQSh0LmNyYzMyLDQpK0EodC5jb21wcmVzc2VkU2l6ZSw0KStBKHQudW5jb21wcmVzc2VkU2l6ZSw0KX0odCksbWV0YTp7cGVyY2VudDoxMDB9fSk7ZWxzZSBmb3IodGhpcy5wdXNoKHtkYXRhOnIuZmlsZVJlY29yZCxtZXRhOntwZXJjZW50OjB9fSk7dGhpcy5jb250ZW50QnVmZmVyLmxlbmd0aDspdGhpcy5wdXNoKHRoaXMuY29udGVudEJ1ZmZlci5zaGlmdCgpKTt0aGlzLmN1cnJlbnRGaWxlPW51bGx9LHMucHJvdG90eXBlLmZsdXNoPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMuYnl0ZXNXcml0dGVuLGU9MDtlPHRoaXMuZGlyUmVjb3Jkcy5sZW5ndGg7ZSsrKXRoaXMucHVzaCh7ZGF0YTp0aGlzLmRpclJlY29yZHNbZV0sbWV0YTp7cGVyY2VudDoxMDB9fSk7dmFyIHI9dGhpcy5ieXRlc1dyaXR0ZW4tdCxpPWZ1bmN0aW9uKHQsZSxyLGksbil7dmFyIHM9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLG4oaSkpO3JldHVybiBSLkNFTlRSQUxfRElSRUNUT1JZX0VORCtcIlxcMFxcMFxcMFxcMFwiK0EodCwyKStBKHQsMikrQShlLDQpK0Eociw0KStBKHMubGVuZ3RoLDIpK3N9KHRoaXMuZGlyUmVjb3Jkcy5sZW5ndGgscix0LHRoaXMuemlwQ29tbWVudCx0aGlzLmVuY29kZUZpbGVOYW1lKTt0aGlzLnB1c2goe2RhdGE6aSxtZXRhOntwZXJjZW50OjEwMH19KX0scy5wcm90b3R5cGUucHJlcGFyZU5leHRTb3VyY2U9ZnVuY3Rpb24oKXt0aGlzLnByZXZpb3VzPXRoaXMuX3NvdXJjZXMuc2hpZnQoKSx0aGlzLm9wZW5lZFNvdXJjZSh0aGlzLnByZXZpb3VzLnN0cmVhbUluZm8pLHRoaXMuaXNQYXVzZWQ/dGhpcy5wcmV2aW91cy5wYXVzZSgpOnRoaXMucHJldmlvdXMucmVzdW1lKCl9LHMucHJvdG90eXBlLnJlZ2lzdGVyUHJldmlvdXM9ZnVuY3Rpb24odCl7dGhpcy5fc291cmNlcy5wdXNoKHQpO3ZhciBlPXRoaXM7cmV0dXJuIHQub24oXCJkYXRhXCIsZnVuY3Rpb24odCl7ZS5wcm9jZXNzQ2h1bmsodCl9KSx0Lm9uKFwiZW5kXCIsZnVuY3Rpb24oKXtlLmNsb3NlZFNvdXJjZShlLnByZXZpb3VzLnN0cmVhbUluZm8pLGUuX3NvdXJjZXMubGVuZ3RoP2UucHJlcGFyZU5leHRTb3VyY2UoKTplLmVuZCgpfSksdC5vbihcImVycm9yXCIsZnVuY3Rpb24odCl7ZS5lcnJvcih0KX0pLHRoaXN9LHMucHJvdG90eXBlLnJlc3VtZT1mdW5jdGlvbigpe3JldHVybiEhbi5wcm90b3R5cGUucmVzdW1lLmNhbGwodGhpcykmJighdGhpcy5wcmV2aW91cyYmdGhpcy5fc291cmNlcy5sZW5ndGg/KHRoaXMucHJlcGFyZU5leHRTb3VyY2UoKSwhMCk6dGhpcy5wcmV2aW91c3x8dGhpcy5fc291cmNlcy5sZW5ndGh8fHRoaXMuZ2VuZXJhdGVkRXJyb3I/dm9pZCAwOih0aGlzLmVuZCgpLCEwKSl9LHMucHJvdG90eXBlLmVycm9yPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3NvdXJjZXM7aWYoIW4ucHJvdG90eXBlLmVycm9yLmNhbGwodGhpcyx0KSlyZXR1cm4hMTtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyl0cnl7ZVtyXS5lcnJvcih0KX1jYXRjaCh0KXt9cmV0dXJuITB9LHMucHJvdG90eXBlLmxvY2s9ZnVuY3Rpb24oKXtuLnByb3RvdHlwZS5sb2NrLmNhbGwodGhpcyk7Zm9yKHZhciB0PXRoaXMuX3NvdXJjZXMsZT0wO2U8dC5sZW5ndGg7ZSsrKXRbZV0ubG9jaygpfSxlLmV4cG9ydHM9c30se1wiLi4vY3JjMzJcIjo0LFwiLi4vc2lnbmF0dXJlXCI6MjMsXCIuLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi4vdXRmOFwiOjMxLFwiLi4vdXRpbHNcIjozMn1dLDk6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgdT10KFwiLi4vY29tcHJlc3Npb25zXCIpLGk9dChcIi4vWmlwRmlsZVdvcmtlclwiKTtyLmdlbmVyYXRlV29ya2VyPWZ1bmN0aW9uKHQsYSxlKXt2YXIgbz1uZXcgaShhLnN0cmVhbUZpbGVzLGUsYS5wbGF0Zm9ybSxhLmVuY29kZUZpbGVOYW1lKSxoPTA7dHJ5e3QuZm9yRWFjaChmdW5jdGlvbih0LGUpe2grKzt2YXIgcj1mdW5jdGlvbih0LGUpe3ZhciByPXR8fGUsaT11W3JdO2lmKCFpKXRocm93IG5ldyBFcnJvcihyK1wiIGlzIG5vdCBhIHZhbGlkIGNvbXByZXNzaW9uIG1ldGhvZCAhXCIpO3JldHVybiBpfShlLm9wdGlvbnMuY29tcHJlc3Npb24sYS5jb21wcmVzc2lvbiksaT1lLm9wdGlvbnMuY29tcHJlc3Npb25PcHRpb25zfHxhLmNvbXByZXNzaW9uT3B0aW9uc3x8e30sbj1lLmRpcixzPWUuZGF0ZTtlLl9jb21wcmVzc1dvcmtlcihyLGkpLndpdGhTdHJlYW1JbmZvKFwiZmlsZVwiLHtuYW1lOnQsZGlyOm4sZGF0ZTpzLGNvbW1lbnQ6ZS5jb21tZW50fHxcIlwiLHVuaXhQZXJtaXNzaW9uczplLnVuaXhQZXJtaXNzaW9ucyxkb3NQZXJtaXNzaW9uczplLmRvc1Blcm1pc3Npb25zfSkucGlwZShvKX0pLG8uZW50cmllc0NvdW50PWh9Y2F0Y2godCl7by5lcnJvcih0KX1yZXR1cm4gb319LHtcIi4uL2NvbXByZXNzaW9uc1wiOjMsXCIuL1ppcEZpbGVXb3JrZXJcIjo4fV0sMTA6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKCl7aWYoISh0aGlzIGluc3RhbmNlb2YgaSkpcmV0dXJuIG5ldyBpO2lmKGFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNvbnN0cnVjdG9yIHdpdGggcGFyYW1ldGVycyBoYXMgYmVlbiByZW1vdmVkIGluIEpTWmlwIDMuMCwgcGxlYXNlIGNoZWNrIHRoZSB1cGdyYWRlIGd1aWRlLlwiKTt0aGlzLmZpbGVzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5jb21tZW50PW51bGwsdGhpcy5yb290PVwiXCIsdGhpcy5jbG9uZT1mdW5jdGlvbigpe3ZhciB0PW5ldyBpO2Zvcih2YXIgZSBpbiB0aGlzKVwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXNbZV0mJih0W2VdPXRoaXNbZV0pO3JldHVybiB0fX0oaS5wcm90b3R5cGU9dChcIi4vb2JqZWN0XCIpKS5sb2FkQXN5bmM9dChcIi4vbG9hZFwiKSxpLnN1cHBvcnQ9dChcIi4vc3VwcG9ydFwiKSxpLmRlZmF1bHRzPXQoXCIuL2RlZmF1bHRzXCIpLGkudmVyc2lvbj1cIjMuNy4xXCIsaS5sb2FkQXN5bmM9ZnVuY3Rpb24odCxlKXtyZXR1cm4obmV3IGkpLmxvYWRBc3luYyh0LGUpfSxpLmV4dGVybmFsPXQoXCIuL2V4dGVybmFsXCIpLGUuZXhwb3J0cz1pfSx7XCIuL2RlZmF1bHRzXCI6NSxcIi4vZXh0ZXJuYWxcIjo2LFwiLi9sb2FkXCI6MTEsXCIuL29iamVjdFwiOjE1LFwiLi9zdXBwb3J0XCI6MzB9XSwxMTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuL3V0aWxzXCIpLG49dChcIi4vZXh0ZXJuYWxcIiksbz10KFwiLi91dGY4XCIpLGg9dChcIi4vemlwRW50cmllc1wiKSxzPXQoXCIuL3N0cmVhbS9DcmMzMlByb2JlXCIpLHU9dChcIi4vbm9kZWpzVXRpbHNcIik7ZnVuY3Rpb24gbChpKXtyZXR1cm4gbmV3IG4uUHJvbWlzZShmdW5jdGlvbih0LGUpe3ZhciByPWkuZGVjb21wcmVzc2VkLmdldENvbnRlbnRXb3JrZXIoKS5waXBlKG5ldyBzKTtyLm9uKFwiZXJyb3JcIixmdW5jdGlvbih0KXtlKHQpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe3Iuc3RyZWFtSW5mby5jcmMzMiE9PWkuZGVjb21wcmVzc2VkLmNyYzMyP2UobmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCA6IENSQzMyIG1pc21hdGNoXCIpKTp0KCl9KS5yZXN1bWUoKX0pfWUuZXhwb3J0cz1mdW5jdGlvbih0LHMpe3ZhciBhPXRoaXM7cmV0dXJuIHM9aS5leHRlbmQoc3x8e30se2Jhc2U2NDohMSxjaGVja0NSQzMyOiExLG9wdGltaXplZEJpbmFyeVN0cmluZzohMSxjcmVhdGVGb2xkZXJzOiExLGRlY29kZUZpbGVOYW1lOm8udXRmOGRlY29kZX0pLHUuaXNOb2RlJiZ1LmlzU3RyZWFtKHQpP24uUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSlNaaXAgY2FuJ3QgYWNjZXB0IGEgc3RyZWFtIHdoZW4gbG9hZGluZyBhIHppcCBmaWxlLlwiKSk6aS5wcmVwYXJlQ29udGVudChcInRoZSBsb2FkZWQgemlwIGZpbGVcIix0LCEwLHMub3B0aW1pemVkQmluYXJ5U3RyaW5nLHMuYmFzZTY0KS50aGVuKGZ1bmN0aW9uKHQpe3ZhciBlPW5ldyBoKHMpO3JldHVybiBlLmxvYWQodCksZX0pLnRoZW4oZnVuY3Rpb24odCl7dmFyIGU9W24uUHJvbWlzZS5yZXNvbHZlKHQpXSxyPXQuZmlsZXM7aWYocy5jaGVja0NSQzMyKWZvcih2YXIgaT0wO2k8ci5sZW5ndGg7aSsrKWUucHVzaChsKHJbaV0pKTtyZXR1cm4gbi5Qcm9taXNlLmFsbChlKX0pLnRoZW4oZnVuY3Rpb24odCl7Zm9yKHZhciBlPXQuc2hpZnQoKSxyPWUuZmlsZXMsaT0wO2k8ci5sZW5ndGg7aSsrKXt2YXIgbj1yW2ldO2EuZmlsZShuLmZpbGVOYW1lU3RyLG4uZGVjb21wcmVzc2VkLHtiaW5hcnk6ITAsb3B0aW1pemVkQmluYXJ5U3RyaW5nOiEwLGRhdGU6bi5kYXRlLGRpcjpuLmRpcixjb21tZW50Om4uZmlsZUNvbW1lbnRTdHIubGVuZ3RoP24uZmlsZUNvbW1lbnRTdHI6bnVsbCx1bml4UGVybWlzc2lvbnM6bi51bml4UGVybWlzc2lvbnMsZG9zUGVybWlzc2lvbnM6bi5kb3NQZXJtaXNzaW9ucyxjcmVhdGVGb2xkZXJzOnMuY3JlYXRlRm9sZGVyc30pfXJldHVybiBlLnppcENvbW1lbnQubGVuZ3RoJiYoYS5jb21tZW50PWUuemlwQ29tbWVudCksYX0pfX0se1wiLi9leHRlcm5hbFwiOjYsXCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N0cmVhbS9DcmMzMlByb2JlXCI6MjUsXCIuL3V0ZjhcIjozMSxcIi4vdXRpbHNcIjozMixcIi4vemlwRW50cmllc1wiOjMzfV0sMTI6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi4vdXRpbHNcIiksbj10KFwiLi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyh0LGUpe24uY2FsbCh0aGlzLFwiTm9kZWpzIHN0cmVhbSBpbnB1dCBhZGFwdGVyIGZvciBcIit0KSx0aGlzLl91cHN0cmVhbUVuZGVkPSExLHRoaXMuX2JpbmRTdHJlYW0oZSl9aS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLl9iaW5kU3RyZWFtPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7KHRoaXMuX3N0cmVhbT10KS5wYXVzZSgpLHQub24oXCJkYXRhXCIsZnVuY3Rpb24odCl7ZS5wdXNoKHtkYXRhOnQsbWV0YTp7cGVyY2VudDowfX0pfSkub24oXCJlcnJvclwiLGZ1bmN0aW9uKHQpe2UuaXNQYXVzZWQ/dGhpcy5nZW5lcmF0ZWRFcnJvcj10OmUuZXJyb3IodCl9KS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7ZS5pc1BhdXNlZD9lLl91cHN0cmVhbUVuZGVkPSEwOmUuZW5kKCl9KX0scy5wcm90b3R5cGUucGF1c2U9ZnVuY3Rpb24oKXtyZXR1cm4hIW4ucHJvdG90eXBlLnBhdXNlLmNhbGwodGhpcykmJih0aGlzLl9zdHJlYW0ucGF1c2UoKSwhMCl9LHMucHJvdG90eXBlLnJlc3VtZT1mdW5jdGlvbigpe3JldHVybiEhbi5wcm90b3R5cGUucmVzdW1lLmNhbGwodGhpcykmJih0aGlzLl91cHN0cmVhbUVuZGVkP3RoaXMuZW5kKCk6dGhpcy5fc3RyZWFtLnJlc3VtZSgpLCEwKX0sZS5leHBvcnRzPXN9LHtcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuLi91dGlsc1wiOjMyfV0sMTM6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10KFwicmVhZGFibGUtc3RyZWFtXCIpLlJlYWRhYmxlO2Z1bmN0aW9uIGkodCxlLHIpe24uY2FsbCh0aGlzLGUpLHRoaXMuX2hlbHBlcj10O3ZhciBpPXRoaXM7dC5vbihcImRhdGFcIixmdW5jdGlvbih0LGUpe2kucHVzaCh0KXx8aS5faGVscGVyLnBhdXNlKCksciYmcihlKX0pLm9uKFwiZXJyb3JcIixmdW5jdGlvbih0KXtpLmVtaXQoXCJlcnJvclwiLHQpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe2kucHVzaChudWxsKX0pfXQoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhpLG4pLGkucHJvdG90eXBlLl9yZWFkPWZ1bmN0aW9uKCl7dGhpcy5faGVscGVyLnJlc3VtZSgpfSxlLmV4cG9ydHM9aX0se1wiLi4vdXRpbHNcIjozMixcInJlYWRhYmxlLXN0cmVhbVwiOjE2fV0sMTQ6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9e2lzTm9kZTpcInVuZGVmaW5lZFwiIT10eXBlb2YgQnVmZmVyLG5ld0J1ZmZlckZyb206ZnVuY3Rpb24odCxlKXtpZihCdWZmZXIuZnJvbSYmQnVmZmVyLmZyb20hPT1VaW50OEFycmF5LmZyb20pcmV0dXJuIEJ1ZmZlci5mcm9tKHQsZSk7aWYoXCJudW1iZXJcIj09dHlwZW9mIHQpdGhyb3cgbmV3IEVycm9yKCdUaGUgXCJkYXRhXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKTtyZXR1cm4gbmV3IEJ1ZmZlcih0LGUpfSxhbGxvY0J1ZmZlcjpmdW5jdGlvbih0KXtpZihCdWZmZXIuYWxsb2MpcmV0dXJuIEJ1ZmZlci5hbGxvYyh0KTt2YXIgZT1uZXcgQnVmZmVyKHQpO3JldHVybiBlLmZpbGwoMCksZX0saXNCdWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcih0KX0saXNTdHJlYW06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQub24mJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQucGF1c2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQucmVzdW1lfX19LHt9XSwxNTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHModCxlLHIpe3ZhciBpLG49dS5nZXRUeXBlT2YoZSkscz11LmV4dGVuZChyfHx7fSxmKTtzLmRhdGU9cy5kYXRlfHxuZXcgRGF0ZSxudWxsIT09cy5jb21wcmVzc2lvbiYmKHMuY29tcHJlc3Npb249cy5jb21wcmVzc2lvbi50b1VwcGVyQ2FzZSgpKSxcInN0cmluZ1wiPT10eXBlb2Ygcy51bml4UGVybWlzc2lvbnMmJihzLnVuaXhQZXJtaXNzaW9ucz1wYXJzZUludChzLnVuaXhQZXJtaXNzaW9ucyw4KSkscy51bml4UGVybWlzc2lvbnMmJjE2Mzg0JnMudW5peFBlcm1pc3Npb25zJiYocy5kaXI9ITApLHMuZG9zUGVybWlzc2lvbnMmJjE2JnMuZG9zUGVybWlzc2lvbnMmJihzLmRpcj0hMCkscy5kaXImJih0PWcodCkpLHMuY3JlYXRlRm9sZGVycyYmKGk9Xyh0KSkmJmIuY2FsbCh0aGlzLGksITApO3ZhciBhPVwic3RyaW5nXCI9PT1uJiYhMT09PXMuYmluYXJ5JiYhMT09PXMuYmFzZTY0O3ImJnZvaWQgMCE9PXIuYmluYXJ5fHwocy5iaW5hcnk9IWEpLChlIGluc3RhbmNlb2YgZCYmMD09PWUudW5jb21wcmVzc2VkU2l6ZXx8cy5kaXJ8fCFlfHwwPT09ZS5sZW5ndGgpJiYocy5iYXNlNjQ9ITEscy5iaW5hcnk9ITAsZT1cIlwiLHMuY29tcHJlc3Npb249XCJTVE9SRVwiLG49XCJzdHJpbmdcIik7dmFyIG89bnVsbDtvPWUgaW5zdGFuY2VvZiBkfHxlIGluc3RhbmNlb2YgbD9lOnAuaXNOb2RlJiZwLmlzU3RyZWFtKGUpP25ldyBtKHQsZSk6dS5wcmVwYXJlQ29udGVudCh0LGUscy5iaW5hcnkscy5vcHRpbWl6ZWRCaW5hcnlTdHJpbmcscy5iYXNlNjQpO3ZhciBoPW5ldyBjKHQsbyxzKTt0aGlzLmZpbGVzW3RdPWh9dmFyIG49dChcIi4vdXRmOFwiKSx1PXQoXCIuL3V0aWxzXCIpLGw9dChcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksYT10KFwiLi9zdHJlYW0vU3RyZWFtSGVscGVyXCIpLGY9dChcIi4vZGVmYXVsdHNcIiksZD10KFwiLi9jb21wcmVzc2VkT2JqZWN0XCIpLGM9dChcIi4vemlwT2JqZWN0XCIpLG89dChcIi4vZ2VuZXJhdGVcIikscD10KFwiLi9ub2RlanNVdGlsc1wiKSxtPXQoXCIuL25vZGVqcy9Ob2RlanNTdHJlYW1JbnB1dEFkYXB0ZXJcIiksXz1mdW5jdGlvbih0KXtcIi9cIj09PXQuc2xpY2UoLTEpJiYodD10LnN1YnN0cmluZygwLHQubGVuZ3RoLTEpKTt2YXIgZT10Lmxhc3RJbmRleE9mKFwiL1wiKTtyZXR1cm4gMDxlP3Quc3Vic3RyaW5nKDAsZSk6XCJcIn0sZz1mdW5jdGlvbih0KXtyZXR1cm5cIi9cIiE9PXQuc2xpY2UoLTEpJiYodCs9XCIvXCIpLHR9LGI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZT12b2lkIDAhPT1lP2U6Zi5jcmVhdGVGb2xkZXJzLHQ9Zyh0KSx0aGlzLmZpbGVzW3RdfHxzLmNhbGwodGhpcyx0LG51bGwse2RpcjohMCxjcmVhdGVGb2xkZXJzOmV9KSx0aGlzLmZpbGVzW3RdfTtmdW5jdGlvbiBoKHQpe3JldHVyblwiW29iamVjdCBSZWdFeHBdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9dmFyIGk9e2xvYWQ6ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiByZW1vdmVkIGluIEpTWmlwIDMuMCwgcGxlYXNlIGNoZWNrIHRoZSB1cGdyYWRlIGd1aWRlLlwiKX0sZm9yRWFjaDpmdW5jdGlvbih0KXt2YXIgZSxyLGk7Zm9yKGUgaW4gdGhpcy5maWxlcylpPXRoaXMuZmlsZXNbZV0sKHI9ZS5zbGljZSh0aGlzLnJvb3QubGVuZ3RoLGUubGVuZ3RoKSkmJmUuc2xpY2UoMCx0aGlzLnJvb3QubGVuZ3RoKT09PXRoaXMucm9vdCYmdChyLGkpfSxmaWx0ZXI6ZnVuY3Rpb24ocil7dmFyIGk9W107cmV0dXJuIHRoaXMuZm9yRWFjaChmdW5jdGlvbih0LGUpe3IodCxlKSYmaS5wdXNoKGUpfSksaX0sZmlsZTpmdW5jdGlvbih0LGUscil7aWYoMSE9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHQ9dGhpcy5yb290K3Qscy5jYWxsKHRoaXMsdCxlLHIpLHRoaXM7aWYoaCh0KSl7dmFyIGk9dDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24odCxlKXtyZXR1cm4hZS5kaXImJmkudGVzdCh0KX0pfXZhciBuPXRoaXMuZmlsZXNbdGhpcy5yb290K3RdO3JldHVybiBuJiYhbi5kaXI/bjpudWxsfSxmb2xkZXI6ZnVuY3Rpb24ocil7aWYoIXIpcmV0dXJuIHRoaXM7aWYoaChyKSlyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24odCxlKXtyZXR1cm4gZS5kaXImJnIudGVzdCh0KX0pO3ZhciB0PXRoaXMucm9vdCtyLGU9Yi5jYWxsKHRoaXMsdCksaT10aGlzLmNsb25lKCk7cmV0dXJuIGkucm9vdD1lLm5hbWUsaX0scmVtb3ZlOmZ1bmN0aW9uKHIpe3I9dGhpcy5yb290K3I7dmFyIHQ9dGhpcy5maWxlc1tyXTtpZih0fHwoXCIvXCIhPT1yLnNsaWNlKC0xKSYmKHIrPVwiL1wiKSx0PXRoaXMuZmlsZXNbcl0pLHQmJiF0LmRpcilkZWxldGUgdGhpcy5maWxlc1tyXTtlbHNlIGZvcih2YXIgZT10aGlzLmZpbHRlcihmdW5jdGlvbih0LGUpe3JldHVybiBlLm5hbWUuc2xpY2UoMCxyLmxlbmd0aCk9PT1yfSksaT0wO2k8ZS5sZW5ndGg7aSsrKWRlbGV0ZSB0aGlzLmZpbGVzW2VbaV0ubmFtZV07cmV0dXJuIHRoaXN9LGdlbmVyYXRlOmZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpfSxnZW5lcmF0ZUludGVybmFsU3RyZWFtOmZ1bmN0aW9uKHQpe3ZhciBlLHI9e307dHJ5e2lmKChyPXUuZXh0ZW5kKHR8fHt9LHtzdHJlYW1GaWxlczohMSxjb21wcmVzc2lvbjpcIlNUT1JFXCIsY29tcHJlc3Npb25PcHRpb25zOm51bGwsdHlwZTpcIlwiLHBsYXRmb3JtOlwiRE9TXCIsY29tbWVudDpudWxsLG1pbWVUeXBlOlwiYXBwbGljYXRpb24vemlwXCIsZW5jb2RlRmlsZU5hbWU6bi51dGY4ZW5jb2RlfSkpLnR5cGU9ci50eXBlLnRvTG93ZXJDYXNlKCksci5jb21wcmVzc2lvbj1yLmNvbXByZXNzaW9uLnRvVXBwZXJDYXNlKCksXCJiaW5hcnlzdHJpbmdcIj09PXIudHlwZSYmKHIudHlwZT1cInN0cmluZ1wiKSwhci50eXBlKXRocm93IG5ldyBFcnJvcihcIk5vIG91dHB1dCB0eXBlIHNwZWNpZmllZC5cIik7dS5jaGVja1N1cHBvcnQoci50eXBlKSxcImRhcndpblwiIT09ci5wbGF0Zm9ybSYmXCJmcmVlYnNkXCIhPT1yLnBsYXRmb3JtJiZcImxpbnV4XCIhPT1yLnBsYXRmb3JtJiZcInN1bm9zXCIhPT1yLnBsYXRmb3JtfHwoci5wbGF0Zm9ybT1cIlVOSVhcIiksXCJ3aW4zMlwiPT09ci5wbGF0Zm9ybSYmKHIucGxhdGZvcm09XCJET1NcIik7dmFyIGk9ci5jb21tZW50fHx0aGlzLmNvbW1lbnR8fFwiXCI7ZT1vLmdlbmVyYXRlV29ya2VyKHRoaXMscixpKX1jYXRjaCh0KXsoZT1uZXcgbChcImVycm9yXCIpKS5lcnJvcih0KX1yZXR1cm4gbmV3IGEoZSxyLnR5cGV8fFwic3RyaW5nXCIsci5taW1lVHlwZSl9LGdlbmVyYXRlQXN5bmM6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5nZW5lcmF0ZUludGVybmFsU3RyZWFtKHQpLmFjY3VtdWxhdGUoZSl9LGdlbmVyYXRlTm9kZVN0cmVhbTpmdW5jdGlvbih0LGUpe3JldHVybih0PXR8fHt9KS50eXBlfHwodC50eXBlPVwibm9kZWJ1ZmZlclwiKSx0aGlzLmdlbmVyYXRlSW50ZXJuYWxTdHJlYW0odCkudG9Ob2RlanNTdHJlYW0oZSl9fTtlLmV4cG9ydHM9aX0se1wiLi9jb21wcmVzc2VkT2JqZWN0XCI6MixcIi4vZGVmYXVsdHNcIjo1LFwiLi9nZW5lcmF0ZVwiOjksXCIuL25vZGVqcy9Ob2RlanNTdHJlYW1JbnB1dEFkYXB0ZXJcIjoxMixcIi4vbm9kZWpzVXRpbHNcIjoxNCxcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4vc3RyZWFtL1N0cmVhbUhlbHBlclwiOjI5LFwiLi91dGY4XCI6MzEsXCIuL3V0aWxzXCI6MzIsXCIuL3ppcE9iamVjdFwiOjM1fV0sMTY6W2Z1bmN0aW9uKHQsZSxyKXtlLmV4cG9ydHM9dChcInN0cmVhbVwiKX0se3N0cmVhbTp2b2lkIDB9XSwxNzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuL0RhdGFSZWFkZXJcIik7ZnVuY3Rpb24gbih0KXtpLmNhbGwodGhpcyx0KTtmb3IodmFyIGU9MDtlPHRoaXMuZGF0YS5sZW5ndGg7ZSsrKXRbZV09MjU1JnRbZV19dChcIi4uL3V0aWxzXCIpLmluaGVyaXRzKG4saSksbi5wcm90b3R5cGUuYnl0ZUF0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmRhdGFbdGhpcy56ZXJvK3RdfSxuLnByb3RvdHlwZS5sYXN0SW5kZXhPZlNpZ25hdHVyZT1mdW5jdGlvbih0KXtmb3IodmFyIGU9dC5jaGFyQ29kZUF0KDApLHI9dC5jaGFyQ29kZUF0KDEpLGk9dC5jaGFyQ29kZUF0KDIpLG49dC5jaGFyQ29kZUF0KDMpLHM9dGhpcy5sZW5ndGgtNDswPD1zOy0tcylpZih0aGlzLmRhdGFbc109PT1lJiZ0aGlzLmRhdGFbcysxXT09PXImJnRoaXMuZGF0YVtzKzJdPT09aSYmdGhpcy5kYXRhW3MrM109PT1uKXJldHVybiBzLXRoaXMuemVybztyZXR1cm4tMX0sbi5wcm90b3R5cGUucmVhZEFuZENoZWNrU2lnbmF0dXJlPWZ1bmN0aW9uKHQpe3ZhciBlPXQuY2hhckNvZGVBdCgwKSxyPXQuY2hhckNvZGVBdCgxKSxpPXQuY2hhckNvZGVBdCgyKSxuPXQuY2hhckNvZGVBdCgzKSxzPXRoaXMucmVhZERhdGEoNCk7cmV0dXJuIGU9PT1zWzBdJiZyPT09c1sxXSYmaT09PXNbMl0mJm49PT1zWzNdfSxuLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbih0KXtpZih0aGlzLmNoZWNrT2Zmc2V0KHQpLDA9PT10KXJldHVybltdO3ZhciBlPXRoaXMuZGF0YS5zbGljZSh0aGlzLnplcm8rdGhpcy5pbmRleCx0aGlzLnplcm8rdGhpcy5pbmRleCt0KTtyZXR1cm4gdGhpcy5pbmRleCs9dCxlfSxlLmV4cG9ydHM9bn0se1wiLi4vdXRpbHNcIjozMixcIi4vRGF0YVJlYWRlclwiOjE4fV0sMTg6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi4vdXRpbHNcIik7ZnVuY3Rpb24gbih0KXt0aGlzLmRhdGE9dCx0aGlzLmxlbmd0aD10Lmxlbmd0aCx0aGlzLmluZGV4PTAsdGhpcy56ZXJvPTB9bi5wcm90b3R5cGU9e2NoZWNrT2Zmc2V0OmZ1bmN0aW9uKHQpe3RoaXMuY2hlY2tJbmRleCh0aGlzLmluZGV4K3QpfSxjaGVja0luZGV4OmZ1bmN0aW9uKHQpe2lmKHRoaXMubGVuZ3RoPHRoaXMuemVybyt0fHx0PDApdGhyb3cgbmV3IEVycm9yKFwiRW5kIG9mIGRhdGEgcmVhY2hlZCAoZGF0YSBsZW5ndGggPSBcIit0aGlzLmxlbmd0aCtcIiwgYXNrZWQgaW5kZXggPSBcIit0K1wiKS4gQ29ycnVwdGVkIHppcCA/XCIpfSxzZXRJbmRleDpmdW5jdGlvbih0KXt0aGlzLmNoZWNrSW5kZXgodCksdGhpcy5pbmRleD10fSxza2lwOmZ1bmN0aW9uKHQpe3RoaXMuc2V0SW5kZXgodGhpcy5pbmRleCt0KX0sYnl0ZUF0OmZ1bmN0aW9uKHQpe30scmVhZEludDpmdW5jdGlvbih0KXt2YXIgZSxyPTA7Zm9yKHRoaXMuY2hlY2tPZmZzZXQodCksZT10aGlzLmluZGV4K3QtMTtlPj10aGlzLmluZGV4O2UtLSlyPShyPDw4KSt0aGlzLmJ5dGVBdChlKTtyZXR1cm4gdGhpcy5pbmRleCs9dCxyfSxyZWFkU3RyaW5nOmZ1bmN0aW9uKHQpe3JldHVybiBpLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsdGhpcy5yZWFkRGF0YSh0KSl9LHJlYWREYXRhOmZ1bmN0aW9uKHQpe30sbGFzdEluZGV4T2ZTaWduYXR1cmU6ZnVuY3Rpb24odCl7fSxyZWFkQW5kQ2hlY2tTaWduYXR1cmU6ZnVuY3Rpb24odCl7fSxyZWFkRGF0ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMucmVhZEludCg0KTtyZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoMTk4MCsodD4+MjUmMTI3KSwodD4+MjEmMTUpLTEsdD4+MTYmMzEsdD4+MTEmMzEsdD4+NSY2MywoMzEmdCk8PDEpKX19LGUuZXhwb3J0cz1ufSx7XCIuLi91dGlsc1wiOjMyfV0sMTk6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9VaW50OEFycmF5UmVhZGVyXCIpO2Z1bmN0aW9uIG4odCl7aS5jYWxsKHRoaXMsdCl9dChcIi4uL3V0aWxzXCIpLmluaGVyaXRzKG4saSksbi5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24odCl7dGhpcy5jaGVja09mZnNldCh0KTt2YXIgZT10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrdCk7cmV0dXJuIHRoaXMuaW5kZXgrPXQsZX0sZS5leHBvcnRzPW59LHtcIi4uL3V0aWxzXCI6MzIsXCIuL1VpbnQ4QXJyYXlSZWFkZXJcIjoyMX1dLDIwOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vRGF0YVJlYWRlclwiKTtmdW5jdGlvbiBuKHQpe2kuY2FsbCh0aGlzLHQpfXQoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhuLGkpLG4ucHJvdG90eXBlLmJ5dGVBdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5kYXRhLmNoYXJDb2RlQXQodGhpcy56ZXJvK3QpfSxuLnByb3RvdHlwZS5sYXN0SW5kZXhPZlNpZ25hdHVyZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5kYXRhLmxhc3RJbmRleE9mKHQpLXRoaXMuemVyb30sbi5wcm90b3R5cGUucmVhZEFuZENoZWNrU2lnbmF0dXJlPWZ1bmN0aW9uKHQpe3JldHVybiB0PT09dGhpcy5yZWFkRGF0YSg0KX0sbi5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24odCl7dGhpcy5jaGVja09mZnNldCh0KTt2YXIgZT10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrdCk7cmV0dXJuIHRoaXMuaW5kZXgrPXQsZX0sZS5leHBvcnRzPW59LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0RhdGFSZWFkZXJcIjoxOH1dLDIxOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vQXJyYXlSZWFkZXJcIik7ZnVuY3Rpb24gbih0KXtpLmNhbGwodGhpcyx0KX10KFwiLi4vdXRpbHNcIikuaW5oZXJpdHMobixpKSxuLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbih0KXtpZih0aGlzLmNoZWNrT2Zmc2V0KHQpLDA9PT10KXJldHVybiBuZXcgVWludDhBcnJheSgwKTt2YXIgZT10aGlzLmRhdGEuc3ViYXJyYXkodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrdCk7cmV0dXJuIHRoaXMuaW5kZXgrPXQsZX0sZS5leHBvcnRzPW59LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0FycmF5UmVhZGVyXCI6MTd9XSwyMjpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuLi91dGlsc1wiKSxuPXQoXCIuLi9zdXBwb3J0XCIpLHM9dChcIi4vQXJyYXlSZWFkZXJcIiksYT10KFwiLi9TdHJpbmdSZWFkZXJcIiksbz10KFwiLi9Ob2RlQnVmZmVyUmVhZGVyXCIpLGg9dChcIi4vVWludDhBcnJheVJlYWRlclwiKTtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9aS5nZXRUeXBlT2YodCk7cmV0dXJuIGkuY2hlY2tTdXBwb3J0KGUpLFwic3RyaW5nXCIhPT1lfHxuLnVpbnQ4YXJyYXk/XCJub2RlYnVmZmVyXCI9PT1lP25ldyBvKHQpOm4udWludDhhcnJheT9uZXcgaChpLnRyYW5zZm9ybVRvKFwidWludDhhcnJheVwiLHQpKTpuZXcgcyhpLnRyYW5zZm9ybVRvKFwiYXJyYXlcIix0KSk6bmV3IGEodCl9fSx7XCIuLi9zdXBwb3J0XCI6MzAsXCIuLi91dGlsc1wiOjMyLFwiLi9BcnJheVJlYWRlclwiOjE3LFwiLi9Ob2RlQnVmZmVyUmVhZGVyXCI6MTksXCIuL1N0cmluZ1JlYWRlclwiOjIwLFwiLi9VaW50OEFycmF5UmVhZGVyXCI6MjF9XSwyMzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3IuTE9DQUxfRklMRV9IRUFERVI9XCJQS1x1MDAwM1x1MDAwNFwiLHIuQ0VOVFJBTF9GSUxFX0hFQURFUj1cIlBLXHUwMDAxXHUwMDAyXCIsci5DRU5UUkFMX0RJUkVDVE9SWV9FTkQ9XCJQS1x1MDAwNVx1MDAwNlwiLHIuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUj1cIlBLXHUwMDA2XHUwMDA3XCIsci5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQ9XCJQS1x1MDAwNlx1MDAwNlwiLHIuREFUQV9ERVNDUklQVE9SPVwiUEtcdTAwMDdcXGJcIn0se31dLDI0OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vR2VuZXJpY1dvcmtlclwiKSxuPXQoXCIuLi91dGlsc1wiKTtmdW5jdGlvbiBzKHQpe2kuY2FsbCh0aGlzLFwiQ29udmVydFdvcmtlciB0byBcIit0KSx0aGlzLmRlc3RUeXBlPXR9bi5pbmhlcml0cyhzLGkpLHMucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbih0KXt0aGlzLnB1c2goe2RhdGE6bi50cmFuc2Zvcm1Ubyh0aGlzLmRlc3RUeXBlLHQuZGF0YSksbWV0YTp0Lm1ldGF9KX0sZS5leHBvcnRzPXN9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDI1OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vR2VuZXJpY1dvcmtlclwiKSxuPXQoXCIuLi9jcmMzMlwiKTtmdW5jdGlvbiBzKCl7aS5jYWxsKHRoaXMsXCJDcmMzMlByb2JlXCIpLHRoaXMud2l0aFN0cmVhbUluZm8oXCJjcmMzMlwiLDApfXQoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhzLGkpLHMucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbih0KXt0aGlzLnN0cmVhbUluZm8uY3JjMzI9bih0LmRhdGEsdGhpcy5zdHJlYW1JbmZvLmNyYzMyfHwwKSx0aGlzLnB1c2godCl9LGUuZXhwb3J0cz1zfSx7XCIuLi9jcmMzMlwiOjQsXCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyNjpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuLi91dGlsc1wiKSxuPXQoXCIuL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyh0KXtuLmNhbGwodGhpcyxcIkRhdGFMZW5ndGhQcm9iZSBmb3IgXCIrdCksdGhpcy5wcm9wTmFtZT10LHRoaXMud2l0aFN0cmVhbUluZm8odCwwKX1pLmluaGVyaXRzKHMsbikscy5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPXRoaXMuc3RyZWFtSW5mb1t0aGlzLnByb3BOYW1lXXx8MDt0aGlzLnN0cmVhbUluZm9bdGhpcy5wcm9wTmFtZV09ZSt0LmRhdGEubGVuZ3RofW4ucHJvdG90eXBlLnByb2Nlc3NDaHVuay5jYWxsKHRoaXMsdCl9LGUuZXhwb3J0cz1zfSx7XCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyNzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuLi91dGlsc1wiKSxuPXQoXCIuL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyh0KXtuLmNhbGwodGhpcyxcIkRhdGFXb3JrZXJcIik7dmFyIGU9dGhpczt0aGlzLmRhdGFJc1JlYWR5PSExLHRoaXMuaW5kZXg9MCx0aGlzLm1heD0wLHRoaXMuZGF0YT1udWxsLHRoaXMudHlwZT1cIlwiLHRoaXMuX3RpY2tTY2hlZHVsZWQ9ITEsdC50aGVuKGZ1bmN0aW9uKHQpe2UuZGF0YUlzUmVhZHk9ITAsZS5kYXRhPXQsZS5tYXg9dCYmdC5sZW5ndGh8fDAsZS50eXBlPWkuZ2V0VHlwZU9mKHQpLGUuaXNQYXVzZWR8fGUuX3RpY2tBbmRSZXBlYXQoKX0sZnVuY3Rpb24odCl7ZS5lcnJvcih0KX0pfWkuaW5oZXJpdHMocyxuKSxzLnByb3RvdHlwZS5jbGVhblVwPWZ1bmN0aW9uKCl7bi5wcm90b3R5cGUuY2xlYW5VcC5jYWxsKHRoaXMpLHRoaXMuZGF0YT1udWxsfSxzLnByb3RvdHlwZS5yZXN1bWU9ZnVuY3Rpb24oKXtyZXR1cm4hIW4ucHJvdG90eXBlLnJlc3VtZS5jYWxsKHRoaXMpJiYoIXRoaXMuX3RpY2tTY2hlZHVsZWQmJnRoaXMuZGF0YUlzUmVhZHkmJih0aGlzLl90aWNrU2NoZWR1bGVkPSEwLGkuZGVsYXkodGhpcy5fdGlja0FuZFJlcGVhdCxbXSx0aGlzKSksITApfSxzLnByb3RvdHlwZS5fdGlja0FuZFJlcGVhdD1mdW5jdGlvbigpe3RoaXMuX3RpY2tTY2hlZHVsZWQ9ITEsdGhpcy5pc1BhdXNlZHx8dGhpcy5pc0ZpbmlzaGVkfHwodGhpcy5fdGljaygpLHRoaXMuaXNGaW5pc2hlZHx8KGkuZGVsYXkodGhpcy5fdGlja0FuZFJlcGVhdCxbXSx0aGlzKSx0aGlzLl90aWNrU2NoZWR1bGVkPSEwKSl9LHMucHJvdG90eXBlLl90aWNrPWZ1bmN0aW9uKCl7aWYodGhpcy5pc1BhdXNlZHx8dGhpcy5pc0ZpbmlzaGVkKXJldHVybiExO3ZhciB0PW51bGwsZT1NYXRoLm1pbih0aGlzLm1heCx0aGlzLmluZGV4KzE2Mzg0KTtpZih0aGlzLmluZGV4Pj10aGlzLm1heClyZXR1cm4gdGhpcy5lbmQoKTtzd2l0Y2godGhpcy50eXBlKXtjYXNlXCJzdHJpbmdcIjp0PXRoaXMuZGF0YS5zdWJzdHJpbmcodGhpcy5pbmRleCxlKTticmVhaztjYXNlXCJ1aW50OGFycmF5XCI6dD10aGlzLmRhdGEuc3ViYXJyYXkodGhpcy5pbmRleCxlKTticmVhaztjYXNlXCJhcnJheVwiOmNhc2VcIm5vZGVidWZmZXJcIjp0PXRoaXMuZGF0YS5zbGljZSh0aGlzLmluZGV4LGUpfXJldHVybiB0aGlzLmluZGV4PWUsdGhpcy5wdXNoKHtkYXRhOnQsbWV0YTp7cGVyY2VudDp0aGlzLm1heD90aGlzLmluZGV4L3RoaXMubWF4KjEwMDowfX0pfSxlLmV4cG9ydHM9c30se1wiLi4vdXRpbHNcIjozMixcIi4vR2VuZXJpY1dvcmtlclwiOjI4fV0sMjg6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKHQpe3RoaXMubmFtZT10fHxcImRlZmF1bHRcIix0aGlzLnN0cmVhbUluZm89e30sdGhpcy5nZW5lcmF0ZWRFcnJvcj1udWxsLHRoaXMuZXh0cmFTdHJlYW1JbmZvPXt9LHRoaXMuaXNQYXVzZWQ9ITAsdGhpcy5pc0ZpbmlzaGVkPSExLHRoaXMuaXNMb2NrZWQ9ITEsdGhpcy5fbGlzdGVuZXJzPXtkYXRhOltdLGVuZDpbXSxlcnJvcjpbXX0sdGhpcy5wcmV2aW91cz1udWxsfWkucHJvdG90eXBlPXtwdXNoOmZ1bmN0aW9uKHQpe3RoaXMuZW1pdChcImRhdGFcIix0KX0sZW5kOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0ZpbmlzaGVkKXJldHVybiExO3RoaXMuZmx1c2goKTt0cnl7dGhpcy5lbWl0KFwiZW5kXCIpLHRoaXMuY2xlYW5VcCgpLHRoaXMuaXNGaW5pc2hlZD0hMH1jYXRjaCh0KXt0aGlzLmVtaXQoXCJlcnJvclwiLHQpfXJldHVybiEwfSxlcnJvcjpmdW5jdGlvbih0KXtyZXR1cm4hdGhpcy5pc0ZpbmlzaGVkJiYodGhpcy5pc1BhdXNlZD90aGlzLmdlbmVyYXRlZEVycm9yPXQ6KHRoaXMuaXNGaW5pc2hlZD0hMCx0aGlzLmVtaXQoXCJlcnJvclwiLHQpLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMuZXJyb3IodCksdGhpcy5jbGVhblVwKCkpLCEwKX0sb246ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5fbGlzdGVuZXJzW3RdLnB1c2goZSksdGhpc30sY2xlYW5VcDpmdW5jdGlvbigpe3RoaXMuc3RyZWFtSW5mbz10aGlzLmdlbmVyYXRlZEVycm9yPXRoaXMuZXh0cmFTdHJlYW1JbmZvPW51bGwsdGhpcy5fbGlzdGVuZXJzPVtdfSxlbWl0OmZ1bmN0aW9uKHQsZSl7aWYodGhpcy5fbGlzdGVuZXJzW3RdKWZvcih2YXIgcj0wO3I8dGhpcy5fbGlzdGVuZXJzW3RdLmxlbmd0aDtyKyspdGhpcy5fbGlzdGVuZXJzW3RdW3JdLmNhbGwodGhpcyxlKX0scGlwZTpmdW5jdGlvbih0KXtyZXR1cm4gdC5yZWdpc3RlclByZXZpb3VzKHRoaXMpfSxyZWdpc3RlclByZXZpb3VzOmZ1bmN0aW9uKHQpe2lmKHRoaXMuaXNMb2NrZWQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0cmVhbSAnXCIrdGhpcytcIicgaGFzIGFscmVhZHkgYmVlbiB1c2VkLlwiKTt0aGlzLnN0cmVhbUluZm89dC5zdHJlYW1JbmZvLHRoaXMubWVyZ2VTdHJlYW1JbmZvKCksdGhpcy5wcmV2aW91cz10O3ZhciBlPXRoaXM7cmV0dXJuIHQub24oXCJkYXRhXCIsZnVuY3Rpb24odCl7ZS5wcm9jZXNzQ2h1bmsodCl9KSx0Lm9uKFwiZW5kXCIsZnVuY3Rpb24oKXtlLmVuZCgpfSksdC5vbihcImVycm9yXCIsZnVuY3Rpb24odCl7ZS5lcnJvcih0KX0pLHRoaXN9LHBhdXNlOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaXNQYXVzZWQmJiF0aGlzLmlzRmluaXNoZWQmJih0aGlzLmlzUGF1c2VkPSEwLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMucGF1c2UoKSwhMCl9LHJlc3VtZTpmdW5jdGlvbigpe2lmKCF0aGlzLmlzUGF1c2VkfHx0aGlzLmlzRmluaXNoZWQpcmV0dXJuITE7dmFyIHQ9dGhpcy5pc1BhdXNlZD0hMTtyZXR1cm4gdGhpcy5nZW5lcmF0ZWRFcnJvciYmKHRoaXMuZXJyb3IodGhpcy5nZW5lcmF0ZWRFcnJvciksdD0hMCksdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5yZXN1bWUoKSwhdH0sZmx1c2g6ZnVuY3Rpb24oKXt9LHByb2Nlc3NDaHVuazpmdW5jdGlvbih0KXt0aGlzLnB1c2godCl9LHdpdGhTdHJlYW1JbmZvOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZXh0cmFTdHJlYW1JbmZvW3RdPWUsdGhpcy5tZXJnZVN0cmVhbUluZm8oKSx0aGlzfSxtZXJnZVN0cmVhbUluZm86ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gdGhpcy5leHRyYVN0cmVhbUluZm8pdGhpcy5leHRyYVN0cmVhbUluZm8uaGFzT3duUHJvcGVydHkodCkmJih0aGlzLnN0cmVhbUluZm9bdF09dGhpcy5leHRyYVN0cmVhbUluZm9bdF0pfSxsb2NrOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0xvY2tlZCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3RyZWFtICdcIit0aGlzK1wiJyBoYXMgYWxyZWFkeSBiZWVuIHVzZWQuXCIpO3RoaXMuaXNMb2NrZWQ9ITAsdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5sb2NrKCl9LHRvU3RyaW5nOmZ1bmN0aW9uKCl7dmFyIHQ9XCJXb3JrZXIgXCIrdGhpcy5uYW1lO3JldHVybiB0aGlzLnByZXZpb3VzP3RoaXMucHJldmlvdXMrXCIgLT4gXCIrdDp0fX0sZS5leHBvcnRzPWl9LHt9XSwyOTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBoPXQoXCIuLi91dGlsc1wiKSxuPXQoXCIuL0NvbnZlcnRXb3JrZXJcIikscz10KFwiLi9HZW5lcmljV29ya2VyXCIpLHU9dChcIi4uL2Jhc2U2NFwiKSxpPXQoXCIuLi9zdXBwb3J0XCIpLGE9dChcIi4uL2V4dGVybmFsXCIpLG89bnVsbDtpZihpLm5vZGVzdHJlYW0pdHJ5e289dChcIi4uL25vZGVqcy9Ob2RlanNTdHJlYW1PdXRwdXRBZGFwdGVyXCIpfWNhdGNoKHQpe31mdW5jdGlvbiBsKHQsbyl7cmV0dXJuIG5ldyBhLlByb21pc2UoZnVuY3Rpb24oZSxyKXt2YXIgaT1bXSxuPXQuX2ludGVybmFsVHlwZSxzPXQuX291dHB1dFR5cGUsYT10Ll9taW1lVHlwZTt0Lm9uKFwiZGF0YVwiLGZ1bmN0aW9uKHQsZSl7aS5wdXNoKHQpLG8mJm8oZSl9KS5vbihcImVycm9yXCIsZnVuY3Rpb24odCl7aT1bXSxyKHQpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe3RyeXt2YXIgdD1mdW5jdGlvbih0LGUscil7c3dpdGNoKHQpe2Nhc2VcImJsb2JcIjpyZXR1cm4gaC5uZXdCbG9iKGgudHJhbnNmb3JtVG8oXCJhcnJheWJ1ZmZlclwiLGUpLHIpO2Nhc2VcImJhc2U2NFwiOnJldHVybiB1LmVuY29kZShlKTtkZWZhdWx0OnJldHVybiBoLnRyYW5zZm9ybVRvKHQsZSl9fShzLGZ1bmN0aW9uKHQsZSl7dmFyIHIsaT0wLG49bnVsbCxzPTA7Zm9yKHI9MDtyPGUubGVuZ3RoO3IrKylzKz1lW3JdLmxlbmd0aDtzd2l0Y2godCl7Y2FzZVwic3RyaW5nXCI6cmV0dXJuIGUuam9pbihcIlwiKTtjYXNlXCJhcnJheVwiOnJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLGUpO2Nhc2VcInVpbnQ4YXJyYXlcIjpmb3Iobj1uZXcgVWludDhBcnJheShzKSxyPTA7cjxlLmxlbmd0aDtyKyspbi5zZXQoZVtyXSxpKSxpKz1lW3JdLmxlbmd0aDtyZXR1cm4gbjtjYXNlXCJub2RlYnVmZmVyXCI6cmV0dXJuIEJ1ZmZlci5jb25jYXQoZSk7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJjb25jYXQgOiB1bnN1cHBvcnRlZCB0eXBlICdcIit0K1wiJ1wiKX19KG4saSksYSk7ZSh0KX1jYXRjaCh0KXtyKHQpfWk9W119KS5yZXN1bWUoKX0pfWZ1bmN0aW9uIGYodCxlLHIpe3ZhciBpPWU7c3dpdGNoKGUpe2Nhc2VcImJsb2JcIjpjYXNlXCJhcnJheWJ1ZmZlclwiOmk9XCJ1aW50OGFycmF5XCI7YnJlYWs7Y2FzZVwiYmFzZTY0XCI6aT1cInN0cmluZ1wifXRyeXt0aGlzLl9pbnRlcm5hbFR5cGU9aSx0aGlzLl9vdXRwdXRUeXBlPWUsdGhpcy5fbWltZVR5cGU9cixoLmNoZWNrU3VwcG9ydChpKSx0aGlzLl93b3JrZXI9dC5waXBlKG5ldyBuKGkpKSx0LmxvY2soKX1jYXRjaCh0KXt0aGlzLl93b3JrZXI9bmV3IHMoXCJlcnJvclwiKSx0aGlzLl93b3JrZXIuZXJyb3IodCl9fWYucHJvdG90eXBlPXthY2N1bXVsYXRlOmZ1bmN0aW9uKHQpe3JldHVybiBsKHRoaXMsdCl9LG9uOmZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpcztyZXR1cm5cImRhdGFcIj09PXQ/dGhpcy5fd29ya2VyLm9uKHQsZnVuY3Rpb24odCl7ZS5jYWxsKHIsdC5kYXRhLHQubWV0YSl9KTp0aGlzLl93b3JrZXIub24odCxmdW5jdGlvbigpe2guZGVsYXkoZSxhcmd1bWVudHMscil9KSx0aGlzfSxyZXN1bWU6ZnVuY3Rpb24oKXtyZXR1cm4gaC5kZWxheSh0aGlzLl93b3JrZXIucmVzdW1lLFtdLHRoaXMuX3dvcmtlciksdGhpc30scGF1c2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd29ya2VyLnBhdXNlKCksdGhpc30sdG9Ob2RlanNTdHJlYW06ZnVuY3Rpb24odCl7aWYoaC5jaGVja1N1cHBvcnQoXCJub2Rlc3RyZWFtXCIpLFwibm9kZWJ1ZmZlclwiIT09dGhpcy5fb3V0cHV0VHlwZSl0aHJvdyBuZXcgRXJyb3IodGhpcy5fb3V0cHV0VHlwZStcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgbWV0aG9kXCIpO3JldHVybiBuZXcgbyh0aGlzLHtvYmplY3RNb2RlOlwibm9kZWJ1ZmZlclwiIT09dGhpcy5fb3V0cHV0VHlwZX0sdCl9fSxlLmV4cG9ydHM9Zn0se1wiLi4vYmFzZTY0XCI6MSxcIi4uL2V4dGVybmFsXCI6NixcIi4uL25vZGVqcy9Ob2RlanNTdHJlYW1PdXRwdXRBZGFwdGVyXCI6MTMsXCIuLi9zdXBwb3J0XCI6MzAsXCIuLi91dGlsc1wiOjMyLFwiLi9Db252ZXJ0V29ya2VyXCI6MjQsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDMwOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7aWYoci5iYXNlNjQ9ITAsci5hcnJheT0hMCxyLnN0cmluZz0hMCxyLmFycmF5YnVmZmVyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBBcnJheUJ1ZmZlciYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4QXJyYXksci5ub2RlYnVmZmVyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBCdWZmZXIsci51aW50OGFycmF5PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5LFwidW5kZWZpbmVkXCI9PXR5cGVvZiBBcnJheUJ1ZmZlcilyLmJsb2I9ITE7ZWxzZXt2YXIgaT1uZXcgQXJyYXlCdWZmZXIoMCk7dHJ5e3IuYmxvYj0wPT09bmV3IEJsb2IoW2ldLHt0eXBlOlwiYXBwbGljYXRpb24vemlwXCJ9KS5zaXplfWNhdGNoKHQpe3RyeXt2YXIgbj1uZXcoc2VsZi5CbG9iQnVpbGRlcnx8c2VsZi5XZWJLaXRCbG9iQnVpbGRlcnx8c2VsZi5Nb3pCbG9iQnVpbGRlcnx8c2VsZi5NU0Jsb2JCdWlsZGVyKTtuLmFwcGVuZChpKSxyLmJsb2I9MD09PW4uZ2V0QmxvYihcImFwcGxpY2F0aW9uL3ppcFwiKS5zaXplfWNhdGNoKHQpe3IuYmxvYj0hMX19fXRyeXtyLm5vZGVzdHJlYW09ISF0KFwicmVhZGFibGUtc3RyZWFtXCIpLlJlYWRhYmxlfWNhdGNoKHQpe3Iubm9kZXN0cmVhbT0hMX19LHtcInJlYWRhYmxlLXN0cmVhbVwiOjE2fV0sMzE6W2Z1bmN0aW9uKHQsZSxzKXtcInVzZSBzdHJpY3RcIjtmb3IodmFyIG89dChcIi4vdXRpbHNcIiksaD10KFwiLi9zdXBwb3J0XCIpLHI9dChcIi4vbm9kZWpzVXRpbHNcIiksaT10KFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKSx1PW5ldyBBcnJheSgyNTYpLG49MDtuPDI1NjtuKyspdVtuXT0yNTI8PW4/NjoyNDg8PW4/NToyNDA8PW4/NDoyMjQ8PW4/MzoxOTI8PW4/MjoxO3VbMjU0XT11WzI1NF09MTtmdW5jdGlvbiBhKCl7aS5jYWxsKHRoaXMsXCJ1dGYtOCBkZWNvZGVcIiksdGhpcy5sZWZ0T3Zlcj1udWxsfWZ1bmN0aW9uIGwoKXtpLmNhbGwodGhpcyxcInV0Zi04IGVuY29kZVwiKX1zLnV0ZjhlbmNvZGU9ZnVuY3Rpb24odCl7cmV0dXJuIGgubm9kZWJ1ZmZlcj9yLm5ld0J1ZmZlckZyb20odCxcInV0Zi04XCIpOmZ1bmN0aW9uKHQpe3ZhciBlLHIsaSxuLHMsYT10Lmxlbmd0aCxvPTA7Zm9yKG49MDtuPGE7bisrKTU1Mjk2PT0oNjQ1MTImKHI9dC5jaGFyQ29kZUF0KG4pKSkmJm4rMTxhJiY1NjMyMD09KDY0NTEyJihpPXQuY2hhckNvZGVBdChuKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKGktNTYzMjApLG4rKyksbys9cjwxMjg/MTpyPDIwNDg/MjpyPDY1NTM2PzM6NDtmb3IoZT1oLnVpbnQ4YXJyYXk/bmV3IFVpbnQ4QXJyYXkobyk6bmV3IEFycmF5KG8pLG49cz0wO3M8bztuKyspNTUyOTY9PSg2NDUxMiYocj10LmNoYXJDb2RlQXQobikpKSYmbisxPGEmJjU2MzIwPT0oNjQ1MTImKGk9dC5jaGFyQ29kZUF0KG4rMSkpKSYmKHI9NjU1MzYrKHItNTUyOTY8PDEwKSsoaS01NjMyMCksbisrKSxyPDEyOD9lW3MrK109cjoocjwyMDQ4P2VbcysrXT0xOTJ8cj4+PjY6KHI8NjU1MzY/ZVtzKytdPTIyNHxyPj4+MTI6KGVbcysrXT0yNDB8cj4+PjE4LGVbcysrXT0xMjh8cj4+PjEyJjYzKSxlW3MrK109MTI4fHI+Pj42JjYzKSxlW3MrK109MTI4fDYzJnIpO3JldHVybiBlfSh0KX0scy51dGY4ZGVjb2RlPWZ1bmN0aW9uKHQpe3JldHVybiBoLm5vZGVidWZmZXI/by50cmFuc2Zvcm1UbyhcIm5vZGVidWZmZXJcIix0KS50b1N0cmluZyhcInV0Zi04XCIpOmZ1bmN0aW9uKHQpe3ZhciBlLHIsaSxuLHM9dC5sZW5ndGgsYT1uZXcgQXJyYXkoMipzKTtmb3IoZT1yPTA7ZTxzOylpZigoaT10W2UrK10pPDEyOClhW3IrK109aTtlbHNlIGlmKDQ8KG49dVtpXSkpYVtyKytdPTY1NTMzLGUrPW4tMTtlbHNle2ZvcihpJj0yPT09bj8zMTozPT09bj8xNTo3OzE8biYmZTxzOylpPWk8PDZ8NjMmdFtlKytdLG4tLTsxPG4/YVtyKytdPTY1NTMzOmk8NjU1MzY/YVtyKytdPWk6KGktPTY1NTM2LGFbcisrXT01NTI5NnxpPj4xMCYxMDIzLGFbcisrXT01NjMyMHwxMDIzJmkpfXJldHVybiBhLmxlbmd0aCE9PXImJihhLnN1YmFycmF5P2E9YS5zdWJhcnJheSgwLHIpOmEubGVuZ3RoPXIpLG8uYXBwbHlGcm9tQ2hhckNvZGUoYSl9KHQ9by50cmFuc2Zvcm1UbyhoLnVpbnQ4YXJyYXk/XCJ1aW50OGFycmF5XCI6XCJhcnJheVwiLHQpKX0sby5pbmhlcml0cyhhLGkpLGEucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbih0KXt2YXIgZT1vLnRyYW5zZm9ybVRvKGgudWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCIsdC5kYXRhKTtpZih0aGlzLmxlZnRPdmVyJiZ0aGlzLmxlZnRPdmVyLmxlbmd0aCl7aWYoaC51aW50OGFycmF5KXt2YXIgcj1lOyhlPW5ldyBVaW50OEFycmF5KHIubGVuZ3RoK3RoaXMubGVmdE92ZXIubGVuZ3RoKSkuc2V0KHRoaXMubGVmdE92ZXIsMCksZS5zZXQocix0aGlzLmxlZnRPdmVyLmxlbmd0aCl9ZWxzZSBlPXRoaXMubGVmdE92ZXIuY29uY2F0KGUpO3RoaXMubGVmdE92ZXI9bnVsbH12YXIgaT1mdW5jdGlvbih0LGUpe3ZhciByO2ZvcigoZT1lfHx0Lmxlbmd0aCk+dC5sZW5ndGgmJihlPXQubGVuZ3RoKSxyPWUtMTswPD1yJiYxMjg9PSgxOTImdFtyXSk7KXItLTtyZXR1cm4gcjwwP2U6MD09PXI/ZTpyK3VbdFtyXV0+ZT9yOmV9KGUpLG49ZTtpIT09ZS5sZW5ndGgmJihoLnVpbnQ4YXJyYXk/KG49ZS5zdWJhcnJheSgwLGkpLHRoaXMubGVmdE92ZXI9ZS5zdWJhcnJheShpLGUubGVuZ3RoKSk6KG49ZS5zbGljZSgwLGkpLHRoaXMubGVmdE92ZXI9ZS5zbGljZShpLGUubGVuZ3RoKSkpLHRoaXMucHVzaCh7ZGF0YTpzLnV0ZjhkZWNvZGUobiksbWV0YTp0Lm1ldGF9KX0sYS5wcm90b3R5cGUuZmx1c2g9ZnVuY3Rpb24oKXt0aGlzLmxlZnRPdmVyJiZ0aGlzLmxlZnRPdmVyLmxlbmd0aCYmKHRoaXMucHVzaCh7ZGF0YTpzLnV0ZjhkZWNvZGUodGhpcy5sZWZ0T3ZlciksbWV0YTp7fX0pLHRoaXMubGVmdE92ZXI9bnVsbCl9LHMuVXRmOERlY29kZVdvcmtlcj1hLG8uaW5oZXJpdHMobCxpKSxsLnByb3RvdHlwZS5wcm9jZXNzQ2h1bms9ZnVuY3Rpb24odCl7dGhpcy5wdXNoKHtkYXRhOnMudXRmOGVuY29kZSh0LmRhdGEpLG1ldGE6dC5tZXRhfSl9LHMuVXRmOEVuY29kZVdvcmtlcj1sfSx7XCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3N1cHBvcnRcIjozMCxcIi4vdXRpbHNcIjozMn1dLDMyOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89dChcIi4vc3VwcG9ydFwiKSxoPXQoXCIuL2Jhc2U2NFwiKSxyPXQoXCIuL25vZGVqc1V0aWxzXCIpLGk9dChcInNldC1pbW1lZGlhdGUtc2hpbVwiKSx1PXQoXCIuL2V4dGVybmFsXCIpO2Z1bmN0aW9uIG4odCl7cmV0dXJuIHR9ZnVuY3Rpb24gbCh0LGUpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7KytyKWVbcl09MjU1JnQuY2hhckNvZGVBdChyKTtyZXR1cm4gZX1hLm5ld0Jsb2I9ZnVuY3Rpb24oZSxyKXthLmNoZWNrU3VwcG9ydChcImJsb2JcIik7dHJ5e3JldHVybiBuZXcgQmxvYihbZV0se3R5cGU6cn0pfWNhdGNoKHQpe3RyeXt2YXIgaT1uZXcoc2VsZi5CbG9iQnVpbGRlcnx8c2VsZi5XZWJLaXRCbG9iQnVpbGRlcnx8c2VsZi5Nb3pCbG9iQnVpbGRlcnx8c2VsZi5NU0Jsb2JCdWlsZGVyKTtyZXR1cm4gaS5hcHBlbmQoZSksaS5nZXRCbG9iKHIpfWNhdGNoKHQpe3Rocm93IG5ldyBFcnJvcihcIkJ1ZyA6IGNhbid0IGNvbnN0cnVjdCB0aGUgQmxvYi5cIil9fX07dmFyIHM9e3N0cmluZ2lmeUJ5Q2h1bms6ZnVuY3Rpb24odCxlLHIpe3ZhciBpPVtdLG49MCxzPXQubGVuZ3RoO2lmKHM8PXIpcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCx0KTtmb3IoO248czspXCJhcnJheVwiPT09ZXx8XCJub2RlYnVmZmVyXCI9PT1lP2kucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsdC5zbGljZShuLE1hdGgubWluKG4rcixzKSkpKTppLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHQuc3ViYXJyYXkobixNYXRoLm1pbihuK3IscykpKSksbis9cjtyZXR1cm4gaS5qb2luKFwiXCIpfSxzdHJpbmdpZnlCeUNoYXI6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPVwiXCIscj0wO3I8dC5sZW5ndGg7cisrKWUrPVN0cmluZy5mcm9tQ2hhckNvZGUodFtyXSk7cmV0dXJuIGV9LGFwcGx5Q2FuQmVVc2VkOnt1aW50OGFycmF5OmZ1bmN0aW9uKCl7dHJ5e3JldHVybiBvLnVpbnQ4YXJyYXkmJjE9PT1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsbmV3IFVpbnQ4QXJyYXkoMSkpLmxlbmd0aH1jYXRjaCh0KXtyZXR1cm4hMX19KCksbm9kZWJ1ZmZlcjpmdW5jdGlvbigpe3RyeXtyZXR1cm4gby5ub2RlYnVmZmVyJiYxPT09U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHIuYWxsb2NCdWZmZXIoMSkpLmxlbmd0aH1jYXRjaCh0KXtyZXR1cm4hMX19KCl9fTtmdW5jdGlvbiBmKHQpe3ZhciBlPTY1NTM2LHI9YS5nZXRUeXBlT2YodCksaT0hMDtpZihcInVpbnQ4YXJyYXlcIj09PXI/aT1zLmFwcGx5Q2FuQmVVc2VkLnVpbnQ4YXJyYXk6XCJub2RlYnVmZmVyXCI9PT1yJiYoaT1zLmFwcGx5Q2FuQmVVc2VkLm5vZGVidWZmZXIpLGkpZm9yKDsxPGU7KXRyeXtyZXR1cm4gcy5zdHJpbmdpZnlCeUNodW5rKHQscixlKX1jYXRjaCh0KXtlPU1hdGguZmxvb3IoZS8yKX1yZXR1cm4gcy5zdHJpbmdpZnlCeUNoYXIodCl9ZnVuY3Rpb24gZCh0LGUpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKWVbcl09dFtyXTtyZXR1cm4gZX1hLmFwcGx5RnJvbUNoYXJDb2RlPWY7dmFyIGM9e307Yy5zdHJpbmc9e3N0cmluZzpuLGFycmF5OmZ1bmN0aW9uKHQpe3JldHVybiBsKHQsbmV3IEFycmF5KHQubGVuZ3RoKSl9LGFycmF5YnVmZmVyOmZ1bmN0aW9uKHQpe3JldHVybiBjLnN0cmluZy51aW50OGFycmF5KHQpLmJ1ZmZlcn0sdWludDhhcnJheTpmdW5jdGlvbih0KXtyZXR1cm4gbCh0LG5ldyBVaW50OEFycmF5KHQubGVuZ3RoKSl9LG5vZGVidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIGwodCxyLmFsbG9jQnVmZmVyKHQubGVuZ3RoKSl9fSxjLmFycmF5PXtzdHJpbmc6ZixhcnJheTpuLGFycmF5YnVmZmVyOmZ1bmN0aW9uKHQpe3JldHVybiBuZXcgVWludDhBcnJheSh0KS5idWZmZXJ9LHVpbnQ4YXJyYXk6ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBVaW50OEFycmF5KHQpfSxub2RlYnVmZmVyOmZ1bmN0aW9uKHQpe3JldHVybiByLm5ld0J1ZmZlckZyb20odCl9fSxjLmFycmF5YnVmZmVyPXtzdHJpbmc6ZnVuY3Rpb24odCl7cmV0dXJuIGYobmV3IFVpbnQ4QXJyYXkodCkpfSxhcnJheTpmdW5jdGlvbih0KXtyZXR1cm4gZChuZXcgVWludDhBcnJheSh0KSxuZXcgQXJyYXkodC5ieXRlTGVuZ3RoKSl9LGFycmF5YnVmZmVyOm4sdWludDhhcnJheTpmdW5jdGlvbih0KXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkodCl9LG5vZGVidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIHIubmV3QnVmZmVyRnJvbShuZXcgVWludDhBcnJheSh0KSl9fSxjLnVpbnQ4YXJyYXk9e3N0cmluZzpmLGFycmF5OmZ1bmN0aW9uKHQpe3JldHVybiBkKHQsbmV3IEFycmF5KHQubGVuZ3RoKSl9LGFycmF5YnVmZmVyOmZ1bmN0aW9uKHQpe3JldHVybiB0LmJ1ZmZlcn0sdWludDhhcnJheTpuLG5vZGVidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIHIubmV3QnVmZmVyRnJvbSh0KX19LGMubm9kZWJ1ZmZlcj17c3RyaW5nOmYsYXJyYXk6ZnVuY3Rpb24odCl7cmV0dXJuIGQodCxuZXcgQXJyYXkodC5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIGMubm9kZWJ1ZmZlci51aW50OGFycmF5KHQpLmJ1ZmZlcn0sdWludDhhcnJheTpmdW5jdGlvbih0KXtyZXR1cm4gZCh0LG5ldyBVaW50OEFycmF5KHQubGVuZ3RoKSl9LG5vZGVidWZmZXI6bn0sYS50cmFuc2Zvcm1Ubz1mdW5jdGlvbih0LGUpe2lmKGU9ZXx8XCJcIiwhdClyZXR1cm4gZTthLmNoZWNrU3VwcG9ydCh0KTt2YXIgcj1hLmdldFR5cGVPZihlKTtyZXR1cm4gY1tyXVt0XShlKX0sYS5nZXRUeXBlT2Y9ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/XCJzdHJpbmdcIjpcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCk/XCJhcnJheVwiOm8ubm9kZWJ1ZmZlciYmci5pc0J1ZmZlcih0KT9cIm5vZGVidWZmZXJcIjpvLnVpbnQ4YXJyYXkmJnQgaW5zdGFuY2VvZiBVaW50OEFycmF5P1widWludDhhcnJheVwiOm8uYXJyYXlidWZmZXImJnQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcj9cImFycmF5YnVmZmVyXCI6dm9pZCAwfSxhLmNoZWNrU3VwcG9ydD1mdW5jdGlvbih0KXtpZighb1t0LnRvTG93ZXJDYXNlKCldKXRocm93IG5ldyBFcnJvcih0K1wiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBwbGF0Zm9ybVwiKX0sYS5NQVhfVkFMVUVfMTZCSVRTPTY1NTM1LGEuTUFYX1ZBTFVFXzMyQklUUz0tMSxhLnByZXR0eT1mdW5jdGlvbih0KXt2YXIgZSxyLGk9XCJcIjtmb3Iocj0wO3I8KHR8fFwiXCIpLmxlbmd0aDtyKyspaSs9XCJcXFxceFwiKygoZT10LmNoYXJDb2RlQXQocikpPDE2P1wiMFwiOlwiXCIpK2UudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7cmV0dXJuIGl9LGEuZGVsYXk9ZnVuY3Rpb24odCxlLHIpe2koZnVuY3Rpb24oKXt0LmFwcGx5KHJ8fG51bGwsZXx8W10pfSl9LGEuaW5oZXJpdHM9ZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKCl7fXIucHJvdG90eXBlPWUucHJvdG90eXBlLHQucHJvdG90eXBlPW5ldyByfSxhLmV4dGVuZD1mdW5jdGlvbigpe3ZhciB0LGUscj17fTtmb3IodD0wO3Q8YXJndW1lbnRzLmxlbmd0aDt0KyspZm9yKGUgaW4gYXJndW1lbnRzW3RdKWFyZ3VtZW50c1t0XS5oYXNPd25Qcm9wZXJ0eShlKSYmdm9pZCAwPT09cltlXSYmKHJbZV09YXJndW1lbnRzW3RdW2VdKTtyZXR1cm4gcn0sYS5wcmVwYXJlQ29udGVudD1mdW5jdGlvbihyLHQsaSxuLHMpe3JldHVybiB1LlByb21pc2UucmVzb2x2ZSh0KS50aGVuKGZ1bmN0aW9uKGkpe3JldHVybiBvLmJsb2ImJihpIGluc3RhbmNlb2YgQmxvYnx8LTEhPT1bXCJbb2JqZWN0IEZpbGVdXCIsXCJbb2JqZWN0IEJsb2JdXCJdLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGkpKSkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBGaWxlUmVhZGVyP25ldyB1LlByb21pc2UoZnVuY3Rpb24oZSxyKXt2YXIgdD1uZXcgRmlsZVJlYWRlcjt0Lm9ubG9hZD1mdW5jdGlvbih0KXtlKHQudGFyZ2V0LnJlc3VsdCl9LHQub25lcnJvcj1mdW5jdGlvbih0KXtyKHQudGFyZ2V0LmVycm9yKX0sdC5yZWFkQXNBcnJheUJ1ZmZlcihpKX0pOml9KS50aGVuKGZ1bmN0aW9uKHQpe3ZhciBlPWEuZ2V0VHlwZU9mKHQpO3JldHVybiBlPyhcImFycmF5YnVmZmVyXCI9PT1lP3Q9YS50cmFuc2Zvcm1UbyhcInVpbnQ4YXJyYXlcIix0KTpcInN0cmluZ1wiPT09ZSYmKHM/dD1oLmRlY29kZSh0KTppJiYhMCE9PW4mJih0PWZ1bmN0aW9uKHQpe3JldHVybiBsKHQsby51aW50OGFycmF5P25ldyBVaW50OEFycmF5KHQubGVuZ3RoKTpuZXcgQXJyYXkodC5sZW5ndGgpKX0odCkpKSx0KTp1LlByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbid0IHJlYWQgdGhlIGRhdGEgb2YgJ1wiK3IrXCInLiBJcyBpdCBpbiBhIHN1cHBvcnRlZCBKYXZhU2NyaXB0IHR5cGUgKFN0cmluZywgQmxvYiwgQXJyYXlCdWZmZXIsIGV0YykgP1wiKSl9KX19LHtcIi4vYmFzZTY0XCI6MSxcIi4vZXh0ZXJuYWxcIjo2LFwiLi9ub2RlanNVdGlsc1wiOjE0LFwiLi9zdXBwb3J0XCI6MzAsXCJzZXQtaW1tZWRpYXRlLXNoaW1cIjo1NH1dLDMzOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vcmVhZGVyL3JlYWRlckZvclwiKSxuPXQoXCIuL3V0aWxzXCIpLHM9dChcIi4vc2lnbmF0dXJlXCIpLGE9dChcIi4vemlwRW50cnlcIiksbz0odChcIi4vdXRmOFwiKSx0KFwiLi9zdXBwb3J0XCIpKTtmdW5jdGlvbiBoKHQpe3RoaXMuZmlsZXM9W10sdGhpcy5sb2FkT3B0aW9ucz10fWgucHJvdG90eXBlPXtjaGVja1NpZ25hdHVyZTpmdW5jdGlvbih0KXtpZighdGhpcy5yZWFkZXIucmVhZEFuZENoZWNrU2lnbmF0dXJlKHQpKXt0aGlzLnJlYWRlci5pbmRleC09NDt2YXIgZT10aGlzLnJlYWRlci5yZWFkU3RyaW5nKDQpO3Rocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXAgb3IgYnVnOiB1bmV4cGVjdGVkIHNpZ25hdHVyZSAoXCIrbi5wcmV0dHkoZSkrXCIsIGV4cGVjdGVkIFwiK24ucHJldHR5KHQpK1wiKVwiKX19LGlzU2lnbmF0dXJlOmZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpcy5yZWFkZXIuaW5kZXg7dGhpcy5yZWFkZXIuc2V0SW5kZXgodCk7dmFyIGk9dGhpcy5yZWFkZXIucmVhZFN0cmluZyg0KT09PWU7cmV0dXJuIHRoaXMucmVhZGVyLnNldEluZGV4KHIpLGl9LHJlYWRCbG9ja0VuZE9mQ2VudHJhbDpmdW5jdGlvbigpe3RoaXMuZGlza051bWJlcj10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuY2VudHJhbERpclJlY29yZHM9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0aGlzLmNlbnRyYWxEaXJTaXplPXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy5jZW50cmFsRGlyT2Zmc2V0PXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy56aXBDb21tZW50TGVuZ3RoPXRoaXMucmVhZGVyLnJlYWRJbnQoMik7dmFyIHQ9dGhpcy5yZWFkZXIucmVhZERhdGEodGhpcy56aXBDb21tZW50TGVuZ3RoKSxlPW8udWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCIscj1uLnRyYW5zZm9ybVRvKGUsdCk7dGhpcy56aXBDb21tZW50PXRoaXMubG9hZE9wdGlvbnMuZGVjb2RlRmlsZU5hbWUocil9LHJlYWRCbG9ja1ppcDY0RW5kT2ZDZW50cmFsOmZ1bmN0aW9uKCl7dGhpcy56aXA2NEVuZE9mQ2VudHJhbFNpemU9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLnJlYWRlci5za2lwKDQpLHRoaXMuZGlza051bWJlcj10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9dGhpcy5yZWFkZXIucmVhZEludCg0KSx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuY2VudHJhbERpclJlY29yZHM9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLmNlbnRyYWxEaXJTaXplPXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy5jZW50cmFsRGlyT2Zmc2V0PXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy56aXA2NEV4dGVuc2libGVEYXRhPXt9O2Zvcih2YXIgdCxlLHIsaT10aGlzLnppcDY0RW5kT2ZDZW50cmFsU2l6ZS00NDswPGk7KXQ9dGhpcy5yZWFkZXIucmVhZEludCgyKSxlPXRoaXMucmVhZGVyLnJlYWRJbnQoNCkscj10aGlzLnJlYWRlci5yZWFkRGF0YShlKSx0aGlzLnppcDY0RXh0ZW5zaWJsZURhdGFbdF09e2lkOnQsbGVuZ3RoOmUsdmFsdWU6cn19LHJlYWRCbG9ja1ppcDY0RW5kT2ZDZW50cmFsTG9jYXRvcjpmdW5jdGlvbigpe2lmKHRoaXMuZGlza1dpdGhaaXA2NENlbnRyYWxEaXJTdGFydD10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpcj10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuZGlza3NDb3VudD10aGlzLnJlYWRlci5yZWFkSW50KDQpLDE8dGhpcy5kaXNrc0NvdW50KXRocm93IG5ldyBFcnJvcihcIk11bHRpLXZvbHVtZXMgemlwIGFyZSBub3Qgc3VwcG9ydGVkXCIpfSxyZWFkTG9jYWxGaWxlczpmdW5jdGlvbigpe3ZhciB0LGU7Zm9yKHQ9MDt0PHRoaXMuZmlsZXMubGVuZ3RoO3QrKyllPXRoaXMuZmlsZXNbdF0sdGhpcy5yZWFkZXIuc2V0SW5kZXgoZS5sb2NhbEhlYWRlck9mZnNldCksdGhpcy5jaGVja1NpZ25hdHVyZShzLkxPQ0FMX0ZJTEVfSEVBREVSKSxlLnJlYWRMb2NhbFBhcnQodGhpcy5yZWFkZXIpLGUuaGFuZGxlVVRGOCgpLGUucHJvY2Vzc0F0dHJpYnV0ZXMoKX0scmVhZENlbnRyYWxEaXI6ZnVuY3Rpb24oKXt2YXIgdDtmb3IodGhpcy5yZWFkZXIuc2V0SW5kZXgodGhpcy5jZW50cmFsRGlyT2Zmc2V0KTt0aGlzLnJlYWRlci5yZWFkQW5kQ2hlY2tTaWduYXR1cmUocy5DRU5UUkFMX0ZJTEVfSEVBREVSKTspKHQ9bmV3IGEoe3ppcDY0OnRoaXMuemlwNjR9LHRoaXMubG9hZE9wdGlvbnMpKS5yZWFkQ2VudHJhbFBhcnQodGhpcy5yZWFkZXIpLHRoaXMuZmlsZXMucHVzaCh0KTtpZih0aGlzLmNlbnRyYWxEaXJSZWNvcmRzIT09dGhpcy5maWxlcy5sZW5ndGgmJjAhPT10aGlzLmNlbnRyYWxEaXJSZWNvcmRzJiYwPT09dGhpcy5maWxlcy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCBvciBidWc6IGV4cGVjdGVkIFwiK3RoaXMuY2VudHJhbERpclJlY29yZHMrXCIgcmVjb3JkcyBpbiBjZW50cmFsIGRpciwgZ290IFwiK3RoaXMuZmlsZXMubGVuZ3RoKX0scmVhZEVuZE9mQ2VudHJhbDpmdW5jdGlvbigpe3ZhciB0PXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKTtpZih0PDApdGhyb3chdGhpcy5pc1NpZ25hdHVyZSgwLHMuTE9DQUxfRklMRV9IRUFERVIpP25ldyBFcnJvcihcIkNhbid0IGZpbmQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5IDogaXMgdGhpcyBhIHppcCBmaWxlID8gSWYgaXQgaXMsIHNlZSBodHRwczovL3N0dWsuZ2l0aHViLmlvL2pzemlwL2RvY3VtZW50YXRpb24vaG93dG8vcmVhZF96aXAuaHRtbFwiKTpuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwOiBjYW4ndCBmaW5kIGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeVwiKTt0aGlzLnJlYWRlci5zZXRJbmRleCh0KTt2YXIgZT10O2lmKHRoaXMuY2hlY2tTaWduYXR1cmUocy5DRU5UUkFMX0RJUkVDVE9SWV9FTkQpLHRoaXMucmVhZEJsb2NrRW5kT2ZDZW50cmFsKCksdGhpcy5kaXNrTnVtYmVyPT09bi5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmRpc2tXaXRoQ2VudHJhbERpclN0YXJ0PT09bi5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz09PW4uTUFYX1ZBTFVFXzE2QklUU3x8dGhpcy5jZW50cmFsRGlyUmVjb3Jkcz09PW4uTUFYX1ZBTFVFXzE2QklUU3x8dGhpcy5jZW50cmFsRGlyU2l6ZT09PW4uTUFYX1ZBTFVFXzMyQklUU3x8dGhpcy5jZW50cmFsRGlyT2Zmc2V0PT09bi5NQVhfVkFMVUVfMzJCSVRTKXtpZih0aGlzLnppcDY0PSEwLCh0PXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUikpPDApdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcDogY2FuJ3QgZmluZCB0aGUgWklQNjQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5IGxvY2F0b3JcIik7aWYodGhpcy5yZWFkZXIuc2V0SW5kZXgodCksdGhpcy5jaGVja1NpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0xPQ0FUT1IpLHRoaXMucmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWxMb2NhdG9yKCksIXRoaXMuaXNTaWduYXR1cmUodGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyLHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKSYmKHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpcj10aGlzLnJlYWRlci5sYXN0SW5kZXhPZlNpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0VORCksdGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyPDApKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IGNhbid0IGZpbmQgdGhlIFpJUDY0IGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeVwiKTt0aGlzLnJlYWRlci5zZXRJbmRleCh0aGlzLnJlbGF0aXZlT2Zmc2V0RW5kT2ZaaXA2NENlbnRyYWxEaXIpLHRoaXMuY2hlY2tTaWduYXR1cmUocy5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQpLHRoaXMucmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWwoKX12YXIgcj10aGlzLmNlbnRyYWxEaXJPZmZzZXQrdGhpcy5jZW50cmFsRGlyU2l6ZTt0aGlzLnppcDY0JiYocis9MjAscis9MTIrdGhpcy56aXA2NEVuZE9mQ2VudHJhbFNpemUpO3ZhciBpPWUtcjtpZigwPGkpdGhpcy5pc1NpZ25hdHVyZShlLHMuQ0VOVFJBTF9GSUxFX0hFQURFUil8fCh0aGlzLnJlYWRlci56ZXJvPWkpO2Vsc2UgaWYoaTwwKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IG1pc3NpbmcgXCIrTWF0aC5hYnMoaSkrXCIgYnl0ZXMuXCIpfSxwcmVwYXJlUmVhZGVyOmZ1bmN0aW9uKHQpe3RoaXMucmVhZGVyPWkodCl9LGxvYWQ6ZnVuY3Rpb24odCl7dGhpcy5wcmVwYXJlUmVhZGVyKHQpLHRoaXMucmVhZEVuZE9mQ2VudHJhbCgpLHRoaXMucmVhZENlbnRyYWxEaXIoKSx0aGlzLnJlYWRMb2NhbEZpbGVzKCl9fSxlLmV4cG9ydHM9aH0se1wiLi9yZWFkZXIvcmVhZGVyRm9yXCI6MjIsXCIuL3NpZ25hdHVyZVwiOjIzLFwiLi9zdXBwb3J0XCI6MzAsXCIuL3V0ZjhcIjozMSxcIi4vdXRpbHNcIjozMixcIi4vemlwRW50cnlcIjozNH1dLDM0OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vcmVhZGVyL3JlYWRlckZvclwiKSxzPXQoXCIuL3V0aWxzXCIpLG49dChcIi4vY29tcHJlc3NlZE9iamVjdFwiKSxhPXQoXCIuL2NyYzMyXCIpLG89dChcIi4vdXRmOFwiKSxoPXQoXCIuL2NvbXByZXNzaW9uc1wiKSx1PXQoXCIuL3N1cHBvcnRcIik7ZnVuY3Rpb24gbCh0LGUpe3RoaXMub3B0aW9ucz10LHRoaXMubG9hZE9wdGlvbnM9ZX1sLnByb3RvdHlwZT17aXNFbmNyeXB0ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gMT09KDEmdGhpcy5iaXRGbGFnKX0sdXNlVVRGODpmdW5jdGlvbigpe3JldHVybiAyMDQ4PT0oMjA0OCZ0aGlzLmJpdEZsYWcpfSxyZWFkTG9jYWxQYXJ0OmZ1bmN0aW9uKHQpe3ZhciBlLHI7aWYodC5za2lwKDIyKSx0aGlzLmZpbGVOYW1lTGVuZ3RoPXQucmVhZEludCgyKSxyPXQucmVhZEludCgyKSx0aGlzLmZpbGVOYW1lPXQucmVhZERhdGEodGhpcy5maWxlTmFtZUxlbmd0aCksdC5za2lwKHIpLC0xPT09dGhpcy5jb21wcmVzc2VkU2l6ZXx8LTE9PT10aGlzLnVuY29tcHJlc3NlZFNpemUpdGhyb3cgbmV3IEVycm9yKFwiQnVnIG9yIGNvcnJ1cHRlZCB6aXAgOiBkaWRuJ3QgZ2V0IGVub3VnaCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjZW50cmFsIGRpcmVjdG9yeSAoY29tcHJlc3NlZFNpemUgPT09IC0xIHx8IHVuY29tcHJlc3NlZFNpemUgPT09IC0xKVwiKTtpZihudWxsPT09KGU9ZnVuY3Rpb24odCl7Zm9yKHZhciBlIGluIGgpaWYoaC5oYXNPd25Qcm9wZXJ0eShlKSYmaFtlXS5tYWdpYz09PXQpcmV0dXJuIGhbZV07cmV0dXJuIG51bGx9KHRoaXMuY29tcHJlc3Npb25NZXRob2QpKSl0aHJvdyBuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwIDogY29tcHJlc3Npb24gXCIrcy5wcmV0dHkodGhpcy5jb21wcmVzc2lvbk1ldGhvZCkrXCIgdW5rbm93biAoaW5uZXIgZmlsZSA6IFwiK3MudHJhbnNmb3JtVG8oXCJzdHJpbmdcIix0aGlzLmZpbGVOYW1lKStcIilcIik7dGhpcy5kZWNvbXByZXNzZWQ9bmV3IG4odGhpcy5jb21wcmVzc2VkU2l6ZSx0aGlzLnVuY29tcHJlc3NlZFNpemUsdGhpcy5jcmMzMixlLHQucmVhZERhdGEodGhpcy5jb21wcmVzc2VkU2l6ZSkpfSxyZWFkQ2VudHJhbFBhcnQ6ZnVuY3Rpb24odCl7dGhpcy52ZXJzaW9uTWFkZUJ5PXQucmVhZEludCgyKSx0LnNraXAoMiksdGhpcy5iaXRGbGFnPXQucmVhZEludCgyKSx0aGlzLmNvbXByZXNzaW9uTWV0aG9kPXQucmVhZFN0cmluZygyKSx0aGlzLmRhdGU9dC5yZWFkRGF0ZSgpLHRoaXMuY3JjMzI9dC5yZWFkSW50KDQpLHRoaXMuY29tcHJlc3NlZFNpemU9dC5yZWFkSW50KDQpLHRoaXMudW5jb21wcmVzc2VkU2l6ZT10LnJlYWRJbnQoNCk7dmFyIGU9dC5yZWFkSW50KDIpO2lmKHRoaXMuZXh0cmFGaWVsZHNMZW5ndGg9dC5yZWFkSW50KDIpLHRoaXMuZmlsZUNvbW1lbnRMZW5ndGg9dC5yZWFkSW50KDIpLHRoaXMuZGlza051bWJlclN0YXJ0PXQucmVhZEludCgyKSx0aGlzLmludGVybmFsRmlsZUF0dHJpYnV0ZXM9dC5yZWFkSW50KDIpLHRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcz10LnJlYWRJbnQoNCksdGhpcy5sb2NhbEhlYWRlck9mZnNldD10LnJlYWRJbnQoNCksdGhpcy5pc0VuY3J5cHRlZCgpKXRocm93IG5ldyBFcnJvcihcIkVuY3J5cHRlZCB6aXAgYXJlIG5vdCBzdXBwb3J0ZWRcIik7dC5za2lwKGUpLHRoaXMucmVhZEV4dHJhRmllbGRzKHQpLHRoaXMucGFyc2VaSVA2NEV4dHJhRmllbGQodCksdGhpcy5maWxlQ29tbWVudD10LnJlYWREYXRhKHRoaXMuZmlsZUNvbW1lbnRMZW5ndGgpfSxwcm9jZXNzQXR0cmlidXRlczpmdW5jdGlvbigpe3RoaXMudW5peFBlcm1pc3Npb25zPW51bGwsdGhpcy5kb3NQZXJtaXNzaW9ucz1udWxsO3ZhciB0PXRoaXMudmVyc2lvbk1hZGVCeT4+ODt0aGlzLmRpcj0hISgxNiZ0aGlzLmV4dGVybmFsRmlsZUF0dHJpYnV0ZXMpLDA9PXQmJih0aGlzLmRvc1Blcm1pc3Npb25zPTYzJnRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcyksMz09dCYmKHRoaXMudW5peFBlcm1pc3Npb25zPXRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcz4+MTYmNjU1MzUpLHRoaXMuZGlyfHxcIi9cIiE9PXRoaXMuZmlsZU5hbWVTdHIuc2xpY2UoLTEpfHwodGhpcy5kaXI9ITApfSxwYXJzZVpJUDY0RXh0cmFGaWVsZDpmdW5jdGlvbih0KXtpZih0aGlzLmV4dHJhRmllbGRzWzFdKXt2YXIgZT1pKHRoaXMuZXh0cmFGaWVsZHNbMV0udmFsdWUpO3RoaXMudW5jb21wcmVzc2VkU2l6ZT09PXMuTUFYX1ZBTFVFXzMyQklUUyYmKHRoaXMudW5jb21wcmVzc2VkU2l6ZT1lLnJlYWRJbnQoOCkpLHRoaXMuY29tcHJlc3NlZFNpemU9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLmNvbXByZXNzZWRTaXplPWUucmVhZEludCg4KSksdGhpcy5sb2NhbEhlYWRlck9mZnNldD09PXMuTUFYX1ZBTFVFXzMyQklUUyYmKHRoaXMubG9jYWxIZWFkZXJPZmZzZXQ9ZS5yZWFkSW50KDgpKSx0aGlzLmRpc2tOdW1iZXJTdGFydD09PXMuTUFYX1ZBTFVFXzMyQklUUyYmKHRoaXMuZGlza051bWJlclN0YXJ0PWUucmVhZEludCg0KSl9fSxyZWFkRXh0cmFGaWVsZHM6ZnVuY3Rpb24odCl7dmFyIGUscixpLG49dC5pbmRleCt0aGlzLmV4dHJhRmllbGRzTGVuZ3RoO2Zvcih0aGlzLmV4dHJhRmllbGRzfHwodGhpcy5leHRyYUZpZWxkcz17fSk7dC5pbmRleCs0PG47KWU9dC5yZWFkSW50KDIpLHI9dC5yZWFkSW50KDIpLGk9dC5yZWFkRGF0YShyKSx0aGlzLmV4dHJhRmllbGRzW2VdPXtpZDplLGxlbmd0aDpyLHZhbHVlOml9O3Quc2V0SW5kZXgobil9LGhhbmRsZVVURjg6ZnVuY3Rpb24oKXt2YXIgdD11LnVpbnQ4YXJyYXk/XCJ1aW50OGFycmF5XCI6XCJhcnJheVwiO2lmKHRoaXMudXNlVVRGOCgpKXRoaXMuZmlsZU5hbWVTdHI9by51dGY4ZGVjb2RlKHRoaXMuZmlsZU5hbWUpLHRoaXMuZmlsZUNvbW1lbnRTdHI9by51dGY4ZGVjb2RlKHRoaXMuZmlsZUNvbW1lbnQpO2Vsc2V7dmFyIGU9dGhpcy5maW5kRXh0cmFGaWVsZFVuaWNvZGVQYXRoKCk7aWYobnVsbCE9PWUpdGhpcy5maWxlTmFtZVN0cj1lO2Vsc2V7dmFyIHI9cy50cmFuc2Zvcm1Ubyh0LHRoaXMuZmlsZU5hbWUpO3RoaXMuZmlsZU5hbWVTdHI9dGhpcy5sb2FkT3B0aW9ucy5kZWNvZGVGaWxlTmFtZShyKX12YXIgaT10aGlzLmZpbmRFeHRyYUZpZWxkVW5pY29kZUNvbW1lbnQoKTtpZihudWxsIT09aSl0aGlzLmZpbGVDb21tZW50U3RyPWk7ZWxzZXt2YXIgbj1zLnRyYW5zZm9ybVRvKHQsdGhpcy5maWxlQ29tbWVudCk7dGhpcy5maWxlQ29tbWVudFN0cj10aGlzLmxvYWRPcHRpb25zLmRlY29kZUZpbGVOYW1lKG4pfX19LGZpbmRFeHRyYUZpZWxkVW5pY29kZVBhdGg6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmV4dHJhRmllbGRzWzI4Nzg5XTtpZih0KXt2YXIgZT1pKHQudmFsdWUpO3JldHVybiAxIT09ZS5yZWFkSW50KDEpP251bGw6YSh0aGlzLmZpbGVOYW1lKSE9PWUucmVhZEludCg0KT9udWxsOm8udXRmOGRlY29kZShlLnJlYWREYXRhKHQubGVuZ3RoLTUpKX1yZXR1cm4gbnVsbH0sZmluZEV4dHJhRmllbGRVbmljb2RlQ29tbWVudDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuZXh0cmFGaWVsZHNbMjU0NjFdO2lmKHQpe3ZhciBlPWkodC52YWx1ZSk7cmV0dXJuIDEhPT1lLnJlYWRJbnQoMSk/bnVsbDphKHRoaXMuZmlsZUNvbW1lbnQpIT09ZS5yZWFkSW50KDQpP251bGw6by51dGY4ZGVjb2RlKGUucmVhZERhdGEodC5sZW5ndGgtNSkpfXJldHVybiBudWxsfX0sZS5leHBvcnRzPWx9LHtcIi4vY29tcHJlc3NlZE9iamVjdFwiOjIsXCIuL2NvbXByZXNzaW9uc1wiOjMsXCIuL2NyYzMyXCI6NCxcIi4vcmVhZGVyL3JlYWRlckZvclwiOjIyLFwiLi9zdXBwb3J0XCI6MzAsXCIuL3V0ZjhcIjozMSxcIi4vdXRpbHNcIjozMn1dLDM1OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaSh0LGUscil7dGhpcy5uYW1lPXQsdGhpcy5kaXI9ci5kaXIsdGhpcy5kYXRlPXIuZGF0ZSx0aGlzLmNvbW1lbnQ9ci5jb21tZW50LHRoaXMudW5peFBlcm1pc3Npb25zPXIudW5peFBlcm1pc3Npb25zLHRoaXMuZG9zUGVybWlzc2lvbnM9ci5kb3NQZXJtaXNzaW9ucyx0aGlzLl9kYXRhPWUsdGhpcy5fZGF0YUJpbmFyeT1yLmJpbmFyeSx0aGlzLm9wdGlvbnM9e2NvbXByZXNzaW9uOnIuY29tcHJlc3Npb24sY29tcHJlc3Npb25PcHRpb25zOnIuY29tcHJlc3Npb25PcHRpb25zfX12YXIgcz10KFwiLi9zdHJlYW0vU3RyZWFtSGVscGVyXCIpLG49dChcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIiksYT10KFwiLi91dGY4XCIpLG89dChcIi4vY29tcHJlc3NlZE9iamVjdFwiKSxoPXQoXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpO2kucHJvdG90eXBlPXtpbnRlcm5hbFN0cmVhbTpmdW5jdGlvbih0KXt2YXIgZT1udWxsLHI9XCJzdHJpbmdcIjt0cnl7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiTm8gb3V0cHV0IHR5cGUgc3BlY2lmaWVkLlwiKTt2YXIgaT1cInN0cmluZ1wiPT09KHI9dC50b0xvd2VyQ2FzZSgpKXx8XCJ0ZXh0XCI9PT1yO1wiYmluYXJ5c3RyaW5nXCIhPT1yJiZcInRleHRcIiE9PXJ8fChyPVwic3RyaW5nXCIpLGU9dGhpcy5fZGVjb21wcmVzc1dvcmtlcigpO3ZhciBuPSF0aGlzLl9kYXRhQmluYXJ5O24mJiFpJiYoZT1lLnBpcGUobmV3IGEuVXRmOEVuY29kZVdvcmtlcikpLCFuJiZpJiYoZT1lLnBpcGUobmV3IGEuVXRmOERlY29kZVdvcmtlcikpfWNhdGNoKHQpeyhlPW5ldyBoKFwiZXJyb3JcIikpLmVycm9yKHQpfXJldHVybiBuZXcgcyhlLHIsXCJcIil9LGFzeW5jOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuaW50ZXJuYWxTdHJlYW0odCkuYWNjdW11bGF0ZShlKX0sbm9kZVN0cmVhbTpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmludGVybmFsU3RyZWFtKHR8fFwibm9kZWJ1ZmZlclwiKS50b05vZGVqc1N0cmVhbShlKX0sX2NvbXByZXNzV29ya2VyOmZ1bmN0aW9uKHQsZSl7aWYodGhpcy5fZGF0YSBpbnN0YW5jZW9mIG8mJnRoaXMuX2RhdGEuY29tcHJlc3Npb24ubWFnaWM9PT10Lm1hZ2ljKXJldHVybiB0aGlzLl9kYXRhLmdldENvbXByZXNzZWRXb3JrZXIoKTt2YXIgcj10aGlzLl9kZWNvbXByZXNzV29ya2VyKCk7cmV0dXJuIHRoaXMuX2RhdGFCaW5hcnl8fChyPXIucGlwZShuZXcgYS5VdGY4RW5jb2RlV29ya2VyKSksby5jcmVhdGVXb3JrZXJGcm9tKHIsdCxlKX0sX2RlY29tcHJlc3NXb3JrZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGF0YSBpbnN0YW5jZW9mIG8/dGhpcy5fZGF0YS5nZXRDb250ZW50V29ya2VyKCk6dGhpcy5fZGF0YSBpbnN0YW5jZW9mIGg/dGhpcy5fZGF0YTpuZXcgbih0aGlzLl9kYXRhKX19O2Zvcih2YXIgdT1bXCJhc1RleHRcIixcImFzQmluYXJ5XCIsXCJhc05vZGVCdWZmZXJcIixcImFzVWludDhBcnJheVwiLFwiYXNBcnJheUJ1ZmZlclwiXSxsPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiVGhpcyBtZXRob2QgaGFzIGJlZW4gcmVtb3ZlZCBpbiBKU1ppcCAzLjAsIHBsZWFzZSBjaGVjayB0aGUgdXBncmFkZSBndWlkZS5cIil9LGY9MDtmPHUubGVuZ3RoO2YrKylpLnByb3RvdHlwZVt1W2ZdXT1sO2UuZXhwb3J0cz1pfSx7XCIuL2NvbXByZXNzZWRPYmplY3RcIjoyLFwiLi9zdHJlYW0vRGF0YVdvcmtlclwiOjI3LFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi9zdHJlYW0vU3RyZWFtSGVscGVyXCI6MjksXCIuL3V0ZjhcIjozMX1dLDM2OltmdW5jdGlvbih0LGwsZSl7KGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO3ZhciByLGksdD1lLk11dGF0aW9uT2JzZXJ2ZXJ8fGUuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtpZih0KXt2YXIgbj0wLHM9bmV3IHQodSksYT1lLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO3Mub2JzZXJ2ZShhLHtjaGFyYWN0ZXJEYXRhOiEwfSkscj1mdW5jdGlvbigpe2EuZGF0YT1uPSsrbiUyfX1lbHNlIGlmKGUuc2V0SW1tZWRpYXRlfHx2b2lkIDA9PT1lLk1lc3NhZ2VDaGFubmVsKXI9XCJkb2N1bWVudFwiaW4gZSYmXCJvbnJlYWR5c3RhdGVjaGFuZ2VcImluIGUuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKT9mdW5jdGlvbigpe3ZhciB0PWUuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTt0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3UoKSx0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9LGUuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHQpfTpmdW5jdGlvbigpe3NldFRpbWVvdXQodSwwKX07ZWxzZXt2YXIgbz1uZXcgZS5NZXNzYWdlQ2hhbm5lbDtvLnBvcnQxLm9ubWVzc2FnZT11LHI9ZnVuY3Rpb24oKXtvLnBvcnQyLnBvc3RNZXNzYWdlKDApfX12YXIgaD1bXTtmdW5jdGlvbiB1KCl7dmFyIHQsZTtpPSEwO2Zvcih2YXIgcj1oLmxlbmd0aDtyOyl7Zm9yKGU9aCxoPVtdLHQ9LTE7Kyt0PHI7KWVbdF0oKTtyPWgubGVuZ3RofWk9ITF9bC5leHBvcnRzPWZ1bmN0aW9uKHQpezEhPT1oLnB1c2godCl8fGl8fHIoKX19KS5jYWxsKHRoaXMsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp7fSl9LHt9XSwzNzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXQoXCJpbW1lZGlhdGVcIik7ZnVuY3Rpb24gdSgpe312YXIgbD17fSxzPVtcIlJFSkVDVEVEXCJdLGE9W1wiRlVMRklMTEVEXCJdLGk9W1wiUEVORElOR1wiXTtmdW5jdGlvbiBvKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcInJlc29sdmVyIG11c3QgYmUgYSBmdW5jdGlvblwiKTt0aGlzLnN0YXRlPWksdGhpcy5xdWV1ZT1bXSx0aGlzLm91dGNvbWU9dm9pZCAwLHQhPT11JiZjKHRoaXMsdCl9ZnVuY3Rpb24gaCh0LGUscil7dGhpcy5wcm9taXNlPXQsXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmKHRoaXMub25GdWxmaWxsZWQ9ZSx0aGlzLmNhbGxGdWxmaWxsZWQ9dGhpcy5vdGhlckNhbGxGdWxmaWxsZWQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHImJih0aGlzLm9uUmVqZWN0ZWQ9cix0aGlzLmNhbGxSZWplY3RlZD10aGlzLm90aGVyQ2FsbFJlamVjdGVkKX1mdW5jdGlvbiBmKGUscixpKXtuKGZ1bmN0aW9uKCl7dmFyIHQ7dHJ5e3Q9cihpKX1jYXRjaCh0KXtyZXR1cm4gbC5yZWplY3QoZSx0KX10PT09ZT9sLnJlamVjdChlLG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVzb2x2ZSBwcm9taXNlIHdpdGggaXRzZWxmXCIpKTpsLnJlc29sdmUoZSx0KX0pfWZ1bmN0aW9uIGQodCl7dmFyIGU9dCYmdC50aGVuO2lmKHQmJihcIm9iamVjdFwiPT10eXBlb2YgdHx8XCJmdW5jdGlvblwiPT10eXBlb2YgdCkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUpcmV0dXJuIGZ1bmN0aW9uKCl7ZS5hcHBseSh0LGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGMoZSx0KXt2YXIgcj0hMTtmdW5jdGlvbiBpKHQpe3J8fChyPSEwLGwucmVqZWN0KGUsdCkpfWZ1bmN0aW9uIG4odCl7cnx8KHI9ITAsbC5yZXNvbHZlKGUsdCkpfXZhciBzPXAoZnVuY3Rpb24oKXt0KG4saSl9KTtcImVycm9yXCI9PT1zLnN0YXR1cyYmaShzLnZhbHVlKX1mdW5jdGlvbiBwKHQsZSl7dmFyIHI9e307dHJ5e3IudmFsdWU9dChlKSxyLnN0YXR1cz1cInN1Y2Nlc3NcIn1jYXRjaCh0KXtyLnN0YXR1cz1cImVycm9yXCIsci52YWx1ZT10fXJldHVybiByfShlLmV4cG9ydHM9bykucHJvdG90eXBlLmZpbmFsbHk9ZnVuY3Rpb24oZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSlyZXR1cm4gdGhpczt2YXIgcj10aGlzLmNvbnN0cnVjdG9yO3JldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odCl7cmV0dXJuIHIucmVzb2x2ZShlKCkpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gdH0pfSxmdW5jdGlvbih0KXtyZXR1cm4gci5yZXNvbHZlKGUoKSkudGhlbihmdW5jdGlvbigpe3Rocm93IHR9KX0pfSxvLnByb3RvdHlwZS5jYXRjaD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50aGVuKG51bGwsdCl9LG8ucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZ0aGlzLnN0YXRlPT09YXx8XCJmdW5jdGlvblwiIT10eXBlb2YgZSYmdGhpcy5zdGF0ZT09PXMpcmV0dXJuIHRoaXM7dmFyIHI9bmV3IHRoaXMuY29uc3RydWN0b3IodSk7dGhpcy5zdGF0ZSE9PWk/ZihyLHRoaXMuc3RhdGU9PT1hP3Q6ZSx0aGlzLm91dGNvbWUpOnRoaXMucXVldWUucHVzaChuZXcgaChyLHQsZSkpO3JldHVybiByfSxoLnByb3RvdHlwZS5jYWxsRnVsZmlsbGVkPWZ1bmN0aW9uKHQpe2wucmVzb2x2ZSh0aGlzLnByb21pc2UsdCl9LGgucHJvdG90eXBlLm90aGVyQ2FsbEZ1bGZpbGxlZD1mdW5jdGlvbih0KXtmKHRoaXMucHJvbWlzZSx0aGlzLm9uRnVsZmlsbGVkLHQpfSxoLnByb3RvdHlwZS5jYWxsUmVqZWN0ZWQ9ZnVuY3Rpb24odCl7bC5yZWplY3QodGhpcy5wcm9taXNlLHQpfSxoLnByb3RvdHlwZS5vdGhlckNhbGxSZWplY3RlZD1mdW5jdGlvbih0KXtmKHRoaXMucHJvbWlzZSx0aGlzLm9uUmVqZWN0ZWQsdCl9LGwucmVzb2x2ZT1mdW5jdGlvbih0LGUpe3ZhciByPXAoZCxlKTtpZihcImVycm9yXCI9PT1yLnN0YXR1cylyZXR1cm4gbC5yZWplY3QodCxyLnZhbHVlKTt2YXIgaT1yLnZhbHVlO2lmKGkpYyh0LGkpO2Vsc2V7dC5zdGF0ZT1hLHQub3V0Y29tZT1lO2Zvcih2YXIgbj0tMSxzPXQucXVldWUubGVuZ3RoOysrbjxzOyl0LnF1ZXVlW25dLmNhbGxGdWxmaWxsZWQoZSl9cmV0dXJuIHR9LGwucmVqZWN0PWZ1bmN0aW9uKHQsZSl7dC5zdGF0ZT1zLHQub3V0Y29tZT1lO2Zvcih2YXIgcj0tMSxpPXQucXVldWUubGVuZ3RoOysrcjxpOyl0LnF1ZXVlW3JdLmNhbGxSZWplY3RlZChlKTtyZXR1cm4gdH0sby5yZXNvbHZlPWZ1bmN0aW9uKHQpe2lmKHQgaW5zdGFuY2VvZiB0aGlzKXJldHVybiB0O3JldHVybiBsLnJlc29sdmUobmV3IHRoaXModSksdCl9LG8ucmVqZWN0PWZ1bmN0aW9uKHQpe3ZhciBlPW5ldyB0aGlzKHUpO3JldHVybiBsLnJlamVjdChlLHQpfSxvLmFsbD1mdW5jdGlvbih0KXt2YXIgcj10aGlzO2lmKFwiW29iamVjdCBBcnJheV1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSlyZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcihcIm11c3QgYmUgYW4gYXJyYXlcIikpO3ZhciBpPXQubGVuZ3RoLG49ITE7aWYoIWkpcmV0dXJuIHRoaXMucmVzb2x2ZShbXSk7dmFyIHM9bmV3IEFycmF5KGkpLGE9MCxlPS0xLG89bmV3IHRoaXModSk7Zm9yKDsrK2U8aTspaCh0W2VdLGUpO3JldHVybiBvO2Z1bmN0aW9uIGgodCxlKXtyLnJlc29sdmUodCkudGhlbihmdW5jdGlvbih0KXtzW2VdPXQsKythIT09aXx8bnx8KG49ITAsbC5yZXNvbHZlKG8scykpfSxmdW5jdGlvbih0KXtufHwobj0hMCxsLnJlamVjdChvLHQpKX0pfX0sby5yYWNlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7aWYoXCJbb2JqZWN0IEFycmF5XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKXJldHVybiB0aGlzLnJlamVjdChuZXcgVHlwZUVycm9yKFwibXVzdCBiZSBhbiBhcnJheVwiKSk7dmFyIHI9dC5sZW5ndGgsaT0hMTtpZighcilyZXR1cm4gdGhpcy5yZXNvbHZlKFtdKTt2YXIgbj0tMSxzPW5ldyB0aGlzKHUpO2Zvcig7KytuPHI7KWE9dFtuXSxlLnJlc29sdmUoYSkudGhlbihmdW5jdGlvbih0KXtpfHwoaT0hMCxsLnJlc29sdmUocyx0KSl9LGZ1bmN0aW9uKHQpe2l8fChpPSEwLGwucmVqZWN0KHMsdCkpfSk7dmFyIGE7cmV0dXJuIHN9fSx7aW1tZWRpYXRlOjM2fV0sMzg6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT17fTsoMCx0KFwiLi9saWIvdXRpbHMvY29tbW9uXCIpLmFzc2lnbikoaSx0KFwiLi9saWIvZGVmbGF0ZVwiKSx0KFwiLi9saWIvaW5mbGF0ZVwiKSx0KFwiLi9saWIvemxpYi9jb25zdGFudHNcIikpLGUuZXhwb3J0cz1pfSx7XCIuL2xpYi9kZWZsYXRlXCI6MzksXCIuL2xpYi9pbmZsYXRlXCI6NDAsXCIuL2xpYi91dGlscy9jb21tb25cIjo0MSxcIi4vbGliL3psaWIvY29uc3RhbnRzXCI6NDR9XSwzOTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXQoXCIuL3psaWIvZGVmbGF0ZVwiKSxvPXQoXCIuL3V0aWxzL2NvbW1vblwiKSxoPXQoXCIuL3V0aWxzL3N0cmluZ3NcIiksbj10KFwiLi96bGliL21lc3NhZ2VzXCIpLHM9dChcIi4vemxpYi96c3RyZWFtXCIpLHU9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxsPTAsZj0tMSxkPTAsYz04O2Z1bmN0aW9uIHAodCl7aWYoISh0aGlzIGluc3RhbmNlb2YgcCkpcmV0dXJuIG5ldyBwKHQpO3RoaXMub3B0aW9ucz1vLmFzc2lnbih7bGV2ZWw6ZixtZXRob2Q6YyxjaHVua1NpemU6MTYzODQsd2luZG93Qml0czoxNSxtZW1MZXZlbDo4LHN0cmF0ZWd5OmQsdG86XCJcIn0sdHx8e30pO3ZhciBlPXRoaXMub3B0aW9ucztlLnJhdyYmMDxlLndpbmRvd0JpdHM/ZS53aW5kb3dCaXRzPS1lLndpbmRvd0JpdHM6ZS5nemlwJiYwPGUud2luZG93Qml0cyYmZS53aW5kb3dCaXRzPDE2JiYoZS53aW5kb3dCaXRzKz0xNiksdGhpcy5lcnI9MCx0aGlzLm1zZz1cIlwiLHRoaXMuZW5kZWQ9ITEsdGhpcy5jaHVua3M9W10sdGhpcy5zdHJtPW5ldyBzLHRoaXMuc3RybS5hdmFpbF9vdXQ9MDt2YXIgcj1hLmRlZmxhdGVJbml0Mih0aGlzLnN0cm0sZS5sZXZlbCxlLm1ldGhvZCxlLndpbmRvd0JpdHMsZS5tZW1MZXZlbCxlLnN0cmF0ZWd5KTtpZihyIT09bCl0aHJvdyBuZXcgRXJyb3IobltyXSk7aWYoZS5oZWFkZXImJmEuZGVmbGF0ZVNldEhlYWRlcih0aGlzLnN0cm0sZS5oZWFkZXIpLGUuZGljdGlvbmFyeSl7dmFyIGk7aWYoaT1cInN0cmluZ1wiPT10eXBlb2YgZS5kaWN0aW9uYXJ5P2guc3RyaW5nMmJ1ZihlLmRpY3Rpb25hcnkpOlwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PXUuY2FsbChlLmRpY3Rpb25hcnkpP25ldyBVaW50OEFycmF5KGUuZGljdGlvbmFyeSk6ZS5kaWN0aW9uYXJ5LChyPWEuZGVmbGF0ZVNldERpY3Rpb25hcnkodGhpcy5zdHJtLGkpKSE9PWwpdGhyb3cgbmV3IEVycm9yKG5bcl0pO3RoaXMuX2RpY3Rfc2V0PSEwfX1mdW5jdGlvbiBpKHQsZSl7dmFyIHI9bmV3IHAoZSk7aWYoci5wdXNoKHQsITApLHIuZXJyKXRocm93IHIubXNnfHxuW3IuZXJyXTtyZXR1cm4gci5yZXN1bHR9cC5wcm90b3R5cGUucHVzaD1mdW5jdGlvbih0LGUpe3ZhciByLGksbj10aGlzLnN0cm0scz10aGlzLm9wdGlvbnMuY2h1bmtTaXplO2lmKHRoaXMuZW5kZWQpcmV0dXJuITE7aT1lPT09fn5lP2U6ITA9PT1lPzQ6MCxcInN0cmluZ1wiPT10eXBlb2YgdD9uLmlucHV0PWguc3RyaW5nMmJ1Zih0KTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT11LmNhbGwodCk/bi5pbnB1dD1uZXcgVWludDhBcnJheSh0KTpuLmlucHV0PXQsbi5uZXh0X2luPTAsbi5hdmFpbF9pbj1uLmlucHV0Lmxlbmd0aDtkb3tpZigwPT09bi5hdmFpbF9vdXQmJihuLm91dHB1dD1uZXcgby5CdWY4KHMpLG4ubmV4dF9vdXQ9MCxuLmF2YWlsX291dD1zKSwxIT09KHI9YS5kZWZsYXRlKG4saSkpJiZyIT09bClyZXR1cm4gdGhpcy5vbkVuZChyKSwhKHRoaXMuZW5kZWQ9ITApOzAhPT1uLmF2YWlsX291dCYmKDAhPT1uLmF2YWlsX2lufHw0IT09aSYmMiE9PWkpfHwoXCJzdHJpbmdcIj09PXRoaXMub3B0aW9ucy50bz90aGlzLm9uRGF0YShoLmJ1ZjJiaW5zdHJpbmcoby5zaHJpbmtCdWYobi5vdXRwdXQsbi5uZXh0X291dCkpKTp0aGlzLm9uRGF0YShvLnNocmlua0J1ZihuLm91dHB1dCxuLm5leHRfb3V0KSkpfXdoaWxlKCgwPG4uYXZhaWxfaW58fDA9PT1uLmF2YWlsX291dCkmJjEhPT1yKTtyZXR1cm4gND09PWk/KHI9YS5kZWZsYXRlRW5kKHRoaXMuc3RybSksdGhpcy5vbkVuZChyKSx0aGlzLmVuZGVkPSEwLHI9PT1sKToyIT09aXx8KHRoaXMub25FbmQobCksIShuLmF2YWlsX291dD0wKSl9LHAucHJvdG90eXBlLm9uRGF0YT1mdW5jdGlvbih0KXt0aGlzLmNodW5rcy5wdXNoKHQpfSxwLnByb3RvdHlwZS5vbkVuZD1mdW5jdGlvbih0KXt0PT09bCYmKFwic3RyaW5nXCI9PT10aGlzLm9wdGlvbnMudG8/dGhpcy5yZXN1bHQ9dGhpcy5jaHVua3Muam9pbihcIlwiKTp0aGlzLnJlc3VsdD1vLmZsYXR0ZW5DaHVua3ModGhpcy5jaHVua3MpKSx0aGlzLmNodW5rcz1bXSx0aGlzLmVycj10LHRoaXMubXNnPXRoaXMuc3RybS5tc2d9LHIuRGVmbGF0ZT1wLHIuZGVmbGF0ZT1pLHIuZGVmbGF0ZVJhdz1mdW5jdGlvbih0LGUpe3JldHVybihlPWV8fHt9KS5yYXc9ITAsaSh0LGUpfSxyLmd6aXA9ZnVuY3Rpb24odCxlKXtyZXR1cm4oZT1lfHx7fSkuZ3ppcD0hMCxpKHQsZSl9fSx7XCIuL3V0aWxzL2NvbW1vblwiOjQxLFwiLi91dGlscy9zdHJpbmdzXCI6NDIsXCIuL3psaWIvZGVmbGF0ZVwiOjQ2LFwiLi96bGliL21lc3NhZ2VzXCI6NTEsXCIuL3psaWIvenN0cmVhbVwiOjUzfV0sNDA6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgZD10KFwiLi96bGliL2luZmxhdGVcIiksYz10KFwiLi91dGlscy9jb21tb25cIikscD10KFwiLi91dGlscy9zdHJpbmdzXCIpLG09dChcIi4vemxpYi9jb25zdGFudHNcIiksaT10KFwiLi96bGliL21lc3NhZ2VzXCIpLG49dChcIi4vemxpYi96c3RyZWFtXCIpLHM9dChcIi4vemxpYi9nemhlYWRlclwiKSxfPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7ZnVuY3Rpb24gYSh0KXtpZighKHRoaXMgaW5zdGFuY2VvZiBhKSlyZXR1cm4gbmV3IGEodCk7dGhpcy5vcHRpb25zPWMuYXNzaWduKHtjaHVua1NpemU6MTYzODQsd2luZG93Qml0czowLHRvOlwiXCJ9LHR8fHt9KTt2YXIgZT10aGlzLm9wdGlvbnM7ZS5yYXcmJjA8PWUud2luZG93Qml0cyYmZS53aW5kb3dCaXRzPDE2JiYoZS53aW5kb3dCaXRzPS1lLndpbmRvd0JpdHMsMD09PWUud2luZG93Qml0cyYmKGUud2luZG93Qml0cz0tMTUpKSwhKDA8PWUud2luZG93Qml0cyYmZS53aW5kb3dCaXRzPDE2KXx8dCYmdC53aW5kb3dCaXRzfHwoZS53aW5kb3dCaXRzKz0zMiksMTU8ZS53aW5kb3dCaXRzJiZlLndpbmRvd0JpdHM8NDgmJjA9PSgxNSZlLndpbmRvd0JpdHMpJiYoZS53aW5kb3dCaXRzfD0xNSksdGhpcy5lcnI9MCx0aGlzLm1zZz1cIlwiLHRoaXMuZW5kZWQ9ITEsdGhpcy5jaHVua3M9W10sdGhpcy5zdHJtPW5ldyBuLHRoaXMuc3RybS5hdmFpbF9vdXQ9MDt2YXIgcj1kLmluZmxhdGVJbml0Mih0aGlzLnN0cm0sZS53aW5kb3dCaXRzKTtpZihyIT09bS5aX09LKXRocm93IG5ldyBFcnJvcihpW3JdKTt0aGlzLmhlYWRlcj1uZXcgcyxkLmluZmxhdGVHZXRIZWFkZXIodGhpcy5zdHJtLHRoaXMuaGVhZGVyKX1mdW5jdGlvbiBvKHQsZSl7dmFyIHI9bmV3IGEoZSk7aWYoci5wdXNoKHQsITApLHIuZXJyKXRocm93IHIubXNnfHxpW3IuZXJyXTtyZXR1cm4gci5yZXN1bHR9YS5wcm90b3R5cGUucHVzaD1mdW5jdGlvbih0LGUpe3ZhciByLGksbixzLGEsbyxoPXRoaXMuc3RybSx1PXRoaXMub3B0aW9ucy5jaHVua1NpemUsbD10aGlzLm9wdGlvbnMuZGljdGlvbmFyeSxmPSExO2lmKHRoaXMuZW5kZWQpcmV0dXJuITE7aT1lPT09fn5lP2U6ITA9PT1lP20uWl9GSU5JU0g6bS5aX05PX0ZMVVNILFwic3RyaW5nXCI9PXR5cGVvZiB0P2guaW5wdXQ9cC5iaW5zdHJpbmcyYnVmKHQpOlwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PV8uY2FsbCh0KT9oLmlucHV0PW5ldyBVaW50OEFycmF5KHQpOmguaW5wdXQ9dCxoLm5leHRfaW49MCxoLmF2YWlsX2luPWguaW5wdXQubGVuZ3RoO2Rve2lmKDA9PT1oLmF2YWlsX291dCYmKGgub3V0cHV0PW5ldyBjLkJ1ZjgodSksaC5uZXh0X291dD0wLGguYXZhaWxfb3V0PXUpLChyPWQuaW5mbGF0ZShoLG0uWl9OT19GTFVTSCkpPT09bS5aX05FRURfRElDVCYmbCYmKG89XCJzdHJpbmdcIj09dHlwZW9mIGw/cC5zdHJpbmcyYnVmKGwpOlwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PV8uY2FsbChsKT9uZXcgVWludDhBcnJheShsKTpsLHI9ZC5pbmZsYXRlU2V0RGljdGlvbmFyeSh0aGlzLnN0cm0sbykpLHI9PT1tLlpfQlVGX0VSUk9SJiYhMD09PWYmJihyPW0uWl9PSyxmPSExKSxyIT09bS5aX1NUUkVBTV9FTkQmJnIhPT1tLlpfT0spcmV0dXJuIHRoaXMub25FbmQociksISh0aGlzLmVuZGVkPSEwKTtoLm5leHRfb3V0JiYoMCE9PWguYXZhaWxfb3V0JiZyIT09bS5aX1NUUkVBTV9FTkQmJigwIT09aC5hdmFpbF9pbnx8aSE9PW0uWl9GSU5JU0gmJmkhPT1tLlpfU1lOQ19GTFVTSCl8fChcInN0cmluZ1wiPT09dGhpcy5vcHRpb25zLnRvPyhuPXAudXRmOGJvcmRlcihoLm91dHB1dCxoLm5leHRfb3V0KSxzPWgubmV4dF9vdXQtbixhPXAuYnVmMnN0cmluZyhoLm91dHB1dCxuKSxoLm5leHRfb3V0PXMsaC5hdmFpbF9vdXQ9dS1zLHMmJmMuYXJyYXlTZXQoaC5vdXRwdXQsaC5vdXRwdXQsbixzLDApLHRoaXMub25EYXRhKGEpKTp0aGlzLm9uRGF0YShjLnNocmlua0J1ZihoLm91dHB1dCxoLm5leHRfb3V0KSkpKSwwPT09aC5hdmFpbF9pbiYmMD09PWguYXZhaWxfb3V0JiYoZj0hMCl9d2hpbGUoKDA8aC5hdmFpbF9pbnx8MD09PWguYXZhaWxfb3V0KSYmciE9PW0uWl9TVFJFQU1fRU5EKTtyZXR1cm4gcj09PW0uWl9TVFJFQU1fRU5EJiYoaT1tLlpfRklOSVNIKSxpPT09bS5aX0ZJTklTSD8ocj1kLmluZmxhdGVFbmQodGhpcy5zdHJtKSx0aGlzLm9uRW5kKHIpLHRoaXMuZW5kZWQ9ITAscj09PW0uWl9PSyk6aSE9PW0uWl9TWU5DX0ZMVVNIfHwodGhpcy5vbkVuZChtLlpfT0spLCEoaC5hdmFpbF9vdXQ9MCkpfSxhLnByb3RvdHlwZS5vbkRhdGE9ZnVuY3Rpb24odCl7dGhpcy5jaHVua3MucHVzaCh0KX0sYS5wcm90b3R5cGUub25FbmQ9ZnVuY3Rpb24odCl7dD09PW0uWl9PSyYmKFwic3RyaW5nXCI9PT10aGlzLm9wdGlvbnMudG8/dGhpcy5yZXN1bHQ9dGhpcy5jaHVua3Muam9pbihcIlwiKTp0aGlzLnJlc3VsdD1jLmZsYXR0ZW5DaHVua3ModGhpcy5jaHVua3MpKSx0aGlzLmNodW5rcz1bXSx0aGlzLmVycj10LHRoaXMubXNnPXRoaXMuc3RybS5tc2d9LHIuSW5mbGF0ZT1hLHIuaW5mbGF0ZT1vLHIuaW5mbGF0ZVJhdz1mdW5jdGlvbih0LGUpe3JldHVybihlPWV8fHt9KS5yYXc9ITAsbyh0LGUpfSxyLnVuZ3ppcD1vfSx7XCIuL3V0aWxzL2NvbW1vblwiOjQxLFwiLi91dGlscy9zdHJpbmdzXCI6NDIsXCIuL3psaWIvY29uc3RhbnRzXCI6NDQsXCIuL3psaWIvZ3poZWFkZXJcIjo0NyxcIi4vemxpYi9pbmZsYXRlXCI6NDksXCIuL3psaWIvbWVzc2FnZXNcIjo1MSxcIi4vemxpYi96c3RyZWFtXCI6NTN9XSw0MTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDE2QXJyYXkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBJbnQzMkFycmF5O3IuYXNzaWduPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7ZS5sZW5ndGg7KXt2YXIgcj1lLnNoaWZ0KCk7aWYocil7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHIpdGhyb3cgbmV3IFR5cGVFcnJvcihyK1wibXVzdCBiZSBub24tb2JqZWN0XCIpO2Zvcih2YXIgaSBpbiByKXIuaGFzT3duUHJvcGVydHkoaSkmJih0W2ldPXJbaV0pfX1yZXR1cm4gdH0sci5zaHJpbmtCdWY9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5sZW5ndGg9PT1lP3Q6dC5zdWJhcnJheT90LnN1YmFycmF5KDAsZSk6KHQubGVuZ3RoPWUsdCl9O3ZhciBuPXthcnJheVNldDpmdW5jdGlvbih0LGUscixpLG4pe2lmKGUuc3ViYXJyYXkmJnQuc3ViYXJyYXkpdC5zZXQoZS5zdWJhcnJheShyLHIraSksbik7ZWxzZSBmb3IodmFyIHM9MDtzPGk7cysrKXRbbitzXT1lW3Irc119LGZsYXR0ZW5DaHVua3M6ZnVuY3Rpb24odCl7dmFyIGUscixpLG4scyxhO2ZvcihlPWk9MCxyPXQubGVuZ3RoO2U8cjtlKyspaSs9dFtlXS5sZW5ndGg7Zm9yKGE9bmV3IFVpbnQ4QXJyYXkoaSksZT1uPTAscj10Lmxlbmd0aDtlPHI7ZSsrKXM9dFtlXSxhLnNldChzLG4pLG4rPXMubGVuZ3RoO3JldHVybiBhfX0scz17YXJyYXlTZXQ6ZnVuY3Rpb24odCxlLHIsaSxuKXtmb3IodmFyIHM9MDtzPGk7cysrKXRbbitzXT1lW3Irc119LGZsYXR0ZW5DaHVua3M6ZnVuY3Rpb24odCl7cmV0dXJuW10uY29uY2F0LmFwcGx5KFtdLHQpfX07ci5zZXRUeXBlZD1mdW5jdGlvbih0KXt0PyhyLkJ1Zjg9VWludDhBcnJheSxyLkJ1ZjE2PVVpbnQxNkFycmF5LHIuQnVmMzI9SW50MzJBcnJheSxyLmFzc2lnbihyLG4pKTooci5CdWY4PUFycmF5LHIuQnVmMTY9QXJyYXksci5CdWYzMj1BcnJheSxyLmFzc2lnbihyLHMpKX0sci5zZXRUeXBlZChpKX0se31dLDQyOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGg9dChcIi4vY29tbW9uXCIpLG49ITAscz0hMDt0cnl7U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLFswXSl9Y2F0Y2godCl7bj0hMX10cnl7U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLG5ldyBVaW50OEFycmF5KDEpKX1jYXRjaCh0KXtzPSExfWZvcih2YXIgdT1uZXcgaC5CdWY4KDI1NiksaT0wO2k8MjU2O2krKyl1W2ldPTI1Mjw9aT82OjI0ODw9aT81OjI0MDw9aT80OjIyNDw9aT8zOjE5Mjw9aT8yOjE7ZnVuY3Rpb24gbCh0LGUpe2lmKGU8NjU1MzcmJih0LnN1YmFycmF5JiZzfHwhdC5zdWJhcnJheSYmbikpcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxoLnNocmlua0J1Zih0LGUpKTtmb3IodmFyIHI9XCJcIixpPTA7aTxlO2krKylyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHRbaV0pO3JldHVybiByfXVbMjU0XT11WzI1NF09MSxyLnN0cmluZzJidWY9ZnVuY3Rpb24odCl7dmFyIGUscixpLG4scyxhPXQubGVuZ3RoLG89MDtmb3Iobj0wO248YTtuKyspNTUyOTY9PSg2NDUxMiYocj10LmNoYXJDb2RlQXQobikpKSYmbisxPGEmJjU2MzIwPT0oNjQ1MTImKGk9dC5jaGFyQ29kZUF0KG4rMSkpKSYmKHI9NjU1MzYrKHItNTUyOTY8PDEwKSsoaS01NjMyMCksbisrKSxvKz1yPDEyOD8xOnI8MjA0OD8yOnI8NjU1MzY/Mzo0O2ZvcihlPW5ldyBoLkJ1Zjgobyksbj1zPTA7czxvO24rKyk1NTI5Nj09KDY0NTEyJihyPXQuY2hhckNvZGVBdChuKSkpJiZuKzE8YSYmNTYzMjA9PSg2NDUxMiYoaT10LmNoYXJDb2RlQXQobisxKSkpJiYocj02NTUzNisoci01NTI5Njw8MTApKyhpLTU2MzIwKSxuKyspLHI8MTI4P2VbcysrXT1yOihyPDIwNDg/ZVtzKytdPTE5MnxyPj4+Njoocjw2NTUzNj9lW3MrK109MjI0fHI+Pj4xMjooZVtzKytdPTI0MHxyPj4+MTgsZVtzKytdPTEyOHxyPj4+MTImNjMpLGVbcysrXT0xMjh8cj4+PjYmNjMpLGVbcysrXT0xMjh8NjMmcik7cmV0dXJuIGV9LHIuYnVmMmJpbnN0cmluZz1mdW5jdGlvbih0KXtyZXR1cm4gbCh0LHQubGVuZ3RoKX0sci5iaW5zdHJpbmcyYnVmPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1uZXcgaC5CdWY4KHQubGVuZ3RoKSxyPTAsaT1lLmxlbmd0aDtyPGk7cisrKWVbcl09dC5jaGFyQ29kZUF0KHIpO3JldHVybiBlfSxyLmJ1ZjJzdHJpbmc9ZnVuY3Rpb24odCxlKXt2YXIgcixpLG4scyxhPWV8fHQubGVuZ3RoLG89bmV3IEFycmF5KDIqYSk7Zm9yKHI9aT0wO3I8YTspaWYoKG49dFtyKytdKTwxMjgpb1tpKytdPW47ZWxzZSBpZig0PChzPXVbbl0pKW9baSsrXT02NTUzMyxyKz1zLTE7ZWxzZXtmb3IobiY9Mj09PXM/MzE6Mz09PXM/MTU6NzsxPHMmJnI8YTspbj1uPDw2fDYzJnRbcisrXSxzLS07MTxzP29baSsrXT02NTUzMzpuPDY1NTM2P29baSsrXT1uOihuLT02NTUzNixvW2krK109NTUyOTZ8bj4+MTAmMTAyMyxvW2krK109NTYzMjB8MTAyMyZuKX1yZXR1cm4gbChvLGkpfSxyLnV0Zjhib3JkZXI9ZnVuY3Rpb24odCxlKXt2YXIgcjtmb3IoKGU9ZXx8dC5sZW5ndGgpPnQubGVuZ3RoJiYoZT10Lmxlbmd0aCkscj1lLTE7MDw9ciYmMTI4PT0oMTkyJnRbcl0pOylyLS07cmV0dXJuIHI8MD9lOjA9PT1yP2U6cit1W3Rbcl1dPmU/cjplfX0se1wiLi9jb21tb25cIjo0MX1dLDQzOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSxyLGkpe2Zvcih2YXIgbj02NTUzNSZ0fDAscz10Pj4+MTYmNjU1MzV8MCxhPTA7MCE9PXI7KXtmb3Ioci09YT0yZTM8cj8yZTM6cjtzPXMrKG49bitlW2krK118MCl8MCwtLWE7KTtuJT02NTUyMSxzJT02NTUyMX1yZXR1cm4gbnxzPDwxNnwwfX0se31dLDQ0OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPXtaX05PX0ZMVVNIOjAsWl9QQVJUSUFMX0ZMVVNIOjEsWl9TWU5DX0ZMVVNIOjIsWl9GVUxMX0ZMVVNIOjMsWl9GSU5JU0g6NCxaX0JMT0NLOjUsWl9UUkVFUzo2LFpfT0s6MCxaX1NUUkVBTV9FTkQ6MSxaX05FRURfRElDVDoyLFpfRVJSTk86LTEsWl9TVFJFQU1fRVJST1I6LTIsWl9EQVRBX0VSUk9SOi0zLFpfQlVGX0VSUk9SOi01LFpfTk9fQ09NUFJFU1NJT046MCxaX0JFU1RfU1BFRUQ6MSxaX0JFU1RfQ09NUFJFU1NJT046OSxaX0RFRkFVTFRfQ09NUFJFU1NJT046LTEsWl9GSUxURVJFRDoxLFpfSFVGRk1BTl9PTkxZOjIsWl9STEU6MyxaX0ZJWEVEOjQsWl9ERUZBVUxUX1NUUkFURUdZOjAsWl9CSU5BUlk6MCxaX1RFWFQ6MSxaX1VOS05PV046MixaX0RFRkxBVEVEOjh9fSx7fV0sNDU6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1mdW5jdGlvbigpe2Zvcih2YXIgdCxlPVtdLHI9MDtyPDI1NjtyKyspe3Q9cjtmb3IodmFyIGk9MDtpPDg7aSsrKXQ9MSZ0PzM5ODgyOTIzODRedD4+PjE6dD4+PjE7ZVtyXT10fXJldHVybiBlfSgpO2UuZXhwb3J0cz1mdW5jdGlvbih0LGUscixpKXt2YXIgbj1vLHM9aStyO3RePS0xO2Zvcih2YXIgYT1pO2E8czthKyspdD10Pj4+OF5uWzI1NSYodF5lW2FdKV07cmV0dXJuLTFedH19LHt9XSw0NjpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBoLGQ9dChcIi4uL3V0aWxzL2NvbW1vblwiKSx1PXQoXCIuL3RyZWVzXCIpLGM9dChcIi4vYWRsZXIzMlwiKSxwPXQoXCIuL2NyYzMyXCIpLGk9dChcIi4vbWVzc2FnZXNcIiksbD0wLGY9NCxtPTAsXz0tMixnPS0xLGI9NCxuPTIsdj04LHk9OSxzPTI4NixhPTMwLG89MTksdz0yKnMrMSxrPTE1LHg9MyxTPTI1OCx6PVMreCsxLEM9NDIsRT0xMTMsQT0xLEk9MixPPTMsQj00O2Z1bmN0aW9uIFIodCxlKXtyZXR1cm4gdC5tc2c9aVtlXSxlfWZ1bmN0aW9uIFQodCl7cmV0dXJuKHQ8PDEpLSg0PHQ/OTowKX1mdW5jdGlvbiBEKHQpe2Zvcih2YXIgZT10Lmxlbmd0aDswPD0tLWU7KXRbZV09MH1mdW5jdGlvbiBGKHQpe3ZhciBlPXQuc3RhdGUscj1lLnBlbmRpbmc7cj50LmF2YWlsX291dCYmKHI9dC5hdmFpbF9vdXQpLDAhPT1yJiYoZC5hcnJheVNldCh0Lm91dHB1dCxlLnBlbmRpbmdfYnVmLGUucGVuZGluZ19vdXQscix0Lm5leHRfb3V0KSx0Lm5leHRfb3V0Kz1yLGUucGVuZGluZ19vdXQrPXIsdC50b3RhbF9vdXQrPXIsdC5hdmFpbF9vdXQtPXIsZS5wZW5kaW5nLT1yLDA9PT1lLnBlbmRpbmcmJihlLnBlbmRpbmdfb3V0PTApKX1mdW5jdGlvbiBOKHQsZSl7dS5fdHJfZmx1c2hfYmxvY2sodCwwPD10LmJsb2NrX3N0YXJ0P3QuYmxvY2tfc3RhcnQ6LTEsdC5zdHJzdGFydC10LmJsb2NrX3N0YXJ0LGUpLHQuYmxvY2tfc3RhcnQ9dC5zdHJzdGFydCxGKHQuc3RybSl9ZnVuY3Rpb24gVSh0LGUpe3QucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPWV9ZnVuY3Rpb24gUCh0LGUpe3QucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPWU+Pj44JjI1NSx0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT0yNTUmZX1mdW5jdGlvbiBMKHQsZSl7dmFyIHIsaSxuPXQubWF4X2NoYWluX2xlbmd0aCxzPXQuc3Ryc3RhcnQsYT10LnByZXZfbGVuZ3RoLG89dC5uaWNlX21hdGNoLGg9dC5zdHJzdGFydD50Lndfc2l6ZS16P3Quc3Ryc3RhcnQtKHQud19zaXplLXopOjAsdT10LndpbmRvdyxsPXQud19tYXNrLGY9dC5wcmV2LGQ9dC5zdHJzdGFydCtTLGM9dVtzK2EtMV0scD11W3MrYV07dC5wcmV2X2xlbmd0aD49dC5nb29kX21hdGNoJiYobj4+PTIpLG8+dC5sb29rYWhlYWQmJihvPXQubG9va2FoZWFkKTtkb3tpZih1WyhyPWUpK2FdPT09cCYmdVtyK2EtMV09PT1jJiZ1W3JdPT09dVtzXSYmdVsrK3JdPT09dVtzKzFdKXtzKz0yLHIrKztkb3t9d2hpbGUodVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnM8ZCk7aWYoaT1TLShkLXMpLHM9ZC1TLGE8aSl7aWYodC5tYXRjaF9zdGFydD1lLG88PShhPWkpKWJyZWFrO2M9dVtzK2EtMV0scD11W3MrYV19fX13aGlsZSgoZT1mW2UmbF0pPmgmJjAhPS0tbik7cmV0dXJuIGE8PXQubG9va2FoZWFkP2E6dC5sb29rYWhlYWR9ZnVuY3Rpb24gaih0KXt2YXIgZSxyLGksbixzLGEsbyxoLHUsbCxmPXQud19zaXplO2Rve2lmKG49dC53aW5kb3dfc2l6ZS10Lmxvb2thaGVhZC10LnN0cnN0YXJ0LHQuc3Ryc3RhcnQ+PWYrKGYteikpe2ZvcihkLmFycmF5U2V0KHQud2luZG93LHQud2luZG93LGYsZiwwKSx0Lm1hdGNoX3N0YXJ0LT1mLHQuc3Ryc3RhcnQtPWYsdC5ibG9ja19zdGFydC09ZixlPXI9dC5oYXNoX3NpemU7aT10LmhlYWRbLS1lXSx0LmhlYWRbZV09Zjw9aT9pLWY6MCwtLXI7KTtmb3IoZT1yPWY7aT10LnByZXZbLS1lXSx0LnByZXZbZV09Zjw9aT9pLWY6MCwtLXI7KTtuKz1mfWlmKDA9PT10LnN0cm0uYXZhaWxfaW4pYnJlYWs7aWYoYT10LnN0cm0sbz10LndpbmRvdyxoPXQuc3Ryc3RhcnQrdC5sb29rYWhlYWQsdT1uLGw9dm9pZCAwLGw9YS5hdmFpbF9pbix1PGwmJihsPXUpLHI9MD09PWw/MDooYS5hdmFpbF9pbi09bCxkLmFycmF5U2V0KG8sYS5pbnB1dCxhLm5leHRfaW4sbCxoKSwxPT09YS5zdGF0ZS53cmFwP2EuYWRsZXI9YyhhLmFkbGVyLG8sbCxoKToyPT09YS5zdGF0ZS53cmFwJiYoYS5hZGxlcj1wKGEuYWRsZXIsbyxsLGgpKSxhLm5leHRfaW4rPWwsYS50b3RhbF9pbis9bCxsKSx0Lmxvb2thaGVhZCs9cix0Lmxvb2thaGVhZCt0Lmluc2VydD49eClmb3Iocz10LnN0cnN0YXJ0LXQuaW5zZXJ0LHQuaW5zX2g9dC53aW5kb3dbc10sdC5pbnNfaD0odC5pbnNfaDw8dC5oYXNoX3NoaWZ0XnQud2luZG93W3MrMV0pJnQuaGFzaF9tYXNrO3QuaW5zZXJ0JiYodC5pbnNfaD0odC5pbnNfaDw8dC5oYXNoX3NoaWZ0XnQud2luZG93W3MreC0xXSkmdC5oYXNoX21hc2ssdC5wcmV2W3MmdC53X21hc2tdPXQuaGVhZFt0Lmluc19oXSx0LmhlYWRbdC5pbnNfaF09cyxzKyssdC5pbnNlcnQtLSwhKHQubG9va2FoZWFkK3QuaW5zZXJ0PHgpKTspO313aGlsZSh0Lmxvb2thaGVhZDx6JiYwIT09dC5zdHJtLmF2YWlsX2luKX1mdW5jdGlvbiBaKHQsZSl7Zm9yKHZhciByLGk7Oyl7aWYodC5sb29rYWhlYWQ8eil7aWYoaih0KSx0Lmxvb2thaGVhZDx6JiZlPT09bClyZXR1cm4gQTtpZigwPT09dC5sb29rYWhlYWQpYnJlYWt9aWYocj0wLHQubG9va2FoZWFkPj14JiYodC5pbnNfaD0odC5pbnNfaDw8dC5oYXNoX3NoaWZ0XnQud2luZG93W3Quc3Ryc3RhcnQreC0xXSkmdC5oYXNoX21hc2sscj10LnByZXZbdC5zdHJzdGFydCZ0LndfbWFza109dC5oZWFkW3QuaW5zX2hdLHQuaGVhZFt0Lmluc19oXT10LnN0cnN0YXJ0KSwwIT09ciYmdC5zdHJzdGFydC1yPD10Lndfc2l6ZS16JiYodC5tYXRjaF9sZW5ndGg9TCh0LHIpKSx0Lm1hdGNoX2xlbmd0aD49eClpZihpPXUuX3RyX3RhbGx5KHQsdC5zdHJzdGFydC10Lm1hdGNoX3N0YXJ0LHQubWF0Y2hfbGVuZ3RoLXgpLHQubG9va2FoZWFkLT10Lm1hdGNoX2xlbmd0aCx0Lm1hdGNoX2xlbmd0aDw9dC5tYXhfbGF6eV9tYXRjaCYmdC5sb29rYWhlYWQ+PXgpe2Zvcih0Lm1hdGNoX2xlbmd0aC0tO3Quc3Ryc3RhcnQrKyx0Lmluc19oPSh0Lmluc19oPDx0Lmhhc2hfc2hpZnRedC53aW5kb3dbdC5zdHJzdGFydCt4LTFdKSZ0Lmhhc2hfbWFzayxyPXQucHJldlt0LnN0cnN0YXJ0JnQud19tYXNrXT10LmhlYWRbdC5pbnNfaF0sdC5oZWFkW3QuaW5zX2hdPXQuc3Ryc3RhcnQsMCE9LS10Lm1hdGNoX2xlbmd0aDspO3Quc3Ryc3RhcnQrK31lbHNlIHQuc3Ryc3RhcnQrPXQubWF0Y2hfbGVuZ3RoLHQubWF0Y2hfbGVuZ3RoPTAsdC5pbnNfaD10LndpbmRvd1t0LnN0cnN0YXJ0XSx0Lmluc19oPSh0Lmluc19oPDx0Lmhhc2hfc2hpZnRedC53aW5kb3dbdC5zdHJzdGFydCsxXSkmdC5oYXNoX21hc2s7ZWxzZSBpPXUuX3RyX3RhbGx5KHQsMCx0LndpbmRvd1t0LnN0cnN0YXJ0XSksdC5sb29rYWhlYWQtLSx0LnN0cnN0YXJ0Kys7aWYoaSYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfXJldHVybiB0Lmluc2VydD10LnN0cnN0YXJ0PHgtMT90LnN0cnN0YXJ0OngtMSxlPT09Zj8oTih0LCEwKSwwPT09dC5zdHJtLmF2YWlsX291dD9POkIpOnQubGFzdF9saXQmJihOKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KT9BOkl9ZnVuY3Rpb24gVyh0LGUpe2Zvcih2YXIgcixpLG47Oyl7aWYodC5sb29rYWhlYWQ8eil7aWYoaih0KSx0Lmxvb2thaGVhZDx6JiZlPT09bClyZXR1cm4gQTtpZigwPT09dC5sb29rYWhlYWQpYnJlYWt9aWYocj0wLHQubG9va2FoZWFkPj14JiYodC5pbnNfaD0odC5pbnNfaDw8dC5oYXNoX3NoaWZ0XnQud2luZG93W3Quc3Ryc3RhcnQreC0xXSkmdC5oYXNoX21hc2sscj10LnByZXZbdC5zdHJzdGFydCZ0LndfbWFza109dC5oZWFkW3QuaW5zX2hdLHQuaGVhZFt0Lmluc19oXT10LnN0cnN0YXJ0KSx0LnByZXZfbGVuZ3RoPXQubWF0Y2hfbGVuZ3RoLHQucHJldl9tYXRjaD10Lm1hdGNoX3N0YXJ0LHQubWF0Y2hfbGVuZ3RoPXgtMSwwIT09ciYmdC5wcmV2X2xlbmd0aDx0Lm1heF9sYXp5X21hdGNoJiZ0LnN0cnN0YXJ0LXI8PXQud19zaXplLXomJih0Lm1hdGNoX2xlbmd0aD1MKHQsciksdC5tYXRjaF9sZW5ndGg8PTUmJigxPT09dC5zdHJhdGVneXx8dC5tYXRjaF9sZW5ndGg9PT14JiY0MDk2PHQuc3Ryc3RhcnQtdC5tYXRjaF9zdGFydCkmJih0Lm1hdGNoX2xlbmd0aD14LTEpKSx0LnByZXZfbGVuZ3RoPj14JiZ0Lm1hdGNoX2xlbmd0aDw9dC5wcmV2X2xlbmd0aCl7Zm9yKG49dC5zdHJzdGFydCt0Lmxvb2thaGVhZC14LGk9dS5fdHJfdGFsbHkodCx0LnN0cnN0YXJ0LTEtdC5wcmV2X21hdGNoLHQucHJldl9sZW5ndGgteCksdC5sb29rYWhlYWQtPXQucHJldl9sZW5ndGgtMSx0LnByZXZfbGVuZ3RoLT0yOysrdC5zdHJzdGFydDw9biYmKHQuaW5zX2g9KHQuaW5zX2g8PHQuaGFzaF9zaGlmdF50LndpbmRvd1t0LnN0cnN0YXJ0K3gtMV0pJnQuaGFzaF9tYXNrLHI9dC5wcmV2W3Quc3Ryc3RhcnQmdC53X21hc2tdPXQuaGVhZFt0Lmluc19oXSx0LmhlYWRbdC5pbnNfaF09dC5zdHJzdGFydCksMCE9LS10LnByZXZfbGVuZ3RoOyk7aWYodC5tYXRjaF9hdmFpbGFibGU9MCx0Lm1hdGNoX2xlbmd0aD14LTEsdC5zdHJzdGFydCsrLGkmJihOKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1lbHNlIGlmKHQubWF0Y2hfYXZhaWxhYmxlKXtpZigoaT11Ll90cl90YWxseSh0LDAsdC53aW5kb3dbdC5zdHJzdGFydC0xXSkpJiZOKHQsITEpLHQuc3Ryc3RhcnQrKyx0Lmxvb2thaGVhZC0tLDA9PT10LnN0cm0uYXZhaWxfb3V0KXJldHVybiBBfWVsc2UgdC5tYXRjaF9hdmFpbGFibGU9MSx0LnN0cnN0YXJ0KyssdC5sb29rYWhlYWQtLX1yZXR1cm4gdC5tYXRjaF9hdmFpbGFibGUmJihpPXUuX3RyX3RhbGx5KHQsMCx0LndpbmRvd1t0LnN0cnN0YXJ0LTFdKSx0Lm1hdGNoX2F2YWlsYWJsZT0wKSx0Lmluc2VydD10LnN0cnN0YXJ0PHgtMT90LnN0cnN0YXJ0OngtMSxlPT09Zj8oTih0LCEwKSwwPT09dC5zdHJtLmF2YWlsX291dD9POkIpOnQubGFzdF9saXQmJihOKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KT9BOkl9ZnVuY3Rpb24gTSh0LGUscixpLG4pe3RoaXMuZ29vZF9sZW5ndGg9dCx0aGlzLm1heF9sYXp5PWUsdGhpcy5uaWNlX2xlbmd0aD1yLHRoaXMubWF4X2NoYWluPWksdGhpcy5mdW5jPW59ZnVuY3Rpb24gSCgpe3RoaXMuc3RybT1udWxsLHRoaXMuc3RhdHVzPTAsdGhpcy5wZW5kaW5nX2J1Zj1udWxsLHRoaXMucGVuZGluZ19idWZfc2l6ZT0wLHRoaXMucGVuZGluZ19vdXQ9MCx0aGlzLnBlbmRpbmc9MCx0aGlzLndyYXA9MCx0aGlzLmd6aGVhZD1udWxsLHRoaXMuZ3ppbmRleD0wLHRoaXMubWV0aG9kPXYsdGhpcy5sYXN0X2ZsdXNoPS0xLHRoaXMud19zaXplPTAsdGhpcy53X2JpdHM9MCx0aGlzLndfbWFzaz0wLHRoaXMud2luZG93PW51bGwsdGhpcy53aW5kb3dfc2l6ZT0wLHRoaXMucHJldj1udWxsLHRoaXMuaGVhZD1udWxsLHRoaXMuaW5zX2g9MCx0aGlzLmhhc2hfc2l6ZT0wLHRoaXMuaGFzaF9iaXRzPTAsdGhpcy5oYXNoX21hc2s9MCx0aGlzLmhhc2hfc2hpZnQ9MCx0aGlzLmJsb2NrX3N0YXJ0PTAsdGhpcy5tYXRjaF9sZW5ndGg9MCx0aGlzLnByZXZfbWF0Y2g9MCx0aGlzLm1hdGNoX2F2YWlsYWJsZT0wLHRoaXMuc3Ryc3RhcnQ9MCx0aGlzLm1hdGNoX3N0YXJ0PTAsdGhpcy5sb29rYWhlYWQ9MCx0aGlzLnByZXZfbGVuZ3RoPTAsdGhpcy5tYXhfY2hhaW5fbGVuZ3RoPTAsdGhpcy5tYXhfbGF6eV9tYXRjaD0wLHRoaXMubGV2ZWw9MCx0aGlzLnN0cmF0ZWd5PTAsdGhpcy5nb29kX21hdGNoPTAsdGhpcy5uaWNlX21hdGNoPTAsdGhpcy5keW5fbHRyZWU9bmV3IGQuQnVmMTYoMip3KSx0aGlzLmR5bl9kdHJlZT1uZXcgZC5CdWYxNigyKigyKmErMSkpLHRoaXMuYmxfdHJlZT1uZXcgZC5CdWYxNigyKigyKm8rMSkpLEQodGhpcy5keW5fbHRyZWUpLEQodGhpcy5keW5fZHRyZWUpLEQodGhpcy5ibF90cmVlKSx0aGlzLmxfZGVzYz1udWxsLHRoaXMuZF9kZXNjPW51bGwsdGhpcy5ibF9kZXNjPW51bGwsdGhpcy5ibF9jb3VudD1uZXcgZC5CdWYxNihrKzEpLHRoaXMuaGVhcD1uZXcgZC5CdWYxNigyKnMrMSksRCh0aGlzLmhlYXApLHRoaXMuaGVhcF9sZW49MCx0aGlzLmhlYXBfbWF4PTAsdGhpcy5kZXB0aD1uZXcgZC5CdWYxNigyKnMrMSksRCh0aGlzLmRlcHRoKSx0aGlzLmxfYnVmPTAsdGhpcy5saXRfYnVmc2l6ZT0wLHRoaXMubGFzdF9saXQ9MCx0aGlzLmRfYnVmPTAsdGhpcy5vcHRfbGVuPTAsdGhpcy5zdGF0aWNfbGVuPTAsdGhpcy5tYXRjaGVzPTAsdGhpcy5pbnNlcnQ9MCx0aGlzLmJpX2J1Zj0wLHRoaXMuYmlfdmFsaWQ9MH1mdW5jdGlvbiBHKHQpe3ZhciBlO3JldHVybiB0JiZ0LnN0YXRlPyh0LnRvdGFsX2luPXQudG90YWxfb3V0PTAsdC5kYXRhX3R5cGU9biwoZT10LnN0YXRlKS5wZW5kaW5nPTAsZS5wZW5kaW5nX291dD0wLGUud3JhcDwwJiYoZS53cmFwPS1lLndyYXApLGUuc3RhdHVzPWUud3JhcD9DOkUsdC5hZGxlcj0yPT09ZS53cmFwPzA6MSxlLmxhc3RfZmx1c2g9bCx1Ll90cl9pbml0KGUpLG0pOlIodCxfKX1mdW5jdGlvbiBLKHQpe3ZhciBlPUcodCk7cmV0dXJuIGU9PT1tJiZmdW5jdGlvbih0KXt0LndpbmRvd19zaXplPTIqdC53X3NpemUsRCh0LmhlYWQpLHQubWF4X2xhenlfbWF0Y2g9aFt0LmxldmVsXS5tYXhfbGF6eSx0Lmdvb2RfbWF0Y2g9aFt0LmxldmVsXS5nb29kX2xlbmd0aCx0Lm5pY2VfbWF0Y2g9aFt0LmxldmVsXS5uaWNlX2xlbmd0aCx0Lm1heF9jaGFpbl9sZW5ndGg9aFt0LmxldmVsXS5tYXhfY2hhaW4sdC5zdHJzdGFydD0wLHQuYmxvY2tfc3RhcnQ9MCx0Lmxvb2thaGVhZD0wLHQuaW5zZXJ0PTAsdC5tYXRjaF9sZW5ndGg9dC5wcmV2X2xlbmd0aD14LTEsdC5tYXRjaF9hdmFpbGFibGU9MCx0Lmluc19oPTB9KHQuc3RhdGUpLGV9ZnVuY3Rpb24gWSh0LGUscixpLG4scyl7aWYoIXQpcmV0dXJuIF87dmFyIGE9MTtpZihlPT09ZyYmKGU9NiksaTwwPyhhPTAsaT0taSk6MTU8aSYmKGE9MixpLT0xNiksbjwxfHx5PG58fHIhPT12fHxpPDh8fDE1PGl8fGU8MHx8OTxlfHxzPDB8fGI8cylyZXR1cm4gUih0LF8pOzg9PT1pJiYoaT05KTt2YXIgbz1uZXcgSDtyZXR1cm4odC5zdGF0ZT1vKS5zdHJtPXQsby53cmFwPWEsby5nemhlYWQ9bnVsbCxvLndfYml0cz1pLG8ud19zaXplPTE8PG8ud19iaXRzLG8ud19tYXNrPW8ud19zaXplLTEsby5oYXNoX2JpdHM9bis3LG8uaGFzaF9zaXplPTE8PG8uaGFzaF9iaXRzLG8uaGFzaF9tYXNrPW8uaGFzaF9zaXplLTEsby5oYXNoX3NoaWZ0PX5+KChvLmhhc2hfYml0cyt4LTEpL3gpLG8ud2luZG93PW5ldyBkLkJ1ZjgoMipvLndfc2l6ZSksby5oZWFkPW5ldyBkLkJ1ZjE2KG8uaGFzaF9zaXplKSxvLnByZXY9bmV3IGQuQnVmMTYoby53X3NpemUpLG8ubGl0X2J1ZnNpemU9MTw8bis2LG8ucGVuZGluZ19idWZfc2l6ZT00Km8ubGl0X2J1ZnNpemUsby5wZW5kaW5nX2J1Zj1uZXcgZC5CdWY4KG8ucGVuZGluZ19idWZfc2l6ZSksby5kX2J1Zj0xKm8ubGl0X2J1ZnNpemUsby5sX2J1Zj0zKm8ubGl0X2J1ZnNpemUsby5sZXZlbD1lLG8uc3RyYXRlZ3k9cyxvLm1ldGhvZD1yLEsodCl9aD1bbmV3IE0oMCwwLDAsMCxmdW5jdGlvbih0LGUpe3ZhciByPTY1NTM1O2ZvcihyPnQucGVuZGluZ19idWZfc2l6ZS01JiYocj10LnBlbmRpbmdfYnVmX3NpemUtNSk7Oyl7aWYodC5sb29rYWhlYWQ8PTEpe2lmKGoodCksMD09PXQubG9va2FoZWFkJiZlPT09bClyZXR1cm4gQTtpZigwPT09dC5sb29rYWhlYWQpYnJlYWt9dC5zdHJzdGFydCs9dC5sb29rYWhlYWQsdC5sb29rYWhlYWQ9MDt2YXIgaT10LmJsb2NrX3N0YXJ0K3I7aWYoKDA9PT10LnN0cnN0YXJ0fHx0LnN0cnN0YXJ0Pj1pKSYmKHQubG9va2FoZWFkPXQuc3Ryc3RhcnQtaSx0LnN0cnN0YXJ0PWksTih0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEE7aWYodC5zdHJzdGFydC10LmJsb2NrX3N0YXJ0Pj10Lndfc2l6ZS16JiYoTih0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9cmV0dXJuIHQuaW5zZXJ0PTAsZT09PWY/KE4odCwhMCksMD09PXQuc3RybS5hdmFpbF9vdXQ/TzpCKToodC5zdHJzdGFydD50LmJsb2NrX3N0YXJ0JiYoTih0LCExKSx0LnN0cm0uYXZhaWxfb3V0KSxBKX0pLG5ldyBNKDQsNCw4LDQsWiksbmV3IE0oNCw1LDE2LDgsWiksbmV3IE0oNCw2LDMyLDMyLFopLG5ldyBNKDQsNCwxNiwxNixXKSxuZXcgTSg4LDE2LDMyLDMyLFcpLG5ldyBNKDgsMTYsMTI4LDEyOCxXKSxuZXcgTSg4LDMyLDEyOCwyNTYsVyksbmV3IE0oMzIsMTI4LDI1OCwxMDI0LFcpLG5ldyBNKDMyLDI1OCwyNTgsNDA5NixXKV0sci5kZWZsYXRlSW5pdD1mdW5jdGlvbih0LGUpe3JldHVybiBZKHQsZSx2LDE1LDgsMCl9LHIuZGVmbGF0ZUluaXQyPVksci5kZWZsYXRlUmVzZXQ9SyxyLmRlZmxhdGVSZXNldEtlZXA9RyxyLmRlZmxhdGVTZXRIZWFkZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdCYmdC5zdGF0ZT8yIT09dC5zdGF0ZS53cmFwP186KHQuc3RhdGUuZ3poZWFkPWUsbSk6X30sci5kZWZsYXRlPWZ1bmN0aW9uKHQsZSl7dmFyIHIsaSxuLHM7aWYoIXR8fCF0LnN0YXRlfHw1PGV8fGU8MClyZXR1cm4gdD9SKHQsXyk6XztpZihpPXQuc3RhdGUsIXQub3V0cHV0fHwhdC5pbnB1dCYmMCE9PXQuYXZhaWxfaW58fDY2Nj09PWkuc3RhdHVzJiZlIT09ZilyZXR1cm4gUih0LDA9PT10LmF2YWlsX291dD8tNTpfKTtpZihpLnN0cm09dCxyPWkubGFzdF9mbHVzaCxpLmxhc3RfZmx1c2g9ZSxpLnN0YXR1cz09PUMpaWYoMj09PWkud3JhcCl0LmFkbGVyPTAsVShpLDMxKSxVKGksMTM5KSxVKGksOCksaS5nemhlYWQ/KFUoaSwoaS5nemhlYWQudGV4dD8xOjApKyhpLmd6aGVhZC5oY3JjPzI6MCkrKGkuZ3poZWFkLmV4dHJhPzQ6MCkrKGkuZ3poZWFkLm5hbWU/ODowKSsoaS5nemhlYWQuY29tbWVudD8xNjowKSksVShpLDI1NSZpLmd6aGVhZC50aW1lKSxVKGksaS5nemhlYWQudGltZT4+OCYyNTUpLFUoaSxpLmd6aGVhZC50aW1lPj4xNiYyNTUpLFUoaSxpLmd6aGVhZC50aW1lPj4yNCYyNTUpLFUoaSw5PT09aS5sZXZlbD8yOjI8PWkuc3RyYXRlZ3l8fGkubGV2ZWw8Mj80OjApLFUoaSwyNTUmaS5nemhlYWQub3MpLGkuZ3poZWFkLmV4dHJhJiZpLmd6aGVhZC5leHRyYS5sZW5ndGgmJihVKGksMjU1JmkuZ3poZWFkLmV4dHJhLmxlbmd0aCksVShpLGkuZ3poZWFkLmV4dHJhLmxlbmd0aD4+OCYyNTUpKSxpLmd6aGVhZC5oY3JjJiYodC5hZGxlcj1wKHQuYWRsZXIsaS5wZW5kaW5nX2J1ZixpLnBlbmRpbmcsMCkpLGkuZ3ppbmRleD0wLGkuc3RhdHVzPTY5KTooVShpLDApLFUoaSwwKSxVKGksMCksVShpLDApLFUoaSwwKSxVKGksOT09PWkubGV2ZWw/MjoyPD1pLnN0cmF0ZWd5fHxpLmxldmVsPDI/NDowKSxVKGksMyksaS5zdGF0dXM9RSk7ZWxzZXt2YXIgYT12KyhpLndfYml0cy04PDw0KTw8ODthfD0oMjw9aS5zdHJhdGVneXx8aS5sZXZlbDwyPzA6aS5sZXZlbDw2PzE6Nj09PWkubGV2ZWw/MjozKTw8NiwwIT09aS5zdHJzdGFydCYmKGF8PTMyKSxhKz0zMS1hJTMxLGkuc3RhdHVzPUUsUChpLGEpLDAhPT1pLnN0cnN0YXJ0JiYoUChpLHQuYWRsZXI+Pj4xNiksUChpLDY1NTM1JnQuYWRsZXIpKSx0LmFkbGVyPTF9aWYoNjk9PT1pLnN0YXR1cylpZihpLmd6aGVhZC5leHRyYSl7Zm9yKG49aS5wZW5kaW5nO2kuZ3ppbmRleDwoNjU1MzUmaS5nemhlYWQuZXh0cmEubGVuZ3RoKSYmKGkucGVuZGluZyE9PWkucGVuZGluZ19idWZfc2l6ZXx8KGkuZ3poZWFkLmhjcmMmJmkucGVuZGluZz5uJiYodC5hZGxlcj1wKHQuYWRsZXIsaS5wZW5kaW5nX2J1ZixpLnBlbmRpbmctbixuKSksRih0KSxuPWkucGVuZGluZyxpLnBlbmRpbmchPT1pLnBlbmRpbmdfYnVmX3NpemUpKTspVShpLDI1NSZpLmd6aGVhZC5leHRyYVtpLmd6aW5kZXhdKSxpLmd6aW5kZXgrKztpLmd6aGVhZC5oY3JjJiZpLnBlbmRpbmc+biYmKHQuYWRsZXI9cCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLW4sbikpLGkuZ3ppbmRleD09PWkuZ3poZWFkLmV4dHJhLmxlbmd0aCYmKGkuZ3ppbmRleD0wLGkuc3RhdHVzPTczKX1lbHNlIGkuc3RhdHVzPTczO2lmKDczPT09aS5zdGF0dXMpaWYoaS5nemhlYWQubmFtZSl7bj1pLnBlbmRpbmc7ZG97aWYoaS5wZW5kaW5nPT09aS5wZW5kaW5nX2J1Zl9zaXplJiYoaS5nemhlYWQuaGNyYyYmaS5wZW5kaW5nPm4mJih0LmFkbGVyPXAodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZy1uLG4pKSxGKHQpLG49aS5wZW5kaW5nLGkucGVuZGluZz09PWkucGVuZGluZ19idWZfc2l6ZSkpe3M9MTticmVha31zPWkuZ3ppbmRleDxpLmd6aGVhZC5uYW1lLmxlbmd0aD8yNTUmaS5nemhlYWQubmFtZS5jaGFyQ29kZUF0KGkuZ3ppbmRleCsrKTowLFUoaSxzKX13aGlsZSgwIT09cyk7aS5nemhlYWQuaGNyYyYmaS5wZW5kaW5nPm4mJih0LmFkbGVyPXAodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZy1uLG4pKSwwPT09cyYmKGkuZ3ppbmRleD0wLGkuc3RhdHVzPTkxKX1lbHNlIGkuc3RhdHVzPTkxO2lmKDkxPT09aS5zdGF0dXMpaWYoaS5nemhlYWQuY29tbWVudCl7bj1pLnBlbmRpbmc7ZG97aWYoaS5wZW5kaW5nPT09aS5wZW5kaW5nX2J1Zl9zaXplJiYoaS5nemhlYWQuaGNyYyYmaS5wZW5kaW5nPm4mJih0LmFkbGVyPXAodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZy1uLG4pKSxGKHQpLG49aS5wZW5kaW5nLGkucGVuZGluZz09PWkucGVuZGluZ19idWZfc2l6ZSkpe3M9MTticmVha31zPWkuZ3ppbmRleDxpLmd6aGVhZC5jb21tZW50Lmxlbmd0aD8yNTUmaS5nemhlYWQuY29tbWVudC5jaGFyQ29kZUF0KGkuZ3ppbmRleCsrKTowLFUoaSxzKX13aGlsZSgwIT09cyk7aS5nemhlYWQuaGNyYyYmaS5wZW5kaW5nPm4mJih0LmFkbGVyPXAodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZy1uLG4pKSwwPT09cyYmKGkuc3RhdHVzPTEwMyl9ZWxzZSBpLnN0YXR1cz0xMDM7aWYoMTAzPT09aS5zdGF0dXMmJihpLmd6aGVhZC5oY3JjPyhpLnBlbmRpbmcrMj5pLnBlbmRpbmdfYnVmX3NpemUmJkYodCksaS5wZW5kaW5nKzI8PWkucGVuZGluZ19idWZfc2l6ZSYmKFUoaSwyNTUmdC5hZGxlciksVShpLHQuYWRsZXI+PjgmMjU1KSx0LmFkbGVyPTAsaS5zdGF0dXM9RSkpOmkuc3RhdHVzPUUpLDAhPT1pLnBlbmRpbmcpe2lmKEYodCksMD09PXQuYXZhaWxfb3V0KXJldHVybiBpLmxhc3RfZmx1c2g9LTEsbX1lbHNlIGlmKDA9PT10LmF2YWlsX2luJiZUKGUpPD1UKHIpJiZlIT09ZilyZXR1cm4gUih0LC01KTtpZig2NjY9PT1pLnN0YXR1cyYmMCE9PXQuYXZhaWxfaW4pcmV0dXJuIFIodCwtNSk7aWYoMCE9PXQuYXZhaWxfaW58fDAhPT1pLmxvb2thaGVhZHx8ZSE9PWwmJjY2NiE9PWkuc3RhdHVzKXt2YXIgbz0yPT09aS5zdHJhdGVneT9mdW5jdGlvbih0LGUpe2Zvcih2YXIgcjs7KXtpZigwPT09dC5sb29rYWhlYWQmJihqKHQpLDA9PT10Lmxvb2thaGVhZCkpe2lmKGU9PT1sKXJldHVybiBBO2JyZWFrfWlmKHQubWF0Y2hfbGVuZ3RoPTAscj11Ll90cl90YWxseSh0LDAsdC53aW5kb3dbdC5zdHJzdGFydF0pLHQubG9va2FoZWFkLS0sdC5zdHJzdGFydCsrLHImJihOKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1yZXR1cm4gdC5pbnNlcnQ9MCxlPT09Zj8oTih0LCEwKSwwPT09dC5zdHJtLmF2YWlsX291dD9POkIpOnQubGFzdF9saXQmJihOKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KT9BOkl9KGksZSk6Mz09PWkuc3RyYXRlZ3k/ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIsaSxuLHMsYT10LndpbmRvdzs7KXtpZih0Lmxvb2thaGVhZDw9Uyl7aWYoaih0KSx0Lmxvb2thaGVhZDw9UyYmZT09PWwpcmV0dXJuIEE7aWYoMD09PXQubG9va2FoZWFkKWJyZWFrfWlmKHQubWF0Y2hfbGVuZ3RoPTAsdC5sb29rYWhlYWQ+PXgmJjA8dC5zdHJzdGFydCYmKGk9YVtuPXQuc3Ryc3RhcnQtMV0pPT09YVsrK25dJiZpPT09YVsrK25dJiZpPT09YVsrK25dKXtzPXQuc3Ryc3RhcnQrUztkb3t9d2hpbGUoaT09PWFbKytuXSYmaT09PWFbKytuXSYmaT09PWFbKytuXSYmaT09PWFbKytuXSYmaT09PWFbKytuXSYmaT09PWFbKytuXSYmaT09PWFbKytuXSYmaT09PWFbKytuXSYmbjxzKTt0Lm1hdGNoX2xlbmd0aD1TLShzLW4pLHQubWF0Y2hfbGVuZ3RoPnQubG9va2FoZWFkJiYodC5tYXRjaF9sZW5ndGg9dC5sb29rYWhlYWQpfWlmKHQubWF0Y2hfbGVuZ3RoPj14PyhyPXUuX3RyX3RhbGx5KHQsMSx0Lm1hdGNoX2xlbmd0aC14KSx0Lmxvb2thaGVhZC09dC5tYXRjaF9sZW5ndGgsdC5zdHJzdGFydCs9dC5tYXRjaF9sZW5ndGgsdC5tYXRjaF9sZW5ndGg9MCk6KHI9dS5fdHJfdGFsbHkodCwwLHQud2luZG93W3Quc3Ryc3RhcnRdKSx0Lmxvb2thaGVhZC0tLHQuc3Ryc3RhcnQrKyksciYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfXJldHVybiB0Lmluc2VydD0wLGU9PT1mPyhOKHQsITApLDA9PT10LnN0cm0uYXZhaWxfb3V0P086Qik6dC5sYXN0X2xpdCYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpP0E6SX0oaSxlKTpoW2kubGV2ZWxdLmZ1bmMoaSxlKTtpZihvIT09TyYmbyE9PUJ8fChpLnN0YXR1cz02NjYpLG89PT1BfHxvPT09TylyZXR1cm4gMD09PXQuYXZhaWxfb3V0JiYoaS5sYXN0X2ZsdXNoPS0xKSxtO2lmKG89PT1JJiYoMT09PWU/dS5fdHJfYWxpZ24oaSk6NSE9PWUmJih1Ll90cl9zdG9yZWRfYmxvY2soaSwwLDAsITEpLDM9PT1lJiYoRChpLmhlYWQpLDA9PT1pLmxvb2thaGVhZCYmKGkuc3Ryc3RhcnQ9MCxpLmJsb2NrX3N0YXJ0PTAsaS5pbnNlcnQ9MCkpKSxGKHQpLDA9PT10LmF2YWlsX291dCkpcmV0dXJuIGkubGFzdF9mbHVzaD0tMSxtfXJldHVybiBlIT09Zj9tOmkud3JhcDw9MD8xOigyPT09aS53cmFwPyhVKGksMjU1JnQuYWRsZXIpLFUoaSx0LmFkbGVyPj44JjI1NSksVShpLHQuYWRsZXI+PjE2JjI1NSksVShpLHQuYWRsZXI+PjI0JjI1NSksVShpLDI1NSZ0LnRvdGFsX2luKSxVKGksdC50b3RhbF9pbj4+OCYyNTUpLFUoaSx0LnRvdGFsX2luPj4xNiYyNTUpLFUoaSx0LnRvdGFsX2luPj4yNCYyNTUpKTooUChpLHQuYWRsZXI+Pj4xNiksUChpLDY1NTM1JnQuYWRsZXIpKSxGKHQpLDA8aS53cmFwJiYoaS53cmFwPS1pLndyYXApLDAhPT1pLnBlbmRpbmc/bToxKX0sci5kZWZsYXRlRW5kPWZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybiB0JiZ0LnN0YXRlPyhlPXQuc3RhdGUuc3RhdHVzKSE9PUMmJjY5IT09ZSYmNzMhPT1lJiY5MSE9PWUmJjEwMyE9PWUmJmUhPT1FJiY2NjYhPT1lP1IodCxfKToodC5zdGF0ZT1udWxsLGU9PT1FP1IodCwtMyk6bSk6X30sci5kZWZsYXRlU2V0RGljdGlvbmFyeT1mdW5jdGlvbih0LGUpe3ZhciByLGksbixzLGEsbyxoLHUsbD1lLmxlbmd0aDtpZighdHx8IXQuc3RhdGUpcmV0dXJuIF87aWYoMj09PShzPShyPXQuc3RhdGUpLndyYXApfHwxPT09cyYmci5zdGF0dXMhPT1DfHxyLmxvb2thaGVhZClyZXR1cm4gXztmb3IoMT09PXMmJih0LmFkbGVyPWModC5hZGxlcixlLGwsMCkpLHIud3JhcD0wLGw+PXIud19zaXplJiYoMD09PXMmJihEKHIuaGVhZCksci5zdHJzdGFydD0wLHIuYmxvY2tfc3RhcnQ9MCxyLmluc2VydD0wKSx1PW5ldyBkLkJ1Zjgoci53X3NpemUpLGQuYXJyYXlTZXQodSxlLGwtci53X3NpemUsci53X3NpemUsMCksZT11LGw9ci53X3NpemUpLGE9dC5hdmFpbF9pbixvPXQubmV4dF9pbixoPXQuaW5wdXQsdC5hdmFpbF9pbj1sLHQubmV4dF9pbj0wLHQuaW5wdXQ9ZSxqKHIpO3IubG9va2FoZWFkPj14Oyl7Zm9yKGk9ci5zdHJzdGFydCxuPXIubG9va2FoZWFkLSh4LTEpO3IuaW5zX2g9KHIuaW5zX2g8PHIuaGFzaF9zaGlmdF5yLndpbmRvd1tpK3gtMV0pJnIuaGFzaF9tYXNrLHIucHJldltpJnIud19tYXNrXT1yLmhlYWRbci5pbnNfaF0sci5oZWFkW3IuaW5zX2hdPWksaSsrLC0tbjspO3Iuc3Ryc3RhcnQ9aSxyLmxvb2thaGVhZD14LTEsaihyKX1yZXR1cm4gci5zdHJzdGFydCs9ci5sb29rYWhlYWQsci5ibG9ja19zdGFydD1yLnN0cnN0YXJ0LHIuaW5zZXJ0PXIubG9va2FoZWFkLHIubG9va2FoZWFkPTAsci5tYXRjaF9sZW5ndGg9ci5wcmV2X2xlbmd0aD14LTEsci5tYXRjaF9hdmFpbGFibGU9MCx0Lm5leHRfaW49byx0LmlucHV0PWgsdC5hdmFpbF9pbj1hLHIud3JhcD1zLG19LHIuZGVmbGF0ZUluZm89XCJwYWtvIGRlZmxhdGUgKGZyb20gTm9kZWNhIHByb2plY3QpXCJ9LHtcIi4uL3V0aWxzL2NvbW1vblwiOjQxLFwiLi9hZGxlcjMyXCI6NDMsXCIuL2NyYzMyXCI6NDUsXCIuL21lc3NhZ2VzXCI6NTEsXCIuL3RyZWVzXCI6NTJ9XSw0NzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe3RoaXMudGV4dD0wLHRoaXMudGltZT0wLHRoaXMueGZsYWdzPTAsdGhpcy5vcz0wLHRoaXMuZXh0cmE9bnVsbCx0aGlzLmV4dHJhX2xlbj0wLHRoaXMubmFtZT1cIlwiLHRoaXMuY29tbWVudD1cIlwiLHRoaXMuaGNyYz0wLHRoaXMuZG9uZT0hMX19LHt9XSw0ODpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3ZhciByLGksbixzLGEsbyxoLHUsbCxmLGQsYyxwLG0sXyxnLGIsdix5LHcsayx4LFMseixDO3I9dC5zdGF0ZSxpPXQubmV4dF9pbix6PXQuaW5wdXQsbj1pKyh0LmF2YWlsX2luLTUpLHM9dC5uZXh0X291dCxDPXQub3V0cHV0LGE9cy0oZS10LmF2YWlsX291dCksbz1zKyh0LmF2YWlsX291dC0yNTcpLGg9ci5kbWF4LHU9ci53c2l6ZSxsPXIud2hhdmUsZj1yLnduZXh0LGQ9ci53aW5kb3csYz1yLmhvbGQscD1yLmJpdHMsbT1yLmxlbmNvZGUsXz1yLmRpc3Rjb2RlLGc9KDE8PHIubGVuYml0cyktMSxiPSgxPDxyLmRpc3RiaXRzKS0xO3Q6ZG97cDwxNSYmKGMrPXpbaSsrXTw8cCxwKz04LGMrPXpbaSsrXTw8cCxwKz04KSx2PW1bYyZnXTtlOmZvcig7Oyl7aWYoYz4+Pj15PXY+Pj4yNCxwLT15LDA9PT0oeT12Pj4+MTYmMjU1KSlDW3MrK109NjU1MzUmdjtlbHNle2lmKCEoMTYmeSkpe2lmKDA9PSg2NCZ5KSl7dj1tWyg2NTUzNSZ2KSsoYyYoMTw8eSktMSldO2NvbnRpbnVlIGV9aWYoMzImeSl7ci5tb2RlPTEyO2JyZWFrIHR9dC5tc2c9XCJpbnZhbGlkIGxpdGVyYWwvbGVuZ3RoIGNvZGVcIixyLm1vZGU9MzA7YnJlYWsgdH13PTY1NTM1JnYsKHkmPTE1KSYmKHA8eSYmKGMrPXpbaSsrXTw8cCxwKz04KSx3Kz1jJigxPDx5KS0xLGM+Pj49eSxwLT15KSxwPDE1JiYoYys9eltpKytdPDxwLHArPTgsYys9eltpKytdPDxwLHArPTgpLHY9X1tjJmJdO3I6Zm9yKDs7KXtpZihjPj4+PXk9dj4+PjI0LHAtPXksISgxNiYoeT12Pj4+MTYmMjU1KSkpe2lmKDA9PSg2NCZ5KSl7dj1fWyg2NTUzNSZ2KSsoYyYoMTw8eSktMSldO2NvbnRpbnVlIHJ9dC5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIGNvZGVcIixyLm1vZGU9MzA7YnJlYWsgdH1pZihrPTY1NTM1JnYscDwoeSY9MTUpJiYoYys9eltpKytdPDxwLChwKz04KTx5JiYoYys9eltpKytdPDxwLHArPTgpKSxoPChrKz1jJigxPDx5KS0xKSl7dC5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFja1wiLHIubW9kZT0zMDticmVhayB0fWlmKGM+Pj49eSxwLT15LCh5PXMtYSk8ayl7aWYobDwoeT1rLXkpJiZyLnNhbmUpe3QubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWsgdH1pZihTPWQsKHg9MCk9PT1mKXtpZih4Kz11LXkseTx3KXtmb3Iody09eTtDW3MrK109ZFt4KytdLC0teTspO3g9cy1rLFM9Q319ZWxzZSBpZihmPHkpe2lmKHgrPXUrZi15LCh5LT1mKTx3KXtmb3Iody09eTtDW3MrK109ZFt4KytdLC0teTspO2lmKHg9MCxmPHcpe2Zvcih3LT15PWY7Q1tzKytdPWRbeCsrXSwtLXk7KTt4PXMtayxTPUN9fX1lbHNlIGlmKHgrPWYteSx5PHcpe2Zvcih3LT15O0NbcysrXT1kW3grK10sLS15Oyk7eD1zLWssUz1DfWZvcig7Mjx3OylDW3MrK109U1t4KytdLENbcysrXT1TW3grK10sQ1tzKytdPVNbeCsrXSx3LT0zO3cmJihDW3MrK109U1t4KytdLDE8dyYmKENbcysrXT1TW3grK10pKX1lbHNle2Zvcih4PXMtaztDW3MrK109Q1t4KytdLENbcysrXT1DW3grK10sQ1tzKytdPUNbeCsrXSwyPCh3LT0zKTspO3cmJihDW3MrK109Q1t4KytdLDE8dyYmKENbcysrXT1DW3grK10pKX1icmVha319YnJlYWt9fXdoaWxlKGk8biYmczxvKTtpLT13PXA+PjMsYyY9KDE8PChwLT13PDwzKSktMSx0Lm5leHRfaW49aSx0Lm5leHRfb3V0PXMsdC5hdmFpbF9pbj1pPG4/bi1pKzU6NS0oaS1uKSx0LmF2YWlsX291dD1zPG8/by1zKzI1NzoyNTctKHMtbyksci5ob2xkPWMsci5iaXRzPXB9fSx7fV0sNDk6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgST10KFwiLi4vdXRpbHMvY29tbW9uXCIpLE89dChcIi4vYWRsZXIzMlwiKSxCPXQoXCIuL2NyYzMyXCIpLFI9dChcIi4vaW5mZmFzdFwiKSxUPXQoXCIuL2luZnRyZWVzXCIpLEQ9MSxGPTIsTj0wLFU9LTIsUD0xLGk9ODUyLG49NTkyO2Z1bmN0aW9uIEwodCl7cmV0dXJuKHQ+Pj4yNCYyNTUpKyh0Pj4+OCY2NTI4MCkrKCg2NTI4MCZ0KTw8OCkrKCgyNTUmdCk8PDI0KX1mdW5jdGlvbiBzKCl7dGhpcy5tb2RlPTAsdGhpcy5sYXN0PSExLHRoaXMud3JhcD0wLHRoaXMuaGF2ZWRpY3Q9ITEsdGhpcy5mbGFncz0wLHRoaXMuZG1heD0wLHRoaXMuY2hlY2s9MCx0aGlzLnRvdGFsPTAsdGhpcy5oZWFkPW51bGwsdGhpcy53Yml0cz0wLHRoaXMud3NpemU9MCx0aGlzLndoYXZlPTAsdGhpcy53bmV4dD0wLHRoaXMud2luZG93PW51bGwsdGhpcy5ob2xkPTAsdGhpcy5iaXRzPTAsdGhpcy5sZW5ndGg9MCx0aGlzLm9mZnNldD0wLHRoaXMuZXh0cmE9MCx0aGlzLmxlbmNvZGU9bnVsbCx0aGlzLmRpc3Rjb2RlPW51bGwsdGhpcy5sZW5iaXRzPTAsdGhpcy5kaXN0Yml0cz0wLHRoaXMubmNvZGU9MCx0aGlzLm5sZW49MCx0aGlzLm5kaXN0PTAsdGhpcy5oYXZlPTAsdGhpcy5uZXh0PW51bGwsdGhpcy5sZW5zPW5ldyBJLkJ1ZjE2KDMyMCksdGhpcy53b3JrPW5ldyBJLkJ1ZjE2KDI4OCksdGhpcy5sZW5keW49bnVsbCx0aGlzLmRpc3RkeW49bnVsbCx0aGlzLnNhbmU9MCx0aGlzLmJhY2s9MCx0aGlzLndhcz0wfWZ1bmN0aW9uIGEodCl7dmFyIGU7cmV0dXJuIHQmJnQuc3RhdGU/KGU9dC5zdGF0ZSx0LnRvdGFsX2luPXQudG90YWxfb3V0PWUudG90YWw9MCx0Lm1zZz1cIlwiLGUud3JhcCYmKHQuYWRsZXI9MSZlLndyYXApLGUubW9kZT1QLGUubGFzdD0wLGUuaGF2ZWRpY3Q9MCxlLmRtYXg9MzI3NjgsZS5oZWFkPW51bGwsZS5ob2xkPTAsZS5iaXRzPTAsZS5sZW5jb2RlPWUubGVuZHluPW5ldyBJLkJ1ZjMyKGkpLGUuZGlzdGNvZGU9ZS5kaXN0ZHluPW5ldyBJLkJ1ZjMyKG4pLGUuc2FuZT0xLGUuYmFjaz0tMSxOKTpVfWZ1bmN0aW9uIG8odCl7dmFyIGU7cmV0dXJuIHQmJnQuc3RhdGU/KChlPXQuc3RhdGUpLndzaXplPTAsZS53aGF2ZT0wLGUud25leHQ9MCxhKHQpKTpVfWZ1bmN0aW9uIGgodCxlKXt2YXIgcixpO3JldHVybiB0JiZ0LnN0YXRlPyhpPXQuc3RhdGUsZTwwPyhyPTAsZT0tZSk6KHI9MSsoZT4+NCksZTw0OCYmKGUmPTE1KSksZSYmKGU8OHx8MTU8ZSk/VToobnVsbCE9PWkud2luZG93JiZpLndiaXRzIT09ZSYmKGkud2luZG93PW51bGwpLGkud3JhcD1yLGkud2JpdHM9ZSxvKHQpKSk6VX1mdW5jdGlvbiB1KHQsZSl7dmFyIHIsaTtyZXR1cm4gdD8oaT1uZXcgcywodC5zdGF0ZT1pKS53aW5kb3c9bnVsbCwocj1oKHQsZSkpIT09TiYmKHQuc3RhdGU9bnVsbCkscik6VX12YXIgbCxmLGQ9ITA7ZnVuY3Rpb24gaih0KXtpZihkKXt2YXIgZTtmb3IobD1uZXcgSS5CdWYzMig1MTIpLGY9bmV3IEkuQnVmMzIoMzIpLGU9MDtlPDE0NDspdC5sZW5zW2UrK109ODtmb3IoO2U8MjU2Oyl0LmxlbnNbZSsrXT05O2Zvcig7ZTwyODA7KXQubGVuc1tlKytdPTc7Zm9yKDtlPDI4ODspdC5sZW5zW2UrK109ODtmb3IoVChELHQubGVucywwLDI4OCxsLDAsdC53b3JrLHtiaXRzOjl9KSxlPTA7ZTwzMjspdC5sZW5zW2UrK109NTtUKEYsdC5sZW5zLDAsMzIsZiwwLHQud29yayx7Yml0czo1fSksZD0hMX10LmxlbmNvZGU9bCx0LmxlbmJpdHM9OSx0LmRpc3Rjb2RlPWYsdC5kaXN0Yml0cz01fWZ1bmN0aW9uIFoodCxlLHIsaSl7dmFyIG4scz10LnN0YXRlO3JldHVybiBudWxsPT09cy53aW5kb3cmJihzLndzaXplPTE8PHMud2JpdHMscy53bmV4dD0wLHMud2hhdmU9MCxzLndpbmRvdz1uZXcgSS5CdWY4KHMud3NpemUpKSxpPj1zLndzaXplPyhJLmFycmF5U2V0KHMud2luZG93LGUsci1zLndzaXplLHMud3NpemUsMCkscy53bmV4dD0wLHMud2hhdmU9cy53c2l6ZSk6KGk8KG49cy53c2l6ZS1zLnduZXh0KSYmKG49aSksSS5hcnJheVNldChzLndpbmRvdyxlLHItaSxuLHMud25leHQpLChpLT1uKT8oSS5hcnJheVNldChzLndpbmRvdyxlLHItaSxpLDApLHMud25leHQ9aSxzLndoYXZlPXMud3NpemUpOihzLnduZXh0Kz1uLHMud25leHQ9PT1zLndzaXplJiYocy53bmV4dD0wKSxzLndoYXZlPHMud3NpemUmJihzLndoYXZlKz1uKSkpLDB9ci5pbmZsYXRlUmVzZXQ9byxyLmluZmxhdGVSZXNldDI9aCxyLmluZmxhdGVSZXNldEtlZXA9YSxyLmluZmxhdGVJbml0PWZ1bmN0aW9uKHQpe3JldHVybiB1KHQsMTUpfSxyLmluZmxhdGVJbml0Mj11LHIuaW5mbGF0ZT1mdW5jdGlvbih0LGUpe3ZhciByLGksbixzLGEsbyxoLHUsbCxmLGQsYyxwLG0sXyxnLGIsdix5LHcsayx4LFMseixDPTAsRT1uZXcgSS5CdWY4KDQpLEE9WzE2LDE3LDE4LDAsOCw3LDksNiwxMCw1LDExLDQsMTIsMywxMywyLDE0LDEsMTVdO2lmKCF0fHwhdC5zdGF0ZXx8IXQub3V0cHV0fHwhdC5pbnB1dCYmMCE9PXQuYXZhaWxfaW4pcmV0dXJuIFU7MTI9PT0ocj10LnN0YXRlKS5tb2RlJiYoci5tb2RlPTEzKSxhPXQubmV4dF9vdXQsbj10Lm91dHB1dCxoPXQuYXZhaWxfb3V0LHM9dC5uZXh0X2luLGk9dC5pbnB1dCxvPXQuYXZhaWxfaW4sdT1yLmhvbGQsbD1yLmJpdHMsZj1vLGQ9aCx4PU47dDpmb3IoOzspc3dpdGNoKHIubW9kZSl7Y2FzZSBQOmlmKDA9PT1yLndyYXApe3IubW9kZT0xMzticmVha31mb3IoO2w8MTY7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZigyJnIud3JhcCYmMzU2MTU9PT11KXtFW3IuY2hlY2s9MF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSwyLDApLGw9dT0wLHIubW9kZT0yO2JyZWFrfWlmKHIuZmxhZ3M9MCxyLmhlYWQmJihyLmhlYWQuZG9uZT0hMSksISgxJnIud3JhcCl8fCgoKDI1NSZ1KTw8OCkrKHU+PjgpKSUzMSl7dC5tc2c9XCJpbmNvcnJlY3QgaGVhZGVyIGNoZWNrXCIsci5tb2RlPTMwO2JyZWFrfWlmKDghPSgxNSZ1KSl7dC5tc2c9XCJ1bmtub3duIGNvbXByZXNzaW9uIG1ldGhvZFwiLHIubW9kZT0zMDticmVha31pZihsLT00LGs9OCsoMTUmKHU+Pj49NCkpLDA9PT1yLndiaXRzKXIud2JpdHM9aztlbHNlIGlmKGs+ci53Yml0cyl7dC5tc2c9XCJpbnZhbGlkIHdpbmRvdyBzaXplXCIsci5tb2RlPTMwO2JyZWFrfXIuZG1heD0xPDxrLHQuYWRsZXI9ci5jaGVjaz0xLHIubW9kZT01MTImdT8xMDoxMixsPXU9MDticmVhaztjYXNlIDI6Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9aWYoci5mbGFncz11LDghPSgyNTUmci5mbGFncykpe3QubXNnPVwidW5rbm93biBjb21wcmVzc2lvbiBtZXRob2RcIixyLm1vZGU9MzA7YnJlYWt9aWYoNTczNDQmci5mbGFncyl7dC5tc2c9XCJ1bmtub3duIGhlYWRlciBmbGFncyBzZXRcIixyLm1vZGU9MzA7YnJlYWt9ci5oZWFkJiYoci5oZWFkLnRleHQ9dT4+OCYxKSw1MTImci5mbGFncyYmKEVbMF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSwyLDApKSxsPXU9MCxyLm1vZGU9MztjYXNlIDM6Zm9yKDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9ci5oZWFkJiYoci5oZWFkLnRpbWU9dSksNTEyJnIuZmxhZ3MmJihFWzBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LEVbMl09dT4+PjE2JjI1NSxFWzNdPXU+Pj4yNCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSw0LDApKSxsPXU9MCxyLm1vZGU9NDtjYXNlIDQ6Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9ci5oZWFkJiYoci5oZWFkLnhmbGFncz0yNTUmdSxyLmhlYWQub3M9dT4+OCksNTEyJnIuZmxhZ3MmJihFWzBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsMiwwKSksbD11PTAsci5tb2RlPTU7Y2FzZSA1OmlmKDEwMjQmci5mbGFncyl7Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9ci5sZW5ndGg9dSxyLmhlYWQmJihyLmhlYWQuZXh0cmFfbGVuPXUpLDUxMiZyLmZsYWdzJiYoRVswXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDIsMCkpLGw9dT0wfWVsc2Ugci5oZWFkJiYoci5oZWFkLmV4dHJhPW51bGwpO3IubW9kZT02O2Nhc2UgNjppZigxMDI0JnIuZmxhZ3MmJihvPChjPXIubGVuZ3RoKSYmKGM9byksYyYmKHIuaGVhZCYmKGs9ci5oZWFkLmV4dHJhX2xlbi1yLmxlbmd0aCxyLmhlYWQuZXh0cmF8fChyLmhlYWQuZXh0cmE9bmV3IEFycmF5KHIuaGVhZC5leHRyYV9sZW4pKSxJLmFycmF5U2V0KHIuaGVhZC5leHRyYSxpLHMsYyxrKSksNTEyJnIuZmxhZ3MmJihyLmNoZWNrPUIoci5jaGVjayxpLGMscykpLG8tPWMscys9YyxyLmxlbmd0aC09Yyksci5sZW5ndGgpKWJyZWFrIHQ7ci5sZW5ndGg9MCxyLm1vZGU9NztjYXNlIDc6aWYoMjA0OCZyLmZsYWdzKXtpZigwPT09bylicmVhayB0O2ZvcihjPTA7az1pW3MrYysrXSxyLmhlYWQmJmsmJnIubGVuZ3RoPDY1NTM2JiYoci5oZWFkLm5hbWUrPVN0cmluZy5mcm9tQ2hhckNvZGUoaykpLGsmJmM8bzspO2lmKDUxMiZyLmZsYWdzJiYoci5jaGVjaz1CKHIuY2hlY2ssaSxjLHMpKSxvLT1jLHMrPWMsaylicmVhayB0fWVsc2Ugci5oZWFkJiYoci5oZWFkLm5hbWU9bnVsbCk7ci5sZW5ndGg9MCxyLm1vZGU9ODtjYXNlIDg6aWYoNDA5NiZyLmZsYWdzKXtpZigwPT09bylicmVhayB0O2ZvcihjPTA7az1pW3MrYysrXSxyLmhlYWQmJmsmJnIubGVuZ3RoPDY1NTM2JiYoci5oZWFkLmNvbW1lbnQrPVN0cmluZy5mcm9tQ2hhckNvZGUoaykpLGsmJmM8bzspO2lmKDUxMiZyLmZsYWdzJiYoci5jaGVjaz1CKHIuY2hlY2ssaSxjLHMpKSxvLT1jLHMrPWMsaylicmVhayB0fWVsc2Ugci5oZWFkJiYoci5oZWFkLmNvbW1lbnQ9bnVsbCk7ci5tb2RlPTk7Y2FzZSA5OmlmKDUxMiZyLmZsYWdzKXtmb3IoO2w8MTY7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZih1IT09KDY1NTM1JnIuY2hlY2spKXt0Lm1zZz1cImhlYWRlciBjcmMgbWlzbWF0Y2hcIixyLm1vZGU9MzA7YnJlYWt9bD11PTB9ci5oZWFkJiYoci5oZWFkLmhjcmM9ci5mbGFncz4+OSYxLHIuaGVhZC5kb25lPSEwKSx0LmFkbGVyPXIuY2hlY2s9MCxyLm1vZGU9MTI7YnJlYWs7Y2FzZSAxMDpmb3IoO2w8MzI7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH10LmFkbGVyPXIuY2hlY2s9TCh1KSxsPXU9MCxyLm1vZGU9MTE7Y2FzZSAxMTppZigwPT09ci5oYXZlZGljdClyZXR1cm4gdC5uZXh0X291dD1hLHQuYXZhaWxfb3V0PWgsdC5uZXh0X2luPXMsdC5hdmFpbF9pbj1vLHIuaG9sZD11LHIuYml0cz1sLDI7dC5hZGxlcj1yLmNoZWNrPTEsci5tb2RlPTEyO2Nhc2UgMTI6aWYoNT09PWV8fDY9PT1lKWJyZWFrIHQ7Y2FzZSAxMzppZihyLmxhc3Qpe3U+Pj49NyZsLGwtPTcmbCxyLm1vZGU9Mjc7YnJlYWt9Zm9yKDtsPDM7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1zd2l0Y2goci5sYXN0PTEmdSxsLT0xLDMmKHU+Pj49MSkpe2Nhc2UgMDpyLm1vZGU9MTQ7YnJlYWs7Y2FzZSAxOmlmKGoociksci5tb2RlPTIwLDYhPT1lKWJyZWFrO3U+Pj49MixsLT0yO2JyZWFrIHQ7Y2FzZSAyOnIubW9kZT0xNzticmVhaztjYXNlIDM6dC5tc2c9XCJpbnZhbGlkIGJsb2NrIHR5cGVcIixyLm1vZGU9MzB9dT4+Pj0yLGwtPTI7YnJlYWs7Y2FzZSAxNDpmb3IodT4+Pj03JmwsbC09NyZsO2w8MzI7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZigoNjU1MzUmdSkhPSh1Pj4+MTZeNjU1MzUpKXt0Lm1zZz1cImludmFsaWQgc3RvcmVkIGJsb2NrIGxlbmd0aHNcIixyLm1vZGU9MzA7YnJlYWt9aWYoci5sZW5ndGg9NjU1MzUmdSxsPXU9MCxyLm1vZGU9MTUsNj09PWUpYnJlYWsgdDtjYXNlIDE1OnIubW9kZT0xNjtjYXNlIDE2OmlmKGM9ci5sZW5ndGgpe2lmKG88YyYmKGM9byksaDxjJiYoYz1oKSwwPT09YylicmVhayB0O0kuYXJyYXlTZXQobixpLHMsYyxhKSxvLT1jLHMrPWMsaC09YyxhKz1jLHIubGVuZ3RoLT1jO2JyZWFrfXIubW9kZT0xMjticmVhaztjYXNlIDE3OmZvcig7bDwxNDspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWlmKHIubmxlbj0yNTcrKDMxJnUpLHU+Pj49NSxsLT01LHIubmRpc3Q9MSsoMzEmdSksdT4+Pj01LGwtPTUsci5uY29kZT00KygxNSZ1KSx1Pj4+PTQsbC09NCwyODY8ci5ubGVufHwzMDxyLm5kaXN0KXt0Lm1zZz1cInRvbyBtYW55IGxlbmd0aCBvciBkaXN0YW5jZSBzeW1ib2xzXCIsci5tb2RlPTMwO2JyZWFrfXIuaGF2ZT0wLHIubW9kZT0xODtjYXNlIDE4OmZvcig7ci5oYXZlPHIubmNvZGU7KXtmb3IoO2w8Mzspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fXIubGVuc1tBW3IuaGF2ZSsrXV09NyZ1LHU+Pj49MyxsLT0zfWZvcig7ci5oYXZlPDE5OylyLmxlbnNbQVtyLmhhdmUrK11dPTA7aWYoci5sZW5jb2RlPXIubGVuZHluLHIubGVuYml0cz03LFM9e2JpdHM6ci5sZW5iaXRzfSx4PVQoMCxyLmxlbnMsMCwxOSxyLmxlbmNvZGUsMCxyLndvcmssUyksci5sZW5iaXRzPVMuYml0cyx4KXt0Lm1zZz1cImludmFsaWQgY29kZSBsZW5ndGhzIHNldFwiLHIubW9kZT0zMDticmVha31yLmhhdmU9MCxyLm1vZGU9MTk7Y2FzZSAxOTpmb3IoO3IuaGF2ZTxyLm5sZW4rci5uZGlzdDspe2Zvcig7Zz0oQz1yLmxlbmNvZGVbdSYoMTw8ci5sZW5iaXRzKS0xXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEoKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZihiPDE2KXU+Pj49XyxsLT1fLHIubGVuc1tyLmhhdmUrK109YjtlbHNle2lmKDE2PT09Yil7Zm9yKHo9XysyO2w8ejspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWlmKHU+Pj49XyxsLT1fLDA9PT1yLmhhdmUpe3QubXNnPVwiaW52YWxpZCBiaXQgbGVuZ3RoIHJlcGVhdFwiLHIubW9kZT0zMDticmVha31rPXIubGVuc1tyLmhhdmUtMV0sYz0zKygzJnUpLHU+Pj49MixsLT0yfWVsc2UgaWYoMTc9PT1iKXtmb3Ioej1fKzM7bDx6Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9bC09XyxrPTAsYz0zKyg3Jih1Pj4+PV8pKSx1Pj4+PTMsbC09M31lbHNle2Zvcih6PV8rNztsPHo7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1sLT1fLGs9MCxjPTExKygxMjcmKHU+Pj49XykpLHU+Pj49NyxsLT03fWlmKHIuaGF2ZStjPnIubmxlbityLm5kaXN0KXt0Lm1zZz1cImludmFsaWQgYml0IGxlbmd0aCByZXBlYXRcIixyLm1vZGU9MzA7YnJlYWt9Zm9yKDtjLS07KXIubGVuc1tyLmhhdmUrK109a319aWYoMzA9PT1yLm1vZGUpYnJlYWs7aWYoMD09PXIubGVuc1syNTZdKXt0Lm1zZz1cImludmFsaWQgY29kZSAtLSBtaXNzaW5nIGVuZC1vZi1ibG9ja1wiLHIubW9kZT0zMDticmVha31pZihyLmxlbmJpdHM9OSxTPXtiaXRzOnIubGVuYml0c30seD1UKEQsci5sZW5zLDAsci5ubGVuLHIubGVuY29kZSwwLHIud29yayxTKSxyLmxlbmJpdHM9Uy5iaXRzLHgpe3QubXNnPVwiaW52YWxpZCBsaXRlcmFsL2xlbmd0aHMgc2V0XCIsci5tb2RlPTMwO2JyZWFrfWlmKHIuZGlzdGJpdHM9NixyLmRpc3Rjb2RlPXIuZGlzdGR5bixTPXtiaXRzOnIuZGlzdGJpdHN9LHg9VChGLHIubGVucyxyLm5sZW4sci5uZGlzdCxyLmRpc3Rjb2RlLDAsci53b3JrLFMpLHIuZGlzdGJpdHM9Uy5iaXRzLHgpe3QubXNnPVwiaW52YWxpZCBkaXN0YW5jZXMgc2V0XCIsci5tb2RlPTMwO2JyZWFrfWlmKHIubW9kZT0yMCw2PT09ZSlicmVhayB0O2Nhc2UgMjA6ci5tb2RlPTIxO2Nhc2UgMjE6aWYoNjw9byYmMjU4PD1oKXt0Lm5leHRfb3V0PWEsdC5hdmFpbF9vdXQ9aCx0Lm5leHRfaW49cyx0LmF2YWlsX2luPW8sci5ob2xkPXUsci5iaXRzPWwsUih0LGQpLGE9dC5uZXh0X291dCxuPXQub3V0cHV0LGg9dC5hdmFpbF9vdXQscz10Lm5leHRfaW4saT10LmlucHV0LG89dC5hdmFpbF9pbix1PXIuaG9sZCxsPXIuYml0cywxMj09PXIubW9kZSYmKHIuYmFjaz0tMSk7YnJlYWt9Zm9yKHIuYmFjaz0wO2c9KEM9ci5sZW5jb2RlW3UmKDE8PHIubGVuYml0cyktMV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKChfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9aWYoZyYmMD09KDI0MCZnKSl7Zm9yKHY9Xyx5PWcsdz1iO2c9KEM9ci5sZW5jb2RlW3crKCh1JigxPDx2K3kpLTEpPj52KV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKHYrKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH11Pj4+PXYsbC09dixyLmJhY2srPXZ9aWYodT4+Pj1fLGwtPV8sci5iYWNrKz1fLHIubGVuZ3RoPWIsMD09PWcpe3IubW9kZT0yNjticmVha31pZigzMiZnKXtyLmJhY2s9LTEsci5tb2RlPTEyO2JyZWFrfWlmKDY0Jmcpe3QubXNnPVwiaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlXCIsci5tb2RlPTMwO2JyZWFrfXIuZXh0cmE9MTUmZyxyLm1vZGU9MjI7Y2FzZSAyMjppZihyLmV4dHJhKXtmb3Ioej1yLmV4dHJhO2w8ejspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fXIubGVuZ3RoKz11JigxPDxyLmV4dHJhKS0xLHU+Pj49ci5leHRyYSxsLT1yLmV4dHJhLHIuYmFjays9ci5leHRyYX1yLndhcz1yLmxlbmd0aCxyLm1vZGU9MjM7Y2FzZSAyMzpmb3IoO2c9KEM9ci5kaXN0Y29kZVt1JigxPDxyLmRpc3RiaXRzKS0xXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEoKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZigwPT0oMjQwJmcpKXtmb3Iodj1fLHk9Zyx3PWI7Zz0oQz1yLmRpc3Rjb2RlW3crKCh1JigxPDx2K3kpLTEpPj52KV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKHYrKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH11Pj4+PXYsbC09dixyLmJhY2srPXZ9aWYodT4+Pj1fLGwtPV8sci5iYWNrKz1fLDY0Jmcpe3QubXNnPVwiaW52YWxpZCBkaXN0YW5jZSBjb2RlXCIsci5tb2RlPTMwO2JyZWFrfXIub2Zmc2V0PWIsci5leHRyYT0xNSZnLHIubW9kZT0yNDtjYXNlIDI0OmlmKHIuZXh0cmEpe2Zvcih6PXIuZXh0cmE7bDx6Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9ci5vZmZzZXQrPXUmKDE8PHIuZXh0cmEpLTEsdT4+Pj1yLmV4dHJhLGwtPXIuZXh0cmEsci5iYWNrKz1yLmV4dHJhfWlmKHIub2Zmc2V0PnIuZG1heCl7dC5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFja1wiLHIubW9kZT0zMDticmVha31yLm1vZGU9MjU7Y2FzZSAyNTppZigwPT09aClicmVhayB0O2lmKGM9ZC1oLHIub2Zmc2V0PmMpe2lmKChjPXIub2Zmc2V0LWMpPnIud2hhdmUmJnIuc2FuZSl7dC5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFja1wiLHIubW9kZT0zMDticmVha31wPWM+ci53bmV4dD8oYy09ci53bmV4dCxyLndzaXplLWMpOnIud25leHQtYyxjPnIubGVuZ3RoJiYoYz1yLmxlbmd0aCksbT1yLndpbmRvd31lbHNlIG09bixwPWEtci5vZmZzZXQsYz1yLmxlbmd0aDtmb3IoaDxjJiYoYz1oKSxoLT1jLHIubGVuZ3RoLT1jO25bYSsrXT1tW3ArK10sLS1jOyk7MD09PXIubGVuZ3RoJiYoci5tb2RlPTIxKTticmVhaztjYXNlIDI2OmlmKDA9PT1oKWJyZWFrIHQ7blthKytdPXIubGVuZ3RoLGgtLSxyLm1vZGU9MjE7YnJlYWs7Y2FzZSAyNzppZihyLndyYXApe2Zvcig7bDwzMjspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHV8PWlbcysrXTw8bCxsKz04fWlmKGQtPWgsdC50b3RhbF9vdXQrPWQsci50b3RhbCs9ZCxkJiYodC5hZGxlcj1yLmNoZWNrPXIuZmxhZ3M/QihyLmNoZWNrLG4sZCxhLWQpOk8oci5jaGVjayxuLGQsYS1kKSksZD1oLChyLmZsYWdzP3U6TCh1KSkhPT1yLmNoZWNrKXt0Lm1zZz1cImluY29ycmVjdCBkYXRhIGNoZWNrXCIsci5tb2RlPTMwO2JyZWFrfWw9dT0wfXIubW9kZT0yODtjYXNlIDI4OmlmKHIud3JhcCYmci5mbGFncyl7Zm9yKDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9aWYodSE9PSg0Mjk0OTY3Mjk1JnIudG90YWwpKXt0Lm1zZz1cImluY29ycmVjdCBsZW5ndGggY2hlY2tcIixyLm1vZGU9MzA7YnJlYWt9bD11PTB9ci5tb2RlPTI5O2Nhc2UgMjk6eD0xO2JyZWFrIHQ7Y2FzZSAzMDp4PS0zO2JyZWFrIHQ7Y2FzZSAzMTpyZXR1cm4tNDtjYXNlIDMyOmRlZmF1bHQ6cmV0dXJuIFV9cmV0dXJuIHQubmV4dF9vdXQ9YSx0LmF2YWlsX291dD1oLHQubmV4dF9pbj1zLHQuYXZhaWxfaW49byxyLmhvbGQ9dSxyLmJpdHM9bCwoci53c2l6ZXx8ZCE9PXQuYXZhaWxfb3V0JiZyLm1vZGU8MzAmJihyLm1vZGU8Mjd8fDQhPT1lKSkmJloodCx0Lm91dHB1dCx0Lm5leHRfb3V0LGQtdC5hdmFpbF9vdXQpPyhyLm1vZGU9MzEsLTQpOihmLT10LmF2YWlsX2luLGQtPXQuYXZhaWxfb3V0LHQudG90YWxfaW4rPWYsdC50b3RhbF9vdXQrPWQsci50b3RhbCs9ZCxyLndyYXAmJmQmJih0LmFkbGVyPXIuY2hlY2s9ci5mbGFncz9CKHIuY2hlY2ssbixkLHQubmV4dF9vdXQtZCk6TyhyLmNoZWNrLG4sZCx0Lm5leHRfb3V0LWQpKSx0LmRhdGFfdHlwZT1yLmJpdHMrKHIubGFzdD82NDowKSsoMTI9PT1yLm1vZGU/MTI4OjApKygyMD09PXIubW9kZXx8MTU9PT1yLm1vZGU/MjU2OjApLCgwPT1mJiYwPT09ZHx8ND09PWUpJiZ4PT09TiYmKHg9LTUpLHgpfSxyLmluZmxhdGVFbmQ9ZnVuY3Rpb24odCl7aWYoIXR8fCF0LnN0YXRlKXJldHVybiBVO3ZhciBlPXQuc3RhdGU7cmV0dXJuIGUud2luZG93JiYoZS53aW5kb3c9bnVsbCksdC5zdGF0ZT1udWxsLE59LHIuaW5mbGF0ZUdldEhlYWRlcj1mdW5jdGlvbih0LGUpe3ZhciByO3JldHVybiB0JiZ0LnN0YXRlPzA9PSgyJihyPXQuc3RhdGUpLndyYXApP1U6KChyLmhlYWQ9ZSkuZG9uZT0hMSxOKTpVfSxyLmluZmxhdGVTZXREaWN0aW9uYXJ5PWZ1bmN0aW9uKHQsZSl7dmFyIHIsaT1lLmxlbmd0aDtyZXR1cm4gdCYmdC5zdGF0ZT8wIT09KHI9dC5zdGF0ZSkud3JhcCYmMTEhPT1yLm1vZGU/VToxMT09PXIubW9kZSYmTygxLGUsaSwwKSE9PXIuY2hlY2s/LTM6Wih0LGUsaSxpKT8oci5tb2RlPTMxLC00KTooci5oYXZlZGljdD0xLE4pOlV9LHIuaW5mbGF0ZUluZm89XCJwYWtvIGluZmxhdGUgKGZyb20gTm9kZWNhIHByb2plY3QpXCJ9LHtcIi4uL3V0aWxzL2NvbW1vblwiOjQxLFwiLi9hZGxlcjMyXCI6NDMsXCIuL2NyYzMyXCI6NDUsXCIuL2luZmZhc3RcIjo0OCxcIi4vaW5mdHJlZXNcIjo1MH1dLDUwOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIEQ9dChcIi4uL3V0aWxzL2NvbW1vblwiKSxGPVszLDQsNSw2LDcsOCw5LDEwLDExLDEzLDE1LDE3LDE5LDIzLDI3LDMxLDM1LDQzLDUxLDU5LDY3LDgzLDk5LDExNSwxMzEsMTYzLDE5NSwyMjcsMjU4LDAsMF0sTj1bMTYsMTYsMTYsMTYsMTYsMTYsMTYsMTYsMTcsMTcsMTcsMTcsMTgsMTgsMTgsMTgsMTksMTksMTksMTksMjAsMjAsMjAsMjAsMjEsMjEsMjEsMjEsMTYsNzIsNzhdLFU9WzEsMiwzLDQsNSw3LDksMTMsMTcsMjUsMzMsNDksNjUsOTcsMTI5LDE5MywyNTcsMzg1LDUxMyw3NjksMTAyNSwxNTM3LDIwNDksMzA3Myw0MDk3LDYxNDUsODE5MywxMjI4OSwxNjM4NSwyNDU3NywwLDBdLFA9WzE2LDE2LDE2LDE2LDE3LDE3LDE4LDE4LDE5LDE5LDIwLDIwLDIxLDIxLDIyLDIyLDIzLDIzLDI0LDI0LDI1LDI1LDI2LDI2LDI3LDI3LDI4LDI4LDI5LDI5LDY0LDY0XTtlLmV4cG9ydHM9ZnVuY3Rpb24odCxlLHIsaSxuLHMsYSxvKXt2YXIgaCx1LGwsZixkLGMscCxtLF8sZz1vLmJpdHMsYj0wLHY9MCx5PTAsdz0wLGs9MCx4PTAsUz0wLHo9MCxDPTAsRT0wLEE9bnVsbCxJPTAsTz1uZXcgRC5CdWYxNigxNiksQj1uZXcgRC5CdWYxNigxNiksUj1udWxsLFQ9MDtmb3IoYj0wO2I8PTE1O2IrKylPW2JdPTA7Zm9yKHY9MDt2PGk7disrKU9bZVtyK3ZdXSsrO2ZvcihrPWcsdz0xNTsxPD13JiYwPT09T1t3XTt3LS0pO2lmKHc8ayYmKGs9dyksMD09PXcpcmV0dXJuIG5bcysrXT0yMDk3MTUyMCxuW3MrK109MjA5NzE1MjAsby5iaXRzPTEsMDtmb3IoeT0xO3k8dyYmMD09PU9beV07eSsrKTtmb3Ioazx5JiYoaz15KSxiPXo9MTtiPD0xNTtiKyspaWYoejw8PTEsKHotPU9bYl0pPDApcmV0dXJuLTE7aWYoMDx6JiYoMD09PXR8fDEhPT13KSlyZXR1cm4tMTtmb3IoQlsxXT0wLGI9MTtiPDE1O2IrKylCW2IrMV09QltiXStPW2JdO2Zvcih2PTA7djxpO3YrKykwIT09ZVtyK3ZdJiYoYVtCW2Vbcit2XV0rK109dik7aWYoYz0wPT09dD8oQT1SPWEsMTkpOjE9PT10PyhBPUYsSS09MjU3LFI9TixULT0yNTcsMjU2KTooQT1VLFI9UCwtMSksYj15LGQ9cyxTPXY9RT0wLGw9LTEsZj0oQz0xPDwoeD1rKSktMSwxPT09dCYmODUyPEN8fDI9PT10JiY1OTI8QylyZXR1cm4gMTtmb3IoOzspe2ZvcihwPWItUyxfPWFbdl08Yz8obT0wLGFbdl0pOmFbdl0+Yz8obT1SW1QrYVt2XV0sQVtJK2Fbdl1dKToobT05NiwwKSxoPTE8PGItUyx5PXU9MTw8eDtuW2QrKEU+PlMpKyh1LT1oKV09cDw8MjR8bTw8MTZ8X3wwLDAhPT11Oyk7Zm9yKGg9MTw8Yi0xO0UmaDspaD4+PTE7aWYoMCE9PWg/KEUmPWgtMSxFKz1oKTpFPTAsdisrLDA9PS0tT1tiXSl7aWYoYj09PXcpYnJlYWs7Yj1lW3IrYVt2XV19aWYoazxiJiYoRSZmKSE9PWwpe2ZvcigwPT09UyYmKFM9ayksZCs9eSx6PTE8PCh4PWItUyk7eCtTPHcmJiEoKHotPU9beCtTXSk8PTApOyl4Kyssejw8PTE7aWYoQys9MTw8eCwxPT09dCYmODUyPEN8fDI9PT10JiY1OTI8QylyZXR1cm4gMTtuW2w9RSZmXT1rPDwyNHx4PDwxNnxkLXN8MH19cmV0dXJuIDAhPT1FJiYobltkK0VdPWItUzw8MjR8NjQ8PDE2fDApLG8uYml0cz1rLDB9fSx7XCIuLi91dGlscy9jb21tb25cIjo0MX1dLDUxOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPXsyOlwibmVlZCBkaWN0aW9uYXJ5XCIsMTpcInN0cmVhbSBlbmRcIiwwOlwiXCIsXCItMVwiOlwiZmlsZSBlcnJvclwiLFwiLTJcIjpcInN0cmVhbSBlcnJvclwiLFwiLTNcIjpcImRhdGEgZXJyb3JcIixcIi00XCI6XCJpbnN1ZmZpY2llbnQgbWVtb3J5XCIsXCItNVwiOlwiYnVmZmVyIGVycm9yXCIsXCItNlwiOlwiaW5jb21wYXRpYmxlIHZlcnNpb25cIn19LHt9XSw1MjpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXQoXCIuLi91dGlscy9jb21tb25cIiksbz0wLGg9MTtmdW5jdGlvbiBpKHQpe2Zvcih2YXIgZT10Lmxlbmd0aDswPD0tLWU7KXRbZV09MH12YXIgcz0wLGE9MjksdT0yNTYsbD11KzErYSxmPTMwLGQ9MTksXz0yKmwrMSxnPTE1LGM9MTYscD03LG09MjU2LGI9MTYsdj0xNyx5PTE4LHc9WzAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDIsMiwyLDIsMywzLDMsMyw0LDQsNCw0LDUsNSw1LDUsMF0saz1bMCwwLDAsMCwxLDEsMiwyLDMsMyw0LDQsNSw1LDYsNiw3LDcsOCw4LDksOSwxMCwxMCwxMSwxMSwxMiwxMiwxMywxM10seD1bMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwyLDMsN10sUz1bMTYsMTcsMTgsMCw4LDcsOSw2LDEwLDUsMTEsNCwxMiwzLDEzLDIsMTQsMSwxNV0sej1uZXcgQXJyYXkoMioobCsyKSk7aSh6KTt2YXIgQz1uZXcgQXJyYXkoMipmKTtpKEMpO3ZhciBFPW5ldyBBcnJheSg1MTIpO2koRSk7dmFyIEE9bmV3IEFycmF5KDI1Nik7aShBKTt2YXIgST1uZXcgQXJyYXkoYSk7aShJKTt2YXIgTyxCLFIsVD1uZXcgQXJyYXkoZik7ZnVuY3Rpb24gRCh0LGUscixpLG4pe3RoaXMuc3RhdGljX3RyZWU9dCx0aGlzLmV4dHJhX2JpdHM9ZSx0aGlzLmV4dHJhX2Jhc2U9cix0aGlzLmVsZW1zPWksdGhpcy5tYXhfbGVuZ3RoPW4sdGhpcy5oYXNfc3RyZWU9dCYmdC5sZW5ndGh9ZnVuY3Rpb24gRih0LGUpe3RoaXMuZHluX3RyZWU9dCx0aGlzLm1heF9jb2RlPTAsdGhpcy5zdGF0X2Rlc2M9ZX1mdW5jdGlvbiBOKHQpe3JldHVybiB0PDI1Nj9FW3RdOkVbMjU2Kyh0Pj4+NyldfWZ1bmN0aW9uIFUodCxlKXt0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT0yNTUmZSx0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT1lPj4+OCYyNTV9ZnVuY3Rpb24gUCh0LGUscil7dC5iaV92YWxpZD5jLXI/KHQuYmlfYnVmfD1lPDx0LmJpX3ZhbGlkJjY1NTM1LFUodCx0LmJpX2J1ZiksdC5iaV9idWY9ZT4+Yy10LmJpX3ZhbGlkLHQuYmlfdmFsaWQrPXItYyk6KHQuYmlfYnVmfD1lPDx0LmJpX3ZhbGlkJjY1NTM1LHQuYmlfdmFsaWQrPXIpfWZ1bmN0aW9uIEwodCxlLHIpe1AodCxyWzIqZV0sclsyKmUrMV0pfWZ1bmN0aW9uIGoodCxlKXtmb3IodmFyIHI9MDtyfD0xJnQsdD4+Pj0xLHI8PD0xLDA8LS1lOyk7cmV0dXJuIHI+Pj4xfWZ1bmN0aW9uIFoodCxlLHIpe3ZhciBpLG4scz1uZXcgQXJyYXkoZysxKSxhPTA7Zm9yKGk9MTtpPD1nO2krKylzW2ldPWE9YStyW2ktMV08PDE7Zm9yKG49MDtuPD1lO24rKyl7dmFyIG89dFsyKm4rMV07MCE9PW8mJih0WzIqbl09aihzW29dKyssbykpfX1mdW5jdGlvbiBXKHQpe3ZhciBlO2ZvcihlPTA7ZTxsO2UrKyl0LmR5bl9sdHJlZVsyKmVdPTA7Zm9yKGU9MDtlPGY7ZSsrKXQuZHluX2R0cmVlWzIqZV09MDtmb3IoZT0wO2U8ZDtlKyspdC5ibF90cmVlWzIqZV09MDt0LmR5bl9sdHJlZVsyKm1dPTEsdC5vcHRfbGVuPXQuc3RhdGljX2xlbj0wLHQubGFzdF9saXQ9dC5tYXRjaGVzPTB9ZnVuY3Rpb24gTSh0KXs4PHQuYmlfdmFsaWQ/VSh0LHQuYmlfYnVmKTowPHQuYmlfdmFsaWQmJih0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT10LmJpX2J1ZiksdC5iaV9idWY9MCx0LmJpX3ZhbGlkPTB9ZnVuY3Rpb24gSCh0LGUscixpKXt2YXIgbj0yKmUscz0yKnI7cmV0dXJuIHRbbl08dFtzXXx8dFtuXT09PXRbc10mJmlbZV08PWlbcl19ZnVuY3Rpb24gRyh0LGUscil7Zm9yKHZhciBpPXQuaGVhcFtyXSxuPXI8PDE7bjw9dC5oZWFwX2xlbiYmKG48dC5oZWFwX2xlbiYmSChlLHQuaGVhcFtuKzFdLHQuaGVhcFtuXSx0LmRlcHRoKSYmbisrLCFIKGUsaSx0LmhlYXBbbl0sdC5kZXB0aCkpOyl0LmhlYXBbcl09dC5oZWFwW25dLHI9bixuPDw9MTt0LmhlYXBbcl09aX1mdW5jdGlvbiBLKHQsZSxyKXt2YXIgaSxuLHMsYSxvPTA7aWYoMCE9PXQubGFzdF9saXQpZm9yKDtpPXQucGVuZGluZ19idWZbdC5kX2J1ZisyKm9dPDw4fHQucGVuZGluZ19idWZbdC5kX2J1ZisyKm8rMV0sbj10LnBlbmRpbmdfYnVmW3QubF9idWYrb10sbysrLDA9PT1pP0wodCxuLGUpOihMKHQsKHM9QVtuXSkrdSsxLGUpLDAhPT0oYT13W3NdKSYmUCh0LG4tPUlbc10sYSksTCh0LHM9TigtLWkpLHIpLDAhPT0oYT1rW3NdKSYmUCh0LGktPVRbc10sYSkpLG88dC5sYXN0X2xpdDspO0wodCxtLGUpfWZ1bmN0aW9uIFkodCxlKXt2YXIgcixpLG4scz1lLmR5bl90cmVlLGE9ZS5zdGF0X2Rlc2Muc3RhdGljX3RyZWUsbz1lLnN0YXRfZGVzYy5oYXNfc3RyZWUsaD1lLnN0YXRfZGVzYy5lbGVtcyx1PS0xO2Zvcih0LmhlYXBfbGVuPTAsdC5oZWFwX21heD1fLHI9MDtyPGg7cisrKTAhPT1zWzIqcl0/KHQuaGVhcFsrK3QuaGVhcF9sZW5dPXU9cix0LmRlcHRoW3JdPTApOnNbMipyKzFdPTA7Zm9yKDt0LmhlYXBfbGVuPDI7KXNbMioobj10LmhlYXBbKyt0LmhlYXBfbGVuXT11PDI/Kyt1OjApXT0xLHQuZGVwdGhbbl09MCx0Lm9wdF9sZW4tLSxvJiYodC5zdGF0aWNfbGVuLT1hWzIqbisxXSk7Zm9yKGUubWF4X2NvZGU9dSxyPXQuaGVhcF9sZW4+PjE7MTw9cjtyLS0pRyh0LHMscik7Zm9yKG49aDtyPXQuaGVhcFsxXSx0LmhlYXBbMV09dC5oZWFwW3QuaGVhcF9sZW4tLV0sRyh0LHMsMSksaT10LmhlYXBbMV0sdC5oZWFwWy0tdC5oZWFwX21heF09cix0LmhlYXBbLS10LmhlYXBfbWF4XT1pLHNbMipuXT1zWzIqcl0rc1syKmldLHQuZGVwdGhbbl09KHQuZGVwdGhbcl0+PXQuZGVwdGhbaV0/dC5kZXB0aFtyXTp0LmRlcHRoW2ldKSsxLHNbMipyKzFdPXNbMippKzFdPW4sdC5oZWFwWzFdPW4rKyxHKHQscywxKSwyPD10LmhlYXBfbGVuOyk7dC5oZWFwWy0tdC5oZWFwX21heF09dC5oZWFwWzFdLGZ1bmN0aW9uKHQsZSl7dmFyIHIsaSxuLHMsYSxvLGg9ZS5keW5fdHJlZSx1PWUubWF4X2NvZGUsbD1lLnN0YXRfZGVzYy5zdGF0aWNfdHJlZSxmPWUuc3RhdF9kZXNjLmhhc19zdHJlZSxkPWUuc3RhdF9kZXNjLmV4dHJhX2JpdHMsYz1lLnN0YXRfZGVzYy5leHRyYV9iYXNlLHA9ZS5zdGF0X2Rlc2MubWF4X2xlbmd0aCxtPTA7Zm9yKHM9MDtzPD1nO3MrKyl0LmJsX2NvdW50W3NdPTA7Zm9yKGhbMip0LmhlYXBbdC5oZWFwX21heF0rMV09MCxyPXQuaGVhcF9tYXgrMTtyPF87cisrKXA8KHM9aFsyKmhbMiooaT10LmhlYXBbcl0pKzFdKzFdKzEpJiYocz1wLG0rKyksaFsyKmkrMV09cyx1PGl8fCh0LmJsX2NvdW50W3NdKyssYT0wLGM8PWkmJihhPWRbaS1jXSksbz1oWzIqaV0sdC5vcHRfbGVuKz1vKihzK2EpLGYmJih0LnN0YXRpY19sZW4rPW8qKGxbMippKzFdK2EpKSk7aWYoMCE9PW0pe2Rve2ZvcihzPXAtMTswPT09dC5ibF9jb3VudFtzXTspcy0tO3QuYmxfY291bnRbc10tLSx0LmJsX2NvdW50W3MrMV0rPTIsdC5ibF9jb3VudFtwXS0tLG0tPTJ9d2hpbGUoMDxtKTtmb3Iocz1wOzAhPT1zO3MtLSlmb3IoaT10LmJsX2NvdW50W3NdOzAhPT1pOyl1PChuPXQuaGVhcFstLXJdKXx8KGhbMipuKzFdIT09cyYmKHQub3B0X2xlbis9KHMtaFsyKm4rMV0pKmhbMipuXSxoWzIqbisxXT1zKSxpLS0pfX0odCxlKSxaKHMsdSx0LmJsX2NvdW50KX1mdW5jdGlvbiBYKHQsZSxyKXt2YXIgaSxuLHM9LTEsYT1lWzFdLG89MCxoPTcsdT00O2ZvcigwPT09YSYmKGg9MTM4LHU9MyksZVsyKihyKzEpKzFdPTY1NTM1LGk9MDtpPD1yO2krKyluPWEsYT1lWzIqKGkrMSkrMV0sKytvPGgmJm49PT1hfHwobzx1P3QuYmxfdHJlZVsyKm5dKz1vOjAhPT1uPyhuIT09cyYmdC5ibF90cmVlWzIqbl0rKyx0LmJsX3RyZWVbMipiXSsrKTpvPD0xMD90LmJsX3RyZWVbMip2XSsrOnQuYmxfdHJlZVsyKnldKysscz1uLHU9KG89MCk9PT1hPyhoPTEzOCwzKTpuPT09YT8oaD02LDMpOihoPTcsNCkpfWZ1bmN0aW9uIFYodCxlLHIpe3ZhciBpLG4scz0tMSxhPWVbMV0sbz0wLGg9Nyx1PTQ7Zm9yKDA9PT1hJiYoaD0xMzgsdT0zKSxpPTA7aTw9cjtpKyspaWYobj1hLGE9ZVsyKihpKzEpKzFdLCEoKytvPGgmJm49PT1hKSl7aWYobzx1KWZvcig7TCh0LG4sdC5ibF90cmVlKSwwIT0tLW87KTtlbHNlIDAhPT1uPyhuIT09cyYmKEwodCxuLHQuYmxfdHJlZSksby0tKSxMKHQsYix0LmJsX3RyZWUpLFAodCxvLTMsMikpOm88PTEwPyhMKHQsdix0LmJsX3RyZWUpLFAodCxvLTMsMykpOihMKHQseSx0LmJsX3RyZWUpLFAodCxvLTExLDcpKTtzPW4sdT0obz0wKT09PWE/KGg9MTM4LDMpOm49PT1hPyhoPTYsMyk6KGg9Nyw0KX19aShUKTt2YXIgcT0hMTtmdW5jdGlvbiBKKHQsZSxyLGkpe1AodCwoczw8MSkrKGk/MTowKSwzKSxmdW5jdGlvbih0LGUscixpKXtNKHQpLGkmJihVKHQsciksVSh0LH5yKSksbi5hcnJheVNldCh0LnBlbmRpbmdfYnVmLHQud2luZG93LGUscix0LnBlbmRpbmcpLHQucGVuZGluZys9cn0odCxlLHIsITApfXIuX3RyX2luaXQ9ZnVuY3Rpb24odCl7cXx8KGZ1bmN0aW9uKCl7dmFyIHQsZSxyLGksbixzPW5ldyBBcnJheShnKzEpO2ZvcihpPXI9MDtpPGEtMTtpKyspZm9yKElbaV09cix0PTA7dDwxPDx3W2ldO3QrKylBW3IrK109aTtmb3IoQVtyLTFdPWksaT1uPTA7aTwxNjtpKyspZm9yKFRbaV09bix0PTA7dDwxPDxrW2ldO3QrKylFW24rK109aTtmb3Iobj4+PTc7aTxmO2krKylmb3IoVFtpXT1uPDw3LHQ9MDt0PDE8PGtbaV0tNzt0KyspRVsyNTYrbisrXT1pO2ZvcihlPTA7ZTw9ZztlKyspc1tlXT0wO2Zvcih0PTA7dDw9MTQzOyl6WzIqdCsxXT04LHQrKyxzWzhdKys7Zm9yKDt0PD0yNTU7KXpbMip0KzFdPTksdCsrLHNbOV0rKztmb3IoO3Q8PTI3OTspelsyKnQrMV09Nyx0Kyssc1s3XSsrO2Zvcig7dDw9Mjg3Oyl6WzIqdCsxXT04LHQrKyxzWzhdKys7Zm9yKFooeixsKzEscyksdD0wO3Q8Zjt0KyspQ1syKnQrMV09NSxDWzIqdF09aih0LDUpO089bmV3IEQoeix3LHUrMSxsLGcpLEI9bmV3IEQoQyxrLDAsZixnKSxSPW5ldyBEKG5ldyBBcnJheSgwKSx4LDAsZCxwKX0oKSxxPSEwKSx0LmxfZGVzYz1uZXcgRih0LmR5bl9sdHJlZSxPKSx0LmRfZGVzYz1uZXcgRih0LmR5bl9kdHJlZSxCKSx0LmJsX2Rlc2M9bmV3IEYodC5ibF90cmVlLFIpLHQuYmlfYnVmPTAsdC5iaV92YWxpZD0wLFcodCl9LHIuX3RyX3N0b3JlZF9ibG9jaz1KLHIuX3RyX2ZsdXNoX2Jsb2NrPWZ1bmN0aW9uKHQsZSxyLGkpe3ZhciBuLHMsYT0wOzA8dC5sZXZlbD8oMj09PXQuc3RybS5kYXRhX3R5cGUmJih0LnN0cm0uZGF0YV90eXBlPWZ1bmN0aW9uKHQpe3ZhciBlLHI9NDA5MzYyNDQ0Nztmb3IoZT0wO2U8PTMxO2UrKyxyPj4+PTEpaWYoMSZyJiYwIT09dC5keW5fbHRyZWVbMiplXSlyZXR1cm4gbztpZigwIT09dC5keW5fbHRyZWVbMThdfHwwIT09dC5keW5fbHRyZWVbMjBdfHwwIT09dC5keW5fbHRyZWVbMjZdKXJldHVybiBoO2ZvcihlPTMyO2U8dTtlKyspaWYoMCE9PXQuZHluX2x0cmVlWzIqZV0pcmV0dXJuIGg7cmV0dXJuIG99KHQpKSxZKHQsdC5sX2Rlc2MpLFkodCx0LmRfZGVzYyksYT1mdW5jdGlvbih0KXt2YXIgZTtmb3IoWCh0LHQuZHluX2x0cmVlLHQubF9kZXNjLm1heF9jb2RlKSxYKHQsdC5keW5fZHRyZWUsdC5kX2Rlc2MubWF4X2NvZGUpLFkodCx0LmJsX2Rlc2MpLGU9ZC0xOzM8PWUmJjA9PT10LmJsX3RyZWVbMipTW2VdKzFdO2UtLSk7cmV0dXJuIHQub3B0X2xlbis9MyooZSsxKSs1KzUrNCxlfSh0KSxuPXQub3B0X2xlbiszKzc+Pj4zLChzPXQuc3RhdGljX2xlbiszKzc+Pj4zKTw9biYmKG49cykpOm49cz1yKzUscis0PD1uJiYtMSE9PWU/Sih0LGUscixpKTo0PT09dC5zdHJhdGVneXx8cz09PW4/KFAodCwyKyhpPzE6MCksMyksSyh0LHosQykpOihQKHQsNCsoaT8xOjApLDMpLGZ1bmN0aW9uKHQsZSxyLGkpe3ZhciBuO2ZvcihQKHQsZS0yNTcsNSksUCh0LHItMSw1KSxQKHQsaS00LDQpLG49MDtuPGk7bisrKVAodCx0LmJsX3RyZWVbMipTW25dKzFdLDMpO1YodCx0LmR5bl9sdHJlZSxlLTEpLFYodCx0LmR5bl9kdHJlZSxyLTEpfSh0LHQubF9kZXNjLm1heF9jb2RlKzEsdC5kX2Rlc2MubWF4X2NvZGUrMSxhKzEpLEsodCx0LmR5bl9sdHJlZSx0LmR5bl9kdHJlZSkpLFcodCksaSYmTSh0KX0sci5fdHJfdGFsbHk9ZnVuY3Rpb24odCxlLHIpe3JldHVybiB0LnBlbmRpbmdfYnVmW3QuZF9idWYrMip0Lmxhc3RfbGl0XT1lPj4+OCYyNTUsdC5wZW5kaW5nX2J1Zlt0LmRfYnVmKzIqdC5sYXN0X2xpdCsxXT0yNTUmZSx0LnBlbmRpbmdfYnVmW3QubF9idWYrdC5sYXN0X2xpdF09MjU1JnIsdC5sYXN0X2xpdCsrLDA9PT1lP3QuZHluX2x0cmVlWzIqcl0rKzoodC5tYXRjaGVzKyssZS0tLHQuZHluX2x0cmVlWzIqKEFbcl0rdSsxKV0rKyx0LmR5bl9kdHJlZVsyKk4oZSldKyspLHQubGFzdF9saXQ9PT10LmxpdF9idWZzaXplLTF9LHIuX3RyX2FsaWduPWZ1bmN0aW9uKHQpe1AodCwyLDMpLEwodCxtLHopLGZ1bmN0aW9uKHQpezE2PT09dC5iaV92YWxpZD8oVSh0LHQuYmlfYnVmKSx0LmJpX2J1Zj0wLHQuYmlfdmFsaWQ9MCk6ODw9dC5iaV92YWxpZCYmKHQucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPTI1NSZ0LmJpX2J1Zix0LmJpX2J1Zj4+PTgsdC5iaV92YWxpZC09OCl9KHQpfX0se1wiLi4vdXRpbHMvY29tbW9uXCI6NDF9XSw1MzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe3RoaXMuaW5wdXQ9bnVsbCx0aGlzLm5leHRfaW49MCx0aGlzLmF2YWlsX2luPTAsdGhpcy50b3RhbF9pbj0wLHRoaXMub3V0cHV0PW51bGwsdGhpcy5uZXh0X291dD0wLHRoaXMuYXZhaWxfb3V0PTAsdGhpcy50b3RhbF9vdXQ9MCx0aGlzLm1zZz1cIlwiLHRoaXMuc3RhdGU9bnVsbCx0aGlzLmRhdGFfdHlwZT0yLHRoaXMuYWRsZXI9MH19LHt9XSw1NDpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRJbW1lZGlhdGU/c2V0SW1tZWRpYXRlOmZ1bmN0aW9uKCl7dmFyIHQ9W10uc2xpY2UuYXBwbHkoYXJndW1lbnRzKTt0LnNwbGljZSgxLDAsMCksc2V0VGltZW91dC5hcHBseShudWxsLHQpfX0se31dfSx7fSxbMTBdKSgxMCl9KTsiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvdHBhY2soYm94ZXMpIHtcblxuICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBib3ggYXJlYSBhbmQgbWF4aW11bSBib3ggd2lkdGhcbiAgICBsZXQgYXJlYSA9IDA7XG4gICAgbGV0IG1heFdpZHRoID0gMDtcblxuICAgIGZvciAoY29uc3QgYm94IG9mIGJveGVzKSB7XG4gICAgICAgIGFyZWEgKz0gYm94LncgKiBib3guaDtcbiAgICAgICAgbWF4V2lkdGggPSBNYXRoLm1heChtYXhXaWR0aCwgYm94LncpO1xuICAgIH1cblxuICAgIC8vIHNvcnQgdGhlIGJveGVzIGZvciBpbnNlcnRpb24gYnkgaGVpZ2h0LCBkZXNjZW5kaW5nXG4gICAgYm94ZXMuc29ydCgoYSwgYikgPT4gYi5oIC0gYS5oKTtcblxuICAgIC8vIGFpbSBmb3IgYSBzcXVhcmlzaCByZXN1bHRpbmcgY29udGFpbmVyLFxuICAgIC8vIHNsaWdodGx5IGFkanVzdGVkIGZvciBzdWItMTAwJSBzcGFjZSB1dGlsaXphdGlvblxuICAgIGNvbnN0IHN0YXJ0V2lkdGggPSBNYXRoLm1heChNYXRoLmNlaWwoTWF0aC5zcXJ0KGFyZWEgLyAwLjk1KSksIG1heFdpZHRoKTtcblxuICAgIC8vIHN0YXJ0IHdpdGggYSBzaW5nbGUgZW1wdHkgc3BhY2UsIHVuYm91bmRlZCBhdCB0aGUgYm90dG9tXG4gICAgY29uc3Qgc3BhY2VzID0gW3t4OiAwLCB5OiAwLCB3OiBzdGFydFdpZHRoLCBoOiBJbmZpbml0eX1dO1xuXG4gICAgbGV0IHdpZHRoID0gMDtcbiAgICBsZXQgaGVpZ2h0ID0gMDtcblxuICAgIGZvciAoY29uc3QgYm94IG9mIGJveGVzKSB7XG4gICAgICAgIC8vIGxvb2sgdGhyb3VnaCBzcGFjZXMgYmFja3dhcmRzIHNvIHRoYXQgd2UgY2hlY2sgc21hbGxlciBzcGFjZXMgZmlyc3RcbiAgICAgICAgZm9yIChsZXQgaSA9IHNwYWNlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3Qgc3BhY2UgPSBzcGFjZXNbaV07XG5cbiAgICAgICAgICAgIC8vIGxvb2sgZm9yIGVtcHR5IHNwYWNlcyB0aGF0IGNhbiBhY2NvbW1vZGF0ZSB0aGUgY3VycmVudCBib3hcbiAgICAgICAgICAgIGlmIChib3gudyA+IHNwYWNlLncgfHwgYm94LmggPiBzcGFjZS5oKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gZm91bmQgdGhlIHNwYWNlOyBhZGQgdGhlIGJveCB0byBpdHMgdG9wLWxlZnQgY29ybmVyXG4gICAgICAgICAgICAvLyB8LS0tLS0tLXwtLS0tLS0tfFxuICAgICAgICAgICAgLy8gfCAgYm94ICB8ICAgICAgIHxcbiAgICAgICAgICAgIC8vIHxfX19fX19ffCAgICAgICB8XG4gICAgICAgICAgICAvLyB8ICAgICAgICAgc3BhY2UgfFxuICAgICAgICAgICAgLy8gfF9fX19fX19fX19fX19fX3xcbiAgICAgICAgICAgIGJveC54ID0gc3BhY2UueDtcbiAgICAgICAgICAgIGJveC55ID0gc3BhY2UueTtcblxuICAgICAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCBib3gueSArIGJveC5oKTtcbiAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGJveC54ICsgYm94LncpO1xuXG4gICAgICAgICAgICBpZiAoYm94LncgPT09IHNwYWNlLncgJiYgYm94LmggPT09IHNwYWNlLmgpIHtcbiAgICAgICAgICAgICAgICAvLyBzcGFjZSBtYXRjaGVzIHRoZSBib3ggZXhhY3RseTsgcmVtb3ZlIGl0XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IHNwYWNlcy5wb3AoKTtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHNwYWNlcy5sZW5ndGgpIHNwYWNlc1tpXSA9IGxhc3Q7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm94LmggPT09IHNwYWNlLmgpIHtcbiAgICAgICAgICAgICAgICAvLyBzcGFjZSBtYXRjaGVzIHRoZSBib3ggaGVpZ2h0OyB1cGRhdGUgaXQgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgICAgICAvLyB8LS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gICAgICAgICAgICAgICAgLy8gfCAgYm94ICB8IHVwZGF0ZWQgc3BhY2UgfFxuICAgICAgICAgICAgICAgIC8vIHxfX19fX19ffF9fX19fX19fX19fX19fX3xcbiAgICAgICAgICAgICAgICBzcGFjZS54ICs9IGJveC53O1xuICAgICAgICAgICAgICAgIHNwYWNlLncgLT0gYm94Lnc7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm94LncgPT09IHNwYWNlLncpIHtcbiAgICAgICAgICAgICAgICAvLyBzcGFjZSBtYXRjaGVzIHRoZSBib3ggd2lkdGg7IHVwZGF0ZSBpdCBhY2NvcmRpbmdseVxuICAgICAgICAgICAgICAgIC8vIHwtLS0tLS0tLS0tLS0tLS18XG4gICAgICAgICAgICAgICAgLy8gfCAgICAgIGJveCAgICAgIHxcbiAgICAgICAgICAgICAgICAvLyB8X19fX19fX19fX19fX19ffFxuICAgICAgICAgICAgICAgIC8vIHwgdXBkYXRlZCBzcGFjZSB8XG4gICAgICAgICAgICAgICAgLy8gfF9fX19fX19fX19fX19fX3xcbiAgICAgICAgICAgICAgICBzcGFjZS55ICs9IGJveC5oO1xuICAgICAgICAgICAgICAgIHNwYWNlLmggLT0gYm94Lmg7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZSBib3ggc3BsaXRzIHRoZSBzcGFjZSBpbnRvIHR3byBzcGFjZXNcbiAgICAgICAgICAgICAgICAvLyB8LS0tLS0tLXwtLS0tLS0tLS0tLXxcbiAgICAgICAgICAgICAgICAvLyB8ICBib3ggIHwgbmV3IHNwYWNlIHxcbiAgICAgICAgICAgICAgICAvLyB8X19fX19fX3xfX19fX19fX19fX3xcbiAgICAgICAgICAgICAgICAvLyB8IHVwZGF0ZWQgc3BhY2UgICAgIHxcbiAgICAgICAgICAgICAgICAvLyB8X19fX19fX19fX19fX19fX19fX3xcbiAgICAgICAgICAgICAgICBzcGFjZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IHNwYWNlLnggKyBib3gudyxcbiAgICAgICAgICAgICAgICAgICAgeTogc3BhY2UueSxcbiAgICAgICAgICAgICAgICAgICAgdzogc3BhY2UudyAtIGJveC53LFxuICAgICAgICAgICAgICAgICAgICBoOiBib3guaFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNwYWNlLnkgKz0gYm94Lmg7XG4gICAgICAgICAgICAgICAgc3BhY2UuaCAtPSBib3guaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdzogd2lkdGgsIC8vIGNvbnRhaW5lciB3aWR0aFxuICAgICAgICBoOiBoZWlnaHQsIC8vIGNvbnRhaW5lciBoZWlnaHRcbiAgICAgICAgZmlsbDogKGFyZWEgLyAod2lkdGggKiBoZWlnaHQpKSB8fCAwIC8vIHNwYWNlIHV0aWxpemF0aW9uXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IEJpdG1hcCB9IGZyb20gXCIuL0JpdG1hcFwiO1xuaW1wb3J0IHsgRm9udCB9IGZyb20gXCIuL0ZvbnRcIjtcblxuZXhwb3J0IGNvbnN0IFdISVRFOiBzdHJpbmcgPSBcIndoaXRlXCI7XG5leHBvcnQgY29uc3QgQkxBQ0s6IHN0cmluZyA9IFwiYmxhY2tcIjtcbmV4cG9ydCBjb25zdCBSRUQ6IHN0cmluZyA9IFwicmVkXCI7XG5leHBvcnQgY29uc3QgR1JFRU46IHN0cmluZyA9IFwiZ3JlZW5cIjtcbmV4cG9ydCBjb25zdCBCTFVFOiBzdHJpbmcgPSBcImJsdWVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBPZmZzY3JlZW4ge1xuICBnZXRXaWR0aCgpOiBudW1iZXI7XG5cbiAgZ2V0SGVpZ2h0KCk6IG51bWJlcjtcblxuICBzZXREaW1lbnNpb24od2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyYXBoaWNzIHtcbiAgaW5pdFJlc291cmNlT25Mb2FkZWQoKTogdm9pZDtcblxuICBuZXdSZXNvdXJjZUxvYWRlZCgpOiB2b2lkO1xuXG4gIGdldCBjYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgZ2V0RXJyb3IoKTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIGFwcGx5Rm9udCgpOiB2b2lkO1xuXG4gIHNtb290aCgpOiB2b2lkO1xuICBcbiAgY29weSgpOiBCaXRtYXA7XG5cbiAgZ2V0T2Zmc2NyZWVuKCk6IE9mZnNjcmVlbiB8IG51bGw7XG4gIFxuICBjbGlwKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQ7XG5cbiAgY3JlYXRlT2Zmc2NyZWVuKCk6IE9mZnNjcmVlbjtcblxuICBkcmF3VG9PZmZzY3JlZW4oc2NyZWVuOiBPZmZzY3JlZW4gfCBudWxsKTogdm9pZDtcblxuICBkcmF3T2Zmc2NyZWVuKHNjcmVlbjogT2Zmc2NyZWVuKTogdm9pZDtcblxuICBkcmF3U2NhbGVkT2Zmc2NyZWVuKHNjcmVlbjogT2Zmc2NyZWVuLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkO1xuXG4gIGZpbGxSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29sOiBzdHJpbmcpOiB2b2lkO1xuXG4gIGZpbGxDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZyk6IHZvaWQ7XG5cbiAgZHJhd0NpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNvbDogc3RyaW5nLCB3aWR0aDogbnVtYmVyKTogdm9pZDtcblxuICBzZXRMaW5lRGFzaChzZWdtZW50czogbnVtYmVyW10pOiB2b2lkO1xuICBcbiAgZHJhd0xpbmUoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgY29sOiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyKTogdm9pZDtcblxuICBkcmF3Qml0bWFwKHg6IG51bWJlciwgeTogbnVtYmVyLCBiaXRtYXA6IEJpdG1hcCk6IHZvaWQ7XG5cbiAgZHJhd1NjYWxlZEJpdG1hcCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGJpdG1hcDogQml0bWFwKTogdm9pZDtcbiAgXG4gIGNsZWFyUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkO1xuICAgXG4gIGNsZWFyKCk6IHZvaWQ7XG5cbiAgc2V0Rm9udChmb250OiBGb250KTogdm9pZDtcbiAgXG4gIHNldENvbXBvc2l0ZShuYW1lOiBzdHJpbmcpOiB2b2lkO1xuXG4gIHNldEZvbnRTaXplKHNpemU6IG51bWJlcik6IHZvaWQ7XG5cbiAgZHJhd1N0cmluZyh4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBjb2w6IHN0cmluZyk6IHZvaWQ7XG5cbiAgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcblxuICBzY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XG5cbiAgcHVzaCgpOiB2b2lkO1xuXG4gIHBvcCgpOiB2b2lkO1xuXG4gIGdldFdpZHRoKCk6IG51bWJlcjtcblxuICBnZXRIZWlnaHQoKTogbnVtYmVyO1xuXG4gIGZpdFNjcmVlbih3aWR0aEluVmlydHVhbFBpeGVsczogbnVtYmVyKTogdm9pZDtcblxuICBnZXRTdHJpbmdXaWR0aCh0ZXh0OiBzdHJpbmcpOiBudW1iZXI7XG5cbiAgc2V0QWxwaGEoYWxwaGE6IG51bWJlcik6IHZvaWQ7XG5cbiAgZ2V0VHJhbnNmb3JtKCk6IERPTU1hdHJpeDtcblxuICByZW5kZXJTdGFydCgpOiB2b2lkO1xuXG4gIHJlbmRlckVuZCgpOiB2b2lkO1xufSIsImltcG9ydCB7IEJpdG1hcCB9IGZyb20gXCIuL0JpdG1hcFwiO1xuaW1wb3J0IHsgRm9udCB9IGZyb20gXCIuL0ZvbnRcIjtcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9HYW1lXCI7XG5pbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuL0dhbWVDb250ZXh0XCI7XG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCIuL0dyYXBoaWNzXCI7XG5pbXBvcnQgeyBCaXRtYXBJbXBsIH0gZnJvbSBcIi4vaW1wbC9CaXRtYXBJbXBsXCI7XG5pbXBvcnQgeyBGb250SW1wbCB9IGZyb20gXCIuL2ltcGwvRm9udEltcGxcIjtcbmltcG9ydCB7IEdyYXBoaWNzSW1wbCBhcyBDYW52YXNHcmFwaGljc0ltcGwgfSBmcm9tIFwiLi9pbXBsL0dyYXBoaWNzSW1wbFwiO1xuaW1wb3J0IHsgU291bmRJbXBsIH0gZnJvbSBcIi4vaW1wbC9Tb3VuZEltcGxcIjtcbmltcG9ydCB7IFRpbGVzZXRJbXBsIH0gZnJvbSBcIi4vaW1wbC9UaWxlc2V0SW1wbFwiO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tIFwiLi9SZXNvdXJjZVwiO1xuaW1wb3J0IHsgU291bmQgfSBmcm9tIFwiLi9Tb3VuZFwiO1xuaW1wb3J0IHsgTERUS1dvcmxkIH0gZnJvbSBcIi4vdGlsZW1hcHMvTERUS1dvcmxkXCI7XG5pbXBvcnQgeyBNYXBXb3JsZCB9IGZyb20gXCIuL3RpbGVtYXBzL01hcFdvcmxkXCI7XG5pbXBvcnQgeyBUaWxlc2V0IH0gZnJvbSBcIi4vVGlsZXNldFwiO1xuaW1wb3J0ICogYXMgSlNaaXAgZnJvbSBcImpzemlwXCI7XG5pbXBvcnQgeyBQYWxldHRlIH0gZnJvbSBcIi4vaW1wbC9QYWxldHRlXCI7XG5pbXBvcnQgeyBPcGVuR0xHcmFwaGljc0ltcGwgfSBmcm9tIFwiLi9vcGVuZ2wvT3BlbkdMR3JhcGhpY3NJbXBsXCI7XG5pbXBvcnQgeyBPcGVuR0xCaXRtYXAgfSBmcm9tIFwiLi9vcGVuZ2wvT3BlbkdMQml0bWFwXCI7XG5pbXBvcnQgeyBPcGVuR0xUaWxlc2V0SW1wbCB9IGZyb20gXCIuL29wZW5nbC9PcGVuR0xUaWxlc2V0SW1wbFwiO1xuXG5sZXQgR0FNRV9MT09QOiBHYW1lTG9vcDtcbmxldCBTT1VORF9PTjogYm9vbGVhbiA9IHRydWU7XG5sZXQgTVVTSUNfT046IGJvb2xlYW4gPSB0cnVlO1xubGV0IFBSRVNDQUxFX1RJTEVTRVRTOiBib29sZWFuID0gZmFsc2U7XG5sZXQgVVNFX1hCUjogYm9vbGVhbiA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTb3VuZE9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gU09VTkRfT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc011c2ljT24oKTogYm9vbGVhbiB7XG4gIHJldHVybiBNVVNJQ19PTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFVzZVhicigpOiBib29sZWFuIHtcbiAgcmV0dXJuIFVTRV9YQlI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VYYnIob246IGJvb2xlYW4pOiB2b2lkIHtcbiAgVVNFX1hCUiA9IG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkUHJlc2NhbGVUaWxlc2V0cygpOiBib29sZWFuIHtcbiAgcmV0dXJuIFBSRVNDQUxFX1RJTEVTRVRTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJlc2NhbGVUaWxlc2V0cyhvbjogYm9vbGVhbik6IHZvaWQge1xuICBQUkVTQ0FMRV9USUxFU0VUUyA9IG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U291bmRPbihvbjogYm9vbGVhbik6IHZvaWQge1xuICBTT1VORF9PTiA9IG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TXVzaWNPbihvbjogYm9vbGVhbik6IHZvaWQge1xuICBpZiAoIW9uICYmIE1VU0lDX09OKSB7XG4gICAgTVVTSUNfT04gPSBmYWxzZTtcbiAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBpZiAob24gJiYgIU1VU0lDX09OKSB7XG4gICAgTVVTSUNfT04gPSB0cnVlO1xuICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMucGxheShTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy52b2x1bWUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKGdhbWU6IEdhbWUsIHJlbmRlcmVyOiBSZW5kZXJlciA9IFJlbmRlcmVyLkNBTlZBUykge1xuICBjb25zdCBsb29wID0gbmV3IEdhbWVMb29wKCk7XG4gIGxvb3AucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuICBHQU1FX0xPT1AgPSBsb29wLnN0YXJ0KGdhbWUpO1xufVxuXG5leHBvcnQgZW51bSBSZW5kZXJlciB7XG4gIENBTlZBUyA9IFwiQ2FudmFzXCIsXG4gIE9QRU5HTCA9IFwiT3BlbkdMXCIsXG59O1xuXG5jbGFzcyBHYW1lTG9vcCBpbXBsZW1lbnRzIEdhbWVDb250ZXh0IHtcbiAgcmVzb3VyY2VzOiBSZXNvdXJjZVtdID0gW107XG4gIGdhbWUhOiBHYW1lO1xuICBsYXN0RnJhbWU6IG51bWJlciA9IDA7XG4gIGdyYXBoaWNzITogR3JhcGhpY3M7XG4gIGluaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBtYWluWmlwOiBhbnkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIHppcFBlcmNlbnRMb2FkZWQ6IG51bWJlciA9IDA7XG4gIHBhbGV0dGU6IFBhbGV0dGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGxhc3RXYWl0aW5nOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBcIlwiO1xuICB3YWl0OiBudW1iZXIgPSAwO1xuICBzaGlmdFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29tbWFuZFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29udHJvbFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYWx0UHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBsYXN0VG91Y2g/OiBUb3VjaEV2ZW50O1xuICByZW5kZXJlcjogUmVuZGVyZXIgPSBSZW5kZXJlci5PUEVOR0w7XG4gIGdyYXBoaWNzSW5pdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgaXNDb21tYW5kUHJlc3NlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21tYW5kUHJlc3NlZDtcbiAgfVxuXG4gIGlzQWx0UHJlc3NlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbHRQcmVzc2VkO1xuICB9XG5cbiAgaXNDb250cm9sUHJlc3NlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sUHJlc3NlZDtcbiAgfVxuXG4gIGlzU2hpZnRQcmVzc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0UHJlc3NlZDtcbiAgfVxuXG4gIGdldEdyYXBoaWNzKCk6IEdyYXBoaWNzIHtcbiAgICByZXR1cm4gdGhpcy5ncmFwaGljcztcbiAgfVxuXG4gIHJlc291cmNlc1JlbWFpbmluZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlcy5maWx0ZXIociA9PiAhci5sb2FkZWQpLmxlbmd0aDtcbiAgfVxuXG4gIHJlc291cmNlc1RvdGFsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzLmxlbmd0aDtcbiAgfVxuXG4gIGFsbFJlc291cmNlc0xvYWRlZCgpOiBib29sZWFuIHtcbiAgICBmb3IgKGNvbnN0IHJlc291cmNlIG9mIHRoaXMucmVzb3VyY2VzKSB7XG4gICAgICBpZiAoIXJlc291cmNlLmxvYWRlZCkge1xuICAgICAgICBpZiAodGhpcy5sYXN0V2FpdGluZyAhPT0gcmVzb3VyY2UubmFtZSkge1xuICAgICAgICAgIGlmICh0aGlzLmxhc3RXYWl0aW5nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltHVVRFXSBXYXMgd2FpdGluZyBvbjogXCIgKyB0aGlzLmxhc3RXYWl0aW5nICsgXCIgZm9yIFwiICsgdGhpcy53YWl0ICsgXCIgZnJhbWVzXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxhc3RXYWl0aW5nID0gcmVzb3VyY2UubmFtZTtcbiAgICAgICAgICB0aGlzLndhaXQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2FpdCsrO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmxhc3RXYWl0aW5nKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltHVVRFXSBXYXMgd2FpdGluZyBvbiBsYXN0IG9uZTogXCIgKyB0aGlzLmxhc3RXYWl0aW5nICsgXCIgZm9yIFwiICsgdGhpcy53YWl0ICsgXCIgZnJhbWVzXCIpO1xuICAgICAgdGhpcy5sYXN0V2FpdGluZyA9IHVuZGVmaW5lZDtcbiAgICAgIGlmICghdGhpcy5ncmFwaGljc0luaXRlZCkge1xuICAgICAgICB0aGlzLmdyYXBoaWNzSW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5pbml0UmVzb3VyY2VPbkxvYWRlZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0UmVzb3VyY2VzT25GaXJzdENsaWNrKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hbGxSZXNvdXJjZXNMb2FkZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcblxuICAgICAgZm9yIChjb25zdCByZXNvdXJjZSBvZiB0aGlzLnJlc291cmNlcykge1xuICAgICAgICByZXNvdXJjZS5pbml0T25GaXJzdENsaWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFwcGx5UGFsZXR0ZShoZXhGaWxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5sb2FkVGV4dChoZXhGaWxlKS50aGVuKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5wYWxldHRlID0gbmV3IFBhbGV0dGUodGV4dCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3VzZU1vdmVIYW5kbGVyKHg6IG51bWJlciwgeTogbnVtYmVyLCBpZDogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuXG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IHRoaXMuZ3JhcGhpY3MuY2FudmFzO1xuICAgIGNhbnZhcy5mb2N1cygpO1xuXG4gICAgY29uc3Qgd2lkdGg6IG51bWJlciA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQ6IG51bWJlciA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG5cbiAgICB4ID0gTWF0aC5mbG9vcigoeCAvIHdpZHRoKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgeSA9IE1hdGguZmxvb3IoKHkgLyBoZWlnaHQpICogY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLmdhbWUub25Nb3VzZU1vdmUodGhpcywgeCwgeSk7XG4gIH1cblxuICBwcml2YXRlIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdhbWUub25Nb3VzZVdoZWVsKHRoaXMsIGRlbHRhKTtcbiAgfVxuXG4gIHByaXZhdGUgbW91c2VEb3duSGFuZGxlcih4OiBudW1iZXIsIHk6IG51bWJlciwgaWQ6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICB0aGlzLmluaXRSZXNvdXJjZXNPbkZpcnN0Q2xpY2soKTtcblxuICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSB0aGlzLmdyYXBoaWNzLmNhbnZhcztcbiAgICBjYW52YXMuZm9jdXMoKTtcblxuICAgIGNvbnN0IHdpZHRoOiBudW1iZXIgPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0OiBudW1iZXIgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuXG4gICAgeCA9IE1hdGguZmxvb3IoKHggLyB3aWR0aCkgKiBjYW52YXMud2lkdGgpO1xuICAgIHkgPSBNYXRoLmZsb29yKCh5IC8gaGVpZ2h0KSAqIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5nYW1lLm9uTW91c2VEb3duKHRoaXMsIHgsIHksIGlkKTtcbiAgfVxuXG4gIHByaXZhdGUgbW91c2VVcEhhbmRsZXIoeDogbnVtYmVyLCB5OiBudW1iZXIsIGlkOiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgdGhpcy5pbml0UmVzb3VyY2VzT25GaXJzdENsaWNrKCk7XG5cbiAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gdGhpcy5ncmFwaGljcy5jYW52YXM7XG4gICAgY29uc3Qgd2lkdGg6IG51bWJlciA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQ6IG51bWJlciA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG5cbiAgICB4ID0gTWF0aC5mbG9vcigoeCAvIHdpZHRoKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgeSA9IE1hdGguZmxvb3IoKHkgLyBoZWlnaHQpICogY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLmdhbWUub25Nb3VzZVVwKHRoaXMsIHgsIHksIGlkKTtcbiAgfVxuXG4gIHByaXZhdGUga2V5RG93bkhhbmRsZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRSZXNvdXJjZXNPbkZpcnN0Q2xpY2soKTtcblxuICAgIHRoaXMuZ2FtZS5vbktleURvd24odGhpcywga2V5KTtcbiAgfVxuXG4gIHByaXZhdGUga2V5VXBIYW5kbGVyKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5nYW1lLm9uS2V5VXAodGhpcywga2V5KTtcbiAgfVxuXG4gIHN0YXJ0KGdhbWU6IEdhbWUpOiBHYW1lTG9vcCB7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5yZW5kZXJlciA9PT0gUmVuZGVyZXIuQ0FOVkFTID8gbmV3IENhbnZhc0dyYXBoaWNzSW1wbCgpIDogbmV3IE9wZW5HTEdyYXBoaWNzSW1wbCgpO1xuXG4gICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgdmFyIHJlY3QgPSAoPGFueT5ldmVudC50YXJnZXQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHZhciB4ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICB2YXIgeSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICB0aGlzLmxhc3RUb3VjaCA9IGV2ZW50O1xuICAgICAgICAgIHRoaXMubW91c2VEb3duSGFuZGxlcih4LCB5KTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH0sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgICAgICB2YXIgcmVjdCA9ICg8YW55PmV2ZW50LnRhcmdldCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgdmFyIHggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgIHZhciB5ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgIHRoaXMubGFzdFRvdWNoID0gZXZlbnQ7XG4gICAgICAgICAgdGhpcy5tb3VzZU1vdmVIYW5kbGVyKHgsIHkpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgdmFyIHJlY3QgPSAoPGFueT5ldmVudC50YXJnZXQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGlmICh0aGlzLmxhc3RUb3VjaCkge1xuICAgICAgICAgICAgdmFyIHggPSB0aGlzLmxhc3RUb3VjaC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLmxhc3RUb3VjaC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICB0aGlzLm1vdXNlVXBIYW5kbGVyKHgsIHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlVXBIYW5kbGVyKDAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH0sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubW91c2VXaGVlbEhhbmRsZXIoZXZlbnQuZGVsdGFZKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc2hpZnRQcmVzc2VkID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIHRoaXMuY29tbWFuZFByZXNzZWQgPSBldmVudC5tZXRhS2V5O1xuICAgICAgICB0aGlzLmNvbnRyb2xQcmVzc2VkID0gZXZlbnQuY3RybEtleTtcbiAgICAgICAgdGhpcy5hbHRQcmVzc2VkID0gZXZlbnQuYWx0S2V5O1xuXG4gICAgICAgIHRoaXMubW91c2VEb3duSGFuZGxlcihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZLCBldmVudC5idXR0b24pO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc2hpZnRQcmVzc2VkID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIHRoaXMuY29tbWFuZFByZXNzZWQgPSBldmVudC5tZXRhS2V5O1xuICAgICAgICB0aGlzLmNvbnRyb2xQcmVzc2VkID0gZXZlbnQuY3RybEtleTtcbiAgICAgICAgdGhpcy5hbHRQcmVzc2VkID0gZXZlbnQuYWx0S2V5O1xuXG4gICAgICAgIHRoaXMubW91c2VNb3ZlSGFuZGxlcihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChldmVudCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5zaGlmdFByZXNzZWQgPSBldmVudC5zaGlmdEtleTtcbiAgICAgICAgdGhpcy5jb21tYW5kUHJlc3NlZCA9IGV2ZW50Lm1ldGFLZXk7XG4gICAgICAgIHRoaXMuY29udHJvbFByZXNzZWQgPSBldmVudC5jdHJsS2V5O1xuICAgICAgICB0aGlzLmFsdFByZXNzZWQgPSBldmVudC5hbHRLZXk7XG5cbiAgICAgICAgdGhpcy5tb3VzZVVwSGFuZGxlcihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZLCBldmVudC5idXR0b24pO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNoaWZ0UHJlc3NlZCA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgdGhpcy5jb21tYW5kUHJlc3NlZCA9IGV2ZW50Lm1ldGFLZXk7XG4gICAgICB0aGlzLmNvbnRyb2xQcmVzc2VkID0gZXZlbnQuY3RybEtleTtcbiAgICAgIHRoaXMuYWx0UHJlc3NlZCA9IGV2ZW50LmFsdEtleTtcblxuICAgICAgdGhpcy5rZXlEb3duSGFuZGxlcihldmVudC5jb2RlKTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5zaGlmdFByZXNzZWQgPSBldmVudC5zaGlmdEtleTtcbiAgICAgIHRoaXMuY29tbWFuZFByZXNzZWQgPSBldmVudC5tZXRhS2V5O1xuICAgICAgdGhpcy5jb250cm9sUHJlc3NlZCA9IGV2ZW50LmN0cmxLZXk7XG4gICAgICB0aGlzLmFsdFByZXNzZWQgPSBldmVudC5hbHRLZXk7XG5cbiAgICAgIHRoaXMua2V5VXBIYW5kbGVyKGV2ZW50LmNvZGUpO1xuICAgIH0pO1xuXG4gICAgZ2FtZS5pbml0KHRoaXMpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubG9vcCgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsb29wKCk6IHZvaWQge1xuICAgIGNvbnN0IG5vdzogbnVtYmVyID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgbGV0IGRlbHRhOiBudW1iZXIgPSAwO1xuICAgIGlmICh0aGlzLmxhc3RGcmFtZSAhPT0gMCkge1xuICAgICAgZGVsdGEgPSBub3cgLSB0aGlzLmxhc3RGcmFtZTtcbiAgICB9XG4gICAgdGhpcy5sYXN0RnJhbWUgPSBub3c7XG5cbiAgICB0aGlzLmdyYXBoaWNzLnJlbmRlclN0YXJ0KCk7XG4gICAgdGhpcy5ncmFwaGljcy5hcHBseUZvbnQoKTtcbiAgICB0aGlzLmdhbWUudXBkYXRlKHRoaXMsIGRlbHRhKTtcbiAgICB0aGlzLmdhbWUucmVuZGVyKHRoaXMsIHRoaXMuZ3JhcGhpY3MpO1xuICAgIHRoaXMuZ3JhcGhpY3MucmVuZGVyRW5kKCk7XG5cbiAgICBjb25zdCBlcnJvciA9IHRoaXMuZ3JhcGhpY3MuZ2V0RXJyb3IoKTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZ2FtZS5yZW5kZXJlckVycm9yKGVycm9yKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlbmRlcmVyIEVycm9yIC0gXCIgKyBlcnJvcik7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubG9vcCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0WmlwUHJvZ3Jlc3MoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy56aXBQZXJjZW50TG9hZGVkO1xuICB9XG5cbiAgbG9hZFppcCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICByZXEub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgIHJlcS5vbnByb2dyZXNzID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy56aXBQZXJjZW50TG9hZGVkID0gKGUubG9hZGVkIC8gZS50b3RhbCk7XG4gICAgICB9O1xuICAgICAgcmVxLm9ubG9hZCA9IChldmVudCkgPT4ge1xuICAgICAgICBKU1ppcC5sb2FkQXN5bmMocmVxLnJlc3BvbnNlKS50aGVuKCh6aXApID0+IHtcbiAgICAgICAgICB0aGlzLm1haW5aaXAgPSB6aXA7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICByZXEub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH07XG5cbiAgICAgIHJlcS5zZW5kKCk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkTXVzaWModXJsOiBzdHJpbmcpOiBTb3VuZCB7XG4gICAgbGV0IGJ1ZmZlclByb21pc2U6IHVuZGVmaW5lZCB8IFByb21pc2U8QXJyYXlCdWZmZXI+ID0gdW5kZWZpbmVkO1xuICAgIGlmICh1cmwuaW5kZXhPZihcIl8vXCIpID49IDApIHtcbiAgICAgIGJ1ZmZlclByb21pc2UgPSB0aGlzLm1haW5aaXAuZmlsZSh1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKFwiXy9cIikpKS5hc3luYyhcImFycmF5YnVmZmVyXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdW5kOiBTb3VuZCA9IG5ldyBTb3VuZEltcGwodXJsLCB0cnVlLCBidWZmZXJQcm9taXNlKTtcbiAgICBpZiAoIXRoaXMuYWxsUmVzb3VyY2VzTG9hZGVkKCkpIHtcbiAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2goc291bmQpO1xuICAgIH1cblxuICAgIHJldHVybiBzb3VuZDtcbiAgfVxuXG4gIGxvYWRTb3VuZCh1cmw6IHN0cmluZyk6IFNvdW5kIHtcbiAgICBsZXQgYnVmZmVyUHJvbWlzZTogdW5kZWZpbmVkIHwgUHJvbWlzZTxBcnJheUJ1ZmZlcj4gPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVybC5pbmRleE9mKFwiXy9cIikgPj0gMCkge1xuICAgICAgYnVmZmVyUHJvbWlzZSA9IHRoaXMubWFpblppcC5maWxlKHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoXCJfL1wiKSkpLmFzeW5jKFwiYXJyYXlidWZmZXJcIik7XG4gICAgfVxuXG4gICAgY29uc3Qgc291bmQ6IFNvdW5kID0gbmV3IFNvdW5kSW1wbCh1cmwsIGZhbHNlLCBidWZmZXJQcm9taXNlKTtcbiAgICB0aGlzLnJlc291cmNlcy5wdXNoKHNvdW5kKTtcblxuICAgIHJldHVybiBzb3VuZDtcbiAgfVxuXG4gIHByaXZhdGUgdG9Qb3RlbnRpYWxaaXBMb2FkQmxvYih1cmw6IHN0cmluZyk6IFByb21pc2U8QmxvYj4gfCB1bmRlZmluZWQge1xuICAgIGlmICh1cmwuaW5kZXhPZihcIl8vXCIpID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1haW5aaXAuZmlsZSh1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKFwiXy9cIikpKS5hc3luYyhcImJsb2JcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgdG9Qb3RlbnRpYWxaaXBMb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodXJsLmluZGV4T2YoXCJfL1wiKSA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYWluWmlwLmZpbGUodXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZihcIl8vXCIpKSkuYXN5bmMoXCJiYXNlNjRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGxvYWRCaXRtYXAodXJsOiBzdHJpbmcpOiBCaXRtYXAge1xuICAgIGlmICh0aGlzLnJlbmRlcmVyID09PSBSZW5kZXJlci5DQU5WQVMpIHtcbiAgICAgIGNvbnN0IGJpdG1hcDogQml0bWFwID0gbmV3IEJpdG1hcEltcGwodXJsLCB0aGlzLnRvUG90ZW50aWFsWmlwTG9hZCh1cmwpLCB0aGlzLnBhbGV0dGUpO1xuICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaChiaXRtYXApO1xuICAgICAgcmV0dXJuIGJpdG1hcDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYml0bWFwOiBCaXRtYXAgPSBuZXcgT3BlbkdMQml0bWFwKHRoaXMuZ3JhcGhpY3MgYXMgT3BlbkdMR3JhcGhpY3NJbXBsLCB1cmwsIHRoaXMudG9Qb3RlbnRpYWxaaXBMb2FkKHVybCksIHRoaXMucGFsZXR0ZSk7XG4gICAgICB0aGlzLnJlc291cmNlcy5wdXNoKGJpdG1hcCk7XG5cbiAgICAgIHJldHVybiBiaXRtYXA7XG4gICAgfVxuXG4gIH1cblxuICBsb2FkU2NhbGVkVGlsZXNldCh1cmw6IHN0cmluZywgdGlsZVdpZHRoOiBudW1iZXIsIHRpbGVIZWlnaHQ6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IFRpbGVzZXQge1xuICAgIGlmICh0aGlzLnJlbmRlcmVyID09PSBSZW5kZXJlci5DQU5WQVMpIHtcbiAgICAgIGNvbnN0IHRpbGVzZXQ6IFRpbGVzZXQgPSBuZXcgVGlsZXNldEltcGwodXJsLCB0aGlzLnRvUG90ZW50aWFsWmlwTG9hZEJsb2IodXJsKSwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCBzY2FsZSwgdGhpcy5wYWxldHRlKTtcbiAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2godGlsZXNldCk7XG4gICAgICByZXR1cm4gdGlsZXNldDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGlsZXNldDogVGlsZXNldCA9IG5ldyBPcGVuR0xUaWxlc2V0SW1wbCh0aGlzLmdyYXBoaWNzIGFzIE9wZW5HTEdyYXBoaWNzSW1wbCwgdXJsLCB0aGlzLnRvUG90ZW50aWFsWmlwTG9hZEJsb2IodXJsKSwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCBzY2FsZSwgdGhpcy5wYWxldHRlKTtcbiAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2godGlsZXNldCk7XG4gICAgICByZXR1cm4gdGlsZXNldDtcbiAgICB9XG4gIH1cblxuICBsb2FkVGlsZXNldCh1cmw6IHN0cmluZywgdGlsZVdpZHRoOiBudW1iZXIsIHRpbGVIZWlnaHQ6IG51bWJlcik6IFRpbGVzZXQge1xuICAgIGlmICh0aGlzLnJlbmRlcmVyID09PSBSZW5kZXJlci5DQU5WQVMpIHtcbiAgICAgIGNvbnN0IHRpbGVzZXQ6IFRpbGVzZXQgPSBuZXcgVGlsZXNldEltcGwodXJsLCB0aGlzLnRvUG90ZW50aWFsWmlwTG9hZEJsb2IodXJsKSwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCAxLCB0aGlzLnBhbGV0dGUpO1xuICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaCh0aWxlc2V0KTtcbiAgICAgIHJldHVybiB0aWxlc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0aWxlc2V0OiBUaWxlc2V0ID0gbmV3IE9wZW5HTFRpbGVzZXRJbXBsKHRoaXMuZ3JhcGhpY3MgYXMgT3BlbkdMR3JhcGhpY3NJbXBsLCB1cmwsIHRoaXMudG9Qb3RlbnRpYWxaaXBMb2FkQmxvYih1cmwpLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIDEsIHRoaXMucGFsZXR0ZSk7XG4gICAgICB0aGlzLnJlc291cmNlcy5wdXNoKHRpbGVzZXQpO1xuICAgICAgcmV0dXJuIHRpbGVzZXQ7XG4gICAgfVxuICB9XG5cbiAgbG9hZEZvbnQodXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IEZvbnQge1xuICAgIHJldHVybiBuZXcgRm9udEltcGwodXJsLCBuYW1lKTtcbiAgfVxuXG4gIGxvYWRMRFRLKG5hbWU6IHN0cmluZywgbG9jYXRvcjogKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nKTogUHJvbWlzZTxNYXBXb3JsZD4ge1xuICAgIGNvbnN0IHdvcmxkOiBMRFRLV29ybGQgPSBuZXcgTERUS1dvcmxkKCk7XG4gICAgdGhpcy5yZXNvdXJjZXMucHVzaCh3b3JsZCk7XG5cbiAgICByZXR1cm4gd29ybGQubG9hZChuYW1lLCBmaWxlID0+IHRoaXMubG9hZEpzb24obG9jYXRvcihmaWxlKSkpXG4gIH1cblxuICBwcml2YXRlIGxvYWRUZXh0KHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBpdHMgYW4gYXNzZXQgcmVmZXJlbmNlXG4gICAgICBpZiAodXJsLmluZGV4T2YoXCJfL1wiKSA+PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1haW5aaXAuZmlsZSh1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKFwiXy9cIikpKS5hc3luYyhcInN0cmluZ1wiKS50aGVuKChyZXN1bHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcblxuICAgICAgICByZXEub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHJlcS5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXEub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlcS5zZW5kKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGxvYWRKc29uKHVybDogc3RyaW5nLCB0cmFuc2Zvcm0/OiAodGV4dDogc3RyaW5nKSA9PiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIGl0cyBhbiBhc3NldCByZWZlcmVuY2VcbiAgICAgIGlmICh1cmwuaW5kZXhPZihcIl8vXCIpID49IDApIHtcbiAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZihcIl8vXCIpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpblppcC5maWxlKHVybCkuYXN5bmMoXCJzdHJpbmdcIikudGhlbigocmVzdWx0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UodHJhbnNmb3JtID8gdHJhbnNmb3JtKHJlc3VsdCkgOiByZXN1bHQpO1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBwYXJzZSBKU09OOiBcIiArIHVybCk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh1cmwuc3RhcnRzV2l0aChcImRhdGE6YXBwbGljYXRpb24vanNvbjt1dGY4LFwiKSkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoXCIsXCIpICsgMSk7XG4gICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHRyYW5zZm9ybSA/IHRyYW5zZm9ybShyZXN1bHQpIDogcmVzdWx0KSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcblxuICAgICAgICByZXEub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHJlcS5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nID0gcmVxLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh0cmFuc2Zvcm0gPyB0cmFuc2Zvcm0ocmVzdWx0KSA6IHJlc3VsdCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXEuc2VuZCgpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpc1J1bm5pbmdTdGFuZGFsb25lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoKDxhbnk+d2luZG93Lm5hdmlnYXRvcikuc3RhbmRhbG9uZSA9PT0gdHJ1ZSkgfHwgKHdpbmRvdy5tYXRjaE1lZGlhKCcoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKScpLm1hdGNoZXMpO1xuICB9XG5cbiAgaXNUYWJsZXQoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmlzUGhvbmUoKSAmJiB0aGlzLmlzSU9TKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBpc1RhYmxldCA9IC8oaXBhZHx0YWJsZXR8KGFuZHJvaWQoPyEuKm1vYmlsZSkpfCh3aW5kb3dzKD8hLipwaG9uZSkoLip0b3VjaCkpfGtpbmRsZXxwbGF5Ym9va3xzaWxrfChwdWZmaW4oPyEuKihJUHxBUHxXUCkpKSkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblxuICAgIHJldHVybiBpc1RhYmxldDtcbiAgfVxuXG4gIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSU9TKCkgfHwgdGhpcy5pc0FuZHJvaWQoKTtcbiAgfVxuXG4gIGlzQW5kcm9pZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSAhPSBudWxsO1xuICB9XG5cbiAgaXNJT1MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdpUGFkIFNpbXVsYXRvcicsXG4gICAgICAnaVBob25lIFNpbXVsYXRvcicsXG4gICAgICAnaVBvZCBTaW11bGF0b3InLFxuICAgICAgJ2lQYWQnLFxuICAgICAgJ2lQaG9uZScsXG4gICAgICAnaVBvZCdcbiAgICBdLmluZGV4T2YobmF2aWdhdG9yLnBsYXRmb3JtKSA+PSAwXG4gICAgICAvLyBpUGFkIG9uIGlPUyAxMyBkZXRlY3Rpb25cbiAgICAgIHx8IChuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKFwiTWFjXCIpICYmIFwib250b3VjaGVuZFwiIGluIGRvY3VtZW50KVxuICB9XG5cbiAgaXNQaG9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0lPUygpICYmIHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KVwiKS5tYXRjaGVzO1xuICB9XG5cbiAgc2V0U291bmRWb2x1bWUodjogbnVtYmVyKTogdm9pZCB7XG4gICAgU291bmRJbXBsLnNldFNvdW5kVm9sdW1lKHYpO1xuICB9XG5cbiAgZ2V0U291bmRWb2x1bWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gU291bmRJbXBsLmdldFNvdW5kVm9sdW1lKCk7XG4gIH1cblxuICBzZXRNdXNpY1ZvbHVtZSh2OiBudW1iZXIpOiB2b2lkIHtcbiAgICBTb3VuZEltcGwuc2V0TXVzaWNWb2x1bWUodik7XG4gIH1cblxuICBnZXRNdXNpY1ZvbHVtZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBTb3VuZEltcGwuZ2V0TXVzaWNWb2x1bWUoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEtleXMge1xuICBzdGF0aWMgRVNDQVBFX0tFWTogc3RyaW5nID0gXCJFc2NhcGVcIjtcbiAgc3RhdGljIEVOVEVSX0tFWTogc3RyaW5nID0gXCJFbnRlclwiO1xuICBzdGF0aWMgTEVGVF9LRVk6IHN0cmluZyA9IFwiQXJyb3dMZWZ0XCI7XG4gIHN0YXRpYyBSSUdIVF9LRVk6IHN0cmluZyA9IFwiQXJyb3dSaWdodFwiO1xuICBzdGF0aWMgVVBfS0VZOiBzdHJpbmcgPSBcIkFycm93VXBcIjtcbiAgc3RhdGljIERPV05fS0VZOiBzdHJpbmcgPSBcIkFycm93RG93blwiO1xuICBzdGF0aWMgU1BBQ0VfS0VZOiBzdHJpbmcgPSBcIiBcIjtcbiAgc3RhdGljIFNfS0VZOiBzdHJpbmcgPSBcInNcIjtcbiAgc3RhdGljIE1fS0VZOiBzdHJpbmcgPSBcIm1cIjtcbiAgc3RhdGljIEFfS0VZOiBzdHJpbmcgPSBcImFcIjtcbiAgc3RhdGljIFdfS0VZOiBzdHJpbmcgPSBcIndcIjtcbiAgc3RhdGljIERfS0VZOiBzdHJpbmcgPSBcImRcIjtcbiAgc3RhdGljIENPTlRST0xfS0VZOiBzdHJpbmcgPSBcIkNvbnRyb2xcIjtcbiAgc3RhdGljIE1FVEFfS0VZOiBzdHJpbmcgPSBcIk1ldGFcIjtcbiAgc3RhdGljIEFMVF9LRVk6IHN0cmluZyA9IFwiQWx0XCI7XG4gIHN0YXRpYyBUQUJfS0VZOiBzdHJpbmcgPSBcIlRhYlwiO1xufVxuIiwiaW1wb3J0IHsgQVVESU9fQ09OVEVYVCwgU291bmRJbXBsIH0gZnJvbSBcIi4vaW1wbC9Tb3VuZEltcGxcIjtcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSBcIi4vU291bmRcIjtcblxuaW50ZXJmYWNlIFNvdW5kUG9pbnQge1xuICAgIHg/OiBudW1iZXJcbiAgICB5PzogbnVtYmVyXG4gICAgdm9sdW1lOiBudW1iZXJcbiAgICBzb3VyY2U6IEF1ZGlvU2NoZWR1bGVkU291cmNlTm9kZVxuICAgIGdhaW46IEdhaW5Ob2RlXG4gICAgY2F0ZWdvcnk6IHN0cmluZ1xufVxuXG5leHBvcnQgZW51bSBTb3VuZEVhc2luZyB7XG4gICAgTGluZWFyLFxuICAgIFF1YWRyYXRpYyxcbiAgICBDdWJpY1xufVxuXG5pbnRlcmZhY2UgU291bmRDYXRlZ29yeSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgdm9sdW1lOiBudW1iZXJcbiAgICBtYXhEaXN0YW5jZTI6IG51bWJlclxuICAgIHNjYWxlMjogbnVtYmVyXG4gICAgZWFzaW5nOiBTb3VuZEVhc2luZ1xufVxuXG5leHBvcnQgY2xhc3MgU291bmRTY2FwZSB7XG4gICAgcHJpdmF0ZSBfc291bmRWb2x1bWU6IG51bWJlciA9IDE7XG5cbiAgICBwcml2YXRlIHBvaW50czogU291bmRQb2ludFtdID0gW11cbiAgICBwcml2YXRlIGxpc3RlbmVyWDogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgbGlzdGVuZXJZOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBjYXRlZ29yaWVzOiBSZWNvcmQ8c3RyaW5nLCBTb3VuZENhdGVnb3J5PiA9IHt9XG5cbiAgICBjYXRlZ29yeShuYW1lOiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyLCBtYXhEaXN0YW5jZTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBlYXNpbmc6IFNvdW5kRWFzaW5nKTogU291bmRTY2FwZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIG5hbWUsIHZvbHVtZSwgbWF4RGlzdGFuY2UyOiBtYXhEaXN0YW5jZSAqIG1heERpc3RhbmNlLCBzY2FsZTI6IHNjYWxlICogc2NhbGUsIGVhc2luZ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIFxuICAgIGdldCBzb3VuZFZvbHVtZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWb2x1bWU7XG4gICAgfVxuXG4gICAgc2V0IHNvdW5kVm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc291bmRWb2x1bWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lclggPSB4XG4gICAgICAgIHRoaXMubGlzdGVuZXJZID0geVxuICAgICAgICB0aGlzLnVwZGF0ZVZvbHVtZXMoKVxuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMucG9pbnRzKSB7XG4gICAgICAgICAgICBwb2ludC5zb3VyY2Uuc3RvcCgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIH1cblxuICAgIHBsYXkoc291bmQ6IFNvdW5kLCB2b2x1bWU6IG51bWJlciwgY2F0ZWdvcnk6IHN0cmluZywgeD86IG51bWJlciwgeT86IG51bWJlcikge1xuICAgICAgICAvLyBwcm90ZWN0IGFnYWluc3QgcGxheWluZyBzb3VuZHMgdG9vIGVhcmx5IG9yIHdpdGhvdXQgYXV0byB3b3JraW5nXG4gICAgICAgIGlmICghQVVESU9fQ09OVEVYVCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1wbCA9IDxTb3VuZEltcGw+c291bmRcbiAgICAgICAgY29uc3Qgc291cmNlID0gQVVESU9fQ09OVEVYVC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgc291cmNlLmJ1ZmZlciA9IGltcGwuYnVmZmVyO1xuICAgICAgICBjb25zdCBnYWluID0gQVVESU9fQ09OVEVYVC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHNvdXJjZS5jb25uZWN0KGdhaW4pO1xuICAgICAgICBnYWluLmNvbm5lY3QoQVVESU9fQ09OVEVYVC5kZXN0aW5hdGlvbik7XG4gICAgICAgIGNvbnN0IHBvaW50OiBTb3VuZFBvaW50ID0ge1xuICAgICAgICAgICAgeCwgeSwgdm9sdW1lLFxuICAgICAgICAgICAgc291cmNlLCBnYWluLCBjYXRlZ29yeVxuICAgICAgICB9XG4gICAgICAgIGdhaW4uZ2Fpbi52YWx1ZSA9IHRoaXMuY2FsY3VsYXRlVm9sdW1lKHBvaW50KVxuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KVxuICAgICAgICBzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIGV2ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wb2ludHMuaW5kZXhPZihwb2ludClcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBTb3VuZCBlbmRlZDogJHtzb3VuZC5uYW1lfSwgdG90YWw6ICR7dGhpcy5wb2ludHMubGVuZ3RofWApXG4gICAgICAgIH0pXG4gICAgICAgIHNvdXJjZS5zdGFydCgpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBTb3VuZCBzdGFydGVkOiAke3NvdW5kLm5hbWV9LCB0b3RhbDogJHt0aGlzLnBvaW50cy5sZW5ndGh9YClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVZvbHVtZXMoKSB7XG4gICAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5wb2ludHMpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuY2FsY3VsYXRlVm9sdW1lKHBvaW50KTtcbiAgICAgICAgICAgIHBvaW50LmdhaW4uZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSh2YWx1ZSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlVm9sdW1lKHBvaW50OiBTb3VuZFBvaW50KTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXNbcG9pbnQuY2F0ZWdvcnldXG4gICAgICAgIGlmIChjYXRlZ29yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9pbnQudm9sdW1lICogdGhpcy5fc291bmRWb2x1bWVcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHBvaW50LnggPT09IHVuZGVmaW5lZCB8fCBwb2ludC55ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2ludC52b2x1bWUgKiBjYXRlZ29yeS52b2x1bWUgKiB0aGlzLl9zb3VuZFZvbHVtZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGR4OiBudW1iZXIgPSBwb2ludC54IC0gdGhpcy5saXN0ZW5lclhcbiAgICAgICAgY29uc3QgZHk6IG51bWJlciA9IHBvaW50LnkgLSB0aGlzLmxpc3RlbmVyWVxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IChkeCAqIGR4ICsgZHkgKiBkeSkgLyBjYXRlZ29yeS5zY2FsZTI7XG4gICAgICAgIC8vICogKGxvcyA/IDEgOiAwLjMpIFRPRE86IGNhbGxiYWNrXG4gICAgICAgIGNvbnN0IHJlZHVjdGlvbiA9IE1hdGgubWF4KDEgLSBkaXN0YW5jZSAvIGNhdGVnb3J5Lm1heERpc3RhbmNlMiwgMCk7XG4gICAgICAgIHN3aXRjaCAoY2F0ZWdvcnkuZWFzaW5nKSB7XG4gICAgICAgICAgICBjYXNlIFNvdW5kRWFzaW5nLkxpbmVhcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWb2x1bWUgKiBwb2ludC52b2x1bWUgKiBjYXRlZ29yeS52b2x1bWUgKiByZWR1Y3Rpb25cbiAgICAgICAgICAgIGNhc2UgU291bmRFYXNpbmcuUXVhZHJhdGljOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zb3VuZFZvbHVtZSAqIHBvaW50LnZvbHVtZSAqIGNhdGVnb3J5LnZvbHVtZSAqIHJlZHVjdGlvbiAqIHJlZHVjdGlvblxuICAgICAgICAgICAgY2FzZSBTb3VuZEVhc2luZy5DdWJpYzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWb2x1bWUgKiBwb2ludC52b2x1bWUgKiBjYXRlZ29yeS52b2x1bWUgKiByZWR1Y3Rpb24gKiByZWR1Y3Rpb24gKiByZWR1Y3Rpb25cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEJpdG1hcCB9IGZyb20gXCIuLi9CaXRtYXBcIjtcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcIi4uL0dyYXBoaWNzXCI7XG5pbXBvcnQgeyBHcmFwaGljc0ltcGwgfSBmcm9tIFwiLi9HcmFwaGljc0ltcGxcIjtcbmltcG9ydCB7IFBhbGV0dGUgfSBmcm9tIFwiLi9QYWxldHRlXCI7XG5cbmV4cG9ydCBjbGFzcyBCaXRtYXBJbXBsIGltcGxlbWVudHMgQml0bWFwIHtcbiAgd2lkdGg6IG51bWJlciA9IDA7XG4gIGhlaWdodDogbnVtYmVyID0gMDtcbiAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIGRhdGFVcmxMb2FkZXI6IFByb21pc2U8c3RyaW5nPiB8IHVuZGVmaW5lZCwgcGFsOiBQYWxldHRlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5uYW1lID0gdXJsO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmltYWdlLndpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmltYWdlLmhlaWdodDtcblxuICAgICAgaWYgKHBhbCkge1xuICAgICAgICBwYWwuYWRqdXN0SW1hZ2UodGhpcy5pbWFnZSkudGhlbigoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpID0+IHsgXG4gICAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkYXRhVXJsTG9hZGVyKSB7XG4gICAgICBkYXRhVXJsTG9hZGVyLnRoZW4oKGJhc2U2NDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gXCJkYXRhOlwiK3VybC5zdWJzdHJpbmcodXJsLmxlbmd0aC0zKStcIjtiYXNlNjQsXCIrYmFzZTY0O1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbWFnZS5zcmMgPSB1cmw7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY3R4ID0gKGdyYXBoaWNzIGFzIEdyYXBoaWNzSW1wbCkuY3R4O1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgeCwgeSk7XG4gIH1cblxuICBkcmF3U2NhbGVkKGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY3R4ID0gKGdyYXBoaWNzIGFzIEdyYXBoaWNzSW1wbCkuY3R4O1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbiAgXG4gIGluaXRPbkZpcnN0Q2xpY2soKTogdm9pZCB7XG4gIH1cbn0iLCJpbXBvcnQgeyBGb250IH0gZnJvbSBcIi4uL0ZvbnRcIjtcblxuZGVjbGFyZSBsZXQgRm9udEZhY2U6IGFueTtcblxuZXhwb3J0IGNsYXNzIEZvbnRJbXBsIGltcGxlbWVudHMgRm9udCB7XG4gIG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHN0eWxlLmlubmVySFRNTCA9IFwiQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBcIituYW1lK1wiOyBzcmM6IHVybCgnXCIrdXJsK1wiJyk7IH0gYm9keSB7IGZvbnQtZmFtaWx5OiBcIituYW1lK1wiOyB9XCI7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBhcHBseShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY3R4LmZvbnQgPSBzaXplK1wicHggXCIgKyB0aGlzLm5hbWU7XG4gIH1cbn0iLCJpbXBvcnQgeyBCaXRtYXAsIEdyYXBoaWNzIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBGb250IH0gZnJvbSBcIi4uL0ZvbnRcIjtcbmltcG9ydCB7IE9mZnNjcmVlbiB9IGZyb20gXCIuLi9HcmFwaGljc1wiO1xuaW1wb3J0IHsgRm9udEltcGwgfSBmcm9tIFwiLi9Gb250SW1wbFwiO1xuaW1wb3J0IHsgU291bmRJbXBsIH0gZnJvbSBcIi4vU291bmRJbXBsXCI7XG5cbmRlY2xhcmUgbGV0IEluc3RhbGxUcmlnZ2VyOiBhbnk7XG5cbnZhciBpc0ZpcmVmb3ggPSB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnO1xuXG5jbGFzcyBPZmZzY3JlZW5JbXBsIGltcGxlbWVudHMgT2Zmc2NyZWVuIHtcbiAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgfVxuXG4gIGdldFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgfVxuXG4gIHNldERpbWVuc2lvbih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG59XG5cbmNsYXNzIENvcHlCaXRtYXAgaW1wbGVtZW50cyBCaXRtYXAge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgbG9hZGVkOiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmcgPSBcImNvcHlcIjtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICB9XG5cbiAgZHJhdyhncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY3R4ID0gKGdyYXBoaWNzIGFzIEdyYXBoaWNzSW1wbCkuY3R4O1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIHgsIHkpO1xuICB9XG5cbiAgZHJhd1NjYWxlZChncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGN0eCA9IChncmFwaGljcyBhcyBHcmFwaGljc0ltcGwpLmN0eDtcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGdldERyYXdhYmxlKCk6IENhbnZhc0ltYWdlU291cmNlIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cblxuICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHcmFwaGljc0ltcGwgaW1wbGVtZW50cyBHcmFwaGljcyB7XG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBtYWluQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIGZvbnQ6IEZvbnQ7XG4gIGZvbnRTaXplOiBudW1iZXIgPSAyMDtcbiAgb2Zmc2NyZWVuOiBPZmZzY3JlZW4gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lY2FudmFzXCIpO1xuICAgIHRoaXMuY3R4ID0gPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD4gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIsIHsgYWxwaGE6IGZhbHNlIH0pO1xuICAgIHRoaXMubWFpbkN0eCA9IHRoaXMuY3R4O1xuXG4gICAgKDxhbnk+IHRoaXMuY3R4KS53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAoPGFueT4gdGhpcy5jYW52YXMpLnN0eWxlLmZvbnRTbW9vdGggPSBcIm5ldmVyXCI7XG4gICAgKDxhbnk+IHRoaXMuY2FudmFzKS5zdHlsZS53ZWJraXRGb250U21vb3RoaW5nID0gXCJub25lXCI7XG5cbiAgICBpZiAoaXNGaXJlZm94KSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IFwiY3Jpc3AtZWRnZXNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSBcInBpeGVsYXRlZFwiO1xuICAgIH1cblxuICAgIHRoaXMuZm9udCA9IG5ldyBGb250SW1wbChcImZvbnQudHRmXCIsIFwiR3V0ZURlZmF1bHRcIik7XG4gICAgaWYgKHRoaXMuZm9udCkge1xuICAgICAgdGhpcy5hcHBseUZvbnQoKTtcbiAgICB9XG4gIH1cblxuICBnZXRFcnJvcigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgXG4gIHJlbmRlclN0YXJ0KCk6IHZvaWQge1xuXG4gIH1cblxuICByZW5kZXJFbmQoKTogdm9pZCB7XG5cbiAgfVxuICBcbiAgbmV3UmVzb3VyY2VMb2FkZWQoKTogdm9pZCB7XG4gIH1cblxuICBpbml0UmVzb3VyY2VPbkxvYWRlZCgpOiB2b2lkIHtcbiAgfVxuXG4gIHNtb290aCgpOiB2b2lkIHtcbiAgICAoPGFueT4gdGhpcy5jdHgpLndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdHJ1ZTtcbiAgICAoPGFueT4gdGhpcy5jYW52YXMpLnN0eWxlLmZvbnRTbW9vdGggPSBcImluaXRpYWxcIjtcbiAgICAoPGFueT4gdGhpcy5jYW52YXMpLnN0eWxlLndlYmtpdEZvbnRTbW9vdGhpbmcgPSBcImluaXRpYWxcIjtcblxuICAgIHRoaXMuY2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gXCJpbml0aWFsXCI7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKTogRE9NTWF0cml4IHtcbiAgICByZXR1cm4gdGhpcy5jdHguZ2V0VHJhbnNmb3JtKCk7XG4gIH1cbiAgXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGNsaXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IHNxdWFyZVBhdGggPSBuZXcgUGF0aDJEKCk7XG4gICAgc3F1YXJlUGF0aC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuY3R4LmNsaXAoc3F1YXJlUGF0aCk7XG4gIH1cblxuICBjcmVhdGVPZmZzY3JlZW4oKTogT2Zmc2NyZWVuIHtcbiAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgY2FudmFzLmhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBpZiAoY3R4KSB7XG4gICAgICAoPGFueT4gY3R4KS53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICg8YW55PiBjYW52YXMpLnN0eWxlLmZvbnRTbW9vdGggPSBcIm5ldmVyXCI7XG4gICAgICAoPGFueT4gY2FudmFzKS5zdHlsZS53ZWJraXRGb250U21vb3RoaW5nID0gXCJub25lXCI7XG5cbiAgICAgIHJldHVybiBuZXcgT2Zmc2NyZWVuSW1wbChjYW52YXMsIGN0eCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjcmVhdGUgb2Zmc2NyZWVuIGNhbnZhc1wiKTtcbiAgICB9XG4gIH1cblxuICBnZXRPZmZzY3JlZW4oKTogT2Zmc2NyZWVuIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2NyZWVuO1xuICB9XG5cbiAgZHJhd1RvT2Zmc2NyZWVuKHNjcmVlbjogT2Zmc2NyZWVuIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmIChzY3JlZW4pIHtcbiAgICAgIHRoaXMuY3R4ID0gKHNjcmVlbiBhcyBPZmZzY3JlZW5JbXBsKS5jdHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3R4ID0gdGhpcy5tYWluQ3R4O1xuICAgIH1cbiAgICB0aGlzLm9mZnNjcmVlbiA9IHNjcmVlbjtcbiAgfVxuXG4gIGRyYXdPZmZzY3JlZW4oc2NyZWVuOiBPZmZzY3JlZW4pOiB2b2lkIHtcbiAgICAoPGFueT4gdGhpcy5jdHgpLndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSgoc2NyZWVuIGFzIE9mZnNjcmVlbkltcGwpLmNhbnZhcywgMCwgIDApO1xuICB9XG5cbiAgZHJhd1NjYWxlZE9mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbiwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgKDxhbnk+IHRoaXMuY3R4KS53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoKHNjcmVlbiBhcyBPZmZzY3JlZW5JbXBsKS5jYW52YXMsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgY2xlYXJSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGZpdFNjcmVlbihwaXhlbFNjYWxlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB3aWR0aDogbnVtYmVyID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgICBjb25zdCBoZWlnaHQ6IG51bWJlciA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKVxuICAgIGNvbnN0IHJlYWxXaWR0aDogbnVtYmVyID0gTWF0aC5mbG9vcih3aWR0aCAvIHBpeGVsU2NhbGUpICogcGl4ZWxTY2FsZTtcbiAgICBjb25zdCByZWFsSGVpZ2h0OiBudW1iZXIgPSBNYXRoLmZsb29yKGhlaWdodCAvIHBpeGVsU2NhbGUpICogcGl4ZWxTY2FsZTtcbiAgICBjb25zdCB2aXJ0dWFsV2lkdGg6IG51bWJlciA9IHJlYWxXaWR0aCAvIHBpeGVsU2NhbGU7XG4gICAgY29uc3QgdmlydHVhbEhlaWdodDogbnVtYmVyID0gcmVhbEhlaWdodCAvIHBpeGVsU2NhbGU7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHZpcnR1YWxXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB2aXJ0dWFsSGVpZ2h0O1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gcmVhbFdpZHRoICsgXCJweFwiO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IHJlYWxIZWlnaHQgKyBcInB4XCI7XG4gIH1cblxuICBzZXRBbHBoYShhbHBoYTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgfVxuICBcbiAgY29weSgpOiBCaXRtYXAge1xuICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcbiAgXG4gICAgY2FudmFzLmdldENvbnRleHQoXCIyZFwiKT8uZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwKTtcbiAgICByZXR1cm4gbmV3IENvcHlCaXRtYXAoY2FudmFzKTtcbiAgfVxuXG4gIGdldFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgfVxuICBcbiAgcHVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmN0eC5zYXZlKCk7XG4gIH1cblxuICBwb3AoKTogdm9pZCB7XG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jdHgudHJhbnNsYXRlKHgseSk7XG4gIH1cblxuICBzY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY3R4LnNjYWxlKHgseSk7XG4gIH1cblxuICBhcHBseUZvbnQoKTogdm9pZCB7XG4gICAgdGhpcy5mb250LmFwcGx5KHRoaXMuY3R4LCB0aGlzLmZvbnRTaXplKTtcbiAgfVxuXG4gIHNldEZvbnQoZm9udDogRm9udCk6IHZvaWQge1xuICAgIHRoaXMuZm9udCA9IGZvbnQ7XG4gICAgdGhpcy5hcHBseUZvbnQoKTtcbiAgfVxuXG4gIHNldEZvbnRTaXplKHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZm9udFNpemUgPSBzaXplO1xuICAgIHRoaXMuYXBwbHlGb250KCk7XG4gIH1cblxuICBnZXRTdHJpbmdXaWR0aCh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgfVxuXG4gIGRyYXdTdHJpbmcoeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHQ6IHN0cmluZywgY29sOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2w7XG4gICAgdGhpcy5jdHguZmlsbFRleHQodGV4dCwgeCwgeSk7XG4gIH1cblxuICBzZXRDb21wb3NpdGUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgKDxhbnk+IHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbikgPSBuYW1lO1xuICB9XG5cbiAgZHJhd0NpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNvbDogc3RyaW5nLCB3aWR0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBjb2w7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgZmlsbENpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNvbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sO1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gIH1cblxuICBmaWxsUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KHgseSx3aWR0aCxoZWlnaHQpO1xuICB9XG4gIFxuICBzZXRMaW5lRGFzaChzZWdtZW50czogbnVtYmVyW10pOiB2b2lkIHtcbiAgICB0aGlzLmN0eC5zZXRMaW5lRGFzaChzZWdtZW50cyk7XG4gIH1cblxuICBkcmF3TGluZSh4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyLCBjb2w6IHN0cmluZywgd2lkdGg6IG51bWJlciA9IDEpOiB2b2lkIHtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGNvbDtcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oeDEsIHkxKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXdCaXRtYXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGJpdG1hcDogQml0bWFwKTogdm9pZCB7XG4gICAgaWYgKCFiaXRtYXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAoPGFueT4gdGhpcy5jdHgpLndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIGJpdG1hcC5kcmF3KHRoaXMsIHgsIHkpO1xuICB9XG5cbiAgZHJhd1NjYWxlZEJpdG1hcCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGJpdG1hcDogQml0bWFwKTogdm9pZCB7XG4gICAgaWYgKCFiaXRtYXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgKDxhbnk+IHRoaXMuY3R4KS53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICBiaXRtYXAuZHJhd1NjYWxlZCh0aGlzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxufSIsImltcG9ydCB7IE1hcE5vZGUgfSBmcm9tIFwiLi4vcGF0aC9NYXBOb2RlXCI7XG5cbmludGVyZmFjZSBDb2wge1xuICAgIHI6IG51bWJlcjtcbiAgICBnOiBudW1iZXI7XG4gICAgYjogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBoZXhUb1JnYihoZXg6IHN0cmluZyk6IENvbCB7XG4gICAgdmFyIGJpZ2ludCA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgIHZhciByID0gKGJpZ2ludCA+PiAxNikgJiAyNTU7XG4gICAgdmFyIGcgPSAoYmlnaW50ID4+IDgpICYgMjU1O1xuICAgIHZhciBiID0gYmlnaW50ICYgMjU1O1xuXG4gICAgcmV0dXJuIHtyLCBnLCBifVxufVxuXG5mdW5jdGlvbiBkZWx0YUUocmdiQTogQ29sLCByZ2JCOiBDb2wpIHtcbiAgICBsZXQgbGFiQSA9IHJnYjJsYWIocmdiQSk7XG4gICAgbGV0IGxhYkIgPSByZ2IybGFiKHJnYkIpO1xuICAgIGxldCBkZWx0YUwgPSBsYWJBWzBdIC0gbGFiQlswXTtcbiAgICBsZXQgZGVsdGFBID0gbGFiQVsxXSAtIGxhYkJbMV07XG4gICAgbGV0IGRlbHRhQiA9IGxhYkFbMl0gLSBsYWJCWzJdO1xuICAgIGxldCBjMSA9IE1hdGguc3FydChsYWJBWzFdICogbGFiQVsxXSArIGxhYkFbMl0gKiBsYWJBWzJdKTtcbiAgICBsZXQgYzIgPSBNYXRoLnNxcnQobGFiQlsxXSAqIGxhYkJbMV0gKyBsYWJCWzJdICogbGFiQlsyXSk7XG4gICAgbGV0IGRlbHRhQyA9IGMxIC0gYzI7XG4gICAgbGV0IGRlbHRhSCA9IGRlbHRhQSAqIGRlbHRhQSArIGRlbHRhQiAqIGRlbHRhQiAtIGRlbHRhQyAqIGRlbHRhQztcbiAgICBkZWx0YUggPSBkZWx0YUggPCAwID8gMCA6IE1hdGguc3FydChkZWx0YUgpO1xuICAgIGxldCBzYyA9IDEuMCArIDAuMDQ1ICogYzE7XG4gICAgbGV0IHNoID0gMS4wICsgMC4wMTUgKiBjMTtcbiAgICBsZXQgZGVsdGFMS2xzbCA9IGRlbHRhTCAvICgxLjApO1xuICAgIGxldCBkZWx0YUNrY3NjID0gZGVsdGFDIC8gKHNjKTtcbiAgICBsZXQgZGVsdGFIa2hzaCA9IGRlbHRhSCAvIChzaCk7XG4gICAgbGV0IGkgPSBkZWx0YUxLbHNsICogZGVsdGFMS2xzbCArIGRlbHRhQ2tjc2MgKiBkZWx0YUNrY3NjICsgZGVsdGFIa2hzaCAqIGRlbHRhSGtoc2g7XG4gICAgcmV0dXJuIGkgPCAwID8gMCA6IE1hdGguc3FydChpKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gcmdiMmxhYihyZ2I6IENvbCl7XG4gICAgbGV0IHIgPSByZ2IuciAvIDI1NSwgZyA9IHJnYi5nIC8gMjU1LCBiID0gcmdiLmIgLyAyNTUsIHgsIHksIHo7XG4gICAgciA9IChyID4gMC4wNDA0NSkgPyBNYXRoLnBvdygociArIDAuMDU1KSAvIDEuMDU1LCAyLjQpIDogciAvIDEyLjkyO1xuICAgIGcgPSAoZyA+IDAuMDQwNDUpID8gTWF0aC5wb3coKGcgKyAwLjA1NSkgLyAxLjA1NSwgMi40KSA6IGcgLyAxMi45MjtcbiAgICBiID0gKGIgPiAwLjA0MDQ1KSA/IE1hdGgucG93KChiICsgMC4wNTUpIC8gMS4wNTUsIDIuNCkgOiBiIC8gMTIuOTI7XG4gICAgeCA9IChyICogMC40MTI0ICsgZyAqIDAuMzU3NiArIGIgKiAwLjE4MDUpIC8gMC45NTA0NztcbiAgICB5ID0gKHIgKiAwLjIxMjYgKyBnICogMC43MTUyICsgYiAqIDAuMDcyMikgLyAxLjAwMDAwO1xuICAgIHogPSAociAqIDAuMDE5MyArIGcgKiAwLjExOTIgKyBiICogMC45NTA1KSAvIDEuMDg4ODM7XG4gICAgeCA9ICh4ID4gMC4wMDg4NTYpID8gTWF0aC5wb3coeCwgMS8zKSA6ICg3Ljc4NyAqIHgpICsgMTYvMTE2O1xuICAgIHkgPSAoeSA+IDAuMDA4ODU2KSA/IE1hdGgucG93KHksIDEvMykgOiAoNy43ODcgKiB5KSArIDE2LzExNjtcbiAgICB6ID0gKHogPiAwLjAwODg1NikgPyBNYXRoLnBvdyh6LCAxLzMpIDogKDcuNzg3ICogeikgKyAxNi8xMTY7XG4gICAgcmV0dXJuIFsoMTE2ICogeSkgLSAxNiwgNTAwICogKHggLSB5KSwgMjAwICogKHkgLSB6KV1cbiAgfVxuXG5leHBvcnQgY2xhc3MgUGFsZXR0ZSB7XG4gIGNvbHM6IENvbFtdID0gW107XG4gIG1hcHBpbmc6IFJlY29yZDxudW1iZXIsIENvbD4gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihoZXhWYWx1ZXM6IHN0cmluZykge1xuICAgIGZvciAoY29uc3QgaGV4IG9mIGhleFZhbHVlcy5zcGxpdChcIlxcblwiKSkge1xuICAgICAgICB0aGlzLmNvbHMucHVzaChoZXhUb1JnYihoZXgpKTtcbiAgICB9XG4gIH1cblxuICBmaW5kQmVzdE1hdGNoKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpOiBDb2wge1xuICAgIGNvbnN0IHRvTWF0Y2hDb2w6IENvbCA9IHsgciwgZywgYiB9O1xuICAgIGxldCBiZXN0TWF0Y2g6IENvbCA9IHRoaXMuY29sc1swXTtcbiAgICBsZXQgc21hbGxlc3REZWx0YSA9IDEwMDA7XG5cbiAgICBmb3IgKGNvbnN0IHBhbENvbCBvZiB0aGlzLmNvbHMpIHtcbiAgICAgICAgY29uc3QgZGlmID0gZGVsdGFFKHBhbENvbCwgdG9NYXRjaENvbCk7XG4gICAgICAgIGlmIChkaWYgPCBzbWFsbGVzdERlbHRhKSB7XG4gICAgICAgICAgICBzbWFsbGVzdERlbHRhID0gZGlmO1xuICAgICAgICAgICAgYmVzdE1hdGNoID0gcGFsQ29sO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgfVxuXG4gIGFkanVzdEltYWdlKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICBjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICAgICAgICBjb25zdCBpZDogSW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLDAsaW1hZ2Uud2lkdGgsaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDtpPGlkLmRhdGEubGVuZ3RoO2krPTQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2w6IG51bWJlciA9IGlkLmRhdGFbaV07XG5cbiAgICAgICAgICAgICAgICBjb25zdCByID0gaWQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBnID0gaWQuZGF0YVtpICsgMV07XG4gICAgICAgICAgICAgICAgY29uc3QgYiA9IGlkLmRhdGFbaSArIDJdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkID0gciB8ICgweEZGMDAgJiAoZyA8PCA4KSkgfCAoMHhGRjAwMDAgJiAoYiA8PCAxNikpO1xuICAgICAgICAgICAgICAgIGxldCBiZXN0TWF0Y2ggPSB0aGlzLm1hcHBpbmdbY29tYmluZWRdO1xuICAgICAgICAgICAgICAgIGlmICghYmVzdE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaCA9IHRoaXMuZmluZEJlc3RNYXRjaChyLCBnLCBiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBwaW5nW2NvbWJpbmVkXSA9IGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWQuZGF0YVtpXSA9IGJlc3RNYXRjaC5yO1xuICAgICAgICAgICAgICAgIGlkLmRhdGFbaSArIDFdID0gYmVzdE1hdGNoLmc7XG4gICAgICAgICAgICAgICAgaWQuZGF0YVtpICsgMl0gPSBiZXN0TWF0Y2guYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaWQsIDAsIDApO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHJlc3VsdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChcIkZhaWx1cmUgdG8gY3JlYXRlIGNvbnRleHRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCB7IGlzTXVzaWNPbiwgaXNTb3VuZE9uIH0gZnJvbSBcIi4uL0d1dGVcIjtcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSBcIi4uL1NvdW5kXCI7XG5cbmxldCBBdWRpb0NvbnRleHQ6IGFueTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCAoPGFueT53aW5kb3cpLndlYmtpdEF1ZGlvQ29udGV4dDtcbn1cbmV4cG9ydCBsZXQgQVVESU9fQ09OVEVYVDogQXVkaW9Db250ZXh0O1xuXG5mdW5jdGlvbiBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCkge1xuICBpZiAoaXNNdXNpY09uKCkpIHtcbiAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuc3RvcCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEFVRElPX0NPTlRFWFQuc3VzcGVuZCgpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1c3BlbmQgYXVkaW8gY29udGV4dCBmYWlsZWRcIik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJTdXNwZW5kIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgQVVESU9fQ09OVEVYVC5yZXN1bWUoKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bWUgYXVkaW8gY29udGV4dCBmYWlsZWRcIik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bWUgYXVkaW8gY29udGV4dCBmYWlsZWRcIik7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyEucGxheShTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyEudm9sdW1lKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaXNTb3VuZE9uKCkpIHtcbiAgICBmb3IgKGNvbnN0IGxvb3Agb2YgU291bmRJbXBsLkNVUlJFTlRfTE9PUFMpIHtcbiAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgbG9vcC5zdG9wKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvb3AucGxheShsb29wLnZvbHVtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTb3VuZEltcGwgaW1wbGVtZW50cyBTb3VuZCB7XG4gIHN0YXRpYyBDVVJSRU5UX01VU0lDOiBTb3VuZEltcGwgfCBudWxsO1xuICBzdGF0aWMgQ1VSUkVOVF9MT09QUzogU291bmRJbXBsW10gPSBbXTtcblxuICBzdGF0aWMgc291bmRWb2x1bWU6IG51bWJlciA9IDE7XG4gIHN0YXRpYyBtdXNpY1ZvbHVtZTogbnVtYmVyID0gMTtcblxuICBzdGF0aWMgc2V0U291bmRWb2x1bWUodjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zb3VuZFZvbHVtZSA9IHY7XG5cbiAgICBmb3IgKGNvbnN0IGxvb3Agb2YgdGhpcy5DVVJSRU5UX0xPT1BTKSB7XG4gICAgICBsb29wLmdhaW4uZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZShsb29wLnZvbHVtZSAqIFNvdW5kSW1wbC5zb3VuZFZvbHVtZSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSArIDAuMjUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRTb3VuZFZvbHVtZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNvdW5kVm9sdW1lO1xuICB9XG5cbiAgc3RhdGljIHNldE11c2ljVm9sdW1lKHY6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubXVzaWNWb2x1bWUgPSB2O1xuXG4gICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDKSB7XG4gICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuZ2Fpbikge1xuICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5nYWluLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMudm9sdW1lICogU291bmRJbXBsLm11c2ljVm9sdW1lLCBBVURJT19DT05URVhULmN1cnJlbnRUaW1lICsgMC4yNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldE11c2ljVm9sdW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubXVzaWNWb2x1bWU7XG4gIH1cbiAgXG4gIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBkYXRhITogQXJyYXlCdWZmZXI7XG4gIHZvbHVtZTogbnVtYmVyID0gMTtcbiAgYnVmZmVyITogQXVkaW9CdWZmZXI7XG4gIG11c2ljOiBib29sZWFuID0gZmFsc2U7XG4gIHNvdXJjZSE6IEF1ZGlvQnVmZmVyU291cmNlTm9kZSB8IG51bGw7XG4gIGdhaW4hOiBHYWluTm9kZTtcbiAgdXJsOiBzdHJpbmc7XG4gIGxvb3BlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIG11c2ljOiBib29sZWFuLCBhcnJheUJ1ZmZlcjogUHJvbWlzZTxBcnJheUJ1ZmZlcj4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLm5hbWUgPSB1cmw7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5tdXNpYyA9IG11c2ljO1xuICAgIFxuICAgIGlmIChhcnJheUJ1ZmZlcikge1xuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgYXJyYXlCdWZmZXIudGhlbigoYXJyYXlCdWZmZXI6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGFycmF5QnVmZmVyO1xuICAgICAgICB0aGlzLnRyeUxvYWQoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICByZXEub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgIFxuICAgICAgcmVxLm9ubG9hZCA9IChldmVudCkgPT4ge1xuICAgICAgICB2YXIgYXJyYXlCdWZmZXIgPSByZXEucmVzcG9uc2U7IFxuICAgICAgICBpZiAoYXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBhcnJheUJ1ZmZlcjtcbiAgICAgICAgICB0aGlzLnRyeUxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIFxuICAgICAgcmVxLnNlbmQoKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlMb2FkKCk6IHZvaWQge1xuICAgIGlmIChBVURJT19DT05URVhUICYmIHRoaXMuZGF0YSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IEFVRElPX0NPTlRFWFQuZGVjb2RlQXVkaW9EYXRhKHRoaXMuZGF0YSwgKGJ1ZmZlcjogQXVkaW9CdWZmZXIpID0+IHtcbiAgICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucGxheSh0aGlzLnZvbHVtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAoZSkgPT4geyBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBsb2FkOiBcIisgdGhpcy51cmwpIH0pO1xuICAgICAgICBpZiAocHJvbWlzZSkge1xuICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7fSkuY2F0Y2goKGUpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlY29kZUF1ZGlvRGF0YSBleGNlcHRpb24gb24gbG9hZGluZyBcIiArIHRoaXMudXJsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25maXJtQXVkaW9Db250ZXh0KCkge1xuICAgIHRyeSB7XG4gICAgICBBVURJT19DT05URVhULnJlc3VtZSgpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdW1lIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coXCJSZXN1bWUgYXVkaW8gY29udGV4dCBmYWlsZWRcIik7XG4gICAgfVxuICB9XG5cbiAgaW5pdE9uRmlyc3RDbGljaygpOiB2b2lkIHtcbiAgICBpZiAoIUFVRElPX0NPTlRFWFQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIEFVRElPX0NPTlRFWFQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgIEFVRElPX0NPTlRFWFQucmVzdW1lKCkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VtZSBhdWRpbyBjb250ZXh0IGZhaWxlZFwiKTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bWUgYXVkaW8gY29udGV4dCBmYWlsZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50cnlMb2FkKCk7XG4gIH1cblxuICBwbGF5KHZvbHVtZTogbnVtYmVyLCBsb29wOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpcm1BdWRpb0NvbnRleHQoKTtcbiAgICB0aGlzLnZvbHVtZSA9IHZvbHVtZTtcblxuICAgIGlmICghdGhpcy5idWZmZXIpIHtcbiAgICAgIGlmICh0aGlzLm11c2ljKSB7XG4gICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9IHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyAhPT0gdGhpcykge1xuICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9IHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRvbid0IHBsYXkgc291bmQgZWZmZWN0cyBpbiB0aGUgYmFja2dyb3VuZCBvciB0aGV5IGFsbFxuICAgICAgLy8gZ2V0IHN0YWNrZWQgdXBcbiAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5tdXNpYyAmJiAhaXNNdXNpY09uKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLm11c2ljICYmICFpc1NvdW5kT24oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc291cmNlID0gQVVESU9fQ09OVEVYVC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICB0aGlzLnNvdXJjZS5idWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICB0aGlzLmdhaW4gPSBBVURJT19DT05URVhULmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLnNvdXJjZS5jb25uZWN0KHRoaXMuZ2Fpbik7XG4gICAgdGhpcy5nYWluLmNvbm5lY3QoQVVESU9fQ09OVEVYVC5kZXN0aW5hdGlvbik7XG5cbiAgICB0aGlzLmxvb3BlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm11c2ljIHx8IGxvb3ApIHtcbiAgICAgIHRoaXMuZ2Fpbi5nYWluLnZhbHVlID0gMDtcbiAgICAgIHRoaXMuc291cmNlLmxvb3AgPSB0cnVlO1xuICAgICAgdGhpcy5sb29wZWQgPSB0cnVlO1xuICAgIH0gXG5cbiAgICB0aGlzLnNvdXJjZS5zdGFydCgwKTtcbiAgICBcbiAgICBpZiAodGhpcy5tdXNpYyB8fCBsb29wKSB7XG4gICAgICB0aGlzLmdhaW4uZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSh2b2x1bWUgKiAobG9vcCA/IFNvdW5kSW1wbC5zb3VuZFZvbHVtZSA6IFNvdW5kSW1wbC5tdXNpY1ZvbHVtZSksIEFVRElPX0NPTlRFWFQuY3VycmVudFRpbWUgKyAyKTtcbiAgICB9ICBlbHNlIHtcbiAgICAgIHRoaXMuZ2Fpbi5nYWluLnZhbHVlID0gdm9sdW1lICogU291bmRJbXBsLnNvdW5kVm9sdW1lO1xuICAgIH1cblxuICAgIGlmIChsb29wKSB7XG4gICAgICBTb3VuZEltcGwuQ1VSUkVOVF9MT09QUy5wdXNoKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AocmVtb3ZlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgaWYgKHRoaXMubG9vcGVkKSB7XG4gICAgICAgIHRoaXMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKDAsIEFVRElPX0NPTlRFWFQuY3VycmVudFRpbWUgKyAzKTtcbiAgICAgICAgY29uc3QgdGVtcFNvdXJjZTogQXVkaW9CdWZmZXJTb3VyY2VOb2RlID0gdGhpcy5zb3VyY2U7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRlbXBTb3VyY2Uuc3RvcCgpO1xuICAgICAgICB9LCA0MDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc291cmNlLnN0b3AoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChyZW1vdmUpIHtcbiAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSBTb3VuZEltcGwuQ1VSUkVOVF9MT09QUy5maW5kSW5kZXgoYSA9PiBhID09PSB0aGlzKTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX0xPT1BTLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBCaXRtYXAsIEdyYXBoaWNzIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBzaG91bGRQcmVzY2FsZVRpbGVzZXRzLCBzaG91bGRVc2VYYnIgfSBmcm9tIFwiLi4vR3V0ZVwiO1xuaW1wb3J0IHsgVGlsZXNldCB9IGZyb20gXCIuLi9UaWxlc2V0XCI7XG5pbXBvcnQgeyBHcmFwaGljc0ltcGwgfSBmcm9tIFwiLi9HcmFwaGljc0ltcGxcIjtcbmltcG9ydCB7IFBhbGV0dGUgfSBmcm9tIFwiLi9QYWxldHRlXCI7XG5cbmltcG9ydCB7eGJyMngsIHhicjN4LCB4YnI0eH0gZnJvbSAneGJyLWpzJztcblxuY2xhc3MgVGlsZSBpbXBsZW1lbnRzIEJpdG1hcCB7XG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbG9hZGVkOiBib29sZWFuO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2NhbGU6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nID0gXCJ0aWxlXCI7XG4gIGNhY2hlZDogUmVjb3JkPG51bWJlciwgSFRNTENhbnZhc0VsZW1lbnQ+ID0ge307XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MSW1hZ2VFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpIHtcbiAgICB0aGlzLmltYWdlID0gY2FudmFzO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGN0eCA9IChncmFwaGljcyBhcyBHcmFwaGljc0ltcGwpLmN0eDtcblxuICAgIGlmICghc2hvdWxkUHJlc2NhbGVUaWxlc2V0cygpICYmIHNob3VsZFVzZVhicigpICYmICh0aGlzLnNjYWxlID09PSAyIHx8IHRoaXMuc2NhbGUgPT09IDMpKSB7XG4gICAgICBpZiAoIXRoaXMuY2FjaGVkW3RoaXMuc2NhbGVdKSB7XG4gICAgICAgICAgdGhpcy5jYWNoZWRbdGhpcy5zY2FsZV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgIHRoaXMuY2FjaGVkW3RoaXMuc2NhbGVdLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgICB0aGlzLmNhY2hlZFt0aGlzLnNjYWxlXS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLmNhY2hlZFt0aGlzLnNjYWxlXS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgY3R4IS5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZURhdGEgPSBjdHghLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgY29uc3Qgb3JpZ2luYWxQaXhlbFZpZXcgPSBuZXcgVWludDMyQXJyYXkob3JpZ2luYWxJbWFnZURhdGEuZGF0YS5idWZmZXIpO1xuICAgICAgICAgIGNvbnN0IHNjYWxlZFBpeGVsVmlldyA9IHRoaXMuc2NhbGUgPT09IDIgPyB4YnIyeChvcmlnaW5hbFBpeGVsVmlldywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpIDogeGJyM3gob3JpZ2luYWxQaXhlbFZpZXcsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAgIGNvbnN0IGRlc3RXaWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLnNjYWxlO1xuICAgICAgICAgIGNvbnN0IGRlc3RIZWlnaHQgPSB0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGU7XG4gICAgICAgICAgdGhpcy5jYWNoZWRbdGhpcy5zY2FsZV0ud2lkdGggPSBkZXN0V2lkdGg7XG4gICAgICAgICAgdGhpcy5jYWNoZWRbdGhpcy5zY2FsZV0uaGVpZ2h0ID0gZGVzdEhlaWdodDtcbiAgICAgICAgICBjb25zdCBzY2FsZWRJbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKG5ldyBVaW50OENsYW1wZWRBcnJheShzY2FsZWRQaXhlbFZpZXcuYnVmZmVyKSwgdGhpcy5jYWNoZWRbdGhpcy5zY2FsZV0ud2lkdGgsIHRoaXMuY2FjaGVkW3RoaXMuc2NhbGVdLmhlaWdodCk7XG5cbiAgICAgICAgICBjdHghLnB1dEltYWdlRGF0YShzY2FsZWRJbWFnZURhdGEsIDAsIDApO1xuICAgICAgfVxuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhY2hlZFt0aGlzLnNjYWxlXSwgeCwgeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB4LCB5LCB0aGlzLndpZHRoICogdGhpcy5zY2FsZSwgdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlKTtcbiAgICB9XG4gIH1cblxuICBkcmF3U2NhbGVkKGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY3R4ID0gKGdyYXBoaWNzIGFzIEdyYXBoaWNzSW1wbCkuY3R4O1xuICAgIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oTWF0aC5mbG9vcih3aWR0aCAvIHRoaXMud2lkdGgpLCBNYXRoLmZsb29yKGhlaWdodCAvIHRoaXMuaGVpZ2h0KSk7XG5cbiAgICBpZiAoIXNob3VsZFByZXNjYWxlVGlsZXNldHMoKSAmJiBzaG91bGRVc2VYYnIoKSAmJiAoc2NhbGUgPT09IDIgfHwgc2NhbGUgPT09IDMpKSB7XG4gICAgICBpZiAoIXRoaXMuY2FjaGVkW3NjYWxlXSkge1xuICAgICAgICB0aGlzLmNhY2hlZFtzY2FsZV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgIHRoaXMuY2FjaGVkW3NjYWxlXS53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgICAgdGhpcy5jYWNoZWRbc2NhbGVdLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FjaGVkW3NjYWxlXS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgY3R4IS5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZURhdGEgPSBjdHghLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgY29uc3Qgb3JpZ2luYWxQaXhlbFZpZXcgPSBuZXcgVWludDMyQXJyYXkob3JpZ2luYWxJbWFnZURhdGEuZGF0YS5idWZmZXIpO1xuICAgICAgICAgIGNvbnN0IHNjYWxlZFBpeGVsVmlldyA9IHNjYWxlID09PSAyID8geGJyMngob3JpZ2luYWxQaXhlbFZpZXcsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSA6IHhicjN4KG9yaWdpbmFsUGl4ZWxWaWV3LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgICBjb25zdCBkZXN0V2lkdGggPSB0aGlzLndpZHRoICogc2NhbGU7XG4gICAgICAgICAgY29uc3QgZGVzdEhlaWdodCA9IHRoaXMuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgdGhpcy5jYWNoZWRbc2NhbGVdLndpZHRoID0gZGVzdFdpZHRoO1xuICAgICAgICAgIHRoaXMuY2FjaGVkW3NjYWxlXS5oZWlnaHQgPSBkZXN0SGVpZ2h0O1xuICAgICAgICAgIGNvbnN0IHNjYWxlZEltYWdlRGF0YSA9IG5ldyBJbWFnZURhdGEobmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHNjYWxlZFBpeGVsVmlldy5idWZmZXIpLCB0aGlzLmNhY2hlZFtzY2FsZV0ud2lkdGgsIHRoaXMuY2FjaGVkW3NjYWxlXS5oZWlnaHQpO1xuXG4gICAgICAgICAgY3R4IS5wdXRJbWFnZURhdGEoc2NhbGVkSW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgIH1cbiAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYWNoZWRbc2NhbGVdLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRPbkZpcnN0Q2xpY2soKTogdm9pZCB7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRpbGVzZXRJbXBsIGltcGxlbWVudHMgVGlsZXNldCB7XG4gIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICB0aWxlV2lkdGg6IG51bWJlcjtcbiAgdGlsZUhlaWdodDogbnVtYmVyO1xuICBvcmlnaW5hbFRpbGVXaWR0aDogbnVtYmVyO1xuICBvcmlnaW5hbFRpbGVIZWlnaHQ6IG51bWJlcjtcbiAgaW1hZ2U6IGFueSB8IG51bGw7XG4gIGJpdG1hcHM6IFRpbGVbXSA9IFtdO1xuICBzY2FubGluZTogbnVtYmVyID0gMDtcbiAgdGlsZUNvdW50OiBudW1iZXIgPSAwO1xuICB0aW50czogUmVjb3JkPHN0cmluZywgSFRNTEltYWdlRWxlbWVudD4gPSB7fTtcbiAgdGludFRpbGVzOiBSZWNvcmQ8c3RyaW5nLCBCaXRtYXBbXT4gPSB7fTtcbiAgc2NhbGU6IG51bWJlcjtcbiAgb25Mb2FkZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgbmFtZTogc3RyaW5nO1xuICBcbiAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIGRhdGFVcmxMb2FkZXI6IFByb21pc2U8QmxvYj4gfCB1bmRlZmluZWQsIHRpbGVXaWR0aDogbnVtYmVyLCB0aWxlSGVpZ2h0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIgPSAxLCBwYWw6IFBhbGV0dGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnRpbGVXaWR0aCA9IHRoaXMub3JpZ2luYWxUaWxlV2lkdGggPSB0aWxlV2lkdGg7XG4gICAgdGhpcy50aWxlSGVpZ2h0ID0gdGhpcy5vcmlnaW5hbFRpbGVIZWlnaHQgPSB0aWxlSGVpZ2h0O1xuICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICB0aGlzLm5hbWUgPSB1cmw7XG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGlmIChzaG91bGRQcmVzY2FsZVRpbGVzZXRzKCkgJiYgc2NhbGUgIT09IDEpIHtcbiAgICAgICAgY29uc3Qgc2NhbGVkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXG4gICAgICAgIGlmIChzaG91bGRVc2VYYnIoKSkge1xuICAgICAgICAgIGNvbnN0IGN0eCA9IHNjYWxlZEltYWdlLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICBjdHghLmRyYXdJbWFnZSh0aGlzLmltYWdlISwgMCwgMCk7XG5cbiAgICAgICAgICBjb25zdCBvcmlnaW5hbEltYWdlRGF0YSA9IGN0eCEuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuaW1hZ2UhLndpZHRoLCB0aGlzLmltYWdlIS5oZWlnaHQpO1xuICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUGl4ZWxWaWV3ID0gbmV3IFVpbnQzMkFycmF5KG9yaWdpbmFsSW1hZ2VEYXRhLmRhdGEuYnVmZmVyKTtcbiAgICAgICAgICBjb25zdCBzY2FsZWRQaXhlbFZpZXcgPSBzY2FsZSA9PT0gMiA/IHhicjJ4KG9yaWdpbmFsUGl4ZWxWaWV3LCB0aGlzLmltYWdlIS53aWR0aCwgdGhpcy5pbWFnZSEuaGVpZ2h0KSA6IHhicjN4KG9yaWdpbmFsUGl4ZWxWaWV3LCB0aGlzLmltYWdlIS53aWR0aCwgdGhpcy5pbWFnZSEuaGVpZ2h0KTtcblxuICAgICAgICAgIHNjYWxlZEltYWdlLndpZHRoID0gdGhpcy5pbWFnZSEud2lkdGggKiBzY2FsZTtcbiAgICAgICAgICBzY2FsZWRJbWFnZS5oZWlnaHQgPSB0aGlzLmltYWdlIS5oZWlnaHQgKiBzY2FsZTtcbiAgICAgICAgICBjb25zdCBzY2FsZWRJbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKG5ldyBVaW50OENsYW1wZWRBcnJheShzY2FsZWRQaXhlbFZpZXcuYnVmZmVyKSwgc2NhbGVkSW1hZ2Uud2lkdGgsIHNjYWxlZEltYWdlLmhlaWdodCk7XG5cbiAgICAgICAgICBjdHghLnB1dEltYWdlRGF0YShzY2FsZWRJbWFnZURhdGEsIDAsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjYWxlZEltYWdlLndpZHRoID0gdGhpcy5pbWFnZSEud2lkdGggKiBzY2FsZTtcbiAgICAgICAgICBzY2FsZWRJbWFnZS5oZWlnaHQgPSB0aGlzLmltYWdlIS5oZWlnaHQgKiBzY2FsZTtcbiAgICAgICAgICBjb25zdCBjdHggPSBzY2FsZWRJbWFnZS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgY3R4IS5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAoPGFueT4gY3R4ISkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgY3R4Py5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIDAsIDAsIHNjYWxlZEltYWdlLndpZHRoLCBzY2FsZWRJbWFnZS5oZWlnaHQpO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmltYWdlID0gc2NhbGVkSW1hZ2U7XG4gICAgICAgIHRoaXMudGlsZVdpZHRoICo9IHNjYWxlO1xuICAgICAgICB0aGlzLnRpbGVIZWlnaHQgKj0gc2NhbGU7XG4gICAgICAgIHRoaXMub3JpZ2luYWxUaWxlV2lkdGggKj0gc2NhbGU7XG4gICAgICAgIHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0ICo9IHNjYWxlO1xuICAgICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgICAgc2NhbGUgPSAxO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjYW5saW5lID0gTWF0aC5mbG9vcih0aGlzLmltYWdlIS53aWR0aCAvIHRoaXMudGlsZVdpZHRoKTtcbiAgICAgIGNvbnN0IGRlcHRoOiBudW1iZXIgPSBNYXRoLmZsb29yKHRoaXMuaW1hZ2UhLmhlaWdodCAvIHRoaXMudGlsZUhlaWdodCk7XG4gICAgICB0aGlzLnRpbGVDb3VudCA9IGRlcHRoICogdGhpcy5zY2FubGluZTtcblxuICAgICAgaWYgKHBhbCkge1xuICAgICAgICBwYWwuYWRqdXN0SW1hZ2UodGhpcy5pbWFnZSEpLnRoZW4oKGltYWdlKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuXG4gICAgICAgICAgLy8gY3V0IHRoZSBpbWFnZSBpbnRvIHBpZWNlc1xuICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgZGVwdGg7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnNjYW5saW5lOyB4KyspIHtcbiAgICAgICAgICAgICAgdGhpcy5iaXRtYXBzLnB1c2gobmV3IFRpbGUodGhpcy5pbWFnZSEsIHggKiB0aGlzLnRpbGVXaWR0aCwgeSAqIHRoaXMudGlsZUhlaWdodCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCwgc2NhbGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy50aWxlV2lkdGggKj0gc2NhbGU7XG4gICAgICAgICAgdGhpcy50aWxlSGVpZ2h0ICo9IHNjYWxlO1xuICBcbiAgICAgICAgICB0aGlzLm9uTG9hZGVkKCk7XG4gICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3V0IHRoZSBpbWFnZSBpbnRvIHBpZWNlc1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGRlcHRoOyB5KyspIHtcbiAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc2NhbmxpbmU7IHgrKykge1xuICAgICAgICAgICAgdGhpcy5iaXRtYXBzLnB1c2gobmV3IFRpbGUodGhpcy5pbWFnZSEsIHggKiB0aGlzLnRpbGVXaWR0aCwgeSAqIHRoaXMudGlsZUhlaWdodCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCwgc2NhbGUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aWxlV2lkdGggKj0gc2NhbGU7XG4gICAgICAgIHRoaXMudGlsZUhlaWdodCAqPSBzY2FsZTtcblxuICAgICAgICB0aGlzLm9uTG9hZGVkKCk7XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGRhdGFVcmxMb2FkZXIpIHtcbiAgICAgIGRhdGFVcmxMb2FkZXIudGhlbigoYmxvYjogQmxvYikgPT4ge1xuICAgICAgICB2YXIgdXJsQ3JlYXRvciA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcbiAgICAgICAgdGhpcy5pbWFnZSEuc3JjID0gdXJsQ3JlYXRvci5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltYWdlLnNyYyA9IHVybDtcbiAgICB9XG4gIH1cblxuICBnZXRUaWxlc0Fjcm9zcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNjYW5saW5lO1xuICB9XG5cbiAgZ2V0VGlsZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGlsZVdpZHRoO1xuICB9XG5cbiAgZ2V0VGlsZUhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRpbGVIZWlnaHQ7XG4gIH1cblxuICBnZXRUaWxlQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50aWxlQ291bnQ7XG4gIH1cblxuICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICB9XG5cbiAgZ2V0VGlsZSh0aWxlOiBudW1iZXIpOiBCaXRtYXAge1xuICAgIHJldHVybiB0aGlzLmJpdG1hcHNbdGlsZV07XG4gIH1cblxuICBnZXRTaGFkZWRUaWxlKHRpbGU6IG51bWJlciwgdGludE5hbWU6IHN0cmluZywgc2hhZGU6IG51bWJlcik6IEJpdG1hcCB7XG4gICAgbGV0IHRpbGVzID0gdGhpcy50aW50VGlsZXNbdGludE5hbWVdO1xuICAgIGlmICghdGlsZXMpIHtcbiAgICAgIHRpbGVzID0gdGhpcy50aW50VGlsZXNbdGludE5hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IHRpbGVSZWNvcmQgPSB0aWxlc1t0aWxlXTtcbiAgICBpZiAoIXRpbGVSZWNvcmQpIHtcbiAgICAgIGNvbnN0IHg6bnVtYmVyID0gdGlsZSAlIHRoaXMuc2NhbmxpbmU7XG4gICAgICBjb25zdCB5Om51bWJlciA9IE1hdGguZmxvb3IodGlsZSAvIHRoaXMuc2NhbmxpbmUpO1xuICAgICAgbGV0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gdGhpcy50aW50c1t0aW50TmFtZV07XG4gICAgICBpZiAoIWltYWdlKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmltYWdlIS53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UhLmhlaWdodDtcbiAgICAgICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIDAgLCAwKTtcbiAgICAgICAgICBjb25zdCBpZDogSW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLDAsY2FudmFzLndpZHRoLGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgIGZvciAobGV0IGk9MDtpPGlkLmRhdGEubGVuZ3RoO2krPTQpIHtcbiAgICAgICAgICAgIGlkLmRhdGFbaV0gKj0gc2hhZGU7XG4gICAgICAgICAgICBpZC5kYXRhW2kgKyAxXSAqPSBzaGFkZTtcbiAgICAgICAgICAgIGlkLmRhdGFbaSArIDJdICo9IHNoYWRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKGlkLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgIHRoaXMudGludHNbdGludE5hbWVdID0gaW1hZ2U7XG4gICAgICB9XG5cbiAgICAgIHRpbGVSZWNvcmQgPSB0aWxlc1t0aWxlXSA9IG5ldyBUaWxlKGltYWdlLCB4ICogdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCwgeSAqIHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0LCB0aGlzLm9yaWdpbmFsVGlsZVdpZHRoLCB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCwgdGhpcy5zY2FsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRpbGVSZWNvcmQ7XG4gIH1cblxuICBnZXRUaW50ZWRUaWxlKHRpbGU6IG51bWJlciwgdGludE5hbWU6IHN0cmluZywgdGludDogbnVtYmVyW10pOiBCaXRtYXAge1xuICAgIGxldCB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXTtcbiAgICBpZiAoIXRpbGVzKSB7XG4gICAgICB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCB0aWxlUmVjb3JkID0gdGlsZXNbdGlsZV07XG4gICAgaWYgKCF0aWxlUmVjb3JkKSB7XG4gICAgICBjb25zdCB4Om51bWJlciA9IHRpbGUgJSB0aGlzLnNjYW5saW5lO1xuICAgICAgY29uc3QgeTpudW1iZXIgPSBNYXRoLmZsb29yKHRpbGUgLyB0aGlzLnNjYW5saW5lKTtcbiAgICAgIGxldCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMudGludHNbdGludE5hbWVdO1xuICAgICAgaWYgKCFpbWFnZSkge1xuICAgICAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5pbWFnZSEud2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmltYWdlIS5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UhLCAwICwgMCk7XG4gICAgICAgICAgY29uc3QgaWQ6IEltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwwLGNhbnZhcy53aWR0aCxjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICBmb3IgKGxldCBpPTA7aTxpZC5kYXRhLmxlbmd0aDtpKz00KSB7XG4gICAgICAgICAgICAvLyBsZWF2ZSBibGFjayBhbG9uZVxuICAgICAgICAgICAgY29uc3QgYXZnOiBudW1iZXIgPSAoaWQuZGF0YVtpXSArIGlkLmRhdGFbaSsxXSArIGlkLmRhdGFbaSsyXSkvMztcbiAgICAgICAgICAgIGlkLmRhdGFbaV0gPSBNYXRoLmZsb29yKGF2ZyAqIHRpbnRbMF0pO1xuICAgICAgICAgICAgaWQuZGF0YVtpICsgMV0gPSBNYXRoLmZsb29yKGF2ZyAqIHRpbnRbMV0pO1xuICAgICAgICAgICAgaWQuZGF0YVtpICsgMl0gPSBNYXRoLmZsb29yKGF2ZyAqIHRpbnRbMl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKGlkLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgIHRoaXMudGludHNbdGludE5hbWVdID0gaW1hZ2U7XG4gICAgICB9XG5cbiAgICAgIHRpbGVSZWNvcmQgPSB0aWxlc1t0aWxlXSA9IG5ldyBUaWxlKGltYWdlLCB4ICogdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCwgeSAqIHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0LCB0aGlzLm9yaWdpbmFsVGlsZVdpZHRoLCB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCwgdGhpcy5zY2FsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRpbGVSZWNvcmQ7XG4gIH1cblxuICBtb2RpZnkobW9kaWZpY2F0aW9uOiAoaW1hZ2VEYXRhOiBJbWFnZURhdGEpID0+IHZvaWQpOiBUaWxlc2V0IHtcbiAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSB0aGlzLmltYWdlIS53aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5pbWFnZSEuaGVpZ2h0O1xuICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlISwgMCAsIDApO1xuICAgICAgY29uc3QgaWQ6IEltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwwLGNhbnZhcy53aWR0aCxjYW52YXMuaGVpZ2h0KTtcbiAgICAgIG1vZGlmaWNhdGlvbihpZCk7XG4gICAgICBjdHgucHV0SW1hZ2VEYXRhKGlkLCAwLCAwKTtcbiAgICB9XG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aGlzLmJpdG1hcHMpIHtcbiAgICAgIHRpbGUuaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0QmxvY2tDb2xvclRpbGUodGlsZTogbnVtYmVyLCB0aW50TmFtZTogc3RyaW5nLCBjb2w6IG51bWJlcltdKTogQml0bWFwIHtcbiAgICBsZXQgdGlsZXMgPSB0aGlzLnRpbnRUaWxlc1t0aW50TmFtZV07XG4gICAgaWYgKCF0aWxlcykge1xuICAgICAgdGlsZXMgPSB0aGlzLnRpbnRUaWxlc1t0aW50TmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgdGlsZVJlY29yZCA9IHRpbGVzW3RpbGVdO1xuICAgIGlmICghdGlsZVJlY29yZCkge1xuICAgICAgY29uc3QgeDpudW1iZXIgPSB0aWxlICUgdGhpcy5zY2FubGluZTtcbiAgICAgIGNvbnN0IHk6bnVtYmVyID0gTWF0aC5mbG9vcih0aWxlIC8gdGhpcy5zY2FubGluZSk7XG4gICAgICBsZXQgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLnRpbnRzW3RpbnROYW1lXTtcbiAgICAgIGlmICghaW1hZ2UpIHtcbiAgICAgICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuaW1hZ2UhLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5pbWFnZSEuaGVpZ2h0O1xuICAgICAgICBjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlISwgMCAsIDApO1xuICAgICAgICAgIGNvbnN0IGlkOiBJbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsMCxjYW52YXMud2lkdGgsY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgZm9yIChsZXQgaT0wO2k8aWQuZGF0YS5sZW5ndGg7aSs9NCkge1xuICAgICAgICAgICAgaWQuZGF0YVtpXSA9IE1hdGguZmxvb3IoMjU1ICogY29sWzBdKTtcbiAgICAgICAgICAgIGlkLmRhdGFbaSArIDFdID0gTWF0aC5mbG9vcigyNTUgKiBjb2xbMV0pO1xuICAgICAgICAgICAgaWQuZGF0YVtpICsgMl0gPSBNYXRoLmZsb29yKDI1NSAqIGNvbFsyXSk7XG4gICAgICAgICAgICBpZC5kYXRhW2kgKyAzXSA9IE1hdGguZmxvb3IoaWQuZGF0YVtpKzNdICogY29sWzNdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpZCwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICB0aGlzLnRpbnRzW3RpbnROYW1lXSA9IGltYWdlO1xuICAgICAgfVxuXG4gICAgICB0aWxlUmVjb3JkID0gdGlsZXNbdGlsZV0gPSBuZXcgVGlsZShpbWFnZSwgeCAqIHRoaXMub3JpZ2luYWxUaWxlV2lkdGgsIHkgKiB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCwgdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCwgdGhpcy5vcmlnaW5hbFRpbGVIZWlnaHQsIHRoaXMuc2NhbGUpXG4gICAgfVxuICAgIHJldHVybiB0aWxlUmVjb3JkO1xuICB9XG59IiwiaW1wb3J0IHsgQml0bWFwIH0gZnJvbSBcIi4uL0JpdG1hcFwiO1xuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiLi4vR3JhcGhpY3NcIjtcbmltcG9ydCB7IFBhbGV0dGUgfSBmcm9tIFwiLi4vaW1wbC9QYWxldHRlXCI7XG5pbXBvcnQgeyBPcGVuR0xHcmFwaGljc0ltcGwgfSBmcm9tIFwiLi9PcGVuR0xHcmFwaGljc0ltcGxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJT3BlbkdMQml0bWFwIHtcbiAgICB0ZXhYOiBudW1iZXI7XG4gICAgdGV4WTogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgaW1hZ2U/OiBIVE1MSW1hZ2VFbGVtZW50O1xufVxuXG5leHBvcnQgY2xhc3MgT3BlbkdMQml0bWFwIGltcGxlbWVudHMgSU9wZW5HTEJpdG1hcCB7XG4gICAgd2lkdGg6IG51bWJlciA9IDA7XG4gICAgaGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICB0ZXhYOiBudW1iZXIgPSAwO1xuICAgIHRleFk6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihncmFwaGljczogT3BlbkdMR3JhcGhpY3NJbXBsLCB1cmw6IHN0cmluZywgZGF0YVVybExvYWRlcjogUHJvbWlzZTxzdHJpbmc+IHwgdW5kZWZpbmVkLCBwYWw6IFBhbGV0dGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgZ3JhcGhpY3MucmVnaXN0ZXJJbWFnZSh0aGlzKTtcblxuICAgICAgICB0aGlzLm5hbWUgPSB1cmw7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmltYWdlLmhlaWdodDtcbiAgICBcbiAgICAgICAgICBpZiAocGFsKSB7XG4gICAgICAgICAgICBwYWwuYWRqdXN0SW1hZ2UodGhpcy5pbWFnZSkudGhlbigoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpID0+IHsgXG4gICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBncmFwaGljcy5uZXdSZXNvdXJjZUxvYWRlZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGdyYXBoaWNzLm5ld1Jlc291cmNlTG9hZGVkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIFxuICAgICAgICBpZiAoZGF0YVVybExvYWRlcikge1xuICAgICAgICAgIGRhdGFVcmxMb2FkZXIudGhlbigoYmFzZTY0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gXCJkYXRhOlwiK3VybC5zdWJzdHJpbmcodXJsLmxlbmd0aC0zKStcIjtiYXNlNjQsXCIrYmFzZTY0O1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB1cmw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZyA9IChncmFwaGljcyBhcyBPcGVuR0xHcmFwaGljc0ltcGwpO1xuICAgICAgICBnLl9kcmF3Qml0bWFwKHRoaXMsIHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBkcmF3U2NhbGVkKGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGcgPSAoZ3JhcGhpY3MgYXMgT3BlbkdMR3JhcGhpY3NJbXBsKTtcbiAgICAgICAgZy5fZHJhd0JpdG1hcCh0aGlzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gICAgXG4gICAgaW5pdE9uRmlyc3RDbGljaygpOiB2b2lkIHtcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgTnVsbEJpdG1hcCBpbXBsZW1lbnRzIEJpdG1hcCB7XG4gICAgd2lkdGg6IG51bWJlciA9IDA7XG4gICAgaGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIGxvYWRlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgbmFtZTogc3RyaW5nID0gXCJudWxsXCI7XG5cbiAgICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBkcmF3U2NhbGVkKGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgfVxuXG4gICAgaW5pdE9uRmlyc3RDbGljaygpOiB2b2lkIHtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBCaXRtYXAgfSBmcm9tIFwiLi4vQml0bWFwXCI7XG5pbXBvcnQgeyBGb250IH0gZnJvbSBcIi4uL0ZvbnRcIjtcbmltcG9ydCB7IEdyYXBoaWNzLCBPZmZzY3JlZW4gfSBmcm9tIFwiLi4vR3JhcGhpY3NcIjtcbmltcG9ydCB7IElPcGVuR0xCaXRtYXAsIE51bGxCaXRtYXAsIE9wZW5HTEJpdG1hcCB9IGZyb20gXCIuL09wZW5HTEJpdG1hcFwiO1xuaW1wb3J0IHsgT3BlbkdsT2Zmc2NyZWVuIH0gZnJvbSBcIi4vT3BlbkdMT2Zmc2NyZWVuXCI7XG5pbXBvcnQgeyBSZW5kZXJpbmdTdGF0ZSB9IGZyb20gXCIuL1JlbmRlcmluZ1N0YXRlXCI7XG5pbXBvcnQgcG90cGFjayBmcm9tIFwicG90cGFja1wiXG5cbmZ1bmN0aW9uIHBhcnNlQ29sb3IoaW5wdXQ6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICBsZXQgbW07XG4gICAgbGV0IG07XG4gICAgLy8gT2J2aW91c2x5LCB0aGUgbnVtZXJpYyB2YWx1ZXMgd2lsbCBiZSBlYXNpZXIgdG8gcGFyc2UgdGhhbiBuYW1lcy5TbyB3ZSBkbyB0aG9zZSBmaXJzdC5cbiAgICBtbSA9IGlucHV0Lm1hdGNoKC9eIz8oWzAtOWEtZl17M30pJC9pKTtcbiAgICBpZiAobW0pIHtcbiAgICAgICAgbSA9IG1tWzFdO1xuICAgICAgICAvLyBpbiB0aHJlZS1jaGFyYWN0ZXIgZm9ybWF0LCBlYWNoIHZhbHVlIGlzIG11bHRpcGxpZWQgYnkgMHgxMSB0byBnaXZlIGFuXG4gICAgICAgIC8vIGV2ZW4gc2NhbGUgZnJvbSAweDAwIHRvIDB4ZmZcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHBhcnNlSW50KG0uY2hhckF0KDApLCAxNikgKiAweDExLFxuICAgICAgICAgICAgcGFyc2VJbnQobS5jaGFyQXQoMSksIDE2KSAqIDB4MTEsXG4gICAgICAgICAgICBwYXJzZUludChtLmNoYXJBdCgyKSwgMTYpICogMHgxMSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLy8gVGhhdCdzIG9uZS4gTm93IGZvciB0aGUgZnVsbCBzaXgtZGlnaXQgZm9ybWF0OiBcbiAgICBtbSA9IGlucHV0Lm1hdGNoKC9eIz8oWzAtOWEtZl17Nn0pJC9pKTtcbiAgICBpZiAobW0pIHtcbiAgICAgICAgbSA9IG1tWzFdO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgcGFyc2VJbnQobS5zdWJzdHIoMCwgMiksIDE2KSxcbiAgICAgICAgICAgIHBhcnNlSW50KG0uc3Vic3RyKDIsIDIpLCAxNiksXG4gICAgICAgICAgICBwYXJzZUludChtLnN1YnN0cig0LCAyKSwgMTYpLFxuICAgICAgICAgICAgMVxuICAgICAgICBdO1xuICAgIH1cbiAgICAvLyBBbmQgbm93IGZvciByZ2IoKSBmb3JtYXQ6XG4gICAgbW0gPSBpbnB1dC5tYXRjaCgvXnJnYmFcXHMqXFwoXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyosXFxzKihbKy1dPyhbMC05XSpbLl0pP1swLTldKylcXHMqXFwpJC9pKTtcbiAgICBpZiAobW0pIHtcbiAgICAgICAgcmV0dXJuIFtOdW1iZXIucGFyc2VJbnQobW1bMV0pLCBOdW1iZXIucGFyc2VJbnQobW1bMl0pLCBOdW1iZXIucGFyc2VJbnQobW1bM10pLCBOdW1iZXIucGFyc2VGbG9hdChtbVs0XSldO1xuICAgIH1cbiAgICBtbSA9IGlucHV0Lm1hdGNoKC9ecmdiXFxzKlxcKFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqXFwpJC9pKTtcbiAgICBpZiAobW0pIHtcbiAgICAgICAgcmV0dXJuIFtOdW1iZXIucGFyc2VJbnQobW1bMV0pLCBOdW1iZXIucGFyc2VJbnQobW1bMl0pLCBOdW1iZXIucGFyc2VJbnQobW1bM10pLCAxXTtcbiAgICB9XG4gICAgLy8gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jb2xvcnMvY29sb3JzX25hbWVzLmFzcFxuICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlYl9jb2xvcnNcbiAgICAvLyBodHRwOi8vd3d3LmNvbG9ycy5jb21tdXRlcmNyZWF0aXZlLmNvbS9ncmlkL1xuICAgIHZhciB3ZWJDb2xvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAgIFwiQWxpY2VCbHVlXCI6IFwiI0YwRjhGRlwiLFxuICAgICAgICBcIkFudGlxdWVXaGl0ZVwiOiBcIiNGQUVCRDdcIixcbiAgICAgICAgXCJBcXVhXCI6IFwiIzAwRkZGRlwiLFxuICAgICAgICBcIkFxdWFtYXJpbmVcIjogXCIjN0ZGRkQ0XCIsXG4gICAgICAgIFwiQXp1cmVcIjogXCIjRjBGRkZGXCIsXG4gICAgICAgIFwiQmVpZ2VcIjogXCIjRjVGNURDXCIsXG4gICAgICAgIFwiQmlzcXVlXCI6IFwiI0ZGRTRDNFwiLFxuICAgICAgICBcIkJsYWNrXCI6IFwiIzAwMDAwMFwiLFxuICAgICAgICBcIkJsYW5jaGVkQWxtb25kXCI6IFwiI0ZGRUJDRFwiLFxuICAgICAgICBcIkJsdWVcIjogXCIjMDAwMEZGXCIsXG4gICAgICAgIFwiQmx1ZVZpb2xldFwiOiBcIiM4QTJCRTJcIixcbiAgICAgICAgXCJCcm93blwiOiBcIiNBNTJBMkFcIixcbiAgICAgICAgXCJCdXJseVdvb2RcIjogXCIjREVCODg3XCIsXG4gICAgICAgIFwiQ2FkZXRCbHVlXCI6IFwiIzVGOUVBMFwiLFxuICAgICAgICBcIkNoYXJ0cmV1c2VcIjogXCIjN0ZGRjAwXCIsXG4gICAgICAgIFwiQ2hvY29sYXRlXCI6IFwiI0QyNjkxRVwiLFxuICAgICAgICBcIkNvcmFsXCI6IFwiI0ZGN0Y1MFwiLFxuICAgICAgICBcIkNvcm5mbG93ZXJCbHVlXCI6IFwiIzY0OTVFRFwiLFxuICAgICAgICBcIkNvcm5zaWxrXCI6IFwiI0ZGRjhEQ1wiLFxuICAgICAgICBcIkNyaW1zb25cIjogXCIjREMxNDNDXCIsXG4gICAgICAgIFwiQ3lhblwiOiBcIiMwMEZGRkZcIixcbiAgICAgICAgXCJEYXJrQmx1ZVwiOiBcIiMwMDAwOEJcIixcbiAgICAgICAgXCJEYXJrQ3lhblwiOiBcIiMwMDhCOEJcIixcbiAgICAgICAgXCJEYXJrR29sZGVuUm9kXCI6IFwiI0I4ODYwQlwiLFxuICAgICAgICBcIkRhcmtHcmF5XCI6IFwiI0E5QTlBOVwiLFxuICAgICAgICBcIkRhcmtHcmV5XCI6IFwiI0E5QTlBOVwiLFxuICAgICAgICBcIkRhcmtHcmVlblwiOiBcIiMwMDY0MDBcIixcbiAgICAgICAgXCJEYXJrS2hha2lcIjogXCIjQkRCNzZCXCIsXG4gICAgICAgIFwiRGFya01hZ2VudGFcIjogXCIjOEIwMDhCXCIsXG4gICAgICAgIFwiRGFya09saXZlR3JlZW5cIjogXCIjNTU2QjJGXCIsXG4gICAgICAgIFwiRGFya09yYW5nZVwiOiBcIiNGRjhDMDBcIixcbiAgICAgICAgXCJEYXJrT3JjaGlkXCI6IFwiIzk5MzJDQ1wiLFxuICAgICAgICBcIkRhcmtSZWRcIjogXCIjOEIwMDAwXCIsXG4gICAgICAgIFwiRGFya1NhbG1vblwiOiBcIiNFOTk2N0FcIixcbiAgICAgICAgXCJEYXJrU2VhR3JlZW5cIjogXCIjOEZCQzhGXCIsXG4gICAgICAgIFwiRGFya1NsYXRlQmx1ZVwiOiBcIiM0ODNEOEJcIixcbiAgICAgICAgXCJEYXJrU2xhdGVHcmF5XCI6IFwiIzJGNEY0RlwiLFxuICAgICAgICBcIkRhcmtTbGF0ZUdyZXlcIjogXCIjMkY0RjRGXCIsXG4gICAgICAgIFwiRGFya1R1cnF1b2lzZVwiOiBcIiMwMENFRDFcIixcbiAgICAgICAgXCJEYXJrVmlvbGV0XCI6IFwiIzk0MDBEM1wiLFxuICAgICAgICBcIkRlZXBQaW5rXCI6IFwiI0ZGMTQ5M1wiLFxuICAgICAgICBcIkRlZXBTa3lCbHVlXCI6IFwiIzAwQkZGRlwiLFxuICAgICAgICBcIkRpbUdyYXlcIjogXCIjNjk2OTY5XCIsXG4gICAgICAgIFwiRGltR3JleVwiOiBcIiM2OTY5NjlcIixcbiAgICAgICAgXCJEb2RnZXJCbHVlXCI6IFwiIzFFOTBGRlwiLFxuICAgICAgICBcIkZpcmVCcmlja1wiOiBcIiNCMjIyMjJcIixcbiAgICAgICAgXCJGbG9yYWxXaGl0ZVwiOiBcIiNGRkZBRjBcIixcbiAgICAgICAgXCJGb3Jlc3RHcmVlblwiOiBcIiMyMjhCMjJcIixcbiAgICAgICAgXCJGdWNoc2lhXCI6IFwiI0ZGMDBGRlwiLFxuICAgICAgICBcIkdhaW5zYm9yb1wiOiBcIiNEQ0RDRENcIixcbiAgICAgICAgXCJHaG9zdFdoaXRlXCI6IFwiI0Y4RjhGRlwiLFxuICAgICAgICBcIkdvbGRcIjogXCIjRkZENzAwXCIsXG4gICAgICAgIFwiR29sZGVuUm9kXCI6IFwiI0RBQTUyMFwiLFxuICAgICAgICBcIkdyYXlcIjogXCIjODA4MDgwXCIsXG4gICAgICAgIFwiR3JleVwiOiBcIiM4MDgwODBcIixcbiAgICAgICAgXCJHcmVlblwiOiBcIiMwMDgwMDBcIixcbiAgICAgICAgXCJHcmVlblllbGxvd1wiOiBcIiNBREZGMkZcIixcbiAgICAgICAgXCJIb25leURld1wiOiBcIiNGMEZGRjBcIixcbiAgICAgICAgXCJIb3RQaW5rXCI6IFwiI0ZGNjlCNFwiLFxuICAgICAgICBcIkluZGlhblJlZCBcIjogXCIjQ0Q1QzVDXCIsXG4gICAgICAgIFwiSW5kaWdvIFwiOiBcIiM0QjAwODJcIixcbiAgICAgICAgXCJJdm9yeVwiOiBcIiNGRkZGRjBcIixcbiAgICAgICAgXCJLaGFraVwiOiBcIiNGMEU2OENcIixcbiAgICAgICAgXCJMYXZlbmRlclwiOiBcIiNFNkU2RkFcIixcbiAgICAgICAgXCJMYXZlbmRlckJsdXNoXCI6IFwiI0ZGRjBGNVwiLFxuICAgICAgICBcIkxhd25HcmVlblwiOiBcIiM3Q0ZDMDBcIixcbiAgICAgICAgXCJMZW1vbkNoaWZmb25cIjogXCIjRkZGQUNEXCIsXG4gICAgICAgIFwiTGlnaHRCbHVlXCI6IFwiI0FERDhFNlwiLFxuICAgICAgICBcIkxpZ2h0Q29yYWxcIjogXCIjRjA4MDgwXCIsXG4gICAgICAgIFwiTGlnaHRDeWFuXCI6IFwiI0UwRkZGRlwiLFxuICAgICAgICBcIkxpZ2h0R29sZGVuUm9kWWVsbG93XCI6IFwiI0ZBRkFEMlwiLFxuICAgICAgICBcIkxpZ2h0R3JheVwiOiBcIiNEM0QzRDNcIixcbiAgICAgICAgXCJMaWdodEdyZXlcIjogXCIjRDNEM0QzXCIsXG4gICAgICAgIFwiTGlnaHRHcmVlblwiOiBcIiM5MEVFOTBcIixcbiAgICAgICAgXCJMaWdodFBpbmtcIjogXCIjRkZCNkMxXCIsXG4gICAgICAgIFwiTGlnaHRTYWxtb25cIjogXCIjRkZBMDdBXCIsXG4gICAgICAgIFwiTGlnaHRTZWFHcmVlblwiOiBcIiMyMEIyQUFcIixcbiAgICAgICAgXCJMaWdodFNreUJsdWVcIjogXCIjODdDRUZBXCIsXG4gICAgICAgIFwiTGlnaHRTbGF0ZUdyYXlcIjogXCIjNzc4ODk5XCIsXG4gICAgICAgIFwiTGlnaHRTbGF0ZUdyZXlcIjogXCIjNzc4ODk5XCIsXG4gICAgICAgIFwiTGlnaHRTdGVlbEJsdWVcIjogXCIjQjBDNERFXCIsXG4gICAgICAgIFwiTGlnaHRZZWxsb3dcIjogXCIjRkZGRkUwXCIsXG4gICAgICAgIFwiTGltZVwiOiBcIiMwMEZGMDBcIixcbiAgICAgICAgXCJMaW1lR3JlZW5cIjogXCIjMzJDRDMyXCIsXG4gICAgICAgIFwiTGluZW5cIjogXCIjRkFGMEU2XCIsXG4gICAgICAgIFwiTWFnZW50YVwiOiBcIiNGRjAwRkZcIixcbiAgICAgICAgXCJNYXJvb25cIjogXCIjODAwMDAwXCIsXG4gICAgICAgIFwiTWVkaXVtQXF1YU1hcmluZVwiOiBcIiM2NkNEQUFcIixcbiAgICAgICAgXCJNZWRpdW1CbHVlXCI6IFwiIzAwMDBDRFwiLFxuICAgICAgICBcIk1lZGl1bU9yY2hpZFwiOiBcIiNCQTU1RDNcIixcbiAgICAgICAgXCJNZWRpdW1QdXJwbGVcIjogXCIjOTM3MERCXCIsXG4gICAgICAgIFwiTWVkaXVtU2VhR3JlZW5cIjogXCIjM0NCMzcxXCIsXG4gICAgICAgIFwiTWVkaXVtU2xhdGVCbHVlXCI6IFwiIzdCNjhFRVwiLFxuICAgICAgICBcIk1lZGl1bVNwcmluZ0dyZWVuXCI6IFwiIzAwRkE5QVwiLFxuICAgICAgICBcIk1lZGl1bVR1cnF1b2lzZVwiOiBcIiM0OEQxQ0NcIixcbiAgICAgICAgXCJNZWRpdW1WaW9sZXRSZWRcIjogXCIjQzcxNTg1XCIsXG4gICAgICAgIFwiTWlkbmlnaHRCbHVlXCI6IFwiIzE5MTk3MFwiLFxuICAgICAgICBcIk1pbnRDcmVhbVwiOiBcIiNGNUZGRkFcIixcbiAgICAgICAgXCJNaXN0eVJvc2VcIjogXCIjRkZFNEUxXCIsXG4gICAgICAgIFwiTW9jY2FzaW5cIjogXCIjRkZFNEI1XCIsXG4gICAgICAgIFwiTmF2YWpvV2hpdGVcIjogXCIjRkZERUFEXCIsXG4gICAgICAgIFwiTmF2eVwiOiBcIiMwMDAwODBcIixcbiAgICAgICAgXCJPbGRMYWNlXCI6IFwiI0ZERjVFNlwiLFxuICAgICAgICBcIk9saXZlXCI6IFwiIzgwODAwMFwiLFxuICAgICAgICBcIk9saXZlRHJhYlwiOiBcIiM2QjhFMjNcIixcbiAgICAgICAgXCJPcmFuZ2VcIjogXCIjRkZBNTAwXCIsXG4gICAgICAgIFwiT3JhbmdlUmVkXCI6IFwiI0ZGNDUwMFwiLFxuICAgICAgICBcIk9yY2hpZFwiOiBcIiNEQTcwRDZcIixcbiAgICAgICAgXCJQYWxlR29sZGVuUm9kXCI6IFwiI0VFRThBQVwiLFxuICAgICAgICBcIlBhbGVHcmVlblwiOiBcIiM5OEZCOThcIixcbiAgICAgICAgXCJQYWxlVHVycXVvaXNlXCI6IFwiI0FGRUVFRVwiLFxuICAgICAgICBcIlBhbGVWaW9sZXRSZWRcIjogXCIjREI3MDkzXCIsXG4gICAgICAgIFwiUGFwYXlhV2hpcFwiOiBcIiNGRkVGRDVcIixcbiAgICAgICAgXCJQZWFjaFB1ZmZcIjogXCIjRkZEQUI5XCIsXG4gICAgICAgIFwiUGVydVwiOiBcIiNDRDg1M0ZcIixcbiAgICAgICAgXCJQaW5rXCI6IFwiI0ZGQzBDQlwiLFxuICAgICAgICBcIlBsdW1cIjogXCIjRERBMEREXCIsXG4gICAgICAgIFwiUG93ZGVyQmx1ZVwiOiBcIiNCMEUwRTZcIixcbiAgICAgICAgXCJQdXJwbGVcIjogXCIjODAwMDgwXCIsXG4gICAgICAgIFwiUmViZWNjYVB1cnBsZVwiOiBcIiM2NjMzOTlcIixcbiAgICAgICAgXCJSZWRcIjogXCIjRkYwMDAwXCIsXG4gICAgICAgIFwiUm9zeUJyb3duXCI6IFwiI0JDOEY4RlwiLFxuICAgICAgICBcIlJveWFsQmx1ZVwiOiBcIiM0MTY5RTFcIixcbiAgICAgICAgXCJTYWRkbGVCcm93blwiOiBcIiM4QjQ1MTNcIixcbiAgICAgICAgXCJTYWxtb25cIjogXCIjRkE4MDcyXCIsXG4gICAgICAgIFwiU2FuZHlCcm93blwiOiBcIiNGNEE0NjBcIixcbiAgICAgICAgXCJTZWFHcmVlblwiOiBcIiMyRThCNTdcIixcbiAgICAgICAgXCJTZWFTaGVsbFwiOiBcIiNGRkY1RUVcIixcbiAgICAgICAgXCJTaWVubmFcIjogXCIjQTA1MjJEXCIsXG4gICAgICAgIFwiU2lsdmVyXCI6IFwiI0MwQzBDMFwiLFxuICAgICAgICBcIlNreUJsdWVcIjogXCIjODdDRUVCXCIsXG4gICAgICAgIFwiU2xhdGVCbHVlXCI6IFwiIzZBNUFDRFwiLFxuICAgICAgICBcIlNsYXRlR3JheVwiOiBcIiM3MDgwOTBcIixcbiAgICAgICAgXCJTbGF0ZUdyZXlcIjogXCIjNzA4MDkwXCIsXG4gICAgICAgIFwiU25vd1wiOiBcIiNGRkZBRkFcIixcbiAgICAgICAgXCJTcHJpbmdHcmVlblwiOiBcIiMwMEZGN0ZcIixcbiAgICAgICAgXCJTdGVlbEJsdWVcIjogXCIjNDY4MkI0XCIsXG4gICAgICAgIFwiVGFuXCI6IFwiI0QyQjQ4Q1wiLFxuICAgICAgICBcIlRlYWxcIjogXCIjMDA4MDgwXCIsXG4gICAgICAgIFwiVGhpc3RsZVwiOiBcIiNEOEJGRDhcIixcbiAgICAgICAgXCJUb21hdG9cIjogXCIjRkY2MzQ3XCIsXG4gICAgICAgIFwiVHVycXVvaXNlXCI6IFwiIzQwRTBEMFwiLFxuICAgICAgICBcIlZpb2xldFwiOiBcIiNFRTgyRUVcIixcbiAgICAgICAgXCJXaGVhdFwiOiBcIiNGNURFQjNcIixcbiAgICAgICAgXCJXaGl0ZVwiOiBcIiNGRkZGRkZcIixcbiAgICAgICAgXCJXaGl0ZVNtb2tlXCI6IFwiI0Y1RjVGNVwiLFxuICAgICAgICBcIlllbGxvd1wiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJZZWxsb3dHcmVlblwiOiBcIiM5QUNEMzJcIixcbiAgICAgICAgXCJUcmFuc3BhcmVudFwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICB9O1xuICAgIGZvciAodmFyIHAgaW4gd2ViQ29sb3JzKSB7XG4gICAgICAgIHdlYkNvbG9yc1twLnRvTG93ZXJDYXNlKCldID0gd2ViQ29sb3JzW3BdO1xuICAgIH1cbiAgICB2YXIgd2MgPSB3ZWJDb2xvcnNbaW5wdXQudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKHdjICE9IG51bGwpXG4gICAgICAgIHJldHVybiBwYXJzZUNvbG9yKHdjKTtcbiAgICB0aHJvdyBFcnJvcihcIidcIiArIGlucHV0ICsgXCInIGlzIG5vdCBhIHZhbGlkIGNvbG9yLi4uXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sVG9OdW1iZXIoaW5wdXQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IHJlc3VsdCA9IENPTF9DQUNIRVtpbnB1dF07XG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHJnYmEgPSBwYXJzZUNvbG9yKGlucHV0KTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAocmdiYVswXSAqICgyNTYgKiAyNTYgKiAyNTYpKSArIChyZ2JhWzFdICogKDI1NiAqIDI1NikpICsgKHJnYmFbMl0gKiAyNTYpICsgTWF0aC5mbG9vcihyZ2JhWzNdICogMjU1KTtcbiAgICAgICAgQ09MX0NBQ0hFW2lucHV0XSA9IHZhbHVlO1xuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5kZWNsYXJlIGxldCBJbnN0YWxsVHJpZ2dlcjogYW55O1xudmFyIGlzRmlyZWZveCA9IHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG5jb25zdCBDT0xfQ0FDSEU6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XG5cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXhUZXh0dXJlU2l6ZSgpOiBudW1iZXIge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJywgeyBhbnRpYWxpYXM6IGZhbHNlLCBhbHBoYTogZmFsc2UsIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSB9KSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAgICBpZiAoIWdsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX1NJWkUpO1xufVxuXG5leHBvcnQgY2xhc3MgT3BlbkdMR3JhcGhpY3NJbXBsIGltcGxlbWVudHMgR3JhcGhpY3MsIFJlbmRlcmluZ1N0YXRlIHtcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIG9mZnNjcmVlbjogT2Zmc2NyZWVuIHwgbnVsbCA9IG51bGw7XG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcbiAgICBleHRlbnNpb246IEFOR0xFX2luc3RhbmNlZF9hcnJheXM7XG5cbiAgICBpbWFnZXM6IElPcGVuR0xCaXRtYXBbXSA9IFtdO1xuICAgIGF0bGFzVGV4dHVyZTogV2ViR0xUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICAgdGV4V2lkdGg6IG51bWJlciA9IDA7XG4gICAgdGV4SGVpZ2h0OiBudW1iZXIgPSAwO1xuXG4gICAgb2Zmc2NyZWVuSWQ6IG51bWJlciA9IDE7XG4gICAgb2Zmc2NyZWVuczogT3BlbkdsT2Zmc2NyZWVuW10gPSBbXTtcbiAgICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBhcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXI7XG4gICAgc2hhZGVyUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xuICAgIGdsQnVmZmVyOiBXZWJHTEJ1ZmZlciB8IG51bGw7XG4gICAgbWF4RHJhd3M6IG51bWJlciA9IDEwMDAwO1xuICAgIHBvc2l0aW9uczogSW50MTZBcnJheTtcbiAgICByb3RhdGlvbnM6IEZsb2F0MzJBcnJheTtcbiAgICByZ2JhczogVWludDMyQXJyYXk7XG4gICAgZHJhd3M6IG51bWJlciA9IDA7XG5cbiAgICBhbHBoYXM6IG51bWJlcltdID0gW107XG4gICAgdHJhbnNmb3JtczogYW55W10gPSBbXTtcbiAgICBzdGF0ZXM6IGFueVtdID0gW107XG4gICAgYnJpZ2h0bmVzczogbnVtYmVyID0gMDtcbiAgICB0cmFuc2xhdGVYOiBudW1iZXIgPSAwO1xuICAgIHRyYW5zbGF0ZVk6IG51bWJlciA9IDA7XG4gICAgc2NhbGVYOiBudW1iZXIgPSAxO1xuICAgIHNjYWxlWTogbnVtYmVyID0gMTtcbiAgICByb3RhdGlvbjogbnVtYmVyID0gMDtcbiAgICBjbGlwWDogbnVtYmVyID0gMDtcbiAgICBjbGlwWTogbnVtYmVyID0gMDtcbiAgICBjbGlwWDI6IG51bWJlciA9IDA7XG4gICAgY2xpcFkyOiBudW1iZXIgPSAwO1xuICAgIGFscGhhOiBudW1iZXIgPSAyNTU7XG5cbiAgICBzdGF0ZTogUmVuZGVyaW5nU3RhdGU7XG5cbiAgICB0cmFuc2Zvcm1DYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHRyYW5zZm9ybUN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1DdHggPSB0aGlzLnRyYW5zZm9ybUNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikhO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVjYW52YXNcIik7XG4gICAgICAgICg8YW55PnRoaXMuY2FudmFzKS5zdHlsZS5mb250U21vb3RoID0gXCJuZXZlclwiO1xuICAgICAgICAoPGFueT50aGlzLmNhbnZhcykuc3R5bGUud2Via2l0Rm9udFNtb290aGluZyA9IFwibm9uZVwiO1xuXG4gICAgICAgIGlmIChpc0ZpcmVmb3gpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gXCJjcmlzcC1lZGdlc1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSBcInBpeGVsYXRlZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nbCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcsIHsgYW50aWFsaWFzOiBmYWxzZSwgYWxwaGE6IGZhbHNlLCBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUgfSkgYXMgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKCdBTkdMRV9pbnN0YW5jZWRfYXJyYXlzJykgYXMgQU5HTEVfaW5zdGFuY2VkX2FycmF5c1xuICAgICAgICB0aGlzLmV4dGVuc2lvbiA9IGV4dGVuc2lvbjtcblxuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLlNSQ19BTFBIQSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORCk7XG4gICAgICAgIHRoaXMuZ2wuZGlzYWJsZSh0aGlzLmdsLkRFUFRIX1RFU1QpO1xuXG4gICAgICAgIGNvbnN0IHNob3J0c1BlckltYWdlUG9zaXRpb24gPSAyXG4gICAgICAgIGNvbnN0IHNob3J0c1BlckltYWdlU2l6ZSA9IDJcbiAgICAgICAgY29uc3Qgc2hvcnRzUGVySW1hZ2VUZXhQb3MgPSA0XG4gICAgICAgIGNvbnN0IGJ5dGVzUGVySW1hZ2VSZ2JhID0gNFxuICAgICAgICBjb25zdCBmbG9hdHNQZXJJbWFnZVJvdGF0aW9uID0gMVxuXG4gICAgICAgIGNvbnN0IGJ5dGVzUGVySW1hZ2UgPSBzaG9ydHNQZXJJbWFnZVBvc2l0aW9uICogMiArIHNob3J0c1BlckltYWdlU2l6ZSAqIDIgKyBzaG9ydHNQZXJJbWFnZVRleFBvcyAqIDIgKyBieXRlc1BlckltYWdlUmdiYSArIGZsb2F0c1BlckltYWdlUm90YXRpb24gKiA0XG5cbiAgICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLm1heERyYXdzICogYnl0ZXNQZXJJbWFnZSlcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSBuZXcgSW50MTZBcnJheSh0aGlzLmFycmF5QnVmZmVyKVxuICAgICAgICB0aGlzLnJvdGF0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5hcnJheUJ1ZmZlcilcbiAgICAgICAgdGhpcy5yZ2JhcyA9IG5ldyBVaW50MzJBcnJheSh0aGlzLmFycmF5QnVmZmVyKVxuXG4gICAgICAgIGNvbnN0IHZlcnRDb2RlID0gXCJcXFxuXHRcdFx0YXR0cmlidXRlIHZlYzIgYVNpemVNdWx0O1xcXG5cdFx0XHRhdHRyaWJ1dGUgdmVjMiBhUG9zO1xcXG5cdFx0XHRhdHRyaWJ1dGUgdmVjMiBhU2l6ZTtcXFxuXHRcdFx0YXR0cmlidXRlIHZlYzQgYVRleFBvcztcXFxuXHRcdFx0YXR0cmlidXRlIHZlYzQgYVJnYmE7XFxcblx0XHRcdGF0dHJpYnV0ZSBmbG9hdCBhUm90YXRpb247XFxcblx0XHRcdFxcXG5cdFx0XHR2YXJ5aW5nIGhpZ2hwIHZlYzIgZnJhZ1RleHR1cmVQb3M7XFxcblx0XHRcdHZhcnlpbmcgdmVjNCBmcmFnQWJncjtcXFxuXHRcdFx0XFxcblx0XHRcdHVuaWZvcm0gdmVjMiB1Q2FudmFzU2l6ZTtcXFxuXHRcdFx0dW5pZm9ybSB2ZWMyIHVUZXhTaXplO1xcXG5cdFx0XHRcXFxuXHRcdFx0dm9pZCBtYWluKHZvaWQpe1xcXG5cdFx0XHRcdHZlYzIgZHJhd1BvcztcXFxuXHRcdFx0XHRpZihhUm90YXRpb24gIT0gMC4wKXtcXFxuXHRcdFx0XHRcdGZsb2F0IGdvWCA9IGNvcyhhUm90YXRpb24pO1xcXG5cdFx0XHRcdFx0ZmxvYXQgZ29ZID0gc2luKGFSb3RhdGlvbik7XFxcblx0XHRcdFx0XHR2ZWMyIGNvcm5lclBvcyA9IGFTaXplICogKGFTaXplTXVsdCk7XFxcblx0XHRcdFx0XHRkcmF3UG9zID0gKGFQb3MgKyB2ZWMyKGdvWCpjb3JuZXJQb3MueCAtIGdvWSpjb3JuZXJQb3MueSwgZ29ZKmNvcm5lclBvcy54ICsgZ29YKmNvcm5lclBvcy55KSkgLyB1Q2FudmFzU2l6ZTtcXFxuXHRcdFx0XHR9IGVsc2Uge1xcXG5cdFx0XHRcdFx0ZHJhd1BvcyA9IChhUG9zICsgYVNpemUqYVNpemVNdWx0KSAvIHVDYW52YXNTaXplO1xcXG5cdFx0XHRcdH1cXFxuXHRcdFx0XHRnbF9Qb3NpdGlvbiA9IHZlYzQoZHJhd1Bvcy54IC0gMS4wLCAxLjAgLSBkcmF3UG9zLnksIDAuMCwgMS4wKTtcXFxuXHRcdFx0XHRmcmFnVGV4dHVyZVBvcyA9IChhVGV4UG9zLnh5ICsgYVRleFBvcy56dyAqIGFTaXplTXVsdCkgLyB1VGV4U2l6ZTtcXFxuICAgICAgICAgICAgICAgIGZyYWdBYmdyID0gdmVjNChhUmdiYS53LzI1NS4wLCBhUmdiYS56LzI1NS4wLCBhUmdiYS55LzI1NS4wLCBhUmdiYS54LzI1NS4wKTtcXFxuXHRcdFx0fVxcXG5cdFx0XCJcblxuICAgICAgICAvLyBDcmVhdGUgYSB2ZXJ0ZXggc2hhZGVyIG9iamVjdCB3aXRoIGNvZGUuXG4gICAgICAgIGNvbnN0IHZlcnRTaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcih0aGlzLmdsLlZFUlRFWF9TSEFERVIpIGFzIFdlYkdMU2hhZGVyXG4gICAgICAgIHRoaXMuZ2wuc2hhZGVyU291cmNlKHZlcnRTaGFkZXIsIHZlcnRDb2RlKVxuICAgICAgICB0aGlzLmdsLmNvbXBpbGVTaGFkZXIodmVydFNoYWRlcilcblxuICAgICAgICAvLyBGcmFnbWVudCBzaGFkZXIgc291cmNlIGNvZGUuXG4gICAgICAgIGNvbnN0IGZyYWdDb2RlID0gXCJcXFxuXHRcdFx0dmFyeWluZyBoaWdocCB2ZWMyIGZyYWdUZXh0dXJlUG9zO1xcXG5cdFx0XHR2YXJ5aW5nIGhpZ2hwIHZlYzQgZnJhZ0FiZ3I7XFxcblx0XHRcdHVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xcXG5cdFx0XHRcXFxuXHRcdFx0dm9pZCBtYWluKHZvaWQpe1xcXG5cdFx0XHRcdGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgZnJhZ1RleHR1cmVQb3MpICogZnJhZ0FiZ3I7XFxcblx0XHRcdH1cXFxuXHRcdFwiXG5cbiAgICAgICAgY29uc3QgZnJhZ1NoYWRlciA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKHRoaXMuZ2wuRlJBR01FTlRfU0hBREVSKSBhcyBXZWJHTFNoYWRlcjtcbiAgICAgICAgdGhpcy5nbC5zaGFkZXJTb3VyY2UoZnJhZ1NoYWRlciwgZnJhZ0NvZGUpO1xuICAgICAgICB0aGlzLmdsLmNvbXBpbGVTaGFkZXIoZnJhZ1NoYWRlcik7XG5cbiAgICAgICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IHRoaXMuZ2wuY3JlYXRlUHJvZ3JhbSgpIGFzIFdlYkdMUHJvZ3JhbVxuICAgICAgICB0aGlzLmdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0U2hhZGVyKTtcbiAgICAgICAgdGhpcy5nbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ1NoYWRlcik7XG4gICAgICAgIHRoaXMuZ2wubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgICAgICAgdGhpcy5zaGFkZXJQcm9ncmFtID0gc2hhZGVyUHJvZ3JhbTtcblxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5nbC5jcmVhdGVCdWZmZXIoKSlcbiAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBVaW50OEFycmF5KFswLCAxLCAyLCAyLCAxLCAzXSksIHRoaXMuZ2wuU1RBVElDX0RSQVcpXG5cbiAgICAgICAgLy8gT3VyIG11bHRpcGxpZXIgYXJyYXkgZm9yIHdpZHRoL2hlaWdodCBzbyB3ZSBjYW4gZ2V0IHRvIGVhY2ggY29ybmVyIG9mIHRoZSBpbWFnZSBkcmF3bi5cbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpKVxuICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdKSwgdGhpcy5nbC5TVEFUSUNfRFJBVylcblxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sIFwiYVNpemVNdWx0XCIpXG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlKVxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0cmlidXRlLCAyLCB0aGlzLmdsLkZMT0FULCBmYWxzZSwgMCwgMClcblxuICAgICAgICB0aGlzLmdsQnVmZmVyID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmdsQnVmZmVyKVxuICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHRoaXMuYXJyYXlCdWZmZXIsIHRoaXMuZ2wuRFlOQU1JQ19EUkFXKVxuXG4gICAgICAgIGxldCBieXRlT2Zmc2V0ID0gMDtcblxuICAgICAgICBjb25zdCBzZXR1cEF0dHJpYnV0ZSA9IChuYW1lOiBzdHJpbmcsIGRhdGFUeXBlOiBudW1iZXIsIGFtb3VudDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaGFkZXJQcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIG5hbWUpXG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHJpYnV0ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZSwgYW1vdW50LCBkYXRhVHlwZSwgZmFsc2UsIGJ5dGVzUGVySW1hZ2UsIGJ5dGVPZmZzZXQpXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbi52ZXJ0ZXhBdHRyaWJEaXZpc29yQU5HTEUoYXR0cmlidXRlLCAxKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgPT0gdGhpcy5nbC5TSE9SVClcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCAqPSAyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSA9PSB0aGlzLmdsLkZMT0FUKVxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50ICo9IDRcbiAgICAgICAgICAgICAgICAgICAgYnl0ZU9mZnNldCArPSBhbW91bnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXR1cEF0dHJpYnV0ZShcImFQb3NcIiwgdGhpcy5nbC5TSE9SVCwgc2hvcnRzUGVySW1hZ2VQb3NpdGlvbik7XG4gICAgICAgIHNldHVwQXR0cmlidXRlKFwiYVNpemVcIiwgdGhpcy5nbC5TSE9SVCwgc2hvcnRzUGVySW1hZ2VTaXplKTtcbiAgICAgICAgc2V0dXBBdHRyaWJ1dGUoXCJhVGV4UG9zXCIsIHRoaXMuZ2wuU0hPUlQsIHNob3J0c1BlckltYWdlVGV4UG9zKTtcbiAgICAgICAgc2V0dXBBdHRyaWJ1dGUoXCJhUmdiYVwiLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIGJ5dGVzUGVySW1hZ2VSZ2JhKTtcbiAgICAgICAgc2V0dXBBdHRyaWJ1dGUoXCJhUm90YXRpb25cIiwgdGhpcy5nbC5GTE9BVCwgZmxvYXRzUGVySW1hZ2VSb3RhdGlvbik7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJJbWFnZShiaXRtYXA6IElPcGVuR0xCaXRtYXApIHtcbiAgICAgICAgdGhpcy5pbWFnZXMucHVzaChiaXRtYXApO1xuICAgIH1cblxuICAgIG5ld1Jlc291cmNlTG9hZGVkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hdGxhc1RleHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlc291cmNlT25Mb2FkZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRSZXNvdXJjZU9uTG9hZGVkKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltXRUJHTF0gUmVsb2FkaW5nIHRleHR1cmVcIik7XG5cbiAgICAgICAgY29uc3QgdGV4dHVyZVNpemUgPSA0MDk2ICogMjtcblxuICAgICAgICBpZiAodGhpcy5hdGxhc1RleHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlVGV4dHVyZSh0aGlzLmF0bGFzVGV4dHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdGxhc1RleHR1cmUgPSB0aGlzLmdsLmNyZWF0ZVRleHR1cmUoKTtcblxuICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5hdGxhc1RleHR1cmUpO1xuICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMCk7XG4gICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIDAsIHRoaXMuZ2wuUkdCQSwgdGV4dHVyZVNpemUsIHRleHR1cmVTaXplLCAwLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgbnVsbCk7XG5cbiAgICAgICAgbGV0IGxpc3QgPSBbLi4udGhpcy5pbWFnZXNdO1xuICAgICAgICBsaXN0LnNvcnQoKGEsIGIpID0+IGEuaGVpZ2h0ID4gYi5oZWlnaHQgPyAtMSA6IDEpO1xuXG4gICAgICAgIGNvbnN0IHdoaXRlUGl4ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjb25zdCBjdHggPSB3aGl0ZVBpeGVsLmdldENvbnRleHQoXCIyZFwiKSE7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI0ZGRic7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCAxLCAxKTtcbiAgICAgICAgdGhpcy5nbC50ZXhTdWJJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCwgMCwgMCwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIHdoaXRlUGl4ZWwpO1xuXG4gICAgICAgIGNvbnN0IHBsYWNlZDogSU9wZW5HTEJpdG1hcFtdID0gW107XG4gICAgICAgIHBsYWNlZC5wdXNoKHsgdGV4WDogMCwgdGV4WTogMCwgd2lkdGg6IDEsIGhlaWdodDogMSB9KVxuICAgICAgICBjb25zdCByZWNvcmRzID0gbGlzdC5tYXAoaW1hZ2UgPT4geyByZXR1cm4geyBpbWFnZTogaW1hZ2UsIHc6IGltYWdlLndpZHRoLCBoOiBpbWFnZS5oZWlnaHQgfSB9KTtcblxuICAgICAgICBjb25zdCB7IHcsIGgsIGZpbGwgfSA9IHBvdHBhY2socmVjb3Jkcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2lkdGg6IFwiICsgdyArIFwiIEhlaWdodDogXCIgKyBoICsgXCIgXCIgKyAoTWF0aC5mbG9vcihmaWxsICogMTAwMCkgLyAxMCkgKyBcIiVcIik7XG5cbiAgICAgICAgZm9yIChjb25zdCByZWNvcmQgb2YgcmVjb3Jkcykge1xuICAgICAgICAgICAgcmVjb3JkLmltYWdlLnRleFggPSAocmVjb3JkIGFzIGFueSkueCArIDE7XG4gICAgICAgICAgICByZWNvcmQuaW1hZ2UudGV4WSA9IChyZWNvcmQgYXMgYW55KS55O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaW1hZ2Ugb2YgbGlzdCkge1xuICAgICAgICAgICAgdGhpcy5nbC50ZXhTdWJJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCwgaW1hZ2UudGV4WCwgaW1hZ2UudGV4WSwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIGltYWdlLmltYWdlISk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgdGhpcy5nbC5ORUFSRVNUKTtcbiAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX01JTl9GSUxURVIsIHRoaXMuZ2wuTkVBUkVTVCk7IFxuXG4gICAgICAgIHRoaXMudGV4V2lkdGggPSB0ZXh0dXJlU2l6ZTtcbiAgICAgICAgdGhpcy50ZXhIZWlnaHQgPSB0ZXh0dXJlU2l6ZTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVUZXhTaXplXCIpLCB0aGlzLnRleFdpZHRoLCB0aGlzLnRleEhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlc2V0U3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuU1JDX0FMUEhBLCB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xuICAgICAgICB0aGlzLnN0YXRlLmFscGhhcyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLnRyYW5zbGF0ZVggPSAwO1xuICAgICAgICB0aGlzLnN0YXRlLnRyYW5zbGF0ZVkgPSAwO1xuICAgICAgICB0aGlzLnN0YXRlLnNjYWxlWCA9IDE7XG4gICAgICAgIHRoaXMuc3RhdGUuc2NhbGVZID0gMTtcbiAgICAgICAgdGhpcy5zdGF0ZS5yb3RhdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuc3RhdGUuY2xpcFggPSAwO1xuICAgICAgICB0aGlzLnN0YXRlLmNsaXBYMiA9IDA7XG4gICAgICAgIHRoaXMuc3RhdGUuY2xpcFkgPSAwO1xuICAgICAgICB0aGlzLnN0YXRlLmNsaXBZMiA9IDA7XG4gICAgICAgIHRoaXMuc3RhdGUuYWxwaGEgPSAyNTU7XG4gICAgfVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICAvLyBSZXNpemUgdGhlIGdsIHZpZXdwb3J0IHRvIGJlIHRoZSBuZXcgc2l6ZSBvZiB0aGUgY2FudmFzLlxuICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc2hhZGVyIHZhcmlhYmxlcyBmb3IgY2FudmFzIHNpemUuXG4gICAgICAgIC8vIFNlbmRpbmcgaXQgdG8gZ2wgbm93IHNvIHdlIGRvbid0IGhhdmUgdG8gZG8gdGhlIG1hdGggaW4gSmF2YVNjcmlwdCBvbiBldmVyeSBkcmF3LFxuICAgICAgICAvLyBzaW5jZSBnbCB3YW50cyB0byBkcmF3IGF0IGEgcG9zaXRpb24gZnJvbSAwIHRvIDEsIGFuZCB3ZSB3YW50IHRvIGRvIGRyYXdJbWFnZSB3aXRoIGEgc2NyZWVuIHBpeGVsIHBvc2l0aW9uLlxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZih0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIFwidUNhbnZhc1NpemVcIiksIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgfVxuXG4gICAgZ2V0RXJyb3IoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuZ2wuZ2V0RXJyb3IoKSAhPT0gMCkge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmdsLmdldEVycm9yKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5JTlZBTElEX0VOVU06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludmFsaWQgRW51bVwiO1xuICAgICAgICAgICAgICAgIGNhc2UgV2ViR0xSZW5kZXJpbmdDb250ZXh0LklOVkFMSURfVkFMVUU6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludmFsaWQgVmFsdWVcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5JTlZBTElEX09QRVJBVElPTjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBPcGVyYXRpb25cIjtcbiAgICAgICAgICAgICAgICBjYXNlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5JTlZBTElEX0ZSQU1FQlVGRkVSX09QRVJBVElPTjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBGcmFtZWJ1ZmZlciBPcGVyYXRpb25cIjtcbiAgICAgICAgICAgICAgICBjYXNlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5PVVRfT0ZfTUVNT1JZOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJPdXQgb2YgTWVtb3J5XCI7XG4gICAgICAgICAgICAgICAgY2FzZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuQ09OVEVYVF9MT1NUX1dFQkdMOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJMb3N0IFdlYkdMIENvbnRleHRcIjtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gXCJVbmtub3duIGVycm9yIC0gXCIgKyB0aGlzLmdsLmdldEVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIF9kcmF3Qml0bWFwKGltZzogSU9wZW5HTEJpdG1hcCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2w6IG51bWJlciA9IDB4RkZGRkZGMDApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZHJhd0ltYWdlKGltZy50ZXhYLCBpbWcudGV4WSwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2wgKyB0aGlzLnN0YXRlLmJyaWdodG5lc3MsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFscGhhKTtcbiAgICB9XG5cbiAgICBfZHJhd0ltYWdlKHRleFg6IG51bWJlciwgdGV4WTogbnVtYmVyLCB0ZXhXaWR0aDogbnVtYmVyLCB0ZXhIZWlnaHQ6IG51bWJlciwgZHJhd1g6IG51bWJlciwgZHJhd1k6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJnYmE6IG51bWJlciwgYWxwaGE6IG51bWJlcikge1xuICAgICAgICBsZXQgaSA9IHRoaXMuZHJhd3MgKiA2O1xuXG4gICAgICAgIHRoaXMucmdiYXNbaSArIDRdID0gcmdiYSB8IGFscGhhO1xuICAgICAgICB0aGlzLnJvdGF0aW9uc1tpICsgNV0gPSB0aGlzLnN0YXRlLnJvdGF0aW9uICogTWF0aC5zaWduKHRoaXMuc3RhdGUuc2NhbGVYKSAqIE1hdGguc2lnbih0aGlzLnN0YXRlLnNjYWxlWSk7XG4gICAgICAgIGkgKj0gMjtcblxuICAgICAgICB2YXIgcG9zaXRpb25zID0gdGhpcy5wb3NpdGlvbnM7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucm90YXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLnNxcnQoZHJhd1ggKiBkcmF3WCArIGRyYXdZICogZHJhd1kpO1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGRyYXdZLCBkcmF3WCk7XG4gICAgICAgICAgICBkcmF3WCA9IE1hdGguY29zKGFuZ2xlICsgdGhpcy5zdGF0ZS5yb3RhdGlvbikgKiBkaXN0O1xuICAgICAgICAgICAgZHJhd1kgPSBNYXRoLnNpbihhbmdsZSArIHRoaXMuc3RhdGUucm90YXRpb24pICogZGlzdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpZHRoICo9IHRoaXMuc3RhdGUuc2NhbGVYO1xuICAgICAgICBoZWlnaHQgKj0gdGhpcy5zdGF0ZS5zY2FsZVk7XG4gICAgICAgIGRyYXdYICo9IHRoaXMuc3RhdGUuc2NhbGVYO1xuICAgICAgICBkcmF3WSAqPSB0aGlzLnN0YXRlLnNjYWxlWTtcbiAgICAgICAgZHJhd1ggKz0gdGhpcy5zdGF0ZS50cmFuc2xhdGVYO1xuICAgICAgICBkcmF3WSArPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZVk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2xpcFggPCB0aGlzLnN0YXRlLmNsaXBYMikge1xuICAgICAgICAgICAgaWYgKGRyYXdYID4gdGhpcy5zdGF0ZS5jbGlwWDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkcmF3WDIgPSBkcmF3WCArIHdpZHRoO1xuICAgICAgICAgICAgaWYgKGRyYXdYMiA8IHRoaXMuc3RhdGUuY2xpcFgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZHJhd1gyID4gdGhpcy5zdGF0ZS5jbGlwWDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93UGVyY2VudCA9IDEgLSAoZHJhd1gyIC0gdGhpcy5zdGF0ZS5jbGlwWDIpIC8gd2lkdGg7XG4gICAgICAgICAgICAgICAgdGV4V2lkdGggKj0gc2hvd1BlcmNlbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGggKj0gc2hvd1BlcmNlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZHJhd1ggPCB0aGlzLnN0YXRlLmNsaXBYKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd1BlcmNlbnQgPSAxIC0gKHRoaXMuc3RhdGUuY2xpcFggLSBkcmF3WCkgLyB3aWR0aDtcbiAgICAgICAgICAgICAgICB3aWR0aCAtPSB0aGlzLnN0YXRlLmNsaXBYIC0gZHJhd1g7XG4gICAgICAgICAgICAgICAgZHJhd1ggPSB0aGlzLnN0YXRlLmNsaXBYO1xuICAgICAgICAgICAgICAgIHRleFggKz0gdGV4V2lkdGggKiAoMSAtIHNob3dQZXJjZW50KTtcbiAgICAgICAgICAgICAgICB0ZXhXaWR0aCAqPSBzaG93UGVyY2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNsaXBZIDwgdGhpcy5zdGF0ZS5jbGlwWTIpIHtcbiAgICAgICAgICAgIGlmIChkcmF3WSA+IHRoaXMuc3RhdGUuY2xpcFkyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZHJhd1kyID0gZHJhd1kgKyBoZWlnaHQ7XG4gICAgICAgICAgICBpZiAoZHJhd1kyIDwgdGhpcy5zdGF0ZS5jbGlwWSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkcmF3WTIgPiB0aGlzLnN0YXRlLmNsaXBZMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dQZXJjZW50ID0gMSAtIChkcmF3WTIgLSB0aGlzLnN0YXRlLmNsaXBZMikgLyBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGV4SGVpZ2h0ICo9IHNob3dQZXJjZW50O1xuICAgICAgICAgICAgICAgIGhlaWdodCAqPSBzaG93UGVyY2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkcmF3WSA8IHRoaXMuc3RhdGUuY2xpcFkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93UGVyY2VudCA9IDEgLSAodGhpcy5zdGF0ZS5jbGlwWSAtIGRyYXdZKSAvIGhlaWdodDtcbiAgICAgICAgICAgICAgICBoZWlnaHQgLT0gdGhpcy5zdGF0ZS5jbGlwWSAtIGRyYXdZO1xuICAgICAgICAgICAgICAgIGRyYXdZID0gdGhpcy5zdGF0ZS5jbGlwWTtcbiAgICAgICAgICAgICAgICB0ZXhZICs9IHRleEhlaWdodCAqICgxIC0gc2hvd1BlcmNlbnQpO1xuICAgICAgICAgICAgICAgIHRleEhlaWdodCAqPSBzaG93UGVyY2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBvc2l0aW9uc1tpXSA9IGRyYXdYO1xuICAgICAgICBwb3NpdGlvbnNbaSArIDFdID0gZHJhd1k7XG4gICAgICAgIHBvc2l0aW9uc1tpICsgMl0gPSB3aWR0aDtcbiAgICAgICAgcG9zaXRpb25zW2kgKyAzXSA9IGhlaWdodDtcblxuICAgICAgICBwb3NpdGlvbnNbaSArIDRdID0gdGV4WDtcbiAgICAgICAgcG9zaXRpb25zW2kgKyA1XSA9IHRleFk7XG4gICAgICAgIHBvc2l0aW9uc1tpICsgNl0gPSB0ZXhXaWR0aDtcbiAgICAgICAgcG9zaXRpb25zW2kgKyA3XSA9IHRleEhlaWdodDtcblxuICAgICAgICB0aGlzLmRyYXdzKytcbiAgICB9XG5cbiAgICBnbFN0YXJ0Q29udGV4dCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBnbENvbW1pdENvbnRleHQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRyYXdzID4gMCkge1xuICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCAwLCB0aGlzLnJnYmFzLnN1YmFycmF5KDAsIHRoaXMuZHJhd3MgKiA2KSk7XG4gICAgICAgICAgICB0aGlzLmV4dGVuc2lvbi5kcmF3RWxlbWVudHNJbnN0YW5jZWRBTkdMRSh0aGlzLmdsLlRSSUFOR0xFUywgNiwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCAwLCB0aGlzLmRyYXdzKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd3MgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUudHJhbnNmb3JtcyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLnN0YXRlcyA9IFt0aGlzLnN0YXRlLnRyYW5zZm9ybXNdO1xuICAgICAgICB0aGlzLmRyYXdzID0gMDtcbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5nbFN0YXJ0Q29udGV4dCgpO1xuICAgIH1cblxuICAgIHJlbmRlckVuZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nbENvbW1pdENvbnRleHQoKTtcbiAgICB9XG5cbiAgICBhcHBseUZvbnQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgc21vb3RoKCk6IHZvaWQge1xuICAgIH1cblxuICAgIGNvcHkoKTogQml0bWFwIHtcbiAgICAgICAgcmV0dXJuIG5ldyBOdWxsQml0bWFwKCk7XG4gICAgfVxuXG4gICAgZ2V0T2Zmc2NyZWVuKCk6IE9mZnNjcmVlbiB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5vZmZzY3JlZW47XG4gICAgfVxuXG4gICAgY2xpcCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgeCAqPSB0aGlzLnN0YXRlLnNjYWxlWDtcbiAgICAgICAgeSAqPSB0aGlzLnN0YXRlLnNjYWxlWTtcbiAgICAgICAgeCArPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZVg7XG4gICAgICAgIHkgKz0gdGhpcy5zdGF0ZS50cmFuc2xhdGVZO1xuICAgICAgICB0aGlzLnN0YXRlLmNsaXBYID0geDtcbiAgICAgICAgdGhpcy5zdGF0ZS5jbGlwWSA9IHk7XG4gICAgICAgIHRoaXMuc3RhdGUuY2xpcFgyID0geCArIHdpZHRoO1xuICAgICAgICB0aGlzLnN0YXRlLmNsaXBZMiA9IHkgKyBoZWlnaHQ7XG4gICAgfVxuXG4gICAgY3JlYXRlT2Zmc2NyZWVuKCk6IE9mZnNjcmVlbiB7XG4gICAgICAgIHRoaXMub2Zmc2NyZWVuSWQrKztcbiAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9wZW5HbE9mZnNjcmVlbih0aGlzLmdsLCB0aGlzLCB0aGlzLm9mZnNjcmVlbklkKTtcbiAgICAgICAgdGhpcy5vZmZzY3JlZW5zLnB1c2gob2Zmc2NyZWVuKTtcblxuICAgICAgICByZXR1cm4gb2Zmc2NyZWVuO1xuICAgIH1cblxuICAgIGRyYXdUb09mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbiB8IG51bGwpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub2Zmc2NyZWVuKSB7XG4gICAgICAgICAgICAodGhpcy5vZmZzY3JlZW4gYXMgT3BlbkdsT2Zmc2NyZWVuKS51bnVzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vZmZzY3JlZW4gPSBzY3JlZW47XG5cbiAgICAgICAgaWYgKHRoaXMub2Zmc2NyZWVuKSB7XG4gICAgICAgICAgICAodGhpcy5vZmZzY3JlZW4gYXMgT3BlbkdsT2Zmc2NyZWVuKS51c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdPZmZzY3JlZW4oc2NyZWVuOiBPZmZzY3JlZW4pOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gKHNjcmVlbiBhcyBPcGVuR2xPZmZzY3JlZW4pO1xuICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgIHRoaXMuZ2xTdGFydENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVUZXhTaXplXCIpLCBvZmZzY3JlZW4ud2lkdGgsIG9mZnNjcmVlbi5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgb2Zmc2NyZWVuLnRleHR1cmUpO1xuICAgICAgICB0aGlzLl9kcmF3SW1hZ2UoMCwgb2Zmc2NyZWVuLmhlaWdodCwgb2Zmc2NyZWVuLndpZHRoLCAtb2Zmc2NyZWVuLmhlaWdodCwgMCwgMCwgb2Zmc2NyZWVuLndpZHRoLCBvZmZzY3JlZW4uaGVpZ2h0LCAweEZGRkZGRjAwLCAyNTUpO1xuICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmKHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1VGV4U2l6ZVwiKSwgdGhpcy50ZXhXaWR0aCwgdGhpcy50ZXhIZWlnaHQpO1xuICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5hdGxhc1RleHR1cmUpO1xuICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgZHJhd1NjYWxlZE9mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbiwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9mZnNjcmVlbiA9IChzY3JlZW4gYXMgT3BlbkdsT2Zmc2NyZWVuKTtcbiAgICAgICAgdGhpcy5nbENvbW1pdENvbnRleHQoKTtcblxuICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmKHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1VGV4U2l6ZVwiKSwgb2Zmc2NyZWVuLndpZHRoLCBvZmZzY3JlZW4uaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIG9mZnNjcmVlbi50ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5fZHJhd0ltYWdlKDAsIG9mZnNjcmVlbi5oZWlnaHQsIG9mZnNjcmVlbi53aWR0aCwgLW9mZnNjcmVlbi5oZWlnaHQsIHgsIHksIHdpZHRoLCBoZWlnaHQsIDB4RkZGRkZGMDAsIDI1NSk7XG4gICAgICAgIHRoaXMuZ2xDb21taXRDb250ZXh0KCk7XG5cbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVUZXhTaXplXCIpLCB0aGlzLnRleFdpZHRoLCB0aGlzLnRleEhlaWdodCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmF0bGFzVGV4dHVyZSk7XG4gICAgICAgIHRoaXMuZ2xTdGFydENvbnRleHQoKTtcbiAgICB9XG5cbiAgICBmaWxsUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJnYmEgPSBjb2xUb051bWJlcihjb2wpO1xuICAgICAgICBjb25zdCBhID0gKHJnYmEgJSAyNTYpO1xuXG4gICAgICAgIHRoaXMuX2RyYXdJbWFnZSgwLCAwLCAxLCAxLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCByZ2JhLCBhKVxuICAgIH1cblxuICAgIGZpbGxDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZyk6IHZvaWQge1xuICAgIH1cblxuICAgIGRyYXdDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZywgd2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgIH1cblxuICAgIHNldExpbmVEYXNoKHNlZ21lbnRzOiBudW1iZXJbXSk6IHZvaWQge1xuICAgIH1cblxuICAgIGRyYXdMaW5lKHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIsIGNvbDogc3RyaW5nLCB3aWR0aD86IG51bWJlciB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIH1cblxuICAgIGRyYXdCaXRtYXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGJpdG1hcDogQml0bWFwKTogdm9pZCB7XG4gICAgICAgIGJpdG1hcC5kcmF3KHRoaXMsIHgsIHkpO1xuICAgIH1cblxuICAgIGRyYXdTY2FsZWRCaXRtYXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBiaXRtYXA6IEJpdG1hcCk6IHZvaWQge1xuICAgICAgICBiaXRtYXAuZHJhd1NjYWxlZCh0aGlzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBjbGVhclJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2xDb21taXRDb250ZXh0KCk7XG5cbiAgICAgICAgdGhpcy5nbFN0YXJ0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLlpFUk8sIHRoaXMuZ2wuWkVSTyk7XG4gICAgICAgIHRoaXMuZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgXCJyZ2JhKDAsMCwwLDApXCIpO1xuICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLlNSQ19BTFBIQSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcblxuICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgIH1cblxuICAgIHNldEZvbnQoZm9udDogRm9udCk6IHZvaWQge1xuICAgICAgICAvLyBJR05PUkVEXG4gICAgfVxuXG4gICAgc2V0Q29tcG9zaXRlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJtdWx0aXBseVwiKSB7XG4gICAgICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLlpFUk8sIHRoaXMuZ2wuU1JDX0NPTE9SKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSA9PT0gXCJzb3VyY2Utb3ZlclwiKSB7XG4gICAgICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLlNSQ19BTFBIQSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEZvbnRTaXplKHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAvLyBJR05PUkVEXG4gICAgfVxuXG4gICAgZHJhd1N0cmluZyh4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBjb2w6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAvLyBJR05PUkVEXG4gICAgfVxuXG4gICAgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKHgpXG4gICAgICAgIHkgPSBNYXRoLmZsb29yKHkpXG4gICAgICAgIHRoaXMuX3RyYW5zbGF0ZSh4LCB5KVxuICAgICAgICB0aGlzLnRyYW5zZm9ybUN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgICAgIHRoaXMuc3RhdGUudHJhbnNmb3Jtcy5wdXNoKFtcInRyYW5zbGF0ZVwiLCB4LCB5XSlcbiAgICB9XG5cbiAgICBfdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHggKj0gdGhpcy5zdGF0ZS5zY2FsZVg7XG4gICAgICAgIHkgKj0gdGhpcy5zdGF0ZS5zY2FsZVk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJvdGF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHksIHgpO1xuICAgICAgICAgICAgdmFyIGRpc3QgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRyYW5zbGF0ZVggKz0gTWF0aC5jb3MoYW5nbGUgKyB0aGlzLnN0YXRlLnJvdGF0aW9uICogTWF0aC5zaWduKHRoaXMuc3RhdGUuc2NhbGVYKSkgKiBkaXN0O1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50cmFuc2xhdGVZICs9IE1hdGguc2luKGFuZ2xlICsgdGhpcy5zdGF0ZS5yb3RhdGlvbiAqIE1hdGguc2lnbih0aGlzLnN0YXRlLnNjYWxlWSkpICogZGlzdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudHJhbnNsYXRlWCArPSB4O1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50cmFuc2xhdGVZICs9IHk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLnNjYWxlWCAqPSB4O1xuICAgICAgICB0aGlzLnN0YXRlLnNjYWxlWSAqPSB5O1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUN0eC5zY2FsZSh4LCB5KTtcbiAgICAgICAgdGhpcy5zdGF0ZS50cmFuc2Zvcm1zLnB1c2goW1wic2NhbGVcIiwgeCwgeV0pO1xuICAgIH1cblxuICAgIHB1c2goKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtQ3R4LnNhdmUoKTtcblxuICAgICAgICB0aGlzLnN0YXRlLnRyYW5zZm9ybXMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5zdGF0ZXMucHVzaCh0aGlzLnN0YXRlLnRyYW5zZm9ybXMpO1xuICAgICAgICB0aGlzLnN0YXRlLmFscGhhcy5wdXNoKHRoaXMuc3RhdGUuYWxwaGEpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnN0YXRlcy5sZW5ndGggPiA5OSkgY29uc29sZS5lcnJvcihcInNhdmUoKSB3aXRob3V0IHJlc3RvcmUoKSFcIik7XG4gICAgfVxuXG4gICAgcG9wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUN0eC5yZXN0b3JlKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5zdGF0ZXMucG9wKCk7XG4gICAgICAgIHRoaXMuc3RhdGUudHJhbnNmb3JtcyA9IHRoaXMuc3RhdGVzW3RoaXMuc3RhdGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuXG4gICAgICAgIGZvciAodmFyIHRyYW5zZm9ybXMgb2YgdGhpcy5zdGF0ZS5zdGF0ZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHRyYW5zZm9ybSBvZiB0cmFuc2Zvcm1zKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSB0cmFuc2Zvcm1bMF07XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT0gJ3RyYW5zbGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRlKHRyYW5zZm9ybVsxXSwgdHJhbnNmb3JtWzJdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT0gJ3NjYWxlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNjYWxlWCAqPSB0cmFuc2Zvcm1bMV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2NhbGVZICo9IHRyYW5zZm9ybVsyXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT0gJ3JvdGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3RhdGlvbiArPSB0cmFuc2Zvcm1bMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xuICAgIH1cblxuICAgIGdldEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGZpdFNjcmVlbihwaXhlbFNjYWxlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgd2lkdGg6IG51bWJlciA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gICAgICAgIGNvbnN0IGhlaWdodDogbnVtYmVyID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApXG4gICAgICAgIGNvbnN0IHJlYWxXaWR0aDogbnVtYmVyID0gTWF0aC5mbG9vcih3aWR0aCAvIHBpeGVsU2NhbGUpICogcGl4ZWxTY2FsZTtcbiAgICAgICAgY29uc3QgcmVhbEhlaWdodDogbnVtYmVyID0gTWF0aC5mbG9vcihoZWlnaHQgLyBwaXhlbFNjYWxlKSAqIHBpeGVsU2NhbGU7XG4gICAgICAgIGNvbnN0IHZpcnR1YWxXaWR0aDogbnVtYmVyID0gcmVhbFdpZHRoIC8gcGl4ZWxTY2FsZTtcbiAgICAgICAgY29uc3QgdmlydHVhbEhlaWdodDogbnVtYmVyID0gcmVhbEhlaWdodCAvIHBpeGVsU2NhbGU7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB2aXJ0dWFsV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHZpcnR1YWxIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gcmVhbFdpZHRoICsgXCJweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSByZWFsSGVpZ2h0ICsgXCJweFwiO1xuICAgIH1cblxuICAgIGdldFN0cmluZ1dpZHRoKHRleHQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHNldEFscGhhKGFscGhhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5hbHBoYSA9IE1hdGguZmxvb3IoYWxwaGEgKiAyNTUpO1xuICAgIH1cblxuICAgIGdldFRyYW5zZm9ybSgpOiBET01NYXRyaXgge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1DdHguZ2V0VHJhbnNmb3JtKCk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBPZmZzY3JlZW4gfSBmcm9tIFwiLi4vR3JhcGhpY3NcIjtcbmltcG9ydCB7IE9wZW5HTEdyYXBoaWNzSW1wbCB9IGZyb20gXCIuL09wZW5HTEdyYXBoaWNzSW1wbFwiO1xuaW1wb3J0IHsgUmVuZGVyaW5nU3RhdGUgfSBmcm9tIFwiLi9SZW5kZXJpbmdTdGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgT3BlbkdsT2Zmc2NyZWVuIGltcGxlbWVudHMgT2Zmc2NyZWVuLCBSZW5kZXJpbmdTdGF0ZSB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB0ZXh0dXJlOiBXZWJHTFRleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xuICAgIGZiOiBXZWJHTEZyYW1lYnVmZmVyIHwgbnVsbCA9IG51bGw7IFxuICAgIGdyYXBoaWNzOiBPcGVuR0xHcmFwaGljc0ltcGw7XG4gICAgaWQ6IG51bWJlciA9IDA7XG4gICAgaW51c2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGFscGhhczogbnVtYmVyW10gPSBbXTtcbiAgICB0cmFuc2Zvcm1zOiBhbnlbXSA9IFtdO1xuICAgIHN0YXRlczogYW55W10gPSBbXTtcbiAgICBicmlnaHRuZXNzOiBudW1iZXIgPSAwO1xuICAgIHRyYW5zbGF0ZVg6IG51bWJlciA9IDA7XG4gICAgdHJhbnNsYXRlWTogbnVtYmVyID0gMDtcbiAgICBzY2FsZVg6IG51bWJlciA9IDE7XG4gICAgc2NhbGVZOiBudW1iZXIgPSAxO1xuICAgIHJvdGF0aW9uOiBudW1iZXIgPSAwO1xuICAgIGNsaXBYOiBudW1iZXIgPSAwO1xuICAgIGNsaXBZOiBudW1iZXIgPSAwO1xuICAgIGNsaXBYMjogbnVtYmVyID0gMDtcbiAgICBjbGlwWTI6IG51bWJlciA9IDA7XG4gICAgYWxwaGE6IG51bWJlciA9IDI1NTtcblxuICAgIGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIGdyYXBoaWNzOiBPcGVuR0xHcmFwaGljc0ltcGwsIGlkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLndpZHRoID0gMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gZ3JhcGhpY3M7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBnZXRXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICBnZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIHVzZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW51c2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZ2xDb21taXRDb250ZXh0KCk7XG5cbiAgICAgICAgdGhpcy5pbnVzZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZmIpO1xuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZih0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmdyYXBoaWNzLnNoYWRlclByb2dyYW0sIFwidUNhbnZhc1NpemVcIiksIE1hdGguZmxvb3IodGhpcy53aWR0aCAvIDIpLCBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0IC8gMikpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5ncmFwaGljcy5zdGF0ZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MucmVzZXRTdGF0ZSgpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgdW51c2UoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pbnVzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmludXNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZ2xDb21taXRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3Muc3RhdGUgPSB0aGlzLmdyYXBoaWNzO1xuXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuZ3JhcGhpY3MuY2FudmFzLndpZHRoLCB0aGlzLmdyYXBoaWNzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZih0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmdyYXBoaWNzLnNoYWRlclByb2dyYW0sIFwidUNhbnZhc1NpemVcIiksIHRoaXMuZ3JhcGhpY3MuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5ncmFwaGljcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZ2xTdGFydENvbnRleHQoKTtcbiAgICB9XG4gICAgXG4gICAgc2V0RGltZW5zaW9uKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHdpZHRoID0gTWF0aC5mbG9vcih3aWR0aCAvIDIpICogMjtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQgLyAyKSAqIDI7XG5cbiAgICAgICAgaWYgKHRoaXMud2lkdGggIT09IHdpZHRoIHx8IHRoaXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVUZXh0dXJlKHRoaXMudGV4dHVyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mYikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlRnJhbWVidWZmZXIodGhpcy5mYik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGludGVybmFsRm9ybWF0ID0gdGhpcy5nbC5SR0JBO1xuICAgICAgICAgICAgY29uc3QgYm9yZGVyID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuZ2wuUkdCQTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdsLlVOU0lHTkVEX0JZVEU7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCxcbiAgICAgICAgICAgICAgICB3aWR0aCwgaGVpZ2h0LCBib3JkZXIsXG4gICAgICAgICAgICAgICAgZm9ybWF0LCB0eXBlLCBkYXRhKTtcblxuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX01BR19GSUxURVIsIHRoaXMuZ2wuTkVBUkVTVCk7XG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgdGhpcy5nbC5ORUFSRVNUKTtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1MsIHRoaXMuZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfV1JBUF9ULCB0aGlzLmdsLkNMQU1QX1RPX0VER0UpO1xuXG4gICAgICAgICAgICB0aGlzLmZiID0gdGhpcy5nbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5mYik7XG4gICAgICAgICAgICB0aGlzLmdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZ2wuQ09MT1JfQVRUQUNITUVOVDAsIHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlLCBsZXZlbCk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2wuY2xlYXJDb2xvcigwLDAsMCwxKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ3JhcGhpY3MuYXRsYXNUZXh0dXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCB7IEJpdG1hcCB9IGZyb20gXCIuLi9CaXRtYXBcIjtcbmltcG9ydCB7IHNob3VsZFByZXNjYWxlVGlsZXNldHMsIHNob3VsZFVzZVhiciB9IGZyb20gXCIuLi9HdXRlXCI7XG5pbXBvcnQgeyBUaWxlc2V0IH0gZnJvbSBcIi4uL1RpbGVzZXRcIjtcbmltcG9ydCB7IFBhbGV0dGUgfSBmcm9tIFwiLi4vaW1wbC9QYWxldHRlXCI7XG5pbXBvcnQgeyB4YnIyeCwgeGJyM3gsIHhicjR4IH0gZnJvbSAneGJyLWpzJztcbmltcG9ydCB7IE9wZW5HTEdyYXBoaWNzSW1wbCB9IGZyb20gXCIuL09wZW5HTEdyYXBoaWNzSW1wbFwiO1xuaW1wb3J0IHsgSU9wZW5HTEJpdG1hcCB9IGZyb20gXCIuL09wZW5HTEJpdG1hcFwiO1xuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiLi4vR3JhcGhpY3NcIjtcblxuY2xhc3MgT3BlbkdMVGlsZSBpbXBsZW1lbnRzIEJpdG1hcCwgSU9wZW5HTEJpdG1hcCB7XG4gICAgcGFyZW50OiBPcGVuR0xUaWxlc2V0SW1wbDtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGxvYWRlZDogYm9vbGVhbjtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHNjYWxlOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nID0gXCJ0aWxlXCI7XG4gICAgdGV4WDogbnVtYmVyID0gMDtcbiAgICB0ZXhZOiBudW1iZXIgPSAwO1xuICAgIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIGNvbDogbnVtYmVyID0gMHhGRkZGRkYwMDtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IE9wZW5HTFRpbGVzZXRJbXBsLCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIH1cblxuICAgIGNvcHlXaXRoQ29sKHJnYmE6IG51bWJlcik6IE9wZW5HTFRpbGUge1xuICAgICAgICBjb25zdCBjb3B5ID0gbmV3IE9wZW5HTFRpbGUodGhpcy5wYXJlbnQsIHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5zY2FsZSk7XG4gICAgICAgIGNvcHkubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgY29weS5jb2wgPSByZ2JhO1xuICAgICAgICBjb3B5LnRleFggPSB0aGlzLnRleFg7XG4gICAgICAgIGNvcHkudGV4WSA9IHRoaXMudGV4WTtcblxuICAgICAgICByZXR1cm4gY29weTtcbiAgICB9XG5cbiAgICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZyA9IChncmFwaGljcyBhcyBPcGVuR0xHcmFwaGljc0ltcGwpO1xuICAgICAgICB0aGlzLnRleFggPSB0aGlzLnBhcmVudC50ZXhYICsgdGhpcy54O1xuICAgICAgICB0aGlzLnRleFkgPSB0aGlzLnBhcmVudC50ZXhZICsgdGhpcy55O1xuXG4gICAgICAgIGcuX2RyYXdCaXRtYXAodGhpcywgeCwgeSwgTWF0aC5mbG9vcih0aGlzLndpZHRoICogdGhpcy5zY2FsZSksIE1hdGguZmxvb3IodGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlKSwgdGhpcy5jb2wpO1xuICAgIH1cblxuICAgIGRyYXdTY2FsZWQoZ3JhcGhpY3M6IEdyYXBoaWNzLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZyA9IChncmFwaGljcyBhcyBPcGVuR0xHcmFwaGljc0ltcGwpO1xuICAgICAgICB0aGlzLnRleFggPSB0aGlzLnBhcmVudC50ZXhYICsgdGhpcy54O1xuICAgICAgICB0aGlzLnRleFkgPSB0aGlzLnBhcmVudC50ZXhZICsgdGhpcy55O1xuICAgICAgICBnLl9kcmF3Qml0bWFwKHRoaXMsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHRoaXMuY29sKTtcbiAgICB9XG5cbiAgICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wZW5HTFRpbGVzZXRJbXBsIGltcGxlbWVudHMgVGlsZXNldCwgSU9wZW5HTEJpdG1hcCB7XG4gICAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgdGlsZVdpZHRoOiBudW1iZXI7XG4gICAgdGlsZUhlaWdodDogbnVtYmVyO1xuICAgIG9yaWdpbmFsVGlsZVdpZHRoOiBudW1iZXI7XG4gICAgb3JpZ2luYWxUaWxlSGVpZ2h0OiBudW1iZXI7XG4gICAgaW1hZ2U6IGFueSB8IG51bGw7XG4gICAgYml0bWFwczogT3BlbkdMVGlsZVtdID0gW107XG4gICAgc2NhbmxpbmU6IG51bWJlciA9IDA7XG4gICAgdGlsZUNvdW50OiBudW1iZXIgPSAwO1xuICAgIHNjYWxlOiBudW1iZXI7XG4gICAgb25Mb2FkZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRleFg6IG51bWJlciA9IDA7XG4gICAgdGV4WTogbnVtYmVyID0gMDtcbiAgICB0aW50VGlsZXM6IFJlY29yZDxzdHJpbmcsIE9wZW5HTFRpbGVbXT4gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKGdyYXBoaWNzOiBPcGVuR0xHcmFwaGljc0ltcGwsIHVybDogc3RyaW5nLCBkYXRhVXJsTG9hZGVyOiBQcm9taXNlPEJsb2I+IHwgdW5kZWZpbmVkLCB0aWxlV2lkdGg6IG51bWJlciwgdGlsZUhlaWdodDogbnVtYmVyLCBzY2FsZTogbnVtYmVyID0gMSwgcGFsOiBQYWxldHRlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudGlsZVdpZHRoID0gdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCA9IHRpbGVXaWR0aDtcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gdGhpcy5vcmlnaW5hbFRpbGVIZWlnaHQgPSB0aWxlSGVpZ2h0O1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgIHRoaXMubmFtZSA9IHVybDtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY2FubGluZSA9IE1hdGguZmxvb3IodGhpcy5pbWFnZSEud2lkdGggLyB0aGlzLnRpbGVXaWR0aCk7XG4gICAgICAgICAgICBjb25zdCBkZXB0aDogbnVtYmVyID0gTWF0aC5mbG9vcih0aGlzLmltYWdlIS5oZWlnaHQgLyB0aGlzLnRpbGVIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy50aWxlQ291bnQgPSBkZXB0aCAqIHRoaXMuc2NhbmxpbmU7XG5cbiAgICAgICAgICAgIGlmIChwYWwpIHtcbiAgICAgICAgICAgICAgICBwYWwuYWRqdXN0SW1hZ2UodGhpcy5pbWFnZSEpLnRoZW4oKGltYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjdXQgdGhlIGltYWdlIGludG8gcGllY2VzXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgZGVwdGg7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnNjYW5saW5lOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJpdG1hcHMucHVzaChuZXcgT3BlbkdMVGlsZSh0aGlzLCB0aGlzLmltYWdlISwgeCAqIHRoaXMudGlsZVdpZHRoLCB5ICogdGhpcy50aWxlSGVpZ2h0LCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0LCBzY2FsZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVdpZHRoICo9IHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVIZWlnaHQgKj0gc2NhbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkxvYWRlZCgpO1xuICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5yZWdpc3RlckltYWdlKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY3V0IHRoZSBpbWFnZSBpbnRvIHBpZWNlc1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgZGVwdGg7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc2NhbmxpbmU7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaXRtYXBzLnB1c2gobmV3IE9wZW5HTFRpbGUodGhpcywgdGhpcy5pbWFnZSEsIHggKiB0aGlzLnRpbGVXaWR0aCwgeSAqIHRoaXMudGlsZUhlaWdodCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCwgc2NhbGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVXaWR0aCAqPSBzY2FsZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVIZWlnaHQgKj0gc2NhbGU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uTG9hZGVkKCk7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MucmVnaXN0ZXJJbWFnZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGRhdGFVcmxMb2FkZXIpIHtcbiAgICAgICAgICAgIGRhdGFVcmxMb2FkZXIudGhlbigoYmxvYjogQmxvYikgPT4ge1xuICAgICAgICAgICAgICAgIHZhciB1cmxDcmVhdG9yID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UhLnNyYyA9IHVybENyZWF0b3IuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlLndpZHRoO1xuICAgIH1cblxuICAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIH1cblxuICAgIGRyYXdTY2FsZWQoZ3JhcGhpY3M6IEdyYXBoaWNzLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBnZXRCbG9ja0NvbG9yVGlsZSh0aWxlOiBudW1iZXIsIHRpbnROYW1lOiBzdHJpbmcsIHJnYmE6IG51bWJlcltdKTogQml0bWFwIHtcbiAgICAgICAgbGV0IHRpbGVzID0gdGhpcy50aW50VGlsZXNbdGludE5hbWVdO1xuICAgICAgICBpZiAoIXRpbGVzKSB7XG4gICAgICAgICAgdGlsZXMgPSB0aGlzLnRpbnRUaWxlc1t0aW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgdGlsZVJlY29yZCA9IHRpbGVzW3RpbGVdO1xuICAgICAgICBpZiAoIXRpbGVSZWNvcmQpIHtcbiAgICAgICAgICAgIHJnYmFbMF0gKj0gMjU1O1xuICAgICAgICAgICAgcmdiYVsxXSAqPSAyNTU7XG4gICAgICAgICAgICByZ2JhWzJdICo9IDI1NTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAocmdiYVswXSAqICgyNTYgKiAyNTYgKiAyNTYpKSArIChyZ2JhWzFdICogKDI1NiAqIDI1NikpICsgKHJnYmFbMl0gKiAyNTYpICsgTWF0aC5mbG9vcihyZ2JhWzNdICogMjU1KTtcbiAgICAgICAgICAgIHRpbGVzW3RpbGVdID0gdGlsZVJlY29yZCA9IHRoaXMuZ2V0VGlsZSh0aWxlKS5jb3B5V2l0aENvbCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGlsZVJlY29yZDtcbiAgICB9XG5cbiAgICBnZXRTaGFkZWRUaWxlKHRpbGU6IG51bWJlciwgdGludE5hbWU6IHN0cmluZywgc2hhZGU6IG51bWJlcik6IEJpdG1hcCB7XG4gICAgICAgIGxldCB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXTtcbiAgICAgICAgaWYgKCF0aWxlcykge1xuICAgICAgICAgIHRpbGVzID0gdGhpcy50aW50VGlsZXNbdGludE5hbWVdID0gW107XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGV0IHRpbGVSZWNvcmQgPSB0aWxlc1t0aWxlXTtcbiAgICAgICAgaWYgKCF0aWxlUmVjb3JkKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICgyNTUgKiAoMjU2ICogMjU2ICogMjU2KSkgKyAoMjU1ICogKDI1NiAqIDI1NikpICsgKDI1NSAqIDI1NikgKyBNYXRoLmZsb29yKHNoYWRlICogMjU1KTtcbiAgICAgICAgICAgIHRpbGVzW3RpbGVdID0gdGlsZVJlY29yZCA9IHRoaXMuZ2V0VGlsZSh0aWxlKS5jb3B5V2l0aENvbCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGlsZVJlY29yZDtcbiAgICB9XG5cbiAgICBnZXRUaW50ZWRUaWxlKHRpbGU6IG51bWJlciwgdGludE5hbWU6IHN0cmluZywgcmdiYTogbnVtYmVyW10pOiBCaXRtYXAge1xuICAgICAgICBsZXQgdGlsZXMgPSB0aGlzLnRpbnRUaWxlc1t0aW50TmFtZV07XG4gICAgICAgIGlmICghdGlsZXMpIHtcbiAgICAgICAgICB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGxldCB0aWxlUmVjb3JkID0gdGlsZXNbdGlsZV07XG4gICAgICAgIGlmICghdGlsZVJlY29yZCkge1xuICAgICAgICAgICAgcmdiYVswXSAqPSAyNTU7XG4gICAgICAgICAgICByZ2JhWzFdICo9IDI1NTtcbiAgICAgICAgICAgIHJnYmFbMl0gKj0gMjU1O1xuICAgICAgICAgICAgaWYgKCFyZ2JhWzNdKSB7XG4gICAgICAgICAgICAgICAgcmdiYVszXSA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKHJnYmFbMF0gKiAoMjU2ICogMjU2ICogMjU2KSkgKyAocmdiYVsxXSAqICgyNTYgKiAyNTYpKSArIChyZ2JhWzJdICogMjU2KSArIE1hdGguZmxvb3IocmdiYVszXSAqIDI1NSk7XG4gICAgICAgICAgICB0aWxlc1t0aWxlXSA9IHRpbGVSZWNvcmQgPSB0aGlzLmdldFRpbGUodGlsZSkuY29weVdpdGhDb2wodmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpbGVSZWNvcmQ7XG4gICAgfVxuXG4gICAgbW9kaWZ5KG1vZGlmaWNhdGlvbjogKGltYWdlRGF0YTogSW1hZ2VEYXRhKSA9PiB2b2lkKTogVGlsZXNldCB7XG4gICAgICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmltYWdlIS53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UhLmhlaWdodDtcbiAgICAgICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlISwgMCwgMCk7XG4gICAgICAgICAgICBjb25zdCBpZDogSW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgbW9kaWZpY2F0aW9uKGlkKTtcbiAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaWQsIDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aGlzLmJpdG1hcHMpIHtcbiAgICAgICAgICAgIHRpbGUuaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0VGlsZXNBY3Jvc3MoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbmxpbmU7XG4gICAgfVxuXG4gICAgZ2V0VGlsZVdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVXaWR0aDtcbiAgICB9XG5cbiAgICBnZXRUaWxlSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVIZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0VGlsZUNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVDb3VudDtcbiAgICB9XG5cbiAgICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICAgIH1cblxuICAgIGdldFRpbGUodGlsZTogbnVtYmVyKTogT3BlbkdMVGlsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJpdG1hcHNbdGlsZV07XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgTWFwTm9kZSB9IGZyb20gXCIuL01hcE5vZGVcIjtcbmltcG9ydCB7IFBhdGggfSBmcm9tIFwiLi9QYXRoXCI7XG5pbXBvcnQgeyBQYXRoRmluZGVyTWFwIH0gZnJvbSBcIi4vUGF0aEZpbmRlck1hcFwiO1xuaW1wb3J0IHsgUGF0aE1vdmVyIH0gZnJvbSBcIi4vUGF0aE1vdmVyXCI7XG5cbmV4cG9ydCBjbGFzcyBBU3RhclBhdGhGaW5kZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgTk9SVEhfVE9fU09VVEggPSAwO1xuICAgIHB1YmxpYyBzdGF0aWMgRUFTVF9UT19XRVNUID0gMTtcbiAgICBwdWJsaWMgc3RhdGljIFNPVVRIX1RPX05PUlRIID0gMjtcbiAgICBwdWJsaWMgc3RhdGljIFdFU1RfVE9fRUFTVCA9IDM7XG4gICAgcHVibGljIHN0YXRpYyBOT05FID0gNDtcblxuICAgIHByaXZhdGUgb2JqZWN0UG9vbDogQXJyYXk8TWFwTm9kZT4gPSBbXTtcbiAgICBwcml2YXRlIG9wZW5MaXN0OiBBcnJheTxNYXBOb2RlPiA9IFtdO1xuICAgIHByaXZhdGUgcGFyZW50TGlzdDogQXJyYXk8TWFwTm9kZT4gPSBbXTtcbiAgICBwcml2YXRlIG9wZW46IEFycmF5PEFycmF5PG51bWJlcj4+ID0gW107XG4gICAgcHJpdmF0ZSBjbG9zZWQ6IEFycmF5PEFycmF5PG51bWJlcj4+ID0gW107XG5cbiAgICBwcml2YXRlIG1hcCE6IFBhdGhGaW5kZXJNYXA7XG4gICAgcHJpdmF0ZSBoZWlnaHQhOiBudW1iZXI7XG4gICAgcHJpdmF0ZSB3aWR0aCE6IG51bWJlcjtcblxuICAgIHByaXZhdGUgcGF0aEZpbmRDb3VudGVyOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbW92ZXIhOiBQYXRoTW92ZXI7XG4gICAgcHJpdmF0ZSB0eCE6IG51bWJlcltdO1xuICAgIHByaXZhdGUgdHkhOiBudW1iZXJbXTtcbiAgICBwcml2YXRlIGN4ITogbnVtYmVyO1xuICAgIHByaXZhdGUgY3khOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBtYXghOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IobWFwOiBQYXRoRmluZGVyTWFwKSB7XG4gICAgICAgIHRoaXMuc2V0TWFwKG1hcCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE1hcChtYXA6IFBhdGhGaW5kZXJNYXApIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1hcC5nZXRNYXBXaWR0aCgpO1xuICAgICAgICB0aGlzLmhlaWdodCA9IG1hcC5nZXRNYXBIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG5cbiAgICAgICAgaWYgKCF0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3BlbiA9IG5ldyBBcnJheTxBcnJheTxudW1iZXI+PigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkID0gbmV3IEFycmF5PEFycmF5PG51bWJlcj4+KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbyA9IHRoaXMub3BlbltpXSBcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jbG9zZWRbaV07XG5cbiAgICAgICAgICAgIGlmICghbykge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbltpXSA9IG8gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG8ucHVzaCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlZFtpXSA9IGMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGMucHVzaCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNTsgaisrKSB7XG4gICAgICAgICAgICAgICAgb1tqXSA9IDA7XG4gICAgICAgICAgICAgICAgY1tqXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2YgdGhpcy5vcGVuTGlzdCkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3RQb29sLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiB0aGlzLnBhcmVudExpc3QpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UG9vbC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyZW50TGlzdCA9IFtdXG4gICAgICAgIHRoaXMub3Blbkxpc3QgPSBbXVxuICAgICAgICB0aGlzLnBhdGhGaW5kQ291bnRlcisrO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2VuZXJhdGVQYXRoKG5vZGU6IE1hcE5vZGUpOiBQYXRoIHtcbiAgICAgICAgdmFyIGN1cnJlbnQ6IE1hcE5vZGUgfCBudWxsID0gbm9kZTtcbiAgICAgICAgdmFyIHBhdGg6IFBhdGggPSBuZXcgUGF0aCgpO1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHBhdGguYWRkKGN1cnJlbnQueCwgY3VycmVudC55KTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIHByaXZhdGUgYmxvY2tlZChzeDogbnVtYmVyLCBzeTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMubWFwLmxvY2F0aW9uRGlzY292ZXJlZCh4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuYmxvY2tlZCh0aGlzLm1vdmVyLCBudWxsLCBzeCwgc3ksIHgsIHksIHRoaXMuYXRUYXJnZXQoeCwgeSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXRUYXJnZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0eCA9IHRoaXMudHhbaV1cbiAgICAgICAgICAgIGNvbnN0IHR5ID0gdGhpcy50eVtpXVxuICAgICAgICAgICAgaWYgKHR4ID49IHggJiYgdHggPCB4ICsgdGhpcy5tb3Zlci5nZXRUaWxlc1dpZHRoKClcbiAgICAgICAgICAgICAgICAmJiB0eSA+PSB5ICYmIHR5IDwgeSArIHRoaXMubW92ZXIuZ2V0VGlsZXNIZWlnaHQoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kUGF0aChtb3ZlcjogUGF0aE1vdmVyLCB0eDogbnVtYmVyLCB0eTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbWF4OiBudW1iZXIpOiBQYXRoIHwgbnVsbCB7XG5cbiAgICAgICAgdHggPSBNYXRoLmZsb29yKHR4KTtcbiAgICAgICAgdHkgPSBNYXRoLmZsb29yKHR5KTtcblxuXG4gICAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgICAgICB0aGlzLm1vdmVyID0gbW92ZXI7XG4gICAgICAgIHRoaXMudHggPSBbXTtcbiAgICAgICAgdGhpcy50eSA9IFtdO1xuICAgICAgICAvLyBjZW50cmFsIHBvaW50IGZvciBoZXVyaXN0aWMgb3JkZXJpbmdcbiAgICAgICAgdGhpcy5jeCA9IHR4ICsgd2lkdGggLyAyXG4gICAgICAgIHRoaXMuY3kgPSB0eSArIGhlaWdodCAvIDJcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudHgucHVzaCh0eCArIGkpXG4gICAgICAgICAgICB0aGlzLnR5LnB1c2godHkpXG4gICAgICAgICAgICBpZiAoaGVpZ2h0ID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHgucHVzaCh0eCArIGkpXG4gICAgICAgICAgICAgICAgdGhpcy50eS5wdXNoKHR5ICsgaGVpZ2h0IC0gMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoZWlnaHQgPiAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGhlaWdodCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudHgucHVzaCh0eClcbiAgICAgICAgICAgICAgICB0aGlzLnR5LnB1c2godHkgKyBpKVxuICAgICAgICAgICAgICAgIGlmICh3aWR0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eC5wdXNoKHR4ICsgd2lkdGggLSAxKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR5LnB1c2godHkgKyBpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnR4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgICAgdGhpcy5hZGRMb2NhdGlvbihudWxsLCBNYXRoLmZsb29yKG1vdmVyLmdldFRpbGVNYXBYKCkpLCBNYXRoLmZsb29yKG1vdmVyLmdldFRpbGVNYXBZKCkpKTtcbiAgICAgICAgd2hpbGUgKHRoaXMub3Blbkxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgYmVzdDogTWFwTm9kZSA9IHRoaXMub3Blbkxpc3RbMF07XG4gICAgICAgICAgICB0aGlzLm9wZW5MaXN0LnNwbGljZSgwLCAxKTtcblxuICAgICAgICAgICAgLy8gaWYgYmVzdCBpcyB0aGUgdGFyZ2V0IHRoZW4gd2UndmUgZm91bmQgaXQhXG4gICAgICAgICAgICBpZiAodGhpcy5hdFRhcmdldChiZXN0LngsIGJlc3QueSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVBhdGgoYmVzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54ICsgMSwgYmVzdC55KTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54IC0gMSwgYmVzdC55KTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54LCBiZXN0LnkgKyAxKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54LCBiZXN0LnkgLSAxKTtcblxuICAgICAgICAgICAgdGhpcy5wYXJlbnRMaXN0LnB1c2goYmVzdClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTG9jYXRpb24ocGFyZW50OiBNYXBOb2RlIHwgbnVsbCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoeCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKHkpO1xuXG4gICAgICAgIHZhciBzeCA9IHg7XG4gICAgICAgIHZhciBzeSA9IHk7XG4gICAgICAgIHZhciBkaXIgPSBBU3RhclBhdGhGaW5kZXIuTk9ORTtcblxuICAgICAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN4ID0gcGFyZW50Lng7XG4gICAgICAgICAgICBzeSA9IHBhcmVudC55O1xuXG4gICAgICAgICAgICBpZiAoc3kgKyAxID09IHkpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBBU3RhclBhdGhGaW5kZXIuTk9SVEhfVE9fU09VVEg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3kgLSAxID09IHkpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBBU3RhclBhdGhGaW5kZXIuU09VVEhfVE9fTk9SVEg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3ggKyAxID09IHgpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBBU3RhclBhdGhGaW5kZXIuV0VTVF9UT19FQVNUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN4IC0gMSA9PSB4KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLkVBU1RfVE9fV0VTVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCF0aGlzLm1hcC52YWxpZExvY2F0aW9uKHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBpdCdzIGluIHRoZSBvcGVuIGxpc3QgaWdub3JlXG4gICAgICAgIGlmICh0aGlzLm9wZW5beCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPT0gdGhpcy5wYXRoRmluZENvdW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jbG9zZWRbeCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPT0gdGhpcy5wYXRoRmluZENvdW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGl0J3MgYmxvY2tlZCBmb3IgYW55IHJlYXNvbiwgYWRkIGl0IHRvIHRoZSBjbG9zZWRcbiAgICAgICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50LmRlcHRoID4gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlZFt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ibG9ja2VkKHN4LCBzeSwgeCwgeSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID0gdGhpcy5wYXRoRmluZENvdW50ZXI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvdGhlcndpc2UgaXQncyBhIHBvc3NpYmxlIHN0ZXAgYWRkIGl0IHRvIHRoZSBvcGVuXG4gICAgICAgIHRoaXMub3Blblt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuXG4gICAgICAgIGNvbnN0IGR4OiBudW1iZXIgPSBNYXRoLmFicyh0aGlzLmN4IC0geCk7XG4gICAgICAgIGNvbnN0IGR5OiBudW1iZXIgPSBNYXRoLmFicyh0aGlzLmN5IC0geSk7XG5cbiAgICAgICAgY29uc3Qgbm9kZTogTWFwTm9kZSA9IHRoaXMuY3JlYXRlTWFwTm9kZSh4LCB5LCBwYXJlbnQsIGR4ICsgZHkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IEFTdGFyUGF0aEZpbmRlci5iaW5hcnlTZWFyY2godGhpcy5vcGVuTGlzdCwgbm9kZS5oKVxuICAgICAgICB0aGlzLm9wZW5MaXN0LnNwbGljZShpbmRleCwgMCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYmluYXJ5U2VhcmNoKGFycmF5OiBNYXBOb2RlW10sIGg6IG51bWJlcikge1xuICAgICAgICBsZXQgbG8gPSAtMSwgaGkgPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgxICsgbG8gPCBoaSkge1xuICAgICAgICAgICAgY29uc3QgbWkgPSBsbyArICgoaGkgLSBsbykgPj4gMSk7XG4gICAgICAgICAgICBpZiAoYXJyYXlbbWldLmggPiBoKSB7XG4gICAgICAgICAgICAgICAgaGkgPSBtaTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG8gPSBtaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGk7XG4gICAgfVxuXG4gICAgLy8gb2JqZWN0IHBvb2wgYWNjZXNzb3IgLSBmcmVlIGlzIGRvbmUgaW4gYnVsa1xuICAgIHByaXZhdGUgY3JlYXRlTWFwTm9kZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcGFyZW50OiBNYXBOb2RlIHwgbnVsbCwgaDogbnVtYmVyKTogTWFwTm9kZSB7XG4gICAgICAgIGlmICh0aGlzLm9iamVjdFBvb2wubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHZhciBuOiBNYXBOb2RlID0gbmV3IE1hcE5vZGUoKTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UG9vbC5wdXNoKG4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5vZGU6IE1hcE5vZGUgPSB0aGlzLm9iamVjdFBvb2xbMF07XG4gICAgICAgIHRoaXMub2JqZWN0UG9vbC5zcGxpY2UoMCwgMSk7XG4gICAgICAgIG5vZGUueCA9IHg7XG4gICAgICAgIG5vZGUueSA9IHk7XG4gICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUuZGVwdGggPSBwYXJlbnQuZGVwdGggKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5kZXB0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5oID0gaCArIG5vZGUuZGVwdGg7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxufVxuIiwiZXhwb3J0IGNsYXNzIE1hcE5vZGUge1xuICAgIHghOiBudW1iZXI7XG4gICAgeSE6IG51bWJlcjtcbiAgICBwYXJlbnQhOiBNYXBOb2RlIHwgbnVsbDtcbiAgICBoITogbnVtYmVyO1xuICAgIGRlcHRoITogbnVtYmVyO1xufSIsImltcG9ydCB7IFN0ZXAgfSBmcm9tIFwiLi9TdGVwXCI7XG5cbmV4cG9ydCBjbGFzcyBQYXRoIHtcbiAgICBzdGVwczogQXJyYXk8U3RlcD4gPSBuZXcgQXJyYXk8U3RlcD4oKTtcblxuICAgIGFkZCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0ZXBzLnNwbGljZSgwLCAwLCBuZXcgU3RlcCh4LCB5KSk7XG4gICAgfVxuXG4gICAgZ2V0TGFzdFN0ZXAoKTogU3RlcCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0ZXBzW3RoaXMuc3RlcHMubGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgcG9wKCk6IFN0ZXAge1xuICAgICAgICBjb25zdCByZXN1bHQ6IFN0ZXAgPSB0aGlzLnN0ZXBzWzBdO1xuICAgICAgICB0aGlzLnN0ZXBzLnNwbGljZSgwLCAxKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBjb3B5KCk6IFBhdGgge1xuICAgICAgICBjb25zdCBjb3B5ID0gbmV3IFBhdGgoKTtcbiAgICAgICAgZm9yIChjb25zdCBzdGVwIG9mIHRoaXMuc3RlcHMpIHtcbiAgICAgICAgICAgIGNvcHkuc3RlcHMucHVzaChuZXcgU3RlcChzdGVwLngsIHN0ZXAueSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3B5LnN0ZXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDcmVhdGVkIGNvcHkgb2YgcGF0aCB3aXRoIHplcm8gc3RlcHM6IFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3B5O1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgU3RlcCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxufSIsImltcG9ydCB7IFJlc291cmNlIH0gZnJvbSBcIi4uL1Jlc291cmNlXCI7XG5pbXBvcnQgeyBNYXBFbnRpdHkgfSBmcm9tIFwiLi9NYXBFbnRpdHlcIjtcbmltcG9ydCB7IE1hcExheWVyIH0gZnJvbSBcIi4vTWFwTGF5ZXJcIjtcbmltcG9ydCB7IE1hcExldmVsIH0gZnJvbSBcIi4vTWFwTGV2ZWxcIjtcbmltcG9ydCB7IE1hcFdvcmxkIH0gZnJvbSBcIi4vTWFwV29ybGRcIjtcblxuaW50ZXJmYWNlIEVudGl0eVJlZiB7XG4gIHZhbHVlOiBzdHJpbmd8c3RyaW5nW11cbiAgZW50aXR5OiBNYXBFbnRpdHlcbiAgZmllbGQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExEVEtMYXllckNvbXByZXNzaW9uIHtcbiAgZnJvbTogc3RyaW5nO1xuICB0bzogc3RyaW5nO1xuICBvZmZzZXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIExEVEtXb3JsZCBleHRlbmRzIE1hcFdvcmxkIGltcGxlbWVudHMgUmVzb3VyY2Uge1xuICBzdGF0aWMgTEFZRVJfQ09NUFJFU1NJT05TOiBMRFRLTGF5ZXJDb21wcmVzc2lvbltdID0gW107XG5cbiAgbmFtZTogc3RyaW5nID0gXCJ3b3JsZFwiO1xuICB0aWxlc2V0czogYW55W10gPSBbXTtcblxuICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICB9XG5cbiAgbG9hZChmaWxlOiBzdHJpbmcsIGxvYWRlcjogKGZpbGU6IHN0cmluZykgPT4gUHJvbWlzZTxhbnk+KSA6IFByb21pc2U8TWFwV29ybGQ+IHtcbiAgICB0aGlzLm5hbWUgPSBmaWxlO1xuXG4gICAgcmV0dXJuIGxvYWRlcihmaWxlKS50aGVuKGpzb24gPT4ge1xuICAgICAgY29uc3QgZW50aXR5UmVmcyA6IEVudGl0eVJlZltdID0gW11cbiAgICAgIGNvbnN0IGVudGl0eU1hcDogUmVjb3JkPHN0cmluZywgTWFwRW50aXR5PiA9IHt9XG4gICAgICBcbiAgICAgIHRoaXMuZ3JpZFNpemUgPSBqc29uLmRlZmF1bHRHcmlkU2l6ZTtcbiAgICAgIGNvbnN0IHRpbGVzZXQ6IGFueSA9IGpzb24uZGVmcy50aWxlc2V0c1swXTtcbiAgICAgIHRoaXMudGlsZXNldHMgPSBqc29uLmRlZnMudGlsZXNldHM7XG4gICAgICB0aGlzLnRpbGVzZXRTY2FubGluZSA9IHRpbGVzZXQucHhXaWQgLyB0aWxlc2V0LnRpbGVHcmlkU2l6ZTtcbiAgICAgIHRoaXMudGlsZXNldFNpemUgPSB0aWxlc2V0LnRpbGVHcmlkU2l6ZTtcblxuICAgICAgbGV0IGxldmVscyA9IGpzb24ubGV2ZWxzO1xuICAgICAgaWYgKGpzb24ud29ybGRzICYmIGpzb24ud29ybGRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV2ZWxzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgd29ybGQgb2YganNvbi53b3JsZHMpIHtcbiAgICAgICAgICBsZXZlbHMgPSBsZXZlbHMuY29uY2F0KHdvcmxkLmxldmVscyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgYXN5bmNMZXZlbHMgOiBQcm9taXNlPE1hcExldmVsPltdID0gW11cbiAgICAgIGZvciAoY29uc3QgbGV2ZWxEYXRhIG9mIGpzb24ubGV2ZWxzKSB7XG4gICAgICAgIGNvbnN0IGxldmVsOiBNYXBMZXZlbCA9IG5ldyBNYXBMZXZlbCh0aGlzLCBsZXZlbERhdGEuaWRlbnRpZmllcik7XG5cbiAgICAgICAgbGV2ZWwud29ybGRYID0gbGV2ZWxEYXRhLndvcmxkWDtcbiAgICAgICAgbGV2ZWwud29ybGRZID0gbGV2ZWxEYXRhLndvcmxkWTtcbiAgICAgICAgbGV2ZWwud29ybGREZXB0aCA9IGxldmVsRGF0YS53b3JsZERlcHRoO1xuICAgICAgICBcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZEluc3RhbmNlIG9mIGxldmVsRGF0YS5maWVsZEluc3RhbmNlcykge1xuICAgICAgICAgIGxldmVsLmZpZWxkc1tmaWVsZEluc3RhbmNlLl9faWRlbnRpZmllcl0gPSBmaWVsZEluc3RhbmNlLl9fdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGF5ZXJzIDogUHJvbWlzZTxhbnk+XG4gICAgICAgIGlmIChsZXZlbERhdGEubGF5ZXJJbnN0YW5jZXMpIC8vIGVtYmVkZGVkIGxheWVyc1xuICAgICAgICAgIGxheWVycyA9IFByb21pc2UucmVzb2x2ZShsZXZlbERhdGEpXG4gICAgICAgIGVsc2UgaWYgKGxldmVsRGF0YS5leHRlcm5hbFJlbFBhdGgpIHtcbiAgICAgICAgICBsYXllcnMgPSBsb2FkZXIobGV2ZWxEYXRhLmV4dGVybmFsUmVsUGF0aClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIExEVEsgZmlsZSBmb3JtYXRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jTGV2ZWxzLnB1c2gobGF5ZXJzLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgTERUS1dvcmxkLmxvYWRMYXllcnMobGV2ZWwsIGRhdGEubGF5ZXJJbnN0YW5jZXMsIGVudGl0eVJlZnMsIGVudGl0eU1hcCk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGxldmVsLmxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXZlbC53aWR0aCA9IGxldmVsLmxheWVyc1swXS53aWR0aDtcbiAgICAgICAgICAgIGxldmVsLmhlaWdodCA9IGxldmVsLmxheWVyc1swXS5oZWlnaHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldmVsLndpZHRoID0gbGV2ZWxEYXRhLnB4V2lkIC8gdGhpcy5ncmlkU2l6ZTtcbiAgICAgICAgICAgIGxldmVsLmhlaWdodCA9IGxldmVsRGF0YS5weEhlaSAvIHRoaXMuZ3JpZFNpemU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5sZXZlbHNbbGV2ZWwuaWRdID0gbGV2ZWw7XG4gICAgICAgICAgcmV0dXJuIGxldmVsXG4gICAgICAgIH0pKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoYXN5bmNMZXZlbHMpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAvLyByZXNvbHZlIGFsbCBlbnRpdHkgaWRzIG5vdyB0aGF0IHdlIGhhdmUgYWxsIHRoZSBkYXRhXG4gICAgICAgIGZvciAoY29uc3QgcmVmIG9mIGVudGl0eVJlZnMpIHtcbiAgICAgICAgICBpZiAocmVmLnZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlIDogTWFwRW50aXR5W10gPSBbXVxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHJlZi52YWx1ZSkge1xuICAgICAgICAgICAgICBjb25zdCBlbnRpdHkgPSBlbnRpdHlNYXBbaXRlbV1cbiAgICAgICAgICAgICAgaWYgKGVudGl0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goZW50aXR5KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWYuZW50aXR5LmZpZWxkc1tyZWYuZmllbGRdID0gdmFsdWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZW50aXR5ID0gZW50aXR5TWFwW3JlZi52YWx1ZV1cbiAgICAgICAgICAgIGlmIChlbnRpdHkpIHtcbiAgICAgICAgICAgICAgcmVmLmVudGl0eS5maWVsZHNbcmVmLmZpZWxkXSA9IGVudGl0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBcbiAgcHJpdmF0ZSBzdGF0aWMgbG9hZExheWVycyhsZXZlbDogTWFwTGV2ZWwsIGxheWVySW5zdGFuY2VzOiBhbnksIGVudGl0eVJlZnM6IEVudGl0eVJlZltdLCBlbnRpdHlNYXA6IFJlY29yZDxzdHJpbmcsIE1hcEVudGl0eT4pIHtcbiAgICBmb3IgKGNvbnN0IGxheWVyRGF0YSBvZiBsYXllckluc3RhbmNlcykge1xuICAgICAgaWYgKGxheWVyRGF0YS5fX3R5cGUgPT09IFwiRW50aXRpZXNcIikge1xuICAgICAgICBmb3IgKGNvbnN0IGVudGl0eURhdGEgb2YgbGF5ZXJEYXRhLmVudGl0eUluc3RhbmNlcykge1xuICAgICAgICAgIGNvbnN0IGVudGl0eTogTWFwRW50aXR5ID0gbmV3IE1hcEVudGl0eShsZXZlbCxcbiAgICAgICAgICAgICAgZW50aXR5RGF0YS5weFswXSAvIGxheWVyRGF0YS5fX2dyaWRTaXplLFxuICAgICAgICAgICAgICBlbnRpdHlEYXRhLnB4WzFdIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUsXG4gICAgICAgICAgICAgIGVudGl0eURhdGEud2lkdGggLyBsYXllckRhdGEuX19ncmlkU2l6ZSxcbiAgICAgICAgICAgICAgZW50aXR5RGF0YS5oZWlnaHQgLyBsYXllckRhdGEuX19ncmlkU2l6ZSxcbiAgICAgICAgICAgICAgZW50aXR5RGF0YS5fX2lkZW50aWZpZXIpXG5cbiAgICAgICAgICBlbnRpdHlNYXBbZW50aXR5RGF0YS5paWRdID0gZW50aXR5XG4gICAgICAgICAgZm9yIChjb25zdCBmaWVsZEluc3RhbmNlIG9mIGVudGl0eURhdGEuZmllbGRJbnN0YW5jZXMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZmllbGRJbnN0YW5jZS5fX3R5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcIkVudGl0eVJlZlwiOiAvLyBzYXZlIGluZm9ybWF0aW9uIHRvIHJlc29sdmUgcmVmcyB0byBlbnRpdGllcyBsYXRlciB3aGVuIGFsbCBpbmZvcm1hdGlvbiB3aWxsIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIGVudGl0eVJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogZmllbGRJbnN0YW5jZS5fX3ZhbHVlLmVudGl0eUlpZCxcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogZW50aXR5LFxuICAgICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkSW5zdGFuY2UuX19pZGVudGlmaWVyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycmF5PEVudGl0eVJlZj5cIjpcbiAgICAgICAgICAgICAgICBlbnRpdHlSZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IChmaWVsZEluc3RhbmNlLl9fdmFsdWUgYXMgQXJyYXk8YW55PikubWFwKGl0ID0+IGl0LmVudGl0eUlpZCksXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IGVudGl0eSxcbiAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZEluc3RhbmNlLl9faWRlbnRpZmllclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZW50aXR5LmZpZWxkc1tmaWVsZEluc3RhbmNlLl9faWRlbnRpZmllcl0gPSBmaWVsZEluc3RhbmNlLl9fdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldmVsLmVudGl0aWVzLnB1c2goZW50aXR5KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29tcHJlc3Npb24gPSBMRFRLV29ybGQuTEFZRVJfQ09NUFJFU1NJT05TLmZpbmQoYyA9PiBjLmZyb20gPT09IGxheWVyRGF0YS5fX2lkZW50aWZpZXIpO1xuICAgICAgICBsZXQgbGF5ZXI6IE1hcExheWVyIHwgdW5kZWZpbmVkOyBcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGlmIChjb21wcmVzc2lvbikge1xuICAgICAgICAgIGNvbnN0IHRhcmdldExheWVyID0gbGV2ZWwubGF5ZXJCeU5hbWVbY29tcHJlc3Npb24udG9dO1xuICAgICAgICAgIGlmICghdGFyZ2V0TGF5ZXIpIHtcbiAgICAgICAgICAgIHRocm93IFwiVW5hYmxlIHRvIGZpbmQgY29tcHJlc3Npb24gbGF5ZXI6IFwiICsgY29tcHJlc3Npb24udG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGF5ZXIgPSB0YXJnZXRMYXllcjtcbiAgICAgICAgICBvZmZzZXQgPSBjb21wcmVzc2lvbi5vZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGF5ZXIgPSBuZXcgTWFwTGF5ZXIobGV2ZWwsIGxheWVyRGF0YS5fX2lkZW50aWZpZXIsIGxheWVyRGF0YS5fX2NXaWQsIGxheWVyRGF0YS5fX2NIZWkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGlsZXNldCA9IChsZXZlbC53b3JsZCBhcyBMRFRLV29ybGQpLnRpbGVzZXRzLmZpbmQodCA9PiB0LnVpZCA9PT0gbGF5ZXJEYXRhLl9fdGlsZXNldERlZlVpZCk7XG5cbiAgICAgICAgY29uc3Qgc2NhbmxpbmU6IG51bWJlciA9dGlsZXNldC5weFdpZCAvIHRpbGVzZXQudGlsZUdyaWRTaXplO1xuICAgICAgICBjb25zdCB0aWxlU2l6ZTogbnVtYmVyID10aWxlc2V0LnRpbGVHcmlkU2l6ZTtcblxuICAgICAgICBmb3IgKGNvbnN0IHRpbGUgb2YgbGF5ZXJEYXRhLmdyaWRUaWxlcykge1xuICAgICAgICAgIGNvbnN0IHg6IG51bWJlciA9IE1hdGguZmxvb3IodGlsZS5weFswXSAvIGxheWVyRGF0YS5fX2dyaWRTaXplKTtcbiAgICAgICAgICBjb25zdCB5OiBudW1iZXIgPSBNYXRoLmZsb29yKHRpbGUucHhbMV0gLyBsYXllckRhdGEuX19ncmlkU2l6ZSk7XG4gICAgICAgICAgY29uc3QgcG9zSW5kZXg6IG51bWJlciA9IHggKyAoeSAqIGxheWVyLndpZHRoKTtcblxuICAgICAgICAgIGNvbnN0IHR4OiBudW1iZXIgPSBNYXRoLmZsb29yKHRpbGUuc3JjWzBdIC8gdGlsZVNpemUpO1xuICAgICAgICAgIGNvbnN0IHR5OiBudW1iZXIgPSBNYXRoLmZsb29yKHRpbGUuc3JjWzFdIC8gdGlsZVNpemUpO1xuXG4gICAgICAgICAgY29uc3QgdGlsZUluZGV4OiBudW1iZXIgPSAodHkgKiBzY2FubGluZSkgKyB0eDtcbiAgICAgICAgICBsYXllci50aWxlc1twb3NJbmRleF0gPSB0aWxlSW5kZXggKyAxICsgb2Zmc2V0O1xuICAgICAgICAgIGxheWVyLmZsaXBzW3Bvc0luZGV4XSA9IHRpbGUuZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29tcHJlc3Npb24pIHtcbiAgICAgICAgICBsZXZlbC5sYXllcnMuc3BsaWNlKDAsIDAsIGxheWVyKTtcbiAgICAgICAgICBsZXZlbC5sYXllckJ5TmFtZVtsYXllci5uYW1lXSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBNYXBMZXZlbCB9IGZyb20gXCIuL01hcExldmVsXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXBFbnRpdHkge1xuICB0eXBlOiBzdHJpbmc7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbGV2ZWw6IE1hcExldmVsO1xuICBmaWVsZHM6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGxldmVsOiBNYXBMZXZlbCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgY29weShsZXZlbDogTWFwTGV2ZWwpOiBNYXBFbnRpdHkge1xuICAgIGNvbnN0IHJlc3VsdDogTWFwRW50aXR5ID0gbmV3IE1hcEVudGl0eShsZXZlbCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnR5cGUpO1xuICAgIHJlc3VsdC5maWVsZHMgPSB7Li4udGhpcy5maWVsZHN9O1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSIsImltcG9ydCB7IE1hcExldmVsIH0gZnJvbSBcIi4vTWFwTGV2ZWxcIjtcblxuZXhwb3J0IGNsYXNzIE1hcExheWVyIHtcbiAgc3RhdGljIEZMSVBfWDogbnVtYmVyID0gMTtcbiAgc3RhdGljIEZMSVBfWTogbnVtYmVyID0gMjtcbiAgXG4gIG5hbWU6IHN0cmluZztcbiAgbGV2ZWw6IE1hcExldmVsO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgdGlsZXM6IG51bWJlcltdO1xuICBmbGlwczogbnVtYmVyW107XG5cbiAgY29uc3RydWN0b3IobGV2ZWw6IE1hcExldmVsLCBuYW1lOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgdGhpcy50aWxlcyA9IFtdO1xuICAgIHRoaXMuZmxpcHMgPSBbXTtcbiAgICBmb3IgKGxldCBpPTA7aTx0aGlzLndpZHRoKnRoaXMuaGVpZ2h0O2krKykge1xuICAgICAgdGhpcy50aWxlcy5wdXNoKDApO1xuICAgICAgdGhpcy5mbGlwcy5wdXNoKDApO1xuICAgIH1cbiAgfVxuXG4gIGdldEZsaXBGbGFncyh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKCh4IDwgMCkgfHwgKHkgPCAwKSB8fCAoeCA+PSB0aGlzLndpZHRoKSB8fCAoeSA+PSB0aGlzLmhlaWdodCkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBwb3NJbmRleDogbnVtYmVyID0geCArICh5ICogdGhpcy53aWR0aCk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuZmxpcHNbcG9zSW5kZXhdO1xuICB9XG5cbiAgc2V0KHg6IG51bWJlciwgeTogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCh4IDwgMCkgfHwgKHkgPCAwKSB8fCAoeCA+PSB0aGlzLndpZHRoKSB8fCAoeSA+PSB0aGlzLmhlaWdodCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcG9zSW5kZXg6IG51bWJlciA9IHggKyAoeSAqIHRoaXMud2lkdGgpO1xuICAgIHRoaXMudGlsZXNbcG9zSW5kZXhdID0gdmFsdWU7XG4gIH1cblxuICBnZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICgoeCA8IDApIHx8ICh5IDwgMCkgfHwgKHggPj0gdGhpcy53aWR0aCkgfHwgKHkgPj0gdGhpcy5oZWlnaHQpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgcG9zSW5kZXg6IG51bWJlciA9IHggKyAoeSAqIHRoaXMud2lkdGgpO1xuICAgIFxuICAgIHJldHVybiB0aGlzLnRpbGVzW3Bvc0luZGV4XTtcbiAgfVxuXG4gIGNvcHkobGV2ZWw6IE1hcExldmVsKTogTWFwTGF5ZXIge1xuICAgIGNvbnN0IHJlc3VsdDogTWFwTGF5ZXIgPSBuZXcgTWFwTGF5ZXIobGV2ZWwsIHRoaXMubmFtZSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGZvciAobGV0IGk9MDtpPHRoaXMud2lkdGgqdGhpcy5oZWlnaHQ7aSsrKSB7XG4gICAgICByZXN1bHQudGlsZXNbaV0gPSB0aGlzLnRpbGVzW2ldO1xuICAgICAgcmVzdWx0LmZsaXBzW2ldID0gdGhpcy5mbGlwc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59IiwiaW1wb3J0IHsgTWFwRW50aXR5IH0gZnJvbSBcIi4vTWFwRW50aXR5XCI7XG5pbXBvcnQgeyBNYXBMYXllciB9IGZyb20gXCIuL01hcExheWVyXCI7XG5pbXBvcnQgeyBNYXBXb3JsZCB9IGZyb20gXCIuL01hcFdvcmxkXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXBMZXZlbCB7XG4gIGlkOiBzdHJpbmc7XG4gIGxheWVyczogTWFwTGF5ZXJbXSA9IFtdO1xuICBsYXllckJ5TmFtZTogUmVjb3JkPHN0cmluZywgTWFwTGF5ZXI+ID0ge307XG4gIHdpZHRoITogbnVtYmVyO1xuICBoZWlnaHQhOiBudW1iZXI7XG4gIHdvcmxkOiBNYXBXb3JsZDtcbiAgZW50aXRpZXM6IE1hcEVudGl0eVtdID0gW107XG4gIGZpZWxkczogYW55ID0ge307XG4gIHdvcmxkWDogbnVtYmVyID0gMDtcbiAgd29ybGRZOiBudW1iZXIgPSAwO1xuICB3b3JsZERlcHRoOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHdvcmxkOiBNYXBXb3JsZCwgaWQ6IHN0cmluZykge1xuICAgIHRoaXMud29ybGQgPSB3b3JsZDtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBlbnRpdGllc09mVHlwZSh0eXBlOiBzdHJpbmcpOiBNYXBFbnRpdHlbXSB7XG4gICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuZmlsdGVyKGVudGl0eSA9PiBlbnRpdHkudHlwZSA9PT0gdHlwZSk7XG4gIH1cblxuICBmaXJzdEVudGl0eU9mVHlwZSh0eXBlOiBzdHJpbmcpOiBNYXBFbnRpdHkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmVudGl0aWVzLmZpbmQoZW50aXR5ID0+IGVudGl0eS50eXBlID09PSB0eXBlKTtcbiAgfVxuXG4gIGNvcHkoaWQ6IHN0cmluZyk6IE1hcExldmVsIHtcbiAgICBjb25zdCB3b3JsZENvcHk6IE1hcFdvcmxkID0gbmV3IE1hcFdvcmxkKCk7XG4gICAgd29ybGRDb3B5LmdyaWRTaXplID0gdGhpcy53b3JsZC5ncmlkU2l6ZTtcbiAgICB3b3JsZENvcHkubG9hZGVkID0gdGhpcy53b3JsZC5sb2FkZWQ7XG4gICAgd29ybGRDb3B5LnRpbGVzZXRTY2FubGluZSA9IHRoaXMud29ybGQudGlsZXNldFNjYW5saW5lO1xuICAgIHdvcmxkQ29weS50aWxlc2V0U2l6ZSA9IHRoaXMud29ybGQudGlsZXNldFNpemU7XG5cbiAgICBjb25zdCBsZXZlbENvcHk6IE1hcExldmVsID0gbmV3IE1hcExldmVsKHdvcmxkQ29weSwgaWQpO1xuICAgIGxldmVsQ29weS53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgbGV2ZWxDb3B5LmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIGxldmVsQ29weS53b3JsZFggPSB0aGlzLndvcmxkWDtcbiAgICBsZXZlbENvcHkud29ybGRZID0gdGhpcy53b3JsZFk7XG4gICAgbGV2ZWxDb3B5LndvcmxkRGVwdGggPSB0aGlzLndvcmxkRGVwdGg7XG4gICAgbGV2ZWxDb3B5LmZpZWxkcyA9IHsuLi50aGlzLmZpZWxkc307XG5cbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICBjb25zdCBjb3B5OiBNYXBMYXllciA9IGxheWVyLmNvcHkobGV2ZWxDb3B5KTtcbiAgICAgIGxldmVsQ29weS5sYXllcnMucHVzaChjb3B5KTtcbiAgICAgIGxldmVsQ29weS5sYXllckJ5TmFtZVtjb3B5Lm5hbWVdID0gY29weTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlbnRpdHkgb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgY29uc3QgY29weTogTWFwRW50aXR5ID0gZW50aXR5LmNvcHkobGV2ZWxDb3B5KTtcbiAgICAgIGxldmVsQ29weS5lbnRpdGllcy5wdXNoKGNvcHkpO1xuICAgIH1cbiAgICByZXR1cm4gbGV2ZWxDb3B5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gXCIuLi9SZXNvdXJjZVwiO1xuaW1wb3J0IHsgTWFwTGV2ZWwgfSBmcm9tIFwiLi9NYXBMZXZlbFwiO1xuXG5leHBvcnQgY2xhc3MgTWFwV29ybGQge1xuICBsZXZlbHM6IFJlY29yZDxzdHJpbmcsIE1hcExldmVsPiA9IHt9O1xuICBncmlkU2l6ZTogbnVtYmVyID0gMDtcbiAgdGlsZXNldFNjYW5saW5lOiBudW1iZXIgPSAwO1xuICB0aWxlc2V0U2l6ZTogbnVtYmVyID0gMDtcbiAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbn0iLCIvLyBPcHRpb25zXG5jb25zdCBVU0VfM1hfT1JJR0lOQUxfSU1QTEVNRU5UQVRJT04gPSBmYWxzZTtcblxuY29uc3RcbiAgUkVETUFTSyAgID0gMHgwMDAwMDBGRiwgLy8gJk1BU0tcdD4+MFxuICBHUkVFTk1BU0sgPSAweDAwMDBGRjAwLCAvLyAmTUFTS1x0Pj44XG4gIEJMVUVNQVNLICA9IDB4MDBGRjAwMDAsIC8vICZNQVNLXHQ+PjE2XG4gIEFMUEhBTUFTSyA9IDB4RkYwMDAwMDAsIC8vICZNQVNLXHQ+PjI0XG4gIFRIUkVTSEhPTERfWSA9IDQ4LFxuICBUSFJFU0hIT0xEX1UgPSA3LFxuICBUSFJFU0hIT0xEX1YgPSA2O1xuXG4vLyBDb252ZXJ0IGFuIEFSR0IgYnl0ZSB0byBZVVZcbmZ1bmN0aW9uIGdldFl1dihwKSB7XG4gIGNvbnN0XG4gICAgciA9IChwICYgUkVETUFTSyksXG4gICAgZyA9IChwICYgR1JFRU5NQVNLKSA+PiA4LFxuICAgIGIgPSAocCAmIEJMVUVNQVNLKSA+PiAxNixcbiAgICB5ID0gciAqIC4yOTkwMDAgKyBnICogLjU4NzAwMCArIGIgKiAuMTE0MDAwLFxuICAgIHUgPSByICogIC0gLjE2ODczNiArIGcgKiAgLSAuMzMxMjY0ICsgYiAqIC41MDAwMDAsXG4gICAgdiA9IHIgKiAuNTAwMDAwICsgZyAqICAtIC40MTg2ODggKyBiICogIC0gLjA4MTMxMjtcbiAgcmV0dXJuIFt5LCB1LCB2XTtcbn1cblxuZnVuY3Rpb24geXV2RGlmZmVyZW5jZShBLCBCLCBzY2FsZUFscGhhKSB7XG4gIGNvbnN0XG4gICAgYWxwaGFBID0gKChBICYgQUxQSEFNQVNLKSA+PiAyNCkgJiAweGZmLFxuICAgIGFscGhhQiA9ICgoQiAmIEFMUEhBTUFTSykgPj4gMjQpICYgMHhmZjtcblxuICBpZiAoYWxwaGFBID09PSAwICYmIGFscGhhQiA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgaWYgKCFzY2FsZUFscGhhICYmIChhbHBoYUEgPCAyNTUgfHwgYWxwaGFCIDwgMjU1KSkge1xuICAgIC8vIFZlcnkgbGFyZ2UgdmFsdWUgbm90IGF0dGFpbmFibGUgYnkgdGhlIHRocmVzaG9sZHNcbiAgICByZXR1cm4gMTAwMDAwMDtcbiAgfVxuIFxuICBpZiAoYWxwaGFBID09PSAwIHx8IGFscGhhQiA9PT0gMCkge1xuICAgIC8vIFZlcnkgbGFyZ2UgdmFsdWUgbm90IGF0dGFpbmFibGUgYnkgdGhlIHRocmVzaG9sZHNcbiAgICByZXR1cm4gMTAwMDAwMDtcbiAgfVxuXG4gIGNvbnN0XG4gICAgeXV2QSA9IGdldFl1dihBKSxcbiAgICB5dXZCID0gZ2V0WXV2KEIpO1xuXG4gIC8qQWRkIEhReCBmaWx0ZXJzIHRocmVzaG9sZCAmIHJldHVybiovXG4gIHJldHVybiBNYXRoLmFicyh5dXZBWzBdIC0geXV2QlswXSkgKiBUSFJFU0hIT0xEX1lcbiAgICAgICArIE1hdGguYWJzKHl1dkFbMV0gLSB5dXZCWzFdKSAqIFRIUkVTSEhPTERfVVxuICAgICAgICsgTWF0aC5hYnMoeXV2QVsyXSAtIHl1dkJbMl0pICogVEhSRVNISE9MRF9WO1xufVxuXG5mdW5jdGlvbiBpc0VxdWFsKEEsIEIsIHNjYWxlQWxwaGEpIHtcbiAgY29uc3RcbiAgICBhbHBoYUEgPSAoKEEgJiBBTFBIQU1BU0spID4+IDI0KSAmIDB4ZmYsXG4gICAgYWxwaGFCID0gKChCICYgQUxQSEFNQVNLKSA+PiAyNCkgJiAweGZmO1xuXG4gIGlmIChhbHBoYUEgPT09IDAgJiYgYWxwaGFCID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIXNjYWxlQWxwaGEgJiYgKGFscGhhQSA8IDI1NSB8fCBhbHBoYUIgPCAyNTUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGFscGhhQSA9PT0gMCB8fCBhbHBoYUIgPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdFxuICAgIHl1dkEgPSBnZXRZdXYoQSksXG4gICAgeXV2QiA9IGdldFl1dihCKTtcblxuICBpZiAoTWF0aC5hYnMoeXV2QVswXSAtIHl1dkJbMF0pID4gVEhSRVNISE9MRF9ZKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChNYXRoLmFicyh5dXZBWzFdIC0geXV2QlsxXSkgPiBUSFJFU0hIT0xEX1UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKE1hdGguYWJzKHl1dkFbMl0gLSB5dXZCWzJdKSA+IFRIUkVTSEhPTERfVikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBwaXhlbEludGVycG9sYXRlKEEsIEIsIHExLCBxMikge1xuICBjb25zdFxuICAgIGFscGhhQSA9ICgoQSAmIEFMUEhBTUFTSykgPj4gMjQpICYgMHhmZixcbiAgICBhbHBoYUIgPSAoKEIgJiBBTFBIQU1BU0spID4+IDI0KSAmIDB4ZmY7XG5cbiAgLypFeHRyYWN0IGVhY2ggdmFsdWUgZnJvbSAzMmJpdCBVaW50ICYgYmxlbmQgY29sb3JzIHRvZ2V0aGVyKi9cbiAgbGV0IHIsIGcsIGIsIGE7XG5cbiAgaWYgKGFscGhhQSA9PT0gMCkge1xuICAgIHIgPSBCICYgUkVETUFTSztcbiAgICBnID0gKEIgJiBHUkVFTk1BU0spID4+IDg7XG4gICAgYiA9IChCICYgQkxVRU1BU0spID4+IDE2O1xuICB9IGVsc2UgaWYgKGFscGhhQiA9PT0gMCkge1xuICAgIHIgPSBBICYgUkVETUFTSztcbiAgICBnID0gKEEgJiBHUkVFTk1BU0spID4+IDg7XG4gICAgYiA9IChBICYgQkxVRU1BU0spID4+IDE2O1xuICB9IGVsc2Uge1xuICAgIHIgPSAocTIgKiAoQiAmIFJFRE1BU0spICsgcTEgKiAoQSAmIFJFRE1BU0spKSAvIChxMSArIHEyKTtcbiAgICBnID0gKHEyICogKChCICYgR1JFRU5NQVNLKSA+PiA4KSArIHExICogKChBICYgR1JFRU5NQVNLKSA+PiA4KSkgLyAocTEgKyBxMik7XG4gICAgYiA9IChxMiAqICgoQiAmIEJMVUVNQVNLKSA+PiAxNikgKyBxMSAqICgoQSAmIEJMVUVNQVNLKSA+PiAxNikpIC8gKHExICsgcTIpO1xuICB9XG4gIGEgPSAocTIgKiBhbHBoYUIgKyBxMSAqIGFscGhhQSkgLyAocTEgKyBxMik7XG4gIC8qVGhlIGJpdCBoYWNrICd+ficgaXMgdXNlZCB0byBmbG9vciB0aGUgdmFsdWVzIGxpa2UgTWF0aC5mbG9vciwgYnV0IGZhc3RlciovXG4gIHJldHVybiAoKH5+cikgfCAoKH5+ZykgPDwgOCkgfCAoKH5+YikgPDwgMTYpIHwgKCh+fmEpIDw8IDI0KSk7XG59XG5cbmZ1bmN0aW9uIGdldFJlbGF0ZWRQb2ludHMob3JpUGl4ZWxWaWV3LCBvcmlYLCBvcmlZLCBvcmlXLCBvcmlIKSB7XG4gIGxldCB4bTEgPSBvcmlYIC0gMTtcbiAgaWYgKHhtMSA8IDApIHtcbiAgICB4bTEgPSAwO1xuICB9XG4gIGxldCB4bTIgPSBvcmlYIC0gMjtcbiAgaWYgKHhtMiA8IDApIHtcbiAgICB4bTIgPSAwO1xuICB9XG4gIGxldCB4cDEgPSBvcmlYICsgMTtcbiAgaWYgKHhwMSA+PSBvcmlXKSB7XG4gICAgeHAxID0gb3JpVyAtIDE7XG4gIH1cbiAgbGV0IHhwMiA9IG9yaVggKyAyO1xuICBpZiAoeHAyID49IG9yaVcpIHtcbiAgICB4cDIgPSBvcmlXIC0gMTtcbiAgfVxuICBsZXQgeW0xID0gb3JpWSAtIDE7XG4gIGlmICh5bTEgPCAwKSB7XG4gICAgeW0xID0gMDtcbiAgfVxuICBsZXQgeW0yID0gb3JpWSAtIDI7XG4gIGlmICh5bTIgPCAwKSB7XG4gICAgeW0yID0gMDtcbiAgfVxuICBsZXQgeXAxID0gb3JpWSArIDE7XG4gIGlmICh5cDEgPj0gb3JpSCkge1xuICAgIHlwMSA9IG9yaUggLSAxO1xuICB9XG4gIGxldCB5cDIgPSBvcmlZICsgMjtcbiAgaWYgKHlwMiA+PSBvcmlIKSB7XG4gICAgeXAyID0gb3JpSCAtIDE7XG4gIH1cblxuICByZXR1cm4gW1xuICAgIG9yaVBpeGVsVmlld1t4bTEgKyB5bTIgKiBvcmlXXSwgIC8qIGExICovXG4gICAgb3JpUGl4ZWxWaWV3W29yaVggKyB5bTIgKiBvcmlXXSwgLyogYjEgKi9cbiAgICBvcmlQaXhlbFZpZXdbeHAxICsgeW0yICogb3JpV10sICAvKiBjMSAqL1xuXG4gICAgb3JpUGl4ZWxWaWV3W3htMiArIHltMSAqIG9yaVddLCAgLyogYTAgKi9cbiAgICBvcmlQaXhlbFZpZXdbeG0xICsgeW0xICogb3JpV10sICAvKiBwYSAqL1xuICAgIG9yaVBpeGVsVmlld1tvcmlYICsgeW0xICogb3JpV10sIC8qIHBiICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMSArIHltMSAqIG9yaVddLCAgLyogcGMgKi9cbiAgICBvcmlQaXhlbFZpZXdbeHAyICsgeW0xICogb3JpV10sICAvKiBjNCAqL1xuXG4gICAgb3JpUGl4ZWxWaWV3W3htMiArIG9yaVkgKiBvcmlXXSwgLyogZDAgKi9cbiAgICBvcmlQaXhlbFZpZXdbeG0xICsgb3JpWSAqIG9yaVddLCAvKiBwZCAqL1xuICAgIG9yaVBpeGVsVmlld1tvcmlYICsgb3JpWSAqIG9yaVddLC8qIHBlICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMSArIG9yaVkgKiBvcmlXXSwgLyogcGYgKi9cbiAgICBvcmlQaXhlbFZpZXdbeHAyICsgb3JpWSAqIG9yaVddLCAvKiBmNCAqL1xuXG4gICAgb3JpUGl4ZWxWaWV3W3htMiArIHlwMSAqIG9yaVddLCAgLyogZzAgKi9cbiAgICBvcmlQaXhlbFZpZXdbeG0xICsgeXAxICogb3JpV10sICAvKiBwZyAqL1xuICAgIG9yaVBpeGVsVmlld1tvcmlYICsgeXAxICogb3JpV10sIC8qIHBoICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMSArIHlwMSAqIG9yaVddLCAgLyogcGkgKi9cbiAgICBvcmlQaXhlbFZpZXdbeHAyICsgeXAxICogb3JpV10sICAvKiBpNCAqL1xuXG4gICAgb3JpUGl4ZWxWaWV3W3htMSArIHlwMiAqIG9yaVddLCAgLyogZzUgKi9cbiAgICBvcmlQaXhlbFZpZXdbb3JpWCArIHlwMiAqIG9yaVddLCAvKiBoNSAqL1xuICAgIG9yaVBpeGVsVmlld1t4cDEgKyB5cDIgKiBvcmlXXSAgIC8qIGk1ICovXG4gIF07XG59XG5cbi8vIFRoaXMgaXMgdGhlIFhCUjJ4IGJ5IEh5bGxpYW4gKHNlZSBodHRwOi8vYm9hcmQuYnl1dS5vcmcvdmlld3RvcGljLnBocD9mPTEwJnQ9MjI0OClcbmZ1bmN0aW9uIGNvbXB1dGVYYnIyeChvcmlQaXhlbFZpZXcsIG9yaVgsIG9yaVksIG9yaVcsIG9yaUgsIGRzdFBpeGVsVmlldywgZHN0WCwgZHN0WSwgZHN0VywgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpIHtcbiAgY29uc3QgcmVsYXRlZFBvaW50cyA9IGdldFJlbGF0ZWRQb2ludHMob3JpUGl4ZWxWaWV3LCBvcmlYLCBvcmlZLCBvcmlXLCBvcmlIKTtcbiAgY29uc3RcbiAgICBbYTEsXG4gICAgIGIxLFxuICAgICBjMSxcblx0IGEwLFxuICAgICBwYSxcbiAgICAgcGIsXG4gICAgIHBjLFxuICAgICBjNCxcbiAgICAgZDAsXG4gICAgIHBkLFxuICAgICBwZSxcbiAgICAgcGYsXG4gICAgIGY0LFxuICAgICBnMCxcbiAgICAgcGcsXG4gICAgIHBoLFxuICAgICBwaSxcbiAgICAgaTQsXG4gICAgIGc1LFxuICAgICBoNSxcbiAgICAgaTVdID0gcmVsYXRlZFBvaW50cztcbiAgbGV0IGUwLCBlMSwgZTIsIGUzO1xuICBlMCA9IGUxID0gZTIgPSBlMyA9IHBlO1xuXG4gIFtlMSwgZTIsIGUzXSA9IGtlcm5lbDJYdjUocGUsIHBpLCBwaCwgcGYsIHBnLCBwYywgcGQsIHBiLCBmNCwgaTQsIGg1LCBpNSwgZTEsIGUyLCBlMywgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuICBbZTAsIGUzLCBlMV0gPSBrZXJuZWwyWHY1KHBlLCBwYywgcGYsIHBiLCBwaSwgcGEsIHBoLCBwZCwgYjEsIGMxLCBmNCwgYzQsIGUwLCBlMywgZTEsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2UyLCBlMSwgZTBdID0ga2VybmVsMlh2NShwZSwgcGEsIHBiLCBwZCwgcGMsIHBnLCBwZiwgcGgsIGQwLCBhMCwgYjEsIGExLCBlMiwgZTEsIGUwLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSk7XG4gIFtlMywgZTAsIGUyXSA9IGtlcm5lbDJYdjUocGUsIHBnLCBwZCwgcGgsIHBhLCBwaSwgcGIsIHBmLCBoNSwgZzUsIGQwLCBnMCwgZTMsIGUwLCBlMiwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuXG4gIGRzdFBpeGVsVmlld1tkc3RYICsgZHN0WSAqIGRzdFddID0gZTA7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMSArIGRzdFkgKiBkc3RXXSA9IGUxO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIChkc3RZICsgMSkgKiBkc3RXXSA9IGUyO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyAoZHN0WSArIDEpICogZHN0V10gPSBlMzsgIFxufVxuXG5mdW5jdGlvbiBjb21wdXRlWGJyM3gob3JpUGl4ZWxWaWV3LCBvcmlYLCBvcmlZLCBvcmlXLCBvcmlILCBkc3RQaXhlbFZpZXcsIGRzdFgsIGRzdFksIGRzdFcsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKSB7XG4gIGNvbnN0IHJlbGF0ZWRQb2ludHMgPSBnZXRSZWxhdGVkUG9pbnRzKG9yaVBpeGVsVmlldywgb3JpWCwgb3JpWSwgb3JpVywgb3JpSCk7XG4gIGNvbnN0XG4gICAgW2ExLFxuICAgICBiMSxcbiAgICAgYzEsXG5cdCBhMCxcbiAgICAgcGEsXG4gICAgIHBiLFxuICAgICBwYyxcbiAgICAgYzQsXG4gICAgIGQwLFxuICAgICBwZCxcbiAgICAgcGUsXG4gICAgIHBmLFxuICAgICBmNCxcbiAgICAgZzAsXG4gICAgIHBnLFxuICAgICBwaCxcbiAgICAgcGksXG4gICAgIGk0LFxuICAgICBnNSxcbiAgICAgaDUsXG4gICAgIGk1XSA9IHJlbGF0ZWRQb2ludHM7XG4gIGxldCBlMCwgZTEsIGUyLCBlMywgZTQsIGU1LCBlNiwgZTcsIGU4O1xuICBlMCA9IGUxID0gZTIgPSBlMyA9IGU0ID0gZTUgPSBlNiA9IGU3ID0gZTggPSBwZTtcblxuICBbZTIsIGU1LCBlNiwgZTcsIGU4XSA9IGtlcm5lbDNYKHBlLCBwaSwgcGgsIHBmLCBwZywgcGMsIHBkLCBwYiwgZjQsIGk0LCBoNSwgaTUsIGUyLCBlNSwgZTYsIGU3LCBlOCwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuICBbZTAsIGUxLCBlOCwgZTUsIGUyXSA9IGtlcm5lbDNYKHBlLCBwYywgcGYsIHBiLCBwaSwgcGEsIHBoLCBwZCwgYjEsIGMxLCBmNCwgYzQsIGUwLCBlMSwgZTgsIGU1LCBlMiwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuICBbZTYsIGUzLCBlMiwgZTEsIGUwXSA9IGtlcm5lbDNYKHBlLCBwYSwgcGIsIHBkLCBwYywgcGcsIHBmLCBwaCwgZDAsIGEwLCBiMSwgYTEsIGU2LCBlMywgZTIsIGUxLCBlMCwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuICBbZTgsIGU3LCBlMCwgZTMsIGU2XSA9IGtlcm5lbDNYKHBlLCBwZywgcGQsIHBoLCBwYSwgcGksIHBiLCBwZiwgaDUsIGc1LCBkMCwgZzAsIGU4LCBlNywgZTAsIGUzLCBlNiwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuXG4gIGRzdFBpeGVsVmlld1tkc3RYICsgZHN0WSAqIGRzdFddID0gZTA7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMSArIGRzdFkgKiBkc3RXXSA9IGUxO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDIgKyBkc3RZICogZHN0V10gPSBlMjtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAoZHN0WSArIDEpICogZHN0V10gPSBlMztcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAxICsgKGRzdFkgKyAxKSAqIGRzdFddID0gZTQ7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMiArIChkc3RZICsgMSkgKiBkc3RXXSA9IGU1O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIChkc3RZICsgMikgKiBkc3RXXSA9IGU2O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyAoZHN0WSArIDIpICogZHN0V10gPSBlNztcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgKGRzdFkgKyAyKSAqIGRzdFddID0gZTg7XG59XG5cblxuZnVuY3Rpb24gY29tcHV0ZVhicjR4KG9yaVBpeGVsVmlldywgb3JpWCwgb3JpWSwgb3JpVywgb3JpSCwgZHN0UGl4ZWxWaWV3LCBkc3RYLCBkc3RZLCBkc3RXLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSkge1xuICBjb25zdCByZWxhdGVkUG9pbnRzID0gZ2V0UmVsYXRlZFBvaW50cyhvcmlQaXhlbFZpZXcsIG9yaVgsIG9yaVksIG9yaVcsIG9yaUgpO1xuICBjb25zdFxuICAgIFthMSxcbiAgICAgYjEsXG4gICAgIGMxLFxuXHQgYTAsXG4gICAgIHBhLFxuICAgICBwYixcbiAgICAgcGMsXG4gICAgIGM0LFxuICAgICBkMCxcbiAgICAgcGQsXG4gICAgIHBlLFxuICAgICBwZixcbiAgICAgZjQsXG4gICAgIGcwLFxuICAgICBwZyxcbiAgICAgcGgsXG4gICAgIHBpLFxuICAgICBpNCxcbiAgICAgZzUsXG4gICAgIGg1LFxuICAgICBpNV0gPSByZWxhdGVkUG9pbnRzO1xuICBsZXQgZTAsIGUxLCBlMiwgZTMsIGU0LCBlNSwgZTYsIGU3LCBlOCwgZTksIGVhLCBlYiwgZWMsIGVkLCBlZSwgZWY7XG4gIGUwID0gZTEgPSBlMiA9IGUzID0gZTQgPSBlNSA9IGU2ID0gZTcgPSBlOCA9IGU5ID0gZWEgPSBlYiA9IGVjID0gZWQgPSBlZSA9IGVmID0gcGU7XG5cbiAgW2VmLCBlZSwgZWIsIGUzLCBlNywgZWEsIGVkLCBlY10gPSBrZXJuZWw0WHYyKHBlLCBwaSwgcGgsIHBmLCBwZywgcGMsIHBkLCBwYiwgZjQsIGk0LCBoNSwgaTUsIGVmLCBlZSwgZWIsIGUzLCBlNywgZWEsIGVkLCBlYywgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuICBbZTMsIGU3LCBlMiwgZTAsIGUxLCBlNiwgZWIsIGVmXSA9IGtlcm5lbDRYdjIocGUsIHBjLCBwZiwgcGIsIHBpLCBwYSwgcGgsIHBkLCBiMSwgYzEsIGY0LCBjNCwgZTMsIGU3LCBlMiwgZTAsIGUxLCBlNiwgZWIsIGVmLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSk7XG4gIFtlMCwgZTEsIGU0LCBlYywgZTgsIGU1LCBlMiwgZTNdID0ga2VybmVsNFh2MihwZSwgcGEsIHBiLCBwZCwgcGMsIHBnLCBwZiwgcGgsIGQwLCBhMCwgYjEsIGExLCBlMCwgZTEsIGU0LCBlYywgZTgsIGU1LCBlMiwgZTMsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2VjLCBlOCwgZWQsIGVmLCBlZSwgZTksIGU0LCBlMF0gPSBrZXJuZWw0WHYyKHBlLCBwZywgcGQsIHBoLCBwYSwgcGksIHBiLCBwZiwgaDUsIGc1LCBkMCwgZzAsIGVjLCBlOCwgZWQsIGVmLCBlZSwgZTksIGU0LCBlMCwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuXG4gIGRzdFBpeGVsVmlld1tkc3RYICsgZHN0WSAqIGRzdFddID0gZTA7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMSArIGRzdFkgKiBkc3RXXSA9IGUxO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDIgKyBkc3RZICogZHN0V10gPSBlMjtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAzICsgZHN0WSAqIGRzdFddID0gZTM7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgKGRzdFkgKyAxKSAqIGRzdFddID0gZTQ7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMSArIChkc3RZICsgMSkgKiBkc3RXXSA9IGU1O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDIgKyAoZHN0WSArIDEpICogZHN0V10gPSBlNjtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAzICsgKGRzdFkgKyAxKSAqIGRzdFddID0gZTc7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgKGRzdFkgKyAyKSAqIGRzdFddID0gZTg7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMSArIChkc3RZICsgMikgKiBkc3RXXSA9IGU5O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDIgKyAoZHN0WSArIDIpICogZHN0V10gPSBlYTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAzICsgKGRzdFkgKyAyKSAqIGRzdFddID0gZWI7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgKGRzdFkgKyAzKSAqIGRzdFddID0gZWM7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMSArIChkc3RZICsgMykgKiBkc3RXXSA9IGVkO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDIgKyAoZHN0WSArIDMpICogZHN0V10gPSBlZTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAzICsgKGRzdFkgKyAzKSAqIGRzdFddID0gZWY7XG59XG5cbmZ1bmN0aW9uIGFscGhhQmxlbmQzMlcoZHN0LCBzcmMsIGJsZW5kQ29sb3JzKSB7XG4gIGlmIChibGVuZENvbG9ycykge1xuICAgIHJldHVybiBwaXhlbEludGVycG9sYXRlKGRzdCwgc3JjLCA3LCAxKTtcbiAgfVxuXG4gIHJldHVybiBkc3Q7XG59XG5cbmZ1bmN0aW9uIGFscGhhQmxlbmQ2NFcoZHN0LCBzcmMsIGJsZW5kQ29sb3JzKSB7XG4gIGlmIChibGVuZENvbG9ycykge1xuICAgIHJldHVybiBwaXhlbEludGVycG9sYXRlKGRzdCwgc3JjLCAzLCAxKTtcbiAgfVxuICByZXR1cm4gZHN0O1xufVxuXG5mdW5jdGlvbiBhbHBoYUJsZW5kMTI4Vyhkc3QsIHNyYywgYmxlbmRDb2xvcnMpIHtcbiAgaWYgKGJsZW5kQ29sb3JzKSB7XG4gICAgcmV0dXJuIHBpeGVsSW50ZXJwb2xhdGUoZHN0LCBzcmMsIDEsIDEpO1xuICB9XG4gIHJldHVybiBkc3Q7XG59XG5cbmZ1bmN0aW9uIGFscGhhQmxlbmQxOTJXKGRzdCwgc3JjLCBibGVuZENvbG9ycykge1xuICBpZiAoYmxlbmRDb2xvcnMpIHtcbiAgICByZXR1cm4gcGl4ZWxJbnRlcnBvbGF0ZShkc3QsIHNyYywgMSwgMyk7XG4gIH1cbiAgcmV0dXJuIHNyYztcbn1cblxuZnVuY3Rpb24gYWxwaGFCbGVuZDIyNFcoZHN0LCBzcmMsIGJsZW5kQ29sb3JzKSB7XG4gIGlmIChibGVuZENvbG9ycykge1xuICAgIHJldHVybiBwaXhlbEludGVycG9sYXRlKGRzdCwgc3JjLCAxLCA3KTtcbiAgfVxuICByZXR1cm4gc3JjO1xufVxuXG5mdW5jdGlvbiBsZWZ0VXAyXzJYKG4zLCBuMiwgcGl4ZWwsIGJsZW5kQ29sb3JzKSB7XG4gIGNvbnN0IGJsZW5kZWROMiA9IGFscGhhQmxlbmQ2NFcobjIsIHBpeGVsLCBibGVuZENvbG9ycyk7XG4gIHJldHVybiBbXG4gICAgYWxwaGFCbGVuZDIyNFcobjMsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgYmxlbmRlZE4yLFxuICAgIGJsZW5kZWROMlxuICBdO1xufVxuXG5mdW5jdGlvbiBsZWZ0Ml8yWChuMywgbjIsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICByZXR1cm4gW1xuICAgIGFscGhhQmxlbmQxOTJXKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQ2NFcobjIsIHBpeGVsLCBibGVuZENvbG9ycylcbiAgXTtcbn1cblxuZnVuY3Rpb24gdXAyXzJYKG4zLCBuMSwgcGl4ZWwsIGJsZW5kQ29sb3JzKSB7XG4gIHJldHVybiBbXG4gICAgYWxwaGFCbGVuZDE5MlcobjMsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgYWxwaGFCbGVuZDY0VyhuMSwgcGl4ZWwsIGJsZW5kQ29sb3JzKVxuICBdO1xufVxuXG5mdW5jdGlvbiBkaWFfMlgobjMsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICByZXR1cm4gYWxwaGFCbGVuZDEyOFcobjMsIHBpeGVsLCBibGVuZENvbG9ycyk7XG59XG5cbmZ1bmN0aW9uIGtlcm5lbDJYdjUocGUsIHBpLCBwaCwgcGYsIHBnLCBwYywgcGQsIHBiLCBmNCwgaTQsIGg1LCBpNSwgbjEsIG4yLCBuMywgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpIHtcbiAgbGV0IGV4ID0gKHBlICE9IHBoICYmIHBlICE9IHBmKTtcbiAgaWYgKCFleCkge1xuICAgIHJldHVybiBbbjEsIG4yLCBuM107XG4gIH1cbiAgbGV0XG4gICAgZSA9ICh5dXZEaWZmZXJlbmNlKHBlLCBwYywgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBlLCBwZywgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBpLCBoNSwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBpLCBmNCwgc2NhbGVBbHBoYSkpICsgKHl1dkRpZmZlcmVuY2UocGgsIHBmKSA8PCAyKSxcbiAgICBpID0gKHl1dkRpZmZlcmVuY2UocGgsIHBkLCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGgsIGk1LCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGYsIGk0LCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGYsIHBiLCBzY2FsZUFscGhhKSkgKyAoeXV2RGlmZmVyZW5jZShwZSwgcGksIHNjYWxlQWxwaGEpIDw8IDIpLFxuICAgIHB4ID0gKHl1dkRpZmZlcmVuY2UocGUsIHBmLCBzY2FsZUFscGhhKSA8PSB5dXZEaWZmZXJlbmNlKHBlLCBwaCwgc2NhbGVBbHBoYSkpID8gcGYgOiBwaDtcblxuICBpZiAoKGUgPCBpKSAmJiAoIWlzRXF1YWwocGYsIHBiLCBzY2FsZUFscGhhKSAmJiAhaXNFcXVhbChwaCwgcGQsIHNjYWxlQWxwaGEpIHx8IGlzRXF1YWwocGUsIHBpLCBzY2FsZUFscGhhKSAmJiAoIWlzRXF1YWwocGYsIGk0LCBzY2FsZUFscGhhKSAmJiAhaXNFcXVhbChwaCwgaTUsIHNjYWxlQWxwaGEpKSB8fCBpc0VxdWFsKHBlLCBwZywgc2NhbGVBbHBoYSkgfHwgaXNFcXVhbChwZSwgcGMsIHNjYWxlQWxwaGEpKSkge1xuICAgIGxldFxuICAgICAga2UgPSB5dXZEaWZmZXJlbmNlKHBmLCBwZywgc2NhbGVBbHBoYSksXG4gICAgICBraSA9IHl1dkRpZmZlcmVuY2UocGgsIHBjLCBzY2FsZUFscGhhKSxcbiAgICAgIGV4MiA9IChwZSAhPSBwYyAmJiBwYiAhPSBwYyksXG4gICAgICBleDMgPSAocGUgIT0gcGcgJiYgcGQgIT0gcGcpO1xuICAgIGlmICgoKGtlIDw8IDEpIDw9IGtpKSAmJiBleDMgfHwgKGtlID49IChraSA8PCAxKSkgJiYgZXgyKSB7XG4gICAgICBpZiAoKChrZSA8PCAxKSA8PSBraSkgJiYgZXgzKSB7XG4gICAgICAgIGxldCBsZWZ0T3V0ID0gbGVmdDJfMlgobjMsIG4yLCBweCwgYmxlbmRDb2xvcnMpO1xuICAgICAgICBuMyA9IGxlZnRPdXRbMF07XG4gICAgICAgIG4yID0gbGVmdE91dFsxXTtcbiAgICAgIH1cbiAgICAgIGlmICgoa2UgPj0gKGtpIDw8IDEpKSAmJiBleDIpIHtcbiAgICAgICAgbGV0IHVwT3V0ID0gdXAyXzJYKG4zLCBuMSwgcHgsIGJsZW5kQ29sb3JzKTtcbiAgICAgICAgbjMgPSB1cE91dFswXTtcbiAgICAgICAgbjEgPSB1cE91dFsxXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbjMgPSBkaWFfMlgobjMsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgfVxuXG4gIH0gZWxzZSBpZiAoZSA8PSBpKSB7XG4gICAgbjMgPSBhbHBoYUJsZW5kNjRXKG4zLCBweCwgYmxlbmRDb2xvcnMpO1xuICB9XG4gIHJldHVybiBbbjEsIG4yLCBuM107XG59XG5cbmZ1bmN0aW9uIGxlZnRVcDJfM1gobjcsIG41LCBuNiwgbjIsIG44LCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgY29uc3RcbiAgICBibGVuZGVkTjcgPSBhbHBoYUJsZW5kMTkyVyhuNywgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcbiAgICBibGVuZGVkTjYgPSBhbHBoYUJsZW5kNjRXKG42LCBwaXhlbCwgYmxlbmRDb2xvcnMpO1xuICByZXR1cm4gW1xuICAgIGJsZW5kZWRONyxcbiAgICBibGVuZGVkTjcsXG4gICAgYmxlbmRlZE42LFxuICAgIGJsZW5kZWRONixcblx0cGl4ZWxcbiAgXTtcbn1cblxuZnVuY3Rpb24gbGVmdDJfM1gobjcsIG41LCBuNiwgbjgsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICByZXR1cm4gW1xuICAgIGFscGhhQmxlbmQxOTJXKG43LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQ2NFcobjUsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgYWxwaGFCbGVuZDY0VyhuNiwgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcbiAgICBwaXhlbFxuICBdO1xufVxuXG5mdW5jdGlvbiB1cDJfM1gobjUsIG43LCBuMiwgbjgsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICByZXR1cm4gW1xuICAgIGFscGhhQmxlbmQxOTJXKG41LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQ2NFcobjcsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgYWxwaGFCbGVuZDY0VyhuMiwgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcbiAgICBwaXhlbFxuICBdO1xufVxuXG5mdW5jdGlvbiBkaWFfM1gobjgsIG41LCBuNywgcGl4ZWwsIGJsZW5kQ29sb3JzKSB7XG4gIHJldHVybiBbXG4gICAgYWxwaGFCbGVuZDIyNFcobjgsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgYWxwaGFCbGVuZDMyVyhuNSwgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcbiAgICBhbHBoYUJsZW5kMzJXKG43LCBwaXhlbCwgYmxlbmRDb2xvcnMpXG4gIF07XG59XG5cbmZ1bmN0aW9uIGtlcm5lbDNYKHBlLCBwaSwgcGgsIHBmLCBwZywgcGMsIHBkLCBwYiwgZjQsIGk0LCBoNSwgaTUsIG4yLCBuNSwgbjYsIG43LCBuOCwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpIHtcbiAgY29uc3QgZXggPSAocGUgIT0gcGggJiYgcGUgIT0gcGYpO1xuICBpZiAoIWV4KSB7XG4gICAgcmV0dXJuIFtuMiwgbjUsIG42LCBuNywgbjhdO1xuICB9XG5cbiAgY29uc3RcbiAgICBlID0gKHl1dkRpZmZlcmVuY2UocGUsIHBjLCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGUsIHBnLCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGksIGg1LCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGksIGY0LCBzY2FsZUFscGhhKSkgKyAoeXV2RGlmZmVyZW5jZShwaCwgcGYsIHNjYWxlQWxwaGEpIDw8IDIpLFxuICAgIGkgPSAoeXV2RGlmZmVyZW5jZShwaCwgcGQsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwaCwgaTUsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwZiwgaTQsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwZiwgcGIsIHNjYWxlQWxwaGEpKSArICh5dXZEaWZmZXJlbmNlKHBlLCBwaSwgc2NhbGVBbHBoYSkgPDwgMik7XG5cbiAgbGV0IHN0YXRlO1xuICBpZiAoVVNFXzNYX09SSUdJTkFMX0lNUExFTUVOVEFUSU9OKSB7XG4gICAgc3RhdGUgPSAoKGUgPCBpKSAmJiAoIWlzRXF1YWwocGYsIHBiLCBzY2FsZUFscGhhKSAmJiAhaXNFcXVhbChwaCwgcGQsIHNjYWxlQWxwaGEpIHx8IGlzRXF1YWwocGUsIHBpLCBzY2FsZUFscGhhKSAmJiAoIWlzRXF1YWwocGYsIGk0LCBzY2FsZUFscGhhKSAmJiAhaXNFcXVhbChwaCwgaTUsIHNjYWxlQWxwaGEpKSB8fCBpc0VxdWFsKHBlLCBwZywgc2NhbGVBbHBoYSkgfHwgaXNFcXVhbChwZSwgcGMsIHNjYWxlQWxwaGEpKSk7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUgPSAoKGUgPCBpKSAmJiAoIWlzRXF1YWwocGYsIHBiLCBzY2FsZUFscGhhKSAmJiAhaXNFcXVhbChwZiwgcGMsIHNjYWxlQWxwaGEpIHx8ICFpc0VxdWFsKHBoLCBwZCwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGgsIHBnLCBzY2FsZUFscGhhKSB8fCBpc0VxdWFsKHBlLCBwaSwgc2NhbGVBbHBoYSkgJiYgKCFpc0VxdWFsKHBmLCBmNCwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGYsIGk0LCBzY2FsZUFscGhhKSB8fCAhaXNFcXVhbChwaCwgaDUsIHNjYWxlQWxwaGEpICYmICFpc0VxdWFsKHBoLCBpNSwgc2NhbGVBbHBoYSkpIHx8IGlzRXF1YWwocGUsIHBnLCBzY2FsZUFscGhhKSB8fCBpc0VxdWFsKHBlLCBwYywgc2NhbGVBbHBoYSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZSkge1xuICAgIGNvbnN0XG4gICAgICBrZSA9IHl1dkRpZmZlcmVuY2UocGYsIHBnLCBzY2FsZUFscGhhKSxcbiAgICAgIGtpID0geXV2RGlmZmVyZW5jZShwaCwgcGMsIHNjYWxlQWxwaGEpLFxuICAgICAgZXgyID0gKHBlICE9IHBjICYmIHBiICE9IHBjKSxcbiAgICAgIGV4MyA9IChwZSAhPSBwZyAmJiBwZCAhPSBwZyksXG4gICAgICBweCA9ICh5dXZEaWZmZXJlbmNlKHBlLCBwZiwgc2NhbGVBbHBoYSkgPD0geXV2RGlmZmVyZW5jZShwZSwgcGgsIHNjYWxlQWxwaGEpKSA/IHBmIDogcGg7XG4gICAgaWYgKCgoa2UgPDwgMSkgPD0ga2kpICYmIGV4MyAmJiAoa2UgPj0gKGtpIDw8IDEpKSAmJiBleDIpIHtcbiAgICAgIFtuNywgbjUsIG42LCBuMiwgbjhdID0gbGVmdFVwMl8zWChuNywgbjUsIG42LCBuMiwgbjgsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgfSBlbHNlIGlmICgoKGtlIDw8IDEpIDw9IGtpKSAmJiBleDMpIHtcbiAgICAgIFtuNywgbjUsIG42LCBuOF0gPSBsZWZ0Ml8zWChuNywgbjUsIG42LCBuOCwgcHgsIGJsZW5kQ29sb3JzKTtcbiAgICB9IGVsc2UgaWYgKChrZSA+PSAoa2kgPDwgMSkpICYmIGV4Mikge1xuICAgICAgW241LCBuNywgbjIsIG44XSA9IHVwMl8zWChuNSwgbjcsIG4yLCBuOCwgcHgsIGJsZW5kQ29sb3JzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgW244LCBuNSwgbjddID0gZGlhXzNYKG44LCBuNSwgbjcsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGUgPD0gaSkge1xuICAgIG44ID0gYWxwaGFCbGVuZDEyOFcobjgsICgoeXV2RGlmZmVyZW5jZShwZSwgcGYsIHNjYWxlQWxwaGEpIDw9IHl1dkRpZmZlcmVuY2UocGUsIHBoLCBzY2FsZUFscGhhKSkgPyBwZiA6IHBoKSwgYmxlbmRDb2xvcnMpO1xuICB9XG4gIHJldHVybiBbbjIsIG41LCBuNiwgbjcsIG44XTtcbn1cblxuLy8gNHhCUlxuZnVuY3Rpb24gbGVmdFVwMihuMTUsIG4xNCwgbjExLCBuMTMsIG4xMiwgbjEwLCBuNywgbjMsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICBjb25zdFxuICAgIGJsZW5kZWROMTMgPSBhbHBoYUJsZW5kMTkyVyhuMTMsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgYmxlbmRlZE4xMiA9IGFscGhhQmxlbmQ2NFcobjEyLCBwaXhlbCwgYmxlbmRDb2xvcnMpO1xuXG4gIHJldHVybiBbcGl4ZWwsIHBpeGVsLCBwaXhlbCwgYmxlbmRlZE4xMiwgYmxlbmRlZE4xMiwgYmxlbmRlZE4xMiwgYmxlbmRlZE4xMywgbjNdO1xufVxuXG5mdW5jdGlvbiBsZWZ0MihuMTUsIG4xNCwgbjExLCBuMTMsIG4xMiwgbjEwLCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgcmV0dXJuIFtcbiAgICBwaXhlbCxcblx0cGl4ZWwsXG5cdGFscGhhQmxlbmQxOTJXKG4xMSwgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcblx0YWxwaGFCbGVuZDE5MlcobjEzLCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuXHRhbHBoYUJsZW5kNjRXKG4xMiwgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcblx0YWxwaGFCbGVuZDY0VyhuMTAsIHBpeGVsLCBibGVuZENvbG9ycylcbiAgXTtcbn1cblxuZnVuY3Rpb24gdXAyKG4xNSwgbjE0LCBuMTEsIG4zLCBuNywgbjEwLCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgcmV0dXJuIFtcblx0cGl4ZWwsXG5cdGFscGhhQmxlbmQxOTJXKG4xNCwgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcblx0cGl4ZWwsXG5cdGFscGhhQmxlbmQ2NFcobjMsIHBpeGVsLCBibGVuZENvbG9ycyksXG5cdGFscGhhQmxlbmQxOTJXKG43LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuXHRhbHBoYUJsZW5kNjRXKG4xMCwgcGl4ZWwsIGJsZW5kQ29sb3JzKVxuICBdO1xufVxuXG5mdW5jdGlvbiBkaWEobjE1LCBuMTQsIG4xMSwgcGl4ZWwsIGJsZW5kQ29sb3JzKSB7XG4gIHJldHVybiBbXG5cdHBpeGVsLFxuXHRhbHBoYUJsZW5kMTI4VyhuMTQsIHBpeGVsLCBibGVuZENvbG9ycyksXG5cdGFscGhhQmxlbmQxMjhXKG4xMSwgcGl4ZWwsIGJsZW5kQ29sb3JzKVxuICBdO1xufVxuXG5mdW5jdGlvbiBrZXJuZWw0WHYyKHBlLCBwaSwgcGgsIHBmLCBwZywgcGMsIHBkLCBwYiwgZjQsIGk0LCBoNSwgaTUsIG4xNSwgbjE0LCBuMTEsIG4zLCBuNywgbjEwLCBuMTMsIG4xMiwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpIHtcbiAgdmFyIGV4ID0gKHBlICE9IHBoICYmIHBlICE9IHBmKTtcbiAgaWYgKCFleCkge1xuICAgIHJldHVybiBbbjE1LCBuMTQsIG4xMSwgbjMsIG43LCBuMTAsIG4xMywgbjEyXTtcbiAgfVxuICBjb25zdFxuICAgIGUgPSAoeXV2RGlmZmVyZW5jZShwZSwgcGMsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwZSwgcGcsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwaSwgaDUsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwaSwgZjQsIHNjYWxlQWxwaGEpKSArICh5dXZEaWZmZXJlbmNlKHBoLCBwZiwgc2NhbGVBbHBoYSkgPDwgMiksXG4gICAgaSA9ICh5dXZEaWZmZXJlbmNlKHBoLCBwZCwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBoLCBpNSwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBmLCBpNCwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBmLCBwYiwgc2NhbGVBbHBoYSkpICsgKHl1dkRpZmZlcmVuY2UocGUsIHBpLCBzY2FsZUFscGhhKSA8PCAyKSxcbiAgICBweCA9ICh5dXZEaWZmZXJlbmNlKHBlLCBwZiwgc2NhbGVBbHBoYSkgPD0geXV2RGlmZmVyZW5jZShwZSwgcGgsIHNjYWxlQWxwaGEpKSA/IHBmIDogcGg7XG4gIGlmICgoZSA8IGkpICYmICghaXNFcXVhbChwZiwgcGIsIHNjYWxlQWxwaGEpICYmICFpc0VxdWFsKHBoLCBwZCwgc2NhbGVBbHBoYSkgfHwgaXNFcXVhbChwZSwgcGksIHNjYWxlQWxwaGEpICYmICghaXNFcXVhbChwZiwgaTQsIHNjYWxlQWxwaGEpICYmICFpc0VxdWFsKHBoLCBpNSwgc2NhbGVBbHBoYSkpIHx8IGlzRXF1YWwocGUsIHBnLCBzY2FsZUFscGhhKSB8fCBpc0VxdWFsKHBlLCBwYywgc2NhbGVBbHBoYSkpKSB7XG4gICAgY29uc3RcbiAgICAgIGtlID0geXV2RGlmZmVyZW5jZShwZiwgcGcsIHNjYWxlQWxwaGEpLFxuICAgICAga2kgPSB5dXZEaWZmZXJlbmNlKHBoLCBwYywgc2NhbGVBbHBoYSksXG4gICAgICBleDIgPSAocGUgIT0gcGMgJiYgcGIgIT0gcGMpLFxuICAgICAgZXgzID0gKHBlICE9IHBnICYmIHBkICE9IHBnKTtcbiAgICBpZiAoKChrZSA8PCAxKSA8PSBraSkgJiYgZXgzIHx8IChrZSA+PSAoa2kgPDwgMSkpICYmIGV4Mikge1xuICAgICAgaWYgKCgoa2UgPDwgMSkgPD0ga2kpICYmIGV4Mykge1xuICAgICAgICBbbjE1LCBuMTQsIG4xMSwgbjEzLCBuMTIsIG4xMF0gPSBsZWZ0MihuMTUsIG4xNCwgbjExLCBuMTMsIG4xMiwgbjEwLCBweCwgYmxlbmRDb2xvcnMpO1xuICAgICAgfVxuICAgICAgaWYgKChrZSA+PSAoa2kgPDwgMSkpICYmIGV4Mikge1xuICAgICAgICBbbjE1LCBuMTQsIG4xMSwgbjMsIG43LCBuMTBdID0gdXAyKG4xNSwgbjE0LCBuMTEsIG4zLCBuNywgbjEwLCBweCwgYmxlbmRDb2xvcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBbbjE1LCBuMTQsIG4xMV0gPSBkaWEobjE1LCBuMTQsIG4xMSwgcHgsIGJsZW5kQ29sb3JzKTtcbiAgICB9XG5cbiAgfSBlbHNlIGlmIChlIDw9IGkpIHtcbiAgICBuMTUgPSBhbHBoYUJsZW5kMTI4VyhuMTUsIHB4LCBibGVuZENvbG9ycyk7XG4gIH1cblxuICByZXR1cm4gW24xNSwgbjE0LCBuMTEsIG4zLCBuNywgbjEwLCBuMTMsIG4xMl07XG59XG5cbmZ1bmN0aW9uIHBhcnNlT3B0aW9ucyhyYXdPcHRzKSB7XG4gIGxldFxuICAgIGJsZW5kQ29sb3JzID0gdHJ1ZSxcbiAgICBzY2FsZUFscGhhID0gZmFsc2U7XG5cbiAgaWYgKHJhd09wdHMpIHtcblx0aWYgKHJhd09wdHMuYmxlbmRDb2xvcnMgPT09IGZhbHNlKSB7XG5cdCAgYmxlbmRDb2xvcnMgPSBmYWxzZTtcblx0fVxuXHRcdFxuXHRpZiAocmF3T3B0cy5zY2FsZUFscGhhID09PSB0cnVlKSB7XG4gICAgICBzY2FsZUFscGhhID0gdHJ1ZTtcbiAgICB9XG4gIH1cblx0XG4gIHJldHVybiB7YmxlbmRDb2xvcnMsIHNjYWxlQWxwaGF9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24geGJyMngocGl4ZWxBcnJheSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICBjb25zdCB7YmxlbmRDb2xvcnMsIHNjYWxlQWxwaGF9ID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpO1xuICBjb25zdCBzY2FsZWRQaXhlbEFycmF5ID0gbmV3IFVpbnQzMkFycmF5KHdpZHRoICogaGVpZ2h0ICogNCk7XG4gIGZvciAobGV0IGMgPSAwOyBjIDwgd2lkdGg7IGMrKykge1xuICAgIGZvciAobGV0IGQgPSAwOyBkIDwgaGVpZ2h0OyBkKyspIHtcbiAgICAgIGNvbXB1dGVYYnIyeChwaXhlbEFycmF5LCBjLCBkLCB3aWR0aCwgaGVpZ2h0LCBzY2FsZWRQaXhlbEFycmF5LCBjICogMiwgZCAqIDIsIHdpZHRoICogMiwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2NhbGVkUGl4ZWxBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhicjN4KHBpeGVsQXJyYXksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgY29uc3Qge2JsZW5kQ29sb3JzLCBzY2FsZUFscGhhfSA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKTtcbiAgY29uc3Qgc2NhbGVkUGl4ZWxBcnJheSA9IG5ldyBVaW50MzJBcnJheSh3aWR0aCAqIGhlaWdodCAqIDkpO1xuICBmb3IgKGxldCBjID0gMDsgYyA8IHdpZHRoOyBjKyspIHtcbiAgICBmb3IgKGxldCBkID0gMDsgZCA8IGhlaWdodDsgZCsrKSB7XG4gICAgICBjb21wdXRlWGJyM3gocGl4ZWxBcnJheSwgYywgZCwgd2lkdGgsIGhlaWdodCwgc2NhbGVkUGl4ZWxBcnJheSwgYyAqIDMsIGQgKiAzLCB3aWR0aCAqIDMsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNjYWxlZFBpeGVsQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4YnI0eChwaXhlbEFycmF5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gIGNvbnN0IHtibGVuZENvbG9ycywgc2NhbGVBbHBoYX0gPSBwYXJzZU9wdGlvbnMob3B0aW9ucyk7XG4gIGNvbnN0IHNjYWxlZFBpeGVsQXJyYXkgPSBuZXcgVWludDMyQXJyYXkod2lkdGggKiBoZWlnaHQgKiAxNik7XG4gIGZvciAobGV0IGMgPSAwOyBjIDwgd2lkdGg7IGMrKykge1xuICAgIGZvciAobGV0IGQgPSAwOyBkIDwgaGVpZ2h0OyBkKyspIHtcbiAgICAgIGNvbXB1dGVYYnI0eChwaXhlbEFycmF5LCBjLCBkLCB3aWR0aCwgaGVpZ2h0LCBzY2FsZWRQaXhlbEFycmF5LCBjICogNCwgZCAqIDQsIHdpZHRoICogNCwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2NhbGVkUGl4ZWxBcnJheTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHtzdGFydEdhbWUsIGlzTXVzaWNPbiwgaXNTb3VuZE9uLCBzZXRNdXNpY09uLCBzZXRTb3VuZE9uLCBzZXRQcmVzY2FsZVRpbGVzZXRzLCBSZW5kZXJlciB9IGZyb20gXCIuL0d1dGVcIjtcbmV4cG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4vR2FtZUNvbnRleHRcIjtcbmV4cG9ydCB7IEdyYXBoaWNzLCBXSElURSwgQkxBQ0ssIEdSRUVOLCBSRUQsIEJMVUUsIE9mZnNjcmVlbiB9IGZyb20gXCIuL0dyYXBoaWNzXCI7XG5leHBvcnQgeyBnZXRNYXhUZXh0dXJlU2l6ZSB9IGZyb20gXCIuL29wZW5nbC9PcGVuR0xHcmFwaGljc0ltcGxcIjtcbmV4cG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9HYW1lXCI7XG5leHBvcnQgeyBCaXRtYXAgfSBmcm9tIFwiLi9CaXRtYXBcIjtcbmV4cG9ydCB7IEZvbnQgfSBmcm9tIFwiLi9Gb250XCI7XG5leHBvcnQgeyBTb3VuZCB9IGZyb20gXCIuL1NvdW5kXCI7XG5leHBvcnQgeyBUaWxlc2V0IH0gZnJvbSBcIi4vVGlsZXNldFwiO1xuZXhwb3J0IHsgS2V5cyB9IGZyb20gXCIuL0tleXNcIjtcbmV4cG9ydCB7IEFTdGFyUGF0aEZpbmRlciB9IGZyb20gXCIuL3BhdGgvQVN0YXJQYXRoRmluZGVyXCI7XG5leHBvcnQgeyBQYXRoRmluZGVyTWFwIH0gZnJvbSBcIi4vcGF0aC9QYXRoRmluZGVyTWFwXCI7XG5leHBvcnQgeyBQYXRoIH0gZnJvbSBcIi4vcGF0aC9QYXRoXCI7XG5leHBvcnQgeyBQYXRoTW92ZXIgfSBmcm9tIFwiLi9wYXRoL1BhdGhNb3ZlclwiO1xuZXhwb3J0IHsgU3RlcCB9IGZyb20gXCIuL3BhdGgvU3RlcFwiO1xuZXhwb3J0IHsgTERUS1dvcmxkLCBMRFRLTGF5ZXJDb21wcmVzc2lvbiB9IGZyb20gXCIuL3RpbGVtYXBzL0xEVEtXb3JsZFwiO1xuZXhwb3J0IHsgTWFwV29ybGQgfSBmcm9tIFwiLi90aWxlbWFwcy9NYXBXb3JsZFwiO1xuZXhwb3J0IHsgTWFwTGV2ZWwgfSBmcm9tIFwiLi90aWxlbWFwcy9NYXBMZXZlbFwiO1xuZXhwb3J0IHsgTWFwTGF5ZXIgfSBmcm9tIFwiLi90aWxlbWFwcy9NYXBMYXllclwiO1xuZXhwb3J0IHsgTWFwRW50aXR5IH0gZnJvbSBcIi4vdGlsZW1hcHMvTWFwRW50aXR5XCI7XG5leHBvcnQgeyBTb3VuZFNjYXBlLCBTb3VuZEVhc2luZyB9IGZyb20gXCIuL1NvdW5kU2NhcGVcIlxuIl0sInNvdXJjZVJvb3QiOiIifQ==