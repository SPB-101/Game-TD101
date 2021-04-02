import {Turret} from "./Turret";
import {AnimatedSprite} from "../model/AnimatedSprite";
import {AnimationType, Loader} from "../Loader";
import {Utils, Vector} from "../Utils";
import {Creep} from "../Creep";
import {LightingMissile} from "../missile/LightingMissile";
import {Game} from "../Game";
import {ITurretState, TurretState} from "./TurretState";

export class DefTeslagun {

    static Static_Arc: ITurretState = {
        sprite: () => new AnimatedSprite(Loader.getImageMap('turret_teslagun'), Loader.frames[AnimationType.TESLAGUN_STATIC], 1.1, 2),
        shootPosSpec: new Vector(0, 25),
        shouldDrawArc: true
    };

    static Static: ITurretState = {
        sprite: () => new AnimatedSprite(Loader.getImageMap('turret_teslagun'), Loader.frames[AnimationType.TESLAGUN_STATIC], 1.1, 2),
        shootPosSpec: new Vector(0, 25),
        shouldDrawArc: false
    };

    static Around: ITurretState = {
        sprite: () => new AnimatedSprite(Loader.getImageMap('turret_teslagun'), Loader.frames[AnimationType.TESLAGUN_AROUND], 1.1, 2),
        shootPosSpec: new Vector(0, 25),
        shouldDrawArc: false
    };

}

export class Teslagun extends Turret {

    shoot(game: Game) {
        if (game.creeps.length) {
            const target: Creep | undefined = game.creeps.find(creep => Utils.inRadius(this.pos, creep.sprite.currentPos, this.radius));
            if (target) {
                this.setState(new TurretState(DefTeslagun.Around));
                game.run.push(new LightingMissile(Utils.add(this.pos, new Vector(0, -30)), Utils.add(target.sprite.currentPos, new Vector(0, -30)), 9));
            } else {
                this.setState(new TurretState(DefTeslagun.Static));
            }
        }
    }

    draw(cx: CanvasRenderingContext2D) {
        if (this.currState.shouldDrawArc()) {
            this.drawArc(cx)
        }
        this.currState.getSprite().draw(cx);
    }

    getStaticState(arc: boolean): TurretState {
        if(arc) {
            return new TurretState(DefTeslagun.Static_Arc);
        } else {
            return new TurretState(DefTeslagun.Static);
        }

    }
}