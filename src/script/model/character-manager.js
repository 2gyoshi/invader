'use strict'

export class CharacterManager {
    constructor(list, factory) {
        this._list    = list;
        this._factory = factory;
        this._player  = null;
        this._boss    = null;
    }

    getCharacterList() {
        return this._list.getList();
    }

    addPlayer() {
        if(this._player !== null) return;
        const player = this._factory.createPlayer(this);
        this._player = player;
        this._list.addItem(player);
    }

    getPlayer() {
        return this._player;
    }

    addBoss() {
        if(this._boss !== null) return;

        const boss = this._factory.createBoss();
        this._boss = boss;
        this._list.addItem(boss);
    }

    getBoss() {
        return this._boss;
    }

    addBullet() {
        const bullet = this._factory.createBullet(this._player);
        this._list.addItem(bullet);
    }

    addEnemy() {
        const enemy = this._factory.createEnemy();
        this._list.addItem(enemy);
    }

    removeCharacter(chara) {
        this._list.removeItem(chara);
    }

    update() {
        for(let e of this._list) {
            e.update();
        }
    }
}