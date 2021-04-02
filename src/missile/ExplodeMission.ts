import {Missile} from "./Missile";
import {Vector} from "../Utils";
import {AnimatedSprite} from "../model/AnimatedSprite";


export class ExplodeMission extends Missile {

    constructor(private sprite: AnimatedSprite, dst: Vector, until: number) {
        super(new Vector(-1, -1), dst, until);
        this.sprite.currentPos = dst;
    }

    draw(cx: CanvasRenderingContext2D) {
        /*cx.lineCap = "round";
        cx.lineWidth = 2;
        cx.strokeStyle = '#add8e6';
        cx.beginPath();
        cx.moveTo(this.src.x, this.src.y);
        cx.lineTo(this.dst.x, this.dst.y);
        cx.stroke();*/
        this.sprite.draw(cx);
    }
}