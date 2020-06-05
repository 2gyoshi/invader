'use strict'

class Background {
    constructor(util) {
        this.domBody   = document.querySelector('body');
        this.domCanvas = document.querySelector('#background');
        this.context   = this.domCanvas.getContext('2d');
        this.instanceUtil = util;
    }
    
    style() {
        if(!this.domBody || !this.domCanvas) return;
        
        const width  = this.domBody.clientWidth;
        const height = this.domBody.clientHeight;
        const top    = 0;
        const left   = 0;
    
        this.domCanvas.setAttribute('width',`${width}px`);
        this.domCanvas.setAttribute('height', `${height}px`);
        this.domCanvas.style.position = 'absolute';
        this.domCanvas.style.top = `${top}px`;
        this.domCanvas.style.left = `${left}px`;
    }

    draw() {
        if(!this.domBody || !this.instanceUtil || !this.context) return;

        const width  = this.domBody.clientWidth;
        const height = this.domBody.clientHeight;
        const util = this.instanceUtil;
        const context = this.context;

        context.fillStyle = '#FFFFFF';
        
        for(let i = 0; i < 1000; i++) {
            let x = util.getRandomInt(0, width);
            let y = util.getRandomInt(0, height);
            context.fillRect(x, y, 1, 1);
        }
    }
}
