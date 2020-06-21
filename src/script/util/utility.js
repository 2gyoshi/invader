'use strict'

import { CONFIG } from '../config/config';

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
        const w = CONFIG.field.width;
        const h = window.innerHeight;
        const x = (window.innerWidth / 2) - (w / 2);
        const y = 0;
     
        return {w: w, h: h, x: x, y: y};
    }

    static getRootDom() {
        return document.getElementById(CONFIG.domId.root);
    }

    static getConfigCssClass() {
        return CONFIG.cssClass;
    }
    
    static getConfigPlayer() {
        return CONFIG.player;
    }

    static getConfigBullet() {
        return CONFIG.bullet;
    }

    static getConfigEnemy() {
        return CONFIG.enemy;
    }

    static getConfigBoss() {
        return CONFIG.boss;
    }
    
    static getConfigPlayerType() {
        return CONFIG.player.type;
    }

    static getConfigBossType() {
        return CONFIG.boss.type;
    }

    static getConfigEventType() {
        return CONFIG.event.type;
    }

    static getConfigSwipeDist() {
        return CONFIG.event.swipe.dist;
    }
}
