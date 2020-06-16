'use strict'

import { MA_List } from './MA_List';

// 外見を管理するクラス
export class MA_Look extends MA_List {
    constructor() {
        super();
    }

    addImage(src) {
        const image = new Image();
        image.src = src;
        image.onload = this.addItem(image);
    }
}
