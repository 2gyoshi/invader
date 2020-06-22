'use strict'

export class GameManager {
    constructor(charaMgr, ruleMgr, scoreMgr, timeMgr, stateMgr) {
        this._charaMgr = charaMgr;
        this._ruleMgr  = ruleMgr;
        this._scoreMgr = scoreMgr;
        this._timeMgr  = timeMgr;
        this._stateMgr = stateMgr;
    }

    isPlaying() {
        return this._stateMgr.getState();
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
        // do nothing
    }

    start() {
        this._stateMgr.start();
        this._charaMgr.addPlayer();
    }

    stop() {
        this._stateMgr.stop();
    }

    update() {
        this.createEnemy();
        this._charaMgr.update();
        this._ruleMgr.update();
        this.cleanUp();
    }

    createEnemy() {
        if(this.getScore() > 9) return this.addBoss();
        if(this._timeMgr.isAppearTime() === true) return this.addEnemy();
    }

    addEnemy() {
        this._charaMgr.addEnemy();
    }

    addBoss() {
        this._charaMgr.addBoss();
    }

    cleanUp() {
        let score = 0;
        const target = this._charaMgr.getDisposeTaget();
        for(const e of target) score += e.getScore();
        this._scoreMgr.changeScore(score);
        this._charaMgr.disposeCharacter();
    }
}
