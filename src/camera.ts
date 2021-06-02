import { Viewport } from "./viewport";
import { GameObject } from "./objects/object";


export class Camera {
    private _x: number;
    private _y: number;

    private followingObj: GameObject;

    private _zoom: number;

    constructor() {
        this._x = 0;
        this._y = 0;

        this._zoom = 2;
    }

    get isFollowing(): boolean {
        return !!this.followingObj;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    public setFollow = (obj?: GameObject) => {
        this.followingObj = obj;
    }

    public update = (viewport: Viewport) => {
        if (!this.isFollowing) return;

        this._x = Math.floor(this.followingObj.center.x - (viewport.width / 4));
        this._y = Math.floor(this.followingObj.center.y - (viewport.height / 4));
    }
}