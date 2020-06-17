'use strict'

import { config } from '../config/config';
import { EventBase } from './event-base';

export class WindowEvent extends EventBase {
    constructor() {
        super();
    }

    init() {
        window.addEventListener('load',   this.load.bind(this));
        window.addEventListener('resize', this.resize.bind(this));
    }

    load() {
        this._eventName = config.event.type.load;
        this.notify(this);
    }

    resize() {
        this._eventName = config.event.type.resize;
        this.notify(this);
    }
}
