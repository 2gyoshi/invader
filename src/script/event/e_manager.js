'use strict'

export class E_Manager {
    constructor(eKeydown, eSwipe, eTouch, eButton) {
        this.eKeydown  = eKeydown;
        this.eSwipe    = eSwipe;
        this.eTouch    = eTouch;
        this.eButton   = eButton;
    }

    init() {
        this.eKeydown.init();
        this.eSwipe.init();
        this.eTouch.init();
        this.eButton.init()
    }
}
