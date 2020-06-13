'use strict'

import {config}           from '../config/config';
import {Utility}          from '../util/utility';
import {M_Size}           from './m_size';
import {M_Position}       from './m_position';
import {M_Look}           from './m_look';
import {M_Status}         from './m_status';
import {M_Space}          from './m_space';
import {M_Field}          from './m_field';
import {M_Player}         from './m_player';
import {M_Bullet}         from './m_bullet';
import {M_Enemy}          from './m_enemy';
import {M_CharacterList}  from './m_character_List'

// Modelのファクトリークラス
export class M_Factory {
    createCharacterList() {
        return new M_CharacterList();
    }

    createSpace() {
        const prop  = Utility.getSpaceProp();
        const size  = new M_Size(prop.w, prop.h);
        const pos   = new M_Position(prop.x, prop.y);
        const space = new M_Space(size, pos);

        return space;
    }

    createField() {
        const prop  = Utility.getFieldProp();
        const size  = new M_Size(prop.w, prop.h);
        const pos   = new M_Position(prop.x, prop.y);
        const field = new M_Field(size, pos);

        return field;
    }

    createPlayer() {
        const fp       = Utility.getFieldProp();

        const width    = config.player.width;
        const height   = config.player.height;
        const size     = new M_Size(width, height);

        const left     = (fp.w / 2) - (width / 2);
        const top      = (fp.h * config.player.top) - height;
        const position = new M_Position(left, top);

        const normal   = config.player.look.normal;
        const dead     = config.player.look.dead;
        const look     = new M_Look();
        look.addImage(normal);
        look.addImage(dead);

        const type     = config.player.type;
        const life     = config.player.life;
        const score    = config.player.score;
        const dist     = config.player.dist;
        const grace    = config.player.grace;
        const status   = new M_Status(type, life, dist, score, grace);

        const player = new M_Player(size, position, look, status);

        return player;
    }

    createBullet(player) {
        if(!player) return;

        const width    = config.bullet.width;
        const height   = config.bullet.height;
        const size     = new M_Size(width, height);

        const pLeft    = player.getLeft();
        const pTop     = player.getTop();
        const pWidth   = player.getWidth();
        const left     = (pLeft + (pWidth / 2)) - (width / 2);
        const top      = pTop - (height * 2);
        const position = new M_Position(left, top);

        const normal   = config.bullet.look.normal;
        const look     = new M_Look();
        look.addImage(normal);

        const type     = config.bullet.type;
        const life     = config.bullet.life;
        const score    = config.bullet.score;
        const dist     = config.bullet.dist;
        const grace    = config.bullet.grace;
        const status   = new M_Status(type, life, dist, score, grace); 

        const bullet = new M_Bullet(size, position, look, status);

        return bullet;
    }

    createEnemy() {
        const width    = config.enemy.width;
        const height   = config.enemy.height;
        const size     = new M_Size(width, height);

        const position = this.getEnemyAppearPos();

        const normal   = config.enemy.look.normal;
        const dead     = config.enemy.look.dead;
        const look     = new M_Look();
        look.addImage(normal);
        look.addImage(dead);

        const type     = config.enemy.type;
        const life     = config.enemy.life;
        const score    = config.enemy.score;
        const dist     = config.enemy.dist;
        const grace    = config.enemy.grace;
        const status   = new M_Status(type, life, dist, score, grace);

        const enemy = new M_Enemy(size, position, look, status);

        return enemy;
    }

    createBoss() {
        const fp = Utility.getFieldProp();

        const width    = config.boss.width;
        const height   = config.boss.height;
        const size     = new M_Size(width, height);

        const left     = (fp.w / 2) - (width / 2);
        const top      = fp.y - height;
        const position = new M_Position(left, top);

        const normal   = config.boss.look.normal;
        const dead     = config.boss.look.dead;
        const look     = new M_Look();
        look.addImage(normal);
        look.addImage(dead);

        const type     = config.boss.type;
        const life     = config.boss.life;
        const score    = config.boss.score;
        const dist     = config.boss.dist;
        const grace    = config.boss.grace;
        const status   = new M_Status(type, life, dist, score, grace);

        const boss = new M_Enemy(size, position, look, status);

        return boss;
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

        position = new M_Position(left, top);

        return position;
    }

}