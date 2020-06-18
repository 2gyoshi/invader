'use strict'

import { Utility } from '../util/utility';

export class FieldOut {
    constructor(charaMgr) {
        this._charaMgr  = charaMgr;
    }

    update() {
        const origin = this._charaMgr.getCharacterList();
        const filtered = origin.filter(e => this.isFieldOut(e))
        this.fieldOut(filtered);
    }

    isFieldOut(e) {
        // プレイヤーは仕様上フィールドアウトできないので除外する
        if(e.getType() === Utility.getPlayerType()) return false;
        // ボスは仕様上フィールドアウトしても良いので除外する
        if(e.getType() === Utility.getBossType()) return false;

        const fp = Utility.getFieldProp();
        const top = e.getTop();
        const btm = top + e.getHeight();
        const chkTop = top < fp.y;
        const chkBtm = btm > fp.y + fp.h;

        return chkTop === true || chkBtm === true;
    }

    fieldOut(array) {
        array.forEach(e => e.makeDisposeTarget());
    }
}