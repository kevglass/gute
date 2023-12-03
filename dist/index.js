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
        var _this = this;
        if (pal === void 0) { pal = undefined; }
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
    if (Gute_1.isMusicOn()) {
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
                }, function (e) { Log_1.GuteLog.log("Failed to load: " + _this.url); });
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
            ctx.drawImage(this.image, this.x, this.y, this.width - 0.1, this.height - 0.1, x, y, this.width * this.scale, this.height * this.scale);
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
        this.image.onerror = function () {
            __1.GuteLog.log("Error loading: " + url);
        };
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
        var _this = this;
        if (pal === void 0) { pal = undefined; }
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

var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpenGLGraphicsImpl = exports.getMaxTextureSize = exports.colToNumber = void 0;
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
exports.colToNumber = colToNumber;
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
exports.getMaxTextureSize = getMaxTextureSize;
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
        var list = __spreadArray([], this.images);
        list.sort(function (a, b) { return a.height > b.height ? -1 : 1; });
        var placed = [];
        placed.push({ texX: 0, texY: 0, width: 1, height: 1, texIndex: -1 });
        var records = list.map(function (image) { return { image: image, w: image.width, h: image.height }; });
        var base = 0;
        var step = 20;
        var textureCount = 0;
        for (var i = 0; i < records.length; i += step) {
            var _a = potpack_1.default(records.slice(base, i)), w_1 = _a.w, h_1 = _a.h, fill_1 = _a.fill;
            if (w_1 > textureSize || h_1 > textureSize) {
                var _b = potpack_1.default(records.slice(base, i - step)), w_2 = _b.w, h_2 = _b.h, fill_2 = _b.fill;
                records.slice(base, i - step).forEach(function (record) { return record.image.texIndex = textureCount; });
                Log_1.GuteLog.log(base + " -> " + (i - step - 1) + " = " + w_2 + "x" + h_2);
                base = i - step;
                textureCount++;
            }
        }
        var _c = potpack_1.default(records.slice(base, records.length)), w = _c.w, h = _c.h, fill = _c.fill;
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

var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
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
            var rgba = __spreadArray([], source);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ndXRlLy4vbm9kZV9tb2R1bGVzL2pzemlwL2Rpc3QvanN6aXAubWluLmpzIiwid2VicGFjazovL2d1dGUvLi9ub2RlX21vZHVsZXMvcG90cGFjay9pbmRleC5qcyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0dyYXBoaWNzLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvR3V0ZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0tleXMudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9Mb2cudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9Tb3VuZFNjYXBlLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9CaXRtYXBJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9Gb250SW1wbC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL2ltcGwvR3JhcGhpY3NJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9QYWxldHRlLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9Tb3VuZEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL1RpbGVzZXRJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9vcGVuZ2wvT3BlbkdMQml0bWFwLjEudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9vcGVuZ2wvT3BlbkdMQml0bWFwLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvb3BlbmdsL09wZW5HTEdyYXBoaWNzSW1wbC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL29wZW5nbC9PcGVuR0xPZmZzY3JlZW4udHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9vcGVuZ2wvT3BlbkdMVGlsZXNldEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9wYXRoL0FTdGFyUGF0aEZpbmRlci50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvTWFwTm9kZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvUGF0aC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3BhdGgvU3RlcC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL0xEVEtXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcEVudGl0eS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcExheWVyLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvdGlsZW1hcHMvTWFwTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy90aWxlbWFwcy9NYXBXb3JsZC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vbm9kZV9tb2R1bGVzL3hici1qcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3V0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ3V0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2d1dGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7O0FDVkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLEdBQUcsSUFBb0Qsb0JBQW9CLEtBQUssRUFBOEssQ0FBQyxZQUFZLHlCQUF5QixnQkFBZ0IsVUFBVSxVQUFVLE1BQU0sU0FBbUMsQ0FBQyxnQkFBZ0IsT0FBQyxPQUFPLG9CQUFvQiw4Q0FBOEMsa0NBQWtDLFlBQVksWUFBWSxtQ0FBbUMsaUJBQWlCLGVBQWUsc0JBQXNCLG9CQUFvQixVQUFVLFNBQW1DLEtBQUssV0FBVyxZQUFZLFNBQVMsRUFBRSxtQkFBbUIsYUFBYSwwR0FBMEcscUJBQXFCLDBFQUEwRSxXQUFXLCtPQUErTyxrQkFBa0Isc0JBQXNCLGtDQUFrQywrRkFBK0YsMkRBQTJELHlKQUF5SixzREFBc0QsV0FBVyxrTUFBa00sVUFBVSxFQUFFLDRCQUE0QixxQkFBcUIsYUFBYSw0R0FBNEcsc0JBQXNCLHVHQUF1RyxhQUFhLDRCQUE0QixtSUFBbUksNkJBQTZCLDZHQUE2RyxJQUFJLGdDQUFnQyx5UEFBeVAsb0NBQW9DLDZJQUE2SSxhQUFhLEVBQUUsK0ZBQStGLHFCQUFxQixhQUFhLGtDQUFrQyxTQUFTLHdDQUF3QyxrQ0FBa0MsNkJBQTZCLHFDQUFxQyx3QkFBd0IsRUFBRSx3Q0FBd0MscUJBQXFCLGFBQWEsbUJBQW1CLGlCQUFpQixtQkFBbUIsTUFBTSxLQUFLLElBQUksWUFBWSxJQUFJLGlDQUFpQyxPQUFPLFNBQVMsR0FBRyx3QkFBd0Isd0VBQXdFLGNBQWMsTUFBTSxZQUFZLElBQUksNEJBQTRCLFdBQVcscUNBQXFDLGNBQWMsTUFBTSxZQUFZLElBQUksdUNBQXVDLFdBQVcsc0JBQXNCLEVBQUUsYUFBYSxxQkFBcUIsYUFBYSx5S0FBeUssR0FBRyxxQkFBcUIsYUFBYSxXQUFXLDBEQUEwRCxXQUFXLEVBQUUsT0FBTyxxQkFBcUIsYUFBYSx5TEFBeUwsZ0JBQWdCLGtHQUFrRyxvRUFBb0UsbUdBQW1HLDhCQUE4QiwwRkFBMEYsZ0NBQWdDLCtDQUErQyxvQ0FBb0Msb0NBQW9DLHlDQUF5QyxFQUFFLFdBQVcsOEJBQThCLFFBQVEsbUJBQW1CLEdBQUcsOEJBQThCLDBCQUEwQiwrQkFBK0IseUJBQXlCLEdBQUcsRUFBRSxpREFBaUQscUJBQXFCLGFBQWEsZ0JBQWdCLFdBQVcsUUFBUSxJQUFJLHlDQUF5QyxTQUFTLHdCQUF3QixnVEFBZ1QsNkNBQTZDLGlHQUFpRyxRQUFRLCtCQUErQixZQUFZLDhDQUE4QyxRQUFRLDBDQUEwQyw0Q0FBNEMsaUJBQWlCLCtRQUErUSxTQUFTLGlLQUFpSyw0SEFBNEgsc0dBQXNHLG9CQUFvQixpUkFBaVIsNkNBQTZDLG1FQUFtRSx5R0FBeUcsa0JBQWtCLDhEQUE4RCxHQUFHLHNDQUFzQyx3RUFBd0Usb0NBQW9DLE1BQU0sOEVBQThFLFdBQVcsd0JBQXdCLFdBQVcsRUFBRSx3QkFBd0Isc0NBQXNDLG1CQUFtQiw4R0FBOEcsa0RBQWtELGlCQUFpQixvRkFBb0YsVUFBVSxhQUFhLEVBQUUsb0JBQW9CLHdCQUF3QixXQUFXLEVBQUUsMEJBQTBCLHVDQUF1QyxzQkFBc0IsOEJBQThCLGdDQUFnQyx5QkFBeUIsZUFBZSw4QkFBOEIsYUFBYSxFQUFFLGdEQUFnRCxtQ0FBbUMsc0ZBQXNGLGlFQUFpRSxXQUFXLGFBQWEsYUFBYSxFQUFFLDBDQUEwQywySUFBMkksMENBQTBDLHNCQUFzQixXQUFXLCtCQUErQixrQkFBa0Isd0JBQXdCLHNGQUFzRiwyQkFBMkIsV0FBVyxPQUFPLCtCQUErQiw0TEFBNEwsK0JBQStCLG9CQUFvQiw0Q0FBNEMsWUFBWSxXQUFXLFFBQVEsY0FBYyxVQUFVLFNBQVMsNkJBQTZCLDRCQUE0Qiw0QkFBNEIsV0FBVyxnQkFBZ0IsYUFBYSxFQUFFLHVGQUF1RixxQkFBcUIsYUFBYSxrREFBa0QsaUNBQWlDLDZEQUE2RCxJQUFJLHdCQUF3QixJQUFJLG9CQUFvQixrQkFBa0IsZ0VBQWdFLFNBQVMsOEZBQThGLGtCQUFrQiw4Q0FBOEMsNEdBQTRHLFVBQVUsbUJBQW1CLFNBQVMsV0FBVyxVQUFVLEVBQUUsd0NBQXdDLHNCQUFzQixhQUFhLGFBQWEscUNBQXFDLHNJQUFzSSxvRkFBb0YsWUFBWSw2REFBNkQsVUFBVSxrSkFBa0osNkJBQTZCLHdDQUF3QyxFQUFFLHVFQUF1RSxzQkFBc0IsYUFBYSx1SEFBdUgsY0FBYyxtQ0FBbUMsb0RBQW9ELHlCQUF5QixLQUFLLHNCQUFzQiw2RkFBNkYsV0FBVyxFQUFFLHdCQUF3QixXQUFXLHVCQUF1QixFQUFFLDhGQUE4Riw2TUFBNk0sZUFBZSxtQkFBbUIsbUJBQW1CLHVDQUF1Qyw0QkFBNEIsV0FBVyxvQkFBb0Isd0JBQXdCLG1CQUFtQixrQ0FBa0MsV0FBVyxLQUFLLFdBQVcscUNBQXFDLCtNQUErTSxFQUFFLHVEQUF1RCxHQUFHLEVBQUUsc0dBQXNHLHNCQUFzQixhQUFhLG1EQUFtRCxnQkFBZ0IsNkZBQTZGLG9EQUFvRCxXQUFXLGlEQUFpRCxRQUFRLGFBQWEsV0FBVyxFQUFFLHlCQUF5Qiw0Q0FBNEMsc0JBQXNCLHVDQUF1QyxFQUFFLDhCQUE4QixnRUFBZ0UsK0JBQStCLGlHQUFpRyxhQUFhLEVBQUUsMkNBQTJDLHNCQUFzQixhQUFhLG9DQUFvQyxrQkFBa0IsOEJBQThCLFdBQVcsMEJBQTBCLHFDQUFxQyx5QkFBeUIsa0JBQWtCLHNCQUFzQixhQUFhLEVBQUUseURBQXlELHNCQUFzQixhQUFhLEVBQUUsbUNBQW1DLHNCQUFzQixhQUFhLFdBQVcsOERBQThELHNFQUFzRSxrRkFBa0YsdUJBQXVCLHlCQUF5Qix1Q0FBdUMsb0JBQW9CLG1CQUFtQixzQkFBc0IsMEJBQTBCLHNCQUFzQiw2RkFBNkYsR0FBRyxzQkFBc0IsYUFBYSxrQkFBa0IsdUNBQXVDLElBQUksc1ZBQXNWLGlEQUFpRCx1S0FBdUssV0FBVyxzSUFBc0ksbUJBQW1CLGdCQUFnQix5UEFBeVAsaURBQWlELHlCQUF5QiwrQkFBK0IsZUFBZSxvQ0FBb0MsaUJBQWlCLGdGQUFnRix1QkFBdUIsaUJBQWlCLGNBQWMsNERBQTRELE9BQU8sZ0JBQWdCLDhGQUE4RixxQkFBcUIsVUFBVSw0SEFBNEgsb0JBQW9CLFNBQVMsa0NBQWtDLGtCQUFrQixJQUFJLHNCQUFzQixxRUFBcUUsU0FBUyxRQUFRLGlDQUFpQyx3QkFBd0IsRUFBRSw4QkFBOEIsd0JBQXdCLG9CQUFvQixrQkFBa0IseUNBQXlDLHdCQUF3QixFQUFFLGtEQUFrRCx1QkFBdUIsb0JBQW9CLGNBQWMsb0JBQW9CLG1GQUFtRix5Q0FBeUMsb0NBQW9DLE1BQU0sV0FBVyxpQ0FBaUMsWUFBWSxzQkFBc0IsOEZBQThGLG9DQUFvQyxXQUFXLElBQUksb0JBQW9CLEVBQUUsc0pBQXNKLHVLQUF1SywrS0FBK0ssa0NBQWtDLDZCQUE2QixTQUFTLDRCQUE0Qiw0Q0FBNEMsNkJBQTZCLG9EQUFvRCxrQ0FBa0MsY0FBYyxpRkFBaUYsWUFBWSxFQUFFLGdOQUFnTixzQkFBc0Isc0JBQXNCLEVBQUUsY0FBYyxzQkFBc0IsYUFBYSx3QkFBd0IsY0FBYyxlQUFlLFlBQVksbUJBQW1CLGtCQUFrQiwyREFBMkQsOEJBQThCLDhDQUE4QyxnR0FBZ0csS0FBSyx1R0FBdUcsU0FBUywrQ0FBK0MsK0ZBQStGLDhDQUE4QyxrQ0FBa0Msc0NBQXNDLG1FQUFtRSx1QkFBdUIsYUFBYSxFQUFFLGdDQUFnQyxzQkFBc0IsYUFBYSxvQkFBb0IsY0FBYywwREFBMEQsYUFBYSx3QkFBd0IsOEJBQThCLHdCQUF3Qiw2SUFBNkksc0JBQXNCLGdDQUFnQyxrQkFBa0IsNEJBQTRCLHFCQUFxQixxQkFBcUIsVUFBVSx5Q0FBeUMsY0FBYyw0QkFBNEIsdUJBQXVCLHdCQUF3QixnREFBZ0QsdUJBQXVCLG1DQUFtQyxvQ0FBb0MscUJBQXFCLHNCQUFzQiw4RkFBOEYsYUFBYSxFQUFFLGNBQWMsc0JBQXNCLGFBQWEsOEJBQThCLGNBQWMsZUFBZSw2REFBNkQsb0JBQW9CLG1FQUFtRSx1QkFBdUIsYUFBYSxFQUFFLHNDQUFzQyxzQkFBc0IsYUFBYSx3QkFBd0IsY0FBYyxlQUFlLDJEQUEyRCx5Q0FBeUMsOENBQThDLDBDQUEwQywrQ0FBK0MsNEJBQTRCLGtDQUFrQyxvQkFBb0IsbUVBQW1FLHVCQUF1QixhQUFhLEVBQUUsZ0NBQWdDLHNCQUFzQixhQUFhLHlCQUF5QixjQUFjLGVBQWUsNkRBQTZELHNEQUFzRCxzRUFBc0UsdUJBQXVCLGFBQWEsRUFBRSxpQ0FBaUMsc0JBQXNCLGFBQWEscUlBQXFJLHNCQUFzQixxQkFBcUIsMEtBQTBLLEVBQUUscUhBQXFILHNCQUFzQixhQUFhLCtMQUErTCxHQUFHLHNCQUFzQixhQUFhLDJDQUEyQyxjQUFjLG1EQUFtRCxxREFBcUQsV0FBVyxxREFBcUQsRUFBRSxhQUFhLEVBQUUsbUNBQW1DLHNCQUFzQixhQUFhLDJDQUEyQyxhQUFhLHlEQUF5RCxpRUFBaUUsc0VBQXNFLGFBQWEsRUFBRSxnREFBZ0Qsc0JBQXNCLGFBQWEsMkNBQTJDLGNBQWMsK0VBQStFLHFEQUFxRCxNQUFNLHdDQUF3QywrQ0FBK0Msc0NBQXNDLGFBQWEsRUFBRSxtQ0FBbUMsc0JBQXNCLGFBQWEsMkNBQTJDLGNBQWMsMEJBQTBCLFdBQVcsa0hBQWtILG9HQUFvRyxhQUFhLFdBQVcsRUFBRSwrQ0FBK0MsOENBQThDLCtCQUErQixrSkFBa0osdUNBQXVDLHFKQUFxSiw4QkFBOEIsMkNBQTJDLGlEQUFpRCwwQ0FBMEMsa0JBQWtCLGlEQUFpRCxNQUFNLG9EQUFvRCxNQUFNLDZEQUE2RCwrQkFBK0IsYUFBYSw0Q0FBNEMsRUFBRSxhQUFhLEVBQUUsbUNBQW1DLHNCQUFzQixhQUFhLGNBQWMseUNBQXlDLGlEQUFpRCx1RUFBdUUsd0JBQXdCLG9CQUFvQixhQUFhLGlCQUFpQixvQkFBb0IsZ0JBQWdCLDRCQUE0QixhQUFhLElBQUksbURBQW1ELFNBQVMscUJBQXFCLFNBQVMsbUJBQW1CLGdLQUFnSyxrQkFBa0IsdUNBQXVDLG9CQUFvQixpRkFBaUYsb0JBQW9CLGtDQUFrQyw0QkFBNEIsdUNBQXVDLGtCQUFrQixnQ0FBZ0MsOEJBQThCLGlGQUFpRixvRUFBb0UsV0FBVywrQkFBK0Isa0JBQWtCLHdCQUF3QixRQUFRLDJCQUEyQixXQUFXLE9BQU8sa0JBQWtCLG1HQUFtRyxtQkFBbUIsNENBQTRDLHVCQUF1Qiw0R0FBNEcsbUJBQW1CLDBCQUEwQixhQUFhLDhCQUE4Qiw2REFBNkQsNEJBQTRCLHVIQUF1SCxpQkFBaUIsaUZBQWlGLHFEQUFxRCxxQkFBcUIsMEJBQTBCLCtDQUErQyxhQUFhLEdBQUcsc0JBQXNCLGFBQWEsK0hBQStILG9CQUFvQiwyQ0FBMkMsVUFBVSxnQkFBZ0IsbUNBQW1DLHlEQUF5RCwwQkFBMEIsa0JBQWtCLHlCQUF5QixVQUFVLHNCQUFzQixJQUFJLHNCQUFzQixVQUFVLDhEQUE4RCxnQ0FBZ0MsbUNBQW1DLGlCQUFpQixxQkFBcUIsUUFBUSxXQUFXLG1CQUFtQixVQUFVLCtCQUErQixzREFBc0QsNkNBQTZDLFdBQVcsaUNBQWlDLFNBQVMseUNBQXlDLDhEQUE4RCxTQUFTLEtBQUssU0FBUyxLQUFLLEtBQUssV0FBVyxFQUFFLGtCQUFrQixRQUFRLFVBQVUsNENBQTRDLE1BQU0sd0JBQXdCLElBQUksa0hBQWtILFNBQVMsbURBQW1ELGFBQWEsdUJBQXVCLGlCQUFpQixrQkFBa0IsV0FBVywrQ0FBK0Msd0JBQXdCLCtCQUErQix1QkFBdUIsT0FBTyxtQkFBbUIseURBQXlELGtCQUFrQixpQ0FBaUMsNEJBQTRCLHFJQUFxSSxtQkFBbUIsMkNBQTJDLEtBQUssYUFBYSxFQUFFLCtJQUErSSxzQkFBc0IsYUFBYSxrUEFBa1AsS0FBSyx5QkFBeUIsSUFBSSx5QkFBeUIsdUJBQXVCLE9BQU8sU0FBUyxJQUFJLDZGQUE2Rix5REFBeUQsU0FBUyxZQUFZLElBQUksNkNBQTZDLFNBQVMsaUJBQWlCLEVBQUUscUJBQXFCLHNCQUFzQixhQUFhLGdIQUFnSCxNQUFNLHdEQUF3RCxnQkFBZ0IsYUFBYSwrQ0FBK0MsYUFBYSw0QkFBNEIseUJBQXlCLDJEQUEyRCw2QkFBNkIsUUFBUSxJQUFJLDJKQUEySix3REFBd0QsSUFBSSw2UUFBNlEsU0FBUyxJQUFJLDBCQUEwQixnRkFBZ0Ysd0NBQXdDLFVBQVUsSUFBSSw0QkFBNEIsdUNBQXVDLEtBQUssMkJBQTJCLFNBQVMsc0JBQXNCLHlGQUF5RixzRkFBc0YsdURBQXVELHNEQUFzRCw4REFBOEQsd0NBQXdDLGlCQUFpQixRQUFRLHFHQUFxRywrQkFBK0IsbUJBQW1CLG9CQUFvQixNQUFNLGlEQUFpRCxzQkFBc0IsS0FBSyxxQ0FBcUMsUUFBUSxvSkFBb0osaUNBQWlDLEVBQUUsOEJBQThCLGlEQUFpRCx5Q0FBeUMsc0JBQXNCLDJFQUEyRSxXQUFXLHNDQUFzQyxFQUFFLHNCQUFzQixFQUFFLDJFQUEyRSxzQkFBc0IsYUFBYSxzR0FBc0csY0FBYyxTQUFTLGdCQUFnQixZQUFZLFdBQVcsNkJBQTZCLFNBQVMsd0JBQXdCLHVCQUF1QixJQUFJLHFCQUFxQixPQUFPLEVBQUUsU0FBUyxJQUFJLDZGQUE2RixnQ0FBZ0MsU0FBUyxzREFBc0QsT0FBTyxpQ0FBaUMsd0JBQXdCLGlEQUFpRCxLQUFLLElBQUksNktBQTZLLGtCQUFrQiw2QkFBNkIsaUJBQWlCLFdBQVcsaUNBQWlDLFNBQVMsaUJBQWlCLHNCQUFzQixJQUFJLGtGQUFrRixTQUFTLFVBQVUseUJBQXlCLElBQUksaUZBQWlGLFNBQVMsVUFBVSxLQUFLLGNBQWMsa0NBQWtDLDJHQUEyRyxJQUFJLEtBQUssaUNBQWlDLFNBQVMsa0JBQWtCLDRCQUE0QixnQkFBZ0IsWUFBWSxXQUFXLGNBQWMsU0FBUyxzQkFBc0IsU0FBUyxVQUFVLDJCQUEyQixnQ0FBZ0MseUJBQXlCLHFDQUFxQyx3QkFBd0IscUNBQXFDLHdCQUF3QixxQ0FBcUMsVUFBVSx5Q0FBeUMsZ0NBQWdDLHdCQUF3Qix5QkFBeUIsd0JBQXdCLDJCQUEyQixnQkFBZ0IsbUJBQW1CLDRCQUE0QixtQkFBbUIsb0RBQW9ELHNDQUFzQyx5QkFBeUIsd0JBQXdCLDJDQUEyQyxlQUFlLDJCQUEyQixnQ0FBZ0MseUJBQXlCLGdCQUFnQixxQ0FBcUMsMkJBQTJCLGVBQWUsMkJBQTJCLGdDQUFnQyx5QkFBeUIseUNBQXlDLHdCQUF3QixxQ0FBcUMsY0FBYyw2QkFBNkIsdUJBQXVCLGtCQUFrQixxQkFBcUIsa0JBQWtCLHlCQUF5Qix3UEFBd1AsNEJBQTRCLCtFQUErRSxxRUFBcUUsYUFBYSxRQUFRLGlCQUFpQiwwRUFBMEUsU0FBUyx5QkFBeUIsYUFBYSx1QkFBdUIsRUFBRSwwQkFBMEIsY0FBYywwQ0FBMEMscUJBQXFCLGFBQWEsUUFBUSxtQkFBbUIsZ0dBQWdHLFNBQVMsc0NBQXNDLDZDQUE2QyxrTEFBa0wscUJBQXFCLHFCQUFxQixtQkFBbUIsdUJBQXVCLGtCQUFrQix3QkFBd0IsSUFBSSxtQkFBbUIscUJBQXFCLHFIQUFxSCxzRUFBc0UsZ0pBQWdKLEdBQUcsRUFBRSxzRkFBc0Ysc0JBQXNCLGFBQWEsaUhBQWlILGNBQWMsaUNBQWlDLGFBQWEsMkJBQTJCLDBDQUEwQyxxQkFBcUIsZ0NBQWdDLDJHQUEyRywyQkFBMkIsd0JBQXdCLHdCQUF3QixvQ0FBb0MsaUNBQWlDLGtDQUFrQyxzVUFBc1UsMkdBQTJHLG1EQUFtRCx1Q0FBdUMsMlhBQTJYLDhDQUE4QyxJQUFJLDBHQUEwRyx1QkFBdUIsOENBQThDLDJPQUEyTywyQkFBMkIsUUFBUSxRQUFRLG9CQUFvQix5S0FBeUssMkJBQTJCLE1BQU0sZ0RBQWdELHlEQUF5RCxXQUFXLGlCQUFpQixvRUFBb0UsNk5BQTZOLDZCQUE2QixnRUFBZ0UsMFFBQTBRLHdCQUF3QixRQUFRLGdXQUFnVyxtTEFBbUwseWJBQXliLG1KQUFtSixnREFBZ0QscURBQXFELFVBQVUsdUVBQXVFLDZFQUE2RSwyQkFBMkIsaUJBQWlCLGtCQUFrQiwyRkFBMkYsYUFBYSxFQUFFLGlHQUFpRyxzQkFBc0IsYUFBYSwySUFBMkksZ0JBQWdCLGtDQUFrQyxhQUFhLHVCQUF1QiwyQkFBMkIsb0JBQW9CLGlDQUFpQywyQkFBMkIsUUFBUSxpVUFBaVUseUJBQXlCLGtFQUFrRSxZQUFZLCtLQUErSyxnSEFBZ0gsNkJBQTZCLDhOQUE4TixtQkFBbUIseVNBQXlTLG1IQUFtSCw4QkFBOEIsbURBQW1ELDRCQUE0QixvT0FBb08sa0NBQWtDLHdCQUF3QixtQ0FBbUMsaVVBQWlVLDZCQUE2QiwyQ0FBMkMsMENBQTBDLEVBQUUsWUFBWSxvRUFBb0UsdUJBQXVCLGNBQWMsdUJBQXVCLHdDQUF3QyxrSEFBa0gsS0FBSyx1Q0FBdUMsK0JBQStCLEtBQUsscUNBQXFDLG9EQUFvRCwwQ0FBMEMsa0NBQWtDLEtBQUssd0NBQXdDLHlEQUF5RCxzQ0FBc0MsOEJBQThCLE1BQU0saUJBQWlCLHVHQUF1RyxZQUFZLHlDQUF5Qyw4QkFBOEIsTUFBTSxpQkFBaUIsMEdBQTBHLGFBQWEsYUFBYSxFQUFFLHNIQUFzSCxzQkFBc0IsYUFBYSxrQkFBa0Isb01BQW9NLG1FQUFtRSxrSUFBa0ksYUFBYSwyQkFBMkIsc0JBQXNCLElBQUksbURBQW1ELGlEQUFpRCx3RUFBd0Usd0JBQXdCLG9GQUFvRixTQUFTLDRCQUE0QixxQkFBcUIscUJBQXFCLDRDQUE0QywwQkFBMEIsOERBQThELCtCQUErQiwyR0FBMkcsK0JBQStCLHNGQUFzRiw4QkFBOEIsb0hBQW9ILDJGQUEyRiw4RkFBOEYsS0FBSyxXQUFXLHdCQUF3QixZQUFZLEVBQUUsbUhBQW1ILHNCQUFzQixhQUFhLGFBQWEsdURBQXVELE1BQU0sbURBQW1ELGFBQWEsaUJBQWlCLGVBQWUsZ0JBQWdCLHlJQUF5SSx5Q0FBeUMsZ0NBQWdDLGlFQUFpRSwyQ0FBMkMsWUFBWSxpQkFBaUIsS0FBSywyQkFBMkIsaUNBQWlDLHdCQUF3QixTQUFTLGFBQWEsUUFBUSxLQUFLLG1CQUFtQixFQUFFLEVBQUUsa0JBQWtCLE1BQU0sUUFBUSxXQUFXLEtBQUssc0JBQXNCLHVCQUF1QixnQ0FBZ0MscUJBQU0sQ0FBQyxxQkFBTSxtRUFBbUUsRUFBRSxHQUFHLHNCQUFzQixhQUFhLHFCQUFxQixjQUFjLFFBQVEsOENBQThDLGNBQWMsMkVBQTJFLGdFQUFnRSxrQkFBa0Isd0xBQXdMLGtCQUFrQixhQUFhLE1BQU0sSUFBSSxPQUFPLFNBQVMscUJBQXFCLHFGQUFxRixFQUFFLGNBQWMsZ0JBQWdCLHlGQUF5RixzQkFBc0IsZ0JBQWdCLFNBQVMsY0FBYyx3QkFBd0IsY0FBYyx5QkFBeUIsbUJBQW1CLE9BQU8sRUFBRSwrQkFBK0IsZ0JBQWdCLFNBQVMsSUFBSSxnQ0FBZ0MsU0FBUywyQkFBMkIsU0FBUyw0Q0FBNEMsb0NBQW9DLHVCQUF1Qiw2QkFBNkIsc0NBQXNDLFNBQVMsRUFBRSxhQUFhLHNDQUFzQyxRQUFRLEVBQUUsRUFBRSwrQkFBK0IseUJBQXlCLGdDQUFnQywwRkFBMEYsOEJBQThCLGtGQUFrRixTQUFTLHVDQUF1QywwQkFBMEIsNENBQTRDLG1DQUFtQyxzQ0FBc0MseUJBQXlCLDJDQUEyQyxrQ0FBa0MseUJBQXlCLGFBQWEsaURBQWlELGNBQWMsWUFBWSxLQUFLLHNCQUFzQiw4QkFBOEIsTUFBTSw2QkFBNkIsU0FBUyx3QkFBd0Isc0JBQXNCLDhCQUE4QixNQUFNLDRCQUE0QixTQUFTLHVCQUF1Qiw4QkFBOEIsZ0NBQWdDLHNCQUFzQixrQkFBa0IscUJBQXFCLG1CQUFtQixXQUFXLDhHQUE4RyxvQkFBb0IsOEJBQThCLDBDQUEwQyxLQUFLLE1BQU0sV0FBVyxTQUFTLGdCQUFnQiw4QkFBOEIseUNBQXlDLGFBQWEsd0JBQXdCLEdBQUcsb0JBQW9CLFdBQVcsOEdBQThHLG9CQUFvQiw4QkFBOEIsdUJBQXVCLEtBQUssTUFBTSxzQ0FBc0MseUJBQXlCLGFBQWEsd0JBQXdCLEVBQUUsTUFBTSxVQUFVLEVBQUUsYUFBYSxzQkFBc0IsYUFBYSxTQUFTLGtIQUFrSCxFQUFFLHdGQUF3RixzQkFBc0IsYUFBYSxpS0FBaUssY0FBYyx3Q0FBd0MsdUJBQXVCLDJFQUEyRSxNQUFNLEVBQUUsbUJBQW1CLHVNQUF1TSxvRkFBb0YsK0JBQStCLGtFQUFrRSxNQUFNLHdOQUF3TixtQkFBbUIsZ0JBQWdCLGVBQWUsNENBQTRDLGdCQUFnQiwrQkFBK0IsNkNBQTZDLHVCQUF1QiwrS0FBK0ssR0FBRyw0SUFBNEksMkxBQTJMLDhDQUE4QyxtSEFBbUgsZ0NBQWdDLG9CQUFvQiwrQkFBK0IsK0pBQStKLG9EQUFvRCxjQUFjLGdCQUFnQixzQkFBc0IsY0FBYyxrQkFBa0IsRUFBRSxzR0FBc0csc0JBQXNCLGFBQWEsK0xBQStMLGNBQWMsd0NBQXdDLHVCQUF1QixtQ0FBbUMsTUFBTSxFQUFFLG1CQUFtQix5VkFBeVYsNkNBQTZDLG9DQUFvQyw0REFBNEQsZ0JBQWdCLGVBQWUsNENBQTRDLGdCQUFnQiwrQkFBK0Isb0ZBQW9GLHVCQUF1QixzTUFBc00sR0FBRyw4V0FBOFcsK1hBQStYLDJEQUEyRCxzTEFBc0wsZ0NBQWdDLG9CQUFvQiwrQkFBK0Isb0tBQW9LLG9EQUFvRCxjQUFjLGdCQUFnQixZQUFZLEVBQUUsaUpBQWlKLHNCQUFzQixhQUFhLHNHQUFzRyxxQkFBcUIsa0RBQWtELFNBQVMsRUFBRSxnQkFBZ0IsTUFBTSxrRUFBa0UsaURBQWlELFNBQVMsMkJBQTJCLGlFQUFpRSxPQUFPLDZCQUE2QixxREFBcUQsaUJBQWlCLElBQUksa0JBQWtCLDJCQUEyQixnQkFBZ0IscUJBQXFCLElBQUksbUJBQW1CLHlDQUF5QyxJQUFJLGtDQUFrQyxVQUFVLElBQUksNkJBQTZCLFlBQVksSUFBSSxrQkFBa0IsMkJBQTJCLDhCQUE4Qix1QkFBdUIsb0lBQW9JLGVBQWUsR0FBRyxzQkFBc0IsYUFBYSw4QkFBOEIsSUFBSSxvQ0FBb0MsU0FBUyxLQUFLLElBQUksa0RBQWtELFNBQVMsS0FBSyw4QkFBOEIsTUFBTSx3REFBd0QsZ0JBQWdCLG9HQUFvRyxpQkFBaUIsSUFBSSxpQ0FBaUMsU0FBUyx5Q0FBeUMsNkJBQTZCLFFBQVEsSUFBSSwySkFBMkosMEJBQTBCLElBQUksNlFBQTZRLFNBQVMsNkJBQTZCLHFCQUFxQiw2QkFBNkIsOENBQThDLElBQUkseUJBQXlCLFNBQVMsNEJBQTRCLDJDQUEyQyxVQUFVLElBQUksNEJBQTRCLHVDQUF1QyxLQUFLLDJCQUEyQixTQUFTLHNCQUFzQix5RkFBeUYsY0FBYyw0QkFBNEIsTUFBTSxpREFBaUQsc0JBQXNCLEtBQUssc0NBQXNDLEVBQUUsY0FBYyxzQkFBc0IsYUFBYSw0QkFBNEIseUNBQXlDLE1BQU0sRUFBRSxxQkFBcUIseUJBQXlCLEVBQUUsa0JBQWtCLGtCQUFrQixHQUFHLHNCQUFzQixhQUFhLFdBQVcsK1hBQStYLEdBQUcsc0JBQXNCLGFBQWEsaUJBQWlCLG1CQUFtQixNQUFNLEtBQUssSUFBSSxZQUFZLElBQUksaUNBQWlDLE9BQU8sU0FBUyxHQUFHLDRCQUE0QixjQUFjLE1BQU0sWUFBWSxJQUFJLDRCQUE0QixZQUFZLEdBQUcsc0JBQXNCLGFBQWEsOE1BQThNLGdCQUFnQixvQkFBb0IsY0FBYyx1QkFBdUIsY0FBYyxtQkFBbUIsT0FBTyxRQUFRLGNBQWMsMEJBQTBCLGlOQUFpTixnQkFBZ0IscUhBQXFILGdCQUFnQiw2QkFBNkIsZ0JBQWdCLHNFQUFzRSxnQkFBZ0IsNkxBQTZMLG9FQUFvRSxHQUFHLCtEQUErRCxTQUFTLElBQUksbUpBQW1KLHdCQUF3QixrQ0FBa0Msc0JBQXNCLDRCQUE0QixvQ0FBb0MsY0FBYyxtQ0FBbUMsR0FBRywrREFBK0Qsd0dBQXdHLHVDQUF1QyxFQUFFLFVBQVUsdUNBQXVDLEVBQUUsS0FBSyw2QkFBNkIsc1pBQXNaLHNLQUFzSyxHQUFHLDBDQUEwQyxnQkFBZ0IsYUFBYSxFQUFFLGtCQUFrQixzQ0FBc0MseUJBQXlCLDhYQUE4WCxxQkFBcUIsK0tBQStLLEVBQUUsYUFBYSxpSkFBaUosd0VBQXdFLDhDQUE4QyxzSUFBc0ksZ0JBQWdCLGVBQWUsRUFBRSxrQkFBa0Isc0NBQXNDLHlCQUF5Qix5ZUFBeWUsd0lBQXdJLG9MQUFvTCxFQUFFLGtHQUFrRywyQkFBMkIsaUhBQWlILG9EQUFvRCx5TkFBeU4sc0JBQXNCLG1GQUFtRixhQUFhLDhuQ0FBOG5DLGNBQWMsTUFBTSw2TUFBNk0sY0FBYyxXQUFXLDBCQUEwQiw2U0FBNlMsWUFBWSx3QkFBd0IsZUFBZSxRQUFRLDhHQUE4RyxhQUFhLFlBQVksdWVBQXVlLCtCQUErQixZQUFZLHNEQUFzRCxFQUFFLG1CQUFtQix3Q0FBd0MseUJBQXlCLHNDQUFzQyxzQkFBc0Isa0hBQWtILGlGQUFpRixvSEFBb0gsME5BQTBOLHVCQUF1Qix5RkFBeUYsNERBQTRELHlCQUF5QixZQUFZLDRDQUE0Qyx5R0FBeUcsbXJCQUFtckIsS0FBSywyQkFBMkIscUxBQXFMLG9DQUFvQyxnQkFBZ0IsME1BQTBNLGdEQUFnRCwwSUFBMEksaUJBQWlCLG1DQUFtQyxZQUFZLEdBQUcsbUtBQW1LLElBQUksTUFBTSxvRkFBb0YsYUFBYSw4R0FBOEcsaUJBQWlCLHNDQUFzQyxZQUFZLEdBQUcsbUtBQW1LLElBQUksTUFBTSwwRkFBMEYsYUFBYSxtR0FBbUcsa0JBQWtCLGlNQUFpTSxpREFBaUQseURBQXlELGlEQUFpRCwyREFBMkQsbUNBQW1DLFdBQVcsRUFBRSw0Q0FBNEMsa0JBQWtCLE1BQU0sa0lBQWtJLDBHQUEwRyxtQ0FBbUMsNEJBQTRCLEVBQUUsbUJBQW1CLHVDQUF1Qyx5QkFBeUIsMEdBQTBHLGVBQWUsSUFBSSwyR0FBMkcsZ0ZBQWdGLG1QQUFtUCwwR0FBMEcsMkJBQTJCLHlGQUF5RixtTUFBbU0sNlNBQTZTLDBCQUEwQixNQUFNLGtJQUFrSSxzQ0FBc0MsK0JBQStCLHlCQUF5Qix1RUFBdUUsZ1JBQWdSLGVBQWUsRUFBRSxxQ0FBcUMseUhBQXlILEVBQUUsa0NBQWtDLDhMQUE4TCxvREFBb0QsRUFBRSw4RUFBOEUsc0JBQXNCLGFBQWEscUJBQXFCLHdJQUF3SSxHQUFHLHNCQUFzQixhQUFhLHdCQUF3QixzREFBc0QseVBBQXlQLEtBQUsscURBQXFELFFBQVEsRUFBRSx3REFBd0QsS0FBSyxZQUFZLGNBQWMsNEJBQTRCLFdBQVcsU0FBUyxVQUFVLFFBQVEsOENBQThDLFFBQVEsNkhBQTZILFFBQVEsRUFBRSw0Q0FBNEMsY0FBYyw0QkFBNEIsV0FBVyx3Q0FBd0MsUUFBUSx3RkFBd0YsZ0RBQWdELFFBQVEsMEJBQTBCLHNCQUFzQixnREFBZ0QsUUFBUSxrQkFBa0IsZUFBZSxTQUFTLGtCQUFrQixFQUFFLFdBQVcsYUFBYSxzQkFBc0IsU0FBUyxrQkFBa0IsRUFBRSxZQUFZLFdBQVcsa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsU0FBUyxrQkFBa0IsRUFBRSxVQUFVLEtBQUssSUFBSSxnREFBZ0Qsd0NBQXdDLEtBQUssVUFBVSxtREFBbUQsRUFBRSx3Q0FBd0MsT0FBTyxPQUFPLGdCQUFnQix5SUFBeUksR0FBRyxzQkFBc0IsYUFBYSwrSEFBK0gsY0FBYyw4REFBOEQsYUFBYSwrZkFBK2YsY0FBYyxNQUFNLDBRQUEwUSxjQUFjLE1BQU0sbUVBQW1FLGdCQUFnQixRQUFRLG1LQUFtSyxnQkFBZ0IsUUFBUSw4RUFBOEUsYUFBYSxjQUFjLE1BQU0sTUFBTSw2Q0FBNkMsTUFBTSxlQUFlLEtBQUssTUFBTSxlQUFlLEtBQUssTUFBTSxlQUFlLEtBQUssTUFBTSxlQUFlLGlDQUFpQyxPQUFPLE1BQU0sS0FBSyxlQUFlLDRCQUE0QixPQUFPLE9BQU8sa0RBQWtELG9CQUFvQixnQkFBZ0Isa1lBQWtZLGtGQUFrRixlQUFlLDBDQUEwQywySEFBMkgsOERBQThELDBJQUEwSSxRQUFRLGdCQUFnQixzQkFBc0IsVUFBVSxNQUFNLEtBQUssS0FBSyxFQUFFLGlCQUFpQixzQkFBc0Isd0JBQXdCLDBFQUEwRSxNQUFNLDZFQUE2RSx5Q0FBeUMsTUFBTSxjQUFjLDZDQUE2QyxNQUFNLGdEQUFnRCxtQkFBbUIsc0NBQXNDLE1BQU0sdURBQXVELE1BQU0sWUFBWSxLQUFLLEVBQUUsaUJBQWlCLHNCQUFzQiwrQkFBK0IsNkNBQTZDLE1BQU0sa0JBQWtCLDJDQUEyQyxNQUFNLDhHQUE4RyxZQUFZLEtBQUssRUFBRSxpQkFBaUIsc0JBQXNCLHlJQUF5SSxZQUFZLEtBQUssRUFBRSxpQkFBaUIsc0JBQXNCLDhIQUE4SCx3QkFBd0IsS0FBSyxLQUFLLEVBQUUsaUJBQWlCLHNCQUFzQixnSEFBZ0gsaUNBQWlDLFNBQVMsb1FBQW9RLG9CQUFvQix3QkFBd0IsaUJBQWlCLFFBQVEsbUZBQW1GLEVBQUUsK0RBQStELGdDQUFnQyxvQkFBb0Isd0JBQXdCLGlCQUFpQixRQUFRLHNGQUFzRixFQUFFLCtEQUErRCxtQ0FBbUMsU0FBUyx1QkFBdUIsS0FBSyxLQUFLLEVBQUUsaUJBQWlCLHNCQUFzQix3QkFBd0Isc0NBQXNDLE1BQU0sTUFBTSw4RUFBOEUsTUFBTSxhQUFhLEtBQUssRUFBRSxpQkFBaUIsc0JBQXNCLHFDQUFxQyx5R0FBeUcsNEJBQTRCLGdDQUFnQyxtQkFBbUIsMEJBQTBCLE1BQU0sS0FBSyxJQUFJLEVBQUUsaUJBQWlCLHNCQUFzQixtQ0FBbUMsaUJBQWlCLE1BQU0scUNBQXFDLFlBQVksUUFBUSxpQkFBaUIsTUFBTSw0Q0FBNEMsWUFBWSxNQUFNLDRCQUE0QixLQUFLLEVBQUUsaUJBQWlCLHNCQUFzQiw4QkFBOEIsK0NBQStDLE1BQU0sa0RBQWtELGtCQUFrQix1QkFBdUIsdUNBQXVDLHNEQUFzRCxNQUFNLFVBQVUsTUFBTSxhQUFhLEtBQUssRUFBRSxpQkFBaUIsc0JBQXNCLG1IQUFtSCxzREFBc0QsTUFBTSxtQkFBbUIsYUFBYSxlQUFlLEVBQUUsS0FBSyxJQUFJLEVBQUUsaUJBQWlCLHNCQUFzQixvQ0FBb0MsS0FBSyxVQUFVLHVCQUF1QixxQ0FBcUMsZUFBZSw2REFBNkQsMkNBQTJDLE1BQU0sbUJBQW1CLGFBQWEsc0JBQXNCLEVBQUUsS0FBSyx3RUFBd0UsRUFBRSxpQkFBaUIsc0JBQXNCLHVDQUF1QyxLQUFLLFdBQVcsVUFBVSxJQUFJLEVBQUUsaUJBQWlCLHNCQUFzQiwyQkFBMkIsNENBQTRDLE1BQU0seUNBQXlDLGdCQUFnQixVQUFVLElBQUksRUFBRSxpQkFBaUIsc0JBQXNCLHNDQUFzQyxLQUFLLFVBQVUsSUFBSSxFQUFFLGlCQUFpQixzQkFBc0IseUNBQXlDLDRCQUE0Qiw0Q0FBNEMsTUFBTSxLQUFLLElBQUkscUJBQXFCLHFCQUFxQixvQkFBb0IsdURBQXVELE1BQU0sa0JBQWtCLGVBQWUsaUVBQWlFLDhDQUE4QyxNQUFNLHdDQUF3QyxnQkFBZ0IseUVBQXlFLHdDQUF3QyxNQUFNLDJCQUEyQixrQkFBa0IseUJBQXlCLGlNQUFpTSxNQUFNLGFBQWEsd0VBQXdFLEVBQUUsaUJBQWlCLHNCQUFzQixrQkFBa0IsZ0JBQWdCLDZFQUE2RSxFQUFFLGlCQUFpQixzQkFBc0Isc0JBQXNCLDJDQUEyQyxVQUFVLE1BQU0sU0FBUyxvQkFBb0IsTUFBTSxTQUFTLDhDQUE4QyxNQUFNLHVCQUF1QixvQkFBb0IsY0FBYyxJQUFJLEVBQUUsaUJBQWlCLHNCQUFzQixtRUFBbUUseUJBQXlCLGFBQWEsMEVBQTBFLEVBQUUsaUJBQWlCLHNCQUFzQixlQUFlLGdCQUFnQiw4RUFBOEUsRUFBRSxpQkFBaUIsc0JBQXNCLHNCQUFzQiwrQkFBK0Isd0NBQXdDLE1BQU0sa0NBQWtDLG9CQUFvQixjQUFjLElBQUksRUFBRSxpQkFBaUIsc0JBQXNCLG1FQUFtRSxvQkFBb0IsZ0RBQWdELE1BQU0sVUFBVSx5QkFBeUIscUJBQXFCLG1DQUFtQyxnREFBZ0QsTUFBTSxpRkFBaUYsaUNBQWlDLGdDQUFnQyxrQkFBa0IsRUFBRSwwQkFBMEIsTUFBTSx5QkFBeUIsOEJBQThCLE1BQU0sbUJBQW1CLEtBQUssS0FBSyxFQUFFLGlCQUFpQixzQkFBc0IscUlBQXFJLHVDQUF1QyxNQUFNLE1BQU0sVUFBVSw0QkFBNEIsS0FBSyxLQUFLLEVBQUUsaUJBQWlCLHNCQUFzQiw2QkFBNkIseUNBQXlDLE1BQU0sTUFBTSxVQUFVLFlBQVksUUFBUSxhQUFhLFFBQVEsaUJBQWlCLHlCQUF5Qiw4ZEFBOGQsMEJBQTBCLHlCQUF5QixjQUFjLGdEQUFnRCxrQ0FBa0MsTUFBTSxxRUFBcUUsc0NBQXNDLGlCQUFpQix3SUFBd0ksb0RBQW9ELEVBQUUsZ0ZBQWdGLHNCQUFzQixhQUFhLHNiQUFzYixvQ0FBb0MsaUlBQWlJLFFBQVEsTUFBTSxXQUFXLFFBQVEsSUFBSSxnQkFBZ0IsYUFBYSxlQUFlLEtBQUssc0VBQXNFLFFBQVEsY0FBYyxLQUFLLHFCQUFxQixNQUFNLGtDQUFrQyxnQ0FBZ0MsZUFBZSxLQUFLLHFCQUFxQixRQUFRLElBQUksbUNBQW1DLCtJQUErSSxNQUFNLEVBQUUsd0ZBQXdGLHlDQUF5QyxFQUFFLGFBQWEsSUFBSSxPQUFPLDBDQUEwQyxlQUFlLFlBQVksbUJBQW1CLG1DQUFtQyx5QkFBeUIsV0FBVywrQ0FBK0MsNEJBQTRCLG9EQUFvRCxFQUFFLHFCQUFxQixzQkFBc0IsYUFBYSxXQUFXLDRLQUE0SyxHQUFHLHNCQUFzQixhQUFhLG1DQUFtQyxjQUFjLG1CQUFtQixPQUFPLFFBQVEsd1VBQXdVLEtBQUsscUJBQXFCLEtBQUsscUJBQXFCLEtBQUsscUJBQXFCLEtBQUssbUJBQW1CLEtBQUsseUJBQXlCLHNCQUFzQixpSEFBaUgsZ0JBQWdCLGlEQUFpRCxjQUFjLGlDQUFpQyxnQkFBZ0Isc0VBQXNFLGtCQUFrQixvSkFBb0osa0JBQWtCLHFCQUFxQixnQkFBZ0IsWUFBWSwwQkFBMEIsRUFBRSxhQUFhLGtCQUFrQiw2QkFBNkIsUUFBUSxLQUFLLHVCQUF1QixRQUFRLEtBQUssS0FBSyxlQUFlLDZCQUE2QixjQUFjLE1BQU0sUUFBUSxJQUFJLHVCQUF1QixRQUFRLElBQUksdUJBQXVCLFFBQVEsSUFBSSxxQkFBcUIsbUVBQW1FLGNBQWMsdUdBQXVHLG9CQUFvQixnQkFBZ0IsMENBQTBDLGtCQUFrQiwyQkFBMkIsaUdBQWlHLCtCQUErQixZQUFZLGtCQUFrQixnQkFBZ0IsdUJBQXVCLHdOQUF3TixFQUFFLFNBQVMsZ0JBQWdCLGtHQUFrRyxrQ0FBa0MsSUFBSSxrRUFBa0UsS0FBSyxhQUFhLGdHQUFnRyxpQ0FBaUMsS0FBSyxhQUFhLFFBQVEsd1BBQXdQLEVBQUUsNkNBQTZDLDJLQUEySyxRQUFRLEtBQUssb0JBQW9CLCtDQUErQyxJQUFJLHdLQUF3SyxVQUFVLEdBQUcsVUFBVSxrQkFBa0IsS0FBSyx3REFBd0QsV0FBVyxRQUFRLE1BQU0sd0JBQXdCLE1BQU0scUZBQXFGLHdCQUF3QixrQkFBa0IsZ0NBQWdDLDhDQUE4QyxLQUFLLHNNQUFzTSxrQkFBa0IsZ0NBQWdDLDJCQUEyQixLQUFLLDJDQUEyQyxZQUFZLHdCQUF3QixFQUFFLDBJQUEwSSxpREFBaUQsS0FBSyxTQUFTLG9CQUFvQix3Q0FBd0MsdUZBQXVGLFdBQVcsdUJBQXVCLGVBQWUsK0JBQStCLFVBQVUsTUFBTSxtQkFBbUIsVUFBVSxhQUFhLG1CQUFtQixLQUFLLG1CQUFtQixVQUFVLGFBQWEsVUFBVSxJQUFJLHNCQUFzQixZQUFZLGlCQUFpQixRQUFRLEtBQUssV0FBVyxRQUFRLE9BQU8sdUJBQXVCLEtBQUssT0FBTyx1QkFBdUIsS0FBSyxPQUFPLHVCQUF1QixLQUFLLE9BQU8sdUJBQXVCLG1CQUFtQixJQUFJLDZCQUE2QixzRUFBc0UsK0hBQStILDBEQUEwRCxZQUFZLCtEQUErRCxtQkFBbUIsUUFBUSxNQUFNLGlEQUFpRCwwRUFBMEUsU0FBUyxJQUFJLHFDQUFxQyxTQUFTLCtDQUErQyxNQUFNLCtGQUErRiw4QkFBOEIsS0FBSyxrQ0FBa0Msb0xBQW9MLE1BQU0sMkNBQTJDLElBQUksK0JBQStCLDBDQUEwQywyRkFBMkYsNkJBQTZCLGdSQUFnUix5QkFBeUIsOEJBQThCLDRJQUE0SSxLQUFLLEVBQUUscUJBQXFCLHNCQUFzQixhQUFhLHFCQUFxQiw2TEFBNkwsR0FBRyxzQkFBc0IsYUFBYSxrRUFBa0UsZ0NBQWdDLDBDQUEwQyxHQUFHLEVBQUUsR0FBRyxXQUFXLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYOW82Rjs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsdUNBQXVDOztBQUU1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQzs7QUFFQTtBQUNBOztBQUVBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYiwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUZhLGFBQUssR0FBVyxPQUFPLENBQUM7QUFDeEIsYUFBSyxHQUFXLE9BQU8sQ0FBQztBQUN4QixXQUFHLEdBQVcsS0FBSyxDQUFDO0FBQ3BCLGFBQUssR0FBVyxPQUFPLENBQUM7QUFDeEIsWUFBSSxHQUFXLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDRm5DLDRGQUErQztBQUMvQyxzRkFBMkM7QUFDM0Msa0dBQXlFO0FBQ3pFLHlGQUE2QztBQUM3QywrRkFBaUQ7QUFHakQsaUdBQWlEO0FBR2pELHVGQUErQjtBQUMvQixtRkFBeUM7QUFDekMsd0hBQWlFO0FBQ2pFLDRHQUF1RDtBQUN2RCxxSEFBK0Q7QUFDL0QsNkRBQWdDO0FBRWhDLElBQUksU0FBbUIsQ0FBQztBQUN4QixJQUFJLFFBQVEsR0FBWSxJQUFJLENBQUM7QUFDN0IsSUFBSSxRQUFRLEdBQVksSUFBSSxDQUFDO0FBQzdCLElBQUksaUJBQWlCLEdBQVksS0FBSyxDQUFDO0FBQ3ZDLElBQUksT0FBTyxHQUFZLEtBQUssQ0FBQztBQUU3QixTQUFnQixTQUFTO0lBQ3ZCLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFGRCw4QkFFQztBQUVELFNBQWdCLFNBQVM7SUFDdkIsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQUZELDhCQUVDO0FBRUQsU0FBZ0IsWUFBWTtJQUMxQixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRkQsb0NBRUM7QUFFRCxTQUFnQixTQUFTLENBQUMsRUFBVztJQUNuQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2YsQ0FBQztBQUZELDhCQUVDO0FBRUQsU0FBZ0Isc0JBQXNCO0lBQ3BDLE9BQU8saUJBQWlCLENBQUM7QUFDM0IsQ0FBQztBQUZELHdEQUVDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsRUFBVztJQUM3QyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7QUFDekIsQ0FBQztBQUZELGtEQUVDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLEVBQVc7SUFDcEMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNoQixDQUFDO0FBRkQsZ0NBRUM7QUFFRCxTQUFnQixVQUFVLENBQUMsRUFBVztJQUNwQyxJQUFJLENBQUMsRUFBRSxJQUFJLFFBQVEsRUFBRTtRQUNuQixRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLElBQUkscUJBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDM0IscUJBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDaEM7S0FDRjtJQUVELElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ25CLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxxQkFBUyxDQUFDLGFBQWEsRUFBRTtZQUMzQixxQkFBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUQ7S0FDRjtBQUNILENBQUM7QUFkRCxnQ0FjQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxJQUFVLEVBQUUsUUFBb0M7SUFBcEMsc0NBQXFCLFFBQVEsQ0FBQyxNQUFNO0lBQ3hFLElBQU0sSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7SUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFFekIsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUxELDhCQUtDO0FBRUQsSUFBWSxRQUdYO0FBSEQsV0FBWSxRQUFRO0lBQ2xCLDZCQUFpQjtJQUNqQiw2QkFBaUI7QUFDbkIsQ0FBQyxFQUhXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBR25CO0FBQUEsQ0FBQztBQUVGO0lBQUE7UUFDRSxjQUFTLEdBQWUsRUFBRSxDQUFDO1FBRTNCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFFdEIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixnQkFBVyxHQUFvQixTQUFTLENBQUM7UUFDekMscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLFlBQU8sR0FBd0IsU0FBUyxDQUFDO1FBQ3pDLGdCQUFXLEdBQXVCLEVBQUUsQ0FBQztRQUNyQyxTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsYUFBUSxHQUFhLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDckMsbUJBQWMsR0FBWSxLQUFLLENBQUM7SUFpbkJsQyxDQUFDO0lBL21CQyxtQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELG1DQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQscUNBQWtCLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLENBQUMsTUFBTSxFQUFULENBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN0RCxDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVELHFDQUFrQixHQUFsQjtRQUNFLGFBQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDLENBQUM7UUFFMUUsd0VBQXdFO1FBQ3hFLG1CQUFtQjtRQUNuQiwyQ0FBMkM7UUFDM0MsNEJBQTRCO1FBQzVCLHdDQUF3QztRQUN4QyxNQUFNO1FBQ04sSUFBSTtJQUNOLENBQUM7SUFFRCxrQ0FBZSxHQUFmO1FBQ0UsS0FBdUIsVUFBYyxFQUFkLFNBQUksQ0FBQyxTQUFTLEVBQWQsY0FBYyxFQUFkLElBQWMsRUFBRTtZQUFsQyxJQUFNLFFBQVE7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtTQUNGO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQscUNBQWtCLEdBQWxCO1FBQ0UsS0FBdUIsVUFBYyxFQUFkLFNBQUksQ0FBQyxTQUFTLEVBQWQsY0FBYyxFQUFkLElBQWMsRUFBRTtZQUFsQyxJQUFNLFFBQVE7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO29CQUN0QyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQ3BCLGFBQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQztxQkFDN0Y7b0JBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztpQkFDZjtnQkFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLGFBQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQztZQUNyRyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUN0QztTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sNENBQXlCLEdBQWpDO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO1lBQzlCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRW5CLEtBQXVCLFVBQWMsRUFBZCxTQUFJLENBQUMsU0FBUyxFQUFkLGNBQWMsRUFBZCxJQUFjLEVBQUU7Z0JBQWxDLElBQU0sUUFBUTtnQkFDakIsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDN0I7U0FDRjtJQUNILENBQUM7SUFFTSwrQkFBWSxHQUFuQixVQUFvQixPQUFlO1FBQW5DLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3ZDLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBWTtnQkFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxtQ0FBZ0IsR0FBeEIsVUFBeUIsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFjO1FBQWQsMkJBQWM7UUFDM0QsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFFakMsSUFBTSxNQUFNLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVmLElBQU0sS0FBSyxHQUFXLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDekMsSUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUUzQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLG9DQUFpQixHQUF6QixVQUEwQixLQUFhO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8sbUNBQWdCLEdBQXhCLFVBQXlCLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBYztRQUFkLDJCQUFjO1FBQzNELElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBRWpDLElBQU0sTUFBTSxHQUFzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN2RCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZixJQUFNLEtBQUssR0FBVyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3pDLElBQU0sTUFBTSxHQUFXLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFFM0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8saUNBQWMsR0FBdEIsVUFBdUIsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFjO1FBQWQsMkJBQWM7UUFDekQsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFFakMsSUFBTSxNQUFNLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3ZELElBQU0sS0FBSyxHQUFXLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDekMsSUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUUzQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTyxpQ0FBYyxHQUF0QixVQUF1QixHQUFXO1FBQ2hDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBRWpDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sK0JBQVksR0FBcEIsVUFBcUIsR0FBVztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHdCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQWhCLGlCQTJKQztRQTFKQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSwyQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLHVDQUFrQixFQUFFLENBQUM7UUFFeEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFVBQUMsS0FBSztZQUN4RCxJQUFJO2dCQUNGLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDaEIsSUFBSSxJQUFJLEdBQVMsS0FBSyxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUN2RCxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNqRCxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUNoRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7aUJBQ3pCO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixhQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUN2RCxJQUFJO2dCQUNGLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDaEIsSUFBSSxJQUFJLEdBQVMsS0FBSyxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUN2RCxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNqRCxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUNoRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7aUJBQ3pCO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixhQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQUMsS0FBSztZQUN0RCxJQUFJO2dCQUNGLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDaEIsSUFBSSxJQUFJLEdBQVMsS0FBSyxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUN2RCxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2xCLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUMxRCxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDekQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQzNCO3lCQUFNO3dCQUNMLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUMzQjtvQkFDRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDekI7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLGFBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEI7UUFDSCxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUV2QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFVBQUMsS0FBSztZQUMzQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFLO1lBQ25ELElBQUk7Z0JBQ0YsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN0QztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLGFBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFLO1lBQ3BDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUN2RCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDbkMsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNwQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFFL0IsSUFBSTtnQkFDRixLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDekI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixhQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLO1lBQ3ZELEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNuQyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDcEMsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUUvQixJQUFJO2dCQUNGLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDekI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixhQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLO1lBQ3JELEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNuQyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDcEMsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUUvQixJQUFJO2dCQUNGLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDekI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixhQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsS0FBSztZQUN2QyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO2dCQUN6QixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUMxQjtZQUNELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxNQUFNLEVBQUU7Z0JBQ3hCLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtnQkFDM0IsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7YUFDNUI7WUFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFO2dCQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUN4QjtZQUVELEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUs7WUFDckMsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtnQkFDekIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDM0I7WUFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssTUFBTSxFQUFFO2dCQUN4QixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzthQUM3QjtZQUNELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRTtnQkFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDekI7WUFFRCxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEIscUJBQXFCLENBQUM7WUFDcEIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx1QkFBSSxHQUFKO1FBQUEsaUJBdUJDO1FBdEJDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQzlDO1FBRUQscUJBQXFCLENBQUM7WUFDcEIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLEdBQUcsR0FBVyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBRXJCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxHQUFXO1FBQW5CLGlCQXFCQztRQXBCQyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDdkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0IsR0FBRyxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7WUFDakMsR0FBRyxDQUFDLFVBQVUsR0FBRyxVQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQztZQUNGLEdBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBQyxLQUFLO2dCQUNqQixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO29CQUNyQyxLQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztvQkFDdkIsYUFBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLFVBQUMsQ0FBQztnQkFDZCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixDQUFDLENBQUM7WUFFRixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsSUFBWTtRQUNyQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsYUFBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUM7WUFDdkQsTUFBTSxLQUFLLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxpQ0FBYyxHQUFkLFVBQWUsSUFBWTtRQUEzQixpQkFTQztRQVJDLE9BQU8sSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN6QyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFjO2dCQUN4RCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBTTtnQkFDZCxhQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBaUIsR0FBakIsVUFBa0IsSUFBWTtRQUE5QixpQkFTQztRQVJDLE9BQU8sSUFBSSxPQUFPLENBQWMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUM5QyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFtQjtnQkFDbEUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQU07Z0JBQ2QsYUFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsK0JBQVksR0FBWixVQUFhLElBQVk7UUFBekIsaUJBU0M7UUFSQyxPQUFPLElBQUksT0FBTyxDQUFTLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDekMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBYztnQkFDN0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQU07Z0JBQ2QsYUFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQVUsR0FBVixVQUFXLElBQVk7UUFBdkIsaUJBU0M7UUFSQyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDdkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBWTtnQkFDcEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQU07Z0JBQ2QsYUFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNEJBQVMsR0FBVCxVQUFVLEdBQVc7UUFDbkIsSUFBSSxhQUFhLEdBQXFDLFNBQVMsQ0FBQztRQUNoRSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRTtRQUVELElBQU0sS0FBSyxHQUFVLElBQUkscUJBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxHQUFXO1FBQ25CLElBQUksYUFBYSxHQUFxQyxTQUFTLENBQUM7UUFDaEUsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQixhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUU7UUFFRCxJQUFNLEtBQUssR0FBVSxJQUFJLHFCQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyx5Q0FBc0IsR0FBOUIsVUFBK0IsR0FBVztRQUN4QyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVPLHFDQUFrQixHQUExQixVQUEyQixHQUFXO1FBQ3BDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUQ7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsNkJBQVUsR0FBVixVQUFXLEdBQVc7UUFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBTSxNQUFNLEdBQVcsSUFBSSx1QkFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLElBQU0sTUFBTSxHQUFXLElBQUksNkJBQVksQ0FBQyxJQUFJLENBQUMsUUFBOEIsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5SCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUU1QixPQUFPLE1BQU0sQ0FBQztTQUNmO0lBRUgsQ0FBQztJQUVELG9DQUFpQixHQUFqQixVQUFrQixHQUFXLEVBQUUsU0FBaUIsRUFBRSxVQUFrQixFQUFFLEtBQWE7UUFDakYsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBTSxPQUFPLEdBQVksSUFBSSx5QkFBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxJQUFNLE9BQU8sR0FBWSxJQUFJLHFDQUFpQixDQUFDLElBQUksQ0FBQyxRQUE4QixFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUVELDhCQUFXLEdBQVgsVUFBWSxHQUFXLEVBQUUsU0FBaUIsRUFBRSxVQUFrQjtRQUM1RCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNyQyxJQUFNLE9BQU8sR0FBWSxJQUFJLHlCQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTTtZQUNMLElBQU0sT0FBTyxHQUFZLElBQUkscUNBQWlCLENBQUMsSUFBSSxDQUFDLFFBQThCLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkssSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsT0FBTyxPQUFPLENBQUM7U0FDaEI7SUFDSCxDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLEdBQVcsRUFBRSxJQUFZO1FBQ2hDLE9BQU8sSUFBSSxtQkFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLElBQVksRUFBRSxPQUFpQztRQUF4RCxpQkFLQztRQUpDLElBQU0sS0FBSyxHQUFjLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsY0FBSSxJQUFJLFlBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQTVCLENBQTRCLENBQUM7SUFDL0QsQ0FBQztJQUVPLDJCQUFRLEdBQWhCLFVBQWlCLEdBQVc7UUFBNUIsaUJBdUJDO1FBdEJDLE9BQU8sSUFBSSxPQUFPLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN0Qyx5QkFBeUI7WUFDekIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBYztvQkFDL0UsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO2dCQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRTNCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBQyxLQUFLO29CQUNqQixJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUU7d0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7cUJBQzNCO2dCQUNILENBQUMsQ0FBQztnQkFDRixHQUFHLENBQUMsT0FBTyxHQUFHLFVBQUMsQ0FBQztvQkFDZCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osQ0FBQyxDQUFDO2dCQUVGLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNaO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxHQUFXLEVBQUUsU0FBb0M7UUFBMUQsaUJBb0NDO1FBbkNDLE9BQU8sSUFBSSxPQUFPLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN0Qyx5QkFBeUI7WUFDekIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBYztvQkFDbEQsSUFBSTt3QkFDRixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDaEUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNmO29CQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNWLGFBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsR0FBRyxDQUFDLENBQUM7d0JBQzVDLE1BQU0sQ0FBQyxDQUFDO3FCQUNUO2dCQUNILENBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFO29CQUNqRCxJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUM1RCxPQUFPO2lCQUNSO2dCQUNELElBQUksR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7Z0JBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFM0IsR0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFDLEtBQUs7b0JBQ2pCLElBQUksR0FBRyxDQUFDLFlBQVksRUFBRTt3QkFDcEIsSUFBTSxNQUFNLEdBQVcsR0FBRyxDQUFDLFlBQVksQ0FBQzt3QkFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7cUJBQzdEO2dCQUNILENBQUMsQ0FBQztnQkFDRixHQUFHLENBQUMsT0FBTyxHQUFHLFVBQUMsQ0FBQztvQkFDZCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osQ0FBQyxDQUFDO2dCQUVGLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNaO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHNDQUFtQixHQUFuQjtRQUNFLE9BQU8sQ0FBTyxNQUFNLENBQUMsU0FBVSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwSCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFNLFFBQVEsR0FBRyxpSEFBaUgsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRTNLLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0UsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDdkQsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDRSxPQUFPO1lBQ0wsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEIsTUFBTTtZQUNOLFFBQVE7WUFDUixNQUFNO1NBQ1AsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDaEMsMkJBQTJCO2VBQ3hCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksWUFBWSxJQUFJLFFBQVEsQ0FBQztJQUN4RSxDQUFDO0lBRUQsMEJBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLHFDQUFxQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0osQ0FBQztJQUVELGlDQUFjLEdBQWQsVUFBZSxDQUFTO1FBQ3RCLHFCQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0UsT0FBTyxxQkFBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxpQ0FBYyxHQUFkLFVBQWUsQ0FBUztRQUN0QixxQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNFLE9BQU8scUJBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3R0QkQ7SUFBQTtJQWlCQSxDQUFDO0lBaEJRLGVBQVUsR0FBVyxRQUFRLENBQUM7SUFDOUIsY0FBUyxHQUFXLE9BQU8sQ0FBQztJQUM1QixhQUFRLEdBQVcsV0FBVyxDQUFDO0lBQy9CLGNBQVMsR0FBVyxZQUFZLENBQUM7SUFDakMsV0FBTSxHQUFXLFNBQVMsQ0FBQztJQUMzQixhQUFRLEdBQVcsV0FBVyxDQUFDO0lBQy9CLGNBQVMsR0FBVyxHQUFHLENBQUM7SUFDeEIsVUFBSyxHQUFXLEdBQUcsQ0FBQztJQUNwQixVQUFLLEdBQVcsR0FBRyxDQUFDO0lBQ3BCLFVBQUssR0FBVyxHQUFHLENBQUM7SUFDcEIsVUFBSyxHQUFXLEdBQUcsQ0FBQztJQUNwQixVQUFLLEdBQVcsR0FBRyxDQUFDO0lBQ3BCLGdCQUFXLEdBQVcsU0FBUyxDQUFDO0lBQ2hDLGFBQVEsR0FBVyxNQUFNLENBQUM7SUFDMUIsWUFBTyxHQUFXLEtBQUssQ0FBQztJQUN4QixZQUFPLEdBQVcsS0FBSyxDQUFDO0lBQ2pDLFdBQUM7Q0FBQTtBQWpCWSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDQWpCO0lBQUE7SUFtQ0EsQ0FBQztJQTdCVSxXQUFHLEdBQVY7UUFBVyxjQUFZO2FBQVosVUFBWSxFQUFaLHFCQUFZLEVBQVosSUFBWTtZQUFaLHlCQUFZOztRQUNuQixJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sRUFBUSxJQUFJLEVBQUU7U0FDeEI7SUFDTCxDQUFDO0lBRU0sWUFBSSxHQUFYO1FBQVksY0FBWTthQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7WUFBWix5QkFBWTs7UUFDcEIsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLEVBQVMsSUFBSSxFQUFFO1NBQ3pCO0lBQ0wsQ0FBQztJQUVNLGFBQUssR0FBWjtRQUFhLGNBQVk7YUFBWixVQUFZLEVBQVoscUJBQVksRUFBWixJQUFZO1lBQVoseUJBQVk7O1FBQ3JCLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU8sQ0FBQyxLQUFLLE9BQWIsT0FBTyxFQUFVLElBQUksRUFBRTtTQUMxQjtJQUNMLENBQUM7SUFFTSxZQUFJLEdBQVg7UUFBWSxjQUFZO2FBQVosVUFBWSxFQUFaLHFCQUFZLEVBQVosSUFBWTtZQUFaLHlCQUFZOztRQUNwQixJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sRUFBUyxJQUFJLEVBQUU7U0FDekI7SUFDTCxDQUFDO0lBRU0sYUFBSyxHQUFaO1FBQWEsY0FBWTthQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7WUFBWix5QkFBWTs7UUFDckIsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTyxDQUFDLEtBQUssT0FBYixPQUFPLEVBQVUsSUFBSSxFQUFFO1NBQzFCO0lBQ0wsQ0FBQztJQWpDTSxZQUFJLEdBQVksSUFBSSxDQUFDO0lBQ3JCLGFBQUssR0FBWSxJQUFJLENBQUM7SUFDdEIsWUFBSSxHQUFZLElBQUksQ0FBQztJQUNyQixhQUFLLEdBQVksS0FBSyxDQUFDO0lBK0JsQyxjQUFDO0NBQUE7QUFuQ1ksMEJBQU87Ozs7Ozs7Ozs7Ozs7OztBQ0FwQix5RkFBNEQ7QUFZNUQsSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ25CLGlEQUFNO0lBQ04sdURBQVM7SUFDVCwrQ0FBSztBQUNULENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QjtBQVVEO0lBQUE7UUFDWSxpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUV6QixXQUFNLEdBQWlCLEVBQUU7UUFDekIsY0FBUyxHQUFXLENBQUM7UUFDckIsY0FBUyxHQUFXLENBQUM7UUFDckIsZUFBVSxHQUFrQyxFQUFFO0lBdUYxRCxDQUFDO0lBckZHLDZCQUFRLEdBQVIsVUFBUyxJQUFZLEVBQUUsTUFBYyxFQUFFLFdBQW1CLEVBQUUsS0FBYSxFQUFFLE1BQW1CO1FBQzFGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDcEIsSUFBSTtZQUFFLE1BQU07WUFBRSxZQUFZLEVBQUUsV0FBVyxHQUFHLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxHQUFHLEtBQUs7WUFBRSxNQUFNO1NBQ3ZGO1FBQ0QsT0FBTyxJQUFJO0lBQ2YsQ0FBQztJQUVELHNCQUFJLG1DQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUVELFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BSkE7SUFNRCwyQkFBTSxHQUFOLFVBQU8sQ0FBUyxFQUFFLENBQVM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFO0lBQ3hCLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0ksS0FBb0IsVUFBVyxFQUFYLFNBQUksQ0FBQyxNQUFNLEVBQVgsY0FBVyxFQUFYLElBQVcsRUFBRTtZQUE1QixJQUFNLEtBQUs7WUFDWixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtTQUN0QjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRTtJQUNwQixDQUFDO0lBRUQseUJBQUksR0FBSixVQUFLLEtBQVksRUFBRSxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxDQUFVLEVBQUUsQ0FBVTtRQUEzRSxpQkF5QkM7UUF4QkcsbUVBQW1FO1FBQ25FLElBQUksQ0FBQyx5QkFBYSxFQUFFO1lBQ2hCLE9BQU87U0FDVjtRQUVELElBQU0sSUFBSSxHQUFjLEtBQUs7UUFDN0IsSUFBTSxNQUFNLEdBQUcseUJBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFNLElBQUksR0FBRyx5QkFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLElBQU0sS0FBSyxHQUFlO1lBQ3RCLENBQUM7WUFBRSxDQUFDO1lBQUUsTUFBTTtZQUNaLE1BQU07WUFBRSxJQUFJO1lBQUUsUUFBUTtTQUN6QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUU7WUFDL0IsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDNUIsMEVBQTBFO1FBQzlFLENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxLQUFLLEVBQUU7UUFDZCw0RUFBNEU7SUFDaEYsQ0FBQztJQUVPLGtDQUFhLEdBQXJCO1FBQ0ksS0FBb0IsVUFBVyxFQUFYLFNBQUksQ0FBQyxNQUFNLEVBQVgsY0FBVyxFQUFYLElBQVcsRUFBRTtZQUE1QixJQUFNLEtBQUs7WUFDWixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssRUFBRSx5QkFBYSxDQUFDLFdBQVcsQ0FBQztTQUM1RTtJQUNMLENBQUM7SUFFTyxvQ0FBZSxHQUF2QixVQUF3QixLQUFpQjtRQUNyQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDaEQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWTtTQUMxQztRQUVELElBQUksS0FBSyxDQUFDLENBQUMsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDaEQsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVk7U0FDNUQ7UUFDRCxJQUFNLEVBQUUsR0FBVyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTO1FBQzNDLElBQU0sRUFBRSxHQUFXLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVM7UUFDM0MsSUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3ZELG1DQUFtQztRQUNuQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRSxRQUFRLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDckIsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxTQUFTO1lBQ3pFLEtBQUssV0FBVyxDQUFDLFNBQVM7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLFNBQVM7WUFDckYsS0FBSyxXQUFXLENBQUMsS0FBSztnQkFDbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVM7U0FDcEc7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDO0FBN0ZZLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUN4QnZCLDhEQUFpQztBQUlqQztJQU9FLG9CQUFZLEdBQVcsRUFBRSxhQUEwQyxFQUFFLEdBQW9DO1FBQXpHLGlCQTJCQztRQTNCb0UscUNBQW9DO1FBTnpHLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBS3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRztZQUNuQixhQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRztZQUNsQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFFaEMsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBdUI7b0JBQ3ZELEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDckIsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNwQjtRQUNILENBQUMsQ0FBQztRQUVGLElBQUksYUFBYSxFQUFFO1lBQ2pCLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFjO2dCQUNoQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxPQUFPLEdBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFDLFVBQVUsR0FBQyxNQUFNLENBQUM7WUFDekUsQ0FBQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCx5QkFBSSxHQUFKLFVBQUssUUFBa0IsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUMzQyxJQUFNLEdBQUcsR0FBSSxRQUF5QixDQUFDLEdBQUcsQ0FBQztRQUMzQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQVcsUUFBa0IsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQ2hGLElBQU0sR0FBRyxHQUFJLFFBQXlCLENBQUMsR0FBRyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQscUNBQWdCLEdBQWhCO0lBQ0EsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQztBQWhEWSxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7O0FDRnZCO0lBR0Usa0JBQVksR0FBVyxFQUFFLElBQVk7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxLQUFLLENBQUMsU0FBUyxHQUFHLDRCQUE0QixHQUFDLElBQUksR0FBQyxjQUFjLEdBQUMsR0FBRyxHQUFDLDRCQUE0QixHQUFDLElBQUksR0FBQyxLQUFLLENBQUM7UUFDL0csUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHdCQUFLLEdBQUwsVUFBTSxHQUE2QixFQUFFLElBQVk7UUFDL0MsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBZFksNEJBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ0RyQixpRkFBc0M7QUFLdEMsSUFBSSxTQUFTLEdBQUcsT0FBTyxjQUFjLEtBQUssV0FBVyxDQUFDO0FBRXREO0lBSUUsdUJBQVksTUFBeUIsRUFBRSxHQUE2QjtRQUNsRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsK0JBQU8sR0FBUDtJQUNBLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzVCLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsS0FBYSxFQUFFLE1BQWM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDO0FBRUQ7SUFPRSxvQkFBWSxNQUF5QjtRQUZyQyxTQUFJLEdBQVcsTUFBTSxDQUFDO1FBR3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxRQUFrQixFQUFFLENBQVMsRUFBRSxDQUFTO1FBQzNDLElBQU0sR0FBRyxHQUFJLFFBQXlCLENBQUMsR0FBRyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxRQUFrQixFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDaEYsSUFBTSxHQUFHLEdBQUksUUFBeUIsQ0FBQyxHQUFHLENBQUM7UUFDM0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQ0FBZ0IsR0FBaEI7SUFDQSxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDO0FBRUQ7SUFRRTtRQUhBLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFxQixJQUFJLENBQUM7UUFHakMsSUFBSSxDQUFDLE1BQU0sR0FBdUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsR0FBRyxHQUE4QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFakIsSUFBSSxDQUFDLEdBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUM7UUFFdkQsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1NBQ2xEO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLG1CQUFRLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0UsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELGtDQUFXLEdBQVg7SUFFQSxDQUFDO0lBRUQsZ0NBQVMsR0FBVDtJQUVBLENBQUM7SUFFRCx3Q0FBaUIsR0FBakI7SUFDQSxDQUFDO0lBRUQsMkNBQW9CLEdBQXBCO0lBQ0EsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDUyxJQUFJLENBQUMsR0FBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQztRQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztRQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQ3RELElBQUksVUFBVSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDOUIsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNFLElBQU0sTUFBTSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQU0sR0FBRyxHQUFvQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksR0FBRyxFQUFFO1lBQ0EsR0FBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztZQUNoRCxHQUFHLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1lBQzNCLE1BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztZQUNuQyxNQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQztZQUVsRCxPQUFPLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUVELG1DQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELHNDQUFlLEdBQWYsVUFBZ0IsTUFBd0I7UUFDdEMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsR0FBRyxHQUFJLE1BQXdCLENBQUMsR0FBRyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsTUFBaUI7UUFDdEIsSUFBSSxDQUFDLEdBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUUsTUFBd0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCwwQ0FBbUIsR0FBbkIsVUFBb0IsTUFBaUIsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQ2pGLElBQUksQ0FBQyxHQUFJLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFFLE1BQXdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxpREFBMEIsR0FBMUIsVUFBMkIsTUFBaUIsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLE1BQWMsRUFBRSxPQUFlLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhLEVBQUUsTUFBYztRQUNqSixJQUFJLENBQUMsR0FBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBRSxNQUF3QixDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsVUFBa0I7UUFDMUIsSUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdGLElBQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDL0YsSUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ3RFLElBQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUN4RSxJQUFNLFlBQVksR0FBVyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQ3BELElBQU0sYUFBYSxHQUFXLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMvQyxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCwyQkFBSSxHQUFKOztRQUNFLElBQU0sTUFBTSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpDLFlBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RCxPQUFPLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRUQsMkJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELDBCQUFHLEdBQUg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsQ0FBUyxFQUFFLENBQVM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sQ0FBUyxFQUFFLENBQVM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxJQUFVO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLElBQVk7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxxQ0FBYyxHQUFkLFVBQWUsSUFBWTtRQUN6QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLENBQVMsRUFBRSxDQUFTLEVBQUUsSUFBWSxFQUFFLEdBQVc7UUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxJQUFZO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXlCLEdBQUcsSUFBSSxDQUFDO0lBQ25ELENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsQ0FBUyxFQUFFLENBQVMsRUFBRSxNQUFjLEVBQUUsR0FBVyxFQUFFLEtBQWE7UUFDekUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxDQUFTLEVBQUUsQ0FBUyxFQUFFLE1BQWMsRUFBRSxHQUFXO1FBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQUUsR0FBVztRQUN2RSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxRQUFrQjtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxHQUFXLEVBQUUsS0FBaUI7UUFBakIsaUNBQWlCO1FBQ3JGLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsQ0FBUyxFQUFFLENBQVMsRUFBRSxNQUFjO1FBQzdDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQUUsTUFBYztRQUNsRixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7UUFDckQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQztBQS9QWSxvQ0FBWTs7Ozs7Ozs7Ozs7Ozs7O0FDaEV6QixTQUFTLFFBQVEsQ0FBQyxHQUFXO0lBQ3pCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM1QixJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBRXJCLE9BQU8sRUFBQyxDQUFDLEtBQUUsQ0FBQyxLQUFFLENBQUMsS0FBQztBQUNwQixDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsSUFBUyxFQUFFLElBQVM7SUFDaEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsSUFBSSxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNyQixJQUFJLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNqRSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzFCLElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzFCLElBQUksVUFBVSxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLElBQUksVUFBVSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLElBQUksVUFBVSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQyxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ3BGLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FBQyxHQUFRO0lBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNuRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ25FLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDbkUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDckQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDckQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDckQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBQyxHQUFHLENBQUM7SUFDN0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FB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QixFQUFFLFNBQVM7UUFDM0IsWUFBWSxFQUFFLFNBQVM7UUFDdkIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsY0FBYyxFQUFFLFNBQVM7UUFDekIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsVUFBVSxFQUFFLFNBQVM7UUFDckIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsTUFBTSxFQUFFLFNBQVM7UUFDakIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsVUFBVSxFQUFFLFNBQVM7UUFDckIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsVUFBVSxFQUFFLFNBQVM7UUFDckIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsY0FBYyxFQUFFLFNBQVM7UUFDekIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyxXQUFXLEVBQUUsU0FBUztRQUN0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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFTztBQUNQLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUIsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUIsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUIsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7VUNobUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3V0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndXRlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLyohXG5cbkpTWmlwIHYzLjcuMSAtIEEgSmF2YVNjcmlwdCBjbGFzcyBmb3IgZ2VuZXJhdGluZyBhbmQgcmVhZGluZyB6aXAgZmlsZXNcbjxodHRwOi8vc3R1YXJ0ay5jb20vanN6aXA+XG5cbihjKSAyMDA5LTIwMTYgU3R1YXJ0IEtuaWdodGxleSA8c3R1YXJ0IFthdF0gc3R1YXJ0ay5jb20+XG5EdWFsIGxpY2VuY2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBvciBHUEx2My4gU2VlIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vU3R1ay9qc3ppcC9tYXN0ZXIvTElDRU5TRS5tYXJrZG93bi5cblxuSlNaaXAgdXNlcyB0aGUgbGlicmFyeSBwYWtvIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSA6XG5odHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL3Bha28vYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cblxuIWZ1bmN0aW9uKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sdCk7ZWxzZXsoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzKS5KU1ppcD10KCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiBzKGEsbyxoKXtmdW5jdGlvbiB1KHIsdCl7aWYoIW9bcl0pe2lmKCFhW3JdKXt2YXIgZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCF0JiZlKXJldHVybiBlKHIsITApO2lmKGwpcmV0dXJuIGwociwhMCk7dmFyIGk9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIityK1wiJ1wiKTt0aHJvdyBpLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsaX12YXIgbj1vW3JdPXtleHBvcnRzOnt9fTthW3JdWzBdLmNhbGwobi5leHBvcnRzLGZ1bmN0aW9uKHQpe3ZhciBlPWFbcl1bMV1bdF07cmV0dXJuIHUoZXx8dCl9LG4sbi5leHBvcnRzLHMsYSxvLGgpfXJldHVybiBvW3JdLmV4cG9ydHN9Zm9yKHZhciBsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsdD0wO3Q8aC5sZW5ndGg7dCsrKXUoaFt0XSk7cmV0dXJuIHV9KHsxOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9dChcIi4vdXRpbHNcIiksZD10KFwiLi9zdXBwb3J0XCIpLHA9XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiO3IuZW5jb2RlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyLGksbixzLGEsbyxoPVtdLHU9MCxsPXQubGVuZ3RoLGY9bCxkPVwic3RyaW5nXCIhPT1jLmdldFR5cGVPZih0KTt1PHQubGVuZ3RoOylmPWwtdSxpPWQ/KGU9dFt1KytdLHI9dTxsP3RbdSsrXTowLHU8bD90W3UrK106MCk6KGU9dC5jaGFyQ29kZUF0KHUrKykscj11PGw/dC5jaGFyQ29kZUF0KHUrKyk6MCx1PGw/dC5jaGFyQ29kZUF0KHUrKyk6MCksbj1lPj4yLHM9KDMmZSk8PDR8cj4+NCxhPTE8Zj8oMTUmcik8PDJ8aT4+Njo2NCxvPTI8Zj82MyZpOjY0LGgucHVzaChwLmNoYXJBdChuKStwLmNoYXJBdChzKStwLmNoYXJBdChhKStwLmNoYXJBdChvKSk7cmV0dXJuIGguam9pbihcIlwiKX0sci5kZWNvZGU9ZnVuY3Rpb24odCl7dmFyIGUscixpLG4scyxhLG89MCxoPTAsdT1cImRhdGE6XCI7aWYodC5zdWJzdHIoMCx1Lmxlbmd0aCk9PT11KXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGlucHV0LCBpdCBsb29rcyBsaWtlIGEgZGF0YSB1cmwuXCIpO3ZhciBsLGY9MyoodD10LnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLFwiXCIpKS5sZW5ndGgvNDtpZih0LmNoYXJBdCh0Lmxlbmd0aC0xKT09PXAuY2hhckF0KDY0KSYmZi0tLHQuY2hhckF0KHQubGVuZ3RoLTIpPT09cC5jaGFyQXQoNjQpJiZmLS0sZiUxIT0wKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGlucHV0LCBiYWQgY29udGVudCBsZW5ndGguXCIpO2ZvcihsPWQudWludDhhcnJheT9uZXcgVWludDhBcnJheSgwfGYpOm5ldyBBcnJheSgwfGYpO288dC5sZW5ndGg7KWU9cC5pbmRleE9mKHQuY2hhckF0KG8rKykpPDwyfChuPXAuaW5kZXhPZih0LmNoYXJBdChvKyspKSk+PjQscj0oMTUmbik8PDR8KHM9cC5pbmRleE9mKHQuY2hhckF0KG8rKykpKT4+MixpPSgzJnMpPDw2fChhPXAuaW5kZXhPZih0LmNoYXJBdChvKyspKSksbFtoKytdPWUsNjQhPT1zJiYobFtoKytdPXIpLDY0IT09YSYmKGxbaCsrXT1pKTtyZXR1cm4gbH19LHtcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGlsc1wiOjMyfV0sMjpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuL2V4dGVybmFsXCIpLG49dChcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIikscz10KFwiLi9zdHJlYW0vQ3JjMzJQcm9iZVwiKSxhPXQoXCIuL3N0cmVhbS9EYXRhTGVuZ3RoUHJvYmVcIik7ZnVuY3Rpb24gbyh0LGUscixpLG4pe3RoaXMuY29tcHJlc3NlZFNpemU9dCx0aGlzLnVuY29tcHJlc3NlZFNpemU9ZSx0aGlzLmNyYzMyPXIsdGhpcy5jb21wcmVzc2lvbj1pLHRoaXMuY29tcHJlc3NlZENvbnRlbnQ9bn1vLnByb3RvdHlwZT17Z2V0Q29udGVudFdvcmtlcjpmdW5jdGlvbigpe3ZhciB0PW5ldyBuKGkuUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcHJlc3NlZENvbnRlbnQpKS5waXBlKHRoaXMuY29tcHJlc3Npb24udW5jb21wcmVzc1dvcmtlcigpKS5waXBlKG5ldyBhKFwiZGF0YV9sZW5ndGhcIikpLGU9dGhpcztyZXR1cm4gdC5vbihcImVuZFwiLGZ1bmN0aW9uKCl7aWYodGhpcy5zdHJlYW1JbmZvLmRhdGFfbGVuZ3RoIT09ZS51bmNvbXByZXNzZWRTaXplKXRocm93IG5ldyBFcnJvcihcIkJ1ZyA6IHVuY29tcHJlc3NlZCBkYXRhIHNpemUgbWlzbWF0Y2hcIil9KSx0fSxnZXRDb21wcmVzc2VkV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBuKGkuUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcHJlc3NlZENvbnRlbnQpKS53aXRoU3RyZWFtSW5mbyhcImNvbXByZXNzZWRTaXplXCIsdGhpcy5jb21wcmVzc2VkU2l6ZSkud2l0aFN0cmVhbUluZm8oXCJ1bmNvbXByZXNzZWRTaXplXCIsdGhpcy51bmNvbXByZXNzZWRTaXplKS53aXRoU3RyZWFtSW5mbyhcImNyYzMyXCIsdGhpcy5jcmMzMikud2l0aFN0cmVhbUluZm8oXCJjb21wcmVzc2lvblwiLHRoaXMuY29tcHJlc3Npb24pfX0sby5jcmVhdGVXb3JrZXJGcm9tPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gdC5waXBlKG5ldyBzKS5waXBlKG5ldyBhKFwidW5jb21wcmVzc2VkU2l6ZVwiKSkucGlwZShlLmNvbXByZXNzV29ya2VyKHIpKS5waXBlKG5ldyBhKFwiY29tcHJlc3NlZFNpemVcIikpLndpdGhTdHJlYW1JbmZvKFwiY29tcHJlc3Npb25cIixlKX0sZS5leHBvcnRzPW99LHtcIi4vZXh0ZXJuYWxcIjo2LFwiLi9zdHJlYW0vQ3JjMzJQcm9iZVwiOjI1LFwiLi9zdHJlYW0vRGF0YUxlbmd0aFByb2JlXCI6MjYsXCIuL3N0cmVhbS9EYXRhV29ya2VyXCI6Mjd9XSwzOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIik7ci5TVE9SRT17bWFnaWM6XCJcXDBcXDBcIixjb21wcmVzc1dvcmtlcjpmdW5jdGlvbih0KXtyZXR1cm4gbmV3IGkoXCJTVE9SRSBjb21wcmVzc2lvblwiKX0sdW5jb21wcmVzc1dvcmtlcjpmdW5jdGlvbigpe3JldHVybiBuZXcgaShcIlNUT1JFIGRlY29tcHJlc3Npb25cIil9fSxyLkRFRkxBVEU9dChcIi4vZmxhdGVcIil9LHtcIi4vZmxhdGVcIjo3LFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4fV0sNDpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuL3V0aWxzXCIpO3ZhciBvPWZ1bmN0aW9uKCl7Zm9yKHZhciB0LGU9W10scj0wO3I8MjU2O3IrKyl7dD1yO2Zvcih2YXIgaT0wO2k8ODtpKyspdD0xJnQ/Mzk4ODI5MjM4NF50Pj4+MTp0Pj4+MTtlW3JdPXR9cmV0dXJuIGV9KCk7ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHZvaWQgMCE9PXQmJnQubGVuZ3RoP1wic3RyaW5nXCIhPT1pLmdldFR5cGVPZih0KT9mdW5jdGlvbih0LGUscixpKXt2YXIgbj1vLHM9aStyO3RePS0xO2Zvcih2YXIgYT1pO2E8czthKyspdD10Pj4+OF5uWzI1NSYodF5lW2FdKV07cmV0dXJuLTFedH0oMHxlLHQsdC5sZW5ndGgsMCk6ZnVuY3Rpb24odCxlLHIsaSl7dmFyIG49byxzPWkrcjt0Xj0tMTtmb3IodmFyIGE9aTthPHM7YSsrKXQ9dD4+PjheblsyNTUmKHReZS5jaGFyQ29kZUF0KGEpKV07cmV0dXJuLTFedH0oMHxlLHQsdC5sZW5ndGgsMCk6MH19LHtcIi4vdXRpbHNcIjozMn1dLDU6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtyLmJhc2U2ND0hMSxyLmJpbmFyeT0hMSxyLmRpcj0hMSxyLmNyZWF0ZUZvbGRlcnM9ITAsci5kYXRlPW51bGwsci5jb21wcmVzc2lvbj1udWxsLHIuY29tcHJlc3Npb25PcHRpb25zPW51bGwsci5jb21tZW50PW51bGwsci51bml4UGVybWlzc2lvbnM9bnVsbCxyLmRvc1Blcm1pc3Npb25zPW51bGx9LHt9XSw2OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9bnVsbDtpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlP1Byb21pc2U6dChcImxpZVwiKSxlLmV4cG9ydHM9e1Byb21pc2U6aX19LHtsaWU6Mzd9XSw3OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4QXJyYXkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50MTZBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQzMkFycmF5LG49dChcInBha29cIikscz10KFwiLi91dGlsc1wiKSxhPXQoXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpLG89aT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCI7ZnVuY3Rpb24gaCh0LGUpe2EuY2FsbCh0aGlzLFwiRmxhdGVXb3JrZXIvXCIrdCksdGhpcy5fcGFrbz1udWxsLHRoaXMuX3Bha29BY3Rpb249dCx0aGlzLl9wYWtvT3B0aW9ucz1lLHRoaXMubWV0YT17fX1yLm1hZ2ljPVwiXFxiXFwwXCIscy5pbmhlcml0cyhoLGEpLGgucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbih0KXt0aGlzLm1ldGE9dC5tZXRhLG51bGw9PT10aGlzLl9wYWtvJiZ0aGlzLl9jcmVhdGVQYWtvKCksdGhpcy5fcGFrby5wdXNoKHMudHJhbnNmb3JtVG8obyx0LmRhdGEpLCExKX0saC5wcm90b3R5cGUuZmx1c2g9ZnVuY3Rpb24oKXthLnByb3RvdHlwZS5mbHVzaC5jYWxsKHRoaXMpLG51bGw9PT10aGlzLl9wYWtvJiZ0aGlzLl9jcmVhdGVQYWtvKCksdGhpcy5fcGFrby5wdXNoKFtdLCEwKX0saC5wcm90b3R5cGUuY2xlYW5VcD1mdW5jdGlvbigpe2EucHJvdG90eXBlLmNsZWFuVXAuY2FsbCh0aGlzKSx0aGlzLl9wYWtvPW51bGx9LGgucHJvdG90eXBlLl9jcmVhdGVQYWtvPWZ1bmN0aW9uKCl7dGhpcy5fcGFrbz1uZXcgblt0aGlzLl9wYWtvQWN0aW9uXSh7cmF3OiEwLGxldmVsOnRoaXMuX3Bha29PcHRpb25zLmxldmVsfHwtMX0pO3ZhciBlPXRoaXM7dGhpcy5fcGFrby5vbkRhdGE9ZnVuY3Rpb24odCl7ZS5wdXNoKHtkYXRhOnQsbWV0YTplLm1ldGF9KX19LHIuY29tcHJlc3NXb3JrZXI9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBoKFwiRGVmbGF0ZVwiLHQpfSxyLnVuY29tcHJlc3NXb3JrZXI9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGgoXCJJbmZsYXRlXCIse30pfX0se1wiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi91dGlsc1wiOjMyLHBha286Mzh9XSw4OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gQSh0LGUpe3ZhciByLGk9XCJcIjtmb3Iocj0wO3I8ZTtyKyspaSs9U3RyaW5nLmZyb21DaGFyQ29kZSgyNTUmdCksdD4+Pj04O3JldHVybiBpfWZ1bmN0aW9uIGkodCxlLHIsaSxuLHMpe3ZhciBhLG8saD10LmZpbGUsdT10LmNvbXByZXNzaW9uLGw9cyE9PU8udXRmOGVuY29kZSxmPUkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIixzKGgubmFtZSkpLGQ9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLE8udXRmOGVuY29kZShoLm5hbWUpKSxjPWguY29tbWVudCxwPUkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIixzKGMpKSxtPUkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIixPLnV0ZjhlbmNvZGUoYykpLF89ZC5sZW5ndGghPT1oLm5hbWUubGVuZ3RoLGc9bS5sZW5ndGghPT1jLmxlbmd0aCxiPVwiXCIsdj1cIlwiLHk9XCJcIix3PWguZGlyLGs9aC5kYXRlLHg9e2NyYzMyOjAsY29tcHJlc3NlZFNpemU6MCx1bmNvbXByZXNzZWRTaXplOjB9O2UmJiFyfHwoeC5jcmMzMj10LmNyYzMyLHguY29tcHJlc3NlZFNpemU9dC5jb21wcmVzc2VkU2l6ZSx4LnVuY29tcHJlc3NlZFNpemU9dC51bmNvbXByZXNzZWRTaXplKTt2YXIgUz0wO2UmJihTfD04KSxsfHwhXyYmIWd8fChTfD0yMDQ4KTt2YXIgej0wLEM9MDt3JiYoenw9MTYpLFwiVU5JWFwiPT09bj8oQz03OTgsenw9ZnVuY3Rpb24odCxlKXt2YXIgcj10O3JldHVybiB0fHwocj1lPzE2ODkzOjMzMjA0KSwoNjU1MzUmcik8PDE2fShoLnVuaXhQZXJtaXNzaW9ucyx3KSk6KEM9MjAsenw9ZnVuY3Rpb24odCl7cmV0dXJuIDYzJih0fHwwKX0oaC5kb3NQZXJtaXNzaW9ucykpLGE9ay5nZXRVVENIb3VycygpLGE8PD02LGF8PWsuZ2V0VVRDTWludXRlcygpLGE8PD01LGF8PWsuZ2V0VVRDU2Vjb25kcygpLzIsbz1rLmdldFVUQ0Z1bGxZZWFyKCktMTk4MCxvPDw9NCxvfD1rLmdldFVUQ01vbnRoKCkrMSxvPDw9NSxvfD1rLmdldFVUQ0RhdGUoKSxfJiYodj1BKDEsMSkrQShCKGYpLDQpK2QsYis9XCJ1cFwiK0Eodi5sZW5ndGgsMikrdiksZyYmKHk9QSgxLDEpK0EoQihwKSw0KSttLGIrPVwidWNcIitBKHkubGVuZ3RoLDIpK3kpO3ZhciBFPVwiXCI7cmV0dXJuIEUrPVwiXFxuXFwwXCIsRSs9QShTLDIpLEUrPXUubWFnaWMsRSs9QShhLDIpLEUrPUEobywyKSxFKz1BKHguY3JjMzIsNCksRSs9QSh4LmNvbXByZXNzZWRTaXplLDQpLEUrPUEoeC51bmNvbXByZXNzZWRTaXplLDQpLEUrPUEoZi5sZW5ndGgsMiksRSs9QShiLmxlbmd0aCwyKSx7ZmlsZVJlY29yZDpSLkxPQ0FMX0ZJTEVfSEVBREVSK0UrZitiLGRpclJlY29yZDpSLkNFTlRSQUxfRklMRV9IRUFERVIrQShDLDIpK0UrQShwLmxlbmd0aCwyKStcIlxcMFxcMFxcMFxcMFwiK0Eoeiw0KStBKGksNCkrZitiK3B9fXZhciBJPXQoXCIuLi91dGlsc1wiKSxuPXQoXCIuLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKSxPPXQoXCIuLi91dGY4XCIpLEI9dChcIi4uL2NyYzMyXCIpLFI9dChcIi4uL3NpZ25hdHVyZVwiKTtmdW5jdGlvbiBzKHQsZSxyLGkpe24uY2FsbCh0aGlzLFwiWmlwRmlsZVdvcmtlclwiKSx0aGlzLmJ5dGVzV3JpdHRlbj0wLHRoaXMuemlwQ29tbWVudD1lLHRoaXMuemlwUGxhdGZvcm09cix0aGlzLmVuY29kZUZpbGVOYW1lPWksdGhpcy5zdHJlYW1GaWxlcz10LHRoaXMuYWNjdW11bGF0ZT0hMSx0aGlzLmNvbnRlbnRCdWZmZXI9W10sdGhpcy5kaXJSZWNvcmRzPVtdLHRoaXMuY3VycmVudFNvdXJjZU9mZnNldD0wLHRoaXMuZW50cmllc0NvdW50PTAsdGhpcy5jdXJyZW50RmlsZT1udWxsLHRoaXMuX3NvdXJjZXM9W119SS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24odCl7dmFyIGU9dC5tZXRhLnBlcmNlbnR8fDAscj10aGlzLmVudHJpZXNDb3VudCxpPXRoaXMuX3NvdXJjZXMubGVuZ3RoO3RoaXMuYWNjdW11bGF0ZT90aGlzLmNvbnRlbnRCdWZmZXIucHVzaCh0KToodGhpcy5ieXRlc1dyaXR0ZW4rPXQuZGF0YS5sZW5ndGgsbi5wcm90b3R5cGUucHVzaC5jYWxsKHRoaXMse2RhdGE6dC5kYXRhLG1ldGE6e2N1cnJlbnRGaWxlOnRoaXMuY3VycmVudEZpbGUscGVyY2VudDpyPyhlKzEwMCooci1pLTEpKS9yOjEwMH19KSl9LHMucHJvdG90eXBlLm9wZW5lZFNvdXJjZT1mdW5jdGlvbih0KXt0aGlzLmN1cnJlbnRTb3VyY2VPZmZzZXQ9dGhpcy5ieXRlc1dyaXR0ZW4sdGhpcy5jdXJyZW50RmlsZT10LmZpbGUubmFtZTt2YXIgZT10aGlzLnN0cmVhbUZpbGVzJiYhdC5maWxlLmRpcjtpZihlKXt2YXIgcj1pKHQsZSwhMSx0aGlzLmN1cnJlbnRTb3VyY2VPZmZzZXQsdGhpcy56aXBQbGF0Zm9ybSx0aGlzLmVuY29kZUZpbGVOYW1lKTt0aGlzLnB1c2goe2RhdGE6ci5maWxlUmVjb3JkLG1ldGE6e3BlcmNlbnQ6MH19KX1lbHNlIHRoaXMuYWNjdW11bGF0ZT0hMH0scy5wcm90b3R5cGUuY2xvc2VkU291cmNlPWZ1bmN0aW9uKHQpe3RoaXMuYWNjdW11bGF0ZT0hMTt2YXIgZT10aGlzLnN0cmVhbUZpbGVzJiYhdC5maWxlLmRpcixyPWkodCxlLCEwLHRoaXMuY3VycmVudFNvdXJjZU9mZnNldCx0aGlzLnppcFBsYXRmb3JtLHRoaXMuZW5jb2RlRmlsZU5hbWUpO2lmKHRoaXMuZGlyUmVjb3Jkcy5wdXNoKHIuZGlyUmVjb3JkKSxlKXRoaXMucHVzaCh7ZGF0YTpmdW5jdGlvbih0KXtyZXR1cm4gUi5EQVRBX0RFU0NSSVBUT1IrQSh0LmNyYzMyLDQpK0EodC5jb21wcmVzc2VkU2l6ZSw0KStBKHQudW5jb21wcmVzc2VkU2l6ZSw0KX0odCksbWV0YTp7cGVyY2VudDoxMDB9fSk7ZWxzZSBmb3IodGhpcy5wdXNoKHtkYXRhOnIuZmlsZVJlY29yZCxtZXRhOntwZXJjZW50OjB9fSk7dGhpcy5jb250ZW50QnVmZmVyLmxlbmd0aDspdGhpcy5wdXNoKHRoaXMuY29udGVudEJ1ZmZlci5zaGlmdCgpKTt0aGlzLmN1cnJlbnRGaWxlPW51bGx9LHMucHJvdG90eXBlLmZsdXNoPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMuYnl0ZXNXcml0dGVuLGU9MDtlPHRoaXMuZGlyUmVjb3Jkcy5sZW5ndGg7ZSsrKXRoaXMucHVzaCh7ZGF0YTp0aGlzLmRpclJlY29yZHNbZV0sbWV0YTp7cGVyY2VudDoxMDB9fSk7dmFyIHI9dGhpcy5ieXRlc1dyaXR0ZW4tdCxpPWZ1bmN0aW9uKHQsZSxyLGksbil7dmFyIHM9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLG4oaSkpO3JldHVybiBSLkNFTlRSQUxfRElSRUNUT1JZX0VORCtcIlxcMFxcMFxcMFxcMFwiK0EodCwyKStBKHQsMikrQShlLDQpK0Eociw0KStBKHMubGVuZ3RoLDIpK3N9KHRoaXMuZGlyUmVjb3Jkcy5sZW5ndGgscix0LHRoaXMuemlwQ29tbWVudCx0aGlzLmVuY29kZUZpbGVOYW1lKTt0aGlzLnB1c2goe2RhdGE6aSxtZXRhOntwZXJjZW50OjEwMH19KX0scy5wcm90b3R5cGUucHJlcGFyZU5leHRTb3VyY2U9ZnVuY3Rpb24oKXt0aGlzLnByZXZpb3VzPXRoaXMuX3NvdXJjZXMuc2hpZnQoKSx0aGlzLm9wZW5lZFNvdXJjZSh0aGlzLnByZXZpb3VzLnN0cmVhbUluZm8pLHRoaXMuaXNQYXVzZWQ/dGhpcy5wcmV2aW91cy5wYXVzZSgpOnRoaXMucHJldmlvdXMucmVzdW1lKCl9LHMucHJvdG90eXBlLnJlZ2lzdGVyUHJldmlvdXM9ZnVuY3Rpb24odCl7dGhpcy5fc291cmNlcy5wdXNoKHQpO3ZhciBlPXRoaXM7cmV0dXJuIHQub24oXCJkYXRhXCIsZnVuY3Rpb24odCl7ZS5wcm9jZXNzQ2h1bmsodCl9KSx0Lm9uKFwiZW5kXCIsZnVuY3Rpb24oKXtlLmNsb3NlZFNvdXJjZShlLnByZXZpb3VzLnN0cmVhbUluZm8pLGUuX3NvdXJjZXMubGVuZ3RoP2UucHJlcGFyZU5leHRTb3VyY2UoKTplLmVuZCgpfSksdC5vbihcImVycm9yXCIsZnVuY3Rpb24odCl7ZS5lcnJvcih0KX0pLHRoaXN9LHMucHJvdG90eXBlLnJlc3VtZT1mdW5jdGlvbigpe3JldHVybiEhbi5wcm90b3R5cGUucmVzdW1lLmNhbGwodGhpcykmJighdGhpcy5wcmV2aW91cyYmdGhpcy5fc291cmNlcy5sZW5ndGg/KHRoaXMucHJlcGFyZU5leHRTb3VyY2UoKSwhMCk6dGhpcy5wcmV2aW91c3x8dGhpcy5fc291cmNlcy5sZW5ndGh8fHRoaXMuZ2VuZXJhdGVkRXJyb3I/dm9pZCAwOih0aGlzLmVuZCgpLCEwKSl9LHMucHJvdG90eXBlLmVycm9yPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3NvdXJjZXM7aWYoIW4ucHJvdG90eXBlLmVycm9yLmNhbGwodGhpcyx0KSlyZXR1cm4hMTtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyl0cnl7ZVtyXS5lcnJvcih0KX1jYXRjaCh0KXt9cmV0dXJuITB9LHMucHJvdG90eXBlLmxvY2s9ZnVuY3Rpb24oKXtuLnByb3RvdHlwZS5sb2NrLmNhbGwodGhpcyk7Zm9yKHZhciB0PXRoaXMuX3NvdXJjZXMsZT0wO2U8dC5sZW5ndGg7ZSsrKXRbZV0ubG9jaygpfSxlLmV4cG9ydHM9c30se1wiLi4vY3JjMzJcIjo0LFwiLi4vc2lnbmF0dXJlXCI6MjMsXCIuLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi4vdXRmOFwiOjMxLFwiLi4vdXRpbHNcIjozMn1dLDk6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgdT10KFwiLi4vY29tcHJlc3Npb25zXCIpLGk9dChcIi4vWmlwRmlsZVdvcmtlclwiKTtyLmdlbmVyYXRlV29ya2VyPWZ1bmN0aW9uKHQsYSxlKXt2YXIgbz1uZXcgaShhLnN0cmVhbUZpbGVzLGUsYS5wbGF0Zm9ybSxhLmVuY29kZUZpbGVOYW1lKSxoPTA7dHJ5e3QuZm9yRWFjaChmdW5jdGlvbih0LGUpe2grKzt2YXIgcj1mdW5jdGlvbih0LGUpe3ZhciByPXR8fGUsaT11W3JdO2lmKCFpKXRocm93IG5ldyBFcnJvcihyK1wiIGlzIG5vdCBhIHZhbGlkIGNvbXByZXNzaW9uIG1ldGhvZCAhXCIpO3JldHVybiBpfShlLm9wdGlvbnMuY29tcHJlc3Npb24sYS5jb21wcmVzc2lvbiksaT1lLm9wdGlvbnMuY29tcHJlc3Npb25PcHRpb25zfHxhLmNvbXByZXNzaW9uT3B0aW9uc3x8e30sbj1lLmRpcixzPWUuZGF0ZTtlLl9jb21wcmVzc1dvcmtlcihyLGkpLndpdGhTdHJlYW1JbmZvKFwiZmlsZVwiLHtuYW1lOnQsZGlyOm4sZGF0ZTpzLGNvbW1lbnQ6ZS5jb21tZW50fHxcIlwiLHVuaXhQZXJtaXNzaW9uczplLnVuaXhQZXJtaXNzaW9ucyxkb3NQZXJtaXNzaW9uczplLmRvc1Blcm1pc3Npb25zfSkucGlwZShvKX0pLG8uZW50cmllc0NvdW50PWh9Y2F0Y2godCl7by5lcnJvcih0KX1yZXR1cm4gb319LHtcIi4uL2NvbXByZXNzaW9uc1wiOjMsXCIuL1ppcEZpbGVXb3JrZXJcIjo4fV0sMTA6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKCl7aWYoISh0aGlzIGluc3RhbmNlb2YgaSkpcmV0dXJuIG5ldyBpO2lmKGFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNvbnN0cnVjdG9yIHdpdGggcGFyYW1ldGVycyBoYXMgYmVlbiByZW1vdmVkIGluIEpTWmlwIDMuMCwgcGxlYXNlIGNoZWNrIHRoZSB1cGdyYWRlIGd1aWRlLlwiKTt0aGlzLmZpbGVzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5jb21tZW50PW51bGwsdGhpcy5yb290PVwiXCIsdGhpcy5jbG9uZT1mdW5jdGlvbigpe3ZhciB0PW5ldyBpO2Zvcih2YXIgZSBpbiB0aGlzKVwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXNbZV0mJih0W2VdPXRoaXNbZV0pO3JldHVybiB0fX0oaS5wcm90b3R5cGU9dChcIi4vb2JqZWN0XCIpKS5sb2FkQXN5bmM9dChcIi4vbG9hZFwiKSxpLnN1cHBvcnQ9dChcIi4vc3VwcG9ydFwiKSxpLmRlZmF1bHRzPXQoXCIuL2RlZmF1bHRzXCIpLGkudmVyc2lvbj1cIjMuNy4xXCIsaS5sb2FkQXN5bmM9ZnVuY3Rpb24odCxlKXtyZXR1cm4obmV3IGkpLmxvYWRBc3luYyh0LGUpfSxpLmV4dGVybmFsPXQoXCIuL2V4dGVybmFsXCIpLGUuZXhwb3J0cz1pfSx7XCIuL2RlZmF1bHRzXCI6NSxcIi4vZXh0ZXJuYWxcIjo2LFwiLi9sb2FkXCI6MTEsXCIuL29iamVjdFwiOjE1LFwiLi9zdXBwb3J0XCI6MzB9XSwxMTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuL3V0aWxzXCIpLG49dChcIi4vZXh0ZXJuYWxcIiksbz10KFwiLi91dGY4XCIpLGg9dChcIi4vemlwRW50cmllc1wiKSxzPXQoXCIuL3N0cmVhbS9DcmMzMlByb2JlXCIpLHU9dChcIi4vbm9kZWpzVXRpbHNcIik7ZnVuY3Rpb24gbChpKXtyZXR1cm4gbmV3IG4uUHJvbWlzZShmdW5jdGlvbih0LGUpe3ZhciByPWkuZGVjb21wcmVzc2VkLmdldENvbnRlbnRXb3JrZXIoKS5waXBlKG5ldyBzKTtyLm9uKFwiZXJyb3JcIixmdW5jdGlvbih0KXtlKHQpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe3Iuc3RyZWFtSW5mby5jcmMzMiE9PWkuZGVjb21wcmVzc2VkLmNyYzMyP2UobmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCA6IENSQzMyIG1pc21hdGNoXCIpKTp0KCl9KS5yZXN1bWUoKX0pfWUuZXhwb3J0cz1mdW5jdGlvbih0LHMpe3ZhciBhPXRoaXM7cmV0dXJuIHM9aS5leHRlbmQoc3x8e30se2Jhc2U2NDohMSxjaGVja0NSQzMyOiExLG9wdGltaXplZEJpbmFyeVN0cmluZzohMSxjcmVhdGVGb2xkZXJzOiExLGRlY29kZUZpbGVOYW1lOm8udXRmOGRlY29kZX0pLHUuaXNOb2RlJiZ1LmlzU3RyZWFtKHQpP24uUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSlNaaXAgY2FuJ3QgYWNjZXB0IGEgc3RyZWFtIHdoZW4gbG9hZGluZyBhIHppcCBmaWxlLlwiKSk6aS5wcmVwYXJlQ29udGVudChcInRoZSBsb2FkZWQgemlwIGZpbGVcIix0LCEwLHMub3B0aW1pemVkQmluYXJ5U3RyaW5nLHMuYmFzZTY0KS50aGVuKGZ1bmN0aW9uKHQpe3ZhciBlPW5ldyBoKHMpO3JldHVybiBlLmxvYWQodCksZX0pLnRoZW4oZnVuY3Rpb24odCl7dmFyIGU9W24uUHJvbWlzZS5yZXNvbHZlKHQpXSxyPXQuZmlsZXM7aWYocy5jaGVja0NSQzMyKWZvcih2YXIgaT0wO2k8ci5sZW5ndGg7aSsrKWUucHVzaChsKHJbaV0pKTtyZXR1cm4gbi5Qcm9taXNlLmFsbChlKX0pLnRoZW4oZnVuY3Rpb24odCl7Zm9yKHZhciBlPXQuc2hpZnQoKSxyPWUuZmlsZXMsaT0wO2k8ci5sZW5ndGg7aSsrKXt2YXIgbj1yW2ldO2EuZmlsZShuLmZpbGVOYW1lU3RyLG4uZGVjb21wcmVzc2VkLHtiaW5hcnk6ITAsb3B0aW1pemVkQmluYXJ5U3RyaW5nOiEwLGRhdGU6bi5kYXRlLGRpcjpuLmRpcixjb21tZW50Om4uZmlsZUNvbW1lbnRTdHIubGVuZ3RoP24uZmlsZUNvbW1lbnRTdHI6bnVsbCx1bml4UGVybWlzc2lvbnM6bi51bml4UGVybWlzc2lvbnMsZG9zUGVybWlzc2lvbnM6bi5kb3NQZXJtaXNzaW9ucyxjcmVhdGVGb2xkZXJzOnMuY3JlYXRlRm9sZGVyc30pfXJldHVybiBlLnppcENvbW1lbnQubGVuZ3RoJiYoYS5jb21tZW50PWUuemlwQ29tbWVudCksYX0pfX0se1wiLi9leHRlcm5hbFwiOjYsXCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N0cmVhbS9DcmMzMlByb2JlXCI6MjUsXCIuL3V0ZjhcIjozMSxcIi4vdXRpbHNcIjozMixcIi4vemlwRW50cmllc1wiOjMzfV0sMTI6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi4vdXRpbHNcIiksbj10KFwiLi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyh0LGUpe24uY2FsbCh0aGlzLFwiTm9kZWpzIHN0cmVhbSBpbnB1dCBhZGFwdGVyIGZvciBcIit0KSx0aGlzLl91cHN0cmVhbUVuZGVkPSExLHRoaXMuX2JpbmRTdHJlYW0oZSl9aS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLl9iaW5kU3RyZWFtPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7KHRoaXMuX3N0cmVhbT10KS5wYXVzZSgpLHQub24oXCJkYXRhXCIsZnVuY3Rpb24odCl7ZS5wdXNoKHtkYXRhOnQsbWV0YTp7cGVyY2VudDowfX0pfSkub24oXCJlcnJvclwiLGZ1bmN0aW9uKHQpe2UuaXNQYXVzZWQ/dGhpcy5nZW5lcmF0ZWRFcnJvcj10OmUuZXJyb3IodCl9KS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7ZS5pc1BhdXNlZD9lLl91cHN0cmVhbUVuZGVkPSEwOmUuZW5kKCl9KX0scy5wcm90b3R5cGUucGF1c2U9ZnVuY3Rpb24oKXtyZXR1cm4hIW4ucHJvdG90eXBlLnBhdXNlLmNhbGwodGhpcykmJih0aGlzLl9zdHJlYW0ucGF1c2UoKSwhMCl9LHMucHJvdG90eXBlLnJlc3VtZT1mdW5jdGlvbigpe3JldHVybiEhbi5wcm90b3R5cGUucmVzdW1lLmNhbGwodGhpcykmJih0aGlzLl91cHN0cmVhbUVuZGVkP3RoaXMuZW5kKCk6dGhpcy5fc3RyZWFtLnJlc3VtZSgpLCEwKX0sZS5leHBvcnRzPXN9LHtcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuLi91dGlsc1wiOjMyfV0sMTM6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10KFwicmVhZGFibGUtc3RyZWFtXCIpLlJlYWRhYmxlO2Z1bmN0aW9uIGkodCxlLHIpe24uY2FsbCh0aGlzLGUpLHRoaXMuX2hlbHBlcj10O3ZhciBpPXRoaXM7dC5vbihcImRhdGFcIixmdW5jdGlvbih0LGUpe2kucHVzaCh0KXx8aS5faGVscGVyLnBhdXNlKCksciYmcihlKX0pLm9uKFwiZXJyb3JcIixmdW5jdGlvbih0KXtpLmVtaXQoXCJlcnJvclwiLHQpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe2kucHVzaChudWxsKX0pfXQoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhpLG4pLGkucHJvdG90eXBlLl9yZWFkPWZ1bmN0aW9uKCl7dGhpcy5faGVscGVyLnJlc3VtZSgpfSxlLmV4cG9ydHM9aX0se1wiLi4vdXRpbHNcIjozMixcInJlYWRhYmxlLXN0cmVhbVwiOjE2fV0sMTQ6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9e2lzTm9kZTpcInVuZGVmaW5lZFwiIT10eXBlb2YgQnVmZmVyLG5ld0J1ZmZlckZyb206ZnVuY3Rpb24odCxlKXtpZihCdWZmZXIuZnJvbSYmQnVmZmVyLmZyb20hPT1VaW50OEFycmF5LmZyb20pcmV0dXJuIEJ1ZmZlci5mcm9tKHQsZSk7aWYoXCJudW1iZXJcIj09dHlwZW9mIHQpdGhyb3cgbmV3IEVycm9yKCdUaGUgXCJkYXRhXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKTtyZXR1cm4gbmV3IEJ1ZmZlcih0LGUpfSxhbGxvY0J1ZmZlcjpmdW5jdGlvbih0KXtpZihCdWZmZXIuYWxsb2MpcmV0dXJuIEJ1ZmZlci5hbGxvYyh0KTt2YXIgZT1uZXcgQnVmZmVyKHQpO3JldHVybiBlLmZpbGwoMCksZX0saXNCdWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcih0KX0saXNTdHJlYW06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQub24mJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQucGF1c2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQucmVzdW1lfX19LHt9XSwxNTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHModCxlLHIpe3ZhciBpLG49dS5nZXRUeXBlT2YoZSkscz11LmV4dGVuZChyfHx7fSxmKTtzLmRhdGU9cy5kYXRlfHxuZXcgRGF0ZSxudWxsIT09cy5jb21wcmVzc2lvbiYmKHMuY29tcHJlc3Npb249cy5jb21wcmVzc2lvbi50b1VwcGVyQ2FzZSgpKSxcInN0cmluZ1wiPT10eXBlb2Ygcy51bml4UGVybWlzc2lvbnMmJihzLnVuaXhQZXJtaXNzaW9ucz1wYXJzZUludChzLnVuaXhQZXJtaXNzaW9ucyw4KSkscy51bml4UGVybWlzc2lvbnMmJjE2Mzg0JnMudW5peFBlcm1pc3Npb25zJiYocy5kaXI9ITApLHMuZG9zUGVybWlzc2lvbnMmJjE2JnMuZG9zUGVybWlzc2lvbnMmJihzLmRpcj0hMCkscy5kaXImJih0PWcodCkpLHMuY3JlYXRlRm9sZGVycyYmKGk9Xyh0KSkmJmIuY2FsbCh0aGlzLGksITApO3ZhciBhPVwic3RyaW5nXCI9PT1uJiYhMT09PXMuYmluYXJ5JiYhMT09PXMuYmFzZTY0O3ImJnZvaWQgMCE9PXIuYmluYXJ5fHwocy5iaW5hcnk9IWEpLChlIGluc3RhbmNlb2YgZCYmMD09PWUudW5jb21wcmVzc2VkU2l6ZXx8cy5kaXJ8fCFlfHwwPT09ZS5sZW5ndGgpJiYocy5iYXNlNjQ9ITEscy5iaW5hcnk9ITAsZT1cIlwiLHMuY29tcHJlc3Npb249XCJTVE9SRVwiLG49XCJzdHJpbmdcIik7dmFyIG89bnVsbDtvPWUgaW5zdGFuY2VvZiBkfHxlIGluc3RhbmNlb2YgbD9lOnAuaXNOb2RlJiZwLmlzU3RyZWFtKGUpP25ldyBtKHQsZSk6dS5wcmVwYXJlQ29udGVudCh0LGUscy5iaW5hcnkscy5vcHRpbWl6ZWRCaW5hcnlTdHJpbmcscy5iYXNlNjQpO3ZhciBoPW5ldyBjKHQsbyxzKTt0aGlzLmZpbGVzW3RdPWh9dmFyIG49dChcIi4vdXRmOFwiKSx1PXQoXCIuL3V0aWxzXCIpLGw9dChcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksYT10KFwiLi9zdHJlYW0vU3RyZWFtSGVscGVyXCIpLGY9dChcIi4vZGVmYXVsdHNcIiksZD10KFwiLi9jb21wcmVzc2VkT2JqZWN0XCIpLGM9dChcIi4vemlwT2JqZWN0XCIpLG89dChcIi4vZ2VuZXJhdGVcIikscD10KFwiLi9ub2RlanNVdGlsc1wiKSxtPXQoXCIuL25vZGVqcy9Ob2RlanNTdHJlYW1JbnB1dEFkYXB0ZXJcIiksXz1mdW5jdGlvbih0KXtcIi9cIj09PXQuc2xpY2UoLTEpJiYodD10LnN1YnN0cmluZygwLHQubGVuZ3RoLTEpKTt2YXIgZT10Lmxhc3RJbmRleE9mKFwiL1wiKTtyZXR1cm4gMDxlP3Quc3Vic3RyaW5nKDAsZSk6XCJcIn0sZz1mdW5jdGlvbih0KXtyZXR1cm5cIi9cIiE9PXQuc2xpY2UoLTEpJiYodCs9XCIvXCIpLHR9LGI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZT12b2lkIDAhPT1lP2U6Zi5jcmVhdGVGb2xkZXJzLHQ9Zyh0KSx0aGlzLmZpbGVzW3RdfHxzLmNhbGwodGhpcyx0LG51bGwse2RpcjohMCxjcmVhdGVGb2xkZXJzOmV9KSx0aGlzLmZpbGVzW3RdfTtmdW5jdGlvbiBoKHQpe3JldHVyblwiW29iamVjdCBSZWdFeHBdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9dmFyIGk9e2xvYWQ6ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiByZW1vdmVkIGluIEpTWmlwIDMuMCwgcGxlYXNlIGNoZWNrIHRoZSB1cGdyYWRlIGd1aWRlLlwiKX0sZm9yRWFjaDpmdW5jdGlvbih0KXt2YXIgZSxyLGk7Zm9yKGUgaW4gdGhpcy5maWxlcylpPXRoaXMuZmlsZXNbZV0sKHI9ZS5zbGljZSh0aGlzLnJvb3QubGVuZ3RoLGUubGVuZ3RoKSkmJmUuc2xpY2UoMCx0aGlzLnJvb3QubGVuZ3RoKT09PXRoaXMucm9vdCYmdChyLGkpfSxmaWx0ZXI6ZnVuY3Rpb24ocil7dmFyIGk9W107cmV0dXJuIHRoaXMuZm9yRWFjaChmdW5jdGlvbih0LGUpe3IodCxlKSYmaS5wdXNoKGUpfSksaX0sZmlsZTpmdW5jdGlvbih0LGUscil7aWYoMSE9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHQ9dGhpcy5yb290K3Qscy5jYWxsKHRoaXMsdCxlLHIpLHRoaXM7aWYoaCh0KSl7dmFyIGk9dDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24odCxlKXtyZXR1cm4hZS5kaXImJmkudGVzdCh0KX0pfXZhciBuPXRoaXMuZmlsZXNbdGhpcy5yb290K3RdO3JldHVybiBuJiYhbi5kaXI/bjpudWxsfSxmb2xkZXI6ZnVuY3Rpb24ocil7aWYoIXIpcmV0dXJuIHRoaXM7aWYoaChyKSlyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24odCxlKXtyZXR1cm4gZS5kaXImJnIudGVzdCh0KX0pO3ZhciB0PXRoaXMucm9vdCtyLGU9Yi5jYWxsKHRoaXMsdCksaT10aGlzLmNsb25lKCk7cmV0dXJuIGkucm9vdD1lLm5hbWUsaX0scmVtb3ZlOmZ1bmN0aW9uKHIpe3I9dGhpcy5yb290K3I7dmFyIHQ9dGhpcy5maWxlc1tyXTtpZih0fHwoXCIvXCIhPT1yLnNsaWNlKC0xKSYmKHIrPVwiL1wiKSx0PXRoaXMuZmlsZXNbcl0pLHQmJiF0LmRpcilkZWxldGUgdGhpcy5maWxlc1tyXTtlbHNlIGZvcih2YXIgZT10aGlzLmZpbHRlcihmdW5jdGlvbih0LGUpe3JldHVybiBlLm5hbWUuc2xpY2UoMCxyLmxlbmd0aCk9PT1yfSksaT0wO2k8ZS5sZW5ndGg7aSsrKWRlbGV0ZSB0aGlzLmZpbGVzW2VbaV0ubmFtZV07cmV0dXJuIHRoaXN9LGdlbmVyYXRlOmZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpfSxnZW5lcmF0ZUludGVybmFsU3RyZWFtOmZ1bmN0aW9uKHQpe3ZhciBlLHI9e307dHJ5e2lmKChyPXUuZXh0ZW5kKHR8fHt9LHtzdHJlYW1GaWxlczohMSxjb21wcmVzc2lvbjpcIlNUT1JFXCIsY29tcHJlc3Npb25PcHRpb25zOm51bGwsdHlwZTpcIlwiLHBsYXRmb3JtOlwiRE9TXCIsY29tbWVudDpudWxsLG1pbWVUeXBlOlwiYXBwbGljYXRpb24vemlwXCIsZW5jb2RlRmlsZU5hbWU6bi51dGY4ZW5jb2RlfSkpLnR5cGU9ci50eXBlLnRvTG93ZXJDYXNlKCksci5jb21wcmVzc2lvbj1yLmNvbXByZXNzaW9uLnRvVXBwZXJDYXNlKCksXCJiaW5hcnlzdHJpbmdcIj09PXIudHlwZSYmKHIudHlwZT1cInN0cmluZ1wiKSwhci50eXBlKXRocm93IG5ldyBFcnJvcihcIk5vIG91dHB1dCB0eXBlIHNwZWNpZmllZC5cIik7dS5jaGVja1N1cHBvcnQoci50eXBlKSxcImRhcndpblwiIT09ci5wbGF0Zm9ybSYmXCJmcmVlYnNkXCIhPT1yLnBsYXRmb3JtJiZcImxpbnV4XCIhPT1yLnBsYXRmb3JtJiZcInN1bm9zXCIhPT1yLnBsYXRmb3JtfHwoci5wbGF0Zm9ybT1cIlVOSVhcIiksXCJ3aW4zMlwiPT09ci5wbGF0Zm9ybSYmKHIucGxhdGZvcm09XCJET1NcIik7dmFyIGk9ci5jb21tZW50fHx0aGlzLmNvbW1lbnR8fFwiXCI7ZT1vLmdlbmVyYXRlV29ya2VyKHRoaXMscixpKX1jYXRjaCh0KXsoZT1uZXcgbChcImVycm9yXCIpKS5lcnJvcih0KX1yZXR1cm4gbmV3IGEoZSxyLnR5cGV8fFwic3RyaW5nXCIsci5taW1lVHlwZSl9LGdlbmVyYXRlQXN5bmM6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5nZW5lcmF0ZUludGVybmFsU3RyZWFtKHQpLmFjY3VtdWxhdGUoZSl9LGdlbmVyYXRlTm9kZVN0cmVhbTpmdW5jdGlvbih0LGUpe3JldHVybih0PXR8fHt9KS50eXBlfHwodC50eXBlPVwibm9kZWJ1ZmZlclwiKSx0aGlzLmdlbmVyYXRlSW50ZXJuYWxTdHJlYW0odCkudG9Ob2RlanNTdHJlYW0oZSl9fTtlLmV4cG9ydHM9aX0se1wiLi9jb21wcmVzc2VkT2JqZWN0XCI6MixcIi4vZGVmYXVsdHNcIjo1LFwiLi9nZW5lcmF0ZVwiOjksXCIuL25vZGVqcy9Ob2RlanNTdHJlYW1JbnB1dEFkYXB0ZXJcIjoxMixcIi4vbm9kZWpzVXRpbHNcIjoxNCxcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4vc3RyZWFtL1N0cmVhbUhlbHBlclwiOjI5LFwiLi91dGY4XCI6MzEsXCIuL3V0aWxzXCI6MzIsXCIuL3ppcE9iamVjdFwiOjM1fV0sMTY6W2Z1bmN0aW9uKHQsZSxyKXtlLmV4cG9ydHM9dChcInN0cmVhbVwiKX0se3N0cmVhbTp2b2lkIDB9XSwxNzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuL0RhdGFSZWFkZXJcIik7ZnVuY3Rpb24gbih0KXtpLmNhbGwodGhpcyx0KTtmb3IodmFyIGU9MDtlPHRoaXMuZGF0YS5sZW5ndGg7ZSsrKXRbZV09MjU1JnRbZV19dChcIi4uL3V0aWxzXCIpLmluaGVyaXRzKG4saSksbi5wcm90b3R5cGUuYnl0ZUF0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmRhdGFbdGhpcy56ZXJvK3RdfSxuLnByb3RvdHlwZS5sYXN0SW5kZXhPZlNpZ25hdHVyZT1mdW5jdGlvbih0KXtmb3IodmFyIGU9dC5jaGFyQ29kZUF0KDApLHI9dC5jaGFyQ29kZUF0KDEpLGk9dC5jaGFyQ29kZUF0KDIpLG49dC5jaGFyQ29kZUF0KDMpLHM9dGhpcy5sZW5ndGgtNDswPD1zOy0tcylpZih0aGlzLmRhdGFbc109PT1lJiZ0aGlzLmRhdGFbcysxXT09PXImJnRoaXMuZGF0YVtzKzJdPT09aSYmdGhpcy5kYXRhW3MrM109PT1uKXJldHVybiBzLXRoaXMuemVybztyZXR1cm4tMX0sbi5wcm90b3R5cGUucmVhZEFuZENoZWNrU2lnbmF0dXJlPWZ1bmN0aW9uKHQpe3ZhciBlPXQuY2hhckNvZGVBdCgwKSxyPXQuY2hhckNvZGVBdCgxKSxpPXQuY2hhckNvZGVBdCgyKSxuPXQuY2hhckNvZGVBdCgzKSxzPXRoaXMucmVhZERhdGEoNCk7cmV0dXJuIGU9PT1zWzBdJiZyPT09c1sxXSYmaT09PXNbMl0mJm49PT1zWzNdfSxuLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbih0KXtpZih0aGlzLmNoZWNrT2Zmc2V0KHQpLDA9PT10KXJldHVybltdO3ZhciBlPXRoaXMuZGF0YS5zbGljZSh0aGlzLnplcm8rdGhpcy5pbmRleCx0aGlzLnplcm8rdGhpcy5pbmRleCt0KTtyZXR1cm4gdGhpcy5pbmRleCs9dCxlfSxlLmV4cG9ydHM9bn0se1wiLi4vdXRpbHNcIjozMixcIi4vRGF0YVJlYWRlclwiOjE4fV0sMTg6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi4vdXRpbHNcIik7ZnVuY3Rpb24gbih0KXt0aGlzLmRhdGE9dCx0aGlzLmxlbmd0aD10Lmxlbmd0aCx0aGlzLmluZGV4PTAsdGhpcy56ZXJvPTB9bi5wcm90b3R5cGU9e2NoZWNrT2Zmc2V0OmZ1bmN0aW9uKHQpe3RoaXMuY2hlY2tJbmRleCh0aGlzLmluZGV4K3QpfSxjaGVja0luZGV4OmZ1bmN0aW9uKHQpe2lmKHRoaXMubGVuZ3RoPHRoaXMuemVybyt0fHx0PDApdGhyb3cgbmV3IEVycm9yKFwiRW5kIG9mIGRhdGEgcmVhY2hlZCAoZGF0YSBsZW5ndGggPSBcIit0aGlzLmxlbmd0aCtcIiwgYXNrZWQgaW5kZXggPSBcIit0K1wiKS4gQ29ycnVwdGVkIHppcCA/XCIpfSxzZXRJbmRleDpmdW5jdGlvbih0KXt0aGlzLmNoZWNrSW5kZXgodCksdGhpcy5pbmRleD10fSxza2lwOmZ1bmN0aW9uKHQpe3RoaXMuc2V0SW5kZXgodGhpcy5pbmRleCt0KX0sYnl0ZUF0OmZ1bmN0aW9uKHQpe30scmVhZEludDpmdW5jdGlvbih0KXt2YXIgZSxyPTA7Zm9yKHRoaXMuY2hlY2tPZmZzZXQodCksZT10aGlzLmluZGV4K3QtMTtlPj10aGlzLmluZGV4O2UtLSlyPShyPDw4KSt0aGlzLmJ5dGVBdChlKTtyZXR1cm4gdGhpcy5pbmRleCs9dCxyfSxyZWFkU3RyaW5nOmZ1bmN0aW9uKHQpe3JldHVybiBpLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsdGhpcy5yZWFkRGF0YSh0KSl9LHJlYWREYXRhOmZ1bmN0aW9uKHQpe30sbGFzdEluZGV4T2ZTaWduYXR1cmU6ZnVuY3Rpb24odCl7fSxyZWFkQW5kQ2hlY2tTaWduYXR1cmU6ZnVuY3Rpb24odCl7fSxyZWFkRGF0ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMucmVhZEludCg0KTtyZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoMTk4MCsodD4+MjUmMTI3KSwodD4+MjEmMTUpLTEsdD4+MTYmMzEsdD4+MTEmMzEsdD4+NSY2MywoMzEmdCk8PDEpKX19LGUuZXhwb3J0cz1ufSx7XCIuLi91dGlsc1wiOjMyfV0sMTk6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9VaW50OEFycmF5UmVhZGVyXCIpO2Z1bmN0aW9uIG4odCl7aS5jYWxsKHRoaXMsdCl9dChcIi4uL3V0aWxzXCIpLmluaGVyaXRzKG4saSksbi5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24odCl7dGhpcy5jaGVja09mZnNldCh0KTt2YXIgZT10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrdCk7cmV0dXJuIHRoaXMuaW5kZXgrPXQsZX0sZS5leHBvcnRzPW59LHtcIi4uL3V0aWxzXCI6MzIsXCIuL1VpbnQ4QXJyYXlSZWFkZXJcIjoyMX1dLDIwOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vRGF0YVJlYWRlclwiKTtmdW5jdGlvbiBuKHQpe2kuY2FsbCh0aGlzLHQpfXQoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhuLGkpLG4ucHJvdG90eXBlLmJ5dGVBdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5kYXRhLmNoYXJDb2RlQXQodGhpcy56ZXJvK3QpfSxuLnByb3RvdHlwZS5sYXN0SW5kZXhPZlNpZ25hdHVyZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5kYXRhLmxhc3RJbmRleE9mKHQpLXRoaXMuemVyb30sbi5wcm90b3R5cGUucmVhZEFuZENoZWNrU2lnbmF0dXJlPWZ1bmN0aW9uKHQpe3JldHVybiB0PT09dGhpcy5yZWFkRGF0YSg0KX0sbi5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24odCl7dGhpcy5jaGVja09mZnNldCh0KTt2YXIgZT10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrdCk7cmV0dXJuIHRoaXMuaW5kZXgrPXQsZX0sZS5leHBvcnRzPW59LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0RhdGFSZWFkZXJcIjoxOH1dLDIxOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vQXJyYXlSZWFkZXJcIik7ZnVuY3Rpb24gbih0KXtpLmNhbGwodGhpcyx0KX10KFwiLi4vdXRpbHNcIikuaW5oZXJpdHMobixpKSxuLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbih0KXtpZih0aGlzLmNoZWNrT2Zmc2V0KHQpLDA9PT10KXJldHVybiBuZXcgVWludDhBcnJheSgwKTt2YXIgZT10aGlzLmRhdGEuc3ViYXJyYXkodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrdCk7cmV0dXJuIHRoaXMuaW5kZXgrPXQsZX0sZS5leHBvcnRzPW59LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0FycmF5UmVhZGVyXCI6MTd9XSwyMjpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuLi91dGlsc1wiKSxuPXQoXCIuLi9zdXBwb3J0XCIpLHM9dChcIi4vQXJyYXlSZWFkZXJcIiksYT10KFwiLi9TdHJpbmdSZWFkZXJcIiksbz10KFwiLi9Ob2RlQnVmZmVyUmVhZGVyXCIpLGg9dChcIi4vVWludDhBcnJheVJlYWRlclwiKTtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9aS5nZXRUeXBlT2YodCk7cmV0dXJuIGkuY2hlY2tTdXBwb3J0KGUpLFwic3RyaW5nXCIhPT1lfHxuLnVpbnQ4YXJyYXk/XCJub2RlYnVmZmVyXCI9PT1lP25ldyBvKHQpOm4udWludDhhcnJheT9uZXcgaChpLnRyYW5zZm9ybVRvKFwidWludDhhcnJheVwiLHQpKTpuZXcgcyhpLnRyYW5zZm9ybVRvKFwiYXJyYXlcIix0KSk6bmV3IGEodCl9fSx7XCIuLi9zdXBwb3J0XCI6MzAsXCIuLi91dGlsc1wiOjMyLFwiLi9BcnJheVJlYWRlclwiOjE3LFwiLi9Ob2RlQnVmZmVyUmVhZGVyXCI6MTksXCIuL1N0cmluZ1JlYWRlclwiOjIwLFwiLi9VaW50OEFycmF5UmVhZGVyXCI6MjF9XSwyMzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3IuTE9DQUxfRklMRV9IRUFERVI9XCJQS1x1MDAwM1x1MDAwNFwiLHIuQ0VOVFJBTF9GSUxFX0hFQURFUj1cIlBLXHUwMDAxXHUwMDAyXCIsci5DRU5UUkFMX0RJUkVDVE9SWV9FTkQ9XCJQS1x1MDAwNVx1MDAwNlwiLHIuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUj1cIlBLXHUwMDA2XHUwMDA3XCIsci5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQ9XCJQS1x1MDAwNlx1MDAwNlwiLHIuREFUQV9ERVNDUklQVE9SPVwiUEtcdTAwMDdcXGJcIn0se31dLDI0OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vR2VuZXJpY1dvcmtlclwiKSxuPXQoXCIuLi91dGlsc1wiKTtmdW5jdGlvbiBzKHQpe2kuY2FsbCh0aGlzLFwiQ29udmVydFdvcmtlciB0byBcIit0KSx0aGlzLmRlc3RUeXBlPXR9bi5pbmhlcml0cyhzLGkpLHMucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbih0KXt0aGlzLnB1c2goe2RhdGE6bi50cmFuc2Zvcm1Ubyh0aGlzLmRlc3RUeXBlLHQuZGF0YSksbWV0YTp0Lm1ldGF9KX0sZS5leHBvcnRzPXN9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDI1OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vR2VuZXJpY1dvcmtlclwiKSxuPXQoXCIuLi9jcmMzMlwiKTtmdW5jdGlvbiBzKCl7aS5jYWxsKHRoaXMsXCJDcmMzMlByb2JlXCIpLHRoaXMud2l0aFN0cmVhbUluZm8oXCJjcmMzMlwiLDApfXQoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhzLGkpLHMucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbih0KXt0aGlzLnN0cmVhbUluZm8uY3JjMzI9bih0LmRhdGEsdGhpcy5zdHJlYW1JbmZvLmNyYzMyfHwwKSx0aGlzLnB1c2godCl9LGUuZXhwb3J0cz1zfSx7XCIuLi9jcmMzMlwiOjQsXCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyNjpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuLi91dGlsc1wiKSxuPXQoXCIuL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyh0KXtuLmNhbGwodGhpcyxcIkRhdGFMZW5ndGhQcm9iZSBmb3IgXCIrdCksdGhpcy5wcm9wTmFtZT10LHRoaXMud2l0aFN0cmVhbUluZm8odCwwKX1pLmluaGVyaXRzKHMsbikscy5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPXRoaXMuc3RyZWFtSW5mb1t0aGlzLnByb3BOYW1lXXx8MDt0aGlzLnN0cmVhbUluZm9bdGhpcy5wcm9wTmFtZV09ZSt0LmRhdGEubGVuZ3RofW4ucHJvdG90eXBlLnByb2Nlc3NDaHVuay5jYWxsKHRoaXMsdCl9LGUuZXhwb3J0cz1zfSx7XCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyNzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuLi91dGlsc1wiKSxuPXQoXCIuL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyh0KXtuLmNhbGwodGhpcyxcIkRhdGFXb3JrZXJcIik7dmFyIGU9dGhpczt0aGlzLmRhdGFJc1JlYWR5PSExLHRoaXMuaW5kZXg9MCx0aGlzLm1heD0wLHRoaXMuZGF0YT1udWxsLHRoaXMudHlwZT1cIlwiLHRoaXMuX3RpY2tTY2hlZHVsZWQ9ITEsdC50aGVuKGZ1bmN0aW9uKHQpe2UuZGF0YUlzUmVhZHk9ITAsZS5kYXRhPXQsZS5tYXg9dCYmdC5sZW5ndGh8fDAsZS50eXBlPWkuZ2V0VHlwZU9mKHQpLGUuaXNQYXVzZWR8fGUuX3RpY2tBbmRSZXBlYXQoKX0sZnVuY3Rpb24odCl7ZS5lcnJvcih0KX0pfWkuaW5oZXJpdHMocyxuKSxzLnByb3RvdHlwZS5jbGVhblVwPWZ1bmN0aW9uKCl7bi5wcm90b3R5cGUuY2xlYW5VcC5jYWxsKHRoaXMpLHRoaXMuZGF0YT1udWxsfSxzLnByb3RvdHlwZS5yZXN1bWU9ZnVuY3Rpb24oKXtyZXR1cm4hIW4ucHJvdG90eXBlLnJlc3VtZS5jYWxsKHRoaXMpJiYoIXRoaXMuX3RpY2tTY2hlZHVsZWQmJnRoaXMuZGF0YUlzUmVhZHkmJih0aGlzLl90aWNrU2NoZWR1bGVkPSEwLGkuZGVsYXkodGhpcy5fdGlja0FuZFJlcGVhdCxbXSx0aGlzKSksITApfSxzLnByb3RvdHlwZS5fdGlja0FuZFJlcGVhdD1mdW5jdGlvbigpe3RoaXMuX3RpY2tTY2hlZHVsZWQ9ITEsdGhpcy5pc1BhdXNlZHx8dGhpcy5pc0ZpbmlzaGVkfHwodGhpcy5fdGljaygpLHRoaXMuaXNGaW5pc2hlZHx8KGkuZGVsYXkodGhpcy5fdGlja0FuZFJlcGVhdCxbXSx0aGlzKSx0aGlzLl90aWNrU2NoZWR1bGVkPSEwKSl9LHMucHJvdG90eXBlLl90aWNrPWZ1bmN0aW9uKCl7aWYodGhpcy5pc1BhdXNlZHx8dGhpcy5pc0ZpbmlzaGVkKXJldHVybiExO3ZhciB0PW51bGwsZT1NYXRoLm1pbih0aGlzLm1heCx0aGlzLmluZGV4KzE2Mzg0KTtpZih0aGlzLmluZGV4Pj10aGlzLm1heClyZXR1cm4gdGhpcy5lbmQoKTtzd2l0Y2godGhpcy50eXBlKXtjYXNlXCJzdHJpbmdcIjp0PXRoaXMuZGF0YS5zdWJzdHJpbmcodGhpcy5pbmRleCxlKTticmVhaztjYXNlXCJ1aW50OGFycmF5XCI6dD10aGlzLmRhdGEuc3ViYXJyYXkodGhpcy5pbmRleCxlKTticmVhaztjYXNlXCJhcnJheVwiOmNhc2VcIm5vZGVidWZmZXJcIjp0PXRoaXMuZGF0YS5zbGljZSh0aGlzLmluZGV4LGUpfXJldHVybiB0aGlzLmluZGV4PWUsdGhpcy5wdXNoKHtkYXRhOnQsbWV0YTp7cGVyY2VudDp0aGlzLm1heD90aGlzLmluZGV4L3RoaXMubWF4KjEwMDowfX0pfSxlLmV4cG9ydHM9c30se1wiLi4vdXRpbHNcIjozMixcIi4vR2VuZXJpY1dvcmtlclwiOjI4fV0sMjg6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKHQpe3RoaXMubmFtZT10fHxcImRlZmF1bHRcIix0aGlzLnN0cmVhbUluZm89e30sdGhpcy5nZW5lcmF0ZWRFcnJvcj1udWxsLHRoaXMuZXh0cmFTdHJlYW1JbmZvPXt9LHRoaXMuaXNQYXVzZWQ9ITAsdGhpcy5pc0ZpbmlzaGVkPSExLHRoaXMuaXNMb2NrZWQ9ITEsdGhpcy5fbGlzdGVuZXJzPXtkYXRhOltdLGVuZDpbXSxlcnJvcjpbXX0sdGhpcy5wcmV2aW91cz1udWxsfWkucHJvdG90eXBlPXtwdXNoOmZ1bmN0aW9uKHQpe3RoaXMuZW1pdChcImRhdGFcIix0KX0sZW5kOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0ZpbmlzaGVkKXJldHVybiExO3RoaXMuZmx1c2goKTt0cnl7dGhpcy5lbWl0KFwiZW5kXCIpLHRoaXMuY2xlYW5VcCgpLHRoaXMuaXNGaW5pc2hlZD0hMH1jYXRjaCh0KXt0aGlzLmVtaXQoXCJlcnJvclwiLHQpfXJldHVybiEwfSxlcnJvcjpmdW5jdGlvbih0KXtyZXR1cm4hdGhpcy5pc0ZpbmlzaGVkJiYodGhpcy5pc1BhdXNlZD90aGlzLmdlbmVyYXRlZEVycm9yPXQ6KHRoaXMuaXNGaW5pc2hlZD0hMCx0aGlzLmVtaXQoXCJlcnJvclwiLHQpLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMuZXJyb3IodCksdGhpcy5jbGVhblVwKCkpLCEwKX0sb246ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5fbGlzdGVuZXJzW3RdLnB1c2goZSksdGhpc30sY2xlYW5VcDpmdW5jdGlvbigpe3RoaXMuc3RyZWFtSW5mbz10aGlzLmdlbmVyYXRlZEVycm9yPXRoaXMuZXh0cmFTdHJlYW1JbmZvPW51bGwsdGhpcy5fbGlzdGVuZXJzPVtdfSxlbWl0OmZ1bmN0aW9uKHQsZSl7aWYodGhpcy5fbGlzdGVuZXJzW3RdKWZvcih2YXIgcj0wO3I8dGhpcy5fbGlzdGVuZXJzW3RdLmxlbmd0aDtyKyspdGhpcy5fbGlzdGVuZXJzW3RdW3JdLmNhbGwodGhpcyxlKX0scGlwZTpmdW5jdGlvbih0KXtyZXR1cm4gdC5yZWdpc3RlclByZXZpb3VzKHRoaXMpfSxyZWdpc3RlclByZXZpb3VzOmZ1bmN0aW9uKHQpe2lmKHRoaXMuaXNMb2NrZWQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0cmVhbSAnXCIrdGhpcytcIicgaGFzIGFscmVhZHkgYmVlbiB1c2VkLlwiKTt0aGlzLnN0cmVhbUluZm89dC5zdHJlYW1JbmZvLHRoaXMubWVyZ2VTdHJlYW1JbmZvKCksdGhpcy5wcmV2aW91cz10O3ZhciBlPXRoaXM7cmV0dXJuIHQub24oXCJkYXRhXCIsZnVuY3Rpb24odCl7ZS5wcm9jZXNzQ2h1bmsodCl9KSx0Lm9uKFwiZW5kXCIsZnVuY3Rpb24oKXtlLmVuZCgpfSksdC5vbihcImVycm9yXCIsZnVuY3Rpb24odCl7ZS5lcnJvcih0KX0pLHRoaXN9LHBhdXNlOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaXNQYXVzZWQmJiF0aGlzLmlzRmluaXNoZWQmJih0aGlzLmlzUGF1c2VkPSEwLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMucGF1c2UoKSwhMCl9LHJlc3VtZTpmdW5jdGlvbigpe2lmKCF0aGlzLmlzUGF1c2VkfHx0aGlzLmlzRmluaXNoZWQpcmV0dXJuITE7dmFyIHQ9dGhpcy5pc1BhdXNlZD0hMTtyZXR1cm4gdGhpcy5nZW5lcmF0ZWRFcnJvciYmKHRoaXMuZXJyb3IodGhpcy5nZW5lcmF0ZWRFcnJvciksdD0hMCksdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5yZXN1bWUoKSwhdH0sZmx1c2g6ZnVuY3Rpb24oKXt9LHByb2Nlc3NDaHVuazpmdW5jdGlvbih0KXt0aGlzLnB1c2godCl9LHdpdGhTdHJlYW1JbmZvOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZXh0cmFTdHJlYW1JbmZvW3RdPWUsdGhpcy5tZXJnZVN0cmVhbUluZm8oKSx0aGlzfSxtZXJnZVN0cmVhbUluZm86ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gdGhpcy5leHRyYVN0cmVhbUluZm8pdGhpcy5leHRyYVN0cmVhbUluZm8uaGFzT3duUHJvcGVydHkodCkmJih0aGlzLnN0cmVhbUluZm9bdF09dGhpcy5leHRyYVN0cmVhbUluZm9bdF0pfSxsb2NrOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0xvY2tlZCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3RyZWFtICdcIit0aGlzK1wiJyBoYXMgYWxyZWFkeSBiZWVuIHVzZWQuXCIpO3RoaXMuaXNMb2NrZWQ9ITAsdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5sb2NrKCl9LHRvU3RyaW5nOmZ1bmN0aW9uKCl7dmFyIHQ9XCJXb3JrZXIgXCIrdGhpcy5uYW1lO3JldHVybiB0aGlzLnByZXZpb3VzP3RoaXMucHJldmlvdXMrXCIgLT4gXCIrdDp0fX0sZS5leHBvcnRzPWl9LHt9XSwyOTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBoPXQoXCIuLi91dGlsc1wiKSxuPXQoXCIuL0NvbnZlcnRXb3JrZXJcIikscz10KFwiLi9HZW5lcmljV29ya2VyXCIpLHU9dChcIi4uL2Jhc2U2NFwiKSxpPXQoXCIuLi9zdXBwb3J0XCIpLGE9dChcIi4uL2V4dGVybmFsXCIpLG89bnVsbDtpZihpLm5vZGVzdHJlYW0pdHJ5e289dChcIi4uL25vZGVqcy9Ob2RlanNTdHJlYW1PdXRwdXRBZGFwdGVyXCIpfWNhdGNoKHQpe31mdW5jdGlvbiBsKHQsbyl7cmV0dXJuIG5ldyBhLlByb21pc2UoZnVuY3Rpb24oZSxyKXt2YXIgaT1bXSxuPXQuX2ludGVybmFsVHlwZSxzPXQuX291dHB1dFR5cGUsYT10Ll9taW1lVHlwZTt0Lm9uKFwiZGF0YVwiLGZ1bmN0aW9uKHQsZSl7aS5wdXNoKHQpLG8mJm8oZSl9KS5vbihcImVycm9yXCIsZnVuY3Rpb24odCl7aT1bXSxyKHQpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe3RyeXt2YXIgdD1mdW5jdGlvbih0LGUscil7c3dpdGNoKHQpe2Nhc2VcImJsb2JcIjpyZXR1cm4gaC5uZXdCbG9iKGgudHJhbnNmb3JtVG8oXCJhcnJheWJ1ZmZlclwiLGUpLHIpO2Nhc2VcImJhc2U2NFwiOnJldHVybiB1LmVuY29kZShlKTtkZWZhdWx0OnJldHVybiBoLnRyYW5zZm9ybVRvKHQsZSl9fShzLGZ1bmN0aW9uKHQsZSl7dmFyIHIsaT0wLG49bnVsbCxzPTA7Zm9yKHI9MDtyPGUubGVuZ3RoO3IrKylzKz1lW3JdLmxlbmd0aDtzd2l0Y2godCl7Y2FzZVwic3RyaW5nXCI6cmV0dXJuIGUuam9pbihcIlwiKTtjYXNlXCJhcnJheVwiOnJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLGUpO2Nhc2VcInVpbnQ4YXJyYXlcIjpmb3Iobj1uZXcgVWludDhBcnJheShzKSxyPTA7cjxlLmxlbmd0aDtyKyspbi5zZXQoZVtyXSxpKSxpKz1lW3JdLmxlbmd0aDtyZXR1cm4gbjtjYXNlXCJub2RlYnVmZmVyXCI6cmV0dXJuIEJ1ZmZlci5jb25jYXQoZSk7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJjb25jYXQgOiB1bnN1cHBvcnRlZCB0eXBlICdcIit0K1wiJ1wiKX19KG4saSksYSk7ZSh0KX1jYXRjaCh0KXtyKHQpfWk9W119KS5yZXN1bWUoKX0pfWZ1bmN0aW9uIGYodCxlLHIpe3ZhciBpPWU7c3dpdGNoKGUpe2Nhc2VcImJsb2JcIjpjYXNlXCJhcnJheWJ1ZmZlclwiOmk9XCJ1aW50OGFycmF5XCI7YnJlYWs7Y2FzZVwiYmFzZTY0XCI6aT1cInN0cmluZ1wifXRyeXt0aGlzLl9pbnRlcm5hbFR5cGU9aSx0aGlzLl9vdXRwdXRUeXBlPWUsdGhpcy5fbWltZVR5cGU9cixoLmNoZWNrU3VwcG9ydChpKSx0aGlzLl93b3JrZXI9dC5waXBlKG5ldyBuKGkpKSx0LmxvY2soKX1jYXRjaCh0KXt0aGlzLl93b3JrZXI9bmV3IHMoXCJlcnJvclwiKSx0aGlzLl93b3JrZXIuZXJyb3IodCl9fWYucHJvdG90eXBlPXthY2N1bXVsYXRlOmZ1bmN0aW9uKHQpe3JldHVybiBsKHRoaXMsdCl9LG9uOmZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpcztyZXR1cm5cImRhdGFcIj09PXQ/dGhpcy5fd29ya2VyLm9uKHQsZnVuY3Rpb24odCl7ZS5jYWxsKHIsdC5kYXRhLHQubWV0YSl9KTp0aGlzLl93b3JrZXIub24odCxmdW5jdGlvbigpe2guZGVsYXkoZSxhcmd1bWVudHMscil9KSx0aGlzfSxyZXN1bWU6ZnVuY3Rpb24oKXtyZXR1cm4gaC5kZWxheSh0aGlzLl93b3JrZXIucmVzdW1lLFtdLHRoaXMuX3dvcmtlciksdGhpc30scGF1c2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd29ya2VyLnBhdXNlKCksdGhpc30sdG9Ob2RlanNTdHJlYW06ZnVuY3Rpb24odCl7aWYoaC5jaGVja1N1cHBvcnQoXCJub2Rlc3RyZWFtXCIpLFwibm9kZWJ1ZmZlclwiIT09dGhpcy5fb3V0cHV0VHlwZSl0aHJvdyBuZXcgRXJyb3IodGhpcy5fb3V0cHV0VHlwZStcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgbWV0aG9kXCIpO3JldHVybiBuZXcgbyh0aGlzLHtvYmplY3RNb2RlOlwibm9kZWJ1ZmZlclwiIT09dGhpcy5fb3V0cHV0VHlwZX0sdCl9fSxlLmV4cG9ydHM9Zn0se1wiLi4vYmFzZTY0XCI6MSxcIi4uL2V4dGVybmFsXCI6NixcIi4uL25vZGVqcy9Ob2RlanNTdHJlYW1PdXRwdXRBZGFwdGVyXCI6MTMsXCIuLi9zdXBwb3J0XCI6MzAsXCIuLi91dGlsc1wiOjMyLFwiLi9Db252ZXJ0V29ya2VyXCI6MjQsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDMwOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7aWYoci5iYXNlNjQ9ITAsci5hcnJheT0hMCxyLnN0cmluZz0hMCxyLmFycmF5YnVmZmVyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBBcnJheUJ1ZmZlciYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4QXJyYXksci5ub2RlYnVmZmVyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBCdWZmZXIsci51aW50OGFycmF5PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5LFwidW5kZWZpbmVkXCI9PXR5cGVvZiBBcnJheUJ1ZmZlcilyLmJsb2I9ITE7ZWxzZXt2YXIgaT1uZXcgQXJyYXlCdWZmZXIoMCk7dHJ5e3IuYmxvYj0wPT09bmV3IEJsb2IoW2ldLHt0eXBlOlwiYXBwbGljYXRpb24vemlwXCJ9KS5zaXplfWNhdGNoKHQpe3RyeXt2YXIgbj1uZXcoc2VsZi5CbG9iQnVpbGRlcnx8c2VsZi5XZWJLaXRCbG9iQnVpbGRlcnx8c2VsZi5Nb3pCbG9iQnVpbGRlcnx8c2VsZi5NU0Jsb2JCdWlsZGVyKTtuLmFwcGVuZChpKSxyLmJsb2I9MD09PW4uZ2V0QmxvYihcImFwcGxpY2F0aW9uL3ppcFwiKS5zaXplfWNhdGNoKHQpe3IuYmxvYj0hMX19fXRyeXtyLm5vZGVzdHJlYW09ISF0KFwicmVhZGFibGUtc3RyZWFtXCIpLlJlYWRhYmxlfWNhdGNoKHQpe3Iubm9kZXN0cmVhbT0hMX19LHtcInJlYWRhYmxlLXN0cmVhbVwiOjE2fV0sMzE6W2Z1bmN0aW9uKHQsZSxzKXtcInVzZSBzdHJpY3RcIjtmb3IodmFyIG89dChcIi4vdXRpbHNcIiksaD10KFwiLi9zdXBwb3J0XCIpLHI9dChcIi4vbm9kZWpzVXRpbHNcIiksaT10KFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKSx1PW5ldyBBcnJheSgyNTYpLG49MDtuPDI1NjtuKyspdVtuXT0yNTI8PW4/NjoyNDg8PW4/NToyNDA8PW4/NDoyMjQ8PW4/MzoxOTI8PW4/MjoxO3VbMjU0XT11WzI1NF09MTtmdW5jdGlvbiBhKCl7aS5jYWxsKHRoaXMsXCJ1dGYtOCBkZWNvZGVcIiksdGhpcy5sZWZ0T3Zlcj1udWxsfWZ1bmN0aW9uIGwoKXtpLmNhbGwodGhpcyxcInV0Zi04IGVuY29kZVwiKX1zLnV0ZjhlbmNvZGU9ZnVuY3Rpb24odCl7cmV0dXJuIGgubm9kZWJ1ZmZlcj9yLm5ld0J1ZmZlckZyb20odCxcInV0Zi04XCIpOmZ1bmN0aW9uKHQpe3ZhciBlLHIsaSxuLHMsYT10Lmxlbmd0aCxvPTA7Zm9yKG49MDtuPGE7bisrKTU1Mjk2PT0oNjQ1MTImKHI9dC5jaGFyQ29kZUF0KG4pKSkmJm4rMTxhJiY1NjMyMD09KDY0NTEyJihpPXQuY2hhckNvZGVBdChuKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKGktNTYzMjApLG4rKyksbys9cjwxMjg/MTpyPDIwNDg/MjpyPDY1NTM2PzM6NDtmb3IoZT1oLnVpbnQ4YXJyYXk/bmV3IFVpbnQ4QXJyYXkobyk6bmV3IEFycmF5KG8pLG49cz0wO3M8bztuKyspNTUyOTY9PSg2NDUxMiYocj10LmNoYXJDb2RlQXQobikpKSYmbisxPGEmJjU2MzIwPT0oNjQ1MTImKGk9dC5jaGFyQ29kZUF0KG4rMSkpKSYmKHI9NjU1MzYrKHItNTUyOTY8PDEwKSsoaS01NjMyMCksbisrKSxyPDEyOD9lW3MrK109cjoocjwyMDQ4P2VbcysrXT0xOTJ8cj4+PjY6KHI8NjU1MzY/ZVtzKytdPTIyNHxyPj4+MTI6KGVbcysrXT0yNDB8cj4+PjE4LGVbcysrXT0xMjh8cj4+PjEyJjYzKSxlW3MrK109MTI4fHI+Pj42JjYzKSxlW3MrK109MTI4fDYzJnIpO3JldHVybiBlfSh0KX0scy51dGY4ZGVjb2RlPWZ1bmN0aW9uKHQpe3JldHVybiBoLm5vZGVidWZmZXI/by50cmFuc2Zvcm1UbyhcIm5vZGVidWZmZXJcIix0KS50b1N0cmluZyhcInV0Zi04XCIpOmZ1bmN0aW9uKHQpe3ZhciBlLHIsaSxuLHM9dC5sZW5ndGgsYT1uZXcgQXJyYXkoMipzKTtmb3IoZT1yPTA7ZTxzOylpZigoaT10W2UrK10pPDEyOClhW3IrK109aTtlbHNlIGlmKDQ8KG49dVtpXSkpYVtyKytdPTY1NTMzLGUrPW4tMTtlbHNle2ZvcihpJj0yPT09bj8zMTozPT09bj8xNTo3OzE8biYmZTxzOylpPWk8PDZ8NjMmdFtlKytdLG4tLTsxPG4/YVtyKytdPTY1NTMzOmk8NjU1MzY/YVtyKytdPWk6KGktPTY1NTM2LGFbcisrXT01NTI5NnxpPj4xMCYxMDIzLGFbcisrXT01NjMyMHwxMDIzJmkpfXJldHVybiBhLmxlbmd0aCE9PXImJihhLnN1YmFycmF5P2E9YS5zdWJhcnJheSgwLHIpOmEubGVuZ3RoPXIpLG8uYXBwbHlGcm9tQ2hhckNvZGUoYSl9KHQ9by50cmFuc2Zvcm1UbyhoLnVpbnQ4YXJyYXk/XCJ1aW50OGFycmF5XCI6XCJhcnJheVwiLHQpKX0sby5pbmhlcml0cyhhLGkpLGEucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbih0KXt2YXIgZT1vLnRyYW5zZm9ybVRvKGgudWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCIsdC5kYXRhKTtpZih0aGlzLmxlZnRPdmVyJiZ0aGlzLmxlZnRPdmVyLmxlbmd0aCl7aWYoaC51aW50OGFycmF5KXt2YXIgcj1lOyhlPW5ldyBVaW50OEFycmF5KHIubGVuZ3RoK3RoaXMubGVmdE92ZXIubGVuZ3RoKSkuc2V0KHRoaXMubGVmdE92ZXIsMCksZS5zZXQocix0aGlzLmxlZnRPdmVyLmxlbmd0aCl9ZWxzZSBlPXRoaXMubGVmdE92ZXIuY29uY2F0KGUpO3RoaXMubGVmdE92ZXI9bnVsbH12YXIgaT1mdW5jdGlvbih0LGUpe3ZhciByO2ZvcigoZT1lfHx0Lmxlbmd0aCk+dC5sZW5ndGgmJihlPXQubGVuZ3RoKSxyPWUtMTswPD1yJiYxMjg9PSgxOTImdFtyXSk7KXItLTtyZXR1cm4gcjwwP2U6MD09PXI/ZTpyK3VbdFtyXV0+ZT9yOmV9KGUpLG49ZTtpIT09ZS5sZW5ndGgmJihoLnVpbnQ4YXJyYXk/KG49ZS5zdWJhcnJheSgwLGkpLHRoaXMubGVmdE92ZXI9ZS5zdWJhcnJheShpLGUubGVuZ3RoKSk6KG49ZS5zbGljZSgwLGkpLHRoaXMubGVmdE92ZXI9ZS5zbGljZShpLGUubGVuZ3RoKSkpLHRoaXMucHVzaCh7ZGF0YTpzLnV0ZjhkZWNvZGUobiksbWV0YTp0Lm1ldGF9KX0sYS5wcm90b3R5cGUuZmx1c2g9ZnVuY3Rpb24oKXt0aGlzLmxlZnRPdmVyJiZ0aGlzLmxlZnRPdmVyLmxlbmd0aCYmKHRoaXMucHVzaCh7ZGF0YTpzLnV0ZjhkZWNvZGUodGhpcy5sZWZ0T3ZlciksbWV0YTp7fX0pLHRoaXMubGVmdE92ZXI9bnVsbCl9LHMuVXRmOERlY29kZVdvcmtlcj1hLG8uaW5oZXJpdHMobCxpKSxsLnByb3RvdHlwZS5wcm9jZXNzQ2h1bms9ZnVuY3Rpb24odCl7dGhpcy5wdXNoKHtkYXRhOnMudXRmOGVuY29kZSh0LmRhdGEpLG1ldGE6dC5tZXRhfSl9LHMuVXRmOEVuY29kZVdvcmtlcj1sfSx7XCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3N1cHBvcnRcIjozMCxcIi4vdXRpbHNcIjozMn1dLDMyOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89dChcIi4vc3VwcG9ydFwiKSxoPXQoXCIuL2Jhc2U2NFwiKSxyPXQoXCIuL25vZGVqc1V0aWxzXCIpLGk9dChcInNldC1pbW1lZGlhdGUtc2hpbVwiKSx1PXQoXCIuL2V4dGVybmFsXCIpO2Z1bmN0aW9uIG4odCl7cmV0dXJuIHR9ZnVuY3Rpb24gbCh0LGUpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7KytyKWVbcl09MjU1JnQuY2hhckNvZGVBdChyKTtyZXR1cm4gZX1hLm5ld0Jsb2I9ZnVuY3Rpb24oZSxyKXthLmNoZWNrU3VwcG9ydChcImJsb2JcIik7dHJ5e3JldHVybiBuZXcgQmxvYihbZV0se3R5cGU6cn0pfWNhdGNoKHQpe3RyeXt2YXIgaT1uZXcoc2VsZi5CbG9iQnVpbGRlcnx8c2VsZi5XZWJLaXRCbG9iQnVpbGRlcnx8c2VsZi5Nb3pCbG9iQnVpbGRlcnx8c2VsZi5NU0Jsb2JCdWlsZGVyKTtyZXR1cm4gaS5hcHBlbmQoZSksaS5nZXRCbG9iKHIpfWNhdGNoKHQpe3Rocm93IG5ldyBFcnJvcihcIkJ1ZyA6IGNhbid0IGNvbnN0cnVjdCB0aGUgQmxvYi5cIil9fX07dmFyIHM9e3N0cmluZ2lmeUJ5Q2h1bms6ZnVuY3Rpb24odCxlLHIpe3ZhciBpPVtdLG49MCxzPXQubGVuZ3RoO2lmKHM8PXIpcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCx0KTtmb3IoO248czspXCJhcnJheVwiPT09ZXx8XCJub2RlYnVmZmVyXCI9PT1lP2kucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsdC5zbGljZShuLE1hdGgubWluKG4rcixzKSkpKTppLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHQuc3ViYXJyYXkobixNYXRoLm1pbihuK3IscykpKSksbis9cjtyZXR1cm4gaS5qb2luKFwiXCIpfSxzdHJpbmdpZnlCeUNoYXI6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPVwiXCIscj0wO3I8dC5sZW5ndGg7cisrKWUrPVN0cmluZy5mcm9tQ2hhckNvZGUodFtyXSk7cmV0dXJuIGV9LGFwcGx5Q2FuQmVVc2VkOnt1aW50OGFycmF5OmZ1bmN0aW9uKCl7dHJ5e3JldHVybiBvLnVpbnQ4YXJyYXkmJjE9PT1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsbmV3IFVpbnQ4QXJyYXkoMSkpLmxlbmd0aH1jYXRjaCh0KXtyZXR1cm4hMX19KCksbm9kZWJ1ZmZlcjpmdW5jdGlvbigpe3RyeXtyZXR1cm4gby5ub2RlYnVmZmVyJiYxPT09U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHIuYWxsb2NCdWZmZXIoMSkpLmxlbmd0aH1jYXRjaCh0KXtyZXR1cm4hMX19KCl9fTtmdW5jdGlvbiBmKHQpe3ZhciBlPTY1NTM2LHI9YS5nZXRUeXBlT2YodCksaT0hMDtpZihcInVpbnQ4YXJyYXlcIj09PXI/aT1zLmFwcGx5Q2FuQmVVc2VkLnVpbnQ4YXJyYXk6XCJub2RlYnVmZmVyXCI9PT1yJiYoaT1zLmFwcGx5Q2FuQmVVc2VkLm5vZGVidWZmZXIpLGkpZm9yKDsxPGU7KXRyeXtyZXR1cm4gcy5zdHJpbmdpZnlCeUNodW5rKHQscixlKX1jYXRjaCh0KXtlPU1hdGguZmxvb3IoZS8yKX1yZXR1cm4gcy5zdHJpbmdpZnlCeUNoYXIodCl9ZnVuY3Rpb24gZCh0LGUpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKWVbcl09dFtyXTtyZXR1cm4gZX1hLmFwcGx5RnJvbUNoYXJDb2RlPWY7dmFyIGM9e307Yy5zdHJpbmc9e3N0cmluZzpuLGFycmF5OmZ1bmN0aW9uKHQpe3JldHVybiBsKHQsbmV3IEFycmF5KHQubGVuZ3RoKSl9LGFycmF5YnVmZmVyOmZ1bmN0aW9uKHQpe3JldHVybiBjLnN0cmluZy51aW50OGFycmF5KHQpLmJ1ZmZlcn0sdWludDhhcnJheTpmdW5jdGlvbih0KXtyZXR1cm4gbCh0LG5ldyBVaW50OEFycmF5KHQubGVuZ3RoKSl9LG5vZGVidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIGwodCxyLmFsbG9jQnVmZmVyKHQubGVuZ3RoKSl9fSxjLmFycmF5PXtzdHJpbmc6ZixhcnJheTpuLGFycmF5YnVmZmVyOmZ1bmN0aW9uKHQpe3JldHVybiBuZXcgVWludDhBcnJheSh0KS5idWZmZXJ9LHVpbnQ4YXJyYXk6ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBVaW50OEFycmF5KHQpfSxub2RlYnVmZmVyOmZ1bmN0aW9uKHQpe3JldHVybiByLm5ld0J1ZmZlckZyb20odCl9fSxjLmFycmF5YnVmZmVyPXtzdHJpbmc6ZnVuY3Rpb24odCl7cmV0dXJuIGYobmV3IFVpbnQ4QXJyYXkodCkpfSxhcnJheTpmdW5jdGlvbih0KXtyZXR1cm4gZChuZXcgVWludDhBcnJheSh0KSxuZXcgQXJyYXkodC5ieXRlTGVuZ3RoKSl9LGFycmF5YnVmZmVyOm4sdWludDhhcnJheTpmdW5jdGlvbih0KXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkodCl9LG5vZGVidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIHIubmV3QnVmZmVyRnJvbShuZXcgVWludDhBcnJheSh0KSl9fSxjLnVpbnQ4YXJyYXk9e3N0cmluZzpmLGFycmF5OmZ1bmN0aW9uKHQpe3JldHVybiBkKHQsbmV3IEFycmF5KHQubGVuZ3RoKSl9LGFycmF5YnVmZmVyOmZ1bmN0aW9uKHQpe3JldHVybiB0LmJ1ZmZlcn0sdWludDhhcnJheTpuLG5vZGVidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIHIubmV3QnVmZmVyRnJvbSh0KX19LGMubm9kZWJ1ZmZlcj17c3RyaW5nOmYsYXJyYXk6ZnVuY3Rpb24odCl7cmV0dXJuIGQodCxuZXcgQXJyYXkodC5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIGMubm9kZWJ1ZmZlci51aW50OGFycmF5KHQpLmJ1ZmZlcn0sdWludDhhcnJheTpmdW5jdGlvbih0KXtyZXR1cm4gZCh0LG5ldyBVaW50OEFycmF5KHQubGVuZ3RoKSl9LG5vZGVidWZmZXI6bn0sYS50cmFuc2Zvcm1Ubz1mdW5jdGlvbih0LGUpe2lmKGU9ZXx8XCJcIiwhdClyZXR1cm4gZTthLmNoZWNrU3VwcG9ydCh0KTt2YXIgcj1hLmdldFR5cGVPZihlKTtyZXR1cm4gY1tyXVt0XShlKX0sYS5nZXRUeXBlT2Y9ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/XCJzdHJpbmdcIjpcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCk/XCJhcnJheVwiOm8ubm9kZWJ1ZmZlciYmci5pc0J1ZmZlcih0KT9cIm5vZGVidWZmZXJcIjpvLnVpbnQ4YXJyYXkmJnQgaW5zdGFuY2VvZiBVaW50OEFycmF5P1widWludDhhcnJheVwiOm8uYXJyYXlidWZmZXImJnQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcj9cImFycmF5YnVmZmVyXCI6dm9pZCAwfSxhLmNoZWNrU3VwcG9ydD1mdW5jdGlvbih0KXtpZighb1t0LnRvTG93ZXJDYXNlKCldKXRocm93IG5ldyBFcnJvcih0K1wiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBwbGF0Zm9ybVwiKX0sYS5NQVhfVkFMVUVfMTZCSVRTPTY1NTM1LGEuTUFYX1ZBTFVFXzMyQklUUz0tMSxhLnByZXR0eT1mdW5jdGlvbih0KXt2YXIgZSxyLGk9XCJcIjtmb3Iocj0wO3I8KHR8fFwiXCIpLmxlbmd0aDtyKyspaSs9XCJcXFxceFwiKygoZT10LmNoYXJDb2RlQXQocikpPDE2P1wiMFwiOlwiXCIpK2UudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7cmV0dXJuIGl9LGEuZGVsYXk9ZnVuY3Rpb24odCxlLHIpe2koZnVuY3Rpb24oKXt0LmFwcGx5KHJ8fG51bGwsZXx8W10pfSl9LGEuaW5oZXJpdHM9ZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKCl7fXIucHJvdG90eXBlPWUucHJvdG90eXBlLHQucHJvdG90eXBlPW5ldyByfSxhLmV4dGVuZD1mdW5jdGlvbigpe3ZhciB0LGUscj17fTtmb3IodD0wO3Q8YXJndW1lbnRzLmxlbmd0aDt0KyspZm9yKGUgaW4gYXJndW1lbnRzW3RdKWFyZ3VtZW50c1t0XS5oYXNPd25Qcm9wZXJ0eShlKSYmdm9pZCAwPT09cltlXSYmKHJbZV09YXJndW1lbnRzW3RdW2VdKTtyZXR1cm4gcn0sYS5wcmVwYXJlQ29udGVudD1mdW5jdGlvbihyLHQsaSxuLHMpe3JldHVybiB1LlByb21pc2UucmVzb2x2ZSh0KS50aGVuKGZ1bmN0aW9uKGkpe3JldHVybiBvLmJsb2ImJihpIGluc3RhbmNlb2YgQmxvYnx8LTEhPT1bXCJbb2JqZWN0IEZpbGVdXCIsXCJbb2JqZWN0IEJsb2JdXCJdLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGkpKSkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBGaWxlUmVhZGVyP25ldyB1LlByb21pc2UoZnVuY3Rpb24oZSxyKXt2YXIgdD1uZXcgRmlsZVJlYWRlcjt0Lm9ubG9hZD1mdW5jdGlvbih0KXtlKHQudGFyZ2V0LnJlc3VsdCl9LHQub25lcnJvcj1mdW5jdGlvbih0KXtyKHQudGFyZ2V0LmVycm9yKX0sdC5yZWFkQXNBcnJheUJ1ZmZlcihpKX0pOml9KS50aGVuKGZ1bmN0aW9uKHQpe3ZhciBlPWEuZ2V0VHlwZU9mKHQpO3JldHVybiBlPyhcImFycmF5YnVmZmVyXCI9PT1lP3Q9YS50cmFuc2Zvcm1UbyhcInVpbnQ4YXJyYXlcIix0KTpcInN0cmluZ1wiPT09ZSYmKHM/dD1oLmRlY29kZSh0KTppJiYhMCE9PW4mJih0PWZ1bmN0aW9uKHQpe3JldHVybiBsKHQsby51aW50OGFycmF5P25ldyBVaW50OEFycmF5KHQubGVuZ3RoKTpuZXcgQXJyYXkodC5sZW5ndGgpKX0odCkpKSx0KTp1LlByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbid0IHJlYWQgdGhlIGRhdGEgb2YgJ1wiK3IrXCInLiBJcyBpdCBpbiBhIHN1cHBvcnRlZCBKYXZhU2NyaXB0IHR5cGUgKFN0cmluZywgQmxvYiwgQXJyYXlCdWZmZXIsIGV0YykgP1wiKSl9KX19LHtcIi4vYmFzZTY0XCI6MSxcIi4vZXh0ZXJuYWxcIjo2LFwiLi9ub2RlanNVdGlsc1wiOjE0LFwiLi9zdXBwb3J0XCI6MzAsXCJzZXQtaW1tZWRpYXRlLXNoaW1cIjo1NH1dLDMzOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vcmVhZGVyL3JlYWRlckZvclwiKSxuPXQoXCIuL3V0aWxzXCIpLHM9dChcIi4vc2lnbmF0dXJlXCIpLGE9dChcIi4vemlwRW50cnlcIiksbz0odChcIi4vdXRmOFwiKSx0KFwiLi9zdXBwb3J0XCIpKTtmdW5jdGlvbiBoKHQpe3RoaXMuZmlsZXM9W10sdGhpcy5sb2FkT3B0aW9ucz10fWgucHJvdG90eXBlPXtjaGVja1NpZ25hdHVyZTpmdW5jdGlvbih0KXtpZighdGhpcy5yZWFkZXIucmVhZEFuZENoZWNrU2lnbmF0dXJlKHQpKXt0aGlzLnJlYWRlci5pbmRleC09NDt2YXIgZT10aGlzLnJlYWRlci5yZWFkU3RyaW5nKDQpO3Rocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXAgb3IgYnVnOiB1bmV4cGVjdGVkIHNpZ25hdHVyZSAoXCIrbi5wcmV0dHkoZSkrXCIsIGV4cGVjdGVkIFwiK24ucHJldHR5KHQpK1wiKVwiKX19LGlzU2lnbmF0dXJlOmZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpcy5yZWFkZXIuaW5kZXg7dGhpcy5yZWFkZXIuc2V0SW5kZXgodCk7dmFyIGk9dGhpcy5yZWFkZXIucmVhZFN0cmluZyg0KT09PWU7cmV0dXJuIHRoaXMucmVhZGVyLnNldEluZGV4KHIpLGl9LHJlYWRCbG9ja0VuZE9mQ2VudHJhbDpmdW5jdGlvbigpe3RoaXMuZGlza051bWJlcj10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuY2VudHJhbERpclJlY29yZHM9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0aGlzLmNlbnRyYWxEaXJTaXplPXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy5jZW50cmFsRGlyT2Zmc2V0PXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy56aXBDb21tZW50TGVuZ3RoPXRoaXMucmVhZGVyLnJlYWRJbnQoMik7dmFyIHQ9dGhpcy5yZWFkZXIucmVhZERhdGEodGhpcy56aXBDb21tZW50TGVuZ3RoKSxlPW8udWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCIscj1uLnRyYW5zZm9ybVRvKGUsdCk7dGhpcy56aXBDb21tZW50PXRoaXMubG9hZE9wdGlvbnMuZGVjb2RlRmlsZU5hbWUocil9LHJlYWRCbG9ja1ppcDY0RW5kT2ZDZW50cmFsOmZ1bmN0aW9uKCl7dGhpcy56aXA2NEVuZE9mQ2VudHJhbFNpemU9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLnJlYWRlci5za2lwKDQpLHRoaXMuZGlza051bWJlcj10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9dGhpcy5yZWFkZXIucmVhZEludCg0KSx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuY2VudHJhbERpclJlY29yZHM9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLmNlbnRyYWxEaXJTaXplPXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy5jZW50cmFsRGlyT2Zmc2V0PXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy56aXA2NEV4dGVuc2libGVEYXRhPXt9O2Zvcih2YXIgdCxlLHIsaT10aGlzLnppcDY0RW5kT2ZDZW50cmFsU2l6ZS00NDswPGk7KXQ9dGhpcy5yZWFkZXIucmVhZEludCgyKSxlPXRoaXMucmVhZGVyLnJlYWRJbnQoNCkscj10aGlzLnJlYWRlci5yZWFkRGF0YShlKSx0aGlzLnppcDY0RXh0ZW5zaWJsZURhdGFbdF09e2lkOnQsbGVuZ3RoOmUsdmFsdWU6cn19LHJlYWRCbG9ja1ppcDY0RW5kT2ZDZW50cmFsTG9jYXRvcjpmdW5jdGlvbigpe2lmKHRoaXMuZGlza1dpdGhaaXA2NENlbnRyYWxEaXJTdGFydD10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpcj10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuZGlza3NDb3VudD10aGlzLnJlYWRlci5yZWFkSW50KDQpLDE8dGhpcy5kaXNrc0NvdW50KXRocm93IG5ldyBFcnJvcihcIk11bHRpLXZvbHVtZXMgemlwIGFyZSBub3Qgc3VwcG9ydGVkXCIpfSxyZWFkTG9jYWxGaWxlczpmdW5jdGlvbigpe3ZhciB0LGU7Zm9yKHQ9MDt0PHRoaXMuZmlsZXMubGVuZ3RoO3QrKyllPXRoaXMuZmlsZXNbdF0sdGhpcy5yZWFkZXIuc2V0SW5kZXgoZS5sb2NhbEhlYWRlck9mZnNldCksdGhpcy5jaGVja1NpZ25hdHVyZShzLkxPQ0FMX0ZJTEVfSEVBREVSKSxlLnJlYWRMb2NhbFBhcnQodGhpcy5yZWFkZXIpLGUuaGFuZGxlVVRGOCgpLGUucHJvY2Vzc0F0dHJpYnV0ZXMoKX0scmVhZENlbnRyYWxEaXI6ZnVuY3Rpb24oKXt2YXIgdDtmb3IodGhpcy5yZWFkZXIuc2V0SW5kZXgodGhpcy5jZW50cmFsRGlyT2Zmc2V0KTt0aGlzLnJlYWRlci5yZWFkQW5kQ2hlY2tTaWduYXR1cmUocy5DRU5UUkFMX0ZJTEVfSEVBREVSKTspKHQ9bmV3IGEoe3ppcDY0OnRoaXMuemlwNjR9LHRoaXMubG9hZE9wdGlvbnMpKS5yZWFkQ2VudHJhbFBhcnQodGhpcy5yZWFkZXIpLHRoaXMuZmlsZXMucHVzaCh0KTtpZih0aGlzLmNlbnRyYWxEaXJSZWNvcmRzIT09dGhpcy5maWxlcy5sZW5ndGgmJjAhPT10aGlzLmNlbnRyYWxEaXJSZWNvcmRzJiYwPT09dGhpcy5maWxlcy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCBvciBidWc6IGV4cGVjdGVkIFwiK3RoaXMuY2VudHJhbERpclJlY29yZHMrXCIgcmVjb3JkcyBpbiBjZW50cmFsIGRpciwgZ290IFwiK3RoaXMuZmlsZXMubGVuZ3RoKX0scmVhZEVuZE9mQ2VudHJhbDpmdW5jdGlvbigpe3ZhciB0PXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKTtpZih0PDApdGhyb3chdGhpcy5pc1NpZ25hdHVyZSgwLHMuTE9DQUxfRklMRV9IRUFERVIpP25ldyBFcnJvcihcIkNhbid0IGZpbmQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5IDogaXMgdGhpcyBhIHppcCBmaWxlID8gSWYgaXQgaXMsIHNlZSBodHRwczovL3N0dWsuZ2l0aHViLmlvL2pzemlwL2RvY3VtZW50YXRpb24vaG93dG8vcmVhZF96aXAuaHRtbFwiKTpuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwOiBjYW4ndCBmaW5kIGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeVwiKTt0aGlzLnJlYWRlci5zZXRJbmRleCh0KTt2YXIgZT10O2lmKHRoaXMuY2hlY2tTaWduYXR1cmUocy5DRU5UUkFMX0RJUkVDVE9SWV9FTkQpLHRoaXMucmVhZEJsb2NrRW5kT2ZDZW50cmFsKCksdGhpcy5kaXNrTnVtYmVyPT09bi5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmRpc2tXaXRoQ2VudHJhbERpclN0YXJ0PT09bi5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz09PW4uTUFYX1ZBTFVFXzE2QklUU3x8dGhpcy5jZW50cmFsRGlyUmVjb3Jkcz09PW4uTUFYX1ZBTFVFXzE2QklUU3x8dGhpcy5jZW50cmFsRGlyU2l6ZT09PW4uTUFYX1ZBTFVFXzMyQklUU3x8dGhpcy5jZW50cmFsRGlyT2Zmc2V0PT09bi5NQVhfVkFMVUVfMzJCSVRTKXtpZih0aGlzLnppcDY0PSEwLCh0PXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUikpPDApdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcDogY2FuJ3QgZmluZCB0aGUgWklQNjQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5IGxvY2F0b3JcIik7aWYodGhpcy5yZWFkZXIuc2V0SW5kZXgodCksdGhpcy5jaGVja1NpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0xPQ0FUT1IpLHRoaXMucmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWxMb2NhdG9yKCksIXRoaXMuaXNTaWduYXR1cmUodGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyLHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKSYmKHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpcj10aGlzLnJlYWRlci5sYXN0SW5kZXhPZlNpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0VORCksdGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyPDApKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IGNhbid0IGZpbmQgdGhlIFpJUDY0IGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeVwiKTt0aGlzLnJlYWRlci5zZXRJbmRleCh0aGlzLnJlbGF0aXZlT2Zmc2V0RW5kT2ZaaXA2NENlbnRyYWxEaXIpLHRoaXMuY2hlY2tTaWduYXR1cmUocy5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQpLHRoaXMucmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWwoKX12YXIgcj10aGlzLmNlbnRyYWxEaXJPZmZzZXQrdGhpcy5jZW50cmFsRGlyU2l6ZTt0aGlzLnppcDY0JiYocis9MjAscis9MTIrdGhpcy56aXA2NEVuZE9mQ2VudHJhbFNpemUpO3ZhciBpPWUtcjtpZigwPGkpdGhpcy5pc1NpZ25hdHVyZShlLHMuQ0VOVFJBTF9GSUxFX0hFQURFUil8fCh0aGlzLnJlYWRlci56ZXJvPWkpO2Vsc2UgaWYoaTwwKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IG1pc3NpbmcgXCIrTWF0aC5hYnMoaSkrXCIgYnl0ZXMuXCIpfSxwcmVwYXJlUmVhZGVyOmZ1bmN0aW9uKHQpe3RoaXMucmVhZGVyPWkodCl9LGxvYWQ6ZnVuY3Rpb24odCl7dGhpcy5wcmVwYXJlUmVhZGVyKHQpLHRoaXMucmVhZEVuZE9mQ2VudHJhbCgpLHRoaXMucmVhZENlbnRyYWxEaXIoKSx0aGlzLnJlYWRMb2NhbEZpbGVzKCl9fSxlLmV4cG9ydHM9aH0se1wiLi9yZWFkZXIvcmVhZGVyRm9yXCI6MjIsXCIuL3NpZ25hdHVyZVwiOjIzLFwiLi9zdXBwb3J0XCI6MzAsXCIuL3V0ZjhcIjozMSxcIi4vdXRpbHNcIjozMixcIi4vemlwRW50cnlcIjozNH1dLDM0OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vcmVhZGVyL3JlYWRlckZvclwiKSxzPXQoXCIuL3V0aWxzXCIpLG49dChcIi4vY29tcHJlc3NlZE9iamVjdFwiKSxhPXQoXCIuL2NyYzMyXCIpLG89dChcIi4vdXRmOFwiKSxoPXQoXCIuL2NvbXByZXNzaW9uc1wiKSx1PXQoXCIuL3N1cHBvcnRcIik7ZnVuY3Rpb24gbCh0LGUpe3RoaXMub3B0aW9ucz10LHRoaXMubG9hZE9wdGlvbnM9ZX1sLnByb3RvdHlwZT17aXNFbmNyeXB0ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gMT09KDEmdGhpcy5iaXRGbGFnKX0sdXNlVVRGODpmdW5jdGlvbigpe3JldHVybiAyMDQ4PT0oMjA0OCZ0aGlzLmJpdEZsYWcpfSxyZWFkTG9jYWxQYXJ0OmZ1bmN0aW9uKHQpe3ZhciBlLHI7aWYodC5za2lwKDIyKSx0aGlzLmZpbGVOYW1lTGVuZ3RoPXQucmVhZEludCgyKSxyPXQucmVhZEludCgyKSx0aGlzLmZpbGVOYW1lPXQucmVhZERhdGEodGhpcy5maWxlTmFtZUxlbmd0aCksdC5za2lwKHIpLC0xPT09dGhpcy5jb21wcmVzc2VkU2l6ZXx8LTE9PT10aGlzLnVuY29tcHJlc3NlZFNpemUpdGhyb3cgbmV3IEVycm9yKFwiQnVnIG9yIGNvcnJ1cHRlZCB6aXAgOiBkaWRuJ3QgZ2V0IGVub3VnaCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjZW50cmFsIGRpcmVjdG9yeSAoY29tcHJlc3NlZFNpemUgPT09IC0xIHx8IHVuY29tcHJlc3NlZFNpemUgPT09IC0xKVwiKTtpZihudWxsPT09KGU9ZnVuY3Rpb24odCl7Zm9yKHZhciBlIGluIGgpaWYoaC5oYXNPd25Qcm9wZXJ0eShlKSYmaFtlXS5tYWdpYz09PXQpcmV0dXJuIGhbZV07cmV0dXJuIG51bGx9KHRoaXMuY29tcHJlc3Npb25NZXRob2QpKSl0aHJvdyBuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwIDogY29tcHJlc3Npb24gXCIrcy5wcmV0dHkodGhpcy5jb21wcmVzc2lvbk1ldGhvZCkrXCIgdW5rbm93biAoaW5uZXIgZmlsZSA6IFwiK3MudHJhbnNmb3JtVG8oXCJzdHJpbmdcIix0aGlzLmZpbGVOYW1lKStcIilcIik7dGhpcy5kZWNvbXByZXNzZWQ9bmV3IG4odGhpcy5jb21wcmVzc2VkU2l6ZSx0aGlzLnVuY29tcHJlc3NlZFNpemUsdGhpcy5jcmMzMixlLHQucmVhZERhdGEodGhpcy5jb21wcmVzc2VkU2l6ZSkpfSxyZWFkQ2VudHJhbFBhcnQ6ZnVuY3Rpb24odCl7dGhpcy52ZXJzaW9uTWFkZUJ5PXQucmVhZEludCgyKSx0LnNraXAoMiksdGhpcy5iaXRGbGFnPXQucmVhZEludCgyKSx0aGlzLmNvbXByZXNzaW9uTWV0aG9kPXQucmVhZFN0cmluZygyKSx0aGlzLmRhdGU9dC5yZWFkRGF0ZSgpLHRoaXMuY3JjMzI9dC5yZWFkSW50KDQpLHRoaXMuY29tcHJlc3NlZFNpemU9dC5yZWFkSW50KDQpLHRoaXMudW5jb21wcmVzc2VkU2l6ZT10LnJlYWRJbnQoNCk7dmFyIGU9dC5yZWFkSW50KDIpO2lmKHRoaXMuZXh0cmFGaWVsZHNMZW5ndGg9dC5yZWFkSW50KDIpLHRoaXMuZmlsZUNvbW1lbnRMZW5ndGg9dC5yZWFkSW50KDIpLHRoaXMuZGlza051bWJlclN0YXJ0PXQucmVhZEludCgyKSx0aGlzLmludGVybmFsRmlsZUF0dHJpYnV0ZXM9dC5yZWFkSW50KDIpLHRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcz10LnJlYWRJbnQoNCksdGhpcy5sb2NhbEhlYWRlck9mZnNldD10LnJlYWRJbnQoNCksdGhpcy5pc0VuY3J5cHRlZCgpKXRocm93IG5ldyBFcnJvcihcIkVuY3J5cHRlZCB6aXAgYXJlIG5vdCBzdXBwb3J0ZWRcIik7dC5za2lwKGUpLHRoaXMucmVhZEV4dHJhRmllbGRzKHQpLHRoaXMucGFyc2VaSVA2NEV4dHJhRmllbGQodCksdGhpcy5maWxlQ29tbWVudD10LnJlYWREYXRhKHRoaXMuZmlsZUNvbW1lbnRMZW5ndGgpfSxwcm9jZXNzQXR0cmlidXRlczpmdW5jdGlvbigpe3RoaXMudW5peFBlcm1pc3Npb25zPW51bGwsdGhpcy5kb3NQZXJtaXNzaW9ucz1udWxsO3ZhciB0PXRoaXMudmVyc2lvbk1hZGVCeT4+ODt0aGlzLmRpcj0hISgxNiZ0aGlzLmV4dGVybmFsRmlsZUF0dHJpYnV0ZXMpLDA9PXQmJih0aGlzLmRvc1Blcm1pc3Npb25zPTYzJnRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcyksMz09dCYmKHRoaXMudW5peFBlcm1pc3Npb25zPXRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcz4+MTYmNjU1MzUpLHRoaXMuZGlyfHxcIi9cIiE9PXRoaXMuZmlsZU5hbWVTdHIuc2xpY2UoLTEpfHwodGhpcy5kaXI9ITApfSxwYXJzZVpJUDY0RXh0cmFGaWVsZDpmdW5jdGlvbih0KXtpZih0aGlzLmV4dHJhRmllbGRzWzFdKXt2YXIgZT1pKHRoaXMuZXh0cmFGaWVsZHNbMV0udmFsdWUpO3RoaXMudW5jb21wcmVzc2VkU2l6ZT09PXMuTUFYX1ZBTFVFXzMyQklUUyYmKHRoaXMudW5jb21wcmVzc2VkU2l6ZT1lLnJlYWRJbnQoOCkpLHRoaXMuY29tcHJlc3NlZFNpemU9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLmNvbXByZXNzZWRTaXplPWUucmVhZEludCg4KSksdGhpcy5sb2NhbEhlYWRlck9mZnNldD09PXMuTUFYX1ZBTFVFXzMyQklUUyYmKHRoaXMubG9jYWxIZWFkZXJPZmZzZXQ9ZS5yZWFkSW50KDgpKSx0aGlzLmRpc2tOdW1iZXJTdGFydD09PXMuTUFYX1ZBTFVFXzMyQklUUyYmKHRoaXMuZGlza051bWJlclN0YXJ0PWUucmVhZEludCg0KSl9fSxyZWFkRXh0cmFGaWVsZHM6ZnVuY3Rpb24odCl7dmFyIGUscixpLG49dC5pbmRleCt0aGlzLmV4dHJhRmllbGRzTGVuZ3RoO2Zvcih0aGlzLmV4dHJhRmllbGRzfHwodGhpcy5leHRyYUZpZWxkcz17fSk7dC5pbmRleCs0PG47KWU9dC5yZWFkSW50KDIpLHI9dC5yZWFkSW50KDIpLGk9dC5yZWFkRGF0YShyKSx0aGlzLmV4dHJhRmllbGRzW2VdPXtpZDplLGxlbmd0aDpyLHZhbHVlOml9O3Quc2V0SW5kZXgobil9LGhhbmRsZVVURjg6ZnVuY3Rpb24oKXt2YXIgdD11LnVpbnQ4YXJyYXk/XCJ1aW50OGFycmF5XCI6XCJhcnJheVwiO2lmKHRoaXMudXNlVVRGOCgpKXRoaXMuZmlsZU5hbWVTdHI9by51dGY4ZGVjb2RlKHRoaXMuZmlsZU5hbWUpLHRoaXMuZmlsZUNvbW1lbnRTdHI9by51dGY4ZGVjb2RlKHRoaXMuZmlsZUNvbW1lbnQpO2Vsc2V7dmFyIGU9dGhpcy5maW5kRXh0cmFGaWVsZFVuaWNvZGVQYXRoKCk7aWYobnVsbCE9PWUpdGhpcy5maWxlTmFtZVN0cj1lO2Vsc2V7dmFyIHI9cy50cmFuc2Zvcm1Ubyh0LHRoaXMuZmlsZU5hbWUpO3RoaXMuZmlsZU5hbWVTdHI9dGhpcy5sb2FkT3B0aW9ucy5kZWNvZGVGaWxlTmFtZShyKX12YXIgaT10aGlzLmZpbmRFeHRyYUZpZWxkVW5pY29kZUNvbW1lbnQoKTtpZihudWxsIT09aSl0aGlzLmZpbGVDb21tZW50U3RyPWk7ZWxzZXt2YXIgbj1zLnRyYW5zZm9ybVRvKHQsdGhpcy5maWxlQ29tbWVudCk7dGhpcy5maWxlQ29tbWVudFN0cj10aGlzLmxvYWRPcHRpb25zLmRlY29kZUZpbGVOYW1lKG4pfX19LGZpbmRFeHRyYUZpZWxkVW5pY29kZVBhdGg6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmV4dHJhRmllbGRzWzI4Nzg5XTtpZih0KXt2YXIgZT1pKHQudmFsdWUpO3JldHVybiAxIT09ZS5yZWFkSW50KDEpP251bGw6YSh0aGlzLmZpbGVOYW1lKSE9PWUucmVhZEludCg0KT9udWxsOm8udXRmOGRlY29kZShlLnJlYWREYXRhKHQubGVuZ3RoLTUpKX1yZXR1cm4gbnVsbH0sZmluZEV4dHJhRmllbGRVbmljb2RlQ29tbWVudDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuZXh0cmFGaWVsZHNbMjU0NjFdO2lmKHQpe3ZhciBlPWkodC52YWx1ZSk7cmV0dXJuIDEhPT1lLnJlYWRJbnQoMSk/bnVsbDphKHRoaXMuZmlsZUNvbW1lbnQpIT09ZS5yZWFkSW50KDQpP251bGw6by51dGY4ZGVjb2RlKGUucmVhZERhdGEodC5sZW5ndGgtNSkpfXJldHVybiBudWxsfX0sZS5leHBvcnRzPWx9LHtcIi4vY29tcHJlc3NlZE9iamVjdFwiOjIsXCIuL2NvbXByZXNzaW9uc1wiOjMsXCIuL2NyYzMyXCI6NCxcIi4vcmVhZGVyL3JlYWRlckZvclwiOjIyLFwiLi9zdXBwb3J0XCI6MzAsXCIuL3V0ZjhcIjozMSxcIi4vdXRpbHNcIjozMn1dLDM1OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaSh0LGUscil7dGhpcy5uYW1lPXQsdGhpcy5kaXI9ci5kaXIsdGhpcy5kYXRlPXIuZGF0ZSx0aGlzLmNvbW1lbnQ9ci5jb21tZW50LHRoaXMudW5peFBlcm1pc3Npb25zPXIudW5peFBlcm1pc3Npb25zLHRoaXMuZG9zUGVybWlzc2lvbnM9ci5kb3NQZXJtaXNzaW9ucyx0aGlzLl9kYXRhPWUsdGhpcy5fZGF0YUJpbmFyeT1yLmJpbmFyeSx0aGlzLm9wdGlvbnM9e2NvbXByZXNzaW9uOnIuY29tcHJlc3Npb24sY29tcHJlc3Npb25PcHRpb25zOnIuY29tcHJlc3Npb25PcHRpb25zfX12YXIgcz10KFwiLi9zdHJlYW0vU3RyZWFtSGVscGVyXCIpLG49dChcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIiksYT10KFwiLi91dGY4XCIpLG89dChcIi4vY29tcHJlc3NlZE9iamVjdFwiKSxoPXQoXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpO2kucHJvdG90eXBlPXtpbnRlcm5hbFN0cmVhbTpmdW5jdGlvbih0KXt2YXIgZT1udWxsLHI9XCJzdHJpbmdcIjt0cnl7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiTm8gb3V0cHV0IHR5cGUgc3BlY2lmaWVkLlwiKTt2YXIgaT1cInN0cmluZ1wiPT09KHI9dC50b0xvd2VyQ2FzZSgpKXx8XCJ0ZXh0XCI9PT1yO1wiYmluYXJ5c3RyaW5nXCIhPT1yJiZcInRleHRcIiE9PXJ8fChyPVwic3RyaW5nXCIpLGU9dGhpcy5fZGVjb21wcmVzc1dvcmtlcigpO3ZhciBuPSF0aGlzLl9kYXRhQmluYXJ5O24mJiFpJiYoZT1lLnBpcGUobmV3IGEuVXRmOEVuY29kZVdvcmtlcikpLCFuJiZpJiYoZT1lLnBpcGUobmV3IGEuVXRmOERlY29kZVdvcmtlcikpfWNhdGNoKHQpeyhlPW5ldyBoKFwiZXJyb3JcIikpLmVycm9yKHQpfXJldHVybiBuZXcgcyhlLHIsXCJcIil9LGFzeW5jOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuaW50ZXJuYWxTdHJlYW0odCkuYWNjdW11bGF0ZShlKX0sbm9kZVN0cmVhbTpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmludGVybmFsU3RyZWFtKHR8fFwibm9kZWJ1ZmZlclwiKS50b05vZGVqc1N0cmVhbShlKX0sX2NvbXByZXNzV29ya2VyOmZ1bmN0aW9uKHQsZSl7aWYodGhpcy5fZGF0YSBpbnN0YW5jZW9mIG8mJnRoaXMuX2RhdGEuY29tcHJlc3Npb24ubWFnaWM9PT10Lm1hZ2ljKXJldHVybiB0aGlzLl9kYXRhLmdldENvbXByZXNzZWRXb3JrZXIoKTt2YXIgcj10aGlzLl9kZWNvbXByZXNzV29ya2VyKCk7cmV0dXJuIHRoaXMuX2RhdGFCaW5hcnl8fChyPXIucGlwZShuZXcgYS5VdGY4RW5jb2RlV29ya2VyKSksby5jcmVhdGVXb3JrZXJGcm9tKHIsdCxlKX0sX2RlY29tcHJlc3NXb3JrZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGF0YSBpbnN0YW5jZW9mIG8/dGhpcy5fZGF0YS5nZXRDb250ZW50V29ya2VyKCk6dGhpcy5fZGF0YSBpbnN0YW5jZW9mIGg/dGhpcy5fZGF0YTpuZXcgbih0aGlzLl9kYXRhKX19O2Zvcih2YXIgdT1bXCJhc1RleHRcIixcImFzQmluYXJ5XCIsXCJhc05vZGVCdWZmZXJcIixcImFzVWludDhBcnJheVwiLFwiYXNBcnJheUJ1ZmZlclwiXSxsPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiVGhpcyBtZXRob2QgaGFzIGJlZW4gcmVtb3ZlZCBpbiBKU1ppcCAzLjAsIHBsZWFzZSBjaGVjayB0aGUgdXBncmFkZSBndWlkZS5cIil9LGY9MDtmPHUubGVuZ3RoO2YrKylpLnByb3RvdHlwZVt1W2ZdXT1sO2UuZXhwb3J0cz1pfSx7XCIuL2NvbXByZXNzZWRPYmplY3RcIjoyLFwiLi9zdHJlYW0vRGF0YVdvcmtlclwiOjI3LFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi9zdHJlYW0vU3RyZWFtSGVscGVyXCI6MjksXCIuL3V0ZjhcIjozMX1dLDM2OltmdW5jdGlvbih0LGwsZSl7KGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO3ZhciByLGksdD1lLk11dGF0aW9uT2JzZXJ2ZXJ8fGUuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtpZih0KXt2YXIgbj0wLHM9bmV3IHQodSksYT1lLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO3Mub2JzZXJ2ZShhLHtjaGFyYWN0ZXJEYXRhOiEwfSkscj1mdW5jdGlvbigpe2EuZGF0YT1uPSsrbiUyfX1lbHNlIGlmKGUuc2V0SW1tZWRpYXRlfHx2b2lkIDA9PT1lLk1lc3NhZ2VDaGFubmVsKXI9XCJkb2N1bWVudFwiaW4gZSYmXCJvbnJlYWR5c3RhdGVjaGFuZ2VcImluIGUuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKT9mdW5jdGlvbigpe3ZhciB0PWUuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTt0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3UoKSx0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9LGUuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHQpfTpmdW5jdGlvbigpe3NldFRpbWVvdXQodSwwKX07ZWxzZXt2YXIgbz1uZXcgZS5NZXNzYWdlQ2hhbm5lbDtvLnBvcnQxLm9ubWVzc2FnZT11LHI9ZnVuY3Rpb24oKXtvLnBvcnQyLnBvc3RNZXNzYWdlKDApfX12YXIgaD1bXTtmdW5jdGlvbiB1KCl7dmFyIHQsZTtpPSEwO2Zvcih2YXIgcj1oLmxlbmd0aDtyOyl7Zm9yKGU9aCxoPVtdLHQ9LTE7Kyt0PHI7KWVbdF0oKTtyPWgubGVuZ3RofWk9ITF9bC5leHBvcnRzPWZ1bmN0aW9uKHQpezEhPT1oLnB1c2godCl8fGl8fHIoKX19KS5jYWxsKHRoaXMsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp7fSl9LHt9XSwzNzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXQoXCJpbW1lZGlhdGVcIik7ZnVuY3Rpb24gdSgpe312YXIgbD17fSxzPVtcIlJFSkVDVEVEXCJdLGE9W1wiRlVMRklMTEVEXCJdLGk9W1wiUEVORElOR1wiXTtmdW5jdGlvbiBvKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcInJlc29sdmVyIG11c3QgYmUgYSBmdW5jdGlvblwiKTt0aGlzLnN0YXRlPWksdGhpcy5xdWV1ZT1bXSx0aGlzLm91dGNvbWU9dm9pZCAwLHQhPT11JiZjKHRoaXMsdCl9ZnVuY3Rpb24gaCh0LGUscil7dGhpcy5wcm9taXNlPXQsXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmKHRoaXMub25GdWxmaWxsZWQ9ZSx0aGlzLmNhbGxGdWxmaWxsZWQ9dGhpcy5vdGhlckNhbGxGdWxmaWxsZWQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHImJih0aGlzLm9uUmVqZWN0ZWQ9cix0aGlzLmNhbGxSZWplY3RlZD10aGlzLm90aGVyQ2FsbFJlamVjdGVkKX1mdW5jdGlvbiBmKGUscixpKXtuKGZ1bmN0aW9uKCl7dmFyIHQ7dHJ5e3Q9cihpKX1jYXRjaCh0KXtyZXR1cm4gbC5yZWplY3QoZSx0KX10PT09ZT9sLnJlamVjdChlLG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVzb2x2ZSBwcm9taXNlIHdpdGggaXRzZWxmXCIpKTpsLnJlc29sdmUoZSx0KX0pfWZ1bmN0aW9uIGQodCl7dmFyIGU9dCYmdC50aGVuO2lmKHQmJihcIm9iamVjdFwiPT10eXBlb2YgdHx8XCJmdW5jdGlvblwiPT10eXBlb2YgdCkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUpcmV0dXJuIGZ1bmN0aW9uKCl7ZS5hcHBseSh0LGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGMoZSx0KXt2YXIgcj0hMTtmdW5jdGlvbiBpKHQpe3J8fChyPSEwLGwucmVqZWN0KGUsdCkpfWZ1bmN0aW9uIG4odCl7cnx8KHI9ITAsbC5yZXNvbHZlKGUsdCkpfXZhciBzPXAoZnVuY3Rpb24oKXt0KG4saSl9KTtcImVycm9yXCI9PT1zLnN0YXR1cyYmaShzLnZhbHVlKX1mdW5jdGlvbiBwKHQsZSl7dmFyIHI9e307dHJ5e3IudmFsdWU9dChlKSxyLnN0YXR1cz1cInN1Y2Nlc3NcIn1jYXRjaCh0KXtyLnN0YXR1cz1cImVycm9yXCIsci52YWx1ZT10fXJldHVybiByfShlLmV4cG9ydHM9bykucHJvdG90eXBlLmZpbmFsbHk9ZnVuY3Rpb24oZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSlyZXR1cm4gdGhpczt2YXIgcj10aGlzLmNvbnN0cnVjdG9yO3JldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odCl7cmV0dXJuIHIucmVzb2x2ZShlKCkpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gdH0pfSxmdW5jdGlvbih0KXtyZXR1cm4gci5yZXNvbHZlKGUoKSkudGhlbihmdW5jdGlvbigpe3Rocm93IHR9KX0pfSxvLnByb3RvdHlwZS5jYXRjaD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50aGVuKG51bGwsdCl9LG8ucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZ0aGlzLnN0YXRlPT09YXx8XCJmdW5jdGlvblwiIT10eXBlb2YgZSYmdGhpcy5zdGF0ZT09PXMpcmV0dXJuIHRoaXM7dmFyIHI9bmV3IHRoaXMuY29uc3RydWN0b3IodSk7dGhpcy5zdGF0ZSE9PWk/ZihyLHRoaXMuc3RhdGU9PT1hP3Q6ZSx0aGlzLm91dGNvbWUpOnRoaXMucXVldWUucHVzaChuZXcgaChyLHQsZSkpO3JldHVybiByfSxoLnByb3RvdHlwZS5jYWxsRnVsZmlsbGVkPWZ1bmN0aW9uKHQpe2wucmVzb2x2ZSh0aGlzLnByb21pc2UsdCl9LGgucHJvdG90eXBlLm90aGVyQ2FsbEZ1bGZpbGxlZD1mdW5jdGlvbih0KXtmKHRoaXMucHJvbWlzZSx0aGlzLm9uRnVsZmlsbGVkLHQpfSxoLnByb3RvdHlwZS5jYWxsUmVqZWN0ZWQ9ZnVuY3Rpb24odCl7bC5yZWplY3QodGhpcy5wcm9taXNlLHQpfSxoLnByb3RvdHlwZS5vdGhlckNhbGxSZWplY3RlZD1mdW5jdGlvbih0KXtmKHRoaXMucHJvbWlzZSx0aGlzLm9uUmVqZWN0ZWQsdCl9LGwucmVzb2x2ZT1mdW5jdGlvbih0LGUpe3ZhciByPXAoZCxlKTtpZihcImVycm9yXCI9PT1yLnN0YXR1cylyZXR1cm4gbC5yZWplY3QodCxyLnZhbHVlKTt2YXIgaT1yLnZhbHVlO2lmKGkpYyh0LGkpO2Vsc2V7dC5zdGF0ZT1hLHQub3V0Y29tZT1lO2Zvcih2YXIgbj0tMSxzPXQucXVldWUubGVuZ3RoOysrbjxzOyl0LnF1ZXVlW25dLmNhbGxGdWxmaWxsZWQoZSl9cmV0dXJuIHR9LGwucmVqZWN0PWZ1bmN0aW9uKHQsZSl7dC5zdGF0ZT1zLHQub3V0Y29tZT1lO2Zvcih2YXIgcj0tMSxpPXQucXVldWUubGVuZ3RoOysrcjxpOyl0LnF1ZXVlW3JdLmNhbGxSZWplY3RlZChlKTtyZXR1cm4gdH0sby5yZXNvbHZlPWZ1bmN0aW9uKHQpe2lmKHQgaW5zdGFuY2VvZiB0aGlzKXJldHVybiB0O3JldHVybiBsLnJlc29sdmUobmV3IHRoaXModSksdCl9LG8ucmVqZWN0PWZ1bmN0aW9uKHQpe3ZhciBlPW5ldyB0aGlzKHUpO3JldHVybiBsLnJlamVjdChlLHQpfSxvLmFsbD1mdW5jdGlvbih0KXt2YXIgcj10aGlzO2lmKFwiW29iamVjdCBBcnJheV1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSlyZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcihcIm11c3QgYmUgYW4gYXJyYXlcIikpO3ZhciBpPXQubGVuZ3RoLG49ITE7aWYoIWkpcmV0dXJuIHRoaXMucmVzb2x2ZShbXSk7dmFyIHM9bmV3IEFycmF5KGkpLGE9MCxlPS0xLG89bmV3IHRoaXModSk7Zm9yKDsrK2U8aTspaCh0W2VdLGUpO3JldHVybiBvO2Z1bmN0aW9uIGgodCxlKXtyLnJlc29sdmUodCkudGhlbihmdW5jdGlvbih0KXtzW2VdPXQsKythIT09aXx8bnx8KG49ITAsbC5yZXNvbHZlKG8scykpfSxmdW5jdGlvbih0KXtufHwobj0hMCxsLnJlamVjdChvLHQpKX0pfX0sby5yYWNlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7aWYoXCJbb2JqZWN0IEFycmF5XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKXJldHVybiB0aGlzLnJlamVjdChuZXcgVHlwZUVycm9yKFwibXVzdCBiZSBhbiBhcnJheVwiKSk7dmFyIHI9dC5sZW5ndGgsaT0hMTtpZighcilyZXR1cm4gdGhpcy5yZXNvbHZlKFtdKTt2YXIgbj0tMSxzPW5ldyB0aGlzKHUpO2Zvcig7KytuPHI7KWE9dFtuXSxlLnJlc29sdmUoYSkudGhlbihmdW5jdGlvbih0KXtpfHwoaT0hMCxsLnJlc29sdmUocyx0KSl9LGZ1bmN0aW9uKHQpe2l8fChpPSEwLGwucmVqZWN0KHMsdCkpfSk7dmFyIGE7cmV0dXJuIHN9fSx7aW1tZWRpYXRlOjM2fV0sMzg6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT17fTsoMCx0KFwiLi9saWIvdXRpbHMvY29tbW9uXCIpLmFzc2lnbikoaSx0KFwiLi9saWIvZGVmbGF0ZVwiKSx0KFwiLi9saWIvaW5mbGF0ZVwiKSx0KFwiLi9saWIvemxpYi9jb25zdGFudHNcIikpLGUuZXhwb3J0cz1pfSx7XCIuL2xpYi9kZWZsYXRlXCI6MzksXCIuL2xpYi9pbmZsYXRlXCI6NDAsXCIuL2xpYi91dGlscy9jb21tb25cIjo0MSxcIi4vbGliL3psaWIvY29uc3RhbnRzXCI6NDR9XSwzOTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXQoXCIuL3psaWIvZGVmbGF0ZVwiKSxvPXQoXCIuL3V0aWxzL2NvbW1vblwiKSxoPXQoXCIuL3V0aWxzL3N0cmluZ3NcIiksbj10KFwiLi96bGliL21lc3NhZ2VzXCIpLHM9dChcIi4vemxpYi96c3RyZWFtXCIpLHU9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxsPTAsZj0tMSxkPTAsYz04O2Z1bmN0aW9uIHAodCl7aWYoISh0aGlzIGluc3RhbmNlb2YgcCkpcmV0dXJuIG5ldyBwKHQpO3RoaXMub3B0aW9ucz1vLmFzc2lnbih7bGV2ZWw6ZixtZXRob2Q6YyxjaHVua1NpemU6MTYzODQsd2luZG93Qml0czoxNSxtZW1MZXZlbDo4LHN0cmF0ZWd5OmQsdG86XCJcIn0sdHx8e30pO3ZhciBlPXRoaXMub3B0aW9ucztlLnJhdyYmMDxlLndpbmRvd0JpdHM/ZS53aW5kb3dCaXRzPS1lLndpbmRvd0JpdHM6ZS5nemlwJiYwPGUud2luZG93Qml0cyYmZS53aW5kb3dCaXRzPDE2JiYoZS53aW5kb3dCaXRzKz0xNiksdGhpcy5lcnI9MCx0aGlzLm1zZz1cIlwiLHRoaXMuZW5kZWQ9ITEsdGhpcy5jaHVua3M9W10sdGhpcy5zdHJtPW5ldyBzLHRoaXMuc3RybS5hdmFpbF9vdXQ9MDt2YXIgcj1hLmRlZmxhdGVJbml0Mih0aGlzLnN0cm0sZS5sZXZlbCxlLm1ldGhvZCxlLndpbmRvd0JpdHMsZS5tZW1MZXZlbCxlLnN0cmF0ZWd5KTtpZihyIT09bCl0aHJvdyBuZXcgRXJyb3IobltyXSk7aWYoZS5oZWFkZXImJmEuZGVmbGF0ZVNldEhlYWRlcih0aGlzLnN0cm0sZS5oZWFkZXIpLGUuZGljdGlvbmFyeSl7dmFyIGk7aWYoaT1cInN0cmluZ1wiPT10eXBlb2YgZS5kaWN0aW9uYXJ5P2guc3RyaW5nMmJ1ZihlLmRpY3Rpb25hcnkpOlwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PXUuY2FsbChlLmRpY3Rpb25hcnkpP25ldyBVaW50OEFycmF5KGUuZGljdGlvbmFyeSk6ZS5kaWN0aW9uYXJ5LChyPWEuZGVmbGF0ZVNldERpY3Rpb25hcnkodGhpcy5zdHJtLGkpKSE9PWwpdGhyb3cgbmV3IEVycm9yKG5bcl0pO3RoaXMuX2RpY3Rfc2V0PSEwfX1mdW5jdGlvbiBpKHQsZSl7dmFyIHI9bmV3IHAoZSk7aWYoci5wdXNoKHQsITApLHIuZXJyKXRocm93IHIubXNnfHxuW3IuZXJyXTtyZXR1cm4gci5yZXN1bHR9cC5wcm90b3R5cGUucHVzaD1mdW5jdGlvbih0LGUpe3ZhciByLGksbj10aGlzLnN0cm0scz10aGlzLm9wdGlvbnMuY2h1bmtTaXplO2lmKHRoaXMuZW5kZWQpcmV0dXJuITE7aT1lPT09fn5lP2U6ITA9PT1lPzQ6MCxcInN0cmluZ1wiPT10eXBlb2YgdD9uLmlucHV0PWguc3RyaW5nMmJ1Zih0KTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT11LmNhbGwodCk/bi5pbnB1dD1uZXcgVWludDhBcnJheSh0KTpuLmlucHV0PXQsbi5uZXh0X2luPTAsbi5hdmFpbF9pbj1uLmlucHV0Lmxlbmd0aDtkb3tpZigwPT09bi5hdmFpbF9vdXQmJihuLm91dHB1dD1uZXcgby5CdWY4KHMpLG4ubmV4dF9vdXQ9MCxuLmF2YWlsX291dD1zKSwxIT09KHI9YS5kZWZsYXRlKG4saSkpJiZyIT09bClyZXR1cm4gdGhpcy5vbkVuZChyKSwhKHRoaXMuZW5kZWQ9ITApOzAhPT1uLmF2YWlsX291dCYmKDAhPT1uLmF2YWlsX2lufHw0IT09aSYmMiE9PWkpfHwoXCJzdHJpbmdcIj09PXRoaXMub3B0aW9ucy50bz90aGlzLm9uRGF0YShoLmJ1ZjJiaW5zdHJpbmcoby5zaHJpbmtCdWYobi5vdXRwdXQsbi5uZXh0X291dCkpKTp0aGlzLm9uRGF0YShvLnNocmlua0J1ZihuLm91dHB1dCxuLm5leHRfb3V0KSkpfXdoaWxlKCgwPG4uYXZhaWxfaW58fDA9PT1uLmF2YWlsX291dCkmJjEhPT1yKTtyZXR1cm4gND09PWk/KHI9YS5kZWZsYXRlRW5kKHRoaXMuc3RybSksdGhpcy5vbkVuZChyKSx0aGlzLmVuZGVkPSEwLHI9PT1sKToyIT09aXx8KHRoaXMub25FbmQobCksIShuLmF2YWlsX291dD0wKSl9LHAucHJvdG90eXBlLm9uRGF0YT1mdW5jdGlvbih0KXt0aGlzLmNodW5rcy5wdXNoKHQpfSxwLnByb3RvdHlwZS5vbkVuZD1mdW5jdGlvbih0KXt0PT09bCYmKFwic3RyaW5nXCI9PT10aGlzLm9wdGlvbnMudG8/dGhpcy5yZXN1bHQ9dGhpcy5jaHVua3Muam9pbihcIlwiKTp0aGlzLnJlc3VsdD1vLmZsYXR0ZW5DaHVua3ModGhpcy5jaHVua3MpKSx0aGlzLmNodW5rcz1bXSx0aGlzLmVycj10LHRoaXMubXNnPXRoaXMuc3RybS5tc2d9LHIuRGVmbGF0ZT1wLHIuZGVmbGF0ZT1pLHIuZGVmbGF0ZVJhdz1mdW5jdGlvbih0LGUpe3JldHVybihlPWV8fHt9KS5yYXc9ITAsaSh0LGUpfSxyLmd6aXA9ZnVuY3Rpb24odCxlKXtyZXR1cm4oZT1lfHx7fSkuZ3ppcD0hMCxpKHQsZSl9fSx7XCIuL3V0aWxzL2NvbW1vblwiOjQxLFwiLi91dGlscy9zdHJpbmdzXCI6NDIsXCIuL3psaWIvZGVmbGF0ZVwiOjQ2LFwiLi96bGliL21lc3NhZ2VzXCI6NTEsXCIuL3psaWIvenN0cmVhbVwiOjUzfV0sNDA6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgZD10KFwiLi96bGliL2luZmxhdGVcIiksYz10KFwiLi91dGlscy9jb21tb25cIikscD10KFwiLi91dGlscy9zdHJpbmdzXCIpLG09dChcIi4vemxpYi9jb25zdGFudHNcIiksaT10KFwiLi96bGliL21lc3NhZ2VzXCIpLG49dChcIi4vemxpYi96c3RyZWFtXCIpLHM9dChcIi4vemxpYi9nemhlYWRlclwiKSxfPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7ZnVuY3Rpb24gYSh0KXtpZighKHRoaXMgaW5zdGFuY2VvZiBhKSlyZXR1cm4gbmV3IGEodCk7dGhpcy5vcHRpb25zPWMuYXNzaWduKHtjaHVua1NpemU6MTYzODQsd2luZG93Qml0czowLHRvOlwiXCJ9LHR8fHt9KTt2YXIgZT10aGlzLm9wdGlvbnM7ZS5yYXcmJjA8PWUud2luZG93Qml0cyYmZS53aW5kb3dCaXRzPDE2JiYoZS53aW5kb3dCaXRzPS1lLndpbmRvd0JpdHMsMD09PWUud2luZG93Qml0cyYmKGUud2luZG93Qml0cz0tMTUpKSwhKDA8PWUud2luZG93Qml0cyYmZS53aW5kb3dCaXRzPDE2KXx8dCYmdC53aW5kb3dCaXRzfHwoZS53aW5kb3dCaXRzKz0zMiksMTU8ZS53aW5kb3dCaXRzJiZlLndpbmRvd0JpdHM8NDgmJjA9PSgxNSZlLndpbmRvd0JpdHMpJiYoZS53aW5kb3dCaXRzfD0xNSksdGhpcy5lcnI9MCx0aGlzLm1zZz1cIlwiLHRoaXMuZW5kZWQ9ITEsdGhpcy5jaHVua3M9W10sdGhpcy5zdHJtPW5ldyBuLHRoaXMuc3RybS5hdmFpbF9vdXQ9MDt2YXIgcj1kLmluZmxhdGVJbml0Mih0aGlzLnN0cm0sZS53aW5kb3dCaXRzKTtpZihyIT09bS5aX09LKXRocm93IG5ldyBFcnJvcihpW3JdKTt0aGlzLmhlYWRlcj1uZXcgcyxkLmluZmxhdGVHZXRIZWFkZXIodGhpcy5zdHJtLHRoaXMuaGVhZGVyKX1mdW5jdGlvbiBvKHQsZSl7dmFyIHI9bmV3IGEoZSk7aWYoci5wdXNoKHQsITApLHIuZXJyKXRocm93IHIubXNnfHxpW3IuZXJyXTtyZXR1cm4gci5yZXN1bHR9YS5wcm90b3R5cGUucHVzaD1mdW5jdGlvbih0LGUpe3ZhciByLGksbixzLGEsbyxoPXRoaXMuc3RybSx1PXRoaXMub3B0aW9ucy5jaHVua1NpemUsbD10aGlzLm9wdGlvbnMuZGljdGlvbmFyeSxmPSExO2lmKHRoaXMuZW5kZWQpcmV0dXJuITE7aT1lPT09fn5lP2U6ITA9PT1lP20uWl9GSU5JU0g6bS5aX05PX0ZMVVNILFwic3RyaW5nXCI9PXR5cGVvZiB0P2guaW5wdXQ9cC5iaW5zdHJpbmcyYnVmKHQpOlwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PV8uY2FsbCh0KT9oLmlucHV0PW5ldyBVaW50OEFycmF5KHQpOmguaW5wdXQ9dCxoLm5leHRfaW49MCxoLmF2YWlsX2luPWguaW5wdXQubGVuZ3RoO2Rve2lmKDA9PT1oLmF2YWlsX291dCYmKGgub3V0cHV0PW5ldyBjLkJ1ZjgodSksaC5uZXh0X291dD0wLGguYXZhaWxfb3V0PXUpLChyPWQuaW5mbGF0ZShoLG0uWl9OT19GTFVTSCkpPT09bS5aX05FRURfRElDVCYmbCYmKG89XCJzdHJpbmdcIj09dHlwZW9mIGw/cC5zdHJpbmcyYnVmKGwpOlwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PV8uY2FsbChsKT9uZXcgVWludDhBcnJheShsKTpsLHI9ZC5pbmZsYXRlU2V0RGljdGlvbmFyeSh0aGlzLnN0cm0sbykpLHI9PT1tLlpfQlVGX0VSUk9SJiYhMD09PWYmJihyPW0uWl9PSyxmPSExKSxyIT09bS5aX1NUUkVBTV9FTkQmJnIhPT1tLlpfT0spcmV0dXJuIHRoaXMub25FbmQociksISh0aGlzLmVuZGVkPSEwKTtoLm5leHRfb3V0JiYoMCE9PWguYXZhaWxfb3V0JiZyIT09bS5aX1NUUkVBTV9FTkQmJigwIT09aC5hdmFpbF9pbnx8aSE9PW0uWl9GSU5JU0gmJmkhPT1tLlpfU1lOQ19GTFVTSCl8fChcInN0cmluZ1wiPT09dGhpcy5vcHRpb25zLnRvPyhuPXAudXRmOGJvcmRlcihoLm91dHB1dCxoLm5leHRfb3V0KSxzPWgubmV4dF9vdXQtbixhPXAuYnVmMnN0cmluZyhoLm91dHB1dCxuKSxoLm5leHRfb3V0PXMsaC5hdmFpbF9vdXQ9dS1zLHMmJmMuYXJyYXlTZXQoaC5vdXRwdXQsaC5vdXRwdXQsbixzLDApLHRoaXMub25EYXRhKGEpKTp0aGlzLm9uRGF0YShjLnNocmlua0J1ZihoLm91dHB1dCxoLm5leHRfb3V0KSkpKSwwPT09aC5hdmFpbF9pbiYmMD09PWguYXZhaWxfb3V0JiYoZj0hMCl9d2hpbGUoKDA8aC5hdmFpbF9pbnx8MD09PWguYXZhaWxfb3V0KSYmciE9PW0uWl9TVFJFQU1fRU5EKTtyZXR1cm4gcj09PW0uWl9TVFJFQU1fRU5EJiYoaT1tLlpfRklOSVNIKSxpPT09bS5aX0ZJTklTSD8ocj1kLmluZmxhdGVFbmQodGhpcy5zdHJtKSx0aGlzLm9uRW5kKHIpLHRoaXMuZW5kZWQ9ITAscj09PW0uWl9PSyk6aSE9PW0uWl9TWU5DX0ZMVVNIfHwodGhpcy5vbkVuZChtLlpfT0spLCEoaC5hdmFpbF9vdXQ9MCkpfSxhLnByb3RvdHlwZS5vbkRhdGE9ZnVuY3Rpb24odCl7dGhpcy5jaHVua3MucHVzaCh0KX0sYS5wcm90b3R5cGUub25FbmQ9ZnVuY3Rpb24odCl7dD09PW0uWl9PSyYmKFwic3RyaW5nXCI9PT10aGlzLm9wdGlvbnMudG8/dGhpcy5yZXN1bHQ9dGhpcy5jaHVua3Muam9pbihcIlwiKTp0aGlzLnJlc3VsdD1jLmZsYXR0ZW5DaHVua3ModGhpcy5jaHVua3MpKSx0aGlzLmNodW5rcz1bXSx0aGlzLmVycj10LHRoaXMubXNnPXRoaXMuc3RybS5tc2d9LHIuSW5mbGF0ZT1hLHIuaW5mbGF0ZT1vLHIuaW5mbGF0ZVJhdz1mdW5jdGlvbih0LGUpe3JldHVybihlPWV8fHt9KS5yYXc9ITAsbyh0LGUpfSxyLnVuZ3ppcD1vfSx7XCIuL3V0aWxzL2NvbW1vblwiOjQxLFwiLi91dGlscy9zdHJpbmdzXCI6NDIsXCIuL3psaWIvY29uc3RhbnRzXCI6NDQsXCIuL3psaWIvZ3poZWFkZXJcIjo0NyxcIi4vemxpYi9pbmZsYXRlXCI6NDksXCIuL3psaWIvbWVzc2FnZXNcIjo1MSxcIi4vemxpYi96c3RyZWFtXCI6NTN9XSw0MTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDE2QXJyYXkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBJbnQzMkFycmF5O3IuYXNzaWduPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7ZS5sZW5ndGg7KXt2YXIgcj1lLnNoaWZ0KCk7aWYocil7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHIpdGhyb3cgbmV3IFR5cGVFcnJvcihyK1wibXVzdCBiZSBub24tb2JqZWN0XCIpO2Zvcih2YXIgaSBpbiByKXIuaGFzT3duUHJvcGVydHkoaSkmJih0W2ldPXJbaV0pfX1yZXR1cm4gdH0sci5zaHJpbmtCdWY9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5sZW5ndGg9PT1lP3Q6dC5zdWJhcnJheT90LnN1YmFycmF5KDAsZSk6KHQubGVuZ3RoPWUsdCl9O3ZhciBuPXthcnJheVNldDpmdW5jdGlvbih0LGUscixpLG4pe2lmKGUuc3ViYXJyYXkmJnQuc3ViYXJyYXkpdC5zZXQoZS5zdWJhcnJheShyLHIraSksbik7ZWxzZSBmb3IodmFyIHM9MDtzPGk7cysrKXRbbitzXT1lW3Irc119LGZsYXR0ZW5DaHVua3M6ZnVuY3Rpb24odCl7dmFyIGUscixpLG4scyxhO2ZvcihlPWk9MCxyPXQubGVuZ3RoO2U8cjtlKyspaSs9dFtlXS5sZW5ndGg7Zm9yKGE9bmV3IFVpbnQ4QXJyYXkoaSksZT1uPTAscj10Lmxlbmd0aDtlPHI7ZSsrKXM9dFtlXSxhLnNldChzLG4pLG4rPXMubGVuZ3RoO3JldHVybiBhfX0scz17YXJyYXlTZXQ6ZnVuY3Rpb24odCxlLHIsaSxuKXtmb3IodmFyIHM9MDtzPGk7cysrKXRbbitzXT1lW3Irc119LGZsYXR0ZW5DaHVua3M6ZnVuY3Rpb24odCl7cmV0dXJuW10uY29uY2F0LmFwcGx5KFtdLHQpfX07ci5zZXRUeXBlZD1mdW5jdGlvbih0KXt0PyhyLkJ1Zjg9VWludDhBcnJheSxyLkJ1ZjE2PVVpbnQxNkFycmF5LHIuQnVmMzI9SW50MzJBcnJheSxyLmFzc2lnbihyLG4pKTooci5CdWY4PUFycmF5LHIuQnVmMTY9QXJyYXksci5CdWYzMj1BcnJheSxyLmFzc2lnbihyLHMpKX0sci5zZXRUeXBlZChpKX0se31dLDQyOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGg9dChcIi4vY29tbW9uXCIpLG49ITAscz0hMDt0cnl7U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLFswXSl9Y2F0Y2godCl7bj0hMX10cnl7U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLG5ldyBVaW50OEFycmF5KDEpKX1jYXRjaCh0KXtzPSExfWZvcih2YXIgdT1uZXcgaC5CdWY4KDI1NiksaT0wO2k8MjU2O2krKyl1W2ldPTI1Mjw9aT82OjI0ODw9aT81OjI0MDw9aT80OjIyNDw9aT8zOjE5Mjw9aT8yOjE7ZnVuY3Rpb24gbCh0LGUpe2lmKGU8NjU1MzcmJih0LnN1YmFycmF5JiZzfHwhdC5zdWJhcnJheSYmbikpcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxoLnNocmlua0J1Zih0LGUpKTtmb3IodmFyIHI9XCJcIixpPTA7aTxlO2krKylyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHRbaV0pO3JldHVybiByfXVbMjU0XT11WzI1NF09MSxyLnN0cmluZzJidWY9ZnVuY3Rpb24odCl7dmFyIGUscixpLG4scyxhPXQubGVuZ3RoLG89MDtmb3Iobj0wO248YTtuKyspNTUyOTY9PSg2NDUxMiYocj10LmNoYXJDb2RlQXQobikpKSYmbisxPGEmJjU2MzIwPT0oNjQ1MTImKGk9dC5jaGFyQ29kZUF0KG4rMSkpKSYmKHI9NjU1MzYrKHItNTUyOTY8PDEwKSsoaS01NjMyMCksbisrKSxvKz1yPDEyOD8xOnI8MjA0OD8yOnI8NjU1MzY/Mzo0O2ZvcihlPW5ldyBoLkJ1Zjgobyksbj1zPTA7czxvO24rKyk1NTI5Nj09KDY0NTEyJihyPXQuY2hhckNvZGVBdChuKSkpJiZuKzE8YSYmNTYzMjA9PSg2NDUxMiYoaT10LmNoYXJDb2RlQXQobisxKSkpJiYocj02NTUzNisoci01NTI5Njw8MTApKyhpLTU2MzIwKSxuKyspLHI8MTI4P2VbcysrXT1yOihyPDIwNDg/ZVtzKytdPTE5MnxyPj4+Njoocjw2NTUzNj9lW3MrK109MjI0fHI+Pj4xMjooZVtzKytdPTI0MHxyPj4+MTgsZVtzKytdPTEyOHxyPj4+MTImNjMpLGVbcysrXT0xMjh8cj4+PjYmNjMpLGVbcysrXT0xMjh8NjMmcik7cmV0dXJuIGV9LHIuYnVmMmJpbnN0cmluZz1mdW5jdGlvbih0KXtyZXR1cm4gbCh0LHQubGVuZ3RoKX0sci5iaW5zdHJpbmcyYnVmPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1uZXcgaC5CdWY4KHQubGVuZ3RoKSxyPTAsaT1lLmxlbmd0aDtyPGk7cisrKWVbcl09dC5jaGFyQ29kZUF0KHIpO3JldHVybiBlfSxyLmJ1ZjJzdHJpbmc9ZnVuY3Rpb24odCxlKXt2YXIgcixpLG4scyxhPWV8fHQubGVuZ3RoLG89bmV3IEFycmF5KDIqYSk7Zm9yKHI9aT0wO3I8YTspaWYoKG49dFtyKytdKTwxMjgpb1tpKytdPW47ZWxzZSBpZig0PChzPXVbbl0pKW9baSsrXT02NTUzMyxyKz1zLTE7ZWxzZXtmb3IobiY9Mj09PXM/MzE6Mz09PXM/MTU6NzsxPHMmJnI8YTspbj1uPDw2fDYzJnRbcisrXSxzLS07MTxzP29baSsrXT02NTUzMzpuPDY1NTM2P29baSsrXT1uOihuLT02NTUzNixvW2krK109NTUyOTZ8bj4+MTAmMTAyMyxvW2krK109NTYzMjB8MTAyMyZuKX1yZXR1cm4gbChvLGkpfSxyLnV0Zjhib3JkZXI9ZnVuY3Rpb24odCxlKXt2YXIgcjtmb3IoKGU9ZXx8dC5sZW5ndGgpPnQubGVuZ3RoJiYoZT10Lmxlbmd0aCkscj1lLTE7MDw9ciYmMTI4PT0oMTkyJnRbcl0pOylyLS07cmV0dXJuIHI8MD9lOjA9PT1yP2U6cit1W3Rbcl1dPmU/cjplfX0se1wiLi9jb21tb25cIjo0MX1dLDQzOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSxyLGkpe2Zvcih2YXIgbj02NTUzNSZ0fDAscz10Pj4+MTYmNjU1MzV8MCxhPTA7MCE9PXI7KXtmb3Ioci09YT0yZTM8cj8yZTM6cjtzPXMrKG49bitlW2krK118MCl8MCwtLWE7KTtuJT02NTUyMSxzJT02NTUyMX1yZXR1cm4gbnxzPDwxNnwwfX0se31dLDQ0OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPXtaX05PX0ZMVVNIOjAsWl9QQVJUSUFMX0ZMVVNIOjEsWl9TWU5DX0ZMVVNIOjIsWl9GVUxMX0ZMVVNIOjMsWl9GSU5JU0g6NCxaX0JMT0NLOjUsWl9UUkVFUzo2LFpfT0s6MCxaX1NUUkVBTV9FTkQ6MSxaX05FRURfRElDVDoyLFpfRVJSTk86LTEsWl9TVFJFQU1fRVJST1I6LTIsWl9EQVRBX0VSUk9SOi0zLFpfQlVGX0VSUk9SOi01LFpfTk9fQ09NUFJFU1NJT046MCxaX0JFU1RfU1BFRUQ6MSxaX0JFU1RfQ09NUFJFU1NJT046OSxaX0RFRkFVTFRfQ09NUFJFU1NJT046LTEsWl9GSUxURVJFRDoxLFpfSFVGRk1BTl9PTkxZOjIsWl9STEU6MyxaX0ZJWEVEOjQsWl9ERUZBVUxUX1NUUkFURUdZOjAsWl9CSU5BUlk6MCxaX1RFWFQ6MSxaX1VOS05PV046MixaX0RFRkxBVEVEOjh9fSx7fV0sNDU6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1mdW5jdGlvbigpe2Zvcih2YXIgdCxlPVtdLHI9MDtyPDI1NjtyKyspe3Q9cjtmb3IodmFyIGk9MDtpPDg7aSsrKXQ9MSZ0PzM5ODgyOTIzODRedD4+PjE6dD4+PjE7ZVtyXT10fXJldHVybiBlfSgpO2UuZXhwb3J0cz1mdW5jdGlvbih0LGUscixpKXt2YXIgbj1vLHM9aStyO3RePS0xO2Zvcih2YXIgYT1pO2E8czthKyspdD10Pj4+OF5uWzI1NSYodF5lW2FdKV07cmV0dXJuLTFedH19LHt9XSw0NjpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBoLGQ9dChcIi4uL3V0aWxzL2NvbW1vblwiKSx1PXQoXCIuL3RyZWVzXCIpLGM9dChcIi4vYWRsZXIzMlwiKSxwPXQoXCIuL2NyYzMyXCIpLGk9dChcIi4vbWVzc2FnZXNcIiksbD0wLGY9NCxtPTAsXz0tMixnPS0xLGI9NCxuPTIsdj04LHk9OSxzPTI4NixhPTMwLG89MTksdz0yKnMrMSxrPTE1LHg9MyxTPTI1OCx6PVMreCsxLEM9NDIsRT0xMTMsQT0xLEk9MixPPTMsQj00O2Z1bmN0aW9uIFIodCxlKXtyZXR1cm4gdC5tc2c9aVtlXSxlfWZ1bmN0aW9uIFQodCl7cmV0dXJuKHQ8PDEpLSg0PHQ/OTowKX1mdW5jdGlvbiBEKHQpe2Zvcih2YXIgZT10Lmxlbmd0aDswPD0tLWU7KXRbZV09MH1mdW5jdGlvbiBGKHQpe3ZhciBlPXQuc3RhdGUscj1lLnBlbmRpbmc7cj50LmF2YWlsX291dCYmKHI9dC5hdmFpbF9vdXQpLDAhPT1yJiYoZC5hcnJheVNldCh0Lm91dHB1dCxlLnBlbmRpbmdfYnVmLGUucGVuZGluZ19vdXQscix0Lm5leHRfb3V0KSx0Lm5leHRfb3V0Kz1yLGUucGVuZGluZ19vdXQrPXIsdC50b3RhbF9vdXQrPXIsdC5hdmFpbF9vdXQtPXIsZS5wZW5kaW5nLT1yLDA9PT1lLnBlbmRpbmcmJihlLnBlbmRpbmdfb3V0PTApKX1mdW5jdGlvbiBOKHQsZSl7dS5fdHJfZmx1c2hfYmxvY2sodCwwPD10LmJsb2NrX3N0YXJ0P3QuYmxvY2tfc3RhcnQ6LTEsdC5zdHJzdGFydC10LmJsb2NrX3N0YXJ0LGUpLHQuYmxvY2tfc3RhcnQ9dC5zdHJzdGFydCxGKHQuc3RybSl9ZnVuY3Rpb24gVSh0LGUpe3QucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPWV9ZnVuY3Rpb24gUCh0LGUpe3QucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPWU+Pj44JjI1NSx0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT0yNTUmZX1mdW5jdGlvbiBMKHQsZSl7dmFyIHIsaSxuPXQubWF4X2NoYWluX2xlbmd0aCxzPXQuc3Ryc3RhcnQsYT10LnByZXZfbGVuZ3RoLG89dC5uaWNlX21hdGNoLGg9dC5zdHJzdGFydD50Lndfc2l6ZS16P3Quc3Ryc3RhcnQtKHQud19zaXplLXopOjAsdT10LndpbmRvdyxsPXQud19tYXNrLGY9dC5wcmV2LGQ9dC5zdHJzdGFydCtTLGM9dVtzK2EtMV0scD11W3MrYV07dC5wcmV2X2xlbmd0aD49dC5nb29kX21hdGNoJiYobj4+PTIpLG8+dC5sb29rYWhlYWQmJihvPXQubG9va2FoZWFkKTtkb3tpZih1WyhyPWUpK2FdPT09cCYmdVtyK2EtMV09PT1jJiZ1W3JdPT09dVtzXSYmdVsrK3JdPT09dVtzKzFdKXtzKz0yLHIrKztkb3t9d2hpbGUodVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnM8ZCk7aWYoaT1TLShkLXMpLHM9ZC1TLGE8aSl7aWYodC5tYXRjaF9zdGFydD1lLG88PShhPWkpKWJyZWFrO2M9dVtzK2EtMV0scD11W3MrYV19fX13aGlsZSgoZT1mW2UmbF0pPmgmJjAhPS0tbik7cmV0dXJuIGE8PXQubG9va2FoZWFkP2E6dC5sb29rYWhlYWR9ZnVuY3Rpb24gaih0KXt2YXIgZSxyLGksbixzLGEsbyxoLHUsbCxmPXQud19zaXplO2Rve2lmKG49dC53aW5kb3dfc2l6ZS10Lmxvb2thaGVhZC10LnN0cnN0YXJ0LHQuc3Ryc3RhcnQ+PWYrKGYteikpe2ZvcihkLmFycmF5U2V0KHQud2luZG93LHQud2luZG93LGYsZiwwKSx0Lm1hdGNoX3N0YXJ0LT1mLHQuc3Ryc3RhcnQtPWYsdC5ibG9ja19zdGFydC09ZixlPXI9dC5oYXNoX3NpemU7aT10LmhlYWRbLS1lXSx0LmhlYWRbZV09Zjw9aT9pLWY6MCwtLXI7KTtmb3IoZT1yPWY7aT10LnByZXZbLS1lXSx0LnByZXZbZV09Zjw9aT9pLWY6MCwtLXI7KTtuKz1mfWlmKDA9PT10LnN0cm0uYXZhaWxfaW4pYnJlYWs7aWYoYT10LnN0cm0sbz10LndpbmRvdyxoPXQuc3Ryc3RhcnQrdC5sb29rYWhlYWQsdT1uLGw9dm9pZCAwLGw9YS5hdmFpbF9pbix1PGwmJihsPXUpLHI9MD09PWw/MDooYS5hdmFpbF9pbi09bCxkLmFycmF5U2V0KG8sYS5pbnB1dCxhLm5leHRfaW4sbCxoKSwxPT09YS5zdGF0ZS53cmFwP2EuYWRsZXI9YyhhLmFkbGVyLG8sbCxoKToyPT09YS5zdGF0ZS53cmFwJiYoYS5hZGxlcj1wKGEuYWRsZXIsbyxsLGgpKSxhLm5leHRfaW4rPWwsYS50b3RhbF9pbis9bCxsKSx0Lmxvb2thaGVhZCs9cix0Lmxvb2thaGVhZCt0Lmluc2VydD49eClmb3Iocz10LnN0cnN0YXJ0LXQuaW5zZXJ0LHQuaW5zX2g9dC53aW5kb3dbc10sdC5pbnNfaD0odC5pbnNfaDw8dC5oYXNoX3NoaWZ0XnQud2luZG93W3MrMV0pJnQuaGFzaF9tYXNrO3QuaW5zZXJ0JiYodC5pbnNfaD0odC5pbnNfaDw8dC5oYXNoX3NoaWZ0XnQud2luZG93W3MreC0xXSkmdC5oYXNoX21hc2ssdC5wcmV2W3MmdC53X21hc2tdPXQuaGVhZFt0Lmluc19oXSx0LmhlYWRbdC5pbnNfaF09cyxzKyssdC5pbnNlcnQtLSwhKHQubG9va2FoZWFkK3QuaW5zZXJ0PHgpKTspO313aGlsZSh0Lmxvb2thaGVhZDx6JiYwIT09dC5zdHJtLmF2YWlsX2luKX1mdW5jdGlvbiBaKHQsZSl7Zm9yKHZhciByLGk7Oyl7aWYodC5sb29rYWhlYWQ8eil7aWYoaih0KSx0Lmxvb2thaGVhZDx6JiZlPT09bClyZXR1cm4gQTtpZigwPT09dC5sb29rYWhlYWQpYnJlYWt9aWYocj0wLHQubG9va2FoZWFkPj14JiYodC5pbnNfaD0odC5pbnNfaDw8dC5oYXNoX3NoaWZ0XnQud2luZG93W3Quc3Ryc3RhcnQreC0xXSkmdC5oYXNoX21hc2sscj10LnByZXZbdC5zdHJzdGFydCZ0LndfbWFza109dC5oZWFkW3QuaW5zX2hdLHQuaGVhZFt0Lmluc19oXT10LnN0cnN0YXJ0KSwwIT09ciYmdC5zdHJzdGFydC1yPD10Lndfc2l6ZS16JiYodC5tYXRjaF9sZW5ndGg9TCh0LHIpKSx0Lm1hdGNoX2xlbmd0aD49eClpZihpPXUuX3RyX3RhbGx5KHQsdC5zdHJzdGFydC10Lm1hdGNoX3N0YXJ0LHQubWF0Y2hfbGVuZ3RoLXgpLHQubG9va2FoZWFkLT10Lm1hdGNoX2xlbmd0aCx0Lm1hdGNoX2xlbmd0aDw9dC5tYXhfbGF6eV9tYXRjaCYmdC5sb29rYWhlYWQ+PXgpe2Zvcih0Lm1hdGNoX2xlbmd0aC0tO3Quc3Ryc3RhcnQrKyx0Lmluc19oPSh0Lmluc19oPDx0Lmhhc2hfc2hpZnRedC53aW5kb3dbdC5zdHJzdGFydCt4LTFdKSZ0Lmhhc2hfbWFzayxyPXQucHJldlt0LnN0cnN0YXJ0JnQud19tYXNrXT10LmhlYWRbdC5pbnNfaF0sdC5oZWFkW3QuaW5zX2hdPXQuc3Ryc3RhcnQsMCE9LS10Lm1hdGNoX2xlbmd0aDspO3Quc3Ryc3RhcnQrK31lbHNlIHQuc3Ryc3RhcnQrPXQubWF0Y2hfbGVuZ3RoLHQubWF0Y2hfbGVuZ3RoPTAsdC5pbnNfaD10LndpbmRvd1t0LnN0cnN0YXJ0XSx0Lmluc19oPSh0Lmluc19oPDx0Lmhhc2hfc2hpZnRedC53aW5kb3dbdC5zdHJzdGFydCsxXSkmdC5oYXNoX21hc2s7ZWxzZSBpPXUuX3RyX3RhbGx5KHQsMCx0LndpbmRvd1t0LnN0cnN0YXJ0XSksdC5sb29rYWhlYWQtLSx0LnN0cnN0YXJ0Kys7aWYoaSYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfXJldHVybiB0Lmluc2VydD10LnN0cnN0YXJ0PHgtMT90LnN0cnN0YXJ0OngtMSxlPT09Zj8oTih0LCEwKSwwPT09dC5zdHJtLmF2YWlsX291dD9POkIpOnQubGFzdF9saXQmJihOKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KT9BOkl9ZnVuY3Rpb24gVyh0LGUpe2Zvcih2YXIgcixpLG47Oyl7aWYodC5sb29rYWhlYWQ8eil7aWYoaih0KSx0Lmxvb2thaGVhZDx6JiZlPT09bClyZXR1cm4gQTtpZigwPT09dC5sb29rYWhlYWQpYnJlYWt9aWYocj0wLHQubG9va2FoZWFkPj14JiYodC5pbnNfaD0odC5pbnNfaDw8dC5oYXNoX3NoaWZ0XnQud2luZG93W3Quc3Ryc3RhcnQreC0xXSkmdC5oYXNoX21hc2sscj10LnByZXZbdC5zdHJzdGFydCZ0LndfbWFza109dC5oZWFkW3QuaW5zX2hdLHQuaGVhZFt0Lmluc19oXT10LnN0cnN0YXJ0KSx0LnByZXZfbGVuZ3RoPXQubWF0Y2hfbGVuZ3RoLHQucHJldl9tYXRjaD10Lm1hdGNoX3N0YXJ0LHQubWF0Y2hfbGVuZ3RoPXgtMSwwIT09ciYmdC5wcmV2X2xlbmd0aDx0Lm1heF9sYXp5X21hdGNoJiZ0LnN0cnN0YXJ0LXI8PXQud19zaXplLXomJih0Lm1hdGNoX2xlbmd0aD1MKHQsciksdC5tYXRjaF9sZW5ndGg8PTUmJigxPT09dC5zdHJhdGVneXx8dC5tYXRjaF9sZW5ndGg9PT14JiY0MDk2PHQuc3Ryc3RhcnQtdC5tYXRjaF9zdGFydCkmJih0Lm1hdGNoX2xlbmd0aD14LTEpKSx0LnByZXZfbGVuZ3RoPj14JiZ0Lm1hdGNoX2xlbmd0aDw9dC5wcmV2X2xlbmd0aCl7Zm9yKG49dC5zdHJzdGFydCt0Lmxvb2thaGVhZC14LGk9dS5fdHJfdGFsbHkodCx0LnN0cnN0YXJ0LTEtdC5wcmV2X21hdGNoLHQucHJldl9sZW5ndGgteCksdC5sb29rYWhlYWQtPXQucHJldl9sZW5ndGgtMSx0LnByZXZfbGVuZ3RoLT0yOysrdC5zdHJzdGFydDw9biYmKHQuaW5zX2g9KHQuaW5zX2g8PHQuaGFzaF9zaGlmdF50LndpbmRvd1t0LnN0cnN0YXJ0K3gtMV0pJnQuaGFzaF9tYXNrLHI9dC5wcmV2W3Quc3Ryc3RhcnQmdC53X21hc2tdPXQuaGVhZFt0Lmluc19oXSx0LmhlYWRbdC5pbnNfaF09dC5zdHJzdGFydCksMCE9LS10LnByZXZfbGVuZ3RoOyk7aWYodC5tYXRjaF9hdmFpbGFibGU9MCx0Lm1hdGNoX2xlbmd0aD14LTEsdC5zdHJzdGFydCsrLGkmJihOKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1lbHNlIGlmKHQubWF0Y2hfYXZhaWxhYmxlKXtpZigoaT11Ll90cl90YWxseSh0LDAsdC53aW5kb3dbdC5zdHJzdGFydC0xXSkpJiZOKHQsITEpLHQuc3Ryc3RhcnQrKyx0Lmxvb2thaGVhZC0tLDA9PT10LnN0cm0uYXZhaWxfb3V0KXJldHVybiBBfWVsc2UgdC5tYXRjaF9hdmFpbGFibGU9MSx0LnN0cnN0YXJ0KyssdC5sb29rYWhlYWQtLX1yZXR1cm4gdC5tYXRjaF9hdmFpbGFibGUmJihpPXUuX3RyX3RhbGx5KHQsMCx0LndpbmRvd1t0LnN0cnN0YXJ0LTFdKSx0Lm1hdGNoX2F2YWlsYWJsZT0wKSx0Lmluc2VydD10LnN0cnN0YXJ0PHgtMT90LnN0cnN0YXJ0OngtMSxlPT09Zj8oTih0LCEwKSwwPT09dC5zdHJtLmF2YWlsX291dD9POkIpOnQubGFzdF9saXQmJihOKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KT9BOkl9ZnVuY3Rpb24gTSh0LGUscixpLG4pe3RoaXMuZ29vZF9sZW5ndGg9dCx0aGlzLm1heF9sYXp5PWUsdGhpcy5uaWNlX2xlbmd0aD1yLHRoaXMubWF4X2NoYWluPWksdGhpcy5mdW5jPW59ZnVuY3Rpb24gSCgpe3RoaXMuc3RybT1udWxsLHRoaXMuc3RhdHVzPTAsdGhpcy5wZW5kaW5nX2J1Zj1udWxsLHRoaXMucGVuZGluZ19idWZfc2l6ZT0wLHRoaXMucGVuZGluZ19vdXQ9MCx0aGlzLnBlbmRpbmc9MCx0aGlzLndyYXA9MCx0aGlzLmd6aGVhZD1udWxsLHRoaXMuZ3ppbmRleD0wLHRoaXMubWV0aG9kPXYsdGhpcy5sYXN0X2ZsdXNoPS0xLHRoaXMud19zaXplPTAsdGhpcy53X2JpdHM9MCx0aGlzLndfbWFzaz0wLHRoaXMud2luZG93PW51bGwsdGhpcy53aW5kb3dfc2l6ZT0wLHRoaXMucHJldj1udWxsLHRoaXMuaGVhZD1udWxsLHRoaXMuaW5zX2g9MCx0aGlzLmhhc2hfc2l6ZT0wLHRoaXMuaGFzaF9iaXRzPTAsdGhpcy5oYXNoX21hc2s9MCx0aGlzLmhhc2hfc2hpZnQ9MCx0aGlzLmJsb2NrX3N0YXJ0PTAsdGhpcy5tYXRjaF9sZW5ndGg9MCx0aGlzLnByZXZfbWF0Y2g9MCx0aGlzLm1hdGNoX2F2YWlsYWJsZT0wLHRoaXMuc3Ryc3RhcnQ9MCx0aGlzLm1hdGNoX3N0YXJ0PTAsdGhpcy5sb29rYWhlYWQ9MCx0aGlzLnByZXZfbGVuZ3RoPTAsdGhpcy5tYXhfY2hhaW5fbGVuZ3RoPTAsdGhpcy5tYXhfbGF6eV9tYXRjaD0wLHRoaXMubGV2ZWw9MCx0aGlzLnN0cmF0ZWd5PTAsdGhpcy5nb29kX21hdGNoPTAsdGhpcy5uaWNlX21hdGNoPTAsdGhpcy5keW5fbHRyZWU9bmV3IGQuQnVmMTYoMip3KSx0aGlzLmR5bl9kdHJlZT1uZXcgZC5CdWYxNigyKigyKmErMSkpLHRoaXMuYmxfdHJlZT1uZXcgZC5CdWYxNigyKigyKm8rMSkpLEQodGhpcy5keW5fbHRyZWUpLEQodGhpcy5keW5fZHRyZWUpLEQodGhpcy5ibF90cmVlKSx0aGlzLmxfZGVzYz1udWxsLHRoaXMuZF9kZXNjPW51bGwsdGhpcy5ibF9kZXNjPW51bGwsdGhpcy5ibF9jb3VudD1uZXcgZC5CdWYxNihrKzEpLHRoaXMuaGVhcD1uZXcgZC5CdWYxNigyKnMrMSksRCh0aGlzLmhlYXApLHRoaXMuaGVhcF9sZW49MCx0aGlzLmhlYXBfbWF4PTAsdGhpcy5kZXB0aD1uZXcgZC5CdWYxNigyKnMrMSksRCh0aGlzLmRlcHRoKSx0aGlzLmxfYnVmPTAsdGhpcy5saXRfYnVmc2l6ZT0wLHRoaXMubGFzdF9saXQ9MCx0aGlzLmRfYnVmPTAsdGhpcy5vcHRfbGVuPTAsdGhpcy5zdGF0aWNfbGVuPTAsdGhpcy5tYXRjaGVzPTAsdGhpcy5pbnNlcnQ9MCx0aGlzLmJpX2J1Zj0wLHRoaXMuYmlfdmFsaWQ9MH1mdW5jdGlvbiBHKHQpe3ZhciBlO3JldHVybiB0JiZ0LnN0YXRlPyh0LnRvdGFsX2luPXQudG90YWxfb3V0PTAsdC5kYXRhX3R5cGU9biwoZT10LnN0YXRlKS5wZW5kaW5nPTAsZS5wZW5kaW5nX291dD0wLGUud3JhcDwwJiYoZS53cmFwPS1lLndyYXApLGUuc3RhdHVzPWUud3JhcD9DOkUsdC5hZGxlcj0yPT09ZS53cmFwPzA6MSxlLmxhc3RfZmx1c2g9bCx1Ll90cl9pbml0KGUpLG0pOlIodCxfKX1mdW5jdGlvbiBLKHQpe3ZhciBlPUcodCk7cmV0dXJuIGU9PT1tJiZmdW5jdGlvbih0KXt0LndpbmRvd19zaXplPTIqdC53X3NpemUsRCh0LmhlYWQpLHQubWF4X2xhenlfbWF0Y2g9aFt0LmxldmVsXS5tYXhfbGF6eSx0Lmdvb2RfbWF0Y2g9aFt0LmxldmVsXS5nb29kX2xlbmd0aCx0Lm5pY2VfbWF0Y2g9aFt0LmxldmVsXS5uaWNlX2xlbmd0aCx0Lm1heF9jaGFpbl9sZW5ndGg9aFt0LmxldmVsXS5tYXhfY2hhaW4sdC5zdHJzdGFydD0wLHQuYmxvY2tfc3RhcnQ9MCx0Lmxvb2thaGVhZD0wLHQuaW5zZXJ0PTAsdC5tYXRjaF9sZW5ndGg9dC5wcmV2X2xlbmd0aD14LTEsdC5tYXRjaF9hdmFpbGFibGU9MCx0Lmluc19oPTB9KHQuc3RhdGUpLGV9ZnVuY3Rpb24gWSh0LGUscixpLG4scyl7aWYoIXQpcmV0dXJuIF87dmFyIGE9MTtpZihlPT09ZyYmKGU9NiksaTwwPyhhPTAsaT0taSk6MTU8aSYmKGE9MixpLT0xNiksbjwxfHx5PG58fHIhPT12fHxpPDh8fDE1PGl8fGU8MHx8OTxlfHxzPDB8fGI8cylyZXR1cm4gUih0LF8pOzg9PT1pJiYoaT05KTt2YXIgbz1uZXcgSDtyZXR1cm4odC5zdGF0ZT1vKS5zdHJtPXQsby53cmFwPWEsby5nemhlYWQ9bnVsbCxvLndfYml0cz1pLG8ud19zaXplPTE8PG8ud19iaXRzLG8ud19tYXNrPW8ud19zaXplLTEsby5oYXNoX2JpdHM9bis3LG8uaGFzaF9zaXplPTE8PG8uaGFzaF9iaXRzLG8uaGFzaF9tYXNrPW8uaGFzaF9zaXplLTEsby5oYXNoX3NoaWZ0PX5+KChvLmhhc2hfYml0cyt4LTEpL3gpLG8ud2luZG93PW5ldyBkLkJ1ZjgoMipvLndfc2l6ZSksby5oZWFkPW5ldyBkLkJ1ZjE2KG8uaGFzaF9zaXplKSxvLnByZXY9bmV3IGQuQnVmMTYoby53X3NpemUpLG8ubGl0X2J1ZnNpemU9MTw8bis2LG8ucGVuZGluZ19idWZfc2l6ZT00Km8ubGl0X2J1ZnNpemUsby5wZW5kaW5nX2J1Zj1uZXcgZC5CdWY4KG8ucGVuZGluZ19idWZfc2l6ZSksby5kX2J1Zj0xKm8ubGl0X2J1ZnNpemUsby5sX2J1Zj0zKm8ubGl0X2J1ZnNpemUsby5sZXZlbD1lLG8uc3RyYXRlZ3k9cyxvLm1ldGhvZD1yLEsodCl9aD1bbmV3IE0oMCwwLDAsMCxmdW5jdGlvbih0LGUpe3ZhciByPTY1NTM1O2ZvcihyPnQucGVuZGluZ19idWZfc2l6ZS01JiYocj10LnBlbmRpbmdfYnVmX3NpemUtNSk7Oyl7aWYodC5sb29rYWhlYWQ8PTEpe2lmKGoodCksMD09PXQubG9va2FoZWFkJiZlPT09bClyZXR1cm4gQTtpZigwPT09dC5sb29rYWhlYWQpYnJlYWt9dC5zdHJzdGFydCs9dC5sb29rYWhlYWQsdC5sb29rYWhlYWQ9MDt2YXIgaT10LmJsb2NrX3N0YXJ0K3I7aWYoKDA9PT10LnN0cnN0YXJ0fHx0LnN0cnN0YXJ0Pj1pKSYmKHQubG9va2FoZWFkPXQuc3Ryc3RhcnQtaSx0LnN0cnN0YXJ0PWksTih0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEE7aWYodC5zdHJzdGFydC10LmJsb2NrX3N0YXJ0Pj10Lndfc2l6ZS16JiYoTih0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9cmV0dXJuIHQuaW5zZXJ0PTAsZT09PWY/KE4odCwhMCksMD09PXQuc3RybS5hdmFpbF9vdXQ/TzpCKToodC5zdHJzdGFydD50LmJsb2NrX3N0YXJ0JiYoTih0LCExKSx0LnN0cm0uYXZhaWxfb3V0KSxBKX0pLG5ldyBNKDQsNCw4LDQsWiksbmV3IE0oNCw1LDE2LDgsWiksbmV3IE0oNCw2LDMyLDMyLFopLG5ldyBNKDQsNCwxNiwxNixXKSxuZXcgTSg4LDE2LDMyLDMyLFcpLG5ldyBNKDgsMTYsMTI4LDEyOCxXKSxuZXcgTSg4LDMyLDEyOCwyNTYsVyksbmV3IE0oMzIsMTI4LDI1OCwxMDI0LFcpLG5ldyBNKDMyLDI1OCwyNTgsNDA5NixXKV0sci5kZWZsYXRlSW5pdD1mdW5jdGlvbih0LGUpe3JldHVybiBZKHQsZSx2LDE1LDgsMCl9LHIuZGVmbGF0ZUluaXQyPVksci5kZWZsYXRlUmVzZXQ9SyxyLmRlZmxhdGVSZXNldEtlZXA9RyxyLmRlZmxhdGVTZXRIZWFkZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdCYmdC5zdGF0ZT8yIT09dC5zdGF0ZS53cmFwP186KHQuc3RhdGUuZ3poZWFkPWUsbSk6X30sci5kZWZsYXRlPWZ1bmN0aW9uKHQsZSl7dmFyIHIsaSxuLHM7aWYoIXR8fCF0LnN0YXRlfHw1PGV8fGU8MClyZXR1cm4gdD9SKHQsXyk6XztpZihpPXQuc3RhdGUsIXQub3V0cHV0fHwhdC5pbnB1dCYmMCE9PXQuYXZhaWxfaW58fDY2Nj09PWkuc3RhdHVzJiZlIT09ZilyZXR1cm4gUih0LDA9PT10LmF2YWlsX291dD8tNTpfKTtpZihpLnN0cm09dCxyPWkubGFzdF9mbHVzaCxpLmxhc3RfZmx1c2g9ZSxpLnN0YXR1cz09PUMpaWYoMj09PWkud3JhcCl0LmFkbGVyPTAsVShpLDMxKSxVKGksMTM5KSxVKGksOCksaS5nemhlYWQ/KFUoaSwoaS5nemhlYWQudGV4dD8xOjApKyhpLmd6aGVhZC5oY3JjPzI6MCkrKGkuZ3poZWFkLmV4dHJhPzQ6MCkrKGkuZ3poZWFkLm5hbWU/ODowKSsoaS5nemhlYWQuY29tbWVudD8xNjowKSksVShpLDI1NSZpLmd6aGVhZC50aW1lKSxVKGksaS5nemhlYWQudGltZT4+OCYyNTUpLFUoaSxpLmd6aGVhZC50aW1lPj4xNiYyNTUpLFUoaSxpLmd6aGVhZC50aW1lPj4yNCYyNTUpLFUoaSw5PT09aS5sZXZlbD8yOjI8PWkuc3RyYXRlZ3l8fGkubGV2ZWw8Mj80OjApLFUoaSwyNTUmaS5nemhlYWQub3MpLGkuZ3poZWFkLmV4dHJhJiZpLmd6aGVhZC5leHRyYS5sZW5ndGgmJihVKGksMjU1JmkuZ3poZWFkLmV4dHJhLmxlbmd0aCksVShpLGkuZ3poZWFkLmV4dHJhLmxlbmd0aD4+OCYyNTUpKSxpLmd6aGVhZC5oY3JjJiYodC5hZGxlcj1wKHQuYWRsZXIsaS5wZW5kaW5nX2J1ZixpLnBlbmRpbmcsMCkpLGkuZ3ppbmRleD0wLGkuc3RhdHVzPTY5KTooVShpLDApLFUoaSwwKSxVKGksMCksVShpLDApLFUoaSwwKSxVKGksOT09PWkubGV2ZWw/MjoyPD1pLnN0cmF0ZWd5fHxpLmxldmVsPDI/NDowKSxVKGksMyksaS5zdGF0dXM9RSk7ZWxzZXt2YXIgYT12KyhpLndfYml0cy04PDw0KTw8ODthfD0oMjw9aS5zdHJhdGVneXx8aS5sZXZlbDwyPzA6aS5sZXZlbDw2PzE6Nj09PWkubGV2ZWw/MjozKTw8NiwwIT09aS5zdHJzdGFydCYmKGF8PTMyKSxhKz0zMS1hJTMxLGkuc3RhdHVzPUUsUChpLGEpLDAhPT1pLnN0cnN0YXJ0JiYoUChpLHQuYWRsZXI+Pj4xNiksUChpLDY1NTM1JnQuYWRsZXIpKSx0LmFkbGVyPTF9aWYoNjk9PT1pLnN0YXR1cylpZihpLmd6aGVhZC5leHRyYSl7Zm9yKG49aS5wZW5kaW5nO2kuZ3ppbmRleDwoNjU1MzUmaS5nemhlYWQuZXh0cmEubGVuZ3RoKSYmKGkucGVuZGluZyE9PWkucGVuZGluZ19idWZfc2l6ZXx8KGkuZ3poZWFkLmhjcmMmJmkucGVuZGluZz5uJiYodC5hZGxlcj1wKHQuYWRsZXIsaS5wZW5kaW5nX2J1ZixpLnBlbmRpbmctbixuKSksRih0KSxuPWkucGVuZGluZyxpLnBlbmRpbmchPT1pLnBlbmRpbmdfYnVmX3NpemUpKTspVShpLDI1NSZpLmd6aGVhZC5leHRyYVtpLmd6aW5kZXhdKSxpLmd6aW5kZXgrKztpLmd6aGVhZC5oY3JjJiZpLnBlbmRpbmc+biYmKHQuYWRsZXI9cCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLW4sbikpLGkuZ3ppbmRleD09PWkuZ3poZWFkLmV4dHJhLmxlbmd0aCYmKGkuZ3ppbmRleD0wLGkuc3RhdHVzPTczKX1lbHNlIGkuc3RhdHVzPTczO2lmKDczPT09aS5zdGF0dXMpaWYoaS5nemhlYWQubmFtZSl7bj1pLnBlbmRpbmc7ZG97aWYoaS5wZW5kaW5nPT09aS5wZW5kaW5nX2J1Zl9zaXplJiYoaS5nemhlYWQuaGNyYyYmaS5wZW5kaW5nPm4mJih0LmFkbGVyPXAodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZy1uLG4pKSxGKHQpLG49aS5wZW5kaW5nLGkucGVuZGluZz09PWkucGVuZGluZ19idWZfc2l6ZSkpe3M9MTticmVha31zPWkuZ3ppbmRleDxpLmd6aGVhZC5uYW1lLmxlbmd0aD8yNTUmaS5nemhlYWQubmFtZS5jaGFyQ29kZUF0KGkuZ3ppbmRleCsrKTowLFUoaSxzKX13aGlsZSgwIT09cyk7aS5nemhlYWQuaGNyYyYmaS5wZW5kaW5nPm4mJih0LmFkbGVyPXAodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZy1uLG4pKSwwPT09cyYmKGkuZ3ppbmRleD0wLGkuc3RhdHVzPTkxKX1lbHNlIGkuc3RhdHVzPTkxO2lmKDkxPT09aS5zdGF0dXMpaWYoaS5nemhlYWQuY29tbWVudCl7bj1pLnBlbmRpbmc7ZG97aWYoaS5wZW5kaW5nPT09aS5wZW5kaW5nX2J1Zl9zaXplJiYoaS5nemhlYWQuaGNyYyYmaS5wZW5kaW5nPm4mJih0LmFkbGVyPXAodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZy1uLG4pKSxGKHQpLG49aS5wZW5kaW5nLGkucGVuZGluZz09PWkucGVuZGluZ19idWZfc2l6ZSkpe3M9MTticmVha31zPWkuZ3ppbmRleDxpLmd6aGVhZC5jb21tZW50Lmxlbmd0aD8yNTUmaS5nemhlYWQuY29tbWVudC5jaGFyQ29kZUF0KGkuZ3ppbmRleCsrKTowLFUoaSxzKX13aGlsZSgwIT09cyk7aS5nemhlYWQuaGNyYyYmaS5wZW5kaW5nPm4mJih0LmFkbGVyPXAodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZy1uLG4pKSwwPT09cyYmKGkuc3RhdHVzPTEwMyl9ZWxzZSBpLnN0YXR1cz0xMDM7aWYoMTAzPT09aS5zdGF0dXMmJihpLmd6aGVhZC5oY3JjPyhpLnBlbmRpbmcrMj5pLnBlbmRpbmdfYnVmX3NpemUmJkYodCksaS5wZW5kaW5nKzI8PWkucGVuZGluZ19idWZfc2l6ZSYmKFUoaSwyNTUmdC5hZGxlciksVShpLHQuYWRsZXI+PjgmMjU1KSx0LmFkbGVyPTAsaS5zdGF0dXM9RSkpOmkuc3RhdHVzPUUpLDAhPT1pLnBlbmRpbmcpe2lmKEYodCksMD09PXQuYXZhaWxfb3V0KXJldHVybiBpLmxhc3RfZmx1c2g9LTEsbX1lbHNlIGlmKDA9PT10LmF2YWlsX2luJiZUKGUpPD1UKHIpJiZlIT09ZilyZXR1cm4gUih0LC01KTtpZig2NjY9PT1pLnN0YXR1cyYmMCE9PXQuYXZhaWxfaW4pcmV0dXJuIFIodCwtNSk7aWYoMCE9PXQuYXZhaWxfaW58fDAhPT1pLmxvb2thaGVhZHx8ZSE9PWwmJjY2NiE9PWkuc3RhdHVzKXt2YXIgbz0yPT09aS5zdHJhdGVneT9mdW5jdGlvbih0LGUpe2Zvcih2YXIgcjs7KXtpZigwPT09dC5sb29rYWhlYWQmJihqKHQpLDA9PT10Lmxvb2thaGVhZCkpe2lmKGU9PT1sKXJldHVybiBBO2JyZWFrfWlmKHQubWF0Y2hfbGVuZ3RoPTAscj11Ll90cl90YWxseSh0LDAsdC53aW5kb3dbdC5zdHJzdGFydF0pLHQubG9va2FoZWFkLS0sdC5zdHJzdGFydCsrLHImJihOKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1yZXR1cm4gdC5pbnNlcnQ9MCxlPT09Zj8oTih0LCEwKSwwPT09dC5zdHJtLmF2YWlsX291dD9POkIpOnQubGFzdF9saXQmJihOKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KT9BOkl9KGksZSk6Mz09PWkuc3RyYXRlZ3k/ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIsaSxuLHMsYT10LndpbmRvdzs7KXtpZih0Lmxvb2thaGVhZDw9Uyl7aWYoaih0KSx0Lmxvb2thaGVhZDw9UyYmZT09PWwpcmV0dXJuIEE7aWYoMD09PXQubG9va2FoZWFkKWJyZWFrfWlmKHQubWF0Y2hfbGVuZ3RoPTAsdC5sb29rYWhlYWQ+PXgmJjA8dC5zdHJzdGFydCYmKGk9YVtuPXQuc3Ryc3RhcnQtMV0pPT09YVsrK25dJiZpPT09YVsrK25dJiZpPT09YVsrK25dKXtzPXQuc3Ryc3RhcnQrUztkb3t9d2hpbGUoaT09PWFbKytuXSYmaT09PWFbKytuXSYmaT09PWFbKytuXSYmaT09PWFbKytuXSYmaT09PWFbKytuXSYmaT09PWFbKytuXSYmaT09PWFbKytuXSYmaT09PWFbKytuXSYmbjxzKTt0Lm1hdGNoX2xlbmd0aD1TLShzLW4pLHQubWF0Y2hfbGVuZ3RoPnQubG9va2FoZWFkJiYodC5tYXRjaF9sZW5ndGg9dC5sb29rYWhlYWQpfWlmKHQubWF0Y2hfbGVuZ3RoPj14PyhyPXUuX3RyX3RhbGx5KHQsMSx0Lm1hdGNoX2xlbmd0aC14KSx0Lmxvb2thaGVhZC09dC5tYXRjaF9sZW5ndGgsdC5zdHJzdGFydCs9dC5tYXRjaF9sZW5ndGgsdC5tYXRjaF9sZW5ndGg9MCk6KHI9dS5fdHJfdGFsbHkodCwwLHQud2luZG93W3Quc3Ryc3RhcnRdKSx0Lmxvb2thaGVhZC0tLHQuc3Ryc3RhcnQrKyksciYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfXJldHVybiB0Lmluc2VydD0wLGU9PT1mPyhOKHQsITApLDA9PT10LnN0cm0uYXZhaWxfb3V0P086Qik6dC5sYXN0X2xpdCYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpP0E6SX0oaSxlKTpoW2kubGV2ZWxdLmZ1bmMoaSxlKTtpZihvIT09TyYmbyE9PUJ8fChpLnN0YXR1cz02NjYpLG89PT1BfHxvPT09TylyZXR1cm4gMD09PXQuYXZhaWxfb3V0JiYoaS5sYXN0X2ZsdXNoPS0xKSxtO2lmKG89PT1JJiYoMT09PWU/dS5fdHJfYWxpZ24oaSk6NSE9PWUmJih1Ll90cl9zdG9yZWRfYmxvY2soaSwwLDAsITEpLDM9PT1lJiYoRChpLmhlYWQpLDA9PT1pLmxvb2thaGVhZCYmKGkuc3Ryc3RhcnQ9MCxpLmJsb2NrX3N0YXJ0PTAsaS5pbnNlcnQ9MCkpKSxGKHQpLDA9PT10LmF2YWlsX291dCkpcmV0dXJuIGkubGFzdF9mbHVzaD0tMSxtfXJldHVybiBlIT09Zj9tOmkud3JhcDw9MD8xOigyPT09aS53cmFwPyhVKGksMjU1JnQuYWRsZXIpLFUoaSx0LmFkbGVyPj44JjI1NSksVShpLHQuYWRsZXI+PjE2JjI1NSksVShpLHQuYWRsZXI+PjI0JjI1NSksVShpLDI1NSZ0LnRvdGFsX2luKSxVKGksdC50b3RhbF9pbj4+OCYyNTUpLFUoaSx0LnRvdGFsX2luPj4xNiYyNTUpLFUoaSx0LnRvdGFsX2luPj4yNCYyNTUpKTooUChpLHQuYWRsZXI+Pj4xNiksUChpLDY1NTM1JnQuYWRsZXIpKSxGKHQpLDA8aS53cmFwJiYoaS53cmFwPS1pLndyYXApLDAhPT1pLnBlbmRpbmc/bToxKX0sci5kZWZsYXRlRW5kPWZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybiB0JiZ0LnN0YXRlPyhlPXQuc3RhdGUuc3RhdHVzKSE9PUMmJjY5IT09ZSYmNzMhPT1lJiY5MSE9PWUmJjEwMyE9PWUmJmUhPT1FJiY2NjYhPT1lP1IodCxfKToodC5zdGF0ZT1udWxsLGU9PT1FP1IodCwtMyk6bSk6X30sci5kZWZsYXRlU2V0RGljdGlvbmFyeT1mdW5jdGlvbih0LGUpe3ZhciByLGksbixzLGEsbyxoLHUsbD1lLmxlbmd0aDtpZighdHx8IXQuc3RhdGUpcmV0dXJuIF87aWYoMj09PShzPShyPXQuc3RhdGUpLndyYXApfHwxPT09cyYmci5zdGF0dXMhPT1DfHxyLmxvb2thaGVhZClyZXR1cm4gXztmb3IoMT09PXMmJih0LmFkbGVyPWModC5hZGxlcixlLGwsMCkpLHIud3JhcD0wLGw+PXIud19zaXplJiYoMD09PXMmJihEKHIuaGVhZCksci5zdHJzdGFydD0wLHIuYmxvY2tfc3RhcnQ9MCxyLmluc2VydD0wKSx1PW5ldyBkLkJ1Zjgoci53X3NpemUpLGQuYXJyYXlTZXQodSxlLGwtci53X3NpemUsci53X3NpemUsMCksZT11LGw9ci53X3NpemUpLGE9dC5hdmFpbF9pbixvPXQubmV4dF9pbixoPXQuaW5wdXQsdC5hdmFpbF9pbj1sLHQubmV4dF9pbj0wLHQuaW5wdXQ9ZSxqKHIpO3IubG9va2FoZWFkPj14Oyl7Zm9yKGk9ci5zdHJzdGFydCxuPXIubG9va2FoZWFkLSh4LTEpO3IuaW5zX2g9KHIuaW5zX2g8PHIuaGFzaF9zaGlmdF5yLndpbmRvd1tpK3gtMV0pJnIuaGFzaF9tYXNrLHIucHJldltpJnIud19tYXNrXT1yLmhlYWRbci5pbnNfaF0sci5oZWFkW3IuaW5zX2hdPWksaSsrLC0tbjspO3Iuc3Ryc3RhcnQ9aSxyLmxvb2thaGVhZD14LTEsaihyKX1yZXR1cm4gci5zdHJzdGFydCs9ci5sb29rYWhlYWQsci5ibG9ja19zdGFydD1yLnN0cnN0YXJ0LHIuaW5zZXJ0PXIubG9va2FoZWFkLHIubG9va2FoZWFkPTAsci5tYXRjaF9sZW5ndGg9ci5wcmV2X2xlbmd0aD14LTEsci5tYXRjaF9hdmFpbGFibGU9MCx0Lm5leHRfaW49byx0LmlucHV0PWgsdC5hdmFpbF9pbj1hLHIud3JhcD1zLG19LHIuZGVmbGF0ZUluZm89XCJwYWtvIGRlZmxhdGUgKGZyb20gTm9kZWNhIHByb2plY3QpXCJ9LHtcIi4uL3V0aWxzL2NvbW1vblwiOjQxLFwiLi9hZGxlcjMyXCI6NDMsXCIuL2NyYzMyXCI6NDUsXCIuL21lc3NhZ2VzXCI6NTEsXCIuL3RyZWVzXCI6NTJ9XSw0NzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe3RoaXMudGV4dD0wLHRoaXMudGltZT0wLHRoaXMueGZsYWdzPTAsdGhpcy5vcz0wLHRoaXMuZXh0cmE9bnVsbCx0aGlzLmV4dHJhX2xlbj0wLHRoaXMubmFtZT1cIlwiLHRoaXMuY29tbWVudD1cIlwiLHRoaXMuaGNyYz0wLHRoaXMuZG9uZT0hMX19LHt9XSw0ODpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3ZhciByLGksbixzLGEsbyxoLHUsbCxmLGQsYyxwLG0sXyxnLGIsdix5LHcsayx4LFMseixDO3I9dC5zdGF0ZSxpPXQubmV4dF9pbix6PXQuaW5wdXQsbj1pKyh0LmF2YWlsX2luLTUpLHM9dC5uZXh0X291dCxDPXQub3V0cHV0LGE9cy0oZS10LmF2YWlsX291dCksbz1zKyh0LmF2YWlsX291dC0yNTcpLGg9ci5kbWF4LHU9ci53c2l6ZSxsPXIud2hhdmUsZj1yLnduZXh0LGQ9ci53aW5kb3csYz1yLmhvbGQscD1yLmJpdHMsbT1yLmxlbmNvZGUsXz1yLmRpc3Rjb2RlLGc9KDE8PHIubGVuYml0cyktMSxiPSgxPDxyLmRpc3RiaXRzKS0xO3Q6ZG97cDwxNSYmKGMrPXpbaSsrXTw8cCxwKz04LGMrPXpbaSsrXTw8cCxwKz04KSx2PW1bYyZnXTtlOmZvcig7Oyl7aWYoYz4+Pj15PXY+Pj4yNCxwLT15LDA9PT0oeT12Pj4+MTYmMjU1KSlDW3MrK109NjU1MzUmdjtlbHNle2lmKCEoMTYmeSkpe2lmKDA9PSg2NCZ5KSl7dj1tWyg2NTUzNSZ2KSsoYyYoMTw8eSktMSldO2NvbnRpbnVlIGV9aWYoMzImeSl7ci5tb2RlPTEyO2JyZWFrIHR9dC5tc2c9XCJpbnZhbGlkIGxpdGVyYWwvbGVuZ3RoIGNvZGVcIixyLm1vZGU9MzA7YnJlYWsgdH13PTY1NTM1JnYsKHkmPTE1KSYmKHA8eSYmKGMrPXpbaSsrXTw8cCxwKz04KSx3Kz1jJigxPDx5KS0xLGM+Pj49eSxwLT15KSxwPDE1JiYoYys9eltpKytdPDxwLHArPTgsYys9eltpKytdPDxwLHArPTgpLHY9X1tjJmJdO3I6Zm9yKDs7KXtpZihjPj4+PXk9dj4+PjI0LHAtPXksISgxNiYoeT12Pj4+MTYmMjU1KSkpe2lmKDA9PSg2NCZ5KSl7dj1fWyg2NTUzNSZ2KSsoYyYoMTw8eSktMSldO2NvbnRpbnVlIHJ9dC5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIGNvZGVcIixyLm1vZGU9MzA7YnJlYWsgdH1pZihrPTY1NTM1JnYscDwoeSY9MTUpJiYoYys9eltpKytdPDxwLChwKz04KTx5JiYoYys9eltpKytdPDxwLHArPTgpKSxoPChrKz1jJigxPDx5KS0xKSl7dC5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFja1wiLHIubW9kZT0zMDticmVhayB0fWlmKGM+Pj49eSxwLT15LCh5PXMtYSk8ayl7aWYobDwoeT1rLXkpJiZyLnNhbmUpe3QubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWsgdH1pZihTPWQsKHg9MCk9PT1mKXtpZih4Kz11LXkseTx3KXtmb3Iody09eTtDW3MrK109ZFt4KytdLC0teTspO3g9cy1rLFM9Q319ZWxzZSBpZihmPHkpe2lmKHgrPXUrZi15LCh5LT1mKTx3KXtmb3Iody09eTtDW3MrK109ZFt4KytdLC0teTspO2lmKHg9MCxmPHcpe2Zvcih3LT15PWY7Q1tzKytdPWRbeCsrXSwtLXk7KTt4PXMtayxTPUN9fX1lbHNlIGlmKHgrPWYteSx5PHcpe2Zvcih3LT15O0NbcysrXT1kW3grK10sLS15Oyk7eD1zLWssUz1DfWZvcig7Mjx3OylDW3MrK109U1t4KytdLENbcysrXT1TW3grK10sQ1tzKytdPVNbeCsrXSx3LT0zO3cmJihDW3MrK109U1t4KytdLDE8dyYmKENbcysrXT1TW3grK10pKX1lbHNle2Zvcih4PXMtaztDW3MrK109Q1t4KytdLENbcysrXT1DW3grK10sQ1tzKytdPUNbeCsrXSwyPCh3LT0zKTspO3cmJihDW3MrK109Q1t4KytdLDE8dyYmKENbcysrXT1DW3grK10pKX1icmVha319YnJlYWt9fXdoaWxlKGk8biYmczxvKTtpLT13PXA+PjMsYyY9KDE8PChwLT13PDwzKSktMSx0Lm5leHRfaW49aSx0Lm5leHRfb3V0PXMsdC5hdmFpbF9pbj1pPG4/bi1pKzU6NS0oaS1uKSx0LmF2YWlsX291dD1zPG8/by1zKzI1NzoyNTctKHMtbyksci5ob2xkPWMsci5iaXRzPXB9fSx7fV0sNDk6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgST10KFwiLi4vdXRpbHMvY29tbW9uXCIpLE89dChcIi4vYWRsZXIzMlwiKSxCPXQoXCIuL2NyYzMyXCIpLFI9dChcIi4vaW5mZmFzdFwiKSxUPXQoXCIuL2luZnRyZWVzXCIpLEQ9MSxGPTIsTj0wLFU9LTIsUD0xLGk9ODUyLG49NTkyO2Z1bmN0aW9uIEwodCl7cmV0dXJuKHQ+Pj4yNCYyNTUpKyh0Pj4+OCY2NTI4MCkrKCg2NTI4MCZ0KTw8OCkrKCgyNTUmdCk8PDI0KX1mdW5jdGlvbiBzKCl7dGhpcy5tb2RlPTAsdGhpcy5sYXN0PSExLHRoaXMud3JhcD0wLHRoaXMuaGF2ZWRpY3Q9ITEsdGhpcy5mbGFncz0wLHRoaXMuZG1heD0wLHRoaXMuY2hlY2s9MCx0aGlzLnRvdGFsPTAsdGhpcy5oZWFkPW51bGwsdGhpcy53Yml0cz0wLHRoaXMud3NpemU9MCx0aGlzLndoYXZlPTAsdGhpcy53bmV4dD0wLHRoaXMud2luZG93PW51bGwsdGhpcy5ob2xkPTAsdGhpcy5iaXRzPTAsdGhpcy5sZW5ndGg9MCx0aGlzLm9mZnNldD0wLHRoaXMuZXh0cmE9MCx0aGlzLmxlbmNvZGU9bnVsbCx0aGlzLmRpc3Rjb2RlPW51bGwsdGhpcy5sZW5iaXRzPTAsdGhpcy5kaXN0Yml0cz0wLHRoaXMubmNvZGU9MCx0aGlzLm5sZW49MCx0aGlzLm5kaXN0PTAsdGhpcy5oYXZlPTAsdGhpcy5uZXh0PW51bGwsdGhpcy5sZW5zPW5ldyBJLkJ1ZjE2KDMyMCksdGhpcy53b3JrPW5ldyBJLkJ1ZjE2KDI4OCksdGhpcy5sZW5keW49bnVsbCx0aGlzLmRpc3RkeW49bnVsbCx0aGlzLnNhbmU9MCx0aGlzLmJhY2s9MCx0aGlzLndhcz0wfWZ1bmN0aW9uIGEodCl7dmFyIGU7cmV0dXJuIHQmJnQuc3RhdGU/KGU9dC5zdGF0ZSx0LnRvdGFsX2luPXQudG90YWxfb3V0PWUudG90YWw9MCx0Lm1zZz1cIlwiLGUud3JhcCYmKHQuYWRsZXI9MSZlLndyYXApLGUubW9kZT1QLGUubGFzdD0wLGUuaGF2ZWRpY3Q9MCxlLmRtYXg9MzI3NjgsZS5oZWFkPW51bGwsZS5ob2xkPTAsZS5iaXRzPTAsZS5sZW5jb2RlPWUubGVuZHluPW5ldyBJLkJ1ZjMyKGkpLGUuZGlzdGNvZGU9ZS5kaXN0ZHluPW5ldyBJLkJ1ZjMyKG4pLGUuc2FuZT0xLGUuYmFjaz0tMSxOKTpVfWZ1bmN0aW9uIG8odCl7dmFyIGU7cmV0dXJuIHQmJnQuc3RhdGU/KChlPXQuc3RhdGUpLndzaXplPTAsZS53aGF2ZT0wLGUud25leHQ9MCxhKHQpKTpVfWZ1bmN0aW9uIGgodCxlKXt2YXIgcixpO3JldHVybiB0JiZ0LnN0YXRlPyhpPXQuc3RhdGUsZTwwPyhyPTAsZT0tZSk6KHI9MSsoZT4+NCksZTw0OCYmKGUmPTE1KSksZSYmKGU8OHx8MTU8ZSk/VToobnVsbCE9PWkud2luZG93JiZpLndiaXRzIT09ZSYmKGkud2luZG93PW51bGwpLGkud3JhcD1yLGkud2JpdHM9ZSxvKHQpKSk6VX1mdW5jdGlvbiB1KHQsZSl7dmFyIHIsaTtyZXR1cm4gdD8oaT1uZXcgcywodC5zdGF0ZT1pKS53aW5kb3c9bnVsbCwocj1oKHQsZSkpIT09TiYmKHQuc3RhdGU9bnVsbCkscik6VX12YXIgbCxmLGQ9ITA7ZnVuY3Rpb24gaih0KXtpZihkKXt2YXIgZTtmb3IobD1uZXcgSS5CdWYzMig1MTIpLGY9bmV3IEkuQnVmMzIoMzIpLGU9MDtlPDE0NDspdC5sZW5zW2UrK109ODtmb3IoO2U8MjU2Oyl0LmxlbnNbZSsrXT05O2Zvcig7ZTwyODA7KXQubGVuc1tlKytdPTc7Zm9yKDtlPDI4ODspdC5sZW5zW2UrK109ODtmb3IoVChELHQubGVucywwLDI4OCxsLDAsdC53b3JrLHtiaXRzOjl9KSxlPTA7ZTwzMjspdC5sZW5zW2UrK109NTtUKEYsdC5sZW5zLDAsMzIsZiwwLHQud29yayx7Yml0czo1fSksZD0hMX10LmxlbmNvZGU9bCx0LmxlbmJpdHM9OSx0LmRpc3Rjb2RlPWYsdC5kaXN0Yml0cz01fWZ1bmN0aW9uIFoodCxlLHIsaSl7dmFyIG4scz10LnN0YXRlO3JldHVybiBudWxsPT09cy53aW5kb3cmJihzLndzaXplPTE8PHMud2JpdHMscy53bmV4dD0wLHMud2hhdmU9MCxzLndpbmRvdz1uZXcgSS5CdWY4KHMud3NpemUpKSxpPj1zLndzaXplPyhJLmFycmF5U2V0KHMud2luZG93LGUsci1zLndzaXplLHMud3NpemUsMCkscy53bmV4dD0wLHMud2hhdmU9cy53c2l6ZSk6KGk8KG49cy53c2l6ZS1zLnduZXh0KSYmKG49aSksSS5hcnJheVNldChzLndpbmRvdyxlLHItaSxuLHMud25leHQpLChpLT1uKT8oSS5hcnJheVNldChzLndpbmRvdyxlLHItaSxpLDApLHMud25leHQ9aSxzLndoYXZlPXMud3NpemUpOihzLnduZXh0Kz1uLHMud25leHQ9PT1zLndzaXplJiYocy53bmV4dD0wKSxzLndoYXZlPHMud3NpemUmJihzLndoYXZlKz1uKSkpLDB9ci5pbmZsYXRlUmVzZXQ9byxyLmluZmxhdGVSZXNldDI9aCxyLmluZmxhdGVSZXNldEtlZXA9YSxyLmluZmxhdGVJbml0PWZ1bmN0aW9uKHQpe3JldHVybiB1KHQsMTUpfSxyLmluZmxhdGVJbml0Mj11LHIuaW5mbGF0ZT1mdW5jdGlvbih0LGUpe3ZhciByLGksbixzLGEsbyxoLHUsbCxmLGQsYyxwLG0sXyxnLGIsdix5LHcsayx4LFMseixDPTAsRT1uZXcgSS5CdWY4KDQpLEE9WzE2LDE3LDE4LDAsOCw3LDksNiwxMCw1LDExLDQsMTIsMywxMywyLDE0LDEsMTVdO2lmKCF0fHwhdC5zdGF0ZXx8IXQub3V0cHV0fHwhdC5pbnB1dCYmMCE9PXQuYXZhaWxfaW4pcmV0dXJuIFU7MTI9PT0ocj10LnN0YXRlKS5tb2RlJiYoci5tb2RlPTEzKSxhPXQubmV4dF9vdXQsbj10Lm91dHB1dCxoPXQuYXZhaWxfb3V0LHM9dC5uZXh0X2luLGk9dC5pbnB1dCxvPXQuYXZhaWxfaW4sdT1yLmhvbGQsbD1yLmJpdHMsZj1vLGQ9aCx4PU47dDpmb3IoOzspc3dpdGNoKHIubW9kZSl7Y2FzZSBQOmlmKDA9PT1yLndyYXApe3IubW9kZT0xMzticmVha31mb3IoO2w8MTY7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZigyJnIud3JhcCYmMzU2MTU9PT11KXtFW3IuY2hlY2s9MF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSwyLDApLGw9dT0wLHIubW9kZT0yO2JyZWFrfWlmKHIuZmxhZ3M9MCxyLmhlYWQmJihyLmhlYWQuZG9uZT0hMSksISgxJnIud3JhcCl8fCgoKDI1NSZ1KTw8OCkrKHU+PjgpKSUzMSl7dC5tc2c9XCJpbmNvcnJlY3QgaGVhZGVyIGNoZWNrXCIsci5tb2RlPTMwO2JyZWFrfWlmKDghPSgxNSZ1KSl7dC5tc2c9XCJ1bmtub3duIGNvbXByZXNzaW9uIG1ldGhvZFwiLHIubW9kZT0zMDticmVha31pZihsLT00LGs9OCsoMTUmKHU+Pj49NCkpLDA9PT1yLndiaXRzKXIud2JpdHM9aztlbHNlIGlmKGs+ci53Yml0cyl7dC5tc2c9XCJpbnZhbGlkIHdpbmRvdyBzaXplXCIsci5tb2RlPTMwO2JyZWFrfXIuZG1heD0xPDxrLHQuYWRsZXI9ci5jaGVjaz0xLHIubW9kZT01MTImdT8xMDoxMixsPXU9MDticmVhaztjYXNlIDI6Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9aWYoci5mbGFncz11LDghPSgyNTUmci5mbGFncykpe3QubXNnPVwidW5rbm93biBjb21wcmVzc2lvbiBtZXRob2RcIixyLm1vZGU9MzA7YnJlYWt9aWYoNTczNDQmci5mbGFncyl7dC5tc2c9XCJ1bmtub3duIGhlYWRlciBmbGFncyBzZXRcIixyLm1vZGU9MzA7YnJlYWt9ci5oZWFkJiYoci5oZWFkLnRleHQ9dT4+OCYxKSw1MTImci5mbGFncyYmKEVbMF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSwyLDApKSxsPXU9MCxyLm1vZGU9MztjYXNlIDM6Zm9yKDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9ci5oZWFkJiYoci5oZWFkLnRpbWU9dSksNTEyJnIuZmxhZ3MmJihFWzBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LEVbMl09dT4+PjE2JjI1NSxFWzNdPXU+Pj4yNCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSw0LDApKSxsPXU9MCxyLm1vZGU9NDtjYXNlIDQ6Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9ci5oZWFkJiYoci5oZWFkLnhmbGFncz0yNTUmdSxyLmhlYWQub3M9dT4+OCksNTEyJnIuZmxhZ3MmJihFWzBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsMiwwKSksbD11PTAsci5tb2RlPTU7Y2FzZSA1OmlmKDEwMjQmci5mbGFncyl7Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9ci5sZW5ndGg9dSxyLmhlYWQmJihyLmhlYWQuZXh0cmFfbGVuPXUpLDUxMiZyLmZsYWdzJiYoRVswXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDIsMCkpLGw9dT0wfWVsc2Ugci5oZWFkJiYoci5oZWFkLmV4dHJhPW51bGwpO3IubW9kZT02O2Nhc2UgNjppZigxMDI0JnIuZmxhZ3MmJihvPChjPXIubGVuZ3RoKSYmKGM9byksYyYmKHIuaGVhZCYmKGs9ci5oZWFkLmV4dHJhX2xlbi1yLmxlbmd0aCxyLmhlYWQuZXh0cmF8fChyLmhlYWQuZXh0cmE9bmV3IEFycmF5KHIuaGVhZC5leHRyYV9sZW4pKSxJLmFycmF5U2V0KHIuaGVhZC5leHRyYSxpLHMsYyxrKSksNTEyJnIuZmxhZ3MmJihyLmNoZWNrPUIoci5jaGVjayxpLGMscykpLG8tPWMscys9YyxyLmxlbmd0aC09Yyksci5sZW5ndGgpKWJyZWFrIHQ7ci5sZW5ndGg9MCxyLm1vZGU9NztjYXNlIDc6aWYoMjA0OCZyLmZsYWdzKXtpZigwPT09bylicmVhayB0O2ZvcihjPTA7az1pW3MrYysrXSxyLmhlYWQmJmsmJnIubGVuZ3RoPDY1NTM2JiYoci5oZWFkLm5hbWUrPVN0cmluZy5mcm9tQ2hhckNvZGUoaykpLGsmJmM8bzspO2lmKDUxMiZyLmZsYWdzJiYoci5jaGVjaz1CKHIuY2hlY2ssaSxjLHMpKSxvLT1jLHMrPWMsaylicmVhayB0fWVsc2Ugci5oZWFkJiYoci5oZWFkLm5hbWU9bnVsbCk7ci5sZW5ndGg9MCxyLm1vZGU9ODtjYXNlIDg6aWYoNDA5NiZyLmZsYWdzKXtpZigwPT09bylicmVhayB0O2ZvcihjPTA7az1pW3MrYysrXSxyLmhlYWQmJmsmJnIubGVuZ3RoPDY1NTM2JiYoci5oZWFkLmNvbW1lbnQrPVN0cmluZy5mcm9tQ2hhckNvZGUoaykpLGsmJmM8bzspO2lmKDUxMiZyLmZsYWdzJiYoci5jaGVjaz1CKHIuY2hlY2ssaSxjLHMpKSxvLT1jLHMrPWMsaylicmVhayB0fWVsc2Ugci5oZWFkJiYoci5oZWFkLmNvbW1lbnQ9bnVsbCk7ci5tb2RlPTk7Y2FzZSA5OmlmKDUxMiZyLmZsYWdzKXtmb3IoO2w8MTY7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZih1IT09KDY1NTM1JnIuY2hlY2spKXt0Lm1zZz1cImhlYWRlciBjcmMgbWlzbWF0Y2hcIixyLm1vZGU9MzA7YnJlYWt9bD11PTB9ci5oZWFkJiYoci5oZWFkLmhjcmM9ci5mbGFncz4+OSYxLHIuaGVhZC5kb25lPSEwKSx0LmFkbGVyPXIuY2hlY2s9MCxyLm1vZGU9MTI7YnJlYWs7Y2FzZSAxMDpmb3IoO2w8MzI7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH10LmFkbGVyPXIuY2hlY2s9TCh1KSxsPXU9MCxyLm1vZGU9MTE7Y2FzZSAxMTppZigwPT09ci5oYXZlZGljdClyZXR1cm4gdC5uZXh0X291dD1hLHQuYXZhaWxfb3V0PWgsdC5uZXh0X2luPXMsdC5hdmFpbF9pbj1vLHIuaG9sZD11LHIuYml0cz1sLDI7dC5hZGxlcj1yLmNoZWNrPTEsci5tb2RlPTEyO2Nhc2UgMTI6aWYoNT09PWV8fDY9PT1lKWJyZWFrIHQ7Y2FzZSAxMzppZihyLmxhc3Qpe3U+Pj49NyZsLGwtPTcmbCxyLm1vZGU9Mjc7YnJlYWt9Zm9yKDtsPDM7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1zd2l0Y2goci5sYXN0PTEmdSxsLT0xLDMmKHU+Pj49MSkpe2Nhc2UgMDpyLm1vZGU9MTQ7YnJlYWs7Y2FzZSAxOmlmKGoociksci5tb2RlPTIwLDYhPT1lKWJyZWFrO3U+Pj49MixsLT0yO2JyZWFrIHQ7Y2FzZSAyOnIubW9kZT0xNzticmVhaztjYXNlIDM6dC5tc2c9XCJpbnZhbGlkIGJsb2NrIHR5cGVcIixyLm1vZGU9MzB9dT4+Pj0yLGwtPTI7YnJlYWs7Y2FzZSAxNDpmb3IodT4+Pj03JmwsbC09NyZsO2w8MzI7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZigoNjU1MzUmdSkhPSh1Pj4+MTZeNjU1MzUpKXt0Lm1zZz1cImludmFsaWQgc3RvcmVkIGJsb2NrIGxlbmd0aHNcIixyLm1vZGU9MzA7YnJlYWt9aWYoci5sZW5ndGg9NjU1MzUmdSxsPXU9MCxyLm1vZGU9MTUsNj09PWUpYnJlYWsgdDtjYXNlIDE1OnIubW9kZT0xNjtjYXNlIDE2OmlmKGM9ci5sZW5ndGgpe2lmKG88YyYmKGM9byksaDxjJiYoYz1oKSwwPT09YylicmVhayB0O0kuYXJyYXlTZXQobixpLHMsYyxhKSxvLT1jLHMrPWMsaC09YyxhKz1jLHIubGVuZ3RoLT1jO2JyZWFrfXIubW9kZT0xMjticmVhaztjYXNlIDE3OmZvcig7bDwxNDspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWlmKHIubmxlbj0yNTcrKDMxJnUpLHU+Pj49NSxsLT01LHIubmRpc3Q9MSsoMzEmdSksdT4+Pj01LGwtPTUsci5uY29kZT00KygxNSZ1KSx1Pj4+PTQsbC09NCwyODY8ci5ubGVufHwzMDxyLm5kaXN0KXt0Lm1zZz1cInRvbyBtYW55IGxlbmd0aCBvciBkaXN0YW5jZSBzeW1ib2xzXCIsci5tb2RlPTMwO2JyZWFrfXIuaGF2ZT0wLHIubW9kZT0xODtjYXNlIDE4OmZvcig7ci5oYXZlPHIubmNvZGU7KXtmb3IoO2w8Mzspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fXIubGVuc1tBW3IuaGF2ZSsrXV09NyZ1LHU+Pj49MyxsLT0zfWZvcig7ci5oYXZlPDE5OylyLmxlbnNbQVtyLmhhdmUrK11dPTA7aWYoci5sZW5jb2RlPXIubGVuZHluLHIubGVuYml0cz03LFM9e2JpdHM6ci5sZW5iaXRzfSx4PVQoMCxyLmxlbnMsMCwxOSxyLmxlbmNvZGUsMCxyLndvcmssUyksci5sZW5iaXRzPVMuYml0cyx4KXt0Lm1zZz1cImludmFsaWQgY29kZSBsZW5ndGhzIHNldFwiLHIubW9kZT0zMDticmVha31yLmhhdmU9MCxyLm1vZGU9MTk7Y2FzZSAxOTpmb3IoO3IuaGF2ZTxyLm5sZW4rci5uZGlzdDspe2Zvcig7Zz0oQz1yLmxlbmNvZGVbdSYoMTw8ci5sZW5iaXRzKS0xXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEoKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZihiPDE2KXU+Pj49XyxsLT1fLHIubGVuc1tyLmhhdmUrK109YjtlbHNle2lmKDE2PT09Yil7Zm9yKHo9XysyO2w8ejspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWlmKHU+Pj49XyxsLT1fLDA9PT1yLmhhdmUpe3QubXNnPVwiaW52YWxpZCBiaXQgbGVuZ3RoIHJlcGVhdFwiLHIubW9kZT0zMDticmVha31rPXIubGVuc1tyLmhhdmUtMV0sYz0zKygzJnUpLHU+Pj49MixsLT0yfWVsc2UgaWYoMTc9PT1iKXtmb3Ioej1fKzM7bDx6Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9bC09XyxrPTAsYz0zKyg3Jih1Pj4+PV8pKSx1Pj4+PTMsbC09M31lbHNle2Zvcih6PV8rNztsPHo7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1sLT1fLGs9MCxjPTExKygxMjcmKHU+Pj49XykpLHU+Pj49NyxsLT03fWlmKHIuaGF2ZStjPnIubmxlbityLm5kaXN0KXt0Lm1zZz1cImludmFsaWQgYml0IGxlbmd0aCByZXBlYXRcIixyLm1vZGU9MzA7YnJlYWt9Zm9yKDtjLS07KXIubGVuc1tyLmhhdmUrK109a319aWYoMzA9PT1yLm1vZGUpYnJlYWs7aWYoMD09PXIubGVuc1syNTZdKXt0Lm1zZz1cImludmFsaWQgY29kZSAtLSBtaXNzaW5nIGVuZC1vZi1ibG9ja1wiLHIubW9kZT0zMDticmVha31pZihyLmxlbmJpdHM9OSxTPXtiaXRzOnIubGVuYml0c30seD1UKEQsci5sZW5zLDAsci5ubGVuLHIubGVuY29kZSwwLHIud29yayxTKSxyLmxlbmJpdHM9Uy5iaXRzLHgpe3QubXNnPVwiaW52YWxpZCBsaXRlcmFsL2xlbmd0aHMgc2V0XCIsci5tb2RlPTMwO2JyZWFrfWlmKHIuZGlzdGJpdHM9NixyLmRpc3Rjb2RlPXIuZGlzdGR5bixTPXtiaXRzOnIuZGlzdGJpdHN9LHg9VChGLHIubGVucyxyLm5sZW4sci5uZGlzdCxyLmRpc3Rjb2RlLDAsci53b3JrLFMpLHIuZGlzdGJpdHM9Uy5iaXRzLHgpe3QubXNnPVwiaW52YWxpZCBkaXN0YW5jZXMgc2V0XCIsci5tb2RlPTMwO2JyZWFrfWlmKHIubW9kZT0yMCw2PT09ZSlicmVhayB0O2Nhc2UgMjA6ci5tb2RlPTIxO2Nhc2UgMjE6aWYoNjw9byYmMjU4PD1oKXt0Lm5leHRfb3V0PWEsdC5hdmFpbF9vdXQ9aCx0Lm5leHRfaW49cyx0LmF2YWlsX2luPW8sci5ob2xkPXUsci5iaXRzPWwsUih0LGQpLGE9dC5uZXh0X291dCxuPXQub3V0cHV0LGg9dC5hdmFpbF9vdXQscz10Lm5leHRfaW4saT10LmlucHV0LG89dC5hdmFpbF9pbix1PXIuaG9sZCxsPXIuYml0cywxMj09PXIubW9kZSYmKHIuYmFjaz0tMSk7YnJlYWt9Zm9yKHIuYmFjaz0wO2c9KEM9ci5sZW5jb2RlW3UmKDE8PHIubGVuYml0cyktMV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKChfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9aWYoZyYmMD09KDI0MCZnKSl7Zm9yKHY9Xyx5PWcsdz1iO2c9KEM9ci5sZW5jb2RlW3crKCh1JigxPDx2K3kpLTEpPj52KV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKHYrKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH11Pj4+PXYsbC09dixyLmJhY2srPXZ9aWYodT4+Pj1fLGwtPV8sci5iYWNrKz1fLHIubGVuZ3RoPWIsMD09PWcpe3IubW9kZT0yNjticmVha31pZigzMiZnKXtyLmJhY2s9LTEsci5tb2RlPTEyO2JyZWFrfWlmKDY0Jmcpe3QubXNnPVwiaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlXCIsci5tb2RlPTMwO2JyZWFrfXIuZXh0cmE9MTUmZyxyLm1vZGU9MjI7Y2FzZSAyMjppZihyLmV4dHJhKXtmb3Ioej1yLmV4dHJhO2w8ejspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fXIubGVuZ3RoKz11JigxPDxyLmV4dHJhKS0xLHU+Pj49ci5leHRyYSxsLT1yLmV4dHJhLHIuYmFjays9ci5leHRyYX1yLndhcz1yLmxlbmd0aCxyLm1vZGU9MjM7Y2FzZSAyMzpmb3IoO2c9KEM9ci5kaXN0Y29kZVt1JigxPDxyLmRpc3RiaXRzKS0xXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEoKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZigwPT0oMjQwJmcpKXtmb3Iodj1fLHk9Zyx3PWI7Zz0oQz1yLmRpc3Rjb2RlW3crKCh1JigxPDx2K3kpLTEpPj52KV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKHYrKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH11Pj4+PXYsbC09dixyLmJhY2srPXZ9aWYodT4+Pj1fLGwtPV8sci5iYWNrKz1fLDY0Jmcpe3QubXNnPVwiaW52YWxpZCBkaXN0YW5jZSBjb2RlXCIsci5tb2RlPTMwO2JyZWFrfXIub2Zmc2V0PWIsci5leHRyYT0xNSZnLHIubW9kZT0yNDtjYXNlIDI0OmlmKHIuZXh0cmEpe2Zvcih6PXIuZXh0cmE7bDx6Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9ci5vZmZzZXQrPXUmKDE8PHIuZXh0cmEpLTEsdT4+Pj1yLmV4dHJhLGwtPXIuZXh0cmEsci5iYWNrKz1yLmV4dHJhfWlmKHIub2Zmc2V0PnIuZG1heCl7dC5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFja1wiLHIubW9kZT0zMDticmVha31yLm1vZGU9MjU7Y2FzZSAyNTppZigwPT09aClicmVhayB0O2lmKGM9ZC1oLHIub2Zmc2V0PmMpe2lmKChjPXIub2Zmc2V0LWMpPnIud2hhdmUmJnIuc2FuZSl7dC5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFja1wiLHIubW9kZT0zMDticmVha31wPWM+ci53bmV4dD8oYy09ci53bmV4dCxyLndzaXplLWMpOnIud25leHQtYyxjPnIubGVuZ3RoJiYoYz1yLmxlbmd0aCksbT1yLndpbmRvd31lbHNlIG09bixwPWEtci5vZmZzZXQsYz1yLmxlbmd0aDtmb3IoaDxjJiYoYz1oKSxoLT1jLHIubGVuZ3RoLT1jO25bYSsrXT1tW3ArK10sLS1jOyk7MD09PXIubGVuZ3RoJiYoci5tb2RlPTIxKTticmVhaztjYXNlIDI2OmlmKDA9PT1oKWJyZWFrIHQ7blthKytdPXIubGVuZ3RoLGgtLSxyLm1vZGU9MjE7YnJlYWs7Y2FzZSAyNzppZihyLndyYXApe2Zvcig7bDwzMjspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHV8PWlbcysrXTw8bCxsKz04fWlmKGQtPWgsdC50b3RhbF9vdXQrPWQsci50b3RhbCs9ZCxkJiYodC5hZGxlcj1yLmNoZWNrPXIuZmxhZ3M/QihyLmNoZWNrLG4sZCxhLWQpOk8oci5jaGVjayxuLGQsYS1kKSksZD1oLChyLmZsYWdzP3U6TCh1KSkhPT1yLmNoZWNrKXt0Lm1zZz1cImluY29ycmVjdCBkYXRhIGNoZWNrXCIsci5tb2RlPTMwO2JyZWFrfWw9dT0wfXIubW9kZT0yODtjYXNlIDI4OmlmKHIud3JhcCYmci5mbGFncyl7Zm9yKDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9aWYodSE9PSg0Mjk0OTY3Mjk1JnIudG90YWwpKXt0Lm1zZz1cImluY29ycmVjdCBsZW5ndGggY2hlY2tcIixyLm1vZGU9MzA7YnJlYWt9bD11PTB9ci5tb2RlPTI5O2Nhc2UgMjk6eD0xO2JyZWFrIHQ7Y2FzZSAzMDp4PS0zO2JyZWFrIHQ7Y2FzZSAzMTpyZXR1cm4tNDtjYXNlIDMyOmRlZmF1bHQ6cmV0dXJuIFV9cmV0dXJuIHQubmV4dF9vdXQ9YSx0LmF2YWlsX291dD1oLHQubmV4dF9pbj1zLHQuYXZhaWxfaW49byxyLmhvbGQ9dSxyLmJpdHM9bCwoci53c2l6ZXx8ZCE9PXQuYXZhaWxfb3V0JiZyLm1vZGU8MzAmJihyLm1vZGU8Mjd8fDQhPT1lKSkmJloodCx0Lm91dHB1dCx0Lm5leHRfb3V0LGQtdC5hdmFpbF9vdXQpPyhyLm1vZGU9MzEsLTQpOihmLT10LmF2YWlsX2luLGQtPXQuYXZhaWxfb3V0LHQudG90YWxfaW4rPWYsdC50b3RhbF9vdXQrPWQsci50b3RhbCs9ZCxyLndyYXAmJmQmJih0LmFkbGVyPXIuY2hlY2s9ci5mbGFncz9CKHIuY2hlY2ssbixkLHQubmV4dF9vdXQtZCk6TyhyLmNoZWNrLG4sZCx0Lm5leHRfb3V0LWQpKSx0LmRhdGFfdHlwZT1yLmJpdHMrKHIubGFzdD82NDowKSsoMTI9PT1yLm1vZGU/MTI4OjApKygyMD09PXIubW9kZXx8MTU9PT1yLm1vZGU/MjU2OjApLCgwPT1mJiYwPT09ZHx8ND09PWUpJiZ4PT09TiYmKHg9LTUpLHgpfSxyLmluZmxhdGVFbmQ9ZnVuY3Rpb24odCl7aWYoIXR8fCF0LnN0YXRlKXJldHVybiBVO3ZhciBlPXQuc3RhdGU7cmV0dXJuIGUud2luZG93JiYoZS53aW5kb3c9bnVsbCksdC5zdGF0ZT1udWxsLE59LHIuaW5mbGF0ZUdldEhlYWRlcj1mdW5jdGlvbih0LGUpe3ZhciByO3JldHVybiB0JiZ0LnN0YXRlPzA9PSgyJihyPXQuc3RhdGUpLndyYXApP1U6KChyLmhlYWQ9ZSkuZG9uZT0hMSxOKTpVfSxyLmluZmxhdGVTZXREaWN0aW9uYXJ5PWZ1bmN0aW9uKHQsZSl7dmFyIHIsaT1lLmxlbmd0aDtyZXR1cm4gdCYmdC5zdGF0ZT8wIT09KHI9dC5zdGF0ZSkud3JhcCYmMTEhPT1yLm1vZGU/VToxMT09PXIubW9kZSYmTygxLGUsaSwwKSE9PXIuY2hlY2s/LTM6Wih0LGUsaSxpKT8oci5tb2RlPTMxLC00KTooci5oYXZlZGljdD0xLE4pOlV9LHIuaW5mbGF0ZUluZm89XCJwYWtvIGluZmxhdGUgKGZyb20gTm9kZWNhIHByb2plY3QpXCJ9LHtcIi4uL3V0aWxzL2NvbW1vblwiOjQxLFwiLi9hZGxlcjMyXCI6NDMsXCIuL2NyYzMyXCI6NDUsXCIuL2luZmZhc3RcIjo0OCxcIi4vaW5mdHJlZXNcIjo1MH1dLDUwOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIEQ9dChcIi4uL3V0aWxzL2NvbW1vblwiKSxGPVszLDQsNSw2LDcsOCw5LDEwLDExLDEzLDE1LDE3LDE5LDIzLDI3LDMxLDM1LDQzLDUxLDU5LDY3LDgzLDk5LDExNSwxMzEsMTYzLDE5NSwyMjcsMjU4LDAsMF0sTj1bMTYsMTYsMTYsMTYsMTYsMTYsMTYsMTYsMTcsMTcsMTcsMTcsMTgsMTgsMTgsMTgsMTksMTksMTksMTksMjAsMjAsMjAsMjAsMjEsMjEsMjEsMjEsMTYsNzIsNzhdLFU9WzEsMiwzLDQsNSw3LDksMTMsMTcsMjUsMzMsNDksNjUsOTcsMTI5LDE5MywyNTcsMzg1LDUxMyw3NjksMTAyNSwxNTM3LDIwNDksMzA3Myw0MDk3LDYxNDUsODE5MywxMjI4OSwxNjM4NSwyNDU3NywwLDBdLFA9WzE2LDE2LDE2LDE2LDE3LDE3LDE4LDE4LDE5LDE5LDIwLDIwLDIxLDIxLDIyLDIyLDIzLDIzLDI0LDI0LDI1LDI1LDI2LDI2LDI3LDI3LDI4LDI4LDI5LDI5LDY0LDY0XTtlLmV4cG9ydHM9ZnVuY3Rpb24odCxlLHIsaSxuLHMsYSxvKXt2YXIgaCx1LGwsZixkLGMscCxtLF8sZz1vLmJpdHMsYj0wLHY9MCx5PTAsdz0wLGs9MCx4PTAsUz0wLHo9MCxDPTAsRT0wLEE9bnVsbCxJPTAsTz1uZXcgRC5CdWYxNigxNiksQj1uZXcgRC5CdWYxNigxNiksUj1udWxsLFQ9MDtmb3IoYj0wO2I8PTE1O2IrKylPW2JdPTA7Zm9yKHY9MDt2PGk7disrKU9bZVtyK3ZdXSsrO2ZvcihrPWcsdz0xNTsxPD13JiYwPT09T1t3XTt3LS0pO2lmKHc8ayYmKGs9dyksMD09PXcpcmV0dXJuIG5bcysrXT0yMDk3MTUyMCxuW3MrK109MjA5NzE1MjAsby5iaXRzPTEsMDtmb3IoeT0xO3k8dyYmMD09PU9beV07eSsrKTtmb3Ioazx5JiYoaz15KSxiPXo9MTtiPD0xNTtiKyspaWYoejw8PTEsKHotPU9bYl0pPDApcmV0dXJuLTE7aWYoMDx6JiYoMD09PXR8fDEhPT13KSlyZXR1cm4tMTtmb3IoQlsxXT0wLGI9MTtiPDE1O2IrKylCW2IrMV09QltiXStPW2JdO2Zvcih2PTA7djxpO3YrKykwIT09ZVtyK3ZdJiYoYVtCW2Vbcit2XV0rK109dik7aWYoYz0wPT09dD8oQT1SPWEsMTkpOjE9PT10PyhBPUYsSS09MjU3LFI9TixULT0yNTcsMjU2KTooQT1VLFI9UCwtMSksYj15LGQ9cyxTPXY9RT0wLGw9LTEsZj0oQz0xPDwoeD1rKSktMSwxPT09dCYmODUyPEN8fDI9PT10JiY1OTI8QylyZXR1cm4gMTtmb3IoOzspe2ZvcihwPWItUyxfPWFbdl08Yz8obT0wLGFbdl0pOmFbdl0+Yz8obT1SW1QrYVt2XV0sQVtJK2Fbdl1dKToobT05NiwwKSxoPTE8PGItUyx5PXU9MTw8eDtuW2QrKEU+PlMpKyh1LT1oKV09cDw8MjR8bTw8MTZ8X3wwLDAhPT11Oyk7Zm9yKGg9MTw8Yi0xO0UmaDspaD4+PTE7aWYoMCE9PWg/KEUmPWgtMSxFKz1oKTpFPTAsdisrLDA9PS0tT1tiXSl7aWYoYj09PXcpYnJlYWs7Yj1lW3IrYVt2XV19aWYoazxiJiYoRSZmKSE9PWwpe2ZvcigwPT09UyYmKFM9ayksZCs9eSx6PTE8PCh4PWItUyk7eCtTPHcmJiEoKHotPU9beCtTXSk8PTApOyl4Kyssejw8PTE7aWYoQys9MTw8eCwxPT09dCYmODUyPEN8fDI9PT10JiY1OTI8QylyZXR1cm4gMTtuW2w9RSZmXT1rPDwyNHx4PDwxNnxkLXN8MH19cmV0dXJuIDAhPT1FJiYobltkK0VdPWItUzw8MjR8NjQ8PDE2fDApLG8uYml0cz1rLDB9fSx7XCIuLi91dGlscy9jb21tb25cIjo0MX1dLDUxOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPXsyOlwibmVlZCBkaWN0aW9uYXJ5XCIsMTpcInN0cmVhbSBlbmRcIiwwOlwiXCIsXCItMVwiOlwiZmlsZSBlcnJvclwiLFwiLTJcIjpcInN0cmVhbSBlcnJvclwiLFwiLTNcIjpcImRhdGEgZXJyb3JcIixcIi00XCI6XCJpbnN1ZmZpY2llbnQgbWVtb3J5XCIsXCItNVwiOlwiYnVmZmVyIGVycm9yXCIsXCItNlwiOlwiaW5jb21wYXRpYmxlIHZlcnNpb25cIn19LHt9XSw1MjpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXQoXCIuLi91dGlscy9jb21tb25cIiksbz0wLGg9MTtmdW5jdGlvbiBpKHQpe2Zvcih2YXIgZT10Lmxlbmd0aDswPD0tLWU7KXRbZV09MH12YXIgcz0wLGE9MjksdT0yNTYsbD11KzErYSxmPTMwLGQ9MTksXz0yKmwrMSxnPTE1LGM9MTYscD03LG09MjU2LGI9MTYsdj0xNyx5PTE4LHc9WzAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDIsMiwyLDIsMywzLDMsMyw0LDQsNCw0LDUsNSw1LDUsMF0saz1bMCwwLDAsMCwxLDEsMiwyLDMsMyw0LDQsNSw1LDYsNiw3LDcsOCw4LDksOSwxMCwxMCwxMSwxMSwxMiwxMiwxMywxM10seD1bMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwyLDMsN10sUz1bMTYsMTcsMTgsMCw4LDcsOSw2LDEwLDUsMTEsNCwxMiwzLDEzLDIsMTQsMSwxNV0sej1uZXcgQXJyYXkoMioobCsyKSk7aSh6KTt2YXIgQz1uZXcgQXJyYXkoMipmKTtpKEMpO3ZhciBFPW5ldyBBcnJheSg1MTIpO2koRSk7dmFyIEE9bmV3IEFycmF5KDI1Nik7aShBKTt2YXIgST1uZXcgQXJyYXkoYSk7aShJKTt2YXIgTyxCLFIsVD1uZXcgQXJyYXkoZik7ZnVuY3Rpb24gRCh0LGUscixpLG4pe3RoaXMuc3RhdGljX3RyZWU9dCx0aGlzLmV4dHJhX2JpdHM9ZSx0aGlzLmV4dHJhX2Jhc2U9cix0aGlzLmVsZW1zPWksdGhpcy5tYXhfbGVuZ3RoPW4sdGhpcy5oYXNfc3RyZWU9dCYmdC5sZW5ndGh9ZnVuY3Rpb24gRih0LGUpe3RoaXMuZHluX3RyZWU9dCx0aGlzLm1heF9jb2RlPTAsdGhpcy5zdGF0X2Rlc2M9ZX1mdW5jdGlvbiBOKHQpe3JldHVybiB0PDI1Nj9FW3RdOkVbMjU2Kyh0Pj4+NyldfWZ1bmN0aW9uIFUodCxlKXt0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT0yNTUmZSx0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT1lPj4+OCYyNTV9ZnVuY3Rpb24gUCh0LGUscil7dC5iaV92YWxpZD5jLXI/KHQuYmlfYnVmfD1lPDx0LmJpX3ZhbGlkJjY1NTM1LFUodCx0LmJpX2J1ZiksdC5iaV9idWY9ZT4+Yy10LmJpX3ZhbGlkLHQuYmlfdmFsaWQrPXItYyk6KHQuYmlfYnVmfD1lPDx0LmJpX3ZhbGlkJjY1NTM1LHQuYmlfdmFsaWQrPXIpfWZ1bmN0aW9uIEwodCxlLHIpe1AodCxyWzIqZV0sclsyKmUrMV0pfWZ1bmN0aW9uIGoodCxlKXtmb3IodmFyIHI9MDtyfD0xJnQsdD4+Pj0xLHI8PD0xLDA8LS1lOyk7cmV0dXJuIHI+Pj4xfWZ1bmN0aW9uIFoodCxlLHIpe3ZhciBpLG4scz1uZXcgQXJyYXkoZysxKSxhPTA7Zm9yKGk9MTtpPD1nO2krKylzW2ldPWE9YStyW2ktMV08PDE7Zm9yKG49MDtuPD1lO24rKyl7dmFyIG89dFsyKm4rMV07MCE9PW8mJih0WzIqbl09aihzW29dKyssbykpfX1mdW5jdGlvbiBXKHQpe3ZhciBlO2ZvcihlPTA7ZTxsO2UrKyl0LmR5bl9sdHJlZVsyKmVdPTA7Zm9yKGU9MDtlPGY7ZSsrKXQuZHluX2R0cmVlWzIqZV09MDtmb3IoZT0wO2U8ZDtlKyspdC5ibF90cmVlWzIqZV09MDt0LmR5bl9sdHJlZVsyKm1dPTEsdC5vcHRfbGVuPXQuc3RhdGljX2xlbj0wLHQubGFzdF9saXQ9dC5tYXRjaGVzPTB9ZnVuY3Rpb24gTSh0KXs4PHQuYmlfdmFsaWQ/VSh0LHQuYmlfYnVmKTowPHQuYmlfdmFsaWQmJih0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT10LmJpX2J1ZiksdC5iaV9idWY9MCx0LmJpX3ZhbGlkPTB9ZnVuY3Rpb24gSCh0LGUscixpKXt2YXIgbj0yKmUscz0yKnI7cmV0dXJuIHRbbl08dFtzXXx8dFtuXT09PXRbc10mJmlbZV08PWlbcl19ZnVuY3Rpb24gRyh0LGUscil7Zm9yKHZhciBpPXQuaGVhcFtyXSxuPXI8PDE7bjw9dC5oZWFwX2xlbiYmKG48dC5oZWFwX2xlbiYmSChlLHQuaGVhcFtuKzFdLHQuaGVhcFtuXSx0LmRlcHRoKSYmbisrLCFIKGUsaSx0LmhlYXBbbl0sdC5kZXB0aCkpOyl0LmhlYXBbcl09dC5oZWFwW25dLHI9bixuPDw9MTt0LmhlYXBbcl09aX1mdW5jdGlvbiBLKHQsZSxyKXt2YXIgaSxuLHMsYSxvPTA7aWYoMCE9PXQubGFzdF9saXQpZm9yKDtpPXQucGVuZGluZ19idWZbdC5kX2J1ZisyKm9dPDw4fHQucGVuZGluZ19idWZbdC5kX2J1ZisyKm8rMV0sbj10LnBlbmRpbmdfYnVmW3QubF9idWYrb10sbysrLDA9PT1pP0wodCxuLGUpOihMKHQsKHM9QVtuXSkrdSsxLGUpLDAhPT0oYT13W3NdKSYmUCh0LG4tPUlbc10sYSksTCh0LHM9TigtLWkpLHIpLDAhPT0oYT1rW3NdKSYmUCh0LGktPVRbc10sYSkpLG88dC5sYXN0X2xpdDspO0wodCxtLGUpfWZ1bmN0aW9uIFkodCxlKXt2YXIgcixpLG4scz1lLmR5bl90cmVlLGE9ZS5zdGF0X2Rlc2Muc3RhdGljX3RyZWUsbz1lLnN0YXRfZGVzYy5oYXNfc3RyZWUsaD1lLnN0YXRfZGVzYy5lbGVtcyx1PS0xO2Zvcih0LmhlYXBfbGVuPTAsdC5oZWFwX21heD1fLHI9MDtyPGg7cisrKTAhPT1zWzIqcl0/KHQuaGVhcFsrK3QuaGVhcF9sZW5dPXU9cix0LmRlcHRoW3JdPTApOnNbMipyKzFdPTA7Zm9yKDt0LmhlYXBfbGVuPDI7KXNbMioobj10LmhlYXBbKyt0LmhlYXBfbGVuXT11PDI/Kyt1OjApXT0xLHQuZGVwdGhbbl09MCx0Lm9wdF9sZW4tLSxvJiYodC5zdGF0aWNfbGVuLT1hWzIqbisxXSk7Zm9yKGUubWF4X2NvZGU9dSxyPXQuaGVhcF9sZW4+PjE7MTw9cjtyLS0pRyh0LHMscik7Zm9yKG49aDtyPXQuaGVhcFsxXSx0LmhlYXBbMV09dC5oZWFwW3QuaGVhcF9sZW4tLV0sRyh0LHMsMSksaT10LmhlYXBbMV0sdC5oZWFwWy0tdC5oZWFwX21heF09cix0LmhlYXBbLS10LmhlYXBfbWF4XT1pLHNbMipuXT1zWzIqcl0rc1syKmldLHQuZGVwdGhbbl09KHQuZGVwdGhbcl0+PXQuZGVwdGhbaV0/dC5kZXB0aFtyXTp0LmRlcHRoW2ldKSsxLHNbMipyKzFdPXNbMippKzFdPW4sdC5oZWFwWzFdPW4rKyxHKHQscywxKSwyPD10LmhlYXBfbGVuOyk7dC5oZWFwWy0tdC5oZWFwX21heF09dC5oZWFwWzFdLGZ1bmN0aW9uKHQsZSl7dmFyIHIsaSxuLHMsYSxvLGg9ZS5keW5fdHJlZSx1PWUubWF4X2NvZGUsbD1lLnN0YXRfZGVzYy5zdGF0aWNfdHJlZSxmPWUuc3RhdF9kZXNjLmhhc19zdHJlZSxkPWUuc3RhdF9kZXNjLmV4dHJhX2JpdHMsYz1lLnN0YXRfZGVzYy5leHRyYV9iYXNlLHA9ZS5zdGF0X2Rlc2MubWF4X2xlbmd0aCxtPTA7Zm9yKHM9MDtzPD1nO3MrKyl0LmJsX2NvdW50W3NdPTA7Zm9yKGhbMip0LmhlYXBbdC5oZWFwX21heF0rMV09MCxyPXQuaGVhcF9tYXgrMTtyPF87cisrKXA8KHM9aFsyKmhbMiooaT10LmhlYXBbcl0pKzFdKzFdKzEpJiYocz1wLG0rKyksaFsyKmkrMV09cyx1PGl8fCh0LmJsX2NvdW50W3NdKyssYT0wLGM8PWkmJihhPWRbaS1jXSksbz1oWzIqaV0sdC5vcHRfbGVuKz1vKihzK2EpLGYmJih0LnN0YXRpY19sZW4rPW8qKGxbMippKzFdK2EpKSk7aWYoMCE9PW0pe2Rve2ZvcihzPXAtMTswPT09dC5ibF9jb3VudFtzXTspcy0tO3QuYmxfY291bnRbc10tLSx0LmJsX2NvdW50W3MrMV0rPTIsdC5ibF9jb3VudFtwXS0tLG0tPTJ9d2hpbGUoMDxtKTtmb3Iocz1wOzAhPT1zO3MtLSlmb3IoaT10LmJsX2NvdW50W3NdOzAhPT1pOyl1PChuPXQuaGVhcFstLXJdKXx8KGhbMipuKzFdIT09cyYmKHQub3B0X2xlbis9KHMtaFsyKm4rMV0pKmhbMipuXSxoWzIqbisxXT1zKSxpLS0pfX0odCxlKSxaKHMsdSx0LmJsX2NvdW50KX1mdW5jdGlvbiBYKHQsZSxyKXt2YXIgaSxuLHM9LTEsYT1lWzFdLG89MCxoPTcsdT00O2ZvcigwPT09YSYmKGg9MTM4LHU9MyksZVsyKihyKzEpKzFdPTY1NTM1LGk9MDtpPD1yO2krKyluPWEsYT1lWzIqKGkrMSkrMV0sKytvPGgmJm49PT1hfHwobzx1P3QuYmxfdHJlZVsyKm5dKz1vOjAhPT1uPyhuIT09cyYmdC5ibF90cmVlWzIqbl0rKyx0LmJsX3RyZWVbMipiXSsrKTpvPD0xMD90LmJsX3RyZWVbMip2XSsrOnQuYmxfdHJlZVsyKnldKysscz1uLHU9KG89MCk9PT1hPyhoPTEzOCwzKTpuPT09YT8oaD02LDMpOihoPTcsNCkpfWZ1bmN0aW9uIFYodCxlLHIpe3ZhciBpLG4scz0tMSxhPWVbMV0sbz0wLGg9Nyx1PTQ7Zm9yKDA9PT1hJiYoaD0xMzgsdT0zKSxpPTA7aTw9cjtpKyspaWYobj1hLGE9ZVsyKihpKzEpKzFdLCEoKytvPGgmJm49PT1hKSl7aWYobzx1KWZvcig7TCh0LG4sdC5ibF90cmVlKSwwIT0tLW87KTtlbHNlIDAhPT1uPyhuIT09cyYmKEwodCxuLHQuYmxfdHJlZSksby0tKSxMKHQsYix0LmJsX3RyZWUpLFAodCxvLTMsMikpOm88PTEwPyhMKHQsdix0LmJsX3RyZWUpLFAodCxvLTMsMykpOihMKHQseSx0LmJsX3RyZWUpLFAodCxvLTExLDcpKTtzPW4sdT0obz0wKT09PWE/KGg9MTM4LDMpOm49PT1hPyhoPTYsMyk6KGg9Nyw0KX19aShUKTt2YXIgcT0hMTtmdW5jdGlvbiBKKHQsZSxyLGkpe1AodCwoczw8MSkrKGk/MTowKSwzKSxmdW5jdGlvbih0LGUscixpKXtNKHQpLGkmJihVKHQsciksVSh0LH5yKSksbi5hcnJheVNldCh0LnBlbmRpbmdfYnVmLHQud2luZG93LGUscix0LnBlbmRpbmcpLHQucGVuZGluZys9cn0odCxlLHIsITApfXIuX3RyX2luaXQ9ZnVuY3Rpb24odCl7cXx8KGZ1bmN0aW9uKCl7dmFyIHQsZSxyLGksbixzPW5ldyBBcnJheShnKzEpO2ZvcihpPXI9MDtpPGEtMTtpKyspZm9yKElbaV09cix0PTA7dDwxPDx3W2ldO3QrKylBW3IrK109aTtmb3IoQVtyLTFdPWksaT1uPTA7aTwxNjtpKyspZm9yKFRbaV09bix0PTA7dDwxPDxrW2ldO3QrKylFW24rK109aTtmb3Iobj4+PTc7aTxmO2krKylmb3IoVFtpXT1uPDw3LHQ9MDt0PDE8PGtbaV0tNzt0KyspRVsyNTYrbisrXT1pO2ZvcihlPTA7ZTw9ZztlKyspc1tlXT0wO2Zvcih0PTA7dDw9MTQzOyl6WzIqdCsxXT04LHQrKyxzWzhdKys7Zm9yKDt0PD0yNTU7KXpbMip0KzFdPTksdCsrLHNbOV0rKztmb3IoO3Q8PTI3OTspelsyKnQrMV09Nyx0Kyssc1s3XSsrO2Zvcig7dDw9Mjg3Oyl6WzIqdCsxXT04LHQrKyxzWzhdKys7Zm9yKFooeixsKzEscyksdD0wO3Q8Zjt0KyspQ1syKnQrMV09NSxDWzIqdF09aih0LDUpO089bmV3IEQoeix3LHUrMSxsLGcpLEI9bmV3IEQoQyxrLDAsZixnKSxSPW5ldyBEKG5ldyBBcnJheSgwKSx4LDAsZCxwKX0oKSxxPSEwKSx0LmxfZGVzYz1uZXcgRih0LmR5bl9sdHJlZSxPKSx0LmRfZGVzYz1uZXcgRih0LmR5bl9kdHJlZSxCKSx0LmJsX2Rlc2M9bmV3IEYodC5ibF90cmVlLFIpLHQuYmlfYnVmPTAsdC5iaV92YWxpZD0wLFcodCl9LHIuX3RyX3N0b3JlZF9ibG9jaz1KLHIuX3RyX2ZsdXNoX2Jsb2NrPWZ1bmN0aW9uKHQsZSxyLGkpe3ZhciBuLHMsYT0wOzA8dC5sZXZlbD8oMj09PXQuc3RybS5kYXRhX3R5cGUmJih0LnN0cm0uZGF0YV90eXBlPWZ1bmN0aW9uKHQpe3ZhciBlLHI9NDA5MzYyNDQ0Nztmb3IoZT0wO2U8PTMxO2UrKyxyPj4+PTEpaWYoMSZyJiYwIT09dC5keW5fbHRyZWVbMiplXSlyZXR1cm4gbztpZigwIT09dC5keW5fbHRyZWVbMThdfHwwIT09dC5keW5fbHRyZWVbMjBdfHwwIT09dC5keW5fbHRyZWVbMjZdKXJldHVybiBoO2ZvcihlPTMyO2U8dTtlKyspaWYoMCE9PXQuZHluX2x0cmVlWzIqZV0pcmV0dXJuIGg7cmV0dXJuIG99KHQpKSxZKHQsdC5sX2Rlc2MpLFkodCx0LmRfZGVzYyksYT1mdW5jdGlvbih0KXt2YXIgZTtmb3IoWCh0LHQuZHluX2x0cmVlLHQubF9kZXNjLm1heF9jb2RlKSxYKHQsdC5keW5fZHRyZWUsdC5kX2Rlc2MubWF4X2NvZGUpLFkodCx0LmJsX2Rlc2MpLGU9ZC0xOzM8PWUmJjA9PT10LmJsX3RyZWVbMipTW2VdKzFdO2UtLSk7cmV0dXJuIHQub3B0X2xlbis9MyooZSsxKSs1KzUrNCxlfSh0KSxuPXQub3B0X2xlbiszKzc+Pj4zLChzPXQuc3RhdGljX2xlbiszKzc+Pj4zKTw9biYmKG49cykpOm49cz1yKzUscis0PD1uJiYtMSE9PWU/Sih0LGUscixpKTo0PT09dC5zdHJhdGVneXx8cz09PW4/KFAodCwyKyhpPzE6MCksMyksSyh0LHosQykpOihQKHQsNCsoaT8xOjApLDMpLGZ1bmN0aW9uKHQsZSxyLGkpe3ZhciBuO2ZvcihQKHQsZS0yNTcsNSksUCh0LHItMSw1KSxQKHQsaS00LDQpLG49MDtuPGk7bisrKVAodCx0LmJsX3RyZWVbMipTW25dKzFdLDMpO1YodCx0LmR5bl9sdHJlZSxlLTEpLFYodCx0LmR5bl9kdHJlZSxyLTEpfSh0LHQubF9kZXNjLm1heF9jb2RlKzEsdC5kX2Rlc2MubWF4X2NvZGUrMSxhKzEpLEsodCx0LmR5bl9sdHJlZSx0LmR5bl9kdHJlZSkpLFcodCksaSYmTSh0KX0sci5fdHJfdGFsbHk9ZnVuY3Rpb24odCxlLHIpe3JldHVybiB0LnBlbmRpbmdfYnVmW3QuZF9idWYrMip0Lmxhc3RfbGl0XT1lPj4+OCYyNTUsdC5wZW5kaW5nX2J1Zlt0LmRfYnVmKzIqdC5sYXN0X2xpdCsxXT0yNTUmZSx0LnBlbmRpbmdfYnVmW3QubF9idWYrdC5sYXN0X2xpdF09MjU1JnIsdC5sYXN0X2xpdCsrLDA9PT1lP3QuZHluX2x0cmVlWzIqcl0rKzoodC5tYXRjaGVzKyssZS0tLHQuZHluX2x0cmVlWzIqKEFbcl0rdSsxKV0rKyx0LmR5bl9kdHJlZVsyKk4oZSldKyspLHQubGFzdF9saXQ9PT10LmxpdF9idWZzaXplLTF9LHIuX3RyX2FsaWduPWZ1bmN0aW9uKHQpe1AodCwyLDMpLEwodCxtLHopLGZ1bmN0aW9uKHQpezE2PT09dC5iaV92YWxpZD8oVSh0LHQuYmlfYnVmKSx0LmJpX2J1Zj0wLHQuYmlfdmFsaWQ9MCk6ODw9dC5iaV92YWxpZCYmKHQucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPTI1NSZ0LmJpX2J1Zix0LmJpX2J1Zj4+PTgsdC5iaV92YWxpZC09OCl9KHQpfX0se1wiLi4vdXRpbHMvY29tbW9uXCI6NDF9XSw1MzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe3RoaXMuaW5wdXQ9bnVsbCx0aGlzLm5leHRfaW49MCx0aGlzLmF2YWlsX2luPTAsdGhpcy50b3RhbF9pbj0wLHRoaXMub3V0cHV0PW51bGwsdGhpcy5uZXh0X291dD0wLHRoaXMuYXZhaWxfb3V0PTAsdGhpcy50b3RhbF9vdXQ9MCx0aGlzLm1zZz1cIlwiLHRoaXMuc3RhdGU9bnVsbCx0aGlzLmRhdGFfdHlwZT0yLHRoaXMuYWRsZXI9MH19LHt9XSw1NDpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRJbW1lZGlhdGU/c2V0SW1tZWRpYXRlOmZ1bmN0aW9uKCl7dmFyIHQ9W10uc2xpY2UuYXBwbHkoYXJndW1lbnRzKTt0LnNwbGljZSgxLDAsMCksc2V0VGltZW91dC5hcHBseShudWxsLHQpfX0se31dfSx7fSxbMTBdKSgxMCl9KTsiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvdHBhY2soYm94ZXMpIHtcblxuICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBib3ggYXJlYSBhbmQgbWF4aW11bSBib3ggd2lkdGhcbiAgICBsZXQgYXJlYSA9IDA7XG4gICAgbGV0IG1heFdpZHRoID0gMDtcblxuICAgIGZvciAoY29uc3QgYm94IG9mIGJveGVzKSB7XG4gICAgICAgIGFyZWEgKz0gYm94LncgKiBib3guaDtcbiAgICAgICAgbWF4V2lkdGggPSBNYXRoLm1heChtYXhXaWR0aCwgYm94LncpO1xuICAgIH1cblxuICAgIC8vIHNvcnQgdGhlIGJveGVzIGZvciBpbnNlcnRpb24gYnkgaGVpZ2h0LCBkZXNjZW5kaW5nXG4gICAgYm94ZXMuc29ydCgoYSwgYikgPT4gYi5oIC0gYS5oKTtcblxuICAgIC8vIGFpbSBmb3IgYSBzcXVhcmlzaCByZXN1bHRpbmcgY29udGFpbmVyLFxuICAgIC8vIHNsaWdodGx5IGFkanVzdGVkIGZvciBzdWItMTAwJSBzcGFjZSB1dGlsaXphdGlvblxuICAgIGNvbnN0IHN0YXJ0V2lkdGggPSBNYXRoLm1heChNYXRoLmNlaWwoTWF0aC5zcXJ0KGFyZWEgLyAwLjk1KSksIG1heFdpZHRoKTtcblxuICAgIC8vIHN0YXJ0IHdpdGggYSBzaW5nbGUgZW1wdHkgc3BhY2UsIHVuYm91bmRlZCBhdCB0aGUgYm90dG9tXG4gICAgY29uc3Qgc3BhY2VzID0gW3t4OiAwLCB5OiAwLCB3OiBzdGFydFdpZHRoLCBoOiBJbmZpbml0eX1dO1xuXG4gICAgbGV0IHdpZHRoID0gMDtcbiAgICBsZXQgaGVpZ2h0ID0gMDtcblxuICAgIGZvciAoY29uc3QgYm94IG9mIGJveGVzKSB7XG4gICAgICAgIC8vIGxvb2sgdGhyb3VnaCBzcGFjZXMgYmFja3dhcmRzIHNvIHRoYXQgd2UgY2hlY2sgc21hbGxlciBzcGFjZXMgZmlyc3RcbiAgICAgICAgZm9yIChsZXQgaSA9IHNwYWNlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3Qgc3BhY2UgPSBzcGFjZXNbaV07XG5cbiAgICAgICAgICAgIC8vIGxvb2sgZm9yIGVtcHR5IHNwYWNlcyB0aGF0IGNhbiBhY2NvbW1vZGF0ZSB0aGUgY3VycmVudCBib3hcbiAgICAgICAgICAgIGlmIChib3gudyA+IHNwYWNlLncgfHwgYm94LmggPiBzcGFjZS5oKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gZm91bmQgdGhlIHNwYWNlOyBhZGQgdGhlIGJveCB0byBpdHMgdG9wLWxlZnQgY29ybmVyXG4gICAgICAgICAgICAvLyB8LS0tLS0tLXwtLS0tLS0tfFxuICAgICAgICAgICAgLy8gfCAgYm94ICB8ICAgICAgIHxcbiAgICAgICAgICAgIC8vIHxfX19fX19ffCAgICAgICB8XG4gICAgICAgICAgICAvLyB8ICAgICAgICAgc3BhY2UgfFxuICAgICAgICAgICAgLy8gfF9fX19fX19fX19fX19fX3xcbiAgICAgICAgICAgIGJveC54ID0gc3BhY2UueDtcbiAgICAgICAgICAgIGJveC55ID0gc3BhY2UueTtcblxuICAgICAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCBib3gueSArIGJveC5oKTtcbiAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGJveC54ICsgYm94LncpO1xuXG4gICAgICAgICAgICBpZiAoYm94LncgPT09IHNwYWNlLncgJiYgYm94LmggPT09IHNwYWNlLmgpIHtcbiAgICAgICAgICAgICAgICAvLyBzcGFjZSBtYXRjaGVzIHRoZSBib3ggZXhhY3RseTsgcmVtb3ZlIGl0XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IHNwYWNlcy5wb3AoKTtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHNwYWNlcy5sZW5ndGgpIHNwYWNlc1tpXSA9IGxhc3Q7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm94LmggPT09IHNwYWNlLmgpIHtcbiAgICAgICAgICAgICAgICAvLyBzcGFjZSBtYXRjaGVzIHRoZSBib3ggaGVpZ2h0OyB1cGRhdGUgaXQgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgICAgICAvLyB8LS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gICAgICAgICAgICAgICAgLy8gfCAgYm94ICB8IHVwZGF0ZWQgc3BhY2UgfFxuICAgICAgICAgICAgICAgIC8vIHxfX19fX19ffF9fX19fX19fX19fX19fX3xcbiAgICAgICAgICAgICAgICBzcGFjZS54ICs9IGJveC53O1xuICAgICAgICAgICAgICAgIHNwYWNlLncgLT0gYm94Lnc7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm94LncgPT09IHNwYWNlLncpIHtcbiAgICAgICAgICAgICAgICAvLyBzcGFjZSBtYXRjaGVzIHRoZSBib3ggd2lkdGg7IHVwZGF0ZSBpdCBhY2NvcmRpbmdseVxuICAgICAgICAgICAgICAgIC8vIHwtLS0tLS0tLS0tLS0tLS18XG4gICAgICAgICAgICAgICAgLy8gfCAgICAgIGJveCAgICAgIHxcbiAgICAgICAgICAgICAgICAvLyB8X19fX19fX19fX19fX19ffFxuICAgICAgICAgICAgICAgIC8vIHwgdXBkYXRlZCBzcGFjZSB8XG4gICAgICAgICAgICAgICAgLy8gfF9fX19fX19fX19fX19fX3xcbiAgICAgICAgICAgICAgICBzcGFjZS55ICs9IGJveC5oO1xuICAgICAgICAgICAgICAgIHNwYWNlLmggLT0gYm94Lmg7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZSBib3ggc3BsaXRzIHRoZSBzcGFjZSBpbnRvIHR3byBzcGFjZXNcbiAgICAgICAgICAgICAgICAvLyB8LS0tLS0tLXwtLS0tLS0tLS0tLXxcbiAgICAgICAgICAgICAgICAvLyB8ICBib3ggIHwgbmV3IHNwYWNlIHxcbiAgICAgICAgICAgICAgICAvLyB8X19fX19fX3xfX19fX19fX19fX3xcbiAgICAgICAgICAgICAgICAvLyB8IHVwZGF0ZWQgc3BhY2UgICAgIHxcbiAgICAgICAgICAgICAgICAvLyB8X19fX19fX19fX19fX19fX19fX3xcbiAgICAgICAgICAgICAgICBzcGFjZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IHNwYWNlLnggKyBib3gudyxcbiAgICAgICAgICAgICAgICAgICAgeTogc3BhY2UueSxcbiAgICAgICAgICAgICAgICAgICAgdzogc3BhY2UudyAtIGJveC53LFxuICAgICAgICAgICAgICAgICAgICBoOiBib3guaFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNwYWNlLnkgKz0gYm94Lmg7XG4gICAgICAgICAgICAgICAgc3BhY2UuaCAtPSBib3guaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdzogd2lkdGgsIC8vIGNvbnRhaW5lciB3aWR0aFxuICAgICAgICBoOiBoZWlnaHQsIC8vIGNvbnRhaW5lciBoZWlnaHRcbiAgICAgICAgZmlsbDogKGFyZWEgLyAod2lkdGggKiBoZWlnaHQpKSB8fCAwIC8vIHNwYWNlIHV0aWxpemF0aW9uXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IEJpdG1hcCB9IGZyb20gXCIuL0JpdG1hcFwiO1xuaW1wb3J0IHsgRm9udCB9IGZyb20gXCIuL0ZvbnRcIjtcblxuZXhwb3J0IGNvbnN0IFdISVRFOiBzdHJpbmcgPSBcIndoaXRlXCI7XG5leHBvcnQgY29uc3QgQkxBQ0s6IHN0cmluZyA9IFwiYmxhY2tcIjtcbmV4cG9ydCBjb25zdCBSRUQ6IHN0cmluZyA9IFwicmVkXCI7XG5leHBvcnQgY29uc3QgR1JFRU46IHN0cmluZyA9IFwiZ3JlZW5cIjtcbmV4cG9ydCBjb25zdCBCTFVFOiBzdHJpbmcgPSBcImJsdWVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBPZmZzY3JlZW4ge1xuICBnZXRXaWR0aCgpOiBudW1iZXI7XG5cbiAgZ2V0SGVpZ2h0KCk6IG51bWJlcjtcblxuICBzZXREaW1lbnNpb24od2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkO1xuXG4gIG5lZWRzUmVmcmVzaCgpOiBib29sZWFuO1xuXG4gIHJlbGVhc2UoKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcmFwaGljcyB7XG4gIGluaXRSZXNvdXJjZU9uTG9hZGVkKCk6IHZvaWQ7XG5cbiAgbmV3UmVzb3VyY2VMb2FkZWQoKTogdm9pZDtcblxuICBnZXQgY2FudmFzKCk6IEhUTUxDYW52YXNFbGVtZW50O1xuXG4gIGdldEVycm9yKCk6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICBhcHBseUZvbnQoKTogdm9pZDtcblxuICBzbW9vdGgoKTogdm9pZDtcbiAgXG4gIGNvcHkoKTogQml0bWFwO1xuXG4gIGdldE9mZnNjcmVlbigpOiBPZmZzY3JlZW4gfCBudWxsO1xuICBcbiAgY2xpcCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkO1xuXG4gIGNyZWF0ZU9mZnNjcmVlbigpOiBPZmZzY3JlZW47XG5cbiAgZHJhd1RvT2Zmc2NyZWVuKHNjcmVlbjogT2Zmc2NyZWVuIHwgbnVsbCk6IHZvaWQ7XG5cbiAgZHJhd09mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbik6IHZvaWQ7XG5cbiAgZHJhd1NjYWxlZE9mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbiwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZDtcbiAgXG4gIGRyYXdTY2FsZWRPZmZzY3JlZW5TZWdtZW50KHNjcmVlbjogT2Zmc2NyZWVuLCBzeDogbnVtYmVyLCBzeTogbnVtYmVyLCBzd2lkdGg6IG51bWJlciwgc2hlaWdodDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkO1xuICAgXG4gIGZpbGxSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29sOiBzdHJpbmcpOiB2b2lkO1xuXG4gIGZpbGxDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZyk6IHZvaWQ7XG5cbiAgZHJhd0NpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNvbDogc3RyaW5nLCB3aWR0aDogbnVtYmVyKTogdm9pZDtcblxuICBzZXRMaW5lRGFzaChzZWdtZW50czogbnVtYmVyW10pOiB2b2lkO1xuICBcbiAgZHJhd0xpbmUoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgY29sOiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyKTogdm9pZDtcblxuICBkcmF3Qml0bWFwKHg6IG51bWJlciwgeTogbnVtYmVyLCBiaXRtYXA6IEJpdG1hcCk6IHZvaWQ7XG5cbiAgZHJhd1NjYWxlZEJpdG1hcCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGJpdG1hcDogQml0bWFwKTogdm9pZDtcbiAgXG4gIGNsZWFyUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkO1xuICAgXG4gIGNsZWFyKCk6IHZvaWQ7XG5cbiAgc2V0Rm9udChmb250OiBGb250KTogdm9pZDtcbiAgXG4gIHNldENvbXBvc2l0ZShuYW1lOiBzdHJpbmcpOiB2b2lkO1xuXG4gIHNldEZvbnRTaXplKHNpemU6IG51bWJlcik6IHZvaWQ7XG5cbiAgZHJhd1N0cmluZyh4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBjb2w6IHN0cmluZyk6IHZvaWQ7XG5cbiAgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcblxuICBzY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XG5cbiAgcHVzaCgpOiB2b2lkO1xuXG4gIHBvcCgpOiB2b2lkO1xuXG4gIGdldFdpZHRoKCk6IG51bWJlcjtcblxuICBnZXRIZWlnaHQoKTogbnVtYmVyO1xuXG4gIGZpdFNjcmVlbih3aWR0aEluVmlydHVhbFBpeGVsczogbnVtYmVyKTogdm9pZDtcblxuICBnZXRTdHJpbmdXaWR0aCh0ZXh0OiBzdHJpbmcpOiBudW1iZXI7XG5cbiAgc2V0QWxwaGEoYWxwaGE6IG51bWJlcik6IHZvaWQ7XG5cbiAgZ2V0VHJhbnNmb3JtKCk6IERPTU1hdHJpeDtcblxuICByZW5kZXJTdGFydCgpOiB2b2lkO1xuXG4gIHJlbmRlckVuZCgpOiB2b2lkO1xufSIsImltcG9ydCB7IEJpdG1hcCB9IGZyb20gXCIuL0JpdG1hcFwiO1xuaW1wb3J0IHsgRm9udCB9IGZyb20gXCIuL0ZvbnRcIjtcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9HYW1lXCI7XG5pbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuL0dhbWVDb250ZXh0XCI7XG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCIuL0dyYXBoaWNzXCI7XG5pbXBvcnQgeyBCaXRtYXBJbXBsIH0gZnJvbSBcIi4vaW1wbC9CaXRtYXBJbXBsXCI7XG5pbXBvcnQgeyBGb250SW1wbCB9IGZyb20gXCIuL2ltcGwvRm9udEltcGxcIjtcbmltcG9ydCB7IEdyYXBoaWNzSW1wbCBhcyBDYW52YXNHcmFwaGljc0ltcGwgfSBmcm9tIFwiLi9pbXBsL0dyYXBoaWNzSW1wbFwiO1xuaW1wb3J0IHsgU291bmRJbXBsIH0gZnJvbSBcIi4vaW1wbC9Tb3VuZEltcGxcIjtcbmltcG9ydCB7IFRpbGVzZXRJbXBsIH0gZnJvbSBcIi4vaW1wbC9UaWxlc2V0SW1wbFwiO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tIFwiLi9SZXNvdXJjZVwiO1xuaW1wb3J0IHsgU291bmQgfSBmcm9tIFwiLi9Tb3VuZFwiO1xuaW1wb3J0IHsgTERUS1dvcmxkIH0gZnJvbSBcIi4vdGlsZW1hcHMvTERUS1dvcmxkXCI7XG5pbXBvcnQgeyBNYXBXb3JsZCB9IGZyb20gXCIuL3RpbGVtYXBzL01hcFdvcmxkXCI7XG5pbXBvcnQgeyBUaWxlc2V0IH0gZnJvbSBcIi4vVGlsZXNldFwiO1xuaW1wb3J0ICogYXMgSlNaaXAgZnJvbSBcImpzemlwXCI7XG5pbXBvcnQgeyBQYWxldHRlIH0gZnJvbSBcIi4vaW1wbC9QYWxldHRlXCI7XG5pbXBvcnQgeyBPcGVuR0xHcmFwaGljc0ltcGwgfSBmcm9tIFwiLi9vcGVuZ2wvT3BlbkdMR3JhcGhpY3NJbXBsXCI7XG5pbXBvcnQgeyBPcGVuR0xCaXRtYXAgfSBmcm9tIFwiLi9vcGVuZ2wvT3BlbkdMQml0bWFwLjFcIjtcbmltcG9ydCB7IE9wZW5HTFRpbGVzZXRJbXBsIH0gZnJvbSBcIi4vb3BlbmdsL09wZW5HTFRpbGVzZXRJbXBsXCI7XG5pbXBvcnQgeyBHdXRlTG9nIH0gZnJvbSBcIi4vTG9nXCI7XG5cbmxldCBHQU1FX0xPT1A6IEdhbWVMb29wO1xubGV0IFNPVU5EX09OOiBib29sZWFuID0gdHJ1ZTtcbmxldCBNVVNJQ19PTjogYm9vbGVhbiA9IHRydWU7XG5sZXQgUFJFU0NBTEVfVElMRVNFVFM6IGJvb2xlYW4gPSBmYWxzZTtcbmxldCBVU0VfWEJSOiBib29sZWFuID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NvdW5kT24oKTogYm9vbGVhbiB7XG4gIHJldHVybiBTT1VORF9PTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTXVzaWNPbigpOiBib29sZWFuIHtcbiAgcmV0dXJuIE1VU0lDX09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkVXNlWGJyKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gVVNFX1hCUjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZVhicihvbjogYm9vbGVhbik6IHZvaWQge1xuICBVU0VfWEJSID0gb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRQcmVzY2FsZVRpbGVzZXRzKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gUFJFU0NBTEVfVElMRVNFVFM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcmVzY2FsZVRpbGVzZXRzKG9uOiBib29sZWFuKTogdm9pZCB7XG4gIFBSRVNDQUxFX1RJTEVTRVRTID0gb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTb3VuZE9uKG9uOiBib29sZWFuKTogdm9pZCB7XG4gIFNPVU5EX09OID0gb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNdXNpY09uKG9uOiBib29sZWFuKTogdm9pZCB7XG4gIGlmICghb24gJiYgTVVTSUNfT04pIHtcbiAgICBNVVNJQ19PTiA9IGZhbHNlO1xuICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChvbiAmJiAhTVVTSUNfT04pIHtcbiAgICBNVVNJQ19PTiA9IHRydWU7XG4gICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDKSB7XG4gICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5wbGF5KFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnZvbHVtZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUoZ2FtZTogR2FtZSwgcmVuZGVyZXI6IFJlbmRlcmVyID0gUmVuZGVyZXIuQ0FOVkFTKSB7XG4gIGNvbnN0IGxvb3AgPSBuZXcgR2FtZUxvb3AoKTtcbiAgbG9vcC5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXG4gIEdBTUVfTE9PUCA9IGxvb3Auc3RhcnQoZ2FtZSk7XG59XG5cbmV4cG9ydCBlbnVtIFJlbmRlcmVyIHtcbiAgQ0FOVkFTID0gXCJDYW52YXNcIixcbiAgT1BFTkdMID0gXCJPcGVuR0xcIixcbn07XG5cbmNsYXNzIEdhbWVMb29wIGltcGxlbWVudHMgR2FtZUNvbnRleHQge1xuICByZXNvdXJjZXM6IFJlc291cmNlW10gPSBbXTtcbiAgZ2FtZSE6IEdhbWU7XG4gIGxhc3RGcmFtZTogbnVtYmVyID0gMDtcbiAgZ3JhcGhpY3MhOiBHcmFwaGljcztcbiAgaW5pdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIG1haW5aaXBGaWxlOiBhbnkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIHppcFBlcmNlbnRMb2FkZWQ6IG51bWJlciA9IDA7XG4gIHBhbGV0dGU6IFBhbGV0dGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGxhc3RXYWl0aW5nOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBcIlwiO1xuICB3YWl0OiBudW1iZXIgPSAwO1xuICBzaGlmdFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29tbWFuZFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29udHJvbFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYWx0UHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBsYXN0VG91Y2g/OiBUb3VjaEV2ZW50O1xuICByZW5kZXJlcjogUmVuZGVyZXIgPSBSZW5kZXJlci5PUEVOR0w7XG4gIGdyYXBoaWNzSW5pdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgaXNDb21tYW5kUHJlc3NlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21tYW5kUHJlc3NlZDtcbiAgfVxuXG4gIGlzQWx0UHJlc3NlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbHRQcmVzc2VkO1xuICB9XG5cbiAgaXNDb250cm9sUHJlc3NlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sUHJlc3NlZDtcbiAgfVxuXG4gIGlzU2hpZnRQcmVzc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0UHJlc3NlZDtcbiAgfVxuXG4gIGdldEdyYXBoaWNzKCk6IEdyYXBoaWNzIHtcbiAgICByZXR1cm4gdGhpcy5ncmFwaGljcztcbiAgfVxuXG4gIHJlc291cmNlc1JlbWFpbmluZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlcy5maWx0ZXIociA9PiAhci5sb2FkZWQpLmxlbmd0aDtcbiAgfVxuXG4gIHJlc291cmNlc1RvdGFsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzLmxlbmd0aDtcbiAgfVxuXG4gIGR1bXBSZXNvdXJjZUlzc3VlcygpOiB2b2lkIHtcbiAgICBHdXRlTG9nLmxvZyhcIlRoZXJlIGFyZSBcIiArIHRoaXMucmVzb3VyY2VzLmxlbmd0aCArIFwiIHJlc291cmNlcyBwZW5kaW5nLlwiKTtcblxuICAgIC8vIEd1dGVMb2cubG9nKFwiVGhlIGZvbGxvd2luZyByZXNvdXJjZXMgYXJlIHN0aWxsIHBlbmRpbmcgY29tcGxldGlvbjpcIik7XG4gICAgLy8gR3V0ZUxvZy5sb2coXCJcIik7XG4gICAgLy8gZm9yIChjb25zdCByZXNvdXJjZSBvZiB0aGlzLnJlc291cmNlcykge1xuICAgIC8vICAgaWYgKCFyZXNvdXJjZS5sb2FkZWQpIHtcbiAgICAvLyAgICAgR3V0ZUxvZy5sb2coXCIgIFwiICtyZXNvdXJjZS5uYW1lKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBjdXJyZW50UmVzb3VyY2UoKTogc3RyaW5nIHtcbiAgICBmb3IgKGNvbnN0IHJlc291cmNlIG9mIHRoaXMucmVzb3VyY2VzKSB7XG4gICAgICBpZiAoIXJlc291cmNlLmxvYWRlZCkge1xuICAgICAgICByZXR1cm4gcmVzb3VyY2UubmFtZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGFsbFJlc291cmNlc0xvYWRlZCgpOiBib29sZWFuIHtcbiAgICBmb3IgKGNvbnN0IHJlc291cmNlIG9mIHRoaXMucmVzb3VyY2VzKSB7XG4gICAgICBpZiAoIXJlc291cmNlLmxvYWRlZCkge1xuICAgICAgICBpZiAodGhpcy5sYXN0V2FpdGluZyAhPT0gcmVzb3VyY2UubmFtZSkge1xuICAgICAgICAgIGlmICh0aGlzLmxhc3RXYWl0aW5nKSB7XG4gICAgICAgICAgICBHdXRlTG9nLmxvZyhcIltHVVRFXSBXYXMgd2FpdGluZyBvbjogXCIgKyB0aGlzLmxhc3RXYWl0aW5nICsgXCIgZm9yIFwiICsgdGhpcy53YWl0ICsgXCIgZnJhbWVzXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxhc3RXYWl0aW5nID0gcmVzb3VyY2UubmFtZTtcbiAgICAgICAgICB0aGlzLndhaXQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2FpdCsrO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmxhc3RXYWl0aW5nKSB7XG4gICAgICBHdXRlTG9nLmxvZyhcIltHVVRFXSBXYXMgd2FpdGluZyBvbiBsYXN0IG9uZTogXCIgKyB0aGlzLmxhc3RXYWl0aW5nICsgXCIgZm9yIFwiICsgdGhpcy53YWl0ICsgXCIgZnJhbWVzXCIpO1xuICAgICAgdGhpcy5sYXN0V2FpdGluZyA9IHVuZGVmaW5lZDtcbiAgICAgIGlmICghdGhpcy5ncmFwaGljc0luaXRlZCkge1xuICAgICAgICB0aGlzLmdyYXBoaWNzSW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5pbml0UmVzb3VyY2VPbkxvYWRlZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0UmVzb3VyY2VzT25GaXJzdENsaWNrKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hbGxSZXNvdXJjZXNMb2FkZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcblxuICAgICAgZm9yIChjb25zdCByZXNvdXJjZSBvZiB0aGlzLnJlc291cmNlcykge1xuICAgICAgICByZXNvdXJjZS5pbml0T25GaXJzdENsaWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFwcGx5UGFsZXR0ZShoZXhGaWxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5sb2FkVGV4dChoZXhGaWxlKS50aGVuKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5wYWxldHRlID0gbmV3IFBhbGV0dGUodGV4dCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3VzZU1vdmVIYW5kbGVyKHg6IG51bWJlciwgeTogbnVtYmVyLCBpZDogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuXG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IHRoaXMuZ3JhcGhpY3MuY2FudmFzO1xuICAgIGNhbnZhcy5mb2N1cygpO1xuXG4gICAgY29uc3Qgd2lkdGg6IG51bWJlciA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQ6IG51bWJlciA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG5cbiAgICB4ID0gTWF0aC5mbG9vcigoeCAvIHdpZHRoKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgeSA9IE1hdGguZmxvb3IoKHkgLyBoZWlnaHQpICogY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLmdhbWUub25Nb3VzZU1vdmUodGhpcywgeCwgeSk7XG4gIH1cblxuICBwcml2YXRlIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdhbWUub25Nb3VzZVdoZWVsKHRoaXMsIGRlbHRhKTtcbiAgfVxuXG4gIHByaXZhdGUgbW91c2VEb3duSGFuZGxlcih4OiBudW1iZXIsIHk6IG51bWJlciwgaWQ6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICB0aGlzLmluaXRSZXNvdXJjZXNPbkZpcnN0Q2xpY2soKTtcblxuICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSB0aGlzLmdyYXBoaWNzLmNhbnZhcztcbiAgICBjYW52YXMuZm9jdXMoKTtcblxuICAgIGNvbnN0IHdpZHRoOiBudW1iZXIgPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0OiBudW1iZXIgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuXG4gICAgeCA9IE1hdGguZmxvb3IoKHggLyB3aWR0aCkgKiBjYW52YXMud2lkdGgpO1xuICAgIHkgPSBNYXRoLmZsb29yKCh5IC8gaGVpZ2h0KSAqIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5nYW1lLm9uTW91c2VEb3duKHRoaXMsIHgsIHksIGlkKTtcbiAgfVxuXG4gIHByaXZhdGUgbW91c2VVcEhhbmRsZXIoeDogbnVtYmVyLCB5OiBudW1iZXIsIGlkOiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgdGhpcy5pbml0UmVzb3VyY2VzT25GaXJzdENsaWNrKCk7XG5cbiAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gdGhpcy5ncmFwaGljcy5jYW52YXM7XG4gICAgY29uc3Qgd2lkdGg6IG51bWJlciA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQ6IG51bWJlciA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG5cbiAgICB4ID0gTWF0aC5mbG9vcigoeCAvIHdpZHRoKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgeSA9IE1hdGguZmxvb3IoKHkgLyBoZWlnaHQpICogY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLmdhbWUub25Nb3VzZVVwKHRoaXMsIHgsIHksIGlkKTtcbiAgfVxuXG4gIHByaXZhdGUga2V5RG93bkhhbmRsZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRSZXNvdXJjZXNPbkZpcnN0Q2xpY2soKTtcblxuICAgIHRoaXMuZ2FtZS5vbktleURvd24odGhpcywga2V5KTtcbiAgfVxuXG4gIHByaXZhdGUga2V5VXBIYW5kbGVyKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5nYW1lLm9uS2V5VXAodGhpcywga2V5KTtcbiAgfVxuXG4gIHN0YXJ0KGdhbWU6IEdhbWUpOiBHYW1lTG9vcCB7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5yZW5kZXJlciA9PT0gUmVuZGVyZXIuQ0FOVkFTID8gbmV3IENhbnZhc0dyYXBoaWNzSW1wbCgpIDogbmV3IE9wZW5HTEdyYXBoaWNzSW1wbCgpO1xuXG4gICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgdmFyIHJlY3QgPSAoPGFueT5ldmVudC50YXJnZXQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHZhciB4ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICB2YXIgeSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICB0aGlzLmxhc3RUb3VjaCA9IGV2ZW50O1xuICAgICAgICAgIHRoaXMubW91c2VEb3duSGFuZGxlcih4LCB5KTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIEd1dGVMb2cubG9nKGUpO1xuICAgICAgfVxuICAgIH0sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgICAgICB2YXIgcmVjdCA9ICg8YW55PmV2ZW50LnRhcmdldCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgdmFyIHggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgIHZhciB5ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgIHRoaXMubGFzdFRvdWNoID0gZXZlbnQ7XG4gICAgICAgICAgdGhpcy5tb3VzZU1vdmVIYW5kbGVyKHgsIHkpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgR3V0ZUxvZy5sb2coZSk7XG4gICAgICB9XG4gICAgfSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgdmFyIHJlY3QgPSAoPGFueT5ldmVudC50YXJnZXQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGlmICh0aGlzLmxhc3RUb3VjaCkge1xuICAgICAgICAgICAgdmFyIHggPSB0aGlzLmxhc3RUb3VjaC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLmxhc3RUb3VjaC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICB0aGlzLm1vdXNlVXBIYW5kbGVyKHgsIHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlVXBIYW5kbGVyKDAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIEd1dGVMb2cubG9nKGUpO1xuICAgICAgfVxuICAgIH0sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubW91c2VXaGVlbEhhbmRsZXIoZXZlbnQuZGVsdGFZKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgR3V0ZUxvZy5sb2coZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5zaGlmdFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29tbWFuZFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29udHJvbFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWx0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2hpZnRQcmVzc2VkID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICB0aGlzLmNvbW1hbmRQcmVzc2VkID0gZXZlbnQubWV0YUtleTtcbiAgICAgIHRoaXMuY29udHJvbFByZXNzZWQgPSBldmVudC5jdHJsS2V5O1xuICAgICAgdGhpcy5hbHRQcmVzc2VkID0gZXZlbnQuYWx0S2V5O1xuXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLm1vdXNlRG93bkhhbmRsZXIoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSwgZXZlbnQuYnV0dG9uKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIEd1dGVMb2cubG9nKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNoaWZ0UHJlc3NlZCA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgdGhpcy5jb21tYW5kUHJlc3NlZCA9IGV2ZW50Lm1ldGFLZXk7XG4gICAgICB0aGlzLmNvbnRyb2xQcmVzc2VkID0gZXZlbnQuY3RybEtleTtcbiAgICAgIHRoaXMuYWx0UHJlc3NlZCA9IGV2ZW50LmFsdEtleTtcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5tb3VzZU1vdmVIYW5kbGVyKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgR3V0ZUxvZy5sb2coZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNoaWZ0UHJlc3NlZCA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgdGhpcy5jb21tYW5kUHJlc3NlZCA9IGV2ZW50Lm1ldGFLZXk7XG4gICAgICB0aGlzLmNvbnRyb2xQcmVzc2VkID0gZXZlbnQuY3RybEtleTtcbiAgICAgIHRoaXMuYWx0UHJlc3NlZCA9IGV2ZW50LmFsdEtleTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5tb3VzZVVwSGFuZGxlcihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZLCBldmVudC5idXR0b24pO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgR3V0ZUxvZy5sb2coZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIlNoaWZ0XCIpIHtcbiAgICAgICAgdGhpcy5zaGlmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJNZXRhXCIpIHtcbiAgICAgICAgdGhpcy5jb21tYW5kUHJlc3NlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkNvbnRyb2xcIikge1xuICAgICAgICB0aGlzLmNvbnRyb2xQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQWx0XCIpIHtcbiAgICAgICAgdGhpcy5hbHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5rZXlEb3duSGFuZGxlcihldmVudC5jb2RlKTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJTaGlmdFwiKSB7XG4gICAgICAgIHRoaXMuc2hpZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIk1ldGFcIikge1xuICAgICAgICB0aGlzLmNvbW1hbmRQcmVzc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkNvbnRyb2xcIikge1xuICAgICAgICB0aGlzLmNvbnRyb2xQcmVzc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFsdFwiKSB7XG4gICAgICAgIHRoaXMuYWx0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmtleVVwSGFuZGxlcihldmVudC5jb2RlKTtcbiAgICB9KTtcblxuICAgIGdhbWUuaW5pdCh0aGlzKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvb3AoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9vcCgpOiB2b2lkIHtcbiAgICBjb25zdCBlcnJvciA9IHRoaXMuZ3JhcGhpY3MuZ2V0RXJyb3IoKTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZ2FtZS5yZW5kZXJlckVycm9yKGVycm9yKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlbmRlcmVyIEVycm9yIC0gXCIgKyBlcnJvcik7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubG9vcCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgbm93OiBudW1iZXIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBsZXQgZGVsdGE6IG51bWJlciA9IDA7XG4gICAgaWYgKHRoaXMubGFzdEZyYW1lICE9PSAwKSB7XG4gICAgICBkZWx0YSA9IG5vdyAtIHRoaXMubGFzdEZyYW1lO1xuICAgIH1cbiAgICB0aGlzLmxhc3RGcmFtZSA9IG5vdztcblxuICAgIHRoaXMuZ3JhcGhpY3MucmVuZGVyU3RhcnQoKTtcbiAgICB0aGlzLmdyYXBoaWNzLmFwcGx5Rm9udCgpO1xuICAgIHRoaXMuZ2FtZS51cGRhdGUodGhpcywgZGVsdGEpO1xuICAgIHRoaXMuZ2FtZS5yZW5kZXIodGhpcywgdGhpcy5ncmFwaGljcyk7XG4gICAgdGhpcy5ncmFwaGljcy5yZW5kZXJFbmQoKTtcbiAgfVxuXG4gIGdldFppcFByb2dyZXNzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuemlwUGVyY2VudExvYWRlZDtcbiAgfVxuXG4gIGxvYWRaaXAodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgcmVxLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICByZXEub25wcm9ncmVzcyA9IChlKSA9PiB7XG4gICAgICAgIHRoaXMuemlwUGVyY2VudExvYWRlZCA9IChlLmxvYWRlZCAvIGUudG90YWwpO1xuICAgICAgfTtcbiAgICAgIHJlcS5vbmxvYWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgSlNaaXAubG9hZEFzeW5jKHJlcS5yZXNwb25zZSkudGhlbigoemlwKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWluWmlwRmlsZSA9IHppcDtcbiAgICAgICAgICBHdXRlTG9nLmxvZyhcIkxvYWRlZCBaaXBcIik7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICByZXEub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH07XG5cbiAgICAgIHJlcS5zZW5kKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRaaXBGaWxlKG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgZmlsZSA9IHRoaXMubWFpblppcEZpbGUuZmlsZShuYW1lKTtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIEd1dGVMb2cubG9nKFwiemlwIGZpbGUgZW50cnk6IFwiICsgbmFtZSArIFwiIG5vdCBmb3VuZCFcIik7XG4gICAgICB0aHJvdyBFcnJvcihcIlppcCBmaWxlIGVudHJ5IG5vdCBmb3VuZDogXCIgKyBuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBnZXRaaXBGaWxlVGV4dChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZ2V0WmlwRmlsZShuYW1lKS5hc3luYyhcInN0cmluZ1wiKS50aGVuKChyZXN1bHQ6IHN0cmluZykgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KS5jYXRjaCgoZTogYW55KSA9PiB7XG4gICAgICAgIEd1dGVMb2cuZXJyb3IoZSk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBnZXRaaXBBcnJheUJ1ZmZlcihuYW1lOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEFycmF5QnVmZmVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmdldFppcEZpbGUobmFtZSkuYXN5bmMoXCJhcnJheWJ1ZmZlclwiKS50aGVuKChyZXN1bHQ6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pLmNhdGNoKChlOiBhbnkpID0+IHtcbiAgICAgICAgR3V0ZUxvZy5lcnJvcihlKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIGdldFppcEJhc2U2NChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZ2V0WmlwRmlsZShuYW1lKS5hc3luYyhcImFycmF5YnVmZmVyXCIpLnRoZW4oKHJlc3VsdDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pLmNhdGNoKChlOiBhbnkpID0+IHtcbiAgICAgICAgR3V0ZUxvZy5lcnJvcihlKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIGdldFppcEJsb2IobmFtZTogc3RyaW5nKTogUHJvbWlzZTxCbG9iPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEJsb2I+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZ2V0WmlwRmlsZShuYW1lKS5hc3luYyhcImJsb2JcIikudGhlbigocmVzdWx0OiBCbG9iKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pLmNhdGNoKChlOiBhbnkpID0+IHtcbiAgICAgICAgR3V0ZUxvZy5lcnJvcihlKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRNdXNpYyh1cmw6IHN0cmluZyk6IFNvdW5kIHtcbiAgICBsZXQgYnVmZmVyUHJvbWlzZTogdW5kZWZpbmVkIHwgUHJvbWlzZTxBcnJheUJ1ZmZlcj4gPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVybC5pbmRleE9mKFwiXy9cIikgPj0gMCkge1xuICAgICAgYnVmZmVyUHJvbWlzZSA9IHRoaXMuZ2V0WmlwQXJyYXlCdWZmZXIodXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZihcIl8vXCIpKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc291bmQ6IFNvdW5kID0gbmV3IFNvdW5kSW1wbCh1cmwsIHRydWUsIGJ1ZmZlclByb21pc2UpO1xuICAgIHRoaXMucmVzb3VyY2VzLnB1c2goc291bmQpO1xuXG4gICAgcmV0dXJuIHNvdW5kO1xuICB9XG5cbiAgbG9hZFNvdW5kKHVybDogc3RyaW5nKTogU291bmQge1xuICAgIGxldCBidWZmZXJQcm9taXNlOiB1bmRlZmluZWQgfCBQcm9taXNlPEFycmF5QnVmZmVyPiA9IHVuZGVmaW5lZDtcbiAgICBpZiAodXJsLmluZGV4T2YoXCJfL1wiKSA+PSAwKSB7XG4gICAgICBidWZmZXJQcm9taXNlID0gdGhpcy5nZXRaaXBBcnJheUJ1ZmZlcih1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKFwiXy9cIikpKTtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VuZDogU291bmQgPSBuZXcgU291bmRJbXBsKHVybCwgZmFsc2UsIGJ1ZmZlclByb21pc2UpO1xuICAgIHRoaXMucmVzb3VyY2VzLnB1c2goc291bmQpO1xuXG4gICAgcmV0dXJuIHNvdW5kO1xuICB9XG5cbiAgcHJpdmF0ZSB0b1BvdGVudGlhbFppcExvYWRCbG9iKHVybDogc3RyaW5nKTogUHJvbWlzZTxCbG9iPiB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHVybC5pbmRleE9mKFwiXy9cIikgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0WmlwQmxvYih1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKFwiXy9cIikpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSB0b1BvdGVudGlhbFppcExvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gfCB1bmRlZmluZWQge1xuICAgIGlmICh1cmwuaW5kZXhPZihcIl8vXCIpID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFppcEJhc2U2NCh1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKFwiXy9cIikpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgbG9hZEJpdG1hcCh1cmw6IHN0cmluZyk6IEJpdG1hcCB7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIgPT09IFJlbmRlcmVyLkNBTlZBUykge1xuICAgICAgY29uc3QgYml0bWFwOiBCaXRtYXAgPSBuZXcgQml0bWFwSW1wbCh1cmwsIHRoaXMudG9Qb3RlbnRpYWxaaXBMb2FkKHVybCksIHRoaXMucGFsZXR0ZSk7XG4gICAgICB0aGlzLnJlc291cmNlcy5wdXNoKGJpdG1hcCk7XG4gICAgICByZXR1cm4gYml0bWFwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBiaXRtYXA6IEJpdG1hcCA9IG5ldyBPcGVuR0xCaXRtYXAodGhpcy5ncmFwaGljcyBhcyBPcGVuR0xHcmFwaGljc0ltcGwsIHVybCwgdGhpcy50b1BvdGVudGlhbFppcExvYWQodXJsKSwgdGhpcy5wYWxldHRlKTtcbiAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2goYml0bWFwKTtcblxuICAgICAgcmV0dXJuIGJpdG1hcDtcbiAgICB9XG5cbiAgfVxuXG4gIGxvYWRTY2FsZWRUaWxlc2V0KHVybDogc3RyaW5nLCB0aWxlV2lkdGg6IG51bWJlciwgdGlsZUhlaWdodDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogVGlsZXNldCB7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIgPT09IFJlbmRlcmVyLkNBTlZBUykge1xuICAgICAgY29uc3QgdGlsZXNldDogVGlsZXNldCA9IG5ldyBUaWxlc2V0SW1wbCh1cmwsIHRoaXMudG9Qb3RlbnRpYWxaaXBMb2FkQmxvYih1cmwpLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIHNjYWxlLCB0aGlzLnBhbGV0dGUpO1xuICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaCh0aWxlc2V0KTtcbiAgICAgIHJldHVybiB0aWxlc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0aWxlc2V0OiBUaWxlc2V0ID0gbmV3IE9wZW5HTFRpbGVzZXRJbXBsKHRoaXMuZ3JhcGhpY3MgYXMgT3BlbkdMR3JhcGhpY3NJbXBsLCB1cmwsIHRoaXMudG9Qb3RlbnRpYWxaaXBMb2FkQmxvYih1cmwpLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIHNjYWxlLCB0aGlzLnBhbGV0dGUpO1xuICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaCh0aWxlc2V0KTtcbiAgICAgIHJldHVybiB0aWxlc2V0O1xuICAgIH1cbiAgfVxuXG4gIGxvYWRUaWxlc2V0KHVybDogc3RyaW5nLCB0aWxlV2lkdGg6IG51bWJlciwgdGlsZUhlaWdodDogbnVtYmVyKTogVGlsZXNldCB7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIgPT09IFJlbmRlcmVyLkNBTlZBUykge1xuICAgICAgY29uc3QgdGlsZXNldDogVGlsZXNldCA9IG5ldyBUaWxlc2V0SW1wbCh1cmwsIHRoaXMudG9Qb3RlbnRpYWxaaXBMb2FkQmxvYih1cmwpLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIDEsIHRoaXMucGFsZXR0ZSk7XG4gICAgICB0aGlzLnJlc291cmNlcy5wdXNoKHRpbGVzZXQpO1xuICAgICAgcmV0dXJuIHRpbGVzZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRpbGVzZXQ6IFRpbGVzZXQgPSBuZXcgT3BlbkdMVGlsZXNldEltcGwodGhpcy5ncmFwaGljcyBhcyBPcGVuR0xHcmFwaGljc0ltcGwsIHVybCwgdGhpcy50b1BvdGVudGlhbFppcExvYWRCbG9iKHVybCksIHRpbGVXaWR0aCwgdGlsZUhlaWdodCwgMSwgdGhpcy5wYWxldHRlKTtcbiAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2godGlsZXNldCk7XG4gICAgICByZXR1cm4gdGlsZXNldDtcbiAgICB9XG4gIH1cblxuICBsb2FkRm9udCh1cmw6IHN0cmluZywgbmFtZTogc3RyaW5nKTogRm9udCB7XG4gICAgcmV0dXJuIG5ldyBGb250SW1wbCh1cmwsIG5hbWUpO1xuICB9XG5cbiAgbG9hZExEVEsobmFtZTogc3RyaW5nLCBsb2NhdG9yOiAobmFtZTogc3RyaW5nKSA9PiBzdHJpbmcpOiBQcm9taXNlPE1hcFdvcmxkPiB7XG4gICAgY29uc3Qgd29ybGQ6IExEVEtXb3JsZCA9IG5ldyBMRFRLV29ybGQoKTtcbiAgICB0aGlzLnJlc291cmNlcy5wdXNoKHdvcmxkKTtcblxuICAgIHJldHVybiB3b3JsZC5sb2FkKG5hbWUsIGZpbGUgPT4gdGhpcy5sb2FkSnNvbihsb2NhdG9yKGZpbGUpKSlcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFRleHQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIGl0cyBhbiBhc3NldCByZWZlcmVuY2VcbiAgICAgIGlmICh1cmwuaW5kZXhPZihcIl8vXCIpID49IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WmlwRmlsZVRleHQodXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZihcIl8vXCIpKSkudGhlbigocmVzdWx0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcS5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG5cbiAgICAgICAgcmVxLm9ubG9hZCA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChyZXEucmVzcG9uc2VUZXh0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXEuc2VuZCgpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBsb2FkSnNvbih1cmw6IHN0cmluZywgdHJhbnNmb3JtPzogKHRleHQ6IHN0cmluZykgPT4gc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBpdHMgYW4gYXNzZXQgcmVmZXJlbmNlXG4gICAgICBpZiAodXJsLmluZGV4T2YoXCJfL1wiKSA+PSAwKSB7XG4gICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoXCJfL1wiKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFppcEZpbGVUZXh0KHVybCkudGhlbigocmVzdWx0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UodHJhbnNmb3JtID8gdHJhbnNmb3JtKHJlc3VsdCkgOiByZXN1bHQpO1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBHdXRlTG9nLmxvZyhcIkZhaWxlZCB0byBwYXJzZSBKU09OOiBcIiArIHVybCk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh1cmwuc3RhcnRzV2l0aChcImRhdGE6YXBwbGljYXRpb24vanNvbjt1dGY4LFwiKSkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoXCIsXCIpICsgMSk7XG4gICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHRyYW5zZm9ybSA/IHRyYW5zZm9ybShyZXN1bHQpIDogcmVzdWx0KSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcblxuICAgICAgICByZXEub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHJlcS5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nID0gcmVxLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh0cmFuc2Zvcm0gPyB0cmFuc2Zvcm0ocmVzdWx0KSA6IHJlc3VsdCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXEuc2VuZCgpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpc1J1bm5pbmdTdGFuZGFsb25lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoKDxhbnk+d2luZG93Lm5hdmlnYXRvcikuc3RhbmRhbG9uZSA9PT0gdHJ1ZSkgfHwgKHdpbmRvdy5tYXRjaE1lZGlhKCcoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKScpLm1hdGNoZXMpO1xuICB9XG5cbiAgaXNUYWJsZXQoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmlzUGhvbmUoKSAmJiB0aGlzLmlzSU9TKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBpc1RhYmxldCA9IC8oaXBhZHx0YWJsZXR8KGFuZHJvaWQoPyEuKm1vYmlsZSkpfCh3aW5kb3dzKD8hLipwaG9uZSkoLip0b3VjaCkpfGtpbmRsZXxwbGF5Ym9va3xzaWxrfChwdWZmaW4oPyEuKihJUHxBUHxXUCkpKSkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblxuICAgIHJldHVybiBpc1RhYmxldDtcbiAgfVxuXG4gIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSU9TKCkgfHwgdGhpcy5pc0FuZHJvaWQoKTtcbiAgfVxuXG4gIGlzQW5kcm9pZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSAhPSBudWxsO1xuICB9XG5cbiAgaXNJT1MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdpUGFkIFNpbXVsYXRvcicsXG4gICAgICAnaVBob25lIFNpbXVsYXRvcicsXG4gICAgICAnaVBvZCBTaW11bGF0b3InLFxuICAgICAgJ2lQYWQnLFxuICAgICAgJ2lQaG9uZScsXG4gICAgICAnaVBvZCdcbiAgICBdLmluZGV4T2YobmF2aWdhdG9yLnBsYXRmb3JtKSA+PSAwXG4gICAgICAvLyBpUGFkIG9uIGlPUyAxMyBkZXRlY3Rpb25cbiAgICAgIHx8IChuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKFwiTWFjXCIpICYmIFwib250b3VjaGVuZFwiIGluIGRvY3VtZW50KVxuICB9XG5cbiAgaXNQaG9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0lPUygpICYmICh3aW5kb3cubWF0Y2hNZWRpYShcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweClcIikubWF0Y2hlcyB8fCB3aW5kb3cubWF0Y2hNZWRpYShcIm9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzYwcHgpXCIpLm1hdGNoZXMpO1xuICB9XG5cbiAgc2V0U291bmRWb2x1bWUodjogbnVtYmVyKTogdm9pZCB7XG4gICAgU291bmRJbXBsLnNldFNvdW5kVm9sdW1lKHYpO1xuICB9XG5cbiAgZ2V0U291bmRWb2x1bWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gU291bmRJbXBsLmdldFNvdW5kVm9sdW1lKCk7XG4gIH1cblxuICBzZXRNdXNpY1ZvbHVtZSh2OiBudW1iZXIpOiB2b2lkIHtcbiAgICBTb3VuZEltcGwuc2V0TXVzaWNWb2x1bWUodik7XG4gIH1cblxuICBnZXRNdXNpY1ZvbHVtZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBTb3VuZEltcGwuZ2V0TXVzaWNWb2x1bWUoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEtleXMge1xuICBzdGF0aWMgRVNDQVBFX0tFWTogc3RyaW5nID0gXCJFc2NhcGVcIjtcbiAgc3RhdGljIEVOVEVSX0tFWTogc3RyaW5nID0gXCJFbnRlclwiO1xuICBzdGF0aWMgTEVGVF9LRVk6IHN0cmluZyA9IFwiQXJyb3dMZWZ0XCI7XG4gIHN0YXRpYyBSSUdIVF9LRVk6IHN0cmluZyA9IFwiQXJyb3dSaWdodFwiO1xuICBzdGF0aWMgVVBfS0VZOiBzdHJpbmcgPSBcIkFycm93VXBcIjtcbiAgc3RhdGljIERPV05fS0VZOiBzdHJpbmcgPSBcIkFycm93RG93blwiO1xuICBzdGF0aWMgU1BBQ0VfS0VZOiBzdHJpbmcgPSBcIiBcIjtcbiAgc3RhdGljIFNfS0VZOiBzdHJpbmcgPSBcInNcIjtcbiAgc3RhdGljIE1fS0VZOiBzdHJpbmcgPSBcIm1cIjtcbiAgc3RhdGljIEFfS0VZOiBzdHJpbmcgPSBcImFcIjtcbiAgc3RhdGljIFdfS0VZOiBzdHJpbmcgPSBcIndcIjtcbiAgc3RhdGljIERfS0VZOiBzdHJpbmcgPSBcImRcIjtcbiAgc3RhdGljIENPTlRST0xfS0VZOiBzdHJpbmcgPSBcIkNvbnRyb2xcIjtcbiAgc3RhdGljIE1FVEFfS0VZOiBzdHJpbmcgPSBcIk1ldGFcIjtcbiAgc3RhdGljIEFMVF9LRVk6IHN0cmluZyA9IFwiQWx0XCI7XG4gIHN0YXRpYyBUQUJfS0VZOiBzdHJpbmcgPSBcIlRhYlwiO1xufVxuIiwiZXhwb3J0IGNsYXNzIEd1dGVMb2cge1xuICAgIHN0YXRpYyBJTkZPOiBib29sZWFuID0gdHJ1ZTtcbiAgICBzdGF0aWMgRVJST1I6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHN0YXRpYyBXQVJOOiBib29sZWFuID0gdHJ1ZTtcbiAgICBzdGF0aWMgVFJBQ0U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHN0YXRpYyBsb2coLi4uYXJnczogYW55KSB7XG4gICAgICAgIGlmIChHdXRlTG9nLklORk8pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGluZm8oLi4uYXJnczogYW55KSB7XG4gICAgICAgIGlmIChHdXRlTG9nLklORk8pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZXJyb3IoLi4uYXJnczogYW55KSB7XG4gICAgICAgIGlmIChHdXRlTG9nLkVSUk9SKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHdhcm0oLi4uYXJnczogYW55KSB7XG4gICAgICAgIGlmIChHdXRlTG9nLldBUk4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyB0cmFjZSguLi5hcmdzOiBhbnkpIHtcbiAgICAgICAgaWYgKEd1dGVMb2cuVFJBQ0UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgQVVESU9fQ09OVEVYVCwgU291bmRJbXBsIH0gZnJvbSBcIi4vaW1wbC9Tb3VuZEltcGxcIjtcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSBcIi4vU291bmRcIjtcblxuaW50ZXJmYWNlIFNvdW5kUG9pbnQge1xuICAgIHg/OiBudW1iZXJcbiAgICB5PzogbnVtYmVyXG4gICAgdm9sdW1lOiBudW1iZXJcbiAgICBzb3VyY2U6IEF1ZGlvU2NoZWR1bGVkU291cmNlTm9kZVxuICAgIGdhaW46IEdhaW5Ob2RlXG4gICAgY2F0ZWdvcnk6IHN0cmluZ1xufVxuXG5leHBvcnQgZW51bSBTb3VuZEVhc2luZyB7XG4gICAgTGluZWFyLFxuICAgIFF1YWRyYXRpYyxcbiAgICBDdWJpY1xufVxuXG5pbnRlcmZhY2UgU291bmRDYXRlZ29yeSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgdm9sdW1lOiBudW1iZXJcbiAgICBtYXhEaXN0YW5jZTI6IG51bWJlclxuICAgIHNjYWxlMjogbnVtYmVyXG4gICAgZWFzaW5nOiBTb3VuZEVhc2luZ1xufVxuXG5leHBvcnQgY2xhc3MgU291bmRTY2FwZSB7XG4gICAgcHJpdmF0ZSBfc291bmRWb2x1bWU6IG51bWJlciA9IDE7XG5cbiAgICBwcml2YXRlIHBvaW50czogU291bmRQb2ludFtdID0gW11cbiAgICBwcml2YXRlIGxpc3RlbmVyWDogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgbGlzdGVuZXJZOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBjYXRlZ29yaWVzOiBSZWNvcmQ8c3RyaW5nLCBTb3VuZENhdGVnb3J5PiA9IHt9XG5cbiAgICBjYXRlZ29yeShuYW1lOiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyLCBtYXhEaXN0YW5jZTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBlYXNpbmc6IFNvdW5kRWFzaW5nKTogU291bmRTY2FwZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIG5hbWUsIHZvbHVtZSwgbWF4RGlzdGFuY2UyOiBtYXhEaXN0YW5jZSAqIG1heERpc3RhbmNlLCBzY2FsZTI6IHNjYWxlICogc2NhbGUsIGVhc2luZ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIFxuICAgIGdldCBzb3VuZFZvbHVtZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWb2x1bWU7XG4gICAgfVxuXG4gICAgc2V0IHNvdW5kVm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc291bmRWb2x1bWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lclggPSB4XG4gICAgICAgIHRoaXMubGlzdGVuZXJZID0geVxuICAgICAgICB0aGlzLnVwZGF0ZVZvbHVtZXMoKVxuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMucG9pbnRzKSB7XG4gICAgICAgICAgICBwb2ludC5zb3VyY2Uuc3RvcCgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIH1cblxuICAgIHBsYXkoc291bmQ6IFNvdW5kLCB2b2x1bWU6IG51bWJlciwgY2F0ZWdvcnk6IHN0cmluZywgeD86IG51bWJlciwgeT86IG51bWJlcikge1xuICAgICAgICAvLyBwcm90ZWN0IGFnYWluc3QgcGxheWluZyBzb3VuZHMgdG9vIGVhcmx5IG9yIHdpdGhvdXQgYXV0byB3b3JraW5nXG4gICAgICAgIGlmICghQVVESU9fQ09OVEVYVCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1wbCA9IDxTb3VuZEltcGw+c291bmRcbiAgICAgICAgY29uc3Qgc291cmNlID0gQVVESU9fQ09OVEVYVC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgc291cmNlLmJ1ZmZlciA9IGltcGwuYnVmZmVyO1xuICAgICAgICBjb25zdCBnYWluID0gQVVESU9fQ09OVEVYVC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHNvdXJjZS5jb25uZWN0KGdhaW4pO1xuICAgICAgICBnYWluLmNvbm5lY3QoQVVESU9fQ09OVEVYVC5kZXN0aW5hdGlvbik7XG4gICAgICAgIGNvbnN0IHBvaW50OiBTb3VuZFBvaW50ID0ge1xuICAgICAgICAgICAgeCwgeSwgdm9sdW1lLFxuICAgICAgICAgICAgc291cmNlLCBnYWluLCBjYXRlZ29yeVxuICAgICAgICB9XG4gICAgICAgIGdhaW4uZ2Fpbi52YWx1ZSA9IHRoaXMuY2FsY3VsYXRlVm9sdW1lKHBvaW50KVxuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KVxuICAgICAgICBzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIGV2ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wb2ludHMuaW5kZXhPZihwb2ludClcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgIC8vIEd1dGVMb2cubG9nKGBTb3VuZCBlbmRlZDogJHtzb3VuZC5uYW1lfSwgdG90YWw6ICR7dGhpcy5wb2ludHMubGVuZ3RofWApXG4gICAgICAgIH0pXG4gICAgICAgIHNvdXJjZS5zdGFydCgpXG4gICAgICAgIC8vIEd1dGVMb2cubG9nKGBTb3VuZCBzdGFydGVkOiAke3NvdW5kLm5hbWV9LCB0b3RhbDogJHt0aGlzLnBvaW50cy5sZW5ndGh9YClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVZvbHVtZXMoKSB7XG4gICAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5wb2ludHMpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuY2FsY3VsYXRlVm9sdW1lKHBvaW50KTtcbiAgICAgICAgICAgIHBvaW50LmdhaW4uZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSh2YWx1ZSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlVm9sdW1lKHBvaW50OiBTb3VuZFBvaW50KTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXNbcG9pbnQuY2F0ZWdvcnldXG4gICAgICAgIGlmIChjYXRlZ29yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9pbnQudm9sdW1lICogdGhpcy5fc291bmRWb2x1bWVcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHBvaW50LnggPT09IHVuZGVmaW5lZCB8fCBwb2ludC55ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2ludC52b2x1bWUgKiBjYXRlZ29yeS52b2x1bWUgKiB0aGlzLl9zb3VuZFZvbHVtZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGR4OiBudW1iZXIgPSBwb2ludC54IC0gdGhpcy5saXN0ZW5lclhcbiAgICAgICAgY29uc3QgZHk6IG51bWJlciA9IHBvaW50LnkgLSB0aGlzLmxpc3RlbmVyWVxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IChkeCAqIGR4ICsgZHkgKiBkeSkgLyBjYXRlZ29yeS5zY2FsZTI7XG4gICAgICAgIC8vICogKGxvcyA/IDEgOiAwLjMpIFRPRE86IGNhbGxiYWNrXG4gICAgICAgIGNvbnN0IHJlZHVjdGlvbiA9IE1hdGgubWF4KDEgLSBkaXN0YW5jZSAvIGNhdGVnb3J5Lm1heERpc3RhbmNlMiwgMCk7XG4gICAgICAgIHN3aXRjaCAoY2F0ZWdvcnkuZWFzaW5nKSB7XG4gICAgICAgICAgICBjYXNlIFNvdW5kRWFzaW5nLkxpbmVhcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWb2x1bWUgKiBwb2ludC52b2x1bWUgKiBjYXRlZ29yeS52b2x1bWUgKiByZWR1Y3Rpb25cbiAgICAgICAgICAgIGNhc2UgU291bmRFYXNpbmcuUXVhZHJhdGljOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zb3VuZFZvbHVtZSAqIHBvaW50LnZvbHVtZSAqIGNhdGVnb3J5LnZvbHVtZSAqIHJlZHVjdGlvbiAqIHJlZHVjdGlvblxuICAgICAgICAgICAgY2FzZSBTb3VuZEVhc2luZy5DdWJpYzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWb2x1bWUgKiBwb2ludC52b2x1bWUgKiBjYXRlZ29yeS52b2x1bWUgKiByZWR1Y3Rpb24gKiByZWR1Y3Rpb24gKiByZWR1Y3Rpb25cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEJpdG1hcCB9IGZyb20gXCIuLi9CaXRtYXBcIjtcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcIi4uL0dyYXBoaWNzXCI7XG5pbXBvcnQgeyBHdXRlTG9nIH0gZnJvbSBcIi4uL0xvZ1wiO1xuaW1wb3J0IHsgR3JhcGhpY3NJbXBsIH0gZnJvbSBcIi4vR3JhcGhpY3NJbXBsXCI7XG5pbXBvcnQgeyBQYWxldHRlIH0gZnJvbSBcIi4vUGFsZXR0ZVwiO1xuXG5leHBvcnQgY2xhc3MgQml0bWFwSW1wbCBpbXBsZW1lbnRzIEJpdG1hcCB7XG4gIHdpZHRoOiBudW1iZXIgPSAwO1xuICBoZWlnaHQ6IG51bWJlciA9IDA7XG4gIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBkYXRhVXJsTG9hZGVyOiBQcm9taXNlPHN0cmluZz4gfCB1bmRlZmluZWQsIHBhbDogUGFsZXR0ZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCkge1xuICAgIHRoaXMubmFtZSA9IHVybDtcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgR3V0ZUxvZy5sb2coXCJFcnJvciBsb2FkaW5nOiBcIiArIHVybCk7XG4gICAgfVxuICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuaW1hZ2Uud2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaW1hZ2UuaGVpZ2h0O1xuXG4gICAgICBpZiAocGFsKSB7XG4gICAgICAgIHBhbC5hZGp1c3RJbWFnZSh0aGlzLmltYWdlKS50aGVuKChpbWFnZTogSFRNTEltYWdlRWxlbWVudCkgPT4geyBcbiAgICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGRhdGFVcmxMb2FkZXIpIHtcbiAgICAgIGRhdGFVcmxMb2FkZXIudGhlbigoYmFzZTY0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBcImRhdGE6XCIrdXJsLnN1YnN0cmluZyh1cmwubGVuZ3RoLTMpK1wiO2Jhc2U2NCxcIitiYXNlNjQ7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltYWdlLnNyYyA9IHVybDtcbiAgICB9XG4gIH1cblxuICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjdHggPSAoZ3JhcGhpY3MgYXMgR3JhcGhpY3NJbXBsKS5jdHg7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB4LCB5KTtcbiAgfVxuXG4gIGRyYXdTY2FsZWQoZ3JhcGhpY3M6IEdyYXBoaWNzLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjdHggPSAoZ3JhcGhpY3MgYXMgR3JhcGhpY3NJbXBsKS5jdHg7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuICBcbiAgaW5pdE9uRmlyc3RDbGljaygpOiB2b2lkIHtcbiAgfVxufSIsImltcG9ydCB7IEZvbnQgfSBmcm9tIFwiLi4vRm9udFwiO1xuXG5kZWNsYXJlIGxldCBGb250RmFjZTogYW55O1xuXG5leHBvcnQgY2xhc3MgRm9udEltcGwgaW1wbGVtZW50cyBGb250IHtcbiAgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgc3R5bGUuaW5uZXJIVE1MID0gXCJAZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IFwiK25hbWUrXCI7IHNyYzogdXJsKCdcIit1cmwrXCInKTsgfSBib2R5IHsgZm9udC1mYW1pbHk6IFwiK25hbWUrXCI7IH1cIjtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGFwcGx5KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjdHguZm9udCA9IHNpemUrXCJweCBcIiArIHRoaXMubmFtZTtcbiAgfVxufSIsImltcG9ydCB7IEJpdG1hcCwgR3JhcGhpY3MgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IEZvbnQgfSBmcm9tIFwiLi4vRm9udFwiO1xuaW1wb3J0IHsgT2Zmc2NyZWVuIH0gZnJvbSBcIi4uL0dyYXBoaWNzXCI7XG5pbXBvcnQgeyBGb250SW1wbCB9IGZyb20gXCIuL0ZvbnRJbXBsXCI7XG5pbXBvcnQgeyBTb3VuZEltcGwgfSBmcm9tIFwiLi9Tb3VuZEltcGxcIjtcblxuZGVjbGFyZSBsZXQgSW5zdGFsbFRyaWdnZXI6IGFueTtcblxudmFyIGlzRmlyZWZveCA9IHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG5cbmNsYXNzIE9mZnNjcmVlbkltcGwgaW1wbGVtZW50cyBPZmZzY3JlZW4ge1xuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICB9XG5cbiAgcmVsZWFzZSgpOiB2b2lkIHtcbiAgfVxuICBcbiAgbmVlZHNSZWZyZXNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgZ2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMud2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICB9XG5cbiAgc2V0RGltZW5zaW9uKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbn1cblxuY2xhc3MgQ29weUJpdG1hcCBpbXBsZW1lbnRzIEJpdG1hcCB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBsb2FkZWQ6IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZyA9IFwiY29weVwiO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gIH1cblxuICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjdHggPSAoZ3JhcGhpY3MgYXMgR3JhcGhpY3NJbXBsKS5jdHg7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhbnZhcywgeCwgeSk7XG4gIH1cblxuICBkcmF3U2NhbGVkKGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY3R4ID0gKGdyYXBoaWNzIGFzIEdyYXBoaWNzSW1wbCkuY3R4O1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgZ2V0RHJhd2FibGUoKTogQ2FudmFzSW1hZ2VTb3VyY2Uge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuXG4gIGluaXRPbkZpcnN0Q2xpY2soKTogdm9pZCB7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdyYXBoaWNzSW1wbCBpbXBsZW1lbnRzIEdyYXBoaWNzIHtcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIG1haW5DdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgZm9udDogRm9udDtcbiAgZm9udFNpemU6IG51bWJlciA9IDIwO1xuICBvZmZzY3JlZW46IE9mZnNjcmVlbiB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVjYW52YXNcIik7XG4gICAgdGhpcy5jdHggPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPiB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiwgeyBhbHBoYTogZmFsc2UgfSk7XG4gICAgdGhpcy5tYWluQ3R4ID0gdGhpcy5jdHg7XG5cbiAgICAoPGFueT4gdGhpcy5jdHgpLndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICg8YW55PiB0aGlzLmNhbnZhcykuc3R5bGUuZm9udFNtb290aCA9IFwibmV2ZXJcIjtcbiAgICAoPGFueT4gdGhpcy5jYW52YXMpLnN0eWxlLndlYmtpdEZvbnRTbW9vdGhpbmcgPSBcIm5vbmVcIjtcblxuICAgIGlmIChpc0ZpcmVmb3gpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gXCJjcmlzcC1lZGdlc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IFwicGl4ZWxhdGVkXCI7XG4gICAgfVxuXG4gICAgdGhpcy5mb250ID0gbmV3IEZvbnRJbXBsKFwiZm9udC50dGZcIiwgXCJHdXRlRGVmYXVsdFwiKTtcbiAgICBpZiAodGhpcy5mb250KSB7XG4gICAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldEVycm9yKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgcmVuZGVyU3RhcnQoKTogdm9pZCB7XG5cbiAgfVxuXG4gIHJlbmRlckVuZCgpOiB2b2lkIHtcblxuICB9XG4gIFxuICBuZXdSZXNvdXJjZUxvYWRlZCgpOiB2b2lkIHtcbiAgfVxuXG4gIGluaXRSZXNvdXJjZU9uTG9hZGVkKCk6IHZvaWQge1xuICB9XG5cbiAgc21vb3RoKCk6IHZvaWQge1xuICAgICg8YW55PiB0aGlzLmN0eCkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0cnVlO1xuICAgICg8YW55PiB0aGlzLmNhbnZhcykuc3R5bGUuZm9udFNtb290aCA9IFwiaW5pdGlhbFwiO1xuICAgICg8YW55PiB0aGlzLmNhbnZhcykuc3R5bGUud2Via2l0Rm9udFNtb290aGluZyA9IFwiaW5pdGlhbFwiO1xuXG4gICAgdGhpcy5jYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSBcImluaXRpYWxcIjtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpOiBET01NYXRyaXgge1xuICAgIHJldHVybiB0aGlzLmN0eC5nZXRUcmFuc2Zvcm0oKTtcbiAgfVxuICBcbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3R4LmNhbnZhcy53aWR0aCwgdGhpcy5jdHguY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBjbGlwKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBzcXVhcmVQYXRoID0gbmV3IFBhdGgyRCgpO1xuICAgIHNxdWFyZVBhdGgucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5jbGlwKHNxdWFyZVBhdGgpO1xuICB9XG5cbiAgY3JlYXRlT2Zmc2NyZWVuKCk6IE9mZnNjcmVlbiB7XG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKGN0eCkge1xuICAgICAgKDxhbnk+IGN0eCkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAoPGFueT4gY2FudmFzKS5zdHlsZS5mb250U21vb3RoID0gXCJuZXZlclwiO1xuICAgICAgKDxhbnk+IGNhbnZhcykuc3R5bGUud2Via2l0Rm9udFNtb290aGluZyA9IFwibm9uZVwiO1xuXG4gICAgICByZXR1cm4gbmV3IE9mZnNjcmVlbkltcGwoY2FudmFzLCBjdHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gY3JlYXRlIG9mZnNjcmVlbiBjYW52YXNcIik7XG4gICAgfVxuICB9XG5cbiAgZ2V0T2Zmc2NyZWVuKCk6IE9mZnNjcmVlbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm9mZnNjcmVlbjtcbiAgfVxuXG4gIGRyYXdUb09mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbiB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoc2NyZWVuKSB7XG4gICAgICB0aGlzLmN0eCA9IChzY3JlZW4gYXMgT2Zmc2NyZWVuSW1wbCkuY3R4O1xuICAgICAgdGhpcy5jdHgucmVzZXRUcmFuc2Zvcm0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdHggPSB0aGlzLm1haW5DdHg7XG4gICAgfVxuICAgIHRoaXMub2Zmc2NyZWVuID0gc2NyZWVuO1xuICB9XG5cbiAgZHJhd09mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbik6IHZvaWQge1xuICAgICg8YW55PiB0aGlzLmN0eCkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKChzY3JlZW4gYXMgT2Zmc2NyZWVuSW1wbCkuY2FudmFzLCAwLCAgMCk7XG4gIH1cblxuICBkcmF3U2NhbGVkT2Zmc2NyZWVuKHNjcmVlbjogT2Zmc2NyZWVuLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAoPGFueT4gdGhpcy5jdHgpLndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSgoc2NyZWVuIGFzIE9mZnNjcmVlbkltcGwpLmNhbnZhcywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBkcmF3U2NhbGVkT2Zmc2NyZWVuU2VnbWVudChzY3JlZW46IE9mZnNjcmVlbiwgc3g6IG51bWJlciwgc3k6IG51bWJlciwgc3dpZHRoOiBudW1iZXIsIHNoZWlnaHQ6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgKDxhbnk+IHRoaXMuY3R4KS53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoKHNjcmVlbiBhcyBPZmZzY3JlZW5JbXBsKS5jYW52YXMsIHN4LCBzeSwgc3dpZHRoLCBzaGVpZ2h0LCAgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBjbGVhclJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgZml0U2NyZWVuKHBpeGVsU2NhbGU6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHdpZHRoOiBudW1iZXIgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICAgIGNvbnN0IGhlaWdodDogbnVtYmVyID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApXG4gICAgY29uc3QgcmVhbFdpZHRoOiBudW1iZXIgPSBNYXRoLmZsb29yKHdpZHRoIC8gcGl4ZWxTY2FsZSkgKiBwaXhlbFNjYWxlO1xuICAgIGNvbnN0IHJlYWxIZWlnaHQ6IG51bWJlciA9IE1hdGguZmxvb3IoaGVpZ2h0IC8gcGl4ZWxTY2FsZSkgKiBwaXhlbFNjYWxlO1xuICAgIGNvbnN0IHZpcnR1YWxXaWR0aDogbnVtYmVyID0gcmVhbFdpZHRoIC8gcGl4ZWxTY2FsZTtcbiAgICBjb25zdCB2aXJ0dWFsSGVpZ2h0OiBudW1iZXIgPSByZWFsSGVpZ2h0IC8gcGl4ZWxTY2FsZTtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdmlydHVhbFdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHZpcnR1YWxIZWlnaHQ7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSByZWFsV2lkdGggKyBcInB4XCI7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gcmVhbEhlaWdodCArIFwicHhcIjtcbiAgfVxuXG4gIHNldEFscGhhKGFscGhhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICB9XG4gIFxuICBjb3B5KCk6IEJpdG1hcCB7XG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuICBcbiAgICBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpPy5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIDAsIDApO1xuICAgIHJldHVybiBuZXcgQ29weUJpdG1hcChjYW52YXMpO1xuICB9XG5cbiAgZ2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jdHguY2FudmFzLndpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQ7XG4gIH1cbiAgXG4gIHB1c2goKTogdm9pZCB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICB9XG5cbiAgcG9wKCk6IHZvaWQge1xuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh4LHkpO1xuICB9XG5cbiAgc2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN0eC5zY2FsZSh4LHkpO1xuICB9XG5cbiAgYXBwbHlGb250KCk6IHZvaWQge1xuICAgIHRoaXMuZm9udC5hcHBseSh0aGlzLmN0eCwgdGhpcy5mb250U2l6ZSk7XG4gIH1cblxuICBzZXRGb250KGZvbnQ6IEZvbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZvbnQgPSBmb250O1xuICAgIHRoaXMuYXBwbHlGb250KCk7XG4gIH1cblxuICBzZXRGb250U2l6ZShzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmZvbnRTaXplID0gc2l6ZTtcbiAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICB9XG5cbiAgZ2V0U3RyaW5nV2lkdGgodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gIH1cblxuICBkcmF3U3RyaW5nKHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGNvbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICB9XG5cbiAgc2V0Q29tcG9zaXRlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICg8YW55PiB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24pID0gbmFtZTtcbiAgfVxuXG4gIGRyYXdDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZywgd2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gY29sO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGZpbGxDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbDtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG5cbiAgZmlsbFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2w6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbDtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCh4LHksd2lkdGgsaGVpZ2h0KTtcbiAgfVxuICBcbiAgc2V0TGluZURhc2goc2VnbWVudHM6IG51bWJlcltdKTogdm9pZCB7XG4gICAgdGhpcy5jdHguc2V0TGluZURhc2goc2VnbWVudHMpO1xuICB9XG5cbiAgZHJhd0xpbmUoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgY29sOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIgPSAxKTogdm9pZCB7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBjb2w7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgdGhpcy5jdHgubGluZVRvKHgyLCB5Mik7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3Qml0bWFwKHg6IG51bWJlciwgeTogbnVtYmVyLCBiaXRtYXA6IEJpdG1hcCk6IHZvaWQge1xuICAgIGlmICghYml0bWFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgKDxhbnk+IHRoaXMuY3R4KS53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICBiaXRtYXAuZHJhdyh0aGlzLCB4LCB5KTtcbiAgfVxuXG4gIGRyYXdTY2FsZWRCaXRtYXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBiaXRtYXA6IEJpdG1hcCk6IHZvaWQge1xuICAgIGlmICghYml0bWFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICg8YW55PiB0aGlzLmN0eCkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgYml0bWFwLmRyYXdTY2FsZWQodGhpcywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbn0iLCJpbXBvcnQgeyBNYXBOb2RlIH0gZnJvbSBcIi4uL3BhdGgvTWFwTm9kZVwiO1xuXG5pbnRlcmZhY2UgQ29sIHtcbiAgICByOiBudW1iZXI7XG4gICAgZzogbnVtYmVyO1xuICAgIGI6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4OiBzdHJpbmcpOiBDb2wge1xuICAgIHZhciBiaWdpbnQgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICB2YXIgciA9IChiaWdpbnQgPj4gMTYpICYgMjU1O1xuICAgIHZhciBnID0gKGJpZ2ludCA+PiA4KSAmIDI1NTtcbiAgICB2YXIgYiA9IGJpZ2ludCAmIDI1NTtcblxuICAgIHJldHVybiB7ciwgZywgYn1cbn1cblxuZnVuY3Rpb24gZGVsdGFFKHJnYkE6IENvbCwgcmdiQjogQ29sKSB7XG4gICAgbGV0IGxhYkEgPSByZ2IybGFiKHJnYkEpO1xuICAgIGxldCBsYWJCID0gcmdiMmxhYihyZ2JCKTtcbiAgICBsZXQgZGVsdGFMID0gbGFiQVswXSAtIGxhYkJbMF07XG4gICAgbGV0IGRlbHRhQSA9IGxhYkFbMV0gLSBsYWJCWzFdO1xuICAgIGxldCBkZWx0YUIgPSBsYWJBWzJdIC0gbGFiQlsyXTtcbiAgICBsZXQgYzEgPSBNYXRoLnNxcnQobGFiQVsxXSAqIGxhYkFbMV0gKyBsYWJBWzJdICogbGFiQVsyXSk7XG4gICAgbGV0IGMyID0gTWF0aC5zcXJ0KGxhYkJbMV0gKiBsYWJCWzFdICsgbGFiQlsyXSAqIGxhYkJbMl0pO1xuICAgIGxldCBkZWx0YUMgPSBjMSAtIGMyO1xuICAgIGxldCBkZWx0YUggPSBkZWx0YUEgKiBkZWx0YUEgKyBkZWx0YUIgKiBkZWx0YUIgLSBkZWx0YUMgKiBkZWx0YUM7XG4gICAgZGVsdGFIID0gZGVsdGFIIDwgMCA/IDAgOiBNYXRoLnNxcnQoZGVsdGFIKTtcbiAgICBsZXQgc2MgPSAxLjAgKyAwLjA0NSAqIGMxO1xuICAgIGxldCBzaCA9IDEuMCArIDAuMDE1ICogYzE7XG4gICAgbGV0IGRlbHRhTEtsc2wgPSBkZWx0YUwgLyAoMS4wKTtcbiAgICBsZXQgZGVsdGFDa2NzYyA9IGRlbHRhQyAvIChzYyk7XG4gICAgbGV0IGRlbHRhSGtoc2ggPSBkZWx0YUggLyAoc2gpO1xuICAgIGxldCBpID0gZGVsdGFMS2xzbCAqIGRlbHRhTEtsc2wgKyBkZWx0YUNrY3NjICogZGVsdGFDa2NzYyArIGRlbHRhSGtoc2ggKiBkZWx0YUhraHNoO1xuICAgIHJldHVybiBpIDwgMCA/IDAgOiBNYXRoLnNxcnQoaSk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHJnYjJsYWIocmdiOiBDb2wpe1xuICAgIGxldCByID0gcmdiLnIgLyAyNTUsIGcgPSByZ2IuZyAvIDI1NSwgYiA9IHJnYi5iIC8gMjU1LCB4LCB5LCB6O1xuICAgIHIgPSAociA+IDAuMDQwNDUpID8gTWF0aC5wb3coKHIgKyAwLjA1NSkgLyAxLjA1NSwgMi40KSA6IHIgLyAxMi45MjtcbiAgICBnID0gKGcgPiAwLjA0MDQ1KSA/IE1hdGgucG93KChnICsgMC4wNTUpIC8gMS4wNTUsIDIuNCkgOiBnIC8gMTIuOTI7XG4gICAgYiA9IChiID4gMC4wNDA0NSkgPyBNYXRoLnBvdygoYiArIDAuMDU1KSAvIDEuMDU1LCAyLjQpIDogYiAvIDEyLjkyO1xuICAgIHggPSAociAqIDAuNDEyNCArIGcgKiAwLjM1NzYgKyBiICogMC4xODA1KSAvIDAuOTUwNDc7XG4gICAgeSA9IChyICogMC4yMTI2ICsgZyAqIDAuNzE1MiArIGIgKiAwLjA3MjIpIC8gMS4wMDAwMDtcbiAgICB6ID0gKHIgKiAwLjAxOTMgKyBnICogMC4xMTkyICsgYiAqIDAuOTUwNSkgLyAxLjA4ODgzO1xuICAgIHggPSAoeCA+IDAuMDA4ODU2KSA/IE1hdGgucG93KHgsIDEvMykgOiAoNy43ODcgKiB4KSArIDE2LzExNjtcbiAgICB5ID0gKHkgPiAwLjAwODg1NikgPyBNYXRoLnBvdyh5LCAxLzMpIDogKDcuNzg3ICogeSkgKyAxNi8xMTY7XG4gICAgeiA9ICh6ID4gMC4wMDg4NTYpID8gTWF0aC5wb3coeiwgMS8zKSA6ICg3Ljc4NyAqIHopICsgMTYvMTE2O1xuICAgIHJldHVybiBbKDExNiAqIHkpIC0gMTYsIDUwMCAqICh4IC0geSksIDIwMCAqICh5IC0geildXG4gIH1cblxuZXhwb3J0IGNsYXNzIFBhbGV0dGUge1xuICBjb2xzOiBDb2xbXSA9IFtdO1xuICBtYXBwaW5nOiBSZWNvcmQ8bnVtYmVyLCBDb2w+ID0ge307XG5cbiAgY29uc3RydWN0b3IoaGV4VmFsdWVzOiBzdHJpbmcpIHtcbiAgICBmb3IgKGNvbnN0IGhleCBvZiBoZXhWYWx1ZXMuc3BsaXQoXCJcXG5cIikpIHtcbiAgICAgICAgdGhpcy5jb2xzLnB1c2goaGV4VG9SZ2IoaGV4KSk7XG4gICAgfVxuICB9XG5cbiAgZmluZEJlc3RNYXRjaChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogQ29sIHtcbiAgICBjb25zdCB0b01hdGNoQ29sOiBDb2wgPSB7IHIsIGcsIGIgfTtcbiAgICBsZXQgYmVzdE1hdGNoOiBDb2wgPSB0aGlzLmNvbHNbMF07XG4gICAgbGV0IHNtYWxsZXN0RGVsdGEgPSAxMDAwO1xuXG4gICAgZm9yIChjb25zdCBwYWxDb2wgb2YgdGhpcy5jb2xzKSB7XG4gICAgICAgIGNvbnN0IGRpZiA9IGRlbHRhRShwYWxDb2wsIHRvTWF0Y2hDb2wpO1xuICAgICAgICBpZiAoZGlmIDwgc21hbGxlc3REZWx0YSkge1xuICAgICAgICAgICAgc21hbGxlc3REZWx0YSA9IGRpZjtcbiAgICAgICAgICAgIGJlc3RNYXRjaCA9IHBhbENvbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gIH1cblxuICBhZGp1c3RJbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgICAgICAgY29uc3QgaWQ6IEltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwwLGltYWdlLndpZHRoLGltYWdlLmhlaWdodCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7aTxpZC5kYXRhLmxlbmd0aDtpKz00KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sOiBudW1iZXIgPSBpZC5kYXRhW2ldO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IGlkLmRhdGFbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgZyA9IGlkLmRhdGFbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBpZC5kYXRhW2kgKyAyXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZCA9IHIgfCAoMHhGRjAwICYgKGcgPDwgOCkpIHwgKDB4RkYwMDAwICYgKGIgPDwgMTYpKTtcbiAgICAgICAgICAgICAgICBsZXQgYmVzdE1hdGNoID0gdGhpcy5tYXBwaW5nW2NvbWJpbmVkXTtcbiAgICAgICAgICAgICAgICBpZiAoIWJlc3RNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2ggPSB0aGlzLmZpbmRCZXN0TWF0Y2gociwgZywgYik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwcGluZ1tjb21iaW5lZF0gPSBiZXN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlkLmRhdGFbaV0gPSBiZXN0TWF0Y2gucjtcbiAgICAgICAgICAgICAgICBpZC5kYXRhW2kgKyAxXSA9IGJlc3RNYXRjaC5nO1xuICAgICAgICAgICAgICAgIGlkLmRhdGFbaSArIDJdID0gYmVzdE1hdGNoLmI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKGlkLCAwLCAwKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICByZXN1bHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoXCJGYWlsdXJlIHRvIGNyZWF0ZSBjb250ZXh0XCIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBpc011c2ljT24sIGlzU291bmRPbiB9IGZyb20gXCIuLi9HdXRlXCI7XG5pbXBvcnQgeyBHdXRlTG9nIH0gZnJvbSBcIi4uL0xvZ1wiO1xuaW1wb3J0IHsgU291bmQgfSBmcm9tIFwiLi4vU291bmRcIjtcblxubGV0IEF1ZGlvQ29udGV4dDogYW55O1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8ICg8YW55PndpbmRvdykud2Via2l0QXVkaW9Db250ZXh0O1xufVxuZXhwb3J0IGxldCBBVURJT19DT05URVhUOiBBdWRpb0NvbnRleHQ7XG5cbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gIGlmIChpc011c2ljT24oKSkge1xuICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgaWYgKGRvY3VtZW50LmhpZGRlbikge1xuICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgQVVESU9fQ09OVEVYVC5zdXNwZW5kKCkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIEd1dGVMb2cudHJhY2UoXCJTdXNwZW5kIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgICAgICAgICAgR3V0ZUxvZy50cmFjZShlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIEd1dGVMb2cudHJhY2UoXCJTdXNwZW5kIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgICAgICAgIEd1dGVMb2cudHJhY2UoZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgQVVESU9fQ09OVEVYVC5yZXN1bWUoKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgR3V0ZUxvZy50cmFjZShcIlJlc3VtZSBhdWRpbyBjb250ZXh0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIEd1dGVMb2cudHJhY2UoZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBHdXRlTG9nLnRyYWNlKFwiUmVzdW1lIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgICAgICAgIEd1dGVMb2cudHJhY2UoZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMhLnBsYXkoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMhLnZvbHVtZSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzU291bmRPbigpKSB7XG4gICAgZm9yIChjb25zdCBsb29wIG9mIFNvdW5kSW1wbC5DVVJSRU5UX0xPT1BTKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgIGxvb3Auc3RvcChmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb29wLnBsYXkobG9vcC52b2x1bWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xufVxuXG5leHBvcnQgY2xhc3MgU291bmRJbXBsIGltcGxlbWVudHMgU291bmQge1xuICBzdGF0aWMgQ1VSUkVOVF9NVVNJQzogU291bmRJbXBsIHwgbnVsbDtcbiAgc3RhdGljIENVUlJFTlRfTE9PUFM6IFNvdW5kSW1wbFtdID0gW107XG5cbiAgc3RhdGljIHNvdW5kVm9sdW1lOiBudW1iZXIgPSAxO1xuICBzdGF0aWMgbXVzaWNWb2x1bWU6IG51bWJlciA9IDE7XG5cbiAgc3RhdGljIHNldFNvdW5kVm9sdW1lKHY6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc291bmRWb2x1bWUgPSB2O1xuXG4gICAgZm9yIChjb25zdCBsb29wIG9mIHRoaXMuQ1VSUkVOVF9MT09QUykge1xuICAgICAgbG9vcC5nYWluLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUobG9vcC52b2x1bWUgKiBTb3VuZEltcGwuc291bmRWb2x1bWUsIEFVRElPX0NPTlRFWFQuY3VycmVudFRpbWUgKyAwLjI1KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0U291bmRWb2x1bWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zb3VuZFZvbHVtZTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRNdXNpY1ZvbHVtZSh2OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm11c2ljVm9sdW1lID0gdjtcblxuICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLmdhaW4pIHtcbiAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnZvbHVtZSAqIFNvdW5kSW1wbC5tdXNpY1ZvbHVtZSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSArIDAuMjUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRNdXNpY1ZvbHVtZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm11c2ljVm9sdW1lO1xuICB9XG4gIFxuICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZGF0YSE6IEFycmF5QnVmZmVyO1xuICB2b2x1bWU6IG51bWJlciA9IDE7XG4gIGJ1ZmZlciE6IEF1ZGlvQnVmZmVyO1xuICBtdXNpYzogYm9vbGVhbiA9IGZhbHNlO1xuICBzb3VyY2UhOiBBdWRpb0J1ZmZlclNvdXJjZU5vZGUgfCBudWxsO1xuICBnYWluITogR2Fpbk5vZGU7XG4gIHVybDogc3RyaW5nO1xuICBsb29wZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBtdXNpYzogYm9vbGVhbiwgYXJyYXlCdWZmZXI6IFByb21pc2U8QXJyYXlCdWZmZXI+IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5uYW1lID0gdXJsO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMubXVzaWMgPSBtdXNpYztcbiAgICBcbiAgICBpZiAoYXJyYXlCdWZmZXIpIHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIGFycmF5QnVmZmVyLnRoZW4oKGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBhcnJheUJ1ZmZlcjtcbiAgICAgICAgdGhpcy50cnlMb2FkKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgcmVxLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICBcbiAgICAgIHJlcS5vbmxvYWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdmFyIGFycmF5QnVmZmVyID0gcmVxLnJlc3BvbnNlOyBcbiAgICAgICAgaWYgKGFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gYXJyYXlCdWZmZXI7XG4gICAgICAgICAgdGhpcy50cnlMb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBcbiAgICAgIHJlcS5zZW5kKCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5TG9hZCgpOiB2b2lkIHtcbiAgICBpZiAoQVVESU9fQ09OVEVYVCAmJiB0aGlzLmRhdGEpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBBVURJT19DT05URVhULmRlY29kZUF1ZGlvRGF0YSh0aGlzLmRhdGEsIChidWZmZXI6IEF1ZGlvQnVmZmVyKSA9PiB7XG4gICAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID09PSB0aGlzKSB7XG4gICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBsYXkodGhpcy52b2x1bWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgKGUpID0+IHsgR3V0ZUxvZy5sb2coXCJGYWlsZWQgdG8gbG9hZDogXCIrIHRoaXMudXJsKSB9KTtcbiAgICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge30pLmNhdGNoKChlKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgR3V0ZUxvZy5sb2coXCJkZWNvZGVBdWRpb0RhdGEgZXhjZXB0aW9uIG9uIGxvYWRpbmcgXCIgKyB0aGlzLnVybCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uZmlybUF1ZGlvQ29udGV4dCgpIHtcbiAgICB0cnkge1xuICAgICAgQVVESU9fQ09OVEVYVC5yZXN1bWUoKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBHdXRlTG9nLnRyYWNlKFwiUmVzdW1lIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgICAgICBHdXRlTG9nLnRyYWNlKGUpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgR3V0ZUxvZy50cmFjZShcIlJlc3VtZSBhdWRpbyBjb250ZXh0IGZhaWxlZFwiKTtcbiAgICB9XG4gIH1cblxuICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICAgIGlmICghQVVESU9fQ09OVEVYVCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgQVVESU9fQ09OVEVYVCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgQVVESU9fQ09OVEVYVC5yZXN1bWUoKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIEd1dGVMb2cudHJhY2UoXCJSZXN1bWUgYXVkaW8gY29udGV4dCBmYWlsZWRcIik7XG4gICAgICAgICAgR3V0ZUxvZy50cmFjZShlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIEd1dGVMb2cudHJhY2UoXCJSZXN1bWUgYXVkaW8gY29udGV4dCBmYWlsZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50cnlMb2FkKCk7XG4gIH1cblxuICBwbGF5KHZvbHVtZTogbnVtYmVyLCBsb29wOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpcm1BdWRpb0NvbnRleHQoKTtcbiAgICB0aGlzLnZvbHVtZSA9IHZvbHVtZTtcblxuICAgIGlmICghdGhpcy5idWZmZXIpIHtcbiAgICAgIGlmICh0aGlzLm11c2ljKSB7XG4gICAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9IHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyAhPT0gdGhpcykge1xuICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9IHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRvbid0IHBsYXkgc291bmQgZWZmZWN0cyBpbiB0aGUgYmFja2dyb3VuZCBvciB0aGV5IGFsbFxuICAgICAgLy8gZ2V0IHN0YWNrZWQgdXBcbiAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5tdXNpYyAmJiAhaXNNdXNpY09uKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLm11c2ljICYmICFpc1NvdW5kT24oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc291cmNlID0gQVVESU9fQ09OVEVYVC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICB0aGlzLnNvdXJjZS5idWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICB0aGlzLmdhaW4gPSBBVURJT19DT05URVhULmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLnNvdXJjZS5jb25uZWN0KHRoaXMuZ2Fpbik7XG4gICAgdGhpcy5nYWluLmNvbm5lY3QoQVVESU9fQ09OVEVYVC5kZXN0aW5hdGlvbik7XG5cbiAgICB0aGlzLmxvb3BlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm11c2ljIHx8IGxvb3ApIHtcbiAgICAgIHRoaXMuZ2Fpbi5nYWluLnZhbHVlID0gMDtcbiAgICAgIHRoaXMuc291cmNlLmxvb3AgPSB0cnVlO1xuICAgICAgdGhpcy5sb29wZWQgPSB0cnVlO1xuICAgIH0gXG5cbiAgICB0aGlzLnNvdXJjZS5zdGFydCgwKTtcbiAgICBcbiAgICBpZiAodGhpcy5tdXNpYyB8fCBsb29wKSB7XG4gICAgICB0aGlzLmdhaW4uZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSh2b2x1bWUgKiAobG9vcCA/IFNvdW5kSW1wbC5zb3VuZFZvbHVtZSA6IFNvdW5kSW1wbC5tdXNpY1ZvbHVtZSksIEFVRElPX0NPTlRFWFQuY3VycmVudFRpbWUgKyAyKTtcbiAgICB9ICBlbHNlIHtcbiAgICAgIHRoaXMuZ2Fpbi5nYWluLnZhbHVlID0gdm9sdW1lICogU291bmRJbXBsLnNvdW5kVm9sdW1lO1xuICAgIH1cblxuICAgIGlmIChsb29wKSB7XG4gICAgICBTb3VuZEltcGwuQ1VSUkVOVF9MT09QUy5wdXNoKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AocmVtb3ZlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgaWYgKHRoaXMubG9vcGVkKSB7XG4gICAgICAgIHRoaXMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKDAsIEFVRElPX0NPTlRFWFQuY3VycmVudFRpbWUgKyAzKTtcbiAgICAgICAgY29uc3QgdGVtcFNvdXJjZTogQXVkaW9CdWZmZXJTb3VyY2VOb2RlID0gdGhpcy5zb3VyY2U7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRlbXBTb3VyY2Uuc3RvcCgpO1xuICAgICAgICB9LCA0MDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc291cmNlLnN0b3AoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChyZW1vdmUpIHtcbiAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSBTb3VuZEltcGwuQ1VSUkVOVF9MT09QUy5maW5kSW5kZXgoYSA9PiBhID09PSB0aGlzKTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX0xPT1BTLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBCaXRtYXAsIEdyYXBoaWNzLCBHdXRlTG9nIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBzaG91bGRQcmVzY2FsZVRpbGVzZXRzLCBzaG91bGRVc2VYYnIgfSBmcm9tIFwiLi4vR3V0ZVwiO1xuaW1wb3J0IHsgVGlsZXNldCB9IGZyb20gXCIuLi9UaWxlc2V0XCI7XG5pbXBvcnQgeyBHcmFwaGljc0ltcGwgfSBmcm9tIFwiLi9HcmFwaGljc0ltcGxcIjtcbmltcG9ydCB7IFBhbGV0dGUgfSBmcm9tIFwiLi9QYWxldHRlXCI7XG5cbmltcG9ydCB7IHhicjJ4LCB4YnIzeCwgeGJyNHggfSBmcm9tICd4YnItanMnO1xuXG5jbGFzcyBUaWxlIGltcGxlbWVudHMgQml0bWFwIHtcbiAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsb2FkZWQ6IGJvb2xlYW47XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzY2FsZTogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmcgPSBcInRpbGVcIjtcbiAgY2FjaGVkOiBSZWNvcmQ8bnVtYmVyLCBIVE1MQ2FudmFzRWxlbWVudD4gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxJbWFnZUVsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgc2NhbGU6IG51bWJlcikge1xuICAgIHRoaXMuaW1hZ2UgPSBjYW52YXM7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICB9XG5cbiAgZHJhdyhncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY3R4ID0gKGdyYXBoaWNzIGFzIEdyYXBoaWNzSW1wbCkuY3R4O1xuXG4gICAgaWYgKCFzaG91bGRQcmVzY2FsZVRpbGVzZXRzKCkgJiYgc2hvdWxkVXNlWGJyKCkgJiYgKHRoaXMuc2NhbGUgPT09IDIgfHwgdGhpcy5zY2FsZSA9PT0gMykpIHtcbiAgICAgIGlmICghdGhpcy5jYWNoZWRbdGhpcy5zY2FsZV0pIHtcbiAgICAgICAgdGhpcy5jYWNoZWRbdGhpcy5zY2FsZV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNhY2hlZFt0aGlzLnNjYWxlXS53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIHRoaXMuY2FjaGVkW3RoaXMuc2NhbGVdLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmNhY2hlZFt0aGlzLnNjYWxlXS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGN0eCEuZHJhd0ltYWdlKHRoaXMuaW1hZ2UhLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICBjb25zdCBvcmlnaW5hbEltYWdlRGF0YSA9IGN0eCEuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxQaXhlbFZpZXcgPSBuZXcgVWludDMyQXJyYXkob3JpZ2luYWxJbWFnZURhdGEuZGF0YS5idWZmZXIpO1xuICAgICAgICBjb25zdCBzY2FsZWRQaXhlbFZpZXcgPSB0aGlzLnNjYWxlID09PSAyID8geGJyMngob3JpZ2luYWxQaXhlbFZpZXcsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSA6IHhicjN4KG9yaWdpbmFsUGl4ZWxWaWV3LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgY29uc3QgZGVzdFdpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuc2NhbGU7XG4gICAgICAgIGNvbnN0IGRlc3RIZWlnaHQgPSB0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGU7XG4gICAgICAgIHRoaXMuY2FjaGVkW3RoaXMuc2NhbGVdLndpZHRoID0gZGVzdFdpZHRoO1xuICAgICAgICB0aGlzLmNhY2hlZFt0aGlzLnNjYWxlXS5oZWlnaHQgPSBkZXN0SGVpZ2h0O1xuICAgICAgICBjb25zdCBzY2FsZWRJbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKG5ldyBVaW50OENsYW1wZWRBcnJheShzY2FsZWRQaXhlbFZpZXcuYnVmZmVyKSwgdGhpcy5jYWNoZWRbdGhpcy5zY2FsZV0ud2lkdGgsIHRoaXMuY2FjaGVkW3RoaXMuc2NhbGVdLmhlaWdodCk7XG5cbiAgICAgICAgY3R4IS5wdXRJbWFnZURhdGEoc2NhbGVkSW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgIH1cbiAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYWNoZWRbdGhpcy5zY2FsZV0sIHgsIHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoIC0gMC4xLCB0aGlzLmhlaWdodCAtIDAuMSwgeCwgeSwgdGhpcy53aWR0aCAqIHRoaXMuc2NhbGUsIHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZSk7XG4gICAgfVxuICB9XG5cbiAgZHJhd1NjYWxlZChncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGN0eCA9IChncmFwaGljcyBhcyBHcmFwaGljc0ltcGwpLmN0eDtcbiAgICBjb25zdCBzY2FsZSA9IE1hdGgubWluKE1hdGguZmxvb3Iod2lkdGggLyB0aGlzLndpZHRoKSwgTWF0aC5mbG9vcihoZWlnaHQgLyB0aGlzLmhlaWdodCkpO1xuXG4gICAgaWYgKCFzaG91bGRQcmVzY2FsZVRpbGVzZXRzKCkgJiYgc2hvdWxkVXNlWGJyKCkgJiYgKHNjYWxlID09PSAyIHx8IHNjYWxlID09PSAzKSkge1xuICAgICAgaWYgKCF0aGlzLmNhY2hlZFtzY2FsZV0pIHtcbiAgICAgICAgdGhpcy5jYWNoZWRbc2NhbGVdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jYWNoZWRbc2NhbGVdLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5jYWNoZWRbc2NhbGVdLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmNhY2hlZFtzY2FsZV0uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHghLmRyYXdJbWFnZSh0aGlzLmltYWdlISwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZURhdGEgPSBjdHghLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUGl4ZWxWaWV3ID0gbmV3IFVpbnQzMkFycmF5KG9yaWdpbmFsSW1hZ2VEYXRhLmRhdGEuYnVmZmVyKTtcbiAgICAgICAgY29uc3Qgc2NhbGVkUGl4ZWxWaWV3ID0gc2NhbGUgPT09IDIgPyB4YnIyeChvcmlnaW5hbFBpeGVsVmlldywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpIDogeGJyM3gob3JpZ2luYWxQaXhlbFZpZXcsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICBjb25zdCBkZXN0V2lkdGggPSB0aGlzLndpZHRoICogc2NhbGU7XG4gICAgICAgIGNvbnN0IGRlc3RIZWlnaHQgPSB0aGlzLmhlaWdodCAqIHNjYWxlO1xuICAgICAgICB0aGlzLmNhY2hlZFtzY2FsZV0ud2lkdGggPSBkZXN0V2lkdGg7XG4gICAgICAgIHRoaXMuY2FjaGVkW3NjYWxlXS5oZWlnaHQgPSBkZXN0SGVpZ2h0O1xuICAgICAgICBjb25zdCBzY2FsZWRJbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKG5ldyBVaW50OENsYW1wZWRBcnJheShzY2FsZWRQaXhlbFZpZXcuYnVmZmVyKSwgdGhpcy5jYWNoZWRbc2NhbGVdLndpZHRoLCB0aGlzLmNhY2hlZFtzY2FsZV0uaGVpZ2h0KTtcblxuICAgICAgICBjdHghLnB1dEltYWdlRGF0YShzY2FsZWRJbWFnZURhdGEsIDAsIDApO1xuICAgICAgfVxuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhY2hlZFtzY2FsZV0sIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdE9uRmlyc3RDbGljaygpOiB2b2lkIHtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGlsZXNldEltcGwgaW1wbGVtZW50cyBUaWxlc2V0IHtcbiAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHRpbGVXaWR0aDogbnVtYmVyO1xuICB0aWxlSGVpZ2h0OiBudW1iZXI7XG4gIG9yaWdpbmFsVGlsZVdpZHRoOiBudW1iZXI7XG4gIG9yaWdpbmFsVGlsZUhlaWdodDogbnVtYmVyO1xuICBpbWFnZTogYW55IHwgbnVsbDtcbiAgYml0bWFwczogVGlsZVtdID0gW107XG4gIHNjYW5saW5lOiBudW1iZXIgPSAwO1xuICB0aWxlQ291bnQ6IG51bWJlciA9IDA7XG4gIHRpbnRzOiBSZWNvcmQ8c3RyaW5nLCBIVE1MSW1hZ2VFbGVtZW50PiA9IHt9O1xuICB0aW50VGlsZXM6IFJlY29yZDxzdHJpbmcsIEJpdG1hcFtdPiA9IHt9O1xuICBzY2FsZTogbnVtYmVyO1xuICBvbkxvYWRlZDogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcbiAgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBkYXRhVXJsTG9hZGVyOiBQcm9taXNlPEJsb2I+IHwgdW5kZWZpbmVkLCB0aWxlV2lkdGg6IG51bWJlciwgdGlsZUhlaWdodDogbnVtYmVyLCBzY2FsZTogbnVtYmVyID0gMSwgcGFsOiBQYWxldHRlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy50aWxlV2lkdGggPSB0aGlzLm9yaWdpbmFsVGlsZVdpZHRoID0gdGlsZVdpZHRoO1xuICAgIHRoaXMudGlsZUhlaWdodCA9IHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0ID0gdGlsZUhlaWdodDtcbiAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgdGhpcy5uYW1lID0gdXJsO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgIHRoaXMuaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICAgIEd1dGVMb2cubG9nKFwiRXJyb3IgbG9hZGluZzogXCIgKyB1cmwpO1xuICAgIH1cbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGlmIChzaG91bGRQcmVzY2FsZVRpbGVzZXRzKCkgJiYgc2NhbGUgIT09IDEpIHtcbiAgICAgICAgY29uc3Qgc2NhbGVkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXG4gICAgICAgIGlmIChzaG91bGRVc2VYYnIoKSkge1xuICAgICAgICAgIGNvbnN0IGN0eCA9IHNjYWxlZEltYWdlLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICBjdHghLmRyYXdJbWFnZSh0aGlzLmltYWdlISwgMCwgMCk7XG5cbiAgICAgICAgICBjb25zdCBvcmlnaW5hbEltYWdlRGF0YSA9IGN0eCEuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuaW1hZ2UhLndpZHRoLCB0aGlzLmltYWdlIS5oZWlnaHQpO1xuICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUGl4ZWxWaWV3ID0gbmV3IFVpbnQzMkFycmF5KG9yaWdpbmFsSW1hZ2VEYXRhLmRhdGEuYnVmZmVyKTtcbiAgICAgICAgICBjb25zdCBzY2FsZWRQaXhlbFZpZXcgPSBzY2FsZSA9PT0gMiA/IHhicjJ4KG9yaWdpbmFsUGl4ZWxWaWV3LCB0aGlzLmltYWdlIS53aWR0aCwgdGhpcy5pbWFnZSEuaGVpZ2h0KSA6IHhicjN4KG9yaWdpbmFsUGl4ZWxWaWV3LCB0aGlzLmltYWdlIS53aWR0aCwgdGhpcy5pbWFnZSEuaGVpZ2h0KTtcblxuICAgICAgICAgIHNjYWxlZEltYWdlLndpZHRoID0gdGhpcy5pbWFnZSEud2lkdGggKiBzY2FsZTtcbiAgICAgICAgICBzY2FsZWRJbWFnZS5oZWlnaHQgPSB0aGlzLmltYWdlIS5oZWlnaHQgKiBzY2FsZTtcbiAgICAgICAgICBjb25zdCBzY2FsZWRJbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKG5ldyBVaW50OENsYW1wZWRBcnJheShzY2FsZWRQaXhlbFZpZXcuYnVmZmVyKSwgc2NhbGVkSW1hZ2Uud2lkdGgsIHNjYWxlZEltYWdlLmhlaWdodCk7XG5cbiAgICAgICAgICBjdHghLnB1dEltYWdlRGF0YShzY2FsZWRJbWFnZURhdGEsIDAsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjYWxlZEltYWdlLndpZHRoID0gdGhpcy5pbWFnZSEud2lkdGggKiBzY2FsZTtcbiAgICAgICAgICBzY2FsZWRJbWFnZS5oZWlnaHQgPSB0aGlzLmltYWdlIS5oZWlnaHQgKiBzY2FsZTtcbiAgICAgICAgICBjb25zdCBjdHggPSBzY2FsZWRJbWFnZS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgY3R4IS5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAoPGFueT5jdHghKS53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICBjdHg/LmRyYXdJbWFnZSh0aGlzLmltYWdlISwgMCwgMCwgc2NhbGVkSW1hZ2Uud2lkdGgsIHNjYWxlZEltYWdlLmhlaWdodCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBzY2FsZWRJbWFnZTtcbiAgICAgICAgdGhpcy50aWxlV2lkdGggKj0gc2NhbGU7XG4gICAgICAgIHRoaXMudGlsZUhlaWdodCAqPSBzY2FsZTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCAqPSBzY2FsZTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFRpbGVIZWlnaHQgKj0gc2NhbGU7XG4gICAgICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgICAgICBzY2FsZSA9IDE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2NhbmxpbmUgPSBNYXRoLmZsb29yKHRoaXMuaW1hZ2UhLndpZHRoIC8gdGhpcy50aWxlV2lkdGgpO1xuICAgICAgY29uc3QgZGVwdGg6IG51bWJlciA9IE1hdGguZmxvb3IodGhpcy5pbWFnZSEuaGVpZ2h0IC8gdGhpcy50aWxlSGVpZ2h0KTtcbiAgICAgIHRoaXMudGlsZUNvdW50ID0gZGVwdGggKiB0aGlzLnNjYW5saW5lO1xuXG4gICAgICBpZiAocGFsKSB7XG4gICAgICAgIHBhbC5hZGp1c3RJbWFnZSh0aGlzLmltYWdlISkudGhlbigoaW1hZ2UpID0+IHtcbiAgICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG5cbiAgICAgICAgICAvLyBjdXQgdGhlIGltYWdlIGludG8gcGllY2VzXG4gICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBkZXB0aDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc2NhbmxpbmU7IHgrKykge1xuICAgICAgICAgICAgICB0aGlzLmJpdG1hcHMucHVzaChuZXcgVGlsZSh0aGlzLmltYWdlISwgeCAqIHRoaXMudGlsZVdpZHRoLCB5ICogdGhpcy50aWxlSGVpZ2h0LCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0LCBzY2FsZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRpbGVXaWR0aCAqPSBzY2FsZTtcbiAgICAgICAgICB0aGlzLnRpbGVIZWlnaHQgKj0gc2NhbGU7XG5cbiAgICAgICAgICB0aGlzLm9uTG9hZGVkKCk7XG4gICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3V0IHRoZSBpbWFnZSBpbnRvIHBpZWNlc1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGRlcHRoOyB5KyspIHtcbiAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc2NhbmxpbmU7IHgrKykge1xuICAgICAgICAgICAgdGhpcy5iaXRtYXBzLnB1c2gobmV3IFRpbGUodGhpcy5pbWFnZSEsIHggKiB0aGlzLnRpbGVXaWR0aCwgeSAqIHRoaXMudGlsZUhlaWdodCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCwgc2NhbGUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aWxlV2lkdGggKj0gc2NhbGU7XG4gICAgICAgIHRoaXMudGlsZUhlaWdodCAqPSBzY2FsZTtcblxuICAgICAgICB0aGlzLm9uTG9hZGVkKCk7XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGRhdGFVcmxMb2FkZXIpIHtcbiAgICAgIGRhdGFVcmxMb2FkZXIudGhlbigoYmxvYjogQmxvYikgPT4ge1xuICAgICAgICB2YXIgdXJsQ3JlYXRvciA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcbiAgICAgICAgdGhpcy5pbWFnZSEuc3JjID0gdXJsQ3JlYXRvci5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltYWdlLnNyYyA9IHVybDtcbiAgICB9XG4gIH1cblxuICBnZXRUaWxlc0Fjcm9zcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNjYW5saW5lO1xuICB9XG5cbiAgZ2V0VGlsZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGlsZVdpZHRoO1xuICB9XG5cbiAgZ2V0VGlsZUhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRpbGVIZWlnaHQ7XG4gIH1cblxuICBnZXRUaWxlQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50aWxlQ291bnQ7XG4gIH1cblxuICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICB9XG5cbiAgZ2V0VGlsZSh0aWxlOiBudW1iZXIpOiBCaXRtYXAge1xuICAgIHJldHVybiB0aGlzLmJpdG1hcHNbdGlsZV07XG4gIH1cblxuICBnZXRTaGFkZWRUaWxlKHRpbGU6IG51bWJlciwgdGludE5hbWU6IHN0cmluZywgc2hhZGU6IG51bWJlcik6IEJpdG1hcCB7XG4gICAgbGV0IHRpbGVzID0gdGhpcy50aW50VGlsZXNbdGludE5hbWVdO1xuICAgIGlmICghdGlsZXMpIHtcbiAgICAgIHRpbGVzID0gdGhpcy50aW50VGlsZXNbdGludE5hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IHRpbGVSZWNvcmQgPSB0aWxlc1t0aWxlXTtcbiAgICBpZiAoIXRpbGVSZWNvcmQpIHtcbiAgICAgIGNvbnN0IHg6IG51bWJlciA9IHRpbGUgJSB0aGlzLnNjYW5saW5lO1xuICAgICAgY29uc3QgeTogbnVtYmVyID0gTWF0aC5mbG9vcih0aWxlIC8gdGhpcy5zY2FubGluZSk7XG4gICAgICBsZXQgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLnRpbnRzW3RpbnROYW1lXTtcbiAgICAgIGlmICghaW1hZ2UpIHtcbiAgICAgICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuaW1hZ2UhLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5pbWFnZSEuaGVpZ2h0O1xuICAgICAgICBjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlISwgMCwgMCk7XG4gICAgICAgICAgY29uc3QgaWQ6IEltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgICAgIGlkLmRhdGFbaV0gKj0gc2hhZGU7XG4gICAgICAgICAgICBpZC5kYXRhW2kgKyAxXSAqPSBzaGFkZTtcbiAgICAgICAgICAgIGlkLmRhdGFbaSArIDJdICo9IHNoYWRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKGlkLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgIHRoaXMudGludHNbdGludE5hbWVdID0gaW1hZ2U7XG4gICAgICB9XG5cbiAgICAgIHRpbGVSZWNvcmQgPSB0aWxlc1t0aWxlXSA9IG5ldyBUaWxlKGltYWdlLCB4ICogdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCwgeSAqIHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0LCB0aGlzLm9yaWdpbmFsVGlsZVdpZHRoLCB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCwgdGhpcy5zY2FsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRpbGVSZWNvcmQ7XG4gIH1cblxuICBnZXRUaW50ZWRUaWxlKHRpbGU6IG51bWJlciwgdGludE5hbWU6IHN0cmluZywgdGludDogbnVtYmVyW10pOiBCaXRtYXAge1xuICAgIGxldCB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXTtcbiAgICBpZiAoIXRpbGVzKSB7XG4gICAgICB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCB0aWxlUmVjb3JkID0gdGlsZXNbdGlsZV07XG4gICAgaWYgKCF0aWxlUmVjb3JkKSB7XG4gICAgICBjb25zdCB4OiBudW1iZXIgPSB0aWxlICUgdGhpcy5zY2FubGluZTtcbiAgICAgIGNvbnN0IHk6IG51bWJlciA9IE1hdGguZmxvb3IodGlsZSAvIHRoaXMuc2NhbmxpbmUpO1xuICAgICAgbGV0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gdGhpcy50aW50c1t0aW50TmFtZV07XG4gICAgICBpZiAoIWltYWdlKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmltYWdlIS53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UhLmhlaWdodDtcbiAgICAgICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIDAsIDApO1xuICAgICAgICAgIGNvbnN0IGlkOiBJbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZC5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgICAgICAvLyBsZWF2ZSBibGFjayBhbG9uZVxuICAgICAgICAgICAgY29uc3QgYXZnOiBudW1iZXIgPSAoaWQuZGF0YVtpXSArIGlkLmRhdGFbaSArIDFdICsgaWQuZGF0YVtpICsgMl0pIC8gMztcbiAgICAgICAgICAgIGlkLmRhdGFbaV0gPSBNYXRoLmZsb29yKGF2ZyAqIHRpbnRbMF0pO1xuICAgICAgICAgICAgaWQuZGF0YVtpICsgMV0gPSBNYXRoLmZsb29yKGF2ZyAqIHRpbnRbMV0pO1xuICAgICAgICAgICAgaWQuZGF0YVtpICsgMl0gPSBNYXRoLmZsb29yKGF2ZyAqIHRpbnRbMl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKGlkLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgIHRoaXMudGludHNbdGludE5hbWVdID0gaW1hZ2U7XG4gICAgICB9XG5cbiAgICAgIHRpbGVSZWNvcmQgPSB0aWxlc1t0aWxlXSA9IG5ldyBUaWxlKGltYWdlLCB4ICogdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCwgeSAqIHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0LCB0aGlzLm9yaWdpbmFsVGlsZVdpZHRoLCB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCwgdGhpcy5zY2FsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRpbGVSZWNvcmQ7XG4gIH1cblxuICBtb2RpZnkobW9kaWZpY2F0aW9uOiAoaW1hZ2VEYXRhOiBJbWFnZURhdGEpID0+IHZvaWQpOiBUaWxlc2V0IHtcbiAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSB0aGlzLmltYWdlIS53aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5pbWFnZSEuaGVpZ2h0O1xuICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlISwgMCwgMCk7XG4gICAgICBjb25zdCBpZDogSW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgbW9kaWZpY2F0aW9uKGlkKTtcbiAgICAgIGN0eC5wdXRJbWFnZURhdGEoaWQsIDAsIDApO1xuICAgIH1cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgZm9yIChjb25zdCB0aWxlIG9mIHRoaXMuYml0bWFwcykge1xuICAgICAgdGlsZS5pbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRCbG9ja0NvbG9yVGlsZSh0aWxlOiBudW1iZXIsIHRpbnROYW1lOiBzdHJpbmcsIGNvbDogbnVtYmVyW10pOiBCaXRtYXAge1xuICAgIGxldCB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXTtcbiAgICBpZiAoIXRpbGVzKSB7XG4gICAgICB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCB0aWxlUmVjb3JkID0gdGlsZXNbdGlsZV07XG4gICAgaWYgKCF0aWxlUmVjb3JkKSB7XG4gICAgICBjb25zdCB4OiBudW1iZXIgPSB0aWxlICUgdGhpcy5zY2FubGluZTtcbiAgICAgIGNvbnN0IHk6IG51bWJlciA9IE1hdGguZmxvb3IodGlsZSAvIHRoaXMuc2NhbmxpbmUpO1xuICAgICAgbGV0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gdGhpcy50aW50c1t0aW50TmFtZV07XG4gICAgICBpZiAoIWltYWdlKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmltYWdlIS53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UhLmhlaWdodDtcbiAgICAgICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIDAsIDApO1xuICAgICAgICAgIGNvbnN0IGlkOiBJbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZC5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgICAgICBpZC5kYXRhW2ldID0gTWF0aC5mbG9vcigyNTUgKiBjb2xbMF0pO1xuICAgICAgICAgICAgaWQuZGF0YVtpICsgMV0gPSBNYXRoLmZsb29yKDI1NSAqIGNvbFsxXSk7XG4gICAgICAgICAgICBpZC5kYXRhW2kgKyAyXSA9IE1hdGguZmxvb3IoMjU1ICogY29sWzJdKTtcbiAgICAgICAgICAgIGlkLmRhdGFbaSArIDNdID0gTWF0aC5mbG9vcihpZC5kYXRhW2kgKyAzXSAqIGNvbFszXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaWQsIDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgdGhpcy50aW50c1t0aW50TmFtZV0gPSBpbWFnZTtcbiAgICAgIH1cblxuICAgICAgdGlsZVJlY29yZCA9IHRpbGVzW3RpbGVdID0gbmV3IFRpbGUoaW1hZ2UsIHggKiB0aGlzLm9yaWdpbmFsVGlsZVdpZHRoLCB5ICogdGhpcy5vcmlnaW5hbFRpbGVIZWlnaHQsIHRoaXMub3JpZ2luYWxUaWxlV2lkdGgsIHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0LCB0aGlzLnNjYWxlKVxuICAgIH1cbiAgICByZXR1cm4gdGlsZVJlY29yZDtcbiAgfVxufSIsImV4cG9ydCB7c3RhcnRHYW1lLCBpc011c2ljT24sIGlzU291bmRPbiwgc2V0TXVzaWNPbiwgc2V0U291bmRPbiwgc2V0UHJlc2NhbGVUaWxlc2V0cywgUmVuZGVyZXIgfSBmcm9tIFwiLi9HdXRlXCI7XG5leHBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuL0dhbWVDb250ZXh0XCI7XG5leHBvcnQgeyBHcmFwaGljcywgV0hJVEUsIEJMQUNLLCBHUkVFTiwgUkVELCBCTFVFLCBPZmZzY3JlZW4gfSBmcm9tIFwiLi9HcmFwaGljc1wiO1xuZXhwb3J0IHsgZ2V0TWF4VGV4dHVyZVNpemUgfSBmcm9tIFwiLi9vcGVuZ2wvT3BlbkdMR3JhcGhpY3NJbXBsXCI7XG5leHBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vR2FtZVwiO1xuZXhwb3J0IHsgR3V0ZUxvZyB9IGZyb20gXCIuL0xvZ1wiO1xuZXhwb3J0IHsgQml0bWFwIH0gZnJvbSBcIi4vQml0bWFwXCI7XG5leHBvcnQgeyBGb250IH0gZnJvbSBcIi4vRm9udFwiO1xuZXhwb3J0IHsgU291bmQgfSBmcm9tIFwiLi9Tb3VuZFwiO1xuZXhwb3J0IHsgVGlsZXNldCB9IGZyb20gXCIuL1RpbGVzZXRcIjtcbmV4cG9ydCB7IEtleXMgfSBmcm9tIFwiLi9LZXlzXCI7XG5leHBvcnQgeyBBU3RhclBhdGhGaW5kZXIgfSBmcm9tIFwiLi9wYXRoL0FTdGFyUGF0aEZpbmRlclwiO1xuZXhwb3J0IHsgUGF0aEZpbmRlck1hcCB9IGZyb20gXCIuL3BhdGgvUGF0aEZpbmRlck1hcFwiO1xuZXhwb3J0IHsgUGF0aCB9IGZyb20gXCIuL3BhdGgvUGF0aFwiO1xuZXhwb3J0IHsgUGF0aE1vdmVyIH0gZnJvbSBcIi4vcGF0aC9QYXRoTW92ZXJcIjtcbmV4cG9ydCB7IFN0ZXAgfSBmcm9tIFwiLi9wYXRoL1N0ZXBcIjtcbmV4cG9ydCB7IExEVEtXb3JsZCwgTERUS0xheWVyQ29tcHJlc3Npb24gfSBmcm9tIFwiLi90aWxlbWFwcy9MRFRLV29ybGRcIjtcbmV4cG9ydCB7IE1hcFdvcmxkIH0gZnJvbSBcIi4vdGlsZW1hcHMvTWFwV29ybGRcIjtcbmV4cG9ydCB7IE1hcExldmVsIH0gZnJvbSBcIi4vdGlsZW1hcHMvTWFwTGV2ZWxcIjtcbmV4cG9ydCB7IE1hcExheWVyIH0gZnJvbSBcIi4vdGlsZW1hcHMvTWFwTGF5ZXJcIjtcbmV4cG9ydCB7IE1hcEVudGl0eSB9IGZyb20gXCIuL3RpbGVtYXBzL01hcEVudGl0eVwiO1xuZXhwb3J0IHsgU291bmRTY2FwZSwgU291bmRFYXNpbmcgfSBmcm9tIFwiLi9Tb3VuZFNjYXBlXCJcbiIsImltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcIi4uL0dyYXBoaWNzXCI7XG5pbXBvcnQgeyBQYWxldHRlIH0gZnJvbSBcIi4uL2ltcGwvUGFsZXR0ZVwiO1xuaW1wb3J0IHsgT3BlbkdMR3JhcGhpY3NJbXBsIH0gZnJvbSBcIi4vT3BlbkdMR3JhcGhpY3NJbXBsXCI7XG5pbXBvcnQgeyBJT3BlbkdMQml0bWFwIH0gZnJvbSBcIi4vT3BlbkdMQml0bWFwXCI7XG5pbXBvcnQgeyBHdXRlTG9nIH0gZnJvbSBcIi4uL0xvZ1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBPcGVuR0xCaXRtYXAgaW1wbGVtZW50cyBJT3BlbkdMQml0bWFwIHtcbiAgd2lkdGg6IG51bWJlciA9IDA7XG4gIGhlaWdodDogbnVtYmVyID0gMDtcbiAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIG5hbWU6IHN0cmluZztcbiAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHRleFg6IG51bWJlciA9IDA7XG4gIHRleFk6IG51bWJlciA9IDA7XG4gIHRleEluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGdyYXBoaWNzOiBPcGVuR0xHcmFwaGljc0ltcGwsIHVybDogc3RyaW5nLCBkYXRhVXJsTG9hZGVyOiBQcm9taXNlPHN0cmluZz4gfCB1bmRlZmluZWQsIHBhbDogUGFsZXR0ZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCkge1xuICAgIGdyYXBoaWNzLnJlZ2lzdGVySW1hZ2UodGhpcyk7XG5cbiAgICB0aGlzLm5hbWUgPSB1cmw7XG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICAgIEd1dGVMb2cubG9nKFwiRXJyb3IgbG9hZGluZzogXCIgKyB1cmwpO1xuICAgIH07XG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5pbWFnZS53aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQ7XG5cbiAgICAgIGlmIChwYWwpIHtcbiAgICAgICAgcGFsLmFkanVzdEltYWdlKHRoaXMuaW1hZ2UpLnRoZW4oKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICBncmFwaGljcy5uZXdSZXNvdXJjZUxvYWRlZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgZ3JhcGhpY3MubmV3UmVzb3VyY2VMb2FkZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGRhdGFVcmxMb2FkZXIpIHtcbiAgICAgIGRhdGFVcmxMb2FkZXIudGhlbigoYmFzZTY0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBcImRhdGE6XCIgKyB1cmwuc3Vic3RyaW5nKHVybC5sZW5ndGggLSAzKSArIFwiO2Jhc2U2NCxcIiArIGJhc2U2NDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltYWdlLnNyYyA9IHVybDtcbiAgICB9XG4gIH1cblxuICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBnID0gKGdyYXBoaWNzIGFzIE9wZW5HTEdyYXBoaWNzSW1wbCk7XG4gICAgZy5fZHJhd0JpdG1hcCh0aGlzLCB4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gIH1cblxuICBkcmF3U2NhbGVkKGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZyA9IChncmFwaGljcyBhcyBPcGVuR0xHcmFwaGljc0ltcGwpO1xuICAgIGcuX2RyYXdCaXRtYXAodGhpcywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEJpdG1hcCB9IGZyb20gXCIuLi9CaXRtYXBcIjtcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcIi4uL0dyYXBoaWNzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9wZW5HTEJpdG1hcCB7XG4gICAgdGV4WDogbnVtYmVyO1xuICAgIHRleFk6IG51bWJlcjtcbiAgICB0ZXhJbmRleDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgaW1hZ2U/OiBIVE1MSW1hZ2VFbGVtZW50O1xufVxuXG5leHBvcnQgY2xhc3MgTnVsbEJpdG1hcCBpbXBsZW1lbnRzIEJpdG1hcCB7XG4gICAgd2lkdGg6IG51bWJlciA9IDA7XG4gICAgaGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIGxvYWRlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgbmFtZTogc3RyaW5nID0gXCJudWxsXCI7XG5cbiAgICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBkcmF3U2NhbGVkKGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgfVxuXG4gICAgaW5pdE9uRmlyc3RDbGljaygpOiB2b2lkIHtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBCaXRtYXAgfSBmcm9tIFwiLi4vQml0bWFwXCI7XG5pbXBvcnQgeyBGb250IH0gZnJvbSBcIi4uL0ZvbnRcIjtcbmltcG9ydCB7IEdyYXBoaWNzLCBPZmZzY3JlZW4gfSBmcm9tIFwiLi4vR3JhcGhpY3NcIjtcbmltcG9ydCB7IEd1dGVMb2cgfSBmcm9tIFwiLi4vTG9nXCI7XG5pbXBvcnQgeyBJT3BlbkdMQml0bWFwLCBOdWxsQml0bWFwIH0gZnJvbSBcIi4vT3BlbkdMQml0bWFwXCI7XG5pbXBvcnQgeyBPcGVuR0xCaXRtYXAgfSBmcm9tIFwiLi9PcGVuR0xCaXRtYXAuMVwiO1xuaW1wb3J0IHsgT3BlbkdsT2Zmc2NyZWVuIH0gZnJvbSBcIi4vT3BlbkdMT2Zmc2NyZWVuXCI7XG5pbXBvcnQgeyBSZW5kZXJpbmdTdGF0ZSB9IGZyb20gXCIuL1JlbmRlcmluZ1N0YXRlXCI7XG5pbXBvcnQgcG90cGFjayBmcm9tIFwicG90cGFja1wiXG5cbmZ1bmN0aW9uIHBhcnNlQ29sb3IoaW5wdXQ6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICBsZXQgbW07XG4gICAgbGV0IG07XG4gICAgLy8gT2J2aW91c2x5LCB0aGUgbnVtZXJpYyB2YWx1ZXMgd2lsbCBiZSBlYXNpZXIgdG8gcGFyc2UgdGhhbiBuYW1lcy5TbyB3ZSBkbyB0aG9zZSBmaXJzdC5cbiAgICBtbSA9IGlucHV0Lm1hdGNoKC9eIz8oWzAtOWEtZl17M30pJC9pKTtcbiAgICBpZiAobW0pIHtcbiAgICAgICAgbSA9IG1tWzFdO1xuICAgICAgICAvLyBpbiB0aHJlZS1jaGFyYWN0ZXIgZm9ybWF0LCBlYWNoIHZhbHVlIGlzIG11bHRpcGxpZWQgYnkgMHgxMSB0byBnaXZlIGFuXG4gICAgICAgIC8vIGV2ZW4gc2NhbGUgZnJvbSAweDAwIHRvIDB4ZmZcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHBhcnNlSW50KG0uY2hhckF0KDApLCAxNikgKiAweDExLFxuICAgICAgICAgICAgcGFyc2VJbnQobS5jaGFyQXQoMSksIDE2KSAqIDB4MTEsXG4gICAgICAgICAgICBwYXJzZUludChtLmNoYXJBdCgyKSwgMTYpICogMHgxMSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLy8gVGhhdCdzIG9uZS4gTm93IGZvciB0aGUgZnVsbCBzaXgtZGlnaXQgZm9ybWF0OiBcbiAgICBtbSA9IGlucHV0Lm1hdGNoKC9eIz8oWzAtOWEtZl17Nn0pJC9pKTtcbiAgICBpZiAobW0pIHtcbiAgICAgICAgbSA9IG1tWzFdO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgcGFyc2VJbnQobS5zdWJzdHIoMCwgMiksIDE2KSxcbiAgICAgICAgICAgIHBhcnNlSW50KG0uc3Vic3RyKDIsIDIpLCAxNiksXG4gICAgICAgICAgICBwYXJzZUludChtLnN1YnN0cig0LCAyKSwgMTYpLFxuICAgICAgICAgICAgMVxuICAgICAgICBdO1xuICAgIH1cbiAgICAvLyBBbmQgbm93IGZvciByZ2IoKSBmb3JtYXQ6XG4gICAgbW0gPSBpbnB1dC5tYXRjaCgvXnJnYmFcXHMqXFwoXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyosXFxzKihbKy1dPyhbMC05XSpbLl0pP1swLTldKylcXHMqXFwpJC9pKTtcbiAgICBpZiAobW0pIHtcbiAgICAgICAgcmV0dXJuIFtOdW1iZXIucGFyc2VJbnQobW1bMV0pLCBOdW1iZXIucGFyc2VJbnQobW1bMl0pLCBOdW1iZXIucGFyc2VJbnQobW1bM10pLCBOdW1iZXIucGFyc2VGbG9hdChtbVs0XSldO1xuICAgIH1cbiAgICBtbSA9IGlucHV0Lm1hdGNoKC9ecmdiXFxzKlxcKFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqXFwpJC9pKTtcbiAgICBpZiAobW0pIHtcbiAgICAgICAgcmV0dXJuIFtOdW1iZXIucGFyc2VJbnQobW1bMV0pLCBOdW1iZXIucGFyc2VJbnQobW1bMl0pLCBOdW1iZXIucGFyc2VJbnQobW1bM10pLCAxXTtcbiAgICB9XG4gICAgLy8gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jb2xvcnMvY29sb3JzX25hbWVzLmFzcFxuICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlYl9jb2xvcnNcbiAgICAvLyBodHRwOi8vd3d3LmNvbG9ycy5jb21tdXRlcmNyZWF0aXZlLmNvbS9ncmlkL1xuICAgIHZhciB3ZWJDb2xvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAgIFwiQWxpY2VCbHVlXCI6IFwiI0YwRjhGRlwiLFxuICAgICAgICBcIkFudGlxdWVXaGl0ZVwiOiBcIiNGQUVCRDdcIixcbiAgICAgICAgXCJBcXVhXCI6IFwiIzAwRkZGRlwiLFxuICAgICAgICBcIkFxdWFtYXJpbmVcIjogXCIjN0ZGRkQ0XCIsXG4gICAgICAgIFwiQXp1cmVcIjogXCIjRjBGRkZGXCIsXG4gICAgICAgIFwiQmVpZ2VcIjogXCIjRjVGNURDXCIsXG4gICAgICAgIFwiQmlzcXVlXCI6IFwiI0ZGRTRDNFwiLFxuICAgICAgICBcIkJsYWNrXCI6IFwiIzAwMDAwMFwiLFxuICAgICAgICBcIkJsYW5jaGVkQWxtb25kXCI6IFwiI0ZGRUJDRFwiLFxuICAgICAgICBcIkJsdWVcIjogXCIjMDAwMEZGXCIsXG4gICAgICAgIFwiQmx1ZVZpb2xldFwiOiBcIiM4QTJCRTJcIixcbiAgICAgICAgXCJCcm93blwiOiBcIiNBNTJBMkFcIixcbiAgICAgICAgXCJCdXJseVdvb2RcIjogXCIjREVCODg3XCIsXG4gICAgICAgIFwiQ2FkZXRCbHVlXCI6IFwiIzVGOUVBMFwiLFxuICAgICAgICBcIkNoYXJ0cmV1c2VcIjogXCIjN0ZGRjAwXCIsXG4gICAgICAgIFwiQ2hvY29sYXRlXCI6IFwiI0QyNjkxRVwiLFxuICAgICAgICBcIkNvcmFsXCI6IFwiI0ZGN0Y1MFwiLFxuICAgICAgICBcIkNvcm5mbG93ZXJCbHVlXCI6IFwiIzY0OTVFRFwiLFxuICAgICAgICBcIkNvcm5zaWxrXCI6IFwiI0ZGRjhEQ1wiLFxuICAgICAgICBcIkNyaW1zb25cIjogXCIjREMxNDNDXCIsXG4gICAgICAgIFwiQ3lhblwiOiBcIiMwMEZGRkZcIixcbiAgICAgICAgXCJEYXJrQmx1ZVwiOiBcIiMwMDAwOEJcIixcbiAgICAgICAgXCJEYXJrQ3lhblwiOiBcIiMwMDhCOEJcIixcbiAgICAgICAgXCJEYXJrR29sZGVuUm9kXCI6IFwiI0I4ODYwQlwiLFxuICAgICAgICBcIkRhcmtHcmF5XCI6IFwiI0E5QTlBOVwiLFxuICAgICAgICBcIkRhcmtHcmV5XCI6IFwiI0E5QTlBOVwiLFxuICAgICAgICBcIkRhcmtHcmVlblwiOiBcIiMwMDY0MDBcIixcbiAgICAgICAgXCJEYXJrS2hha2lcIjogXCIjQkRCNzZCXCIsXG4gICAgICAgIFwiRGFya01hZ2VudGFcIjogXCIjOEIwMDhCXCIsXG4gICAgICAgIFwiRGFya09saXZlR3JlZW5cIjogXCIjNTU2QjJGXCIsXG4gICAgICAgIFwiRGFya09yYW5nZVwiOiBcIiNGRjhDMDBcIixcbiAgICAgICAgXCJEYXJrT3JjaGlkXCI6IFwiIzk5MzJDQ1wiLFxuICAgICAgICBcIkRhcmtSZWRcIjogXCIjOEIwMDAwXCIsXG4gICAgICAgIFwiRGFya1NhbG1vblwiOiBcIiNFOTk2N0FcIixcbiAgICAgICAgXCJEYXJrU2VhR3JlZW5cIjogXCIjOEZCQzhGXCIsXG4gICAgICAgIFwiRGFya1NsYXRlQmx1ZVwiOiBcIiM0ODNEOEJcIixcbiAgICAgICAgXCJEYXJrU2xhdGVHcmF5XCI6IFwiIzJGNEY0RlwiLFxuICAgICAgICBcIkRhcmtTbGF0ZUdyZXlcIjogXCIjMkY0RjRGXCIsXG4gICAgICAgIFwiRGFya1R1cnF1b2lzZVwiOiBcIiMwMENFRDFcIixcbiAgICAgICAgXCJEYXJrVmlvbGV0XCI6IFwiIzk0MDBEM1wiLFxuICAgICAgICBcIkRlZXBQaW5rXCI6IFwiI0ZGMTQ5M1wiLFxuICAgICAgICBcIkRlZXBTa3lCbHVlXCI6IFwiIzAwQkZGRlwiLFxuICAgICAgICBcIkRpbUdyYXlcIjogXCIjNjk2OTY5XCIsXG4gICAgICAgIFwiRGltR3JleVwiOiBcIiM2OTY5NjlcIixcbiAgICAgICAgXCJEb2RnZXJCbHVlXCI6IFwiIzFFOTBGRlwiLFxuICAgICAgICBcIkZpcmVCcmlja1wiOiBcIiNCMjIyMjJcIixcbiAgICAgICAgXCJGbG9yYWxXaGl0ZVwiOiBcIiNGRkZBRjBcIixcbiAgICAgICAgXCJGb3Jlc3RHcmVlblwiOiBcIiMyMjhCMjJcIixcbiAgICAgICAgXCJGdWNoc2lhXCI6IFwiI0ZGMDBGRlwiLFxuICAgICAgICBcIkdhaW5zYm9yb1wiOiBcIiNEQ0RDRENcIixcbiAgICAgICAgXCJHaG9zdFdoaXRlXCI6IFwiI0Y4RjhGRlwiLFxuICAgICAgICBcIkdvbGRcIjogXCIjRkZENzAwXCIsXG4gICAgICAgIFwiR29sZGVuUm9kXCI6IFwiI0RBQTUyMFwiLFxuICAgICAgICBcIkdyYXlcIjogXCIjODA4MDgwXCIsXG4gICAgICAgIFwiR3JleVwiOiBcIiM4MDgwODBcIixcbiAgICAgICAgXCJHcmVlblwiOiBcIiMwMDgwMDBcIixcbiAgICAgICAgXCJHcmVlblllbGxvd1wiOiBcIiNBREZGMkZcIixcbiAgICAgICAgXCJIb25leURld1wiOiBcIiNGMEZGRjBcIixcbiAgICAgICAgXCJIb3RQaW5rXCI6IFwiI0ZGNjlCNFwiLFxuICAgICAgICBcIkluZGlhblJlZCBcIjogXCIjQ0Q1QzVDXCIsXG4gICAgICAgIFwiSW5kaWdvIFwiOiBcIiM0QjAwODJcIixcbiAgICAgICAgXCJJdm9yeVwiOiBcIiNGRkZGRjBcIixcbiAgICAgICAgXCJLaGFraVwiOiBcIiNGMEU2OENcIixcbiAgICAgICAgXCJMYXZlbmRlclwiOiBcIiNFNkU2RkFcIixcbiAgICAgICAgXCJMYXZlbmRlckJsdXNoXCI6IFwiI0ZGRjBGNVwiLFxuICAgICAgICBcIkxhd25HcmVlblwiOiBcIiM3Q0ZDMDBcIixcbiAgICAgICAgXCJMZW1vbkNoaWZmb25cIjogXCIjRkZGQUNEXCIsXG4gICAgICAgIFwiTGlnaHRCbHVlXCI6IFwiI0FERDhFNlwiLFxuICAgICAgICBcIkxpZ2h0Q29yYWxcIjogXCIjRjA4MDgwXCIsXG4gICAgICAgIFwiTGlnaHRDeWFuXCI6IFwiI0UwRkZGRlwiLFxuICAgICAgICBcIkxpZ2h0R29sZGVuUm9kWWVsbG93XCI6IFwiI0ZBRkFEMlwiLFxuICAgICAgICBcIkxpZ2h0R3JheVwiOiBcIiNEM0QzRDNcIixcbiAgICAgICAgXCJMaWdodEdyZXlcIjogXCIjRDNEM0QzXCIsXG4gICAgICAgIFwiTGlnaHRHcmVlblwiOiBcIiM5MEVFOTBcIixcbiAgICAgICAgXCJMaWdodFBpbmtcIjogXCIjRkZCNkMxXCIsXG4gICAgICAgIFwiTGlnaHRTYWxtb25cIjogXCIjRkZBMDdBXCIsXG4gICAgICAgIFwiTGlnaHRTZWFHcmVlblwiOiBcIiMyMEIyQUFcIixcbiAgICAgICAgXCJMaWdodFNreUJsdWVcIjogXCIjODdDRUZBXCIsXG4gICAgICAgIFwiTGlnaHRTbGF0ZUdyYXlcIjogXCIjNzc4ODk5XCIsXG4gICAgICAgIFwiTGlnaHRTbGF0ZUdyZXlcIjogXCIjNzc4ODk5XCIsXG4gICAgICAgIFwiTGlnaHRTdGVlbEJsdWVcIjogXCIjQjBDNERFXCIsXG4gICAgICAgIFwiTGlnaHRZZWxsb3dcIjogXCIjRkZGRkUwXCIsXG4gICAgICAgIFwiTGltZVwiOiBcIiMwMEZGMDBcIixcbiAgICAgICAgXCJMaW1lR3JlZW5cIjogXCIjMzJDRDMyXCIsXG4gICAgICAgIFwiTGluZW5cIjogXCIjRkFGMEU2XCIsXG4gICAgICAgIFwiTWFnZW50YVwiOiBcIiNGRjAwRkZcIixcbiAgICAgICAgXCJNYXJvb25cIjogXCIjODAwMDAwXCIsXG4gICAgICAgIFwiTWVkaXVtQXF1YU1hcmluZVwiOiBcIiM2NkNEQUFcIixcbiAgICAgICAgXCJNZWRpdW1CbHVlXCI6IFwiIzAwMDBDRFwiLFxuICAgICAgICBcIk1lZGl1bU9yY2hpZFwiOiBcIiNCQTU1RDNcIixcbiAgICAgICAgXCJNZWRpdW1QdXJwbGVcIjogXCIjOTM3MERCXCIsXG4gICAgICAgIFwiTWVkaXVtU2VhR3JlZW5cIjogXCIjM0NCMzcxXCIsXG4gICAgICAgIFwiTWVkaXVtU2xhdGVCbHVlXCI6IFwiIzdCNjhFRVwiLFxuICAgICAgICBcIk1lZGl1bVNwcmluZ0dyZWVuXCI6IFwiIzAwRkE5QVwiLFxuICAgICAgICBcIk1lZGl1bVR1cnF1b2lzZVwiOiBcIiM0OEQxQ0NcIixcbiAgICAgICAgXCJNZWRpdW1WaW9sZXRSZWRcIjogXCIjQzcxNTg1XCIsXG4gICAgICAgIFwiTWlkbmlnaHRCbHVlXCI6IFwiIzE5MTk3MFwiLFxuICAgICAgICBcIk1pbnRDcmVhbVwiOiBcIiNGNUZGRkFcIixcbiAgICAgICAgXCJNaXN0eVJvc2VcIjogXCIjRkZFNEUxXCIsXG4gICAgICAgIFwiTW9jY2FzaW5cIjogXCIjRkZFNEI1XCIsXG4gICAgICAgIFwiTmF2YWpvV2hpdGVcIjogXCIjRkZERUFEXCIsXG4gICAgICAgIFwiTmF2eVwiOiBcIiMwMDAwODBcIixcbiAgICAgICAgXCJPbGRMYWNlXCI6IFwiI0ZERjVFNlwiLFxuICAgICAgICBcIk9saXZlXCI6IFwiIzgwODAwMFwiLFxuICAgICAgICBcIk9saXZlRHJhYlwiOiBcIiM2QjhFMjNcIixcbiAgICAgICAgXCJPcmFuZ2VcIjogXCIjRkZBNTAwXCIsXG4gICAgICAgIFwiT3JhbmdlUmVkXCI6IFwiI0ZGNDUwMFwiLFxuICAgICAgICBcIk9yY2hpZFwiOiBcIiNEQTcwRDZcIixcbiAgICAgICAgXCJQYWxlR29sZGVuUm9kXCI6IFwiI0VFRThBQVwiLFxuICAgICAgICBcIlBhbGVHcmVlblwiOiBcIiM5OEZCOThcIixcbiAgICAgICAgXCJQYWxlVHVycXVvaXNlXCI6IFwiI0FGRUVFRVwiLFxuICAgICAgICBcIlBhbGVWaW9sZXRSZWRcIjogXCIjREI3MDkzXCIsXG4gICAgICAgIFwiUGFwYXlhV2hpcFwiOiBcIiNGRkVGRDVcIixcbiAgICAgICAgXCJQZWFjaFB1ZmZcIjogXCIjRkZEQUI5XCIsXG4gICAgICAgIFwiUGVydVwiOiBcIiNDRDg1M0ZcIixcbiAgICAgICAgXCJQaW5rXCI6IFwiI0ZGQzBDQlwiLFxuICAgICAgICBcIlBsdW1cIjogXCIjRERBMEREXCIsXG4gICAgICAgIFwiUG93ZGVyQmx1ZVwiOiBcIiNCMEUwRTZcIixcbiAgICAgICAgXCJQdXJwbGVcIjogXCIjODAwMDgwXCIsXG4gICAgICAgIFwiUmViZWNjYVB1cnBsZVwiOiBcIiM2NjMzOTlcIixcbiAgICAgICAgXCJSZWRcIjogXCIjRkYwMDAwXCIsXG4gICAgICAgIFwiUm9zeUJyb3duXCI6IFwiI0JDOEY4RlwiLFxuICAgICAgICBcIlJveWFsQmx1ZVwiOiBcIiM0MTY5RTFcIixcbiAgICAgICAgXCJTYWRkbGVCcm93blwiOiBcIiM4QjQ1MTNcIixcbiAgICAgICAgXCJTYWxtb25cIjogXCIjRkE4MDcyXCIsXG4gICAgICAgIFwiU2FuZHlCcm93blwiOiBcIiNGNEE0NjBcIixcbiAgICAgICAgXCJTZWFHcmVlblwiOiBcIiMyRThCNTdcIixcbiAgICAgICAgXCJTZWFTaGVsbFwiOiBcIiNGRkY1RUVcIixcbiAgICAgICAgXCJTaWVubmFcIjogXCIjQTA1MjJEXCIsXG4gICAgICAgIFwiU2lsdmVyXCI6IFwiI0MwQzBDMFwiLFxuICAgICAgICBcIlNreUJsdWVcIjogXCIjODdDRUVCXCIsXG4gICAgICAgIFwiU2xhdGVCbHVlXCI6IFwiIzZBNUFDRFwiLFxuICAgICAgICBcIlNsYXRlR3JheVwiOiBcIiM3MDgwOTBcIixcbiAgICAgICAgXCJTbGF0ZUdyZXlcIjogXCIjNzA4MDkwXCIsXG4gICAgICAgIFwiU25vd1wiOiBcIiNGRkZBRkFcIixcbiAgICAgICAgXCJTcHJpbmdHcmVlblwiOiBcIiMwMEZGN0ZcIixcbiAgICAgICAgXCJTdGVlbEJsdWVcIjogXCIjNDY4MkI0XCIsXG4gICAgICAgIFwiVGFuXCI6IFwiI0QyQjQ4Q1wiLFxuICAgICAgICBcIlRlYWxcIjogXCIjMDA4MDgwXCIsXG4gICAgICAgIFwiVGhpc3RsZVwiOiBcIiNEOEJGRDhcIixcbiAgICAgICAgXCJUb21hdG9cIjogXCIjRkY2MzQ3XCIsXG4gICAgICAgIFwiVHVycXVvaXNlXCI6IFwiIzQwRTBEMFwiLFxuICAgICAgICBcIlZpb2xldFwiOiBcIiNFRTgyRUVcIixcbiAgICAgICAgXCJXaGVhdFwiOiBcIiNGNURFQjNcIixcbiAgICAgICAgXCJXaGl0ZVwiOiBcIiNGRkZGRkZcIixcbiAgICAgICAgXCJXaGl0ZVNtb2tlXCI6IFwiI0Y1RjVGNVwiLFxuICAgICAgICBcIlllbGxvd1wiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJZZWxsb3dHcmVlblwiOiBcIiM5QUNEMzJcIixcbiAgICAgICAgXCJUcmFuc3BhcmVudFwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICB9O1xuICAgIGZvciAodmFyIHAgaW4gd2ViQ29sb3JzKSB7XG4gICAgICAgIHdlYkNvbG9yc1twLnRvTG93ZXJDYXNlKCldID0gd2ViQ29sb3JzW3BdO1xuICAgIH1cbiAgICB2YXIgd2MgPSB3ZWJDb2xvcnNbaW5wdXQudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKHdjICE9IG51bGwpXG4gICAgICAgIHJldHVybiBwYXJzZUNvbG9yKHdjKTtcbiAgICB0aHJvdyBFcnJvcihcIidcIiArIGlucHV0ICsgXCInIGlzIG5vdCBhIHZhbGlkIGNvbG9yLi4uXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sVG9OdW1iZXIoaW5wdXQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IHJlc3VsdCA9IENPTF9DQUNIRVtpbnB1dF07XG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHJnYmEgPSBwYXJzZUNvbG9yKGlucHV0KTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAocmdiYVswXSAqICgyNTYgKiAyNTYgKiAyNTYpKSArIChyZ2JhWzFdICogKDI1NiAqIDI1NikpICsgKHJnYmFbMl0gKiAyNTYpICsgTWF0aC5mbG9vcihyZ2JhWzNdICogMjU1KTtcbiAgICAgICAgQ09MX0NBQ0hFW2lucHV0XSA9IHZhbHVlO1xuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoQ09MX0NBQ0hFKS5sZW5ndGggPT09IDIwMDApIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiMjAwMCBjb2xvciBjYWNoZXMgaGF2ZSBiZWVuIGNyZWF0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5kZWNsYXJlIGxldCBJbnN0YWxsVHJpZ2dlcjogYW55O1xudmFyIGlzRmlyZWZveCA9IHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG5jb25zdCBDT0xfQ0FDSEU6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XG5cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXhUZXh0dXJlU2l6ZSgpOiBudW1iZXIge1xuICAgIGlmICh3aW5kb3cuV2ViR0xSZW5kZXJpbmdDb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJywgeyBhbnRpYWxpYXM6IGZhbHNlLCBhbHBoYTogZmFsc2UsIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSB9KSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAgICBpZiAoIWdsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX1NJWkUpO1xufVxuXG5leHBvcnQgY2xhc3MgT3BlbkdMR3JhcGhpY3NJbXBsIGltcGxlbWVudHMgR3JhcGhpY3MsIFJlbmRlcmluZ1N0YXRlIHtcbiAgICBzdGF0aWMgTlVMTF9DT1BZOiBOdWxsQml0bWFwID0gbmV3IE51bGxCaXRtYXAoKTtcbiAgICBcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIG9mZnNjcmVlbjogT2Zmc2NyZWVuIHwgbnVsbCA9IG51bGw7XG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcbiAgICBleHRlbnNpb24/OiBBTkdMRV9pbnN0YW5jZWRfYXJyYXlzO1xuXG4gICAgaW1hZ2VzOiBJT3BlbkdMQml0bWFwW10gPSBbXTtcbiAgICBhdGxhc1RleHR1cmVzOiBXZWJHTFRleHR1cmVbXSB8IG51bGwgPSBudWxsO1xuICAgIGN1cnJlbnRUZXh0dXJlOiBXZWJHTFRleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgICB0ZXhXaWR0aDogbnVtYmVyID0gMDtcbiAgICB0ZXhIZWlnaHQ6IG51bWJlciA9IDA7XG5cbiAgICBvZmZzY3JlZW5JZDogbnVtYmVyID0gMTtcbiAgICBvZmZzY3JlZW5zOiBPcGVuR2xPZmZzY3JlZW5bXSA9IFtdO1xuICAgIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGFycmF5QnVmZmVyPzogQXJyYXlCdWZmZXI7XG4gICAgc2hhZGVyUHJvZ3JhbT86IFdlYkdMUHJvZ3JhbTtcbiAgICBnbEJ1ZmZlcj86IFdlYkdMQnVmZmVyIHwgbnVsbDtcbiAgICBtYXhEcmF3czogbnVtYmVyID0gMTAwMDA7XG4gICAgcG9zaXRpb25zPzogSW50MTZBcnJheTtcbiAgICByZ2Jhcz86IFVpbnQzMkFycmF5O1xuICAgIGRyYXdzOiBudW1iZXIgPSAwO1xuXG4gICAgY2xpcFg6IG51bWJlciA9IDA7XG4gICAgY2xpcFk6IG51bWJlciA9IDA7XG4gICAgY2xpcFgyOiBudW1iZXIgPSAwO1xuICAgIGNsaXBZMjogbnVtYmVyID0gMDtcbiAgICBhbHBoYTogbnVtYmVyID0gMjU1O1xuXG4gICAgY3VycmVudENvbnRleHRTdGF0ZTogUmVuZGVyaW5nU3RhdGU7XG5cbiAgICB0cmFuc2Zvcm1DYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHRyYW5zZm9ybUN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHVuaWZvcm1zOiBSZWNvcmQ8c3RyaW5nLCBXZWJHTFVuaWZvcm1Mb2NhdGlvbj4gPSB7fTtcbiAgICBzYXZlczogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtQ3R4ID0gdGhpcy50cmFuc2Zvcm1DYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpITtcblxuICAgICAgICB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUgPSB0aGlzO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVjYW52YXNcIik7XG4gICAgICAgICg8YW55PnRoaXMuY2FudmFzKS5zdHlsZS5mb250U21vb3RoID0gXCJuZXZlclwiO1xuICAgICAgICAoPGFueT50aGlzLmNhbnZhcykuc3R5bGUud2Via2l0Rm9udFNtb290aGluZyA9IFwibm9uZVwiO1xuXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJnbGNvbnRleHRsb3N0XCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb3N0Q29udGV4dCgpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJnbGNvbnRleHRyZXN0b3JlZFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVjb3ZlckNvbnRleHQoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGlmIChpc0ZpcmVmb3gpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gXCJjcmlzcC1lZGdlc1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSBcInBpeGVsYXRlZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nbCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcsIHsgYW50aWFsaWFzOiBmYWxzZSwgYWxwaGE6IGZhbHNlLCBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IGZhbHNlIH0pIGFzIFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcbiAgICAgICAgdGhpcy5pbml0R2xSZXNvdXJjZXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvc3RDb250ZXh0KCk6IHZvaWQge1xuICAgICAgICBHdXRlTG9nLmxvZyhcIkxPU1QgR0wgQ09OVEVYVFwiKTtcbiAgICAgICAgdGhpcy5zaGFkZXJQcm9ncmFtID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmF0bGFzVGV4dHVyZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVjb3ZlckNvbnRleHQoKTogdm9pZCB7XG4gICAgICAgIEd1dGVMb2cubG9nKFwiUkVDT1ZFUkVEIEdMIENPTlRFWFRcIik7XG4gICAgICAgIHRoaXMuaW5pdEdsUmVzb3VyY2VzKCk7XG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlT25Mb2FkZWQoKTtcbiAgICAgICAgZm9yIChjb25zdCBvZmZzY3JlZW4gb2YgdGhpcy5vZmZzY3JlZW5zKSB7XG4gICAgICAgICAgICBvZmZzY3JlZW4ucmVjb3ZlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIEd1dGVMb2cubG9nKFwiUkVDUkVBVEUgR0wgUkVTT1VSQ0VTXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEdsUmVzb3VyY2VzKCk6IHZvaWQge1xuICAgICAgICBHdXRlTG9nLmxvZyhcIkluaXQgR0wgUmVzb3VyY2VzXCIpO1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLmdsLmdldEV4dGVuc2lvbignQU5HTEVfaW5zdGFuY2VkX2FycmF5cycpIGFzIEFOR0xFX2luc3RhbmNlZF9hcnJheXNcbiAgICAgICAgdGhpcy5leHRlbnNpb24gPSBleHRlbnNpb247XG5cbiAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5TUkNfQUxQSEEsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpO1xuICAgICAgICB0aGlzLmdsLmRpc2FibGUodGhpcy5nbC5ERVBUSF9URVNUKTtcblxuICAgICAgICBjb25zdCBzaG9ydHNQZXJJbWFnZVBvc2l0aW9uID0gMlxuICAgICAgICBjb25zdCBzaG9ydHNQZXJJbWFnZVNpemUgPSAyXG4gICAgICAgIGNvbnN0IHNob3J0c1BlckltYWdlVGV4UG9zID0gNFxuICAgICAgICBjb25zdCBieXRlc1BlckltYWdlUmdiYSA9IDRcblxuICAgICAgICBjb25zdCBieXRlc1BlckltYWdlID0gc2hvcnRzUGVySW1hZ2VQb3NpdGlvbiAqIDIgKyBzaG9ydHNQZXJJbWFnZVNpemUgKiAyICsgc2hvcnRzUGVySW1hZ2VUZXhQb3MgKiAyICsgYnl0ZXNQZXJJbWFnZVJnYmE7XG5cbiAgICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLm1heERyYXdzICogYnl0ZXNQZXJJbWFnZSlcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSBuZXcgSW50MTZBcnJheSh0aGlzLmFycmF5QnVmZmVyKVxuICAgICAgICB0aGlzLnJnYmFzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuYXJyYXlCdWZmZXIpXG5cbiAgICAgICAgY29uc3QgdmVydENvZGUgPSBcIlxcXG5cdFx0XHRhdHRyaWJ1dGUgdmVjMiBhU2l6ZU11bHQ7XFxcblx0XHRcdGF0dHJpYnV0ZSB2ZWMyIGFQb3M7XFxcblx0XHRcdGF0dHJpYnV0ZSB2ZWMyIGFTaXplO1xcXG5cdFx0XHRhdHRyaWJ1dGUgdmVjNCBhVGV4UG9zO1xcXG5cdFx0XHRhdHRyaWJ1dGUgdmVjNCBhUmdiYTtcXFxuXHRcdFx0XFxcblx0XHRcdHZhcnlpbmcgaGlnaHAgdmVjMiBmcmFnVGV4dHVyZVBvcztcXFxuXHRcdFx0dmFyeWluZyB2ZWM0IGZyYWdBYmdyO1xcXG5cdFx0XHRcXFxuXHRcdFx0dW5pZm9ybSB2ZWMyIHVDYW52YXNTaXplO1xcXG5cdFx0XHR1bmlmb3JtIHZlYzIgdVRleFNpemU7XFxcblx0XHRcdFxcXG5cdFx0XHR2b2lkIG1haW4odm9pZCl7XFxcblx0XHRcdFx0Z2xfUG9zaXRpb24ueCA9ICggKGFQb3MueCArIChhU2l6ZS54ICogYVNpemVNdWx0LngpICkgLyB1Q2FudmFzU2l6ZS54ICkgLSAxLjA7IFxcXG4gICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24ueSA9IDEuMCAtICAoIChhUG9zLnkgKyAoYVNpemUueSAqIGFTaXplTXVsdC55KSApIC8gdUNhbnZhc1NpemUueSApOyBcXFxuICAgICAgICAgICAgICAgIGdsX1Bvc2l0aW9uLnogPSAwLjA7IFxcXG4gICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24udyA9IDEuMDsgXFxcbiAgICAgICAgICAgICAgICBcXFxuXHRcdFx0XHRmcmFnVGV4dHVyZVBvcyA9IChhVGV4UG9zLnh5ICsgYVRleFBvcy56dyAqIGFTaXplTXVsdCkgLyB1VGV4U2l6ZTtcXFxuICAgICAgICAgICAgICAgIFxcXG4gICAgICAgICAgICAgICAgZnJhZ0FiZ3IueCA9IGFSZ2JhLncvMjU1LjA7IFxcXG4gICAgICAgICAgICAgICAgZnJhZ0FiZ3IueSA9IGFSZ2JhLnovMjU1LjA7IFxcXG4gICAgICAgICAgICAgICAgZnJhZ0FiZ3IueiA9IGFSZ2JhLnkvMjU1LjA7IFxcXG4gICAgICAgICAgICAgICAgZnJhZ0FiZ3IudyA9IGFSZ2JhLngvMjU1LjA7IFxcXG5cdFx0XHR9XFxcblx0XHRcIlxuXG4gICAgICAgIC8vIENyZWF0ZSBhIHZlcnRleCBzaGFkZXIgb2JqZWN0IHdpdGggY29kZS5cbiAgICAgICAgY29uc3QgdmVydFNoYWRlciA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKHRoaXMuZ2wuVkVSVEVYX1NIQURFUikgYXMgV2ViR0xTaGFkZXJcbiAgICAgICAgdGhpcy5nbC5zaGFkZXJTb3VyY2UodmVydFNoYWRlciwgdmVydENvZGUpXG4gICAgICAgIHRoaXMuZ2wuY29tcGlsZVNoYWRlcih2ZXJ0U2hhZGVyKVxuXG4gICAgICAgIC8vIEZyYWdtZW50IHNoYWRlciBzb3VyY2UgY29kZS5cbiAgICAgICAgY29uc3QgZnJhZ0NvZGUgPSBcIlxcXG5cdFx0XHR2YXJ5aW5nIGhpZ2hwIHZlYzIgZnJhZ1RleHR1cmVQb3M7XFxcblx0XHRcdHZhcnlpbmcgaGlnaHAgdmVjNCBmcmFnQWJncjtcXFxuXHRcdFx0dW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7XFxcblx0XHRcdFxcXG5cdFx0XHR2b2lkIG1haW4odm9pZCl7XFxcblx0XHRcdFx0Z2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCBmcmFnVGV4dHVyZVBvcykgKiBmcmFnQWJncjtcXFxuXHRcdFx0fVxcXG5cdFx0XCJcblxuICAgICAgICBjb25zdCBmcmFnU2hhZGVyID0gdGhpcy5nbC5jcmVhdGVTaGFkZXIodGhpcy5nbC5GUkFHTUVOVF9TSEFERVIpIGFzIFdlYkdMU2hhZGVyO1xuICAgICAgICB0aGlzLmdsLnNoYWRlclNvdXJjZShmcmFnU2hhZGVyLCBmcmFnQ29kZSk7XG4gICAgICAgIHRoaXMuZ2wuY29tcGlsZVNoYWRlcihmcmFnU2hhZGVyKTtcblxuICAgICAgICBjb25zdCBzaGFkZXJQcm9ncmFtID0gdGhpcy5nbC5jcmVhdGVQcm9ncmFtKCkgYXMgV2ViR0xQcm9ncmFtXG4gICAgICAgIHRoaXMuZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRTaGFkZXIpO1xuICAgICAgICB0aGlzLmdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCBmcmFnU2hhZGVyKTtcbiAgICAgICAgdGhpcy5nbC5saW5rUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICAgICAgICB0aGlzLnNoYWRlclByb2dyYW0gPSBzaGFkZXJQcm9ncmFtO1xuXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpKVxuICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IFVpbnQ4QXJyYXkoWzAsIDEsIDIsIDIsIDEsIDNdKSwgdGhpcy5nbC5TVEFUSUNfRFJBVylcblxuICAgICAgICAvLyBPdXIgbXVsdGlwbGllciBhcnJheSBmb3Igd2lkdGgvaGVpZ2h0IHNvIHdlIGNhbiBnZXQgdG8gZWFjaCBjb3JuZXIgb2YgdGhlIGltYWdlIGRyYXduLlxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCkpXG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0pLCB0aGlzLmdsLlNUQVRJQ19EUkFXKVxuXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgXCJhU2l6ZU11bHRcIilcbiAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyaWJ1dGUpXG4gICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihhdHRyaWJ1dGUsIDIsIHRoaXMuZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKVxuXG4gICAgICAgIHRoaXMuZ2xCdWZmZXIgPSB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHRoaXMuZ2xCdWZmZXIpXG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdGhpcy5hcnJheUJ1ZmZlciwgdGhpcy5nbC5EWU5BTUlDX0RSQVcpXG5cbiAgICAgICAgbGV0IGJ5dGVPZmZzZXQgPSAwO1xuXG4gICAgICAgIGNvbnN0IHNldHVwQXR0cmlidXRlID0gKG5hbWU6IHN0cmluZywgZGF0YVR5cGU6IG51bWJlciwgYW1vdW50OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNoYWRlclByb2dyYW0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgbmFtZSlcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHJpYnV0ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZSwgYW1vdW50LCBkYXRhVHlwZSwgZmFsc2UsIGJ5dGVzUGVySW1hZ2UsIGJ5dGVPZmZzZXQpXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbi52ZXJ0ZXhBdHRyaWJEaXZpc29yQU5HTEUoYXR0cmlidXRlLCAxKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgPT0gdGhpcy5nbC5TSE9SVClcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCAqPSAyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSA9PSB0aGlzLmdsLkZMT0FUKVxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50ICo9IDRcbiAgICAgICAgICAgICAgICAgICAgYnl0ZU9mZnNldCArPSBhbW91bnRcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBHdXRlTG9nLmxvZyhcIkF0dHJpYnV0ZSBub3QgZm91bmQ6IFwiICsgbmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0dXBBdHRyaWJ1dGUoXCJhUG9zXCIsIHRoaXMuZ2wuU0hPUlQsIHNob3J0c1BlckltYWdlUG9zaXRpb24pO1xuICAgICAgICBzZXR1cEF0dHJpYnV0ZShcImFTaXplXCIsIHRoaXMuZ2wuU0hPUlQsIHNob3J0c1BlckltYWdlU2l6ZSk7XG4gICAgICAgIHNldHVwQXR0cmlidXRlKFwiYVRleFBvc1wiLCB0aGlzLmdsLlNIT1JULCBzaG9ydHNQZXJJbWFnZVRleFBvcyk7XG4gICAgICAgIHNldHVwQXR0cmlidXRlKFwiYVJnYmFcIiwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCBieXRlc1BlckltYWdlUmdiYSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJJbWFnZShiaXRtYXA6IElPcGVuR0xCaXRtYXApIHtcbiAgICAgICAgdGhpcy5pbWFnZXMucHVzaChiaXRtYXApO1xuICAgIH1cblxuICAgIG5ld1Jlc291cmNlTG9hZGVkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hdGxhc1RleHR1cmVzKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRSZXNvdXJjZU9uTG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0UmVzb3VyY2VPbkxvYWRlZCgpOiB2b2lkIHtcbiAgICAgICAgR3V0ZUxvZy5sb2coXCJbV0VCR0xdIFJlbG9hZGluZyB0ZXh0dXJlXCIpO1xuXG4gICAgICAgIGNvbnN0IHRleHR1cmVTaXplID0gTWF0aC5taW4odGhpcy5nbC5nZXRQYXJhbWV0ZXIodGhpcy5nbC5NQVhfVEVYVFVSRV9TSVpFKSwgNDA5NiAqIDIpO1xuXG4gICAgICAgIGxldCBsaXN0ID0gWy4uLnRoaXMuaW1hZ2VzXTtcbiAgICAgICAgbGlzdC5zb3J0KChhLCBiKSA9PiBhLmhlaWdodCA+IGIuaGVpZ2h0ID8gLTEgOiAxKTtcblxuICAgICAgICBjb25zdCBwbGFjZWQ6IElPcGVuR0xCaXRtYXBbXSA9IFtdO1xuICAgICAgICBwbGFjZWQucHVzaCh7IHRleFg6IDAsIHRleFk6IDAsIHdpZHRoOiAxLCBoZWlnaHQ6IDEsIHRleEluZGV4OiAtMSB9KVxuICAgICAgICBjb25zdCByZWNvcmRzID0gbGlzdC5tYXAoaW1hZ2UgPT4geyByZXR1cm4geyBpbWFnZTogaW1hZ2UsIHc6IGltYWdlLndpZHRoLCBoOiBpbWFnZS5oZWlnaHQgfSB9KTtcblxuICAgICAgICBsZXQgYmFzZSA9IDA7XG4gICAgICAgIGxldCBzdGVwID0gMjA7XG4gICAgICAgIGxldCB0ZXh0dXJlQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoOyBpICs9IHN0ZXApIHtcbiAgICAgICAgICAgIGxldCB7IHcsIGgsIGZpbGwgfSA9IHBvdHBhY2socmVjb3Jkcy5zbGljZShiYXNlLCBpKSk7XG4gICAgICAgICAgICBpZiAodyA+IHRleHR1cmVTaXplIHx8IGggPiB0ZXh0dXJlU2l6ZSkge1xuICAgICAgICAgICAgICAgIGxldCB7IHcsIGgsIGZpbGwgfSA9IHBvdHBhY2socmVjb3Jkcy5zbGljZShiYXNlLCBpIC0gc3RlcCkpO1xuICAgICAgICAgICAgICAgIHJlY29yZHMuc2xpY2UoYmFzZSwgaSAtIHN0ZXApLmZvckVhY2gocmVjb3JkID0+IHJlY29yZC5pbWFnZS50ZXhJbmRleCA9IHRleHR1cmVDb3VudCk7XG4gICAgICAgICAgICAgICAgR3V0ZUxvZy5sb2coYmFzZSArIFwiIC0+IFwiICsgKGkgLSBzdGVwIC0gMSkgKyBcIiA9IFwiICsgdyArIFwieFwiICsgaCk7XG4gICAgICAgICAgICAgICAgYmFzZSA9IGkgLSBzdGVwO1xuICAgICAgICAgICAgICAgIHRleHR1cmVDb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCB7IHcsIGgsIGZpbGwgfSA9IHBvdHBhY2socmVjb3Jkcy5zbGljZShiYXNlLCByZWNvcmRzLmxlbmd0aCkpO1xuICAgICAgICByZWNvcmRzLnNsaWNlKGJhc2UsIHJlY29yZHMubGVuZ3RoKS5mb3JFYWNoKHJlY29yZCA9PiByZWNvcmQuaW1hZ2UudGV4SW5kZXggPSB0ZXh0dXJlQ291bnQpO1xuICAgICAgICBHdXRlTG9nLmxvZyhiYXNlICsgXCIgLT4gXCIgKyAocmVjb3Jkcy5sZW5ndGggLSAxKSArIFwiID0gXCIgKyB3ICsgXCJ4XCIgKyBoKTtcbiAgICAgICAgdGV4dHVyZUNvdW50Kys7XG5cbiAgICAgICAgR3V0ZUxvZy5sb2coXCJQYWNrZWQgaW50bzogXCIgKyB0ZXh0dXJlQ291bnQgKyBcIiB0ZXh0dXJlc1wiKTtcbiAgICAgICAgZm9yIChjb25zdCByZWNvcmQgb2YgcmVjb3Jkcykge1xuICAgICAgICAgICAgcmVjb3JkLmltYWdlLnRleFggPSAocmVjb3JkIGFzIGFueSkueCArIDE7XG4gICAgICAgICAgICByZWNvcmQuaW1hZ2UudGV4WSA9IChyZWNvcmQgYXMgYW55KS55O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXRsYXNUZXh0dXJlcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0ZXh0dXJlIG9mIHRoaXMuYXRsYXNUZXh0dXJlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlVGV4dHVyZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0bGFzVGV4dHVyZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHR1cmVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5nbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgICAgICBpZiAodGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXRsYXNUZXh0dXJlcy5wdXNoKHRleHR1cmUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnRleEltYWdlMkQodGhpcy5nbC5URVhUVVJFXzJELCAwLCB0aGlzLmdsLlJHQkEsIHRleHR1cmVTaXplLCB0ZXh0dXJlU2l6ZSwgMCwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2hpdGVQaXhlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gd2hpdGVQaXhlbC5nZXRDb250ZXh0KFwiMmRcIikhO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI0ZGRic7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIDEsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4U3ViSW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIDAsIDAsIDAsIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCB3aGl0ZVBpeGVsKTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGltYWdlIG9mIGxpc3QuZmlsdGVyKGxJbWFnZSA9PiBsSW1hZ2UudGV4SW5kZXggPT09IGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4U3ViSW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIDAsIGltYWdlLnRleFgsIGltYWdlLnRleFksIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCBpbWFnZS5pbWFnZSEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCB0aGlzLmdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB0aGlzLmdsLk5FQVJFU1QpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50ZXhXaWR0aCA9IHRleHR1cmVTaXplO1xuICAgICAgICAgICAgICAgIHRoaXMudGV4SGVpZ2h0ID0gdGV4dHVyZVNpemU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hhZGVyUHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZih0aGlzLmdldFVuaWZvcm1Mb2MoXCJ1VGV4U2l6ZVwiKSwgdGhpcy50ZXhXaWR0aCwgdGhpcy50ZXhIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXNldFN0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLlNSQ19BTFBIQSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBYID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBYMiA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWSA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWTIgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuYWxwaGEgPSAyNTU7XG4gICAgfVxuXG4gICAgZ2V0VW5pZm9ybUxvYyhuYW1lOiBzdHJpbmcpOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB7XG4gICAgICAgIGxldCByZXN1bHQ6IFdlYkdMVW5pZm9ybUxvY2F0aW9uID0gdGhpcy51bmlmb3Jtc1tuYW1lXTtcbiAgICAgICAgaWYgKCFyZXN1bHQgJiYgdGhpcy5zaGFkZXJQcm9ncmFtKSB7XG4gICAgICAgICAgICBjb25zdCBsb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIG5hbWUpO1xuICAgICAgICAgICAgaWYgKGxvYykge1xuICAgICAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbbmFtZV0gPSByZXN1bHQgPSBsb2M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICAvLyBSZXNpemUgdGhlIGdsIHZpZXdwb3J0IHRvIGJlIHRoZSBuZXcgc2l6ZSBvZiB0aGUgY2FudmFzLlxuICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc2hhZGVyIHZhcmlhYmxlcyBmb3IgY2FudmFzIHNpemUuXG4gICAgICAgIC8vIFNlbmRpbmcgaXQgdG8gZ2wgbm93IHNvIHdlIGRvbid0IGhhdmUgdG8gZG8gdGhlIG1hdGggaW4gSmF2YVNjcmlwdCBvbiBldmVyeSBkcmF3LFxuICAgICAgICAvLyBzaW5jZSBnbCB3YW50cyB0byBkcmF3IGF0IGEgcG9zaXRpb24gZnJvbSAwIHRvIDEsIGFuZCB3ZSB3YW50IHRvIGRvIGRyYXdJbWFnZSB3aXRoIGEgc2NyZWVuIHBpeGVsIHBvc2l0aW9uLlxuICAgICAgICBpZiAodGhpcy5zaGFkZXJQcm9ncmFtKSB7XG4gICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZih0aGlzLmdldFVuaWZvcm1Mb2MoXCJ1Q2FudmFzU2l6ZVwiKSwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEVycm9yKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5nbC5nZXRFcnJvcigpO1xuICAgICAgICBpZiAoZXJyb3IgIT09IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5JTlZBTElEX0VOVU06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludmFsaWQgRW51bVwiO1xuICAgICAgICAgICAgICAgIGNhc2UgV2ViR0xSZW5kZXJpbmdDb250ZXh0LklOVkFMSURfVkFMVUU6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludmFsaWQgVmFsdWVcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5JTlZBTElEX09QRVJBVElPTjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBPcGVyYXRpb25cIjtcbiAgICAgICAgICAgICAgICBjYXNlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5JTlZBTElEX0ZSQU1FQlVGRkVSX09QRVJBVElPTjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBGcmFtZWJ1ZmZlciBPcGVyYXRpb25cIjtcbiAgICAgICAgICAgICAgICBjYXNlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5PVVRfT0ZfTUVNT1JZOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJPdXQgb2YgTWVtb3J5XCI7XG4gICAgICAgICAgICAgICAgLy8gaW4gdGhpcyBjYXNlIHdlJ3JlIGV4cGVjdGluZyBvdXIgaGFuZGxlciB0byBwb3AgdXBcbiAgICAgICAgICAgICAgICAvLyBhbmQgcmVzdG9yZSBpdCAtIHNvIGRvbid0IHJldHVybiBhbiBlcnJvciBzaW5jZVxuICAgICAgICAgICAgICAgIC8vIHRoYXQnbGwgc3RvcCB0aGUgcmVuZGVyaW5nIHRocmVhZFxuICAgICAgICAgICAgICAgIGNhc2UgV2ViR0xSZW5kZXJpbmdDb250ZXh0LkNPTlRFWFRfTE9TVF9XRUJHTDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gXCJVbmtub3duIGVycm9yIC0gXCIgKyB0aGlzLmdsLmdldEVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIF9kcmF3Qml0bWFwKGltZzogSU9wZW5HTEJpdG1hcCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2w6IG51bWJlciA9IDB4RkZGRkZGMDApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZHJhd0ltYWdlKGltZy50ZXhJbmRleCwgaW1nLnRleFgsIGltZy50ZXhZLCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbCxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5hbHBoYSk7XG4gICAgfVxuXG4gICAgX2RyYXdJbWFnZSh0ZXhJbmRleDogbnVtYmVyLCB0ZXhYOiBudW1iZXIsIHRleFk6IG51bWJlciwgdGV4V2lkdGg6IG51bWJlciwgdGV4SGVpZ2h0OiBudW1iZXIsIGRyYXdYOiBudW1iZXIsIGRyYXdZOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByZ2JhOiBudW1iZXIsIGFscGhhOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmF0bGFzVGV4dHVyZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmdiYXMgfHwgIXRoaXMucG9zaXRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICgodGV4SW5kZXggPj0gMCkgJiYgKHRoaXMuYXRsYXNUZXh0dXJlcyFbdGV4SW5kZXhdICE9PSB0aGlzLmN1cnJlbnRUZXh0dXJlKSkge1xuICAgICAgICAgICAgdGhpcy5nbENvbW1pdENvbnRleHQoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRleHR1cmUgPSB0aGlzLmF0bGFzVGV4dHVyZXMhW3RleEluZGV4XTtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmN1cnJlbnRUZXh0dXJlKTtcbiAgICAgICAgICAgIHRoaXMuZ2xTdGFydENvbnRleHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpID0gdGhpcy5kcmF3cyAqIDU7XG5cbiAgICAgICAgLy8gY2xhbXAgYWxwaGEgdG8gcHJldmVudCBvdmVyZmxvd1xuICAgICAgICBpZiAoYWxwaGEgPiAyNTUpIHtcbiAgICAgICAgICAgIGFscGhhID0gMjU1O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZ2Jhc1tpICsgNF0gPSByZ2JhIHwgYWxwaGE7XG4gICAgICAgIGkgKj0gMjtcblxuICAgICAgICBsZXQgZHJhd1gyID0gZHJhd1ggKyB3aWR0aDtcbiAgICAgICAgbGV0IGRyYXdZMiA9IGRyYXdZICsgaGVpZ2h0O1xuICAgICAgICBjb25zdCB0MSA9IHRoaXMudHJhbnNmb3JtQ3R4LmdldFRyYW5zZm9ybSgpLnRyYW5zZm9ybVBvaW50KHt4IDogZHJhd1gsIHk6IGRyYXdZIH0pO1xuICAgICAgICBjb25zdCB0MiA9IHRoaXMudHJhbnNmb3JtQ3R4LmdldFRyYW5zZm9ybSgpLnRyYW5zZm9ybVBvaW50KHt4IDogZHJhd1gyLCB5OiBkcmF3WTIgfSk7XG4gICAgICAgIGRyYXdYID0gdDEueDtcbiAgICAgICAgZHJhd1kgPSB0MS55O1xuICAgICAgICBkcmF3WDIgPSB0Mi54O1xuICAgICAgICBkcmF3WTIgPSB0Mi55O1xuXG4gICAgICAgIGRyYXdYID0gTWF0aC5mbG9vcihkcmF3WCk7XG4gICAgICAgIGRyYXdZID0gTWF0aC5mbG9vcihkcmF3WSk7XG4gICAgICAgIGRyYXdYMiA9IE1hdGguZmxvb3IoZHJhd1gyKTtcbiAgICAgICAgZHJhd1kyID0gTWF0aC5mbG9vcihkcmF3WTIpO1xuXG4gICAgICAgIHdpZHRoID0gZHJhd1gyIC0gZHJhd1g7XG4gICAgICAgIGhlaWdodCA9IGRyYXdZMiAtIGRyYXdZO1xuXG4gICAgICAgIGxldCBzY3JlZW5IZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIGlmICh0aGlzLm9mZnNjcmVlbikge1xuICAgICAgICAgICAgc2NyZWVuSGVpZ2h0ID0gdGhpcy5vZmZzY3JlZW4uZ2V0SGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgICAgIGlmICh0aGlzLm9mZnNjcmVlbikge1xuICAgICAgICAgICAgc2NyZWVuV2lkdGggPSB0aGlzLm9mZnNjcmVlbi5nZXRXaWR0aCgpO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoKHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWTIgPT09IDApICYmICh0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFgyID09PSAwKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBZID0gLTEwMDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWTIgPSBzY3JlZW5IZWlnaHQgKyAxMDA7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFggPSAtMTAwO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBYMiA9IHNjcmVlbldpZHRoICsgMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWCA8IHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWDIpIHtcbiAgICAgICAgICAgIGlmIChkcmF3WCA+IHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZHJhd1gyIDwgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBYKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRyYXdYMiA+IHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93UGVyY2VudCA9IDEgLSAoZHJhd1gyIC0gdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBYMikgLyB3aWR0aDtcbiAgICAgICAgICAgICAgICB0ZXhXaWR0aCAqPSBzaG93UGVyY2VudDtcbiAgICAgICAgICAgICAgICB3aWR0aCAqPSBzaG93UGVyY2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkcmF3WCA8IHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dQZXJjZW50ID0gMSAtICh0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFggLSBkcmF3WCkgLyB3aWR0aDtcbiAgICAgICAgICAgICAgICB3aWR0aCAtPSB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFggLSBkcmF3WDtcbiAgICAgICAgICAgICAgICBkcmF3WCA9IHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWDtcbiAgICAgICAgICAgICAgICB0ZXhYICs9IHRleFdpZHRoICogKDEgLSBzaG93UGVyY2VudCk7XG4gICAgICAgICAgICAgICAgdGV4V2lkdGggKj0gc2hvd1BlcmNlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBZIDwgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBZMikge1xuICAgICAgICAgICAgaWYgKGRyYXdZID4gdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBZMikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkcmF3WTIgPCB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZHJhd1kyID4gdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBZMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dQZXJjZW50ID0gMSAtIChkcmF3WTIgLSB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFkyKSAvIGhlaWdodDtcbiAgICAgICAgICAgICAgICB0ZXhIZWlnaHQgKj0gc2hvd1BlcmNlbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ICo9IHNob3dQZXJjZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRyYXdZIDwgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBZKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd1BlcmNlbnQgPSAxIC0gKHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWSAtIGRyYXdZKSAvIGhlaWdodDtcbiAgICAgICAgICAgICAgICBoZWlnaHQgLT0gdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBZIC0gZHJhd1k7XG4gICAgICAgICAgICAgICAgZHJhd1kgPSB0aGlzLmN1cnJlbnRDb250ZXh0U3RhdGUuY2xpcFk7XG4gICAgICAgICAgICAgICAgdGV4WSArPSB0ZXhIZWlnaHQgKiAoMSAtIHNob3dQZXJjZW50KTtcbiAgICAgICAgICAgICAgICB0ZXhIZWlnaHQgKj0gc2hvd1BlcmNlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvc2l0aW9uc1tpXSA9IGRyYXdYO1xuICAgICAgICB0aGlzLnBvc2l0aW9uc1tpICsgMV0gPSBkcmF3WTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSArIDJdID0gd2lkdGg7XG4gICAgICAgIHRoaXMucG9zaXRpb25zW2kgKyAzXSA9IGhlaWdodDtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uc1tpICsgNF0gPSB0ZXhYO1xuICAgICAgICB0aGlzLnBvc2l0aW9uc1tpICsgNV0gPSB0ZXhZO1xuICAgICAgICB0aGlzLnBvc2l0aW9uc1tpICsgNl0gPSB0ZXhXaWR0aDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSArIDddID0gdGV4SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuZHJhd3MrK1xuICAgIH1cblxuICAgIGdsU3RhcnRDb250ZXh0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGdsQ29tbWl0Q29udGV4dCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhd3MgPiAwICYmIHRoaXMucmdiYXMgJiYgdGhpcy5leHRlbnNpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgMCwgdGhpcy5yZ2Jhcy5zdWJhcnJheSgwLCB0aGlzLmRyYXdzICogNSkpO1xuICAgICAgICAgICAgdGhpcy5leHRlbnNpb24uZHJhd0VsZW1lbnRzSW5zdGFuY2VkQU5HTEUodGhpcy5nbC5UUklBTkdMRVMsIDYsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgMCwgdGhpcy5kcmF3cyk7XG4gICAgICAgICAgICB0aGlzLmRyYXdzID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBpZiAoKHRoaXMudHJhbnNmb3JtQ3R4IGFzIGFueSkucmVzZXQpIHtcbiAgICAgICAgICAgICh0aGlzLnRyYW5zZm9ybUN0eCBhcyBhbnkpLnJlc2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBvbGQgd2F5IG9mIHJlc2V0IGFsbCB0aGUgc3RhdGVcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoICs9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYXdzID0gMDtcbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5nbFN0YXJ0Q29udGV4dCgpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyRW5kKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuICAgIH1cblxuICAgIGFwcGx5Rm9udCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBzbW9vdGgoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgY29weSgpOiBCaXRtYXAge1xuICAgICAgICByZXR1cm4gT3BlbkdMR3JhcGhpY3NJbXBsLk5VTExfQ09QWTtcbiAgICB9XG5cbiAgICBnZXRPZmZzY3JlZW4oKTogT2Zmc2NyZWVuIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNjcmVlbjtcbiAgICB9XG5cbiAgICBjbGlwKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB0MSA9IHRoaXMudHJhbnNmb3JtQ3R4LmdldFRyYW5zZm9ybSgpLnRyYW5zZm9ybVBvaW50KHsgeCwgeSB9KTtcbiAgICAgICAgY29uc3QgdDIgPSB0aGlzLnRyYW5zZm9ybUN0eC5nZXRUcmFuc2Zvcm0oKS50cmFuc2Zvcm1Qb2ludCh7IHg6IHggKyB3aWR0aCAsIHk6IHkgKyBoZWlnaHQgfSk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBYID0gdDEueDtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBZID0gdDEueTtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmNsaXBYMiA9IHQyLng7XG4gICAgICAgIHRoaXMuY3VycmVudENvbnRleHRTdGF0ZS5jbGlwWTIgPSB0Mi55O1xuICAgIH1cblxuICAgIGNyZWF0ZU9mZnNjcmVlbigpOiBPZmZzY3JlZW4ge1xuICAgICAgICB0aGlzLm9mZnNjcmVlbklkKys7XG4gICAgICAgIGNvbnN0IG9mZnNjcmVlbiA9IG5ldyBPcGVuR2xPZmZzY3JlZW4odGhpcy5nbCwgdGhpcywgdGhpcy5vZmZzY3JlZW5JZCk7XG4gICAgICAgIHRoaXMub2Zmc2NyZWVucy5wdXNoKG9mZnNjcmVlbik7XG4gICAgICAgIGlmICh0aGlzLm9mZnNjcmVlbnMubGVuZ3RoID09PSA1MCkge1xuICAgICAgICAgICAgR3V0ZUxvZy5sb2coXCI1MCBvZmZzY3JlZW5zIGhhdmUgYmVlbiBjcmVhdGVkIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvZmZzY3JlZW47XG4gICAgfVxuXG4gICAgZHJhd1RvT2Zmc2NyZWVuKHNjcmVlbjogT2Zmc2NyZWVuIHwgbnVsbCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5vZmZzY3JlZW4pIHtcbiAgICAgICAgICAgICh0aGlzLm9mZnNjcmVlbiBhcyBPcGVuR2xPZmZzY3JlZW4pLnVudXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9mZnNjcmVlbiA9IHNjcmVlbjtcblxuICAgICAgICBpZiAodGhpcy5vZmZzY3JlZW4pIHtcbiAgICAgICAgICAgICh0aGlzLm9mZnNjcmVlbiBhcyBPcGVuR2xPZmZzY3JlZW4pLnVzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd09mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuc2hhZGVyUHJvZ3JhbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gKHNjcmVlbiBhcyBPcGVuR2xPZmZzY3JlZW4pO1xuICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgIHRoaXMuZ2xTdGFydENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nZXRVbmlmb3JtTG9jKFwidVRleFNpemVcIiksIG9mZnNjcmVlbi53aWR0aCwgb2Zmc2NyZWVuLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCBvZmZzY3JlZW4udGV4dHVyZSk7XG4gICAgICAgIHRoaXMuX2RyYXdJbWFnZSgtMTAwLCAwLCBvZmZzY3JlZW4uaGVpZ2h0LCBvZmZzY3JlZW4ud2lkdGgsIC1vZmZzY3JlZW4uaGVpZ2h0LCAwLCAwLCBvZmZzY3JlZW4ud2lkdGgsIG9mZnNjcmVlbi5oZWlnaHQsIDB4RkZGRkZGMDAsIDI1NSk7XG4gICAgICAgIHRoaXMuZ2xDb21taXRDb250ZXh0KCk7XG5cbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nZXRVbmlmb3JtTG9jKFwidVRleFNpemVcIiksIHRoaXMudGV4V2lkdGgsIHRoaXMudGV4SGVpZ2h0KTtcbiAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuY3VycmVudFRleHR1cmUpO1xuICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgZHJhd1NjYWxlZE9mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbiwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5zaGFkZXJQcm9ncmFtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSAoc2NyZWVuIGFzIE9wZW5HbE9mZnNjcmVlbik7XG4gICAgICAgIHRoaXMuZ2xDb21taXRDb250ZXh0KCk7XG5cbiAgICAgICAgdGhpcy5nbFN0YXJ0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZih0aGlzLmdldFVuaWZvcm1Mb2MoXCJ1VGV4U2l6ZVwiKSwgb2Zmc2NyZWVuLndpZHRoLCBvZmZzY3JlZW4uaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIG9mZnNjcmVlbi50ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5fZHJhd0ltYWdlKC0xMDAsIDAsIG9mZnNjcmVlbi5oZWlnaHQsIG9mZnNjcmVlbi53aWR0aCwgLW9mZnNjcmVlbi5oZWlnaHQsIHgsIHksIHdpZHRoLCBoZWlnaHQsIDB4RkZGRkZGMDAsIDI1NSk7XG4gICAgICAgIHRoaXMuZ2xDb21taXRDb250ZXh0KCk7XG5cbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nZXRVbmlmb3JtTG9jKFwidVRleFNpemVcIiksIHRoaXMudGV4V2lkdGgsIHRoaXMudGV4SGVpZ2h0KTtcbiAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuY3VycmVudFRleHR1cmUpO1xuICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgZHJhd1NjYWxlZE9mZnNjcmVlblNlZ21lbnQoc2NyZWVuOiBPZmZzY3JlZW4sIHN4OiBudW1iZXIsIHN5OiBudW1iZXIsIHN3aWR0aDogbnVtYmVyLCBzaGVpZ2h0OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuc2hhZGVyUHJvZ3JhbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gKHNjcmVlbiBhcyBPcGVuR2xPZmZzY3JlZW4pO1xuICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgIHRoaXMuZ2xTdGFydENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nZXRVbmlmb3JtTG9jKFwidVRleFNpemVcIiksIG9mZnNjcmVlbi53aWR0aCwgb2Zmc2NyZWVuLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCBvZmZzY3JlZW4udGV4dHVyZSk7XG4gICAgICAgIHRoaXMuX2RyYXdJbWFnZSgtMTAwLCBzeCwgb2Zmc2NyZWVuLmhlaWdodC1zeSwgc3dpZHRoLCAtc2hlaWdodCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMHhGRkZGRkYwMCwgMjU1KTtcbiAgICAgICAgdGhpcy5nbENvbW1pdENvbnRleHQoKTtcblxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZih0aGlzLmdldFVuaWZvcm1Mb2MoXCJ1VGV4U2l6ZVwiKSwgdGhpcy50ZXhXaWR0aCwgdGhpcy50ZXhIZWlnaHQpO1xuICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5jdXJyZW50VGV4dHVyZSk7XG4gICAgICAgIHRoaXMuZ2xTdGFydENvbnRleHQoKTtcbiAgICB9XG5cbiAgICBmaWxsUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCByZ2JhID0gY29sVG9OdW1iZXIoY29sKTtcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuYWxwaGEgPCAyNTUgPyB0aGlzLmFscGhhIDogKHJnYmEgJSAyNTYpO1xuICAgICAgICBpZiAoYSA8IDI1NSkge1xuICAgICAgICAgICAgcmdiYSA9IChyZ2JhICYgMHhGRkZGRkYwMCkgfCBhO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RyYXdJbWFnZSgwLCAwLCAwLCAxLCAxLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCByZ2JhLCBhKVxuICAgIH1cblxuICAgIGZpbGxDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZyk6IHZvaWQge1xuICAgIH1cblxuICAgIGRyYXdDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZywgd2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgIH1cblxuICAgIHNldExpbmVEYXNoKHNlZ21lbnRzOiBudW1iZXJbXSk6IHZvaWQge1xuICAgIH1cblxuICAgIGRyYXdMaW5lKHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIsIGNvbDogc3RyaW5nLCB3aWR0aD86IG51bWJlciB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIH1cblxuICAgIGRyYXdCaXRtYXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGJpdG1hcDogQml0bWFwKTogdm9pZCB7XG4gICAgICAgIGlmIChiaXRtYXApIHtcbiAgICAgICAgICAgIGJpdG1hcC5kcmF3KHRoaXMsIHgsIHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd1NjYWxlZEJpdG1hcCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGJpdG1hcDogQml0bWFwKTogdm9pZCB7XG4gICAgICAgIGlmIChiaXRtYXApIHtcbiAgICAgICAgICAgIGJpdG1hcC5kcmF3U2NhbGVkKHRoaXMsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgIHRoaXMuZ2xTdGFydENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5aRVJPLCB0aGlzLmdsLlpFUk8pO1xuICAgICAgICB0aGlzLmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIFwicmdiYSgwLDAsMCwwKVwiKTtcbiAgICAgICAgdGhpcy5nbENvbW1pdENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5TUkNfQUxQSEEsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG5cbiAgICAgICAgdGhpcy5nbFN0YXJ0Q29udGV4dCgpO1xuICAgIH1cblxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICB9XG5cbiAgICBzZXRGb250KGZvbnQ6IEZvbnQpOiB2b2lkIHtcbiAgICAgICAgLy8gSUdOT1JFRFxuICAgIH1cblxuICAgIHNldENvbXBvc2l0ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IFwibXVsdGlwbHlcIikge1xuICAgICAgICAgICAgdGhpcy5nbENvbW1pdENvbnRleHQoKTtcblxuICAgICAgICAgICAgdGhpcy5nbFN0YXJ0Q29udGV4dCgpO1xuICAgICAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5aRVJPLCB0aGlzLmdsLlNSQ19DT0xPUik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT09IFwic291cmNlLW92ZXJcIikge1xuICAgICAgICAgICAgdGhpcy5nbENvbW1pdENvbnRleHQoKTtcblxuICAgICAgICAgICAgdGhpcy5nbFN0YXJ0Q29udGV4dCgpO1xuICAgICAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5TUkNfQUxQSEEsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRGb250U2l6ZShzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgLy8gSUdOT1JFRFxuICAgIH1cblxuICAgIGRyYXdTdHJpbmcoeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHQ6IHN0cmluZywgY29sOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgLy8gSUdOT1JFRFxuICAgIH1cblxuICAgIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgfVxuXG4gICAgc2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1DdHguc2NhbGUoeCwgeSk7XG4gICAgfVxuXG4gICAgcHVzaCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zYXZlcysrO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUN0eC5zYXZlKCk7XG4gICAgfVxuXG4gICAgcG9wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNhdmVzLS07XG4gICAgICAgIHRoaXMudHJhbnNmb3JtQ3R4LnJlc3RvcmUoKTtcbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XG4gICAgfVxuXG4gICAgZ2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xuICAgIH1cblxuICAgIGdldEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGZpdFNjcmVlbihwaXhlbFNjYWxlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgd2lkdGg6IG51bWJlciA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gICAgICAgIGNvbnN0IGhlaWdodDogbnVtYmVyID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApXG4gICAgICAgIGNvbnN0IHJlYWxXaWR0aDogbnVtYmVyID0gTWF0aC5mbG9vcih3aWR0aCAvIHBpeGVsU2NhbGUpICogcGl4ZWxTY2FsZTtcbiAgICAgICAgY29uc3QgcmVhbEhlaWdodDogbnVtYmVyID0gTWF0aC5mbG9vcihoZWlnaHQgLyBwaXhlbFNjYWxlKSAqIHBpeGVsU2NhbGU7XG4gICAgICAgIGNvbnN0IHZpcnR1YWxXaWR0aDogbnVtYmVyID0gcmVhbFdpZHRoIC8gcGl4ZWxTY2FsZTtcbiAgICAgICAgY29uc3QgdmlydHVhbEhlaWdodDogbnVtYmVyID0gcmVhbEhlaWdodCAvIHBpeGVsU2NhbGU7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB2aXJ0dWFsV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHZpcnR1YWxIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gcmVhbFdpZHRoICsgXCJweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSByZWFsSGVpZ2h0ICsgXCJweFwiO1xuICAgIH1cblxuICAgIGdldFN0cmluZ1dpZHRoKHRleHQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHNldEFscGhhKGFscGhhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29udGV4dFN0YXRlLmFscGhhID0gTWF0aC5mbG9vcihhbHBoYSAqIDI1NSk7XG4gICAgfVxuXG4gICAgZ2V0VHJhbnNmb3JtKCk6IERPTU1hdHJpeCB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUN0eC5nZXRUcmFuc2Zvcm0oKTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IE9mZnNjcmVlbiB9IGZyb20gXCIuLi9HcmFwaGljc1wiO1xuaW1wb3J0IHsgT3BlbkdMR3JhcGhpY3NJbXBsIH0gZnJvbSBcIi4vT3BlbkdMR3JhcGhpY3NJbXBsXCI7XG5pbXBvcnQgeyBSZW5kZXJpbmdTdGF0ZSB9IGZyb20gXCIuL1JlbmRlcmluZ1N0YXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBPcGVuR2xPZmZzY3JlZW4gaW1wbGVtZW50cyBPZmZzY3JlZW4sIFJlbmRlcmluZ1N0YXRlIHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHRleHR1cmU6IFdlYkdMVGV4dHVyZSB8IG51bGwgPSBudWxsO1xuICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XG4gICAgZmI6IFdlYkdMRnJhbWVidWZmZXIgfCBudWxsID0gbnVsbDsgXG4gICAgZ3JhcGhpY3M6IE9wZW5HTEdyYXBoaWNzSW1wbDtcbiAgICBpZDogbnVtYmVyID0gMDtcbiAgICBpbnVzZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY2xpcFg6IG51bWJlciA9IDA7XG4gICAgY2xpcFk6IG51bWJlciA9IDA7XG4gICAgY2xpcFgyOiBudW1iZXIgPSAwO1xuICAgIGNsaXBZMjogbnVtYmVyID0gMDtcbiAgICBhbHBoYTogbnVtYmVyID0gMjU1O1xuICAgIHJlZnJlc2hSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgZ3JhcGhpY3M6IE9wZW5HTEdyYXBoaWNzSW1wbCwgaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBncmFwaGljcztcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIGdldFdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIGdldEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcmVjb3ZlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mYiA9IG51bGw7XG4gICAgICAgIHRoaXMudGV4dHVyZSA9IG51bGw7XG4gICAgICAgIHRoaXMucmVmcmVzaFJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXREaW1lbnNpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHVzZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmdyYXBoaWNzLnNoYWRlclByb2dyYW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmludXNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZnJlc2hSZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgIHRoaXMuaW51c2UgPSB0cnVlO1xuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLmZiKTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5ncmFwaGljcy5nZXRVbmlmb3JtTG9jKFwidUNhbnZhc1NpemVcIiksIE1hdGguZmxvb3IodGhpcy53aWR0aCAvIDIpLCBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0IC8gMikpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5ncmFwaGljcy5jdXJyZW50Q29udGV4dFN0YXRlID0gdGhpcztcbiAgICAgICAgdGhpcy5ncmFwaGljcy5wdXNoKCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MudHJhbnNmb3JtQ3R4LnJlc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MucmVzZXRTdGF0ZSgpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgdW51c2UoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5ncmFwaGljcy5zaGFkZXJQcm9ncmFtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaW51c2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5pbnVzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmdsQ29tbWl0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmN1cnJlbnRDb250ZXh0U3RhdGUgPSB0aGlzLmdyYXBoaWNzO1xuXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuZ3JhcGhpY3MuY2FudmFzLndpZHRoLCB0aGlzLmdyYXBoaWNzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZih0aGlzLmdyYXBoaWNzLmdldFVuaWZvcm1Mb2MoXCJ1Q2FudmFzU2l6ZVwiKSwgdGhpcy5ncmFwaGljcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmdyYXBoaWNzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5wb3AoKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5nbFN0YXJ0Q29udGV4dCgpO1xuICAgIH1cbiAgICBcbiAgICBuZWVkc1JlZnJlc2goKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hSZXF1aXJlZDtcbiAgICB9XG5cbiAgICByZWxlYXNlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50ZXh0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGhpcy50ZXh0dXJlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mYikge1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVGcmFtZWJ1ZmZlcih0aGlzLmZiKTtcbiAgICAgICAgICAgIHRoaXMuZmIgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICB9XG5cbiAgICBzZXREaW1lbnNpb24od2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMud2lkdGggIT09IHdpZHRoIHx8IHRoaXMuaGVpZ2h0ICE9PSBoZWlnaHQgfHwgIXRoaXMuZmIpIHtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpO1xuXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5nbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlKTtcblxuICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSAwO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxGb3JtYXQgPSB0aGlzLmdsLlJHQkE7XG4gICAgICAgICAgICBjb25zdCBib3JkZXIgPSAwO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gdGhpcy5nbC5SR0JBO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2wuVU5TSUdORURfQllURTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LFxuICAgICAgICAgICAgICAgIHdpZHRoLCBoZWlnaHQsIGJvcmRlcixcbiAgICAgICAgICAgICAgICBmb3JtYXQsIHR5cGUsIGRhdGEpO1xuXG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgdGhpcy5nbC5ORUFSRVNUKTtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB0aGlzLmdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfUywgdGhpcy5nbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1QsIHRoaXMuZ2wuQ0xBTVBfVE9fRURHRSk7XG5cbiAgICAgICAgICAgIHRoaXMuZmIgPSB0aGlzLmdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLmZiKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5nbC5DT0xPUl9BVFRBQ0hNRU5UMCwgdGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUsIGxldmVsKTtcblxuICAgICAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKDAsMCwwLDEpO1xuICAgICAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5ncmFwaGljcy5jdXJyZW50VGV4dHVyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBCaXRtYXAgfSBmcm9tIFwiLi4vQml0bWFwXCI7XG5pbXBvcnQgeyBUaWxlc2V0IH0gZnJvbSBcIi4uL1RpbGVzZXRcIjtcbmltcG9ydCB7IFBhbGV0dGUgfSBmcm9tIFwiLi4vaW1wbC9QYWxldHRlXCI7XG5pbXBvcnQgeyBPcGVuR0xHcmFwaGljc0ltcGwgfSBmcm9tIFwiLi9PcGVuR0xHcmFwaGljc0ltcGxcIjtcbmltcG9ydCB7IElPcGVuR0xCaXRtYXAgfSBmcm9tIFwiLi9PcGVuR0xCaXRtYXBcIjtcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcIi4uL0dyYXBoaWNzXCI7XG5pbXBvcnQgeyBHdXRlTG9nIH0gZnJvbSBcIi4uL0xvZ1wiO1xuXG5jbGFzcyBPcGVuR0xUaWxlIGltcGxlbWVudHMgQml0bWFwLCBJT3BlbkdMQml0bWFwIHtcbiAgICBwYXJlbnQ6IE9wZW5HTFRpbGVzZXRJbXBsO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgbG9hZGVkOiBib29sZWFuO1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgc2NhbGU6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmcgPSBcInRpbGVcIjtcbiAgICB0ZXhYOiBudW1iZXIgPSAwO1xuICAgIHRleFk6IG51bWJlciA9IDA7XG4gICAgdGV4SW5kZXg6IG51bWJlciA9IDA7XG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgY29sOiBudW1iZXIgPSAweEZGRkZGRjAwO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogT3BlbkdMVGlsZXNldEltcGwsIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgfVxuXG4gICAgY29weVdpdGhDb2wocmdiYTogbnVtYmVyKTogT3BlbkdMVGlsZSB7XG4gICAgICAgIGNvbnN0IGNvcHkgPSBuZXcgT3BlbkdMVGlsZSh0aGlzLnBhcmVudCwgdGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnNjYWxlKTtcbiAgICAgICAgY29weS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICBjb3B5LmNvbCA9IHJnYmE7XG4gICAgICAgIGNvcHkudGV4WCA9IHRoaXMudGV4WDtcbiAgICAgICAgY29weS50ZXhZID0gdGhpcy50ZXhZO1xuXG4gICAgICAgIHJldHVybiBjb3B5O1xuICAgIH1cblxuICAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBnID0gKGdyYXBoaWNzIGFzIE9wZW5HTEdyYXBoaWNzSW1wbCk7XG4gICAgICAgIHRoaXMudGV4WCA9IHRoaXMucGFyZW50LnRleFggKyB0aGlzLng7XG4gICAgICAgIHRoaXMudGV4WSA9IHRoaXMucGFyZW50LnRleFkgKyB0aGlzLnk7XG4gICAgICAgIHRoaXMudGV4SW5kZXggPSB0aGlzLnBhcmVudC50ZXhJbmRleDtcblxuICAgICAgICBnLl9kcmF3Qml0bWFwKHRoaXMsIHgsIHksIE1hdGguZmxvb3IodGhpcy53aWR0aCAqIHRoaXMuc2NhbGUpLCBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZSksIHRoaXMuY29sKTtcbiAgICB9XG5cbiAgICBkcmF3U2NhbGVkKGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGcgPSAoZ3JhcGhpY3MgYXMgT3BlbkdMR3JhcGhpY3NJbXBsKTtcbiAgICAgICAgdGhpcy50ZXhYID0gdGhpcy5wYXJlbnQudGV4WCArIHRoaXMueDtcbiAgICAgICAgdGhpcy50ZXhZID0gdGhpcy5wYXJlbnQudGV4WSArIHRoaXMueTtcbiAgICAgICAgdGhpcy50ZXhJbmRleCA9IHRoaXMucGFyZW50LnRleEluZGV4O1xuXG4gICAgICAgIGcuX2RyYXdCaXRtYXAodGhpcywgeCwgeSwgd2lkdGgsIGhlaWdodCwgdGhpcy5jb2wpO1xuICAgIH1cblxuICAgIGluaXRPbkZpcnN0Q2xpY2soKTogdm9pZCB7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3BlbkdMVGlsZXNldEltcGwgaW1wbGVtZW50cyBUaWxlc2V0LCBJT3BlbkdMQml0bWFwIHtcbiAgICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB0aWxlV2lkdGg6IG51bWJlcjtcbiAgICB0aWxlSGVpZ2h0OiBudW1iZXI7XG4gICAgb3JpZ2luYWxUaWxlV2lkdGg6IG51bWJlcjtcbiAgICBvcmlnaW5hbFRpbGVIZWlnaHQ6IG51bWJlcjtcbiAgICBpbWFnZTogYW55IHwgbnVsbDtcbiAgICBiaXRtYXBzOiBPcGVuR0xUaWxlW10gPSBbXTtcbiAgICBzY2FubGluZTogbnVtYmVyID0gMDtcbiAgICB0aWxlQ291bnQ6IG51bWJlciA9IDA7XG4gICAgc2NhbGU6IG51bWJlcjtcbiAgICBvbkxvYWRlZDogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdGV4WDogbnVtYmVyID0gMDtcbiAgICB0ZXhZOiBudW1iZXIgPSAwO1xuICAgIHRleEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHRpbnRUaWxlczogUmVjb3JkPHN0cmluZywgT3BlbkdMVGlsZVtdPiA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoZ3JhcGhpY3M6IE9wZW5HTEdyYXBoaWNzSW1wbCwgdXJsOiBzdHJpbmcsIGRhdGFVcmxMb2FkZXI6IFByb21pc2U8QmxvYj4gfCB1bmRlZmluZWQsIHRpbGVXaWR0aDogbnVtYmVyLCB0aWxlSGVpZ2h0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIgPSAxLCBwYWw6IFBhbGV0dGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50aWxlV2lkdGggPSB0aGlzLm9yaWdpbmFsVGlsZVdpZHRoID0gdGlsZVdpZHRoO1xuICAgICAgICB0aGlzLnRpbGVIZWlnaHQgPSB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCA9IHRpbGVIZWlnaHQ7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy5uYW1lID0gdXJsO1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgdGhpcy5pbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgR3V0ZUxvZy5sb2coXCJFcnJvciBsb2FkaW5nOiBcIiArIHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjYW5saW5lID0gTWF0aC5mbG9vcih0aGlzLmltYWdlIS53aWR0aCAvIHRoaXMudGlsZVdpZHRoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlcHRoOiBudW1iZXIgPSBNYXRoLmZsb29yKHRoaXMuaW1hZ2UhLmhlaWdodCAvIHRoaXMudGlsZUhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLnRpbGVDb3VudCA9IGRlcHRoICogdGhpcy5zY2FubGluZTtcblxuICAgICAgICAgICAgaWYgKHBhbCkge1xuICAgICAgICAgICAgICAgIHBhbC5hZGp1c3RJbWFnZSh0aGlzLmltYWdlISkudGhlbigoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGN1dCB0aGUgaW1hZ2UgaW50byBwaWVjZXNcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBkZXB0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc2NhbmxpbmU7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYml0bWFwcy5wdXNoKG5ldyBPcGVuR0xUaWxlKHRoaXMsIHRoaXMuaW1hZ2UhLCB4ICogdGhpcy50aWxlV2lkdGgsIHkgKiB0aGlzLnRpbGVIZWlnaHQsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQsIHNjYWxlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlV2lkdGggKj0gc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUhlaWdodCAqPSBzY2FsZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTG9hZGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLnJlZ2lzdGVySW1hZ2UodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjdXQgdGhlIGltYWdlIGludG8gcGllY2VzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBkZXB0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5zY2FubGluZTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJpdG1hcHMucHVzaChuZXcgT3BlbkdMVGlsZSh0aGlzLCB0aGlzLmltYWdlISwgeCAqIHRoaXMudGlsZVdpZHRoLCB5ICogdGhpcy50aWxlSGVpZ2h0LCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0LCBzY2FsZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGlsZVdpZHRoICo9IHNjYWxlO1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZUhlaWdodCAqPSBzY2FsZTtcblxuICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkZWQoKTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5yZWdpc3RlckltYWdlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZGF0YVVybExvYWRlcikge1xuICAgICAgICAgICAgZGF0YVVybExvYWRlci50aGVuKChibG9iOiBCbG9iKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHVybENyZWF0b3IgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZSEuc3JjID0gdXJsQ3JlYXRvci5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB1cmw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlLmhlaWdodDtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2Uud2lkdGg7XG4gICAgfVxuXG4gICAgZHJhdyhncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgfVxuXG4gICAgZHJhd1NjYWxlZChncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIH1cblxuICAgIGdldEJsb2NrQ29sb3JUaWxlKHRpbGU6IG51bWJlciwgdGludE5hbWU6IHN0cmluZywgcmdiYTogbnVtYmVyW10pOiBCaXRtYXAge1xuICAgICAgICBsZXQgdGlsZXMgPSB0aGlzLnRpbnRUaWxlc1t0aW50TmFtZV07XG4gICAgICAgIGlmICghdGlsZXMpIHtcbiAgICAgICAgICB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGxldCB0aWxlUmVjb3JkID0gdGlsZXNbdGlsZV07XG4gICAgICAgIGlmICghdGlsZVJlY29yZCkge1xuICAgICAgICAgICAgcmdiYVswXSAqPSAyNTU7XG4gICAgICAgICAgICByZ2JhWzFdICo9IDI1NTtcbiAgICAgICAgICAgIHJnYmFbMl0gKj0gMjU1O1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IChyZ2JhWzBdICogKDI1NiAqIDI1NiAqIDI1NikpICsgKHJnYmFbMV0gKiAoMjU2ICogMjU2KSkgKyAocmdiYVsyXSAqIDI1NikgKyBNYXRoLmZsb29yKHJnYmFbM10gKiAyNTUpO1xuICAgICAgICAgICAgdGlsZXNbdGlsZV0gPSB0aWxlUmVjb3JkID0gdGhpcy5nZXRUaWxlKHRpbGUpLmNvcHlXaXRoQ29sKHZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aWxlUmVjb3JkO1xuICAgIH1cblxuICAgIGdldFNoYWRlZFRpbGUodGlsZTogbnVtYmVyLCB0aW50TmFtZTogc3RyaW5nLCBzaGFkZTogbnVtYmVyKTogQml0bWFwIHtcbiAgICAgICAgbGV0IHRpbGVzID0gdGhpcy50aW50VGlsZXNbdGludE5hbWVdO1xuICAgICAgICBpZiAoIXRpbGVzKSB7XG4gICAgICAgICAgdGlsZXMgPSB0aGlzLnRpbnRUaWxlc1t0aW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgdGlsZVJlY29yZCA9IHRpbGVzW3RpbGVdO1xuICAgICAgICBpZiAoIXRpbGVSZWNvcmQpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKDI1NSAqICgyNTYgKiAyNTYgKiAyNTYpKSArICgyNTUgKiAoMjU2ICogMjU2KSkgKyAoMjU1ICogMjU2KSArIE1hdGguZmxvb3Ioc2hhZGUgKiAyNTUpO1xuICAgICAgICAgICAgdGlsZXNbdGlsZV0gPSB0aWxlUmVjb3JkID0gdGhpcy5nZXRUaWxlKHRpbGUpLmNvcHlXaXRoQ29sKHZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aWxlUmVjb3JkO1xuICAgIH1cblxuICAgIGdldFRpbnRlZFRpbGUodGlsZTogbnVtYmVyLCB0aW50TmFtZTogc3RyaW5nLCBzb3VyY2U6IG51bWJlcltdKTogQml0bWFwIHtcbiAgICAgICAgbGV0IHRpbGVzID0gdGhpcy50aW50VGlsZXNbdGludE5hbWVdO1xuICAgICAgICBpZiAoIXRpbGVzKSB7XG4gICAgICAgICAgdGlsZXMgPSB0aGlzLnRpbnRUaWxlc1t0aW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgdGlsZVJlY29yZCA9IHRpbGVzW3RpbGVdO1xuICAgICAgICBpZiAoIXRpbGVSZWNvcmQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJnYmEgPSBbLi4uc291cmNlXTtcbiAgICAgICAgICAgIHJnYmFbMF0gKj0gMjU1O1xuICAgICAgICAgICAgcmdiYVsxXSAqPSAyNTU7XG4gICAgICAgICAgICByZ2JhWzJdICo9IDI1NTtcbiAgICAgICAgICAgIGlmICghcmdiYVszXSkge1xuICAgICAgICAgICAgICAgIHJnYmFbM10gPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IChyZ2JhWzBdICogKDI1NiAqIDI1NiAqIDI1NikpICsgKHJnYmFbMV0gKiAoMjU2ICogMjU2KSkgKyAocmdiYVsyXSAqIDI1NikgKyBNYXRoLmZsb29yKHJnYmFbM10gKiAyNTUpO1xuXG4gICAgICAgICAgICB0aWxlc1t0aWxlXSA9IHRpbGVSZWNvcmQgPSB0aGlzLmdldFRpbGUodGlsZSkuY29weVdpdGhDb2wodmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpbGVSZWNvcmQ7XG4gICAgfVxuXG4gICAgbW9kaWZ5KG1vZGlmaWNhdGlvbjogKGltYWdlRGF0YTogSW1hZ2VEYXRhKSA9PiB2b2lkKTogVGlsZXNldCB7XG4gICAgICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmltYWdlIS53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UhLmhlaWdodDtcbiAgICAgICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlISwgMCwgMCk7XG4gICAgICAgICAgICBjb25zdCBpZDogSW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgbW9kaWZpY2F0aW9uKGlkKTtcbiAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaWQsIDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aGlzLmJpdG1hcHMpIHtcbiAgICAgICAgICAgIHRpbGUuaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0VGlsZXNBY3Jvc3MoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbmxpbmU7XG4gICAgfVxuXG4gICAgZ2V0VGlsZVdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVXaWR0aDtcbiAgICB9XG5cbiAgICBnZXRUaWxlSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVIZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0VGlsZUNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVDb3VudDtcbiAgICB9XG5cbiAgICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICAgIH1cblxuICAgIGdldFRpbGUodGlsZTogbnVtYmVyKTogT3BlbkdMVGlsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJpdG1hcHNbdGlsZV07XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgTWFwTm9kZSB9IGZyb20gXCIuL01hcE5vZGVcIjtcbmltcG9ydCB7IFBhdGggfSBmcm9tIFwiLi9QYXRoXCI7XG5pbXBvcnQgeyBQYXRoRmluZGVyTWFwIH0gZnJvbSBcIi4vUGF0aEZpbmRlck1hcFwiO1xuaW1wb3J0IHsgUGF0aE1vdmVyIH0gZnJvbSBcIi4vUGF0aE1vdmVyXCI7XG5cbmV4cG9ydCBjbGFzcyBBU3RhclBhdGhGaW5kZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgTk9SVEhfVE9fU09VVEggPSAwO1xuICAgIHB1YmxpYyBzdGF0aWMgRUFTVF9UT19XRVNUID0gMTtcbiAgICBwdWJsaWMgc3RhdGljIFNPVVRIX1RPX05PUlRIID0gMjtcbiAgICBwdWJsaWMgc3RhdGljIFdFU1RfVE9fRUFTVCA9IDM7XG4gICAgcHVibGljIHN0YXRpYyBOT05FID0gNDtcblxuICAgIHByaXZhdGUgb2JqZWN0UG9vbDogQXJyYXk8TWFwTm9kZT4gPSBbXTtcbiAgICBwcml2YXRlIG9wZW5MaXN0OiBBcnJheTxNYXBOb2RlPiA9IFtdO1xuICAgIHByaXZhdGUgcGFyZW50TGlzdDogQXJyYXk8TWFwTm9kZT4gPSBbXTtcbiAgICBwcml2YXRlIG9wZW46IEFycmF5PEFycmF5PG51bWJlcj4+ID0gW107XG4gICAgcHJpdmF0ZSBjbG9zZWQ6IEFycmF5PEFycmF5PG51bWJlcj4+ID0gW107XG5cbiAgICBwcml2YXRlIG1hcCE6IFBhdGhGaW5kZXJNYXA7XG4gICAgcHJpdmF0ZSBoZWlnaHQhOiBudW1iZXI7XG4gICAgcHJpdmF0ZSB3aWR0aCE6IG51bWJlcjtcblxuICAgIHByaXZhdGUgcGF0aEZpbmRDb3VudGVyOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbW92ZXIhOiBQYXRoTW92ZXI7XG4gICAgcHJpdmF0ZSB0eCE6IG51bWJlcltdO1xuICAgIHByaXZhdGUgdHkhOiBudW1iZXJbXTtcbiAgICBwcml2YXRlIGN4ITogbnVtYmVyO1xuICAgIHByaXZhdGUgY3khOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBtYXghOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IobWFwOiBQYXRoRmluZGVyTWFwKSB7XG4gICAgICAgIHRoaXMuc2V0TWFwKG1hcCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE1hcChtYXA6IFBhdGhGaW5kZXJNYXApIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1hcC5nZXRNYXBXaWR0aCgpO1xuICAgICAgICB0aGlzLmhlaWdodCA9IG1hcC5nZXRNYXBIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG5cbiAgICAgICAgaWYgKCF0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3BlbiA9IG5ldyBBcnJheTxBcnJheTxudW1iZXI+PigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkID0gbmV3IEFycmF5PEFycmF5PG51bWJlcj4+KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbyA9IHRoaXMub3BlbltpXSBcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jbG9zZWRbaV07XG5cbiAgICAgICAgICAgIGlmICghbykge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbltpXSA9IG8gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG8ucHVzaCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlZFtpXSA9IGMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGMucHVzaCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNTsgaisrKSB7XG4gICAgICAgICAgICAgICAgb1tqXSA9IDA7XG4gICAgICAgICAgICAgICAgY1tqXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2YgdGhpcy5vcGVuTGlzdCkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3RQb29sLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiB0aGlzLnBhcmVudExpc3QpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UG9vbC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyZW50TGlzdCA9IFtdXG4gICAgICAgIHRoaXMub3Blbkxpc3QgPSBbXVxuICAgICAgICB0aGlzLnBhdGhGaW5kQ291bnRlcisrO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2VuZXJhdGVQYXRoKG5vZGU6IE1hcE5vZGUpOiBQYXRoIHtcbiAgICAgICAgdmFyIGN1cnJlbnQ6IE1hcE5vZGUgfCBudWxsID0gbm9kZTtcbiAgICAgICAgdmFyIHBhdGg6IFBhdGggPSBuZXcgUGF0aCgpO1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHBhdGguYWRkKGN1cnJlbnQueCwgY3VycmVudC55KTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIHByaXZhdGUgYmxvY2tlZChzeDogbnVtYmVyLCBzeTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMubWFwLmxvY2F0aW9uRGlzY292ZXJlZCh4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuYmxvY2tlZCh0aGlzLm1vdmVyLCBudWxsLCBzeCwgc3ksIHgsIHksIHRoaXMuYXRUYXJnZXQoeCwgeSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXRUYXJnZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0eCA9IHRoaXMudHhbaV1cbiAgICAgICAgICAgIGNvbnN0IHR5ID0gdGhpcy50eVtpXVxuICAgICAgICAgICAgaWYgKHR4ID49IHggJiYgdHggPCB4ICsgdGhpcy5tb3Zlci5nZXRUaWxlc1dpZHRoKClcbiAgICAgICAgICAgICAgICAmJiB0eSA+PSB5ICYmIHR5IDwgeSArIHRoaXMubW92ZXIuZ2V0VGlsZXNIZWlnaHQoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kUGF0aChtb3ZlcjogUGF0aE1vdmVyLCB0eDogbnVtYmVyLCB0eTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbWF4OiBudW1iZXIpOiBQYXRoIHwgbnVsbCB7XG5cbiAgICAgICAgdHggPSBNYXRoLmZsb29yKHR4KTtcbiAgICAgICAgdHkgPSBNYXRoLmZsb29yKHR5KTtcblxuXG4gICAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgICAgICB0aGlzLm1vdmVyID0gbW92ZXI7XG4gICAgICAgIHRoaXMudHggPSBbXTtcbiAgICAgICAgdGhpcy50eSA9IFtdO1xuICAgICAgICAvLyBjZW50cmFsIHBvaW50IGZvciBoZXVyaXN0aWMgb3JkZXJpbmdcbiAgICAgICAgdGhpcy5jeCA9IHR4ICsgd2lkdGggLyAyXG4gICAgICAgIHRoaXMuY3kgPSB0eSArIGhlaWdodCAvIDJcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudHgucHVzaCh0eCArIGkpXG4gICAgICAgICAgICB0aGlzLnR5LnB1c2godHkpXG4gICAgICAgICAgICBpZiAoaGVpZ2h0ID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHgucHVzaCh0eCArIGkpXG4gICAgICAgICAgICAgICAgdGhpcy50eS5wdXNoKHR5ICsgaGVpZ2h0IC0gMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoZWlnaHQgPiAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGhlaWdodCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudHgucHVzaCh0eClcbiAgICAgICAgICAgICAgICB0aGlzLnR5LnB1c2godHkgKyBpKVxuICAgICAgICAgICAgICAgIGlmICh3aWR0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eC5wdXNoKHR4ICsgd2lkdGggLSAxKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR5LnB1c2godHkgKyBpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnR4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgICAgdGhpcy5hZGRMb2NhdGlvbihudWxsLCBNYXRoLmZsb29yKG1vdmVyLmdldFRpbGVNYXBYKCkpLCBNYXRoLmZsb29yKG1vdmVyLmdldFRpbGVNYXBZKCkpKTtcbiAgICAgICAgd2hpbGUgKHRoaXMub3Blbkxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgYmVzdDogTWFwTm9kZSA9IHRoaXMub3Blbkxpc3RbMF07XG4gICAgICAgICAgICB0aGlzLm9wZW5MaXN0LnNwbGljZSgwLCAxKTtcblxuICAgICAgICAgICAgLy8gaWYgYmVzdCBpcyB0aGUgdGFyZ2V0IHRoZW4gd2UndmUgZm91bmQgaXQhXG4gICAgICAgICAgICBpZiAodGhpcy5hdFRhcmdldChiZXN0LngsIGJlc3QueSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVBhdGgoYmVzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54ICsgMSwgYmVzdC55KTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54IC0gMSwgYmVzdC55KTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54LCBiZXN0LnkgKyAxKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTG9jYXRpb24oYmVzdCwgYmVzdC54LCBiZXN0LnkgLSAxKTtcblxuICAgICAgICAgICAgdGhpcy5wYXJlbnRMaXN0LnB1c2goYmVzdClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTG9jYXRpb24ocGFyZW50OiBNYXBOb2RlIHwgbnVsbCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoeCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKHkpO1xuXG4gICAgICAgIHZhciBzeCA9IHg7XG4gICAgICAgIHZhciBzeSA9IHk7XG4gICAgICAgIHZhciBkaXIgPSBBU3RhclBhdGhGaW5kZXIuTk9ORTtcblxuICAgICAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN4ID0gcGFyZW50Lng7XG4gICAgICAgICAgICBzeSA9IHBhcmVudC55O1xuXG4gICAgICAgICAgICBpZiAoc3kgKyAxID09IHkpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBBU3RhclBhdGhGaW5kZXIuTk9SVEhfVE9fU09VVEg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3kgLSAxID09IHkpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBBU3RhclBhdGhGaW5kZXIuU09VVEhfVE9fTk9SVEg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3ggKyAxID09IHgpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBBU3RhclBhdGhGaW5kZXIuV0VTVF9UT19FQVNUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN4IC0gMSA9PSB4KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLkVBU1RfVE9fV0VTVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCF0aGlzLm1hcC52YWxpZExvY2F0aW9uKHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBpdCdzIGluIHRoZSBvcGVuIGxpc3QgaWdub3JlXG4gICAgICAgIGlmICh0aGlzLm9wZW5beCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPT0gdGhpcy5wYXRoRmluZENvdW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jbG9zZWRbeCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPT0gdGhpcy5wYXRoRmluZENvdW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGl0J3MgYmxvY2tlZCBmb3IgYW55IHJlYXNvbiwgYWRkIGl0IHRvIHRoZSBjbG9zZWRcbiAgICAgICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50LmRlcHRoID4gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlZFt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ibG9ja2VkKHN4LCBzeSwgeCwgeSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID0gdGhpcy5wYXRoRmluZENvdW50ZXI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvdGhlcndpc2UgaXQncyBhIHBvc3NpYmxlIHN0ZXAgYWRkIGl0IHRvIHRoZSBvcGVuXG4gICAgICAgIHRoaXMub3Blblt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuXG4gICAgICAgIGNvbnN0IGR4OiBudW1iZXIgPSBNYXRoLmFicyh0aGlzLmN4IC0geCk7XG4gICAgICAgIGNvbnN0IGR5OiBudW1iZXIgPSBNYXRoLmFicyh0aGlzLmN5IC0geSk7XG5cbiAgICAgICAgY29uc3Qgbm9kZTogTWFwTm9kZSA9IHRoaXMuY3JlYXRlTWFwTm9kZSh4LCB5LCBwYXJlbnQsIGR4ICsgZHkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IEFTdGFyUGF0aEZpbmRlci5iaW5hcnlTZWFyY2godGhpcy5vcGVuTGlzdCwgbm9kZS5oKVxuICAgICAgICB0aGlzLm9wZW5MaXN0LnNwbGljZShpbmRleCwgMCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYmluYXJ5U2VhcmNoKGFycmF5OiBNYXBOb2RlW10sIGg6IG51bWJlcikge1xuICAgICAgICBsZXQgbG8gPSAtMSwgaGkgPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgxICsgbG8gPCBoaSkge1xuICAgICAgICAgICAgY29uc3QgbWkgPSBsbyArICgoaGkgLSBsbykgPj4gMSk7XG4gICAgICAgICAgICBpZiAoYXJyYXlbbWldLmggPiBoKSB7XG4gICAgICAgICAgICAgICAgaGkgPSBtaTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG8gPSBtaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGk7XG4gICAgfVxuXG4gICAgLy8gb2JqZWN0IHBvb2wgYWNjZXNzb3IgLSBmcmVlIGlzIGRvbmUgaW4gYnVsa1xuICAgIHByaXZhdGUgY3JlYXRlTWFwTm9kZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcGFyZW50OiBNYXBOb2RlIHwgbnVsbCwgaDogbnVtYmVyKTogTWFwTm9kZSB7XG4gICAgICAgIGlmICh0aGlzLm9iamVjdFBvb2wubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHZhciBuOiBNYXBOb2RlID0gbmV3IE1hcE5vZGUoKTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UG9vbC5wdXNoKG4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5vZGU6IE1hcE5vZGUgPSB0aGlzLm9iamVjdFBvb2xbMF07XG4gICAgICAgIHRoaXMub2JqZWN0UG9vbC5zcGxpY2UoMCwgMSk7XG4gICAgICAgIG5vZGUueCA9IHg7XG4gICAgICAgIG5vZGUueSA9IHk7XG4gICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUuZGVwdGggPSBwYXJlbnQuZGVwdGggKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5kZXB0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5oID0gaCArIG5vZGUuZGVwdGg7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxufVxuIiwiZXhwb3J0IGNsYXNzIE1hcE5vZGUge1xuICAgIHghOiBudW1iZXI7XG4gICAgeSE6IG51bWJlcjtcbiAgICBwYXJlbnQhOiBNYXBOb2RlIHwgbnVsbDtcbiAgICBoITogbnVtYmVyO1xuICAgIGRlcHRoITogbnVtYmVyO1xufSIsImltcG9ydCB7IEd1dGVMb2cgfSBmcm9tIFwiLi4vTG9nXCI7XG5pbXBvcnQgeyBTdGVwIH0gZnJvbSBcIi4vU3RlcFwiO1xuXG5leHBvcnQgY2xhc3MgUGF0aCB7XG4gICAgc3RlcHM6IEFycmF5PFN0ZXA+ID0gbmV3IEFycmF5PFN0ZXA+KCk7XG5cbiAgICBhZGQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGVwcy5zcGxpY2UoMCwgMCwgbmV3IFN0ZXAoeCwgeSkpO1xuICAgIH1cblxuICAgIGdldExhc3RTdGVwKCk6IFN0ZXAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGVwc1t0aGlzLnN0ZXBzLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIHBvcCgpOiBTdGVwIHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBTdGVwID0gdGhpcy5zdGVwc1swXTtcbiAgICAgICAgdGhpcy5zdGVwcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgY29weSgpOiBQYXRoIHtcbiAgICAgICAgY29uc3QgY29weSA9IG5ldyBQYXRoKCk7XG4gICAgICAgIGZvciAoY29uc3Qgc3RlcCBvZiB0aGlzLnN0ZXBzKSB7XG4gICAgICAgICAgICBjb3B5LnN0ZXBzLnB1c2gobmV3IFN0ZXAoc3RlcC54LCBzdGVwLnkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29weS5zdGVwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIEd1dGVMb2cubG9nKFwiQ3JlYXRlZCBjb3B5IG9mIHBhdGggd2l0aCB6ZXJvIHN0ZXBzOiBcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29weTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFN0ZXAge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBHdXRlTG9nIH0gZnJvbSBcIi4uL0xvZ1wiO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tIFwiLi4vUmVzb3VyY2VcIjtcbmltcG9ydCB7IE1hcEVudGl0eSB9IGZyb20gXCIuL01hcEVudGl0eVwiO1xuaW1wb3J0IHsgTWFwTGF5ZXIgfSBmcm9tIFwiLi9NYXBMYXllclwiO1xuaW1wb3J0IHsgTWFwTGV2ZWwgfSBmcm9tIFwiLi9NYXBMZXZlbFwiO1xuaW1wb3J0IHsgTWFwV29ybGQgfSBmcm9tIFwiLi9NYXBXb3JsZFwiO1xuXG5pbnRlcmZhY2UgRW50aXR5UmVmIHtcbiAgdmFsdWU6IHN0cmluZ3xzdHJpbmdbXVxuICBlbnRpdHk6IE1hcEVudGl0eVxuICBmaWVsZDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTERUS0xheWVyQ29tcHJlc3Npb24ge1xuICBmcm9tOiBzdHJpbmc7XG4gIHRvOiBzdHJpbmc7XG4gIG9mZnNldDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTERUS1dvcmxkIGV4dGVuZHMgTWFwV29ybGQgaW1wbGVtZW50cyBSZXNvdXJjZSB7XG4gIHN0YXRpYyBMQVlFUl9DT01QUkVTU0lPTlM6IExEVEtMYXllckNvbXByZXNzaW9uW10gPSBbXTtcblxuICBuYW1lOiBzdHJpbmcgPSBcIndvcmxkXCI7XG4gIHRpbGVzZXRzOiBhbnlbXSA9IFtdO1xuXG4gIGluaXRPbkZpcnN0Q2xpY2soKTogdm9pZCB7XG4gIH1cblxuICBsb2FkKGZpbGU6IHN0cmluZywgbG9hZGVyOiAoZmlsZTogc3RyaW5nKSA9PiBQcm9taXNlPGFueT4pIDogUHJvbWlzZTxNYXBXb3JsZD4ge1xuICAgIHRoaXMubmFtZSA9IGZpbGU7XG5cbiAgICByZXR1cm4gbG9hZGVyKGZpbGUpLnRoZW4oanNvbiA9PiB7XG4gICAgICBjb25zdCBlbnRpdHlSZWZzIDogRW50aXR5UmVmW10gPSBbXVxuICAgICAgY29uc3QgZW50aXR5TWFwOiBSZWNvcmQ8c3RyaW5nLCBNYXBFbnRpdHk+ID0ge31cbiAgICAgIFxuICAgICAgdGhpcy5ncmlkU2l6ZSA9IGpzb24uZGVmYXVsdEdyaWRTaXplO1xuICAgICAgY29uc3QgdGlsZXNldDogYW55ID0ganNvbi5kZWZzLnRpbGVzZXRzWzBdO1xuICAgICAgdGhpcy50aWxlc2V0cyA9IGpzb24uZGVmcy50aWxlc2V0cztcbiAgICAgIHRoaXMudGlsZXNldFNjYW5saW5lID0gdGlsZXNldC5weFdpZCAvIHRpbGVzZXQudGlsZUdyaWRTaXplO1xuICAgICAgdGhpcy50aWxlc2V0U2l6ZSA9IHRpbGVzZXQudGlsZUdyaWRTaXplO1xuXG4gICAgICBsZXQgbGV2ZWxzID0ganNvbi5sZXZlbHM7XG4gICAgICBpZiAoanNvbi53b3JsZHMgJiYganNvbi53b3JsZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXZlbHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCB3b3JsZCBvZiBqc29uLndvcmxkcykge1xuICAgICAgICAgIGxldmVscyA9IGxldmVscy5jb25jYXQod29ybGQubGV2ZWxzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhc3luY0xldmVscyA6IFByb21pc2U8TWFwTGV2ZWw+W10gPSBbXVxuICAgICAgZm9yIChjb25zdCBsZXZlbERhdGEgb2YganNvbi5sZXZlbHMpIHtcbiAgICAgICAgY29uc3QgbGV2ZWw6IE1hcExldmVsID0gbmV3IE1hcExldmVsKHRoaXMsIGxldmVsRGF0YS5pZGVudGlmaWVyKTtcblxuICAgICAgICBsZXZlbC53b3JsZFggPSBsZXZlbERhdGEud29ybGRYO1xuICAgICAgICBsZXZlbC53b3JsZFkgPSBsZXZlbERhdGEud29ybGRZO1xuICAgICAgICBsZXZlbC53b3JsZERlcHRoID0gbGV2ZWxEYXRhLndvcmxkRGVwdGg7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkSW5zdGFuY2Ugb2YgbGV2ZWxEYXRhLmZpZWxkSW5zdGFuY2VzKSB7XG4gICAgICAgICAgbGV2ZWwuZmllbGRzW2ZpZWxkSW5zdGFuY2UuX19pZGVudGlmaWVyXSA9IGZpZWxkSW5zdGFuY2UuX192YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsYXllcnMgOiBQcm9taXNlPGFueT5cbiAgICAgICAgaWYgKGxldmVsRGF0YS5sYXllckluc3RhbmNlcykgLy8gZW1iZWRkZWQgbGF5ZXJzXG4gICAgICAgICAgbGF5ZXJzID0gUHJvbWlzZS5yZXNvbHZlKGxldmVsRGF0YSlcbiAgICAgICAgZWxzZSBpZiAobGV2ZWxEYXRhLmV4dGVybmFsUmVsUGF0aCkge1xuICAgICAgICAgIGxheWVycyA9IGxvYWRlcihsZXZlbERhdGEuZXh0ZXJuYWxSZWxQYXRoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gTERUSyBmaWxlIGZvcm1hdFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmNMZXZlbHMucHVzaChsYXllcnMudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBMRFRLV29ybGQubG9hZExheWVycyhsZXZlbCwgZGF0YS5sYXllckluc3RhbmNlcywgZW50aXR5UmVmcywgZW50aXR5TWFwKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAobGV2ZWwubGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldmVsLndpZHRoID0gbGV2ZWwubGF5ZXJzWzBdLndpZHRoO1xuICAgICAgICAgICAgbGV2ZWwuaGVpZ2h0ID0gbGV2ZWwubGF5ZXJzWzBdLmhlaWdodDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV2ZWwud2lkdGggPSBsZXZlbERhdGEucHhXaWQgLyB0aGlzLmdyaWRTaXplO1xuICAgICAgICAgICAgbGV2ZWwuaGVpZ2h0ID0gbGV2ZWxEYXRhLnB4SGVpIC8gdGhpcy5ncmlkU2l6ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmxldmVsc1tsZXZlbC5pZF0gPSBsZXZlbDtcbiAgICAgICAgICByZXR1cm4gbGV2ZWxcbiAgICAgICAgfSkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChhc3luY0xldmVscykudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgIC8vIHJlc29sdmUgYWxsIGVudGl0eSBpZHMgbm93IHRoYXQgd2UgaGF2ZSBhbGwgdGhlIGRhdGFcbiAgICAgICAgZm9yIChjb25zdCByZWYgb2YgZW50aXR5UmVmcykge1xuICAgICAgICAgIGlmIChyZWYudmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgOiBNYXBFbnRpdHlbXSA9IFtdXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVmLnZhbHVlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IGVudGl0eU1hcFtpdGVtXVxuICAgICAgICAgICAgICBpZiAoZW50aXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUucHVzaChlbnRpdHkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZi5lbnRpdHkuZmllbGRzW3JlZi5maWVsZF0gPSB2YWx1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlbnRpdHkgPSBlbnRpdHlNYXBbcmVmLnZhbHVlXVxuICAgICAgICAgICAgaWYgKGVudGl0eSkge1xuICAgICAgICAgICAgICByZWYuZW50aXR5LmZpZWxkc1tyZWYuZmllbGRdID0gZW50aXR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgfSlcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgR3V0ZUxvZy5lcnJvcihlKTtcbiAgICAgIHRocm93IGU7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHByaXZhdGUgc3RhdGljIGxvYWRMYXllcnMobGV2ZWw6IE1hcExldmVsLCBsYXllckluc3RhbmNlczogYW55LCBlbnRpdHlSZWZzOiBFbnRpdHlSZWZbXSwgZW50aXR5TWFwOiBSZWNvcmQ8c3RyaW5nLCBNYXBFbnRpdHk+KSB7XG4gICAgZm9yIChjb25zdCBsYXllckRhdGEgb2YgbGF5ZXJJbnN0YW5jZXMpIHtcbiAgICAgIGlmIChsYXllckRhdGEuX190eXBlID09PSBcIkVudGl0aWVzXCIpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbnRpdHlEYXRhIG9mIGxheWVyRGF0YS5lbnRpdHlJbnN0YW5jZXMpIHtcbiAgICAgICAgICBjb25zdCBlbnRpdHk6IE1hcEVudGl0eSA9IG5ldyBNYXBFbnRpdHkobGV2ZWwsXG4gICAgICAgICAgICAgIGVudGl0eURhdGEucHhbMF0gLyBsYXllckRhdGEuX19ncmlkU2l6ZSxcbiAgICAgICAgICAgICAgZW50aXR5RGF0YS5weFsxXSAvIGxheWVyRGF0YS5fX2dyaWRTaXplLFxuICAgICAgICAgICAgICBlbnRpdHlEYXRhLndpZHRoIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUsXG4gICAgICAgICAgICAgIGVudGl0eURhdGEuaGVpZ2h0IC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUsXG4gICAgICAgICAgICAgIGVudGl0eURhdGEuX19pZGVudGlmaWVyKVxuXG4gICAgICAgICAgZW50aXR5LmlkID0gZW50aXR5RGF0YS5paWQ7XG4gICAgICAgICAgZW50aXR5TWFwW2VudGl0eURhdGEuaWlkXSA9IGVudGl0eVxuICAgICAgICAgIGZvciAoY29uc3QgZmllbGRJbnN0YW5jZSBvZiBlbnRpdHlEYXRhLmZpZWxkSW5zdGFuY2VzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGZpZWxkSW5zdGFuY2UuX190eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJFbnRpdHlSZWZcIjogLy8gc2F2ZSBpbmZvcm1hdGlvbiB0byByZXNvbHZlIHJlZnMgdG8gZW50aXRpZXMgbGF0ZXIgd2hlbiBhbGwgaW5mb3JtYXRpb24gd2lsbCBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBlbnRpdHlSZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkSW5zdGFuY2UuX192YWx1ZS5lbnRpdHlJaWQsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IGVudGl0eSxcbiAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZEluc3RhbmNlLl9faWRlbnRpZmllclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJheTxFbnRpdHlSZWY+XCI6XG4gICAgICAgICAgICAgICAgZW50aXR5UmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAoZmllbGRJbnN0YW5jZS5fX3ZhbHVlIGFzIEFycmF5PGFueT4pLm1hcChpdCA9PiBpdC5lbnRpdHlJaWQpLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBlbnRpdHksXG4gICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGRJbnN0YW5jZS5fX2lkZW50aWZpZXJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGVudGl0eS5maWVsZHNbZmllbGRJbnN0YW5jZS5fX2lkZW50aWZpZXJdID0gZmllbGRJbnN0YW5jZS5fX3ZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXZlbC5lbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbXByZXNzaW9uID0gTERUS1dvcmxkLkxBWUVSX0NPTVBSRVNTSU9OUy5maW5kKGMgPT4gYy5mcm9tID09PSBsYXllckRhdGEuX19pZGVudGlmaWVyKTtcbiAgICAgICAgbGV0IGxheWVyOiBNYXBMYXllciB8IHVuZGVmaW5lZDsgXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBpZiAoY29tcHJlc3Npb24pIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRMYXllciA9IGxldmVsLmxheWVyQnlOYW1lW2NvbXByZXNzaW9uLnRvXTtcbiAgICAgICAgICBpZiAoIXRhcmdldExheWVyKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlVuYWJsZSB0byBmaW5kIGNvbXByZXNzaW9uIGxheWVyOiBcIiArIGNvbXByZXNzaW9uLnRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxheWVyID0gdGFyZ2V0TGF5ZXI7XG4gICAgICAgICAgb2Zmc2V0ID0gY29tcHJlc3Npb24ub2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxheWVyID0gbmV3IE1hcExheWVyKGxldmVsLCBsYXllckRhdGEuX19pZGVudGlmaWVyLCBsYXllckRhdGEuX19jV2lkLCBsYXllckRhdGEuX19jSGVpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpbGVzZXQgPSAobGV2ZWwud29ybGQgYXMgTERUS1dvcmxkKS50aWxlc2V0cy5maW5kKHQgPT4gdC51aWQgPT09IGxheWVyRGF0YS5fX3RpbGVzZXREZWZVaWQpO1xuXG4gICAgICAgIGNvbnN0IHNjYW5saW5lOiBudW1iZXIgPXRpbGVzZXQucHhXaWQgLyB0aWxlc2V0LnRpbGVHcmlkU2l6ZTtcbiAgICAgICAgY29uc3QgdGlsZVNpemU6IG51bWJlciA9dGlsZXNldC50aWxlR3JpZFNpemU7XG5cbiAgICAgICAgZm9yIChjb25zdCB0aWxlIG9mIGxheWVyRGF0YS5ncmlkVGlsZXMpIHtcbiAgICAgICAgICBjb25zdCB4OiBudW1iZXIgPSBNYXRoLmZsb29yKHRpbGUucHhbMF0gLyBsYXllckRhdGEuX19ncmlkU2l6ZSk7XG4gICAgICAgICAgY29uc3QgeTogbnVtYmVyID0gTWF0aC5mbG9vcih0aWxlLnB4WzFdIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUpO1xuICAgICAgICAgIGNvbnN0IHBvc0luZGV4OiBudW1iZXIgPSB4ICsgKHkgKiBsYXllci53aWR0aCk7XG5cbiAgICAgICAgICBjb25zdCB0eDogbnVtYmVyID0gTWF0aC5mbG9vcih0aWxlLnNyY1swXSAvIHRpbGVTaXplKTtcbiAgICAgICAgICBjb25zdCB0eTogbnVtYmVyID0gTWF0aC5mbG9vcih0aWxlLnNyY1sxXSAvIHRpbGVTaXplKTtcblxuICAgICAgICAgIGNvbnN0IHRpbGVJbmRleDogbnVtYmVyID0gKHR5ICogc2NhbmxpbmUpICsgdHg7XG4gICAgICAgICAgbGF5ZXIudGlsZXNbcG9zSW5kZXhdID0gdGlsZUluZGV4ICsgMSArIG9mZnNldDtcbiAgICAgICAgICBsYXllci5mbGlwc1twb3NJbmRleF0gPSB0aWxlLmY7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbXByZXNzaW9uKSB7XG4gICAgICAgICAgbGV2ZWwubGF5ZXJzLnNwbGljZSgwLCAwLCBsYXllcik7XG4gICAgICAgICAgbGV2ZWwubGF5ZXJCeU5hbWVbbGF5ZXIubmFtZV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTWFwTGV2ZWwgfSBmcm9tIFwiLi9NYXBMZXZlbFwiO1xuXG5leHBvcnQgY2xhc3MgTWFwRW50aXR5IHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsZXZlbDogTWFwTGV2ZWw7XG4gIGZpZWxkczogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IobGV2ZWw6IE1hcExldmVsLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBjb3B5KGxldmVsOiBNYXBMZXZlbCk6IE1hcEVudGl0eSB7XG4gICAgY29uc3QgcmVzdWx0OiBNYXBFbnRpdHkgPSBuZXcgTWFwRW50aXR5KGxldmVsLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMudHlwZSk7XG4gICAgcmVzdWx0LmZpZWxkcyA9IHsuLi50aGlzLmZpZWxkc307XG4gICAgcmVzdWx0LmlkID0gdGhpcy5pZDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0iLCJpbXBvcnQgeyBNYXBMZXZlbCB9IGZyb20gXCIuL01hcExldmVsXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXBMYXllciB7XG4gIHN0YXRpYyBGTElQX1g6IG51bWJlciA9IDE7XG4gIHN0YXRpYyBGTElQX1k6IG51bWJlciA9IDI7XG4gIFxuICBuYW1lOiBzdHJpbmc7XG4gIGxldmVsOiBNYXBMZXZlbDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHRpbGVzOiBudW1iZXJbXTtcbiAgZmxpcHM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKGxldmVsOiBNYXBMZXZlbCwgbmFtZTogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuICAgIHRoaXMudGlsZXMgPSBbXTtcbiAgICB0aGlzLmZsaXBzID0gW107XG4gICAgZm9yIChsZXQgaT0wO2k8dGhpcy53aWR0aCp0aGlzLmhlaWdodDtpKyspIHtcbiAgICAgIHRoaXMudGlsZXMucHVzaCgwKTtcbiAgICAgIHRoaXMuZmxpcHMucHVzaCgwKTtcbiAgICB9XG4gIH1cblxuICBnZXRGbGlwRmxhZ3MoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICgoeCA8IDApIHx8ICh5IDwgMCkgfHwgKHggPj0gdGhpcy53aWR0aCkgfHwgKHkgPj0gdGhpcy5oZWlnaHQpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgcG9zSW5kZXg6IG51bWJlciA9IHggKyAoeSAqIHRoaXMud2lkdGgpO1xuICAgIFxuICAgIHJldHVybiB0aGlzLmZsaXBzW3Bvc0luZGV4XTtcbiAgfVxuXG4gIHNldCh4OiBudW1iZXIsIHk6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICgoeCA8IDApIHx8ICh5IDwgMCkgfHwgKHggPj0gdGhpcy53aWR0aCkgfHwgKHkgPj0gdGhpcy5oZWlnaHQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBvc0luZGV4OiBudW1iZXIgPSB4ICsgKHkgKiB0aGlzLndpZHRoKTtcbiAgICB0aGlzLnRpbGVzW3Bvc0luZGV4XSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0KHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoKHggPCAwKSB8fCAoeSA8IDApIHx8ICh4ID49IHRoaXMud2lkdGgpIHx8ICh5ID49IHRoaXMuaGVpZ2h0KSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IHBvc0luZGV4OiBudW1iZXIgPSB4ICsgKHkgKiB0aGlzLndpZHRoKTtcbiAgICBcbiAgICByZXR1cm4gdGhpcy50aWxlc1twb3NJbmRleF07XG4gIH1cblxuICBjb3B5KGxldmVsOiBNYXBMZXZlbCk6IE1hcExheWVyIHtcbiAgICBjb25zdCByZXN1bHQ6IE1hcExheWVyID0gbmV3IE1hcExheWVyKGxldmVsLCB0aGlzLm5hbWUsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBmb3IgKGxldCBpPTA7aTx0aGlzLndpZHRoKnRoaXMuaGVpZ2h0O2krKykge1xuICAgICAgcmVzdWx0LnRpbGVzW2ldID0gdGhpcy50aWxlc1tpXTtcbiAgICAgIHJlc3VsdC5mbGlwc1tpXSA9IHRoaXMuZmxpcHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSIsImltcG9ydCB7IE1hcEVudGl0eSB9IGZyb20gXCIuL01hcEVudGl0eVwiO1xuaW1wb3J0IHsgTWFwTGF5ZXIgfSBmcm9tIFwiLi9NYXBMYXllclwiO1xuaW1wb3J0IHsgTWFwV29ybGQgfSBmcm9tIFwiLi9NYXBXb3JsZFwiO1xuXG5leHBvcnQgY2xhc3MgTWFwTGV2ZWwge1xuICBpZDogc3RyaW5nO1xuICBsYXllcnM6IE1hcExheWVyW10gPSBbXTtcbiAgbGF5ZXJCeU5hbWU6IFJlY29yZDxzdHJpbmcsIE1hcExheWVyPiA9IHt9O1xuICB3aWR0aCE6IG51bWJlcjtcbiAgaGVpZ2h0ITogbnVtYmVyO1xuICB3b3JsZDogTWFwV29ybGQ7XG4gIGVudGl0aWVzOiBNYXBFbnRpdHlbXSA9IFtdO1xuICBmaWVsZHM6IGFueSA9IHt9O1xuICB3b3JsZFg6IG51bWJlciA9IDA7XG4gIHdvcmxkWTogbnVtYmVyID0gMDtcbiAgd29ybGREZXB0aDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3Rvcih3b3JsZDogTWFwV29ybGQsIGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLndvcmxkID0gd29ybGQ7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgZW50aXRpZXNPZlR5cGUodHlwZTogc3RyaW5nKTogTWFwRW50aXR5W10ge1xuICAgIHJldHVybiB0aGlzLmVudGl0aWVzLmZpbHRlcihlbnRpdHkgPT4gZW50aXR5LnR5cGUgPT09IHR5cGUpO1xuICB9XG5cbiAgZmlyc3RFbnRpdHlPZlR5cGUodHlwZTogc3RyaW5nKTogTWFwRW50aXR5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdGllcy5maW5kKGVudGl0eSA9PiBlbnRpdHkudHlwZSA9PT0gdHlwZSk7XG4gIH1cblxuICBjb3B5KGlkOiBzdHJpbmcpOiBNYXBMZXZlbCB7XG4gICAgY29uc3Qgd29ybGRDb3B5OiBNYXBXb3JsZCA9IG5ldyBNYXBXb3JsZCgpO1xuICAgIHdvcmxkQ29weS5ncmlkU2l6ZSA9IHRoaXMud29ybGQuZ3JpZFNpemU7XG4gICAgd29ybGRDb3B5LmxvYWRlZCA9IHRoaXMud29ybGQubG9hZGVkO1xuICAgIHdvcmxkQ29weS50aWxlc2V0U2NhbmxpbmUgPSB0aGlzLndvcmxkLnRpbGVzZXRTY2FubGluZTtcbiAgICB3b3JsZENvcHkudGlsZXNldFNpemUgPSB0aGlzLndvcmxkLnRpbGVzZXRTaXplO1xuXG4gICAgY29uc3QgbGV2ZWxDb3B5OiBNYXBMZXZlbCA9IG5ldyBNYXBMZXZlbCh3b3JsZENvcHksIGlkKTtcbiAgICBsZXZlbENvcHkud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIGxldmVsQ29weS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICBsZXZlbENvcHkud29ybGRYID0gdGhpcy53b3JsZFg7XG4gICAgbGV2ZWxDb3B5LndvcmxkWSA9IHRoaXMud29ybGRZO1xuICAgIGxldmVsQ29weS53b3JsZERlcHRoID0gdGhpcy53b3JsZERlcHRoO1xuICAgIGxldmVsQ29weS5maWVsZHMgPSB7Li4udGhpcy5maWVsZHN9O1xuXG4gICAgZm9yIChjb25zdCBsYXllciBvZiB0aGlzLmxheWVycykge1xuICAgICAgY29uc3QgY29weTogTWFwTGF5ZXIgPSBsYXllci5jb3B5KGxldmVsQ29weSk7XG4gICAgICBsZXZlbENvcHkubGF5ZXJzLnB1c2goY29weSk7XG4gICAgICBsZXZlbENvcHkubGF5ZXJCeU5hbWVbY29weS5uYW1lXSA9IGNvcHk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZW50aXR5IG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgIGNvbnN0IGNvcHk6IE1hcEVudGl0eSA9IGVudGl0eS5jb3B5KGxldmVsQ29weSk7XG4gICAgICBsZXZlbENvcHkuZW50aXRpZXMucHVzaChjb3B5KTtcbiAgICB9XG4gICAgcmV0dXJuIGxldmVsQ29weTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tIFwiLi4vUmVzb3VyY2VcIjtcbmltcG9ydCB7IE1hcExldmVsIH0gZnJvbSBcIi4vTWFwTGV2ZWxcIjtcblxuZXhwb3J0IGNsYXNzIE1hcFdvcmxkIHtcbiAgbGV2ZWxzOiBSZWNvcmQ8c3RyaW5nLCBNYXBMZXZlbD4gPSB7fTtcbiAgZ3JpZFNpemU6IG51bWJlciA9IDA7XG4gIHRpbGVzZXRTY2FubGluZTogbnVtYmVyID0gMDtcbiAgdGlsZXNldFNpemU6IG51bWJlciA9IDA7XG4gIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG59IiwiLy8gT3B0aW9uc1xuY29uc3QgVVNFXzNYX09SSUdJTkFMX0lNUExFTUVOVEFUSU9OID0gZmFsc2U7XG5cbmNvbnN0XG4gIFJFRE1BU0sgICA9IDB4MDAwMDAwRkYsIC8vICZNQVNLXHQ+PjBcbiAgR1JFRU5NQVNLID0gMHgwMDAwRkYwMCwgLy8gJk1BU0tcdD4+OFxuICBCTFVFTUFTSyAgPSAweDAwRkYwMDAwLCAvLyAmTUFTS1x0Pj4xNlxuICBBTFBIQU1BU0sgPSAweEZGMDAwMDAwLCAvLyAmTUFTS1x0Pj4yNFxuICBUSFJFU0hIT0xEX1kgPSA0OCxcbiAgVEhSRVNISE9MRF9VID0gNyxcbiAgVEhSRVNISE9MRF9WID0gNjtcblxuLy8gQ29udmVydCBhbiBBUkdCIGJ5dGUgdG8gWVVWXG5mdW5jdGlvbiBnZXRZdXYocCkge1xuICBjb25zdFxuICAgIHIgPSAocCAmIFJFRE1BU0spLFxuICAgIGcgPSAocCAmIEdSRUVOTUFTSykgPj4gOCxcbiAgICBiID0gKHAgJiBCTFVFTUFTSykgPj4gMTYsXG4gICAgeSA9IHIgKiAuMjk5MDAwICsgZyAqIC41ODcwMDAgKyBiICogLjExNDAwMCxcbiAgICB1ID0gciAqICAtIC4xNjg3MzYgKyBnICogIC0gLjMzMTI2NCArIGIgKiAuNTAwMDAwLFxuICAgIHYgPSByICogLjUwMDAwMCArIGcgKiAgLSAuNDE4Njg4ICsgYiAqICAtIC4wODEzMTI7XG4gIHJldHVybiBbeSwgdSwgdl07XG59XG5cbmZ1bmN0aW9uIHl1dkRpZmZlcmVuY2UoQSwgQiwgc2NhbGVBbHBoYSkge1xuICBjb25zdFxuICAgIGFscGhhQSA9ICgoQSAmIEFMUEhBTUFTSykgPj4gMjQpICYgMHhmZixcbiAgICBhbHBoYUIgPSAoKEIgJiBBTFBIQU1BU0spID4+IDI0KSAmIDB4ZmY7XG5cbiAgaWYgKGFscGhhQSA9PT0gMCAmJiBhbHBoYUIgPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmICghc2NhbGVBbHBoYSAmJiAoYWxwaGFBIDwgMjU1IHx8IGFscGhhQiA8IDI1NSkpIHtcbiAgICAvLyBWZXJ5IGxhcmdlIHZhbHVlIG5vdCBhdHRhaW5hYmxlIGJ5IHRoZSB0aHJlc2hvbGRzXG4gICAgcmV0dXJuIDEwMDAwMDA7XG4gIH1cbiBcbiAgaWYgKGFscGhhQSA9PT0gMCB8fCBhbHBoYUIgPT09IDApIHtcbiAgICAvLyBWZXJ5IGxhcmdlIHZhbHVlIG5vdCBhdHRhaW5hYmxlIGJ5IHRoZSB0aHJlc2hvbGRzXG4gICAgcmV0dXJuIDEwMDAwMDA7XG4gIH1cblxuICBjb25zdFxuICAgIHl1dkEgPSBnZXRZdXYoQSksXG4gICAgeXV2QiA9IGdldFl1dihCKTtcblxuICAvKkFkZCBIUXggZmlsdGVycyB0aHJlc2hvbGQgJiByZXR1cm4qL1xuICByZXR1cm4gTWF0aC5hYnMoeXV2QVswXSAtIHl1dkJbMF0pICogVEhSRVNISE9MRF9ZXG4gICAgICAgKyBNYXRoLmFicyh5dXZBWzFdIC0geXV2QlsxXSkgKiBUSFJFU0hIT0xEX1VcbiAgICAgICArIE1hdGguYWJzKHl1dkFbMl0gLSB5dXZCWzJdKSAqIFRIUkVTSEhPTERfVjtcbn1cblxuZnVuY3Rpb24gaXNFcXVhbChBLCBCLCBzY2FsZUFscGhhKSB7XG4gIGNvbnN0XG4gICAgYWxwaGFBID0gKChBICYgQUxQSEFNQVNLKSA+PiAyNCkgJiAweGZmLFxuICAgIGFscGhhQiA9ICgoQiAmIEFMUEhBTUFTSykgPj4gMjQpICYgMHhmZjtcblxuICBpZiAoYWxwaGFBID09PSAwICYmIGFscGhhQiA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCFzY2FsZUFscGhhICYmIChhbHBoYUEgPCAyNTUgfHwgYWxwaGFCIDwgMjU1KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhbHBoYUEgPT09IDAgfHwgYWxwaGFCID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3RcbiAgICB5dXZBID0gZ2V0WXV2KEEpLFxuICAgIHl1dkIgPSBnZXRZdXYoQik7XG5cbiAgaWYgKE1hdGguYWJzKHl1dkFbMF0gLSB5dXZCWzBdKSA+IFRIUkVTSEhPTERfWSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoTWF0aC5hYnMoeXV2QVsxXSAtIHl1dkJbMV0pID4gVEhSRVNISE9MRF9VKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChNYXRoLmFicyh5dXZBWzJdIC0geXV2QlsyXSkgPiBUSFJFU0hIT0xEX1YpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcGl4ZWxJbnRlcnBvbGF0ZShBLCBCLCBxMSwgcTIpIHtcbiAgY29uc3RcbiAgICBhbHBoYUEgPSAoKEEgJiBBTFBIQU1BU0spID4+IDI0KSAmIDB4ZmYsXG4gICAgYWxwaGFCID0gKChCICYgQUxQSEFNQVNLKSA+PiAyNCkgJiAweGZmO1xuXG4gIC8qRXh0cmFjdCBlYWNoIHZhbHVlIGZyb20gMzJiaXQgVWludCAmIGJsZW5kIGNvbG9ycyB0b2dldGhlciovXG4gIGxldCByLCBnLCBiLCBhO1xuXG4gIGlmIChhbHBoYUEgPT09IDApIHtcbiAgICByID0gQiAmIFJFRE1BU0s7XG4gICAgZyA9IChCICYgR1JFRU5NQVNLKSA+PiA4O1xuICAgIGIgPSAoQiAmIEJMVUVNQVNLKSA+PiAxNjtcbiAgfSBlbHNlIGlmIChhbHBoYUIgPT09IDApIHtcbiAgICByID0gQSAmIFJFRE1BU0s7XG4gICAgZyA9IChBICYgR1JFRU5NQVNLKSA+PiA4O1xuICAgIGIgPSAoQSAmIEJMVUVNQVNLKSA+PiAxNjtcbiAgfSBlbHNlIHtcbiAgICByID0gKHEyICogKEIgJiBSRURNQVNLKSArIHExICogKEEgJiBSRURNQVNLKSkgLyAocTEgKyBxMik7XG4gICAgZyA9IChxMiAqICgoQiAmIEdSRUVOTUFTSykgPj4gOCkgKyBxMSAqICgoQSAmIEdSRUVOTUFTSykgPj4gOCkpIC8gKHExICsgcTIpO1xuICAgIGIgPSAocTIgKiAoKEIgJiBCTFVFTUFTSykgPj4gMTYpICsgcTEgKiAoKEEgJiBCTFVFTUFTSykgPj4gMTYpKSAvIChxMSArIHEyKTtcbiAgfVxuICBhID0gKHEyICogYWxwaGFCICsgcTEgKiBhbHBoYUEpIC8gKHExICsgcTIpO1xuICAvKlRoZSBiaXQgaGFjayAnfn4nIGlzIHVzZWQgdG8gZmxvb3IgdGhlIHZhbHVlcyBsaWtlIE1hdGguZmxvb3IsIGJ1dCBmYXN0ZXIqL1xuICByZXR1cm4gKCh+fnIpIHwgKCh+fmcpIDw8IDgpIHwgKCh+fmIpIDw8IDE2KSB8ICgofn5hKSA8PCAyNCkpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGVkUG9pbnRzKG9yaVBpeGVsVmlldywgb3JpWCwgb3JpWSwgb3JpVywgb3JpSCkge1xuICBsZXQgeG0xID0gb3JpWCAtIDE7XG4gIGlmICh4bTEgPCAwKSB7XG4gICAgeG0xID0gMDtcbiAgfVxuICBsZXQgeG0yID0gb3JpWCAtIDI7XG4gIGlmICh4bTIgPCAwKSB7XG4gICAgeG0yID0gMDtcbiAgfVxuICBsZXQgeHAxID0gb3JpWCArIDE7XG4gIGlmICh4cDEgPj0gb3JpVykge1xuICAgIHhwMSA9IG9yaVcgLSAxO1xuICB9XG4gIGxldCB4cDIgPSBvcmlYICsgMjtcbiAgaWYgKHhwMiA+PSBvcmlXKSB7XG4gICAgeHAyID0gb3JpVyAtIDE7XG4gIH1cbiAgbGV0IHltMSA9IG9yaVkgLSAxO1xuICBpZiAoeW0xIDwgMCkge1xuICAgIHltMSA9IDA7XG4gIH1cbiAgbGV0IHltMiA9IG9yaVkgLSAyO1xuICBpZiAoeW0yIDwgMCkge1xuICAgIHltMiA9IDA7XG4gIH1cbiAgbGV0IHlwMSA9IG9yaVkgKyAxO1xuICBpZiAoeXAxID49IG9yaUgpIHtcbiAgICB5cDEgPSBvcmlIIC0gMTtcbiAgfVxuICBsZXQgeXAyID0gb3JpWSArIDI7XG4gIGlmICh5cDIgPj0gb3JpSCkge1xuICAgIHlwMiA9IG9yaUggLSAxO1xuICB9XG5cbiAgcmV0dXJuIFtcbiAgICBvcmlQaXhlbFZpZXdbeG0xICsgeW0yICogb3JpV10sICAvKiBhMSAqL1xuICAgIG9yaVBpeGVsVmlld1tvcmlYICsgeW0yICogb3JpV10sIC8qIGIxICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMSArIHltMiAqIG9yaVddLCAgLyogYzEgKi9cblxuICAgIG9yaVBpeGVsVmlld1t4bTIgKyB5bTEgKiBvcmlXXSwgIC8qIGEwICovXG4gICAgb3JpUGl4ZWxWaWV3W3htMSArIHltMSAqIG9yaVddLCAgLyogcGEgKi9cbiAgICBvcmlQaXhlbFZpZXdbb3JpWCArIHltMSAqIG9yaVddLCAvKiBwYiAqL1xuICAgIG9yaVBpeGVsVmlld1t4cDEgKyB5bTEgKiBvcmlXXSwgIC8qIHBjICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMiArIHltMSAqIG9yaVddLCAgLyogYzQgKi9cblxuICAgIG9yaVBpeGVsVmlld1t4bTIgKyBvcmlZICogb3JpV10sIC8qIGQwICovXG4gICAgb3JpUGl4ZWxWaWV3W3htMSArIG9yaVkgKiBvcmlXXSwgLyogcGQgKi9cbiAgICBvcmlQaXhlbFZpZXdbb3JpWCArIG9yaVkgKiBvcmlXXSwvKiBwZSAqL1xuICAgIG9yaVBpeGVsVmlld1t4cDEgKyBvcmlZICogb3JpV10sIC8qIHBmICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMiArIG9yaVkgKiBvcmlXXSwgLyogZjQgKi9cblxuICAgIG9yaVBpeGVsVmlld1t4bTIgKyB5cDEgKiBvcmlXXSwgIC8qIGcwICovXG4gICAgb3JpUGl4ZWxWaWV3W3htMSArIHlwMSAqIG9yaVddLCAgLyogcGcgKi9cbiAgICBvcmlQaXhlbFZpZXdbb3JpWCArIHlwMSAqIG9yaVddLCAvKiBwaCAqL1xuICAgIG9yaVBpeGVsVmlld1t4cDEgKyB5cDEgKiBvcmlXXSwgIC8qIHBpICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMiArIHlwMSAqIG9yaVddLCAgLyogaTQgKi9cblxuICAgIG9yaVBpeGVsVmlld1t4bTEgKyB5cDIgKiBvcmlXXSwgIC8qIGc1ICovXG4gICAgb3JpUGl4ZWxWaWV3W29yaVggKyB5cDIgKiBvcmlXXSwgLyogaDUgKi9cbiAgICBvcmlQaXhlbFZpZXdbeHAxICsgeXAyICogb3JpV10gICAvKiBpNSAqL1xuICBdO1xufVxuXG4vLyBUaGlzIGlzIHRoZSBYQlIyeCBieSBIeWxsaWFuIChzZWUgaHR0cDovL2JvYXJkLmJ5dXUub3JnL3ZpZXd0b3BpYy5waHA/Zj0xMCZ0PTIyNDgpXG5mdW5jdGlvbiBjb21wdXRlWGJyMngob3JpUGl4ZWxWaWV3LCBvcmlYLCBvcmlZLCBvcmlXLCBvcmlILCBkc3RQaXhlbFZpZXcsIGRzdFgsIGRzdFksIGRzdFcsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKSB7XG4gIGNvbnN0IHJlbGF0ZWRQb2ludHMgPSBnZXRSZWxhdGVkUG9pbnRzKG9yaVBpeGVsVmlldywgb3JpWCwgb3JpWSwgb3JpVywgb3JpSCk7XG4gIGNvbnN0XG4gICAgW2ExLFxuICAgICBiMSxcbiAgICAgYzEsXG5cdCBhMCxcbiAgICAgcGEsXG4gICAgIHBiLFxuICAgICBwYyxcbiAgICAgYzQsXG4gICAgIGQwLFxuICAgICBwZCxcbiAgICAgcGUsXG4gICAgIHBmLFxuICAgICBmNCxcbiAgICAgZzAsXG4gICAgIHBnLFxuICAgICBwaCxcbiAgICAgcGksXG4gICAgIGk0LFxuICAgICBnNSxcbiAgICAgaDUsXG4gICAgIGk1XSA9IHJlbGF0ZWRQb2ludHM7XG4gIGxldCBlMCwgZTEsIGUyLCBlMztcbiAgZTAgPSBlMSA9IGUyID0gZTMgPSBwZTtcblxuICBbZTEsIGUyLCBlM10gPSBrZXJuZWwyWHY1KHBlLCBwaSwgcGgsIHBmLCBwZywgcGMsIHBkLCBwYiwgZjQsIGk0LCBoNSwgaTUsIGUxLCBlMiwgZTMsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2UwLCBlMywgZTFdID0ga2VybmVsMlh2NShwZSwgcGMsIHBmLCBwYiwgcGksIHBhLCBwaCwgcGQsIGIxLCBjMSwgZjQsIGM0LCBlMCwgZTMsIGUxLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSk7XG4gIFtlMiwgZTEsIGUwXSA9IGtlcm5lbDJYdjUocGUsIHBhLCBwYiwgcGQsIHBjLCBwZywgcGYsIHBoLCBkMCwgYTAsIGIxLCBhMSwgZTIsIGUxLCBlMCwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuICBbZTMsIGUwLCBlMl0gPSBrZXJuZWwyWHY1KHBlLCBwZywgcGQsIHBoLCBwYSwgcGksIHBiLCBwZiwgaDUsIGc1LCBkMCwgZzAsIGUzLCBlMCwgZTIsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcblxuICBkc3RQaXhlbFZpZXdbZHN0WCArIGRzdFkgKiBkc3RXXSA9IGUwO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyBkc3RZICogZHN0V10gPSBlMTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAoZHN0WSArIDEpICogZHN0V10gPSBlMjtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAxICsgKGRzdFkgKyAxKSAqIGRzdFddID0gZTM7ICBcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVhicjN4KG9yaVBpeGVsVmlldywgb3JpWCwgb3JpWSwgb3JpVywgb3JpSCwgZHN0UGl4ZWxWaWV3LCBkc3RYLCBkc3RZLCBkc3RXLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSkge1xuICBjb25zdCByZWxhdGVkUG9pbnRzID0gZ2V0UmVsYXRlZFBvaW50cyhvcmlQaXhlbFZpZXcsIG9yaVgsIG9yaVksIG9yaVcsIG9yaUgpO1xuICBjb25zdFxuICAgIFthMSxcbiAgICAgYjEsXG4gICAgIGMxLFxuXHQgYTAsXG4gICAgIHBhLFxuICAgICBwYixcbiAgICAgcGMsXG4gICAgIGM0LFxuICAgICBkMCxcbiAgICAgcGQsXG4gICAgIHBlLFxuICAgICBwZixcbiAgICAgZjQsXG4gICAgIGcwLFxuICAgICBwZyxcbiAgICAgcGgsXG4gICAgIHBpLFxuICAgICBpNCxcbiAgICAgZzUsXG4gICAgIGg1LFxuICAgICBpNV0gPSByZWxhdGVkUG9pbnRzO1xuICBsZXQgZTAsIGUxLCBlMiwgZTMsIGU0LCBlNSwgZTYsIGU3LCBlODtcbiAgZTAgPSBlMSA9IGUyID0gZTMgPSBlNCA9IGU1ID0gZTYgPSBlNyA9IGU4ID0gcGU7XG5cbiAgW2UyLCBlNSwgZTYsIGU3LCBlOF0gPSBrZXJuZWwzWChwZSwgcGksIHBoLCBwZiwgcGcsIHBjLCBwZCwgcGIsIGY0LCBpNCwgaDUsIGk1LCBlMiwgZTUsIGU2LCBlNywgZTgsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2UwLCBlMSwgZTgsIGU1LCBlMl0gPSBrZXJuZWwzWChwZSwgcGMsIHBmLCBwYiwgcGksIHBhLCBwaCwgcGQsIGIxLCBjMSwgZjQsIGM0LCBlMCwgZTEsIGU4LCBlNSwgZTIsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2U2LCBlMywgZTIsIGUxLCBlMF0gPSBrZXJuZWwzWChwZSwgcGEsIHBiLCBwZCwgcGMsIHBnLCBwZiwgcGgsIGQwLCBhMCwgYjEsIGExLCBlNiwgZTMsIGUyLCBlMSwgZTAsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2U4LCBlNywgZTAsIGUzLCBlNl0gPSBrZXJuZWwzWChwZSwgcGcsIHBkLCBwaCwgcGEsIHBpLCBwYiwgcGYsIGg1LCBnNSwgZDAsIGcwLCBlOCwgZTcsIGUwLCBlMywgZTYsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcblxuICBkc3RQaXhlbFZpZXdbZHN0WCArIGRzdFkgKiBkc3RXXSA9IGUwO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyBkc3RZICogZHN0V10gPSBlMTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgZHN0WSAqIGRzdFddID0gZTI7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgKGRzdFkgKyAxKSAqIGRzdFddID0gZTM7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMSArIChkc3RZICsgMSkgKiBkc3RXXSA9IGU0O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDIgKyAoZHN0WSArIDEpICogZHN0V10gPSBlNTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAoZHN0WSArIDIpICogZHN0V10gPSBlNjtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAxICsgKGRzdFkgKyAyKSAqIGRzdFddID0gZTc7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMiArIChkc3RZICsgMikgKiBkc3RXXSA9IGU4O1xufVxuXG5cbmZ1bmN0aW9uIGNvbXB1dGVYYnI0eChvcmlQaXhlbFZpZXcsIG9yaVgsIG9yaVksIG9yaVcsIG9yaUgsIGRzdFBpeGVsVmlldywgZHN0WCwgZHN0WSwgZHN0VywgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpIHtcbiAgY29uc3QgcmVsYXRlZFBvaW50cyA9IGdldFJlbGF0ZWRQb2ludHMob3JpUGl4ZWxWaWV3LCBvcmlYLCBvcmlZLCBvcmlXLCBvcmlIKTtcbiAgY29uc3RcbiAgICBbYTEsXG4gICAgIGIxLFxuICAgICBjMSxcblx0IGEwLFxuICAgICBwYSxcbiAgICAgcGIsXG4gICAgIHBjLFxuICAgICBjNCxcbiAgICAgZDAsXG4gICAgIHBkLFxuICAgICBwZSxcbiAgICAgcGYsXG4gICAgIGY0LFxuICAgICBnMCxcbiAgICAgcGcsXG4gICAgIHBoLFxuICAgICBwaSxcbiAgICAgaTQsXG4gICAgIGc1LFxuICAgICBoNSxcbiAgICAgaTVdID0gcmVsYXRlZFBvaW50cztcbiAgbGV0IGUwLCBlMSwgZTIsIGUzLCBlNCwgZTUsIGU2LCBlNywgZTgsIGU5LCBlYSwgZWIsIGVjLCBlZCwgZWUsIGVmO1xuICBlMCA9IGUxID0gZTIgPSBlMyA9IGU0ID0gZTUgPSBlNiA9IGU3ID0gZTggPSBlOSA9IGVhID0gZWIgPSBlYyA9IGVkID0gZWUgPSBlZiA9IHBlO1xuXG4gIFtlZiwgZWUsIGViLCBlMywgZTcsIGVhLCBlZCwgZWNdID0ga2VybmVsNFh2MihwZSwgcGksIHBoLCBwZiwgcGcsIHBjLCBwZCwgcGIsIGY0LCBpNCwgaDUsIGk1LCBlZiwgZWUsIGViLCBlMywgZTcsIGVhLCBlZCwgZWMsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2UzLCBlNywgZTIsIGUwLCBlMSwgZTYsIGViLCBlZl0gPSBrZXJuZWw0WHYyKHBlLCBwYywgcGYsIHBiLCBwaSwgcGEsIHBoLCBwZCwgYjEsIGMxLCBmNCwgYzQsIGUzLCBlNywgZTIsIGUwLCBlMSwgZTYsIGViLCBlZiwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuICBbZTAsIGUxLCBlNCwgZWMsIGU4LCBlNSwgZTIsIGUzXSA9IGtlcm5lbDRYdjIocGUsIHBhLCBwYiwgcGQsIHBjLCBwZywgcGYsIHBoLCBkMCwgYTAsIGIxLCBhMSwgZTAsIGUxLCBlNCwgZWMsIGU4LCBlNSwgZTIsIGUzLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSk7XG4gIFtlYywgZTgsIGVkLCBlZiwgZWUsIGU5LCBlNCwgZTBdID0ga2VybmVsNFh2MihwZSwgcGcsIHBkLCBwaCwgcGEsIHBpLCBwYiwgcGYsIGg1LCBnNSwgZDAsIGcwLCBlYywgZTgsIGVkLCBlZiwgZWUsIGU5LCBlNCwgZTAsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcblxuICBkc3RQaXhlbFZpZXdbZHN0WCArIGRzdFkgKiBkc3RXXSA9IGUwO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyBkc3RZICogZHN0V10gPSBlMTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgZHN0WSAqIGRzdFddID0gZTI7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMyArIGRzdFkgKiBkc3RXXSA9IGUzO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIChkc3RZICsgMSkgKiBkc3RXXSA9IGU0O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyAoZHN0WSArIDEpICogZHN0V10gPSBlNTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgKGRzdFkgKyAxKSAqIGRzdFddID0gZTY7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMyArIChkc3RZICsgMSkgKiBkc3RXXSA9IGU3O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIChkc3RZICsgMikgKiBkc3RXXSA9IGU4O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyAoZHN0WSArIDIpICogZHN0V10gPSBlOTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgKGRzdFkgKyAyKSAqIGRzdFddID0gZWE7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMyArIChkc3RZICsgMikgKiBkc3RXXSA9IGViO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIChkc3RZICsgMykgKiBkc3RXXSA9IGVjO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyAoZHN0WSArIDMpICogZHN0V10gPSBlZDtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgKGRzdFkgKyAzKSAqIGRzdFddID0gZWU7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMyArIChkc3RZICsgMykgKiBkc3RXXSA9IGVmO1xufVxuXG5mdW5jdGlvbiBhbHBoYUJsZW5kMzJXKGRzdCwgc3JjLCBibGVuZENvbG9ycykge1xuICBpZiAoYmxlbmRDb2xvcnMpIHtcbiAgICByZXR1cm4gcGl4ZWxJbnRlcnBvbGF0ZShkc3QsIHNyYywgNywgMSk7XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuXG5mdW5jdGlvbiBhbHBoYUJsZW5kNjRXKGRzdCwgc3JjLCBibGVuZENvbG9ycykge1xuICBpZiAoYmxlbmRDb2xvcnMpIHtcbiAgICByZXR1cm4gcGl4ZWxJbnRlcnBvbGF0ZShkc3QsIHNyYywgMywgMSk7XG4gIH1cbiAgcmV0dXJuIGRzdDtcbn1cblxuZnVuY3Rpb24gYWxwaGFCbGVuZDEyOFcoZHN0LCBzcmMsIGJsZW5kQ29sb3JzKSB7XG4gIGlmIChibGVuZENvbG9ycykge1xuICAgIHJldHVybiBwaXhlbEludGVycG9sYXRlKGRzdCwgc3JjLCAxLCAxKTtcbiAgfVxuICByZXR1cm4gZHN0O1xufVxuXG5mdW5jdGlvbiBhbHBoYUJsZW5kMTkyVyhkc3QsIHNyYywgYmxlbmRDb2xvcnMpIHtcbiAgaWYgKGJsZW5kQ29sb3JzKSB7XG4gICAgcmV0dXJuIHBpeGVsSW50ZXJwb2xhdGUoZHN0LCBzcmMsIDEsIDMpO1xuICB9XG4gIHJldHVybiBzcmM7XG59XG5cbmZ1bmN0aW9uIGFscGhhQmxlbmQyMjRXKGRzdCwgc3JjLCBibGVuZENvbG9ycykge1xuICBpZiAoYmxlbmRDb2xvcnMpIHtcbiAgICByZXR1cm4gcGl4ZWxJbnRlcnBvbGF0ZShkc3QsIHNyYywgMSwgNyk7XG4gIH1cbiAgcmV0dXJuIHNyYztcbn1cblxuZnVuY3Rpb24gbGVmdFVwMl8yWChuMywgbjIsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICBjb25zdCBibGVuZGVkTjIgPSBhbHBoYUJsZW5kNjRXKG4yLCBwaXhlbCwgYmxlbmRDb2xvcnMpO1xuICByZXR1cm4gW1xuICAgIGFscGhhQmxlbmQyMjRXKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGJsZW5kZWROMixcbiAgICBibGVuZGVkTjJcbiAgXTtcbn1cblxuZnVuY3Rpb24gbGVmdDJfMlgobjMsIG4yLCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgcmV0dXJuIFtcbiAgICBhbHBoYUJsZW5kMTkyVyhuMywgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcbiAgICBhbHBoYUJsZW5kNjRXKG4yLCBwaXhlbCwgYmxlbmRDb2xvcnMpXG4gIF07XG59XG5cbmZ1bmN0aW9uIHVwMl8yWChuMywgbjEsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICByZXR1cm4gW1xuICAgIGFscGhhQmxlbmQxOTJXKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQ2NFcobjEsIHBpeGVsLCBibGVuZENvbG9ycylcbiAgXTtcbn1cblxuZnVuY3Rpb24gZGlhXzJYKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgcmV0dXJuIGFscGhhQmxlbmQxMjhXKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpO1xufVxuXG5mdW5jdGlvbiBrZXJuZWwyWHY1KHBlLCBwaSwgcGgsIHBmLCBwZywgcGMsIHBkLCBwYiwgZjQsIGk0LCBoNSwgaTUsIG4xLCBuMiwgbjMsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKSB7XG4gIGxldCBleCA9IChwZSAhPSBwaCAmJiBwZSAhPSBwZik7XG4gIGlmICghZXgpIHtcbiAgICByZXR1cm4gW24xLCBuMiwgbjNdO1xuICB9XG4gIGxldFxuICAgIGUgPSAoeXV2RGlmZmVyZW5jZShwZSwgcGMsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwZSwgcGcsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwaSwgaDUsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwaSwgZjQsIHNjYWxlQWxwaGEpKSArICh5dXZEaWZmZXJlbmNlKHBoLCBwZikgPDwgMiksXG4gICAgaSA9ICh5dXZEaWZmZXJlbmNlKHBoLCBwZCwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBoLCBpNSwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBmLCBpNCwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBmLCBwYiwgc2NhbGVBbHBoYSkpICsgKHl1dkRpZmZlcmVuY2UocGUsIHBpLCBzY2FsZUFscGhhKSA8PCAyKSxcbiAgICBweCA9ICh5dXZEaWZmZXJlbmNlKHBlLCBwZiwgc2NhbGVBbHBoYSkgPD0geXV2RGlmZmVyZW5jZShwZSwgcGgsIHNjYWxlQWxwaGEpKSA/IHBmIDogcGg7XG5cbiAgaWYgKChlIDwgaSkgJiYgKCFpc0VxdWFsKHBmLCBwYiwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGgsIHBkLCBzY2FsZUFscGhhKSB8fCBpc0VxdWFsKHBlLCBwaSwgc2NhbGVBbHBoYSkgJiYgKCFpc0VxdWFsKHBmLCBpNCwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGgsIGk1LCBzY2FsZUFscGhhKSkgfHwgaXNFcXVhbChwZSwgcGcsIHNjYWxlQWxwaGEpIHx8IGlzRXF1YWwocGUsIHBjLCBzY2FsZUFscGhhKSkpIHtcbiAgICBsZXRcbiAgICAgIGtlID0geXV2RGlmZmVyZW5jZShwZiwgcGcsIHNjYWxlQWxwaGEpLFxuICAgICAga2kgPSB5dXZEaWZmZXJlbmNlKHBoLCBwYywgc2NhbGVBbHBoYSksXG4gICAgICBleDIgPSAocGUgIT0gcGMgJiYgcGIgIT0gcGMpLFxuICAgICAgZXgzID0gKHBlICE9IHBnICYmIHBkICE9IHBnKTtcbiAgICBpZiAoKChrZSA8PCAxKSA8PSBraSkgJiYgZXgzIHx8IChrZSA+PSAoa2kgPDwgMSkpICYmIGV4Mikge1xuICAgICAgaWYgKCgoa2UgPDwgMSkgPD0ga2kpICYmIGV4Mykge1xuICAgICAgICBsZXQgbGVmdE91dCA9IGxlZnQyXzJYKG4zLCBuMiwgcHgsIGJsZW5kQ29sb3JzKTtcbiAgICAgICAgbjMgPSBsZWZ0T3V0WzBdO1xuICAgICAgICBuMiA9IGxlZnRPdXRbMV07XG4gICAgICB9XG4gICAgICBpZiAoKGtlID49IChraSA8PCAxKSkgJiYgZXgyKSB7XG4gICAgICAgIGxldCB1cE91dCA9IHVwMl8yWChuMywgbjEsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgICAgIG4zID0gdXBPdXRbMF07XG4gICAgICAgIG4xID0gdXBPdXRbMV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG4zID0gZGlhXzJYKG4zLCBweCwgYmxlbmRDb2xvcnMpO1xuICAgIH1cblxuICB9IGVsc2UgaWYgKGUgPD0gaSkge1xuICAgIG4zID0gYWxwaGFCbGVuZDY0VyhuMywgcHgsIGJsZW5kQ29sb3JzKTtcbiAgfVxuICByZXR1cm4gW24xLCBuMiwgbjNdO1xufVxuXG5mdW5jdGlvbiBsZWZ0VXAyXzNYKG43LCBuNSwgbjYsIG4yLCBuOCwgcGl4ZWwsIGJsZW5kQ29sb3JzKSB7XG4gIGNvbnN0XG4gICAgYmxlbmRlZE43ID0gYWxwaGFCbGVuZDE5MlcobjcsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgYmxlbmRlZE42ID0gYWxwaGFCbGVuZDY0VyhuNiwgcGl4ZWwsIGJsZW5kQ29sb3JzKTtcbiAgcmV0dXJuIFtcbiAgICBibGVuZGVkTjcsXG4gICAgYmxlbmRlZE43LFxuICAgIGJsZW5kZWRONixcbiAgICBibGVuZGVkTjYsXG5cdHBpeGVsXG4gIF07XG59XG5cbmZ1bmN0aW9uIGxlZnQyXzNYKG43LCBuNSwgbjYsIG44LCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgcmV0dXJuIFtcbiAgICBhbHBoYUJsZW5kMTkyVyhuNywgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcbiAgICBhbHBoYUJsZW5kNjRXKG41LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQ2NFcobjYsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgcGl4ZWxcbiAgXTtcbn1cblxuZnVuY3Rpb24gdXAyXzNYKG41LCBuNywgbjIsIG44LCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgcmV0dXJuIFtcbiAgICBhbHBoYUJsZW5kMTkyVyhuNSwgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcbiAgICBhbHBoYUJsZW5kNjRXKG43LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQ2NFcobjIsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgcGl4ZWxcbiAgXTtcbn1cblxuZnVuY3Rpb24gZGlhXzNYKG44LCBuNSwgbjcsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICByZXR1cm4gW1xuICAgIGFscGhhQmxlbmQyMjRXKG44LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQzMlcobjUsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgYWxwaGFCbGVuZDMyVyhuNywgcGl4ZWwsIGJsZW5kQ29sb3JzKVxuICBdO1xufVxuXG5mdW5jdGlvbiBrZXJuZWwzWChwZSwgcGksIHBoLCBwZiwgcGcsIHBjLCBwZCwgcGIsIGY0LCBpNCwgaDUsIGk1LCBuMiwgbjUsIG42LCBuNywgbjgsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKSB7XG4gIGNvbnN0IGV4ID0gKHBlICE9IHBoICYmIHBlICE9IHBmKTtcbiAgaWYgKCFleCkge1xuICAgIHJldHVybiBbbjIsIG41LCBuNiwgbjcsIG44XTtcbiAgfVxuXG4gIGNvbnN0XG4gICAgZSA9ICh5dXZEaWZmZXJlbmNlKHBlLCBwYywgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBlLCBwZywgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBpLCBoNSwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBpLCBmNCwgc2NhbGVBbHBoYSkpICsgKHl1dkRpZmZlcmVuY2UocGgsIHBmLCBzY2FsZUFscGhhKSA8PCAyKSxcbiAgICBpID0gKHl1dkRpZmZlcmVuY2UocGgsIHBkLCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGgsIGk1LCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGYsIGk0LCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGYsIHBiLCBzY2FsZUFscGhhKSkgKyAoeXV2RGlmZmVyZW5jZShwZSwgcGksIHNjYWxlQWxwaGEpIDw8IDIpO1xuXG4gIGxldCBzdGF0ZTtcbiAgaWYgKFVTRV8zWF9PUklHSU5BTF9JTVBMRU1FTlRBVElPTikge1xuICAgIHN0YXRlID0gKChlIDwgaSkgJiYgKCFpc0VxdWFsKHBmLCBwYiwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGgsIHBkLCBzY2FsZUFscGhhKSB8fCBpc0VxdWFsKHBlLCBwaSwgc2NhbGVBbHBoYSkgJiYgKCFpc0VxdWFsKHBmLCBpNCwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGgsIGk1LCBzY2FsZUFscGhhKSkgfHwgaXNFcXVhbChwZSwgcGcsIHNjYWxlQWxwaGEpIHx8IGlzRXF1YWwocGUsIHBjLCBzY2FsZUFscGhhKSkpO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlID0gKChlIDwgaSkgJiYgKCFpc0VxdWFsKHBmLCBwYiwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGYsIHBjLCBzY2FsZUFscGhhKSB8fCAhaXNFcXVhbChwaCwgcGQsIHNjYWxlQWxwaGEpICYmICFpc0VxdWFsKHBoLCBwZywgc2NhbGVBbHBoYSkgfHwgaXNFcXVhbChwZSwgcGksIHNjYWxlQWxwaGEpICYmICghaXNFcXVhbChwZiwgZjQsIHNjYWxlQWxwaGEpICYmICFpc0VxdWFsKHBmLCBpNCwgc2NhbGVBbHBoYSkgfHwgIWlzRXF1YWwocGgsIGg1LCBzY2FsZUFscGhhKSAmJiAhaXNFcXVhbChwaCwgaTUsIHNjYWxlQWxwaGEpKSB8fCBpc0VxdWFsKHBlLCBwZywgc2NhbGVBbHBoYSkgfHwgaXNFcXVhbChwZSwgcGMsIHNjYWxlQWxwaGEpKSk7XG4gIH1cblxuICBpZiAoc3RhdGUpIHtcbiAgICBjb25zdFxuICAgICAga2UgPSB5dXZEaWZmZXJlbmNlKHBmLCBwZywgc2NhbGVBbHBoYSksXG4gICAgICBraSA9IHl1dkRpZmZlcmVuY2UocGgsIHBjLCBzY2FsZUFscGhhKSxcbiAgICAgIGV4MiA9IChwZSAhPSBwYyAmJiBwYiAhPSBwYyksXG4gICAgICBleDMgPSAocGUgIT0gcGcgJiYgcGQgIT0gcGcpLFxuICAgICAgcHggPSAoeXV2RGlmZmVyZW5jZShwZSwgcGYsIHNjYWxlQWxwaGEpIDw9IHl1dkRpZmZlcmVuY2UocGUsIHBoLCBzY2FsZUFscGhhKSkgPyBwZiA6IHBoO1xuICAgIGlmICgoKGtlIDw8IDEpIDw9IGtpKSAmJiBleDMgJiYgKGtlID49IChraSA8PCAxKSkgJiYgZXgyKSB7XG4gICAgICBbbjcsIG41LCBuNiwgbjIsIG44XSA9IGxlZnRVcDJfM1gobjcsIG41LCBuNiwgbjIsIG44LCBweCwgYmxlbmRDb2xvcnMpO1xuICAgIH0gZWxzZSBpZiAoKChrZSA8PCAxKSA8PSBraSkgJiYgZXgzKSB7XG4gICAgICBbbjcsIG41LCBuNiwgbjhdID0gbGVmdDJfM1gobjcsIG41LCBuNiwgbjgsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgfSBlbHNlIGlmICgoa2UgPj0gKGtpIDw8IDEpKSAmJiBleDIpIHtcbiAgICAgIFtuNSwgbjcsIG4yLCBuOF0gPSB1cDJfM1gobjUsIG43LCBuMiwgbjgsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFtuOCwgbjUsIG43XSA9IGRpYV8zWChuOCwgbjUsIG43LCBweCwgYmxlbmRDb2xvcnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChlIDw9IGkpIHtcbiAgICBuOCA9IGFscGhhQmxlbmQxMjhXKG44LCAoKHl1dkRpZmZlcmVuY2UocGUsIHBmLCBzY2FsZUFscGhhKSA8PSB5dXZEaWZmZXJlbmNlKHBlLCBwaCwgc2NhbGVBbHBoYSkpID8gcGYgOiBwaCksIGJsZW5kQ29sb3JzKTtcbiAgfVxuICByZXR1cm4gW24yLCBuNSwgbjYsIG43LCBuOF07XG59XG5cbi8vIDR4QlJcbmZ1bmN0aW9uIGxlZnRVcDIobjE1LCBuMTQsIG4xMSwgbjEzLCBuMTIsIG4xMCwgbjcsIG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgY29uc3RcbiAgICBibGVuZGVkTjEzID0gYWxwaGFCbGVuZDE5MlcobjEzLCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGJsZW5kZWROMTIgPSBhbHBoYUJsZW5kNjRXKG4xMiwgcGl4ZWwsIGJsZW5kQ29sb3JzKTtcblxuICByZXR1cm4gW3BpeGVsLCBwaXhlbCwgcGl4ZWwsIGJsZW5kZWROMTIsIGJsZW5kZWROMTIsIGJsZW5kZWROMTIsIGJsZW5kZWROMTMsIG4zXTtcbn1cblxuZnVuY3Rpb24gbGVmdDIobjE1LCBuMTQsIG4xMSwgbjEzLCBuMTIsIG4xMCwgcGl4ZWwsIGJsZW5kQ29sb3JzKSB7XG4gIHJldHVybiBbXG4gICAgcGl4ZWwsXG5cdHBpeGVsLFxuXHRhbHBoYUJsZW5kMTkyVyhuMTEsIHBpeGVsLCBibGVuZENvbG9ycyksXG5cdGFscGhhQmxlbmQxOTJXKG4xMywgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcblx0YWxwaGFCbGVuZDY0VyhuMTIsIHBpeGVsLCBibGVuZENvbG9ycyksXG5cdGFscGhhQmxlbmQ2NFcobjEwLCBwaXhlbCwgYmxlbmRDb2xvcnMpXG4gIF07XG59XG5cbmZ1bmN0aW9uIHVwMihuMTUsIG4xNCwgbjExLCBuMywgbjcsIG4xMCwgcGl4ZWwsIGJsZW5kQ29sb3JzKSB7XG4gIHJldHVybiBbXG5cdHBpeGVsLFxuXHRhbHBoYUJsZW5kMTkyVyhuMTQsIHBpeGVsLCBibGVuZENvbG9ycyksXG5cdHBpeGVsLFxuXHRhbHBoYUJsZW5kNjRXKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuXHRhbHBoYUJsZW5kMTkyVyhuNywgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcblx0YWxwaGFCbGVuZDY0VyhuMTAsIHBpeGVsLCBibGVuZENvbG9ycylcbiAgXTtcbn1cblxuZnVuY3Rpb24gZGlhKG4xNSwgbjE0LCBuMTEsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICByZXR1cm4gW1xuXHRwaXhlbCxcblx0YWxwaGFCbGVuZDEyOFcobjE0LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuXHRhbHBoYUJsZW5kMTI4VyhuMTEsIHBpeGVsLCBibGVuZENvbG9ycylcbiAgXTtcbn1cblxuZnVuY3Rpb24ga2VybmVsNFh2MihwZSwgcGksIHBoLCBwZiwgcGcsIHBjLCBwZCwgcGIsIGY0LCBpNCwgaDUsIGk1LCBuMTUsIG4xNCwgbjExLCBuMywgbjcsIG4xMCwgbjEzLCBuMTIsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKSB7XG4gIHZhciBleCA9IChwZSAhPSBwaCAmJiBwZSAhPSBwZik7XG4gIGlmICghZXgpIHtcbiAgICByZXR1cm4gW24xNSwgbjE0LCBuMTEsIG4zLCBuNywgbjEwLCBuMTMsIG4xMl07XG4gIH1cbiAgY29uc3RcbiAgICBlID0gKHl1dkRpZmZlcmVuY2UocGUsIHBjLCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGUsIHBnLCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGksIGg1LCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGksIGY0LCBzY2FsZUFscGhhKSkgKyAoeXV2RGlmZmVyZW5jZShwaCwgcGYsIHNjYWxlQWxwaGEpIDw8IDIpLFxuICAgIGkgPSAoeXV2RGlmZmVyZW5jZShwaCwgcGQsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwaCwgaTUsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwZiwgaTQsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwZiwgcGIsIHNjYWxlQWxwaGEpKSArICh5dXZEaWZmZXJlbmNlKHBlLCBwaSwgc2NhbGVBbHBoYSkgPDwgMiksXG4gICAgcHggPSAoeXV2RGlmZmVyZW5jZShwZSwgcGYsIHNjYWxlQWxwaGEpIDw9IHl1dkRpZmZlcmVuY2UocGUsIHBoLCBzY2FsZUFscGhhKSkgPyBwZiA6IHBoO1xuICBpZiAoKGUgPCBpKSAmJiAoIWlzRXF1YWwocGYsIHBiLCBzY2FsZUFscGhhKSAmJiAhaXNFcXVhbChwaCwgcGQsIHNjYWxlQWxwaGEpIHx8IGlzRXF1YWwocGUsIHBpLCBzY2FsZUFscGhhKSAmJiAoIWlzRXF1YWwocGYsIGk0LCBzY2FsZUFscGhhKSAmJiAhaXNFcXVhbChwaCwgaTUsIHNjYWxlQWxwaGEpKSB8fCBpc0VxdWFsKHBlLCBwZywgc2NhbGVBbHBoYSkgfHwgaXNFcXVhbChwZSwgcGMsIHNjYWxlQWxwaGEpKSkge1xuICAgIGNvbnN0XG4gICAgICBrZSA9IHl1dkRpZmZlcmVuY2UocGYsIHBnLCBzY2FsZUFscGhhKSxcbiAgICAgIGtpID0geXV2RGlmZmVyZW5jZShwaCwgcGMsIHNjYWxlQWxwaGEpLFxuICAgICAgZXgyID0gKHBlICE9IHBjICYmIHBiICE9IHBjKSxcbiAgICAgIGV4MyA9IChwZSAhPSBwZyAmJiBwZCAhPSBwZyk7XG4gICAgaWYgKCgoa2UgPDwgMSkgPD0ga2kpICYmIGV4MyB8fCAoa2UgPj0gKGtpIDw8IDEpKSAmJiBleDIpIHtcbiAgICAgIGlmICgoKGtlIDw8IDEpIDw9IGtpKSAmJiBleDMpIHtcbiAgICAgICAgW24xNSwgbjE0LCBuMTEsIG4xMywgbjEyLCBuMTBdID0gbGVmdDIobjE1LCBuMTQsIG4xMSwgbjEzLCBuMTIsIG4xMCwgcHgsIGJsZW5kQ29sb3JzKTtcbiAgICAgIH1cbiAgICAgIGlmICgoa2UgPj0gKGtpIDw8IDEpKSAmJiBleDIpIHtcbiAgICAgICAgW24xNSwgbjE0LCBuMTEsIG4zLCBuNywgbjEwXSA9IHVwMihuMTUsIG4xNCwgbjExLCBuMywgbjcsIG4xMCwgcHgsIGJsZW5kQ29sb3JzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgW24xNSwgbjE0LCBuMTFdID0gZGlhKG4xNSwgbjE0LCBuMTEsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgfVxuXG4gIH0gZWxzZSBpZiAoZSA8PSBpKSB7XG4gICAgbjE1ID0gYWxwaGFCbGVuZDEyOFcobjE1LCBweCwgYmxlbmRDb2xvcnMpO1xuICB9XG5cbiAgcmV0dXJuIFtuMTUsIG4xNCwgbjExLCBuMywgbjcsIG4xMCwgbjEzLCBuMTJdO1xufVxuXG5mdW5jdGlvbiBwYXJzZU9wdGlvbnMocmF3T3B0cykge1xuICBsZXRcbiAgICBibGVuZENvbG9ycyA9IHRydWUsXG4gICAgc2NhbGVBbHBoYSA9IGZhbHNlO1xuXG4gIGlmIChyYXdPcHRzKSB7XG5cdGlmIChyYXdPcHRzLmJsZW5kQ29sb3JzID09PSBmYWxzZSkge1xuXHQgIGJsZW5kQ29sb3JzID0gZmFsc2U7XG5cdH1cblx0XHRcblx0aWYgKHJhd09wdHMuc2NhbGVBbHBoYSA9PT0gdHJ1ZSkge1xuICAgICAgc2NhbGVBbHBoYSA9IHRydWU7XG4gICAgfVxuICB9XG5cdFxuICByZXR1cm4ge2JsZW5kQ29sb3JzLCBzY2FsZUFscGhhfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhicjJ4KHBpeGVsQXJyYXksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgY29uc3Qge2JsZW5kQ29sb3JzLCBzY2FsZUFscGhhfSA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKTtcbiAgY29uc3Qgc2NhbGVkUGl4ZWxBcnJheSA9IG5ldyBVaW50MzJBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xuICBmb3IgKGxldCBjID0gMDsgYyA8IHdpZHRoOyBjKyspIHtcbiAgICBmb3IgKGxldCBkID0gMDsgZCA8IGhlaWdodDsgZCsrKSB7XG4gICAgICBjb21wdXRlWGJyMngocGl4ZWxBcnJheSwgYywgZCwgd2lkdGgsIGhlaWdodCwgc2NhbGVkUGl4ZWxBcnJheSwgYyAqIDIsIGQgKiAyLCB3aWR0aCAqIDIsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNjYWxlZFBpeGVsQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4YnIzeChwaXhlbEFycmF5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gIGNvbnN0IHtibGVuZENvbG9ycywgc2NhbGVBbHBoYX0gPSBwYXJzZU9wdGlvbnMob3B0aW9ucyk7XG4gIGNvbnN0IHNjYWxlZFBpeGVsQXJyYXkgPSBuZXcgVWludDMyQXJyYXkod2lkdGggKiBoZWlnaHQgKiA5KTtcbiAgZm9yIChsZXQgYyA9IDA7IGMgPCB3aWR0aDsgYysrKSB7XG4gICAgZm9yIChsZXQgZCA9IDA7IGQgPCBoZWlnaHQ7IGQrKykge1xuICAgICAgY29tcHV0ZVhicjN4KHBpeGVsQXJyYXksIGMsIGQsIHdpZHRoLCBoZWlnaHQsIHNjYWxlZFBpeGVsQXJyYXksIGMgKiAzLCBkICogMywgd2lkdGggKiAzLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzY2FsZWRQaXhlbEFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24geGJyNHgocGl4ZWxBcnJheSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICBjb25zdCB7YmxlbmRDb2xvcnMsIHNjYWxlQWxwaGF9ID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpO1xuICBjb25zdCBzY2FsZWRQaXhlbEFycmF5ID0gbmV3IFVpbnQzMkFycmF5KHdpZHRoICogaGVpZ2h0ICogMTYpO1xuICBmb3IgKGxldCBjID0gMDsgYyA8IHdpZHRoOyBjKyspIHtcbiAgICBmb3IgKGxldCBkID0gMDsgZCA8IGhlaWdodDsgZCsrKSB7XG4gICAgICBjb21wdXRlWGJyNHgocGl4ZWxBcnJheSwgYywgZCwgd2lkdGgsIGhlaWdodCwgc2NhbGVkUGl4ZWxBcnJheSwgYyAqIDQsIGQgKiA0LCB3aWR0aCAqIDQsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNjYWxlZFBpeGVsQXJyYXk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==