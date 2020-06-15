'use strict'

import { M_Base }  from './m_base';
import { Utility } from '../util/utility';

// 背景のModelクラス
export class M_Space extends M_Base {
    constructor(size, position) {
        super(size, position);
    }

    resize() {
        const prop = Utility.getSpaceProp();
        this.setWidth(prop.w);
        this.setHeight(prop.h);
    }
}
