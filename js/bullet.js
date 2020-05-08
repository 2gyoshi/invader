'usestrict'

class Bullet {
    constructor(target, width, height, left, top, distance) {
        this.target   = target;
        this.width    = width;
        this.height   = height;
        this.left     = left;
        this.top      = top;
        this.distance = distance;
        this.element  = null;
        this.type     = 'bullet';
        this.isHit    = false;
    }

    createElement() {
        this.element = document.createElement('img');
        this.element.setAttribute('src', '../img/bullet.svg')
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

        if(this.top < 0) {
            this.element.remove();
        }
    }

    hit() {
        this.isHit = true;
    }
}
