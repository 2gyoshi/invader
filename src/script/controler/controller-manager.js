'use strict'

// Controlerクラス
export class ControllerManager {
    constructor(pcon, acon, gcon) {
        this._pcon = pcon;
        this._acon = acon;
        this._gcon = gcon;
    }

    init() {
        this._pcon.init();
        this._acon.init();
        this._gcon.init();
    }

    get playerController() {
        this._pcon;
    }

    get areaController() {
        this._acon;
    }

    get gameController() {
        this._gcon;
    }
}
