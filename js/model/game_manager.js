'use strict'

class GameManager {
    constructor(utility) {
        this.utility    = utility;
        this.collection = new Array();
        this.field      = null;
        this.enemyTimer = null;
        this.player     = null;
        this.score      = 0;
        this.isPlaying  = false;
    }

    init(field) {
        this.setField(field)
    }

    setField(field) {
        this.field = field;
    }

    getField() {
        return this.field;
    }

    getIsPlaying() {
        return this.isPlaying;
    }

    gameStart() {
        this.isPlaying = true;
        this.createPlayer();
        this.startEnemyTimer();
    }

    gameStop() {
        this.isPlaying = false;
        this.stopEnemyTimer();
    }

    gameOver(status) {
        this.gameStop();
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
        this.collection.forEach(e => this.collision(e));
        this.disposeItem();
    }

    addItem(item) {
        this.collection.push(item);
    }

    removeItem(item) {
        this.collection = this.collection.filter(e => e !== item);
    }

    disposeItem() {
        for(let e of this.collection) {
            if(e.isDisposeTarget() === false) continue;
            
            this.removeItem(e);

            // TODO: どうにかする
            if(e.getType() === 'enemy') this.score++;
            if(e.getType() === 'boss')  this.gameOver('win');
            if(e.getType() === 'player') this.gameOver('lose');
            
            e = null;
        }
    }

    collision(target) {
        // オブジェクトの中点を取得する
        const p1 = this.getCenterPosition(target);
        let p2, checkX, checkY;

        for(let e of this.collection) {
            if(target === e) continue;

            // オブジェクトの中点を取得する
            p2 = this.getCenterPosition(e);

            // X軸の重なりを判定
            checkX = Math.abs(p1.x - p2.x) < p1.w + p2.w;
            
            // Y軸の重なりを判定
            checkY = Math.abs(p1.y - p2.y) < p1.h + p2.h;
            
            // どちらかの値がfalseなら衝突している
            if(checkX === false || checkY === false) continue;
            
            target.damage();

            break;
        }
    }

    getCenterPosition(object) {
        let result = null;

        const w = object.getWidth() / 2;
        const h = object.getHeight() / 2;
        const x = object.getLeft() + w;
        const y = object.getTop() + h;
        
        result = {x: x, y: y, w: w, h: h};

        return result;
    }

    createPlayer() {
        if(this.player) return;
        
        const field    = this.field;

        const type     = config.player.type;
        const width    = config.player.width;
        const height   = config.player.height;
        const life     = config.player.life;
        const score    = config.player.score;
        const distance = config.player.distance;
        const status   = new Status(type, width, height, life, score, distance);

        const left     = (field.width / 2) - (width / 2);
        const top      = (field.top + field.height) * 0.8;
        const position = new Position(left, top);

        const normal   = config.player.look.normal;
        const dead     = config.player.look.dead;
        const look     = new Look();
        look.addImage(normal);
        look.addImage(dead);

        this.player = new Player(field, status, position, look);
        this.addItem(this.player);
    }

    createBullet() {
        if(!this.player) return;

        const field    = this.field;

        const type     = config.bullet.type;
        const width    = config.bullet.width;
        const height   = config.bullet.height;
        const life     = config.bullet.life;
        const score    = config.bullet.score;
        const distance = config.bullet.distance;
        const status   = new Status(type, width, height, life, score, distance);

        const pLeft    = this.player.getLeft();
        const pTop     = this.player.getTop();
        const pWidth   = this.player.getWidth();
        const left     = (pLeft + (pWidth / 2)) - (width / 2);
        const top      = pTop - (height * 2);
        const position = new Position(left, top);

        const normal   = config.bullet.look.normal;
        const look     = new Look();
        look.addImage(normal);

        const bullet = new Bullet(field, status, position, look);
        this.addItem(bullet);
    }

    createEnemy() {
        if(this.score >= 10) return this.createBoss();
        
        const field    = this.field;

        const type     = config.enemy.type;
        const width    = config.enemy.width;
        const height   = config.enemy.height;
        const life     = config.enemy.life;
        const score    = config.enemy.score;
        const distance = config.enemy.distance;
        const status   = new Status(type, width, height, life, score, distance);

        const position = this.getEnemyAppearancePosition();

        const normal   = config.enemy.look.normal;
        const dead     = config.enemy.look.dead;
        const look     = new Look();
        look.addImage(normal);
        look.addImage(dead);

        const enemy = new Enemy(field, status, position, look);
        this.addItem(enemy);
    }

    createBoss() {
        this.stopEnemyTimer();

        const field    = this.field;

        const type     = config.boss.type;
        const width    = config.boss.width;
        const height   = config.boss.height;
        const life     = config.boss.life;
        const score    = config.boss.score;
        const distance = config.boss.distance;
        const status   = new Status(type, width, height, life, score, distance);

        const left     = (field.width / 2) - (width / 2);
        const top      = field.top - height;
        const position = new Position(left, top);

        const normal   = config.boss.look.normal;
        const dead     = config.boss.look.dead;
        const look     = new Look();
        look.addImage(normal);
        look.addImage(dead);

        const boss = new Enemy(field, status, position, look);
        this.addItem(boss);
    }
    
    // enemyの出現位置を取得する
    getEnemyAppearancePosition() {
        let position = null;

        const fw = this.field.width;
        const ft = this.field.top;
        const ew = config.enemy.width;

        // Enemyの幅で等分するランダムな値を取得する
        const max = fw / ew;
        const rand = this.utility.getRandomInt(0, max);
        
        const left = rand * ew;
        const top = ft;

        position = new Position(left, top);

        return position;
    }
}
