import {AnimatedSprite} from "./AnimatedSprite";
import {AnimationType, Loader} from "./Loader";
import {Creep} from "./Creep";
import {Utils} from "./Utils";
import {Game} from "./Game";
import {LaserMissile} from "./missile/LaserMissile";
import {LightingMissile} from "./missile/LightingMissile";

export enum TurretState {
    SHOOT_AROUND
}

export class Turret {

    name: string;
    sprite: AnimatedSprite;
    rate: number = 30;
    lastShot: number = 0;
    radius: number = 80;

    constructor(name: string) {
        this.name = name;
    }

    public setState(state: TurretState) {
        if (state === TurretState.SHOOT_AROUND) {
            this.sprite = new AnimatedSprite(Loader.getImageMap('turret_teslagun'), Loader.frames[AnimationType.turret3_1], 1.1, 2);
        }
    }

    shoot(game: Game) {
        if (game.creeps.length) {
            const target: Creep = game.creeps[Utils.rand(game.creeps.length - 1)];
            game.run.push(new LightingMissile(this.sprite.currentPos, target.sprite.currentPos, 9));
        }
    }

    draw(cx: CanvasRenderingContext2D) {

    }

}
