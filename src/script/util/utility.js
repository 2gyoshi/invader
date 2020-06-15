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
        const btnId    = config.domId.button;
        const msgId    = config.domId.message;
        const startBtn = document.querySelector(`#${btnId.start}`);
        const resetBtn = document.querySelector(`#${btnId.reset}`);
        const stopBtn  = document.querySelector(`#${btnId.stop}`);
        const msgWin   = document.querySelector(`#${msgId.win}`);
        const msgLose  = document.querySelector(`#${msgId.lose}`);

        if(!startBtn || !resetBtn || !stopBtn || !msgWin || !msgLose) return;
        
        switch (state) {
            case config.game.state.default:
                startBtn.style.display = 'block';
                resetBtn.style.display = 'block';
                stopBtn.style.display  = 'none';
                msgWin.style.display = 'none';
                msgLose.style.display  = 'none';
                break;
            case config.game.state.playing:
                startBtn.style.display = 'none';
                resetBtn.style.display = 'none';
                stopBtn.style.display  = 'block';
                msgWin.style.display   = 'none';
                msgLose.style.display  = 'none';
                break;
            case config.game.state.win:
                startBtn.style.display = 'none';
                resetBtn.style.display = 'block';
                stopBtn.style.display  = 'none';
                msgWin.style.display   = 'block';
                msgLose.style.display  = 'none';
                break;
            case config.game.state.lose:
                startBtn.style.display = 'none';
                resetBtn.style.display = 'block';
                stopBtn.style.display  = 'none';
                msgWin.style.display   = 'none';
                msgLose.style.display  = 'block';
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
}
