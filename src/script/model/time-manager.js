'use strict'

import { Utility } from '../util/utility';

export class TimeManager {
    constructor() {
        this.preAppearTime = Date.now();
    }

    isAppearTime() {
        const now      = Date.now();
        const config   = Utility.getConfigEnemy();
        if(now - this.preAppearTime < config.interval) return false;

        this.preAppearTime = now;
        return true;
    }
}
