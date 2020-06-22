'use strict'

import { Utility } from '../util/utility';
import { ControllerBase }  from './controller-base';

export class GameController extends ControllerBase {
    constructor(model, view) {
        super();
        this._model = model;
        this._view  = view;
        this._requestID = null;
    }

    init() {
        // do nothing
    }
    
    run(event) {
        const type = Utility.getConfigEventType();
        if(event.type === type.start) return this.start();
        if(event.type === type.stop)  return this.stop();
        if(event.type === type.reset) return this.reset();
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

    update() {
        if(this._model.isGameOver()  === true) return this.stop();
        if(this._model.isGameClear() === true) return this.stop();

        this._model.update();
        this._view.update();
        
        this._requestID = requestAnimationFrame(this.update.bind(this));
    }

    controlDom() {
        const mode = Utility.getConfigCssClass();
        const element  = Utility.getRootDom();
        element.classList = mode.default;

        // ゲームがプレイ中
        const isPlaying = this._model.isPlaying();
        if(isPlaying === true) return element.classList.add(mode.playing);
        
        // ゲームが終了中
        const score = this._model.getScore();
        if(score < 0) return  element.classList.add(mode.lose);
        if(score > 99) return element.classList.add(mode.win);
    }
}

