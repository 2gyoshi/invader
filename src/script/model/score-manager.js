'use strict'

// スコアを管理するクラス
export class ScoreManager {
    constructor() {
        this._score = 0;
    }

    changeScore(score) {
        this._score += score;
    }

    get score() {
        return this._score;
    }
}