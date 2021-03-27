import {AnimatedSprite} from "./AnimatedSprite";
import {Vector} from "./Utils";

export class Creep {
    slowfor: number
    nextpoint: number
    burning: boolean
    cash: number
    hp: number;
    offset: Vector;
    speed: number;
    sprite: AnimatedSprite


}