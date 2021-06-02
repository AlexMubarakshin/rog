import { CanvasRenderer } from "./renderer/cavnas-renderer";

import { Game } from "./game";

function setupCanvas(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.id = 'game';

    canvas.height = document.body.clientHeight;
    canvas.width = document.body.clientWidth;

    const context = canvas.getContext('2d');
    context.imageSmoothingEnabled = false;

    return canvas;
}

function main() {
    const canvas = setupCanvas();

    document.body.appendChild(canvas);

    const renderer = new CanvasRenderer(canvas);

    const game = new Game(renderer);
    game.start();
}

(() => {
    main();
})();
