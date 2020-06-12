'use strict'

// TODO: リネーム
import {M_Factory}  from './model/m_factory';
import {M_FieldOut} from './model/m_fieldout';
import {M_Crash}    from './model/m_crash';
import {M_Rule}     from './model/m_rule';
import {M_Manager}  from './model/m_manager';

import {V_Field}    from './view/v_field';
import {V_Space}    from './view/v_space';
import {V_Manager}  from './view/v_manager';

import {E_Keydown}  from './event/e_keydown';
import {E_Swipe}    from './event/e_swipe';
import {E_Touch}    from './event/e_touch';
import {E_Manager}  from './event/e_manager';

import {C_Player}   from './controler/c_player';
import {C_Manager}  from './controler/c_manager';

function main() {
    const mFactory  = new M_Factory();
    const mSpace    = mFactory.createSpace();
    const mField    = mFactory.createField();

    const mCrash    = new M_Crash();
    const mFieldOut = new M_FieldOut(mField);
    const mRule     = new M_Rule();
    mRule.addRule(mCrash);
    mRule.addRule(mFieldOut);
    
    const mManager  = new M_Manager(mFactory, mSpace, mField, mRule);

    const vSpace    = new V_Space(mSpace);
    const vField    = new V_Field(mField);
    const vManager  = new V_Manager(vSpace, vField);

    const eKeydown  = new E_Keydown();
    const eSwipe    = new E_Swipe();
    const eTouch    = new E_Touch();
    const eManager  = new E_Manager(eKeydown, eSwipe, eTouch);

    const cPlayer   = new C_Player(mManager);
    eKeydown.addController(cPlayer);
    eSwipe.addController(cPlayer);
    eTouch.addController(cPlayer);
    
    const cManager  = new C_Manager(mManager, vManager, eManager);

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