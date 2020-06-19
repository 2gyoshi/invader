'use strict'

import { Utility } from '../util/utility';
import { EventBase } from './event-base';

// ボタンイベントクラス
export class ButtonEvent extends EventBase {
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
        const type = Utility.getConfigEventType();
        this._type = type.start;
    }

    stop() {
        const type = Utility.getConfigEventType();
        this._type = type.stop;
    }

    reset() {
        const type = Utility.getConfigEventType();
        this._type = type.reset;
    }
}
