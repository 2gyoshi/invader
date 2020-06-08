'use strict'

function main() {
    const utility   = new Utility();
    const viewField = new Field();
    const viewSpace = new Background(utility);
    const factory   = new Factory(utility, viewField);
    const modelMngr = new GameManager(utility, factory);
    const viewMngr  = new ViewManager(viewSpace, viewField);
    const controler = new Controler(utility, modelMngr, viewMngr);
    
    new Swipe(modelMngr).init();
    new Touch(modelMngr).init();
    new KeyDown(modelMngr).init();

    window.addEventListener('load',   () => controler.init());
    window.addEventListener('resize', () => controler.resize());
}

// Controlerクラス
class Swipe {
    constructor(model) {
        this.model = model;
        this.startX = null;
        this.endX   = null;
    }

    init() {
        window.addEventListener('touchstart', this.touchStart.bind(this), {passive: false});
        window.addEventListener('touchmove', this.touchMove.bind(this), {passive: false});
        window.addEventListener('touchend', this.touchEnd.bind(this), false);
    }

    touchStart(event) {
        event.preventDefault();
        this.startX = event.touches[0].pageX;
    }

    touchMove(event) {
        event.preventDefault();
        this.endX = event.changedTouches[0].pageX;
    }

    touchEnd() {
        if (this.startX > this.endX) this.moveLeft();
        if (this.startX < this.endX) this.moveRight();
    }

    moveLeft() {
        if ((this.startX - this.endX) < 100) return;
        const player = this.model.getPlayer();
        player.moveLeft();
    }

    moveRight() {
        if ((this.endX - this.startX) < 100) return;
        const player = this.model.getPlayer();
        player.moveRight();
    }
}

class Touch {
    constructor(model) {
        this.model = model;
        this.requestId = null;
        this.startTime = null;
        this.holdTime  = null;
        this.shootTime = null;
    }

    init() {
        window.addEventListener("touchstart", this.shoot.bind(this), {passive: false});
    }

    shoot(event) {
        event.preventDefault();
        this.model.addBullet();
    }
}

class KeyDown {
    constructor(model) {
        this.model = model;
        this.disable = false;
    }

    init() {
        window.addEventListener('keydown', this.keydown.bind(this), false);
        window.addEventListener('keyup', this.keyup.bind(this), false);
    }
    
    keydown(e) {
        if(this.model.getIsPlaying() === false) return;
        if(this.disable === true) return;

        this.disable = true;

        const val = this.convertKeyCodeToMeaningStr(e.keyCode);
        
        if(val === null)    return this.usage();
        if(val === 'space') return this.shoot();
        if(val === 'left')  return this.moveLeft();
        if(val === 'right') return this.moveRight();
    }
    
    keyup() {
        this.disable = false;
    }

    convertKeyCodeToMeaningStr(code) {
        if(!code) return null;
        if(code === 32) return 'space';
        if(code === 37) return 'left';
        if(code === 39) return 'right';
        return null;
    }
    
    usage() {
        // TODO: もっといい方法考える
        alert(`space key => shoot\nleft key => move left\nright key  => move right`);
    }

    shoot() {
        this.model.addBullet();
    }

    moveLeft() {
        const player = this.model.getPlayer();
        player.moveLeft();
    }

    moveRight() {
        const player = this.model.getPlayer();
        player.moveRight();
    }
}


main();