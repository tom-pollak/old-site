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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/sass/styles.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/sass/styles.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"p {\\n  color: #ff5500; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/sass/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/reload.js":
/*!**************************!*\
  !*** ./src/js/reload.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass.js */ \"./src/js/sass.js\");\n/* harmony import */ var _sass_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar sass = new _sass_js__WEBPACK_IMPORTED_MODULE_0___default.a();\nconsole.log(sass);\n\nsass.preloadFiles(\n  \"../sass/\",\n  \"\",\n  [\"styles.scss\", \"colors.scss\", \"hue.scss\"],\n  function callback() {}\n);\n\nconst rangeSlider = document.getElementById(\"color-picker\");\n// rangeSlider.addEventListener(\"mousemove\", handleUpdate);\nrangeSlider.addEventListener(\"change\", handleUpdate);\n\nfunction handleUpdate() {\n  var scss = \"$hue: \" + this.value + \";\";\n  // sass.readFile(\"colors.scss\", function callback(content) {\n  //   scss += content;\n  // });\n  // console.log(scss);\n  // sass.readFile(\"styles.scss\", function callback(content) {\n  //   console.log(content);\n  //   scss += content;\n  // });\n\n  sass.writeFile(\"hue.scss\", scss);\n  sass.readFile(\"hue.scss\", function callback(content) {\n    console.log(content);\n  });\n  sass.readFile(\"styles.scss\", function callback(content) {\n    console.log(content);\n  });\n  sass.compileFile(\"styles.scss\", function callback(result) {\n    console.log(result.text);\n    sass.writeFile(\"styles.scss\", result.text);\n  });\n}\n\n\n//# sourceURL=webpack:///./src/js/reload.js?");

/***/ }),

