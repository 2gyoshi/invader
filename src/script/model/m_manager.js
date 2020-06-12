'use strict'

import {config} from '../config';

export class M_Manager {
    constructor(mFactory, mSpace, mField, mRule) {
        this.mFactory   = mFactory;
        this.mSpace     = mSpace;
        this.mField     = mField;
        this.mRule      = mRule;
        this.characters = new Array();
        this.enemyTime  = new Date();
        this.status     = '';
        this.score      = 0;
    }

    init() {
        this.status = config.game.status.default;
    }

    resize() {
        this.mSpace.resize();
        this.mField.resize();
    }

    addItem(item) {
        this.characters.push(item);
    }

    removeItem(item) {
        this.characters = this.characters.filter(e => e !== item);
    }

    getCollection() {
        return this.characters;
    }

    getField() {
        return this.mField;
    }

    getPlayer() {
        return this.characters.find(e => e.getType() === config.player.type);
    }

    getBoss() {
        return this.characters.find(e => e.getType() === config.boss.type);
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
        this.characters.forEach(e => e.update());
        this.mRule.update(this.characters);
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
        const player = this.mFactory.createPlayer(this.mField);
        this.addItem(player);
    }

    addBullet() {
        const player = this.getPlayer();
        const bullet = this.mFactory.createBullet(player, this.mField);
        this.addItem(bullet);
    }

    addEnemy() {
        const enemy = this.mFactory.createEnemy(this.mField);
        this.addItem(enemy);
    }

    addBoss() {
        if(this.getBoss()) return;
        const boss = this.mFactory.createBoss(this.mField);
        this.addItem(boss);
    }

    disposeItem() {
        for(let e of this.characters) {
            if(e.isDisposeTarget() === false) continue;
            
            this.removeItem(e);

            // TODO: いいやりかた思いついたら変える
            if(e.getType() === config.enemy.type)  this.score++;
            if(e.getType() === config.boss.type)   this.gameClear();
            if(e.getType() === config.player.type) this.gameOver();
            
            e = null;
        }
    }
}
