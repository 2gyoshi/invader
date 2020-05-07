'usestrict'

class GameManager {
    constructor() {
        this.collection = [];
        this.requestID  = 0;
    }

    addItem(item) {
        this.collection.push(item);
    }

    removeItem(item) {
        this.collection = this.collection.filter(e => e !== item);
    }

    start() {
        this.requestID = requestAnimationFrame(this.start.bind(this));
        this.collection.forEach(e => e.update());
        this.judgeCollision();
        this.clean();
    }

    stop() {
        cancelAnimationFrame(this.requestID);
    }

    judgeCollision(){
        for(let target of this.collection) {
            // オブジェクトの中点を取得する
            let centerX4Target = target.left + (target.width * 0.5);
            let centerY4Target = target.top + (target.height * 0.5);

            for(let other of this.collection) {
                if(target === other) continue;

                // オブジェクトの中点を取得する
                let centerX4Other  = other.left + (other.width * 0.5);
                let centerY4Other  = other.top + (other.height * 0.5);

                // 縦横が重なっていないか判定
                let widthDecision  = (Math.abs(centerX4Target - centerX4Other) < (target.width * 0.5) + (other.width * 0.5))   ? true : false;
                let heightDecision = (Math.abs(centerY4Target - centerY4Other) < (target.height * 0.5) + (other.height * 0.5)) ? true : false;
                
                if(widthDecision == false || heightDecision == false) continue;
                
                target.hit();
                other.hit();
            }
        }
    }

    clean() {
        for(let item of this.collection) {
            if(item.isHit === false) continue;
            item.element.remove();
            this.removeItem(item);
            item = null;
        }
    }
}
