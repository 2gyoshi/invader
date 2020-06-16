'use strict'

import { config }       from '../config/config';
import { Utility }      from '../util/utility';
import { MA_Size }      from './MA_Size';
import { MA_Position }  from './MA_Position';
import { MA_Look }      from './MA_Look';
import { MA_Status }    from './MA_Status';
import { MC_Space }     from './MC_Space';
import { MC_Field }     from './MC_field';
import { MC_Player }    from './MC_Player';
import { MC_NonPlayer } from './MC_NonPlayer';

// Modelのファクトリークラス
export class MC_Factory {
    createSpace() {
        const prop  = Utility.getSpaceProp();
        const size  = new MA_Size(prop.w, prop.h);
        const pos   = new MA_Position(prop.x, prop.y);
        const space = new MC_Space(size, pos);

        return space;
    }

    createField() {
        const prop  = Utility.getFieldProp();
        const size  = new MA_Size(prop.w, prop.h);
        const pos   = new MA_Position(prop.x, prop.y);
        const field = new MC_Field(size, pos);

        return field;
    }

    createPlayer(mgr) {
        const fp       = Utility.getFieldProp();

        const width    = config.player.width;
        const height   = config.player.height;
        const size     = new MA_Size(width, height);

        const left     = (fp.w / 2) - (width / 2);
        const top      = (fp.h * config.player.top) - height;
        const position = new MA_Position(left, top);

        const normal   = config.player.look.normal;
        const dead     = config.player.look.dead;
        const look     = new MA_Look();
        look.addImage(normal);
        look.addImage(dead);

        const type     = config.player.type;
        const life     = config.player.life;
        const score    = config.player.score;
        const dist     = config.player.dist;
        const grace    = config.player.grace;
        const status   = new MA_Status(type, life, dist, score, grace);

        return new MC_Player(size, position, look, status, mgr);
    }

    createBullet(player) {
        if(!player) return;

        const width    = config.bullet.width;
        const height   = config.bullet.height;
        const size     = new MA_Size(width, height);

        const pLeft    = player.getLeft();
        const pTop     = player.getTop();
        const pWidth   = player.getWidth();
        const left     = (pLeft + (pWidth / 2)) - (width / 2);
        const top      = pTop - (height * 2);
        const position = new MA_Position(left, top);

        const normal   = config.bullet.look.normal;
        const look     = new MA_Look();
        look.addImage(normal);

        const type     = config.bullet.type;
        const life     = config.bullet.life;
        const score    = config.bullet.score;
        const dist     = config.bullet.dist;
        const grace    = config.bullet.grace;
        const status   = new MA_Status(type, life, dist, score, grace); 

        return new MC_NonPlayer(size, position, look, status);
    }

    createEnemy() {
        const width    = config.enemy.width;
        const height   = config.enemy.height;
        const size     = new MA_Size(width, height);

        const position = this.getEnemyAppearPos();

        const normal   = config.enemy.look.normal;
        const dead     = config.enemy.look.dead;
        const look     = new MA_Look();
        look.addImage(normal);
        look.addImage(dead);

        const type     = config.enemy.type;
        const life     = config.enemy.life;
        const score    = config.enemy.score;
        const dist     = config.enemy.dist;
        const grace    = config.enemy.grace;
        const status   = new MA_Status(type, life, dist, score, grace);

        return new MC_NonPlayer(size, position, look, status);
    }

    createBoss() {
        const fp = Utility.getFieldProp();

        const width    = config.boss.width;
        const height   = config.boss.height;
        const size     = new MA_Size(width, height);

        const left     = (fp.w / 2) - (width / 2);
        const top      = fp.y - height;
        const position = new MA_Position(left, top);

        const normal   = config.boss.look.normal;
        const dead     = config.boss.look.dead;
        const look     = new MA_Look();
        look.addImage(normal);
        look.addImage(dead);

        const type     = config.boss.type;
        const life     = config.boss.life;
        const score    = config.boss.score;
        const dist     = config.boss.dist;
        const grace    = config.boss.grace;
        const status   = new MA_Status(type, life, dist, score, grace);

        return new MC_NonPlayer(size, position, look, status);
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

        position = new MA_Position(left, top);

        return position;
    }
}
