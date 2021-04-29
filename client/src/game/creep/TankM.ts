import { Creep } from "./Creep";
import { Vector } from "../Utils";
import { AnimatedSprite } from "../model/AnimatedSprite";
import { AnimationType, Loader } from "../model/Loader";

export class TankM extends Creep {
  constructor(offset: Vector, wave: number, hpinc: number) {
    super(offset, wave, hpinc);

    this.sprite = new AnimatedSprite(
      Loader.getImageMap("tank_m"),
      Loader.frames[AnimationType.TANK_M_GO],
      0.8
    );
    this.sprite.shouldFlip = true;
    this.hpBasis = 55;
  }
}
