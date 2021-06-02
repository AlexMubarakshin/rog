export class Rectangle {
    public x: number;
    public y: number;
    public width: number;
    public height: number;

    constructor(x = 0, y = 0, width = 0, height = 0) {
      this.x = Number(x);
      this.y = Number(y);
      this.width = Number(width);
      this.height = Number(height);
    }

    get left(): number {
      return this.x;
    }

    get right(): number {
      return this.x + this.width;
    }

    get top(): number {
      return this.y;
    }

    get bottom(): number {
      return this.y + this.height;
    }
}