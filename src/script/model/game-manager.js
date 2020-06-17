'use strict'

export class GameManager {
    constructor(ruleMgr, charaMgr, scoreMgr, timeMgr, stateMgr) {
        this._ruleMgr  = ruleMgr;
        this._charaMgr = charaMgr;
        this._scoreMgr = scoreMgr;
        this._timeMgr  = timeMgr;
        this._stateMgr = stateMgr;
        this._isPlaying = false;
    }

    isPlaying() {
        return this._isPlaying;
    }

    isGameClear() {
        return this.getScore() > 99;
    }

    isGameOver() {
        return this.getScore() < 0;
    }

    getScore() {
        return this._scoreMgr.score;
    }

    init() {
        this._isPlaying = false;
    }

    start() {
        this.addPlayer();
        this._isPlaying = true;
    }

    stop() {
        this._isPlaying = false;
    }

    update() {
        this.createEnemy();
        this._charaMgr.update();
        this._ruleMgr.update();
        this.dispose();
    }

    createEnemy() {
        if(this.getScore() > 9) return this.addBoss();
        if(this._timeMgr.isAppearTime() === true) return this.addEnemy() ;
    }

    addPlayer() {
        this._charaMgr.addPlayer();
    }

    addEnemy() {
        this._charaMgr.addEnemy();
    }

    addBoss() {
        this._charaMgr.addBoss();
    }

    dispose() {
        const array = this._charaMgr.getList();
        for(let e of array) {
            if(e.getIsDispose() === false) continue;

            // TODO: いいやりかた思いついたら変える
            this._scoreMgr.changeScore(e.getScore());
            this._charaMgr.removeCharacter(e);
            e = null;
        }
    }
}
