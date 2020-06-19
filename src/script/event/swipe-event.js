'use strict'

import { Utility } from '../util/utility';
import { EventBase } from './event-base';

// スワイプイベントクラス
export class SwipeEvent extends EventBase {
    constructor() {
        super();
        this._x1 = 0;
        this._x2 = 0;
    }

    init() {
        window.addEventListener('touchstart', this.touchStart.bind(this), {passive: false});
        window.addEventListener('touchmove', this.touchMove.bind(this), {passive: false});
        window.addEventListener('touchend', this.touchEnd.bind(this), false);
    }

    touchStart(event) {
        event.preventDefault();
        this._x1 = event.touches[0].pageX;
        // 前回の座標が残ってるとタッチ時に移動してしまうことがある
        this._x2   = event.touches[0].pageX;
    }

    touchMove(event) {
        event.preventDefault();
        this._x2 = event.changedTouches[0].pageX;
    }

    touchEnd() {
        if (this._x1 > this._x2) return this.moveLeft();
        if (this._x1 < this._x2) return this.moveRight();
    }

    moveLeft() {
        if ((this._x1 - this._x2) < Utility.getConfigSwipeDist()) return;
        const type = Utility.getConfigEventType();
        this._type = type.left;
        this.notify();
    }

    moveRight() {
        if((this._x2 - this._x1) < Utility.getConfigSwipeDist()) return;
        const type = Utility.getConfigEventType();
        this._type = type.right;
        this.notify();
    }
}
