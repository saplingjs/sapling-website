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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/component-closest/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-closest/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module Dependencies
 */

try {
  var matches = __webpack_require__(/*! matches-selector */ "./node_modules/component-matches-selector/index.js")
} catch (err) {
  var matches = __webpack_require__(/*! component-matches-selector */ "./node_modules/component-matches-selector/index.js")
}

/**
 * Export `closest`
 */

module.exports = closest

/**
 * Closest
 *
 * @param {Element} el
 * @param {String} selector
 * @param {Element} scope (optional)
 */

function closest (el, selector, scope) {
  scope = scope || document.documentElement;

  // walk up the dom
  while (el && el !== scope) {
    if (matches(el, selector)) return el;
    el = el.parentNode;
  }

  // check scope for match
  return matches(el, selector) ? el : null;
}


/***/ }),

/***/ "./node_modules/component-matches-selector/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/component-matches-selector/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

try {
  var query = __webpack_require__(/*! query */ "./node_modules/component-query/index.js");
} catch (err) {
  var query = __webpack_require__(/*! component-query */ "./node_modules/component-query/index.js");
}

/**
 * Element prototype.
 */

var Element = __webpack_require__(/*! global-object */ "./node_modules/global-object/global-object.js").Element;
var proto = Element && Element.prototype || {};

/**
 * Vendor function.
 */

var vendor = proto.matches
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

/**
 * Expose `match()`.
 */

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (!el || el.nodeType !== 1) return false;
  if (vendor) return vendor.call(el, selector);
  var nodes = query.all(selector, el.parentNode);
  for (var i = 0; i < nodes.length; ++i) {
    if (nodes[i] == el) return true;
  }
  return false;
}


/***/ }),

/***/ "./node_modules/component-query/index.js":
/*!***********************************************!*\
  !*** ./node_modules/component-query/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function one(selector, el) {
  return el.querySelector(selector);
}

exports = module.exports = function(selector, el){
  el = el || document;
  return one(selector, el);
};

exports.all = function(selector, el){
  el = el || document;
  return el.querySelectorAll(selector);
};

exports.engine = function(obj){
  if (!obj.one) throw new Error('.one callback required');
  if (!obj.all) throw new Error('.all callback required');
  one = obj.one;
  exports.all = obj.all;
  return exports;
};


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/docsify-pagination/src/stylesheet.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/docsify-pagination/src/stylesheet.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".docsify-pagination-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  overflow: hidden;\n  margin: 5em 0 1em;\n  border-top: 1px solid rgba(0, 0, 0, 0.07);\n}\n.pagination-item {\n  margin-top: 2.5em;\n}\n.pagination-item a,\n.pagination-item a:hover {\n  text-decoration: none;\n}\n.pagination-item a {\n  color: currentColor;\n}\n.pagination-item a:hover .pagination-item-title {\n  text-decoration: underline;\n}\n.pagination-item:not(:last-child) a .pagination-item-label,\n.pagination-item:not(:last-child) a .pagination-item-title,\n.pagination-item:not(:last-child) a .pagination-item-subtitle {\n  opacity: 0.3;\n  transition: all 200ms;\n}\n.pagination-item:last-child .pagination-item-label,\n.pagination-item:not(:last-child) a:hover .pagination-item-label {\n  opacity: 0.6;\n}\n.pagination-item:not(:last-child) a:hover .pagination-item-title {\n  opacity: 1;\n}\n.pagination-item-label {\n  font-size: 0.8em;\n}\n.pagination-item-label > * {\n  line-height: 1;\n  vertical-align: middle;\n}\n.pagination-item-label svg {\n  height: 0.8em;\n  width: auto;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1px;\n}\n.pagination-item--next {\n  margin-left: auto;\n  text-align: right;\n}\n.pagination-item--next svg {\n  margin-left: 0.5em;\n}\n.pagination-item--previous svg {\n  margin-right: 0.5em;\n}\n.pagination-item-title {\n  font-size: 1.6em;\n}\n.pagination-item-subtitle {\n  text-transform: uppercase;\n  opacity: 0.3;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/docsify-copy-code/dist/docsify-copy-code.js":
/*!******************************************************************!*\
  !*** ./node_modules/docsify-copy-code/dist/docsify-copy-code.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * docsify-copy-code
 * v2.1.0
 * https://github.com/jperasmus/docsify-copy-code
 * (c) 2017-2019 JP Erasmus <jperasmus11@gmail.com>
 * MIT license
 */
(function() {
    "use strict";
    function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function(obj) {
                return typeof obj;
            };
        } else {
            _typeof = function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }
        return _typeof(obj);
    }
    function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === "undefined") {
            return;
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        var style = document.createElement("style");
        style.type = "text/css";
        if (insertAt === "top") {
            if (head.firstChild) {
                head.insertBefore(style, head.firstChild);
            } else {
                head.appendChild(style);
            }
        } else {
            head.appendChild(style);
        }
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }
    var css = ".docsify-copy-code-button,.docsify-copy-code-button span{cursor:pointer;transition:all .25s ease}.docsify-copy-code-button{position:absolute;z-index:1;top:0;right:0;overflow:visible;padding:.65em .8em;border:0;border-radius:0;outline:0;font-size:1em;background:grey;background:var(--theme-color,grey);color:#fff;opacity:0}.docsify-copy-code-button span{border-radius:3px;background:inherit;pointer-events:none}.docsify-copy-code-button .error,.docsify-copy-code-button .success{position:absolute;z-index:-100;top:50%;left:0;padding:.5em .65em;font-size:.825em;opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.docsify-copy-code-button.error .error,.docsify-copy-code-button.success .success{opacity:1;-webkit-transform:translate(-115%,-50%);transform:translate(-115%,-50%)}.docsify-copy-code-button:focus,pre:hover .docsify-copy-code-button{opacity:1}";
    styleInject(css);
    function docsifyCopyCode(hook, vm) {
        hook.doneEach(function() {
            var targetElms = Array.apply(null, document.querySelectorAll("pre[data-lang]"));
            var i18n = {
                buttonText: "Copy to clipboard",
                errorText: "Error",
                successText: "Copied"
            };
            if (vm.config.copyCode) {
                Object.keys(i18n).forEach(function(key) {
                    var textValue = vm.config.copyCode[key];
                    if (typeof textValue === "string") {
                        i18n[key] = textValue;
                    } else if (_typeof(textValue) === "object") {
                        Object.keys(textValue).some(function(match) {
                            var isMatch = location.href.indexOf(match) > -1;
                            i18n[key] = isMatch ? textValue[match] : i18n[key];
                            return isMatch;
                        });
                    }
                });
            }
            var template = [ '<button class="docsify-copy-code-button">', '<span class="label">'.concat(i18n.buttonText, "</span>"), '<span class="error">'.concat(i18n.errorText, "</span>"), '<span class="success">'.concat(i18n.successText, "</span>"), "</button>" ].join("");
            targetElms.forEach(function(elm) {
                elm.insertAdjacentHTML("beforeend", template);
            });
        });
        hook.mounted(function() {
            var listenerHost = document.querySelector(".content");
            listenerHost.addEventListener("click", function(evt) {
                var isCopyCodeButton = evt.target.classList.contains("docsify-copy-code-button");
                if (isCopyCodeButton) {
                    var buttonElm = evt.target.tagName === "BUTTON" ? evt.target : evt.target.parentNode;
                    var range = document.createRange();
                    var preElm = buttonElm.parentNode;
                    var codeElm = preElm.querySelector("code");
                    var selection = window.getSelection();
                    range.selectNode(codeElm);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    try {
                        var successful = document.execCommand("copy");
                        if (successful) {
                            buttonElm.classList.add("success");
                            setTimeout(function() {
                                buttonElm.classList.remove("success");
                            }, 1e3);
                        }
                    } catch (err) {
                        console.error("docsify-copy-code: ".concat(err));
                        buttonElm.classList.add("error");
                        setTimeout(function() {
                            buttonElm.classList.remove("error");
                        }, 1e3);
                    }
                    selection = window.getSelection();
                    if (typeof selection.removeRange === "function") {
                        selection.removeRange(range);
                    } else if (typeof selection.removeAllRanges === "function") {
                        selection.removeAllRanges();
                    }
                }
            });
        });
    }
    if (document.querySelector('link[href*="docsify-copy-code"]')) {
        console.warn("[Deprecation] Link to external docsify-copy-code stylesheet is no longer necessary.");
    }
    window.DocsifyCopyCodePlugin = {
        init: function init() {
            return function(hook, vm) {
                hook.ready(function() {
                    console.warn("[Deprecation] Manually initializing docsify-copy-code using window.DocsifyCopyCodePlugin.init() is no longer necessary.");
                });
            };
        }
    };
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = [ docsifyCopyCode ].concat(window.$docsify.plugins || []);
})();
//# sourceMappingURL=docsify-copy-code.js.map


/***/ }),

/***/ "./node_modules/docsify-pagination/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/docsify-pagination/src/index.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination */ "./node_modules/docsify-pagination/src/pagination.js");


window.$docsify = window.$docsify || {}

window.$docsify.plugins = [_pagination__WEBPACK_IMPORTED_MODULE_0__["install"]].concat(window.$docsify.plugins || [])


/***/ }),

/***/ "./node_modules/docsify-pagination/src/pagination.js":
/*!***********************************************************!*\
  !*** ./node_modules/docsify-pagination/src/pagination.js ***!
  \***********************************************************/
/*! exports provided: install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var component_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! component-query */ "./node_modules/component-query/index.js");
/* harmony import */ var component_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(component_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var component_closest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component-closest */ "./node_modules/component-closest/index.js");
/* harmony import */ var component_closest__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(component_closest__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var component_matches_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component-matches-selector */ "./node_modules/component-matches-selector/index.js");
/* harmony import */ var component_matches_selector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(component_matches_selector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stylesheet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stylesheet.css */ "./node_modules/docsify-pagination/src/stylesheet.css");
/* harmony import */ var _stylesheet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stylesheet_css__WEBPACK_IMPORTED_MODULE_3__);





/**
 * constants
 */
const ROUTER_MODE = {
  HASH: 'hash',
  HISTORY: 'history',
}
const DEFAULT_OPTIONS = (config) => ({
  previousText: 'PREVIOUS',
  nextText: 'NEXT',
  crossChapter: false,
  crossChapterText: false,
  routerMode: config.routerMode || ROUTER_MODE.HASH,
})
const CONTAINER_CLASSNAME = 'docsify-pagination-container'

/**
 * basic utilities
 */
function toArray (elements) {
  return Array.prototype.slice.call(elements)
}
function findChapter (element) {
  const container = component_closest__WEBPACK_IMPORTED_MODULE_1___default()(element, 'div > ul > li')
  return component_query__WEBPACK_IMPORTED_MODULE_0___default()('p', container)
}
function findHyperlink (element) {
  return element.href ? element : component_query__WEBPACK_IMPORTED_MODULE_0___default()('a', element)
}
function isALinkTo (path, element) {
  if (arguments.length === 1) {
    return (element) => isALinkTo(path, element)
  }
  return decodeURIComponent(element.getAttribute('href').split('?')[0]) === decodeURIComponent(path)
}


/**
 * core renderer
 */
class Link {
  constructor (element) {
    if (!element) {
      return
    }
    this.chapter = findChapter(element)
    this.hyperlink = findHyperlink(element)
  }
  toJSON () {
    if (!this.hyperlink) {
      return
    }
    return {
      name: this.hyperlink.innerText,
      href: this.hyperlink.getAttribute('href'),
      chapterName: this.chapter && this.chapter.innerText || ''
    }
  }
}

function pagination (vm, { crossChapter, routerMode }) {
  try {
    const path = routerMode === ROUTER_MODE.HISTORY ?
      vm.route.path :
      `#${vm.route.path}`
    const all = toArray(component_query__WEBPACK_IMPORTED_MODULE_0___default.a.all('.sidebar li a')).filter((element) => !component_matches_selector__WEBPACK_IMPORTED_MODULE_2___default()(element, '.section-link'))
    const active = all.find(isALinkTo(path))
    const group = toArray((component_closest__WEBPACK_IMPORTED_MODULE_1___default()(active, 'ul') || {}).children)
      .filter((element) => element.tagName.toUpperCase() === 'LI')
    const index = crossChapter
      ? all.findIndex(isALinkTo(path))
      : group.findIndex((item) => {
        const hyperlink = findHyperlink(item)
        return hyperlink && isALinkTo(path, hyperlink)
      })

    const links = crossChapter ? all : group

    return {
      prev: new Link(links[index - 1]).toJSON(),
      next: new Link(links[index + 1]).toJSON(),
    }
  } catch (error) {
    return {}
  }
}

const template = {
  container () {
    return `<div class="${CONTAINER_CLASSNAME}"></div>`
  },

  inner (data, options) {
    return [
      data.prev && `
        <div class="pagination-item pagination-item--previous">
          <a href="${data.prev.href}">
            <div class="pagination-item-label">
              <svg class="icon" width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                <polyline fill="none" vector-effect="non-scaling-stroke" points="8,2 2,8 8,14"/>
              </svg>
              <span>${options.previousText}</span>
            </div>
            <div class="pagination-item-title">${data.prev.name}</div>
      `,
      data.prev && options.crossChapterText && `<div class="pagination-item-subtitle">${data.prev.chapterName}</div>`,
      data.prev && `</a>
        </div>
      `,
      data.next && `
        <div class="pagination-item pagination-item--next">
          <a href="${data.next.href}">
            <div class="pagination-item-label">
              <span>${options.nextText}</span>
              <svg width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                <polyline fill="none" vector-effect="non-scaling-stroke" points="2,2 8,8 2,14"/>
              </svg>
            </div>
            <div class="pagination-item-title">${data.next.name}</div>
      `,
      data.next && options.crossChapterText && `<div class="pagination-item-subtitle">${data.next.chapterName}</div>`,
      data.next && `</a>
        </div>
      `
    ].filter(Boolean).join('')
  },
}

/**
 * installation
 */
function install (hook, vm) {
  let options = Object.assign(
    {},
    DEFAULT_OPTIONS(vm.config),
    vm.config.pagination || {}
  )

  function render () {
    const container = component_query__WEBPACK_IMPORTED_MODULE_0___default()(`.${CONTAINER_CLASSNAME}`)
    if (!container) {
      return
    }
    container.innerHTML = template.inner(pagination(vm, options), options)
  }

  hook.afterEach((html) => html + template.container())
  hook.doneEach(() => render())
}


/***/ }),

/***/ "./node_modules/docsify-pagination/src/stylesheet.css":
/*!************************************************************!*\
  !*** ./node_modules/docsify-pagination/src/stylesheet.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--7-1!../../postcss-loader/src??ref--7-2!./stylesheet.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/docsify-pagination/src/stylesheet.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/docsify-themeable/dist/js/docsify-themeable.js":
/*!*********************************************************************!*\
  !*** ./node_modules/docsify-themeable/dist/js/docsify-themeable.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * docsify-themeable
 * v0.8.0
 * https://jhildenbiddle.github.io/docsify-themeable/
 * (c) 2018-2020 John Hildenbiddle
 * MIT license
 */
