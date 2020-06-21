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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/index.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js??ref--4-2!./src/style/index.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n* {\\n  margin: 0;\\n  padding: 0;\\n  user-select: none;\\n  -webkit-touch-callout: none;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  width: 100%;\\n  height: 100%;\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  width: 100%;\\n  height: 100%;\\n  font-size: 1.6rem;\\n  line-height: 2;\\n}\\n\\n/* default */\\n.index {\\n  width: 100%;\\n  height: 100%;\\n}\\n.index__top25 {\\n  width: 100%;\\n  position: absolute;\\n  text-align: center;\\n  top: 25%;\\n}\\n\\n.index__center {\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.index__right-top {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  transform: translate(-1rem, 1rem);\\n}\\n\\n.index__msg {\\n  display: none;\\n  font-size: 36px;\\n  /* IE8以下とAndroid4.3以下用フォールバック */\\n  font-size: calc(2.4rem + ((1vw - 0.64rem) * 2.1429));\\n  /* 24px~36pxで可変*/\\n  font-weight: 900;\\n  line-height: 1.3;\\n  letter-spacing: 0.3em;\\n}\\n\\n.index__msg.--win {\\n  color: #cdd949;\\n}\\n\\n.index__msg.--lose {\\n  color: #f7d6c2;\\n}\\n\\n.index__btn {\\n  font-size: 24px;\\n  /* IE8以下とAndroid4.3以下用フォールバック */\\n  font-size: calc(2rem + ((1vw - 0.64rem) * 0.7143));\\n  /* 20px~24pxで可変*/\\n  font-weight: 900;\\n  line-height: 1.3;\\n  letter-spacing: 0.1rem;\\n}\\n\\n.index__btn {\\n  display: block;\\n  width: 5.5em;\\n  height: 2em;\\n  border-radius: 4px;\\n  border: none;\\n  outline: none;\\n  cursor: pointer;\\n}\\n\\n.--start {\\n  margin-bottom: 1rem;\\n}\\n\\n.--reset {\\n  color: #FFFFFF;\\n  background: #E53A40;\\n}\\n\\n.--stop {\\n  display: none;\\n}\\n\\n/* Playing */\\n.index.--playing .index__msg {\\n  display: none;\\n}\\n\\n.index.--playing .index__btn {\\n  display: none;\\n}\\n\\n.index.--playing .--stop {\\n  display: block;\\n}\\n\\n/* Game Clear */\\n.index.--win .index__msg {\\n  display: none;\\n}\\n\\n.index.--win .index__msg.--win {\\n  display: block;\\n}\\n\\n.index.--win .index__btn {\\n  display: none;\\n}\\n\\n.index.--win .--reset {\\n  display: block;\\n}\\n\\n/* Game Over */\\n.index.--lose .index__msg {\\n  display: none;\\n}\\n\\n.index.--lose .index__msg.--lose {\\n  display: block;\\n}\\n\\n.index.--lose .index__btn {\\n  display: none;\\n}\\n\\n.index.--lose .--reset {\\n  display: block;\\n}\\n\\n@media (min-width: 1200px) {\\n  /* 1200px以上*/\\n  .index__msg {\\n    font-size: 3.6rem;\\n    /* 36px*/\\n  }\\n\\n  .index__btn {\\n    font-size: 2.4rem;\\n    /* 24px*/\\n  }\\n}\\n@media screen and (max-width: 640px) {\\n  /* 640px以下*/\\n  body {\\n    line-height: 2;\\n  }\\n\\n  .index__msg {\\n    font-size: 2.4rem;\\n    /* 24px*/\\n  }\\n\\n  .index__btn {\\n    font-size: 2rem;\\n    /* 20px*/\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"index.scss\",\"/Users/tsuji/work/practice/invader/src/style/index.scss\"],\"names\":[],\"mappings\":\"AAAA,gBAAgB;ACAhB;EACI,SAAA;EACA,UAAA;EACA,iBAAA;EACA,2BAAA;EACA,sBAAA;ADEJ;;ACCA;EACI,WAAA;EACA,YAAA;EACA,gBAAA;ADEJ;;ACCA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;EACA,cAAA;ADEJ;;ACCA,YAAA;AACA;EACI,WAAA;EACA,YAAA;ADEJ;ACAI;EACI,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,QAAA;ADER;;ACEA;EACI,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ADCJ;;ACEA;EACI,kBAAA;EACA,QAAA;EACA,MAAA;EACA,iCAAA;ADCJ;;ACEA;EACI,aAAA;EACA,eAAA;EAAgB,+BAAA;EAChB,oDAAA;EAAqD,gBAAA;EACrD,gBAAA;EACA,gBAAA;EACA,qBAAA;ADGJ;;ACAA;EACI,cAAA;ADGJ;;ACAA;EACI,cAAA;ADGJ;;ACAA;EACI,eAAA;EAAgB,+BAAA;EAChB,kDAAA;EAAmD,gBAAA;EACnD,gBAAA;EACA,gBAAA;EACA,sBAAA;ADKJ;;ACFA;EACI,cAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;ADKJ;;ACFA;EACI,mBAAA;ADKJ;;ACFA;EACI,cAAA;EACA,mBAAA;ADKJ;;ACFA;EACI,aAAA;ADKJ;;ACFA,YAAA;AACA;EACI,aAAA;ADKJ;;ACFA;EACI,aAAA;ADKJ;;ACFA;EACI,cAAA;ADKJ;;ACFA,eAAA;AACA;EACI,aAAA;ADKJ;;ACFA;EACI,cAAA;ADKJ;;ACFA;EACI,aAAA;ADKJ;;ACFA;EACI,cAAA;ADKJ;;ACFA,cAAA;AACA;EACI,aAAA;ADKJ;;ACFA;EACI,cAAA;ADKJ;;ACFA;EACI,aAAA;ADKJ;;ACFA;EACI,cAAA;ADKJ;;ACFA;EAA4B,YAAA;EACxB;IACI,iBAAA;IAAkB,QAAA;EDOxB;;ECJE;IACI,iBAAA;IAAkB,QAAA;EDQxB;AACF;ACLA;EAAsC,WAAA;EAClC;IACI,cAAA;EDQN;;ECLE;IACI,iBAAA;IAAkB,QAAA;EDSxB;;ECNE;IACI,eAAA;IAAgB,QAAA;EDUtB;AACF\",\"file\":\"index.scss\",\"sourcesContent\":[\"@charset \\\"UTF-8\\\";\\n* {\\n  margin: 0;\\n  padding: 0;\\n  user-select: none;\\n  -webkit-touch-callout: none;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  width: 100%;\\n  height: 100%;\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  width: 100%;\\n  height: 100%;\\n  font-size: 1.6rem;\\n  line-height: 2;\\n}\\n\\n/* default */\\n.index {\\n  width: 100%;\\n  height: 100%;\\n}\\n.index__top25 {\\n  width: 100%;\\n  position: absolute;\\n  text-align: center;\\n  top: 25%;\\n}\\n\\n.index__center {\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.index__right-top {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  transform: translate(-1rem, 1rem);\\n}\\n\\n.index__msg {\\n  display: none;\\n  font-size: 36px;\\n  /* IE8以下とAndroid4.3以下用フォールバック */\\n  font-size: calc(2.4rem + ((1vw - 0.64rem) * 2.1429));\\n  /* 24px~36pxで可変*/\\n  font-weight: 900;\\n  line-height: 1.3;\\n  letter-spacing: 0.3em;\\n}\\n\\n.index__msg.--win {\\n  color: #cdd949;\\n}\\n\\n.index__msg.--lose {\\n  color: #f7d6c2;\\n}\\n\\n.index__btn {\\n  font-size: 24px;\\n  /* IE8以下とAndroid4.3以下用フォールバック */\\n  font-size: calc(2rem + ((1vw - 0.64rem) * 0.7143));\\n  /* 20px~24pxで可変*/\\n  font-weight: 900;\\n  line-height: 1.3;\\n  letter-spacing: 0.1rem;\\n}\\n\\n.index__btn {\\n  display: block;\\n  width: 5.5em;\\n  height: 2em;\\n  border-radius: 4px;\\n  border: none;\\n  outline: none;\\n  cursor: pointer;\\n}\\n\\n.--start {\\n  margin-bottom: 1rem;\\n}\\n\\n.--reset {\\n  color: #FFFFFF;\\n  background: #E53A40;\\n}\\n\\n.--stop {\\n  display: none;\\n}\\n\\n/* Playing */\\n.index.--playing .index__msg {\\n  display: none;\\n}\\n\\n.index.--playing .index__btn {\\n  display: none;\\n}\\n\\n.index.--playing .--stop {\\n  display: block;\\n}\\n\\n/* Game Clear */\\n.index.--win .index__msg {\\n  display: none;\\n}\\n\\n.index.--win .index__msg.--win {\\n  display: block;\\n}\\n\\n.index.--win .index__btn {\\n  display: none;\\n}\\n\\n.index.--win .--reset {\\n  display: block;\\n}\\n\\n/* Game Over */\\n.index.--lose .index__msg {\\n  display: none;\\n}\\n\\n.index.--lose .index__msg.--lose {\\n  display: block;\\n}\\n\\n.index.--lose .index__btn {\\n  display: none;\\n}\\n\\n.index.--lose .--reset {\\n  display: block;\\n}\\n\\n@media (min-width: 1200px) {\\n  /* 1200px以上*/\\n  .index__msg {\\n    font-size: 3.6rem;\\n    /* 36px*/\\n  }\\n\\n  .index__btn {\\n    font-size: 2.4rem;\\n    /* 24px*/\\n  }\\n}\\n@media screen and (max-width: 640px) {\\n  /* 640px以下*/\\n  body {\\n    line-height: 2;\\n  }\\n\\n  .index__msg {\\n    font-size: 2.4rem;\\n    /* 24px*/\\n  }\\n\\n  .index__btn {\\n    font-size: 2rem;\\n    /* 20px*/\\n  }\\n}\",\"* {\\n    margin: 0;\\n    padding: 0;\\n    user-select: none;\\n    -webkit-touch-callout: none;\\n    box-sizing: border-box;\\n}\\n\\nhtml {\\n    width: 100%;\\n    height: 100%;\\n    font-size: 62.5%;\\n}\\n\\nbody {\\n    width: 100%;\\n    height: 100%;\\n    font-size: 1.6rem;\\n    line-height: 2;\\n}\\n\\n/* default */\\n.index {\\n    width: 100%;\\n    height: 100%;\\n\\n    &__top25 {\\n        width: 100%;\\n        position: absolute;\\n        text-align: center;\\n        top: 25%;\\n    }\\n}\\n\\n.index__center {\\n    position: absolute;\\n    left: 50%;\\n    top: 50%;\\n    transform: translate(-50%, -50%);\\n}\\n\\n.index__right-top {\\n    position: absolute;\\n    right: 0;\\n    top: 0;\\n    transform: translate(-1rem, 1rem);\\n}\\n\\n.index__msg {\\n    display: none;\\n    font-size: 36px;/* IE8以下とAndroid4.3以下用フォールバック */\\n    font-size: calc(2.4rem + ((1vw - 0.64rem) * 2.1429));/* 24px~36pxで可変*/\\n    font-weight: 900;\\n    line-height: 1.3;\\n    letter-spacing: .3em;\\n}\\n\\n.index__msg.--win {\\n    color: #cdd949;\\n}\\n\\n.index__msg.--lose {\\n    color: #f7d6c2;\\n}\\n\\n.index__btn {\\n    font-size: 24px;/* IE8以下とAndroid4.3以下用フォールバック */\\n    font-size: calc(2rem + ((1vw - 0.64rem) * 0.7143));/* 20px~24pxで可変*/\\n    font-weight: 900;\\n    line-height: 1.3;\\n    letter-spacing: .1rem;\\n}\\n\\n.index__btn {\\n    display: block;\\n    width: 5.5em;\\n    height: 2em;\\n    border-radius: 4px;\\n    border: none;\\n    outline: none;\\n    cursor: pointer;\\n}\\n\\n.--start {\\n    margin-bottom: 1rem;\\n}\\n\\n.--reset {\\n    color: #FFFFFF;\\n    background: #E53A40;\\n}\\n\\n.--stop {\\n    display: none;\\n}\\n\\n/* Playing */\\n.index.--playing .index__msg {\\n    display: none;\\n}\\n\\n.index.--playing .index__btn {\\n    display: none;\\n}\\n\\n.index.--playing .--stop {\\n    display: block;\\n}\\n\\n/* Game Clear */\\n.index.--win .index__msg {\\n    display: none;\\n}\\n\\n.index.--win .index__msg.--win {\\n    display: block;\\n}\\n\\n.index.--win .index__btn {\\n    display: none;\\n}\\n\\n.index.--win .--reset {\\n    display: block;\\n}\\n\\n/* Game Over */\\n.index.--lose .index__msg {\\n    display: none;\\n}\\n\\n.index.--lose .index__msg.--lose {\\n    display: block;\\n}\\n\\n.index.--lose .index__btn {\\n    display: none;\\n}\\n\\n.index.--lose .--reset {\\n    display: block;\\n}\\n\\n@media (min-width: 1200px) {/* 1200px以上*/\\n    .index__msg {\\n        font-size: 3.6rem;/* 36px*/\\n    }\\n    \\n    .index__btn {\\n        font-size: 2.4rem;/* 24px*/\\n    }\\n}\\n\\n@media screen and (max-width: 640px) {/* 640px以下*/\\n    body{\\n        line-height: 2;\\n    }\\n\\n    .index__msg {\\n        font-size: 2.4rem;/* 24px*/\\n    }\\n\\n    .index__btn {\\n        font-size: 2rem;/* 20px*/\\n    }\\n}\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/index.scss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js??ref--4-2");

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
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/script/config/config.js":
/*!*************************************!*\
  !*** ./src/script/config/config.js ***!
  \*************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n\n\n// ゲームセッティング\nconst config = {\n    domId: {\n        root: 'js-index',\n    \n        button: {\n            start: 'js-start-btn',\n            stop:  'js-stop-btn',\n            reset: 'js-reset-btn',\n        },\n    \n        message: {\n            win:  'js-gameclear',\n            lose: 'js-gameover',\n        },\n    \n        canvas: {\n            space: 'js-space',\n            field: 'js-field',\n        }\n    },\n\n    event: {\n        type: {\n            load:   'load',\n            resize: 'resize',\n            start:  'start',\n            stop:   'stop',\n            reset:  'reset',\n            left:   'left',\n            right:  'right',\n            shoot:  'shoot',\n            none:   'none'\n        },\n    \n        swipe: {\n            dist: 50\n        }\n    },\n\n    game: {\n        state: {\n            default: 'index',\n            playing: '--playing',\n            win:     '--win',\n            lose:    '--lose'\n        }\n    },\n\n    field: {\n        width: 250,\n        top: 0\n    },\n\n    player: {\n        type:  'player',\n        width:  50,\n        height: 50,\n        life:   1,\n        score:  -100,\n        dist:   50,\n        grace:  200,\n        look: {\n            normal: './img/player.svg',\n            dead:   './img/explosion.svg'\n        },\n        top: 0.9\n    },\n\n    bullet: {\n        type:  'bullet',\n        width:  5,\n        height: 10,\n        life:   1,\n        score:  0,\n        dist:   -5,\n        grace:  0,\n        look: {\n            normal: './img/bullet.svg',\n        }\n    },\n\n    enemy: {\n        type:  'enemy',\n        width:  50,\n        height: 50,\n        life:   1,\n        score:  1,\n        dist:   0.5,\n        grace:  200,\n        look: {\n            normal: './img/enemy.svg',\n            dead:   './img/explosion.svg'\n        },\n        top:      0.1,\n        interval: 3000\n    },\n\n    boss: {\n        type:   'boss',\n        width:  250,\n        height: 250,\n        life:   100,\n        score:  100,\n        dist:   0.5,\n        grace:  200,\n        look: {\n            normal: './img/boss.svg',\n            dead:   './img/explosion.svg'\n        }\n    }\n};\n\n//# sourceURL=webpack:///./src/script/config/config.js?");

/***/ }),

