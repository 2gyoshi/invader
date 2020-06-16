'use strict'

export class C_Base {
    run(event) {
        throw new Error('abstract method is called');
    }
}

