'use strict'

import {MNonPlayer} from './m_character';

export class MEnemy extends MNonPlayer {
    constructor(size, position, look, status, field) {
        super(size, position, look, status, field);
    }

    update() {
        super.update();

        const fy = this.field.getTop();
        const fh = this.field.getHeight()
        const max = (fy + fh) * 0.8;
        if(this.getTop() > max) this.dead();
    }
}
