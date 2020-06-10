'use strict'

// Viewの管理クラス
export class VManager {
    constructor(space, field) {
        this.space = space;
        this.field = field;
    }

    getSpace() {
        return this.space;
    }

    getField() {
        return this.field;
    }

    init() {
        this.space.init();
        this.field.init();
    }

    resize() {
        this.space.resize();
        this.field.resize();
    }

    update(collection) {
        this.field.update(collection);
    }
}
