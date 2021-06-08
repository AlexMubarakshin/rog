import { Viewport } from './viewport';
import { GameObject } from './components/object/object';
import { Rectangle } from './geometry/rectangle';

export class Camera extends Rectangle {

  private followingObj: GameObject;

  private _zoom: number;

  constructor() {
    super(0, 0);

    this._zoom = 1;
  }

  get isFollowing(): boolean {
    return !!this.followingObj;
  }

  get zoom(): number {
    return this._zoom;
  }

  set zoom(value: number) {
    this.zoom = value;
  }

  public setFollow = (obj?: GameObject): void => {
    this.followingObj = obj;
  }

  public update = (viewport: Viewport, delta: number): void => {
    if (!this.isFollowing) return;

    this._width = viewport.width;
    this._height = viewport.height;
    this._x = this.followingObj.center.x;
    this._y = this.followingObj.center.y;
  }

}