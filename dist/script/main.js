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

/***/ "./src/script/config.js":
/*!******************************!*\
  !*** ./src/script/config.js ***!
  \******************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n\n\n// ゲームセッティング\nconst config = {\n    message:{\n        abscall: 'abstract fanction called'\n    },\n\n    time: {\n        enemy: 3000,\n    },\n\n    game: {\n        status: {\n            default: 'default',\n            playing: 'playing',\n            gameclear: 'gameclear',\n            gameover:  'gameover',\n        },\n    },\n\n    dom: {\n        button: {\n            id: {\n                start: 'js-start-btn',\n                stop:  'js-stop-btn',\n                reset: 'js-reset-btn',\n            },\n        },\n        message: {\n            id: {\n                gameclear: 'js-gameclear',\n                gameover: 'js-gameover',\n            },\n        },\n        canvas: {\n            id: {\n                space: 'js-space',\n                field: 'js-field',\n            }\n        },\n    },\n\n    event: {\n        swipe: {\n            dist: 50,\n        }\n    },\n\n    field: {\n        width: 250,\n        top: 0,\n    },\n\n    player: {\n        type: 'player',\n        width: 50,\n        height: 50,\n        life: 1,\n        score: -100,\n        dist: 50,\n        grace: 200,\n        look: {\n            normal: './img/player.svg',\n            dead: './img/explosion.svg'\n        },\n        top: 0.9,\n    },\n\n    bullet: {\n        type: 'bullet',\n        width: 5,\n        height: 10,\n        life: 1,\n        score: 0,\n        dist: -5,\n        grace: 0,\n        look: {\n            normal: './img/bullet.svg',\n        },\n    },\n    \n    enemy: {\n        type: 'enemy',\n        width: 50,\n        height: 50,\n        life: 1,\n        score: 1,\n        dist: 0.5,\n        grace: 200,\n        look: {\n            normal: './img/enemy.svg',\n            dead: './img/explosion.svg'\n        },\n        top: 0.1,\n    },\n    \n    boss: {\n        type: 'boss',\n        width: 250,\n        height: 250,\n        life: 50,\n        score: 100,\n        dist: 0.5,\n        grace: 200,\n        look: {\n            normal: './img/boss.svg',\n            dead: './img/explosion.svg'\n        },\n    }\n};\n\n//# sourceURL=webpack:///./src/script/config.js?");

/***/ }),

/***/ "./src/script/controler/c_base.js":
/*!****************************************!*\
  !*** ./src/script/controler/c_base.js ***!
  \****************************************/
/*! exports provided: C_Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"C_Base\", function() { return C_Base; });\n\n\nclass C_Base {\n    run(event) {\n        throw new Error('abstract method is called');\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/script/controler/c_base.js?");

/***/ }),

/***/ "./src/script/controler/c_manager.js":
/*!*******************************************!*\
  !*** ./src/script/controler/c_manager.js ***!
  \*******************************************/
/*! exports provided: C_Manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"C_Manager\", function() { return C_Manager; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n\n\n\n\n// Controlerクラス\nclass C_Manager {\n    constructor(model, view, event) {\n        this.model     = model;\n        this.view      = view;\n        this.event     = event;\n    }\n\n    init() {\n        this.model.init();\n        this.view.init();\n        this.event.init();\n    }\n    \n    resize() {\n        const collection = this.model.getCollection();\n        this.view.resize(collection);\n        this.model.resize();\n    }\n\n    start() {\n        this.model.gameStart();\n        this.controlDom();\n        this.update();\n    }\n\n    reset() {\n        location.reload();\n    }\n\n    stop() {\n        this.model.gameStop();\n        this.controlDom();\n        cancelAnimationFrame(this.requestID);\n    }\n\n    finish() {\n        this.controlDom();\n        cancelAnimationFrame(this.requestID);\n    }\n\n    controlDom() {\n        const status = this.model.getStatus();\n        _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].controlDom(status);\n    }\n\n    update() {\n        // stopボタンは別メソッドがあるため考慮しない\n        if(this.model.isPlaying() === false) return this.finish();\n\n        this.model.update();\n\n        const collection = this.model.getCollection();\n        this.view.update(collection);\n        \n        this.requestID = requestAnimationFrame(this.update.bind(this));\n    }\n    \n}\n\n\n//# sourceURL=webpack:///./src/script/controler/c_manager.js?");

/***/ }),

/***/ "./src/script/controler/c_player.js":
/*!******************************************!*\
  !*** ./src/script/controler/c_player.js ***!
  \******************************************/
/*! exports provided: C_Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"C_Player\", function() { return C_Player; });\n/* harmony import */ var _c_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c_base */ \"./src/script/controler/c_base.js\");\n\n\n\n\nclass C_Player extends _c_base__WEBPACK_IMPORTED_MODULE_0__[\"C_Base\"] {\n    constructor(model) {\n        super();\n        this.model = model;\n    }\n\n    run(event) {\n        if(event.getEventName() === 'left')  return this.moveLeft();\n        if(event.getEventName() === 'right') return this.moveRight();\n        if(event.getEventName() === 'shoot') return this.shoot();\n    }\n\n    moveLeft(){\n        const player = this.model.getPlayer();\n        const min = 0;\n        if(player.getLeft() <= min) return;\n\n        player.moveLeft();\n    }\n\n    moveRight(){\n        const field = this.model.getField();\n        const player = this.model.getPlayer();\n        const max = field.getWidth() - player.getWidth();\n        if(player.getLeft() >= max) return;\n\n        player.moveRight();\n    }\n\n    shoot(){\n        // TODO: 本当はPlayerにもたせたい\n        this.model.addBullet();\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/script/controler/c_player.js?");

/***/ }),

/***/ "./src/script/event/e_base.js":
/*!************************************!*\
  !*** ./src/script/event/e_base.js ***!
  \************************************/
/*! exports provided: E_Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"E_Base\", function() { return E_Base; });\n\n\nclass E_Base {\n    constructor() {\n        this.controllers = new Array();\n        this.eventName  = '';\n    }\n\n    addController(controller) {\n        this.controllers.push(controller);\n    }\n\n    deleteController(controller) {\n        this.controllers.remove(controller)\n    }\n\n    setEventName(en) {\n        this.eventName = en;\n    }\n\n    getEventName() {\n        return this.eventName;\n    }\n\n    notify() {\n        this.controllers.forEach(e => e.run(this));\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/event/e_base.js?");

/***/ }),

/***/ "./src/script/event/e_keydown.js":
/*!***************************************!*\
  !*** ./src/script/event/e_keydown.js ***!
  \***************************************/
