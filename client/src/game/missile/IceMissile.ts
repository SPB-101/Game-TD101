import { Missile } from "./Missile";
import { Utils } from "../Utils";

export class IceMissile extends Missile {
  draw(cx: CanvasRenderingContext2D) {
    cx.save();
    const segments = 15;
    const len = Utils.len(this.src, this.dst);
    const l = len / segments;
    let curr = this.src;
    for (let i = 1; i <= segments; i++) {
      const d = Utils.mult(this.src, this.dst, (1 / segments) * i);
      if (i != segments) {
        d.x += l * Math.random();
        d.y += l * Math.random();
      }
      if (i >= 2) {
        cx.beginPath();
        cx.strokeStyle = "#f0f4fd";
        cx.lineWidth = 5;
        cx.moveTo(curr.x, curr.y);
        cx.lineTo(d.x, d.y);
        cx.stroke();
      }
      curr = d;
    }
    cx.restore();
  }
}
