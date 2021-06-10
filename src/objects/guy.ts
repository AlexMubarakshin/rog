import { Game } from '../core/game';
import { Renderer } from '../core/renderer/renderer';

import { GameObjectArgs } from '../core/components/object/object';

import { Character } from './character';
import { Sprite } from '../core/components/drawable/sprite';
import { Vector2 } from '../core/geometry/vector2';

export class SomeGuy extends Character {
  private _sprite: Sprite;

  constructor(args: Partial<GameObjectArgs> = {}) {
    super(args);

    this.position = new Vector2(128, 256);

    this._sprite = new Sprite({
      src: 'guy.png',
      position: this.position,
      height: this.height,
      width: this.width,
    });
  }

  public get sprite(): Sprite {
    return this._sprite;
  }

  public draw(renderer: Renderer): void {
    this._sprite.draw(renderer);
  }

  public update(game: Game, delta: number): void { }
}