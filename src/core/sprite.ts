export class Sprite {
    private _image: HTMLImageElement;

    constructor(
        private _src: string,
    ) {
      this._image = new Image();
    }

    async load(): Promise<Sprite> {
      return new Promise((resolve) => {
        this._image.src = this._src;
        this._image.addEventListener('load', () => resolve(this));
      });
    }

    get src(): string {
      return this._src;
    }

    get image(): HTMLImageElement {
      return this._image;
    }

}