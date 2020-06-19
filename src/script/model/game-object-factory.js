'use strict'

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
        const config   = Utility.getConfigEnemy();

        const width    = config.width;
        const height   = config.height;
        const size     = new Size(width, height);

        const position = this.getEnemyAppearPos();

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

    // enemyの出現位置を取得する
    getEnemyAppearPos() {
        const config = Utility.getConfigEnemy();
        const fp     = Utility.getFieldProp();
        
        let position = null;

        // Enemyの幅で等分する
        const max  = fp.w / config.width;
        const rand = Utility.getRandomInt(0, max);

        const left = rand * config.width;
        const top  = fp.h * config.top;

        position = new Position(left, top);

        return position;
    }
}
