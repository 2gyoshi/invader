'usestrict'

class Field {
    constructor(width, height, top, left) {
        this.width      = width;
        this.height     = height;
        this.top        = top;
        this.left       = left;
        this.collection = [];

        const canvas = document.querySelector('#field');
        this.context = canvas.getContext('2d');
    }

    addItem(item) {
        this.collection.push(item);
    }

    removeItem(item) {
        this.collection = this.collection.filter(e => e !== item);
    }

    erase() {
        this.context.clearRect(this.left, this.top, this.width, this.height);
    }

    update() {
        this.collection.forEach(e => e.update());
        this.collection.forEach(e => this.checkCollision(e));
        this.cleanUpUnnecessaryObject();
    }

    draw() {
        this.erase();
        this.collection.forEach(e => e.draw());
    }

    cleanUpUnnecessaryObject() {
        for(let item of this.collection) {
            if(item.getIsDisposed() === false) continue;
            this.removeItem(item);

            // TODO: どうにかする
            // if(item.type === 'enemy') {
            //     this.score++;
            // }
            // if(item.type === 'boss') {
            //     this.finish('clear');
            // }
            // if(item.type === 'player') {
            //     this.finish('over');
            // }
            
            item = null;
        }
    }

    checkCollision(target) {
        // オブジェクトの中点を取得する
        const hw = target.width / 2;
        const hh = target.height / 2;
        const x = target.left + hw;
        const y = target.top + hh;

        for(let item of this.collection) {
            if(target === item) continue;

            // オブジェクトの中点を取得する
            let itemhw = item.width / 2;
            let itemhh = item.height / 2;
            let itemx = item.left + itemhw;
            let itemy = item.top + itemhh;

            // 縦横の重なりを判定
            let xd = Math.abs(x - itemx) < hw + itemhw;
            let yd = Math.abs(y - itemy) < hh + itemhh;
            
            if(xd === false || yd === false) continue;
            
            target.hit();
            break;
        }
    }

}