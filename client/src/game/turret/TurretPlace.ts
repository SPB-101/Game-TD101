import { Drawable } from "../model/Drawable";
import { Vector } from "../Utils";

export class TurretPlace implements Drawable {
  private scaleFactor = new Vector(1.5, 1);
  _active = true;
  _pos: Vector;

  get pos() {
    return new Vector(
      this._pos.x * this.scaleFactor.x,
      this._pos.y * this.scaleFactor.y
    );
  }

  constructor(pos: Vector, active: boolean) {
    this._pos = new Vector(
      pos.x / this.scaleFactor.x,
      pos.y / this.scaleFactor.y
    );
    this._active = active;
  }

  set active(value: boolean) {
    this._active = value;
  }

  get active(): boolean {
    return this._active;
  }

  draw(cx: CanvasRenderingContext2D) {
    cx.save();
    cx.beginPath();
    cx.scale(1.5, 1);
    cx.strokeStyle = "#C0C0C0";
    cx.fillStyle = "#C0C0C0";
    cx.arc(this._pos.x, this._pos.y, 25, 0, 2 * Math.PI);
    if (this.active) {
      cx.fill();
    } else {
      cx.stroke();
    }
    cx.restore();
  }
}
