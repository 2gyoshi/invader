'use strict'

import { GameObjectBase }  from './game-object-base';
import { Utility } from '../util/utility';

// フィールドのModelクラス
export class Field extends GameObjectBase {
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