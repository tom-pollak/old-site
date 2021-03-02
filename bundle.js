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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss ***!
  \*****************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/sass/styles.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/sass/colors.scss":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/sass/colors.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"// $hue: get(\\\"hue\\\");\\n@import \\\"hue.scss\\\";\\n\\n$first-color: hsl($hue, 100%, 50%);\\n\\n// Find the hue 180 degrees away on the color wheel\\n$second-color: complement($first-color);\\n\\n// Check if the color is a cool color\\n@function is-cool-color($color) {\\n\\t@return hue($color) < 300 and hue($color) > 120;\\n}\\n\\n// Check if the color is high value or low value\\n@function is-high-key-value($color) {\\n\\t@return hue($color) > 30 and hue($color) < 140;\\n}\\n\\n//Establish a relationship (similar lighting conditions) between colors.\\n@function harmonious-mix($mix, $base) {\\n\\t@if (is-cool-color($mix)){\\n\\t\\t@if is-high-key-value($base) {\\n\\t\\t\\t@return mix($mix, $base, 11%);\\n\\t\\t}\\n\\t\\t@else {\\n\\t\\t\\t@return mix($mix, $base, 16%);\\n\\t\\t}\\n\\t}\\n\\t@else {\\n\\t\\t@if is-high-key-value($base) {\\n\\t\\t\\t@return mix($mix, $base, 13%);\\n\\t\\t}\\n\\t\\t@else {\\n\\t\\t\\t@return mix($mix, $base, 23%);\\n\\t\\t}\\n\\t}\\n}\\n\\n@function mix-neutral($color) {\\n\\t@if (is-highest-key-value($color)) {\\n\\t\\t@if is-high-key-value(complement($color)) {\\n\\t\\t\\t@return mix(complement($color), $color, 19%);\\n\\t\\t}\\n\\n\\t\\t@else {\\n\\t\\t\\t@return mix(complement($color), $color, 13%);\\n\\t\\t}\\n\\t}\\n\\t@else if (is-high-key-value($color)) {\\n\\t\\t@if is-high-key-value(complement($color)) {\\n\\t\\t\\t@return mix(complement($color), $color, 31%);\\n\\t\\t}\\n\\n\\t\\t@else {\\n\\t\\t\\t@return mix(complement($color), $color, 23%);\\n\\t\\t}\\n\\t}\\n\\t@else {\\n\\t\\t@if is-highest-key-value(complement($color)) {\\n\\t\\t\\t@return mix(complement($color), $color, 31%);\\n\\t\\t}\\n\\n\\t\\t@if is-high-key-value(complement($color)) {\\n\\t\\t\\t@return mix(complement($color), $color, 26%);\\n\\t\\t}\\n\\n\\t\\t@else {\\n\\t\\t\\t@return mix(complement($color), $color, 23%);\\n\\t\\t}\\n\\t}\\n}\\n\\n@function pick-contrast($color) {\\n\\t@if is-high-key-value($color){\\n\\t\\t@if lightness($color) < 30% {\\n\\t\\t\\t@return lighten(complement($color), 86);\\n\\t\\t}\\n\\n\\t\\t@else if lightness($color) > 70% {\\n\\t\\t\\t@return darken(complement($color), 68);\\n\\t\\t}\\n\\n\\t\\t@else {\\n\\t\\t\\t@return darken(complement($color), 53);\\n\\t\\t}\\n} @else {\\n\\t@if lightness($color) < 30% {\\n\\t\\t\\t@return lighten(complement($color), 86);\\n\\t\\t}\\n\\n\\t\\t@else if lightness($color) > 70% {\\n\\t\\t\\t@return darken(complement($color), 68);\\n\\t\\t}\\n\\n\\t\\t@else {\\n\\t\\t\\t@return lighten(complement($color), 53);\\n\\t\\t}\\n\\t}\\n}\\n\");\n\n//# sourceURL=webpack:///./src/sass/colors.scss?./node_modules/raw-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/sass/styles.scss":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/sass/styles.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"@import \\\"hue.scss\\\";\\n@import \\\"colors.scss\\\";\\n\\np {\\n\\tcolor: $first-color\\n}\\n\");\n\n//# sourceURL=webpack:///./src/sass/styles.scss?./node_modules/raw-loader/dist/cjs.js");

/***/ }),

