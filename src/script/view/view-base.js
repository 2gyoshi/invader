'usestrict'

// ゲームのフィールドクラス
export class ViewBase {
    constructor() {
        this._canvas  = null;
        this._context = null;
    }

    init() {
        this.style();
        this.draw();
    }

    resize() {
        this.init();
    }
    
    style() {
        this.size();
        this.position();
    }

    size() {
        new Error();
    }

    position() {
        new Error();
    }
}
