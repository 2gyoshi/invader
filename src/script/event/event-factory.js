'use strict'

import { EventManager}  from './event-manager';
import { WindowEvent }  from './window-event';
import { ButtonEvent }  from './button-event';
import { KeydownEvent } from './keydown-event';
import { SwipeEvent }   from './swipe-event';
import { TouchEvent }   from './touch-event';

export class EventFactory {
    createEventManager() {
        return new EventManager();
    }

    createWindowEvent() {
        return new WindowEvent();
    }

    createButtonEvent() {
        return new ButtonEvent();
    }

    createKeydownEvent() {
        return new KeydownEvent();
    }

    createSwipeEvent() {
        return new SwipeEvent();
    }

    createTouchEvent() {
        return new TouchEvent();
    }
}
