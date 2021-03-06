import { Vector } from "../Utils";
import { Game } from "../Game";
import { ITurretState, TurretState } from "./TurretState";
import { Drawable } from "../model/Drawable";
import { Loader } from "../model/Loader";

export abstract class Turret implements Drawable {
  price: number;
  name: string;
  rate = 30;
  lastShot = 0;
  radius = 140;
  private _pos: Vector;
  currState: TurretState;
  shouldBeUpdated = false;
  level = 0;

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

  protected drawArc(cx: CanvasRenderingContext2D) {
    cx.beginPath();
    cx.fillStyle = "rgba(255, 255, 255, .3)";
    cx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    cx.fill();
    cx.closePath();
  }

  protected onUpdated(cx: CanvasRenderingContext2D) {
    if (this.shouldBeUpdated) {
      cx.drawImage(
        Loader.getImageMap("turret_upgrade"),
        this.pos.x,
        this.pos.y
      );
    }
  }

  abstract getStaticState(arc: boolean): TurretState;

  public setState(state: TurretState, pos: Vector = this.pos) {
    this.currState = state;
    this.pos = pos;
  }

  abstract shoot(game: Game): void;

  abstract draw(cx: CanvasRenderingContext2D): void;
}
