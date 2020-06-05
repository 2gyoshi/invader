'usestrict'

class Controler {
    constructor(util, model, view) {
        this.util       = util;
        this.model      = model;
        this.view       = view;
        this.isPlaying  = false;
        this.domStrBtn  = document.querySelector('#js-start-btn');
        this.domStpBtn  = document.querySelector('#js-stop-btn');
        this.domRstBtn  = document.querySelector('#js-reset-btn');
    }

    init() {
        let device = 'pc';
        if(device === 'pc') return this.setEventsForPC();
        // if(device === 'notpc') return this.setEventsForNotPC();
    }
    
    // PC用のイベントを設定する
    setEventsForPC() {
        this.polyfill();
        this.addClickBtnEvents();
        this.addControlEventForPC();
    }

    // TODO: これからやる
    // PC以外用のイベントを設定する
    setEventsForNotPC() {
        return;
    }

    // イベントのブラウザ対応をする
    polyfill() {
        // TODO: なんで即時にしてるか調べていらなかったら変える
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
    addClickBtnEvents() {
        if(!this.domStrBtn || !this.domStpBtn || !this.domRstBtn) return;

        this.domStrBtn.addEventListener('click', this.clickStrBtn.bind(this));
        this.domStpBtn.addEventListener('click', this.clickStpBtn.bind(this));
        this.domRstBtn.addEventListener('click', this.clickRstBtn.bind(this));
    }

    // PC用のイベントを設定する
    addControlEventForPC(){
        if(!this.util || !this.model) return;
        window.addEventListener('keydown', this.keyDown.bind(this), false);
    }
    
    // Startボタンクリックイベント
    clickStrBtn() {
        // ゲームを開始する
        this.util.displayControl('start');
        this.start();
    }

    // Stopボタンクリックイベント
    clickStpBtn() {
        // ゲームを停止する
        this.util.displayControl('stop');
        this.stop();
    }

    // Resetボタンクリックイベント
    clickRstBtn() {
        // ゲームをリセットする
        this.util.displayControl('start');
        location.reload();
    }

    // キーボードイベント
    keyDown(e) {
        if(!this.util || !this.isPlaying) return;

        const val = this.util.convertKeyCodeToMeaningStr(e.keyCode);
        
        if(val === null)    return this.helpForPC();
        if(val === 'space') return this.shoot();
        if(val === 'left')  return this.move('left');
        if(val === 'right') return this.move('right');
    }
    
    helpForPC() {
        // TODO: もっといい方法ありそう
        alert(
            `space key => shoot
            left key   => move left
            right key  => move right`
        );
    }

    // 弾を発射する
    shoot() {
        if(!this.model) return;
        this.model.createBullet();
    }

    // プレイヤーを移動する
    move(direction) {
        if(!this.model) return;

        const player = this.model.player
        let distance = null;

        if(direction === 'left') distance = distance = player.width * -1;
        if(direction === 'right') distance = distance = player.width;
        
        if(!direction) return;

        player.move(distance, 0);
    }

    start() {
        this.isPlaying = true;
        this.model.gameStart();
        this.update();
    }

    stop() {
        this.isPlaying = false;
        this.model.gameStop();
        cancelAnimationFrame(this.requestID);
    }

    update() {
        if(!this.model || !this.view) return;

        this.model.update();

        const collection = this.model.collection;
        this.view.update(collection);
        
        this.requestID = requestAnimationFrame(this.update.bind(this));
    }
}
