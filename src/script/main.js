'use strict'

import {VField}   from './view/v_field';
import {VSpace}   from './view/v_space';
import {VManager} from './view/v_manager';
import {MFactory} from './model/m_factory';
import {MManager} from './model/m_manager';
import {Swipe}    from './controler/swipe';
import {Touch}    from './controler/touch';
import {Keydown}  from './controler/keydown';
import {Event}    from './controler/event';
import {CManager} from './controler/c_manager';

function main() {
    const mFactory = new MFactory();
    const mSpace   = mFactory.createSpace();
    const mField   = mFactory.createField();
    const mManager = new MManager(mFactory, mSpace, mField);

    const vSpace   = new VSpace(mSpace);
    const vField   = new VField(mField);
    const vManager = new VManager(vSpace, vField);
    
    const swipe    = new Swipe(mManager);
    const touch    = new Touch(mManager);
    const keydown  = new Keydown(mManager);
    const event    = new Event(keydown, swipe, touch);
    const cManager = new CManager(mManager, vManager, event);

    const domStrBtn = document.querySelector('#js-start-btn');
    const domStpBtn = document.querySelector('#js-stop-btn');
    const domRstBtn = document.querySelector('#js-reset-btn');
    domStrBtn.addEventListener('click', cManager.start.bind(cManager));
    domStpBtn.addEventListener('click', cManager.stop.bind(cManager));
    domRstBtn.addEventListener('click', cManager.reset.bind(cManager));
    domStrBtn.addEventListener('touchstart', cManager.start.bind(cManager));
    domStpBtn.addEventListener('touchstart', cManager.stop.bind(cManager));
    domRstBtn.addEventListener('touchstart', cManager.reset.bind(cManager));

    window.addEventListener('load',   () => cManager.init());
    window.addEventListener('resize', () => cManager.resize());
}

main();