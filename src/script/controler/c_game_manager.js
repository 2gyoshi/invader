'use strict'

import { config }  from '../config/config';
import { Utility } from '../util/utility';
import { C_Base }  from './c_base';

export class C_GameManager extends C_Base {
    constructor(model, view) {
        super(model, view);
        this._requestID = null;
    }

    run(event) {
        if(event.eventName === config.event.type.load)   return this.load();
        if(event.eventName === config.event.type.resize) return this.resize();
        if(event.eventName === config.event.type.start)  return this.start();
        if(event.eventName === config.event.type.stop)   return this.stop();
        if(event.eventName === config.event.type.reset)  return this.reset();
    }

    load() {
        this._model.init();
        this._view.init();
    }
    
    resize() {
        const collection = this.model.getCollection();
        this._model.resize();
        this._view.resize(collection);
    }

    start() {
        this._model.start();
        this.controlDom();
        this.update();
    }

    stop() {
        this._model.stop();
        this.controlDom();
        cancelAnimationFrame(this._requestID);
    }

    reset() {
        location.reload();
    }

    controlDom() {
        const isPlaying = this._model.isPlaying();
        if(isPlaying === true) return Utility.controlDom(config.game.state.playing);
        
        // ゲームが止まってる状態ならここにくる
        const score = this._model.getScore();
        if(score < 0) return Utility.controlDom(config.game.state.lose);
        if(score > 99) return Utility.controlDom(config.game.state.win);
       
        // 途中だったらならここにくる
        return Utility.controlDom(config.game.state.default);
    }

    update() {
        if(this._model.isPlaying() === false) return this.stop();

        this._model.update();
        const collection = this._model.getCollection();
        this._view.update(collection);
        
        this._requestID = requestAnimationFrame(this.update.bind(this));
    }
}

