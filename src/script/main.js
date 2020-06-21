'use strict'
import '../style/index.scss'
import { ManagerFactory }    from './model/manager-factory';
import { GameObjectFactory } from './model/game-object-factory';
import { ViewFactory }  from './view/view-factory';
import { ControllerFactory } from './controler/controller-factory';
import { EventFactory }  from './event/event-factory';

function main() {
    // Model
    const mf = new ManagerFactory();
    const gf = new GameObjectFactory();
    
    const mSpace   = gf.createSpace();
    const mField   = gf.createField();
    const areaMgr = mf.createAreaMgr(mSpace, mField);

    const list     = mf.createList();
    const charaMgr = mf.createCharaMgr(list, gf);

    const crash    = mf.createCrash(charaMgr);
    const fieldOut = mf.createFieldOut(charaMgr);
    const ruleMgr = mf.createRuleMgr(crash, fieldOut);

    const scoreMgr = mf.createScoreManager();
    const timeMgr  = mf.createTimeManager();
    const stateMgr = mf.createStateManager();

    const gameMgr = mf.createGameMgr(ruleMgr, charaMgr, scoreMgr, timeMgr, stateMgr);

    const mMgr = mf.createModelManager(gameMgr, areaMgr, charaMgr);

    // View
    const vFactory = new ViewFactory();
    const vSpace   = vFactory.createSpace(mMgr);
    const vField   = vFactory.createField(mMgr);
    const vMgr     = vFactory.createManager(vSpace, vField);

    // Controler
    const cFactory = new ControllerFactory();
    const cPlayer  = cFactory.createPlayerControler(mMgr);
    const cAreaMgr = cFactory.createAreaControler(mMgr, vMgr);
    const cGameMgr = cFactory.createGameControler(mMgr, vMgr);

    // Event
    const ef = new EventFactory();
    const ek = ef.createKeydownEvent(cPlayer);
    const es = ef.createSwipeEvent(cPlayer);
    const et = ef.createTouchEvent(cPlayer);
    const eb = ef.createButtonEvent(cGameMgr);
    const ew = ef.createWindowEvent(cAreaMgr);
    const eMgr = ef.createEventManager(ek, es, et, eb, ew);

    // Main Controler
    const cMgr = cFactory.createControlerManager(mMgr, vMgr, eMgr);
    cMgr.init();
}

main();