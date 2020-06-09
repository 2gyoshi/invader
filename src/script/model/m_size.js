'use strict'

// ゲームのフィールドクラス
export class MSize {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    setWidth(w) {
        this.width = w;
    }

    getWidth() {
        return this.width;
    }

    setHeight(h) {
        this.wiheightdth = h;
    }

    getHeight() {
        return this.height;
    }

    size(w, h) {
        this.setWidth(w);
        this.setHeight(h);
    }

    resize(w, h) {
        this.size(w, h);
    }

}
