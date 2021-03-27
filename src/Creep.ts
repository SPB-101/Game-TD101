import {Actor} from "./Actor";
import {AnimatedSprite} from "./AnimatedSprite";
import {Vector} from "./Utils";

export class Creep implements Actor {
    slowfor: number
    nextpoint: number
    burning: boolean
    cash: number
    hp: number;
    offset: Vector;
    private _pos: Vector;
    speed: number;
    private _sprite: AnimatedSprite

    set sprite(value: AnimatedSprite) {
        this._sprite = value;
        this._sprite.currentPos = this.pos;
    }

    set pos(value: Vector) {
        this._pos = value;
        this._sprite.currentPos = value;
    }

    get pos(): Vector {
        return this._pos;
    }

    get sprite(): AnimatedSprite {
        return this._sprite;
    }
}