import { CanvasRenderer } from './core/renderer/cavnas-renderer';

import { Game } from './core/game';

import { GameScene } from './scene';
import { FirstLevel } from './data/level-1';

function setupCanvas(): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.id = 'game';

  canvas.height = document.body.clientHeight;
  canvas.width = document.body.clientWidth;

  const context = canvas.getContext('2d');
  context.imageSmoothingEnabled = false;

  return canvas;
}
class Rog {

  private game: Game;

  constructor() {
    this.init();
  }

  init = () => {
    const canvas = setupCanvas();

    document.body.appendChild(canvas);

    const renderer = new CanvasRenderer(canvas);

    this.game = new Game(renderer);
    this.game.setCurrentScene(new GameScene(FirstLevel));
  }

  start = () => {
    this.game.start();
  }

}


(() => {
  const rog = new Rog();
  rog.start();
})();
