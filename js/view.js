'usestrict'

class View {
    constructor(field, background) {
        this.domBody    = document.querySelector('body');
        this.domFCanvas = document.querySelector('#field');
        this.domBCanvas = document.querySelector('#background');
        this.instanceField      = field;
        this.instanceBackground = background;
    }

    init() {
        // イベント設定
        this.setEvent();
    }

    setEvent() {
        window.addEventListener('load', this.onloadWindow.bind(this));
        window.addEventListener('resize', this.onresizeWindow.bind(this));
    }

    // スクリーンの初期化イベント
    onloadWindow() {
        // TODO: ちょっと気持ち悪い
        this.instanceBackground.style();
        this.instanceBackground.draw();

        // TODO: Fieldの見た目と処理を分離する　暫定対応
        this.tmpInstanceFielddraw()
    }

    // スクリーンのリサイズイベント
    onresizeWindow() {
        this.instanceBackground.style();
        this.instanceBackground.draw();

        // TODO: Fieldもやる
    }





    // =================================================================
    // TODO: Fieldの見た目と処理を分離する　暫定対応
    // =================================================================
    tmpInstanceFielddraw() {
        // Canvasのスタイルを設定する
        // CSSでwidth, height を 100% に設定できないため
        const domBody    = this.domBody;
        const domBCanvas = this.domBCanvas;
        const domFCanvas = this.domFCanvas;
        this.setupCanvasStyle(domBody, domBCanvas, domFCanvas);
    }

    setupCanvasStyle(b, bg, f) {
        if(!b || !bg || !f) return;
        this.setupFieldCanvasStyle(b, f);
    }

    setupFieldCanvasStyle(body, canvas) {
        if(!body || !canvas) return;
    
        const width  = body.clientWidth;
        const height = body.clientHeight;
        const top    = 0;
        const left   = 0;

        canvas.setAttribute('width',`${width}px`);
        canvas.setAttribute('height', `${height}px`);
        canvas.style.position = 'absolute';
        canvas.style.top = `${top}px`;
        canvas.style.left = `${left}px`;
    }
    // =================================================================
    // =================================================================
}
