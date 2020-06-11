'use strict'

export class E_Manager {
    constructor(eKeydown, eSwipe, eTouch) {
        this.eKeydown  = eKeydown;
        this.eSwipe    = eSwipe;
        this.eTouch    = eTouch;
    }

    init() {
        this.eKeydown.init();
        this.eSwipe.init();
        this.eTouch.init();
    }
}
