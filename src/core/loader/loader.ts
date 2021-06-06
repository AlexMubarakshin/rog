import { ImageLoader } from './image-loader';

export type FileLoaders = ImageLoader;
export type FileLoadersValue = HTMLImageElement;

export interface FileLoader<T = FileLoadersValue> {
  init(url: string): void;
  load(): Promise<FileLoaders>;
  key: string;
  value: T;
}

export class Loader {

  protected static factory(url: string): FileLoader | null {
    const extention = url.substring(url.length - 3, url.length);
    if (extention == 'png') {
      return new ImageLoader();
    }

    return null;
  }

  private _downloadRemains: number;
  private _running: boolean;
  private _loaders: FileLoader[]

  constructor() {
    this._loaders = [];
    this._downloadRemains = 0;

    this.addAsset = this.addAsset.bind(this);
    this.addAssets = this.addAssets.bind(this);
    this.load = this.load.bind(this);
    this.getAssetFromChache = this.getAssetFromChache.bind(this);
  }

  public get running(): boolean {
    return this._running;
  }

  public addAsset(url: string): void {
    const loader = Loader.factory(url);
    if (loader) {
      loader.init(url);

      this._loaders.push(loader);

      this._downloadRemains += 1;
    }
  }

  public addAssets(urls: string[]): void {
    urls.forEach((url) => this.addAsset(url));
  }

  public async load(): Promise<void> {
    if (this._running) return null;

    this._running = true;

    await Promise.all(this._loaders.map((loader) => {
      loader.load().finally(() => this._downloadRemains -= 1);
    }));

    this._running = false;
  }

  public getAssetFromChache(url: string): FileLoadersValue | null {
    const loader = this._loaders.find(l => l.key === url);
    if (!loader) return null;

    return loader.value;
  }

}