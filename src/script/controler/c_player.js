'use strict'

import {C_Base} from './c_base';

export class C_Player extends C_Base {
    constructor(model) {
        super();
        this.model = model;
    }

    run(event) {
        if(event.getEventName() === 'left')  return this.left();
        if(event.getEventName() === 'right') return this.right();
        if(event.getEventName() === 'shoot') return this.shoot();
    }

    left(){
        const player = this.model.getPlayer();
        player.moveLeft();
    }

    right(){
        const player = this.model.getPlayer();
        player.moveRight();
    }

    shoot(){
        // TODO: 本当はPlayerにもたせたい
        this.model.addBullet();
    }
}

