/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* правило отключено потому что мы уверены в наличии элементов управления (интерфейс) */

import { Game } from "./Game";
import { Utils, Vector } from "./Utils";
import { Turret } from "./turret/Turret";
import { TurretFactory } from "./turret/TurretFactory";
import { IS_DEV } from "@constants/index";

export class GameStat {
  cash: number;
  lives: number;
  wave: number;
}

export class PanelController {
  static updateObj: Record<string, [number, string]> = {
    teslagun: [20, "./assets/images/teslagun2.jpg"],
    lasergun: [30, "./assets/images/laser2.jpg"],
    rocketgun: [50, "./assets/images/rocketgun2.jpg"],
    icegun: [75, "./assets/images/icegun2.jpg"],
  };

  static priceObj: Record<string, [number, string, string]> = {
    teslagun: [15, "./assets/images/teslagun.jpg", "Teslagun"],
    lasergun: [25, "./assets/images/laser.jpg", "Laser"],
    rocketgun: [40, "./assets/images/rocketgun.jpg", "Rocket"],
    icegun: [60, "./assets/images/icegun.jpg", "Icegun"],
  };

  controlPause: HTMLLinkElement = document.querySelector("#control-pause")!;
  fpsInfo: HTMLSpanElement = document.querySelector("#info-fps")!;
  btnFast: HTMLButtonElement = document.querySelector("#info-fast")!;
  btnWave: HTMLButtonElement = document.querySelector("#info-wave")!;
  cashInfo: HTMLSpanElement = document.querySelector("#control-cash")!;
  livesInfo: HTMLSpanElement = document.querySelector("#control-lives")!;
  waveInfo: HTMLSpanElement = document.querySelector("#control-wave")!;
  fullscreen: HTMLImageElement = document.querySelector(".fullscreen")!;
  game: Game;

