'use strict'

export class MA_List {
    constructor() {
        this._index = 0;
        this._list  = new Array();
    }

    addItem(item) {
        this._list.push(item);
    }

    removeItem(item) {
        this._list = this._list.filter(e => e !== item);
    }

    getList() {
        return this._list;
    }

    getItem() {
        return this._list[this._index];
    }
    
    getCurrentIndex() {
        return this._index;
    }

    getFirstIndex() {
        return 0;
    }

    getLastIndex() {
        return this._list.length - 1;
    }

    first() {
        this._index = this.getFirstIndex();
    }

    last() {
        this._index = this.getLastIndex();
    }

    next() {
        if(!this.hasNext()) return;
        this._index++;
    }

    prev() {
        if(!this.hasPrev()) return;
        this._index--;
    }

    hasNext() {
        return this.getCurrentIndex() !== this.getLastIndex();
    }

    hasPrev() {
        return this.getCurrentIndex() !== this.getFirstIndex()
    }

    getCurrentItem() {
        return this._list[this._index];
    }
}
