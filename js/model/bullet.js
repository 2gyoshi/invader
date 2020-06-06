'use strict'

class Bullet extends NonPlayerCharacter {
    constructor(field, status, position, look) {
        super(field, status, position, look);
    }

    update() {
        super.update();

        const min = this.field.getTop();
        if(this.position.getY() <= min) this.dead();
    }

    dead() {
        this.makeDisposeTarget();
    }
}
