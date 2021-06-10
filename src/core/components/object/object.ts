import { Game } from '../../game';

import { Renderer } from '../../renderer/renderer';

import { Rectangle } from '../../geometry/rectangle';
import { Vector2 } from '../../geometry/vector2';
import { Shape } from '../../geometry/shape';

import { Drawable } from '../drawable/drawable';

export type GameObjectArgs = Partial<{
  position: Vector2;
  width: number;
  height: number;
  collidable?: boolean;
  visible?: boolean;
}>

export abstract class GameObject extends Drawable {
  position: Vector2;

  height: number;
  width: number;
  collidable: boolean;

  constructor({
    position = Vector2.zero,
    height,
    width,
    collidable = true,
    visible = true,
  }: GameObjectArgs = {}) {
    super();

    this.position = position;
    this.height = height;
    this.width = width;

    this.collidable = collidable;
    this.visible = visible;
  }

  public draw(renderer: Renderer): void {
    return null;
  }

  public update(game: Game, delta: number): void {
    return null;
  }


  get top(): number {
    return this.position.y;
  }

  get right(): number {
    return this.position.x + this.width;
  }

  get bottom(): number {
    return this.position.y + this.height;
  }

  get left(): number {
    return this.position.x;
  }

  get center(): Vector2 {
    return new Vector2(this.position.x - this.width / 2, this.position.y - this.height / 2);
  }

  get bound(): Shape {
    return new Rectangle(this.left, this.top, this.width, this.height);
  }

}