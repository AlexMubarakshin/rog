import { CHARACTER_HEIGHT, CHARACTER_SPEED, CHARACTER_WIDTH } from '../../constants';
import { GameObject, GameObjectArgs } from './object';

export class Character extends GameObject {
    private speed: number;

    constructor(args: GameObjectArgs) {
      super(args);

      this.height = CHARACTER_HEIGHT;
      this.width = CHARACTER_WIDTH;

      this.speed = CHARACTER_SPEED;
    }

    protected move = (axis: 'x' | 'y', value: number) => {
      if (axis === 'x') this.x += value * this.speed;

      if (axis === 'y') this.y += value * this.speed;
    }
}