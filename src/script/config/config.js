'use strict'

// ゲームセッティング
export const config = {
    domId: {
        root: 'js-index',
    
        button: {
            start: 'js-start-btn',
            stop:  'js-stop-btn',
            reset: 'js-reset-btn',
        },
    
        message: {
            win:  'js-gameclear',
            lose: 'js-gameover',
        },
    
        canvas: {
            space: 'js-space',
            field: 'js-field',
        }
    },

    cssClass: {
        default: 'Index',
        playing: '-playing',
        win:     '-win',
        lose:    '-lose'
    },
    
    event: {
        type: {
            load:   'load',
            resize: 'resize',
            start:  'start',
            stop:   'stop',
            reset:  'reset',
            left:   'left',
            right:  'right',
            shoot:  'shoot',
            none:   'none'
        },
    
        swipe: {
            dist: 50
        }
    },

    field: {
        width: 250,
        top: 0
    },

    player: {
        type:  'player',
        width:  50,
        height: 50,
        life:   1,
        score:  -100,
        dist:   50,
        grace:  200,
        look: {
            normal: './img/player.svg',
            dead:   './img/explosion.svg'
        },
        top: 0.9
    },

    bullet: {
        type:  'bullet',
        width:  5,
        height: 10,
        life:   1,
        score:  0,
        dist:   -5,
        grace:  0,
        look: {
            normal: './img/bullet.svg',
        }
    },

    enemy: {
        type:  'enemy',
        width:  50,
        height: 50,
        life:   1,
        score:  1,
        dist:   0.5,
        grace:  200,
        look: {
            normal: './img/enemy.svg',
            dead:   './img/explosion.svg'
        },
        top:      0.1,
        interval: 3000
    },

    boss: {
        type:   'boss',
        width:  250,
        height: 250,
        life:   100,
        score:  100,
        dist:   0.5,
        grace:  200,
        look: {
            normal: './img/boss.svg',
            dead:   './img/explosion.svg'
        }
    }
};