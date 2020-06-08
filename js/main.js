'use strict'

function main() {
    const utility   = new Utility();
    const viewField = new Field();
    const viewSpace = new Background(utility);
    const factory   = new Factory(utility, viewField);
    const modelMngr = new GameManager(utility, factory);
    const viewMngr  = new ViewManager(viewSpace, viewField);
    const swipe     = new Swipe(modelMngr);
    const touch     = new Touch(modelMngr);
    const keydown   = new Keydown(modelMngr);
    const event     = new Event(keydown, swipe, touch);
    const controler = new Controler(utility, modelMngr, viewMngr, event);



    const domStrBtn = document.querySelector('#js-start-btn');
    const domStpBtn = document.querySelector('#js-stop-btn');
    const domRstBtn = document.querySelector('#js-reset-btn');
    domStrBtn.addEventListener('click', controler.start.bind(controler));
    domStpBtn.addEventListener('click', controler.stop.bind(controler));
    domRstBtn.addEventListener('click', controler.reset.bind(controler));
    domStrBtn.addEventListener('touchstart', controler.start.bind(controler));
    domStpBtn.addEventListener('touchstart', controler.stop.bind(controler));
    domRstBtn.addEventListener('touchstart', controler.reset.bind(controler));
    window.addEventListener('load',   () => controler.init());
    window.addEventListener('resize', () => controler.resize());
}

main();