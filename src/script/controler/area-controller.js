'use strict'

import { Utility } from '../util/utility';
import { ControllerBase } from './controller-base';

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
        const type = Utility.getConfigEventType();
        if(event.eventName === type.load)   return this.init();
        if(event.eventName === type.resize) return this.resize();
    }
}
