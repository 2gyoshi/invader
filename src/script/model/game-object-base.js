'use strict'

// ゲームオブジェクトのベースクラス
export class GameObjectBase {
    constructor(size, position) {
        this.size      = size;
        this.position  = position;
    }

    setWidth(w) {
        this.size.width = w;
    }

    getWidth() {
        return this.size.width;
    }

    setHeight(h) {
        this.size.height = h;
    }

    getHeight() {
        return this.size.height;
    }

    setLeft(x) {
        this.position.x = x;
    }

    getLeft() {
        return this.position.x;
    }

    setTop(y) {
        this.position.y = y;
    }

    getTop() {
        return this.position.y;
    }

    move(x, y) {
        this.position.moveX(x);
        this.position.moveY(y)
    }

    update() {
        throw new Error();
    }
}
