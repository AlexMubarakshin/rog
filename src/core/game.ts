import { Keyboard } from './input/keyboard';
import { Pointer } from './input/pointer';
import { Renderer } from './renderer/renderer';
import { Scene } from './scene';
import { Viewport } from './viewport';

export type GameLoopUpdateProps = {
  keyboard: Keyboard;
  frame: number;
  viewport: Viewport;
  scene: Scene;
  isDebug: boolean;
};

export class Game {
  protected lastFrame: number;

  protected currentScene: Scene;
  protected keyboardInput: Keyboard;
  protected pointerInput: Pointer;

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

  public setCurrentScene = (scene: Scene): void => {
    this.currentScene = scene;
  }

  public start = (): void => {
    requestAnimationFrame(this.loop);
  }

  public get isDebug(): boolean {
    return this._isDebug;
  }

}