'use strict'

import { MA_Factory } from './model/MA_Factory';
import { MC_Factory } from './model/MC_Factory';
import { V_Factory } from './view/v_factory';
import { C_Factory } from './controler/c_factory';
import { E_Factory } from './event/e_factory';

// tmp
import { MA_GameMgr } from './model/MA_GameMgr';
import { MA_List } from './model/MA_List';
import { MA_CharaMgr } from './model/MA_CharaMgr';

function main() {
    // Model
    const maf  = new MA_Factory();
    
    const charaList = new MA_List();
    const mcf  = new MC_Factory(charaList);
    
    const mSpace    = mcf.createSpace();
    const mField    = mcf.createField();
    const mAreaMgr  = maf.createAreaManager(mSpace, mField);

    const mScore    = maf.createScore();
    const mTimer    = maf.createEnemyTimer();
    const mState    = maf.createGameState();


    const mCharaMgr = new MA_CharaMgr(charaList, mcf)


    const mCrashMgr = maf.createCrashManager(mCharaMgr);
    const mFieldMgr = maf.createFieldManager(mField, mCharaMgr);
    const mRuleMgr  = maf.createRuleManager(mCrashMgr, mFieldMgr);

    const mGameMgr  = new MA_GameMgr(mRuleMgr, mCharaMgr, mScore, mTimer, mState);


    
    
    
    
    
    
    
    
    
    
    
    
    
    // View
    const vFactory = new V_Factory();
    const vSpace   = vFactory.createSpace(mSpace);
    const vField   = vFactory.createField(mField);
    const vMgr     = vFactory.createManager(vSpace, vField);

    // Controler
    const cFactory = new C_Factory();
    const cPlayer  = cFactory.createPlayerControler(mCharaMgr, mAreaMgr);
    const cAreaMgr = cFactory.createAreaControler(mGameMgr);
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