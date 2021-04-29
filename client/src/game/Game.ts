/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* правило отключено потому что мы уверены в наличии элементов управления (интерфейс) */

import { Creep } from "./creep/Creep";
import { Utils, Vector } from "./Utils";
import { AnimationType, Loader } from "./model/Loader";
import { Turret } from "./turret/Turret";
import { Missile } from "./missile/Missile";
import { Drawable } from "./model/Drawable";
import { ExplodeMissile } from "./missile/ExplodeMissile";
import { AnimatedSprite } from "./model/AnimatedSprite";
import { GameStat } from "./PanelController";

import { GAME_LOSE, GAME_WAVE_END, GAME_WIN } from "../constants";
import { GameLevel } from "./GameLevel";

export class Game {
  ticks = 0;
  _ticks = 0;
  _tick = 0;
  ticker = -1;
  paused = false;
  fast = false;
  fpsListener: (fps: number) => void;
  gameStatListener: (gameStat: GameStat) => void;
  scoreCallback: (score: number, result: string) => void;
  gameStat: GameStat = {
    cash: 60,
    lives: 10,
    wave: 0,
  };
  _wave = 0;
  creeps: Creep[] = [];
  hpinc = 1;
  kills = 0;
  selected: Turret | null;
  turrets: Turret[] = [];

  level: GameLevel = new GameLevel();

  run: Drawable[] = [];

  constructor(public cx: CanvasRenderingContext2D) {}

  tick() {
    this.cx.clearRect(0, 0, this.cx.canvas.width, this.cx.canvas.height);
    this.cx.drawImage(
      this.level.background(),
      0,
      0,
      this.cx.canvas.width,
      this.cx.canvas.height
    );
    this.level.turretPlaces.forEach((place) => place.draw(this.cx));
    if (this.ticks - this._ticks === 60) {
      const fps = Math.round(60000 / (Date.now() - this._tick));
      this._tick = Date.now();
      this.fpsListener(fps);
      this._ticks = this.ticks;
    }

    if (this._wave + 1200 === this.ticks) {
      this.gameStat.wave++;
      this.hpinc *= { 2: 1.2, 5: 1.2, 10: 1.2 }[this.gameStat.wave] || 1;

      this.level.updateWave(this);

      this._wave = this.ticks;
    }

    this.turrets.forEach((turret) => {
      if (turret.lastShot + turret.rate <= this.ticks) {
        turret.shoot(this);
        turret.lastShot = this.ticks;
      }
      turret.draw(this.cx);
    });

    this.creeps.forEach((creep, i, a) => {
      const waypoint = this.level.map[creep.wave % this.level.map.length][
        creep.nextpoint
      ];
      if (!waypoint) {
        this.gameStat.lives--;
        a.splice(i, 1);
      } else if (creep.hp <= 0) {
        this.run.push(
          new ExplodeMissile(
            new AnimatedSprite(
              Loader.getImageMap("explosion1"),
              Loader.frames[AnimationType.EXPLOSION],
              0.8,
              1
            ),
            Utils.add(creep.sprite.currentPos, new Vector(0, -10)),
            40
          )
        );
        a.splice(i, 1);
        this.gameStat.cash += creep.price;
      } else if (
        Utils.move(
          creep,
          new Vector(
            waypoint.x - 7 + creep.offset.x,
            waypoint.y - 7 + creep.offset.y
          ),
          creep.speed
        )
      ) {
        creep.nextpoint++;
      }
      creep.draw(this.cx);
    });

    if (this.selected) {
      this.selected.draw(this.cx);
    }

    this.run.forEach((items, i, a) => {
      items.draw(this.cx);
      if (items instanceof Missile) {
        if (--items.until === 0) {
          a.splice(i, 1);
        }
      }
    });
    this.ticks++;
    if (this.gameStat.lives <= 0) {
      this.end();
    }
    if (this.gameStat.wave === GAME_WAVE_END) {
      this.end();
    }
    this.gameStatListener(this.gameStat);
  }

  start() {
    this._ticks = this.ticks;
    this._tick = Date.now();
    this.paused = false;
    this.ticker = window.setInterval(
      this.tick.bind(this),
      1000 / (this.fast ? 180 : 60)
    );
    this.tick();
  }

  pause() {
    this.paused = true;
    window.clearInterval(this.ticker);
  }

  end() {
    this.pause();

    const result = this.gameStat.lives > 0;

    // времменно убрал что бы легко обновлять значения в таблице
    // const score = Math.floor(
    //   (Math.abs(this.gameStat.cash - 60) * 1000000) / this.ticks
    // );

    const score = Date.now() - 1618928700000;

    this.scoreCallback(score, result ? GAME_WIN : GAME_LOSE);
  }
}
