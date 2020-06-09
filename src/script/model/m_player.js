'use strict'

import {MBase} from './m_base';

// プレイヤークラス
export class MPlayer extends MBase {
    constructor(field, status, position, look) {
        super(field, status, position, look);
    }

    // 更新する
    update() {
        // orverride none;
    }

    // 左に移動する
    moveLeft() {
        const min = 0;
        if(this.position.getX() <= min) return;

        const x = this.status.getDistance() * - 1;
        this.position.moveX(x);
    }

    // 右に移動する
    moveRight() {
        const max = this.field.getWidth() - this.status.getWidth();
        if(this.position.getX() >= max) return;

        const x = this.status.getDistance();
        this.position.moveX(x);
    }
}
