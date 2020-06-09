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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n\n\n// ゲームセッティング\nconst config = {\n    message:{\n        abscall: 'abstract fanction called'\n    },\n    time: {\n        zonbi: 200,\n        enemy: 3000,\n    },\n    game: {\n        status: {\n            default: 'default',\n            playing: 'playing',\n            gameclear: 'gameclear',\n            gameover:  'gameover',\n        },\n    },\n    dom: {\n        button: {\n            id: {\n                start: 'js-start-btn',\n                stop:  'js-stop-btn',\n                reset: 'js-reset-btn',\n            },\n        },\n        message: {\n            id: {\n                gameclear: 'js-gameclear',\n                gameover: 'js-gameover',\n            },\n        },\n        canvas: {\n            id: {\n                space: 'js-space',\n                field: 'js-field',\n            }\n        },\n    },\n    event: {\n        swipe: {\n            dist: 50,\n        }\n    },\n    field: {\n        width: 250,\n        top: 0,\n    },\n    player: {\n        type: 'player',\n        width: 50,\n        height: 50,\n        life: 1,\n        score: 0,\n        distance: 50,\n        look: {\n            normal: './img/player.svg',\n            dead: './img/explosion.svg'\n        },\n        top: 0.9,\n    },\n    bullet: {\n        type: 'bullet',\n        width: 5,\n        height: 10,\n        life: 1,\n        score: 0,\n        distance: -5,\n        look: {\n            normal: './img/bullet.svg',\n        },\n    },\n    enemy: {\n        type: 'enemy',\n        width: 50,\n        height: 50,\n        life: 1,\n        score: 1,\n        distance: 0.5,\n        look: {\n            normal: './img/enemy.svg',\n            dead: './img/explosion.svg'\n        },\n        top: 0.1,\n    },\n    boss: {\n        type: 'boss',\n        width: 250,\n        height: 250,\n        life: 30,\n        score: 100,\n        distance: 0.5,\n        look: {\n            normal: './img/boss.svg',\n            dead: './img/explosion.svg'\n        },\n    }\n};\n\n//# sourceURL=webpack:///./src/script/config.js?");

/***/ }),

/***/ "./src/script/controler/c_manager.js":
/*!*******************************************!*\
  !*** ./src/script/controler/c_manager.js ***!
  \*******************************************/
/*! exports provided: CManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CManager\", function() { return CManager; });\n\n\n// Controlerクラス\nclass CManager {\n    constructor(utility, model, view, event) {\n        this.utility   = utility;\n        this.model     = model;\n        this.view      = view;\n        this.event     = event;\n    }\n\n    init() {\n        this.model.init();\n        this.view.init();\n        this.event.init();\n    }\n    \n    resize() {\n        const collection = this.model.getCollection();\n        this.view.resize(collection);\n    }\n\n    start() {\n        this.model.gameStart();\n        this.controlDom();\n        this.update();\n    }\n\n    reset() {\n        location.reload();\n    }\n\n    stop() {\n        this.model.gameStop();\n        this.controlDom();\n        cancelAnimationFrame(this.requestID);\n    }\n\n    finish() {\n        this.controlDom();\n        cancelAnimationFrame(this.requestID);\n    }\n\n    controlDom() {\n        const status = this.model.getStatus();\n        this.utility.controlDom(status);\n    }\n\n    update() {\n        // stopボタンは別メソッドがあるため考慮しない\n        if(this.model.isPlaying() === false) return this.finish();\n\n        this.model.update();\n\n        const collection = this.model.getCollection();\n        this.view.update(collection);\n        \n        this.requestID = requestAnimationFrame(this.update.bind(this));\n    }\n    \n}\n\n\n//# sourceURL=webpack:///./src/script/controler/c_manager.js?");

/***/ }),

/***/ "./src/script/controler/event.js":
/*!***************************************!*\
  !*** ./src/script/controler/event.js ***!
  \***************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Event\", function() { return Event; });\n\n\nclass Event {\n    constructor(keydown, swipe, touch) {\n        this.keydown  = keydown;\n        this.swipe    = swipe;\n        this.touch    = touch;\n    }\n\n    init() {\n        this.keydown.init();\n        this.swipe.init();\n        this.touch.init();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/controler/event.js?");

/***/ }),

/***/ "./src/script/controler/keydown.js":
/*!*****************************************!*\
  !*** ./src/script/controler/keydown.js ***!
  \*****************************************/
