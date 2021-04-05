import { Turret } from "./Turret";
import { ITurretState, TurretState } from "./TurretState";
import { AnimatedSprite } from "../model/AnimatedSprite";
import { AnimationType, Loader } from "../model/Loader";
import { Utils, Vector } from "../Utils";
import { Game } from "../Game";
import { Creep } from "../creep/Creep";
import { ExplodeMissile } from "../missile/ExplodeMissile";

export class DefRocketgun {
  static Static_Around: ITurretState = {
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

  static Static_Around_Arc: ITurretState = {
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
  damage: number = 4;

  draw(cx: CanvasRenderingContext2D) {
    if (this.currState.shouldDrawArc()) {
      cx.beginPath();
      cx.fillStyle = "rgba(255, 255, 255, .3)";
      cx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
      cx.fill();
      cx.closePath();
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
            this.setState(new TurretState(DefRocketgun.BL));
          } else {
            this.setState(new TurretState(DefRocketgun.BR));
          }
        } else {
          if (target.sprite.currentPos.x < this.pos.x) {
            this.setState(new TurretState(DefRocketgun.TL));
          } else {
            this.setState(new TurretState(DefRocketgun.TR));
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
      return new TurretState(DefRocketgun.Static_Around_Arc);
    } else {
      return new TurretState(DefRocketgun.Static_Around);
    }
  }
}
