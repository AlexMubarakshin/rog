import { Vector2 } from '../geometry/vector2';
import { GameObject } from '../object/object';

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

  private onPointerMove = (e: MouseEvent) => {
    this._pos.x = e.x;
    this._pos.y = e.y;
  }

  private onPointerUp = (e: MouseEvent) => {
    this._pos.x = e.x;
    this._pos.y = e.y;
    this._isDown = false;
  }

  private onPointerDown = (e: MouseEvent) => {
    this._pos.x = e.x;
    this._pos.y = e.y;
    this._isDown = true;
  }

  public hover(obj: GameObject): boolean {
    return false;
  }
}