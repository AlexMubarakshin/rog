import { Game } from '../core/game';
import { Renderer } from '../core/renderer/renderer';

import { GameObjectArgs } from '../core/components/object/object';

import { Character } from './character';
import { Sprite } from '../core/components/drawable/sprite';
import { Keys } from '../core/system/keys';

import { getAxisForDirection, getDirectionForKeys, getValueForDirection } from '../core/utils/direction';
import { isOutOfBounds } from '../core/utils/collision';
export class PlayerCharacter extends Character {
  private _sprite: Sprite;

  constructor(args: GameObjectArgs) {
    super(args);

    this._sprite = new Sprite({
      src: 'character.png',
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

  public update({ keyboard, scene }: Game, delta: number): void {
    if (keyboard.has(Keys.UP, Keys.RIGHT, Keys.DOWN, Keys.LEFT)) {
      const direction = getDirectionForKeys(keyboard.keys);
      const axis = getAxisForDirection(direction);
      const value = getValueForDirection(direction);

      this.move(axis, value);

      const _isOutOfBounds = isOutOfBounds(this, scene);
      const _hasCollision = scene.hasCollision(this);

      if (_isOutOfBounds || _hasCollision) {
        this.move(axis, -value);
      }

      this.sprite.position = this.position;
    }
  }
}