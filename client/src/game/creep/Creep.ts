import { AnimatedSprite } from "../model/AnimatedSprite";
import { Vector } from "../Utils";
import { Drawable } from "../model/Drawable";

export abstract class Creep implements Drawable {
  slowfor = 0;
  nextpoint = 0;
  burning = false;
  price = 15;
  hp = 20;
  hpBasis = 30;
  fullHp = 20;
  offset: Vector;
  speed = 1;
  sprite: AnimatedSprite;
  wave: number;

  constructor(offset: Vector, wave: number, hpinc: number) {
    this.offset = offset;
    this.wave = wave;
    this.hp *= hpinc;
    this.fullHp = this.hp;
  }

  public setPos(pos: Vector) {
    this.sprite.currentPos = pos;
  }

  draw(cx: CanvasRenderingContext2D) {
    this.sprite.draw(cx);
    const frame = this.sprite.currentFrames[0];
    const srcX =
      this.sprite.currentPos.x - (frame.frame.w / 2) * this.sprite.scale;
    const srcY =
      this.sprite.currentPos.y - frame.frame.h * this.sprite.scale - 4;

    cx.save();
    cx.beginPath();
    cx.strokeStyle = "lime";
    cx.lineWidth = 4;
    cx.moveTo(srcX, srcY);
    const dx = (this.hp * this.hpBasis) / this.fullHp;
    cx.lineTo(srcX + dx, srcY);
    cx.stroke();
    cx.closePath();
    cx.restore();
  }
}
