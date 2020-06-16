'use strict'

import { config }  from '../config/config';
import { C_Base }  from './c_base';

export class C_Area extends C_Base {
    constructor(areaMgr) {
        super();
        this._areaMgr = areaMgr;
    }

    run(event) {
        if(event.eventName === config.event.type.load)   return this.init();
        if(event.eventName === config.event.type.resize) return this.resize();
    }

    init() {
        // this._model.init();
    }
    
    resize() {
        this._areaMgr.resize();
    }
}
