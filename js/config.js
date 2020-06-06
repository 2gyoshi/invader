'use strict'

// ゲームセッティング
const config = {
    message:{
        abscall: 'abstract fanction called'
    },

    time: {
        zonbi: 200,
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
            normal: '../img/player.svg',
            dead: '../img/explosion.svg'
        },
    },

    bullet: {
        type: 'bullet',
        width: 5,
        height: 10,
        life: 1,
        score: 0,
        distance: -5,
        look: {
            normal: '../img/bullet.svg',
        },
    },
    
    enemy: {
        type: 'enemy',
        width: 50,
        height: 50,
        life: 1,
        score: 1,
        distance: 0.5,
        appearenceTimeMs: 3000,
        look: {
            normal: '../img/enemy.svg',
            dead: '../img/explosion.svg'
        },
    },
    
    boss: {
        type: 'boss',
        width: 250,
        height: 250,
        life: 300,
        score: 100,
        distance: 0.5,
        look: {
            normal: '../img/boss.svg',
            dead: '../img/explosion.svg'
        },
    }
};