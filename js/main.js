'usestrict'

function main() {
    const util = new Utility();

    const background = new Background(util);
    
    // TODO: Fieldの見た目と処理を分離する
    // const viewField  = new ViewField() これからやる
    // Fieldのサイズ、位置を設定する
    const body   = document.querySelector('body');
    const width  = config.field.width;
    const height = body.clientHeight;
    const top    = config.field.top;
    const left   = (body.clientWidth / 2) - (width / 2);
    const field  = new Field(width, height, top, left);

    // Model?
    const manager = new Manager(util, field);

    // View
    const view = new View(field, background);
    view.init();

    // Controler
    const controler = new Controler(util, manager);
    controler.init();
}

main();