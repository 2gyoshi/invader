'use strict'

export class C_Base {
    constructor(model, view) {
        this._model = model;
        this._view  = view;
    }

    get model() {
        return this._model;
    }

    get view() {
        return this._view;
    }

    run(event) {
        throw new Error('abstract method is called');
    }
}

