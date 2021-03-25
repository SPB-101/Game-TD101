export class Game {

    ticks = 0;
    _ticks = 0;
    _tick = 0;
    ticker = -1;
    paused = false;
    fpsListener: (fps: number) => void;

    tick() {
        if (this.ticks - this._ticks === 60) {
            const fps = Math.round(60000 / (Date.now() - this._tick));
            this._tick = Date.now();
            this.fpsListener(fps);
            this._ticks = this.ticks;
        }
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
