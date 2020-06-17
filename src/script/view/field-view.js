'use strict'

import { ViewBase } from './view-base';

// ゲームのフィールドクラス
export class FieldView extends ViewBase {
    constructor(mField, mCharaMgr) {
        super();
        this._mField    = mField;
        this._mCharaMgr = mCharaMgr;
        this.canvas  = document.querySelector('#js-field');
        this.context = this.canvas.getContext('2d');
    }

    init() {
        this.style();
        this.draw();
    }

    resize() {
        this.init();
    }
    
    style() {
        this.size();
        this.position();
    }

    size() {
        const width  = this._mField.getWidth();
        const height = this._mField.getHeight();
        this.canvas.setAttribute('width',`${width}`);
        this.canvas.setAttribute('height', `${height}`);
    }

    position() {
        const top  = this._mField.getTop();
        const left = this._mField.getLeft();
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = `${top}px`;
        this.canvas.style.left = `${left}px`;
    }

    draw() {
        const list = this._mCharaMgr.getList();

        let image  = null;
        let left   = null;
        let top    = null;
        let width  = null;
        let height = null;

        for(let e of list) {
            image  = e.getLook();
            left   = e.getLeft();
            top    = e.getTop();
            width  = e.getWidth();
            height = e.getHeight();
            
            this.context.drawImage(e.getLook(), left, top, width, height);
        }
    }

    erase() {
        const width  = this._mField.getWidth();
        const height = this._mField.getHeight();
        this.context.clearRect(0, 0, width, height);
    }

    update() {
        this.erase();
        this.draw();
    }
}
