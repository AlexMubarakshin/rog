import { Vector2 } from '../../geometry/vector2';
import { Renderer } from '../../renderer/renderer';
import { Game } from '../../game';
import { Drawable } from './drawable';

type SpriteArgs = {
  src: string;
  height?: number;
  width?: number;
  position?: Vector2;
  visible?: boolean;
}

export class Sprite extends Drawable {
  private _image: HTMLImageElement;
  private _src: string;

  public height: number;
  public width: number;

  constructor({
    src,
    height,
    width,
    position,
    visible = true,
  }: SpriteArgs) {
    super();

    const cached = Game.getInstance().loader.getAssetFromChache(src);

    this._image = cached;

    this.position = position;

    this.height = height;
    this.width = width;

    this.visible = visible;
  }

  get src(): string {
    return this._src;
  }

  get image(): HTMLImageElement {
    return this._image;
  }

  public draw(renderer: Renderer): void {
    renderer.drawImage(this);
  }
}