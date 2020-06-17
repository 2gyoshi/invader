'use strict'

// ゲームのフィールドクラス
export class Size {
    constructor(width, height) {
        this._width  = width;
        this._height = height;
    }

    set width(w) {
        this._width = w;
    }

    get width() {
        return this._width;
    }

    set height(h) {
        this._height = h;
    }

    get height() {
        return this._height;
    }
}
