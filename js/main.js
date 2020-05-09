'usestrict'

class Main {
    constructor() {
        this.manager = new GameManager();
    }

    // ゲームスタート
    start() {
        this.manager.start();
        this.manager.createPlayer();
        this.manager.createEnemy();
    }

    // 一時停止
    stop() {
        this.manager.stop();
    }
}

window.onload = function() {
    const main　= new Main();
    window.addEventListener('keydown', e => {
        if(main.manager.isStart === false) return;
        switch(e.keyCode) {
            case 32: // スペースキー入力
                main.manager.createBullet();
                break;
            case 37:　// 左キー入力
                main.manager.player.move(-10, 0);
                break;
            case 39: // 右キー入力
                main.manager.player.move(10, 0);
                break;
            default:
                break;
        }
    }, false);

    const utility 　= new Utility();
    const startBtn = document.querySelector('#js-start-btn');
    const resetBtn = document.querySelector('#js-reset-btn');
    const stopBtn  = document.querySelector('#js-stop-btn');

    startBtn.addEventListener('click', e => {
        utility.buttonControl(true);
        main.start();
    });

    resetBtn.addEventListener('click', e => {
        utility.buttonControl(true);
        location.reload();
    });

    stopBtn.addEventListener('click', e => {
        utility.buttonControl(false);
        main.stop();
    });
}
