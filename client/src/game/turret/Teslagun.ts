import { Turret } from "./Turret";
import { AnimatedSprite } from "../model/AnimatedSprite";
import { AnimationType, Loader } from "../model/Loader";
import { Utils, Vector } from "../Utils";
import { Creep } from "../creep/Creep";
import { LightingMissile } from "../missile/LightingMissile";
import { Game } from "../Game";
import { ITurretState, TurretState } from "./TurretState";

export class DefTeslagun {
  static STATIC_ARC: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_teslagun"),
        Loader.frames[AnimationType.TESLAGUN_STATIC],
        1.1,
        2
      ),
    shootPosSpec: new Vector(0, 25),
    shouldDrawArc: true,
  };

  static STATIC: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_teslagun"),
        Loader.frames[AnimationType.TESLAGUN_STATIC],
        1.1,
        2
      ),
    shootPosSpec: new Vector(0, 25),
    shouldDrawArc: false,
  };

  static AROUND: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_teslagun"),
        Loader.frames[AnimationType.TESLAGUN_AROUND],
        1.1,
        2
      ),
    shootPosSpec: new Vector(0, 25),
    shouldDrawArc: false,
  };
}

export class Teslagun extends Turret {
  price = 15;
  damage = 2;

  shoot(game: Game) {
    if (game.creeps.length) {
      const target: Creep | undefined = game.creeps.find((creep) =>
        Utils.inRadius(this.pos, creep.sprite.currentPos, this.radius)
      );
      if (target) {
        this.setState(new TurretState(DefTeslagun.AROUND));
        game.run.push(
          new LightingMissile(
            Utils.add(this.pos, new Vector(0, -30)),
            Utils.add(target.sprite.currentPos, new Vector(0, -30)),
            9
          )
        );
        target.hp -= this.damage;
      } else {
        this.setState(new TurretState(DefTeslagun.STATIC));
      }
    } else {
      this.setState(new TurretState(DefTeslagun.STATIC));
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
      return new TurretState(DefTeslagun.STATIC_ARC);
    } else {
      return new TurretState(DefTeslagun.STATIC);
    }
  }
}
