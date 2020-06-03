'usestrict'

class Background {
    render() {
        const utility = new Utility();
    
        //描画コンテキストの取得
        const body    = document.querySelector('body');
        const canvas  = document.querySelector('#js-canvas');
        const width   = body.clientWidth;
        const height  = body.clientHeight;
        canvas.setAttribute('width',`${width}`);
        canvas.setAttribute('height', `${height}`);
    
        if (canvas.getContext === false) return;
    
        const context = canvas.getContext('2d');
        context.fillStyle = '#FFFFFF';
        for(let i = 0; i < 1000; i++) {
            const x = utility.getRandomInt(0, width);
            const y = utility.getRandomInt(0, height);
            context.fillRect(x, y, 1, 1);
        }
    }
}