/***/ "./src/script/controler/area-controller.js":
/*!*************************************************!*\
  !*** ./src/script/controler/area-controller.js ***!
  \*************************************************/
/*! exports provided: AreaController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AreaController\", function() { return AreaController; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _controller_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller-base */ \"./src/script/controler/controller-base.js\");\n\n\n\n\n\nclass AreaController extends _controller_base__WEBPACK_IMPORTED_MODULE_1__[\"ControllerBase\"] {\n    constructor(model, view) {\n        super();\n        this._model = model;\n        this._view  = view;\n    }\n\n    init() {\n        // nothing\n    }\n\n    resize() {\n        this._model.resize();\n        this._view.resize();\n    }\n\n    run(event) {\n        const type = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEventType();\n        if(event.type === type.load)   return this.init();\n        if(event.type === type.resize) return this.resize();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/controler/area-controller.js?");

/***/ }),

/***/ "./src/script/controler/controller-base.js":
/*!*************************************************!*\
  !*** ./src/script/controler/controller-base.js ***!
  \*************************************************/
/*! exports provided: ControllerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ControllerBase\", function() { return ControllerBase; });\n\n\nclass ControllerBase {\n    run(event) {\n        throw new Error('abstract method is called');\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/script/controler/controller-base.js?");

/***/ }),

/***/ "./src/script/controler/controller-factory.js":
/*!****************************************************!*\
  !*** ./src/script/controler/controller-factory.js ***!
  \****************************************************/
/*! exports provided: ControllerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ControllerFactory\", function() { return ControllerFactory; });\n/* harmony import */ var _area_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-controller */ \"./src/script/controler/area-controller.js\");\n/* harmony import */ var _player_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-controller */ \"./src/script/controler/player-controller.js\");\n/* harmony import */ var _game_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-controller */ \"./src/script/controler/game-controller.js\");\n/* harmony import */ var _controller_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller-manager */ \"./src/script/controler/controller-manager.js\");\n\n\n\n\n\n\n\nclass ControllerFactory {\n    createAreaControler(model, view) {\n        return new _area_controller__WEBPACK_IMPORTED_MODULE_0__[\"AreaController\"](model, view);\n    }\n\n    createPlayerControler(charaMgr, areaMgr) {\n        return new _player_controller__WEBPACK_IMPORTED_MODULE_1__[\"PlayerController\"](charaMgr, areaMgr);\n    }\n\n    createGameControler(model, view) {\n        return new _game_controller__WEBPACK_IMPORTED_MODULE_2__[\"GameController\"](model, view);\n    }\n\n    createControlerManager(model, view, event) {\n        return new _controller_manager__WEBPACK_IMPORTED_MODULE_3__[\"ControllerManager\"](model, view, event);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/controler/controller-factory.js?");

/***/ }),

/***/ "./src/script/controler/controller-manager.js":
/*!****************************************************!*\
  !*** ./src/script/controler/controller-manager.js ***!
  \****************************************************/
/*! exports provided: ControllerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ControllerManager\", function() { return ControllerManager; });\n\n\n// Controlerクラス\nclass ControllerManager {\n    constructor(model, view, event) {\n        this._model = model;\n        this._view  = view;\n        this._event = event;\n    }\n\n    init() {\n        this._model.init();\n        this._view.init();\n        this._event.init();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/controler/controller-manager.js?");

/***/ }),

