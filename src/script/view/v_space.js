'use strict'

import {VBase}   from './v_base';
import {Utility} from '../util/utility';

// 背景クラス
export class VSpace extends VBase {
    constructor(model) {
        super();
        this.model   = model;
        this.canvas  = document.querySelector('#js-space');
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
        const width  = this.model.getWidth();
        const height = this.model.getHeight();
        this.canvas.setAttribute('width',`${width}`);
        this.canvas.setAttribute('height', `${height}`);
    }

    position() {
        const top  = this.model.getTop();
        const left = this.model.getLeft();
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = `${top}px`;
        this.canvas.style.left = `${left}px`;
    }

    draw() {
        const width   = this.model.getWidth();
        const height  = this.model.getHeight();
        const context = this.context;

        context.fillStyle = '#FFFFFF';
        
        for(let i = 0; i < 1000; i++) {
            let x = Utility.getRandomInt(0, width);
            let y = Utility.getRandomInt(0, height);
            context.fillRect(x, y, 1, 1);
        }
    }
}
