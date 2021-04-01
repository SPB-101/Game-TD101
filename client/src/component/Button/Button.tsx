import React from "react";
import classNames from "classnames";

import clickAudio from "../../assets/sounds/ui_primary/ui_tap-variant-01.wav";
import "./Button.scss";

import type { Props } from "./types";

const clickSound = new Audio(clickAudio);

function handleClick() {
  clickSound.play();
}

export const Button = ({
  children,
  className = "",
  ...props
}: Props): JSX.Element => {
  const buttonClass = classNames("button", className);

  return (
    <button onClick={handleClick} className={buttonClass} {...props}>
      {children}
    </button>
  );
};
