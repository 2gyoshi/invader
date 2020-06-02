'usestrict'

class Enemy extends Charactor {
    constructor(field, width, height, left, top, distance, health, img) {
        super(field, width, height, left, top, distance, health, img);
        this.type = 'enemy';
    }

    update() {
        super.update();
        if(this.top > document.documentElement.clientHeight * 0.8) {
            this.dispose();
        }
    }

    dispose() {
        this.element.setAttribute('src', this.img.dispose);
        setInterval(() => super.dispose(), 500);
    }
}
