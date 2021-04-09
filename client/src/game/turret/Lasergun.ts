import { Turret } from "./Turret";
import { ITurretState, TurretState } from "./TurretState";
import { AnimatedSprite } from "../model/AnimatedSprite";
import { AnimationType, Loader } from "../model/Loader";
import { Utils, Vector } from "../Utils";
import { Creep } from "../creep/Creep";
import { ExplodeMissile } from "../missile/ExplodeMissile";
import { Game } from "../Game";

export class DefLasergun {
  static Static_Around: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun"),
        Loader.frames[AnimationType.LASERGUN_BL_STATIC],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };

  static Static_Around_Arc: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun"),
        Loader.frames[AnimationType.LASERGUN_BL_STATIC],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: true,
  };

  static Static_BL: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun"),
        Loader.frames[AnimationType.LASERGUN_BL_STATIC],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };

  static Static_BR: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun"),
        Loader.frames[AnimationType.LASERGUN_BR_STATIC],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };

  static Static_TR: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun"),
        Loader.frames[AnimationType.LASERGUN_TR_STATIC],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };

  static Static_TL: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun"),
        Loader.frames[AnimationType.LASERGUN_TL_STATIC],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };

  static BL: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun"),
        Loader.frames[AnimationType.LASERGUN_BL],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };

  static BR: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun"),
        Loader.frames[AnimationType.LASERGUN_BR],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };

  static TR: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun"),
        Loader.frames[AnimationType.LASERGUN_TR],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };

  static TL: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun"),
        Loader.frames[AnimationType.LASERGUN_TL],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };
}

export class Lasergun extends Turret {
  damage: number = 3;

  draw(cx: CanvasRenderingContext2D) {
    if (this.currState.shouldDrawArc()) {
      this.drawArc(cx);
    }

    this.currState.getSprite().draw(cx);
  }

  shoot(game: Game) {
    if (game.creeps.length) {
      const target: Creep | undefined = game.creeps.find((creep) =>
        Utils.inRadius(this.pos, creep.sprite.currentPos, this.radius)
      );
      if (target) {
        if (this.pos.y < target.sprite.currentPos.y) {
          if (target.sprite.currentPos.x < this.pos.x) {
            this.setState(new TurretState(DefLasergun.BL));
          } else {
            this.setState(new TurretState(DefLasergun.BR));
          }
        } else {
          if (target.sprite.currentPos.x < this.pos.x) {
            this.setState(new TurretState(DefLasergun.TL));
          } else {
            this.setState(new TurretState(DefLasergun.TR));
          }
        }
        game.run.push(
          new ExplodeMissile(
            new AnimatedSprite(
              Loader.getImageMap("splash"),
              Loader.frames[AnimationType.SPLASH],
              3.2,
              2
            ),
            target.sprite.currentPos,
            30
          )
        );
        target.hp -= this.damage;
      } else {
        this.setState(this.getStaticState(false));
      }
    } else {
      this.setState(this.getStaticState(false));
    }
  }

  getStaticState(arc: boolean): TurretState {
    if (arc) {
      return new TurretState(DefLasergun.Static_Around_Arc);
    } else {
      return new TurretState(DefLasergun.Static_Around);
    }
  }
}
