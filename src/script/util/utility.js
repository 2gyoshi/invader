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
    
    // TODO: いい方法を考えたら変える
    static controlDom(state) {
        const index = document.querySelector('.index');
        index.classList = `index --${state}`;
    }

    static getSpaceProp() {
        const body = document.querySelector('body');
        const w = body.clientWidth;
        const h = body.clientHeight;
        const x = 0;
        const y = 0;
    
        return {w: w, h: h, x: x, y: y};
    }

    static getFieldProp() {
        const body = document.querySelector('body');
        const w = config.field.width;
        const h = body.clientHeight;
        const x = (body.clientWidth / 2) - (w / 2);
        const y = 0;
     
        return {w: w, h: h, x: x, y: y};
    }

    static getPlayerType() {
        return config.player.type;
    }

    static getBossType() {
        return config.boss.type;
    }
}
