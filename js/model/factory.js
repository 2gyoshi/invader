'use strict'

class Factory {
    constructor(utility, field) {
        this.utility = utility;
        this.field = field;
    }

    createPlayer() {
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

        const player = new Player(field, status, position, look);

        return player;
    }

    createBullet(player) {
        if(!player) return;

        const field    = this.field;

        const type     = config.bullet.type;
        const width    = config.bullet.width;
        const height   = config.bullet.height;
        const life     = config.bullet.life;
        const score    = config.bullet.score;
        const distance = config.bullet.distance;
        const status   = new Status(type, width, height, life, score, distance);

        const pLeft    = player.getLeft();
        const pTop     = player.getTop();
        const pWidth   = player.getWidth();
        const left     = (pLeft + (pWidth / 2)) - (width / 2);
        const top      = pTop - (height * 2);
        const position = new Position(left, top);

        const normal   = config.bullet.look.normal;
        const look     = new Look();
        look.addImage(normal);

        const bullet = new Bullet(field, status, position, look);

        return bullet;
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

        return enemy;
    }

    createBoss() {
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

        return boss;
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