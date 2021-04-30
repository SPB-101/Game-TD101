import { Turret } from "./Turret";
import { ITurretState, TurretState } from "./TurretState";
import { AnimatedSprite } from "../model/AnimatedSprite";
import { AnimationType, Loader } from "../model/Loader";
import { Utils, Vector } from "../Utils";
import { Game } from "../Game";
import { Creep } from "../creep/Creep";
import { ExplodeMissile } from "../missile/ExplodeMissile";

export class DefRocketgun {
  static STATIC_AROUND: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_rocketgun11"),
        Loader.frames[AnimationType.ROCKETGUN_BL_STATIC],
        1.1,
        2
      ),
    shootPosSpec: new Vector(0, 25),
    shouldDrawArc: false,
  };

  static STATIC_AROUND_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_rocketgun21"),
        Loader.frames[AnimationType.ROCKETGUN_BL_STATIC_2],
        1.1,
        2
      ),
    shootPosSpec: new Vector(0, 25),
    shouldDrawArc: false,
  };

  static STATIC_AROUND_ARC: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_rocketgun11"),
        Loader.frames[AnimationType.ROCKETGUN_BL_STATIC],
        1.1,
        2
      ),
    shootPosSpec: new Vector(0, 25),
    shouldDrawArc: true,
  };

  static BL: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_rocketgun11"),
        Loader.frames[AnimationType.ROCKETGUN_BL],
        1.1,
        2
      ),
    shootPosSpec: new Vector(0, 25),
    shouldDrawArc: false,
  };

  static BL_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_rocketgun21"),
        Loader.frames[AnimationType.ROCKETGUN_BL_2],
        1.1,
        2
      ),
    shootPosSpec: new Vector(0, 25),
    shouldDrawArc: false,
  };

  static BR: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_rocketgun12"),
        Loader.frames[AnimationType.ROCKETGUN_BR],
        1.1,
        2
      ),
    shootPosSpec: new Vector(0, 25),
    shouldDrawArc: false,
  };

  static BR_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_rocketgun22"),
        Loader.frames[AnimationType.ROCKETGUN_BR_2],
        1.1,
        2
      ),
    shootPosSpec: new Vector(0, 25),
    shouldDrawArc: false,
  };

  static TR: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_rocketgun13"),
        Loader.frames[AnimationType.ROCKETGUN_TR],
        1.1,
        2
      ),
    shootPosSpec: new Vector(0, 25),
    shouldDrawArc: false,
  };

  static TR_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_rocketgun23"),
        Loader.frames[AnimationType.ROCKETGUN_TR_2],
        1.1,
        2
      ),
    shootPosSpec: new Vector(0, 25),
    shouldDrawArc: false,
  };

  static TL: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_rocketgun14"),
        Loader.frames[AnimationType.ROCKETGUN_TL],
        1.1,
        2
      ),
    shootPosSpec: new Vector(0, 25),
    shouldDrawArc: false,
  };

  static TL_2: ITurretState = {
    sprite: () =>
      new AnimatedSprite(
        Loader.getImageMap("turret_rocketgun24"),
        Loader.frames[AnimationType.ROCKETGUN_TL_2],
        1.1,
        2
      ),
    shootPosSpec: new Vector(0, 25),
    shouldDrawArc: false,
  };
}

export class RocketgunShootAround extends TurretState {
  _sprite = new AnimatedSprite(
    Loader.getImageMap("turret_rocketgun"),
    Loader.frames[AnimationType.ROCKETGUN_BL],
    1.1,
    2
  );

  getSprite(): AnimatedSprite {
    return this._sprite;
  }

  specifyPos(curr: Vector): Vector {
    this._sprite.currentPos = curr;
    return curr;
  }

  shouldDrawArc() {
    return false;
  }
}

export class Rocketgun extends Turret {
  price = 40;
  damage = 4;

  draw(cx: CanvasRenderingContext2D) {
    if (this.currState.shouldDrawArc()) {
      cx.beginPath();
      cx.fillStyle = "rgba(255, 255, 255, .3)";
      cx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
      cx.fill();
      cx.closePath();
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
                this.level === 0 ? DefRocketgun.BL : DefRocketgun.BL_2
              )
            );
          } else {
            this.setState(
              new TurretState(
                this.level === 0 ? DefRocketgun.BR : DefRocketgun.BR_2
              )
            );
          }
        } else {
          if (target.sprite.currentPos.x < this.pos.x) {
            this.setState(
              new TurretState(
                this.level === 0 ? DefRocketgun.TL : DefRocketgun.TL_2
              )
            );
          } else {
            this.setState(
              new TurretState(
                this.level === 0 ? DefRocketgun.TR : DefRocketgun.TR_2
              )
            );
          }
        }
        game.run.push(
          new ExplodeMissile(
            new AnimatedSprite(
              Loader.getImageMap("explosion1"),
              Loader.frames[AnimationType.EXPLOSION],
              0.5,
              1
            ),
            Utils.add(target.sprite.currentPos, new Vector(0, -10)),
            40
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
      return new TurretState(DefRocketgun.STATIC_AROUND_ARC);
    } else {
      return new TurretState(
        this.level === 0
          ? DefRocketgun.STATIC_AROUND
          : DefRocketgun.STATIC_AROUND_2
      );
    }
  }
}
