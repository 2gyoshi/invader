'use strict'

import {config} from '../config';

export class GameManager {
    constructor(utility, factory) {
        this.utility    = utility;
        this.factory    = factory;
        this.collection = new Array();
        this.enemyTime  = new Date();
        this.status     = '';
        this.score      = 0;
    }

    init() {
        this.status = config.game.status.default;
    }

    addItem(item) {
        this.collection.push(item);
    }

    removeItem(item) {
        this.collection = this.collection.filter(e => e !== item);
    }

    getCollection() {
        return this.collection;
    }

    getPlayer() {
        return this.collection.find(e => e.getType() === config.player.type);
    }

    getBoss() {
        return this.collection.find(e => e.getType() === config.boss.type);
    }

    getStatus() {
        return this.status;
    }

    isPlaying() {
        return this.getStatus() === config.game.status.playing;
    }

    gameStart() {
        this.addPlayer();
        this.status = config.game.status.playing;
    }

    gameStop() {
        this.status = config.game.status.default;
    }

    gameClear() {
        this.status = config.game.status.gameclear;
    }

    gameOver() {
        this.status = config.game.status.gameover;
    }

    update() {
        this.createEnemy();
        this.collection.forEach(e => e.update());
        this.collection.forEach(e => this.collision(e));
        this.disposeItem();
    }

    createEnemy() {
        if(this.score >= 10) return this.addBoss();

        const now = Date.now();
        if(now - this.enemyTime < config.time.enemy) return;

        this.enemyTime = now;
        this.addEnemy();
    }

    addPlayer() {
        if(this.getPlayer()) return;
        const player = this.factory.createPlayer();
        this.addItem(player);
    }

    addBullet() {
        const player = this.getPlayer();
        const bullet = this.factory.createBullet(player);
        this.addItem(bullet);
    }

    addEnemy() {
        const enemy = this.factory.createEnemy();
        this.addItem(enemy);
    }

    addBoss() {
        if(this.getBoss()) return;
        const boss = this.factory.createBoss();
        this.addItem(boss);
    }

    disposeItem() {
        for(let e of this.collection) {
            if(e.isDisposeTarget() === false) continue;
            
            this.removeItem(e);

            // TODO: いいやりかた思いついたら変える
            if(e.getType() === 'enemy')  this.score++;
            if(e.getType() === 'boss')   this.gameClear();
            if(e.getType() === 'player') this.gameOver();
            
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

}
