'use strict'

import {E_Base} from './e_base';

// タッチイベントクラス
export class E_Button extends E_Base {
    constructor() {
        super();
    }

    init() {
        const domStrBtn = document.querySelector('#js-start-btn');
        const domStpBtn = document.querySelector('#js-stop-btn');
        const domRstBtn = document.querySelector('#js-reset-btn');
        domStrBtn.addEventListener('click', cManager.start.bind(cManager));
        domStpBtn.addEventListener('click', cManager.stop.bind(cManager));
        domRstBtn.addEventListener('click', cManager.reset.bind(cManager));
        domStrBtn.addEventListener('touchstart', cManager.start.bind(cManager));
        domStpBtn.addEventListener('touchstart', cManager.stop.bind(cManager));
        domRstBtn.addEventListener('touchstart', cManager.reset.bind(cManager));
    }
}
