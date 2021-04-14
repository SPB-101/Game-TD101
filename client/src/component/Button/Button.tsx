import React, { useCallback } from "react";
import classNames from "classnames";

import clickAudio from "../../assets/sounds/ui_primary/ui_tap-variant-01.wav";
import "./Button.scss";

import type { Props } from "./types";

const clickSound = new Audio(clickAudio);

function playSound() {
  clickSound.play();
}

export const Button = ({
  children,
  className = "",
  onClick,
  disabled,
}: Props): JSX.Element => {
  const buttonClass = classNames("button", className);

  const handleButtonClick = useCallback((event) => {
    playSound();
    typeof onClick === "function" && onClick(event);
  }, []);

  return (
    <button
      onClick={handleButtonClick}
      className={buttonClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
