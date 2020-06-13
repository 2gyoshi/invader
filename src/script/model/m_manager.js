'use strict'

import { config } from '../config/config';
import { M_Score } from './e_enemy';
import { M_EnemyTimer } from './e_enemy';

export class M_Manager {
    constructor(factory, space, field, rule, charaList) {
        this.factory       = factory;
        this.space         = space;
        this.field         = field;
        this.rule          = rule;
        this.characterList = charaList;
        this.status     = '';

        this.score = new M_Score();
        this.timer = new M_EnemyTimer();
    }

    init() {
        this.status = config.game.status.default;
    }

    resize() {
        this.space.resize();
        this.field.resize();
    }

    removeItem(item) {
        
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
        this.checkStatus();
        this.createEnemy();
        this.characterList.update();
        this.rule.update();
        this.disposeItem();
    }

    checkStatus() {
        if(this.score.getScore() > 99) return this.gameClear();
        if(this.score.getScore() < 0)  return this.gameOver();
    }

    createEnemy() {
        if(this.score.getScore() > 9) return this.addBoss();
        if(this.timer.update() === true) return this.addEnemy() 
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

            // TODO: いいやりかた思いついたら変える
            this.score.changeScore(e.getScore());
            this.characterList.removeCharacter(e);
            e = null;
        }
    }
}
