'use strict'

// 外見を管理するクラス
export class Look {
    constructor() {
        this.index = 0;
        this.collection = new Array();
    }

    addItem(item) {
        this.collection.push(item);
    }

    addImage(src) {
        const image = new Image();
        image.src = src;
        image.onload = this.addItem(image);
    }

    getItem() {
        return this.collection[this.index];
    }

    next() {
        if(!this.hasNext()) return;
        this.index++;
    }

    prev() {
        if(!this.hasPrev()) return;
        this.index--;
    }

    first() {
        this.index = this.getFirstIndex();
    }

    last() {
        this.index = this.getLastIndex();
    }
    
    hasNext() {
        return this.getCurrentIndex() !== this.getLastIndex();
    }

    hasPrev() {
        return this.getCurrentIndex() !== this.getFirstIndex()
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
}
