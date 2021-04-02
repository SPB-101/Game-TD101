import {Turret} from "./Turret";
import {ITurretState, TurretState} from "./TurretState";
import {AnimatedSprite} from "../model/AnimatedSprite";
import {AnimationType, Loader} from "../Loader";
import {Utils, Vector} from "../Utils";
import {Creep} from "../Creep";
import {LaserMissile} from "../missile/LaserMissile";
import {Game} from "../Game";

export class DefLasergun {

    static Static_BL: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_lasergun'), Loader.frames[AnimationType.turret5_1_10001], 0.9, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };

    static Static_BR: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_lasergun'), Loader.frames[AnimationType.turret5_1_20001], 0.9, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };

    static Static_TR: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_lasergun'), Loader.frames[AnimationType.turret5_1_30001], 0.9, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };

    static Static_TL: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_lasergun'), Loader.frames[AnimationType.turret5_1_40001], 0.9, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };

    static BL: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_lasergun'), Loader.frames[AnimationType.turret5_1_1], 0.9, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };

    static BR: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_lasergun'), Loader.frames[AnimationType.turret5_1_2], 0.9, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };

    static TR: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_lasergun'), Loader.frames[AnimationType.turret5_1_3], 0.9, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };

    static TL: ITurretState = {
        'sprite': () => new AnimatedSprite(Loader.getImageMap('turret_lasergun'), Loader.frames[AnimationType.turret5_1_4], 0.9, 2),
        'shootPosSpec': new Vector(0, 0),
        'shouldDrawArc': false
    };
}

export class Lasergun extends Turret {
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


    shoot(game: Game) {
        if (game.creeps.length) {
            const target: Creep | undefined = game.creeps.find(creep => Utils.inRadius(this.pos, creep.sprite.currentPos, this.radius));
            if (target) {
                game.run.push(new LaserMissile(
                    new AnimatedSprite(Loader.getImageMap('splash'), Loader.frames[AnimationType.splash1], 3.2, 2),
                    target.sprite.currentPos, 30));
            }
        }
    }

    getShootAroundState(): TurretState {
        return new TurretState(DefLasergun.BR);
    }

    getStaticState(): TurretState {
        // const center = new Vector(this.game.cx.canvas.width / 2, this.game.cx.canvas.height / 2);
        // if (this.pos.x < center.x && this.pos.y > center.y) {
        //     return new TurretState(DefLasergun.Static_BL);
        // } else if (this.pos.x < center.x && this.pos.y < center.y) {
        //     return new TurretState(DefLasergun.Static_TL);
        // } else if (this.pos.x > center.x && this.pos.y < center.y) {
        //     return new TurretState(DefLasergun.Static_TR);
        // } else if (this.pos.x > center.x && this.pos.y > center.y) {
        //     return new TurretState(DefLasergun.Static_BR);
        // }
        return new TurretState(DefLasergun.Static_BL);
    }
}