'use strict'

// Controlerクラス
export class C_Manager {
    constructor() {
        this._items = new Array();
    }

    addItem(item) {
        this._items.push(item);
    }

    removeItem(item) {
        this._items = this._items.filter(e => e !== item);
    }

    init() {
        this._items.forEach(e => e.init());
    }
}
