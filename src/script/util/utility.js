'use strict'

import {config} from '../config/config';

// ユーティリティクラス
export class Utility {
    // min以上、max未満の整数を取得する
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    // TODO: いい方法を考えたら変える
    static controlDom(status) {
        const btnId    = config.dom.button.id;
        const msgId    = config.dom.message.id;
        const startBtn = document.querySelector(`#${btnId.start}`);
        const resetBtn = document.querySelector(`#${btnId.reset}`);
        const stopBtn  = document.querySelector(`#${btnId.stop}`);
        const msgClear = document.querySelector(`#${msgId.gameclear}`);
        const msgOver  = document.querySelector(`#${msgId.gameover}`);

        if(!startBtn || !resetBtn || !stopBtn || !msgClear || !msgOver) return;
        
        switch (status) {
            case config.game.status.default:
                startBtn.style.display = 'block';
                resetBtn.style.display = 'block';
                stopBtn.style.display  = 'none';
                msgClear.style.display = 'none';
                msgOver.style.display  = 'none';
                break;
            case config.game.status.playing:
                startBtn.style.display = 'none';
                resetBtn.style.display = 'none';
                stopBtn.style.display  = 'block';
                msgClear.style.display = 'none';
                msgOver.style.display  = 'none';
                break;
            case config.game.status.gameclear:
                startBtn.style.display = 'none';
                resetBtn.style.display = 'block';
                stopBtn.style.display  = 'none';
                msgClear.style.display = 'block';
                msgOver.style.display  = 'none';
                break;
            case config.game.status.gameover:
                startBtn.style.display = 'none';
                resetBtn.style.display = 'block';
                stopBtn.style.display  = 'none';
                msgClear.style.display = 'none';
                msgOver.style.display  = 'block';
                break;
            default:
                break;
        }
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

    static convertKeyCodeToMeaningStr(code) {
        if(!code) return null;

        if(code === 32) return 'space';
        if(code === 37) return 'left';
        if(code === 39) return 'right';
        
        return null;
    }
}
