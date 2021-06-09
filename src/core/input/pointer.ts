import { Game } from '../game';
import { Vector2 } from '../geometry/vector2';
import { GameObject } from '../components/object/object';

export class Pointer {
  private _pos: Vector2;
  private _isDown: boolean;

  constructor() {
    this.init();
  }

  private init = () => {
    this._isDown = false;
    this._pos = Vector2.zero;

    document.addEventListener('mousemove', this.onPointerMove);
    document.addEventListener('mouseup', this.onPointerUp);
    document.addEventListener('mousedown', this.onPointerDown);
  }

  public get isDown(): boolean {
    return this._isDown;
  }

  public get lastPos(): Vector2 {
    return this._pos;
  }

  public static getMousePositionRelativeToCamera(e: MouseEvent): Vector2 {
    const { camera, renderer } = Game.getInstance();

    const x = e.pageX - renderer.viewport.left - (-camera.x + camera.width / 2);
    const y = e.pageY - renderer.viewport.top - (-camera.y + camera.height / 2);

    return new Vector2(x, y);
  }

  private onPointerMove = (e: MouseEvent) => {
    const pos = Pointer.getMousePositionRelativeToCamera(e);

    this._pos.copy(pos);

    console.log(this._pos);
  }

  private onPointerUp = (e: MouseEvent) => {
    const pos = Pointer.getMousePositionRelativeToCamera(e);

    this._pos.copy(pos);

    this._isDown = false;
  }

  private onPointerDown = (e: MouseEvent) => {
    const pos = Pointer.getMousePositionRelativeToCamera(e);

    this._pos.copy(pos);

    this._isDown = true;
  }

  public hover(obj: GameObject): boolean {
    return obj.bound.contains(this._pos);
  }
}