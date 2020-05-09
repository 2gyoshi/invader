'usestrict'

class GameManager {
    constructor() {
        this.collection = [];
        this.requestID  = 0;
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
        this.judgeCollision();
        this.clean();
    }

    stop() {
        this.isStart = false;
        cancelAnimationFrame(this.requestID);
        clearInterval(this.enemyTimer);
    }

    judgeCollision(){
        for(let target of this.collection) {
            // オブジェクトの中点を取得する
            let centerX4Target = target.left + (target.width * 0.5);
            let centerY4Target = target.top + (target.height * 0.5);

            for(let other of this.collection) {
                if(target === other) continue;

                // オブジェクトの中点を取得する
                let centerX4Other  = other.left + (other.width * 0.5);
                let centerY4Other  = other.top + (other.height * 0.5);

                // 縦横が重なっていないか判定
                let widthDecision  = (Math.abs(centerX4Target - centerX4Other) < (target.width * 0.5) + (other.width * 0.5))   ? true : false;
                let heightDecision = (Math.abs(centerY4Target - centerY4Other) < (target.height * 0.5) + (other.height * 0.5)) ? true : false;
                
                if(widthDecision == false || heightDecision == false) continue;
                
                target.hit();
                other.hit();
            }
        }
    }

    clean() {
        for(let item of this.collection) {
            if(item.isHit === false) continue;
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
        const field = document.querySelector('#js-field');
        const bw = 5;
        const bh = 10;
        const bl = this.player.left + (this.player.width * 0.5) - (bw * 0.5);
        const bt = this.player.top - (bh * 2);
        const bullet = new Bullet(field, bw, bh, bl, bt, -5);
        this.addItem(bullet);
        bullet.createElement();
    }

    // TODO: どうにかする
    createEnemy() {
        const field = document.querySelector('#js-field');
        this.enemyTimer = setInterval(() => {
            const eLeft = this.utility.getEnemyLeft(25);
            const enemy = new Enemy(field, 50, 50, eLeft, 10, 0.5);
            enemy.createElement();
            this.addItem(enemy);
        }, 3000);
    }

}
