'use strict'

// TODO: tmp
import { ModelManager }     from './model-manager';
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

import { Utility }   from '../util/utility';
import { Size }      from './size';
import { Position }  from './position';
import { Looks }     from './looks';
import { Status } 　　from './status';
import { Space }     from './space';
import { Field }     from './field';
import { Player }    from './player';
import { NonPlayer } from './non-player';

export class ModelFactory {
    createModelManager(gameMgr, areaMgr, charaMgr) {
        return new ModelManager(gameMgr, areaMgr, charaMgr);
    }

    createGameMgr(chara, rule) {
        const score = new ScoreManager();
        const time  = new TimeManager();
        const state = new StateManager();
        return new GameManager(chara, rule, score, time, state);
    }

    createRuleMgr(crash, fieldout) {
        return new RuleManager(crash, fieldout);
    }

    createAreaMgr() {
        const space = this.createSpace();
        const field = this.createField();
        return new AreaManager(space, field);
    }

    createCharaMgr() {
        const list = new List();
        return new CharacterManager(list, this);
    }

    createCrash(charaMgr) {
        return new Crash(charaMgr);
    }

    createFieldOut(charaMgr) {
        return new FieldOut(charaMgr);
    }

    createSpace() {
        const prop  = Utility.getSpaceProp();
        const size  = new Size(prop.w, prop.h);
        const pos   = new Position(prop.x, prop.y);
        const space = new Space(size, pos);

        return space;
    }

    createField() {
        const prop  = Utility.getFieldProp();
        const size  = new Size(prop.w, prop.h);
        const pos   = new Position(prop.x, prop.y);
        const field = new Field(size, pos);

        return field;
    }

    createPlayer(mgr) {
        const config   = Utility.getConfigPlayer();
        const fp       = Utility.getFieldProp();

        const width    = config.width;
        const height   = config.height;
        const size     = new Size(width, height);

        const left     = (fp.w / 2) - (width / 2);
        const top      = (fp.h * config.top) - height;
        const position = new Position(left, top);

        const list     = new List();
        const normal   = config.look.normal;
        const dead     = config.look.dead;
        const looks    = new Looks(list, normal, dead);

        const type     = config.type;
        const life     = config.life;
        const score    = config.score;
        const dist     = config.dist;
        const grace    = config.grace;
        const status   = new Status(type, life, dist, score, grace);

        return new Player(size, position, looks, status, mgr);
    }

    createBullet(player) {
        if(!player) return;

        const config   = Utility.getConfigBullet();

        const width    = config.width;
        const height   = config.height;
        const size     = new Size(width, height);

        const pLeft    = player.getLeft();
        const pTop     = player.getTop();
        const pWidth   = player.getWidth();
        const left     = (pLeft + (pWidth / 2)) - (width / 2);
        const top      = pTop - (height * 2);
        const position = new Position(left, top);

        const list     = new List();
        const normal   = config.look.normal;
        const looks    = new Looks(list, normal);

        const type     = config.type;
        const life     = config.life;
        const score    = config.score;
        const dist     = config.dist;
        const grace    = config.grace;
        const status   = new Status(type, life, dist, score, grace); 

        return new NonPlayer(size, position, looks, status);
    }

    createEnemy() {
        const fp       = Utility.getFieldProp();
        const config   = Utility.getConfigEnemy();

        const width    = config.width;
        const height   = config.height;
        const size     = new Size(width, height);

        // Enemyの幅で等分する
        const max      = fp.w / config.width;
        const rand     = Utility.getRandomInt(0, max);
        const left     = rand * config.width;
        const top      = fp.h * config.top;
        const position = new Position(left, top);

        const list     = new List();
        const normal   = config.look.normal;
        const dead     = config.look.dead;
        const looks    = new Looks(list, normal, dead);

        const type     = config.type;
        const life     = config.life;
        const score    = config.score;
        const dist     = config.dist;
        const grace    = config.grace;
        const status   = new Status(type, life, dist, score, grace);

        return new NonPlayer(size, position, looks, status);
    }

    createBoss() {
        const config   = Utility.getConfigBoss();
        const fp       = Utility.getFieldProp();

        const width    = config.width;
        const height   = config.height;
        const size     = new Size(width, height);

        const left     = (fp.w / 2) - (width / 2);
        const top      = fp.y - height;
        const position = new Position(left, top);

        const list     = new List();
        const normal   = config.look.normal;
        const dead     = config.look.dead;
        const looks    = new Looks(list, normal, dead);

        const type     = config.type;
        const life     = config.life;
        const score    = config.score;
        const dist     = config.dist;
        const grace    = config.grace;
        const status   = new Status(type, life, dist, score, grace);

        return new NonPlayer(size, position, looks, status);
    }
}
