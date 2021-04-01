import {Vector} from "../Utils";
import {Loader} from "../Loader";


export class Selected {
    image: CanvasImageSource;
    pos: Vector;
    name: string;

    constructor(name: string, pos: Vector) {
        this.image = Loader.getImageMap(name);
        this.pos = pos;
        this.name = name;
    }
}