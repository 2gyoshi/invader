'usestrict'

class Enemy extends Charactor {
    constructor(field, width, height, left, top, distance, health, imgPath) {
        super(field, width, height, left, top, distance, health, imgPath);
        this.type = 'enemy';

        this.disposedImg = new Image();
        this.disposedImg.src = this.imgPath.dispose;
    }

    update() {
        super.update();

        const max = (this.field.top + this.field.height) * 0.8;
        if(this.top > max) this.dispose();
    }

    dispose() {
        this.displayImg = this.disposedImg;
        setTimeout(() => this.isDisposed = true, 300);
        return 1;
    }

}
