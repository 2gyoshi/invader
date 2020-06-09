'use strict'

import {MNonPlayer} from './m_base';

export class MBullet extends MNonPlayer {
    constructor(field, status, position, look) {
        super(field, status, position, look);
    }

    update() {
        super.update();

        const min = this.field.getTop();
        if(this.position.getY() <= min) this.dead();
    }

    dead() {
        this.makeDisposeTarget();
    }
}
