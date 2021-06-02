import { Sprite } from "../sprite";
import { GameObject, GameObjectArgs } from "./object";

export type SimpleObjectArgs = {
    spirteUrl?: string;
} & Omit<GameObjectArgs, 'sprite'>

export class SimpleObject extends GameObject {
    constructor(args: SimpleObjectArgs) {
        super(args);

        if (args.spirteUrl) {
            this.sprite = new Sprite(args.spirteUrl)
            this.sprite.load();
        }
    }
}