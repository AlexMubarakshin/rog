import { TILE_SIZE } from '../constants';
import { SceneData } from '../scene-generator';

export const FirstLevel: SceneData = {
  map: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,],
    [1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1,],
    [1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1,],
    [1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1,],
    [1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1,],
    [1, 2, 2, 2, 2, 1, 1, 1, 2, 2, 1,],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  ],
  npcs: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],],
  playerDefaultPos: {
    x: 2 * TILE_SIZE,
    y: 2 * TILE_SIZE,
  },
  size: {
    height: 11 * TILE_SIZE,
    width: 13 * TILE_SIZE,
  }
};