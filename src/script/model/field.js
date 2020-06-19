'use strict'

import { Utility } from '../util/utility';
import { GameObjectBase } from './game-object-base';

// フィールドのModelクラス
export class Field extends GameObjectBase {
    constructor(size, position) {
        super(size, position);
    }

    init() {
        const prop = Utility.getFieldProp();
        this.setLeft(prop.x);
        this.setTop(prop.y);
        this.setWidth(prop.w);
        this.setHeight(prop.h);
    }

    resize() {
        this.init();
    }
}