'usestrict'

const config = {
    player: {
        width: 50,
        height: 50,
        health: 1,
        img: {
            normal: '../img/player.svg',
            dispose: '../img/explosion.svg'
        },
    },

    bullet: {
        width: 5,
        height: 10,
        distance: -5,
        health: 1,
        img: {
            normal: '../img/bullet.svg',
            dispose: '../img/explosion.svg'
        },
    },
    
    enemy: {
        width: 50,
        height: 50,
        distance: 0.5,
        top: 0,
        health: 1,
        appearenceTimeMs: 3000,
        img: {
            normal: '../img/enemy.svg',
            dispose: '../img/explosion.svg'
        },
    },
    
    boss: {
        width: 250,
        height: 250,
        distance: 0.5,
        top: -250,
        health: 100,
        img: {
            normal: '../img/boss.svg',
            dispose: '../img/explosion.svg'
        },
    }
};