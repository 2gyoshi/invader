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
        // do nothing
    }

    resize() {
        this._model.resize();
        this._view.resize();
    }

    run(event) {
        const type = Utility.getConfigEventType();
        if(event.type === type.load)   return this.init();
        if(event.type === type.resize) return this.resize();
    }
}
