import { Missile } from "./Missile";
import { Vector } from "../Utils";
import { AnimatedSprite } from "../model/AnimatedSprite";

export class ExplodeMissile extends Missile {
  constructor(private sprite: AnimatedSprite, dst: Vector, until: number) {
    super(new Vector(-1, -1), dst, until);
    this.sprite.currentPos = dst;
  }

  draw(cx: CanvasRenderingContext2D) {
    this.sprite.draw(cx);
  }
}
