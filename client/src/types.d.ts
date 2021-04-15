declare module "*.scss";
declare module "*.wav";
declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const NODE_ENV: string;
declare const VERSION: string;
