'use strict'

import { AreaController }    from './area-controller';
import { PlayerController }  from './player-controller';
import { GameController }    from './game-controller';
import { ControllerManager } from './controller-manager';

export class ControllerFactory {
    createAreaControler(model, view) {
        return new AreaController(model, view);
    }

    createPlayerControler(charaMgr, areaMgr) {
        return new PlayerController(charaMgr, areaMgr);
    }

    createGameControler(model, view) {
        return new GameController(model, view);
    }

    createControlerManager() {
        return new ControllerManager();
    }
}
