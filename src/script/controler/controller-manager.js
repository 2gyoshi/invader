'use strict'

// Controlerクラス
export class ControllerManager {
    constructor(model, view, event) {
        this._model = model;
        this._view  = view;
        this._event = event;
    }

    init() {
        this._model.init();
        this._view.init();
        this._event.init();
    }
}
