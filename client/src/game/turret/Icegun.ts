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

  static STATIC_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_icegun2"),
        Loader.frames[AnimationType.ICEGUN_STATIC_2],
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

  static AROUND_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_icegun2"),
        Loader.frames[AnimationType.ICEGUN_AROUND_2],
        1,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };
}

export class Icegun extends Turret {
  damage = 5;
  price = 60;
  shoot(game: Game) {
    if (game.creeps.length) {
      const target: Creep[] | undefined = game.creeps.filter((creep) =>
        Utils.inRadius(this.pos, creep.sprite.currentPos, this.radius)
      );
      if (target && target.length) {
        this.setState(
          new TurretState(
            this.level === 0 ? DefIcegun.AROUND : DefIcegun.AROUND_2
          )
        );
        target.slice(0, this.level + 1).forEach((targ) => {
          game.run.push(
            new IceMissile(
              Utils.add(this.pos, new Vector(0, -30)),
              Utils.add(targ.sprite.currentPos, new Vector(0, -30)),
              9
            )
          );
          targ.hp -= this.damage;
        });
      } else {
        this.setState(
          new TurretState(
            this.level === 0 ? DefIcegun.STATIC : DefIcegun.STATIC_2
          )
        );
      }
    } else {
      this.setState(
        new TurretState(
          this.level === 0 ? DefIcegun.STATIC : DefIcegun.STATIC_2
        )
      );
    }
  }

  draw(cx: CanvasRenderingContext2D) {
    if (this.currState.shouldDrawArc()) {
      this.drawArc(cx);
    }
    this.currState.getSprite().draw(cx);
    this.onUpdated(cx);
  }

  getStaticState(arc: boolean): TurretState {
    if (arc) {
      return new TurretState(DefIcegun.STATIC_ARC);
    } else {
      return new TurretState(
        this.level === 0 ? DefIcegun.STATIC : DefIcegun.STATIC_2
      );
    }
  }
}
