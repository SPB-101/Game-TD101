import { Turret } from "./Turret";
import { AnimatedSprite } from "../model/AnimatedSprite";
import { AnimationType, Loader } from "../model/Loader";
import { Utils, Vector } from "../Utils";
import { Creep } from "../creep/Creep";
import { Game } from "../Game";
import { ITurretState, TurretState } from "./TurretState";
import { IceMissile } from "../missile/IceMissile";

export class DefIcegun {
  static STATIC_ARC: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_icegun"),
        Loader.frames[AnimationType.ICEGUN_STATIC],
        1,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: true,
  };

  static STATIC: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_icegun"),
        Loader.frames[AnimationType.ICEGUN_STATIC],
        1,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };

  static AROUND: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_icegun"),
        Loader.frames[AnimationType.ICEGUN_AROUND],
        1,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };
}

export class Icegun extends Turret {
  damage = 5;

  shoot(game: Game) {
    if (game.creeps.length) {
      const target: Creep | undefined = game.creeps.find((creep) =>
        Utils.inRadius(this.pos, creep.sprite.currentPos, this.radius)
      );
      if (target) {
        this.setState(new TurretState(DefIcegun.AROUND));
        game.run.push(
          new IceMissile(
            Utils.add(this.pos, new Vector(0, -30)),
            Utils.add(target.sprite.currentPos, new Vector(0, -30)),
            9
          )
        );
        target.hp -= this.damage;
      } else {
        this.setState(new TurretState(DefIcegun.STATIC));
      }
    } else {
      this.setState(new TurretState(DefIcegun.STATIC));
    }
  }

  draw(cx: CanvasRenderingContext2D) {
    if (this.currState.shouldDrawArc()) {
      this.drawArc(cx);
    }
    this.currState.getSprite().draw(cx);
  }

  getStaticState(arc: boolean): TurretState {
    if (arc) {
      return new TurretState(DefIcegun.STATIC_ARC);
    } else {
      return new TurretState(DefIcegun.STATIC);
    }
  }
}
