'usestrict'

class Player {
    constructor(target, width, height, left, top) {
        this.target  = target;
        this.width   = width;
        this.height  = height;
        this.left    = left;
        this.top     = top;
        this.type    = 'player';
        this.element = null;
        this.isHit    = false;
    }

    createElement() {
        this.element = document.createElement('img');
        this.element.setAttribute('src', '../img/player.svg')
        this.element.classList.add(this.type);
        this.element.style.width    = `${this.width}px`;
        this.element.style.height   = `${this.height}px`;
        this.element.style.position = 'absolute';
        this.element.style.left     = `${this.left}px`;
        this.element.style.top      = `${this.top}px`;

        this.target.insertAdjacentElement('beforeend', this.element);
    }

    update() {
        // nothing
    }

    move(left, top) {
        this.left += left;
        this.top  += top;
        this.element.style.left = `${this.left}px`;
        this.element.style.top  = `${this.top}px`;
    }

    hit() {
        this.isHit = true;
    }
}
