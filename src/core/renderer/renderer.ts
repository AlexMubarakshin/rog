import { Viewport } from '../viewport';
import { GameLoopUpdateProps } from '../../game';

export abstract class Renderer {

  protected _viewport: Viewport;

  public abstract draw = (props: GameLoopUpdateProps): void => { }

  protected abstract clear = (): void => { }

  public get viewport(): Viewport {
    return this._viewport;
  }
}