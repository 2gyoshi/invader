'use strict'

// Viewの管理クラス
export class VManager {
    constructor(space, field) {
        this.space      = space;
        this.field      = field;
    }

    getSpace() {
        return this.space;
    }

    getField() {
        return this.field;
    }

    init(mSpace, mField) {
        this.space.init(mSpace);
        this.field.init(mField);
    }

    resize(mSpace, mField) {
        this.space.resize(mSpace);
        this.field.resize(mField);
    }

    update(collection) {
        this.field.update(collection);
    }
}
