'use strict'

// TODO: tmp
import { MA_List }        from './MA_List';
import { MA_CharaMgr }    from './MA_CharaMgr';
import { MA_RuleManager } from './MA_RuleMgr';
import { MA_Score }       from './MA_Score';
import { MA_EnemyTimer }  from './MA_EnemyTimer';
import { MA_GameState }   from './MA_GameState';
import { MA_FieldOut }    from './MA_FieldOut';
import { MA_Crash }       from './MA_Crash';
import { MA_AreaMgr }     from './MA_AreaMgr';

// Modelのファクトリークラス
export class MA_Factory {
    createList() {
        return new MA_List();
    }

    createCharaMgr(list, factory) {
        return new MA_CharaMgr(list, factory);
    }

    createAreaMgr(space, field) {
        return new MA_AreaMgr(space, field);
    }

    createScoreMgr() {
        return new MA_Score();
    }

    createTimeMgr() {
        return new MA_EnemyTimer();
    }

    createStateMgr() {
        return new MA_GameState();   
    }

    createRuleMgr(crash, fieldout) {
        return new MA_RuleManager(crash, fieldout);
    }

    createCrashMgr(charList) {
        return new MA_Crash(charList);
    }

    createFieldMgr(field, charList) {
        return new MA_FieldOut(field, charList);
    }
}
