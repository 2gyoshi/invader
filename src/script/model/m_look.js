'use strict'

import {M_Iterator} from './m_iterator';

// 外見を管理するクラス
export class M_Look extends M_Iterator {
    constructor() {
        super();
    }

    addImage(src) {
        const image = new Image();
        image.src = src;
        image.onload = this.addItem(image);
    }
}
