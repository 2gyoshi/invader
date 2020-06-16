'use strict'

import { C_Player }  from './c_player';
import { C_Game }    from './c_game';
import { C_Area }    from './c_area';
import { C_Manager } from './c_manager';

export class C_Factory {
    createPlayerControler(charaMgr, areaMgr) {
        return new C_Player(charaMgr, areaMgr);
    }

    createAreaControler(model, view) {
        return new C_Area(model, view);
    }

    createGameControler(model, view) {
        return new C_Game(model, view);
    }

    createControlerManager() {
        return new C_Manager();
    }
}
