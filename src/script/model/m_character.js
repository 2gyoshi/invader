'use strict'

import {M_Base} from './m_base';

export class M_Character extends M_Base {
    constructor(size, position, look, status, field) {
        super(size, position)
        this.look      = look;
        this.status    = status;
        this.field     = field;
        this.isDispose = false;
    }

    getLook() {
        return this.look.getItem();
    }

    getType() {
        return this.status.getType();
    }

    getDist() {
        return this.status.getDist();
    }

    getScore() {
        return this.status.getScore();
    }

    getGrace() {
        return this.status.getGrace();
    }

    isDead() {
        return this.status.isDead();
    }

    isDisposeTarget() {
        return this.isDispose;
    }

    update() {
        throw new Error();
    }

    hit() {
        this.status.hit();
        if(this.isDead()) this.dead();
    }

    // ライフが0になった後も処理したいためここではdisposeしない
    dead() {
        this.look.last();
        const time = this.getGrace();
        setTimeout(this.makeDisposeTarget.bind(this), time);
    }

    makeDisposeTarget() {
        this.isDispose = true;
    }

    dispose() {
        return this.status.getScore();
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