'usestrict'

class Charactor {
    constructor(field, width, height, left, top, distance, health, imgPath) {
        this.type       = 'base';
        this.field      = field;
        this.width      = width;
        this.height     = height;
        this.left       = left;
        this.top        = top;
        this.health     = health;
        this.distance   = distance;
        this.imgPath    = imgPath;
        this.isDisposed = false;
        // TODO: これ以前でロードしたいな
        this.normalImg        = new Image();
        this.normalImg.src    = this.imgPath.normal;
        this.displayImg       = this.normalImg;
        this.disposeImage     = new Image();
        this.disposeImage.src = this.imgPath.dispose;
    }

    update() {
        this.left = this.left;
        this.top  = this.top + this.distance;
    }

    dispose() {
        this.isDisposed = true;
        return 0;
    }

    getIsDisposed() {
        return this.isDisposed;
    }

    hit() {
        this.health--;

        if(this.health === 0) {
            this.dispose();
        } 
    }
}