/*! exports provided: Keydown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Keydown\", function() { return Keydown; });\n\n\n// キーボードイベントクラス\nclass Keydown {\n    constructor(model) {\n        this.model = model;\n        this.disable = false;\n    }\n\n    init() {\n        window.addEventListener('keydown', this.keydown.bind(this), false);\n        window.addEventListener('keyup', this.keyup.bind(this), false);\n    }\n    \n    keydown(e) {\n        if(this.disable === true) return;\n\n        this.disable = true;\n\n        const val = this.convertKeyCodeToMeaningStr(e.keyCode);\n        \n        if(val === null)    return this.usage();\n        if(val === 'space') return this.shoot();\n        if(val === 'left')  return this.moveLeft();\n        if(val === 'right') return this.moveRight();\n    }\n    \n    keyup() {\n        this.disable = false;\n    }\n\n    convertKeyCodeToMeaningStr(code) {\n        if(!code) return null;\n        if(code === 32) return 'space';\n        if(code === 37) return 'left';\n        if(code === 39) return 'right';\n        return null;\n    }\n    \n    usage() {\n        // TODO: いい方法考える\n        console.log(`space => shoot\\nleft => move left\\nright => move right`);\n    }\n\n    shoot() {\n        this.model.addBullet();\n    }\n\n    moveLeft() {\n        if(this.model.isPlaying() === false) return;\n\n        const player = this.model.getPlayer();\n        player.moveLeft();\n    }\n\n    moveRight() {\n        if(this.model.isPlaying() === false) return;\n\n        const player = this.model.getPlayer();\n        player.moveRight();\n    }\n}\n\n//# sourceURL=webpack:///./src/script/controler/keydown.js?");

/***/ }),

/***/ "./src/script/controler/swipe.js":
/*!***************************************!*\
  !*** ./src/script/controler/swipe.js ***!
  \***************************************/
/*! exports provided: Swipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Swipe\", function() { return Swipe; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n\n\n\n\n// スワイプイベントクラス\nclass Swipe {\n    constructor(model) {\n        this.model = model;\n        this.startX = 0;\n        this.endX   = 0;\n    }\n\n    init() {\n        window.addEventListener('touchstart', this.touchStart.bind(this), {passive: false});\n        window.addEventListener('touchmove', this.touchMove.bind(this), {passive: false});\n        window.addEventListener('touchend', this.touchEnd.bind(this), false);\n    }\n\n    touchStart(event) {\n        event.preventDefault();\n        this.startX = event.touches[0].pageX;\n    }\n\n    touchMove(event) {\n        event.preventDefault();\n        this.endX = event.changedTouches[0].pageX;\n    }\n\n    touchEnd() {\n        if (this.startX > this.endX) return this.moveLeft();\n        if (this.startX < this.endX) return this.moveRight();\n    }\n\n    moveLeft() {\n        if(this.model.isPlaying() === false) return;\n        if ((this.startX - this.endX) < _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].event.swipe.dist) return;\n\n        const player = this.model.getPlayer();\n        player.moveLeft();\n    }\n\n    moveRight() {\n        if(this.model.isPlaying() === false) return;\n        if((this.endX - this.startX) < _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].event.swipe.dist) return;\n\n        const player = this.model.getPlayer();\n        player.moveRight();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/controler/swipe.js?");

/***/ }),

/***/ "./src/script/controler/touch.js":
/*!***************************************!*\
  !*** ./src/script/controler/touch.js ***!
  \***************************************/
/*! exports provided: Touch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Touch\", function() { return Touch; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n\n\n\n\n// タッチイベントクラス\nclass Touch {\n    constructor(model) {\n        this.model  = model;\n        this.startX = 0;\n        this.endX   = 0\n    }\n\n    init() {\n        window.addEventListener(\"touchstart\", this.touchStart.bind(this), {passive: false});\n        window.addEventListener(\"touchmove\", this.touchMove.bind(this), {passive: false});\n        window.addEventListener(\"touchend\", this.touchEnd.bind(this), {passive: false});\n    }\n\n    touchStart(event) {\n        event.preventDefault();\n        this.startX = event.touches[0].pageX;\n    }\n\n    touchMove(event) {\n        event.preventDefault();\n        this.endX = event.changedTouches[0].pageX;\n    }\n\n    touchEnd() {\n        if(Math.abs(this.endX - this.startX) >= _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].event.swipe.dist) return;\n\n        this.shoot();\n    }\n\n    shoot() {\n        if(this.model.isPlaying() === false) return;\n        this.model.addBullet();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/controler/touch.js?");

/***/ }),

