/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/inline-svg/dist/inlineSVG.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/inline-svg/dist/inlineSVG.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b(a)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}("undefined"!=typeof global?global:this.window||this.global,function(a){var b,c={},d=!!document.querySelector&&!!a.addEventListener,e={initClass:"js-inlinesvg",svgSelector:"img.svg"},f=function(a,b){return function(){return--a<1?b.apply(this,arguments):void 0}},g=function(){var a={},b=!1,c=0,d=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(b=arguments[0],c++);for(var e=function(c){for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(b&&"[object Object]"===Object.prototype.toString.call(c[d])?a[d]=g(!0,a[d],c[d]):a[d]=c[d])};d>c;c++){var f=arguments[c];e(f)}return a},h=function(){var a=document.querySelectorAll(b.svgSelector);return a},i=function(a){var c=h(),d=f(c.length,a);Array.prototype.forEach.call(c,function(a,c){var e=a.src||a.getAttribute("data-src"),f=a.attributes,g=new XMLHttpRequest;g.open("GET",e,!0),g.onload=function(){if(g.status>=200&&g.status<400){var c=new DOMParser,e=c.parseFromString(g.responseText,"text/xml"),h=e.getElementsByTagName("svg")[0];if(h.removeAttribute("xmlns:a"),h.removeAttribute("width"),h.removeAttribute("height"),h.removeAttribute("x"),h.removeAttribute("y"),h.removeAttribute("enable-background"),h.removeAttribute("xmlns:xlink"),h.removeAttribute("xml:space"),h.removeAttribute("version"),Array.prototype.slice.call(f).forEach(function(a){"src"!==a.name&&"alt"!==a.name&&h.setAttribute(a.name,a.value)}),h.classList?h.classList.add("inlined-svg"):h.className+=" inlined-svg",h.setAttribute("role","img"),f.longdesc){var i=document.createElementNS("http://www.w3.org/2000/svg","desc"),j=document.createTextNode(f.longdesc.value);i.appendChild(j),h.insertBefore(i,h.firstChild)}if(f.alt){h.setAttribute("aria-labelledby","title");var k=document.createElementNS("http://www.w3.org/2000/svg","title"),l=document.createTextNode(f.alt.value);k.appendChild(l),h.insertBefore(k,h.firstChild)}a.parentNode.replaceChild(h,a),d(b.svgSelector)}else console.error("There was an error retrieving the source of the SVG.")},g.onerror=function(){console.error("There was an error connecting to the origin server.")},g.send()})};return c.init=function(a,c){d&&(b=g(e,a||{}),i(c||function(){}),document.documentElement.className+=" "+b.initClass)},c});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/bonsai.js":
/*!**************************!*\
  !*** ./src/js/bonsai.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ready_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ready.js */ "./src/js/ready.js");


