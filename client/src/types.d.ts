import React from "react";
import { State } from "@reducers/index";

declare module "*.scss";
declare module "*.wav";
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";

declare module "*.svg" {
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare global {
  interface Window {
    __INITIAL_STATE__: State;
  }
  const VERSION: string;
  const NODE_ENV: string;
  const PORT_ENV: string;
}

type PartialRecord<K extends string | number | symbol, T> = { [P in K]?: T };
