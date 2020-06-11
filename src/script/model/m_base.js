'use strict'

// ゲームオブジェクトのベースクラス
export class M_Base {
    constructor(size, position) {
        this.size      = size;
        this.position  = position;
    }

    setWidth(w) {
        this.size.setWidth(w);
    }

    getWidth() {
        return this.size.getWidth();
    }

    setHeight(h) {
        this.size.setHeight(h);
    }

    getHeight() {
        return this.size.getHeight();
    }

    setLeft(x) {
        this.position.setX(x);
    }

    getLeft() {
        return this.position.getX();
    }

    setTop(y) {
        this.position.setY(y);
    }

    getTop() {
        return this.position.getY();
    }

    move(x, y) {
        this.position.moveX(x);
        this.position.moveY(y)
    }

    update() {
        throw new Error();
    }
}
