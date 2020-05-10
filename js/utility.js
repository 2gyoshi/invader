'usestrict'

class Utility {
    // min以上、max未満の整数を取得する
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    // Enemyの出現位置を取得する
    getEnemyLeft(adjust) {
        const field  = document.querySelector('#js-field');
        const piece  = field.clientWidth / 5;
        const index  = this.getRandomInt(0, 5);
        return (piece * index) + (piece * 0.5) - adjust;
    }

    // TODO: どうにかする
    displayControl(status) {
        const startBtn = document.querySelector('#js-start-btn');
        const resetBtn = document.querySelector('#js-reset-btn');
        const stopBtn  = document.querySelector('#js-stop-btn');
        const message  = document.querySelector('.message');

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
            case 'clear':
                startBtn.style.display = 'none';
                resetBtn.style.display = 'block';
                stopBtn.style.display  = 'none';
                message.style.display  = 'block';
            default:
                break;
        }
    }
}
