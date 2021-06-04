import { Viewport } from '../viewport';
import { Renderer } from './renderer';
import { GameLoopUpdateProps } from '../../game';

export class CanvasRenderer extends Renderer {
  private context: CanvasRenderingContext2D;

  constructor(
    private canvas: HTMLCanvasElement,
  ) {
    super();

    this.context = canvas.getContext('2d');

    this._viewport = new Viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  public draw = ({ scene, isDebug }: GameLoopUpdateProps): void => {
    this.clear();

    const camera = scene.camera;

    this.context.save();

    this.context.translate(-camera.x + camera.width / 2, -camera.y + camera.height / 2);

    scene.objects.forEach((obj) => {
      if (!obj.sprite) return;

      const x = obj.x;
      const y = obj.y;

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

    });

    this.context.restore();
  }

  protected clear = (): void => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}