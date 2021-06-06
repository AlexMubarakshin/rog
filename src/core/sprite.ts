import { Game } from './game';

export class Sprite {
  private _image: HTMLImageElement;

  constructor(
    private _src: string,
  ) {
    const cached = Game.getInstance().loader.getAssetFromChache(_src);

    this._image = cached;
  }

  get src(): string {
    return this._src;
  }

  get image(): HTMLImageElement {
    return this._image;
  }

}