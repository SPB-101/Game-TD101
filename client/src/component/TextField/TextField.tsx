import React from "react";
import classNames from "classnames";

import type { Props } from "./types";

import "./TextField.scss";
import clickAudio from "@assets/sounds/ui_primary/ui_tap-variant-02.wav";
import { isServer } from "@utils/isServer";

const clickSound = !isServer
  ? new Audio(clickAudio)
  : {
      play() {
        return;
      },
    };

const handleInput = () => {
  clickSound.play();
};

export const TextField = ({
  className,
  error = "",
  name,
  label,
  type,
  placeholder,
  ...props
}: Props) => {
  const fieldClass = classNames("text-field", {
    ["text-field_password"]: type === "password",
    ["text-field_error"]: !!error,
  });
  const inputClass = classNames("text-field__input", className);

  return (
    <label htmlFor={name} className={fieldClass}>
      <input
        autoComplete="off"
        onInput={handleInput}
        name={name}
        className={inputClass}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      <div className="text-field__label">{label}</div>
      <span className="text-field__error">{error}</span>
    </label>
  );
};
