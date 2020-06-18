'use strict'

// TODO: tmp
import { ModelManager }     from './model-manager'
import { GameManager }      from './game-manager';
import { RuleManager }      from './rule-manager';
import { AreaManager }      from './area-manager';
import { CharacterManager } from './character-manager';
import { StateManager }     from './state-manager';
import { ScoreManager }     from './score-manager';
import { TimeManager }      from './time-manager';

import { List }       from './list';
import { Crash }      from './crash';
import { FieldOut }   from './field-out';

export class ManagerFactory {

    createModelManager(game, area, chara) {
        return new ModelManager(game, area, chara);
    }
    
    createGameMgr(rule, chara, score, time, state) {
        return new GameManager(rule, chara, score, time, state);
    }

    createRuleMgr(crash, fieldout) {
        return new RuleManager(crash, fieldout);
    }

    createAreaMgr(space, field) {
        return new AreaManager(space, field);
    }

    createCharaMgr(list, factory) {
        return new CharacterManager(list, factory);
    }

    createStateManager() {
        return new StateManager();
    }

    createScoreManager() {
        return new ScoreManager();
    }

    createTimeManager() {
        return new TimeManager();
    }


    createList() {
        return new List();
    }

    createCrash(charList) {
        return new Crash(charList);
    }

    createFieldOut(field, charList) {
        return new FieldOut(field, charList);
    }
}
