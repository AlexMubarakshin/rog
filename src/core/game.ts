import { Keyboard } from './input/keyboard';
import { Loader } from './loader/loader';
import { Pointer } from './input/pointer';
import { Renderer } from './renderer/renderer';
import { Scene } from './scene';
import { Camera } from './camera';

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
  private _camera: Camera;

  public get camera(): Camera {
    return this._camera;
  }

  public set camera(value: Camera) {
    this._camera = value;
  }

  private _keyboardInput: Keyboard;
  private _pointerInput: Pointer;

  private constructor() { }

  public get scene(): Scene {
    return this._currentScene;
  }

  public get keyboard(): Keyboard {
    return this._keyboardInput;
  }

  public get pointer(): Pointer {
    return this._pointerInput;
  }

  public get renderer(): Renderer {
    return this._renderer;
  }

  public init(renderer: Renderer, camera: Camera, isDebug: boolean): Game {
    this._renderer = renderer;
    this._isDebug = isDebug;
    this._camera = camera;

    this.renderer.camera = this.camera;

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
    const delta = this._lastFrame - currentFrame;

    this._camera.update(this.renderer.viewport, delta);
    this._currentScene.update(this, delta);

    this._currentScene.draw(this._renderer, this._isDebug);

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