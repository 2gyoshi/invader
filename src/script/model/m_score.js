'use strict'

// スコアを管理するクラス
export class M_Score {
    constructor() {
        this.score = 0;
    }

    changeScore(score) {
        this.score += score;
    }

    getScore() {
        return this.score;
    }
}