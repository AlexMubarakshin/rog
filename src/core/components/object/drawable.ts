
import { GameObject } from './object';

import { Renderer } from '../../renderer/renderer';
import { Drawable } from '../drawable/drawable';

export class DrawableObject extends GameObject {

  constructor(
    public drawable: Drawable,
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