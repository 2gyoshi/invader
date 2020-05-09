'usestrict'

class GameObject {
    constructor(field, width, height, left, top) {
        this.field   = field;
        this.width   = width;
        this.height  = height;
        this.left    = left;
        this.top     = top;
        this.type    = 'gameObject';
        this.element = null;
        this.isHit   = false;
    }

    createElement() {
        this.element = document.createElement('img');
        this.element.setAttribute('src', `../img/${this.type}.svg`)
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

    hit() {
        this.isHit = true;
    }
}
