'use strict'

// Viewの管理クラス
export class VManager {
    constructor(background, field) {
        this.background = background;
        this.field      = field;
        this.domBody    = document.querySelector('body');
        this.domFCanvas = document.querySelector('#field');
        this.domBCanvas = document.querySelector('#background');
    }

    getBackground() {
        return this.background;
    }

    getField() {
        return this.field;
    }

    init() {
        this.background.init();
        this.field.init();
    }

    resize(collection) {
        this.background.resize();
        this.field.resize(collection);
    }

    update(collection) {
        this.field.update(collection);
    }
}
