import { TILE_SIZE } from './constants';
import { SimpleObject } from './core/object/simple-object';
import { GameObject, GameObjectArgs } from './core/object/object';
import { Vector2 } from './core/geometry/vector2';

import { SceneData } from './scene';

enum MapObjectType {
  GRASS = 0,
  STONE = 1,
  WOOD = 2,
}

export class SceneGenerator {
  public static createObject = (type: MapObjectType, args: GameObjectArgs): GameObject | undefined => {
    switch (type) {
      case MapObjectType.GRASS:
        return new SimpleObject({
          ...args,
          spirteUrl: 'grass.png',
          collidable: false,

          height: TILE_SIZE,
          width: TILE_SIZE,
        });

      case MapObjectType.STONE:
        return new SimpleObject({
          ...args,
          spirteUrl: 'stone.png',
          collidable: true,

          height: TILE_SIZE,
          width: TILE_SIZE,
        });

      case MapObjectType.WOOD:
        return new SimpleObject({
          ...args,
          spirteUrl: 'wood.png',
          collidable: false,

          height: TILE_SIZE,
          width: TILE_SIZE,
        });

      default:
        return null;
    }
  }

  public static createObjects = ({ map }: SceneData): GameObject[] => {
    const objects = [];

    for (let i = 0; i < map.length; i++) {
      const mapRow = map[i];
      for (let j = 0; j < mapRow.length; j++) {
        const mapObj = mapRow[j];
        if (mapObj !== undefined) {
          const object = SceneGenerator.createObject(mapObj, {
            position: new Vector2(i * TILE_SIZE, j * TILE_SIZE)
          });

          if (object) {
            objects.push(object);
          }
        }
      }
    }

    return objects;
  }
}