
import { GameObject } from './object';

import { Renderer } from '../../renderer/renderer';
import { Drawable } from '../drawable/drawable';

export class DrawableObject<T extends Drawable> extends GameObject {

  constructor(
    public drawable: T,
  ) {
    super({
      position: drawable.position,
      width: drawable.width,
      height: drawable.height,
      collidable: false,
      visible: drawable.visible,
    });
  }

  public draw(renderer: Renderer): void {
    this.drawable.draw(renderer);
  }
}