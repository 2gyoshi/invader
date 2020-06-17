'use strict'

// ゲームの状態を管理するクラス
export class StateManager {
    constructor() {
        this._state = false;
    }

    getState() {
        return this._state;
    }

    setState(state) {
        this._state = state;
    }
}
