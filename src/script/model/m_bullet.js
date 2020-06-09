'use strict'

import {MNonPlayer} from './m_character';

export class MBullet extends MNonPlayer {
    constructor(size, position, look, status, field) {
        super(size, position, look, status, field);
    }

    update() {
        super.update();

        const min = this.field.getTop();
        if(this.getTop() <= min) this.dead();
    }

    dead() {
        this.makeDisposeTarget();
    }
}
