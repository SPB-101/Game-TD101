import { Creep } from "./Creep";
import { Vector } from "../Utils";
import { AnimatedSprite } from "../model/AnimatedSprite";
import { AnimationType, Loader } from "../model/Loader";

export class Airship extends Creep {
  constructor(offset: Vector, wave: number, hpinc: number) {
    super(offset, wave, hpinc);

    this.sprite = new AnimatedSprite(
      Loader.getImageMap("airship"),
      Loader.frames[AnimationType.AIRSHIP_GO],
      0.7
    );
    this.sprite.shouldFlip = true;
    this.hpBasis = 90;
  }
}
