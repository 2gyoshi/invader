'use strict'

window.addEventListener('load', () => {
    const utility = new Utility();

    // Model
    const model = new GameManager(utility);

    // View
    const vb   = new Background(utility);
    const vf   = new Field();
    const view = new ViewManager(vb, vf);

    // Controler
    const controler = new Controler(utility, model, view);
    
    controler.init();
});
