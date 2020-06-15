'use strict'

export class E_Manager {
    constructor() {
        this.items = new Array(); 
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        this.items = this.items.filter(e => e !== item);
    }

    init() {
        this.items.forEach(e => e.init());
    }
}
