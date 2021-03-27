import {Creep} from "./Creep";
import {Utils, Vector} from "./Utils";
import {Defs} from "./Defs";
import {Loader} from "./Loader";
import {AnimatedSprite} from "./AnimatedSprite";

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

    constructor(private cx: CanvasRenderingContext2D) {
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
                const creep: Creep = {
                    pos: new Vector(-(i * 20) - 10, this.map[0].y),
                    offset: new Vector(Utils.rand(14), Utils.rand(5)),
                    nextpoint: 0,
                    speed: 3,
                    hp: 1,
                    burning: false,
                    slowfor: 0
                } as Creep;
                creep.sprite = new AnimatedSprite();
                this.creeps.push(creep);
            }

            this._wave = this.ticks;
        }

        this.creeps.forEach((creep, i, a) => {
            const waypoint = this.map[creep.nextpoint];
            if(!waypoint) {
                delete a[i];
            } else if (Utils.move(creep, new Vector(waypoint.x - 7 + creep.offset.x, waypoint.y - 7 + creep.offset.y), creep.speed)) {
                creep.nextpoint++;
            }
            creep.sprite.draw(this.cx);
            /*this.cx.beginPath();
            this.cx.strokeStyle = 'yellow';
            this.cx.rect(creep.pos.x - 5, creep.pos.y - 5, 10, 10);
            this.cx.stroke();*/
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
