'use strict'

import {MCharacter} from './m_character';

// プレイヤークラス
export class MPlayer extends MCharacter {
    constructor(size, position, look, status, field) {
        super(size, position, look, status, field);
    }

    // 何もしない
    update() {
        // orverride none;
    }

    moveLeft() {
        const min = 0;
        if(this.getLeft() <= min) return;

        const dist = this.getDist() * - 1;
        this.position.moveX(dist);
    }

    moveRight() {
        const max = this.field.getWidth() - this.getWidth();
        if(this.getLeft() >= max) return;

        const dist = this.getDist();
        this.position.moveX(dist);
    }
}
