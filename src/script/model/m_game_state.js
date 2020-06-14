'use strict'

// ゲームの状態を管理するクラス
export class M_GameState {
    constructor() {
        this.isPlaying = false;
    }

    getIsPlaying() {
        return this.isPlaying;
    }

    start() {
        this.isPlaying = true;
    }

    stop() {
        this.isPlaying = false;
    }
}
