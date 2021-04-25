import React from "react";
import classNames from "classnames";

import clickAudio from "../../assets/sounds/ui_primary/ui_tap-variant-02.wav";
import "./TextField.scss";

import type { Props } from "./types";

const clickSound = new Audio(clickAudio);

const handleInput = () => {
  clickSound.play();
};

export const TextField = ({
  className,
  error = "",
  name,
  label,
  type,
  ...props
}: Props): JSX.Element => {
  const fieldClass = classNames("text-field", {
    ["text-field_password"]: type === "password",
    ["text-field_error"]: !!error,
  });
  const inputClass = classNames("text-field__input", className);

  return (
    <label htmlFor={name} className={fieldClass}>
      <input
        onInput={handleInput}
        name={name}
        className={inputClass}
        {...props}
        type={type}
      />
      <div className="text-field__label">{label}</div>
      <span className="text-field__error">{error}</span>
    </label>
  );
};
