'usestrict'

class Bullet extends GameObject {
    constructor(field, width, height, left, top, distance) {
        super(field, width, height, left, top);
        this.distance = distance;
        this.type     = 'bullet';
    }

    update() {
        super.update();
        if(this.top < 0) {
            this.dispose();
        }
    }
}
