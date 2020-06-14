'use strict'

export class M_Manager {
    constructor(factory, space, field, rule, characters, score, timer, state) {
        this.factory    = factory;
        this.space      = space;
        this.field      = field;
        this.rule       = rule;
        this.characters = characters;
        this.score      = score;
        this.timer      = timer;
        this.state      = state;
    }

    init() {
        this.state.stop();
    }

    resize() {
        this.space.resize();
        this.field.resize();
    }

    getPlayer() {
        return this.characters.getPlayer();
    }

    getBoss() {
        return this.characters.getBoss();
    }

    // TODO: rename
    getCollection() {
        return this.characters.getCharacterList();
    }

    getField() {
        return this.field;
    }

    getScore() {
        return this.score.getScore()
    }

    isPlaying() {
        return this.state.getIsPlaying();
    }

    start() {
        this.addPlayer();
        this.state.start();
    }

    stop() {
        this.state.stop();
    }

    update() {
        this.changeState();
        this.createEnemy();
        this.characters.update();
        this.rule.update();
        this.dispose();
    }

    changeState() {
        if(this.getScore() < 0)  return this.stop();
        if(this.getScore() > 99) return this.stop();
    }

    createEnemy() {
        if(this.getScore() > 9) return this.addBoss();
        // TODO：わかりやすくする
        if(this.timer.update() === true) return this.addEnemy() 
    }

    addPlayer() {
        if(this.getPlayer()) return;

        const player = this.factory.createPlayer();
        this.characters.addCharacter(player);
    }

    addBullet() {
        const player = this.getPlayer()
        if(!player) return;

        const bullet = this.factory.createBullet(player);
        this.characters.addCharacter(bullet);
    }

    addEnemy() {
        const enemy = this.factory.createEnemy();
        this.characters.addCharacter(enemy);
    }

    addBoss() {
        if(this.getBoss()) return;

        const boss = this.factory.createBoss();
        this.characters.addCharacter(boss);
    }

    dispose() {
        const array = this.characters.getCharacterList();
        for(let e of array) {
            if(e.isDisposeTarget() === false) continue;

            // TODO: いいやりかた思いついたら変える
            this.score.changeScore(e.getScore());
            this.characters.removeCharacter(e);
            e = null;
        }
    }
}
