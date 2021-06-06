import { Vector2 } from '../geometry/vector2';
import { Sprite } from '../sprite';

export type GameObjectArgs = Partial<{
  position: Vector2;
  width: number;
  height: number;
  sprite: Sprite;
  collidable?: boolean;
  visible?: boolean;
}>

export abstract class GameObject {
  position: Vector2;

  height: number;
  width: number;
  sprite: Sprite;
  collidable: boolean;
  visible: boolean;

  constructor({ position, height, width, sprite, collidable = true, visible = true }: GameObjectArgs = {}) {
    this.position = position;
    this.height = height;
    this.width = width;
    this.sprite = sprite;
    this.collidable = collidable;
    this.visible = visible;
  }

  public update(...args: any[]) { }

  public hit() { }

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

}