/***/ "./src/script/controler/game-controller.js":
/*!*************************************************!*\
  !*** ./src/script/controler/game-controller.js ***!
  \*************************************************/
/*! exports provided: GameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameController\", function() { return GameController; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _controller_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller-base */ \"./src/script/controler/controller-base.js\");\n\n\n\n\n\nclass GameController extends _controller_base__WEBPACK_IMPORTED_MODULE_1__[\"ControllerBase\"] {\n    constructor(model, view) {\n        super();\n        this._model = model;\n        this._view  = view;\n        this._requestID = null;\n    }\n\n    run(event) {\n        const type = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEventType();\n        if(event.type === type.start) return this.start();\n        if(event.type === type.stop)  return this.stop();\n        if(event.type === type.reset) return this.reset();\n    }\n\n    start() {\n        this._model.start();\n        this.controlDom();\n        this.update();\n    }\n\n    stop() {\n        this._model.stop();\n        this.controlDom();\n        cancelAnimationFrame(this._requestID);\n    }\n\n    reset() {\n        location.reload();\n    }\n\n    controlDom() {\n        const root  = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getRootDom();\n        const state = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigGameState();\n        root.classList = state.default;\n\n        // ゲームがプレイ中\n        const isPlaying = this._model.isPlaying();\n        if(isPlaying === true) return root.classList.add(state.playing);\n        \n        // ゲームが終了中\n        const score = this._model.getScore();\n        if(score < 0) return  root.classList.add(state.lose);\n        if(score > 99) return root.classList.add(state.win);\n       \n        // ゲームが停止中\n        return root.classList.add(state.default);\n    }\n\n    update() {\n        if(this._model.isGameOver()  === true) return this.stop();\n        if(this._model.isGameClear() === true) return this.stop();\n\n        this._model.update();\n        this._view.update();\n        \n        this._requestID = requestAnimationFrame(this.update.bind(this));\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/script/controler/game-controller.js?");

/***/ }),

/***/ "./src/script/controler/player-controller.js":
/*!***************************************************!*\
  !*** ./src/script/controler/player-controller.js ***!
  \***************************************************/
/*! exports provided: PlayerController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerController\", function() { return PlayerController; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _controller_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller-base */ \"./src/script/controler/controller-base.js\");\n\n\n\n\n\nclass PlayerController extends _controller_base__WEBPACK_IMPORTED_MODULE_1__[\"ControllerBase\"] {\n    constructor(model) {\n        super();\n        this._model = model;\n    }\n\n    run(event) {\n        const type = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEventType();\n        if(event.type === type.left)  return this.moveLeft();\n        if(event.type === type.right) return this.moveRight();\n        if(event.type === type.shoot) return this.shoot();\n    }\n\n    moveLeft(){\n        const player = this._model.getPlayer();\n        const min = 0;\n        if(player.getLeft() <= min) return;\n\n        player.moveLeft();\n    }\n\n    moveRight(){\n        const field  = this._model.getField();\n        const player = this._model.getPlayer();\n        const max = field.getWidth() - player.getWidth();\n        if(player.getLeft() >= max) return;\n\n        player.moveRight();\n    }\n\n    shoot(){\n        const player = this._model.getPlayer();\n        player.shoot();\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/script/controler/player-controller.js?");

/***/ }),

/***/ "./src/script/event/button-event.js":
/*!******************************************!*\
  !*** ./src/script/event/button-event.js ***!
  \******************************************/
/*! exports provided: ButtonEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonEvent\", function() { return ButtonEvent; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _event_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-base */ \"./src/script/event/event-base.js\");\n\n\n\n\n\n// ボタンイベントクラス\nclass ButtonEvent extends _event_base__WEBPACK_IMPORTED_MODULE_1__[\"EventBase\"] {\n    constructor(...observers) {\n        super(...observers);\n        this.domStrBtn = document.querySelector('#js-start-btn');\n        this.domStpBtn = document.querySelector('#js-stop-btn');\n        this.domRstBtn = document.querySelector('#js-reset-btn');\n    }\n\n    init() {\n        // PC用\n        this.domStrBtn.addEventListener('click', this.pressButton.bind(this));\n        this.domStpBtn.addEventListener('click', this.pressButton.bind(this));\n        this.domRstBtn.addEventListener('click', this.pressButton.bind(this));\n\n        // スマホ、タブレット用\n        this.domStrBtn.addEventListener('touchstart', this.pressButton.bind(this));\n        this.domStpBtn.addEventListener('touchstart', this.pressButton.bind(this));\n        this.domRstBtn.addEventListener('touchstart', this.pressButton.bind(this));\n    }\n\n    pressButton(e) {\n        if(e.target === this.domStrBtn) this.start();\n        if(e.target === this.domStpBtn) this.stop();\n        if(e.target === this.domRstBtn) this.reset();\n        this.notify(this);\n    }\n\n    start() {\n        const type = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEventType();\n        this._type = type.start;\n    }\n\n    stop() {\n        const type = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEventType();\n        this._type = type.stop;\n    }\n\n    reset() {\n        const type = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEventType();\n        this._type = type.reset;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/event/button-event.js?");

/***/ }),

/***/ "./src/script/event/event-base.js":
/*!****************************************!*\
  !*** ./src/script/event/event-base.js ***!
  \****************************************/
/*! exports provided: Subject, EventBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Subject\", function() { return Subject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventBase\", function() { return EventBase; });\n\n\nclass Subject {\n    constructor(...observers) {\n        this._observers = observers;\n    }\n\n    addObserver(item) {\n        this._observers.push(item);\n    }\n\n    deleteObserver(item) {\n        this._observers = this._observers.filter(e => e !== item);\n    }\n\n    notify() {\n        this._observers.forEach(e => e.run(this));\n    }\n}\n\nclass EventBase extends Subject {\n    constructor(...observers) {\n        super(...observers);\n        this._type = '';\n    }\n\n    get type() {\n        return this._type;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/event/event-base.js?");

/***/ }),

/***/ "./src/script/event/event-factory.js":
/*!*******************************************!*\
  !*** ./src/script/event/event-factory.js ***!
  \*******************************************/
/*! exports provided: EventFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventFactory\", function() { return EventFactory; });\n/* harmony import */ var _event_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-manager */ \"./src/script/event/event-manager.js\");\n/* harmony import */ var _window_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./window-event */ \"./src/script/event/window-event.js\");\n/* harmony import */ var _button_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-event */ \"./src/script/event/button-event.js\");\n/* harmony import */ var _keydown_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keydown-event */ \"./src/script/event/keydown-event.js\");\n/* harmony import */ var _swipe_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swipe-event */ \"./src/script/event/swipe-event.js\");\n/* harmony import */ var _touch_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./touch-event */ \"./src/script/event/touch-event.js\");\n\n\n\n\n\n\n\n\n\nclass EventFactory {\n    createEventManager(...events) {\n        return new _event_manager__WEBPACK_IMPORTED_MODULE_0__[\"EventManager\"](...events);\n    }\n\n    createWindowEvent(...observers) {\n        return new _window_event__WEBPACK_IMPORTED_MODULE_1__[\"WindowEvent\"](...observers);\n    }\n\n    createButtonEvent(...observers) {\n        return new _button_event__WEBPACK_IMPORTED_MODULE_2__[\"ButtonEvent\"](...observers);\n    }\n\n    createKeydownEvent(...observers) {\n        return new _keydown_event__WEBPACK_IMPORTED_MODULE_3__[\"KeydownEvent\"](...observers);\n    }\n\n    createSwipeEvent(...observers) {\n        return new _swipe_event__WEBPACK_IMPORTED_MODULE_4__[\"SwipeEvent\"](...observers);\n    }\n\n    createTouchEvent(...observers) {\n        return new _touch_event__WEBPACK_IMPORTED_MODULE_5__[\"TouchEvent\"](...observers);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/event/event-factory.js?");

/***/ }),

/***/ "./src/script/event/event-manager.js":
/*!*******************************************!*\
  !*** ./src/script/event/event-manager.js ***!
  \*******************************************/
/*! exports provided: EventManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventManager\", function() { return EventManager; });\n\n\nclass EventManager {\n    constructor(...events) {\n        this._itemList = events;\n    }\n\n    init() {\n        this._itemList.forEach(e => e.init());\n    }\n\n}\n\n\n//# sourceURL=webpack:///./src/script/event/event-manager.js?");

/***/ }),

/***/ "./src/script/event/keydown-event.js":
/*!*******************************************!*\
  !*** ./src/script/event/keydown-event.js ***!
  \*******************************************/
/*! exports provided: KeydownEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KeydownEvent\", function() { return KeydownEvent; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _event_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-base */ \"./src/script/event/event-base.js\");\n\n\n\n\n\nclass KeydownEvent extends _event_base__WEBPACK_IMPORTED_MODULE_1__[\"EventBase\"] {\n    constructor(...observers) {\n        super(...observers);\n        this._disable = false;\n    }\n\n    init() {\n        window.addEventListener('keydown', this.keydown.bind(this), false);\n        window.addEventListener('keyup', this.keyup.bind(this), false);\n    }\n    \n    keydown(e) {\n        // キーボード長押しを禁止する\n        if(this._disable === true) return;\n\n        this._disable = true;\n\n        const val = this.convertKeyCodeToMeaningStr(e.keyCode);\n        const type = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEventType();\n\n        if(val === null)       this._type = type.none;\n        if(val === type.shoot) this._type = type.shoot;\n        if(val === type.left)  this._type = type.left;\n        if(val === type.right) this._type = type.right;\n\n        this.notify();\n    }\n\n    convertKeyCodeToMeaningStr(code) {\n        const type = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEventType();\n        if(code === 32) return type.shoot;\n        if(code === 37) return type.left;\n        if(code === 39) return type.right;\n        \n        return null;\n    }\n\n    keyup() {\n        this._disable = false;\n    }\n}\n\n//# sourceURL=webpack:///./src/script/event/keydown-event.js?");

