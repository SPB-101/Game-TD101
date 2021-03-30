import React from "react";
import classNames from "classnames/bind";

import clickAudio from "../../assets/sounds/ui_primary/ui_tap-variant-01.wav";
import * as styles from "./Button.scss";

const cx = classNames.bind(styles);

import type { Props } from "./types";

const clickSound = new Audio(clickAudio);
function handleClick() {
  clickSound.play();
}

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
    <button onClick={handleClick} className={classNames} {...props}>
      {children}
    </button>
  );
};
