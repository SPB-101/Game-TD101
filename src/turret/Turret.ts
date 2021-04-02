import {Vector} from "../Utils";
import {Game} from "../Game";
import {ITurretState, TurretState} from "./TurretState";

export abstract class Turret {

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

    get pos() {
        return this._pos;
    }

    constructor(name: string) {
        this.name = name;
    }

    public getState(state: ITurretState): TurretState {
        return new TurretState(state);
    }

    abstract getStaticState(): TurretState

    abstract getShootAroundState(): TurretState

    public setState(state: TurretState, pos: Vector = this.pos) {
        this.currState = state;
        this.pos = pos;
    }

    abstract shoot(game: Game)

    abstract draw(cx: CanvasRenderingContext2D)

}
