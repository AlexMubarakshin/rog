import { Scene } from "./scene";

export class Renderer {
    private context: CanvasRenderingContext2D;

    constructor(
        private canvas: HTMLCanvasElement,
    ) {
        this.context = canvas.getContext('2d');
        this.context.imageSmoothingEnabled = false;
    }

    public update = (scene: Scene) => {
        this.clear();

        this.renderScene(scene);
    }

    private renderScene = (scene: Scene) => {
        scene.objects.forEach((obj) => {
            if (!obj.sprite) return;

            this.context.drawImage(
                obj.sprite.image,

                obj.x,
                obj.y,
                obj.width,
                obj.height,
            );

            // this.context.lineWidth = 1;
            // this.context.strokeStyle = '#ff449f';
            // this.context.strokeRect(obj.x + 1, obj.y + 1, obj.width - 2, obj.height - 2);
        });
    }

    private clear = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}