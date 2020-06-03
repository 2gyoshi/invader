'usestrict'

class Boss extends Charactor {
    constructor(field, width, height, left, top, distance, health, imgPath) {
        super(field, width, height, left, top, distance, health, imgPath);
        this.type = 'boss';

        this.disposedImg = new Image();
        this.disposedImg.src = this.imgPath.dispose;
    }

    update() {
        super.update();
        // TODO: 変える
        if(this.top > document.documentElement.clientHeight * 0.8) {
            this.dispose();
        }
    }

    dispose() {
        this.displayImg = this.disposedImg;
        setTimeout(() => this.isDisposed = true, 300);

        return 0;
    }
}
