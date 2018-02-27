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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "html body {\n  background: url(" + escape(__webpack_require__(/*! ./thumb.jpg */ "./src/thumb.jpg")) + "); }\n", "", {"version":3,"sources":["/Volumes/ICS-IKEDA03/git/170330_webpack/tutorial-sass-image/src/style.scss"],"names":[],"mappings":"AAAA;EACE,0CAA2B,EAAE","file":"style.scss","sourcesContent":["html body {\n  background: url(thumb.jpg); }\n"],"sourceRoot":""}]);

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

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


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

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
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
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
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

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
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

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
// import文を使ってSassファイルを読み込む。


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--4-1!../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/thumb.jpg":
/*!***********************!*\
  !*** ./src/thumb.jpg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2Nzcz85M2U2Iiwid2VicGFjazovLy8uL3NyYy90aHVtYi5qcGciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esb0NBQXFDLCtGQUE0RCxFQUFFLFVBQVUsaUlBQWlJLG9FQUFvRSwrQkFBK0IsRUFBRSxxQkFBcUI7O0FBRXhXOzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0NBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7QUNuQkEsa0NBQWtDLGc2c0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCBib2R5IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi90aHVtYi5qcGdcIikpICsgXCIpOyB9XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Wb2x1bWVzL0lDUy1JS0VEQTAzL2dpdC8xNzAzMzBfd2VicGFjay90dXRvcmlhbC1zYXNzLWltYWdlL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMENBQTJCLEVBQUVcIixcImZpbGVcIjpcInN0eWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCBib2R5IHtcXG4gIGJhY2tncm91bmQ6IHVybCh0aHVtYi5qcGcpOyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCkge1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgfVxuICAgIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICAgIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICAgIH1cbiAgICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gICAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIidcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsXG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIi8vIGltcG9ydOaWh+OCkuS9v+OBo+OBplNhc3Pjg5XjgqHjgqTjg6vjgpLoqq3jgb/ovrzjgoDjgIJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJzsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvNGd4WVNVTkRYMUJTVDBaSlRFVUFBUUVBQUF4SVRHbHVid0lRQUFCdGJuUnlVa2RDSUZoWldpQUh6Z0FDQUFrQUJnQXhBQUJoWTNOd1RWTkdWQUFBQUFCSlJVTWdjMUpIUWdBQUFBQUFBQUFBQUFBQUFBQUE5dFlBQVFBQUFBRFRMVWhRSUNBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCRmpjSEowQUFBQlVBQUFBRE5rWlhOakFBQUJoQUFBQUd4M2RIQjBBQUFCOEFBQUFCUmlhM0IwQUFBQ0JBQUFBQlJ5V0ZsYUFBQUNHQUFBQUJSbldGbGFBQUFDTEFBQUFCUmlXRmxhQUFBQ1FBQUFBQlJrYlc1a0FBQUNWQUFBQUhCa2JXUmtBQUFDeEFBQUFJaDJkV1ZrQUFBRFRBQUFBSVoyYVdWM0FBQUQxQUFBQUNSc2RXMXBBQUFEK0FBQUFCUnRaV0Z6QUFBRURBQUFBQ1IwWldOb0FBQUVNQUFBQUF4eVZGSkRBQUFFUEFBQUNBeG5WRkpEQUFBRVBBQUFDQXhpVkZKREFBQUVQQUFBQ0F4MFpYaDBBQUFBQUVOdmNIbHlhV2RvZENBb1l5a2dNVGs1T0NCSVpYZHNaWFIwTFZCaFkydGhjbVFnUTI5dGNHRnVlUUFBWkdWell3QUFBQUFBQUFBU2MxSkhRaUJKUlVNMk1UazJOaTB5TGpFQUFBQUFBQUFBQUFBQUFCSnpVa2RDSUVsRlF6WXhPVFkyTFRJdU1RQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV0ZsYUlBQUFBQUFBQVBOUkFBRUFBQUFCRnN4WVdWb2dBQUFBQUFBQUFBQUFBQUFBQUFBQUFGaFpXaUFBQUFBQUFBQnZvZ0FBT1BVQUFBT1FXRmxhSUFBQUFBQUFBR0taQUFDM2hRQUFHTnBZV1ZvZ0FBQUFBQUFBSktBQUFBK0VBQUMyejJSbGMyTUFBQUFBQUFBQUZrbEZReUJvZEhSd09pOHZkM2QzTG1sbFl5NWphQUFBQUFBQUFBQUFBQUFBRmtsRlF5Qm9kSFJ3T2k4dmQzZDNMbWxsWXk1amFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQmtaWE5qQUFBQUFBQUFBQzVKUlVNZ05qRTVOall0TWk0eElFUmxabUYxYkhRZ1VrZENJR052Ykc5MWNpQnpjR0ZqWlNBdElITlNSMElBQUFBQUFBQUFBQUFBQUM1SlJVTWdOakU1TmpZdE1pNHhJRVJsWm1GMWJIUWdVa2RDSUdOdmJHOTFjaUJ6Y0dGalpTQXRJSE5TUjBJQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFaR1Z6WXdBQUFBQUFBQUFzVW1WbVpYSmxibU5sSUZacFpYZHBibWNnUTI5dVpHbDBhVzl1SUdsdUlFbEZRell4T1RZMkxUSXVNUUFBQUFBQUFBQUFBQUFBTEZKbFptVnlaVzVqWlNCV2FXVjNhVzVuSUVOdmJtUnBkR2x2YmlCcGJpQkpSVU0yTVRrMk5pMHlMakVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSFpwWlhjQUFBQUFBQk9rL2dBVVh5NEFFTThVQUFQdHpBQUVFd3NBQTF5ZUFBQUFBVmhaV2lBQUFBQUFBRXdKVmdCUUFBQUFWeC9uYldWaGN3QUFBQUFBQUFBQkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFvOEFBQUFDYzJsbklBQUFBQUJEVWxRZ1kzVnlkZ0FBQUFBQUFBUUFBQUFBQlFBS0FBOEFGQUFaQUI0QUl3QW9BQzBBTWdBM0FEc0FRQUJGQUVvQVR3QlVBRmtBWGdCakFHZ0FiUUJ5QUhjQWZBQ0JBSVlBaXdDUUFKVUFtZ0NmQUtRQXFRQ3VBTElBdHdDOEFNRUF4Z0RMQU5BQTFRRGJBT0FBNVFEckFQQUE5Z0Q3QVFFQkJ3RU5BUk1CR1FFZkFTVUJLd0V5QVRnQlBnRkZBVXdCVWdGWkFXQUJad0Z1QVhVQmZBR0RBWXNCa2dHYUFhRUJxUUd4QWJrQndRSEpBZEVCMlFIaEFla0I4Z0g2QWdNQ0RBSVVBaDBDSmdJdkFqZ0NRUUpMQWxRQ1hRSm5BbkVDZWdLRUFvNENtQUtpQXF3Q3RnTEJBc3NDMVFMZ0F1c0M5UU1BQXdzREZnTWhBeTBET0FOREEwOERXZ05tQTNJRGZnT0tBNVlEb2dPdUE3b0R4d1BUQStBRDdBUDVCQVlFRXdRZ0JDMEVPd1JJQkZVRVl3UnhCSDRFakFTYUJLZ0V0Z1RFQk5NRTRRVHdCUDRGRFFVY0JTc0ZPZ1ZKQlZnRlp3VjNCWVlGbGdXbUJiVUZ4UVhWQmVVRjlnWUdCaFlHSndZM0JrZ0dXUVpxQm5zR2pBYWRCcThHd0FiUkJ1TUc5UWNIQnhrSEt3YzlCMDhIWVFkMEI0WUhtUWVzQjc4SDBnZmxCL2dJQ3dnZkNESUlSZ2hhQ0c0SWdnaVdDS29JdmdqU0NPY0krd2tRQ1NVSk9nbFBDV1FKZVFtUENhUUp1Z25QQ2VVSit3b1JDaWNLUFFwVUNtb0tnUXFZQ3E0S3hRcmNDdk1MQ3dzaUN6a0xVUXRwQzRBTG1BdXdDOGdMNFF2NURCSU1LZ3hEREZ3TWRReU9ES2NNd0F6WkRQTU5EUTBtRFVBTldnMTBEWTROcVEzRERkNE4rQTRURGk0T1NRNWtEbjhPbXc2MkR0SU83ZzhKRHlVUFFROWVEM29QbGcrekQ4OFA3QkFKRUNZUVF4QmhFSDRRbXhDNUVOY1E5UkVURVRFUlR4RnRFWXdScWhISkVlZ1NCeEltRWtVU1pCS0VFcU1Td3hMakV3TVRJeE5ERTJNVGd4T2tFOFVUNVJRR0ZDY1VTUlJxRklzVXJSVE9GUEFWRWhVMEZWWVZlQldiRmIwVjRCWURGaVlXU1Jac0ZvOFdzaGJXRnZvWEhSZEJGMlVYaVJldUY5SVg5eGdiR0VBWVpSaUtHSzhZMVJqNkdTQVpSUmxyR1pFWnR4bmRHZ1FhS2hwUkduY2FuaHJGR3V3YkZCczdHMk1iaWh1eUc5b2NBaHdxSEZJY2V4eWpITXdjOVIwZUhVY2RjQjJaSGNNZDdCNFdIa0FlYWg2VUhyNGU2UjhUSHo0ZmFSK1VINzhmNmlBVklFRWdiQ0NZSU1RZzhDRWNJVWdoZFNHaEljNGgreUluSWxVaWdpS3ZJdDBqQ2lNNEkyWWpsQ1BDSS9Ba0h5Uk5KSHdrcXlUYUpRa2xPQ1ZvSlpjbHh5WDNKaWNtVnlhSEpyY202Q2NZSjBrbmVpZXJKOXdvRFNnL0tIRW9vaWpVS1FZcE9DbHJLWjBwMENvQ0tqVXFhQ3FiS3M4ckFpczJLMmtyblN2UkxBVXNPU3h1TEtJczF5ME1MVUV0ZGkyckxlRXVGaTVNTG9JdXR5N3VMeVF2V2krUkw4Y3YvakExTUd3d3BERGJNUkl4U2pHQ01ib3g4aklxTW1NeW16TFVNdzB6UmpOL003Z3o4VFFyTkdVMG5qVFlOUk0xVFRXSE5jSTEvVFkzTm5JMnJqYnBOeVEzWURlY045YzRGRGhRT0l3NHlEa0ZPVUk1ZnptOE9mazZOanAwT3JJNjd6c3RPMnM3cWp2b1BDYzhaVHlrUE9NOUlqMWhQYUU5NEQ0Z1BtQStvRDdnUHlFL1lUK2lQK0pBSTBCa1FLWkE1MEVwUVdwQnJFSHVRakJDY2tLMVF2ZERPa045UThCRUEwUkhSSXBFemtVU1JWVkZta1hlUmlKR1owYXJSdkJITlVkN1I4QklCVWhMU0pGSTEwa2RTV05KcVVud1NqZEtmVXJFU3d4TFUwdWFTK0pNS2t4eVRMcE5BazFLVFpOTjNFNGxUbTVPdDA4QVQwbFBrMC9kVUNkUWNWQzdVUVpSVUZHYlVlWlNNVko4VXNkVEUxTmZVNnBUOWxSQ1ZJOVUyMVVvVlhWVndsWVBWbHhXcVZiM1YwUlhrbGZnV0M5WWZWakxXUnBaYVZtNFdnZGFWbHFtV3ZWYlJWdVZXK1ZjTlZ5R1hOWmRKMTE0WGNsZUdsNXNYcjFmRDE5aFg3TmdCV0JYWUtwZy9HRlBZYUpoOVdKSllweGk4R05EWTVkajYyUkFaSlJrNldVOVpaSmw1Mlk5WnBKbTZHYzlaNU5uNldnL2FKWm83R2xEYVpwcDhXcElhcDlxOTJ0UGE2ZHIvMnhYYks5dENHMWdiYmx1RW01cmJzUnZIbTk0YjlGd0szQ0djT0J4T25HVmNmQnlTM0ttY3dGelhYTzRkQlIwY0hUTWRTaDFoWFhoZGo1Mm0zYjRkMVozczNnUmVHNTR6SGtxZVlsNTUzcEdlcVY3Qkh0amU4SjhJWHlCZk9GOVFYMmhmZ0YrWW43Q2Z5Ti9oSC9sZ0VlQXFJRUtnV3VCellJd2dwS0M5SU5YZzdxRUhZU0FoT09GUjRXcmhnNkdjb2JYaHp1SG40Z0VpR21Jem9remlabUovb3BraXNxTE1JdVdpL3lNWTR6S2pUR05tSTMvam1hT3pvODJqNTZRQnBCdWtOYVJQNUdva2hHU2VwTGprMDJUdHBRZ2xJcVU5SlZmbGNtV05KYWZsd3FYZFpmZ21FeVl1SmtrbVpDWi9KcG9tdFdiUXB1dm5CeWNpWnozbldTZDBwNUFucTZmSForTG4vcWdhYURZb1VlaHRxSW1vcGFqQnFOMm8rYWtWcVRIcFRpbHFhWWFwb3VtL2FkdXArQ29VcWpFcVRlcHFhb2NxbytyQXF0MXErbXNYS3pRclVTdHVLNHRycUd2RnErTHNBQ3dkYkRxc1dDeDFySkxzc0t6T0xPdXRDVzBuTFVUdFlxMkFiWjV0dkMzYUxmZ3VGbTQwYmxLdWNLNk83cTF1eTY3cDd3aHZKdTlGYjJQdmdxK2hMNy92M3EvOWNCd3dPekJaOEhqd2wvQzI4Tll3OVRFVWNUT3hVdkZ5TVpHeHNQSFFjZS95RDNJdk1rNnlibktPTXEzeXpiTHRzdzF6TFhOTmMyMXpqYk90czgzejdqUU9kQzYwVHpSdnRJLzBzSFRSTlBHMUVuVXk5Vk8xZEhXVmRiWTExelg0TmhrMk9qWmJObngybmJhKzl1QTNBWGNpdDBRM1piZUhONmkzeW5mcitBMjRMM2hST0hNNGxQaTIrTmo0K3ZrYytUODVZVG1EZWFXNXgvbnFlZ3k2THpwUnVuUTZsdnE1ZXR3Ni92c2h1MFI3Wnp1S082MDcwRHZ6UEJZOE9YeGN2SC84b3p6R2ZPbjlEVDB3dlZROWQ3MmJmYjc5NHI0R2ZpbytUajV4L3BYK3VmN2Qvd0gvSmo5S2YyNi9rdiszUDl0Ly8vLy9nQXRUM0IwYVcxcGVtVmtJR0o1SUVwUVJVZHRhVzVwSURNdU1UTXVNeTR4TlNBd2VHUmpaR1l3WkRNMEFQL2JBRU1BQXdJQ0F3SUNBd01EQXdRREF3UUZDQVVGQkFRRkNnY0hCZ2dNQ2d3TUN3b0xDdzBPRWhBTkRoRU9Dd3NRRmhBUkV4UVZGUlVNRHhjWUZoUVlFaFFWRlAvYkFFTUJBd1FFQlFRRkNRVUZDUlFOQ3cwVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGUC9BQUJFSUFKOEE4QU1CRVFBQ0VRRURFUUgveEFBZEFBQUNBd0VCQVFFQkFBQUFBQUFBQUFBRUJRTUdCd0lCQ0FBSi84UUFSeEFBQWdFQ0JBTUdBd1VFQ0FVQ0J3QUFBUUlEQkJFQUJSSWhCaE14SWtGUllYR0JCeFNSSXpKQ29iRVZNMUxCQ0JZa1UySnkwZkEwUTRLeTRXT1NGeVkyczhMUzhmL0VBQnNCQUFNQkFRRUJBUUFBQUFBQUFBQUFBQUVDQXdRQUJRWUgvOFFBTkJFQUFnSUJBd01DQkFRR0FRVUFBQUFBQUFFQ0VRTVNJVEVFRTBFaVVSUXlZWUZ4a2RId0l6TkNvYkhCQlJWU1l1SHgvOW9BREFNQkFBSVJBeEVBUHdERkplSzNqMk5NQjU3L0FPdU5ia1UwbnRQeGJISTFwbzFIbW0yQW1nYVIzVFZ0RlZSN016WDNIYTZZZE02bVA4dm9JNUllV1pDcEtpMWljYzUwY2xaSk5rZVpVeW5reXNZK3RsSjN3TzlIeVAyMkcwTXRhc0E1akxLVkZyTTIrRWMxZXdkQVNrL3pDNmx1Q09xazlNT3BrM0dqOHJ5S2VwdGp0UUtHbVhtS2V5dk1VWTdDL1RFWnpjZUMwWUo4aktvNFZxWlNqUXljd2Y0UmNINll5dnFrblRMTEEvREFKc3FxNk5pWlkzVmY0cmJZb3M4WmNDdkcxeVR3cXJ3TnVRYmpEZHhvR2xFNjBiazJCNmQzZmdkMDdTanBhV1FTV0lJUHJnZHc3UWlPU25jZmlZZU5qaXF5bzV4QjNWZ2VwdytzVFNUeFh0YStGMUEwa2NpTmNlRjhNcEN1SkJQQXlrV3Y3WWZXSlFHNnYvRTE4TnFRS0kyWngzbkQyZFJIcUkzTnljTllDTnliYkQyd3lad00rcSsyS0ppc0dsaUorbmppaVlyUU5KQmNHLzY0b21LRHl4V0JPckZJc1VIZERmdnhaTVFpWk5KdnViNG9tSXpwVUk5K21LSmsyaU1KRzdIbVFSdWIySUs0K0t2MlBmb1gxbkIxQlh0cWhEVXNwMzBqY1g5TWNwdEhVaGFPRk14b3RYTERNQWRpQmlxeUk3U1dUS0svTWFXSklacVV6QUtCWjFOeDZIRkhKUHlKcDhsNnlMTm9LMStTU1ZOckZXNmowOGNac20yNVZJWTFIREFyZFRVZFRGSzdHL0tmc042WWlzdW41a05wdmdSWmp3N20xR3JBMGN5Vy9FQmkwYzhINUE4YjloWEUyWndHM0xrZGZBcVRpdmNqN2lkc3R2QzlFMmRUSkRNaHA1RzZYMkIrdU11VE5wVm9lTVBCZFJRMVBEWEw1Y3dMYm5UMEk5UmpES1N5dmRGMG5BT2JPcWZNYVVSVFFMRzdmZWswM3NmR3d4SlFjWGFZemxxVk1XU2NMbVNLU1Nra2pxRnZmczdNZCt0c2JGbTl5R2oyT0lzc2xLa3RHNnFEYlVSdGh0YUJUR1ZEdzVOUGJTR2Uvd0RBTlIrbUp2S2tPb05uYThMVkNTZ1BFTzBDUXJyMUZpY0R2YkhhR1Z5c29qRkt5bE9oNjQwS1ZxeVZIRVZFakx1Tk44UHFZR1NKUVJFOW8vbmc2bUNqdk1NdGdFYXNqRzl0eGhsSmdhc1ExRktGTmdkdlBGNHlzbTRnVWtWd1FEMDhjV1RKMGNHRlFMM3c2a0NtUXZHbzJKdzZZQ0NRcUxrRERvVUNtYnJpMFJhQkpYQS8zMXhWTVFHZVN4NmRNVVRFYVpHMGczdU44VlRKMHpuVXA2RDJ3NllLUHk3OTlyWW9tQnhDWTg2bnRvbTVjeStFcUEzeDhTNEk5N1VIVWRWUk02czFIcHQvY1R0SGYydWNUZXJ3eGsxN0Zub0pNc3NaRnBaT1ozQjVDd3hIMWU0OXIyQ29jaFJ5cncxaXhFOVlwb2lCL3dDNGY2WXAzSzJvV2w3aE0zQzJZYWxtcFJUVlpYOE1iaG0rbDhMM284UFlmUXdxaXliTXFuOTVSU3BJdjhTbFQ3ZHg5OEs4c1BjR2lUOERDSE1NeG96bzU3Ykd4V1FBMit1RmNZUzhBMVNRenBNM01oSHpQTFEvaGNRcXlqMkcvd0NlSXlnbHdVakp2a24vQUd6WFFTa1FTUnRDQjJRc1NMYjZZVFJGOG9mVkx3RDVsbk05Y0lrbWFSMUIxRU8xeGZ5OE1Na2x3QnR2WUZpcGc5N0MzbGJmRGFnYVJqU3dOVHFUR3hqM3VMWU4zeUNtR0JwRTNad3hicmNZRmhwazFMVHl5djhBWlRHUHl0Y1lGblVTeVU4N2JTeXZJUjBJM3gxMXdkWHVLSzNLUzVKSkxDL2hiRm96Sk9BdmZMMmpCMkJ0NDRzcGs2b2lhaktFRTdlZUhVaGFJS2lLNDA2cjRlemhaUFNxYjcvWEZGS2hXckFKb2tTL1FIenhhTW1LNGk2YW9panZkaCtlTG9Sb0NtcTRqZjdTM3RpaUVhQVpheUc1N2Uvb2NWUWpRSTlaSGMyYTQ5TVVUQlFMSlZwM20vdGgwd1VRUFVnOTY0b2hLQnpVS0xqVUwrbUtKaTBjL01LQmNOK1dLSmdvNldvRjloNjNPS3BnSnBLU1JIMlEzeDhacVI2MUJOR2tpeWJvd3RpVXBCTEpRQWFOd3k0bFpSSXRWQkkvTFVOMmt0MzkyRWJHU0c4TUxTYVNnRngzanJpYmZ1VlNHY1ZUWHhvRUVoSUhRTWIyeFAwM1k2MUhra0R6TVdrQkxIcVdhK0dVcTRGYXZrOEdWYWdTQVY5OGRxTzBuaTBVcXNDdXIyd05TRHBaNjlLUzY2Z0wrZStFY2hsRU9wc3VOd3lydDVEQTFqYVJwRlJzSXlTTER6eDJvN1NRUEVIWUFBazRPcGk2U1dDT1NDVFlXUGRnNmpxb09oa2tadDJLbkJzNDhyRmtsUS9aaDI4YjRLWXJSWDZxQmkzYkI5TVhpeU1va1B5VE1MMkZoNDRmV2hOSUhQVG9qSGNYOHNVMU1ScWhYV2FMRUY3RHlHS1JZR1YrdEVRNk9iKytOTVJSUk5Fams3ZysyTkNZalZnY3RLaDZENkRGRXhXZ2FTajhCNWVHSDFDVUN2UnZmZGZ6eFJUUXRBN1VUTVNDb3d5a0xSQkpRc0NRSTErdUtLWXRBN1VURWZ1OXZJREZGTkMwY2ZzMlRyWmg2akZGTkFvOVdpbFZoMUp4UlRRclJvcjhLVEZpVEN6VzNzSFc1OXIzT1B6OVprL0o5RDJuN0hneUJHSkFoY01POHRwd2U1OVR0Q0d1VjhNQnlvUFlKL2piQ3ZLTXNkbHhoNFJGSklxQ2VDWlIrSlNSK29HSjkyeW5hcGpTbXlDT1BjdXBidVVNYm4wMnRoTmJZeWdrTjZmSUtkZ0wwdFE3QzM0eFkvbGhITmpVZzVPSHdYN0ZPa1o2Z01iL0FLNFhYUzNZZGdwT0hwYmZ1a0YvTGJBN2tmYzRuL3EwUXcvczZNUEVDMkJyUVZUSjMrSHJUeEdWUlQ2Z0w4c3lXWTRYV0MwUTBXUVFxZElNUklOaUVrVmorUndkWlNsUXp6Yko2UEpxS0tTb0xYbEFaRWlBWXN0N0UzQnNMVzZFM3gyc1ZiOEZYYVRLbmxMS0tpRVgrN0tOVnZjZGZ5eFZTRnBCTk9NdG5pTExWUmhsNm95TUQrWXgxblV1Q0hURzc2SVdRa213VWc2amgxSVdobFJaQlVWME9vdlNVNHRjSTB1bGlMK0hYQjFJV3ZvQVY5QkJUa0lJak82OVRIdUJobEpnY1JKWDFhUnFSeUNua1Y2ZlVZc3R5VEsxbU5hM1FRTnY1RWZ5eG9pWjVDaVVDbys5Q1I2a2orV0twMEpRSExsc1VoTjF0aWltenRJRzJRaG1Zck1GSGhvR0tMS0RTRHpjT2xkK2FHOHJmK2NPc3pPMGc4bVF5aGJxQnBIb1A1NGRaUmRJdW1vZEFOOWlQUTRxc2d1aEFVcU1OcnFSNWdmNjRxcGlPSkFhWnIzMCs0dmgxa1JOd0lpa2dQN3NnK21HVTBEU3pnNnJnRzU4dDhPcEM2V1NKVGxqMEg2NGRUQlJwOUR3VG4zRGxSR0t2TXpUbTMvRDFjQllIZnhKeCtleXlxUzJSOVBIRzE1TkRRL08wMFhQektNeVdBWmRGNHovQU5JWEVsc2FIdnlXcktjbWZQVERESlRVbFRCRUw4MmxXQ2xlM2dXMEFuM3hTNjRNMDZqKzJYM0wvaGRrYndSeVZiMUtBajkxOHhGdC93QlFPK0xRMHY1blg1R0tXZWFkUlgrUTZQaDdKc2pCK1I0YmtyMlU2dGN0U2pYK2pkUGJEdHdYRWIrLzZFOWVTWE02K3dUUlovUXlMSkhKd3U5RkplMnFHbGpiODlOeGh0Y1hhMFY5djFSenh6WEdTL3VQY3JTVG1pU0dwckkwQjNReHNsaDRiakJ4WW5HV3FMZjVNenordEQ1czlnUUZHRlc1NzlVVEczNVk5ZDlSald6dC9ZZ3NUNVZDK3F6WEpxdU1tU2tTb2JwYVNFWCtwR01jK3A2UnAxRzMrQldNTXNlSFgzRi83THl5cGxia1U2UWh2QTZIc1J1QWJFVzl4akVvNGNzdlFxKysvd0Rob3IzTWtWdTdBcW40YjVZWVNZS09Nc3d0OW9DZFBvVkkvVEY1OUU2MVFmOEF2L0g2Rkk5WksvVXlzMWZ3dnJBenFrNDVkOXRSTy90akhMQmtpOTBiWTlYamt0eXZaajhONnVGU3hXT1ZQRkdCL0xyaURUanVXamxoUFpDYWZnU3ZqRE10SEpaZHlRaE9PVFpUMGU1WGE3S3FpRzZtTStZdzZrQnhLM21GQlZ0cVZubFpUMVZpYkhGb3pJT0xGU3hUWllXYU9Tb2l2MUVVekpmMXQxeFZTc2xWSFdTMWVaVmxZbEpHUUltSkoxQUMzaWI3WHhWdEpXSXJleGFUa3RRWXJ2SERNdHJnOVJiMjJ3aWtoOUlSRndlMHNMU21vb2FZQVhLTVFqSDBGcjRmV0pwRjgvRHE2TlNUSkt4TmdFYS82Z1laWkFPQXBxc2xuRFc1VnozWEF4VlpFSnBhQnprZVl3Z01LWUJmOFVhc0Q5Y05yUXVsa0RaSFdTdnAweHh0MXR5MUg4c09zaVFOTERLUDRkTFdReVMxV2JVdElRT3lqb3hMbndCQzIvUEJlZXVFSFJaM0Q4T3N1RWJ0VTV0U3hNdjk0N0hWNkJVYjh5TUw4Ukx3anUzOVJmVThPWkpSdWRJZVE5QytsWEI5QnRoMWxteEhGSUNlbWpsQmlncGFZb09oYWdoVnZyYStIVTJ0MndVTHBLVXdhbGVpajI4SWgvSVlxcDM1Rm83aHBYZFFZc21XVTNIYVpIMytoR0RyL3dESUZGaXlIaWpqUExwWE0wV1djUjBvSisxV3NETjE3aXkzRi9DeHg4dEo0L0czMlBiaXBDL09mam54RGswME16WkxIU3d5M3NhekswWkw5Nmh2eFc4ZHNVaGppL0tKemIvQTh5NytrTFh6MVhNbHlQSTV4ZTk0b2pFZmZTY1ZsaFNXekZVbXZKcDNDL3gyaHJxQ1dPdmlqb09TTlNKVFdjU0cvZ2QvenhubEJyYndNb3hsdXkwNUQ4YUtDb3JvNDVWcUVoYzZXbDBHd0hvRGZDVzRpdkRHV3lOR1BIT1V2bE1zZEhua01KZGV6SkJJM05XeHZ0cTcrNzN4cStLY0lPTVhYNW1WZExKenVVYi9BQ0ZlU2NkNnFzMDliTFc3YWsrYk02dHFIY1NxZ2duMHhPSFZTL3JiTk9UcE5yZ2wrRkR5SE1xNml1OUJuZ3pBRS91YXFPemp5dUFNV2ZVeXhlckhrdjZOR2J0UWx0a3g2ZnFoeFJaclhWREV6MFZNOTlpTkZpTVd4ZFRseVBmR245alBQSGlqeEprcnM4VXBjVWNPay9oc2JqRkpSbkNXcnRJbXRMVmFtUm5pSjZjaU9TbU1jUlBXUHU5c0JkZG85TTRVaW53MnJlTXJZMGhtZ3FZZVpEVkFyMzcydDY0OU9FNFpJNm9TMk1jb1NpNmtqMTlCSTFCSkw3QWxiL3l3WlJqNVZnVGZnNFNraFJqcGhDMzd4aWZZeC84QWFOM0plNGl6M2gzTEttTm1tcEkxWmo5OUU3UittUE42bkZHQ3RLamZnelpMcTdLVG1md3JvNnlYN09vbGlqdFlxMGU5L0krR1BPYWE0Tnl6cC9NaW9WdndJcjVwRHlxMm5DazdGcjlQcGdxYlhJSE9ESnFINEkxbVZ6cThsVUtxRWRZMVhiOWNVYzM3SEo0L2NZUThEelVpc3NVazBma3JXR0Y3bnVQNlFlYmhXUkhMU0x6SC9pYmZES2FZVWtCVFpDNm13aWlJSjZ1blREMmMwQlZYRGtvMzJDOTJnSERLVkNPSW9xTWpuVjdpSjI4ZXVLS1NKdUxBWjhubFkyNUQrNXcrcEN1RElueUxUdnkyVStPRHJzRGd3T2JoOW12Y3ViOTFoZ3FZTkRBMzRlLzlRcUI0Z1lidUN2R2NMdzFGSzREVE94NkFMWTc0YnVnN1lSU2NFbXNad3RSeUNxM0hOMUFIeTJ3SG1vUGFaRlB3bFcwejIrWmtkVHRaR2M0S3lwbmR0bytaTXN6ek1LVjlVRTBzWGpwWWk0R0ZuQ0Q1Um8zWEJxM0FueG00eDRmWjJTb2huZ2EydHN3VlNGSFFkbzlvRDN0akRsd1kzeHN5OE1zMXN3cmp6K2xEazFGRkZTNW53YmsvR1ZUUFN0VWMranI0NC9sN2MwbU1sb1pDcmZaRTJGdW84Y1lwUmxEaHRHalVwY3F4ZlU4UlUrVThJWlhuS1VHVnlaaFhWazFNY3RwczJNcndjdWFXSzRzTlJROG9zR01kck11NXZobG1ja0oyNll6NGErS0ZXdFFGL1lTQWtYR210WUgvQU8xakprek5PcUxReHJteTZaRDhWMG1saTV1UTZJWGNJWlBuV0lCdmJlME8vdHZqTExxSHpwL3Yvd0NqUXNhdmsyL2dMUHNqenV0bnBwWmFTbU1NUWxWeFVudDcyMGhaSWthNDY3REducDhrYzAzR2JTcFh5LzdXck1uVTl6SEJPQ3Y5L1JtZzVkeFp3dTRXbmhxWGtKSVFFVTc2YjN0c1N2Nlk5ekYxUFFSV2hPL3Mvd0RhUEpsMG5WeTliWDkxK3BhcUkwTXY3bVlTZVlJdGozTU1zTWxXSnBubFRqT0w5YW9PZUdKeHVMK2h4cEVCcGFDalpTWGkyOFRpTXNPT1h6UkdVNUxoZzZVbVcwc3E4dFlra0oydnVTZmZFWTRlbnhOVWttTzU1SnJkdWdsNDFhMjk3ZWVOYjNJbmhDbi9BSmd2NFlCeEJ5NDVYS2laV1lkUURjakVuR01uVmo3cFhSMThwWWJhVzlSaEhoWDBPMUhEVWpiOW1QOEE5b3hONEg0Uy9KQjFFRFplN0hiVGM5d0ZzWkpkSko4VVZXVmVRSmNyRlhFa3NieHlSU0tIV1JXQlZnUmNFSHZCeG0rQ205MDErWmRaMHVTQ2JoNXJYMXhlK0VsMGM0cmRvcEhxSXYzQTVlRzNjSGFLM3BiK1dKZGlhS3JPaUU4SExJaEJOTWgvaTFFbi9UOHNPc00vTFg1amZFSlBoZ2pjRE81T2hvSkQzQmdRUDVZVlk1dmdmdng4Z3N2dy9xVGYreVViYmRiU2YvdmJEUEhrWGc3dndma0FsNENuVXRxbzRBUENKaVArNG5FbTJ1U2l5UVl2cU9DSklKTlRVMnBlNVZtUS9VV09CcUcxUmZCUEZUWmxsMGFKU1pSUW9VT3p0Umw1RDZzYi9sYkExZlVEVVg1QjZuT09LSVpUTENsTFR0MEs2R1lmUjJJSHRiQnVJTkVXSXMyemJpdXVpS1ZUMDA4SS93Q1cxSEF3QjkwSi9QRExTRlJyZ3JzZFJ4TGw3em1pbU5GemRwQlRVNlE2aDRkbFJ0NVlvdEQ1RmFrejRmbytJbGxqWkhrcG93VDFDalY3WTN5Z0ttTWM0ekRMandkbkRSMVV3cUJTdHBSbFhRVDVrSHBiRVhHU2ZBM2d4VE1zMWpwNnRkVFE3dzJ1b0pBM2JyOVQ5Y1pzc1hKbEl1aTI1Tm1vbHBLUklyY3d1ckFxdW5leHYrdU1zb3RJdW1Xcko4L21wbUJFcWpTUURlUDd2dGp6OGtiTk1HdkpacURpaVNKNC90VjdXNjluWW0xNzR4eXg3R3FMUmZlSHVNNVRXQnBLcUpTVnNOY1pPMXhiYjN4a2NXblpYWTJESmVLVW9aQzlUUEdRRUJDcnF2ZXd4MXRTZEFwVW1hdjhPL2lLbVk4UjVkUk5VRmtrVmlVakZ3QVBHL2RzTWV0L3gvVk9IVVFVbnNlZDF1Q004TTJsdWJTTXpvbUd4VWp6T1B1RjFPR1g5UjhsMnByd1JTNXBTam95ZXhHQStwd3Bjb0t3emZnR09kMGkzdklvSGVTTVovanNIdVYrR3kreENlSktGRzBpYUlrOXdJeE4vd0RJWWx3UDhKa2ZnNWZpbW1pc0dkVkoyRnpiRTMveU1mWWRkRk5ubjliS1lkV3Q2NFAvQUZENkhmQlRQQnhiUi8zeWozd1BqMTdIUG81bjcrdEZHUnRNaDk4Syt2WHNkOEpNWDV2eDVsZVMwY2xWWFpqVFVsT2d1MGt6QUFDNFg5V1VlNHhKOVpOL0tVWFN2eUI1WDhSOHI0aGdFK1dablMxOFJKQWVCd2JrR3g4K3BIMXhLWFZaWHlVajBxTVk0ci9wczhMY00xYzBLWmZtZVk4cVY0SkhoVkVBa1ZpckxaajRnNzRaZDJVZFZqOWlGMGFId044Y010NC80YnBNN3kyYzA5UFVGa0VkUUFycXlrcXc4N0VIY1ltOHVXRHF4bDA4SDRMRkp4bk1GQmFvV3hGeGZiQTcyV1hNbUZkUEJlQWVUamR2NzFEK2VGMVM5eHV6RWhmamlYdWREN1lEdDhuZG1QZ0ZrNCtuanZZeDdlV09vUGFpQ3kvRTJwanYyaDlNTnY3aTlxSXZxUGlqTGNseWIvNU1EUTJkcGloYlVmRlpCc3pmVmNOMldEMG9Wei9GdWpGd1hRK3B3eXdTWUhLSm5YeG8vcElyOE4rRUtmT3FXaFRNNUpzeWhvREFaTk9nU1J6T0hOdDdEa2tlL2xoOGVEVmtXTisxL2xYNmhjbG8xTDNvK0o2U3N5L1Rxa0xvUWR3TEczNlk5QnlPUTF6S3R5dityV1pDTjVSTVlHMFg3SUo5ZWc5ZTdFZFRiS1VxTW40anE5T1lxUk0wZ0VQWDV5TWs3bnc2ZW5kNzREaWN0aDNsRllCUndzb05nQjJoT0RZMlBkMUhyakpraVhqUllxU3VxS2gyTUNGamNkaGFrQUhieDd2ZkdLY1Y1TkMzNEdrRmJMUjhvUzZvbjBYMHZPQWZ1bnVJL1AzeGxra3lxYlhKYThvNG5FTlEzTG5zMm0yc1poRkg0YlhiOVBmRUZpdC90RkhORjJ5L2l5Y1Zjd2VzWmxXSzREWm5GYm92NGVvOVR0OWNOUEVyZGY1UUl5cW1hZjhBQmZpNlAvNGc1RlBWTVdnVU16NlhGVVFMdHYyTzY5dTMwQnRmR1RTc2VTRW40SGw2NFNTNVo5V3Y4UU9IeEJIS1JVaU4yWlVjMHpoV0l0Y0FrV05yaTl1bHhmcU1ldDhUZ1MrVm5sZkM1YitaQVZWOFIrR1lGMU0wMXJYMmhPSXZQaDhSS3h3WlZ6SVZWUHhRNFZlR1J1ZEo1TG9PK0pQTEY4STBSeHRjc3IxVjhSZUVpcW1WNUJJU2JpS05uQTg3Z2VIamJDYTdLMGhZZmlKd25Pd0NUMUxiMnR5MnVQcmc2bXdVZ0ovaW53N1JxTFZkWXJGZDlOclg4OTloNTRxcFM4Q2JJRXFmaTV3MDF0VlpYYVR2clZiQzNjYjN4VDFpdlNDUy9GemhxTUhUVzE0RnZ2Q0VIODc0ZExJSjZURmY2Ui9IVkR4T3ZDQ1VGWlV5aUtxcU9jczNaQURJaEd3SnY5eS9zTWJ1blVrM3Erbit6UGxxdGlyZkJ6akdYaHFyenlha3pDb282cWJKekZUU1U1MUFTYzJtTy9jTmdkLzljVnlyVlJPRzFtYzUxWFMxY2xSSkpJN0dTcW1kaVQxSmNrays1T0tMYUtRV3ZKV015ekNxakZaSEJOTXBWQm9FY2hGaVR2YXh3eXJkczVYd2o2Si9vdy9FZVRoTGhYaUNQaWF1ckt5UVBTaWlwV1l1VVFDUU1MazlrYmoySHBqQk9UeVMvaEdqUnBYcU5wbStOM0FsMlU1cFZxNEJzdnk3WFkyNkFhdXB3cWhuT2NZbEk0Mi9wRFVXVzhCWmptV1Y2NmJQNDJSYVdoclF6by8yeUtkVEFyYTZGamJ1MjY0MFF4emMwcGNDU1NTdEZhK0ZuOUo4NS9sZWUxZkYwaTBacE9RYWFMSzBjdElHVnk0SWQ3WHVFQTNIWGZ4RjU0Sld1MlFVbC9VeTF3ZkhqaEd2MW1ldHE2TlZaZ0RNckVrYldObHZzUWZhM3ZpYndabHdyTzFRZmtXY1YvRzNoREtPR013elNpcnptbFJCRVdwNllpVkJOSVNGQzZpdHVwdWZJWWVHUE01Sk5VdnNKSjQ2dXl0Y0QvMGd1R2M5NGVTcTRqa3BjbHpnMU1sT0tXTm5aSk5JQlZoZTVXOXlONzJLazMzQXhiSmh5eGxVZDBTaTROYjdNYmNSL0hYZ0xodkw2V3JxcXlXckV4MEJLS2w1eFU2YjJKWXFQSzk4SXNlZHZpaG04YTVNTCtObnhxeUQ0azVJbEpsY0ZUU3l4NWpST0VuaVZRMGFKV2RvMkpzVHpsMjM3OThYeFlaNDh5bkoycWEvdWdPY0hqY1krNi8yWlZTMU1rbFRIR0hhUnBCOThMYmJwYjYzeGR4R1RvZFBYZ1pSVXdRUElITWJKb0hWaWVwc2RqK21NK2wzdVVmR3hSK0tEUEhXeEIxY0V4YmE2V1ArSS93NHExYjNKYmpyS0trclFVb2FKUWpNaGZzYWI3TmJwMzdmN3ZpRTRtbURIMU5tcGdEMkRYQjZpSWFqMSt1UE9sQnMxS1ZjSE5WbnMxVEhBRGR3RWJTREVOdXllLzhBbDdkK0U3WUhOc2FaTG10VE5ta2g3VWcwWHNsRkhPMXJqdWJZZXZ0Z3JHdkFya3k3dzV2Vkd2cUZFVXdSWVNBMzdOZ0FKc3ZSdXA5RHQ5TVBMRXJmNkk3WFpZc3E0bGZMcXpLTldzRm95R0ppU0UyTE4xQ2JBZVE2OStNRThLMVJacFV2UzZHbWNjWFRQbUVvTWdhOGpBZ3VRRFlrZE1kTEVrOWtMcmJYSmY4QWhMaWZtY0l4SVNqeTgxMldNdHFiNmUyTU9XTlNvdkI3YnNyL0FCTng3VVFmOExWR21VYVFWQ0tia2Y1Z2ZIR25EaWk0M0luTjc3Q2VEalBNV3FxUUd0WjBZZ2FYVk5ERHB1UUwvbjY0MFBIQ3RrVHQyTlpNL2FPU1NTY2hncDdRamNXRitoc1RqSlZNcitBdE9jcks4aGptaFYxR3JRQllzTjk5ajVDL3JpOEZaSjdjZ2t1ZDdubmgxaFJqcmJWZXdCRjJ1Zk8vMUdOQ2h0Wk43N0Npbnptb2xxcFkyYW9NTHV6Unl4RlRwRmdRQU9tTHdpMkl4SHhKVnJXVk9WSDVneXhmTXFvTE1DUVNqM3VPNDlNYVlScGtwRmFwczNxTWtwYVNha1lKTThZUWtnSFl4d252OU1DWEMvZnNkRldFSnFxSUUxc0M3Tzdtdzd5YjRscW9mU2FSd0I4QTg4ejdJcS9pQ09qV1pER0RERzdXTGVtUEg2bnJZNm5qWGc5WEQwc29wU2ZMSy9Ca243S2ZNQlhSb2t4ZEZlV2Evd0JtZDloYnY5Y1BoeWFsdHdkTEU0dHJ5UlUwUnkrclpWcjRKNHBaQWpEUTdxb0kyYTQ4UEsvVEhwWW0vRE1zbDdvajRpeTZhcXl5U0FJbGRERzJ1bkthZFE3eVdKRnp2WTJKMjZiWTJSYlRSQnh0TXJkTlJVdkRORTlLL3dBMGhhTUdwcWFTYXhSUjJyaVFBMklGdmNZOVJKTGs4eDIrQk1jd3I2b2xJNitScWVQVWlnSFZZYjJQcnY0YjNPSFc0dWxzQmZMM3pxT29SWlk2VkdrVkc1MTFLV0RIVnBCSjNDbmJ2TEw0N1VqSFV5YlZBTmRUMDFCTFRTUlZWUlU4d05KZU5oRXFzMXlQRTdXNjdkUnNNUHBTT1NiQ284bG9jK2d6U1dQTTVaZmtVamE2NjNRdks2cVFBeEFBRjl5QnY1NE1jZXE5eEp1cStwbjBsUXNJaVFNU0RNb3VkdnU2K28vNnNSYU9yWU1Nb0dXQTIwdHpkTnhjZmdHSkZMR2NHY1BUVXRYQytxUVRNc0tnalZZV0oySDh1L0NPSldNcTJGUEZVZ0ZmREdzU3h1OGRnSGhhSHE1SGRmeTN3clc0emtnN0pwZE5NWWkwSWFFaVZpSmcxa0N0YzJKMkhUQWFzZU16dzFVY2FNenpSdEdaTkIwU3Nkd3QvcmlEZ3lxa2dhTE5Ra2lJSGpMc2hzTlRmdzRSeEdVaHB3NW1VTXRkSzk2ZlNGdWVZa3IrSFFLUC9HRzdkOGdjelFxR29qcU01cldWSUpDYWF4MDBrckU5bE5yOUNPbXczK2h3c29MYzZNeGxSMTB0TFhVUmlpYU5Hb3pHUkZUR0xZemtrZHJvTnVuWHY2WXh6eHA2U3lsc3liTzgzak9heks1MERuU2dFZjV6aHA0OXhWTFlNeS9paVdsZW5qam5aVld4R2x2enhpeVlrM2JSZU05cU8rTzg2aWtVR0dWYk1WMDZXdUNkdS9BZ2tsUXpGVUZWbXRERTBoK1lNUlF0SDlpMWphNFBkM0cyS3VEZmdWU1F5eTdOWHplc2lXb0QwOHFqUUpDbGcxcm5jZGI0bjJrMlVVa2tHNUV6VmhxQlNTY3pNVTF2QTUxS25MTmtZTjVtOWdQTVc2WTA0OFNWMXlTbk5lUVRNYTNNZUhKNmlua2docW9oSnkrYnp3aXVHVUhlN0RZR3dzZThZcjI5Tm9tNUo3bGZvODU1R2J5VTlieVBsWUdNcjhwbFpYdGJzcWU4ZW5oam94cDB4Vzc0SmF2T3ZuNWFPM0pXSmE2TjFFVWVrZ0ZYRmo2V0g1K09LcmNSbGZyTXdNZVVVTE9lMzJSNi9aUjRTU3RJWmVTMGNNVExVNWhsY2JxR1I1dExBN2dpNHhseXBxRGFOV0JKNUlwbjlFNGF6THVIZUFJMmlqaWdWYWJzUnBzR051N0h4amQyZTdsZHpjajVXenpKVzRzcmF5bnkrVXBtRGtYalFic0RmZnBqMWVsMUpOSkVzaWhHblpTZVB1R3M5NEpnbzRNNXBLMUsxMVdST2JZRGxpdzJ0ZXczOWNlcGh5WEttWjhzWTZiaTdLdGxXZTVpeVY2elZDdFFJVzBSbGJsV0c0UHBmdTc5dkRHNVNlcEl5S096WlQ4MXpLb21wWm9lYXNUVFJ0RHpJbElJMUMxdmNHMzU0OWEyZVUwbVo1UzVMblZlMDBGTlZUSlo5Rm5rS2hyRWc3K1Z1dU5FZURMdmRJWlpQUTFWVlgwTVdtVnBiQnloWXVXQ25VWEpCNkJibmNkTDR0R09yZ1hnOHpLdkdXTkhCSVVDb3ZMZFdGd3czQkZ2WERWUnpsUTE0UWtneVhLOCtlcG5DR3ZhbFNsaHNidXdtVm1WZlFiNzR2anFDZG1mSW5hWm0rYVZzRlZxSE8rVUZLb1ZncTNNcjMzUHJ1ZllER2R0Tmk3ME1LYXRranlzQlFwRFQydVZCSDNCaVZiRkl5MkNKWmpQRk1BdC90QjNFZ2RuZTRIWDJ3YUxKMlExN2lIaURMZVU2RHRKL3dBUE04WkI1dmhKdUQrUXdrbHVkNUxuVFZWWkZMVkYyemFVR0ZyRTA4SUFPbmF6L2lQNVlhaDlrVi9QYTJzbnBZUG1EWGdpb0lCcWVXclcwZDJqYTNydmljbzdISit3aWFXUU9OTXM0N0IrOUtBUHVudS9uNzRuU0gxUDNHL0RwbXAybFpxaVZHSzI3T2RKU2dEYnF4WGYvTDc0WkpISjN5YVBIWExCbU5acnFJbWI1VWtoczdZbjdxZFZBN1ArYi9YQ3lWdGxGc1JDb2VTYktKT2RUaW41VmxNTXNzMTNNckN3Wmh1TEU3bnd0YkVaeHVpaVpObkdkVTgzRXVZd3NYVjRxcWNFNk5TMkVodHZjZDJEb3NDWXFuenlPQ3ZVYzVVVzFrdWJYeEtlSk1kU05ueUdYSytOY3VQSnl0VWhqSVdUNXV0V25hYTZFNll3N0ZXM1hlOXJhMTY0U2NvUlc4V1BGU2IyWlJ1SVJtdVU1aFVybk1WUlRacUE3ekNxRHBMekZBQUxhdHlkbEhmMEdJUWZjOVYyTTl0cUs1a25GeGV0bWtxcXRwS3lka2FCUkhwamdOdTExdGNIZm9NYUhDTEoyUDhBTGErV0hNcGN2aEZKVWNpRXZWR2NPRHBERnV6YnFTRHRmYTRYSEtHbmdEZGhGVEZFbXVFcWxZSlZrSW1yVmRWVWpaYkJKQmU1TjdzVDNiZFFSb0diRTlRWlJSRkVxbzZBQ1FXZ2lBMHlKWTlzblJJYitXNTlNT29xaEc5eDFROEhadm1kQ3NsSzJYT1YwekV4eXBxQnMxci9BR2E3MnZ0YS9YdncvYmIzUW1wTGtxL0hmQ21kNUxEUmFxUzhBUVc1UjVzVnlGQUlPbTZteEFzU2VuWHhTVUhIbER4a253UjVYVDVobE9ZVURWR1d1aVRTSTZ1YWVRa0FqWlF3Q3JjbTVHeDhMNHo1NFB0dlkwNFpMV2paYW5qSE5PYzFISXJyQ3NhdEdyeUZHSFcyNVBYcjNXMng4dzhUWGc5NkxpM1F5NGQ0aXBlQ1lxdjV2TUZiUFRMR1k1NHBpeVJ3a0VnSWJidGNOYytnSGZmMUlSV09MVCtabVdWVGt2WUQ0NHpuamZqNnFtcm82K3FsZUxkMmswZ3lJUHVnYXRpUHJoOGZTcEswaU04MGJvV25oYzVYa01VZVpWQXpiTTZvT1dwSjVTRkNFTjJ0WUdyWWpwYitRTzNEaDFUUkhKUFRCL1VvUEYzQjFWd3pEUXc1aFhVMVNzOHJ4RW9uTFBOUWJFbnZCMVg5dW5TM3JUeHVDUjVjV203QkljMHBjdml6b05yRk5EUlBDdE5UTGVRczdEVklIWW5TZGgwQjlzS3JkTDZpdExmOENnWjNtMUZCbU1XWlU4TlJsOVRCSkhKOHdqa0lpZGxTb0FiWVdQY0Nlbzc4ZWdsVzVpa2trVDFmRk9XY2I1bFV5MDBORFFVVlBORXdocjZsWU9lQkhvSlVFYWJ0WXZiVmZidkp4WnVPUitta3Z5TThiUzlXNHRxNTRhcXJnbFN2anBYUmh5NFpvWkdZbTQ2RFNDMisxZ2ZmQzZTa3BXQzVadzFMQXRkVVFacFJKTE5xalZwUTBxeGk5bUpLSXlnM0FzRzZnM0ZyQzd4eFBsTXp1ZGJVQzBjTXN6L0xSQ05JajJsZVFBZ0RvRzgvL0dNbW05a05leEZtZVpjdk9YeTZXU09ibHZZVkVTYUZrQUhVV0YrL3IxeDFVNkdqTnRia0VGZlZabG0yWE5QTHp3c2thZ2dDV3c1blN4MzcrbUVmSlpOdHBsMG9reW5STHpFcEk1bmhkWkF0Tk1Pem9Gd1ZKMjlCZzBPSUswUVUrWHhpT0tuWFZVbmFDamtqQjdIZUdQYTlSaWN1RGt4UzVKSUFRZ2xMQThnajhQamlRd2ZRWm5WSk1WcDAwdllYNXNFWjhMN01DUGZyZzIwRlAyTGN2RTJhdm1SSVBZa2o1ZWlNUXJhNFVYQkl2ZmJ2Mi9MQ2FtMldzZmZzeXF6S3R5WWM5aElZN0FUVHFReDVqMnV5OWs3N2QzaGhudTBncDdXVjNqV2pxc2o0bXpGNnVJcXM4OHBCNWdrVTZ0d05pUUQyaGhuRnAweWVxdHl4Y04wTU1kYnJpZ0MwNlFvV3FpcW5SSVJ1b0YrNDkrS3BJS2s2UG9IZ2pqZkxvOGpvbzgycmtqcUZMUWdUYVNaRVZpb3ZZRWJnZE51dUI2VXFaT1NrM2FNYjQzNDZ6cmlPRjhybHIvbktDQ1Z2a3hLVll3b3BPbFVlOXdsdGdvT20zY0RqemRFVkp5aWpmcWs0cUxNOGpwS3FscllxcUo0eFBFMnBic0xiZVY4VlF2STg0YXpTdGx6dXNldGxXb1ZxU1VCaTQxYktTb0Z1Ni82NGJkaTdsb3pKcEs2TFJBeXVCZU55aWx0TjJGanNQTEhPRFp6bFJUWnF2TUtuTVBrWXFPWlZSdEx5eVF5RlFPbW9BRGZ2eEszZEUzSjJPS0NxenFrejJHcnl5YVJIVXRDdk5qbFdKMktrRzZHM2NXM1BlQmg5MDlocnN0R1hHZXR5OE8rWXF4ayt5a2ltWWM2UFpWSlFFbmV3RnU3cGdwTVpTUEpjeFRJOHpvNWFPdXFxYWJVQTFSTkNqUnIzbnZ1UHBpalZLa0twYjdsbnpYTVA2MzVQRlcvdC9MTXhxeEp6SmFhVXNDQ3Q3RldQU3hZN0MzVTQ4VEpCcDFObnJSbW10VVVJSzZUTG5ram5xS2haQ1ZVNllRSEJYcUJ0MCs5aEhpbFpYdVJseVBjczQrb2FPT2FKNnVvU2owRkJIeTJCQU54dHNiNDB4MXYwb2ovRFhxWm5PY2NRVTArZVZlWVU3NWxUb1llUllobFoxMkpzd3ZZRTM2K1dObURETEdtWmMyYUdSMml0WjlScEt6Y25pQ2VyaVJocCtabk1ta2tIY2dtOSt6YTQ4dkhHaHdrbVpkU3JrNy9aV1kwZVdabFVWczBkVERMVEpIRnlMbU93SS9DVGNIeHhmVEpOTm1kTjdpeWxwYU9mUHVYV3lKVFVyUjJrbGtoMWdEbDdDM2ZjMlViYkVnNDJSZmhrcHNncU9INWFxYUJNdmVDc1FTY3VHVkw2SDBzZExGQnBJWWhsMnQzNGZTM1ZFRzF3Sk0zcEttbWFwbXpDV2xobWhON2FTeGw4Z2Q5K25YQ3k4Nm5SS1VtdHhMUVp4Qm1VakxtQ2xKRjdjREpka0RiQXFWSnRZanZGdW1FamtYOVJMVzJDelZUeFFwSXN6bFN1bGRUZHc2OUQ0bnZBeFBrQ1o3SFZxK1kwVE9RQ0wzWW5UOVQzZXVDaWtXVDBrNVhNcUZtR3dsaTdVZzFENzQvR3U5dnorbUZyY3FtYUxsdEJVVnNRbERTaUlRTVVMNXZDMEpHanF1K3NkT3JEYnFjVjBOLy9BRXFtVjdQRmlUTDRSTFZVdTFTYmdab3RVUjJPOHIwOU1UbkhZSWdqcUtRU3FBUktkSFFHUy8zVDZEL3g1NGcxUTFodEZVd3ZMSm9wNlVBTHNYaGtrdWR1NERyK1dGSFE4amxxSnF5TXFqdGNxQjh2bGdrdWJMc0NUMmovQUlmTHl3RXR5dTVhNWFtV2hxY3RTYW5xbzcwekJ2bVlVcFF0NUh0cWpCTy9rT3ZxY05LUEFZaTdpTE5JNnZQNXFPZWxpdE1qeTJTL1ljYkFLb09uOEk3dXVLSld6blYweG5MOFFjbHk0UjBlWUptUWxpUlZuV21qaTBnanIxSU54YXhCNkcrR3V1UkhKTGdmNVR4M2xNbVJaekhXeHJIVVVwMUxCQk15ODVCcExhYm0rb0RtZWgzNld4QjAyN0hVbjRabnVZOFJmdEdxYVNocFo0b0tpUnRGT3pHUzBlclpTMzRqdHY3SEV0Ryt3eW0yWGI5cjBqUVJyTmttVVNOR3VoWkJScWpLUExUWVg4eURpbnd5VzZiS3ZKSnBKaWpML2lGTGttWVYwR1daaEhRaDIwT2dWUzJ4OUF2ZWZEYkRMSFJGenNJL3J4blUwdFZKSG1NbFE4b0I1Y2NVVW5RZmhDM0NkOTl4aWlqWEFqYmZJdDUyWlp4b2xqRmRQVUlDcVJvNkdVRWQyaFpBMi9qYkMwbDRBMjN3QjBEOFJadkxIR29xSXBTSFhsT1pIa0txcFo3SnBKSUNvekhmN3FrbllIRTN0SFU5a0dDbk4xRk1JeUxoemlEaUtsTlpRVWM5ZFRMY0NhbXAyY0VqYllqdjJ2WVk1TGEyRGRuZjlWZUsvd0JrcEpKbFZSQzdLQ1BuUWtMS050aHptVSsyRmk1TTZta2VVUzVoa1UxTlVDcXBGYUpvcndUNXZRQkhBSUpEQVZJYmZjRmJiWDYzdzBvUXlLcERSeVRodkZsaS9iMUhtUE9qektYSTZWV2tXUmFpaldWM1E5Q281Q25zdGJwM0Vrand3blp4M3NXNzhtdHhCblVtVlpsWHlWS1ptYUNBaThWTkVhbVlKNEF0TkdsKzdxY05HS2p3aUVwT1QzWXBqemhLZUZWWGlNdkdlMXl2MmZBQnViYm5uajlNT3BORXJhOGhBNHQ0ZWdpUmFpbHE2cVVBNnBZWmtqdnAyUFowT055UEh2eFZTc1Z6U0ZkYnhibFRIWEZsMGhhNEJXb2xNZzM5Tk4veXcycHNtOHFBRTRzaW1uVXJRVTBEc3hXL01sVVdBL3hTa2VHSHRvbjNXL0JDbnhGekpRQkZIQWtjamtsZVJHMXJiRGNxVDBBNys3QjF5SlBJem1oNGh6SGlxUVpmVVZ5VTlQb2tFYXV5Und4RS9lUGFLcUwyN3o5VHRnSmIvaUk1VG5VVzlrZTVaa0dWeVJCSm94SUJLbE1yS3doYlVUYlhxQWIrZjB3OEl4Zkp5ajdsY3pPcldwaFJJcWVKWDFMOW9wYlU1Szk0SnQ5QU1URlM5Z1NnYVE1bFQ5b2gxa0FzTmlQTzVGc0ZCamRqR21rMFp0UmtEUzVsajNYN05qOW9QRFkrdUN1VFVrWDNMb0dxSnBXbExtUTB6NnI1V29mN25Rc095MytVYkhwaHBjbG94Rm1kMDVwNktDOFV5M25Pa3RRUTAzNGU0SjE5OFJsdWcwSWJzQ204ZzdQOGFnZFBERTZzNmlla3E3UEpxY2pzV0phdEsrSGVCK1dCcEtJWVRWRk9hcFE0cDVDYkE4eDVKTGl5OWRQVWVtK09TR0crZDVwOHJsZVhSMHZLaWdXRXNJYWVua1JiODU5d0pEY2RQNWpGV3VBMjB0Z1NucHN6NGd6TjYrQ0hWeTRXRGpXdlpVMzhUZnZBNllEYWp5Q3BTM1BhUGhPUjh1cklwR0ZWWE5ZY2lHUUY0MUFzTDNQWHl0aWJaeXh1bmZJUm1tVU5sMllGWk12cWhWU0l5UEdwUFFxUXphckVkb0hhMzNkUFEzMlhabk9MVG9YMVZZYVEwY1R3OGlLTUFSUlBjOTlpZHh1U1J1YkQwNjQ0NU5vdkV3MG5ZYWZMcmpla1Vaa21kcEhMbjliSklHL2ZNTEtMM3NjUmV6TXIzWktqb1lsSW1raklJQUFhNEF2dWQ4U1p5VFJmdUY1Vm55Wk5VcG1Ja2NhM0Y3ai9BRXhveFJ1TmxZdllhdkpORlNtT0dvbXAwWWdzYWVab3pzZGlDcEZpRDM0ZVVWTFpoMWV4VE9JdUlhNnJ6S29qbXFwSnd1bGY3Ukk4eHNWUW5kMlA4UnhsY0VuU0pTbTdGVXRieTQ0aWdSaUVOaUlveDNlSVhFbXFKdVRQMDJaVk1iSVlLcWRVMVhLcEtRQTNNRnVsdkE0S1FISnNGa3JKWm1ITWRuMy9BQkcvNHpnMHhkVGZKK1NjV1FEYmRmMU9Pb05rVWxRUGx0SExSalpUcU43L0FIdlhCb0ZzaDVta1BmYzNrMzk3NFpJUTRkOVJ1YmpkUGNZZWhHaUxYWjRqY2djdzlNR2hPQ00xQUN4V3VMc2V1K0RRQXJJSkkwcXBKSll4SkhHcFlveTMxYmphMXhoMGg0b2VmTFBSdzB0VkZUeWlrZXN1c3NrZGxKWHJwUGVkKzd3dzJscGF2QVdWQ1dvSWpiY2drRDhPeDJ4SXpwb2t5bDVYcm85Q2syWVhQUTlmUCtlR1RvdEJoY0kwNWxTanY1cWRrTDE3WS9DZGo3ZGNGY2w5UmVzcHpHaGcxSzgxSmRhVjd4L016THBITC91dndlZmdQUER0V1dqTFlSNW5XVThsSEc4SHl6THp6L3c2U01DZFBmcjY0bEpiSGE3RjhZTEdNaFNCcEZ6eXJEcDQ5Mkloc2xwQzJ0MjdmM0R0cmpROTNlZHNjaDR5Q2Fxd2Rpcm1KZ0FRVFVnVzJHOWgwOWY5Y0d6cFNzZDhLdEZtVlhTaXRlbHJtaTFMR3M3eXlhbE9vK0drN2s3dCtnR0tMZlpuUmxXNVZLZk9KVmxXWmhaajJnWSt6cHY0VzZZa25ZcXlOY21oOEY4ZHBXVmROUVpoSlVUMGhidFJhREl6YkgrSHRFbnBncFF1MmkvZTFLa2FPbkZuQzJXd0xTTGxsUkFrYTNSSm9WaEFGei9lT3ZmZkZ0ZUpQWkNkeVZWWldPS3M0eTdQOHhwSzZDcFRMNlRrTEdZYWlPS1pkVjJlOTBja0UzVVdJdUNNWnNrMU9YcFd4U00xVzdCV0pLQTdxUERHNURjbVU1dTZ0bkZZckczMno5MytMR1Y4c3p1ckYwajJzQWJpM2RqaWJab1BCRWpEaDZNQzM3eDdBajB4cXgvS01tV0lJVG8xTGRTd0dLME5abS9FRmJMSG5GVWtkdElLanorNmgvbWNZNThzaStSSzByRXVlcENINldPRW9SczVXY2txT21vMytqTGpxRko5VysvVFYvOEFtY0VKNEpBb0hhQTZmcWNBNGljU0ZnVkJJQ0QvQUxzTWNNc3I0YnpiTllwWG82S1dlTVNPcGRiQmIyRzF5Zk1ZcEdFcDd4UjJ3emI0YzU4dFBMTEpCSENrUzYyNWtvdlpSYzlMNHIySjFiRnRDek1PSEtpanliTDh5a2tRdzFVajh0QmU0MCtQMXdyeHRSVXZjV3JGQzB0d29KNkVuL2YxeHlTTzJKNmFmOW5sblRvL1pjRTlRVHVQeXdhb0piY280cG1wc2x6T0NvbG1yYUY2WmxXbDFKcGdaN0JIVW5jTXBhKzIrM3ZpME1qVVdudWhKSk5vejNsTElvKzFSZkM3Vy9MR0V5aDJUdnlxc0lBQ0RidER0WDM4RHNmVEhjbGNmSjJyL3dCdGdHeEFsUzZrSFQ5OGQzVmZiYjJ3VnlVdDJYZWdxS21TeDUxY3NSZzZpYUprL2Q3YVpMYW04aWUvR3RGMDZFdWUxY2owYUNTZXBZaVVqKzA1aWs1NmR3VURTUExFSjhBc1RjMEV4RDdLNUFBT3BpZWc5c1oyaDcyQ0tOd3p2WlEzWjZSMDNNL0p2MXgxQlRHRlRKS0F4dE1CWVcwd3hvTDdkL1cvNURCb3BaWk9FS3lRVlNvMVJJQThoN0Rab28xYmRER0I5cDlSYnAzWXJBNjlqUG9uUEtRMkF1dmQ2WWdsUkZNYzhQT0hrWU1MM2piYi9wT0MwVWd3aVJoOG1ya0pZczZqWDArNnY1YjRrME5ZWldaZ1Zlb3B2bVlJMGg2Z1FheXZhSUpPMWoxNllxa2RxSnFiSzg2cG90ZVU1dkZYd2QwZW9iRHdDbTYvbmpSVFc2WWJrdmxaVnN6U3RpcXBaYXltYUozY3N4MGtDNVAweEozZTVKeWZrQ015TjNBZTJBVGNqUU9EWHRrRWFxVmI3UjlpY1h4dllhTHNzMUNSSkxGR3hJVXRZWE8xN0hGbVZSbW1mUXEyYzFSTFd1Vi83VS8weGltOTJUazFiQVJUb05XNU45amliWWxodVMwVlBWNTFsc0VzWWVHV3FpamRiMnVyU0tENWpid3cwTjVKTUZtaFpKdzFrNCtJT2JVQm9vNUtPbnAwYU9LYTdoV0lpSk85N203TmpiQ0VlNDR0QnN2ZEprdVhVUlg1ZWhnZy93QXNTajlCaldvcGNJRGtaSjhUNjFhUGkyb1FRdXdXS0UzWFlEN05lL0huNTMvRVlOUmJQaFZVYzNobXF1cFFpdGxGaWY4QUJGalowejlEL0VEWlk4NWUyVVpoYTdmWVNicnYrRTQxUytWaVh1WlZ4SzUvcUR3dXFqdm1KSi82Y2Vma2Y4S0MvRTU4bE1LdHBzWHQycjdIdXhDd0JtVHdRMU5USkZPaG5XUVd0elZqS2JnNmdXMjJzY055TXFMTlNjSzAwbWFQQ0toSnFGMUMybWt0SlpTU05UV3VGUEwzS0FtM1FiRzFZUTMzT2FyY3pZRFVBdHZEdnhsTW9kbGlGYXBkSTJ1TGx1bHNBZUxwaE1ZdlYwejZyL2FLRnNkaDJ4OVBRNEs1SzN1V21scFVXcmRuaWpNaGdJZlZTdVpEOW4zMk9rKzNYcGpVVnNYWnBHNjBTZlp2R09idC9aUkNPbjUrK0lUMlJ6WXBpSk5qZHZLN0Q5QmpOWnlaM1R5S1pISlpXN1A0blp2MHd5R1RES2hWMUxhTUhwdUlTZkR2UDZZWWR5TFJ3bExMSFdLRkRoZVoydXpFaSs0UGE5bC9YRnNmSVV5aHhQZUZCL2gvbGpJUXNiY1BTV25JSXVPVzMvYWNVUlhHOXd0NmxWeTJPd0NubVNHOXIvZ1RDVVBZYlZTRnEycTBQTllrN0pFQmJ0bllIdk9Lbk43Z3NHWFpWV3Z6TXR6UjZLb1A0Sm10K2UyMkhwZUdUL0FOYWZpTEs0MU0wYVpuVFd1RFlPYmY3OWNONmtjNU1YU1psa2xleFNzb0hvSnJtN1JlUHBoVzR2bEUyMCtTU240ZGdtKzB5bk5oclBSU3hWajViYjRLaXY2V2NrbHdNc25PZlVXWXdSVjMydEdTd2FVa0VEc20yNDg4VVNrdVIwMml2NXpNUm05U0FMSFVCYjJYR1dhOVRKdVc0RVpIWlRiWTRXaGJHUERXL0VlVUM1MUdzaDc5djNpNHJqVlNYNG5YdWFaazhqRDRuWjhRUVQ4dW05djhNT05zZjUwdjM3QnV5NmFqdGNra1d4cU9NWStKbFRvNHRxQUFzcmNxUFp0ejl3WTh6T3Y0akZMajhLV2R1SGFtNmovakpCMlIxR2lQZkd2cHRvZmNORm96d2taSm1aS2tBMDdkZjhweG9rL1N6cTNNbDRvLytoK0YxMlg5NmIreTR3VC9BSmNRUGNwd1ZGVnJzZnZYeG5GRzNEV1lRNVpYVFZFaW9Ra1oyZm9UM1llTHAyRmJIZkVYRlp6Q2N5cU5MdkdWSUl1ZDc3ZzlSYmI2WTZjM0lXVWlwaVFsUVFxMkk2OWNUSkhVWlpaMGFRa0FkYjc0NDRZUUJscVllb1lGVGJyMmRRdHYzanlPK0NpeUxqUzA5UzlQSExIVDZxV1NIN09WYWxrallGTEN5ZFYzdjZkY2F2QlM5NkVXY3hyU1VtaHhUSWVadnlubGtQdVgvbGlNMVFIc0xZMlVGTzBMM0FHbEJqTTBFSm80SjVwZnMxbGZVaHQ5cUYyOXYwdzVSSFZXQkhJVElZMXNCOTVuWTIydjVZSncvd0NGSjRqV1FGSkYwdEtOT2lrUTMzL2ladFMrd09MWStUa3ltd0VtT08zOEkvVEdla1IzSE9RcVJPZHYrVzM2SEhMa3JqWjNMTUJSSU5SSGJjN2Y1VXdTbTdHRHpoNmlxVWM1eXZVR1N5L2VPdy8zNDRkSUxWZ2h6SEpNMUpGWFROUXpnaFRMVDNJdjNFLy9BTU9LK2w4a3VSa21SWnhsbG15eXVNeUhkWW5Pa20zcnNmZTJHN2NsOHJBMDF1bUx6eFhIVmt3NXBRUlRsV0tsbEhhRy93QkQ3V3hKeXY1aEw5eVNESWNzemlONU1zcXBxZDAyWkhXNFUrQnYvSTRaUVVsc2N0MEg1UlE1eGwxZlRMVVZBbXk5aXd1R3VBUWpFQ3gzRy9oaDBwSjc4QlNraEZuWkRadE9RL1Z2RHlYL0FNNHp5WHFZSHlBRlNWSUJ1UjM0VVZERGhwU3ZFK1RNV3Y4QTJ5SFlqLzFGdytQNTErSVRTTXFuSStJMmZiMkpoUUVnVzdvc2JJL3paZnYyT0x0RXl1dzFEVUxqNzIrTmFPTVgrSnRWTkZ4aFZSeFdXOGNaQkNqKzdYSGw1LzVqQTI3THg4S3BucHVHSlZkU1NhdVMzUTdhVXhwd2JRSFJZZUlxdG15SE1CWUw5Z3dKNjl4eGFUOUxDWmZ4YXY4QThsOExkcTQwU20xcmR5WXlUMmhFbVZEVWlxMmxCczI5eDMvN3RqT0szUTU0VEZCVTVwTkJtVVROU3ZIcCt4UldZTVNOSnMxdjFCODhXdzA1VklXMlM4VjhIQ0JwYW1pWUVoaVRBQllBZVZ6dDZiOWV1TFo4S2d0U09lNnMvOWs9XCIiXSwic291cmNlUm9vdCI6IiJ9