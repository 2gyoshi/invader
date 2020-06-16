'use strict'

import { config } from '../config/config';

// Enemyタイマークラス
export class MA_EnemyTimer {
    constructor() {
        this.preAppearTime = Date.now();
    }

    isAppearTime() {
        const now = Date.now();
        if(now - this.preAppearTime < config.enemy.interval) return false;

        this.preAppearTime = now;
        return true;
    }
}
