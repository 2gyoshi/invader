'use strict'

import { ControllerBase } from './controller-base';

export class PlayerController extends ControllerBase {
    constructor(model) {
        super();
        this._model = model;
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
        const field  = this._model.getField();
        const player = this._model.getPlayer();
        const max = field.getWidth() - player.getWidth();
        if(player.getLeft() >= max) return;

        player.moveRight();
    }

    shoot(){
        const player = this._model.getPlayer();
        player.shoot();
    }
}

