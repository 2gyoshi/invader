'use strict'

import {M_NonPlayer} from './m_character';

export class M_Enemy extends M_NonPlayer {
    constructor(size, position, look, status) {
        super(size, position, look, status);
    }
}
