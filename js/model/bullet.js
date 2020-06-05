'usestrict'

class Bullet extends Charactor {
    constructor(field, width, height, left, top, distance, health, img) {
        super(field, width, height, left, top, distance, health, img);
        this.type = 'bullet';
    }

    update() {
        super.update();
        if(this.top < 0) {
            this.dispose();
        }
    }
}
