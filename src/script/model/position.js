'use strict'

// ポジションを管理するクラス
export class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
    
    move(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
    }

    moveX(x) {
        this.x = this.x + x;
    }

    moveY(y) {
        this.y = this.y + y;
    }
}
