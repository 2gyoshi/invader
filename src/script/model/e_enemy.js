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

export class M_Score {
    constructor() {
        this.score = 0;
    }

    changeScore(score) {
        this.score += score;
    }

    getScore() {
        return this.score;
    }
}