'use strict'

export class E_Base {
    constructor() {
        this._itemList = new Array();
        this._eventName   = '';
    }

    get eventName() {
        return this._eventName;
    }

    // TODO: rename
    addController(item) {
        this._itemList.push(item);
    }

    deleteController(item) {
        this._itemList.remove(item)
    }

    notify() {
        this._itemList.forEach(e => e.run(this));
    }
}
