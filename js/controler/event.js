'use strict'

// Controlerクラス
class Swipe {
    constructor() {
        this.startX = null;
        this.startY = null;
        this.endX   = null;
        this.endY   = null;
    }
    test() {
        // 開始時
        window.addEventListener("touchstart", function(event) {
            event.preventDefault();
            // 座標の取得
            this.startX = event.touches[0].pageX;
            this.StartY = event.touches[0].pageY;
        }, false);
     
        // 移動時
        window.addEventListener("touchmove", function(event) {
            event.preventDefault();
            // 座標の取得
            this.endX = event.changedTouches[0].pageX;
            this.endY = event.changedTouches[0].pageY;
        }, false);
     
        // 終了時
        window.addEventListener("touchend", function(event) {
            // 移動量の判定
            if (touchStartX > this.endX) {
                if (touchStartX > (this.endX + 50)) {
                    //右から左に指が移動した場合
                    console.log('left')
                }
            } else if (touchStartX < this.endX) {
                if ((touchStartX + 50) < this.endX) {
                    //左から右に指が移動した場合
                    console.log('right')
                }
            }
        }, false);
    }
}

new Swipe().test();