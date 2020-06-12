'use strict'

import { config } from "../config";

export class  M_CharacterList {
    constructor() {
        this.characterList = new Array();
    }

    addCharacter(chara) {
        this.characterList.push(chara);
    }

    removeCharacter(chara) {
        this.characterList = this.characterList.filter(e => e !== chara);
    }

    getPlayer() {
        return this.characterList.find(e => e.getType() === config.player.type);
    }

    getBoss() {
        return this.characterList.find(e => e.getType() === config.boss.type);
    }

    getCharacterList() {
        return this.characterList;
    }

    update() {
        this.characterList.forEach(e => e.update());
    }
}