(function() {
    "use strict";
    /*!
     * css-vars-ponyfill
     * v2.1.2
     * https://jhildenbiddle.github.io/css-vars-ponyfill/
     * (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com>
     * MIT license
     */    function _extends() {
        _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
            return arr2;
        }
    }
    function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    /*!
     * get-css-data
     * v1.6.3
     * https://github.com/jhildenbiddle/get-css-data
     * (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com>
     * MIT license
     */    function getUrls(urls) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var settings = {
            mimeType: options.mimeType || null,
            onBeforeSend: options.onBeforeSend || Function.prototype,
            onSuccess: options.onSuccess || Function.prototype,
            onError: options.onError || Function.prototype,
            onComplete: options.onComplete || Function.prototype
        };
        var urlArray = Array.isArray(urls) ? urls : [ urls ];
        var urlQueue = Array.apply(null, Array(urlArray.length)).map(function(x) {
            return null;
        });
        function isValidCss() {
            var cssText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var isHTML = cssText.trim().charAt(0) === "<";
            return !isHTML;
        }
        function onError(xhr, urlIndex) {
            settings.onError(xhr, urlArray[urlIndex], urlIndex);
        }
        function onSuccess(responseText, urlIndex) {
            var returnVal = settings.onSuccess(responseText, urlArray[urlIndex], urlIndex);
            responseText = returnVal === false ? "" : returnVal || responseText;
            urlQueue[urlIndex] = responseText;
            if (urlQueue.indexOf(null) === -1) {
                settings.onComplete(urlQueue);
            }
        }
        var parser = document.createElement("a");
        urlArray.forEach(function(url, i) {
            parser.setAttribute("href", url);
            parser.href = String(parser.href);
            var isIElte9 = Boolean(document.all && !window.atob);
            var isIElte9CORS = isIElte9 && parser.host.split(":")[0] !== location.host.split(":")[0];
            if (isIElte9CORS) {
                var isSameProtocol = parser.protocol === location.protocol;
                if (isSameProtocol) {
                    var xdr = new XDomainRequest();
                    xdr.open("GET", url);
                    xdr.timeout = 0;
                    xdr.onprogress = Function.prototype;
                    xdr.ontimeout = Function.prototype;
                    xdr.onload = function() {
                        if (isValidCss(xdr.responseText)) {
                            onSuccess(xdr.responseText, i);
                        } else {
                            onError(xdr, i);
                        }
                    };
                    xdr.onerror = function(err) {
                        onError(xdr, i);
                    };
                    setTimeout(function() {
                        xdr.send();
                    }, 0);
                } else {
                    console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(url, ")"));
                    onError(null, i);
                }
            } else {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                if (settings.mimeType && xhr.overrideMimeType) {
                    xhr.overrideMimeType(settings.mimeType);
                }
                settings.onBeforeSend(xhr, url, i);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200 && isValidCss(xhr.responseText)) {
                            onSuccess(xhr.responseText, i);
                        } else {
                            onError(xhr, i);
                        }
                    }
                };
                xhr.send();
            }
        });
    }
    /**
     * Gets CSS data from <style> and <link> nodes (including @imports), then
     * returns data in order processed by DOM. Allows specifying nodes to
     * include/exclude and filtering CSS data using RegEx.
     *
     * @preserve
     * @param {object}   [options] The options object
     * @param {object}   [options.rootElement=document] Root element to traverse for
     *                   <link> and <style> nodes.
     * @param {string}   [options.include] CSS selector matching <link> and <style>
     *                   nodes to include
     * @param {string}   [options.exclude] CSS selector matching <link> and <style>
     *                   nodes to exclude
     * @param {object}   [options.filter] Regular expression used to filter node CSS
     *                   data. Each block of CSS data is tested against the filter,
     *                   and only matching data is included.
     * @param {object}   [options.useCSSOM=false] Determines if CSS data will be
     *                   collected from a stylesheet's runtime values instead of its
     *                   text content. This is required to get accurate CSS data
     *                   when a stylesheet has been modified using the deleteRule()
     *                   or insertRule() methods because these modifications will
     *                   not be reflected in the stylesheet's text content.
     * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
     *                   1) the XHR object, 2) source node reference, and 3) the
     *                   source URL as arguments.
     * @param {function} [options.onSuccess] Callback on each CSS node read. Passes
     *                   1) CSS text, 2) source node reference, and 3) the source
     *                   URL as arguments.
     * @param {function} [options.onError] Callback on each error. Passes 1) the XHR
     *                   object for inspection, 2) soure node reference, and 3) the
     *                   source URL that failed (either a <link> href or an @import)
     *                   as arguments
     * @param {function} [options.onComplete] Callback after all nodes have been
     *                   processed. Passes 1) concatenated CSS text, 2) an array of
     *                   CSS text in DOM order, and 3) an array of nodes in DOM
     *                   order as arguments.
     *
     * @example
     *
     *   getCssData({
     *     rootElement: document,
     *     include    : 'style,link[rel="stylesheet"]',
     *     exclude    : '[href="skip.css"]',
     *     filter     : /red/,
     *     useCSSOM   : false,
     *     onBeforeSend(xhr, node, url) {
     *       // ...
     *     }
     *     onSuccess(cssText, node, url) {
     *       // ...
     *     }
     *     onError(xhr, node, url) {
     *       // ...
     *     },
     *     onComplete(cssText, cssArray, nodeArray) {
     *       // ...
     *     }
     *   });
     */    function getCssData(options) {
        var regex = {
            cssComments: /\/\*[\s\S]+?\*\//g,
            cssImports: /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g
        };
        var settings = {
            rootElement: options.rootElement || document,
            include: options.include || 'style,link[rel="stylesheet"]',
            exclude: options.exclude || null,
            filter: options.filter || null,
            useCSSOM: options.useCSSOM || false,
            onBeforeSend: options.onBeforeSend || Function.prototype,
            onSuccess: options.onSuccess || Function.prototype,
            onError: options.onError || Function.prototype,
            onComplete: options.onComplete || Function.prototype
        };
        var sourceNodes = Array.apply(null, settings.rootElement.querySelectorAll(settings.include)).filter(function(node) {
            return !matchesSelector(node, settings.exclude);
        });
        var cssArray = Array.apply(null, Array(sourceNodes.length)).map(function(x) {
            return null;
        });
        function handleComplete() {
            var isComplete = cssArray.indexOf(null) === -1;
            if (isComplete) {
                var cssText = cssArray.join("");
                settings.onComplete(cssText, cssArray, sourceNodes);
            }
        }
        function handleSuccess(cssText, cssIndex, node, sourceUrl) {
            var returnVal = settings.onSuccess(cssText, node, sourceUrl);
            cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;
            resolveImports(cssText, node, sourceUrl, function(resolvedCssText, errorData) {
                if (cssArray[cssIndex] === null) {
                    errorData.forEach(function(data) {
                        return settings.onError(data.xhr, node, data.url);
                    });
                    if (!settings.filter || settings.filter.test(resolvedCssText)) {
                        cssArray[cssIndex] = resolvedCssText;
                    } else {
                        cssArray[cssIndex] = "";
                    }
                    handleComplete();
                }
            });
        }
        function parseImportData(cssText, baseUrl) {
            var ignoreRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var importData = {};
            importData.rules = (cssText.replace(regex.cssComments, "").match(regex.cssImports) || []).filter(function(rule) {
                return ignoreRules.indexOf(rule) === -1;
            });
            importData.urls = importData.rules.map(function(rule) {
                return rule.replace(regex.cssImports, "$1");
            });
            importData.absoluteUrls = importData.urls.map(function(url) {
                return getFullUrl(url, baseUrl);
            });
            importData.absoluteRules = importData.rules.map(function(rule, i) {
                var oldUrl = importData.urls[i];
                var newUrl = getFullUrl(importData.absoluteUrls[i], baseUrl);
                return rule.replace(oldUrl, newUrl);
            });
            return importData;
        }
        function resolveImports(cssText, node, baseUrl, callbackFn) {
            var __errorData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
            var __errorRules = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
            var importData = parseImportData(cssText, baseUrl, __errorRules);
            if (importData.rules.length) {
                getUrls(importData.absoluteUrls, {
                    onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
                        settings.onBeforeSend(xhr, node, url);
                    },
                    onSuccess: function onSuccess(cssText, url, urlIndex) {
                        var returnVal = settings.onSuccess(cssText, node, url);
                        cssText = returnVal === false ? "" : returnVal || cssText;
                        var responseImportData = parseImportData(cssText, url, __errorRules);
                        responseImportData.rules.forEach(function(rule, i) {
                            cssText = cssText.replace(rule, responseImportData.absoluteRules[i]);
                        });
                        return cssText;
                    },
                    onError: function onError(xhr, url, urlIndex) {
                        __errorData.push({
                            xhr: xhr,
                            url: url
                        });
                        __errorRules.push(importData.rules[urlIndex]);
                        resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
                    },
                    onComplete: function onComplete(responseArray) {
                        responseArray.forEach(function(importText, i) {
                            cssText = cssText.replace(importData.rules[i], importText);
                        });
                        resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
                    }
                });
            } else {
                callbackFn(cssText, __errorData);
            }
        }
        if (sourceNodes.length) {
            sourceNodes.forEach(function(node, i) {
                var linkHref = node.getAttribute("href");
                var linkRel = node.getAttribute("rel");
                var isLink = node.nodeName === "LINK" && linkHref && linkRel && linkRel.toLowerCase() === "stylesheet";
                var isStyle = node.nodeName === "STYLE";
                if (isLink) {
                    getUrls(linkHref, {
                        mimeType: "text/css",
                        onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
                            settings.onBeforeSend(xhr, node, url);
                        },
                        onSuccess: function onSuccess(cssText, url, urlIndex) {
                            var sourceUrl = getFullUrl(linkHref, location.href);
                            handleSuccess(cssText, i, node, sourceUrl);
                        },
                        onError: function onError(xhr, url, urlIndex) {
                            cssArray[i] = "";
                            settings.onError(xhr, node, url);
                            handleComplete();
                        }
                    });
                } else if (isStyle) {
                    var cssText = node.textContent;
                    if (settings.useCSSOM) {
                        cssText = Array.apply(null, node.sheet.cssRules).map(function(rule) {
                            return rule.cssText;
                        }).join("");
                    }
                    handleSuccess(cssText, i, node, location.href);
                } else {
                    cssArray[i] = "";
                    handleComplete();
                }
            });
        } else {
            settings.onComplete("", []);
        }
    }
    function getFullUrl(url) {
        var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
        var d = document.implementation.createHTMLDocument("");
        var b = d.createElement("base");
        var a = d.createElement("a");
        d.head.appendChild(b);
        d.body.appendChild(a);
        b.href = base;
        a.href = url;
        return a.href;
    }
    function matchesSelector(elm, selector) {
        var matches = elm.matches || elm.matchesSelector || elm.webkitMatchesSelector || elm.mozMatchesSelector || elm.msMatchesSelector || elm.oMatchesSelector;
        return matches.call(elm, selector);
    }
    var balancedMatch = balanced;
    function balanced(a, b, str) {
        if (a instanceof RegExp) a = maybeMatch(a, str);
        if (b instanceof RegExp) b = maybeMatch(b, str);
        var r = range(a, b, str);
        return r && {
            start: r[0],
            end: r[1],
            pre: str.slice(0, r[0]),
            body: str.slice(r[0] + a.length, r[1]),
            post: str.slice(r[1] + b.length)
        };
    }
    function maybeMatch(reg, str) {
        var m = str.match(reg);
        return m ? m[0] : null;
    }
    balanced.range = range;
    function range(a, b, str) {
        var begs, beg, left, right, result;
        var ai = str.indexOf(a);
        var bi = str.indexOf(b, ai + 1);
        var i = ai;
        if (ai >= 0 && bi > 0) {
            begs = [];
            left = str.length;
            while (i >= 0 && !result) {
                if (i == ai) {
                    begs.push(i);
                    ai = str.indexOf(a, i + 1);
                } else if (begs.length == 1) {
                    result = [ begs.pop(), bi ];
                } else {
                    beg = begs.pop();
                    if (beg < left) {
                        left = beg;
                        right = bi;
                    }
                    bi = str.indexOf(b, i + 1);
                }
                i = ai < bi && ai >= 0 ? ai : bi;
            }
            if (begs.length) {
                result = [ left, right ];
            }
        }
        return result;
    }
    function parseCss(css) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var defaults = {
            preserveStatic: true,
            removeComments: false
        };
        var settings = _extends({}, defaults, options);
        var errors = [];
        function error(msg) {
            throw new Error("CSS parse error: ".concat(msg));
        }
        function match(re) {
            var m = re.exec(css);
            if (m) {
                css = css.slice(m[0].length);
                return m;
            }
        }
        function open() {
            return match(/^{\s*/);
        }
        function close() {
            return match(/^}/);
        }
        function whitespace() {
            match(/^\s*/);
        }
        function comment() {
            whitespace();
            if (css[0] !== "/" || css[1] !== "*") {
                return;
            }
            var i = 2;
            while (css[i] && (css[i] !== "*" || css[i + 1] !== "/")) {
                i++;
            }
            if (!css[i]) {
                return error("end of comment is missing");
            }
            var str = css.slice(2, i);
            css = css.slice(i + 2);
            return {
                type: "comment",
                comment: str
            };
        }
        function comments() {
            var cmnts = [];
            var c;
            while (c = comment()) {
                cmnts.push(c);
            }
            return settings.removeComments ? [] : cmnts;
        }
        function selector() {
            whitespace();
            while (css[0] === "}") {
                error("extra closing bracket");
            }
            var m = match(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
            if (m) {
                return m[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function(m) {
                    return m.replace(/,/g, "‌");
                }).split(/\s*(?![^(]*\)),\s*/).map(function(s) {
                    return s.replace(/\u200C/g, ",");
                });
            }
        }
        function declaration() {
            match(/^([;\s]*)+/);
            var comment_regexp = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g;
            var prop = match(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
            if (!prop) {
                return;
            }
            prop = prop[0].trim();
            if (!match(/^:\s*/)) {
                return error("property missing ':'");
            }
            var val = match(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/);
            var ret = {
                type: "declaration",
                property: prop.replace(comment_regexp, ""),
                value: val ? val[0].replace(comment_regexp, "").trim() : ""
            };
            match(/^[;\s]*/);
            return ret;
        }
        function declarations() {
            if (!open()) {
                return error("missing '{'");
            }
            var d;
            var decls = comments();
            while (d = declaration()) {
                decls.push(d);
                decls = decls.concat(comments());
            }
            if (!close()) {
                return error("missing '}'");
            }
            return decls;
        }
        function keyframe() {
            whitespace();
            var vals = [];
            var m;
            while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
                vals.push(m[1]);
                match(/^,\s*/);
            }
            if (vals.length) {
                return {
                    type: "keyframe",
                    values: vals,
                    declarations: declarations()
                };
            }
        }
        function at_keyframes() {
            var m = match(/^@([-\w]+)?keyframes\s*/);
            if (!m) {
                return;
            }
            var vendor = m[1];
            m = match(/^([-\w]+)\s*/);
            if (!m) {
                return error("@keyframes missing name");
            }
            var name = m[1];
            if (!open()) {
                return error("@keyframes missing '{'");
            }
            var frame;
            var frames = comments();
            while (frame = keyframe()) {
                frames.push(frame);
                frames = frames.concat(comments());
            }
            if (!close()) {
                return error("@keyframes missing '}'");
            }
            return {
                type: "keyframes",
                name: name,
                vendor: vendor,
                keyframes: frames
            };
        }
        function at_page() {
            var m = match(/^@page */);
            if (m) {
                var sel = selector() || [];
                return {
                    type: "page",
                    selectors: sel,
                    declarations: declarations()
                };
            }
        }
        function at_fontface() {
            var m = match(/^@font-face\s*/);
            if (m) {
                return {
                    type: "font-face",
                    declarations: declarations()
                };
            }
        }
        function at_supports() {
            var m = match(/^@supports *([^{]+)/);
            if (m) {
                return {
                    type: "supports",
                    supports: m[1].trim(),
                    rules: rules()
                };
            }
        }
        function at_host() {
            var m = match(/^@host\s*/);
            if (m) {
                return {
                    type: "host",
                    rules: rules()
                };
            }
        }
        function at_media() {
            var m = match(/^@media([^{]+)*/);
            if (m) {
                return {
                    type: "media",
                    media: (m[1] || "").trim(),
                    rules: rules()
                };
            }
        }
        function at_custom_m() {
            var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
            if (m) {
                return {
                    type: "custom-media",
                    name: m[1].trim(),
                    media: m[2].trim()
                };
            }
        }
        function at_document() {
            var m = match(/^@([-\w]+)?document *([^{]+)/);
            if (m) {
                return {
                    type: "document",
                    document: m[2].trim(),
                    vendor: m[1] ? m[1].trim() : null,
                    rules: rules()
                };
            }
        }
        function at_x() {
            var m = match(/^@(import|charset|namespace)\s*([^;]+);/);
            if (m) {
                return {
                    type: m[1],
                    name: m[2].trim()
                };
            }
        }
        function at_rule() {
            whitespace();
            if (css[0] === "@") {
                var ret = at_keyframes() || at_supports() || at_host() || at_media() || at_custom_m() || at_page() || at_document() || at_fontface() || at_x();
                if (ret && !settings.preserveStatic) {
                    var hasVarFunc = false;
                    if (ret.declarations) {
                        hasVarFunc = ret.declarations.some(function(decl) {
                            return /var\(/.test(decl.value);
                        });
                    } else {
                        var arr = ret.keyframes || ret.rules || [];
                        hasVarFunc = arr.some(function(obj) {
                            return (obj.declarations || []).some(function(decl) {
                                return /var\(/.test(decl.value);
                            });
                        });
                    }
                    return hasVarFunc ? ret : {};
                }
                return ret;
            }
        }
        function rule() {
            if (!settings.preserveStatic) {
                var balancedMatch$1 = balancedMatch("{", "}", css);
                if (balancedMatch$1) {
                    var hasVarDecl = /:(?:root|host)(?![.:#(])/.test(balancedMatch$1.pre) && /--\S*\s*:/.test(balancedMatch$1.body);
                    var hasVarFunc = /var\(/.test(balancedMatch$1.body);
                    if (!hasVarDecl && !hasVarFunc) {
                        css = css.slice(balancedMatch$1.end + 1);
                        return {};
                    }
                }
            }
            var sel = selector() || [];
            var decls = settings.preserveStatic ? declarations() : declarations().filter(function(decl) {
                var hasVarDecl = sel.some(function(s) {
                    return /:(?:root|host)(?![.:#(])/.test(s);
                }) && /^--\S/.test(decl.property);
                var hasVarFunc = /var\(/.test(decl.value);
                return hasVarDecl || hasVarFunc;
            });
            if (!sel.length) {
                error("selector missing");
            }
            return {
                type: "rule",
                selectors: sel,
                declarations: decls
            };
        }
        function rules(core) {
            if (!core && !open()) {
                return error("missing '{'");
            }
            var node;
            var rules = comments();
            while (css.length && (core || css[0] !== "}") && (node = at_rule() || rule())) {
                if (node.type) {
                    rules.push(node);
                }
                rules = rules.concat(comments());
            }
            if (!core && !close()) {
                return error("missing '}'");
            }
            return rules;
        }
        return {
            type: "stylesheet",
            stylesheet: {
                rules: rules(true),
                errors: errors
            }
        };
    }
    function parseVars(cssData) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var defaults = {
            parseHost: false,
            store: {},
            onWarning: function onWarning() {}
        };
        var settings = _extends({}, defaults, options);
        var reVarDeclSelectors = new RegExp(":".concat(settings.parseHost ? "host" : "root", "(?![.:#(])"));
        if (typeof cssData === "string") {
            cssData = parseCss(cssData, settings);
        }
        cssData.stylesheet.rules.forEach(function(rule) {
            if (rule.type !== "rule" || !rule.selectors.some(function(s) {
                return reVarDeclSelectors.test(s);
            })) {
                return;
            }
            rule.declarations.forEach(function(decl, i) {
                var prop = decl.property;
                var value = decl.value;
                if (prop && prop.indexOf("--") === 0) {
                    settings.store[prop] = value;
                }
            });
        });
        return settings.store;
    }
    function stringifyCss(tree) {
        var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var cb = arguments.length > 2 ? arguments[2] : undefined;
        var renderMethods = {
            charset: function charset(node) {
                return "@charset " + node.name + ";";
            },
            comment: function comment(node) {
                return node.comment.indexOf("__CSSVARSPONYFILL") === 0 ? "/*" + node.comment + "*/" : "";
            },
            "custom-media": function customMedia(node) {
                return "@custom-media " + node.name + " " + node.media + ";";
            },
            declaration: function declaration(node) {
                return node.property + ":" + node.value + ";";
            },
            document: function document(node) {
                return "@" + (node.vendor || "") + "document " + node.document + "{" + visit(node.rules) + "}";
            },
            "font-face": function fontFace(node) {
                return "@font-face" + "{" + visit(node.declarations) + "}";
            },
            host: function host(node) {
                return "@host" + "{" + visit(node.rules) + "}";
            },
            import: function _import(node) {
                return "@import " + node.name + ";";
            },
            keyframe: function keyframe(node) {
                return node.values.join(",") + "{" + visit(node.declarations) + "}";
            },
            keyframes: function keyframes(node) {
                return "@" + (node.vendor || "") + "keyframes " + node.name + "{" + visit(node.keyframes) + "}";
            },
            media: function media(node) {
                return "@media " + node.media + "{" + visit(node.rules) + "}";
            },
            namespace: function namespace(node) {
                return "@namespace " + node.name + ";";
            },
            page: function page(node) {
                return "@page " + (node.selectors.length ? node.selectors.join(", ") : "") + "{" + visit(node.declarations) + "}";
            },
            rule: function rule(node) {
                var decls = node.declarations;
                if (decls.length) {
                    return node.selectors.join(",") + "{" + visit(decls) + "}";
                }
            },
            supports: function supports(node) {
                return "@supports " + node.supports + "{" + visit(node.rules) + "}";
            }
        };
        function visit(nodes) {
            var buf = "";
            for (var i = 0; i < nodes.length; i++) {
                var n = nodes[i];
                if (cb) {
                    cb(n);
                }
                var txt = renderMethods[n.type](n);
                if (txt) {
                    buf += txt;
                    if (txt.length && n.selectors) {
                        buf += delim;
                    }
                }
            }
            return buf;
        }
        return visit(tree.stylesheet.rules);
    }
    function walkCss(node, fn) {
        node.rules.forEach(function(rule) {
            if (rule.rules) {
                walkCss(rule, fn);
                return;
            }
            if (rule.keyframes) {
                rule.keyframes.forEach(function(keyframe) {
                    if (keyframe.type === "keyframe") {
                        fn(keyframe.declarations, rule);
                    }
                });
                return;
            }
            if (!rule.declarations) {
                return;
            }
            fn(rule.declarations, node);
        });
    }
    var VAR_PROP_IDENTIFIER = "--";
    var VAR_FUNC_IDENTIFIER = "var";
    function transformCss(cssData) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var defaults = {
            preserveStatic: true,
            preserveVars: false,
            variables: {},
            onWarning: function onWarning() {}
        };
        var settings = _extends({}, defaults, options);
        if (typeof cssData === "string") {
            cssData = parseCss(cssData, settings);
        }
        walkCss(cssData.stylesheet, function(declarations, node) {
            for (var i = 0; i < declarations.length; i++) {
                var decl = declarations[i];
                var type = decl.type;
                var prop = decl.property;
                var value = decl.value;
                if (type !== "declaration") {
                    continue;
                }
                if (!settings.preserveVars && prop && prop.indexOf(VAR_PROP_IDENTIFIER) === 0) {
                    declarations.splice(i, 1);
                    i--;
                    continue;
                }
                if (value.indexOf(VAR_FUNC_IDENTIFIER + "(") !== -1) {
                    var resolvedValue = resolveValue(value, settings);
                    if (resolvedValue !== decl.value) {
                        resolvedValue = fixNestedCalc(resolvedValue);
                        if (!settings.preserveVars) {
                            decl.value = resolvedValue;
                        } else {
                            declarations.splice(i, 0, {
                                type: type,
                                property: prop,
                                value: resolvedValue
                            });
                            i++;
                        }
                    }
                }
            }
        });
        return stringifyCss(cssData);
    }
    function fixNestedCalc(value) {
        var reCalcVal = /calc\(([^)]+)\)/g;
        (value.match(reCalcVal) || []).forEach(function(match) {
            var newVal = "calc".concat(match.split("calc").join(""));
            value = value.replace(match, newVal);
        });
        return value;
    }
    function resolveValue(value) {
        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var __recursiveFallback = arguments.length > 2 ? arguments[2] : undefined;
        if (value.indexOf("var(") === -1) {
            return value;
        }
        var valueData = balancedMatch("(", ")", value);
        function resolveFunc(value) {
            var name = value.split(",")[0].replace(/[\s\n\t]/g, "");
            var fallback = (value.match(/(?:\s*,\s*){1}(.*)?/) || [])[1];
            var match = Object.prototype.hasOwnProperty.call(settings.variables, name) ? String(settings.variables[name]) : undefined;
            var replacement = match || (fallback ? String(fallback) : undefined);
            var unresolvedFallback = __recursiveFallback || value;
            if (!match) {
                settings.onWarning('variable "'.concat(name, '" is undefined'));
            }
            if (replacement && replacement !== "undefined" && replacement.length > 0) {
                return resolveValue(replacement, settings, unresolvedFallback);
            } else {
                return "var(".concat(unresolvedFallback, ")");
            }
        }
        if (!valueData) {
            if (value.indexOf("var(") !== -1) {
                settings.onWarning('missing closing ")" in the value "'.concat(value, '"'));
            }
            return value;
        } else if (valueData.pre.slice(-3) === "var") {
            var isEmptyVarFunc = valueData.body.trim().length === 0;
            if (isEmptyVarFunc) {
                settings.onWarning("var() must contain a non-whitespace string");
                return value;
            } else {
                return valueData.pre.slice(0, -3) + resolveFunc(valueData.body) + resolveValue(valueData.post, settings);
            }
        } else {
            return valueData.pre + "(".concat(resolveValue(valueData.body, settings), ")") + resolveValue(valueData.post, settings);
        }
    }
    var isBrowser = typeof window !== "undefined";
    var isNativeSupport = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)");
    var counters = {
        group: 0,
        job: 0
    };
    var defaults = {
        rootElement: isBrowser ? document : null,
        shadowDOM: false,
        include: "style,link[rel=stylesheet]",
        exclude: "",
        variables: {},
        onlyLegacy: true,
        preserveStatic: true,
        preserveVars: false,
        silent: false,
        updateDOM: true,
        updateURLs: true,
        watch: null,
        onBeforeSend: function onBeforeSend() {},
        onWarning: function onWarning() {},
        onError: function onError() {},
        onSuccess: function onSuccess() {},
        onComplete: function onComplete() {}
    };
    var regex = {
        cssComments: /\/\*[\s\S]+?\*\//g,
        cssKeyframes: /@(?:-\w*-)?keyframes/,
        cssMediaQueries: /@media[^{]+\{([\s\S]+?})\s*}/g,
        cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
        cssVarDeclRules: /(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,
        cssVarDecls: /(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,
        cssVarFunc: /var\(\s*--[\w-]/,
        cssVars: /(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/
    };
    var variableStore = {
        dom: {},
        job: {},
        user: {}
    };
    var cssVarsIsRunning = false;
    var cssVarsObserver = null;
    var cssVarsSrcNodeCount = 0;
    var debounceTimer = null;
    var isShadowDOMReady = false;
    /**
     * Fetches, parses, and transforms CSS custom properties from specified
     * <style> and <link> elements into static values, then appends a new <style>
     * element with static values to the DOM to provide CSS custom property
     * compatibility for legacy browsers. Also provides a single interface for
     * live updates of runtime values in both modern and legacy browsers.
     *
     * @preserve
     * @param {object}   [options] Options object
     * @param {object}   [options.rootElement=document] Root element to traverse for
     *                   <link> and <style> nodes
     * @param {boolean}  [options.shadowDOM=false] Determines if shadow DOM <link>
     *                   and <style> nodes will be processed.
     * @param {string}   [options.include="style,link[rel=stylesheet]"] CSS selector
     *                   matching <link re="stylesheet"> and <style> nodes to
     *                   process
     * @param {string}   [options.exclude] CSS selector matching <link
     *                   rel="stylehseet"> and <style> nodes to exclude from those
     *                   matches by options.include
     * @param {object}   [options.variables] A map of custom property name/value
     *                   pairs. Property names can omit or include the leading
     *                   double-hyphen (—), and values specified will override
     *                   previous values
     * @param {boolean}  [options.onlyLegacy=true] Determines if the ponyfill will
     *                   only generate legacy-compatible CSS in browsers that lack
     *                   native support (i.e., legacy browsers)
     * @param {boolean}  [options.preserveStatic=true] Determines if CSS
     *                   declarations that do not reference a custom property will
     *                   be preserved in the transformed CSS
     * @param {boolean}  [options.preserveVars=false] Determines if CSS custom
     *                   property declarations will be preserved in the transformed
     *                   CSS
     * @param {boolean}  [options.silent=false] Determines if warning and error
     *                   messages will be displayed on the console
     * @param {boolean}  [options.updateDOM=true] Determines if the ponyfill will
     *                   update the DOM after processing CSS custom properties
     * @param {boolean}  [options.updateURLs=true] Determines if the ponyfill will
     *                   convert relative url() paths to absolute urls
     * @param {boolean}  [options.watch=false] Determines if a MutationObserver will
     *                   be created that will execute the ponyfill when a <link> or
     *                   <style> DOM mutation is observed
     * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
     *                   1) the XHR object, 2) source node reference, and 3) the
     *                   source URL as arguments
     * @param {function} [options.onWarning] Callback after each CSS parsing warning
     *                   has occurred. Passes 1) a warning message as an argument.
     * @param {function} [options.onError] Callback after a CSS parsing error has
     *                   occurred or an XHR request has failed. Passes 1) an error
     *                   message, and 2) source node reference, 3) xhr, and 4 url as
     *                   arguments.
     * @param {function} [options.onSuccess] Callback after CSS data has been
     *                   collected from each node and before CSS custom properties
     *                   have been transformed. Allows modifying the CSS data before
     *                   it is transformed by returning any string value (or false
     *                   to skip). Passes 1) CSS text, 2) source node reference, and
     *                   3) the source URL as arguments.
     * @param {function} [options.onComplete] Callback after all CSS has been
     *                   processed, legacy-compatible CSS has been generated, and
     *                   (optionally) the DOM has been updated. Passes 1) a CSS
     *                   string with CSS variable values resolved, 2) an array of
     *                   output <style> node references that have been appended to
     *                   the DOM, 3) an object containing all custom properies names
     *                   and values, and 4) the ponyfill execution time in
     *                   milliseconds.
     *
     * @example
     *
     *   cssVars({
     *     rootElement   : document,
     *     shadowDOM     : false,
     *     include       : 'style,link[rel="stylesheet"]',
     *     exclude       : '',
     *     variables     : {},
     *     onlyLegacy    : true,
     *     preserveStatic: true,
     *     preserveVars  : false,
     *     silent        : false,
     *     updateDOM     : true,
     *     updateURLs    : true,
     *     watch         : false,
     *     onBeforeSend(xhr, node, url) {},
     *     onWarning(message) {},
     *     onError(message, node, xhr, url) {},
     *     onSuccess(cssText, node, url) {},
     *     onComplete(cssText, styleNode, cssVariables, benchmark) {}
     *   });
     */    function cssVars() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var msgPrefix = "cssVars(): ";
        var settings = _extends({}, defaults, options);
        function handleError(message, sourceNode, xhr, url) {
            if (!settings.silent && window.console) {
                console.error("".concat(msgPrefix).concat(message, "\n"), sourceNode);
            }
            settings.onError(message, sourceNode, xhr, url);
        }
        function handleWarning(message) {
            if (!settings.silent && window.console) {
                console.warn("".concat(msgPrefix).concat(message));
            }
            settings.onWarning(message);
        }
        if (!isBrowser) {
            return;
        }
        if (settings.watch) {
            settings.watch = defaults.watch;
            addMutationObserver(settings);
            cssVars(settings);
            return;
        } else if (settings.watch === false && cssVarsObserver) {
            cssVarsObserver.disconnect();
            cssVarsObserver = null;
        }
        if (!settings.__benchmark) {
            if (cssVarsIsRunning === settings.rootElement) {
                cssVarsDebounced(options);
                return;
            }
            settings.__benchmark = getTimeStamp();
            settings.exclude = [ cssVarsObserver ? '[data-cssvars]:not([data-cssvars=""])' : '[data-cssvars="out"]', settings.exclude ].filter(function(selector) {
                return selector;
            }).join(",");
            settings.variables = fixVarNames(settings.variables);
            if (!cssVarsObserver) {
                var outNodes = Array.apply(null, settings.rootElement.querySelectorAll('[data-cssvars="out"]'));
                outNodes.forEach(function(outNode) {
                    var dataGroup = outNode.getAttribute("data-cssvars-group");
                    var srcNode = dataGroup ? settings.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(dataGroup, '"]')) : null;
                    if (!srcNode) {
                        outNode.parentNode.removeChild(outNode);
                    }
                });
                if (cssVarsSrcNodeCount) {
                    var srcNodes = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])');
                    if (srcNodes.length < cssVarsSrcNodeCount) {
                        cssVarsSrcNodeCount = srcNodes.length;
                        variableStore.dom = {};
                    }
                }
            }
        }
        if (document.readyState !== "loading") {
            if (isNativeSupport && settings.onlyLegacy) {
                if (settings.updateDOM) {
                    var targetElm = settings.rootElement.host || (settings.rootElement === document ? document.documentElement : settings.rootElement);
                    Object.keys(settings.variables).forEach(function(key) {
                        targetElm.style.setProperty(key, settings.variables[key]);
                    });
                }
            } else if (!isShadowDOMReady && (settings.shadowDOM || settings.rootElement.shadowRoot || settings.rootElement.host)) {
                getCssData({
                    rootElement: defaults.rootElement,
                    include: defaults.include,
                    exclude: settings.exclude,
                    onSuccess: function onSuccess(cssText, node, url) {
                        cssText = cssText.replace(regex.cssComments, "").replace(regex.cssMediaQueries, "");
                        cssText = (cssText.match(regex.cssVarDeclRules) || []).join("");
                        return cssText || false;
                    },
                    onComplete: function onComplete(cssText, cssArray, nodeArray) {
                        parseVars(cssText, {
                            store: variableStore.dom,
                            onWarning: handleWarning
                        });
                        isShadowDOMReady = true;
                        cssVars(settings);
                    }
                });
            } else {
                cssVarsIsRunning = settings.rootElement;
                getCssData({
                    rootElement: settings.rootElement,
                    include: settings.include,
                    exclude: settings.exclude,
                    onBeforeSend: settings.onBeforeSend,
                    onError: function onError(xhr, node, url) {
                        var responseUrl = xhr.responseURL || getFullUrl$1(url, location.href);
                        var statusText = xhr.statusText ? "(".concat(xhr.statusText, ")") : "Unspecified Error" + (xhr.status === 0 ? " (possibly CORS related)" : "");
                        var errorMsg = "CSS XHR Error: ".concat(responseUrl, " ").concat(xhr.status, " ").concat(statusText);
                        handleError(errorMsg, node, xhr, responseUrl);
                    },
                    onSuccess: function onSuccess(cssText, node, url) {
                        var returnVal = settings.onSuccess(cssText, node, url);
                        cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;
                        if (settings.updateURLs) {
                            cssText = fixRelativeCssUrls(cssText, url);
                        }
                        return cssText;
                    },
                    onComplete: function onComplete(cssText, cssArray) {
                        var nodeArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
                        var jobVars = {};
                        var varStore = settings.updateDOM ? variableStore.dom : Object.keys(variableStore.job).length ? variableStore.job : variableStore.job = JSON.parse(JSON.stringify(variableStore.dom));
                        var hasVarChange = false;
                        nodeArray.forEach(function(node, i) {
                            if (regex.cssVars.test(cssArray[i])) {
                                try {
                                    var cssTree = parseCss(cssArray[i], {
                                        preserveStatic: settings.preserveStatic,
                                        removeComments: true
                                    });
                                    parseVars(cssTree, {
                                        parseHost: Boolean(settings.rootElement.host),
                                        store: jobVars,
                                        onWarning: handleWarning
                                    });
                                    node.__cssVars = {
                                        tree: cssTree
                                    };
                                } catch (err) {
                                    handleError(err.message, node);
                                }
                            }
                        });
                        if (settings.updateDOM) {
                            _extends(variableStore.user, settings.variables);
                        }
                        _extends(jobVars, settings.variables);
                        hasVarChange = Boolean((document.querySelector("[data-cssvars]") || Object.keys(variableStore.dom).length) && Object.keys(jobVars).some(function(name) {
                            return jobVars[name] !== varStore[name];
                        }));
                        _extends(varStore, variableStore.user, jobVars);
                        if (hasVarChange) {
                            resetCssNodes(settings.rootElement);
                            cssVars(settings);
                        } else {
                            var outCssArray = [];
                            var outNodeArray = [];
                            var hasKeyframesWithVars = false;
                            variableStore.job = {};
                            if (settings.updateDOM) {
                                counters.job++;
                            }
                            nodeArray.forEach(function(node) {
                                var isSkip = !node.__cssVars;
                                if (node.__cssVars) {
                                    try {
                                        transformCss(node.__cssVars.tree, _extends({}, settings, {
                                            variables: varStore,
                                            onWarning: handleWarning
                                        }));
                                        var outCss = stringifyCss(node.__cssVars.tree);
                                        if (settings.updateDOM) {
                                            if (!node.getAttribute("data-cssvars")) {
                                                node.setAttribute("data-cssvars", "src");
                                            }
                                            if (outCss.length) {
                                                var dataGroup = node.getAttribute("data-cssvars-group") || ++counters.group;
                                                var outCssNoSpaces = outCss.replace(/\s/g, "");
                                                var outNode = settings.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(dataGroup, '"]')) || document.createElement("style");
                                                hasKeyframesWithVars = hasKeyframesWithVars || regex.cssKeyframes.test(outCss);
                                                if (!outNode.hasAttribute("data-cssvars")) {
                                                    outNode.setAttribute("data-cssvars", "out");
                                                }
                                                if (outCssNoSpaces === node.textContent.replace(/\s/g, "")) {
                                                    isSkip = true;
                                                    if (outNode && outNode.parentNode) {
                                                        node.removeAttribute("data-cssvars-group");
                                                        outNode.parentNode.removeChild(outNode);
                                                    }
                                                } else if (outCssNoSpaces !== outNode.textContent.replace(/\s/g, "")) {
                                                    [ node, outNode ].forEach(function(n) {
                                                        n.setAttribute("data-cssvars-job", counters.job);
                                                        n.setAttribute("data-cssvars-group", dataGroup);
                                                    });
                                                    outNode.textContent = outCss;
                                                    outCssArray.push(outCss);
                                                    outNodeArray.push(outNode);
                                                    if (!outNode.parentNode) {
                                                        node.parentNode.insertBefore(outNode, node.nextSibling);
                                                    }
                                                }
                                            }
                                        } else {
                                            if (node.textContent.replace(/\s/g, "") !== outCss) {
                                                outCssArray.push(outCss);
                                            }
                                        }
                                    } catch (err) {
                                        handleError(err.message, node);
                                    }
                                }
                                if (isSkip) {
                                    node.setAttribute("data-cssvars", "skip");
                                }
                                if (!node.hasAttribute("data-cssvars-job")) {
                                    node.setAttribute("data-cssvars-job", counters.job);
                                }
                            });
                            cssVarsSrcNodeCount = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length;
                            if (settings.shadowDOM) {
                                var elms = [ settings.rootElement ].concat(_toConsumableArray(settings.rootElement.querySelectorAll("*")));
                                for (var i = 0, elm; elm = elms[i]; ++i) {
                                    if (elm.shadowRoot && elm.shadowRoot.querySelector("style")) {
                                        var shadowSettings = _extends({}, settings, {
                                            rootElement: elm.shadowRoot
                                        });
                                        cssVars(shadowSettings);
                                    }
                                }
                            }
                            if (settings.updateDOM && hasKeyframesWithVars) {
                                fixKeyframes(settings.rootElement);
                            }
                            cssVarsIsRunning = false;
                            settings.onComplete(outCssArray.join(""), outNodeArray, JSON.parse(JSON.stringify(varStore)), getTimeStamp() - settings.__benchmark);
                        }
                    }
                });
            }
        } else {
            document.addEventListener("DOMContentLoaded", function init(evt) {
                cssVars(options);
                document.removeEventListener("DOMContentLoaded", init);
            });
        }
    }
    cssVars.reset = function() {
        cssVarsIsRunning = false;
        if (cssVarsObserver) {
            cssVarsObserver.disconnect();
            cssVarsObserver = null;
        }
        cssVarsSrcNodeCount = 0;
        debounceTimer = null;
        isShadowDOMReady = false;
        for (var prop in variableStore) {
            variableStore[prop] = {};
        }
    };
    function addMutationObserver(settings) {
        function isLink(node) {
            var isStylesheet = node.tagName === "LINK" && (node.getAttribute("rel") || "").indexOf("stylesheet") !== -1;
            return isStylesheet && !node.disabled;
        }
        function isStyle(node) {
            return node.tagName === "STYLE" && !node.disabled;
        }
        function isValidAddMutation(mutationNodes) {
            return Array.apply(null, mutationNodes).some(function(node) {
                var isElm = node.nodeType === 1;
                var hasAttr = isElm && node.hasAttribute("data-cssvars");
                var isStyleWithVars = isStyle(node) && regex.cssVars.test(node.textContent);
                var isValid = !hasAttr && (isLink(node) || isStyleWithVars);
                return isValid;
            });
        }
        function isValidRemoveMutation(mutationNodes) {
            return Array.apply(null, mutationNodes).some(function(node) {
                var isElm = node.nodeType === 1;
                var isOutNode = isElm && node.getAttribute("data-cssvars") === "out";
                var isSrcNode = isElm && node.getAttribute("data-cssvars") === "src";
                var isValid = isSrcNode;
                if (isSrcNode || isOutNode) {
                    var dataGroup = node.getAttribute("data-cssvars-group");
                    var orphanNode = settings.rootElement.querySelector('[data-cssvars-group="'.concat(dataGroup, '"]'));
                    if (isSrcNode) {
                        resetCssNodes(settings.rootElement);
                        variableStore.dom = {};
                    }
                    if (orphanNode) {
                        orphanNode.parentNode.removeChild(orphanNode);
                    }
                }
                return isValid;
            });
        }
        if (!window.MutationObserver) {
            return;
        }
        if (cssVarsObserver) {
            cssVarsObserver.disconnect();
            cssVarsObserver = null;
        }
        cssVarsObserver = new MutationObserver(function(mutations) {
            var hasValidMutation = mutations.some(function(mutation) {
                var isValid = false;
                if (mutation.type === "attributes") {
                    isValid = isLink(mutation.target);
                } else if (mutation.type === "childList") {
                    isValid = isValidAddMutation(mutation.addedNodes) || isValidRemoveMutation(mutation.removedNodes);
                }
                return isValid;
            });
            if (hasValidMutation) {
                cssVars(settings);
            }
        });
        cssVarsObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [ "disabled", "href" ],
            childList: true,
            subtree: true
        });
    }
    function cssVarsDebounced(settings) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function() {
            settings.__benchmark = null;
            cssVars(settings);
        }, delay);
    }
    function fixKeyframes(rootElement) {
        var animationNameProp = [ "animation-name", "-moz-animation-name", "-webkit-animation-name" ].filter(function(prop) {
            return getComputedStyle(document.body)[prop];
        })[0];
        if (animationNameProp) {
            var allNodes = rootElement.getElementsByTagName("*");
            var keyframeNodes = [];
            var nameMarker = "__CSSVARSPONYFILL-KEYFRAMES__";
            for (var i = 0, len = allNodes.length; i < len; i++) {
                var node = allNodes[i];
                var animationName = getComputedStyle(node)[animationNameProp];
                if (animationName !== "none") {
                    node.style[animationNameProp] += nameMarker;
                    keyframeNodes.push(node);
                }
            }
            void document.body.offsetHeight;
            for (var _i = 0, _len = keyframeNodes.length; _i < _len; _i++) {
                var nodeStyle = keyframeNodes[_i].style;
                nodeStyle[animationNameProp] = nodeStyle[animationNameProp].replace(nameMarker, "");
            }
        }
    }
    function fixRelativeCssUrls(cssText, baseUrl) {
        var cssUrls = cssText.replace(regex.cssComments, "").match(regex.cssUrls) || [];
        cssUrls.forEach(function(cssUrl) {
            var oldUrl = cssUrl.replace(regex.cssUrls, "$1");
            var newUrl = getFullUrl$1(oldUrl, baseUrl);
            cssText = cssText.replace(cssUrl, cssUrl.replace(oldUrl, newUrl));
        });
        return cssText;
    }
    function fixVarNames() {
        var varObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var reLeadingHyphens = /^-{2}/;
        return Object.keys(varObj).reduce(function(obj, value) {
            var key = reLeadingHyphens.test(value) ? value : "--".concat(value.replace(/^-+/, ""));
            obj[key] = varObj[value];
            return obj;
        }, {});
    }
    function getFullUrl$1(url) {
        var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
        var d = document.implementation.createHTMLDocument("");
        var b = d.createElement("base");
        var a = d.createElement("a");
        d.head.appendChild(b);
        d.body.appendChild(a);
        b.href = base;
        a.href = url;
        return a.href;
    }
    function getTimeStamp() {
        return isBrowser && (window.performance || {}).now ? window.performance.now() : new Date().getTime();
    }
    function resetCssNodes(rootElement) {
        var resetNodes = Array.apply(null, rootElement.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]'));
        resetNodes.forEach(function(node) {
            return node.setAttribute("data-cssvars", "");
        });
    }
    function pluginFixCoverHeader(hook, vm) {
        hook.doneEach(function() {
            var coverHeaderLink = document.querySelector(".cover h1 > a");
            if (coverHeaderLink) {
                coverHeaderLink.parentNode.innerHTML = coverHeaderLink.innerHTML;
            }
        });
    }
    function wrapTextNodes(elm, wrapTag) {
        var tabIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var hasTextNodes = elm.childNodes[0].nodeType === 3;
        var menuElm = elm.querySelector("ul");
        if (hasTextNodes && menuElm) {
            var hasChildWithTabIndex = Array.apply(null, elm.children).some(function(child) {
                return child.tabIndex > -1;
            }).length;
            if (!hasChildWithTabIndex) {
                var wrapElm = document.createElement("span");
                if (tabIndex !== null) {
                    wrapElm.setAttribute("tabindex", tabIndex);
                }
                elm.insertBefore(wrapElm, menuElm);
                while (elm.childNodes[0] !== wrapElm) {
                    wrapElm.appendChild(elm.childNodes[0]);
                }
            }
        }
    }
    function pluginFixNavbarMenus(hook, vm) {
        hook.doneEach(function() {
            var navbarItems = Array.apply(null, document.querySelectorAll("body > nav.app-nav > ul > li"));
            var sidebarItems = Array.apply(null, document.querySelectorAll(".sidebar > nav > ul > li"));
            navbarItems.forEach(function(item) {
                var focusClassName = "focus-within";
                wrapTextNodes(item, "span", 0);
                item.addEventListener("focusin", function(evt) {
                    if (item.contains(document.activeElement)) {
                        item.classList.add(focusClassName);
                    }
                });
                item.addEventListener("focusout", function(evt) {
                    if (!item.contains(document.activeElement)) {
                        item.classList.remove(focusClassName);
                    }
                });
            });
            sidebarItems.forEach(function(item) {
                wrapTextNodes(item, "span");
            });
        });
    }
    function pluginFixPrismThemes(hook, vm) {
        hook.doneEach(function() {
            var preElms = Array.apply(null, document.querySelectorAll("pre[data-lang]"));
            preElms.forEach(function(preElm) {
                var codeElm = preElm.querySelector("code");
                var prismClass = "language-".concat(preElm.getAttribute("data-lang"));
                preElm.classList.add(prismClass);
                codeElm.classList.add(prismClass);
            });
        });
    }
    function pluginFixReadyState(hook, vm) {
        hook.mounted(function() {
            var contentElm = document.querySelector(".content");
            var readyCheck = setInterval(function() {
                if (contentElm.textContent.length) {
                    document.body.classList.add("ready-fix");
                    clearInterval(readyCheck);
                }
            }, 250);
        });
        hook.ready(function() {
            document.body.classList.add("ready-fix");
        });
    }
    function pluginFixSearchClearButton(hook, vm) {
        hook.ready(function() {
            var oldButton = document.querySelector(".sidebar .search .clear-button");
            if (oldButton) {
                var newButton = document.createElement("button");
                newButton.className = "clear-button";
                newButton.setAttribute("aria-label", "Clear search");
                newButton.innerHTML = '\n                <svg width="16" height="16" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n                    <circle cx="8" cy="8" r="8" fill="black"></circle>\n                    <path stroke="white" stroke-width="1.5" d="M4.5,4.5,11.5,11.5" vector-effect="non-scaling-stroke"></path>\n                    <path stroke="white" stroke-width="1.5" d="M4.5,11.5,11.5,4.5" vector-effect="non-scaling-stroke"></path>\n                </svg>\n            ';
                oldButton.parentNode.replaceChild(newButton, oldButton);
            }
        });
    }
    function pluginFixSearchResults(hook, vm) {
        hook.ready(function() {
            var searchElm = document.querySelector(".sidebar .search");
            var searchInputElm = document.querySelector(".sidebar .search input[type=search]");
            var searchClearElm = document.querySelector(".sidebar .search .clear-button");
            if (searchElm) {
                searchElm.addEventListener("click", function(evt) {
                    var isClearButton = evt.target === searchClearElm || searchClearElm.contains(evt.target);
                    if (isClearButton) {
                        searchElm.classList.remove("show");
                        searchInputElm.focus();
                    }
                });
            }
            if (searchInputElm) {
                searchInputElm.addEventListener("input", function(evt) {
                    if (searchInputElm.value.length) {
                        searchElm.classList.add("show");
                    } else {
                        searchElm.classList.remove("show");
                    }
                });
            }
        });
    }
    function pluginFixZoomImage(hook, vm) {
        var matchesSelector = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector;
        hook.doneEach(function() {
            var className = "medium-zoom-image";
            var imageElms = Array.apply(null, document.querySelectorAll(".".concat(className)));
            imageElms.forEach(function(elm) {
                var isLinkImage = matchesSelector.call(elm, "a img");
                var isContentImage = matchesSelector.call(elm, ".content img");
                if (isLinkImage || !isContentImage) {
                    var cloneElm = elm.cloneNode(true);
                    elm.parentNode.replaceChild(cloneElm, elm);
                    cloneElm.classList.remove(className);
                }
            });
        });
    }
    function pluginReadyTransition(hook, vm) {
        hook.init(function() {
            var isEnabled = ((window.$docsify || {}).themeable || {}).readyTransition !== false;
            if (isEnabled) {
                document.body.classList.add("ready-transition");
                setTimeout(function() {
                    document.body.classList.add("ready-spinner");
                }, 1);
                hook.ready(function() {
                    var mainElm = document.querySelector("main");
                    mainElm.addEventListener("transitionend", function cb(evt) {
                        document.body.classList.remove("ready-transition");
                        document.body.classList.remove("ready-spinner");
                        mainElm.removeEventListener("transitionend", cb);
                    });
                });
            }
        });
    }
    function pluginResponsiveTables(hook, vm) {
        hook.init(function() {
            var isEnabled = ((window.$docsify || {}).themeable || {}).responsiveTables !== false;
            if (isEnabled) {
                var markdown = window.$docsify.markdown = window.$docsify.markdown || {};
                var renderer = markdown.renderer = markdown.renderer || {};
                markdown.smartypants = markdown.smartypants || true;
                renderer.table = renderer.table || function(header, body) {
                    var tableHtml = '\n                    <div class="table-wrapper">\n                        <table>\n                            <thead>'.concat(header, "</thead>\n                            <tbody>").concat(body, "</tbody>\n                        </table>\n                    </div>");
                    try {
                        var div = document.createElement("div");
                        var styleElm = document.head.appendChild(document.createElement("style"));
                        var styleSheet = styleElm.sheet;
                        var tableId = "_" + Math.random().toString(36).substr(2, 9);
                        div.innerHTML = tableHtml;
                        var tableElm = div.querySelector("table");
                        var thElms = Array.apply(null, tableElm.getElementsByTagName("th"));
                        var thTitles = thElms.map(function(thElm) {
                            return thElm.innerHTML.replace("&nbsp;", " ");
                        });
                        thTitles.forEach(function(title, i) {
                            var rule = "#".concat(tableId, " td:nth-child(").concat(i + 1, ')::before{content:"').concat(title, '";}');
                            styleSheet.insertRule(rule, styleSheet.cssRules.length);
                        });
                        tableElm.id = tableId;
                        tableHtml = div.innerHTML;
                    } catch (e) {
                        console.log("Failed to render responsive table: " + e);
                    }
                    return tableHtml;
                };
            }
        });
    }
    var version = "0.8.0";
    function ifLessThanVersion(version, pluginFn) {
        var docsifyVersion = Number("0." + ((window.Docsify || {}).version || "0").replace(/\./g, ""));
        var lessThanVersion = Number("0." + version.replace(/\./g, ""));
        return docsifyVersion < lessThanVersion ? pluginFn : null;
    }
    if (window) {
        var cssVarsOptions = {
            onlyLegacy: !/Edge\/1[5678]/i.test(navigator.userAgent),
            silent: true
        };
        cssVars(cssVarsOptions);
        document.body.setAttribute("data-platform", navigator.platform);
        window.$docsify = window.$docsify || {};
        window.$docsify.plugins = [].concat([ pluginReadyTransition, pluginFixCoverHeader, pluginFixNavbarMenus, pluginFixPrismThemes, pluginFixReadyState, pluginResponsiveTables ], window.$docsify.plugins || [], [ pluginFixSearchClearButton, ifLessThanVersion("4.8.0", pluginFixSearchResults), ifLessThanVersion("4.8.0", pluginFixZoomImage) ]).filter(function(plugin) {
            return plugin !== null;
        });
        window.$docsify.search = window.$docsify.search || {};
        window.$docsify.search.hideOtherSidebarContent = true;
        window.$docsify.themeable = window.$docsify.themeable || {};
        window.$docsify.themeable.version = version;
        window.$docsify.themeable.util = {
            cssVars: function cssVars$1() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cssVarsOptions;
                cssVars(options);
            }
        };
    }
})();
//# sourceMappingURL=docsify-themeable.js.map


