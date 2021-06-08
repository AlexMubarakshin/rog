
import { Camera } from '../camera';
import { Viewport } from '../viewport';

import { Drawable } from '../components/drawable/drawable';
import { Sprite } from '../components/drawable/sprite';
import { Label } from '../components/drawable/label';

export abstract class Renderer {

  private _camera: Camera;
  protected _viewport: Viewport;

  public abstract drawDebug(obj: Drawable): void;

  public abstract draw(objects: Drawable[], isDebug?: boolean): void;

  public abstract drawImage(image: Sprite): void;
  public abstract drawLabel(label: Label): void;

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