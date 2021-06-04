export class Pointer {
  private _lastPos: { x: number; y: number; };
  private _isDown: boolean;

  constructor() {
    this.init();
  }

  private init = () => {
    document.addEventListener('mousemove', this.onPointerMove);
    document.addEventListener('mouseup', this.onPointerUp);
    document.addEventListener('mousedown', this.onPointerDown);
  }

  public get isDown(): boolean {
    return this._isDown;
  }

  public get lastPos(): { x: number; y: number; } {
    return this._lastPos;
  }

  private onPointerMove = (e: MouseEvent) => {
    this._lastPos = { x: e.x, y: e.y };
  }

  private onPointerUp = (e: MouseEvent) => {
    this._lastPos = { x: e.x, y: e.y };
    this._isDown = false;
  }

  private onPointerDown = (e: MouseEvent) => {
    this._lastPos = { x: e.x, y: e.y };
    this._isDown = true;
  }

}