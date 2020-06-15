'use strict'

import { config }  from '../config/config';
import { E_Base }  from './e_base';

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

        const val = this.convertKeyCodeToMeaningStr(e.keyCode);
        if(val === null)    this._eventName = config.event.type.none;
        if(val === 'space') this._eventName = config.event.type.shoot;
        if(val === 'left')  this._eventName = config.event.type.left;
        if(val === 'right') this._eventName = config.event.type.right;

        this.notify();
    }

    convertKeyCodeToMeaningStr(code) {
        if(code === 32) return 'space';
        if(code === 37) return 'left';
        if(code === 39) return 'right';
        
        return null;
    }

    keyup() {
        this._disable = false;
    }
}