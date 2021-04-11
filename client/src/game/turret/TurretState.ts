import { AnimatedSprite } from "../model/AnimatedSprite";
import { Vector } from "../Utils";

export interface ITurretState {
  sprite: () => AnimatedSprite;
  shootPosSpec: Vector;
  shouldDrawArc: boolean;
}

export class TurretState {
  sprite: AnimatedSprite;
  shootPosSpec: Vector;
  shouldDraw: boolean;

  constructor(stateConf: ITurretState) {
    this.sprite = stateConf.sprite();
    this.shootPosSpec = stateConf.shootPosSpec;
    this.shouldDraw = stateConf.shouldDrawArc;
  }

  getSprite(): AnimatedSprite {
    return this.sprite;
  }

  specifyPos(curr: Vector) {
    this.sprite.currentPos = new Vector(
      curr.x + this.shootPosSpec.x,
      curr.y + this.shootPosSpec.y
    );
  }

  shouldDrawArc(): boolean {
    return this.shouldDraw;
  }
}
