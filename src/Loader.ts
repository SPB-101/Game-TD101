import background from './img/map_1.jpg';

export class Loader {

    static map: CanvasImageSource;

    static load(cb: () => void) {
        const img = new Image();
        img.src = background;
        img.onload = () => {
            this.map = img;
            cb();
        };
    }

}