'usestrict'

class Field {
    constructor() {
        this.domBody   = document.querySelector('body');
        this.domCanvas = document.querySelector('#field');
        this.context   = this.domCanvas.getContext('2d');

        this.width  = null;
        this.height = null;
        this.top    = null;
        this.left   = null;
    }

    style() {
        this.size();
        this.position();
    }

    size() {
        if(!this.domBody || !this.domCanvas) return;

        this.width  = config.field.width;
        this.height = this.domBody.clientHeight;
        
        this.domCanvas.setAttribute('width',`${this.width}px`);
        this.domCanvas.setAttribute('height', `${this.height}px`);
    }

    position() {
        if(!this.domBody || !this.domCanvas || !this.width) return;

        this.top = config.field.top;
        this.left = (this.domBody.clientWidth / 2) - (this.width / 2);

        this.domCanvas.style.position = 'absolute';
        this.domCanvas.style.top = `${this.top}px`;
        this.domCanvas.style.left = `${this.left}px`;
    }

    draw(collection) {
        if(!collection || !this.context) return;
        
        for(let e of collection) {
            this.context.drawImage(e.displayImg, e.left, e.top, e.width, e.height);
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
