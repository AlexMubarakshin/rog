import { Viewport } from "../viewport";
import { Scene } from "../scene";
import { GameLoopUpdateProps } from "../game";

export abstract class Renderer {

    protected _viewport: Viewport;

    public abstract update = (props: GameLoopUpdateProps) => { }

    protected abstract renderScene = (scene: Scene, isDebug: boolean) => { }

    protected abstract clear = () => { }

    public get viewport(): Viewport {
        return this._viewport;
    };
}