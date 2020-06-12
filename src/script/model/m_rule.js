'use strict'

export class M_Rule {
    constructor() {
        this.rules = new Array();
    }

    addRule(rule) {
        this.rules.push(rule);
    }

    update() {
        this.rules.forEach(e => e.update());
    }
}