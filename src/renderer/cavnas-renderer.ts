import { Viewport } from "../viewport";
import { Scene } from "../scene";
import { Renderer } from "./renderer";
import { GameLoopUpdateProps } from "../game";

export class CanvasRenderer extends Renderer {
    private context: CanvasRenderingContext2D;

    constructor(
        private canvas: HTMLCanvasElement,
    ) {
        super();

        this.context = canvas.getContext('2d');

        this._viewport = new Viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    public update = ({ scene, isDebug }: GameLoopUpdateProps) => {
        this.clear();

        this.renderScene(scene, isDebug);
    }

    protected renderScene = (scene: Scene, isDebug: boolean) => {
        const camera = scene.camera;

        scene.objects.forEach((obj) => {
            if (!obj.sprite) return;

            this.context.save();


            const x = obj.x - camera.x;
            const y = obj.y - camera.y;

            const width = obj.width;
            const height = obj.height;

            this.context.drawImage(
                obj.sprite.image,
                x,
                y,
                width,
                height,
            );

            if (isDebug) {
                this.context.fillText(`X: ${x} Y: ${y}`, x - width / 2, y - height / 2, width);
                this.context.lineWidth = 1;
                this.context.strokeStyle = '#ff449f';
                this.context.strokeRect(x + 1, y + 1, width - 2, height - 2);
            }
            this.context.restore();
        });


        if (isDebug) {
            this.context.lineWidth = 1;
            this.context.strokeStyle = '#bf1363';
            this.context.strokeRect(camera.x, camera.y, this.viewport.width, this.viewport.height);
        }
    }

    protected clear = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}