/***/ }),

/***/ "./node_modules/docsify/lib/docsify.js":
/*!*********************************************!*\
  !*** ./node_modules/docsify/lib/docsify.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function () {
  /**
   * Create a cached version of a pure function.
   */
  function cached(fn) {
    var cache = Object.create(null);
    return function (str) {
      var key = isPrimitive(str) ? str : JSON.stringify(str);
      var hit = cache[key];
      return hit || (cache[key] = fn(str))
    }
  }

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenate = cached(function (str) {
    return str.replace(/([A-Z])/g, function (m) { return '-' + m.toLowerCase(); })
  });

  var hasOwn = Object.prototype.hasOwnProperty;

  /**
   * Simple Object.assign polyfill
   */
  var merge =
    Object.assign ||
    function (to) {
      var arguments$1 = arguments;

      for (var i = 1; i < arguments.length; i++) {
        var from = Object(arguments$1[i]);

        for (var key in from) {
          if (hasOwn.call(from, key)) {
            to[key] = from[key];
          }
        }
      }

      return to
    };

  /**
   * Check if value is primitive
   */
  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number'
  }

  /**
   * Perform no operation.
   */
  function noop() {}

  /**
   * Check if value is function
   */
  function isFn(obj) {
    return typeof obj === 'function'
  }

  /**
   * escape String
   */
  function escapeString(string) {
    var entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#x2F;'
    };

    return String(string).replace(/[&<>"'/]/g, function (s) { return entityMap[s]; })
  }

  function config () {
    var config = merge(
      {
        el: '#app',
        repo: '',
        maxLevel: 6,
        subMaxLevel: 0,
        loadSidebar: null,
        loadNavbar: null,
        homepage: 'README.md',
        coverpage: '',
        basePath: '',
        auto2top: false,
        name: '',
        themeColor: '',
        nameLink: window.location.pathname,
        autoHeader: false,
        executeScript: null,
        noEmoji: false,
        ga: '',
        ext: '.md',
        mergeNavbar: false,
        formatUpdated: '',
        // this config for the links inside markdown
        externalLinkTarget: '_blank',
        // this config for the corner 
        cornerExternalLinkTarget: '_blank',
        externalLinkRel: 'noopener',
        routerMode: 'hash',
        noCompileLinks: [],
        relativePath: false
      },
      window.$docsify
    );

    var script =
      document.currentScript ||
      [].slice
        .call(document.getElementsByTagName('script'))
        .filter(function (n) { return /docsify\./.test(n.src); })[0];

    if (script) {
      for (var prop in config) {
        if (hasOwn.call(config, prop)) {
          var val = script.getAttribute('data-' + hyphenate(prop));

          if (isPrimitive(val)) {
            config[prop] = val === '' ? true : val;
          }
        }
      }

      if (config.loadSidebar === true) {
        config.loadSidebar = '_sidebar' + config.ext;
      }
      if (config.loadNavbar === true) {
        config.loadNavbar = '_navbar' + config.ext;
      }
      if (config.coverpage === true) {
        config.coverpage = '_coverpage' + config.ext;
      }
      if (config.repo === true) {
        config.repo = '';
      }
      if (config.name === true) {
        config.name = '';
      }
    }

    window.$docsify = config;

    return config
  }

  function initLifecycle(vm) {
    var hooks = [
      'init',
      'mounted',
      'beforeEach',
      'afterEach',
      'doneEach',
      'ready'
    ];

    vm._hooks = {};
    vm._lifecycle = {};
    hooks.forEach(function (hook) {
      var arr = (vm._hooks[hook] = []);
      vm._lifecycle[hook] = function (fn) { return arr.push(fn); };
    });
  }

  function callHook(vm, hook, data, next) {
    if ( next === void 0 ) next = noop;

    var queue = vm._hooks[hook];

    var step = function (index) {
      var hook = queue[index];
      if (index >= queue.length) {
        next(data);
      } else if (typeof hook === 'function') {
        if (hook.length === 2) {
          hook(data, function (result) {
            data = result;
            step(index + 1);
          });
        } else {
          var result = hook(data);
          data = result === undefined ? data : result;
          step(index + 1);
        }
      } else {
        step(index + 1);
      }
    };

    step(0);
  }

  var inBrowser = !false;

  var isMobile =  document.body.clientWidth <= 600;

  /**
   * @see https://github.com/MoOx/pjax/blob/master/lib/is-supported.js
   */
  var supportsPushState =
    
    (function () {
      // Borrowed wholesale from https://github.com/defunkt/jquery-pjax
      return (
        window.history &&
        window.history.pushState &&
        window.history.replaceState &&
        // PushState isn’t reliable on iOS until 5.
        !navigator.userAgent.match(
          /((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/
        )
      )
    })();

  var cacheNode = {};

  /**
   * Get Node
   * @param  {String|Element} el
   * @param  {Boolean} noCache
   * @return {Element}
   */
  function getNode(el, noCache) {
    if ( noCache === void 0 ) noCache = false;

    if (typeof el === 'string') {
      if (typeof window.Vue !== 'undefined') {
        return find(el)
      }
      el = noCache ? find(el) : cacheNode[el] || (cacheNode[el] = find(el));
    }

    return el
  }

  var $ =  document;

  var body =  $.body;

  var head =  $.head;

  /**
   * Find element
   * @example
   * find('nav') => document.querySelector('nav')
   * find(nav, 'a') => nav.querySelector('a')
   */
  function find(el, node) {
    return node ? el.querySelector(node) : $.querySelector(el)
  }

  /**
   * Find all elements
   * @example
   * findAll('a') => [].slice.call(document.querySelectorAll('a'))
   * findAll(nav, 'a') => [].slice.call(nav.querySelectorAll('a'))
   */
  function findAll(el, node) {
    return [].slice.call(
      node ? el.querySelectorAll(node) : $.querySelectorAll(el)
    )
  }

  function create(node, tpl) {
    node = $.createElement(node);
    if (tpl) {
      node.innerHTML = tpl;
    }
    return node
  }

  function appendTo(target, el) {
    return target.appendChild(el)
  }

  function before(target, el) {
    return target.insertBefore(el, target.children[0])
  }

  function on(el, type, handler) {
    isFn(type) ?
      window.addEventListener(el, type) :
      el.addEventListener(type, handler);
  }

  function off(el, type, handler) {
    isFn(type) ?
      window.removeEventListener(el, type) :
      el.removeEventListener(type, handler);
  }

  /**
   * Toggle class
   *
   * @example
   * toggleClass(el, 'active') => el.classList.toggle('active')
   * toggleClass(el, 'add', 'active') => el.classList.add('active')
   */
  function toggleClass(el, type, val) {
    el && el.classList[val ? type : 'toggle'](val || type);
  }

  function style(content) {
    appendTo(head, create('style', content));
  }

  var dom = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getNode: getNode,
    $: $,
    body: body,
    head: head,
    find: find,
    findAll: findAll,
    create: create,
    appendTo: appendTo,
    before: before,
    on: on,
    off: off,
    toggleClass: toggleClass,
    style: style
  });

  /**
   * Render github corner
   * @param  {Object} data
   * @return {String}
   */
  function corner(data, cornerExternalLinkTarge) {
    if (!data) {
      return ''
    }
    if (!/\/\//.test(data)) {
      data = 'https://github.com/' + data;
    }
    data = data.replace(/^git\+/, '');
    // double check
    cornerExternalLinkTarge = cornerExternalLinkTarge || '_blank';

    return (
      "<a href=\"" + data + "\" target=\"" + cornerExternalLinkTarge + "\" class=\"github-corner\" aria-label=\"View source on Github\">" +
      '<svg viewBox="0 0 250 250" aria-hidden="true">' +
      '<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>' +
      '<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>' +
      '<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>' +
      '</svg>' +
      '</a>'
    )
  }

  /**
   * Render main content
   */
  function main(config) {

    var name = config.name? escapeString(config.name):'';

    var aside =
      '<button class="sidebar-toggle" aria-label="Menu">' +
      '<div class="sidebar-toggle-button">' +
      '<span></span><span></span><span></span>' +
      '</div>' +
      '</button>' +
      '<aside class="sidebar">' +
      (config.name ?
        ("<h1 class=\"app-name\"><a class=\"app-name-link\" data-nosearch>" + (config.logo ? 
             ("<img alt=\"" + name + "\" src=" + (config.logo) + ">") :
            name) + "</a></h1>") :
        '') +
      '<div class="sidebar-nav"><!--sidebar--></div>' +
      '</aside>';

    return (
      (isMobile ? (aside + "<main>") : ("<main>" + aside)) +
      '<section class="content">' +
      '<article class="markdown-section" id="main"><!--main--></article>' +
      '</section>' +
      '</main>'
    )
  }

  /**
   * Cover Page
   */
  function cover() {
    var SL = ', 100%, 85%';
    var bgc =
      'linear-gradient(to left bottom, ' +
      "hsl(" + (Math.floor(Math.random() * 255) + SL) + ") 0%," +
      "hsl(" + (Math.floor(Math.random() * 255) + SL) + ") 100%)";

    return (
      "<section class=\"cover show\" style=\"background: " + bgc + "\">" +
      '<div class="cover-main"><!--cover--></div>' +
      '<div class="mask"></div>' +
      '</section>'
    )
  }

  /**
   * Render tree
   * @param  {Array} tree
   * @param  {String} tpl
   * @return {String}
   */
  function tree(toc, tpl) {
    if ( tpl === void 0 ) tpl = '<ul class="app-sub-sidebar">{inner}</ul>';

    if (!toc || !toc.length) {
      return ''
    }
    var innerHTML = '';
    toc.forEach(function (node) {
      innerHTML += "<li><a class=\"section-link\" href=\"" + (node.slug) + "\">" + (node.title) + "</a></li>";
      if (node.children) {
        innerHTML += tree(node.children, tpl);
      }
    });
    return tpl.replace('{inner}', innerHTML)
  }

  function helper(className, content) {
    return ("<p class=\"" + className + "\">" + (content.slice(5).trim()) + "</p>")
  }

  function theme(color) {
    return ("<style>:root{--theme-color: " + color + ";}</style>")
  }

  var barEl;
  var timeId;

  /**
   * Init progress component
   */
  function init() {
    var div = create('div');

    div.classList.add('progress');
    appendTo(body, div);
    barEl = div;
  }
  /**
   * Render progress bar
   */
  function progressbar (ref) {
    var loaded = ref.loaded;
    var total = ref.total;
    var step = ref.step;

    var num;

    !barEl && init();

    if (step) {
      num = parseInt(barEl.style.width || 0, 10) + step;
      num = num > 80 ? 80 : num;
    } else {
      num = Math.floor(loaded / total * 100);
    }

    barEl.style.opacity = 1;
    barEl.style.width = num >= 95 ? '100%' : num + '%';

    if (num >= 95) {
      clearTimeout(timeId);
      timeId = setTimeout(function (_) {
        barEl.style.opacity = 0;
        barEl.style.width = '0%';
      }, 200);
    }
  }

  var cache = {};

  /**
   * Simple ajax get
   * @param {string} url
   * @param {boolean} [hasBar=false] has progress bar
   * @return { then(resolve, reject), abort }
   */
  function get(url, hasBar, headers) {
    if ( hasBar === void 0 ) hasBar = false;
    if ( headers === void 0 ) headers = {};

    var xhr = new XMLHttpRequest();
    var on = function () {
      xhr.addEventListener.apply(xhr, arguments);
    };
    var cached = cache[url];

    if (cached) {
      return {then: function (cb) { return cb(cached.content, cached.opt); }, abort: noop}
    }

    xhr.open('GET', url);
    for (var i in headers) {
      if (hasOwn.call(headers, i)) {
        xhr.setRequestHeader(i, headers[i]);
      }
    }
    xhr.send();

    return {
      then: function (success, error) {
        if ( error === void 0 ) error = noop;

        if (hasBar) {
          var id = setInterval(
            function (_) { return progressbar({
                step: Math.floor(Math.random() * 5 + 1)
              }); },
            500
          );

          on('progress', progressbar);
          on('loadend', function (evt) {
            progressbar(evt);
            clearInterval(id);
          });
        }

        on('error', error);
        on('load', function (ref) {
          var target = ref.target;

          if (target.status >= 400) {
            error(target);
          } else {
            var result = (cache[url] = {
              content: target.response,
              opt: {
                updatedAt: xhr.getResponseHeader('last-modified')
              }
            });

            success(result.content, result.opt);
          }
        });
      },
      abort: function (_) { return xhr.readyState !== 4 && xhr.abort(); }
    }
  }

  function replaceVar(block, color) {
    block.innerHTML = block.innerHTML.replace(
      /var\(\s*--theme-color.*?\)/g,
      color
    );
  }

  function cssVars (color) {
    // Variable support
    if (window.CSS && window.CSS.supports && window.CSS.supports('(--v:red)')) {
      return
    }

    var styleBlocks = findAll('style:not(.inserted),link');
    [].forEach.call(styleBlocks, function (block) {
      if (block.nodeName === 'STYLE') {
        replaceVar(block, color);
      } else if (block.nodeName === 'LINK') {
        var href = block.getAttribute('href');

        if (!/\.css$/.test(href)) {
          return
        }

        get(href).then(function (res) {
          var style = create('style', res);

          head.appendChild(style);
          replaceVar(style, color);
        });
      }
    });
  }

  var RGX = /([^{]*?)\w(?=\})/g;

  var MAP = {
  	YYYY: 'getFullYear',
  	YY: 'getYear',
  	MM: function (d) {
  		return d.getMonth() + 1;
  	},
  	DD: 'getDate',
  	HH: 'getHours',
  	mm: 'getMinutes',
  	ss: 'getSeconds',
  	fff: 'getMilliseconds'
  };

  function tinydate (str, custom) {
  	var parts=[], offset=0;

  	str.replace(RGX, function (key, _, idx) {
  		// save preceding string
  		parts.push(str.substring(offset, idx - 1));
  		offset = idx += key.length + 1;
  		// save function
  		parts.push(custom && custom[key] || function (d) {
  			return ('00' + (typeof MAP[key] === 'string' ? d[MAP[key]]() : MAP[key](d))).slice(-key.length);
  		});
  	});

  	if (offset !== str.length) {
  		parts.push(str.substring(offset));
  	}

  	return function (arg) {
  		var out='', i=0, d=arg||new Date();
  		for (; i<parts.length; i++) {
  			out += (typeof parts[i]==='string') ? parts[i] : parts[i](d);
  		}
  		return out;
  	};
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var marked = createCommonjsModule(function (module, exports) {
  (function(root) {

  /**
   * Block-Level Grammar
   */

  var block = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: '^ {0,3}(?:' // optional indentation
      + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
      + '|comment[^\\n]*(\\n+|$)' // (2)
      + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
      + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
      + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
      + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
      + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
      + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
      + ')',
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: noop,
    table: noop,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    // regex template, placeholders will be replaced according to different paragraph
    // interruption rules of commonmark and the original markdown spec:
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
    text: /^[^\n]+/
  };

  block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
  block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block.def = edit(block.def)
    .replace('label', block._label)
    .replace('title', block._title)
    .getRegex();

  block.bullet = /(?:[*+-]|\d{1,9}\.)/;
  block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
  block.item = edit(block.item, 'gm')
    .replace(/bull/g, block.bullet)
    .getRegex();

  block.list = edit(block.list)
    .replace(/bull/g, block.bullet)
    .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
    .replace('def', '\\n+(?=' + block.def.source + ')')
    .getRegex();

  block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
    + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
    + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
    + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
    + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
    + '|track|ul';
  block._comment = /<!--(?!-?>)[\s\S]*?-->/;
  block.html = edit(block.html, 'i')
    .replace('comment', block._comment)
    .replace('tag', block._tag)
    .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
    .getRegex();

  block.paragraph = edit(block._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' {0,3}#{1,6} +')
    .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
    .replace('blockquote', ' {0,3}>')
    .replace('fences', ' {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
    .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
    .getRegex();

  block.blockquote = edit(block.blockquote)
    .replace('paragraph', block.paragraph)
    .getRegex();

  /**
   * Normal Block Grammar
   */

  block.normal = merge({}, block);

  /**
   * GFM Block Grammar
   */

  block.gfm = merge({}, block.normal, {
    nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
    table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
  });

  /**
   * Pedantic grammar (original John Gruber's loose markdown specification)
   */

  block.pedantic = merge({}, block.normal, {
    html: edit(
      '^ *(?:comment *(?:\\n|\\s*$)'
      + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
      + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
      .replace('comment', block._comment)
      .replace(/tag/g, '(?!(?:'
        + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
        + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
        + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
    fences: noop, // fences not supported
    paragraph: edit(block.normal._paragraph)
      .replace('hr', block.hr)
      .replace('heading', ' *#{1,6} *[^\n]')
      .replace('lheading', block.lheading)
      .replace('blockquote', ' {0,3}>')
      .replace('|fences', '')
      .replace('|list', '')
      .replace('|html', '')
      .getRegex()
  });

  /**
   * Block Lexer
   */

  function Lexer(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || marked.defaults;
    this.rules = block.normal;

    if (this.options.pedantic) {
      this.rules = block.pedantic;
    } else if (this.options.gfm) {
      this.rules = block.gfm;
    }
  }

  /**
   * Expose Block Rules
   */

  Lexer.rules = block;

  /**
   * Static Lex Method
   */

  Lexer.lex = function(src, options) {
    var lexer = new Lexer(options);
    return lexer.lex(src);
  };

  /**
   * Preprocessing
   */

  Lexer.prototype.lex = function(src) {
    src = src
      .replace(/\r\n|\r/g, '\n')
      .replace(/\t/g, '    ')
      .replace(/\u00a0/g, ' ')
      .replace(/\u2424/g, '\n');

    return this.token(src, true);
  };

  /**
   * Lexing
   */

  Lexer.prototype.token = function(src, top) {
    src = src.replace(/^ +$/gm, '');
    var next,
        loose,
        cap,
        bull,
        b,
        item,
        listStart,
        listItems,
        t,
        space,
        i,
        tag,
        l,
        isordered,
        istask,
        ischecked;

    while (src) {
      // newline
      if (cap = this.rules.newline.exec(src)) {
        src = src.substring(cap[0].length);
        if (cap[0].length > 1) {
          this.tokens.push({
            type: 'space'
          });
        }
      }

      // code
      if (cap = this.rules.code.exec(src)) {
        var lastToken = this.tokens[this.tokens.length - 1];
        src = src.substring(cap[0].length);
        // An indented code block cannot interrupt a paragraph.
        if (lastToken && lastToken.type === 'paragraph') {
          lastToken.text += '\n' + cap[0].trimRight();
        } else {
          cap = cap[0].replace(/^ {4}/gm, '');
          this.tokens.push({
            type: 'code',
            codeBlockStyle: 'indented',
            text: !this.options.pedantic
              ? rtrim(cap, '\n')
              : cap
          });
        }
        continue;
      }

      // fences
      if (cap = this.rules.fences.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'code',
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: cap[3] || ''
        });
        continue;
      }

      // heading
      if (cap = this.rules.heading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[1].length,
          text: cap[2]
        });
        continue;
      }

      // table no leading pipe (gfm)
      if (cap = this.rules.nptable.exec(src)) {
        item = {
          type: 'table',
          header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          src = src.substring(cap[0].length);

          for (i = 0; i < item.align.length; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          for (i = 0; i < item.cells.length; i++) {
            item.cells[i] = splitCells(item.cells[i], item.header.length);
          }

          this.tokens.push(item);

          continue;
        }
      }

      // hr
      if (cap = this.rules.hr.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'hr'
        });
        continue;
      }

      // blockquote
      if (cap = this.rules.blockquote.exec(src)) {
        src = src.substring(cap[0].length);

        this.tokens.push({
          type: 'blockquote_start'
        });

        cap = cap[0].replace(/^ *> ?/gm, '');

        // Pass `top` to keep the current
        // "toplevel" state. This is exactly
        // how markdown.pl works.
        this.token(cap, top);

        this.tokens.push({
          type: 'blockquote_end'
        });

        continue;
      }

      // list
      if (cap = this.rules.list.exec(src)) {
        src = src.substring(cap[0].length);
        bull = cap[2];
        isordered = bull.length > 1;

        listStart = {
          type: 'list_start',
          ordered: isordered,
          start: isordered ? +bull : '',
          loose: false
        };

        this.tokens.push(listStart);

        // Get each top-level item.
        cap = cap[0].match(this.rules.item);

        listItems = [];
        next = false;
        l = cap.length;
        i = 0;

        for (; i < l; i++) {
          item = cap[i];

          // Remove the list item's bullet
          // so it is seen as the next token.
          space = item.length;
          item = item.replace(/^ *([*+-]|\d+\.) */, '');

          // Outdent whatever the
          // list item contains. Hacky.
          if (~item.indexOf('\n ')) {
            space -= item.length;
            item = !this.options.pedantic
              ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
              : item.replace(/^ {1,4}/gm, '');
          }

          // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.
          if (i !== l - 1) {
            b = block.bullet.exec(cap[i + 1])[0];
            if (bull.length > 1 ? b.length === 1
              : (b.length > 1 || (this.options.smartLists && b !== bull))) {
              src = cap.slice(i + 1).join('\n') + src;
              i = l - 1;
            }
          }

          // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.
          loose = next || /\n\n(?!\s*$)/.test(item);
          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === '\n';
            if (!loose) { loose = next; }
          }

          if (loose) {
            listStart.loose = true;
          }

          // Check for task list items
          istask = /^\[[ xX]\] /.test(item);
          ischecked = undefined;
          if (istask) {
            ischecked = item[1] !== ' ';
            item = item.replace(/^\[[ xX]\] +/, '');
          }

          t = {
            type: 'list_item_start',
            task: istask,
            checked: ischecked,
            loose: loose
          };

          listItems.push(t);
          this.tokens.push(t);

          // Recurse.
          this.token(item, false);

          this.tokens.push({
            type: 'list_item_end'
          });
        }

        if (listStart.loose) {
          l = listItems.length;
          i = 0;
          for (; i < l; i++) {
            listItems[i].loose = true;
          }
        }

        this.tokens.push({
          type: 'list_end'
        });

        continue;
      }

      // html
      if (cap = this.rules.html.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: this.options.sanitize
            ? 'paragraph'
            : 'html',
          pre: !this.options.sanitizer
            && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0]
        });
        continue;
      }

      // def
      if (top && (cap = this.rules.def.exec(src))) {
        src = src.substring(cap[0].length);
        if (cap[3]) { cap[3] = cap[3].substring(1, cap[3].length - 1); }
        tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
        if (!this.tokens.links[tag]) {
          this.tokens.links[tag] = {
            href: cap[2],
            title: cap[3]
          };
        }
        continue;
      }

      // table (gfm)
      if (cap = this.rules.table.exec(src)) {
        item = {
          type: 'table',
          header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          src = src.substring(cap[0].length);

          for (i = 0; i < item.align.length; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          for (i = 0; i < item.cells.length; i++) {
            item.cells[i] = splitCells(
              item.cells[i].replace(/^ *\| *| *\| *$/g, ''),
              item.header.length);
          }

          this.tokens.push(item);

          continue;
        }
      }

      // lheading
      if (cap = this.rules.lheading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1]
        });
        continue;
      }

      // top-level paragraph
      if (top && (cap = this.rules.paragraph.exec(src))) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'paragraph',
          text: cap[1].charAt(cap[1].length - 1) === '\n'
            ? cap[1].slice(0, -1)
            : cap[1]
        });
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        // Top-level should never reach here.
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'text',
          text: cap[0]
        });
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return this.tokens;
  };

  /**
   * Inline-Level Grammar
   */

  var inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noop,
    tag: '^comment'
      + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
      + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
      + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
      + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
      + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
    em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noop,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
  };

  // list of punctuation marks from common mark spec
  // without ` and ] to workaround Rule 17 (inline code blocks/links)
  inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
  inline.em = edit(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();

  inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline.autolink = edit(inline.autolink)
    .replace('scheme', inline._scheme)
    .replace('email', inline._email)
    .getRegex();

  inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

  inline.tag = edit(inline.tag)
    .replace('comment', block._comment)
    .replace('attribute', inline._attribute)
    .getRegex();

  inline._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
  inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

  inline.link = edit(inline.link)
    .replace('label', inline._label)
    .replace('href', inline._href)
    .replace('title', inline._title)
    .getRegex();

  inline.reflink = edit(inline.reflink)
    .replace('label', inline._label)
    .getRegex();

  /**
   * Normal Inline Grammar
   */

  inline.normal = merge({}, inline);

  /**
   * Pedantic Inline Grammar
   */

  inline.pedantic = merge({}, inline.normal, {
    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
    link: edit(/^!?\[(label)\]\((.*?)\)/)
      .replace('label', inline._label)
      .getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace('label', inline._label)
      .getRegex()
  });

  /**
   * GFM Inline Grammar
   */

  inline.gfm = merge({}, inline.normal, {
    escape: edit(inline.escape).replace('])', '~|])').getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^~+(?=\S)([\s\S]*?\S)~+/,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
  });

  inline.gfm.url = edit(inline.gfm.url, 'i')
    .replace('email', inline.gfm._extended_email)
    .getRegex();
  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline.breaks = merge({}, inline.gfm, {
    br: edit(inline.br).replace('{2,}', '*').getRegex(),
    text: edit(inline.gfm.text)
      .replace('\\b_', '\\b_| {2,}\\n')
      .replace(/\{2,\}/g, '*')
      .getRegex()
  });

  /**
   * Inline Lexer & Compiler
   */

  function InlineLexer(links, options) {
    this.options = options || marked.defaults;
    this.links = links;
    this.rules = inline.normal;
    this.renderer = this.options.renderer || new Renderer();
    this.renderer.options = this.options;

    if (!this.links) {
      throw new Error('Tokens array requires a `links` property.');
    }

    if (this.options.pedantic) {
      this.rules = inline.pedantic;
    } else if (this.options.gfm) {
      if (this.options.breaks) {
        this.rules = inline.breaks;
      } else {
        this.rules = inline.gfm;
      }
    }
  }

  /**
   * Expose Inline Rules
   */

  InlineLexer.rules = inline;

  /**
   * Static Lexing/Compiling Method
   */

  InlineLexer.output = function(src, links, options) {
    var inline = new InlineLexer(links, options);
    return inline.output(src);
  };

  /**
   * Lexing/Compiling
   */

  InlineLexer.prototype.output = function(src) {
    var out = '',
        link,
        text,
        href,
        title,
        cap,
        prevCapZero;

    while (src) {
      // escape
      if (cap = this.rules.escape.exec(src)) {
        src = src.substring(cap[0].length);
        out += escape(cap[1]);
        continue;
      }

      // tag
      if (cap = this.rules.tag.exec(src)) {
        if (!this.inLink && /^<a /i.test(cap[0])) {
          this.inLink = true;
        } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
          this.inLink = false;
        }
        if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.inRawBlock = true;
        } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.inRawBlock = false;
        }

        src = src.substring(cap[0].length);
        out += this.options.sanitize
          ? this.options.sanitizer
            ? this.options.sanitizer(cap[0])
            : escape(cap[0])
          : cap[0];
        continue;
      }

      // link
      if (cap = this.rules.link.exec(src)) {
        var lastParenIndex = findClosingBracket(cap[2], '()');
        if (lastParenIndex > -1) {
          var linkLen = 4 + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
        src = src.substring(cap[0].length);
        this.inLink = true;
        href = cap[2];
        if (this.options.pedantic) {
          link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

          if (link) {
            href = link[1];
            title = link[3];
          } else {
            title = '';
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }
        href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
        out += this.outputLink(cap, {
          href: InlineLexer.escapes(href),
          title: InlineLexer.escapes(title)
        });
        this.inLink = false;
        continue;
      }

      // reflink, nolink
      if ((cap = this.rules.reflink.exec(src))
          || (cap = this.rules.nolink.exec(src))) {
        src = src.substring(cap[0].length);
        link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = this.links[link.toLowerCase()];
        if (!link || !link.href) {
          out += cap[0].charAt(0);
          src = cap[0].substring(1) + src;
          continue;
        }
        this.inLink = true;
        out += this.outputLink(cap, link);
        this.inLink = false;
        continue;
      }

      // strong
      if (cap = this.rules.strong.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
        continue;
      }

      // em
      if (cap = this.rules.em.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
        continue;
      }

      // code
      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.codespan(escape(cap[2].trim(), true));
        continue;
      }

      // br
      if (cap = this.rules.br.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.br();
        continue;
      }

      // del (gfm)
      if (cap = this.rules.del.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.del(this.output(cap[1]));
        continue;
      }

      // autolink
      if (cap = this.rules.autolink.exec(src)) {
        src = src.substring(cap[0].length);
        if (cap[2] === '@') {
          text = escape(this.mangle(cap[1]));
          href = 'mailto:' + text;
        } else {
          text = escape(cap[1]);
          href = text;
        }
        out += this.renderer.link(href, null, text);
        continue;
      }

      // url (gfm)
      if (!this.inLink && (cap = this.rules.url.exec(src))) {
        if (cap[2] === '@') {
          text = escape(cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          do {
            prevCapZero = cap[0];
            cap[0] = this.rules._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);
          text = escape(cap[0]);
          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }
        src = src.substring(cap[0].length);
        out += this.renderer.link(href, null, text);
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);
        if (this.inRawBlock) {
          out += this.renderer.text(this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0]);
        } else {
          out += this.renderer.text(escape(this.smartypants(cap[0])));
        }
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return out;
  };

  InlineLexer.escapes = function(text) {
    return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
  };

  /**
   * Compile Link
   */

  InlineLexer.prototype.outputLink = function(cap, link) {
    var href = link.href,
        title = link.title ? escape(link.title) : null;

    return cap[0].charAt(0) !== '!'
      ? this.renderer.link(href, title, this.output(cap[1]))
      : this.renderer.image(href, title, escape(cap[1]));
  };

  /**
   * Smartypants Transformations
   */

  InlineLexer.prototype.smartypants = function(text) {
    if (!this.options.smartypants) { return text; }
    return text
      // em-dashes
      .replace(/---/g, '\u2014')
      // en-dashes
      .replace(/--/g, '\u2013')
      // opening singles
      .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
      // closing singles & apostrophes
      .replace(/'/g, '\u2019')
      // opening doubles
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
      // closing doubles
      .replace(/"/g, '\u201d')
      // ellipses
      .replace(/\.{3}/g, '\u2026');
  };

  /**
   * Mangle Links
   */

  InlineLexer.prototype.mangle = function(text) {
    if (!this.options.mangle) { return text; }
    var out = '',
        l = text.length,
        i = 0,
        ch;

    for (; i < l; i++) {
      ch = text.charCodeAt(i);
      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }
      out += '&#' + ch + ';';
    }

    return out;
  };

  /**
   * Renderer
   */

  function Renderer(options) {
    this.options = options || marked.defaults;
  }

  Renderer.prototype.code = function(code, infostring, escaped) {
    var lang = (infostring || '').match(/\S*/)[0];
    if (this.options.highlight) {
      var out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    if (!lang) {
      return '<pre><code>'
        + (escaped ? code : escape(code, true))
        + '</code></pre>';
    }

    return '<pre><code class="'
      + this.options.langPrefix
      + escape(lang, true)
      + '">'
      + (escaped ? code : escape(code, true))
      + '</code></pre>\n';
  };

  Renderer.prototype.blockquote = function(quote) {
    return '<blockquote>\n' + quote + '</blockquote>\n';
  };

  Renderer.prototype.html = function(html) {
    return html;
  };

  Renderer.prototype.heading = function(text, level, raw, slugger) {
    if (this.options.headerIds) {
      return '<h'
        + level
        + ' id="'
        + this.options.headerPrefix
        + slugger.slug(raw)
        + '">'
        + text
        + '</h'
        + level
        + '>\n';
    }
    // ignore IDs
    return '<h' + level + '>' + text + '</h' + level + '>\n';
  };

  Renderer.prototype.hr = function() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  };

  Renderer.prototype.list = function(body, ordered, start) {
    var type = ordered ? 'ol' : 'ul',
        startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  };

  Renderer.prototype.listitem = function(text) {
    return '<li>' + text + '</li>\n';
  };

  Renderer.prototype.checkbox = function(checked) {
    return '<input '
      + (checked ? 'checked="" ' : '')
      + 'disabled="" type="checkbox"'
      + (this.options.xhtml ? ' /' : '')
      + '> ';
  };

  Renderer.prototype.paragraph = function(text) {
    return '<p>' + text + '</p>\n';
  };

  Renderer.prototype.table = function(header, body) {
    if (body) { body = '<tbody>' + body + '</tbody>'; }

    return '<table>\n'
      + '<thead>\n'
      + header
      + '</thead>\n'
      + body
      + '</table>\n';
  };

  Renderer.prototype.tablerow = function(content) {
    return '<tr>\n' + content + '</tr>\n';
  };

  Renderer.prototype.tablecell = function(content, flags) {
    var type = flags.header ? 'th' : 'td';
    var tag = flags.align
      ? '<' + type + ' align="' + flags.align + '">'
      : '<' + type + '>';
    return tag + content + '</' + type + '>\n';
  };

  // span level renderer
  Renderer.prototype.strong = function(text) {
    return '<strong>' + text + '</strong>';
  };

  Renderer.prototype.em = function(text) {
    return '<em>' + text + '</em>';
  };

  Renderer.prototype.codespan = function(text) {
    return '<code>' + text + '</code>';
  };

  Renderer.prototype.br = function() {
    return this.options.xhtml ? '<br/>' : '<br>';
  };

  Renderer.prototype.del = function(text) {
    return '<del>' + text + '</del>';
  };

  Renderer.prototype.link = function(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    var out = '<a href="' + escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  };

  Renderer.prototype.image = function(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }

    var out = '<img src="' + href + '" alt="' + text + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  };

  Renderer.prototype.text = function(text) {
    return text;
  };

  /**
   * TextRenderer
   * returns only the textual part of the token
   */

  function TextRenderer() {}

  // no need for block level renderers

  TextRenderer.prototype.strong =
  TextRenderer.prototype.em =
  TextRenderer.prototype.codespan =
  TextRenderer.prototype.del =
  TextRenderer.prototype.text = function(text) {
    return text;
  };

  TextRenderer.prototype.link =
  TextRenderer.prototype.image = function(href, title, text) {
    return '' + text;
  };

  TextRenderer.prototype.br = function() {
    return '';
  };

  /**
   * Parsing & Compiling
   */

  function Parser(options) {
    this.tokens = [];
    this.token = null;
    this.options = options || marked.defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.slugger = new Slugger();
  }

  /**
   * Static Parse Method
   */

  Parser.parse = function(src, options) {
    var parser = new Parser(options);
    return parser.parse(src);
  };

  /**
   * Parse Loop
   */

  Parser.prototype.parse = function(src) {
    this.inline = new InlineLexer(src.links, this.options);
    // use an InlineLexer with a TextRenderer to extract pure text
    this.inlineText = new InlineLexer(
      src.links,
      merge({}, this.options, { renderer: new TextRenderer() })
    );
    this.tokens = src.reverse();

    var out = '';
    while (this.next()) {
      out += this.tok();
    }

    return out;
  };

  /**
   * Next Token
   */

  Parser.prototype.next = function() {
    this.token = this.tokens.pop();
    return this.token;
  };

  /**
   * Preview Next Token
   */

  Parser.prototype.peek = function() {
    return this.tokens[this.tokens.length - 1] || 0;
  };

  /**
   * Parse Text Tokens
   */

  Parser.prototype.parseText = function() {
    var body = this.token.text;

    while (this.peek().type === 'text') {
      body += '\n' + this.next().text;
    }

    return this.inline.output(body);
  };

  /**
   * Parse Current Token
   */

  Parser.prototype.tok = function() {
    switch (this.token.type) {
      case 'space': {
        return '';
      }
      case 'hr': {
        return this.renderer.hr();
      }
      case 'heading': {
        return this.renderer.heading(
          this.inline.output(this.token.text),
          this.token.depth,
          unescape(this.inlineText.output(this.token.text)),
          this.slugger);
      }
      case 'code': {
        return this.renderer.code(this.token.text,
          this.token.lang,
          this.token.escaped);
      }
      case 'table': {
        var header = '',
            body = '',
            i,
            row,
            cell,
            j;

        // header
        cell = '';
        for (i = 0; i < this.token.header.length; i++) {
          cell += this.renderer.tablecell(
            this.inline.output(this.token.header[i]),
            { header: true, align: this.token.align[i] }
          );
        }
        header += this.renderer.tablerow(cell);

        for (i = 0; i < this.token.cells.length; i++) {
          row = this.token.cells[i];

          cell = '';
          for (j = 0; j < row.length; j++) {
            cell += this.renderer.tablecell(
              this.inline.output(row[j]),
              { header: false, align: this.token.align[j] }
            );
          }

          body += this.renderer.tablerow(cell);
        }
        return this.renderer.table(header, body);
      }
      case 'blockquote_start': {
        body = '';

        while (this.next().type !== 'blockquote_end') {
          body += this.tok();
        }

        return this.renderer.blockquote(body);
      }
      case 'list_start': {
        body = '';
        var ordered = this.token.ordered,
            start = this.token.start;

        while (this.next().type !== 'list_end') {
          body += this.tok();
        }

        return this.renderer.list(body, ordered, start);
      }
      case 'list_item_start': {
        body = '';
        var loose = this.token.loose;
        var checked = this.token.checked;
        var task = this.token.task;

        if (this.token.task) {
          body += this.renderer.checkbox(checked);
        }

        while (this.next().type !== 'list_item_end') {
          body += !loose && this.token.type === 'text'
            ? this.parseText()
            : this.tok();
        }
        return this.renderer.listitem(body, task, checked);
      }
      case 'html': {
        // TODO parse inline content if parameter markdown=1
        return this.renderer.html(this.token.text);
      }
      case 'paragraph': {
        return this.renderer.paragraph(this.inline.output(this.token.text));
      }
      case 'text': {
        return this.renderer.paragraph(this.parseText());
      }
      default: {
        var errMsg = 'Token with "' + this.token.type + '" type was not found.';
        if (this.options.silent) {
          console.log(errMsg);
        } else {
          throw new Error(errMsg);
        }
      }
    }
  };

  /**
   * Slugger generates header id
   */

  function Slugger() {
    this.seen = {};
  }

  /**
   * Convert string to unique id
   */

  Slugger.prototype.slug = function(value) {
    var slug = value
      .toLowerCase()
      .trim()
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');

    if (this.seen.hasOwnProperty(slug)) {
      var originalSlug = slug;
      do {
        this.seen[originalSlug]++;
        slug = originalSlug + '-' + this.seen[originalSlug];
      } while (this.seen.hasOwnProperty(slug));
    }
    this.seen[slug] = 0;

    return slug;
  };

  /**
   * Helpers
   */

  function escape(html, encode) {
    if (encode) {
      if (escape.escapeTest.test(html)) {
        return html.replace(escape.escapeReplace, function(ch) { return escape.replacements[ch]; });
      }
    } else {
      if (escape.escapeTestNoEncode.test(html)) {
        return html.replace(escape.escapeReplaceNoEncode, function(ch) { return escape.replacements[ch]; });
      }
    }

    return html;
  }

  escape.escapeTest = /[&<>"']/;
  escape.escapeReplace = /[&<>"']/g;
  escape.replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  escape.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  escape.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;

  function unescape(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(_, n) {
      n = n.toLowerCase();
      if (n === 'colon') { return ':'; }
      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x'
          ? String.fromCharCode(parseInt(n.substring(2), 16))
          : String.fromCharCode(+n.substring(1));
      }
      return '';
    });
  }

  function edit(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    return {
      replace: function(name, val) {
        val = val.source || val;
        val = val.replace(/(^|[^\[])\^/g, '$1');
        regex = regex.replace(name, val);
        return this;
      },
      getRegex: function() {
        return new RegExp(regex, opt);
      }
    };
  }

  function cleanUrl(sanitize, base, href) {
    if (sanitize) {
      try {
        var prot = decodeURIComponent(unescape(href))
          .replace(/[^\w:]/g, '')
          .toLowerCase();
      } catch (e) {
        return null;
      }
      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        return null;
      }
    }
    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }
    try {
      href = encodeURI(href).replace(/%25/g, '%');
    } catch (e) {
      return null;
    }
    return href;
  }

  function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
      // we can ignore everything in base after the last slash of its path component,
      // but we might need to add _that_
      // https://tools.ietf.org/html/rfc3986#section-3
      if (/^[^:]+:\/*[^/]*$/.test(base)) {
        baseUrls[' ' + base] = base + '/';
      } else {
        baseUrls[' ' + base] = rtrim(base, '/', true);
      }
    }
    base = baseUrls[' ' + base];

    if (href.slice(0, 2) === '//') {
      return base.replace(/:[\s\S]*/, ':') + href;
    } else if (href.charAt(0) === '/') {
      return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
    } else {
      return base + href;
    }
  }
  var baseUrls = {};
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

  function noop() {}
  noop.exec = noop;

  function merge(obj) {
    var arguments$1 = arguments;

    var i = 1,
        target,
        key;

    for (; i < arguments.length; i++) {
      target = arguments$1[i];
      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }

    return obj;
  }

  function splitCells(tableRow, count) {
    // ensure that every cell-delimiting pipe has a space
    // before it to distinguish it from an escaped pipe
    var row = tableRow.replace(/\|/g, function(match, offset, str) {
          var escaped = false,
              curr = offset;
          while (--curr >= 0 && str[curr] === '\\') { escaped = !escaped; }
          if (escaped) {
            // odd number of slashes means | is escaped
            // so we leave it alone
            return '|';
          } else {
            // add space before unescaped |
            return ' |';
          }
        }),
        cells = row.split(/ \|/),
        i = 0;

    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) { cells.push(''); }
    }

    for (; i < cells.length; i++) {
      // leading or trailing whitespace is ignored per the gfm spec
      cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }
    return cells;
  }

  // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
  // /c*$/ is vulnerable to REDOS.
  // invert: Remove suffix of non-c chars instead. Default falsey.
  function rtrim(str, c, invert) {
    if (str.length === 0) {
      return '';
    }

    // Length of suffix matching the invert condition.
    var suffLen = 0;

    // Step left until we fail to match the invert condition.
    while (suffLen < str.length) {
      var currChar = str.charAt(str.length - suffLen - 1);
      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }

    return str.substr(0, str.length - suffLen);
  }

  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }
    var level = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === '\\') {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;
        if (level < 0) {
          return i;
        }
      }
    }
    return -1;
  }

  function checkSanitizeDeprecation(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
    }
  }

  /**
   * Marked
   */

  function marked(src, opt, callback) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked(): input parameter is undefined or null');
    }
    if (typeof src !== 'string') {
      throw new Error('marked(): input parameter is of type '
        + Object.prototype.toString.call(src) + ', string expected');
    }

    if (callback || typeof opt === 'function') {
      if (!callback) {
        callback = opt;
        opt = null;
      }

      opt = merge({}, marked.defaults, opt || {});
      checkSanitizeDeprecation(opt);

      var highlight = opt.highlight,
          tokens,
          pending,
          i = 0;

      try {
        tokens = Lexer.lex(src, opt);
      } catch (e) {
        return callback(e);
      }

      pending = tokens.length;

      var done = function(err) {
        if (err) {
          opt.highlight = highlight;
          return callback(err);
        }

        var out;

        try {
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }

        opt.highlight = highlight;

        return err
          ? callback(err)
          : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;

      if (!pending) { return done(); }

      for (; i < tokens.length; i++) {
        (function(token) {
          if (token.type !== 'code') {
            return --pending || done();
          }
          return highlight(token.text, token.lang, function(err, code) {
            if (err) { return done(err); }
            if (code == null || code === token.text) {
              return --pending || done();
            }
            token.text = code;
            token.escaped = true;
            --pending || done();
          });
        })(tokens[i]);
      }

      return;
    }
    try {
      if (opt) { opt = merge({}, marked.defaults, opt); }
      checkSanitizeDeprecation(opt);
      return Parser.parse(Lexer.lex(src, opt), opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';
      if ((opt || marked.defaults).silent) {
        return '<p>An error occurred:</p><pre>'
          + escape(e.message + '', true)
          + '</pre>';
      }
      throw e;
    }
  }

  /**
   * Options
   */

  marked.options =
  marked.setOptions = function(opt) {
    merge(marked.defaults, opt);
    return marked;
  };

  marked.getDefaults = function() {
    return {
      baseUrl: null,
      breaks: false,
      gfm: true,
      headerIds: true,
      headerPrefix: '',
      highlight: null,
      langPrefix: 'language-',
      mangle: true,
      pedantic: false,
      renderer: new Renderer(),
      sanitize: false,
      sanitizer: null,
      silent: false,
      smartLists: false,
      smartypants: false,
      xhtml: false
    };
  };

  marked.defaults = marked.getDefaults();

  /**
   * Expose
   */

  marked.Parser = Parser;
  marked.parser = Parser.parse;

  marked.Renderer = Renderer;
  marked.TextRenderer = TextRenderer;

  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;

  marked.InlineLexer = InlineLexer;
  marked.inlineLexer = InlineLexer.output;

  marked.Slugger = Slugger;

  marked.parse = marked;

  {
    module.exports = marked;
  }
  })();
  });

  var prism = createCommonjsModule(function (module) {
  /* **********************************************
       Begin prism-core.js
  ********************************************** */

  var _self = (typeof window !== 'undefined')
  	? window   // if in browser
  	: (
  		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
  		? self // if in worker
  		: {}   // if in node js
  	);

  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   * MIT license http://www.opensource.org/licenses/mit-license.php/
   * @author Lea Verou http://lea.verou.me
   */

  var Prism = (function (_self){

  // Private helper vars
  var lang = /\blang(?:uage)?-([\w-]+)\b/i;
  var uniqueId = 0;

  var _ = {
  	manual: _self.Prism && _self.Prism.manual,
  	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
  	util: {
  		encode: function (tokens) {
  			if (tokens instanceof Token) {
  				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
  			} else if (Array.isArray(tokens)) {
  				return tokens.map(_.util.encode);
  			} else {
  				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
  			}
  		},

  		type: function (o) {
  			return Object.prototype.toString.call(o).slice(8, -1);
  		},

  		objId: function (obj) {
  			if (!obj['__id']) {
  				Object.defineProperty(obj, '__id', { value: ++uniqueId });
  			}
  			return obj['__id'];
  		},

  		// Deep clone a language definition (e.g. to extend it)
  		clone: function deepClone(o, visited) {
  			var clone, id, type = _.util.type(o);
  			visited = visited || {};

  			switch (type) {
  				case 'Object':
  					id = _.util.objId(o);
  					if (visited[id]) {
  						return visited[id];
  					}
  					clone = {};
  					visited[id] = clone;

  					for (var key in o) {
  						if (o.hasOwnProperty(key)) {
  							clone[key] = deepClone(o[key], visited);
  						}
  					}

  					return clone;

  				case 'Array':
  					id = _.util.objId(o);
  					if (visited[id]) {
  						return visited[id];
  					}
  					clone = [];
  					visited[id] = clone;

  					o.forEach(function (v, i) {
  						clone[i] = deepClone(v, visited);
  					});

  					return clone;

  				default:
  					return o;
  			}
  		}
  	},

  	languages: {
  		extend: function (id, redef) {
  			var lang = _.util.clone(_.languages[id]);

  			for (var key in redef) {
  				lang[key] = redef[key];
  			}

  			return lang;
  		},

  		/**
  		 * Insert a token before another token in a language literal
  		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
  		 * we cannot just provide an object, we need an object and a key.
  		 * @param inside The key (or language id) of the parent
  		 * @param before The key to insert before.
  		 * @param insert Object with the key/value pairs to insert
  		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
  		 */
  		insertBefore: function (inside, before, insert, root) {
  			root = root || _.languages;
  			var grammar = root[inside];
  			var ret = {};

  			for (var token in grammar) {
  				if (grammar.hasOwnProperty(token)) {

  					if (token == before) {
  						for (var newToken in insert) {
  							if (insert.hasOwnProperty(newToken)) {
  								ret[newToken] = insert[newToken];
  							}
  						}
  					}

  					// Do not insert token which also occur in insert. See #1525
  					if (!insert.hasOwnProperty(token)) {
  						ret[token] = grammar[token];
  					}
  				}
  			}

  			var old = root[inside];
  			root[inside] = ret;

  			// Update references in other language definitions
  			_.languages.DFS(_.languages, function(key, value) {
  				if (value === old && key != inside) {
  					this[key] = ret;
  				}
  			});

  			return ret;
  		},

  		// Traverse a language definition with Depth First Search
  		DFS: function DFS(o, callback, type, visited) {
  			visited = visited || {};

  			var objId = _.util.objId;

  			for (var i in o) {
  				if (o.hasOwnProperty(i)) {
  					callback.call(o, i, o[i], type || i);

  					var property = o[i],
  					    propertyType = _.util.type(property);

  					if (propertyType === 'Object' && !visited[objId(property)]) {
  						visited[objId(property)] = true;
  						DFS(property, callback, null, visited);
  					}
  					else if (propertyType === 'Array' && !visited[objId(property)]) {
  						visited[objId(property)] = true;
  						DFS(property, callback, i, visited);
  					}
  				}
  			}
  		}
  	},
  	plugins: {},

  	highlightAll: function(async, callback) {
  		_.highlightAllUnder(document, async, callback);
  	},

  	highlightAllUnder: function(container, async, callback) {
  		var env = {
  			callback: callback,
  			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
  		};

  		_.hooks.run('before-highlightall', env);

  		var elements = container.querySelectorAll(env.selector);

  		for (var i=0, element; element = elements[i++];) {
  			_.highlightElement(element, async === true, env.callback);
  		}
  	},

  	highlightElement: function(element, async, callback) {
  		// Find language
  		var language = 'none', grammar, parent = element;

  		while (parent && !lang.test(parent.className)) {
  			parent = parent.parentNode;
  		}

  		if (parent) {
  			language = (parent.className.match(lang) || [,'none'])[1].toLowerCase();
  			grammar = _.languages[language];
  		}

  		// Set language on the element, if not present
  		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

  		if (element.parentNode) {
  			// Set language on the parent, for styling
  			parent = element.parentNode;

  			if (/pre/i.test(parent.nodeName)) {
  				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
  			}
  		}

  		var code = element.textContent;

  		var env = {
  			element: element,
  			language: language,
  			grammar: grammar,
  			code: code
  		};

  		var insertHighlightedCode = function (highlightedCode) {
  			env.highlightedCode = highlightedCode;

  			_.hooks.run('before-insert', env);

  			env.element.innerHTML = env.highlightedCode;

  			_.hooks.run('after-highlight', env);
  			_.hooks.run('complete', env);
  			callback && callback.call(env.element);
  		};

  		_.hooks.run('before-sanity-check', env);

  		if (!env.code) {
  			_.hooks.run('complete', env);
  			return;
  		}

  		_.hooks.run('before-highlight', env);

  		if (!env.grammar) {
  			insertHighlightedCode(_.util.encode(env.code));
  			return;
  		}

  		if (async && _self.Worker) {
  			var worker = new Worker(_.filename);

  			worker.onmessage = function(evt) {
  				insertHighlightedCode(evt.data);
  			};

  			worker.postMessage(JSON.stringify({
  				language: env.language,
  				code: env.code,
  				immediateClose: true
  			}));
  		}
  		else {
  			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
  		}
  	},

  	highlight: function (text, grammar, language) {
  		var env = {
  			code: text,
  			grammar: grammar,
  			language: language
  		};
  		_.hooks.run('before-tokenize', env);
  		env.tokens = _.tokenize(env.code, env.grammar);
  		_.hooks.run('after-tokenize', env);
  		return Token.stringify(_.util.encode(env.tokens), env.language);
  	},

  	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
  		for (var token in grammar) {
  			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
  				continue;
  			}

  			if (token == target) {
  				return;
  			}

  			var patterns = grammar[token];
  			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

  			for (var j = 0; j < patterns.length; ++j) {
  				var pattern = patterns[j],
  					inside = pattern.inside,
  					lookbehind = !!pattern.lookbehind,
  					greedy = !!pattern.greedy,
  					lookbehindLength = 0,
  					alias = pattern.alias;

  				if (greedy && !pattern.pattern.global) {
  					// Without the global flag, lastIndex won't work
  					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
  					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
  				}

  				pattern = pattern.pattern || pattern;

  				// Don’t cache length as it changes during the loop
  				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

  					var str = strarr[i];

  					if (strarr.length > text.length) {
  						// Something went terribly wrong, ABORT, ABORT!
  						return;
  					}

  					if (str instanceof Token) {
  						continue;
  					}

  					if (greedy && i != strarr.length - 1) {
  						pattern.lastIndex = pos;
  						var match = pattern.exec(text);
  						if (!match) {
  							break;
  						}

  						var from = match.index + (lookbehind ? match[1].length : 0),
  						    to = match.index + match[0].length,
  						    k = i,
  						    p = pos;

  						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
  							p += strarr[k].length;
  							// Move the index i to the element in strarr that is closest to from
  							if (from >= p) {
  								++i;
  								pos = p;
  							}
  						}

  						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
  						if (strarr[i] instanceof Token) {
  							continue;
  						}

  						// Number of tokens to delete and replace with the new match
  						delNum = k - i;
  						str = text.slice(pos, p);
  						match.index -= pos;
  					} else {
  						pattern.lastIndex = 0;

  						var match = pattern.exec(str),
  							delNum = 1;
  					}

  					if (!match) {
  						if (oneshot) {
  							break;
  						}

  						continue;
  					}

  					if(lookbehind) {
  						lookbehindLength = match[1] ? match[1].length : 0;
  					}

  					var from = match.index + lookbehindLength,
  					    match = match[0].slice(lookbehindLength),
  					    to = from + match.length,
  					    before = str.slice(0, from),
  					    after = str.slice(to);

  					var args = [i, delNum];

  					if (before) {
  						++i;
  						pos += before.length;
  						args.push(before);
  					}

  					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

  					args.push(wrapped);

  					if (after) {
  						args.push(after);
  					}

  					Array.prototype.splice.apply(strarr, args);

  					if (delNum != 1)
  						{ _.matchGrammar(text, strarr, grammar, i, pos, true, token); }

  					if (oneshot)
  						{ break; }
  				}
  			}
  		}
  	},

  	tokenize: function(text, grammar) {
  		var strarr = [text];

  		var rest = grammar.rest;

  		if (rest) {
  			for (var token in rest) {
  				grammar[token] = rest[token];
  			}

  			delete grammar.rest;
  		}

  		_.matchGrammar(text, strarr, grammar, 0, 0, false);

  		return strarr;
  	},

  	hooks: {
  		all: {},

  		add: function (name, callback) {
  			var hooks = _.hooks.all;

  			hooks[name] = hooks[name] || [];

  			hooks[name].push(callback);
  		},

  		run: function (name, env) {
  			var callbacks = _.hooks.all[name];

  			if (!callbacks || !callbacks.length) {
  				return;
  			}

  			for (var i=0, callback; callback = callbacks[i++];) {
  				callback(env);
  			}
  		}
  	},

  	Token: Token
  };

  _self.Prism = _;

  function Token(type, content, alias, matchedStr, greedy) {
  	this.type = type;
  	this.content = content;
  	this.alias = alias;
  	// Copy of the full string this token was created from
  	this.length = (matchedStr || "").length|0;
  	this.greedy = !!greedy;
  }

  Token.stringify = function(o, language) {
  	if (typeof o == 'string') {
  		return o;
  	}

  	if (Array.isArray(o)) {
  		return o.map(function(element) {
  			return Token.stringify(element, language);
  		}).join('');
  	}

  	var env = {
  		type: o.type,
  		content: Token.stringify(o.content, language),
  		tag: 'span',
  		classes: ['token', o.type],
  		attributes: {},
  		language: language
  	};

  	if (o.alias) {
  		var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
  		Array.prototype.push.apply(env.classes, aliases);
  	}

  	_.hooks.run('wrap', env);

  	var attributes = Object.keys(env.attributes).map(function(name) {
  		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
  	}).join(' ');

  	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
  };

  if (!_self.document) {
  	if (!_self.addEventListener) {
  		// in Node.js
  		return _;
  	}

  	if (!_.disableWorkerMessageHandler) {
  		// In worker
  		_self.addEventListener('message', function (evt) {
  			var message = JSON.parse(evt.data),
  				lang = message.language,
  				code = message.code,
  				immediateClose = message.immediateClose;

  			_self.postMessage(_.highlight(code, _.languages[lang], lang));
  			if (immediateClose) {
  				_self.close();
  			}
  		}, false);
  	}

  	return _;
  }

  //Get current script and highlight
  var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

  if (script) {
  	_.filename = script.src;

  	if (!_.manual && !script.hasAttribute('data-manual')) {
  		if(document.readyState !== "loading") {
  			if (window.requestAnimationFrame) {
  				window.requestAnimationFrame(_.highlightAll);
  			} else {
  				window.setTimeout(_.highlightAll, 16);
  			}
  		}
  		else {
  			document.addEventListener('DOMContentLoaded', _.highlightAll);
  		}
  	}
  }

  return _;

  })(_self);

  if ( module.exports) {
  	module.exports = Prism;
  }

  // hack for components to work correctly in node.js
  if (typeof commonjsGlobal !== 'undefined') {
  	commonjsGlobal.Prism = Prism;
  }


  /* **********************************************
       Begin prism-markup.js
  ********************************************** */

  Prism.languages.markup = {
  	'comment': /<!--[\s\S]*?-->/,
  	'prolog': /<\?[\s\S]+?\?>/,
  	'doctype': /<!DOCTYPE[\s\S]+?>/i,
  	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
  	'tag': {
  		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
  		greedy: true,
  		inside: {
  			'tag': {
  				pattern: /^<\/?[^\s>\/]+/i,
  				inside: {
  					'punctuation': /^<\/?/,
  					'namespace': /^[^\s>\/:]+:/
  				}
  			},
  			'attr-value': {
  				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
  				inside: {
  					'punctuation': [
  						/^=/,
  						{
  							pattern: /^(\s*)["']|["']$/,
  							lookbehind: true
  						}
  					]
  				}
  			},
  			'punctuation': /\/?>/,
  			'attr-name': {
  				pattern: /[^\s>\/]+/,
  				inside: {
  					'namespace': /^[^\s>\/:]+:/
  				}
  			}

  		}
  	},
  	'entity': /&#?[\da-z]{1,8};/i
  };

  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
  	Prism.languages.markup['entity'];

  // Plugin to make entity title show the real entity, idea by Roman Komarov
  Prism.hooks.add('wrap', function(env) {

  	if (env.type === 'entity') {
  		env.attributes['title'] = env.content.replace(/&amp;/, '&');
  	}
  });

  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  	/**
  	 * Adds an inlined language to markup.
  	 *
  	 * An example of an inlined language is CSS with `<style>` tags.
  	 *
  	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
  	 * case insensitive.
  	 * @param {string} lang The language key.
  	 * @example
  	 * addInlined('style', 'css');
  	 */
  	value: function addInlined(tagName, lang) {
  		var includedCdataInside = {};
  		includedCdataInside['language-' + lang] = {
  			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
  			lookbehind: true,
  			inside: Prism.languages[lang]
  		};
  		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

  		var inside = {
  			'included-cdata': {
  				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
  				inside: includedCdataInside
  			}
  		};
  		inside['language-' + lang] = {
  			pattern: /[\s\S]+/,
  			inside: Prism.languages[lang]
  		};

  		var def = {};
  		def[tagName] = {
  			pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
  			lookbehind: true,
  			greedy: true,
  			inside: inside
  		};

  		Prism.languages.insertBefore('markup', 'cdata', def);
  	}
  });

  Prism.languages.xml = Prism.languages.extend('markup', {});
  Prism.languages.html = Prism.languages.markup;
  Prism.languages.mathml = Prism.languages.markup;
  Prism.languages.svg = Prism.languages.markup;


  /* **********************************************
       Begin prism-css.js
  ********************************************** */

  (function (Prism) {

  	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

  	Prism.languages.css = {
  		'comment': /\/\*[\s\S]*?\*\//,
  		'atrule': {
  			pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
  			inside: {
  				'rule': /@[\w-]+/
  				// See rest below
  			}
  		},
  		'url': {
  			pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
  			inside: {
  				'function': /^url/i,
  				'punctuation': /^\(|\)$/
  			}
  		},
  		'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
  		'string': {
  			pattern: string,
  			greedy: true
  		},
  		'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
  		'important': /!important\b/i,
  		'function': /[-a-z0-9]+(?=\()/i,
  		'punctuation': /[(){};:,]/
  	};

  	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

  	var markup = Prism.languages.markup;
  	if (markup) {
  		markup.tag.addInlined('style', 'css');

  		Prism.languages.insertBefore('inside', 'attr-value', {
  			'style-attr': {
  				pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
  				inside: {
  					'attr-name': {
  						pattern: /^\s*style/i,
  						inside: markup.tag.inside
  					},
  					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
  					'attr-value': {
  						pattern: /.+/i,
  						inside: Prism.languages.css
  					}
  				},
  				alias: 'language-css'
  			}
  		}, markup.tag);
  	}

  }(Prism));


  /* **********************************************
       Begin prism-clike.js
  ********************************************** */

  Prism.languages.clike = {
  	'comment': [
  		{
  			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
  			lookbehind: true
  		},
  		{
  			pattern: /(^|[^\\:])\/\/.*/,
  			lookbehind: true,
  			greedy: true
  		}
  	],
  	'string': {
  		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
  		greedy: true
  	},
  	'class-name': {
  		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
  		lookbehind: true,
  		inside: {
  			punctuation: /[.\\]/
  		}
  	},
  	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  	'boolean': /\b(?:true|false)\b/,
  	'function': /\w+(?=\()/,
  	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  	'punctuation': /[{}[\];(),.:]/
  };


  /* **********************************************
       Begin prism-javascript.js
  ********************************************** */

  Prism.languages.javascript = Prism.languages.extend('clike', {
  	'class-name': [
  		Prism.languages.clike['class-name'],
  		{
  			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
  			lookbehind: true
  		}
  	],
  	'keyword': [
  		{
  			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
  			lookbehind: true
  		},
  		{
  			pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
  			lookbehind: true
  		} ],
  	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  	'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
  });

  Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

  Prism.languages.insertBefore('javascript', 'keyword', {
  	'regex': {
  		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
  		lookbehind: true,
  		greedy: true
  	},
  	// This must be declared before keyword because we use "function" inside the look-forward
  	'function-variable': {
  		pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
  		alias: 'function'
  	},
  	'parameter': [
  		{
  			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
  			lookbehind: true,
  			inside: Prism.languages.javascript
  		},
  		{
  			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
  			inside: Prism.languages.javascript
  		},
  		{
  			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
  			lookbehind: true,
  			inside: Prism.languages.javascript
  		},
  		{
  			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
  			lookbehind: true,
  			inside: Prism.languages.javascript
  		}
  	],
  	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });

  Prism.languages.insertBefore('javascript', 'string', {
  	'template-string': {
  		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
  		greedy: true,
  		inside: {
  			'template-punctuation': {
  				pattern: /^`|`$/,
  				alias: 'string'
  			},
  			'interpolation': {
  				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
  				lookbehind: true,
  				inside: {
  					'interpolation-punctuation': {
  						pattern: /^\${|}$/,
  						alias: 'punctuation'
  					},
  					rest: Prism.languages.javascript
  				}
  			},
  			'string': /[\s\S]+/
  		}
  	}
  });

  if (Prism.languages.markup) {
  	Prism.languages.markup.tag.addInlined('script', 'javascript');
  }

  Prism.languages.js = Prism.languages.javascript;


  /* **********************************************
       Begin prism-file-highlight.js
  ********************************************** */

  (function () {
  	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
  		return;
  	}

  	/**
  	 * @param {Element} [container=document]
  	 */
  	self.Prism.fileHighlight = function(container) {
  		container = container || document;

  		var Extensions = {
  			'js': 'javascript',
  			'py': 'python',
  			'rb': 'ruby',
  			'ps1': 'powershell',
  			'psm1': 'powershell',
  			'sh': 'bash',
  			'bat': 'batch',
  			'h': 'c',
  			'tex': 'latex'
  		};

  		Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
  			// ignore if already loaded
  			if (pre.hasAttribute('data-src-loaded')) {
  				return;
  			}

  			// load current
  			var src = pre.getAttribute('data-src');

  			var language, parent = pre;
  			var lang = /\blang(?:uage)?-([\w-]+)\b/i;
  			while (parent && !lang.test(parent.className)) {
  				parent = parent.parentNode;
  			}

  			if (parent) {
  				language = (pre.className.match(lang) || [, ''])[1];
  			}

  			if (!language) {
  				var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
  				language = Extensions[extension] || extension;
  			}

  			var code = document.createElement('code');
  			code.className = 'language-' + language;

  			pre.textContent = '';

  			code.textContent = 'Loading…';

  			pre.appendChild(code);

  			var xhr = new XMLHttpRequest();

  			xhr.open('GET', src, true);

  			xhr.onreadystatechange = function () {
  				if (xhr.readyState == 4) {

  					if (xhr.status < 400 && xhr.responseText) {
  						code.textContent = xhr.responseText;

  						Prism.highlightElement(code);
  						// mark as loaded
  						pre.setAttribute('data-src-loaded', '');
  					}
  					else if (xhr.status >= 400) {
  						code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
  					}
  					else {
  						code.textContent = '✖ Error: File does not exist or is empty';
  					}
  				}
  			};

  			xhr.send(null);
  		});

  		if (Prism.plugins.toolbar) {
  			Prism.plugins.toolbar.registerButton('download-file', function (env) {
  				var pre = env.element.parentNode;
  				if (!pre || !/pre/i.test(pre.nodeName) || !pre.hasAttribute('data-src') || !pre.hasAttribute('data-download-link')) {
  					return;
  				}
  				var src = pre.getAttribute('data-src');
  				var a = document.createElement('a');
  				a.textContent = pre.getAttribute('data-download-link-label') || 'Download';
  				a.setAttribute('download', '');
  				a.href = src;
  				return a;
  			});
  		}

  	};

  	document.addEventListener('DOMContentLoaded', function () {
  		// execute inside handler, for dropping Event as argument
  		self.Prism.fileHighlight();
  	});

  })();
  });

  /**
   * Gen toc tree
   * @link https://github.com/killercup/grock/blob/5280ae63e16c5739e9233d9009bc235ed7d79a50/styles/solarized/assets/js/behavior.coffee#L54-L81
   * @param  {Array} toc
   * @param  {Number} maxLevel
   * @return {Array}
   */
  function genTree(toc, maxLevel) {
    var headlines = [];
    var last = {};

    toc.forEach(function (headline) {
      var level = headline.level || 1;
      var len = level - 1;

      if (level > maxLevel) {
        return
      }
      if (last[len]) {
        last[len].children = (last[len].children || []).concat(headline);
      } else {
        headlines.push(headline);
      }
      last[level] = headline;
    });

    return headlines
  }

  var cache$1 = {};
  var re = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;

  function lower(string) {
    return string.toLowerCase()
  }

  function slugify(str) {
    if (typeof str !== 'string') {
      return ''
    }

    var slug = str
      .trim()
      .replace(/[A-Z]+/g, lower)
      .replace(/<[^>\d]+>/g, '')
      .replace(re, '')
      .replace(/\s/g, '-')
      .replace(/-+/g, '-')
      .replace(/^(\d)/, '_$1');
    var count = cache$1[slug];

    count = hasOwn.call(cache$1, slug) ? count + 1 : 0;
    cache$1[slug] = count;

    if (count) {
      slug = slug + '-' + count;
    }

    return slug
  }

  slugify.clear = function () {
    cache$1 = {};
  };

  function replace(m, $1) {
    return '<img class="emoji" src="https://github.githubassets.com/images/icons/emoji/' + $1 + '.png" alt="' + $1 + '" />'
  }

  function emojify(text) {
    return text
      .replace(/<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g, function (m) { return m.replace(/:/g, '__colon__'); })
      .replace(/:(\w+?):/ig, ( window.emojify) || replace)
      .replace(/__colon__/g, ':')
  }

  var decode = decodeURIComponent;
  var encode = encodeURIComponent;

  function parseQuery(query) {
    var res = {};

    query = query.trim().replace(/^(\?|#|&)/, '');

    if (!query) {
      return res
    }

    // Simple parse
    query.split('&').forEach(function (param) {
      var parts = param.replace(/\+/g, ' ').split('=');

      res[parts[0]] = parts[1] && decode(parts[1]);
    });

    return res
  }

  function stringifyQuery(obj, ignores) {
    if ( ignores === void 0 ) ignores = [];

    var qs = [];

    for (var key in obj) {
      if (ignores.indexOf(key) > -1) {
        continue
      }
      qs.push(
        obj[key] ?
          ((encode(key)) + "=" + (encode(obj[key]))).toLowerCase() :
          encode(key)
      );
    }

    return qs.length ? ("?" + (qs.join('&'))) : ''
  }

  var isAbsolutePath = cached(function (path) {
    return /(:|(\/{2}))/g.test(path)
  });

  var getParentPath = cached(function (path) {
    return /\/$/g.test(path) ?
      path :
      (path = path.match(/(\S*\/)[^/]+$/)) ? path[1] : ''
  });

  var cleanPath = cached(function (path) {
    return path.replace(/^\/+/, '/').replace(/([^:])\/{2,}/g, '$1/')
  });

  var resolvePath = cached(function (path) {
    var segments = path.replace(/^\//, '').split('/');
    var resolved = [];
    for (var i = 0, len = segments.length; i < len; i++) {
      var segment = segments[i];
      if (segment === '..') {
        resolved.pop();
      } else if (segment !== '.') {
        resolved.push(segment);
      }
    }
    return '/' + resolved.join('/')
  });

  function getPath() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return cleanPath(args.join('/'))
  }

  var replaceSlug = cached(function (path) {
    return path.replace('#', '?id=')
  });

  (function (Prism) {

  	/**
  	 * Returns the placeholder for the given language id and index.
  	 *
  	 * @param {string} language
  	 * @param {string|number} index
  	 * @returns {string}
  	 */
  	function getPlaceholder(language, index) {
  		return '___' + language.toUpperCase() + index + '___';
  	}

  	Object.defineProperties(Prism.languages['markup-templating'] = {}, {
  		buildPlaceholders: {
  			/**
  			 * Tokenize all inline templating expressions matching `placeholderPattern`.
  			 *
  			 * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
  			 * `true` will be replaced.
  			 *
  			 * @param {object} env The environment of the `before-tokenize` hook.
  			 * @param {string} language The language id.
  			 * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
  			 * @param {(match: string) => boolean} [replaceFilter]
  			 */
  			value: function (env, language, placeholderPattern, replaceFilter) {
  				if (env.language !== language) {
  					return;
  				}

  				var tokenStack = env.tokenStack = [];

  				env.code = env.code.replace(placeholderPattern, function (match) {
  					if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
  						return match;
  					}
  					var i = tokenStack.length;
  					var placeholder;

  					// Check for existing strings
  					while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1)
  						{ ++i; }

  					// Create a sparse array
  					tokenStack[i] = match;

  					return placeholder;
  				});

  				// Switch the grammar to markup
  				env.grammar = Prism.languages.markup;
  			}
  		},
  		tokenizePlaceholders: {
  			/**
  			 * Replace placeholders with proper tokens after tokenizing.
  			 *
  			 * @param {object} env The environment of the `after-tokenize` hook.
  			 * @param {string} language The language id.
  			 */
  			value: function (env, language) {
  				if (env.language !== language || !env.tokenStack) {
  					return;
  				}

  				// Switch the grammar back
  				env.grammar = Prism.languages[language];

  				var j = 0;
  				var keys = Object.keys(env.tokenStack);

  				function walkTokens(tokens) {
  					for (var i = 0; i < tokens.length; i++) {
  						// all placeholders are replaced already
  						if (j >= keys.length) {
  							break;
  						}

  						var token = tokens[i];
  						if (typeof token === 'string' || (token.content && typeof token.content === 'string')) {
  							var k = keys[j];
  							var t = env.tokenStack[k];
  							var s = typeof token === 'string' ? token : token.content;
  							var placeholder = getPlaceholder(language, k);

  							var index = s.indexOf(placeholder);
  							if (index > -1) {
  								++j;

  								var before = s.substring(0, index);
  								var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
  								var after = s.substring(index + placeholder.length);

  								var replacement = [];
  								if (before) {
  									replacement.push.apply(replacement, walkTokens([before]));
  								}
  								replacement.push(middle);
  								if (after) {
  									replacement.push.apply(replacement, walkTokens([after]));
  								}

  								if (typeof token === 'string') {
  									tokens.splice.apply(tokens, [i, 1].concat(replacement));
  								} else {
  									token.content = replacement;
  								}
  							}
  						} else if (token.content /* && typeof token.content !== 'string' */) {
  							walkTokens(token.content);
  						}
  					}

  					return tokens;
  				}

  				walkTokens(env.tokens);
  			}
  		}
  	});

  }(Prism));

  var cachedLinks = {};

  function getAndRemoveConfig(str) {
    if ( str === void 0 ) str = '';

    var config = {};

    if (str) {
      str = str
        .replace(/^'/, '')
        .replace(/'$/, '')
        .replace(/(?:^|\s):([\w-]+)=?([\w-]+)?/g, function (m, key, value) {
          config[key] = (value && value.replace(/&quot;/g, '')) || true;
          return ''
        })
        .trim();
    }

    return {str: str, config: config}
  }

  var compileMedia = {
    markdown: function markdown(url) {
      return {
        url: url
      }
    },
    mermaid: function mermaid(url) {
      return {
        url: url
      }
    },
    iframe: function iframe(url, title) {
      return {
        html: ("<iframe src=\"" + url + "\" " + (title || 'width=100% height=400') + "></iframe>")
      }
    },
    video: function video(url, title) {
      return {
        html: ("<video src=\"" + url + "\" " + (title || 'controls') + ">Not Support</video>")
      }
    },
    audio: function audio(url, title) {
      return {
        html: ("<audio src=\"" + url + "\" " + (title || 'controls') + ">Not Support</audio>")
      }
    },
    code: function code(url, title) {
      var lang = url.match(/\.(\w+)$/);

      lang = title || (lang && lang[1]);
      if (lang === 'md') {
        lang = 'markdown';
      }

      return {
        url: url,
        lang: lang
      }
    }
  };

  var Compiler = function Compiler(config, router) {
    var this$1 = this;

    this.config = config;
    this.router = router;
    this.cacheTree = {};
    this.toc = [];
    this.cacheTOC = {};
    this.linkTarget = config.externalLinkTarget || '_blank';
    this.linkRel = this.linkTarget === '_blank' ? (config.externalLinkRel || 'noopener') : '';
    this.contentBase = router.getBasePath();

    var renderer = this._initRenderer();
    var compile;
    var mdConf = config.markdown || {};

    if (isFn(mdConf)) {
      compile = mdConf(marked, renderer);
    } else {
      marked.setOptions(
        merge(mdConf, {
          renderer: merge(renderer, mdConf.renderer)
        })
      );
      compile = marked;
    }

    this._marked = compile;
    this.compile = function (text) {
      var isCached = true;
      var result = cached(function (_) {
        isCached = false;
        var html = '';

        if (!text) {
          return text
        }

        if (isPrimitive(text)) {
          html = compile(text);
        } else {
          html = compile.parser(text);
        }

        html = config.noEmoji ? html : emojify(html);
        slugify.clear();

        return html
      })(text);

      var curFileName = this$1.router.parse().file;

      if (isCached) {
        this$1.toc = this$1.cacheTOC[curFileName];
      } else {
        this$1.cacheTOC[curFileName] = [].concat( this$1.toc );
      }

      return result
    };
  };

  Compiler.prototype.compileEmbed = function compileEmbed (href, title) {
    var ref = getAndRemoveConfig(title);
      var str = ref.str;
      var config = ref.config;
    var embed;
    title = str;

    if (config.include) {
      if (!isAbsolutePath(href)) {
        href = getPath(
           this.contentBase,
          getParentPath(this.router.getCurrentPath()),
          href
        );
      }

      var media;
      if (config.type && (media = compileMedia[config.type])) {
        embed = media.call(this, href, title);
        embed.type = config.type;
      } else {
        var type = 'code';
        if (/\.(md|markdown)/.test(href)) {
          type = 'markdown';
        } else if (/\.mmd/.test(href)) {
          type = 'mermaid';
        } else if (/\.html?/.test(href)) {
          type = 'iframe';
        } else if (/\.(mp4|ogg)/.test(href)) {
          type = 'video';
        } else if (/\.mp3/.test(href)) {
          type = 'audio';
        }
        embed = compileMedia[type].call(this, href, title);
        embed.type = type;
      }
      embed.fragment = config.fragment;

      return embed
    }
  };

  Compiler.prototype._matchNotCompileLink = function _matchNotCompileLink (link) {
    var links = this.config.noCompileLinks || [];

    for (var i = 0; i < links.length; i++) {
      var n = links[i];
      var re = cachedLinks[n] || (cachedLinks[n] = new RegExp(("^" + n + "$")));

      if (re.test(link)) {
        return link
      }
    }
  };

  Compiler.prototype._initRenderer = function _initRenderer () {
    var renderer = new marked.Renderer();
    var ref = this;
      var linkTarget = ref.linkTarget;
      var linkRel = ref.linkRel;
      var router = ref.router;
      var contentBase = ref.contentBase;
    var _self = this;
    var origin = {};

    /**
     * Render anchor tag
     * @link https://github.com/markedjs/marked#overriding-renderer-methods
     */
    origin.heading = renderer.heading = function (text, level) {
      var ref = getAndRemoveConfig(text);
        var str = ref.str;
        var config = ref.config;
      var nextToc = {level: level, title: str};

      if (/{docsify-ignore}/g.test(str)) {
        str = str.replace('{docsify-ignore}', '');
        nextToc.title = str;
        nextToc.ignoreSubHeading = true;
      }

      if (/{docsify-ignore-all}/g.test(str)) {
        str = str.replace('{docsify-ignore-all}', '');
        nextToc.title = str;
        nextToc.ignoreAllSubs = true;
      }

      var slug = slugify(config.id || str);
      var url = router.toURL(router.getCurrentPath(), {id: slug});
      nextToc.slug = url;
      _self.toc.push(nextToc);

      return ("<h" + level + " id=\"" + slug + "\"><a href=\"" + url + "\" data-id=\"" + slug + "\" class=\"anchor\"><span>" + str + "</span></a></h" + level + ">")
    };
    // Highlight code
    origin.code = renderer.code = function (code, lang) {
        if ( lang === void 0 ) lang = '';

      code = code.replace(/@DOCSIFY_QM@/g, '`');
      var hl = prism.highlight(
        code,
        prism.languages[lang] || prism.languages.markup
      );

      return ("<pre v-pre data-lang=\"" + lang + "\"><code class=\"lang-" + lang + "\">" + hl + "</code></pre>")
    };
    origin.link = renderer.link = function (href, title, text) {
        if ( title === void 0 ) title = '';

      var attrs = '';

      var ref = getAndRemoveConfig(title);
        var str = ref.str;
        var config = ref.config;
      title = str;

      if (
        !isAbsolutePath(href) &&
        !_self._matchNotCompileLink(href) &&
        !config.ignore
      ) {
        if (href === _self.config.homepage) {
          href = 'README';
        }
        href = router.toURL(href, null, router.getCurrentPath());
      } else {
        attrs += href.indexOf('mailto:') === 0 ? '' : (" target=\"" + linkTarget + "\"");
        attrs += href.indexOf('mailto:') === 0 ? '' : (linkRel !== '' ? (" rel=\"" + linkRel + "\"") : '');
      }

      if (config.target) {
        attrs += ' target=' + config.target;
      }

      if (config.disabled) {
        attrs += ' disabled';
        href = 'javascript:void(0)';
      }

      if (title) {
        attrs += " title=\"" + title + "\"";
      }

      return ("<a href=\"" + href + "\"" + attrs + ">" + text + "</a>")
    };
    origin.paragraph = renderer.paragraph = function (text) {
      var result;
      if (/^!&gt;/.test(text)) {
        result = helper('tip', text);
      } else if (/^\?&gt;/.test(text)) {
        result = helper('warn', text);
      } else {
        result = "<p>" + text + "</p>";
      }
      return result
    };
    origin.image = renderer.image = function (href, title, text) {
      var url = href;
      var attrs = '';

      var ref = getAndRemoveConfig(title);
        var str = ref.str;
        var config = ref.config;
      title = str;

      if (config['no-zoom']) {
        attrs += ' data-no-zoom';
      }

      if (title) {
        attrs += " title=\"" + title + "\"";
      }

      var size = config.size;
      if (size) {
        var sizes = size.split('x');
        if (sizes[1]) {
          attrs += 'width=' + sizes[0] + ' height=' + sizes[1];
        } else {
          attrs += 'width=' + sizes[0];
        }
      }

      if (!isAbsolutePath(href)) {
        url = getPath(contentBase, getParentPath(router.getCurrentPath()), href);
      }

      return ("<img src=\"" + url + "\"data-origin=\"" + href + "\" alt=\"" + text + "\"" + attrs + ">")
    };
    origin.list = renderer.list = function (body, ordered, start) {
      var isTaskList = /<li class="task-list-item">/.test(body.split('class="task-list"')[0]);
      var isStartReq = start && start > 1;
      var tag = ordered ? 'ol' : 'ul';
      var tagAttrs = [
        (isTaskList ? 'class="task-list"' : ''),
        (isStartReq ? ("start=\"" + start + "\"") : '')
      ].join(' ').trim();

      return ("<" + tag + " " + tagAttrs + ">" + body + "</" + tag + ">")
    };
    origin.listitem = renderer.listitem = function (text) {
      var isTaskItem = /^(<input.*type="checkbox"[^>]*>)/.test(text);
      var html = isTaskItem ? ("<li class=\"task-list-item\"><label>" + text + "</label></li>") : ("<li>" + text + "</li>");

      return html
    };

    renderer.origin = origin;

    return renderer
  };

  /**
   * Compile sidebar
   */
  Compiler.prototype.sidebar = function sidebar (text, level) {
    var ref = this;
      var toc = ref.toc;
    var currentPath = this.router.getCurrentPath();
    var html = '';

    if (text) {
      html = this.compile(text);
    } else {
      for (var i = 0; i < toc.length; i++) {
        if (toc[i].ignoreSubHeading) {
          var deletedHeaderLevel = toc[i].level;
          toc.splice(i, 1);
          // Remove headers who are under current header
          for (var j = i; deletedHeaderLevel < toc[j].level && j < toc.length; j++) {
            toc.splice(j, 1) && j-- && i++;
          }
          i--;
        }
      }
      var tree$1 = this.cacheTree[currentPath] || genTree(toc, level);
      html = tree(tree$1, '<ul>{inner}</ul>');
      this.cacheTree[currentPath] = tree$1;
    }

    return html
  };

  /**
   * Compile sub sidebar
   */
  Compiler.prototype.subSidebar = function subSidebar (level) {
    if (!level) {
      this.toc = [];
      return
    }
    var currentPath = this.router.getCurrentPath();
    var ref = this;
      var cacheTree = ref.cacheTree;
      var toc = ref.toc;

    toc[0] && toc[0].ignoreAllSubs && toc.splice(0);
    toc[0] && toc[0].level === 1 && toc.shift();

    for (var i = 0; i < toc.length; i++) {
      toc[i].ignoreSubHeading && toc.splice(i, 1) && i--;
    }
    var tree$1 = cacheTree[currentPath] || genTree(toc, level);

    cacheTree[currentPath] = tree$1;
    this.toc = [];
    return tree(tree$1)
  };

  Compiler.prototype.article = function article (text) {
    return this.compile(text)
  };

  /**
   * Compile cover page
   */
  Compiler.prototype.cover = function cover (text) {
    var cacheToc = this.toc.slice();
    var html = this.compile(text);

    this.toc = cacheToc.slice();

    return html
  };

  var title = $.title;
  /**
   * Toggle button
   */
  function btn(el) {
    var toggle = function (_) { return body.classList.toggle('close'); };

    el = getNode(el);
    if (el == null) {
      return
    }
    on(el, 'click', function (e) {
      e.stopPropagation();
      toggle();
    });

    isMobile &&
      on(
        body,
        'click',
        function (_) { return body.classList.contains('close') && toggle(); }
      );
  }

  function collapse(el) {
    el = getNode(el);
    if (el == null) {
      return
    }
    on(el, 'click', function (ref) {
      var target = ref.target;

      if (
        target.nodeName === 'A' &&
        target.nextSibling &&
        target.nextSibling.classList.contains('app-sub-sidebar')
      ) {
        toggleClass(target.parentNode, 'collapse');
      }
    });
  }

  function sticky() {
    var cover = getNode('section.cover');
    if (!cover) {
      return
    }
    var coverHeight = cover.getBoundingClientRect().height;

    if (window.pageYOffset >= coverHeight || cover.classList.contains('hidden')) {
      toggleClass(body, 'add', 'sticky');
    } else {
      toggleClass(body, 'remove', 'sticky');
    }
  }

  /**
   * Get and active link
   * @param  {object} router
   * @param  {string|element}  el
   * @param  {Boolean} isParent   acitve parent
   * @param  {Boolean} autoTitle  auto set title
   * @return {element}
   */
  function getAndActive(router, el, isParent, autoTitle) {
    el = getNode(el);
    var links = [];
    if (el != null) {
      links = findAll(el, 'a');
    }
    var hash = decodeURI(router.toURL(router.getCurrentPath()));
    var target;

    links.sort(function (a, b) { return b.href.length - a.href.length; }).forEach(function (a) {
      var href = a.getAttribute('href');
      var node = isParent ? a.parentNode : a;

      if (hash.indexOf(href) === 0 && !target) {
        target = a;
        toggleClass(node, 'add', 'active');
      } else {
        toggleClass(node, 'remove', 'active');
      }
    });

    if (autoTitle) {
      $.title = target ? (target.title || ((target.innerText) + " - " + title)) : title;
    }

    return target
  }

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps); } if (staticProps) { defineProperties(Constructor, staticProps); } return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var SingleTweener = function () {
    function SingleTweener() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SingleTweener);

      this.start = opts.start;
      this.end = opts.end;
      this.decimal = opts.decimal;
    }

    _createClass(SingleTweener, [{
      key: "getIntermediateValue",
      value: function getIntermediateValue(tick) {
        if (this.decimal) {
          return tick;
        } else {
          return Math.round(tick);
        }
      }
    }, {
      key: "getFinalValue",
      value: function getFinalValue() {
        return this.end;
      }
    }]);

    return SingleTweener;
  }();

  var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps); } if (staticProps) { defineProperties(Constructor, staticProps); } return Constructor; }; }();

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Tweezer = function () {
    function Tweezer() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck$1(this, Tweezer);

      this.duration = opts.duration || 1000;
      this.ease = opts.easing || this._defaultEase;
      this.tweener = opts.tweener || new SingleTweener(opts);
      this.start = this.tweener.start;
      this.end = this.tweener.end;

      this.frame = null;
      this.next = null;
      this.isRunning = false;
      this.events = {};
      this.direction = this.start < this.end ? 'up' : 'down';
    }

    _createClass$1(Tweezer, [{
      key: 'begin',
      value: function begin() {
        if (!this.isRunning && this.next !== this.end) {
          this.frame = window.requestAnimationFrame(this._tick.bind(this));
        }
        return this;
      }
    }, {
      key: 'stop',
      value: function stop() {
        window.cancelAnimationFrame(this.frame);
        this.isRunning = false;
        this.frame = null;
        this.timeStart = null;
        this.next = null;
        return this;
      }
    }, {
      key: 'on',
      value: function on(name, handler) {
        this.events[name] = this.events[name] || [];
        this.events[name].push(handler);
        return this;
      }
    }, {
      key: '_emit',
      value: function _emit(name, val) {
        var _this = this;

        var e = this.events[name];
        e && e.forEach(function (handler) {
          return handler.call(_this, val);
        });
      }
    }, {
      key: '_tick',
      value: function _tick(currentTime) {
        this.isRunning = true;

        var lastTick = this.next || this.start;

        if (!this.timeStart) { this.timeStart = currentTime; }
        this.timeElapsed = currentTime - this.timeStart;
        this.next = this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration);

        if (this._shouldTick(lastTick)) {
          this._emit('tick', this.tweener.getIntermediateValue(this.next));
          this.frame = window.requestAnimationFrame(this._tick.bind(this));
        } else {
          this._emit('tick', this.tweener.getFinalValue());
          this._emit('done', null);
        }
      }
    }, {
      key: '_shouldTick',
      value: function _shouldTick(lastTick) {
        return {
          up: this.next < this.end && lastTick <= this.next,
          down: this.next > this.end && lastTick >= this.next
        }[this.direction];
      }
    }, {
      key: '_defaultEase',
      value: function _defaultEase(t, b, c, d) {
        if ((t /= d / 2) < 1) { return c / 2 * t * t + b; }
        return -c / 2 * (--t * (t - 2) - 1) + b;
      }
    }]);

    return Tweezer;
  }();

  var nav = {};
  var hoverOver = false;
  var scroller = null;
  var enableScrollEvent = true;
  var coverHeight = 0;

  function scrollTo(el) {
    if (scroller) {
      scroller.stop();
    }
    enableScrollEvent = false;
    scroller = new Tweezer({
      start: window.pageYOffset,
      end: el.getBoundingClientRect().top + window.pageYOffset,
      duration: 500
    })
      .on('tick', function (v) { return window.scrollTo(0, v); })
      .on('done', function () {
        enableScrollEvent = true;
        scroller = null;
      })
      .begin();
  }

  function highlight(path) {
    if (!enableScrollEvent) {
      return
    }
    var sidebar = getNode('.sidebar');
    var anchors = findAll('.anchor');
    var wrap = find(sidebar, '.sidebar-nav');
    var active = find(sidebar, 'li.active');
    var doc = document.documentElement;
    var top = ((doc && doc.scrollTop) || document.body.scrollTop) - coverHeight;
    var last;

    for (var i = 0, len = anchors.length; i < len; i += 1) {
      var node = anchors[i];

      if (node.offsetTop > top) {
        if (!last) {
          last = node;
        }
        break
      } else {
        last = node;
      }
    }
    if (!last) {
      return
    }
    var li = nav[getNavKey(decodeURIComponent(path), last.getAttribute('data-id'))];

    if (!li || li === active) {
      return
    }

    active && active.classList.remove('active');
    li.classList.add('active');
    active = li;

    // Scroll into view
    // https://github.com/vuejs/vuejs.org/blob/master/themes/vue/source/js/common.js#L282-L297
    if (!hoverOver && body.classList.contains('sticky')) {
      var height = sidebar.clientHeight;
      var curOffset = 0;
      var cur = active.offsetTop + active.clientHeight + 40;
      var isInView =
        active.offsetTop >= wrap.scrollTop && cur <= wrap.scrollTop + height;
      var notThan = cur - curOffset < height;
      var top$1 = isInView ? wrap.scrollTop : notThan ? curOffset : cur - height;

      sidebar.scrollTop = top$1;
    }
  }

  function getNavKey(path, id) {
    return (path + "?id=" + id)
  }

  function scrollActiveSidebar(router) {
    var cover = find('.cover.show');
    coverHeight = cover ? cover.offsetHeight : 0;

    var sidebar = getNode('.sidebar');
    var lis = [];
    if (sidebar != null) {
      lis = findAll(sidebar, 'li');
    }

    for (var i = 0, len = lis.length; i < len; i += 1) {
      var li = lis[i];
      var a = li.querySelector('a');
      if (!a) {
        continue
      }
      var href = a.getAttribute('href');

      if (href !== '/') {
        var ref = router.parse(href);
        var id = ref.query.id;
        var path$1 = ref.path;
        if (id) {
          href = getNavKey(path$1, id);
        }
      }

      if (href) {
        nav[decodeURIComponent(href)] = li;
      }
    }

    if (isMobile) {
      return
    }
    var path = router.getCurrentPath();
    off('scroll', function () { return highlight(path); });
    on('scroll', function () { return highlight(path); });
    on(sidebar, 'mouseover', function () {
      hoverOver = true;
    });
    on(sidebar, 'mouseleave', function () {
      hoverOver = false;
    });
  }

  function scrollIntoView(path, id) {
    if (!id) {
      return
    }

    var section = find('#' + id);
    section && scrollTo(section);

    var li = nav[getNavKey(path, id)];
    var sidebar = getNode('.sidebar');
    var active = find(sidebar, 'li.active');
    active && active.classList.remove('active');
    li && li.classList.add('active');
  }

  var scrollEl = $.scrollingElement || $.documentElement;

  function scroll2Top(offset) {
    if ( offset === void 0 ) offset = 0;

    scrollEl.scrollTop = offset === true ? 0 : Number(offset);
  }

  var cached$1 = {};

  function walkFetchEmbed(ref, cb) {
    var embedTokens = ref.embedTokens;
    var compile = ref.compile;
    var fetch = ref.fetch;

    var token;
    var step = 0;
    var count = 1;

    if (!embedTokens.length) {
      return cb({})
    }

    while ((token = embedTokens[step++])) {
      var next = (function (token) {
        return function (text) {
          var embedToken;
          if (text) {
            if (token.embed.type === 'markdown') {
              embedToken = compile.lexer(text);
            } else if (token.embed.type === 'code') {
              if (token.embed.fragment) {
                var fragment = token.embed.fragment;
                var pattern = new RegExp(("(?:###|\\/\\/\\/)\\s*\\[" + fragment + "\\]([\\s\\S]*)(?:###|\\/\\/\\/)\\s*\\[" + fragment + "\\]"));
                text = ((text.match(pattern) || [])[1] || '').trim();
              }
              embedToken = compile.lexer(
                '```' +
                  token.embed.lang +
                  '\n' +
                  text.replace(/`/g, '@DOCSIFY_QM@') +
                  '\n```\n'
              );
            } else if (token.embed.type === 'mermaid') {
              embedToken = [
                {type: 'html', text: ("<div class=\"mermaid\">\n" + text + "\n</div>")}
              ];
              embedToken.links = {};
            } else {
              embedToken = [{type: 'html', text: text}];
              embedToken.links = {};
            }
          }
          cb({token: token, embedToken: embedToken});
          if (++count >= step) {
            cb({});
          }
        }
      })(token);

      if (token.embed.url) {
        {
          get(token.embed.url).then(next);
        }
      } else {
        next(token.embed.html);
      }
    }
  }

  function prerenderEmbed(ref, done) {
    var compiler = ref.compiler;
    var raw = ref.raw; if ( raw === void 0 ) raw = '';
    var fetch = ref.fetch;

    var hit = cached$1[raw];
    if (hit) {
      var copy = hit.slice();
      copy.links = hit.links;
      return done(copy)
    }

    var compile = compiler._marked;
    var tokens = compile.lexer(raw);
    var embedTokens = [];
    var linkRE = compile.InlineLexer.rules.link;
    var links = tokens.links;

    tokens.forEach(function (token, index) {
      if (token.type === 'paragraph') {
        token.text = token.text.replace(
          new RegExp(linkRE.source, 'g'),
          function (src, filename, href, title) {
            var embed = compiler.compileEmbed(href, title);

            if (embed) {
              embedTokens.push({
                index: index,
                embed: embed
              });
            }

            return src
          }
        );
      }
    });

    var moveIndex = 0;
    walkFetchEmbed({compile: compile, embedTokens: embedTokens, fetch: fetch}, function (ref) {
      var embedToken = ref.embedToken;
      var token = ref.token;

      if (token) {
        var index = token.index + moveIndex;

        merge(links, embedToken.links);

        tokens = tokens
          .slice(0, index)
          .concat(embedToken, tokens.slice(index + 1));
        moveIndex += embedToken.length - 1;
      } else {
        cached$1[raw] = tokens.concat();
        tokens.links = cached$1[raw].links = links;
        done(tokens);
      }
    });
  }

  function executeScript() {
    var script = findAll('.markdown-section>script')
      .filter(function (s) { return !/template/.test(s.type); })[0];
    if (!script) {
      return false
    }
    var code = script.innerText.trim();
    if (!code) {
      return false
    }

    setTimeout(function (_) {
      window.__EXECUTE_RESULT__ = new Function(code)();
    }, 0);
  }

  function formatUpdated(html, updated, fn) {
    updated =
      typeof fn === 'function' ?
        fn(updated) :
        typeof fn === 'string' ?
          tinydate(fn)(new Date(updated)) :
          updated;

    return html.replace(/{docsify-updated}/g, updated)
  }

  function renderMain(html) {
    if (!html) {
      html = '<h1>404 - Not found</h1>';
    }

    this._renderTo('.markdown-section', html);
    // Render sidebar with the TOC
    !this.config.loadSidebar && this._renderSidebar();

    // Execute script
    if (
      this.config.executeScript !== false &&
      typeof window.Vue !== 'undefined' &&
      !executeScript()
    ) {
      setTimeout(function (_) {
        var vueVM = window.__EXECUTE_RESULT__;
        vueVM && vueVM.$destroy && vueVM.$destroy();
        window.__EXECUTE_RESULT__ = new window.Vue().$mount('#main');
      }, 0);
    } else {
      this.config.executeScript && executeScript();
    }
  }

  function renderNameLink(vm) {
    var el = getNode('.app-name-link');
    var nameLink = vm.config.nameLink;
    var path = vm.route.path;

    if (!el) {
      return
    }

    if (isPrimitive(vm.config.nameLink)) {
      el.setAttribute('href', nameLink);
    } else if (typeof nameLink === 'object') {
      var match = Object.keys(nameLink).filter(function (key) { return path.indexOf(key) > -1; })[0];

      el.setAttribute('href', nameLink[match]);
    }
  }

  function renderMixin(proto) {
    proto._renderTo = function (el, content, replace) {
      var node = getNode(el);
      if (node) {
        node[replace ? 'outerHTML' : 'innerHTML'] = content;
      }
    };

    proto._renderSidebar = function (text) {
      var ref = this.config;
      var maxLevel = ref.maxLevel;
      var subMaxLevel = ref.subMaxLevel;
      var loadSidebar = ref.loadSidebar;

      this._renderTo('.sidebar-nav', this.compiler.sidebar(text, maxLevel));
      var activeEl = getAndActive(this.router, '.sidebar-nav', true, true);
      if (loadSidebar && activeEl) {
        activeEl.parentNode.innerHTML +=
          this.compiler.subSidebar(subMaxLevel) || '';
      } else {
        // Reset toc
        this.compiler.subSidebar();
      }
      // Bind event
      this._bindEventOnRendered(activeEl);
    };

    proto._bindEventOnRendered = function (activeEl) {
      var ref = this.config;
      var autoHeader = ref.autoHeader;
      var auto2top = ref.auto2top;

      scrollActiveSidebar(this.router);

      if (autoHeader && activeEl) {
        var main = getNode('#main');
        var firstNode = main.children[0];
        if (firstNode && firstNode.tagName !== 'H1') {
          var h1 = create('h1');
          h1.innerText = activeEl.innerText;
          before(main, h1);
        }
      }

      auto2top && scroll2Top(auto2top);
    };

    proto._renderNav = function (text) {
      text && this._renderTo('nav', this.compiler.compile(text));
      if (this.config.loadNavbar) {
        getAndActive(this.router, 'nav');
      }
    };

    proto._renderMain = function (text, opt, next) {
      var this$1 = this;
      if ( opt === void 0 ) opt = {};

      if (!text) {
        return renderMain.call(this, text)
      }

      callHook(this, 'beforeEach', text, function (result) {
        var html;
        var callback = function () {
          if (opt.updatedAt) {
            html = formatUpdated(html, opt.updatedAt, this$1.config.formatUpdated);
          }

          callHook(this$1, 'afterEach', html, function (text) { return renderMain.call(this$1, text); });
        };
        if (this$1.isHTML) {
          html = this$1.result = text;
          callback();
          next();
        } else {
          prerenderEmbed(
            {
              compiler: this$1.compiler,
              raw: result
            },
            function (tokens) {
              html = this$1.compiler.compile(tokens);
              callback();
              next();
            }
          );
        }
      });
    };

    proto._renderCover = function (text, coverOnly) {
      var el = getNode('.cover');

      toggleClass(getNode('main'), coverOnly ? 'add' : 'remove', 'hidden');
      if (!text) {
        toggleClass(el, 'remove', 'show');
        return
      }
      toggleClass(el, 'add', 'show');

      var html = this.coverIsHTML ? text : this.compiler.cover(text);

      var m = html
        .trim()
        .match('<p><img.*?data-origin="(.*?)"[^a]+alt="(.*?)">([^<]*?)</p>$');

      if (m) {
        if (m[2] === 'color') {
          el.style.background = m[1] + (m[3] || '');
        } else {
          var path = m[1];

          toggleClass(el, 'add', 'has-mask');
          if (!isAbsolutePath(m[1])) {
            path = getPath(this.router.getBasePath(), m[1]);
          }
          el.style.backgroundImage = "url(" + path + ")";
          el.style.backgroundSize = 'cover';
          el.style.backgroundPosition = 'center center';
        }
        html = html.replace(m[0], '');
      }

      this._renderTo('.cover-main', html);
      sticky();
    };

    proto._updateRender = function () {
      // Render name link
      renderNameLink(this);
    };
  }

  function initRender(vm) {
    var config = vm.config;

    // Init markdown compiler
    vm.compiler = new Compiler(config, vm.router);
    {
      window.__current_docsify_compiler__ = vm.compiler;
    }

    var id = config.el || '#app';
    var navEl = find('nav') || create('nav');

    var el = find(id);
    var html = '';
    var navAppendToTarget = body;

    if (el) {
      if (config.repo) {
        html += corner(config.repo, config.cornerExternalLinkTarge);
      }
      if (config.coverpage) {
        html += cover();
      }

      if (config.logo) {
        var isBase64 = /^data:image/.test(config.logo);
        var isExternal = /(?:http[s]?:)?\/\//.test(config.logo);
        var isRelative = /^\./.test(config.logo);

        if (!isBase64 && !isExternal && !isRelative) {
          config.logo = getPath(vm.router.getBasePath(), config.logo);
        }
      }

      html += main(config);
      // Render main app
      vm._renderTo(el, html, true);
    } else {
      vm.rendered = true;
    }

    if (config.mergeNavbar && isMobile) {
      navAppendToTarget = find('.sidebar');
    } else {
      navEl.classList.add('app-nav');

      if (!config.repo) {
        navEl.classList.add('no-badge');
      }
    }

    // Add nav
    if (config.loadNavbar) {
      before(navAppendToTarget, navEl);
    }

    if (config.themeColor) {
      $.head.appendChild(
        create('div', theme(config.themeColor)).firstElementChild
      );
      // Polyfll
      cssVars(config.themeColor);
    }
    vm._updateRender();
    toggleClass(body, 'ready');
  }

  var cached$2 = {};

  function getAlias(path, alias, last) {
    var match = Object.keys(alias).filter(function (key) {
      var re = cached$2[key] || (cached$2[key] = new RegExp(("^" + key + "$")));
      return re.test(path) && path !== last
    })[0];

    return match ?
      getAlias(path.replace(cached$2[match], alias[match]), alias, path) :
      path
  }

  function getFileName(path, ext) {
    return new RegExp(("\\.(" + (ext.replace(/^\./, '')) + "|html)$"), 'g').test(path) ?
      path :
      /\/$/g.test(path) ? (path + "README" + ext) : ("" + path + ext)
  }

  var History = function History(config) {
    this.config = config;
  };

  History.prototype.getBasePath = function getBasePath () {
    return this.config.basePath
  };

  History.prototype.getFile = function getFile (path, isRelative) {
      if ( path === void 0 ) path = this.getCurrentPath();

    var ref = this;
      var config = ref.config;
    var base = this.getBasePath();
    var ext = typeof config.ext === 'string' ? config.ext : '.md';

    path = config.alias ? getAlias(path, config.alias) : path;
    path = getFileName(path, ext);
    path = path === ("/README" + ext) ? config.homepage || path : path;
    path = isAbsolutePath(path) ? path : getPath(base, path);

    if (isRelative) {
      path = path.replace(new RegExp(("^" + base)), '');
    }

    return path
  };

  History.prototype.onchange = function onchange (cb) {
      if ( cb === void 0 ) cb = noop;

    cb();
  };

  History.prototype.getCurrentPath = function getCurrentPath () {};

  History.prototype.normalize = function normalize () {};

  History.prototype.parse = function parse () {};

  History.prototype.toURL = function toURL (path, params, currentRoute) {
    var local = currentRoute && path[0] === '#';
    var route = this.parse(replaceSlug(path));

    route.query = merge({}, route.query, params);
    path = route.path + stringifyQuery(route.query);
    path = path.replace(/\.md(\?)|\.md$/, '$1');

    if (local) {
      var idIndex = currentRoute.indexOf('?');
      path =
        (idIndex > 0 ? currentRoute.substring(0, idIndex) : currentRoute) + path;
    }

    if (this.config.relativePath && path.indexOf('/') !== 0) {
      var currentDir = currentRoute.substring(0, currentRoute.lastIndexOf('/') + 1);
      return cleanPath(resolvePath(currentDir + path))
    }
    return cleanPath('/' + path)
  };

  function replaceHash(path) {
    var i = location.href.indexOf('#');
    location.replace(location.href.slice(0, i >= 0 ? i : 0) + '#' + path);
  }

  var HashHistory = /*@__PURE__*/(function (History) {
    function HashHistory(config) {
      History.call(this, config);
      this.mode = 'hash';
    }

    if ( History ) HashHistory.__proto__ = History;
    HashHistory.prototype = Object.create( History && History.prototype );
    HashHistory.prototype.constructor = HashHistory;

    HashHistory.prototype.getBasePath = function getBasePath () {
      var path = window.location.pathname || '';
      var base = this.config.basePath;

      return /^(\/|https?:)/g.test(base) ? base : cleanPath(path + '/' + base)
    };

    HashHistory.prototype.getCurrentPath = function getCurrentPath () {
      // We can't use location.hash here because it's not
      // consistent across browsers - Firefox will pre-decode it!
      var href = location.href;
      var index = href.indexOf('#');
      return index === -1 ? '' : href.slice(index + 1)
    };

    HashHistory.prototype.onchange = function onchange (cb) {
      if ( cb === void 0 ) cb = noop;

      on('hashchange', cb);
    };

    HashHistory.prototype.normalize = function normalize () {
      var path = this.getCurrentPath();

      path = replaceSlug(path);

      if (path.charAt(0) === '/') {
        return replaceHash(path)
      }
      replaceHash('/' + path);
    };

    /**
     * Parse the url
     * @param {string} [path=location.herf]
     * @return {object} { path, query }
     */
    HashHistory.prototype.parse = function parse (path) {
      if ( path === void 0 ) path = location.href;

      var query = '';

      var hashIndex = path.indexOf('#');
      if (hashIndex >= 0) {
        path = path.slice(hashIndex + 1);
      }

      var queryIndex = path.indexOf('?');
      if (queryIndex >= 0) {
        query = path.slice(queryIndex + 1);
        path = path.slice(0, queryIndex);
      }

      return {
        path: path,
        file: this.getFile(path, true),
        query: parseQuery(query)
      }
    };

    HashHistory.prototype.toURL = function toURL (path, params, currentRoute) {
      return '#' + History.prototype.toURL.call(this, path, params, currentRoute)
    };

    return HashHistory;
  }(History));

  var HTML5History = /*@__PURE__*/(function (History) {
    function HTML5History(config) {
      History.call(this, config);
      this.mode = 'history';
    }

    if ( History ) HTML5History.__proto__ = History;
    HTML5History.prototype = Object.create( History && History.prototype );
    HTML5History.prototype.constructor = HTML5History;

    HTML5History.prototype.getCurrentPath = function getCurrentPath () {
      var base = this.getBasePath();
      var path = window.location.pathname;

      if (base && path.indexOf(base) === 0) {
        path = path.slice(base.length);
      }

      return (path || '/') + window.location.search + window.location.hash
    };

    HTML5History.prototype.onchange = function onchange (cb) {
      if ( cb === void 0 ) cb = noop;

      on('click', function (e) {
        var el = e.target.tagName === 'A' ? e.target : e.target.parentNode;

        if (el.tagName === 'A' && !/_blank/.test(el.target)) {
          e.preventDefault();
          var url = el.href;
          window.history.pushState({key: url}, '', url);
          cb();
        }
      });

      on('popstate', cb);
    };

    /**
     * Parse the url
     * @param {string} [path=location.href]
     * @return {object} { path, query }
     */
    HTML5History.prototype.parse = function parse (path) {
      if ( path === void 0 ) path = location.href;

      var query = '';

      var queryIndex = path.indexOf('?');
      if (queryIndex >= 0) {
        query = path.slice(queryIndex + 1);
        path = path.slice(0, queryIndex);
      }

      var base = getPath(location.origin);
      var baseIndex = path.indexOf(base);

      if (baseIndex > -1) {
        path = path.slice(baseIndex + base.length);
      }

      return {
        path: path,
        file: this.getFile(path),
        query: parseQuery(query)
      }
    };

    return HTML5History;
  }(History));

  function routerMixin(proto) {
    proto.route = {};
  }

  var lastRoute = {};

  function updateRender(vm) {
    vm.router.normalize();
    vm.route = vm.router.parse();
    body.setAttribute('data-page', vm.route.file);
  }

  function initRouter(vm) {
    var config = vm.config;
    var mode = config.routerMode || 'hash';
    var router;

    if (mode === 'history' && supportsPushState) {
      router = new HTML5History(config);
    } else {
      router = new HashHistory(config);
    }

    vm.router = router;
    updateRender(vm);
    lastRoute = vm.route;

    router.onchange(function (_) {
      updateRender(vm);
      vm._updateRender();

      if (lastRoute.path === vm.route.path) {
        vm.$resetEvents();
        return
      }

      vm.$fetch();
      lastRoute = vm.route;
    });
  }

  function eventMixin(proto) {
    proto.$resetEvents = function () {
      scrollIntoView(this.route.path, this.route.query.id);

      if (this.config.loadNavbar) {
        getAndActive(this.router, 'nav');
      }
    };
  }

  function initEvent(vm) {
    // Bind toggle button
    btn('button.sidebar-toggle', vm.router);
    collapse('.sidebar', vm.router);
    // Bind sticky effect
    if (vm.config.coverpage) {
      !isMobile && on('scroll', sticky);
    } else {
      body.classList.add('sticky');
    }
  }

  function loadNested(path, qs, file, next, vm, first) {
    path = first ? path : path.replace(/\/$/, '');
    path = getParentPath(path);

    if (!path) {
      return
    }

    get(
      vm.router.getFile(path + file) + qs,
      false,
      vm.config.requestHeaders
    ).then(next, function (_) { return loadNested(path, qs, file, next, vm); });
  }

  function fetchMixin(proto) {
    var last;

    var abort = function () { return last && last.abort && last.abort(); };
    var request = function (url, hasbar, requestHeaders) {
      abort();
      last = get(url, true, requestHeaders);
      return last
    };

    var get404Path = function (path, config) {
      var notFoundPage = config.notFoundPage;
      var ext = config.ext;
      var defaultPath = '_404' + (ext || '.md');
      var key;
      var path404;

      switch (typeof notFoundPage) {
        case 'boolean':
          path404 = defaultPath;
          break
        case 'string':
          path404 = notFoundPage;
          break

        case 'object':
          key = Object.keys(notFoundPage)
            .sort(function (a, b) { return b.length - a.length; })
            .find(function (key) { return path.match(new RegExp('^' + key)); });

          path404 = (key && notFoundPage[key]) || defaultPath;
          break

        default:
          break
      }

      return path404
    };

    proto._loadSideAndNav = function (path, qs, loadSidebar, cb) {
      var this$1 = this;

      return function () {
        if (!loadSidebar) {
          return cb()
        }

        var fn = function (result) {
          this$1._renderSidebar(result);
          cb();
        };

        // Load sidebar
        loadNested(path, qs, loadSidebar, fn, this$1, true);
      }
    };

    proto._fetch = function (cb) {
      var this$1 = this;
      if ( cb === void 0 ) cb = noop;

      var ref = this.route;
      var path = ref.path;
      var query = ref.query;
      var qs = stringifyQuery(query, ['id']);
      var ref$1 = this.config;
      var loadNavbar = ref$1.loadNavbar;
      var requestHeaders = ref$1.requestHeaders;
      var loadSidebar = ref$1.loadSidebar;
      // Abort last request

      var file = this.router.getFile(path);
      var req = request(file + qs, true, requestHeaders);

      // Current page is html
      this.isHTML = /\.html$/g.test(file);

      // Load main content
      req.then(
        function (text, opt) { return this$1._renderMain(
            text,
            opt,
            this$1._loadSideAndNav(path, qs, loadSidebar, cb)
          ); },
        function (_) {
          this$1._fetchFallbackPage(file, qs, cb) || this$1._fetch404(file, qs, cb);
        }
      );

      // Load nav
      loadNavbar &&
        loadNested(
          path,
          qs,
          loadNavbar,
          function (text) { return this$1._renderNav(text); },
          this,
          true
        );
    };

    proto._fetchCover = function () {
      var this$1 = this;

      var ref = this.config;
      var coverpage = ref.coverpage;
      var requestHeaders = ref.requestHeaders;
      var query = this.route.query;
      var root = getParentPath(this.route.path);

      if (coverpage) {
        var path = null;
        var routePath = this.route.path;
        if (typeof coverpage === 'string') {
          if (routePath === '/') {
            path = coverpage;
          }
        } else if (Array.isArray(coverpage)) {
          path = coverpage.indexOf(routePath) > -1 && '_coverpage';
        } else {
          var cover = coverpage[routePath];
          path = cover === true ? '_coverpage' : cover;
        }

        var coverOnly = Boolean(path) && this.config.onlyCover;
        if (path) {
          path = this.router.getFile(root + path);
          this.coverIsHTML = /\.html$/g.test(path);
          get(path + stringifyQuery(query, ['id']), false, requestHeaders).then(
            function (text) { return this$1._renderCover(text, coverOnly); }
          );
        } else {
          this._renderCover(null, coverOnly);
        }
        return coverOnly
      }
    };

    proto.$fetch = function (cb) {
      var this$1 = this;
      if ( cb === void 0 ) cb = noop;

      var done = function () {
        callHook(this$1, 'doneEach');
        cb();
      };

      var onlyCover = this._fetchCover();

      if (onlyCover) {
        done();
      } else {
        this._fetch(function () {
          this$1.$resetEvents();
          done();
        });
      }
    };

    proto._fetchFallbackPage = function (path, qs, cb) {
      var this$1 = this;
      if ( cb === void 0 ) cb = noop;

      var ref = this.config;
      var requestHeaders = ref.requestHeaders;
      var fallbackLanguages = ref.fallbackLanguages;
      var loadSidebar = ref.loadSidebar;

      if (!fallbackLanguages) {
        return false
      }

      var local = path.split('/')[1];

      if (fallbackLanguages.indexOf(local) === -1) {
        return false
      }
      var newPath = path.replace(new RegExp(("^/" + local)), '');
      var req = request(newPath + qs, true, requestHeaders);

      req.then(
        function (text, opt) { return this$1._renderMain(
            text,
            opt,
            this$1._loadSideAndNav(path, qs, loadSidebar, cb)
          ); },
        function () { return this$1._fetch404(path, qs, cb); }
      );

      return true
    };
    /**
     * Load the 404 page
     * @param path
     * @param qs
     * @param cb
     * @returns {*}
     * @private
     */
    proto._fetch404 = function (path, qs, cb) {
      var this$1 = this;
      if ( cb === void 0 ) cb = noop;

      var ref = this.config;
      var loadSidebar = ref.loadSidebar;
      var requestHeaders = ref.requestHeaders;
      var notFoundPage = ref.notFoundPage;

      var fnLoadSideAndNav = this._loadSideAndNav(path, qs, loadSidebar, cb);
      if (notFoundPage) {
        var path404 = get404Path(path, this.config);

        request(this.router.getFile(path404), true, requestHeaders).then(
          function (text, opt) { return this$1._renderMain(text, opt, fnLoadSideAndNav); },
          function () { return this$1._renderMain(null, {}, fnLoadSideAndNav); }
        );
        return true
      }

      this._renderMain(null, {}, fnLoadSideAndNav);
      return false
    };
  }

  function initFetch(vm) {
    var ref = vm.config;
    var loadSidebar = ref.loadSidebar;

    // Server-Side Rendering
    if (vm.rendered) {
      var activeEl = getAndActive(vm.router, '.sidebar-nav', true, true);
      if (loadSidebar && activeEl) {
        activeEl.parentNode.innerHTML += window.__SUB_SIDEBAR__;
      }
      vm._bindEventOnRendered(activeEl);
      vm.$resetEvents();
      callHook(vm, 'doneEach');
      callHook(vm, 'ready');
    } else {
      vm.$fetch(function (_) { return callHook(vm, 'ready'); });
    }
  }

  function initMixin(proto) {
    proto._init = function () {
      var vm = this;
      vm.config = config();

      initLifecycle(vm); // Init hooks
      initPlugin(vm); // Install plugins
      callHook(vm, 'init');
      initRouter(vm); // Add router
      initRender(vm); // Render base DOM
      initEvent(vm); // Bind events
      initFetch(vm); // Fetch data
      callHook(vm, 'mounted');
    };
  }

  function initPlugin(vm) {
    [].concat(vm.config.plugins).forEach(function (fn) { return isFn(fn) && fn(vm._lifecycle, vm); });
  }



  var util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    cached: cached,
    hyphenate: hyphenate,
    hasOwn: hasOwn,
    merge: merge,
    isPrimitive: isPrimitive,
    noop: noop,
    isFn: isFn,
    escapeString: escapeString,
    inBrowser: inBrowser,
    isMobile: isMobile,
    supportsPushState: supportsPushState,
    parseQuery: parseQuery,
    stringifyQuery: stringifyQuery,
    isAbsolutePath: isAbsolutePath,
    getParentPath: getParentPath,
    cleanPath: cleanPath,
    resolvePath: resolvePath,
    getPath: getPath,
    replaceSlug: replaceSlug
  });

  function initGlobalAPI () {
    window.Docsify = {
      util: util,
      dom: dom,
      get: get,
      slugify: slugify,
      version: '4.10.2'
    };
    window.DocsifyCompiler = Compiler;
    window.marked = marked;
    window.Prism = prism;
  }

  /**
   * Fork https://github.com/bendrucker/document-ready/blob/master/index.js
   */
  function ready(callback) {
    var state = document.readyState;

    if (state === 'complete' || state === 'interactive') {
      return setTimeout(callback, 0)
    }

    document.addEventListener('DOMContentLoaded', callback);
  }

  function Docsify() {
    this._init();
  }

  var proto = Docsify.prototype;

  initMixin(proto);
  routerMixin(proto);
  renderMixin(proto);
  fetchMixin(proto);
  eventMixin(proto);

  /**
   * Global API
   */
  initGlobalAPI();

  /**
   * Run Docsify
   */
  ready(function (_) { return new Docsify(); });

}());

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/global-object/global-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/global-object/global-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function($){try{$('export default global')}catch(e){try{$('export default self')}catch(e){try{module.exports=global}catch(e){try{self.global=self}catch(e){window.global=window}}}}}(eval))
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


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

