'use strict'

import {C_Base} from './c_base';

export class C_Player extends C_Base {
    constructor(model) {
        super(model, null);
    }

    run(event) {
        if(event.eventName === 'left')  return this.moveLeft();
        if(event.eventName === 'right') return this.moveRight();
        if(event.eventName === 'shoot') return this.shoot();
    }

    moveLeft(){
        const player = this._model.getPlayer();
        const min = 0;
        if(player.getLeft() <= min) return;

        player.moveLeft();
    }

    moveRight(){
        const field = this._model.getField();
        const player = this._model.getPlayer();
        const max = field.getWidth() - player.getWidth();
        if(player.getLeft() >= max) return;

        player.moveRight();
    }

    shoot(){
        // TODO: 本当はPlayerにもたせたい
        this._model.addBullet();
    }
}

