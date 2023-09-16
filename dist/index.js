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
exports.OpenGLGraphicsImpl = exports.getMaxTextureSize = void 0;
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
var isFirefox = typeof InstallTrigger !== 'undefined';
var COL_CACHE = {};
function getMaxTextureSize() {
    var canvas = document.createElement("canvas");
    var gl = canvas.getContext('experimental-webgl', { antialias: false, alpha: false, preserveDrawingBuffer: true });
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
        var bytesPerImageCornerAlpha = 4;
        var floatsPerImageRotation = 1;
        // Total bytes stored into arrayBuffer per image = 28
        var bytesPerImage = shortsPerImagePosition * 2 + shortsPerImageSize * 2 + shortsPerImageTexPos * 2 + bytesPerImageRgba + bytesPerImageCornerAlpha + floatsPerImageRotation * 4;
        // Make a buffer big enough to have all the data for the max images we can show at the same time.
        this.arrayBuffer = new ArrayBuffer(this.maxDraws * bytesPerImage);
        // Make 3 views on the same arrayBuffer, because we store 3 data types into this same byte array.
        // When we store image positions/UVs into our arrayBuffer we store them as shorts (int16's)
        this.positions = new Int16Array(this.arrayBuffer);
        // When we store image rotation into this.arrayBuffer arrayBuffer we store it as float, because it's radians.
        this.rotations = new Float32Array(this.arrayBuffer);
        // When we store image rgbas into our arrayBuffer we store it as 1 4-byte int32.
        this.rgbas = new Uint32Array(this.arrayBuffer);
        var vertCode = "\
			attribute vec2 aSizeMult;\
			attribute vec2 aPos;\
			attribute vec2 aSize;\
			attribute vec4 aTexPos;\
			attribute vec4 aRgba;\
			attribute vec4 aCornerA;\
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
                vec2 topOrBot = aCornerA.zw * (1.0 - aSizeMult.y) + aCornerA.xy * aSizeMult.y;\
                float alpha = topOrBot.y * (1.0 - aSizeMult.x) + topOrBot.x * aSizeMult.x;\
                fragAbgr = vec4(aRgba.w/255.0, aRgba.z/255.0, aRgba.y/255.0, alpha/255.0);\
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
        setupAttribute("aCornerA", this.gl.UNSIGNED_BYTE, bytesPerImageCornerAlpha);
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
        // Create a gl texture from image file.
        if (this.atlasTexture) {
            this.gl.deleteTexture(this.atlasTexture);
        }
        this.atlasTexture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.atlasTexture);
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
        console.log("Width: " + w + " Height: " + h + " " + fill + "%");
        for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
            var record = records_1[_i];
            record.image.texX = record.x + 1;
            record.image.texY = record.y;
        }
        for (var _b = 0, list_1 = list; _b < list_1.length; _b++) {
            var image = list_1[_b];
            this.gl.texSubImage2D(this.gl.TEXTURE_2D, 0, image.texX, image.texY, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image.image);
        }
        // Tell gl that when draw images scaled up, keep it pixellated and don't smooth it.
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
        // Store texture size in vertex shader.
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
        var gl = this.gl;
        // Resize the gl viewport to be the new size of the canvas.
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        // Update the shader variables for canvas size.
        // Sending it to gl now so we don't have to do the math in JavaScript on every draw,
        // since gl wants to draw at a position from 0 to 1, and we want to do drawImage with a screen pixel position.
        gl.uniform2f(gl.getUniformLocation(this.shaderProgram, "uCanvasSize"), this.canvas.width / 2, this.canvas.height / 2);
    };
    OpenGLGraphicsImpl.prototype._drawBitmap = function (img, x, y, width, height) {
        this._drawImage(img.texX, img.texY, img.width, img.height, x, y, width, height, 0xFFFFFF00 + this.state.brightness, this.state.alpha, this.state.alpha, this.state.alpha, this.state.alpha);
    };
    OpenGLGraphicsImpl.prototype._drawImage = function (texX, texY, texWidth, texHeight, drawX, drawY, width, height, rgba, topLeftA, topRightA, bottomLeftA, bottomRightA) {
        var i = this.draws * 7;
        this.rgbas[i + 4] = rgba;
        this.rotations[i + 5] = this.state.rotation * Math.sign(this.state.scaleX) * Math.sign(this.state.scaleY);
        this.rgbas[i + 6] = (Math.floor(topLeftA) * 0x1000000) + (topRightA << 16) + (bottomLeftA << 8) + Math.floor(bottomRightA);
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
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.glBuffer);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, this.arrayBuffer, this.gl.DYNAMIC_DRAW);
            this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, this.rgbas.subarray(0, this.draws * 7));
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
        this._drawImage(0, offscreen.height, offscreen.width, -offscreen.height, 0, 0, offscreen.width, offscreen.height, 0xFFFFFF00, 255, 255, 255, 255);
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
        this._drawImage(0, offscreen.height, offscreen.width, -offscreen.height, x, y, width, height, 0xFFFFFF00, 255, 255, 255, 255);
        this.glCommitContext();
        this.gl.uniform2f(this.gl.getUniformLocation(this.shaderProgram, "uTexSize"), this.texWidth, this.texHeight);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.atlasTexture);
        this.glStartContext();
    };
    OpenGLGraphicsImpl.prototype.fillRect = function (x, y, width, height, col) {
        var rgba = colToNumber(col);
        var a = (rgba % 256);
        this._drawImage(0, 0, 1, 1, x, y, width, height, rgba, a, a, a, a);
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
        // Remove last state.
        this.state.states.pop();
        this.state.transforms = this.states[this.states.length - 1];
        this.resetState();
        // Reapply all transforms.
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
            // define size and format of level 0
            var level = 0;
            var internalFormat = this.gl.RGBA;
            var border = 0;
            var format = this.gl.RGBA;
            var type = this.gl.UNSIGNED_BYTE;
            var data = null;
            this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, width, height, border, format, type, data);
            // set the filtering so we don't need mips
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpenGLTilesetImpl = void 0;
var Gute_1 = __webpack_require__(/*! ../Gute */ "./src/Gute.ts");
var xbr_js_1 = __webpack_require__(/*! xbr-js */ "./node_modules/xbr-js/src/index.js");
var OpenGLTile = /** @class */ (function () {
    function OpenGLTile(parent, image, x, y, width, height, scale) {
        this.name = "tile";
        this.cached = {};
        this.texX = 0;
        this.texY = 0;
        this.parent = parent;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.loaded = true;
        this.image = image;
    }
    OpenGLTile.prototype.draw = function (graphics, x, y) {
        var g = graphics;
        this.texX = this.parent.texX + this.x;
        this.texY = this.parent.texY + this.y;
        g._drawBitmap(this, x, y, Math.floor(this.width * this.scale), Math.floor(this.height * this.scale));
    };
    OpenGLTile.prototype.drawScaled = function (graphics, x, y, width, height) {
        var g = graphics;
        this.texX = this.parent.texX + this.x;
        this.texY = this.parent.texY + this.y;
        g._drawBitmap(this, x, y, width, height);
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
    OpenGLTilesetImpl.prototype.getBlockColorTile = function (tile, tintName, col) {
        return this.getTile(tile);
    };
    OpenGLTilesetImpl.prototype.getShadedTile = function (tile, tintName, shade) {
        return this.getTile(tile);
    };
    OpenGLTilesetImpl.prototype.getTintedTile = function (tile, tintName, tint) {
        return this.getTile(tile);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ndXRlLy4vbm9kZV9tb2R1bGVzL2pzemlwL2Rpc3QvanN6aXAubWluLmpzIiwid2VicGFjazovL2d1dGUvLi9ub2RlX21vZHVsZXMvcG90cGFjay9pbmRleC5qcyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0dyYXBoaWNzLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvR3V0ZS50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL0tleXMudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9Tb3VuZFNjYXBlLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9CaXRtYXBJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9Gb250SW1wbC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL2ltcGwvR3JhcGhpY3NJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9QYWxldHRlLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvaW1wbC9Tb3VuZEltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbXBsL1RpbGVzZXRJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvb3BlbmdsL09wZW5HTEJpdG1hcC50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL29wZW5nbC9PcGVuR0xHcmFwaGljc0ltcGwudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9vcGVuZ2wvT3BlbkdMT2Zmc2NyZWVuLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvb3BlbmdsL09wZW5HTFRpbGVzZXRJbXBsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvcGF0aC9BU3RhclBhdGhGaW5kZXIudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9wYXRoL01hcE5vZGUudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9wYXRoL1BhdGgudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9wYXRoL1N0ZXAudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy90aWxlbWFwcy9MRFRLV29ybGQudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy90aWxlbWFwcy9NYXBFbnRpdHkudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy90aWxlbWFwcy9NYXBMYXllci50cyIsIndlYnBhY2s6Ly9ndXRlLy4vc3JjL3RpbGVtYXBzL01hcExldmVsLnRzIiwid2VicGFjazovL2d1dGUvLi9zcmMvdGlsZW1hcHMvTWFwV29ybGQudHMiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL25vZGVfbW9kdWxlcy94YnItanMvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2d1dGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3V0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ3V0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2d1dGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ndXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3V0ZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7O0FDVkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLEdBQUcsSUFBb0Qsb0JBQW9CLEtBQUssRUFBOEssQ0FBQyxZQUFZLHlCQUF5QixnQkFBZ0IsVUFBVSxVQUFVLE1BQU0sU0FBbUMsQ0FBQyxnQkFBZ0IsT0FBQyxPQUFPLG9CQUFvQiw4Q0FBOEMsa0NBQWtDLFlBQVksWUFBWSxtQ0FBbUMsaUJBQWlCLGVBQWUsc0JBQXNCLG9CQUFvQixVQUFVLFNBQW1DLEtBQUssV0FBVyxZ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RUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNyQixJQUFJLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNqRSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzFCLElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzFCLElBQUksVUFBVSxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLElBQUksVUFBVSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLElBQUksVUFBVSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQyxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ3BGLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FBQyxHQUFRO0lBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNuRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ25FLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDbkUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDckQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDckQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDckQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBQyxHQUFHLENBQUM7SUFDN0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxH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U0FBUztRQUN0QixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsU0FBUztRQUN0QixRQUFRLEVBQUUsU0FBUztRQUNuQixlQUFlLEVBQUUsU0FBUztRQUMxQixXQUFXLEVBQUUsU0FBUztRQUN0QixlQUFlLEVBQUUsU0FBUztRQUMxQixlQUFlLEVBQUUsU0FBUztRQUMxQixZQUFZLEVBQUUsU0FBUztRQUN2QixXQUFXLEVBQUUsU0FBUztRQUN0QixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsU0FBUztRQUNqQixZQUFZLEVBQUUsU0FBUztRQUN2QixRQUFRLEVBQUUsU0FBUztRQUNuQixlQUFlLEVBQUUsU0FBUztRQUMxQixLQUFLLEVBQUUsU0FBUztRQUNoQixXQUFXLEVBQUUsU0FBUztRQUN0QixXQUFXLEVBQUUsU0FBUztRQUN0QixhQUFhLEVBQUUsU0FBUztRQUN4QixRQUFRLEVBQUUsU0FBUztRQUNuQixZQUFZLEVBQUUsU0FBUztRQUN2QixVQUFVLEVBQUUsU0FBUztRQUNyQixVQUFVLEVBQUUsU0FBUztRQUNyQixRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUUsU0FBUztRQUNwQixXQUFXLEVBQUUsU0FBUztRQUN0QixXQUFXLEVBQUUsU0FBUztRQUN0QixXQUFXLEVBQUUsU0FBUztRQUN0QixNQUFNLEVBQUUsU0FBUztRQUNqQixhQUFhLEVBQUUsU0FBUztRQUN4QixXQUFXLEVBQUUsU0FBUztRQUN0QixLQUFLLEVBQUUsU0FBUztRQUNoQixNQUFNLEVBQUUsU0FBUztRQUNqQixTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsU0FBUztRQUN0QixRQUFRLEVBQUUsU0FBUztRQUNuQixPQUFPLEVBQUUsU0FBUztRQUNsQixPQUFPLEVBQUUsU0FBUztRQUNsQixZQUFZLEVBQUUsU0FBUztRQUN2QixRQUFRLEVBQUUsU0FBUztRQUNuQixhQUFhLEVB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFTztBQUNQLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUIsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUIsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUIsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7VUNobUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOQSxnRUFBK0c7QUFBdkcsMkdBQVM7QUFBRSwyR0FBUztBQUFFLDJHQUFTO0FBQUUsNkdBQVU7QUFBRSw2R0FBVTtBQUFFLCtIQUFtQjtBQUFFLHlHQUFRO0FBRTlGLDRFQUFpRjtBQUE5RCx1R0FBSztBQUFFLHVHQUFLO0FBQUUsdUdBQUs7QUFBRSxtR0FBRztBQUFFLHFHQUFJO0FBQ2pELHdIQUFnRTtBQUF2RCx5SUFBaUI7QUFNMUIsZ0VBQThCO0FBQXJCLGlHQUFJO0FBQ2IsMkdBQXlEO0FBQWhELGtJQUFlO0FBRXhCLDBFQUFtQztBQUExQixpR0FBSTtBQUViLDBFQUFtQztBQUExQixpR0FBSTtBQUNiLGlHQUF1RTtBQUE5RCxnSEFBUztBQUNsQiw4RkFBK0M7QUFBdEMsNkdBQVE7QUFDakIsOEZBQStDO0FBQXRDLDZHQUFRO0FBQ2pCLDhGQUErQztBQUF0Qyw2R0FBUTtBQUNqQixpR0FBaUQ7QUFBeEMsZ0hBQVM7QUFDbEIsa0ZBQXNEO0FBQTdDLG1IQUFVO0FBQUUscUhBQVciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJndXRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImd1dGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvKiFcblxuSlNaaXAgdjMuNy4xIC0gQSBKYXZhU2NyaXB0IGNsYXNzIGZvciBnZW5lcmF0aW5nIGFuZCByZWFkaW5nIHppcCBmaWxlc1xuPGh0dHA6Ly9zdHVhcnRrLmNvbS9qc3ppcD5cblxuKGMpIDIwMDktMjAxNiBTdHVhcnQgS25pZ2h0bGV5IDxzdHVhcnQgW2F0XSBzdHVhcnRrLmNvbT5cbkR1YWwgbGljZW5jZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIG9yIEdQTHYzLiBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9TdHVrL2pzemlwL21hc3Rlci9MSUNFTlNFLm1hcmtkb3duLlxuXG5KU1ppcCB1c2VzIHRoZSBsaWJyYXJ5IHBha28gcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIDpcbmh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvcGFrby9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xuXG4hZnVuY3Rpb24odCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dCgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSx0KTtlbHNleyhcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMpLkpTWmlwPXQoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uIHMoYSxvLGgpe2Z1bmN0aW9uIHUocix0KXtpZighb1tyXSl7aWYoIWFbcl0pe3ZhciBlPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIXQmJmUpcmV0dXJuIGUociwhMCk7aWYobClyZXR1cm4gbChyLCEwKTt2YXIgaT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK3IrXCInXCIpO3Rocm93IGkuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixpfXZhciBuPW9bcl09e2V4cG9ydHM6e319O2Fbcl1bMF0uY2FsbChuLmV4cG9ydHMsZnVuY3Rpb24odCl7dmFyIGU9YVtyXVsxXVt0XTtyZXR1cm4gdShlfHx0KX0sbixuLmV4cG9ydHMscyxhLG8saCl9cmV0dXJuIG9bcl0uZXhwb3J0c31mb3IodmFyIGw9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSx0PTA7dDxoLmxlbmd0aDt0KyspdShoW3RdKTtyZXR1cm4gdX0oezE6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgYz10KFwiLi91dGlsc1wiKSxkPXQoXCIuL3N1cHBvcnRcIikscD1cIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCI7ci5lbmNvZGU9ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHIsaSxuLHMsYSxvLGg9W10sdT0wLGw9dC5sZW5ndGgsZj1sLGQ9XCJzdHJpbmdcIiE9PWMuZ2V0VHlwZU9mKHQpO3U8dC5sZW5ndGg7KWY9bC11LGk9ZD8oZT10W3UrK10scj11PGw/dFt1KytdOjAsdTxsP3RbdSsrXTowKTooZT10LmNoYXJDb2RlQXQodSsrKSxyPXU8bD90LmNoYXJDb2RlQXQodSsrKTowLHU8bD90LmNoYXJDb2RlQXQodSsrKTowKSxuPWU+PjIscz0oMyZlKTw8NHxyPj40LGE9MTxmPygxNSZyKTw8MnxpPj42OjY0LG89MjxmPzYzJmk6NjQsaC5wdXNoKHAuY2hhckF0KG4pK3AuY2hhckF0KHMpK3AuY2hhckF0KGEpK3AuY2hhckF0KG8pKTtyZXR1cm4gaC5qb2luKFwiXCIpfSxyLmRlY29kZT1mdW5jdGlvbih0KXt2YXIgZSxyLGksbixzLGEsbz0wLGg9MCx1PVwiZGF0YTpcIjtpZih0LnN1YnN0cigwLHUubGVuZ3RoKT09PXUpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBiYXNlNjQgaW5wdXQsIGl0IGxvb2tzIGxpa2UgYSBkYXRhIHVybC5cIik7dmFyIGwsZj0zKih0PXQucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csXCJcIikpLmxlbmd0aC80O2lmKHQuY2hhckF0KHQubGVuZ3RoLTEpPT09cC5jaGFyQXQoNjQpJiZmLS0sdC5jaGFyQXQodC5sZW5ndGgtMik9PT1wLmNoYXJBdCg2NCkmJmYtLSxmJTEhPTApdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBiYXNlNjQgaW5wdXQsIGJhZCBjb250ZW50IGxlbmd0aC5cIik7Zm9yKGw9ZC51aW50OGFycmF5P25ldyBVaW50OEFycmF5KDB8Zik6bmV3IEFycmF5KDB8Zik7bzx0Lmxlbmd0aDspZT1wLmluZGV4T2YodC5jaGFyQXQobysrKSk8PDJ8KG49cC5pbmRleE9mKHQuY2hhckF0KG8rKykpKT4+NCxyPSgxNSZuKTw8NHwocz1wLmluZGV4T2YodC5jaGFyQXQobysrKSkpPj4yLGk9KDMmcyk8PDZ8KGE9cC5pbmRleE9mKHQuY2hhckF0KG8rKykpKSxsW2grK109ZSw2NCE9PXMmJihsW2grK109ciksNjQhPT1hJiYobFtoKytdPWkpO3JldHVybiBsfX0se1wiLi9zdXBwb3J0XCI6MzAsXCIuL3V0aWxzXCI6MzJ9XSwyOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vZXh0ZXJuYWxcIiksbj10KFwiLi9zdHJlYW0vRGF0YVdvcmtlclwiKSxzPXQoXCIuL3N0cmVhbS9DcmMzMlByb2JlXCIpLGE9dChcIi4vc3RyZWFtL0RhdGFMZW5ndGhQcm9iZVwiKTtmdW5jdGlvbiBvKHQsZSxyLGksbil7dGhpcy5jb21wcmVzc2VkU2l6ZT10LHRoaXMudW5jb21wcmVzc2VkU2l6ZT1lLHRoaXMuY3JjMzI9cix0aGlzLmNvbXByZXNzaW9uPWksdGhpcy5jb21wcmVzc2VkQ29udGVudD1ufW8ucHJvdG90eXBlPXtnZXRDb250ZW50V29ya2VyOmZ1bmN0aW9uKCl7dmFyIHQ9bmV3IG4oaS5Qcm9taXNlLnJlc29sdmUodGhpcy5jb21wcmVzc2VkQ29udGVudCkpLnBpcGUodGhpcy5jb21wcmVzc2lvbi51bmNvbXByZXNzV29ya2VyKCkpLnBpcGUobmV3IGEoXCJkYXRhX2xlbmd0aFwiKSksZT10aGlzO3JldHVybiB0Lm9uKFwiZW5kXCIsZnVuY3Rpb24oKXtpZih0aGlzLnN0cmVhbUluZm8uZGF0YV9sZW5ndGghPT1lLnVuY29tcHJlc3NlZFNpemUpdGhyb3cgbmV3IEVycm9yKFwiQnVnIDogdW5jb21wcmVzc2VkIGRhdGEgc2l6ZSBtaXNtYXRjaFwiKX0pLHR9LGdldENvbXByZXNzZWRXb3JrZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG4oaS5Qcm9taXNlLnJlc29sdmUodGhpcy5jb21wcmVzc2VkQ29udGVudCkpLndpdGhTdHJlYW1JbmZvKFwiY29tcHJlc3NlZFNpemVcIix0aGlzLmNvbXByZXNzZWRTaXplKS53aXRoU3RyZWFtSW5mbyhcInVuY29tcHJlc3NlZFNpemVcIix0aGlzLnVuY29tcHJlc3NlZFNpemUpLndpdGhTdHJlYW1JbmZvKFwiY3JjMzJcIix0aGlzLmNyYzMyKS53aXRoU3RyZWFtSW5mbyhcImNvbXByZXNzaW9uXCIsdGhpcy5jb21wcmVzc2lvbil9fSxvLmNyZWF0ZVdvcmtlckZyb209ZnVuY3Rpb24odCxlLHIpe3JldHVybiB0LnBpcGUobmV3IHMpLnBpcGUobmV3IGEoXCJ1bmNvbXByZXNzZWRTaXplXCIpKS5waXBlKGUuY29tcHJlc3NXb3JrZXIocikpLnBpcGUobmV3IGEoXCJjb21wcmVzc2VkU2l6ZVwiKSkud2l0aFN0cmVhbUluZm8oXCJjb21wcmVzc2lvblwiLGUpfSxlLmV4cG9ydHM9b30se1wiLi9leHRlcm5hbFwiOjYsXCIuL3N0cmVhbS9DcmMzMlByb2JlXCI6MjUsXCIuL3N0cmVhbS9EYXRhTGVuZ3RoUHJvYmVcIjoyNixcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIjoyN31dLDM6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKTtyLlNUT1JFPXttYWdpYzpcIlxcMFxcMFwiLGNvbXByZXNzV29ya2VyOmZ1bmN0aW9uKHQpe3JldHVybiBuZXcgaShcIlNUT1JFIGNvbXByZXNzaW9uXCIpfSx1bmNvbXByZXNzV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBpKFwiU1RPUkUgZGVjb21wcmVzc2lvblwiKX19LHIuREVGTEFURT10KFwiLi9mbGF0ZVwiKX0se1wiLi9mbGF0ZVwiOjcsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6Mjh9XSw0OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vdXRpbHNcIik7dmFyIG89ZnVuY3Rpb24oKXtmb3IodmFyIHQsZT1bXSxyPTA7cjwyNTY7cisrKXt0PXI7Zm9yKHZhciBpPTA7aTw4O2krKyl0PTEmdD8zOTg4MjkyMzg0XnQ+Pj4xOnQ+Pj4xO2Vbcl09dH1yZXR1cm4gZX0oKTtlLmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdm9pZCAwIT09dCYmdC5sZW5ndGg/XCJzdHJpbmdcIiE9PWkuZ2V0VHlwZU9mKHQpP2Z1bmN0aW9uKHQsZSxyLGkpe3ZhciBuPW8scz1pK3I7dF49LTE7Zm9yKHZhciBhPWk7YTxzO2ErKyl0PXQ+Pj44Xm5bMjU1Jih0XmVbYV0pXTtyZXR1cm4tMV50fSgwfGUsdCx0Lmxlbmd0aCwwKTpmdW5jdGlvbih0LGUscixpKXt2YXIgbj1vLHM9aStyO3RePS0xO2Zvcih2YXIgYT1pO2E8czthKyspdD10Pj4+OF5uWzI1NSYodF5lLmNoYXJDb2RlQXQoYSkpXTtyZXR1cm4tMV50fSgwfGUsdCx0Lmxlbmd0aCwwKTowfX0se1wiLi91dGlsc1wiOjMyfV0sNTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3IuYmFzZTY0PSExLHIuYmluYXJ5PSExLHIuZGlyPSExLHIuY3JlYXRlRm9sZGVycz0hMCxyLmRhdGU9bnVsbCxyLmNvbXByZXNzaW9uPW51bGwsci5jb21wcmVzc2lvbk9wdGlvbnM9bnVsbCxyLmNvbW1lbnQ9bnVsbCxyLnVuaXhQZXJtaXNzaW9ucz1udWxsLHIuZG9zUGVybWlzc2lvbnM9bnVsbH0se31dLDY6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT1udWxsO2k9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2U/UHJvbWlzZTp0KFwibGllXCIpLGUuZXhwb3J0cz17UHJvbWlzZTppfX0se2xpZTozN31dLDc6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT1cInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQxNkFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDMyQXJyYXksbj10KFwicGFrb1wiKSxzPXQoXCIuL3V0aWxzXCIpLGE9dChcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksbz1pP1widWludDhhcnJheVwiOlwiYXJyYXlcIjtmdW5jdGlvbiBoKHQsZSl7YS5jYWxsKHRoaXMsXCJGbGF0ZVdvcmtlci9cIit0KSx0aGlzLl9wYWtvPW51bGwsdGhpcy5fcGFrb0FjdGlvbj10LHRoaXMuX3Bha29PcHRpb25zPWUsdGhpcy5tZXRhPXt9fXIubWFnaWM9XCJcXGJcXDBcIixzLmluaGVyaXRzKGgsYSksaC5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKHQpe3RoaXMubWV0YT10Lm1ldGEsbnVsbD09PXRoaXMuX3Bha28mJnRoaXMuX2NyZWF0ZVBha28oKSx0aGlzLl9wYWtvLnB1c2gocy50cmFuc2Zvcm1UbyhvLHQuZGF0YSksITEpfSxoLnByb3RvdHlwZS5mbHVzaD1mdW5jdGlvbigpe2EucHJvdG90eXBlLmZsdXNoLmNhbGwodGhpcyksbnVsbD09PXRoaXMuX3Bha28mJnRoaXMuX2NyZWF0ZVBha28oKSx0aGlzLl9wYWtvLnB1c2goW10sITApfSxoLnByb3RvdHlwZS5jbGVhblVwPWZ1bmN0aW9uKCl7YS5wcm90b3R5cGUuY2xlYW5VcC5jYWxsKHRoaXMpLHRoaXMuX3Bha289bnVsbH0saC5wcm90b3R5cGUuX2NyZWF0ZVBha289ZnVuY3Rpb24oKXt0aGlzLl9wYWtvPW5ldyBuW3RoaXMuX3Bha29BY3Rpb25dKHtyYXc6ITAsbGV2ZWw6dGhpcy5fcGFrb09wdGlvbnMubGV2ZWx8fC0xfSk7dmFyIGU9dGhpczt0aGlzLl9wYWtvLm9uRGF0YT1mdW5jdGlvbih0KXtlLnB1c2goe2RhdGE6dCxtZXRhOmUubWV0YX0pfX0sci5jb21wcmVzc1dvcmtlcj1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGgoXCJEZWZsYXRlXCIsdCl9LHIudW5jb21wcmVzc1dvcmtlcj1mdW5jdGlvbigpe3JldHVybiBuZXcgaChcIkluZmxhdGVcIix7fSl9fSx7XCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3V0aWxzXCI6MzIscGFrbzozOH1dLDg6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBBKHQsZSl7dmFyIHIsaT1cIlwiO2ZvcihyPTA7cjxlO3IrKylpKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSZ0KSx0Pj4+PTg7cmV0dXJuIGl9ZnVuY3Rpb24gaSh0LGUscixpLG4scyl7dmFyIGEsbyxoPXQuZmlsZSx1PXQuY29tcHJlc3Npb24sbD1zIT09Ty51dGY4ZW5jb2RlLGY9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHMoaC5uYW1lKSksZD1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsTy51dGY4ZW5jb2RlKGgubmFtZSkpLGM9aC5jb21tZW50LHA9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHMoYykpLG09SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLE8udXRmOGVuY29kZShjKSksXz1kLmxlbmd0aCE9PWgubmFtZS5sZW5ndGgsZz1tLmxlbmd0aCE9PWMubGVuZ3RoLGI9XCJcIix2PVwiXCIseT1cIlwiLHc9aC5kaXIsaz1oLmRhdGUseD17Y3JjMzI6MCxjb21wcmVzc2VkU2l6ZTowLHVuY29tcHJlc3NlZFNpemU6MH07ZSYmIXJ8fCh4LmNyYzMyPXQuY3JjMzIseC5jb21wcmVzc2VkU2l6ZT10LmNvbXByZXNzZWRTaXplLHgudW5jb21wcmVzc2VkU2l6ZT10LnVuY29tcHJlc3NlZFNpemUpO3ZhciBTPTA7ZSYmKFN8PTgpLGx8fCFfJiYhZ3x8KFN8PTIwNDgpO3ZhciB6PTAsQz0wO3cmJih6fD0xNiksXCJVTklYXCI9PT1uPyhDPTc5OCx6fD1mdW5jdGlvbih0LGUpe3ZhciByPXQ7cmV0dXJuIHR8fChyPWU/MTY4OTM6MzMyMDQpLCg2NTUzNSZyKTw8MTZ9KGgudW5peFBlcm1pc3Npb25zLHcpKTooQz0yMCx6fD1mdW5jdGlvbih0KXtyZXR1cm4gNjMmKHR8fDApfShoLmRvc1Blcm1pc3Npb25zKSksYT1rLmdldFVUQ0hvdXJzKCksYTw8PTYsYXw9ay5nZXRVVENNaW51dGVzKCksYTw8PTUsYXw9ay5nZXRVVENTZWNvbmRzKCkvMixvPWsuZ2V0VVRDRnVsbFllYXIoKS0xOTgwLG88PD00LG98PWsuZ2V0VVRDTW9udGgoKSsxLG88PD01LG98PWsuZ2V0VVRDRGF0ZSgpLF8mJih2PUEoMSwxKStBKEIoZiksNCkrZCxiKz1cInVwXCIrQSh2Lmxlbmd0aCwyKSt2KSxnJiYoeT1BKDEsMSkrQShCKHApLDQpK20sYis9XCJ1Y1wiK0EoeS5sZW5ndGgsMikreSk7dmFyIEU9XCJcIjtyZXR1cm4gRSs9XCJcXG5cXDBcIixFKz1BKFMsMiksRSs9dS5tYWdpYyxFKz1BKGEsMiksRSs9QShvLDIpLEUrPUEoeC5jcmMzMiw0KSxFKz1BKHguY29tcHJlc3NlZFNpemUsNCksRSs9QSh4LnVuY29tcHJlc3NlZFNpemUsNCksRSs9QShmLmxlbmd0aCwyKSxFKz1BKGIubGVuZ3RoLDIpLHtmaWxlUmVjb3JkOlIuTE9DQUxfRklMRV9IRUFERVIrRStmK2IsZGlyUmVjb3JkOlIuQ0VOVFJBTF9GSUxFX0hFQURFUitBKEMsMikrRStBKHAubGVuZ3RoLDIpK1wiXFwwXFwwXFwwXFwwXCIrQSh6LDQpK0EoaSw0KStmK2IrcH19dmFyIEk9dChcIi4uL3V0aWxzXCIpLG49dChcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpLE89dChcIi4uL3V0ZjhcIiksQj10KFwiLi4vY3JjMzJcIiksUj10KFwiLi4vc2lnbmF0dXJlXCIpO2Z1bmN0aW9uIHModCxlLHIsaSl7bi5jYWxsKHRoaXMsXCJaaXBGaWxlV29ya2VyXCIpLHRoaXMuYnl0ZXNXcml0dGVuPTAsdGhpcy56aXBDb21tZW50PWUsdGhpcy56aXBQbGF0Zm9ybT1yLHRoaXMuZW5jb2RlRmlsZU5hbWU9aSx0aGlzLnN0cmVhbUZpbGVzPXQsdGhpcy5hY2N1bXVsYXRlPSExLHRoaXMuY29udGVudEJ1ZmZlcj1bXSx0aGlzLmRpclJlY29yZHM9W10sdGhpcy5jdXJyZW50U291cmNlT2Zmc2V0PTAsdGhpcy5lbnRyaWVzQ291bnQ9MCx0aGlzLmN1cnJlbnRGaWxlPW51bGwsdGhpcy5fc291cmNlcz1bXX1JLmluaGVyaXRzKHMsbikscy5wcm90b3R5cGUucHVzaD1mdW5jdGlvbih0KXt2YXIgZT10Lm1ldGEucGVyY2VudHx8MCxyPXRoaXMuZW50cmllc0NvdW50LGk9dGhpcy5fc291cmNlcy5sZW5ndGg7dGhpcy5hY2N1bXVsYXRlP3RoaXMuY29udGVudEJ1ZmZlci5wdXNoKHQpOih0aGlzLmJ5dGVzV3JpdHRlbis9dC5kYXRhLmxlbmd0aCxuLnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcyx7ZGF0YTp0LmRhdGEsbWV0YTp7Y3VycmVudEZpbGU6dGhpcy5jdXJyZW50RmlsZSxwZXJjZW50OnI/KGUrMTAwKihyLWktMSkpL3I6MTAwfX0pKX0scy5wcm90b3R5cGUub3BlbmVkU291cmNlPWZ1bmN0aW9uKHQpe3RoaXMuY3VycmVudFNvdXJjZU9mZnNldD10aGlzLmJ5dGVzV3JpdHRlbix0aGlzLmN1cnJlbnRGaWxlPXQuZmlsZS5uYW1lO3ZhciBlPXRoaXMuc3RyZWFtRmlsZXMmJiF0LmZpbGUuZGlyO2lmKGUpe3ZhciByPWkodCxlLCExLHRoaXMuY3VycmVudFNvdXJjZU9mZnNldCx0aGlzLnppcFBsYXRmb3JtLHRoaXMuZW5jb2RlRmlsZU5hbWUpO3RoaXMucHVzaCh7ZGF0YTpyLmZpbGVSZWNvcmQsbWV0YTp7cGVyY2VudDowfX0pfWVsc2UgdGhpcy5hY2N1bXVsYXRlPSEwfSxzLnByb3RvdHlwZS5jbG9zZWRTb3VyY2U9ZnVuY3Rpb24odCl7dGhpcy5hY2N1bXVsYXRlPSExO3ZhciBlPXRoaXMuc3RyZWFtRmlsZXMmJiF0LmZpbGUuZGlyLHI9aSh0LGUsITAsdGhpcy5jdXJyZW50U291cmNlT2Zmc2V0LHRoaXMuemlwUGxhdGZvcm0sdGhpcy5lbmNvZGVGaWxlTmFtZSk7aWYodGhpcy5kaXJSZWNvcmRzLnB1c2goci5kaXJSZWNvcmQpLGUpdGhpcy5wdXNoKHtkYXRhOmZ1bmN0aW9uKHQpe3JldHVybiBSLkRBVEFfREVTQ1JJUFRPUitBKHQuY3JjMzIsNCkrQSh0LmNvbXByZXNzZWRTaXplLDQpK0EodC51bmNvbXByZXNzZWRTaXplLDQpfSh0KSxtZXRhOntwZXJjZW50OjEwMH19KTtlbHNlIGZvcih0aGlzLnB1c2goe2RhdGE6ci5maWxlUmVjb3JkLG1ldGE6e3BlcmNlbnQ6MH19KTt0aGlzLmNvbnRlbnRCdWZmZXIubGVuZ3RoOyl0aGlzLnB1c2godGhpcy5jb250ZW50QnVmZmVyLnNoaWZ0KCkpO3RoaXMuY3VycmVudEZpbGU9bnVsbH0scy5wcm90b3R5cGUuZmx1c2g9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy5ieXRlc1dyaXR0ZW4sZT0wO2U8dGhpcy5kaXJSZWNvcmRzLmxlbmd0aDtlKyspdGhpcy5wdXNoKHtkYXRhOnRoaXMuZGlyUmVjb3Jkc1tlXSxtZXRhOntwZXJjZW50OjEwMH19KTt2YXIgcj10aGlzLmJ5dGVzV3JpdHRlbi10LGk9ZnVuY3Rpb24odCxlLHIsaSxuKXt2YXIgcz1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsbihpKSk7cmV0dXJuIFIuQ0VOVFJBTF9ESVJFQ1RPUllfRU5EK1wiXFwwXFwwXFwwXFwwXCIrQSh0LDIpK0EodCwyKStBKGUsNCkrQShyLDQpK0Eocy5sZW5ndGgsMikrc30odGhpcy5kaXJSZWNvcmRzLmxlbmd0aCxyLHQsdGhpcy56aXBDb21tZW50LHRoaXMuZW5jb2RlRmlsZU5hbWUpO3RoaXMucHVzaCh7ZGF0YTppLG1ldGE6e3BlcmNlbnQ6MTAwfX0pfSxzLnByb3RvdHlwZS5wcmVwYXJlTmV4dFNvdXJjZT1mdW5jdGlvbigpe3RoaXMucHJldmlvdXM9dGhpcy5fc291cmNlcy5zaGlmdCgpLHRoaXMub3BlbmVkU291cmNlKHRoaXMucHJldmlvdXMuc3RyZWFtSW5mbyksdGhpcy5pc1BhdXNlZD90aGlzLnByZXZpb3VzLnBhdXNlKCk6dGhpcy5wcmV2aW91cy5yZXN1bWUoKX0scy5wcm90b3R5cGUucmVnaXN0ZXJQcmV2aW91cz1mdW5jdGlvbih0KXt0aGlzLl9zb3VyY2VzLnB1c2godCk7dmFyIGU9dGhpcztyZXR1cm4gdC5vbihcImRhdGFcIixmdW5jdGlvbih0KXtlLnByb2Nlc3NDaHVuayh0KX0pLHQub24oXCJlbmRcIixmdW5jdGlvbigpe2UuY2xvc2VkU291cmNlKGUucHJldmlvdXMuc3RyZWFtSW5mbyksZS5fc291cmNlcy5sZW5ndGg/ZS5wcmVwYXJlTmV4dFNvdXJjZSgpOmUuZW5kKCl9KSx0Lm9uKFwiZXJyb3JcIixmdW5jdGlvbih0KXtlLmVycm9yKHQpfSksdGhpc30scy5wcm90b3R5cGUucmVzdW1lPWZ1bmN0aW9uKCl7cmV0dXJuISFuLnByb3RvdHlwZS5yZXN1bWUuY2FsbCh0aGlzKSYmKCF0aGlzLnByZXZpb3VzJiZ0aGlzLl9zb3VyY2VzLmxlbmd0aD8odGhpcy5wcmVwYXJlTmV4dFNvdXJjZSgpLCEwKTp0aGlzLnByZXZpb3VzfHx0aGlzLl9zb3VyY2VzLmxlbmd0aHx8dGhpcy5nZW5lcmF0ZWRFcnJvcj92b2lkIDA6KHRoaXMuZW5kKCksITApKX0scy5wcm90b3R5cGUuZXJyb3I9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fc291cmNlcztpZighbi5wcm90b3R5cGUuZXJyb3IuY2FsbCh0aGlzLHQpKXJldHVybiExO2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKXRyeXtlW3JdLmVycm9yKHQpfWNhdGNoKHQpe31yZXR1cm4hMH0scy5wcm90b3R5cGUubG9jaz1mdW5jdGlvbigpe24ucHJvdG90eXBlLmxvY2suY2FsbCh0aGlzKTtmb3IodmFyIHQ9dGhpcy5fc291cmNlcyxlPTA7ZTx0Lmxlbmd0aDtlKyspdFtlXS5sb2NrKCl9LGUuZXhwb3J0cz1zfSx7XCIuLi9jcmMzMlwiOjQsXCIuLi9zaWduYXR1cmVcIjoyMyxcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuLi91dGY4XCI6MzEsXCIuLi91dGlsc1wiOjMyfV0sOTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciB1PXQoXCIuLi9jb21wcmVzc2lvbnNcIiksaT10KFwiLi9aaXBGaWxlV29ya2VyXCIpO3IuZ2VuZXJhdGVXb3JrZXI9ZnVuY3Rpb24odCxhLGUpe3ZhciBvPW5ldyBpKGEuc3RyZWFtRmlsZXMsZSxhLnBsYXRmb3JtLGEuZW5jb2RlRmlsZU5hbWUpLGg9MDt0cnl7dC5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7aCsrO3ZhciByPWZ1bmN0aW9uKHQsZSl7dmFyIHI9dHx8ZSxpPXVbcl07aWYoIWkpdGhyb3cgbmV3IEVycm9yKHIrXCIgaXMgbm90IGEgdmFsaWQgY29tcHJlc3Npb24gbWV0aG9kICFcIik7cmV0dXJuIGl9KGUub3B0aW9ucy5jb21wcmVzc2lvbixhLmNvbXByZXNzaW9uKSxpPWUub3B0aW9ucy5jb21wcmVzc2lvbk9wdGlvbnN8fGEuY29tcHJlc3Npb25PcHRpb25zfHx7fSxuPWUuZGlyLHM9ZS5kYXRlO2UuX2NvbXByZXNzV29ya2VyKHIsaSkud2l0aFN0cmVhbUluZm8oXCJmaWxlXCIse25hbWU6dCxkaXI6bixkYXRlOnMsY29tbWVudDplLmNvbW1lbnR8fFwiXCIsdW5peFBlcm1pc3Npb25zOmUudW5peFBlcm1pc3Npb25zLGRvc1Blcm1pc3Npb25zOmUuZG9zUGVybWlzc2lvbnN9KS5waXBlKG8pfSksby5lbnRyaWVzQ291bnQ9aH1jYXRjaCh0KXtvLmVycm9yKHQpfXJldHVybiBvfX0se1wiLi4vY29tcHJlc3Npb25zXCI6MyxcIi4vWmlwRmlsZVdvcmtlclwiOjh9XSwxMDpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoKXtpZighKHRoaXMgaW5zdGFuY2VvZiBpKSlyZXR1cm4gbmV3IGk7aWYoYXJndW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29uc3RydWN0b3Igd2l0aCBwYXJhbWV0ZXJzIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpO3RoaXMuZmlsZXM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLmNvbW1lbnQ9bnVsbCx0aGlzLnJvb3Q9XCJcIix0aGlzLmNsb25lPWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IGk7Zm9yKHZhciBlIGluIHRoaXMpXCJmdW5jdGlvblwiIT10eXBlb2YgdGhpc1tlXSYmKHRbZV09dGhpc1tlXSk7cmV0dXJuIHR9fShpLnByb3RvdHlwZT10KFwiLi9vYmplY3RcIikpLmxvYWRBc3luYz10KFwiLi9sb2FkXCIpLGkuc3VwcG9ydD10KFwiLi9zdXBwb3J0XCIpLGkuZGVmYXVsdHM9dChcIi4vZGVmYXVsdHNcIiksaS52ZXJzaW9uPVwiMy43LjFcIixpLmxvYWRBc3luYz1mdW5jdGlvbih0LGUpe3JldHVybihuZXcgaSkubG9hZEFzeW5jKHQsZSl9LGkuZXh0ZXJuYWw9dChcIi4vZXh0ZXJuYWxcIiksZS5leHBvcnRzPWl9LHtcIi4vZGVmYXVsdHNcIjo1LFwiLi9leHRlcm5hbFwiOjYsXCIuL2xvYWRcIjoxMSxcIi4vb2JqZWN0XCI6MTUsXCIuL3N1cHBvcnRcIjozMH1dLDExOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vdXRpbHNcIiksbj10KFwiLi9leHRlcm5hbFwiKSxvPXQoXCIuL3V0ZjhcIiksaD10KFwiLi96aXBFbnRyaWVzXCIpLHM9dChcIi4vc3RyZWFtL0NyYzMyUHJvYmVcIiksdT10KFwiLi9ub2RlanNVdGlsc1wiKTtmdW5jdGlvbiBsKGkpe3JldHVybiBuZXcgbi5Qcm9taXNlKGZ1bmN0aW9uKHQsZSl7dmFyIHI9aS5kZWNvbXByZXNzZWQuZ2V0Q29udGVudFdvcmtlcigpLnBpcGUobmV3IHMpO3Iub24oXCJlcnJvclwiLGZ1bmN0aW9uKHQpe2UodCl9KS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7ci5zdHJlYW1JbmZvLmNyYzMyIT09aS5kZWNvbXByZXNzZWQuY3JjMzI/ZShuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwIDogQ1JDMzIgbWlzbWF0Y2hcIikpOnQoKX0pLnJlc3VtZSgpfSl9ZS5leHBvcnRzPWZ1bmN0aW9uKHQscyl7dmFyIGE9dGhpcztyZXR1cm4gcz1pLmV4dGVuZChzfHx7fSx7YmFzZTY0OiExLGNoZWNrQ1JDMzI6ITEsb3B0aW1pemVkQmluYXJ5U3RyaW5nOiExLGNyZWF0ZUZvbGRlcnM6ITEsZGVjb2RlRmlsZU5hbWU6by51dGY4ZGVjb2RlfSksdS5pc05vZGUmJnUuaXNTdHJlYW0odCk/bi5Qcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJKU1ppcCBjYW4ndCBhY2NlcHQgYSBzdHJlYW0gd2hlbiBsb2FkaW5nIGEgemlwIGZpbGUuXCIpKTppLnByZXBhcmVDb250ZW50KFwidGhlIGxvYWRlZCB6aXAgZmlsZVwiLHQsITAscy5vcHRpbWl6ZWRCaW5hcnlTdHJpbmcscy5iYXNlNjQpLnRoZW4oZnVuY3Rpb24odCl7dmFyIGU9bmV3IGgocyk7cmV0dXJuIGUubG9hZCh0KSxlfSkudGhlbihmdW5jdGlvbih0KXt2YXIgZT1bbi5Qcm9taXNlLnJlc29sdmUodCldLHI9dC5maWxlcztpZihzLmNoZWNrQ1JDMzIpZm9yKHZhciBpPTA7aTxyLmxlbmd0aDtpKyspZS5wdXNoKGwocltpXSkpO3JldHVybiBuLlByb21pc2UuYWxsKGUpfSkudGhlbihmdW5jdGlvbih0KXtmb3IodmFyIGU9dC5zaGlmdCgpLHI9ZS5maWxlcyxpPTA7aTxyLmxlbmd0aDtpKyspe3ZhciBuPXJbaV07YS5maWxlKG4uZmlsZU5hbWVTdHIsbi5kZWNvbXByZXNzZWQse2JpbmFyeTohMCxvcHRpbWl6ZWRCaW5hcnlTdHJpbmc6ITAsZGF0ZTpuLmRhdGUsZGlyOm4uZGlyLGNvbW1lbnQ6bi5maWxlQ29tbWVudFN0ci5sZW5ndGg/bi5maWxlQ29tbWVudFN0cjpudWxsLHVuaXhQZXJtaXNzaW9uczpuLnVuaXhQZXJtaXNzaW9ucyxkb3NQZXJtaXNzaW9uczpuLmRvc1Blcm1pc3Npb25zLGNyZWF0ZUZvbGRlcnM6cy5jcmVhdGVGb2xkZXJzfSl9cmV0dXJuIGUuemlwQ29tbWVudC5sZW5ndGgmJihhLmNvbW1lbnQ9ZS56aXBDb21tZW50KSxhfSl9fSx7XCIuL2V4dGVybmFsXCI6NixcIi4vbm9kZWpzVXRpbHNcIjoxNCxcIi4vc3RyZWFtL0NyYzMyUHJvYmVcIjoyNSxcIi4vdXRmOFwiOjMxLFwiLi91dGlsc1wiOjMyLFwiLi96aXBFbnRyaWVzXCI6MzN9XSwxMjpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuLi91dGlsc1wiKSxuPXQoXCIuLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKTtmdW5jdGlvbiBzKHQsZSl7bi5jYWxsKHRoaXMsXCJOb2RlanMgc3RyZWFtIGlucHV0IGFkYXB0ZXIgZm9yIFwiK3QpLHRoaXMuX3Vwc3RyZWFtRW5kZWQ9ITEsdGhpcy5fYmluZFN0cmVhbShlKX1pLmluaGVyaXRzKHMsbikscy5wcm90b3R5cGUuX2JpbmRTdHJlYW09ZnVuY3Rpb24odCl7dmFyIGU9dGhpczsodGhpcy5fc3RyZWFtPXQpLnBhdXNlKCksdC5vbihcImRhdGFcIixmdW5jdGlvbih0KXtlLnB1c2goe2RhdGE6dCxtZXRhOntwZXJjZW50OjB9fSl9KS5vbihcImVycm9yXCIsZnVuY3Rpb24odCl7ZS5pc1BhdXNlZD90aGlzLmdlbmVyYXRlZEVycm9yPXQ6ZS5lcnJvcih0KX0pLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXtlLmlzUGF1c2VkP2UuX3Vwc3RyZWFtRW5kZWQ9ITA6ZS5lbmQoKX0pfSxzLnByb3RvdHlwZS5wYXVzZT1mdW5jdGlvbigpe3JldHVybiEhbi5wcm90b3R5cGUucGF1c2UuY2FsbCh0aGlzKSYmKHRoaXMuX3N0cmVhbS5wYXVzZSgpLCEwKX0scy5wcm90b3R5cGUucmVzdW1lPWZ1bmN0aW9uKCl7cmV0dXJuISFuLnByb3RvdHlwZS5yZXN1bWUuY2FsbCh0aGlzKSYmKHRoaXMuX3Vwc3RyZWFtRW5kZWQ/dGhpcy5lbmQoKTp0aGlzLl9zdHJlYW0ucmVzdW1lKCksITApfSxlLmV4cG9ydHM9c30se1wiLi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4uL3V0aWxzXCI6MzJ9XSwxMzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXQoXCJyZWFkYWJsZS1zdHJlYW1cIikuUmVhZGFibGU7ZnVuY3Rpb24gaSh0LGUscil7bi5jYWxsKHRoaXMsZSksdGhpcy5faGVscGVyPXQ7dmFyIGk9dGhpczt0Lm9uKFwiZGF0YVwiLGZ1bmN0aW9uKHQsZSl7aS5wdXNoKHQpfHxpLl9oZWxwZXIucGF1c2UoKSxyJiZyKGUpfSkub24oXCJlcnJvclwiLGZ1bmN0aW9uKHQpe2kuZW1pdChcImVycm9yXCIsdCl9KS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7aS5wdXNoKG51bGwpfSl9dChcIi4uL3V0aWxzXCIpLmluaGVyaXRzKGksbiksaS5wcm90b3R5cGUuX3JlYWQ9ZnVuY3Rpb24oKXt0aGlzLl9oZWxwZXIucmVzdW1lKCl9LGUuZXhwb3J0cz1pfSx7XCIuLi91dGlsc1wiOjMyLFwicmVhZGFibGUtc3RyZWFtXCI6MTZ9XSwxNDpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz17aXNOb2RlOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBCdWZmZXIsbmV3QnVmZmVyRnJvbTpmdW5jdGlvbih0LGUpe2lmKEJ1ZmZlci5mcm9tJiZCdWZmZXIuZnJvbSE9PVVpbnQ4QXJyYXkuZnJvbSlyZXR1cm4gQnVmZmVyLmZyb20odCxlKTtpZihcIm51bWJlclwiPT10eXBlb2YgdCl0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcImRhdGFcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpO3JldHVybiBuZXcgQnVmZmVyKHQsZSl9LGFsbG9jQnVmZmVyOmZ1bmN0aW9uKHQpe2lmKEJ1ZmZlci5hbGxvYylyZXR1cm4gQnVmZmVyLmFsbG9jKHQpO3ZhciBlPW5ldyBCdWZmZXIodCk7cmV0dXJuIGUuZmlsbCgwKSxlfSxpc0J1ZmZlcjpmdW5jdGlvbih0KXtyZXR1cm4gQnVmZmVyLmlzQnVmZmVyKHQpfSxpc1N0cmVhbTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC5vbiYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC5wYXVzZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC5yZXN1bWV9fX0se31dLDE1OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyh0LGUscil7dmFyIGksbj11LmdldFR5cGVPZihlKSxzPXUuZXh0ZW5kKHJ8fHt9LGYpO3MuZGF0ZT1zLmRhdGV8fG5ldyBEYXRlLG51bGwhPT1zLmNvbXByZXNzaW9uJiYocy5jb21wcmVzc2lvbj1zLmNvbXByZXNzaW9uLnRvVXBwZXJDYXNlKCkpLFwic3RyaW5nXCI9PXR5cGVvZiBzLnVuaXhQZXJtaXNzaW9ucyYmKHMudW5peFBlcm1pc3Npb25zPXBhcnNlSW50KHMudW5peFBlcm1pc3Npb25zLDgpKSxzLnVuaXhQZXJtaXNzaW9ucyYmMTYzODQmcy51bml4UGVybWlzc2lvbnMmJihzLmRpcj0hMCkscy5kb3NQZXJtaXNzaW9ucyYmMTYmcy5kb3NQZXJtaXNzaW9ucyYmKHMuZGlyPSEwKSxzLmRpciYmKHQ9Zyh0KSkscy5jcmVhdGVGb2xkZXJzJiYoaT1fKHQpKSYmYi5jYWxsKHRoaXMsaSwhMCk7dmFyIGE9XCJzdHJpbmdcIj09PW4mJiExPT09cy5iaW5hcnkmJiExPT09cy5iYXNlNjQ7ciYmdm9pZCAwIT09ci5iaW5hcnl8fChzLmJpbmFyeT0hYSksKGUgaW5zdGFuY2VvZiBkJiYwPT09ZS51bmNvbXByZXNzZWRTaXplfHxzLmRpcnx8IWV8fDA9PT1lLmxlbmd0aCkmJihzLmJhc2U2ND0hMSxzLmJpbmFyeT0hMCxlPVwiXCIscy5jb21wcmVzc2lvbj1cIlNUT1JFXCIsbj1cInN0cmluZ1wiKTt2YXIgbz1udWxsO289ZSBpbnN0YW5jZW9mIGR8fGUgaW5zdGFuY2VvZiBsP2U6cC5pc05vZGUmJnAuaXNTdHJlYW0oZSk/bmV3IG0odCxlKTp1LnByZXBhcmVDb250ZW50KHQsZSxzLmJpbmFyeSxzLm9wdGltaXplZEJpbmFyeVN0cmluZyxzLmJhc2U2NCk7dmFyIGg9bmV3IGModCxvLHMpO3RoaXMuZmlsZXNbdF09aH12YXIgbj10KFwiLi91dGY4XCIpLHU9dChcIi4vdXRpbHNcIiksbD10KFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKSxhPXQoXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIiksZj10KFwiLi9kZWZhdWx0c1wiKSxkPXQoXCIuL2NvbXByZXNzZWRPYmplY3RcIiksYz10KFwiLi96aXBPYmplY3RcIiksbz10KFwiLi9nZW5lcmF0ZVwiKSxwPXQoXCIuL25vZGVqc1V0aWxzXCIpLG09dChcIi4vbm9kZWpzL05vZGVqc1N0cmVhbUlucHV0QWRhcHRlclwiKSxfPWZ1bmN0aW9uKHQpe1wiL1wiPT09dC5zbGljZSgtMSkmJih0PXQuc3Vic3RyaW5nKDAsdC5sZW5ndGgtMSkpO3ZhciBlPXQubGFzdEluZGV4T2YoXCIvXCIpO3JldHVybiAwPGU/dC5zdWJzdHJpbmcoMCxlKTpcIlwifSxnPWZ1bmN0aW9uKHQpe3JldHVyblwiL1wiIT09dC5zbGljZSgtMSkmJih0Kz1cIi9cIiksdH0sYj1mdW5jdGlvbih0LGUpe3JldHVybiBlPXZvaWQgMCE9PWU/ZTpmLmNyZWF0ZUZvbGRlcnMsdD1nKHQpLHRoaXMuZmlsZXNbdF18fHMuY2FsbCh0aGlzLHQsbnVsbCx7ZGlyOiEwLGNyZWF0ZUZvbGRlcnM6ZX0pLHRoaXMuZmlsZXNbdF19O2Z1bmN0aW9uIGgodCl7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KX12YXIgaT17bG9hZDpmdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpfSxmb3JFYWNoOmZ1bmN0aW9uKHQpe3ZhciBlLHIsaTtmb3IoZSBpbiB0aGlzLmZpbGVzKWk9dGhpcy5maWxlc1tlXSwocj1lLnNsaWNlKHRoaXMucm9vdC5sZW5ndGgsZS5sZW5ndGgpKSYmZS5zbGljZSgwLHRoaXMucm9vdC5sZW5ndGgpPT09dGhpcy5yb290JiZ0KHIsaSl9LGZpbHRlcjpmdW5jdGlvbihyKXt2YXIgaT1bXTtyZXR1cm4gdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7cih0LGUpJiZpLnB1c2goZSl9KSxpfSxmaWxlOmZ1bmN0aW9uKHQsZSxyKXtpZigxIT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdD10aGlzLnJvb3QrdCxzLmNhbGwodGhpcyx0LGUsciksdGhpcztpZihoKHQpKXt2YXIgaT10O3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbih0LGUpe3JldHVybiFlLmRpciYmaS50ZXN0KHQpfSl9dmFyIG49dGhpcy5maWxlc1t0aGlzLnJvb3QrdF07cmV0dXJuIG4mJiFuLmRpcj9uOm51bGx9LGZvbGRlcjpmdW5jdGlvbihyKXtpZighcilyZXR1cm4gdGhpcztpZihoKHIpKXJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbih0LGUpe3JldHVybiBlLmRpciYmci50ZXN0KHQpfSk7dmFyIHQ9dGhpcy5yb290K3IsZT1iLmNhbGwodGhpcyx0KSxpPXRoaXMuY2xvbmUoKTtyZXR1cm4gaS5yb290PWUubmFtZSxpfSxyZW1vdmU6ZnVuY3Rpb24ocil7cj10aGlzLnJvb3Qrcjt2YXIgdD10aGlzLmZpbGVzW3JdO2lmKHR8fChcIi9cIiE9PXIuc2xpY2UoLTEpJiYocis9XCIvXCIpLHQ9dGhpcy5maWxlc1tyXSksdCYmIXQuZGlyKWRlbGV0ZSB0aGlzLmZpbGVzW3JdO2Vsc2UgZm9yKHZhciBlPXRoaXMuZmlsdGVyKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUubmFtZS5zbGljZSgwLHIubGVuZ3RoKT09PXJ9KSxpPTA7aTxlLmxlbmd0aDtpKyspZGVsZXRlIHRoaXMuZmlsZXNbZVtpXS5uYW1lXTtyZXR1cm4gdGhpc30sZ2VuZXJhdGU6ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwiVGhpcyBtZXRob2QgaGFzIGJlZW4gcmVtb3ZlZCBpbiBKU1ppcCAzLjAsIHBsZWFzZSBjaGVjayB0aGUgdXBncmFkZSBndWlkZS5cIil9LGdlbmVyYXRlSW50ZXJuYWxTdHJlYW06ZnVuY3Rpb24odCl7dmFyIGUscj17fTt0cnl7aWYoKHI9dS5leHRlbmQodHx8e30se3N0cmVhbUZpbGVzOiExLGNvbXByZXNzaW9uOlwiU1RPUkVcIixjb21wcmVzc2lvbk9wdGlvbnM6bnVsbCx0eXBlOlwiXCIscGxhdGZvcm06XCJET1NcIixjb21tZW50Om51bGwsbWltZVR5cGU6XCJhcHBsaWNhdGlvbi96aXBcIixlbmNvZGVGaWxlTmFtZTpuLnV0ZjhlbmNvZGV9KSkudHlwZT1yLnR5cGUudG9Mb3dlckNhc2UoKSxyLmNvbXByZXNzaW9uPXIuY29tcHJlc3Npb24udG9VcHBlckNhc2UoKSxcImJpbmFyeXN0cmluZ1wiPT09ci50eXBlJiYoci50eXBlPVwic3RyaW5nXCIpLCFyLnR5cGUpdGhyb3cgbmV3IEVycm9yKFwiTm8gb3V0cHV0IHR5cGUgc3BlY2lmaWVkLlwiKTt1LmNoZWNrU3VwcG9ydChyLnR5cGUpLFwiZGFyd2luXCIhPT1yLnBsYXRmb3JtJiZcImZyZWVic2RcIiE9PXIucGxhdGZvcm0mJlwibGludXhcIiE9PXIucGxhdGZvcm0mJlwic3Vub3NcIiE9PXIucGxhdGZvcm18fChyLnBsYXRmb3JtPVwiVU5JWFwiKSxcIndpbjMyXCI9PT1yLnBsYXRmb3JtJiYoci5wbGF0Zm9ybT1cIkRPU1wiKTt2YXIgaT1yLmNvbW1lbnR8fHRoaXMuY29tbWVudHx8XCJcIjtlPW8uZ2VuZXJhdGVXb3JrZXIodGhpcyxyLGkpfWNhdGNoKHQpeyhlPW5ldyBsKFwiZXJyb3JcIikpLmVycm9yKHQpfXJldHVybiBuZXcgYShlLHIudHlwZXx8XCJzdHJpbmdcIixyLm1pbWVUeXBlKX0sZ2VuZXJhdGVBc3luYzpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmdlbmVyYXRlSW50ZXJuYWxTdHJlYW0odCkuYWNjdW11bGF0ZShlKX0sZ2VuZXJhdGVOb2RlU3RyZWFtOmZ1bmN0aW9uKHQsZSl7cmV0dXJuKHQ9dHx8e30pLnR5cGV8fCh0LnR5cGU9XCJub2RlYnVmZmVyXCIpLHRoaXMuZ2VuZXJhdGVJbnRlcm5hbFN0cmVhbSh0KS50b05vZGVqc1N0cmVhbShlKX19O2UuZXhwb3J0cz1pfSx7XCIuL2NvbXByZXNzZWRPYmplY3RcIjoyLFwiLi9kZWZhdWx0c1wiOjUsXCIuL2dlbmVyYXRlXCI6OSxcIi4vbm9kZWpzL05vZGVqc1N0cmVhbUlucHV0QWRhcHRlclwiOjEyLFwiLi9ub2RlanNVdGlsc1wiOjE0LFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi9zdHJlYW0vU3RyZWFtSGVscGVyXCI6MjksXCIuL3V0ZjhcIjozMSxcIi4vdXRpbHNcIjozMixcIi4vemlwT2JqZWN0XCI6MzV9XSwxNjpbZnVuY3Rpb24odCxlLHIpe2UuZXhwb3J0cz10KFwic3RyZWFtXCIpfSx7c3RyZWFtOnZvaWQgMH1dLDE3OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vRGF0YVJlYWRlclwiKTtmdW5jdGlvbiBuKHQpe2kuY2FsbCh0aGlzLHQpO2Zvcih2YXIgZT0wO2U8dGhpcy5kYXRhLmxlbmd0aDtlKyspdFtlXT0yNTUmdFtlXX10KFwiLi4vdXRpbHNcIikuaW5oZXJpdHMobixpKSxuLnByb3RvdHlwZS5ieXRlQXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZGF0YVt0aGlzLnplcm8rdF19LG4ucHJvdG90eXBlLmxhc3RJbmRleE9mU2lnbmF0dXJlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10LmNoYXJDb2RlQXQoMCkscj10LmNoYXJDb2RlQXQoMSksaT10LmNoYXJDb2RlQXQoMiksbj10LmNoYXJDb2RlQXQoMykscz10aGlzLmxlbmd0aC00OzA8PXM7LS1zKWlmKHRoaXMuZGF0YVtzXT09PWUmJnRoaXMuZGF0YVtzKzFdPT09ciYmdGhpcy5kYXRhW3MrMl09PT1pJiZ0aGlzLmRhdGFbcyszXT09PW4pcmV0dXJuIHMtdGhpcy56ZXJvO3JldHVybi0xfSxuLnByb3RvdHlwZS5yZWFkQW5kQ2hlY2tTaWduYXR1cmU9ZnVuY3Rpb24odCl7dmFyIGU9dC5jaGFyQ29kZUF0KDApLHI9dC5jaGFyQ29kZUF0KDEpLGk9dC5jaGFyQ29kZUF0KDIpLG49dC5jaGFyQ29kZUF0KDMpLHM9dGhpcy5yZWFkRGF0YSg0KTtyZXR1cm4gZT09PXNbMF0mJnI9PT1zWzFdJiZpPT09c1syXSYmbj09PXNbM119LG4ucHJvdG90eXBlLnJlYWREYXRhPWZ1bmN0aW9uKHQpe2lmKHRoaXMuY2hlY2tPZmZzZXQodCksMD09PXQpcmV0dXJuW107dmFyIGU9dGhpcy5kYXRhLnNsaWNlKHRoaXMuemVybyt0aGlzLmluZGV4LHRoaXMuemVybyt0aGlzLmluZGV4K3QpO3JldHVybiB0aGlzLmluZGV4Kz10LGV9LGUuZXhwb3J0cz1ufSx7XCIuLi91dGlsc1wiOjMyLFwiLi9EYXRhUmVhZGVyXCI6MTh9XSwxODpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuLi91dGlsc1wiKTtmdW5jdGlvbiBuKHQpe3RoaXMuZGF0YT10LHRoaXMubGVuZ3RoPXQubGVuZ3RoLHRoaXMuaW5kZXg9MCx0aGlzLnplcm89MH1uLnByb3RvdHlwZT17Y2hlY2tPZmZzZXQ6ZnVuY3Rpb24odCl7dGhpcy5jaGVja0luZGV4KHRoaXMuaW5kZXgrdCl9LGNoZWNrSW5kZXg6ZnVuY3Rpb24odCl7aWYodGhpcy5sZW5ndGg8dGhpcy56ZXJvK3R8fHQ8MCl0aHJvdyBuZXcgRXJyb3IoXCJFbmQgb2YgZGF0YSByZWFjaGVkIChkYXRhIGxlbmd0aCA9IFwiK3RoaXMubGVuZ3RoK1wiLCBhc2tlZCBpbmRleCA9IFwiK3QrXCIpLiBDb3JydXB0ZWQgemlwID9cIil9LHNldEluZGV4OmZ1bmN0aW9uKHQpe3RoaXMuY2hlY2tJbmRleCh0KSx0aGlzLmluZGV4PXR9LHNraXA6ZnVuY3Rpb24odCl7dGhpcy5zZXRJbmRleCh0aGlzLmluZGV4K3QpfSxieXRlQXQ6ZnVuY3Rpb24odCl7fSxyZWFkSW50OmZ1bmN0aW9uKHQpe3ZhciBlLHI9MDtmb3IodGhpcy5jaGVja09mZnNldCh0KSxlPXRoaXMuaW5kZXgrdC0xO2U+PXRoaXMuaW5kZXg7ZS0tKXI9KHI8PDgpK3RoaXMuYnl0ZUF0KGUpO3JldHVybiB0aGlzLmluZGV4Kz10LHJ9LHJlYWRTdHJpbmc6ZnVuY3Rpb24odCl7cmV0dXJuIGkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIix0aGlzLnJlYWREYXRhKHQpKX0scmVhZERhdGE6ZnVuY3Rpb24odCl7fSxsYXN0SW5kZXhPZlNpZ25hdHVyZTpmdW5jdGlvbih0KXt9LHJlYWRBbmRDaGVja1NpZ25hdHVyZTpmdW5jdGlvbih0KXt9LHJlYWREYXRlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5yZWFkSW50KDQpO3JldHVybiBuZXcgRGF0ZShEYXRlLlVUQygxOTgwKyh0Pj4yNSYxMjcpLCh0Pj4yMSYxNSktMSx0Pj4xNiYzMSx0Pj4xMSYzMSx0Pj41JjYzLCgzMSZ0KTw8MSkpfX0sZS5leHBvcnRzPW59LHtcIi4uL3V0aWxzXCI6MzJ9XSwxOTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuL1VpbnQ4QXJyYXlSZWFkZXJcIik7ZnVuY3Rpb24gbih0KXtpLmNhbGwodGhpcyx0KX10KFwiLi4vdXRpbHNcIikuaW5oZXJpdHMobixpKSxuLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbih0KXt0aGlzLmNoZWNrT2Zmc2V0KHQpO3ZhciBlPXRoaXMuZGF0YS5zbGljZSh0aGlzLnplcm8rdGhpcy5pbmRleCx0aGlzLnplcm8rdGhpcy5pbmRleCt0KTtyZXR1cm4gdGhpcy5pbmRleCs9dCxlfSxlLmV4cG9ydHM9bn0se1wiLi4vdXRpbHNcIjozMixcIi4vVWludDhBcnJheVJlYWRlclwiOjIxfV0sMjA6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9EYXRhUmVhZGVyXCIpO2Z1bmN0aW9uIG4odCl7aS5jYWxsKHRoaXMsdCl9dChcIi4uL3V0aWxzXCIpLmluaGVyaXRzKG4saSksbi5wcm90b3R5cGUuYnl0ZUF0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmRhdGEuY2hhckNvZGVBdCh0aGlzLnplcm8rdCl9LG4ucHJvdG90eXBlLmxhc3RJbmRleE9mU2lnbmF0dXJlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmRhdGEubGFzdEluZGV4T2YodCktdGhpcy56ZXJvfSxuLnByb3RvdHlwZS5yZWFkQW5kQ2hlY2tTaWduYXR1cmU9ZnVuY3Rpb24odCl7cmV0dXJuIHQ9PT10aGlzLnJlYWREYXRhKDQpfSxuLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbih0KXt0aGlzLmNoZWNrT2Zmc2V0KHQpO3ZhciBlPXRoaXMuZGF0YS5zbGljZSh0aGlzLnplcm8rdGhpcy5pbmRleCx0aGlzLnplcm8rdGhpcy5pbmRleCt0KTtyZXR1cm4gdGhpcy5pbmRleCs9dCxlfSxlLmV4cG9ydHM9bn0se1wiLi4vdXRpbHNcIjozMixcIi4vRGF0YVJlYWRlclwiOjE4fV0sMjE6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9BcnJheVJlYWRlclwiKTtmdW5jdGlvbiBuKHQpe2kuY2FsbCh0aGlzLHQpfXQoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhuLGkpLG4ucHJvdG90eXBlLnJlYWREYXRhPWZ1bmN0aW9uKHQpe2lmKHRoaXMuY2hlY2tPZmZzZXQodCksMD09PXQpcmV0dXJuIG5ldyBVaW50OEFycmF5KDApO3ZhciBlPXRoaXMuZGF0YS5zdWJhcnJheSh0aGlzLnplcm8rdGhpcy5pbmRleCx0aGlzLnplcm8rdGhpcy5pbmRleCt0KTtyZXR1cm4gdGhpcy5pbmRleCs9dCxlfSxlLmV4cG9ydHM9bn0se1wiLi4vdXRpbHNcIjozMixcIi4vQXJyYXlSZWFkZXJcIjoxN31dLDIyOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4uL3V0aWxzXCIpLG49dChcIi4uL3N1cHBvcnRcIikscz10KFwiLi9BcnJheVJlYWRlclwiKSxhPXQoXCIuL1N0cmluZ1JlYWRlclwiKSxvPXQoXCIuL05vZGVCdWZmZXJSZWFkZXJcIiksaD10KFwiLi9VaW50OEFycmF5UmVhZGVyXCIpO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1pLmdldFR5cGVPZih0KTtyZXR1cm4gaS5jaGVja1N1cHBvcnQoZSksXCJzdHJpbmdcIiE9PWV8fG4udWludDhhcnJheT9cIm5vZGVidWZmZXJcIj09PWU/bmV3IG8odCk6bi51aW50OGFycmF5P25ldyBoKGkudHJhbnNmb3JtVG8oXCJ1aW50OGFycmF5XCIsdCkpOm5ldyBzKGkudHJhbnNmb3JtVG8oXCJhcnJheVwiLHQpKTpuZXcgYSh0KX19LHtcIi4uL3N1cHBvcnRcIjozMCxcIi4uL3V0aWxzXCI6MzIsXCIuL0FycmF5UmVhZGVyXCI6MTcsXCIuL05vZGVCdWZmZXJSZWFkZXJcIjoxOSxcIi4vU3RyaW5nUmVhZGVyXCI6MjAsXCIuL1VpbnQ4QXJyYXlSZWFkZXJcIjoyMX1dLDIzOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ci5MT0NBTF9GSUxFX0hFQURFUj1cIlBLXHUwMDAzXHUwMDA0XCIsci5DRU5UUkFMX0ZJTEVfSEVBREVSPVwiUEtcdTAwMDFcdTAwMDJcIixyLkNFTlRSQUxfRElSRUNUT1JZX0VORD1cIlBLXHUwMDA1XHUwMDA2XCIsci5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9MT0NBVE9SPVwiUEtcdTAwMDZcdTAwMDdcIixyLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0VORD1cIlBLXHUwMDA2XHUwMDA2XCIsci5EQVRBX0RFU0NSSVBUT1I9XCJQS1x1MDAwN1xcYlwifSx7fV0sMjQ6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9HZW5lcmljV29ya2VyXCIpLG49dChcIi4uL3V0aWxzXCIpO2Z1bmN0aW9uIHModCl7aS5jYWxsKHRoaXMsXCJDb252ZXJ0V29ya2VyIHRvIFwiK3QpLHRoaXMuZGVzdFR5cGU9dH1uLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKHQpe3RoaXMucHVzaCh7ZGF0YTpuLnRyYW5zZm9ybVRvKHRoaXMuZGVzdFR5cGUsdC5kYXRhKSxtZXRhOnQubWV0YX0pfSxlLmV4cG9ydHM9c30se1wiLi4vdXRpbHNcIjozMixcIi4vR2VuZXJpY1dvcmtlclwiOjI4fV0sMjU6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9HZW5lcmljV29ya2VyXCIpLG49dChcIi4uL2NyYzMyXCIpO2Z1bmN0aW9uIHMoKXtpLmNhbGwodGhpcyxcIkNyYzMyUHJvYmVcIiksdGhpcy53aXRoU3RyZWFtSW5mbyhcImNyYzMyXCIsMCl9dChcIi4uL3V0aWxzXCIpLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKHQpe3RoaXMuc3RyZWFtSW5mby5jcmMzMj1uKHQuZGF0YSx0aGlzLnN0cmVhbUluZm8uY3JjMzJ8fDApLHRoaXMucHVzaCh0KX0sZS5leHBvcnRzPXN9LHtcIi4uL2NyYzMyXCI6NCxcIi4uL3V0aWxzXCI6MzIsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDI2OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4uL3V0aWxzXCIpLG49dChcIi4vR2VuZXJpY1dvcmtlclwiKTtmdW5jdGlvbiBzKHQpe24uY2FsbCh0aGlzLFwiRGF0YUxlbmd0aFByb2JlIGZvciBcIit0KSx0aGlzLnByb3BOYW1lPXQsdGhpcy53aXRoU3RyZWFtSW5mbyh0LDApfWkuaW5oZXJpdHMocyxuKSxzLnByb3RvdHlwZS5wcm9jZXNzQ2h1bms9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9dGhpcy5zdHJlYW1JbmZvW3RoaXMucHJvcE5hbWVdfHwwO3RoaXMuc3RyZWFtSW5mb1t0aGlzLnByb3BOYW1lXT1lK3QuZGF0YS5sZW5ndGh9bi5wcm90b3R5cGUucHJvY2Vzc0NodW5rLmNhbGwodGhpcyx0KX0sZS5leHBvcnRzPXN9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDI3OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4uL3V0aWxzXCIpLG49dChcIi4vR2VuZXJpY1dvcmtlclwiKTtmdW5jdGlvbiBzKHQpe24uY2FsbCh0aGlzLFwiRGF0YVdvcmtlclwiKTt2YXIgZT10aGlzO3RoaXMuZGF0YUlzUmVhZHk9ITEsdGhpcy5pbmRleD0wLHRoaXMubWF4PTAsdGhpcy5kYXRhPW51bGwsdGhpcy50eXBlPVwiXCIsdGhpcy5fdGlja1NjaGVkdWxlZD0hMSx0LnRoZW4oZnVuY3Rpb24odCl7ZS5kYXRhSXNSZWFkeT0hMCxlLmRhdGE9dCxlLm1heD10JiZ0Lmxlbmd0aHx8MCxlLnR5cGU9aS5nZXRUeXBlT2YodCksZS5pc1BhdXNlZHx8ZS5fdGlja0FuZFJlcGVhdCgpfSxmdW5jdGlvbih0KXtlLmVycm9yKHQpfSl9aS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLmNsZWFuVXA9ZnVuY3Rpb24oKXtuLnByb3RvdHlwZS5jbGVhblVwLmNhbGwodGhpcyksdGhpcy5kYXRhPW51bGx9LHMucHJvdG90eXBlLnJlc3VtZT1mdW5jdGlvbigpe3JldHVybiEhbi5wcm90b3R5cGUucmVzdW1lLmNhbGwodGhpcykmJighdGhpcy5fdGlja1NjaGVkdWxlZCYmdGhpcy5kYXRhSXNSZWFkeSYmKHRoaXMuX3RpY2tTY2hlZHVsZWQ9ITAsaS5kZWxheSh0aGlzLl90aWNrQW5kUmVwZWF0LFtdLHRoaXMpKSwhMCl9LHMucHJvdG90eXBlLl90aWNrQW5kUmVwZWF0PWZ1bmN0aW9uKCl7dGhpcy5fdGlja1NjaGVkdWxlZD0hMSx0aGlzLmlzUGF1c2VkfHx0aGlzLmlzRmluaXNoZWR8fCh0aGlzLl90aWNrKCksdGhpcy5pc0ZpbmlzaGVkfHwoaS5kZWxheSh0aGlzLl90aWNrQW5kUmVwZWF0LFtdLHRoaXMpLHRoaXMuX3RpY2tTY2hlZHVsZWQ9ITApKX0scy5wcm90b3R5cGUuX3RpY2s9ZnVuY3Rpb24oKXtpZih0aGlzLmlzUGF1c2VkfHx0aGlzLmlzRmluaXNoZWQpcmV0dXJuITE7dmFyIHQ9bnVsbCxlPU1hdGgubWluKHRoaXMubWF4LHRoaXMuaW5kZXgrMTYzODQpO2lmKHRoaXMuaW5kZXg+PXRoaXMubWF4KXJldHVybiB0aGlzLmVuZCgpO3N3aXRjaCh0aGlzLnR5cGUpe2Nhc2VcInN0cmluZ1wiOnQ9dGhpcy5kYXRhLnN1YnN0cmluZyh0aGlzLmluZGV4LGUpO2JyZWFrO2Nhc2VcInVpbnQ4YXJyYXlcIjp0PXRoaXMuZGF0YS5zdWJhcnJheSh0aGlzLmluZGV4LGUpO2JyZWFrO2Nhc2VcImFycmF5XCI6Y2FzZVwibm9kZWJ1ZmZlclwiOnQ9dGhpcy5kYXRhLnNsaWNlKHRoaXMuaW5kZXgsZSl9cmV0dXJuIHRoaXMuaW5kZXg9ZSx0aGlzLnB1c2goe2RhdGE6dCxtZXRhOntwZXJjZW50OnRoaXMubWF4P3RoaXMuaW5kZXgvdGhpcy5tYXgqMTAwOjB9fSl9LGUuZXhwb3J0cz1zfSx7XCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyODpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkodCl7dGhpcy5uYW1lPXR8fFwiZGVmYXVsdFwiLHRoaXMuc3RyZWFtSW5mbz17fSx0aGlzLmdlbmVyYXRlZEVycm9yPW51bGwsdGhpcy5leHRyYVN0cmVhbUluZm89e30sdGhpcy5pc1BhdXNlZD0hMCx0aGlzLmlzRmluaXNoZWQ9ITEsdGhpcy5pc0xvY2tlZD0hMSx0aGlzLl9saXN0ZW5lcnM9e2RhdGE6W10sZW5kOltdLGVycm9yOltdfSx0aGlzLnByZXZpb3VzPW51bGx9aS5wcm90b3R5cGU9e3B1c2g6ZnVuY3Rpb24odCl7dGhpcy5lbWl0KFwiZGF0YVwiLHQpfSxlbmQ6ZnVuY3Rpb24oKXtpZih0aGlzLmlzRmluaXNoZWQpcmV0dXJuITE7dGhpcy5mbHVzaCgpO3RyeXt0aGlzLmVtaXQoXCJlbmRcIiksdGhpcy5jbGVhblVwKCksdGhpcy5pc0ZpbmlzaGVkPSEwfWNhdGNoKHQpe3RoaXMuZW1pdChcImVycm9yXCIsdCl9cmV0dXJuITB9LGVycm9yOmZ1bmN0aW9uKHQpe3JldHVybiF0aGlzLmlzRmluaXNoZWQmJih0aGlzLmlzUGF1c2VkP3RoaXMuZ2VuZXJhdGVkRXJyb3I9dDoodGhpcy5pc0ZpbmlzaGVkPSEwLHRoaXMuZW1pdChcImVycm9yXCIsdCksdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5lcnJvcih0KSx0aGlzLmNsZWFuVXAoKSksITApfSxvbjpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9saXN0ZW5lcnNbdF0ucHVzaChlKSx0aGlzfSxjbGVhblVwOmZ1bmN0aW9uKCl7dGhpcy5zdHJlYW1JbmZvPXRoaXMuZ2VuZXJhdGVkRXJyb3I9dGhpcy5leHRyYVN0cmVhbUluZm89bnVsbCx0aGlzLl9saXN0ZW5lcnM9W119LGVtaXQ6ZnVuY3Rpb24odCxlKXtpZih0aGlzLl9saXN0ZW5lcnNbdF0pZm9yKHZhciByPTA7cjx0aGlzLl9saXN0ZW5lcnNbdF0ubGVuZ3RoO3IrKyl0aGlzLl9saXN0ZW5lcnNbdF1bcl0uY2FsbCh0aGlzLGUpfSxwaXBlOmZ1bmN0aW9uKHQpe3JldHVybiB0LnJlZ2lzdGVyUHJldmlvdXModGhpcyl9LHJlZ2lzdGVyUHJldmlvdXM6ZnVuY3Rpb24odCl7aWYodGhpcy5pc0xvY2tlZCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3RyZWFtICdcIit0aGlzK1wiJyBoYXMgYWxyZWFkeSBiZWVuIHVzZWQuXCIpO3RoaXMuc3RyZWFtSW5mbz10LnN0cmVhbUluZm8sdGhpcy5tZXJnZVN0cmVhbUluZm8oKSx0aGlzLnByZXZpb3VzPXQ7dmFyIGU9dGhpcztyZXR1cm4gdC5vbihcImRhdGFcIixmdW5jdGlvbih0KXtlLnByb2Nlc3NDaHVuayh0KX0pLHQub24oXCJlbmRcIixmdW5jdGlvbigpe2UuZW5kKCl9KSx0Lm9uKFwiZXJyb3JcIixmdW5jdGlvbih0KXtlLmVycm9yKHQpfSksdGhpc30scGF1c2U6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5pc1BhdXNlZCYmIXRoaXMuaXNGaW5pc2hlZCYmKHRoaXMuaXNQYXVzZWQ9ITAsdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5wYXVzZSgpLCEwKX0scmVzdW1lOmZ1bmN0aW9uKCl7aWYoIXRoaXMuaXNQYXVzZWR8fHRoaXMuaXNGaW5pc2hlZClyZXR1cm4hMTt2YXIgdD10aGlzLmlzUGF1c2VkPSExO3JldHVybiB0aGlzLmdlbmVyYXRlZEVycm9yJiYodGhpcy5lcnJvcih0aGlzLmdlbmVyYXRlZEVycm9yKSx0PSEwKSx0aGlzLnByZXZpb3VzJiZ0aGlzLnByZXZpb3VzLnJlc3VtZSgpLCF0fSxmbHVzaDpmdW5jdGlvbigpe30scHJvY2Vzc0NodW5rOmZ1bmN0aW9uKHQpe3RoaXMucHVzaCh0KX0sd2l0aFN0cmVhbUluZm86ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5leHRyYVN0cmVhbUluZm9bdF09ZSx0aGlzLm1lcmdlU3RyZWFtSW5mbygpLHRoaXN9LG1lcmdlU3RyZWFtSW5mbzpmdW5jdGlvbigpe2Zvcih2YXIgdCBpbiB0aGlzLmV4dHJhU3RyZWFtSW5mbyl0aGlzLmV4dHJhU3RyZWFtSW5mby5oYXNPd25Qcm9wZXJ0eSh0KSYmKHRoaXMuc3RyZWFtSW5mb1t0XT10aGlzLmV4dHJhU3RyZWFtSW5mb1t0XSl9LGxvY2s6ZnVuY3Rpb24oKXtpZih0aGlzLmlzTG9ja2VkKXRocm93IG5ldyBFcnJvcihcIlRoZSBzdHJlYW0gJ1wiK3RoaXMrXCInIGhhcyBhbHJlYWR5IGJlZW4gdXNlZC5cIik7dGhpcy5pc0xvY2tlZD0hMCx0aGlzLnByZXZpb3VzJiZ0aGlzLnByZXZpb3VzLmxvY2soKX0sdG9TdHJpbmc6ZnVuY3Rpb24oKXt2YXIgdD1cIldvcmtlciBcIit0aGlzLm5hbWU7cmV0dXJuIHRoaXMucHJldmlvdXM/dGhpcy5wcmV2aW91cytcIiAtPiBcIit0OnR9fSxlLmV4cG9ydHM9aX0se31dLDI5OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGg9dChcIi4uL3V0aWxzXCIpLG49dChcIi4vQ29udmVydFdvcmtlclwiKSxzPXQoXCIuL0dlbmVyaWNXb3JrZXJcIiksdT10KFwiLi4vYmFzZTY0XCIpLGk9dChcIi4uL3N1cHBvcnRcIiksYT10KFwiLi4vZXh0ZXJuYWxcIiksbz1udWxsO2lmKGkubm9kZXN0cmVhbSl0cnl7bz10KFwiLi4vbm9kZWpzL05vZGVqc1N0cmVhbU91dHB1dEFkYXB0ZXJcIil9Y2F0Y2godCl7fWZ1bmN0aW9uIGwodCxvKXtyZXR1cm4gbmV3IGEuUHJvbWlzZShmdW5jdGlvbihlLHIpe3ZhciBpPVtdLG49dC5faW50ZXJuYWxUeXBlLHM9dC5fb3V0cHV0VHlwZSxhPXQuX21pbWVUeXBlO3Qub24oXCJkYXRhXCIsZnVuY3Rpb24odCxlKXtpLnB1c2godCksbyYmbyhlKX0pLm9uKFwiZXJyb3JcIixmdW5jdGlvbih0KXtpPVtdLHIodCl9KS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7dHJ5e3ZhciB0PWZ1bmN0aW9uKHQsZSxyKXtzd2l0Y2godCl7Y2FzZVwiYmxvYlwiOnJldHVybiBoLm5ld0Jsb2IoaC50cmFuc2Zvcm1UbyhcImFycmF5YnVmZmVyXCIsZSkscik7Y2FzZVwiYmFzZTY0XCI6cmV0dXJuIHUuZW5jb2RlKGUpO2RlZmF1bHQ6cmV0dXJuIGgudHJhbnNmb3JtVG8odCxlKX19KHMsZnVuY3Rpb24odCxlKXt2YXIgcixpPTAsbj1udWxsLHM9MDtmb3Iocj0wO3I8ZS5sZW5ndGg7cisrKXMrPWVbcl0ubGVuZ3RoO3N3aXRjaCh0KXtjYXNlXCJzdHJpbmdcIjpyZXR1cm4gZS5qb2luKFwiXCIpO2Nhc2VcImFycmF5XCI6cmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sZSk7Y2FzZVwidWludDhhcnJheVwiOmZvcihuPW5ldyBVaW50OEFycmF5KHMpLHI9MDtyPGUubGVuZ3RoO3IrKyluLnNldChlW3JdLGkpLGkrPWVbcl0ubGVuZ3RoO3JldHVybiBuO2Nhc2VcIm5vZGVidWZmZXJcIjpyZXR1cm4gQnVmZmVyLmNvbmNhdChlKTtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihcImNvbmNhdCA6IHVuc3VwcG9ydGVkIHR5cGUgJ1wiK3QrXCInXCIpfX0obixpKSxhKTtlKHQpfWNhdGNoKHQpe3IodCl9aT1bXX0pLnJlc3VtZSgpfSl9ZnVuY3Rpb24gZih0LGUscil7dmFyIGk9ZTtzd2l0Y2goZSl7Y2FzZVwiYmxvYlwiOmNhc2VcImFycmF5YnVmZmVyXCI6aT1cInVpbnQ4YXJyYXlcIjticmVhaztjYXNlXCJiYXNlNjRcIjppPVwic3RyaW5nXCJ9dHJ5e3RoaXMuX2ludGVybmFsVHlwZT1pLHRoaXMuX291dHB1dFR5cGU9ZSx0aGlzLl9taW1lVHlwZT1yLGguY2hlY2tTdXBwb3J0KGkpLHRoaXMuX3dvcmtlcj10LnBpcGUobmV3IG4oaSkpLHQubG9jaygpfWNhdGNoKHQpe3RoaXMuX3dvcmtlcj1uZXcgcyhcImVycm9yXCIpLHRoaXMuX3dvcmtlci5lcnJvcih0KX19Zi5wcm90b3R5cGU9e2FjY3VtdWxhdGU6ZnVuY3Rpb24odCl7cmV0dXJuIGwodGhpcyx0KX0sb246ZnVuY3Rpb24odCxlKXt2YXIgcj10aGlzO3JldHVyblwiZGF0YVwiPT09dD90aGlzLl93b3JrZXIub24odCxmdW5jdGlvbih0KXtlLmNhbGwocix0LmRhdGEsdC5tZXRhKX0pOnRoaXMuX3dvcmtlci5vbih0LGZ1bmN0aW9uKCl7aC5kZWxheShlLGFyZ3VtZW50cyxyKX0pLHRoaXN9LHJlc3VtZTpmdW5jdGlvbigpe3JldHVybiBoLmRlbGF5KHRoaXMuX3dvcmtlci5yZXN1bWUsW10sdGhpcy5fd29ya2VyKSx0aGlzfSxwYXVzZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl93b3JrZXIucGF1c2UoKSx0aGlzfSx0b05vZGVqc1N0cmVhbTpmdW5jdGlvbih0KXtpZihoLmNoZWNrU3VwcG9ydChcIm5vZGVzdHJlYW1cIiksXCJub2RlYnVmZmVyXCIhPT10aGlzLl9vdXRwdXRUeXBlKXRocm93IG5ldyBFcnJvcih0aGlzLl9vdXRwdXRUeXBlK1wiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBtZXRob2RcIik7cmV0dXJuIG5ldyBvKHRoaXMse29iamVjdE1vZGU6XCJub2RlYnVmZmVyXCIhPT10aGlzLl9vdXRwdXRUeXBlfSx0KX19LGUuZXhwb3J0cz1mfSx7XCIuLi9iYXNlNjRcIjoxLFwiLi4vZXh0ZXJuYWxcIjo2LFwiLi4vbm9kZWpzL05vZGVqc1N0cmVhbU91dHB1dEFkYXB0ZXJcIjoxMyxcIi4uL3N1cHBvcnRcIjozMCxcIi4uL3V0aWxzXCI6MzIsXCIuL0NvbnZlcnRXb3JrZXJcIjoyNCxcIi4vR2VuZXJpY1dvcmtlclwiOjI4fV0sMzA6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtpZihyLmJhc2U2ND0hMCxyLmFycmF5PSEwLHIuc3RyaW5nPSEwLHIuYXJyYXlidWZmZXI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEFycmF5QnVmZmVyJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSxyLm5vZGVidWZmZXI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEJ1ZmZlcixyLnVpbnQ4YXJyYXk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4QXJyYXksXCJ1bmRlZmluZWRcIj09dHlwZW9mIEFycmF5QnVmZmVyKXIuYmxvYj0hMTtlbHNle3ZhciBpPW5ldyBBcnJheUJ1ZmZlcigwKTt0cnl7ci5ibG9iPTA9PT1uZXcgQmxvYihbaV0se3R5cGU6XCJhcHBsaWNhdGlvbi96aXBcIn0pLnNpemV9Y2F0Y2godCl7dHJ5e3ZhciBuPW5ldyhzZWxmLkJsb2JCdWlsZGVyfHxzZWxmLldlYktpdEJsb2JCdWlsZGVyfHxzZWxmLk1vekJsb2JCdWlsZGVyfHxzZWxmLk1TQmxvYkJ1aWxkZXIpO24uYXBwZW5kKGkpLHIuYmxvYj0wPT09bi5nZXRCbG9iKFwiYXBwbGljYXRpb24vemlwXCIpLnNpemV9Y2F0Y2godCl7ci5ibG9iPSExfX19dHJ5e3Iubm9kZXN0cmVhbT0hIXQoXCJyZWFkYWJsZS1zdHJlYW1cIikuUmVhZGFibGV9Y2F0Y2godCl7ci5ub2Rlc3RyZWFtPSExfX0se1wicmVhZGFibGUtc3RyZWFtXCI6MTZ9XSwzMTpbZnVuY3Rpb24odCxlLHMpe1widXNlIHN0cmljdFwiO2Zvcih2YXIgbz10KFwiLi91dGlsc1wiKSxoPXQoXCIuL3N1cHBvcnRcIikscj10KFwiLi9ub2RlanNVdGlsc1wiKSxpPXQoXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpLHU9bmV3IEFycmF5KDI1Niksbj0wO248MjU2O24rKyl1W25dPTI1Mjw9bj82OjI0ODw9bj81OjI0MDw9bj80OjIyNDw9bj8zOjE5Mjw9bj8yOjE7dVsyNTRdPXVbMjU0XT0xO2Z1bmN0aW9uIGEoKXtpLmNhbGwodGhpcyxcInV0Zi04IGRlY29kZVwiKSx0aGlzLmxlZnRPdmVyPW51bGx9ZnVuY3Rpb24gbCgpe2kuY2FsbCh0aGlzLFwidXRmLTggZW5jb2RlXCIpfXMudXRmOGVuY29kZT1mdW5jdGlvbih0KXtyZXR1cm4gaC5ub2RlYnVmZmVyP3IubmV3QnVmZmVyRnJvbSh0LFwidXRmLThcIik6ZnVuY3Rpb24odCl7dmFyIGUscixpLG4scyxhPXQubGVuZ3RoLG89MDtmb3Iobj0wO248YTtuKyspNTUyOTY9PSg2NDUxMiYocj10LmNoYXJDb2RlQXQobikpKSYmbisxPGEmJjU2MzIwPT0oNjQ1MTImKGk9dC5jaGFyQ29kZUF0KG4rMSkpKSYmKHI9NjU1MzYrKHItNTUyOTY8PDEwKSsoaS01NjMyMCksbisrKSxvKz1yPDEyOD8xOnI8MjA0OD8yOnI8NjU1MzY/Mzo0O2ZvcihlPWgudWludDhhcnJheT9uZXcgVWludDhBcnJheShvKTpuZXcgQXJyYXkobyksbj1zPTA7czxvO24rKyk1NTI5Nj09KDY0NTEyJihyPXQuY2hhckNvZGVBdChuKSkpJiZuKzE8YSYmNTYzMjA9PSg2NDUxMiYoaT10LmNoYXJDb2RlQXQobisxKSkpJiYocj02NTUzNisoci01NTI5Njw8MTApKyhpLTU2MzIwKSxuKyspLHI8MTI4P2VbcysrXT1yOihyPDIwNDg/ZVtzKytdPTE5MnxyPj4+Njoocjw2NTUzNj9lW3MrK109MjI0fHI+Pj4xMjooZVtzKytdPTI0MHxyPj4+MTgsZVtzKytdPTEyOHxyPj4+MTImNjMpLGVbcysrXT0xMjh8cj4+PjYmNjMpLGVbcysrXT0xMjh8NjMmcik7cmV0dXJuIGV9KHQpfSxzLnV0ZjhkZWNvZGU9ZnVuY3Rpb24odCl7cmV0dXJuIGgubm9kZWJ1ZmZlcj9vLnRyYW5zZm9ybVRvKFwibm9kZWJ1ZmZlclwiLHQpLnRvU3RyaW5nKFwidXRmLThcIik6ZnVuY3Rpb24odCl7dmFyIGUscixpLG4scz10Lmxlbmd0aCxhPW5ldyBBcnJheSgyKnMpO2ZvcihlPXI9MDtlPHM7KWlmKChpPXRbZSsrXSk8MTI4KWFbcisrXT1pO2Vsc2UgaWYoNDwobj11W2ldKSlhW3IrK109NjU1MzMsZSs9bi0xO2Vsc2V7Zm9yKGkmPTI9PT1uPzMxOjM9PT1uPzE1Ojc7MTxuJiZlPHM7KWk9aTw8Nnw2MyZ0W2UrK10sbi0tOzE8bj9hW3IrK109NjU1MzM6aTw2NTUzNj9hW3IrK109aTooaS09NjU1MzYsYVtyKytdPTU1Mjk2fGk+PjEwJjEwMjMsYVtyKytdPTU2MzIwfDEwMjMmaSl9cmV0dXJuIGEubGVuZ3RoIT09ciYmKGEuc3ViYXJyYXk/YT1hLnN1YmFycmF5KDAscik6YS5sZW5ndGg9ciksby5hcHBseUZyb21DaGFyQ29kZShhKX0odD1vLnRyYW5zZm9ybVRvKGgudWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCIsdCkpfSxvLmluaGVyaXRzKGEsaSksYS5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKHQpe3ZhciBlPW8udHJhbnNmb3JtVG8oaC51aW50OGFycmF5P1widWludDhhcnJheVwiOlwiYXJyYXlcIix0LmRhdGEpO2lmKHRoaXMubGVmdE92ZXImJnRoaXMubGVmdE92ZXIubGVuZ3RoKXtpZihoLnVpbnQ4YXJyYXkpe3ZhciByPWU7KGU9bmV3IFVpbnQ4QXJyYXkoci5sZW5ndGgrdGhpcy5sZWZ0T3Zlci5sZW5ndGgpKS5zZXQodGhpcy5sZWZ0T3ZlciwwKSxlLnNldChyLHRoaXMubGVmdE92ZXIubGVuZ3RoKX1lbHNlIGU9dGhpcy5sZWZ0T3Zlci5jb25jYXQoZSk7dGhpcy5sZWZ0T3Zlcj1udWxsfXZhciBpPWZ1bmN0aW9uKHQsZSl7dmFyIHI7Zm9yKChlPWV8fHQubGVuZ3RoKT50Lmxlbmd0aCYmKGU9dC5sZW5ndGgpLHI9ZS0xOzA8PXImJjEyOD09KDE5MiZ0W3JdKTspci0tO3JldHVybiByPDA/ZTowPT09cj9lOnIrdVt0W3JdXT5lP3I6ZX0oZSksbj1lO2khPT1lLmxlbmd0aCYmKGgudWludDhhcnJheT8obj1lLnN1YmFycmF5KDAsaSksdGhpcy5sZWZ0T3Zlcj1lLnN1YmFycmF5KGksZS5sZW5ndGgpKToobj1lLnNsaWNlKDAsaSksdGhpcy5sZWZ0T3Zlcj1lLnNsaWNlKGksZS5sZW5ndGgpKSksdGhpcy5wdXNoKHtkYXRhOnMudXRmOGRlY29kZShuKSxtZXRhOnQubWV0YX0pfSxhLnByb3RvdHlwZS5mbHVzaD1mdW5jdGlvbigpe3RoaXMubGVmdE92ZXImJnRoaXMubGVmdE92ZXIubGVuZ3RoJiYodGhpcy5wdXNoKHtkYXRhOnMudXRmOGRlY29kZSh0aGlzLmxlZnRPdmVyKSxtZXRhOnt9fSksdGhpcy5sZWZ0T3Zlcj1udWxsKX0scy5VdGY4RGVjb2RlV29ya2VyPWEsby5pbmhlcml0cyhsLGkpLGwucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbih0KXt0aGlzLnB1c2goe2RhdGE6cy51dGY4ZW5jb2RlKHQuZGF0YSksbWV0YTp0Lm1ldGF9KX0scy5VdGY4RW5jb2RlV29ya2VyPWx9LHtcIi4vbm9kZWpzVXRpbHNcIjoxNCxcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGlsc1wiOjMyfV0sMzI6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjt2YXIgbz10KFwiLi9zdXBwb3J0XCIpLGg9dChcIi4vYmFzZTY0XCIpLHI9dChcIi4vbm9kZWpzVXRpbHNcIiksaT10KFwic2V0LWltbWVkaWF0ZS1zaGltXCIpLHU9dChcIi4vZXh0ZXJuYWxcIik7ZnVuY3Rpb24gbih0KXtyZXR1cm4gdH1mdW5jdGlvbiBsKHQsZSl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDsrK3IpZVtyXT0yNTUmdC5jaGFyQ29kZUF0KHIpO3JldHVybiBlfWEubmV3QmxvYj1mdW5jdGlvbihlLHIpe2EuY2hlY2tTdXBwb3J0KFwiYmxvYlwiKTt0cnl7cmV0dXJuIG5ldyBCbG9iKFtlXSx7dHlwZTpyfSl9Y2F0Y2godCl7dHJ5e3ZhciBpPW5ldyhzZWxmLkJsb2JCdWlsZGVyfHxzZWxmLldlYktpdEJsb2JCdWlsZGVyfHxzZWxmLk1vekJsb2JCdWlsZGVyfHxzZWxmLk1TQmxvYkJ1aWxkZXIpO3JldHVybiBpLmFwcGVuZChlKSxpLmdldEJsb2Iocil9Y2F0Y2godCl7dGhyb3cgbmV3IEVycm9yKFwiQnVnIDogY2FuJ3QgY29uc3RydWN0IHRoZSBCbG9iLlwiKX19fTt2YXIgcz17c3RyaW5naWZ5QnlDaHVuazpmdW5jdGlvbih0LGUscil7dmFyIGk9W10sbj0wLHM9dC5sZW5ndGg7aWYoczw9cilyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHQpO2Zvcig7bjxzOylcImFycmF5XCI9PT1lfHxcIm5vZGVidWZmZXJcIj09PWU/aS5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCx0LnNsaWNlKG4sTWF0aC5taW4obityLHMpKSkpOmkucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsdC5zdWJhcnJheShuLE1hdGgubWluKG4rcixzKSkpKSxuKz1yO3JldHVybiBpLmpvaW4oXCJcIil9LHN0cmluZ2lmeUJ5Q2hhcjpmdW5jdGlvbih0KXtmb3IodmFyIGU9XCJcIixyPTA7cjx0Lmxlbmd0aDtyKyspZSs9U3RyaW5nLmZyb21DaGFyQ29kZSh0W3JdKTtyZXR1cm4gZX0sYXBwbHlDYW5CZVVzZWQ6e3VpbnQ4YXJyYXk6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG8udWludDhhcnJheSYmMT09PVN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxuZXcgVWludDhBcnJheSgxKSkubGVuZ3RofWNhdGNoKHQpe3JldHVybiExfX0oKSxub2RlYnVmZmVyOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiBvLm5vZGVidWZmZXImJjE9PT1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsci5hbGxvY0J1ZmZlcigxKSkubGVuZ3RofWNhdGNoKHQpe3JldHVybiExfX0oKX19O2Z1bmN0aW9uIGYodCl7dmFyIGU9NjU1MzYscj1hLmdldFR5cGVPZih0KSxpPSEwO2lmKFwidWludDhhcnJheVwiPT09cj9pPXMuYXBwbHlDYW5CZVVzZWQudWludDhhcnJheTpcIm5vZGVidWZmZXJcIj09PXImJihpPXMuYXBwbHlDYW5CZVVzZWQubm9kZWJ1ZmZlciksaSlmb3IoOzE8ZTspdHJ5e3JldHVybiBzLnN0cmluZ2lmeUJ5Q2h1bmsodCxyLGUpfWNhdGNoKHQpe2U9TWF0aC5mbG9vcihlLzIpfXJldHVybiBzLnN0cmluZ2lmeUJ5Q2hhcih0KX1mdW5jdGlvbiBkKHQsZSl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspZVtyXT10W3JdO3JldHVybiBlfWEuYXBwbHlGcm9tQ2hhckNvZGU9Zjt2YXIgYz17fTtjLnN0cmluZz17c3RyaW5nOm4sYXJyYXk6ZnVuY3Rpb24odCl7cmV0dXJuIGwodCxuZXcgQXJyYXkodC5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIGMuc3RyaW5nLnVpbnQ4YXJyYXkodCkuYnVmZmVyfSx1aW50OGFycmF5OmZ1bmN0aW9uKHQpe3JldHVybiBsKHQsbmV3IFVpbnQ4QXJyYXkodC5sZW5ndGgpKX0sbm9kZWJ1ZmZlcjpmdW5jdGlvbih0KXtyZXR1cm4gbCh0LHIuYWxsb2NCdWZmZXIodC5sZW5ndGgpKX19LGMuYXJyYXk9e3N0cmluZzpmLGFycmF5Om4sYXJyYXlidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBVaW50OEFycmF5KHQpLmJ1ZmZlcn0sdWludDhhcnJheTpmdW5jdGlvbih0KXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkodCl9LG5vZGVidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIHIubmV3QnVmZmVyRnJvbSh0KX19LGMuYXJyYXlidWZmZXI9e3N0cmluZzpmdW5jdGlvbih0KXtyZXR1cm4gZihuZXcgVWludDhBcnJheSh0KSl9LGFycmF5OmZ1bmN0aW9uKHQpe3JldHVybiBkKG5ldyBVaW50OEFycmF5KHQpLG5ldyBBcnJheSh0LmJ5dGVMZW5ndGgpKX0sYXJyYXlidWZmZXI6bix1aW50OGFycmF5OmZ1bmN0aW9uKHQpe3JldHVybiBuZXcgVWludDhBcnJheSh0KX0sbm9kZWJ1ZmZlcjpmdW5jdGlvbih0KXtyZXR1cm4gci5uZXdCdWZmZXJGcm9tKG5ldyBVaW50OEFycmF5KHQpKX19LGMudWludDhhcnJheT17c3RyaW5nOmYsYXJyYXk6ZnVuY3Rpb24odCl7cmV0dXJuIGQodCxuZXcgQXJyYXkodC5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIHQuYnVmZmVyfSx1aW50OGFycmF5Om4sbm9kZWJ1ZmZlcjpmdW5jdGlvbih0KXtyZXR1cm4gci5uZXdCdWZmZXJGcm9tKHQpfX0sYy5ub2RlYnVmZmVyPXtzdHJpbmc6ZixhcnJheTpmdW5jdGlvbih0KXtyZXR1cm4gZCh0LG5ldyBBcnJheSh0Lmxlbmd0aCkpfSxhcnJheWJ1ZmZlcjpmdW5jdGlvbih0KXtyZXR1cm4gYy5ub2RlYnVmZmVyLnVpbnQ4YXJyYXkodCkuYnVmZmVyfSx1aW50OGFycmF5OmZ1bmN0aW9uKHQpe3JldHVybiBkKHQsbmV3IFVpbnQ4QXJyYXkodC5sZW5ndGgpKX0sbm9kZWJ1ZmZlcjpufSxhLnRyYW5zZm9ybVRvPWZ1bmN0aW9uKHQsZSl7aWYoZT1lfHxcIlwiLCF0KXJldHVybiBlO2EuY2hlY2tTdXBwb3J0KHQpO3ZhciByPWEuZ2V0VHlwZU9mKGUpO3JldHVybiBjW3JdW3RdKGUpfSxhLmdldFR5cGVPZj1mdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD9cInN0cmluZ1wiOlwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KT9cImFycmF5XCI6by5ub2RlYnVmZmVyJiZyLmlzQnVmZmVyKHQpP1wibm9kZWJ1ZmZlclwiOm8udWludDhhcnJheSYmdCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXk/XCJ1aW50OGFycmF5XCI6by5hcnJheWJ1ZmZlciYmdCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyP1wiYXJyYXlidWZmZXJcIjp2b2lkIDB9LGEuY2hlY2tTdXBwb3J0PWZ1bmN0aW9uKHQpe2lmKCFvW3QudG9Mb3dlckNhc2UoKV0pdGhyb3cgbmV3IEVycm9yKHQrXCIgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIHBsYXRmb3JtXCIpfSxhLk1BWF9WQUxVRV8xNkJJVFM9NjU1MzUsYS5NQVhfVkFMVUVfMzJCSVRTPS0xLGEucHJldHR5PWZ1bmN0aW9uKHQpe3ZhciBlLHIsaT1cIlwiO2ZvcihyPTA7cjwodHx8XCJcIikubGVuZ3RoO3IrKylpKz1cIlxcXFx4XCIrKChlPXQuY2hhckNvZGVBdChyKSk8MTY/XCIwXCI6XCJcIikrZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtyZXR1cm4gaX0sYS5kZWxheT1mdW5jdGlvbih0LGUscil7aShmdW5jdGlvbigpe3QuYXBwbHkocnx8bnVsbCxlfHxbXSl9KX0sYS5pbmhlcml0cz1mdW5jdGlvbih0LGUpe2Z1bmN0aW9uIHIoKXt9ci5wcm90b3R5cGU9ZS5wcm90b3R5cGUsdC5wcm90b3R5cGU9bmV3IHJ9LGEuZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIHQsZSxyPXt9O2Zvcih0PTA7dDxhcmd1bWVudHMubGVuZ3RoO3QrKylmb3IoZSBpbiBhcmd1bWVudHNbdF0pYXJndW1lbnRzW3RdLmhhc093blByb3BlcnR5KGUpJiZ2b2lkIDA9PT1yW2VdJiYocltlXT1hcmd1bWVudHNbdF1bZV0pO3JldHVybiByfSxhLnByZXBhcmVDb250ZW50PWZ1bmN0aW9uKHIsdCxpLG4scyl7cmV0dXJuIHUuUHJvbWlzZS5yZXNvbHZlKHQpLnRoZW4oZnVuY3Rpb24oaSl7cmV0dXJuIG8uYmxvYiYmKGkgaW5zdGFuY2VvZiBCbG9ifHwtMSE9PVtcIltvYmplY3QgRmlsZV1cIixcIltvYmplY3QgQmxvYl1cIl0uaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaSkpKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXI/bmV3IHUuUHJvbWlzZShmdW5jdGlvbihlLHIpe3ZhciB0PW5ldyBGaWxlUmVhZGVyO3Qub25sb2FkPWZ1bmN0aW9uKHQpe2UodC50YXJnZXQucmVzdWx0KX0sdC5vbmVycm9yPWZ1bmN0aW9uKHQpe3IodC50YXJnZXQuZXJyb3IpfSx0LnJlYWRBc0FycmF5QnVmZmVyKGkpfSk6aX0pLnRoZW4oZnVuY3Rpb24odCl7dmFyIGU9YS5nZXRUeXBlT2YodCk7cmV0dXJuIGU/KFwiYXJyYXlidWZmZXJcIj09PWU/dD1hLnRyYW5zZm9ybVRvKFwidWludDhhcnJheVwiLHQpOlwic3RyaW5nXCI9PT1lJiYocz90PWguZGVjb2RlKHQpOmkmJiEwIT09biYmKHQ9ZnVuY3Rpb24odCl7cmV0dXJuIGwodCxvLnVpbnQ4YXJyYXk/bmV3IFVpbnQ4QXJyYXkodC5sZW5ndGgpOm5ldyBBcnJheSh0Lmxlbmd0aCkpfSh0KSkpLHQpOnUuUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2FuJ3QgcmVhZCB0aGUgZGF0YSBvZiAnXCIrcitcIicuIElzIGl0IGluIGEgc3VwcG9ydGVkIEphdmFTY3JpcHQgdHlwZSAoU3RyaW5nLCBCbG9iLCBBcnJheUJ1ZmZlciwgZXRjKSA/XCIpKX0pfX0se1wiLi9iYXNlNjRcIjoxLFwiLi9leHRlcm5hbFwiOjYsXCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N1cHBvcnRcIjozMCxcInNldC1pbW1lZGlhdGUtc2hpbVwiOjU0fV0sMzM6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9yZWFkZXIvcmVhZGVyRm9yXCIpLG49dChcIi4vdXRpbHNcIikscz10KFwiLi9zaWduYXR1cmVcIiksYT10KFwiLi96aXBFbnRyeVwiKSxvPSh0KFwiLi91dGY4XCIpLHQoXCIuL3N1cHBvcnRcIikpO2Z1bmN0aW9uIGgodCl7dGhpcy5maWxlcz1bXSx0aGlzLmxvYWRPcHRpb25zPXR9aC5wcm90b3R5cGU9e2NoZWNrU2lnbmF0dXJlOmZ1bmN0aW9uKHQpe2lmKCF0aGlzLnJlYWRlci5yZWFkQW5kQ2hlY2tTaWduYXR1cmUodCkpe3RoaXMucmVhZGVyLmluZGV4LT00O3ZhciBlPXRoaXMucmVhZGVyLnJlYWRTdHJpbmcoNCk7dGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCBvciBidWc6IHVuZXhwZWN0ZWQgc2lnbmF0dXJlIChcIituLnByZXR0eShlKStcIiwgZXhwZWN0ZWQgXCIrbi5wcmV0dHkodCkrXCIpXCIpfX0saXNTaWduYXR1cmU6ZnVuY3Rpb24odCxlKXt2YXIgcj10aGlzLnJlYWRlci5pbmRleDt0aGlzLnJlYWRlci5zZXRJbmRleCh0KTt2YXIgaT10aGlzLnJlYWRlci5yZWFkU3RyaW5nKDQpPT09ZTtyZXR1cm4gdGhpcy5yZWFkZXIuc2V0SW5kZXgociksaX0scmVhZEJsb2NrRW5kT2ZDZW50cmFsOmZ1bmN0aW9uKCl7dGhpcy5kaXNrTnVtYmVyPXRoaXMucmVhZGVyLnJlYWRJbnQoMiksdGhpcy5kaXNrV2l0aENlbnRyYWxEaXJTdGFydD10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuY2VudHJhbERpclJlY29yZHNPblRoaXNEaXNrPXRoaXMucmVhZGVyLnJlYWRJbnQoMiksdGhpcy5jZW50cmFsRGlyUmVjb3Jkcz10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuY2VudHJhbERpclNpemU9dGhpcy5yZWFkZXIucmVhZEludCg0KSx0aGlzLmNlbnRyYWxEaXJPZmZzZXQ9dGhpcy5yZWFkZXIucmVhZEludCg0KSx0aGlzLnppcENvbW1lbnRMZW5ndGg9dGhpcy5yZWFkZXIucmVhZEludCgyKTt2YXIgdD10aGlzLnJlYWRlci5yZWFkRGF0YSh0aGlzLnppcENvbW1lbnRMZW5ndGgpLGU9by51aW50OGFycmF5P1widWludDhhcnJheVwiOlwiYXJyYXlcIixyPW4udHJhbnNmb3JtVG8oZSx0KTt0aGlzLnppcENvbW1lbnQ9dGhpcy5sb2FkT3B0aW9ucy5kZWNvZGVGaWxlTmFtZShyKX0scmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWw6ZnVuY3Rpb24oKXt0aGlzLnppcDY0RW5kT2ZDZW50cmFsU2l6ZT10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMucmVhZGVyLnNraXAoNCksdGhpcy5kaXNrTnVtYmVyPXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy5kaXNrV2l0aENlbnRyYWxEaXJTdGFydD10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMuY2VudHJhbERpclJlY29yZHNPblRoaXNEaXNrPXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy5jZW50cmFsRGlyUmVjb3Jkcz10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuY2VudHJhbERpclNpemU9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLmNlbnRyYWxEaXJPZmZzZXQ9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLnppcDY0RXh0ZW5zaWJsZURhdGE9e307Zm9yKHZhciB0LGUscixpPXRoaXMuemlwNjRFbmRPZkNlbnRyYWxTaXplLTQ0OzA8aTspdD10aGlzLnJlYWRlci5yZWFkSW50KDIpLGU9dGhpcy5yZWFkZXIucmVhZEludCg0KSxyPXRoaXMucmVhZGVyLnJlYWREYXRhKGUpLHRoaXMuemlwNjRFeHRlbnNpYmxlRGF0YVt0XT17aWQ6dCxsZW5ndGg6ZSx2YWx1ZTpyfX0scmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWxMb2NhdG9yOmZ1bmN0aW9uKCl7aWYodGhpcy5kaXNrV2l0aFppcDY0Q2VudHJhbERpclN0YXJ0PXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyPXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy5kaXNrc0NvdW50PXRoaXMucmVhZGVyLnJlYWRJbnQoNCksMTx0aGlzLmRpc2tzQ291bnQpdGhyb3cgbmV3IEVycm9yKFwiTXVsdGktdm9sdW1lcyB6aXAgYXJlIG5vdCBzdXBwb3J0ZWRcIil9LHJlYWRMb2NhbEZpbGVzOmZ1bmN0aW9uKCl7dmFyIHQsZTtmb3IodD0wO3Q8dGhpcy5maWxlcy5sZW5ndGg7dCsrKWU9dGhpcy5maWxlc1t0XSx0aGlzLnJlYWRlci5zZXRJbmRleChlLmxvY2FsSGVhZGVyT2Zmc2V0KSx0aGlzLmNoZWNrU2lnbmF0dXJlKHMuTE9DQUxfRklMRV9IRUFERVIpLGUucmVhZExvY2FsUGFydCh0aGlzLnJlYWRlciksZS5oYW5kbGVVVEY4KCksZS5wcm9jZXNzQXR0cmlidXRlcygpfSxyZWFkQ2VudHJhbERpcjpmdW5jdGlvbigpe3ZhciB0O2Zvcih0aGlzLnJlYWRlci5zZXRJbmRleCh0aGlzLmNlbnRyYWxEaXJPZmZzZXQpO3RoaXMucmVhZGVyLnJlYWRBbmRDaGVja1NpZ25hdHVyZShzLkNFTlRSQUxfRklMRV9IRUFERVIpOykodD1uZXcgYSh7emlwNjQ6dGhpcy56aXA2NH0sdGhpcy5sb2FkT3B0aW9ucykpLnJlYWRDZW50cmFsUGFydCh0aGlzLnJlYWRlciksdGhpcy5maWxlcy5wdXNoKHQpO2lmKHRoaXMuY2VudHJhbERpclJlY29yZHMhPT10aGlzLmZpbGVzLmxlbmd0aCYmMCE9PXRoaXMuY2VudHJhbERpclJlY29yZHMmJjA9PT10aGlzLmZpbGVzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwIG9yIGJ1ZzogZXhwZWN0ZWQgXCIrdGhpcy5jZW50cmFsRGlyUmVjb3JkcytcIiByZWNvcmRzIGluIGNlbnRyYWwgZGlyLCBnb3QgXCIrdGhpcy5maWxlcy5sZW5ndGgpfSxyZWFkRW5kT2ZDZW50cmFsOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5yZWFkZXIubGFzdEluZGV4T2ZTaWduYXR1cmUocy5DRU5UUkFMX0RJUkVDVE9SWV9FTkQpO2lmKHQ8MCl0aHJvdyF0aGlzLmlzU2lnbmF0dXJlKDAscy5MT0NBTF9GSUxFX0hFQURFUik/bmV3IEVycm9yKFwiQ2FuJ3QgZmluZCBlbmQgb2YgY2VudHJhbCBkaXJlY3RvcnkgOiBpcyB0aGlzIGEgemlwIGZpbGUgPyBJZiBpdCBpcywgc2VlIGh0dHBzOi8vc3R1ay5naXRodWIuaW8vanN6aXAvZG9jdW1lbnRhdGlvbi9ob3d0by9yZWFkX3ppcC5odG1sXCIpOm5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IGNhbid0IGZpbmQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5XCIpO3RoaXMucmVhZGVyLnNldEluZGV4KHQpO3ZhciBlPXQ7aWYodGhpcy5jaGVja1NpZ25hdHVyZShzLkNFTlRSQUxfRElSRUNUT1JZX0VORCksdGhpcy5yZWFkQmxvY2tFbmRPZkNlbnRyYWwoKSx0aGlzLmRpc2tOdW1iZXI9PT1uLk1BWF9WQUxVRV8xNkJJVFN8fHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9PT1uLk1BWF9WQUxVRV8xNkJJVFN8fHRoaXMuY2VudHJhbERpclJlY29yZHNPblRoaXNEaXNrPT09bi5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzPT09bi5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmNlbnRyYWxEaXJTaXplPT09bi5NQVhfVkFMVUVfMzJCSVRTfHx0aGlzLmNlbnRyYWxEaXJPZmZzZXQ9PT1uLk1BWF9WQUxVRV8zMkJJVFMpe2lmKHRoaXMuemlwNjQ9ITAsKHQ9dGhpcy5yZWFkZXIubGFzdEluZGV4T2ZTaWduYXR1cmUocy5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9MT0NBVE9SKSk8MCl0aHJvdyBuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwOiBjYW4ndCBmaW5kIHRoZSBaSVA2NCBlbmQgb2YgY2VudHJhbCBkaXJlY3RvcnkgbG9jYXRvclwiKTtpZih0aGlzLnJlYWRlci5zZXRJbmRleCh0KSx0aGlzLmNoZWNrU2lnbmF0dXJlKHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUiksdGhpcy5yZWFkQmxvY2taaXA2NEVuZE9mQ2VudHJhbExvY2F0b3IoKSwhdGhpcy5pc1NpZ25hdHVyZSh0aGlzLnJlbGF0aXZlT2Zmc2V0RW5kT2ZaaXA2NENlbnRyYWxEaXIscy5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQpJiYodGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyPXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKSx0aGlzLnJlbGF0aXZlT2Zmc2V0RW5kT2ZaaXA2NENlbnRyYWxEaXI8MCkpdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcDogY2FuJ3QgZmluZCB0aGUgWklQNjQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5XCIpO3RoaXMucmVhZGVyLnNldEluZGV4KHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpciksdGhpcy5jaGVja1NpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0VORCksdGhpcy5yZWFkQmxvY2taaXA2NEVuZE9mQ2VudHJhbCgpfXZhciByPXRoaXMuY2VudHJhbERpck9mZnNldCt0aGlzLmNlbnRyYWxEaXJTaXplO3RoaXMuemlwNjQmJihyKz0yMCxyKz0xMit0aGlzLnppcDY0RW5kT2ZDZW50cmFsU2l6ZSk7dmFyIGk9ZS1yO2lmKDA8aSl0aGlzLmlzU2lnbmF0dXJlKGUscy5DRU5UUkFMX0ZJTEVfSEVBREVSKXx8KHRoaXMucmVhZGVyLnplcm89aSk7ZWxzZSBpZihpPDApdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcDogbWlzc2luZyBcIitNYXRoLmFicyhpKStcIiBieXRlcy5cIil9LHByZXBhcmVSZWFkZXI6ZnVuY3Rpb24odCl7dGhpcy5yZWFkZXI9aSh0KX0sbG9hZDpmdW5jdGlvbih0KXt0aGlzLnByZXBhcmVSZWFkZXIodCksdGhpcy5yZWFkRW5kT2ZDZW50cmFsKCksdGhpcy5yZWFkQ2VudHJhbERpcigpLHRoaXMucmVhZExvY2FsRmlsZXMoKX19LGUuZXhwb3J0cz1ofSx7XCIuL3JlYWRlci9yZWFkZXJGb3JcIjoyMixcIi4vc2lnbmF0dXJlXCI6MjMsXCIuL3N1cHBvcnRcIjozMCxcIi4vdXRmOFwiOjMxLFwiLi91dGlsc1wiOjMyLFwiLi96aXBFbnRyeVwiOjM0fV0sMzQ6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9yZWFkZXIvcmVhZGVyRm9yXCIpLHM9dChcIi4vdXRpbHNcIiksbj10KFwiLi9jb21wcmVzc2VkT2JqZWN0XCIpLGE9dChcIi4vY3JjMzJcIiksbz10KFwiLi91dGY4XCIpLGg9dChcIi4vY29tcHJlc3Npb25zXCIpLHU9dChcIi4vc3VwcG9ydFwiKTtmdW5jdGlvbiBsKHQsZSl7dGhpcy5vcHRpb25zPXQsdGhpcy5sb2FkT3B0aW9ucz1lfWwucHJvdG90eXBlPXtpc0VuY3J5cHRlZDpmdW5jdGlvbigpe3JldHVybiAxPT0oMSZ0aGlzLmJpdEZsYWcpfSx1c2VVVEY4OmZ1bmN0aW9uKCl7cmV0dXJuIDIwNDg9PSgyMDQ4JnRoaXMuYml0RmxhZyl9LHJlYWRMb2NhbFBhcnQ6ZnVuY3Rpb24odCl7dmFyIGUscjtpZih0LnNraXAoMjIpLHRoaXMuZmlsZU5hbWVMZW5ndGg9dC5yZWFkSW50KDIpLHI9dC5yZWFkSW50KDIpLHRoaXMuZmlsZU5hbWU9dC5yZWFkRGF0YSh0aGlzLmZpbGVOYW1lTGVuZ3RoKSx0LnNraXAociksLTE9PT10aGlzLmNvbXByZXNzZWRTaXplfHwtMT09PXRoaXMudW5jb21wcmVzc2VkU2l6ZSl0aHJvdyBuZXcgRXJyb3IoXCJCdWcgb3IgY29ycnVwdGVkIHppcCA6IGRpZG4ndCBnZXQgZW5vdWdoIGluZm9ybWF0aW9uIGZyb20gdGhlIGNlbnRyYWwgZGlyZWN0b3J5IChjb21wcmVzc2VkU2l6ZSA9PT0gLTEgfHwgdW5jb21wcmVzc2VkU2l6ZSA9PT0gLTEpXCIpO2lmKG51bGw9PT0oZT1mdW5jdGlvbih0KXtmb3IodmFyIGUgaW4gaClpZihoLmhhc093blByb3BlcnR5KGUpJiZoW2VdLm1hZ2ljPT09dClyZXR1cm4gaFtlXTtyZXR1cm4gbnVsbH0odGhpcy5jb21wcmVzc2lvbk1ldGhvZCkpKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXAgOiBjb21wcmVzc2lvbiBcIitzLnByZXR0eSh0aGlzLmNvbXByZXNzaW9uTWV0aG9kKStcIiB1bmtub3duIChpbm5lciBmaWxlIDogXCIrcy50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHRoaXMuZmlsZU5hbWUpK1wiKVwiKTt0aGlzLmRlY29tcHJlc3NlZD1uZXcgbih0aGlzLmNvbXByZXNzZWRTaXplLHRoaXMudW5jb21wcmVzc2VkU2l6ZSx0aGlzLmNyYzMyLGUsdC5yZWFkRGF0YSh0aGlzLmNvbXByZXNzZWRTaXplKSl9LHJlYWRDZW50cmFsUGFydDpmdW5jdGlvbih0KXt0aGlzLnZlcnNpb25NYWRlQnk9dC5yZWFkSW50KDIpLHQuc2tpcCgyKSx0aGlzLmJpdEZsYWc9dC5yZWFkSW50KDIpLHRoaXMuY29tcHJlc3Npb25NZXRob2Q9dC5yZWFkU3RyaW5nKDIpLHRoaXMuZGF0ZT10LnJlYWREYXRlKCksdGhpcy5jcmMzMj10LnJlYWRJbnQoNCksdGhpcy5jb21wcmVzc2VkU2l6ZT10LnJlYWRJbnQoNCksdGhpcy51bmNvbXByZXNzZWRTaXplPXQucmVhZEludCg0KTt2YXIgZT10LnJlYWRJbnQoMik7aWYodGhpcy5leHRyYUZpZWxkc0xlbmd0aD10LnJlYWRJbnQoMiksdGhpcy5maWxlQ29tbWVudExlbmd0aD10LnJlYWRJbnQoMiksdGhpcy5kaXNrTnVtYmVyU3RhcnQ9dC5yZWFkSW50KDIpLHRoaXMuaW50ZXJuYWxGaWxlQXR0cmlidXRlcz10LnJlYWRJbnQoMiksdGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzPXQucmVhZEludCg0KSx0aGlzLmxvY2FsSGVhZGVyT2Zmc2V0PXQucmVhZEludCg0KSx0aGlzLmlzRW5jcnlwdGVkKCkpdGhyb3cgbmV3IEVycm9yKFwiRW5jcnlwdGVkIHppcCBhcmUgbm90IHN1cHBvcnRlZFwiKTt0LnNraXAoZSksdGhpcy5yZWFkRXh0cmFGaWVsZHModCksdGhpcy5wYXJzZVpJUDY0RXh0cmFGaWVsZCh0KSx0aGlzLmZpbGVDb21tZW50PXQucmVhZERhdGEodGhpcy5maWxlQ29tbWVudExlbmd0aCl9LHByb2Nlc3NBdHRyaWJ1dGVzOmZ1bmN0aW9uKCl7dGhpcy51bml4UGVybWlzc2lvbnM9bnVsbCx0aGlzLmRvc1Blcm1pc3Npb25zPW51bGw7dmFyIHQ9dGhpcy52ZXJzaW9uTWFkZUJ5Pj44O3RoaXMuZGlyPSEhKDE2JnRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcyksMD09dCYmKHRoaXMuZG9zUGVybWlzc2lvbnM9NjMmdGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzKSwzPT10JiYodGhpcy51bml4UGVybWlzc2lvbnM9dGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzPj4xNiY2NTUzNSksdGhpcy5kaXJ8fFwiL1wiIT09dGhpcy5maWxlTmFtZVN0ci5zbGljZSgtMSl8fCh0aGlzLmRpcj0hMCl9LHBhcnNlWklQNjRFeHRyYUZpZWxkOmZ1bmN0aW9uKHQpe2lmKHRoaXMuZXh0cmFGaWVsZHNbMV0pe3ZhciBlPWkodGhpcy5leHRyYUZpZWxkc1sxXS52YWx1ZSk7dGhpcy51bmNvbXByZXNzZWRTaXplPT09cy5NQVhfVkFMVUVfMzJCSVRTJiYodGhpcy51bmNvbXByZXNzZWRTaXplPWUucmVhZEludCg4KSksdGhpcy5jb21wcmVzc2VkU2l6ZT09PXMuTUFYX1ZBTFVFXzMyQklUUyYmKHRoaXMuY29tcHJlc3NlZFNpemU9ZS5yZWFkSW50KDgpKSx0aGlzLmxvY2FsSGVhZGVyT2Zmc2V0PT09cy5NQVhfVkFMVUVfMzJCSVRTJiYodGhpcy5sb2NhbEhlYWRlck9mZnNldD1lLnJlYWRJbnQoOCkpLHRoaXMuZGlza051bWJlclN0YXJ0PT09cy5NQVhfVkFMVUVfMzJCSVRTJiYodGhpcy5kaXNrTnVtYmVyU3RhcnQ9ZS5yZWFkSW50KDQpKX19LHJlYWRFeHRyYUZpZWxkczpmdW5jdGlvbih0KXt2YXIgZSxyLGksbj10LmluZGV4K3RoaXMuZXh0cmFGaWVsZHNMZW5ndGg7Zm9yKHRoaXMuZXh0cmFGaWVsZHN8fCh0aGlzLmV4dHJhRmllbGRzPXt9KTt0LmluZGV4KzQ8bjspZT10LnJlYWRJbnQoMikscj10LnJlYWRJbnQoMiksaT10LnJlYWREYXRhKHIpLHRoaXMuZXh0cmFGaWVsZHNbZV09e2lkOmUsbGVuZ3RoOnIsdmFsdWU6aX07dC5zZXRJbmRleChuKX0saGFuZGxlVVRGODpmdW5jdGlvbigpe3ZhciB0PXUudWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCI7aWYodGhpcy51c2VVVEY4KCkpdGhpcy5maWxlTmFtZVN0cj1vLnV0ZjhkZWNvZGUodGhpcy5maWxlTmFtZSksdGhpcy5maWxlQ29tbWVudFN0cj1vLnV0ZjhkZWNvZGUodGhpcy5maWxlQ29tbWVudCk7ZWxzZXt2YXIgZT10aGlzLmZpbmRFeHRyYUZpZWxkVW5pY29kZVBhdGgoKTtpZihudWxsIT09ZSl0aGlzLmZpbGVOYW1lU3RyPWU7ZWxzZXt2YXIgcj1zLnRyYW5zZm9ybVRvKHQsdGhpcy5maWxlTmFtZSk7dGhpcy5maWxlTmFtZVN0cj10aGlzLmxvYWRPcHRpb25zLmRlY29kZUZpbGVOYW1lKHIpfXZhciBpPXRoaXMuZmluZEV4dHJhRmllbGRVbmljb2RlQ29tbWVudCgpO2lmKG51bGwhPT1pKXRoaXMuZmlsZUNvbW1lbnRTdHI9aTtlbHNle3ZhciBuPXMudHJhbnNmb3JtVG8odCx0aGlzLmZpbGVDb21tZW50KTt0aGlzLmZpbGVDb21tZW50U3RyPXRoaXMubG9hZE9wdGlvbnMuZGVjb2RlRmlsZU5hbWUobil9fX0sZmluZEV4dHJhRmllbGRVbmljb2RlUGF0aDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuZXh0cmFGaWVsZHNbMjg3ODldO2lmKHQpe3ZhciBlPWkodC52YWx1ZSk7cmV0dXJuIDEhPT1lLnJlYWRJbnQoMSk/bnVsbDphKHRoaXMuZmlsZU5hbWUpIT09ZS5yZWFkSW50KDQpP251bGw6by51dGY4ZGVjb2RlKGUucmVhZERhdGEodC5sZW5ndGgtNSkpfXJldHVybiBudWxsfSxmaW5kRXh0cmFGaWVsZFVuaWNvZGVDb21tZW50OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5leHRyYUZpZWxkc1syNTQ2MV07aWYodCl7dmFyIGU9aSh0LnZhbHVlKTtyZXR1cm4gMSE9PWUucmVhZEludCgxKT9udWxsOmEodGhpcy5maWxlQ29tbWVudCkhPT1lLnJlYWRJbnQoNCk/bnVsbDpvLnV0ZjhkZWNvZGUoZS5yZWFkRGF0YSh0Lmxlbmd0aC01KSl9cmV0dXJuIG51bGx9fSxlLmV4cG9ydHM9bH0se1wiLi9jb21wcmVzc2VkT2JqZWN0XCI6MixcIi4vY29tcHJlc3Npb25zXCI6MyxcIi4vY3JjMzJcIjo0LFwiLi9yZWFkZXIvcmVhZGVyRm9yXCI6MjIsXCIuL3N1cHBvcnRcIjozMCxcIi4vdXRmOFwiOjMxLFwiLi91dGlsc1wiOjMyfV0sMzU6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKHQsZSxyKXt0aGlzLm5hbWU9dCx0aGlzLmRpcj1yLmRpcix0aGlzLmRhdGU9ci5kYXRlLHRoaXMuY29tbWVudD1yLmNvbW1lbnQsdGhpcy51bml4UGVybWlzc2lvbnM9ci51bml4UGVybWlzc2lvbnMsdGhpcy5kb3NQZXJtaXNzaW9ucz1yLmRvc1Blcm1pc3Npb25zLHRoaXMuX2RhdGE9ZSx0aGlzLl9kYXRhQmluYXJ5PXIuYmluYXJ5LHRoaXMub3B0aW9ucz17Y29tcHJlc3Npb246ci5jb21wcmVzc2lvbixjb21wcmVzc2lvbk9wdGlvbnM6ci5jb21wcmVzc2lvbk9wdGlvbnN9fXZhciBzPXQoXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIiksbj10KFwiLi9zdHJlYW0vRGF0YVdvcmtlclwiKSxhPXQoXCIuL3V0ZjhcIiksbz10KFwiLi9jb21wcmVzc2VkT2JqZWN0XCIpLGg9dChcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIik7aS5wcm90b3R5cGU9e2ludGVybmFsU3RyZWFtOmZ1bmN0aW9uKHQpe3ZhciBlPW51bGwscj1cInN0cmluZ1wiO3RyeXtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJObyBvdXRwdXQgdHlwZSBzcGVjaWZpZWQuXCIpO3ZhciBpPVwic3RyaW5nXCI9PT0ocj10LnRvTG93ZXJDYXNlKCkpfHxcInRleHRcIj09PXI7XCJiaW5hcnlzdHJpbmdcIiE9PXImJlwidGV4dFwiIT09cnx8KHI9XCJzdHJpbmdcIiksZT10aGlzLl9kZWNvbXByZXNzV29ya2VyKCk7dmFyIG49IXRoaXMuX2RhdGFCaW5hcnk7biYmIWkmJihlPWUucGlwZShuZXcgYS5VdGY4RW5jb2RlV29ya2VyKSksIW4mJmkmJihlPWUucGlwZShuZXcgYS5VdGY4RGVjb2RlV29ya2VyKSl9Y2F0Y2godCl7KGU9bmV3IGgoXCJlcnJvclwiKSkuZXJyb3IodCl9cmV0dXJuIG5ldyBzKGUscixcIlwiKX0sYXN5bmM6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5pbnRlcm5hbFN0cmVhbSh0KS5hY2N1bXVsYXRlKGUpfSxub2RlU3RyZWFtOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuaW50ZXJuYWxTdHJlYW0odHx8XCJub2RlYnVmZmVyXCIpLnRvTm9kZWpzU3RyZWFtKGUpfSxfY29tcHJlc3NXb3JrZXI6ZnVuY3Rpb24odCxlKXtpZih0aGlzLl9kYXRhIGluc3RhbmNlb2YgbyYmdGhpcy5fZGF0YS5jb21wcmVzc2lvbi5tYWdpYz09PXQubWFnaWMpcmV0dXJuIHRoaXMuX2RhdGEuZ2V0Q29tcHJlc3NlZFdvcmtlcigpO3ZhciByPXRoaXMuX2RlY29tcHJlc3NXb3JrZXIoKTtyZXR1cm4gdGhpcy5fZGF0YUJpbmFyeXx8KHI9ci5waXBlKG5ldyBhLlV0ZjhFbmNvZGVXb3JrZXIpKSxvLmNyZWF0ZVdvcmtlckZyb20ocix0LGUpfSxfZGVjb21wcmVzc1dvcmtlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9kYXRhIGluc3RhbmNlb2Ygbz90aGlzLl9kYXRhLmdldENvbnRlbnRXb3JrZXIoKTp0aGlzLl9kYXRhIGluc3RhbmNlb2YgaD90aGlzLl9kYXRhOm5ldyBuKHRoaXMuX2RhdGEpfX07Zm9yKHZhciB1PVtcImFzVGV4dFwiLFwiYXNCaW5hcnlcIixcImFzTm9kZUJ1ZmZlclwiLFwiYXNVaW50OEFycmF5XCIsXCJhc0FycmF5QnVmZmVyXCJdLGw9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiByZW1vdmVkIGluIEpTWmlwIDMuMCwgcGxlYXNlIGNoZWNrIHRoZSB1cGdyYWRlIGd1aWRlLlwiKX0sZj0wO2Y8dS5sZW5ndGg7ZisrKWkucHJvdG90eXBlW3VbZl1dPWw7ZS5leHBvcnRzPWl9LHtcIi4vY29tcHJlc3NlZE9iamVjdFwiOjIsXCIuL3N0cmVhbS9EYXRhV29ya2VyXCI6MjcsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIjoyOSxcIi4vdXRmOFwiOjMxfV0sMzY6W2Z1bmN0aW9uKHQsbCxlKXsoZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHIsaSx0PWUuTXV0YXRpb25PYnNlcnZlcnx8ZS5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO2lmKHQpe3ZhciBuPTAscz1uZXcgdCh1KSxhPWUuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7cy5vYnNlcnZlKGEse2NoYXJhY3RlckRhdGE6ITB9KSxyPWZ1bmN0aW9uKCl7YS5kYXRhPW49KytuJTJ9fWVsc2UgaWYoZS5zZXRJbW1lZGlhdGV8fHZvaWQgMD09PWUuTWVzc2FnZUNoYW5uZWwpcj1cImRvY3VtZW50XCJpbiBlJiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gZS5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpP2Z1bmN0aW9uKCl7dmFyIHQ9ZS5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Qub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7dSgpLHQub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH0sZS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodCl9OmZ1bmN0aW9uKCl7c2V0VGltZW91dCh1LDApfTtlbHNle3ZhciBvPW5ldyBlLk1lc3NhZ2VDaGFubmVsO28ucG9ydDEub25tZXNzYWdlPXUscj1mdW5jdGlvbigpe28ucG9ydDIucG9zdE1lc3NhZ2UoMCl9fXZhciBoPVtdO2Z1bmN0aW9uIHUoKXt2YXIgdCxlO2k9ITA7Zm9yKHZhciByPWgubGVuZ3RoO3I7KXtmb3IoZT1oLGg9W10sdD0tMTsrK3Q8cjspZVt0XSgpO3I9aC5sZW5ndGh9aT0hMX1sLmV4cG9ydHM9ZnVuY3Rpb24odCl7MSE9PWgucHVzaCh0KXx8aXx8cigpfX0pLmNhbGwodGhpcyxcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Ont9KX0se31dLDM3OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dChcImltbWVkaWF0ZVwiKTtmdW5jdGlvbiB1KCl7fXZhciBsPXt9LHM9W1wiUkVKRUNURURcIl0sYT1bXCJGVUxGSUxMRURcIl0saT1bXCJQRU5ESU5HXCJdO2Z1bmN0aW9uIG8odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwicmVzb2x2ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO3RoaXMuc3RhdGU9aSx0aGlzLnF1ZXVlPVtdLHRoaXMub3V0Y29tZT12b2lkIDAsdCE9PXUmJmModGhpcyx0KX1mdW5jdGlvbiBoKHQsZSxyKXt0aGlzLnByb21pc2U9dCxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiYodGhpcy5vbkZ1bGZpbGxlZD1lLHRoaXMuY2FsbEZ1bGZpbGxlZD10aGlzLm90aGVyQ2FsbEZ1bGZpbGxlZCksXCJmdW5jdGlvblwiPT10eXBlb2YgciYmKHRoaXMub25SZWplY3RlZD1yLHRoaXMuY2FsbFJlamVjdGVkPXRoaXMub3RoZXJDYWxsUmVqZWN0ZWQpfWZ1bmN0aW9uIGYoZSxyLGkpe24oZnVuY3Rpb24oKXt2YXIgdDt0cnl7dD1yKGkpfWNhdGNoKHQpe3JldHVybiBsLnJlamVjdChlLHQpfXQ9PT1lP2wucmVqZWN0KGUsbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZXNvbHZlIHByb21pc2Ugd2l0aCBpdHNlbGZcIikpOmwucmVzb2x2ZShlLHQpfSl9ZnVuY3Rpb24gZCh0KXt2YXIgZT10JiZ0LnRoZW47aWYodCYmKFwib2JqZWN0XCI9PXR5cGVvZiB0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZSlyZXR1cm4gZnVuY3Rpb24oKXtlLmFwcGx5KHQsYXJndW1lbnRzKX19ZnVuY3Rpb24gYyhlLHQpe3ZhciByPSExO2Z1bmN0aW9uIGkodCl7cnx8KHI9ITAsbC5yZWplY3QoZSx0KSl9ZnVuY3Rpb24gbih0KXtyfHwocj0hMCxsLnJlc29sdmUoZSx0KSl9dmFyIHM9cChmdW5jdGlvbigpe3QobixpKX0pO1wiZXJyb3JcIj09PXMuc3RhdHVzJiZpKHMudmFsdWUpfWZ1bmN0aW9uIHAodCxlKXt2YXIgcj17fTt0cnl7ci52YWx1ZT10KGUpLHIuc3RhdHVzPVwic3VjY2Vzc1wifWNhdGNoKHQpe3Iuc3RhdHVzPVwiZXJyb3JcIixyLnZhbHVlPXR9cmV0dXJuIHJ9KGUuZXhwb3J0cz1vKS5wcm90b3R5cGUuZmluYWxseT1mdW5jdGlvbihlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXJldHVybiB0aGlzO3ZhciByPXRoaXMuY29uc3RydWN0b3I7cmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih0KXtyZXR1cm4gci5yZXNvbHZlKGUoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiB0fSl9LGZ1bmN0aW9uKHQpe3JldHVybiByLnJlc29sdmUoZSgpKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgdH0pfSl9LG8ucHJvdG90eXBlLmNhdGNoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRoZW4obnVsbCx0KX0sby5wcm90b3R5cGUudGhlbj1mdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJnRoaXMuc3RhdGU9PT1hfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZ0aGlzLnN0YXRlPT09cylyZXR1cm4gdGhpczt2YXIgcj1uZXcgdGhpcy5jb25zdHJ1Y3Rvcih1KTt0aGlzLnN0YXRlIT09aT9mKHIsdGhpcy5zdGF0ZT09PWE/dDplLHRoaXMub3V0Y29tZSk6dGhpcy5xdWV1ZS5wdXNoKG5ldyBoKHIsdCxlKSk7cmV0dXJuIHJ9LGgucHJvdG90eXBlLmNhbGxGdWxmaWxsZWQ9ZnVuY3Rpb24odCl7bC5yZXNvbHZlKHRoaXMucHJvbWlzZSx0KX0saC5wcm90b3R5cGUub3RoZXJDYWxsRnVsZmlsbGVkPWZ1bmN0aW9uKHQpe2YodGhpcy5wcm9taXNlLHRoaXMub25GdWxmaWxsZWQsdCl9LGgucHJvdG90eXBlLmNhbGxSZWplY3RlZD1mdW5jdGlvbih0KXtsLnJlamVjdCh0aGlzLnByb21pc2UsdCl9LGgucHJvdG90eXBlLm90aGVyQ2FsbFJlamVjdGVkPWZ1bmN0aW9uKHQpe2YodGhpcy5wcm9taXNlLHRoaXMub25SZWplY3RlZCx0KX0sbC5yZXNvbHZlPWZ1bmN0aW9uKHQsZSl7dmFyIHI9cChkLGUpO2lmKFwiZXJyb3JcIj09PXIuc3RhdHVzKXJldHVybiBsLnJlamVjdCh0LHIudmFsdWUpO3ZhciBpPXIudmFsdWU7aWYoaSljKHQsaSk7ZWxzZXt0LnN0YXRlPWEsdC5vdXRjb21lPWU7Zm9yKHZhciBuPS0xLHM9dC5xdWV1ZS5sZW5ndGg7KytuPHM7KXQucXVldWVbbl0uY2FsbEZ1bGZpbGxlZChlKX1yZXR1cm4gdH0sbC5yZWplY3Q9ZnVuY3Rpb24odCxlKXt0LnN0YXRlPXMsdC5vdXRjb21lPWU7Zm9yKHZhciByPS0xLGk9dC5xdWV1ZS5sZW5ndGg7KytyPGk7KXQucXVldWVbcl0uY2FsbFJlamVjdGVkKGUpO3JldHVybiB0fSxvLnJlc29sdmU9ZnVuY3Rpb24odCl7aWYodCBpbnN0YW5jZW9mIHRoaXMpcmV0dXJuIHQ7cmV0dXJuIGwucmVzb2x2ZShuZXcgdGhpcyh1KSx0KX0sby5yZWplY3Q9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IHRoaXModSk7cmV0dXJuIGwucmVqZWN0KGUsdCl9LG8uYWxsPWZ1bmN0aW9uKHQpe3ZhciByPXRoaXM7aWYoXCJbb2JqZWN0IEFycmF5XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKXJldHVybiB0aGlzLnJlamVjdChuZXcgVHlwZUVycm9yKFwibXVzdCBiZSBhbiBhcnJheVwiKSk7dmFyIGk9dC5sZW5ndGgsbj0hMTtpZighaSlyZXR1cm4gdGhpcy5yZXNvbHZlKFtdKTt2YXIgcz1uZXcgQXJyYXkoaSksYT0wLGU9LTEsbz1uZXcgdGhpcyh1KTtmb3IoOysrZTxpOyloKHRbZV0sZSk7cmV0dXJuIG87ZnVuY3Rpb24gaCh0LGUpe3IucmVzb2x2ZSh0KS50aGVuKGZ1bmN0aW9uKHQpe3NbZV09dCwrK2EhPT1pfHxufHwobj0hMCxsLnJlc29sdmUobyxzKSl9LGZ1bmN0aW9uKHQpe258fChuPSEwLGwucmVqZWN0KG8sdCkpfSl9fSxvLnJhY2U9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztpZihcIltvYmplY3QgQXJyYXldXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkpcmV0dXJuIHRoaXMucmVqZWN0KG5ldyBUeXBlRXJyb3IoXCJtdXN0IGJlIGFuIGFycmF5XCIpKTt2YXIgcj10Lmxlbmd0aCxpPSExO2lmKCFyKXJldHVybiB0aGlzLnJlc29sdmUoW10pO3ZhciBuPS0xLHM9bmV3IHRoaXModSk7Zm9yKDsrK248cjspYT10W25dLGUucmVzb2x2ZShhKS50aGVuKGZ1bmN0aW9uKHQpe2l8fChpPSEwLGwucmVzb2x2ZShzLHQpKX0sZnVuY3Rpb24odCl7aXx8KGk9ITAsbC5yZWplY3Qocyx0KSl9KTt2YXIgYTtyZXR1cm4gc319LHtpbW1lZGlhdGU6MzZ9XSwzODpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXt9OygwLHQoXCIuL2xpYi91dGlscy9jb21tb25cIikuYXNzaWduKShpLHQoXCIuL2xpYi9kZWZsYXRlXCIpLHQoXCIuL2xpYi9pbmZsYXRlXCIpLHQoXCIuL2xpYi96bGliL2NvbnN0YW50c1wiKSksZS5leHBvcnRzPWl9LHtcIi4vbGliL2RlZmxhdGVcIjozOSxcIi4vbGliL2luZmxhdGVcIjo0MCxcIi4vbGliL3V0aWxzL2NvbW1vblwiOjQxLFwiLi9saWIvemxpYi9jb25zdGFudHNcIjo0NH1dLDM5OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dChcIi4vemxpYi9kZWZsYXRlXCIpLG89dChcIi4vdXRpbHMvY29tbW9uXCIpLGg9dChcIi4vdXRpbHMvc3RyaW5nc1wiKSxuPXQoXCIuL3psaWIvbWVzc2FnZXNcIikscz10KFwiLi96bGliL3pzdHJlYW1cIiksdT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLGw9MCxmPS0xLGQ9MCxjPTg7ZnVuY3Rpb24gcCh0KXtpZighKHRoaXMgaW5zdGFuY2VvZiBwKSlyZXR1cm4gbmV3IHAodCk7dGhpcy5vcHRpb25zPW8uYXNzaWduKHtsZXZlbDpmLG1ldGhvZDpjLGNodW5rU2l6ZToxNjM4NCx3aW5kb3dCaXRzOjE1LG1lbUxldmVsOjgsc3RyYXRlZ3k6ZCx0bzpcIlwifSx0fHx7fSk7dmFyIGU9dGhpcy5vcHRpb25zO2UucmF3JiYwPGUud2luZG93Qml0cz9lLndpbmRvd0JpdHM9LWUud2luZG93Qml0czplLmd6aXAmJjA8ZS53aW5kb3dCaXRzJiZlLndpbmRvd0JpdHM8MTYmJihlLndpbmRvd0JpdHMrPTE2KSx0aGlzLmVycj0wLHRoaXMubXNnPVwiXCIsdGhpcy5lbmRlZD0hMSx0aGlzLmNodW5rcz1bXSx0aGlzLnN0cm09bmV3IHMsdGhpcy5zdHJtLmF2YWlsX291dD0wO3ZhciByPWEuZGVmbGF0ZUluaXQyKHRoaXMuc3RybSxlLmxldmVsLGUubWV0aG9kLGUud2luZG93Qml0cyxlLm1lbUxldmVsLGUuc3RyYXRlZ3kpO2lmKHIhPT1sKXRocm93IG5ldyBFcnJvcihuW3JdKTtpZihlLmhlYWRlciYmYS5kZWZsYXRlU2V0SGVhZGVyKHRoaXMuc3RybSxlLmhlYWRlciksZS5kaWN0aW9uYXJ5KXt2YXIgaTtpZihpPVwic3RyaW5nXCI9PXR5cGVvZiBlLmRpY3Rpb25hcnk/aC5zdHJpbmcyYnVmKGUuZGljdGlvbmFyeSk6XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09dS5jYWxsKGUuZGljdGlvbmFyeSk/bmV3IFVpbnQ4QXJyYXkoZS5kaWN0aW9uYXJ5KTplLmRpY3Rpb25hcnksKHI9YS5kZWZsYXRlU2V0RGljdGlvbmFyeSh0aGlzLnN0cm0saSkpIT09bCl0aHJvdyBuZXcgRXJyb3IobltyXSk7dGhpcy5fZGljdF9zZXQ9ITB9fWZ1bmN0aW9uIGkodCxlKXt2YXIgcj1uZXcgcChlKTtpZihyLnB1c2godCwhMCksci5lcnIpdGhyb3cgci5tc2d8fG5bci5lcnJdO3JldHVybiByLnJlc3VsdH1wLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHQsZSl7dmFyIHIsaSxuPXRoaXMuc3RybSxzPXRoaXMub3B0aW9ucy5jaHVua1NpemU7aWYodGhpcy5lbmRlZClyZXR1cm4hMTtpPWU9PT1+fmU/ZTohMD09PWU/NDowLFwic3RyaW5nXCI9PXR5cGVvZiB0P24uaW5wdXQ9aC5zdHJpbmcyYnVmKHQpOlwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PXUuY2FsbCh0KT9uLmlucHV0PW5ldyBVaW50OEFycmF5KHQpOm4uaW5wdXQ9dCxuLm5leHRfaW49MCxuLmF2YWlsX2luPW4uaW5wdXQubGVuZ3RoO2Rve2lmKDA9PT1uLmF2YWlsX291dCYmKG4ub3V0cHV0PW5ldyBvLkJ1Zjgocyksbi5uZXh0X291dD0wLG4uYXZhaWxfb3V0PXMpLDEhPT0ocj1hLmRlZmxhdGUobixpKSkmJnIhPT1sKXJldHVybiB0aGlzLm9uRW5kKHIpLCEodGhpcy5lbmRlZD0hMCk7MCE9PW4uYXZhaWxfb3V0JiYoMCE9PW4uYXZhaWxfaW58fDQhPT1pJiYyIT09aSl8fChcInN0cmluZ1wiPT09dGhpcy5vcHRpb25zLnRvP3RoaXMub25EYXRhKGguYnVmMmJpbnN0cmluZyhvLnNocmlua0J1ZihuLm91dHB1dCxuLm5leHRfb3V0KSkpOnRoaXMub25EYXRhKG8uc2hyaW5rQnVmKG4ub3V0cHV0LG4ubmV4dF9vdXQpKSl9d2hpbGUoKDA8bi5hdmFpbF9pbnx8MD09PW4uYXZhaWxfb3V0KSYmMSE9PXIpO3JldHVybiA0PT09aT8ocj1hLmRlZmxhdGVFbmQodGhpcy5zdHJtKSx0aGlzLm9uRW5kKHIpLHRoaXMuZW5kZWQ9ITAscj09PWwpOjIhPT1pfHwodGhpcy5vbkVuZChsKSwhKG4uYXZhaWxfb3V0PTApKX0scC5wcm90b3R5cGUub25EYXRhPWZ1bmN0aW9uKHQpe3RoaXMuY2h1bmtzLnB1c2godCl9LHAucHJvdG90eXBlLm9uRW5kPWZ1bmN0aW9uKHQpe3Q9PT1sJiYoXCJzdHJpbmdcIj09PXRoaXMub3B0aW9ucy50bz90aGlzLnJlc3VsdD10aGlzLmNodW5rcy5qb2luKFwiXCIpOnRoaXMucmVzdWx0PW8uZmxhdHRlbkNodW5rcyh0aGlzLmNodW5rcykpLHRoaXMuY2h1bmtzPVtdLHRoaXMuZXJyPXQsdGhpcy5tc2c9dGhpcy5zdHJtLm1zZ30sci5EZWZsYXRlPXAsci5kZWZsYXRlPWksci5kZWZsYXRlUmF3PWZ1bmN0aW9uKHQsZSl7cmV0dXJuKGU9ZXx8e30pLnJhdz0hMCxpKHQsZSl9LHIuZ3ppcD1mdW5jdGlvbih0LGUpe3JldHVybihlPWV8fHt9KS5nemlwPSEwLGkodCxlKX19LHtcIi4vdXRpbHMvY29tbW9uXCI6NDEsXCIuL3V0aWxzL3N0cmluZ3NcIjo0MixcIi4vemxpYi9kZWZsYXRlXCI6NDYsXCIuL3psaWIvbWVzc2FnZXNcIjo1MSxcIi4vemxpYi96c3RyZWFtXCI6NTN9XSw0MDpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBkPXQoXCIuL3psaWIvaW5mbGF0ZVwiKSxjPXQoXCIuL3V0aWxzL2NvbW1vblwiKSxwPXQoXCIuL3V0aWxzL3N0cmluZ3NcIiksbT10KFwiLi96bGliL2NvbnN0YW50c1wiKSxpPXQoXCIuL3psaWIvbWVzc2FnZXNcIiksbj10KFwiLi96bGliL3pzdHJlYW1cIikscz10KFwiLi96bGliL2d6aGVhZGVyXCIpLF89T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztmdW5jdGlvbiBhKHQpe2lmKCEodGhpcyBpbnN0YW5jZW9mIGEpKXJldHVybiBuZXcgYSh0KTt0aGlzLm9wdGlvbnM9Yy5hc3NpZ24oe2NodW5rU2l6ZToxNjM4NCx3aW5kb3dCaXRzOjAsdG86XCJcIn0sdHx8e30pO3ZhciBlPXRoaXMub3B0aW9ucztlLnJhdyYmMDw9ZS53aW5kb3dCaXRzJiZlLndpbmRvd0JpdHM8MTYmJihlLndpbmRvd0JpdHM9LWUud2luZG93Qml0cywwPT09ZS53aW5kb3dCaXRzJiYoZS53aW5kb3dCaXRzPS0xNSkpLCEoMDw9ZS53aW5kb3dCaXRzJiZlLndpbmRvd0JpdHM8MTYpfHx0JiZ0LndpbmRvd0JpdHN8fChlLndpbmRvd0JpdHMrPTMyKSwxNTxlLndpbmRvd0JpdHMmJmUud2luZG93Qml0czw0OCYmMD09KDE1JmUud2luZG93Qml0cykmJihlLndpbmRvd0JpdHN8PTE1KSx0aGlzLmVycj0wLHRoaXMubXNnPVwiXCIsdGhpcy5lbmRlZD0hMSx0aGlzLmNodW5rcz1bXSx0aGlzLnN0cm09bmV3IG4sdGhpcy5zdHJtLmF2YWlsX291dD0wO3ZhciByPWQuaW5mbGF0ZUluaXQyKHRoaXMuc3RybSxlLndpbmRvd0JpdHMpO2lmKHIhPT1tLlpfT0spdGhyb3cgbmV3IEVycm9yKGlbcl0pO3RoaXMuaGVhZGVyPW5ldyBzLGQuaW5mbGF0ZUdldEhlYWRlcih0aGlzLnN0cm0sdGhpcy5oZWFkZXIpfWZ1bmN0aW9uIG8odCxlKXt2YXIgcj1uZXcgYShlKTtpZihyLnB1c2godCwhMCksci5lcnIpdGhyb3cgci5tc2d8fGlbci5lcnJdO3JldHVybiByLnJlc3VsdH1hLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHQsZSl7dmFyIHIsaSxuLHMsYSxvLGg9dGhpcy5zdHJtLHU9dGhpcy5vcHRpb25zLmNodW5rU2l6ZSxsPXRoaXMub3B0aW9ucy5kaWN0aW9uYXJ5LGY9ITE7aWYodGhpcy5lbmRlZClyZXR1cm4hMTtpPWU9PT1+fmU/ZTohMD09PWU/bS5aX0ZJTklTSDptLlpfTk9fRkxVU0gsXCJzdHJpbmdcIj09dHlwZW9mIHQ/aC5pbnB1dD1wLmJpbnN0cmluZzJidWYodCk6XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09Xy5jYWxsKHQpP2guaW5wdXQ9bmV3IFVpbnQ4QXJyYXkodCk6aC5pbnB1dD10LGgubmV4dF9pbj0wLGguYXZhaWxfaW49aC5pbnB1dC5sZW5ndGg7ZG97aWYoMD09PWguYXZhaWxfb3V0JiYoaC5vdXRwdXQ9bmV3IGMuQnVmOCh1KSxoLm5leHRfb3V0PTAsaC5hdmFpbF9vdXQ9dSksKHI9ZC5pbmZsYXRlKGgsbS5aX05PX0ZMVVNIKSk9PT1tLlpfTkVFRF9ESUNUJiZsJiYobz1cInN0cmluZ1wiPT10eXBlb2YgbD9wLnN0cmluZzJidWYobCk6XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09Xy5jYWxsKGwpP25ldyBVaW50OEFycmF5KGwpOmwscj1kLmluZmxhdGVTZXREaWN0aW9uYXJ5KHRoaXMuc3RybSxvKSkscj09PW0uWl9CVUZfRVJST1ImJiEwPT09ZiYmKHI9bS5aX09LLGY9ITEpLHIhPT1tLlpfU1RSRUFNX0VORCYmciE9PW0uWl9PSylyZXR1cm4gdGhpcy5vbkVuZChyKSwhKHRoaXMuZW5kZWQ9ITApO2gubmV4dF9vdXQmJigwIT09aC5hdmFpbF9vdXQmJnIhPT1tLlpfU1RSRUFNX0VORCYmKDAhPT1oLmF2YWlsX2lufHxpIT09bS5aX0ZJTklTSCYmaSE9PW0uWl9TWU5DX0ZMVVNIKXx8KFwic3RyaW5nXCI9PT10aGlzLm9wdGlvbnMudG8/KG49cC51dGY4Ym9yZGVyKGgub3V0cHV0LGgubmV4dF9vdXQpLHM9aC5uZXh0X291dC1uLGE9cC5idWYyc3RyaW5nKGgub3V0cHV0LG4pLGgubmV4dF9vdXQ9cyxoLmF2YWlsX291dD11LXMscyYmYy5hcnJheVNldChoLm91dHB1dCxoLm91dHB1dCxuLHMsMCksdGhpcy5vbkRhdGEoYSkpOnRoaXMub25EYXRhKGMuc2hyaW5rQnVmKGgub3V0cHV0LGgubmV4dF9vdXQpKSkpLDA9PT1oLmF2YWlsX2luJiYwPT09aC5hdmFpbF9vdXQmJihmPSEwKX13aGlsZSgoMDxoLmF2YWlsX2lufHwwPT09aC5hdmFpbF9vdXQpJiZyIT09bS5aX1NUUkVBTV9FTkQpO3JldHVybiByPT09bS5aX1NUUkVBTV9FTkQmJihpPW0uWl9GSU5JU0gpLGk9PT1tLlpfRklOSVNIPyhyPWQuaW5mbGF0ZUVuZCh0aGlzLnN0cm0pLHRoaXMub25FbmQociksdGhpcy5lbmRlZD0hMCxyPT09bS5aX09LKTppIT09bS5aX1NZTkNfRkxVU0h8fCh0aGlzLm9uRW5kKG0uWl9PSyksIShoLmF2YWlsX291dD0wKSl9LGEucHJvdG90eXBlLm9uRGF0YT1mdW5jdGlvbih0KXt0aGlzLmNodW5rcy5wdXNoKHQpfSxhLnByb3RvdHlwZS5vbkVuZD1mdW5jdGlvbih0KXt0PT09bS5aX09LJiYoXCJzdHJpbmdcIj09PXRoaXMub3B0aW9ucy50bz90aGlzLnJlc3VsdD10aGlzLmNodW5rcy5qb2luKFwiXCIpOnRoaXMucmVzdWx0PWMuZmxhdHRlbkNodW5rcyh0aGlzLmNodW5rcykpLHRoaXMuY2h1bmtzPVtdLHRoaXMuZXJyPXQsdGhpcy5tc2c9dGhpcy5zdHJtLm1zZ30sci5JbmZsYXRlPWEsci5pbmZsYXRlPW8sci5pbmZsYXRlUmF3PWZ1bmN0aW9uKHQsZSl7cmV0dXJuKGU9ZXx8e30pLnJhdz0hMCxvKHQsZSl9LHIudW5nemlwPW99LHtcIi4vdXRpbHMvY29tbW9uXCI6NDEsXCIuL3V0aWxzL3N0cmluZ3NcIjo0MixcIi4vemxpYi9jb25zdGFudHNcIjo0NCxcIi4vemxpYi9nemhlYWRlclwiOjQ3LFwiLi96bGliL2luZmxhdGVcIjo0OSxcIi4vemxpYi9tZXNzYWdlc1wiOjUxLFwiLi96bGliL3pzdHJlYW1cIjo1M31dLDQxOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4QXJyYXkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50MTZBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEludDMyQXJyYXk7ci5hc3NpZ249ZnVuY3Rpb24odCl7Zm9yKHZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtlLmxlbmd0aDspe3ZhciByPWUuc2hpZnQoKTtpZihyKXtpZihcIm9iamVjdFwiIT10eXBlb2Ygcil0aHJvdyBuZXcgVHlwZUVycm9yKHIrXCJtdXN0IGJlIG5vbi1vYmplY3RcIik7Zm9yKHZhciBpIGluIHIpci5oYXNPd25Qcm9wZXJ0eShpKSYmKHRbaV09cltpXSl9fXJldHVybiB0fSxyLnNocmlua0J1Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0Lmxlbmd0aD09PWU/dDp0LnN1YmFycmF5P3Quc3ViYXJyYXkoMCxlKToodC5sZW5ndGg9ZSx0KX07dmFyIG49e2FycmF5U2V0OmZ1bmN0aW9uKHQsZSxyLGksbil7aWYoZS5zdWJhcnJheSYmdC5zdWJhcnJheSl0LnNldChlLnN1YmFycmF5KHIscitpKSxuKTtlbHNlIGZvcih2YXIgcz0wO3M8aTtzKyspdFtuK3NdPWVbcitzXX0sZmxhdHRlbkNodW5rczpmdW5jdGlvbih0KXt2YXIgZSxyLGksbixzLGE7Zm9yKGU9aT0wLHI9dC5sZW5ndGg7ZTxyO2UrKylpKz10W2VdLmxlbmd0aDtmb3IoYT1uZXcgVWludDhBcnJheShpKSxlPW49MCxyPXQubGVuZ3RoO2U8cjtlKyspcz10W2VdLGEuc2V0KHMsbiksbis9cy5sZW5ndGg7cmV0dXJuIGF9fSxzPXthcnJheVNldDpmdW5jdGlvbih0LGUscixpLG4pe2Zvcih2YXIgcz0wO3M8aTtzKyspdFtuK3NdPWVbcitzXX0sZmxhdHRlbkNodW5rczpmdW5jdGlvbih0KXtyZXR1cm5bXS5jb25jYXQuYXBwbHkoW10sdCl9fTtyLnNldFR5cGVkPWZ1bmN0aW9uKHQpe3Q/KHIuQnVmOD1VaW50OEFycmF5LHIuQnVmMTY9VWludDE2QXJyYXksci5CdWYzMj1JbnQzMkFycmF5LHIuYXNzaWduKHIsbikpOihyLkJ1Zjg9QXJyYXksci5CdWYxNj1BcnJheSxyLkJ1ZjMyPUFycmF5LHIuYXNzaWduKHIscykpfSxyLnNldFR5cGVkKGkpfSx7fV0sNDI6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaD10KFwiLi9jb21tb25cIiksbj0hMCxzPSEwO3RyeXtTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsWzBdKX1jYXRjaCh0KXtuPSExfXRyeXtTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsbmV3IFVpbnQ4QXJyYXkoMSkpfWNhdGNoKHQpe3M9ITF9Zm9yKHZhciB1PW5ldyBoLkJ1ZjgoMjU2KSxpPTA7aTwyNTY7aSsrKXVbaV09MjUyPD1pPzY6MjQ4PD1pPzU6MjQwPD1pPzQ6MjI0PD1pPzM6MTkyPD1pPzI6MTtmdW5jdGlvbiBsKHQsZSl7aWYoZTw2NTUzNyYmKHQuc3ViYXJyYXkmJnN8fCF0LnN1YmFycmF5JiZuKSlyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLGguc2hyaW5rQnVmKHQsZSkpO2Zvcih2YXIgcj1cIlwiLGk9MDtpPGU7aSsrKXIrPVN0cmluZy5mcm9tQ2hhckNvZGUodFtpXSk7cmV0dXJuIHJ9dVsyNTRdPXVbMjU0XT0xLHIuc3RyaW5nMmJ1Zj1mdW5jdGlvbih0KXt2YXIgZSxyLGksbixzLGE9dC5sZW5ndGgsbz0wO2ZvcihuPTA7bjxhO24rKyk1NTI5Nj09KDY0NTEyJihyPXQuY2hhckNvZGVBdChuKSkpJiZuKzE8YSYmNTYzMjA9PSg2NDUxMiYoaT10LmNoYXJDb2RlQXQobisxKSkpJiYocj02NTUzNisoci01NTI5Njw8MTApKyhpLTU2MzIwKSxuKyspLG8rPXI8MTI4PzE6cjwyMDQ4PzI6cjw2NTUzNj8zOjQ7Zm9yKGU9bmV3IGguQnVmOChvKSxuPXM9MDtzPG87bisrKTU1Mjk2PT0oNjQ1MTImKHI9dC5jaGFyQ29kZUF0KG4pKSkmJm4rMTxhJiY1NjMyMD09KDY0NTEyJihpPXQuY2hhckNvZGVBdChuKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKGktNTYzMjApLG4rKykscjwxMjg/ZVtzKytdPXI6KHI8MjA0OD9lW3MrK109MTkyfHI+Pj42OihyPDY1NTM2P2VbcysrXT0yMjR8cj4+PjEyOihlW3MrK109MjQwfHI+Pj4xOCxlW3MrK109MTI4fHI+Pj4xMiY2MyksZVtzKytdPTEyOHxyPj4+NiY2MyksZVtzKytdPTEyOHw2MyZyKTtyZXR1cm4gZX0sci5idWYyYmluc3RyaW5nPWZ1bmN0aW9uKHQpe3JldHVybiBsKHQsdC5sZW5ndGgpfSxyLmJpbnN0cmluZzJidWY9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPW5ldyBoLkJ1ZjgodC5sZW5ndGgpLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspZVtyXT10LmNoYXJDb2RlQXQocik7cmV0dXJuIGV9LHIuYnVmMnN0cmluZz1mdW5jdGlvbih0LGUpe3ZhciByLGksbixzLGE9ZXx8dC5sZW5ndGgsbz1uZXcgQXJyYXkoMiphKTtmb3Iocj1pPTA7cjxhOylpZigobj10W3IrK10pPDEyOClvW2krK109bjtlbHNlIGlmKDQ8KHM9dVtuXSkpb1tpKytdPTY1NTMzLHIrPXMtMTtlbHNle2ZvcihuJj0yPT09cz8zMTozPT09cz8xNTo3OzE8cyYmcjxhOyluPW48PDZ8NjMmdFtyKytdLHMtLTsxPHM/b1tpKytdPTY1NTMzOm48NjU1MzY/b1tpKytdPW46KG4tPTY1NTM2LG9baSsrXT01NTI5NnxuPj4xMCYxMDIzLG9baSsrXT01NjMyMHwxMDIzJm4pfXJldHVybiBsKG8saSl9LHIudXRmOGJvcmRlcj1mdW5jdGlvbih0LGUpe3ZhciByO2ZvcigoZT1lfHx0Lmxlbmd0aCk+dC5sZW5ndGgmJihlPXQubGVuZ3RoKSxyPWUtMTswPD1yJiYxMjg9PSgxOTImdFtyXSk7KXItLTtyZXR1cm4gcjwwP2U6MD09PXI/ZTpyK3VbdFtyXV0+ZT9yOmV9fSx7XCIuL2NvbW1vblwiOjQxfV0sNDM6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCxlLHIsaSl7Zm9yKHZhciBuPTY1NTM1JnR8MCxzPXQ+Pj4xNiY2NTUzNXwwLGE9MDswIT09cjspe2ZvcihyLT1hPTJlMzxyPzJlMzpyO3M9cysobj1uK2VbaSsrXXwwKXwwLC0tYTspO24lPTY1NTIxLHMlPTY1NTIxfXJldHVybiBufHM8PDE2fDB9fSx7fV0sNDQ6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9e1pfTk9fRkxVU0g6MCxaX1BBUlRJQUxfRkxVU0g6MSxaX1NZTkNfRkxVU0g6MixaX0ZVTExfRkxVU0g6MyxaX0ZJTklTSDo0LFpfQkxPQ0s6NSxaX1RSRUVTOjYsWl9PSzowLFpfU1RSRUFNX0VORDoxLFpfTkVFRF9ESUNUOjIsWl9FUlJOTzotMSxaX1NUUkVBTV9FUlJPUjotMixaX0RBVEFfRVJST1I6LTMsWl9CVUZfRVJST1I6LTUsWl9OT19DT01QUkVTU0lPTjowLFpfQkVTVF9TUEVFRDoxLFpfQkVTVF9DT01QUkVTU0lPTjo5LFpfREVGQVVMVF9DT01QUkVTU0lPTjotMSxaX0ZJTFRFUkVEOjEsWl9IVUZGTUFOX09OTFk6MixaX1JMRTozLFpfRklYRUQ6NCxaX0RFRkFVTFRfU1RSQVRFR1k6MCxaX0JJTkFSWTowLFpfVEVYVDoxLFpfVU5LTk9XTjoyLFpfREVGTEFURUQ6OH19LHt9XSw0NTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWZ1bmN0aW9uKCl7Zm9yKHZhciB0LGU9W10scj0wO3I8MjU2O3IrKyl7dD1yO2Zvcih2YXIgaT0wO2k8ODtpKyspdD0xJnQ/Mzk4ODI5MjM4NF50Pj4+MTp0Pj4+MTtlW3JdPXR9cmV0dXJuIGV9KCk7ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSxyLGkpe3ZhciBuPW8scz1pK3I7dF49LTE7Zm9yKHZhciBhPWk7YTxzO2ErKyl0PXQ+Pj44Xm5bMjU1Jih0XmVbYV0pXTtyZXR1cm4tMV50fX0se31dLDQ2OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGgsZD10KFwiLi4vdXRpbHMvY29tbW9uXCIpLHU9dChcIi4vdHJlZXNcIiksYz10KFwiLi9hZGxlcjMyXCIpLHA9dChcIi4vY3JjMzJcIiksaT10KFwiLi9tZXNzYWdlc1wiKSxsPTAsZj00LG09MCxfPS0yLGc9LTEsYj00LG49Mix2PTgseT05LHM9Mjg2LGE9MzAsbz0xOSx3PTIqcysxLGs9MTUseD0zLFM9MjU4LHo9Uyt4KzEsQz00MixFPTExMyxBPTEsST0yLE89MyxCPTQ7ZnVuY3Rpb24gUih0LGUpe3JldHVybiB0Lm1zZz1pW2VdLGV9ZnVuY3Rpb24gVCh0KXtyZXR1cm4odDw8MSktKDQ8dD85OjApfWZ1bmN0aW9uIEQodCl7Zm9yKHZhciBlPXQubGVuZ3RoOzA8PS0tZTspdFtlXT0wfWZ1bmN0aW9uIEYodCl7dmFyIGU9dC5zdGF0ZSxyPWUucGVuZGluZztyPnQuYXZhaWxfb3V0JiYocj10LmF2YWlsX291dCksMCE9PXImJihkLmFycmF5U2V0KHQub3V0cHV0LGUucGVuZGluZ19idWYsZS5wZW5kaW5nX291dCxyLHQubmV4dF9vdXQpLHQubmV4dF9vdXQrPXIsZS5wZW5kaW5nX291dCs9cix0LnRvdGFsX291dCs9cix0LmF2YWlsX291dC09cixlLnBlbmRpbmctPXIsMD09PWUucGVuZGluZyYmKGUucGVuZGluZ19vdXQ9MCkpfWZ1bmN0aW9uIE4odCxlKXt1Ll90cl9mbHVzaF9ibG9jayh0LDA8PXQuYmxvY2tfc3RhcnQ/dC5ibG9ja19zdGFydDotMSx0LnN0cnN0YXJ0LXQuYmxvY2tfc3RhcnQsZSksdC5ibG9ja19zdGFydD10LnN0cnN0YXJ0LEYodC5zdHJtKX1mdW5jdGlvbiBVKHQsZSl7dC5wZW5kaW5nX2J1Zlt0LnBlbmRpbmcrK109ZX1mdW5jdGlvbiBQKHQsZSl7dC5wZW5kaW5nX2J1Zlt0LnBlbmRpbmcrK109ZT4+PjgmMjU1LHQucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPTI1NSZlfWZ1bmN0aW9uIEwodCxlKXt2YXIgcixpLG49dC5tYXhfY2hhaW5fbGVuZ3RoLHM9dC5zdHJzdGFydCxhPXQucHJldl9sZW5ndGgsbz10Lm5pY2VfbWF0Y2gsaD10LnN0cnN0YXJ0PnQud19zaXplLXo/dC5zdHJzdGFydC0odC53X3NpemUteik6MCx1PXQud2luZG93LGw9dC53X21hc2ssZj10LnByZXYsZD10LnN0cnN0YXJ0K1MsYz11W3MrYS0xXSxwPXVbcythXTt0LnByZXZfbGVuZ3RoPj10Lmdvb2RfbWF0Y2gmJihuPj49Miksbz50Lmxvb2thaGVhZCYmKG89dC5sb29rYWhlYWQpO2Rve2lmKHVbKHI9ZSkrYV09PT1wJiZ1W3IrYS0xXT09PWMmJnVbcl09PT11W3NdJiZ1Wysrcl09PT11W3MrMV0pe3MrPTIscisrO2Rve313aGlsZSh1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmczxkKTtpZihpPVMtKGQtcykscz1kLVMsYTxpKXtpZih0Lm1hdGNoX3N0YXJ0PWUsbzw9KGE9aSkpYnJlYWs7Yz11W3MrYS0xXSxwPXVbcythXX19fXdoaWxlKChlPWZbZSZsXSk+aCYmMCE9LS1uKTtyZXR1cm4gYTw9dC5sb29rYWhlYWQ/YTp0Lmxvb2thaGVhZH1mdW5jdGlvbiBqKHQpe3ZhciBlLHIsaSxuLHMsYSxvLGgsdSxsLGY9dC53X3NpemU7ZG97aWYobj10LndpbmRvd19zaXplLXQubG9va2FoZWFkLXQuc3Ryc3RhcnQsdC5zdHJzdGFydD49ZisoZi16KSl7Zm9yKGQuYXJyYXlTZXQodC53aW5kb3csdC53aW5kb3csZixmLDApLHQubWF0Y2hfc3RhcnQtPWYsdC5zdHJzdGFydC09Zix0LmJsb2NrX3N0YXJ0LT1mLGU9cj10Lmhhc2hfc2l6ZTtpPXQuaGVhZFstLWVdLHQuaGVhZFtlXT1mPD1pP2ktZjowLC0tcjspO2ZvcihlPXI9ZjtpPXQucHJldlstLWVdLHQucHJldltlXT1mPD1pP2ktZjowLC0tcjspO24rPWZ9aWYoMD09PXQuc3RybS5hdmFpbF9pbilicmVhaztpZihhPXQuc3RybSxvPXQud2luZG93LGg9dC5zdHJzdGFydCt0Lmxvb2thaGVhZCx1PW4sbD12b2lkIDAsbD1hLmF2YWlsX2luLHU8bCYmKGw9dSkscj0wPT09bD8wOihhLmF2YWlsX2luLT1sLGQuYXJyYXlTZXQobyxhLmlucHV0LGEubmV4dF9pbixsLGgpLDE9PT1hLnN0YXRlLndyYXA/YS5hZGxlcj1jKGEuYWRsZXIsbyxsLGgpOjI9PT1hLnN0YXRlLndyYXAmJihhLmFkbGVyPXAoYS5hZGxlcixvLGwsaCkpLGEubmV4dF9pbis9bCxhLnRvdGFsX2luKz1sLGwpLHQubG9va2FoZWFkKz1yLHQubG9va2FoZWFkK3QuaW5zZXJ0Pj14KWZvcihzPXQuc3Ryc3RhcnQtdC5pbnNlcnQsdC5pbnNfaD10LndpbmRvd1tzXSx0Lmluc19oPSh0Lmluc19oPDx0Lmhhc2hfc2hpZnRedC53aW5kb3dbcysxXSkmdC5oYXNoX21hc2s7dC5pbnNlcnQmJih0Lmluc19oPSh0Lmluc19oPDx0Lmhhc2hfc2hpZnRedC53aW5kb3dbcyt4LTFdKSZ0Lmhhc2hfbWFzayx0LnByZXZbcyZ0LndfbWFza109dC5oZWFkW3QuaW5zX2hdLHQuaGVhZFt0Lmluc19oXT1zLHMrKyx0Lmluc2VydC0tLCEodC5sb29rYWhlYWQrdC5pbnNlcnQ8eCkpOyk7fXdoaWxlKHQubG9va2FoZWFkPHomJjAhPT10LnN0cm0uYXZhaWxfaW4pfWZ1bmN0aW9uIFoodCxlKXtmb3IodmFyIHIsaTs7KXtpZih0Lmxvb2thaGVhZDx6KXtpZihqKHQpLHQubG9va2FoZWFkPHomJmU9PT1sKXJldHVybiBBO2lmKDA9PT10Lmxvb2thaGVhZClicmVha31pZihyPTAsdC5sb29rYWhlYWQ+PXgmJih0Lmluc19oPSh0Lmluc19oPDx0Lmhhc2hfc2hpZnRedC53aW5kb3dbdC5zdHJzdGFydCt4LTFdKSZ0Lmhhc2hfbWFzayxyPXQucHJldlt0LnN0cnN0YXJ0JnQud19tYXNrXT10LmhlYWRbdC5pbnNfaF0sdC5oZWFkW3QuaW5zX2hdPXQuc3Ryc3RhcnQpLDAhPT1yJiZ0LnN0cnN0YXJ0LXI8PXQud19zaXplLXomJih0Lm1hdGNoX2xlbmd0aD1MKHQscikpLHQubWF0Y2hfbGVuZ3RoPj14KWlmKGk9dS5fdHJfdGFsbHkodCx0LnN0cnN0YXJ0LXQubWF0Y2hfc3RhcnQsdC5tYXRjaF9sZW5ndGgteCksdC5sb29rYWhlYWQtPXQubWF0Y2hfbGVuZ3RoLHQubWF0Y2hfbGVuZ3RoPD10Lm1heF9sYXp5X21hdGNoJiZ0Lmxvb2thaGVhZD49eCl7Zm9yKHQubWF0Y2hfbGVuZ3RoLS07dC5zdHJzdGFydCsrLHQuaW5zX2g9KHQuaW5zX2g8PHQuaGFzaF9zaGlmdF50LndpbmRvd1t0LnN0cnN0YXJ0K3gtMV0pJnQuaGFzaF9tYXNrLHI9dC5wcmV2W3Quc3Ryc3RhcnQmdC53X21hc2tdPXQuaGVhZFt0Lmluc19oXSx0LmhlYWRbdC5pbnNfaF09dC5zdHJzdGFydCwwIT0tLXQubWF0Y2hfbGVuZ3RoOyk7dC5zdHJzdGFydCsrfWVsc2UgdC5zdHJzdGFydCs9dC5tYXRjaF9sZW5ndGgsdC5tYXRjaF9sZW5ndGg9MCx0Lmluc19oPXQud2luZG93W3Quc3Ryc3RhcnRdLHQuaW5zX2g9KHQuaW5zX2g8PHQuaGFzaF9zaGlmdF50LndpbmRvd1t0LnN0cnN0YXJ0KzFdKSZ0Lmhhc2hfbWFzaztlbHNlIGk9dS5fdHJfdGFsbHkodCwwLHQud2luZG93W3Quc3Ryc3RhcnRdKSx0Lmxvb2thaGVhZC0tLHQuc3Ryc3RhcnQrKztpZihpJiYoTih0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9cmV0dXJuIHQuaW5zZXJ0PXQuc3Ryc3RhcnQ8eC0xP3Quc3Ryc3RhcnQ6eC0xLGU9PT1mPyhOKHQsITApLDA9PT10LnN0cm0uYXZhaWxfb3V0P086Qik6dC5sYXN0X2xpdCYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpP0E6SX1mdW5jdGlvbiBXKHQsZSl7Zm9yKHZhciByLGksbjs7KXtpZih0Lmxvb2thaGVhZDx6KXtpZihqKHQpLHQubG9va2FoZWFkPHomJmU9PT1sKXJldHVybiBBO2lmKDA9PT10Lmxvb2thaGVhZClicmVha31pZihyPTAsdC5sb29rYWhlYWQ+PXgmJih0Lmluc19oPSh0Lmluc19oPDx0Lmhhc2hfc2hpZnRedC53aW5kb3dbdC5zdHJzdGFydCt4LTFdKSZ0Lmhhc2hfbWFzayxyPXQucHJldlt0LnN0cnN0YXJ0JnQud19tYXNrXT10LmhlYWRbdC5pbnNfaF0sdC5oZWFkW3QuaW5zX2hdPXQuc3Ryc3RhcnQpLHQucHJldl9sZW5ndGg9dC5tYXRjaF9sZW5ndGgsdC5wcmV2X21hdGNoPXQubWF0Y2hfc3RhcnQsdC5tYXRjaF9sZW5ndGg9eC0xLDAhPT1yJiZ0LnByZXZfbGVuZ3RoPHQubWF4X2xhenlfbWF0Y2gmJnQuc3Ryc3RhcnQtcjw9dC53X3NpemUteiYmKHQubWF0Y2hfbGVuZ3RoPUwodCxyKSx0Lm1hdGNoX2xlbmd0aDw9NSYmKDE9PT10LnN0cmF0ZWd5fHx0Lm1hdGNoX2xlbmd0aD09PXgmJjQwOTY8dC5zdHJzdGFydC10Lm1hdGNoX3N0YXJ0KSYmKHQubWF0Y2hfbGVuZ3RoPXgtMSkpLHQucHJldl9sZW5ndGg+PXgmJnQubWF0Y2hfbGVuZ3RoPD10LnByZXZfbGVuZ3RoKXtmb3Iobj10LnN0cnN0YXJ0K3QubG9va2FoZWFkLXgsaT11Ll90cl90YWxseSh0LHQuc3Ryc3RhcnQtMS10LnByZXZfbWF0Y2gsdC5wcmV2X2xlbmd0aC14KSx0Lmxvb2thaGVhZC09dC5wcmV2X2xlbmd0aC0xLHQucHJldl9sZW5ndGgtPTI7Kyt0LnN0cnN0YXJ0PD1uJiYodC5pbnNfaD0odC5pbnNfaDw8dC5oYXNoX3NoaWZ0XnQud2luZG93W3Quc3Ryc3RhcnQreC0xXSkmdC5oYXNoX21hc2sscj10LnByZXZbdC5zdHJzdGFydCZ0LndfbWFza109dC5oZWFkW3QuaW5zX2hdLHQuaGVhZFt0Lmluc19oXT10LnN0cnN0YXJ0KSwwIT0tLXQucHJldl9sZW5ndGg7KTtpZih0Lm1hdGNoX2F2YWlsYWJsZT0wLHQubWF0Y2hfbGVuZ3RoPXgtMSx0LnN0cnN0YXJ0KyssaSYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfWVsc2UgaWYodC5tYXRjaF9hdmFpbGFibGUpe2lmKChpPXUuX3RyX3RhbGx5KHQsMCx0LndpbmRvd1t0LnN0cnN0YXJ0LTFdKSkmJk4odCwhMSksdC5zdHJzdGFydCsrLHQubG9va2FoZWFkLS0sMD09PXQuc3RybS5hdmFpbF9vdXQpcmV0dXJuIEF9ZWxzZSB0Lm1hdGNoX2F2YWlsYWJsZT0xLHQuc3Ryc3RhcnQrKyx0Lmxvb2thaGVhZC0tfXJldHVybiB0Lm1hdGNoX2F2YWlsYWJsZSYmKGk9dS5fdHJfdGFsbHkodCwwLHQud2luZG93W3Quc3Ryc3RhcnQtMV0pLHQubWF0Y2hfYXZhaWxhYmxlPTApLHQuaW5zZXJ0PXQuc3Ryc3RhcnQ8eC0xP3Quc3Ryc3RhcnQ6eC0xLGU9PT1mPyhOKHQsITApLDA9PT10LnN0cm0uYXZhaWxfb3V0P086Qik6dC5sYXN0X2xpdCYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpP0E6SX1mdW5jdGlvbiBNKHQsZSxyLGksbil7dGhpcy5nb29kX2xlbmd0aD10LHRoaXMubWF4X2xhenk9ZSx0aGlzLm5pY2VfbGVuZ3RoPXIsdGhpcy5tYXhfY2hhaW49aSx0aGlzLmZ1bmM9bn1mdW5jdGlvbiBIKCl7dGhpcy5zdHJtPW51bGwsdGhpcy5zdGF0dXM9MCx0aGlzLnBlbmRpbmdfYnVmPW51bGwsdGhpcy5wZW5kaW5nX2J1Zl9zaXplPTAsdGhpcy5wZW5kaW5nX291dD0wLHRoaXMucGVuZGluZz0wLHRoaXMud3JhcD0wLHRoaXMuZ3poZWFkPW51bGwsdGhpcy5nemluZGV4PTAsdGhpcy5tZXRob2Q9dix0aGlzLmxhc3RfZmx1c2g9LTEsdGhpcy53X3NpemU9MCx0aGlzLndfYml0cz0wLHRoaXMud19tYXNrPTAsdGhpcy53aW5kb3c9bnVsbCx0aGlzLndpbmRvd19zaXplPTAsdGhpcy5wcmV2PW51bGwsdGhpcy5oZWFkPW51bGwsdGhpcy5pbnNfaD0wLHRoaXMuaGFzaF9zaXplPTAsdGhpcy5oYXNoX2JpdHM9MCx0aGlzLmhhc2hfbWFzaz0wLHRoaXMuaGFzaF9zaGlmdD0wLHRoaXMuYmxvY2tfc3RhcnQ9MCx0aGlzLm1hdGNoX2xlbmd0aD0wLHRoaXMucHJldl9tYXRjaD0wLHRoaXMubWF0Y2hfYXZhaWxhYmxlPTAsdGhpcy5zdHJzdGFydD0wLHRoaXMubWF0Y2hfc3RhcnQ9MCx0aGlzLmxvb2thaGVhZD0wLHRoaXMucHJldl9sZW5ndGg9MCx0aGlzLm1heF9jaGFpbl9sZW5ndGg9MCx0aGlzLm1heF9sYXp5X21hdGNoPTAsdGhpcy5sZXZlbD0wLHRoaXMuc3RyYXRlZ3k9MCx0aGlzLmdvb2RfbWF0Y2g9MCx0aGlzLm5pY2VfbWF0Y2g9MCx0aGlzLmR5bl9sdHJlZT1uZXcgZC5CdWYxNigyKncpLHRoaXMuZHluX2R0cmVlPW5ldyBkLkJ1ZjE2KDIqKDIqYSsxKSksdGhpcy5ibF90cmVlPW5ldyBkLkJ1ZjE2KDIqKDIqbysxKSksRCh0aGlzLmR5bl9sdHJlZSksRCh0aGlzLmR5bl9kdHJlZSksRCh0aGlzLmJsX3RyZWUpLHRoaXMubF9kZXNjPW51bGwsdGhpcy5kX2Rlc2M9bnVsbCx0aGlzLmJsX2Rlc2M9bnVsbCx0aGlzLmJsX2NvdW50PW5ldyBkLkJ1ZjE2KGsrMSksdGhpcy5oZWFwPW5ldyBkLkJ1ZjE2KDIqcysxKSxEKHRoaXMuaGVhcCksdGhpcy5oZWFwX2xlbj0wLHRoaXMuaGVhcF9tYXg9MCx0aGlzLmRlcHRoPW5ldyBkLkJ1ZjE2KDIqcysxKSxEKHRoaXMuZGVwdGgpLHRoaXMubF9idWY9MCx0aGlzLmxpdF9idWZzaXplPTAsdGhpcy5sYXN0X2xpdD0wLHRoaXMuZF9idWY9MCx0aGlzLm9wdF9sZW49MCx0aGlzLnN0YXRpY19sZW49MCx0aGlzLm1hdGNoZXM9MCx0aGlzLmluc2VydD0wLHRoaXMuYmlfYnVmPTAsdGhpcy5iaV92YWxpZD0wfWZ1bmN0aW9uIEcodCl7dmFyIGU7cmV0dXJuIHQmJnQuc3RhdGU/KHQudG90YWxfaW49dC50b3RhbF9vdXQ9MCx0LmRhdGFfdHlwZT1uLChlPXQuc3RhdGUpLnBlbmRpbmc9MCxlLnBlbmRpbmdfb3V0PTAsZS53cmFwPDAmJihlLndyYXA9LWUud3JhcCksZS5zdGF0dXM9ZS53cmFwP0M6RSx0LmFkbGVyPTI9PT1lLndyYXA/MDoxLGUubGFzdF9mbHVzaD1sLHUuX3RyX2luaXQoZSksbSk6Uih0LF8pfWZ1bmN0aW9uIEsodCl7dmFyIGU9Ryh0KTtyZXR1cm4gZT09PW0mJmZ1bmN0aW9uKHQpe3Qud2luZG93X3NpemU9Mip0Lndfc2l6ZSxEKHQuaGVhZCksdC5tYXhfbGF6eV9tYXRjaD1oW3QubGV2ZWxdLm1heF9sYXp5LHQuZ29vZF9tYXRjaD1oW3QubGV2ZWxdLmdvb2RfbGVuZ3RoLHQubmljZV9tYXRjaD1oW3QubGV2ZWxdLm5pY2VfbGVuZ3RoLHQubWF4X2NoYWluX2xlbmd0aD1oW3QubGV2ZWxdLm1heF9jaGFpbix0LnN0cnN0YXJ0PTAsdC5ibG9ja19zdGFydD0wLHQubG9va2FoZWFkPTAsdC5pbnNlcnQ9MCx0Lm1hdGNoX2xlbmd0aD10LnByZXZfbGVuZ3RoPXgtMSx0Lm1hdGNoX2F2YWlsYWJsZT0wLHQuaW5zX2g9MH0odC5zdGF0ZSksZX1mdW5jdGlvbiBZKHQsZSxyLGksbixzKXtpZighdClyZXR1cm4gXzt2YXIgYT0xO2lmKGU9PT1nJiYoZT02KSxpPDA/KGE9MCxpPS1pKToxNTxpJiYoYT0yLGktPTE2KSxuPDF8fHk8bnx8ciE9PXZ8fGk8OHx8MTU8aXx8ZTwwfHw5PGV8fHM8MHx8YjxzKXJldHVybiBSKHQsXyk7OD09PWkmJihpPTkpO3ZhciBvPW5ldyBIO3JldHVybih0LnN0YXRlPW8pLnN0cm09dCxvLndyYXA9YSxvLmd6aGVhZD1udWxsLG8ud19iaXRzPWksby53X3NpemU9MTw8by53X2JpdHMsby53X21hc2s9by53X3NpemUtMSxvLmhhc2hfYml0cz1uKzcsby5oYXNoX3NpemU9MTw8by5oYXNoX2JpdHMsby5oYXNoX21hc2s9by5oYXNoX3NpemUtMSxvLmhhc2hfc2hpZnQ9fn4oKG8uaGFzaF9iaXRzK3gtMSkveCksby53aW5kb3c9bmV3IGQuQnVmOCgyKm8ud19zaXplKSxvLmhlYWQ9bmV3IGQuQnVmMTYoby5oYXNoX3NpemUpLG8ucHJldj1uZXcgZC5CdWYxNihvLndfc2l6ZSksby5saXRfYnVmc2l6ZT0xPDxuKzYsby5wZW5kaW5nX2J1Zl9zaXplPTQqby5saXRfYnVmc2l6ZSxvLnBlbmRpbmdfYnVmPW5ldyBkLkJ1Zjgoby5wZW5kaW5nX2J1Zl9zaXplKSxvLmRfYnVmPTEqby5saXRfYnVmc2l6ZSxvLmxfYnVmPTMqby5saXRfYnVmc2l6ZSxvLmxldmVsPWUsby5zdHJhdGVneT1zLG8ubWV0aG9kPXIsSyh0KX1oPVtuZXcgTSgwLDAsMCwwLGZ1bmN0aW9uKHQsZSl7dmFyIHI9NjU1MzU7Zm9yKHI+dC5wZW5kaW5nX2J1Zl9zaXplLTUmJihyPXQucGVuZGluZ19idWZfc2l6ZS01KTs7KXtpZih0Lmxvb2thaGVhZDw9MSl7aWYoaih0KSwwPT09dC5sb29rYWhlYWQmJmU9PT1sKXJldHVybiBBO2lmKDA9PT10Lmxvb2thaGVhZClicmVha310LnN0cnN0YXJ0Kz10Lmxvb2thaGVhZCx0Lmxvb2thaGVhZD0wO3ZhciBpPXQuYmxvY2tfc3RhcnQrcjtpZigoMD09PXQuc3Ryc3RhcnR8fHQuc3Ryc3RhcnQ+PWkpJiYodC5sb29rYWhlYWQ9dC5zdHJzdGFydC1pLHQuc3Ryc3RhcnQ9aSxOKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQTtpZih0LnN0cnN0YXJ0LXQuYmxvY2tfc3RhcnQ+PXQud19zaXplLXomJihOKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1yZXR1cm4gdC5pbnNlcnQ9MCxlPT09Zj8oTih0LCEwKSwwPT09dC5zdHJtLmF2YWlsX291dD9POkIpOih0LnN0cnN0YXJ0PnQuYmxvY2tfc3RhcnQmJihOKHQsITEpLHQuc3RybS5hdmFpbF9vdXQpLEEpfSksbmV3IE0oNCw0LDgsNCxaKSxuZXcgTSg0LDUsMTYsOCxaKSxuZXcgTSg0LDYsMzIsMzIsWiksbmV3IE0oNCw0LDE2LDE2LFcpLG5ldyBNKDgsMTYsMzIsMzIsVyksbmV3IE0oOCwxNiwxMjgsMTI4LFcpLG5ldyBNKDgsMzIsMTI4LDI1NixXKSxuZXcgTSgzMiwxMjgsMjU4LDEwMjQsVyksbmV3IE0oMzIsMjU4LDI1OCw0MDk2LFcpXSxyLmRlZmxhdGVJbml0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIFkodCxlLHYsMTUsOCwwKX0sci5kZWZsYXRlSW5pdDI9WSxyLmRlZmxhdGVSZXNldD1LLHIuZGVmbGF0ZVJlc2V0S2VlcD1HLHIuZGVmbGF0ZVNldEhlYWRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB0JiZ0LnN0YXRlPzIhPT10LnN0YXRlLndyYXA/XzoodC5zdGF0ZS5nemhlYWQ9ZSxtKTpffSxyLmRlZmxhdGU9ZnVuY3Rpb24odCxlKXt2YXIgcixpLG4scztpZighdHx8IXQuc3RhdGV8fDU8ZXx8ZTwwKXJldHVybiB0P1IodCxfKTpfO2lmKGk9dC5zdGF0ZSwhdC5vdXRwdXR8fCF0LmlucHV0JiYwIT09dC5hdmFpbF9pbnx8NjY2PT09aS5zdGF0dXMmJmUhPT1mKXJldHVybiBSKHQsMD09PXQuYXZhaWxfb3V0Py01Ol8pO2lmKGkuc3RybT10LHI9aS5sYXN0X2ZsdXNoLGkubGFzdF9mbHVzaD1lLGkuc3RhdHVzPT09QylpZigyPT09aS53cmFwKXQuYWRsZXI9MCxVKGksMzEpLFUoaSwxMzkpLFUoaSw4KSxpLmd6aGVhZD8oVShpLChpLmd6aGVhZC50ZXh0PzE6MCkrKGkuZ3poZWFkLmhjcmM/MjowKSsoaS5nemhlYWQuZXh0cmE/NDowKSsoaS5nemhlYWQubmFtZT84OjApKyhpLmd6aGVhZC5jb21tZW50PzE2OjApKSxVKGksMjU1JmkuZ3poZWFkLnRpbWUpLFUoaSxpLmd6aGVhZC50aW1lPj44JjI1NSksVShpLGkuZ3poZWFkLnRpbWU+PjE2JjI1NSksVShpLGkuZ3poZWFkLnRpbWU+PjI0JjI1NSksVShpLDk9PT1pLmxldmVsPzI6Mjw9aS5zdHJhdGVneXx8aS5sZXZlbDwyPzQ6MCksVShpLDI1NSZpLmd6aGVhZC5vcyksaS5nemhlYWQuZXh0cmEmJmkuZ3poZWFkLmV4dHJhLmxlbmd0aCYmKFUoaSwyNTUmaS5nemhlYWQuZXh0cmEubGVuZ3RoKSxVKGksaS5nemhlYWQuZXh0cmEubGVuZ3RoPj44JjI1NSkpLGkuZ3poZWFkLmhjcmMmJih0LmFkbGVyPXAodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZywwKSksaS5nemluZGV4PTAsaS5zdGF0dXM9NjkpOihVKGksMCksVShpLDApLFUoaSwwKSxVKGksMCksVShpLDApLFUoaSw5PT09aS5sZXZlbD8yOjI8PWkuc3RyYXRlZ3l8fGkubGV2ZWw8Mj80OjApLFUoaSwzKSxpLnN0YXR1cz1FKTtlbHNle3ZhciBhPXYrKGkud19iaXRzLTg8PDQpPDw4O2F8PSgyPD1pLnN0cmF0ZWd5fHxpLmxldmVsPDI/MDppLmxldmVsPDY/MTo2PT09aS5sZXZlbD8yOjMpPDw2LDAhPT1pLnN0cnN0YXJ0JiYoYXw9MzIpLGErPTMxLWElMzEsaS5zdGF0dXM9RSxQKGksYSksMCE9PWkuc3Ryc3RhcnQmJihQKGksdC5hZGxlcj4+PjE2KSxQKGksNjU1MzUmdC5hZGxlcikpLHQuYWRsZXI9MX1pZig2OT09PWkuc3RhdHVzKWlmKGkuZ3poZWFkLmV4dHJhKXtmb3Iobj1pLnBlbmRpbmc7aS5nemluZGV4PCg2NTUzNSZpLmd6aGVhZC5leHRyYS5sZW5ndGgpJiYoaS5wZW5kaW5nIT09aS5wZW5kaW5nX2J1Zl9zaXplfHwoaS5nemhlYWQuaGNyYyYmaS5wZW5kaW5nPm4mJih0LmFkbGVyPXAodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZy1uLG4pKSxGKHQpLG49aS5wZW5kaW5nLGkucGVuZGluZyE9PWkucGVuZGluZ19idWZfc2l6ZSkpOylVKGksMjU1JmkuZ3poZWFkLmV4dHJhW2kuZ3ppbmRleF0pLGkuZ3ppbmRleCsrO2kuZ3poZWFkLmhjcmMmJmkucGVuZGluZz5uJiYodC5hZGxlcj1wKHQuYWRsZXIsaS5wZW5kaW5nX2J1ZixpLnBlbmRpbmctbixuKSksaS5nemluZGV4PT09aS5nemhlYWQuZXh0cmEubGVuZ3RoJiYoaS5nemluZGV4PTAsaS5zdGF0dXM9NzMpfWVsc2UgaS5zdGF0dXM9NzM7aWYoNzM9PT1pLnN0YXR1cylpZihpLmd6aGVhZC5uYW1lKXtuPWkucGVuZGluZztkb3tpZihpLnBlbmRpbmc9PT1pLnBlbmRpbmdfYnVmX3NpemUmJihpLmd6aGVhZC5oY3JjJiZpLnBlbmRpbmc+biYmKHQuYWRsZXI9cCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLW4sbikpLEYodCksbj1pLnBlbmRpbmcsaS5wZW5kaW5nPT09aS5wZW5kaW5nX2J1Zl9zaXplKSl7cz0xO2JyZWFrfXM9aS5nemluZGV4PGkuZ3poZWFkLm5hbWUubGVuZ3RoPzI1NSZpLmd6aGVhZC5uYW1lLmNoYXJDb2RlQXQoaS5nemluZGV4KyspOjAsVShpLHMpfXdoaWxlKDAhPT1zKTtpLmd6aGVhZC5oY3JjJiZpLnBlbmRpbmc+biYmKHQuYWRsZXI9cCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLW4sbikpLDA9PT1zJiYoaS5nemluZGV4PTAsaS5zdGF0dXM9OTEpfWVsc2UgaS5zdGF0dXM9OTE7aWYoOTE9PT1pLnN0YXR1cylpZihpLmd6aGVhZC5jb21tZW50KXtuPWkucGVuZGluZztkb3tpZihpLnBlbmRpbmc9PT1pLnBlbmRpbmdfYnVmX3NpemUmJihpLmd6aGVhZC5oY3JjJiZpLnBlbmRpbmc+biYmKHQuYWRsZXI9cCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLW4sbikpLEYodCksbj1pLnBlbmRpbmcsaS5wZW5kaW5nPT09aS5wZW5kaW5nX2J1Zl9zaXplKSl7cz0xO2JyZWFrfXM9aS5nemluZGV4PGkuZ3poZWFkLmNvbW1lbnQubGVuZ3RoPzI1NSZpLmd6aGVhZC5jb21tZW50LmNoYXJDb2RlQXQoaS5nemluZGV4KyspOjAsVShpLHMpfXdoaWxlKDAhPT1zKTtpLmd6aGVhZC5oY3JjJiZpLnBlbmRpbmc+biYmKHQuYWRsZXI9cCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLW4sbikpLDA9PT1zJiYoaS5zdGF0dXM9MTAzKX1lbHNlIGkuc3RhdHVzPTEwMztpZigxMDM9PT1pLnN0YXR1cyYmKGkuZ3poZWFkLmhjcmM/KGkucGVuZGluZysyPmkucGVuZGluZ19idWZfc2l6ZSYmRih0KSxpLnBlbmRpbmcrMjw9aS5wZW5kaW5nX2J1Zl9zaXplJiYoVShpLDI1NSZ0LmFkbGVyKSxVKGksdC5hZGxlcj4+OCYyNTUpLHQuYWRsZXI9MCxpLnN0YXR1cz1FKSk6aS5zdGF0dXM9RSksMCE9PWkucGVuZGluZyl7aWYoRih0KSwwPT09dC5hdmFpbF9vdXQpcmV0dXJuIGkubGFzdF9mbHVzaD0tMSxtfWVsc2UgaWYoMD09PXQuYXZhaWxfaW4mJlQoZSk8PVQocikmJmUhPT1mKXJldHVybiBSKHQsLTUpO2lmKDY2Nj09PWkuc3RhdHVzJiYwIT09dC5hdmFpbF9pbilyZXR1cm4gUih0LC01KTtpZigwIT09dC5hdmFpbF9pbnx8MCE9PWkubG9va2FoZWFkfHxlIT09bCYmNjY2IT09aS5zdGF0dXMpe3ZhciBvPTI9PT1pLnN0cmF0ZWd5P2Z1bmN0aW9uKHQsZSl7Zm9yKHZhciByOzspe2lmKDA9PT10Lmxvb2thaGVhZCYmKGoodCksMD09PXQubG9va2FoZWFkKSl7aWYoZT09PWwpcmV0dXJuIEE7YnJlYWt9aWYodC5tYXRjaF9sZW5ndGg9MCxyPXUuX3RyX3RhbGx5KHQsMCx0LndpbmRvd1t0LnN0cnN0YXJ0XSksdC5sb29rYWhlYWQtLSx0LnN0cnN0YXJ0KyssciYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfXJldHVybiB0Lmluc2VydD0wLGU9PT1mPyhOKHQsITApLDA9PT10LnN0cm0uYXZhaWxfb3V0P086Qik6dC5sYXN0X2xpdCYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpP0E6SX0oaSxlKTozPT09aS5zdHJhdGVneT9mdW5jdGlvbih0LGUpe2Zvcih2YXIgcixpLG4scyxhPXQud2luZG93Ozspe2lmKHQubG9va2FoZWFkPD1TKXtpZihqKHQpLHQubG9va2FoZWFkPD1TJiZlPT09bClyZXR1cm4gQTtpZigwPT09dC5sb29rYWhlYWQpYnJlYWt9aWYodC5tYXRjaF9sZW5ndGg9MCx0Lmxvb2thaGVhZD49eCYmMDx0LnN0cnN0YXJ0JiYoaT1hW249dC5zdHJzdGFydC0xXSk9PT1hWysrbl0mJmk9PT1hWysrbl0mJmk9PT1hWysrbl0pe3M9dC5zdHJzdGFydCtTO2Rve313aGlsZShpPT09YVsrK25dJiZpPT09YVsrK25dJiZpPT09YVsrK25dJiZpPT09YVsrK25dJiZpPT09YVsrK25dJiZpPT09YVsrK25dJiZpPT09YVsrK25dJiZpPT09YVsrK25dJiZuPHMpO3QubWF0Y2hfbGVuZ3RoPVMtKHMtbiksdC5tYXRjaF9sZW5ndGg+dC5sb29rYWhlYWQmJih0Lm1hdGNoX2xlbmd0aD10Lmxvb2thaGVhZCl9aWYodC5tYXRjaF9sZW5ndGg+PXg/KHI9dS5fdHJfdGFsbHkodCwxLHQubWF0Y2hfbGVuZ3RoLXgpLHQubG9va2FoZWFkLT10Lm1hdGNoX2xlbmd0aCx0LnN0cnN0YXJ0Kz10Lm1hdGNoX2xlbmd0aCx0Lm1hdGNoX2xlbmd0aD0wKToocj11Ll90cl90YWxseSh0LDAsdC53aW5kb3dbdC5zdHJzdGFydF0pLHQubG9va2FoZWFkLS0sdC5zdHJzdGFydCsrKSxyJiYoTih0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9cmV0dXJuIHQuaW5zZXJ0PTAsZT09PWY/KE4odCwhMCksMD09PXQuc3RybS5hdmFpbF9vdXQ/TzpCKTp0Lmxhc3RfbGl0JiYoTih0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCk/QTpJfShpLGUpOmhbaS5sZXZlbF0uZnVuYyhpLGUpO2lmKG8hPT1PJiZvIT09Qnx8KGkuc3RhdHVzPTY2Niksbz09PUF8fG89PT1PKXJldHVybiAwPT09dC5hdmFpbF9vdXQmJihpLmxhc3RfZmx1c2g9LTEpLG07aWYobz09PUkmJigxPT09ZT91Ll90cl9hbGlnbihpKTo1IT09ZSYmKHUuX3RyX3N0b3JlZF9ibG9jayhpLDAsMCwhMSksMz09PWUmJihEKGkuaGVhZCksMD09PWkubG9va2FoZWFkJiYoaS5zdHJzdGFydD0wLGkuYmxvY2tfc3RhcnQ9MCxpLmluc2VydD0wKSkpLEYodCksMD09PXQuYXZhaWxfb3V0KSlyZXR1cm4gaS5sYXN0X2ZsdXNoPS0xLG19cmV0dXJuIGUhPT1mP206aS53cmFwPD0wPzE6KDI9PT1pLndyYXA/KFUoaSwyNTUmdC5hZGxlciksVShpLHQuYWRsZXI+PjgmMjU1KSxVKGksdC5hZGxlcj4+MTYmMjU1KSxVKGksdC5hZGxlcj4+MjQmMjU1KSxVKGksMjU1JnQudG90YWxfaW4pLFUoaSx0LnRvdGFsX2luPj44JjI1NSksVShpLHQudG90YWxfaW4+PjE2JjI1NSksVShpLHQudG90YWxfaW4+PjI0JjI1NSkpOihQKGksdC5hZGxlcj4+PjE2KSxQKGksNjU1MzUmdC5hZGxlcikpLEYodCksMDxpLndyYXAmJihpLndyYXA9LWkud3JhcCksMCE9PWkucGVuZGluZz9tOjEpfSxyLmRlZmxhdGVFbmQ9ZnVuY3Rpb24odCl7dmFyIGU7cmV0dXJuIHQmJnQuc3RhdGU/KGU9dC5zdGF0ZS5zdGF0dXMpIT09QyYmNjkhPT1lJiY3MyE9PWUmJjkxIT09ZSYmMTAzIT09ZSYmZSE9PUUmJjY2NiE9PWU/Uih0LF8pOih0LnN0YXRlPW51bGwsZT09PUU/Uih0LC0zKTptKTpffSxyLmRlZmxhdGVTZXREaWN0aW9uYXJ5PWZ1bmN0aW9uKHQsZSl7dmFyIHIsaSxuLHMsYSxvLGgsdSxsPWUubGVuZ3RoO2lmKCF0fHwhdC5zdGF0ZSlyZXR1cm4gXztpZigyPT09KHM9KHI9dC5zdGF0ZSkud3JhcCl8fDE9PT1zJiZyLnN0YXR1cyE9PUN8fHIubG9va2FoZWFkKXJldHVybiBfO2ZvcigxPT09cyYmKHQuYWRsZXI9Yyh0LmFkbGVyLGUsbCwwKSksci53cmFwPTAsbD49ci53X3NpemUmJigwPT09cyYmKEQoci5oZWFkKSxyLnN0cnN0YXJ0PTAsci5ibG9ja19zdGFydD0wLHIuaW5zZXJ0PTApLHU9bmV3IGQuQnVmOChyLndfc2l6ZSksZC5hcnJheVNldCh1LGUsbC1yLndfc2l6ZSxyLndfc2l6ZSwwKSxlPXUsbD1yLndfc2l6ZSksYT10LmF2YWlsX2luLG89dC5uZXh0X2luLGg9dC5pbnB1dCx0LmF2YWlsX2luPWwsdC5uZXh0X2luPTAsdC5pbnB1dD1lLGoocik7ci5sb29rYWhlYWQ+PXg7KXtmb3IoaT1yLnN0cnN0YXJ0LG49ci5sb29rYWhlYWQtKHgtMSk7ci5pbnNfaD0oci5pbnNfaDw8ci5oYXNoX3NoaWZ0XnIud2luZG93W2kreC0xXSkmci5oYXNoX21hc2ssci5wcmV2W2kmci53X21hc2tdPXIuaGVhZFtyLmluc19oXSxyLmhlYWRbci5pbnNfaF09aSxpKyssLS1uOyk7ci5zdHJzdGFydD1pLHIubG9va2FoZWFkPXgtMSxqKHIpfXJldHVybiByLnN0cnN0YXJ0Kz1yLmxvb2thaGVhZCxyLmJsb2NrX3N0YXJ0PXIuc3Ryc3RhcnQsci5pbnNlcnQ9ci5sb29rYWhlYWQsci5sb29rYWhlYWQ9MCxyLm1hdGNoX2xlbmd0aD1yLnByZXZfbGVuZ3RoPXgtMSxyLm1hdGNoX2F2YWlsYWJsZT0wLHQubmV4dF9pbj1vLHQuaW5wdXQ9aCx0LmF2YWlsX2luPWEsci53cmFwPXMsbX0sci5kZWZsYXRlSW5mbz1cInBha28gZGVmbGF0ZSAoZnJvbSBOb2RlY2EgcHJvamVjdClcIn0se1wiLi4vdXRpbHMvY29tbW9uXCI6NDEsXCIuL2FkbGVyMzJcIjo0MyxcIi4vY3JjMzJcIjo0NSxcIi4vbWVzc2FnZXNcIjo1MSxcIi4vdHJlZXNcIjo1Mn1dLDQ3OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dGhpcy50ZXh0PTAsdGhpcy50aW1lPTAsdGhpcy54ZmxhZ3M9MCx0aGlzLm9zPTAsdGhpcy5leHRyYT1udWxsLHRoaXMuZXh0cmFfbGVuPTAsdGhpcy5uYW1lPVwiXCIsdGhpcy5jb21tZW50PVwiXCIsdGhpcy5oY3JjPTAsdGhpcy5kb25lPSExfX0se31dLDQ4OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7dmFyIHIsaSxuLHMsYSxvLGgsdSxsLGYsZCxjLHAsbSxfLGcsYix2LHksdyxrLHgsUyx6LEM7cj10LnN0YXRlLGk9dC5uZXh0X2luLHo9dC5pbnB1dCxuPWkrKHQuYXZhaWxfaW4tNSkscz10Lm5leHRfb3V0LEM9dC5vdXRwdXQsYT1zLShlLXQuYXZhaWxfb3V0KSxvPXMrKHQuYXZhaWxfb3V0LTI1NyksaD1yLmRtYXgsdT1yLndzaXplLGw9ci53aGF2ZSxmPXIud25leHQsZD1yLndpbmRvdyxjPXIuaG9sZCxwPXIuYml0cyxtPXIubGVuY29kZSxfPXIuZGlzdGNvZGUsZz0oMTw8ci5sZW5iaXRzKS0xLGI9KDE8PHIuZGlzdGJpdHMpLTE7dDpkb3twPDE1JiYoYys9eltpKytdPDxwLHArPTgsYys9eltpKytdPDxwLHArPTgpLHY9bVtjJmddO2U6Zm9yKDs7KXtpZihjPj4+PXk9dj4+PjI0LHAtPXksMD09PSh5PXY+Pj4xNiYyNTUpKUNbcysrXT02NTUzNSZ2O2Vsc2V7aWYoISgxNiZ5KSl7aWYoMD09KDY0JnkpKXt2PW1bKDY1NTM1JnYpKyhjJigxPDx5KS0xKV07Y29udGludWUgZX1pZigzMiZ5KXtyLm1vZGU9MTI7YnJlYWsgdH10Lm1zZz1cImludmFsaWQgbGl0ZXJhbC9sZW5ndGggY29kZVwiLHIubW9kZT0zMDticmVhayB0fXc9NjU1MzUmdiwoeSY9MTUpJiYocDx5JiYoYys9eltpKytdPDxwLHArPTgpLHcrPWMmKDE8PHkpLTEsYz4+Pj15LHAtPXkpLHA8MTUmJihjKz16W2krK108PHAscCs9OCxjKz16W2krK108PHAscCs9OCksdj1fW2MmYl07cjpmb3IoOzspe2lmKGM+Pj49eT12Pj4+MjQscC09eSwhKDE2Jih5PXY+Pj4xNiYyNTUpKSl7aWYoMD09KDY0JnkpKXt2PV9bKDY1NTM1JnYpKyhjJigxPDx5KS0xKV07Y29udGludWUgcn10Lm1zZz1cImludmFsaWQgZGlzdGFuY2UgY29kZVwiLHIubW9kZT0zMDticmVhayB0fWlmKGs9NjU1MzUmdixwPCh5Jj0xNSkmJihjKz16W2krK108PHAsKHArPTgpPHkmJihjKz16W2krK108PHAscCs9OCkpLGg8KGsrPWMmKDE8PHkpLTEpKXt0Lm1zZz1cImludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrXCIsci5tb2RlPTMwO2JyZWFrIHR9aWYoYz4+Pj15LHAtPXksKHk9cy1hKTxrKXtpZihsPCh5PWsteSkmJnIuc2FuZSl7dC5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFja1wiLHIubW9kZT0zMDticmVhayB0fWlmKFM9ZCwoeD0wKT09PWYpe2lmKHgrPXUteSx5PHcpe2Zvcih3LT15O0NbcysrXT1kW3grK10sLS15Oyk7eD1zLWssUz1DfX1lbHNlIGlmKGY8eSl7aWYoeCs9dStmLXksKHktPWYpPHcpe2Zvcih3LT15O0NbcysrXT1kW3grK10sLS15Oyk7aWYoeD0wLGY8dyl7Zm9yKHctPXk9ZjtDW3MrK109ZFt4KytdLC0teTspO3g9cy1rLFM9Q319fWVsc2UgaWYoeCs9Zi15LHk8dyl7Zm9yKHctPXk7Q1tzKytdPWRbeCsrXSwtLXk7KTt4PXMtayxTPUN9Zm9yKDsyPHc7KUNbcysrXT1TW3grK10sQ1tzKytdPVNbeCsrXSxDW3MrK109U1t4KytdLHctPTM7dyYmKENbcysrXT1TW3grK10sMTx3JiYoQ1tzKytdPVNbeCsrXSkpfWVsc2V7Zm9yKHg9cy1rO0NbcysrXT1DW3grK10sQ1tzKytdPUNbeCsrXSxDW3MrK109Q1t4KytdLDI8KHctPTMpOyk7dyYmKENbcysrXT1DW3grK10sMTx3JiYoQ1tzKytdPUNbeCsrXSkpfWJyZWFrfX1icmVha319d2hpbGUoaTxuJiZzPG8pO2ktPXc9cD4+MyxjJj0oMTw8KHAtPXc8PDMpKS0xLHQubmV4dF9pbj1pLHQubmV4dF9vdXQ9cyx0LmF2YWlsX2luPWk8bj9uLWkrNTo1LShpLW4pLHQuYXZhaWxfb3V0PXM8bz9vLXMrMjU3OjI1Ny0ocy1vKSxyLmhvbGQ9YyxyLmJpdHM9cH19LHt9XSw0OTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBJPXQoXCIuLi91dGlscy9jb21tb25cIiksTz10KFwiLi9hZGxlcjMyXCIpLEI9dChcIi4vY3JjMzJcIiksUj10KFwiLi9pbmZmYXN0XCIpLFQ9dChcIi4vaW5mdHJlZXNcIiksRD0xLEY9MixOPTAsVT0tMixQPTEsaT04NTIsbj01OTI7ZnVuY3Rpb24gTCh0KXtyZXR1cm4odD4+PjI0JjI1NSkrKHQ+Pj44JjY1MjgwKSsoKDY1MjgwJnQpPDw4KSsoKDI1NSZ0KTw8MjQpfWZ1bmN0aW9uIHMoKXt0aGlzLm1vZGU9MCx0aGlzLmxhc3Q9ITEsdGhpcy53cmFwPTAsdGhpcy5oYXZlZGljdD0hMSx0aGlzLmZsYWdzPTAsdGhpcy5kbWF4PTAsdGhpcy5jaGVjaz0wLHRoaXMudG90YWw9MCx0aGlzLmhlYWQ9bnVsbCx0aGlzLndiaXRzPTAsdGhpcy53c2l6ZT0wLHRoaXMud2hhdmU9MCx0aGlzLnduZXh0PTAsdGhpcy53aW5kb3c9bnVsbCx0aGlzLmhvbGQ9MCx0aGlzLmJpdHM9MCx0aGlzLmxlbmd0aD0wLHRoaXMub2Zmc2V0PTAsdGhpcy5leHRyYT0wLHRoaXMubGVuY29kZT1udWxsLHRoaXMuZGlzdGNvZGU9bnVsbCx0aGlzLmxlbmJpdHM9MCx0aGlzLmRpc3RiaXRzPTAsdGhpcy5uY29kZT0wLHRoaXMubmxlbj0wLHRoaXMubmRpc3Q9MCx0aGlzLmhhdmU9MCx0aGlzLm5leHQ9bnVsbCx0aGlzLmxlbnM9bmV3IEkuQnVmMTYoMzIwKSx0aGlzLndvcms9bmV3IEkuQnVmMTYoMjg4KSx0aGlzLmxlbmR5bj1udWxsLHRoaXMuZGlzdGR5bj1udWxsLHRoaXMuc2FuZT0wLHRoaXMuYmFjaz0wLHRoaXMud2FzPTB9ZnVuY3Rpb24gYSh0KXt2YXIgZTtyZXR1cm4gdCYmdC5zdGF0ZT8oZT10LnN0YXRlLHQudG90YWxfaW49dC50b3RhbF9vdXQ9ZS50b3RhbD0wLHQubXNnPVwiXCIsZS53cmFwJiYodC5hZGxlcj0xJmUud3JhcCksZS5tb2RlPVAsZS5sYXN0PTAsZS5oYXZlZGljdD0wLGUuZG1heD0zMjc2OCxlLmhlYWQ9bnVsbCxlLmhvbGQ9MCxlLmJpdHM9MCxlLmxlbmNvZGU9ZS5sZW5keW49bmV3IEkuQnVmMzIoaSksZS5kaXN0Y29kZT1lLmRpc3RkeW49bmV3IEkuQnVmMzIobiksZS5zYW5lPTEsZS5iYWNrPS0xLE4pOlV9ZnVuY3Rpb24gbyh0KXt2YXIgZTtyZXR1cm4gdCYmdC5zdGF0ZT8oKGU9dC5zdGF0ZSkud3NpemU9MCxlLndoYXZlPTAsZS53bmV4dD0wLGEodCkpOlV9ZnVuY3Rpb24gaCh0LGUpe3ZhciByLGk7cmV0dXJuIHQmJnQuc3RhdGU/KGk9dC5zdGF0ZSxlPDA/KHI9MCxlPS1lKToocj0xKyhlPj40KSxlPDQ4JiYoZSY9MTUpKSxlJiYoZTw4fHwxNTxlKT9VOihudWxsIT09aS53aW5kb3cmJmkud2JpdHMhPT1lJiYoaS53aW5kb3c9bnVsbCksaS53cmFwPXIsaS53Yml0cz1lLG8odCkpKTpVfWZ1bmN0aW9uIHUodCxlKXt2YXIgcixpO3JldHVybiB0PyhpPW5ldyBzLCh0LnN0YXRlPWkpLndpbmRvdz1udWxsLChyPWgodCxlKSkhPT1OJiYodC5zdGF0ZT1udWxsKSxyKTpVfXZhciBsLGYsZD0hMDtmdW5jdGlvbiBqKHQpe2lmKGQpe3ZhciBlO2ZvcihsPW5ldyBJLkJ1ZjMyKDUxMiksZj1uZXcgSS5CdWYzMigzMiksZT0wO2U8MTQ0Oyl0LmxlbnNbZSsrXT04O2Zvcig7ZTwyNTY7KXQubGVuc1tlKytdPTk7Zm9yKDtlPDI4MDspdC5sZW5zW2UrK109Nztmb3IoO2U8Mjg4Oyl0LmxlbnNbZSsrXT04O2ZvcihUKEQsdC5sZW5zLDAsMjg4LGwsMCx0Lndvcmsse2JpdHM6OX0pLGU9MDtlPDMyOyl0LmxlbnNbZSsrXT01O1QoRix0LmxlbnMsMCwzMixmLDAsdC53b3JrLHtiaXRzOjV9KSxkPSExfXQubGVuY29kZT1sLHQubGVuYml0cz05LHQuZGlzdGNvZGU9Zix0LmRpc3RiaXRzPTV9ZnVuY3Rpb24gWih0LGUscixpKXt2YXIgbixzPXQuc3RhdGU7cmV0dXJuIG51bGw9PT1zLndpbmRvdyYmKHMud3NpemU9MTw8cy53Yml0cyxzLnduZXh0PTAscy53aGF2ZT0wLHMud2luZG93PW5ldyBJLkJ1Zjgocy53c2l6ZSkpLGk+PXMud3NpemU/KEkuYXJyYXlTZXQocy53aW5kb3csZSxyLXMud3NpemUscy53c2l6ZSwwKSxzLnduZXh0PTAscy53aGF2ZT1zLndzaXplKTooaTwobj1zLndzaXplLXMud25leHQpJiYobj1pKSxJLmFycmF5U2V0KHMud2luZG93LGUsci1pLG4scy53bmV4dCksKGktPW4pPyhJLmFycmF5U2V0KHMud2luZG93LGUsci1pLGksMCkscy53bmV4dD1pLHMud2hhdmU9cy53c2l6ZSk6KHMud25leHQrPW4scy53bmV4dD09PXMud3NpemUmJihzLnduZXh0PTApLHMud2hhdmU8cy53c2l6ZSYmKHMud2hhdmUrPW4pKSksMH1yLmluZmxhdGVSZXNldD1vLHIuaW5mbGF0ZVJlc2V0Mj1oLHIuaW5mbGF0ZVJlc2V0S2VlcD1hLHIuaW5mbGF0ZUluaXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHUodCwxNSl9LHIuaW5mbGF0ZUluaXQyPXUsci5pbmZsYXRlPWZ1bmN0aW9uKHQsZSl7dmFyIHIsaSxuLHMsYSxvLGgsdSxsLGYsZCxjLHAsbSxfLGcsYix2LHksdyxrLHgsUyx6LEM9MCxFPW5ldyBJLkJ1ZjgoNCksQT1bMTYsMTcsMTgsMCw4LDcsOSw2LDEwLDUsMTEsNCwxMiwzLDEzLDIsMTQsMSwxNV07aWYoIXR8fCF0LnN0YXRlfHwhdC5vdXRwdXR8fCF0LmlucHV0JiYwIT09dC5hdmFpbF9pbilyZXR1cm4gVTsxMj09PShyPXQuc3RhdGUpLm1vZGUmJihyLm1vZGU9MTMpLGE9dC5uZXh0X291dCxuPXQub3V0cHV0LGg9dC5hdmFpbF9vdXQscz10Lm5leHRfaW4saT10LmlucHV0LG89dC5hdmFpbF9pbix1PXIuaG9sZCxsPXIuYml0cyxmPW8sZD1oLHg9Tjt0OmZvcig7Oylzd2l0Y2goci5tb2RlKXtjYXNlIFA6aWYoMD09PXIud3JhcCl7ci5tb2RlPTEzO2JyZWFrfWZvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWlmKDImci53cmFwJiYzNTYxNT09PXUpe0Vbci5jaGVjaz0wXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDIsMCksbD11PTAsci5tb2RlPTI7YnJlYWt9aWYoci5mbGFncz0wLHIuaGVhZCYmKHIuaGVhZC5kb25lPSExKSwhKDEmci53cmFwKXx8KCgoMjU1JnUpPDw4KSsodT4+OCkpJTMxKXt0Lm1zZz1cImluY29ycmVjdCBoZWFkZXIgY2hlY2tcIixyLm1vZGU9MzA7YnJlYWt9aWYoOCE9KDE1JnUpKXt0Lm1zZz1cInVua25vd24gY29tcHJlc3Npb24gbWV0aG9kXCIsci5tb2RlPTMwO2JyZWFrfWlmKGwtPTQsaz04KygxNSYodT4+Pj00KSksMD09PXIud2JpdHMpci53Yml0cz1rO2Vsc2UgaWYoaz5yLndiaXRzKXt0Lm1zZz1cImludmFsaWQgd2luZG93IHNpemVcIixyLm1vZGU9MzA7YnJlYWt9ci5kbWF4PTE8PGssdC5hZGxlcj1yLmNoZWNrPTEsci5tb2RlPTUxMiZ1PzEwOjEyLGw9dT0wO2JyZWFrO2Nhc2UgMjpmb3IoO2w8MTY7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZihyLmZsYWdzPXUsOCE9KDI1NSZyLmZsYWdzKSl7dC5tc2c9XCJ1bmtub3duIGNvbXByZXNzaW9uIG1ldGhvZFwiLHIubW9kZT0zMDticmVha31pZig1NzM0NCZyLmZsYWdzKXt0Lm1zZz1cInVua25vd24gaGVhZGVyIGZsYWdzIHNldFwiLHIubW9kZT0zMDticmVha31yLmhlYWQmJihyLmhlYWQudGV4dD11Pj44JjEpLDUxMiZyLmZsYWdzJiYoRVswXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDIsMCkpLGw9dT0wLHIubW9kZT0zO2Nhc2UgMzpmb3IoO2w8MzI7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1yLmhlYWQmJihyLmhlYWQudGltZT11KSw1MTImci5mbGFncyYmKEVbMF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsRVsyXT11Pj4+MTYmMjU1LEVbM109dT4+PjI0JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDQsMCkpLGw9dT0wLHIubW9kZT00O2Nhc2UgNDpmb3IoO2w8MTY7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1yLmhlYWQmJihyLmhlYWQueGZsYWdzPTI1NSZ1LHIuaGVhZC5vcz11Pj44KSw1MTImci5mbGFncyYmKEVbMF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSwyLDApKSxsPXU9MCxyLm1vZGU9NTtjYXNlIDU6aWYoMTAyNCZyLmZsYWdzKXtmb3IoO2w8MTY7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1yLmxlbmd0aD11LHIuaGVhZCYmKHIuaGVhZC5leHRyYV9sZW49dSksNTEyJnIuZmxhZ3MmJihFWzBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsMiwwKSksbD11PTB9ZWxzZSByLmhlYWQmJihyLmhlYWQuZXh0cmE9bnVsbCk7ci5tb2RlPTY7Y2FzZSA2OmlmKDEwMjQmci5mbGFncyYmKG88KGM9ci5sZW5ndGgpJiYoYz1vKSxjJiYoci5oZWFkJiYoaz1yLmhlYWQuZXh0cmFfbGVuLXIubGVuZ3RoLHIuaGVhZC5leHRyYXx8KHIuaGVhZC5leHRyYT1uZXcgQXJyYXkoci5oZWFkLmV4dHJhX2xlbikpLEkuYXJyYXlTZXQoci5oZWFkLmV4dHJhLGkscyxjLGspKSw1MTImci5mbGFncyYmKHIuY2hlY2s9QihyLmNoZWNrLGksYyxzKSksby09YyxzKz1jLHIubGVuZ3RoLT1jKSxyLmxlbmd0aCkpYnJlYWsgdDtyLmxlbmd0aD0wLHIubW9kZT03O2Nhc2UgNzppZigyMDQ4JnIuZmxhZ3Mpe2lmKDA9PT1vKWJyZWFrIHQ7Zm9yKGM9MDtrPWlbcytjKytdLHIuaGVhZCYmayYmci5sZW5ndGg8NjU1MzYmJihyLmhlYWQubmFtZSs9U3RyaW5nLmZyb21DaGFyQ29kZShrKSksayYmYzxvOyk7aWYoNTEyJnIuZmxhZ3MmJihyLmNoZWNrPUIoci5jaGVjayxpLGMscykpLG8tPWMscys9YyxrKWJyZWFrIHR9ZWxzZSByLmhlYWQmJihyLmhlYWQubmFtZT1udWxsKTtyLmxlbmd0aD0wLHIubW9kZT04O2Nhc2UgODppZig0MDk2JnIuZmxhZ3Mpe2lmKDA9PT1vKWJyZWFrIHQ7Zm9yKGM9MDtrPWlbcytjKytdLHIuaGVhZCYmayYmci5sZW5ndGg8NjU1MzYmJihyLmhlYWQuY29tbWVudCs9U3RyaW5nLmZyb21DaGFyQ29kZShrKSksayYmYzxvOyk7aWYoNTEyJnIuZmxhZ3MmJihyLmNoZWNrPUIoci5jaGVjayxpLGMscykpLG8tPWMscys9YyxrKWJyZWFrIHR9ZWxzZSByLmhlYWQmJihyLmhlYWQuY29tbWVudD1udWxsKTtyLm1vZGU9OTtjYXNlIDk6aWYoNTEyJnIuZmxhZ3Mpe2Zvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWlmKHUhPT0oNjU1MzUmci5jaGVjaykpe3QubXNnPVwiaGVhZGVyIGNyYyBtaXNtYXRjaFwiLHIubW9kZT0zMDticmVha31sPXU9MH1yLmhlYWQmJihyLmhlYWQuaGNyYz1yLmZsYWdzPj45JjEsci5oZWFkLmRvbmU9ITApLHQuYWRsZXI9ci5jaGVjaz0wLHIubW9kZT0xMjticmVhaztjYXNlIDEwOmZvcig7bDwzMjspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fXQuYWRsZXI9ci5jaGVjaz1MKHUpLGw9dT0wLHIubW9kZT0xMTtjYXNlIDExOmlmKDA9PT1yLmhhdmVkaWN0KXJldHVybiB0Lm5leHRfb3V0PWEsdC5hdmFpbF9vdXQ9aCx0Lm5leHRfaW49cyx0LmF2YWlsX2luPW8sci5ob2xkPXUsci5iaXRzPWwsMjt0LmFkbGVyPXIuY2hlY2s9MSxyLm1vZGU9MTI7Y2FzZSAxMjppZig1PT09ZXx8Nj09PWUpYnJlYWsgdDtjYXNlIDEzOmlmKHIubGFzdCl7dT4+Pj03JmwsbC09NyZsLHIubW9kZT0yNzticmVha31mb3IoO2w8Mzspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fXN3aXRjaChyLmxhc3Q9MSZ1LGwtPTEsMyYodT4+Pj0xKSl7Y2FzZSAwOnIubW9kZT0xNDticmVhaztjYXNlIDE6aWYoaihyKSxyLm1vZGU9MjAsNiE9PWUpYnJlYWs7dT4+Pj0yLGwtPTI7YnJlYWsgdDtjYXNlIDI6ci5tb2RlPTE3O2JyZWFrO2Nhc2UgMzp0Lm1zZz1cImludmFsaWQgYmxvY2sgdHlwZVwiLHIubW9kZT0zMH11Pj4+PTIsbC09MjticmVhaztjYXNlIDE0OmZvcih1Pj4+PTcmbCxsLT03Jmw7bDwzMjspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWlmKCg2NTUzNSZ1KSE9KHU+Pj4xNl42NTUzNSkpe3QubXNnPVwiaW52YWxpZCBzdG9yZWQgYmxvY2sgbGVuZ3Roc1wiLHIubW9kZT0zMDticmVha31pZihyLmxlbmd0aD02NTUzNSZ1LGw9dT0wLHIubW9kZT0xNSw2PT09ZSlicmVhayB0O2Nhc2UgMTU6ci5tb2RlPTE2O2Nhc2UgMTY6aWYoYz1yLmxlbmd0aCl7aWYobzxjJiYoYz1vKSxoPGMmJihjPWgpLDA9PT1jKWJyZWFrIHQ7SS5hcnJheVNldChuLGkscyxjLGEpLG8tPWMscys9YyxoLT1jLGErPWMsci5sZW5ndGgtPWM7YnJlYWt9ci5tb2RlPTEyO2JyZWFrO2Nhc2UgMTc6Zm9yKDtsPDE0Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9aWYoci5ubGVuPTI1NysoMzEmdSksdT4+Pj01LGwtPTUsci5uZGlzdD0xKygzMSZ1KSx1Pj4+PTUsbC09NSxyLm5jb2RlPTQrKDE1JnUpLHU+Pj49NCxsLT00LDI4NjxyLm5sZW58fDMwPHIubmRpc3Qpe3QubXNnPVwidG9vIG1hbnkgbGVuZ3RoIG9yIGRpc3RhbmNlIHN5bWJvbHNcIixyLm1vZGU9MzA7YnJlYWt9ci5oYXZlPTAsci5tb2RlPTE4O2Nhc2UgMTg6Zm9yKDtyLmhhdmU8ci5uY29kZTspe2Zvcig7bDwzOyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9ci5sZW5zW0Fbci5oYXZlKytdXT03JnUsdT4+Pj0zLGwtPTN9Zm9yKDtyLmhhdmU8MTk7KXIubGVuc1tBW3IuaGF2ZSsrXV09MDtpZihyLmxlbmNvZGU9ci5sZW5keW4sci5sZW5iaXRzPTcsUz17Yml0czpyLmxlbmJpdHN9LHg9VCgwLHIubGVucywwLDE5LHIubGVuY29kZSwwLHIud29yayxTKSxyLmxlbmJpdHM9Uy5iaXRzLHgpe3QubXNnPVwiaW52YWxpZCBjb2RlIGxlbmd0aHMgc2V0XCIsci5tb2RlPTMwO2JyZWFrfXIuaGF2ZT0wLHIubW9kZT0xOTtjYXNlIDE5OmZvcig7ci5oYXZlPHIubmxlbityLm5kaXN0Oyl7Zm9yKDtnPShDPXIubGVuY29kZVt1JigxPDxyLmxlbmJpdHMpLTFdKT4+PjE2JjI1NSxiPTY1NTM1JkMsISgoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWlmKGI8MTYpdT4+Pj1fLGwtPV8sci5sZW5zW3IuaGF2ZSsrXT1iO2Vsc2V7aWYoMTY9PT1iKXtmb3Ioej1fKzI7bDx6Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9aWYodT4+Pj1fLGwtPV8sMD09PXIuaGF2ZSl7dC5tc2c9XCJpbnZhbGlkIGJpdCBsZW5ndGggcmVwZWF0XCIsci5tb2RlPTMwO2JyZWFrfWs9ci5sZW5zW3IuaGF2ZS0xXSxjPTMrKDMmdSksdT4+Pj0yLGwtPTJ9ZWxzZSBpZigxNz09PWIpe2Zvcih6PV8rMztsPHo7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1sLT1fLGs9MCxjPTMrKDcmKHU+Pj49XykpLHU+Pj49MyxsLT0zfWVsc2V7Zm9yKHo9Xys3O2w8ejspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWwtPV8saz0wLGM9MTErKDEyNyYodT4+Pj1fKSksdT4+Pj03LGwtPTd9aWYoci5oYXZlK2M+ci5ubGVuK3IubmRpc3Qpe3QubXNnPVwiaW52YWxpZCBiaXQgbGVuZ3RoIHJlcGVhdFwiLHIubW9kZT0zMDticmVha31mb3IoO2MtLTspci5sZW5zW3IuaGF2ZSsrXT1rfX1pZigzMD09PXIubW9kZSlicmVhaztpZigwPT09ci5sZW5zWzI1Nl0pe3QubXNnPVwiaW52YWxpZCBjb2RlIC0tIG1pc3NpbmcgZW5kLW9mLWJsb2NrXCIsci5tb2RlPTMwO2JyZWFrfWlmKHIubGVuYml0cz05LFM9e2JpdHM6ci5sZW5iaXRzfSx4PVQoRCxyLmxlbnMsMCxyLm5sZW4sci5sZW5jb2RlLDAsci53b3JrLFMpLHIubGVuYml0cz1TLmJpdHMseCl7dC5tc2c9XCJpbnZhbGlkIGxpdGVyYWwvbGVuZ3RocyBzZXRcIixyLm1vZGU9MzA7YnJlYWt9aWYoci5kaXN0Yml0cz02LHIuZGlzdGNvZGU9ci5kaXN0ZHluLFM9e2JpdHM6ci5kaXN0Yml0c30seD1UKEYsci5sZW5zLHIubmxlbixyLm5kaXN0LHIuZGlzdGNvZGUsMCxyLndvcmssUyksci5kaXN0Yml0cz1TLmJpdHMseCl7dC5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlcyBzZXRcIixyLm1vZGU9MzA7YnJlYWt9aWYoci5tb2RlPTIwLDY9PT1lKWJyZWFrIHQ7Y2FzZSAyMDpyLm1vZGU9MjE7Y2FzZSAyMTppZig2PD1vJiYyNTg8PWgpe3QubmV4dF9vdXQ9YSx0LmF2YWlsX291dD1oLHQubmV4dF9pbj1zLHQuYXZhaWxfaW49byxyLmhvbGQ9dSxyLmJpdHM9bCxSKHQsZCksYT10Lm5leHRfb3V0LG49dC5vdXRwdXQsaD10LmF2YWlsX291dCxzPXQubmV4dF9pbixpPXQuaW5wdXQsbz10LmF2YWlsX2luLHU9ci5ob2xkLGw9ci5iaXRzLDEyPT09ci5tb2RlJiYoci5iYWNrPS0xKTticmVha31mb3Ioci5iYWNrPTA7Zz0oQz1yLmxlbmNvZGVbdSYoMTw8ci5sZW5iaXRzKS0xXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEoKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZihnJiYwPT0oMjQwJmcpKXtmb3Iodj1fLHk9Zyx3PWI7Zz0oQz1yLmxlbmNvZGVbdysoKHUmKDE8PHYreSktMSk+PnYpXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEodisoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fXU+Pj49dixsLT12LHIuYmFjays9dn1pZih1Pj4+PV8sbC09XyxyLmJhY2srPV8sci5sZW5ndGg9YiwwPT09Zyl7ci5tb2RlPTI2O2JyZWFrfWlmKDMyJmcpe3IuYmFjaz0tMSxyLm1vZGU9MTI7YnJlYWt9aWYoNjQmZyl7dC5tc2c9XCJpbnZhbGlkIGxpdGVyYWwvbGVuZ3RoIGNvZGVcIixyLm1vZGU9MzA7YnJlYWt9ci5leHRyYT0xNSZnLHIubW9kZT0yMjtjYXNlIDIyOmlmKHIuZXh0cmEpe2Zvcih6PXIuZXh0cmE7bDx6Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9ci5sZW5ndGgrPXUmKDE8PHIuZXh0cmEpLTEsdT4+Pj1yLmV4dHJhLGwtPXIuZXh0cmEsci5iYWNrKz1yLmV4dHJhfXIud2FzPXIubGVuZ3RoLHIubW9kZT0yMztjYXNlIDIzOmZvcig7Zz0oQz1yLmRpc3Rjb2RlW3UmKDE8PHIuZGlzdGJpdHMpLTFdKT4+PjE2JjI1NSxiPTY1NTM1JkMsISgoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWlmKDA9PSgyNDAmZykpe2Zvcih2PV8seT1nLHc9YjtnPShDPXIuZGlzdGNvZGVbdysoKHUmKDE8PHYreSktMSk+PnYpXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEodisoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fXU+Pj49dixsLT12LHIuYmFjays9dn1pZih1Pj4+PV8sbC09XyxyLmJhY2srPV8sNjQmZyl7dC5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIGNvZGVcIixyLm1vZGU9MzA7YnJlYWt9ci5vZmZzZXQ9YixyLmV4dHJhPTE1Jmcsci5tb2RlPTI0O2Nhc2UgMjQ6aWYoci5leHRyYSl7Zm9yKHo9ci5leHRyYTtsPHo7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1yLm9mZnNldCs9dSYoMTw8ci5leHRyYSktMSx1Pj4+PXIuZXh0cmEsbC09ci5leHRyYSxyLmJhY2srPXIuZXh0cmF9aWYoci5vZmZzZXQ+ci5kbWF4KXt0Lm1zZz1cImludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrXCIsci5tb2RlPTMwO2JyZWFrfXIubW9kZT0yNTtjYXNlIDI1OmlmKDA9PT1oKWJyZWFrIHQ7aWYoYz1kLWgsci5vZmZzZXQ+Yyl7aWYoKGM9ci5vZmZzZXQtYyk+ci53aGF2ZSYmci5zYW5lKXt0Lm1zZz1cImludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrXCIsci5tb2RlPTMwO2JyZWFrfXA9Yz5yLnduZXh0PyhjLT1yLnduZXh0LHIud3NpemUtYyk6ci53bmV4dC1jLGM+ci5sZW5ndGgmJihjPXIubGVuZ3RoKSxtPXIud2luZG93fWVsc2UgbT1uLHA9YS1yLm9mZnNldCxjPXIubGVuZ3RoO2ZvcihoPGMmJihjPWgpLGgtPWMsci5sZW5ndGgtPWM7blthKytdPW1bcCsrXSwtLWM7KTswPT09ci5sZW5ndGgmJihyLm1vZGU9MjEpO2JyZWFrO2Nhc2UgMjY6aWYoMD09PWgpYnJlYWsgdDtuW2ErK109ci5sZW5ndGgsaC0tLHIubW9kZT0yMTticmVhaztjYXNlIDI3OmlmKHIud3JhcCl7Zm9yKDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdXw9aVtzKytdPDxsLGwrPTh9aWYoZC09aCx0LnRvdGFsX291dCs9ZCxyLnRvdGFsKz1kLGQmJih0LmFkbGVyPXIuY2hlY2s9ci5mbGFncz9CKHIuY2hlY2ssbixkLGEtZCk6TyhyLmNoZWNrLG4sZCxhLWQpKSxkPWgsKHIuZmxhZ3M/dTpMKHUpKSE9PXIuY2hlY2spe3QubXNnPVwiaW5jb3JyZWN0IGRhdGEgY2hlY2tcIixyLm1vZGU9MzA7YnJlYWt9bD11PTB9ci5tb2RlPTI4O2Nhc2UgMjg6aWYoci53cmFwJiZyLmZsYWdzKXtmb3IoO2w8MzI7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZih1IT09KDQyOTQ5NjcyOTUmci50b3RhbCkpe3QubXNnPVwiaW5jb3JyZWN0IGxlbmd0aCBjaGVja1wiLHIubW9kZT0zMDticmVha31sPXU9MH1yLm1vZGU9Mjk7Y2FzZSAyOTp4PTE7YnJlYWsgdDtjYXNlIDMwOng9LTM7YnJlYWsgdDtjYXNlIDMxOnJldHVybi00O2Nhc2UgMzI6ZGVmYXVsdDpyZXR1cm4gVX1yZXR1cm4gdC5uZXh0X291dD1hLHQuYXZhaWxfb3V0PWgsdC5uZXh0X2luPXMsdC5hdmFpbF9pbj1vLHIuaG9sZD11LHIuYml0cz1sLChyLndzaXplfHxkIT09dC5hdmFpbF9vdXQmJnIubW9kZTwzMCYmKHIubW9kZTwyN3x8NCE9PWUpKSYmWih0LHQub3V0cHV0LHQubmV4dF9vdXQsZC10LmF2YWlsX291dCk/KHIubW9kZT0zMSwtNCk6KGYtPXQuYXZhaWxfaW4sZC09dC5hdmFpbF9vdXQsdC50b3RhbF9pbis9Zix0LnRvdGFsX291dCs9ZCxyLnRvdGFsKz1kLHIud3JhcCYmZCYmKHQuYWRsZXI9ci5jaGVjaz1yLmZsYWdzP0Ioci5jaGVjayxuLGQsdC5uZXh0X291dC1kKTpPKHIuY2hlY2ssbixkLHQubmV4dF9vdXQtZCkpLHQuZGF0YV90eXBlPXIuYml0cysoci5sYXN0PzY0OjApKygxMj09PXIubW9kZT8xMjg6MCkrKDIwPT09ci5tb2RlfHwxNT09PXIubW9kZT8yNTY6MCksKDA9PWYmJjA9PT1kfHw0PT09ZSkmJng9PT1OJiYoeD0tNSkseCl9LHIuaW5mbGF0ZUVuZD1mdW5jdGlvbih0KXtpZighdHx8IXQuc3RhdGUpcmV0dXJuIFU7dmFyIGU9dC5zdGF0ZTtyZXR1cm4gZS53aW5kb3cmJihlLndpbmRvdz1udWxsKSx0LnN0YXRlPW51bGwsTn0sci5pbmZsYXRlR2V0SGVhZGVyPWZ1bmN0aW9uKHQsZSl7dmFyIHI7cmV0dXJuIHQmJnQuc3RhdGU/MD09KDImKHI9dC5zdGF0ZSkud3JhcCk/VTooKHIuaGVhZD1lKS5kb25lPSExLE4pOlV9LHIuaW5mbGF0ZVNldERpY3Rpb25hcnk9ZnVuY3Rpb24odCxlKXt2YXIgcixpPWUubGVuZ3RoO3JldHVybiB0JiZ0LnN0YXRlPzAhPT0ocj10LnN0YXRlKS53cmFwJiYxMSE9PXIubW9kZT9VOjExPT09ci5tb2RlJiZPKDEsZSxpLDApIT09ci5jaGVjaz8tMzpaKHQsZSxpLGkpPyhyLm1vZGU9MzEsLTQpOihyLmhhdmVkaWN0PTEsTik6VX0sci5pbmZsYXRlSW5mbz1cInBha28gaW5mbGF0ZSAoZnJvbSBOb2RlY2EgcHJvamVjdClcIn0se1wiLi4vdXRpbHMvY29tbW9uXCI6NDEsXCIuL2FkbGVyMzJcIjo0MyxcIi4vY3JjMzJcIjo0NSxcIi4vaW5mZmFzdFwiOjQ4LFwiLi9pbmZ0cmVlc1wiOjUwfV0sNTA6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgRD10KFwiLi4vdXRpbHMvY29tbW9uXCIpLEY9WzMsNCw1LDYsNyw4LDksMTAsMTEsMTMsMTUsMTcsMTksMjMsMjcsMzEsMzUsNDMsNTEsNTksNjcsODMsOTksMTE1LDEzMSwxNjMsMTk1LDIyNywyNTgsMCwwXSxOPVsxNiwxNiwxNiwxNiwxNiwxNiwxNiwxNiwxNywxNywxNywxNywxOCwxOCwxOCwxOCwxOSwxOSwxOSwxOSwyMCwyMCwyMCwyMCwyMSwyMSwyMSwyMSwxNiw3Miw3OF0sVT1bMSwyLDMsNCw1LDcsOSwxMywxNywyNSwzMyw0OSw2NSw5NywxMjksMTkzLDI1NywzODUsNTEzLDc2OSwxMDI1LDE1MzcsMjA0OSwzMDczLDQwOTcsNjE0NSw4MTkzLDEyMjg5LDE2Mzg1LDI0NTc3LDAsMF0sUD1bMTYsMTYsMTYsMTYsMTcsMTcsMTgsMTgsMTksMTksMjAsMjAsMjEsMjEsMjIsMjIsMjMsMjMsMjQsMjQsMjUsMjUsMjYsMjYsMjcsMjcsMjgsMjgsMjksMjksNjQsNjRdO2UuZXhwb3J0cz1mdW5jdGlvbih0LGUscixpLG4scyxhLG8pe3ZhciBoLHUsbCxmLGQsYyxwLG0sXyxnPW8uYml0cyxiPTAsdj0wLHk9MCx3PTAsaz0wLHg9MCxTPTAsej0wLEM9MCxFPTAsQT1udWxsLEk9MCxPPW5ldyBELkJ1ZjE2KDE2KSxCPW5ldyBELkJ1ZjE2KDE2KSxSPW51bGwsVD0wO2ZvcihiPTA7Yjw9MTU7YisrKU9bYl09MDtmb3Iodj0wO3Y8aTt2KyspT1tlW3Irdl1dKys7Zm9yKGs9Zyx3PTE1OzE8PXcmJjA9PT1PW3ddO3ctLSk7aWYodzxrJiYoaz13KSwwPT09dylyZXR1cm4gbltzKytdPTIwOTcxNTIwLG5bcysrXT0yMDk3MTUyMCxvLmJpdHM9MSwwO2Zvcih5PTE7eTx3JiYwPT09T1t5XTt5KyspO2ZvcihrPHkmJihrPXkpLGI9ej0xO2I8PTE1O2IrKylpZih6PDw9MSwoei09T1tiXSk8MClyZXR1cm4tMTtpZigwPHomJigwPT09dHx8MSE9PXcpKXJldHVybi0xO2ZvcihCWzFdPTAsYj0xO2I8MTU7YisrKUJbYisxXT1CW2JdK09bYl07Zm9yKHY9MDt2PGk7disrKTAhPT1lW3Irdl0mJihhW0JbZVtyK3ZdXSsrXT12KTtpZihjPTA9PT10PyhBPVI9YSwxOSk6MT09PXQ/KEE9RixJLT0yNTcsUj1OLFQtPTI1NywyNTYpOihBPVUsUj1QLC0xKSxiPXksZD1zLFM9dj1FPTAsbD0tMSxmPShDPTE8PCh4PWspKS0xLDE9PT10JiY4NTI8Q3x8Mj09PXQmJjU5MjxDKXJldHVybiAxO2Zvcig7Oyl7Zm9yKHA9Yi1TLF89YVt2XTxjPyhtPTAsYVt2XSk6YVt2XT5jPyhtPVJbVCthW3ZdXSxBW0krYVt2XV0pOihtPTk2LDApLGg9MTw8Yi1TLHk9dT0xPDx4O25bZCsoRT4+UykrKHUtPWgpXT1wPDwyNHxtPDwxNnxffDAsMCE9PXU7KTtmb3IoaD0xPDxiLTE7RSZoOyloPj49MTtpZigwIT09aD8oRSY9aC0xLEUrPWgpOkU9MCx2KyssMD09LS1PW2JdKXtpZihiPT09dylicmVhaztiPWVbcithW3ZdXX1pZihrPGImJihFJmYpIT09bCl7Zm9yKDA9PT1TJiYoUz1rKSxkKz15LHo9MTw8KHg9Yi1TKTt4K1M8dyYmISgoei09T1t4K1NdKTw9MCk7KXgrKyx6PDw9MTtpZihDKz0xPDx4LDE9PT10JiY4NTI8Q3x8Mj09PXQmJjU5MjxDKXJldHVybiAxO25bbD1FJmZdPWs8PDI0fHg8PDE2fGQtc3wwfX1yZXR1cm4gMCE9PUUmJihuW2QrRV09Yi1TPDwyNHw2NDw8MTZ8MCksby5iaXRzPWssMH19LHtcIi4uL3V0aWxzL2NvbW1vblwiOjQxfV0sNTE6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ezI6XCJuZWVkIGRpY3Rpb25hcnlcIiwxOlwic3RyZWFtIGVuZFwiLDA6XCJcIixcIi0xXCI6XCJmaWxlIGVycm9yXCIsXCItMlwiOlwic3RyZWFtIGVycm9yXCIsXCItM1wiOlwiZGF0YSBlcnJvclwiLFwiLTRcIjpcImluc3VmZmljaWVudCBtZW1vcnlcIixcIi01XCI6XCJidWZmZXIgZXJyb3JcIixcIi02XCI6XCJpbmNvbXBhdGlibGUgdmVyc2lvblwifX0se31dLDUyOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dChcIi4uL3V0aWxzL2NvbW1vblwiKSxvPTAsaD0xO2Z1bmN0aW9uIGkodCl7Zm9yKHZhciBlPXQubGVuZ3RoOzA8PS0tZTspdFtlXT0wfXZhciBzPTAsYT0yOSx1PTI1NixsPXUrMSthLGY9MzAsZD0xOSxfPTIqbCsxLGc9MTUsYz0xNixwPTcsbT0yNTYsYj0xNix2PTE3LHk9MTgsdz1bMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMiwyLDIsMiwzLDMsMywzLDQsNCw0LDQsNSw1LDUsNSwwXSxrPVswLDAsMCwwLDEsMSwyLDIsMywzLDQsNCw1LDUsNiw2LDcsNyw4LDgsOSw5LDEwLDEwLDExLDExLDEyLDEyLDEzLDEzXSx4PVswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDIsMyw3XSxTPVsxNiwxNywxOCwwLDgsNyw5LDYsMTAsNSwxMSw0LDEyLDMsMTMsMiwxNCwxLDE1XSx6PW5ldyBBcnJheSgyKihsKzIpKTtpKHopO3ZhciBDPW5ldyBBcnJheSgyKmYpO2koQyk7dmFyIEU9bmV3IEFycmF5KDUxMik7aShFKTt2YXIgQT1uZXcgQXJyYXkoMjU2KTtpKEEpO3ZhciBJPW5ldyBBcnJheShhKTtpKEkpO3ZhciBPLEIsUixUPW5ldyBBcnJheShmKTtmdW5jdGlvbiBEKHQsZSxyLGksbil7dGhpcy5zdGF0aWNfdHJlZT10LHRoaXMuZXh0cmFfYml0cz1lLHRoaXMuZXh0cmFfYmFzZT1yLHRoaXMuZWxlbXM9aSx0aGlzLm1heF9sZW5ndGg9bix0aGlzLmhhc19zdHJlZT10JiZ0Lmxlbmd0aH1mdW5jdGlvbiBGKHQsZSl7dGhpcy5keW5fdHJlZT10LHRoaXMubWF4X2NvZGU9MCx0aGlzLnN0YXRfZGVzYz1lfWZ1bmN0aW9uIE4odCl7cmV0dXJuIHQ8MjU2P0VbdF06RVsyNTYrKHQ+Pj43KV19ZnVuY3Rpb24gVSh0LGUpe3QucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPTI1NSZlLHQucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPWU+Pj44JjI1NX1mdW5jdGlvbiBQKHQsZSxyKXt0LmJpX3ZhbGlkPmMtcj8odC5iaV9idWZ8PWU8PHQuYmlfdmFsaWQmNjU1MzUsVSh0LHQuYmlfYnVmKSx0LmJpX2J1Zj1lPj5jLXQuYmlfdmFsaWQsdC5iaV92YWxpZCs9ci1jKToodC5iaV9idWZ8PWU8PHQuYmlfdmFsaWQmNjU1MzUsdC5iaV92YWxpZCs9cil9ZnVuY3Rpb24gTCh0LGUscil7UCh0LHJbMiplXSxyWzIqZSsxXSl9ZnVuY3Rpb24gaih0LGUpe2Zvcih2YXIgcj0wO3J8PTEmdCx0Pj4+PTEscjw8PTEsMDwtLWU7KTtyZXR1cm4gcj4+PjF9ZnVuY3Rpb24gWih0LGUscil7dmFyIGksbixzPW5ldyBBcnJheShnKzEpLGE9MDtmb3IoaT0xO2k8PWc7aSsrKXNbaV09YT1hK3JbaS0xXTw8MTtmb3Iobj0wO248PWU7bisrKXt2YXIgbz10WzIqbisxXTswIT09byYmKHRbMipuXT1qKHNbb10rKyxvKSl9fWZ1bmN0aW9uIFcodCl7dmFyIGU7Zm9yKGU9MDtlPGw7ZSsrKXQuZHluX2x0cmVlWzIqZV09MDtmb3IoZT0wO2U8ZjtlKyspdC5keW5fZHRyZWVbMiplXT0wO2ZvcihlPTA7ZTxkO2UrKyl0LmJsX3RyZWVbMiplXT0wO3QuZHluX2x0cmVlWzIqbV09MSx0Lm9wdF9sZW49dC5zdGF0aWNfbGVuPTAsdC5sYXN0X2xpdD10Lm1hdGNoZXM9MH1mdW5jdGlvbiBNKHQpezg8dC5iaV92YWxpZD9VKHQsdC5iaV9idWYpOjA8dC5iaV92YWxpZCYmKHQucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPXQuYmlfYnVmKSx0LmJpX2J1Zj0wLHQuYmlfdmFsaWQ9MH1mdW5jdGlvbiBIKHQsZSxyLGkpe3ZhciBuPTIqZSxzPTIqcjtyZXR1cm4gdFtuXTx0W3NdfHx0W25dPT09dFtzXSYmaVtlXTw9aVtyXX1mdW5jdGlvbiBHKHQsZSxyKXtmb3IodmFyIGk9dC5oZWFwW3JdLG49cjw8MTtuPD10LmhlYXBfbGVuJiYobjx0LmhlYXBfbGVuJiZIKGUsdC5oZWFwW24rMV0sdC5oZWFwW25dLHQuZGVwdGgpJiZuKyssIUgoZSxpLHQuaGVhcFtuXSx0LmRlcHRoKSk7KXQuaGVhcFtyXT10LmhlYXBbbl0scj1uLG48PD0xO3QuaGVhcFtyXT1pfWZ1bmN0aW9uIEsodCxlLHIpe3ZhciBpLG4scyxhLG89MDtpZigwIT09dC5sYXN0X2xpdClmb3IoO2k9dC5wZW5kaW5nX2J1Zlt0LmRfYnVmKzIqb108PDh8dC5wZW5kaW5nX2J1Zlt0LmRfYnVmKzIqbysxXSxuPXQucGVuZGluZ19idWZbdC5sX2J1ZitvXSxvKyssMD09PWk/TCh0LG4sZSk6KEwodCwocz1BW25dKSt1KzEsZSksMCE9PShhPXdbc10pJiZQKHQsbi09SVtzXSxhKSxMKHQscz1OKC0taSksciksMCE9PShhPWtbc10pJiZQKHQsaS09VFtzXSxhKSksbzx0Lmxhc3RfbGl0Oyk7TCh0LG0sZSl9ZnVuY3Rpb24gWSh0LGUpe3ZhciByLGksbixzPWUuZHluX3RyZWUsYT1lLnN0YXRfZGVzYy5zdGF0aWNfdHJlZSxvPWUuc3RhdF9kZXNjLmhhc19zdHJlZSxoPWUuc3RhdF9kZXNjLmVsZW1zLHU9LTE7Zm9yKHQuaGVhcF9sZW49MCx0LmhlYXBfbWF4PV8scj0wO3I8aDtyKyspMCE9PXNbMipyXT8odC5oZWFwWysrdC5oZWFwX2xlbl09dT1yLHQuZGVwdGhbcl09MCk6c1syKnIrMV09MDtmb3IoO3QuaGVhcF9sZW48Mjspc1syKihuPXQuaGVhcFsrK3QuaGVhcF9sZW5dPXU8Mj8rK3U6MCldPTEsdC5kZXB0aFtuXT0wLHQub3B0X2xlbi0tLG8mJih0LnN0YXRpY19sZW4tPWFbMipuKzFdKTtmb3IoZS5tYXhfY29kZT11LHI9dC5oZWFwX2xlbj4+MTsxPD1yO3ItLSlHKHQscyxyKTtmb3Iobj1oO3I9dC5oZWFwWzFdLHQuaGVhcFsxXT10LmhlYXBbdC5oZWFwX2xlbi0tXSxHKHQscywxKSxpPXQuaGVhcFsxXSx0LmhlYXBbLS10LmhlYXBfbWF4XT1yLHQuaGVhcFstLXQuaGVhcF9tYXhdPWksc1syKm5dPXNbMipyXStzWzIqaV0sdC5kZXB0aFtuXT0odC5kZXB0aFtyXT49dC5kZXB0aFtpXT90LmRlcHRoW3JdOnQuZGVwdGhbaV0pKzEsc1syKnIrMV09c1syKmkrMV09bix0LmhlYXBbMV09bisrLEcodCxzLDEpLDI8PXQuaGVhcF9sZW47KTt0LmhlYXBbLS10LmhlYXBfbWF4XT10LmhlYXBbMV0sZnVuY3Rpb24odCxlKXt2YXIgcixpLG4scyxhLG8saD1lLmR5bl90cmVlLHU9ZS5tYXhfY29kZSxsPWUuc3RhdF9kZXNjLnN0YXRpY190cmVlLGY9ZS5zdGF0X2Rlc2MuaGFzX3N0cmVlLGQ9ZS5zdGF0X2Rlc2MuZXh0cmFfYml0cyxjPWUuc3RhdF9kZXNjLmV4dHJhX2Jhc2UscD1lLnN0YXRfZGVzYy5tYXhfbGVuZ3RoLG09MDtmb3Iocz0wO3M8PWc7cysrKXQuYmxfY291bnRbc109MDtmb3IoaFsyKnQuaGVhcFt0LmhlYXBfbWF4XSsxXT0wLHI9dC5oZWFwX21heCsxO3I8XztyKyspcDwocz1oWzIqaFsyKihpPXQuaGVhcFtyXSkrMV0rMV0rMSkmJihzPXAsbSsrKSxoWzIqaSsxXT1zLHU8aXx8KHQuYmxfY291bnRbc10rKyxhPTAsYzw9aSYmKGE9ZFtpLWNdKSxvPWhbMippXSx0Lm9wdF9sZW4rPW8qKHMrYSksZiYmKHQuc3RhdGljX2xlbis9byoobFsyKmkrMV0rYSkpKTtpZigwIT09bSl7ZG97Zm9yKHM9cC0xOzA9PT10LmJsX2NvdW50W3NdOylzLS07dC5ibF9jb3VudFtzXS0tLHQuYmxfY291bnRbcysxXSs9Mix0LmJsX2NvdW50W3BdLS0sbS09Mn13aGlsZSgwPG0pO2ZvcihzPXA7MCE9PXM7cy0tKWZvcihpPXQuYmxfY291bnRbc107MCE9PWk7KXU8KG49dC5oZWFwWy0tcl0pfHwoaFsyKm4rMV0hPT1zJiYodC5vcHRfbGVuKz0ocy1oWzIqbisxXSkqaFsyKm5dLGhbMipuKzFdPXMpLGktLSl9fSh0LGUpLFoocyx1LHQuYmxfY291bnQpfWZ1bmN0aW9uIFgodCxlLHIpe3ZhciBpLG4scz0tMSxhPWVbMV0sbz0wLGg9Nyx1PTQ7Zm9yKDA9PT1hJiYoaD0xMzgsdT0zKSxlWzIqKHIrMSkrMV09NjU1MzUsaT0wO2k8PXI7aSsrKW49YSxhPWVbMiooaSsxKSsxXSwrK288aCYmbj09PWF8fChvPHU/dC5ibF90cmVlWzIqbl0rPW86MCE9PW4/KG4hPT1zJiZ0LmJsX3RyZWVbMipuXSsrLHQuYmxfdHJlZVsyKmJdKyspOm88PTEwP3QuYmxfdHJlZVsyKnZdKys6dC5ibF90cmVlWzIqeV0rKyxzPW4sdT0obz0wKT09PWE/KGg9MTM4LDMpOm49PT1hPyhoPTYsMyk6KGg9Nyw0KSl9ZnVuY3Rpb24gVih0LGUscil7dmFyIGksbixzPS0xLGE9ZVsxXSxvPTAsaD03LHU9NDtmb3IoMD09PWEmJihoPTEzOCx1PTMpLGk9MDtpPD1yO2krKylpZihuPWEsYT1lWzIqKGkrMSkrMV0sISgrK288aCYmbj09PWEpKXtpZihvPHUpZm9yKDtMKHQsbix0LmJsX3RyZWUpLDAhPS0tbzspO2Vsc2UgMCE9PW4/KG4hPT1zJiYoTCh0LG4sdC5ibF90cmVlKSxvLS0pLEwodCxiLHQuYmxfdHJlZSksUCh0LG8tMywyKSk6bzw9MTA/KEwodCx2LHQuYmxfdHJlZSksUCh0LG8tMywzKSk6KEwodCx5LHQuYmxfdHJlZSksUCh0LG8tMTEsNykpO3M9bix1PShvPTApPT09YT8oaD0xMzgsMyk6bj09PWE/KGg9NiwzKTooaD03LDQpfX1pKFQpO3ZhciBxPSExO2Z1bmN0aW9uIEoodCxlLHIsaSl7UCh0LChzPDwxKSsoaT8xOjApLDMpLGZ1bmN0aW9uKHQsZSxyLGkpe00odCksaSYmKFUodCxyKSxVKHQsfnIpKSxuLmFycmF5U2V0KHQucGVuZGluZ19idWYsdC53aW5kb3csZSxyLHQucGVuZGluZyksdC5wZW5kaW5nKz1yfSh0LGUsciwhMCl9ci5fdHJfaW5pdD1mdW5jdGlvbih0KXtxfHwoZnVuY3Rpb24oKXt2YXIgdCxlLHIsaSxuLHM9bmV3IEFycmF5KGcrMSk7Zm9yKGk9cj0wO2k8YS0xO2krKylmb3IoSVtpXT1yLHQ9MDt0PDE8PHdbaV07dCsrKUFbcisrXT1pO2ZvcihBW3ItMV09aSxpPW49MDtpPDE2O2krKylmb3IoVFtpXT1uLHQ9MDt0PDE8PGtbaV07dCsrKUVbbisrXT1pO2ZvcihuPj49NztpPGY7aSsrKWZvcihUW2ldPW48PDcsdD0wO3Q8MTw8a1tpXS03O3QrKylFWzI1NituKytdPWk7Zm9yKGU9MDtlPD1nO2UrKylzW2VdPTA7Zm9yKHQ9MDt0PD0xNDM7KXpbMip0KzFdPTgsdCsrLHNbOF0rKztmb3IoO3Q8PTI1NTspelsyKnQrMV09OSx0Kyssc1s5XSsrO2Zvcig7dDw9Mjc5Oyl6WzIqdCsxXT03LHQrKyxzWzddKys7Zm9yKDt0PD0yODc7KXpbMip0KzFdPTgsdCsrLHNbOF0rKztmb3IoWih6LGwrMSxzKSx0PTA7dDxmO3QrKylDWzIqdCsxXT01LENbMip0XT1qKHQsNSk7Tz1uZXcgRCh6LHcsdSsxLGwsZyksQj1uZXcgRChDLGssMCxmLGcpLFI9bmV3IEQobmV3IEFycmF5KDApLHgsMCxkLHApfSgpLHE9ITApLHQubF9kZXNjPW5ldyBGKHQuZHluX2x0cmVlLE8pLHQuZF9kZXNjPW5ldyBGKHQuZHluX2R0cmVlLEIpLHQuYmxfZGVzYz1uZXcgRih0LmJsX3RyZWUsUiksdC5iaV9idWY9MCx0LmJpX3ZhbGlkPTAsVyh0KX0sci5fdHJfc3RvcmVkX2Jsb2NrPUosci5fdHJfZmx1c2hfYmxvY2s9ZnVuY3Rpb24odCxlLHIsaSl7dmFyIG4scyxhPTA7MDx0LmxldmVsPygyPT09dC5zdHJtLmRhdGFfdHlwZSYmKHQuc3RybS5kYXRhX3R5cGU9ZnVuY3Rpb24odCl7dmFyIGUscj00MDkzNjI0NDQ3O2ZvcihlPTA7ZTw9MzE7ZSsrLHI+Pj49MSlpZigxJnImJjAhPT10LmR5bl9sdHJlZVsyKmVdKXJldHVybiBvO2lmKDAhPT10LmR5bl9sdHJlZVsxOF18fDAhPT10LmR5bl9sdHJlZVsyMF18fDAhPT10LmR5bl9sdHJlZVsyNl0pcmV0dXJuIGg7Zm9yKGU9MzI7ZTx1O2UrKylpZigwIT09dC5keW5fbHRyZWVbMiplXSlyZXR1cm4gaDtyZXR1cm4gb30odCkpLFkodCx0LmxfZGVzYyksWSh0LHQuZF9kZXNjKSxhPWZ1bmN0aW9uKHQpe3ZhciBlO2ZvcihYKHQsdC5keW5fbHRyZWUsdC5sX2Rlc2MubWF4X2NvZGUpLFgodCx0LmR5bl9kdHJlZSx0LmRfZGVzYy5tYXhfY29kZSksWSh0LHQuYmxfZGVzYyksZT1kLTE7Mzw9ZSYmMD09PXQuYmxfdHJlZVsyKlNbZV0rMV07ZS0tKTtyZXR1cm4gdC5vcHRfbGVuKz0zKihlKzEpKzUrNSs0LGV9KHQpLG49dC5vcHRfbGVuKzMrNz4+PjMsKHM9dC5zdGF0aWNfbGVuKzMrNz4+PjMpPD1uJiYobj1zKSk6bj1zPXIrNSxyKzQ8PW4mJi0xIT09ZT9KKHQsZSxyLGkpOjQ9PT10LnN0cmF0ZWd5fHxzPT09bj8oUCh0LDIrKGk/MTowKSwzKSxLKHQseixDKSk6KFAodCw0KyhpPzE6MCksMyksZnVuY3Rpb24odCxlLHIsaSl7dmFyIG47Zm9yKFAodCxlLTI1Nyw1KSxQKHQsci0xLDUpLFAodCxpLTQsNCksbj0wO248aTtuKyspUCh0LHQuYmxfdHJlZVsyKlNbbl0rMV0sMyk7Vih0LHQuZHluX2x0cmVlLGUtMSksVih0LHQuZHluX2R0cmVlLHItMSl9KHQsdC5sX2Rlc2MubWF4X2NvZGUrMSx0LmRfZGVzYy5tYXhfY29kZSsxLGErMSksSyh0LHQuZHluX2x0cmVlLHQuZHluX2R0cmVlKSksVyh0KSxpJiZNKHQpfSxyLl90cl90YWxseT1mdW5jdGlvbih0LGUscil7cmV0dXJuIHQucGVuZGluZ19idWZbdC5kX2J1ZisyKnQubGFzdF9saXRdPWU+Pj44JjI1NSx0LnBlbmRpbmdfYnVmW3QuZF9idWYrMip0Lmxhc3RfbGl0KzFdPTI1NSZlLHQucGVuZGluZ19idWZbdC5sX2J1Zit0Lmxhc3RfbGl0XT0yNTUmcix0Lmxhc3RfbGl0KyssMD09PWU/dC5keW5fbHRyZWVbMipyXSsrOih0Lm1hdGNoZXMrKyxlLS0sdC5keW5fbHRyZWVbMiooQVtyXSt1KzEpXSsrLHQuZHluX2R0cmVlWzIqTihlKV0rKyksdC5sYXN0X2xpdD09PXQubGl0X2J1ZnNpemUtMX0sci5fdHJfYWxpZ249ZnVuY3Rpb24odCl7UCh0LDIsMyksTCh0LG0seiksZnVuY3Rpb24odCl7MTY9PT10LmJpX3ZhbGlkPyhVKHQsdC5iaV9idWYpLHQuYmlfYnVmPTAsdC5iaV92YWxpZD0wKTo4PD10LmJpX3ZhbGlkJiYodC5wZW5kaW5nX2J1Zlt0LnBlbmRpbmcrK109MjU1JnQuYmlfYnVmLHQuYmlfYnVmPj49OCx0LmJpX3ZhbGlkLT04KX0odCl9fSx7XCIuLi91dGlscy9jb21tb25cIjo0MX1dLDUzOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dGhpcy5pbnB1dD1udWxsLHRoaXMubmV4dF9pbj0wLHRoaXMuYXZhaWxfaW49MCx0aGlzLnRvdGFsX2luPTAsdGhpcy5vdXRwdXQ9bnVsbCx0aGlzLm5leHRfb3V0PTAsdGhpcy5hdmFpbF9vdXQ9MCx0aGlzLnRvdGFsX291dD0wLHRoaXMubXNnPVwiXCIsdGhpcy5zdGF0ZT1udWxsLHRoaXMuZGF0YV90eXBlPTIsdGhpcy5hZGxlcj0wfX0se31dLDU0OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPVwiZnVuY3Rpb25cIj09dHlwZW9mIHNldEltbWVkaWF0ZT9zZXRJbW1lZGlhdGU6ZnVuY3Rpb24oKXt2YXIgdD1bXS5zbGljZS5hcHBseShhcmd1bWVudHMpO3Quc3BsaWNlKDEsMCwwKSxzZXRUaW1lb3V0LmFwcGx5KG51bGwsdCl9fSx7fV19LHt9LFsxMF0pKDEwKX0pOyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG90cGFjayhib3hlcykge1xuXG4gICAgLy8gY2FsY3VsYXRlIHRvdGFsIGJveCBhcmVhIGFuZCBtYXhpbXVtIGJveCB3aWR0aFxuICAgIGxldCBhcmVhID0gMDtcbiAgICBsZXQgbWF4V2lkdGggPSAwO1xuXG4gICAgZm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcbiAgICAgICAgYXJlYSArPSBib3gudyAqIGJveC5oO1xuICAgICAgICBtYXhXaWR0aCA9IE1hdGgubWF4KG1heFdpZHRoLCBib3gudyk7XG4gICAgfVxuXG4gICAgLy8gc29ydCB0aGUgYm94ZXMgZm9yIGluc2VydGlvbiBieSBoZWlnaHQsIGRlc2NlbmRpbmdcbiAgICBib3hlcy5zb3J0KChhLCBiKSA9PiBiLmggLSBhLmgpO1xuXG4gICAgLy8gYWltIGZvciBhIHNxdWFyaXNoIHJlc3VsdGluZyBjb250YWluZXIsXG4gICAgLy8gc2xpZ2h0bHkgYWRqdXN0ZWQgZm9yIHN1Yi0xMDAlIHNwYWNlIHV0aWxpemF0aW9uXG4gICAgY29uc3Qgc3RhcnRXaWR0aCA9IE1hdGgubWF4KE1hdGguY2VpbChNYXRoLnNxcnQoYXJlYSAvIDAuOTUpKSwgbWF4V2lkdGgpO1xuXG4gICAgLy8gc3RhcnQgd2l0aCBhIHNpbmdsZSBlbXB0eSBzcGFjZSwgdW5ib3VuZGVkIGF0IHRoZSBib3R0b21cbiAgICBjb25zdCBzcGFjZXMgPSBbe3g6IDAsIHk6IDAsIHc6IHN0YXJ0V2lkdGgsIGg6IEluZmluaXR5fV07XG5cbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGxldCBoZWlnaHQgPSAwO1xuXG4gICAgZm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcbiAgICAgICAgLy8gbG9vayB0aHJvdWdoIHNwYWNlcyBiYWNrd2FyZHMgc28gdGhhdCB3ZSBjaGVjayBzbWFsbGVyIHNwYWNlcyBmaXJzdFxuICAgICAgICBmb3IgKGxldCBpID0gc3BhY2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZSA9IHNwYWNlc1tpXTtcblxuICAgICAgICAgICAgLy8gbG9vayBmb3IgZW1wdHkgc3BhY2VzIHRoYXQgY2FuIGFjY29tbW9kYXRlIHRoZSBjdXJyZW50IGJveFxuICAgICAgICAgICAgaWYgKGJveC53ID4gc3BhY2UudyB8fCBib3guaCA+IHNwYWNlLmgpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBmb3VuZCB0aGUgc3BhY2U7IGFkZCB0aGUgYm94IHRvIGl0cyB0b3AtbGVmdCBjb3JuZXJcbiAgICAgICAgICAgIC8vIHwtLS0tLS0tfC0tLS0tLS18XG4gICAgICAgICAgICAvLyB8ICBib3ggIHwgICAgICAgfFxuICAgICAgICAgICAgLy8gfF9fX19fX198ICAgICAgIHxcbiAgICAgICAgICAgIC8vIHwgICAgICAgICBzcGFjZSB8XG4gICAgICAgICAgICAvLyB8X19fX19fX19fX19fX19ffFxuICAgICAgICAgICAgYm94LnggPSBzcGFjZS54O1xuICAgICAgICAgICAgYm94LnkgPSBzcGFjZS55O1xuXG4gICAgICAgICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIGJveC55ICsgYm94LmgpO1xuICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgYm94LnggKyBib3gudyk7XG5cbiAgICAgICAgICAgIGlmIChib3gudyA9PT0gc3BhY2UudyAmJiBib3guaCA9PT0gc3BhY2UuaCkge1xuICAgICAgICAgICAgICAgIC8vIHNwYWNlIG1hdGNoZXMgdGhlIGJveCBleGFjdGx5OyByZW1vdmUgaXRcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gc3BhY2VzLnBvcCgpO1xuICAgICAgICAgICAgICAgIGlmIChpIDwgc3BhY2VzLmxlbmd0aCkgc3BhY2VzW2ldID0gbGFzdDtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChib3guaCA9PT0gc3BhY2UuaCkge1xuICAgICAgICAgICAgICAgIC8vIHNwYWNlIG1hdGNoZXMgdGhlIGJveCBoZWlnaHQ7IHVwZGF0ZSBpdCBhY2NvcmRpbmdseVxuICAgICAgICAgICAgICAgIC8vIHwtLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXxcbiAgICAgICAgICAgICAgICAvLyB8ICBib3ggIHwgdXBkYXRlZCBzcGFjZSB8XG4gICAgICAgICAgICAgICAgLy8gfF9fX19fX198X19fX19fX19fX19fX19ffFxuICAgICAgICAgICAgICAgIHNwYWNlLnggKz0gYm94Lnc7XG4gICAgICAgICAgICAgICAgc3BhY2UudyAtPSBib3gudztcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChib3gudyA9PT0gc3BhY2Uudykge1xuICAgICAgICAgICAgICAgIC8vIHNwYWNlIG1hdGNoZXMgdGhlIGJveCB3aWR0aDsgdXBkYXRlIGl0IGFjY29yZGluZ2x5XG4gICAgICAgICAgICAgICAgLy8gfC0tLS0tLS0tLS0tLS0tLXxcbiAgICAgICAgICAgICAgICAvLyB8ICAgICAgYm94ICAgICAgfFxuICAgICAgICAgICAgICAgIC8vIHxfX19fX19fX19fX19fX198XG4gICAgICAgICAgICAgICAgLy8gfCB1cGRhdGVkIHNwYWNlIHxcbiAgICAgICAgICAgICAgICAvLyB8X19fX19fX19fX19fX19ffFxuICAgICAgICAgICAgICAgIHNwYWNlLnkgKz0gYm94Lmg7XG4gICAgICAgICAgICAgICAgc3BhY2UuaCAtPSBib3guaDtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgdGhlIGJveCBzcGxpdHMgdGhlIHNwYWNlIGludG8gdHdvIHNwYWNlc1xuICAgICAgICAgICAgICAgIC8vIHwtLS0tLS0tfC0tLS0tLS0tLS0tfFxuICAgICAgICAgICAgICAgIC8vIHwgIGJveCAgfCBuZXcgc3BhY2UgfFxuICAgICAgICAgICAgICAgIC8vIHxfX19fX19ffF9fX19fX19fX19ffFxuICAgICAgICAgICAgICAgIC8vIHwgdXBkYXRlZCBzcGFjZSAgICAgfFxuICAgICAgICAgICAgICAgIC8vIHxfX19fX19fX19fX19fX19fX19ffFxuICAgICAgICAgICAgICAgIHNwYWNlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgeDogc3BhY2UueCArIGJveC53LFxuICAgICAgICAgICAgICAgICAgICB5OiBzcGFjZS55LFxuICAgICAgICAgICAgICAgICAgICB3OiBzcGFjZS53IC0gYm94LncsXG4gICAgICAgICAgICAgICAgICAgIGg6IGJveC5oXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3BhY2UueSArPSBib3guaDtcbiAgICAgICAgICAgICAgICBzcGFjZS5oIC09IGJveC5oO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3OiB3aWR0aCwgLy8gY29udGFpbmVyIHdpZHRoXG4gICAgICAgIGg6IGhlaWdodCwgLy8gY29udGFpbmVyIGhlaWdodFxuICAgICAgICBmaWxsOiAoYXJlYSAvICh3aWR0aCAqIGhlaWdodCkpIHx8IDAgLy8gc3BhY2UgdXRpbGl6YXRpb25cbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgQml0bWFwIH0gZnJvbSBcIi4vQml0bWFwXCI7XG5pbXBvcnQgeyBGb250IH0gZnJvbSBcIi4vRm9udFwiO1xuXG5leHBvcnQgY29uc3QgV0hJVEU6IHN0cmluZyA9IFwid2hpdGVcIjtcbmV4cG9ydCBjb25zdCBCTEFDSzogc3RyaW5nID0gXCJibGFja1wiO1xuZXhwb3J0IGNvbnN0IFJFRDogc3RyaW5nID0gXCJyZWRcIjtcbmV4cG9ydCBjb25zdCBHUkVFTjogc3RyaW5nID0gXCJncmVlblwiO1xuZXhwb3J0IGNvbnN0IEJMVUU6IHN0cmluZyA9IFwiYmx1ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9mZnNjcmVlbiB7XG4gIGdldFdpZHRoKCk6IG51bWJlcjtcblxuICBnZXRIZWlnaHQoKTogbnVtYmVyO1xuXG4gIHNldERpbWVuc2lvbih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JhcGhpY3Mge1xuICBpbml0UmVzb3VyY2VPbkxvYWRlZCgpOiB2b2lkO1xuXG4gIG5ld1Jlc291cmNlTG9hZGVkKCk6IHZvaWQ7XG5cbiAgZ2V0IGNhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudDtcblxuICBhcHBseUZvbnQoKTogdm9pZDtcblxuICBzbW9vdGgoKTogdm9pZDtcbiAgXG4gIGNvcHkoKTogQml0bWFwO1xuXG4gIGdldE9mZnNjcmVlbigpOiBPZmZzY3JlZW4gfCBudWxsO1xuICBcbiAgY2xpcCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkO1xuXG4gIGNyZWF0ZU9mZnNjcmVlbigpOiBPZmZzY3JlZW47XG5cbiAgZHJhd1RvT2Zmc2NyZWVuKHNjcmVlbjogT2Zmc2NyZWVuIHwgbnVsbCk6IHZvaWQ7XG5cbiAgZHJhd09mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbik6IHZvaWQ7XG5cbiAgZHJhd1NjYWxlZE9mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbiwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZDtcblxuICBmaWxsUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbDogc3RyaW5nKTogdm9pZDtcblxuICBmaWxsQ2lyY2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY29sOiBzdHJpbmcpOiB2b2lkO1xuXG4gIGRyYXdDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZywgd2lkdGg6IG51bWJlcik6IHZvaWQ7XG5cbiAgc2V0TGluZURhc2goc2VnbWVudHM6IG51bWJlcltdKTogdm9pZDtcbiAgXG4gIGRyYXdMaW5lKHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIsIGNvbDogc3RyaW5nLCB3aWR0aD86IG51bWJlcik6IHZvaWQ7XG5cbiAgZHJhd0JpdG1hcCh4OiBudW1iZXIsIHk6IG51bWJlciwgYml0bWFwOiBCaXRtYXApOiB2b2lkO1xuXG4gIGRyYXdTY2FsZWRCaXRtYXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBiaXRtYXA6IEJpdG1hcCk6IHZvaWQ7XG4gIFxuICBjbGVhclJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZDtcbiAgIFxuICBjbGVhcigpOiB2b2lkO1xuXG4gIHNldEZvbnQoZm9udDogRm9udCk6IHZvaWQ7XG4gIFxuICBzZXRDb21wb3NpdGUobmFtZTogc3RyaW5nKTogdm9pZDtcblxuICBzZXRGb250U2l6ZShzaXplOiBudW1iZXIpOiB2b2lkO1xuXG4gIGRyYXdTdHJpbmcoeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHQ6IHN0cmluZywgY29sOiBzdHJpbmcpOiB2b2lkO1xuXG4gIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XG5cbiAgc2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkO1xuXG4gIHB1c2goKTogdm9pZDtcblxuICBwb3AoKTogdm9pZDtcblxuICBnZXRXaWR0aCgpOiBudW1iZXI7XG5cbiAgZ2V0SGVpZ2h0KCk6IG51bWJlcjtcblxuICBmaXRTY3JlZW4od2lkdGhJblZpcnR1YWxQaXhlbHM6IG51bWJlcik6IHZvaWQ7XG5cbiAgZ2V0U3RyaW5nV2lkdGgodGV4dDogc3RyaW5nKTogbnVtYmVyO1xuXG4gIHNldEFscGhhKGFscGhhOiBudW1iZXIpOiB2b2lkO1xuXG4gIGdldFRyYW5zZm9ybSgpOiBET01NYXRyaXg7XG5cbiAgcmVuZGVyU3RhcnQoKTogdm9pZDtcblxuICByZW5kZXJFbmQoKTogdm9pZDtcbn0iLCJpbXBvcnQgeyBCaXRtYXAgfSBmcm9tIFwiLi9CaXRtYXBcIjtcbmltcG9ydCB7IEZvbnQgfSBmcm9tIFwiLi9Gb250XCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vR2FtZVwiO1xuaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi9HYW1lQ29udGV4dFwiO1xuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiLi9HcmFwaGljc1wiO1xuaW1wb3J0IHsgQml0bWFwSW1wbCB9IGZyb20gXCIuL2ltcGwvQml0bWFwSW1wbFwiO1xuaW1wb3J0IHsgRm9udEltcGwgfSBmcm9tIFwiLi9pbXBsL0ZvbnRJbXBsXCI7XG5pbXBvcnQgeyBHcmFwaGljc0ltcGwgYXMgQ2FudmFzR3JhcGhpY3NJbXBsIH0gZnJvbSBcIi4vaW1wbC9HcmFwaGljc0ltcGxcIjtcbmltcG9ydCB7IFNvdW5kSW1wbCB9IGZyb20gXCIuL2ltcGwvU291bmRJbXBsXCI7XG5pbXBvcnQgeyBUaWxlc2V0SW1wbCB9IGZyb20gXCIuL2ltcGwvVGlsZXNldEltcGxcIjtcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSBcIi4vUmVzb3VyY2VcIjtcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSBcIi4vU291bmRcIjtcbmltcG9ydCB7IExEVEtXb3JsZCB9IGZyb20gXCIuL3RpbGVtYXBzL0xEVEtXb3JsZFwiO1xuaW1wb3J0IHsgTWFwV29ybGQgfSBmcm9tIFwiLi90aWxlbWFwcy9NYXBXb3JsZFwiO1xuaW1wb3J0IHsgVGlsZXNldCB9IGZyb20gXCIuL1RpbGVzZXRcIjtcbmltcG9ydCAqIGFzIEpTWmlwIGZyb20gXCJqc3ppcFwiO1xuaW1wb3J0IHsgUGFsZXR0ZSB9IGZyb20gXCIuL2ltcGwvUGFsZXR0ZVwiO1xuaW1wb3J0IHsgT3BlbkdMR3JhcGhpY3NJbXBsIH0gZnJvbSBcIi4vb3BlbmdsL09wZW5HTEdyYXBoaWNzSW1wbFwiO1xuaW1wb3J0IHsgT3BlbkdMQml0bWFwIH0gZnJvbSBcIi4vb3BlbmdsL09wZW5HTEJpdG1hcFwiO1xuaW1wb3J0IHsgT3BlbkdMVGlsZXNldEltcGwgfSBmcm9tIFwiLi9vcGVuZ2wvT3BlbkdMVGlsZXNldEltcGxcIjtcblxubGV0IEdBTUVfTE9PUDogR2FtZUxvb3A7XG5sZXQgU09VTkRfT046IGJvb2xlYW4gPSB0cnVlO1xubGV0IE1VU0lDX09OOiBib29sZWFuID0gdHJ1ZTtcbmxldCBQUkVTQ0FMRV9USUxFU0VUUzogYm9vbGVhbiA9IGZhbHNlO1xubGV0IFVTRV9YQlI6IGJvb2xlYW4gPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU291bmRPbigpOiBib29sZWFuIHtcbiAgcmV0dXJuIFNPVU5EX09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNdXNpY09uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gTVVTSUNfT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRVc2VYYnIoKTogYm9vbGVhbiB7XG4gIHJldHVybiBVU0VfWEJSO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlWGJyKG9uOiBib29sZWFuKTogdm9pZCB7XG4gIFVTRV9YQlIgPSBvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFByZXNjYWxlVGlsZXNldHMoKTogYm9vbGVhbiB7XG4gIHJldHVybiBQUkVTQ0FMRV9USUxFU0VUUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByZXNjYWxlVGlsZXNldHMob246IGJvb2xlYW4pOiB2b2lkIHtcbiAgUFJFU0NBTEVfVElMRVNFVFMgPSBvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNvdW5kT24ob246IGJvb2xlYW4pOiB2b2lkIHtcbiAgU09VTkRfT04gPSBvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE11c2ljT24ob246IGJvb2xlYW4pOiB2b2lkIHtcbiAgaWYgKCFvbiAmJiBNVVNJQ19PTikge1xuICAgIE1VU0lDX09OID0gZmFsc2U7XG4gICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDKSB7XG4gICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG9uICYmICFNVVNJQ19PTikge1xuICAgIE1VU0lDX09OID0gdHJ1ZTtcbiAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnBsYXkoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMudm9sdW1lKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZShnYW1lOiBHYW1lLCByZW5kZXJlcjogUmVuZGVyZXIgPSBSZW5kZXJlci5DQU5WQVMpIHtcbiAgY29uc3QgbG9vcCA9IG5ldyBHYW1lTG9vcCgpO1xuICBsb29wLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgR0FNRV9MT09QID0gbG9vcC5zdGFydChnYW1lKTtcbn1cblxuZXhwb3J0IGVudW0gUmVuZGVyZXIge1xuICBDQU5WQVMgPSBcIkNhbnZhc1wiLFxuICBPUEVOR0wgPSBcIk9wZW5HTFwiLFxufTtcblxuY2xhc3MgR2FtZUxvb3AgaW1wbGVtZW50cyBHYW1lQ29udGV4dCB7XG4gIHJlc291cmNlczogUmVzb3VyY2VbXSA9IFtdO1xuICBnYW1lITogR2FtZTtcbiAgbGFzdEZyYW1lOiBudW1iZXIgPSAwO1xuICBncmFwaGljcyE6IEdyYXBoaWNzO1xuICBpbml0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbWFpblppcDogYW55IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICB6aXBQZXJjZW50TG9hZGVkOiBudW1iZXIgPSAwO1xuICBwYWxldHRlOiBQYWxldHRlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBsYXN0V2FpdGluZzogc3RyaW5nIHwgdW5kZWZpbmVkID0gXCJcIjtcbiAgd2FpdDogbnVtYmVyID0gMDtcbiAgc2hpZnRQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbW1hbmRQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnRyb2xQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIGFsdFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbGFzdFRvdWNoPzogVG91Y2hFdmVudDtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyID0gUmVuZGVyZXIuT1BFTkdMO1xuICBncmFwaGljc0luaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGlzQ29tbWFuZFByZXNzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbWFuZFByZXNzZWQ7XG4gIH1cblxuICBpc0FsdFByZXNzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWx0UHJlc3NlZDtcbiAgfVxuXG4gIGlzQ29udHJvbFByZXNzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbFByZXNzZWQ7XG4gIH1cblxuICBpc1NoaWZ0UHJlc3NlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdFByZXNzZWQ7XG4gIH1cblxuICBnZXRHcmFwaGljcygpOiBHcmFwaGljcyB7XG4gICAgcmV0dXJuIHRoaXMuZ3JhcGhpY3M7XG4gIH1cblxuICByZXNvdXJjZXNSZW1haW5pbmcoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXMuZmlsdGVyKHIgPT4gIXIubG9hZGVkKS5sZW5ndGg7XG4gIH1cblxuICByZXNvdXJjZXNUb3RhbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlcy5sZW5ndGg7XG4gIH1cblxuICBhbGxSZXNvdXJjZXNMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgZm9yIChjb25zdCByZXNvdXJjZSBvZiB0aGlzLnJlc291cmNlcykge1xuICAgICAgaWYgKCFyZXNvdXJjZS5sb2FkZWQpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdFdhaXRpbmcgIT09IHJlc291cmNlLm5hbWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5sYXN0V2FpdGluZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbR1VURV0gV2FzIHdhaXRpbmcgb246IFwiICsgdGhpcy5sYXN0V2FpdGluZyArIFwiIGZvciBcIiArIHRoaXMud2FpdCArIFwiIGZyYW1lc1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5sYXN0V2FpdGluZyA9IHJlc291cmNlLm5hbWU7XG4gICAgICAgICAgdGhpcy53YWl0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndhaXQrKztcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5sYXN0V2FpdGluZykge1xuICAgICAgY29uc29sZS5sb2coXCJbR1VURV0gV2FzIHdhaXRpbmcgb24gbGFzdCBvbmU6IFwiICsgdGhpcy5sYXN0V2FpdGluZyArIFwiIGZvciBcIiArIHRoaXMud2FpdCArIFwiIGZyYW1lc1wiKTtcbiAgICAgIHRoaXMubGFzdFdhaXRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAoIXRoaXMuZ3JhcGhpY3NJbml0ZWQpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljc0luaXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuaW5pdFJlc291cmNlT25Mb2FkZWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWxsUmVzb3VyY2VzTG9hZGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG5cbiAgICAgIGZvciAoY29uc3QgcmVzb3VyY2Ugb2YgdGhpcy5yZXNvdXJjZXMpIHtcbiAgICAgICAgcmVzb3VyY2UuaW5pdE9uRmlyc3RDbGljaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhcHBseVBhbGV0dGUoaGV4RmlsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMubG9hZFRleHQoaGV4RmlsZSkudGhlbigodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucGFsZXR0ZSA9IG5ldyBQYWxldHRlKHRleHQpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbW91c2VNb3ZlSGFuZGxlcih4OiBudW1iZXIsIHk6IG51bWJlciwgaWQ6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICB0aGlzLmluaXRSZXNvdXJjZXNPbkZpcnN0Q2xpY2soKTtcblxuICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSB0aGlzLmdyYXBoaWNzLmNhbnZhcztcbiAgICBjYW52YXMuZm9jdXMoKTtcblxuICAgIGNvbnN0IHdpZHRoOiBudW1iZXIgPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0OiBudW1iZXIgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuXG4gICAgeCA9IE1hdGguZmxvb3IoKHggLyB3aWR0aCkgKiBjYW52YXMud2lkdGgpO1xuICAgIHkgPSBNYXRoLmZsb29yKCh5IC8gaGVpZ2h0KSAqIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5nYW1lLm9uTW91c2VNb3ZlKHRoaXMsIHgsIHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5nYW1lLm9uTW91c2VXaGVlbCh0aGlzLCBkZWx0YSk7XG4gIH1cblxuICBwcml2YXRlIG1vdXNlRG93bkhhbmRsZXIoeDogbnVtYmVyLCB5OiBudW1iZXIsIGlkOiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgdGhpcy5pbml0UmVzb3VyY2VzT25GaXJzdENsaWNrKCk7XG5cbiAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gdGhpcy5ncmFwaGljcy5jYW52YXM7XG4gICAgY2FudmFzLmZvY3VzKCk7XG5cbiAgICBjb25zdCB3aWR0aDogbnVtYmVyID0gY2FudmFzLmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGhlaWdodDogbnVtYmVyID0gY2FudmFzLmNsaWVudEhlaWdodDtcblxuICAgIHggPSBNYXRoLmZsb29yKCh4IC8gd2lkdGgpICogY2FudmFzLndpZHRoKTtcbiAgICB5ID0gTWF0aC5mbG9vcigoeSAvIGhlaWdodCkgKiBjYW52YXMuaGVpZ2h0KTtcblxuICAgIHRoaXMuZ2FtZS5vbk1vdXNlRG93bih0aGlzLCB4LCB5LCBpZCk7XG4gIH1cblxuICBwcml2YXRlIG1vdXNlVXBIYW5kbGVyKHg6IG51bWJlciwgeTogbnVtYmVyLCBpZDogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdFJlc291cmNlc09uRmlyc3RDbGljaygpO1xuXG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IHRoaXMuZ3JhcGhpY3MuY2FudmFzO1xuICAgIGNvbnN0IHdpZHRoOiBudW1iZXIgPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0OiBudW1iZXIgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuXG4gICAgeCA9IE1hdGguZmxvb3IoKHggLyB3aWR0aCkgKiBjYW52YXMud2lkdGgpO1xuICAgIHkgPSBNYXRoLmZsb29yKCh5IC8gaGVpZ2h0KSAqIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5nYW1lLm9uTW91c2VVcCh0aGlzLCB4LCB5LCBpZCk7XG4gIH1cblxuICBwcml2YXRlIGtleURvd25IYW5kbGVyKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pbml0UmVzb3VyY2VzT25GaXJzdENsaWNrKCk7XG5cbiAgICB0aGlzLmdhbWUub25LZXlEb3duKHRoaXMsIGtleSk7XG4gIH1cblxuICBwcml2YXRlIGtleVVwSGFuZGxlcihrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZ2FtZS5vbktleVVwKHRoaXMsIGtleSk7XG4gIH1cblxuICBzdGFydChnYW1lOiBHYW1lKTogR2FtZUxvb3Age1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5ncmFwaGljcyA9IHRoaXMucmVuZGVyZXIgPT09IFJlbmRlcmVyLkNBTlZBUyA/IG5ldyBDYW52YXNHcmFwaGljc0ltcGwoKSA6IG5ldyBPcGVuR0xHcmFwaGljc0ltcGwoKTtcblxuICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCkge1xuICAgICAgICAgIHZhciByZWN0ID0gKDxhbnk+ZXZlbnQudGFyZ2V0KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICB2YXIgeCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgdmFyIHkgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgdGhpcy5sYXN0VG91Y2ggPSBldmVudDtcbiAgICAgICAgICB0aGlzLm1vdXNlRG93bkhhbmRsZXIoeCwgeSk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgdmFyIHJlY3QgPSAoPGFueT5ldmVudC50YXJnZXQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHZhciB4ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICB2YXIgeSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICB0aGlzLmxhc3RUb3VjaCA9IGV2ZW50O1xuICAgICAgICAgIHRoaXMubW91c2VNb3ZlSGFuZGxlcih4LCB5KTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH0sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgdGhpcy5ncmFwaGljcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIChldmVudCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCkge1xuICAgICAgICAgIHZhciByZWN0ID0gKDxhbnk+ZXZlbnQudGFyZ2V0KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBpZiAodGhpcy5sYXN0VG91Y2gpIHtcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy5sYXN0VG91Y2gudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIHZhciB5ID0gdGhpcy5sYXN0VG91Y2gudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5tb3VzZVVwSGFuZGxlcih4LCB5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb3VzZVVwSGFuZGxlcigwLCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyKGV2ZW50LmRlbHRhWSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnNoaWZ0UHJlc3NlZCA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICB0aGlzLmNvbW1hbmRQcmVzc2VkID0gZXZlbnQubWV0YUtleTtcbiAgICAgICAgdGhpcy5jb250cm9sUHJlc3NlZCA9IGV2ZW50LmN0cmxLZXk7XG4gICAgICAgIHRoaXMuYWx0UHJlc3NlZCA9IGV2ZW50LmFsdEtleTtcblxuICAgICAgICB0aGlzLm1vdXNlRG93bkhhbmRsZXIoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSwgZXZlbnQuYnV0dG9uKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnNoaWZ0UHJlc3NlZCA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICB0aGlzLmNvbW1hbmRQcmVzc2VkID0gZXZlbnQubWV0YUtleTtcbiAgICAgICAgdGhpcy5jb250cm9sUHJlc3NlZCA9IGV2ZW50LmN0cmxLZXk7XG4gICAgICAgIHRoaXMuYWx0UHJlc3NlZCA9IGV2ZW50LmFsdEtleTtcblxuICAgICAgICB0aGlzLm1vdXNlTW92ZUhhbmRsZXIoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmdyYXBoaWNzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc2hpZnRQcmVzc2VkID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIHRoaXMuY29tbWFuZFByZXNzZWQgPSBldmVudC5tZXRhS2V5O1xuICAgICAgICB0aGlzLmNvbnRyb2xQcmVzc2VkID0gZXZlbnQuY3RybEtleTtcbiAgICAgICAgdGhpcy5hbHRQcmVzc2VkID0gZXZlbnQuYWx0S2V5O1xuXG4gICAgICAgIHRoaXMubW91c2VVcEhhbmRsZXIoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSwgZXZlbnQuYnV0dG9uKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5zaGlmdFByZXNzZWQgPSBldmVudC5zaGlmdEtleTtcbiAgICAgIHRoaXMuY29tbWFuZFByZXNzZWQgPSBldmVudC5tZXRhS2V5O1xuICAgICAgdGhpcy5jb250cm9sUHJlc3NlZCA9IGV2ZW50LmN0cmxLZXk7XG4gICAgICB0aGlzLmFsdFByZXNzZWQgPSBldmVudC5hbHRLZXk7XG5cbiAgICAgIHRoaXMua2V5RG93bkhhbmRsZXIoZXZlbnQuY29kZSk7XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2hpZnRQcmVzc2VkID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICB0aGlzLmNvbW1hbmRQcmVzc2VkID0gZXZlbnQubWV0YUtleTtcbiAgICAgIHRoaXMuY29udHJvbFByZXNzZWQgPSBldmVudC5jdHJsS2V5O1xuICAgICAgdGhpcy5hbHRQcmVzc2VkID0gZXZlbnQuYWx0S2V5O1xuXG4gICAgICB0aGlzLmtleVVwSGFuZGxlcihldmVudC5jb2RlKTtcbiAgICB9KTtcblxuICAgIGdhbWUuaW5pdCh0aGlzKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvb3AoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9vcCgpOiB2b2lkIHtcbiAgICBjb25zdCBub3c6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGxldCBkZWx0YTogbnVtYmVyID0gMDtcbiAgICBpZiAodGhpcy5sYXN0RnJhbWUgIT09IDApIHtcbiAgICAgIGRlbHRhID0gbm93IC0gdGhpcy5sYXN0RnJhbWU7XG4gICAgfVxuICAgIHRoaXMubGFzdEZyYW1lID0gbm93O1xuXG4gICAgdGhpcy5ncmFwaGljcy5yZW5kZXJTdGFydCgpO1xuICAgIHRoaXMuZ3JhcGhpY3MuYXBwbHlGb250KCk7XG4gICAgdGhpcy5nYW1lLnVwZGF0ZSh0aGlzLCBkZWx0YSk7XG4gICAgdGhpcy5nYW1lLnJlbmRlcih0aGlzLCB0aGlzLmdyYXBoaWNzKTtcbiAgICB0aGlzLmdyYXBoaWNzLnJlbmRlckVuZCgpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubG9vcCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0WmlwUHJvZ3Jlc3MoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy56aXBQZXJjZW50TG9hZGVkO1xuICB9XG5cbiAgbG9hZFppcCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICByZXEub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgIHJlcS5vbnByb2dyZXNzID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy56aXBQZXJjZW50TG9hZGVkID0gKGUubG9hZGVkIC8gZS50b3RhbCk7XG4gICAgICB9O1xuICAgICAgcmVxLm9ubG9hZCA9IChldmVudCkgPT4ge1xuICAgICAgICBKU1ppcC5sb2FkQXN5bmMocmVxLnJlc3BvbnNlKS50aGVuKCh6aXApID0+IHtcbiAgICAgICAgICB0aGlzLm1haW5aaXAgPSB6aXA7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICByZXEub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH07XG5cbiAgICAgIHJlcS5zZW5kKCk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkTXVzaWModXJsOiBzdHJpbmcpOiBTb3VuZCB7XG4gICAgbGV0IGJ1ZmZlclByb21pc2U6IHVuZGVmaW5lZCB8IFByb21pc2U8QXJyYXlCdWZmZXI+ID0gdW5kZWZpbmVkO1xuICAgIGlmICh1cmwuaW5kZXhPZihcIl8vXCIpID49IDApIHtcbiAgICAgIGJ1ZmZlclByb21pc2UgPSB0aGlzLm1haW5aaXAuZmlsZSh1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKFwiXy9cIikpKS5hc3luYyhcImFycmF5YnVmZmVyXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdW5kOiBTb3VuZCA9IG5ldyBTb3VuZEltcGwodXJsLCB0cnVlLCBidWZmZXJQcm9taXNlKTtcbiAgICBpZiAoIXRoaXMuYWxsUmVzb3VyY2VzTG9hZGVkKCkpIHtcbiAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2goc291bmQpO1xuICAgIH1cblxuICAgIHJldHVybiBzb3VuZDtcbiAgfVxuXG4gIGxvYWRTb3VuZCh1cmw6IHN0cmluZyk6IFNvdW5kIHtcbiAgICBsZXQgYnVmZmVyUHJvbWlzZTogdW5kZWZpbmVkIHwgUHJvbWlzZTxBcnJheUJ1ZmZlcj4gPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVybC5pbmRleE9mKFwiXy9cIikgPj0gMCkge1xuICAgICAgYnVmZmVyUHJvbWlzZSA9IHRoaXMubWFpblppcC5maWxlKHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoXCJfL1wiKSkpLmFzeW5jKFwiYXJyYXlidWZmZXJcIik7XG4gICAgfVxuXG4gICAgY29uc3Qgc291bmQ6IFNvdW5kID0gbmV3IFNvdW5kSW1wbCh1cmwsIGZhbHNlLCBidWZmZXJQcm9taXNlKTtcbiAgICB0aGlzLnJlc291cmNlcy5wdXNoKHNvdW5kKTtcblxuICAgIHJldHVybiBzb3VuZDtcbiAgfVxuXG4gIHByaXZhdGUgdG9Qb3RlbnRpYWxaaXBMb2FkQmxvYih1cmw6IHN0cmluZyk6IFByb21pc2U8QmxvYj4gfCB1bmRlZmluZWQge1xuICAgIGlmICh1cmwuaW5kZXhPZihcIl8vXCIpID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1haW5aaXAuZmlsZSh1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKFwiXy9cIikpKS5hc3luYyhcImJsb2JcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgdG9Qb3RlbnRpYWxaaXBMb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodXJsLmluZGV4T2YoXCJfL1wiKSA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYWluWmlwLmZpbGUodXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZihcIl8vXCIpKSkuYXN5bmMoXCJiYXNlNjRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGxvYWRCaXRtYXAodXJsOiBzdHJpbmcpOiBCaXRtYXAge1xuICAgIGlmICh0aGlzLnJlbmRlcmVyID09PSBSZW5kZXJlci5DQU5WQVMpIHtcbiAgICAgIGNvbnN0IGJpdG1hcDogQml0bWFwID0gbmV3IEJpdG1hcEltcGwodXJsLCB0aGlzLnRvUG90ZW50aWFsWmlwTG9hZCh1cmwpLCB0aGlzLnBhbGV0dGUpO1xuICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaChiaXRtYXApO1xuICAgICAgcmV0dXJuIGJpdG1hcDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYml0bWFwOiBCaXRtYXAgPSBuZXcgT3BlbkdMQml0bWFwKHRoaXMuZ3JhcGhpY3MgYXMgT3BlbkdMR3JhcGhpY3NJbXBsLCB1cmwsIHRoaXMudG9Qb3RlbnRpYWxaaXBMb2FkKHVybCksIHRoaXMucGFsZXR0ZSk7XG4gICAgICB0aGlzLnJlc291cmNlcy5wdXNoKGJpdG1hcCk7XG5cbiAgICAgIHJldHVybiBiaXRtYXA7XG4gICAgfVxuXG4gIH1cblxuICBsb2FkU2NhbGVkVGlsZXNldCh1cmw6IHN0cmluZywgdGlsZVdpZHRoOiBudW1iZXIsIHRpbGVIZWlnaHQ6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IFRpbGVzZXQge1xuICAgIGlmICh0aGlzLnJlbmRlcmVyID09PSBSZW5kZXJlci5DQU5WQVMpIHtcbiAgICAgIGNvbnN0IHRpbGVzZXQ6IFRpbGVzZXQgPSBuZXcgVGlsZXNldEltcGwodXJsLCB0aGlzLnRvUG90ZW50aWFsWmlwTG9hZEJsb2IodXJsKSwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCBzY2FsZSwgdGhpcy5wYWxldHRlKTtcbiAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2godGlsZXNldCk7XG4gICAgICByZXR1cm4gdGlsZXNldDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGlsZXNldDogVGlsZXNldCA9IG5ldyBPcGVuR0xUaWxlc2V0SW1wbCh0aGlzLmdyYXBoaWNzIGFzIE9wZW5HTEdyYXBoaWNzSW1wbCwgdXJsLCB0aGlzLnRvUG90ZW50aWFsWmlwTG9hZEJsb2IodXJsKSwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCBzY2FsZSwgdGhpcy5wYWxldHRlKTtcbiAgICAgIHRoaXMucmVzb3VyY2VzLnB1c2godGlsZXNldCk7XG4gICAgICByZXR1cm4gdGlsZXNldDtcbiAgICB9XG4gIH1cblxuICBsb2FkVGlsZXNldCh1cmw6IHN0cmluZywgdGlsZVdpZHRoOiBudW1iZXIsIHRpbGVIZWlnaHQ6IG51bWJlcik6IFRpbGVzZXQge1xuICAgIGlmICh0aGlzLnJlbmRlcmVyID09PSBSZW5kZXJlci5DQU5WQVMpIHtcbiAgICAgIGNvbnN0IHRpbGVzZXQ6IFRpbGVzZXQgPSBuZXcgVGlsZXNldEltcGwodXJsLCB0aGlzLnRvUG90ZW50aWFsWmlwTG9hZEJsb2IodXJsKSwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0LCAxLCB0aGlzLnBhbGV0dGUpO1xuICAgICAgdGhpcy5yZXNvdXJjZXMucHVzaCh0aWxlc2V0KTtcbiAgICAgIHJldHVybiB0aWxlc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0aWxlc2V0OiBUaWxlc2V0ID0gbmV3IE9wZW5HTFRpbGVzZXRJbXBsKHRoaXMuZ3JhcGhpY3MgYXMgT3BlbkdMR3JhcGhpY3NJbXBsLCB1cmwsIHRoaXMudG9Qb3RlbnRpYWxaaXBMb2FkQmxvYih1cmwpLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIDEsIHRoaXMucGFsZXR0ZSk7XG4gICAgICB0aGlzLnJlc291cmNlcy5wdXNoKHRpbGVzZXQpO1xuICAgICAgcmV0dXJuIHRpbGVzZXQ7XG4gICAgfVxuICB9XG5cbiAgbG9hZEZvbnQodXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IEZvbnQge1xuICAgIHJldHVybiBuZXcgRm9udEltcGwodXJsLCBuYW1lKTtcbiAgfVxuXG4gIGxvYWRMRFRLKG5hbWU6IHN0cmluZywgbG9jYXRvcjogKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nKTogUHJvbWlzZTxNYXBXb3JsZD4ge1xuICAgIGNvbnN0IHdvcmxkOiBMRFRLV29ybGQgPSBuZXcgTERUS1dvcmxkKCk7XG4gICAgdGhpcy5yZXNvdXJjZXMucHVzaCh3b3JsZCk7XG5cbiAgICByZXR1cm4gd29ybGQubG9hZChuYW1lLCBmaWxlID0+IHRoaXMubG9hZEpzb24obG9jYXRvcihmaWxlKSkpXG4gIH1cblxuICBwcml2YXRlIGxvYWRUZXh0KHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBpdHMgYW4gYXNzZXQgcmVmZXJlbmNlXG4gICAgICBpZiAodXJsLmluZGV4T2YoXCJfL1wiKSA+PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1haW5aaXAuZmlsZSh1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKFwiXy9cIikpKS5hc3luYyhcInN0cmluZ1wiKS50aGVuKChyZXN1bHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcblxuICAgICAgICByZXEub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHJlcS5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXEub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlcS5zZW5kKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGxvYWRKc29uKHVybDogc3RyaW5nLCB0cmFuc2Zvcm0/OiAodGV4dDogc3RyaW5nKSA9PiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIGl0cyBhbiBhc3NldCByZWZlcmVuY2VcbiAgICAgIGlmICh1cmwuaW5kZXhPZihcIl8vXCIpID49IDApIHtcbiAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZihcIl8vXCIpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpblppcC5maWxlKHVybCkuYXN5bmMoXCJzdHJpbmdcIikudGhlbigocmVzdWx0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UodHJhbnNmb3JtID8gdHJhbnNmb3JtKHJlc3VsdCkgOiByZXN1bHQpO1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBwYXJzZSBKU09OOiBcIiArIHVybCk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh1cmwuc3RhcnRzV2l0aChcImRhdGE6YXBwbGljYXRpb24vanNvbjt1dGY4LFwiKSkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoXCIsXCIpICsgMSk7XG4gICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHRyYW5zZm9ybSA/IHRyYW5zZm9ybShyZXN1bHQpIDogcmVzdWx0KSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcblxuICAgICAgICByZXEub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHJlcS5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nID0gcmVxLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh0cmFuc2Zvcm0gPyB0cmFuc2Zvcm0ocmVzdWx0KSA6IHJlc3VsdCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXEuc2VuZCgpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpc1J1bm5pbmdTdGFuZGFsb25lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoKDxhbnk+d2luZG93Lm5hdmlnYXRvcikuc3RhbmRhbG9uZSA9PT0gdHJ1ZSkgfHwgKHdpbmRvdy5tYXRjaE1lZGlhKCcoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKScpLm1hdGNoZXMpO1xuICB9XG5cbiAgaXNUYWJsZXQoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmlzUGhvbmUoKSAmJiB0aGlzLmlzSU9TKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBpc1RhYmxldCA9IC8oaXBhZHx0YWJsZXR8KGFuZHJvaWQoPyEuKm1vYmlsZSkpfCh3aW5kb3dzKD8hLipwaG9uZSkoLip0b3VjaCkpfGtpbmRsZXxwbGF5Ym9va3xzaWxrfChwdWZmaW4oPyEuKihJUHxBUHxXUCkpKSkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblxuICAgIHJldHVybiBpc1RhYmxldDtcbiAgfVxuXG4gIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSU9TKCkgfHwgdGhpcy5pc0FuZHJvaWQoKTtcbiAgfVxuXG4gIGlzQW5kcm9pZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSAhPSBudWxsO1xuICB9XG5cbiAgaXNJT1MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdpUGFkIFNpbXVsYXRvcicsXG4gICAgICAnaVBob25lIFNpbXVsYXRvcicsXG4gICAgICAnaVBvZCBTaW11bGF0b3InLFxuICAgICAgJ2lQYWQnLFxuICAgICAgJ2lQaG9uZScsXG4gICAgICAnaVBvZCdcbiAgICBdLmluZGV4T2YobmF2aWdhdG9yLnBsYXRmb3JtKSA+PSAwXG4gICAgICAvLyBpUGFkIG9uIGlPUyAxMyBkZXRlY3Rpb25cbiAgICAgIHx8IChuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKFwiTWFjXCIpICYmIFwib250b3VjaGVuZFwiIGluIGRvY3VtZW50KVxuICB9XG5cbiAgaXNQaG9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0lPUygpICYmIHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KVwiKS5tYXRjaGVzO1xuICB9XG5cbiAgc2V0U291bmRWb2x1bWUodjogbnVtYmVyKTogdm9pZCB7XG4gICAgU291bmRJbXBsLnNldFNvdW5kVm9sdW1lKHYpO1xuICB9XG5cbiAgZ2V0U291bmRWb2x1bWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gU291bmRJbXBsLmdldFNvdW5kVm9sdW1lKCk7XG4gIH1cblxuICBzZXRNdXNpY1ZvbHVtZSh2OiBudW1iZXIpOiB2b2lkIHtcbiAgICBTb3VuZEltcGwuc2V0TXVzaWNWb2x1bWUodik7XG4gIH1cblxuICBnZXRNdXNpY1ZvbHVtZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBTb3VuZEltcGwuZ2V0TXVzaWNWb2x1bWUoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEtleXMge1xuICBzdGF0aWMgRVNDQVBFX0tFWTogc3RyaW5nID0gXCJFc2NhcGVcIjtcbiAgc3RhdGljIEVOVEVSX0tFWTogc3RyaW5nID0gXCJFbnRlclwiO1xuICBzdGF0aWMgTEVGVF9LRVk6IHN0cmluZyA9IFwiQXJyb3dMZWZ0XCI7XG4gIHN0YXRpYyBSSUdIVF9LRVk6IHN0cmluZyA9IFwiQXJyb3dSaWdodFwiO1xuICBzdGF0aWMgVVBfS0VZOiBzdHJpbmcgPSBcIkFycm93VXBcIjtcbiAgc3RhdGljIERPV05fS0VZOiBzdHJpbmcgPSBcIkFycm93RG93blwiO1xuICBzdGF0aWMgU1BBQ0VfS0VZOiBzdHJpbmcgPSBcIiBcIjtcbiAgc3RhdGljIFNfS0VZOiBzdHJpbmcgPSBcInNcIjtcbiAgc3RhdGljIE1fS0VZOiBzdHJpbmcgPSBcIm1cIjtcbiAgc3RhdGljIEFfS0VZOiBzdHJpbmcgPSBcImFcIjtcbiAgc3RhdGljIFdfS0VZOiBzdHJpbmcgPSBcIndcIjtcbiAgc3RhdGljIERfS0VZOiBzdHJpbmcgPSBcImRcIjtcbiAgc3RhdGljIENPTlRST0xfS0VZOiBzdHJpbmcgPSBcIkNvbnRyb2xcIjtcbiAgc3RhdGljIE1FVEFfS0VZOiBzdHJpbmcgPSBcIk1ldGFcIjtcbiAgc3RhdGljIEFMVF9LRVk6IHN0cmluZyA9IFwiQWx0XCI7XG4gIHN0YXRpYyBUQUJfS0VZOiBzdHJpbmcgPSBcIlRhYlwiO1xufVxuIiwiaW1wb3J0IHsgQVVESU9fQ09OVEVYVCwgU291bmRJbXBsIH0gZnJvbSBcIi4vaW1wbC9Tb3VuZEltcGxcIjtcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSBcIi4vU291bmRcIjtcblxuaW50ZXJmYWNlIFNvdW5kUG9pbnQge1xuICAgIHg/OiBudW1iZXJcbiAgICB5PzogbnVtYmVyXG4gICAgdm9sdW1lOiBudW1iZXJcbiAgICBzb3VyY2U6IEF1ZGlvU2NoZWR1bGVkU291cmNlTm9kZVxuICAgIGdhaW46IEdhaW5Ob2RlXG4gICAgY2F0ZWdvcnk6IHN0cmluZ1xufVxuXG5leHBvcnQgZW51bSBTb3VuZEVhc2luZyB7XG4gICAgTGluZWFyLFxuICAgIFF1YWRyYXRpYyxcbiAgICBDdWJpY1xufVxuXG5pbnRlcmZhY2UgU291bmRDYXRlZ29yeSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgdm9sdW1lOiBudW1iZXJcbiAgICBtYXhEaXN0YW5jZTI6IG51bWJlclxuICAgIHNjYWxlMjogbnVtYmVyXG4gICAgZWFzaW5nOiBTb3VuZEVhc2luZ1xufVxuXG5leHBvcnQgY2xhc3MgU291bmRTY2FwZSB7XG4gICAgcHJpdmF0ZSBfc291bmRWb2x1bWU6IG51bWJlciA9IDE7XG5cbiAgICBwcml2YXRlIHBvaW50czogU291bmRQb2ludFtdID0gW11cbiAgICBwcml2YXRlIGxpc3RlbmVyWDogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgbGlzdGVuZXJZOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBjYXRlZ29yaWVzOiBSZWNvcmQ8c3RyaW5nLCBTb3VuZENhdGVnb3J5PiA9IHt9XG5cbiAgICBjYXRlZ29yeShuYW1lOiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyLCBtYXhEaXN0YW5jZTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBlYXNpbmc6IFNvdW5kRWFzaW5nKTogU291bmRTY2FwZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIG5hbWUsIHZvbHVtZSwgbWF4RGlzdGFuY2UyOiBtYXhEaXN0YW5jZSAqIG1heERpc3RhbmNlLCBzY2FsZTI6IHNjYWxlICogc2NhbGUsIGVhc2luZ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIFxuICAgIGdldCBzb3VuZFZvbHVtZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWb2x1bWU7XG4gICAgfVxuXG4gICAgc2V0IHNvdW5kVm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc291bmRWb2x1bWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lclggPSB4XG4gICAgICAgIHRoaXMubGlzdGVuZXJZID0geVxuICAgICAgICB0aGlzLnVwZGF0ZVZvbHVtZXMoKVxuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMucG9pbnRzKSB7XG4gICAgICAgICAgICBwb2ludC5zb3VyY2Uuc3RvcCgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIH1cblxuICAgIHBsYXkoc291bmQ6IFNvdW5kLCB2b2x1bWU6IG51bWJlciwgY2F0ZWdvcnk6IHN0cmluZywgeD86IG51bWJlciwgeT86IG51bWJlcikge1xuICAgICAgICAvLyBwcm90ZWN0IGFnYWluc3QgcGxheWluZyBzb3VuZHMgdG9vIGVhcmx5IG9yIHdpdGhvdXQgYXV0byB3b3JraW5nXG4gICAgICAgIGlmICghQVVESU9fQ09OVEVYVCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1wbCA9IDxTb3VuZEltcGw+c291bmRcbiAgICAgICAgY29uc3Qgc291cmNlID0gQVVESU9fQ09OVEVYVC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgc291cmNlLmJ1ZmZlciA9IGltcGwuYnVmZmVyO1xuICAgICAgICBjb25zdCBnYWluID0gQVVESU9fQ09OVEVYVC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHNvdXJjZS5jb25uZWN0KGdhaW4pO1xuICAgICAgICBnYWluLmNvbm5lY3QoQVVESU9fQ09OVEVYVC5kZXN0aW5hdGlvbik7XG4gICAgICAgIGNvbnN0IHBvaW50OiBTb3VuZFBvaW50ID0ge1xuICAgICAgICAgICAgeCwgeSwgdm9sdW1lLFxuICAgICAgICAgICAgc291cmNlLCBnYWluLCBjYXRlZ29yeVxuICAgICAgICB9XG4gICAgICAgIGdhaW4uZ2Fpbi52YWx1ZSA9IHRoaXMuY2FsY3VsYXRlVm9sdW1lKHBvaW50KVxuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KVxuICAgICAgICBzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIGV2ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wb2ludHMuaW5kZXhPZihwb2ludClcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBTb3VuZCBlbmRlZDogJHtzb3VuZC5uYW1lfSwgdG90YWw6ICR7dGhpcy5wb2ludHMubGVuZ3RofWApXG4gICAgICAgIH0pXG4gICAgICAgIHNvdXJjZS5zdGFydCgpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBTb3VuZCBzdGFydGVkOiAke3NvdW5kLm5hbWV9LCB0b3RhbDogJHt0aGlzLnBvaW50cy5sZW5ndGh9YClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVZvbHVtZXMoKSB7XG4gICAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5wb2ludHMpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuY2FsY3VsYXRlVm9sdW1lKHBvaW50KTtcbiAgICAgICAgICAgIHBvaW50LmdhaW4uZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSh2YWx1ZSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlVm9sdW1lKHBvaW50OiBTb3VuZFBvaW50KTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXNbcG9pbnQuY2F0ZWdvcnldXG4gICAgICAgIGlmIChjYXRlZ29yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9pbnQudm9sdW1lICogdGhpcy5fc291bmRWb2x1bWVcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHBvaW50LnggPT09IHVuZGVmaW5lZCB8fCBwb2ludC55ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2ludC52b2x1bWUgKiBjYXRlZ29yeS52b2x1bWUgKiB0aGlzLl9zb3VuZFZvbHVtZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGR4OiBudW1iZXIgPSBwb2ludC54IC0gdGhpcy5saXN0ZW5lclhcbiAgICAgICAgY29uc3QgZHk6IG51bWJlciA9IHBvaW50LnkgLSB0aGlzLmxpc3RlbmVyWVxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IChkeCAqIGR4ICsgZHkgKiBkeSkgLyBjYXRlZ29yeS5zY2FsZTI7XG4gICAgICAgIC8vICogKGxvcyA/IDEgOiAwLjMpIFRPRE86IGNhbGxiYWNrXG4gICAgICAgIGNvbnN0IHJlZHVjdGlvbiA9IE1hdGgubWF4KDEgLSBkaXN0YW5jZSAvIGNhdGVnb3J5Lm1heERpc3RhbmNlMiwgMCk7XG4gICAgICAgIHN3aXRjaCAoY2F0ZWdvcnkuZWFzaW5nKSB7XG4gICAgICAgICAgICBjYXNlIFNvdW5kRWFzaW5nLkxpbmVhcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWb2x1bWUgKiBwb2ludC52b2x1bWUgKiBjYXRlZ29yeS52b2x1bWUgKiByZWR1Y3Rpb25cbiAgICAgICAgICAgIGNhc2UgU291bmRFYXNpbmcuUXVhZHJhdGljOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zb3VuZFZvbHVtZSAqIHBvaW50LnZvbHVtZSAqIGNhdGVnb3J5LnZvbHVtZSAqIHJlZHVjdGlvbiAqIHJlZHVjdGlvblxuICAgICAgICAgICAgY2FzZSBTb3VuZEVhc2luZy5DdWJpYzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWb2x1bWUgKiBwb2ludC52b2x1bWUgKiBjYXRlZ29yeS52b2x1bWUgKiByZWR1Y3Rpb24gKiByZWR1Y3Rpb24gKiByZWR1Y3Rpb25cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEJpdG1hcCB9IGZyb20gXCIuLi9CaXRtYXBcIjtcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcIi4uL0dyYXBoaWNzXCI7XG5pbXBvcnQgeyBHcmFwaGljc0ltcGwgfSBmcm9tIFwiLi9HcmFwaGljc0ltcGxcIjtcbmltcG9ydCB7IFBhbGV0dGUgfSBmcm9tIFwiLi9QYWxldHRlXCI7XG5cbmV4cG9ydCBjbGFzcyBCaXRtYXBJbXBsIGltcGxlbWVudHMgQml0bWFwIHtcbiAgd2lkdGg6IG51bWJlciA9IDA7XG4gIGhlaWdodDogbnVtYmVyID0gMDtcbiAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIGRhdGFVcmxMb2FkZXI6IFByb21pc2U8c3RyaW5nPiB8IHVuZGVmaW5lZCwgcGFsOiBQYWxldHRlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5uYW1lID0gdXJsO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmltYWdlLndpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmltYWdlLmhlaWdodDtcblxuICAgICAgaWYgKHBhbCkge1xuICAgICAgICBwYWwuYWRqdXN0SW1hZ2UodGhpcy5pbWFnZSkudGhlbigoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpID0+IHsgXG4gICAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkYXRhVXJsTG9hZGVyKSB7XG4gICAgICBkYXRhVXJsTG9hZGVyLnRoZW4oKGJhc2U2NDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gXCJkYXRhOlwiK3VybC5zdWJzdHJpbmcodXJsLmxlbmd0aC0zKStcIjtiYXNlNjQsXCIrYmFzZTY0O1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbWFnZS5zcmMgPSB1cmw7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY3R4ID0gKGdyYXBoaWNzIGFzIEdyYXBoaWNzSW1wbCkuY3R4O1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgeCwgeSk7XG4gIH1cblxuICBkcmF3U2NhbGVkKGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY3R4ID0gKGdyYXBoaWNzIGFzIEdyYXBoaWNzSW1wbCkuY3R4O1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbiAgXG4gIGluaXRPbkZpcnN0Q2xpY2soKTogdm9pZCB7XG4gIH1cbn0iLCJpbXBvcnQgeyBGb250IH0gZnJvbSBcIi4uL0ZvbnRcIjtcblxuZGVjbGFyZSBsZXQgRm9udEZhY2U6IGFueTtcblxuZXhwb3J0IGNsYXNzIEZvbnRJbXBsIGltcGxlbWVudHMgRm9udCB7XG4gIG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHN0eWxlLmlubmVySFRNTCA9IFwiQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBcIituYW1lK1wiOyBzcmM6IHVybCgnXCIrdXJsK1wiJyk7IH0gYm9keSB7IGZvbnQtZmFtaWx5OiBcIituYW1lK1wiOyB9XCI7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBhcHBseShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY3R4LmZvbnQgPSBzaXplK1wicHggXCIgKyB0aGlzLm5hbWU7XG4gIH1cbn0iLCJpbXBvcnQgeyBCaXRtYXAsIEdyYXBoaWNzIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBGb250IH0gZnJvbSBcIi4uL0ZvbnRcIjtcbmltcG9ydCB7IE9mZnNjcmVlbiB9IGZyb20gXCIuLi9HcmFwaGljc1wiO1xuaW1wb3J0IHsgRm9udEltcGwgfSBmcm9tIFwiLi9Gb250SW1wbFwiO1xuaW1wb3J0IHsgU291bmRJbXBsIH0gZnJvbSBcIi4vU291bmRJbXBsXCI7XG5cbmRlY2xhcmUgbGV0IEluc3RhbGxUcmlnZ2VyOiBhbnk7XG5cbnZhciBpc0ZpcmVmb3ggPSB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnO1xuXG5jbGFzcyBPZmZzY3JlZW5JbXBsIGltcGxlbWVudHMgT2Zmc2NyZWVuIHtcbiAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgfVxuXG4gIGdldFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgfVxuXG4gIHNldERpbWVuc2lvbih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG59XG5cbmNsYXNzIENvcHlCaXRtYXAgaW1wbGVtZW50cyBCaXRtYXAge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgbG9hZGVkOiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmcgPSBcImNvcHlcIjtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICB9XG5cbiAgZHJhdyhncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY3R4ID0gKGdyYXBoaWNzIGFzIEdyYXBoaWNzSW1wbCkuY3R4O1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIHgsIHkpO1xuICB9XG5cbiAgZHJhd1NjYWxlZChncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGN0eCA9IChncmFwaGljcyBhcyBHcmFwaGljc0ltcGwpLmN0eDtcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGdldERyYXdhYmxlKCk6IENhbnZhc0ltYWdlU291cmNlIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cblxuICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHcmFwaGljc0ltcGwgaW1wbGVtZW50cyBHcmFwaGljcyB7XG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBtYWluQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIGZvbnQ6IEZvbnQ7XG4gIGZvbnRTaXplOiBudW1iZXIgPSAyMDtcbiAgb2Zmc2NyZWVuOiBPZmZzY3JlZW4gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lY2FudmFzXCIpO1xuICAgIHRoaXMuY3R4ID0gPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD4gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIsIHsgYWxwaGE6IGZhbHNlIH0pO1xuICAgIHRoaXMubWFpbkN0eCA9IHRoaXMuY3R4O1xuXG4gICAgKDxhbnk+IHRoaXMuY3R4KS53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAoPGFueT4gdGhpcy5jYW52YXMpLnN0eWxlLmZvbnRTbW9vdGggPSBcIm5ldmVyXCI7XG4gICAgKDxhbnk+IHRoaXMuY2FudmFzKS5zdHlsZS53ZWJraXRGb250U21vb3RoaW5nID0gXCJub25lXCI7XG5cbiAgICBpZiAoaXNGaXJlZm94KSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IFwiY3Jpc3AtZWRnZXNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSBcInBpeGVsYXRlZFwiO1xuICAgIH1cblxuICAgIHRoaXMuZm9udCA9IG5ldyBGb250SW1wbChcImZvbnQudHRmXCIsIFwiR3V0ZURlZmF1bHRcIik7XG4gICAgaWYgKHRoaXMuZm9udCkge1xuICAgICAgdGhpcy5hcHBseUZvbnQoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJTdGFydCgpOiB2b2lkIHtcblxuICB9XG5cbiAgcmVuZGVyRW5kKCk6IHZvaWQge1xuXG4gIH1cbiAgXG4gIG5ld1Jlc291cmNlTG9hZGVkKCk6IHZvaWQge1xuICB9XG5cbiAgaW5pdFJlc291cmNlT25Mb2FkZWQoKTogdm9pZCB7XG4gIH1cblxuICBzbW9vdGgoKTogdm9pZCB7XG4gICAgKDxhbnk+IHRoaXMuY3R4KS53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7XG4gICAgKDxhbnk+IHRoaXMuY2FudmFzKS5zdHlsZS5mb250U21vb3RoID0gXCJpbml0aWFsXCI7XG4gICAgKDxhbnk+IHRoaXMuY2FudmFzKS5zdHlsZS53ZWJraXRGb250U21vb3RoaW5nID0gXCJpbml0aWFsXCI7XG5cbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IFwiaW5pdGlhbFwiO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCk6IERPTU1hdHJpeCB7XG4gICAgcmV0dXJuIHRoaXMuY3R4LmdldFRyYW5zZm9ybSgpO1xuICB9XG4gIFxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBjbGlwKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBzcXVhcmVQYXRoID0gbmV3IFBhdGgyRCgpO1xuICAgIHNxdWFyZVBhdGgucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5jbGlwKHNxdWFyZVBhdGgpO1xuICB9XG5cbiAgY3JlYXRlT2Zmc2NyZWVuKCk6IE9mZnNjcmVlbiB7XG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKGN0eCkge1xuICAgICAgKDxhbnk+IGN0eCkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAoPGFueT4gY2FudmFzKS5zdHlsZS5mb250U21vb3RoID0gXCJuZXZlclwiO1xuICAgICAgKDxhbnk+IGNhbnZhcykuc3R5bGUud2Via2l0Rm9udFNtb290aGluZyA9IFwibm9uZVwiO1xuXG4gICAgICByZXR1cm4gbmV3IE9mZnNjcmVlbkltcGwoY2FudmFzLCBjdHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gY3JlYXRlIG9mZnNjcmVlbiBjYW52YXNcIik7XG4gICAgfVxuICB9XG5cbiAgZ2V0T2Zmc2NyZWVuKCk6IE9mZnNjcmVlbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm9mZnNjcmVlbjtcbiAgfVxuXG4gIGRyYXdUb09mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbiB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoc2NyZWVuKSB7XG4gICAgICB0aGlzLmN0eCA9IChzY3JlZW4gYXMgT2Zmc2NyZWVuSW1wbCkuY3R4O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN0eCA9IHRoaXMubWFpbkN0eDtcbiAgICB9XG4gICAgdGhpcy5vZmZzY3JlZW4gPSBzY3JlZW47XG4gIH1cblxuICBkcmF3T2Zmc2NyZWVuKHNjcmVlbjogT2Zmc2NyZWVuKTogdm9pZCB7XG4gICAgKDxhbnk+IHRoaXMuY3R4KS53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoKHNjcmVlbiBhcyBPZmZzY3JlZW5JbXBsKS5jYW52YXMsIDAsICAwKTtcbiAgfVxuXG4gIGRyYXdTY2FsZWRPZmZzY3JlZW4oc2NyZWVuOiBPZmZzY3JlZW4sIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICg8YW55PiB0aGlzLmN0eCkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKChzY3JlZW4gYXMgT2Zmc2NyZWVuSW1wbCkuY2FudmFzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGNsZWFyUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBmaXRTY3JlZW4ocGl4ZWxTY2FsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgd2lkdGg6IG51bWJlciA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gICAgY29uc3QgaGVpZ2h0OiBudW1iZXIgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMClcbiAgICBjb25zdCByZWFsV2lkdGg6IG51bWJlciA9IE1hdGguZmxvb3Iod2lkdGggLyBwaXhlbFNjYWxlKSAqIHBpeGVsU2NhbGU7XG4gICAgY29uc3QgcmVhbEhlaWdodDogbnVtYmVyID0gTWF0aC5mbG9vcihoZWlnaHQgLyBwaXhlbFNjYWxlKSAqIHBpeGVsU2NhbGU7XG4gICAgY29uc3QgdmlydHVhbFdpZHRoOiBudW1iZXIgPSByZWFsV2lkdGggLyBwaXhlbFNjYWxlO1xuICAgIGNvbnN0IHZpcnR1YWxIZWlnaHQ6IG51bWJlciA9IHJlYWxIZWlnaHQgLyBwaXhlbFNjYWxlO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB2aXJ0dWFsV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdmlydHVhbEhlaWdodDtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHJlYWxXaWR0aCArIFwicHhcIjtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSByZWFsSGVpZ2h0ICsgXCJweFwiO1xuICB9XG5cbiAgc2V0QWxwaGEoYWxwaGE6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gIH1cbiAgXG4gIGNvcHkoKTogQml0bWFwIHtcbiAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgY2FudmFzLmhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gIFxuICAgIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik/LmRyYXdJbWFnZSh0aGlzLmNhbnZhcywgMCwgMCk7XG4gICAgcmV0dXJuIG5ldyBDb3B5Qml0bWFwKGNhbnZhcyk7XG4gIH1cblxuICBnZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gIH1cbiAgXG4gIHB1c2goKTogdm9pZCB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICB9XG5cbiAgcG9wKCk6IHZvaWQge1xuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh4LHkpO1xuICB9XG5cbiAgc2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN0eC5zY2FsZSh4LHkpO1xuICB9XG5cbiAgYXBwbHlGb250KCk6IHZvaWQge1xuICAgIHRoaXMuZm9udC5hcHBseSh0aGlzLmN0eCwgdGhpcy5mb250U2l6ZSk7XG4gIH1cblxuICBzZXRGb250KGZvbnQ6IEZvbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZvbnQgPSBmb250O1xuICAgIHRoaXMuYXBwbHlGb250KCk7XG4gIH1cblxuICBzZXRGb250U2l6ZShzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmZvbnRTaXplID0gc2l6ZTtcbiAgICB0aGlzLmFwcGx5Rm9udCgpO1xuICB9XG5cbiAgZ2V0U3RyaW5nV2lkdGgodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gIH1cblxuICBkcmF3U3RyaW5nKHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGNvbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICB9XG5cbiAgc2V0Q29tcG9zaXRlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICg8YW55PiB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24pID0gbmFtZTtcbiAgfVxuXG4gIGRyYXdDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZywgd2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gY29sO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGZpbGxDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbDtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG5cbiAgZmlsbFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2w6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbDtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCh4LHksd2lkdGgsaGVpZ2h0KTtcbiAgfVxuICBcbiAgc2V0TGluZURhc2goc2VnbWVudHM6IG51bWJlcltdKTogdm9pZCB7XG4gICAgdGhpcy5jdHguc2V0TGluZURhc2goc2VnbWVudHMpO1xuICB9XG5cbiAgZHJhd0xpbmUoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgY29sOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIgPSAxKTogdm9pZCB7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBjb2w7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgdGhpcy5jdHgubGluZVRvKHgyLCB5Mik7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3Qml0bWFwKHg6IG51bWJlciwgeTogbnVtYmVyLCBiaXRtYXA6IEJpdG1hcCk6IHZvaWQge1xuICAgIGlmICghYml0bWFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgKDxhbnk+IHRoaXMuY3R4KS53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICBiaXRtYXAuZHJhdyh0aGlzLCB4LCB5KTtcbiAgfVxuXG4gIGRyYXdTY2FsZWRCaXRtYXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBiaXRtYXA6IEJpdG1hcCk6IHZvaWQge1xuICAgIGlmICghYml0bWFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICg8YW55PiB0aGlzLmN0eCkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgYml0bWFwLmRyYXdTY2FsZWQodGhpcywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbn0iLCJpbXBvcnQgeyBNYXBOb2RlIH0gZnJvbSBcIi4uL3BhdGgvTWFwTm9kZVwiO1xuXG5pbnRlcmZhY2UgQ29sIHtcbiAgICByOiBudW1iZXI7XG4gICAgZzogbnVtYmVyO1xuICAgIGI6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4OiBzdHJpbmcpOiBDb2wge1xuICAgIHZhciBiaWdpbnQgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICB2YXIgciA9IChiaWdpbnQgPj4gMTYpICYgMjU1O1xuICAgIHZhciBnID0gKGJpZ2ludCA+PiA4KSAmIDI1NTtcbiAgICB2YXIgYiA9IGJpZ2ludCAmIDI1NTtcblxuICAgIHJldHVybiB7ciwgZywgYn1cbn1cblxuZnVuY3Rpb24gZGVsdGFFKHJnYkE6IENvbCwgcmdiQjogQ29sKSB7XG4gICAgbGV0IGxhYkEgPSByZ2IybGFiKHJnYkEpO1xuICAgIGxldCBsYWJCID0gcmdiMmxhYihyZ2JCKTtcbiAgICBsZXQgZGVsdGFMID0gbGFiQVswXSAtIGxhYkJbMF07XG4gICAgbGV0IGRlbHRhQSA9IGxhYkFbMV0gLSBsYWJCWzFdO1xuICAgIGxldCBkZWx0YUIgPSBsYWJBWzJdIC0gbGFiQlsyXTtcbiAgICBsZXQgYzEgPSBNYXRoLnNxcnQobGFiQVsxXSAqIGxhYkFbMV0gKyBsYWJBWzJdICogbGFiQVsyXSk7XG4gICAgbGV0IGMyID0gTWF0aC5zcXJ0KGxhYkJbMV0gKiBsYWJCWzFdICsgbGFiQlsyXSAqIGxhYkJbMl0pO1xuICAgIGxldCBkZWx0YUMgPSBjMSAtIGMyO1xuICAgIGxldCBkZWx0YUggPSBkZWx0YUEgKiBkZWx0YUEgKyBkZWx0YUIgKiBkZWx0YUIgLSBkZWx0YUMgKiBkZWx0YUM7XG4gICAgZGVsdGFIID0gZGVsdGFIIDwgMCA/IDAgOiBNYXRoLnNxcnQoZGVsdGFIKTtcbiAgICBsZXQgc2MgPSAxLjAgKyAwLjA0NSAqIGMxO1xuICAgIGxldCBzaCA9IDEuMCArIDAuMDE1ICogYzE7XG4gICAgbGV0IGRlbHRhTEtsc2wgPSBkZWx0YUwgLyAoMS4wKTtcbiAgICBsZXQgZGVsdGFDa2NzYyA9IGRlbHRhQyAvIChzYyk7XG4gICAgbGV0IGRlbHRhSGtoc2ggPSBkZWx0YUggLyAoc2gpO1xuICAgIGxldCBpID0gZGVsdGFMS2xzbCAqIGRlbHRhTEtsc2wgKyBkZWx0YUNrY3NjICogZGVsdGFDa2NzYyArIGRlbHRhSGtoc2ggKiBkZWx0YUhraHNoO1xuICAgIHJldHVybiBpIDwgMCA/IDAgOiBNYXRoLnNxcnQoaSk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHJnYjJsYWIocmdiOiBDb2wpe1xuICAgIGxldCByID0gcmdiLnIgLyAyNTUsIGcgPSByZ2IuZyAvIDI1NSwgYiA9IHJnYi5iIC8gMjU1LCB4LCB5LCB6O1xuICAgIHIgPSAociA+IDAuMDQwNDUpID8gTWF0aC5wb3coKHIgKyAwLjA1NSkgLyAxLjA1NSwgMi40KSA6IHIgLyAxMi45MjtcbiAgICBnID0gKGcgPiAwLjA0MDQ1KSA/IE1hdGgucG93KChnICsgMC4wNTUpIC8gMS4wNTUsIDIuNCkgOiBnIC8gMTIuOTI7XG4gICAgYiA9IChiID4gMC4wNDA0NSkgPyBNYXRoLnBvdygoYiArIDAuMDU1KSAvIDEuMDU1LCAyLjQpIDogYiAvIDEyLjkyO1xuICAgIHggPSAociAqIDAuNDEyNCArIGcgKiAwLjM1NzYgKyBiICogMC4xODA1KSAvIDAuOTUwNDc7XG4gICAgeSA9IChyICogMC4yMTI2ICsgZyAqIDAuNzE1MiArIGIgKiAwLjA3MjIpIC8gMS4wMDAwMDtcbiAgICB6ID0gKHIgKiAwLjAxOTMgKyBnICogMC4xMTkyICsgYiAqIDAuOTUwNSkgLyAxLjA4ODgzO1xuICAgIHggPSAoeCA+IDAuMDA4ODU2KSA/IE1hdGgucG93KHgsIDEvMykgOiAoNy43ODcgKiB4KSArIDE2LzExNjtcbiAgICB5ID0gKHkgPiAwLjAwODg1NikgPyBNYXRoLnBvdyh5LCAxLzMpIDogKDcuNzg3ICogeSkgKyAxNi8xMTY7XG4gICAgeiA9ICh6ID4gMC4wMDg4NTYpID8gTWF0aC5wb3coeiwgMS8zKSA6ICg3Ljc4NyAqIHopICsgMTYvMTE2O1xuICAgIHJldHVybiBbKDExNiAqIHkpIC0gMTYsIDUwMCAqICh4IC0geSksIDIwMCAqICh5IC0geildXG4gIH1cblxuZXhwb3J0IGNsYXNzIFBhbGV0dGUge1xuICBjb2xzOiBDb2xbXSA9IFtdO1xuICBtYXBwaW5nOiBSZWNvcmQ8bnVtYmVyLCBDb2w+ID0ge307XG5cbiAgY29uc3RydWN0b3IoaGV4VmFsdWVzOiBzdHJpbmcpIHtcbiAgICBmb3IgKGNvbnN0IGhleCBvZiBoZXhWYWx1ZXMuc3BsaXQoXCJcXG5cIikpIHtcbiAgICAgICAgdGhpcy5jb2xzLnB1c2goaGV4VG9SZ2IoaGV4KSk7XG4gICAgfVxuICB9XG5cbiAgZmluZEJlc3RNYXRjaChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogQ29sIHtcbiAgICBjb25zdCB0b01hdGNoQ29sOiBDb2wgPSB7IHIsIGcsIGIgfTtcbiAgICBsZXQgYmVzdE1hdGNoOiBDb2wgPSB0aGlzLmNvbHNbMF07XG4gICAgbGV0IHNtYWxsZXN0RGVsdGEgPSAxMDAwO1xuXG4gICAgZm9yIChjb25zdCBwYWxDb2wgb2YgdGhpcy5jb2xzKSB7XG4gICAgICAgIGNvbnN0IGRpZiA9IGRlbHRhRShwYWxDb2wsIHRvTWF0Y2hDb2wpO1xuICAgICAgICBpZiAoZGlmIDwgc21hbGxlc3REZWx0YSkge1xuICAgICAgICAgICAgc21hbGxlc3REZWx0YSA9IGRpZjtcbiAgICAgICAgICAgIGJlc3RNYXRjaCA9IHBhbENvbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gIH1cblxuICBhZGp1c3RJbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgICAgICAgY29uc3QgaWQ6IEltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwwLGltYWdlLndpZHRoLGltYWdlLmhlaWdodCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7aTxpZC5kYXRhLmxlbmd0aDtpKz00KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sOiBudW1iZXIgPSBpZC5kYXRhW2ldO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IGlkLmRhdGFbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgZyA9IGlkLmRhdGFbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBpZC5kYXRhW2kgKyAyXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZCA9IHIgfCAoMHhGRjAwICYgKGcgPDwgOCkpIHwgKDB4RkYwMDAwICYgKGIgPDwgMTYpKTtcbiAgICAgICAgICAgICAgICBsZXQgYmVzdE1hdGNoID0gdGhpcy5tYXBwaW5nW2NvbWJpbmVkXTtcbiAgICAgICAgICAgICAgICBpZiAoIWJlc3RNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2ggPSB0aGlzLmZpbmRCZXN0TWF0Y2gociwgZywgYik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwcGluZ1tjb21iaW5lZF0gPSBiZXN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlkLmRhdGFbaV0gPSBiZXN0TWF0Y2gucjtcbiAgICAgICAgICAgICAgICBpZC5kYXRhW2kgKyAxXSA9IGJlc3RNYXRjaC5nO1xuICAgICAgICAgICAgICAgIGlkLmRhdGFbaSArIDJdID0gYmVzdE1hdGNoLmI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKGlkLCAwLCAwKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICByZXN1bHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoXCJGYWlsdXJlIHRvIGNyZWF0ZSBjb250ZXh0XCIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBpc011c2ljT24sIGlzU291bmRPbiB9IGZyb20gXCIuLi9HdXRlXCI7XG5pbXBvcnQgeyBTb3VuZCB9IGZyb20gXCIuLi9Tb3VuZFwiO1xuXG5sZXQgQXVkaW9Db250ZXh0OiBhbnk7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgKDxhbnk+d2luZG93KS53ZWJraXRBdWRpb0NvbnRleHQ7XG59XG5leHBvcnQgbGV0IEFVRElPX0NPTlRFWFQ6IEF1ZGlvQ29udGV4dDtcblxuZnVuY3Rpb24gaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpIHtcbiAgaWYgKGlzTXVzaWNPbigpKSB7XG4gICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgIFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnN0b3AoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBBVURJT19DT05URVhULnN1c3BlbmQoKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdXNwZW5kIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VzcGVuZCBhdWRpbyBjb250ZXh0IGZhaWxlZFwiKTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEFVRElPX0NPTlRFWFQucmVzdW1lKCkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdW1lIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdW1lIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMhLnBsYXkoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMhLnZvbHVtZSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzU291bmRPbigpKSB7XG4gICAgZm9yIChjb25zdCBsb29wIG9mIFNvdW5kSW1wbC5DVVJSRU5UX0xPT1BTKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgIGxvb3Auc3RvcChmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb29wLnBsYXkobG9vcC52b2x1bWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xufVxuXG5leHBvcnQgY2xhc3MgU291bmRJbXBsIGltcGxlbWVudHMgU291bmQge1xuICBzdGF0aWMgQ1VSUkVOVF9NVVNJQzogU291bmRJbXBsIHwgbnVsbDtcbiAgc3RhdGljIENVUlJFTlRfTE9PUFM6IFNvdW5kSW1wbFtdID0gW107XG5cbiAgc3RhdGljIHNvdW5kVm9sdW1lOiBudW1iZXIgPSAxO1xuICBzdGF0aWMgbXVzaWNWb2x1bWU6IG51bWJlciA9IDE7XG5cbiAgc3RhdGljIHNldFNvdW5kVm9sdW1lKHY6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc291bmRWb2x1bWUgPSB2O1xuXG4gICAgZm9yIChjb25zdCBsb29wIG9mIHRoaXMuQ1VSUkVOVF9MT09QUykge1xuICAgICAgbG9vcC5nYWluLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUobG9vcC52b2x1bWUgKiBTb3VuZEltcGwuc291bmRWb2x1bWUsIEFVRElPX0NPTlRFWFQuY3VycmVudFRpbWUgKyAwLjI1KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0U291bmRWb2x1bWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zb3VuZFZvbHVtZTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRNdXNpY1ZvbHVtZSh2OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm11c2ljVm9sdW1lID0gdjtcblxuICAgIGlmIChTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQykge1xuICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLmdhaW4pIHtcbiAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuZ2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDLnZvbHVtZSAqIFNvdW5kSW1wbC5tdXNpY1ZvbHVtZSwgQVVESU9fQ09OVEVYVC5jdXJyZW50VGltZSArIDAuMjUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRNdXNpY1ZvbHVtZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm11c2ljVm9sdW1lO1xuICB9XG4gIFxuICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZGF0YSE6IEFycmF5QnVmZmVyO1xuICB2b2x1bWU6IG51bWJlciA9IDE7XG4gIGJ1ZmZlciE6IEF1ZGlvQnVmZmVyO1xuICBtdXNpYzogYm9vbGVhbiA9IGZhbHNlO1xuICBzb3VyY2UhOiBBdWRpb0J1ZmZlclNvdXJjZU5vZGUgfCBudWxsO1xuICBnYWluITogR2Fpbk5vZGU7XG4gIHVybDogc3RyaW5nO1xuICBsb29wZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBtdXNpYzogYm9vbGVhbiwgYXJyYXlCdWZmZXI6IFByb21pc2U8QXJyYXlCdWZmZXI+IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5uYW1lID0gdXJsO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMubXVzaWMgPSBtdXNpYztcbiAgICBcbiAgICBpZiAoYXJyYXlCdWZmZXIpIHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIGFycmF5QnVmZmVyLnRoZW4oKGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBhcnJheUJ1ZmZlcjtcbiAgICAgICAgdGhpcy50cnlMb2FkKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgcmVxLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICBcbiAgICAgIHJlcS5vbmxvYWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdmFyIGFycmF5QnVmZmVyID0gcmVxLnJlc3BvbnNlOyBcbiAgICAgICAgaWYgKGFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gYXJyYXlCdWZmZXI7XG4gICAgICAgICAgdGhpcy50cnlMb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBcbiAgICAgIHJlcS5zZW5kKCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5TG9hZCgpOiB2b2lkIHtcbiAgICBpZiAoQVVESU9fQ09OVEVYVCAmJiB0aGlzLmRhdGEpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBBVURJT19DT05URVhULmRlY29kZUF1ZGlvRGF0YSh0aGlzLmRhdGEsIChidWZmZXI6IEF1ZGlvQnVmZmVyKSA9PiB7XG4gICAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDID09PSB0aGlzKSB7XG4gICAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBsYXkodGhpcy52b2x1bWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgKGUpID0+IHsgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gbG9hZDogXCIrIHRoaXMudXJsKSB9KTtcbiAgICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge30pLmNhdGNoKChlKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkZWNvZGVBdWRpb0RhdGEgZXhjZXB0aW9uIG9uIGxvYWRpbmcgXCIgKyB0aGlzLnVybCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uZmlybUF1ZGlvQ29udGV4dCgpIHtcbiAgICB0cnkge1xuICAgICAgQVVESU9fQ09OVEVYVC5yZXN1bWUoKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VtZSBhdWRpbyBjb250ZXh0IGZhaWxlZFwiKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVzdW1lIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRPbkZpcnN0Q2xpY2soKTogdm9pZCB7XG4gICAgaWYgKCFBVURJT19DT05URVhUKSB7XG4gICAgICB0cnkge1xuICAgICAgICBBVURJT19DT05URVhUID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICBBVURJT19DT05URVhULnJlc3VtZSgpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bWUgYXVkaW8gY29udGV4dCBmYWlsZWRcIik7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdW1lIGF1ZGlvIGNvbnRleHQgZmFpbGVkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudHJ5TG9hZCgpO1xuICB9XG5cbiAgcGxheSh2b2x1bWU6IG51bWJlciwgbG9vcDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jb25maXJtQXVkaW9Db250ZXh0KCk7XG4gICAgdGhpcy52b2x1bWUgPSB2b2x1bWU7XG5cbiAgICBpZiAoIXRoaXMuYnVmZmVyKSB7XG4gICAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMpIHtcbiAgICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9NVVNJQy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgPSB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm11c2ljKSB7XG4gICAgICBpZiAoU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgIT09IHRoaXMpIHtcbiAgICAgICAgaWYgKFNvdW5kSW1wbC5DVVJSRU5UX01VU0lDKSB7XG4gICAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgU291bmRJbXBsLkNVUlJFTlRfTVVTSUMgPSB0aGlzO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkb24ndCBwbGF5IHNvdW5kIGVmZmVjdHMgaW4gdGhlIGJhY2tncm91bmQgb3IgdGhleSBhbGxcbiAgICAgIC8vIGdldCBzdGFja2VkIHVwXG4gICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMubXVzaWMgJiYgIWlzTXVzaWNPbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICghdGhpcy5tdXNpYyAmJiAhaXNTb3VuZE9uKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNvdXJjZSA9IEFVRElPX0NPTlRFWFQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgdGhpcy5zb3VyY2UuYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgdGhpcy5nYWluID0gQVVESU9fQ09OVEVYVC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLmdhaW4pO1xuICAgIHRoaXMuZ2Fpbi5jb25uZWN0KEFVRElPX0NPTlRFWFQuZGVzdGluYXRpb24pO1xuXG4gICAgdGhpcy5sb29wZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5tdXNpYyB8fCBsb29wKSB7XG4gICAgICB0aGlzLmdhaW4uZ2Fpbi52YWx1ZSA9IDA7XG4gICAgICB0aGlzLnNvdXJjZS5sb29wID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9vcGVkID0gdHJ1ZTtcbiAgICB9IFxuXG4gICAgdGhpcy5zb3VyY2Uuc3RhcnQoMCk7XG4gICAgXG4gICAgaWYgKHRoaXMubXVzaWMgfHwgbG9vcCkge1xuICAgICAgdGhpcy5nYWluLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUodm9sdW1lICogKGxvb3AgPyBTb3VuZEltcGwuc291bmRWb2x1bWUgOiBTb3VuZEltcGwubXVzaWNWb2x1bWUpLCBBVURJT19DT05URVhULmN1cnJlbnRUaW1lICsgMik7XG4gICAgfSAgZWxzZSB7XG4gICAgICB0aGlzLmdhaW4uZ2Fpbi52YWx1ZSA9IHZvbHVtZSAqIFNvdW5kSW1wbC5zb3VuZFZvbHVtZTtcbiAgICB9XG5cbiAgICBpZiAobG9vcCkge1xuICAgICAgU291bmRJbXBsLkNVUlJFTlRfTE9PUFMucHVzaCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzdG9wKHJlbW92ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAgIGlmICh0aGlzLmxvb3BlZCkge1xuICAgICAgICB0aGlzLmdhaW4uZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSgwLCBBVURJT19DT05URVhULmN1cnJlbnRUaW1lICsgMyk7XG4gICAgICAgIGNvbnN0IHRlbXBTb3VyY2U6IEF1ZGlvQnVmZmVyU291cmNlTm9kZSA9IHRoaXMuc291cmNlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0ZW1wU291cmNlLnN0b3AoKTtcbiAgICAgICAgfSwgNDAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNvdXJjZS5zdG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc291cmNlID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocmVtb3ZlKSB7XG4gICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gU291bmRJbXBsLkNVUlJFTlRfTE9PUFMuZmluZEluZGV4KGEgPT4gYSA9PT0gdGhpcyk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBTb3VuZEltcGwuQ1VSUkVOVF9MT09QUy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQml0bWFwLCBHcmFwaGljcyB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgc2hvdWxkUHJlc2NhbGVUaWxlc2V0cywgc2hvdWxkVXNlWGJyIH0gZnJvbSBcIi4uL0d1dGVcIjtcbmltcG9ydCB7IFRpbGVzZXQgfSBmcm9tIFwiLi4vVGlsZXNldFwiO1xuaW1wb3J0IHsgR3JhcGhpY3NJbXBsIH0gZnJvbSBcIi4vR3JhcGhpY3NJbXBsXCI7XG5pbXBvcnQgeyBQYWxldHRlIH0gZnJvbSBcIi4vUGFsZXR0ZVwiO1xuXG5pbXBvcnQge3hicjJ4LCB4YnIzeCwgeGJyNHh9IGZyb20gJ3hici1qcyc7XG5cbmNsYXNzIFRpbGUgaW1wbGVtZW50cyBCaXRtYXAge1xuICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxvYWRlZDogYm9vbGVhbjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNjYWxlOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZyA9IFwidGlsZVwiO1xuICBjYWNoZWQ6IFJlY29yZDxudW1iZXIsIEhUTUxDYW52YXNFbGVtZW50PiA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTEltYWdlRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKSB7XG4gICAgdGhpcy5pbWFnZSA9IGNhbnZhcztcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gIH1cblxuICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjdHggPSAoZ3JhcGhpY3MgYXMgR3JhcGhpY3NJbXBsKS5jdHg7XG5cbiAgICBpZiAoIXNob3VsZFByZXNjYWxlVGlsZXNldHMoKSAmJiBzaG91bGRVc2VYYnIoKSAmJiAodGhpcy5zY2FsZSA9PT0gMiB8fCB0aGlzLnNjYWxlID09PSAzKSkge1xuICAgICAgaWYgKCF0aGlzLmNhY2hlZFt0aGlzLnNjYWxlXSkge1xuICAgICAgICAgIHRoaXMuY2FjaGVkW3RoaXMuc2NhbGVdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICB0aGlzLmNhY2hlZFt0aGlzLnNjYWxlXS53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgICAgdGhpcy5jYWNoZWRbdGhpcy5zY2FsZV0uaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jYWNoZWRbdGhpcy5zY2FsZV0uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgIGN0eCEuZHJhd0ltYWdlKHRoaXMuaW1hZ2UhLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VEYXRhID0gY3R4IS5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUGl4ZWxWaWV3ID0gbmV3IFVpbnQzMkFycmF5KG9yaWdpbmFsSW1hZ2VEYXRhLmRhdGEuYnVmZmVyKTtcbiAgICAgICAgICBjb25zdCBzY2FsZWRQaXhlbFZpZXcgPSB0aGlzLnNjYWxlID09PSAyID8geGJyMngob3JpZ2luYWxQaXhlbFZpZXcsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSA6IHhicjN4KG9yaWdpbmFsUGl4ZWxWaWV3LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgICBjb25zdCBkZXN0V2lkdGggPSB0aGlzLndpZHRoICogdGhpcy5zY2FsZTtcbiAgICAgICAgICBjb25zdCBkZXN0SGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlO1xuICAgICAgICAgIHRoaXMuY2FjaGVkW3RoaXMuc2NhbGVdLndpZHRoID0gZGVzdFdpZHRoO1xuICAgICAgICAgIHRoaXMuY2FjaGVkW3RoaXMuc2NhbGVdLmhlaWdodCA9IGRlc3RIZWlnaHQ7XG4gICAgICAgICAgY29uc3Qgc2NhbGVkSW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShuZXcgVWludDhDbGFtcGVkQXJyYXkoc2NhbGVkUGl4ZWxWaWV3LmJ1ZmZlciksIHRoaXMuY2FjaGVkW3RoaXMuc2NhbGVdLndpZHRoLCB0aGlzLmNhY2hlZFt0aGlzLnNjYWxlXS5oZWlnaHQpO1xuXG4gICAgICAgICAgY3R4IS5wdXRJbWFnZURhdGEoc2NhbGVkSW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgIH1cbiAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYWNoZWRbdGhpcy5zY2FsZV0sIHgsIHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgeCwgeSwgdGhpcy53aWR0aCAqIHRoaXMuc2NhbGUsIHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZSk7XG4gICAgfVxuICB9XG5cbiAgZHJhd1NjYWxlZChncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGN0eCA9IChncmFwaGljcyBhcyBHcmFwaGljc0ltcGwpLmN0eDtcbiAgICBjb25zdCBzY2FsZSA9IE1hdGgubWluKE1hdGguZmxvb3Iod2lkdGggLyB0aGlzLndpZHRoKSwgTWF0aC5mbG9vcihoZWlnaHQgLyB0aGlzLmhlaWdodCkpO1xuXG4gICAgaWYgKCFzaG91bGRQcmVzY2FsZVRpbGVzZXRzKCkgJiYgc2hvdWxkVXNlWGJyKCkgJiYgKHNjYWxlID09PSAyIHx8IHNjYWxlID09PSAzKSkge1xuICAgICAgaWYgKCF0aGlzLmNhY2hlZFtzY2FsZV0pIHtcbiAgICAgICAgdGhpcy5jYWNoZWRbc2NhbGVdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICB0aGlzLmNhY2hlZFtzY2FsZV0ud2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICAgIHRoaXMuY2FjaGVkW3NjYWxlXS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLmNhY2hlZFtzY2FsZV0uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgIGN0eCEuZHJhd0ltYWdlKHRoaXMuaW1hZ2UhLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VEYXRhID0gY3R4IS5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUGl4ZWxWaWV3ID0gbmV3IFVpbnQzMkFycmF5KG9yaWdpbmFsSW1hZ2VEYXRhLmRhdGEuYnVmZmVyKTtcbiAgICAgICAgICBjb25zdCBzY2FsZWRQaXhlbFZpZXcgPSBzY2FsZSA9PT0gMiA/IHhicjJ4KG9yaWdpbmFsUGl4ZWxWaWV3LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkgOiB4YnIzeChvcmlnaW5hbFBpeGVsVmlldywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgICAgY29uc3QgZGVzdFdpZHRoID0gdGhpcy53aWR0aCAqIHNjYWxlO1xuICAgICAgICAgIGNvbnN0IGRlc3RIZWlnaHQgPSB0aGlzLmhlaWdodCAqIHNjYWxlO1xuICAgICAgICAgIHRoaXMuY2FjaGVkW3NjYWxlXS53aWR0aCA9IGRlc3RXaWR0aDtcbiAgICAgICAgICB0aGlzLmNhY2hlZFtzY2FsZV0uaGVpZ2h0ID0gZGVzdEhlaWdodDtcbiAgICAgICAgICBjb25zdCBzY2FsZWRJbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKG5ldyBVaW50OENsYW1wZWRBcnJheShzY2FsZWRQaXhlbFZpZXcuYnVmZmVyKSwgdGhpcy5jYWNoZWRbc2NhbGVdLndpZHRoLCB0aGlzLmNhY2hlZFtzY2FsZV0uaGVpZ2h0KTtcblxuICAgICAgICAgIGN0eCEucHV0SW1hZ2VEYXRhKHNjYWxlZEltYWdlRGF0YSwgMCwgMCk7XG4gICAgICB9XG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FjaGVkW3NjYWxlXSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaWxlc2V0SW1wbCBpbXBsZW1lbnRzIFRpbGVzZXQge1xuICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdGlsZVdpZHRoOiBudW1iZXI7XG4gIHRpbGVIZWlnaHQ6IG51bWJlcjtcbiAgb3JpZ2luYWxUaWxlV2lkdGg6IG51bWJlcjtcbiAgb3JpZ2luYWxUaWxlSGVpZ2h0OiBudW1iZXI7XG4gIGltYWdlOiBhbnkgfCBudWxsO1xuICBiaXRtYXBzOiBUaWxlW10gPSBbXTtcbiAgc2NhbmxpbmU6IG51bWJlciA9IDA7XG4gIHRpbGVDb3VudDogbnVtYmVyID0gMDtcbiAgdGludHM6IFJlY29yZDxzdHJpbmcsIEhUTUxJbWFnZUVsZW1lbnQ+ID0ge307XG4gIHRpbnRUaWxlczogUmVjb3JkPHN0cmluZywgQml0bWFwW10+ID0ge307XG4gIHNjYWxlOiBudW1iZXI7XG4gIG9uTG9hZGVkOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIG5hbWU6IHN0cmluZztcbiAgXG4gIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBkYXRhVXJsTG9hZGVyOiBQcm9taXNlPEJsb2I+IHwgdW5kZWZpbmVkLCB0aWxlV2lkdGg6IG51bWJlciwgdGlsZUhlaWdodDogbnVtYmVyLCBzY2FsZTogbnVtYmVyID0gMSwgcGFsOiBQYWxldHRlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy50aWxlV2lkdGggPSB0aGlzLm9yaWdpbmFsVGlsZVdpZHRoID0gdGlsZVdpZHRoO1xuICAgIHRoaXMudGlsZUhlaWdodCA9IHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0ID0gdGlsZUhlaWdodDtcbiAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgdGhpcy5uYW1lID0gdXJsO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgXG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZiAoc2hvdWxkUHJlc2NhbGVUaWxlc2V0cygpICYmIHNjYWxlICE9PSAxKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuICAgICAgICBpZiAoc2hvdWxkVXNlWGJyKCkpIHtcbiAgICAgICAgICBjb25zdCBjdHggPSBzY2FsZWRJbWFnZS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgY3R4IS5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIDAsIDApO1xuXG4gICAgICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZURhdGEgPSBjdHghLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmltYWdlIS53aWR0aCwgdGhpcy5pbWFnZSEuaGVpZ2h0KTtcbiAgICAgICAgICBjb25zdCBvcmlnaW5hbFBpeGVsVmlldyA9IG5ldyBVaW50MzJBcnJheShvcmlnaW5hbEltYWdlRGF0YS5kYXRhLmJ1ZmZlcik7XG4gICAgICAgICAgY29uc3Qgc2NhbGVkUGl4ZWxWaWV3ID0gc2NhbGUgPT09IDIgPyB4YnIyeChvcmlnaW5hbFBpeGVsVmlldywgdGhpcy5pbWFnZSEud2lkdGgsIHRoaXMuaW1hZ2UhLmhlaWdodCkgOiB4YnIzeChvcmlnaW5hbFBpeGVsVmlldywgdGhpcy5pbWFnZSEud2lkdGgsIHRoaXMuaW1hZ2UhLmhlaWdodCk7XG5cbiAgICAgICAgICBzY2FsZWRJbWFnZS53aWR0aCA9IHRoaXMuaW1hZ2UhLndpZHRoICogc2NhbGU7XG4gICAgICAgICAgc2NhbGVkSW1hZ2UuaGVpZ2h0ID0gdGhpcy5pbWFnZSEuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgY29uc3Qgc2NhbGVkSW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShuZXcgVWludDhDbGFtcGVkQXJyYXkoc2NhbGVkUGl4ZWxWaWV3LmJ1ZmZlciksIHNjYWxlZEltYWdlLndpZHRoLCBzY2FsZWRJbWFnZS5oZWlnaHQpO1xuXG4gICAgICAgICAgY3R4IS5wdXRJbWFnZURhdGEoc2NhbGVkSW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY2FsZWRJbWFnZS53aWR0aCA9IHRoaXMuaW1hZ2UhLndpZHRoICogc2NhbGU7XG4gICAgICAgICAgc2NhbGVkSW1hZ2UuaGVpZ2h0ID0gdGhpcy5pbWFnZSEuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgY29uc3QgY3R4ID0gc2NhbGVkSW1hZ2UuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgIGN0eCEuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgKDxhbnk+IGN0eCEpLndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIGN0eD8uZHJhd0ltYWdlKHRoaXMuaW1hZ2UhLCAwLCAwLCBzY2FsZWRJbWFnZS53aWR0aCwgc2NhbGVkSW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5pbWFnZSA9IHNjYWxlZEltYWdlO1xuICAgICAgICB0aGlzLnRpbGVXaWR0aCAqPSBzY2FsZTtcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ICo9IHNjYWxlO1xuICAgICAgICB0aGlzLm9yaWdpbmFsVGlsZVdpZHRoICo9IHNjYWxlO1xuICAgICAgICB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCAqPSBzY2FsZTtcbiAgICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICAgIHNjYWxlID0gMTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY2FubGluZSA9IE1hdGguZmxvb3IodGhpcy5pbWFnZSEud2lkdGggLyB0aGlzLnRpbGVXaWR0aCk7XG4gICAgICBjb25zdCBkZXB0aDogbnVtYmVyID0gTWF0aC5mbG9vcih0aGlzLmltYWdlIS5oZWlnaHQgLyB0aGlzLnRpbGVIZWlnaHQpO1xuICAgICAgdGhpcy50aWxlQ291bnQgPSBkZXB0aCAqIHRoaXMuc2NhbmxpbmU7XG5cbiAgICAgIGlmIChwYWwpIHtcbiAgICAgICAgcGFsLmFkanVzdEltYWdlKHRoaXMuaW1hZ2UhKS50aGVuKChpbWFnZSkgPT4ge1xuICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcblxuICAgICAgICAgIC8vIGN1dCB0aGUgaW1hZ2UgaW50byBwaWVjZXNcbiAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGRlcHRoOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5zY2FubGluZTsgeCsrKSB7XG4gICAgICAgICAgICAgIHRoaXMuYml0bWFwcy5wdXNoKG5ldyBUaWxlKHRoaXMuaW1hZ2UhLCB4ICogdGhpcy50aWxlV2lkdGgsIHkgKiB0aGlzLnRpbGVIZWlnaHQsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQsIHNjYWxlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudGlsZVdpZHRoICo9IHNjYWxlO1xuICAgICAgICAgIHRoaXMudGlsZUhlaWdodCAqPSBzY2FsZTtcbiAgXG4gICAgICAgICAgdGhpcy5vbkxvYWRlZCgpO1xuICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGN1dCB0aGUgaW1hZ2UgaW50byBwaWVjZXNcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBkZXB0aDsgeSsrKSB7XG4gICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnNjYW5saW5lOyB4KyspIHtcbiAgICAgICAgICAgIHRoaXMuYml0bWFwcy5wdXNoKG5ldyBUaWxlKHRoaXMuaW1hZ2UhLCB4ICogdGhpcy50aWxlV2lkdGgsIHkgKiB0aGlzLnRpbGVIZWlnaHQsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQsIHNjYWxlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGlsZVdpZHRoICo9IHNjYWxlO1xuICAgICAgICB0aGlzLnRpbGVIZWlnaHQgKj0gc2NhbGU7XG5cbiAgICAgICAgdGhpcy5vbkxvYWRlZCgpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkYXRhVXJsTG9hZGVyKSB7XG4gICAgICBkYXRhVXJsTG9hZGVyLnRoZW4oKGJsb2I6IEJsb2IpID0+IHtcbiAgICAgICAgdmFyIHVybENyZWF0b3IgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XG4gICAgICAgIHRoaXMuaW1hZ2UhLnNyYyA9IHVybENyZWF0b3IuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbWFnZS5zcmMgPSB1cmw7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGlsZXNBY3Jvc3MoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zY2FubGluZTtcbiAgfVxuXG4gIGdldFRpbGVXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRpbGVXaWR0aDtcbiAgfVxuXG4gIGdldFRpbGVIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50aWxlSGVpZ2h0O1xuICB9XG5cbiAgZ2V0VGlsZUNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGlsZUNvdW50O1xuICB9XG5cbiAgaW5pdE9uRmlyc3RDbGljaygpOiB2b2lkIHtcbiAgfVxuXG4gIGdldFRpbGUodGlsZTogbnVtYmVyKTogQml0bWFwIHtcbiAgICByZXR1cm4gdGhpcy5iaXRtYXBzW3RpbGVdO1xuICB9XG5cbiAgZ2V0U2hhZGVkVGlsZSh0aWxlOiBudW1iZXIsIHRpbnROYW1lOiBzdHJpbmcsIHNoYWRlOiBudW1iZXIpOiBCaXRtYXAge1xuICAgIGxldCB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXTtcbiAgICBpZiAoIXRpbGVzKSB7XG4gICAgICB0aWxlcyA9IHRoaXMudGludFRpbGVzW3RpbnROYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCB0aWxlUmVjb3JkID0gdGlsZXNbdGlsZV07XG4gICAgaWYgKCF0aWxlUmVjb3JkKSB7XG4gICAgICBjb25zdCB4Om51bWJlciA9IHRpbGUgJSB0aGlzLnNjYW5saW5lO1xuICAgICAgY29uc3QgeTpudW1iZXIgPSBNYXRoLmZsb29yKHRpbGUgLyB0aGlzLnNjYW5saW5lKTtcbiAgICAgIGxldCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMudGludHNbdGludE5hbWVdO1xuICAgICAgaWYgKCFpbWFnZSkge1xuICAgICAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5pbWFnZSEud2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmltYWdlIS5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UhLCAwICwgMCk7XG4gICAgICAgICAgY29uc3QgaWQ6IEltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwwLGNhbnZhcy53aWR0aCxjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICBmb3IgKGxldCBpPTA7aTxpZC5kYXRhLmxlbmd0aDtpKz00KSB7XG4gICAgICAgICAgICBpZC5kYXRhW2ldICo9IHNoYWRlO1xuICAgICAgICAgICAgaWQuZGF0YVtpICsgMV0gKj0gc2hhZGU7XG4gICAgICAgICAgICBpZC5kYXRhW2kgKyAyXSAqPSBzaGFkZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpZCwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICB0aGlzLnRpbnRzW3RpbnROYW1lXSA9IGltYWdlO1xuICAgICAgfVxuXG4gICAgICB0aWxlUmVjb3JkID0gdGlsZXNbdGlsZV0gPSBuZXcgVGlsZShpbWFnZSwgeCAqIHRoaXMub3JpZ2luYWxUaWxlV2lkdGgsIHkgKiB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCwgdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCwgdGhpcy5vcmlnaW5hbFRpbGVIZWlnaHQsIHRoaXMuc2NhbGUpXG4gICAgfVxuICAgIHJldHVybiB0aWxlUmVjb3JkO1xuICB9XG5cbiAgZ2V0VGludGVkVGlsZSh0aWxlOiBudW1iZXIsIHRpbnROYW1lOiBzdHJpbmcsIHRpbnQ6IG51bWJlcltdKTogQml0bWFwIHtcbiAgICBsZXQgdGlsZXMgPSB0aGlzLnRpbnRUaWxlc1t0aW50TmFtZV07XG4gICAgaWYgKCF0aWxlcykge1xuICAgICAgdGlsZXMgPSB0aGlzLnRpbnRUaWxlc1t0aW50TmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgdGlsZVJlY29yZCA9IHRpbGVzW3RpbGVdO1xuICAgIGlmICghdGlsZVJlY29yZCkge1xuICAgICAgY29uc3QgeDpudW1iZXIgPSB0aWxlICUgdGhpcy5zY2FubGluZTtcbiAgICAgIGNvbnN0IHk6bnVtYmVyID0gTWF0aC5mbG9vcih0aWxlIC8gdGhpcy5zY2FubGluZSk7XG4gICAgICBsZXQgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLnRpbnRzW3RpbnROYW1lXTtcbiAgICAgIGlmICghaW1hZ2UpIHtcbiAgICAgICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuaW1hZ2UhLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5pbWFnZSEuaGVpZ2h0O1xuICAgICAgICBjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlISwgMCAsIDApO1xuICAgICAgICAgIGNvbnN0IGlkOiBJbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsMCxjYW52YXMud2lkdGgsY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgZm9yIChsZXQgaT0wO2k8aWQuZGF0YS5sZW5ndGg7aSs9NCkge1xuICAgICAgICAgICAgLy8gbGVhdmUgYmxhY2sgYWxvbmVcbiAgICAgICAgICAgIGNvbnN0IGF2ZzogbnVtYmVyID0gKGlkLmRhdGFbaV0gKyBpZC5kYXRhW2krMV0gKyBpZC5kYXRhW2krMl0pLzM7XG4gICAgICAgICAgICBpZC5kYXRhW2ldID0gTWF0aC5mbG9vcihhdmcgKiB0aW50WzBdKTtcbiAgICAgICAgICAgIGlkLmRhdGFbaSArIDFdID0gTWF0aC5mbG9vcihhdmcgKiB0aW50WzFdKTtcbiAgICAgICAgICAgIGlkLmRhdGFbaSArIDJdID0gTWF0aC5mbG9vcihhdmcgKiB0aW50WzJdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpZCwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICB0aGlzLnRpbnRzW3RpbnROYW1lXSA9IGltYWdlO1xuICAgICAgfVxuXG4gICAgICB0aWxlUmVjb3JkID0gdGlsZXNbdGlsZV0gPSBuZXcgVGlsZShpbWFnZSwgeCAqIHRoaXMub3JpZ2luYWxUaWxlV2lkdGgsIHkgKiB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCwgdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCwgdGhpcy5vcmlnaW5hbFRpbGVIZWlnaHQsIHRoaXMuc2NhbGUpXG4gICAgfVxuICAgIHJldHVybiB0aWxlUmVjb3JkO1xuICB9XG5cbiAgbW9kaWZ5KG1vZGlmaWNhdGlvbjogKGltYWdlRGF0YTogSW1hZ2VEYXRhKSA9PiB2b2lkKTogVGlsZXNldCB7XG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gdGhpcy5pbWFnZSEud2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UhLmhlaWdodDtcbiAgICBjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGlmIChjdHgpIHtcbiAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIDAgLCAwKTtcbiAgICAgIGNvbnN0IGlkOiBJbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsMCxjYW52YXMud2lkdGgsY2FudmFzLmhlaWdodCk7XG4gICAgICBtb2RpZmljYXRpb24oaWQpO1xuICAgICAgY3R4LnB1dEltYWdlRGF0YShpZCwgMCwgMCk7XG4gICAgfVxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICBmb3IgKGNvbnN0IHRpbGUgb2YgdGhpcy5iaXRtYXBzKSB7XG4gICAgICB0aWxlLmltYWdlID0gdGhpcy5pbWFnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldEJsb2NrQ29sb3JUaWxlKHRpbGU6IG51bWJlciwgdGludE5hbWU6IHN0cmluZywgY29sOiBudW1iZXJbXSk6IEJpdG1hcCB7XG4gICAgbGV0IHRpbGVzID0gdGhpcy50aW50VGlsZXNbdGludE5hbWVdO1xuICAgIGlmICghdGlsZXMpIHtcbiAgICAgIHRpbGVzID0gdGhpcy50aW50VGlsZXNbdGludE5hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IHRpbGVSZWNvcmQgPSB0aWxlc1t0aWxlXTtcbiAgICBpZiAoIXRpbGVSZWNvcmQpIHtcbiAgICAgIGNvbnN0IHg6bnVtYmVyID0gdGlsZSAlIHRoaXMuc2NhbmxpbmU7XG4gICAgICBjb25zdCB5Om51bWJlciA9IE1hdGguZmxvb3IodGlsZSAvIHRoaXMuc2NhbmxpbmUpO1xuICAgICAgbGV0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gdGhpcy50aW50c1t0aW50TmFtZV07XG4gICAgICBpZiAoIWltYWdlKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmltYWdlIS53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UhLmhlaWdodDtcbiAgICAgICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSEsIDAgLCAwKTtcbiAgICAgICAgICBjb25zdCBpZDogSW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLDAsY2FudmFzLndpZHRoLGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgIGZvciAobGV0IGk9MDtpPGlkLmRhdGEubGVuZ3RoO2krPTQpIHtcbiAgICAgICAgICAgIGlkLmRhdGFbaV0gPSBNYXRoLmZsb29yKDI1NSAqIGNvbFswXSk7XG4gICAgICAgICAgICBpZC5kYXRhW2kgKyAxXSA9IE1hdGguZmxvb3IoMjU1ICogY29sWzFdKTtcbiAgICAgICAgICAgIGlkLmRhdGFbaSArIDJdID0gTWF0aC5mbG9vcigyNTUgKiBjb2xbMl0pO1xuICAgICAgICAgICAgaWQuZGF0YVtpICsgM10gPSBNYXRoLmZsb29yKGlkLmRhdGFbaSszXSAqIGNvbFszXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaWQsIDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgdGhpcy50aW50c1t0aW50TmFtZV0gPSBpbWFnZTtcbiAgICAgIH1cblxuICAgICAgdGlsZVJlY29yZCA9IHRpbGVzW3RpbGVdID0gbmV3IFRpbGUoaW1hZ2UsIHggKiB0aGlzLm9yaWdpbmFsVGlsZVdpZHRoLCB5ICogdGhpcy5vcmlnaW5hbFRpbGVIZWlnaHQsIHRoaXMub3JpZ2luYWxUaWxlV2lkdGgsIHRoaXMub3JpZ2luYWxUaWxlSGVpZ2h0LCB0aGlzLnNjYWxlKVxuICAgIH1cbiAgICByZXR1cm4gdGlsZVJlY29yZDtcbiAgfVxufSIsImltcG9ydCB7IEJpdG1hcCB9IGZyb20gXCIuLi9CaXRtYXBcIjtcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcIi4uL0dyYXBoaWNzXCI7XG5pbXBvcnQgeyBQYWxldHRlIH0gZnJvbSBcIi4uL2ltcGwvUGFsZXR0ZVwiO1xuaW1wb3J0IHsgT3BlbkdMR3JhcGhpY3NJbXBsIH0gZnJvbSBcIi4vT3BlbkdMR3JhcGhpY3NJbXBsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9wZW5HTEJpdG1hcCB7XG4gICAgdGV4WDogbnVtYmVyO1xuICAgIHRleFk6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGltYWdlPzogSFRNTEltYWdlRWxlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIE9wZW5HTEJpdG1hcCBpbXBsZW1lbnRzIElPcGVuR0xCaXRtYXAge1xuICAgIHdpZHRoOiBudW1iZXIgPSAwO1xuICAgIGhlaWdodDogbnVtYmVyID0gMDtcbiAgICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgdGV4WDogbnVtYmVyID0gMDtcbiAgICB0ZXhZOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoZ3JhcGhpY3M6IE9wZW5HTEdyYXBoaWNzSW1wbCwgdXJsOiBzdHJpbmcsIGRhdGFVcmxMb2FkZXI6IFByb21pc2U8c3RyaW5nPiB8IHVuZGVmaW5lZCwgcGFsOiBQYWxldHRlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGdyYXBoaWNzLnJlZ2lzdGVySW1hZ2UodGhpcyk7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gdXJsO1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmltYWdlLndpZHRoO1xuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgXG4gICAgICAgICAgaWYgKHBhbCkge1xuICAgICAgICAgICAgcGFsLmFkanVzdEltYWdlKHRoaXMuaW1hZ2UpLnRoZW4oKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7IFxuICAgICAgICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ3JhcGhpY3MubmV3UmVzb3VyY2VMb2FkZWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBncmFwaGljcy5uZXdSZXNvdXJjZUxvYWRlZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgaWYgKGRhdGFVcmxMb2FkZXIpIHtcbiAgICAgICAgICBkYXRhVXJsTG9hZGVyLnRoZW4oKGJhc2U2NDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9IFwiZGF0YTpcIit1cmwuc3Vic3RyaW5nKHVybC5sZW5ndGgtMykrXCI7YmFzZTY0LFwiK2Jhc2U2NDtcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhdyhncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGcgPSAoZ3JhcGhpY3MgYXMgT3BlbkdMR3JhcGhpY3NJbXBsKTtcbiAgICAgICAgZy5fZHJhd0JpdG1hcCh0aGlzLCB4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgZHJhd1NjYWxlZChncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBnID0gKGdyYXBoaWNzIGFzIE9wZW5HTEdyYXBoaWNzSW1wbCk7XG4gICAgICAgIGcuX2RyYXdCaXRtYXAodGhpcywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICAgIFxuICAgIGluaXRPbkZpcnN0Q2xpY2soKTogdm9pZCB7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIE51bGxCaXRtYXAgaW1wbGVtZW50cyBCaXRtYXAge1xuICAgIHdpZHRoOiBudW1iZXIgPSAwO1xuICAgIGhlaWdodDogbnVtYmVyID0gMDtcbiAgICBsb2FkZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIG5hbWU6IHN0cmluZyA9IFwibnVsbFwiO1xuXG4gICAgZHJhdyhncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgfVxuXG4gICAgZHJhd1NjYWxlZChncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIH1cblxuICAgIGluaXRPbkZpcnN0Q2xpY2soKTogdm9pZCB7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgQml0bWFwIH0gZnJvbSBcIi4uL0JpdG1hcFwiO1xuaW1wb3J0IHsgRm9udCB9IGZyb20gXCIuLi9Gb250XCI7XG5pbXBvcnQgeyBHcmFwaGljcywgT2Zmc2NyZWVuIH0gZnJvbSBcIi4uL0dyYXBoaWNzXCI7XG5pbXBvcnQgeyBJT3BlbkdMQml0bWFwLCBOdWxsQml0bWFwLCBPcGVuR0xCaXRtYXAgfSBmcm9tIFwiLi9PcGVuR0xCaXRtYXBcIjtcbmltcG9ydCB7IE9wZW5HbE9mZnNjcmVlbiB9IGZyb20gXCIuL09wZW5HTE9mZnNjcmVlblwiO1xuaW1wb3J0IHsgUmVuZGVyaW5nU3RhdGUgfSBmcm9tIFwiLi9SZW5kZXJpbmdTdGF0ZVwiO1xuaW1wb3J0IHBvdHBhY2sgZnJvbSBcInBvdHBhY2tcIlxuXG5mdW5jdGlvbiBwYXJzZUNvbG9yKGlucHV0OiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgbGV0IG1tO1xuICAgIGxldCBtO1xuICAgIC8vIE9idmlvdXNseSwgdGhlIG51bWVyaWMgdmFsdWVzIHdpbGwgYmUgZWFzaWVyIHRvIHBhcnNlIHRoYW4gbmFtZXMuU28gd2UgZG8gdGhvc2UgZmlyc3QuXG4gICAgbW0gPSBpbnB1dC5tYXRjaCgvXiM/KFswLTlhLWZdezN9KSQvaSk7XG4gICAgaWYgKG1tKSB7XG4gICAgICAgIG0gPSBtbVsxXTtcbiAgICAgICAgLy8gaW4gdGhyZWUtY2hhcmFjdGVyIGZvcm1hdCwgZWFjaCB2YWx1ZSBpcyBtdWx0aXBsaWVkIGJ5IDB4MTEgdG8gZ2l2ZSBhblxuICAgICAgICAvLyBldmVuIHNjYWxlIGZyb20gMHgwMCB0byAweGZmXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBwYXJzZUludChtLmNoYXJBdCgwKSwgMTYpICogMHgxMSxcbiAgICAgICAgICAgIHBhcnNlSW50KG0uY2hhckF0KDEpLCAxNikgKiAweDExLFxuICAgICAgICAgICAgcGFyc2VJbnQobS5jaGFyQXQoMiksIDE2KSAqIDB4MTEsXG4gICAgICAgICAgICAxXG4gICAgICAgIF07XG4gICAgfVxuICAgIC8vIFRoYXQncyBvbmUuIE5vdyBmb3IgdGhlIGZ1bGwgc2l4LWRpZ2l0IGZvcm1hdDogXG4gICAgbW0gPSBpbnB1dC5tYXRjaCgvXiM/KFswLTlhLWZdezZ9KSQvaSk7XG4gICAgaWYgKG1tKSB7XG4gICAgICAgIG0gPSBtbVsxXTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHBhcnNlSW50KG0uc3Vic3RyKDAsIDIpLCAxNiksXG4gICAgICAgICAgICBwYXJzZUludChtLnN1YnN0cigyLCAyKSwgMTYpLFxuICAgICAgICAgICAgcGFyc2VJbnQobS5zdWJzdHIoNCwgMiksIDE2KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLy8gQW5kIG5vdyBmb3IgcmdiKCkgZm9ybWF0OlxuICAgIG1tID0gaW5wdXQubWF0Y2goL15yZ2JhXFxzKlxcKFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooWystXT8oWzAtOV0qWy5dKT9bMC05XSspXFxzKlxcKSQvaSk7XG4gICAgaWYgKG1tKSB7XG4gICAgICAgIHJldHVybiBbTnVtYmVyLnBhcnNlSW50KG1tWzFdKSwgTnVtYmVyLnBhcnNlSW50KG1tWzJdKSwgTnVtYmVyLnBhcnNlSW50KG1tWzNdKSwgTnVtYmVyLnBhcnNlRmxvYXQobW1bNF0pXTtcbiAgICB9XG4gICAgbW0gPSBpbnB1dC5tYXRjaCgvXnJnYlxccypcXChcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKlxcKSQvaSk7XG4gICAgaWYgKG1tKSB7XG4gICAgICAgIHJldHVybiBbTnVtYmVyLnBhcnNlSW50KG1tWzFdKSwgTnVtYmVyLnBhcnNlSW50KG1tWzJdKSwgTnVtYmVyLnBhcnNlSW50KG1tWzNdKSwgMV07XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vY29sb3JzL2NvbG9yc19uYW1lcy5hc3BcbiAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWJfY29sb3JzXG4gICAgLy8gaHR0cDovL3d3dy5jb2xvcnMuY29tbXV0ZXJjcmVhdGl2ZS5jb20vZ3JpZC9cbiAgICB2YXIgd2ViQ29sb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgICBcIkFsaWNlQmx1ZVwiOiBcIiNGMEY4RkZcIixcbiAgICAgICAgXCJBbnRpcXVlV2hpdGVcIjogXCIjRkFFQkQ3XCIsXG4gICAgICAgIFwiQXF1YVwiOiBcIiMwMEZGRkZcIixcbiAgICAgICAgXCJBcXVhbWFyaW5lXCI6IFwiIzdGRkZENFwiLFxuICAgICAgICBcIkF6dXJlXCI6IFwiI0YwRkZGRlwiLFxuICAgICAgICBcIkJlaWdlXCI6IFwiI0Y1RjVEQ1wiLFxuICAgICAgICBcIkJpc3F1ZVwiOiBcIiNGRkU0QzRcIixcbiAgICAgICAgXCJCbGFja1wiOiBcIiMwMDAwMDBcIixcbiAgICAgICAgXCJCbGFuY2hlZEFsbW9uZFwiOiBcIiNGRkVCQ0RcIixcbiAgICAgICAgXCJCbHVlXCI6IFwiIzAwMDBGRlwiLFxuICAgICAgICBcIkJsdWVWaW9sZXRcIjogXCIjOEEyQkUyXCIsXG4gICAgICAgIFwiQnJvd25cIjogXCIjQTUyQTJBXCIsXG4gICAgICAgIFwiQnVybHlXb29kXCI6IFwiI0RFQjg4N1wiLFxuICAgICAgICBcIkNhZGV0Qmx1ZVwiOiBcIiM1RjlFQTBcIixcbiAgICAgICAgXCJDaGFydHJldXNlXCI6IFwiIzdGRkYwMFwiLFxuICAgICAgICBcIkNob2NvbGF0ZVwiOiBcIiNEMjY5MUVcIixcbiAgICAgICAgXCJDb3JhbFwiOiBcIiNGRjdGNTBcIixcbiAgICAgICAgXCJDb3JuZmxvd2VyQmx1ZVwiOiBcIiM2NDk1RURcIixcbiAgICAgICAgXCJDb3Juc2lsa1wiOiBcIiNGRkY4RENcIixcbiAgICAgICAgXCJDcmltc29uXCI6IFwiI0RDMTQzQ1wiLFxuICAgICAgICBcIkN5YW5cIjogXCIjMDBGRkZGXCIsXG4gICAgICAgIFwiRGFya0JsdWVcIjogXCIjMDAwMDhCXCIsXG4gICAgICAgIFwiRGFya0N5YW5cIjogXCIjMDA4QjhCXCIsXG4gICAgICAgIFwiRGFya0dvbGRlblJvZFwiOiBcIiNCODg2MEJcIixcbiAgICAgICAgXCJEYXJrR3JheVwiOiBcIiNBOUE5QTlcIixcbiAgICAgICAgXCJEYXJrR3JleVwiOiBcIiNBOUE5QTlcIixcbiAgICAgICAgXCJEYXJrR3JlZW5cIjogXCIjMDA2NDAwXCIsXG4gICAgICAgIFwiRGFya0toYWtpXCI6IFwiI0JEQjc2QlwiLFxuICAgICAgICBcIkRhcmtNYWdlbnRhXCI6IFwiIzhCMDA4QlwiLFxuICAgICAgICBcIkRhcmtPbGl2ZUdyZWVuXCI6IFwiIzU1NkIyRlwiLFxuICAgICAgICBcIkRhcmtPcmFuZ2VcIjogXCIjRkY4QzAwXCIsXG4gICAgICAgIFwiRGFya09yY2hpZFwiOiBcIiM5OTMyQ0NcIixcbiAgICAgICAgXCJEYXJrUmVkXCI6IFwiIzhCMDAwMFwiLFxuICAgICAgICBcIkRhcmtTYWxtb25cIjogXCIjRTk5NjdBXCIsXG4gICAgICAgIFwiRGFya1NlYUdyZWVuXCI6IFwiIzhGQkM4RlwiLFxuICAgICAgICBcIkRhcmtTbGF0ZUJsdWVcIjogXCIjNDgzRDhCXCIsXG4gICAgICAgIFwiRGFya1NsYXRlR3JheVwiOiBcIiMyRjRGNEZcIixcbiAgICAgICAgXCJEYXJrU2xhdGVHcmV5XCI6IFwiIzJGNEY0RlwiLFxuICAgICAgICBcIkRhcmtUdXJxdW9pc2VcIjogXCIjMDBDRUQxXCIsXG4gICAgICAgIFwiRGFya1Zpb2xldFwiOiBcIiM5NDAwRDNcIixcbiAgICAgICAgXCJEZWVwUGlua1wiOiBcIiNGRjE0OTNcIixcbiAgICAgICAgXCJEZWVwU2t5Qmx1ZVwiOiBcIiMwMEJGRkZcIixcbiAgICAgICAgXCJEaW1HcmF5XCI6IFwiIzY5Njk2OVwiLFxuICAgICAgICBcIkRpbUdyZXlcIjogXCIjNjk2OTY5XCIsXG4gICAgICAgIFwiRG9kZ2VyQmx1ZVwiOiBcIiMxRTkwRkZcIixcbiAgICAgICAgXCJGaXJlQnJpY2tcIjogXCIjQjIyMjIyXCIsXG4gICAgICAgIFwiRmxvcmFsV2hpdGVcIjogXCIjRkZGQUYwXCIsXG4gICAgICAgIFwiRm9yZXN0R3JlZW5cIjogXCIjMjI4QjIyXCIsXG4gICAgICAgIFwiRnVjaHNpYVwiOiBcIiNGRjAwRkZcIixcbiAgICAgICAgXCJHYWluc2Jvcm9cIjogXCIjRENEQ0RDXCIsXG4gICAgICAgIFwiR2hvc3RXaGl0ZVwiOiBcIiNGOEY4RkZcIixcbiAgICAgICAgXCJHb2xkXCI6IFwiI0ZGRDcwMFwiLFxuICAgICAgICBcIkdvbGRlblJvZFwiOiBcIiNEQUE1MjBcIixcbiAgICAgICAgXCJHcmF5XCI6IFwiIzgwODA4MFwiLFxuICAgICAgICBcIkdyZXlcIjogXCIjODA4MDgwXCIsXG4gICAgICAgIFwiR3JlZW5cIjogXCIjMDA4MDAwXCIsXG4gICAgICAgIFwiR3JlZW5ZZWxsb3dcIjogXCIjQURGRjJGXCIsXG4gICAgICAgIFwiSG9uZXlEZXdcIjogXCIjRjBGRkYwXCIsXG4gICAgICAgIFwiSG90UGlua1wiOiBcIiNGRjY5QjRcIixcbiAgICAgICAgXCJJbmRpYW5SZWQgXCI6IFwiI0NENUM1Q1wiLFxuICAgICAgICBcIkluZGlnbyBcIjogXCIjNEIwMDgyXCIsXG4gICAgICAgIFwiSXZvcnlcIjogXCIjRkZGRkYwXCIsXG4gICAgICAgIFwiS2hha2lcIjogXCIjRjBFNjhDXCIsXG4gICAgICAgIFwiTGF2ZW5kZXJcIjogXCIjRTZFNkZBXCIsXG4gICAgICAgIFwiTGF2ZW5kZXJCbHVzaFwiOiBcIiNGRkYwRjVcIixcbiAgICAgICAgXCJMYXduR3JlZW5cIjogXCIjN0NGQzAwXCIsXG4gICAgICAgIFwiTGVtb25DaGlmZm9uXCI6IFwiI0ZGRkFDRFwiLFxuICAgICAgICBcIkxpZ2h0Qmx1ZVwiOiBcIiNBREQ4RTZcIixcbiAgICAgICAgXCJMaWdodENvcmFsXCI6IFwiI0YwODA4MFwiLFxuICAgICAgICBcIkxpZ2h0Q3lhblwiOiBcIiNFMEZGRkZcIixcbiAgICAgICAgXCJMaWdodEdvbGRlblJvZFllbGxvd1wiOiBcIiNGQUZBRDJcIixcbiAgICAgICAgXCJMaWdodEdyYXlcIjogXCIjRDNEM0QzXCIsXG4gICAgICAgIFwiTGlnaHRHcmV5XCI6IFwiI0QzRDNEM1wiLFxuICAgICAgICBcIkxpZ2h0R3JlZW5cIjogXCIjOTBFRTkwXCIsXG4gICAgICAgIFwiTGlnaHRQaW5rXCI6IFwiI0ZGQjZDMVwiLFxuICAgICAgICBcIkxpZ2h0U2FsbW9uXCI6IFwiI0ZGQTA3QVwiLFxuICAgICAgICBcIkxpZ2h0U2VhR3JlZW5cIjogXCIjMjBCMkFBXCIsXG4gICAgICAgIFwiTGlnaHRTa3lCbHVlXCI6IFwiIzg3Q0VGQVwiLFxuICAgICAgICBcIkxpZ2h0U2xhdGVHcmF5XCI6IFwiIzc3ODg5OVwiLFxuICAgICAgICBcIkxpZ2h0U2xhdGVHcmV5XCI6IFwiIzc3ODg5OVwiLFxuICAgICAgICBcIkxpZ2h0U3RlZWxCbHVlXCI6IFwiI0IwQzRERVwiLFxuICAgICAgICBcIkxpZ2h0WWVsbG93XCI6IFwiI0ZGRkZFMFwiLFxuICAgICAgICBcIkxpbWVcIjogXCIjMDBGRjAwXCIsXG4gICAgICAgIFwiTGltZUdyZWVuXCI6IFwiIzMyQ0QzMlwiLFxuICAgICAgICBcIkxpbmVuXCI6IFwiI0ZBRjBFNlwiLFxuICAgICAgICBcIk1hZ2VudGFcIjogXCIjRkYwMEZGXCIsXG4gICAgICAgIFwiTWFyb29uXCI6IFwiIzgwMDAwMFwiLFxuICAgICAgICBcIk1lZGl1bUFxdWFNYXJpbmVcIjogXCIjNjZDREFBXCIsXG4gICAgICAgIFwiTWVkaXVtQmx1ZVwiOiBcIiMwMDAwQ0RcIixcbiAgICAgICAgXCJNZWRpdW1PcmNoaWRcIjogXCIjQkE1NUQzXCIsXG4gICAgICAgIFwiTWVkaXVtUHVycGxlXCI6IFwiIzkzNzBEQlwiLFxuICAgICAgICBcIk1lZGl1bVNlYUdyZWVuXCI6IFwiIzNDQjM3MVwiLFxuICAgICAgICBcIk1lZGl1bVNsYXRlQmx1ZVwiOiBcIiM3QjY4RUVcIixcbiAgICAgICAgXCJNZWRpdW1TcHJpbmdHcmVlblwiOiBcIiMwMEZBOUFcIixcbiAgICAgICAgXCJNZWRpdW1UdXJxdW9pc2VcIjogXCIjNDhEMUNDXCIsXG4gICAgICAgIFwiTWVkaXVtVmlvbGV0UmVkXCI6IFwiI0M3MTU4NVwiLFxuICAgICAgICBcIk1pZG5pZ2h0Qmx1ZVwiOiBcIiMxOTE5NzBcIixcbiAgICAgICAgXCJNaW50Q3JlYW1cIjogXCIjRjVGRkZBXCIsXG4gICAgICAgIFwiTWlzdHlSb3NlXCI6IFwiI0ZGRTRFMVwiLFxuICAgICAgICBcIk1vY2Nhc2luXCI6IFwiI0ZGRTRCNVwiLFxuICAgICAgICBcIk5hdmFqb1doaXRlXCI6IFwiI0ZGREVBRFwiLFxuICAgICAgICBcIk5hdnlcIjogXCIjMDAwMDgwXCIsXG4gICAgICAgIFwiT2xkTGFjZVwiOiBcIiNGREY1RTZcIixcbiAgICAgICAgXCJPbGl2ZVwiOiBcIiM4MDgwMDBcIixcbiAgICAgICAgXCJPbGl2ZURyYWJcIjogXCIjNkI4RTIzXCIsXG4gICAgICAgIFwiT3JhbmdlXCI6IFwiI0ZGQTUwMFwiLFxuICAgICAgICBcIk9yYW5nZVJlZFwiOiBcIiNGRjQ1MDBcIixcbiAgICAgICAgXCJPcmNoaWRcIjogXCIjREE3MEQ2XCIsXG4gICAgICAgIFwiUGFsZUdvbGRlblJvZFwiOiBcIiNFRUU4QUFcIixcbiAgICAgICAgXCJQYWxlR3JlZW5cIjogXCIjOThGQjk4XCIsXG4gICAgICAgIFwiUGFsZVR1cnF1b2lzZVwiOiBcIiNBRkVFRUVcIixcbiAgICAgICAgXCJQYWxlVmlvbGV0UmVkXCI6IFwiI0RCNzA5M1wiLFxuICAgICAgICBcIlBhcGF5YVdoaXBcIjogXCIjRkZFRkQ1XCIsXG4gICAgICAgIFwiUGVhY2hQdWZmXCI6IFwiI0ZGREFCOVwiLFxuICAgICAgICBcIlBlcnVcIjogXCIjQ0Q4NTNGXCIsXG4gICAgICAgIFwiUGlua1wiOiBcIiNGRkMwQ0JcIixcbiAgICAgICAgXCJQbHVtXCI6IFwiI0REQTBERFwiLFxuICAgICAgICBcIlBvd2RlckJsdWVcIjogXCIjQjBFMEU2XCIsXG4gICAgICAgIFwiUHVycGxlXCI6IFwiIzgwMDA4MFwiLFxuICAgICAgICBcIlJlYmVjY2FQdXJwbGVcIjogXCIjNjYzMzk5XCIsXG4gICAgICAgIFwiUmVkXCI6IFwiI0ZGMDAwMFwiLFxuICAgICAgICBcIlJvc3lCcm93blwiOiBcIiNCQzhGOEZcIixcbiAgICAgICAgXCJSb3lhbEJsdWVcIjogXCIjNDE2OUUxXCIsXG4gICAgICAgIFwiU2FkZGxlQnJvd25cIjogXCIjOEI0NTEzXCIsXG4gICAgICAgIFwiU2FsbW9uXCI6IFwiI0ZBODA3MlwiLFxuICAgICAgICBcIlNhbmR5QnJvd25cIjogXCIjRjRBNDYwXCIsXG4gICAgICAgIFwiU2VhR3JlZW5cIjogXCIjMkU4QjU3XCIsXG4gICAgICAgIFwiU2VhU2hlbGxcIjogXCIjRkZGNUVFXCIsXG4gICAgICAgIFwiU2llbm5hXCI6IFwiI0EwNTIyRFwiLFxuICAgICAgICBcIlNpbHZlclwiOiBcIiNDMEMwQzBcIixcbiAgICAgICAgXCJTa3lCbHVlXCI6IFwiIzg3Q0VFQlwiLFxuICAgICAgICBcIlNsYXRlQmx1ZVwiOiBcIiM2QTVBQ0RcIixcbiAgICAgICAgXCJTbGF0ZUdyYXlcIjogXCIjNzA4MDkwXCIsXG4gICAgICAgIFwiU2xhdGVHcmV5XCI6IFwiIzcwODA5MFwiLFxuICAgICAgICBcIlNub3dcIjogXCIjRkZGQUZBXCIsXG4gICAgICAgIFwiU3ByaW5nR3JlZW5cIjogXCIjMDBGRjdGXCIsXG4gICAgICAgIFwiU3RlZWxCbHVlXCI6IFwiIzQ2ODJCNFwiLFxuICAgICAgICBcIlRhblwiOiBcIiNEMkI0OENcIixcbiAgICAgICAgXCJUZWFsXCI6IFwiIzAwODA4MFwiLFxuICAgICAgICBcIlRoaXN0bGVcIjogXCIjRDhCRkQ4XCIsXG4gICAgICAgIFwiVG9tYXRvXCI6IFwiI0ZGNjM0N1wiLFxuICAgICAgICBcIlR1cnF1b2lzZVwiOiBcIiM0MEUwRDBcIixcbiAgICAgICAgXCJWaW9sZXRcIjogXCIjRUU4MkVFXCIsXG4gICAgICAgIFwiV2hlYXRcIjogXCIjRjVERUIzXCIsXG4gICAgICAgIFwiV2hpdGVcIjogXCIjRkZGRkZGXCIsXG4gICAgICAgIFwiV2hpdGVTbW9rZVwiOiBcIiNGNUY1RjVcIixcbiAgICAgICAgXCJZZWxsb3dcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwiWWVsbG93R3JlZW5cIjogXCIjOUFDRDMyXCIsXG4gICAgICAgIFwiVHJhbnNwYXJlbnRcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgfTtcbiAgICBmb3IgKHZhciBwIGluIHdlYkNvbG9ycykge1xuICAgICAgICB3ZWJDb2xvcnNbcC50b0xvd2VyQ2FzZSgpXSA9IHdlYkNvbG9yc1twXTtcbiAgICB9XG4gICAgdmFyIHdjID0gd2ViQ29sb3JzW2lucHV0LnRvTG93ZXJDYXNlKCldO1xuICAgIGlmICh3YyAhPSBudWxsKVxuICAgICAgICByZXR1cm4gcGFyc2VDb2xvcih3Yyk7XG4gICAgdGhyb3cgRXJyb3IoXCInXCIgKyBpbnB1dCArIFwiJyBpcyBub3QgYSB2YWxpZCBjb2xvci4uLlwiKTtcbn1cblxuZnVuY3Rpb24gY29sVG9OdW1iZXIoaW5wdXQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IHJlc3VsdCA9IENPTF9DQUNIRVtpbnB1dF07XG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHJnYmEgPSBwYXJzZUNvbG9yKGlucHV0KTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAocmdiYVswXSAqICgyNTYgKiAyNTYgKiAyNTYpKSArIChyZ2JhWzFdICogKDI1NiAqIDI1NikpICsgKHJnYmFbMl0gKiAyNTYpICsgTWF0aC5mbG9vcihyZ2JhWzNdICogMjU1KTtcbiAgICAgICAgQ09MX0NBQ0hFW2lucHV0XSA9IHZhbHVlO1xuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5kZWNsYXJlIGxldCBJbnN0YWxsVHJpZ2dlcjogYW55O1xudmFyIGlzRmlyZWZveCA9IHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG5jb25zdCBDT0xfQ0FDSEU6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XG5cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXhUZXh0dXJlU2l6ZSgpOiBudW1iZXIge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJywgeyBhbnRpYWxpYXM6IGZhbHNlLCBhbHBoYTogZmFsc2UsIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSB9KSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHRcblxuICAgIHJldHVybiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfU0laRSk7XG59XG5cbmV4cG9ydCBjbGFzcyBPcGVuR0xHcmFwaGljc0ltcGwgaW1wbGVtZW50cyBHcmFwaGljcywgUmVuZGVyaW5nU3RhdGUge1xuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgb2Zmc2NyZWVuOiBPZmZzY3JlZW4gfCBudWxsID0gbnVsbDtcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xuICAgIGV4dGVuc2lvbjogQU5HTEVfaW5zdGFuY2VkX2FycmF5cztcblxuICAgIGltYWdlczogSU9wZW5HTEJpdG1hcFtdID0gW107XG4gICAgYXRsYXNUZXh0dXJlOiBXZWJHTFRleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgICB0ZXhXaWR0aDogbnVtYmVyID0gMDtcbiAgICB0ZXhIZWlnaHQ6IG51bWJlciA9IDA7XG5cbiAgICBvZmZzY3JlZW5JZDogbnVtYmVyID0gMTtcbiAgICBvZmZzY3JlZW5zOiBPcGVuR2xPZmZzY3JlZW5bXSA9IFtdO1xuICAgIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlcjtcbiAgICBzaGFkZXJQcm9ncmFtOiBXZWJHTFByb2dyYW07XG4gICAgZ2xCdWZmZXI6IFdlYkdMQnVmZmVyIHwgbnVsbDtcbiAgICBtYXhEcmF3czogbnVtYmVyID0gMTAwMDA7XG4gICAgcG9zaXRpb25zOiBJbnQxNkFycmF5O1xuICAgIHJvdGF0aW9uczogRmxvYXQzMkFycmF5O1xuICAgIHJnYmFzOiBVaW50MzJBcnJheTtcbiAgICBkcmF3czogbnVtYmVyID0gMDtcblxuICAgIGFscGhhczogbnVtYmVyW10gPSBbXTtcbiAgICB0cmFuc2Zvcm1zOiBhbnlbXSA9IFtdO1xuICAgIHN0YXRlczogYW55W10gPSBbXTtcbiAgICBicmlnaHRuZXNzOiBudW1iZXIgPSAwO1xuICAgIHRyYW5zbGF0ZVg6IG51bWJlciA9IDA7XG4gICAgdHJhbnNsYXRlWTogbnVtYmVyID0gMDtcbiAgICBzY2FsZVg6IG51bWJlciA9IDE7XG4gICAgc2NhbGVZOiBudW1iZXIgPSAxO1xuICAgIHJvdGF0aW9uOiBudW1iZXIgPSAwO1xuICAgIGNsaXBYOiBudW1iZXIgPSAwO1xuICAgIGNsaXBZOiBudW1iZXIgPSAwO1xuICAgIGNsaXBYMjogbnVtYmVyID0gMDtcbiAgICBjbGlwWTI6IG51bWJlciA9IDA7XG4gICAgYWxwaGE6IG51bWJlciA9IDI1NTtcblxuICAgIHN0YXRlOiBSZW5kZXJpbmdTdGF0ZTtcblxuICAgIHRyYW5zZm9ybUNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgdHJhbnNmb3JtQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUN0eCA9IHRoaXMudHJhbnNmb3JtQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKSE7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZWNhbnZhc1wiKTtcbiAgICAgICAgKDxhbnk+dGhpcy5jYW52YXMpLnN0eWxlLmZvbnRTbW9vdGggPSBcIm5ldmVyXCI7XG4gICAgICAgICg8YW55PnRoaXMuY2FudmFzKS5zdHlsZS53ZWJraXRGb250U21vb3RoaW5nID0gXCJub25lXCI7XG5cbiAgICAgICAgaWYgKGlzRmlyZWZveCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSBcImNyaXNwLWVkZ2VzXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IFwicGl4ZWxhdGVkXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdsID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJywgeyBhbnRpYWxpYXM6IGZhbHNlLCBhbHBoYTogZmFsc2UsIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSB9KSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5nbC5nZXRFeHRlbnNpb24oJ0FOR0xFX2luc3RhbmNlZF9hcnJheXMnKSBhcyBBTkdMRV9pbnN0YW5jZWRfYXJyYXlzXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uID0gZXh0ZW5zaW9uXG5cbiAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5TUkNfQUxQSEEsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpO1xuICAgICAgICB0aGlzLmdsLmRpc2FibGUodGhpcy5nbC5ERVBUSF9URVNUKTtcblxuICAgICAgICBjb25zdCBzaG9ydHNQZXJJbWFnZVBvc2l0aW9uID0gMlxuICAgICAgICBjb25zdCBzaG9ydHNQZXJJbWFnZVNpemUgPSAyXG4gICAgICAgIGNvbnN0IHNob3J0c1BlckltYWdlVGV4UG9zID0gNFxuICAgICAgICBjb25zdCBieXRlc1BlckltYWdlUmdiYSA9IDRcbiAgICAgICAgY29uc3QgYnl0ZXNQZXJJbWFnZUNvcm5lckFscGhhID0gNFxuICAgICAgICBjb25zdCBmbG9hdHNQZXJJbWFnZVJvdGF0aW9uID0gMVxuXG4gICAgICAgIC8vIFRvdGFsIGJ5dGVzIHN0b3JlZCBpbnRvIGFycmF5QnVmZmVyIHBlciBpbWFnZSA9IDI4XG4gICAgICAgIGNvbnN0IGJ5dGVzUGVySW1hZ2UgPSBzaG9ydHNQZXJJbWFnZVBvc2l0aW9uICogMiArIHNob3J0c1BlckltYWdlU2l6ZSAqIDIgKyBzaG9ydHNQZXJJbWFnZVRleFBvcyAqIDIgKyBieXRlc1BlckltYWdlUmdiYSArIGJ5dGVzUGVySW1hZ2VDb3JuZXJBbHBoYSArIGZsb2F0c1BlckltYWdlUm90YXRpb24gKiA0XG5cbiAgICAgICAgLy8gTWFrZSBhIGJ1ZmZlciBiaWcgZW5vdWdoIHRvIGhhdmUgYWxsIHRoZSBkYXRhIGZvciB0aGUgbWF4IGltYWdlcyB3ZSBjYW4gc2hvdyBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAgICB0aGlzLmFycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMubWF4RHJhd3MgKiBieXRlc1BlckltYWdlKVxuXG4gICAgICAgIC8vIE1ha2UgMyB2aWV3cyBvbiB0aGUgc2FtZSBhcnJheUJ1ZmZlciwgYmVjYXVzZSB3ZSBzdG9yZSAzIGRhdGEgdHlwZXMgaW50byB0aGlzIHNhbWUgYnl0ZSBhcnJheS5cbiAgICAgICAgLy8gV2hlbiB3ZSBzdG9yZSBpbWFnZSBwb3NpdGlvbnMvVVZzIGludG8gb3VyIGFycmF5QnVmZmVyIHdlIHN0b3JlIHRoZW0gYXMgc2hvcnRzIChpbnQxNidzKVxuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IG5ldyBJbnQxNkFycmF5KHRoaXMuYXJyYXlCdWZmZXIpXG4gICAgICAgIC8vIFdoZW4gd2Ugc3RvcmUgaW1hZ2Ugcm90YXRpb24gaW50byB0aGlzLmFycmF5QnVmZmVyIGFycmF5QnVmZmVyIHdlIHN0b3JlIGl0IGFzIGZsb2F0LCBiZWNhdXNlIGl0J3MgcmFkaWFucy5cbiAgICAgICAgdGhpcy5yb3RhdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYXJyYXlCdWZmZXIpXG4gICAgICAgIC8vIFdoZW4gd2Ugc3RvcmUgaW1hZ2UgcmdiYXMgaW50byBvdXIgYXJyYXlCdWZmZXIgd2Ugc3RvcmUgaXQgYXMgMSA0LWJ5dGUgaW50MzIuXG4gICAgICAgIHRoaXMucmdiYXMgPSBuZXcgVWludDMyQXJyYXkodGhpcy5hcnJheUJ1ZmZlcilcblxuICAgICAgICBjb25zdCB2ZXJ0Q29kZSA9IFwiXFxcblx0XHRcdGF0dHJpYnV0ZSB2ZWMyIGFTaXplTXVsdDtcXFxuXHRcdFx0YXR0cmlidXRlIHZlYzIgYVBvcztcXFxuXHRcdFx0YXR0cmlidXRlIHZlYzIgYVNpemU7XFxcblx0XHRcdGF0dHJpYnV0ZSB2ZWM0IGFUZXhQb3M7XFxcblx0XHRcdGF0dHJpYnV0ZSB2ZWM0IGFSZ2JhO1xcXG5cdFx0XHRhdHRyaWJ1dGUgdmVjNCBhQ29ybmVyQTtcXFxuXHRcdFx0YXR0cmlidXRlIGZsb2F0IGFSb3RhdGlvbjtcXFxuXHRcdFx0XFxcblx0XHRcdHZhcnlpbmcgaGlnaHAgdmVjMiBmcmFnVGV4dHVyZVBvcztcXFxuXHRcdFx0dmFyeWluZyB2ZWM0IGZyYWdBYmdyO1xcXG5cdFx0XHRcXFxuXHRcdFx0dW5pZm9ybSB2ZWMyIHVDYW52YXNTaXplO1xcXG5cdFx0XHR1bmlmb3JtIHZlYzIgdVRleFNpemU7XFxcblx0XHRcdFxcXG5cdFx0XHR2b2lkIG1haW4odm9pZCl7XFxcblx0XHRcdFx0dmVjMiBkcmF3UG9zO1xcXG5cdFx0XHRcdGlmKGFSb3RhdGlvbiAhPSAwLjApe1xcXG5cdFx0XHRcdFx0ZmxvYXQgZ29YID0gY29zKGFSb3RhdGlvbik7XFxcblx0XHRcdFx0XHRmbG9hdCBnb1kgPSBzaW4oYVJvdGF0aW9uKTtcXFxuXHRcdFx0XHRcdHZlYzIgY29ybmVyUG9zID0gYVNpemUgKiAoYVNpemVNdWx0KTtcXFxuXHRcdFx0XHRcdGRyYXdQb3MgPSAoYVBvcyArIHZlYzIoZ29YKmNvcm5lclBvcy54IC0gZ29ZKmNvcm5lclBvcy55LCBnb1kqY29ybmVyUG9zLnggKyBnb1gqY29ybmVyUG9zLnkpKSAvIHVDYW52YXNTaXplO1xcXG5cdFx0XHRcdH0gZWxzZSB7XFxcblx0XHRcdFx0XHRkcmF3UG9zID0gKGFQb3MgKyBhU2l6ZSphU2l6ZU11bHQpIC8gdUNhbnZhc1NpemU7XFxcblx0XHRcdFx0fVxcXG5cdFx0XHRcdGdsX1Bvc2l0aW9uID0gdmVjNChkcmF3UG9zLnggLSAxLjAsIDEuMCAtIGRyYXdQb3MueSwgMC4wLCAxLjApO1xcXG5cdFx0XHRcdGZyYWdUZXh0dXJlUG9zID0gKGFUZXhQb3MueHkgKyBhVGV4UG9zLnp3ICogYVNpemVNdWx0KSAvIHVUZXhTaXplO1xcXG4gICAgICAgICAgICAgICAgdmVjMiB0b3BPckJvdCA9IGFDb3JuZXJBLnp3ICogKDEuMCAtIGFTaXplTXVsdC55KSArIGFDb3JuZXJBLnh5ICogYVNpemVNdWx0Lnk7XFxcbiAgICAgICAgICAgICAgICBmbG9hdCBhbHBoYSA9IHRvcE9yQm90LnkgKiAoMS4wIC0gYVNpemVNdWx0LngpICsgdG9wT3JCb3QueCAqIGFTaXplTXVsdC54O1xcXG4gICAgICAgICAgICAgICAgZnJhZ0FiZ3IgPSB2ZWM0KGFSZ2JhLncvMjU1LjAsIGFSZ2JhLnovMjU1LjAsIGFSZ2JhLnkvMjU1LjAsIGFscGhhLzI1NS4wKTtcXFxuXHRcdFx0fVxcXG5cdFx0XCJcblxuICAgICAgICAvLyBDcmVhdGUgYSB2ZXJ0ZXggc2hhZGVyIG9iamVjdCB3aXRoIGNvZGUuXG4gICAgICAgIGNvbnN0IHZlcnRTaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcih0aGlzLmdsLlZFUlRFWF9TSEFERVIpIGFzIFdlYkdMU2hhZGVyXG4gICAgICAgIHRoaXMuZ2wuc2hhZGVyU291cmNlKHZlcnRTaGFkZXIsIHZlcnRDb2RlKVxuICAgICAgICB0aGlzLmdsLmNvbXBpbGVTaGFkZXIodmVydFNoYWRlcilcblxuICAgICAgICAvLyBGcmFnbWVudCBzaGFkZXIgc291cmNlIGNvZGUuXG4gICAgICAgIGNvbnN0IGZyYWdDb2RlID0gXCJcXFxuXHRcdFx0dmFyeWluZyBoaWdocCB2ZWMyIGZyYWdUZXh0dXJlUG9zO1xcXG5cdFx0XHR2YXJ5aW5nIGhpZ2hwIHZlYzQgZnJhZ0FiZ3I7XFxcblx0XHRcdHVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xcXG5cdFx0XHRcXFxuXHRcdFx0dm9pZCBtYWluKHZvaWQpe1xcXG5cdFx0XHRcdGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgZnJhZ1RleHR1cmVQb3MpICogZnJhZ0FiZ3I7XFxcblx0XHRcdH1cXFxuXHRcdFwiXG5cbiAgICAgICAgY29uc3QgZnJhZ1NoYWRlciA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKHRoaXMuZ2wuRlJBR01FTlRfU0hBREVSKSBhcyBXZWJHTFNoYWRlcjtcbiAgICAgICAgdGhpcy5nbC5zaGFkZXJTb3VyY2UoZnJhZ1NoYWRlciwgZnJhZ0NvZGUpO1xuICAgICAgICB0aGlzLmdsLmNvbXBpbGVTaGFkZXIoZnJhZ1NoYWRlcik7XG5cbiAgICAgICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IHRoaXMuZ2wuY3JlYXRlUHJvZ3JhbSgpIGFzIFdlYkdMUHJvZ3JhbVxuICAgICAgICB0aGlzLmdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0U2hhZGVyKTtcbiAgICAgICAgdGhpcy5nbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ1NoYWRlcik7XG4gICAgICAgIHRoaXMuZ2wubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgICAgICAgdGhpcy5zaGFkZXJQcm9ncmFtID0gc2hhZGVyUHJvZ3JhbTtcblxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5nbC5jcmVhdGVCdWZmZXIoKSlcbiAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBVaW50OEFycmF5KFswLCAxLCAyLCAyLCAxLCAzXSksIHRoaXMuZ2wuU1RBVElDX0RSQVcpXG5cbiAgICAgICAgLy8gT3VyIG11bHRpcGxpZXIgYXJyYXkgZm9yIHdpZHRoL2hlaWdodCBzbyB3ZSBjYW4gZ2V0IHRvIGVhY2ggY29ybmVyIG9mIHRoZSBpbWFnZSBkcmF3bi5cbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpKVxuICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdKSwgdGhpcy5nbC5TVEFUSUNfRFJBVylcblxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sIFwiYVNpemVNdWx0XCIpXG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlKVxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0cmlidXRlLCAyLCB0aGlzLmdsLkZMT0FULCBmYWxzZSwgMCwgMClcblxuICAgICAgICB0aGlzLmdsQnVmZmVyID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmdsQnVmZmVyKVxuICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHRoaXMuYXJyYXlCdWZmZXIsIHRoaXMuZ2wuRFlOQU1JQ19EUkFXKVxuXG4gICAgICAgIGxldCBieXRlT2Zmc2V0ID0gMDtcblxuICAgICAgICBjb25zdCBzZXR1cEF0dHJpYnV0ZSA9IChuYW1lOiBzdHJpbmcsIGRhdGFUeXBlOiBudW1iZXIsIGFtb3VudDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaGFkZXJQcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIG5hbWUpXG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHJpYnV0ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZSwgYW1vdW50LCBkYXRhVHlwZSwgZmFsc2UsIGJ5dGVzUGVySW1hZ2UsIGJ5dGVPZmZzZXQpXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbi52ZXJ0ZXhBdHRyaWJEaXZpc29yQU5HTEUoYXR0cmlidXRlLCAxKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgPT0gdGhpcy5nbC5TSE9SVClcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCAqPSAyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSA9PSB0aGlzLmdsLkZMT0FUKVxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50ICo9IDRcbiAgICAgICAgICAgICAgICAgICAgYnl0ZU9mZnNldCArPSBhbW91bnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXR1cEF0dHJpYnV0ZShcImFQb3NcIiwgdGhpcy5nbC5TSE9SVCwgc2hvcnRzUGVySW1hZ2VQb3NpdGlvbik7XG4gICAgICAgIHNldHVwQXR0cmlidXRlKFwiYVNpemVcIiwgdGhpcy5nbC5TSE9SVCwgc2hvcnRzUGVySW1hZ2VTaXplKTtcbiAgICAgICAgc2V0dXBBdHRyaWJ1dGUoXCJhVGV4UG9zXCIsIHRoaXMuZ2wuU0hPUlQsIHNob3J0c1BlckltYWdlVGV4UG9zKTtcbiAgICAgICAgc2V0dXBBdHRyaWJ1dGUoXCJhUmdiYVwiLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIGJ5dGVzUGVySW1hZ2VSZ2JhKTtcbiAgICAgICAgc2V0dXBBdHRyaWJ1dGUoXCJhUm90YXRpb25cIiwgdGhpcy5nbC5GTE9BVCwgZmxvYXRzUGVySW1hZ2VSb3RhdGlvbik7XG4gICAgICAgIHNldHVwQXR0cmlidXRlKFwiYUNvcm5lckFcIiwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCBieXRlc1BlckltYWdlQ29ybmVyQWxwaGEpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVySW1hZ2UoYml0bWFwOiBJT3BlbkdMQml0bWFwKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goYml0bWFwKTtcbiAgICB9XG5cbiAgICBuZXdSZXNvdXJjZUxvYWRlZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYXRsYXNUZXh0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRSZXNvdXJjZU9uTG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0UmVzb3VyY2VPbkxvYWRlZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbV0VCR0xdIFJlbG9hZGluZyB0ZXh0dXJlXCIpO1xuXG4gICAgICAgIGNvbnN0IHRleHR1cmVTaXplID0gNDA5NiAqIDI7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgZ2wgdGV4dHVyZSBmcm9tIGltYWdlIGZpbGUuXG4gICAgICAgIGlmICh0aGlzLmF0bGFzVGV4dHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVUZXh0dXJlKHRoaXMuYXRsYXNUZXh0dXJlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0bGFzVGV4dHVyZSA9IHRoaXMuZ2wuY3JlYXRlVGV4dHVyZSgpO1xuXG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmF0bGFzVGV4dHVyZSk7XG4gICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIDAsIHRoaXMuZ2wuUkdCQSwgdGV4dHVyZVNpemUsIHRleHR1cmVTaXplLCAwLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgbnVsbCk7XG5cbiAgICAgICAgbGV0IGxpc3QgPSBbLi4udGhpcy5pbWFnZXNdO1xuICAgICAgICBsaXN0LnNvcnQoKGEsIGIpID0+IGEuaGVpZ2h0ID4gYi5oZWlnaHQgPyAtMSA6IDEpO1xuXG4gICAgICAgIGNvbnN0IHdoaXRlUGl4ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjb25zdCBjdHggPSB3aGl0ZVBpeGVsLmdldENvbnRleHQoXCIyZFwiKSE7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI0ZGRic7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCAxLCAxKTtcbiAgICAgICAgdGhpcy5nbC50ZXhTdWJJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCwgMCwgMCwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIHdoaXRlUGl4ZWwpO1xuXG4gICAgICAgIGNvbnN0IHBsYWNlZDogSU9wZW5HTEJpdG1hcFtdID0gW107XG4gICAgICAgIHBsYWNlZC5wdXNoKHsgdGV4WDogMCwgdGV4WTogMCwgd2lkdGg6IDEsIGhlaWdodDogMSB9KVxuICAgICAgICBjb25zdCByZWNvcmRzID0gbGlzdC5tYXAoaW1hZ2UgPT4geyByZXR1cm4geyBpbWFnZTogaW1hZ2UsIHc6IGltYWdlLndpZHRoLCBoOiBpbWFnZS5oZWlnaHQgfSB9KTtcblxuICAgICAgICBjb25zdCB7IHcsIGgsIGZpbGwgfSA9IHBvdHBhY2socmVjb3Jkcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2lkdGg6IFwiICsgdyArIFwiIEhlaWdodDogXCIgKyBoICsgXCIgXCIgKyBmaWxsICsgXCIlXCIpO1xuXG4gICAgICAgIGZvciAoY29uc3QgcmVjb3JkIG9mIHJlY29yZHMpIHtcbiAgICAgICAgICAgIHJlY29yZC5pbWFnZS50ZXhYID0gKHJlY29yZCBhcyBhbnkpLnggKyAxO1xuICAgICAgICAgICAgcmVjb3JkLmltYWdlLnRleFkgPSAocmVjb3JkIGFzIGFueSkueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGltYWdlIG9mIGxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4U3ViSW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIDAsIGltYWdlLnRleFgsIGltYWdlLnRleFksIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCBpbWFnZS5pbWFnZSEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGVsbCBnbCB0aGF0IHdoZW4gZHJhdyBpbWFnZXMgc2NhbGVkIHVwLCBrZWVwIGl0IHBpeGVsbGF0ZWQgYW5kIGRvbid0IHNtb290aCBpdC5cbiAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX01BR19GSUxURVIsIHRoaXMuZ2wuTkVBUkVTVCk7XG4gICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB0aGlzLmdsLk5FQVJFU1QpO1xuXG4gICAgICAgIC8vIFN0b3JlIHRleHR1cmUgc2l6ZSBpbiB2ZXJ0ZXggc2hhZGVyLlxuICAgICAgICB0aGlzLnRleFdpZHRoID0gdGV4dHVyZVNpemU7XG4gICAgICAgIHRoaXMudGV4SGVpZ2h0ID0gdGV4dHVyZVNpemU7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmKHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1VGV4U2l6ZVwiKSwgdGhpcy50ZXhXaWR0aCwgdGhpcy50ZXhIZWlnaHQpO1xuXG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXNldFN0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLlNSQ19BTFBIQSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5hbHBoYXMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZS50cmFuc2xhdGVYID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZS50cmFuc2xhdGVZID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZS5zY2FsZVggPSAxO1xuICAgICAgICB0aGlzLnN0YXRlLnNjYWxlWSA9IDE7XG4gICAgICAgIHRoaXMuc3RhdGUucm90YXRpb24gPSAwO1xuICAgICAgICB0aGlzLnN0YXRlLmNsaXBYID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZS5jbGlwWDIgPSAwO1xuICAgICAgICB0aGlzLnN0YXRlLmNsaXBZID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZS5jbGlwWTIgPSAwO1xuICAgICAgICB0aGlzLnN0YXRlLmFscGhhID0gMjU1O1xuICAgIH1cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgICAgICAvLyBSZXNpemUgdGhlIGdsIHZpZXdwb3J0IHRvIGJlIHRoZSBuZXcgc2l6ZSBvZiB0aGUgY2FudmFzLlxuICAgICAgICBnbC52aWV3cG9ydCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHNoYWRlciB2YXJpYWJsZXMgZm9yIGNhbnZhcyBzaXplLlxuICAgICAgICAvLyBTZW5kaW5nIGl0IHRvIGdsIG5vdyBzbyB3ZSBkb24ndCBoYXZlIHRvIGRvIHRoZSBtYXRoIGluIEphdmFTY3JpcHQgb24gZXZlcnkgZHJhdyxcbiAgICAgICAgLy8gc2luY2UgZ2wgd2FudHMgdG8gZHJhdyBhdCBhIHBvc2l0aW9uIGZyb20gMCB0byAxLCBhbmQgd2Ugd2FudCB0byBkbyBkcmF3SW1hZ2Ugd2l0aCBhIHNjcmVlbiBwaXhlbCBwb3NpdGlvbi5cbiAgICAgICAgZ2wudW5pZm9ybTJmKGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIFwidUNhbnZhc1NpemVcIiksIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgfVxuXG4gICAgX2RyYXdCaXRtYXAoaW1nOiBJT3BlbkdMQml0bWFwLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZHJhd0ltYWdlKGltZy50ZXhYLCBpbWcudGV4WSwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCAweEZGRkZGRjAwICsgdGhpcy5zdGF0ZS5icmlnaHRuZXNzLFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hbHBoYSwgdGhpcy5zdGF0ZS5hbHBoYSwgdGhpcy5zdGF0ZS5hbHBoYSwgdGhpcy5zdGF0ZS5hbHBoYSk7XG4gICAgfVxuXG4gICAgX2RyYXdJbWFnZSh0ZXhYOiBudW1iZXIsIHRleFk6IG51bWJlciwgdGV4V2lkdGg6IG51bWJlciwgdGV4SGVpZ2h0OiBudW1iZXIsIGRyYXdYOiBudW1iZXIsIGRyYXdZOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByZ2JhOiBudW1iZXIsIHRvcExlZnRBOiBudW1iZXIsIHRvcFJpZ2h0QTogbnVtYmVyLCBib3R0b21MZWZ0QTogbnVtYmVyLCBib3R0b21SaWdodEE6IG51bWJlcikge1xuICAgICAgICBsZXQgaSA9IHRoaXMuZHJhd3MgKiA3O1xuXG4gICAgICAgIHRoaXMucmdiYXNbaSArIDRdID0gcmdiYTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbnNbaSArIDVdID0gdGhpcy5zdGF0ZS5yb3RhdGlvbiAqIE1hdGguc2lnbih0aGlzLnN0YXRlLnNjYWxlWCkgKiBNYXRoLnNpZ24odGhpcy5zdGF0ZS5zY2FsZVkpO1xuICAgICAgICB0aGlzLnJnYmFzW2kgKyA2XSA9IChNYXRoLmZsb29yKHRvcExlZnRBKSAqIDB4MTAwMDAwMCkgKyAodG9wUmlnaHRBIDw8IDE2KSArIChib3R0b21MZWZ0QSA8PCA4KSArIE1hdGguZmxvb3IoYm90dG9tUmlnaHRBKTtcblxuICAgICAgICBpICo9IDI7XG5cbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IHRoaXMucG9zaXRpb25zO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJvdGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KGRyYXdYICogZHJhd1ggKyBkcmF3WSAqIGRyYXdZKTtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkcmF3WSwgZHJhd1gpO1xuICAgICAgICAgICAgZHJhd1ggPSBNYXRoLmNvcyhhbmdsZSArIHRoaXMuc3RhdGUucm90YXRpb24pICogZGlzdDtcbiAgICAgICAgICAgIGRyYXdZID0gTWF0aC5zaW4oYW5nbGUgKyB0aGlzLnN0YXRlLnJvdGF0aW9uKSAqIGRpc3Q7XG4gICAgICAgIH1cblxuICAgICAgICB3aWR0aCAqPSB0aGlzLnN0YXRlLnNjYWxlWDtcbiAgICAgICAgaGVpZ2h0ICo9IHRoaXMuc3RhdGUuc2NhbGVZO1xuICAgICAgICBkcmF3WCAqPSB0aGlzLnN0YXRlLnNjYWxlWDtcbiAgICAgICAgZHJhd1kgKj0gdGhpcy5zdGF0ZS5zY2FsZVk7XG4gICAgICAgIGRyYXdYICs9IHRoaXMuc3RhdGUudHJhbnNsYXRlWDtcbiAgICAgICAgZHJhd1kgKz0gdGhpcy5zdGF0ZS50cmFuc2xhdGVZO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNsaXBYIDwgdGhpcy5zdGF0ZS5jbGlwWDIpIHtcbiAgICAgICAgICAgIGlmIChkcmF3WCA+IHRoaXMuc3RhdGUuY2xpcFgyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZHJhd1gyID0gZHJhd1ggKyB3aWR0aDtcbiAgICAgICAgICAgIGlmIChkcmF3WDIgPCB0aGlzLnN0YXRlLmNsaXBYKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRyYXdYMiA+IHRoaXMuc3RhdGUuY2xpcFgyKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd1BlcmNlbnQgPSAxIC0gKGRyYXdYMiAtIHRoaXMuc3RhdGUuY2xpcFgyKSAvIHdpZHRoO1xuICAgICAgICAgICAgICAgIHRleFdpZHRoICo9IHNob3dQZXJjZW50O1xuICAgICAgICAgICAgICAgIHdpZHRoICo9IHNob3dQZXJjZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRyYXdYIDwgdGhpcy5zdGF0ZS5jbGlwWCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dQZXJjZW50ID0gMSAtICh0aGlzLnN0YXRlLmNsaXBYIC0gZHJhd1gpIC8gd2lkdGg7XG4gICAgICAgICAgICAgICAgd2lkdGggLT0gdGhpcy5zdGF0ZS5jbGlwWCAtIGRyYXdYO1xuICAgICAgICAgICAgICAgIGRyYXdYID0gdGhpcy5zdGF0ZS5jbGlwWDtcbiAgICAgICAgICAgICAgICB0ZXhYICs9IHRleFdpZHRoICogKDEgLSBzaG93UGVyY2VudCk7XG4gICAgICAgICAgICAgICAgdGV4V2lkdGggKj0gc2hvd1BlcmNlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jbGlwWSA8IHRoaXMuc3RhdGUuY2xpcFkyKSB7XG4gICAgICAgICAgICBpZiAoZHJhd1kgPiB0aGlzLnN0YXRlLmNsaXBZMikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRyYXdZMiA9IGRyYXdZICsgaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKGRyYXdZMiA8IHRoaXMuc3RhdGUuY2xpcFkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZHJhd1kyID4gdGhpcy5zdGF0ZS5jbGlwWTIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93UGVyY2VudCA9IDEgLSAoZHJhd1kyIC0gdGhpcy5zdGF0ZS5jbGlwWTIpIC8gaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRleEhlaWdodCAqPSBzaG93UGVyY2VudDtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKj0gc2hvd1BlcmNlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZHJhd1kgPCB0aGlzLnN0YXRlLmNsaXBZKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd1BlcmNlbnQgPSAxIC0gKHRoaXMuc3RhdGUuY2xpcFkgLSBkcmF3WSkgLyBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0IC09IHRoaXMuc3RhdGUuY2xpcFkgLSBkcmF3WTtcbiAgICAgICAgICAgICAgICBkcmF3WSA9IHRoaXMuc3RhdGUuY2xpcFk7XG4gICAgICAgICAgICAgICAgdGV4WSArPSB0ZXhIZWlnaHQgKiAoMSAtIHNob3dQZXJjZW50KTtcbiAgICAgICAgICAgICAgICB0ZXhIZWlnaHQgKj0gc2hvd1BlcmNlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbnNbaV0gPSBkcmF3WDtcbiAgICAgICAgcG9zaXRpb25zW2kgKyAxXSA9IGRyYXdZO1xuICAgICAgICBwb3NpdGlvbnNbaSArIDJdID0gd2lkdGg7XG4gICAgICAgIHBvc2l0aW9uc1tpICsgM10gPSBoZWlnaHQ7XG5cbiAgICAgICAgcG9zaXRpb25zW2kgKyA0XSA9IHRleFg7XG4gICAgICAgIHBvc2l0aW9uc1tpICsgNV0gPSB0ZXhZO1xuICAgICAgICBwb3NpdGlvbnNbaSArIDZdID0gdGV4V2lkdGg7XG4gICAgICAgIHBvc2l0aW9uc1tpICsgN10gPSB0ZXhIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5kcmF3cysrXG4gICAgfVxuXG4gICAgZ2xTdGFydENvbnRleHQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgZ2xDb21taXRDb250ZXh0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kcmF3cyA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdGhpcy5nbEJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHRoaXMuYXJyYXlCdWZmZXIsIHRoaXMuZ2wuRFlOQU1JQ19EUkFXKVxuICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCAwLCB0aGlzLnJnYmFzLnN1YmFycmF5KDAsIHRoaXMuZHJhd3MgKiA3KSk7XG4gICAgICAgICAgICB0aGlzLmV4dGVuc2lvbi5kcmF3RWxlbWVudHNJbnN0YW5jZWRBTkdMRSh0aGlzLmdsLlRSSUFOR0xFUywgNiwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCAwLCB0aGlzLmRyYXdzKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd3MgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUudHJhbnNmb3JtcyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLnN0YXRlcyA9IFt0aGlzLnN0YXRlLnRyYW5zZm9ybXNdO1xuICAgICAgICB0aGlzLmRyYXdzID0gMDtcbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5nbFN0YXJ0Q29udGV4dCgpO1xuICAgIH1cblxuICAgIHJlbmRlckVuZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nbENvbW1pdENvbnRleHQoKTtcbiAgICB9XG5cbiAgICBhcHBseUZvbnQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgc21vb3RoKCk6IHZvaWQge1xuICAgIH1cblxuICAgIGNvcHkoKTogQml0bWFwIHtcbiAgICAgICAgcmV0dXJuIG5ldyBOdWxsQml0bWFwKCk7XG4gICAgfVxuXG4gICAgZ2V0T2Zmc2NyZWVuKCk6IE9mZnNjcmVlbiB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5vZmZzY3JlZW47XG4gICAgfVxuXG4gICAgY2xpcCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgeCAqPSB0aGlzLnN0YXRlLnNjYWxlWDtcbiAgICAgICAgeSAqPSB0aGlzLnN0YXRlLnNjYWxlWTtcbiAgICAgICAgeCArPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZVg7XG4gICAgICAgIHkgKz0gdGhpcy5zdGF0ZS50cmFuc2xhdGVZO1xuICAgICAgICB0aGlzLnN0YXRlLmNsaXBYID0geDtcbiAgICAgICAgdGhpcy5zdGF0ZS5jbGlwWSA9IHk7XG4gICAgICAgIHRoaXMuc3RhdGUuY2xpcFgyID0geCArIHdpZHRoO1xuICAgICAgICB0aGlzLnN0YXRlLmNsaXBZMiA9IHkgKyBoZWlnaHQ7XG4gICAgfVxuXG4gICAgY3JlYXRlT2Zmc2NyZWVuKCk6IE9mZnNjcmVlbiB7XG4gICAgICAgIHRoaXMub2Zmc2NyZWVuSWQrKztcbiAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9wZW5HbE9mZnNjcmVlbih0aGlzLmdsLCB0aGlzLCB0aGlzLm9mZnNjcmVlbklkKTtcbiAgICAgICAgdGhpcy5vZmZzY3JlZW5zLnB1c2gob2Zmc2NyZWVuKTtcblxuICAgICAgICByZXR1cm4gb2Zmc2NyZWVuO1xuICAgIH1cblxuICAgIGRyYXdUb09mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbiB8IG51bGwpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub2Zmc2NyZWVuKSB7XG4gICAgICAgICAgICAodGhpcy5vZmZzY3JlZW4gYXMgT3BlbkdsT2Zmc2NyZWVuKS51bnVzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vZmZzY3JlZW4gPSBzY3JlZW47XG5cbiAgICAgICAgaWYgKHRoaXMub2Zmc2NyZWVuKSB7XG4gICAgICAgICAgICAodGhpcy5vZmZzY3JlZW4gYXMgT3BlbkdsT2Zmc2NyZWVuKS51c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdPZmZzY3JlZW4oc2NyZWVuOiBPZmZzY3JlZW4pOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gKHNjcmVlbiBhcyBPcGVuR2xPZmZzY3JlZW4pO1xuICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgIHRoaXMuZ2xTdGFydENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVUZXhTaXplXCIpLCBvZmZzY3JlZW4ud2lkdGgsIG9mZnNjcmVlbi5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgb2Zmc2NyZWVuLnRleHR1cmUpO1xuICAgICAgICB0aGlzLl9kcmF3SW1hZ2UoMCwgb2Zmc2NyZWVuLmhlaWdodCwgb2Zmc2NyZWVuLndpZHRoLCAtb2Zmc2NyZWVuLmhlaWdodCwgMCwgMCwgb2Zmc2NyZWVuLndpZHRoLCBvZmZzY3JlZW4uaGVpZ2h0LCAweEZGRkZGRjAwLCAyNTUsIDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmKHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1VGV4U2l6ZVwiKSwgdGhpcy50ZXhXaWR0aCwgdGhpcy50ZXhIZWlnaHQpO1xuICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5hdGxhc1RleHR1cmUpO1xuICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgZHJhd1NjYWxlZE9mZnNjcmVlbihzY3JlZW46IE9mZnNjcmVlbiwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9mZnNjcmVlbiA9IChzY3JlZW4gYXMgT3BlbkdsT2Zmc2NyZWVuKTtcbiAgICAgICAgdGhpcy5nbENvbW1pdENvbnRleHQoKTtcblxuICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmKHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1VGV4U2l6ZVwiKSwgb2Zmc2NyZWVuLndpZHRoLCBvZmZzY3JlZW4uaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIG9mZnNjcmVlbi50ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5fZHJhd0ltYWdlKDAsIG9mZnNjcmVlbi5oZWlnaHQsIG9mZnNjcmVlbi53aWR0aCwgLW9mZnNjcmVlbi5oZWlnaHQsIHgsIHksIHdpZHRoLCBoZWlnaHQsIDB4RkZGRkZGMDAsIDI1NSwgMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIHRoaXMuZ2xDb21taXRDb250ZXh0KCk7XG5cbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVUZXhTaXplXCIpLCB0aGlzLnRleFdpZHRoLCB0aGlzLnRleEhlaWdodCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmF0bGFzVGV4dHVyZSk7XG4gICAgICAgIHRoaXMuZ2xTdGFydENvbnRleHQoKTtcbiAgICB9XG5cbiAgICBmaWxsUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJnYmEgPSBjb2xUb051bWJlcihjb2wpO1xuICAgICAgICBjb25zdCBhID0gKHJnYmEgJSAyNTYpO1xuXG4gICAgICAgIHRoaXMuX2RyYXdJbWFnZSgwLCAwLCAxLCAxLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCByZ2JhLCBhLCBhLCBhLCBhKVxuICAgIH1cblxuICAgIGZpbGxDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZyk6IHZvaWQge1xuICAgIH1cblxuICAgIGRyYXdDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2w6IHN0cmluZywgd2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgIH1cblxuICAgIHNldExpbmVEYXNoKHNlZ21lbnRzOiBudW1iZXJbXSk6IHZvaWQge1xuICAgIH1cblxuICAgIGRyYXdMaW5lKHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIsIGNvbDogc3RyaW5nLCB3aWR0aD86IG51bWJlciB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIH1cblxuICAgIGRyYXdCaXRtYXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGJpdG1hcDogQml0bWFwKTogdm9pZCB7XG4gICAgICAgIGJpdG1hcC5kcmF3KHRoaXMsIHgsIHkpO1xuICAgIH1cblxuICAgIGRyYXdTY2FsZWRCaXRtYXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBiaXRtYXA6IEJpdG1hcCk6IHZvaWQge1xuICAgICAgICBiaXRtYXAuZHJhd1NjYWxlZCh0aGlzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBjbGVhclJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2xDb21taXRDb250ZXh0KCk7XG5cbiAgICAgICAgdGhpcy5nbFN0YXJ0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLlpFUk8sIHRoaXMuZ2wuWkVSTyk7XG4gICAgICAgIHRoaXMuZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgXCJyZ2JhKDAsMCwwLDApXCIpO1xuICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLlNSQ19BTFBIQSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcblxuICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgIH1cblxuICAgIHNldEZvbnQoZm9udDogRm9udCk6IHZvaWQge1xuICAgICAgICAvLyBJR05PUkVEXG4gICAgfVxuXG4gICAgc2V0Q29tcG9zaXRlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJtdWx0aXBseVwiKSB7XG4gICAgICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLlpFUk8sIHRoaXMuZ2wuU1JDX0NPTE9SKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSA9PT0gXCJzb3VyY2Utb3ZlclwiKSB7XG4gICAgICAgICAgICB0aGlzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgICAgICB0aGlzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLlNSQ19BTFBIQSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEZvbnRTaXplKHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAvLyBJR05PUkVEXG4gICAgfVxuXG4gICAgZHJhd1N0cmluZyh4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBjb2w6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAvLyBJR05PUkVEXG4gICAgfVxuXG4gICAgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKHgpXG4gICAgICAgIHkgPSBNYXRoLmZsb29yKHkpXG4gICAgICAgIHRoaXMuX3RyYW5zbGF0ZSh4LCB5KVxuICAgICAgICB0aGlzLnRyYW5zZm9ybUN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgICAgIHRoaXMuc3RhdGUudHJhbnNmb3Jtcy5wdXNoKFtcInRyYW5zbGF0ZVwiLCB4LCB5XSlcbiAgICB9XG5cbiAgICBfdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHggKj0gdGhpcy5zdGF0ZS5zY2FsZVg7XG4gICAgICAgIHkgKj0gdGhpcy5zdGF0ZS5zY2FsZVk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJvdGF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHksIHgpO1xuICAgICAgICAgICAgdmFyIGRpc3QgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRyYW5zbGF0ZVggKz0gTWF0aC5jb3MoYW5nbGUgKyB0aGlzLnN0YXRlLnJvdGF0aW9uICogTWF0aC5zaWduKHRoaXMuc3RhdGUuc2NhbGVYKSkgKiBkaXN0O1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50cmFuc2xhdGVZICs9IE1hdGguc2luKGFuZ2xlICsgdGhpcy5zdGF0ZS5yb3RhdGlvbiAqIE1hdGguc2lnbih0aGlzLnN0YXRlLnNjYWxlWSkpICogZGlzdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudHJhbnNsYXRlWCArPSB4O1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50cmFuc2xhdGVZICs9IHk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLnNjYWxlWCAqPSB4O1xuICAgICAgICB0aGlzLnN0YXRlLnNjYWxlWSAqPSB5O1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUN0eC5zY2FsZSh4LCB5KTtcbiAgICAgICAgdGhpcy5zdGF0ZS50cmFuc2Zvcm1zLnB1c2goW1wic2NhbGVcIiwgeCwgeV0pO1xuICAgIH1cblxuICAgIHB1c2goKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtQ3R4LnNhdmUoKTtcblxuICAgICAgICB0aGlzLnN0YXRlLnRyYW5zZm9ybXMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5zdGF0ZXMucHVzaCh0aGlzLnN0YXRlLnRyYW5zZm9ybXMpO1xuICAgICAgICB0aGlzLnN0YXRlLmFscGhhcy5wdXNoKHRoaXMuc3RhdGUuYWxwaGEpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnN0YXRlcy5sZW5ndGggPiA5OSkgY29uc29sZS5lcnJvcihcInNhdmUoKSB3aXRob3V0IHJlc3RvcmUoKSFcIik7XG4gICAgfVxuXG4gICAgcG9wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUN0eC5yZXN0b3JlKCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxhc3Qgc3RhdGUuXG4gICAgICAgIHRoaXMuc3RhdGUuc3RhdGVzLnBvcCgpO1xuICAgICAgICB0aGlzLnN0YXRlLnRyYW5zZm9ybXMgPSB0aGlzLnN0YXRlc1t0aGlzLnN0YXRlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICB0aGlzLnJlc2V0U3RhdGUoKTtcblxuICAgICAgICAvLyBSZWFwcGx5IGFsbCB0cmFuc2Zvcm1zLlxuICAgICAgICBmb3IgKHZhciB0cmFuc2Zvcm1zIG9mIHRoaXMuc3RhdGUuc3RhdGVzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB0cmFuc2Zvcm0gb2YgdHJhbnNmb3Jtcykge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gdHJhbnNmb3JtWzBdO1xuICAgICAgICAgICAgICAgIGlmIChuYW1lID09ICd0cmFuc2xhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0ZSh0cmFuc2Zvcm1bMV0sIHRyYW5zZm9ybVsyXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuYW1lID09ICdzY2FsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zY2FsZVggKj0gdHJhbnNmb3JtWzFdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNjYWxlWSAqPSB0cmFuc2Zvcm1bMl07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuYW1lID09ICdyb3RhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm90YXRpb24gKz0gdHJhbnNmb3JtWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB9XG5cbiAgICBnZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB9XG5cbiAgICBmaXRTY3JlZW4ocGl4ZWxTY2FsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHdpZHRoOiBudW1iZXIgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICAgICAgICBjb25zdCBoZWlnaHQ6IG51bWJlciA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKVxuICAgICAgICBjb25zdCByZWFsV2lkdGg6IG51bWJlciA9IE1hdGguZmxvb3Iod2lkdGggLyBwaXhlbFNjYWxlKSAqIHBpeGVsU2NhbGU7XG4gICAgICAgIGNvbnN0IHJlYWxIZWlnaHQ6IG51bWJlciA9IE1hdGguZmxvb3IoaGVpZ2h0IC8gcGl4ZWxTY2FsZSkgKiBwaXhlbFNjYWxlO1xuICAgICAgICBjb25zdCB2aXJ0dWFsV2lkdGg6IG51bWJlciA9IHJlYWxXaWR0aCAvIHBpeGVsU2NhbGU7XG4gICAgICAgIGNvbnN0IHZpcnR1YWxIZWlnaHQ6IG51bWJlciA9IHJlYWxIZWlnaHQgLyBwaXhlbFNjYWxlO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdmlydHVhbFdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB2aXJ0dWFsSGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHJlYWxXaWR0aCArIFwicHhcIjtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gcmVhbEhlaWdodCArIFwicHhcIjtcbiAgICB9XG5cbiAgICBnZXRTdHJpbmdXaWR0aCh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBzZXRBbHBoYShhbHBoYTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUuYWxwaGEgPSBNYXRoLmZsb29yKGFscGhhICogMjU1KTtcbiAgICB9XG5cbiAgICBnZXRUcmFuc2Zvcm0oKTogRE9NTWF0cml4IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtQ3R4LmdldFRyYW5zZm9ybSgpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgT2Zmc2NyZWVuIH0gZnJvbSBcIi4uL0dyYXBoaWNzXCI7XG5pbXBvcnQgeyBPcGVuR0xHcmFwaGljc0ltcGwgfSBmcm9tIFwiLi9PcGVuR0xHcmFwaGljc0ltcGxcIjtcbmltcG9ydCB7IFJlbmRlcmluZ1N0YXRlIH0gZnJvbSBcIi4vUmVuZGVyaW5nU3RhdGVcIjtcblxuZXhwb3J0IGNsYXNzIE9wZW5HbE9mZnNjcmVlbiBpbXBsZW1lbnRzIE9mZnNjcmVlbiwgUmVuZGVyaW5nU3RhdGUge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgdGV4dHVyZTogV2ViR0xUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcbiAgICBmYjogV2ViR0xGcmFtZWJ1ZmZlciB8IG51bGwgPSBudWxsOyBcbiAgICBncmFwaGljczogT3BlbkdMR3JhcGhpY3NJbXBsO1xuICAgIGlkOiBudW1iZXIgPSAwO1xuICAgIGludXNlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBhbHBoYXM6IG51bWJlcltdID0gW107XG4gICAgdHJhbnNmb3JtczogYW55W10gPSBbXTtcbiAgICBzdGF0ZXM6IGFueVtdID0gW107XG4gICAgYnJpZ2h0bmVzczogbnVtYmVyID0gMDtcbiAgICB0cmFuc2xhdGVYOiBudW1iZXIgPSAwO1xuICAgIHRyYW5zbGF0ZVk6IG51bWJlciA9IDA7XG4gICAgc2NhbGVYOiBudW1iZXIgPSAxO1xuICAgIHNjYWxlWTogbnVtYmVyID0gMTtcbiAgICByb3RhdGlvbjogbnVtYmVyID0gMDtcbiAgICBjbGlwWDogbnVtYmVyID0gMDtcbiAgICBjbGlwWTogbnVtYmVyID0gMDtcbiAgICBjbGlwWDI6IG51bWJlciA9IDA7XG4gICAgY2xpcFkyOiBudW1iZXIgPSAwO1xuICAgIGFscGhhOiBudW1iZXIgPSAyNTU7XG5cbiAgICBjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBncmFwaGljczogT3BlbkdMR3JhcGhpY3NJbXBsLCBpZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IGdyYXBoaWNzO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgZ2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICB1c2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmludXNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdyYXBoaWNzLmdsQ29tbWl0Q29udGV4dCgpO1xuXG4gICAgICAgIHRoaXMuaW51c2UgPSB0cnVlO1xuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLmZiKTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5ncmFwaGljcy5zaGFkZXJQcm9ncmFtLCBcInVDYW52YXNTaXplXCIpLCBNYXRoLmZsb29yKHRoaXMud2lkdGggLyAyKSwgTWF0aC5mbG9vcih0aGlzLmhlaWdodCAvIDIpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2wudmlld3BvcnQoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuZ3JhcGhpY3Muc3RhdGUgPSB0aGlzO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLnJlc2V0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5nbFN0YXJ0Q29udGV4dCgpO1xuICAgIH1cblxuICAgIHVudXNlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaW51c2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5pbnVzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmdsQ29tbWl0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0YXRlID0gdGhpcy5ncmFwaGljcztcblxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmdyYXBoaWNzLmNhbnZhcy53aWR0aCwgdGhpcy5ncmFwaGljcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5ncmFwaGljcy5zaGFkZXJQcm9ncmFtLCBcInVDYW52YXNTaXplXCIpLCB0aGlzLmdyYXBoaWNzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuZ3JhcGhpY3MuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmdsU3RhcnRDb250ZXh0KCk7XG4gICAgfVxuICAgIFxuICAgIHNldERpbWVuc2lvbih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB3aWR0aCA9IE1hdGguZmxvb3Iod2lkdGggLyAyKSAqIDI7XG4gICAgICAgIGhlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0IC8gMikgKiAyO1xuXG4gICAgICAgIGlmICh0aGlzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlVGV4dHVyZSh0aGlzLnRleHR1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZUZyYW1lYnVmZmVyKHRoaXMuZmIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLmdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUpO1xuXG4gICAgICAgICAgICAvLyBkZWZpbmUgc2l6ZSBhbmQgZm9ybWF0IG9mIGxldmVsIDBcbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGludGVybmFsRm9ybWF0ID0gdGhpcy5nbC5SR0JBO1xuICAgICAgICAgICAgY29uc3QgYm9yZGVyID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuZ2wuUkdCQTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdsLlVOU0lHTkVEX0JZVEU7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCxcbiAgICAgICAgICAgICAgICB3aWR0aCwgaGVpZ2h0LCBib3JkZXIsXG4gICAgICAgICAgICAgICAgZm9ybWF0LCB0eXBlLCBkYXRhKTtcblxuICAgICAgICAgICAgLy8gc2V0IHRoZSBmaWx0ZXJpbmcgc28gd2UgZG9uJ3QgbmVlZCBtaXBzXG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgdGhpcy5nbC5ORUFSRVNUKTtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB0aGlzLmdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfUywgdGhpcy5nbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1QsIHRoaXMuZ2wuQ0xBTVBfVE9fRURHRSk7XG5cbiAgICAgICAgICAgIHRoaXMuZmIgPSB0aGlzLmdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLmZiKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5nbC5DT0xPUl9BVFRBQ0hNRU5UMCwgdGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUsIGxldmVsKTtcblxuICAgICAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKDAsMCwwLDEpO1xuICAgICAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5ncmFwaGljcy5hdGxhc1RleHR1cmUpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgQml0bWFwIH0gZnJvbSBcIi4uL0JpdG1hcFwiO1xuaW1wb3J0IHsgc2hvdWxkUHJlc2NhbGVUaWxlc2V0cywgc2hvdWxkVXNlWGJyIH0gZnJvbSBcIi4uL0d1dGVcIjtcbmltcG9ydCB7IFRpbGVzZXQgfSBmcm9tIFwiLi4vVGlsZXNldFwiO1xuaW1wb3J0IHsgUGFsZXR0ZSB9IGZyb20gXCIuLi9pbXBsL1BhbGV0dGVcIjtcbmltcG9ydCB7IHhicjJ4LCB4YnIzeCwgeGJyNHggfSBmcm9tICd4YnItanMnO1xuaW1wb3J0IHsgT3BlbkdMR3JhcGhpY3NJbXBsIH0gZnJvbSBcIi4vT3BlbkdMR3JhcGhpY3NJbXBsXCI7XG5pbXBvcnQgeyBJT3BlbkdMQml0bWFwIH0gZnJvbSBcIi4vT3BlbkdMQml0bWFwXCI7XG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCIuLi9HcmFwaGljc1wiO1xuXG5jbGFzcyBPcGVuR0xUaWxlIGltcGxlbWVudHMgQml0bWFwLCBJT3BlbkdMQml0bWFwIHtcbiAgICBwYXJlbnQ6IE9wZW5HTFRpbGVzZXRJbXBsO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgbG9hZGVkOiBib29sZWFuO1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgc2NhbGU6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmcgPSBcInRpbGVcIjtcbiAgICBjYWNoZWQ6IFJlY29yZDxudW1iZXIsIEhUTUxDYW52YXNFbGVtZW50PiA9IHt9O1xuICAgIHRleFg6IG51bWJlciA9IDA7XG4gICAgdGV4WTogbnVtYmVyID0gMDtcbiAgICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogT3BlbkdMVGlsZXNldEltcGwsIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgfVxuXG4gICAgZHJhdyhncmFwaGljczogR3JhcGhpY3MsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGcgPSAoZ3JhcGhpY3MgYXMgT3BlbkdMR3JhcGhpY3NJbXBsKTtcbiAgICAgICAgdGhpcy50ZXhYID0gdGhpcy5wYXJlbnQudGV4WCArIHRoaXMueDtcbiAgICAgICAgdGhpcy50ZXhZID0gdGhpcy5wYXJlbnQudGV4WSArIHRoaXMueTtcbiAgICAgICAgZy5fZHJhd0JpdG1hcCh0aGlzLCB4LCB5LCBNYXRoLmZsb29yKHRoaXMud2lkdGggKiB0aGlzLnNjYWxlKSwgTWF0aC5mbG9vcih0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGUpKTtcbiAgICB9XG5cbiAgICBkcmF3U2NhbGVkKGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGcgPSAoZ3JhcGhpY3MgYXMgT3BlbkdMR3JhcGhpY3NJbXBsKTtcbiAgICAgICAgdGhpcy50ZXhYID0gdGhpcy5wYXJlbnQudGV4WCArIHRoaXMueDtcbiAgICAgICAgdGhpcy50ZXhZID0gdGhpcy5wYXJlbnQudGV4WSArIHRoaXMueTtcbiAgICAgICAgZy5fZHJhd0JpdG1hcCh0aGlzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpbml0T25GaXJzdENsaWNrKCk6IHZvaWQge1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wZW5HTFRpbGVzZXRJbXBsIGltcGxlbWVudHMgVGlsZXNldCwgSU9wZW5HTEJpdG1hcCB7XG4gICAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgdGlsZVdpZHRoOiBudW1iZXI7XG4gICAgdGlsZUhlaWdodDogbnVtYmVyO1xuICAgIG9yaWdpbmFsVGlsZVdpZHRoOiBudW1iZXI7XG4gICAgb3JpZ2luYWxUaWxlSGVpZ2h0OiBudW1iZXI7XG4gICAgaW1hZ2U6IGFueSB8IG51bGw7XG4gICAgYml0bWFwczogT3BlbkdMVGlsZVtdID0gW107XG4gICAgc2NhbmxpbmU6IG51bWJlciA9IDA7XG4gICAgdGlsZUNvdW50OiBudW1iZXIgPSAwO1xuICAgIHNjYWxlOiBudW1iZXI7XG4gICAgb25Mb2FkZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRleFg6IG51bWJlciA9IDA7XG4gICAgdGV4WTogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGdyYXBoaWNzOiBPcGVuR0xHcmFwaGljc0ltcGwsIHVybDogc3RyaW5nLCBkYXRhVXJsTG9hZGVyOiBQcm9taXNlPEJsb2I+IHwgdW5kZWZpbmVkLCB0aWxlV2lkdGg6IG51bWJlciwgdGlsZUhlaWdodDogbnVtYmVyLCBzY2FsZTogbnVtYmVyID0gMSwgcGFsOiBQYWxldHRlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudGlsZVdpZHRoID0gdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCA9IHRpbGVXaWR0aDtcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gdGhpcy5vcmlnaW5hbFRpbGVIZWlnaHQgPSB0aWxlSGVpZ2h0O1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgIHRoaXMubmFtZSA9IHVybDtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNob3VsZFByZXNjYWxlVGlsZXNldHMoKSAmJiBzY2FsZSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRVc2VYYnIoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBzY2FsZWRJbWFnZS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICAgICAgICAgIGN0eCEuZHJhd0ltYWdlKHRoaXMuaW1hZ2UhLCAwLCAwKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbEltYWdlRGF0YSA9IGN0eCEuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuaW1hZ2UhLndpZHRoLCB0aGlzLmltYWdlIS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFBpeGVsVmlldyA9IG5ldyBVaW50MzJBcnJheShvcmlnaW5hbEltYWdlRGF0YS5kYXRhLmJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlZFBpeGVsVmlldyA9IHNjYWxlID09PSAyID8geGJyMngob3JpZ2luYWxQaXhlbFZpZXcsIHRoaXMuaW1hZ2UhLndpZHRoLCB0aGlzLmltYWdlIS5oZWlnaHQpIDogeGJyM3gob3JpZ2luYWxQaXhlbFZpZXcsIHRoaXMuaW1hZ2UhLndpZHRoLCB0aGlzLmltYWdlIS5oZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlZEltYWdlLndpZHRoID0gdGhpcy5pbWFnZSEud2lkdGggKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVkSW1hZ2UuaGVpZ2h0ID0gdGhpcy5pbWFnZSEuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlZEltYWdlRGF0YSA9IG5ldyBJbWFnZURhdGEobmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHNjYWxlZFBpeGVsVmlldy5idWZmZXIpLCBzY2FsZWRJbWFnZS53aWR0aCwgc2NhbGVkSW1hZ2UuaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgICAgICBjdHghLnB1dEltYWdlRGF0YShzY2FsZWRJbWFnZURhdGEsIDAsIDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlZEltYWdlLndpZHRoID0gdGhpcy5pbWFnZSEud2lkdGggKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVkSW1hZ2UuaGVpZ2h0ID0gdGhpcy5pbWFnZSEuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IHNjYWxlZEltYWdlLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4IS5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+Y3R4ISkud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGN0eD8uZHJhd0ltYWdlKHRoaXMuaW1hZ2UhLCAwLCAwLCBzY2FsZWRJbWFnZS53aWR0aCwgc2NhbGVkSW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBzY2FsZWRJbWFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVXaWR0aCAqPSBzY2FsZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVIZWlnaHQgKj0gc2NhbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFRpbGVXaWR0aCAqPSBzY2FsZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsVGlsZUhlaWdodCAqPSBzY2FsZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2NhbmxpbmUgPSBNYXRoLmZsb29yKHRoaXMuaW1hZ2UhLndpZHRoIC8gdGhpcy50aWxlV2lkdGgpO1xuICAgICAgICAgICAgY29uc3QgZGVwdGg6IG51bWJlciA9IE1hdGguZmxvb3IodGhpcy5pbWFnZSEuaGVpZ2h0IC8gdGhpcy50aWxlSGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMudGlsZUNvdW50ID0gZGVwdGggKiB0aGlzLnNjYW5saW5lO1xuXG4gICAgICAgICAgICBpZiAocGFsKSB7XG4gICAgICAgICAgICAgICAgcGFsLmFkanVzdEltYWdlKHRoaXMuaW1hZ2UhKS50aGVuKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY3V0IHRoZSBpbWFnZSBpbnRvIHBpZWNlc1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGRlcHRoOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5zY2FubGluZTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaXRtYXBzLnB1c2gobmV3IE9wZW5HTFRpbGUodGhpcywgdGhpcy5pbWFnZSEsIHggKiB0aGlzLnRpbGVXaWR0aCwgeSAqIHRoaXMudGlsZUhlaWdodCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCwgc2NhbGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVXaWR0aCAqPSBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlSGVpZ2h0ICo9IHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MucmVnaXN0ZXJJbWFnZSh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGN1dCB0aGUgaW1hZ2UgaW50byBwaWVjZXNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGRlcHRoOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnNjYW5saW5lOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYml0bWFwcy5wdXNoKG5ldyBPcGVuR0xUaWxlKHRoaXMsIHRoaXMuaW1hZ2UhLCB4ICogdGhpcy50aWxlV2lkdGgsIHkgKiB0aGlzLnRpbGVIZWlnaHQsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQsIHNjYWxlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlV2lkdGggKj0gc2NhbGU7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlSGVpZ2h0ICo9IHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5vbkxvYWRlZCgpO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLnJlZ2lzdGVySW1hZ2UodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChkYXRhVXJsTG9hZGVyKSB7XG4gICAgICAgICAgICBkYXRhVXJsTG9hZGVyLnRoZW4oKGJsb2I6IEJsb2IpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgdXJsQ3JlYXRvciA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlIS5zcmMgPSB1cmxDcmVhdG9yLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2UuaGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZS53aWR0aDtcbiAgICB9XG5cbiAgICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBkcmF3U2NhbGVkKGdyYXBoaWNzOiBHcmFwaGljcywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgfVxuXG4gICAgZ2V0QmxvY2tDb2xvclRpbGUodGlsZTogbnVtYmVyLCB0aW50TmFtZTogc3RyaW5nLCBjb2w6IG51bWJlcltdKTogQml0bWFwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGlsZSh0aWxlKTtcbiAgICB9XG5cbiAgICBnZXRTaGFkZWRUaWxlKHRpbGU6IG51bWJlciwgdGludE5hbWU6IHN0cmluZywgc2hhZGU6IG51bWJlcik6IEJpdG1hcCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRpbGUodGlsZSk7XG4gICAgfVxuXG4gICAgZ2V0VGludGVkVGlsZSh0aWxlOiBudW1iZXIsIHRpbnROYW1lOiBzdHJpbmcsIHRpbnQ6IG51bWJlcltdKTogQml0bWFwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGlsZSh0aWxlKTtcbiAgICB9XG5cbiAgICBtb2RpZnkobW9kaWZpY2F0aW9uOiAoaW1hZ2VEYXRhOiBJbWFnZURhdGEpID0+IHZvaWQpOiBUaWxlc2V0IHtcbiAgICAgICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuaW1hZ2UhLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5pbWFnZSEuaGVpZ2h0O1xuICAgICAgICBjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UhLCAwLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGlkOiBJbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBtb2RpZmljYXRpb24oaWQpO1xuICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpZCwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgZm9yIChjb25zdCB0aWxlIG9mIHRoaXMuYml0bWFwcykge1xuICAgICAgICAgICAgdGlsZS5pbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRUaWxlc0Fjcm9zcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FubGluZTtcbiAgICB9XG5cbiAgICBnZXRUaWxlV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZVdpZHRoO1xuICAgIH1cblxuICAgIGdldFRpbGVIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZUhlaWdodDtcbiAgICB9XG5cbiAgICBnZXRUaWxlQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZUNvdW50O1xuICAgIH1cblxuICAgIGluaXRPbkZpcnN0Q2xpY2soKTogdm9pZCB7XG4gICAgfVxuXG4gICAgZ2V0VGlsZSh0aWxlOiBudW1iZXIpOiBCaXRtYXAge1xuICAgICAgICByZXR1cm4gdGhpcy5iaXRtYXBzW3RpbGVdO1xuICAgIH1cblxufSIsImltcG9ydCB7IE1hcE5vZGUgfSBmcm9tIFwiLi9NYXBOb2RlXCI7XG5pbXBvcnQgeyBQYXRoIH0gZnJvbSBcIi4vUGF0aFwiO1xuaW1wb3J0IHsgUGF0aEZpbmRlck1hcCB9IGZyb20gXCIuL1BhdGhGaW5kZXJNYXBcIjtcbmltcG9ydCB7IFBhdGhNb3ZlciB9IGZyb20gXCIuL1BhdGhNb3ZlclwiO1xuXG5leHBvcnQgY2xhc3MgQVN0YXJQYXRoRmluZGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIE5PUlRIX1RPX1NPVVRIID0gMDtcbiAgICBwdWJsaWMgc3RhdGljIEVBU1RfVE9fV0VTVCA9IDE7XG4gICAgcHVibGljIHN0YXRpYyBTT1VUSF9UT19OT1JUSCA9IDI7XG4gICAgcHVibGljIHN0YXRpYyBXRVNUX1RPX0VBU1QgPSAzO1xuICAgIHB1YmxpYyBzdGF0aWMgTk9ORSA9IDQ7XG5cbiAgICBwcml2YXRlIG9iamVjdFBvb2w6IEFycmF5PE1hcE5vZGU+ID0gW107XG4gICAgcHJpdmF0ZSBvcGVuTGlzdDogQXJyYXk8TWFwTm9kZT4gPSBbXTtcbiAgICBwcml2YXRlIHBhcmVudExpc3Q6IEFycmF5PE1hcE5vZGU+ID0gW107XG4gICAgcHJpdmF0ZSBvcGVuOiBBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xuICAgIHByaXZhdGUgY2xvc2VkOiBBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xuXG4gICAgcHJpdmF0ZSBtYXAhOiBQYXRoRmluZGVyTWFwO1xuICAgIHByaXZhdGUgaGVpZ2h0ITogbnVtYmVyO1xuICAgIHByaXZhdGUgd2lkdGghOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIHBhdGhGaW5kQ291bnRlcjogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIG1vdmVyITogUGF0aE1vdmVyO1xuICAgIHByaXZhdGUgdHghOiBudW1iZXJbXTtcbiAgICBwcml2YXRlIHR5ITogbnVtYmVyW107XG4gICAgcHJpdmF0ZSBjeCE6IG51bWJlcjtcbiAgICBwcml2YXRlIGN5ITogbnVtYmVyO1xuICAgIHByaXZhdGUgbWF4ITogbnVtYmVyO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG1hcDogUGF0aEZpbmRlck1hcCkge1xuICAgICAgICB0aGlzLnNldE1hcChtYXApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRNYXAobWFwOiBQYXRoRmluZGVyTWFwKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBtYXAuZ2V0TWFwV2lkdGgoKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBtYXAuZ2V0TWFwSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuXG4gICAgICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSBuZXcgQXJyYXk8QXJyYXk8bnVtYmVyPj4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZCA9IG5ldyBBcnJheTxBcnJheTxudW1iZXI+PigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG8gPSB0aGlzLm9wZW5baV0gXG4gICAgICAgICAgICBsZXQgYyA9IHRoaXMuY2xvc2VkW2ldO1xuXG4gICAgICAgICAgICBpZiAoIW8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5baV0gPSBvID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDU7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBvLnB1c2goMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRbaV0gPSBjID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDU7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjLnB1c2goMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDU7IGorKykge1xuICAgICAgICAgICAgICAgIG9bal0gPSAwO1xuICAgICAgICAgICAgICAgIGNbal0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHRoaXMub3Blbkxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UG9vbC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2YgdGhpcy5wYXJlbnRMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdFBvb2wucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcmVudExpc3QgPSBbXVxuICAgICAgICB0aGlzLm9wZW5MaXN0ID0gW11cbiAgICAgICAgdGhpcy5wYXRoRmluZENvdW50ZXIrKztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlUGF0aChub2RlOiBNYXBOb2RlKTogUGF0aCB7XG4gICAgICAgIHZhciBjdXJyZW50OiBNYXBOb2RlIHwgbnVsbCA9IG5vZGU7XG4gICAgICAgIHZhciBwYXRoOiBQYXRoID0gbmV3IFBhdGgoKTtcblxuICAgICAgICB3aGlsZSAoY3VycmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBwYXRoLmFkZChjdXJyZW50LngsIGN1cnJlbnQueSk7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJsb2NrZWQoc3g6IG51bWJlciwgc3k6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLm1hcC5sb2NhdGlvbkRpc2NvdmVyZWQoeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmJsb2NrZWQodGhpcy5tb3ZlciwgbnVsbCwgc3gsIHN5LCB4LCB5LCB0aGlzLmF0VGFyZ2V0KHgsIHkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGF0VGFyZ2V0KHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50eC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdHggPSB0aGlzLnR4W2ldXG4gICAgICAgICAgICBjb25zdCB0eSA9IHRoaXMudHlbaV1cbiAgICAgICAgICAgIGlmICh0eCA+PSB4ICYmIHR4IDwgeCArIHRoaXMubW92ZXIuZ2V0VGlsZXNXaWR0aCgpXG4gICAgICAgICAgICAgICAgJiYgdHkgPj0geSAmJiB0eSA8IHkgKyB0aGlzLm1vdmVyLmdldFRpbGVzSGVpZ2h0KCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZFBhdGgobW92ZXI6IFBhdGhNb3ZlciwgdHg6IG51bWJlciwgdHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIG1heDogbnVtYmVyKTogUGF0aCB8IG51bGwge1xuXG4gICAgICAgIHR4ID0gTWF0aC5mbG9vcih0eCk7XG4gICAgICAgIHR5ID0gTWF0aC5mbG9vcih0eSk7XG5cblxuICAgICAgICB0aGlzLm1heCA9IG1heDtcbiAgICAgICAgdGhpcy5tb3ZlciA9IG1vdmVyO1xuICAgICAgICB0aGlzLnR4ID0gW107XG4gICAgICAgIHRoaXMudHkgPSBbXTtcbiAgICAgICAgLy8gY2VudHJhbCBwb2ludCBmb3IgaGV1cmlzdGljIG9yZGVyaW5nXG4gICAgICAgIHRoaXMuY3ggPSB0eCArIHdpZHRoIC8gMlxuICAgICAgICB0aGlzLmN5ID0gdHkgKyBoZWlnaHQgLyAyXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnR4LnB1c2godHggKyBpKVxuICAgICAgICAgICAgdGhpcy50eS5wdXNoKHR5KVxuICAgICAgICAgICAgaWYgKGhlaWdodCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR4LnB1c2godHggKyBpKVxuICAgICAgICAgICAgICAgIHRoaXMudHkucHVzaCh0eSArIGhlaWdodCAtIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGVpZ2h0ID4gMikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBoZWlnaHQgLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR4LnB1c2godHgpXG4gICAgICAgICAgICAgICAgdGhpcy50eS5wdXNoKHR5ICsgaSlcbiAgICAgICAgICAgICAgICBpZiAod2lkdGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHgucHVzaCh0eCArIHdpZHRoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eS5wdXNoKHR5ICsgaSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50eC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIHRoaXMuYWRkTG9jYXRpb24obnVsbCwgTWF0aC5mbG9vcihtb3Zlci5nZXRUaWxlTWFwWCgpKSwgTWF0aC5mbG9vcihtb3Zlci5nZXRUaWxlTWFwWSgpKSk7XG4gICAgICAgIHdoaWxlICh0aGlzLm9wZW5MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGJlc3Q6IE1hcE5vZGUgPSB0aGlzLm9wZW5MaXN0WzBdO1xuICAgICAgICAgICAgdGhpcy5vcGVuTGlzdC5zcGxpY2UoMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIGlmIGJlc3QgaXMgdGhlIHRhcmdldCB0aGVuIHdlJ3ZlIGZvdW5kIGl0IVxuICAgICAgICAgICAgaWYgKHRoaXMuYXRUYXJnZXQoYmVzdC54LCBiZXN0LnkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVQYXRoKGJlc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFkZExvY2F0aW9uKGJlc3QsIGJlc3QueCArIDEsIGJlc3QueSk7XG4gICAgICAgICAgICB0aGlzLmFkZExvY2F0aW9uKGJlc3QsIGJlc3QueCAtIDEsIGJlc3QueSk7XG4gICAgICAgICAgICB0aGlzLmFkZExvY2F0aW9uKGJlc3QsIGJlc3QueCwgYmVzdC55ICsgMSk7XG4gICAgICAgICAgICB0aGlzLmFkZExvY2F0aW9uKGJlc3QsIGJlc3QueCwgYmVzdC55IC0gMSk7XG5cbiAgICAgICAgICAgIHRoaXMucGFyZW50TGlzdC5wdXNoKGJlc3QpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExvY2F0aW9uKHBhcmVudDogTWFwTm9kZSB8IG51bGwsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKHgpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcih5KTtcblxuICAgICAgICB2YXIgc3ggPSB4O1xuICAgICAgICB2YXIgc3kgPSB5O1xuICAgICAgICB2YXIgZGlyID0gQVN0YXJQYXRoRmluZGVyLk5PTkU7XG5cbiAgICAgICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBzeCA9IHBhcmVudC54O1xuICAgICAgICAgICAgc3kgPSBwYXJlbnQueTtcblxuICAgICAgICAgICAgaWYgKHN5ICsgMSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLk5PUlRIX1RPX1NPVVRIO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN5IC0gMSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLlNPVVRIX1RPX05PUlRIO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN4ICsgMSA9PSB4KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gQVN0YXJQYXRoRmluZGVyLldFU1RfVE9fRUFTVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzeCAtIDEgPT0geCkge1xuICAgICAgICAgICAgICAgIGRpciA9IEFTdGFyUGF0aEZpbmRlci5FQVNUX1RPX1dFU1Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICghdGhpcy5tYXAudmFsaWRMb2NhdGlvbih4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgaXQncyBpbiB0aGUgb3BlbiBsaXN0IGlnbm9yZVxuICAgICAgICBpZiAodGhpcy5vcGVuW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID09IHRoaXMucGF0aEZpbmRDb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkW3ggKyAoeSAqIHRoaXMud2lkdGgpXVtkaXJdID09IHRoaXMucGF0aEZpbmRDb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBpdCdzIGJsb2NrZWQgZm9yIGFueSByZWFzb24sIGFkZCBpdCB0byB0aGUgY2xvc2VkXG4gICAgICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudC5kZXB0aCA+IHRoaXMubWF4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRbeCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPSB0aGlzLnBhdGhGaW5kQ291bnRlcjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmxvY2tlZChzeCwgc3ksIHgsIHkpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZFt4ICsgKHkgKiB0aGlzLndpZHRoKV1bZGlyXSA9IHRoaXMucGF0aEZpbmRDb3VudGVyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3RoZXJ3aXNlIGl0J3MgYSBwb3NzaWJsZSBzdGVwIGFkZCBpdCB0byB0aGUgb3BlblxuICAgICAgICB0aGlzLm9wZW5beCArICh5ICogdGhpcy53aWR0aCldW2Rpcl0gPSB0aGlzLnBhdGhGaW5kQ291bnRlcjtcblxuICAgICAgICBjb25zdCBkeDogbnVtYmVyID0gTWF0aC5hYnModGhpcy5jeCAtIHgpO1xuICAgICAgICBjb25zdCBkeTogbnVtYmVyID0gTWF0aC5hYnModGhpcy5jeSAtIHkpO1xuXG4gICAgICAgIGNvbnN0IG5vZGU6IE1hcE5vZGUgPSB0aGlzLmNyZWF0ZU1hcE5vZGUoeCwgeSwgcGFyZW50LCBkeCArIGR5KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBBU3RhclBhdGhGaW5kZXIuYmluYXJ5U2VhcmNoKHRoaXMub3Blbkxpc3QsIG5vZGUuaClcbiAgICAgICAgdGhpcy5vcGVuTGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5vZGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGJpbmFyeVNlYXJjaChhcnJheTogTWFwTm9kZVtdLCBoOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGxvID0gLTEsIGhpID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoMSArIGxvIDwgaGkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pID0gbG8gKyAoKGhpIC0gbG8pID4+IDEpO1xuICAgICAgICAgICAgaWYgKGFycmF5W21pXS5oID4gaCkge1xuICAgICAgICAgICAgICAgIGhpID0gbWk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvID0gbWk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhpO1xuICAgIH1cblxuICAgIC8vIG9iamVjdCBwb29sIGFjY2Vzc29yIC0gZnJlZSBpcyBkb25lIGluIGJ1bGtcbiAgICBwcml2YXRlIGNyZWF0ZU1hcE5vZGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHBhcmVudDogTWFwTm9kZSB8IG51bGwsIGg6IG51bWJlcik6IE1hcE5vZGUge1xuICAgICAgICBpZiAodGhpcy5vYmplY3RQb29sLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgbjogTWFwTm9kZSA9IG5ldyBNYXBOb2RlKCk7XG4gICAgICAgICAgICB0aGlzLm9iamVjdFBvb2wucHVzaChuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBub2RlOiBNYXBOb2RlID0gdGhpcy5vYmplY3RQb29sWzBdO1xuICAgICAgICB0aGlzLm9iamVjdFBvb2wuc3BsaWNlKDAsIDEpO1xuICAgICAgICBub2RlLnggPSB4O1xuICAgICAgICBub2RlLnkgPSB5O1xuICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLmRlcHRoID0gcGFyZW50LmRlcHRoICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGVwdGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuaCA9IGggKyBub2RlLmRlcHRoO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBNYXBOb2RlIHtcbiAgICB4ITogbnVtYmVyO1xuICAgIHkhOiBudW1iZXI7XG4gICAgcGFyZW50ITogTWFwTm9kZSB8IG51bGw7XG4gICAgaCE6IG51bWJlcjtcbiAgICBkZXB0aCE6IG51bWJlcjtcbn0iLCJpbXBvcnQgeyBTdGVwIH0gZnJvbSBcIi4vU3RlcFwiO1xuXG5leHBvcnQgY2xhc3MgUGF0aCB7XG4gICAgc3RlcHM6IEFycmF5PFN0ZXA+ID0gbmV3IEFycmF5PFN0ZXA+KCk7XG5cbiAgICBhZGQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGVwcy5zcGxpY2UoMCwgMCwgbmV3IFN0ZXAoeCwgeSkpO1xuICAgIH1cblxuICAgIGdldExhc3RTdGVwKCk6IFN0ZXAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGVwc1t0aGlzLnN0ZXBzLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIHBvcCgpOiBTdGVwIHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBTdGVwID0gdGhpcy5zdGVwc1swXTtcbiAgICAgICAgdGhpcy5zdGVwcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgY29weSgpOiBQYXRoIHtcbiAgICAgICAgY29uc3QgY29weSA9IG5ldyBQYXRoKCk7XG4gICAgICAgIGZvciAoY29uc3Qgc3RlcCBvZiB0aGlzLnN0ZXBzKSB7XG4gICAgICAgICAgICBjb3B5LnN0ZXBzLnB1c2gobmV3IFN0ZXAoc3RlcC54LCBzdGVwLnkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29weS5zdGVwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlZCBjb3B5IG9mIHBhdGggd2l0aCB6ZXJvIHN0ZXBzOiBcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29weTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFN0ZXAge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gXCIuLi9SZXNvdXJjZVwiO1xuaW1wb3J0IHsgTWFwRW50aXR5IH0gZnJvbSBcIi4vTWFwRW50aXR5XCI7XG5pbXBvcnQgeyBNYXBMYXllciB9IGZyb20gXCIuL01hcExheWVyXCI7XG5pbXBvcnQgeyBNYXBMZXZlbCB9IGZyb20gXCIuL01hcExldmVsXCI7XG5pbXBvcnQgeyBNYXBXb3JsZCB9IGZyb20gXCIuL01hcFdvcmxkXCI7XG5cbmludGVyZmFjZSBFbnRpdHlSZWYge1xuICB2YWx1ZTogc3RyaW5nfHN0cmluZ1tdXG4gIGVudGl0eTogTWFwRW50aXR5XG4gIGZpZWxkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMRFRLTGF5ZXJDb21wcmVzc2lvbiB7XG4gIGZyb206IHN0cmluZztcbiAgdG86IHN0cmluZztcbiAgb2Zmc2V0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBMRFRLV29ybGQgZXh0ZW5kcyBNYXBXb3JsZCBpbXBsZW1lbnRzIFJlc291cmNlIHtcbiAgc3RhdGljIExBWUVSX0NPTVBSRVNTSU9OUzogTERUS0xheWVyQ29tcHJlc3Npb25bXSA9IFtdO1xuXG4gIG5hbWU6IHN0cmluZyA9IFwid29ybGRcIjtcbiAgdGlsZXNldHM6IGFueVtdID0gW107XG5cbiAgaW5pdE9uRmlyc3RDbGljaygpOiB2b2lkIHtcbiAgfVxuXG4gIGxvYWQoZmlsZTogc3RyaW5nLCBsb2FkZXI6IChmaWxlOiBzdHJpbmcpID0+IFByb21pc2U8YW55PikgOiBQcm9taXNlPE1hcFdvcmxkPiB7XG4gICAgdGhpcy5uYW1lID0gZmlsZTtcblxuICAgIHJldHVybiBsb2FkZXIoZmlsZSkudGhlbihqc29uID0+IHtcbiAgICAgIGNvbnN0IGVudGl0eVJlZnMgOiBFbnRpdHlSZWZbXSA9IFtdXG4gICAgICBjb25zdCBlbnRpdHlNYXA6IFJlY29yZDxzdHJpbmcsIE1hcEVudGl0eT4gPSB7fVxuICAgICAgXG4gICAgICB0aGlzLmdyaWRTaXplID0ganNvbi5kZWZhdWx0R3JpZFNpemU7XG4gICAgICBjb25zdCB0aWxlc2V0OiBhbnkgPSBqc29uLmRlZnMudGlsZXNldHNbMF07XG4gICAgICB0aGlzLnRpbGVzZXRzID0ganNvbi5kZWZzLnRpbGVzZXRzO1xuICAgICAgdGhpcy50aWxlc2V0U2NhbmxpbmUgPSB0aWxlc2V0LnB4V2lkIC8gdGlsZXNldC50aWxlR3JpZFNpemU7XG4gICAgICB0aGlzLnRpbGVzZXRTaXplID0gdGlsZXNldC50aWxlR3JpZFNpemU7XG5cbiAgICAgIGxldCBsZXZlbHMgPSBqc29uLmxldmVscztcbiAgICAgIGlmIChqc29uLndvcmxkcyAmJiBqc29uLndvcmxkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldmVscyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHdvcmxkIG9mIGpzb24ud29ybGRzKSB7XG4gICAgICAgICAgbGV2ZWxzID0gbGV2ZWxzLmNvbmNhdCh3b3JsZC5sZXZlbHMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFzeW5jTGV2ZWxzIDogUHJvbWlzZTxNYXBMZXZlbD5bXSA9IFtdXG4gICAgICBmb3IgKGNvbnN0IGxldmVsRGF0YSBvZiBqc29uLmxldmVscykge1xuICAgICAgICBjb25zdCBsZXZlbDogTWFwTGV2ZWwgPSBuZXcgTWFwTGV2ZWwodGhpcywgbGV2ZWxEYXRhLmlkZW50aWZpZXIpO1xuXG4gICAgICAgIGxldmVsLndvcmxkWCA9IGxldmVsRGF0YS53b3JsZFg7XG4gICAgICAgIGxldmVsLndvcmxkWSA9IGxldmVsRGF0YS53b3JsZFk7XG4gICAgICAgIGxldmVsLndvcmxkRGVwdGggPSBsZXZlbERhdGEud29ybGREZXB0aDtcbiAgICAgICAgXG4gICAgICAgIGZvciAoY29uc3QgZmllbGRJbnN0YW5jZSBvZiBsZXZlbERhdGEuZmllbGRJbnN0YW5jZXMpIHtcbiAgICAgICAgICBsZXZlbC5maWVsZHNbZmllbGRJbnN0YW5jZS5fX2lkZW50aWZpZXJdID0gZmllbGRJbnN0YW5jZS5fX3ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxheWVycyA6IFByb21pc2U8YW55PlxuICAgICAgICBpZiAobGV2ZWxEYXRhLmxheWVySW5zdGFuY2VzKSAvLyBlbWJlZGRlZCBsYXllcnNcbiAgICAgICAgICBsYXllcnMgPSBQcm9taXNlLnJlc29sdmUobGV2ZWxEYXRhKVxuICAgICAgICBlbHNlIGlmIChsZXZlbERhdGEuZXh0ZXJuYWxSZWxQYXRoKSB7XG4gICAgICAgICAgbGF5ZXJzID0gbG9hZGVyKGxldmVsRGF0YS5leHRlcm5hbFJlbFBhdGgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBMRFRLIGZpbGUgZm9ybWF0XCIpXG4gICAgICAgIH1cblxuICAgICAgICBhc3luY0xldmVscy5wdXNoKGxheWVycy50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIExEVEtXb3JsZC5sb2FkTGF5ZXJzKGxldmVsLCBkYXRhLmxheWVySW5zdGFuY2VzLCBlbnRpdHlSZWZzLCBlbnRpdHlNYXApO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChsZXZlbC5sYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV2ZWwud2lkdGggPSBsZXZlbC5sYXllcnNbMF0ud2lkdGg7XG4gICAgICAgICAgICBsZXZlbC5oZWlnaHQgPSBsZXZlbC5sYXllcnNbMF0uaGVpZ2h0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXZlbC53aWR0aCA9IGxldmVsRGF0YS5weFdpZCAvIHRoaXMuZ3JpZFNpemU7XG4gICAgICAgICAgICBsZXZlbC5oZWlnaHQgPSBsZXZlbERhdGEucHhIZWkgLyB0aGlzLmdyaWRTaXplO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMubGV2ZWxzW2xldmVsLmlkXSA9IGxldmVsO1xuICAgICAgICAgIHJldHVybiBsZXZlbFxuICAgICAgICB9KSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGFzeW5jTGV2ZWxzKS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgLy8gcmVzb2x2ZSBhbGwgZW50aXR5IGlkcyBub3cgdGhhdCB3ZSBoYXZlIGFsbCB0aGUgZGF0YVxuICAgICAgICBmb3IgKGNvbnN0IHJlZiBvZiBlbnRpdHlSZWZzKSB7XG4gICAgICAgICAgaWYgKHJlZi52YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA6IE1hcEVudGl0eVtdID0gW11cbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiByZWYudmFsdWUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZW50aXR5ID0gZW50aXR5TWFwW2l0ZW1dXG4gICAgICAgICAgICAgIGlmIChlbnRpdHkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKGVudGl0eSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVmLmVudGl0eS5maWVsZHNbcmVmLmZpZWxkXSA9IHZhbHVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IGVudGl0eU1hcFtyZWYudmFsdWVdXG4gICAgICAgICAgICBpZiAoZW50aXR5KSB7XG4gICAgICAgICAgICAgIHJlZi5lbnRpdHkuZmllbGRzW3JlZi5maWVsZF0gPSBlbnRpdHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgXG4gIHByaXZhdGUgc3RhdGljIGxvYWRMYXllcnMobGV2ZWw6IE1hcExldmVsLCBsYXllckluc3RhbmNlczogYW55LCBlbnRpdHlSZWZzOiBFbnRpdHlSZWZbXSwgZW50aXR5TWFwOiBSZWNvcmQ8c3RyaW5nLCBNYXBFbnRpdHk+KSB7XG4gICAgZm9yIChjb25zdCBsYXllckRhdGEgb2YgbGF5ZXJJbnN0YW5jZXMpIHtcbiAgICAgIGlmIChsYXllckRhdGEuX190eXBlID09PSBcIkVudGl0aWVzXCIpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbnRpdHlEYXRhIG9mIGxheWVyRGF0YS5lbnRpdHlJbnN0YW5jZXMpIHtcbiAgICAgICAgICBjb25zdCBlbnRpdHk6IE1hcEVudGl0eSA9IG5ldyBNYXBFbnRpdHkobGV2ZWwsXG4gICAgICAgICAgICAgIGVudGl0eURhdGEucHhbMF0gLyBsYXllckRhdGEuX19ncmlkU2l6ZSxcbiAgICAgICAgICAgICAgZW50aXR5RGF0YS5weFsxXSAvIGxheWVyRGF0YS5fX2dyaWRTaXplLFxuICAgICAgICAgICAgICBlbnRpdHlEYXRhLndpZHRoIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUsXG4gICAgICAgICAgICAgIGVudGl0eURhdGEuaGVpZ2h0IC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUsXG4gICAgICAgICAgICAgIGVudGl0eURhdGEuX19pZGVudGlmaWVyKVxuXG4gICAgICAgICAgZW50aXR5TWFwW2VudGl0eURhdGEuaWlkXSA9IGVudGl0eVxuICAgICAgICAgIGZvciAoY29uc3QgZmllbGRJbnN0YW5jZSBvZiBlbnRpdHlEYXRhLmZpZWxkSW5zdGFuY2VzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGZpZWxkSW5zdGFuY2UuX190eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJFbnRpdHlSZWZcIjogLy8gc2F2ZSBpbmZvcm1hdGlvbiB0byByZXNvbHZlIHJlZnMgdG8gZW50aXRpZXMgbGF0ZXIgd2hlbiBhbGwgaW5mb3JtYXRpb24gd2lsbCBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBlbnRpdHlSZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkSW5zdGFuY2UuX192YWx1ZS5lbnRpdHlJaWQsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IGVudGl0eSxcbiAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZEluc3RhbmNlLl9faWRlbnRpZmllclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJheTxFbnRpdHlSZWY+XCI6XG4gICAgICAgICAgICAgICAgZW50aXR5UmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAoZmllbGRJbnN0YW5jZS5fX3ZhbHVlIGFzIEFycmF5PGFueT4pLm1hcChpdCA9PiBpdC5lbnRpdHlJaWQpLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBlbnRpdHksXG4gICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGRJbnN0YW5jZS5fX2lkZW50aWZpZXJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGVudGl0eS5maWVsZHNbZmllbGRJbnN0YW5jZS5fX2lkZW50aWZpZXJdID0gZmllbGRJbnN0YW5jZS5fX3ZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXZlbC5lbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbXByZXNzaW9uID0gTERUS1dvcmxkLkxBWUVSX0NPTVBSRVNTSU9OUy5maW5kKGMgPT4gYy5mcm9tID09PSBsYXllckRhdGEuX19pZGVudGlmaWVyKTtcbiAgICAgICAgbGV0IGxheWVyOiBNYXBMYXllciB8IHVuZGVmaW5lZDsgXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBpZiAoY29tcHJlc3Npb24pIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRMYXllciA9IGxldmVsLmxheWVyQnlOYW1lW2NvbXByZXNzaW9uLnRvXTtcbiAgICAgICAgICBpZiAoIXRhcmdldExheWVyKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlVuYWJsZSB0byBmaW5kIGNvbXByZXNzaW9uIGxheWVyOiBcIiArIGNvbXByZXNzaW9uLnRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxheWVyID0gdGFyZ2V0TGF5ZXI7XG4gICAgICAgICAgb2Zmc2V0ID0gY29tcHJlc3Npb24ub2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxheWVyID0gbmV3IE1hcExheWVyKGxldmVsLCBsYXllckRhdGEuX19pZGVudGlmaWVyLCBsYXllckRhdGEuX19jV2lkLCBsYXllckRhdGEuX19jSGVpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpbGVzZXQgPSAobGV2ZWwud29ybGQgYXMgTERUS1dvcmxkKS50aWxlc2V0cy5maW5kKHQgPT4gdC51aWQgPT09IGxheWVyRGF0YS5fX3RpbGVzZXREZWZVaWQpO1xuXG4gICAgICAgIGNvbnN0IHNjYW5saW5lOiBudW1iZXIgPXRpbGVzZXQucHhXaWQgLyB0aWxlc2V0LnRpbGVHcmlkU2l6ZTtcbiAgICAgICAgY29uc3QgdGlsZVNpemU6IG51bWJlciA9dGlsZXNldC50aWxlR3JpZFNpemU7XG5cbiAgICAgICAgZm9yIChjb25zdCB0aWxlIG9mIGxheWVyRGF0YS5ncmlkVGlsZXMpIHtcbiAgICAgICAgICBjb25zdCB4OiBudW1iZXIgPSBNYXRoLmZsb29yKHRpbGUucHhbMF0gLyBsYXllckRhdGEuX19ncmlkU2l6ZSk7XG4gICAgICAgICAgY29uc3QgeTogbnVtYmVyID0gTWF0aC5mbG9vcih0aWxlLnB4WzFdIC8gbGF5ZXJEYXRhLl9fZ3JpZFNpemUpO1xuICAgICAgICAgIGNvbnN0IHBvc0luZGV4OiBudW1iZXIgPSB4ICsgKHkgKiBsYXllci53aWR0aCk7XG5cbiAgICAgICAgICBjb25zdCB0eDogbnVtYmVyID0gTWF0aC5mbG9vcih0aWxlLnNyY1swXSAvIHRpbGVTaXplKTtcbiAgICAgICAgICBjb25zdCB0eTogbnVtYmVyID0gTWF0aC5mbG9vcih0aWxlLnNyY1sxXSAvIHRpbGVTaXplKTtcblxuICAgICAgICAgIGNvbnN0IHRpbGVJbmRleDogbnVtYmVyID0gKHR5ICogc2NhbmxpbmUpICsgdHg7XG4gICAgICAgICAgbGF5ZXIudGlsZXNbcG9zSW5kZXhdID0gdGlsZUluZGV4ICsgMSArIG9mZnNldDtcbiAgICAgICAgICBsYXllci5mbGlwc1twb3NJbmRleF0gPSB0aWxlLmY7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbXByZXNzaW9uKSB7XG4gICAgICAgICAgbGV2ZWwubGF5ZXJzLnNwbGljZSgwLCAwLCBsYXllcik7XG4gICAgICAgICAgbGV2ZWwubGF5ZXJCeU5hbWVbbGF5ZXIubmFtZV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTWFwTGV2ZWwgfSBmcm9tIFwiLi9NYXBMZXZlbFwiO1xuXG5leHBvcnQgY2xhc3MgTWFwRW50aXR5IHtcbiAgdHlwZTogc3RyaW5nO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxldmVsOiBNYXBMZXZlbDtcbiAgZmllbGRzOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihsZXZlbDogTWFwTGV2ZWwsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGNvcHkobGV2ZWw6IE1hcExldmVsKTogTWFwRW50aXR5IHtcbiAgICBjb25zdCByZXN1bHQ6IE1hcEVudGl0eSA9IG5ldyBNYXBFbnRpdHkobGV2ZWwsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy50eXBlKTtcbiAgICByZXN1bHQuZmllbGRzID0gey4uLnRoaXMuZmllbGRzfTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0iLCJpbXBvcnQgeyBNYXBMZXZlbCB9IGZyb20gXCIuL01hcExldmVsXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXBMYXllciB7XG4gIHN0YXRpYyBGTElQX1g6IG51bWJlciA9IDE7XG4gIHN0YXRpYyBGTElQX1k6IG51bWJlciA9IDI7XG4gIFxuICBuYW1lOiBzdHJpbmc7XG4gIGxldmVsOiBNYXBMZXZlbDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHRpbGVzOiBudW1iZXJbXTtcbiAgZmxpcHM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKGxldmVsOiBNYXBMZXZlbCwgbmFtZTogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuICAgIHRoaXMudGlsZXMgPSBbXTtcbiAgICB0aGlzLmZsaXBzID0gW107XG4gICAgZm9yIChsZXQgaT0wO2k8dGhpcy53aWR0aCp0aGlzLmhlaWdodDtpKyspIHtcbiAgICAgIHRoaXMudGlsZXMucHVzaCgwKTtcbiAgICAgIHRoaXMuZmxpcHMucHVzaCgwKTtcbiAgICB9XG4gIH1cblxuICBnZXRGbGlwRmxhZ3MoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICgoeCA8IDApIHx8ICh5IDwgMCkgfHwgKHggPj0gdGhpcy53aWR0aCkgfHwgKHkgPj0gdGhpcy5oZWlnaHQpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgcG9zSW5kZXg6IG51bWJlciA9IHggKyAoeSAqIHRoaXMud2lkdGgpO1xuICAgIFxuICAgIHJldHVybiB0aGlzLmZsaXBzW3Bvc0luZGV4XTtcbiAgfVxuXG4gIHNldCh4OiBudW1iZXIsIHk6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICgoeCA8IDApIHx8ICh5IDwgMCkgfHwgKHggPj0gdGhpcy53aWR0aCkgfHwgKHkgPj0gdGhpcy5oZWlnaHQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBvc0luZGV4OiBudW1iZXIgPSB4ICsgKHkgKiB0aGlzLndpZHRoKTtcbiAgICB0aGlzLnRpbGVzW3Bvc0luZGV4XSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0KHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoKHggPCAwKSB8fCAoeSA8IDApIHx8ICh4ID49IHRoaXMud2lkdGgpIHx8ICh5ID49IHRoaXMuaGVpZ2h0KSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IHBvc0luZGV4OiBudW1iZXIgPSB4ICsgKHkgKiB0aGlzLndpZHRoKTtcbiAgICBcbiAgICByZXR1cm4gdGhpcy50aWxlc1twb3NJbmRleF07XG4gIH1cblxuICBjb3B5KGxldmVsOiBNYXBMZXZlbCk6IE1hcExheWVyIHtcbiAgICBjb25zdCByZXN1bHQ6IE1hcExheWVyID0gbmV3IE1hcExheWVyKGxldmVsLCB0aGlzLm5hbWUsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBmb3IgKGxldCBpPTA7aTx0aGlzLndpZHRoKnRoaXMuaGVpZ2h0O2krKykge1xuICAgICAgcmVzdWx0LnRpbGVzW2ldID0gdGhpcy50aWxlc1tpXTtcbiAgICAgIHJlc3VsdC5mbGlwc1tpXSA9IHRoaXMuZmxpcHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSIsImltcG9ydCB7IE1hcEVudGl0eSB9IGZyb20gXCIuL01hcEVudGl0eVwiO1xuaW1wb3J0IHsgTWFwTGF5ZXIgfSBmcm9tIFwiLi9NYXBMYXllclwiO1xuaW1wb3J0IHsgTWFwV29ybGQgfSBmcm9tIFwiLi9NYXBXb3JsZFwiO1xuXG5leHBvcnQgY2xhc3MgTWFwTGV2ZWwge1xuICBpZDogc3RyaW5nO1xuICBsYXllcnM6IE1hcExheWVyW10gPSBbXTtcbiAgbGF5ZXJCeU5hbWU6IFJlY29yZDxzdHJpbmcsIE1hcExheWVyPiA9IHt9O1xuICB3aWR0aCE6IG51bWJlcjtcbiAgaGVpZ2h0ITogbnVtYmVyO1xuICB3b3JsZDogTWFwV29ybGQ7XG4gIGVudGl0aWVzOiBNYXBFbnRpdHlbXSA9IFtdO1xuICBmaWVsZHM6IGFueSA9IHt9O1xuICB3b3JsZFg6IG51bWJlciA9IDA7XG4gIHdvcmxkWTogbnVtYmVyID0gMDtcbiAgd29ybGREZXB0aDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3Rvcih3b3JsZDogTWFwV29ybGQsIGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLndvcmxkID0gd29ybGQ7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgZW50aXRpZXNPZlR5cGUodHlwZTogc3RyaW5nKTogTWFwRW50aXR5W10ge1xuICAgIHJldHVybiB0aGlzLmVudGl0aWVzLmZpbHRlcihlbnRpdHkgPT4gZW50aXR5LnR5cGUgPT09IHR5cGUpO1xuICB9XG5cbiAgZmlyc3RFbnRpdHlPZlR5cGUodHlwZTogc3RyaW5nKTogTWFwRW50aXR5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdGllcy5maW5kKGVudGl0eSA9PiBlbnRpdHkudHlwZSA9PT0gdHlwZSk7XG4gIH1cblxuICBjb3B5KGlkOiBzdHJpbmcpOiBNYXBMZXZlbCB7XG4gICAgY29uc3Qgd29ybGRDb3B5OiBNYXBXb3JsZCA9IG5ldyBNYXBXb3JsZCgpO1xuICAgIHdvcmxkQ29weS5ncmlkU2l6ZSA9IHRoaXMud29ybGQuZ3JpZFNpemU7XG4gICAgd29ybGRDb3B5LmxvYWRlZCA9IHRoaXMud29ybGQubG9hZGVkO1xuICAgIHdvcmxkQ29weS50aWxlc2V0U2NhbmxpbmUgPSB0aGlzLndvcmxkLnRpbGVzZXRTY2FubGluZTtcbiAgICB3b3JsZENvcHkudGlsZXNldFNpemUgPSB0aGlzLndvcmxkLnRpbGVzZXRTaXplO1xuXG4gICAgY29uc3QgbGV2ZWxDb3B5OiBNYXBMZXZlbCA9IG5ldyBNYXBMZXZlbCh3b3JsZENvcHksIGlkKTtcbiAgICBsZXZlbENvcHkud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIGxldmVsQ29weS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICBsZXZlbENvcHkud29ybGRYID0gdGhpcy53b3JsZFg7XG4gICAgbGV2ZWxDb3B5LndvcmxkWSA9IHRoaXMud29ybGRZO1xuICAgIGxldmVsQ29weS53b3JsZERlcHRoID0gdGhpcy53b3JsZERlcHRoO1xuICAgIGxldmVsQ29weS5maWVsZHMgPSB7Li4udGhpcy5maWVsZHN9O1xuXG4gICAgZm9yIChjb25zdCBsYXllciBvZiB0aGlzLmxheWVycykge1xuICAgICAgY29uc3QgY29weTogTWFwTGF5ZXIgPSBsYXllci5jb3B5KGxldmVsQ29weSk7XG4gICAgICBsZXZlbENvcHkubGF5ZXJzLnB1c2goY29weSk7XG4gICAgICBsZXZlbENvcHkubGF5ZXJCeU5hbWVbY29weS5uYW1lXSA9IGNvcHk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZW50aXR5IG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgIGNvbnN0IGNvcHk6IE1hcEVudGl0eSA9IGVudGl0eS5jb3B5KGxldmVsQ29weSk7XG4gICAgICBsZXZlbENvcHkuZW50aXRpZXMucHVzaChjb3B5KTtcbiAgICB9XG4gICAgcmV0dXJuIGxldmVsQ29weTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tIFwiLi4vUmVzb3VyY2VcIjtcbmltcG9ydCB7IE1hcExldmVsIH0gZnJvbSBcIi4vTWFwTGV2ZWxcIjtcblxuZXhwb3J0IGNsYXNzIE1hcFdvcmxkIHtcbiAgbGV2ZWxzOiBSZWNvcmQ8c3RyaW5nLCBNYXBMZXZlbD4gPSB7fTtcbiAgZ3JpZFNpemU6IG51bWJlciA9IDA7XG4gIHRpbGVzZXRTY2FubGluZTogbnVtYmVyID0gMDtcbiAgdGlsZXNldFNpemU6IG51bWJlciA9IDA7XG4gIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG59IiwiLy8gT3B0aW9uc1xuY29uc3QgVVNFXzNYX09SSUdJTkFMX0lNUExFTUVOVEFUSU9OID0gZmFsc2U7XG5cbmNvbnN0XG4gIFJFRE1BU0sgICA9IDB4MDAwMDAwRkYsIC8vICZNQVNLXHQ+PjBcbiAgR1JFRU5NQVNLID0gMHgwMDAwRkYwMCwgLy8gJk1BU0tcdD4+OFxuICBCTFVFTUFTSyAgPSAweDAwRkYwMDAwLCAvLyAmTUFTS1x0Pj4xNlxuICBBTFBIQU1BU0sgPSAweEZGMDAwMDAwLCAvLyAmTUFTS1x0Pj4yNFxuICBUSFJFU0hIT0xEX1kgPSA0OCxcbiAgVEhSRVNISE9MRF9VID0gNyxcbiAgVEhSRVNISE9MRF9WID0gNjtcblxuLy8gQ29udmVydCBhbiBBUkdCIGJ5dGUgdG8gWVVWXG5mdW5jdGlvbiBnZXRZdXYocCkge1xuICBjb25zdFxuICAgIHIgPSAocCAmIFJFRE1BU0spLFxuICAgIGcgPSAocCAmIEdSRUVOTUFTSykgPj4gOCxcbiAgICBiID0gKHAgJiBCTFVFTUFTSykgPj4gMTYsXG4gICAgeSA9IHIgKiAuMjk5MDAwICsgZyAqIC41ODcwMDAgKyBiICogLjExNDAwMCxcbiAgICB1ID0gciAqICAtIC4xNjg3MzYgKyBnICogIC0gLjMzMTI2NCArIGIgKiAuNTAwMDAwLFxuICAgIHYgPSByICogLjUwMDAwMCArIGcgKiAgLSAuNDE4Njg4ICsgYiAqICAtIC4wODEzMTI7XG4gIHJldHVybiBbeSwgdSwgdl07XG59XG5cbmZ1bmN0aW9uIHl1dkRpZmZlcmVuY2UoQSwgQiwgc2NhbGVBbHBoYSkge1xuICBjb25zdFxuICAgIGFscGhhQSA9ICgoQSAmIEFMUEhBTUFTSykgPj4gMjQpICYgMHhmZixcbiAgICBhbHBoYUIgPSAoKEIgJiBBTFBIQU1BU0spID4+IDI0KSAmIDB4ZmY7XG5cbiAgaWYgKGFscGhhQSA9PT0gMCAmJiBhbHBoYUIgPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmICghc2NhbGVBbHBoYSAmJiAoYWxwaGFBIDwgMjU1IHx8IGFscGhhQiA8IDI1NSkpIHtcbiAgICAvLyBWZXJ5IGxhcmdlIHZhbHVlIG5vdCBhdHRhaW5hYmxlIGJ5IHRoZSB0aHJlc2hvbGRzXG4gICAgcmV0dXJuIDEwMDAwMDA7XG4gIH1cbiBcbiAgaWYgKGFscGhhQSA9PT0gMCB8fCBhbHBoYUIgPT09IDApIHtcbiAgICAvLyBWZXJ5IGxhcmdlIHZhbHVlIG5vdCBhdHRhaW5hYmxlIGJ5IHRoZSB0aHJlc2hvbGRzXG4gICAgcmV0dXJuIDEwMDAwMDA7XG4gIH1cblxuICBjb25zdFxuICAgIHl1dkEgPSBnZXRZdXYoQSksXG4gICAgeXV2QiA9IGdldFl1dihCKTtcblxuICAvKkFkZCBIUXggZmlsdGVycyB0aHJlc2hvbGQgJiByZXR1cm4qL1xuICByZXR1cm4gTWF0aC5hYnMoeXV2QVswXSAtIHl1dkJbMF0pICogVEhSRVNISE9MRF9ZXG4gICAgICAgKyBNYXRoLmFicyh5dXZBWzFdIC0geXV2QlsxXSkgKiBUSFJFU0hIT0xEX1VcbiAgICAgICArIE1hdGguYWJzKHl1dkFbMl0gLSB5dXZCWzJdKSAqIFRIUkVTSEhPTERfVjtcbn1cblxuZnVuY3Rpb24gaXNFcXVhbChBLCBCLCBzY2FsZUFscGhhKSB7XG4gIGNvbnN0XG4gICAgYWxwaGFBID0gKChBICYgQUxQSEFNQVNLKSA+PiAyNCkgJiAweGZmLFxuICAgIGFscGhhQiA9ICgoQiAmIEFMUEhBTUFTSykgPj4gMjQpICYgMHhmZjtcblxuICBpZiAoYWxwaGFBID09PSAwICYmIGFscGhhQiA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCFzY2FsZUFscGhhICYmIChhbHBoYUEgPCAyNTUgfHwgYWxwaGFCIDwgMjU1KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhbHBoYUEgPT09IDAgfHwgYWxwaGFCID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3RcbiAgICB5dXZBID0gZ2V0WXV2KEEpLFxuICAgIHl1dkIgPSBnZXRZdXYoQik7XG5cbiAgaWYgKE1hdGguYWJzKHl1dkFbMF0gLSB5dXZCWzBdKSA+IFRIUkVTSEhPTERfWSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoTWF0aC5hYnMoeXV2QVsxXSAtIHl1dkJbMV0pID4gVEhSRVNISE9MRF9VKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChNYXRoLmFicyh5dXZBWzJdIC0geXV2QlsyXSkgPiBUSFJFU0hIT0xEX1YpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcGl4ZWxJbnRlcnBvbGF0ZShBLCBCLCBxMSwgcTIpIHtcbiAgY29uc3RcbiAgICBhbHBoYUEgPSAoKEEgJiBBTFBIQU1BU0spID4+IDI0KSAmIDB4ZmYsXG4gICAgYWxwaGFCID0gKChCICYgQUxQSEFNQVNLKSA+PiAyNCkgJiAweGZmO1xuXG4gIC8qRXh0cmFjdCBlYWNoIHZhbHVlIGZyb20gMzJiaXQgVWludCAmIGJsZW5kIGNvbG9ycyB0b2dldGhlciovXG4gIGxldCByLCBnLCBiLCBhO1xuXG4gIGlmIChhbHBoYUEgPT09IDApIHtcbiAgICByID0gQiAmIFJFRE1BU0s7XG4gICAgZyA9IChCICYgR1JFRU5NQVNLKSA+PiA4O1xuICAgIGIgPSAoQiAmIEJMVUVNQVNLKSA+PiAxNjtcbiAgfSBlbHNlIGlmIChhbHBoYUIgPT09IDApIHtcbiAgICByID0gQSAmIFJFRE1BU0s7XG4gICAgZyA9IChBICYgR1JFRU5NQVNLKSA+PiA4O1xuICAgIGIgPSAoQSAmIEJMVUVNQVNLKSA+PiAxNjtcbiAgfSBlbHNlIHtcbiAgICByID0gKHEyICogKEIgJiBSRURNQVNLKSArIHExICogKEEgJiBSRURNQVNLKSkgLyAocTEgKyBxMik7XG4gICAgZyA9IChxMiAqICgoQiAmIEdSRUVOTUFTSykgPj4gOCkgKyBxMSAqICgoQSAmIEdSRUVOTUFTSykgPj4gOCkpIC8gKHExICsgcTIpO1xuICAgIGIgPSAocTIgKiAoKEIgJiBCTFVFTUFTSykgPj4gMTYpICsgcTEgKiAoKEEgJiBCTFVFTUFTSykgPj4gMTYpKSAvIChxMSArIHEyKTtcbiAgfVxuICBhID0gKHEyICogYWxwaGFCICsgcTEgKiBhbHBoYUEpIC8gKHExICsgcTIpO1xuICAvKlRoZSBiaXQgaGFjayAnfn4nIGlzIHVzZWQgdG8gZmxvb3IgdGhlIHZhbHVlcyBsaWtlIE1hdGguZmxvb3IsIGJ1dCBmYXN0ZXIqL1xuICByZXR1cm4gKCh+fnIpIHwgKCh+fmcpIDw8IDgpIHwgKCh+fmIpIDw8IDE2KSB8ICgofn5hKSA8PCAyNCkpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGVkUG9pbnRzKG9yaVBpeGVsVmlldywgb3JpWCwgb3JpWSwgb3JpVywgb3JpSCkge1xuICBsZXQgeG0xID0gb3JpWCAtIDE7XG4gIGlmICh4bTEgPCAwKSB7XG4gICAgeG0xID0gMDtcbiAgfVxuICBsZXQgeG0yID0gb3JpWCAtIDI7XG4gIGlmICh4bTIgPCAwKSB7XG4gICAgeG0yID0gMDtcbiAgfVxuICBsZXQgeHAxID0gb3JpWCArIDE7XG4gIGlmICh4cDEgPj0gb3JpVykge1xuICAgIHhwMSA9IG9yaVcgLSAxO1xuICB9XG4gIGxldCB4cDIgPSBvcmlYICsgMjtcbiAgaWYgKHhwMiA+PSBvcmlXKSB7XG4gICAgeHAyID0gb3JpVyAtIDE7XG4gIH1cbiAgbGV0IHltMSA9IG9yaVkgLSAxO1xuICBpZiAoeW0xIDwgMCkge1xuICAgIHltMSA9IDA7XG4gIH1cbiAgbGV0IHltMiA9IG9yaVkgLSAyO1xuICBpZiAoeW0yIDwgMCkge1xuICAgIHltMiA9IDA7XG4gIH1cbiAgbGV0IHlwMSA9IG9yaVkgKyAxO1xuICBpZiAoeXAxID49IG9yaUgpIHtcbiAgICB5cDEgPSBvcmlIIC0gMTtcbiAgfVxuICBsZXQgeXAyID0gb3JpWSArIDI7XG4gIGlmICh5cDIgPj0gb3JpSCkge1xuICAgIHlwMiA9IG9yaUggLSAxO1xuICB9XG5cbiAgcmV0dXJuIFtcbiAgICBvcmlQaXhlbFZpZXdbeG0xICsgeW0yICogb3JpV10sICAvKiBhMSAqL1xuICAgIG9yaVBpeGVsVmlld1tvcmlYICsgeW0yICogb3JpV10sIC8qIGIxICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMSArIHltMiAqIG9yaVddLCAgLyogYzEgKi9cblxuICAgIG9yaVBpeGVsVmlld1t4bTIgKyB5bTEgKiBvcmlXXSwgIC8qIGEwICovXG4gICAgb3JpUGl4ZWxWaWV3W3htMSArIHltMSAqIG9yaVddLCAgLyogcGEgKi9cbiAgICBvcmlQaXhlbFZpZXdbb3JpWCArIHltMSAqIG9yaVddLCAvKiBwYiAqL1xuICAgIG9yaVBpeGVsVmlld1t4cDEgKyB5bTEgKiBvcmlXXSwgIC8qIHBjICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMiArIHltMSAqIG9yaVddLCAgLyogYzQgKi9cblxuICAgIG9yaVBpeGVsVmlld1t4bTIgKyBvcmlZICogb3JpV10sIC8qIGQwICovXG4gICAgb3JpUGl4ZWxWaWV3W3htMSArIG9yaVkgKiBvcmlXXSwgLyogcGQgKi9cbiAgICBvcmlQaXhlbFZpZXdbb3JpWCArIG9yaVkgKiBvcmlXXSwvKiBwZSAqL1xuICAgIG9yaVBpeGVsVmlld1t4cDEgKyBvcmlZICogb3JpV10sIC8qIHBmICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMiArIG9yaVkgKiBvcmlXXSwgLyogZjQgKi9cblxuICAgIG9yaVBpeGVsVmlld1t4bTIgKyB5cDEgKiBvcmlXXSwgIC8qIGcwICovXG4gICAgb3JpUGl4ZWxWaWV3W3htMSArIHlwMSAqIG9yaVddLCAgLyogcGcgKi9cbiAgICBvcmlQaXhlbFZpZXdbb3JpWCArIHlwMSAqIG9yaVddLCAvKiBwaCAqL1xuICAgIG9yaVBpeGVsVmlld1t4cDEgKyB5cDEgKiBvcmlXXSwgIC8qIHBpICovXG4gICAgb3JpUGl4ZWxWaWV3W3hwMiArIHlwMSAqIG9yaVddLCAgLyogaTQgKi9cblxuICAgIG9yaVBpeGVsVmlld1t4bTEgKyB5cDIgKiBvcmlXXSwgIC8qIGc1ICovXG4gICAgb3JpUGl4ZWxWaWV3W29yaVggKyB5cDIgKiBvcmlXXSwgLyogaDUgKi9cbiAgICBvcmlQaXhlbFZpZXdbeHAxICsgeXAyICogb3JpV10gICAvKiBpNSAqL1xuICBdO1xufVxuXG4vLyBUaGlzIGlzIHRoZSBYQlIyeCBieSBIeWxsaWFuIChzZWUgaHR0cDovL2JvYXJkLmJ5dXUub3JnL3ZpZXd0b3BpYy5waHA/Zj0xMCZ0PTIyNDgpXG5mdW5jdGlvbiBjb21wdXRlWGJyMngob3JpUGl4ZWxWaWV3LCBvcmlYLCBvcmlZLCBvcmlXLCBvcmlILCBkc3RQaXhlbFZpZXcsIGRzdFgsIGRzdFksIGRzdFcsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKSB7XG4gIGNvbnN0IHJlbGF0ZWRQb2ludHMgPSBnZXRSZWxhdGVkUG9pbnRzKG9yaVBpeGVsVmlldywgb3JpWCwgb3JpWSwgb3JpVywgb3JpSCk7XG4gIGNvbnN0XG4gICAgW2ExLFxuICAgICBiMSxcbiAgICAgYzEsXG5cdCBhMCxcbiAgICAgcGEsXG4gICAgIHBiLFxuICAgICBwYyxcbiAgICAgYzQsXG4gICAgIGQwLFxuICAgICBwZCxcbiAgICAgcGUsXG4gICAgIHBmLFxuICAgICBmNCxcbiAgICAgZzAsXG4gICAgIHBnLFxuICAgICBwaCxcbiAgICAgcGksXG4gICAgIGk0LFxuICAgICBnNSxcbiAgICAgaDUsXG4gICAgIGk1XSA9IHJlbGF0ZWRQb2ludHM7XG4gIGxldCBlMCwgZTEsIGUyLCBlMztcbiAgZTAgPSBlMSA9IGUyID0gZTMgPSBwZTtcblxuICBbZTEsIGUyLCBlM10gPSBrZXJuZWwyWHY1KHBlLCBwaSwgcGgsIHBmLCBwZywgcGMsIHBkLCBwYiwgZjQsIGk0LCBoNSwgaTUsIGUxLCBlMiwgZTMsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2UwLCBlMywgZTFdID0ga2VybmVsMlh2NShwZSwgcGMsIHBmLCBwYiwgcGksIHBhLCBwaCwgcGQsIGIxLCBjMSwgZjQsIGM0LCBlMCwgZTMsIGUxLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSk7XG4gIFtlMiwgZTEsIGUwXSA9IGtlcm5lbDJYdjUocGUsIHBhLCBwYiwgcGQsIHBjLCBwZywgcGYsIHBoLCBkMCwgYTAsIGIxLCBhMSwgZTIsIGUxLCBlMCwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuICBbZTMsIGUwLCBlMl0gPSBrZXJuZWwyWHY1KHBlLCBwZywgcGQsIHBoLCBwYSwgcGksIHBiLCBwZiwgaDUsIGc1LCBkMCwgZzAsIGUzLCBlMCwgZTIsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcblxuICBkc3RQaXhlbFZpZXdbZHN0WCArIGRzdFkgKiBkc3RXXSA9IGUwO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyBkc3RZICogZHN0V10gPSBlMTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAoZHN0WSArIDEpICogZHN0V10gPSBlMjtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAxICsgKGRzdFkgKyAxKSAqIGRzdFddID0gZTM7ICBcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVhicjN4KG9yaVBpeGVsVmlldywgb3JpWCwgb3JpWSwgb3JpVywgb3JpSCwgZHN0UGl4ZWxWaWV3LCBkc3RYLCBkc3RZLCBkc3RXLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSkge1xuICBjb25zdCByZWxhdGVkUG9pbnRzID0gZ2V0UmVsYXRlZFBvaW50cyhvcmlQaXhlbFZpZXcsIG9yaVgsIG9yaVksIG9yaVcsIG9yaUgpO1xuICBjb25zdFxuICAgIFthMSxcbiAgICAgYjEsXG4gICAgIGMxLFxuXHQgYTAsXG4gICAgIHBhLFxuICAgICBwYixcbiAgICAgcGMsXG4gICAgIGM0LFxuICAgICBkMCxcbiAgICAgcGQsXG4gICAgIHBlLFxuICAgICBwZixcbiAgICAgZjQsXG4gICAgIGcwLFxuICAgICBwZyxcbiAgICAgcGgsXG4gICAgIHBpLFxuICAgICBpNCxcbiAgICAgZzUsXG4gICAgIGg1LFxuICAgICBpNV0gPSByZWxhdGVkUG9pbnRzO1xuICBsZXQgZTAsIGUxLCBlMiwgZTMsIGU0LCBlNSwgZTYsIGU3LCBlODtcbiAgZTAgPSBlMSA9IGUyID0gZTMgPSBlNCA9IGU1ID0gZTYgPSBlNyA9IGU4ID0gcGU7XG5cbiAgW2UyLCBlNSwgZTYsIGU3LCBlOF0gPSBrZXJuZWwzWChwZSwgcGksIHBoLCBwZiwgcGcsIHBjLCBwZCwgcGIsIGY0LCBpNCwgaDUsIGk1LCBlMiwgZTUsIGU2LCBlNywgZTgsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2UwLCBlMSwgZTgsIGU1LCBlMl0gPSBrZXJuZWwzWChwZSwgcGMsIHBmLCBwYiwgcGksIHBhLCBwaCwgcGQsIGIxLCBjMSwgZjQsIGM0LCBlMCwgZTEsIGU4LCBlNSwgZTIsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2U2LCBlMywgZTIsIGUxLCBlMF0gPSBrZXJuZWwzWChwZSwgcGEsIHBiLCBwZCwgcGMsIHBnLCBwZiwgcGgsIGQwLCBhMCwgYjEsIGExLCBlNiwgZTMsIGUyLCBlMSwgZTAsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2U4LCBlNywgZTAsIGUzLCBlNl0gPSBrZXJuZWwzWChwZSwgcGcsIHBkLCBwaCwgcGEsIHBpLCBwYiwgcGYsIGg1LCBnNSwgZDAsIGcwLCBlOCwgZTcsIGUwLCBlMywgZTYsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcblxuICBkc3RQaXhlbFZpZXdbZHN0WCArIGRzdFkgKiBkc3RXXSA9IGUwO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyBkc3RZICogZHN0V10gPSBlMTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgZHN0WSAqIGRzdFddID0gZTI7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgKGRzdFkgKyAxKSAqIGRzdFddID0gZTM7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMSArIChkc3RZICsgMSkgKiBkc3RXXSA9IGU0O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDIgKyAoZHN0WSArIDEpICogZHN0V10gPSBlNTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAoZHN0WSArIDIpICogZHN0V10gPSBlNjtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAxICsgKGRzdFkgKyAyKSAqIGRzdFddID0gZTc7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMiArIChkc3RZICsgMikgKiBkc3RXXSA9IGU4O1xufVxuXG5cbmZ1bmN0aW9uIGNvbXB1dGVYYnI0eChvcmlQaXhlbFZpZXcsIG9yaVgsIG9yaVksIG9yaVcsIG9yaUgsIGRzdFBpeGVsVmlldywgZHN0WCwgZHN0WSwgZHN0VywgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpIHtcbiAgY29uc3QgcmVsYXRlZFBvaW50cyA9IGdldFJlbGF0ZWRQb2ludHMob3JpUGl4ZWxWaWV3LCBvcmlYLCBvcmlZLCBvcmlXLCBvcmlIKTtcbiAgY29uc3RcbiAgICBbYTEsXG4gICAgIGIxLFxuICAgICBjMSxcblx0IGEwLFxuICAgICBwYSxcbiAgICAgcGIsXG4gICAgIHBjLFxuICAgICBjNCxcbiAgICAgZDAsXG4gICAgIHBkLFxuICAgICBwZSxcbiAgICAgcGYsXG4gICAgIGY0LFxuICAgICBnMCxcbiAgICAgcGcsXG4gICAgIHBoLFxuICAgICBwaSxcbiAgICAgaTQsXG4gICAgIGc1LFxuICAgICBoNSxcbiAgICAgaTVdID0gcmVsYXRlZFBvaW50cztcbiAgbGV0IGUwLCBlMSwgZTIsIGUzLCBlNCwgZTUsIGU2LCBlNywgZTgsIGU5LCBlYSwgZWIsIGVjLCBlZCwgZWUsIGVmO1xuICBlMCA9IGUxID0gZTIgPSBlMyA9IGU0ID0gZTUgPSBlNiA9IGU3ID0gZTggPSBlOSA9IGVhID0gZWIgPSBlYyA9IGVkID0gZWUgPSBlZiA9IHBlO1xuXG4gIFtlZiwgZWUsIGViLCBlMywgZTcsIGVhLCBlZCwgZWNdID0ga2VybmVsNFh2MihwZSwgcGksIHBoLCBwZiwgcGcsIHBjLCBwZCwgcGIsIGY0LCBpNCwgaDUsIGk1LCBlZiwgZWUsIGViLCBlMywgZTcsIGVhLCBlZCwgZWMsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgW2UzLCBlNywgZTIsIGUwLCBlMSwgZTYsIGViLCBlZl0gPSBrZXJuZWw0WHYyKHBlLCBwYywgcGYsIHBiLCBwaSwgcGEsIHBoLCBwZCwgYjEsIGMxLCBmNCwgYzQsIGUzLCBlNywgZTIsIGUwLCBlMSwgZTYsIGViLCBlZiwgYmxlbmRDb2xvcnMsIHNjYWxlQWxwaGEpO1xuICBbZTAsIGUxLCBlNCwgZWMsIGU4LCBlNSwgZTIsIGUzXSA9IGtlcm5lbDRYdjIocGUsIHBhLCBwYiwgcGQsIHBjLCBwZywgcGYsIHBoLCBkMCwgYTAsIGIxLCBhMSwgZTAsIGUxLCBlNCwgZWMsIGU4LCBlNSwgZTIsIGUzLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSk7XG4gIFtlYywgZTgsIGVkLCBlZiwgZWUsIGU5LCBlNCwgZTBdID0ga2VybmVsNFh2MihwZSwgcGcsIHBkLCBwaCwgcGEsIHBpLCBwYiwgcGYsIGg1LCBnNSwgZDAsIGcwLCBlYywgZTgsIGVkLCBlZiwgZWUsIGU5LCBlNCwgZTAsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcblxuICBkc3RQaXhlbFZpZXdbZHN0WCArIGRzdFkgKiBkc3RXXSA9IGUwO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyBkc3RZICogZHN0V10gPSBlMTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgZHN0WSAqIGRzdFddID0gZTI7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMyArIGRzdFkgKiBkc3RXXSA9IGUzO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIChkc3RZICsgMSkgKiBkc3RXXSA9IGU0O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyAoZHN0WSArIDEpICogZHN0V10gPSBlNTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgKGRzdFkgKyAxKSAqIGRzdFddID0gZTY7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMyArIChkc3RZICsgMSkgKiBkc3RXXSA9IGU3O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIChkc3RZICsgMikgKiBkc3RXXSA9IGU4O1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyAoZHN0WSArIDIpICogZHN0V10gPSBlOTtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgKGRzdFkgKyAyKSAqIGRzdFddID0gZWE7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMyArIChkc3RZICsgMikgKiBkc3RXXSA9IGViO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIChkc3RZICsgMykgKiBkc3RXXSA9IGVjO1xuICBkc3RQaXhlbFZpZXdbZHN0WCArIDEgKyAoZHN0WSArIDMpICogZHN0V10gPSBlZDtcbiAgZHN0UGl4ZWxWaWV3W2RzdFggKyAyICsgKGRzdFkgKyAzKSAqIGRzdFddID0gZWU7XG4gIGRzdFBpeGVsVmlld1tkc3RYICsgMyArIChkc3RZICsgMykgKiBkc3RXXSA9IGVmO1xufVxuXG5mdW5jdGlvbiBhbHBoYUJsZW5kMzJXKGRzdCwgc3JjLCBibGVuZENvbG9ycykge1xuICBpZiAoYmxlbmRDb2xvcnMpIHtcbiAgICByZXR1cm4gcGl4ZWxJbnRlcnBvbGF0ZShkc3QsIHNyYywgNywgMSk7XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuXG5mdW5jdGlvbiBhbHBoYUJsZW5kNjRXKGRzdCwgc3JjLCBibGVuZENvbG9ycykge1xuICBpZiAoYmxlbmRDb2xvcnMpIHtcbiAgICByZXR1cm4gcGl4ZWxJbnRlcnBvbGF0ZShkc3QsIHNyYywgMywgMSk7XG4gIH1cbiAgcmV0dXJuIGRzdDtcbn1cblxuZnVuY3Rpb24gYWxwaGFCbGVuZDEyOFcoZHN0LCBzcmMsIGJsZW5kQ29sb3JzKSB7XG4gIGlmIChibGVuZENvbG9ycykge1xuICAgIHJldHVybiBwaXhlbEludGVycG9sYXRlKGRzdCwgc3JjLCAxLCAxKTtcbiAgfVxuICByZXR1cm4gZHN0O1xufVxuXG5mdW5jdGlvbiBhbHBoYUJsZW5kMTkyVyhkc3QsIHNyYywgYmxlbmRDb2xvcnMpIHtcbiAgaWYgKGJsZW5kQ29sb3JzKSB7XG4gICAgcmV0dXJuIHBpeGVsSW50ZXJwb2xhdGUoZHN0LCBzcmMsIDEsIDMpO1xuICB9XG4gIHJldHVybiBzcmM7XG59XG5cbmZ1bmN0aW9uIGFscGhhQmxlbmQyMjRXKGRzdCwgc3JjLCBibGVuZENvbG9ycykge1xuICBpZiAoYmxlbmRDb2xvcnMpIHtcbiAgICByZXR1cm4gcGl4ZWxJbnRlcnBvbGF0ZShkc3QsIHNyYywgMSwgNyk7XG4gIH1cbiAgcmV0dXJuIHNyYztcbn1cblxuZnVuY3Rpb24gbGVmdFVwMl8yWChuMywgbjIsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICBjb25zdCBibGVuZGVkTjIgPSBhbHBoYUJsZW5kNjRXKG4yLCBwaXhlbCwgYmxlbmRDb2xvcnMpO1xuICByZXR1cm4gW1xuICAgIGFscGhhQmxlbmQyMjRXKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGJsZW5kZWROMixcbiAgICBibGVuZGVkTjJcbiAgXTtcbn1cblxuZnVuY3Rpb24gbGVmdDJfMlgobjMsIG4yLCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgcmV0dXJuIFtcbiAgICBhbHBoYUJsZW5kMTkyVyhuMywgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcbiAgICBhbHBoYUJsZW5kNjRXKG4yLCBwaXhlbCwgYmxlbmRDb2xvcnMpXG4gIF07XG59XG5cbmZ1bmN0aW9uIHVwMl8yWChuMywgbjEsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICByZXR1cm4gW1xuICAgIGFscGhhQmxlbmQxOTJXKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQ2NFcobjEsIHBpeGVsLCBibGVuZENvbG9ycylcbiAgXTtcbn1cblxuZnVuY3Rpb24gZGlhXzJYKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgcmV0dXJuIGFscGhhQmxlbmQxMjhXKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpO1xufVxuXG5mdW5jdGlvbiBrZXJuZWwyWHY1KHBlLCBwaSwgcGgsIHBmLCBwZywgcGMsIHBkLCBwYiwgZjQsIGk0LCBoNSwgaTUsIG4xLCBuMiwgbjMsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKSB7XG4gIGxldCBleCA9IChwZSAhPSBwaCAmJiBwZSAhPSBwZik7XG4gIGlmICghZXgpIHtcbiAgICByZXR1cm4gW24xLCBuMiwgbjNdO1xuICB9XG4gIGxldFxuICAgIGUgPSAoeXV2RGlmZmVyZW5jZShwZSwgcGMsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwZSwgcGcsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwaSwgaDUsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwaSwgZjQsIHNjYWxlQWxwaGEpKSArICh5dXZEaWZmZXJlbmNlKHBoLCBwZikgPDwgMiksXG4gICAgaSA9ICh5dXZEaWZmZXJlbmNlKHBoLCBwZCwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBoLCBpNSwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBmLCBpNCwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBmLCBwYiwgc2NhbGVBbHBoYSkpICsgKHl1dkRpZmZlcmVuY2UocGUsIHBpLCBzY2FsZUFscGhhKSA8PCAyKSxcbiAgICBweCA9ICh5dXZEaWZmZXJlbmNlKHBlLCBwZiwgc2NhbGVBbHBoYSkgPD0geXV2RGlmZmVyZW5jZShwZSwgcGgsIHNjYWxlQWxwaGEpKSA/IHBmIDogcGg7XG5cbiAgaWYgKChlIDwgaSkgJiYgKCFpc0VxdWFsKHBmLCBwYiwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGgsIHBkLCBzY2FsZUFscGhhKSB8fCBpc0VxdWFsKHBlLCBwaSwgc2NhbGVBbHBoYSkgJiYgKCFpc0VxdWFsKHBmLCBpNCwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGgsIGk1LCBzY2FsZUFscGhhKSkgfHwgaXNFcXVhbChwZSwgcGcsIHNjYWxlQWxwaGEpIHx8IGlzRXF1YWwocGUsIHBjLCBzY2FsZUFscGhhKSkpIHtcbiAgICBsZXRcbiAgICAgIGtlID0geXV2RGlmZmVyZW5jZShwZiwgcGcsIHNjYWxlQWxwaGEpLFxuICAgICAga2kgPSB5dXZEaWZmZXJlbmNlKHBoLCBwYywgc2NhbGVBbHBoYSksXG4gICAgICBleDIgPSAocGUgIT0gcGMgJiYgcGIgIT0gcGMpLFxuICAgICAgZXgzID0gKHBlICE9IHBnICYmIHBkICE9IHBnKTtcbiAgICBpZiAoKChrZSA8PCAxKSA8PSBraSkgJiYgZXgzIHx8IChrZSA+PSAoa2kgPDwgMSkpICYmIGV4Mikge1xuICAgICAgaWYgKCgoa2UgPDwgMSkgPD0ga2kpICYmIGV4Mykge1xuICAgICAgICBsZXQgbGVmdE91dCA9IGxlZnQyXzJYKG4zLCBuMiwgcHgsIGJsZW5kQ29sb3JzKTtcbiAgICAgICAgbjMgPSBsZWZ0T3V0WzBdO1xuICAgICAgICBuMiA9IGxlZnRPdXRbMV07XG4gICAgICB9XG4gICAgICBpZiAoKGtlID49IChraSA8PCAxKSkgJiYgZXgyKSB7XG4gICAgICAgIGxldCB1cE91dCA9IHVwMl8yWChuMywgbjEsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgICAgIG4zID0gdXBPdXRbMF07XG4gICAgICAgIG4xID0gdXBPdXRbMV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG4zID0gZGlhXzJYKG4zLCBweCwgYmxlbmRDb2xvcnMpO1xuICAgIH1cblxuICB9IGVsc2UgaWYgKGUgPD0gaSkge1xuICAgIG4zID0gYWxwaGFCbGVuZDY0VyhuMywgcHgsIGJsZW5kQ29sb3JzKTtcbiAgfVxuICByZXR1cm4gW24xLCBuMiwgbjNdO1xufVxuXG5mdW5jdGlvbiBsZWZ0VXAyXzNYKG43LCBuNSwgbjYsIG4yLCBuOCwgcGl4ZWwsIGJsZW5kQ29sb3JzKSB7XG4gIGNvbnN0XG4gICAgYmxlbmRlZE43ID0gYWxwaGFCbGVuZDE5MlcobjcsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgYmxlbmRlZE42ID0gYWxwaGFCbGVuZDY0VyhuNiwgcGl4ZWwsIGJsZW5kQ29sb3JzKTtcbiAgcmV0dXJuIFtcbiAgICBibGVuZGVkTjcsXG4gICAgYmxlbmRlZE43LFxuICAgIGJsZW5kZWRONixcbiAgICBibGVuZGVkTjYsXG5cdHBpeGVsXG4gIF07XG59XG5cbmZ1bmN0aW9uIGxlZnQyXzNYKG43LCBuNSwgbjYsIG44LCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgcmV0dXJuIFtcbiAgICBhbHBoYUJsZW5kMTkyVyhuNywgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcbiAgICBhbHBoYUJsZW5kNjRXKG41LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQ2NFcobjYsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgcGl4ZWxcbiAgXTtcbn1cblxuZnVuY3Rpb24gdXAyXzNYKG41LCBuNywgbjIsIG44LCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgcmV0dXJuIFtcbiAgICBhbHBoYUJsZW5kMTkyVyhuNSwgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcbiAgICBhbHBoYUJsZW5kNjRXKG43LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQ2NFcobjIsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgcGl4ZWxcbiAgXTtcbn1cblxuZnVuY3Rpb24gZGlhXzNYKG44LCBuNSwgbjcsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICByZXR1cm4gW1xuICAgIGFscGhhQmxlbmQyMjRXKG44LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGFscGhhQmxlbmQzMlcobjUsIHBpeGVsLCBibGVuZENvbG9ycyksXG4gICAgYWxwaGFCbGVuZDMyVyhuNywgcGl4ZWwsIGJsZW5kQ29sb3JzKVxuICBdO1xufVxuXG5mdW5jdGlvbiBrZXJuZWwzWChwZSwgcGksIHBoLCBwZiwgcGcsIHBjLCBwZCwgcGIsIGY0LCBpNCwgaDUsIGk1LCBuMiwgbjUsIG42LCBuNywgbjgsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKSB7XG4gIGNvbnN0IGV4ID0gKHBlICE9IHBoICYmIHBlICE9IHBmKTtcbiAgaWYgKCFleCkge1xuICAgIHJldHVybiBbbjIsIG41LCBuNiwgbjcsIG44XTtcbiAgfVxuXG4gIGNvbnN0XG4gICAgZSA9ICh5dXZEaWZmZXJlbmNlKHBlLCBwYywgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBlLCBwZywgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBpLCBoNSwgc2NhbGVBbHBoYSkgKyB5dXZEaWZmZXJlbmNlKHBpLCBmNCwgc2NhbGVBbHBoYSkpICsgKHl1dkRpZmZlcmVuY2UocGgsIHBmLCBzY2FsZUFscGhhKSA8PCAyKSxcbiAgICBpID0gKHl1dkRpZmZlcmVuY2UocGgsIHBkLCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGgsIGk1LCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGYsIGk0LCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGYsIHBiLCBzY2FsZUFscGhhKSkgKyAoeXV2RGlmZmVyZW5jZShwZSwgcGksIHNjYWxlQWxwaGEpIDw8IDIpO1xuXG4gIGxldCBzdGF0ZTtcbiAgaWYgKFVTRV8zWF9PUklHSU5BTF9JTVBMRU1FTlRBVElPTikge1xuICAgIHN0YXRlID0gKChlIDwgaSkgJiYgKCFpc0VxdWFsKHBmLCBwYiwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGgsIHBkLCBzY2FsZUFscGhhKSB8fCBpc0VxdWFsKHBlLCBwaSwgc2NhbGVBbHBoYSkgJiYgKCFpc0VxdWFsKHBmLCBpNCwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGgsIGk1LCBzY2FsZUFscGhhKSkgfHwgaXNFcXVhbChwZSwgcGcsIHNjYWxlQWxwaGEpIHx8IGlzRXF1YWwocGUsIHBjLCBzY2FsZUFscGhhKSkpO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlID0gKChlIDwgaSkgJiYgKCFpc0VxdWFsKHBmLCBwYiwgc2NhbGVBbHBoYSkgJiYgIWlzRXF1YWwocGYsIHBjLCBzY2FsZUFscGhhKSB8fCAhaXNFcXVhbChwaCwgcGQsIHNjYWxlQWxwaGEpICYmICFpc0VxdWFsKHBoLCBwZywgc2NhbGVBbHBoYSkgfHwgaXNFcXVhbChwZSwgcGksIHNjYWxlQWxwaGEpICYmICghaXNFcXVhbChwZiwgZjQsIHNjYWxlQWxwaGEpICYmICFpc0VxdWFsKHBmLCBpNCwgc2NhbGVBbHBoYSkgfHwgIWlzRXF1YWwocGgsIGg1LCBzY2FsZUFscGhhKSAmJiAhaXNFcXVhbChwaCwgaTUsIHNjYWxlQWxwaGEpKSB8fCBpc0VxdWFsKHBlLCBwZywgc2NhbGVBbHBoYSkgfHwgaXNFcXVhbChwZSwgcGMsIHNjYWxlQWxwaGEpKSk7XG4gIH1cblxuICBpZiAoc3RhdGUpIHtcbiAgICBjb25zdFxuICAgICAga2UgPSB5dXZEaWZmZXJlbmNlKHBmLCBwZywgc2NhbGVBbHBoYSksXG4gICAgICBraSA9IHl1dkRpZmZlcmVuY2UocGgsIHBjLCBzY2FsZUFscGhhKSxcbiAgICAgIGV4MiA9IChwZSAhPSBwYyAmJiBwYiAhPSBwYyksXG4gICAgICBleDMgPSAocGUgIT0gcGcgJiYgcGQgIT0gcGcpLFxuICAgICAgcHggPSAoeXV2RGlmZmVyZW5jZShwZSwgcGYsIHNjYWxlQWxwaGEpIDw9IHl1dkRpZmZlcmVuY2UocGUsIHBoLCBzY2FsZUFscGhhKSkgPyBwZiA6IHBoO1xuICAgIGlmICgoKGtlIDw8IDEpIDw9IGtpKSAmJiBleDMgJiYgKGtlID49IChraSA8PCAxKSkgJiYgZXgyKSB7XG4gICAgICBbbjcsIG41LCBuNiwgbjIsIG44XSA9IGxlZnRVcDJfM1gobjcsIG41LCBuNiwgbjIsIG44LCBweCwgYmxlbmRDb2xvcnMpO1xuICAgIH0gZWxzZSBpZiAoKChrZSA8PCAxKSA8PSBraSkgJiYgZXgzKSB7XG4gICAgICBbbjcsIG41LCBuNiwgbjhdID0gbGVmdDJfM1gobjcsIG41LCBuNiwgbjgsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgfSBlbHNlIGlmICgoa2UgPj0gKGtpIDw8IDEpKSAmJiBleDIpIHtcbiAgICAgIFtuNSwgbjcsIG4yLCBuOF0gPSB1cDJfM1gobjUsIG43LCBuMiwgbjgsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFtuOCwgbjUsIG43XSA9IGRpYV8zWChuOCwgbjUsIG43LCBweCwgYmxlbmRDb2xvcnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChlIDw9IGkpIHtcbiAgICBuOCA9IGFscGhhQmxlbmQxMjhXKG44LCAoKHl1dkRpZmZlcmVuY2UocGUsIHBmLCBzY2FsZUFscGhhKSA8PSB5dXZEaWZmZXJlbmNlKHBlLCBwaCwgc2NhbGVBbHBoYSkpID8gcGYgOiBwaCksIGJsZW5kQ29sb3JzKTtcbiAgfVxuICByZXR1cm4gW24yLCBuNSwgbjYsIG43LCBuOF07XG59XG5cbi8vIDR4QlJcbmZ1bmN0aW9uIGxlZnRVcDIobjE1LCBuMTQsIG4xMSwgbjEzLCBuMTIsIG4xMCwgbjcsIG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpIHtcbiAgY29uc3RcbiAgICBibGVuZGVkTjEzID0gYWxwaGFCbGVuZDE5MlcobjEzLCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuICAgIGJsZW5kZWROMTIgPSBhbHBoYUJsZW5kNjRXKG4xMiwgcGl4ZWwsIGJsZW5kQ29sb3JzKTtcblxuICByZXR1cm4gW3BpeGVsLCBwaXhlbCwgcGl4ZWwsIGJsZW5kZWROMTIsIGJsZW5kZWROMTIsIGJsZW5kZWROMTIsIGJsZW5kZWROMTMsIG4zXTtcbn1cblxuZnVuY3Rpb24gbGVmdDIobjE1LCBuMTQsIG4xMSwgbjEzLCBuMTIsIG4xMCwgcGl4ZWwsIGJsZW5kQ29sb3JzKSB7XG4gIHJldHVybiBbXG4gICAgcGl4ZWwsXG5cdHBpeGVsLFxuXHRhbHBoYUJsZW5kMTkyVyhuMTEsIHBpeGVsLCBibGVuZENvbG9ycyksXG5cdGFscGhhQmxlbmQxOTJXKG4xMywgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcblx0YWxwaGFCbGVuZDY0VyhuMTIsIHBpeGVsLCBibGVuZENvbG9ycyksXG5cdGFscGhhQmxlbmQ2NFcobjEwLCBwaXhlbCwgYmxlbmRDb2xvcnMpXG4gIF07XG59XG5cbmZ1bmN0aW9uIHVwMihuMTUsIG4xNCwgbjExLCBuMywgbjcsIG4xMCwgcGl4ZWwsIGJsZW5kQ29sb3JzKSB7XG4gIHJldHVybiBbXG5cdHBpeGVsLFxuXHRhbHBoYUJsZW5kMTkyVyhuMTQsIHBpeGVsLCBibGVuZENvbG9ycyksXG5cdHBpeGVsLFxuXHRhbHBoYUJsZW5kNjRXKG4zLCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuXHRhbHBoYUJsZW5kMTkyVyhuNywgcGl4ZWwsIGJsZW5kQ29sb3JzKSxcblx0YWxwaGFCbGVuZDY0VyhuMTAsIHBpeGVsLCBibGVuZENvbG9ycylcbiAgXTtcbn1cblxuZnVuY3Rpb24gZGlhKG4xNSwgbjE0LCBuMTEsIHBpeGVsLCBibGVuZENvbG9ycykge1xuICByZXR1cm4gW1xuXHRwaXhlbCxcblx0YWxwaGFCbGVuZDEyOFcobjE0LCBwaXhlbCwgYmxlbmRDb2xvcnMpLFxuXHRhbHBoYUJsZW5kMTI4VyhuMTEsIHBpeGVsLCBibGVuZENvbG9ycylcbiAgXTtcbn1cblxuZnVuY3Rpb24ga2VybmVsNFh2MihwZSwgcGksIHBoLCBwZiwgcGcsIHBjLCBwZCwgcGIsIGY0LCBpNCwgaDUsIGk1LCBuMTUsIG4xNCwgbjExLCBuMywgbjcsIG4xMCwgbjEzLCBuMTIsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKSB7XG4gIHZhciBleCA9IChwZSAhPSBwaCAmJiBwZSAhPSBwZik7XG4gIGlmICghZXgpIHtcbiAgICByZXR1cm4gW24xNSwgbjE0LCBuMTEsIG4zLCBuNywgbjEwLCBuMTMsIG4xMl07XG4gIH1cbiAgY29uc3RcbiAgICBlID0gKHl1dkRpZmZlcmVuY2UocGUsIHBjLCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGUsIHBnLCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGksIGg1LCBzY2FsZUFscGhhKSArIHl1dkRpZmZlcmVuY2UocGksIGY0LCBzY2FsZUFscGhhKSkgKyAoeXV2RGlmZmVyZW5jZShwaCwgcGYsIHNjYWxlQWxwaGEpIDw8IDIpLFxuICAgIGkgPSAoeXV2RGlmZmVyZW5jZShwaCwgcGQsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwaCwgaTUsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwZiwgaTQsIHNjYWxlQWxwaGEpICsgeXV2RGlmZmVyZW5jZShwZiwgcGIsIHNjYWxlQWxwaGEpKSArICh5dXZEaWZmZXJlbmNlKHBlLCBwaSwgc2NhbGVBbHBoYSkgPDwgMiksXG4gICAgcHggPSAoeXV2RGlmZmVyZW5jZShwZSwgcGYsIHNjYWxlQWxwaGEpIDw9IHl1dkRpZmZlcmVuY2UocGUsIHBoLCBzY2FsZUFscGhhKSkgPyBwZiA6IHBoO1xuICBpZiAoKGUgPCBpKSAmJiAoIWlzRXF1YWwocGYsIHBiLCBzY2FsZUFscGhhKSAmJiAhaXNFcXVhbChwaCwgcGQsIHNjYWxlQWxwaGEpIHx8IGlzRXF1YWwocGUsIHBpLCBzY2FsZUFscGhhKSAmJiAoIWlzRXF1YWwocGYsIGk0LCBzY2FsZUFscGhhKSAmJiAhaXNFcXVhbChwaCwgaTUsIHNjYWxlQWxwaGEpKSB8fCBpc0VxdWFsKHBlLCBwZywgc2NhbGVBbHBoYSkgfHwgaXNFcXVhbChwZSwgcGMsIHNjYWxlQWxwaGEpKSkge1xuICAgIGNvbnN0XG4gICAgICBrZSA9IHl1dkRpZmZlcmVuY2UocGYsIHBnLCBzY2FsZUFscGhhKSxcbiAgICAgIGtpID0geXV2RGlmZmVyZW5jZShwaCwgcGMsIHNjYWxlQWxwaGEpLFxuICAgICAgZXgyID0gKHBlICE9IHBjICYmIHBiICE9IHBjKSxcbiAgICAgIGV4MyA9IChwZSAhPSBwZyAmJiBwZCAhPSBwZyk7XG4gICAgaWYgKCgoa2UgPDwgMSkgPD0ga2kpICYmIGV4MyB8fCAoa2UgPj0gKGtpIDw8IDEpKSAmJiBleDIpIHtcbiAgICAgIGlmICgoKGtlIDw8IDEpIDw9IGtpKSAmJiBleDMpIHtcbiAgICAgICAgW24xNSwgbjE0LCBuMTEsIG4xMywgbjEyLCBuMTBdID0gbGVmdDIobjE1LCBuMTQsIG4xMSwgbjEzLCBuMTIsIG4xMCwgcHgsIGJsZW5kQ29sb3JzKTtcbiAgICAgIH1cbiAgICAgIGlmICgoa2UgPj0gKGtpIDw8IDEpKSAmJiBleDIpIHtcbiAgICAgICAgW24xNSwgbjE0LCBuMTEsIG4zLCBuNywgbjEwXSA9IHVwMihuMTUsIG4xNCwgbjExLCBuMywgbjcsIG4xMCwgcHgsIGJsZW5kQ29sb3JzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgW24xNSwgbjE0LCBuMTFdID0gZGlhKG4xNSwgbjE0LCBuMTEsIHB4LCBibGVuZENvbG9ycyk7XG4gICAgfVxuXG4gIH0gZWxzZSBpZiAoZSA8PSBpKSB7XG4gICAgbjE1ID0gYWxwaGFCbGVuZDEyOFcobjE1LCBweCwgYmxlbmRDb2xvcnMpO1xuICB9XG5cbiAgcmV0dXJuIFtuMTUsIG4xNCwgbjExLCBuMywgbjcsIG4xMCwgbjEzLCBuMTJdO1xufVxuXG5mdW5jdGlvbiBwYXJzZU9wdGlvbnMocmF3T3B0cykge1xuICBsZXRcbiAgICBibGVuZENvbG9ycyA9IHRydWUsXG4gICAgc2NhbGVBbHBoYSA9IGZhbHNlO1xuXG4gIGlmIChyYXdPcHRzKSB7XG5cdGlmIChyYXdPcHRzLmJsZW5kQ29sb3JzID09PSBmYWxzZSkge1xuXHQgIGJsZW5kQ29sb3JzID0gZmFsc2U7XG5cdH1cblx0XHRcblx0aWYgKHJhd09wdHMuc2NhbGVBbHBoYSA9PT0gdHJ1ZSkge1xuICAgICAgc2NhbGVBbHBoYSA9IHRydWU7XG4gICAgfVxuICB9XG5cdFxuICByZXR1cm4ge2JsZW5kQ29sb3JzLCBzY2FsZUFscGhhfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhicjJ4KHBpeGVsQXJyYXksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgY29uc3Qge2JsZW5kQ29sb3JzLCBzY2FsZUFscGhhfSA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKTtcbiAgY29uc3Qgc2NhbGVkUGl4ZWxBcnJheSA9IG5ldyBVaW50MzJBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xuICBmb3IgKGxldCBjID0gMDsgYyA8IHdpZHRoOyBjKyspIHtcbiAgICBmb3IgKGxldCBkID0gMDsgZCA8IGhlaWdodDsgZCsrKSB7XG4gICAgICBjb21wdXRlWGJyMngocGl4ZWxBcnJheSwgYywgZCwgd2lkdGgsIGhlaWdodCwgc2NhbGVkUGl4ZWxBcnJheSwgYyAqIDIsIGQgKiAyLCB3aWR0aCAqIDIsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNjYWxlZFBpeGVsQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4YnIzeChwaXhlbEFycmF5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gIGNvbnN0IHtibGVuZENvbG9ycywgc2NhbGVBbHBoYX0gPSBwYXJzZU9wdGlvbnMob3B0aW9ucyk7XG4gIGNvbnN0IHNjYWxlZFBpeGVsQXJyYXkgPSBuZXcgVWludDMyQXJyYXkod2lkdGggKiBoZWlnaHQgKiA5KTtcbiAgZm9yIChsZXQgYyA9IDA7IGMgPCB3aWR0aDsgYysrKSB7XG4gICAgZm9yIChsZXQgZCA9IDA7IGQgPCBoZWlnaHQ7IGQrKykge1xuICAgICAgY29tcHV0ZVhicjN4KHBpeGVsQXJyYXksIGMsIGQsIHdpZHRoLCBoZWlnaHQsIHNjYWxlZFBpeGVsQXJyYXksIGMgKiAzLCBkICogMywgd2lkdGggKiAzLCBibGVuZENvbG9ycywgc2NhbGVBbHBoYSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzY2FsZWRQaXhlbEFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24geGJyNHgocGl4ZWxBcnJheSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICBjb25zdCB7YmxlbmRDb2xvcnMsIHNjYWxlQWxwaGF9ID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpO1xuICBjb25zdCBzY2FsZWRQaXhlbEFycmF5ID0gbmV3IFVpbnQzMkFycmF5KHdpZHRoICogaGVpZ2h0ICogMTYpO1xuICBmb3IgKGxldCBjID0gMDsgYyA8IHdpZHRoOyBjKyspIHtcbiAgICBmb3IgKGxldCBkID0gMDsgZCA8IGhlaWdodDsgZCsrKSB7XG4gICAgICBjb21wdXRlWGJyNHgocGl4ZWxBcnJheSwgYywgZCwgd2lkdGgsIGhlaWdodCwgc2NhbGVkUGl4ZWxBcnJheSwgYyAqIDQsIGQgKiA0LCB3aWR0aCAqIDQsIGJsZW5kQ29sb3JzLCBzY2FsZUFscGhhKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNjYWxlZFBpeGVsQXJyYXk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7c3RhcnRHYW1lLCBpc011c2ljT24sIGlzU291bmRPbiwgc2V0TXVzaWNPbiwgc2V0U291bmRPbiwgc2V0UHJlc2NhbGVUaWxlc2V0cywgUmVuZGVyZXIgfSBmcm9tIFwiLi9HdXRlXCI7XG5leHBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuL0dhbWVDb250ZXh0XCI7XG5leHBvcnQgeyBHcmFwaGljcywgV0hJVEUsIEJMQUNLLCBHUkVFTiwgUkVELCBCTFVFLCBPZmZzY3JlZW4gfSBmcm9tIFwiLi9HcmFwaGljc1wiO1xuZXhwb3J0IHsgZ2V0TWF4VGV4dHVyZVNpemUgfSBmcm9tIFwiLi9vcGVuZ2wvT3BlbkdMR3JhcGhpY3NJbXBsXCI7XG5leHBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vR2FtZVwiO1xuZXhwb3J0IHsgQml0bWFwIH0gZnJvbSBcIi4vQml0bWFwXCI7XG5leHBvcnQgeyBGb250IH0gZnJvbSBcIi4vRm9udFwiO1xuZXhwb3J0IHsgU291bmQgfSBmcm9tIFwiLi9Tb3VuZFwiO1xuZXhwb3J0IHsgVGlsZXNldCB9IGZyb20gXCIuL1RpbGVzZXRcIjtcbmV4cG9ydCB7IEtleXMgfSBmcm9tIFwiLi9LZXlzXCI7XG5leHBvcnQgeyBBU3RhclBhdGhGaW5kZXIgfSBmcm9tIFwiLi9wYXRoL0FTdGFyUGF0aEZpbmRlclwiO1xuZXhwb3J0IHsgUGF0aEZpbmRlck1hcCB9IGZyb20gXCIuL3BhdGgvUGF0aEZpbmRlck1hcFwiO1xuZXhwb3J0IHsgUGF0aCB9IGZyb20gXCIuL3BhdGgvUGF0aFwiO1xuZXhwb3J0IHsgUGF0aE1vdmVyIH0gZnJvbSBcIi4vcGF0aC9QYXRoTW92ZXJcIjtcbmV4cG9ydCB7IFN0ZXAgfSBmcm9tIFwiLi9wYXRoL1N0ZXBcIjtcbmV4cG9ydCB7IExEVEtXb3JsZCwgTERUS0xheWVyQ29tcHJlc3Npb24gfSBmcm9tIFwiLi90aWxlbWFwcy9MRFRLV29ybGRcIjtcbmV4cG9ydCB7IE1hcFdvcmxkIH0gZnJvbSBcIi4vdGlsZW1hcHMvTWFwV29ybGRcIjtcbmV4cG9ydCB7IE1hcExldmVsIH0gZnJvbSBcIi4vdGlsZW1hcHMvTWFwTGV2ZWxcIjtcbmV4cG9ydCB7IE1hcExheWVyIH0gZnJvbSBcIi4vdGlsZW1hcHMvTWFwTGF5ZXJcIjtcbmV4cG9ydCB7IE1hcEVudGl0eSB9IGZyb20gXCIuL3RpbGVtYXBzL01hcEVudGl0eVwiO1xuZXhwb3J0IHsgU291bmRTY2FwZSwgU291bmRFYXNpbmcgfSBmcm9tIFwiLi9Tb3VuZFNjYXBlXCJcbiJdLCJzb3VyY2VSb290IjoiIn0=