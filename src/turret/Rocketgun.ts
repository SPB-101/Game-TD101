import {Turret} from "./Turret";
import {ITurretState, TurretState} from "./TurretState";
import {AnimatedSprite} from "../model/AnimatedSprite";
import {AnimationType, Loader} from "../Loader";
import {Vector} from "../Utils";
import {Game} from "../Game";

export class DefRocketgun {

    static Static: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_rocketgun'), Loader.frames[AnimationType.turret2_1_1stage], 1.1, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };

    static TL: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_rocketgun'), Loader.frames[AnimationType.turret2_1_1stage], 1.1, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };

    static TR: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_rocketgun'), Loader.frames[AnimationType.turret2_1_1stage], 1.1, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };

    static BL: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_rocketgun'), Loader.frames[AnimationType.turret2_1_1stage], 1.1, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };

    static BR: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_rocketgun'), Loader.frames[AnimationType.turret2_1_1stage], 1.1, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };
}

export class RocketgunShootAround extends TurretState {

    _sprite = new AnimatedSprite(Loader.getImageMap('turret_rocketgun'), Loader.frames[AnimationType.turret2_1_1stage], 1.1, 2);

    getSprite(): AnimatedSprite {
        return this._sprite;
    }

    specifyPos(curr: Vector): Vector {
        this._sprite.currentPos = curr;
        return curr;
    }

    shouldDrawArc() {
        return false;
    }
}

export class Rocketgun extends Turret {
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

    getShootAroundState(): TurretState {
        return new TurretState(DefRocketgun.Static);
    }

    getStaticState(): TurretState {
        return new TurretState(DefRocketgun.Static);
    }

    shoot(game: Game) {

    }
}