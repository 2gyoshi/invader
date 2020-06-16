'use strict'

import { MC_Character } from './MC_Character';

// NPCクラス
export class MC_NonPlayer extends MC_Character {
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