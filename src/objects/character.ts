import { CHARACTER_HEIGHT, CHARACTER_SPEED, CHARACTER_WIDTH } from '../constants';
import { Game } from '../core/game';
import { Renderer } from '../core/renderer/renderer';
import { GameObject, GameObjectArgs } from '../core/components/object/object';

export class Character extends GameObject {
  private speed: number;

  constructor(args: GameObjectArgs) {
    super(args);

    this.height = CHARACTER_HEIGHT;
    this.width = CHARACTER_WIDTH;

    this.speed = CHARACTER_SPEED;
  }

  protected move = (axis: 'x' | 'y', value: number): void => {
    if (axis === 'x') this.position.x += value * this.speed;

    if (axis === 'y') this.position.y += value * this.speed;
  }

  public update(game: Game, delta: number): void { }
  public draw(renderer: Renderer): void { }
}