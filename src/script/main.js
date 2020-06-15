'use strict'

// tmp
import {M_Manager}  from './model/m_manager';

import { M_Factory } from './model/m_factory';
import { V_Factory } from './view/v_factory';
import { C_Factory } from './controler/c_factory';
import { E_Factory } from './event/e_factory';

function main() {
    // Model
    const mFactory  = new M_Factory();
    const mSpace    = mFactory.createSpace();
    const mField    = mFactory.createField();
    const mScore    = mFactory.createScore();
    const mTimer    = mFactory.createEnemyTimer();
    const mState    = mFactory.createGameState();
    const mCharList = mFactory.createCharacterList();
    const mCrashMgr = mFactory.createCrashManager(mCharList);
    const mFieldMgr = mFactory.createFieldManager(mField, mCharList);
    const mRuleMgr  = mFactory.createRuleManager(mCrashMgr, mFieldMgr);
    const mMgr  = new M_Manager(mFactory, mSpace, mField, mRuleMgr, mCharList, mScore, mTimer, mState);

    // View
    const vFactory = new V_Factory();
    const vSpace = vFactory.createSpace(mSpace);
    const vField = vFactory.createField(mField);
    const vMgr   = vFactory.createManager(vSpace, vField);

    // Controler
    const cFactory = new C_Factory();
    const cPlayer  = cFactory.createPlayerControler(mMgr)
    const cGameMgr = cFactory.createGameControler(mMgr, vMgr)

    // Event
    const ef = new E_Factory();
    const ek = ef.createKeydownEvent();
    const es = ef.createSwipeEvent();
    const et = ef.createTouchEvent();
    const eb = ef.createButtonEvent();
    const ew = ef.createWindowEvent();
    const eMgr = ef.createEventManager();

    ek.addController(cPlayer);
    es.addController(cPlayer);
    et.addController(cPlayer);
    eb.addController(cGameMgr);
    ew.addController(cGameMgr);
    
    eMgr.addItem(ek);
    eMgr.addItem(es);
    eMgr.addItem(et);
    eMgr.addItem(eb); 
    eMgr.addItem(ew);

    // Main Controler
    const cMgr = cFactory.createControlerManager();
    cMgr.addItem(mMgr);
    cMgr.addItem(vMgr);
    cMgr.addItem(eMgr);
    cMgr.init();
}

main();