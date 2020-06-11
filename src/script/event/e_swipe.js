'use strict'

import {config} from '../config';
import {E_Base} from './e_base';

// スワイプイベントクラス
export class E_Swipe extends E_Base {
    constructor() {
        super();
        this.startX = 0;
        this.endX   = 0;
    }

    init() {
        window.addEventListener('touchstart', this.touchStart.bind(this), {passive: false});
        window.addEventListener('touchmove', this.touchMove.bind(this), {passive: false});
        window.addEventListener('touchend', this.touchEnd.bind(this), false);
    }

    touchStart(event) {
        event.preventDefault();
        this.startX = event.touches[0].pageX;
        // 前回の座標が残ってるとタッチ時に移動してしまうことがある
        this.endX   = event.touches[0].pageX;
    }

    touchMove(event) {
        event.preventDefault();
        this.endX = event.changedTouches[0].pageX;
    }

    touchEnd() {
        if (this.startX > this.endX) return this.moveLeft();
        if (this.startX < this.endX) return this.moveRight();
    }

    moveLeft() {
        if ((this.startX - this.endX) < config.event.swipe.dist) return;
        this.setEventName('left');
        this.notify();
    }

    moveRight() {
        if((this.endX - this.startX) < config.event.swipe.dist) return;
        this.setEventName('right');
        this.notify();
    }
}
