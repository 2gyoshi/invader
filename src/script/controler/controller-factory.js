'use strict'

import { AreaController }    from './area-controller';
import { PlayerController }  from './player-controller';
import { GameController }    from './game-controller';
import { ControllerManager } from './controller-manager';

export class ControllerFactory {
    createAreaController(model, view) {
        return new AreaController(model, view);
    }

    createPlayerController(charaMgr, areaMgr) {
        return new PlayerController(charaMgr, areaMgr);
    }

    createGameController(model, view) {
        return new GameController(model, view);
    }

    createControllerManager(pcon, acon, gcon) {
        return new ControllerManager(pcon, acon, gcon);
    }
}