/***/ "./src/script/main.js":
/*!****************************!*\
  !*** ./src/script/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/utility */ \"./src/script/util/utility.js\");\n/* harmony import */ var _view_v_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/v_field */ \"./src/script/view/v_field.js\");\n/* harmony import */ var _view_v_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/v_space */ \"./src/script/view/v_space.js\");\n/* harmony import */ var _view_v_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/v_manager */ \"./src/script/view/v_manager.js\");\n/* harmony import */ var _model_m_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/m_factory */ \"./src/script/model/m_factory.js\");\n/* harmony import */ var _model_m_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/m_manager */ \"./src/script/model/m_manager.js\");\n/* harmony import */ var _controler_swipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controler/swipe */ \"./src/script/controler/swipe.js\");\n/* harmony import */ var _controler_touch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controler/touch */ \"./src/script/controler/touch.js\");\n/* harmony import */ var _controler_keydown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controler/keydown */ \"./src/script/controler/keydown.js\");\n/* harmony import */ var _controler_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controler/event */ \"./src/script/controler/event.js\");\n/* harmony import */ var _controler_c_manager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controler/c_manager */ \"./src/script/controler/c_manager.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction main() {\n    const utility  = new _util_utility__WEBPACK_IMPORTED_MODULE_0__[\"Utility\"]();\n    const vField   = new _view_v_field__WEBPACK_IMPORTED_MODULE_1__[\"VField\"]();\n    const vSpace   = new _view_v_space__WEBPACK_IMPORTED_MODULE_2__[\"VSpace\"](utility);\n    const vManager = new _view_v_manager__WEBPACK_IMPORTED_MODULE_3__[\"VManager\"](vSpace, vField);\n    const mFactory = new _model_m_factory__WEBPACK_IMPORTED_MODULE_4__[\"MFactory\"](utility, vField);\n    const mManager = new _model_m_manager__WEBPACK_IMPORTED_MODULE_5__[\"MManager\"](utility, mFactory);\n    const swipe    = new _controler_swipe__WEBPACK_IMPORTED_MODULE_6__[\"Swipe\"](mManager);\n    const touch    = new _controler_touch__WEBPACK_IMPORTED_MODULE_7__[\"Touch\"](mManager);\n    const keydown  = new _controler_keydown__WEBPACK_IMPORTED_MODULE_8__[\"Keydown\"](mManager);\n    const event    = new _controler_event__WEBPACK_IMPORTED_MODULE_9__[\"Event\"](keydown, swipe, touch);\n    const cManager = new _controler_c_manager__WEBPACK_IMPORTED_MODULE_10__[\"CManager\"](utility, mManager, vManager, event);\n\n    const domStrBtn = document.querySelector('#js-start-btn');\n    const domStpBtn = document.querySelector('#js-stop-btn');\n    const domRstBtn = document.querySelector('#js-reset-btn');\n    domStrBtn.addEventListener('click', cManager.start.bind(cManager));\n    domStpBtn.addEventListener('click', cManager.stop.bind(cManager));\n    domRstBtn.addEventListener('click', cManager.reset.bind(cManager));\n    domStrBtn.addEventListener('touchstart', cManager.start.bind(cManager));\n    domStpBtn.addEventListener('touchstart', cManager.stop.bind(cManager));\n    domRstBtn.addEventListener('touchstart', cManager.reset.bind(cManager));\n\n    window.addEventListener('load',   () => cManager.init());\n    window.addEventListener('resize', () => cManager.resize());\n}\n\nmain();\n\n//# sourceURL=webpack:///./src/script/main.js?");

/***/ }),

/***/ "./src/script/model/m_base.js":
/*!************************************!*\
  !*** ./src/script/model/m_base.js ***!
  \************************************/
/*! exports provided: MBase, MNonPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MBase\", function() { return MBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MNonPlayer\", function() { return MNonPlayer; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n\n\n\n\n// ゲームオブジェクトのベースクラス\nclass MBase {\n    constructor(field, status, position, look) {\n        this.field     = field\n        this.status    = status;\n        this.position  = position;\n        this.look      = look;\n        this.isDispose = false\n    }\n\n    getType() {\n        return this.status.getType()\n    }\n    \n    getWidth() {\n        return this.status.getWidth();\n    }\n\n    getHeight() {\n        return this.status.getHeight();\n    }\n\n    getLeft() {\n        return this.position.getX();\n    }\n\n    getTop() {\n        return this.position.getY();\n    }\n    \n    getScore() {\n        return this.status.getScore();\n    }\n\n    getLook() {\n        return this.look.getItem();\n    }\n\n    update() {\n        throw new Error(_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].message.abscall);\n    }\n\n    move() {\n        throw new Error(_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].message.abscall);\n    }\n\n    isDead() {\n        return this.status.isDead();\n    }\n\n    isDisposeTarget() {\n        return this.isDispose;\n    }\n\n    damage() {\n        this.status.damage();\n        if(this.isDead()) this.dead();\n    }\n\n    // ライフが0になった後も処理したいためここではdisposeしない\n    dead() {\n        this.look.last();\n        setTimeout(this.makeDisposeTarget.bind(this), _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].time.zonbi);\n    }\n\n    makeDisposeTarget() {\n        this.isDispose = true;\n    }\n\n    dispose() {\n        return this.status.getScore();\n    }\n}\n\n// NPCクラス\nclass MNonPlayer extends MBase {\n    constructor(field, status, position, look) {\n        super(field, status, position, look);\n    }\n\n    update() {\n        this.move();\n    }\n\n    move() {\n        const y = this.status.getDistance();\n        this.position.moveY(y);\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/m_base.js?");

/***/ }),

