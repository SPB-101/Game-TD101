import {Vector} from "../Utils";
import {Game} from "../Game";
import {ITurretState, TurretState} from "./TurretState";

export abstract class Turret {

    name: string;
    rate: number = 30;
    lastShot: number = 0;
    radius: number = 120;
    _pos: Vector;
    currState: TurretState;

    constructor(name: string) {
        this.name = name;
    }

    set pos(value: Vector) {
        this._pos = value;
        this.currState.specifyPos(value);
    }

    get pos(): Vector {
        return this._pos;
    }

    public getState(state: ITurretState): TurretState {
        return new TurretState(state);
    }

    abstract getStaticState(): TurretState

    abstract getShootAroundState(): TurretState

    public setState(state: TurretState) {
        if(state === this.currState) {
            return;
        }
        this.currState = state;
    }

    abstract shoot(game: Game)

    abstract draw(cx: CanvasRenderingContext2D)

}
