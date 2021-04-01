import {Drawable} from "./Drawable";
import {FrameData} from "./FrameData";
import {Vector} from "../Utils";

export class AnimatedSprite implements Drawable {

    image?: CanvasImageSource;
    currentFrames: FrameData[];
    currentIndex: number = -1;
    currentPos: Vector;
    scale: number;
    slowFrames: number;
    slowFrame: number = 0;

    constructor(image: CanvasImageSource, currentFrames: FrameData[], scale: number = 1, slowFrames: number = 0, currentIndex: number = 0, currentPos: Vector = new Vector(0, 0)) {
        this.image = image;
        this.currentFrames = currentFrames;
        this.currentIndex = currentIndex;
        this.currentPos = currentPos;
        this.scale = scale;
        this.slowFrames = slowFrames;
    }

    getCurrentFrame() {
        const currentFrame = this.currentFrames[this.currentIndex];
        if(this.slowFrames > this.slowFrame) {
            this.slowFrame++
        } else {
            this.slowFrame = 0;
            this.currentIndex = (this.currentIndex + 1) % this.currentFrames.length;
        }
        return currentFrame;
    }

    draw(cx: CanvasRenderingContext2D) {
        if (this.currentIndex === -1) return;
        if (this.image) {
            const currentFrame = this.getCurrentFrame()

            let dx = this.currentPos.x,
                dy = this.currentPos.y;
            const newSize = {
                w: currentFrame.frame.w,
                h: currentFrame.frame.h,
            };
            const newPosition = {
                x: 0,
                y: 0,
            };

            if (currentFrame.rotated) {
                cx.save();
                cx.translate(cx.canvas.width / 2, cx.canvas.height / 2);
                cx.rotate(-Math.PI / 2);
                cx.translate(-cx.canvas.height / 2, -cx.canvas.width / 2);
                newSize.w = currentFrame.frame.h;
                newSize.h = currentFrame.frame.w;
            }

            newPosition.x = dx - (currentFrame.spriteSourceSize.w / 2 * this.scale);
            newPosition.y = dy - (currentFrame.spriteSourceSize.h * this.scale);

            if (currentFrame.rotated) {
                newPosition.x = cx.canvas.height - dy;
                newPosition.y = dx - (currentFrame.spriteSourceSize.w / 2 * this.scale);
            }

            cx.drawImage(
                this.image,
                currentFrame.frame.x,
                currentFrame.frame.y,
                newSize.w,
                newSize.h,
                newPosition.x,
                newPosition.y,
                newSize.w * this.scale,
                newSize.h * this.scale
            );

            cx.beginPath();
            let posX = this.currentPos.x;
            let posY = this.currentPos.y;
            if (currentFrame.rotated) {
                posX = cx.canvas.height - this.currentPos.y;
                posY = this.currentPos.x;
            }

            cx.arc(posX, posY, 4, 0, 2 * Math.PI);
            cx.fillStyle = 'lime';
            cx.fill();
            cx.closePath();

            if (currentFrame.rotated) cx.restore();

        }
    }

}