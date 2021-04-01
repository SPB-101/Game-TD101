import {Game} from "./Game";
import {Vector} from "./Utils";
import {TurretShootAround, TurretStatic, Turret, TurretState} from "./Turret";

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
            game.selected = new Turret(name);
            game.selected.setState(new TurretStatic());
            game.selected.pos = new Vector(-250, -250);
        });
        document.querySelector('#canvas')!.addEventListener('click', function (e: MouseEvent) {
            if (game.selected) {
                const turret = new Turret(game.selected.name);
                turret.setState(new TurretShootAround());
                const rect = game.cx.canvas.getBoundingClientRect();
                const tx = Math.ceil(e.clientX - rect.left);
                const ty = Math.ceil(e.clientY - rect.top);
                turret.pos = new Vector(tx, ty);
                game.turrets.push(turret);
                game.selected = null;
            }
        }, false);
        document.querySelector("#canvas")!.addEventListener('mousemove', function (e: MouseEvent) {
            if (game.selected) {
                const rect = game.cx.canvas.getBoundingClientRect();
                const tx = Math.ceil(e.clientX - rect.left);
                const ty = Math.ceil(e.clientY - rect.top);
                game.selected.pos = new Vector(tx, ty);
            }
        }, false);

    }

}