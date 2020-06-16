'use strict'

import { MC_Base }  from './MC_Base';
import { Utility } from '../util/utility';

// 背景のModelクラス
export class MC_Space extends MC_Base {
    constructor(size, position) {
        super(size, position);
    }

    resize() {
        const prop = Utility.getSpaceProp();
        this.setWidth(prop.w);
        this.setHeight(prop.h);
    }
}
