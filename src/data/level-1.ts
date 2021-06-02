import { TILE_SIZE } from '../constants';
import { SceneData } from '../scene';

export const FirstLevel: SceneData = {
  map: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  ],
  playerDefaultPos: {
    x: 2 * TILE_SIZE,
    y: 2 * TILE_SIZE,
  },
  size: {
    height: 11 * TILE_SIZE,
    width: 11 * TILE_SIZE,
  }
};