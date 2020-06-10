'use strict'

import {config}    from '../config';
import {MSize}     from './m_size';
import {MPosition} from './m_position';
import {MLook}     from './m_look';
import {MStatus}   from './m_status';
import {MPlayer}   from './m_player';
import {MBullet}   from './m_bullet';
import {MEnemy}    from './m_enemy';

import {MSpace}    from './m_area';
import {MField}    from './m_area';


export class MFactory {
    constructor(utility) {
        this.utility = utility;
    }

    // TODO: tmp
    
    getSpaceProp() {
        const body = document.querySelector('body');
        const w = body.clientWidth;
        const h = body.clientHeight;
        const x = 0;
        const y = 0;
    
        return {w: w, h: h, x: x, y: y};
    }

    createSpace() {
        const prop  = this.getSpaceProp();
        const size  = new MSize(prop.w, prop.h);
        const pos   = new MPosition(prop.x, prop.y);
        const space = new MSpace(size, pos);

        return space;
    }

    getFieldProp() {
        const body = document.querySelector('body');
        const w = config.field.width;
        const h = body.clientHeight;
        const x = (body.clientWidth / 2) - (w / 2);
        const y = 0;
     
        return {w: w, h: h, x: x, y: y};
    }

    createField() {
        const prop  = this.getFieldProp();
        const size  = new MSize(prop.w, prop.h);
        const pos   = new MPosition(prop.x, prop.y);
        const field = new MField(size, pos);

        return field;
    }

    createPlayer(field) {
        const width    = config.player.width;
        const height   = config.player.height;
        const size     = new MSize(width, height);

        const left     = (field.getWidth() / 2) - (width / 2);
        const top      = (field.getHeight() * config.player.top) - height;
        const position = new MPosition(left, top);

        const normal   = config.player.look.normal;
        const dead     = config.player.look.dead;
        const look     = new MLook();
        look.addImage(normal);
        look.addImage(dead);

        const type     = config.player.type;
        const life     = config.player.life;
        const score    = config.player.score;
        const dist     = config.player.dist;
        const grace    = config.player.grace;
        const status   = new MStatus(type, life, dist, score, grace);

        const player = new MPlayer(size, position, look, status, field);

        return player;
    }

    createBullet(player, field) {
        if(!player) return;

        const width    = config.bullet.width;
        const height   = config.bullet.height;
        const size     = new MSize(width, height);

        const pLeft    = player.getLeft();
        const pTop     = player.getTop();
        const pWidth   = player.getWidth();
        const left     = (pLeft + (pWidth / 2)) - (width / 2);
        const top      = pTop - (height * 2);
        const position = new MPosition(left, top);

        const normal   = config.bullet.look.normal;
        const look     = new MLook();
        look.addImage(normal);

        const type     = config.bullet.type;
        const life     = config.bullet.life;
        const score    = config.bullet.score;
        const dist     = config.bullet.dist;
        const grace    = config.bullet.grace;
        const status   = new MStatus(type, life, dist, score, grace); 

        const bullet = new MBullet(size, position, look, status, field);

        return bullet;
    }

    createEnemy(field) {
        const width    = config.enemy.width;
        const height   = config.enemy.height;
        const size     = new MSize(width, height);

        const position = this.getEnemyAppearancePosition(field);

        const normal   = config.enemy.look.normal;
        const dead     = config.enemy.look.dead;
        const look     = new MLook();
        look.addImage(normal);
        look.addImage(dead);

        const type     = config.enemy.type;
        const life     = config.enemy.life;
        const score    = config.enemy.score;
        const dist     = config.enemy.dist;
        const grace    = config.enemy.grace;
        const status   = new MStatus(type, life, dist, score, grace);

        const enemy = new MEnemy(size, position, look, status, field);

        return enemy;
    }

    createBoss(field) {
        const width    = config.boss.width;
        const height   = config.boss.height;
        const size     = new MSize(width, height);

        const left     = (field.getWidth() / 2) - (width / 2);
        const top      = field.getTop() - height;
        const position = new MPosition(left, top);

        const normal   = config.boss.look.normal;
        const dead     = config.boss.look.dead;
        const look     = new MLook();
        look.addImage(normal);
        look.addImage(dead);

        const type     = config.boss.type;
        const life     = config.boss.life;
        const score    = config.boss.score;
        const dist     = config.boss.dist;
        const grace    = config.boss.grace;
        const status   = new MStatus(type, life, dist, score, grace);

        const boss = new MEnemy(size, position, look, status, field);

        return boss;
    }

    // enemyの出現位置を取得する
    getEnemyAppearancePosition(field) {
        let position = null;

        const fw = field.getWidth();
        const fh = field.getHeight();
        const ew = config.enemy.width;

        // Enemyの幅で等分するランダムな値を取得する
        const max = fw / ew;
        const rand = this.utility.getRandomInt(0, max);

        const left = rand * ew
        const top = fh * config.enemy.top;

        position = new MPosition(left, top);

        return position;
    }

}