  init(game: Game) {
    this.game = game;

    const toggleFullScreen = () => {
      const $gameElement = document.querySelector("#GAME-TD-101")!;
      if (!document.fullscreenElement) {
        $gameElement.requestFullscreen();
        this.fullscreen.src = "./assets/images/fullscreen_exit.png";
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
        this.fullscreen.src = "./assets/images/fullscreen.png";
      }
    };

    this.fullscreen.onclick = () => {
      toggleFullScreen();
    };

    this.controlPause.onclick = () =>
      (this.controlPause.textContent = game.paused
        ? (game.start(), "Pause")
        : (game.pause(), "Start"));
    this.btnFast.onclick = () => {
      if (IS_DEV) {
        game.fast = !game.fast;
        this.btnFast.textContent = game.fast ? "⏩" : "▶";
        window.clearInterval(game.ticker);
        game.start();
      }
    };
    this.btnWave.onclick = () => {
      if (IS_DEV) {
        game._wave = game.ticks - 1200;
      }
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
    bind("click", document.getElementById("control-turrets")!.children, (e) => {
      // eslint-disable-next-line no-invalid-this
      const name = (e.currentTarget as HTMLElement).getAttribute("data-name")!;
      this.onPanelItemClick(name);
    });
    document.querySelector("#canvas")!.addEventListener(
      "click",
      (e: MouseEvent) => {
        this.onCanvasClick(e);
      },
      false
    );
    document.querySelector("#canvas")!.addEventListener(
      "mousemove",
      (e: MouseEvent) => {
        this.onMouseMove(e);
      },
      false
    );
  }

  onMouseMove(e: MouseEvent) {
    if (this.game.selected) {
      this.game.selected.pos = Utils.mousePos(e, this.game.cx);
      this.game.level.turretPlaces.forEach((place) => {
        const pos = this.game.selected!.pos;
        if (Utils.inRadius(pos, Utils.add(place.pos, new Vector(0, 0)), 40)) {
          place.active = true;
        } else {
          place.active = false;
        }
      });
    } else {
      this.turretHover(
        e,
        (turret) => {
          if (
            turret.level === 0 &&
            PanelController.updateObj[turret.name][0] <= this.game.gameStat.cash
          ) {
            this.game.cx.canvas.style.cursor = "pointer";
          }
        },
        () => {
          this.game.cx.canvas.style.cursor = "default";
        }
      );
    }
  }

  onCanvasClick(e: MouseEvent) {
    if (this.game.selected) {
      const turret = this.game.selected;
      const activePlaceIndex = this.game.level.turretPlaces.findIndex(
        (p) => p.active
      );
      if (activePlaceIndex != -1) {
        const p = this.game.level.turretPlaces[activePlaceIndex];
        turret.setState(turret.getStaticState(false), p.pos);
        turret.draw(this.game.cx);
        this.game.turrets.push(turret);
        this.game.level.turretPlaces.splice(activePlaceIndex, 1);
        this.game.selected = null;
        this.game.gameStat.cash -= turret.price;
      }
    } else {
      this.turretHover(
        e,
        (turret: Turret) => {
          if (
            turret.level === 1 ||
            PanelController.updateObj[turret.name][0] > this.game.gameStat.cash
          ) {
            return;
          }

          const $turret = document.body.querySelector(
            `.control-turrets_gun[data-name=${turret.name}]`
          )!;

          const $turretImg = $turret.querySelector(
            ".control-turrets_image"
          )! as HTMLImageElement;
          const $turretName = $turret.querySelector(".control-turrets_name")!;
          const $turretCost = $turret.querySelector(".control-turrets_cost")!;

          $turretImg.src = PanelController.updateObj[turret.name][1];
          $turretName.textContent = "Update";
          $turretCost.textContent = String(
            PanelController.updateObj[turret.name][0]
          );
          $turret.classList.add("control-turrets_updatable");
          turret.shouldBeUpdated = true;
        },
        () => {
          const turret = this.game.turrets.find((t) => t.shouldBeUpdated);
          if (turret) {
            const $updatable = document.querySelector(
              ".control-turrets_updatable"
            );
            if ($updatable) {
              turret.shouldBeUpdated = false;

              const $turretImg = $updatable.querySelector(
                ".control-turrets_image"
              )! as HTMLImageElement;
              const $turretName = $updatable.querySelector(
                ".control-turrets_name"
              )!;
              const $turretCost = $updatable.querySelector(
                ".control-turrets_cost"
              )!;

              $turretImg.src = PanelController.priceObj[turret.name][1];
              $turretName.textContent =
                PanelController.priceObj[turret.name][2];
              $turretCost.textContent = String(
                PanelController.priceObj[turret.name][0]
              );

              $updatable.classList.remove("control-turrets_updatable");
            }
          }
        }
      );
    }
  }

  onPanelItemClick(name: string) {
    const updatableTurret = this.game.turrets.find((t) => t.shouldBeUpdated);
    if (updatableTurret) {
      const updatableElement = document.querySelector(
        ".control-turrets_updatable"
      );
      if (
        updatableElement &&
        updatableElement.getAttribute("data-name") === name
      ) {
        const p: HTMLParagraphElement = updatableElement.getElementsByTagName(
          "p"
        )[0];
        const img: HTMLImageElement = updatableElement.getElementsByTagName(
          "img"
        )[0];
        img.src = PanelController.priceObj[name][1];
        p.textContent =
          PanelController.priceObj[name][2] +
          " ($" +
          PanelController.priceObj[name][0] +
          ")";
        updatableElement.classList.remove("control-turrets_updatable");
        updatableTurret.shouldBeUpdated = false;
        updatableTurret.level++;
        updatableTurret.setState(updatableTurret.getStaticState(false));
        this.game.gameStat.cash -= PanelController.priceObj[name][0];
      }
      return;
    }

    const turret: Turret = TurretFactory.createTurret(name)!;
    if (turret.price > this.game.gameStat.cash) {
      return;
    }
    turret.setState(turret.getStaticState(true), new Vector(-250, -250));
    this.game.selected = turret;
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
        ) &&
        !this.game.turrets.find((t) => t.shouldBeUpdated)
      ) {
        inBounds(turret);
        return;
      }
    }
    outBounds();
  }
}
