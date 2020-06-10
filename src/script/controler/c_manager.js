'use strict'

// Controlerクラス
export class CManager {
    constructor(utility, model, view, event) {
        this.utility   = utility;
        this.model     = model;
        this.view      = view;
        this.event     = event;
    }

    init() {
        this.model.init();

        const mSpace = this.model.space;
        const mField = this.model.field;
        this.view.init(mSpace, mField);
        
        this.event.init();
    }
    
    resize() {
        const collection = this.model.getCollection();
        this.view.resize(collection);
        this.model.resize();
    }

    start() {
        this.model.gameStart();
        this.controlDom();
        this.update();
    }

    reset() {
        location.reload();
    }

    stop() {
        this.model.gameStop();
        this.controlDom();
        cancelAnimationFrame(this.requestID);
    }

    finish() {
        this.controlDom();
        cancelAnimationFrame(this.requestID);
    }

    controlDom() {
        const status = this.model.getStatus();
        this.utility.controlDom(status);
    }

    update() {
        // stopボタンは別メソッドがあるため考慮しない
        if(this.model.isPlaying() === false) return this.finish();

        this.model.update();

        const collection = this.model.getCollection();
        this.view.update(collection);
        
        this.requestID = requestAnimationFrame(this.update.bind(this));
    }
    
}
