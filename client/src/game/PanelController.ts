import { Game } from "./Game";
import { Utils, Vector } from "./Utils";
import { Turret } from "./turret/Turret";
import { TurretFactory } from "./turret/TurretFactory";

export class PanelController {
  controlPause: HTMLLinkElement = document.querySelector("#control-pause")!;
  fpsInfo: HTMLSpanElement = document.querySelector("#control-fps")!;

  init(game: Game) {
    this.controlPause.onclick = () =>
      (this.controlPause.textContent = game.paused
        ? (game.start(), "Pause")
        : (game.pause(), "Start"));
    game.fpsListener = (fps: number) => {
      this.fpsInfo.textContent = fps.toString();
    };
    document.onkeydown = (e: KeyboardEvent) => {
      if (!game.paused) {
        switch (e.code) {
          case "Enter":
            game._wave = game.ticks - 1200;
            break;
          case "Escape":
            game.selected = null;
            game.places.forEach((p) => (p.active = false));
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
        const turret: Turret = TurretFactory.createTurret(name)!;
        turret.setState(turret.getStaticState(true), new Vector(-250, -250));
        game.selected = turret;
      }
    );
    document.querySelector("#canvas")!.addEventListener(
      "click",
      function () {
        if (game.selected) {
          const turret = game.selected;
          const activePlaceIndex = game.places.findIndex((p) => p.active);
          if (activePlaceIndex != -1) {
            const p = game.places[activePlaceIndex];
            turret.setState(turret.getStaticState(false), p.pos);
            game.turrets.push(turret);
            game.places.splice(activePlaceIndex, 1);
            game.selected = null;
          }
        }
      },
      false
    );
    document.querySelector("#canvas")!.addEventListener(
      "mousemove",
      function (e: MouseEvent) {
        if (game.selected) {
          game.selected.pos = Utils.mousePos(e, game.cx);

          game.places.forEach((place) => {
            const pos = game.selected!.pos;
            if (
              Utils.inRadius(pos, Utils.add(place.pos, new Vector(0, 0)), 40)
            ) {
              place.active = true;
            } else {
              place.active = false;
            }
          });
        }
      },
      false
    );
  }
}
