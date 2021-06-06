const DEFAULT_LABEL_VALUE = '';
const DEFAULT_LABEL_COLOR = '#000';

export class Label {

  constructor(
    private _value: string = DEFAULT_LABEL_VALUE,
    private _color: string = DEFAULT_LABEL_COLOR,
    private _visible: boolean = true,
  ) { }

  public get color(): string {
    return this._color;
  }
  public set color(value: string) {
    this._color = value;
  }

  public get visible(): boolean {
    return this._visible;
  }

  public set visible(value: boolean) {
    this._visible = value;
  }

  public get value(): string {
    return this._value;
  }

  public set value(text: string) {
    this._value = text || DEFAULT_LABEL_VALUE;
  }

}