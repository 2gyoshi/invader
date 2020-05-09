'usestrict'

class Enemy extends GameObject {
    constructor(field, width, height, left, top, distance) {
        super(field, width, height, left, top);
        this.distance = distance;
        this.type     = 'enemy';
    }

    update() {
        super.update();
        if(this.top > document.documentElement.clientHeight * 0.8) {
            this.element.remove();
        }
    }
}