/***/ "./src/script/model/m_bullet.js":
/*!**************************************!*\
  !*** ./src/script/model/m_bullet.js ***!
  \**************************************/
/*! exports provided: MBullet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MBullet\", function() { return MBullet; });\n/* harmony import */ var _m_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m_base */ \"./src/script/model/m_base.js\");\n\n\n\n\nclass MBullet extends _m_base__WEBPACK_IMPORTED_MODULE_0__[\"MNonPlayer\"] {\n    constructor(field, status, position, look) {\n        super(field, status, position, look);\n    }\n\n    update() {\n        super.update();\n\n        const min = this.field.getTop();\n        if(this.position.getY() <= min) this.dead();\n    }\n\n    dead() {\n        this.makeDisposeTarget();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_bullet.js?");

/***/ }),

/***/ "./src/script/model/m_enemy.js":
/*!*************************************!*\
  !*** ./src/script/model/m_enemy.js ***!
  \*************************************/
/*! exports provided: MEnemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MEnemy\", function() { return MEnemy; });\n/* harmony import */ var _m_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m_base */ \"./src/script/model/m_base.js\");\n\n\n\n\nclass MEnemy extends _m_base__WEBPACK_IMPORTED_MODULE_0__[\"MNonPlayer\"] {\n    constructor(field, status, position, look) {\n        super(field, status, position, look);\n    }\n\n    update() {\n        super.update();\n\n        const fy = this.field.getTop();\n        const fh = this.field.getHeight()\n        const max = (fy + fh) * 0.8;\n        if(this.position.getY() > max) this.dead();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_enemy.js?");

/***/ }),

/***/ "./src/script/model/m_factory.js":
/*!***************************************!*\
  !*** ./src/script/model/m_factory.js ***!
  \***************************************/
/*! exports provided: MFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MFactory\", function() { return MFactory; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n/* harmony import */ var _m_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./m_status */ \"./src/script/model/m_status.js\");\n/* harmony import */ var _m_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./m_position */ \"./src/script/model/m_position.js\");\n/* harmony import */ var _m_look__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./m_look */ \"./src/script/model/m_look.js\");\n/* harmony import */ var _m_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./m_player */ \"./src/script/model/m_player.js\");\n/* harmony import */ var _m_bullet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./m_bullet */ \"./src/script/model/m_bullet.js\");\n/* harmony import */ var _m_enemy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./m_enemy */ \"./src/script/model/m_enemy.js\");\n\n\n\n\n\n\n\n\n\n\nclass MFactory {\n    constructor(utility, field) {\n        this.utility = utility;\n        this.field   = field;\n    }\n\n    createPlayer() {\n        const field    = this.field;\n\n        const type     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.type;\n        const width    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.width;\n        const height   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.height;\n        const life     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.life;\n        const score    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.score;\n        const distance = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.distance;\n        const status   = new _m_status__WEBPACK_IMPORTED_MODULE_1__[\"MStatus\"](type, width, height, life, score, distance);\n\n        const left     = (field.width / 2) - (width / 2);\n        const top      = (field.height * _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.top) - height;\n        const position = new _m_position__WEBPACK_IMPORTED_MODULE_2__[\"MPosition\"](left, top);\n\n        const normal   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.look.normal;\n        const dead     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.look.dead;\n        const look     = new _m_look__WEBPACK_IMPORTED_MODULE_3__[\"MLook\"]();\n        look.addImage(normal);\n        look.addImage(dead);\n\n        const player = new _m_player__WEBPACK_IMPORTED_MODULE_4__[\"MPlayer\"](field, status, position, look);\n\n        return player;\n    }\n\n    createBullet(player) {\n        if(!player) return;\n\n        const field    = this.field;\n\n        const type     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.type;\n        const width    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.width;\n        const height   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.height;\n        const life     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.life;\n        const score    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.score;\n        const distance = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.distance;\n        const status   = new _m_status__WEBPACK_IMPORTED_MODULE_1__[\"MStatus\"](type, width, height, life, score, distance);\n\n        const pLeft    = player.getLeft();\n        const pTop     = player.getTop();\n        const pWidth   = player.getWidth();\n        const left     = (pLeft + (pWidth / 2)) - (width / 2);\n        const top      = pTop - (height * 2);\n        const position = new _m_position__WEBPACK_IMPORTED_MODULE_2__[\"MPosition\"](left, top);\n\n        const normal   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].bullet.look.normal;\n        const look     = new _m_look__WEBPACK_IMPORTED_MODULE_3__[\"MLook\"]();\n        look.addImage(normal);\n\n        const bullet = new _m_bullet__WEBPACK_IMPORTED_MODULE_5__[\"MBullet\"](field, status, position, look);\n\n        return bullet;\n    }\n\n    createEnemy() {\n        if(this.score >= 10) return this.createBoss();\n        \n        const field    = this.field;\n\n        const type     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.type;\n        const width    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.width;\n        const height   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.height;\n        const life     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.life;\n        const score    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.score;\n        const distance = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.distance;\n        const status   = new _m_status__WEBPACK_IMPORTED_MODULE_1__[\"MStatus\"](type, width, height, life, score, distance);\n\n        const position = this.getEnemyAppearancePosition();\n\n        const normal   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.look.normal;\n        const dead     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.look.dead;\n        const look     = new _m_look__WEBPACK_IMPORTED_MODULE_3__[\"MLook\"]();\n        look.addImage(normal);\n        look.addImage(dead);\n\n        const enemy = new _m_enemy__WEBPACK_IMPORTED_MODULE_6__[\"MEnemy\"](field, status, position, look);\n\n        return enemy;\n    }\n\n    createBoss() {\n        const field    = this.field;\n\n        const type     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.type;\n        const width    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.width;\n        const height   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.height;\n        const life     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.life;\n        const score    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.score;\n        const distance = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.distance;\n        const status   = new _m_status__WEBPACK_IMPORTED_MODULE_1__[\"MStatus\"](type, width, height, life, score, distance);\n\n        const left     = (field.width / 2) - (width / 2);\n        const top      = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].field.top - height;\n        const position = new _m_position__WEBPACK_IMPORTED_MODULE_2__[\"MPosition\"](left, top);\n\n        const normal   = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.look.normal;\n        const dead     = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.look.dead;\n        const look     = new _m_look__WEBPACK_IMPORTED_MODULE_3__[\"MLook\"]();\n        look.addImage(normal);\n        look.addImage(dead);\n\n        const boss = new _m_enemy__WEBPACK_IMPORTED_MODULE_6__[\"MEnemy\"](field, status, position, look);\n\n        return boss;\n    }\n\n    // enemyの出現位置を取得する\n    getEnemyAppearancePosition() {\n        let position = null;\n\n        const fw = this.field.width;\n        const fh = this.field.height;\n        const ew = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.width;\n\n        // Enemyの幅で等分するランダムな値を取得する\n        const max = fw / ew;\n        const rand = this.utility.getRandomInt(0, max);\n\n        const left = rand * ew;\n        const top = fh * _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].enemy.top;\n\n        position = new _m_position__WEBPACK_IMPORTED_MODULE_2__[\"MPosition\"](left, top);\n\n        return position;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/script/model/m_factory.js?");

