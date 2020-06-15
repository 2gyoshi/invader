'use strict'

import {Utility} from '../util/utility';
import {E_Base} from './e_base';

export class E_Keydown extends E_Base {
    constructor() {
        super();
        this._disable = false;
    }

    init() {
        window.addEventListener('keydown', this.keydown.bind(this), false);
        window.addEventListener('keyup', this.keyup.bind(this), false);
    }
    
    keydown(e) {
        // キーボード長押しを禁止する
        if(this._disable === true) return;

        this._disable = true;

        const val = Utility.convertKeyCodeToMeaningStr(e.keyCode);
        
        // TODO: 共通化する
        if(val === null)    this._eventName = 'default';
        if(val === 'space') this._eventName = 'shoot';
        if(val === 'left')  this._eventName = 'left';
        if(val === 'right') this._eventName = 'right';

        this.notify();
    }
    
    keyup() {
        this._disable = false;
    }
}