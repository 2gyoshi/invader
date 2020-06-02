'usestrict'

window.addEventListener('load', main);
window.addEventListener('resize', e => new Background().render());

function main() {
    // 背景の星を作る
    new Background().render();
    
    // ゲームを管理するオブジェクトを生成する
    const field = document.querySelector('#js-field');

    const utility = new Utility();
    const manager = new Manager(utility, field);

    // キー入力イベントを設定する
    window.addEventListener('keydown', e => {
        if(manager.isPlaying === false) return;
        const distance = manager.player.width;
        switch(e.keyCode) {
            case 32: // スペースキー入力
                // TODO: プレイヤーにもたせたい機能
                manager.createBullet();
                break;
            case 37:　// 左キー入力
                manager.player.move(distance * -1, 0);
                break;
            case 39: // 右キー入力
                manager.player.move(distance, 0);
                break;
            default:
                break;
        }
    }, false);

    // ゲームを開始する
    const startBtn = document.querySelector('#js-start-btn');
    startBtn.addEventListener('click', e => {
        utility.displayControl('start');
        manager.start();
    });

    // ゲームを停止する
    const stopBtn = document.querySelector('#js-stop-btn');
    stopBtn.addEventListener('click', e => {
        utility.displayControl('stop');
        manager.stop();
    });

    // ゲームをリセットする
    const resetBtn = document.querySelector('#js-reset-btn');
    resetBtn.addEventListener('click', e => {
        utility.displayControl('start');
        location.reload();
    });
}