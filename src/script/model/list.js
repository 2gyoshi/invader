'use strict'

export class List {
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
        return this._list.length;
    }

    hasNext() {
        return this._index !== this.getLastIndex();
    }

    hasPrev() {
        return this._index !== this.getFirstIndex()
    }
    
    * [Symbol.iterator]() {
        while(this.hasNext() === true) {
            const result = this.next();
            yield result.value;
        }
        this._index = 0;
    }

    next() {
        const value = this.getItem();
        this._index++;
        return {done: false, value: value};
    }

    prev() {
        if(!this.hasPrev()) return;
        this._index--;
    }

    first() {
        this._index = this.getFirstIndex();
    }

    last() {
        this._index = this.getLastIndex() - 1;
    }


}
