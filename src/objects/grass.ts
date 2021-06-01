import { Sprite } from "../sprite";
import { GameObject, GameObjectArgs } from "./object";
import { TILE_SIZE } from "../constants";

export class GrassGameObject extends GameObject {
    constructor(args: GameObjectArgs) {
        super(args);

        this.height = TILE_SIZE;
        this.width = TILE_SIZE;

        this.collidable = false;

        this.sprite = new Sprite('grass.png')
        this.sprite.load();
    }
}