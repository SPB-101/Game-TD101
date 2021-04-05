export interface Frame {
  x: number;
  y: number;
  w: number;
  h: number;
}

export class FrameData {
  frame: Frame;
  rotated: boolean;
  spriteSourceSize: Frame;
}
