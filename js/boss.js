'usestrict'

class Boss extends Charactor {
    constructor(field, width, height, left, top, distance, health, img) {
        super(field, width, height, left, top, distance, health, img);
        this.type = 'boss';
    }

    update() {
        super.update();
        // TODO: 変える
        if(this.top > document.documentElement.clientHeight * 0.8) {
            this.dispose();
        }
    }

    dispose() {
        this.isDisposed = true;

        this.imgobj = new Image();
        this.imgobj.src = this.img.dispose;
        this.imgobj.onload = this.draw();

        return 0;
    }
}
