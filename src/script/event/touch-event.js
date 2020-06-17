'use strict'

import { config } from '../config/config';
import { EventBase } from './event-base';

// タッチイベントクラス
export class TouchEvent extends EventBase {
    constructor() {
        super();
        this._x1 = 0;
        this._x2 = 0
    }

    init() {
        window.addEventListener("touchstart", this.touchStart.bind(this), {passive: false});
        window.addEventListener("touchmove", this.touchMove.bind(this), {passive: false});
        window.addEventListener("touchend", this.touchEnd.bind(this), {passive: false});
    }

    touchStart(event) {
        event.preventDefault();
        this._x1 = event.touches[0].pageX;
        // 前回の座標が残ってるとタッチ時が反応しなくなることがある
        this._x2 = event.touches[0].pageX;
    }

    touchMove(event) {
        event.preventDefault();
        this._x2 = event.changedTouches[0].pageX;
    }

    touchEnd() {
        if(Math.abs(this._x2 - this._x1) >= config.event.swipe.dist) return;
        this.shoot();
    }

    shoot() {
        this._eventName = config.event.type.shoot;
        this.notify();
    }
}