/***/ }),

/***/ "./src/script/event/swipe-event.js":
/*!*****************************************!*\
  !*** ./src/script/event/swipe-event.js ***!
  \*****************************************/
/*! exports provided: SwipeEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SwipeEvent\", function() { return SwipeEvent; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _event_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-base */ \"./src/script/event/event-base.js\");\n\n\n\n\n\n// スワイプイベントクラス\nclass SwipeEvent extends _event_base__WEBPACK_IMPORTED_MODULE_1__[\"EventBase\"] {\n    constructor(...observers) {\n        super(...observers);\n        this._x1 = 0;\n        this._x2 = 0;\n    }\n\n    init() {\n        window.addEventListener('touchstart', this.touchStart.bind(this), {passive: false});\n        window.addEventListener('touchmove', this.touchMove.bind(this), {passive: false});\n        window.addEventListener('touchend', this.touchEnd.bind(this), false);\n    }\n\n    touchStart(event) {\n        event.preventDefault();\n        this._x1 = event.touches[0].pageX;\n        // 前回の座標が残ってるとタッチ時に移動してしまうことがある\n        this._x2   = event.touches[0].pageX;\n    }\n\n    touchMove(event) {\n        event.preventDefault();\n        this._x2 = event.changedTouches[0].pageX;\n    }\n\n    touchEnd() {\n        if (this._x1 > this._x2) return this.moveLeft();\n        if (this._x1 < this._x2) return this.moveRight();\n    }\n\n    moveLeft() {\n        if ((this._x1 - this._x2) < _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigSwipeDist()) return;\n        const type = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEventType();\n        this._type = type.left;\n        this.notify();\n    }\n\n    moveRight() {\n        if((this._x2 - this._x1) < _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigSwipeDist()) return;\n        const type = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEventType();\n        this._type = type.right;\n        this.notify();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/event/swipe-event.js?");

/***/ }),

/***/ "./src/script/event/touch-event.js":
/*!*****************************************!*\
  !*** ./src/script/event/touch-event.js ***!
  \*****************************************/
/*! exports provided: TouchEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TouchEvent\", function() { return TouchEvent; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _event_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-base */ \"./src/script/event/event-base.js\");\n\n\n\n\n\n// タッチイベントクラス\nclass TouchEvent extends _event_base__WEBPACK_IMPORTED_MODULE_1__[\"EventBase\"] {\n    constructor(...observers) {\n        super(...observers);\n        this._x1 = 0;\n        this._x2 = 0\n    }\n\n    init() {\n        window.addEventListener(\"touchstart\", this.touchStart.bind(this), {passive: false});\n        window.addEventListener(\"touchmove\", this.touchMove.bind(this), {passive: false});\n        window.addEventListener(\"touchend\", this.touchEnd.bind(this), {passive: false});\n    }\n\n    touchStart(event) {\n        event.preventDefault();\n        this._x1 = event.touches[0].pageX;\n        // 前回の座標が残ってるとタッチ時が反応しなくなることがある\n        this._x2 = event.touches[0].pageX;\n    }\n\n    touchMove(event) {\n        event.preventDefault();\n        this._x2 = event.changedTouches[0].pageX;\n    }\n\n    touchEnd() {\n        if(Math.abs(this._x2 - this._x1) >= _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigSwipeDist()) return;\n        this.shoot();\n    }\n\n    shoot() {\n        const type = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEventType();\n        this._type = type.shoot;\n        this.notify();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/event/touch-event.js?");

/***/ }),

/***/ "./src/script/event/window-event.js":
/*!******************************************!*\
  !*** ./src/script/event/window-event.js ***!
  \******************************************/
/*! exports provided: WindowEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WindowEvent\", function() { return WindowEvent; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _event_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-base */ \"./src/script/event/event-base.js\");\n\n\n\n\n\nclass WindowEvent extends _event_base__WEBPACK_IMPORTED_MODULE_1__[\"EventBase\"] {\n    constructor(...observers) {\n        super(...observers);\n    }\n\n    init() {\n        window.addEventListener('load',   this.load.bind(this));\n        window.addEventListener('resize', this.resize.bind(this));\n    }\n\n    load() {\n        const type = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEventType();\n        this._type = type.load;\n        this.notify(this);\n    }\n\n    resize() {\n        const type = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEventType();\n        this._type = type.resize;\n        this.notify(this);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/event/window-event.js?");

/***/ }),

/***/ "./src/script/main.js":
/*!****************************!*\
  !*** ./src/script/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model_manager_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/manager-factory */ \"./src/script/model/manager-factory.js\");\n/* harmony import */ var _model_game_object_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/game-object-factory */ \"./src/script/model/game-object-factory.js\");\n/* harmony import */ var _view_view_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view-factory */ \"./src/script/view/view-factory.js\");\n/* harmony import */ var _controler_controller_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controler/controller-factory */ \"./src/script/controler/controller-factory.js\");\n/* harmony import */ var _event_event_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/event-factory */ \"./src/script/event/event-factory.js\");\n\n\n\n\n\n\n\n\nfunction main() {\n    // Model\n    const mf = new _model_manager_factory__WEBPACK_IMPORTED_MODULE_1__[\"ManagerFactory\"]();\n    const gf = new _model_game_object_factory__WEBPACK_IMPORTED_MODULE_2__[\"GameObjectFactory\"]();\n    \n    const mSpace   = gf.createSpace();\n    const mField   = gf.createField();\n    const areaMgr = mf.createAreaMgr(mSpace, mField);\n\n    const list     = mf.createList();\n    const charaMgr = mf.createCharaMgr(list, gf);\n\n    const crash    = mf.createCrash(charaMgr);\n    const fieldOut = mf.createFieldOut(charaMgr);\n    const ruleMgr = mf.createRuleMgr(crash, fieldOut);\n\n    const scoreMgr = mf.createScoreManager();\n    const timeMgr  = mf.createTimeManager();\n    const stateMgr = mf.createStateManager();\n\n    const gameMgr = mf.createGameMgr(ruleMgr, charaMgr, scoreMgr, timeMgr, stateMgr);\n\n    const mMgr = mf.createModelManager(gameMgr, areaMgr, charaMgr);\n\n    // View\n    const vFactory = new _view_view_factory__WEBPACK_IMPORTED_MODULE_3__[\"ViewFactory\"]();\n    const vSpace   = vFactory.createSpace(mMgr);\n    const vField   = vFactory.createField(mMgr);\n    const vMgr     = vFactory.createManager(vSpace, vField);\n\n    // Controler\n    const cFactory = new _controler_controller_factory__WEBPACK_IMPORTED_MODULE_4__[\"ControllerFactory\"]();\n    const cPlayer  = cFactory.createPlayerControler(mMgr);\n    const cAreaMgr = cFactory.createAreaControler(mMgr, vMgr);\n    const cGameMgr = cFactory.createGameControler(mMgr, vMgr);\n\n    // Event\n    const ef = new _event_event_factory__WEBPACK_IMPORTED_MODULE_5__[\"EventFactory\"]();\n    const ek = ef.createKeydownEvent(cPlayer);\n    const es = ef.createSwipeEvent(cPlayer);\n    const et = ef.createTouchEvent(cPlayer);\n    const eb = ef.createButtonEvent(cGameMgr);\n    const ew = ef.createWindowEvent(cAreaMgr);\n    const eMgr = ef.createEventManager(ek, es, et, eb, ew);\n\n    // Main Controler\n    const cMgr = cFactory.createControlerManager(mMgr, vMgr, eMgr);\n    cMgr.init();\n}\n\nmain();\n\n//# sourceURL=webpack:///./src/script/main.js?");

/***/ }),

/***/ "./src/script/model/area-manager.js":
/*!******************************************!*\
  !*** ./src/script/model/area-manager.js ***!
  \******************************************/
/*! exports provided: AreaManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AreaManager\", function() { return AreaManager; });\n\n\n// フィールドのModelクラス\nclass AreaManager {\n    constructor(space, field) {\n        this._space = space;\n        this._field = field;\n    }\n\n    getSpace() {\n        return this._space;\n    }\n\n    getField() {\n        return this._field;\n    }\n\n    init() {\n        this._space.init();\n        this._field.init();\n    }\n\n    resize() {\n        this._space.resize();\n        this._field.resize();\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/area-manager.js?");

/***/ }),

/***/ "./src/script/model/character-base.js":
/*!********************************************!*\
  !*** ./src/script/model/character-base.js ***!
  \********************************************/
/*! exports provided: CharacterBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CharacterBase\", function() { return CharacterBase; });\n/* harmony import */ var _game_object_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-object-base */ \"./src/script/model/game-object-base.js\");\n\n\n\n\nclass CharacterBase extends _game_object_base__WEBPACK_IMPORTED_MODULE_0__[\"GameObjectBase\"] {\n    constructor(size, position, look, status) {\n        super(size, position)\n        this._look      = look;\n        this._status    = status;\n        this._isDispose = false;\n    }\n\n    getLook() {\n        return this._look.getItem();\n    }\n\n    getType() {\n        return this._status.type;\n    }\n\n    getDist() {\n        return this._status.dist;\n    }\n\n    getScore() {\n        return this._status.score;\n    }\n\n    getGrace() {\n        return this._status.grace;\n    }\n\n    isDead() {\n        return this._status.life <= 0;\n    }\n\n    getIsDispose() {\n        return this._isDispose;\n    }\n\n    update() {\n        throw new Error();\n    }\n\n    hit() {\n        this._status.hit();\n        if(this.isDead()) this.dead();\n    }\n\n    // ライフが0になった後も処理したいためここではdisposeしない\n    dead() {\n        this._look.last();\n        const time = this.getGrace();\n        setTimeout(this.makeDisposeTarget.bind(this), time);\n    }\n\n    makeDisposeTarget() {\n        this._isDispose = true;\n    }\n\n    dispose() {\n        const score = this.getScore();\n        \n        this._position = null;\n        this._size     = null;\n        this._look     = null;\n        this._status   = null;\n        this._field    = null;\n        \n        return score;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/character-base.js?");

