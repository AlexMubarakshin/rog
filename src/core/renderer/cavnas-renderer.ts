import { Vector2 } from '../geometry/vector2';

import { GameObject } from '../object/object';

import { Label } from '../object/label';
import { Sprite } from '../object/sprite';

import { Viewport } from '../viewport';
import { Renderer } from './renderer';

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

  protected clear = (): void => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public draw(objects: GameObject[], isDebug?: boolean): void {

    this.clear();

    this.context.save();

    objects.forEach((obj) => {
      if (!obj.visible) return;
      this.context.save();

      if (this.camera) {
        this.context.translate(-this.camera.x + this.camera.width / 2, -this.camera.y + this.camera.height / 2);
      }

      obj.draw(this);

      if (isDebug) {
        this.drawDebug(obj);
      }

      this.context.restore();
    });

  }

  public drawImage(image: Sprite, position: Vector2, width?: number, height?: number): void {
    this.context.save();

    this.context.drawImage(
      image.image,
      position.x,
      position.y,
      width,
      height,
    );

    this.context.restore();
  }

  public drawLabel(label: Label): void {
    this.context.save();

    if (label.visible) {
      const { position, width } = label;
      this.context.textBaseline = 'top';
      this.context.font = '14px Arial';
      this.context.fillStyle = label.color;

      this.context.fillText(label.value, position.x, position.y, width);
    }

    this.context.restore();
  }

  public drawDebug(obj: GameObject): void {
    const { width, height, position } = obj;

    this.context.save();

    this.context.fillText(`X: ${position.x}`, obj.position.x, obj.position.y + 8, width);
    this.context.fillText(`Y: ${position.y}`, obj.position.x, obj.position.y + 24, width);
    this.context.lineWidth = 1;
    this.context.strokeStyle = '#ff449f';
    this.context.strokeRect(position.x + 0, position.y + 0, width, height);

    this.context.restore();
  }

}