import { Creep } from "./Creep";
import { Vector } from "../Utils";
import { AnimatedSprite } from "../model/AnimatedSprite";
import { AnimationType, Loader } from "../model/Loader";

export class Cruiser extends Creep {
  constructor(offset: Vector, wave: number, hpinc: number) {
    super(offset, wave, hpinc);

    this.sprite = new AnimatedSprite(
      Loader.getImageMap("cruiser"),
      Loader.frames[AnimationType.CRUISER_GO],
      1
    );
    this.sprite.slowFrames = 4;
    this.sailing = true;
    this.hpBasis = 80;
    this.speed = 0.8;
  }
}
