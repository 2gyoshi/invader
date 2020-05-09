'usestrict'

class GameManager {
    constructor() {
        this.collection = [];
        this.requestID  = null;
        this.enemyTimer = null;
        this.player     = null;
        this.isStart    = false;
        this.utility    = new Utility();
    }

    addItem(item) {
        this.collection.push(item);
    }

    removeItem(item) {
        this.collection = this.collection.filter(e => e !== item);
    }

    start() {
        this.isStart = true;
        this.requestID = requestAnimationFrame(this.start.bind(this));
        this.collection.forEach(e => e.update());
        this.collection.forEach(e => this.collision(e));
        this.clean();
    }

    stop() {
        this.isStart = false;
        cancelAnimationFrame(this.requestID);
        clearInterval(this.enemyTimer);
    }

    collision(target) {
        // オブジェクトの中点を取得する
        const hw = target.width * 0.5;
        const hh = target.height * 0.5;
        const x = target.left + hw;
        const y = target.top + hh;

        for(let item of this.collection) {
            if(target === item) continue;
            // オブジェクトの中点を取得する
            let itemhw = item.width * 0.5;
            let itemhh = item.height * 0.5;
            let itemx = item.left + itemhw;
            let itemy = item.top + itemhh;

            // 縦横の重なりを判定
            let xd = Math.abs(x - itemx) < hw + itemhw;
            let yd = Math.abs(y - itemy) < hh + itemhh;
            
            if(xd === false || yd === false) continue;

            target.dispose();
            break;
        }
    }

    clean() {
        for(let item of this.collection) {
            if(item.getIsDisposed() === false) continue;
            item.element.remove();
            this.removeItem(item);
            item = null;
        }
    }

    // TODO: どうにかする
    createPlayer() {
        if(this.player === null) {
            const field = document.querySelector('#js-field');
            const width  = 50;
            const height = 50;
            const left   = (field.clientWidth * 0.5) - (width * 0.5)
            const top    = field.clientHeight * 0.8;
            this.player = new Player(field, width, height, left, top);
            this.addItem(this.player);
            this.player.createElement();
        }
    }

    // TODO: どうにかする
    createBullet() {
        const field    = document.querySelector('#js-field');
        const width    = 5;
        const height   = 10;
        const left     = this.player.left + (this.player.width * 0.5) - (width * 0.5);
        const top      = this.player.top - (height * 2);
        const distance = -5;
        const bullet   = new Bullet(field, width, height, left, top, distance);
        this.addItem(bullet);
        bullet.createElement();
    }

    // TODO: どうにかする
    createEnemy() {
        this.enemyTimer = setInterval(() => {
            const field    = document.querySelector('#js-field');
            const width    = 50;
            const height   = 50;
            const left     = this.utility.getEnemyLeft(width * 0.5);
            const top      = 10;
            const distance = 0.5;
            const enemy = new Enemy(field, width, height, left, top, distance);
            enemy.createElement();
            this.addItem(enemy);
        }, 1800);
    }

}