/*! exports provided: E_Keydown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"E_Keydown\", function() { return E_Keydown; });\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _e_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e_base */ \"./src/script/event/e_base.js\");\n\n\n\n\n\nclass E_Keydown extends _e_base__WEBPACK_IMPORTED_MODULE_1__[\"E_Base\"] {\n    constructor() {\n        super();\n        this.disable = false;\n    }\n\n    init() {\n        window.addEventListener('keydown', this.keydown.bind(this), false);\n        window.addEventListener('keyup', this.keyup.bind(this), false);\n    }\n    \n    keydown(e) {\n        // キーボード長押しを禁止する\n        if(this.disable === true) return;\n\n        this.disable = true;\n\n        const val = _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"].convertKeyCodeToMeaningStr(e.keyCode);\n        \n        if(val === null)    this.setEventName('default');\n        if(val === 'space') this.setEventName('shoot');\n        if(val === 'left')  this.setEventName('left');\n        if(val === 'right') this.setEventName('right');\n\n        this.notify();\n    }\n    \n    keyup() {\n        this.disable = false;\n    }\n}\n\n//# sourceURL=webpack:///./src/script/event/e_keydown.js?");

/***/ }),

/***/ "./src/script/event/e_manager.js":
/*!***************************************!*\
  !*** ./src/script/event/e_manager.js ***!
  \***************************************/
/*! exports provided: E_Manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"E_Manager\", function() { return E_Manager; });\n\n\nclass E_Manager {\n    constructor(eKeydown, eSwipe, eTouch) {\n        this.eKeydown  = eKeydown;\n        this.eSwipe    = eSwipe;\n        this.eTouch    = eTouch;\n    }\n\n    init() {\n        this.eKeydown.init();\n        this.eSwipe.init();\n        this.eTouch.init();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/event/e_manager.js?");

/***/ }),

/***/ "./src/script/event/e_swipe.js":
/*!*************************************!*\
  !*** ./src/script/event/e_swipe.js ***!
  \*************************************/
/*! exports provided: E_Swipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"E_Swipe\", function() { return E_Swipe; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n/* harmony import */ var _e_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e_base */ \"./src/script/event/e_base.js\");\n\n\n\n\n\n// スワイプイベントクラス\nclass E_Swipe extends _e_base__WEBPACK_IMPORTED_MODULE_1__[\"E_Base\"] {\n    constructor() {\n        super();\n        this.startX = 0;\n        this.endX   = 0;\n    }\n\n    init() {\n        window.addEventListener('touchstart', this.touchStart.bind(this), {passive: false});\n        window.addEventListener('touchmove', this.touchMove.bind(this), {passive: false});\n        window.addEventListener('touchend', this.touchEnd.bind(this), false);\n    }\n\n    touchStart(event) {\n        event.preventDefault();\n        this.startX = event.touches[0].pageX;\n        // 前回の座標が残ってるとタッチ時に移動してしまうことがある\n        this.endX   = event.touches[0].pageX;\n    }\n\n    touchMove(event) {\n        event.preventDefault();\n        this.endX = event.changedTouches[0].pageX;\n    }\n\n    touchEnd() {\n        if (this.startX > this.endX) return this.moveLeft();\n        if (this.startX < this.endX) return this.moveRight();\n    }\n\n    moveLeft() {\n        if ((this.startX - this.endX) < _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].event.swipe.dist) return;\n        this.setEventName('left');\n        this.notify();\n    }\n\n    moveRight() {\n        if((this.endX - this.startX) < _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].event.swipe.dist) return;\n        this.setEventName('right');\n        this.notify();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/event/e_swipe.js?");

/***/ }),

/***/ "./src/script/event/e_touch.js":
/*!*************************************!*\
  !*** ./src/script/event/e_touch.js ***!
  \*************************************/
/*! exports provided: E_Touch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"E_Touch\", function() { return E_Touch; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n/* harmony import */ var _e_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e_base */ \"./src/script/event/e_base.js\");\n\n\n\n\n\n// タッチイベントクラス\nclass E_Touch extends _e_base__WEBPACK_IMPORTED_MODULE_1__[\"E_Base\"] {\n    constructor() {\n        super();\n        this.startX = 0;\n        this.endX   = 0\n    }\n\n    init() {\n        window.addEventListener(\"touchstart\", this.touchStart.bind(this), {passive: false});\n        window.addEventListener(\"touchmove\", this.touchMove.bind(this), {passive: false});\n        window.addEventListener(\"touchend\", this.touchEnd.bind(this), {passive: false});\n    }\n\n    touchStart(event) {\n        event.preventDefault();\n        this.startX = event.touches[0].pageX;\n        // 前回の座標が残ってるとタッチ時が反応しなくなることがある\n        this.endX   = event.touches[0].pageX;\n    }\n\n    touchMove(event) {\n        event.preventDefault();\n        this.endX = event.changedTouches[0].pageX;\n    }\n\n    touchEnd() {\n        if(Math.abs(this.endX - this.startX) >= _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].event.swipe.dist) return;\n        this.shoot();\n    }\n\n    shoot() {\n        this.setEventName('shoot');\n        this.notify();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/event/e_touch.js?");

/***/ }),

