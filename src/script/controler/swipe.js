'use strict'

import {config} from '../config';

// スワイプイベントクラス
export class Swipe {
    constructor(model) {
        this.model = model;
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
        if(this.model.isPlaying() === false) return;
        if ((this.startX - this.endX) < config.event.swipe.dist) return;

        const player = this.model.getPlayer();
        player.moveLeft();
    }

    moveRight() {
        if(this.model.isPlaying() === false) return;
        if((this.endX - this.startX) < config.event.swipe.dist) return;

        const player = this.model.getPlayer();
        player.moveRight();
    }
}
