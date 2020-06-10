'use strict'

import {MBase} from './m_base';

// ゲームのフィールドクラス
export class MSpace extends MBase {
    constructor(size, position) {
        super(size, position);
    }

    resize() {
        const prop  = this.getSpaceProp();
        this.setWidth(prop.w);
        this.setHeight(prop.h);
    }

    getSpaceProp() {
        const body = document.querySelector('body');
        const w = body.clientWidth;
        const h = body.clientHeight;
        const x = 0;
        const y = 0;
    
        return {w: w, h: h, x: x, y: y};
    }
}

export class MField extends MBase{
    constructor(size, position) {
        super(size, position);
    }

    resize() {
        const prop  = this.getFieldProp();
        this.setWidth(prop.w);
        this.setHeight(prop.h);
    }

    getFieldProp() {
        const body = document.querySelector('body');
        const w = body.clientWidth / 2;
        const h = body.clientHeight;
        const x = (body.clientWidth / 2) - (w / 2);
        const y = 0;
     
        return {w: w, h: h, x: x, y: y};
    }
}