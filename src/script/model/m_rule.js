'use strict'

import {config} from '../config';

export class MRule {
    constructor(field) {
        this.field = field;
    }

    update(array) {
        const fieldOutObjList = this.getFieldOutObjList(array);
        this.dispose(fieldOutObjList);
    }

    getFieldOutObjList(array) {
        return array.filter(e => this.isFieldOut(e));
    }

    isFieldOut(e) {
        // プレイヤーは仕様上フィールドアウトできないので除外する
        if(e.getType() === config.player.type) return false;
        // ボスは仕様上フィールドアウトしても良いので除外する
        if(e.getType() === config.boss.type) return false;

        const top = e.getTop();
        const btm = top + e.getHeight();
        const chkTop = top < this.field.getTop();
        const chkBtm = btm > this.field.getTop() + this.field.getHeight();

        return chkTop === true || chkBtm === true;
    }

    dispose(array) {
        array.forEach(e => e.makeDisposeTarget());
    }
}