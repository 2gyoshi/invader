'usestrict'

class Charactor {
    constructor(field, width, height, left, top, distance, health, img) {
        this.type       = 'base';
        this.field      = field;
        this.width      = width;
        this.height     = height;
        this.left       = left;
        this.top        = top;
        this.health     = health;
        this.distance   = distance;
        this.img        = img;
        this.element    = null;
        this.isDisposed = false;

    }

    createElement() {
        this.element = document.createElement('img');
        this.element.setAttribute('src', this.img.normal)
        this.element.classList.add(this.type);
        this.element.style.width    = `${this.width}px`;
        this.element.style.height   = `${this.height}px`;
        this.element.style.position = 'absolute';
        this.element.style.left     = `${this.left}px`;
        this.element.style.top      = `${this.top}px`;

        this.field.insertAdjacentElement('beforeend', this.element);
    }

    update() {
        this.left = this.left;
        this.top  = this.top + this.distance;
        this.element.style.left = `${this.left}px`;
        this.element.style.top  = `${this.top}px`;
    }

    dispose() {
        this.isDisposed = true;
        return 0;
    }

    getIsDisposed() {
        return this.isDisposed;
    }

    hit() {
        this.health--;
        if(this.health <= 0) {
            this.dispose();
        } 
    }
}
