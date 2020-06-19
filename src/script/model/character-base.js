'use strict'

import { GameObjectBase } from './game-object-base';

export class CharacterBase extends GameObjectBase {
    constructor(size, position, look, status) {
        super(size, position)
        this._look      = look;
        this._status    = status;
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

    getIsDispose() {
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
        const score = this.getScore();
        
        this._position = null;
        this._size     = null;
        this._look     = null;
        this._status   = null;
        this._field    = null;
        
        return score;
    }
}
