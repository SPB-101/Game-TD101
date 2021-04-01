import {Missile} from "./Missile";


export class LaserMissile extends Missile {

    draw(cx: CanvasRenderingContext2D) {
        cx.lineCap = "round";
        cx.lineWidth = 2;
        cx.strokeStyle = '#add8e6';
        cx.beginPath();
        cx.moveTo(this.src.x, this.src.y);
        cx.lineTo(this.dst.x, this.dst.y);
        cx.stroke();
    }
}