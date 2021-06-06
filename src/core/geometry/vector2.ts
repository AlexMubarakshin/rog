export class Vector2 {

  static get zero(): Vector2 { return new Vector2(0, 0); }

  constructor(
    public x = 0,
    public y = 0,
  ) { }

  get isZero(): boolean {
    return this.x === 0 && this.y === 0;
  }

  public setTo(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  public copy(v: Vector2): void {
    this.x = v.x;
    this.y = v.y;
  }

  public clone(): Vector2 {
    return new Vector2(this.x, this.y);
  }
}