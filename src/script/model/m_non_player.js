'use strict'

import { M_Character } from './m_character';

// NPCクラス
export class M_NonPlayer extends M_Character {
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