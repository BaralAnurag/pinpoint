function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-split-pane contentId=\"map-content\">\n  <ion-menu contentId=\"map-content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>\n          Saved Addresses\n        </ion-title>\n      </ion-toolbar>\n    </ion-header>\n      <ion-content>\n        <ion-list>\n          <ion-item *ngIf=\"!addresses.length\">\n            <p>You have no saved addresses.\n               Please select an address from the map</p>\n          </ion-item>\n          <ion-item *ngFor=\"let address of addresses\" button\n          (click) =\"highlightedAddress=address\">\n          <ion-label>\n            <p>{{address.addressLine1}}</p>\n            <p *ngIf=\"address.addressLine2\">{{address.addressLine2}}</p>\n            <p>{{address.city}}, {{address.state}}, {{address.zipCode}}</p>\n          </ion-label>\n          <ion-icon name=\"checkmark\" slot=\"end\" *ngIf=\"selectedAddress===address\"></ion-icon>\n          <ion-icon name=\"pin\" slot=\"end\" (click)=\"selectedAddress=address;highlightedAddress=null\"\n          *ngIf=\"highlightedAddress===address\"></ion-icon>\n          <ion-icon name=\"trash\" slot=\"end\" (click)=\"onDeleteClick(address)\"\n          *ngIf=\"highlightedAddress===address\"></ion-icon>\n        </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <section class=\"ion-page\" id=\"map-content\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-menu-toggle>\n              <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n              </ion-button>\n            </ion-menu-toggle>\n          </ion-buttons>\n          <ion-title>Select Location</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n      <agm-map [latitude]=\"+selectedAddress.latitude\"\n      [longitude]=\"+selectedAddress.longitude\"\n      [zoom]=\"18\"\n      [clickableIcons]=\"true\"\n      [showDefaultInfoWindow]=\"false\"\n      [usePanning]=\"true\"\n      (mapClick)=\"onMapClick($event)\">\n      <agm-marker *ngFor=\"let address of addresses\"\n      [latitude]=\"+address.latitude\" [longitude]=\"+address.longitude\"\n      (markerClick)=\"selectedAddress=address\">\n      <agm-info-window [isOpen]=\"selectedAddress===address\" [maxWidth]=300>\n        <ion-label>\n          <p>{{address.addressLine1}}</p>\n          <p *ngIf=\"address.addressLine2\">{{address.addressLine2}}</p>\n          <p>{{address.city}}, {{address.state}}, {{address.zipCode}}</p>\n        </ion-label>\n      </agm-info-window>\n    </agm-marker>\n    </agm-map>\n  </ion-content>\n    </section>\n</ion-split-pane>";
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/bytesToUuid.js":
  /*!***********************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserBytesToUuidJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * Convert array of 16 byte values to UUID string format of the form:
     * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     */


    var byteToHex = [];

    for (var i = 0; i < 256; ++i) {
      byteToHex.push((i + 0x100).toString(16).substr(1));
    }

    function bytesToUuid(buf, offset) {
      var i = offset || 0;
      var bth = byteToHex; // Note: Be careful editing this code!  It's been tuned for performance
      // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

      return (bth[buf[i + 0]] + bth[buf[i + 1]] + bth[buf[i + 2]] + bth[buf[i + 3]] + '-' + bth[buf[i + 4]] + bth[buf[i + 5]] + '-' + bth[buf[i + 6]] + bth[buf[i + 7]] + '-' + bth[buf[i + 8]] + bth[buf[i + 9]] + '-' + bth[buf[i + 10]] + bth[buf[i + 11]] + bth[buf[i + 12]] + bth[buf[i + 13]] + bth[buf[i + 14]] + bth[buf[i + 15]]).toLowerCase();
    }
    /* harmony default export */


    __webpack_exports__["default"] = bytesToUuid;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
    \*****************************************************/

  /*! exports provided: v1, v3, v4, v5 */

  /***/
  function node_modulesUuidDistEsmBrowserIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./v1.js */
    "./node_modules/uuid/dist/esm-browser/v1.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v1", function () {
      return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    });
    /* harmony import */


    var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./v3.js */
    "./node_modules/uuid/dist/esm-browser/v3.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v3", function () {
      return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    });
    /* harmony import */


    var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./v4.js */
    "./node_modules/uuid/dist/esm-browser/v4.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v4", function () {
      return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    });
    /* harmony import */


    var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./v5.js */
    "./node_modules/uuid/dist/esm-browser/v5.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v5", function () {
      return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    });
    /***/

  },

  /***/
  "./node_modules/uuid/dist/esm-browser/md5.js":
  /*!***************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserMd5Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /*
     * Browser-compatible JavaScript MD5
     *
     * Modification of JavaScript MD5
     * https://github.com/blueimp/JavaScript-MD5
     *
     * Copyright 2011, Sebastian Tschan
     * https://blueimp.net
     *
     * Licensed under the MIT license:
     * https://opensource.org/licenses/MIT
     *
     * Based on
     * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
     * Digest Algorithm, as defined in RFC 1321.
     * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * Distributed under the BSD License
     * See http://pajhome.org.uk/crypt/md5 for more info.
     */


    function md5(bytes) {
      if (typeof bytes === 'string') {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

        bytes = new Uint8Array(msg.length);

        for (var i = 0; i < msg.length; ++i) {
          bytes[i] = msg.charCodeAt(i);
        }
      }

      return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
    }
    /*
     * Convert an array of little-endian words to an array of bytes
     */


    function md5ToHexEncodedArray(input) {
      var output = [];
      var length32 = input.length * 32;
      var hexTab = '0123456789abcdef';

      for (var i = 0; i < length32; i += 8) {
        var x = input[i >> 5] >>> i % 32 & 0xff;
        var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
      }

      return output;
    }
    /**
     * Calculate output length with padding and bit length
     */


    function getOutputLength(inputLength8) {
      return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
    }
    /*
     * Calculate the MD5 of an array of little-endian words, and a bit length.
     */


    function wordsToMd5(x, len) {
      /* append padding */
      x[len >> 5] |= 0x80 << len % 32;
      x[getOutputLength(len) - 1] = len;
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;

      for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
      }

      return [a, b, c, d];
    }
    /*
     * Convert an array bytes to an array of little-endian words
     * Characters >255 have their high-byte silently ignored.
     */


    function bytesToWords(input) {
      if (input.length === 0) {
        return [];
      }

      var length8 = input.length * 8;
      var output = new Uint32Array(getOutputLength(length8));

      for (var i = 0; i < length8; i += 8) {
        output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
      }

      return output;
    }
    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */


    function safeAdd(x, y) {
      var lsw = (x & 0xffff) + (y & 0xffff);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 0xffff;
    }
    /*
     * Bitwise rotate a 32-bit number to the left.
     */


    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    /*
     * These functions implement the four basic operations the algorithm uses.
     */


    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    }

    function md5ff(a, b, c, d, x, s, t) {
      return md5cmn(b & c | ~b & d, a, b, x, s, t);
    }

    function md5gg(a, b, c, d, x, s, t) {
      return md5cmn(b & d | c & ~d, a, b, x, s, t);
    }

    function md5hh(a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function md5ii(a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    /* harmony default export */


    __webpack_exports__["default"] = md5;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/rng.js":
  /*!***************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserRngJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return rng;
    }); // Unique ID creation requires a high quality random # generator. In the browser we therefore
    // require the crypto API and do not support built-in fallback to lower quality random number
    // generators (like Math.random()).
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.


    var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
    var rnds8 = new Uint8Array(16);

    function rng() {
      if (!getRandomValues) {
        throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
      }

      return getRandomValues(rnds8);
    }
    /***/

  },

  /***/
  "./node_modules/uuid/dist/esm-browser/sha1.js":
  /*!****************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserSha1Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); // Adapted from Chris Veness' SHA1 code at
    // http://www.movable-type.co.uk/scripts/sha1.html


    function f(s, x, y, z) {
      switch (s) {
        case 0:
          return x & y ^ ~x & z;

        case 1:
          return x ^ y ^ z;

        case 2:
          return x & y ^ x & z ^ y & z;

        case 3:
          return x ^ y ^ z;
      }
    }

    function ROTL(x, n) {
      return x << n | x >>> 32 - n;
    }

    function sha1(bytes) {
      var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
      var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

      if (typeof bytes === 'string') {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

        bytes = [];

        for (var i = 0; i < msg.length; ++i) {
          bytes.push(msg.charCodeAt(i));
        }
      }

      bytes.push(0x80);
      var l = bytes.length / 4 + 2;
      var N = Math.ceil(l / 16);
      var M = new Array(N);

      for (var _i = 0; _i < N; ++_i) {
        var arr = new Uint32Array(16);

        for (var j = 0; j < 16; ++j) {
          arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
        }

        M[_i] = arr;
      }

      M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

      for (var _i2 = 0; _i2 < N; ++_i2) {
        var W = new Uint32Array(80);

        for (var t = 0; t < 16; ++t) {
          W[t] = M[_i2][t];
        }

        for (var _t = 16; _t < 80; ++_t) {
          W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
        }

        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];

        for (var _t2 = 0; _t2 < 80; ++_t2) {
          var s = Math.floor(_t2 / 20);
          var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
          e = d;
          d = c;
          c = ROTL(b, 30) >>> 0;
          b = a;
          a = T;
        }

        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }

      return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
    }
    /* harmony default export */


    __webpack_exports__["default"] = sha1;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v1.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV1Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./rng.js */
    "./node_modules/uuid/dist/esm-browser/rng.js");
    /* harmony import */


    var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bytesToUuid.js */
    "./node_modules/uuid/dist/esm-browser/bytesToUuid.js"); // **`v1()` - Generate time-based UUID**
    //
    // Inspired by https://github.com/LiosK/UUID.js
    // and http://docs.python.org/library/uuid.html


    var _nodeId;

    var _clockseq; // Previous uuid creation time


    var _lastMSecs = 0;
    var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

    function v1(options, buf, offset) {
      var i = buf && offset || 0;
      var b = buf || [];
      options = options || {};
      var node = options.node || _nodeId;
      var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
      // specified.  We do this lazily to minimize issues related to insufficient
      // system entropy.  See #189

      if (node == null || clockseq == null) {
        var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

        if (node == null) {
          // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
          node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
        }

        if (clockseq == null) {
          // Per 4.2.2, randomize (14 bit) clockseq
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
        }
      } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
      // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
      // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
      // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


      var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
      // cycle to simulate higher resolution clock

      var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

      var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

      if (dt < 0 && options.clockseq === undefined) {
        clockseq = clockseq + 1 & 0x3fff;
      } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
      // time interval


      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
        nsecs = 0;
      } // Per 4.2.1.2 Throw error if too many uuids are requested


      if (nsecs >= 10000) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }

      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

      msecs += 12219292800000; // `time_low`

      var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
      b[i++] = tl >>> 24 & 0xff;
      b[i++] = tl >>> 16 & 0xff;
      b[i++] = tl >>> 8 & 0xff;
      b[i++] = tl & 0xff; // `time_mid`

      var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
      b[i++] = tmh >>> 8 & 0xff;
      b[i++] = tmh & 0xff; // `time_high_and_version`

      b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

      b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

      b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

      b[i++] = clockseq & 0xff; // `node`

      for (var n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }

      return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
    }
    /* harmony default export */


    __webpack_exports__["default"] = v1;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v3.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV3Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./v35.js */
    "./node_modules/uuid/dist/esm-browser/v35.js");
    /* harmony import */


    var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./md5.js */
    "./node_modules/uuid/dist/esm-browser/md5.js");

    var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    /* harmony default export */

    __webpack_exports__["default"] = v3;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v35.js":
  /*!***************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
    \***************************************************/

  /*! exports provided: DNS, URL, default */

  /***/
  function node_modulesUuidDistEsmBrowserV35Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DNS", function () {
      return DNS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL", function () {
      return URL;
    });
    /* harmony import */


    var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./bytesToUuid.js */
    "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");

    function uuidToBytes(uuid) {
      // Note: We assume we're being passed a valid uuid string
      var bytes = [];
      uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
        bytes.push(parseInt(hex, 16));
      });
      return bytes;
    }

    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str)); // UTF8 escape

      var bytes = [];

      for (var i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }

      return bytes;
    }

    var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
    var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
    /* harmony default export */

    __webpack_exports__["default"] = function (name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        var off = buf && offset || 0;
        if (typeof value === 'string') value = stringToBytes(value);
        if (typeof namespace === 'string') namespace = uuidToBytes(namespace);

        if (!Array.isArray(value)) {
          throw TypeError('value must be an array of bytes');
        }

        if (!Array.isArray(namespace) || namespace.length !== 16) {
          throw TypeError('namespace must be uuid string or an Array of 16 byte values');
        } // Per 4.3


        var bytes = hashfunc(namespace.concat(value));
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;

        if (buf) {
          for (var idx = 0; idx < 16; ++idx) {
            buf[off + idx] = bytes[idx];
          }
        }

        return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
      } // Function#name is not settable on some platforms (#270)


      try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
      } catch (err) {} // For CommonJS default export support


      generateUUID.DNS = DNS;
      generateUUID.URL = URL;
      return generateUUID;
    };
    /***/

  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v4.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV4Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./rng.js */
    "./node_modules/uuid/dist/esm-browser/rng.js");
    /* harmony import */


    var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bytesToUuid.js */
    "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");

    function v4(options, buf, offset) {
      if (typeof options === 'string') {
        buf = options === 'binary' ? new Uint8Array(16) : null;
        options = null;
      }

      options = options || {};

      var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


      rnds[6] = rnds[6] & 0x0f | 0x40;
      rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

      if (buf) {
        var start = offset || 0;

        for (var i = 0; i < 16; ++i) {
          buf[start + i] = rnds[i];
        }

        return buf;
      }

      return Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
    }
    /* harmony default export */


    __webpack_exports__["default"] = v4;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v5.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV5Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./v35.js */
    "./node_modules/uuid/dist/esm-browser/v35.js");
    /* harmony import */


    var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sha1.js */
    "./node_modules/uuid/dist/esm-browser/sha1.js");

    var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    /* harmony default export */

    __webpack_exports__["default"] = v5;
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nagm-map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVyYWdiYXJhbC9Eb2N1bWVudHMvRGV2L3B3YS9waW5wb2ludC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _maps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../maps.service */
    "./src/app/maps.service.ts");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../storage.service */
    "./src/app/storage.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(alertController, maps, storage) {
        _classCallCheck(this, HomePage);

        this.alertController = alertController;
        this.maps = maps;
        this.storage = storage;
        this.selectedAddress = {
          addressLine1: '4 Yawkey Way',
          city: 'Boston',
          state: 'MA',
          zipCode: '02215',
          latitude: '42.3466764',
          longitude: '-71.0994065'
        };
        this.addresses = [];
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.storage.getAddresses();

                  case 2:
                    this.addresses = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onMapClick",
        value: function onMapClick(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var place, address;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    place = event.placeId || event.coords;
                    _context2.next = 3;
                    return this.maps.geocode(place);

                  case 3:
                    address = _context2.sent;
                    _context2.next = 6;
                    return this.storage.saveAddress(address);

                  case 6:
                    this.selectedAddress = _context2.sent;
                    this.addresses.push(this.selectedAddress);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onDeleteClick",
        value: function onDeleteClick(address) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Delete Address?',
                      message: 'Are you sure you want to delete this address?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          return console.log('canceled - do nothing');
                        }
                      }, {
                        text: 'Delete it',
                        handler: function handler() {
                          return _this.doDelete(address);
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "doDelete",
        value: function doDelete(address) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.storage.deleteAddress(address.addressId);

                  case 2:
                    this.highlightedAddress = null;
                    this.addresses = this.addresses.filter(function (addr) {
                      return addr.addressId !== address.addressId;
                    });

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _maps_service__WEBPACK_IMPORTED_MODULE_2__["MapsService"]
      }, {
        type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  },

  /***/
  "./src/app/maps.service.ts":
  /*!*********************************!*\
    !*** ./src/app/maps.service.ts ***!
    \*********************************/

  /*! exports provided: MapsService */

  /***/
  function srcAppMapsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsService", function () {
      return MapsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MapsService = /*#__PURE__*/function () {
      function MapsService() {
        _classCallCheck(this, MapsService);

        this.geocoder = new google.maps.Geocoder();
      }

      _createClass(MapsService, [{
        key: "geocode",
        value: function geocode(placeIdOrLocation) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            var params = typeof placeIdOrLocation === 'string' ? {
              placeId: placeIdOrLocation
            } : {
              location: placeIdOrLocation
            };

            _this2.geocoder.geocode(params, function (results, status) {
              if (status !== google.maps.GeocoderStatus.OK) {
                return reject(status);
              } // The first result is the most specific.


              var result = results[0]; // tslint:disable-next-line:no-console

              console.debug('Geocoding returned', result);

              var address = _this2.parseResult(result);

              resolve(address);
            });
          });
        }
      }, {
        key: "parseResult",
        value: function parseResult(result) {
          var components = result.address_components;
          var parsed = new Map();

          var _iterator = _createForOfIteratorHelper(components),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var component = _step.value;

              var _iterator2 = _createForOfIteratorHelper(component.types),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var type = _step2.value;
                  parsed.set(type, component.short_name);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var address = {
            addressLine1: parsed.get('street_address') || "".concat(parsed.get('street_number'), "\xA0").concat(parsed.get('route')),
            city: parsed.get('locality'),
            state: parsed.get('administrative_area_level_1'),
            zipCode: parsed.get('postal_code'),
            placeId: result.place_id,
            latitude: result.geometry.location.lat().toString(),
            longitude: result.geometry.location.lng().toString()
          };
          return address;
        }
      }]);

      return MapsService;
    }();

    MapsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MapsService);
    /***/
  },

  /***/
  "./src/app/storage.service.ts":
  /*!************************************!*\
    !*** ./src/app/storage.service.ts ***!
    \************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var StorageService = /*#__PURE__*/function () {
      function StorageService(storage) {
        _classCallCheck(this, StorageService);

        this.storage = storage;
      }

      _createClass(StorageService, [{
        key: "saveAddress",
        value: function saveAddress(address) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!address.addressId) {
                      address.addressId = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v1"])();
                    }

                    _context5.next = 3;
                    return this.storage.set(address.addressId, address);

                  case 3:
                    return _context5.abrupt("return", address);

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getAddresses",
        value: function getAddresses() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var addresses;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    addresses = [];
                    _context6.next = 3;
                    return this.storage.forEach(function (address) {
                      if (address.addressId) {
                        addresses.push(address);
                      }
                    });

                  case 3:
                    return _context6.abrupt("return", addresses);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getAddress",
        value: function getAddress(addressId) {
          return this.storage.get(addressId);
        }
      }, {
        key: "deleteAddress",
        value: function deleteAddress(addressId) {
          return this.storage.remove(addressId);
        }
      }]);

      return StorageService;
    }();

    StorageService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StorageService);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map