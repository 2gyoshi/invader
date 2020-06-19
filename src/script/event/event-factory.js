'use strict'

import { EventManager}  from './event-manager';
import { WindowEvent }  from './window-event';
import { ButtonEvent }  from './button-event';
import { KeydownEvent } from './keydown-event';
import { SwipeEvent }   from './swipe-event';
import { TouchEvent }   from './touch-event';

export class EventFactory {
    createEventManager(...events) {
        return new EventManager(...events);
    }

    createWindowEvent(...observers) {
        return new WindowEvent(...observers);
    }

    createButtonEvent(...observers) {
        return new ButtonEvent(...observers);
    }

    createKeydownEvent(...observers) {
        return new KeydownEvent(...observers);
    }

    createSwipeEvent(...observers) {
        return new SwipeEvent(...observers);
    }

    createTouchEvent(...observers) {
        return new TouchEvent(...observers);
    }
}
