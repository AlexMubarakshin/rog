import { Vector2 } from '../../geometry/vector2';
import { Renderer } from '../../renderer/renderer';

export abstract class Drawable {
  public height: number;
  public width: number;

  public visible: boolean;
  public position: Vector2;

  public abstract draw(renderer: Renderer): void;
}