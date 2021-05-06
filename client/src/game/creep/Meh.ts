import { Creep } from "./Creep";
import { Vector } from "../Utils";
import { AnimatedSprite } from "../model/AnimatedSprite";
import { AnimationType, Loader } from "../model/Loader";

export class Meh extends Creep {
  constructor(offset: Vector, wave: number, hpinc: number) {
    super(offset, wave, hpinc);

    this.sprite = new AnimatedSprite(
      Loader.getImageMap("meh1"),
      Loader.frames[AnimationType.MEH_GO],
      0.5
    );
  }
}
