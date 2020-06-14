'use strict'

import { config } from '../config/config';

// Enemyタイマークラス
export class M_EnemyTimer {
    constructor() {
        this.preAppearTime = Date.now();
    }

    isAppearTime() {
        const now = Date.now();
        if(now - this.preAppearTime < config.time.enemy) return false;

        this.preAppearTime = now;
        return true;
    }
}
