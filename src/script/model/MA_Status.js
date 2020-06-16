'use strict'

// ステータス管理クラス
export class MA_Status {
    constructor(type, life, dist, score, grace) {
        this._type  = type;
        this._life  = life;
        this._dist  = dist;
        this._score = score;
        this._grace = grace;
    }

    get type() {
        return this._type;
    }
    
    get life() {
        return this._life;
    }

    get dist() {
        return this._dist;
    }

    get score() {
        return this._score;
    }

    get grace() {
        return this._grace;
    }

    hit() {
        this._life--;
    }
}