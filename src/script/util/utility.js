'use strict'

import { config } from '../config/config';

// ユーティリティクラス
export class Utility {
    // min以上、max未満の整数を取得する
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static getSpaceProp() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const x = 0;
        const y = 0;
    
        return {w: w, h: h, x: x, y: y};
    }

    static getFieldProp() {
        const w = config.field.width;
        const h = window.innerHeight;
        const x = (window.innerWidth / 2) - (w / 2);
        const y = 0;
     
        return {w: w, h: h, x: x, y: y};
    }

    static getRootDom() {
        return document.getElementById(config.domId.root);
    }

    static getConfigPlayer() {
        return config.player;
    }

    static getConfigBullet() {
        return config.bullet;
    }

    static getConfigEnemy() {
        return config.enemy;
    }

    static getConfigBoss() {
        return config.boss;
    }
    
    static getConfigPlayerType() {
        return config.player.type;
    }

    static getConfigBossType() {
        return config.boss.type;
    }

    static getConfigEventType() {
        return config.event.type;
    }

    static getConfigGameState() {
        return config.game.state;
    }

    static getConfigSwipeDist() {
        return config.event.swipe.dist;
    }
}
