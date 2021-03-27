import {AnimatedSprite} from "./AnimatedSprite";
import {Vector} from "./Utils";
import {AnimationType, Loader} from "./Loader";

export enum State {
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

    public setState(state: State) {
        if(state === State.GO_RIGHT) {
            this. sprite = new AnimatedSprite(Loader.maps[Loader.imgs[1]], Loader.frames[AnimationType.meh_go]);
        }
    }
}