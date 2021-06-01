import { Game } from "./game";

function main() {
    const canvas = document.createElement('canvas');
    canvas.id = 'game';

    canvas.height = 512;
    canvas.width = 512;

    document.body.appendChild(canvas);

    const game = new Game(canvas);
    game.start();
}

(() => {
    main();
})();
