'use strict'

// ゲームのフィールドクラス
export class VField {
    constructor(model) {
        this.model = model;
        this.domCanvas = document.querySelector('#js-field');
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
