'use strict'

import { Utility }   from '../util/utility';
import { EventBase } from './event-base';

export class KeydownEvent extends EventBase {
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
        const type = Utility.getConfigEventType();

        if(val === null)       this._type = type.none;
        if(val === type.shoot) this._type = type.shoot;
        if(val === type.left)  this._type = type.left;
        if(val === type.right) this._type = type.right;

        this.notify();
    }

    convertKeyCodeToMeaningStr(code) {
        const type = Utility.getConfigEventType();
        if(code === 32) return type.shoot;
        if(code === 37) return type.left;
        if(code === 39) return type.right;
        
        return null;
    }

    keyup() {
        this._disable = false;
    }
}