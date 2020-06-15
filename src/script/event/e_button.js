'use strict'

import { config }  from '../config/config';
import { E_Base } from './e_base';

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
        if(e.target === this.domStrBtn) this.start();
        if(e.target === this.domStpBtn) this.stop();
        if(e.target === this.domRstBtn) this.reset();
        this.notify(this);
    }

    start() {
        this._eventName = config.event.type.start;
    }

    stop() {
        this._eventName = config.event.type.stop;
    }

    reset() {
        this._eventName = config.event.type.reset;
    }
}
