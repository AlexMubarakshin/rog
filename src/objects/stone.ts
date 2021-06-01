import { TILE_SIZE } from "../constants";

import { Sprite } from "../sprite";
import { GameObject, GameObjectArgs } from "./object";

export class WallGameObject extends GameObject {
    constructor(args: GameObjectArgs) {
        super(args);

        this.height = TILE_SIZE;
        this.width = TILE_SIZE;

        this.sprite = new Sprite('stone.png')
        this.sprite.load();
    }
}