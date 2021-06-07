import { Label } from './core/object/label';
import { Camera } from './core/camera';
import { Game } from './core/game';
import { Vector2 } from './core/geometry/vector2';
import { GameObject } from './core/object/object';
import { Scene } from './core/scene';

import { PlayerCharacter } from './objects/player-character';

import { SceneGenerator } from './scene-generator';

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

  constructor(data: SceneData, camera: Camera) {
    super(data);

    this.terrainObjects = SceneGenerator.createObjects(data);

    this.playerCharacter = new PlayerCharacter({
      position: new Vector2(data.playerDefaultPos.x, data.playerDefaultPos.y),
    });

    const simpleText = new Label({
      value: 'Welcome to the test scene of my own game engine',
      color: '#ffafa8',
      position: new Vector2(0, -16),
    });

    this.addObjects([
      ...this.terrainObjects,
      this.playerCharacter,
      simpleText,
    ]);

    camera.setFollow(this.playerCharacter);
  }

  public update(game: Game, delta: number): void {
    super.update(game, delta);
  }

}