import { Renderer } from '../core/renderer/renderer';
import { Sprite } from '../core/object/sprite';
import { GameObject, GameObjectArgs } from '../core/object/object';

export type SimpleObjectArgs = {
  spirteUrl?: string;
} & Omit<GameObjectArgs, 'sprite'>

export class SimpleObject extends GameObject {
  private _sprite: Sprite;

  constructor(args: SimpleObjectArgs) {
    super(args);

    if (args.spirteUrl) {
      this._sprite = new Sprite(args.spirteUrl);
    }
  }

  public get sprite(): Sprite {
    return this._sprite;
  }

  public draw(renderer: Renderer): void {
    if (this._sprite) {
      renderer.drawImage(this._sprite, this.position, this.width, this.height);
    }
  }

}