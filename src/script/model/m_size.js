'use strict'

// ゲームのフィールドクラス
export class M_Size {
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
        this.height = h;
    }

    getHeight() {
        return this.height;
    }

    // TODO: どうしよう
    // size(w, h) {
    //     this.setWidth(w);
    //     this.setHeight(h);
    // }

    // resize(w, h) {
    //     this.size(w, h);
    // }

}
