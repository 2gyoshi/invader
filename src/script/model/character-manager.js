'use strict'

export class CharacterManager {
    constructor(list, factory) {
        this._list    = list;
        this._factory = factory;
        this._player  = null;
        this._boss    = null;
    }

    getCharacterList() {
        return this._list.toArray();
    }

    getPlayer() {
        return this._player;
    }

    getBoss() {
        return this._boss;
    }

    addPlayer() {
        if(this._player !== null) return;
        const player = this._factory.createPlayer(this);
        this._player = player;
        this._list.addItem(player);
    }

    addBullet() {
        const bullet = this._factory.createBullet(this._player);
        this._list.addItem(bullet);
    }

    addEnemy() {
        const enemy = this._factory.createEnemy();
        this._list.addItem(enemy);
    }

    addBoss() {
        if(this._boss !== null) return;

        const boss = this._factory.createBoss();
        this._boss = boss;
        this._list.addItem(boss);
    }

    getDisposeTaget() {
        const list = this._list.toArray();
        return list.filter(e => e.getIsDispose() === true);
    }

    removeCharacter(chara) {
        this._list.removeItem(chara);
    }

    update() {
        for(const e of this._list) e.update();
    }

    disposeCharacter() {
        const array = this._list.toArray();
        for(let e of array) {
            if(e.getIsDispose() === false) continue;
            this.removeCharacter(e);
            e.dispose();
            e = null;
        }
    }

}