/***/ }),

/***/ "./src/script/model/character-manager.js":
/*!***********************************************!*\
  !*** ./src/script/model/character-manager.js ***!
  \***********************************************/
/*! exports provided: CharacterManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CharacterManager\", function() { return CharacterManager; });\n\n\nclass CharacterManager {\n    constructor(list, factory) {\n        this._list    = list;\n        this._factory = factory;\n        this._player  = null;\n        this._boss    = null;\n    }\n\n    getCharacterList() {\n        return this._list.toArray();\n    }\n\n    getPlayer() {\n        return this._player;\n    }\n\n    getBoss() {\n        return this._boss;\n    }\n\n    addPlayer() {\n        if(this._player !== null) return;\n        const player = this._factory.createPlayer(this);\n        this._player = player;\n        this._list.addItem(player);\n    }\n\n    addBullet() {\n        const bullet = this._factory.createBullet(this._player);\n        this._list.addItem(bullet);\n    }\n\n    addEnemy() {\n        const enemy = this._factory.createEnemy();\n        this._list.addItem(enemy);\n    }\n\n    addBoss() {\n        if(this._boss !== null) return;\n\n        const boss = this._factory.createBoss();\n        this._boss = boss;\n        this._list.addItem(boss);\n    }\n\n    getDisposeTaget() {\n        const list = this._list.toArray();\n        return list.filter(e => e.getIsDispose() === true);\n    }\n\n    removeCharacter(chara) {\n        this._list.removeItem(chara);\n    }\n\n    update() {\n        for(const e of this._list) e.update();\n    }\n\n    disposeCharacter() {\n        const array = this._list.toArray();\n        for(let e of array) {\n            if(e.getIsDispose() === false) continue;\n            this.removeCharacter(e);\n            e.dispose();\n            e = null;\n        }\n    }\n\n}\n\n//# sourceURL=webpack:///./src/script/model/character-manager.js?");

/***/ }),

/***/ "./src/script/model/crash.js":
/*!***********************************!*\
  !*** ./src/script/model/crash.js ***!
  \***********************************/
/*! exports provided: Crash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Crash\", function() { return Crash; });\n\n\nclass Crash {\n    constructor(charaMgr) {\n        this._charaMgr = charaMgr;\n    }\n    \n    crash(list) {\n        list.forEach(e => e.hit());\n    }\n    \n    update() {\n        const origin = this._charaMgr.getCharacterList();\n        const crashed = origin.filter(e => this.isCrash(e));\n        this.crash(crashed);\n    }\n    \n    // TODO: もっといいアルゴリズムを考えたい\n    isCrash(e) {\n        const t1 = e;\n\n        // オブジェクトの中点を取得する\n        const p1 = this.getObjectPositionOfCenter(t1);\n        \n        // オブジェクトの中点からの大きさを取得する\n        const s1 = this.getObjectSizeFromCenter(t1);\n\n        let result = false;\n\n        const list = this._charaMgr.getCharacterList();\n        let p2, s2, checkX, checkY;\n\n        for(let t2 of list) {\n            // 同じオブジェクト同士は判定しない\n            if(t1 === t2) continue;\n\n            // オブジェクトの中点を取得する\n            p2 = this.getObjectPositionOfCenter(t2);\n\n            // オブジェクトの中点からの大きさを取得する\n            s2 = this.getObjectSizeFromCenter(t2);\n            \n            // X軸の重なりを判定\n            checkX = Math.abs(p1.x - p2.x) < s1.w + s2.w;\n            \n            // Y軸の重なりを判定\n            checkY = Math.abs(p1.y - p2.y) < s1.h + s2.h;\n            \n            // 両方の値がtrueなら衝突している\n            result = checkX === true && checkY === true;\n\n            if(result === true) break;\n        }\n\n        return result;\n    }\n\n    getObjectPositionOfCenter(object) {\n        const x = object.getLeft() + object.getWidth() / 2;\n        const y = object.getTop() + object.getHeight() / 2;\n\n        return {x: x, y: y};\n    }\n\n    getObjectSizeFromCenter(object) {\n        const w = object.getWidth() / 2;\n        const h = object.getHeight() / 2;\n        \n        return {w: w, h: h};\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/crash.js?");

/***/ }),

/***/ "./src/script/model/field-out.js":
/*!***************************************!*\
  !*** ./src/script/model/field-out.js ***!
  \***************************************/
/*! exports provided: FieldOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FieldOut\", function() { return FieldOut; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n\n\n\n\nclass FieldOut {\n    constructor(charaMgr) {\n        this._charaMgr  = charaMgr;\n    }\n\n    update() {\n        const origin = this._charaMgr.getCharacterList()\n        const filtered = origin.filter(e => this.isFieldOut(e))\n        this.fieldOut(filtered);\n    }\n\n    isFieldOut(e) {\n        // プレイヤーは仕様上フィールドアウトできないので除外する\n        if(e.getType() === _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigPlayerType()) return false;\n        // ボスは仕様上フィールドアウトしても良いので除外する\n        if(e.getType() === _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigBossType()) return false;\n\n        const fp = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getFieldProp();\n        const top = e.getTop();\n        const btm = top + e.getHeight();\n        const chkTop = top < fp.y;\n        const chkBtm = btm > fp.y + fp.h;\n\n        return chkTop === true || chkBtm === true;\n    }\n\n    fieldOut(array) {\n        array.forEach(e => e.makeDisposeTarget());\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/field-out.js?");

/***/ }),

/***/ "./src/script/model/field.js":
/*!***********************************!*\
  !*** ./src/script/model/field.js ***!
  \***********************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Field\", function() { return Field; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _game_object_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-object-base */ \"./src/script/model/game-object-base.js\");\n\n\n\n\n\n// フィールドのModelクラス\nclass Field extends _game_object_base__WEBPACK_IMPORTED_MODULE_1__[\"GameObjectBase\"] {\n    constructor(size, position) {\n        super(size, position);\n    }\n\n    init() {\n        const prop = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getFieldProp();\n        this.setLeft(prop.x);\n        this.setTop(prop.y);\n        this.setWidth(prop.w);\n        this.setHeight(prop.h);\n    }\n\n    resize() {\n        this.init();\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/field.js?");

/***/ }),

/***/ "./src/script/model/game-manager.js":
/*!******************************************!*\
  !*** ./src/script/model/game-manager.js ***!
  \******************************************/
/*! exports provided: GameManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameManager\", function() { return GameManager; });\n\n\nclass GameManager {\n    constructor(ruleMgr, charaMgr, scoreMgr, timeMgr, stateMgr) {\n        this._ruleMgr  = ruleMgr;\n        this._charaMgr = charaMgr;\n        this._scoreMgr = scoreMgr;\n        this._timeMgr  = timeMgr;\n        this._stateMgr = stateMgr;\n    }\n\n    isPlaying() {\n        return this._stateMgr.getState();\n    }\n\n    isGameClear() {\n        return this.getScore() > 99;\n    }\n\n    isGameOver() {\n        return this.getScore() < 0;\n    }\n\n    getScore() {\n        return this._scoreMgr.score;\n    }\n\n    init() {\n        // do nothing\n    }\n\n    start() {\n        this._stateMgr.start();\n        this._charaMgr.addPlayer();\n    }\n\n    stop() {\n        this._stateMgr.stop();\n    }\n\n    update() {\n        this.createEnemy();\n        this._charaMgr.update();\n        this._ruleMgr.update();\n        this.cleanUp();\n    }\n\n    createEnemy() {\n        if(this.getScore() > 9) return this.addBoss();\n        if(this._timeMgr.isAppearTime() === true) return this.addEnemy();\n    }\n\n    addEnemy() {\n        this._charaMgr.addEnemy();\n    }\n\n    addBoss() {\n        this._charaMgr.addBoss();\n    }\n\n    cleanUp() {\n        let score = 0;\n        const target = this._charaMgr.getDisposeTaget();\n        for(const e of target) score += e.getScore();\n        this._scoreMgr.changeScore(score);\n        this._charaMgr.disposeCharacter();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/game-manager.js?");

/***/ }),

/***/ "./src/script/model/game-object-base.js":
/*!**********************************************!*\
  !*** ./src/script/model/game-object-base.js ***!
  \**********************************************/
/*! exports provided: GameObjectBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameObjectBase\", function() { return GameObjectBase; });\n\n\n// ゲームオブジェクトのベースクラス\nclass GameObjectBase {\n    constructor(size, position) {\n        this.size      = size;\n        this.position  = position;\n    }\n\n    setWidth(w) {\n        this.size.width = w;\n    }\n\n    getWidth() {\n        return this.size.width;\n    }\n\n    setHeight(h) {\n        this.size.height = h;\n    }\n\n    getHeight() {\n        return this.size.height;\n    }\n\n    setLeft(x) {\n        this.position.x = x;\n    }\n\n    getLeft() {\n        return this.position.x;\n    }\n\n    setTop(y) {\n        this.position.y = y;\n    }\n\n    getTop() {\n        return this.position.y;\n    }\n\n    move(x, y) {\n        this.position.moveX(x);\n        this.position.moveY(y)\n    }\n\n    update() {\n        throw new Error();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/game-object-base.js?");

/***/ }),

