import {Creep, CreepState} from "./Creep";
import {Utils, Vector} from "./Utils";
import {Defs} from "./Defs";
import {Loader} from "./Loader";
import {Selected} from "./Selected";
import {Turret} from "./Turret";
import {Missile} from "./missile/Missile";

export class Game {

    map = Defs.Loopy;

    ticks = 0;
    _ticks = 0;
    _tick = 0;
    ticker = -1;
    paused = false;
    fpsListener: (fps: number) => void;

    wave = 0;
    _wave = 0;
    creeps: Creep[] = [];
    hp = 1;
    hpinc = 1.3;

    selected: Selected | null;
    turrets: Turret[] = [];

    run: Missile[] = [];

    constructor(public cx: CanvasRenderingContext2D) {
    }

    tick() {
        this.cx.clearRect(0, 0, this.cx.canvas.width, this.cx.canvas.height);
        this.cx.drawImage(Loader.maps[Loader.imgs[0]], 0, 0, this.cx.canvas.width, this.cx.canvas.height);
        if (this.ticks - this._ticks === 60) {
            const fps = Math.round(60000 / (Date.now() - this._tick));
            this._tick = Date.now();
            this.fpsListener(fps);
            this._ticks = this.ticks;
        }

        if (this._wave + 1200 === this.ticks) {
            this.hpinc = {2: 1.2, 5: 1.15, 10: 1.1}[this.wave] || this.hpinc;
            this.hp *= this.hpinc;

            for (let i = 0; i < 10; i++) {
                const creep: Creep = new Creep(new Vector(Utils.rand(14), Utils.rand(40)));
                creep.setState(CreepState.GO_RIGHT);
                creep.setPos(new Vector(-(i * 50) - 10, this.map[0].y));
                this.creeps.push(creep);
            }

            this._wave = this.ticks;
        }

        this.turrets.forEach(turret => {
            if (turret.lastShot + turret.rate <= this.ticks) {
                turret.shoot(this);
                turret.lastShot = this.ticks;
            }
            turret.sprite.draw(this.cx);
        });

        this.creeps.forEach((creep, i, a) => {
            const waypoint = this.map[creep.nextpoint];
            if (!waypoint) {
                a.splice(i, 1);
            } else if (Utils.move(creep, new Vector(waypoint.x - 7 + creep.offset.x, waypoint.y - 7 + creep.offset.y), creep.speed)) {
                creep.nextpoint++;
            }
            creep.sprite.draw(this.cx);
        });

        if (this.selected) {

            this.cx.beginPath();
            this.cx.fillStyle = "rgba(255, 255, 255, .3)";
            this.cx.arc(this.selected.pos.x, this.selected.pos.y, 120, 0, Math.PI * 2);
            this.cx.fill();
            this.cx.closePath();
            this.cx.drawImage(this.selected.image,
                this.selected.pos.x - (this.selected.image.width as number) / 2,
                this.selected.pos.y - (this.selected.image.width as number));
        }

        this.run.forEach((missile, i, a) => {
            missile.draw(this.cx);
            if (--missile.until === 0) {
                a.splice(i, 1);
            }
        });

        // if(!this.run.length) {
        //     const electro = new Electro()
        //     electro.setState(ElectroState.SHOOT);
        //     electro.sprite.currentPos = new Vector(400, 400);
        //     this.run.push(electro)
        // }
        // this.run.forEach(electro => electro.sprite.draw(this.cx))
        this.ticks++;
    }

    start() {
        this._ticks = this.ticks;
        this._tick = Date.now();
        this.paused = false;
        this.ticker = window.setInterval(this.tick.bind(this), 1000 / 60);
        this.tick();
    }

    pause() {
        this.paused = true;
        window.clearInterval(this.ticker);
    }

    end() {

    }

}
