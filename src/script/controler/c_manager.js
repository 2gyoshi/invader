'use strict'

import {config}   from '../config/config';
import {Utility}  from '../util/utility';

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
        this.event.init();
    }
    
    resize() {
        const collection = this.model.getCollection();
        this.view.resize(collection);
        this.model.resize();
    }

    start() {
        this.model.start();
        this.controlDom();
        this.update();
    }

    stop() {
        this.model.stop();
        this.controlDom();
        cancelAnimationFrame(this.requestID);
    }

    reset() {
        location.reload();
    }

    controlDom() {
        const isPlaying = this.model.isPlaying();
        if(isPlaying === true) return Utility.controlDom(config.game.status.playing);
        
        // ゲームが止まってる状態ならここにくる
        const score = this.model.getScore();
        if(score < 0) return Utility.controlDom(config.game.status.gameover);
        if(score > 99) return Utility.controlDom(config.game.status.gameclear);
        // 途中だったらここに入って来る
        return Utility.controlDom(config.game.status.default);
    }

    update() {
        // stopボタンは別メソッドがあるため考慮しない
        if(this.model.isPlaying() === false) return this.stop();

        this.model.update();

        const collection = this.model.getCollection();
        this.view.update(collection);
        
        this.requestID = requestAnimationFrame(this.update.bind(this));
    }
    
}