/***/ "./src/script/model/game-object-factory.js":
/*!*************************************************!*\
  !*** ./src/script/model/game-object-factory.js ***!
  \*************************************************/
/*! exports provided: GameObjectFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameObjectFactory\", function() { return GameObjectFactory; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/script/model/list.js\");\n/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size */ \"./src/script/model/size.js\");\n/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./position */ \"./src/script/model/position.js\");\n/* harmony import */ var _looks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./looks */ \"./src/script/model/looks.js\");\n/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status */ \"./src/script/model/status.js\");\n/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./space */ \"./src/script/model/space.js\");\n/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./field */ \"./src/script/model/field.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player */ \"./src/script/model/player.js\");\n/* harmony import */ var _non_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./non-player */ \"./src/script/model/non-player.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass GameObjectFactory {\n    createSpace() {\n        const prop  = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getSpaceProp();\n        const size  = new _size__WEBPACK_IMPORTED_MODULE_2__[\"Size\"](prop.w, prop.h);\n        const pos   = new _position__WEBPACK_IMPORTED_MODULE_3__[\"Position\"](prop.x, prop.y);\n        const space = new _space__WEBPACK_IMPORTED_MODULE_6__[\"Space\"](size, pos);\n\n        return space;\n    }\n\n    createField() {\n        const prop  = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getFieldProp();\n        const size  = new _size__WEBPACK_IMPORTED_MODULE_2__[\"Size\"](prop.w, prop.h);\n        const pos   = new _position__WEBPACK_IMPORTED_MODULE_3__[\"Position\"](prop.x, prop.y);\n        const field = new _field__WEBPACK_IMPORTED_MODULE_7__[\"Field\"](size, pos);\n\n        return field;\n    }\n\n    createPlayer(mgr) {\n        const config   = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigPlayer();\n        const fp       = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getFieldProp();\n\n        const width    = config.width;\n        const height   = config.height;\n        const size     = new _size__WEBPACK_IMPORTED_MODULE_2__[\"Size\"](width, height);\n\n        const left     = (fp.w / 2) - (width / 2);\n        const top      = (fp.h * config.top) - height;\n        const position = new _position__WEBPACK_IMPORTED_MODULE_3__[\"Position\"](left, top);\n\n        const list     = new _list__WEBPACK_IMPORTED_MODULE_1__[\"List\"]();\n        const normal   = config.look.normal;\n        const dead     = config.look.dead;\n        const looks    = new _looks__WEBPACK_IMPORTED_MODULE_4__[\"Looks\"](list, normal, dead);\n\n        const type     = config.type;\n        const life     = config.life;\n        const score    = config.score;\n        const dist     = config.dist;\n        const grace    = config.grace;\n        const status   = new _status__WEBPACK_IMPORTED_MODULE_5__[\"Status\"](type, life, dist, score, grace);\n\n        return new _player__WEBPACK_IMPORTED_MODULE_8__[\"Player\"](size, position, looks, status, mgr);\n    }\n\n    createBullet(player) {\n        if(!player) return;\n\n        const config   = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigBullet();\n\n        const width    = config.width;\n        const height   = config.height;\n        const size     = new _size__WEBPACK_IMPORTED_MODULE_2__[\"Size\"](width, height);\n\n        const pLeft    = player.getLeft();\n        const pTop     = player.getTop();\n        const pWidth   = player.getWidth();\n        const left     = (pLeft + (pWidth / 2)) - (width / 2);\n        const top      = pTop - (height * 2);\n        const position = new _position__WEBPACK_IMPORTED_MODULE_3__[\"Position\"](left, top);\n\n        const list     = new _list__WEBPACK_IMPORTED_MODULE_1__[\"List\"]();\n        const normal   = config.look.normal;\n        const looks    = new _looks__WEBPACK_IMPORTED_MODULE_4__[\"Looks\"](list, normal);\n\n        const type     = config.type;\n        const life     = config.life;\n        const score    = config.score;\n        const dist     = config.dist;\n        const grace    = config.grace;\n        const status   = new _status__WEBPACK_IMPORTED_MODULE_5__[\"Status\"](type, life, dist, score, grace); \n\n        return new _non_player__WEBPACK_IMPORTED_MODULE_9__[\"NonPlayer\"](size, position, looks, status);\n    }\n\n    createEnemy() {\n        const config   = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEnemy();\n\n        const width    = config.width;\n        const height   = config.height;\n        const size     = new _size__WEBPACK_IMPORTED_MODULE_2__[\"Size\"](width, height);\n\n        const position = this.getEnemyAppearPos();\n\n        const list     = new _list__WEBPACK_IMPORTED_MODULE_1__[\"List\"]();\n        const normal   = config.look.normal;\n        const dead     = config.look.dead;\n        const looks    = new _looks__WEBPACK_IMPORTED_MODULE_4__[\"Looks\"](list, normal, dead);\n\n        const type     = config.type;\n        const life     = config.life;\n        const score    = config.score;\n        const dist     = config.dist;\n        const grace    = config.grace;\n        const status   = new _status__WEBPACK_IMPORTED_MODULE_5__[\"Status\"](type, life, dist, score, grace);\n\n        return new _non_player__WEBPACK_IMPORTED_MODULE_9__[\"NonPlayer\"](size, position, looks, status);\n    }\n\n    createBoss() {\n        const config   = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigBoss();\n        const fp       = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getFieldProp();\n\n        const width    = config.width;\n        const height   = config.height;\n        const size     = new _size__WEBPACK_IMPORTED_MODULE_2__[\"Size\"](width, height);\n\n        const left     = (fp.w / 2) - (width / 2);\n        const top      = fp.y - height;\n        const position = new _position__WEBPACK_IMPORTED_MODULE_3__[\"Position\"](left, top);\n\n        const list     = new _list__WEBPACK_IMPORTED_MODULE_1__[\"List\"]();\n        const normal   = config.look.normal;\n        const dead     = config.look.dead;\n        const looks    = new _looks__WEBPACK_IMPORTED_MODULE_4__[\"Looks\"](list, normal, dead);\n\n        const type     = config.type;\n        const life     = config.life;\n        const score    = config.score;\n        const dist     = config.dist;\n        const grace    = config.grace;\n        const status   = new _status__WEBPACK_IMPORTED_MODULE_5__[\"Status\"](type, life, dist, score, grace);\n\n        return new _non_player__WEBPACK_IMPORTED_MODULE_9__[\"NonPlayer\"](size, position, looks, status);\n    }\n\n    // enemyの出現位置を取得する\n    getEnemyAppearPos() {\n        const config = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEnemy();\n        const fp     = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getFieldProp();\n        \n        let position = null;\n\n        // Enemyの幅で等分する\n        const max  = fp.w / config.width;\n        const rand = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getRandomInt(0, max);\n\n        const left = rand * config.width;\n        const top  = fp.h * config.top;\n\n        position = new _position__WEBPACK_IMPORTED_MODULE_3__[\"Position\"](left, top);\n\n        return position;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/game-object-factory.js?");

/***/ }),

/***/ "./src/script/model/list.js":
/*!**********************************!*\
  !*** ./src/script/model/list.js ***!
  \**********************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n\n\nclass List {\n    constructor() {\n        this._index = 0;\n        this._list  = new Array();\n    }\n\n    addItem(item) {\n        this._list.push(item);\n    }\n\n    removeItem(item) {\n        this._list = this._list.filter(e => e !== item);\n    }\n\n    getItem() {\n        return this._list[this._index];\n    }\n    \n    getCurrentIndex() {\n        return this._index;\n    }\n\n    getFirstIndex() {\n        return 0;\n    }\n\n    getLastIndex() {\n        return this._list.length;\n    }\n\n    hasNext() {\n        return this._index !== this.getLastIndex();\n    }\n\n    hasPrev() {\n        return this._index !== this.getFirstIndex()\n    }\n    \n    * [Symbol.iterator]() {\n        while(this.hasNext() === true) {\n            const result = this.next();\n            yield result.value;\n        }\n        this._index = 0;\n    }\n\n    next() {\n        const value = this.getItem();\n        this._index++;\n        return {done: false, value: value};\n    }\n\n    prev() {\n        if(!this.hasPrev()) return;\n        this._index--;\n    }\n\n    first() {\n        this._index = this.getFirstIndex();\n    }\n\n    last() {\n        this._index = this.getLastIndex() - 1;\n    }\n\n    toArray() {\n        return this._list;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/list.js?");

/***/ }),

/***/ "./src/script/model/looks.js":
/*!***********************************!*\
  !*** ./src/script/model/looks.js ***!
  \***********************************/
/*! exports provided: Looks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Looks\", function() { return Looks; });\n\n\n// 外見を管理するクラス\nclass Looks {\n    constructor(list, ...items) {\n        this._list = list;\n        items.forEach(e => this.addImage(e));\n    }\n\n    addImage(src) {\n        const image = new Image();\n        image.src = src;\n        image.onload = this._list.addItem(image);\n    }\n\n    getItem() {\n        return this._list.getItem();\n    }\n\n    last() {\n        this._list.last();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/looks.js?");

/***/ }),

/***/ "./src/script/model/manager-factory.js":
/*!*********************************************!*\
  !*** ./src/script/model/manager-factory.js ***!
  \*********************************************/
