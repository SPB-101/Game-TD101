import {AnimatedSprite} from "./AnimatedSprite";
import {AnimationType, Loader} from "./Loader";

export enum ElectroState {
    SHOOT
}

export class Electro {

    sprite: AnimatedSprite

    public setState(state: ElectroState) {
        if(state === ElectroState.SHOOT) {
            this.sprite = new AnimatedSprite(Loader.getImageMap("fire"), Loader.frames[AnimationType.fire2], .7, 3)
        }
    }

}