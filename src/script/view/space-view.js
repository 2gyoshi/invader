'use strict'

import { Utility }  from '../util/utility';
import { ViewBase } from './view-base';

// 背景クラス
export class SpaceView extends ViewBase {
    constructor(model) {
        super();
        this._model   = model;
        this._canvas  = document.querySelector('#js-space');
        this._context = this._canvas.getContext('2d');
    }

    size() {
        const space  = this._model.getSpace(); 
        const width  = space.getWidth();
        const height = space.getHeight();
        this._canvas.setAttribute('width',`${width}`);
        this._canvas.setAttribute('height', `${height}`);
    }

    position() {
        const space = this._model.getSpace(); 
        const top   = space.getTop();
        const left  = space.getLeft();
        this._canvas.style.position = 'absolute';
        this._canvas.style.top = `${top}px`;
        this._canvas.style.left = `${left}px`;
    }

    draw() {
        const space = this._model.getSpace(); 
        const width   = space.getWidth();
        const height  = space.getHeight();
        const context = this._context;

        context.fillStyle = '#FFFFFF';
        
        for(let i = 0; i < 1000; i++) {
            let x = Utility.getRandomInt(0, width);
            let y = Utility.getRandomInt(0, height);
            context.fillRect(x, y, 1, 1);
        }
    }
}
