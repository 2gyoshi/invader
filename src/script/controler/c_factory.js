'use strict'

import { C_Player }   from './c_player';
import { C_GameManager } from './c_game_manager';
import { C_Manager }  from './c_manager';

export class C_Factory {
    createPlayerControler(mMgr) {
        return new C_Player(mMgr);
    }

    createGameControler(mMgr, vMgr) {
        return new C_GameManager(mMgr, vMgr);
    }

    createControlerManager() {
        return new C_Manager();
    }
}
