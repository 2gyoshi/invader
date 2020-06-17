'use strict'

import { config }  from '../config/config';
import { ControllerBase }  from './controller-base';

export class AreaController extends ControllerBase {
    constructor(areaMgr, vMgr) {
        super();
        this._areaMgr = areaMgr;
        this._vMgr = vMgr;
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
        this._vMgr.resize();
    }
}