/***/ "./src/script/main.js":
/*!****************************!*\
  !*** ./src/script/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_m_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/m_factory */ \"./src/script/model/m_factory.js\");\n/* harmony import */ var _model_m_fieldout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/m_fieldout */ \"./src/script/model/m_fieldout.js\");\n/* harmony import */ var _model_m_crash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/m_crash */ \"./src/script/model/m_crash.js\");\n/* harmony import */ var _model_m_rule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/m_rule */ \"./src/script/model/m_rule.js\");\n/* harmony import */ var _model_m_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/m_manager */ \"./src/script/model/m_manager.js\");\n/* harmony import */ var _view_v_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/v_field */ \"./src/script/view/v_field.js\");\n/* harmony import */ var _view_v_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/v_space */ \"./src/script/view/v_space.js\");\n/* harmony import */ var _view_v_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/v_manager */ \"./src/script/view/v_manager.js\");\n/* harmony import */ var _event_e_keydown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event/e_keydown */ \"./src/script/event/e_keydown.js\");\n/* harmony import */ var _event_e_swipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event/e_swipe */ \"./src/script/event/e_swipe.js\");\n/* harmony import */ var _event_e_touch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event/e_touch */ \"./src/script/event/e_touch.js\");\n/* harmony import */ var _event_e_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event/e_manager */ \"./src/script/event/e_manager.js\");\n/* harmony import */ var _controler_c_player__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controler/c_player */ \"./src/script/controler/c_player.js\");\n/* harmony import */ var _controler_c_manager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controler/c_manager */ \"./src/script/controler/c_manager.js\");\n\n\n// TODO: リネーム\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction main() {\n    const mFactory  = new _model_m_factory__WEBPACK_IMPORTED_MODULE_0__[\"M_Factory\"]();\n    const mSpace    = mFactory.createSpace();\n    const mField    = mFactory.createField();\n    const mCharList = mFactory.createCharacterList();\n\n    const mCrash    = new _model_m_crash__WEBPACK_IMPORTED_MODULE_2__[\"M_Crash\"](mCharList);\n    const mFieldOut = new _model_m_fieldout__WEBPACK_IMPORTED_MODULE_1__[\"M_FieldOut\"](mField, mCharList);\n    const mRule     = new _model_m_rule__WEBPACK_IMPORTED_MODULE_3__[\"M_Rule\"]();\n    mRule.addRule(mCrash);\n    mRule.addRule(mFieldOut);\n    \n    const mManager  = new _model_m_manager__WEBPACK_IMPORTED_MODULE_4__[\"M_Manager\"](mFactory, mSpace, mField, mRule, mCharList);\n\n    const vSpace    = new _view_v_space__WEBPACK_IMPORTED_MODULE_6__[\"V_Space\"](mSpace);\n    const vField    = new _view_v_field__WEBPACK_IMPORTED_MODULE_5__[\"V_Field\"](mField);\n    const vManager  = new _view_v_manager__WEBPACK_IMPORTED_MODULE_7__[\"V_Manager\"](vSpace, vField);\n\n    const eKeydown  = new _event_e_keydown__WEBPACK_IMPORTED_MODULE_8__[\"E_Keydown\"]();\n    const eSwipe    = new _event_e_swipe__WEBPACK_IMPORTED_MODULE_9__[\"E_Swipe\"]();\n    const eTouch    = new _event_e_touch__WEBPACK_IMPORTED_MODULE_10__[\"E_Touch\"]();\n    const eManager  = new _event_e_manager__WEBPACK_IMPORTED_MODULE_11__[\"E_Manager\"](eKeydown, eSwipe, eTouch);\n\n    const cPlayer   = new _controler_c_player__WEBPACK_IMPORTED_MODULE_12__[\"C_Player\"](mManager);\n    eKeydown.addController(cPlayer);\n    eSwipe.addController(cPlayer);\n    eTouch.addController(cPlayer);\n    \n    const cManager  = new _controler_c_manager__WEBPACK_IMPORTED_MODULE_13__[\"C_Manager\"](mManager, vManager, eManager);\n\n    const domStrBtn = document.querySelector('#js-start-btn');\n    const domStpBtn = document.querySelector('#js-stop-btn');\n    const domRstBtn = document.querySelector('#js-reset-btn');\n    domStrBtn.addEventListener('click', cManager.start.bind(cManager));\n    domStpBtn.addEventListener('click', cManager.stop.bind(cManager));\n    domRstBtn.addEventListener('click', cManager.reset.bind(cManager));\n    domStrBtn.addEventListener('touchstart', cManager.start.bind(cManager));\n    domStpBtn.addEventListener('touchstart', cManager.stop.bind(cManager));\n    domRstBtn.addEventListener('touchstart', cManager.reset.bind(cManager));\n\n    window.addEventListener('load',   () => cManager.init());\n    window.addEventListener('resize', () => cManager.resize());\n}\n\nmain();\n\n//# sourceURL=webpack:///./src/script/main.js?");

/***/ }),

/***/ "./src/script/model/e_enemy.js":
/*!*************************************!*\
  !*** ./src/script/model/e_enemy.js ***!
  \*************************************/
/*! exports provided: M_EnemyTimer, M_Score */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_EnemyTimer\", function() { return M_EnemyTimer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Score\", function() { return M_Score; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n\n\n\n\n// Enemyタイマークラス\nclass M_EnemyTimer {\n    constructor() {\n        this.preApperTime = Date.now();\n    }\n\n    update() {\n        const now = Date.now();\n        if(now - this.preApperTime < _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].time.enemy) return false;\n\n        this.preApperTime = now;\n        return true;\n    }\n}\n\nclass M_Score {\n    constructor() {\n        this.score = 0;\n    }\n\n    changeScore(score) {\n        this.score += score;\n    }\n\n    getScore() {\n        return this.score;\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/e_enemy.js?");

/***/ }),

/***/ "./src/script/model/m_base.js":
/*!************************************!*\
  !*** ./src/script/model/m_base.js ***!
  \************************************/
/*! exports provided: M_Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Base\", function() { return M_Base; });\n\n\n// ゲームオブジェクトのベースクラス\nclass M_Base {\n    constructor(size, position) {\n        this.size      = size;\n        this.position  = position;\n    }\n\n    setWidth(w) {\n        this.size.setWidth(w);\n    }\n\n    getWidth() {\n        return this.size.getWidth();\n    }\n\n    setHeight(h) {\n        this.size.setHeight(h);\n    }\n\n    getHeight() {\n        return this.size.getHeight();\n    }\n\n    setLeft(x) {\n        this.position.setX(x);\n    }\n\n    getLeft() {\n        return this.position.getX();\n    }\n\n    setTop(y) {\n        this.position.setY(y);\n    }\n\n    getTop() {\n        return this.position.getY();\n    }\n\n    move(x, y) {\n        this.position.moveX(x);\n        this.position.moveY(y)\n    }\n\n    update() {\n        throw new Error();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_base.js?");

/***/ }),

/***/ "./src/script/model/m_bullet.js":
/*!**************************************!*\
  !*** ./src/script/model/m_bullet.js ***!
  \**************************************/
/*! exports provided: M_Bullet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Bullet\", function() { return M_Bullet; });\n/* harmony import */ var _m_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m_character */ \"./src/script/model/m_character.js\");\n\n\n\n\nclass M_Bullet extends _m_character__WEBPACK_IMPORTED_MODULE_0__[\"M_NonPlayer\"] {\n    constructor(size, position, look, status) {\n        super(size, position, look, status);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_bullet.js?");

/***/ }),

/***/ "./src/script/model/m_character.js":
/*!*****************************************!*\
  !*** ./src/script/model/m_character.js ***!
  \*****************************************/
