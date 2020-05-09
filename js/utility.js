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
    buttonControl(isStart) {
        const startBtn = document.querySelector('#js-start-btn');
        const resetBtn = document.querySelector('#js-reset-btn');
        const stopBtn  = document.querySelector('#js-stop-btn');
    
        if(isStart) {
            startBtn.disabled = true;
            startBtn.style.display = 'none';
        
            resetBtn.disabled = true;
            resetBtn.style.display = 'none';
        
            stopBtn.disabled = false;
            stopBtn.style.display = 'block';
        } else {
            startBtn.disabled = false;
            startBtn.style.display = 'block';
        
            resetBtn.disabled = false;
            resetBtn.style.display = 'block';
        
            stopBtn.disabled = true;
            stopBtn.style.display = 'none';
        }
    }
}
