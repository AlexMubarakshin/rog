import { Renderer } from '../../renderer/renderer';
import { Vector2 } from '../../geometry/vector2';
import { Drawable } from './drawable';

const DEFAULT_LABEL_VALUE = '';
const DEFAULT_LABEL_COLOR = '#000';
const DEFAULT_FONT_SIZE = 14;

type LabelConfig = Partial<{
  value: string;
  color: string;
  size: number;
  visible: boolean;
  position: Vector2;
  height: number;
  width: number;
}>

export class Label extends Drawable {
  public position: Vector2;
  public value: string;
  public color: string;
  public size: number;
  public height: number;
  public width: number;

  constructor(config: LabelConfig) {
    super();

    const {
      value = DEFAULT_LABEL_VALUE,
      color = DEFAULT_LABEL_COLOR,
      size = DEFAULT_FONT_SIZE,
      visible = true,
      position = Vector2.zero,
      width,
      height,
    } = config;

    this.value = value;
    this.color = color;

    this.size = size;

    this.width = width || this.value.length * DEFAULT_FONT_SIZE;
    this.height = height || DEFAULT_FONT_SIZE;

    this.position = position;
    this.visible = visible;
  }

  public draw(renderer: Renderer): void {
    renderer.drawLabel(this);
  }

}