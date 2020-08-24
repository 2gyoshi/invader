'use strict'

import '../style/index.scss';
import { ModelFactory }      from './model/model-factory';
import { ViewFactory }       from './view/view-factory';
import { ControllerFactory } from './controler/controller-factory';
import { EventFactory }      from './event/event-factory';

function main() {
    // Model
    const mFactory  = new ModelFactory();
    const mCharaMgr = mFactory.createCharaMgr();
    const mAreaMgr  = mFactory.createAreaMgr();
    const mCrash    = mFactory.createCrash(mCharaMgr);
    const mFildOut  = mFactory.createFieldOut(mCharaMgr);
    const mRuleMgr  = mFactory.createRuleMgr(mCrash, mFildOut);
    const mGameMgr  = mFactory.createGameMgr(mCharaMgr, mRuleMgr);
    const mManager  = mFactory.createModelManager(mGameMgr, mAreaMgr, mCharaMgr);

    // View
    const vFactory  = new ViewFactory();
    const vSpace    = vFactory.createSpace(mManager);
    const vField    = vFactory.createField(mManager);
    const vManager  = vFactory.createManager(vSpace, vField);

    // Controler
    const cFactory  = new ControllerFactory();
    const cPlayer   = cFactory.createPlayerController(mManager);
    const cArea     = cFactory.createAreaController(mManager, vManager);
    const cGame     = cFactory.createGameController(mManager, vManager);
    const cManager  = cFactory.createControllerManager(cPlayer, cArea, cGame);

    // Event
    const eFactory  = new EventFactory();
    const eKeydown  = eFactory.createKeydownEvent(cPlayer);
    const eSwipe    = eFactory.createSwipeEvent(cPlayer);
    const eTouch    = eFactory.createTouchEvent(cPlayer);
    const eButton   = eFactory.createButtonEvent(cGame);
    const eWindow   = eFactory.createWindowEvent(cArea);
    const eManager  = eFactory.createEventManager(eKeydown, eSwipe, eTouch, eButton, eWindow);

    mManager.init();
    vManager.init();
    cManager.init();
    eManager.init();
}

main();