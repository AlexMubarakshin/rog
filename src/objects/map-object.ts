import { Renderer } from '../core/renderer/renderer';
import { Sprite } from '../core/components/drawable/sprite';
import { GameObject, GameObjectArgs } from '../core/components/object/object';

export type MapObjectArgs = {
  spirteUrl?: string;
} & Omit<GameObjectArgs, 'sprite'>

export class MapObject extends GameObject {
  private _sprite: Sprite;

  constructor(args: MapObjectArgs) {
    super(args);

    if (args.spirteUrl) {
      this._sprite = new Sprite({
        src: args.spirteUrl,
        position: this.position,
        width: this.width,
        height: this.height,
      });
    }
  }

  public get sprite(): Sprite {
    return this._sprite;
  }

  public draw(renderer: Renderer): void {
    if (this._sprite) {
      renderer.drawImage(this._sprite);
    }
  }

}