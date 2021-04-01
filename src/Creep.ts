import {AnimatedSprite} from "./model/AnimatedSprite";
import {Vector} from "./Utils";
import {AnimationType, Loader} from "./Loader";

export enum CreepState {
    GO_RIGHT
}

export class Creep {

    slowfor: number = 0;
    nextpoint: number = 0;
    burning: boolean = false;
    cash: number = 0;
    hp: number = 1;
    offset: Vector;
    speed: number = 1;
    sprite: AnimatedSprite;

    constructor(offset: Vector) {
        this.offset = offset;
    }

    public setPos(pos: Vector) {
        this.sprite.currentPos = pos;
    }

    public setState(state: CreepState) {
        if(state === CreepState.GO_RIGHT) {
            this. sprite = new AnimatedSprite(Loader.maps[Loader.imgs[1]], Loader.frames[AnimationType.meh_go], .5);
        }
    }
}