'usestrict'

class GameManager {
    constructor() {
        this.collection = [];
        this.requestID  = null;
        this.enemyTimer = null;
        this.player     = null;
        this.isStart    = false;
        this.score      = 0;
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
        this.createPlayer();
        this.startEnemyTimer();
        this.update();
    }

    stop() {
        this.isStart = false;
        cancelAnimationFrame(this.requestID);
        clearInterval(this.enemyTimer);
    }

    update() {
        this.requestID = requestAnimationFrame(this.update.bind(this));
        this.collection.forEach(e => e.update());
        this.collection.forEach(e => this.collision(e));
        this.clean();
    }

    clear() {
        this.stop();
        // TODO: どうにかする
        const body = document.querySelector('body');
        const element = document.createElement('div');
        element.insertAdjacentHTML('beforeend', 'clear!');
        element.classList.add('clear-message')
        body.insertAdjacentElement('beforeend', element);
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
            
            target.hit();
            break;
        }
    }

    clean() {
        for(let item of this.collection) {
            if(item.getIsDisposed() === false) continue;
            item.element.remove();
            this.removeItem(item);
            // TODO: どうにかする
            if(item.type === 'enemy') {
                this.score++;
            }
            if(item.type === 'boss') {
                this.clear();
            }
            item = null;
        }
    }

    // TODO: 分離したい
    createPlayer() {
        if(this.player !== null) return;
        const field  = document.querySelector('#js-field');
        const width  = 50;
        const height = 50;
        const left   = (field.clientWidth * 0.5) - (width * 0.5)
        const top    = field.clientHeight * 0.8;
        this.player  = new Player(field, width, height, left, top);
        this.addItem(this.player);
        this.player.createElement();
    }

    // TODO: 分離したい
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

    // TODO: 分離したい
    createEnemy() {
        if(this.score >= 10) {
            clearInterval(this.enemyTimer);
            this.createBoss();
            return;
        }

        const field    = document.querySelector('#js-field');
        const width    = 50;
        const height   = 50;
        const left     = this.utility.getEnemyLeft(width * 0.5);
        const top      = 10;
        const distance = 0.5;
        const enemy = new Enemy(field, width, height, left, top, distance);
        enemy.createElement();
        this.addItem(enemy);
    }

    // TODO: 分離したい
    startEnemyTimer() {
        this.enemyTimer = setInterval(() => this.createEnemy(), 3000);
    }

    // TODO: 分離したい
    createBoss() {
        const field    = document.querySelector('#js-field');
        const width    = field.clientWidth;
        const height   = width;
        const left     = (field.clientWidth * 0.5) - (width * 0.5)
        const top      = -10;
        const distance = 0.2;
        const boss = new Boss(field, width, height, left, top, distance);
        boss.createElement();
        this.addItem(boss);
    }
}
