import {Turret} from "./Turret";
import {AnimatedSprite} from "../model/AnimatedSprite";
import {AnimationType, Loader} from "../Loader";
import {Utils, Vector} from "../Utils";
import {Creep} from "../Creep";
import {LightingMissile} from "../missile/LightingMissile";
import {Game} from "../Game";
import {ITurretState, TurretState} from "./TurretState";

export class DefTeslagun {

    static Static: ITurretState = {
        sprite: () => new AnimatedSprite(Loader.getImageMap('turret_teslagun'), Loader.frames[AnimationType.turret3_10001], 1.1, 2),
        shootPosSpec: new Vector(0, 25),
        shouldDrawArc: true
    };

    static Around: ITurretState = {
        sprite: () => new AnimatedSprite(Loader.getImageMap('turret_teslagun'), Loader.frames[AnimationType.turret3_1], 1.1, 2),
        shootPosSpec: new Vector(0, 25),
        shouldDrawArc: false
    };

}

export class Teslagun extends Turret {

    shoot(game: Game) {
        if (game.creeps.length) {
            const target: Creep | undefined = game.creeps.find(creep => Utils.inRadius(this.pos, creep.sprite.currentPos, this.radius));
            if (target) {
                this.setState(this.getShootAroundState());
                game.run.push(new LightingMissile(Utils.add(this.pos, new Vector(0, -30)), Utils.add(target.sprite.currentPos, new Vector(0, -30)), 9));
            } else {
                this.setState(this.getShootAroundState());
            }
        }
    }

    draw(cx: CanvasRenderingContext2D) {
        if (this.currState.shouldDrawArc()) {
            cx.beginPath();
            cx.fillStyle = "rgba(255, 255, 255, .3)";
            cx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
            cx.fill();
            cx.closePath();
        }
        this.currState.getSprite().draw(cx);
    }

    getShootAroundState(): TurretState {
        return new TurretState(DefTeslagun.Around);
    }

    getStaticState(): TurretState {
        return new TurretState(DefTeslagun.Static);
    }
}