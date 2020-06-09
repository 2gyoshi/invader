'use strict'

// ゲームオブジェクトのベースクラス
export class MBase {
    constructor(size, position) {
        this.size      = size;
        this.position  = position;
    }

    getWidth() {
        return this.size.getWidth();
    }

    getHeight() {
        return this.size.getHeight();
    }

    getLeft() {
        return this.position.getX();
    }

    getTop() {
        return this.position.getY();
    }

    size() {
        throw new Error();
    }

    resize() {
        throw new Error();
    }

    move() {
        throw new Error();
    }
}