/*! exports provided: M_Character, M_NonPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Character\", function() { return M_Character; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_NonPlayer\", function() { return M_NonPlayer; });\n/* harmony import */ var _m_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m_base */ \"./src/script/model/m_base.js\");\n\n\n\n\nclass M_Character extends _m_base__WEBPACK_IMPORTED_MODULE_0__[\"M_Base\"] {\n    constructor(size, position, look, status, field) {\n        super(size, position)\n        this.look      = look;\n        this.status    = status;\n        this.field     = field;\n        this.isDispose = false;\n    }\n\n    getLook() {\n        return this.look.getItem();\n    }\n\n    getType() {\n        return this.status.getType();\n    }\n\n    getDist() {\n        return this.status.getDist();\n    }\n\n    getScore() {\n        return this.status.getScore();\n    }\n\n    getGrace() {\n        return this.status.getGrace();\n    }\n\n    isDead() {\n        return this.status.isDead();\n    }\n\n    isDisposeTarget() {\n        return this.isDispose;\n    }\n\n    update() {\n        throw new Error();\n    }\n\n    hit() {\n        this.status.hit();\n        if(this.isDead()) this.dead();\n    }\n\n    // ライフが0になった後も処理したいためここではdisposeしない\n    dead() {\n        this.look.last();\n        const time = this.getGrace();\n        setTimeout(this.makeDisposeTarget.bind(this), time);\n    }\n\n    makeDisposeTarget() {\n        this.isDispose = true;\n    }\n\n    dispose() {\n        return this.status.getScore();\n    }\n}\n\n// NPCクラス\nclass M_NonPlayer extends M_Character {\n    constructor(size, position, look, status) {\n        super(size, position, look, status);\n    }\n\n    update() {\n        this.move();\n    }\n\n    move() {\n        const dist = this.getDist();\n        this.position.moveY(dist);\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/m_character.js?");

/***/ }),

/***/ "./src/script/model/m_character_List.js":
/*!**********************************************!*\
  !*** ./src/script/model/m_character_List.js ***!
  \**********************************************/
/*! exports provided: M_CharacterList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_CharacterList\", function() { return M_CharacterList; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n\n\n\n\nclass  M_CharacterList {\n    constructor() {\n        this.characterList = new Array();\n    }\n\n    addCharacter(chara) {\n        this.characterList.push(chara);\n    }\n\n    removeCharacter(chara) {\n        this.characterList = this.characterList.filter(e => e !== chara);\n    }\n\n    getPlayer() {\n        return this.characterList.find(e => e.getType() === _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.type);\n    }\n\n    getBoss() {\n        return this.characterList.find(e => e.getType() === _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.type);\n    }\n\n    getCharacterList() {\n        return this.characterList;\n    }\n\n    update() {\n        this.characterList.forEach(e => e.update());\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/m_character_List.js?");

/***/ }),

/***/ "./src/script/model/m_crash.js":
/*!*************************************!*\
  !*** ./src/script/model/m_crash.js ***!
  \*************************************/
/*! exports provided: M_Crash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Crash\", function() { return M_Crash; });\n\n\nclass M_Crash {\n    constructor(list) {\n        this.characterList = list;\n    }\n\n    update() {\n        const origin = this.characterList.getCharacterList();\n        const filtered = origin.filter(e => this.isCrash(e))\n        this.crash(filtered);\n    }\n    \n    // TODO: もっといいアルゴリズムを考える\n    isCrash(e) {\n        const t1 = e;\n\n        // オブジェクトの中点を取得する\n        const p1 = this.getObjectPositionOfCenter(t1);\n        \n        // オブジェクトの中点からの大きさを取得する\n        const s1 = this.getObjectSizeFromCenter(t1);\n\n        let result = false;\n\n        const array = this.characterList.getCharacterList()\n        let p2, s2, checkX, checkY;\n\n        for(let t2 of array) {\n            // 同じオブジェクト同士は判定しない\n            if(t1 === t2) continue;\n\n            // オブジェクトの中点を取得する\n            p2 = this.getObjectPositionOfCenter(t2);\n\n            // オブジェクトの中点からの大きさを取得する\n            s2 = this.getObjectSizeFromCenter(t2);\n            \n            // X軸の重なりを判定\n            checkX = Math.abs(p1.x - p2.x) < s1.w + s2.w;\n            \n            // Y軸の重なりを判定\n            checkY = Math.abs(p1.y - p2.y) < s1.h + s2.h;\n            \n            // 両方の値がtrueなら衝突している\n            result = checkX === true && checkY === true;\n\n            if(result === true) break;\n        }\n\n        return result;\n    }\n\n    getObjectPositionOfCenter(object) {\n        const x = object.getLeft() + object.getWidth() / 2;\n        const y = object.getTop() + object.getHeight() / 2;\n\n        return {x: x, y: y};\n    }\n\n    getObjectSizeFromCenter(object) {\n        const w = object.getWidth() / 2;\n        const h = object.getHeight() / 2;\n        \n        return {w: w, h: h};\n    }\n\n    crash(array) {\n        array.forEach(e => e.hit());\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_crash.js?");

/***/ }),

/***/ "./src/script/model/m_enemy.js":
/*!*************************************!*\
  !*** ./src/script/model/m_enemy.js ***!
  \*************************************/
/*! exports provided: M_Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Enemy\", function() { return M_Enemy; });\n/* harmony import */ var _m_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m_character */ \"./src/script/model/m_character.js\");\n\n\n\n\nclass M_Enemy extends _m_character__WEBPACK_IMPORTED_MODULE_0__[\"M_NonPlayer\"] {\n    constructor(size, position, look, status) {\n        super(size, position, look, status);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_enemy.js?");

/***/ }),

/***/ "./src/script/model/m_factory.js":
/*!***************************************!*\
  !*** ./src/script/model/m_factory.js ***!
  \***************************************/
