'use strict'

import {E_Base} from './e_base';

export class E_Window extends E_Base {
    constructor() {
        super();
    }

    init() {
        window.addEventListener('load',   this.load.bind(this));
        window.addEventListener('resize', this.resize.bind(this));
    }

    load() {
        this.setEventName('load');
        this.notify(this);
    }

    resize() {
        this.setEventName('resize');
        this.notify(this);
    }
}
