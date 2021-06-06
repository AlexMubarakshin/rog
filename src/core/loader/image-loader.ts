import { FileLoader } from './loader';

export class ImageLoader implements FileLoader<HTMLImageElement> {

  private _key: string;
  private _value: HTMLImageElement;

  constructor() {
    this.init = this.init.bind(this);
    this.load = this.load.bind(this);
  }

  public get key(): string {
    return this._key;
  }

  public get value(): HTMLImageElement {
    return this._value;
  }

  init(url: string): void {
    this._key = url;

    this._value = new Image();
  }

  load(): Promise<ImageLoader> {
    return new Promise((resolve) => {
      this._value.src = this._key;
      this._value.addEventListener('load', () => resolve(this));
    });

  }

}