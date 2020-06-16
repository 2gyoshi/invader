'use strict'

import { MA_Factory } from './model/MA_Factory';
import { MC_Factory } from './model/MC_Factory';
import { V_Factory }  from './view/v_factory';
import { C_Factory }  from './controler/c_factory';
import { E_Factory }  from './event/e_factory';

function main() {
    // Model
    const maf = new MA_Factory();
    const mcf = new MC_Factory();
    
    const mSpace     = mcf.createSpace();
    const mField     = mcf.createField();
    const mAreaMgr   = maf.createAreaMgr(mSpace, mField);

    const mCharaList = maf.createList();
    const mCharaMgr  = maf.createCharaMgr(mCharaList, mcf)

    const mCrashMgr  = maf.createCrashMgr(mCharaMgr);
    const mFieldMgr  = maf.createFieldMgr(mField, mCharaMgr);
    const mRuleMgr   = maf.createRuleMgr(mCrashMgr, mFieldMgr);

    const mScoreMgr  = maf.createScoreMgr();
    const mTimeMgr   = maf.createTimeMgr();
    const mStateMgr  = maf.createStateMgr();

    const mGameMgr   = maf.createGameMgr(mRuleMgr, mCharaMgr, mScoreMgr, mTimeMgr, mStateMgr);

    // View
    const vFactory = new V_Factory();
    const vSpace   = vFactory.createSpace(mSpace);
    const vField   = vFactory.createField(mField, mCharaMgr);
    const vMgr     = vFactory.createManager(vSpace, vField);

    // Controler
    const cFactory = new C_Factory();
    const cPlayer  = cFactory.createPlayerControler(mCharaMgr, mAreaMgr);
    const cAreaMgr = cFactory.createAreaControler(mAreaMgr, vMgr);
    const cGameMgr = cFactory.createGameControler(mGameMgr, vMgr);

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