'use strict'

// ゲームのフィールドクラス
export class VField {
    constructor(model) {
        this.model   = model;
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
        const width  = this.model.getWidth();
        const height = this.model.getHeight();
        this.context.clearRect(0, 0, width, height);
    }

    update(collection) {
        this.erase();
        this.draw(collection);
    }
}
