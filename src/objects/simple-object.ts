import { Renderer } from '../core/renderer/renderer';
import { Sprite } from '../core/drawable/sprite';
import { GameObject, GameObjectArgs } from '../core/object/object';

export type SimpleObjectArgs = {
  spirteUrl?: string;
} & Omit<GameObjectArgs, 'sprite'>

export class SimpleObject extends GameObject {
  constructor(args: SimpleObjectArgs) {
    super(args);

    if (args.spirteUrl) {
      this.sprite = new Sprite(args.spirteUrl);
    }
  }

  public draw(renderer: Renderer): void {
    if (this.sprite) {
      renderer.drawImage(this.sprite, this.position, this.width, this.height);
    }
  }

}