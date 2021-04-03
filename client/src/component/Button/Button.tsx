import React from "react";
import classNames from "classnames";

import clickAudio from "../../assets/sounds/ui_primary/ui_tap-variant-01.wav";
import "./Button.scss";

import type { Props } from "./types";

const clickSound = new Audio(clickAudio);

function playSound() {
  console.log("sound after button was clicked");
  clickSound.play();
}

export const Button = ({
  children,
  className = "",
  handleClick,
  ...props
}: Props): JSX.Element => {
  const buttonClass = classNames("button", className);

  return (
    <button
      onClick={(event) => {
        playSound();
        typeof handleClick === "function" && handleClick(event);
      }}
      className={buttonClass}
      {...props}
    >
      {children}
    </button>
  );
};
