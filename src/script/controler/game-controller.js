'use strict'

import { config }  from '../config/config';
import { ControllerBase }  from './controller-base';

export class GameController extends ControllerBase {
    constructor(model, view) {
        super();
        this._model = model;
        this._view  = view;
        this._requestID = null;
    }

    run(event) {
        if(event.eventName === config.event.type.start)  return this.start();
        if(event.eventName === config.event.type.stop)   return this.stop();
        if(event.eventName === config.event.type.reset)  return this.reset();
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
        const index = document.querySelector('.index');
        index.classList = config.game.state.default;

        // ゲームがプレイ中
        const isPlaying = this._model.isPlaying();
        if(isPlaying === true) return index.classList.add(config.game.state.playing);
        
        // ゲームが終了中
        const score = this._model.getScore();
        if(score < 0) return  index.classList.add(config.game.state.lose);
        if(score > 99) return index.classList.add(config.game.state.win);
       
        // ゲームが停止中
        return index.classList.add(config.game.state.default);
    }

    update() {
        if(this._model.isGameOver()  === true) return this.stop();
        if(this._model.isGameClear() === true) return this.stop();

        this._model.update();
        this._view.update();
        
        this._requestID = requestAnimationFrame(this.update.bind(this));
    }
}

