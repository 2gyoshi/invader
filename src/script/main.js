'use strict'

// TODO: リネーム
import {MFactory}  from './model/m_factory';
import {MCrash}    from './model/m_crash';
import {MManager}  from './model/m_manager';

import {VField}    from './view/v_field';
import {VSpace}    from './view/v_space';
import {VManager}  from './view/v_manager';

import {E_Keydown} from './event/e_keydown';
import {E_Swipe}   from './event/e_swipe';
import {E_Touch}   from './event/e_touch';
import {E_Manager} from './event/e_manager';

import {C_Player}  from './controler/c_player';
import {CManager}  from './controler/c_manager';

function main() {
    const mFactory = new MFactory();
    const mSpace   = mFactory.createSpace();
    const mField   = mFactory.createField();
    const mCrash   = new MCrash();
    const mManager = new MManager(mFactory, mSpace, mField, mCrash);

    const vSpace   = new VSpace(mSpace);
    const vField   = new VField(mField);
    const vManager = new VManager(vSpace, vField);

    const cPlayer  = new C_Player(mManager);
    
    const eKeydown = new E_Keydown();
    const eSwipe   = new E_Swipe();
    const eTouch   = new E_Touch();
    eKeydown.addController(cPlayer);
    eSwipe.addController(cPlayer);
    eTouch.addController(cPlayer);

    const eManager = new E_Manager(eKeydown, eSwipe, eTouch);
    
    const cManager = new CManager(mManager, vManager, eManager);

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