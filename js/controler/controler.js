'use strict'

// Controlerクラス
class Controler {
    constructor(utility, model, view) {
        this.utility   = utility;
        this.model     = model;
        this.view      = view;
        this.domStrBtn = document.querySelector('#js-start-btn');
        this.domStpBtn = document.querySelector('#js-stop-btn');
        this.domRstBtn = document.querySelector('#js-reset-btn');
    }

    init() {
        let device = 'pc';

        if(device === 'pc') this.setEventsForPC();
        // if(device === 'notpc') this.setEventsForNotPC();

        this.model.setField(this.view.getField());
        this.view.init();
    }
    
    resize() {
        this.view.resize();
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

    addClickBtnEvents() {
        if(!this.domStrBtn || !this.domStpBtn || !this.domRstBtn) return;

        this.domStrBtn.addEventListener('click', this.clickStrBtn.bind(this));
        this.domStpBtn.addEventListener('click', this.clickStpBtn.bind(this));
        this.domRstBtn.addEventListener('click', this.clickRstBtn.bind(this));
    }

    addControlEventForPC(){
        if(!this.utility || !this.model) return;
        window.addEventListener('keydown', this.keyDown.bind(this), false);
    }
    
    clickStrBtn() {
        this.utility.displayControl('start');
        this.start();
    }

    clickStpBtn() {
        this.utility.displayControl('stop');
        this.stop();
    }

    clickRstBtn() {
        this.utility.displayControl('start');
        location.reload();
    }

    keyDown(e) {
        if(!this.utility) return;

        if(this.model.getIsPlaying() === false) return;

        const val = this.utility.convertKeyCodeToMeaningStr(e.keyCode);
        
        if(val === null)    return this.usageForPC();
        if(val === 'space') return this.shoot();
        if(val === 'left')  return this.move('left');
        if(val === 'right') return this.move('right');
    }
    
    usageForPC() {
        // TODO: もっといい方法ありそう
        alert(
            `space key => shoot
            left key   => move left
            right key  => move right`
        );
    }

    shoot() {
        if(!this.model) return;
        this.model.createBullet();
    }
    
    move(direction) {
        if(!this.model) return;

        const player = this.model.player;
        if(direction === 'left') return player.moveLeft();
        if(direction === 'right') return player.moveRight();
    }

    // ゲームをスタートする
    start() {
        this.model.gameStart();
        this.update();
    }

    // ゲームをストップする
    stop() {
        this.model.gameStop();
        cancelAnimationFrame(this.requestID);
    }

    // コンテンツをアップデートする
    update() {
        if(!this.model || !this.view) return;

        if(this.model.getIsPlaying() === false) return this.stop();

        this.model.update();

        const collection = this.model.collection;
        this.view.update(collection);
        
        this.requestID = requestAnimationFrame(this.update.bind(this));
    }
}
