'use strict'

import {config} from '../config';
import {ViewBase} from './view_base';

// ゲームのフィールドクラス
export class Field extends ViewBase {
    constructor() {
        super();
        this.domBody   = document.querySelector('body');
        this.domCanvas = document.querySelector('#js-field');
        this.context   = this.domCanvas.getContext('2d');
    }

    resize(collection) {
        super.resize();
        this.draw(collection);
    }

    size() {
        this.width  = config.field.width;
        this.height = this.domBody.clientHeight;
        
        this.domCanvas.setAttribute('width',`${this.width}`);
        this.domCanvas.setAttribute('height', `${this.height}`);
    }

    position() {
        this.top  = config.field.top;
        this.left = (this.domBody.clientWidth / 2) - (this.width / 2);

        this.domCanvas.style.position = 'absolute';
        this.domCanvas.style.top = `${this.top}px`;
        this.domCanvas.style.left = `${this.left}px`;
    }

    draw(collection) {
        if(!collection) return;

        let image  = null;
        let left   = null;
        let top    = null;
        let width  = null;
        let height = null;

        for(let e of collection) {
            image  = e.getLook();
            left   = e.getLeft();
            top    = e.getTop();
            width  = e.getWidth();
            height = e.getHeight();
            
            this.context.drawImage(e.getLook(), left, top, width, height);
        }
    }

    erase() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    update(collection) {
        this.erase();
        this.draw(collection)
    }
}
