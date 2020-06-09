'use strict'

// イテレータークラス
export class MIterator {
    constructor() {
        this.index = 0;
        this.collection = new Array();
    }

    addItem(item) {
        this.collection.push(item);
    }

    getItem() {
        return this.collection[this.index];
    }

    first() {
        this.index = this.getFirstIndex();
    }

    last() {
        this.index = this.getLastIndex();
    }

    next() {
        if(!this.hasNext()) return;
        this.index++;
    }

    prev() {
        if(!this.hasPrev()) return;
        this.index--;
    }
    
    getCurrentIndex() {
        return this.index;
    }

    getFirstIndex() {
        return 0;
    }

    getLastIndex() {
        return this.collection.length - 1;
    }

    hasNext() {
        return this.getCurrentIndex() !== this.getLastIndex();
    }

    hasPrev() {
        return this.getCurrentIndex() !== this.getFirstIndex()
    }
}