/***/ "./src/js/reload.js":
/*!**************************!*\
  !*** ./src/js/reload.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass.worker.js */ \"./src/js/sass.worker.js\");\n/* harmony import */ var _sass_worker_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_worker_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass.js */ \"./src/js/sass.js\");\n/* harmony import */ var _sass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _raw_loader_sass_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !raw-loader!../sass/styles.scss */ \"./node_modules/raw-loader/dist/cjs.js!./src/sass/styles.scss\");\n/* harmony import */ var _raw_loader_sass_colors_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !raw-loader!../sass/colors.scss */ \"./node_modules/raw-loader/dist/cjs.js!./src/sass/colors.scss\");\n\n\n\n\n\nconsole.log(_raw_loader_sass_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nvar sass = new _sass_js__WEBPACK_IMPORTED_MODULE_1___default.a(__webpack_require__.p + \"bundle.worker.js\");\nsass.writeFile(\"colors.scss\", _raw_loader_sass_colors_scss__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nsass.writeFile(\"styles.scss\", _raw_loader_sass_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nconst rangeSlider = document.getElementById(\"color-picker\");\nrangeSlider.addEventListener(\"mousemove\", handleUpdate);\nrangeSlider.addEventListener(\"change\", handleUpdate);\n\nfunction handleUpdate() {\n  var scss = \"$hue: \" + this.value + \";\";\n  sass.writeFile(\"hue.scss\", scss);\n  sass.compileFile(\"styles.scss\", function callback(result) {\n    var style = document.getElementById(\"style\");\n    if (style == null) {\n      var style = document.createElement(\"style\");\n      style.id = \"style\";\n      style.type = \"text/css\";\n      style.innerHTML = result.text;\n      document.getElementsByTagName(\"head\")[0].appendChild(style);\n    } else {\n      style.innerHTML = result.text;\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./src/js/reload.js?");

/***/ }),

