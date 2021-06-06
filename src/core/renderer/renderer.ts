
import { Vector2 } from '../geometry/vector2';

import { GameObject } from '../object/object';

import { Camera } from '../camera';
import { Viewport } from '../viewport';

import { Sprite } from '../drawable/sprite';
import { Label } from '../drawable/label';


export abstract class Renderer {

  private _camera: Camera;
  protected _viewport: Viewport;

  public abstract drawDebug(obj: GameObject): void;

  public abstract draw(objects: GameObject[], isDebug?: boolean): void;
  public abstract drawImage(image: Sprite, position: Vector2, width?: number, height?: number): void;
  public abstract drawLabel(label: Label, position: Vector2, width?: number, height?: number): void;

  protected abstract clear(): void;

  public get camera(): Camera {
    return this._camera;
  }
  public set camera(value: Camera) {
    this._camera = value;
  }

  public get viewport(): Viewport {
    return this._viewport;
  }
}