'usestrict'

class Enemy {
    constructor(target, width, height, left, top, distance) {
        this.target   = target;
        this.width    = width;
        this.height   = height;
        this.left     = left;
        this.top      = top;
        this.distance = distance;
        this.type     = 'enemy';
        this.element  = null;
        this.isHit    = false;
    }

    createElement() {
        this.element = document.createElement('img');
        this.element.setAttribute('src', '../img/enemy.svg')
        this.element.classList.add(this.type);
        this.element.style.width    = `${this.width}px`;
        this.element.style.height   = `${this.height}px`;
        this.element.style.position = 'absolute';
        this.element.style.left     = `${this.left}px`;
        this.element.style.top      = `${this.top}px`;

        this.target.insertAdjacentElement('beforeend', this.element);
    }

    update() {
        this.left = this.left;
        this.top  = this.top + this.distance;
        this.element.style.left = `${this.left}px`;
        this.element.style.top  = `${this.top}px`;

        if(this.top > document.documentElement.clientHeight * 0.8) {
            this.element.remove();
        }
    }

    hit() {
        this.isHit = true;
    }
}
