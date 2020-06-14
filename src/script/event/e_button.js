'use strict'

import {E_Base} from './e_base';

// タッチイベントクラス
export class E_Button extends E_Base {
    constructor() {
        super();
        this.domStrBtn = document.querySelector('#js-start-btn');
        this.domStpBtn = document.querySelector('#js-stop-btn');
        this.domRstBtn = document.querySelector('#js-reset-btn');
    }

    init() {
        // PC用
        this.domStrBtn.addEventListener('click', this.pressButton.bind(this));
        this.domStpBtn.addEventListener('click', this.pressButton.bind(this));
        this.domRstBtn.addEventListener('click', this.pressButton.bind(this));

        // スマホ、タブレット用
        this.domStrBtn.addEventListener('touchstart', this.pressButton.bind(this));
        this.domStpBtn.addEventListener('touchstart', this.pressButton.bind(this));
        this.domRstBtn.addEventListener('touchstart', this.pressButton.bind(this));
    }

    pressButton(e) {
        const target = e.target;
        if(target === this.domStrBtn) this.start();
        if(target === this.domStpBtn) this.stop();
        if(target === this.domRstBtn) this.reset();
        this.notify(this);
    }

    start() {
        this.setEventName('start');
    }

    stop() {
        this.setEventName('stop');
    }

    reset() {
        this.setEventName('reset');
    }
}
