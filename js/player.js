'usestrict'

class Player extends GameObject {
    constructor(field, width, height, left, top) {
        super(field, width, height, left, top);
        this.type    = 'player';
    }

    update() {
        // override nothiong
    }

    move(left, top) {
        const min = 0;
        const max = this.field.clientWidth - this.width;
        
        if(this.left + left < min) return;
        if(this.left + left > max) return;

        this.left += left;
        this.top  += top;
        this.element.style.left = `${this.left}px`;
        this.element.style.top  = `${this.top}px`;
    }

    dispose() {
        this.element.setAttribute('src', '../img/explosion.svg');
        setInterval(() => super.dispose(), 500);
    }
}
