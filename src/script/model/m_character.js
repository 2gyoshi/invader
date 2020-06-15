'use strict'

import { M_Base } from './m_base';

export class M_Character extends M_Base {
    constructor(size, position, look, status, field) {
        super(size, position)
        this._look      = look;
        this._status    = status;
        this._field     = field;
        this._isDispose = false;
    }

    getLook() {
        return this._look.getItem();
    }

    getType() {
        return this._status.type;
    }

    getDist() {
        return this._status.dist;
    }

    getScore() {
        return this._status.score;
    }

    getGrace() {
        return this._status.grace;
    }

    isDead() {
        return this._status.life <= 0;
    }

    get isDispose() {
        return this._isDispose;
    }

    update() {
        throw new Error();
    }

    hit() {
        this._status.hit();
        if(this.isDead()) this.dead();
    }

    // ライフが0になった後も処理したいためここではdisposeしない
    dead() {
        this._look.last();
        const time = this.getGrace();
        setTimeout(this.makeDisposeTarget.bind(this), time);
    }

    makeDisposeTarget() {
        this._isDispose = true;
    }

    dispose() {
        return this._status.getScore();
    }
}

// NPCクラス
export class M_NonPlayer extends M_Character {
    constructor(size, position, look, status) {
        super(size, position, look, status);
    }

    update() {
        this.move();
    }

    move() {
        const dist = this.getDist();
        this.position.moveY(dist);
    }
}