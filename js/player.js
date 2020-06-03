'usestrict'

class Player extends Charactor {
    constructor(field, width, height, left, top, distance, health, img) {
        super(field, width, height, left, top, distance, health, img);
        this.type = 'player';
    }

    update() {
        // override nothiong
    }

    move(left, top) {
        const min = this.field.left;
        const max = (this.field.left + this.field.width) - this.width;
        
        if(this.left + left < min) return;
        if(this.left + left > max) return;

        this.left += left;
        this.top  += top;
    }

    dispose() {
        this.isDisposed = true;

        this.imgobj = new Image();
        this.imgobj.src = this.img.dispose;
        this.imgobj.onload = this.draw();

        return 0;
    }
}
