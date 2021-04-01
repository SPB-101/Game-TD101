import {Turret} from "./Turret";
import {ITurretState, TurretState} from "./TurretState";
import {AnimatedSprite} from "../model/AnimatedSprite";
import {AnimationType, Loader} from "../Loader";
import {Vector} from "../Utils";
import {Game} from "../Game";

export class DefLasergun {

    static Static: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_lasergun'), Loader.frames[AnimationType.turret5_1_10001], 0.9, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };

    static TL: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_lasergun'), Loader.frames[AnimationType.turret5_1], 0.9, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };
}

export class Lasergun extends Turret {
    draw(cx: CanvasRenderingContext2D) {
        if (this.currState.shouldDrawArc()) {
            cx.beginPath();
            cx.fillStyle = "rgba(255, 255, 255, .3)";
            cx.arc(this._pos.x, this._pos.y, this.radius, 0, Math.PI * 2);
            cx.fill();
            cx.closePath();
        }

        this.currState.getSprite().draw(cx);
    }


    shoot(game: Game) {
    }

    getShootAroundState(): TurretState {
        return new TurretState(DefLasergun.TL);
    }

    getStaticState(): TurretState {
        return new TurretState(DefLasergun.Static);
    }
}