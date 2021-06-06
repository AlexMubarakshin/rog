import { Keys } from '../system/keys';

export class Keyboard {

  private _keys: Set<Keys> = new Set();

  constructor() {
    this._keys = new Set();

    this.init();
  }

  init(): void {
    document.addEventListener('keydown', event => {
      switch (event.code) {
        case Keys.UP:
        case Keys.RIGHT:
        case Keys.DOWN:
        case Keys.LEFT:
        case Keys.SPACE:
        case Keys.ENTER:
          event.preventDefault();
          this._keys.add(event.code);
      }
    });

    document.addEventListener('keyup', event => {
      switch (event.code) {
        case Keys.UP:
        case Keys.RIGHT:
        case Keys.DOWN:
        case Keys.LEFT:
        case Keys.SPACE:
        case Keys.ENTER:
          event.preventDefault();
          this._keys.delete(event.code);
      }
    });
  }

  public has(...arg: Keys[]): boolean {
    return Array.isArray(arg) ?
      arg.some(key => this._keys.has(key)) :
      this._keys.has(arg);
  }

  public get keys(): Set<Keys> {
    return this._keys;
  }
}