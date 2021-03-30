import React from "react";

import clickAudio from "../../assets/sounds/ui_primary/ui_tap-variant-01.wav";
import "./Button.scss";

import type { Props } from "./types";

const clickSound = new Audio(clickAudio);
function handleClick() {
  clickSound.play();
}

export const Button = ({ children, ...props }: Props): JSX.Element => {
  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};
