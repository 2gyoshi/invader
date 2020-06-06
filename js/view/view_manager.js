'use strict'

// Viewの管理クラス
class ViewManager {
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

    resize() {
        this.background.resize();
        this.field.resize();
    }

    update(collection) {
        this.field.update(collection);
    }
}
