import {Creep} from "./Creep";

export class Vector {
    constructor(public x: number, public y: number) {
    }
}

export class Utils {
    static rand = (max: number) => Math.floor(Math.random() * (max + 1));

    static move = (obj: Creep, target: Vector, speed: number) => {
        const distX = target.x - obj.sprite.currentPos.x;
        const distY = target.y - obj.sprite.currentPos.y;
        const angle = Math.atan2(distY, distX);
        obj.setPos(new Vector(obj.sprite.currentPos.x + speed * Math.cos(angle), obj.sprite.currentPos.y + speed * Math.sin(angle)));
        return (distX < 0 ? -distX : distX) + (distY < 0 ? -distY : distY) < 2;
    };
}
