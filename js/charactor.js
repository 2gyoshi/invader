'usestrict'

class Charactor {
    constructor(field, width, height, left, top, distance, health, img) {
        this.type       = 'base';
        this.field      = field;
        this.width      = width;
        this.height     = height;
        this.left       = left;
        this.top        = top;
        this.health     = health;
        this.distance   = distance;
        this.img        = img;
        this.element    = null;
        this.isDisposed = false;

        // TODO:ダイエットする
        const canvas  = document.querySelector('#js-canvas');
        this.context = canvas.getContext('2d');
        this.normalImage = new Image();
        this.normalImage.src = this.img.normal;
        // this.disposeImage = new Image();
        // this.disposeImage.src = null;
    }

    draw() {
        this.context.drawImage(this.normalImage, this.left, this.top, this.width, this.height);
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