/*! exports provided: M_Factory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Factory\", function() { return M_Factory; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _m_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./m_size */ \"./src/script/model/m_size.js\");\n/* harmony import */ var _m_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./m_position */ \"./src/script/model/m_position.js\");\n/* harmony import */ var _m_look__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./m_look */ \"./src/script/model/m_look.js\");\n/* harmony import */ var _m_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./m_status */ \"./src/script/model/m_status.js\");\n/* harmony import */ var _m_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./m_space */ \"./src/script/model/m_space.js\");\n/* harmony import */ var _m_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./m_field */ \"./src/script/model/m_field.js\");\n/* harmony import */ var _m_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./m_player */ \"./src/script/model/m_player.js\");\n/* harmony import */ var _m_bullet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./m_bullet */ \"./src/script/model/m_bullet.js\");\n/* harmony import */ var _m_enemy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./m_enemy */ \"./src/script/model/m_enemy.js\");\n/* harmony import */ var _m_character_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./m_character_List */ \"./src/script/model/m_character_List.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Modelのファクトリークラス\nclass M_Factory {\n    createCharacterList() {\n        return new _m_character_List__WEBPACK_IMPORTED_MODULE_11__[\"M_CharacterList\"]();\n    }\n\n    createSpace() {\n        const prop  = _util_utility__WEBPACK_IMPORTED_MODULE_1__[\"Utility\"].getSpaceProp();\n        const size  = new _m_size__WEBPACK_IMPORTED_MODULE_2__[\"M_Size\"](prop.w, prop.h);\n        const pos   = new _m_position__WEBPACK_IMPORTED_MODULE_3__[\"M_Position\"](prop.x, prop.y);\n        const space = new _m_space__WEBPACK_IMPORTED_MODULE_6__[\"M_Space\"](size, pos);\n\n        return space;\n    }\n\n    createField() {\n        const prop  = _util_utility__WEBPACK_IMPORTED_MODULE_1__[\"Utility\"].getFieldProp();\n        const size  = new _m_size__WEBPACK_IMPORTED_MODULE_2__[\"M_Size\"](prop.w, prop.h);\n        const pos   = new _m_position__WEBPACK_IMPORTED_MODULE_3__[\"M_Position\"](prop.x, prop.y);\n        const field = new _m_field__WEBPACK_IMPORTED_MODULE_7__[\"M_Field\"](size, pos);\n\n        return field;\n    }\n\n    createPlayer() {\n        const fp       = _util_utility__WEBPACK_IMPORTED_MODULE_1__[\"Utility\"].getFieldProp();\n\n        const width    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.width;\n        const height   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.height;\n        const size     = new _m_size__WEBPACK_IMPORTED_MODULE_2__[\"M_Size\"](width, height);\n\n        const left     = (fp.w / 2) - (width / 2);\n        const top      = (fp.h * _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.top) - height;\n        const position = new _m_position__WEBPACK_IMPORTED_MODULE_3__[\"M_Position\"](left, top);\n\n        const normal   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.look.normal;\n        const dead     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.look.dead;\n        const look     = new _m_look__WEBPACK_IMPORTED_MODULE_4__[\"M_Look\"]();\n        look.addImage(normal);\n        look.addImage(dead);\n\n        const type     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.type;\n        const life     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.life;\n        const score    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.score;\n        const dist     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.dist;\n        const grace    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.grace;\n        const status   = new _m_status__WEBPACK_IMPORTED_MODULE_5__[\"M_Status\"](type, life, dist, score, grace);\n\n        const player = new _m_player__WEBPACK_IMPORTED_MODULE_8__[\"M_Player\"](size, position, look, status);\n\n        return player;\n    }\n\n    createBullet(player) {\n        if(!player) return;\n\n        const width    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.width;\n        const height   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.height;\n        const size     = new _m_size__WEBPACK_IMPORTED_MODULE_2__[\"M_Size\"](width, height);\n\n        const pLeft    = player.getLeft();\n        const pTop     = player.getTop();\n        const pWidth   = player.getWidth();\n        const left     = (pLeft + (pWidth / 2)) - (width / 2);\n        const top      = pTop - (height * 2);\n        const position = new _m_position__WEBPACK_IMPORTED_MODULE_3__[\"M_Position\"](left, top);\n\n        const normal   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.look.normal;\n        const look     = new _m_look__WEBPACK_IMPORTED_MODULE_4__[\"M_Look\"]();\n        look.addImage(normal);\n\n        const type     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.type;\n        const life     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.life;\n        const score    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.score;\n        const dist     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.dist;\n        const grace    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.grace;\n        const status   = new _m_status__WEBPACK_IMPORTED_MODULE_5__[\"M_Status\"](type, life, dist, score, grace); \n\n        const bullet = new _m_bullet__WEBPACK_IMPORTED_MODULE_9__[\"M_Bullet\"](size, position, look, status);\n\n        return bullet;\n    }\n\n    createEnemy() {\n        const width    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.width;\n        const height   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.height;\n        const size     = new _m_size__WEBPACK_IMPORTED_MODULE_2__[\"M_Size\"](width, height);\n\n        const position = this.getEnemyAppearPos();\n\n        const normal   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.look.normal;\n        const dead     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.look.dead;\n        const look     = new _m_look__WEBPACK_IMPORTED_MODULE_4__[\"M_Look\"]();\n        look.addImage(normal);\n        look.addImage(dead);\n\n        const type     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.type;\n        const life     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.life;\n        const score    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.score;\n        const dist     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.dist;\n        const grace    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.grace;\n        const status   = new _m_status__WEBPACK_IMPORTED_MODULE_5__[\"M_Status\"](type, life, dist, score, grace);\n\n        const enemy = new _m_enemy__WEBPACK_IMPORTED_MODULE_10__[\"M_Enemy\"](size, position, look, status);\n\n        return enemy;\n    }\n\n    createBoss(field) {\n        const fp = _util_utility__WEBPACK_IMPORTED_MODULE_1__[\"Utility\"].getFieldProp();\n\n        const width    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.width;\n        const height   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.height;\n        const size     = new _m_size__WEBPACK_IMPORTED_MODULE_2__[\"M_Size\"](width, height);\n\n        const left     = (fp.w / 2) - (width / 2);\n        const top      = fp.y - height;\n        const position = new _m_position__WEBPACK_IMPORTED_MODULE_3__[\"M_Position\"](left, top);\n\n        const normal   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.look.normal;\n        const dead     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.look.dead;\n        const look     = new _m_look__WEBPACK_IMPORTED_MODULE_4__[\"M_Look\"]();\n        look.addImage(normal);\n        look.addImage(dead);\n\n        const type     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.type;\n        const life     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.life;\n        const score    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.score;\n        const dist     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.dist;\n        const grace    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.grace;\n        const status   = new _m_status__WEBPACK_IMPORTED_MODULE_5__[\"M_Status\"](type, life, dist, score, grace);\n\n        const boss = new _m_enemy__WEBPACK_IMPORTED_MODULE_10__[\"M_Enemy\"](size, position, look, status);\n\n        return boss;\n    }\n\n    // enemyの出現位置を取得する\n    getEnemyAppearPos() {\n        const fp = _util_utility__WEBPACK_IMPORTED_MODULE_1__[\"Utility\"].getFieldProp();\n        \n        let position = null;\n\n        // Enemyの幅で等分する\n        const max  = fp.w / _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.width;\n        const rand = _util_utility__WEBPACK_IMPORTED_MODULE_1__[\"Utility\"].getRandomInt(0, max);\n\n        const left = rand * _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.width;\n        const top  = fp.h * _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.top;\n\n        position = new _m_position__WEBPACK_IMPORTED_MODULE_3__[\"M_Position\"](left, top);\n\n        return position;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/script/model/m_factory.js?");

/***/ }),

/***/ "./src/script/model/m_field.js":
/*!*************************************!*\
  !*** ./src/script/model/m_field.js ***!
  \*************************************/
