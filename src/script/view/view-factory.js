'use strict'

import { ViewManager } from './view-manager';
import { SpaceView }   from './space-view';
import { FieldView }   from './field-view';

export class ViewFactory {
    createManager(vSpace, vField) {
        return new ViewManager(vSpace, vField);
    }

    createSpace(model) {
        return new SpaceView(model);
    }

    createField(field, list) {
        return new FieldView(field, list);
    }
}
