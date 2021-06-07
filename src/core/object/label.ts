import { Renderer } from '../renderer/renderer';
import { Vector2 } from '../geometry/vector2';
import { GameObject, GameObjectArgs } from './object';

const DEFAULT_LABEL_VALUE = '';
const DEFAULT_LABEL_COLOR = '#000';
const DEFAULT_FONT_SIZE = 14;

type LabelConfig = Partial<{
  value: string;
  color: string;
  size: number;
  visible: boolean;
  position: Vector2;
}> & Omit<GameObjectArgs, 'collidable'>;

export class Label extends GameObject {
  private _value: string;
  private _color: string;
  private _size: number;

  constructor(config: LabelConfig) {
    super(config);

    const {
      value = DEFAULT_LABEL_VALUE,
      color = DEFAULT_LABEL_COLOR,
      size = DEFAULT_FONT_SIZE,
      width,
      height,
      position,
    } = config;

    this._value = value;
    this._color = color;

    this.collidable = false;

    this.size = size;

    this.width = width || this._value.length * DEFAULT_FONT_SIZE;
    this.height = height || DEFAULT_FONT_SIZE;

    this.position = position;
  }

  public draw(renderer: Renderer): void {
    renderer.drawLabel(this);
  }

  public get size(): number {
    return this._size;
  }

  public set size(value: number) {
    this._size = value;
  }

  public get color(): string {
    return this._color;
  }

  public set color(value: string) {
    this._color = value;
  }

  public get value(): string {
    return this._value;
  }

  public set value(text: string) {
    this._value = text || DEFAULT_LABEL_VALUE;
  }

}