/*! exports provided: M_Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Field\", function() { return M_Field; });\n/* harmony import */ var _m_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m_base */ \"./src/script/model/m_base.js\");\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n\n\n\n\n\n// フィールドのModelクラス\nclass M_Field extends _m_base__WEBPACK_IMPORTED_MODULE_0__[\"M_Base\"]{\n    constructor(size, position) {\n        super(size, position);\n    }\n\n    resize() {\n        const prop  = _util_utility__WEBPACK_IMPORTED_MODULE_1__[\"Utility\"].getFieldProp();\n        this.setWidth(prop.w);\n        this.setHeight(prop.h);\n        this.setLeft(prop.x);\n        this.setTop(prop.y);\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/m_field.js?");

/***/ }),

/***/ "./src/script/model/m_fieldout.js":
/*!****************************************!*\
  !*** ./src/script/model/m_fieldout.js ***!
  \****************************************/
/*! exports provided: M_FieldOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_FieldOut\", function() { return M_FieldOut; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n\n\n\n\nclass M_FieldOut {\n    constructor(field, list) {\n        this.field = field;\n        this.characterList  = list;\n    }\n\n    update() {\n        const origin = this.characterList.getCharacterList();\n        const filtered = origin.filter(e => this.isFieldOut(e))\n        this.fieldOut(filtered);\n    }\n\n    isFieldOut(e) {\n        // プレイヤーは仕様上フィールドアウトできないので除外する\n        if(e.getType() === _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.type) return false;\n        // ボスは仕様上フィールドアウトしても良いので除外する\n        if(e.getType() === _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.type) return false;\n\n        const top = e.getTop();\n        const btm = top + e.getHeight();\n        const chkTop = top < this.field.getTop();\n        const chkBtm = btm > this.field.getTop() + this.field.getHeight();\n\n        return chkTop === true || chkBtm === true;\n    }\n\n    fieldOut(array) {\n        array.forEach(e => e.makeDisposeTarget());\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/m_fieldout.js?");

/***/ }),

/***/ "./src/script/model/m_iterator.js":
/*!****************************************!*\
  !*** ./src/script/model/m_iterator.js ***!
  \****************************************/
/*! exports provided: M_Iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Iterator\", function() { return M_Iterator; });\n\n\n// イテレータークラス\nclass M_Iterator {\n    constructor() {\n        this.index = 0;\n        this.collection = new Array();\n    }\n\n    addItem(item) {\n        this.collection.push(item);\n    }\n\n    getItem() {\n        return this.collection[this.index];\n    }\n\n    first() {\n        this.index = this.getFirstIndex();\n    }\n\n    last() {\n        this.index = this.getLastIndex();\n    }\n\n    next() {\n        if(!this.hasNext()) return;\n        this.index++;\n    }\n\n    prev() {\n        if(!this.hasPrev()) return;\n        this.index--;\n    }\n    \n    getCurrentIndex() {\n        return this.index;\n    }\n\n    getFirstIndex() {\n        return 0;\n    }\n\n    getLastIndex() {\n        return this.collection.length - 1;\n    }\n\n    hasNext() {\n        return this.getCurrentIndex() !== this.getLastIndex();\n    }\n\n    hasPrev() {\n        return this.getCurrentIndex() !== this.getFirstIndex()\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_iterator.js?");

/***/ }),

/***/ "./src/script/model/m_look.js":
/*!************************************!*\
  !*** ./src/script/model/m_look.js ***!
  \************************************/
/*! exports provided: M_Look */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Look\", function() { return M_Look; });\n/* harmony import */ var _m_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m_iterator */ \"./src/script/model/m_iterator.js\");\n\n\n\n\n// 外見を管理するクラス\nclass M_Look extends _m_iterator__WEBPACK_IMPORTED_MODULE_0__[\"M_Iterator\"] {\n    constructor() {\n        super();\n    }\n\n    addImage(src) {\n        const image = new Image();\n        image.src = src;\n        image.onload = this.addItem(image);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_look.js?");

/***/ }),

/***/ "./src/script/model/m_manager.js":
/*!***************************************!*\
  !*** ./src/script/model/m_manager.js ***!
  \***************************************/
/*! exports provided: M_Manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Manager\", function() { return M_Manager; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n/* harmony import */ var _e_enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e_enemy */ \"./src/script/model/e_enemy.js\");\n\n\n\n\n\n\nclass M_Manager {\n    constructor(factory, space, field, rule, charaList) {\n        this.factory       = factory;\n        this.space         = space;\n        this.field         = field;\n        this.rule          = rule;\n        this.characterList = charaList;\n        this.status     = '';\n\n        this.score = new _e_enemy__WEBPACK_IMPORTED_MODULE_1__[\"M_Score\"]();\n        this.timer = new _e_enemy__WEBPACK_IMPORTED_MODULE_1__[\"M_EnemyTimer\"]();\n    }\n\n    init() {\n        this.status = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.default;\n    }\n\n    resize() {\n        this.space.resize();\n        this.field.resize();\n    }\n\n    removeItem(item) {\n        \n    }\n\n    getPlayer() {\n        return this.characterList.getPlayer();\n    }\n\n    getBoss() {\n        return this.characterList.getBoss();\n    }\n\n    getCollection() {\n        return this.characterList.getCharacterList();\n    }\n\n    getField() {\n        return this.field;\n    }\n\n    getStatus() {\n        return this.status;\n    }\n\n    isPlaying() {\n        return this.getStatus() === _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.playing;\n    }\n\n    gameStart() {\n        this.addPlayer();\n        this.status = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.playing;\n    }\n\n    gameStop() {\n        this.status = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.default;\n    }\n\n    gameClear() {\n        this.status = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.gameclear;\n    }\n\n    gameOver() {\n        this.status = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.gameover;\n    }\n\n    update() {\n        this.checkStatus();\n        this.createEnemy();\n        this.characterList.update();\n        this.rule.update();\n        this.disposeItem();\n    }\n\n    checkStatus() {\n        if(this.score.getScore() >= 10) _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.gameclear;\n        if(this.score.getScore() < 0)  _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.gameover;\n    }\n\n    createEnemy() {\n        if(this.score.getScore() > 9) return this.addBoss();\n        if(this.timer.update() === true) return this.addEnemy() \n    }\n\n    addPlayer() {\n        if(this.getPlayer()) return;\n\n        const player = this.factory.createPlayer();\n        this.characterList.addCharacter(player);\n    }\n\n    addBullet() {\n        const player = this.getPlayer()\n        if(!player) return;\n\n        const bullet = this.factory.createBullet(player);\n        this.characterList.addCharacter(bullet);\n    }\n\n    addEnemy() {\n        const enemy = this.factory.createEnemy();\n        this.characterList.addCharacter(enemy);\n    }\n\n    addBoss() {\n        if(this.getBoss()) return;\n\n        const boss = this.factory.createBoss();\n        this.characterList.addCharacter(boss);\n    }\n\n    disposeItem() {\n        const array = this.characterList.getCharacterList();\n        for(let e of array) {\n            if(e.isDisposeTarget() === false) continue;\n\n            this.characterList.removeCharacter(e);\n            // TODO: いいやりかた思いついたら変える\n            this.score.changeScore(e.getScore());\n            \n            e = null;\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_manager.js?");

