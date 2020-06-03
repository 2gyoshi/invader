'usestrict'

window.addEventListener('load', main());
window.addEventListener('resize', e => new Background().render());

function main() {
    // 背景の星を作る
    new Background().render();

    const body = document.querySelector('body');

    // TODO: configから取得する
    const w = 250;
    const h = body.clientHeight;
    const t = 0;
    const l = (body.clientWidth / 2) - (w / 2);

    const utility = new Utility();
    const field = new Field(w, h, t, l);
    const manager = new Manager(utility, field);

    setEventForPC(manager, utility);
}

function setEventForPC(manager, utility){
    // requestAnimationFrameのpolyfil
    window.requestAnimFrame = (function() {
        return (
            window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function(callback, time) {
                var time = time ? time: 1000 / 60;
                window.setTimeout(callback, time);
            }
        );
    })();
      
    // キー入力イベントを設定する
    window.addEventListener('keydown', e => {
        if(manager.isPlaying === false) return;
        const distance = manager.player.width;
        switch(e.keyCode) {
            case 32: 
                // スペースキー入力
                // TODO: プレイヤーにもたせたい機能
                manager.createBullet();
                break;
            case 37:　
                // 左キー入力
                manager.player.move(distance * -1, 0);
                break;
            case 39: 
                // 右キー入力
                manager.player.move(distance, 0);
                break;
            default:
                break;
        }
    }, false);

    const startBtn = document.querySelector('#js-start-btn');
    const stopBtn = document.querySelector('#js-stop-btn');
    const resetBtn = document.querySelector('#js-reset-btn');

    // ゲームを開始する
    startBtn.addEventListener('click', () => {
        utility.displayControl('start');
        manager.start();
    });

    // ゲームを停止する
    stopBtn.addEventListener('click', () => {
        utility.displayControl('stop');
        manager.stop();
    });

    // ゲームをリセットする
    resetBtn.addEventListener('click', () => {
        utility.displayControl('start');
        location.reload();
    });
}
