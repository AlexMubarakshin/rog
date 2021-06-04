
import { GameObjectArgs } from '../core/object/object';

import { Scene } from '../core/scene';
import { Character } from '../core/object/character';
import { Sprite } from '../core/sprite';
import { Keyboard, Keys } from '../core/input/keyboard';

import { getAxisForDirection, getDirectionForKeys, getValueForDirection } from '../core/utils/direction';
import { isOutOfBounds } from '../core/utils/collision';

export class PlayerCharacter extends Character {
  constructor(args: GameObjectArgs) {
    super(args);

    this.sprite = new Sprite('character.png');
    this.sprite.load();
  }

  update = ({ keyboard, scene }: { keyboard: Keyboard; scene: Scene }): void => {
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
    }
  }
}