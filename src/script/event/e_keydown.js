'use strict'

import {Utility} from '../util/utility';
import {E_Base} from './e_base';

export class E_Keydown extends E_Base {
    constructor() {
        super();
        this.disable = false;
    }

    init() {
        window.addEventListener('keydown', this.keydown.bind(this), false);
        window.addEventListener('keyup', this.keyup.bind(this), false);
    }
    
    keydown(e) {
        // キーボード長押しを禁止する
        if(this.disable === true) return;

        this.disable = true;

        const val = Utility.convertKeyCodeToMeaningStr(e.keyCode);
        
        if(val === null)    this.setEventName('default');
        if(val === 'space') this.setEventName('shoot');
        if(val === 'left')  this.setEventName('left');
        if(val === 'right') this.setEventName('right');

        this.notify();
    }
    
    keyup() {
        this.disable = false;
    }
}