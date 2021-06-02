import { Camera } from './camera';

import { GameLoopUpdateProps } from '../game';

import { GameObject } from './object/object';
import { getCollisionObjects } from './utils/collision';

export type MapRow = number[];
export type Map = MapRow[];

export type SceneData = {
    map: Map;
    playerDefaultPos: {
        x: number;
        y: number;
    },
    size: {
        height: number;
        width: number;
    }
}

export abstract class Scene {
    private _camera: Camera;

    private _objects: GameObject[];

    private sceneSize: { height: number; width: number; }

    constructor(data: SceneData) {
      this.sceneSize = data.size;
      this._objects = [];
      this._camera = new Camera();

      this.addObject = this.addObject.bind(this);
      this.addObjects = this.addObjects.bind(this);
      this.update = this.update.bind(this);
      this.hasCollision = this.hasCollision.bind(this);
      this.getCollision = this.getCollision.bind(this);
    }

    public hasCollision(object: GameObject): boolean {
      const collision = this.getCollision(object);

      return Boolean(collision);
    }

    public getCollision(object: GameObject): { objects: Set<GameObject> } {
      const collisionObjects = getCollisionObjects(object, this.objects);

      if (collisionObjects.size > 0) {
        return { objects: collisionObjects };
      }
    }

    public addObject(obj: GameObject): GameObject[] {
      this._objects.push(obj);

      return this._objects;
    }

    public addObjects(objs: GameObject[]): GameObject[] {
      objs.forEach(this.addObject);

      return this._objects;
    }

    get width(): number {
      return this.sceneSize.width;
    }

    get height(): number {
      return this.sceneSize.height;
    }

    get top(): number {
      return 0;
    }

    get right(): number {
      return this.width;
    }

    get bottom(): number {
      return this.height;
    }

    get left(): number {
      return 0;
    }

    public get objects(): GameObject[] {
      return this._objects;
    }

    public update(updateState: GameLoopUpdateProps): void {
      this._objects.forEach(obj => obj.update(updateState));

      this.camera.update(updateState.viewport);
    }

    public get camera(): Camera {
      return this._camera;
    }

}