/***/ "./src/js/docs.js":
/*!************************!*\
  !*** ./src/js/docs.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var docsify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! docsify */ "./node_modules/docsify/lib/docsify.js");
/* harmony import */ var docsify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(docsify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var docsify_themeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! docsify-themeable */ "./node_modules/docsify-themeable/dist/js/docsify-themeable.js");
/* harmony import */ var docsify_themeable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(docsify_themeable__WEBPACK_IMPORTED_MODULE_1__);


window.$docsify = {
  name: 'Sapling',
  logo: '../images/logo.svg',
  repo: 'groenroos/sapling',
  homepage: 'home.md',
  auto2top: true,
  loadSidebar: '_sidebar.md',
  executeScript: true,
  mergeNavbar: true,
  maxLevel: 4,
  subMaxLevel: 2,
  pagination: {
    crossChapter: true,
    crossChapterText: false
  }
};

__webpack_require__(/*! docsify-pagination */ "./node_modules/docsify-pagination/src/index.js");

__webpack_require__(/*! docsify-copy-code */ "./node_modules/docsify-copy-code/dist/docsify-copy-code.js");

/***/ }),

/***/ 1:
/*!******************************!*\
  !*** multi ./src/js/docs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/groenroos/Repositories/sapling-website/src/js/docs.js */"./src/js/docs.js");


/***/ })

/******/ });