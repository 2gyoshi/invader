'use strict'

import { Utility }   from '../util/utility';
import { EventBase } from './event-base';

export class WindowEvent extends EventBase {
    constructor(...observers) {
        super(...observers);
    }

    init() {
        window.addEventListener('load',   this.load.bind(this));
        window.addEventListener('resize', this.resize.bind(this));
    }

    load() {
        const type = Utility.getConfigEventType();
        this._type = type.load;
        this.notify(this);
    }

    resize() {
        const type = Utility.getConfigEventType();
        this._type = type.resize;
        this.notify(this);
    }
}
