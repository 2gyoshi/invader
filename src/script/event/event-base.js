'use strict'

export class Subject {
    constructor(...observers) {
        this._observers = observers;
    }

    addObserver(item) {
        this._observers.push(item);
    }

    deleteObserver(item) {
        this._observers = this._observers.filter(e => e !== item);
    }

    notify() {
        this._observers.forEach(e => e.run(this));
    }
}

export class EventBase extends Subject {
    constructor(...observers) {
        super(...observers);
        this._type = '';
    }

    get type() {
        return this._type;
    }
}
