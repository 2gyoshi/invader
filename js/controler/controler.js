'usestrict'

class Controler {
    constructor(util, manager, view) {
        this.domStrBtn  = document.querySelector('#js-start-btn');
        this.domStpBtn  = document.querySelector('#js-stop-btn');
        this.domRstBtn  = document.querySelector('#js-reset-btn');
        this.instanceUtil    = util;
        this.instanceManager = manager;
        // TODO: viewもこっちで管理するようにする
        // this.instanceView = view;
    }

    init() {
        let device = 'pc';
        if(device === 'pc') return this.setEventsForPC();
        // if(device === 'notpc') return this.setEventsForNotPC();
    }
    
    // PC用のイベントを設定する
    setEventsForPC() {
        this.polyfill();
        this.setClickBtnEvents();
        this.setControlEventForPC();
    }

    // TODO: これからやる
    // PC以外用のイベントを設定する
    setEventsForNotPC() {
        return
    }

    // イベントのブラウザ対応をする
    polyfill() {
        // TODO: なんで即時にしてるか調べる
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
    }

    // ボタンクリックイベントを設定する
    setClickBtnEvents() {
        if(!this.domStrBtn || !this.domStpBtn || !this.domRstBtn) return;

        this.domStrBtn.addEventListener('click', this.clickStrBtn.bind(this));
        this.domStpBtn.addEventListener('click', this.clickStpBtn.bind(this));
        this.domRstBtn.addEventListener('click', this.clickRstBtn.bind(this));
    }
    
    // Startボタンクリックイベント
    clickStrBtn() {
        // ゲームを開始する
        this.instanceUtil.displayControl('start');
        this.instanceManager.start();
    }

    // Stopボタンクリックイベント
    clickStpBtn() {
        // ゲームを停止する
        this.instanceUtil.displayControl('stop');
        this.instanceManager.stop();
    }

    // Resetボタンクリックイベント
    clickRstBtn() {
        // ゲームをリセットする
        this.instanceUtil.displayControl('start');
        location.reload();
    }

    // PC用のイベントを設定する
    setControlEventForPC(){
        if(!this.instanceUtil || !this.instanceManager) return;

        // キー入力イベントを設定する (PC向け) 
        window.addEventListener('keydown', this.keyDown.bind(this), false);
    }

    // キーボードイベント
    keyDown(e) {
        const val = this.convertKeyCodeToMeaningStr(e.keyCode);
        if(val === null)    return this.help();
        if(val === 'space') return this.shoot();
        if(val === 'left')  return this.move('left');
        if(val === 'right') return this.move('right');
    }

    // keycodeを意味のわかる文字列に変換する
    convertKeyCodeToMeaningStr(code) {
        if(!code) return null;
        if(code === 32) return 'space';
        if(code === 37) return 'left';
        if(code === 39) return 'right';
    }

    // 弾を発射する
    shoot() {
        if(!this.instanceManager) return;

        this.instanceManager.createBullet();
    }

    // プレイヤーを移動する
    move(direction) {
        if(!this.instanceManager) return;

        const player = this.instanceManager.player
        let distance = null;

        if(direction === 'left') distance = distance = player.width * -1;
        if(direction === 'right') distance = distance = player.width;
        
        if(!direction) return;

        player.move(distance, 0);
    }

}