/***/ "./src/js/sass.js":
/*!************************!*\
  !*** ./src/js/sass.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! sass.js - v0.11.1 (f286436) - built 2019-10-20\n  providing libsass 3.6.2 (4da7c4bd)\n  via emscripten 1.38.31 (040e49a)\n */\n\n(function (root, factory) {\n  'use strict';\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n}(this, function () {/*global document*/\n// identify the path sass.js is located at in case we're loaded by a simple\n// <script src=\"path/to/sass.js\"></script>\n// this path can be used to identify the location of\n// * sass.worker.js from sass.js\n// * libsass.js.mem from sass.sync.js\n// see https://github.com/medialize/sass.js/pull/32#issuecomment-103142214\n// see https://github.com/medialize/sass.js/issues/33\nvar SASSJS_RELATIVE_PATH = (function() {\n  'use strict';\n\n  // in Node things are rather simple\n  var hasDir = typeof __dirname !== 'undefined';\n  if (hasDir) {\n    return __dirname;\n  }\n\n  // we can only run this test in the browser,\n  // so make sure we actually have a DOM to work with.\n  if (typeof document === 'undefined' || !document.getElementsByTagName) {\n    return null;\n  }\n\n  // http://www.2ality.com/2014/05/current-script.html\n  var currentScript = document.currentScript || (function() {\n    var scripts = document.getElementsByTagName('script');\n    return scripts[scripts.length - 1];\n  })();\n\n  var path = currentScript && currentScript.src;\n  if (!path) {\n    return null;\n  }\n\n  // [worker] make sure we're not running in some concatenated thing\n  if (path.slice(-8) === '/sass.js') {\n    return path.slice(0, -8);\n  }\n\n  // [sync] make sure we're not running in some concatenated thing\n  if (path.slice(-13) === '/sass.sync.js') {\n    return path.slice(0, -13);\n  }\n\n  return null;\n})() || '.';\n\n/*global Worker, SASSJS_RELATIVE_PATH*/\n'use strict';\n\nvar noop = function(){};\nvar slice = [].slice;\n// defined upon first Sass.initialize() call\nvar globalWorkerUrl;\n\nfunction Sass(workerUrl) {\n  if (!workerUrl && !globalWorkerUrl) {\n    /*jshint laxbreak:true */\n    throw new Error(\n      'Sass needs to be initialized with the URL of sass.worker.js - '\n      + 'either via Sass.setWorkerUrl(url) or by new Sass(url)'\n    );\n    /*jshint laxbreak:false */\n  }\n\n  if (!globalWorkerUrl) {\n    globalWorkerUrl = workerUrl;\n  }\n\n  // bind all functions\n  // we're doing this because we used to have a single hard-wired instance that allowed\n  // [].map(Sass.removeFile) and we need to maintain that for now (at least until 1.0.0)\n  for (var key in this) {\n    if (typeof this[key] === 'function') {\n      this[key] = this[key].bind(this);\n    }\n  }\n\n  this._callbacks = {};\n  this._worker = new Worker(workerUrl || globalWorkerUrl);\n  this._worker.addEventListener('message', this._handleWorkerMessage, false);\n}\n\n// allow setting the workerUrl before the first Sass instance is initialized,\n// where registering the global workerUrl would've happened automatically\nSass.setWorkerUrl = function(workerUrl) {\n  globalWorkerUrl = workerUrl;\n};\n\nSass.style = {\n  nested: 0,\n  expanded: 1,\n  compact: 2,\n  compressed: 3\n};\n\nSass.comments = {\n  'none': 0,\n  'default': 1\n};\n\nSass.prototype = {\n  style: Sass.style,\n  comments: Sass.comments,\n\n  destroy: function() {\n    this._worker && this._worker.terminate();\n    this._worker = null;\n    this._callbacks = {};\n    this._importer = null;\n  },\n\n  _handleWorkerMessage: function(event) {\n    if (event.data.command) {\n      this[event.data.command](event.data.args);\n    }\n\n    this._callbacks[event.data.id] && this._callbacks[event.data.id](event.data.result);\n    delete this._callbacks[event.data.id];\n  },\n\n  _dispatch: function(options, callback) {\n    if (!this._worker) {\n      throw new Error('Sass worker has been terminated');\n    }\n\n    options.id = 'cb' + Date.now() + Math.random();\n    this._callbacks[options.id] = callback;\n    this._worker.postMessage(options);\n  },\n\n  _importerInit: function(args) {\n    // importer API done callback pushing results\n    // back to the worker\n    var done = function done(result) {\n      this._worker.postMessage({\n        command: '_importerFinish',\n        args: [result]\n      });\n    }.bind(this);\n\n    try {\n      this._importer(args[0], done);\n    } catch(e) {\n      done({ error: e.message });\n      throw e;\n    }\n  },\n\n  importer: function(importerCallback, callback) {\n    if (typeof importerCallback !== 'function' && importerCallback !== null) {\n      throw new Error('importer callback must either be a function or null');\n    }\n\n    // callback is executed in the main EventLoop\n    this._importer = importerCallback;\n    // tell worker to activate importer callback\n    this._worker.postMessage({\n      command: 'importer',\n      args: [Boolean(importerCallback)]\n    });\n\n    callback && callback();\n  },\n};\n\nvar commands = 'writeFile readFile listFiles removeFile clearFiles lazyFiles preloadFiles options compile compileFile';\ncommands.split(' ').forEach(function(command) {\n  Sass.prototype[command] = function() {\n    var callback = slice.call(arguments, -1)[0];\n    var args = slice.call(arguments, 0, -1);\n    if (typeof callback !== 'function') {\n      args.push(callback);\n      callback = noop;\n    }\n\n    this._dispatch({\n      command: command,\n      args: args\n    }, callback);\n  };\n});\n\n// automatically set the workerUrl in case we're loaded by a simple\n// <script src=\"path/to/sass.js\"></script>\n// see https://github.com/medialize/sass.js/pull/32#issuecomment-103142214\nSass.setWorkerUrl(SASSJS_RELATIVE_PATH + '/sass.worker.js');\nreturn Sass;\n}));\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/js/sass.js?");

/***/ }),

/***/ "./src/js/sass.worker.js":
/*!*******************************!*\
  !*** ./src/js/sass.worker.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function Worker_fn() {\n  return new Worker(__webpack_require__.p + \"bundle.worker.js\");\n}\n\n\n//# sourceURL=webpack:///./src/js/sass.worker.js?");

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

eval("__webpack_require__(/*! -!raw-loader!./src/sass/styles.scss */ \"./node_modules/raw-loader/dist/cjs.js!./src/sass/styles.scss\");\nmodule.exports = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js!css-loader!sass-loader!./src/sass/styles.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss\");\n\n//# sourceURL=webpack:///./src/sass/styles.scss?");

/***/ })

/******/ });