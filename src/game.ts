import { Renderer } from "./renderer"
import { Scene } from "./scene";
import { FirstLevel } from "./data/level-1";
import { Input } from "./input";

export class Game {
    private lastFrame: number;
    private renderer: Renderer;
    private scene: Scene;
    private input: Input;

    constructor(canvas: HTMLCanvasElement) {
        this.renderer = new Renderer(canvas)
        this.input = new Input();
    };

    private loop = (currentFrame: number) => {
        const frameDelta = this.lastFrame - currentFrame;

        this.scene.update({ frame: frameDelta, input: this.input });
        this.renderer.update(this.scene);

        this.lastFrame = currentFrame;

        requestAnimationFrame(this.loop);
    }

    public start = () => {
        this.scene = new Scene(FirstLevel);
        requestAnimationFrame(this.loop);
    }

}