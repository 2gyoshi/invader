'use strict'

// ゲームオブジェクトのベースクラス
class Character {
    constructor(field, status, position, look) {
        this.field     = field
        this.status    = status;
        this.position  = position;
        this.look      = look;
        this.isDispose = false
    }

    getType() {
        return this.status.getType()
    }
    
    getWidth() {
        return this.status.getWidth();
    }

    getHeight() {
        return this.status.getHeight();
    }

    getLeft() {
        return this.position.getX();
    }

    getTop() {
        return this.position.getY();
    }
    
    getScore() {
        return this.status.getScore();
    }

    getLook() {
        return this.look.getItem();
    }

    update() {
        throw new Error(config.message.abscall);
    }

    move() {
        throw new Error(config.message.abscall);
    }

    isDead() {
        return this.status.isDead();
    }

    isDisposeTarget() {
        return this.isDispose;
    }

    damage() {
        this.status.damage();
        if(this.isDead()) this.dead();
    }

    // ライフが0になった後も処理したいためここではdisposeしない
    dead() {
        this.look.last();
        setTimeout(this.makeDisposeTarget.bind(this), config.time.zonbi);
    }

    makeDisposeTarget() {
        this.isDispose = true;
    }

    dispose() {
        return this.status.getScore();
    }
}

// NPCクラス
class NonPlayerCharacter extends Character {
    constructor(field, status, position, look) {
        super(field, status, position, look);
    }

    update() {
        this.move();
    }

    move() {
        const y = this.status.getDistance();
        this.position.moveY(y);
    }
}