/***/ }),

/***/ "./src/script/model/m_player.js":
/*!**************************************!*\
  !*** ./src/script/model/m_player.js ***!
  \**************************************/
/*! exports provided: M_Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Player\", function() { return M_Player; });\n/* harmony import */ var _m_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m_character */ \"./src/script/model/m_character.js\");\n\n\n\n\n// プレイヤークラス\nclass M_Player extends _m_character__WEBPACK_IMPORTED_MODULE_0__[\"M_Character\"] {\n    constructor(size, position, look, status) {\n        super(size, position, look, status);\n    }\n\n    // 何もしない\n    update() {\n        // orverride none;\n    }\n\n    moveLeft() {\n        const dist = this.getDist() * - 1;\n        this.position.moveX(dist);\n    }\n\n    moveRight() {\n        const dist = this.getDist();\n        this.position.moveX(dist);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_player.js?");

/***/ }),

/***/ "./src/script/model/m_position.js":
/*!****************************************!*\
  !*** ./src/script/model/m_position.js ***!
  \****************************************/
/*! exports provided: M_Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Position\", function() { return M_Position; });\n\n\n// ポジションを管理するクラス\nclass M_Position {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    setX(x) {\n        this.x = x;\n    }\n    \n    getX() {\n        return this.x;\n    }\n\n    setY(y) {\n        this.y = y\n    }\n\n    getY() {\n        return this.y;\n    }\n    \n    move(x, y) {\n        this.moveX(x);\n        this.moveY(y);\n    }\n\n    moveX(x) {\n        this.x = this.getX() + x;\n    }\n\n    moveY(y) {\n        this.y = this.getY() + y;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_position.js?");

/***/ }),

/***/ "./src/script/model/m_rule.js":
/*!************************************!*\
  !*** ./src/script/model/m_rule.js ***!
  \************************************/
/*! exports provided: M_Rule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Rule\", function() { return M_Rule; });\n\n\nclass M_Rule {\n    constructor() {\n        this.rules = new Array();\n    }\n\n    addRule(rule) {\n        this.rules.push(rule);\n    }\n\n    update() {\n        this.rules.forEach(e => e.update());\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/m_rule.js?");

/***/ }),

/***/ "./src/script/model/m_size.js":
/*!************************************!*\
  !*** ./src/script/model/m_size.js ***!
  \************************************/
/*! exports provided: M_Size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Size\", function() { return M_Size; });\n\n\n// ゲームのフィールドクラス\nclass M_Size {\n    constructor(width, height) {\n        this.width = width;\n        this.height = height;\n    }\n\n    setWidth(w) {\n        this.width = w;\n    }\n\n    getWidth() {\n        return this.width;\n    }\n\n    setHeight(h) {\n        this.height = h;\n    }\n\n    getHeight() {\n        return this.height;\n    }\n\n    // TODO: どうしよう\n    // size(w, h) {\n    //     this.setWidth(w);\n    //     this.setHeight(h);\n    // }\n\n    // resize(w, h) {\n    //     this.size(w, h);\n    // }\n\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_size.js?");

/***/ }),

/***/ "./src/script/model/m_space.js":
/*!*************************************!*\
  !*** ./src/script/model/m_space.js ***!
  \*************************************/
/*! exports provided: M_Space */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Space\", function() { return M_Space; });\n/* harmony import */ var _m_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m_base */ \"./src/script/model/m_base.js\");\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n\n\n\n\n\n// 背景のModelクラス\nclass M_Space extends _m_base__WEBPACK_IMPORTED_MODULE_0__[\"M_Base\"] {\n    constructor(size, position) {\n        super(size, position);\n    }\n\n    resize() {\n        const prop  = _util_utility__WEBPACK_IMPORTED_MODULE_1__[\"Utility\"].getSpaceProp();\n        this.setWidth(prop.w);\n        this.setHeight(prop.h);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_space.js?");

/***/ }),

/***/ "./src/script/model/m_status.js":
/*!**************************************!*\
  !*** ./src/script/model/m_status.js ***!
  \**************************************/
/*! exports provided: M_Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M_Status\", function() { return M_Status; });\n\n\n// ステータス管理クラス\nclass M_Status {\n    constructor(type, life, dist, score, grace) {\n        this.type  = type;\n        this.life  = life;\n        this.dist  = dist;\n        this.score = score;\n        this.grace = grace;\n    }\n\n    getType() {\n        return this.type;\n    }\n    \n    getLife() {\n        return this.life;\n    }\n\n    getDist() {\n        return this.dist;\n    }\n\n    getScore() {\n        return this.score;\n    }\n\n    getGrace() {\n        return this.grace;\n    }\n\n    hit() {\n        this.life--;\n    }\n\n    isDead() {\n        return this.life <= 0;\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/m_status.js?");

/***/ }),

/***/ "./src/script/util/utility.js":
/*!************************************!*\
  !*** ./src/script/util/utility.js ***!
  \************************************/
