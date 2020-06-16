'use strict'

import { V_Field }  from './v_field';
import { V_Space }  from './v_space';
import { V_Manager} from './v_manager';

export class V_Factory {
    createSpace(model) {
        return new V_Space(model);
    }

    createField(field, list) {
        return new V_Field(field, list);
    }

    createManager(vSpace, vField) {
        return new V_Manager(vSpace, vField);
    }
}
