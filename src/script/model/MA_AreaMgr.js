'use strict'

// フィールドのModelクラス
export class MA_AreaMgr {
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
    
    resize() {
        this._space.resize();
        this._field.resize();
    }
}