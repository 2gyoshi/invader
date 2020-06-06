'usestrict'

// ゲームのフィールドクラス
class ViewBase {
    constructor() {
        this.width     = null;
        this.height    = null;
        this.left      = null;
        this.top       = null;
        this.domBody   = null;
        this.domCanvas = null;
        this.context   = null;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getLeft() {
        return this.left;
    }

    getTop() {
        return this.top;
    }

    init() {
        this.style();
        this.draw();
    }

    resize() {
        this.style();
    }

    style() {
        this.size();
        this.position();
    }

    size() {
        throw new Error(config.message.abscall);
    }

    position() {
        throw new Error(config.message.abscall);
    }

    draw() {
        throw new Error(config.message.abscall);
    }
}
