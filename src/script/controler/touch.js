'use strict'

import {config} from '../config';

// タッチイベントクラス
export class Touch {
    constructor(model) {
        this.model  = model;
        this.startX = 0;
        this.endX   = 0
    }

    init() {
        window.addEventListener("touchstart", this.touchStart.bind(this), {passive: false});
        window.addEventListener("touchmove", this.touchMove.bind(this), {passive: false});
        window.addEventListener("touchend", this.touchEnd.bind(this), {passive: false});
    }

    touchStart(event) {
        event.preventDefault();
        this.startX = event.touches[0].pageX;
    }

    touchMove(event) {
        event.preventDefault();
        this.endX = event.changedTouches[0].pageX;
    }

    touchEnd() {
        if(Math.abs(this.endX - this.startX) >= config.event.swipe.dist) return;

        this.shoot();
    }

    shoot() {
        if(this.model.isPlaying() === false) return;
        this.model.addBullet();
    }
}
