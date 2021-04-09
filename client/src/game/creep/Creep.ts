import { AnimatedSprite } from "../model/AnimatedSprite";
import { Vector } from "../Utils";
import { AnimationType, Loader } from "../model/Loader";
import { Drawable } from "../model/Drawable";

export class Creep implements Drawable {
  slowfor: number = 0;
  nextpoint: number = 0;
  burning: boolean = false;
  cash: number = 0;
  hp: number = 30;
  offset: Vector;
  speed: number = 1;
  sprite: AnimatedSprite;
  wave: number;

  constructor(offset: Vector, wave: number) {
    this.offset = offset;
    this.wave = wave;
    this.sprite = new AnimatedSprite(
      Loader.getImageMap("meh1"),
      Loader.frames[AnimationType.MEH_GO],
      0.5
    );
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
    cx.lineTo(srcX + this.hp, srcY);
    cx.stroke();
    cx.closePath();
    cx.restore();
  }
}
