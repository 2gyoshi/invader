'use strict'

// ゲームの状態を管理するクラス
export class StateManager {
    constructor() {
        this._state = false;
    }

    getState() {
        return this._state;
    }

    start() {
        this._state = true;
    }

    stop() {
        this._state = false;
    }
}