/*! exports provided: Utility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Utility\", function() { return Utility; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n\n\n\n\n// ユーティリティクラス\nclass Utility {\n    // min以上、max未満の整数を取得する\n    static getRandomInt(min, max) {\n        min = Math.ceil(min);\n        max = Math.floor(max);\n        return Math.floor(Math.random() * (max - min)) + min;\n    }\n    \n    // TODO: いい方法を考えたら変える\n    static controlDom(status) {\n        const btnId    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].dom.button.id;\n        const msgId    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].dom.message.id;\n        const startBtn = document.querySelector(`#${btnId.start}`);\n        const resetBtn = document.querySelector(`#${btnId.reset}`);\n        const stopBtn  = document.querySelector(`#${btnId.stop}`);\n        const msgClear = document.querySelector(`#${msgId.gameclear}`);\n        const msgOver  = document.querySelector(`#${msgId.gameover}`);\n\n        if(!startBtn || !resetBtn || !stopBtn || !msgClear || !msgOver) return;\n        \n        switch (status) {\n            case _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.default:\n                startBtn.style.display = 'block';\n                resetBtn.style.display = 'block';\n                stopBtn.style.display  = 'none';\n                msgClear.style.display = 'none';\n                msgOver.style.display  = 'none';\n                break;\n            case _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.playing:\n                startBtn.style.display = 'none';\n                resetBtn.style.display = 'none';\n                stopBtn.style.display  = 'block';\n                msgClear.style.display = 'none';\n                msgOver.style.display  = 'none';\n                break;\n            case _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.gameclear:\n                startBtn.style.display = 'none';\n                resetBtn.style.display = 'block';\n                stopBtn.style.display  = 'none';\n                msgClear.style.display = 'block';\n                msgOver.style.display  = 'none';\n                break;\n            case _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.gameover:\n                startBtn.style.display = 'none';\n                resetBtn.style.display = 'block';\n                stopBtn.style.display  = 'none';\n                msgClear.style.display = 'none';\n                msgOver.style.display  = 'block';\n                break;\n            default:\n                break;\n        }\n    }\n\n    static getSpaceProp() {\n        const body = document.querySelector('body');\n        const w = body.clientWidth;\n        const h = body.clientHeight;\n        const x = 0;\n        const y = 0;\n    \n        return {w: w, h: h, x: x, y: y};\n    }\n\n    static getFieldProp() {\n        const body = document.querySelector('body');\n        const w = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].field.width;\n        const h = body.clientHeight;\n        const x = (body.clientWidth / 2) - (w / 2);\n        const y = 0;\n     \n        return {w: w, h: h, x: x, y: y};\n    }\n\n    static convertKeyCodeToMeaningStr(code) {\n        if(!code) return null;\n\n        if(code === 32) return 'space';\n        if(code === 37) return 'left';\n        if(code === 39) return 'right';\n        \n        return null;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/util/utility.js?");

/***/ }),

/***/ "./src/script/view/v_base.js":
/*!***********************************!*\
  !*** ./src/script/view/v_base.js ***!
  \***********************************/
/*! exports provided: V_Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"V_Base\", function() { return V_Base; });\n'usestrict'\n\n// ゲームのフィールドクラス\nclass V_Base {\n    constructor() {\n        this.canvas  = null;\n        this.context = null;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/view/v_base.js?");

/***/ }),

/***/ "./src/script/view/v_field.js":
/*!************************************!*\
  !*** ./src/script/view/v_field.js ***!
  \************************************/
/*! exports provided: V_Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"V_Field\", function() { return V_Field; });\n/* harmony import */ var _v_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v_base */ \"./src/script/view/v_base.js\");\n\n\n\n\n// ゲームのフィールドクラス\nclass V_Field extends _v_base__WEBPACK_IMPORTED_MODULE_0__[\"V_Base\"] {\n    constructor(model) {\n        super();\n        this.model   = model;\n        this.canvas  = document.querySelector('#js-field');\n        this.context = this.canvas.getContext('2d');\n    }\n\n    init() {\n        this.style();\n        this.draw();\n    }\n\n    resize() {\n        this.init();\n    }\n    \n    style() {\n        this.size();\n        this.position();\n    }\n\n    size() {\n        const width  = this.model.getWidth();\n        const height = this.model.getHeight();\n        this.canvas.setAttribute('width',`${width}`);\n        this.canvas.setAttribute('height', `${height}`);\n    }\n\n    position() {\n        const top  = this.model.getTop();\n        const left = this.model.getLeft();\n        this.canvas.style.position = 'absolute';\n        this.canvas.style.top = `${top}px`;\n        this.canvas.style.left = `${left}px`;\n    }\n\n    draw(collection) {\n        if(!collection) return;\n\n        let image  = null;\n        let left   = null;\n        let top    = null;\n        let width  = null;\n        let height = null;\n\n        for(let e of collection) {\n            image  = e.getLook();\n            left   = e.getLeft();\n            top    = e.getTop();\n            width  = e.getWidth();\n            height = e.getHeight();\n            \n            this.context.drawImage(e.getLook(), left, top, width, height);\n        }\n    }\n\n    erase() {\n        const width  = this.model.getWidth();\n        const height = this.model.getHeight();\n        this.context.clearRect(0, 0, width, height);\n    }\n\n    update(collection) {\n        this.erase();\n        this.draw(collection);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/view/v_field.js?");

/***/ }),

/***/ "./src/script/view/v_manager.js":
/*!**************************************!*\
  !*** ./src/script/view/v_manager.js ***!
  \**************************************/
/*! exports provided: V_Manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"V_Manager\", function() { return V_Manager; });\n\n\n// Viewの管理クラス\nclass V_Manager {\n    constructor(space, field) {\n        this.space = space;\n        this.field = field;\n    }\n\n    getSpace() {\n        return this.space;\n    }\n\n    getField() {\n        return this.field;\n    }\n\n    init() {\n        this.space.init();\n        this.field.init();\n    }\n\n    resize() {\n        this.space.resize();\n        this.field.resize();\n    }\n\n    update(collection) {\n        this.field.update(collection);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/view/v_manager.js?");

/***/ }),

/***/ "./src/script/view/v_space.js":
/*!************************************!*\
  !*** ./src/script/view/v_space.js ***!
  \************************************/
/*! exports provided: V_Space */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"V_Space\", function() { return V_Space; });\n/* harmony import */ var _v_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v_base */ \"./src/script/view/v_base.js\");\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/utility */ \"./src/script/util/utility.js\");\n\n\n\n\n\n// 背景クラス\nclass V_Space extends _v_base__WEBPACK_IMPORTED_MODULE_0__[\"V_Base\"] {\n    constructor(model) {\n        super();\n        this.model   = model;\n        this.canvas  = document.querySelector('#js-space');\n        this.context = this.canvas.getContext('2d');\n    }\n\n    init() {\n        this.style();\n        this.draw();\n    }\n\n    resize() {\n        this.init();\n    }\n    \n    style() {\n        this.size();\n        this.position();\n    }\n\n    size() {\n        const width  = this.model.getWidth();\n        const height = this.model.getHeight();\n        this.canvas.setAttribute('width',`${width}`);\n        this.canvas.setAttribute('height', `${height}`);\n    }\n\n    position() {\n        const top  = this.model.getTop();\n        const left = this.model.getLeft();\n        this.canvas.style.position = 'absolute';\n        this.canvas.style.top = `${top}px`;\n        this.canvas.style.left = `${left}px`;\n    }\n\n    draw() {\n        const width   = this.model.getWidth();\n        const height  = this.model.getHeight();\n        const context = this.context;\n\n        context.fillStyle = '#FFFFFF';\n        \n        for(let i = 0; i < 1000; i++) {\n            let x = _util_utility__WEBPACK_IMPORTED_MODULE_1__[\"Utility\"].getRandomInt(0, width);\n            let y = _util_utility__WEBPACK_IMPORTED_MODULE_1__[\"Utility\"].getRandomInt(0, height);\n            context.fillRect(x, y, 1, 1);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/view/v_space.js?");

/***/ })

/******/ });