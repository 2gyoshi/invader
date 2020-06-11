'use strict'

export class E_Base {
    constructor() {
        this.controllers = new Array();
        this.eventName  = '';
    }

    addController(controller) {
        this.controllers.push(controller);
    }

    deleteController(controller) {
        this.controllers.remove(controller)
    }

    setEventName(en) {
        this.eventName = en;
    }

    getEventName() {
        return this.eventName;
    }

    notify() {
        this.controllers.forEach(e => e.run(this));
    }
}
