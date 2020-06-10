'use strict'

import {MBase} from './m_base';
import {Utility} from '../util/utility';

// ゲームのフィールドクラス
export class MSpace extends MBase {
    constructor(size, position) {
        super(size, position);
    }

    resize() {
        const prop  = Utility.getSpaceProp();
        this.setWidth(prop.w);
        this.setHeight(prop.h);
    }
}

export class MField extends MBase{
    constructor(size, position) {
        super(size, position);
    }

    resize() {
        const prop  = Utility.getFieldProp();
        this.setWidth(prop.w);
        this.setHeight(prop.h);
        this.setLeft(prop.x);
        this.setTop(prop.y);
    }
}