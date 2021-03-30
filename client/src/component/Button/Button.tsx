import React from "react";
import classNames from "classnames";
import "./Button.scss";

import type { Props } from "./types";

export const Button = ({
  className,
  children,
  ...props
}: Props): JSX.Element => {
  const buttonClass = classNames("button", className);

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
