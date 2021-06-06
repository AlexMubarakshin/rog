import { CanvasRenderer } from './core/renderer/cavnas-renderer';

import { Game } from './core/game';

import { GameScene } from './scene';
import { FirstLevel } from './data/level-1';

const ressources = ['character.png', 'grass.png', 'stone.png', 'wood.png'];
class Rog {

  private game: Game;

  private _debug: boolean;

  constructor() {
    this._debug = false;

    this.init();
  }

  static setupCanvas(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.id = 'game';

    canvas.height = document.body.clientHeight;
    canvas.width = document.body.clientWidth;

    const context = canvas.getContext('2d');
    context.imageSmoothingEnabled = false;

    return canvas;
  }

  init = () => {
    const canvas = Rog.setupCanvas();

    document.body.appendChild(canvas);

    const renderer = new CanvasRenderer(canvas);

    this.game = Game.getInstance().init(renderer, this._debug);
  }

  start = () => {
    this.game.loadAssets(ressources)
      .finally(() => {
        this.game.setCurrentScene(new GameScene(FirstLevel));
        this.game.start();
      });
  }
}

(() => {
  const rog = new Rog();
  rog.start();
})();