/***/ }),

/***/ "./src/script/model/m_iterator.js":
/*!****************************************!*\
  !*** ./src/script/model/m_iterator.js ***!
  \****************************************/
/*! exports provided: MIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MIterator\", function() { return MIterator; });\n\n\n// イテレータークラス\nclass MIterator {\n    constructor() {\n        this.index = 0;\n        this.collection = new Array();\n    }\n\n    addItem(item) {\n        this.collection.push(item);\n    }\n\n    getItem() {\n        return this.collection[this.index];\n    }\n\n    first() {\n        this.index = this.getFirstIndex();\n    }\n\n    last() {\n        this.index = this.getLastIndex();\n    }\n\n    next() {\n        if(!this.hasNext()) return;\n        this.index++;\n    }\n\n    prev() {\n        if(!this.hasPrev()) return;\n        this.index--;\n    }\n    \n    getCurrentIndex() {\n        return this.index;\n    }\n\n    getFirstIndex() {\n        return 0;\n    }\n\n    getLastIndex() {\n        return this.collection.length - 1;\n    }\n\n    hasNext() {\n        return this.getCurrentIndex() !== this.getLastIndex();\n    }\n\n    hasPrev() {\n        return this.getCurrentIndex() !== this.getFirstIndex()\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_iterator.js?");

/***/ }),

/***/ "./src/script/model/m_look.js":
/*!************************************!*\
  !*** ./src/script/model/m_look.js ***!
  \************************************/
/*! exports provided: MLook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MLook\", function() { return MLook; });\n/* harmony import */ var _m_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m_iterator */ \"./src/script/model/m_iterator.js\");\n\n\n\n\n// 外見を管理するクラス\nclass MLook extends _m_iterator__WEBPACK_IMPORTED_MODULE_0__[\"MIterator\"] {\n    constructor() {\n        super();\n    }\n\n    addImage(src) {\n        const image = new Image();\n        image.src = src;\n        image.onload = this.addItem(image);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_look.js?");

/***/ }),

/***/ "./src/script/model/m_manager.js":
/*!***************************************!*\
  !*** ./src/script/model/m_manager.js ***!
  \***************************************/
