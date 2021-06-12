import { Label } from './core/components/drawable/label';
import { Camera } from './core/camera';
import { Game } from './core/game';
import { Vector2 } from './core/geometry/vector2';
import { GameObject } from './core/components/object/object';
import { Scene } from './core/scene';

import { PlayerCharacter } from './objects/player-character';

import { SceneData, SceneGenerator } from './scene-generator';
import { DrawableObject } from './core/components/object/drawable';

export class GameScene extends Scene {

  private terrainObjects: GameObject[];
  private playerCharacter: PlayerCharacter;
  private npcs: GameObject[];

  constructor(data: SceneData, camera: Camera) {
    super(data.size);

    this.terrainObjects = SceneGenerator.createObjects(data);
    this.npcs = SceneGenerator.createNpcs(data);

    this.playerCharacter = new PlayerCharacter({
      position: new Vector2(data.playerDefaultPos.x, data.playerDefaultPos.y),
    });

    const simpleText = new Label({
      value: 'Welcome to the test scene of my own game engine',
      color: '#ffafa8',
      position: new Vector2(0, -16),
    });

    const textGameObject = new DrawableObject(simpleText);

    this.addObjects([
      ...this.terrainObjects,
      ...this.npcs,
      this.playerCharacter,
      textGameObject,
    ]);

    camera.setFollow(this.playerCharacter);
  }

  public update(game: Game, delta: number): void {
    super.update(game, delta);
  }

}