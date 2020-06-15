'use strict'

import { E_Keydown } from './e_keydown';
import { E_Swipe }   from './e_swipe';
import { E_Touch }   from './e_touch';
import { E_Button }  from './e_button';
import { E_Window }  from './e_window';
import { E_Manager}  from './e_manager';

export class E_Factory {
    createKeydownEvent() {
        return new E_Keydown();
    }

    createSwipeEvent() {
        return new E_Swipe();
    }

    createTouchEvent() {
        return new E_Touch();
    }

    createButtonEvent() {
        return new E_Button();
    }

    createWindowEvent() {
        return new E_Window();
    }

    createEventManager() {
        return new E_Manager();
    }

}
