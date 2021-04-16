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
  id,
  form,
  type,
  onClick,
  children,
  disabled,
  classType,
  className = "",
}: Props): JSX.Element => {
  const buttonClass = classNames("button", className, {
    [`button--${classType}`]: classType,
  });

  const handleButtonClick = useCallback((event) => {
    playSound();
    typeof onClick === "function" && onClick(event);
  }, []);

  return (
    <button
      id={id}
      type={type}
      form={form}
      onClick={handleButtonClick}
      className={buttonClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
