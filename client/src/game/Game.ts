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

import { GAME_LOSE, GAME_WAVE_END, GAME_WIN } from "@constants/index";
import { GameLevel } from "./level/GameLevel";
import { GameLevel1 } from "./level/GameLevel1";
import { GameLevel2 } from "./level/GameLevel2";
import { GameLevel3 } from "./level/GameLevel3";
import { GameLevel4 } from "./level/GameLevel4";
import { Airship } from "./creep/Airship";

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
  hpinc = 0.7;
  kills = 0;
  selected: Turret | null;
  turrets: Turret[] = [];
  levels: GameLevel[] = [
    new GameLevel1(),
    new GameLevel2(),
    new GameLevel3(),
    new GameLevel4(),
  ];
  level: GameLevel;

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
      this.hpinc *=
        { 2: 1.2, 3: 1.3, 4: 1.4, 5: 1.2, 10: 1.2 }[this.gameStat.wave] || 1;

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

    this.creeps
      .sort((c1, c2) =>
        c1.sprite.currentPos.y - c2.sprite.currentPos.y || c1 instanceof Airship
          ? 1
          : -1
      )
      .forEach((creep, i, a) => {
        if (creep.flying && creep.nextpoint < this.level.map.length) {
          creep.nextpoint = this.level.map[0].length - 1;
        }
        let waypoint = this.level.map[creep.wave % this.level.map.length][
          creep.nextpoint
        ];
        if (creep.sailing) {
          waypoint = this.level.waterMap[creep.nextpoint];
        }
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

  start(n = 0) {
    if (!this.level) {
      this.level = this.levels[n];
    }
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

    const score = Math.floor(
      (Math.abs(this.gameStat.cash - 60) * 1000000) / this.ticks
    );

    this.scoreCallback(score, result ? GAME_WIN : GAME_LOSE);
  }
}
