'usestrict'

function main() {
    const util = new Utility();

    // Fieldのサイズ、位置を設定する
    
    // Model?
    const manager = new Manager(util);

    // View
    const fv = new Field();
    const bv = new Background(util);
    const view = new View(fv, bv);
    view.init();

    // Controler
    const controler = new Controler(util, manager, view);
    controler.init();
}

main();