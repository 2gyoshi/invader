'use strict'

// 外見を管理するクラス
export class Looks {
    constructor(list, ...items) {
        this._list = list;
        items.forEach(e => this.addImage(e));
    }

    addImage(src) {
        const image = new Image();
        image.src = src;
        image.onload = this._list.addItem(image);
    }

    getItem() {
        return this._list.getItem();
    }

    last() {
        this._list.last();
    }
}
