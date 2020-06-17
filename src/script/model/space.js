'use strict'

import { GameObjectBase }  from './game-object-base';
import { Utility } from '../util/utility';

// 背景のModelクラス
export class Space extends GameObjectBase {
    constructor(size, position) {
        super(size, position);
    }

    resize() {
        const prop = Utility.getSpaceProp();
        this.setWidth(prop.w);
        this.setHeight(prop.h);
    }
}
