/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* правило отключено потому что мы уверены в наличии элементов управления (интерфейс) */

import { Game } from "./Game";
import { Utils, Vector } from "./Utils";
import { Turret } from "./turret/Turret";
import { TurretFactory } from "./turret/TurretFactory";

export class GameStat {
  cash: number;
  lives: number;
  wave: number;
}

export class PanelController {
  controlPause: HTMLLinkElement = document.querySelector("#control-pause")!;
  fpsInfo: HTMLSpanElement = document.querySelector("#info-fps")!;
  btnFast: HTMLButtonElement = document.querySelector("#info-fast")!;
  btnWave: HTMLButtonElement = document.querySelector("#info-wave")!;
  cashInfo: HTMLSpanElement = document.querySelector("#control-cash")!;
  livesInfo: HTMLSpanElement = document.querySelector("#control-lives")!;
  waveInfo: HTMLSpanElement = document.querySelector("#control-wave")!;
  game: Game;

  init(game: Game) {
    this.game = game;
    this.controlPause.onclick = () =>
      (this.controlPause.textContent = game.paused
        ? (game.start(), "Pause")
        : (game.pause(), "Start"));
    this.btnFast.onclick = () => {
      game.fast = !game.fast;
      this.btnFast.textContent = game.fast ? "⏩" : "▶";
      window.clearInterval(game.ticker);
      game.start();
    };
    this.btnWave.onclick = () => {
      game._wave = game.ticks - 1200;
    };
    game.fpsListener = (fps: number) => {
      this.fpsInfo.textContent = fps.toString();
    };
    game.gameStatListener = (gameStat: GameStat) => {
      this.cashInfo.textContent = gameStat.cash.toString();
      this.livesInfo.textContent = gameStat.lives.toString();
      this.waveInfo.textContent = gameStat.wave.toString();
    };
    document.onkeydown = (e: KeyboardEvent) => {
      if (!game.paused) {
        switch (e.code) {
          case "Escape":
            game.selected = null;
            game.level.turretPlaces.forEach((p) => (p.active = false));
            break;
          default:
            break;
        }
      }
    };
    const bind = (
      evt: string,
      elems: HTMLCollection,
      fn: EventListenerOrEventListenerObject
    ) => {
      [...elems].forEach((elem: Node) => {
        elem.addEventListener(evt, fn, false);
      });
    };
    bind(
      "click",
      document.getElementById("control-turrets")!.children,
      function () {
        // eslint-disable-next-line no-invalid-this
        const name = this.getAttribute("data-name");

        const obj = {
          teslagun: [15, "./assets/images/teslagun.jpg", "Teslagun"],
          lasergun: [25, "./assets/images/laser.jpg", "Laser"],
          rocketgun: [40, "./assets/images/rocketgun.jpg", "Rocket"],
          icegun: [60, "./assets/images/icegun.jpg", "Icegun"],
        };

        const ts = document.getElementById("control-turrets")!.children;
        for (const turr of [...ts]) {
          const updatable = turr.classList.contains(
            "control-turrets_updatable"
          );
          if (updatable) {
            if (name === turr.getAttribute("data-name")) {
              console.log("Update ", name);
              const p: HTMLParagraphElement = turr.getElementsByTagName("p")[0];
              const img: HTMLImageElement = turr.getElementsByTagName("img")[0];
              img.src = obj[name][1];
              p.textContent = obj[name][2] + " ($" + obj[name][0] + ")";
              turr.classList.remove("control-turrets_updatable");
            }
            return;
          }
        }

        const turret: Turret = TurretFactory.createTurret(name)!;
        if (turret.price > game.gameStat.cash) {
          return;
        }
        turret.setState(turret.getStaticState(true), new Vector(-250, -250));
        game.selected = turret;
      }
    );
    document.querySelector("#canvas")!.addEventListener(
      "click",
      (e: MouseEvent) => {
        if (game.selected) {
          const turret = game.selected;
          const activePlaceIndex = game.level.turretPlaces.findIndex(
            (p) => p.active
          );
          if (activePlaceIndex != -1) {
            const p = game.level.turretPlaces[activePlaceIndex];
            turret.setState(turret.getStaticState(false), p.pos);
            turret.draw(game.cx);
            game.turrets.push(turret);
            game.level.turretPlaces.splice(activePlaceIndex, 1);
            game.selected = null;
            game.gameStat.cash -= turret.price;
          }
        } else {
          const obj = {
            teslagun: [20, "./assets/images/teslagun2.jpg"],
            lasergun: [30, "./assets/images/laser2.jpg"],
            rocketgun: [50, "./assets/images/rocketgun2.jpg"],
            icegun: [75, "./assets/images/icegun2.jpg"],
          };
          this.turretHover(
            e,
            (turret: Turret) => {
              const ts = document.getElementById("control-turrets")!.children;
              [...ts].forEach((turretElement) => {
                const name = turretElement.getAttribute("data-name");
                if (name === turret.name) {
                  console.log("In bounds ", turret.name);

                  const p: HTMLParagraphElement = turretElement.getElementsByTagName(
                    "p"
                  )[0];
                  const img: HTMLImageElement = turretElement.getElementsByTagName(
                    "img"
                  )[0];
                  img.src = obj[turret.name][1];
                  p.textContent = "Update ($" + obj[turret.name][0] + ")";
                  turretElement.classList.add("control-turrets_updatable");
                }
              });
            },
            () => {
              console.log("Out bounds");
            }
          );
        }
      },
      false
    );
    document.querySelector("#canvas")!.addEventListener(
      "mousemove",
      (e: MouseEvent) => {
        if (game.selected) {
          game.selected.pos = Utils.mousePos(e, game.cx);
          game.level.turretPlaces.forEach((place) => {
            const pos = game.selected!.pos;
            if (
              Utils.inRadius(pos, Utils.add(place.pos, new Vector(0, 0)), 40)
            ) {
              place.active = true;
            } else {
              place.active = false;
            }
          });
        } else {
          this.turretHover(
            e,
            () => {
              this.game.cx.canvas.style.cursor = "pointer";
            },
            () => {
              this.game.cx.canvas.style.cursor = "default";
            }
          );
        }
      },
      false
    );
  }

  turretHover(
    e: MouseEvent,
    inBounds: (turret: Turret) => void,
    outBounds: () => void
  ) {
    for (const turret of this.game.turrets) {
      const sprite = turret.currState.getSprite();
      const mousePos = Utils.mousePos(e, this.game.cx);
      if (
        Utils.inBounds(
          mousePos,
          sprite.tl,
          new Vector(sprite.tl.x + sprite.width, sprite.tl.y + sprite.height)
        )
      ) {
        inBounds(turret);
        return;
      }
    }
    outBounds();
  }
}
