import { Turret } from "./Turret";
import { ITurretState, TurretState } from "./TurretState";
import { AnimatedSprite } from "../model/AnimatedSprite";
import { AnimationType, Loader } from "../model/Loader";
import { Utils, Vector } from "../Utils";
import { Creep } from "../creep/Creep";
import { ExplodeMissile } from "../missile/ExplodeMissile";
import { Game } from "../Game";

export class DefLasergun {
  static STATIC_AROUND: ITurretState = {
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

  static STATIC_AROUND_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun2"),
        Loader.frames[AnimationType.LASERGUN_BL_STATIC_2],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };

  static STATIC_AROUND_ARC: ITurretState = {
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

  static STATIC_BL: ITurretState = {
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

  static STATIC_BL_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun2"),
        Loader.frames[AnimationType.LASERGUN_BL_STATIC_2],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };

  static STATIC_BR: ITurretState = {
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

  static STATIC_BR_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun2"),
        Loader.frames[AnimationType.LASERGUN_BR_STATIC_2],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };

  static STATIC_TR: ITurretState = {
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

  static STATIC_TR_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun2"),
        Loader.frames[AnimationType.LASERGUN_TR_STATIC_2],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };

  static STATIC_TL: ITurretState = {
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

  static STATIC_TL_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun2"),
        Loader.frames[AnimationType.LASERGUN_TL_STATIC_2],
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

  static BL_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun2"),
        Loader.frames[AnimationType.LASERGUN_BL_2],
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

  static BR_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun2"),
        Loader.frames[AnimationType.LASERGUN_BR_2],
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

  static TR_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun2"),
        Loader.frames[AnimationType.LASERGUN_TR_2],
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

  static TL_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_lasergun2"),
        Loader.frames[AnimationType.LASERGUN_TL_2],
        0.9,
        2
      ),
    shootPosSpec: new Vector(0, 30),
    shouldDrawArc: false,
  };
}

export class Lasergun extends Turret {
  price = 25;
  damage = 3;

  draw(cx: CanvasRenderingContext2D) {
    if (this.currState.shouldDrawArc()) {
      this.drawArc(cx);
    }

    this.currState.getSprite().draw(cx);
    this.onUpdated(cx);
  }

  shoot(game: Game) {
    if (game.creeps.length) {
      const target: Creep | undefined = game.creeps.find((creep) =>
        Utils.inRadius(this.pos, creep.sprite.currentPos, this.radius)
      );
      if (target) {
        if (this.pos.y < target.sprite.currentPos.y) {
          if (target.sprite.currentPos.x < this.pos.x) {
            this.setState(
              new TurretState(
                this.level === 0 ? DefLasergun.BL : DefLasergun.BL_2
              )
            );
          } else {
            this.setState(
              new TurretState(
                this.level === 0 ? DefLasergun.BR : DefLasergun.BR_2
              )
            );
          }
        } else {
          if (target.sprite.currentPos.x < this.pos.x) {
            this.setState(
              new TurretState(
                this.level === 0 ? DefLasergun.TL : DefLasergun.TL_2
              )
            );
          } else {
            this.setState(
              new TurretState(
                this.level === 0 ? DefLasergun.TR : DefLasergun.TR_2
              )
            );
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
        target.hp -= this.level === 0 ? this.damage : 2 * this.damage;
      } else {
        this.setState(this.getStaticState(false));
      }
    } else {
      this.setState(this.getStaticState(false));
    }
  }

  getStaticState(arc: boolean): TurretState {
    if (arc) {
      return new TurretState(DefLasergun.STATIC_AROUND_ARC);
    } else {
      return new TurretState(
        this.level === 0
          ? DefLasergun.STATIC_AROUND
          : DefLasergun.STATIC_AROUND_2
      );
    }
  }
}
