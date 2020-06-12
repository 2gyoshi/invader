'use strict'

import {config} from '../config';

export class M_Manager {
    constructor(factory, space, field, rule, charaList) {
        this.factory       = factory;
        this.space         = space;
        this.field         = field;
        this.rule          = rule;
        this.characterList = charaList;
        // TODO: どうにかしたい
        this.enemyTime  = new Date();
        this.status     = '';
        this.score      = 0;
    }

    init() {
        this.status = config.game.status.default;
    }

    resize() {
        this.space.resize();
        this.field.resize();
    }

    removeItem(item) {
        this.characterList.removeCharacter(item);
    }

    getPlayer() {
        return this.characterList.getPlayer();
    }

    getBoss() {
        return this.characterList.getBoss();
    }

    getCollection() {
        return this.characterList.getCharacterList();
    }

    getField() {
        return this.field;
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
        this.characterList.update();
        this.rule.update();
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
        this.characterList.addCharacter(player);
    }

    addBullet() {
        const player = this.getPlayer()
        if(!player) return;

        const bullet = this.factory.createBullet(player);
        this.characterList.addCharacter(bullet);
    }

    addEnemy() {
        const enemy = this.factory.createEnemy();
        this.characterList.addCharacter(enemy);
    }

    addBoss() {
        if(this.getBoss()) return;

        const boss = this.factory.createBoss();
        this.characterList.addCharacter(boss);
    }

    disposeItem() {
        const array = this.characterList.getCharacterList();
        for(let e of array) {
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
