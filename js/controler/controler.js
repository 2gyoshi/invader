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
        if(device === 'nonpc') this.setEventsForNonPC();

        this.model.init();
        this.view.init();
    }
    
    resize() {
        const collection = this.model.getCollection();
        this.view.resize(collection);
    }

    setEventsForPC() {
        this.addClickBtnEvents();
        this.addControlEventForPC();
    }

    // TODO: これからやる
    setEventsForNonPC() {
        return;
    }

    addClickBtnEvents() {
        this.domStrBtn.addEventListener('click', this.clickStrBtn.bind(this));
        this.domStpBtn.addEventListener('click', this.clickStpBtn.bind(this));
        this.domRstBtn.addEventListener('click', this.clickRstBtn.bind(this));
        this.domStrBtn.addEventListener('touchstart', this.clickStrBtn.bind(this));
        this.domStpBtn.addEventListener('touchstart', this.clickStpBtn.bind(this));
        this.domRstBtn.addEventListener('touchstart', this.clickRstBtn.bind(this));
    }

    addControlEventForPC(){
        // TODO: これからやる
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

    start() {
        this.model.gameStart();
        this.update();
    }

    stop() {
        this.model.gameStop();
        cancelAnimationFrame(this.requestID);
    }

    update() {
        if(this.model.getIsPlaying() === false) return this.stop();

        this.model.update();

        const collection = this.model.getCollection();
        this.view.update(collection);
        
        this.requestID = requestAnimationFrame(this.update.bind(this));
    }
}
