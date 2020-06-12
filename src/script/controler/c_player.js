'use strict'

import {C_Base} from './c_base';

export class C_Player extends C_Base {
    constructor(model) {
        super();
        this.model = model;
    }

    run(event) {
        if(event.getEventName() === 'left')  return this.moveLeft();
        if(event.getEventName() === 'right') return this.moveRight();
        if(event.getEventName() === 'shoot') return this.shoot();
    }

    moveLeft(){
        const player = this.model.getPlayer();
        const min = 0;
        if(player.getLeft() <= min) return;

        player.moveLeft();
    }

    moveRight(){
        const field = this.model.getField();
        const player = this.model.getPlayer();
        const max = field.getWidth() - player.getWidth();
        if(player.getLeft() >= max) return;

        player.moveRight();
    }

    shoot(){
        // TODO: 本当はPlayerにもたせたい
        this.model.addBullet();
    }
}

