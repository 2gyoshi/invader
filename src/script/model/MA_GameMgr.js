'use strict'

export class MA_GameMgr {
    constructor(ruleMgr, charaMgr, scoreMgr, timeMgr, stateMgr) {
        this._ruleMgr  = ruleMgr;
        this._charaMgr = charaMgr;
        this._scoreMgr = scoreMgr;
        this._timeMgr  = timeMgr;
        this._stateMgr = stateMgr;
    }

    init() {
        this.stop();
    }

    getPlayer() {
        return this._charaMgr.getPlayer();
    }

    getBoss() {
        return this._charaMgr.getBoss();
    }

    // TODO: rename
    getCollection() {
        return this._charaMgr.getList();
    }

    getField() {
        return this.field;
    }

    getScore() {
        return this._scoreMgr.score;
    }

    isPlaying() {
        return this._stateMgr.isPlaying;
    }

    start() {
        this.addPlayer();
        this._stateMgr.isPlaying = true;
    }

    stop() {
        this._stateMgr.isPlaying = false;
    }

    update() {
        this.changeState();
        this.createEnemy();
        this._charaMgr.update();
        this._ruleMgr.update();
        this.dispose();
    }

    changeState() {
        if(this.getScore() < 0)  return this.stop();
        if(this.getScore() > 99) return this.stop();
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