/***/ "./src/js/sass.js":
/*!************************!*\
  !*** ./src/js/sass.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! sass.js - v0.11.1 (f286436) - built 2019-10-20\n  providing libsass 3.6.2 (4da7c4bd)\n  via emscripten 1.38.31 (040e49a)\n */\n\n(function (root, factory) {\n  'use strict';\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n}(this, function () {/*global document*/\n// identify the path sass.js is located at in case we're loaded by a simple\n// <script src=\"path/to/sass.js\"></script>\n// this path can be used to identify the location of\n// * sass.worker.js from sass.js\n// * libsass.js.mem from sass.sync.js\n// see https://github.com/medialize/sass.js/pull/32#issuecomment-103142214\n// see https://github.com/medialize/sass.js/issues/33\nvar SASSJS_RELATIVE_PATH = (function() {\n  'use strict';\n\n  // in Node things are rather simple\n  var hasDir = typeof __dirname !== 'undefined';\n  if (hasDir) {\n    return __dirname;\n  }\n\n  // we can only run this test in the browser,\n  // so make sure we actually have a DOM to work with.\n  if (typeof document === 'undefined' || !document.getElementsByTagName) {\n    return null;\n  }\n\n  // http://www.2ality.com/2014/05/current-script.html\n  var currentScript = document.currentScript || (function() {\n    var scripts = document.getElementsByTagName('script');\n    return scripts[scripts.length - 1];\n  })();\n\n  var path = currentScript && currentScript.src;\n  if (!path) {\n    return null;\n  }\n\n  // [worker] make sure we're not running in some concatenated thing\n  if (path.slice(-8) === '/sass.js') {\n    return path.slice(0, -8);\n  }\n\n  // [sync] make sure we're not running in some concatenated thing\n  if (path.slice(-13) === '/sass.sync.js') {\n    return path.slice(0, -13);\n  }\n\n  return null;\n})() || '.';\n\n/*global Worker, SASSJS_RELATIVE_PATH*/\n'use strict';\n\nvar noop = function(){};\nvar slice = [].slice;\n// defined upon first Sass.initialize() call\nvar globalWorkerUrl;\n\nfunction Sass(workerUrl) {\n  if (!workerUrl && !globalWorkerUrl) {\n    /*jshint laxbreak:true */\n    throw new Error(\n      'Sass needs to be initialized with the URL of sass.worker.js - '\n      + 'either via Sass.setWorkerUrl(url) or by new Sass(url)'\n    );\n    /*jshint laxbreak:false */\n  }\n\n  if (!globalWorkerUrl) {\n    globalWorkerUrl = workerUrl;\n  }\n\n  // bind all functions\n  // we're doing this because we used to have a single hard-wired instance that allowed\n  // [].map(Sass.removeFile) and we need to maintain that for now (at least until 1.0.0)\n  for (var key in this) {\n    if (typeof this[key] === 'function') {\n      this[key] = this[key].bind(this);\n    }\n  }\n\n  this._callbacks = {};\n  this._worker = new Worker(workerUrl || globalWorkerUrl);\n  this._worker.addEventListener('message', this._handleWorkerMessage, false);\n}\n\n// allow setting the workerUrl before the first Sass instance is initialized,\n// where registering the global workerUrl would've happened automatically\nSass.setWorkerUrl = function(workerUrl) {\n  globalWorkerUrl = workerUrl;\n};\n\nSass.style = {\n  nested: 0,\n  expanded: 1,\n  compact: 2,\n  compressed: 3\n};\n\nSass.comments = {\n  'none': 0,\n  'default': 1\n};\n\nSass.prototype = {\n  style: Sass.style,\n  comments: Sass.comments,\n\n  destroy: function() {\n    this._worker && this._worker.terminate();\n    this._worker = null;\n    this._callbacks = {};\n    this._importer = null;\n  },\n\n  _handleWorkerMessage: function(event) {\n    if (event.data.command) {\n      this[event.data.command](event.data.args);\n    }\n\n    this._callbacks[event.data.id] && this._callbacks[event.data.id](event.data.result);\n    delete this._callbacks[event.data.id];\n  },\n\n  _dispatch: function(options, callback) {\n    if (!this._worker) {\n      throw new Error('Sass worker has been terminated');\n    }\n\n    options.id = 'cb' + Date.now() + Math.random();\n    this._callbacks[options.id] = callback;\n    this._worker.postMessage(options);\n  },\n\n  _importerInit: function(args) {\n    // importer API done callback pushing results\n    // back to the worker\n    var done = function done(result) {\n      this._worker.postMessage({\n        command: '_importerFinish',\n        args: [result]\n      });\n    }.bind(this);\n\n    try {\n      this._importer(args[0], done);\n    } catch(e) {\n      done({ error: e.message });\n      throw e;\n    }\n  },\n\n  importer: function(importerCallback, callback) {\n    if (typeof importerCallback !== 'function' && importerCallback !== null) {\n      throw new Error('importer callback must either be a function or null');\n    }\n\n    // callback is executed in the main EventLoop\n    this._importer = importerCallback;\n    // tell worker to activate importer callback\n    this._worker.postMessage({\n      command: 'importer',\n      args: [Boolean(importerCallback)]\n    });\n\n    callback && callback();\n  },\n};\n\nvar commands = 'writeFile readFile listFiles removeFile clearFiles lazyFiles preloadFiles options compile compileFile';\ncommands.split(' ').forEach(function(command) {\n  Sass.prototype[command] = function() {\n    var callback = slice.call(arguments, -1)[0];\n    var args = slice.call(arguments, 0, -1);\n    if (typeof callback !== 'function') {\n      args.push(callback);\n      callback = noop;\n    }\n\n    this._dispatch({\n      command: command,\n      args: args\n    }, callback);\n  };\n});\n\n// automatically set the workerUrl in case we're loaded by a simple\n// <script src=\"path/to/sass.js\"></script>\n// see https://github.com/medialize/sass.js/pull/32#issuecomment-103142214\nSass.setWorkerUrl(SASSJS_RELATIVE_PATH + '/sass.worker.js');\nreturn Sass;\n}));\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/js/sass.js?");

/***/ }),

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function getHue() {\n  try {\n    var rangeSlider = document.getElementById(\"color-picker\");\n    return rangeSlider.value;\n  } catch {\n    return 180;\n  }\n}\nmodule.exports = {\n  // hue: rangeSlider.value,\n  hue: getHue(),\n};\n\n\n//# sourceURL=webpack:///./src/js/theme.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/theme.js */ \"./src/js/theme.js\");\n/* harmony import */ var _js_theme_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_theme_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_reload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/reload.js */ \"./src/js/reload.js\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/sass/styles.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/sass/styles.scss?");

/***/ })

/******/ });