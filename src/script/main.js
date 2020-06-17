'use strict'

import { ManagerFactory }    from './model/ManagerFactory';
import { GameObjectFactory } from './model/game-object-factory';
import { ViewFactory }  from './view/view-factory';
import { ControllerFactory } from './controler/controller-factory';
import { EventFactory }  from './event/event-factory';

function main() {
    // Model
    const mf = new ManagerFactory();
    const gf = new GameObjectFactory();
    
    const mSpace     = gf.createSpace();
    const mField     = gf.createField();
    const mAreaMgr   = mf.createAreaMgr(mSpace, mField);

    const mCharaList = mf.createList();
    const mCharaMgr  = mf.createCharaMgr(mCharaList, gf)

    const mCrashMgr  = mf.createCrash(mCharaMgr);
    const mFieldMgr  = mf.createFieldOut(mField, mCharaMgr);
    const mRuleMgr   = mf.createRuleMgr(mCrashMgr, mFieldMgr);

    const mScoreMgr  = mf.createScoreManager();
    const mTimeMgr   = mf.createTimeManager();
    const mStateMgr  = mf.createStateManager();

    const mGameMgr   = mf.createGameMgr(mRuleMgr, mCharaMgr, mScoreMgr, mTimeMgr, mStateMgr);

    // View
    const vFactory = new ViewFactory();
    const vSpace   = vFactory.createSpace(mSpace);
    const vField   = vFactory.createField(mField, mCharaMgr);
    const vMgr     = vFactory.createManager(vSpace, vField);

    // Controler
    const cFactory = new ControllerFactory();
    const cPlayer  = cFactory.createPlayerControler(mCharaMgr, mAreaMgr);
    const cAreaMgr = cFactory.createAreaControler(mAreaMgr, vMgr);
    const cGameMgr = cFactory.createGameControler(mGameMgr, vMgr);

    // Event
    const ef = new EventFactory();
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
    ew.addController(cAreaMgr);
    
    eMgr.addItem(ek);
    eMgr.addItem(es);
    eMgr.addItem(et);
    eMgr.addItem(eb); 
    eMgr.addItem(ew);

    // Main Controler
    const cMgr = cFactory.createControlerManager();
    cMgr.addItem(mGameMgr);
    cMgr.addItem(vMgr);
    cMgr.addItem(eMgr);
    cMgr.init();
}

main();