'use strict'

export class GameManager {
    constructor(ruleMgr, charaMgr, scoreMgr, timeMgr, stateMgr) {
        this._ruleMgr  = ruleMgr;
        this._charaMgr = charaMgr;
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
        this.dispose();
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

    dispose() {
        const list = this._charaMgr.getCharacterList();
        for(let e of list) {
            if(e.getIsDispose() === false) continue;
            this._charaMgr.removeCharacter(e);
            this._scoreMgr.changeScore(e.getScore());
            e = null;
        }
    }
}
