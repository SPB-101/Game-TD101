import {Game} from "./Game";
import {Utils, Vector} from "./Utils";
import {Turret} from "./turret/Turret";
import {TurretFactory} from "./turret/TurretFactory";

export class PanelController {

    controlPause: HTMLLinkElement = document.querySelector('#control-pause')!;
    fpsInfo: HTMLSpanElement = document.querySelector('#control-fps')!;

    init(game: Game) {
        this.controlPause.onclick = () => this.controlPause.textContent = game.paused ? (game.start(), "Pause") : (game.pause(), "Start");
        game.fpsListener = (fps: number) => {
            this.fpsInfo.textContent = fps.toString();
        };
        document.onkeydown = (e: KeyboardEvent) => {
            if (!game.paused) {
                switch (e.keyCode) {
                    case 13:
                        game._wave = game.ticks - 1200;
                        break;
                    default:
                        break;
                }
            }
        };
        const bind = (evt, elems, fn) => {
            Array.prototype.slice.call(elems).forEach(function (elem) {
                elem.addEventListener(evt, fn, false);
            });
        };
        bind('click', document.getElementById('control-turrets')!.children, function (e: MouseEvent) {
            const name = this.getAttribute('data-name');
            const turret: Turret = TurretFactory.createTurret(name)!;
            turret.setState(turret.getStaticState(), new Vector(-250, -250));
            game.selected = turret;
        });
        document.querySelector('#canvas')!.addEventListener('click', function (e: MouseEvent) {
            if (game.selected) {
                const turret = game.selected;
                turret.setState(turret.getShootAroundState(), Utils.mousePos(e, game.cx));
                game.turrets.push(turret);
                game.selected = null;
            }
        }, false);
        document.querySelector("#canvas")!.addEventListener('mousemove', function (e: MouseEvent) {
            if (game.selected) {
                game.selected.pos = Utils.mousePos(e, game.cx);
            }
        }, false);

    }

}