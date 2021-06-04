import { Viewport } from './viewport';
import { GameObject } from './object/object';
import { Rectangle } from './rectangle';


export class Camera extends Rectangle {

  private followingObj: GameObject;

  private _zoom: number;

  constructor() {
    super(0, 0);

    this._zoom = 2;
  }

  get isFollowing(): boolean {
    return !!this.followingObj;
  }

  public setFollow = (obj?: GameObject): void => {
    this.followingObj = obj;
  }

  public update = (viewport: Viewport): void => {
    if (!this.isFollowing) return;

    this.width = viewport.width;
    this.height = viewport.height;
    this.x = this.followingObj.center.x;
    this.y = this.followingObj.center.y;
  }
}