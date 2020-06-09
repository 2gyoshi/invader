'use strict'

import {ViewBase} from './view_base';

// 背景クラス
export class Background extends ViewBase {
    constructor(utility) {
        super();
        this.utility   = utility;
        this.domBody   = document.querySelector('body');
        this.domCanvas = document.querySelector('#js-space');
        this.context   = this.domCanvas.getContext('2d');
    }

    resize() {
        this.size();
        this.draw();
    }

    size() {
        if(!this.domBody || !this.domCanvas) return;

        this.width  = this.domBody.clientWidth;
        this.height = this.domBody.clientHeight;
        
        this.domCanvas.setAttribute('width',`${this.width}`);
        this.domCanvas.setAttribute('height', `${this.height}`);
    }

    position() {
        if(!this.domCanvas) return;

        this.top  = 0;
        this.left = 0;

        this.domCanvas.style.position = 'absolute';
        this.domCanvas.style.top = `${this.top}px`;
        this.domCanvas.style.left = `${this.left}px`;
    }
    
    draw() {
        if(!this.width || !this.height || !this.utility || !this.context) return;

        const width   = this.width;
        const height  = this.height;
        const utility = this.utility;
        const context = this.context;

        context.fillStyle = '#FFFFFF';
        
        for(let i = 0; i < 1000; i++) {
            let x = utility.getRandomInt(0, width);
            let y = utility.getRandomInt(0, height);
            context.fillRect(x, y, 1, 1);
        }
    }
}