/*! exports provided: MManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MManager\", function() { return MManager; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n\n\n\n\nclass MManager {\n    constructor(utility, factory) {\n        this.utility    = utility;\n        this.factory    = factory;\n        this.collection = new Array();\n        this.enemyTime  = new Date();\n        this.status     = '';\n        this.score      = 0;\n    }\n\n    init() {\n        this.status = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.default;\n    }\n\n    addItem(item) {\n        this.collection.push(item);\n    }\n\n    removeItem(item) {\n        this.collection = this.collection.filter(e => e !== item);\n    }\n\n    getCollection() {\n        return this.collection;\n    }\n\n    getPlayer() {\n        return this.collection.find(e => e.getType() === _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].player.type);\n    }\n\n    getBoss() {\n        return this.collection.find(e => e.getType() === _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].boss.type);\n    }\n\n    getStatus() {\n        return this.status;\n    }\n\n    isPlaying() {\n        return this.getStatus() === _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.playing;\n    }\n\n    gameStart() {\n        this.addPlayer();\n        this.status = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.playing;\n    }\n\n    gameStop() {\n        this.status = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.default;\n    }\n\n    gameClear() {\n        this.status = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.gameclear;\n    }\n\n    gameOver() {\n        this.status = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.gameover;\n    }\n\n    update() {\n        this.createEnemy();\n        this.collection.forEach(e => e.update());\n        this.collection.forEach(e => this.collision(e));\n        this.disposeItem();\n    }\n\n    createEnemy() {\n        if(this.score >= 10) return this.addBoss();\n\n        const now = Date.now();\n        if(now - this.enemyTime < _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].time.enemy) return;\n\n        this.enemyTime = now;\n        this.addEnemy();\n    }\n\n    addPlayer() {\n        if(this.getPlayer()) return;\n        const player = this.factory.createPlayer();\n        this.addItem(player);\n    }\n\n    addBullet() {\n        const player = this.getPlayer();\n        const bullet = this.factory.createBullet(player);\n        this.addItem(bullet);\n    }\n\n    addEnemy() {\n        const enemy = this.factory.createEnemy();\n        this.addItem(enemy);\n    }\n\n    addBoss() {\n        if(this.getBoss()) return;\n        const boss = this.factory.createBoss();\n        this.addItem(boss);\n    }\n\n    disposeItem() {\n        for(let e of this.collection) {\n            if(e.isDisposeTarget() === false) continue;\n            \n            this.removeItem(e);\n\n            // TODO: いいやりかた思いついたら変える\n            if(e.getType() === 'enemy')  this.score++;\n            if(e.getType() === 'boss')   this.gameClear();\n            if(e.getType() === 'player') this.gameOver();\n            \n            e = null;\n        }\n    }\n\n    collision(target) {\n        // オブジェクトの中点を取得する\n        const p1 = this.getCenterPosition(target);\n        let p2, checkX, checkY;\n\n        for(let e of this.collection) {\n            if(target === e) continue;\n\n            // オブジェクトの中点を取得する\n            p2 = this.getCenterPosition(e);\n\n            // X軸の重なりを判定\n            checkX = Math.abs(p1.x - p2.x) < p1.w + p2.w;\n            \n            // Y軸の重なりを判定\n            checkY = Math.abs(p1.y - p2.y) < p1.h + p2.h;\n            \n            // どちらかの値がfalseなら衝突している\n            if(checkX === false || checkY === false) continue;\n            \n            target.damage();\n\n            break;\n        }\n    }\n\n    getCenterPosition(object) {\n        let result = null;\n\n        const w = object.getWidth() / 2;\n        const h = object.getHeight() / 2;\n        const x = object.getLeft() + w;\n        const y = object.getTop() + h;\n        \n        result = {x: x, y: y, w: w, h: h};\n\n        return result;\n    }\n\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_manager.js?");

/***/ }),

/***/ "./src/script/model/m_player.js":
/*!**************************************!*\
  !*** ./src/script/model/m_player.js ***!
  \**************************************/
/*! exports provided: MPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MPlayer\", function() { return MPlayer; });\n/* harmony import */ var _m_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m_base */ \"./src/script/model/m_base.js\");\n\n\n\n\n// プレイヤークラス\nclass MPlayer extends _m_base__WEBPACK_IMPORTED_MODULE_0__[\"MBase\"] {\n    constructor(field, status, position, look) {\n        super(field, status, position, look);\n    }\n\n    // 更新する\n    update() {\n        // orverride none;\n    }\n\n    // 左に移動する\n    moveLeft() {\n        const min = 0;\n        if(this.position.getX() <= min) return;\n\n        const x = this.status.getDistance() * - 1;\n        this.position.moveX(x);\n    }\n\n    // 右に移動する\n    moveRight() {\n        const max = this.field.getWidth() - this.status.getWidth();\n        if(this.position.getX() >= max) return;\n\n        const x = this.status.getDistance();\n        this.position.moveX(x);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_player.js?");

/***/ }),

/***/ "./src/script/model/m_position.js":
/*!****************************************!*\
  !*** ./src/script/model/m_position.js ***!
  \****************************************/
