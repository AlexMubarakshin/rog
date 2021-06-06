import { Shape } from './shape';
import { Vector2 } from './vector2';

export class Rectangle implements Shape {
  protected _x: number;
  protected _y: number;
  protected _width: number;
  protected _height: number;

  constructor(x = 0, y = 0, width = 0, height = 0) {
    this._x = Number(x);
    this._y = Number(y);
    this._width = Number(width);
    this._height = Number(height);
  }

  public contains(point: Vector2): boolean {
    return point.x >= this.left && point.x <= this.right &&
      point.y >= this.top && point.y <= this.bottom;
  }

  get center(): Vector2 {
    return new Vector2(this.left + this.width / 2, this.top + this.height / 2);
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  get left(): number {
    return this.x;
  }

  get right(): number {
    return this.x + this.width;
  }

  get top(): number {
    return this.y;
  }

  get bottom(): number {
    return this.y + this.height;
  }
}