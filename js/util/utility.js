'use strict'

// ユーティリティクラス
class Utility {
    // min以上、max未満の整数を取得する
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    // ボタンを管理する
    displayControl(status) {
        // TODO: どうにかする
        const startBtn = document.querySelector('#js-start-btn');
        const resetBtn = document.querySelector('#js-reset-btn');
        const stopBtn  = document.querySelector('#js-stop-btn');
        const message  = document.querySelector('.message');

        if(!startBtn || !resetBtn || !stopBtn || !message) return;
        
        switch (status) {
            case 'start':
                startBtn.style.display = 'none';
                resetBtn.style.display = 'none';
                stopBtn.style.display  = 'block';
                message.style.display  = 'none';
                break;
            case 'stop':
                startBtn.style.display = 'block';
                resetBtn.style.display = 'block';
                stopBtn.style.display  = 'none';
                message.style.display  = 'none';
                break;
            case 'win':
                startBtn.style.display = 'none';
                resetBtn.style.display = 'block';
                stopBtn.style.display  = 'none';
                message.style.display  = 'block';
            case 'lose':
                startBtn.style.display = 'none';
                resetBtn.style.display = 'block';
                stopBtn.style.display  = 'none';
                message.style.display  = 'block';
                break;
            default:
                break;
        }
    }

    // keycodeを意味のわかる文字列に変換する
    convertKeyCodeToMeaningStr(code) {
        if(!code) return null;
        if(code === 32) return 'space';
        if(code === 37) return 'left';
        if(code === 39) return 'right';
    }
    
    // 引数を検証する
    checkArgument(fn, args) {
        args.forEach(e => {
            if(!e) throw new Error(`関数${fn}で引数が不正です`);
        });
    }
}
