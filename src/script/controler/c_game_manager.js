'use strict'

import {C_Base} from './c_base';

// TODO: tmp
import { config } from '../config/config';
import { Utility } from '../util/utility';

export class C_GameManager extends C_Base {
    constructor(model, view) {
        super(model, view);
        this._requestID = null;
    }

    run(event) {
        // TODO: 共通化する
        if(event.eventName === 'load')   return this.load();
        if(event.eventName === 'resize') return this.resize();
        if(event.eventName === 'start')  return this.start();
        if(event.eventName === 'stop')   return this.stop();
        if(event.eventName === 'reset')  return this.reset();
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
        if(isPlaying === true) return Utility.controlDom(config.game.status.playing);
        
        // ゲームが止まってる状態ならここにくる
        const score = this._model.getScore();
        if(score < 0) return Utility.controlDom(config.game.status.gameover);
        if(score > 99) return Utility.controlDom(config.game.status.gameclear);
        // 途中だったらここに入って来る
        return Utility.controlDom(config.game.status.default);
    }

    update() {
        // stopボタンは別メソッドがあるため考慮しない
        if(this._model.isPlaying() === false) return this.stop();

        this._model.update();
        const collection = this._model.getCollection();
        this._view.update(collection);
        
        this._requestID = requestAnimationFrame(this.update.bind(this));
    }
}

