'use strict'

export class Crash {
    constructor(charaMgr) {
        this._charaMgr = charaMgr;
    }
    
    crash(list) {
        list.forEach(e => e.hit());
    }
    
    update() {
        const origin = this._charaMgr.getCharacterList();
        const crashed = origin.filter(e => this.isCrash(e));
        this.crash(crashed);
    }
    
    // TODO: もっといいアルゴリズムを考えたい
    isCrash(e) {
        const t1 = e;

        // オブジェクトの中点を取得する
        const p1 = this.getObjectPositionOfCenter(t1);
        
        // オブジェクトの中点からの大きさを取得する
        const s1 = this.getObjectSizeFromCenter(t1);

        let result = false;

        const list = this._charaMgr.getCharacterList();
        let p2, s2, checkX, checkY;

        for(let t2 of list) {
            // 同じオブジェクト同士は判定しない
            if(t1 === t2) continue;

            // オブジェクトの中点を取得する
            p2 = this.getObjectPositionOfCenter(t2);

            // オブジェクトの中点からの大きさを取得する
            s2 = this.getObjectSizeFromCenter(t2);
            
            // X軸の重なりを判定
            checkX = Math.abs(p1.x - p2.x) < s1.w + s2.w;
            
            // Y軸の重なりを判定
            checkY = Math.abs(p1.y - p2.y) < s1.h + s2.h;
            
            // 両方の値がtrueなら衝突している
            result = checkX === true && checkY === true;

            if(result === true) break;
        }

        return result;
    }

    getObjectPositionOfCenter(object) {
        const x = object.getLeft() + object.getWidth() / 2;
        const y = object.getTop() + object.getHeight() / 2;

        return {x: x, y: y};
    }

    getObjectSizeFromCenter(object) {
        const w = object.getWidth() / 2;
        const h = object.getHeight() / 2;
        
        return {w: w, h: h};
    }
}
