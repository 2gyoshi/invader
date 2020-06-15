'use strict'

// イテレータークラス
export class M_Iterator {
    constructor() {
        this._index = 0;
        this._items = new Array();
    }

    addItem(item) {
        this._items.push(item);
    }

    getItem() {
        return this._items[this._index];
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
    
    getCurrentIndex() {
        return this._index;
    }

    getFirstIndex() {
        return 0;
    }

    getLastIndex() {
        return this._items.length - 1;
    }

    hasNext() {
        return this.getCurrentIndex() !== this.getLastIndex();
    }

    hasPrev() {
        return this.getCurrentIndex() !== this.getFirstIndex()
    }
}
