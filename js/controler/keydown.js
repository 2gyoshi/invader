'use strict'

// キーボードイベントクラス
class Keydown {
    constructor(model) {
        this.model = model;
        this.disable = false;
    }

    init() {
        window.addEventListener('keydown', this.keydown.bind(this), false);
        window.addEventListener('keyup', this.keyup.bind(this), false);
    }
    
    keydown(e) {
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
        // TODO: いい方法考える
        console.log(`space => shoot\nleft => move left\nright => move right`);
    }

    shoot() {
        this.model.addBullet();
    }

    moveLeft() {
        if(this.model.isPlaying() === false) return;

        const player = this.model.getPlayer();
        player.moveLeft();
    }

    moveRight() {
        if(this.model.isPlaying() === false) return;

        const player = this.model.getPlayer();
        player.moveRight();
    }
}