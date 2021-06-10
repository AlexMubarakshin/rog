import { Label } from './core/components/drawable/label';
import { Camera } from './core/camera';
import { Game } from './core/game';
import { Vector2 } from './core/geometry/vector2';
import { GameObject } from './core/components/object/object';
import { Scene } from './core/scene';

import { PlayerCharacter } from './objects/player-character';
import { SomeGuy } from './objects/guy';

import { SceneGenerator } from './scene-generator';
import { DrawableObject } from './core/components/object/drawable';

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

  private someGuy: SomeGuy;

  constructor(data: SceneData, camera: Camera) {
    super(data);

    this.terrainObjects = SceneGenerator.createObjects(data);

    this.playerCharacter = new PlayerCharacter({
      position: new Vector2(data.playerDefaultPos.x, data.playerDefaultPos.y),
    });

    this.someGuy = new SomeGuy();

    const simpleText = new Label({
      value: 'Welcome to the test scene of my own game engine',
      color: '#ffafa8',
      position: new Vector2(0, -16),
    });

    const textGameObject = new DrawableObject(simpleText);

    this.addObjects([
      ...this.terrainObjects,
      this.playerCharacter,
      textGameObject,
      this.someGuy,
    ]);

    camera.setFollow(this.playerCharacter);
  }

  public update(game: Game, delta: number): void {
    super.update(game, delta);
  }

}