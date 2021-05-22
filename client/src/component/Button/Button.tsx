import React, { useCallback } from "react";
import classNames from "classnames";

import { isServer } from "@utils/isServer";

import type { Props } from "./types";

import clickAudio from "@assets/sounds/ui_primary/ui_tap-variant-01.wav";
import "./Button.scss";

const clickSound = !isServer
  ? new Audio(clickAudio)
  : {
      play() {
        return;
      },
    };

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
}: Props) => {
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
