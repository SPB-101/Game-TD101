import {Creep, CreepState} from "./Creep";
import {Utils, Vector} from "./Utils";
import {Defs} from "./model/Defs";
import {Loader} from "./Loader";
import {Turret} from "./turret/Turret";
import {Missile} from "./missile/Missile";
import {Drawable} from "./model/Drawable";
import {TurretPlace} from "./TurretPlace";

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

    selected: Turret | null;
    turrets: Turret[] = [];

    places: TurretPlace[] = [new TurretPlace(new Vector(200, 270), false),
        new TurretPlace(new Vector(200, 470), false),
        new TurretPlace(new Vector(815, 270), false),
        new TurretPlace(new Vector(815, 470), false),
        new TurretPlace(new Vector(450, 410), false),
        new TurretPlace(new Vector(450, 320), false),
        new TurretPlace(new Vector(580, 410), false),
        new TurretPlace(new Vector(580, 320), false),
        new TurretPlace(new Vector(500, 125), false),
        new TurretPlace(new Vector(500, 620), false)
    ];

    run: Drawable[] = [];

    constructor(public cx: CanvasRenderingContext2D) {
    }

    tick() {
        this.cx.clearRect(0, 0, this.cx.canvas.width, this.cx.canvas.height);
        this.cx.drawImage(Loader.maps[Loader.imgs[0]], 0, 0, this.cx.canvas.width, this.cx.canvas.height);
        this.places.forEach(place => place.draw(this.cx))
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
            turret.draw(this.cx);
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
            this.selected.draw(this.cx);
        }

        this.run.forEach((items, i, a) => {
            items.draw(this.cx);
            if(items instanceof Missile) {
                if (--items.until === 0) {
                    a.splice(i, 1);
                }
            }
        });
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
