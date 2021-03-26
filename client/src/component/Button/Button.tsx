import React from "react";
import classNames from "classnames/bind";
import * as styles from "./Button.scss";

const cx = classNames.bind(styles);

import type { Props } from "./types";

export const Button = ({
  className,
  children,
  ...props
}: Props): JSX.Element => {
  const classNames = cx({
    button: true,
    [`button-${className}`]: true,
  });

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
