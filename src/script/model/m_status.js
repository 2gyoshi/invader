'use strict'

// ステータス管理クラス
export class MStatus {
    constructor(type, life, dist, score, grace) {
        this.type  = type;
        this.life  = life;
        this.dist  = dist;
        this.score = score;
        this.grace = grace;
    }

    getType() {
        return this.type;
    }
    
    getLife() {
        return this.life;
    }

    getDist() {
        return this.dist;
    }

    getScore() {
        return this.score;
    }

    getGrace() {
        return this.grace;
    }

    damage() {
        this.life--;
    }

    isDead() {
        return this.life <= 0;
    }
}