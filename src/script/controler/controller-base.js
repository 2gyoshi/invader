'use strict'

export class ControllerBase {
    init() {
        throw new Error('abstract method is called');
    }
    
    run(event) {
        throw new Error('abstract method is called');
    }
}

