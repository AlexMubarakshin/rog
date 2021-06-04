import { Renderer } from './core/renderer/renderer';
import { GameScene } from './scene';
import { FirstLevel } from './data/level-1';
import { Keyboard } from './core/input/keyboard';
import { Pointer } from './core/input/pointer';
import { Viewport } from './core/viewport';
import { Scene } from './core/scene';

export type GameLoopUpdateProps = {
  keyboard: Keyboard;
  frame: number;
  viewport: Viewport;
  scene: Scene;
  isDebug: boolean;
};

export class Game {
  private lastFrame: number;

  private currentScene: Scene;
  private keyboardInput: Keyboard;
  private pointerInput: Pointer;

  constructor(
    private renderer: Renderer,
    private _isDebug = false,
  ) {
    this.keyboardInput = new Keyboard();
    this.pointerInput = new Pointer();
  }

  private loop = (currentFrame: number) => {
    const frameDelta = this.lastFrame - currentFrame;

    const gameLoopProps = {
      frame: frameDelta,
      keyboard: this.keyboardInput,
      pointerInput: this.pointerInput,
      viewport: this.renderer.viewport,
      scene: this.currentScene,
      isDebug: this.isDebug,
    };

    this.currentScene.update(gameLoopProps);

    this.renderer.draw(gameLoopProps);

    this.lastFrame = currentFrame;

    requestAnimationFrame(this.loop);
  }

  public start = (): void => {
    this.currentScene = new GameScene(FirstLevel);
    requestAnimationFrame(this.loop);
  }

  public get isDebug(): boolean {
    return this._isDebug;
  }

}