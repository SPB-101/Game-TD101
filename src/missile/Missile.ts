import {Vector} from "../Utils";

export abstract class Missile {

    until: number = 6;
    dst: Vector;
    src: Vector;

    constructor(src: Vector, dst: Vector, until: number) {
        this.until = until;
        this.dst = dst;
        this.src = src;
    }

    abstract draw(cx: CanvasRenderingContext2D)
}