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
        this.field.update();
        this.field.draw();
        this.requestID = requestAnimationFrame(this.update.bind(this));
    }

    createPlayer() {
        if(this.player) return;
        
        const field    = this.field;
        const width    = config.player.width;
        const height   = config.player.height;
        const left     = field.left + (field.width / 2) - (width / 2);
        const top      = (field.top + field.height) * 0.8;
        const distance = 0;
        const health   = config.player.health;
        const img      = config.player.img;

        this.player = new Player(this.field, width, height, left, top, distance, health, img);
        this.field.addItem(this.player);
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
        this.field.addItem(bullet);
    }

    createEnemy() {
        // TODO: どうにかする
        if(this.score >= 10) {
            stopEnemyTimer();
            this.createBoss();
            return;
        }
        const position = this.getEnemyAppearancePosition();
        const width    = config.enemy.width;
        const height   = config.enemy.height;
        const left     = position.left;
        const top      = position.top;
        const distance = config.enemy.distance
        const health   = config.enemy.health;
        const img      = config.enemy.img;

        const enemy = new Enemy(this.field, width, height, left, top, distance, health, img);
        this.field.addItem(enemy);
    }

    createBoss() {
        const field    = this.field;
        const width    = config.boss.width;
        const height   = config.boss.height;
        const left     = field.left + (field.width / 2) - (width / 2);
        const top      = config.boss.top;
        const distance = config.boss.distance
        const health   = config.boss.health;
        const img      = config.boss.img;

        const boss = new Boss(this.field, width, height, left, top, distance, health, img);
        this.field.addItem(boss);
    }
    
    // enemyの出現位置を取得する
    getEnemyAppearancePosition() {
        const position = {top: 0, left: 0};

        const ft = this.field.top;
        const fl = this.field.left;
        const fw = this.field.width;
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
