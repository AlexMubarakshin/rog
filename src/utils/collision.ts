import { Scene } from "../scene";
import { GameObject } from "../objects/object";

export function isOutOfBounds(object: GameObject, scene: Scene) {
    return (
        object.top < scene.top ||
        object.right > scene.right ||
        object.bottom > scene.bottom ||
        object.left < scene.left
    );
}

export function hasCollision(a: GameObject, b: GameObject): boolean {
    return (
        a.left < b.right &&
        a.right > b.left &&
        a.top < b.bottom &&
        a.bottom > b.top
    );
}

export function getCollisionObjects(object: GameObject, objects: GameObject[], withNonCollidable = false) {
    const _objects = new Set();

    for (const other of objects) {
        if (other !== object && (!withNonCollidable && other.collidable) && hasCollision(object, other)) {
            _objects.add(other);
        }
    }

    return _objects;
}