/*! exports provided: ManagerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ManagerFactory\", function() { return ManagerFactory; });\n/* harmony import */ var _model_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model-manager */ \"./src/script/model/model-manager.js\");\n/* harmony import */ var _game_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-manager */ \"./src/script/model/game-manager.js\");\n/* harmony import */ var _rule_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rule-manager */ \"./src/script/model/rule-manager.js\");\n/* harmony import */ var _area_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./area-manager */ \"./src/script/model/area-manager.js\");\n/* harmony import */ var _character_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./character-manager */ \"./src/script/model/character-manager.js\");\n/* harmony import */ var _state_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state-manager */ \"./src/script/model/state-manager.js\");\n/* harmony import */ var _score_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./score-manager */ \"./src/script/model/score-manager.js\");\n/* harmony import */ var _time_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./time-manager */ \"./src/script/model/time-manager.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list */ \"./src/script/model/list.js\");\n/* harmony import */ var _crash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./crash */ \"./src/script/model/crash.js\");\n/* harmony import */ var _field_out__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./field-out */ \"./src/script/model/field-out.js\");\n\n\n// TODO: tmp\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass ManagerFactory {\n\n    createModelManager(game, area, chara) {\n        return new _model_manager__WEBPACK_IMPORTED_MODULE_0__[\"ModelManager\"](game, area, chara);\n    }\n    \n    createGameMgr(rule, chara, score, time, state) {\n        return new _game_manager__WEBPACK_IMPORTED_MODULE_1__[\"GameManager\"](rule, chara, score, time, state);\n    }\n\n    createRuleMgr(crash, fieldout) {\n        return new _rule_manager__WEBPACK_IMPORTED_MODULE_2__[\"RuleManager\"](crash, fieldout);\n    }\n\n    createAreaMgr(space, field) {\n        return new _area_manager__WEBPACK_IMPORTED_MODULE_3__[\"AreaManager\"](space, field);\n    }\n\n    createCharaMgr(list, factory) {\n        return new _character_manager__WEBPACK_IMPORTED_MODULE_4__[\"CharacterManager\"](list, factory);\n    }\n\n    createStateManager() {\n        return new _state_manager__WEBPACK_IMPORTED_MODULE_5__[\"StateManager\"]();\n    }\n\n    createScoreManager() {\n        return new _score_manager__WEBPACK_IMPORTED_MODULE_6__[\"ScoreManager\"]();\n    }\n\n    createTimeManager() {\n        return new _time_manager__WEBPACK_IMPORTED_MODULE_7__[\"TimeManager\"]();\n    }\n\n    createList() {\n        return new _list__WEBPACK_IMPORTED_MODULE_8__[\"List\"]();\n    }\n\n    createCrash(charList) {\n        return new _crash__WEBPACK_IMPORTED_MODULE_9__[\"Crash\"](charList);\n    }\n\n    createFieldOut(field, charList) {\n        return new _field_out__WEBPACK_IMPORTED_MODULE_10__[\"FieldOut\"](field, charList);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/manager-factory.js?");

/***/ }),

/***/ "./src/script/model/model-manager.js":
/*!*******************************************!*\
  !*** ./src/script/model/model-manager.js ***!
  \*******************************************/
/*! exports provided: ModelManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModelManager\", function() { return ModelManager; });\n\n\nclass ModelManager {\n    constructor(gameMgr, areaMgr, charaMgr) {\n        this._gameMgr  = gameMgr;\n        this._areaMgr  = areaMgr;\n        this._charaMgr = charaMgr;\n    }\n\n    init() {\n        this._gameMgr.init();\n        this._areaMgr.init();\n    }\n\n    start() {\n        this._gameMgr.start();\n    }\n\n    stop() {\n        this._gameMgr.stop();\n    }\n\n    reset() {\n        this._gameMgr.reset();\n    }\n\n    getGameManager() {\n        return this._gameMgr;\n    }\n\n    getAreaManager() {\n        return this._areaMgr;\n    }\n    \n    getCharaManager() {\n        return this._charaMgr;\n    }\n\n    getSpace() {\n        return this._areaMgr.getSpace();\n    }\n\n    getField() {\n        return this._areaMgr.getField();\n    }\n\n    getPlayer() {\n        return this._charaMgr.getPlayer();\n    }\n\n    getCharacterList() {\n        return this._charaMgr.getCharacterList();\n    }\n\n    getScore() {\n        return this._gameMgr.getScore();\n    }\n\n    isPlaying() {\n        return this._gameMgr.isPlaying();\n    }\n\n    isGameClear() {\n        return this._gameMgr.isGameClear()\n    }\n\n    isGameOver() {\n        return this._gameMgr.isGameOver();\n    }\n\n    update() {\n        this._gameMgr.update();\n    }\n\n    resize() {\n        this._areaMgr.resize();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/model-manager.js?");

/***/ }),

/***/ "./src/script/model/non-player.js":
/*!****************************************!*\
  !*** ./src/script/model/non-player.js ***!
  \****************************************/
/*! exports provided: NonPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NonPlayer\", function() { return NonPlayer; });\n/* harmony import */ var _character_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character-base */ \"./src/script/model/character-base.js\");\n\n\n\n\n// NPCクラス\nclass NonPlayer extends _character_base__WEBPACK_IMPORTED_MODULE_0__[\"CharacterBase\"] {\n    constructor(size, position, look, status) {\n        super(size, position, look, status);\n    }\n\n    update() {\n        this.move();\n    }\n\n    move() {\n        const dist = this.getDist();\n        this.position.moveY(dist);\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/non-player.js?");

/***/ }),

/***/ "./src/script/model/player.js":
/*!************************************!*\
  !*** ./src/script/model/player.js ***!
  \************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var _character_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character-base */ \"./src/script/model/character-base.js\");\n\n\n\n\n// プレイヤークラス\nclass Player extends _character_base__WEBPACK_IMPORTED_MODULE_0__[\"CharacterBase\"] {\n    constructor(size, position, look, status, mgr) {\n        super(size, position, look, status);\n        this._mgr = mgr;\n    }\n\n    // 何もしない\n    update() {\n        // orverride none;\n    }\n\n    shoot() {\n        this._mgr.addBullet(this);\n    }\n\n    moveLeft() {\n        const dist = this.getDist() * - 1;\n        this.position.moveX(dist);\n    }\n\n    moveRight() {\n        const dist = this.getDist();\n        this.position.moveX(dist);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/player.js?");

/***/ }),

/***/ "./src/script/model/position.js":
/*!**************************************!*\
  !*** ./src/script/model/position.js ***!
  \**************************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Position\", function() { return Position; });\n\n\n// ポジションを管理するクラス\nclass Position {\n    constructor(x, y) {\n        this._x = x;\n        this._y = y;\n    }\n\n    set x(x) {\n        this._x = x;\n    }\n    \n    get x() {\n        return this._x;\n    }\n\n    set y(y) {\n        this._y = y\n    }\n\n    get y() {\n        return this._y;\n    }\n    \n    moveX(x) {\n        this._x = this._x + x;\n    }\n\n    moveY(y) {\n        this._y = this._y + y;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/position.js?");

/***/ }),

/***/ "./src/script/model/rule-manager.js":
/*!******************************************!*\
  !*** ./src/script/model/rule-manager.js ***!
  \******************************************/
/*! exports provided: RuleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RuleManager\", function() { return RuleManager; });\n\n\nclass RuleManager {\n    constructor(mCrashMgr, mFieldMgr) {\n        this.mCrashMgr = mCrashMgr\n        this.mFieldMgr = mFieldMgr\n    }\n\n    update() {\n        this.mCrashMgr.update();\n        this.mFieldMgr.update();\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/rule-manager.js?");

/***/ }),

/***/ "./src/script/model/score-manager.js":
/*!*******************************************!*\
  !*** ./src/script/model/score-manager.js ***!
  \*******************************************/
/*! exports provided: ScoreManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScoreManager\", function() { return ScoreManager; });\n\n\n// スコアを管理するクラス\nclass ScoreManager {\n    constructor() {\n        this._score = 0;\n    }\n\n    changeScore(score) {\n        this._score += score;\n    }\n\n    get score() {\n        return this._score;\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/score-manager.js?");

/***/ }),

/***/ "./src/script/model/size.js":
/*!**********************************!*\
  !*** ./src/script/model/size.js ***!
  \**********************************/
/*! exports provided: Size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Size\", function() { return Size; });\n\n\n// ゲームのフィールドクラス\nclass Size {\n    constructor(width, height) {\n        this._width  = width;\n        this._height = height;\n    }\n\n    set width(w) {\n        this._width = w;\n    }\n\n    get width() {\n        return this._width;\n    }\n\n    set height(h) {\n        this._height = h;\n    }\n\n    get height() {\n        return this._height;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/size.js?");

/***/ }),

/***/ "./src/script/model/space.js":
/*!***********************************!*\
  !*** ./src/script/model/space.js ***!
  \***********************************/
/*! exports provided: Space */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Space\", function() { return Space; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _game_object_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-object-base */ \"./src/script/model/game-object-base.js\");\n\n\n\n\n\n// 背景のModelクラス\nclass Space extends _game_object_base__WEBPACK_IMPORTED_MODULE_1__[\"GameObjectBase\"] {\n    constructor(size, position) {\n        super(size, position);\n    }\n\n    init() {\n        const prop = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getSpaceProp();\n        this.setWidth(prop.w);\n        this.setHeight(prop.h);\n    }\n\n    resize() {\n        this.init();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/space.js?");

/***/ }),

/***/ "./src/script/model/state-manager.js":
/*!*******************************************!*\
  !*** ./src/script/model/state-manager.js ***!
  \*******************************************/
