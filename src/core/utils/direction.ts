
import { Keys } from '../system/keys';
import { Direction } from '../../constants';

export function getAxisForDirection(direction: Direction): 'x' | 'y' {
  return direction % 2 === 0 ? 'y' : 'x';
}

export function getDirectionForKeys(keys: Set<Keys>): Direction {
  if (keys.has(Keys.UP)) {
    return Direction.UP;
  }

  if (keys.has(Keys.RIGHT)) {
    return Direction.RIGHT;
  }

  if (keys.has(Keys.DOWN)) {
    return Direction.DOWN;
  }

  if (keys.has(Keys.LEFT)) {
    return Direction.LEFT;
  }
}

export function getValueForDirection(direction: Direction): -1 | 1 {
  switch (direction) {
    case Direction.UP: return -1;
    case Direction.RIGHT: return 1;
    case Direction.DOWN: return 1;
    case Direction.LEFT: return -1;
  }
}