'use strict'

import { config } from '../config/config';

// Enemyタイマークラス
export class M_EnemyTimer {
    constructor() {
        this.preApperTime = Date.now();
    }

    update() {
        const now = Date.now();
        if(now - this.preApperTime < config.time.enemy) return false;

        this.preApperTime = now;
        return true;
    }
}
