'usestrict'

class Background {
    constructor(width, height, top, left, utility) {
        this.width   = width;
        this.height  = height;
        this.top     = top;
        this.left    = left;
        this.utility = utility;

        const canvas = document.querySelector('#background');
        this.context = canvas.getContext('2d');
    }

    render() {
        this.context.fillStyle = '#FFFFFF';
        for(let i = 0; i < 1000; i++) {
            const x = this.utility.getRandomInt(0, this.width);
            const y = this.utility.getRandomInt(0, this.height);
            this.context.fillRect(x, y, 1, 1);
        }
    }
}
