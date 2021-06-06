import { Viewport } from '../viewport';
import { Renderer } from './renderer';
import { GameLoopUpdateProps } from '../game';

export class CanvasRenderer extends Renderer {
  private context: CanvasRenderingContext2D;

  constructor(
    private canvas: HTMLCanvasElement,
  ) {
    super();

    this.context = canvas.getContext('2d');

    this._viewport = new Viewport(0, 0, this.canvas.width, this.canvas.height);

    this.draw = this.draw.bind(this);
    this.clear = this.clear.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
    this.init = this.init.bind(this);

    this.init();
  }

  private init() {
    window.addEventListener('resize', this.resizeHandler);
  }

  private resizeHandler() {
    const { clientHeight, clientWidth } = document.body;

    this.canvas.height = clientHeight;
    this.canvas.width = clientWidth;

    this._viewport = new Viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  public draw({ scene, isDebug }: GameLoopUpdateProps): void {
    this.clear();

    const camera = scene.camera;

    this.context.save();

    this.context.translate(-camera.x + camera.width / 2, -camera.y + camera.height / 2);

    scene.objects.forEach((obj) => {
      if (!obj.visible) return;

      const { x, y } = obj.position;

      const width = obj.width;
      const height = obj.height;

      if (obj.sprite) {
        this.context.drawImage(
          obj.sprite.image,
          x,
          y,
          width,
          height,
        );
      }

      if (isDebug) {
        this.context.fillText(`X: ${x}`, obj.position.x, obj.position.y + 8, width);
        this.context.fillText(`Y: ${y}`, obj.position.x, obj.position.y + 24, width);
        this.context.lineWidth = 1;
        this.context.strokeStyle = '#ff449f';
        this.context.strokeRect(x + 0, y + 0, width, height);
      }

    });

    this.context.restore();
  }

  protected clear = (): void => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}