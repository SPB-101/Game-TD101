import React from "react";
import classNames from "classnames";

import "./Image.scss";

import { Props } from "./types";

export const Image = ({
  className,
  src,
  alt,
  width = 50,
  height = 50,
}: Props): JSX.Element => {
  const imageClass = classNames({
    [`${className}`]: !!className,
  });

  return (
    <img
      className={imageClass}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
