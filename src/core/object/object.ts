import { Sprite } from '../sprite';

export type GameObjectArgs = Partial<{
    x: number;
    y: number;
    width: number;
    height: number;
    sprite: Sprite;
    collidable: boolean;
}>

export abstract class GameObject {
    x: number;
    y: number;
    height: number;
    width: number;
    sprite: Sprite;
    collidable: boolean;

    constructor({ x, y, height, width, sprite, collidable = true }: GameObjectArgs = {}) {
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
      this.sprite = sprite;
      this.collidable = collidable;
    }

    public update = (...args: any[]) => { }

    public hit = () => { }

    get top() {
      return this.y;
    }

    get right() {
      return this.x + this.width;
    }

    get bottom() {
      return this.y + this.height;
    }

    get left() {
      return this.x;
    }

    get center() {
      return ({
        x: this.x - this.width / 2,
        y: this.y - this.height / 2,
      });
    }

}