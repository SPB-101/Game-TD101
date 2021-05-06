import { Drawable } from "./Drawable";
import { FrameData } from "./FrameData";
import { Vector } from "../Utils";

export class AnimatedSprite implements Drawable {
  static drawAnchor = false;
  shouldFlip = false;
  image?: CanvasImageSource;
  currentFrames: FrameData[];
  currentIndex = -1;
  currentPos: Vector;
  scale: number;
  slowFrames: number;
  slowFrame = 0;
  tl = new Vector(-500, -500);
  width = 0;
  height = 0;

  constructor(
    image: CanvasImageSource,
    currentFrames: FrameData[],
    scale = 1,
    slowFrames = 0,
    currentIndex = 0,
    currentPos: Vector = new Vector(0, 0)
  ) {
    this.image = image;
    this.currentFrames = currentFrames;
    this.currentIndex = currentIndex;
    this.currentPos = currentPos;
    this.scale = scale;
    this.slowFrames = slowFrames;
  }

  getCurrentFrame() {
    const currentFrame = this.currentFrames[this.currentIndex];
    if (this.slowFrames > this.slowFrame) {
      this.slowFrame++;
    } else {
      this.slowFrame = 0;
      this.currentIndex = (this.currentIndex + 1) % this.currentFrames.length;
    }
    return currentFrame;
  }

  draw(cx: CanvasRenderingContext2D) {
    if (this.currentIndex === -1) return;
    if (this.image) {
      const currentFrame = this.getCurrentFrame();

      this.tl = new Vector(
        this.currentPos.x - currentFrame.spriteSourceSize.w / 2,
        this.currentPos.y - currentFrame.spriteSourceSize.h
      );
      this.width = currentFrame.spriteSourceSize.w * this.scale;
      this.height = currentFrame.spriteSourceSize.h * this.scale;

      const dx = this.currentPos.x;
      const dy = this.currentPos.y;
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

      newPosition.x = dx - (currentFrame.spriteSourceSize.w / 2) * this.scale;
      newPosition.y = dy - currentFrame.spriteSourceSize.h * this.scale;

      if (currentFrame.rotated) {
        newPosition.x = cx.canvas.height - dy;
        newPosition.y = dx - (currentFrame.spriteSourceSize.w / 2) * this.scale;
      }
      cx.save();
      if (this.shouldFlip) {
        let posX = this.currentPos.x;
        let posY = this.currentPos.y;
        if (currentFrame.rotated) {
          posX = cx.canvas.height - this.currentPos.y;
          posY = this.currentPos.x;
        }

        if (currentFrame.rotated) {
          cx.translate(0, posY);
          cx.scale(1, -1);
          cx.translate(0, -posY);
        } else {
          cx.translate(posX, 0);
          cx.scale(-1, 1);
          cx.translate(-posX, 0);
        }
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
      cx.restore();
      if (AnimatedSprite.drawAnchor) {
        let posX = this.currentPos.x;
        let posY = this.currentPos.y;
        if (currentFrame.rotated) {
          posX = cx.canvas.height - this.currentPos.y;
          posY = this.currentPos.x;
        }
        AnimatedSprite.drawArc(cx, new Vector(posX, posY));
      }
      if (currentFrame.rotated) cx.restore();
    }
  }

  static drawRect(
    cx: CanvasRenderingContext2D,
    pos: Vector,
    width: number,
    height: number
  ) {
    cx.beginPath();
    cx.rect(pos.x, pos.y, width, height);
    cx.strokeStyle = "yellow";
    cx.stroke();
    cx.closePath();
  }

  static drawArc(cx: CanvasRenderingContext2D, pos: Vector) {
    cx.beginPath();
    cx.arc(pos.x, pos.y, 2, 0, 2 * Math.PI);
    cx.fillStyle = "lime";
    cx.fill();
    cx.closePath();
  }
}
