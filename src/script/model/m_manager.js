'use strict'

import {config} from '../config';
import {MRule}  from './m_rule';

export class MManager {
    constructor(mFactory, mSpace, mField, mCrash) {
        this.factory    = mFactory;
        this.space      = mSpace;
        this.field      = mField;
        this.mCrash     = mCrash; 
        this.characters = new Array();
        this.enemyTime  = new Date();
        this.status     = '';
        this.score      = 0;
        
        this.rule = new MRule(mField);
    }

    init() {
        this.status = config.game.status.default;
    }

    resize() {
        // TODO: tmp
        this.space.resize();
        this.field.resize();
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
        this.crash();
        this.rule.update(this.characters);
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
        const player = this.factory.createPlayer(this.field);
        this.addItem(player);
    }

    addBullet() {
        const player = this.getPlayer();
        const bullet = this.factory.createBullet(player, this.field);
        this.addItem(bullet);
    }

    addEnemy() {
        const enemy = this.factory.createEnemy(this.field);
        this.addItem(enemy);
    }

    addBoss() {
        if(this.getBoss()) return;
        const boss = this.factory.createBoss(this.field);
        this.addItem(boss);
    }

    crash() {
        const crashItems = this.mCrash.getCrashObjList(this.characters);
        crashItems.forEach(e => e.hit());
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
