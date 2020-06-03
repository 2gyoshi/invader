'usestrict'

window.addEventListener('load', main());
window.addEventListener('resize', createBackground());

function main() {
    setCanvasSize();

    const utility = new Utility();
    
    const body = document.querySelector('body');
    const width = config.field.width;
    const height = body.clientHeight;
    const top = config.field.top;
    const left = (body.clientWidth / 2) - (width / 2);
    const field = new Field(width, height, top, left);

    const manager = new Manager(utility, field);

    // 背景の星を作る
    createBackground()

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

function setCanvasSize() {
    setFieldSize();
    setBackgroundSize();
}

function setFieldSize() {
    const body = document.querySelector('body');
    const canvas = document.querySelector('#field');
    
    if(!canvas || !body) return;

    const width = body.clientWidth;
    const height = body.clientHeight;

    canvas.setAttribute('width',`${width}`);
    canvas.setAttribute('height', `${height}`);
    canvas.style.position = 'absolute';
    canvas.style.top = `${0}px`;
    canvas.style.left = `${0}px`;
}

function setBackgroundSize() {
    const body = document.querySelector('body');
    const canvas = document.querySelector('#background');
    
    if(!canvas || !body) return;

    const width = body.clientWidth;
    const height = body.clientHeight;

    canvas.setAttribute('width',`${width}`);
    canvas.setAttribute('height', `${height}`);
    canvas.style.position = 'absolute';
    canvas.style.top = `${0}px`;
    canvas.style.left = `${0}px`;
}

function createBackground() {
    const utility = new Utility();
    const body = document.querySelector('body');
    const bg = new Background(body.clientWidth, body.clientHeight, 0, 0, utility);
    bg.render();
}