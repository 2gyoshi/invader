'usestrict'

class Client {
    constructor() {
        this.domBody    = document.querySelector('body');
        this.domFCanvas = document.querySelector('#field');
        this.domBCanvas = document.querySelector('#background');
        this.domStrBtn  = document.querySelector('#js-start-btn');
        this.domStpBtn  = document.querySelector('#js-stop-btn');
        this.domRstBtn  = document.querySelector('#js-reset-btn');
        this.instanceUtil       = null;
        this.instanceField      = null;
        this.instanceBackground = null;
        this.instanceManager    = null;
    }

    init() {
        // Canvasのスタイルを設定する
        // CSSでwidth, height を 100% に設定できないため
        const domBody    = this.domBody;
        const domBCanvas = this.domBCanvas;
        const domFCanvas = this.domFCanvas;
        this.setupCanvasStyle(domBody, domBCanvas, domFCanvas);

        // 各インスタンスを生成
        // TODO: いつかFactoryにしたい
        this.setInstanceUtil();
        this.setInstanceBackground();
        this.setInstanceField(domBody);

        const util = this.instanceUtil;
        const field = this.instanceField;

        this.setInstanceManager(util, field);

        const str = this.domStrBtn;
        const stp = this.domStpBtn
        const rst = this.domRstBtn
        const mng = this.instanceManager;
        this.setEventForPC(str, stp, rst, util, mng);
    }

    resize() {
        this.setInstanceBackground();
        // TODO: Fieldもやる
    }

    // TODO: まだ分類仕切れていない
    // TODO: このクラスが持つべきじゃない気がする
    setEventForPC(domStrBtn, domStpBtn, domRstBtn, util, mng){
        if(!domStrBtn || !domStpBtn || !domRstBtn || !util || !mng) return;

        // requestAnimationFrameのpolyfil
        window.requestAnimFrame = (function() {
            return (
                window.requestAnimationFrame       || 
                window.webkitRequestAnimationFrame || 
                window.mozRequestAnimationFrame    || 
                window.oRequestAnimationFrame      || 
                window.msRequestAnimationFrame     || 
                function(callback, time) {
                    var time = time ? time: 1000 / 60;
                    window.setTimeout(callback, time);
                }
            );
        })();
          
        // キー入力イベントを設定する (PC向け) 
        window.addEventListener('keydown', this.keyDown.bind(this), false);

        // ボタンクリックイベントを設定する
        domStrBtn.addEventListener('click', this.clickStrBtn.bind(this));
        domStpBtn.addEventListener('click', this.clickStpBtn.bind(this));
        domRstBtn.addEventListener('click', this.clickRstBtn.bind(this));
    }

    keyDown(e) {
        if(this.instanceManager.isPlaying === false) return;

        const distance = this.instanceManager.player.width;
        switch(e.keyCode) {
            case 32: 
                // スペースキー入力
                // TODO: プレイヤーにもたせたい機能
                this.instanceManager.createBullet();
                break;
            case 37:　
                // 左キー入力
                this.instanceManager.player.move(distance * -1, 0);
                break;
            case 39: 
                // 右キー入力
                this.instanceManager.player.move(distance, 0);
                break;
            default:
                break;
        }
    }

    clickStrBtn() {
        // ゲームを開始する
        this.instanceUtil.displayControl('start');
        this.instanceManager.start();
    }

    clickStpBtn() {
        // ゲームを停止する
        this.instanceUtil.displayControl('stop');
        this.instanceManager.stop();
    }

    clickRstBtn() {
        // ゲームをリセットする
        this.instanceUtil.displayControl('start');
        location.reload();
    }

    setupCanvasStyle(b, bg, f) {
        if(!b || !bg || !f) return;

        // どっちも画面いっぱいにCanvasを広げる
        // 別々に設定したくなった場合を考えて処理をわけている
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
    
    // TODO: いつかFactoryにしたい

    setInstanceBackground() {
        if(!this.instanceUtil) return;
        const util = this.instanceUtil;
        this.instanceBackground = new Background(util);
    }

    setInstanceField(body) {
        if(!body) return;
        
        // Fieldのサイズ、位置を設定する
        const width = config.field.width;
        const height = body.clientHeight;
        const top = config.field.top;
        const left = (body.clientWidth / 2) - (width / 2);

        this.instanceField = new Field(width, height, top, left);
    }

    setInstanceManager(utility, field) {
        if(!utility || !field) return;
        
        this.instanceManager = new Manager(utility, field);
    }

    setInstanceUtil() {
        this.instanceUtil = new Utility();
    }
}

const client = new Client();
window.addEventListener('load', client.init.bind(client));
window.addEventListener('resize', client.resize.bind(client));