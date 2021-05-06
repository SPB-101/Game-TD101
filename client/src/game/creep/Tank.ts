import { Creep } from "./Creep";
import { Vector } from "../Utils";
import { AnimatedSprite } from "../model/AnimatedSprite";
import { AnimationType, Loader } from "../model/Loader";

export class Tank extends Creep {
  constructor(offset: Vector, wave: number, hpinc: number) {
    super(offset, wave, hpinc);

    this.sprite = new AnimatedSprite(
      Loader.getImageMap("tank_left"),
      Loader.frames[AnimationType.TANK_GO],
      0.9
    );
    this.hpBasis = 45;
  }
}
