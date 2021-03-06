import { Creep } from "./creep/Creep";

export class Vector {
  constructor(public x: number, public y: number) {}
}

export class Utils {
  static rand = (max: number) => Math.floor(Math.random() * (max + 1));

  static move = (obj: Creep, target: Vector, speed: number) => {
    const distX = target.x - obj.sprite.currentPos.x;
    const distY = target.y - obj.sprite.currentPos.y;
    const angle = Math.atan2(distY, distX);
    obj.setPos(
      new Vector(
        obj.sprite.currentPos.x + speed * Math.cos(angle),
        obj.sprite.currentPos.y + speed * Math.sin(angle)
      )
    );
    return (distX < 0 ? -distX : distX) + (distY < 0 ? -distY : distY) < 2;
  };

  static len = (src: Vector, dst: Vector) =>
    Math.sqrt(Math.pow(dst.x - src.x, 2) + Math.pow(dst.y - src.y, 2));

  static mult = (src: Vector, dst: Vector, n: number) =>
    new Vector(src.x + (dst.x - src.x) * n, src.y + (dst.y - src.y) * n);

  static inRadius = (src: Vector, dst: Vector, radius: number) =>
    (dst.x - src.x) * (dst.x - src.x) + (dst.y - src.y) * (dst.y - src.y) <
    radius * radius;

  static inBounds = (src: Vector, tl: Vector, br: Vector) =>
    src.x > tl.x && src.x < br.x && src.y > tl.y && src.y < br.y;

  static mousePos = (e: MouseEvent, cx: CanvasRenderingContext2D) => {
    const rect = cx.canvas.getBoundingClientRect();
    const originalWidth = 1024;
    const originalHeight = 768;

    const currentWidth = rect.width;
    const currentHeight = rect.height;

    const ratioWidth = currentWidth / originalWidth;
    const ratioHeight = currentHeight / originalHeight;

    const biasX = document.fullscreenElement ? rect.left / 2 : rect.left;
    const biasY = document.fullscreenElement ? rect.top / 2 : rect.top;

    const tx = e.clientX / ratioWidth - biasX;
    const ty = e.clientY / ratioHeight - biasY;

    return new Vector(tx, ty);
  };

  static add = (src: Vector, dst: Vector) =>
    new Vector(src.x + dst.x, src.y + dst.y);
}
