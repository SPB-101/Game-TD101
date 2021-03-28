import {AnimatedSprite} from "./AnimatedSprite";
import {AnimationType, Loader} from "./Loader";

export enum TurretState {
    SHOOT_AROUND
}

export class Turret {

    name: string;
    sprite: AnimatedSprite;


    constructor(name: string) {
        this.name = name;
    }

    public setState(state: TurretState) {
        if (state === TurretState.SHOOT_AROUND) {
            this.sprite = new AnimatedSprite(Loader.getImageMap('turret_teslagun'), Loader.frames[AnimationType.turret3_1], 1.1);
        }
    }

}
