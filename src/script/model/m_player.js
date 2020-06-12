'use strict'

import {M_Character} from './m_character';

// プレイヤークラス
export class M_Player extends M_Character {
    constructor(size, position, look, status) {
        super(size, position, look, status);
    }

    // 何もしない
    update() {
        // orverride none;
    }

    moveLeft() {
        const dist = this.getDist() * - 1;
        this.position.moveX(dist);
    }

    moveRight() {
        const dist = this.getDist();
        this.position.moveX(dist);
    }
}
