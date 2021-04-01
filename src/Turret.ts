import {AnimatedSprite} from "./AnimatedSprite";
import {AnimationType, Loader} from "./Loader";
import {Creep} from "./Creep";
import {Utils, Vector} from "./Utils";
import {Game} from "./Game";
import {LaserMissile} from "./missile/LaserMissile";
import {LightingMissile} from "./missile/LightingMissile";

export abstract class TurretState {

    abstract getSprite(): AnimatedSprite

    abstract specifyPos(curr: Vector): Vector

    abstract shouldDrawArc(): boolean
}


export class TurretShootAround extends TurretState {

    _sprite = new AnimatedSprite(Loader.getImageMap('turret_teslagun'), Loader.frames[AnimationType.turret3_1], 1.1, 2);

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

export class TurretStatic extends TurretState {

    _sprite = new AnimatedSprite(Loader.getImageMap('turret_teslagun'), Loader.frames[AnimationType.turret3_10001], 1.1, 2);

    getSprite(): AnimatedSprite {
        return this._sprite;
    }

    specifyPos(curr: Vector): Vector {
        this._sprite.currentPos = new Vector(curr.x, curr.y+25);
        return this._sprite.currentPos;
    }

    shouldDrawArc(): boolean {
        return true;
    }
}

export class Turret {

    name: string;
    rate: number = 30;
    lastShot: number = 0;
    radius: number = 120;
    private _pos: Vector;
    currState: TurretState;

    set pos(value: Vector) {
        this._pos = value;
        this.currState.specifyPos(value);
    }

    get pos(): Vector {
        return this._pos;
    }

    constructor(name: string) {
        this.name = name;
    }

    public setState(state: TurretState) {
        if(state === this.currState) {
            return;
        }
        this.currState = state;
    }

    shoot(game: Game) {
        if (game.creeps.length) {
            const target: Creep = game.creeps[Utils.rand(game.creeps.length - 1)];
            game.run.push(new LightingMissile(this._pos, target.sprite.currentPos, 9));
        }
    }

    draw(cx: CanvasRenderingContext2D) {
        if(this.currState.shouldDrawArc()) {
            cx.beginPath();
            cx.fillStyle = "rgba(255, 255, 255, .3)";
            cx.arc(this._pos.x, this._pos.y, this.radius, 0, Math.PI * 2);
            cx.fill();
            cx.closePath();
        }

        this.currState.getSprite().draw(cx);
    }

}
