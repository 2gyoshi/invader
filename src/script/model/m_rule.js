'use strict'

export class M_Rule {
    constructor() {
        this.rules = new Array();
    }

    addRule(rule) {
        this.rules.push(rule);
    }

    update(array) {
        this.rules.forEach(e => e.update(array));
    }
}