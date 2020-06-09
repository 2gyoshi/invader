'use strict'

// ステータス管理クラス
export class MStatus {
    constructor(type, width, height, life, score, distance) {
        this.type     = type;
        this.width    = width;
        this.height   = height;
        this.life     = life;
        this.score    = score;
        this.distance = distance;
    }

    getType() {
        return this.type;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getLife() {
        return this.life;
    }
    
    getScore() {
        return this.score;
    }

    getDistance() {
        return this.distance;
    }

    damage() {
        this.life--;
    }

    isDead() {
        return this.life <= 0;
    }
}