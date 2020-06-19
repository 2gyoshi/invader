'use strict'

// フィールドのModelクラス
export class AreaManager {
    constructor(space, field) {
        this._space = space;
        this._field = field;
    }

    getSpace() {
        return this._space;
    }

    getField() {
        return this._field;
    }

    init() {
        this._space.init();
        this._field.init();
    }

    resize() {
        this._space.resize();
        this._field.resize();
    }
}