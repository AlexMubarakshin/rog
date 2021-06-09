import { Label } from './core/components/drawable/label';
import { Camera } from './core/camera';
import { Game } from './core/game';
import { Vector2 } from './core/geometry/vector2';
import { GameObject } from './core/components/object/object';
import { Scene } from './core/scene';

import { PlayerCharacter } from './objects/player-character';

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

  private mousePosLabel: DrawableObject<Label>;

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

    this.mousePosLabel = new DrawableObject(new Label({
      color: '#e5d549',
      width: 300,
    }));

    const textGameObject = new DrawableObject(simpleText);

    this.addObjects([
      ...this.terrainObjects,
      this.playerCharacter,
      this.mousePosLabel,
      textGameObject,
    ]);

    camera.setFollow(this.playerCharacter);
  }

  public update(game: Game, delta: number): void {
    super.update(game, delta);

    this.mousePosLabel.position.copy(game.pointer.lastPos);
    this.mousePosLabel.drawable.position.copy(game.pointer.lastPos);

    this.mousePosLabel.drawable.value = `X: ${game.pointer.lastPos.x} Y: ${game.pointer.lastPos.y}`;
  }

}