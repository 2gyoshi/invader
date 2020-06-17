'use strict'

import { config } from '../config/config';

export class TimeManager {
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
