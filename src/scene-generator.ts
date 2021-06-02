import { TILE_SIZE } from './constants';
import { SimpleObject } from './core/object/simple-object';
import { GameObject, GameObjectArgs } from './core/object/object';
import { Map } from './scene';

enum MapObjectType {
  GRASS = 0,
  STONE = 1,
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

      default:
        return;
    }
  }

  public static createObjects = (map: Map): GameObject[] => {
    const objects = [];

    for (let i = 0; i < map.length; i++) {
      const mapRow = map[i];
      for (let j = 0; j < mapRow.length; j++) {
        const mapObj = mapRow[j];
        if (mapObj !== undefined) {
          const object = SceneGenerator.createObject(mapObj, {
            x: i * TILE_SIZE,
            y: j * TILE_SIZE
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