'use strict'

import { config }  from '../config/config';
import { ControllerBase }  from './controller-base';

export class AreaController extends ControllerBase {
    constructor(model, view) {
        super();
        this._model = model;
        this._view  = view;
    }

    init() {
        // nothing
    }

    resize() {
        this._model.resize();
        this._view.resize();
    }

    run(event) {
        if(event.eventName === config.event.type.load)   return this.init();
        if(event.eventName === config.event.type.resize) return this.resize();
    }
}
