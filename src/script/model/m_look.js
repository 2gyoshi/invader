'use strict'

import {MIterator} from './m_iterator';

// 外見を管理するクラス
export class MLook extends MIterator {
    constructor() {
        super();
    }

    addImage(src) {
        const image = new Image();
        image.src = src;
        image.onload = this.addItem(image);
    }
}