/*! exports provided: StateManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StateManager\", function() { return StateManager; });\n\n\n// ゲームの状態を管理するクラス\nclass StateManager {\n    constructor() {\n        this._state = false;\n    }\n\n    getState() {\n        return this._state;\n    }\n\n    start() {\n        this._state = true;\n    }\n\n    stop() {\n        this._state = false;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/state-manager.js?");

/***/ }),

/***/ "./src/script/model/status.js":
/*!************************************!*\
  !*** ./src/script/model/status.js ***!
  \************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Status\", function() { return Status; });\n\n\n// ステータス管理クラス\nclass Status {\n    constructor(type, life, dist, score, grace) {\n        this._type  = type;\n        this._life  = life;\n        this._dist  = dist;\n        this._score = score;\n        this._grace = grace;\n    }\n\n    get type() {\n        return this._type;\n    }\n    \n    get life() {\n        return this._life;\n    }\n\n    get dist() {\n        return this._dist;\n    }\n\n    get score() {\n        return this._score;\n    }\n\n    get grace() {\n        return this._grace;\n    }\n\n    hit() {\n        this._life--;\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/status.js?");

/***/ }),

/***/ "./src/script/model/time-manager.js":
/*!******************************************!*\
  !*** ./src/script/model/time-manager.js ***!
  \******************************************/
/*! exports provided: TimeManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TimeManager\", function() { return TimeManager; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n\n\n\n\nclass TimeManager {\n    constructor() {\n        this.preAppearTime = Date.now();\n    }\n\n    isAppearTime() {\n        const now      = Date.now();\n        const config   = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getConfigEnemy();\n        if(now - this.preAppearTime < config.interval) return false;\n\n        this.preAppearTime = now;\n        return true;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/time-manager.js?");

/***/ }),

/***/ "./src/script/util/utility.js":
/*!************************************!*\
  !*** ./src/script/util/utility.js ***!
  \************************************/
/*! exports provided: Utility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Utility\", function() { return Utility; });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./src/script/config/config.js\");\n\n\n\n\n// ユーティリティクラス\nclass Utility {\n    // min以上、max未満の整数を取得する\n    static getRandomInt(min, max) {\n        min = Math.ceil(min);\n        max = Math.floor(max);\n        return Math.floor(Math.random() * (max - min)) + min;\n    }\n\n    static getSpaceProp() {\n        const w = window.innerWidth;\n        const h = window.innerHeight;\n        const x = 0;\n        const y = 0;\n    \n        return {w: w, h: h, x: x, y: y};\n    }\n\n    static getFieldProp() {\n        const w = _config_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].field.width;\n        const h = window.innerHeight;\n        const x = (window.innerWidth / 2) - (w / 2);\n        const y = 0;\n     \n        return {w: w, h: h, x: x, y: y};\n    }\n\n    static getRootDom() {\n        return document.getElementById(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].domId.root);\n    }\n\n    static getConfigPlayer() {\n        return _config_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player;\n    }\n\n    static getConfigBullet() {\n        return _config_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet;\n    }\n\n    static getConfigEnemy() {\n        return _config_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy;\n    }\n\n    static getConfigBoss() {\n        return _config_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss;\n    }\n    \n    static getConfigPlayerType() {\n        return _config_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.type;\n    }\n\n    static getConfigBossType() {\n        return _config_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.type;\n    }\n\n    static getConfigEventType() {\n        return _config_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].event.type;\n    }\n\n    static getConfigGameState() {\n        return _config_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.state;\n    }\n\n    static getConfigSwipeDist() {\n        return _config_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].event.swipe.dist;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/util/utility.js?");

/***/ }),

/***/ "./src/script/view/field-view.js":
/*!***************************************!*\
  !*** ./src/script/view/field-view.js ***!
  \***************************************/
/*! exports provided: FieldView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FieldView\", function() { return FieldView; });\n/* harmony import */ var _view_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-base */ \"./src/script/view/view-base.js\");\n\n\n\n\n// ゲームのフィールドクラス\nclass FieldView extends _view_base__WEBPACK_IMPORTED_MODULE_0__[\"ViewBase\"] {\n    constructor(model) {\n        super();\n        this._model   = model;\n        this._canvas  = document.querySelector('#js-field');\n        this._context = this._canvas.getContext('2d');\n    }\n\n    size() {\n        const field  = this._model.getField(); \n        const width  = field.getWidth();\n        const height = field.getHeight();\n        this._canvas.setAttribute('width',`${width}`);\n        this._canvas.setAttribute('height', `${height}`);\n    }\n\n    position() {\n        const field = this._model.getField(); \n        const top   = field.getTop();\n        const left  = field.getLeft();\n        this._canvas.style.position = 'absolute';\n        this._canvas.style.top = `${top}px`;\n        this._canvas.style.left = `${left}px`;\n    }\n\n    draw() {\n        const charaList = this._model.getCharacterList();\n        \n        let image  = null;\n        let left   = null;\n        let top    = null;\n        let width  = null;\n        let height = null;\n\n        for(let e of charaList) {\n            image  = e.getLook();\n            left   = e.getLeft();\n            top    = e.getTop();\n            width  = e.getWidth();\n            height = e.getHeight();\n            \n            this._context.drawImage(image, left, top, width, height);\n        }\n    }\n\n    erase() {\n        const field  = this._model.getField(); \n        const width  = field.getWidth();\n        const height = field.getHeight();\n        this._context.clearRect(0, 0, width, height);\n    }\n\n    update() {\n        this.erase();\n        this.draw();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/view/field-view.js?");

/***/ }),

/***/ "./src/script/view/space-view.js":
/*!***************************************!*\
  !*** ./src/script/view/space-view.js ***!
  \***************************************/
/*! exports provided: SpaceView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpaceView\", function() { return SpaceView; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _view_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-base */ \"./src/script/view/view-base.js\");\n\n\n\n\n\n// 背景クラス\nclass SpaceView extends _view_base__WEBPACK_IMPORTED_MODULE_1__[\"ViewBase\"] {\n    constructor(model) {\n        super();\n        this._model   = model;\n        this._canvas  = document.querySelector('#js-space');\n        this._context = this._canvas.getContext('2d');\n    }\n\n    size() {\n        const space  = this._model.getSpace(); \n        const width  = space.getWidth();\n        const height = space.getHeight();\n        this._canvas.setAttribute('width',`${width}`);\n        this._canvas.setAttribute('height', `${height}`);\n    }\n\n    position() {\n        const space = this._model.getSpace(); \n        const top   = space.getTop();\n        const left  = space.getLeft();\n        this._canvas.style.position = 'absolute';\n        this._canvas.style.top = `${top}px`;\n        this._canvas.style.left = `${left}px`;\n    }\n\n    draw() {\n        const space = this._model.getSpace(); \n        const width   = space.getWidth();\n        const height  = space.getHeight();\n        const context = this._context;\n\n        context.fillStyle = '#425A69';\n        context.fillRect(0, 0, width, height);\n\n        context.fillStyle = '#FFFFFF';\n        for(let i = 0; i < 1000; i++) {\n            let x = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getRandomInt(0, width);\n            let y = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].getRandomInt(0, height);\n            context.fillRect(x, y, 1, 1);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/view/space-view.js?");

/***/ }),

/***/ "./src/script/view/view-base.js":
/*!**************************************!*\
  !*** ./src/script/view/view-base.js ***!
  \**************************************/
/*! exports provided: ViewBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViewBase\", function() { return ViewBase; });\n'usestrict'\n\n// ゲームのフィールドクラス\nclass ViewBase {\n    constructor() {\n        this._canvas  = null;\n        this._context = null;\n    }\n\n    init() {\n        this.style();\n        this.draw();\n    }\n\n    resize() {\n        this.init();\n    }\n    \n    style() {\n        this.size();\n        this.position();\n    }\n\n    size() {\n        new Error();\n    }\n\n    position() {\n        new Error();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/view/view-base.js?");

/***/ }),

/***/ "./src/script/view/view-factory.js":
/*!*****************************************!*\
  !*** ./src/script/view/view-factory.js ***!
  \*****************************************/
/*! exports provided: ViewFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViewFactory\", function() { return ViewFactory; });\n/* harmony import */ var _view_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-manager */ \"./src/script/view/view-manager.js\");\n/* harmony import */ var _space_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./space-view */ \"./src/script/view/space-view.js\");\n/* harmony import */ var _field_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-view */ \"./src/script/view/field-view.js\");\n\n\n\n\n\n\nclass ViewFactory {\n    createManager(vSpace, vField) {\n        return new _view_manager__WEBPACK_IMPORTED_MODULE_0__[\"ViewManager\"](vSpace, vField);\n    }\n\n    createSpace(model) {\n        return new _space_view__WEBPACK_IMPORTED_MODULE_1__[\"SpaceView\"](model);\n    }\n\n    createField(field, list) {\n        return new _field_view__WEBPACK_IMPORTED_MODULE_2__[\"FieldView\"](field, list);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/view/view-factory.js?");

/***/ }),

/***/ "./src/script/view/view-manager.js":
/*!*****************************************!*\
  !*** ./src/script/view/view-manager.js ***!
  \*****************************************/
/*! exports provided: ViewManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViewManager\", function() { return ViewManager; });\n\n\n// Viewの管理クラス\nclass ViewManager {\n    constructor(space, field) {\n        this.space = space;\n        this.field = field;\n    }\n\n    getSpace() {\n        return this.space;\n    }\n\n    getField() {\n        return this.field;\n    }\n\n    init() {\n        this.space.init();\n        this.field.init();\n    }\n\n    resize() {\n        this.space.resize();\n        this.field.resize();\n    }\n\n    update(list) {\n        this.field.update(list);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/view/view-manager.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../node_modules/sass-loader/dist/cjs.js??ref--4-2!./index.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style/index.scss?");

/***/ })

/******/ });