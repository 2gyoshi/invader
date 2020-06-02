'usestrict'

class Boss extends Charactor {
    constructor(field, width, height, left, top, distance, health, img) {
        super(field, width, height, left, top, distance, health, img);
        this.type = 'boss';
    }

    update() {
        super.update();
        if(this.top > document.documentElement.clientHeight * 0.8) {
            this.dispose();
        }
    }

    dispose() {
        this.distance = 0;
        this.element.setAttribute('src', this.img.dispose);
        setInterval(() => super.dispose(), 500);
    }
}
