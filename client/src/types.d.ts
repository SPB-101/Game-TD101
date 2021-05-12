declare const VERSION: string;
declare const NODE_ENV: string;
declare const PORT_ENV: string;

declare module "*.scss";
declare module "*.wav";
declare module "*.jpg";
declare module "*.png";
declare module "*.svg" {
  const SVG: any;
  export default SVG;
}

type PartialRecord<K extends string | number | symbol, T> = { [P in K]?: T };
