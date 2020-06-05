'usestrict'

class Manager {
    constructor(utility) {
        this.utility    = utility;
        this.collection = [];
        this.enemyTimer = null;
        this.player     = null;
        this.score      = 0;
    }

    gameStart() {
        this.createPlayer();
        this.startEnemyTimer();
    }

    gameStop() {
        this.stopEnemyTimer();
    }

    gameOver(status) {
        this.stopEnemyTimer();
        const message = document.querySelector('.message');
        message.innerHTML = `<h1 class="${status}">game ${status}</h1>`;
        this.utility.displayControl(status);
    }

    startEnemyTimer() {
        const time = config.enemy.appearenceTimeMs
        this.enemyTimer = setInterval(() => this.createEnemy(), time);
    }

    stopEnemyTimer() {
        clearInterval(this.enemyTimer);
    }

    update() {
        this.collection.forEach(e => e.update());
        this.collection.forEach(e => this.checkCollision(e));
        this.cleanUpUnnecessaryObject();
    }

    addItem(item) {
        this.collection.push(item);
    }

    removeItem(item) {
        this.collection = this.collection.filter(e => e !== item);
    }

    cleanUpUnnecessaryObject() {
        for(let item of this.collection) {
            if(item.getIsDisposed() === false) continue;
            this.removeItem(item);

            // TODO: どうにかする
            if(item.type === 'enemy')  this.score++;
            if(item.type === 'boss')   this.gameOver('win');
            if(item.type === 'player') this.gameOver('lose');
            
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

    // TODO: これでいいのか?
    getField() {
        const body   = document.querySelector('body');
        const width  = config.field.width;
        const height = body.clientHeight;
        return {'width': width, 'height': height, 'top': 0, 'left': 0};
    }
    
    // TODO: Factory にしたい
    createPlayer() {
        if(this.player) return;
        
        const field    = this.getField();

        const width    = config.player.width;
        const height   = config.player.height;
        const left     = (field.width / 2) - (width / 2);
        const top      = (field.top + field.height) * 0.8;
        const distance = 0;
        const health   = config.player.health;
        const img      = config.player.img;

        this.player = new Player(field, width, height, left, top, distance, health, img);
        this.addItem(this.player);
    }

    createBullet() {
        if(!this.player) return;

        const field    = this.getField();

        const player   = this.player;
        const width    = config.bullet.width;
        const height   = config.bullet.height;
        const left     = player.left + (player.width / 2) - (width / 2);
        const top      = player.top - height;
        const distance = config.bullet.distance;
        const health   = config.bullet.health;
        const img      = config.bullet.img;

        const bullet = new Bullet(field, width, height, left, top, distance, health, img);
        this.addItem(bullet);
    }

    createEnemy() {
        // TODO: どうにかする
        if(this.score >= 10) {
            this.stopEnemyTimer();
            this.createBoss();
            return;
        }
        
        const field    = this.getField();

        const position = this.getEnemyAppearancePosition();
        const width    = config.enemy.width;
        const height   = config.enemy.height;
        const left     = position.left;
        const top      = position.top;
        const distance = config.enemy.distance
        const health   = config.enemy.health;
        const img      = config.enemy.img;

        const enemy = new Enemy(field, width, height, left, top, distance, health, img);
        this.addItem(enemy);
    }

    createBoss() {
        const field    = this.getField();
        
        const width    = config.boss.width;
        const height   = config.boss.height;
        const left     = (field.width / 2) - (width / 2);
        const top      = config.boss.top;
        const distance = config.boss.distance
        const health   = config.boss.health;
        const img      = config.boss.img;

        const boss = new Boss(field, width, height, left, top, distance, health, img);
        this.addItem(boss);
    }
    
    // enemyの出現位置を取得する
    getEnemyAppearancePosition() {
        const position = {top: 0, left: 0};

        const field = this.getField();

        const ft = field.top;
        const fl = field.left;
        const fw = field.width;
        const ew = config.enemy.width;

        // Enemyの幅で等分するランダムな値を取得する
        const max = fw / ew;
        const rand = this.utility.getRandomInt(0, max);
        
        // 調整用
        const adjust = 0.5;

        position.top = ft;
        position.left = fl + (rand * ew) + adjust;

        return position;
    }
}
