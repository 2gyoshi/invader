'use strict'

// ゲームの状態を管理するクラス
export class M_GameState {
    constructor() {
        this._isPlaying = false;
    }

    get isPlaying() {
        return this._isPlaying;
    }

    set isPlaying(bool) {
        this._isPlaying = bool;
    }
}
