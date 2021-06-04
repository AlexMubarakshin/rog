export class Rectangle {
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