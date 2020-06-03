'usestrict'

class Enemy extends Charactor {
    constructor(field, width, height, left, top, distance, health, img) {
        super(field, width, height, left, top, distance, health, img);
        this.type = 'enemy';

        this.disposeImage = new Image();
        this.disposeImage.src = this.img.dispose;
    }

    update() {
        super.update();
        if(this.top > document.documentElement.clientHeight * 0.8) {
            this.dispose();
        }
    }

    // dispose() {
    //     this.isDisposed = true;
    //     setTimeout(this.explosion(), 1000);
    //     return 1;
    // }

    // explosion() {
    //     this.field.drawImage(this.disposeImage, this.left, this.top, this.width, this.height);
    // }
}
