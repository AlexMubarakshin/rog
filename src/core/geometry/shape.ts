import { Vector2 } from './vector2';

export interface Shape {
  contains(point: Vector2): boolean;
  center: Vector2;
}