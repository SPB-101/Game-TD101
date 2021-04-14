/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* правило отключено потому что мы уверены в наличии элементов управления (интерфейс) */

import { Creep } from "./creep/Creep";
import { Utils, Vector } from "./Utils";
import { Defs } from "./model/Defs";
import { AnimationType, Loader } from "./model/Loader";
import { Turret } from "./turret/Turret";
import { Missile } from "./missile/Missile";
import { Drawable } from "./model/Drawable";
import { TurretPlace } from "./turret/TurretPlace";
import { ExplodeMissile } from "./missile/ExplodeMissile";
import { AnimatedSprite } from "./model/AnimatedSprite";
import { GameStat } from "./PanelController";

export class Game {
  map = Defs.Loopy;
  ticks = 0;
  _ticks = 0;
  _tick = 0;
  ticker = -1;
  paused = false;
  fast = false;
  fpsListener: (fps: number) => void;
  gameStatListener: (gameStat: GameStat) => void;
  scoreCallback: (score: number) => void;
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

  places: TurretPlace[] = [
    new TurretPlace(new Vector(200, 270), false),
    new TurretPlace(new Vector(200, 470), false),
    new TurretPlace(new Vector(815, 270), false),
    new TurretPlace(new Vector(815, 470), false),
    new TurretPlace(new Vector(450, 410), false),
    new TurretPlace(new Vector(450, 320), false),
    new TurretPlace(new Vector(580, 410), false),
    new TurretPlace(new Vector(580, 320), false),
    new TurretPlace(new Vector(500, 125), false),
    new TurretPlace(new Vector(500, 620), false),
  ];

  run: Drawable[] = [];

  constructor(public cx: CanvasRenderingContext2D) {}

  tick() {
    this.cx.clearRect(0, 0, this.cx.canvas.width, this.cx.canvas.height);
    this.cx.drawImage(
      Loader.getImageMap("map_1"),
      0,
      0,
      this.cx.canvas.width,
      this.cx.canvas.height
    );
    this.places.forEach((place) => place.draw(this.cx));
    if (this.ticks - this._ticks === 60) {
      const fps = Math.round(60000 / (Date.now() - this._tick));
      this._tick = Date.now();
      this.fpsListener(fps);
      this._ticks = this.ticks;
    }

    if (this._wave + 1200 === this.ticks) {
      this.gameStat.wave++;
      this.hpinc *= { 2: 1.2, 5: 1.2, 10: 1.2 }[this.gameStat.wave] || 1;

      for (let i = 0; i < 10; i++) {
        const creep: Creep = new Creep(
          new Vector(Utils.rand(14), Utils.rand(40)),
          Utils.rand(this.map.length),
          this.hpinc
        );
        creep.setPos(
          new Vector(
            -(i * 50) - 10,
            this.map[creep.wave % this.map.length][0].y
          )
        );
        creep.draw(this.cx);
        this.creeps.push(creep);
      }

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
      const waypoint = this.map[creep.wave % this.map.length][creep.nextpoint];
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
    if (this.gameStat.wave === 10) {
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
    this.cx.fillStyle = "rgba(0, 0, 0, 0.6)";
    this.cx.fillRect(0, 0, 1024, 768);
    const div: HTMLElement = document.getElementById("overlay")!;
    div.style.display = "block";
    const showMessage = (message: string, score = "0") => {
      const mess: HTMLParagraphElement = div.querySelector("#overlay-message")!;
      const pScore: HTMLParagraphElement = div.querySelector("#overlay-score")!;
      mess.textContent = message;
      pScore.textContent = "score: " + score;
    };
    const score = Math.floor(
      (Math.abs(this.gameStat.cash - 60) * 1000000) / this.ticks
    );
    this.scoreCallback(score);
    if (this.gameStat.lives > 0) {
      showMessage("You win!", score.toString());
    } else {
      showMessage("You loose!");
    }
    const btnMenu: HTMLButtonElement = div.querySelector("#overlay-menu")!;
    btnMenu.onclick = () => (window.location.hash = "/menu");
    const btnAgain: HTMLButtonElement = div.querySelector("#overlay-again")!;
    btnAgain.onclick = () => window.location.reload();
  }
}
