'use strict'

// Controlerクラス
export class C_Manager {
    constructor(model, view, event) {
        this.model     = model;
        this.view      = view;
        this.event     = event;
    }

    init() {
        this.model.init();
        this.view.init();
        // this.event.init();
    }
    
    resize() {
        const collection = this.model.getCollection();
        this.view.resize(collection);
        this.model.resize();
    }
}
