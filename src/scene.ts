import { GameObject } from './core/object/object';

import { PlayerCharacter } from './objects/player-character';

import { GameLoopUpdateProps } from './game';
import { SceneGenerator } from './scene-generator';
import { Scene } from './core/scene';

export type MapRow = number[];
export type Map = MapRow[];

export type SceneData = {
  map: Map;
  playerDefaultPos: {
    x: number;
    y: number;
  },
  size: {
    height: number;
    width: number;
  }
}

export class GameScene extends Scene {

  private terrainObjects: GameObject[];
  private playerCharacter: PlayerCharacter;

  constructor(data: SceneData) {
    super(data);

    this.terrainObjects = SceneGenerator.createObjects(data.map);
    this.playerCharacter = new PlayerCharacter({ x: data.playerDefaultPos.x, y: data.playerDefaultPos.y });

    this.addObjects([
      ...this.terrainObjects,
      this.playerCharacter,
    ]);

    this.camera.setFollow(this.playerCharacter);
  }

  public update(updateState: GameLoopUpdateProps): void {
    super.update(updateState);
  }

}