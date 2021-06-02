import { GameObject } from "./objects/object";

import { PlayerCharacter } from './objects/player-character';
import { getCollisionObjects } from './utils/collision';
import { Camera } from './camera';

import { GameLoopUpdateProps } from './game';
import { SceneGenerator } from "./scene-generator";

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

export class Scene {

    private _camera: Camera;
    private _objects: GameObject[];

    private terrainObjects: GameObject[];
    private playerCharacter: PlayerCharacter;
    private sceneSize: { height: number; width: number; }

    constructor(data: SceneData) {
        this.terrainObjects = SceneGenerator.createObjects(data.map);
        this.playerCharacter = new PlayerCharacter({ x: data.playerDefaultPos.x, y: data.playerDefaultPos.y });

        this._objects = [
            ...this.terrainObjects,
            this.playerCharacter,
        ]

        this.sceneSize = data.size;
        this._camera = new Camera();

        this._camera.setFollow(this.playerCharacter);
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

    public get camera(): Camera {
        return this._camera;
    }

    public update = (updateState: GameLoopUpdateProps) => {

        this._objects.forEach(obj => obj.update(updateState));

        this._camera.update(updateState.viewport);
    }

}