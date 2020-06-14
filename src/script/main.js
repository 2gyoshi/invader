'use strict'

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

// tmp
import { M_Score } from './model/m_score';
import { M_EnemyTimer } from './model/m_enemy_timer';
import { M_GameState } from './model/m_game_state';
import { E_Button } from './event/e_button';
import { C_GameManager } from './controler/c_game_manager'

function main() {
    // tmp
    const mFactory  = new M_Factory();
    const mSpace    = mFactory.createSpace();
    const mField    = mFactory.createField();
    const mCharList = mFactory.createCharacterList();
    const mCrash    = new M_Crash(mCharList);
    const mFieldOut = new M_FieldOut(mField, mCharList);
    const mRule     = new M_Rule();
    mRule.addRule(mCrash);
    mRule.addRule(mFieldOut);
    const score = new M_Score();
    const timer = new M_EnemyTimer();
    const state = new M_GameState();    
    const mManager  = new M_Manager(mFactory, mSpace, mField, mRule, mCharList, score, timer, state);

    const vSpace    = new V_Space(mSpace);
    const vField    = new V_Field(mField);
    const vManager  = new V_Manager(vSpace, vField);

    const cPlayer   = new C_Player(mManager);
    const cGManager = new C_GameManager(mManager, vManager);
    const cManager  = new C_Manager(mManager, vManager);

    const eKeydown  = new E_Keydown();
    const eSwipe    = new E_Swipe();
    const eTouch    = new E_Touch();
    const eButton   = new E_Button()
    const eManager  = new E_Manager(eKeydown, eSwipe, eTouch, eButton);
    eKeydown.addController(cPlayer);
    eSwipe.addController(cPlayer);
    eTouch.addController(cPlayer);
    eButton.addController(cGManager);

    eManager.init()

    window.addEventListener('load',   () => cManager.init());
    window.addEventListener('resize', () => cManager.resize());
}

main();