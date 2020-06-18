'use strict'

export class ModelManager {
    constructor(gameMgr, areaMgr, charaMgr) {
        this._gameMgr  = gameMgr;
        this._areaMgr  = areaMgr;
        this._charaMgr = charaMgr;
    }

    init() {
        this._gameMgr.init();
    }

    start() {
        this._gameMgr.start();
    }

    stop() {
        this._gameMgr.stop();
    }

    reset() {
        this._gameMgr.reset();
    }

    getGameManager() {
        return this._gameMgr;
    }

    getAreaManager() {
        return this._areaMgr;
    }
    
    getCharaManager() {
        return this._charaMgr;
    }

    getSpace() {
        return this._areaMgr.getSpace();
    }

    getField() {
        return this._areaMgr.getField();
    }

    getPlayer() {
        return this._charaMgr.getPlayer();
    }

    getCharacterList() {
        return this._charaMgr.getCharacterList();
    }

    getScore() {
        return this._gameMgr.getScore();
    }

    isPlaying() {
        return this._gameMgr.isPlaying();
    }

    isGameClear() {
        return this._gameMgr.isGameClear()
    }

    isGameOver() {
        return this._gameMgr.isGameOver();
    }

    update() {
        this._gameMgr.update();
    }

    resize() {
        this._areaMgr.resize();
    }
}
