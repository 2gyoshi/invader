'use strict'

// TODO: tmp
import { MA_CharaList }   from './MA_CharaMgr';
import { MA_RuleManager } from './MA_RuleMgr';
import { MA_Score }       from './MA_Score';
import { MA_EnemyTimer }  from './MA_EnemyTimer';
import { MA_GameState }   from './MA_GameState';
import { MA_FieldOut }    from './MA_FieldOut';
import { MA_Crash }       from './MA_Crash';
import { MA_AreaMgr }     from './MA_AreaMgr';

// Modelのファクトリークラス
export class MA_Factory {
    createCharacterList() {
        return new MA_CharaList();
    }

    createScore() {
        return new MA_Score();
    }

    createEnemyTimer() {
        return new MA_EnemyTimer();
    }

    createGameState() {
        return new MA_GameState();   
    }

    createRuleManager(mCrashMgr, mFieldMgr) {
        return new MA_RuleManager(mCrashMgr, mFieldMgr);
    }

    createCrashManager(mCharList) {
        return new MA_Crash(mCharList);
    }

    createFieldManager(mField, mCharList) {
        return new MA_FieldOut(mField, mCharList);
    }

    createAreaManager(space, field) {
        return new MA_AreaMgr(space, field);
    }
}
