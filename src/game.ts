import { Renderer } from "./renderer/renderer"
import { Scene } from "./scene";
import { FirstLevel } from "./data/level-1";
import { Keyboard } from "./input/keyboard";
import { Pointer } from "./input/pointer";
import { Viewport } from "./viewport";

export type GameLoopUpdateProps = {
    keyboard: Keyboard;
    frame: number;
    viewport: Viewport;
    scene: Scene;
    isDebug: boolean;
};

export class Game {
    private lastFrame: number;

    private scene: Scene;
    private keyboardInput: Keyboard;
    private pointerInput: Pointer;

    constructor(
        private renderer: Renderer,
        private _isDebug = false,
    ) {
        this.keyboardInput = new Keyboard();
        this.pointerInput = new Pointer();
    };

    private loop = (currentFrame: number) => {
        const frameDelta = this.lastFrame - currentFrame;

        const gameLoopProps = {
            frame: frameDelta,
            keyboard: this.keyboardInput,
            viewport: this.renderer.viewport,
            scene: this.scene,
            isDebug: this.isDebug,
        };

        this.scene.update(gameLoopProps);
        this.renderer.update(gameLoopProps);

        this.lastFrame = currentFrame;

        requestAnimationFrame(this.loop);
    }

    public start = () => {
        this.scene = new Scene(FirstLevel);
        requestAnimationFrame(this.loop);
    }

    public get isDebug(): boolean {
        return this._isDebug;
    }

}