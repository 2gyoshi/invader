'use strict'

export class ControllerBase {
    run(event) {
        throw new Error('abstract method is called');
    }
}

