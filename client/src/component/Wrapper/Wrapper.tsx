import React from "react";
import classNames from "classnames";

import "./Wrapper.scss";

import type { Props } from "./types";

export const Wrapper = ({ className, size, children, ...props }: Props) => {
  const wrapperClass = classNames(
    "wrapper",
    {
      [`wrapper_size--${size}`]: !!size,
    },
    className
  );

  return (
    <div className={wrapperClass} {...props}>
      {children}
    </div>
  );
};