/*! exports provided: MPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MPosition\", function() { return MPosition; });\n\n\n// ポジションを管理するクラス\nclass MPosition {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    setX(x) {\n        this.x = x;\n    }\n    \n    getX() {\n        return this.x;\n    }\n\n    setY(y) {\n        this.y = y\n    }\n\n    getY() {\n        return this.y;\n    }\n    \n    move(x, y) {\n        this.moveX(x);\n        this.moveY(y);\n    }\n\n    moveX(x) {\n        this.x = this.getX() + x;\n    }\n\n    moveY(y) {\n        this.y = this.getY() + y;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/model/m_position.js?");

/***/ }),

/***/ "./src/script/model/m_status.js":
/*!**************************************!*\
  !*** ./src/script/model/m_status.js ***!
  \**************************************/
/*! exports provided: MStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MStatus\", function() { return MStatus; });\n\n\n// ステータス管理クラス\nclass MStatus {\n    constructor(type, width, height, life, score, distance) {\n        this.type     = type;\n        this.width    = width;\n        this.height   = height;\n        this.life     = life;\n        this.score    = score;\n        this.distance = distance;\n    }\n\n    getType() {\n        return this.type;\n    }\n\n    getWidth() {\n        return this.width;\n    }\n\n    getHeight() {\n        return this.height;\n    }\n\n    getLife() {\n        return this.life;\n    }\n    \n    getScore() {\n        return this.score;\n    }\n\n    getDistance() {\n        return this.distance;\n    }\n\n    damage() {\n        this.life--;\n    }\n\n    isDead() {\n        return this.life <= 0;\n    }\n}\n\n//# sourceURL=webpack:///./src/script/model/m_status.js?");

/***/ }),

/***/ "./src/script/util/utility.js":
/*!************************************!*\
  !*** ./src/script/util/utility.js ***!
  \************************************/
/*! exports provided: Utility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Utility\", function() { return Utility; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n\n\n\n\n// ユーティリティクラス\nclass Utility {\n    // min以上、max未満の整数を取得する\n    getRandomInt(min, max) {\n        min = Math.ceil(min);\n        max = Math.floor(max);\n        return Math.floor(Math.random() * (max - min)) + min;\n    }\n    \n    // TODO: いい方法を考えたら変える\n    controlDom(status) {\n        const btnId    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].dom.button.id;\n        const msgId    = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].dom.message.id;\n        const startBtn = document.querySelector(`#${btnId.start}`);\n        const resetBtn = document.querySelector(`#${btnId.reset}`);\n        const stopBtn  = document.querySelector(`#${btnId.stop}`);\n        const msgClear = document.querySelector(`#${msgId.gameclear}`);\n        const msgOver  = document.querySelector(`#${msgId.gameover}`);\n\n        if(!startBtn || !resetBtn || !stopBtn || !msgClear || !msgOver) return;\n        \n        switch (status) {\n            case _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.default:\n                startBtn.style.display = 'block';\n                resetBtn.style.display = 'block';\n                stopBtn.style.display  = 'none';\n                msgClear.style.display = 'none';\n                msgOver.style.display  = 'none';\n                break;\n            case _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.playing:\n                startBtn.style.display = 'none';\n                resetBtn.style.display = 'none';\n                stopBtn.style.display  = 'block';\n                msgClear.style.display = 'none';\n                msgOver.style.display  = 'none';\n                break;\n            case _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.gameclear:\n                startBtn.style.display = 'none';\n                resetBtn.style.display = 'block';\n                msgClear.style.display = 'block';\n                msgOver.style.display  = 'none';\n                break;\n            case _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].game.status.gameover:\n                startBtn.style.display = 'none';\n                resetBtn.style.display = 'block';\n                stopBtn.style.display  = 'none';\n                msgClear.style.display = 'none';\n                msgOver.style.display  = 'block';\n                break;\n            default:\n                break;\n        }\n    }\n\n    getConfig() {\n        return _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"];\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/util/utility.js?");

/***/ }),

/***/ "./src/script/view/v_base.js":
/*!***********************************!*\
  !*** ./src/script/view/v_base.js ***!
  \***********************************/
/*! exports provided: VBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VBase\", function() { return VBase; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n'usestrict'\n\n\n\n// ゲームのフィールドクラス\nclass VBase {\n    constructor() {\n        this.width     = null;\n        this.height    = null;\n        this.left      = null;\n        this.top       = null;\n        this.domBody   = null;\n        this.domCanvas = null;\n        this.context   = null;\n    }\n\n    getWidth() {\n        return this.width;\n    }\n\n    getHeight() {\n        return this.height;\n    }\n\n    getLeft() {\n        return this.left;\n    }\n\n    getTop() {\n        return this.top;\n    }\n\n    init() {\n        this.style();\n        this.draw();\n    }\n\n    resize() {\n        this.style();\n    }\n\n    style() {\n        this.size();\n        this.position();\n    }\n\n    size() {\n        throw new Error(_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].message.abscall);\n    }\n\n    position() {\n        throw new Error(_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].message.abscall);\n    }\n\n    draw() {\n        throw new Error(_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].message.abscall);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/view/v_base.js?");

/***/ }),

