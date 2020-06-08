'use strict'

class Event {
    constructor(keydown, swipe, touch) {
        this.keydown  = keydown;
        this.swipe    = swipe;
        this.touch    = touch;
    }

    init() {
        this.keydown.init();
        this.swipe.init();
        this.touch.init();
    }
}
