'use strict'

export class EventManager {
    constructor(...events) {
        this._itemList = events;
    }

    init() {
        this._itemList.forEach(e => e.init());
    }

}
