'usestrict'

class Manager {
    constructor(utility, field) {
        this.utility    = utility;
        this.field      = field;
        this.collection = [];
        this.requestID  = null;
        this.enemyTimer = null;
        this.player     = null;
        this.isPlaying  = false;
        this.score      = 0;
    }

    addItem(item) {
        this.collection.push(item);
    }

    removeItem(item) {
        this.collection = this.collection.filter(e => e !== item);
    }

    start() {
        this.isPlaying = true;
        this.createPlayer();
        this.startEnemyTimer();
        this.update();
    }

    stop() {
        this.isPlaying = false;
        cancelAnimationFrame(this.requestID);
        this.stopEnemyTimer()
    }

    finish(status) {
        this.stop();
        const message = document.querySelector('.message');
        message.innerHTML = `<h1 class="${status}">game ${status}</h1>`;
        this.utility.displayControl(status);
    }

    startEnemyTimer() {
        this.enemyTimer = setInterval(() => this.createEnemy(), config.enemy.appearenceTimeMs);
    }

    stopEnemyTimer() {
        clearInterval(this.enemyTimer);
    }

    update() {
        this.requestID = requestAnimationFrame(this.update.bind(this));
        this.collection.forEach(e => e.update());
        this.collection.forEach(e => this.collision(e));
        this.clean();
    }

    collision(target) {
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
                this.finish('clear');
            }
            if(item.type === 'player') {
                this.finish('over');
            }
            item = null;
        }
    }

    createPlayer() {
        if(this.player) return;
        
        const width    = config.player.width;
        const height   = config.player.height;
        const left     = (this.field.clientWidth / 2) - (width / 2);
        const top      = this.field.clientHeight * 0.8;
        const distance = 0;
        const health   = config.player.health;
        const img      = config.player.img;

        this.player = new Player(this.field, width, height, left, top, distance, health, img);

        this.player.createElement();
        this.addItem(this.player);
    }

    createBullet() {
        const player   = this.player;
        const width    = config.bullet.width;
        const height   = config.bullet.height;
        const left     = player.left + (player.width / 2) - (width / 2);
        const top      = player.top - height;
        const distance = config.bullet.distance;
        const health   = config.bullet.health;
        const img      = config.bullet.img;

        const bullet = new Bullet(this.field, width, height, left, top, distance, health, img);
        
        bullet.createElement();
        this.addItem(bullet);
    }

    createEnemy() {
        // TODO: どうにかする
        if(this.score >= 10) {
            clearInterval(this.enemyTimer);
            this.createBoss();
            return;
        }
        const width    = config.enemy.width;
        const height   = config.enemy.height;
        const left     = this.getEnemyAppearanceLeft();
        const top      = config.enemy.top;
        const distance = config.enemy.distance
        const health   = config.enemy.health;
        const img      = config.enemy.img;

        const enemy = new Enemy(this.field, width, height, left, top, distance, health, img);
        
        enemy.createElement();
        this.addItem(enemy);
    }

    createBoss() {
        const width    = config.boss.width;
        const height   = config.boss.height;
        const left     = (this.field.clientWidth / 2) - (width / 2);
        const top      = config.boss.top;
        const distance = config.boss.distance
        const health   = config.boss.health;
        const img      = config.boss.img;

        const boss = new Boss(this.field, width, height, left, top, distance, health, img);

        boss.createElement();
        this.addItem(boss);
    }
    
    // enemyの出現位置を取得する
    getEnemyAppearanceLeft() {
        // fieldをenemyの幅に応じて分割
        const fw = this.field.clientWidth;
        const ew = config.enemy.width;
        const interval = fw / ew;
        
        // ランダム値からenemyの位置を取得する
        const index = this.utility.getRandomInt(0, interval);
        return index * ew;
    }
}
