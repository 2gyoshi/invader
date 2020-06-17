'use strict'

import { ControllerBase } from './controller-base';

export class PlayerController extends ControllerBase {
    constructor(charaMgr, areaMgr) {
        super();
        this._charaMgr = charaMgr;
        this._areaMgr  = areaMgr;
    }

    run(event) {
        if(event.eventName === 'left')  return this.moveLeft();
        if(event.eventName === 'right') return this.moveRight();
        if(event.eventName === 'shoot') return this.shoot();
    }

    moveLeft(){
        const player = this._charaMgr.getPlayer();
        const min = 0;
        if(player.getLeft() <= min) return;

        player.moveLeft();
    }

    moveRight(){
        const field  = this._areaMgr.getField();
        const player = this._charaMgr.getPlayer();
        const max = field.getWidth() - player.getWidth();
        if(player.getLeft() >= max) return;

        player.moveRight();
    }

    shoot(){
        const player = this._charaMgr.getPlayer();
        player.shoot();
    }
}

