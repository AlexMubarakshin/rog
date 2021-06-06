import { Keyboard } from './input/keyboard';
import { Loader } from './loader/loader';
import { Pointer } from './input/pointer';
import { Renderer } from './renderer/renderer';
import { Scene } from './scene';
import { Viewport } from './viewport';

export type GameLoopUpdateProps = {
  keyboard: Keyboard;
  pointer: Pointer;
  frame: number;
  viewport: Viewport;
  scene: Scene;
  isDebug: boolean;
};

export class Game {
  private static instance: Game;

  public static getInstance(): Game {
    if (!Game.instance) {
      Game.instance = new Game();
    }

    return Game.instance;
  }

  private _renderer: Renderer;
  private _isDebug = false;
  private _loader: Loader;
  private _lastFrame: number;

  private _currentScene: Scene;
  private _keyboardInput: Keyboard;
  private _pointerInput: Pointer;

  private constructor() { }

  public init(renderer: Renderer, isDebug: boolean): Game {
    this._renderer = renderer;
    this._isDebug = isDebug;

    this._keyboardInput = new Keyboard();
    this._pointerInput = new Pointer();
    this._loader = new Loader();

    return this;
  }

  public loadAssets = (assets: string[]): Promise<void> => {
    this._loader.addAssets(assets);

    return this._loader.load();
  }

  private loop = (currentFrame: number) => {
    const frameDelta = this._lastFrame - currentFrame;

    const gameLoopProps: GameLoopUpdateProps = {
      frame: frameDelta,
      keyboard: this._keyboardInput,
      pointer: this._pointerInput,
      viewport: this._renderer.viewport,
      scene: this._currentScene,
      isDebug: this.isDebug,
    };

    this._currentScene.update(gameLoopProps);

    this._renderer.draw(gameLoopProps);

    this._lastFrame = currentFrame;

    requestAnimationFrame(this.loop);
  }

  public setCurrentScene = (scene: Scene): void => {
    this._currentScene = scene;
  }

  public start = (): void => {
    requestAnimationFrame(this.loop);
  }

  public get loader(): Loader {
    return this._loader;
  }

  public get isDebug(): boolean {
    return this._isDebug;
  }

}