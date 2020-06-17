'use strict'

// ポジションを管理するクラス
export class Position {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    set x(x) {
        this._x = x;
    }
    
    get x() {
        return this._x;
    }

    set y(y) {
        this._y = y
    }

    get y() {
        return this._y;
    }
    
    moveX(x) {
        this._x = this._x + x;
    }

    moveY(y) {
        this._y = this._y + y;
    }
}
