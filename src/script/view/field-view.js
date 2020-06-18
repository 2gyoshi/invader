'use strict'

import { ViewBase } from './view-base';

// ゲームのフィールドクラス
export class FieldView extends ViewBase {
    constructor(model) {
        super();
        this._model   = model;
        this._canvas  = document.querySelector('#js-field');
        this._context = this._canvas.getContext('2d');
    }

    size() {
        const field  = this._model.getField(); 
        const width  = field.getWidth();
        const height = field.getHeight();
        this._canvas.setAttribute('width',`${width}`);
        this._canvas.setAttribute('height', `${height}`);
    }

    position() {
        const field = this._model.getField(); 
        const top   = field.getTop();
        const left  = field.getLeft();
        this._canvas.style.position = 'absolute';
        this._canvas.style.top = `${top}px`;
        this._canvas.style.left = `${left}px`;
    }

    draw() {
        const charaList = this._model.getCharacterList();
        
        let image  = null;
        let left   = null;
        let top    = null;
        let width  = null;
        let height = null;

        for(let e of charaList) {
            image  = e.getLook();
            left   = e.getLeft();
            top    = e.getTop();
            width  = e.getWidth();
            height = e.getHeight();
            
            this._context.drawImage(image, left, top, width, height);
        }
    }

    erase() {
        const field  = this._model.getField(); 
        const width  = field.getWidth();
        const height = field.getHeight();
        this._context.clearRect(0, 0, width, height);
    }

    update() {
        this.erase();
        this.draw();
    }
}
