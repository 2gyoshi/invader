'use strict'


// 背景クラス
export class VSpace {
    constructor(utility, model) {
        this.utility   = utility;
        this.model     = model;
        this.domCanvas = document.querySelector('#js-space');
        this.context   = this.domCanvas.getContext('2d');
    }

    init(model) {
        this.model = model;
        this.style();
        this.draw();
    }

    resize(model) {
        this.init(model);
    }
    
    style() {
        this.size();
        this.position();
    }

    size() {
        const width  = this.model.getWidth();
        const height = this.model.getHeight();
        this.domCanvas.setAttribute('width',`${width}`);
        this.domCanvas.setAttribute('height', `${height}`);
    }

    position() {
        const top  = this.model.getTop();
        const left = this.model.getLeft();
        this.domCanvas.style.position = 'absolute';
        this.domCanvas.style.top = `${top}px`;
        this.domCanvas.style.left = `${left}px`;
    }

    draw() {
        const width   = this.model.getWidth();
        const height  = this.model.getHeight();
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
