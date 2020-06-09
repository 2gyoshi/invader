'use strict'

// ゲームセッティング
export const config = {
    message:{
        abscall: 'abstract fanction called'
    },
    time: {
        zonbi: 200,
        enemy: 3000,
    },
    game: {
        status: {
            default: 'default',
            playing: 'playing',
            gameclear: 'gameclear',
            gameover:  'gameover',
        },
    },
    dom: {
        button: {
            id: {
                start: 'js-start-btn',
                stop:  'js-stop-btn',
                reset: 'js-reset-btn',
            },
        },
        message: {
            id: {
                gameclear: 'js-gameclear',
                gameover: 'js-gameover',
            },
        },
        canvas: {
            id: {
                space: 'js-space',
                field: 'js-field',
            }
        },
    },
    event: {
        swipe: {
            dist: 50,
        }
    },
    field: {
        width: 250,
        top: 0,
    },
    player: {
        type: 'player',
        width: 50,
        height: 50,
        life: 1,
        score: 0,
        distance: 50,
        look: {
            normal: './img/player.svg',
            dead: './img/explosion.svg'
        },
        top: 0.9,
    },
    bullet: {
        type: 'bullet',
        width: 5,
        height: 10,
        life: 1,
        score: 0,
        distance: -5,
        look: {
            normal: './img/bullet.svg',
        },
    },
    enemy: {
        type: 'enemy',
        width: 50,
        height: 50,
        life: 1,
        score: 1,
        distance: 0.5,
        look: {
            normal: './img/enemy.svg',
            dead: './img/explosion.svg'
        },
        top: 0.1,
    },
    boss: {
        type: 'boss',
        width: 250,
        height: 250,
        life: 30,
        score: 100,
        distance: 0.5,
        look: {
            normal: './img/boss.svg',
            dead: './img/explosion.svg'
        },
    }
};