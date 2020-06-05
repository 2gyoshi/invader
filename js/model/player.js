'usestrict'

class Player extends Charactor {
    constructor(field, width, height, left, top, distance, health, imgPath) {
        super(field, width, height, left, top, distance, health, imgPath);
        this.type = 'player';
        
        this.disposedImg = new Image();
        this.disposedImg.src = this.imgPath.dispose;
    }

    update() {
        // override nothiong
    }

    move(left, top) {
        const min = this.field.left;
        const max = (this.field.left + this.field.width) - this.width;
        
        // TODO: リサイズに対応する
        if(this.left + left < min) return;
        if(this.left + left > max) return;

        this.left += left;
        this.top  += top;
    }

    dispose() {
        this.displayImg = this.disposedImg;
        setTimeout(() => this.isDisposed = true, 300);

        return 0;
    }
}
