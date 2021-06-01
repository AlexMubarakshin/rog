import { Keys } from "./constants";

export class Input {
    private _keys: Set<Keys>;

    constructor() {
        this._keys = new Set();

        this.init();
    }

    init() {
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

    has(...arg) {
        return Array.isArray(arg) ?
            arg.some(key => this._keys.has(key)) :
            this._keys.has(arg);
    }

    public get keys() {
        return this._keys;
    }
}