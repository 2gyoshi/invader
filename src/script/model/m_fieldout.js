'use strict'

import {config} from '../config';

export class M_FieldOut {
    constructor(field) {
        this.field = field;
    }

    update(array) {
        const fieldOutObjList = array.filter(e => this.isFieldOut(e));(array);
        this.fieldOut(fieldOutObjList);
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

    fieldOut(array) {
        array.forEach(e => e.makeDisposeTarget());
    }
}