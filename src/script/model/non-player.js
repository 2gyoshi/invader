'use strict'

import { CharacterBase } from './character-base';

// NPCクラス
export class NonPlayer extends CharacterBase {
    constructor(size, position, look, status) {
        super(size, position, look, status);
    }

    update() {
        this.move();
    }

    move() {
        const dist = this.getDist();
        this.position.moveY(dist);
    }
}