/***/ "./src/script/view/v_field.js":
/*!************************************!*\
  !*** ./src/script/view/v_field.js ***!
  \************************************/
/*! exports provided: VField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VField\", function() { return VField; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/script/config.js\");\n/* harmony import */ var _v_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v_base */ \"./src/script/view/v_base.js\");\n\n\n\n\n\n// ゲームのフィールドクラス\nclass VField extends _v_base__WEBPACK_IMPORTED_MODULE_1__[\"VBase\"] {\n    constructor() {\n        super();\n        this.domBody   = document.querySelector('body');\n        this.domCanvas = document.querySelector('#js-field');\n        this.context   = this.domCanvas.getContext('2d');\n    }\n\n    resize(collection) {\n        super.resize();\n        this.draw(collection);\n    }\n\n    size() {\n        this.width  = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].field.width;\n        this.height = this.domBody.clientHeight;\n        \n        this.domCanvas.setAttribute('width',`${this.width}`);\n        this.domCanvas.setAttribute('height', `${this.height}`);\n    }\n\n    position() {\n        this.top  = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].field.top;\n        this.left = (this.domBody.clientWidth / 2) - (this.width / 2);\n\n        this.domCanvas.style.position = 'absolute';\n        this.domCanvas.style.top = `${this.top}px`;\n        this.domCanvas.style.left = `${this.left}px`;\n    }\n\n    draw(collection) {\n        if(!collection) return;\n\n        let image  = null;\n        let left   = null;\n        let top    = null;\n        let width  = null;\n        let height = null;\n\n        for(let e of collection) {\n            image  = e.getLook();\n            left   = e.getLeft();\n            top    = e.getTop();\n            width  = e.getWidth();\n            height = e.getHeight();\n            \n            this.context.drawImage(e.getLook(), left, top, width, height);\n        }\n    }\n\n    erase() {\n        this.context.clearRect(0, 0, this.width, this.height);\n    }\n\n    update(collection) {\n        this.erase();\n        this.draw(collection)\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/view/v_field.js?");

/***/ }),

/***/ "./src/script/view/v_manager.js":
/*!**************************************!*\
  !*** ./src/script/view/v_manager.js ***!
  \**************************************/
/*! exports provided: VManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VManager\", function() { return VManager; });\n\n\n// Viewの管理クラス\nclass VManager {\n    constructor(background, field) {\n        this.background = background;\n        this.field      = field;\n        this.domBody    = document.querySelector('body');\n        this.domFCanvas = document.querySelector('#field');\n        this.domBCanvas = document.querySelector('#background');\n    }\n\n    getBackground() {\n        return this.background;\n    }\n\n    getField() {\n        return this.field;\n    }\n\n    init() {\n        this.background.init();\n        this.field.init();\n    }\n\n    resize(collection) {\n        this.background.resize();\n        this.field.resize(collection);\n    }\n\n    update(collection) {\n        this.field.update(collection);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/view/v_manager.js?");

/***/ }),

/***/ "./src/script/view/v_space.js":
/*!************************************!*\
  !*** ./src/script/view/v_space.js ***!
  \************************************/
/*! exports provided: VSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VSpace\", function() { return VSpace; });\n/* harmony import */ var _v_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v_base */ \"./src/script/view/v_base.js\");\n\n\n\n\n// 背景クラス\nclass VSpace extends _v_base__WEBPACK_IMPORTED_MODULE_0__[\"VBase\"] {\n    constructor(utility) {\n        super();\n        this.utility   = utility;\n        this.domBody   = document.querySelector('body');\n        this.domCanvas = document.querySelector('#js-space');\n        this.context   = this.domCanvas.getContext('2d');\n    }\n\n    resize() {\n        this.size();\n        this.draw();\n    }\n\n    size() {\n        if(!this.domBody || !this.domCanvas) return;\n\n        this.width  = this.domBody.clientWidth;\n        this.height = this.domBody.clientHeight;\n        \n        this.domCanvas.setAttribute('width',`${this.width}`);\n        this.domCanvas.setAttribute('height', `${this.height}`);\n    }\n\n    position() {\n        if(!this.domCanvas) return;\n\n        this.top  = 0;\n        this.left = 0;\n\n        this.domCanvas.style.position = 'absolute';\n        this.domCanvas.style.top = `${this.top}px`;\n        this.domCanvas.style.left = `${this.left}px`;\n    }\n    \n    draw() {\n        if(!this.width || !this.height || !this.utility || !this.context) return;\n\n        const width   = this.width;\n        const height  = this.height;\n        const utility = this.utility;\n        const context = this.context;\n\n        context.fillStyle = '#FFFFFF';\n        \n        for(let i = 0; i < 1000; i++) {\n            let x = utility.getRandomInt(0, width);\n            let y = utility.getRandomInt(0, height);\n            context.fillRect(x, y, 1, 1);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script/view/v_space.js?");

/***/ })

/******/ });