var bonsai = function bonsai() {
  var offset = 650;

  var generateLeaf = function generateLeaf(x, y) {
    var leafID = Math.floor(Math.random() * 32) + 1;
    var rotation = Math.floor(Math.random() * 360);
    var tag = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    tag.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#Leaf-' + leafID);
    tag.setAttribute('transform', 'translate(' + x + ', ' + y + ') rotate(' + rotation + ') scale(0)');
    document.querySelector("#bonsai").appendChild(tag);
    setTimeout(function () {
      tag.setAttribute('transform', 'translate(' + x + ', ' + y + ') rotate(' + rotation + ') scale(1)');
    }, offset);
    offset += 12;
  };

  var leafLocations = [[529, 543], [530, 576], [565, 603], [622, 649], [609, 637], [590, 627], [580, 615], [569, 609], [515, 542], [520, 545], [466, 536], [478, 552], [492, 558], [448, 528], [443, 513], [441, 521], [446, 539], [433, 485], [428, 466], [428, 453], [434, 496], [444, 514], [445, 518], [541, 584], [495, 544], [502, 562], [471, 542], [613, 640], [598, 632], [562, 600], [223, 475], [209, 474], [215, 484], [209, 494], [204, 488], [239, 445], [191, 513], [251, 428], [192, 442], [166, 426], [180, 438], [180, 537], [174, 551], [233, 398], [307, 378], [283, 355], [244, 451], [216, 457], [187, 532], [322, 401], [297, 363], [260, 301], [218, 297], [188, 294], [247, 334], [396, 257], [485, 301], [422, 208], [438, 209], [462, 198], [451, 201], [453, 267], [353, 245], [290, 309], [272, 324], [232, 451], [305, 401], [300, 372], [338, 275], [351, 263], [341, 168], [377, 161], [421, 158], [317, 138], [311, 216], [225, 282], [229, 386], [481, 323], [524, 337], [541, 341], [211, 300], [192, 296], [365, 145], [240, 344], [419, 269], [554, 344], [516, 282], [411, 265], [290, 309], [271, 300], [445, 148], [410, 205], [288, 157], [396, 195], [481, 324], [390, 191], [228, 338], [384, 184], [385, 265], [416, 278], [391, 229], [396, 160], [461, 244], [453, 295], [493, 330], [482, 301], [505, 335], [505, 288], [409, 160], [334, 194], [352, 175], [296, 156], [375, 157], [268, 144], [281, 150], [392, 157], [435, 288], [284, 154], [353, 164], [435, 153], [399, 160], [369, 146], [442, 148], [370, 136], [377, 122]];
  Object(_ready_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
    setTimeout(function () {
      document.querySelector("#bonsai").classList.add("v");

      for (var i = 0; i < leafLocations.length; i++) {
        generateLeaf(leafLocations[i][0], leafLocations[i][1]);
      }
    }, 400);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (bonsai);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-svg */ "./node_modules/inline-svg/dist/inlineSVG.min.js");
/* harmony import */ var inline_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ready_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ready.js */ "./src/js/ready.js");
/* harmony import */ var _bonsai_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bonsai.js */ "./src/js/bonsai.js");



/* Different use cases */

var usecases = [{
  collection: "notes",
  item: "note",
  task: "write and save a note"
}, {
  collection: "messages",
  item: "message",
  task: "compose a message"
}, {
  collection: "todos",
  item: "todo",
  task: "create a todo list item"
}, {
  collection: "posts",
  item: "post",
  task: "compose a blog post"
}, {
  collection: "tweets",
  item: "tweet",
  task: "write a tweet"
}, {
  collection: "updates",
  item: "update",
  task: "post a status update"
}];
var current_usecase = null;

var generateUsecase = function generateUsecase() {
  var usecase = usecases[Math.floor(Math.random() * usecases.length)];
  if (current_usecase && current_usecase.collection == usecase.collection) return generateUsecase();else current_usecase = usecase;
  Array.prototype.forEach.call(document.querySelectorAll(".usecase"), function (el, i) {
    el.textContent = usecase[el.getAttribute('data-type')];
  });
  return false;
};

Object(_ready_js__WEBPACK_IMPORTED_MODULE_1__["default"])(generateUsecase);
document.querySelector("#usecase-generator").addEventListener("click", generateUsecase);
/* Load bonsai */

inline_svg__WEBPACK_IMPORTED_MODULE_0___default.a.init({
  svgSelector: 'img.svg',
  initClass: 'js-inlinesvg'
}, function () {
  document.querySelector("#bonsai").style.display = '';
  Object(_bonsai_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/ready.js":
/*!*************************!*\
  !*** ./src/js/ready.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ready = function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ready);

/***/ }),

/***/ "./src/stylus/docs.styl":
/*!******************************!*\
  !*** ./src/stylus/docs.styl ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/stylus/main.styl":
/*!******************************!*\
  !*** ./src/stylus/main.styl ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************************************************!*\
  !*** multi ./src/js/main.js ./src/stylus/main.styl ./src/stylus/docs.styl ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/groenroos/Repositories/sapling-website/src/js/main.js */"./src/js/main.js");
__webpack_require__(/*! /Users/groenroos/Repositories/sapling-website/src/stylus/main.styl */"./src/stylus/main.styl");
module.exports = __webpack_require__(/*! /Users/groenroos/Repositories/sapling-website/src/stylus/docs.styl */"./src/stylus/docs.styl");


/***/ })

/******/ });