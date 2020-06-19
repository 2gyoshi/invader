'use strict'

import { Utility } from '../util/utility';
import { GameObjectBase }  from './game-object-base';

// 背景のModelクラス
export class Space extends GameObjectBase {
    constructor(size, position) {
        super(size, position);
    }

    init() {
        const prop = Utility.getSpaceProp();
        this.setWidth(prop.w);
        this.setHeight(prop.h);
    }

    resize() {
        this.init();
    }
}
