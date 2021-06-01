import { TILE_SIZE } from './constants';

import { GameObject, GameObjectArgs } from "./objects/object";

import { GrassGameObject } from "./objects/grass";
import { WallGameObject } from './objects/stone';
import { PlayerCharacter } from './objects/player-character';
import { Input } from './input';
import { getCollisionObjects } from './utils/collision';

enum TerrainType {
    GRASS = 0,
    STONE = 1,
}

type MapRow = number[];
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

export class Scene {

    private _objects: GameObject[];
    private terrainObjects: GameObject[];
    private playerCharacter: PlayerCharacter;
    private sceneSize: { height: number; width: number; }

    protected static createObject = (type: TerrainType, args: GameObjectArgs): GameObject | undefined => {
        switch (type) {
            case TerrainType.GRASS:
                return new GrassGameObject(args)
            case TerrainType.STONE:
                return new WallGameObject(args)

            default:
                return;
        }
    }

    protected static createObjects = (map: Map) => {
        const objects = [];

        for (let i = 0; i < map.length; i++) {
            const mapRow = map[i];
            for (let j = 0; j < mapRow.length; j++) {
                const mapObj = mapRow[j];
                if (mapObj !== undefined) {
                    const object = Scene.createObject(mapObj, {
                        x: i * TILE_SIZE,
                        y: j * TILE_SIZE
                    })

                    if (object) {
                        objects.push(object);
                    }
                }
            }
        }

        return objects;
    }

    constructor(data: SceneData) {
        this.terrainObjects = Scene.createObjects(data.map);
        this.playerCharacter = new PlayerCharacter({ x: data.playerDefaultPos.x, y: data.playerDefaultPos.y });

        this._objects = [
            ...this.terrainObjects,
            this.playerCharacter,
        ]

        this.sceneSize = data.size;
    }

    public hasCollision(object: GameObject) {
        const collision = this.getCollision(object);

        return Boolean(collision);
    }

    public getCollision(object: GameObject) {
        const collisionObjects = getCollisionObjects(object, this.objects);

        if (collisionObjects.size > 0) {
            return { objects: collisionObjects };
        }
    }

    get width() {
        return this.sceneSize.width;
    }

    get height() {
        return this.sceneSize.height;
    }

    get top() {
        return 0;
    }

    get right() {
        return this.width;
    }

    get bottom() {
        return this.height;
    }

    get left() {
        return 0;
    }

    public get objects() {
        return this._objects;
    }

    public update = (updateState: { input: Input; frame: number; }) => {
        const state = {
            ...updateState,
            scene: this,
        };

        this._objects.forEach(obj => obj.update(state));
    }

}