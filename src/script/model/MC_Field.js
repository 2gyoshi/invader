'use strict'

import { MC_Base }  from './MC_Base';
import { Utility } from '../util/utility';

// フィールドのModelクラス
export class MC_Field extends MC_Base {
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