'use strict'

import { config }    from '../config/config';
import { Utility }   from '../util/utility';
import { List } 　　　from './list';
import { Size }      from './size';
import { Position }  from './position';
import { Looks }     from './looks';
import { Status } 　　from './status';
import { Space }     from './space';
import { Field }     from './field';
import { Player }    from './player';
import { NonPlayer } from './non-player';

export class GameObjectFactory {
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
        const fp       = Utility.getFieldProp();

        const width    = config.player.width;
        const height   = config.player.height;
        const size     = new Size(width, height);

        const left     = (fp.w / 2) - (width / 2);
        const top      = (fp.h * config.player.top) - height;
        const position = new Position(left, top);

        const list     = new List();
        const normal   = config.player.look.normal;
        const dead     = config.player.look.dead;
        const looks    = new Looks(list, normal, dead);

        const type     = config.player.type;
        const life     = config.player.life;
        const score    = config.player.score;
        const dist     = config.player.dist;
        const grace    = config.player.grace;
        const status   = new Status(type, life, dist, score, grace);

        return new Player(size, position, looks, status, mgr);
    }

    createBullet(player) {
        if(!player) return;

        const width    = config.bullet.width;
        const height   = config.bullet.height;
        const size     = new Size(width, height);

        const pLeft    = player.getLeft();
        const pTop     = player.getTop();
        const pWidth   = player.getWidth();
        const left     = (pLeft + (pWidth / 2)) - (width / 2);
        const top      = pTop - (height * 2);
        const position = new Position(left, top);

        const list     = new List();
        const normal   = config.bullet.look.normal;
        const looks    = new Looks(list, normal);

        const type     = config.bullet.type;
        const life     = config.bullet.life;
        const score    = config.bullet.score;
        const dist     = config.bullet.dist;
        const grace    = config.bullet.grace;
        const status   = new Status(type, life, dist, score, grace); 

        return new NonPlayer(size, position, looks, status);
    }

    createEnemy() {
        const width    = config.enemy.width;
        const height   = config.enemy.height;
        const size     = new Size(width, height);

        const position = this.getEnemyAppearPos();

        const list     = new List();
        const normal   = config.enemy.look.normal;
        const dead     = config.enemy.look.dead;
        const looks    = new Looks(list, normal, dead);

        const type     = config.enemy.type;
        const life     = config.enemy.life;
        const score    = config.enemy.score;
        const dist     = config.enemy.dist;
        const grace    = config.enemy.grace;
        const status   = new Status(type, life, dist, score, grace);

        return new NonPlayer(size, position, looks, status);
    }

    createBoss() {
        const fp = Utility.getFieldProp();

        const width    = config.boss.width;
        const height   = config.boss.height;
        const size     = new Size(width, height);

        const left     = (fp.w / 2) - (width / 2);
        const top      = fp.y - height;
        const position = new Position(left, top);

        const list     = new List();
        const normal   = config.boss.look.normal;
        const dead     = config.boss.look.dead;
        const looks    = new Looks(list, normal, dead);

        const type     = config.boss.type;
        const life     = config.boss.life;
        const score    = config.boss.score;
        const dist     = config.boss.dist;
        const grace    = config.boss.grace;
        const status   = new Status(type, life, dist, score, grace);

        return new NonPlayer(size, position, looks, status);
    }

    // enemyの出現位置を取得する
    getEnemyAppearPos() {
        const fp = Utility.getFieldProp();
        
        let position = null;

        // Enemyの幅で等分する
        const max  = fp.w / config.enemy.width;
        const rand = Utility.getRandomInt(0, max);

        const left = rand * config.enemy.width;
        const top  = fp.h * config.enemy.top;

        position = new Position(left, top);

        return position;
    }
}
