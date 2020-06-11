'use strict'

// ポジションを管理するクラス
export class M_Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    setX(x) {
        this.x = x;
    }
    
    getX() {
        return this.x;
    }

    setY(y) {
        this.y = y
    }

    getY() {
        return this.y;
    }
    
    move(x, y) {
        this.moveX(x);
        this.moveY(y);
    }

    moveX(x) {
        this.x = this.getX() + x;
    }

    moveY(y) {
        this.y = this.getY() + y;
    }
}
