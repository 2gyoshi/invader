'usestrict'

class View {
    constructor(field, background) {
        this.field      = field;
        this.background = background;
        this.domBody    = document.querySelector('body');
        this.domFCanvas = document.querySelector('#field');
        this.domBCanvas = document.querySelector('#background');
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
        this.background.style();
        this.background.draw();

        this.field.style();
        this.field.draw();
    }

    // スクリーンのリサイズイベント
    onresizeWindow() {
        // TODO: ちょっと気持ち悪い
        this.background.style();
        this.background.draw();

        this.field.style();
        this.field.draw();
    }

    update(collection) {
        this.field.update(collection);
    }
}
