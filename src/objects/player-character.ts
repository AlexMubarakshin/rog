import { Keys } from "../constants";
import { GameObject, GameObjectArgs } from "./object";

import { Scene } from "../scene";
import { Character } from "./character";
import { Sprite } from "../sprite";
import { Input } from "../input";

import { getAxisForDirection, getDirectionForKeys, getValueForDirection } from "../utils/direction";
import { isOutOfBounds } from "../utils/collision";

export class PlayerCharacter extends Character {
    constructor(args: GameObjectArgs) {
        super(args);

        this.sprite = new Sprite('character.png')
        this.sprite.load();
    }

    update = ({ input, scene }: { input: Input; scene: Scene }) => {
        if (input.has(Keys.UP, Keys.RIGHT, Keys.DOWN, Keys.LEFT)) {
            const direction = getDirectionForKeys(input.keys);
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