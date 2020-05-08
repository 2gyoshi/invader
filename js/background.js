'usestrict'

function renderBackground() {
    //描画コンテキストの取得
    const body   = document.querySelector('body');
    const canvas = document.querySelector('#js-canvas');
    const width  = body.clientWidth;
    const height = body.clientHeight;
    canvas.setAttribute('width',`${width}`);
    canvas.setAttribute('height', `${height}px`);

    if (canvas.getContext) {
        const context = canvas.getContext('2d');

        context.fillStyle = '#FFFFFF';
        for(let i = 0; i < 1000; i++) {
            const x = getRandomInt(0, width);
            const y = getRandomInt(0, height);
            context.fillRect(x, y, 1, 1);
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

renderBackground();
window.onresize = renderBackground;