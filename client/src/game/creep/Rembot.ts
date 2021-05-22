import { Creep } from "./Creep";
import { Vector } from "../Utils";
import { AnimatedSprite } from "../model/AnimatedSprite";
import { AnimationType, Loader } from "../model/Loader";

export class Rembot extends Creep {
  constructor(offset: Vector, wave: number, hpinc: number) {
    super(offset, wave, hpinc);

    this.sprite = new AnimatedSprite(
      Loader.getImageMap("rembot"),
      Loader.frames[AnimationType.REMBOT_GO],
      0.9
    );
    this.sprite.shouldFlip = true;
    this.hpBasis = 50;
    this.speed = 1.2;
  }
}
