'use strict'

export class EventBase {
    constructor() {
        this._itemList = new Array();
        this._type = '';
    }

    get type() {
        return this._type;
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
